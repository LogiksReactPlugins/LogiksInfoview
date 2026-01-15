import B, { useState as O, useRef as fe, useMemo as xe, useEffect as ue } from "react";
import I from "axios";
var de = { exports: {} }, ee = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ge;
function Ee() {
  if (ge) return ee;
  ge = 1;
  var r = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function c(a, o, l) {
    var h = null;
    if (l !== void 0 && (h = "" + l), o.key !== void 0 && (h = "" + o.key), "key" in o) {
      l = {};
      for (var d in o)
        d !== "key" && (l[d] = o[d]);
    } else l = o;
    return o = l.ref, {
      $$typeof: r,
      type: a,
      key: h,
      ref: o !== void 0 ? o : null,
      props: l
    };
  }
  return ee.Fragment = n, ee.jsx = c, ee.jsxs = c, ee;
}
var re = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ye;
function Se() {
  return ye || (ye = 1, process.env.NODE_ENV !== "production" && function() {
    function r(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === D ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case R:
          return "Fragment";
        case g:
          return "Profiler";
        case k:
          return "StrictMode";
        case E:
          return "Suspense";
        case C:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case w:
            return "Portal";
          case j:
            return (t.displayName || "Context") + ".Provider";
          case T:
            return (t._context.displayName || "Context") + ".Consumer";
          case $:
            var m = t.render;
            return t = t.displayName, t || (t = m.displayName || m.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case P:
            return m = t.displayName || null, m !== null ? m : r(t.type) || "Memo";
          case z:
            m = t._payload, t = t._init;
            try {
              return r(t(m));
            } catch {
            }
        }
      return null;
    }
    function n(t) {
      return "" + t;
    }
    function c(t) {
      try {
        n(t);
        var m = !1;
      } catch {
        m = !0;
      }
      if (m) {
        m = console;
        var N = m.error, L = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return N.call(
          m,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          L
        ), n(t);
      }
    }
    function a(t) {
      if (t === R) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === z)
        return "<...>";
      try {
        var m = r(t);
        return m ? "<" + m + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var t = y.A;
      return t === null ? null : t.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function h(t) {
      if (K.call(t, "key")) {
        var m = Object.getOwnPropertyDescriptor(t, "key").get;
        if (m && m.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function d(t, m) {
      function N() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          m
        ));
      }
      N.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: N,
        configurable: !0
      });
    }
    function v() {
      var t = r(this.type);
      return W[t] || (W[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function u(t, m, N, L, M, F, J, b) {
      return N = F.ref, t = {
        $$typeof: x,
        type: t,
        key: m,
        props: F,
        _owner: M
      }, (N !== void 0 ? N : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: v
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(t, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: J
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: b
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function f(t, m, N, L, M, F, J, b) {
      var p = m.children;
      if (p !== void 0)
        if (L)
          if (Q(p)) {
            for (L = 0; L < p.length; L++)
              s(p[L]);
            Object.freeze && Object.freeze(p);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else s(p);
      if (K.call(m, "key")) {
        p = r(t);
        var S = Object.keys(m).filter(function(_) {
          return _ !== "key";
        });
        L = 0 < S.length ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}", le[p + L] || (S = 0 < S.length ? "{" + S.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          L,
          p,
          S,
          p
        ), le[p + L] = !0);
      }
      if (p = null, N !== void 0 && (c(N), p = "" + N), h(m) && (c(m.key), p = "" + m.key), "key" in m) {
        N = {};
        for (var A in m)
          A !== "key" && (N[A] = m[A]);
      } else N = m;
      return p && d(
        N,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), u(
        t,
        p,
        F,
        M,
        o(),
        N,
        J,
        b
      );
    }
    function s(t) {
      typeof t == "object" && t !== null && t.$$typeof === x && t._store && (t._store.validated = 1);
    }
    var i = B, x = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), T = Symbol.for("react.consumer"), j = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), D = Symbol.for("react.client.reference"), y = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = Object.prototype.hasOwnProperty, Q = Array.isArray, oe = console.createTask ? console.createTask : function() {
      return null;
    };
    i = {
      react_stack_bottom_frame: function(t) {
        return t();
      }
    };
    var Y, W = {}, H = i.react_stack_bottom_frame.bind(
      i,
      l
    )(), se = oe(a(l)), le = {};
    re.Fragment = R, re.jsx = function(t, m, N, L, M) {
      var F = 1e4 > y.recentlyCreatedOwnerStacks++;
      return f(
        t,
        m,
        N,
        !1,
        L,
        M,
        F ? Error("react-stack-top-frame") : H,
        F ? oe(a(t)) : se
      );
    }, re.jsxs = function(t, m, N, L, M) {
      var F = 1e4 > y.recentlyCreatedOwnerStacks++;
      return f(
        t,
        m,
        N,
        !0,
        L,
        M,
        F ? Error("react-stack-top-frame") : H,
        F ? oe(a(t)) : se
      );
    };
  }()), re;
}
var be;
function Ae() {
  return be || (be = 1, process.env.NODE_ENV === "production" ? de.exports = Ee() : de.exports = Se()), de.exports;
}
var e = Ae();
function Re(r) {
  return r.template ? r.template : "tab";
}
function Pe(r) {
  const n = {};
  return Object.entries(r).forEach(([c, a]) => {
    const o = a.group || "General";
    n[o] || (n[o] = { label: o, type: "fields", fields: [] }), n[o]?.fields?.push({ name: c, ...a });
  }), n;
}
const te = {
  12: "lg:col-span-12",
  11: "lg:col-span-11",
  10: "lg:col-span-10",
  9: "lg:col-span-9",
  8: "lg:col-span-8",
  7: "lg:col-span-7",
  6: "lg:col-span-6",
  5: "lg:col-span-5",
  4: "lg:col-span-4",
  3: "lg:col-span-3",
  2: "lg:col-span-2",
  1: "lg:col-span-1"
};
function ae(r) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(r) ? r : 6;
}
const G = (r, n) => typeof r == "string" ? r.replace(
  /#(\w+)#/g,
  (c, a) => n[a] !== void 0 ? String(n[a]) : c
) : Array.isArray(r) ? r.map((c) => G(c, n)) : r && typeof r == "object" ? Object.fromEntries(
  Object.entries(r).map(([c, a]) => [
    G(c, n),
    G(a, n)
  ])
) : r, ke = (r) => {
  const n = Array.isArray(r?.data?.data) ? r.data.data[0] : Array.isArray(r?.data) ? r.data[0] : r?.data?.data ?? r?.data;
  return n && typeof n == "object" && !Array.isArray(n) ? n : null;
}, pe = (r, n, c) => {
  const a = Array.isArray(c?.data?.data) ? c.data.data : Array.isArray(c?.data) ? c.data : c;
  if (!Array.isArray(a) || a.length === 0)
    return {};
  const o = {};
  return a.forEach((l) => {
    l[r] != null && l[n] != null && (o[l[r]] = l[n]);
  }), o;
};
function ve(r, n) {
  if (!n || Object.keys(n).length === 0) return r;
  if (typeof r == "number")
    return n[String(r)] ?? r;
  if (typeof r == "string") {
    const a = r.split(",").map((o) => o.trim()).map((o) => n[o]).filter(Boolean);
    return a.length ? a.join(", ") : r;
  }
  return r;
}
const Te = "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg";
function ne({ field: r, data: n, methods: c = {}, sqlOpsUrls: a, refid: o }) {
  const l = r?.name, h = `
    text-sm text-gray-600 break-words
  `, d = `
    block text-sm font-semibold  transition-all duration-300 text-gray-700 capitalize
  `, [v, u] = O(
    r.options ?? {}
  );
  B.useEffect(() => {
    let w = !0;
    return (async () => {
      if (r?.options) {
        u(r.options);
        return;
      }
      const k = r?.source ?? {};
      if (k.type === "method") {
        const g = k.method, T = g ? c[g] : void 0;
        if (T)
          try {
            const j = await Promise.resolve(T());
            w && u(j ?? {});
          } catch (j) {
            console.error("Method execution failed:", j), w && u({});
          }
        else
          w && u({});
      }
      if (k.type === "api" && k.url)
        try {
          const g = await I({
            method: k.method || "GET",
            url: k.url,
            data: k.body ?? {},
            params: k.params ?? {},
            headers: k.headers ?? {}
          }), T = r.valueKey || "value", j = r.labelKey || "title", $ = pe(T, j, g);
          w && u($);
        } catch (g) {
          console.error("API execution failed:", g), w && u({});
        }
      if (r.table || r.type === "dataSelector") {
        if (!a) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let g;
          if (r.type === "dataSelector")
            g = {
              ...r,
              table: "do_lists",
              cols: "title,value",
              where: {
                groupid: r.groupid ?? ""
              }
            };
          else {
            if (!r.table || !r.columns) {
              console.error("Invalid SQL field config", r);
              return;
            }
            g = {
              ...r,
              table: r.table,
              cols: r.columns
            };
          }
          r.where && r.type !== "dataSelector" && (g.where = o ? G(r.where, { refid: o }) : r.where);
          const T = await I({
            method: "POST",
            url: a.baseURL + a.registerQuery,
            data: { query: g },
            headers: {
              Authorization: `Bearer ${a?.accessToken}`
            }
          }), j = await I({
            method: "POST",
            url: a.baseURL + a.runQuery,
            data: {
              queryid: T.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${a?.accessToken}`
            }
          }), $ = r.valueKey || "value", E = r.labelKey || "title", C = pe($, E, j);
          w && u(C);
        } catch (g) {
          console.error("API fetch failed:", g);
        }
      }
    })(), () => {
      w = !1;
    };
  }, [
    r.options,
    r.source,
    r.table,
    r.columns,
    r.where,
    o
  ]);
  const f = typeof l == "string" ? n?.[l] : void 0, s = typeof f == "string" ? r.type === "date" ? f.split("T")[0] : r.type === "time" ? f.includes("T") ? f.slice(11, 16) : f.slice(0, 5) : ve(f, v) : ve(f, v), i = typeof l == "string" && (l.toLowerCase().includes("avatar") || l.toLowerCase().includes("logo")), x = s == null ? "" : typeof s == "string" || typeof s == "number" ? s : JSON.stringify(s);
  return /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ e.jsx("label", { className: d, children: r?.label }),
    /* @__PURE__ */ e.jsx("div", { className: "relative", children: i ? /* @__PURE__ */ e.jsx(
      "img",
      {
        src: String(s),
        alt: "avatar",
        className: "w-16 h-16 rounded-full object-cover border",
        onError: (w) => {
          const R = w.currentTarget;
          R.onerror = null, R.src = Te;
        }
      }
    ) : /* @__PURE__ */ e.jsx("p", { className: h, children: x }) })
  ] });
}
function Ce({ commonInfo: r, infoData: n, hiddenFields: c = [] }) {
  return /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-100 p-4 min-h-3/10 overflow-auto", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    /* @__PURE__ */ e.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ e.jsx("div", { className: "relative w-42 h-42", children: /* @__PURE__ */ e.jsx(
      "img",
      {
        src: String(n.avatar_photo),
        alt: "Profile",
        className: " w-full h-full object-cover border-4 rounded-[12px] border-white shadow-lg",
        onError: (a) => {
          const o = a.currentTarget;
          o.onerror = null, o.src = Te;
        }
      }
    ) }) }),
    /* @__PURE__ */ e.jsx("div", { className: "lg:col-span-10 min-h-0 max-h-40  overflow-y-auto custom-scrollbar", children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-2", children: r.fields?.map((a, o) => {
      const l = n?.[a.name];
      return c.includes(a.name) || !l && l !== !1 && l !== 0 ? null : /* @__PURE__ */ e.jsx("div", { className: `hover:bg-gray-100 transition-colors duration-200 col-span-12 sm:col-span-6 ${te[ae(a.width)] || "lg:col-span-4"}`, children: /* @__PURE__ */ e.jsx(
        ne,
        {
          field: a,
          data: n ?? {}
        },
        a?.name || o
      ) }, a.name);
    }) }) })
  ] }) });
}
function me({ tabObj: r, methods: n, tabName: c, sqlOpsUrls: a, refid: o }) {
  const [l, h] = B.useState(null);
  return B.useEffect(() => {
    let d = !1;
    return (async () => {
      const u = r?.config;
      if (!u?.type) {
        d || h(null);
        return;
      }
      if (u.type === "method") {
        const f = u.method, s = f ? n[f] : void 0;
        if (s)
          try {
            const i = await Promise.resolve(s());
            d || h(i || null);
          } catch (i) {
            console.error("Method execution failed:", i), d || h(null);
          }
        else
          d || h(null);
      }
      if (u.type === "api")
        try {
          const f = await I({
            method: u.method || "GET",
            // GET, POST, etc.
            url: u.url,
            data: u.body || {},
            // request body
            params: u.params || {},
            // query params
            headers: u.headers || {}
            // optional headers
          });
          d || h(f.data || null);
        } catch (f) {
          console.error("API fetch failed:", f), d || h(null);
        }
      if (u.type === "sql" && o && o != "0") {
        if (!a) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const f = await I({
            method: "POST",
            url: a.baseURL + a.registerQuery,
            data: {
              query: {
                ...u,
                cols: u.cols,
                table: u.table,
                where: G(u.where, {
                  refid: u.refid
                })
              }
            },
            headers: {
              Authorization: `Bearer ${a?.accessToken}`
            }
          }), s = await I({
            method: "POST",
            url: a.baseURL + a.runQuery,
            data: {
              queryid: f.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${a?.accessToken}`
            }
          }), i = ke(s);
          d || h(i);
        } catch (f) {
          console.error("API fetch failed:", f);
        }
      }
    })(), () => {
      d = !0;
    };
  }, [
    r?.config?.type || "",
    r?.config?.method || "",
    r?.config?.url || "",
    JSON.stringify(r?.config?.params || {}),
    JSON.stringify(r?.config?.body || {}),
    JSON.stringify(r?.config?.headers || {})
  ]), /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-2", children: l ? Object.keys(l).map((d, v) => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${te[ae(r.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ e.jsx(
        ne,
        {
          field: { name: d, label: d },
          data: l ?? {},
          methods: n,
          refid: o,
          sqlOpsUrls: a
        },
        d
      )
    },
    `field-${v}`
  )) : /* @__PURE__ */ e.jsx("div", { className: "col-span-12 flex flex-col  min-h-0", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center text-gray-500", children: [
    /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ e.jsxs("svg", { className: "w-8 h-8 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
      /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" }),
      /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m8 7 4-4 4 4" })
    ] }) }),
    /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No Data Available" }),
    /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500 text-center max-w-sm", children: "There are no records to display  at the moment." })
  ] }) }) }) });
}
function _e({
  open: r,
  title: n = "Confirm Delete",
  message: c = "Are you sure you want to delete this record?",
  onConfirm: a,
  onCancel: o
}) {
  return r ? /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-white rounded-lg shadow-lg w-full max-w-sm p-4", children: [
    /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-semibold text-gray-900", children: n }),
    /* @__PURE__ */ e.jsx("p", { className: "mt-2 text-sm text-gray-600", children: c }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-4 flex justify-end gap-2", children: [
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: o,
          className: "px-3 py-1.5 text-sm rounded border border-gray-300 text-gray-700 hover:bg-gray-50",
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: a,
          className: "px-3 py-1.5 text-sm rounded bg-red-600 text-white hover:bg-red-700",
          children: "Delete"
        }
      )
    ] })
  ] }) }) : null;
}
function he({ tabObj: r, methods: n, tabName: c, sqlOpsUrls: a, refid: o, Reports: l, toast: h, handleAction: d, infoViewJson: v }) {
  const [u, f] = O(1), [s, i] = O(10), [x, w] = O(""), [R, k] = O(!1), [g, T] = O(null), [j, $] = B.useState([]);
  fe(null);
  const [E, C] = O(null), [P, z] = O({ key: "", direction: null }), [Z, D] = O(null), y = r?.config;
  console.log("tabObj", r), console.log("source", y);
  const K = B.useCallback(async () => {
    if (!y?.type) {
      $([]);
      return;
    }
    if (y.type === "method") {
      const b = y.method, p = b ? n[b] : void 0;
      if (!p) {
        $([]);
        return;
      }
      try {
        const S = await Promise.resolve(p());
        $(S || []);
      } catch {
        $([]);
      }
    }
    if (y.type === "api")
      try {
        const b = await I({
          method: y.method || "GET",
          url: y.url,
          data: y.body || {},
          params: y.params || {},
          headers: y.headers || {}
        });
        $(b.data || []);
      } catch (b) {
        console.error("API fetch failed:", b), $([]);
      }
    if (y.type === "sql" && o && o !== "0") {
      if (!a) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const { form: b, actions: p, uimode: S, type: A, unilinks: _, DEBUG: X, ...q } = y, U = await I({
          method: "POST",
          url: a.baseURL + a.registerQuery,
          data: {
            query: {
              ...q,
              where: G(y.where, { refid: o })
            }
          },
          headers: {
            Authorization: `Bearer ${a.accessToken}`
          }
        }), V = await I({
          method: "POST",
          url: a.baseURL + a.runQuery,
          data: {
            queryid: U.data.queryid,
            filter: {}
          },
          headers: {
            Authorization: `Bearer ${a.accessToken}`
          }
        });
        $(V.data?.data ?? V.data ?? []);
      } catch (b) {
        console.error("SQL fetch failed:", b);
      }
    }
  }, [
    r?.config,
    n,
    o,
    a
  ]);
  B.useEffect(() => {
    K();
  }, [
    K
  ]);
  const Q = Array.isArray(j) ? j : [j], Y = ((b) => {
    const p = /* @__PURE__ */ new Set();
    return b.forEach((S) => {
      S && typeof S == "object" && Object.keys(S).forEach((A) => p.add(A));
    }), Array.from(p);
  })(Q);
  r?.vmode;
  const W = r?.config, H = W?.["popup.form"] ? "popup.form" : (W?.form, "form"), se = W?.[H] && Object.keys(W?.[H]).length > 0;
  W?.info && Object.keys(W?.info).length > 0;
  const le = (b) => !P.key || !P.direction ? b : [...b].sort((p, S) => {
    const A = p[P.key], _ = S[P.key];
    if (A == null) return P.direction === "asc" ? 1 : -1;
    if (_ == null) return P.direction === "asc" ? -1 : 1;
    if (typeof A == "boolean" && typeof _ == "boolean")
      return P.direction === "asc" ? A === _ ? 0 : A ? -1 : 1 : A === _ ? 0 : A ? 1 : -1;
    const X = new Date(A), q = new Date(_);
    if (!isNaN(X.getTime()) && !isNaN(q.getTime()))
      return P.direction === "asc" ? X.getTime() - q.getTime() : q.getTime() - X.getTime();
    const U = parseFloat(A), V = parseFloat(_);
    if (!isNaN(U) && !isNaN(V))
      return P.direction === "asc" ? U - V : V - U;
    const ie = String(A).toLowerCase(), ce = String(_).toLowerCase();
    return P.direction === "asc" ? ie < ce ? -1 : ie > ce ? 1 : 0 : ie > ce ? -1 : ie < ce ? 1 : 0;
  }), t = xe(() => {
    let b = Q;
    if (x.trim()) {
      const p = x.toLowerCase();
      b = Q.filter((S) => Y.some((A) => {
        const _ = S[A];
        return _ == null ? !1 : String(_).toLowerCase().includes(p);
      }));
    }
    return le(b);
  }, [Q, x, Y, P]);
  Math.ceil(t.length / s);
  const m = (u - 1) * s, N = m + s;
  t.slice(m, N);
  const L = (b) => {
    T(b), k(!0);
  }, M = async () => {
    if (g?.id) {
      if (!a) {
        D({ type: "error", message: "Delete configuration missing." });
        return;
      }
      try {
        let b = r?.config;
        const p = b?.["popup.form"] ? "popup.form" : (b?.form, "form");
        console.log("config?.[formType]", b?.[p]);
        const S = b?.[p];
        if (!S?.source) throw new Error("Form source missing");
        const A = await I({
          method: "GET",
          url: a.baseURL + a.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${a.accessToken}`
          }
        });
        let _ = { ...S.source, refid: g.id };
        S.source.where && (_ = {
          ..._,
          where: G(S.source.where, {
            refid: g.id
          })
        });
        const X = await I({
          method: "POST",
          url: a.baseURL + a.dbopsGetRefId,
          data: {
            operation: "update",
            source: _,
            fields: S.fields,
            forcefill: S.forcefill,
            datahash: A.data.refhash
          },
          headers: {
            Authorization: `Bearer ${a.accessToken}`
          }
        });
        await I({
          method: "POST",
          url: a.baseURL + a.dbopsUpdate,
          data: {
            refid: X.data.refid,
            fields: { blocked: "true" },
            datahash: A.data.refhash
          },
          headers: {
            Authorization: `Bearer ${a.accessToken}`
          }
        }), window.alert("Record deleted successfully."), K();
      } catch (b) {
        console.error(b), window.alert("Failed to delete record. Please try again");
      } finally {
        T(null), k(!1), setTimeout(() => D(null), 3e3);
      }
    }
  }, F = () => {
    T(null), k(!1);
  }, J = () => {
    n?.addInfoRecord?.({ [H]: r?.config?.[H] }, o);
  };
  return xe(() => ({
    totalRows: t.length,
    columns: Y.length,
    currentPageStart: m + 1,
    currentPageEnd: Math.min(N, t.length),
    isFiltered: x.trim().length > 0
  }), [t, Q, Y, m, N]), Q.length === 0 || Y.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center text-gray-500", children: [
    /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ e.jsxs("svg", { className: "w-8 h-8 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
      /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" }),
      /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m8 7 4-4 4 4" })
    ] }) }),
    /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No Data Available" }),
    /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500 text-center max-w-sm", children: "There are no records to display in the grid view at the moment." }),
    se && /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: J,
        className: "mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-action cursor-pointer",
        children: [
          /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 mr-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 4v16m8-8H4" }) }),
          "Add Record"
        ]
      }
    )
  ] }) : /* @__PURE__ */ e.jsx(e.Fragment, { children: l ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      l,
      {
        methods: { ...n, deleteRecord: L },
        report: {
          source: {
            table: y?.table,
            type: "sql",
            cols: y?.cols,
            where: y?.where,
            orderby: y?.orderby
          },
          endPoints: a,
          actions: { ...y?.actions, ...v?.buttons, ...v.actions },
          datagrid: y?.datagrid,
          buttons: y?.buttons
        },
        onButtonClick: d
      }
    ),
    /* @__PURE__ */ e.jsx(
      _e,
      {
        open: R,
        onConfirm: M,
        onCancel: F
      }
    )
  ] }) : /* @__PURE__ */ e.jsx("div", { className: "text-sm text-gray-500 text-center py-4", children: "Reports component is not available." }) });
}
const je = ({ groups: r, groupNames: n, setActiveTabIndex: c, activeTabIndex: a }) => /* @__PURE__ */ e.jsx(
  "nav",
  {
    className: "flex flex-col overflow-y-auto h-full px-2 py-1 space-y-1",
    children: n.length > 0 ? n.map((o, l) => /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: () => c(l),
        className: `cursor-pointer w-full text-left py-2 px-3 rounded-md text-sm font-semibold transition-all duration-200 ${a === l ? "bg-white shadow text-action" : "text-gray-600 hover:bg-white/50"}`,
        children: /* @__PURE__ */ e.jsx("span", { className: "truncate", children: r[o]?.label || o })
      },
      o
    )) : /* @__PURE__ */ e.jsx("div", { className: "py-3 px-2 text-sm text-gray-500", children: "No group available" })
  }
), Le = ({
  groups: r,
  groupNames: n,
  setActiveTabIndex: c,
  activeTabIndex: a,
  layoutConfig: o,
  showScrollHint: l,
  isCommonInfo: h,
  tabsNavRef: d
}) => {
  const [v, u] = O(!1), f = fe(null);
  return ue(() => {
    const s = (i) => {
      f.current && !f.current.contains(i.target) && u(!1);
    };
    return document.addEventListener("mousedown", s), () => document.removeEventListener("mousedown", s);
  }, []), /* @__PURE__ */ e.jsxs("div", { className: o?.tabNavClass || "relative z-10", children: [
    l && /* @__PURE__ */ e.jsx("div", { className: "absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 flex items-center justify-center", children: /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: () => d.current?.scrollBy({ left: -200, behavior: "smooth" }),
        className: "w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group",
        children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
      }
    ) }),
    /* @__PURE__ */ e.jsxs("div", { className: "absolute right-0 top-1/2 -translate-y-1/2 z-20 w-18 flex items-center justify-between pr-1", children: [
      l && /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => d.current?.scrollBy({ left: 200, behavior: "smooth" }),
          className: "w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group",
          children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "relative", ref: f, children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => u(!v),
            className: "ml-1 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200",
            children: "⋮"
          }
        ),
        v && /* @__PURE__ */ e.jsx("div", { className: "absolute right-0 mt-2 w-48 max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-30", children: n.map((s, i) => /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              c(i), u(!1);
            },
            className: `w-full text-left px-3 py-2 text-sm truncate hover:bg-gray-100 ${a === i ? "bg-gray-50 font-semibold text-action" : "text-gray-700"}`,
            children: r[s]?.label || s
          },
          s
        )) })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: `relative bg-gray-100 ${h ? "" : "rounded-t-lg"} px-12 pt-1 shadow-inner overflow-hidden`, children: /* @__PURE__ */ e.jsx(
      "nav",
      {
        ref: d,
        className: "relative flex overflow-x-auto scrollbar-hide scroll-smooth",
        style: {
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        },
        children: n.length > 0 ? n.map((s, i) => /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => c(i),
            className: `relative cursor-pointer flex-shrink-0
            min-w-[8rem]   
            py-2 px-8
            rounded-t-lg text-xs sm:text-sm font-semibold
            transition-all duration-300 ease-out
            focus:outline-none whitespace-nowrap
            ${a === i ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
            children: /* @__PURE__ */ e.jsx("span", { className: "relative z-10 flex items-center justify-center gap-1 sm:gap-2", children: /* @__PURE__ */ e.jsx("span", { className: "truncate", children: r[s]?.label || s }) })
          },
          s
        )) : /* @__PURE__ */ e.jsx("div", { className: "py-3 px-6 text-sm text-gray-500", children: "No group available" })
      }
    ) })
  ] });
}, we = ({
  groupNames: r,
  activeTabIndex: n,
  layoutConfig: c,
  tabObj: a,
  infoData: o,
  setActiveTabIndex: l,
  renderView: h,
  methods: d = {},
  refid: v,
  sqlOpsUrls: u
}) => /* @__PURE__ */ e.jsxs(
  "div",
  {
    className: "bg-white rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex-1 flex flex-col min-h-0",
    children: [
      r.length > 0 ? a?.fields ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ e.jsx("div", { className: c?.fieldGridClass || "grid grid-cols-12 gap-2", children: a.fields.map((f, s) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: `col-span-12 sm:col-span-6 ${te[ae(f.width)] || "lg:col-span-2"}`,
          children: /* @__PURE__ */ e.jsx(
            ne,
            {
              field: f,
              data: o ?? {},
              methods: d,
              refid: v,
              sqlOpsUrls: u
            }
          )
        },
        f?.name ?? `field-${s}`
      )) }) }) : a ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: h(a, r[n] || "") }) : null : /* @__PURE__ */ e.jsx("div", { className: "flex-1 col-span-full text-center py-8 text-gray-500", children: "No data available" }),
      r.length > 5 && /* @__PURE__ */ e.jsxs("div", { className: "mt-10 pt-2 border-t border-gray-100 flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-500", children: [
          /* @__PURE__ */ e.jsxs("span", { children: [
            "Tab ",
            n + 1,
            " of ",
            r.length
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex gap-1", children: [
            r.slice(0, 5).map((f, s) => /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${s === n ? "bg-action w-6" : "bg-gray-300"}`
              },
              s
            )),
            r.length > 5 && /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-gray-400 ml-1", children: [
              "+",
              r.length - 5
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "hidden sm:flex gap-2", children: [
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => l(Math.max(0, n - 1)),
              disabled: n === 0,
              className: "px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
              children: "Previous"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => l(Math.min(r.length - 1, n + 1)),
              disabled: n === r.length - 1,
              className: "px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
              children: "Next"
            }
          )
        ] })
      ] }),
      r.length <= 5 && /* @__PURE__ */ e.jsx("div", { className: "mt-6 pt-3 border-t border-gray-100", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
        /* @__PURE__ */ e.jsxs("span", { children: [
          "Tab ",
          n + 1,
          " of ",
          r.length
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex gap-1", children: r.map((f, s) => /* @__PURE__ */ e.jsx(
          "div",
          {
            className: `w-2 h-2 rounded-full transition-all duration-300 ${s === n ? "bg-action w-6" : "bg-gray-300"}`
          },
          s
        )) })
      ] }) })
    ]
  },
  r[n]
);
function Ne({
  groups: r,
  methods: n = {},
  infoData: c,
  viewRenderers: a = {},
  isCommonInfo: o,
  layoutConfig: l = {},
  viewMode: h,
  sqlOpsUrls: d = {},
  refid: v,
  Reports: u,
  toast: f = {},
  handleAction: s = () => {
  },
  infoViewJson: i
}) {
  const [x, w] = O(0), [R, k] = O(!1), g = fe(null), T = Object.keys(r);
  ue(() => {
    const D = () => {
      if (g.current) {
        const y = g.current;
        k(y.scrollWidth > y.clientWidth);
      }
    };
    return D(), window.addEventListener("resize", D), () => window.removeEventListener("resize", D);
  }, [T.length]), ue(() => {
    if (g.current && T.length > 0) {
      const D = g.current.children[x];
      D && D.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [x, T.length]);
  const j = h === "tableft", $ = h === "tabright", E = !j && !$, C = r[T[x] ?? ""] || null, P = {
    single: (D, y) => /* @__PURE__ */ e.jsx(me, { tabObj: D, methods: n, tabName: y, sqlOpsUrls: d, refid: v }),
    grid: (D, y) => /* @__PURE__ */ e.jsx(
      he,
      {
        ...u ? { Reports: u } : {},
        toast: f,
        handleAction: s,
        tabObj: D,
        methods: n,
        tabName: y,
        sqlOpsUrls: d,
        refid: v,
        infoViewJson: i
      }
    )
  }, z = C?.config?.uimode, Z = a[z] || P[z] || (() => /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No UI mode for this type" }));
  return E ? /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex flex-col min-h-0 ", children: [
    /* @__PURE__ */ e.jsx(
      Le,
      {
        groupNames: T,
        groups: r,
        setActiveTabIndex: w,
        activeTabIndex: x,
        tabsNavRef: g,
        isCommonInfo: o,
        showScrollHint: R,
        layoutConfig: l
      }
    ),
    /* @__PURE__ */ e.jsx(
      we,
      {
        groupNames: T,
        activeTabIndex: x,
        layoutConfig: l,
        tabObj: C,
        infoData: c,
        setActiveTabIndex: w,
        renderView: Z,
        groups: r,
        methods: n,
        refid: v,
        sqlOpsUrls: d
      }
    )
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex min-h-0", children: [
    j && /* @__PURE__ */ e.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ e.jsx(
      je,
      {
        groupNames: T,
        groups: r,
        setActiveTabIndex: w,
        activeTabIndex: x
      }
    ) }),
    /* @__PURE__ */ e.jsx("main", { className: "flex-1 flex flex-col min-h-0 overflow-auto", children: /* @__PURE__ */ e.jsx(
      we,
      {
        groupNames: T,
        activeTabIndex: x,
        layoutConfig: l,
        tabObj: C,
        infoData: c,
        setActiveTabIndex: w,
        renderView: Z,
        groups: r,
        methods: n,
        refid: v,
        sqlOpsUrls: d
      }
    ) }),
    $ && /* @__PURE__ */ e.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ e.jsx(
      je,
      {
        groupNames: T,
        groups: r,
        setActiveTabIndex: w,
        activeTabIndex: x
      }
    ) })
  ] });
}
function $e({ title: r, children: n, isFirst: c }) {
  const [a, o] = O(c);
  return /* @__PURE__ */ e.jsx("div", { className: "group relative mt-1 flex-1 flex flex-col min-h-0 max-h-screen", children: /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex flex-col min-h-0 relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: () => o(!a),
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: `w-3 h-3 rounded-full transition-all duration-300 ${a ? "bg-action" : "bg-gray-300"}` }),
            /* @__PURE__ */ e.jsx("h3", { className: "text-md capitalize font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: r })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: `relative transition-all duration-300 ${a ? "rotate-180" : ""}`, children: [
            /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-full blur-md transition-opacity duration-300 ${a ? "bg-action opacity-30" : "bg-transparent opacity-0"}` }),
            /* @__PURE__ */ e.jsx(
              "svg",
              {
                className: "relative w-4 h-4 text-gray-500 group-hover:text-action-500 transition-colors duration-300",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `flex-1 flex flex-col min-h-0 transition-all  duration-500 ease-in-out overflow-hidden ${a ? "max-h-full opacity-100" : "max-h-0 opacity-0"}`,
        children: /* @__PURE__ */ e.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white flex-1 flex flex-col min-h-0", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-5 pt-4 flex-1 flex flex-col min-h-0 overflow-y-auto", children: n }) })
      }
    )
  ] }) });
}
function De({
  groups: r,
  methods: n = {},
  infoData: c,
  viewRenderers: a = {},
  sqlOpsUrls: o = {},
  refid: l,
  Reports: h,
  toast: d = {},
  handleAction: v = () => {
  },
  infoViewJson: u
}) {
  const f = {
    single: (s, i) => /* @__PURE__ */ e.jsx(me, { tabObj: s, methods: n, tabName: i, sqlOpsUrls: o, refid: l }),
    grid: (s, i) => /* @__PURE__ */ e.jsx(
      he,
      {
        ...h ? { Reports: h } : {},
        toast: d,
        infoViewJson: u,
        handleAction: v,
        tabObj: s,
        methods: n,
        tabName: i,
        sqlOpsUrls: o,
        refid: l
      }
    )
  };
  return /* @__PURE__ */ e.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ e.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-2 flex flex-col min-h-0", children: r && Object.entries(r).map(([s, i], x) => /* @__PURE__ */ e.jsx($e, { title: s, isFirst: x === 0, children: i?.fields ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-2", children: i.fields.map((w, R) => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${te[ae(w.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ e.jsx(ne, { methods: n, field: w, data: c ?? {}, sqlOpsUrls: o, refid: l })
    },
    w?.name ?? `field-${R}`
  )) }) }) : i ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: a[i.config?.uimode]?.(i) || f[i.config?.uimode]?.(i, s) || /* @__PURE__ */ e.jsx("div", { children: "No renderer for this type" }) }) : null }, s)) }) }) });
}
function Ie({ title: r, children: n }) {
  return /* @__PURE__ */ e.jsx("div", { className: "group relative mt-1 flex-1 flex flex-col min-h-0 max-h-screen", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col min-h-0 relative  bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ e.jsx("div", { className: "w-3 h-3 rounded-full transition-all duration-300 bg-action" }),
          /* @__PURE__ */ e.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r capitalize from-gray-800 to-gray-600 bg-clip-text text-transparent", children: r })
        ] })
      }
    ),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `flex flex-col min-h-0 transition-all duration-500 ease-in-out opacity-100'
            }`,
        children: /* @__PURE__ */ e.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white flex flex-col min-h-0", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-5 pt-4 flex-1 flex flex-col min-h-0 overflow-y-auto", children: n }) })
      }
    )
  ] }) });
}
function Oe({
  groups: r,
  methods: n = {},
  infoData: c,
  viewRenderers: a = {},
  sqlOpsUrls: o = {},
  refid: l,
  Reports: h,
  toast: d = {},
  handleAction: v = () => {
  },
  infoViewJson: u
}) {
  const f = {
    single: (s, i) => /* @__PURE__ */ e.jsx(me, { tabObj: s, methods: n, tabName: i, sqlOpsUrls: o, refid: l }),
    grid: (s, i) => /* @__PURE__ */ e.jsx(
      he,
      {
        ...h ? { Reports: h } : {},
        toast: d,
        handleAction: v,
        tabObj: s,
        methods: n,
        tabName: i,
        sqlOpsUrls: o,
        refid: l,
        infoViewJson: u
      }
    )
  };
  return /* @__PURE__ */ e.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ e.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-2  flex flex-col min-h-0", children: r && Object.entries(r).map(([s, i], x) => /* @__PURE__ */ e.jsx(Ie, { title: s, children: i?.fields ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-2", children: i.fields.map((w, R) => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${te[ae(w.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ e.jsx(ne, { methods: n, field: w, data: c ?? {}, sqlOpsUrls: o, refid: l })
    },
    w?.name ?? `field-${R}`
  )) }) }) : i ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: a[i.config?.uimode]?.(i) || f[i.config?.uimode]?.(i, s) || /* @__PURE__ */ e.jsx("div", { children: "No renderer for this type" }) }) : null }, s)) }) }) });
}
function Me({
  infoViewJson: r,
  data: n = {},
  hiddenFields: c = [],
  groupFieldsFn: a = Pe,
  layoutConfig: o = {},
  viewRenderers: l = {},
  methods: h = {},
  Reports: d,
  toast: v = {},
  handleAction: u = () => {
  }
}) {
  const [f, s] = B.useState({}), i = Re(r.infoview ?? {}), x = r.endPoints ?? {}, w = B.useMemo(
    () => a(r.fields || {}),
    [r.fields, a]
  ), R = r?.source?.refid;
  let k = { ...w };
  r.infoview?.groups && (k = { ...k, ...r.infoview.groups }), B.useEffect(() => {
    let j = !1;
    return (async () => {
      const E = r?.source;
      if (!E?.type) {
        j || s({});
        return;
      }
      if (E.type === "method") {
        const C = E.method, P = C ? h[C] : void 0;
        if (P)
          try {
            const z = await Promise.resolve(P());
            j || s(z || {});
          } catch (z) {
            console.error("Method execution failed:", z), j || s({});
          }
        else
          j || s({});
      }
      if (E.type === "api")
        try {
          const C = await I({
            method: E.method || "GET",
            url: E.url,
            data: E.body || {},
            params: E.params || {},
            headers: E.headers || {}
          });
          j || s(C.data || {});
        } catch (C) {
          console.error("API fetch failed:", C), j || s({});
        }
      if (E.type === "sql" && E.refid && E.refid != "0") {
        if (!x) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const C = await I({
            method: "POST",
            url: x.baseURL + x.registerQuery,
            data: {
              query: {
                ...E,
                cols: E.cols,
                table: E.table,
                where: G(E.where, {
                  refid: E.refid
                })
              }
            },
            headers: {
              Authorization: `Bearer ${x?.accessToken}`
            }
          }), P = await I({
            method: "POST",
            url: x.baseURL + x.runQuery,
            data: {
              queryid: C.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${x?.accessToken}`
            }
          }), z = ke(P) ?? {};
          j || s(z);
        } catch (C) {
          console.error("API fetch failed:", C);
        }
      }
    })(), () => {
      j = !0;
    };
  }, [
    r?.source?.type || "",
    r?.source?.method || "",
    r?.source?.url || "",
    JSON.stringify(r?.source?.params || {}),
    JSON.stringify(r?.source?.body || {}),
    JSON.stringify(r?.source?.headers || {})
  ]);
  const g = k.common || null;
  g && delete k.common;
  const T = (j) => {
    switch (j) {
      case "accordion":
        return /* @__PURE__ */ e.jsx(
          De,
          {
            groups: k,
            methods: h,
            infoData: f,
            viewRenderers: l,
            sqlOpsUrls: x,
            refid: R,
            ...d ? { Reports: d } : {},
            toast: v,
            handleAction: u,
            infoViewJson: r
          }
        );
      case "tab":
      case "tableft":
      case "tabright":
        return /* @__PURE__ */ e.jsx(
          Ne,
          {
            groups: k,
            viewRenderers: l,
            layoutConfig: o,
            methods: h,
            infoData: f,
            isCommonInfo: !!g,
            viewMode: j,
            sqlOpsUrls: x,
            refid: R,
            ...d ? { Reports: d } : {},
            toast: v,
            handleAction: u,
            infoViewJson: r
          }
        );
      case "cards":
        return /* @__PURE__ */ e.jsx(
          Oe,
          {
            groups: k,
            viewRenderers: l,
            methods: h,
            infoData: f,
            sqlOpsUrls: x,
            refid: R,
            ...d ? { Reports: d } : {},
            toast: v,
            handleAction: u,
            infoViewJson: r
          }
        );
      default:
        return /* @__PURE__ */ e.jsx(
          Ne,
          {
            groups: k,
            viewRenderers: l,
            layoutConfig: o,
            methods: h,
            infoData: f,
            isCommonInfo: !!g,
            viewMode: j,
            sqlOpsUrls: x,
            refid: R,
            ...d ? { Reports: d } : {},
            toast: v,
            handleAction: u,
            infoViewJson: r
          }
        );
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: o.containerClass || "h-screen flex flex-col ", children: [
    g && /* @__PURE__ */ e.jsx(
      Ce,
      {
        commonInfo: g,
        infoData: f,
        hiddenFields: c
      }
    ),
    T(i)
  ] });
}
export {
  Me as InfoView
};
