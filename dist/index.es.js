import L, { useState as W, useRef as Ne, useMemo as fe } from "react";
import M from "axios";
var ie = { exports: {} }, X = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var he;
function ke() {
  if (he) return X;
  he = 1;
  var r = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function f(a, o, l) {
    var y = null;
    if (l !== void 0 && (y = "" + l), o.key !== void 0 && (y = "" + o.key), "key" in o) {
      l = {};
      for (var i in o)
        i !== "key" && (l[i] = o[i]);
    } else l = o;
    return o = l.ref, {
      $$typeof: r,
      type: a,
      key: y,
      ref: o !== void 0 ? o : null,
      props: l
    };
  }
  return X.Fragment = n, X.jsx = f, X.jsxs = f, X;
}
var q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function Se() {
  return xe || (xe = 1, process.env.NODE_ENV !== "production" && function() {
    function r(s) {
      if (s == null) return null;
      if (typeof s == "function")
        return s.$$typeof === O ? null : s.displayName || s.name || null;
      if (typeof s == "string") return s;
      switch (s) {
        case P:
          return "Fragment";
        case E:
          return "Profiler";
        case x:
          return "StrictMode";
        case _:
          return "Suspense";
        case A:
          return "SuspenseList";
        case ce:
          return "Activity";
      }
      if (typeof s == "object")
        switch (typeof s.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), s.$$typeof) {
          case w:
            return "Portal";
          case S:
            return (s.displayName || "Context") + ".Provider";
          case p:
            return (s._context.displayName || "Context") + ".Consumer";
          case C:
            var g = s.render;
            return s = s.displayName, s || (s = g.displayName || g.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
          case D:
            return g = s.displayName || null, g !== null ? g : r(s.type) || "Memo";
          case re:
            g = s._payload, s = s._init;
            try {
              return r(s(g));
            } catch {
            }
        }
      return null;
    }
    function n(s) {
      return "" + s;
    }
    function f(s) {
      try {
        n(s);
        var g = !1;
      } catch {
        g = !0;
      }
      if (g) {
        g = console;
        var N = g.error, R = typeof Symbol == "function" && Symbol.toStringTag && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return N.call(
          g,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          R
        ), n(s);
      }
    }
    function a(s) {
      if (s === P) return "<>";
      if (typeof s == "object" && s !== null && s.$$typeof === re)
        return "<...>";
      try {
        var g = r(s);
        return g ? "<" + g + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var s = F.A;
      return s === null ? null : s.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function y(s) {
      if (B.call(s, "key")) {
        var g = Object.getOwnPropertyDescriptor(s, "key").get;
        if (g && g.isReactWarning) return !1;
      }
      return s.key !== void 0;
    }
    function i(s, g) {
      function N() {
        V || (V = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          g
        ));
      }
      N.isReactWarning = !0, Object.defineProperty(s, "key", {
        get: N,
        configurable: !0
      });
    }
    function u() {
      var s = r(this.type);
      return te[s] || (te[s] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), s = this.props.ref, s !== void 0 ? s : null;
    }
    function c(s, g, N, R, I, $, t, v) {
      return N = $.ref, s = {
        $$typeof: k,
        type: s,
        key: g,
        props: $,
        _owner: I
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
        value: t
      }), Object.defineProperty(s, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: v
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    }
    function d(s, g, N, R, I, $, t, v) {
      var m = g.children;
      if (m !== void 0)
        if (R)
          if (H(m)) {
            for (R = 0; R < m.length; R++)
              h(m[R]);
            Object.freeze && Object.freeze(m);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(m);
      if (B.call(g, "key")) {
        m = r(s);
        var j = Object.keys(g).filter(function(z) {
          return z !== "key";
        });
        R = 0 < j.length ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}", ne[m + R] || (j = 0 < j.length ? "{" + j.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          R,
          m,
          j,
          m
        ), ne[m + R] = !0);
      }
      if (m = null, N !== void 0 && (f(N), m = "" + N), y(g) && (f(g.key), m = "" + g.key), "key" in g) {
        N = {};
        for (var T in g)
          T !== "key" && (N[T] = g[T]);
      } else N = g;
      return m && i(
        N,
        typeof s == "function" ? s.displayName || s.name || "Unknown" : s
      ), c(
        s,
        m,
        $,
        I,
        o(),
        N,
        t,
        v
      );
    }
    function h(s) {
      typeof s == "object" && s !== null && s.$$typeof === k && s._store && (s._store.validated = 1);
    }
    var b = L, k = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), p = Symbol.for("react.consumer"), S = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), re = Symbol.for("react.lazy"), ce = Symbol.for("react.activity"), O = Symbol.for("react.client.reference"), F = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, H = Array.isArray, J = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(s) {
        return s();
      }
    };
    var V, te = {}, K = b.react_stack_bottom_frame.bind(
      b,
      l
    )(), se = J(a(l)), ne = {};
    q.Fragment = P, q.jsx = function(s, g, N, R, I) {
      var $ = 1e4 > F.recentlyCreatedOwnerStacks++;
      return d(
        s,
        g,
        N,
        !1,
        R,
        I,
        $ ? Error("react-stack-top-frame") : K,
        $ ? J(a(s)) : se
      );
    }, q.jsxs = function(s, g, N, R, I) {
      var $ = 1e4 > F.recentlyCreatedOwnerStacks++;
      return d(
        s,
        g,
        N,
        !0,
        R,
        I,
        $ ? Error("react-stack-top-frame") : K,
        $ ? J(a(s)) : se
      );
    };
  }()), q;
}
var ge;
function Ce() {
  return ge || (ge = 1, process.env.NODE_ENV === "production" ? ie.exports = ke() : ie.exports = Se()), ie.exports;
}
var e = Ce();
function Ee(r) {
  return r.template ? r.template : "tab";
}
function Te(r) {
  const n = {};
  return Object.entries(r).forEach(([f, a]) => {
    const o = a.group || "General";
    n[o] || (n[o] = { label: o, type: "fields", fields: [] }), n[o]?.fields?.push({ name: f, ...a });
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
function U(r) {
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
    } catch (f) {
      throw f;
    }
    document.body.removeChild(n);
  }
}
const Y = (r, n) => typeof r == "string" ? r.replace(
  /#(\w+)#/g,
  (f, a) => n[a] !== void 0 ? String(n[a]) : f
) : Array.isArray(r) ? r.map((f) => Y(f, n)) : r && typeof r == "object" ? Object.fromEntries(
  Object.entries(r).map(([f, a]) => [
    Y(f, n),
    Y(a, n)
  ])
) : r, ve = (r) => {
  const n = Array.isArray(r?.data?.data) ? r.data.data[0] : Array.isArray(r?.data) ? r.data[0] : r?.data?.data ?? r?.data;
  return n && typeof n == "object" && !Array.isArray(n) ? n : null;
}, pe = (r, n, f) => {
  const a = Array.isArray(f?.data?.data) ? f.data.data : Array.isArray(f?.data) ? f.data : f;
  if (!Array.isArray(a) || a.length === 0)
    return {};
  const o = {};
  return a.forEach((l) => {
    l[r] != null && l[n] != null && (o[l[r]] = l[n]);
  }), o;
};
function Ae(r, n) {
  if (!n || Object.keys(n).length === 0) return r;
  if (typeof r == "number")
    return n[String(r)] ?? r;
  if (typeof r == "string") {
    const a = r.split(",").map((o) => o.trim()).map((o) => n[o]).filter(Boolean);
    return a.length ? a.join(", ") : r;
  }
  return r;
}
const we = "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg";
function ee({ field: r, data: n, methods: f = {}, sqlOpsUrls: a, refid: o }) {
  const l = r?.name, y = `
    text-sm text-gray-600 break-words
  `, i = `
    block text-sm font-semibold  transition-all duration-300 text-gray-700 capitalize
  `, [u, c] = W(
    r.options ?? {}
  );
  L.useEffect(() => {
    let w = !0;
    return (async () => {
      if (r?.options) {
        c(r.options);
        return;
      }
      const x = r?.source ?? {};
      if (x.type === "method") {
        const E = x.method, p = E ? f[E] : void 0;
        if (p)
          try {
            const S = await Promise.resolve(p());
            w && c(S ?? {});
          } catch (S) {
            console.error("Method execution failed:", S), w && c({});
          }
        else
          w && c({});
      }
      if (x.type === "api" && x.url)
        try {
          const E = await M({
            method: x.method || "GET",
            url: x.url,
            data: x.body ?? {},
            params: x.params ?? {},
            headers: x.headers ?? {}
          }), p = r.valueKey || "value", S = r.labelKey || "title", C = pe(p, S, E);
          w && c(C);
        } catch (E) {
          console.error("API execution failed:", E), w && c({});
        }
      if (r.table || r.type === "dataSelector") {
        if (!a) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let E;
          if (r.type === "dataSelector")
            E = {
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
            E = {
              ...r,
              table: r.table,
              cols: r.columns
            };
          }
          r.where && r.type !== "dataSelector" && (E.where = o ? Y(r.where, { refid: o }) : r.where);
          const p = await M({
            method: "POST",
            url: a.baseURL + a.registerQuery,
            data: { query: E },
            headers: {
              Authorization: `Bearer ${a?.accessToken}`
            }
          }), S = await M({
            method: "POST",
            url: a.baseURL + a.runQuery,
            data: {
              queryid: p.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${a?.accessToken}`
            }
          }), C = r.valueKey || "value", _ = r.labelKey || "title", A = pe(C, _, S);
          w && c(A);
        } catch (E) {
          console.error("API fetch failed:", E);
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
  const d = typeof l == "string" ? n?.[l] : void 0, h = Ae(d, u), b = typeof l == "string" && (l.toLowerCase().includes("avatar") || l.toLowerCase().includes("logo")), k = h == null ? "" : typeof h == "string" || typeof h == "number" ? h : JSON.stringify(h);
  return /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ e.jsx("label", { className: i, children: r?.label }),
    /* @__PURE__ */ e.jsx("div", { className: "relative", children: b ? /* @__PURE__ */ e.jsx(
      "img",
      {
        src: String(h),
        alt: "avatar",
        className: "w-16 h-16 rounded-full object-cover border",
        onError: (w) => {
          const P = w.currentTarget;
          P.onerror = null, P.src = we;
        }
      }
    ) : /* @__PURE__ */ e.jsx("p", { className: y, children: k }) })
  ] });
}
function Le({ commonInfo: r, infoData: n, hiddenFields: f = [] }) {
  return /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-100 p-4 min-h-3/10 overflow-auto", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    /* @__PURE__ */ e.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ e.jsx("div", { className: "relative w-42 h-42", children: /* @__PURE__ */ e.jsx(
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
    /* @__PURE__ */ e.jsx("div", { className: "lg:col-span-10 min-h-0 max-h-40  overflow-y-auto custom-scrollbar", children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-2", children: r.fields?.map((a, o) => {
      const l = n?.[a.name];
      return f.includes(a.name) || !l && l !== !1 && l !== 0 ? null : /* @__PURE__ */ e.jsx("div", { className: `hover:bg-gray-100 transition-colors duration-200 col-span-12 sm:col-span-6 ${Z[U(a.width)] || "lg:col-span-4"}`, children: /* @__PURE__ */ e.jsx(
        ee,
        {
          field: a,
          data: n ?? {}
        },
        a?.name || o
      ) }, a.name);
    }) }) })
  ] }) });
}
function de({ tabObj: r, methods: n, tabName: f, sqlOpsUrls: a, refid: o }) {
  const [l, y] = L.useState(null);
  return L.useEffect(() => {
    let i = !1;
    return (async () => {
      const c = r?.config;
      if (!c?.type) {
        i || y(null);
        return;
      }
      if (c.type === "method") {
        const d = c.method, h = d ? n[d] : void 0;
        if (h)
          try {
            const b = await Promise.resolve(h());
            i || y(b || null);
          } catch (b) {
            console.error("Method execution failed:", b), i || y(null);
          }
        else
          i || y(null);
      }
      if (c.type === "api")
        try {
          const d = await M({
            method: c.method || "GET",
            // GET, POST, etc.
            url: c.url,
            data: c.body || {},
            // request body
            params: c.params || {},
            // query params
            headers: c.headers || {}
            // optional headers
          });
          i || y(d.data || null);
        } catch (d) {
          console.error("API fetch failed:", d), i || y(null);
        }
      if (c.type === "sql" && o && o != "0") {
        if (!a) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const d = await M({
            method: "POST",
            url: a.baseURL + a.registerQuery,
            data: {
              query: {
                ...c,
                cols: c.cols,
                table: c.table,
                where: Y(c.where, {
                  refid: c.refid
                })
              }
            },
            headers: {
              Authorization: `Bearer ${a?.accessToken}`
            }
          }), h = await M({
            method: "POST",
            url: a.baseURL + a.runQuery,
            data: {
              queryid: d.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${a?.accessToken}`
            }
          }), b = ve(h);
          i || y(b);
        } catch (d) {
          console.error("API fetch failed:", d);
        }
      }
    })(), () => {
      i = !0;
    };
  }, [
    r?.config?.type || "",
    r?.config?.method || "",
    r?.config?.url || "",
    JSON.stringify(r?.config?.params || {}),
    JSON.stringify(r?.config?.body || {}),
    JSON.stringify(r?.config?.headers || {})
  ]), /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-2", children: l ? Object.keys(l).map((i, u) => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${Z[U(r.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ e.jsx(
        ee,
        {
          field: { name: i, label: i },
          data: l ?? {},
          methods: n,
          refid: o,
          sqlOpsUrls: a
        },
        i
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
function ue({ tabObj: r, methods: n, tabName: f, sqlOpsUrls: a, refid: o }) {
  const [l, y] = W(1), [i, u] = W(10), [c, d] = W(""), [h, b] = L.useState([]), k = Ne(null), [w, P] = W(null), [x, E] = W({ key: "", direction: null });
  L.useEffect(() => {
    let t = !1;
    return (async () => {
      const m = r?.config;
      if (!m?.type) {
        t || b([]);
        return;
      }
      if (m.type === "method") {
        const j = m.method, T = j ? n[j] : void 0;
        if (T)
          try {
            const z = await Promise.resolve(T());
            t || b(z || []);
          } catch {
            t || b([]);
          }
        else
          t || b([]);
      }
      if (m.type === "api")
        try {
          const j = await M({
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
          t || b(j.data || {});
        } catch (j) {
          console.error("API fetch failed:", j), t || b([]);
        }
      if (m.type === "sql" && o && o != "0") {
        if (!a) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const { form: j, actions: T, uimode: z, type: ae, unilinks: oe, DEBUG: le, ...Q } = m, G = await M({
            method: "POST",
            url: a.baseURL + a.registerQuery,
            data: {
              query: {
                ...Q,
                where: Y(m.where, {
                  refid: o
                })
              }
            },
            headers: {
              Authorization: `Bearer ${a?.accessToken}`
            }
          }), me = await M({
            method: "POST",
            url: a.baseURL + a.runQuery,
            data: {
              queryid: G.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${a?.accessToken}`
            }
          });
          t || b(me.data?.data ?? me.data ?? {});
        } catch (j) {
          console.error("API fetch failed:", j);
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
  const p = Array.isArray(h) ? h : [h], C = ((t) => {
    const v = /* @__PURE__ */ new Set();
    return t.forEach((m) => {
      m && typeof m == "object" && Object.keys(m).forEach((j) => v.add(j));
    }), Array.from(v);
  })(p), _ = r?.vmode === "edit", A = r?.config?.form && Object.keys(r.config.form).length > 0, D = r?.config?.info && Object.keys(r.config.info).length > 0, re = (t) => {
    let v = "asc";
    x.key === t && x.direction === "asc" ? v = "desc" : x.key === t && x.direction === "desc" && (v = null), E({ key: t, direction: v });
  }, ce = (t) => !x.key || !x.direction ? t : [...t].sort((v, m) => {
    const j = v[x.key], T = m[x.key];
    if (j == null) return x.direction === "asc" ? 1 : -1;
    if (T == null) return x.direction === "asc" ? -1 : 1;
    if (typeof j == "boolean" && typeof T == "boolean")
      return x.direction === "asc" ? j === T ? 0 : j ? -1 : 1 : j === T ? 0 : j ? 1 : -1;
    const z = new Date(j), ae = new Date(T);
    if (!isNaN(z.getTime()) && !isNaN(ae.getTime()))
      return x.direction === "asc" ? z.getTime() - ae.getTime() : ae.getTime() - z.getTime();
    const oe = parseFloat(j), le = parseFloat(T);
    if (!isNaN(oe) && !isNaN(le))
      return x.direction === "asc" ? oe - le : le - oe;
    const Q = String(j).toLowerCase(), G = String(T).toLowerCase();
    return x.direction === "asc" ? Q < G ? -1 : Q > G ? 1 : 0 : Q > G ? -1 : Q < G ? 1 : 0;
  }), O = fe(() => {
    let t = p;
    if (c.trim()) {
      const v = c.toLowerCase();
      t = p.filter((m) => C.some((j) => {
        const T = m[j];
        return T == null ? !1 : String(T).toLowerCase().includes(v);
      }));
    }
    return ce(t);
  }, [p, c, C, x]), F = Math.ceil(O.length / i), B = (l - 1) * i, H = B + i, J = O.slice(B, H), V = (t) => {
    y(Math.max(1, Math.min(t, F)));
  }, te = (t) => {
    u(t), y(1);
  }, K = () => {
    d("");
  }, se = (t, v) => {
    const m = r?.config;
    if (!m) return;
    const j = m["popup.form"] ? "popup.form" : m.form ? "form" : null;
    j && n?.editInfoRecord?.({ [j]: r?.config?.[j] }, o, t);
  }, ne = (t) => {
    n?.viewInfoRecord?.(t, r?.config?.info);
  }, s = (t, v) => {
    n?.deleteInfoRecord?.(t, f);
  }, g = () => {
    const t = r?.config;
    if (!t) return;
    const v = t["popup.form"] ? "popup.form" : t.form ? "form" : null;
    v && n?.addInfoRecord?.({ key: r?.config?.[v] }, o);
  }, N = (t) => t.split("_").map((v) => v.charAt(0).toUpperCase() + v.slice(1)).join(" "), R = (t, v) => {
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
  }, I = (t, v) => {
    Re(t).then(() => {
      P(v), k.current && clearTimeout(k.current), k.current = setTimeout(() => {
        P("");
      }, 2e3);
    }).catch(() => {
      P("");
    });
  }, $ = fe(() => ({
    totalRows: O.length,
    columns: C.length,
    currentPageStart: B + 1,
    currentPageEnd: Math.min(H, O.length),
    isFiltered: c.trim().length > 0
  }), [O, p, C, B, H]);
  return p.length === 0 || C.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center text-gray-500", children: [
    /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ e.jsxs("svg", { className: "w-8 h-8 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
      /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" }),
      /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m8 7 4-4 4 4" })
    ] }) }),
    /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No Data Available" }),
    /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500 text-center max-w-sm", children: "There are no records to display in the grid view at the moment." }),
    A && /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: g,
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
            value: c,
            onChange: (t) => d(t.target.value),
            className: "block w-full px-10 py-2 border border-gray-300 rounded-lg text-sm placeholder-gray-500  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
          }
        ),
        c && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: K,
            className: "absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600",
            title: "Clear search",
            children: /* @__PURE__ */ e.jsx("svg", { className: "h-4 w-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
          }
        )
      ] }) }),
      A && /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: g,
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
          $.currentPageStart,
          "-",
          $.currentPageEnd
        ] }),
        " of ",
        /* @__PURE__ */ e.jsx("strong", { className: "text-gray-900", children: $.totalRows }),
        " records"
      ] }) }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex justify-end gap-4", children: [
        /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-gray-600", children: "Show:" }),
          /* @__PURE__ */ e.jsxs(
            "select",
            {
              value: i,
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
              onClick: () => V(l - 1),
              disabled: l === 1,
              className: "flex items-center gap-2 text-sm font-medium text-action cursor-pointer bg-white rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
              children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
            }
          ),
          /* @__PURE__ */ e.jsx("span", { className: "flex items-center gap-2 text-sm", children: /* @__PURE__ */ e.jsxs("span", { className: "text-gray-600", children: [
            "Page ",
            /* @__PURE__ */ e.jsx("strong", { className: "text-gray-900", children: l }),
            " of ",
            /* @__PURE__ */ e.jsx("strong", { className: "text-gray-900", children: F })
          ] }) }),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => V(l + 1),
              disabled: l === F,
              className: "flex items-center gap-2 text-sm font-medium text-action cursor-pointer bg-white rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
              children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
            }
          )
        ] })
      ] })
    ] }),
    O.length === 0 && c.trim() && /* @__PURE__ */ e.jsxs("div", { className: "h-full flex flex-1 flex-col items-center justify-center py-22 text-gray-500", children: [
      /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ e.jsx("svg", { className: "w-8 h-8 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) }) }),
      /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No Results Found" }),
      /* @__PURE__ */ e.jsxs("p", { className: "text-sm text-gray-500 text-center max-w-sm mb-4", children: [
        "No records match your search for ",
        /* @__PURE__ */ e.jsxs("strong", { children: [
          '"',
          c,
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
    O.length > 0 && /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx("div", { className: " overflow-auto min-w-full divide-y divide-gray-200 border border-gray-200 bordr-t", children: /* @__PURE__ */ e.jsxs("table", { className: "min-w-full h-full", children: [
      /* @__PURE__ */ e.jsx("thead", { className: " text-action", children: /* @__PURE__ */ e.jsxs("tr", { children: [
        _ && /* @__PURE__ */ e.jsx(
          "th",
          {
            scope: "col",
            className: "bg-muted px-4 sm:px-6 py-2 text-left text-xs font-bold uppercase tracking-wider w-32 sticky top-0 left-0 z-20",
            children: "Actions"
          }
        ),
        C.map((t, v) => /* @__PURE__ */ e.jsx(
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
                  /* @__PURE__ */ e.jsx("span", { className: "truncate", title: N(t), children: N(t) }),
                  x?.key === t ? x.direction === "asc" ? /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-blue-600", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ e.jsx("path", { d: "M5 12l5-5 5 5H5z" }) }) : /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-blue-600", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ e.jsx("path", { d: "M5 8l5 5 5-5H5z" }) }) : /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-gray-400 group-hover:text-gray-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" }) })
                ]
              }
            )
          },
          t
        ))
      ] }) }),
      /* @__PURE__ */ e.jsx("tbody", { className: "bg-white divide-y divide-gray-200 ", children: J.map((t, v) => /* @__PURE__ */ e.jsxs(
        "tr",
        {
          className: `hover:bg-secondary transition-colors duration-150 ${v % 2 === 0 ? "bg-white" : "bg-gray-50"}`,
          children: [
            _ && /* @__PURE__ */ e.jsx("td", { className: "px-4 sm:px-6 py-1 whitespace-nowrap text-sm bg-muted text-gray-900 sticky left-0 z-10", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
              D && /* @__PURE__ */ e.jsx(
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
            C.map((m) => /* @__PURE__ */ e.jsx(
              "td",
              {
                className: "px-4 sm:px-6 py-1 text-sm text-gray-900",
                children: /* @__PURE__ */ e.jsxs("div", { className: "relative group flex items-center", children: [
                  /* @__PURE__ */ e.jsx("div", { className: "truncate max-w-xs sm:max-w-none", children: R(t[m] ?? "", m) }),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      onClick: () => I(t[m] || "", `${t.id}-${m}`),
                      className: "absolute -right-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity ml-2 p-1 rounded bg-gray-50 hover:bg-gray-100 cursor-pointer",
                      title: "Copy",
                      children: w === `${t.id}-${m}` ? /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx("span", { className: "text-xs text-gray-600", children: "Copied!" }) }) : /* @__PURE__ */ e.jsx("i", { className: "fa-regular fa-copy" })
                    }
                  )
                ] })
              },
              m
            ))
          ]
        },
        B + v
      )) })
    ] }) }) })
  ] });
}
const ye = ({ groups: r, groupNames: n, setActiveTabIndex: f, activeTabIndex: a }) => /* @__PURE__ */ e.jsx(
  "nav",
  {
    className: "flex flex-col overflow-y-auto h-full px-2 py-1 space-y-1",
    children: n.length > 0 ? n.map((o, l) => /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: () => f(l),
        className: `cursor-pointer w-full text-left py-2 px-3 rounded-md text-sm font-semibold transition-all duration-200 ${a === l ? "bg-white shadow text-action" : "text-gray-600 hover:bg-white/50"}`,
        children: /* @__PURE__ */ e.jsx("span", { className: "truncate", children: r[o]?.label || o })
      },
      o
    )) : /* @__PURE__ */ e.jsx("div", { className: "py-3 px-2 text-sm text-gray-500", children: "No group available" })
  }
), Pe = ({
  groups: r,
  groupNames: n,
  setActiveTabIndex: f,
  activeTabIndex: a,
  layoutConfig: o,
  showScrollHint: l,
  isCommonInfo: y,
  tabsNavRef: i
}) => {
  const [u, c] = L.useState(!1), d = L.useRef(null);
  return L.useEffect(() => {
    const h = (b) => {
      d.current && !d.current.contains(b.target) && c(!1);
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, []), /* @__PURE__ */ e.jsxs("div", { className: o?.tabNavClass || "relative z-10", children: [
    l && /* @__PURE__ */ e.jsx("div", { className: "absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 flex items-center justify-center", children: /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: () => i.current?.scrollBy({ left: -200, behavior: "smooth" }),
        className: "w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group",
        children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
      }
    ) }),
    /* @__PURE__ */ e.jsxs("div", { className: "absolute right-0 top-1/2 -translate-y-1/2 z-20 w-18 flex items-center justify-between pr-1", children: [
      l && /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => i.current?.scrollBy({ left: 200, behavior: "smooth" }),
          className: "w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group",
          children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "relative", ref: d, children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => c(!u),
            className: "ml-1 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200",
            children: "⋮"
          }
        ),
        u && /* @__PURE__ */ e.jsx("div", { className: "absolute right-0 mt-2 w-48 max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-30", children: n.map((h, b) => /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              f(b), c(!1);
            },
            className: `w-full text-left px-3 py-2 text-sm truncate hover:bg-gray-100 ${a === b ? "bg-gray-50 font-semibold text-action" : "text-gray-700"}`,
            children: r[h]?.label || h
          },
          h
        )) })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: `relative bg-gray-100 ${y ? "" : "rounded-t-lg"} px-12 pt-1 shadow-inner overflow-hidden`, children: /* @__PURE__ */ e.jsx(
      "nav",
      {
        ref: i,
        className: "relative flex overflow-x-auto scrollbar-hide scroll-smooth",
        style: {
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        },
        children: n.length > 0 ? n.map((h, b) => /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => f(b),
            className: `relative cursor-pointer flex-shrink-0
            min-w-[8rem]   
            py-2 px-8
            rounded-t-lg text-xs sm:text-sm font-semibold
            transition-all duration-300 ease-out
            focus:outline-none whitespace-nowrap
            ${a === b ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
            children: /* @__PURE__ */ e.jsx("span", { className: "relative z-10 flex items-center justify-center gap-1 sm:gap-2", children: /* @__PURE__ */ e.jsx("span", { className: "truncate", children: r[h]?.label || h }) })
          },
          h
        )) : /* @__PURE__ */ e.jsx("div", { className: "py-3 px-6 text-sm text-gray-500", children: "No group available" })
      }
    ) })
  ] });
}, be = ({
  groupNames: r,
  activeTabIndex: n,
  layoutConfig: f,
  tabObj: a,
  infoData: o,
  setActiveTabIndex: l,
  renderView: y,
  methods: i = {},
  refid: u,
  sqlOpsUrls: c
}) => /* @__PURE__ */ e.jsxs(
  "div",
  {
    className: "bg-white rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex-1 flex flex-col min-h-0",
    children: [
      r.length > 0 ? a?.fields ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ e.jsx("div", { className: f?.fieldGridClass || "grid grid-cols-12 gap-2", children: a.fields.map((d, h) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: `col-span-12 sm:col-span-6 ${Z[U(d.width)] || "lg:col-span-2"}`,
          children: /* @__PURE__ */ e.jsx(
            ee,
            {
              field: d,
              data: o ?? {},
              methods: i,
              refid: u,
              sqlOpsUrls: c
            }
          )
        },
        d?.name ?? `field-${h}`
      )) }) }) : a ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: y(a, r[n] || "") }) : null : /* @__PURE__ */ e.jsx("div", { className: "flex-1 col-span-full text-center py-8 text-gray-500", children: "No data available" }),
      r.length > 5 && /* @__PURE__ */ e.jsxs("div", { className: "mt-10 pt-2 border-t border-gray-100 flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-500", children: [
          /* @__PURE__ */ e.jsxs("span", { children: [
            "Tab ",
            n + 1,
            " of ",
            r.length
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex gap-1", children: [
            r.slice(0, 5).map((d, h) => /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${h === n ? "bg-action w-6" : "bg-gray-300"}`
              },
              h
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
        /* @__PURE__ */ e.jsx("div", { className: "flex gap-1", children: r.map((d, h) => /* @__PURE__ */ e.jsx(
          "div",
          {
            className: `w-2 h-2 rounded-full transition-all duration-300 ${h === n ? "bg-action w-6" : "bg-gray-300"}`
          },
          h
        )) })
      ] }) })
    ]
  },
  r[n]
);
function je({
  groups: r,
  methods: n = {},
  infoData: f,
  viewRenderers: a = {},
  isCommonInfo: o,
  layoutConfig: l = {},
  viewMode: y,
  sqlOpsUrls: i = {},
  refid: u
}) {
  const [c, d] = L.useState(0), [h, b] = L.useState(!1), k = L.useRef(null), w = Object.keys(r);
  L.useEffect(() => {
    const A = () => {
      if (k.current) {
        const D = k.current;
        b(D.scrollWidth > D.clientWidth);
      }
    };
    return A(), window.addEventListener("resize", A), () => window.removeEventListener("resize", A);
  }, [w.length]), L.useEffect(() => {
    if (k.current && w.length > 0) {
      const A = k.current.children[c];
      A && A.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [c, w.length]);
  const P = y === "tableft", x = y === "tabright", E = !P && !x, p = r[w[c] ?? ""] || null, S = {
    single: (A, D) => /* @__PURE__ */ e.jsx(de, { tabObj: A, methods: n, tabName: D, sqlOpsUrls: i, refid: u }),
    grid: (A, D) => /* @__PURE__ */ e.jsx(ue, { tabObj: A, methods: n, tabName: D, sqlOpsUrls: i, refid: u })
  }, C = p?.config?.uimode, _ = a[C] || S[C] || (() => /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No UI mode for this type" }));
  return E ? /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex flex-col min-h-0 ", children: [
    /* @__PURE__ */ e.jsx(
      Pe,
      {
        groupNames: w,
        groups: r,
        setActiveTabIndex: d,
        activeTabIndex: c,
        tabsNavRef: k,
        isCommonInfo: o,
        showScrollHint: h,
        layoutConfig: l
      }
    ),
    /* @__PURE__ */ e.jsx(
      be,
      {
        groupNames: w,
        activeTabIndex: c,
        layoutConfig: l,
        tabObj: p,
        infoData: f,
        setActiveTabIndex: d,
        renderView: _,
        groups: r,
        methods: n,
        refid: u,
        sqlOpsUrls: i
      }
    )
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex min-h-0", children: [
    P && /* @__PURE__ */ e.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ e.jsx(
      ye,
      {
        groupNames: w,
        groups: r,
        setActiveTabIndex: d,
        activeTabIndex: c
      }
    ) }),
    /* @__PURE__ */ e.jsx("main", { className: "flex-1 flex flex-col min-h-0 overflow-auto", children: /* @__PURE__ */ e.jsx(
      be,
      {
        groupNames: w,
        activeTabIndex: c,
        layoutConfig: l,
        tabObj: p,
        infoData: f,
        setActiveTabIndex: d,
        renderView: _,
        groups: r,
        methods: n,
        refid: u,
        sqlOpsUrls: i
      }
    ) }),
    x && /* @__PURE__ */ e.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ e.jsx(
      ye,
      {
        groupNames: w,
        groups: r,
        setActiveTabIndex: d,
        activeTabIndex: c
      }
    ) })
  ] });
}
function _e({ title: r, children: n, isFirst: f }) {
  const [a, o] = W(f);
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
function $e({
  groups: r,
  methods: n = {},
  infoData: f,
  viewRenderers: a = {},
  sqlOpsUrls: o = {},
  refid: l
}) {
  const y = {
    single: (i, u) => /* @__PURE__ */ e.jsx(de, { tabObj: i, methods: n, tabName: u, sqlOpsUrls: o, refid: l }),
    grid: (i, u) => /* @__PURE__ */ e.jsx(ue, { tabObj: i, methods: n, tabName: u, sqlOpsUrls: o, refid: l })
  };
  return /* @__PURE__ */ e.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ e.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-2 flex flex-col min-h-0", children: r && Object.entries(r).map(([i, u], c) => /* @__PURE__ */ e.jsx(_e, { title: i, isFirst: c === 0, children: u?.fields ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-2", children: u.fields.map((d, h) => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${Z[U(d.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ e.jsx(ee, { methods: n, field: d, data: f ?? {}, sqlOpsUrls: o, refid: l })
    },
    d?.name ?? `field-${h}`
  )) }) }) : u ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: a[u.config?.uimode]?.(u) || y[u.config?.uimode]?.(u, i) || /* @__PURE__ */ e.jsx("div", { children: "No renderer for this type" }) }) : null }, i)) }) }) });
}
function Me({ title: r, children: n }) {
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
function De({
  groups: r,
  methods: n = {},
  infoData: f,
  viewRenderers: a = {},
  sqlOpsUrls: o = {},
  refid: l
}) {
  const y = {
    single: (i, u) => /* @__PURE__ */ e.jsx(de, { tabObj: i, methods: n, tabName: u, sqlOpsUrls: o, refid: l }),
    grid: (i, u) => /* @__PURE__ */ e.jsx(ue, { tabObj: i, methods: n, tabName: u, sqlOpsUrls: o, refid: l })
  };
  return /* @__PURE__ */ e.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ e.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-2  flex flex-col min-h-0", children: r && Object.entries(r).map(([i, u], c) => /* @__PURE__ */ e.jsx(Me, { title: i, children: u?.fields ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-2", children: u.fields.map((d, h) => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${Z[U(d.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ e.jsx(ee, { methods: n, field: d, data: f ?? {}, sqlOpsUrls: o, refid: l })
    },
    d?.name ?? `field-${h}`
  )) }) }) : u ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: a[u.config?.uimode]?.(u) || y[u.config?.uimode]?.(u, i) || /* @__PURE__ */ e.jsx("div", { children: "No renderer for this type" }) }) : null }, i)) }) }) });
}
function ze({
  infoViewJson: r,
  data: n = {},
  hiddenFields: f = [],
  groupFieldsFn: a = Te,
  layoutConfig: o = {},
  viewRenderers: l = {},
  methods: y = {}
}) {
  const [i, u] = L.useState({}), c = Ee(r.infoview ?? {}), d = r.endPoints ?? {}, h = L.useMemo(
    () => a(r.fields || {}),
    [r.fields, a]
  ), b = r?.source?.refid;
  let k = { ...h };
  r.infoview?.groups && (k = { ...k, ...r.infoview.groups }), L.useEffect(() => {
    let x = !1;
    return (async () => {
      const p = r?.source;
      if (!p?.type) {
        x || u({});
        return;
      }
      if (p.type === "method") {
        const S = p.method, C = S ? y[S] : void 0;
        if (C)
          try {
            const _ = await Promise.resolve(C());
            x || u(_ || {});
          } catch (_) {
            console.error("Method execution failed:", _), x || u({});
          }
        else
          x || u({});
      }
      if (p.type === "api")
        try {
          const S = await M({
            method: p.method || "GET",
            url: p.url,
            data: p.body || {},
            params: p.params || {},
            headers: p.headers || {}
          });
          x || u(S.data || {});
        } catch (S) {
          console.error("API fetch failed:", S), x || u({});
        }
      if (p.type === "sql" && p.refid && p.refid != "0") {
        if (!d) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const S = await M({
            method: "POST",
            url: d.baseURL + d.registerQuery,
            data: {
              query: {
                ...p,
                cols: p.cols,
                table: p.table,
                where: Y(p.where, {
                  refid: p.refid
                })
              }
            },
            headers: {
              Authorization: `Bearer ${d?.accessToken}`
            }
          }), C = await M({
            method: "POST",
            url: d.baseURL + d.runQuery,
            data: {
              queryid: S.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${d?.accessToken}`
            }
          }), _ = ve(C) ?? {};
          x || u(_);
        } catch (S) {
          console.error("API fetch failed:", S);
        }
      }
    })(), () => {
      x = !0;
    };
  }, [
    r?.source?.type || "",
    r?.source?.method || "",
    r?.source?.url || "",
    JSON.stringify(r?.source?.params || {}),
    JSON.stringify(r?.source?.body || {}),
    JSON.stringify(r?.source?.headers || {})
  ]);
  const w = k.common || null;
  w && delete k.common;
  const P = (x) => {
    switch (x) {
      case "accordion":
        return /* @__PURE__ */ e.jsx(
          $e,
          {
            groups: k,
            methods: y,
            infoData: i,
            viewRenderers: l,
            sqlOpsUrls: d,
            refid: b
          }
        );
      case "tab":
      case "tableft":
      case "tabright":
        return /* @__PURE__ */ e.jsx(
          je,
          {
            groups: k,
            viewRenderers: l,
            layoutConfig: o,
            methods: y,
            infoData: i,
            isCommonInfo: !!w,
            viewMode: x,
            sqlOpsUrls: d,
            refid: b
          }
        );
      case "cards":
        return /* @__PURE__ */ e.jsx(
          De,
          {
            groups: k,
            viewRenderers: l,
            methods: y,
            infoData: i,
            sqlOpsUrls: d,
            refid: b
          }
        );
      default:
        return /* @__PURE__ */ e.jsx(
          je,
          {
            groups: k,
            viewRenderers: l,
            layoutConfig: o,
            methods: y,
            infoData: i,
            isCommonInfo: !!w,
            viewMode: x,
            sqlOpsUrls: d,
            refid: b
          }
        );
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: o.containerClass || "h-screen flex flex-col ", children: [
    w && /* @__PURE__ */ e.jsx(
      Le,
      {
        commonInfo: w,
        infoData: i,
        hiddenFields: f
      }
    ),
    P(c)
  ] });
}
export {
  ze as InfoView
};
