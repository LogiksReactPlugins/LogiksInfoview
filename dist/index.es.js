import E, { useState as W, useRef as pe, useMemo as ce } from "react";
import oe from "axios";
var te = { exports: {} }, V = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var de;
function ye() {
  if (de) return V;
  de = 1;
  var t = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
  function u(o, i, n) {
    var c = null;
    if (n !== void 0 && (c = "" + n), i.key !== void 0 && (c = "" + i.key), "key" in i) {
      n = {};
      for (var l in i)
        l !== "key" && (n[l] = i[l]);
    } else n = i;
    return i = n.ref, {
      $$typeof: t,
      type: o,
      key: c,
      ref: i !== void 0 ? i : null,
      props: n
    };
  }
  return V.Fragment = a, V.jsx = u, V.jsxs = u, V;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ue;
function je() {
  return ue || (ue = 1, process.env.NODE_ENV !== "production" && function() {
    function t(s) {
      if (s == null) return null;
      if (typeof s == "function")
        return s.$$typeof === M ? null : s.displayName || s.name || null;
      if (typeof s == "string") return s;
      switch (s) {
        case O:
          return "Fragment";
        case T:
          return "Profiler";
        case v:
          return "StrictMode";
        case A:
          return "Suspense";
        case se:
          return "SuspenseList";
        case F:
          return "Activity";
      }
      if (typeof s == "object")
        switch (typeof s.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), s.$$typeof) {
          case f:
            return "Portal";
          case L:
            return (s.displayName || "Context") + ".Provider";
          case C:
            return (s._context.displayName || "Context") + ".Consumer";
          case S:
            var m = s.render;
            return s = s.displayName, s || (s = m.displayName || m.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
          case ne:
            return m = s.displayName || null, m !== null ? m : t(s.type) || "Memo";
          case P:
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
        var j = m.error, k = typeof Symbol == "function" && Symbol.toStringTag && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return j.call(
          m,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          k
        ), a(s);
      }
    }
    function o(s) {
      if (s === O) return "<>";
      if (typeof s == "object" && s !== null && s.$$typeof === P)
        return "<...>";
      try {
        var m = t(s);
        return m ? "<" + m + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var s = $.A;
      return s === null ? null : s.getOwner();
    }
    function n() {
      return Error("react-stack-top-frame");
    }
    function c(s) {
      if (q.call(s, "key")) {
        var m = Object.getOwnPropertyDescriptor(s, "key").get;
        if (m && m.isReactWarning) return !1;
      }
      return s.key !== void 0;
    }
    function l(s, m) {
      function j() {
        z || (z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          m
        ));
      }
      j.isReactWarning = !0, Object.defineProperty(s, "key", {
        get: j,
        configurable: !0
      });
    }
    function d() {
      var s = t(this.type);
      return Q[s] || (Q[s] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), s = this.props.ref, s !== void 0 ? s : null;
    }
    function N(s, m, j, k, r, x, y, b) {
      return j = x.ref, s = {
        $$typeof: _,
        type: s,
        key: m,
        props: x,
        _owner: r
      }, (j !== void 0 ? j : null) !== null ? Object.defineProperty(s, "ref", {
        enumerable: !1,
        get: d
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
        value: y
      }), Object.defineProperty(s, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: b
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    }
    function w(s, m, j, k, r, x, y, b) {
      var g = m.children;
      if (g !== void 0)
        if (k)
          if (X(g)) {
            for (k = 0; k < g.length; k++)
              h(g[k]);
            Object.freeze && Object.freeze(g);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(g);
      if (q.call(m, "key")) {
        g = t(s);
        var R = Object.keys(m).filter(function(Y) {
          return Y !== "key";
        });
        k = 0 < R.length ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}", B[g + k] || (R = 0 < R.length ? "{" + R.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          k,
          g,
          R,
          g
        ), B[g + k] = !0);
      }
      if (g = null, j !== void 0 && (u(j), g = "" + j), c(m) && (u(m.key), g = "" + m.key), "key" in m) {
        j = {};
        for (var D in m)
          D !== "key" && (j[D] = m[D]);
      } else j = m;
      return g && l(
        j,
        typeof s == "function" ? s.displayName || s.name || "Unknown" : s
      ), N(
        s,
        g,
        x,
        r,
        i(),
        j,
        y,
        b
      );
    }
    function h(s) {
      typeof s == "object" && s !== null && s.$$typeof === _ && s._store && (s._store.validated = 1);
    }
    var p = E, _ = Symbol.for("react.transitional.element"), f = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), C = Symbol.for("react.consumer"), L = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), se = Symbol.for("react.suspense_list"), ne = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), F = Symbol.for("react.activity"), M = Symbol.for("react.client.reference"), $ = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = Object.prototype.hasOwnProperty, X = Array.isArray, I = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(s) {
        return s();
      }
    };
    var z, Q = {}, Z = p.react_stack_bottom_frame.bind(
      p,
      n
    )(), K = I(o(n)), B = {};
    U.Fragment = O, U.jsx = function(s, m, j, k, r) {
      var x = 1e4 > $.recentlyCreatedOwnerStacks++;
      return w(
        s,
        m,
        j,
        !1,
        k,
        r,
        x ? Error("react-stack-top-frame") : Z,
        x ? I(o(s)) : K
      );
    }, U.jsxs = function(s, m, j, k, r) {
      var x = 1e4 > $.recentlyCreatedOwnerStacks++;
      return w(
        s,
        m,
        j,
        !0,
        k,
        r,
        x ? Error("react-stack-top-frame") : Z,
        x ? I(o(s)) : K
      );
    };
  }()), U;
}
var me;
function be() {
  return me || (me = 1, process.env.NODE_ENV === "production" ? te.exports = ye() : te.exports = je()), te.exports;
}
var e = be();
function ve(t) {
  return t.template ? t.template : "tab";
}
function Ne(t) {
  const a = {};
  return Object.entries(t).forEach(([u, o]) => {
    const i = o.group || "General";
    a[i] || (a[i] = { label: i, type: "fields", fields: [] }), a[i]?.fields?.push({ name: u, ...o });
  }), a;
}
const G = {
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
function H(t) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(t) ? t : 6;
}
async function we(t) {
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
const ge = "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg";
function J({ field: t, data: a }) {
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
        onError: (n) => {
          const c = n.currentTarget;
          c.onerror = null, c.src = ge;
        }
      }
    ) : /* @__PURE__ */ e.jsx("p", { className: `
    text-sm text-gray-600 break-words
  `, children: typeof a?.[u] == "object" ? JSON.stringify(a?.[u]) : String(a?.[u] ?? "") }) })
  ] });
}
function ke({ commonInfo: t, infoData: a, hiddenFields: u = [] }) {
  return /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-100 p-4 min-h-3/10 overflow-auto", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    /* @__PURE__ */ e.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ e.jsx("div", { className: "relative w-42 h-42", children: /* @__PURE__ */ e.jsx(
      "img",
      {
        src: String(a.avatar_photo),
        alt: "Profile",
        className: " w-full h-full object-cover border-4 rounded-[12px] border-white shadow-lg",
        onError: (o) => {
          const i = o.currentTarget;
          i.onerror = null, i.src = ge;
        }
      }
    ) }) }),
    /* @__PURE__ */ e.jsx("div", { className: "lg:col-span-10 min-h-0 max-h-40  overflow-y-auto custom-scrollbar", children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-2", children: t.fields?.map((o, i) => {
      const n = a?.[o.name];
      return u.includes(o.name) || !n && n !== !1 && n !== 0 ? null : /* @__PURE__ */ e.jsx("div", { className: `hover:bg-gray-100 transition-colors duration-200 col-span-12 sm:col-span-6 ${G[H(o.width)] || "lg:col-span-4"}`, children: /* @__PURE__ */ e.jsx(
        J,
        {
          field: o,
          data: a ?? {}
        },
        o?.name || i
      ) }, o.name);
    }) }) })
  ] }) });
}
function le({ tabObj: t, methods: a, tabName: u }) {
  const [o, i] = E.useState(null);
  return E.useEffect(() => {
    let n = !1;
    return (async () => {
      const l = t?.config;
      if (!l?.type) {
        n || i(null);
        return;
      }
      if (l.type === "method") {
        const d = l.method, N = d ? a[d] : void 0;
        if (N)
          try {
            const w = await Promise.resolve(N());
            n || i(w || null);
          } catch (w) {
            console.error("Method execution failed:", w), n || i(null);
          }
        else
          n || i(null);
      }
      if (l.type === "api")
        try {
          const d = await oe({
            method: l.method || "GET",
            // GET, POST, etc.
            url: l.url,
            data: l.body || {},
            // request body
            params: l.params || {},
            // query params
            headers: l.headers || {}
            // optional headers
          });
          n || i(d.data || null);
        } catch (d) {
          console.error("API fetch failed:", d), n || i(null);
        }
    })(), () => {
      n = !0;
    };
  }, [
    t?.config?.type || "",
    t?.config?.method || "",
    t?.config?.url || "",
    JSON.stringify(t?.config?.params || {}),
    JSON.stringify(t?.config?.body || {}),
    JSON.stringify(t?.config?.headers || {})
  ]), console.log("data", o), /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-2", children: o ? Object.keys(o).map((n, c) => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${G[H(t.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ e.jsx(
        J,
        {
          field: { name: n, label: n },
          data: o ?? {}
        },
        n
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
function ie({ tabObj: t, methods: a, tabName: u }) {
  const [o, i] = W(1), [n, c] = W(10), [l, d] = W(""), [N, w] = E.useState([]), h = pe(null), [p, _] = W(null), [f, O] = W({ key: "", direction: null });
  E.useEffect(() => {
    let r = !1;
    return (async () => {
      const y = t?.config;
      if (!y?.type) {
        r || w([]);
        return;
      }
      if (y.type === "method") {
        const b = y.method, g = b ? a[b] : void 0;
        if (g)
          try {
            const R = await Promise.resolve(g());
            r || w(R || []);
          } catch {
            r || w([]);
          }
        else
          r || w([]);
      }
      if (y.type === "api")
        try {
          const b = await oe({
            method: y.method || "GET",
            // GET, POST, etc.
            url: y.url,
            data: y.body || {},
            // request body
            params: y.params || {},
            // query params
            headers: y.headers || {}
            // optional headers
          });
          r || w(b.data || {});
        } catch (b) {
          console.error("API fetch failed:", b), r || w([]);
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
  const v = Array.isArray(N) ? N : [N], C = ((r) => {
    const x = /* @__PURE__ */ new Set();
    return r.forEach((y) => {
      y && typeof y == "object" && Object.keys(y).forEach((b) => x.add(b));
    }), Array.from(x);
  })(v), L = t?.vmode === "edit", S = t?.config?.form && Object.keys(t.config.form).length > 0, A = t?.config?.info && Object.keys(t.config.info).length > 0, se = (r) => {
    let x = "asc";
    f.key === r && f.direction === "asc" ? x = "desc" : f.key === r && f.direction === "desc" && (x = null), O({ key: r, direction: x });
  }, ne = (r) => !f.key || !f.direction ? r : [...r].sort((x, y) => {
    const b = x[f.key], g = y[f.key];
    if (b == null) return f.direction === "asc" ? 1 : -1;
    if (g == null) return f.direction === "asc" ? -1 : 1;
    if (typeof b == "boolean" && typeof g == "boolean")
      return f.direction === "asc" ? b === g ? 0 : b ? -1 : 1 : b === g ? 0 : b ? 1 : -1;
    const R = new Date(b), D = new Date(g);
    if (!isNaN(R.getTime()) && !isNaN(D.getTime()))
      return f.direction === "asc" ? R.getTime() - D.getTime() : D.getTime() - R.getTime();
    const Y = parseFloat(b), ae = parseFloat(g);
    if (!isNaN(Y) && !isNaN(ae))
      return f.direction === "asc" ? Y - ae : ae - Y;
    const ee = String(b).toLowerCase(), re = String(g).toLowerCase();
    return f.direction === "asc" ? ee < re ? -1 : ee > re ? 1 : 0 : ee > re ? -1 : ee < re ? 1 : 0;
  }), P = ce(() => {
    let r = v;
    if (l.trim()) {
      const x = l.toLowerCase();
      r = v.filter((y) => C.some((b) => {
        const g = y[b];
        return g == null ? !1 : String(g).toLowerCase().includes(x);
      }));
    }
    return ne(r);
  }, [v, l, C, f]), F = Math.ceil(P.length / n), M = (o - 1) * n, $ = M + n, q = P.slice(M, $), X = (r) => {
    i(Math.max(1, Math.min(r, F)));
  }, I = (r) => {
    c(r), i(1);
  }, z = () => {
    d("");
  }, Q = (r, x) => {
    a?.editInfoRecord?.(r, u);
  }, Z = (r) => {
    a?.viewInfoRecord?.(r, t?.config?.info);
  }, K = (r, x) => {
    a?.deleteInfoRecord?.(r, u);
  }, B = () => {
    a?.addInfoRecord?.(t?.config?.form, u);
  }, s = (r) => r.split("_").map((x) => x.charAt(0).toUpperCase() + x.slice(1)).join(" "), m = (r, x) => {
    if (r == null || r === "")
      return /* @__PURE__ */ e.jsx("span", { className: "text-gray-400 italic", children: "-" });
    if (typeof r == "boolean")
      return /* @__PURE__ */ e.jsx("span", { className: `inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${r ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`, children: r ? "Yes" : "No" });
    switch (x?.toLowerCase()) {
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
          const y = typeof r == "string" ? JSON.parse(r) : r;
          return /* @__PURE__ */ e.jsx("pre", { className: "whitespace-pre-wrap text-xs bg-gray-100 p-2 rounded", children: JSON.stringify(y, null, 2) });
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
  }, j = (r, x) => {
    we(r).then(() => {
      _(x), h.current && clearTimeout(h.current), h.current = setTimeout(() => {
        _("");
      }, 2e3);
    }).catch(() => {
      _("");
    });
  }, k = ce(() => ({
    totalRows: P.length,
    columns: C.length,
    currentPageStart: M + 1,
    currentPageEnd: Math.min($, P.length),
    isFiltered: l.trim().length > 0
  }), [P, v, C, M, $]);
  return v.length === 0 || C.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center text-gray-500", children: [
    /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ e.jsxs("svg", { className: "w-8 h-8 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
      /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" }),
      /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m8 7 4-4 4 4" })
    ] }) }),
    /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No Data Available" }),
    /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500 text-center max-w-sm", children: "There are no records to display in the grid view at the moment." }),
    S && /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: B,
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
            value: l,
            onChange: (r) => d(r.target.value),
            className: "block w-full px-10 py-2 border border-gray-300 rounded-lg text-sm placeholder-gray-500  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
          }
        ),
        l && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: z,
            className: "absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600",
            title: "Clear search",
            children: /* @__PURE__ */ e.jsx("svg", { className: "h-4 w-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
          }
        )
      ] }) }),
      S && /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: B,
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
          k.currentPageStart,
          "-",
          k.currentPageEnd
        ] }),
        " of ",
        /* @__PURE__ */ e.jsx("strong", { className: "text-gray-900", children: k.totalRows }),
        " records"
      ] }) }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex justify-end gap-4", children: [
        /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-gray-600", children: "Show:" }),
          /* @__PURE__ */ e.jsxs(
            "select",
            {
              value: n,
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
              onClick: () => X(o - 1),
              disabled: o === 1,
              className: "flex items-center gap-2 text-sm font-medium text-action cursor-pointer bg-white rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
              children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
            }
          ),
          /* @__PURE__ */ e.jsx("span", { className: "flex items-center gap-2 text-sm", children: /* @__PURE__ */ e.jsxs("span", { className: "text-gray-600", children: [
            "Page ",
            /* @__PURE__ */ e.jsx("strong", { className: "text-gray-900", children: o }),
            " of ",
            /* @__PURE__ */ e.jsx("strong", { className: "text-gray-900", children: F })
          ] }) }),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => X(o + 1),
              disabled: o === F,
              className: "flex items-center gap-2 text-sm font-medium text-action cursor-pointer bg-white rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
              children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
            }
          )
        ] })
      ] })
    ] }),
    P.length === 0 && l.trim() && /* @__PURE__ */ e.jsxs("div", { className: "h-full flex flex-1 flex-col items-center justify-center py-22 text-gray-500", children: [
      /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ e.jsx("svg", { className: "w-8 h-8 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) }) }),
      /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No Results Found" }),
      /* @__PURE__ */ e.jsxs("p", { className: "text-sm text-gray-500 text-center max-w-sm mb-4", children: [
        "No records match your search for ",
        /* @__PURE__ */ e.jsxs("strong", { children: [
          '"',
          l,
          '"'
        ] })
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: z,
          className: "inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 cursor-pointer",
          children: "Clear Search"
        }
      )
    ] }),
    P.length > 0 && /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx("div", { className: " overflow-auto min-w-full divide-y divide-gray-200 border border-gray-200 bordr-t", children: /* @__PURE__ */ e.jsxs("table", { className: "min-w-full h-full", children: [
      /* @__PURE__ */ e.jsx("thead", { className: " text-action", children: /* @__PURE__ */ e.jsxs("tr", { children: [
        L && /* @__PURE__ */ e.jsx(
          "th",
          {
            scope: "col",
            className: "bg-muted px-4 sm:px-6 py-2 text-left text-xs font-bold uppercase tracking-wider w-32 sticky top-0 left-0 z-20",
            children: "Actions"
          }
        ),
        C.map((r, x) => /* @__PURE__ */ e.jsx(
          "th",
          {
            scope: "col",
            className: "bg-muted sticky top-0 z-10 px-4 sm:px-6 py-2 text-left text-xs font-bold uppercase tracking-wider",
            children: /* @__PURE__ */ e.jsxs(
              "div",
              {
                className: "flex items-center gap-1 cursor-pointer select-none",
                onClick: () => se(r),
                children: [
                  /* @__PURE__ */ e.jsx("span", { className: "truncate", title: s(r), children: s(r) }),
                  f?.key === r ? f.direction === "asc" ? /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-blue-600", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ e.jsx("path", { d: "M5 12l5-5 5 5H5z" }) }) : /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-blue-600", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ e.jsx("path", { d: "M5 8l5 5 5-5H5z" }) }) : /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-gray-400 group-hover:text-gray-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" }) })
                ]
              }
            )
          },
          r
        ))
      ] }) }),
      /* @__PURE__ */ e.jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: q.map((r, x) => /* @__PURE__ */ e.jsxs(
        "tr",
        {
          className: `hover:bg-secondary transition-colors duration-150 ${x % 2 === 0 ? "bg-white" : "bg-gray-50"}`,
          children: [
            L && /* @__PURE__ */ e.jsx("td", { className: "px-4 sm:px-6 py-1 whitespace-nowrap text-sm bg-muted text-gray-900 sticky left-0 z-10", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
              A && /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: () => Z(r),
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
                  onClick: () => Q(r),
                  className: "inline-flex items-center px-2 py-1 text-xs font-medium rounded cursor-pointer text-action",
                  title: "Edit",
                  children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" }) })
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: () => K(r),
                  className: "text-red-600 hover:text-red-800 cursor-pointer transition-colors p-1 hover:bg-red-100 rounded",
                  title: "Delete",
                  children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }) })
                }
              )
            ] }) }),
            C.map((y) => /* @__PURE__ */ e.jsx(
              "td",
              {
                className: "px-4 sm:px-6 py-1 text-sm text-gray-900",
                children: /* @__PURE__ */ e.jsxs("div", { className: "relative group flex items-center", children: [
                  /* @__PURE__ */ e.jsx("div", { className: "truncate max-w-xs sm:max-w-none", children: m(r[y] ?? "", y) }),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      onClick: () => j(r[y] || "", `${r.id}-${y}`),
                      className: "absolute -right-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity ml-2 p-1 rounded bg-gray-50 hover:bg-gray-100 cursor-pointer",
                      title: "Copy",
                      children: p === `${r.id}-${y}` ? /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx("span", { className: "text-xs text-gray-600", children: "Copied!" }) }) : /* @__PURE__ */ e.jsx("i", { className: "fa-regular fa-copy" })
                    }
                  )
                ] })
              },
              y
            ))
          ]
        },
        M + x
      )) })
    ] }) }) })
  ] });
}
const xe = ({ groups: t, groupNames: a, setActiveTabIndex: u, activeTabIndex: o }) => /* @__PURE__ */ e.jsx(
  "nav",
  {
    className: "flex flex-col overflow-y-auto h-full px-2 py-1 space-y-1",
    children: a.length > 0 ? a.map((i, n) => /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: () => u(n),
        className: `cursor-pointer w-full text-left py-2 px-3 rounded-md text-sm font-semibold transition-all duration-200 ${o === n ? "bg-white shadow text-action" : "text-gray-600 hover:bg-white/50"}`,
        children: /* @__PURE__ */ e.jsx("span", { className: "truncate", children: t[i]?.label || i })
      },
      i
    )) : /* @__PURE__ */ e.jsx("div", { className: "py-3 px-2 text-sm text-gray-500", children: "No group available" })
  }
), Ce = ({
  groups: t,
  groupNames: a,
  setActiveTabIndex: u,
  activeTabIndex: o,
  layoutConfig: i,
  showScrollHint: n,
  isCommonInfo: c,
  tabsNavRef: l
}) => {
  const [d, N] = E.useState(!1), w = E.useRef(null);
  return E.useEffect(() => {
    const h = (p) => {
      w.current && !w.current.contains(p.target) && N(!1);
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, []), /* @__PURE__ */ e.jsxs("div", { className: i?.tabNavClass || "relative z-10", children: [
    n && /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: () => {
          l.current && l.current.scrollBy({ left: -200, behavior: "smooth" });
        },
        className: "cursor-pointer absolute left-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group",
        children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
      }
    ),
    n && /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: () => {
          l.current && l.current.scrollBy({ left: 200, behavior: "smooth" });
        },
        className: "cursor-pointer absolute right-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group",
        children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "absolute right-10 top-1  z-11", ref: w, children: [
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => N(!d),
          className: "cursor-pointer ml-1 px-2 py-1 text-gray-600 hover:text-gray-800 bg-white rounded-md transition",
          children: "⋮"
        }
      ),
      d && /* @__PURE__ */ e.jsx("div", { className: "absolute right-0 mt-2 w-48 max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-30", children: a.map((h, p) => /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            u(p), N(!1);
          },
          className: `w-full text-left px-3 py-2 text-sm truncate hover:bg-gray-100 ${o === p ? "bg-gray-50 font-semibold text-action" : "text-gray-700"}`,
          children: t[h]?.label || h
        },
        h
      )) })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: `relative bg-gray-100 ${c ? "" : "rounded-t-lg"} px-1 pt-1 shadow-inner overflow-hidden`, children: /* @__PURE__ */ e.jsx(
      "nav",
      {
        ref: l,
        className: "relative flex overflow-x-auto scrollbar-hide scroll-smooth",
        style: {
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingLeft: n ? "35px" : "0",
          paddingRight: n ? "70px" : "0"
        },
        children: a.length > 0 ? a.map((h, p) => /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => u(p),
            className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${o === p ? "text-action bg-white " : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
            children: /* @__PURE__ */ e.jsx("span", { className: "relative z-10 flex items-center justify-center gap-1 sm:gap-2", children: /* @__PURE__ */ e.jsx("span", { className: "truncate", children: t[h]?.label || h }) })
          },
          h
        )) : /* @__PURE__ */ e.jsx("div", { className: "py-3 px-6 text-sm text-gray-500", children: "No group available" })
      }
    ) })
  ] });
}, fe = ({
  groupNames: t,
  activeTabIndex: a,
  layoutConfig: u,
  tabObj: o,
  infoData: i,
  setActiveTabIndex: n,
  renderView: c
}) => /* @__PURE__ */ e.jsxs(
  "div",
  {
    className: "bg-white rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex-1 flex flex-col min-h-0",
    children: [
      t.length > 0 ? o?.fields ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ e.jsx("div", { className: u?.fieldGridClass || "grid grid-cols-12 gap-2", children: o.fields.map((l, d) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: `col-span-12 sm:col-span-6 ${G[H(l.width)] || "lg:col-span-2"}`,
          children: /* @__PURE__ */ e.jsx(J, { field: l, data: i ?? {} })
        },
        l?.name ?? `field-${d}`
      )) }) }) : o ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: c(o, t[a] || "") }) : null : /* @__PURE__ */ e.jsx("div", { className: "flex-1 col-span-full text-center py-8 text-gray-500", children: "No data available" }),
      t.length > 5 && /* @__PURE__ */ e.jsxs("div", { className: "mt-2 pt-2 border-t border-gray-100 flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-500", children: [
          /* @__PURE__ */ e.jsxs("span", { children: [
            "Tab ",
            a + 1,
            " of ",
            t.length
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex gap-1", children: [
            t.slice(0, 5).map((l, d) => /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${d === a ? "bg-action w-6" : "bg-gray-300"}`
              },
              d
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
              onClick: () => n(Math.max(0, a - 1)),
              disabled: a === 0,
              className: "px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
              children: "Previous"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => n(Math.min(t.length - 1, a + 1)),
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
        /* @__PURE__ */ e.jsx("div", { className: "flex gap-1", children: t.map((l, d) => /* @__PURE__ */ e.jsx(
          "div",
          {
            className: `w-2 h-2 rounded-full transition-all duration-300 ${d === a ? "bg-action w-6" : "bg-gray-300"}`
          },
          d
        )) })
      ] }) })
    ]
  },
  t[a]
);
function he({
  groups: t,
  methods: a = {},
  infoData: u,
  viewRenderers: o = {},
  isCommonInfo: i,
  layoutConfig: n = {},
  viewMode: c
}) {
  const [l, d] = E.useState(0), [N, w] = E.useState(!1), h = E.useRef(null), p = Object.keys(t);
  E.useEffect(() => {
    const S = () => {
      if (h.current) {
        const A = h.current;
        w(A.scrollWidth > A.clientWidth);
      }
    };
    return S(), window.addEventListener("resize", S), () => window.removeEventListener("resize", S);
  }, [p.length]), E.useEffect(() => {
    if (h.current && p.length > 0) {
      const S = h.current.children[l];
      S && S.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [l, p.length]);
  const _ = c === "tableft", f = c === "tabright", O = !_ && !f, v = t[p[l] ?? ""] || null;
  console.log("tabObj", v);
  const T = {
    single: (S, A) => /* @__PURE__ */ e.jsx(le, { tabObj: S, methods: a, tabName: A }),
    grid: (S, A) => /* @__PURE__ */ e.jsx(ie, { tabObj: S, methods: a, tabName: A })
  }, C = v?.config?.uimode;
  console.log("uiModeKey", C);
  const L = o[C] || T[C] || (() => /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No renderer for this type" }));
  return O ? /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex flex-col min-h-0 max-h-screen", children: [
    /* @__PURE__ */ e.jsx(
      Ce,
      {
        groupNames: p,
        groups: t,
        setActiveTabIndex: d,
        activeTabIndex: l,
        tabsNavRef: h,
        isCommonInfo: i,
        showScrollHint: N,
        layoutConfig: n
      }
    ),
    /* @__PURE__ */ e.jsx(
      fe,
      {
        groupNames: p,
        activeTabIndex: l,
        layoutConfig: n,
        tabObj: v,
        infoData: u,
        setActiveTabIndex: d,
        renderView: L,
        groups: t
      }
    )
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex min-h-0 max-h-screen", children: [
    _ && /* @__PURE__ */ e.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ e.jsx(
      xe,
      {
        groupNames: p,
        groups: t,
        setActiveTabIndex: d,
        activeTabIndex: l
      }
    ) }),
    /* @__PURE__ */ e.jsx("main", { className: "flex-1 flex flex-col min-h-0 overflow-auto", children: /* @__PURE__ */ e.jsx(
      fe,
      {
        groupNames: p,
        activeTabIndex: l,
        layoutConfig: n,
        tabObj: v,
        infoData: u,
        setActiveTabIndex: d,
        renderView: L,
        groups: t
      }
    ) }),
    f && /* @__PURE__ */ e.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ e.jsx(
      xe,
      {
        groupNames: p,
        groups: t,
        setActiveTabIndex: d,
        activeTabIndex: l
      }
    ) })
  ] });
}
function Ee({ title: t, children: a, isFirst: u }) {
  const [o, i] = W(u);
  return /* @__PURE__ */ e.jsx("div", { className: "group relative mt-1 flex-1 flex flex-col min-h-0 max-h-screen", children: /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex flex-col min-h-0 relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: () => i(!o),
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: `w-3 h-3 rounded-full transition-all duration-300 ${o ? "bg-action" : "bg-gray-300"}` }),
            /* @__PURE__ */ e.jsx("h3", { className: "text-md capitalize font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: t })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: `relative transition-all duration-300 ${o ? "rotate-180" : ""}`, children: [
            /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-full blur-md transition-opacity duration-300 ${o ? "bg-action opacity-30" : "bg-transparent opacity-0"}` }),
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
        className: `flex-1 flex flex-col min-h-0 transition-all  duration-500 ease-in-out overflow-hidden ${o ? "max-h-full opacity-100" : "max-h-0 opacity-0"}`,
        children: /* @__PURE__ */ e.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white flex-1 flex flex-col min-h-0", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-5 pt-4 flex-1 flex flex-col min-h-0 overflow-y-auto", children: a }) })
      }
    )
  ] }) });
}
function Se({
  groups: t,
  methods: a = {},
  infoData: u,
  viewRenderers: o = {}
}) {
  const i = {
    single: (n, c) => /* @__PURE__ */ e.jsx(le, { tabObj: n, methods: a, tabName: c }),
    grid: (n, c) => /* @__PURE__ */ e.jsx(ie, { tabObj: n, methods: a, tabName: c })
  };
  return /* @__PURE__ */ e.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ e.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-2 flex flex-col min-h-0", children: t && Object.entries(t).map(([n, c], l) => (console.log("obj", c), /* @__PURE__ */ e.jsx(Ee, { title: n, isFirst: l === 0, children: c?.fields ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-2", children: c.fields.map((d, N) => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${G[H(d.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ e.jsx(J, { field: d, data: u ?? {} })
    },
    d?.name ?? `field-${N}`
  )) }) }) : c ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: o[c.config?.uimode]?.(c) || i[c.config?.uimode]?.(c, n) || /* @__PURE__ */ e.jsx("div", { children: "No renderer for this type" }) }) : null }, n))) }) }) });
}
function Re({ title: t, children: a }) {
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
function _e({
  groups: t,
  methods: a = {},
  infoData: u,
  viewRenderers: o = {}
}) {
  const i = {
    single: (n, c) => /* @__PURE__ */ e.jsx(le, { tabObj: n, methods: a, tabName: c }),
    grid: (n, c) => /* @__PURE__ */ e.jsx(ie, { tabObj: n, methods: a, tabName: c })
  };
  return /* @__PURE__ */ e.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ e.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-2  flex flex-col min-h-0", children: t && Object.entries(t).map(([n, c], l) => /* @__PURE__ */ e.jsx(Re, { title: n, children: c?.fields ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-2", children: c.fields.map((d, N) => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${G[H(d.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ e.jsx(J, { field: d, data: u ?? {} })
    },
    d?.name ?? `field-${N}`
  )) }) }) : c ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: o[c.config?.uimode]?.(c) || i[c.config?.uimode]?.(c, n) || /* @__PURE__ */ e.jsx("div", { children: "No renderer for this type" }) }) : null }, n)) }) }) });
}
function Ae({
  infoViewJson: t,
  data: a = {},
  hiddenFields: u = [],
  groupFieldsFn: o = Ne,
  layoutConfig: i = {},
  viewRenderers: n = {},
  methods: c = {}
}) {
  const [l, d] = E.useState({}), N = ve(t.infoview ?? {});
  let h = { ...E.useMemo(
    () => o(t.fields || {}),
    [t.fields, o]
  ) };
  t.infoview?.groups && (h = { ...h, ...t.infoview.groups }), E.useEffect(() => {
    let f = !1;
    return (async () => {
      const v = t?.source;
      if (!v?.type) {
        f || d({});
        return;
      }
      if (v.type === "method") {
        const T = v.method, C = T ? c[T] : void 0;
        if (C)
          try {
            const L = await Promise.resolve(C());
            f || d(L || {});
          } catch (L) {
            console.error("Method execution failed:", L), f || d({});
          }
        else
          f || d({});
      }
      if (v.type === "api")
        try {
          const T = await oe({
            method: v.method || "GET",
            url: v.url,
            data: v.body || {},
            params: v.params || {},
            headers: v.headers || {}
          });
          f || d(T.data || {});
        } catch (T) {
          console.error("API fetch failed:", T), f || d({});
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
  const p = h.common || null;
  p && delete h.common;
  const _ = (f) => {
    switch (f) {
      case "accordion":
        return /* @__PURE__ */ e.jsx(
          Se,
          {
            groups: h,
            methods: c,
            infoData: l,
            viewRenderers: n
          }
        );
      case "tab":
      case "tableft":
      case "tabright":
        return /* @__PURE__ */ e.jsx(
          he,
          {
            groups: h,
            viewRenderers: n,
            layoutConfig: i,
            methods: c,
            infoData: l,
            isCommonInfo: !!p,
            viewMode: f
          }
        );
      case "cards":
        return /* @__PURE__ */ e.jsx(
          _e,
          {
            groups: h,
            viewRenderers: n,
            methods: c,
            infoData: l
          }
        );
      default:
        return /* @__PURE__ */ e.jsx(
          he,
          {
            groups: h,
            viewRenderers: n,
            layoutConfig: i,
            methods: c,
            infoData: l,
            isCommonInfo: !!p,
            viewMode: f
          }
        );
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: i.containerClass || "flex flex-col ", children: [
    p && /* @__PURE__ */ e.jsx(
      ke,
      {
        commonInfo: p,
        infoData: l,
        hiddenFields: u
      }
    ),
    _(N)
  ] });
}
export {
  Ae as InfoView,
  Ae as default
};
