import R, { useState as H, useRef as we, useMemo as fe } from "react";
import I from "axios";
var ie = { exports: {} }, U = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function Ne() {
  if (xe) return U;
  xe = 1;
  var r = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function d(a, i, c) {
    var h = null;
    if (c !== void 0 && (h = "" + c), i.key !== void 0 && (h = "" + i.key), "key" in i) {
      c = {};
      for (var o in i)
        o !== "key" && (c[o] = i[o]);
    } else c = i;
    return i = c.ref, {
      $$typeof: r,
      type: a,
      key: h,
      ref: i !== void 0 ? i : null,
      props: c
    };
  }
  return U.Fragment = n, U.jsx = d, U.jsxs = d, U;
}
var X = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var he;
function ke() {
  return he || (he = 1, process.env.NODE_ENV !== "production" && function() {
    function r(s) {
      if (s == null) return null;
      if (typeof s == "function")
        return s.$$typeof === M ? null : s.displayName || s.name || null;
      if (typeof s == "string") return s;
      switch (s) {
        case P:
          return "Fragment";
        case F:
          return "Profiler";
        case g:
          return "StrictMode";
        case _:
          return "Suspense";
        case L:
          return "SuspenseList";
        case ce:
          return "Activity";
      }
      if (typeof s == "object")
        switch (typeof s.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), s.$$typeof) {
          case C:
            return "Portal";
          case T:
            return (s.displayName || "Context") + ".Provider";
          case j:
            return (s._context.displayName || "Context") + ".Consumer";
          case E:
            var x = s.render;
            return s = s.displayName, s || (s = x.displayName || x.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
          case O:
            return x = s.displayName || null, x !== null ? x : r(s.type) || "Memo";
          case re:
            x = s._payload, s = s._init;
            try {
              return r(s(x));
            } catch {
            }
        }
      return null;
    }
    function n(s) {
      return "" + s;
    }
    function d(s) {
      try {
        n(s);
        var x = !1;
      } catch {
        x = !0;
      }
      if (x) {
        x = console;
        var w = x.error, S = typeof Symbol == "function" && Symbol.toStringTag && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return w.call(
          x,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          S
        ), n(s);
      }
    }
    function a(s) {
      if (s === P) return "<>";
      if (typeof s == "object" && s !== null && s.$$typeof === re)
        return "<...>";
      try {
        var x = r(s);
        return x ? "<" + x + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var s = W.A;
      return s === null ? null : s.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function h(s) {
      if (z.call(s, "key")) {
        var x = Object.getOwnPropertyDescriptor(s, "key").get;
        if (x && x.isReactWarning) return !1;
      }
      return s.key !== void 0;
    }
    function o(s, x) {
      function w() {
        J || (J = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          x
        ));
      }
      w.isReactWarning = !0, Object.defineProperty(s, "key", {
        get: w,
        configurable: !0
      });
    }
    function l() {
      var s = r(this.type);
      return te[s] || (te[s] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), s = this.props.ref, s !== void 0 ? s : null;
    }
    function f(s, x, w, S, $, A, t, v) {
      return w = A.ref, s = {
        $$typeof: N,
        type: s,
        key: x,
        props: A,
        _owner: $
      }, (w !== void 0 ? w : null) !== null ? Object.defineProperty(s, "ref", {
        enumerable: !1,
        get: l
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
        value: t
      }), Object.defineProperty(s, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: v
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    }
    function u(s, x, w, S, $, A, t, v) {
      var m = x.children;
      if (m !== void 0)
        if (S)
          if (V(m)) {
            for (S = 0; S < m.length; S++)
              b(m[S]);
            Object.freeze && Object.freeze(m);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else b(m);
      if (z.call(x, "key")) {
        m = r(s);
        var y = Object.keys(x).filter(function(D) {
          return D !== "key";
        });
        S = 0 < y.length ? "{key: someKey, " + y.join(": ..., ") + ": ...}" : "{key: someKey}", ne[m + S] || (y = 0 < y.length ? "{" + y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          S,
          m,
          y,
          m
        ), ne[m + S] = !0);
      }
      if (m = null, w !== void 0 && (d(w), m = "" + w), h(x) && (d(x.key), m = "" + x.key), "key" in x) {
        w = {};
        for (var k in x)
          k !== "key" && (w[k] = x[k]);
      } else w = x;
      return m && o(
        w,
        typeof s == "function" ? s.displayName || s.name || "Unknown" : s
      ), f(
        s,
        m,
        A,
        $,
        i(),
        w,
        t,
        v
      );
    }
    function b(s) {
      typeof s == "object" && s !== null && s.$$typeof === N && s._store && (s._store.validated = 1);
    }
    var p = R, N = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), j = Symbol.for("react.consumer"), T = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), re = Symbol.for("react.lazy"), ce = Symbol.for("react.activity"), M = Symbol.for("react.client.reference"), W = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, z = Object.prototype.hasOwnProperty, V = Array.isArray, G = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(s) {
        return s();
      }
    };
    var J, te = {}, q = p.react_stack_bottom_frame.bind(
      p,
      c
    )(), se = G(a(c)), ne = {};
    X.Fragment = P, X.jsx = function(s, x, w, S, $) {
      var A = 1e4 > W.recentlyCreatedOwnerStacks++;
      return u(
        s,
        x,
        w,
        !1,
        S,
        $,
        A ? Error("react-stack-top-frame") : q,
        A ? G(a(s)) : se
      );
    }, X.jsxs = function(s, x, w, S, $) {
      var A = 1e4 > W.recentlyCreatedOwnerStacks++;
      return u(
        s,
        x,
        w,
        !0,
        S,
        $,
        A ? Error("react-stack-top-frame") : q,
        A ? G(a(s)) : se
      );
    };
  }()), X;
}
var ge;
function Ce() {
  return ge || (ge = 1, process.env.NODE_ENV === "production" ? ie.exports = Ne() : ie.exports = ke()), ie.exports;
}
var e = Ce();
function Se(r) {
  return r.template ? r.template : "tab";
}
function Ee(r) {
  const n = {};
  return Object.entries(r).forEach(([d, a]) => {
    const i = a.group || "General";
    n[i] || (n[i] = { label: i, type: "fields", fields: [] }), n[i]?.fields?.push({ name: d, ...a });
  }), n;
}
const Z = {
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
function K(r) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(r) ? r : 6;
}
async function Re(r) {
  if (navigator.clipboard && navigator.clipboard.writeText)
    try {
      await navigator.clipboard.writeText(r);
    } catch (n) {
      throw n;
    }
  else {
    const n = document.createElement("textarea");
    n.value = r, document.body.appendChild(n), n.select();
    try {
      document.execCommand("copy");
    } catch (d) {
      throw d;
    }
    document.body.removeChild(n);
  }
}
const Q = (r, n) => typeof r == "string" ? r.replace(
  /#(\w+)#/g,
  (d, a) => n[a] !== void 0 ? String(n[a]) : d
) : Array.isArray(r) ? r.map((d) => Q(d, n)) : r && typeof r == "object" ? Object.fromEntries(
  Object.entries(r).map(([d, a]) => [
    Q(d, n),
    Q(a, n)
  ])
) : r, je = (r) => {
  const n = Array.isArray(r?.data?.data) ? r.data.data[0] : Array.isArray(r?.data) ? r.data[0] : r?.data?.data ?? r?.data;
  return n && typeof n == "object" && !Array.isArray(n) ? n : null;
}, ve = "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg";
function ee({ field: r, data: n }) {
  const d = r?.name;
  return /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ e.jsx("label", { className: `
    block text-sm font-semibold  transition-all duration-300 text-gray-700 capitalize
  `, children: r?.label }),
    /* @__PURE__ */ e.jsx("div", { className: "relative", children: d.toLowerCase().includes("avatar") || d.toLowerCase().includes("logo") ? /* @__PURE__ */ e.jsx(
      "img",
      {
        src: String(n?.[d]),
        alt: "avatar",
        className: "w-16 h-16 rounded-full object-cover border",
        onError: (c) => {
          const h = c.currentTarget;
          h.onerror = null, h.src = ve;
        }
      }
    ) : /* @__PURE__ */ e.jsx("p", { className: `
    text-sm text-gray-600 break-words
  `, children: typeof n?.[d] == "object" ? JSON.stringify(n?.[d]) : String(n?.[d] ?? "") }) })
  ] });
}
function Te({ commonInfo: r, infoData: n, hiddenFields: d = [] }) {
  return /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-100 p-4 min-h-3/10 overflow-auto", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    /* @__PURE__ */ e.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ e.jsx("div", { className: "relative w-42 h-42", children: /* @__PURE__ */ e.jsx(
      "img",
      {
        src: String(n.avatar_photo),
        alt: "Profile",
        className: " w-full h-full object-cover border-4 rounded-[12px] border-white shadow-lg",
        onError: (a) => {
          const i = a.currentTarget;
          i.onerror = null, i.src = ve;
        }
      }
    ) }) }),
    /* @__PURE__ */ e.jsx("div", { className: "lg:col-span-10 min-h-0 max-h-40  overflow-y-auto custom-scrollbar", children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-2", children: r.fields?.map((a, i) => {
      const c = n?.[a.name];
      return d.includes(a.name) || !c && c !== !1 && c !== 0 ? null : /* @__PURE__ */ e.jsx("div", { className: `hover:bg-gray-100 transition-colors duration-200 col-span-12 sm:col-span-6 ${Z[K(a.width)] || "lg:col-span-4"}`, children: /* @__PURE__ */ e.jsx(
        ee,
        {
          field: a,
          data: n ?? {}
        },
        a?.name || i
      ) }, a.name);
    }) }) })
  ] }) });
}
function de({ tabObj: r, methods: n, tabName: d, sqlOpsUrls: a, refid: i }) {
  const [c, h] = R.useState(null);
  return R.useEffect(() => {
    let o = !1;
    return (async () => {
      const f = r?.config;
      if (!f?.type) {
        o || h(null);
        return;
      }
      if (f.type === "method") {
        const u = f.method, b = u ? n[u] : void 0;
        if (b)
          try {
            const p = await Promise.resolve(b());
            o || h(p || null);
          } catch (p) {
            console.error("Method execution failed:", p), o || h(null);
          }
        else
          o || h(null);
      }
      if (f.type === "api")
        try {
          const u = await I({
            method: f.method || "GET",
            // GET, POST, etc.
            url: f.url,
            data: f.body || {},
            // request body
            params: f.params || {},
            // query params
            headers: f.headers || {}
            // optional headers
          });
          o || h(u.data || null);
        } catch (u) {
          console.error("API fetch failed:", u), o || h(null);
        }
      if (f.type === "sql" && i && i != "0") {
        if (!a) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const u = await I({
            method: "POST",
            url: a.baseURL + a.registerQuery,
            data: {
              query: {
                cols: f.cols,
                table: f.table,
                where: Q(f.where, {
                  refid: f.refid
                })
              }
            },
            headers: {
              Authorization: `Bearer ${a?.accessToken}`
            }
          }), b = await I({
            method: "POST",
            url: a.baseURL + a.runQuery,
            data: {
              queryid: u.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${a?.accessToken}`
            }
          }), p = je(b);
          o || h(p);
        } catch (u) {
          console.error("API fetch failed:", u);
        }
      }
    })(), () => {
      o = !0;
    };
  }, [
    r?.config?.type || "",
    r?.config?.method || "",
    r?.config?.url || "",
    JSON.stringify(r?.config?.params || {}),
    JSON.stringify(r?.config?.body || {}),
    JSON.stringify(r?.config?.headers || {})
  ]), /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-2", children: c ? Object.keys(c).map((o, l) => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${Z[K(r.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ e.jsx(
        ee,
        {
          field: { name: o, label: o },
          data: c ?? {}
        },
        o
      )
    },
    `field-${l}`
  )) : /* @__PURE__ */ e.jsx("div", { className: "col-span-12 flex flex-col  min-h-0", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center text-gray-500", children: [
    /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ e.jsxs("svg", { className: "w-8 h-8 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
      /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" }),
      /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m8 7 4-4 4 4" })
    ] }) }),
    /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No Data Available" }),
    /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500 text-center max-w-sm", children: "There are no records to display  at the moment." })
  ] }) }) }) });
}
function ue({ tabObj: r, methods: n, tabName: d, sqlOpsUrls: a, refid: i }) {
  const [c, h] = H(1), [o, l] = H(10), [f, u] = H(""), [b, p] = R.useState([]), N = we(null), [C, P] = H(null), [g, F] = H({ key: "", direction: null });
  R.useEffect(() => {
    let t = !1;
    return (async () => {
      const m = r?.config;
      if (!m?.type) {
        t || p([]);
        return;
      }
      if (m.type === "method") {
        const y = m.method, k = y ? n[y] : void 0;
        if (k)
          try {
            const D = await Promise.resolve(k());
            t || p(D || []);
          } catch {
            t || p([]);
          }
        else
          t || p([]);
      }
      if (m.type === "api")
        try {
          const y = await I({
            method: m.method || "GET",
            // GET, POST, etc.
            url: m.url,
            data: m.body || {},
            // request body
            params: m.params || {},
            // query params
            headers: m.headers || {}
            // optional headers
          });
          t || p(y.data || {});
        } catch (y) {
          console.error("API fetch failed:", y), t || p([]);
        }
      if (m.type === "sql" && i && i != "0") {
        if (!a) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const { form: y, actions: k, uimode: D, type: ae, unilinks: oe, DEBUG: le, ...B } = m, Y = await I({
            method: "POST",
            url: a.baseURL + a.registerQuery,
            data: {
              query: {
                ...B,
                where: Q(m.where, {
                  refid: i
                })
              }
            },
            headers: {
              Authorization: `Bearer ${a?.accessToken}`
            }
          }), me = await I({
            method: "POST",
            url: a.baseURL + a.runQuery,
            data: {
              queryid: Y.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${a?.accessToken}`
            }
          });
          t || p(me.data?.data ?? me.data ?? {});
        } catch (y) {
          console.error("API fetch failed:", y);
        }
      }
    })(), () => {
      t = !0;
    };
  }, [
    r?.config?.type || "",
    r?.config?.method || "",
    r?.config?.url || "",
    JSON.stringify(r?.config?.params || {}),
    JSON.stringify(r?.config?.body || {}),
    JSON.stringify(r?.config?.headers || {})
  ]);
  const j = Array.isArray(b) ? b : [b], E = ((t) => {
    const v = /* @__PURE__ */ new Set();
    return t.forEach((m) => {
      m && typeof m == "object" && Object.keys(m).forEach((y) => v.add(y));
    }), Array.from(v);
  })(j), _ = r?.vmode === "edit", L = r?.config?.form && Object.keys(r.config.form).length > 0, O = r?.config?.info && Object.keys(r.config.info).length > 0, re = (t) => {
    let v = "asc";
    g.key === t && g.direction === "asc" ? v = "desc" : g.key === t && g.direction === "desc" && (v = null), F({ key: t, direction: v });
  }, ce = (t) => !g.key || !g.direction ? t : [...t].sort((v, m) => {
    const y = v[g.key], k = m[g.key];
    if (y == null) return g.direction === "asc" ? 1 : -1;
    if (k == null) return g.direction === "asc" ? -1 : 1;
    if (typeof y == "boolean" && typeof k == "boolean")
      return g.direction === "asc" ? y === k ? 0 : y ? -1 : 1 : y === k ? 0 : y ? 1 : -1;
    const D = new Date(y), ae = new Date(k);
    if (!isNaN(D.getTime()) && !isNaN(ae.getTime()))
      return g.direction === "asc" ? D.getTime() - ae.getTime() : ae.getTime() - D.getTime();
    const oe = parseFloat(y), le = parseFloat(k);
    if (!isNaN(oe) && !isNaN(le))
      return g.direction === "asc" ? oe - le : le - oe;
    const B = String(y).toLowerCase(), Y = String(k).toLowerCase();
    return g.direction === "asc" ? B < Y ? -1 : B > Y ? 1 : 0 : B > Y ? -1 : B < Y ? 1 : 0;
  }), M = fe(() => {
    let t = j;
    if (f.trim()) {
      const v = f.toLowerCase();
      t = j.filter((m) => E.some((y) => {
        const k = m[y];
        return k == null ? !1 : String(k).toLowerCase().includes(v);
      }));
    }
    return ce(t);
  }, [j, f, E, g]), W = Math.ceil(M.length / o), z = (c - 1) * o, V = z + o, G = M.slice(z, V), J = (t) => {
    h(Math.max(1, Math.min(t, W)));
  }, te = (t) => {
    l(t), h(1);
  }, q = () => {
    u("");
  }, se = (t, v) => {
    n?.editInfoRecord?.(t, d);
  }, ne = (t) => {
    n?.viewInfoRecord?.(t, r?.config?.info);
  }, s = (t, v) => {
    n?.deleteInfoRecord?.(t, d);
  }, x = () => {
    n?.addInfoRecord?.(r?.config?.form, d);
  }, w = (t) => t.split("_").map((v) => v.charAt(0).toUpperCase() + v.slice(1)).join(" "), S = (t, v) => {
    if (t == null || t === "")
      return /* @__PURE__ */ e.jsx("span", { className: "text-gray-400 italic", children: "-" });
    if (typeof t == "boolean")
      return /* @__PURE__ */ e.jsx("span", { className: `inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${t ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`, children: t ? "Yes" : "No" });
    switch (v?.toLowerCase()) {
      case "checkbox":
        return /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "checkbox",
            checked: !!t,
            readOnly: !0,
            className: "w-4 h-4 text-green-600 accent-green-600 cursor-default"
          }
        );
      case "date":
        return new Date(t).toLocaleDateString();
      case "time":
        return new Date(t).toLocaleTimeString();
      case "datetime":
        return new Date(t).toLocaleString();
      case "currency":
        if (typeof t == "number")
          return new Intl.NumberFormat(void 0, {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2
          }).format(t);
      case "number":
      case "num":
        return /* @__PURE__ */ e.jsx("span", { className: "text-center", children: Number(t).toLocaleString() });
      case "url":
        return t ? /* @__PURE__ */ e.jsx("a", { href: t, target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 underline", children: t }) : null;
      case "email":
        return t ? /* @__PURE__ */ e.jsx(
          "a",
          {
            href: `mailto:${t}`,
            className: "text-blue-600 hover:text-blue-800 hover:underline transition-colors",
            children: t
          }
        ) : null;
      case "tel":
      case "mob":
      case "phone":
      case "mobile":
        return t ? /* @__PURE__ */ e.jsx(
          "a",
          {
            href: `tel:${t}`,
            className: "text-blue-600 hover:text-blue-800 hover:underline transition-colors",
            children: t
          }
        ) : null;
      case "geoloc":
      case "geolocation":
      case "geoaddress":
        return t ? /* @__PURE__ */ e.jsx(
          "a",
          {
            href: `https://www.google.com/maps/place/${encodeURIComponent(t)}`,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-blue-600 underline",
            children: t
          }
        ) : null;
      case "color":
        return t ? /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ e.jsx("span", { className: "w-5 h-5 rounded-full border", style: { backgroundColor: t } }) }) : null;
      case "avatar":
        return /* @__PURE__ */ e.jsx(
          "img",
          {
            src: t || "/images/user.png",
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
            src: t || "/images/noimg.png",
            alt: "media",
            className: "w-12 h-12 rounded object-cover"
          }
        );
      case "file":
      case "attachment":
        return t ? /* @__PURE__ */ e.jsx("a", { href: t, target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 underline", children: "FILE" }) : "No File";
      case "json":
        try {
          const m = typeof t == "string" ? JSON.parse(t) : t;
          return /* @__PURE__ */ e.jsx("pre", { className: "whitespace-pre-wrap text-xs bg-gray-100 p-2 rounded", children: JSON.stringify(m, null, 2) });
        } catch {
          return String(t);
        }
      case "pretty":
        return /* @__PURE__ */ e.jsx("pre", { className: "whitespace-pre-wrap text-sm text-gray-700 bg-gray-100 p-2 rounded", children: typeof t == "object" ? JSON.stringify(t, null, 2) : String(t) });
      case "uppercase":
        return String(t).toUpperCase();
      case "lowercase":
        return String(t).toLowerCase();
      case "html":
        return /* @__PURE__ */ e.jsx("div", { dangerouslySetInnerHTML: { __html: t } });
      default:
        return String(t);
    }
  }, $ = (t, v) => {
    Re(t).then(() => {
      P(v), N.current && clearTimeout(N.current), N.current = setTimeout(() => {
        P("");
      }, 2e3);
    }).catch(() => {
      P("");
    });
  }, A = fe(() => ({
    totalRows: M.length,
    columns: E.length,
    currentPageStart: z + 1,
    currentPageEnd: Math.min(V, M.length),
    isFiltered: f.trim().length > 0
  }), [M, j, E, z, V]);
  return j.length === 0 || E.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center text-gray-500", children: [
    /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ e.jsxs("svg", { className: "w-8 h-8 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
      /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" }),
      /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m8 7 4-4 4 4" })
    ] }) }),
    /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No Data Available" }),
    /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500 text-center max-w-sm", children: "There are no records to display in the grid view at the moment." }),
    L && /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: x,
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
            value: f,
            onChange: (t) => u(t.target.value),
            className: "block w-full px-10 py-2 border border-gray-300 rounded-lg text-sm placeholder-gray-500  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
          }
        ),
        f && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: q,
            className: "absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600",
            title: "Clear search",
            children: /* @__PURE__ */ e.jsx("svg", { className: "h-4 w-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
          }
        )
      ] }) }),
      L && /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: x,
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
          A.currentPageStart,
          "-",
          A.currentPageEnd
        ] }),
        " of ",
        /* @__PURE__ */ e.jsx("strong", { className: "text-gray-900", children: A.totalRows }),
        " records"
      ] }) }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex justify-end gap-4", children: [
        /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-gray-600", children: "Show:" }),
          /* @__PURE__ */ e.jsxs(
            "select",
            {
              value: o,
              onChange: (t) => te(Number(t.target.value)),
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
              onClick: () => J(c - 1),
              disabled: c === 1,
              className: "flex items-center gap-2 text-sm font-medium text-action cursor-pointer bg-white rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
              children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
            }
          ),
          /* @__PURE__ */ e.jsx("span", { className: "flex items-center gap-2 text-sm", children: /* @__PURE__ */ e.jsxs("span", { className: "text-gray-600", children: [
            "Page ",
            /* @__PURE__ */ e.jsx("strong", { className: "text-gray-900", children: c }),
            " of ",
            /* @__PURE__ */ e.jsx("strong", { className: "text-gray-900", children: W })
          ] }) }),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => J(c + 1),
              disabled: c === W,
              className: "flex items-center gap-2 text-sm font-medium text-action cursor-pointer bg-white rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
              children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
            }
          )
        ] })
      ] })
    ] }),
    M.length === 0 && f.trim() && /* @__PURE__ */ e.jsxs("div", { className: "h-full flex flex-1 flex-col items-center justify-center py-22 text-gray-500", children: [
      /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ e.jsx("svg", { className: "w-8 h-8 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) }) }),
      /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No Results Found" }),
      /* @__PURE__ */ e.jsxs("p", { className: "text-sm text-gray-500 text-center max-w-sm mb-4", children: [
        "No records match your search for ",
        /* @__PURE__ */ e.jsxs("strong", { children: [
          '"',
          f,
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
    M.length > 0 && /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx("div", { className: " overflow-auto min-w-full divide-y divide-gray-200 border border-gray-200 bordr-t", children: /* @__PURE__ */ e.jsxs("table", { className: "min-w-full h-full", children: [
      /* @__PURE__ */ e.jsx("thead", { className: " text-action", children: /* @__PURE__ */ e.jsxs("tr", { children: [
        _ && /* @__PURE__ */ e.jsx(
          "th",
          {
            scope: "col",
            className: "bg-muted px-4 sm:px-6 py-2 text-left text-xs font-bold uppercase tracking-wider w-32 sticky top-0 left-0 z-20",
            children: "Actions"
          }
        ),
        E.map((t, v) => /* @__PURE__ */ e.jsx(
          "th",
          {
            scope: "col",
            className: "bg-muted sticky top-0 z-0 px-4 sm:px-6 py-2 text-left text-xs font-bold uppercase tracking-wider",
            children: /* @__PURE__ */ e.jsxs(
              "div",
              {
                className: "flex items-center gap-1 cursor-pointer select-none",
                onClick: () => re(t),
                children: [
                  /* @__PURE__ */ e.jsx("span", { className: "truncate", title: w(t), children: w(t) }),
                  g?.key === t ? g.direction === "asc" ? /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-blue-600", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ e.jsx("path", { d: "M5 12l5-5 5 5H5z" }) }) : /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-blue-600", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ e.jsx("path", { d: "M5 8l5 5 5-5H5z" }) }) : /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-gray-400 group-hover:text-gray-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" }) })
                ]
              }
            )
          },
          t
        ))
      ] }) }),
      /* @__PURE__ */ e.jsx("tbody", { className: "bg-white divide-y divide-gray-200 ", children: G.map((t, v) => /* @__PURE__ */ e.jsxs(
        "tr",
        {
          className: `hover:bg-secondary transition-colors duration-150 ${v % 2 === 0 ? "bg-white" : "bg-gray-50"}`,
          children: [
            _ && /* @__PURE__ */ e.jsx("td", { className: "px-4 sm:px-6 py-1 whitespace-nowrap text-sm bg-muted text-gray-900 sticky left-0 z-10", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
              O && /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: () => ne(t),
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
                  onClick: () => se(t),
                  className: "inline-flex items-center px-2 py-1 text-xs font-medium rounded cursor-pointer text-action",
                  title: "Edit",
                  children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" }) })
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: () => s(t),
                  className: "text-red-600 hover:text-red-800 cursor-pointer transition-colors p-1 hover:bg-red-100 rounded",
                  title: "Delete",
                  children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }) })
                }
              )
            ] }) }),
            E.map((m) => /* @__PURE__ */ e.jsx(
              "td",
              {
                className: "px-4 sm:px-6 py-1 text-sm text-gray-900",
                children: /* @__PURE__ */ e.jsxs("div", { className: "relative group flex items-center", children: [
                  /* @__PURE__ */ e.jsx("div", { className: "truncate max-w-xs sm:max-w-none", children: S(t[m] ?? "", m) }),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      onClick: () => $(t[m] || "", `${t.id}-${m}`),
                      className: "absolute -right-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity ml-2 p-1 rounded bg-gray-50 hover:bg-gray-100 cursor-pointer",
                      title: "Copy",
                      children: C === `${t.id}-${m}` ? /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx("span", { className: "text-xs text-gray-600", children: "Copied!" }) }) : /* @__PURE__ */ e.jsx("i", { className: "fa-regular fa-copy" })
                    }
                  )
                ] })
              },
              m
            ))
          ]
        },
        z + v
      )) })
    ] }) }) })
  ] });
}
const pe = ({ groups: r, groupNames: n, setActiveTabIndex: d, activeTabIndex: a }) => /* @__PURE__ */ e.jsx(
  "nav",
  {
    className: "flex flex-col overflow-y-auto h-full px-2 py-1 space-y-1",
    children: n.length > 0 ? n.map((i, c) => /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: () => d(c),
        className: `cursor-pointer w-full text-left py-2 px-3 rounded-md text-sm font-semibold transition-all duration-200 ${a === c ? "bg-white shadow text-action" : "text-gray-600 hover:bg-white/50"}`,
        children: /* @__PURE__ */ e.jsx("span", { className: "truncate", children: r[i]?.label || i })
      },
      i
    )) : /* @__PURE__ */ e.jsx("div", { className: "py-3 px-2 text-sm text-gray-500", children: "No group available" })
  }
), Le = ({
  groups: r,
  groupNames: n,
  setActiveTabIndex: d,
  activeTabIndex: a,
  layoutConfig: i,
  showScrollHint: c,
  isCommonInfo: h,
  tabsNavRef: o
}) => {
  const [l, f] = R.useState(!1), u = R.useRef(null);
  return R.useEffect(() => {
    const b = (p) => {
      u.current && !u.current.contains(p.target) && f(!1);
    };
    return document.addEventListener("mousedown", b), () => document.removeEventListener("mousedown", b);
  }, []), /* @__PURE__ */ e.jsxs("div", { className: i?.tabNavClass || "relative z-10", children: [
    /* @__PURE__ */ e.jsx("div", { className: "absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 flex items-center justify-center", children: /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: () => o.current?.scrollBy({ left: -200, behavior: "smooth" }),
        className: "w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group",
        children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
      }
    ) }),
    /* @__PURE__ */ e.jsxs("div", { className: "absolute right-0 top-1/2 -translate-y-1/2 z-20 w-18 flex items-center justify-between pr-1", children: [
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => o.current?.scrollBy({ left: 200, behavior: "smooth" }),
          className: "w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group",
          children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "relative", ref: u, children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => f(!l),
            className: "ml-1 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200",
            children: "⋮"
          }
        ),
        l && /* @__PURE__ */ e.jsx("div", { className: "absolute right-0 mt-2 w-48 max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-30", children: n.map((b, p) => /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              d(p), f(!1);
            },
            className: `w-full text-left px-3 py-2 text-sm truncate hover:bg-gray-100 ${a === p ? "bg-gray-50 font-semibold text-action" : "text-gray-700"}`,
            children: r[b]?.label || b
          },
          b
        )) })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: `relative bg-gray-100 ${h ? "" : "rounded-t-lg"} px-12 pt-1 shadow-inner overflow-hidden`, children: /* @__PURE__ */ e.jsx(
      "nav",
      {
        ref: o,
        className: "relative flex overflow-x-auto scrollbar-hide scroll-smooth",
        style: {
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        },
        children: n.length > 0 ? n.map((b, p) => /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => d(p),
            className: `relative cursor-pointer flex-shrink-0
            min-w-[8rem]   
            py-2 px-8
            rounded-t-lg text-xs sm:text-sm font-semibold
            transition-all duration-300 ease-out
            focus:outline-none whitespace-nowrap
            ${a === p ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
            children: /* @__PURE__ */ e.jsx("span", { className: "relative z-10 flex items-center justify-center gap-1 sm:gap-2", children: /* @__PURE__ */ e.jsx("span", { className: "truncate", children: r[b]?.label || b }) })
          },
          b
        )) : /* @__PURE__ */ e.jsx("div", { className: "py-3 px-6 text-sm text-gray-500", children: "No group available" })
      }
    ) })
  ] });
}, ye = ({
  groupNames: r,
  activeTabIndex: n,
  layoutConfig: d,
  tabObj: a,
  infoData: i,
  setActiveTabIndex: c,
  renderView: h
}) => /* @__PURE__ */ e.jsxs(
  "div",
  {
    className: "bg-white rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex-1 flex flex-col min-h-0",
    children: [
      r.length > 0 ? a?.fields ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ e.jsx("div", { className: d?.fieldGridClass || "grid grid-cols-12 gap-2", children: a.fields.map((o, l) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: `col-span-12 sm:col-span-6 ${Z[K(o.width)] || "lg:col-span-2"}`,
          children: /* @__PURE__ */ e.jsx(ee, { field: o, data: i ?? {} })
        },
        o?.name ?? `field-${l}`
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
            r.slice(0, 5).map((o, l) => /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${l === n ? "bg-action w-6" : "bg-gray-300"}`
              },
              l
            )),
            r.length > 5 && /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-gray-400 ml-1", children: [
              "+",
              r.length - 5
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => c(Math.max(0, n - 1)),
              disabled: n === 0,
              className: "px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
              children: "Previous"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => c(Math.min(r.length - 1, n + 1)),
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
        /* @__PURE__ */ e.jsx("div", { className: "flex gap-1", children: r.map((o, l) => /* @__PURE__ */ e.jsx(
          "div",
          {
            className: `w-2 h-2 rounded-full transition-all duration-300 ${l === n ? "bg-action w-6" : "bg-gray-300"}`
          },
          l
        )) })
      ] }) })
    ]
  },
  r[n]
);
function be({
  groups: r,
  methods: n = {},
  infoData: d,
  viewRenderers: a = {},
  isCommonInfo: i,
  layoutConfig: c = {},
  viewMode: h,
  sqlOpsUrls: o = {},
  refid: l
}) {
  const [f, u] = R.useState(0), [b, p] = R.useState(!1), N = R.useRef(null), C = Object.keys(r);
  R.useEffect(() => {
    const L = () => {
      if (N.current) {
        const O = N.current;
        p(O.scrollWidth > O.clientWidth);
      }
    };
    return L(), window.addEventListener("resize", L), () => window.removeEventListener("resize", L);
  }, [C.length]), R.useEffect(() => {
    if (N.current && C.length > 0) {
      const L = N.current.children[f];
      L && L.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [f, C.length]);
  const P = h === "tableft", g = h === "tabright", F = !P && !g, j = r[C[f] ?? ""] || null, T = {
    single: (L, O) => /* @__PURE__ */ e.jsx(de, { tabObj: L, methods: n, tabName: O, sqlOpsUrls: o, refid: l }),
    grid: (L, O) => /* @__PURE__ */ e.jsx(ue, { tabObj: L, methods: n, tabName: O, sqlOpsUrls: o, refid: l })
  }, E = j?.config?.uimode, _ = a[E] || T[E] || (() => /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No UI mode for this type" }));
  return F ? /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex flex-col min-h-0 max-h-screen", children: [
    /* @__PURE__ */ e.jsx(
      Le,
      {
        groupNames: C,
        groups: r,
        setActiveTabIndex: u,
        activeTabIndex: f,
        tabsNavRef: N,
        isCommonInfo: i,
        showScrollHint: b,
        layoutConfig: c
      }
    ),
    /* @__PURE__ */ e.jsx(
      ye,
      {
        groupNames: C,
        activeTabIndex: f,
        layoutConfig: c,
        tabObj: j,
        infoData: d,
        setActiveTabIndex: u,
        renderView: _,
        groups: r
      }
    )
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex min-h-0 max-h-screen", children: [
    P && /* @__PURE__ */ e.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ e.jsx(
      pe,
      {
        groupNames: C,
        groups: r,
        setActiveTabIndex: u,
        activeTabIndex: f
      }
    ) }),
    /* @__PURE__ */ e.jsx("main", { className: "flex-1 flex flex-col min-h-0 overflow-auto", children: /* @__PURE__ */ e.jsx(
      ye,
      {
        groupNames: C,
        activeTabIndex: f,
        layoutConfig: c,
        tabObj: j,
        infoData: d,
        setActiveTabIndex: u,
        renderView: _,
        groups: r
      }
    ) }),
    g && /* @__PURE__ */ e.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ e.jsx(
      pe,
      {
        groupNames: C,
        groups: r,
        setActiveTabIndex: u,
        activeTabIndex: f
      }
    ) })
  ] });
}
function Ae({ title: r, children: n, isFirst: d }) {
  const [a, i] = H(d);
  return /* @__PURE__ */ e.jsx("div", { className: "group relative mt-1 flex-1 flex flex-col min-h-0 max-h-screen", children: /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex flex-col min-h-0 relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: () => i(!a),
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
function _e({
  groups: r,
  methods: n = {},
  infoData: d,
  viewRenderers: a = {},
  sqlOpsUrls: i = {},
  refid: c
}) {
  const h = {
    single: (o, l) => /* @__PURE__ */ e.jsx(de, { tabObj: o, methods: n, tabName: l, sqlOpsUrls: i, refid: c }),
    grid: (o, l) => /* @__PURE__ */ e.jsx(ue, { tabObj: o, methods: n, tabName: l, sqlOpsUrls: i, refid: c })
  };
  return /* @__PURE__ */ e.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ e.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-2 flex flex-col min-h-0", children: r && Object.entries(r).map(([o, l], f) => /* @__PURE__ */ e.jsx(Ae, { title: o, isFirst: f === 0, children: l?.fields ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-2", children: l.fields.map((u, b) => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${Z[K(u.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ e.jsx(ee, { field: u, data: d ?? {} })
    },
    u?.name ?? `field-${b}`
  )) }) }) : l ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: a[l.config?.uimode]?.(l) || h[l.config?.uimode]?.(l, o) || /* @__PURE__ */ e.jsx("div", { children: "No renderer for this type" }) }) : null }, o)) }) }) });
}
function Pe({ title: r, children: n }) {
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
  infoData: d,
  viewRenderers: a = {},
  sqlOpsUrls: i = {},
  refid: c
}) {
  const h = {
    single: (o, l) => /* @__PURE__ */ e.jsx(de, { tabObj: o, methods: n, tabName: l, sqlOpsUrls: i, refid: c }),
    grid: (o, l) => /* @__PURE__ */ e.jsx(ue, { tabObj: o, methods: n, tabName: l, sqlOpsUrls: i, refid: c })
  };
  return /* @__PURE__ */ e.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ e.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-2  flex flex-col min-h-0", children: r && Object.entries(r).map(([o, l], f) => /* @__PURE__ */ e.jsx(Pe, { title: o, children: l?.fields ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-2", children: l.fields.map((u, b) => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${Z[K(u.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ e.jsx(ee, { field: u, data: d ?? {} })
    },
    u?.name ?? `field-${b}`
  )) }) }) : l ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: a[l.config?.uimode]?.(l) || h[l.config?.uimode]?.(l, o) || /* @__PURE__ */ e.jsx("div", { children: "No renderer for this type" }) }) : null }, o)) }) }) });
}
function De({
  infoViewJson: r,
  data: n = {},
  hiddenFields: d = [],
  groupFieldsFn: a = Ee,
  layoutConfig: i = {},
  viewRenderers: c = {},
  methods: h = {}
}) {
  const [o, l] = R.useState({}), f = Se(r.infoview ?? {}), u = r.endPoints ?? {}, b = R.useMemo(
    () => a(r.fields || {}),
    [r.fields, a]
  ), p = r?.source?.refid;
  let N = { ...b };
  r.infoview?.groups && (N = { ...N, ...r.infoview.groups }), R.useEffect(() => {
    let g = !1;
    return (async () => {
      const j = r?.source;
      if (!j?.type) {
        g || l({});
        return;
      }
      if (j.type === "method") {
        const T = j.method, E = T ? h[T] : void 0;
        if (E)
          try {
            const _ = await Promise.resolve(E());
            g || l(_ || {});
          } catch (_) {
            console.error("Method execution failed:", _), g || l({});
          }
        else
          g || l({});
      }
      if (j.type === "api")
        try {
          const T = await I({
            method: j.method || "GET",
            url: j.url,
            data: j.body || {},
            params: j.params || {},
            headers: j.headers || {}
          });
          g || l(T.data || {});
        } catch (T) {
          console.error("API fetch failed:", T), g || l({});
        }
      if (j.type === "sql" && j.refid && j.refid != "0") {
        if (!u) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const T = await I({
            method: "POST",
            url: u.baseURL + u.registerQuery,
            data: {
              query: {
                cols: j.cols,
                table: j.table,
                where: Q(j.where, {
                  refid: j.refid
                })
              }
            },
            headers: {
              Authorization: `Bearer ${u?.accessToken}`
            }
          }), E = await I({
            method: "POST",
            url: u.baseURL + u.runQuery,
            data: {
              queryid: T.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${u?.accessToken}`
            }
          }), _ = je(E) ?? {};
          g || l(_);
        } catch (T) {
          console.error("API fetch failed:", T);
        }
      }
    })(), () => {
      g = !0;
    };
  }, [
    r?.source?.type || "",
    r?.source?.method || "",
    r?.source?.url || "",
    JSON.stringify(r?.source?.params || {}),
    JSON.stringify(r?.source?.body || {}),
    JSON.stringify(r?.source?.headers || {})
  ]);
  const C = N.common || null;
  C && delete N.common;
  const P = (g) => {
    switch (g) {
      case "accordion":
        return /* @__PURE__ */ e.jsx(
          _e,
          {
            groups: N,
            methods: h,
            infoData: o,
            viewRenderers: c,
            sqlOpsUrls: u,
            refid: p
          }
        );
      case "tab":
      case "tableft":
      case "tabright":
        return /* @__PURE__ */ e.jsx(
          be,
          {
            groups: N,
            viewRenderers: c,
            layoutConfig: i,
            methods: h,
            infoData: o,
            isCommonInfo: !!C,
            viewMode: g,
            sqlOpsUrls: u,
            refid: p
          }
        );
      case "cards":
        return /* @__PURE__ */ e.jsx(
          Oe,
          {
            groups: N,
            viewRenderers: c,
            methods: h,
            infoData: o,
            sqlOpsUrls: u,
            refid: p
          }
        );
      default:
        return /* @__PURE__ */ e.jsx(
          be,
          {
            groups: N,
            viewRenderers: c,
            layoutConfig: i,
            methods: h,
            infoData: o,
            isCommonInfo: !!C,
            viewMode: g,
            sqlOpsUrls: u,
            refid: p
          }
        );
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: i.containerClass || "flex flex-col ", children: [
    C && /* @__PURE__ */ e.jsx(
      Te,
      {
        commonInfo: C,
        infoData: o,
        hiddenFields: d
      }
    ),
    P(f)
  ] });
}
export {
  De as InfoView,
  De as default
};
