import F, { useState as D, useRef as ce, useMemo as fe, useEffect as ie } from "react";
import M from "axios";
var le = { exports: {} }, Z = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var me;
function Ne() {
  if (me) return Z;
  me = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function u(a, o, l) {
    var h = null;
    if (l !== void 0 && (h = "" + l), o.key !== void 0 && (h = "" + o.key), "key" in o) {
      l = {};
      for (var c in o)
        c !== "key" && (l[c] = o[c]);
    } else l = o;
    return o = l.ref, {
      $$typeof: e,
      type: a,
      key: h,
      ref: o !== void 0 ? o : null,
      props: l
    };
  }
  return Z.Fragment = n, Z.jsx = u, Z.jsxs = u, Z;
}
var J = {};
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
    function e(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === $ ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case P:
          return "Fragment";
        case j:
          return "Profiler";
        case E:
          return "StrictMode";
        case k:
          return "Suspense";
        case _:
          return "SuspenseList";
        case q:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case v:
            return "Portal";
          case b:
            return (r.displayName || "Context") + ".Provider";
          case T:
            return (r._context.displayName || "Context") + ".Consumer";
          case L:
            var m = r.render;
            return r = r.displayName, r || (r = m.displayName || m.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case A:
            return m = r.displayName || null, m !== null ? m : e(r.type) || "Memo";
          case I:
            m = r._payload, r = r._init;
            try {
              return e(r(m));
            } catch {
            }
        }
      return null;
    }
    function n(r) {
      return "" + r;
    }
    function u(r) {
      try {
        n(r);
        var m = !1;
      } catch {
        m = !0;
      }
      if (m) {
        m = console;
        var w = m.error, C = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return w.call(
          m,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          C
        ), n(r);
      }
    }
    function a(r) {
      if (r === P) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === I)
        return "<...>";
      try {
        var m = e(r);
        return m ? "<" + m + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var r = g.A;
      return r === null ? null : r.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function h(r) {
      if (V.call(r, "key")) {
        var m = Object.getOwnPropertyDescriptor(r, "key").get;
        if (m && m.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function c(r, m) {
      function w() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          m
        ));
      }
      w.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: w,
        configurable: !0
      });
    }
    function p() {
      var r = e(this.type);
      return W[r] || (W[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function d(r, m, w, C, N, S, O, R) {
      return w = S.ref, r = {
        $$typeof: x,
        type: r,
        key: m,
        props: S,
        _owner: N
      }, (w !== void 0 ? w : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: p
      }) : Object.defineProperty(r, "ref", { enumerable: !1, value: null }), r._store = {}, Object.defineProperty(r._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(r, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(r, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: R
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function f(r, m, w, C, N, S, O, R) {
      var y = m.children;
      if (y !== void 0)
        if (C)
          if (Q(y)) {
            for (C = 0; C < y.length; C++)
              s(y[C]);
            Object.freeze && Object.freeze(y);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else s(y);
      if (V.call(m, "key")) {
        y = e(r);
        var z = Object.keys(m).filter(function(H) {
          return H !== "key";
        });
        C = 0 < z.length ? "{key: someKey, " + z.join(": ..., ") + ": ...}" : "{key: someKey}", ne[y + C] || (z = 0 < z.length ? "{" + z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          C,
          y,
          z,
          y
        ), ne[y + C] = !0);
      }
      if (y = null, w !== void 0 && (u(w), y = "" + w), h(m) && (u(m.key), y = "" + m.key), "key" in m) {
        w = {};
        for (var B in m)
          B !== "key" && (w[B] = m[B]);
      } else w = m;
      return y && c(
        w,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), d(
        r,
        y,
        S,
        N,
        o(),
        w,
        O,
        R
      );
    }
    function s(r) {
      typeof r == "object" && r !== null && r.$$typeof === x && r._store && (r._store.validated = 1);
    }
    var i = F, x = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), T = Symbol.for("react.consumer"), b = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), q = Symbol.for("react.activity"), $ = Symbol.for("react.client.reference"), g = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, Q = Array.isArray, re = console.createTask ? console.createTask : function() {
      return null;
    };
    i = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var Y, W = {}, G = i.react_stack_bottom_frame.bind(
      i,
      l
    )(), ae = re(a(l)), ne = {};
    J.Fragment = P, J.jsx = function(r, m, w, C, N) {
      var S = 1e4 > g.recentlyCreatedOwnerStacks++;
      return f(
        r,
        m,
        w,
        !1,
        C,
        N,
        S ? Error("react-stack-top-frame") : G,
        S ? re(a(r)) : ae
      );
    }, J.jsxs = function(r, m, w, C, N) {
      var S = 1e4 > g.recentlyCreatedOwnerStacks++;
      return f(
        r,
        m,
        w,
        !0,
        C,
        N,
        S ? Error("react-stack-top-frame") : G,
        S ? re(a(r)) : ae
      );
    };
  }()), J;
}
var xe;
function Ee() {
  return xe || (xe = 1, process.env.NODE_ENV === "production" ? le.exports = Ne() : le.exports = ke()), le.exports;
}
var t = Ee();
function Te(e) {
  return e.template ? e.template : "tab";
}
function Se(e) {
  const n = {};
  return Object.entries(e).forEach(([u, a]) => {
    const o = a.group || "General";
    n[o] || (n[o] = { label: o, type: "fields", fields: [] }), n[o]?.fields?.push({ name: u, ...a });
  }), n;
}
const U = {
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
function ee(e) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(e) ? e : 6;
}
const K = (e, n) => typeof e == "string" ? e.replace(
  /#(\w+)#/g,
  (u, a) => n[a] !== void 0 ? String(n[a]) : u
) : Array.isArray(e) ? e.map((u) => K(u, n)) : e && typeof e == "object" ? Object.fromEntries(
  Object.entries(e).map(([u, a]) => [
    K(u, n),
    K(a, n)
  ])
) : e, je = (e) => {
  const n = Array.isArray(e?.data?.data) ? e.data.data[0] : Array.isArray(e?.data) ? e.data[0] : e?.data?.data ?? e?.data;
  return n && typeof n == "object" && !Array.isArray(n) ? n : null;
}, ge = (e, n, u) => {
  const a = Array.isArray(u?.data?.data) ? u.data.data : Array.isArray(u?.data) ? u.data : u;
  if (!Array.isArray(a) || a.length === 0)
    return {};
  const o = {};
  return a.forEach((l) => {
    l[e] != null && l[n] != null && (o[l[e]] = l[n]);
  }), o;
};
function ye(e, n) {
  if (!n || Object.keys(n).length === 0) return e;
  if (typeof e == "number")
    return n[String(e)] ?? e;
  if (typeof e == "string") {
    const a = e.split(",").map((o) => o.trim()).map((o) => n[o]).filter(Boolean);
    return a.length ? a.join(", ") : e;
  }
  return e;
}
const we = "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg";
function te({ field: e, data: n, methods: u = {}, sqlOpsUrls: a, refid: o }) {
  const l = e?.name, h = `
    text-sm text-gray-600 break-words
  `, c = `
    block text-sm font-semibold  transition-all duration-300 text-gray-700 capitalize
  `, [p, d] = D(
    e.options ?? {}
  );
  F.useEffect(() => {
    let v = !0;
    return (async () => {
      if (e?.options) {
        d(e.options);
        return;
      }
      const E = e?.source ?? {};
      if (E.type === "method") {
        const j = E.method, T = j ? u[j] : void 0;
        if (T)
          try {
            const b = await Promise.resolve(T());
            v && d(b ?? {});
          } catch (b) {
            console.error("Method execution failed:", b), v && d({});
          }
        else
          v && d({});
      }
      if (E.type === "api" && E.url)
        try {
          const j = await M({
            method: E.method || "GET",
            url: E.url,
            data: E.body ?? {},
            params: E.params ?? {},
            headers: E.headers ?? {}
          }), T = e.valueKey || "value", b = e.labelKey || "title", L = ge(T, b, j);
          v && d(L);
        } catch (j) {
          console.error("API execution failed:", j), v && d({});
        }
      if (e.table || e.type === "dataSelector") {
        if (!a) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let j;
          if (e.type === "dataSelector")
            j = {
              ...e,
              table: "do_lists",
              cols: "title,value",
              where: {
                groupid: e.groupid ?? ""
              }
            };
          else {
            if (!e.table || !e.columns) {
              console.error("Invalid SQL field config", e);
              return;
            }
            j = {
              ...e,
              table: e.table,
              cols: e.columns
            };
          }
          e.where && e.type !== "dataSelector" && (j.where = o ? K(e.where, { refid: o }) : e.where);
          const T = await M({
            method: "POST",
            url: a.baseURL + a.registerQuery,
            data: { query: j },
            headers: {
              Authorization: `Bearer ${a?.accessToken}`
            }
          }), b = await M({
            method: "POST",
            url: a.baseURL + a.runQuery,
            data: {
              queryid: T.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${a?.accessToken}`
            }
          }), L = e.valueKey || "value", k = e.labelKey || "title", _ = ge(L, k, b);
          v && d(_);
        } catch (j) {
          console.error("API fetch failed:", j);
        }
      }
    })(), () => {
      v = !1;
    };
  }, [
    e.options,
    e.source,
    e.table,
    e.columns,
    e.where,
    o
  ]);
  const f = typeof l == "string" ? n?.[l] : void 0, s = typeof f == "string" ? e.type === "date" ? f.split("T")[0] : e.type === "time" ? f.includes("T") ? f.slice(11, 16) : f.slice(0, 5) : ye(f, p) : ye(f, p), i = typeof l == "string" && (l.toLowerCase().includes("avatar") || l.toLowerCase().includes("logo")), x = s == null ? "" : typeof s == "string" || typeof s == "number" ? s : JSON.stringify(s);
  return /* @__PURE__ */ t.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ t.jsx("label", { className: c, children: e?.label }),
    /* @__PURE__ */ t.jsx("div", { className: "relative", children: i ? /* @__PURE__ */ t.jsx(
      "img",
      {
        src: String(s),
        alt: "avatar",
        className: "w-16 h-16 rounded-full object-cover border",
        onError: (v) => {
          const P = v.currentTarget;
          P.onerror = null, P.src = we;
        }
      }
    ) : /* @__PURE__ */ t.jsx("p", { className: h, children: x }) })
  ] });
}
function Ae({ commonInfo: e, infoData: n, hiddenFields: u = [] }) {
  return /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-100 p-4 min-h-3/10 overflow-auto", children: /* @__PURE__ */ t.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    /* @__PURE__ */ t.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ t.jsx("div", { className: "relative w-42 h-42", children: /* @__PURE__ */ t.jsx(
      "img",
      {
        src: String(n.avatar_photo),
        alt: "Profile",
        className: " w-full h-full object-cover border-4 rounded-[12px] border-white shadow-lg",
        onError: (a) => {
          const o = a.currentTarget;
          o.onerror = null, o.src = we;
        }
      }
    ) }) }),
    /* @__PURE__ */ t.jsx("div", { className: "lg:col-span-10 min-h-0 max-h-40  overflow-y-auto custom-scrollbar", children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-2", children: e.fields?.map((a, o) => {
      const l = n?.[a.name];
      return u.includes(a.name) || !l && l !== !1 && l !== 0 ? null : /* @__PURE__ */ t.jsx("div", { className: `hover:bg-gray-100 transition-colors duration-200 col-span-12 sm:col-span-6 ${U[ee(a.width)] || "lg:col-span-4"}`, children: /* @__PURE__ */ t.jsx(
        te,
        {
          field: a,
          data: n ?? {}
        },
        a?.name || o
      ) }, a.name);
    }) }) })
  ] }) });
}
function de({ tabObj: e, methods: n, tabName: u, sqlOpsUrls: a, refid: o }) {
  const [l, h] = F.useState(null);
  return F.useEffect(() => {
    let c = !1;
    return (async () => {
      const d = e?.config;
      if (!d?.type) {
        c || h(null);
        return;
      }
      if (d.type === "method") {
        const f = d.method, s = f ? n[f] : void 0;
        if (s)
          try {
            const i = await Promise.resolve(s());
            c || h(i || null);
          } catch (i) {
            console.error("Method execution failed:", i), c || h(null);
          }
        else
          c || h(null);
      }
      if (d.type === "api")
        try {
          const f = await M({
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
          c || h(f.data || null);
        } catch (f) {
          console.error("API fetch failed:", f), c || h(null);
        }
      if (d.type === "sql" && o && o != "0") {
        if (!a) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const f = await M({
            method: "POST",
            url: a.baseURL + a.registerQuery,
            data: {
              query: {
                ...d,
                cols: d.cols,
                table: d.table,
                where: K(d.where, {
                  refid: d.refid
                })
              }
            },
            headers: {
              Authorization: `Bearer ${a?.accessToken}`
            }
          }), s = await M({
            method: "POST",
            url: a.baseURL + a.runQuery,
            data: {
              queryid: f.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${a?.accessToken}`
            }
          }), i = je(s);
          c || h(i);
        } catch (f) {
          console.error("API fetch failed:", f);
        }
      }
    })(), () => {
      c = !0;
    };
  }, [
    e?.config?.type || "",
    e?.config?.method || "",
    e?.config?.url || "",
    JSON.stringify(e?.config?.params || {}),
    JSON.stringify(e?.config?.body || {}),
    JSON.stringify(e?.config?.headers || {})
  ]), /* @__PURE__ */ t.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-2", children: l ? Object.keys(l).map((c, p) => /* @__PURE__ */ t.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${U[ee(e.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ t.jsx(
        te,
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
    `field-${p}`
  )) : /* @__PURE__ */ t.jsx("div", { className: "col-span-12 flex flex-col  min-h-0", children: /* @__PURE__ */ t.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center text-gray-500", children: [
    /* @__PURE__ */ t.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ t.jsxs("svg", { className: "w-8 h-8 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
      /* @__PURE__ */ t.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" }),
      /* @__PURE__ */ t.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m8 7 4-4 4 4" })
    ] }) }),
    /* @__PURE__ */ t.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No Data Available" }),
    /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-500 text-center max-w-sm", children: "There are no records to display  at the moment." })
  ] }) }) }) });
}
function ue({ tabObj: e, methods: n, tabName: u, sqlOpsUrls: a, refid: o, Reports: l, toast: h, handleAction: c, infoViewJson: p }) {
  const [d, f] = D(1), [s, i] = D(10), [x, v] = D(""), [P, E] = D(!1), [j, T] = D(null), [b, L] = F.useState([]);
  ce(null);
  const [k, _] = D(null), [A, I] = D({ key: "", direction: null }), [q, $] = D(null), g = e?.config;
  console.log("tabObj", e), console.log("source", g);
  const V = F.useCallback(async () => {
    if (!g?.type) {
      L([]);
      return;
    }
    if (g.type === "method") {
      const N = g.method, S = N ? n[N] : void 0;
      if (!S) {
        L([]);
        return;
      }
      try {
        const O = await Promise.resolve(S());
        L(O || []);
      } catch {
        L([]);
      }
    }
    if (g.type === "api")
      try {
        const N = await M({
          method: g.method || "GET",
          url: g.url,
          data: g.body || {},
          params: g.params || {},
          headers: g.headers || {}
        });
        L(N.data || []);
      } catch (N) {
        console.error("API fetch failed:", N), L([]);
      }
    if (g.type === "sql" && o && o !== "0") {
      if (!a) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const { form: N, actions: S, uimode: O, type: R, unilinks: y, DEBUG: z, ...B } = g, H = await M({
          method: "POST",
          url: a.baseURL + a.registerQuery,
          data: {
            query: {
              ...B,
              where: K(g.where, { refid: o })
            }
          },
          headers: {
            Authorization: `Bearer ${a.accessToken}`
          }
        }), X = await M({
          method: "POST",
          url: a.baseURL + a.runQuery,
          data: {
            queryid: H.data.queryid,
            filter: {}
          },
          headers: {
            Authorization: `Bearer ${a.accessToken}`
          }
        });
        L(X.data?.data ?? X.data ?? []);
      } catch (N) {
        console.error("SQL fetch failed:", N);
      }
    }
  }, [
    e?.config,
    n,
    o,
    a
  ]);
  F.useEffect(() => {
    V();
  }, [
    V
  ]);
  const Q = Array.isArray(b) ? b : [b], Y = ((N) => {
    const S = /* @__PURE__ */ new Set();
    return N.forEach((O) => {
      O && typeof O == "object" && Object.keys(O).forEach((R) => S.add(R));
    }), Array.from(S);
  })(Q);
  e?.vmode;
  const W = e?.config, G = W?.["popup.form"] ? "popup.form" : (W?.form, "form"), ae = W?.[G] && Object.keys(W?.[G]).length > 0;
  W?.info && Object.keys(W?.info).length > 0;
  const ne = (N) => !A.key || !A.direction ? N : [...N].sort((S, O) => {
    const R = S[A.key], y = O[A.key];
    if (R == null) return A.direction === "asc" ? 1 : -1;
    if (y == null) return A.direction === "asc" ? -1 : 1;
    if (typeof R == "boolean" && typeof y == "boolean")
      return A.direction === "asc" ? R === y ? 0 : R ? -1 : 1 : R === y ? 0 : R ? 1 : -1;
    const z = new Date(R), B = new Date(y);
    if (!isNaN(z.getTime()) && !isNaN(B.getTime()))
      return A.direction === "asc" ? z.getTime() - B.getTime() : B.getTime() - z.getTime();
    const H = parseFloat(R), X = parseFloat(y);
    if (!isNaN(H) && !isNaN(X))
      return A.direction === "asc" ? H - X : X - H;
    const oe = String(R).toLowerCase(), se = String(y).toLowerCase();
    return A.direction === "asc" ? oe < se ? -1 : oe > se ? 1 : 0 : oe > se ? -1 : oe < se ? 1 : 0;
  }), r = fe(() => {
    let N = Q;
    if (x.trim()) {
      const S = x.toLowerCase();
      N = Q.filter((O) => Y.some((R) => {
        const y = O[R];
        return y == null ? !1 : String(y).toLowerCase().includes(S);
      }));
    }
    return ne(N);
  }, [Q, x, Y, A]);
  Math.ceil(r.length / s);
  const m = (d - 1) * s, w = m + s;
  r.slice(m, w);
  const C = () => {
    n?.addInfoRecord?.({ [G]: e?.config?.[G] }, o);
  };
  return fe(() => ({
    totalRows: r.length,
    columns: Y.length,
    currentPageStart: m + 1,
    currentPageEnd: Math.min(w, r.length),
    isFiltered: x.trim().length > 0
  }), [r, Q, Y, m, w]), Q.length === 0 || Y.length === 0 ? /* @__PURE__ */ t.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center text-gray-500", children: [
    /* @__PURE__ */ t.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ t.jsxs("svg", { className: "w-8 h-8 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
      /* @__PURE__ */ t.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" }),
      /* @__PURE__ */ t.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m8 7 4-4 4 4" })
    ] }) }),
    /* @__PURE__ */ t.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No Data Available" }),
    /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-500 text-center max-w-sm", children: "There are no records to display in the grid view at the moment." }),
    ae && /* @__PURE__ */ t.jsxs(
      "button",
      {
        onClick: C,
        className: "mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-action cursor-pointer",
        children: [
          /* @__PURE__ */ t.jsx("svg", { className: "w-4 h-4 mr-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ t.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 4v16m8-8H4" }) }),
          "Add Record"
        ]
      }
    )
  ] }) : /* @__PURE__ */ t.jsx(t.Fragment, { children: l ? /* @__PURE__ */ t.jsx(
    l,
    {
      methods: n,
      report: {
        source: {
          table: g?.table,
          type: "sql",
          cols: g?.cols,
          where: g?.where,
          orderby: g?.orderby
        },
        endPoints: a,
        actions: { ...g?.actions, ...p?.buttons, ...p.actions },
        datagrid: g?.datagrid
      },
      onButtonClick: c
    }
  ) : /* @__PURE__ */ t.jsx("div", { className: "text-sm text-gray-500 text-center py-4", children: "Reports component is not available." }) });
}
const pe = ({ groups: e, groupNames: n, setActiveTabIndex: u, activeTabIndex: a }) => /* @__PURE__ */ t.jsx(
  "nav",
  {
    className: "flex flex-col overflow-y-auto h-full px-2 py-1 space-y-1",
    children: n.length > 0 ? n.map((o, l) => /* @__PURE__ */ t.jsx(
      "button",
      {
        type: "button",
        onClick: () => u(l),
        className: `cursor-pointer w-full text-left py-2 px-3 rounded-md text-sm font-semibold transition-all duration-200 ${a === l ? "bg-white shadow text-action" : "text-gray-600 hover:bg-white/50"}`,
        children: /* @__PURE__ */ t.jsx("span", { className: "truncate", children: e[o]?.label || o })
      },
      o
    )) : /* @__PURE__ */ t.jsx("div", { className: "py-3 px-2 text-sm text-gray-500", children: "No group available" })
  }
), Pe = ({
  groups: e,
  groupNames: n,
  setActiveTabIndex: u,
  activeTabIndex: a,
  layoutConfig: o,
  showScrollHint: l,
  isCommonInfo: h,
  tabsNavRef: c
}) => {
  const [p, d] = D(!1), f = ce(null);
  return ie(() => {
    const s = (i) => {
      f.current && !f.current.contains(i.target) && d(!1);
    };
    return document.addEventListener("mousedown", s), () => document.removeEventListener("mousedown", s);
  }, []), /* @__PURE__ */ t.jsxs("div", { className: o?.tabNavClass || "relative z-10", children: [
    l && /* @__PURE__ */ t.jsx("div", { className: "absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 flex items-center justify-center", children: /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => c.current?.scrollBy({ left: -200, behavior: "smooth" }),
        className: "w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group",
        children: /* @__PURE__ */ t.jsx("svg", { className: "w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ t.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
      }
    ) }),
    /* @__PURE__ */ t.jsxs("div", { className: "absolute right-0 top-1/2 -translate-y-1/2 z-20 w-18 flex items-center justify-between pr-1", children: [
      l && /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: () => c.current?.scrollBy({ left: 200, behavior: "smooth" }),
          className: "w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group",
          children: /* @__PURE__ */ t.jsx("svg", { className: "w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ t.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
        }
      ),
      /* @__PURE__ */ t.jsxs("div", { className: "relative", ref: f, children: [
        /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: () => d(!p),
            className: "ml-1 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200",
            children: "⋮"
          }
        ),
        p && /* @__PURE__ */ t.jsx("div", { className: "absolute right-0 mt-2 w-48 max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-30", children: n.map((s, i) => /* @__PURE__ */ t.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              u(i), d(!1);
            },
            className: `w-full text-left px-3 py-2 text-sm truncate hover:bg-gray-100 ${a === i ? "bg-gray-50 font-semibold text-action" : "text-gray-700"}`,
            children: e[s]?.label || s
          },
          s
        )) })
      ] })
    ] }),
    /* @__PURE__ */ t.jsx("div", { className: `relative bg-gray-100 ${h ? "" : "rounded-t-lg"} px-12 pt-1 shadow-inner overflow-hidden`, children: /* @__PURE__ */ t.jsx(
      "nav",
      {
        ref: c,
        className: "relative flex overflow-x-auto scrollbar-hide scroll-smooth",
        style: {
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        },
        children: n.length > 0 ? n.map((s, i) => /* @__PURE__ */ t.jsx(
          "button",
          {
            type: "button",
            onClick: () => u(i),
            className: `relative cursor-pointer flex-shrink-0
            min-w-[8rem]   
            py-2 px-8
            rounded-t-lg text-xs sm:text-sm font-semibold
            transition-all duration-300 ease-out
            focus:outline-none whitespace-nowrap
            ${a === i ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
            children: /* @__PURE__ */ t.jsx("span", { className: "relative z-10 flex items-center justify-center gap-1 sm:gap-2", children: /* @__PURE__ */ t.jsx("span", { className: "truncate", children: e[s]?.label || s }) })
          },
          s
        )) : /* @__PURE__ */ t.jsx("div", { className: "py-3 px-6 text-sm text-gray-500", children: "No group available" })
      }
    ) })
  ] });
}, be = ({
  groupNames: e,
  activeTabIndex: n,
  layoutConfig: u,
  tabObj: a,
  infoData: o,
  setActiveTabIndex: l,
  renderView: h,
  methods: c = {},
  refid: p,
  sqlOpsUrls: d
}) => /* @__PURE__ */ t.jsxs(
  "div",
  {
    className: "bg-white rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex-1 flex flex-col min-h-0",
    children: [
      e.length > 0 ? a?.fields ? /* @__PURE__ */ t.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ t.jsx("div", { className: u?.fieldGridClass || "grid grid-cols-12 gap-2", children: a.fields.map((f, s) => /* @__PURE__ */ t.jsx(
        "div",
        {
          className: `col-span-12 sm:col-span-6 ${U[ee(f.width)] || "lg:col-span-2"}`,
          children: /* @__PURE__ */ t.jsx(
            te,
            {
              field: f,
              data: o ?? {},
              methods: c,
              refid: p,
              sqlOpsUrls: d
            }
          )
        },
        f?.name ?? `field-${s}`
      )) }) }) : a ? /* @__PURE__ */ t.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: h(a, e[n] || "") }) : null : /* @__PURE__ */ t.jsx("div", { className: "flex-1 col-span-full text-center py-8 text-gray-500", children: "No data available" }),
      e.length > 5 && /* @__PURE__ */ t.jsxs("div", { className: "mt-10 pt-2 border-t border-gray-100 flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-500", children: [
          /* @__PURE__ */ t.jsxs("span", { children: [
            "Tab ",
            n + 1,
            " of ",
            e.length
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "flex gap-1", children: [
            e.slice(0, 5).map((f, s) => /* @__PURE__ */ t.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${s === n ? "bg-action w-6" : "bg-gray-300"}`
              },
              s
            )),
            e.length > 5 && /* @__PURE__ */ t.jsxs("span", { className: "text-xs text-gray-400 ml-1", children: [
              "+",
              e.length - 5
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "hidden sm:flex gap-2", children: [
          /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: () => l(Math.max(0, n - 1)),
              disabled: n === 0,
              className: "px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
              children: "Previous"
            }
          ),
          /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: () => l(Math.min(e.length - 1, n + 1)),
              disabled: n === e.length - 1,
              className: "px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
              children: "Next"
            }
          )
        ] })
      ] }),
      e.length <= 5 && /* @__PURE__ */ t.jsx("div", { className: "mt-6 pt-3 border-t border-gray-100", children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
        /* @__PURE__ */ t.jsxs("span", { children: [
          "Tab ",
          n + 1,
          " of ",
          e.length
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "flex gap-1", children: e.map((f, s) => /* @__PURE__ */ t.jsx(
          "div",
          {
            className: `w-2 h-2 rounded-full transition-all duration-300 ${s === n ? "bg-action w-6" : "bg-gray-300"}`
          },
          s
        )) })
      ] }) })
    ]
  },
  e[n]
);
function ve({
  groups: e,
  methods: n = {},
  infoData: u,
  viewRenderers: a = {},
  isCommonInfo: o,
  layoutConfig: l = {},
  viewMode: h,
  sqlOpsUrls: c = {},
  refid: p,
  Reports: d,
  toast: f = {},
  handleAction: s = () => {
  },
  infoViewJson: i
}) {
  const [x, v] = D(0), [P, E] = D(!1), j = ce(null), T = Object.keys(e);
  ie(() => {
    const $ = () => {
      if (j.current) {
        const g = j.current;
        E(g.scrollWidth > g.clientWidth);
      }
    };
    return $(), window.addEventListener("resize", $), () => window.removeEventListener("resize", $);
  }, [T.length]), ie(() => {
    if (j.current && T.length > 0) {
      const $ = j.current.children[x];
      $ && $.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [x, T.length]);
  const b = h === "tableft", L = h === "tabright", k = !b && !L, _ = e[T[x] ?? ""] || null, A = {
    single: ($, g) => /* @__PURE__ */ t.jsx(de, { tabObj: $, methods: n, tabName: g, sqlOpsUrls: c, refid: p }),
    grid: ($, g) => /* @__PURE__ */ t.jsx(
      ue,
      {
        ...d ? { Reports: d } : {},
        toast: f,
        handleAction: s,
        tabObj: $,
        methods: n,
        tabName: g,
        sqlOpsUrls: c,
        refid: p,
        infoViewJson: i
      }
    )
  }, I = _?.config?.uimode, q = a[I] || A[I] || (() => /* @__PURE__ */ t.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No UI mode for this type" }));
  return k ? /* @__PURE__ */ t.jsxs("div", { className: "flex-1 flex flex-col min-h-0 ", children: [
    /* @__PURE__ */ t.jsx(
      Pe,
      {
        groupNames: T,
        groups: e,
        setActiveTabIndex: v,
        activeTabIndex: x,
        tabsNavRef: j,
        isCommonInfo: o,
        showScrollHint: P,
        layoutConfig: l
      }
    ),
    /* @__PURE__ */ t.jsx(
      be,
      {
        groupNames: T,
        activeTabIndex: x,
        layoutConfig: l,
        tabObj: _,
        infoData: u,
        setActiveTabIndex: v,
        renderView: q,
        groups: e,
        methods: n,
        refid: p,
        sqlOpsUrls: c
      }
    )
  ] }) : /* @__PURE__ */ t.jsxs("div", { className: "flex-1 flex min-h-0", children: [
    b && /* @__PURE__ */ t.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ t.jsx(
      pe,
      {
        groupNames: T,
        groups: e,
        setActiveTabIndex: v,
        activeTabIndex: x
      }
    ) }),
    /* @__PURE__ */ t.jsx("main", { className: "flex-1 flex flex-col min-h-0 overflow-auto", children: /* @__PURE__ */ t.jsx(
      be,
      {
        groupNames: T,
        activeTabIndex: x,
        layoutConfig: l,
        tabObj: _,
        infoData: u,
        setActiveTabIndex: v,
        renderView: q,
        groups: e,
        methods: n,
        refid: p,
        sqlOpsUrls: c
      }
    ) }),
    L && /* @__PURE__ */ t.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ t.jsx(
      pe,
      {
        groupNames: T,
        groups: e,
        setActiveTabIndex: v,
        activeTabIndex: x
      }
    ) })
  ] });
}
function _e({ title: e, children: n, isFirst: u }) {
  const [a, o] = D(u);
  return /* @__PURE__ */ t.jsx("div", { className: "group relative mt-1 flex-1 flex flex-col min-h-0 max-h-screen", children: /* @__PURE__ */ t.jsxs("div", { className: "flex-1 flex flex-col min-h-0 relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        onClick: () => o(!a),
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ t.jsx("div", { className: `w-3 h-3 rounded-full transition-all duration-300 ${a ? "bg-action" : "bg-gray-300"}` }),
            /* @__PURE__ */ t.jsx("h3", { className: "text-md capitalize font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: e })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: `relative transition-all duration-300 ${a ? "rotate-180" : ""}`, children: [
            /* @__PURE__ */ t.jsx("div", { className: `absolute inset-0 rounded-full blur-md transition-opacity duration-300 ${a ? "bg-action opacity-30" : "bg-transparent opacity-0"}` }),
            /* @__PURE__ */ t.jsx(
              "svg",
              {
                className: "relative w-4 h-4 text-gray-500 group-hover:text-action-500 transition-colors duration-300",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ t.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `flex-1 flex flex-col min-h-0 transition-all  duration-500 ease-in-out overflow-hidden ${a ? "max-h-full opacity-100" : "max-h-0 opacity-0"}`,
        children: /* @__PURE__ */ t.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white flex-1 flex flex-col min-h-0", children: /* @__PURE__ */ t.jsx("div", { className: "space-y-5 pt-4 flex-1 flex flex-col min-h-0 overflow-y-auto", children: n }) })
      }
    )
  ] }) });
}
function Re({
  groups: e,
  methods: n = {},
  infoData: u,
  viewRenderers: a = {},
  sqlOpsUrls: o = {},
  refid: l,
  Reports: h,
  toast: c = {},
  handleAction: p = () => {
  },
  infoViewJson: d
}) {
  const f = {
    single: (s, i) => /* @__PURE__ */ t.jsx(de, { tabObj: s, methods: n, tabName: i, sqlOpsUrls: o, refid: l }),
    grid: (s, i) => /* @__PURE__ */ t.jsx(
      ue,
      {
        ...h ? { Reports: h } : {},
        toast: c,
        infoViewJson: d,
        handleAction: p,
        tabObj: s,
        methods: n,
        tabName: i,
        sqlOpsUrls: o,
        refid: l
      }
    )
  };
  return /* @__PURE__ */ t.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ t.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ t.jsx("div", { className: "space-y-2 flex flex-col min-h-0", children: e && Object.entries(e).map(([s, i], x) => /* @__PURE__ */ t.jsx(_e, { title: s, isFirst: x === 0, children: i?.fields ? /* @__PURE__ */ t.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-2", children: i.fields.map((v, P) => /* @__PURE__ */ t.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${U[ee(v.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ t.jsx(te, { methods: n, field: v, data: u ?? {}, sqlOpsUrls: o, refid: l })
    },
    v?.name ?? `field-${P}`
  )) }) }) : i ? /* @__PURE__ */ t.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: a[i.config?.uimode]?.(i) || f[i.config?.uimode]?.(i, s) || /* @__PURE__ */ t.jsx("div", { children: "No renderer for this type" }) }) : null }, s)) }) }) });
}
function Ce({ title: e, children: n }) {
  return /* @__PURE__ */ t.jsx("div", { className: "group relative mt-1 flex-1 flex flex-col min-h-0 max-h-screen", children: /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col min-h-0 relative  bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ t.jsx(
      "button",
      {
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ t.jsx("div", { className: "w-3 h-3 rounded-full transition-all duration-300 bg-action" }),
          /* @__PURE__ */ t.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r capitalize from-gray-800 to-gray-600 bg-clip-text text-transparent", children: e })
        ] })
      }
    ),
    /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `flex flex-col min-h-0 transition-all duration-500 ease-in-out opacity-100'
            }`,
        children: /* @__PURE__ */ t.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white flex flex-col min-h-0", children: /* @__PURE__ */ t.jsx("div", { className: "space-y-5 pt-4 flex-1 flex flex-col min-h-0 overflow-y-auto", children: n }) })
      }
    )
  ] }) });
}
function Le({
  groups: e,
  methods: n = {},
  infoData: u,
  viewRenderers: a = {},
  sqlOpsUrls: o = {},
  refid: l,
  Reports: h,
  toast: c = {},
  handleAction: p = () => {
  },
  infoViewJson: d
}) {
  const f = {
    single: (s, i) => /* @__PURE__ */ t.jsx(de, { tabObj: s, methods: n, tabName: i, sqlOpsUrls: o, refid: l }),
    grid: (s, i) => /* @__PURE__ */ t.jsx(
      ue,
      {
        ...h ? { Reports: h } : {},
        toast: c,
        handleAction: p,
        tabObj: s,
        methods: n,
        tabName: i,
        sqlOpsUrls: o,
        refid: l,
        infoViewJson: d
      }
    )
  };
  return /* @__PURE__ */ t.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ t.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ t.jsx("div", { className: "space-y-2  flex flex-col min-h-0", children: e && Object.entries(e).map(([s, i], x) => /* @__PURE__ */ t.jsx(Ce, { title: s, children: i?.fields ? /* @__PURE__ */ t.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-12 gap-2", children: i.fields.map((v, P) => /* @__PURE__ */ t.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${U[ee(v.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ t.jsx(te, { methods: n, field: v, data: u ?? {}, sqlOpsUrls: o, refid: l })
    },
    v?.name ?? `field-${P}`
  )) }) }) : i ? /* @__PURE__ */ t.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: a[i.config?.uimode]?.(i) || f[i.config?.uimode]?.(i, s) || /* @__PURE__ */ t.jsx("div", { children: "No renderer for this type" }) }) : null }, s)) }) }) });
}
function De({
  infoViewJson: e,
  data: n = {},
  hiddenFields: u = [],
  groupFieldsFn: a = Se,
  layoutConfig: o = {},
  viewRenderers: l = {},
  methods: h = {},
  Reports: c,
  toast: p = {},
  handleAction: d = () => {
  }
}) {
  const [f, s] = F.useState({}), i = Te(e.infoview ?? {}), x = e.endPoints ?? {}, v = F.useMemo(
    () => a(e.fields || {}),
    [e.fields, a]
  ), P = e?.source?.refid;
  let E = { ...v };
  e.infoview?.groups && (E = { ...E, ...e.infoview.groups }), F.useEffect(() => {
    let b = !1;
    return (async () => {
      const k = e?.source;
      if (!k?.type) {
        b || s({});
        return;
      }
      if (k.type === "method") {
        const _ = k.method, A = _ ? h[_] : void 0;
        if (A)
          try {
            const I = await Promise.resolve(A());
            b || s(I || {});
          } catch (I) {
            console.error("Method execution failed:", I), b || s({});
          }
        else
          b || s({});
      }
      if (k.type === "api")
        try {
          const _ = await M({
            method: k.method || "GET",
            url: k.url,
            data: k.body || {},
            params: k.params || {},
            headers: k.headers || {}
          });
          b || s(_.data || {});
        } catch (_) {
          console.error("API fetch failed:", _), b || s({});
        }
      if (k.type === "sql" && k.refid && k.refid != "0") {
        if (!x) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const _ = await M({
            method: "POST",
            url: x.baseURL + x.registerQuery,
            data: {
              query: {
                ...k,
                cols: k.cols,
                table: k.table,
                where: K(k.where, {
                  refid: k.refid
                })
              }
            },
            headers: {
              Authorization: `Bearer ${x?.accessToken}`
            }
          }), A = await M({
            method: "POST",
            url: x.baseURL + x.runQuery,
            data: {
              queryid: _.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${x?.accessToken}`
            }
          }), I = je(A) ?? {};
          b || s(I);
        } catch (_) {
          console.error("API fetch failed:", _);
        }
      }
    })(), () => {
      b = !0;
    };
  }, [
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.url || "",
    JSON.stringify(e?.source?.params || {}),
    JSON.stringify(e?.source?.body || {}),
    JSON.stringify(e?.source?.headers || {})
  ]);
  const j = E.common || null;
  j && delete E.common;
  const T = (b) => {
    switch (b) {
      case "accordion":
        return /* @__PURE__ */ t.jsx(
          Re,
          {
            groups: E,
            methods: h,
            infoData: f,
            viewRenderers: l,
            sqlOpsUrls: x,
            refid: P,
            ...c ? { Reports: c } : {},
            toast: p,
            handleAction: d,
            infoViewJson: e
          }
        );
      case "tab":
      case "tableft":
      case "tabright":
        return /* @__PURE__ */ t.jsx(
          ve,
          {
            groups: E,
            viewRenderers: l,
            layoutConfig: o,
            methods: h,
            infoData: f,
            isCommonInfo: !!j,
            viewMode: b,
            sqlOpsUrls: x,
            refid: P,
            ...c ? { Reports: c } : {},
            toast: p,
            handleAction: d,
            infoViewJson: e
          }
        );
      case "cards":
        return /* @__PURE__ */ t.jsx(
          Le,
          {
            groups: E,
            viewRenderers: l,
            methods: h,
            infoData: f,
            sqlOpsUrls: x,
            refid: P,
            ...c ? { Reports: c } : {},
            toast: p,
            handleAction: d,
            infoViewJson: e
          }
        );
      default:
        return /* @__PURE__ */ t.jsx(
          ve,
          {
            groups: E,
            viewRenderers: l,
            layoutConfig: o,
            methods: h,
            infoData: f,
            isCommonInfo: !!j,
            viewMode: b,
            sqlOpsUrls: x,
            refid: P,
            ...c ? { Reports: c } : {},
            toast: p,
            handleAction: d,
            infoViewJson: e
          }
        );
    }
  };
  return /* @__PURE__ */ t.jsxs("div", { className: o.containerClass || "h-screen flex flex-col ", children: [
    j && /* @__PURE__ */ t.jsx(
      Ae,
      {
        commonInfo: j,
        infoData: f,
        hiddenFields: u
      }
    ),
    T(i)
  ] });
}
export {
  De as InfoView
};
