import T, { useState as B, useRef as be, useMemo as ue } from "react";
import M from "axios";
var ae = { exports: {} }, J = {};
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
function je() {
  if (he) return J;
  he = 1;
  var t = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
  function u(n, i, l) {
    var x = null;
    if (l !== void 0 && (x = "" + l), i.key !== void 0 && (x = "" + i.key), "key" in i) {
      l = {};
      for (var o in i)
        o !== "key" && (l[o] = i[o]);
    } else l = i;
    return i = l.ref, {
      $$typeof: t,
      type: n,
      key: x,
      ref: i !== void 0 ? i : null,
      props: l
    };
  }
  return J.Fragment = a, J.jsx = u, J.jsxs = u, J;
}
var Q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var me;
function ve() {
  return me || (me = 1, process.env.NODE_ENV !== "production" && function() {
    function t(s) {
      if (s == null) return null;
      if (typeof s == "function")
        return s.$$typeof === z ? null : s.displayName || s.name || null;
      if (typeof s == "string") return s;
      switch (s) {
        case P:
          return "Fragment";
        case W:
          return "Profiler";
        case p:
          return "StrictMode";
        case L:
          return "Suspense";
        case _:
          return "SuspenseList";
        case ne:
          return "Activity";
      }
      if (typeof s == "object")
        switch (typeof s.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), s.$$typeof) {
          case C:
            return "Portal";
          case R:
            return (s.displayName || "Context") + ".Provider";
          case v:
            return (s._context.displayName || "Context") + ".Consumer";
          case S:
            var m = s.render;
            return s = s.displayName, s || (s = m.displayName || m.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
          case I:
            return m = s.displayName || null, m !== null ? m : t(s.type) || "Memo";
          case K:
            m = s._payload, s = s._init;
            try {
              return t(s(m));
            } catch {
            }
        }
      return null;
    }
    function a(s) {
      return "" + s;
    }
    function u(s) {
      try {
        a(s);
        var m = !1;
      } catch {
        m = !0;
      }
      if (m) {
        m = console;
        var N = m.error, E = typeof Symbol == "function" && Symbol.toStringTag && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return N.call(
          m,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          E
        ), a(s);
      }
    }
    function n(s) {
      if (s === P) return "<>";
      if (typeof s == "object" && s !== null && s.$$typeof === K)
        return "<...>";
      try {
        var m = t(s);
        return m ? "<" + m + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var s = F.A;
      return s === null ? null : s.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function x(s) {
      if (D.call(s, "key")) {
        var m = Object.getOwnPropertyDescriptor(s, "key").get;
        if (m && m.isReactWarning) return !1;
      }
      return s.key !== void 0;
    }
    function o(s, m) {
      function N() {
        H || (H = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          m
        ));
      }
      N.isReactWarning = !0, Object.defineProperty(s, "key", {
        get: N,
        configurable: !0
      });
    }
    function c() {
      var s = t(this.type);
      return q[s] || (q[s] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), s = this.props.ref, s !== void 0 ? s : null;
    }
    function f(s, m, N, E, O, A, r, j) {
      return N = A.ref, s = {
        $$typeof: w,
        type: s,
        key: m,
        props: A,
        _owner: O
      }, (N !== void 0 ? N : null) !== null ? Object.defineProperty(s, "ref", {
        enumerable: !1,
        get: c
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
        value: r
      }), Object.defineProperty(s, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: j
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    }
    function d(s, m, N, E, O, A, r, j) {
      var h = m.children;
      if (h !== void 0)
        if (E)
          if (G(h)) {
            for (E = 0; E < h.length; E++)
              b(h[E]);
            Object.freeze && Object.freeze(h);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else b(h);
      if (D.call(m, "key")) {
        h = t(s);
        var y = Object.keys(m).filter(function($) {
          return $ !== "key";
        });
        E = 0 < y.length ? "{key: someKey, " + y.join(": ..., ") + ": ...}" : "{key: someKey}", te[h + E] || (y = 0 < y.length ? "{" + y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          E,
          h,
          y,
          h
        ), te[h + E] = !0);
      }
      if (h = null, N !== void 0 && (u(N), h = "" + N), x(m) && (u(m.key), h = "" + m.key), "key" in m) {
        N = {};
        for (var k in m)
          k !== "key" && (N[k] = m[k]);
      } else N = m;
      return h && o(
        N,
        typeof s == "function" ? s.displayName || s.name || "Unknown" : s
      ), f(
        s,
        h,
        A,
        O,
        i(),
        N,
        r,
        j
      );
    }
    function b(s) {
      typeof s == "object" && s !== null && s.$$typeof === w && s._store && (s._store.validated = 1);
    }
    var g = T, w = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), W = Symbol.for("react.profiler"), v = Symbol.for("react.consumer"), R = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), ne = Symbol.for("react.activity"), z = Symbol.for("react.client.reference"), F = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.prototype.hasOwnProperty, G = Array.isArray, Y = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(s) {
        return s();
      }
    };
    var H, q = {}, V = g.react_stack_bottom_frame.bind(
      g,
      l
    )(), ee = Y(n(l)), te = {};
    Q.Fragment = P, Q.jsx = function(s, m, N, E, O) {
      var A = 1e4 > F.recentlyCreatedOwnerStacks++;
      return d(
        s,
        m,
        N,
        !1,
        E,
        O,
        A ? Error("react-stack-top-frame") : V,
        A ? Y(n(s)) : ee
      );
    }, Q.jsxs = function(s, m, N, E, O) {
      var A = 1e4 > F.recentlyCreatedOwnerStacks++;
      return d(
        s,
        m,
        N,
        !0,
        E,
        O,
        A ? Error("react-stack-top-frame") : V,
        A ? Y(n(s)) : ee
      );
    };
  }()), Q;
}
var fe;
function Ne() {
  return fe || (fe = 1, process.env.NODE_ENV === "production" ? ae.exports = je() : ae.exports = ve()), ae.exports;
}
var e = Ne();
function we(t) {
  return t.template ? t.template : "tab";
}
function ke(t) {
  const a = {};
  return Object.entries(t).forEach(([u, n]) => {
    const i = n.group || "General";
    a[i] || (a[i] = { label: i, type: "fields", fields: [] }), a[i]?.fields?.push({ name: u, ...n });
  }), a;
}
function Ce(t) {
  const a = {};
  return Object.keys(t).forEach((u) => {
    a[u] = {
      label: u,
      required: t[u].required ?? !1
    };
  }), a;
}
const X = {
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
function U(t) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(t) ? t : 6;
}
async function Ee(t) {
  if (navigator.clipboard && navigator.clipboard.writeText)
    try {
      await navigator.clipboard.writeText(t);
    } catch (a) {
      throw a;
    }
  else {
    const a = document.createElement("textarea");
    a.value = t, document.body.appendChild(a), a.select();
    try {
      document.execCommand("copy");
    } catch (u) {
      throw u;
    }
    document.body.removeChild(a);
  }
}
const ye = "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg";
function Z({ field: t, data: a }) {
  const u = t?.name;
  return /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ e.jsx("label", { className: `
    block text-sm font-semibold  transition-all duration-300 text-gray-700 capitalize
  `, children: t?.label }),
    /* @__PURE__ */ e.jsx("div", { className: "relative", children: u.toLowerCase().includes("avatar") || u.toLowerCase().includes("logo") ? /* @__PURE__ */ e.jsx(
      "img",
      {
        src: String(a?.[u]),
        alt: "avatar",
        className: "w-16 h-16 rounded-full object-cover border",
        onError: (l) => {
          const x = l.currentTarget;
          x.onerror = null, x.src = ye;
        }
      }
    ) : /* @__PURE__ */ e.jsx("p", { className: `
    text-sm text-gray-600 break-words
  `, children: typeof a?.[u] == "object" ? JSON.stringify(a?.[u]) : String(a?.[u] ?? "") }) })
  ] });
}
function Se({ commonInfo: t, infoData: a, hiddenFields: u = [] }) {
  return /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-100 p-4 min-h-3/10 overflow-auto", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    /* @__PURE__ */ e.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ e.jsx("div", { className: "relative w-42 h-42", children: /* @__PURE__ */ e.jsx(
      "img",
      {
        src: String(a.avatar_photo),
        alt: "Profile",
        className: " w-full h-full object-cover border-4 rounded-[12px] border-white shadow-lg",
        onError: (n) => {
          const i = n.currentTarget;
          i.onerror = null, i.src = ye;
        }
      }
    ) }) }),
    /* @__PURE__ */ e.jsx("div", { className: "lg:col-span-10 min-h-0 max-h-40  overflow-y-auto custom-scrollbar", children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-2", children: t.fields?.map((n, i) => {
      const l = a?.[n.name];
      return u.includes(n.name) || !l && l !== !1 && l !== 0 ? null : /* @__PURE__ */ e.jsx("div", { className: `hover:bg-gray-100 transition-colors duration-200 col-span-12 sm:col-span-6 ${X[U(n.width)] || "lg:col-span-4"}`, children: /* @__PURE__ */ e.jsx(
        Z,
        {
          field: n,
          data: a ?? {}
        },
        n?.name || i
      ) }, n.name);
    }) }) })
  ] }) });
}
function ce({ tabObj: t, methods: a, tabName: u, sqlOpsUrls: n, refid: i }) {
  const [l, x] = T.useState(null);
  return T.useEffect(() => {
    let o = !1;
    return (async () => {
      const f = t?.config;
      if (!f?.type) {
        o || x(null);
        return;
      }
      if (f.type === "method") {
        const d = f.method, b = d ? a[d] : void 0;
        if (b)
          try {
            const g = await Promise.resolve(b());
            o || x(g || null);
          } catch (g) {
            console.error("Method execution failed:", g), o || x(null);
          }
        else
          o || x(null);
      }
      if (f.type === "api")
        try {
          const d = await M({
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
          o || x(d.data || null);
        } catch (d) {
          console.error("API fetch failed:", d), o || x(null);
        }
      if (f.type === "sql" && i && i != "0") {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const d = await M({
            method: "GET",
            url: n.baseURL + n.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }), b = await M({
            method: "POST",
            url: n.baseURL + n.dbopsGetRefId,
            data: {
              operation: "fetch",
              source: { ...f, refid: i },
              fields: {},
              datahash: d.data.refhash
            },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }), g = await M({
            method: "POST",
            url: n.baseURL + n.dbopsFetch,
            data: {
              refid: b.data.refid,
              datahash: d.data.refhash
            },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          });
          console.log("res.data", g.data), o || x(g.data?.data ?? g.data ?? {});
        } catch (d) {
          console.error("API fetch failed:", d);
        }
      }
    })(), () => {
      o = !0;
    };
  }, [
    t?.config?.type || "",
    t?.config?.method || "",
    t?.config?.url || "",
    JSON.stringify(t?.config?.params || {}),
    JSON.stringify(t?.config?.body || {}),
    JSON.stringify(t?.config?.headers || {})
  ]), console.log("data", l), /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-2", children: l ? Object.keys(l).map((o, c) => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${X[U(t.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ e.jsx(
        Z,
        {
          field: { name: o, label: o },
          data: l ?? {}
        },
        o
      )
    },
    `field-${c}`
  )) : /* @__PURE__ */ e.jsx("div", { className: "col-span-12 flex flex-col  min-h-0", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center text-gray-500", children: [
    /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ e.jsxs("svg", { className: "w-8 h-8 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
      /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" }),
      /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m8 7 4-4 4 4" })
    ] }) }),
    /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No Data Available" }),
    /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500 text-center max-w-sm", children: "There are no records to display  at the moment." })
  ] }) }) }) });
}
function de({ tabObj: t, methods: a, tabName: u, sqlOpsUrls: n, refid: i }) {
  const [l, x] = B(1), [o, c] = B(10), [f, d] = B(""), [b, g] = T.useState([]), w = be(null), [C, P] = B(null), [p, W] = B({ key: "", direction: null });
  T.useEffect(() => {
    let r = !1;
    return (async () => {
      const h = t?.config;
      if (!h?.type) {
        r || g([]);
        return;
      }
      if (h.type === "method") {
        const y = h.method, k = y ? a[y] : void 0;
        if (k)
          try {
            const $ = await Promise.resolve(k());
            r || g($ || []);
          } catch {
            r || g([]);
          }
        else
          r || g([]);
      }
      if (h.type === "api")
        try {
          const y = await M({
            method: h.method || "GET",
            // GET, POST, etc.
            url: h.url,
            data: h.body || {},
            // request body
            params: h.params || {},
            // query params
            headers: h.headers || {}
            // optional headers
          });
          r || g(y.data || {});
        } catch (y) {
          console.error("API fetch failed:", y), r || g([]);
        }
      if (h.type === "sql" && i && i != "0") {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const y = await M({
            method: "GET",
            url: n.baseURL + n.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }), k = await M({
            method: "POST",
            url: n.baseURL + n.dbopsGetRefId,
            data: {
              operation: "fetch",
              source: { ...h, refid: i },
              fields: {},
              datahash: y.data.refhash
            },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }), $ = await M({
            method: "POST",
            url: n.baseURL + n.dbopsFetch,
            data: {
              refid: k.data.refid,
              datahash: y.data.refhash
            },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          });
          console.log("res.data", $.data), r || g($.data?.data ?? $.data ?? {});
        } catch (y) {
          console.error("API fetch failed:", y);
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
  const v = Array.isArray(b) ? b : [b], S = ((r) => {
    const j = /* @__PURE__ */ new Set();
    return r.forEach((h) => {
      h && typeof h == "object" && Object.keys(h).forEach((y) => j.add(y));
    }), Array.from(j);
  })(v), L = t?.vmode === "edit", _ = t?.config?.form && Object.keys(t.config.form).length > 0, I = t?.config?.info && Object.keys(t.config.info).length > 0, K = (r) => {
    let j = "asc";
    p.key === r && p.direction === "asc" ? j = "desc" : p.key === r && p.direction === "desc" && (j = null), W({ key: r, direction: j });
  }, ne = (r) => !p.key || !p.direction ? r : [...r].sort((j, h) => {
    const y = j[p.key], k = h[p.key];
    if (y == null) return p.direction === "asc" ? 1 : -1;
    if (k == null) return p.direction === "asc" ? -1 : 1;
    if (typeof y == "boolean" && typeof k == "boolean")
      return p.direction === "asc" ? y === k ? 0 : y ? -1 : 1 : y === k ? 0 : y ? 1 : -1;
    const $ = new Date(y), oe = new Date(k);
    if (!isNaN($.getTime()) && !isNaN(oe.getTime()))
      return p.direction === "asc" ? $.getTime() - oe.getTime() : oe.getTime() - $.getTime();
    const le = parseFloat(y), ie = parseFloat(k);
    if (!isNaN(le) && !isNaN(ie))
      return p.direction === "asc" ? le - ie : ie - le;
    const re = String(y).toLowerCase(), se = String(k).toLowerCase();
    return p.direction === "asc" ? re < se ? -1 : re > se ? 1 : 0 : re > se ? -1 : re < se ? 1 : 0;
  }), z = ue(() => {
    let r = v;
    if (f.trim()) {
      const j = f.toLowerCase();
      r = v.filter((h) => S.some((y) => {
        const k = h[y];
        return k == null ? !1 : String(k).toLowerCase().includes(j);
      }));
    }
    return ne(r);
  }, [v, f, S, p]), F = Math.ceil(z.length / o), D = (l - 1) * o, G = D + o, Y = z.slice(D, G), H = (r) => {
    x(Math.max(1, Math.min(r, F)));
  }, q = (r) => {
    c(r), x(1);
  }, V = () => {
    d("");
  }, ee = (r, j) => {
    a?.editInfoRecord?.(r, u);
  }, te = (r) => {
    a?.viewInfoRecord?.(r, t?.config?.info);
  }, s = (r, j) => {
    a?.deleteInfoRecord?.(r, u);
  }, m = () => {
    a?.addInfoRecord?.(t?.config?.form, u);
  }, N = (r) => r.split("_").map((j) => j.charAt(0).toUpperCase() + j.slice(1)).join(" "), E = (r, j) => {
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
          const h = typeof r == "string" ? JSON.parse(r) : r;
          return /* @__PURE__ */ e.jsx("pre", { className: "whitespace-pre-wrap text-xs bg-gray-100 p-2 rounded", children: JSON.stringify(h, null, 2) });
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
  }, O = (r, j) => {
    Ee(r).then(() => {
      P(j), w.current && clearTimeout(w.current), w.current = setTimeout(() => {
        P("");
      }, 2e3);
    }).catch(() => {
      P("");
    });
  }, A = ue(() => ({
    totalRows: z.length,
    columns: S.length,
    currentPageStart: D + 1,
    currentPageEnd: Math.min(G, z.length),
    isFiltered: f.trim().length > 0
  }), [z, v, S, D, G]);
  return v.length === 0 || S.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center text-gray-500", children: [
    /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ e.jsxs("svg", { className: "w-8 h-8 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
      /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" }),
      /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m8 7 4-4 4 4" })
    ] }) }),
    /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No Data Available" }),
    /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500 text-center max-w-sm", children: "There are no records to display in the grid view at the moment." }),
    _ && /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: m,
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
            onChange: (r) => d(r.target.value),
            className: "block w-full px-10 py-2 border border-gray-300 rounded-lg text-sm placeholder-gray-500  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
          }
        ),
        f && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: V,
            className: "absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600",
            title: "Clear search",
            children: /* @__PURE__ */ e.jsx("svg", { className: "h-4 w-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
          }
        )
      ] }) }),
      _ && /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: m,
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
              onChange: (r) => q(Number(r.target.value)),
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
              onClick: () => H(l - 1),
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
              onClick: () => H(l + 1),
              disabled: l === F,
              className: "flex items-center gap-2 text-sm font-medium text-action cursor-pointer bg-white rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
              children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
            }
          )
        ] })
      ] })
    ] }),
    z.length === 0 && f.trim() && /* @__PURE__ */ e.jsxs("div", { className: "h-full flex flex-1 flex-col items-center justify-center py-22 text-gray-500", children: [
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
          onClick: V,
          className: "inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 cursor-pointer",
          children: "Clear Search"
        }
      )
    ] }),
    z.length > 0 && /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx("div", { className: " overflow-auto min-w-full divide-y divide-gray-200 border border-gray-200 bordr-t", children: /* @__PURE__ */ e.jsxs("table", { className: "min-w-full h-full", children: [
      /* @__PURE__ */ e.jsx("thead", { className: " text-action", children: /* @__PURE__ */ e.jsxs("tr", { children: [
        L && /* @__PURE__ */ e.jsx(
          "th",
          {
            scope: "col",
            className: "bg-muted px-4 sm:px-6 py-2 text-left text-xs font-bold uppercase tracking-wider w-32 sticky top-0 left-0 z-20",
            children: "Actions"
          }
        ),
        S.map((r, j) => /* @__PURE__ */ e.jsx(
          "th",
          {
            scope: "col",
            className: "bg-muted sticky top-0 z-10 px-4 sm:px-6 py-2 text-left text-xs font-bold uppercase tracking-wider",
            children: /* @__PURE__ */ e.jsxs(
              "div",
              {
                className: "flex items-center gap-1 cursor-pointer select-none",
                onClick: () => K(r),
                children: [
                  /* @__PURE__ */ e.jsx("span", { className: "truncate", title: N(r), children: N(r) }),
                  p?.key === r ? p.direction === "asc" ? /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-blue-600", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ e.jsx("path", { d: "M5 12l5-5 5 5H5z" }) }) : /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-blue-600", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ e.jsx("path", { d: "M5 8l5 5 5-5H5z" }) }) : /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-gray-400 group-hover:text-gray-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" }) })
                ]
              }
            )
          },
          r
        ))
      ] }) }),
      /* @__PURE__ */ e.jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: Y.map((r, j) => /* @__PURE__ */ e.jsxs(
        "tr",
        {
          className: `hover:bg-secondary transition-colors duration-150 ${j % 2 === 0 ? "bg-white" : "bg-gray-50"}`,
          children: [
            L && /* @__PURE__ */ e.jsx("td", { className: "px-4 sm:px-6 py-1 whitespace-nowrap text-sm bg-muted text-gray-900 sticky left-0 z-10", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
              I && /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: () => te(r),
                  className: "inline-flex items-center px-2 py-1 text-xs font-medium rounded cursor-pointer text-action",
                  title: "Edit",
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
                  onClick: () => ee(r),
                  className: "inline-flex items-center px-2 py-1 text-xs font-medium rounded cursor-pointer text-action",
                  title: "Edit",
                  children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" }) })
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: () => s(r),
                  className: "text-red-600 hover:text-red-800 cursor-pointer transition-colors p-1 hover:bg-red-100 rounded",
                  title: "Delete",
                  children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }) })
                }
              )
            ] }) }),
            S.map((h) => /* @__PURE__ */ e.jsx(
              "td",
              {
                className: "px-4 sm:px-6 py-1 text-sm text-gray-900",
                children: /* @__PURE__ */ e.jsxs("div", { className: "relative group flex items-center", children: [
                  /* @__PURE__ */ e.jsx("div", { className: "truncate max-w-xs sm:max-w-none", children: E(r[h] ?? "", h) }),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      onClick: () => O(r[h] || "", `${r.id}-${h}`),
                      className: "absolute -right-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity ml-2 p-1 rounded bg-gray-50 hover:bg-gray-100 cursor-pointer",
                      title: "Copy",
                      children: C === `${r.id}-${h}` ? /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx("span", { className: "text-xs text-gray-600", children: "Copied!" }) }) : /* @__PURE__ */ e.jsx("i", { className: "fa-regular fa-copy" })
                    }
                  )
                ] })
              },
              h
            ))
          ]
        },
        D + j
      )) })
    ] }) }) })
  ] });
}
const xe = ({ groups: t, groupNames: a, setActiveTabIndex: u, activeTabIndex: n }) => /* @__PURE__ */ e.jsx(
  "nav",
  {
    className: "flex flex-col overflow-y-auto h-full px-2 py-1 space-y-1",
    children: a.length > 0 ? a.map((i, l) => /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: () => u(l),
        className: `cursor-pointer w-full text-left py-2 px-3 rounded-md text-sm font-semibold transition-all duration-200 ${n === l ? "bg-white shadow text-action" : "text-gray-600 hover:bg-white/50"}`,
        children: /* @__PURE__ */ e.jsx("span", { className: "truncate", children: t[i]?.label || i })
      },
      i
    )) : /* @__PURE__ */ e.jsx("div", { className: "py-3 px-2 text-sm text-gray-500", children: "No group available" })
  }
), Re = ({
  groups: t,
  groupNames: a,
  setActiveTabIndex: u,
  activeTabIndex: n,
  layoutConfig: i,
  showScrollHint: l,
  isCommonInfo: x,
  tabsNavRef: o
}) => {
  const [c, f] = T.useState(!1), d = T.useRef(null);
  return T.useEffect(() => {
    const b = (g) => {
      d.current && !d.current.contains(g.target) && f(!1);
    };
    return document.addEventListener("mousedown", b), () => document.removeEventListener("mousedown", b);
  }, []), /* @__PURE__ */ e.jsxs("div", { className: i?.tabNavClass || "relative z-10", children: [
    l && /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: () => {
          o.current && o.current.scrollBy({ left: -200, behavior: "smooth" });
        },
        className: "cursor-pointer absolute left-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group",
        children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
      }
    ),
    l && /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: () => {
          o.current && o.current.scrollBy({ left: 200, behavior: "smooth" });
        },
        className: "cursor-pointer absolute right-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group",
        children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "absolute right-10 top-1  z-11", ref: d, children: [
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => f(!c),
          className: "cursor-pointer ml-1 px-2 py-1 text-gray-600 hover:text-gray-800 bg-white rounded-md transition",
          children: "⋮"
        }
      ),
      c && /* @__PURE__ */ e.jsx("div", { className: "absolute right-0 mt-2 w-48 max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-30", children: a.map((b, g) => /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            u(g), f(!1);
          },
          className: `w-full text-left px-3 py-2 text-sm truncate hover:bg-gray-100 ${n === g ? "bg-gray-50 font-semibold text-action" : "text-gray-700"}`,
          children: t[b]?.label || b
        },
        b
      )) })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: `relative bg-gray-100 ${x ? "" : "rounded-t-lg"} px-1 pt-1 shadow-inner overflow-hidden`, children: /* @__PURE__ */ e.jsx(
      "nav",
      {
        ref: o,
        className: "relative flex overflow-x-auto scrollbar-hide scroll-smooth",
        style: {
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingLeft: l ? "35px" : "0",
          paddingRight: l ? "70px" : "0"
        },
        children: a.length > 0 ? a.map((b, g) => /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => u(g),
            className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${n === g ? "text-action bg-white " : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
            children: /* @__PURE__ */ e.jsx("span", { className: "relative z-10 flex items-center justify-center gap-1 sm:gap-2", children: /* @__PURE__ */ e.jsx("span", { className: "truncate", children: t[b]?.label || b }) })
          },
          b
        )) : /* @__PURE__ */ e.jsx("div", { className: "py-3 px-6 text-sm text-gray-500", children: "No group available" })
      }
    ) })
  ] });
}, ge = ({
  groupNames: t,
  activeTabIndex: a,
  layoutConfig: u,
  tabObj: n,
  infoData: i,
  setActiveTabIndex: l,
  renderView: x
}) => /* @__PURE__ */ e.jsxs(
  "div",
  {
    className: "bg-white rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex-1 flex flex-col min-h-0",
    children: [
      t.length > 0 ? n?.fields ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ e.jsx("div", { className: u?.fieldGridClass || "grid grid-cols-12 gap-2", children: n.fields.map((o, c) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: `col-span-12 sm:col-span-6 ${X[U(o.width)] || "lg:col-span-2"}`,
          children: /* @__PURE__ */ e.jsx(Z, { field: o, data: i ?? {} })
        },
        o?.name ?? `field-${c}`
      )) }) }) : n ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: x(n, t[a] || "") }) : null : /* @__PURE__ */ e.jsx("div", { className: "flex-1 col-span-full text-center py-8 text-gray-500", children: "No data available" }),
      t.length > 5 && /* @__PURE__ */ e.jsxs("div", { className: "mt-2 pt-2 border-t border-gray-100 flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-500", children: [
          /* @__PURE__ */ e.jsxs("span", { children: [
            "Tab ",
            a + 1,
            " of ",
            t.length
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex gap-1", children: [
            t.slice(0, 5).map((o, c) => /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${c === a ? "bg-action w-6" : "bg-gray-300"}`
              },
              c
            )),
            t.length > 5 && /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-gray-400 ml-1", children: [
              "+",
              t.length - 5
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => l(Math.max(0, a - 1)),
              disabled: a === 0,
              className: "px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
              children: "Previous"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => l(Math.min(t.length - 1, a + 1)),
              disabled: a === t.length - 1,
              className: "px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
              children: "Next"
            }
          )
        ] })
      ] }),
      t.length <= 5 && /* @__PURE__ */ e.jsx("div", { className: "mt-2 pt-3 border-t border-gray-100", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
        /* @__PURE__ */ e.jsxs("span", { children: [
          "Tab ",
          a + 1,
          " of ",
          t.length
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex gap-1", children: t.map((o, c) => /* @__PURE__ */ e.jsx(
          "div",
          {
            className: `w-2 h-2 rounded-full transition-all duration-300 ${c === a ? "bg-action w-6" : "bg-gray-300"}`
          },
          c
        )) })
      ] }) })
    ]
  },
  t[a]
);
function pe({
  groups: t,
  methods: a = {},
  infoData: u,
  viewRenderers: n = {},
  isCommonInfo: i,
  layoutConfig: l = {},
  viewMode: x,
  sqlOpsUrls: o = {},
  refid: c
}) {
  const [f, d] = T.useState(0), [b, g] = T.useState(!1), w = T.useRef(null), C = Object.keys(t);
  T.useEffect(() => {
    const _ = () => {
      if (w.current) {
        const I = w.current;
        g(I.scrollWidth > I.clientWidth);
      }
    };
    return _(), window.addEventListener("resize", _), () => window.removeEventListener("resize", _);
  }, [C.length]), T.useEffect(() => {
    if (w.current && C.length > 0) {
      const _ = w.current.children[f];
      _ && _.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [f, C.length]);
  const P = x === "tableft", p = x === "tabright", W = !P && !p, v = t[C[f] ?? ""] || null;
  console.log("tabObj", v);
  const R = {
    single: (_, I) => /* @__PURE__ */ e.jsx(ce, { tabObj: _, methods: a, tabName: I, sqlOpsUrls: o, refid: c }),
    grid: (_, I) => /* @__PURE__ */ e.jsx(de, { tabObj: _, methods: a, tabName: I, sqlOpsUrls: o, refid: c })
  }, S = v?.config?.uimode, L = n[S] || R[S] || (() => /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No renderer for this type" }));
  return W ? /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex flex-col min-h-0 max-h-screen", children: [
    /* @__PURE__ */ e.jsx(
      Re,
      {
        groupNames: C,
        groups: t,
        setActiveTabIndex: d,
        activeTabIndex: f,
        tabsNavRef: w,
        isCommonInfo: i,
        showScrollHint: b,
        layoutConfig: l
      }
    ),
    /* @__PURE__ */ e.jsx(
      ge,
      {
        groupNames: C,
        activeTabIndex: f,
        layoutConfig: l,
        tabObj: v,
        infoData: u,
        setActiveTabIndex: d,
        renderView: L,
        groups: t
      }
    )
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex min-h-0 max-h-screen", children: [
    P && /* @__PURE__ */ e.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ e.jsx(
      xe,
      {
        groupNames: C,
        groups: t,
        setActiveTabIndex: d,
        activeTabIndex: f
      }
    ) }),
    /* @__PURE__ */ e.jsx("main", { className: "flex-1 flex flex-col min-h-0 overflow-auto", children: /* @__PURE__ */ e.jsx(
      ge,
      {
        groupNames: C,
        activeTabIndex: f,
        layoutConfig: l,
        tabObj: v,
        infoData: u,
        setActiveTabIndex: d,
        renderView: L,
        groups: t
      }
    ) }),
    p && /* @__PURE__ */ e.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ e.jsx(
      xe,
      {
        groupNames: C,
        groups: t,
        setActiveTabIndex: d,
        activeTabIndex: f
      }
    ) })
  ] });
}
function Te({ title: t, children: a, isFirst: u }) {
  const [n, i] = B(u);
  return /* @__PURE__ */ e.jsx("div", { className: "group relative mt-1 flex-1 flex flex-col min-h-0 max-h-screen", children: /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex flex-col min-h-0 relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: () => i(!n),
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: `w-3 h-3 rounded-full transition-all duration-300 ${n ? "bg-action" : "bg-gray-300"}` }),
            /* @__PURE__ */ e.jsx("h3", { className: "text-md capitalize font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: t })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: `relative transition-all duration-300 ${n ? "rotate-180" : ""}`, children: [
            /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-full blur-md transition-opacity duration-300 ${n ? "bg-action opacity-30" : "bg-transparent opacity-0"}` }),
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
        className: `flex-1 flex flex-col min-h-0 transition-all  duration-500 ease-in-out overflow-hidden ${n ? "max-h-full opacity-100" : "max-h-0 opacity-0"}`,
        children: /* @__PURE__ */ e.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white flex-1 flex flex-col min-h-0", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-5 pt-4 flex-1 flex flex-col min-h-0 overflow-y-auto", children: a }) })
      }
    )
  ] }) });
}
function Le({
  groups: t,
  methods: a = {},
  infoData: u,
  viewRenderers: n = {},
  sqlOpsUrls: i = {},
  refid: l
}) {
  const x = {
    single: (o, c) => /* @__PURE__ */ e.jsx(ce, { tabObj: o, methods: a, tabName: c, sqlOpsUrls: i, refid: l }),
    grid: (o, c) => /* @__PURE__ */ e.jsx(de, { tabObj: o, methods: a, tabName: c, sqlOpsUrls: i, refid: l })
  };
  return /* @__PURE__ */ e.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ e.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-2 flex flex-col min-h-0", children: t && Object.entries(t).map(([o, c], f) => /* @__PURE__ */ e.jsx(Te, { title: o, isFirst: f === 0, children: c?.fields ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-2", children: c.fields.map((d, b) => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${X[U(d.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ e.jsx(Z, { field: d, data: u ?? {} })
    },
    d?.name ?? `field-${b}`
  )) }) }) : c ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: n[c.config?.uimode]?.(c) || x[c.config?.uimode]?.(c, o) || /* @__PURE__ */ e.jsx("div", { children: "No renderer for this type" }) }) : null }, o)) }) }) });
}
function _e({ title: t, children: a }) {
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
        children: /* @__PURE__ */ e.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white flex flex-col min-h-0", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-5 pt-4 flex-1 flex flex-col min-h-0 overflow-y-auto", children: a }) })
      }
    )
  ] }) });
}
function Ae({
  groups: t,
  methods: a = {},
  infoData: u,
  viewRenderers: n = {},
  sqlOpsUrls: i = {},
  refid: l
}) {
  const x = {
    single: (o, c) => /* @__PURE__ */ e.jsx(ce, { tabObj: o, methods: a, tabName: c, sqlOpsUrls: i, refid: l }),
    grid: (o, c) => /* @__PURE__ */ e.jsx(de, { tabObj: o, methods: a, tabName: c, sqlOpsUrls: i, refid: l })
  };
  return /* @__PURE__ */ e.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ e.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-2  flex flex-col min-h-0", children: t && Object.entries(t).map(([o, c], f) => /* @__PURE__ */ e.jsx(_e, { title: o, children: c?.fields ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-2", children: c.fields.map((d, b) => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${X[U(d.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ e.jsx(Z, { field: d, data: u ?? {} })
    },
    d?.name ?? `field-${b}`
  )) }) }) : c ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: n[c.config?.uimode]?.(c) || x[c.config?.uimode]?.(c, o) || /* @__PURE__ */ e.jsx("div", { children: "No renderer for this type" }) }) : null }, o)) }) }) });
}
function Me({
  infoViewJson: t,
  data: a = {},
  hiddenFields: u = [],
  groupFieldsFn: n = ke,
  layoutConfig: i = {},
  viewRenderers: l = {},
  methods: x = {}
}) {
  const [o, c] = T.useState({}), f = we(t.infoview ?? {}), d = t.endPoints ?? {}, b = T.useMemo(
    () => n(t.fields || {}),
    [t.fields, n]
  ), g = t?.source?.refid;
  let w = { ...b };
  t.infoview?.groups && (w = { ...w, ...t.infoview.groups }), T.useEffect(() => {
    let p = !1;
    return (async () => {
      const v = t?.source;
      if (!v?.type) {
        p || c({});
        return;
      }
      if (v.type === "method") {
        const R = v.method, S = R ? x[R] : void 0;
        if (S)
          try {
            const L = await Promise.resolve(S());
            p || c(L || {});
          } catch (L) {
            console.error("Method execution failed:", L), p || c({});
          }
        else
          p || c({});
      }
      if (v.type === "api")
        try {
          const R = await M({
            method: v.method || "GET",
            url: v.url,
            data: v.body || {},
            params: v.params || {},
            headers: v.headers || {}
          });
          p || c(R.data || {});
        } catch (R) {
          console.error("API fetch failed:", R), p || c({});
        }
      if (v.type === "sql" && Number.isInteger(Number(v.refid)) && Number(v.refid) > 0) {
        if (!d) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const R = await M({
            method: "GET",
            url: d.baseURL + d.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${d?.accessToken}`
            }
          }), S = await M({
            method: "POST",
            url: d.baseURL + d.dbopsGetRefId,
            data: {
              operation: "fetch",
              source: v,
              fields: Ce(t.fields),
              datahash: R.data.refhash
            },
            headers: {
              Authorization: `Bearer ${d?.accessToken}`
            }
          }), L = await M({
            method: "POST",
            url: d.baseURL + d.dbopsFetch,
            data: {
              refid: S.data.refid,
              datahash: R.data.refhash
            },
            headers: {
              Authorization: `Bearer ${d?.accessToken}`
            }
          });
          console.log("res.data", L.data), p || c(L.data?.data ?? L.data ?? {});
        } catch (R) {
          console.error("API fetch failed:", R);
        }
      }
    })(), () => {
      p = !0;
    };
  }, [
    t?.source?.type || "",
    t?.source?.method || "",
    t?.source?.url || "",
    JSON.stringify(t?.source?.params || {}),
    JSON.stringify(t?.source?.body || {}),
    JSON.stringify(t?.source?.headers || {})
  ]);
  const C = w.common || null;
  C && delete w.common;
  const P = (p) => {
    switch (p) {
      case "accordion":
        return /* @__PURE__ */ e.jsx(
          Le,
          {
            groups: w,
            methods: x,
            infoData: o,
            viewRenderers: l,
            sqlOpsUrls: d,
            refid: g
          }
        );
      case "tab":
      case "tableft":
      case "tabright":
        return /* @__PURE__ */ e.jsx(
          pe,
          {
            groups: w,
            viewRenderers: l,
            layoutConfig: i,
            methods: x,
            infoData: o,
            isCommonInfo: !!C,
            viewMode: p,
            sqlOpsUrls: d,
            refid: g
          }
        );
      case "cards":
        return /* @__PURE__ */ e.jsx(
          Ae,
          {
            groups: w,
            viewRenderers: l,
            methods: x,
            infoData: o,
            sqlOpsUrls: d,
            refid: g
          }
        );
      default:
        return /* @__PURE__ */ e.jsx(
          pe,
          {
            groups: w,
            viewRenderers: l,
            layoutConfig: i,
            methods: x,
            infoData: o,
            isCommonInfo: !!C,
            viewMode: p,
            sqlOpsUrls: d,
            refid: g
          }
        );
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: i.containerClass || "flex flex-col ", children: [
    C && /* @__PURE__ */ e.jsx(
      Se,
      {
        commonInfo: C,
        infoData: o,
        hiddenFields: u
      }
    ),
    P(f)
  ] });
}
export {
  Me as InfoView,
  Me as default
};
