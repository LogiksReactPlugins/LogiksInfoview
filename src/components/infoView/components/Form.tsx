import React from "react";
import axios from "axios";

import { fetchGeolocation, getErrorMessage, getGeoFieldKeys, getSuccessMessage, replacePlaceholders, transformedObject } from "../utils.js";


import NormalFormView from "./NormalFormView.js";
import type { FormProps } from "../InfoView.types.js";

import { sqlClient } from "../service.js";

export default function LogiksForm({
  formJson,
  methods = {},
  onCancel = () => { },
  components = {},
  callback = () => { },
  initialvalues,
  setEditData,
  toast

}: FormProps) {

  const sqlOpsUrls = formJson.endPoints;
  const refid = formJson?.source?.refid;
  const [resolvedData, setResolvedData] = React.useState<Record<string, any>>(initialvalues ?? {});
  const geoFieldKeys = React.useMemo(() => {
    return getGeoFieldKeys(formJson.fields)
  }, [formJson.fields]);

  React.useEffect(() => {
    let isMounted = true;

    const initGeo = async () => {

      try {
        const geo = await fetchGeolocation();

        if (isMounted) {
          setResolvedData(prev => ({
            ...prev,
            ...Object.fromEntries(
              geoFieldKeys.map(key => [key, geo])
            ),
          }));
        }
      } catch (err) {
        console.warn("Geo fetch failed", err);
      }
    };

    initGeo();

    return () => {
      isMounted = false;
    };
  }, [geoFieldKeys]);


  React.useEffect(() => {
    setResolvedData(initialvalues ?? {});
  }, [initialvalues]);

  const safeSetResolvedData = React.useCallback(
    (data?: Record<string, any>) => {
      if (data && Object.keys(data).length > 0) {
        setResolvedData(data);
      }
    },
    []
  );

  // ---------- Fetch Initial Data ----------
  React.useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const source = formJson?.source ?? {};
      if (!source?.type) {

        return;
      }

      if (source.type === "method" && sqlOpsUrls?.operation !== "create") {
        const methodName = source.method as keyof typeof methods | undefined;
        const methodFn = methodName ? methods[methodName] : undefined;
        if (methodFn) {
          try {
            const result = await methodFn();
            if (isMounted) safeSetResolvedData(result);
          } catch (err) {
            console.error("Method execution failed:", err);

          }
        }
      }

      if (source.type === "api" && sqlOpsUrls?.operation !== "create") {
        try {
          const config = {
            method: source.method || "GET",
            url: sqlOpsUrls?.baseURL + source.endpoint,

            headers: {
              "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
            },
            ...(source.method === "GET"
              ? { params: { refid: source.refid } }
              : { data: { refid: source.refid } }),
          }
          const response = await axios(config);

          if (isMounted) safeSetResolvedData(response.data);
        } catch (err) {
          console.error("API fetch failed:", err);

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

          }, source?.dbopsid, formJson?.module_refid);

          if (isMounted) safeSetResolvedData(data);
        } catch (err) {
          console.error("API fetch failed:", err);
        }
      }
    };

    fetchData();
    return () => { isMounted = false; };
  }, [
    sqlOpsUrls,
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

    let finalValues = { ...values };

    if (geoFieldKeys.length > 0) {
      const missingKeys = geoFieldKeys.filter(k => !values[k]);

      if (missingKeys.length > 0) {
        try {
          const geo = await fetchGeolocation();

          finalValues = {
            ...values,
            ...Object.fromEntries(
              missingKeys.map(k => [k, geo])
            ),
          };
        } catch (err) {
          console.warn("Geo fetch failed");
        }
      }
    }



    if (source.type === "method") {
      const methodName = source.method as keyof typeof methods | undefined;
      const methodFn = methodName ? methods[methodName] : undefined;
      if (methodFn) {
        try {
          const res = await methodFn(finalValues);
          setEditData?.(null);
          callback?.(res);
          toast?.success?.(getSuccessMessage(res));

        } catch (err) {
          callback?.(err);
          toast?.error?.(getErrorMessage(err));
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
        callback?.(res);
        toast?.success?.(getSuccessMessage(res))
      } catch (err) {
        callback?.(err);
        toast?.error?.(getErrorMessage(err));
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
              "scrid": formJson?.module_refid

            },

            headers: {
              "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
            },
          });
          dbopsId = resQueryId?.data.refid;

        }

        let payload = {
          "refid": dbopsId,
          "fields": finalValues,
          "datahash": resHashId.data.refhash,
          "refid1": sqlOpsUrls.refid
        }

        if (source?.refid) {
          payload.refid1 = source?.refid
        }

        const res = await axios({
          method: "POST",
          url: sqlOpsUrls.baseURL + sqlOpsUrls[sqlOpsUrls.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: payload,
          headers: {
            "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
          },
        });
        toast?.success?.(getSuccessMessage(res))
        setEditData?.(null);
        callback?.(res)
      } catch (err) {
        callback?.(err);
        toast?.error?.(getErrorMessage(err));
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
      sqlOpsUrls={sqlOpsUrls}

      refid={refid}
      module_refid={formJson?.module_refid}

    />
  };

  return (
    <div className="relative">
      {formView.simple}
    </div>
  );
}
