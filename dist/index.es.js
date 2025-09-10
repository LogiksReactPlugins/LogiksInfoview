import S, { useState as I, useRef as pe, useMemo as ce } from "react";
import oe from "axios";
var re = { exports: {} }, V = {};
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
  var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function c(i, a, l) {
    var o = null;
    if (l !== void 0 && (o = "" + l), a.key !== void 0 && (o = "" + a.key), "key" in a) {
      l = {};
      for (var u in a)
        u !== "key" && (l[u] = a[u]);
    } else l = a;
    return a = l.ref, {
      $$typeof: t,
      type: i,
      key: o,
      ref: a !== void 0 ? a : null,
      props: l
    };
  }
  return V.Fragment = n, V.jsx = c, V.jsxs = c, V;
}
var H = {};
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
function be() {
  return ue || (ue = 1, process.env.NODE_ENV !== "production" && function() {
    function t(s) {
      if (s == null) return null;
      if (typeof s == "function")
        return s.$$typeof === ne ? null : s.displayName || s.name || null;
      if (typeof s == "string") return s;
      switch (s) {
        case E:
          return "Fragment";
        case w:
          return "Profiler";
        case k:
          return "StrictMode";
        case $:
          return "Suspense";
        case P:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof s == "object")
        switch (typeof s.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), s.$$typeof) {
          case N:
            return "Portal";
          case T:
            return (s.displayName || "Context") + ".Provider";
          case L:
            return (s._context.displayName || "Context") + ".Consumer";
          case C:
            var m = s.render;
            return s = s.displayName, s || (s = m.displayName || m.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
          case z:
            return m = s.displayName || null, m !== null ? m : t(s.type) || "Memo";
          case _:
            m = s._payload, s = s._init;
            try {
              return t(s(m));
            } catch {
            }
        }
      return null;
    }
    function n(s) {
      return "" + s;
    }
    function c(s) {
      try {
        n(s);
        var m = !1;
      } catch {
        m = !0;
      }
      if (m) {
        m = console;
        var r = m.error, d = typeof Symbol == "function" && Symbol.toStringTag && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return r.call(
          m,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          d
        ), n(s);
      }
    }
    function i(s) {
      if (s === E) return "<>";
      if (typeof s == "object" && s !== null && s.$$typeof === _)
        return "<...>";
      try {
        var m = t(s);
        return m ? "<" + m + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var s = F.A;
      return s === null ? null : s.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function o(s) {
      if (q.call(s, "key")) {
        var m = Object.getOwnPropertyDescriptor(s, "key").get;
        if (m && m.isReactWarning) return !1;
      }
      return s.key !== void 0;
    }
    function u(s, m) {
      function r() {
        Q || (Q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          m
        ));
      }
      r.isReactWarning = !0, Object.defineProperty(s, "key", {
        get: r,
        configurable: !0
      });
    }
    function x() {
      var s = t(this.type);
      return Z[s] || (Z[s] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), s = this.props.ref, s !== void 0 ? s : null;
    }
    function y(s, m, r, d, h, f, v, R) {
      return r = f.ref, s = {
        $$typeof: g,
        type: s,
        key: m,
        props: f,
        _owner: h
      }, (r !== void 0 ? r : null) !== null ? Object.defineProperty(s, "ref", {
        enumerable: !1,
        get: x
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
        value: v
      }), Object.defineProperty(s, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: R
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    }
    function M(s, m, r, d, h, f, v, R) {
      var b = m.children;
      if (b !== void 0)
        if (d)
          if (X(b)) {
            for (d = 0; d < b.length; d++)
              j(b[d]);
            Object.freeze && Object.freeze(b);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else j(b);
      if (q.call(m, "key")) {
        b = t(s);
        var A = Object.keys(m).filter(function(W) {
          return W !== "key";
        });
        d = 0 < A.length ? "{key: someKey, " + A.join(": ..., ") + ": ...}" : "{key: someKey}", K[b + d] || (A = 0 < A.length ? "{" + A.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          d,
          b,
          A,
          b
        ), K[b + d] = !0);
      }
      if (b = null, r !== void 0 && (c(r), b = "" + r), o(m) && (c(m.key), b = "" + m.key), "key" in m) {
        r = {};
        for (var D in m)
          D !== "key" && (r[D] = m[D]);
      } else r = m;
      return b && u(
        r,
        typeof s == "function" ? s.displayName || s.name || "Unknown" : s
      ), y(
        s,
        b,
        f,
        h,
        a(),
        r,
        v,
        R
      );
    }
    function j(s) {
      typeof s == "object" && s !== null && s.$$typeof === g && s._store && (s._store.validated = 1);
    }
    var p = S, g = Symbol.for("react.transitional.element"), N = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), T = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), B = Symbol.for("react.activity"), ne = Symbol.for("react.client.reference"), F = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = Object.prototype.hasOwnProperty, X = Array.isArray, Y = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(s) {
        return s();
      }
    };
    var Q, Z = {}, G = p.react_stack_bottom_frame.bind(
      p,
      l
    )(), U = Y(i(l)), K = {};
    H.Fragment = E, H.jsx = function(s, m, r, d, h) {
      var f = 1e4 > F.recentlyCreatedOwnerStacks++;
      return M(
        s,
        m,
        r,
        !1,
        d,
        h,
        f ? Error("react-stack-top-frame") : G,
        f ? Y(i(s)) : U
      );
    }, H.jsxs = function(s, m, r, d, h) {
      var f = 1e4 > F.recentlyCreatedOwnerStacks++;
      return M(
        s,
        m,
        r,
        !0,
        d,
        h,
        f ? Error("react-stack-top-frame") : G,
        f ? Y(i(s)) : U
      );
    };
  }()), H;
}
var me;
function je() {
  return me || (me = 1, process.env.NODE_ENV === "production" ? re.exports = ye() : re.exports = be()), re.exports;
}
var e = je();
function ve(t) {
  return t.template ? t.template : "tab";
}
function Ne(t) {
  const n = {};
  return Object.entries(t).forEach(([c, i]) => {
    const a = i.group || "General";
    n[a] || (n[a] = { label: a, type: "fields", fields: [] }), n[a]?.fields?.push({ name: c, ...i });
  }), n;
}
const we = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
  7: "lg:grid-cols-7",
  8: "lg:grid-cols-8",
  9: "lg:grid-cols-9",
  10: "lg:grid-cols-10",
  11: "lg:grid-cols-11",
  12: "lg:grid-cols-12"
}, te = {
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
function se(t) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(t) ? t : 6;
}
function ke(t) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(t) ? t : 6;
}
async function Ce(t) {
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
    } catch (c) {
      throw c;
    }
    document.body.removeChild(n);
  }
}
const ge = "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg";
function J({ field: t, data: n }) {
  const c = t?.name;
  return /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ e.jsx("label", { className: `
    block text-sm font-semibold  transition-all duration-300 text-gray-700 capitalize
  `, children: t?.label }),
    /* @__PURE__ */ e.jsx("div", { className: "relative", children: c.toLowerCase().includes("avatar") || c.toLowerCase().includes("logo") ? /* @__PURE__ */ e.jsx(
      "img",
      {
        src: String(n?.[c]),
        alt: "avatar",
        className: "w-16 h-16 rounded-full object-cover border",
        onError: (l) => {
          const o = l.currentTarget;
          o.onerror = null, o.src = ge;
        }
      }
    ) : /* @__PURE__ */ e.jsx("p", { className: `
    text-sm text-gray-600 break-words
  `, children: typeof n?.[c] == "object" ? JSON.stringify(n?.[c]) : String(n?.[c] ?? "") }) })
  ] });
}
function Ee({ commonInfo: t, infoData: n, hiddenFields: c = [] }) {
  return /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-100 p-4  ", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    /* @__PURE__ */ e.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ e.jsx("div", { className: "relative w-42 h-42", children: /* @__PURE__ */ e.jsx(
      "img",
      {
        src: String(n.avatar_photo),
        alt: "Profile",
        className: " w-full h-full object-cover border-4 rounded-[12px] border-white shadow-lg",
        onError: (i) => {
          const a = i.currentTarget;
          a.onerror = null, a.src = ge;
        }
      }
    ) }) }),
    /* @__PURE__ */ e.jsx("div", { className: "lg:col-span-10 min-h-0 max-h-40  overflow-y-auto custom-scrollbar", children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-2", children: t.fields?.map((i, a) => {
      const l = n?.[i.name];
      return c.includes(i.name) || !l && l !== !1 && l !== 0 ? null : /* @__PURE__ */ e.jsx("div", { className: `hover:bg-gray-100 transition-colors duration-200 col-span-12 sm:col-span-6 ${te[se(i.width)] || "lg:col-span-4"}`, children: /* @__PURE__ */ e.jsx(
        J,
        {
          field: i,
          data: n ?? {}
        },
        i?.name || a
      ) }, i.name);
    }) }) })
  ] }) });
}
function le({ tabObj: t, methods: n }) {
  const [c, i] = S.useState({});
  return S.useEffect(() => {
    let a = !1;
    return (async () => {
      const o = t?.config;
      if (!o?.type) {
        a || i({});
        return;
      }
      if (o.type === "method") {
        const u = o.method, x = u ? n[u] : void 0;
        if (x)
          try {
            const y = await Promise.resolve(x());
            a || i(y || {});
          } catch (y) {
            console.error("Method execution failed:", y), a || i({});
          }
        else
          a || i({});
      }
      if (o.type === "api")
        try {
          const u = await oe({
            method: o.method || "GET",
            // GET, POST, etc.
            url: o.url,
            data: o.body || {},
            // request body
            params: o.params || {},
            // query params
            headers: o.headers || {}
            // optional headers
          });
          a || i(u.data || {});
        } catch (u) {
          console.error("API fetch failed:", u), a || i({});
        }
    })(), () => {
      a = !0;
    };
  }, [
    t?.config?.type || "",
    t?.config?.method || "",
    t?.config?.url || "",
    JSON.stringify(t?.config?.params || {}),
    JSON.stringify(t?.config?.body || {}),
    JSON.stringify(t?.config?.headers || {})
  ]), /* @__PURE__ */ e.jsx("div", { className: "flex-1 max-h-full overflow-y-auto px-3 custom-scrollbar", children: /* @__PURE__ */ e.jsx("div", { className: `grid grid-cols-1 sm:grid-cols-2 ${we[ke(t.width)] || "lg:grid-cols-3"} gap-4`, children: c && Object.keys(c).map((a, l) => /* @__PURE__ */ e.jsx(
    J,
    {
      field: { name: a, label: a },
      data: c ?? {}
    },
    a
  )) }) });
}
const O = (t = 8) => {
  const n = "abcdefghijklmnopqrstuvwxyz";
  return Array.from({ length: t }).map(() => n[Math.floor(Math.random() * n.length)]).join("");
}, Se = () => `${O(5)}@example.com`, Te = () => "+91" + Array.from({ length: 10 }).map(() => Math.floor(Math.random() * 10)).join(""), ae = () => {
  const t = new Date(1990, 0, 1).getTime(), n = new Date(2020, 0, 1).getTime();
  return new Date(t + Math.random() * (n - t));
};
function _e(t) {
  return Array.from({ length: t }).map((n, c) => ({
    id: c + 1,
    name: O(7),
    email: Se(),
    phone: Te(),
    dob: ae().toISOString().split("T")[0],
    isActive: Math.random() > 0.5,
    address: `${Math.floor(Math.random() * 1e3)} ${O(5)} Street, City`,
    notes: O(20),
    // 👇 extra fields to test horizontal scroll
    department: ["HR", "Engineering", "Sales", "Finance"][Math.floor(Math.random() * 4)],
    role: ["Manager", "Developer", "Analyst", "Intern"][Math.floor(Math.random() * 4)],
    salary: (3e4 + Math.random() * 7e4).toFixed(2),
    bonus: (Math.random() * 1e4).toFixed(2),
    rating: (Math.random() * 5).toFixed(1),
    joinDate: ae().toISOString().split("T")[0],
    lastLogin: ae().toISOString(),
    project: O(10),
    skills: `${O(5)}, ${O(5)}, ${O(5)}`,
    manager: O(6)
  }));
}
function ie({ tabObj: t, methods: n }) {
  const [c, i] = I(1), [a, l] = I(10), [o, u] = I(""), [x, y] = S.useState(_e(100)), M = pe(null), [j, p] = I(null), [g, N] = I({ key: "", direction: null });
  S.useEffect(() => {
    let r = !1;
    return (async () => {
      const h = t?.config;
      if (!h?.type) {
        r || y([]);
        return;
      }
      if (h.type === "method") {
        const f = h.method, v = f ? n[f] : void 0;
        if (v)
          try {
            const R = await Promise.resolve(v());
            r || y(R || []);
          } catch (R) {
            console.error("Method execution failed:", R), r || y([]);
          }
        else
          r || y([]);
      }
      if (h.type === "api")
        try {
          const f = await oe({
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
          r || y(f.data || {});
        } catch (f) {
          console.error("API fetch failed:", f), r || y([]);
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
  const E = Array.isArray(x) ? x : [x], w = ((r) => {
    const d = /* @__PURE__ */ new Set();
    return r.forEach((h) => {
      h && typeof h == "object" && Object.keys(h).forEach((f) => d.add(f));
    }), Array.from(d);
  })(E), L = t?.vmode === "edit", T = t?.config?.form && Object.keys(t.config.form).length > 0, C = (r) => {
    let d = "asc";
    g.key === r && g.direction === "asc" ? d = "desc" : g.key === r && g.direction === "desc" && (d = null), N({ key: r, direction: d });
  }, $ = (r) => !g.key || !g.direction ? r : [...r].sort((d, h) => {
    const f = d[g.key], v = h[g.key];
    if (f == null) return g.direction === "asc" ? 1 : -1;
    if (v == null) return g.direction === "asc" ? -1 : 1;
    if (typeof f == "boolean" && typeof v == "boolean")
      return g.direction === "asc" ? f === v ? 0 : f ? -1 : 1 : f === v ? 0 : f ? 1 : -1;
    const R = new Date(f), b = new Date(v);
    if (!isNaN(R.getTime()) && !isNaN(b.getTime()))
      return g.direction === "asc" ? R.getTime() - b.getTime() : b.getTime() - R.getTime();
    const A = parseFloat(f), D = parseFloat(v);
    if (!isNaN(A) && !isNaN(D))
      return g.direction === "asc" ? A - D : D - A;
    const W = String(f).toLowerCase(), ee = String(v).toLowerCase();
    return g.direction === "asc" ? W < ee ? -1 : W > ee ? 1 : 0 : W > ee ? -1 : W < ee ? 1 : 0;
  }), P = ce(() => {
    let r = E;
    if (o.trim()) {
      const d = o.toLowerCase();
      r = E.filter((h) => w.some((f) => {
        const v = h[f];
        return v == null ? !1 : String(v).toLowerCase().includes(d);
      }));
    }
    return $(r);
  }, [E, o, w, g]), z = Math.ceil(P.length / a), _ = (c - 1) * a, B = _ + a, ne = P.slice(_, B), F = (r) => {
    i(Math.max(1, Math.min(r, z)));
  }, q = (r) => {
    l(r), i(1);
  }, X = () => {
    u("");
  }, Y = (r, d) => {
    console.log("Edit row:", r, "at index:", d);
  }, Q = (r, d) => {
    console.log("view row:", r, "at index:", d);
  }, Z = (r, d) => {
    console.log("Delete row:", r, "at index:", d);
  }, G = () => {
    console.log("Add new record");
  }, U = (r) => r.split("_").map((d) => d.charAt(0).toUpperCase() + d.slice(1)).join(" "), K = (r, d) => {
    if (r == null || r === "")
      return /* @__PURE__ */ e.jsx("span", { className: "text-gray-400 italic", children: "-" });
    if (typeof r == "boolean")
      return /* @__PURE__ */ e.jsx("span", { className: `inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${r ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`, children: r ? "Yes" : "No" });
    switch (d?.toLowerCase()) {
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
  }, s = (r, d) => {
    Ce(r).then(() => {
      p(d), M.current && clearTimeout(M.current), M.current = setTimeout(() => {
        p("");
      }, 2e3);
    }).catch(() => {
      p("");
    });
  }, m = ce(() => ({
    totalRows: P.length,
    columns: w.length,
    currentPageStart: _ + 1,
    currentPageEnd: Math.min(B, P.length),
    isFiltered: o.trim().length > 0
  }), [P, E, w, _, B]);
  return E.length === 0 || w.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "h-full flex flex-1 flex-col items-center justify-center py-22 text-gray-500", children: [
    /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ e.jsxs("svg", { className: "w-8 h-8 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
      /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" }),
      /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m8 7 4-4 4 4" })
    ] }) }),
    /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No Data Available" }),
    /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500 text-center max-w-sm", children: "There are no records to display in the grid view at the moment." }),
    T && /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: G,
        className: "mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-action cursor-pointer",
        children: [
          /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 mr-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 4v16m8-8H4" }) }),
          "Add Record"
        ]
      }
    )
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "w-full h-full overflow-hidden flex-1 flex flex-col", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "my-4 mx-2 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center", children: [
      /* @__PURE__ */ e.jsx("div", { className: "flex-1 max-w-md", children: /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ e.jsx("svg", { className: "h-4 w-4 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) }) }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            placeholder: "Search across all columns...",
            value: o,
            onChange: (r) => u(r.target.value),
            className: "block w-full px-10 py-2 border border-gray-300 rounded-lg text-sm placeholder-gray-500  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
          }
        ),
        o && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: X,
            className: "absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600",
            title: "Clear search",
            children: /* @__PURE__ */ e.jsx("svg", { className: "h-4 w-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
          }
        )
      ] }) }),
      T && /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: G,
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
          m.currentPageStart,
          "-",
          m.currentPageEnd
        ] }),
        " of ",
        /* @__PURE__ */ e.jsx("strong", { className: "text-gray-900", children: m.totalRows }),
        " records"
      ] }) }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex justify-end gap-4", children: [
        /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-gray-600", children: "Show:" }),
          /* @__PURE__ */ e.jsxs(
            "select",
            {
              value: a,
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
              onClick: () => F(c - 1),
              disabled: c === 1,
              className: "flex items-center gap-2 text-sm font-medium text-action cursor-pointer bg-white rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
              children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
            }
          ),
          /* @__PURE__ */ e.jsx("span", { className: "flex items-center gap-2 text-sm", children: /* @__PURE__ */ e.jsxs("span", { className: "text-gray-600", children: [
            "Page ",
            /* @__PURE__ */ e.jsx("strong", { className: "text-gray-900", children: c }),
            " of ",
            /* @__PURE__ */ e.jsx("strong", { className: "text-gray-900", children: z })
          ] }) }),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => F(c + 1),
              disabled: c === z,
              className: "flex items-center gap-2 text-sm font-medium text-action cursor-pointer bg-white rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
              children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
            }
          )
        ] })
      ] })
    ] }),
    P.length === 0 && o.trim() && /* @__PURE__ */ e.jsxs("div", { className: "h-full flex flex-1 flex-col items-center justify-center py-22 text-gray-500", children: [
      /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ e.jsx("svg", { className: "w-8 h-8 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) }) }),
      /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No Results Found" }),
      /* @__PURE__ */ e.jsxs("p", { className: "text-sm text-gray-500 text-center max-w-sm mb-4", children: [
        "No records match your search for ",
        /* @__PURE__ */ e.jsxs("strong", { children: [
          '"',
          o,
          '"'
        ] })
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: X,
          className: "inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 cursor-pointer",
          children: "Clear Search"
        }
      )
    ] }),
    P.length > 0 && /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx("div", { className: "max-h-full overflow-auto min-w-full divide-y divide-gray-200 border border-gray-200 bordr-t", children: /* @__PURE__ */ e.jsxs("table", { className: "min-w-full h-full", children: [
      /* @__PURE__ */ e.jsx("thead", { className: " text-action", children: /* @__PURE__ */ e.jsxs("tr", { children: [
        L && /* @__PURE__ */ e.jsx(
          "th",
          {
            scope: "col",
            className: "bg-muted px-4 sm:px-6 py-2 text-left text-xs font-bold uppercase tracking-wider w-32 sticky top-0 left-0 z-20",
            children: "Actions"
          }
        ),
        w.map((r, d) => /* @__PURE__ */ e.jsx(
          "th",
          {
            scope: "col",
            className: "bg-muted sticky top-0 z-10 px-4 sm:px-6 py-2 text-left text-xs font-bold uppercase tracking-wider",
            children: /* @__PURE__ */ e.jsxs(
              "div",
              {
                className: "flex items-center gap-1 cursor-pointer select-none",
                onClick: () => C(r),
                children: [
                  /* @__PURE__ */ e.jsx("span", { className: "truncate", title: U(r), children: U(r) }),
                  g?.key === r ? g.direction === "asc" ? /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-blue-600", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ e.jsx("path", { d: "M5 12l5-5 5 5H5z" }) }) : /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-blue-600", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ e.jsx("path", { d: "M5 8l5 5 5-5H5z" }) }) : /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-gray-400 group-hover:text-gray-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" }) })
                ]
              }
            )
          },
          r
        ))
      ] }) }),
      /* @__PURE__ */ e.jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: ne.map((r, d) => /* @__PURE__ */ e.jsxs(
        "tr",
        {
          className: `hover:bg-secondary transition-colors duration-150 ${d % 2 === 0 ? "bg-white" : "bg-gray-50"}`,
          children: [
            L && /* @__PURE__ */ e.jsx("td", { className: "px-4 sm:px-6 py-1 whitespace-nowrap text-sm bg-gray-50 text-gray-900 sticky left-0 z-10", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: () => Q(r, _ + d),
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
                  onClick: () => Y(r, _ + d),
                  className: "inline-flex items-center px-2 py-1 text-xs font-medium rounded cursor-pointer text-action",
                  title: "Edit",
                  children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" }) })
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: () => Z(r, _ + d),
                  className: "text-red-600 hover:text-red-800 cursor-pointer transition-colors p-1 hover:bg-red-100 rounded",
                  title: "Delete",
                  children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }) })
                }
              )
            ] }) }),
            w.map((h) => /* @__PURE__ */ e.jsx(
              "td",
              {
                className: "px-4 sm:px-6 py-1 text-sm text-gray-900",
                children: /* @__PURE__ */ e.jsxs("div", { className: "relative group flex items-center", children: [
                  /* @__PURE__ */ e.jsx("div", { className: "truncate max-w-xs sm:max-w-none", children: K(r[h] ?? "", h) }),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      onClick: () => s(r[h] || "", `${r.id}-${h}`),
                      className: "absolute -right-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity ml-2 p-1 rounded bg-gray-50 hover:bg-gray-100 cursor-pointer",
                      title: "Copy",
                      children: j === `${r.id}-${h}` ? /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx("span", { className: "text-xs text-gray-600", children: "Copied!" }) }) : /* @__PURE__ */ e.jsx("i", { className: "fa-regular fa-copy" })
                    }
                  )
                ] })
              },
              h
            ))
          ]
        },
        _ + d
      )) })
    ] }) }) })
  ] });
}
const xe = ({ groups: t, groupNames: n, setActiveTabIndex: c, activeTabIndex: i }) => /* @__PURE__ */ e.jsx(
  "nav",
  {
    className: "flex flex-col overflow-y-auto h-full px-2 py-1 space-y-1",
    children: n.length > 0 ? n.map((a, l) => /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: () => c(l),
        className: `cursor-pointer w-full text-left py-2 px-3 rounded-md text-sm font-semibold transition-all duration-200 ${i === l ? "bg-white shadow text-action" : "text-gray-600 hover:bg-white/50"}`,
        children: /* @__PURE__ */ e.jsx("span", { className: "truncate", children: t[a]?.label || a })
      },
      a
    )) : /* @__PURE__ */ e.jsx("div", { className: "py-3 px-2 text-sm text-gray-500", children: "No group available" })
  }
), Re = ({
  groups: t,
  groupNames: n,
  setActiveTabIndex: c,
  activeTabIndex: i,
  layoutConfig: a,
  showScrollHint: l,
  isCommonInfo: o,
  tabsNavRef: u
}) => /* @__PURE__ */ e.jsxs("div", { className: a?.tabNavClass || "relative", children: [
  l && /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: () => {
        u.current && u.current.scrollBy({ left: -200, behavior: "smooth" });
      },
      className: "absolute left-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group",
      children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
    }
  ),
  l && /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: () => {
        u.current && u.current.scrollBy({ left: 200, behavior: "smooth" });
      },
      className: "absolute right-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group",
      children: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
    }
  ),
  l && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-gray-100 via-gray-100/80 to-transparent z-10 pointer-events-none rounded-l-2xl" }),
    /* @__PURE__ */ e.jsx("div", { className: "absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-gray-100 via-gray-100/80 to-transparent z-10 pointer-events-none rounded-r-2xl" })
  ] }),
  /* @__PURE__ */ e.jsx("div", { className: `relative bg-gray-100 ${o ? "" : "rounded-t-lg"} px-1 pt-1 shadow-inner overflow-hidden`, children: /* @__PURE__ */ e.jsx(
    "nav",
    {
      ref: u,
      className: "relative flex overflow-x-auto scrollbar-hide scroll-smooth",
      style: {
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        paddingLeft: l ? "35px" : "0",
        paddingRight: l ? "35px" : "0"
      },
      children: n.length > 0 ? n.map((x, y) => /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: () => c(y),
          className: `relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${i === y ? "text-action bg-white " : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
          children: /* @__PURE__ */ e.jsx("span", { className: "relative z-10 flex items-center justify-center gap-1 sm:gap-2", children: /* @__PURE__ */ e.jsx("span", { className: "truncate", children: t[x]?.label || x }) })
        },
        x
      )) : /* @__PURE__ */ e.jsx("div", { className: "py-3 px-6 text-sm text-gray-500", children: "No group available" })
    }
  ) })
] }), he = ({
  groupNames: t,
  activeTabIndex: n,
  layoutConfig: c,
  tabObj: i,
  infoData: a,
  setActiveTabIndex: l,
  renderView: o
}) => /* @__PURE__ */ e.jsxs(
  "div",
  {
    className: "bg-white min-h-0 rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex flex-col h-full",
    children: [
      t.length > 0 ? i?.fields ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto  custom-scrollbar", children: /* @__PURE__ */ e.jsx("div", { className: c?.fieldGridClass || "grid grid-cols-12 gap-2", children: i.fields.map((u, x) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: `col-span-12 sm:col-span-6 ${te[se(u.width)] || "lg:col-span-2"}`,
          children: /* @__PURE__ */ e.jsx(J, { field: u, data: a ?? {} })
        },
        u?.name ?? `field-${x}`
      )) }) }) : i ? o(i) : null : /* @__PURE__ */ e.jsx("div", { className: "flex-1 col-span-full text-center py-8 text-gray-500", children: "No data available" }),
      t.length > 5 && /* @__PURE__ */ e.jsxs("div", { className: "mt-2 pt-2 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-500", children: [
          /* @__PURE__ */ e.jsxs("span", { children: [
            "Tab ",
            n + 1,
            " of ",
            t.length
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex gap-1", children: [
            t.slice(0, 5).map((u, x) => /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${x === n ? "bg-action w-6" : "bg-gray-300"}`
              },
              x
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
      t.length <= 5 && /* @__PURE__ */ e.jsx("div", { className: "mt-2 pt-3 border-t border-gray-100", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
        /* @__PURE__ */ e.jsxs("span", { children: [
          "Tab ",
          n + 1,
          " of ",
          t.length
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex gap-1", children: t.map((u, x) => /* @__PURE__ */ e.jsx(
          "div",
          {
            className: `w-2 h-2 rounded-full transition-all duration-300 ${x === n ? "bg-action w-6" : "bg-gray-300"}`
          },
          x
        )) })
      ] }) })
    ]
  },
  t[n]
);
function fe({
  groups: t,
  methods: n = {},
  infoData: c,
  viewRenderers: i = {},
  isCommonInfo: a,
  layoutConfig: l = {},
  viewMode: o
}) {
  const [u, x] = S.useState(0), [y, M] = S.useState(!1), j = S.useRef(null), p = Object.keys(t);
  S.useEffect(() => {
    const C = () => {
      if (j.current) {
        const $ = j.current;
        M($.scrollWidth > $.clientWidth);
      }
    };
    return C(), window.addEventListener("resize", C), () => window.removeEventListener("resize", C);
  }, [p.length]), S.useEffect(() => {
    if (j.current && p.length > 0) {
      const C = j.current.children[u];
      C && C.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [u, p.length]);
  const g = o === "tableft", N = o === "tabright", E = !g && !N, k = t[p[u] ?? ""] || null, w = {
    single: (C) => /* @__PURE__ */ e.jsx(le, { tabObj: C, methods: n }),
    grid: (C) => /* @__PURE__ */ e.jsx(ie, { tabObj: C, methods: n })
  }, L = ["single", "grid"].includes(k?.config?.uimode) ? k?.config?.uimode : "single", T = i[L] || w[L] || (() => /* @__PURE__ */ e.jsx("div", { children: "No renderer for this type" }));
  return E ? /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col w-full h-full overflow-hidden", children: [
    /* @__PURE__ */ e.jsx(
      Re,
      {
        groupNames: p,
        groups: t,
        setActiveTabIndex: x,
        activeTabIndex: u,
        tabsNavRef: j,
        isCommonInfo: a,
        showScrollHint: y,
        layoutConfig: l
      }
    ),
    /* @__PURE__ */ e.jsx("main", { className: "flex-1 overflow-auto", children: /* @__PURE__ */ e.jsx(
      he,
      {
        groupNames: p,
        activeTabIndex: u,
        layoutConfig: l,
        tabObj: k,
        infoData: c,
        setActiveTabIndex: x,
        renderView: T,
        groups: t
      }
    ) })
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "flex w-full h-full overflow-hidden", children: [
    g && /* @__PURE__ */ e.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ e.jsx(
      xe,
      {
        groupNames: p,
        groups: t,
        setActiveTabIndex: x,
        activeTabIndex: u
      }
    ) }),
    /* @__PURE__ */ e.jsx("main", { className: "flex-1 overflow-auto", children: /* @__PURE__ */ e.jsx(
      he,
      {
        groupNames: p,
        activeTabIndex: u,
        layoutConfig: l,
        tabObj: k,
        infoData: c,
        setActiveTabIndex: x,
        renderView: T,
        groups: t
      }
    ) }),
    N && /* @__PURE__ */ e.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ e.jsx(
      xe,
      {
        groupNames: p,
        groups: t,
        setActiveTabIndex: x,
        activeTabIndex: u
      }
    ) })
  ] });
}
function Le({ title: t, children: n, isFirst: c }) {
  const [i, a] = I(c);
  return /* @__PURE__ */ e.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ e.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: () => a(!i),
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ e.jsx("div", { className: `w-3 h-3 rounded-full transition-all duration-300 ${i ? "bg-action" : "bg-gray-300"}` }),
            /* @__PURE__ */ e.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: t })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: `relative transition-all duration-300 ${i ? "rotate-180" : ""}`, children: [
            /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 rounded-full blur-md transition-opacity duration-300 ${i ? "bg-action opacity-30" : "bg-transparent opacity-0"}` }),
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
        className: `transition-all duration-500 ease-in-out overflow-hidden ${i ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`,
        children: /* @__PURE__ */ e.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-5 pt-4", children: n }) })
      }
    )
  ] }) });
}
function Ae({
  groups: t,
  methods: n = {},
  infoData: c,
  viewRenderers: i = {}
}) {
  const a = {
    single: (l) => /* @__PURE__ */ e.jsx(le, { tabObj: l, methods: n }),
    grid: (l) => /* @__PURE__ */ e.jsx(ie, { tabObj: l, methods: n })
  };
  return /* @__PURE__ */ e.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ e.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: t && Object.entries(t).map(([l, o], u) => /* @__PURE__ */ e.jsx(Le, { title: l, isFirst: u === 0, children: o?.fields ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 max-h-full overflow-y-auto  custom-scrollbar", children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-2", children: o.fields.map((x, y) => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${te[se(x.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ e.jsx(J, { field: x, data: c ?? {} })
    },
    x?.name ?? `field-${y}`
  )) }) }) : o ? i[o.config?.uimode]?.(o) || a[o.config?.uimode]?.(o) || /* @__PURE__ */ e.jsx("div", { children: "No renderer for this type" }) : null }, l)) }) }) });
}
function Me({ title: t, children: n }) {
  return /* @__PURE__ */ e.jsx("div", { className: "group relative mt-1", children: /* @__PURE__ */ e.jsxs("div", { className: "relative bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ e.jsx("div", { className: "w-3 h-3 rounded-full transition-all duration-300 bg-action" }),
          /* @__PURE__ */ e.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: t })
        ] })
      }
    ),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `transition-all duration-500 ease-in-out overflow-hidden max-h-[2000px] opacity-100'
            }`,
        children: /* @__PURE__ */ e.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-5 pt-4", children: n }) })
      }
    )
  ] }) });
}
function Pe({
  groups: t,
  methods: n = {},
  infoData: c,
  viewRenderers: i = {}
}) {
  const a = {
    single: (l) => /* @__PURE__ */ e.jsx(le, { tabObj: l, methods: n }),
    grid: (l) => /* @__PURE__ */ e.jsx(ie, { tabObj: l, methods: n })
  };
  return /* @__PURE__ */ e.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ e.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: t && Object.entries(t).map(([l, o], u) => /* @__PURE__ */ e.jsx(Me, { title: l, children: o?.fields ? /* @__PURE__ */ e.jsx("div", { className: "flex-1 max-h-full overflow-y-auto  custom-scrollbar", children: /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-12 gap-2", children: o.fields.map((x, y) => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${te[se(x.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ e.jsx(J, { field: x, data: c ?? {} })
    },
    x?.name ?? `field-${y}`
  )) }) }) : o ? i[o.config?.uimode]?.(o) || a[o.config?.uimode]?.(o) || /* @__PURE__ */ e.jsx("div", { children: "No renderer for this type" }) : null }, l)) }) }) });
}
function $e({
  infoViewJson: t,
  data: n = {},
  hiddenFields: c = [],
  groupFieldsFn: i = Ne,
  layoutConfig: a = {},
  viewRenderers: l = {},
  methods: o = {}
}) {
  const [u, x] = S.useState({}), y = ve(t.infoview ?? {});
  let j = { ...S.useMemo(
    () => i(t.fields || {}),
    [t.fields, i]
  ) };
  t.infoview?.groups && (j = { ...j, ...t.infoview.groups }), S.useEffect(() => {
    let N = !1;
    return (async () => {
      const k = t?.source;
      if (!k?.type) {
        N || x({});
        return;
      }
      if (k.type === "method") {
        const w = k.method, L = w ? o[w] : void 0;
        if (L)
          try {
            const T = await Promise.resolve(L());
            N || x(T || {});
          } catch (T) {
            console.error("Method execution failed:", T), N || x({});
          }
        else
          N || x({});
      }
      if (k.type === "api")
        try {
          const w = await oe({
            method: k.method || "GET",
            url: k.url,
            data: k.body || {},
            params: k.params || {},
            headers: k.headers || {}
          });
          N || x(w.data || {});
        } catch (w) {
          console.error("API fetch failed:", w), N || x({});
        }
    })(), () => {
      N = !0;
    };
  }, [
    t?.source?.type || "",
    t?.source?.method || "",
    t?.source?.url || "",
    JSON.stringify(t?.source?.params || {}),
    JSON.stringify(t?.source?.body || {}),
    JSON.stringify(t?.source?.headers || {})
  ]);
  const p = j.common || null;
  p && delete j.common;
  const g = (N) => {
    switch (N) {
      case "accordion":
        return /* @__PURE__ */ e.jsx(
          Ae,
          {
            groups: j,
            methods: o,
            infoData: u,
            viewRenderers: l
          }
        );
      case "tab":
      case "tableft":
      case "tabright":
        return /* @__PURE__ */ e.jsx(
          fe,
          {
            groups: j,
            viewRenderers: l,
            layoutConfig: a,
            methods: o,
            infoData: u,
            isCommonInfo: !!p,
            viewMode: N
          }
        );
      case "cards":
        return /* @__PURE__ */ e.jsx(
          Pe,
          {
            groups: j,
            viewRenderers: l,
            methods: o,
            infoData: u
          }
        );
      default:
        return /* @__PURE__ */ e.jsx(
          fe,
          {
            groups: j,
            viewRenderers: l,
            layoutConfig: a,
            methods: o,
            infoData: u,
            isCommonInfo: !!p,
            viewMode: N
          }
        );
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: a.containerClass || "h-screen flex flex-col", children: [
    p && /* @__PURE__ */ e.jsx(
      Ee,
      {
        commonInfo: p,
        infoData: u,
        hiddenFields: c
      }
    ),
    g(y)
  ] });
}
export {
  $e as InfoView,
  $e as default
};
