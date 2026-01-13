import L, { useState as W, useRef as $e, useMemo as ve } from "react";
import $ from "axios";
var he = { exports: {} }, se = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function Me() {
  if (we) return se;
  we = 1;
  var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function m(a, o, l) {
    var x = null;
    if (l !== void 0 && (x = "" + l), o.key !== void 0 && (x = "" + o.key), "key" in o) {
      l = {};
      for (var c in o)
        c !== "key" && (l[c] = o[c]);
    } else l = o;
    return o = l.ref, {
      $$typeof: t,
      type: a,
      key: x,
      ref: o !== void 0 ? o : null,
      props: l
    };
  }
  return se.Fragment = n, se.jsx = m, se.jsxs = m, se;
}
var ae = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function De() {
  return Ne || (Ne = 1, process.env.NODE_ENV !== "production" && function() {
    function t(s) {
      if (s == null) return null;
      if (typeof s == "function")
        return s.$$typeof === ye ? null : s.displayName || s.name || null;
      if (typeof s == "string") return s;
      switch (s) {
        case _:
          return "Fragment";
        case S:
          return "Profiler";
        case g:
          return "StrictMode";
        case M:
          return "Suspense";
        case E:
          return "SuspenseList";
        case Q:
          return "Activity";
      }
      if (typeof s == "object")
        switch (typeof s.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), s.$$typeof) {
          case j:
            return "Portal";
          case k:
            return (s.displayName || "Context") + ".Provider";
          case y:
            return (s._context.displayName || "Context") + ".Consumer";
          case v:
            var h = s.render;
            return s = s.displayName, s || (s = h.displayName || h.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
          case D:
            return h = s.displayName || null, h !== null ? h : t(s.type) || "Memo";
          case J:
            h = s._payload, s = s._init;
            try {
              return t(s(h));
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
        var h = !1;
      } catch {
        h = !0;
      }
      if (h) {
        h = console;
        var w = h.error, R = typeof Symbol == "function" && Symbol.toStringTag && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return w.call(
          h,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          R
        ), n(s);
      }
    }
    function a(s) {
      if (s === _) return "<>";
      if (typeof s == "object" && s !== null && s.$$typeof === J)
        return "<...>";
      try {
        var h = t(s);
        return h ? "<" + h + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var s = z.A;
      return s === null ? null : s.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function x(s) {
      if (Z.call(s, "key")) {
        var h = Object.getOwnPropertyDescriptor(s, "key").get;
        if (h && h.isReactWarning) return !1;
      }
      return s.key !== void 0;
    }
    function c(s, h) {
      function w() {
        q || (q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          h
        ));
      }
      w.isReactWarning = !0, Object.defineProperty(s, "key", {
        get: w,
        configurable: !0
      });
    }
    function u() {
      var s = t(this.type);
      return ie[s] || (ie[s] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), s = this.props.ref, s !== void 0 ? s : null;
    }
    function d(s, h, w, R, O, I, K, U) {
      return w = I.ref, s = {
        $$typeof: C,
        type: s,
        key: h,
        props: I,
        _owner: O
      }, (w !== void 0 ? w : null) !== null ? Object.defineProperty(s, "ref", {
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
        value: K
      }), Object.defineProperty(s, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: U
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    }
    function i(s, h, w, R, O, I, K, U) {
      var A = h.children;
      if (A !== void 0)
        if (R)
          if (Y(A)) {
            for (R = 0; R < A.length; R++)
              f(A[R]);
            Object.freeze && Object.freeze(A);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(A);
      if (Z.call(h, "key")) {
        A = t(s);
        var G = Object.keys(h).filter(function(fe) {
          return fe !== "key";
        });
        R = 0 < G.length ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}", F[A + R] || (G = 0 < G.length ? "{" + G.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          R,
          A,
          G,
          A
        ), F[A + R] = !0);
      }
      if (A = null, w !== void 0 && (m(w), A = "" + w), x(h) && (m(h.key), A = "" + h.key), "key" in h) {
        w = {};
        for (var ee in h)
          ee !== "key" && (w[ee] = h[ee]);
      } else w = h;
      return A && c(
        w,
        typeof s == "function" ? s.displayName || s.name || "Unknown" : s
      ), d(
        s,
        A,
        I,
        O,
        o(),
        w,
        K,
        U
      );
    }
    function f(s) {
      typeof s == "object" && s !== null && s.$$typeof === C && s._store && (s._store.validated = 1);
    }
    var b = L, C = Symbol.for("react.transitional.element"), j = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), k = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), ye = Symbol.for("react.client.reference"), z = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = Object.prototype.hasOwnProperty, Y = Array.isArray, B = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(s) {
        return s();
      }
    };
    var q, ie = {}, ce = b.react_stack_bottom_frame.bind(
      b,
      l
    )(), de = B(a(l)), F = {};
    ae.Fragment = _, ae.jsx = function(s, h, w, R, O) {
      var I = 1e4 > z.recentlyCreatedOwnerStacks++;
      return i(
        s,
        h,
        w,
        !1,
        R,
        O,
        I ? Error("react-stack-top-frame") : ce,
        I ? B(a(s)) : de
      );
    }, ae.jsxs = function(s, h, w, R, O) {
      var I = 1e4 > z.recentlyCreatedOwnerStacks++;
      return i(
        s,
        h,
        w,
        !0,
        R,
        O,
        I ? Error("react-stack-top-frame") : ce,
        I ? B(a(s)) : de
      );
    };
  }()), ae;
}
var ke;
function Ie() {
  return ke || (ke = 1, process.env.NODE_ENV === "production" ? he.exports = Me() : he.exports = De()), he.exports;
}
var e = Ie();
function ze(t) {
  return t.template ? t.template : "tab";
}
function Oe(t) {
  const n = {};
  return Object.entries(t).forEach(([m, a]) => {
    const o = a.group || "General";
    n[o] || (n[o] = { label: o, type: "fields", fields: [] }), n[o]?.fields?.push({ name: m, ...a });
  }), n;
}
const ne = {
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
function oe(t) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(t) ? t : 6;
}
async function Be(t) {
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
const H = (t, n) => typeof t == "string" ? t.replace(
  /#(\w+)#/g,
  (m, a) => n[a] !== void 0 ? String(n[a]) : m
) : Array.isArray(t) ? t.map((m) => H(m, n)) : t && typeof t == "object" ? Object.fromEntries(
  Object.entries(t).map(([m, a]) => [
    H(m, n),
    H(a, n)
  ])
) : t, Ae = (t) => {
  const n = Array.isArray(t?.data?.data) ? t.data.data[0] : Array.isArray(t?.data) ? t.data[0] : t?.data?.data ?? t?.data;
  return n && typeof n == "object" && !Array.isArray(n) ? n : null;
}, Ce = (t, n, m) => {
  const a = Array.isArray(m?.data?.data) ? m.data.data : Array.isArray(m?.data) ? m.data : m;
  if (!Array.isArray(a) || a.length === 0)
    return {};
  const o = {};
  return a.forEach((l) => {
    l[t] != null && l[n] != null && (o[l[t]] = l[n]);
  }), o;
};
function Se(t, n) {
  if (!n || Object.keys(n).length === 0) return t;
  if (typeof t == "number")
    return n[String(t)] ?? t;
  if (typeof t == "string") {
    const a = t.split(",").map((o) => o.trim()).map((o) => n[o]).filter(Boolean);
    return a.length ? a.join(", ") : t;
  }
  return t;
}
const Le = "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg";
function le({ field: t, data: n, methods: m = {}, sqlOpsUrls: a, refid: o }) {
  const l = t?.name, x = `
    text-sm text-gray-600 break-words
  `, c = `
    block text-sm font-semibold  transition-all duration-300 text-gray-700 capitalize
  `, [u, d] = W(
    t.options ?? {}
  );
  L.useEffect(() => {
    let j = !0;
    return (async () => {
      if (t?.options) {
        d(t.options);
        return;
      }
      const g = t?.source ?? {};
      if (g.type === "method") {
        const S = g.method, y = S ? m[S] : void 0;
        if (y)
          try {
            const k = await Promise.resolve(y());
            j && d(k ?? {});
          } catch (k) {
            console.error("Method execution failed:", k), j && d({});
          }
        else
          j && d({});
      }
      if (g.type === "api" && g.url)
        try {
          const S = await $({
            method: g.method || "GET",
            url: g.url,
            data: g.body ?? {},
            params: g.params ?? {},
            headers: g.headers ?? {}
          }), y = t.valueKey || "value", k = t.labelKey || "title", v = Ce(y, k, S);
          j && d(v);
        } catch (S) {
          console.error("API execution failed:", S), j && d({});
        }
      if (t.table || t.type === "dataSelector") {
        if (!a) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let S;
          if (t.type === "dataSelector")
            S = {
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
            S = {
              ...t,
              table: t.table,
              cols: t.columns
            };
          }
          t.where && t.type !== "dataSelector" && (S.where = o ? H(t.where, { refid: o }) : t.where);
          const y = await $({
            method: "POST",
            url: a.baseURL + a.registerQuery,
            data: { query: S },
            headers: {
              Authorization: `Bearer ${a?.accessToken}`
            }
          }), k = await $({
            method: "POST",
            url: a.baseURL + a.runQuery,
            data: {
              queryid: y.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${a?.accessToken}`
            }
          }), v = t.valueKey || "value", M = t.labelKey || "title", E = Ce(v, M, k);
          j && d(E);
        } catch (S) {
          console.error("API fetch failed:", S);
        }
      }
    })(), () => {
      j = !1;
    };
  }, [
    t.options,
    t.source,
    t.table,
    t.columns,
    t.where,
    o
  ]);
  const i = typeof l == "string" ? n?.[l] : void 0, f = typeof i == "string" ? t.type === "date" ? i.split("T")[0] : t.type === "time" ? i.includes("T") ? i.slice(11, 16) : i.slice(0, 5) : Se(i, u) : Se(i, u), b = typeof l == "string" && (l.toLowerCase().includes("avatar") || l.toLowerCase().includes("logo")), C = f == null ? "" : typeof f == "string" || typeof f == "number" ? f : JSON.stringify(f);
  return /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ e.jsx("label", { className: c, children: t?.label }),
    /* @__PURE__ */ e.jsx("div", { className: "relative", children: b ? /* @__PURE__ */ e.jsx(
      "img",
      {
        src: String(f),
        alt: "avatar",
        className: "w-16 h-16 rounded-full object-cover border",
        onError: (j) => {
          const _ = j.currentTarget;
          _.onerror = null, _.src = Le;
        }
      }
    ) : /* @__PURE__ */ e.jsx("p", { className: x, children: C }) })
  ] });
}
function Fe({ commonInfo: t, infoData: n, hiddenFields: m = [] }) {
  return /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-100 p-4 min-h-3/10 overflow-auto", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    /* @__PURE__ */ e.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ e.jsx("div", { className: "relative w-42 h-42", children: /* @__PURE__ */ e.jsx(
      "img",
      {
        src: String(n.avatar_photo),
        alt: "Profile",
        className: " w-full h-full object-cover border-4 rounded-[12px] border-white shadow-lg",
        onError: (a) => {
          const o = a.currentTarget;
          o.onerror = null, o.src = Le;
        }
      }
    ) }) }),
    /* @__PURE__ */ e.jsx("div", { className: "lg:col-span-10 min-h-0 max-h-40  overflow-y-auto custom-scrollbar", children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-2", children: t.fields?.map((a, o) => {
      const l = n?.[a.name];
      return m.includes(a.name) || !l && l !== !1 && l !== 0 ? null : /* @__PURE__ */ e.jsx("div", { className: `hover:bg-gray-100 transition-colors duration-200 col-span-12 sm:col-span-6 ${ne[oe(a.width)] || "lg:col-span-4"}`, children: /* @__PURE__ */ e.jsx(
        le,
        {
          field: a,
          data: n ?? {}
        },
        a?.name || o
      ) }, a.name);
    }) }) })
  ] }) });
}
function ge({ tabObj: t, methods: n, tabName: m, sqlOpsUrls: a, refid: o }) {
  const [l, x] = L.useState(null);
  return L.useEffect(() => {
    let c = !1;
    return (async () => {
      const d = t?.config;
      if (!d?.type) {
        c || x(null);
        return;
      }
      if (d.type === "method") {
        const i = d.method, f = i ? n[i] : void 0;
        if (f)
          try {
            const b = await Promise.resolve(f());
            c || x(b || null);
          } catch (b) {
            console.error("Method execution failed:", b), c || x(null);
          }
        else
          c || x(null);
      }
      if (d.type === "api")
        try {
          const i = await $({
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
          c || x(i.data || null);
        } catch (i) {
          console.error("API fetch failed:", i), c || x(null);
        }
      if (d.type === "sql" && o && o != "0") {
        if (!a) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const i = await $({
            method: "POST",
            url: a.baseURL + a.registerQuery,
            data: {
              query: {
                ...d,
                cols: d.cols,
                table: d.table,
                where: H(d.where, {
                  refid: d.refid
                })
              }
            },
            headers: {
              Authorization: `Bearer ${a?.accessToken}`
            }
          }), f = await $({
            method: "POST",
            url: a.baseURL + a.runQuery,
            data: {
              queryid: i.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${a?.accessToken}`
            }
          }), b = Ae(f);
          c || x(b);
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
      className: `col-span-12 sm:col-span-6 ${ne[oe(t.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ e.jsx(
        le,
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
function We({
  open: t,
  title: n = "Confirm Delete",
  message: m = "Are you sure you want to delete this record?",
  onConfirm: a,
  onCancel: o
}) {
  return t ? /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-white rounded-lg shadow-lg w-full max-w-sm p-4", children: [
    /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-semibold text-gray-900", children: n }),
    /* @__PURE__ */ e.jsx("p", { className: "mt-2 text-sm text-gray-600", children: m }),
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
function pe({ tabObj: t, methods: n, tabName: m, sqlOpsUrls: a, refid: o }) {
  const [l, x] = W(1), [c, u] = W(10), [d, i] = W(""), [f, b] = W(!1), [C, j] = W(null), [_, g] = L.useState([]), S = $e(null), [y, k] = W(null), [v, M] = W({ key: "", direction: null }), [E, D] = W(null), J = L.useCallback(async () => {
    const r = t?.config;
    if (!r?.type) {
      g([]);
      return;
    }
    if (r.type === "method") {
      const p = r.method, N = p ? n[p] : void 0;
      if (!N) {
        g([]);
        return;
      }
      try {
        const T = await Promise.resolve(N());
        g(T || []);
      } catch {
        g([]);
      }
    }
    if (r.type === "api")
      try {
        const p = await $({
          method: r.method || "GET",
          url: r.url,
          data: r.body || {},
          params: r.params || {},
          headers: r.headers || {}
        });
        g(p.data || []);
      } catch (p) {
        console.error("API fetch failed:", p), g([]);
      }
    if (r.type === "sql" && o && o !== "0") {
      if (!a) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const { form: p, actions: N, uimode: T, type: P, unilinks: X, DEBUG: ue, ...te } = r, re = await $({
          method: "POST",
          url: a.baseURL + a.registerQuery,
          data: {
            query: {
              ...te,
              where: H(r.where, { refid: o })
            }
          },
          headers: {
            Authorization: `Bearer ${a.accessToken}`
          }
        }), V = await $({
          method: "POST",
          url: a.baseURL + a.runQuery,
          data: {
            queryid: re.data.queryid,
            filter: {}
          },
          headers: {
            Authorization: `Bearer ${a.accessToken}`
          }
        });
        g(V.data?.data ?? V.data ?? []);
      } catch (p) {
        console.error("SQL fetch failed:", p);
      }
    }
  }, [
    t?.config,
    n,
    o,
    a
  ]);
  L.useEffect(() => {
    J();
  }, [
    J
  ]);
  const Q = Array.isArray(_) ? _ : [_], z = ((r) => {
    const p = /* @__PURE__ */ new Set();
    return r.forEach((N) => {
      N && typeof N == "object" && Object.keys(N).forEach((T) => p.add(T));
    }), Array.from(p);
  })(Q), Z = t?.vmode === "edit", Y = t?.config, B = Y?.["popup.form"] ? "popup.form" : (Y?.form, "form"), q = Y?.[B] && Object.keys(Y?.[B]).length > 0, ie = Y?.info && Object.keys(Y?.info).length > 0, ce = (r) => {
    let p = "asc";
    v.key === r && v.direction === "asc" ? p = "desc" : v.key === r && v.direction === "desc" && (p = null), M({ key: r, direction: p });
  }, de = (r) => !v.key || !v.direction ? r : [...r].sort((p, N) => {
    const T = p[v.key], P = N[v.key];
    if (T == null) return v.direction === "asc" ? 1 : -1;
    if (P == null) return v.direction === "asc" ? -1 : 1;
    if (typeof T == "boolean" && typeof P == "boolean")
      return v.direction === "asc" ? T === P ? 0 : T ? -1 : 1 : T === P ? 0 : T ? 1 : -1;
    const X = new Date(T), ue = new Date(P);
    if (!isNaN(X.getTime()) && !isNaN(ue.getTime()))
      return v.direction === "asc" ? X.getTime() - ue.getTime() : ue.getTime() - X.getTime();
    const te = parseFloat(T), re = parseFloat(P);
    if (!isNaN(te) && !isNaN(re))
      return v.direction === "asc" ? te - re : re - te;
    const V = String(T).toLowerCase(), me = String(P).toLowerCase();
    return v.direction === "asc" ? V < me ? -1 : V > me ? 1 : 0 : V > me ? -1 : V < me ? 1 : 0;
  }), F = ve(() => {
    let r = Q;
    if (d.trim()) {
      const p = d.toLowerCase();
      r = Q.filter((N) => z.some((T) => {
        const P = N[T];
        return P == null ? !1 : String(P).toLowerCase().includes(p);
      }));
    }
    return de(r);
  }, [Q, d, z, v]), s = Math.ceil(F.length / c), h = (l - 1) * c, w = h + c, R = F.slice(h, w), O = (r) => {
    x(Math.max(1, Math.min(r, s)));
  }, I = (r) => {
    u(r), x(1);
  }, K = () => {
    i("");
  }, U = (r, p) => {
    n?.editInfoRecord?.({ [B]: t?.config?.[B] }, o, r);
  }, A = (r) => {
    n?.viewInfoRecord?.(r, t?.config?.info);
  }, G = (r) => {
    j(r), b(!0);
  }, ee = async () => {
    if (C?.id) {
      if (!a) {
        D({ type: "error", message: "Delete configuration missing." });
        return;
      }
      try {
        let r = t?.config;
        const p = r?.["popup.form"] ? "popup.form" : (r?.form, "form");
        console.log("config?.[formType]", r?.[p]);
        const N = r?.[p];
        if (!N?.source) throw new Error("Form source missing");
        const T = await $({
          method: "GET",
          url: a.baseURL + a.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${a.accessToken}`
          }
        });
        let P = { ...N.source, refid: C.id };
        N.source.where && (P = {
          ...P,
          where: H(N.source.where, {
            refid: C.id
          })
        });
        const X = await $({
          method: "POST",
          url: a.baseURL + a.dbopsGetRefId,
          data: {
            operation: "update",
            source: P,
            fields: N.fields,
            forcefill: N.forcefill,
            datahash: T.data.refhash
          },
          headers: {
            Authorization: `Bearer ${a.accessToken}`
          }
        });
        await $({
          method: "POST",
          url: a.baseURL + a.dbopsUpdate,
          data: {
            refid: X.data.refid,
            fields: { blocked: "true" },
            datahash: T.data.refhash
          },
          headers: {
            Authorization: `Bearer ${a.accessToken}`
          }
        }), D({
          type: "success",
          message: "Record deleted successfully."
        }), J();
      } catch (r) {
        console.error(r), D({
          type: "error",
          message: "Failed to delete record. Please try again."
        });
      } finally {
        j(null), b(!1), setTimeout(() => D(null), 3e3);
      }
    }
  }, fe = () => {
    j(null), b(!1);
  }, be = () => {
    n?.addInfoRecord?.({ [B]: t?.config?.[B] }, o);
  }, je = (r) => r.split("_").map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(" "), Pe = (r, p) => {
    if (r == null || r === "")
      return /* @__PURE__ */ e.jsx("span", { className: "text-gray-400 italic", children: "-" });
    if (typeof r == "boolean")
      return /* @__PURE__ */ e.jsx("span", { className: `inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${r ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`, children: r ? "Yes" : "No" });
    switch (p?.toLowerCase()) {
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
          const N = typeof r == "string" ? JSON.parse(r) : r;
          return /* @__PURE__ */ e.jsx("pre", { className: "whitespace-pre-wrap text-xs bg-gray-100 p-2 rounded", children: JSON.stringify(N, null, 2) });
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
  }, _e = (r, p) => {
    Be(r).then(() => {
      k(p), S.current && clearTimeout(S.current), S.current = setTimeout(() => {
        k("");
      }, 2e3);
    }).catch(() => {
      k("");
    });
  }, xe = ve(() => ({
    totalRows: F.length,
    columns: z.length,
    currentPageStart: h + 1,
    currentPageEnd: Math.min(w, F.length),
    isFiltered: d.trim().length > 0
  }), [F, Q, z, h, w]);
  return Q.length === 0 || z.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center text-gray-500", children: [
    /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ e.jsxs("svg", { className: "w-8 h-8 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
      /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" }),
      /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m8 7 4-4 4 4" })
    ] }) }),
    /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No Data Available" }),
    /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500 text-center max-w-sm", children: "There are no records to display in the grid view at the moment." }),
    q && /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: be,
        className: "mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-action cursor-pointer",
        children: [
          /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 mr-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 4v16m8-8H4" }) }),
          "Add Record"
        ]
      }
    )
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "w-full overflow-hidden flex-1 flex flex-col", children: [
    E && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `mb-3 mx-2 rounded-md px-4 py-2 text-sm font-medium
      ${E?.type === "success" ? "bg-green-100 text-green-800 border border-green-300" : "bg-red-100 text-red-800 border border-red-300"}`,
        children: E?.message
      }
    ),
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
            onClick: K,
            className: "absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600",
            title: "Clear search",
            children: /* @__PURE__ */ e.jsx("svg", { className: "h-4 w-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
          }
        )
      ] }) }),
      q && /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: be,
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
          xe.currentPageStart,
          "-",
          xe.currentPageEnd
        ] }),
        " of ",
        /* @__PURE__ */ e.jsx("strong", { className: "text-gray-900", children: xe.totalRows }),
        " records"
      ] }) }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex justify-end gap-4", children: [
        /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-gray-600", children: "Show:" }),
          /* @__PURE__ */ e.jsxs(
            "select",
            {
              value: c,
              onChange: (r) => I(Number(r.target.value)),
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
              onClick: () => O(l - 1),
              disabled: l === 1,
              className: "flex items-center gap-2 text-sm font-medium text-action cursor-pointer bg-white rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
              children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
            }
          ),
          /* @__PURE__ */ e.jsx("span", { className: "flex items-center gap-2 text-sm", children: /* @__PURE__ */ e.jsxs("span", { className: "text-gray-600", children: [
            "Page ",
            /* @__PURE__ */ e.jsx("strong", { className: "text-gray-900", children: l }),
            " of ",
            /* @__PURE__ */ e.jsx("strong", { className: "text-gray-900", children: s })
          ] }) }),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => O(l + 1),
              disabled: l === s,
              className: "flex items-center gap-2 text-sm font-medium text-action cursor-pointer bg-white rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
              children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
            }
          )
        ] })
      ] })
    ] }),
    F.length === 0 && d.trim() && /* @__PURE__ */ e.jsxs("div", { className: "h-full flex flex-1 flex-col items-center justify-center py-22 text-gray-500", children: [
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
          onClick: K,
          className: "inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 cursor-pointer",
          children: "Clear Search"
        }
      )
    ] }),
    F.length > 0 && /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx("div", { className: " overflow-auto min-w-full divide-y divide-gray-200 border border-gray-200 bordr-t", children: /* @__PURE__ */ e.jsxs("table", { className: "min-w-full h-full", children: [
      /* @__PURE__ */ e.jsx("thead", { className: " text-action", children: /* @__PURE__ */ e.jsxs("tr", { children: [
        Z && /* @__PURE__ */ e.jsx(
          "th",
          {
            scope: "col",
            className: "bg-muted px-4 sm:px-6 py-2 text-left text-xs font-bold uppercase tracking-wider w-32 sticky top-0 left-0 z-20",
            children: "Actions"
          }
        ),
        z.map((r, p) => /* @__PURE__ */ e.jsx(
          "th",
          {
            scope: "col",
            className: "bg-muted sticky top-0 z-0 px-4 sm:px-6 py-2 text-left text-xs font-bold uppercase tracking-wider",
            children: /* @__PURE__ */ e.jsxs(
              "div",
              {
                className: "flex items-center gap-1 cursor-pointer select-none",
                onClick: () => ce(r),
                children: [
                  /* @__PURE__ */ e.jsx("span", { className: "truncate", title: je(r), children: je(r) }),
                  v?.key === r ? v.direction === "asc" ? /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-blue-600", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ e.jsx("path", { d: "M5 12l5-5 5 5H5z" }) }) : /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-blue-600", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ e.jsx("path", { d: "M5 8l5 5 5-5H5z" }) }) : /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-gray-400 group-hover:text-gray-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" }) })
                ]
              }
            )
          },
          r
        ))
      ] }) }),
      /* @__PURE__ */ e.jsx("tbody", { className: "bg-white divide-y divide-gray-200 ", children: R.map((r, p) => /* @__PURE__ */ e.jsxs(
        "tr",
        {
          className: `hover:bg-secondary transition-colors duration-150 ${p % 2 === 0 ? "bg-white" : "bg-gray-50"}`,
          children: [
            Z && /* @__PURE__ */ e.jsx("td", { className: "px-4 sm:px-6 py-1 whitespace-nowrap text-sm bg-muted text-gray-900 sticky left-0 z-10", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
              ie && /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: () => A(r),
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
                  onClick: () => U(r),
                  className: "inline-flex items-center px-2 py-1 text-xs font-medium rounded cursor-pointer text-action",
                  title: "Edit",
                  children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" }) })
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: () => G(r),
                  className: "text-red-600 hover:text-red-800 cursor-pointer transition-colors p-1 hover:bg-red-100 rounded",
                  title: "Delete",
                  children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }) })
                }
              )
            ] }) }),
            z.map((N) => /* @__PURE__ */ e.jsx(
              "td",
              {
                className: "px-4 sm:px-6 py-1 text-sm text-gray-900",
                children: /* @__PURE__ */ e.jsxs("div", { className: "relative group flex items-center", children: [
                  /* @__PURE__ */ e.jsx("div", { className: "truncate max-w-xs sm:max-w-none", children: Pe(r[N] ?? "", N) }),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      onClick: () => _e(r[N] || "", `${r.id}-${N}`),
                      className: "absolute -right-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity ml-2 p-1 rounded bg-gray-50 hover:bg-gray-100 cursor-pointer",
                      title: "Copy",
                      children: y === `${r.id}-${N}` ? /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx("span", { className: "text-xs text-gray-600", children: "Copied!" }) }) : /* @__PURE__ */ e.jsx("i", { className: "fa-regular fa-copy" })
                    }
                  )
                ] })
              },
              N
            ))
          ]
        },
        h + p
      )) })
    ] }) }) }),
    /* @__PURE__ */ e.jsx(
      We,
      {
        open: f,
        onConfirm: ee,
        onCancel: fe
      }
    )
  ] });
}
const Te = ({ groups: t, groupNames: n, setActiveTabIndex: m, activeTabIndex: a }) => /* @__PURE__ */ e.jsx(
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
), Qe = ({
  groups: t,
  groupNames: n,
  setActiveTabIndex: m,
  activeTabIndex: a,
  layoutConfig: o,
  showScrollHint: l,
  isCommonInfo: x,
  tabsNavRef: c
}) => {
  const [u, d] = L.useState(!1), i = L.useRef(null);
  return L.useEffect(() => {
    const f = (b) => {
      i.current && !i.current.contains(b.target) && d(!1);
    };
    return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
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
        u && /* @__PURE__ */ e.jsx("div", { className: "absolute right-0 mt-2 w-48 max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-30", children: n.map((f, b) => /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              m(b), d(!1);
            },
            className: `w-full text-left px-3 py-2 text-sm truncate hover:bg-gray-100 ${a === b ? "bg-gray-50 font-semibold text-action" : "text-gray-700"}`,
            children: t[f]?.label || f
          },
          f
        )) })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: `relative bg-gray-100 ${x ? "" : "rounded-t-lg"} px-12 pt-1 shadow-inner overflow-hidden`, children: /* @__PURE__ */ e.jsx(
      "nav",
      {
        ref: c,
        className: "relative flex overflow-x-auto scrollbar-hide scroll-smooth",
        style: {
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        },
        children: n.length > 0 ? n.map((f, b) => /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => m(b),
            className: `relative cursor-pointer flex-shrink-0
            min-w-[8rem]   
            py-2 px-8
            rounded-t-lg text-xs sm:text-sm font-semibold
            transition-all duration-300 ease-out
            focus:outline-none whitespace-nowrap
            ${a === b ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
            children: /* @__PURE__ */ e.jsx("span", { className: "relative z-10 flex items-center justify-center gap-1 sm:gap-2", children: /* @__PURE__ */ e.jsx("span", { className: "truncate", children: t[f]?.label || f }) })
          },
          f
        )) : /* @__PURE__ */ e.jsx("div", { className: "py-3 px-6 text-sm text-gray-500", children: "No group available" })
      }
    ) })
  ] });
}, Ee = ({
  groupNames: t,
  activeTabIndex: n,
  layoutConfig: m,
  tabObj: a,
  infoData: o,
  setActiveTabIndex: l,
  renderView: x,
  methods: c = {},
  refid: u,
  sqlOpsUrls: d
}) => /* @__PURE__ */ e.jsxs(
  "div",
  {
    className: "bg-white rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex-1 flex flex-col min-h-0",
    children: [
      t.length > 0 ? a?.fields ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ e.jsx("div", { className: m?.fieldGridClass || "grid grid-cols-12 gap-2", children: a.fields.map((i, f) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: `col-span-12 sm:col-span-6 ${ne[oe(i.width)] || "lg:col-span-2"}`,
          children: /* @__PURE__ */ e.jsx(
            le,
            {
              field: i,
              data: o ?? {},
              methods: c,
              refid: u,
              sqlOpsUrls: d
            }
          )
        },
        i?.name ?? `field-${f}`
      )) }) }) : a ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: x(a, t[n] || "") }) : null : /* @__PURE__ */ e.jsx("div", { className: "flex-1 col-span-full text-center py-8 text-gray-500", children: "No data available" }),
      t.length > 5 && /* @__PURE__ */ e.jsxs("div", { className: "mt-10 pt-2 border-t border-gray-100 flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-500", children: [
          /* @__PURE__ */ e.jsxs("span", { children: [
            "Tab ",
            n + 1,
            " of ",
            t.length
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex gap-1", children: [
            t.slice(0, 5).map((i, f) => /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${f === n ? "bg-action w-6" : "bg-gray-300"}`
              },
              f
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
        /* @__PURE__ */ e.jsx("div", { className: "flex gap-1", children: t.map((i, f) => /* @__PURE__ */ e.jsx(
          "div",
          {
            className: `w-2 h-2 rounded-full transition-all duration-300 ${f === n ? "bg-action w-6" : "bg-gray-300"}`
          },
          f
        )) })
      ] }) })
    ]
  },
  t[n]
);
function Re({
  groups: t,
  methods: n = {},
  infoData: m,
  viewRenderers: a = {},
  isCommonInfo: o,
  layoutConfig: l = {},
  viewMode: x,
  sqlOpsUrls: c = {},
  refid: u
}) {
  const [d, i] = L.useState(0), [f, b] = L.useState(!1), C = L.useRef(null), j = Object.keys(t);
  L.useEffect(() => {
    const E = () => {
      if (C.current) {
        const D = C.current;
        b(D.scrollWidth > D.clientWidth);
      }
    };
    return E(), window.addEventListener("resize", E), () => window.removeEventListener("resize", E);
  }, [j.length]), L.useEffect(() => {
    if (C.current && j.length > 0) {
      const E = C.current.children[d];
      E && E.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [d, j.length]);
  const _ = x === "tableft", g = x === "tabright", S = !_ && !g, y = t[j[d] ?? ""] || null, k = {
    single: (E, D) => /* @__PURE__ */ e.jsx(ge, { tabObj: E, methods: n, tabName: D, sqlOpsUrls: c, refid: u }),
    grid: (E, D) => /* @__PURE__ */ e.jsx(pe, { tabObj: E, methods: n, tabName: D, sqlOpsUrls: c, refid: u })
  }, v = y?.config?.uimode, M = a[v] || k[v] || (() => /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No UI mode for this type" }));
  return S ? /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex flex-col min-h-0 ", children: [
    /* @__PURE__ */ e.jsx(
      Qe,
      {
        groupNames: j,
        groups: t,
        setActiveTabIndex: i,
        activeTabIndex: d,
        tabsNavRef: C,
        isCommonInfo: o,
        showScrollHint: f,
        layoutConfig: l
      }
    ),
    /* @__PURE__ */ e.jsx(
      Ee,
      {
        groupNames: j,
        activeTabIndex: d,
        layoutConfig: l,
        tabObj: y,
        infoData: m,
        setActiveTabIndex: i,
        renderView: M,
        groups: t,
        methods: n,
        refid: u,
        sqlOpsUrls: c
      }
    )
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex min-h-0", children: [
    _ && /* @__PURE__ */ e.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ e.jsx(
      Te,
      {
        groupNames: j,
        groups: t,
        setActiveTabIndex: i,
        activeTabIndex: d
      }
    ) }),
    /* @__PURE__ */ e.jsx("main", { className: "flex-1 flex flex-col min-h-0 overflow-auto", children: /* @__PURE__ */ e.jsx(
      Ee,
      {
        groupNames: j,
        activeTabIndex: d,
        layoutConfig: l,
        tabObj: y,
        infoData: m,
        setActiveTabIndex: i,
        renderView: M,
        groups: t,
        methods: n,
        refid: u,
        sqlOpsUrls: c
      }
    ) }),
    g && /* @__PURE__ */ e.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ e.jsx(
      Te,
      {
        groupNames: j,
        groups: t,
        setActiveTabIndex: i,
        activeTabIndex: d
      }
    ) })
  ] });
}
function Ye({ title: t, children: n, isFirst: m }) {
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
function Ge({
  groups: t,
  methods: n = {},
  infoData: m,
  viewRenderers: a = {},
  sqlOpsUrls: o = {},
  refid: l
}) {
  const x = {
    single: (c, u) => /* @__PURE__ */ e.jsx(ge, { tabObj: c, methods: n, tabName: u, sqlOpsUrls: o, refid: l }),
    grid: (c, u) => /* @__PURE__ */ e.jsx(pe, { tabObj: c, methods: n, tabName: u, sqlOpsUrls: o, refid: l })
  };
  return /* @__PURE__ */ e.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ e.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-2 flex flex-col min-h-0", children: t && Object.entries(t).map(([c, u], d) => /* @__PURE__ */ e.jsx(Ye, { title: c, isFirst: d === 0, children: u?.fields ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-2", children: u.fields.map((i, f) => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${ne[oe(i.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ e.jsx(le, { methods: n, field: i, data: m ?? {}, sqlOpsUrls: o, refid: l })
    },
    i?.name ?? `field-${f}`
  )) }) }) : u ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: a[u.config?.uimode]?.(u) || x[u.config?.uimode]?.(u, c) || /* @__PURE__ */ e.jsx("div", { children: "No renderer for this type" }) }) : null }, c)) }) }) });
}
function He({ title: t, children: n }) {
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
function Ve({
  groups: t,
  methods: n = {},
  infoData: m,
  viewRenderers: a = {},
  sqlOpsUrls: o = {},
  refid: l
}) {
  const x = {
    single: (c, u) => /* @__PURE__ */ e.jsx(ge, { tabObj: c, methods: n, tabName: u, sqlOpsUrls: o, refid: l }),
    grid: (c, u) => /* @__PURE__ */ e.jsx(pe, { tabObj: c, methods: n, tabName: u, sqlOpsUrls: o, refid: l })
  };
  return /* @__PURE__ */ e.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ e.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-2  flex flex-col min-h-0", children: t && Object.entries(t).map(([c, u], d) => /* @__PURE__ */ e.jsx(He, { title: c, children: u?.fields ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-2", children: u.fields.map((i, f) => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${ne[oe(i.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ e.jsx(le, { methods: n, field: i, data: m ?? {}, sqlOpsUrls: o, refid: l })
    },
    i?.name ?? `field-${f}`
  )) }) }) : u ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: a[u.config?.uimode]?.(u) || x[u.config?.uimode]?.(u, c) || /* @__PURE__ */ e.jsx("div", { children: "No renderer for this type" }) }) : null }, c)) }) }) });
}
function Xe({
  infoViewJson: t,
  data: n = {},
  hiddenFields: m = [],
  groupFieldsFn: a = Oe,
  layoutConfig: o = {},
  viewRenderers: l = {},
  methods: x = {}
}) {
  const [c, u] = L.useState({}), d = ze(t.infoview ?? {}), i = t.endPoints ?? {}, f = L.useMemo(
    () => a(t.fields || {}),
    [t.fields, a]
  ), b = t?.source?.refid;
  let C = { ...f };
  t.infoview?.groups && (C = { ...C, ...t.infoview.groups }), L.useEffect(() => {
    let g = !1;
    return (async () => {
      const y = t?.source;
      if (!y?.type) {
        g || u({});
        return;
      }
      if (y.type === "method") {
        const k = y.method, v = k ? x[k] : void 0;
        if (v)
          try {
            const M = await Promise.resolve(v());
            g || u(M || {});
          } catch (M) {
            console.error("Method execution failed:", M), g || u({});
          }
        else
          g || u({});
      }
      if (y.type === "api")
        try {
          const k = await $({
            method: y.method || "GET",
            url: y.url,
            data: y.body || {},
            params: y.params || {},
            headers: y.headers || {}
          });
          g || u(k.data || {});
        } catch (k) {
          console.error("API fetch failed:", k), g || u({});
        }
      if (y.type === "sql" && y.refid && y.refid != "0") {
        if (!i) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const k = await $({
            method: "POST",
            url: i.baseURL + i.registerQuery,
            data: {
              query: {
                ...y,
                cols: y.cols,
                table: y.table,
                where: H(y.where, {
                  refid: y.refid
                })
              }
            },
            headers: {
              Authorization: `Bearer ${i?.accessToken}`
            }
          }), v = await $({
            method: "POST",
            url: i.baseURL + i.runQuery,
            data: {
              queryid: k.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${i?.accessToken}`
            }
          }), M = Ae(v) ?? {};
          g || u(M);
        } catch (k) {
          console.error("API fetch failed:", k);
        }
      }
    })(), () => {
      g = !0;
    };
  }, [
    t?.source?.type || "",
    t?.source?.method || "",
    t?.source?.url || "",
    JSON.stringify(t?.source?.params || {}),
    JSON.stringify(t?.source?.body || {}),
    JSON.stringify(t?.source?.headers || {})
  ]);
  const j = C.common || null;
  j && delete C.common;
  const _ = (g) => {
    switch (g) {
      case "accordion":
        return /* @__PURE__ */ e.jsx(
          Ge,
          {
            groups: C,
            methods: x,
            infoData: c,
            viewRenderers: l,
            sqlOpsUrls: i,
            refid: b
          }
        );
      case "tab":
      case "tableft":
      case "tabright":
        return /* @__PURE__ */ e.jsx(
          Re,
          {
            groups: C,
            viewRenderers: l,
            layoutConfig: o,
            methods: x,
            infoData: c,
            isCommonInfo: !!j,
            viewMode: g,
            sqlOpsUrls: i,
            refid: b
          }
        );
      case "cards":
        return /* @__PURE__ */ e.jsx(
          Ve,
          {
            groups: C,
            viewRenderers: l,
            methods: x,
            infoData: c,
            sqlOpsUrls: i,
            refid: b
          }
        );
      default:
        return /* @__PURE__ */ e.jsx(
          Re,
          {
            groups: C,
            viewRenderers: l,
            layoutConfig: o,
            methods: x,
            infoData: c,
            isCommonInfo: !!j,
            viewMode: g,
            sqlOpsUrls: i,
            refid: b
          }
        );
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: o.containerClass || "h-screen flex flex-col ", children: [
    j && /* @__PURE__ */ e.jsx(
      Fe,
      {
        commonInfo: j,
        infoData: c,
        hiddenFields: m
      }
    ),
    _(d)
  ] });
}
export {
  Xe as InfoView
};
