import React from "react";
import axios from "axios";

import { fetchGeolocation, getGeoFieldKeys, replacePlaceholders, transformedObject } from "../utils.js";


import NormalFormView from "./NormalFormView.js";
import type { FormProps } from "../InfoView.types.js";

import { sqlClient } from "../service.js";

export default function LogiksForm({
  formJson = { title: "", fields: {}, source: {} },
  methods = {},
  userid = null,
  onCancel = () => { },
  components = {},
  callback = () => { },
  initialvalues = {},
  setEditData,
  module_refid

}: FormProps) {



  const sqlOpsUrls = formJson.endPoints;
  const refid = formJson?.source?.refid;


  const [resolvedData, setResolvedData] = React.useState<Record<string, any>>(initialvalues);


  const geoFieldKeys = React.useMemo(() => {
    return getGeoFieldKeys(formJson.fields)
  }, [formJson.fields]);


  // ---------- Fetch Initial Data ----------
  React.useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const source = formJson?.source ?? {};
      if (!source?.type) {
        if (isMounted) setResolvedData({});
        return;
      }

      if (source.type === "method") {
        const methodName = source.method as keyof typeof methods | undefined;
        const methodFn = methodName ? methods[methodName] : undefined;
        if (methodFn) {
          try {
            const result = await Promise.resolve(methodFn());
            if (isMounted) setResolvedData(result ?? {});
          } catch (err) {
            console.error("Method execution failed:", err);
            if (isMounted) setResolvedData({});
          }
        } else {
          if (isMounted) setResolvedData({});
        }
      }

      if (source.type === "api" && sqlOpsUrls?.operation !== "create") {
        try {
          const response = await axios({
            method: source.method || "GET",
            url: source.url ?? "",
            data: source.body ?? {},
            params: source.params ?? {},
            headers: source.headers ?? {},
          });
          if (isMounted) setResolvedData(response.data ?? {});
        } catch (err) {
          console.error("API fetch failed:", err);
          if (isMounted) setResolvedData({});
        }
      }

      if ((source.type === "sql" &&
        source.refid &&
        source.refid !== "0" &&
        sqlOpsUrls?.operation !== "create") ||
        (sqlOpsUrls?.operation !== "create" && source.dbopsid)) {

        if (!sqlOpsUrls) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }

        try {

          const data = await sqlClient.fetch(sqlOpsUrls, {
            source: {
              ...source,
              table: source.table,
              columns: source.columns,
              "where": replacePlaceholders(source.where, {
                refid: refid,
              }),
            },
            fields: transformedObject(formJson.fields, sqlOpsUrls.operation),

          }, source?.dbopsid, module_refid);

          if (isMounted) setResolvedData(data);
        } catch (err) {
          console.error("API fetch failed:", err);
        }
      }
    };

    fetchData();
    return () => { isMounted = false; };
  }, [
    userid,
    formJson?.source?.type || "",
    formJson?.source?.method || "",
    formJson?.source?.url || "",
    JSON.stringify(formJson?.source?.params ?? {}),
    JSON.stringify(formJson?.source?.body ?? {}),
    JSON.stringify(formJson?.source?.headers ?? {})
  ]);





  // ---------- Handle Form Submission ----------
  const handleSubmit = async (values: Record<string, any>) => {
    const source = formJson?.source ?? {};

    let geo: string | null = null;

    if (geoFieldKeys.length > 0) {
      try {
        geo = await fetchGeolocation();

      } catch (err) {
        console.log("catch fetchGeolocation", err);
        geo = null;
      }
    }

    const finalValues = {
      ...values,
      ...Object.fromEntries(
        geoFieldKeys.map((key) => [key, geo])
      ),
    };


    if (source.type === "method") {
      const methodName = source.method as keyof typeof methods | undefined;
      const methodFn = methodName ? methods[methodName] : undefined;
      if (methodFn) {
        try {
          const res = await Promise.resolve(methodFn(finalValues));
          setEditData?.(null);
          callback?.(res);

        } catch (err) {
          callback?.(err)
          console.error("Method execution failed:", err);
        }
      }
    }

    if (source.type === "api") {
      if (!sqlOpsUrls) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const res = await axios({
          method: source.method || "POST",
          url: sqlOpsUrls.baseURL + source.endpoint,
          data: finalValues ?? {},
          headers: {
            "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
          },
        });
        setEditData?.(null);
        callback?.(res)
      } catch (err) {
        callback?.(err)
        console.error("API fetch failed:", err);
      }
    }

    if (source.type === "sql") {

      const sqlOpsUrls = formJson.endPoints;

      if (!sqlOpsUrls) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }

      try {

        let skipquery = false;
        let dbopsId;

        if (source?.dbopsid) {
          skipquery = true;
          dbopsId = source?.dbopsid;
        }

        const resHashId = await axios({
          method: "GET",
          url: sqlOpsUrls.baseURL + sqlOpsUrls.dbopsGetHash,
          headers: {
            "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
          },
        });


        if (!skipquery) {

          let query = {
            ...source
          }

          if (source.where) {
            query = {
              ...source,
              "where": replacePlaceholders(source.where, {
                refid: refid,
              }),
            }
          }

          const resQueryId = await axios({
            method: "POST",
            url: sqlOpsUrls.baseURL + sqlOpsUrls.dbopsGetRefId,
            data: {
              "operation": sqlOpsUrls.operation,
              "source": query,
              "fields": transformedObject(formJson.fields, sqlOpsUrls.operation),
              "forcefill": formJson.forcefill,
              "datahash": resHashId.data.refhash,
              "scrid": module_refid

            },

            headers: {
              "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
            },
          });
          dbopsId = resQueryId?.data.refid;

        }

        const res = await axios({
          method: "POST",
          url: sqlOpsUrls.baseURL + sqlOpsUrls[sqlOpsUrls.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            "refid": dbopsId,
            "fields": finalValues,
            "datahash": resHashId.data.refhash
          },
          headers: {
            "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
          },
        });
        setEditData?.(null);
        callback?.(res)
      } catch (err) {
        callback?.(err)
        console.error("API fetch failed:", err);
      }
    }
  };



  const formView = {


    "simple": <NormalFormView
      title={formJson?.title ?? ""}
      fields={formJson.fields}
      data={resolvedData}
      onSubmit={handleSubmit}
      onCancel={onCancel}
      methods={methods}
      components={components}
      {...(sqlOpsUrls ? { sqlOpsUrls } : {})}
      refid={refid}
      module_refid={module_refid}

    />
  };

  return (
    <div className="relative">
      {formView.simple}
    </div>
  );
}
