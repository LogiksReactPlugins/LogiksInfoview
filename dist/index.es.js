import S from "react";
import re from "axios";
var y = { exports: {} }, k = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U;
function te() {
  if (U) return k;
  U = 1;
  var t = Symbol.for("react.transitional.element"), f = Symbol.for("react.fragment");
  function E(u, n, l) {
    var R = null;
    if (l !== void 0 && (R = "" + l), n.key !== void 0 && (R = "" + n.key), "key" in n) {
      l = {};
      for (var v in n)
        v !== "key" && (l[v] = n[v]);
    } else l = n;
    return n = l.ref, {
      $$typeof: t,
      type: u,
      key: R,
      ref: n !== void 0 ? n : null,
      props: l
    };
  }
  return k.Fragment = f, k.jsx = E, k.jsxs = E, k;
}
var O = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var G;
function oe() {
  return G || (G = 1, process.env.NODE_ENV !== "production" && function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === V ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case d:
          return "Fragment";
        case h:
          return "Profiler";
        case g:
          return "StrictMode";
        case B:
          return "Suspense";
        case Z:
          return "SuspenseList";
        case J:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case i:
            return "Portal";
          case X:
            return (e.displayName || "Context") + ".Provider";
          case z:
            return (e._context.displayName || "Context") + ".Consumer";
          case H:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Q:
            return r = e.displayName || null, r !== null ? r : t(e.type) || "Memo";
          case Y:
            r = e._payload, e = e._init;
            try {
              return t(e(r));
            } catch {
            }
        }
      return null;
    }
    function f(e) {
      return "" + e;
    }
    function E(e) {
      try {
        f(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var o = r.error, a = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          a
        ), f(e);
      }
    }
    function u(e) {
      if (e === d) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === Y)
        return "<...>";
      try {
        var r = t(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var e = P.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function R(e) {
      if (D.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function v(e, r) {
      function o() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      o.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: o,
        configurable: !0
      });
    }
    function p() {
      var e = t(this.type);
      return M[e] || (M[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function I(e, r, o, a, b, m, N, w) {
      return o = m.ref, e = {
        $$typeof: x,
        type: e,
        key: r,
        props: m,
        _owner: b
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: p
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: N
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: w
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function _(e, r, o, a, b, m, N, w) {
      var s = r.children;
      if (s !== void 0)
        if (a)
          if (K(s)) {
            for (a = 0; a < s.length; a++)
              A(s[a]);
            Object.freeze && Object.freeze(s);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else A(s);
      if (D.call(r, "key")) {
        s = t(e);
        var T = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        a = 0 < T.length ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}", W[s + a] || (T = 0 < T.length ? "{" + T.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          a,
          s,
          T,
          s
        ), W[s + a] = !0);
      }
      if (s = null, o !== void 0 && (E(o), s = "" + o), R(r) && (E(r.key), s = "" + r.key), "key" in r) {
        o = {};
        for (var C in r)
          C !== "key" && (o[C] = r[C]);
      } else o = r;
      return s && v(
        o,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), I(
        e,
        s,
        m,
        b,
        n(),
        o,
        N,
        w
      );
    }
    function A(e) {
      typeof e == "object" && e !== null && e.$$typeof === x && e._store && (e._store.validated = 1);
    }
    var c = S, x = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), X = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), J = Symbol.for("react.activity"), V = Symbol.for("react.client.reference"), P = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.prototype.hasOwnProperty, K = Array.isArray, j = console.createTask ? console.createTask : function() {
      return null;
    };
    c = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var F, M = {}, $ = c.react_stack_bottom_frame.bind(
      c,
      l
    )(), L = j(u(l)), W = {};
    O.Fragment = d, O.jsx = function(e, r, o, a, b) {
      var m = 1e4 > P.recentlyCreatedOwnerStacks++;
      return _(
        e,
        r,
        o,
        !1,
        a,
        b,
        m ? Error("react-stack-top-frame") : $,
        m ? j(u(e)) : L
      );
    }, O.jsxs = function(e, r, o, a, b) {
      var m = 1e4 > P.recentlyCreatedOwnerStacks++;
      return _(
        e,
        r,
        o,
        !0,
        a,
        b,
        m ? Error("react-stack-top-frame") : $,
        m ? j(u(e)) : L
      );
    };
  }()), O;
}
var q;
function ne() {
  return q || (q = 1, process.env.NODE_ENV === "production" ? y.exports = te() : y.exports = oe()), y.exports;
}
var ae = ne();
function se(t) {
  return t.template ? t.template : "tab";
}
function ce(t) {
  const f = {};
  return Object.entries(t).forEach(([E, u]) => {
    const n = u.group || "General";
    f[n] || (f[n] = { label: n, type: "fields", fields: [] }), f[n]?.fields?.push({ name: E, ...u });
  }), f;
}
function ie({
  infoViewJson: t,
  data: f = {},
  hiddenFields: E = [],
  groupFieldsFn: u = ce,
  layoutConfig: n = {},
  viewRenderers: l = {},
  methods: R = {}
}) {
  const [v, p] = S.useState({});
  se(t.infoview ?? {});
  let _ = { ...S.useMemo(
    () => u(t.fields || {}),
    [t.fields, u]
  ) };
  return t.infoview?.groups && (_ = { ..._, ...t.infoview.groups }), S.useEffect(() => {
    let c = !1;
    return (async () => {
      const i = t?.source;
      if (!i?.type) {
        c || p({});
        return;
      }
      if (i.type === "method") {
        const d = i.method, g = d ? R[d] : void 0;
        if (g)
          try {
            const h = await Promise.resolve(g());
            c || p(h || {});
          } catch (h) {
            console.error("Method execution failed:", h), c || p({});
          }
        else
          c || p({});
      }
      if (i.type === "api")
        try {
          const d = await re({
            method: i.method || "GET",
            url: i.url,
            data: i.body || {},
            params: i.params || {},
            headers: i.headers || {}
          });
          c || p(d.data || {});
        } catch (d) {
          console.error("API fetch failed:", d), c || p({});
        }
    })(), () => {
      c = !0;
    };
  }, [
    t?.source?.type || "",
    t?.source?.method || "",
    t?.source?.url || "",
    JSON.stringify(t?.source?.params || {}),
    JSON.stringify(t?.source?.body || {}),
    JSON.stringify(t?.source?.headers || {})
  ]), (_.common || null) && delete _.common, /* @__PURE__ */ ae.jsx("div", { className: n.containerClass || "h-screen flex flex-col", children: "Hello World !" });
}
export {
  ie as InfoView,
  ie as default
};
