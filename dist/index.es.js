import ae, { useState as re, useRef as de, useEffect as oe, useCallback as te, useMemo as Et, useLayoutEffect as yn, createContext as xa, forwardRef as va, createElement as wa, useContext as ja } from "react";
import H from "axios";
import { createPortal as Ta } from "react-dom";
function gn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ht = { exports: {} }, Ze = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xr;
function Ea() {
  if (xr) return Ze;
  xr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, a, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), a.key !== void 0 && (i = "" + a.key), "key" in a) {
      s = {};
      for (var l in a)
        l !== "key" && (s[l] = a[l]);
    } else s = a;
    return a = s.ref, {
      $$typeof: e,
      type: n,
      key: i,
      ref: a !== void 0 ? a : null,
      props: s
    };
  }
  return Ze.Fragment = t, Ze.jsx = r, Ze.jsxs = r, Ze;
}
var Qe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vr;
function Sa() {
  return vr || (vr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(b) {
      if (b == null) return null;
      if (typeof b == "function")
        return b.$$typeof === Z ? null : b.displayName || b.name || null;
      if (typeof b == "string") return b;
      switch (b) {
        case v:
          return "Fragment";
        case p:
          return "Profiler";
        case S:
          return "StrictMode";
        case g:
          return "Suspense";
        case _:
          return "SuspenseList";
        case W:
          return "Activity";
      }
      if (typeof b == "object")
        switch (typeof b.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), b.$$typeof) {
          case E:
            return "Portal";
          case w:
            return (b.displayName || "Context") + ".Provider";
          case j:
            return (b._context.displayName || "Context") + ".Consumer";
          case y:
            var T = b.render;
            return b = b.displayName, b || (b = T.displayName || T.name || "", b = b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef"), b;
          case O:
            return T = b.displayName || null, T !== null ? T : e(b.type) || "Memo";
          case B:
            T = b._payload, b = b._init;
            try {
              return e(b(T));
            } catch {
            }
        }
      return null;
    }
    function t(b) {
      return "" + b;
    }
    function r(b) {
      try {
        t(b);
        var T = !1;
      } catch {
        T = !0;
      }
      if (T) {
        T = console;
        var P = T.error, V = typeof Symbol == "function" && Symbol.toStringTag && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return P.call(
          T,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          V
        ), t(b);
      }
    }
    function n(b) {
      if (b === v) return "<>";
      if (typeof b == "object" && b !== null && b.$$typeof === B)
        return "<...>";
      try {
        var T = e(b);
        return T ? "<" + T + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var b = D.A;
      return b === null ? null : b.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(b) {
      if (ne.call(b, "key")) {
        var T = Object.getOwnPropertyDescriptor(b, "key").get;
        if (T && T.isReactWarning) return !1;
      }
      return b.key !== void 0;
    }
    function l(b, T) {
      function P() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          T
        ));
      }
      P.isReactWarning = !0, Object.defineProperty(b, "key", {
        get: P,
        configurable: !0
      });
    }
    function c() {
      var b = e(this.type);
      return $[b] || ($[b] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), b = this.props.ref, b !== void 0 ? b : null;
    }
    function u(b, T, P, V, Q, J, ge, we) {
      return P = J.ref, b = {
        $$typeof: x,
        type: b,
        key: T,
        props: J,
        _owner: Q
      }, (P !== void 0 ? P : null) !== null ? Object.defineProperty(b, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(b, "ref", { enumerable: !1, value: null }), b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(b, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(b, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ge
      }), Object.defineProperty(b, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: we
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    }
    function h(b, T, P, V, Q, J, ge, we) {
      var ee = T.children;
      if (ee !== void 0)
        if (V)
          if (G(ee)) {
            for (V = 0; V < ee.length; V++)
              f(ee[V]);
            Object.freeze && Object.freeze(ee);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(ee);
      if (ne.call(T, "key")) {
        ee = e(b);
        var ye = Object.keys(T).filter(function(Fe) {
          return Fe !== "key";
        });
        V = 0 < ye.length ? "{key: someKey, " + ye.join(": ..., ") + ": ...}" : "{key: someKey}", R[ee + V] || (ye = 0 < ye.length ? "{" + ye.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          V,
          ee,
          ye,
          ee
        ), R[ee + V] = !0);
      }
      if (ee = null, P !== void 0 && (r(P), ee = "" + P), i(T) && (r(T.key), ee = "" + T.key), "key" in T) {
        P = {};
        for (var Ne in T)
          Ne !== "key" && (P[Ne] = T[Ne]);
      } else P = T;
      return ee && l(
        P,
        typeof b == "function" ? b.displayName || b.name || "Unknown" : b
      ), u(
        b,
        ee,
        J,
        Q,
        a(),
        P,
        ge,
        we
      );
    }
    function f(b) {
      typeof b == "object" && b !== null && b.$$typeof === x && b._store && (b._store.validated = 1);
    }
    var d = ae, x = Symbol.for("react.transitional.element"), E = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), j = Symbol.for("react.consumer"), w = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), W = Symbol.for("react.activity"), Z = Symbol.for("react.client.reference"), D = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ne = Object.prototype.hasOwnProperty, G = Array.isArray, C = console.createTask ? console.createTask : function() {
      return null;
    };
    d = {
      react_stack_bottom_frame: function(b) {
        return b();
      }
    };
    var N, $ = {}, k = d.react_stack_bottom_frame.bind(
      d,
      s
    )(), z = C(n(s)), R = {};
    Qe.Fragment = v, Qe.jsx = function(b, T, P, V, Q) {
      var J = 1e4 > D.recentlyCreatedOwnerStacks++;
      return h(
        b,
        T,
        P,
        !1,
        V,
        Q,
        J ? Error("react-stack-top-frame") : k,
        J ? C(n(b)) : z
      );
    }, Qe.jsxs = function(b, T, P, V, Q) {
      var J = 1e4 > D.recentlyCreatedOwnerStacks++;
      return h(
        b,
        T,
        P,
        !0,
        V,
        Q,
        J ? Error("react-stack-top-frame") : k,
        J ? C(n(b)) : z
      );
    };
  }()), Qe;
}
var wr;
function _a() {
  return wr || (wr = 1, process.env.NODE_ENV === "production" ? ht.exports = Ea() : ht.exports = Sa()), ht.exports;
}
var o = _a(), Mt, jr;
function Na() {
  if (jr) return Mt;
  jr = 1;
  function e(p) {
    this._maxSize = p, this.clear();
  }
  e.prototype.clear = function() {
    this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
  }, e.prototype.get = function(p) {
    return this._values[p];
  }, e.prototype.set = function(p, j) {
    return this._size >= this._maxSize && this.clear(), p in this._values || this._size++, this._values[p] = j;
  };
  var t = /[^.^\]^[]+|(?=\[\]|\.\.)/g, r = /^\d+$/, n = /^\d/, a = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, s = /^\s*(['"]?)(.*?)(\1)\s*$/, i = 512, l = new e(i), c = new e(i), u = new e(i);
  Mt = {
    Cache: e,
    split: f,
    normalizePath: h,
    setter: function(p) {
      var j = h(p);
      return c.get(p) || c.set(p, function(y, g) {
        for (var _ = 0, O = j.length, B = y; _ < O - 1; ) {
          var W = j[_];
          if (W === "__proto__" || W === "constructor" || W === "prototype")
            return y;
          B = B[j[_++]];
        }
        B[j[_]] = g;
      });
    },
    getter: function(p, j) {
      var w = h(p);
      return u.get(p) || u.set(p, function(g) {
        for (var _ = 0, O = w.length; _ < O; )
          if (g != null || !j) g = g[w[_++]];
          else return;
        return g;
      });
    },
    join: function(p) {
      return p.reduce(function(j, w) {
        return j + (x(w) || r.test(w) ? "[" + w + "]" : (j ? "." : "") + w);
      }, "");
    },
    forEach: function(p, j, w) {
      d(Array.isArray(p) ? p : f(p), j, w);
    }
  };
  function h(p) {
    return l.get(p) || l.set(
      p,
      f(p).map(function(j) {
        return j.replace(s, "$2");
      })
    );
  }
  function f(p) {
    return p.match(t) || [""];
  }
  function d(p, j, w) {
    var y = p.length, g, _, O, B;
    for (_ = 0; _ < y; _++)
      g = p[_], g && (S(g) && (g = '"' + g + '"'), B = x(g), O = !B && /^\d+$/.test(g), j.call(w, g, B, O, _, p));
  }
  function x(p) {
    return typeof p == "string" && p && ["'", '"'].indexOf(p.charAt(0)) !== -1;
  }
  function E(p) {
    return p.match(n) && !p.match(r);
  }
  function v(p) {
    return a.test(p);
  }
  function S(p) {
    return !x(p) && (E(p) || v(p));
  }
  return Mt;
}
var Ie = Na(), kt, Tr;
function $a() {
  if (Tr) return kt;
  Tr = 1;
  const e = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, t = (h) => h.match(e) || [], r = (h) => h[0].toUpperCase() + h.slice(1), n = (h, f) => t(h).join(f).toLowerCase(), a = (h) => t(h).reduce(
    (f, d) => `${f}${f ? d[0].toUpperCase() + d.slice(1).toLowerCase() : d.toLowerCase()}`,
    ""
  );
  return kt = {
    words: t,
    upperFirst: r,
    camelCase: a,
    pascalCase: (h) => r(a(h)),
    snakeCase: (h) => n(h, "_"),
    kebabCase: (h) => n(h, "-"),
    sentenceCase: (h) => r(n(h, " ")),
    titleCase: (h) => t(h).map(r).join(" ")
  }, kt;
}
var Lt = $a(), pt = { exports: {} }, Er;
function Aa() {
  if (Er) return pt.exports;
  Er = 1, pt.exports = function(a) {
    return e(t(a), a);
  }, pt.exports.array = e;
  function e(a, s) {
    var i = a.length, l = new Array(i), c = {}, u = i, h = r(s), f = n(a);
    for (s.forEach(function(x) {
      if (!f.has(x[0]) || !f.has(x[1]))
        throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }); u--; )
      c[u] || d(a[u], u, /* @__PURE__ */ new Set());
    return l;
    function d(x, E, v) {
      if (v.has(x)) {
        var S;
        try {
          S = ", node was:" + JSON.stringify(x);
        } catch {
          S = "";
        }
        throw new Error("Cyclic dependency" + S);
      }
      if (!f.has(x))
        throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(x));
      if (!c[E]) {
        c[E] = !0;
        var p = h.get(x) || /* @__PURE__ */ new Set();
        if (p = Array.from(p), E = p.length) {
          v.add(x);
          do {
            var j = p[--E];
            d(j, f.get(j), v);
          } while (E);
          v.delete(x);
        }
        l[--i] = x;
      }
    }
  }
  function t(a) {
    for (var s = /* @__PURE__ */ new Set(), i = 0, l = a.length; i < l; i++) {
      var c = a[i];
      s.add(c[0]), s.add(c[1]);
    }
    return Array.from(s);
  }
  function r(a) {
    for (var s = /* @__PURE__ */ new Map(), i = 0, l = a.length; i < l; i++) {
      var c = a[i];
      s.has(c[0]) || s.set(c[0], /* @__PURE__ */ new Set()), s.has(c[1]) || s.set(c[1], /* @__PURE__ */ new Set()), s.get(c[0]).add(c[1]);
    }
    return s;
  }
  function n(a) {
    for (var s = /* @__PURE__ */ new Map(), i = 0, l = a.length; i < l; i++)
      s.set(a[i], i);
    return s;
  }
  return pt.exports;
}
var Oa = Aa();
const Fa = /* @__PURE__ */ gn(Oa), Ca = Object.prototype.toString, Pa = Error.prototype.toString, Ra = RegExp.prototype.toString, Ia = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", Da = /^Symbol\((.*)\)(.*)$/;
function Ma(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function Sr(e, t = !1) {
  if (e == null || e === !0 || e === !1) return "" + e;
  const r = typeof e;
  if (r === "number") return Ma(e);
  if (r === "string") return t ? `"${e}"` : e;
  if (r === "function") return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol") return Ia.call(e).replace(Da, "Symbol($1)");
  const n = Ca.call(e).slice(8, -1);
  return n === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : n === "Error" || e instanceof Error ? "[" + Pa.call(e) + "]" : n === "RegExp" ? Ra.call(e) : null;
}
function Se(e, t) {
  let r = Sr(e, t);
  return r !== null ? r : JSON.stringify(e, function(n, a) {
    let s = Sr(this[n], t);
    return s !== null ? s : a;
  }, 2);
}
function bn(e) {
  return e == null ? [] : [].concat(e);
}
let xn, vn, wn, ka = /\$\{\s*(\w+)\s*\}/g;
xn = Symbol.toStringTag;
class _r {
  constructor(t, r, n, a) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[xn] = "Error", this.name = "ValidationError", this.value = r, this.path = n, this.type = a, this.errors = [], this.inner = [], bn(t).forEach((s) => {
      if (le.isError(s)) {
        this.errors.push(...s.errors);
        const i = s.inner.length ? s.inner : [s];
        this.inner.push(...i);
      } else
        this.errors.push(s);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
vn = Symbol.hasInstance;
wn = Symbol.toStringTag;
class le extends Error {
  static formatError(t, r) {
    const n = r.label || r.path || "this";
    return r = Object.assign({}, r, {
      path: n,
      originalPath: r.path
    }), typeof t == "string" ? t.replace(ka, (a, s) => Se(r[s])) : typeof t == "function" ? t(r) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, r, n, a, s) {
    const i = new _r(t, r, n, a);
    if (s)
      return i;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[wn] = "Error", this.name = i.name, this.message = i.message, this.type = i.type, this.value = i.value, this.path = i.path, this.errors = i.errors, this.inner = i.inner, Error.captureStackTrace && Error.captureStackTrace(this, le);
  }
  static [vn](t) {
    return _r[Symbol.hasInstance](t) || super[Symbol.hasInstance](t);
  }
}
let xe = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  defined: "${path} must be defined",
  notNull: "${path} cannot be null",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path: e,
    type: t,
    value: r,
    originalValue: n
  }) => {
    const a = n != null && n !== r ? ` (cast from the value \`${Se(n, !0)}\`).` : ".";
    return t !== "mixed" ? `${e} must be a \`${t}\` type, but the final value was: \`${Se(r, !0)}\`` + a : `${e} must match the configured type. The validated value was: \`${Se(r, !0)}\`` + a;
  }
}, ce = {
  length: "${path} must be exactly ${length} characters",
  min: "${path} must be at least ${min} characters",
  max: "${path} must be at most ${max} characters",
  matches: '${path} must match the following: "${regex}"',
  email: "${path} must be a valid email",
  url: "${path} must be a valid URL",
  uuid: "${path} must be a valid UUID",
  datetime: "${path} must be a valid ISO date-time",
  datetime_precision: "${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",
  datetime_offset: '${path} must be a valid ISO date-time with UTC "Z" timezone',
  trim: "${path} must be a trimmed string",
  lowercase: "${path} must be a lowercase string",
  uppercase: "${path} must be a upper case string"
}, $e = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, qt = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, La = {
  isValue: "${path} field must be ${value}"
}, vt = {
  noUnknown: "${path} field has unspecified keys: ${unknown}",
  exact: "${path} object contains unknown properties: ${properties}"
}, wt = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, za = {
  notType: (e) => {
    const {
      path: t,
      value: r,
      spec: n
    } = e, a = n.types.length;
    if (Array.isArray(r)) {
      if (r.length < a) return `${t} tuple value has too few items, expected a length of ${a} but got ${r.length} for value: \`${Se(r, !0)}\``;
      if (r.length > a) return `${t} tuple value has too many items, expected a length of ${a} but got ${r.length} for value: \`${Se(r, !0)}\``;
    }
    return le.formatError(xe.notType, e);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: xe,
  string: ce,
  number: $e,
  date: qt,
  object: vt,
  array: wt,
  boolean: La,
  tuple: za
});
const $t = (e) => e && e.__isYupSchema__;
class St {
  static fromOptions(t, r) {
    if (!r.then && !r.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: n,
      then: a,
      otherwise: s
    } = r, i = typeof n == "function" ? n : (...l) => l.every((c) => c === n);
    return new St(t, (l, c) => {
      var u;
      let h = i(...l) ? a : s;
      return (u = h?.(c)) != null ? u : c;
    });
  }
  constructor(t, r) {
    this.fn = void 0, this.refs = t, this.refs = t, this.fn = r;
  }
  resolve(t, r) {
    let n = this.refs.map((s) => (
      // TODO: ? operator here?
      s.getValue(r?.value, r?.parent, r?.context)
    )), a = this.fn(n, t, r);
    if (a === void 0 || // @ts-ignore this can be base
    a === t)
      return t;
    if (!$t(a)) throw new TypeError("conditions must return a schema object");
    return a.resolve(r);
  }
}
const mt = {
  context: "$",
  value: "."
};
class ke {
  constructor(t, r = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string") throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === mt.context, this.isValue = this.key[0] === mt.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? mt.context : this.isValue ? mt.value : "";
    this.path = this.key.slice(n.length), this.getter = this.path && Ie.getter(this.path, !0), this.map = r.map;
  }
  getValue(t, r, n) {
    let a = this.isContext ? n : this.isValue ? t : r;
    return this.getter && (a = this.getter(a || {})), this.map && (a = this.map(a)), a;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */
  cast(t, r) {
    return this.getValue(t, r?.parent, r?.context);
  }
  resolve() {
    return this;
  }
  describe() {
    return {
      type: "ref",
      key: this.key
    };
  }
  toString() {
    return `Ref(${this.key})`;
  }
  static isRef(t) {
    return t && t.__isYupRef;
  }
}
ke.prototype.__isYupRef = !0;
const Ee = (e) => e == null;
function Ye(e) {
  function t({
    value: r,
    path: n = "",
    options: a,
    originalValue: s,
    schema: i
  }, l, c) {
    const {
      name: u,
      test: h,
      params: f,
      message: d,
      skipAbsent: x
    } = e;
    let {
      parent: E,
      context: v,
      abortEarly: S = i.spec.abortEarly,
      disableStackTrace: p = i.spec.disableStackTrace
    } = a;
    const j = {
      value: r,
      parent: E,
      context: v
    };
    function w(D = {}) {
      const ne = jn(Object.assign({
        value: r,
        originalValue: s,
        label: i.spec.label,
        path: D.path || n,
        spec: i.spec,
        disableStackTrace: D.disableStackTrace || p
      }, f, D.params), j), G = new le(le.formatError(D.message || d, ne), r, ne.path, D.type || u, ne.disableStackTrace);
      return G.params = ne, G;
    }
    const y = S ? l : c;
    let g = {
      path: n,
      parent: E,
      type: u,
      from: a.from,
      createError: w,
      resolve(D) {
        return Tn(D, j);
      },
      options: a,
      originalValue: s,
      schema: i
    };
    const _ = (D) => {
      le.isError(D) ? y(D) : D ? c(null) : y(w());
    }, O = (D) => {
      le.isError(D) ? y(D) : l(D);
    };
    if (x && Ee(r))
      return _(!0);
    let W;
    try {
      var Z;
      if (W = h.call(g, r, g), typeof ((Z = W) == null ? void 0 : Z.then) == "function") {
        if (a.sync)
          throw new Error(`Validation test of type: "${g.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(W).then(_, O);
      }
    } catch (D) {
      O(D);
      return;
    }
    _(W);
  }
  return t.OPTIONS = e, t;
}
function jn(e, t) {
  if (!e) return e;
  for (const r of Object.keys(e))
    e[r] = Tn(e[r], t);
  return e;
}
function Tn(e, t) {
  return ke.isRef(e) ? e.getValue(t.value, t.parent, t.context) : e;
}
function Va(e, t, r, n = r) {
  let a, s, i;
  return t ? (Ie.forEach(t, (l, c, u) => {
    let h = c ? l.slice(1, l.length - 1) : l;
    e = e.resolve({
      context: n,
      parent: a,
      value: r
    });
    let f = e.type === "tuple", d = u ? parseInt(h, 10) : 0;
    if (e.innerType || f) {
      if (f && !u) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${i}" must contain an index to the tuple element, e.g. "${i}[0]"`);
      if (r && d >= r.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${l}, in the path: ${t}. because there is no value at that index. `);
      a = r, r = r && r[d], e = f ? e.spec.types[d] : e.innerType;
    }
    if (!u) {
      if (!e.fields || !e.fields[h]) throw new Error(`The schema does not contain the path: ${t}. (failed at: ${i} which is a type: "${e.type}")`);
      a = r, r = r && r[h], e = e.fields[h];
    }
    s = h, i = c ? "[" + l + "]" : "." + l;
  }), {
    schema: e,
    parent: a,
    parentPath: s
  }) : {
    parent: a,
    parentPath: t,
    schema: e
  };
}
class _t extends Set {
  describe() {
    const t = [];
    for (const r of this.values())
      t.push(ke.isRef(r) ? r.describe() : r);
    return t;
  }
  resolveAll(t) {
    let r = [];
    for (const n of this.values())
      r.push(t(n));
    return r;
  }
  clone() {
    return new _t(this.values());
  }
  merge(t, r) {
    const n = this.clone();
    return t.forEach((a) => n.add(a)), r.forEach((a) => n.delete(a)), n;
  }
}
function Ke(e, t = /* @__PURE__ */ new Map()) {
  if ($t(e) || !e || typeof e != "object") return e;
  if (t.has(e)) return t.get(e);
  let r;
  if (e instanceof Date)
    r = new Date(e.getTime()), t.set(e, r);
  else if (e instanceof RegExp)
    r = new RegExp(e), t.set(e, r);
  else if (Array.isArray(e)) {
    r = new Array(e.length), t.set(e, r);
    for (let n = 0; n < e.length; n++) r[n] = Ke(e[n], t);
  } else if (e instanceof Map) {
    r = /* @__PURE__ */ new Map(), t.set(e, r);
    for (const [n, a] of e.entries()) r.set(n, Ke(a, t));
  } else if (e instanceof Set) {
    r = /* @__PURE__ */ new Set(), t.set(e, r);
    for (const n of e) r.add(Ke(n, t));
  } else if (e instanceof Object) {
    r = {}, t.set(e, r);
    for (const [n, a] of Object.entries(e)) r[n] = Ke(a, t);
  } else
    throw Error(`Unable to clone ${e}`);
  return r;
}
function Ba(e) {
  if (!(e != null && e.length))
    return;
  const t = [];
  let r = "", n = !1, a = !1;
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    if (i === "[" && !a) {
      r && (t.push(...r.split(".").filter(Boolean)), r = ""), n = !0;
      continue;
    }
    if (i === "]" && !a) {
      r && (/^\d+$/.test(r) ? t.push(r) : t.push(r.replace(/^"|"$/g, "")), r = ""), n = !1;
      continue;
    }
    if (i === '"') {
      a = !a;
      continue;
    }
    if (i === "." && !n && !a) {
      r && (t.push(r), r = "");
      continue;
    }
    r += i;
  }
  return r && t.push(...r.split(".").filter(Boolean)), t;
}
function Ua(e, t) {
  const r = t ? `${t}.${e.path}` : e.path;
  return e.errors.map((n) => ({
    message: n,
    path: Ba(r)
  }));
}
function En(e, t) {
  var r;
  if (!((r = e.inner) != null && r.length) && e.errors.length)
    return Ua(e, t);
  const n = t ? `${t}.${e.path}` : e.path;
  return e.inner.flatMap((a) => En(a, n));
}
class he {
  constructor(t) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new _t(), this._blacklist = new _t(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(xe.notType);
    }), this.type = t.type, this._typeCheck = t.check, this.spec = Object.assign({
      strip: !1,
      strict: !1,
      abortEarly: !0,
      recursive: !0,
      disableStackTrace: !1,
      nullable: !1,
      optional: !0,
      coerce: !0
    }, t?.spec), this.withMutation((r) => {
      r.nonNullable();
    });
  }
  // TODO: remove
  get _type() {
    return this.type;
  }
  clone(t) {
    if (this._mutate)
      return t && Object.assign(this.spec, t), this;
    const r = Object.create(Object.getPrototypeOf(this));
    return r.type = this.type, r._typeCheck = this._typeCheck, r._whitelist = this._whitelist.clone(), r._blacklist = this._blacklist.clone(), r.internalTests = Object.assign({}, this.internalTests), r.exclusiveTests = Object.assign({}, this.exclusiveTests), r.deps = [...this.deps], r.conditions = [...this.conditions], r.tests = [...this.tests], r.transforms = [...this.transforms], r.spec = Ke(Object.assign({}, this.spec, t)), r;
  }
  label(t) {
    let r = this.clone();
    return r.spec.label = t, r;
  }
  meta(...t) {
    if (t.length === 0) return this.spec.meta;
    let r = this.clone();
    return r.spec.meta = Object.assign(r.spec.meta || {}, t[0]), r;
  }
  withMutation(t) {
    let r = this._mutate;
    this._mutate = !0;
    let n = t(this);
    return this._mutate = r, n;
  }
  concat(t) {
    if (!t || t === this) return this;
    if (t.type !== this.type && this.type !== "mixed") throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);
    let r = this, n = t.clone();
    const a = Object.assign({}, r.spec, n.spec);
    return n.spec = a, n.internalTests = Object.assign({}, r.internalTests, n.internalTests), n._whitelist = r._whitelist.merge(t._whitelist, t._blacklist), n._blacklist = r._blacklist.merge(t._blacklist, t._whitelist), n.tests = r.tests, n.exclusiveTests = r.exclusiveTests, n.withMutation((s) => {
      t.tests.forEach((i) => {
        s.test(i.OPTIONS);
      });
    }), n.transforms = [...r.transforms, ...n.transforms], n;
  }
  isType(t) {
    return t == null ? !!(this.spec.nullable && t === null || this.spec.optional && t === void 0) : this._typeCheck(t);
  }
  resolve(t) {
    let r = this;
    if (r.conditions.length) {
      let n = r.conditions;
      r = r.clone(), r.conditions = [], r = n.reduce((a, s) => s.resolve(a, t), r), r = r.resolve(t);
    }
    return r;
  }
  resolveOptions(t) {
    var r, n, a, s;
    return Object.assign({}, t, {
      from: t.from || [],
      strict: (r = t.strict) != null ? r : this.spec.strict,
      abortEarly: (n = t.abortEarly) != null ? n : this.spec.abortEarly,
      recursive: (a = t.recursive) != null ? a : this.spec.recursive,
      disableStackTrace: (s = t.disableStackTrace) != null ? s : this.spec.disableStackTrace
    });
  }
  /**
   * Run the configured transform pipeline over an input value.
   */
  cast(t, r = {}) {
    let n = this.resolve(Object.assign({}, r, {
      value: t
      // parent: options.parent,
      // context: options.context,
    })), a = r.assert === "ignore-optionality", s = n._cast(t, r);
    if (r.assert !== !1 && !n.isType(s)) {
      if (a && Ee(s))
        return s;
      let i = Se(t), l = Se(s);
      throw new TypeError(`The value of ${r.path || "field"} could not be cast to a value that satisfies the schema type: "${n.type}". 

attempted value: ${i} 
` + (l !== i ? `result of cast: ${l}` : ""));
    }
    return s;
  }
  _cast(t, r) {
    let n = t === void 0 ? t : this.transforms.reduce((a, s) => s.call(this, a, t, this, r), t);
    return n === void 0 && (n = this.getDefault(r)), n;
  }
  _validate(t, r = {}, n, a) {
    let {
      path: s,
      originalValue: i = t,
      strict: l = this.spec.strict
    } = r, c = t;
    l || (c = this._cast(c, Object.assign({
      assert: !1
    }, r)));
    let u = [];
    for (let h of Object.values(this.internalTests))
      h && u.push(h);
    this.runTests({
      path: s,
      value: c,
      originalValue: i,
      options: r,
      tests: u
    }, n, (h) => {
      if (h.length)
        return a(h, c);
      this.runTests({
        path: s,
        value: c,
        originalValue: i,
        options: r,
        tests: this.tests
      }, n, a);
    });
  }
  /**
   * Executes a set of validations, either schema, produced Tests or a nested
   * schema validate result.
   */
  runTests(t, r, n) {
    let a = !1, {
      tests: s,
      value: i,
      originalValue: l,
      path: c,
      options: u
    } = t, h = (v) => {
      a || (a = !0, r(v, i));
    }, f = (v) => {
      a || (a = !0, n(v, i));
    }, d = s.length, x = [];
    if (!d) return f([]);
    let E = {
      value: i,
      originalValue: l,
      path: c,
      options: u,
      schema: this
    };
    for (let v = 0; v < s.length; v++) {
      const S = s[v];
      S(E, h, function(j) {
        j && (Array.isArray(j) ? x.push(...j) : x.push(j)), --d <= 0 && f(x);
      });
    }
  }
  asNestedTest({
    key: t,
    index: r,
    parent: n,
    parentPath: a,
    originalParent: s,
    options: i
  }) {
    const l = t ?? r;
    if (l == null)
      throw TypeError("Must include `key` or `index` for nested validations");
    const c = typeof l == "number";
    let u = n[l];
    const h = Object.assign({}, i, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: !0,
      parent: n,
      value: u,
      originalValue: s[l],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [c ? "index" : "key"]: l,
      path: c || l.includes(".") ? `${a || ""}[${c ? l : `"${l}"`}]` : (a ? `${a}.` : "") + t
    });
    return (f, d, x) => this.resolve(h)._validate(u, h, d, x);
  }
  validate(t, r) {
    var n;
    let a = this.resolve(Object.assign({}, r, {
      value: t
    })), s = (n = r?.disableStackTrace) != null ? n : a.spec.disableStackTrace;
    return new Promise((i, l) => a._validate(t, r, (c, u) => {
      le.isError(c) && (c.value = u), l(c);
    }, (c, u) => {
      c.length ? l(new le(c, u, void 0, void 0, s)) : i(u);
    }));
  }
  validateSync(t, r) {
    var n;
    let a = this.resolve(Object.assign({}, r, {
      value: t
    })), s, i = (n = r?.disableStackTrace) != null ? n : a.spec.disableStackTrace;
    return a._validate(t, Object.assign({}, r, {
      sync: !0
    }), (l, c) => {
      throw le.isError(l) && (l.value = c), l;
    }, (l, c) => {
      if (l.length) throw new le(l, t, void 0, void 0, i);
      s = c;
    }), s;
  }
  isValid(t, r) {
    return this.validate(t, r).then(() => !0, (n) => {
      if (le.isError(n)) return !1;
      throw n;
    });
  }
  isValidSync(t, r) {
    try {
      return this.validateSync(t, r), !0;
    } catch (n) {
      if (le.isError(n)) return !1;
      throw n;
    }
  }
  _getDefault(t) {
    let r = this.spec.default;
    return r == null ? r : typeof r == "function" ? r.call(this, t) : Ke(r);
  }
  getDefault(t) {
    return this.resolve(t || {})._getDefault(t);
  }
  default(t) {
    return arguments.length === 0 ? this._getDefault() : this.clone({
      default: t
    });
  }
  strict(t = !0) {
    return this.clone({
      strict: t
    });
  }
  nullability(t, r) {
    const n = this.clone({
      nullable: t
    });
    return n.internalTests.nullable = Ye({
      message: r,
      name: "nullable",
      test(a) {
        return a === null ? this.schema.spec.nullable : !0;
      }
    }), n;
  }
  optionality(t, r) {
    const n = this.clone({
      optional: t
    });
    return n.internalTests.optionality = Ye({
      message: r,
      name: "optionality",
      test(a) {
        return a === void 0 ? this.schema.spec.optional : !0;
      }
    }), n;
  }
  optional() {
    return this.optionality(!0);
  }
  defined(t = xe.defined) {
    return this.optionality(!1, t);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(t = xe.notNull) {
    return this.nullability(!1, t);
  }
  required(t = xe.required) {
    return this.clone().withMutation((r) => r.nonNullable(t).defined(t));
  }
  notRequired() {
    return this.clone().withMutation((t) => t.nullable().optional());
  }
  transform(t) {
    let r = this.clone();
    return r.transforms.push(t), r;
  }
  /**
   * Adds a test function to the schema's queue of tests.
   * tests can be exclusive or non-exclusive.
   *
   * - exclusive tests, will replace any existing tests of the same name.
   * - non-exclusive: can be stacked
   *
   * If a non-exclusive test is added to a schema with an exclusive test of the same name
   * the exclusive test is removed and further tests of the same name will be stacked.
   *
   * If an exclusive test is added to a schema with non-exclusive tests of the same name
   * the previous tests are removed and further tests of the same name will replace each other.
   */
  test(...t) {
    let r;
    if (t.length === 1 ? typeof t[0] == "function" ? r = {
      test: t[0]
    } : r = t[0] : t.length === 2 ? r = {
      name: t[0],
      test: t[1]
    } : r = {
      name: t[0],
      message: t[1],
      test: t[2]
    }, r.message === void 0 && (r.message = xe.default), typeof r.test != "function") throw new TypeError("`test` is a required parameters");
    let n = this.clone(), a = Ye(r), s = r.exclusive || r.name && n.exclusiveTests[r.name] === !0;
    if (r.exclusive && !r.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return r.name && (n.exclusiveTests[r.name] = !!r.exclusive), n.tests = n.tests.filter((i) => !(i.OPTIONS.name === r.name && (s || i.OPTIONS.test === a.OPTIONS.test))), n.tests.push(a), n;
  }
  when(t, r) {
    !Array.isArray(t) && typeof t != "string" && (r = t, t = ".");
    let n = this.clone(), a = bn(t).map((s) => new ke(s));
    return a.forEach((s) => {
      s.isSibling && n.deps.push(s.key);
    }), n.conditions.push(typeof r == "function" ? new St(a, r) : St.fromOptions(a, r)), n;
  }
  typeError(t) {
    let r = this.clone();
    return r.internalTests.typeError = Ye({
      message: t,
      name: "typeError",
      skipAbsent: !0,
      test(n) {
        return this.schema._typeCheck(n) ? !0 : this.createError({
          params: {
            type: this.schema.type
          }
        });
      }
    }), r;
  }
  oneOf(t, r = xe.oneOf) {
    let n = this.clone();
    return t.forEach((a) => {
      n._whitelist.add(a), n._blacklist.delete(a);
    }), n.internalTests.whiteList = Ye({
      message: r,
      name: "oneOf",
      skipAbsent: !0,
      test(a) {
        let s = this.schema._whitelist, i = s.resolveAll(this.resolve);
        return i.includes(a) ? !0 : this.createError({
          params: {
            values: Array.from(s).join(", "),
            resolved: i
          }
        });
      }
    }), n;
  }
  notOneOf(t, r = xe.notOneOf) {
    let n = this.clone();
    return t.forEach((a) => {
      n._blacklist.add(a), n._whitelist.delete(a);
    }), n.internalTests.blacklist = Ye({
      message: r,
      name: "notOneOf",
      test(a) {
        let s = this.schema._blacklist, i = s.resolveAll(this.resolve);
        return i.includes(a) ? this.createError({
          params: {
            values: Array.from(s).join(", "),
            resolved: i
          }
        }) : !0;
      }
    }), n;
  }
  strip(t = !0) {
    let r = this.clone();
    return r.spec.strip = t, r;
  }
  /**
   * Return a serialized description of the schema including validations, flags, types etc.
   *
   * @param options Provide any needed context for resolving runtime schema alterations (lazy, when conditions, etc).
   */
  describe(t) {
    const r = (t ? this.resolve(t) : this).clone(), {
      label: n,
      meta: a,
      optional: s,
      nullable: i
    } = r.spec;
    return {
      meta: a,
      label: n,
      optional: s,
      nullable: i,
      default: r.getDefault(t),
      type: r.type,
      oneOf: r._whitelist.describe(),
      notOneOf: r._blacklist.describe(),
      tests: r.tests.filter((c, u, h) => h.findIndex((f) => f.OPTIONS.name === c.OPTIONS.name) === u).map((c) => {
        const u = c.OPTIONS.params && t ? jn(Object.assign({}, c.OPTIONS.params), t) : c.OPTIONS.params;
        return {
          name: c.OPTIONS.name,
          params: u
        };
      })
    };
  }
  get "~standard"() {
    const t = this;
    return {
      version: 1,
      vendor: "yup",
      async validate(n) {
        try {
          return {
            value: await t.validate(n, {
              abortEarly: !1
            })
          };
        } catch (a) {
          if (a instanceof le)
            return {
              issues: En(a)
            };
          throw a;
        }
      }
    };
  }
}
he.prototype.__isYupSchema__ = !0;
for (const e of ["validate", "validateSync"]) he.prototype[`${e}At`] = function(t, r, n = {}) {
  const {
    parent: a,
    parentPath: s,
    schema: i
  } = Va(this, t, r, n.context);
  return i[e](a && a[s], Object.assign({}, n, {
    parent: a,
    path: t
  }));
};
for (const e of ["equals", "is"]) he.prototype[e] = he.prototype.oneOf;
for (const e of ["not", "nope"]) he.prototype[e] = he.prototype.notOneOf;
const Ga = () => !0;
function Zt(e) {
  return new Sn(e);
}
class Sn extends he {
  constructor(t) {
    super(typeof t == "function" ? {
      type: "mixed",
      check: t
    } : Object.assign({
      type: "mixed",
      check: Ga
    }, t));
  }
}
Zt.prototype = Sn.prototype;
const Ya = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function Ka(e) {
  const t = Qt(e);
  if (!t) return Date.parse ? Date.parse(e) : Number.NaN;
  if (t.z === void 0 && t.plusMinus === void 0)
    return new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond).valueOf();
  let r = 0;
  return t.z !== "Z" && t.plusMinus !== void 0 && (r = t.hourOffset * 60 + t.minuteOffset, t.plusMinus === "+" && (r = 0 - r)), Date.UTC(t.year, t.month, t.day, t.hour, t.minute + r, t.second, t.millisecond);
}
function Qt(e) {
  var t, r;
  const n = Ya.exec(e);
  return n ? {
    year: je(n[1]),
    month: je(n[2], 1) - 1,
    day: je(n[3], 1),
    hour: je(n[4]),
    minute: je(n[5]),
    second: je(n[6]),
    millisecond: n[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      je(n[7].substring(0, 3))
    ) : 0,
    precision: (t = (r = n[7]) == null ? void 0 : r.length) != null ? t : void 0,
    z: n[8] || void 0,
    plusMinus: n[9] || void 0,
    hourOffset: je(n[10]),
    minuteOffset: je(n[11])
  } : null;
}
function je(e, t = 0) {
  return Number(e) || t;
}
let Ha = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), Wa = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), qa = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, Za = "^\\d{4}-\\d{2}-\\d{2}", Qa = "\\d{2}:\\d{2}:\\d{2}", Xa = "(([+-]\\d{2}(:?\\d{2})?)|Z)", Ja = new RegExp(`${Za}T${Qa}(\\.\\d+)?${Xa}$`), es = (e) => Ee(e) || e === e.trim(), ts = {}.toString();
function Je() {
  return new _n();
}
class _n extends he {
  constructor() {
    super({
      type: "string",
      check(t) {
        return t instanceof String && (t = t.valueOf()), typeof t == "string";
      }
    }), this.withMutation(() => {
      this.transform((t, r) => {
        if (!this.spec.coerce || this.isType(t) || Array.isArray(t)) return t;
        const n = t != null && t.toString ? t.toString() : t;
        return n === ts ? t : n;
      });
    });
  }
  required(t) {
    return super.required(t).withMutation((r) => r.test({
      message: t || xe.required,
      name: "required",
      skipAbsent: !0,
      test: (n) => !!n.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation((t) => (t.tests = t.tests.filter((r) => r.OPTIONS.name !== "required"), t));
  }
  length(t, r = ce.length) {
    return this.test({
      message: r,
      name: "length",
      exclusive: !0,
      params: {
        length: t
      },
      skipAbsent: !0,
      test(n) {
        return n.length === this.resolve(t);
      }
    });
  }
  min(t, r = ce.min) {
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      skipAbsent: !0,
      test(n) {
        return n.length >= this.resolve(t);
      }
    });
  }
  max(t, r = ce.max) {
    return this.test({
      name: "max",
      exclusive: !0,
      message: r,
      params: {
        max: t
      },
      skipAbsent: !0,
      test(n) {
        return n.length <= this.resolve(t);
      }
    });
  }
  matches(t, r) {
    let n = !1, a, s;
    return r && (typeof r == "object" ? {
      excludeEmptyString: n = !1,
      message: a,
      name: s
    } = r : a = r), this.test({
      name: s || "matches",
      message: a || ce.matches,
      params: {
        regex: t
      },
      skipAbsent: !0,
      test: (i) => i === "" && n || i.search(t) !== -1
    });
  }
  email(t = ce.email) {
    return this.matches(Ha, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = ce.url) {
    return this.matches(Wa, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = ce.uuid) {
    return this.matches(qa, {
      name: "uuid",
      message: t,
      excludeEmptyString: !1
    });
  }
  datetime(t) {
    let r = "", n, a;
    return t && (typeof t == "object" ? {
      message: r = "",
      allowOffset: n = !1,
      precision: a = void 0
    } = t : r = t), this.matches(Ja, {
      name: "datetime",
      message: r || ce.datetime,
      excludeEmptyString: !0
    }).test({
      name: "datetime_offset",
      message: r || ce.datetime_offset,
      params: {
        allowOffset: n
      },
      skipAbsent: !0,
      test: (s) => {
        if (!s || n) return !0;
        const i = Qt(s);
        return i ? !!i.z : !1;
      }
    }).test({
      name: "datetime_precision",
      message: r || ce.datetime_precision,
      params: {
        precision: a
      },
      skipAbsent: !0,
      test: (s) => {
        if (!s || a == null) return !0;
        const i = Qt(s);
        return i ? i.precision === a : !1;
      }
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((t) => t === null ? "" : t);
  }
  trim(t = ce.trim) {
    return this.transform((r) => r != null ? r.trim() : r).test({
      message: t,
      name: "trim",
      test: es
    });
  }
  lowercase(t = ce.lowercase) {
    return this.transform((r) => Ee(r) ? r : r.toLowerCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (r) => Ee(r) || r === r.toLowerCase()
    });
  }
  uppercase(t = ce.uppercase) {
    return this.transform((r) => Ee(r) ? r : r.toUpperCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (r) => Ee(r) || r === r.toUpperCase()
    });
  }
}
Je.prototype = _n.prototype;
let rs = (e) => e != +e;
function jt() {
  return new Nn();
}
class Nn extends he {
  constructor() {
    super({
      type: "number",
      check(t) {
        return t instanceof Number && (t = t.valueOf()), typeof t == "number" && !rs(t);
      }
    }), this.withMutation(() => {
      this.transform((t, r) => {
        if (!this.spec.coerce) return t;
        let n = t;
        if (typeof n == "string") {
          if (n = n.replace(/\s/g, ""), n === "") return NaN;
          n = +n;
        }
        return this.isType(n) || n === null ? n : parseFloat(n);
      });
    });
  }
  min(t, r = $e.min) {
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      skipAbsent: !0,
      test(n) {
        return n >= this.resolve(t);
      }
    });
  }
  max(t, r = $e.max) {
    return this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        max: t
      },
      skipAbsent: !0,
      test(n) {
        return n <= this.resolve(t);
      }
    });
  }
  lessThan(t, r = $e.lessThan) {
    return this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        less: t
      },
      skipAbsent: !0,
      test(n) {
        return n < this.resolve(t);
      }
    });
  }
  moreThan(t, r = $e.moreThan) {
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        more: t
      },
      skipAbsent: !0,
      test(n) {
        return n > this.resolve(t);
      }
    });
  }
  positive(t = $e.positive) {
    return this.moreThan(0, t);
  }
  negative(t = $e.negative) {
    return this.lessThan(0, t);
  }
  integer(t = $e.integer) {
    return this.test({
      name: "integer",
      message: t,
      skipAbsent: !0,
      test: (r) => Number.isInteger(r)
    });
  }
  truncate() {
    return this.transform((t) => Ee(t) ? t : t | 0);
  }
  round(t) {
    var r;
    let n = ["ceil", "floor", "round", "trunc"];
    if (t = ((r = t) == null ? void 0 : r.toLowerCase()) || "round", t === "trunc") return this.truncate();
    if (n.indexOf(t.toLowerCase()) === -1) throw new TypeError("Only valid options for round() are: " + n.join(", "));
    return this.transform((a) => Ee(a) ? a : Math[t](a));
  }
}
jt.prototype = Nn.prototype;
let $n = /* @__PURE__ */ new Date(""), ns = (e) => Object.prototype.toString.call(e) === "[object Date]";
function ir() {
  return new it();
}
class it extends he {
  constructor() {
    super({
      type: "date",
      check(t) {
        return ns(t) && !isNaN(t.getTime());
      }
    }), this.withMutation(() => {
      this.transform((t, r) => !this.spec.coerce || this.isType(t) || t === null ? t : (t = Ka(t), isNaN(t) ? it.INVALID_DATE : new Date(t)));
    });
  }
  prepareParam(t, r) {
    let n;
    if (ke.isRef(t))
      n = t;
    else {
      let a = this.cast(t);
      if (!this._typeCheck(a)) throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);
      n = a;
    }
    return n;
  }
  min(t, r = qt.min) {
    let n = this.prepareParam(t, "min");
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      skipAbsent: !0,
      test(a) {
        return a >= this.resolve(n);
      }
    });
  }
  max(t, r = qt.max) {
    let n = this.prepareParam(t, "max");
    return this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        max: t
      },
      skipAbsent: !0,
      test(a) {
        return a <= this.resolve(n);
      }
    });
  }
}
it.INVALID_DATE = $n;
ir.prototype = it.prototype;
ir.INVALID_DATE = $n;
function as(e, t = []) {
  let r = [], n = /* @__PURE__ */ new Set(), a = new Set(t.map(([i, l]) => `${i}-${l}`));
  function s(i, l) {
    let c = Ie.split(i)[0];
    n.add(c), a.has(`${l}-${c}`) || r.push([l, c]);
  }
  for (const i of Object.keys(e)) {
    let l = e[i];
    n.add(i), ke.isRef(l) && l.isSibling ? s(l.path, i) : $t(l) && "deps" in l && l.deps.forEach((c) => s(c, i));
  }
  return Fa.array(Array.from(n), r).reverse();
}
function Nr(e, t) {
  let r = 1 / 0;
  return e.some((n, a) => {
    var s;
    if ((s = t.path) != null && s.includes(n))
      return r = a, !0;
  }), r;
}
function An(e) {
  return (t, r) => Nr(e, t) - Nr(e, r);
}
const On = (e, t, r) => {
  if (typeof e != "string")
    return e;
  let n = e;
  try {
    n = JSON.parse(e);
  } catch {
  }
  return r.isType(n) ? n : e;
};
function Tt(e) {
  if ("fields" in e) {
    const t = {};
    for (const [r, n] of Object.entries(e.fields))
      t[r] = Tt(n);
    return e.setFields(t);
  }
  if (e.type === "array") {
    const t = e.optional();
    return t.innerType && (t.innerType = Tt(t.innerType)), t;
  }
  return e.type === "tuple" ? e.optional().clone({
    types: e.spec.types.map(Tt)
  }) : "optional" in e ? e.optional() : e;
}
const ss = (e, t) => {
  const r = [...Ie.normalizePath(t)];
  if (r.length === 1) return r[0] in e;
  let n = r.pop(), a = Ie.getter(Ie.join(r), !0)(e);
  return !!(a && n in a);
};
let $r = (e) => Object.prototype.toString.call(e) === "[object Object]";
function Ar(e, t) {
  let r = Object.keys(e.fields);
  return Object.keys(t).filter((n) => r.indexOf(n) === -1);
}
const is = An([]);
function Fn(e) {
  return new Cn(e);
}
class Cn extends he {
  constructor(t) {
    super({
      type: "object",
      check(r) {
        return $r(r) || typeof r == "function";
      }
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = is, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      t && this.shape(t);
    });
  }
  _cast(t, r = {}) {
    var n;
    let a = super._cast(t, r);
    if (a === void 0) return this.getDefault(r);
    if (!this._typeCheck(a)) return a;
    let s = this.fields, i = (n = r.stripUnknown) != null ? n : this.spec.noUnknown, l = [].concat(this._nodes, Object.keys(a).filter((f) => !this._nodes.includes(f))), c = {}, u = Object.assign({}, r, {
      parent: c,
      __validating: r.__validating || !1
    }), h = !1;
    for (const f of l) {
      let d = s[f], x = f in a, E = a[f];
      if (d) {
        let v;
        u.path = (r.path ? `${r.path}.` : "") + f, d = d.resolve({
          value: E,
          context: r.context,
          parent: c
        });
        let S = d instanceof he ? d.spec : void 0, p = S?.strict;
        if (S != null && S.strip) {
          h = h || f in a;
          continue;
        }
        v = !r.__validating || !p ? d.cast(E, u) : E, v !== void 0 && (c[f] = v);
      } else x && !i && (c[f] = E);
      (x !== f in c || c[f] !== E) && (h = !0);
    }
    return h ? c : a;
  }
  _validate(t, r = {}, n, a) {
    let {
      from: s = [],
      originalValue: i = t,
      recursive: l = this.spec.recursive
    } = r;
    r.from = [{
      schema: this,
      value: i
    }, ...s], r.__validating = !0, r.originalValue = i, super._validate(t, r, n, (c, u) => {
      if (!l || !$r(u)) {
        a(c, u);
        return;
      }
      i = i || u;
      let h = [];
      for (let f of this._nodes) {
        let d = this.fields[f];
        !d || ke.isRef(d) || h.push(d.asNestedTest({
          options: r,
          key: f,
          parent: u,
          parentPath: r.path,
          originalParent: i
        }));
      }
      this.runTests({
        tests: h,
        value: u,
        originalValue: i,
        options: r
      }, n, (f) => {
        a(f.sort(this._sortErrors).concat(c), u);
      });
    });
  }
  clone(t) {
    const r = super.clone(t);
    return r.fields = Object.assign({}, this.fields), r._nodes = this._nodes, r._excludedEdges = this._excludedEdges, r._sortErrors = this._sortErrors, r;
  }
  concat(t) {
    let r = super.concat(t), n = r.fields;
    for (let [a, s] of Object.entries(this.fields)) {
      const i = n[a];
      n[a] = i === void 0 ? s : i;
    }
    return r.withMutation((a) => (
      // XXX: excludes here is wrong
      a.setFields(n, [...this._excludedEdges, ...t._excludedEdges])
    ));
  }
  _getDefault(t) {
    if ("default" in this.spec)
      return super._getDefault(t);
    if (!this._nodes.length)
      return;
    let r = {};
    return this._nodes.forEach((n) => {
      var a;
      const s = this.fields[n];
      let i = t;
      (a = i) != null && a.value && (i = Object.assign({}, i, {
        parent: i.value,
        value: i.value[n]
      })), r[n] = s && "getDefault" in s ? s.getDefault(i) : void 0;
    }), r;
  }
  setFields(t, r) {
    let n = this.clone();
    return n.fields = t, n._nodes = as(t, r), n._sortErrors = An(Object.keys(t)), r && (n._excludedEdges = r), n;
  }
  shape(t, r = []) {
    return this.clone().withMutation((n) => {
      let a = n._excludedEdges;
      return r.length && (Array.isArray(r[0]) || (r = [r]), a = [...n._excludedEdges, ...r]), n.setFields(Object.assign(n.fields, t), a);
    });
  }
  partial() {
    const t = {};
    for (const [r, n] of Object.entries(this.fields))
      t[r] = "optional" in n && n.optional instanceof Function ? n.optional() : n;
    return this.setFields(t);
  }
  deepPartial() {
    return Tt(this);
  }
  pick(t) {
    const r = {};
    for (const n of t)
      this.fields[n] && (r[n] = this.fields[n]);
    return this.setFields(r, this._excludedEdges.filter(([n, a]) => t.includes(n) && t.includes(a)));
  }
  omit(t) {
    const r = [];
    for (const n of Object.keys(this.fields))
      t.includes(n) || r.push(n);
    return this.pick(r);
  }
  from(t, r, n) {
    let a = Ie.getter(t, !0);
    return this.transform((s) => {
      if (!s) return s;
      let i = s;
      return ss(s, t) && (i = Object.assign({}, s), n || delete i[t], i[r] = a(s)), i;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(On);
  }
  /**
   * Similar to `noUnknown` but only validates that an object is the right shape without stripping the unknown keys
   */
  exact(t) {
    return this.test({
      name: "exact",
      exclusive: !0,
      message: t || vt.exact,
      test(r) {
        if (r == null) return !0;
        const n = Ar(this.schema, r);
        return n.length === 0 || this.createError({
          params: {
            properties: n.join(", ")
          }
        });
      }
    });
  }
  stripUnknown() {
    return this.clone({
      noUnknown: !0
    });
  }
  noUnknown(t = !0, r = vt.noUnknown) {
    typeof t != "boolean" && (r = t, t = !0);
    let n = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: r,
      test(a) {
        if (a == null) return !0;
        const s = Ar(this.schema, a);
        return !t || s.length === 0 || this.createError({
          params: {
            unknown: s.join(", ")
          }
        });
      }
    });
    return n.spec.noUnknown = t, n;
  }
  unknown(t = !0, r = vt.noUnknown) {
    return this.noUnknown(!t, r);
  }
  transformKeys(t) {
    return this.transform((r) => {
      if (!r) return r;
      const n = {};
      for (const a of Object.keys(r)) n[t(a)] = r[a];
      return n;
    });
  }
  camelCase() {
    return this.transformKeys(Lt.camelCase);
  }
  snakeCase() {
    return this.transformKeys(Lt.snakeCase);
  }
  constantCase() {
    return this.transformKeys((t) => Lt.snakeCase(t).toUpperCase());
  }
  describe(t) {
    const r = (t ? this.resolve(t) : this).clone(), n = super.describe(t);
    n.fields = {};
    for (const [s, i] of Object.entries(r.fields)) {
      var a;
      let l = t;
      (a = l) != null && a.value && (l = Object.assign({}, l, {
        parent: l.value,
        value: l.value[s]
      })), n.fields[s] = i.describe(l);
    }
    return n;
  }
}
Fn.prototype = Cn.prototype;
function Xt(e) {
  return new Pn(e);
}
class Pn extends he {
  constructor(t) {
    super({
      type: "array",
      spec: {
        types: t
      },
      check(r) {
        return Array.isArray(r);
      }
    }), this.innerType = void 0, this.innerType = t;
  }
  _cast(t, r) {
    const n = super._cast(t, r);
    if (!this._typeCheck(n) || !this.innerType)
      return n;
    let a = !1;
    const s = n.map((i, l) => {
      const c = this.innerType.cast(i, Object.assign({}, r, {
        path: `${r.path || ""}[${l}]`,
        parent: n,
        originalValue: i,
        value: i,
        index: l
      }));
      return c !== i && (a = !0), c;
    });
    return a ? s : n;
  }
  _validate(t, r = {}, n, a) {
    var s;
    let i = this.innerType, l = (s = r.recursive) != null ? s : this.spec.recursive;
    r.originalValue != null && r.originalValue, super._validate(t, r, n, (c, u) => {
      var h;
      if (!l || !i || !this._typeCheck(u)) {
        a(c, u);
        return;
      }
      let f = new Array(u.length);
      for (let x = 0; x < u.length; x++) {
        var d;
        f[x] = i.asNestedTest({
          options: r,
          index: x,
          parent: u,
          parentPath: r.path,
          originalParent: (d = r.originalValue) != null ? d : t
        });
      }
      this.runTests({
        value: u,
        tests: f,
        originalValue: (h = r.originalValue) != null ? h : t,
        options: r
      }, n, (x) => a(x.concat(c), u));
    });
  }
  clone(t) {
    const r = super.clone(t);
    return r.innerType = this.innerType, r;
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(On);
  }
  concat(t) {
    let r = super.concat(t);
    return r.innerType = this.innerType, t.innerType && (r.innerType = r.innerType ? (
      // @ts-expect-error Lazy doesn't have concat and will break
      r.innerType.concat(t.innerType)
    ) : t.innerType), r;
  }
  of(t) {
    let r = this.clone();
    if (!$t(t)) throw new TypeError("`array.of()` sub-schema must be a valid yup schema not: " + Se(t));
    return r.innerType = t, r.spec = Object.assign({}, r.spec, {
      types: t
    }), r;
  }
  length(t, r = wt.length) {
    return this.test({
      message: r,
      name: "length",
      exclusive: !0,
      params: {
        length: t
      },
      skipAbsent: !0,
      test(n) {
        return n.length === this.resolve(t);
      }
    });
  }
  min(t, r) {
    return r = r || wt.min, this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      skipAbsent: !0,
      // FIXME(ts): Array<typeof T>
      test(n) {
        return n.length >= this.resolve(t);
      }
    });
  }
  max(t, r) {
    return r = r || wt.max, this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        max: t
      },
      skipAbsent: !0,
      test(n) {
        return n.length <= this.resolve(t);
      }
    });
  }
  ensure() {
    return this.default(() => []).transform((t, r) => this._typeCheck(t) ? t : r == null ? [] : [].concat(r));
  }
  compact(t) {
    let r = t ? (n, a, s) => !t(n, a, s) : (n) => !!n;
    return this.transform((n) => n != null ? n.filter(r) : n);
  }
  describe(t) {
    const r = (t ? this.resolve(t) : this).clone(), n = super.describe(t);
    if (r.innerType) {
      var a;
      let s = t;
      (a = s) != null && a.value && (s = Object.assign({}, s, {
        parent: s.value,
        value: s.value[0]
      })), n.innerType = r.innerType.describe(s);
    }
    return n;
  }
}
Xt.prototype = Pn.prototype;
function os(e) {
  return e.template ? e.template : "tab";
}
function ls(e) {
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    const a = n.group || "General";
    t[a] || (t[a] = { label: a, type: "fields", fields: [] }), t[a]?.fields?.push({ name: r, ...n });
  }), t;
}
const cs = (e) => Object.entries(e ?? {}).filter(([, t]) => t.type === "geolocation").map(([t]) => t);
async function us() {
  if (!("geolocation" in navigator))
    throw new Error(
      "Geolocation is not supported by this browser. You cannot access this portal."
    );
  try {
    const e = await new Promise(
      (n, a) => {
        navigator.geolocation.getCurrentPosition(n, a, {
          enableHighAccuracy: !1,
          timeout: 3e4,
          maximumAge: 12e4
        });
      }
    ), { latitude: t, longitude: r } = e.coords;
    return `${t},${r}`;
  } catch (e) {
    if (!(e instanceof GeolocationPositionError))
      throw new Error("Failed to get your location.");
    switch (e.code) {
      case e.PERMISSION_DENIED:
        throw new Error("Please allow location access in browser settings.");
      case e.POSITION_UNAVAILABLE:
        throw new Error(
          "Unable to detect your location. Try connecting to Wi-Fi."
        );
      case e.TIMEOUT:
        throw new Error("Your device took too long to fetch GPS position.");
      default:
        throw new Error("Failed to get your location.");
    }
  }
}
function Or(e, t = "create") {
  const r = {};
  return Object.keys(e).forEach((n) => {
    e[n].vmode === "edit" && t === "create" || (r[n] = {
      label: n,
      required: e[n].required ?? !1
    });
  }), r;
}
function ds(e, t = "create") {
  return Object.entries(e).filter(([, r]) => !(r.vmode === "edit" && t === "create")).map(([r, n]) => ({
    ...n,
    name: r
  }));
}
const ot = {
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
function lt(e) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(e) ? e : 6;
}
const fe = (e, t) => typeof e == "string" ? e.replace(
  /#(\w+)#/g,
  (r, n) => t[n] !== void 0 ? String(t[n]) : r
) : Array.isArray(e) ? e.map((r) => fe(r, t)) : e && typeof e == "object" ? Object.fromEntries(
  Object.entries(e).map(([r, n]) => [
    fe(r, t),
    fe(n, t)
  ])
) : e, Rn = (e) => {
  const t = Array.isArray(e?.data?.data) ? e.data.data[0] : Array.isArray(e?.data) ? e.data[0] : e?.data?.data ?? e?.data;
  return t && typeof t == "object" && !Array.isArray(t) ? t : null;
}, Re = (e, t, r, n) => {
  const a = Array.isArray(r?.data?.data) ? r.data.data : Array.isArray(r?.data) ? r.data : r;
  if (!Array.isArray(a) || a.length === 0)
    return {};
  const s = n ?? (a[0] && typeof a[0] == "object" && "category" in a[0] ? "category" : void 0);
  if (!s) {
    const l = {};
    return a.forEach((c) => {
      c[e] != null && c[t] != null && (l[c[e]] = c[t]);
    }), l;
  }
  const i = {};
  return a.forEach((l) => {
    const c = l[s] ?? "Others", u = l[e], h = l[t];
    u == null || h == null || (i[c] || (i[c] = {}), i[c][u] = h);
  }), i;
};
function Fr(e, t) {
  if (!t || Object.keys(t).length === 0) return e;
  if (typeof e == "number")
    return t[String(e)] ?? e;
  if (typeof e == "string") {
    const n = e.split(",").map((a) => a.trim()).map((a) => t[a]).filter(Boolean);
    return n.length ? n.join(", ") : e;
  }
  return e;
}
const fs = (e) => e === !0 || e === "true", hs = (e, t, r, n) => {
  e.forEach((a) => {
    const s = a?.name;
    if (!s) return;
    let i = n?.[s];
    i == null && (i = a.default), a.multiple === !0 || a.type === "checkbox" || a.type === "tags" ? t[s] = Array.isArray(i) ? i : typeof i == "string" ? i.split(",").map((c) => c.trim()).filter(Boolean) : [] : a.type === "json" ? t[s] = typeof i == "object" && i !== null ? JSON.stringify(i, null, 2) : i ?? "" : a.type === "date" ? t[s] = typeof i == "string" ? i.slice(0, 10) : "" : a.type === "time" ? typeof i == "string" ? i.includes("T") ? t[s] = i.slice(11, 16) : t[s] = i.slice(0, 5) : t[s] = "" : s === "blocked" || s === "blacklist" ? t[s] = String(i ?? "false") : t[s] = i ?? "";
    let l;
    a.type === "file" ? l = a.multiple ? Xt().of(Zt()) : Zt() : a.multiple === !0 || a.type === "checkbox" || a.type === "tags" ? l = Xt().of(Je()) : a.type === "email" ? l = Je().email("Invalid email") : a.type === "number" ? l = jt().typeError("Must be a number") : a.type === "json" ? l = Je().test("json", "Invalid JSON", (c) => {
      if (!c) return !0;
      try {
        return JSON.parse(c), !0;
      } catch {
        return !1;
      }
    }) : l = Je(), a.required && (l = l.required(
      a.error_message || `${a.label || s} is required`
    )), a?.validate?.regex && typeof a.validate.regex == "string" && (l = l.matches(
      new RegExp(a?.validate?.regex),
      a?.error_message || "Invalid input format"
    )), a?.validate && Object.entries(a.validate).forEach(([c, u]) => {
      switch (c) {
        case "email":
          u && (l = l.email("Invalid email format"));
          break;
        case "mobile":
          l = l.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          l = l.matches(
            new RegExp(u),
            `Must match pattern: ${u}`
          );
          break;
        case "date":
          l = ir().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((h, f) => {
            if (typeof f == "string") {
              const d = f.replace(/-/g, "/"), [x, E, v] = d.split("/");
              if (x && E && v)
                return /* @__PURE__ */ new Date(`${v}-${E}-${x}`);
            }
            return h;
          });
          break;
        case "time":
          l = l.matches(
            /^([0-1][0-9]|2[0-3])[:\-]([0-5][0-9])$/,
            "Invalid time format (HH:MM)"
          );
          break;
        case "timesec":
          l = l.matches(
            /^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/,
            "Invalid time format (HH:MM:SS)"
          );
          break;
        case "number":
        case "numeric":
          l = jt().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          l = jt().typeError("Must be a decimal").transform((h, f) => {
            if (f == null || f === "") return;
            const d = Number(f);
            if (isNaN(d)) return h;
            if (typeof h == "number" && !isNaN(h)) {
              const x = Number(h);
              return Number.isInteger(x) ? Number(d.toFixed(x)) : d;
            }
            return d;
          });
          break;
        case "alphanumeric":
          l = l.matches(
            /^[a-z0-9]+$/i,
            "Must be alphanumeric"
          );
          break;
        case "alpha":
          l = l.matches(
            /^[a-zA-Z]+$/,
            "Must contain only letters"
          );
          break;
        case "upper":
          l = l.transform(
            (h) => h && h.toUpperCase()
          );
          break;
        case "lower":
          l = l.transform(
            (h) => h && h.toLowerCase()
          );
          break;
        case "length-min": {
          const h = Number(u);
          isNaN(h) || (l = l.min(h, `Minimum length is ${h}`));
          break;
        }
        case "length-max": {
          const h = Number(u);
          isNaN(h) || (l = l.max(h, `Maximum length is ${h}`));
          break;
        }
      }
    }), r[s] = l;
  });
}, Jt = (e) => !e || typeof e != "object" ? !1 : Object.values(e).every(
  (t) => typeof t == "object" && t !== null
);
function ps(e) {
  return typeof e == "object" && e !== null && typeof e.target == "string" && typeof e.src == "object" && e.src !== null && typeof e.src.table == "string";
}
function ms(e) {
  return e.split(",").map((t) => t.trim()).map((t) => {
    const r = t.match(/^(.+?)\s+as\s+.+$/i);
    return r ? r[1]?.trim() : t;
  }).filter((t) => !!t);
}
const Cr = (e, t) => {
  if (!e || t == null) return;
  if (typeof Object.values(e)[0] == "string")
    return e[t];
  for (const n of Object.values(e))
    if (t in n)
      return n[t];
}, ys = (e) => e ? typeof Object.values(e)[0] == "string" ? Object.entries(e) : Object.values(e).flatMap(
  (r) => Object.entries(r)
) : [];
async function yt(e, t, r = {}) {
  try {
    const n = await H({
      method: "POST",
      url: e.baseURL + e.registerQuery,
      data: { query: t },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    });
    return await H({
      method: "POST",
      url: e.baseURL + e.runQuery,
      data: {
        queryid: n.data.queryid,
        filter: r
      },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    });
  } catch (n) {
    throw n;
  }
}
function gs(e) {
  return e ? Jt(e) ? Object.values(e).reduce((t, r) => (Object.assign(t, r), t), {}) : e : {};
}
const In = "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg";
function ct({ field: e, data: t, methods: r = {}, sqlOpsUrls: n, refid: a }) {
  const s = e?.name, i = `
    text-sm text-gray-600 break-words
  `, l = `
    block text-sm font-semibold  transition-all duration-300 text-gray-700 capitalize
  `, [c, u] = re(
    e.options ?? {}
  ), h = ae.useMemo(
    () => gs(c),
    [c]
  );
  ae.useEffect(() => {
    let v = !0;
    return (async () => {
      if (e?.options) {
        u(e.options);
        return;
      }
      const p = e?.source ?? {};
      if (p.type === "method") {
        const j = p.method, w = j ? r[j] : void 0;
        if (w)
          try {
            const y = await Promise.resolve(w());
            v && u(y ?? {});
          } catch (y) {
            console.error("Method execution failed:", y), v && u({});
          }
        else
          v && u({});
      }
      if (p.type === "api" && p.url)
        try {
          const j = await H({
            method: p.method || "GET",
            url: p.url,
            data: p.body ?? {},
            params: p.params ?? {},
            headers: p.headers ?? {}
          }), w = e.valueKey || "value", y = e.labelKey || "title", g = Re(w, y, j);
          v && u(g);
        } catch (j) {
          console.error("API execution failed:", j), v && u({});
        }
      if (e.table || e.type === "dataSelector") {
        if (!n) {
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
          e.where && e.type !== "dataSelector" && (j.where = a ? fe(e.where, { refid: a }) : e.where);
          const w = await H({
            method: "POST",
            url: n.baseURL + n.registerQuery,
            data: { query: j },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }), y = await H({
            method: "POST",
            url: n.baseURL + n.runQuery,
            data: {
              queryid: w.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }), g = e.valueKey || "value", _ = e.labelKey || "title", O = Re(g, _, y);
          v && u(O);
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
    a
  ]);
  const f = typeof s == "string" ? t?.[s] : void 0, d = typeof f == "string" ? e.type === "date" ? f.split("T")[0] : e.type === "time" ? f.includes("T") ? f.slice(11, 16) : f.slice(0, 5) : Fr(f, h) : Fr(f, h), x = typeof s == "string" && (s.toLowerCase().includes("avatar") || s.toLowerCase().includes("logo")), E = d == null ? "" : typeof d == "string" || typeof d == "number" ? d : JSON.stringify(d);
  return /* @__PURE__ */ o.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ o.jsx("label", { className: l, children: e?.label }),
    /* @__PURE__ */ o.jsx("div", { className: "relative", children: x ? /* @__PURE__ */ o.jsx(
      "img",
      {
        src: String(d),
        alt: "avatar",
        className: "w-16 h-16 rounded-full object-cover border",
        onError: (v) => {
          const S = v.currentTarget;
          S.onerror = null, S.src = In;
        }
      }
    ) : /* @__PURE__ */ o.jsx("p", { className: i, children: E }) })
  ] });
}
function bs({ commonInfo: e, infoData: t, hiddenFields: r = [] }) {
  return /* @__PURE__ */ o.jsx("div", { className: "bg-white border border-gray-100 p-4 min-h-3/10 overflow-auto", children: /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    /* @__PURE__ */ o.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ o.jsx("div", { className: "relative w-42 h-42", children: /* @__PURE__ */ o.jsx(
      "img",
      {
        src: String(t.avatar_photo),
        alt: "Profile",
        className: " w-full h-full object-cover border-4 rounded-[12px] border-white shadow-lg",
        onError: (n) => {
          const a = n.currentTarget;
          a.onerror = null, a.src = In;
        }
      }
    ) }) }),
    /* @__PURE__ */ o.jsx("div", { className: "lg:col-span-10 min-h-0 max-h-40  overflow-y-auto custom-scrollbar", children: /* @__PURE__ */ o.jsx("div", { className: "grid grid-cols-12 gap-2", children: e.fields?.map((n, a) => {
      const s = t?.[n.name];
      return r.includes(n.name) || !s && s !== !1 && s !== 0 ? null : /* @__PURE__ */ o.jsx("div", { className: `hover:bg-gray-100 transition-colors duration-200 col-span-12 sm:col-span-6 ${ot[lt(n.width)] || "lg:col-span-4"}`, children: /* @__PURE__ */ o.jsx(
        ct,
        {
          field: n,
          data: t ?? {}
        },
        n?.name || a
      ) }, n.name);
    }) }) })
  ] }) });
}
function or({ tabObj: e, methods: t, tabName: r, sqlOpsUrls: n, refid: a }) {
  const [s, i] = ae.useState(null);
  return ae.useEffect(() => {
    let l = !1;
    return (async () => {
      const u = e?.config;
      if (!u?.type) {
        l || i(null);
        return;
      }
      if (u.type === "method") {
        const h = u.method, f = h ? t[h] : void 0;
        if (f)
          try {
            const d = await Promise.resolve(f());
            l || i(d || null);
          } catch (d) {
            console.error("Method execution failed:", d), l || i(null);
          }
        else
          l || i(null);
      }
      if (u.type === "api")
        try {
          const h = await H({
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
          l || i(h.data || null);
        } catch (h) {
          console.error("API fetch failed:", h), l || i(null);
        }
      if (u.type === "sql" && a && a != "0") {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const h = await H({
            method: "POST",
            url: n.baseURL + n.registerQuery,
            data: {
              query: {
                ...u,
                cols: u.cols,
                table: u.table,
                where: fe(u.where, {
                  refid: u.refid
                })
              }
            },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }), f = await H({
            method: "POST",
            url: n.baseURL + n.runQuery,
            data: {
              queryid: h.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }), d = Rn(f);
          l || i(d);
        } catch (h) {
          console.error("API fetch failed:", h);
        }
      }
    })(), () => {
      l = !0;
    };
  }, [
    e?.config?.type || "",
    e?.config?.method || "",
    e?.config?.url || "",
    JSON.stringify(e?.config?.params || {}),
    JSON.stringify(e?.config?.body || {}),
    JSON.stringify(e?.config?.headers || {})
  ]), /* @__PURE__ */ o.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ o.jsx("div", { className: "grid grid-cols-12 gap-2", children: s ? Object.keys(s).map((l, c) => /* @__PURE__ */ o.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${ot[lt(e.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ o.jsx(
        ct,
        {
          field: { name: l, label: l },
          data: s ?? {},
          methods: t,
          refid: a,
          ...n ? { sqlOpsUrls: n } : {}
        },
        l
      )
    },
    `field-${c}`
  )) : /* @__PURE__ */ o.jsx("div", { className: "col-span-12 flex flex-col  min-h-0", children: /* @__PURE__ */ o.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center text-gray-500", children: [
    /* @__PURE__ */ o.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ o.jsxs("svg", { className: "w-8 h-8 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
      /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" }),
      /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m8 7 4-4 4 4" })
    ] }) }),
    /* @__PURE__ */ o.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No Data Available" }),
    /* @__PURE__ */ o.jsx("p", { className: "text-sm text-gray-500 text-center max-w-sm", children: "There are no records to display  at the moment." })
  ] }) }) }) });
}
function xs({
  open: e,
  title: t = "Confirm Delete",
  message: r = "Are you sure you want to delete this record?",
  onConfirm: n,
  onCancel: a
}) {
  return e ? /* @__PURE__ */ o.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40", children: /* @__PURE__ */ o.jsxs("div", { className: "bg-white rounded-lg shadow-lg w-full max-w-sm p-4", children: [
    /* @__PURE__ */ o.jsx("h3", { className: "text-sm font-semibold text-gray-900", children: t }),
    /* @__PURE__ */ o.jsx("p", { className: "mt-2 text-sm text-gray-600", children: r }),
    /* @__PURE__ */ o.jsxs("div", { className: "mt-4 flex justify-end gap-2", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          onClick: a,
          className: "px-3 py-1.5 text-sm rounded border border-gray-300 text-gray-700 hover:bg-gray-50",
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          onClick: n,
          className: "px-3 py-1.5 text-sm rounded bg-red-600 text-white hover:bg-red-700",
          children: "Delete"
        }
      )
    ] })
  ] }) }) : null;
}
var vs = function(t) {
  return ws(t) && !js(t);
};
function ws(e) {
  return !!e && typeof e == "object";
}
function js(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || Ss(e);
}
var Ts = typeof Symbol == "function" && Symbol.for, Es = Ts ? Symbol.for("react.element") : 60103;
function Ss(e) {
  return e.$$typeof === Es;
}
function _s(e) {
  return Array.isArray(e) ? [] : {};
}
function Nt(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? nt(_s(e), e, t) : e;
}
function Ns(e, t, r) {
  return e.concat(t).map(function(n) {
    return Nt(n, r);
  });
}
function $s(e, t, r) {
  var n = {};
  return r.isMergeableObject(e) && Object.keys(e).forEach(function(a) {
    n[a] = Nt(e[a], r);
  }), Object.keys(t).forEach(function(a) {
    !r.isMergeableObject(t[a]) || !e[a] ? n[a] = Nt(t[a], r) : n[a] = nt(e[a], t[a], r);
  }), n;
}
function nt(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || Ns, r.isMergeableObject = r.isMergeableObject || vs;
  var n = Array.isArray(t), a = Array.isArray(e), s = n === a;
  return s ? n ? r.arrayMerge(e, t, r) : $s(e, t, r) : Nt(t, r);
}
nt.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(n, a) {
    return nt(n, a, r);
  }, {});
};
var er = nt, Dn = typeof global == "object" && global && global.Object === Object && global, As = typeof self == "object" && self && self.Object === Object && self, ve = Dn || As || Function("return this")(), Ae = ve.Symbol, Mn = Object.prototype, Os = Mn.hasOwnProperty, Fs = Mn.toString, Xe = Ae ? Ae.toStringTag : void 0;
function Cs(e) {
  var t = Os.call(e, Xe), r = e[Xe];
  try {
    e[Xe] = void 0;
    var n = !0;
  } catch {
  }
  var a = Fs.call(e);
  return n && (t ? e[Xe] = r : delete e[Xe]), a;
}
var Ps = Object.prototype, Rs = Ps.toString;
function Is(e) {
  return Rs.call(e);
}
var Ds = "[object Null]", Ms = "[object Undefined]", Pr = Ae ? Ae.toStringTag : void 0;
function Le(e) {
  return e == null ? e === void 0 ? Ms : Ds : Pr && Pr in Object(e) ? Cs(e) : Is(e);
}
function kn(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var lr = kn(Object.getPrototypeOf, Object);
function ze(e) {
  return e != null && typeof e == "object";
}
var ks = "[object Object]", Ls = Function.prototype, zs = Object.prototype, Ln = Ls.toString, Vs = zs.hasOwnProperty, Bs = Ln.call(Object);
function Rr(e) {
  if (!ze(e) || Le(e) != ks)
    return !1;
  var t = lr(e);
  if (t === null)
    return !0;
  var r = Vs.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Ln.call(r) == Bs;
}
function Us() {
  this.__data__ = [], this.size = 0;
}
function zn(e, t) {
  return e === t || e !== e && t !== t;
}
function At(e, t) {
  for (var r = e.length; r--; )
    if (zn(e[r][0], t))
      return r;
  return -1;
}
var Gs = Array.prototype, Ys = Gs.splice;
function Ks(e) {
  var t = this.__data__, r = At(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Ys.call(t, r, 1), --this.size, !0;
}
function Hs(e) {
  var t = this.__data__, r = At(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Ws(e) {
  return At(this.__data__, e) > -1;
}
function qs(e, t) {
  var r = this.__data__, n = At(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function _e(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
_e.prototype.clear = Us;
_e.prototype.delete = Ks;
_e.prototype.get = Hs;
_e.prototype.has = Ws;
_e.prototype.set = qs;
function Zs() {
  this.__data__ = new _e(), this.size = 0;
}
function Qs(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Xs(e) {
  return this.__data__.get(e);
}
function Js(e) {
  return this.__data__.has(e);
}
function ut(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ei = "[object AsyncFunction]", ti = "[object Function]", ri = "[object GeneratorFunction]", ni = "[object Proxy]";
function Vn(e) {
  if (!ut(e))
    return !1;
  var t = Le(e);
  return t == ti || t == ri || t == ei || t == ni;
}
var zt = ve["__core-js_shared__"], Ir = function() {
  var e = /[^.]+$/.exec(zt && zt.keys && zt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ai(e) {
  return !!Ir && Ir in e;
}
var si = Function.prototype, ii = si.toString;
function Ve(e) {
  if (e != null) {
    try {
      return ii.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var oi = /[\\^$.*+?()[\]{}|]/g, li = /^\[object .+?Constructor\]$/, ci = Function.prototype, ui = Object.prototype, di = ci.toString, fi = ui.hasOwnProperty, hi = RegExp(
  "^" + di.call(fi).replace(oi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function pi(e) {
  if (!ut(e) || ai(e))
    return !1;
  var t = Vn(e) ? hi : li;
  return t.test(Ve(e));
}
function mi(e, t) {
  return e?.[t];
}
function Be(e, t) {
  var r = mi(e, t);
  return pi(r) ? r : void 0;
}
var at = Be(ve, "Map"), st = Be(Object, "create");
function yi() {
  this.__data__ = st ? st(null) : {}, this.size = 0;
}
function gi(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var bi = "__lodash_hash_undefined__", xi = Object.prototype, vi = xi.hasOwnProperty;
function wi(e) {
  var t = this.__data__;
  if (st) {
    var r = t[e];
    return r === bi ? void 0 : r;
  }
  return vi.call(t, e) ? t[e] : void 0;
}
var ji = Object.prototype, Ti = ji.hasOwnProperty;
function Ei(e) {
  var t = this.__data__;
  return st ? t[e] !== void 0 : Ti.call(t, e);
}
var Si = "__lodash_hash_undefined__";
function _i(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = st && t === void 0 ? Si : t, this;
}
function Me(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Me.prototype.clear = yi;
Me.prototype.delete = gi;
Me.prototype.get = wi;
Me.prototype.has = Ei;
Me.prototype.set = _i;
function Ni() {
  this.size = 0, this.__data__ = {
    hash: new Me(),
    map: new (at || _e)(),
    string: new Me()
  };
}
function $i(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ot(e, t) {
  var r = e.__data__;
  return $i(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Ai(e) {
  var t = Ot(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Oi(e) {
  return Ot(this, e).get(e);
}
function Fi(e) {
  return Ot(this, e).has(e);
}
function Ci(e, t) {
  var r = Ot(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function Oe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Oe.prototype.clear = Ni;
Oe.prototype.delete = Ai;
Oe.prototype.get = Oi;
Oe.prototype.has = Fi;
Oe.prototype.set = Ci;
var Pi = 200;
function Ri(e, t) {
  var r = this.__data__;
  if (r instanceof _e) {
    var n = r.__data__;
    if (!at || n.length < Pi - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Oe(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function qe(e) {
  var t = this.__data__ = new _e(e);
  this.size = t.size;
}
qe.prototype.clear = Zs;
qe.prototype.delete = Qs;
qe.prototype.get = Xs;
qe.prototype.has = Js;
qe.prototype.set = Ri;
function Ii(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var Dr = function() {
  try {
    var e = Be(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function Bn(e, t, r) {
  t == "__proto__" && Dr ? Dr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Di = Object.prototype, Mi = Di.hasOwnProperty;
function Un(e, t, r) {
  var n = e[t];
  (!(Mi.call(e, t) && zn(n, r)) || r === void 0 && !(t in e)) && Bn(e, t, r);
}
function Ft(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var s = -1, i = t.length; ++s < i; ) {
    var l = t[s], c = void 0;
    c === void 0 && (c = e[l]), a ? Bn(r, l, c) : Un(r, l, c);
  }
  return r;
}
function ki(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Li = "[object Arguments]";
function Mr(e) {
  return ze(e) && Le(e) == Li;
}
var Gn = Object.prototype, zi = Gn.hasOwnProperty, Vi = Gn.propertyIsEnumerable, Bi = Mr(/* @__PURE__ */ function() {
  return arguments;
}()) ? Mr : function(e) {
  return ze(e) && zi.call(e, "callee") && !Vi.call(e, "callee");
}, dt = Array.isArray;
function Ui() {
  return !1;
}
var Yn = typeof exports == "object" && exports && !exports.nodeType && exports, kr = Yn && typeof module == "object" && module && !module.nodeType && module, Gi = kr && kr.exports === Yn, Lr = Gi ? ve.Buffer : void 0, Yi = Lr ? Lr.isBuffer : void 0, Kn = Yi || Ui, Ki = 9007199254740991, Hi = /^(?:0|[1-9]\d*)$/;
function Wi(e, t) {
  var r = typeof e;
  return t = t ?? Ki, !!t && (r == "number" || r != "symbol" && Hi.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var qi = 9007199254740991;
function Hn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= qi;
}
var Zi = "[object Arguments]", Qi = "[object Array]", Xi = "[object Boolean]", Ji = "[object Date]", eo = "[object Error]", to = "[object Function]", ro = "[object Map]", no = "[object Number]", ao = "[object Object]", so = "[object RegExp]", io = "[object Set]", oo = "[object String]", lo = "[object WeakMap]", co = "[object ArrayBuffer]", uo = "[object DataView]", fo = "[object Float32Array]", ho = "[object Float64Array]", po = "[object Int8Array]", mo = "[object Int16Array]", yo = "[object Int32Array]", go = "[object Uint8Array]", bo = "[object Uint8ClampedArray]", xo = "[object Uint16Array]", vo = "[object Uint32Array]", X = {};
X[fo] = X[ho] = X[po] = X[mo] = X[yo] = X[go] = X[bo] = X[xo] = X[vo] = !0;
X[Zi] = X[Qi] = X[co] = X[Xi] = X[uo] = X[Ji] = X[eo] = X[to] = X[ro] = X[no] = X[ao] = X[so] = X[io] = X[oo] = X[lo] = !1;
function wo(e) {
  return ze(e) && Hn(e.length) && !!X[Le(e)];
}
function cr(e) {
  return function(t) {
    return e(t);
  };
}
var Wn = typeof exports == "object" && exports && !exports.nodeType && exports, et = Wn && typeof module == "object" && module && !module.nodeType && module, jo = et && et.exports === Wn, Vt = jo && Dn.process, We = function() {
  try {
    var e = et && et.require && et.require("util").types;
    return e || Vt && Vt.binding && Vt.binding("util");
  } catch {
  }
}(), zr = We && We.isTypedArray, To = zr ? cr(zr) : wo, Eo = Object.prototype, So = Eo.hasOwnProperty;
function qn(e, t) {
  var r = dt(e), n = !r && Bi(e), a = !r && !n && Kn(e), s = !r && !n && !a && To(e), i = r || n || a || s, l = i ? ki(e.length, String) : [], c = l.length;
  for (var u in e)
    (t || So.call(e, u)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Wi(u, c))) && l.push(u);
  return l;
}
var _o = Object.prototype;
function ur(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || _o;
  return e === r;
}
var No = kn(Object.keys, Object), $o = Object.prototype, Ao = $o.hasOwnProperty;
function Oo(e) {
  if (!ur(e))
    return No(e);
  var t = [];
  for (var r in Object(e))
    Ao.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function Zn(e) {
  return e != null && Hn(e.length) && !Vn(e);
}
function dr(e) {
  return Zn(e) ? qn(e) : Oo(e);
}
function Fo(e, t) {
  return e && Ft(t, dr(t), e);
}
function Co(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Po = Object.prototype, Ro = Po.hasOwnProperty;
function Io(e) {
  if (!ut(e))
    return Co(e);
  var t = ur(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Ro.call(e, n)) || r.push(n);
  return r;
}
function fr(e) {
  return Zn(e) ? qn(e, !0) : Io(e);
}
function Do(e, t) {
  return e && Ft(t, fr(t), e);
}
var Qn = typeof exports == "object" && exports && !exports.nodeType && exports, Vr = Qn && typeof module == "object" && module && !module.nodeType && module, Mo = Vr && Vr.exports === Qn, Br = Mo ? ve.Buffer : void 0, Ur = Br ? Br.allocUnsafe : void 0;
function ko(e, t) {
  if (t)
    return e.slice();
  var r = e.length, n = Ur ? Ur(r) : new e.constructor(r);
  return e.copy(n), n;
}
function Xn(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
function Lo(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, s = []; ++r < n; ) {
    var i = e[r];
    t(i, r, e) && (s[a++] = i);
  }
  return s;
}
function Jn() {
  return [];
}
var zo = Object.prototype, Vo = zo.propertyIsEnumerable, Gr = Object.getOwnPropertySymbols, hr = Gr ? function(e) {
  return e == null ? [] : (e = Object(e), Lo(Gr(e), function(t) {
    return Vo.call(e, t);
  }));
} : Jn;
function Bo(e, t) {
  return Ft(e, hr(e), t);
}
function ea(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var Uo = Object.getOwnPropertySymbols, ta = Uo ? function(e) {
  for (var t = []; e; )
    ea(t, hr(e)), e = lr(e);
  return t;
} : Jn;
function Go(e, t) {
  return Ft(e, ta(e), t);
}
function ra(e, t, r) {
  var n = t(e);
  return dt(e) ? n : ea(n, r(e));
}
function Yo(e) {
  return ra(e, dr, hr);
}
function Ko(e) {
  return ra(e, fr, ta);
}
var tr = Be(ve, "DataView"), rr = Be(ve, "Promise"), nr = Be(ve, "Set"), ar = Be(ve, "WeakMap"), Yr = "[object Map]", Ho = "[object Object]", Kr = "[object Promise]", Hr = "[object Set]", Wr = "[object WeakMap]", qr = "[object DataView]", Wo = Ve(tr), qo = Ve(at), Zo = Ve(rr), Qo = Ve(nr), Xo = Ve(ar), Te = Le;
(tr && Te(new tr(new ArrayBuffer(1))) != qr || at && Te(new at()) != Yr || rr && Te(rr.resolve()) != Kr || nr && Te(new nr()) != Hr || ar && Te(new ar()) != Wr) && (Te = function(e) {
  var t = Le(e), r = t == Ho ? e.constructor : void 0, n = r ? Ve(r) : "";
  if (n)
    switch (n) {
      case Wo:
        return qr;
      case qo:
        return Yr;
      case Zo:
        return Kr;
      case Qo:
        return Hr;
      case Xo:
        return Wr;
    }
  return t;
});
var Jo = Object.prototype, el = Jo.hasOwnProperty;
function tl(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && el.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var Zr = ve.Uint8Array;
function pr(e) {
  var t = new e.constructor(e.byteLength);
  return new Zr(t).set(new Zr(e)), t;
}
function rl(e, t) {
  var r = t ? pr(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var nl = /\w*$/;
function al(e) {
  var t = new e.constructor(e.source, nl.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Qr = Ae ? Ae.prototype : void 0, Xr = Qr ? Qr.valueOf : void 0;
function sl(e) {
  return Xr ? Object(Xr.call(e)) : {};
}
function il(e, t) {
  var r = t ? pr(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var ol = "[object Boolean]", ll = "[object Date]", cl = "[object Map]", ul = "[object Number]", dl = "[object RegExp]", fl = "[object Set]", hl = "[object String]", pl = "[object Symbol]", ml = "[object ArrayBuffer]", yl = "[object DataView]", gl = "[object Float32Array]", bl = "[object Float64Array]", xl = "[object Int8Array]", vl = "[object Int16Array]", wl = "[object Int32Array]", jl = "[object Uint8Array]", Tl = "[object Uint8ClampedArray]", El = "[object Uint16Array]", Sl = "[object Uint32Array]";
function _l(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case ml:
      return pr(e);
    case ol:
    case ll:
      return new n(+e);
    case yl:
      return rl(e, r);
    case gl:
    case bl:
    case xl:
    case vl:
    case wl:
    case jl:
    case Tl:
    case El:
    case Sl:
      return il(e, r);
    case cl:
      return new n();
    case ul:
    case hl:
      return new n(e);
    case dl:
      return al(e);
    case fl:
      return new n();
    case pl:
      return sl(e);
  }
}
var Jr = Object.create, Nl = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!ut(t))
      return {};
    if (Jr)
      return Jr(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function $l(e) {
  return typeof e.constructor == "function" && !ur(e) ? Nl(lr(e)) : {};
}
var Al = "[object Map]";
function Ol(e) {
  return ze(e) && Te(e) == Al;
}
var en = We && We.isMap, Fl = en ? cr(en) : Ol, Cl = "[object Set]";
function Pl(e) {
  return ze(e) && Te(e) == Cl;
}
var tn = We && We.isSet, Rl = tn ? cr(tn) : Pl, Il = 1, Dl = 2, Ml = 4, na = "[object Arguments]", kl = "[object Array]", Ll = "[object Boolean]", zl = "[object Date]", Vl = "[object Error]", aa = "[object Function]", Bl = "[object GeneratorFunction]", Ul = "[object Map]", Gl = "[object Number]", sa = "[object Object]", Yl = "[object RegExp]", Kl = "[object Set]", Hl = "[object String]", Wl = "[object Symbol]", ql = "[object WeakMap]", Zl = "[object ArrayBuffer]", Ql = "[object DataView]", Xl = "[object Float32Array]", Jl = "[object Float64Array]", ec = "[object Int8Array]", tc = "[object Int16Array]", rc = "[object Int32Array]", nc = "[object Uint8Array]", ac = "[object Uint8ClampedArray]", sc = "[object Uint16Array]", ic = "[object Uint32Array]", q = {};
q[na] = q[kl] = q[Zl] = q[Ql] = q[Ll] = q[zl] = q[Xl] = q[Jl] = q[ec] = q[tc] = q[rc] = q[Ul] = q[Gl] = q[sa] = q[Yl] = q[Kl] = q[Hl] = q[Wl] = q[nc] = q[ac] = q[sc] = q[ic] = !0;
q[Vl] = q[aa] = q[ql] = !1;
function tt(e, t, r, n, a, s) {
  var i, l = t & Il, c = t & Dl, u = t & Ml;
  if (i !== void 0)
    return i;
  if (!ut(e))
    return e;
  var h = dt(e);
  if (h) {
    if (i = tl(e), !l)
      return Xn(e, i);
  } else {
    var f = Te(e), d = f == aa || f == Bl;
    if (Kn(e))
      return ko(e, l);
    if (f == sa || f == na || d && !a) {
      if (i = c || d ? {} : $l(e), !l)
        return c ? Go(e, Do(i, e)) : Bo(e, Fo(i, e));
    } else {
      if (!q[f])
        return a ? e : {};
      i = _l(e, f, l);
    }
  }
  s || (s = new qe());
  var x = s.get(e);
  if (x)
    return x;
  s.set(e, i), Rl(e) ? e.forEach(function(S) {
    i.add(tt(S, t, r, S, e, s));
  }) : Fl(e) && e.forEach(function(S, p) {
    i.set(p, tt(S, t, r, p, e, s));
  });
  var E = u ? c ? Ko : Yo : c ? fr : dr, v = h ? void 0 : E(e);
  return Ii(v || e, function(S, p) {
    v && (p = S, S = e[p]), Un(i, p, tt(S, t, r, p, e, s));
  }), i;
}
var oc = 1, lc = 4;
function gt(e) {
  return tt(e, oc | lc);
}
var Bt, rn;
function cc() {
  if (rn) return Bt;
  rn = 1;
  var e = Array.isArray, t = Object.keys, r = Object.prototype.hasOwnProperty, n = typeof Element < "u";
  function a(s, i) {
    if (s === i) return !0;
    if (s && i && typeof s == "object" && typeof i == "object") {
      var l = e(s), c = e(i), u, h, f;
      if (l && c) {
        if (h = s.length, h != i.length) return !1;
        for (u = h; u-- !== 0; )
          if (!a(s[u], i[u])) return !1;
        return !0;
      }
      if (l != c) return !1;
      var d = s instanceof Date, x = i instanceof Date;
      if (d != x) return !1;
      if (d && x) return s.getTime() == i.getTime();
      var E = s instanceof RegExp, v = i instanceof RegExp;
      if (E != v) return !1;
      if (E && v) return s.toString() == i.toString();
      var S = t(s);
      if (h = S.length, h !== t(i).length)
        return !1;
      for (u = h; u-- !== 0; )
        if (!r.call(i, S[u])) return !1;
      if (n && s instanceof Element && i instanceof Element)
        return s === i;
      for (u = h; u-- !== 0; )
        if (f = S[u], !(f === "_owner" && s.$$typeof) && !a(s[f], i[f]))
          return !1;
      return !0;
    }
    return s !== s && i !== i;
  }
  return Bt = function(i, l) {
    try {
      return a(i, l);
    } catch (c) {
      if (c.message && c.message.match(/stack|recursion/i) || c.number === -2146828260)
        return console.warn("Warning: react-fast-compare does not handle circular references.", c.name, c.message), !1;
      throw c;
    }
  }, Bt;
}
var uc = cc();
const Pe = /* @__PURE__ */ gn(uc);
var dc = process.env.NODE_ENV === "production";
function He(e, t) {
  if (!dc) {
    var r = "Warning: " + t;
    typeof console < "u" && console.warn(r);
    try {
      throw Error(r);
    } catch {
    }
  }
}
var fc = 4;
function nn(e) {
  return tt(e, fc);
}
function ia(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var hc = "[object Symbol]";
function mr(e) {
  return typeof e == "symbol" || ze(e) && Le(e) == hc;
}
var pc = "Expected a function";
function yr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(pc);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(a))
      return s.get(a);
    var i = e.apply(this, n);
    return r.cache = s.set(a, i) || s, i;
  };
  return r.cache = new (yr.Cache || Oe)(), r;
}
yr.Cache = Oe;
var mc = 500;
function yc(e) {
  var t = yr(e, function(n) {
    return r.size === mc && r.clear(), n;
  }), r = t.cache;
  return t;
}
var gc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, bc = /\\(\\)?/g, xc = yc(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(gc, function(r, n, a, s) {
    t.push(a ? s.replace(bc, "$1") : n || r);
  }), t;
});
function vc(e) {
  if (typeof e == "string" || mr(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var an = Ae ? Ae.prototype : void 0, sn = an ? an.toString : void 0;
function oa(e) {
  if (typeof e == "string")
    return e;
  if (dt(e))
    return ia(e, oa) + "";
  if (mr(e))
    return sn ? sn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function wc(e) {
  return e == null ? "" : oa(e);
}
function la(e) {
  return dt(e) ? ia(e, vc) : mr(e) ? [e] : Xn(xc(wc(e)));
}
var bt = { exports: {} }, Y = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var on;
function jc() {
  if (on) return Y;
  on = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, p = e ? Symbol.for("react.responder") : 60118, j = e ? Symbol.for("react.scope") : 60119;
  function w(g) {
    if (typeof g == "object" && g !== null) {
      var _ = g.$$typeof;
      switch (_) {
        case t:
          switch (g = g.type, g) {
            case c:
            case u:
            case n:
            case s:
            case a:
            case f:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case l:
                case h:
                case E:
                case x:
                case i:
                  return g;
                default:
                  return _;
              }
          }
        case r:
          return _;
      }
    }
  }
  function y(g) {
    return w(g) === u;
  }
  return Y.AsyncMode = c, Y.ConcurrentMode = u, Y.ContextConsumer = l, Y.ContextProvider = i, Y.Element = t, Y.ForwardRef = h, Y.Fragment = n, Y.Lazy = E, Y.Memo = x, Y.Portal = r, Y.Profiler = s, Y.StrictMode = a, Y.Suspense = f, Y.isAsyncMode = function(g) {
    return y(g) || w(g) === c;
  }, Y.isConcurrentMode = y, Y.isContextConsumer = function(g) {
    return w(g) === l;
  }, Y.isContextProvider = function(g) {
    return w(g) === i;
  }, Y.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, Y.isForwardRef = function(g) {
    return w(g) === h;
  }, Y.isFragment = function(g) {
    return w(g) === n;
  }, Y.isLazy = function(g) {
    return w(g) === E;
  }, Y.isMemo = function(g) {
    return w(g) === x;
  }, Y.isPortal = function(g) {
    return w(g) === r;
  }, Y.isProfiler = function(g) {
    return w(g) === s;
  }, Y.isStrictMode = function(g) {
    return w(g) === a;
  }, Y.isSuspense = function(g) {
    return w(g) === f;
  }, Y.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === u || g === s || g === a || g === f || g === d || typeof g == "object" && g !== null && (g.$$typeof === E || g.$$typeof === x || g.$$typeof === i || g.$$typeof === l || g.$$typeof === h || g.$$typeof === S || g.$$typeof === p || g.$$typeof === j || g.$$typeof === v);
  }, Y.typeOf = w, Y;
}
var K = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ln;
function Tc() {
  return ln || (ln = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, p = e ? Symbol.for("react.responder") : 60118, j = e ? Symbol.for("react.scope") : 60119;
    function w(I) {
      return typeof I == "string" || typeof I == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      I === n || I === u || I === s || I === a || I === f || I === d || typeof I == "object" && I !== null && (I.$$typeof === E || I.$$typeof === x || I.$$typeof === i || I.$$typeof === l || I.$$typeof === h || I.$$typeof === S || I.$$typeof === p || I.$$typeof === j || I.$$typeof === v);
    }
    function y(I) {
      if (typeof I == "object" && I !== null) {
        var Ue = I.$$typeof;
        switch (Ue) {
          case t:
            var Ge = I.type;
            switch (Ge) {
              case c:
              case u:
              case n:
              case s:
              case a:
              case f:
                return Ge;
              default:
                var ft = Ge && Ge.$$typeof;
                switch (ft) {
                  case l:
                  case h:
                  case E:
                  case x:
                  case i:
                    return ft;
                  default:
                    return Ue;
                }
            }
          case r:
            return Ue;
        }
      }
    }
    var g = c, _ = u, O = l, B = i, W = t, Z = h, D = n, ne = E, G = x, C = r, N = s, $ = a, k = f, z = !1;
    function R(I) {
      return z || (z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), b(I) || y(I) === c;
    }
    function b(I) {
      return y(I) === u;
    }
    function T(I) {
      return y(I) === l;
    }
    function P(I) {
      return y(I) === i;
    }
    function V(I) {
      return typeof I == "object" && I !== null && I.$$typeof === t;
    }
    function Q(I) {
      return y(I) === h;
    }
    function J(I) {
      return y(I) === n;
    }
    function ge(I) {
      return y(I) === E;
    }
    function we(I) {
      return y(I) === x;
    }
    function ee(I) {
      return y(I) === r;
    }
    function ye(I) {
      return y(I) === s;
    }
    function Ne(I) {
      return y(I) === a;
    }
    function Fe(I) {
      return y(I) === f;
    }
    K.AsyncMode = g, K.ConcurrentMode = _, K.ContextConsumer = O, K.ContextProvider = B, K.Element = W, K.ForwardRef = Z, K.Fragment = D, K.Lazy = ne, K.Memo = G, K.Portal = C, K.Profiler = N, K.StrictMode = $, K.Suspense = k, K.isAsyncMode = R, K.isConcurrentMode = b, K.isContextConsumer = T, K.isContextProvider = P, K.isElement = V, K.isForwardRef = Q, K.isFragment = J, K.isLazy = ge, K.isMemo = we, K.isPortal = ee, K.isProfiler = ye, K.isStrictMode = Ne, K.isSuspense = Fe, K.isValidElementType = w, K.typeOf = y;
  }()), K;
}
var cn;
function Ec() {
  return cn || (cn = 1, process.env.NODE_ENV === "production" ? bt.exports = jc() : bt.exports = Tc()), bt.exports;
}
var Ut, un;
function Sc() {
  if (un) return Ut;
  un = 1;
  var e = Ec(), t = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, r = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, n = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, a = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, s = {};
  s[e.ForwardRef] = n, s[e.Memo] = a;
  function i(E) {
    return e.isMemo(E) ? a : s[E.$$typeof] || t;
  }
  var l = Object.defineProperty, c = Object.getOwnPropertyNames, u = Object.getOwnPropertySymbols, h = Object.getOwnPropertyDescriptor, f = Object.getPrototypeOf, d = Object.prototype;
  function x(E, v, S) {
    if (typeof v != "string") {
      if (d) {
        var p = f(v);
        p && p !== d && x(E, p, S);
      }
      var j = c(v);
      u && (j = j.concat(u(v)));
      for (var w = i(E), y = i(v), g = 0; g < j.length; ++g) {
        var _ = j[g];
        if (!r[_] && !(S && S[_]) && !(y && y[_]) && !(w && w[_])) {
          var O = h(v, _);
          try {
            l(E, _, O);
          } catch {
          }
        }
      }
    }
    return E;
  }
  return Ut = x, Ut;
}
Sc();
function ie() {
  return ie = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ie.apply(this, arguments);
}
function ca(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, s;
  for (s = 0; s < n.length; s++)
    a = n[s], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var Ct = /* @__PURE__ */ xa(void 0);
Ct.displayName = "FormikContext";
Ct.Provider;
Ct.Consumer;
function _c() {
  var e = ja(Ct);
  return e || (process.env.NODE_ENV !== "production" ? He(!1, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.") : He()), e;
}
var me = function(t) {
  return typeof t == "function";
}, Pt = function(t) {
  return t !== null && typeof t == "object";
}, Nc = function(t) {
  return String(Math.floor(Number(t))) === t;
}, Gt = function(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}, Yt = function(t) {
  return Pt(t) && me(t.then);
};
function $c(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ue(e, t, r, n) {
  n === void 0 && (n = 0);
  for (var a = la(t); e && n < a.length; )
    e = e[a[n++]];
  return n !== a.length && !e || e === void 0 ? r : e;
}
function De(e, t, r) {
  for (var n = nn(e), a = n, s = 0, i = la(t); s < i.length - 1; s++) {
    var l = i[s], c = ue(e, i.slice(0, s + 1));
    if (c && (Pt(c) || Array.isArray(c)))
      a = a[l] = nn(c);
    else {
      var u = i[s + 1];
      a = a[l] = Nc(u) && Number(u) >= 0 ? [] : {};
    }
  }
  return (s === 0 ? e : a)[i[s]] === r ? e : (r === void 0 ? delete a[i[s]] : a[i[s]] = r, s === 0 && r === void 0 && delete n[i[s]], n);
}
function ua(e, t, r, n) {
  r === void 0 && (r = /* @__PURE__ */ new WeakMap()), n === void 0 && (n = {});
  for (var a = 0, s = Object.keys(e); a < s.length; a++) {
    var i = s[a], l = e[i];
    Pt(l) ? r.get(l) || (r.set(l, !0), n[i] = Array.isArray(l) ? [] : {}, ua(l, t, r, n[i])) : n[i] = t;
  }
  return n;
}
function Ac(e, t) {
  switch (t.type) {
    case "SET_VALUES":
      return ie({}, e, {
        values: t.payload
      });
    case "SET_TOUCHED":
      return ie({}, e, {
        touched: t.payload
      });
    case "SET_ERRORS":
      return Pe(e.errors, t.payload) ? e : ie({}, e, {
        errors: t.payload
      });
    case "SET_STATUS":
      return ie({}, e, {
        status: t.payload
      });
    case "SET_ISSUBMITTING":
      return ie({}, e, {
        isSubmitting: t.payload
      });
    case "SET_ISVALIDATING":
      return ie({}, e, {
        isValidating: t.payload
      });
    case "SET_FIELD_VALUE":
      return ie({}, e, {
        values: De(e.values, t.payload.field, t.payload.value)
      });
    case "SET_FIELD_TOUCHED":
      return ie({}, e, {
        touched: De(e.touched, t.payload.field, t.payload.value)
      });
    case "SET_FIELD_ERROR":
      return ie({}, e, {
        errors: De(e.errors, t.payload.field, t.payload.value)
      });
    case "RESET_FORM":
      return ie({}, e, t.payload);
    case "SET_FORMIK_STATE":
      return t.payload(e);
    case "SUBMIT_ATTEMPT":
      return ie({}, e, {
        touched: ua(e.values, !0),
        isSubmitting: !0,
        submitCount: e.submitCount + 1
      });
    case "SUBMIT_FAILURE":
      return ie({}, e, {
        isSubmitting: !1
      });
    case "SUBMIT_SUCCESS":
      return ie({}, e, {
        isSubmitting: !1
      });
    default:
      return e;
  }
}
var Ce = {}, xt = {};
function Oc(e) {
  var t = e.validateOnChange, r = t === void 0 ? !0 : t, n = e.validateOnBlur, a = n === void 0 ? !0 : n, s = e.validateOnMount, i = s === void 0 ? !1 : s, l = e.isInitialValid, c = e.enableReinitialize, u = c === void 0 ? !1 : c, h = e.onSubmit, f = ca(e, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]), d = ie({
    validateOnChange: r,
    validateOnBlur: a,
    validateOnMount: i,
    onSubmit: h
  }, f), x = de(d.initialValues), E = de(d.initialErrors || Ce), v = de(d.initialTouched || xt), S = de(d.initialStatus), p = de(!1), j = de({});
  process.env.NODE_ENV !== "production" && oe(function() {
    typeof l > "u" || (process.env.NODE_ENV !== "production" ? He(!1, "isInitialValid has been deprecated and will be removed in future versions of Formik. Please use initialErrors or validateOnMount instead.") : He());
  }, []), oe(function() {
    return p.current = !0, function() {
      p.current = !1;
    };
  }, []);
  var w = re(0), y = w[1], g = de({
    values: gt(d.initialValues),
    errors: gt(d.initialErrors) || Ce,
    touched: gt(d.initialTouched) || xt,
    status: gt(d.initialStatus),
    isSubmitting: !1,
    isValidating: !1,
    submitCount: 0
  }), _ = g.current, O = te(function(m) {
    var A = g.current;
    g.current = Ac(A, m), A !== g.current && y(function(F) {
      return F + 1;
    });
  }, []), B = te(function(m, A) {
    return new Promise(function(F, M) {
      var L = d.validate(m, A);
      L == null ? F(Ce) : Yt(L) ? L.then(function(U) {
        F(U || Ce);
      }, function(U) {
        process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validate />", U), M(U);
      }) : F(L);
    });
  }, [d.validate]), W = te(function(m, A) {
    var F = d.validationSchema, M = me(F) ? F(A) : F, L = A && M.validateAt ? M.validateAt(A, m) : Cc(m, M);
    return new Promise(function(U, se) {
      L.then(function() {
        U(Ce);
      }, function(be) {
        be.name === "ValidationError" ? U(Fc(be)) : (process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validationSchema />", be), se(be));
      });
    });
  }, [d.validationSchema]), Z = te(function(m, A) {
    return new Promise(function(F) {
      return F(j.current[m].validate(A));
    });
  }, []), D = te(function(m) {
    var A = Object.keys(j.current).filter(function(M) {
      return me(j.current[M].validate);
    }), F = A.length > 0 ? A.map(function(M) {
      return Z(M, ue(m, M));
    }) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
    return Promise.all(F).then(function(M) {
      return M.reduce(function(L, U, se) {
        return U === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || U && (L = De(L, A[se], U)), L;
      }, {});
    });
  }, [Z]), ne = te(function(m) {
    return Promise.all([D(m), d.validationSchema ? W(m) : {}, d.validate ? B(m) : {}]).then(function(A) {
      var F = A[0], M = A[1], L = A[2], U = er.all([F, M, L], {
        arrayMerge: Pc
      });
      return U;
    });
  }, [d.validate, d.validationSchema, D, B, W]), G = pe(function(m) {
    return m === void 0 && (m = _.values), O({
      type: "SET_ISVALIDATING",
      payload: !0
    }), ne(m).then(function(A) {
      return p.current && (O({
        type: "SET_ISVALIDATING",
        payload: !1
      }), O({
        type: "SET_ERRORS",
        payload: A
      })), A;
    });
  });
  oe(function() {
    i && p.current === !0 && Pe(x.current, d.initialValues) && G(x.current);
  }, [i, G]);
  var C = te(function(m) {
    var A = m && m.values ? m.values : x.current, F = m && m.errors ? m.errors : E.current ? E.current : d.initialErrors || {}, M = m && m.touched ? m.touched : v.current ? v.current : d.initialTouched || {}, L = m && m.status ? m.status : S.current ? S.current : d.initialStatus;
    x.current = A, E.current = F, v.current = M, S.current = L;
    var U = function() {
      O({
        type: "RESET_FORM",
        payload: {
          isSubmitting: !!m && !!m.isSubmitting,
          errors: F,
          touched: M,
          status: L,
          values: A,
          isValidating: !!m && !!m.isValidating,
          submitCount: m && m.submitCount && typeof m.submitCount == "number" ? m.submitCount : 0
        }
      });
    };
    if (d.onReset) {
      var se = d.onReset(_.values, Ue);
      Yt(se) ? se.then(U) : U();
    } else
      U();
  }, [d.initialErrors, d.initialStatus, d.initialTouched, d.onReset]);
  oe(function() {
    p.current === !0 && !Pe(x.current, d.initialValues) && u && (x.current = d.initialValues, C(), i && G(x.current));
  }, [u, d.initialValues, C, i, G]), oe(function() {
    u && p.current === !0 && !Pe(E.current, d.initialErrors) && (E.current = d.initialErrors || Ce, O({
      type: "SET_ERRORS",
      payload: d.initialErrors || Ce
    }));
  }, [u, d.initialErrors]), oe(function() {
    u && p.current === !0 && !Pe(v.current, d.initialTouched) && (v.current = d.initialTouched || xt, O({
      type: "SET_TOUCHED",
      payload: d.initialTouched || xt
    }));
  }, [u, d.initialTouched]), oe(function() {
    u && p.current === !0 && !Pe(S.current, d.initialStatus) && (S.current = d.initialStatus, O({
      type: "SET_STATUS",
      payload: d.initialStatus
    }));
  }, [u, d.initialStatus, d.initialTouched]);
  var N = pe(function(m) {
    if (j.current[m] && me(j.current[m].validate)) {
      var A = ue(_.values, m), F = j.current[m].validate(A);
      return Yt(F) ? (O({
        type: "SET_ISVALIDATING",
        payload: !0
      }), F.then(function(M) {
        return M;
      }).then(function(M) {
        O({
          type: "SET_FIELD_ERROR",
          payload: {
            field: m,
            value: M
          }
        }), O({
          type: "SET_ISVALIDATING",
          payload: !1
        });
      })) : (O({
        type: "SET_FIELD_ERROR",
        payload: {
          field: m,
          value: F
        }
      }), Promise.resolve(F));
    } else if (d.validationSchema)
      return O({
        type: "SET_ISVALIDATING",
        payload: !0
      }), W(_.values, m).then(function(M) {
        return M;
      }).then(function(M) {
        O({
          type: "SET_FIELD_ERROR",
          payload: {
            field: m,
            value: ue(M, m)
          }
        }), O({
          type: "SET_ISVALIDATING",
          payload: !1
        });
      });
    return Promise.resolve();
  }), $ = te(function(m, A) {
    var F = A.validate;
    j.current[m] = {
      validate: F
    };
  }, []), k = te(function(m) {
    delete j.current[m];
  }, []), z = pe(function(m, A) {
    O({
      type: "SET_TOUCHED",
      payload: m
    });
    var F = A === void 0 ? a : A;
    return F ? G(_.values) : Promise.resolve();
  }), R = te(function(m) {
    O({
      type: "SET_ERRORS",
      payload: m
    });
  }, []), b = pe(function(m, A) {
    var F = me(m) ? m(_.values) : m;
    O({
      type: "SET_VALUES",
      payload: F
    });
    var M = A === void 0 ? r : A;
    return M ? G(F) : Promise.resolve();
  }), T = te(function(m, A) {
    O({
      type: "SET_FIELD_ERROR",
      payload: {
        field: m,
        value: A
      }
    });
  }, []), P = pe(function(m, A, F) {
    var M = me(A) ? A(ue(_.values, m)) : A;
    O({
      type: "SET_FIELD_VALUE",
      payload: {
        field: m,
        value: M
      }
    });
    var L = F === void 0 ? r : F;
    return L ? G(De(_.values, m, M)) : Promise.resolve();
  }), V = te(function(m, A) {
    var F = A, M = m, L;
    if (!Gt(m)) {
      m.persist && m.persist();
      var U = m.target ? m.target : m.currentTarget, se = U.type, be = U.name, It = U.id, Dt = U.value, ya = U.checked, ga = U.outerHTML, br = U.options, ba = U.multiple;
      F = A || be || It, !F && process.env.NODE_ENV !== "production" && dn({
        htmlContent: ga,
        documentationAnchorLink: "handlechange-e-reactchangeeventany--void",
        handlerName: "handleChange"
      }), M = /number|range/.test(se) ? (L = parseFloat(Dt), isNaN(L) ? "" : L) : /checkbox/.test(se) ? Ic(ue(_.values, F), ya, Dt) : br && ba ? Rc(br) : Dt;
    }
    F && P(F, M);
  }, [P, _.values]), Q = pe(function(m) {
    if (Gt(m))
      return function(A) {
        return V(A, m);
      };
    V(m);
  }), J = pe(function(m, A, F) {
    A === void 0 && (A = !0), O({
      type: "SET_FIELD_TOUCHED",
      payload: {
        field: m,
        value: A
      }
    });
    var M = F === void 0 ? a : F;
    return M ? G(_.values) : Promise.resolve();
  }), ge = te(function(m, A) {
    m.persist && m.persist();
    var F = m.target, M = F.name, L = F.id, U = F.outerHTML, se = A || M || L;
    !se && process.env.NODE_ENV !== "production" && dn({
      htmlContent: U,
      documentationAnchorLink: "handleblur-e-any--void",
      handlerName: "handleBlur"
    }), J(se, !0);
  }, [J]), we = pe(function(m) {
    if (Gt(m))
      return function(A) {
        return ge(A, m);
      };
    ge(m);
  }), ee = te(function(m) {
    me(m) ? O({
      type: "SET_FORMIK_STATE",
      payload: m
    }) : O({
      type: "SET_FORMIK_STATE",
      payload: function() {
        return m;
      }
    });
  }, []), ye = te(function(m) {
    O({
      type: "SET_STATUS",
      payload: m
    });
  }, []), Ne = te(function(m) {
    O({
      type: "SET_ISSUBMITTING",
      payload: m
    });
  }, []), Fe = pe(function() {
    return O({
      type: "SUBMIT_ATTEMPT"
    }), G().then(function(m) {
      var A = m instanceof Error, F = !A && Object.keys(m).length === 0;
      if (F) {
        var M;
        try {
          if (M = Ge(), M === void 0)
            return;
        } catch (L) {
          throw L;
        }
        return Promise.resolve(M).then(function(L) {
          return p.current && O({
            type: "SUBMIT_SUCCESS"
          }), L;
        }).catch(function(L) {
          if (p.current)
            throw O({
              type: "SUBMIT_FAILURE"
            }), L;
        });
      } else if (p.current && (O({
        type: "SUBMIT_FAILURE"
      }), A))
        throw m;
    });
  }), I = pe(function(m) {
    if (m && m.preventDefault && me(m.preventDefault) && m.preventDefault(), m && m.stopPropagation && me(m.stopPropagation) && m.stopPropagation(), process.env.NODE_ENV !== "production" && typeof document < "u") {
      var A = $c();
      A !== null && A instanceof HTMLButtonElement && (A.attributes && A.attributes.getNamedItem("type") || (process.env.NODE_ENV !== "production" ? He(!1, 'You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type="submit"`. If this is not a submit button, please add `type="button"`.') : He()));
    }
    Fe().catch(function(F) {
      console.warn("Warning: An unhandled error was caught from submitForm()", F);
    });
  }), Ue = {
    resetForm: C,
    validateForm: G,
    validateField: N,
    setErrors: R,
    setFieldError: T,
    setFieldTouched: J,
    setFieldValue: P,
    setStatus: ye,
    setSubmitting: Ne,
    setTouched: z,
    setValues: b,
    setFormikState: ee,
    submitForm: Fe
  }, Ge = pe(function() {
    return h(_.values, Ue);
  }), ft = pe(function(m) {
    m && m.preventDefault && me(m.preventDefault) && m.preventDefault(), m && m.stopPropagation && me(m.stopPropagation) && m.stopPropagation(), C();
  }), da = te(function(m) {
    return {
      value: ue(_.values, m),
      error: ue(_.errors, m),
      touched: !!ue(_.touched, m),
      initialValue: ue(x.current, m),
      initialTouched: !!ue(v.current, m),
      initialError: ue(E.current, m)
    };
  }, [_.errors, _.touched, _.values]), fa = te(function(m) {
    return {
      setValue: function(F, M) {
        return P(m, F, M);
      },
      setTouched: function(F, M) {
        return J(m, F, M);
      },
      setError: function(F) {
        return T(m, F);
      }
    };
  }, [P, J, T]), ha = te(function(m) {
    var A = Pt(m), F = A ? m.name : m, M = ue(_.values, F), L = {
      name: F,
      value: M,
      onChange: Q,
      onBlur: we
    };
    if (A) {
      var U = m.type, se = m.value, be = m.as, It = m.multiple;
      U === "checkbox" ? se === void 0 ? L.checked = !!M : (L.checked = !!(Array.isArray(M) && ~M.indexOf(se)), L.value = se) : U === "radio" ? (L.checked = M === se, L.value = se) : be === "select" && It && (L.value = L.value || [], L.multiple = !0);
    }
    return L;
  }, [we, Q, _.values]), Rt = Et(function() {
    return !Pe(x.current, _.values);
  }, [x.current, _.values]), pa = Et(function() {
    return typeof l < "u" ? Rt ? _.errors && Object.keys(_.errors).length === 0 : l !== !1 && me(l) ? l(d) : l : _.errors && Object.keys(_.errors).length === 0;
  }, [l, Rt, _.errors, d]), ma = ie({}, _, {
    initialValues: x.current,
    initialErrors: E.current,
    initialTouched: v.current,
    initialStatus: S.current,
    handleBlur: we,
    handleChange: Q,
    handleReset: ft,
    handleSubmit: I,
    resetForm: C,
    setErrors: R,
    setFormikState: ee,
    setFieldTouched: J,
    setFieldValue: P,
    setFieldError: T,
    setStatus: ye,
    setSubmitting: Ne,
    setTouched: z,
    setValues: b,
    submitForm: Fe,
    validateForm: G,
    validateField: N,
    isValid: pa,
    dirty: Rt,
    unregisterField: k,
    registerField: $,
    getFieldProps: ha,
    getFieldMeta: da,
    getFieldHelpers: fa,
    validateOnBlur: a,
    validateOnChange: r,
    validateOnMount: i
  });
  return ma;
}
function dn(e) {
  var t = e.htmlContent, r = e.documentationAnchorLink, n = e.handlerName;
  console.warn("Warning: Formik called `" + n + "`, but you forgot to pass an `id` or `name` attribute to your input:\n    " + t + `
    Formik cannot determine which value to update. For more info see https://formik.org/docs/api/formik#` + r + `
  `);
}
function Fc(e) {
  var t = {};
  if (e.inner) {
    if (e.inner.length === 0)
      return De(t, e.path, e.message);
    for (var a = e.inner, r = Array.isArray(a), n = 0, a = r ? a : a[Symbol.iterator](); ; ) {
      var s;
      if (r) {
        if (n >= a.length) break;
        s = a[n++];
      } else {
        if (n = a.next(), n.done) break;
        s = n.value;
      }
      var i = s;
      ue(t, i.path) || (t = De(t, i.path, i.message));
    }
  }
  return t;
}
function Cc(e, t, r, n) {
  r === void 0 && (r = !1);
  var a = sr(e);
  return t[r ? "validateSync" : "validate"](a, {
    abortEarly: !1,
    context: a
  });
}
function sr(e) {
  var t = Array.isArray(e) ? [] : {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      var n = String(r);
      Array.isArray(e[n]) === !0 ? t[n] = e[n].map(function(a) {
        return Array.isArray(a) === !0 || Rr(a) ? sr(a) : a !== "" ? a : void 0;
      }) : Rr(e[n]) ? t[n] = sr(e[n]) : t[n] = e[n] !== "" ? e[n] : void 0;
    }
  return t;
}
function Pc(e, t, r) {
  var n = e.slice();
  return t.forEach(function(s, i) {
    if (typeof n[i] > "u") {
      var l = r.clone !== !1, c = l && r.isMergeableObject(s);
      n[i] = c ? er(Array.isArray(s) ? [] : {}, s, r) : s;
    } else r.isMergeableObject(s) ? n[i] = er(e[i], s, r) : e.indexOf(s) === -1 && n.push(s);
  }), n;
}
function Rc(e) {
  return Array.from(e).filter(function(t) {
    return t.selected;
  }).map(function(t) {
    return t.value;
  });
}
function Ic(e, t, r) {
  if (typeof e == "boolean")
    return !!t;
  var n = [], a = !1, s = -1;
  if (Array.isArray(e))
    n = e, s = e.indexOf(r), a = s >= 0;
  else if (!r || r == "true" || r == "false")
    return !!t;
  return t && r && !a ? n.concat(r) : a ? n.slice(0, s).concat(n.slice(s + 1)) : n;
}
var Dc = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? yn : oe;
function pe(e) {
  var t = de(e);
  return Dc(function() {
    t.current = e;
  }), te(function() {
    for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return t.current.apply(void 0, n);
  }, []);
}
var Mc = /* @__PURE__ */ va(function(e, t) {
  var r = e.action, n = ca(e, ["action"]), a = r ?? "#", s = _c(), i = s.handleReset, l = s.handleSubmit;
  return wa("form", ie({
    onSubmit: l,
    ref: t,
    onReset: i,
    action: a
  }, n));
});
Mc.displayName = "Form";
function Kt({
  anchorRef: e,
  open: t,
  children: r,
  offset: n = 4
}) {
  const [a, s] = re({});
  return yn(() => {
    if (!t || !e.current) return;
    const i = e.current.getBoundingClientRect();
    s({
      position: "fixed",
      top: i.bottom + n,
      left: i.left,
      width: "200px",
      zIndex: 1e3
    });
  }, [t, e, n]), t ? Ta(
    /* @__PURE__ */ o.jsx("div", { style: a, children: r }),
    document.body
  ) : null;
}
function kc({
  field: e,
  formik: t,
  methods: r = {},
  sqlOpsUrls: n,
  refid: a,
  optionsOverride: s,
  setFieldOptions: i
}) {
  const [l, c] = re(!1), [u, h] = re(
    s ?? e.options ?? {}
  ), [f, d] = re(""), [x, E] = re(0), v = de(null), [S, p] = re(!1), j = ae.useRef(f), w = de(null);
  ae.useEffect(() => {
    j.current = f;
  }, [f]), oe(() => {
    s && h(s);
  }, [s]), oe(() => {
    if (!S) return;
    const C = (N) => {
      const $ = N.target;
      w.current?.contains($) || v.current?.contains($) || (p(!1), d(""));
    };
    return document.addEventListener("mousedown", C), () => {
      document.removeEventListener("mousedown", C);
    };
  }, [S]);
  const y = e.name;
  ae.useEffect(() => {
    let C = !0;
    return (async () => {
      if (e?.options) {
        h(e.options);
        return;
      }
      const $ = e?.source ?? {};
      if (e.type === "dataMethod") {
        const k = e.method, z = k ? r[k] : void 0;
        if (z)
          try {
            const R = await Promise.resolve(z()), b = e.valueKey || "value", T = e.labelKey || "title", P = Re(b, T, R, e.groupKey);
            C && h(P);
          } catch (R) {
            console.error("Method execution failed:", R), C && h({});
          }
        else
          C && h({});
      }
      if ($.type === "api" && $.url)
        try {
          const k = await H({
            method: $.method || "GET",
            url: $.url,
            data: $.body ?? {},
            params: $.params ?? {},
            headers: $.headers ?? {}
          }), z = e.valueKey || `${e.table}.value`, R = e.labelKey || `${e.table}.title`, b = Re(z, R, k, e.groupKey);
          C && h(b);
        } catch (k) {
          console.error("API execution failed:", k), C && h({});
        }
      if (e.table || e.type === "dataSelector") {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let k;
          if (e.type === "dataSelector")
            k = {
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
            k = {
              ...e,
              table: e.table,
              cols: e.columns
            };
          }
          e.where && e.type !== "dataSelector" && (k.where = a ? fe(e.where, { refid: a }) : e.where);
          const z = await yt(n, k);
          console.log("fetchDataByquery res", z);
          const R = e.valueKey || "do_lists.value", b = e.labelKey || "do_lists.title", T = Re(R, b, z, e.groupKey);
          C && h(T);
        } catch (k) {
          console.error("API fetch failed:", k);
        }
      }
    })(), () => {
      C = !1;
    };
  }, [
    e.options,
    e.source,
    e.table,
    e.columns,
    e.where,
    a
  ]);
  const g = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, _ = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, O = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, B = (C) => C.icon ? /* @__PURE__ */ o.jsx("i", { className: C.icon }) : null, W = Et(
    () => ys(u),
    [u]
  ), Z = W.length, D = Et(() => e.search || !f ? W : W.filter(
    ([, C]) => C.toLowerCase().includes(f.toLowerCase())
  ), [e.search, f, W]), ne = (C, N) => {
    if (S === !0)
      if (C.key === "ArrowDown")
        C.preventDefault(), E(
          ($) => $ + 1 < D.length ? $ + 1 : 0
        );
      else if (C.key === "ArrowUp")
        C.preventDefault(), E(
          ($) => $ - 1 >= 0 ? $ - 1 : D.length - 1
        );
      else if (C.key === "Enter") {
        C.preventDefault();
        const [$] = D[x] || [];
        $ && t.setFieldValue(e.name, N ? $ : [...t.values[e.name], $]);
      } else C.key === "Escape" && (d(""), p(!1));
  };
  oe(() => {
    v.current?.querySelector(
      `[data-index="${x}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [x]), oe(() => {
    x >= D.length && E(0);
  }, [D, x]), oe(() => {
    const C = e.autocomplete, N = e.ajaxchain;
    if (!C && !N) return;
    const $ = t.values[e.name];
    if (!$) return;
    const k = Array.isArray(N) ? N : N ? [N] : [];
    (async () => {
      try {
        if (ps(C)) {
          const R = C.src;
          if (!R || !n) return;
          const b = fe(R.where ?? {}, {
            refid: $
          }), T = {
            ...R,
            table: R.table,
            cols: R.columns,
            where: b
          }, { data: P } = await yt(n, T), V = Array.isArray(P?.data) ? P.data[0] : P?.data;
          V && C.target.split(",").map((Q) => Q.trim()).forEach((Q) => {
            V[Q] !== void 0 && t.setFieldValue(Q, V[Q]);
          });
        }
        for (const R of k) {
          const b = R.src;
          if (!R || typeof R != "object" || !b || typeof b != "object" || !n) continue;
          const T = fe(b?.where ?? {}, {
            refid: $
          }), P = {
            ...b,
            table: b.table,
            cols: b.columns,
            where: T
          }, { data: V } = await yt(n, P), Q = Re(
            e.valueKey || "value",
            e.labelKey || "title",
            V,
            e.groupKey
          );
          i?.(R.target, Q);
        }
      } catch (R) {
        console.error("Autocomplete / AjaxChain fetch failed", R);
      }
    })();
  }, [t.values[e.name]]), ae.useEffect(() => {
    if (!e.search || !f.trim() || !e.table || !n) return;
    const C = ms(e.columns ?? ""), N = new AbortController(), $ = setTimeout(async () => {
      try {
        const k = a ? fe(e.where ?? {}, {
          refid: a
        }) : e.where, z = {
          ...e,
          table: e.table,
          cols: e.columns || e.cols,
          where: k
        };
        let R = {};
        Array.isArray(C) && C.forEach((P) => {
          R[P] = [f, "LIKE"];
        });
        const { data: b } = await yt(n, z, R), T = Re(
          e.valueKey || "value",
          e.labelKey || "title",
          b,
          e.groupKey
        );
        h(T);
      } catch (k) {
        if (H.isCancel(k)) return;
        console.error("Search fetch failed", k);
      }
    }, 500);
    return () => {
      clearTimeout($), N.abort();
    };
  }, [f, a]);
  const G = async (C) => {
    if (C.length === 0) {
      console.error("No file");
      return;
    }
    if (!n) return;
    const N = n?.baseURL + n?.uploadURL;
    if (!N) {
      console.error("No Upload URL ");
      return;
    }
    const $ = e.multiple === !0;
    try {
      const k = await Promise.all(
        Array.from(C).map(async (z) => {
          const R = new FormData();
          return R.append("file", z), (await H({
            method: "POST",
            url: N,
            data: R,
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${n?.accessToken}`
            }
          })).data;
        })
      );
      t.setFieldValue(
        y,
        $ ? k.map((z) => z.path) : k[0]?.path
      );
    } catch (k) {
      console.error("File upload failed", k), t.setFieldError(y, "File upload failed");
    }
  };
  switch (e.type) {
    case "autocomplete": {
      const N = t.values[y] ?? "", $ = f !== "" ? f : Cr(u, N) ?? String(N ?? ""), k = (R) => {
        const b = R.target.value;
        d(b), E(0), b.trim() ? p(!0) : (p(!1), t.setFieldValue(y, ""));
      }, z = (R) => {
        t.setFieldValue(y, R), d(""), p(!1);
      };
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: O, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsx("div", { ref: w, children: /* @__PURE__ */ o.jsx(
          "input",
          {
            className: `${g} ${_}`,
            value: $,
            placeholder: e.placeholder || "Type to search...",
            onChange: k,
            onFocus: () => {
              const R = String(t.values[y] ?? "");
              d(R);
            },
            onBlur: () => {
              setTimeout(() => p(!1), 150);
            },
            onKeyDown: (R) => {
              if (R.key === "Enter") {
                if (R.preventDefault(), D[x]) {
                  const [b] = D[x];
                  t.setFieldValue(y, b);
                } else f.trim() && t.setFieldValue(y, f.trim());
                p(!1);
                return;
              }
              ne(R, !0);
            },
            disabled: e.disabled
          }
        ) }),
        /* @__PURE__ */ o.jsx(Kt, { anchorRef: w, open: S, children: /* @__PURE__ */ o.jsx(
          "div",
          {
            ref: v,
            className: "bg-white border rounded shadow max-h-52 overflow-y-auto",
            children: D.length > 0 ? D.map(([R, b], T) => /* @__PURE__ */ o.jsx(
              "div",
              {
                "data-index": T,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${x === T ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => z(R),
                children: b
              },
              R
            )) : /* @__PURE__ */ o.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `No matches press enter to add "${$}" ` })
          }
        ) }),
        t.touched[y] && t.errors[y] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[y]) })
      ] });
    }
    case "dataSelector":
    case "dataSelectorFromTable":
    case "dataSelectorFromUniques":
    case "dataMethod": {
      if (e.multiple === !0) {
        const N = t.values[y] ?? [];
        return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ o.jsxs("label", { className: O, children: [
            e.label,
            e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ o.jsxs(
            "div",
            {
              ref: w,
              tabIndex: 0,
              className: "cursor-pointer select-none border border-gray-300 rounded-lg px-4 py-2.5 bg-white flex justify-between items-center",
              onClick: () => {
                p(($) => !$), E(0);
              },
              onKeyDown: ($) => ne($, !1),
              onBlur: () => {
                e.multiple || setTimeout(() => {
                  p(!1), d("");
                }, 150);
              },
              children: [
                /* @__PURE__ */ o.jsx("span", { className: "text-sm text-gray-700 truncate", children: N.length > 0 ? N.join(", ") : `Select ${e.label}` }),
                /* @__PURE__ */ o.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
              ]
            }
          ),
          /* @__PURE__ */ o.jsx(Kt, { anchorRef: w, open: S, children: /* @__PURE__ */ o.jsxs(
            "div",
            {
              ref: v,
              className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
              children: [
                e.search && /* @__PURE__ */ o.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "text",
                    value: f,
                    onChange: ($) => {
                      d($.target.value), E(0);
                    },
                    placeholder: "Search...",
                    className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                  }
                ) }),
                D.length > 0 ? D.map(([$, k], z) => /* @__PURE__ */ o.jsxs(
                  "label",
                  {
                    "data-index": z,
                    className: `flex items-center gap-x-2 px-2 py-1 rounded cursor-pointer text-sm
                    ${N.includes($) ? "bg-indigo-50 text-indigo-600 font-medium" : x === z ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: [
                      /* @__PURE__ */ o.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: N.includes($),
                          onChange: (R) => {
                            const b = R.target.checked ? [...N, $] : N.filter((T) => T !== $);
                            t.setFieldValue(y, b);
                          },
                          className: "h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        }
                      ),
                      k
                    ]
                  },
                  $
                )) : /* @__PURE__ */ o.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ]
            }
          ) }),
          t.touched[y] && t.errors[y] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[y]) })
        ] });
      }
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: O, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs(
          "div",
          {
            ref: w,
            tabIndex: 0,
            className: "cursor-pointer select-none border border-gray-300 rounded-lg px-4 py-2.5 bg-white flex justify-between items-center",
            onClick: () => {
              p((N) => !N), E(0);
            },
            onKeyDown: (N) => ne(N, !0),
            onBlur: () => {
              setTimeout(() => {
                p(!1), d("");
              }, 150);
            },
            children: [
              /* @__PURE__ */ o.jsx("span", { className: "text-sm text-gray-700 truncate", children: t.values[y] ? Cr(u, t.values[y]) ?? "Select option" : `Select ${e.label}` }),
              /* @__PURE__ */ o.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
            ]
          }
        ),
        /* @__PURE__ */ o.jsx(Kt, { anchorRef: w, open: S, children: /* @__PURE__ */ o.jsxs(
          "div",
          {
            ref: v,
            className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
            children: [
              e.search && /* @__PURE__ */ o.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ o.jsx(
                "input",
                {
                  type: "text",
                  value: f,
                  onChange: (N) => {
                    d(N.target.value), E(0);
                  },
                  onKeyDown: (N) => ne(N, !0),
                  placeholder: "Search...",
                  className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                }
              ) }),
              D.length > 0 && /* @__PURE__ */ o.jsx(
                "div",
                {
                  onMouseDown: (N) => {
                    N.preventDefault(), t.setFieldValue(y, ""), p(!1), d("");
                  },
                  className: "px-2 py-1 text-sm cursor-pointer hover:bg-gray-50",
                  children: "Clear selection"
                }
              ),
              D.length > 0 ? D.map(([N, $], k) => /* @__PURE__ */ o.jsx(
                "div",
                {
                  "data-index": k,
                  onMouseDown: () => {
                    t.setFieldValue(y, N), p(!1), d(""), E(0);
                  },
                  className: `px-2 py-1 rounded cursor-pointer text-sm
                  ${t.values[y] === N ? "bg-indigo-50 text-indigo-600 font-medium" : x === k ? "bg-gray-100" : "hover:bg-gray-50"}`,
                  children: $
                },
                N
              )) : /* @__PURE__ */ o.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
            ]
          }
        ) }),
        t.touched[y] && t.errors[y] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[y]) })
      ] });
    }
    case "textarea":
      return /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: O, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ o.jsx(
            "textarea",
            {
              className: `${g} ${_} min-h-[120px] resize-none`,
              onFocus: () => c(!0),
              name: y,
              value: t.values[y],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ o.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${l ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[y] && t.errors[y] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[y]) })
      ] }) });
    case "select":
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: O, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ o.jsxs(
            "select",
            {
              className: `${g} ${_} appearance-none cursor-pointer pr-12`,
              onFocus: () => c(!0),
              name: y,
              value: t.values[y],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              disabled: e.disabled,
              children: [
                /* @__PURE__ */ o.jsx("option", { value: "", disabled: !0, children: e.placeholder || "Please select an option" }),
                !Jt(u) && Object.entries(u).map(([N, $]) => /* @__PURE__ */ o.jsx("option", { value: N, className: "py-2", children: $ }, N)),
                Jt(u) && Object.entries(u).map(([N, $]) => /* @__PURE__ */ o.jsx("optgroup", { label: N, children: Object.entries($).map(([k, z]) => /* @__PURE__ */ o.jsx("option", { value: k, children: z }, k)) }, N))
              ]
            }
          ),
          /* @__PURE__ */ o.jsx("div", { className: "absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none", children: /* @__PURE__ */ o.jsx(
            "svg",
            {
              className: "w-5 h-5 transition-colors duration-300 text-gray-400",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
            }
          ) })
        ] }),
        t.touched[y] && t.errors[y] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[y]) })
      ] });
    case "radioList":
    case "radio":
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: O, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: `flex ${Z > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(u || {}).map(([N, $]) => /* @__PURE__ */ o.jsxs(
          "label",
          {
            htmlFor: `${y}-${N}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  id: `${y}-${N}`,
                  type: "radio",
                  name: y,
                  checked: t.values[y] === N,
                  value: N,
                  onChange: t.handleChange,
                  onBlur: t.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              $
            ]
          },
          N
        )) }),
        t.touched[y] && t.errors[y] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[y]) })
      ] });
    case "checkbox": {
      const N = t.values[y];
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: O, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(u || {}).map(([$, k]) => /* @__PURE__ */ o.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: N.includes($),
                  onChange: (z) => {
                    const R = z.target.checked ? [...N, $] : N.filter((b) => b !== $);
                    t.setFieldValue(y, R);
                  },
                  onBlur: t.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              k
            ]
          },
          $
        )) }),
        t.touched[y] && t.errors[y] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[y]) })
      ] });
    }
    case "tags": {
      const N = t.values[y], $ = f.trim(), k = Array.isArray(u) ? u : Object.entries(u || {}).map(([T, P]) => ({ value: T, label: P })), z = (T) => {
        T && !N.includes(T) && (t.setFieldValue(y, [...N, T]), d(""));
      }, R = (T) => {
        t.setFieldValue(
          y,
          N.filter((P) => P !== T)
        );
      }, b = (T) => k.find((P) => P.value === T)?.label ?? T;
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: O, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: `${g} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !e.disabled && document.getElementById(`${y}-input`)?.focus(),
            children: [
              N.map((T) => /* @__PURE__ */ o.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ o.jsx("span", { className: "text-indigo-700", children: b(T) }),
                    /* @__PURE__ */ o.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (P) => {
                          P.stopPropagation(), e.disabled || R(T);
                        },
                        onMouseDown: (P) => P.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                T
              )),
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  id: `${y}-input`,
                  type: "text",
                  value: f,
                  onChange: (T) => d(T.target.value),
                  onKeyDown: (T) => {
                    (T.key === "Enter" || T.key === ",") && (T.preventDefault(), z($));
                  },
                  placeholder: N.length === 0 ? e.placeholder || "Type and press Enter" : "",
                  className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                  disabled: e.disabled
                }
              )
            ]
          }
        ),
        t.touched[y] && t.errors[y] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[y]) })
      ] });
    }
    case "attachment":
    case "photo":
    case "avatar":
    case "file":
      const C = e.multiple === !0;
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: O, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ o.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: B(e) }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "file",
              className: `${g} ${_} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => c(!0),
              name: y,
              multiple: C,
              onChange: (N) => {
                const $ = N.currentTarget.files;
                $ && G($);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ o.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${l ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.values[y]?.split("/").pop() && /* @__PURE__ */ o.jsx("div", { className: "mt-1", children: /* @__PURE__ */ o.jsx("span", { className: "text-sm ", children: String(t.values[y]?.split("/").pop()) }) }),
        t.touched[y] && t.errors[y] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[y]) })
      ] });
    case "json":
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: O, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ o.jsx(
            "textarea",
            {
              id: `${y}-json`,
              name: y,
              value: t.values[y],
              onChange: (N) => t.setFieldValue(y, N.target.value),
              onBlur: t.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: e.disabled,
              className: `${g} ${_} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ o.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${l ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        t.touched[y] && t.errors[y] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[y]) })
      ] });
    case "date":
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: O, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ o.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: B(e) }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "date",
              name: y,
              value: t.values[y],
              onChange: t.handleChange,
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled,
              className: `${g} ${_} ${e.icon ? "pl-9" : ""}`
            }
          ),
          /* @__PURE__ */ o.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${l ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        t.touched[y] && t.errors[y] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[y]) })
      ] });
    default:
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: O, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ o.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: B(e) }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: e.type || "text",
              className: `${g} ${_} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => c(!0),
              name: y,
              value: t.values[y],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ o.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${l ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[y] && t.errors[y] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[y]) })
      ] });
  }
}
function Lc({
  title: e,
  fields: t,
  data: r,
  onSubmit: n = (c) => {
  },
  onCancel: a = () => {
  },
  methods: s = {},
  sqlOpsUrls: i,
  refid: l
}) {
  const c = ds(t, i?.operation), [u, h] = ae.useState({}), f = (v, S) => {
    h((p) => ({
      ...p,
      [v]: S
    }));
  }, { initialValues: d, validationSchema: x } = ae.useMemo(() => {
    const v = {}, S = {};
    return c.forEach((p) => {
      hs([p], v, S, r);
    }), {
      initialValues: v,
      validationSchema: S
    };
  }, [c, r]), E = Oc({
    initialValues: d,
    enableReinitialize: !0,
    validationSchema: Fn().shape(x),
    onSubmit: (v) => {
      n(v), E.resetForm();
    }
  });
  return console.log("formik.values", E.values), /* @__PURE__ */ o.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ o.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ o.jsxs("form", { onSubmit: E.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "grid grid-flow-col auto-cols-max gap-4  overflow-x-auto", children: [
      c.map((v, S) => fs(v.hidden) || v.type === "geolocation" || v.vmode === "edit" && i?.operation === "create" ? null : /* @__PURE__ */ o.jsx(
        "div",
        {
          children: /* @__PURE__ */ o.jsx(
            kc,
            {
              refid: l,
              ...i ? { sqlOpsUrls: i } : {},
              field: v,
              formik: E,
              methods: s,
              setFieldOptions: f,
              ...u[v.name] ? { optionsOverride: u[v.name] } : {}
            }
          )
        },
        v?.name ?? `field-${S}`
      )),
      /* @__PURE__ */ o.jsxs("div", { className: "pl-2", children: [
        /* @__PURE__ */ o.jsx("div", { children: "  " }),
        /* @__PURE__ */ o.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" }),
        Object.keys(E.errors).length > 0 && /* @__PURE__ */ o.jsx("div", { children: "  " })
      ] })
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "mt-8 flex justify-between space-x-3", children: /* @__PURE__ */ o.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }) })
  ] }) }) });
}
const rt = (e) => ({
  Authorization: `Bearer ${e.accessToken}`
}), Ht = async (e) => (await H.get(
  e.baseURL + e.dbopsGetHash,
  { headers: rt(e) }
)).data.refhash, Wt = async (e, t) => (await H.post(
  e.baseURL + e.dbopsGetRefId,
  t,
  { headers: rt(e) }
)).data.refid, zc = {
  async fetch(e, t) {
    const r = await Ht(e), n = await Wt(e, {
      operation: "fetch",
      source: t.source,
      fields: t.fields ?? {},
      datahash: r
    }), a = await H.post(
      e.baseURL + e.dbopsFetch,
      { refid: n, datahash: r },
      { headers: rt(e) }
    );
    return a.data?.data ?? a.data;
  },
  async create(e, t) {
    const r = await Ht(e), n = await Wt(e, {
      operation: "create",
      source: t.source,
      fields: t.values,
      datahash: r
    });
    return (await H.post(
      e.baseURL + e.dbopsCreate,
      { refid: n, fields: t.values, datahash: r },
      { headers: rt(e) }
    )).data;
  },
  async update(e, t) {
    const r = await Ht(e), n = await Wt(e, {
      operation: "update",
      source: t.source,
      fields: t.values,
      datahash: r
    });
    return (await H.post(
      e.baseURL + e.dbopsUpdate,
      { refid: n, fields: t.values, datahash: r },
      { headers: rt(e) }
    )).data;
  }
};
function fn({
  formJson: e = { title: "", fields: {}, source: {} },
  methods: t = {},
  userid: r = null,
  onCancel: n = () => {
  },
  components: a = {},
  callback: s = () => {
  },
  initialvalues: i = {},
  setEditData: l
}) {
  const c = e.endPoints, u = e?.source?.refid, [h, f] = ae.useState(i), d = ae.useMemo(() => cs(e.fields), [e.fields]);
  ae.useEffect(() => {
    let v = !0;
    return (async () => {
      const p = e?.source ?? {};
      if (!p?.type) {
        v && f({});
        return;
      }
      if (p.type === "method") {
        const j = p.method, w = j ? t[j] : void 0;
        if (w)
          try {
            const y = await Promise.resolve(w());
            v && f(y ?? {});
          } catch (y) {
            console.error("Method execution failed:", y), v && f({});
          }
        else
          v && f({});
      }
      if (p.type === "api" && c?.operation !== "create")
        try {
          const j = await H({
            method: p.method || "GET",
            url: p.url ?? "",
            data: p.body ?? {},
            params: p.params ?? {},
            headers: p.headers ?? {}
          });
          v && f(j.data ?? {});
        } catch (j) {
          console.error("API fetch failed:", j), v && f({});
        }
      if (p.type === "sql" && p.refid && p.refid != "0" && c?.operation !== "create") {
        if (!c) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const j = await zc.fetch(c, {
            source: {
              ...p,
              table: p.table,
              columns: p.columns,
              where: fe(p.where, {
                refid: u
              })
            },
            fields: Or(e.fields, c.operation)
          });
          v && f(j);
        } catch (j) {
          console.error("API fetch failed:", j);
        }
      }
    })(), () => {
      v = !1;
    };
  }, [
    r,
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.url || "",
    JSON.stringify(e?.source?.params ?? {}),
    JSON.stringify(e?.source?.body ?? {}),
    JSON.stringify(e?.source?.headers ?? {})
  ]);
  const x = async (v) => {
    const S = e?.source ?? {};
    let p = null;
    if (d.length > 0)
      try {
        p = await us();
      } catch (w) {
        console.log("catch fetchGeolocation", w), p = null;
      }
    const j = {
      ...v,
      ...Object.fromEntries(
        d.map((w) => [w, p])
      )
    };
    if (S.type === "method") {
      const w = S.method, y = w ? t[w] : void 0;
      if (y)
        try {
          const g = await Promise.resolve(y(j));
          l?.(null), s?.(g);
        } catch (g) {
          s?.(g), console.error("Method execution failed:", g);
        }
    }
    if (S.type === "api") {
      if (!c) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const w = await H({
          method: S.method || "POST",
          url: c.baseURL + S.endpoint,
          data: j ?? {},
          headers: {
            Authorization: `Bearer ${c?.accessToken}`
          }
        });
        l?.(null), s?.(w);
      } catch (w) {
        s?.(w), console.error("API fetch failed:", w);
      }
    }
    if (S.type === "sql") {
      const w = e.endPoints;
      if (!w) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const y = await H({
          method: "GET",
          url: w.baseURL + w.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${w?.accessToken}`
          }
        });
        let g = {
          ...S
        };
        S.where && (g = {
          ...S,
          where: fe(S.where, {
            refid: u
          })
        });
        const _ = await H({
          method: "POST",
          url: w.baseURL + w.dbopsGetRefId,
          data: {
            operation: w.operation,
            source: g,
            fields: Or(e.fields, w.operation),
            forcefill: e.forcefill,
            datahash: y.data.refhash
          },
          headers: {
            Authorization: `Bearer ${w?.accessToken}`
          }
        }), O = await H({
          method: "POST",
          url: w.baseURL + w[w.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: _.data.refid,
            fields: j,
            datahash: y.data.refhash
          },
          headers: {
            Authorization: `Bearer ${w?.accessToken}`
          }
        });
        l?.(null), s?.(O);
      } catch (y) {
        s?.(y), console.error("API fetch failed:", y);
      }
    }
  }, E = {
    simple: /* @__PURE__ */ o.jsx(
      Lc,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: h,
        onSubmit: x,
        onCancel: n,
        methods: t,
        components: a,
        ...c ? { sqlOpsUrls: c } : {},
        refid: u
      }
    )
  };
  return /* @__PURE__ */ o.jsx("div", { className: "relative", children: E.simple });
}
function gr({ tabObj: e, methods: t, tabName: r, sqlOpsUrls: n, refid: a, Reports: s, toast: i, handleAction: l, infoViewJson: c }) {
  const [u, h] = re(1), [f, d] = re(10), [x, E] = re(""), [v, S] = re(!1), [p, j] = re(null), [w, y] = ae.useState([]);
  de(null);
  const [g, _] = re(null), [O, B] = re({ key: "", direction: null }), [W, Z] = re(null), [D, ne] = ae.useState(null), G = e?.config;
  console.log("tabObj", e), console.log("source", G);
  const C = e?.config, N = C?.["popup.form"] ? "popup.form" : (C?.form, "form"), $ = C?.[N] && Object.keys(C?.[N]).length > 0, k = (T, P) => {
    ne(T);
  }, z = (T) => {
    j(T), S(!0);
  }, R = async () => {
    if (p?.id) {
      if (!n) {
        Z({ type: "error", message: "Delete configuration missing." });
        return;
      }
      try {
        let T = e?.config;
        const P = T?.["popup.form"] ? "popup.form" : (T?.form, "form");
        console.log("config?.[formType]", T?.[P]);
        const V = T?.[P];
        if (!V?.source) throw new Error("Form source missing");
        const Q = await H({
          method: "GET",
          url: n.baseURL + n.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${n.accessToken}`
          }
        });
        let J = { ...V.source, refid: p.id };
        V.source.where && (J = {
          ...J,
          where: fe(V.source.where, {
            refid: p.id
          })
        });
        const ge = await H({
          method: "POST",
          url: n.baseURL + n.dbopsGetRefId,
          data: {
            operation: "update",
            source: J,
            fields: V.fields,
            forcefill: V.forcefill,
            datahash: Q.data.refhash
          },
          headers: {
            Authorization: `Bearer ${n.accessToken}`
          }
        });
        await H({
          method: "POST",
          url: n.baseURL + n.dbopsUpdate,
          data: {
            refid: ge.data.refid,
            fields: { blocked: "true" },
            datahash: Q.data.refhash
          },
          headers: {
            Authorization: `Bearer ${n.accessToken}`
          }
        }), window.alert("Record deleted successfully.");
      } catch (T) {
        console.error(T), window.alert("Failed to delete record. Please try again");
      } finally {
        j(null), S(!1), setTimeout(() => Z(null), 3e3);
      }
    }
  }, b = () => {
    j(null), S(!1);
  };
  return /* @__PURE__ */ o.jsx(o.Fragment, { children: s ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      s,
      {
        methods: { ...t, deleteRecord: z, editRecord: k },
        report: {
          ...G,
          source: {
            table: G?.table,
            type: "sql",
            cols: G?.cols,
            where: G?.where,
            orderby: G?.orderby
          },
          endPoints: n,
          actions: { ...G?.actions, ...c?.buttons, ...c.actions },
          datagrid: G?.datagrid,
          buttons: G?.buttons
        },
        onButtonClick: l
      }
    ),
    $ && /* @__PURE__ */ o.jsx(fn, { formJson: { ...C[N], endPoints: n }, initialvalues: D ?? {} }),
    /* @__PURE__ */ o.jsx(
      xs,
      {
        open: v,
        onConfirm: R,
        onCancel: b
      }
    )
  ] }) : $ && /* @__PURE__ */ o.jsx(
    fn,
    {
      formJson: {
        ...C[N],
        endPoints: {
          ...n,
          operation: D ? "update" : "create"
        }
      },
      initialvalues: D ?? {},
      setEditData: ne
    }
  ) });
}
const hn = ({ groups: e, groupNames: t, setActiveTabIndex: r, activeTabIndex: n }) => /* @__PURE__ */ o.jsx(
  "nav",
  {
    className: "flex flex-col overflow-y-auto h-full px-2 py-1 space-y-1",
    children: t.length > 0 ? t.map((a, s) => /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "button",
        onClick: () => r(s),
        className: `cursor-pointer w-full text-left py-2 px-3 rounded-md text-sm font-semibold transition-all duration-200 ${n === s ? "bg-white shadow text-action" : "text-gray-600 hover:bg-white/50"}`,
        children: /* @__PURE__ */ o.jsx("span", { className: "truncate", children: e[a]?.label || a })
      },
      a
    )) : /* @__PURE__ */ o.jsx("div", { className: "py-3 px-2 text-sm text-gray-500", children: "No group available" })
  }
), Vc = ({
  groups: e,
  groupNames: t,
  setActiveTabIndex: r,
  activeTabIndex: n,
  layoutConfig: a,
  showScrollHint: s,
  isCommonInfo: i,
  tabsNavRef: l
}) => {
  const [c, u] = re(!1), h = de(null);
  return oe(() => {
    const f = (d) => {
      h.current && !h.current.contains(d.target) && u(!1);
    };
    return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, []), /* @__PURE__ */ o.jsxs("div", { className: a?.tabNavClass || "relative z-10", children: [
    s && /* @__PURE__ */ o.jsx("div", { className: "absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 flex items-center justify-center", children: /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => l.current?.scrollBy({ left: -200, behavior: "smooth" }),
        className: "w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group",
        children: /* @__PURE__ */ o.jsx("svg", { className: "w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
      }
    ) }),
    /* @__PURE__ */ o.jsxs("div", { className: "absolute right-0 top-1/2 -translate-y-1/2 z-20 w-18 flex items-center justify-between pr-1", children: [
      s && /* @__PURE__ */ o.jsx(
        "button",
        {
          onClick: () => l.current?.scrollBy({ left: 200, behavior: "smooth" }),
          className: "w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group",
          children: /* @__PURE__ */ o.jsx("svg", { className: "w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
        }
      ),
      /* @__PURE__ */ o.jsxs("div", { className: "relative", ref: h, children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            onClick: () => u(!c),
            className: "ml-1 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200",
            children: "⋮"
          }
        ),
        c && /* @__PURE__ */ o.jsx("div", { className: "absolute right-0 mt-2 w-48 max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-30", children: t.map((f, d) => /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              r(d), u(!1);
            },
            className: `w-full text-left px-3 py-2 text-sm truncate hover:bg-gray-100 ${n === d ? "bg-gray-50 font-semibold text-action" : "text-gray-700"}`,
            children: e[f]?.label || f
          },
          f
        )) })
      ] })
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: `relative bg-gray-100 ${i ? "" : "rounded-t-lg"} px-12 pt-1 shadow-inner overflow-hidden`, children: /* @__PURE__ */ o.jsx(
      "nav",
      {
        ref: l,
        className: "relative flex overflow-x-auto scrollbar-hide scroll-smooth",
        style: {
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        },
        children: t.length > 0 ? t.map((f, d) => /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            onClick: () => r(d),
            className: `relative cursor-pointer flex-shrink-0
            min-w-[8rem]   
            py-2 px-8
            rounded-t-lg text-xs sm:text-sm font-semibold
            transition-all duration-300 ease-out
            focus:outline-none whitespace-nowrap
            ${n === d ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
            children: /* @__PURE__ */ o.jsx("span", { className: "relative z-10 flex items-center justify-center gap-1 sm:gap-2", children: /* @__PURE__ */ o.jsx("span", { className: "truncate", children: e[f]?.label || f }) })
          },
          f
        )) : /* @__PURE__ */ o.jsx("div", { className: "py-3 px-6 text-sm text-gray-500", children: "No group available" })
      }
    ) })
  ] });
}, pn = ({
  groupNames: e,
  activeTabIndex: t,
  layoutConfig: r,
  tabObj: n,
  infoData: a,
  setActiveTabIndex: s,
  renderView: i,
  methods: l = {},
  refid: c,
  sqlOpsUrls: u
}) => /* @__PURE__ */ o.jsxs(
  "div",
  {
    className: "bg-white rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex-1 flex flex-col min-h-0",
    children: [
      e.length > 0 ? n?.fields ? /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ o.jsx("div", { className: r?.fieldGridClass || "grid grid-cols-12 gap-2", children: n.fields.map((h, f) => /* @__PURE__ */ o.jsx(
        "div",
        {
          className: `col-span-12 sm:col-span-6 ${ot[lt(h.width)] || "lg:col-span-2"}`,
          children: /* @__PURE__ */ o.jsx(
            ct,
            {
              field: h,
              data: a ?? {},
              methods: l,
              refid: c,
              ...u ? { sqlOpsUrls: u } : {}
            }
          )
        },
        h?.name ?? `field-${f}`
      )) }) }) : n ? /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: i(n, e[t] || "") }) : null : /* @__PURE__ */ o.jsx("div", { className: "flex-1 col-span-full text-center py-8 text-gray-500", children: "No data available" }),
      e.length > 5 && /* @__PURE__ */ o.jsxs("div", { className: "mt-10 pt-2 border-t border-gray-100 flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-500", children: [
          /* @__PURE__ */ o.jsxs("span", { children: [
            "Tab ",
            t + 1,
            " of ",
            e.length
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "flex gap-1", children: [
            e.slice(0, 5).map((h, f) => /* @__PURE__ */ o.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${f === t ? "bg-action w-6" : "bg-gray-300"}`
              },
              f
            )),
            e.length > 5 && /* @__PURE__ */ o.jsxs("span", { className: "text-xs text-gray-400 ml-1", children: [
              "+",
              e.length - 5
            ] })
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "hidden sm:flex gap-2", children: [
          /* @__PURE__ */ o.jsx(
            "button",
            {
              onClick: () => s(Math.max(0, t - 1)),
              disabled: t === 0,
              className: "px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
              children: "Previous"
            }
          ),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              onClick: () => s(Math.min(e.length - 1, t + 1)),
              disabled: t === e.length - 1,
              className: "px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
              children: "Next"
            }
          )
        ] })
      ] }),
      e.length <= 5 && /* @__PURE__ */ o.jsx("div", { className: "mt-6 pt-3 border-t border-gray-100", children: /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
        /* @__PURE__ */ o.jsxs("span", { children: [
          "Tab ",
          t + 1,
          " of ",
          e.length
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "flex gap-1", children: e.map((h, f) => /* @__PURE__ */ o.jsx(
          "div",
          {
            className: `w-2 h-2 rounded-full transition-all duration-300 ${f === t ? "bg-action w-6" : "bg-gray-300"}`
          },
          f
        )) })
      ] }) })
    ]
  },
  e[t]
);
function mn({
  groups: e,
  methods: t = {},
  infoData: r,
  viewRenderers: n = {},
  isCommonInfo: a,
  layoutConfig: s = {},
  viewMode: i,
  sqlOpsUrls: l,
  refid: c,
  Reports: u,
  toast: h = {},
  handleAction: f = () => {
  },
  infoViewJson: d
}) {
  const [x, E] = re(0), [v, S] = re(!1), p = de(null), j = Object.keys(e);
  oe(() => {
    const Z = () => {
      if (p.current) {
        const D = p.current;
        S(D.scrollWidth > D.clientWidth);
      }
    };
    return Z(), window.addEventListener("resize", Z), () => window.removeEventListener("resize", Z);
  }, [j.length]), oe(() => {
    if (p.current && j.length > 0) {
      const Z = p.current.children[x];
      Z && Z.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [x, j.length]);
  const w = i === "tableft", y = i === "tabright", g = !w && !y, _ = e[j[x] ?? ""] || null, O = {
    single: (Z, D) => /* @__PURE__ */ o.jsx(or, { tabObj: Z, methods: t, tabName: D, ...l ? { sqlOpsUrls: l } : {}, refid: c }),
    grid: (Z, D) => /* @__PURE__ */ o.jsx(
      gr,
      {
        ...u ? { Reports: u } : {},
        toast: h,
        handleAction: f,
        tabObj: Z,
        methods: t,
        tabName: D,
        ...l ? { sqlOpsUrls: l } : {},
        refid: c,
        infoViewJson: d
      }
    )
  }, B = _?.config?.uimode, W = n[B] || O[B] || (() => /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No UI mode for this type" }));
  return g ? /* @__PURE__ */ o.jsxs("div", { className: "flex-1 flex flex-col min-h-0 ", children: [
    /* @__PURE__ */ o.jsx(
      Vc,
      {
        groupNames: j,
        groups: e,
        setActiveTabIndex: E,
        activeTabIndex: x,
        tabsNavRef: p,
        isCommonInfo: a,
        showScrollHint: v,
        layoutConfig: s
      }
    ),
    /* @__PURE__ */ o.jsx(
      pn,
      {
        groupNames: j,
        activeTabIndex: x,
        layoutConfig: s,
        tabObj: _,
        infoData: r,
        setActiveTabIndex: E,
        renderView: W,
        groups: e,
        methods: t,
        refid: c,
        ...l ? { sqlOpsUrls: l } : {}
      }
    )
  ] }) : /* @__PURE__ */ o.jsxs("div", { className: "flex-1 flex min-h-0", children: [
    w && /* @__PURE__ */ o.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ o.jsx(
      hn,
      {
        groupNames: j,
        groups: e,
        setActiveTabIndex: E,
        activeTabIndex: x
      }
    ) }),
    /* @__PURE__ */ o.jsx("main", { className: "flex-1 flex flex-col min-h-0 overflow-auto", children: /* @__PURE__ */ o.jsx(
      pn,
      {
        groupNames: j,
        activeTabIndex: x,
        layoutConfig: s,
        tabObj: _,
        infoData: r,
        setActiveTabIndex: E,
        renderView: W,
        groups: e,
        methods: t,
        refid: c,
        ...l ? { sqlOpsUrls: l } : {}
      }
    ) }),
    y && /* @__PURE__ */ o.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ o.jsx(
      hn,
      {
        groupNames: j,
        groups: e,
        setActiveTabIndex: E,
        activeTabIndex: x
      }
    ) })
  ] });
}
function Bc({ title: e, children: t, isFirst: r }) {
  const [n, a] = re(r);
  return /* @__PURE__ */ o.jsx("div", { className: "group relative mt-1 flex-1 flex flex-col min-h-0 max-h-screen", children: /* @__PURE__ */ o.jsxs("div", { className: "flex-1 flex flex-col min-h-0 relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ o.jsxs(
      "button",
      {
        onClick: () => a(!n),
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: [
          /* @__PURE__ */ o.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ o.jsx("div", { className: `w-3 h-3 rounded-full transition-all duration-300 ${n ? "bg-action" : "bg-gray-300"}` }),
            /* @__PURE__ */ o.jsx("h3", { className: "text-md capitalize font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: e })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: `relative transition-all duration-300 ${n ? "rotate-180" : ""}`, children: [
            /* @__PURE__ */ o.jsx("div", { className: `absolute inset-0 rounded-full blur-md transition-opacity duration-300 ${n ? "bg-action opacity-30" : "bg-transparent opacity-0"}` }),
            /* @__PURE__ */ o.jsx(
              "svg",
              {
                className: "relative w-4 h-4 text-gray-500 group-hover:text-action-500 transition-colors duration-300",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ o.jsx(
      "div",
      {
        className: `flex-1 flex flex-col min-h-0 transition-all  duration-500 ease-in-out overflow-hidden ${n ? "max-h-full opacity-100" : "max-h-0 opacity-0"}`,
        children: /* @__PURE__ */ o.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white flex-1 flex flex-col min-h-0", children: /* @__PURE__ */ o.jsx("div", { className: "space-y-5 pt-4 flex-1 flex flex-col min-h-0 overflow-y-auto", children: t }) })
      }
    )
  ] }) });
}
function Uc({
  groups: e,
  methods: t = {},
  infoData: r,
  viewRenderers: n = {},
  sqlOpsUrls: a,
  refid: s,
  Reports: i,
  toast: l = {},
  handleAction: c = () => {
  },
  infoViewJson: u
}) {
  const h = {
    single: (f, d) => /* @__PURE__ */ o.jsx(
      or,
      {
        tabObj: f,
        methods: t,
        tabName: d,
        ...a ? { sqlOpsUrls: a } : {},
        refid: s
      }
    ),
    grid: (f, d) => /* @__PURE__ */ o.jsx(
      gr,
      {
        ...i ? { Reports: i } : {},
        toast: l,
        infoViewJson: u,
        handleAction: c,
        tabObj: f,
        methods: t,
        tabName: d,
        ...a ? { sqlOpsUrls: a } : {},
        refid: s
      }
    )
  };
  return /* @__PURE__ */ o.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ o.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ o.jsx("div", { className: "space-y-2 flex flex-col min-h-0", children: e && Object.entries(e).map(([f, d], x) => /* @__PURE__ */ o.jsx(Bc, { title: f, isFirst: x === 0, children: d?.fields ? /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ o.jsx("div", { className: "grid grid-cols-12 gap-2", children: d.fields.map((E, v) => /* @__PURE__ */ o.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${ot[lt(E.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ o.jsx(ct, { methods: t, field: E, data: r ?? {}, ...a ? { sqlOpsUrls: a } : {}, refid: s })
    },
    E?.name ?? `field-${v}`
  )) }) }) : d ? /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: n[d.config?.uimode]?.(d) || h[d.config?.uimode]?.(d, f) || /* @__PURE__ */ o.jsx("div", { children: "No renderer for this type" }) }) : null }, f)) }) }) });
}
function Gc({ title: e, children: t }) {
  return /* @__PURE__ */ o.jsx("div", { className: "group relative mt-1 flex-1 flex flex-col min-h-0 max-h-screen", children: /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col min-h-0 relative  bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ o.jsx(
      "button",
      {
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: /* @__PURE__ */ o.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ o.jsx("div", { className: "w-3 h-3 rounded-full transition-all duration-300 bg-action" }),
          /* @__PURE__ */ o.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r capitalize from-gray-800 to-gray-600 bg-clip-text text-transparent", children: e })
        ] })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "div",
      {
        className: `flex flex-col min-h-0 transition-all duration-500 ease-in-out opacity-100'
            }`,
        children: /* @__PURE__ */ o.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white flex flex-col min-h-0", children: /* @__PURE__ */ o.jsx("div", { className: "space-y-5 pt-4 flex-1 flex flex-col min-h-0 overflow-y-auto", children: t }) })
      }
    )
  ] }) });
}
function Yc({
  groups: e,
  methods: t = {},
  infoData: r,
  viewRenderers: n = {},
  sqlOpsUrls: a,
  refid: s,
  Reports: i,
  toast: l = {},
  handleAction: c = () => {
  },
  infoViewJson: u
}) {
  const h = {
    single: (f, d) => /* @__PURE__ */ o.jsx(or, { tabObj: f, methods: t, tabName: d, ...a ? { sqlOpsUrls: a } : {}, refid: s }),
    grid: (f, d) => /* @__PURE__ */ o.jsx(
      gr,
      {
        ...i ? { Reports: i } : {},
        toast: l,
        handleAction: c,
        tabObj: f,
        methods: t,
        tabName: d,
        ...a ? { sqlOpsUrls: a } : {},
        refid: s,
        infoViewJson: u
      }
    )
  };
  return /* @__PURE__ */ o.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ o.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ o.jsx("div", { className: "space-y-2  flex flex-col min-h-0", children: e && Object.entries(e).map(([f, d], x) => /* @__PURE__ */ o.jsx(Gc, { title: f, children: d?.fields ? /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ o.jsx("div", { className: "grid grid-cols-12 gap-2", children: d.fields.map((E, v) => /* @__PURE__ */ o.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${ot[lt(E.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ o.jsx(ct, { methods: t, field: E, data: r ?? {}, ...a ? { sqlOpsUrls: a } : {}, refid: s })
    },
    E?.name ?? `field-${v}`
  )) }) }) : d ? /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: n[d.config?.uimode]?.(d) || h[d.config?.uimode]?.(d, f) || /* @__PURE__ */ o.jsx("div", { children: "No renderer for this type" }) }) : null }, f)) }) }) });
}
function qc({
  infoViewJson: e,
  data: t = {},
  hiddenFields: r = [],
  groupFieldsFn: n = ls,
  layoutConfig: a = {},
  viewRenderers: s = {},
  methods: i = {},
  Reports: l,
  toast: c = {},
  handleAction: u = () => {
  }
}) {
  const [h, f] = ae.useState({}), d = os(e.infoview ?? {}), x = e.endPoints, E = ae.useMemo(
    () => n(e.fields || {}),
    [e.fields, n]
  ), v = e?.source?.refid;
  let S = { ...E };
  e.infoview?.groups && (S = { ...S, ...e.infoview.groups }), ae.useEffect(() => {
    let w = !1;
    return (async () => {
      const g = e?.source;
      if (!g?.type) {
        w || f({});
        return;
      }
      if (g.type === "method") {
        const _ = g.method, O = _ ? i[_] : void 0;
        if (O)
          try {
            const B = await Promise.resolve(O());
            w || f(B || {});
          } catch (B) {
            console.error("Method execution failed:", B), w || f({});
          }
        else
          w || f({});
      }
      if (g.type === "api")
        try {
          const _ = await H({
            method: g.method || "GET",
            url: g.url,
            data: g.body || {},
            params: g.params || {},
            headers: g.headers || {}
          });
          w || f(_.data || {});
        } catch (_) {
          console.error("API fetch failed:", _), w || f({});
        }
      if (g.type === "sql" && g.refid && g.refid != "0") {
        if (!x) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const _ = await H({
            method: "POST",
            url: x.baseURL + x.registerQuery,
            data: {
              query: {
                ...g,
                cols: g.cols,
                table: g.table,
                where: fe(g.where, {
                  refid: g.refid
                })
              }
            },
            headers: {
              Authorization: `Bearer ${x?.accessToken}`
            }
          }), O = await H({
            method: "POST",
            url: x.baseURL + x.runQuery,
            data: {
              queryid: _.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${x?.accessToken}`
            }
          }), B = Rn(O) ?? {};
          w || f(B);
        } catch (_) {
          console.error("API fetch failed:", _);
        }
      }
    })(), () => {
      w = !0;
    };
  }, [
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.url || "",
    JSON.stringify(e?.source?.params || {}),
    JSON.stringify(e?.source?.body || {}),
    JSON.stringify(e?.source?.headers || {})
  ]);
  const p = S.common || null;
  p && delete S.common;
  const j = (w) => {
    switch (w) {
      case "accordion":
        return /* @__PURE__ */ o.jsx(
          Uc,
          {
            groups: S,
            methods: i,
            infoData: h,
            viewRenderers: s,
            ...x ? { sqlOpsUrls: x } : {},
            refid: v,
            ...l ? { Reports: l } : {},
            toast: c,
            handleAction: u,
            infoViewJson: e
          }
        );
      case "tab":
      case "tableft":
      case "tabright":
        return /* @__PURE__ */ o.jsx(
          mn,
          {
            groups: S,
            viewRenderers: s,
            layoutConfig: a,
            methods: i,
            infoData: h,
            isCommonInfo: !!p,
            viewMode: w,
            ...x ? { sqlOpsUrls: x } : {},
            refid: v,
            ...l ? { Reports: l } : {},
            toast: c,
            handleAction: u,
            infoViewJson: e
          }
        );
      case "cards":
        return /* @__PURE__ */ o.jsx(
          Yc,
          {
            groups: S,
            viewRenderers: s,
            methods: i,
            infoData: h,
            ...x ? { sqlOpsUrls: x } : {},
            refid: v,
            ...l ? { Reports: l } : {},
            toast: c,
            handleAction: u,
            infoViewJson: e
          }
        );
      default:
        return /* @__PURE__ */ o.jsx(
          mn,
          {
            groups: S,
            viewRenderers: s,
            layoutConfig: a,
            methods: i,
            infoData: h,
            isCommonInfo: !!p,
            viewMode: w,
            ...x ? { sqlOpsUrls: x } : {},
            refid: v,
            ...l ? { Reports: l } : {},
            toast: c,
            handleAction: u,
            infoViewJson: e
          }
        );
    }
  };
  return /* @__PURE__ */ o.jsxs("div", { className: a.containerClass || "h-screen flex flex-col ", children: [
    p && /* @__PURE__ */ o.jsx(
      bs,
      {
        commonInfo: p,
        infoData: h,
        hiddenFields: r
      }
    ),
    j(d)
  ] });
}
export {
  qc as InfoView
};
