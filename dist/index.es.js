import A, { useState as W, useRef as Ce, useMemo as xe } from "react";
import O from "axios";
var ce = { exports: {} }, U = {};
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
  if (ge) return U;
  ge = 1;
  var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function m(a, o, l) {
    var p = null;
    if (l !== void 0 && (p = "" + l), o.key !== void 0 && (p = "" + o.key), "key" in o) {
      l = {};
      for (var c in o)
        c !== "key" && (l[c] = o[c]);
    } else l = o;
    return o = l.ref, {
      $$typeof: t,
      type: a,
      key: p,
      ref: o !== void 0 ? o : null,
      props: l
    };
  }
  return U.Fragment = n, U.jsx = m, U.jsxs = m, U;
}
var ee = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pe;
function Te() {
  return pe || (pe = 1, process.env.NODE_ENV !== "production" && function() {
    function t(s) {
      if (s == null) return null;
      if (typeof s == "function")
        return s.$$typeof === ue ? null : s.displayName || s.name || null;
      if (typeof s == "string") return s;
      switch (s) {
        case L:
          return "Fragment";
        case T:
          return "Profiler";
        case f:
          return "StrictMode";
        case _:
          return "Suspense";
        case E:
          return "SuspenseList";
        case de:
          return "Activity";
      }
      if (typeof s == "object")
        switch (typeof s.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), s.$$typeof) {
          case v:
            return "Portal";
          case S:
            return (s.displayName || "Context") + ".Provider";
          case g:
            return (s._context.displayName || "Context") + ".Consumer";
          case C:
            var x = s.render;
            return s = s.displayName, s || (s = x.displayName || x.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
          case $:
            return x = s.displayName || null, x !== null ? x : t(s.type) || "Memo";
          case J:
            x = s._payload, s = s._init;
            try {
              return t(s(x));
            } catch {
            }
        }
      return null;
    }
    function n(s) {
      return "" + s;
    }
    function m(s) {
      try {
        n(s);
        var x = !1;
      } catch {
        x = !0;
      }
      if (x) {
        x = console;
        var N = x.error, R = typeof Symbol == "function" && Symbol.toStringTag && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return N.call(
          x,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          R
        ), n(s);
      }
    }
    function a(s) {
      if (s === L) return "<>";
      if (typeof s == "object" && s !== null && s.$$typeof === J)
        return "<...>";
      try {
        var x = t(s);
        return x ? "<" + x + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var s = V.A;
      return s === null ? null : s.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function p(s) {
      if (I.call(s, "key")) {
        var x = Object.getOwnPropertyDescriptor(s, "key").get;
        if (x && x.isReactWarning) return !1;
      }
      return s.key !== void 0;
    }
    function c(s, x) {
      function N() {
        Q || (Q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          x
        ));
      }
      N.isReactWarning = !0, Object.defineProperty(s, "key", {
        get: N,
        configurable: !0
      });
    }
    function u() {
      var s = t(this.type);
      return ne[s] || (ne[s] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), s = this.props.ref, s !== void 0 ? s : null;
    }
    function d(s, x, N, R, D, M, Z, B) {
      return N = M.ref, s = {
        $$typeof: k,
        type: s,
        key: x,
        props: M,
        _owner: D
      }, (N !== void 0 ? N : null) !== null ? Object.defineProperty(s, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(s, "ref", { enumerable: !1, value: null }), s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(s, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(s, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.defineProperty(s, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: B
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    }
    function i(s, x, N, R, D, M, Z, B) {
      var r = x.children;
      if (r !== void 0)
        if (R)
          if (K(r)) {
            for (R = 0; R < r.length; R++)
              h(r[R]);
            Object.freeze && Object.freeze(r);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(r);
      if (I.call(x, "key")) {
        r = t(s);
        var j = Object.keys(x).filter(function(w) {
          return w !== "key";
        });
        R = 0 < j.length ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}", q[r + R] || (j = 0 < j.length ? "{" + j.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          R,
          r,
          j,
          r
        ), q[r + R] = !0);
      }
      if (r = null, N !== void 0 && (m(N), r = "" + N), p(x) && (m(x.key), r = "" + x.key), "key" in x) {
        N = {};
        for (var b in x)
          b !== "key" && (N[b] = x[b]);
      } else N = x;
      return r && c(
        N,
        typeof s == "function" ? s.displayName || s.name || "Unknown" : s
      ), d(
        s,
        r,
        M,
        D,
        o(),
        N,
        Z,
        B
      );
    }
    function h(s) {
      typeof s == "object" && s !== null && s.$$typeof === k && s._store && (s._store.validated = 1);
    }
    var y = A, k = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), L = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), g = Symbol.for("react.consumer"), S = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), de = Symbol.for("react.activity"), ue = Symbol.for("react.client.reference"), V = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, K = Array.isArray, z = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      react_stack_bottom_frame: function(s) {
        return s();
      }
    };
    var Q, ne = {}, X = y.react_stack_bottom_frame.bind(
      y,
      l
    )(), ae = z(a(l)), q = {};
    ee.Fragment = L, ee.jsx = function(s, x, N, R, D) {
      var M = 1e4 > V.recentlyCreatedOwnerStacks++;
      return i(
        s,
        x,
        N,
        !1,
        R,
        D,
        M ? Error("react-stack-top-frame") : X,
        M ? z(a(s)) : ae
      );
    }, ee.jsxs = function(s, x, N, R, D) {
      var M = 1e4 > V.recentlyCreatedOwnerStacks++;
      return i(
        s,
        x,
        N,
        !0,
        R,
        D,
        M ? Error("react-stack-top-frame") : X,
        M ? z(a(s)) : ae
      );
    };
  }()), ee;
}
var ye;
function Re() {
  return ye || (ye = 1, process.env.NODE_ENV === "production" ? ce.exports = Ee() : ce.exports = Te()), ce.exports;
}
var e = Re();
function Ae(t) {
  return t.template ? t.template : "tab";
}
function Le(t) {
  const n = {};
  return Object.entries(t).forEach(([m, a]) => {
    const o = a.group || "General";
    n[o] || (n[o] = { label: o, type: "fields", fields: [] }), n[o]?.fields?.push({ name: m, ...a });
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
function re(t) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(t) ? t : 6;
}
async function Pe(t) {
  if (navigator.clipboard && navigator.clipboard.writeText)
    try {
      await navigator.clipboard.writeText(t);
    } catch (n) {
      throw n;
    }
  else {
    const n = document.createElement("textarea");
    n.value = t, document.body.appendChild(n), n.select();
    try {
      document.execCommand("copy");
    } catch (m) {
      throw m;
    }
    document.body.removeChild(n);
  }
}
const Y = (t, n) => typeof t == "string" ? t.replace(
  /#(\w+)#/g,
  (m, a) => n[a] !== void 0 ? String(n[a]) : m
) : Array.isArray(t) ? t.map((m) => Y(m, n)) : t && typeof t == "object" ? Object.fromEntries(
  Object.entries(t).map(([m, a]) => [
    Y(m, n),
    Y(a, n)
  ])
) : t, ke = (t) => {
  const n = Array.isArray(t?.data?.data) ? t.data.data[0] : Array.isArray(t?.data) ? t.data[0] : t?.data?.data ?? t?.data;
  return n && typeof n == "object" && !Array.isArray(n) ? n : null;
}, be = (t, n, m) => {
  const a = Array.isArray(m?.data?.data) ? m.data.data : Array.isArray(m?.data) ? m.data : m;
  if (!Array.isArray(a) || a.length === 0)
    return {};
  const o = {};
  return a.forEach((l) => {
    l[t] != null && l[n] != null && (o[l[t]] = l[n]);
  }), o;
};
function je(t, n) {
  if (!n || Object.keys(n).length === 0) return t;
  if (typeof t == "number")
    return n[String(t)] ?? t;
  if (typeof t == "string") {
    const a = t.split(",").map((o) => o.trim()).map((o) => n[o]).filter(Boolean);
    return a.length ? a.join(", ") : t;
  }
  return t;
}
const Se = "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg";
function se({ field: t, data: n, methods: m = {}, sqlOpsUrls: a, refid: o }) {
  const l = t?.name, p = `
    text-sm text-gray-600 break-words
  `, c = `
    block text-sm font-semibold  transition-all duration-300 text-gray-700 capitalize
  `, [u, d] = W(
    t.options ?? {}
  );
  A.useEffect(() => {
    let v = !0;
    return (async () => {
      if (t?.options) {
        d(t.options);
        return;
      }
      const f = t?.source ?? {};
      if (f.type === "method") {
        const T = f.method, g = T ? m[T] : void 0;
        if (g)
          try {
            const S = await Promise.resolve(g());
            v && d(S ?? {});
          } catch (S) {
            console.error("Method execution failed:", S), v && d({});
          }
        else
          v && d({});
      }
      if (f.type === "api" && f.url)
        try {
          const T = await O({
            method: f.method || "GET",
            url: f.url,
            data: f.body ?? {},
            params: f.params ?? {},
            headers: f.headers ?? {}
          }), g = t.valueKey || "value", S = t.labelKey || "title", C = be(g, S, T);
          v && d(C);
        } catch (T) {
          console.error("API execution failed:", T), v && d({});
        }
      if (t.table || t.type === "dataSelector") {
        if (!a) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let T;
          if (t.type === "dataSelector")
            T = {
              ...t,
              table: "do_lists",
              cols: "title,value",
              where: {
                groupid: t.groupid ?? ""
              }
            };
          else {
            if (!t.table || !t.columns) {
              console.error("Invalid SQL field config", t);
              return;
            }
            T = {
              ...t,
              table: t.table,
              cols: t.columns
            };
          }
          t.where && t.type !== "dataSelector" && (T.where = o ? Y(t.where, { refid: o }) : t.where);
          const g = await O({
            method: "POST",
            url: a.baseURL + a.registerQuery,
            data: { query: T },
            headers: {
              Authorization: `Bearer ${a?.accessToken}`
            }
          }), S = await O({
            method: "POST",
            url: a.baseURL + a.runQuery,
            data: {
              queryid: g.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${a?.accessToken}`
            }
          }), C = t.valueKey || "value", _ = t.labelKey || "title", E = be(C, _, S);
          v && d(E);
        } catch (T) {
          console.error("API fetch failed:", T);
        }
      }
    })(), () => {
      v = !1;
    };
  }, [
    t.options,
    t.source,
    t.table,
    t.columns,
    t.where,
    o
  ]);
  const i = typeof l == "string" ? n?.[l] : void 0, h = typeof i == "string" ? t.type === "date" ? i.split("T")[0] : t.type === "time" ? i.includes("T") ? i.slice(11, 16) : i.slice(0, 5) : je(i, u) : je(i, u), y = typeof l == "string" && (l.toLowerCase().includes("avatar") || l.toLowerCase().includes("logo")), k = h == null ? "" : typeof h == "string" || typeof h == "number" ? h : JSON.stringify(h);
  return /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ e.jsx("label", { className: c, children: t?.label }),
    /* @__PURE__ */ e.jsx("div", { className: "relative", children: y ? /* @__PURE__ */ e.jsx(
      "img",
      {
        src: String(h),
        alt: "avatar",
        className: "w-16 h-16 rounded-full object-cover border",
        onError: (v) => {
          const L = v.currentTarget;
          L.onerror = null, L.src = Se;
        }
      }
    ) : /* @__PURE__ */ e.jsx("p", { className: p, children: k }) })
  ] });
}
function _e({ commonInfo: t, infoData: n, hiddenFields: m = [] }) {
  return /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-100 p-4 min-h-3/10 overflow-auto", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    /* @__PURE__ */ e.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ e.jsx("div", { className: "relative w-42 h-42", children: /* @__PURE__ */ e.jsx(
      "img",
      {
        src: String(n.avatar_photo),
        alt: "Profile",
        className: " w-full h-full object-cover border-4 rounded-[12px] border-white shadow-lg",
        onError: (a) => {
          const o = a.currentTarget;
          o.onerror = null, o.src = Se;
        }
      }
    ) }) }),
    /* @__PURE__ */ e.jsx("div", { className: "lg:col-span-10 min-h-0 max-h-40  overflow-y-auto custom-scrollbar", children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-2", children: t.fields?.map((a, o) => {
      const l = n?.[a.name];
      return m.includes(a.name) || !l && l !== !1 && l !== 0 ? null : /* @__PURE__ */ e.jsx("div", { className: `hover:bg-gray-100 transition-colors duration-200 col-span-12 sm:col-span-6 ${te[re(a.width)] || "lg:col-span-4"}`, children: /* @__PURE__ */ e.jsx(
        se,
        {
          field: a,
          data: n ?? {}
        },
        a?.name || o
      ) }, a.name);
    }) }) })
  ] }) });
}
function me({ tabObj: t, methods: n, tabName: m, sqlOpsUrls: a, refid: o }) {
  const [l, p] = A.useState(null);
  return A.useEffect(() => {
    let c = !1;
    return (async () => {
      const d = t?.config;
      if (!d?.type) {
        c || p(null);
        return;
      }
      if (d.type === "method") {
        const i = d.method, h = i ? n[i] : void 0;
        if (h)
          try {
            const y = await Promise.resolve(h());
            c || p(y || null);
          } catch (y) {
            console.error("Method execution failed:", y), c || p(null);
          }
        else
          c || p(null);
      }
      if (d.type === "api")
        try {
          const i = await O({
            method: d.method || "GET",
            // GET, POST, etc.
            url: d.url,
            data: d.body || {},
            // request body
            params: d.params || {},
            // query params
            headers: d.headers || {}
            // optional headers
          });
          c || p(i.data || null);
        } catch (i) {
          console.error("API fetch failed:", i), c || p(null);
        }
      if (d.type === "sql" && o && o != "0") {
        if (!a) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const i = await O({
            method: "POST",
            url: a.baseURL + a.registerQuery,
            data: {
              query: {
                ...d,
                cols: d.cols,
                table: d.table,
                where: Y(d.where, {
                  refid: d.refid
                })
              }
            },
            headers: {
              Authorization: `Bearer ${a?.accessToken}`
            }
          }), h = await O({
            method: "POST",
            url: a.baseURL + a.runQuery,
            data: {
              queryid: i.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${a?.accessToken}`
            }
          }), y = ke(h);
          c || p(y);
        } catch (i) {
          console.error("API fetch failed:", i);
        }
      }
    })(), () => {
      c = !0;
    };
  }, [
    t?.config?.type || "",
    t?.config?.method || "",
    t?.config?.url || "",
    JSON.stringify(t?.config?.params || {}),
    JSON.stringify(t?.config?.body || {}),
    JSON.stringify(t?.config?.headers || {})
  ]), /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-2", children: l ? Object.keys(l).map((c, u) => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${te[re(t.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ e.jsx(
        se,
        {
          field: { name: c, label: c },
          data: l ?? {},
          methods: n,
          refid: o,
          sqlOpsUrls: a
        },
        c
      )
    },
    `field-${u}`
  )) : /* @__PURE__ */ e.jsx("div", { className: "col-span-12 flex flex-col  min-h-0", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center text-gray-500", children: [
    /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ e.jsxs("svg", { className: "w-8 h-8 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
      /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" }),
      /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m8 7 4-4 4 4" })
    ] }) }),
    /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No Data Available" }),
    /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500 text-center max-w-sm", children: "There are no records to display  at the moment." })
  ] }) }) }) });
}
function he({ tabObj: t, methods: n, tabName: m, sqlOpsUrls: a, refid: o }) {
  const [l, p] = W(1), [c, u] = W(10), [d, i] = W(""), [h, y] = A.useState([]), k = Ce(null), [v, L] = W(null), [f, T] = W({ key: "", direction: null });
  A.useEffect(() => {
    let r = !1;
    return (async () => {
      const b = t?.config;
      if (!b?.type) {
        r || y([]);
        return;
      }
      if (b.type === "method") {
        const w = b.method, P = w ? n[w] : void 0;
        if (P)
          try {
            const F = await Promise.resolve(P());
            r || y(F || []);
          } catch {
            r || y([]);
          }
        else
          r || y([]);
      }
      if (b.type === "api")
        try {
          const w = await O({
            method: b.method || "GET",
            // GET, POST, etc.
            url: b.url,
            data: b.body || {},
            // request body
            params: b.params || {},
            // query params
            headers: b.headers || {}
            // optional headers
          });
          r || y(w.data || {});
        } catch (w) {
          console.error("API fetch failed:", w), r || y([]);
        }
      if (b.type === "sql" && o && o != "0") {
        if (!a) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const { form: w, actions: P, uimode: F, type: oe, unilinks: le, DEBUG: ie, ...G } = b, H = await O({
            method: "POST",
            url: a.baseURL + a.registerQuery,
            data: {
              query: {
                ...G,
                where: Y(b.where, {
                  refid: o
                })
              }
            },
            headers: {
              Authorization: `Bearer ${a?.accessToken}`
            }
          }), fe = await O({
            method: "POST",
            url: a.baseURL + a.runQuery,
            data: {
              queryid: H.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${a?.accessToken}`
            }
          });
          r || y(fe.data?.data ?? fe.data ?? {});
        } catch (w) {
          console.error("API fetch failed:", w);
        }
      }
    })(), () => {
      r = !0;
    };
  }, [
    t?.config?.type || "",
    t?.config?.method || "",
    t?.config?.url || "",
    JSON.stringify(t?.config?.params || {}),
    JSON.stringify(t?.config?.body || {}),
    JSON.stringify(t?.config?.headers || {})
  ]);
  const g = Array.isArray(h) ? h : [h], C = ((r) => {
    const j = /* @__PURE__ */ new Set();
    return r.forEach((b) => {
      b && typeof b == "object" && Object.keys(b).forEach((w) => j.add(w));
    }), Array.from(j);
  })(g), _ = t?.vmode === "edit", E = t?.config, $ = E?.["popup.form"] ? "popup.form" : (E?.form, "form"), J = E?.[$] && Object.keys(E?.[$]).length > 0, de = E?.info && Object.keys(E?.info).length > 0, ue = (r) => {
    let j = "asc";
    f.key === r && f.direction === "asc" ? j = "desc" : f.key === r && f.direction === "desc" && (j = null), T({ key: r, direction: j });
  }, V = (r) => !f.key || !f.direction ? r : [...r].sort((j, b) => {
    const w = j[f.key], P = b[f.key];
    if (w == null) return f.direction === "asc" ? 1 : -1;
    if (P == null) return f.direction === "asc" ? -1 : 1;
    if (typeof w == "boolean" && typeof P == "boolean")
      return f.direction === "asc" ? w === P ? 0 : w ? -1 : 1 : w === P ? 0 : w ? 1 : -1;
    const F = new Date(w), oe = new Date(P);
    if (!isNaN(F.getTime()) && !isNaN(oe.getTime()))
      return f.direction === "asc" ? F.getTime() - oe.getTime() : oe.getTime() - F.getTime();
    const le = parseFloat(w), ie = parseFloat(P);
    if (!isNaN(le) && !isNaN(ie))
      return f.direction === "asc" ? le - ie : ie - le;
    const G = String(w).toLowerCase(), H = String(P).toLowerCase();
    return f.direction === "asc" ? G < H ? -1 : G > H ? 1 : 0 : G > H ? -1 : G < H ? 1 : 0;
  }), I = xe(() => {
    let r = g;
    if (d.trim()) {
      const j = d.toLowerCase();
      r = g.filter((b) => C.some((w) => {
        const P = b[w];
        return P == null ? !1 : String(P).toLowerCase().includes(j);
      }));
    }
    return V(r);
  }, [g, d, C, f]), K = Math.ceil(I.length / c), z = (l - 1) * c, Q = z + c, ne = I.slice(z, Q), X = (r) => {
    p(Math.max(1, Math.min(r, K)));
  }, ae = (r) => {
    u(r), p(1);
  }, q = () => {
    i("");
  }, s = (r, j) => {
    n?.editInfoRecord?.({ [$]: t?.config?.[$] }, o, r);
  }, x = (r) => {
    n?.viewInfoRecord?.(r, t?.config?.info);
  }, N = (r, j) => {
    n?.deleteInfoRecord?.(r, m);
  }, R = () => {
    n?.addInfoRecord?.({ [$]: t?.config?.[$] }, o);
  }, D = (r) => r.split("_").map((j) => j.charAt(0).toUpperCase() + j.slice(1)).join(" "), M = (r, j) => {
    if (r == null || r === "")
      return /* @__PURE__ */ e.jsx("span", { className: "text-gray-400 italic", children: "-" });
    if (typeof r == "boolean")
      return /* @__PURE__ */ e.jsx("span", { className: `inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${r ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`, children: r ? "Yes" : "No" });
    switch (j?.toLowerCase()) {
      case "checkbox":
        return /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "checkbox",
            checked: !!r,
            readOnly: !0,
            className: "w-4 h-4 text-green-600 accent-green-600 cursor-default"
          }
        );
      case "date":
        return new Date(r).toLocaleDateString();
      case "time":
        return new Date(r).toLocaleTimeString();
      case "datetime":
        return new Date(r).toLocaleString();
      case "currency":
        if (typeof r == "number")
          return new Intl.NumberFormat(void 0, {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2
          }).format(r);
      case "number":
      case "num":
        return /* @__PURE__ */ e.jsx("span", { className: "text-center", children: Number(r).toLocaleString() });
      case "url":
        return r ? /* @__PURE__ */ e.jsx("a", { href: r, target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 underline", children: r }) : null;
      case "email":
        return r ? /* @__PURE__ */ e.jsx(
          "a",
          {
            href: `mailto:${r}`,
            className: "text-blue-600 hover:text-blue-800 hover:underline transition-colors",
            children: r
          }
        ) : null;
      case "tel":
      case "mob":
      case "phone":
      case "mobile":
        return r ? /* @__PURE__ */ e.jsx(
          "a",
          {
            href: `tel:${r}`,
            className: "text-blue-600 hover:text-blue-800 hover:underline transition-colors",
            children: r
          }
        ) : null;
      case "geoloc":
      case "geolocation":
      case "geoaddress":
        return r ? /* @__PURE__ */ e.jsx(
          "a",
          {
            href: `https://www.google.com/maps/place/${encodeURIComponent(r)}`,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-blue-600 underline",
            children: r
          }
        ) : null;
      case "color":
        return r ? /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ e.jsx("span", { className: "w-5 h-5 rounded-full border", style: { backgroundColor: r } }) }) : null;
      case "avatar":
        return /* @__PURE__ */ e.jsx(
          "img",
          {
            src: r || "/images/user.png",
            alt: "avatar",
            className: "w-8 h-8 rounded-full object-cover"
          }
        );
      case "photo":
      case "picture":
      case "media":
        return /* @__PURE__ */ e.jsx(
          "img",
          {
            src: r || "/images/noimg.png",
            alt: "media",
            className: "w-12 h-12 rounded object-cover"
          }
        );
      case "file":
      case "attachment":
        return r ? /* @__PURE__ */ e.jsx("a", { href: r, target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 underline", children: "FILE" }) : "No File";
      case "json":
        try {
          const b = typeof r == "string" ? JSON.parse(r) : r;
          return /* @__PURE__ */ e.jsx("pre", { className: "whitespace-pre-wrap text-xs bg-gray-100 p-2 rounded", children: JSON.stringify(b, null, 2) });
        } catch {
          return String(r);
        }
      case "pretty":
        return /* @__PURE__ */ e.jsx("pre", { className: "whitespace-pre-wrap text-sm text-gray-700 bg-gray-100 p-2 rounded", children: typeof r == "object" ? JSON.stringify(r, null, 2) : String(r) });
      case "uppercase":
        return String(r).toUpperCase();
      case "lowercase":
        return String(r).toLowerCase();
      case "html":
        return /* @__PURE__ */ e.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
      default:
        return String(r);
    }
  }, Z = (r, j) => {
    Pe(r).then(() => {
      L(j), k.current && clearTimeout(k.current), k.current = setTimeout(() => {
        L("");
      }, 2e3);
    }).catch(() => {
      L("");
    });
  }, B = xe(() => ({
    totalRows: I.length,
    columns: C.length,
    currentPageStart: z + 1,
    currentPageEnd: Math.min(Q, I.length),
    isFiltered: d.trim().length > 0
  }), [I, g, C, z, Q]);
  return g.length === 0 || C.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center text-gray-500", children: [
    /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ e.jsxs("svg", { className: "w-8 h-8 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
      /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" }),
      /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m8 7 4-4 4 4" })
    ] }) }),
    /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No Data Available" }),
    /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500 text-center max-w-sm", children: "There are no records to display in the grid view at the moment." }),
    J && /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: R,
        className: "mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-action cursor-pointer",
        children: [
          /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 mr-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 4v16m8-8H4" }) }),
          "Add Record"
        ]
      }
    )
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "w-full overflow-hidden flex-1 flex flex-col", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "my-4 mx-2 flex  gap-4 justify-between items-start sm:items-center", children: [
      /* @__PURE__ */ e.jsx("div", { className: "flex-1 max-w-md", children: /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ e.jsx("svg", { className: "h-4 w-4 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) }) }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            placeholder: "Search across all columns...",
            value: d,
            onChange: (r) => i(r.target.value),
            className: "block w-full px-10 py-2 border border-gray-300 rounded-lg text-sm placeholder-gray-500  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
          }
        ),
        d && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: q,
            className: "absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600",
            title: "Clear search",
            children: /* @__PURE__ */ e.jsx("svg", { className: "h-4 w-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
          }
        )
      ] }) }),
      J && /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: R,
          className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-action cursor-pointer",
          children: [
            /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 mr-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 4v16m8-8H4" }) }),
            "Add Record"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between py-1 border-t border-gray-200 ", children: [
      /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-6 text-sm", children: /* @__PURE__ */ e.jsx("span", { className: "flex items-center gap-2", children: /* @__PURE__ */ e.jsxs("span", { className: "text-gray-600", children: [
        "Showing ",
        /* @__PURE__ */ e.jsxs("strong", { className: "text-gray-900", children: [
          B.currentPageStart,
          "-",
          B.currentPageEnd
        ] }),
        " of ",
        /* @__PURE__ */ e.jsx("strong", { className: "text-gray-900", children: B.totalRows }),
        " records"
      ] }) }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex justify-end gap-4", children: [
        /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-gray-600", children: "Show:" }),
          /* @__PURE__ */ e.jsxs(
            "select",
            {
              value: c,
              onChange: (r) => ae(Number(r.target.value)),
              className: "border border-gray-300 text-gray-900 rounded px-1 py-1 text-sm outline-0",
              children: [
                /* @__PURE__ */ e.jsx("option", { value: 5, children: "5" }),
                /* @__PURE__ */ e.jsx("option", { value: 10, children: "10" }),
                /* @__PURE__ */ e.jsx("option", { value: 25, children: "25" }),
                /* @__PURE__ */ e.jsx("option", { value: 50, children: "50" }),
                /* @__PURE__ */ e.jsx("option", { value: 100, children: "100" })
              ]
            }
          ),
          /* @__PURE__ */ e.jsx("span", { className: "text-gray-600", children: "per page" })
        ] }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => X(l - 1),
              disabled: l === 1,
              className: "flex items-center gap-2 text-sm font-medium text-action cursor-pointer bg-white rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
              children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
            }
          ),
          /* @__PURE__ */ e.jsx("span", { className: "flex items-center gap-2 text-sm", children: /* @__PURE__ */ e.jsxs("span", { className: "text-gray-600", children: [
            "Page ",
            /* @__PURE__ */ e.jsx("strong", { className: "text-gray-900", children: l }),
            " of ",
            /* @__PURE__ */ e.jsx("strong", { className: "text-gray-900", children: K })
          ] }) }),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => X(l + 1),
              disabled: l === K,
              className: "flex items-center gap-2 text-sm font-medium text-action cursor-pointer bg-white rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
              children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
            }
          )
        ] })
      ] })
    ] }),
    I.length === 0 && d.trim() && /* @__PURE__ */ e.jsxs("div", { className: "h-full flex flex-1 flex-col items-center justify-center py-22 text-gray-500", children: [
      /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ e.jsx("svg", { className: "w-8 h-8 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) }) }),
      /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No Results Found" }),
      /* @__PURE__ */ e.jsxs("p", { className: "text-sm text-gray-500 text-center max-w-sm mb-4", children: [
        "No records match your search for ",
        /* @__PURE__ */ e.jsxs("strong", { children: [
          '"',
          d,
          '"'
        ] })
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: q,
          className: "inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 cursor-pointer",
          children: "Clear Search"
        }
      )
    ] }),
    I.length > 0 && /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx("div", { className: " overflow-auto min-w-full divide-y divide-gray-200 border border-gray-200 bordr-t", children: /* @__PURE__ */ e.jsxs("table", { className: "min-w-full h-full", children: [
      /* @__PURE__ */ e.jsx("thead", { className: " text-action", children: /* @__PURE__ */ e.jsxs("tr", { children: [
        _ && /* @__PURE__ */ e.jsx(
          "th",
          {
            scope: "col",
            className: "bg-muted px-4 sm:px-6 py-2 text-left text-xs font-bold uppercase tracking-wider w-32 sticky top-0 left-0 z-20",
            children: "Actions"
          }
        ),
        C.map((r, j) => /* @__PURE__ */ e.jsx(
          "th",
          {
            scope: "col",
            className: "bg-muted sticky top-0 z-0 px-4 sm:px-6 py-2 text-left text-xs font-bold uppercase tracking-wider",
            children: /* @__PURE__ */ e.jsxs(
              "div",
              {
                className: "flex items-center gap-1 cursor-pointer select-none",
                onClick: () => ue(r),
                children: [
                  /* @__PURE__ */ e.jsx("span", { className: "truncate", title: D(r), children: D(r) }),
                  f?.key === r ? f.direction === "asc" ? /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-blue-600", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ e.jsx("path", { d: "M5 12l5-5 5 5H5z" }) }) : /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-blue-600", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ e.jsx("path", { d: "M5 8l5 5 5-5H5z" }) }) : /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-gray-400 group-hover:text-gray-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" }) })
                ]
              }
            )
          },
          r
        ))
      ] }) }),
      /* @__PURE__ */ e.jsx("tbody", { className: "bg-white divide-y divide-gray-200 ", children: ne.map((r, j) => /* @__PURE__ */ e.jsxs(
        "tr",
        {
          className: `hover:bg-secondary transition-colors duration-150 ${j % 2 === 0 ? "bg-white" : "bg-gray-50"}`,
          children: [
            _ && /* @__PURE__ */ e.jsx("td", { className: "px-4 sm:px-6 py-1 whitespace-nowrap text-sm bg-muted text-gray-900 sticky left-0 z-10", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
              de && /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: () => x(r),
                  className: "inline-flex items-center px-2 py-1 text-xs font-medium rounded cursor-pointer text-action",
                  title: "View",
                  children: /* @__PURE__ */ e.jsxs(
                    "svg",
                    {
                      className: "w-4 h-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: [
                        /* @__PURE__ */ e.jsx(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          }
                        ),
                        /* @__PURE__ */ e.jsx(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          }
                        )
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: () => s(r),
                  className: "inline-flex items-center px-2 py-1 text-xs font-medium rounded cursor-pointer text-action",
                  title: "Edit",
                  children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" }) })
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: () => N(r),
                  className: "text-red-600 hover:text-red-800 cursor-pointer transition-colors p-1 hover:bg-red-100 rounded",
                  title: "Delete",
                  children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }) })
                }
              )
            ] }) }),
            C.map((b) => /* @__PURE__ */ e.jsx(
              "td",
              {
                className: "px-4 sm:px-6 py-1 text-sm text-gray-900",
                children: /* @__PURE__ */ e.jsxs("div", { className: "relative group flex items-center", children: [
                  /* @__PURE__ */ e.jsx("div", { className: "truncate max-w-xs sm:max-w-none", children: M(r[b] ?? "", b) }),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      onClick: () => Z(r[b] || "", `${r.id}-${b}`),
                      className: "absolute -right-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity ml-2 p-1 rounded bg-gray-50 hover:bg-gray-100 cursor-pointer",
                      title: "Copy",
                      children: v === `${r.id}-${b}` ? /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx("span", { className: "text-xs text-gray-600", children: "Copied!" }) }) : /* @__PURE__ */ e.jsx("i", { className: "fa-regular fa-copy" })
                    }
                  )
                ] })
              },
              b
            ))
          ]
        },
        z + j
      )) })
    ] }) }) })
  ] });
}
const ve = ({ groups: t, groupNames: n, setActiveTabIndex: m, activeTabIndex: a }) => /* @__PURE__ */ e.jsx(
  "nav",
  {
    className: "flex flex-col overflow-y-auto h-full px-2 py-1 space-y-1",
    children: n.length > 0 ? n.map((o, l) => /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: () => m(l),
        className: `cursor-pointer w-full text-left py-2 px-3 rounded-md text-sm font-semibold transition-all duration-200 ${a === l ? "bg-white shadow text-action" : "text-gray-600 hover:bg-white/50"}`,
        children: /* @__PURE__ */ e.jsx("span", { className: "truncate", children: t[o]?.label || o })
      },
      o
    )) : /* @__PURE__ */ e.jsx("div", { className: "py-3 px-2 text-sm text-gray-500", children: "No group available" })
  }
), $e = ({
  groups: t,
  groupNames: n,
  setActiveTabIndex: m,
  activeTabIndex: a,
  layoutConfig: o,
  showScrollHint: l,
  isCommonInfo: p,
  tabsNavRef: c
}) => {
  const [u, d] = A.useState(!1), i = A.useRef(null);
  return A.useEffect(() => {
    const h = (y) => {
      i.current && !i.current.contains(y.target) && d(!1);
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, []), /* @__PURE__ */ e.jsxs("div", { className: o?.tabNavClass || "relative z-10", children: [
    l && /* @__PURE__ */ e.jsx("div", { className: "absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 flex items-center justify-center", children: /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: () => c.current?.scrollBy({ left: -200, behavior: "smooth" }),
        className: "w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group",
        children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
      }
    ) }),
    /* @__PURE__ */ e.jsxs("div", { className: "absolute right-0 top-1/2 -translate-y-1/2 z-20 w-18 flex items-center justify-between pr-1", children: [
      l && /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => c.current?.scrollBy({ left: 200, behavior: "smooth" }),
          className: "w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group",
          children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "relative", ref: i, children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => d(!u),
            className: "ml-1 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200",
            children: "⋮"
          }
        ),
        u && /* @__PURE__ */ e.jsx("div", { className: "absolute right-0 mt-2 w-48 max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-30", children: n.map((h, y) => /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              m(y), d(!1);
            },
            className: `w-full text-left px-3 py-2 text-sm truncate hover:bg-gray-100 ${a === y ? "bg-gray-50 font-semibold text-action" : "text-gray-700"}`,
            children: t[h]?.label || h
          },
          h
        )) })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: `relative bg-gray-100 ${p ? "" : "rounded-t-lg"} px-12 pt-1 shadow-inner overflow-hidden`, children: /* @__PURE__ */ e.jsx(
      "nav",
      {
        ref: c,
        className: "relative flex overflow-x-auto scrollbar-hide scroll-smooth",
        style: {
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        },
        children: n.length > 0 ? n.map((h, y) => /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => m(y),
            className: `relative cursor-pointer flex-shrink-0
            min-w-[8rem]   
            py-2 px-8
            rounded-t-lg text-xs sm:text-sm font-semibold
            transition-all duration-300 ease-out
            focus:outline-none whitespace-nowrap
            ${a === y ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
            children: /* @__PURE__ */ e.jsx("span", { className: "relative z-10 flex items-center justify-center gap-1 sm:gap-2", children: /* @__PURE__ */ e.jsx("span", { className: "truncate", children: t[h]?.label || h }) })
          },
          h
        )) : /* @__PURE__ */ e.jsx("div", { className: "py-3 px-6 text-sm text-gray-500", children: "No group available" })
      }
    ) })
  ] });
}, we = ({
  groupNames: t,
  activeTabIndex: n,
  layoutConfig: m,
  tabObj: a,
  infoData: o,
  setActiveTabIndex: l,
  renderView: p,
  methods: c = {},
  refid: u,
  sqlOpsUrls: d
}) => /* @__PURE__ */ e.jsxs(
  "div",
  {
    className: "bg-white rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex-1 flex flex-col min-h-0",
    children: [
      t.length > 0 ? a?.fields ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ e.jsx("div", { className: m?.fieldGridClass || "grid grid-cols-12 gap-2", children: a.fields.map((i, h) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: `col-span-12 sm:col-span-6 ${te[re(i.width)] || "lg:col-span-2"}`,
          children: /* @__PURE__ */ e.jsx(
            se,
            {
              field: i,
              data: o ?? {},
              methods: c,
              refid: u,
              sqlOpsUrls: d
            }
          )
        },
        i?.name ?? `field-${h}`
      )) }) }) : a ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: p(a, t[n] || "") }) : null : /* @__PURE__ */ e.jsx("div", { className: "flex-1 col-span-full text-center py-8 text-gray-500", children: "No data available" }),
      t.length > 5 && /* @__PURE__ */ e.jsxs("div", { className: "mt-10 pt-2 border-t border-gray-100 flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-500", children: [
          /* @__PURE__ */ e.jsxs("span", { children: [
            "Tab ",
            n + 1,
            " of ",
            t.length
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex gap-1", children: [
            t.slice(0, 5).map((i, h) => /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${h === n ? "bg-action w-6" : "bg-gray-300"}`
              },
              h
            )),
            t.length > 5 && /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-gray-400 ml-1", children: [
              "+",
              t.length - 5
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
              onClick: () => l(Math.min(t.length - 1, n + 1)),
              disabled: n === t.length - 1,
              className: "px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
              children: "Next"
            }
          )
        ] })
      ] }),
      t.length <= 5 && /* @__PURE__ */ e.jsx("div", { className: "mt-6 pt-3 border-t border-gray-100", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
        /* @__PURE__ */ e.jsxs("span", { children: [
          "Tab ",
          n + 1,
          " of ",
          t.length
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex gap-1", children: t.map((i, h) => /* @__PURE__ */ e.jsx(
          "div",
          {
            className: `w-2 h-2 rounded-full transition-all duration-300 ${h === n ? "bg-action w-6" : "bg-gray-300"}`
          },
          h
        )) })
      ] }) })
    ]
  },
  t[n]
);
function Ne({
  groups: t,
  methods: n = {},
  infoData: m,
  viewRenderers: a = {},
  isCommonInfo: o,
  layoutConfig: l = {},
  viewMode: p,
  sqlOpsUrls: c = {},
  refid: u
}) {
  const [d, i] = A.useState(0), [h, y] = A.useState(!1), k = A.useRef(null), v = Object.keys(t);
  A.useEffect(() => {
    const E = () => {
      if (k.current) {
        const $ = k.current;
        y($.scrollWidth > $.clientWidth);
      }
    };
    return E(), window.addEventListener("resize", E), () => window.removeEventListener("resize", E);
  }, [v.length]), A.useEffect(() => {
    if (k.current && v.length > 0) {
      const E = k.current.children[d];
      E && E.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [d, v.length]);
  const L = p === "tableft", f = p === "tabright", T = !L && !f, g = t[v[d] ?? ""] || null, S = {
    single: (E, $) => /* @__PURE__ */ e.jsx(me, { tabObj: E, methods: n, tabName: $, sqlOpsUrls: c, refid: u }),
    grid: (E, $) => /* @__PURE__ */ e.jsx(he, { tabObj: E, methods: n, tabName: $, sqlOpsUrls: c, refid: u })
  }, C = g?.config?.uimode, _ = a[C] || S[C] || (() => /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No UI mode for this type" }));
  return T ? /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex flex-col min-h-0 ", children: [
    /* @__PURE__ */ e.jsx(
      $e,
      {
        groupNames: v,
        groups: t,
        setActiveTabIndex: i,
        activeTabIndex: d,
        tabsNavRef: k,
        isCommonInfo: o,
        showScrollHint: h,
        layoutConfig: l
      }
    ),
    /* @__PURE__ */ e.jsx(
      we,
      {
        groupNames: v,
        activeTabIndex: d,
        layoutConfig: l,
        tabObj: g,
        infoData: m,
        setActiveTabIndex: i,
        renderView: _,
        groups: t,
        methods: n,
        refid: u,
        sqlOpsUrls: c
      }
    )
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex min-h-0", children: [
    L && /* @__PURE__ */ e.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ e.jsx(
      ve,
      {
        groupNames: v,
        groups: t,
        setActiveTabIndex: i,
        activeTabIndex: d
      }
    ) }),
    /* @__PURE__ */ e.jsx("main", { className: "flex-1 flex flex-col min-h-0 overflow-auto", children: /* @__PURE__ */ e.jsx(
      we,
      {
        groupNames: v,
        activeTabIndex: d,
        layoutConfig: l,
        tabObj: g,
        infoData: m,
        setActiveTabIndex: i,
        renderView: _,
        groups: t,
        methods: n,
        refid: u,
        sqlOpsUrls: c
      }
    ) }),
    f && /* @__PURE__ */ e.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ e.jsx(
      ve,
      {
        groupNames: v,
        groups: t,
        setActiveTabIndex: i,
        activeTabIndex: d
      }
    ) })
  ] });
}
function Me({ title: t, children: n, isFirst: m }) {
  const [a, o] = W(m);
  return /* @__PURE__ */ e.jsx("div", { className: "group relative mt-1 flex-1 flex flex-col min-h-0 max-h-screen", children: /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex flex-col min-h-0 relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: () => o(!a),
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: `w-3 h-3 rounded-full transition-all duration-300 ${a ? "bg-action" : "bg-gray-300"}` }),
            /* @__PURE__ */ e.jsx("h3", { className: "text-md capitalize font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: t })
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
function Oe({
  groups: t,
  methods: n = {},
  infoData: m,
  viewRenderers: a = {},
  sqlOpsUrls: o = {},
  refid: l
}) {
  const p = {
    single: (c, u) => /* @__PURE__ */ e.jsx(me, { tabObj: c, methods: n, tabName: u, sqlOpsUrls: o, refid: l }),
    grid: (c, u) => /* @__PURE__ */ e.jsx(he, { tabObj: c, methods: n, tabName: u, sqlOpsUrls: o, refid: l })
  };
  return /* @__PURE__ */ e.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ e.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-2 flex flex-col min-h-0", children: t && Object.entries(t).map(([c, u], d) => /* @__PURE__ */ e.jsx(Me, { title: c, isFirst: d === 0, children: u?.fields ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-2", children: u.fields.map((i, h) => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${te[re(i.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ e.jsx(se, { methods: n, field: i, data: m ?? {}, sqlOpsUrls: o, refid: l })
    },
    i?.name ?? `field-${h}`
  )) }) }) : u ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: a[u.config?.uimode]?.(u) || p[u.config?.uimode]?.(u, c) || /* @__PURE__ */ e.jsx("div", { children: "No renderer for this type" }) }) : null }, c)) }) }) });
}
function De({ title: t, children: n }) {
  return /* @__PURE__ */ e.jsx("div", { className: "group relative mt-1 flex-1 flex flex-col min-h-0 max-h-screen", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col min-h-0 relative  bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ e.jsx("div", { className: "w-3 h-3 rounded-full transition-all duration-300 bg-action" }),
          /* @__PURE__ */ e.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r capitalize from-gray-800 to-gray-600 bg-clip-text text-transparent", children: t })
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
function Ie({
  groups: t,
  methods: n = {},
  infoData: m,
  viewRenderers: a = {},
  sqlOpsUrls: o = {},
  refid: l
}) {
  const p = {
    single: (c, u) => /* @__PURE__ */ e.jsx(me, { tabObj: c, methods: n, tabName: u, sqlOpsUrls: o, refid: l }),
    grid: (c, u) => /* @__PURE__ */ e.jsx(he, { tabObj: c, methods: n, tabName: u, sqlOpsUrls: o, refid: l })
  };
  return /* @__PURE__ */ e.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ e.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-2  flex flex-col min-h-0", children: t && Object.entries(t).map(([c, u], d) => /* @__PURE__ */ e.jsx(De, { title: c, children: u?.fields ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-2", children: u.fields.map((i, h) => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${te[re(i.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ e.jsx(se, { methods: n, field: i, data: m ?? {}, sqlOpsUrls: o, refid: l })
    },
    i?.name ?? `field-${h}`
  )) }) }) : u ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: a[u.config?.uimode]?.(u) || p[u.config?.uimode]?.(u, c) || /* @__PURE__ */ e.jsx("div", { children: "No renderer for this type" }) }) : null }, c)) }) }) });
}
function Fe({
  infoViewJson: t,
  data: n = {},
  hiddenFields: m = [],
  groupFieldsFn: a = Le,
  layoutConfig: o = {},
  viewRenderers: l = {},
  methods: p = {}
}) {
  const [c, u] = A.useState({}), d = Ae(t.infoview ?? {}), i = t.endPoints ?? {}, h = A.useMemo(
    () => a(t.fields || {}),
    [t.fields, a]
  ), y = t?.source?.refid;
  let k = { ...h };
  t.infoview?.groups && (k = { ...k, ...t.infoview.groups }), A.useEffect(() => {
    let f = !1;
    return (async () => {
      const g = t?.source;
      if (!g?.type) {
        f || u({});
        return;
      }
      if (g.type === "method") {
        const S = g.method, C = S ? p[S] : void 0;
        if (C)
          try {
            const _ = await Promise.resolve(C());
            f || u(_ || {});
          } catch (_) {
            console.error("Method execution failed:", _), f || u({});
          }
        else
          f || u({});
      }
      if (g.type === "api")
        try {
          const S = await O({
            method: g.method || "GET",
            url: g.url,
            data: g.body || {},
            params: g.params || {},
            headers: g.headers || {}
          });
          f || u(S.data || {});
        } catch (S) {
          console.error("API fetch failed:", S), f || u({});
        }
      if (g.type === "sql" && g.refid && g.refid != "0") {
        if (!i) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const S = await O({
            method: "POST",
            url: i.baseURL + i.registerQuery,
            data: {
              query: {
                ...g,
                cols: g.cols,
                table: g.table,
                where: Y(g.where, {
                  refid: g.refid
                })
              }
            },
            headers: {
              Authorization: `Bearer ${i?.accessToken}`
            }
          }), C = await O({
            method: "POST",
            url: i.baseURL + i.runQuery,
            data: {
              queryid: S.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${i?.accessToken}`
            }
          }), _ = ke(C) ?? {};
          f || u(_);
        } catch (S) {
          console.error("API fetch failed:", S);
        }
      }
    })(), () => {
      f = !0;
    };
  }, [
    t?.source?.type || "",
    t?.source?.method || "",
    t?.source?.url || "",
    JSON.stringify(t?.source?.params || {}),
    JSON.stringify(t?.source?.body || {}),
    JSON.stringify(t?.source?.headers || {})
  ]);
  const v = k.common || null;
  v && delete k.common;
  const L = (f) => {
    switch (f) {
      case "accordion":
        return /* @__PURE__ */ e.jsx(
          Oe,
          {
            groups: k,
            methods: p,
            infoData: c,
            viewRenderers: l,
            sqlOpsUrls: i,
            refid: y
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
            methods: p,
            infoData: c,
            isCommonInfo: !!v,
            viewMode: f,
            sqlOpsUrls: i,
            refid: y
          }
        );
      case "cards":
        return /* @__PURE__ */ e.jsx(
          Ie,
          {
            groups: k,
            viewRenderers: l,
            methods: p,
            infoData: c,
            sqlOpsUrls: i,
            refid: y
          }
        );
      default:
        return /* @__PURE__ */ e.jsx(
          Ne,
          {
            groups: k,
            viewRenderers: l,
            layoutConfig: o,
            methods: p,
            infoData: c,
            isCommonInfo: !!v,
            viewMode: f,
            sqlOpsUrls: i,
            refid: y
          }
        );
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: o.containerClass || "h-screen flex flex-col ", children: [
    v && /* @__PURE__ */ e.jsx(
      _e,
      {
        commonInfo: v,
        infoData: c,
        hiddenFields: m
      }
    ),
    L(d)
  ] });
}
export {
  Fe as InfoView
};
