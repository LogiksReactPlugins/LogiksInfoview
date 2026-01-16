import ne, { useState as te, useRef as de, useEffect as ie, useCallback as ee, useMemo as Et, useLayoutEffect as pn, createContext as ga, forwardRef as ba, createElement as xa, useContext as va } from "react";
import H from "axios";
import { createPortal as wa } from "react-dom";
function mn(e) {
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
function ja() {
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
function Ta() {
  return vr || (vr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(b) {
      if (b == null) return null;
      if (typeof b == "function")
        return b.$$typeof === le ? null : b.displayName || b.name || null;
      if (typeof b == "string") return b;
      switch (b) {
        case v:
          return "Fragment";
        case p:
          return "Profiler";
        case E:
          return "StrictMode";
        case y:
          return "Suspense";
        case _:
          return "SuspenseList";
        case Q:
          return "Activity";
      }
      if (typeof b == "object")
        switch (typeof b.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), b.$$typeof) {
          case S:
            return "Portal";
          case w:
            return (b.displayName || "Context") + ".Provider";
          case j:
            return (b._context.displayName || "Context") + ".Consumer";
          case g:
            var T = b.render;
            return b = b.displayName, b || (b = T.displayName || T.name || "", b = b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef"), b;
          case N:
            return T = b.displayName || null, T !== null ? T : e(b.type) || "Memo";
          case V:
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
        var P = T.error, B = typeof Symbol == "function" && Symbol.toStringTag && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return P.call(
          T,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          B
        ), t(b);
      }
    }
    function n(b) {
      if (b === v) return "<>";
      if (typeof b == "object" && b !== null && b.$$typeof === V)
        return "<...>";
      try {
        var T = e(b);
        return T ? "<" + T + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var b = k.A;
      return b === null ? null : b.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(b) {
      if (re.call(b, "key")) {
        var T = Object.getOwnPropertyDescriptor(b, "key").get;
        if (T && T.isReactWarning) return !1;
      }
      return b.key !== void 0;
    }
    function l(b, T) {
      function P() {
        $ || ($ = !0, console.error(
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
      return A[b] || (A[b] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), b = this.props.ref, b !== void 0 ? b : null;
    }
    function u(b, T, P, B, q, X, ge, we) {
      return P = X.ref, b = {
        $$typeof: x,
        type: b,
        key: T,
        props: X,
        _owner: q
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
    function h(b, T, P, B, q, X, ge, we) {
      var J = T.children;
      if (J !== void 0)
        if (B)
          if (G(J)) {
            for (B = 0; B < J.length; B++)
              f(J[B]);
            Object.freeze && Object.freeze(J);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(J);
      if (re.call(T, "key")) {
        J = e(b);
        var ye = Object.keys(T).filter(function(Fe) {
          return Fe !== "key";
        });
        B = 0 < ye.length ? "{key: someKey, " + ye.join(": ..., ") + ": ...}" : "{key: someKey}", R[J + B] || (ye = 0 < ye.length ? "{" + ye.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          B,
          J,
          ye,
          J
        ), R[J + B] = !0);
      }
      if (J = null, P !== void 0 && (r(P), J = "" + P), i(T) && (r(T.key), J = "" + T.key), "key" in T) {
        P = {};
        for (var Ne in T)
          Ne !== "key" && (P[Ne] = T[Ne]);
      } else P = T;
      return J && l(
        P,
        typeof b == "function" ? b.displayName || b.name || "Unknown" : b
      ), u(
        b,
        J,
        X,
        q,
        a(),
        P,
        ge,
        we
      );
    }
    function f(b) {
      typeof b == "object" && b !== null && b.$$typeof === x && b._store && (b._store.validated = 1);
    }
    var d = ne, x = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), j = Symbol.for("react.consumer"), w = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), le = Symbol.for("react.client.reference"), k = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, re = Object.prototype.hasOwnProperty, G = Array.isArray, C = console.createTask ? console.createTask : function() {
      return null;
    };
    d = {
      react_stack_bottom_frame: function(b) {
        return b();
      }
    };
    var $, A = {}, M = d.react_stack_bottom_frame.bind(
      d,
      s
    )(), z = C(n(s)), R = {};
    Qe.Fragment = v, Qe.jsx = function(b, T, P, B, q) {
      var X = 1e4 > k.recentlyCreatedOwnerStacks++;
      return h(
        b,
        T,
        P,
        !1,
        B,
        q,
        X ? Error("react-stack-top-frame") : M,
        X ? C(n(b)) : z
      );
    }, Qe.jsxs = function(b, T, P, B, q) {
      var X = 1e4 > k.recentlyCreatedOwnerStacks++;
      return h(
        b,
        T,
        P,
        !0,
        B,
        q,
        X ? Error("react-stack-top-frame") : M,
        X ? C(n(b)) : z
      );
    };
  }()), Qe;
}
var wr;
function Ea() {
  return wr || (wr = 1, process.env.NODE_ENV === "production" ? ht.exports = ja() : ht.exports = Ta()), ht.exports;
}
var o = Ea(), Mt, jr;
function Sa() {
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
      return c.get(p) || c.set(p, function(g, y) {
        for (var _ = 0, N = j.length, V = g; _ < N - 1; ) {
          var Q = j[_];
          if (Q === "__proto__" || Q === "constructor" || Q === "prototype")
            return g;
          V = V[j[_++]];
        }
        V[j[_]] = y;
      });
    },
    getter: function(p, j) {
      var w = h(p);
      return u.get(p) || u.set(p, function(y) {
        for (var _ = 0, N = w.length; _ < N; )
          if (y != null || !j) y = y[w[_++]];
          else return;
        return y;
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
    var g = p.length, y, _, N, V;
    for (_ = 0; _ < g; _++)
      y = p[_], y && (E(y) && (y = '"' + y + '"'), V = x(y), N = !V && /^\d+$/.test(y), j.call(w, y, V, N, _, p));
  }
  function x(p) {
    return typeof p == "string" && p && ["'", '"'].indexOf(p.charAt(0)) !== -1;
  }
  function S(p) {
    return p.match(n) && !p.match(r);
  }
  function v(p) {
    return a.test(p);
  }
  function E(p) {
    return !x(p) && (S(p) || v(p));
  }
  return Mt;
}
var Ie = Sa(), kt, Tr;
function _a() {
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
var Lt = _a(), pt = { exports: {} }, Er;
function Na() {
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
    function d(x, S, v) {
      if (v.has(x)) {
        var E;
        try {
          E = ", node was:" + JSON.stringify(x);
        } catch {
          E = "";
        }
        throw new Error("Cyclic dependency" + E);
      }
      if (!f.has(x))
        throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(x));
      if (!c[S]) {
        c[S] = !0;
        var p = h.get(x) || /* @__PURE__ */ new Set();
        if (p = Array.from(p), S = p.length) {
          v.add(x);
          do {
            var j = p[--S];
            d(j, f.get(j), v);
          } while (S);
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
var $a = Na();
const Aa = /* @__PURE__ */ mn($a), Oa = Object.prototype.toString, Fa = Error.prototype.toString, Ca = RegExp.prototype.toString, Pa = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", Ra = /^Symbol\((.*)\)(.*)$/;
function Ia(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function Sr(e, t = !1) {
  if (e == null || e === !0 || e === !1) return "" + e;
  const r = typeof e;
  if (r === "number") return Ia(e);
  if (r === "string") return t ? `"${e}"` : e;
  if (r === "function") return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol") return Pa.call(e).replace(Ra, "Symbol($1)");
  const n = Oa.call(e).slice(8, -1);
  return n === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : n === "Error" || e instanceof Error ? "[" + Fa.call(e) + "]" : n === "RegExp" ? Ca.call(e) : null;
}
function Se(e, t) {
  let r = Sr(e, t);
  return r !== null ? r : JSON.stringify(e, function(n, a) {
    let s = Sr(this[n], t);
    return s !== null ? s : a;
  }, 2);
}
function yn(e) {
  return e == null ? [] : [].concat(e);
}
let gn, bn, xn, Da = /\$\{\s*(\w+)\s*\}/g;
gn = Symbol.toStringTag;
class _r {
  constructor(t, r, n, a) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[gn] = "Error", this.name = "ValidationError", this.value = r, this.path = n, this.type = a, this.errors = [], this.inner = [], yn(t).forEach((s) => {
      if (oe.isError(s)) {
        this.errors.push(...s.errors);
        const i = s.inner.length ? s.inner : [s];
        this.inner.push(...i);
      } else
        this.errors.push(s);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
bn = Symbol.hasInstance;
xn = Symbol.toStringTag;
class oe extends Error {
  static formatError(t, r) {
    const n = r.label || r.path || "this";
    return r = Object.assign({}, r, {
      path: n,
      originalPath: r.path
    }), typeof t == "string" ? t.replace(Da, (a, s) => Se(r[s])) : typeof t == "function" ? t(r) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, r, n, a, s) {
    const i = new _r(t, r, n, a);
    if (s)
      return i;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[xn] = "Error", this.name = i.name, this.message = i.message, this.type = i.type, this.value = i.value, this.path = i.path, this.errors = i.errors, this.inner = i.inner, Error.captureStackTrace && Error.captureStackTrace(this, oe);
  }
  static [bn](t) {
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
}, Ma = {
  isValue: "${path} field must be ${value}"
}, vt = {
  noUnknown: "${path} field has unspecified keys: ${unknown}",
  exact: "${path} object contains unknown properties: ${properties}"
}, wt = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, ka = {
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
    return oe.formatError(xe.notType, e);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: xe,
  string: ce,
  number: $e,
  date: qt,
  object: vt,
  array: wt,
  boolean: Ma,
  tuple: ka
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
      parent: S,
      context: v,
      abortEarly: E = i.spec.abortEarly,
      disableStackTrace: p = i.spec.disableStackTrace
    } = a;
    const j = {
      value: r,
      parent: S,
      context: v
    };
    function w(k = {}) {
      const re = vn(Object.assign({
        value: r,
        originalValue: s,
        label: i.spec.label,
        path: k.path || n,
        spec: i.spec,
        disableStackTrace: k.disableStackTrace || p
      }, f, k.params), j), G = new oe(oe.formatError(k.message || d, re), r, re.path, k.type || u, re.disableStackTrace);
      return G.params = re, G;
    }
    const g = E ? l : c;
    let y = {
      path: n,
      parent: S,
      type: u,
      from: a.from,
      createError: w,
      resolve(k) {
        return wn(k, j);
      },
      options: a,
      originalValue: s,
      schema: i
    };
    const _ = (k) => {
      oe.isError(k) ? g(k) : k ? c(null) : g(w());
    }, N = (k) => {
      oe.isError(k) ? g(k) : l(k);
    };
    if (x && Ee(r))
      return _(!0);
    let Q;
    try {
      var le;
      if (Q = h.call(y, r, y), typeof ((le = Q) == null ? void 0 : le.then) == "function") {
        if (a.sync)
          throw new Error(`Validation test of type: "${y.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(Q).then(_, N);
      }
    } catch (k) {
      N(k);
      return;
    }
    _(Q);
  }
  return t.OPTIONS = e, t;
}
function vn(e, t) {
  if (!e) return e;
  for (const r of Object.keys(e))
    e[r] = wn(e[r], t);
  return e;
}
function wn(e, t) {
  return ke.isRef(e) ? e.getValue(t.value, t.parent, t.context) : e;
}
function La(e, t, r, n = r) {
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
function za(e) {
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
function Va(e, t) {
  const r = t ? `${t}.${e.path}` : e.path;
  return e.errors.map((n) => ({
    message: n,
    path: za(r)
  }));
}
function jn(e, t) {
  var r;
  if (!((r = e.inner) != null && r.length) && e.errors.length)
    return Va(e, t);
  const n = t ? `${t}.${e.path}` : e.path;
  return e.inner.flatMap((a) => jn(a, n));
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
    let S = {
      value: i,
      originalValue: l,
      path: c,
      options: u,
      schema: this
    };
    for (let v = 0; v < s.length; v++) {
      const E = s[v];
      E(S, h, function(j) {
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
      oe.isError(c) && (c.value = u), l(c);
    }, (c, u) => {
      c.length ? l(new oe(c, u, void 0, void 0, s)) : i(u);
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
      throw oe.isError(l) && (l.value = c), l;
    }, (l, c) => {
      if (l.length) throw new oe(l, t, void 0, void 0, i);
      s = c;
    }), s;
  }
  isValid(t, r) {
    return this.validate(t, r).then(() => !0, (n) => {
      if (oe.isError(n)) return !1;
      throw n;
    });
  }
  isValidSync(t, r) {
    try {
      return this.validateSync(t, r), !0;
    } catch (n) {
      if (oe.isError(n)) return !1;
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
    let n = this.clone(), a = yn(t).map((s) => new ke(s));
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
        const u = c.OPTIONS.params && t ? vn(Object.assign({}, c.OPTIONS.params), t) : c.OPTIONS.params;
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
          if (a instanceof oe)
            return {
              issues: jn(a)
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
  } = La(this, t, r, n.context);
  return i[e](a && a[s], Object.assign({}, n, {
    parent: a,
    path: t
  }));
};
for (const e of ["equals", "is"]) he.prototype[e] = he.prototype.oneOf;
for (const e of ["not", "nope"]) he.prototype[e] = he.prototype.notOneOf;
const Ba = () => !0;
function Zt(e) {
  return new Tn(e);
}
class Tn extends he {
  constructor(t) {
    super(typeof t == "function" ? {
      type: "mixed",
      check: t
    } : Object.assign({
      type: "mixed",
      check: Ba
    }, t));
  }
}
Zt.prototype = Tn.prototype;
const Ua = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function Ga(e) {
  const t = Qt(e);
  if (!t) return Date.parse ? Date.parse(e) : Number.NaN;
  if (t.z === void 0 && t.plusMinus === void 0)
    return new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond).valueOf();
  let r = 0;
  return t.z !== "Z" && t.plusMinus !== void 0 && (r = t.hourOffset * 60 + t.minuteOffset, t.plusMinus === "+" && (r = 0 - r)), Date.UTC(t.year, t.month, t.day, t.hour, t.minute + r, t.second, t.millisecond);
}
function Qt(e) {
  var t, r;
  const n = Ua.exec(e);
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
let Ya = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), Ka = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), Ha = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, Wa = "^\\d{4}-\\d{2}-\\d{2}", qa = "\\d{2}:\\d{2}:\\d{2}", Za = "(([+-]\\d{2}(:?\\d{2})?)|Z)", Qa = new RegExp(`${Wa}T${qa}(\\.\\d+)?${Za}$`), Xa = (e) => Ee(e) || e === e.trim(), Ja = {}.toString();
function Je() {
  return new En();
}
class En extends he {
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
        return n === Ja ? t : n;
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
    return this.matches(Ya, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = ce.url) {
    return this.matches(Ka, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = ce.uuid) {
    return this.matches(Ha, {
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
    } = t : r = t), this.matches(Qa, {
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
      test: Xa
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
Je.prototype = En.prototype;
let es = (e) => e != +e;
function jt() {
  return new Sn();
}
class Sn extends he {
  constructor() {
    super({
      type: "number",
      check(t) {
        return t instanceof Number && (t = t.valueOf()), typeof t == "number" && !es(t);
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
jt.prototype = Sn.prototype;
let _n = /* @__PURE__ */ new Date(""), ts = (e) => Object.prototype.toString.call(e) === "[object Date]";
function ir() {
  return new it();
}
class it extends he {
  constructor() {
    super({
      type: "date",
      check(t) {
        return ts(t) && !isNaN(t.getTime());
      }
    }), this.withMutation(() => {
      this.transform((t, r) => !this.spec.coerce || this.isType(t) || t === null ? t : (t = Ga(t), isNaN(t) ? it.INVALID_DATE : new Date(t)));
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
it.INVALID_DATE = _n;
ir.prototype = it.prototype;
ir.INVALID_DATE = _n;
function rs(e, t = []) {
  let r = [], n = /* @__PURE__ */ new Set(), a = new Set(t.map(([i, l]) => `${i}-${l}`));
  function s(i, l) {
    let c = Ie.split(i)[0];
    n.add(c), a.has(`${l}-${c}`) || r.push([l, c]);
  }
  for (const i of Object.keys(e)) {
    let l = e[i];
    n.add(i), ke.isRef(l) && l.isSibling ? s(l.path, i) : $t(l) && "deps" in l && l.deps.forEach((c) => s(c, i));
  }
  return Aa.array(Array.from(n), r).reverse();
}
function Nr(e, t) {
  let r = 1 / 0;
  return e.some((n, a) => {
    var s;
    if ((s = t.path) != null && s.includes(n))
      return r = a, !0;
  }), r;
}
function Nn(e) {
  return (t, r) => Nr(e, t) - Nr(e, r);
}
const $n = (e, t, r) => {
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
const ns = (e, t) => {
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
const as = Nn([]);
function An(e) {
  return new On(e);
}
class On extends he {
  constructor(t) {
    super({
      type: "object",
      check(r) {
        return $r(r) || typeof r == "function";
      }
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = as, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
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
      let d = s[f], x = f in a, S = a[f];
      if (d) {
        let v;
        u.path = (r.path ? `${r.path}.` : "") + f, d = d.resolve({
          value: S,
          context: r.context,
          parent: c
        });
        let E = d instanceof he ? d.spec : void 0, p = E?.strict;
        if (E != null && E.strip) {
          h = h || f in a;
          continue;
        }
        v = !r.__validating || !p ? d.cast(S, u) : S, v !== void 0 && (c[f] = v);
      } else x && !i && (c[f] = S);
      (x !== f in c || c[f] !== S) && (h = !0);
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
    return n.fields = t, n._nodes = rs(t, r), n._sortErrors = Nn(Object.keys(t)), r && (n._excludedEdges = r), n;
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
      return ns(s, t) && (i = Object.assign({}, s), n || delete i[t], i[r] = a(s)), i;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform($n);
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
An.prototype = On.prototype;
function Xt(e) {
  return new Fn(e);
}
class Fn extends he {
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
    return this.transform($n);
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
Xt.prototype = Fn.prototype;
function ss(e) {
  return e.template ? e.template : "tab";
}
function is(e) {
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    const a = n.group || "General";
    t[a] || (t[a] = { label: a, type: "fields", fields: [] }), t[a]?.fields?.push({ name: r, ...n });
  }), t;
}
const os = (e) => Object.entries(e ?? {}).filter(([, t]) => t.type === "geolocation").map(([t]) => t);
async function ls() {
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
function cs(e, t = "create") {
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
) : e, Cn = (e) => {
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
const us = (e) => e === !0 || e === "true", ds = (e, t, r, n) => {
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
              const d = f.replace(/-/g, "/"), [x, S, v] = d.split("/");
              if (x && S && v)
                return /* @__PURE__ */ new Date(`${v}-${S}-${x}`);
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
function fs(e) {
  return typeof e == "object" && e !== null && typeof e.target == "string" && typeof e.src == "object" && e.src !== null && typeof e.src.table == "string";
}
function hs(e) {
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
}, ps = (e) => e ? typeof Object.values(e)[0] == "string" ? Object.entries(e) : Object.values(e).flatMap(
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
function ms(e) {
  return e ? Jt(e) ? Object.values(e).reduce((t, r) => (Object.assign(t, r), t), {}) : e : {};
}
const Pn = "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg";
function ct({ field: e, data: t, methods: r = {}, sqlOpsUrls: n, refid: a }) {
  const s = e?.name, i = `
    text-sm text-gray-600 break-words
  `, l = `
    block text-sm font-semibold  transition-all duration-300 text-gray-700 capitalize
  `, [c, u] = te(
    e.options ?? {}
  ), h = ne.useMemo(
    () => ms(c),
    [c]
  );
  ne.useEffect(() => {
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
            const g = await Promise.resolve(w());
            v && u(g ?? {});
          } catch (g) {
            console.error("Method execution failed:", g), v && u({});
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
          }), w = e.valueKey || "value", g = e.labelKey || "title", y = Re(w, g, j);
          v && u(y);
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
          }), g = await H({
            method: "POST",
            url: n.baseURL + n.runQuery,
            data: {
              queryid: w.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }), y = e.valueKey || "value", _ = e.labelKey || "title", N = Re(y, _, g);
          v && u(N);
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
  const f = typeof s == "string" ? t?.[s] : void 0, d = typeof f == "string" ? e.type === "date" ? f.split("T")[0] : e.type === "time" ? f.includes("T") ? f.slice(11, 16) : f.slice(0, 5) : Fr(f, h) : Fr(f, h), x = typeof s == "string" && (s.toLowerCase().includes("avatar") || s.toLowerCase().includes("logo")), S = d == null ? "" : typeof d == "string" || typeof d == "number" ? d : JSON.stringify(d);
  return /* @__PURE__ */ o.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ o.jsx("label", { className: l, children: e?.label }),
    /* @__PURE__ */ o.jsx("div", { className: "relative", children: x ? /* @__PURE__ */ o.jsx(
      "img",
      {
        src: String(d),
        alt: "avatar",
        className: "w-16 h-16 rounded-full object-cover border",
        onError: (v) => {
          const E = v.currentTarget;
          E.onerror = null, E.src = Pn;
        }
      }
    ) : /* @__PURE__ */ o.jsx("p", { className: i, children: S }) })
  ] });
}
function ys({ commonInfo: e, infoData: t, hiddenFields: r = [] }) {
  return /* @__PURE__ */ o.jsx("div", { className: "bg-white border border-gray-100 p-4 min-h-3/10 overflow-auto", children: /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    /* @__PURE__ */ o.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ o.jsx("div", { className: "relative w-42 h-42", children: /* @__PURE__ */ o.jsx(
      "img",
      {
        src: String(t.avatar_photo),
        alt: "Profile",
        className: " w-full h-full object-cover border-4 rounded-[12px] border-white shadow-lg",
        onError: (n) => {
          const a = n.currentTarget;
          a.onerror = null, a.src = Pn;
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
  const [s, i] = ne.useState(null);
  return ne.useEffect(() => {
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
          }), d = Cn(f);
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
function gs({
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
var bs = function(t) {
  return xs(t) && !vs(t);
};
function xs(e) {
  return !!e && typeof e == "object";
}
function vs(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || Ts(e);
}
var ws = typeof Symbol == "function" && Symbol.for, js = ws ? Symbol.for("react.element") : 60103;
function Ts(e) {
  return e.$$typeof === js;
}
function Es(e) {
  return Array.isArray(e) ? [] : {};
}
function Nt(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? nt(Es(e), e, t) : e;
}
function Ss(e, t, r) {
  return e.concat(t).map(function(n) {
    return Nt(n, r);
  });
}
function _s(e, t, r) {
  var n = {};
  return r.isMergeableObject(e) && Object.keys(e).forEach(function(a) {
    n[a] = Nt(e[a], r);
  }), Object.keys(t).forEach(function(a) {
    !r.isMergeableObject(t[a]) || !e[a] ? n[a] = Nt(t[a], r) : n[a] = nt(e[a], t[a], r);
  }), n;
}
function nt(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || Ss, r.isMergeableObject = r.isMergeableObject || bs;
  var n = Array.isArray(t), a = Array.isArray(e), s = n === a;
  return s ? n ? r.arrayMerge(e, t, r) : _s(e, t, r) : Nt(t, r);
}
nt.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(n, a) {
    return nt(n, a, r);
  }, {});
};
var er = nt, Rn = typeof global == "object" && global && global.Object === Object && global, Ns = typeof self == "object" && self && self.Object === Object && self, ve = Rn || Ns || Function("return this")(), Ae = ve.Symbol, In = Object.prototype, $s = In.hasOwnProperty, As = In.toString, Xe = Ae ? Ae.toStringTag : void 0;
function Os(e) {
  var t = $s.call(e, Xe), r = e[Xe];
  try {
    e[Xe] = void 0;
    var n = !0;
  } catch {
  }
  var a = As.call(e);
  return n && (t ? e[Xe] = r : delete e[Xe]), a;
}
var Fs = Object.prototype, Cs = Fs.toString;
function Ps(e) {
  return Cs.call(e);
}
var Rs = "[object Null]", Is = "[object Undefined]", Pr = Ae ? Ae.toStringTag : void 0;
function Le(e) {
  return e == null ? e === void 0 ? Is : Rs : Pr && Pr in Object(e) ? Os(e) : Ps(e);
}
function Dn(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var lr = Dn(Object.getPrototypeOf, Object);
function ze(e) {
  return e != null && typeof e == "object";
}
var Ds = "[object Object]", Ms = Function.prototype, ks = Object.prototype, Mn = Ms.toString, Ls = ks.hasOwnProperty, zs = Mn.call(Object);
function Rr(e) {
  if (!ze(e) || Le(e) != Ds)
    return !1;
  var t = lr(e);
  if (t === null)
    return !0;
  var r = Ls.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Mn.call(r) == zs;
}
function Vs() {
  this.__data__ = [], this.size = 0;
}
function kn(e, t) {
  return e === t || e !== e && t !== t;
}
function At(e, t) {
  for (var r = e.length; r--; )
    if (kn(e[r][0], t))
      return r;
  return -1;
}
var Bs = Array.prototype, Us = Bs.splice;
function Gs(e) {
  var t = this.__data__, r = At(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Us.call(t, r, 1), --this.size, !0;
}
function Ys(e) {
  var t = this.__data__, r = At(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Ks(e) {
  return At(this.__data__, e) > -1;
}
function Hs(e, t) {
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
_e.prototype.clear = Vs;
_e.prototype.delete = Gs;
_e.prototype.get = Ys;
_e.prototype.has = Ks;
_e.prototype.set = Hs;
function Ws() {
  this.__data__ = new _e(), this.size = 0;
}
function qs(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Zs(e) {
  return this.__data__.get(e);
}
function Qs(e) {
  return this.__data__.has(e);
}
function ut(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Xs = "[object AsyncFunction]", Js = "[object Function]", ei = "[object GeneratorFunction]", ti = "[object Proxy]";
function Ln(e) {
  if (!ut(e))
    return !1;
  var t = Le(e);
  return t == Js || t == ei || t == Xs || t == ti;
}
var zt = ve["__core-js_shared__"], Ir = function() {
  var e = /[^.]+$/.exec(zt && zt.keys && zt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ri(e) {
  return !!Ir && Ir in e;
}
var ni = Function.prototype, ai = ni.toString;
function Ve(e) {
  if (e != null) {
    try {
      return ai.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var si = /[\\^$.*+?()[\]{}|]/g, ii = /^\[object .+?Constructor\]$/, oi = Function.prototype, li = Object.prototype, ci = oi.toString, ui = li.hasOwnProperty, di = RegExp(
  "^" + ci.call(ui).replace(si, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function fi(e) {
  if (!ut(e) || ri(e))
    return !1;
  var t = Ln(e) ? di : ii;
  return t.test(Ve(e));
}
function hi(e, t) {
  return e?.[t];
}
function Be(e, t) {
  var r = hi(e, t);
  return fi(r) ? r : void 0;
}
var at = Be(ve, "Map"), st = Be(Object, "create");
function pi() {
  this.__data__ = st ? st(null) : {}, this.size = 0;
}
function mi(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var yi = "__lodash_hash_undefined__", gi = Object.prototype, bi = gi.hasOwnProperty;
function xi(e) {
  var t = this.__data__;
  if (st) {
    var r = t[e];
    return r === yi ? void 0 : r;
  }
  return bi.call(t, e) ? t[e] : void 0;
}
var vi = Object.prototype, wi = vi.hasOwnProperty;
function ji(e) {
  var t = this.__data__;
  return st ? t[e] !== void 0 : wi.call(t, e);
}
var Ti = "__lodash_hash_undefined__";
function Ei(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = st && t === void 0 ? Ti : t, this;
}
function Me(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Me.prototype.clear = pi;
Me.prototype.delete = mi;
Me.prototype.get = xi;
Me.prototype.has = ji;
Me.prototype.set = Ei;
function Si() {
  this.size = 0, this.__data__ = {
    hash: new Me(),
    map: new (at || _e)(),
    string: new Me()
  };
}
function _i(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ot(e, t) {
  var r = e.__data__;
  return _i(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Ni(e) {
  var t = Ot(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function $i(e) {
  return Ot(this, e).get(e);
}
function Ai(e) {
  return Ot(this, e).has(e);
}
function Oi(e, t) {
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
Oe.prototype.clear = Si;
Oe.prototype.delete = Ni;
Oe.prototype.get = $i;
Oe.prototype.has = Ai;
Oe.prototype.set = Oi;
var Fi = 200;
function Ci(e, t) {
  var r = this.__data__;
  if (r instanceof _e) {
    var n = r.__data__;
    if (!at || n.length < Fi - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Oe(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function qe(e) {
  var t = this.__data__ = new _e(e);
  this.size = t.size;
}
qe.prototype.clear = Ws;
qe.prototype.delete = qs;
qe.prototype.get = Zs;
qe.prototype.has = Qs;
qe.prototype.set = Ci;
function Pi(e, t) {
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
function zn(e, t, r) {
  t == "__proto__" && Dr ? Dr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Ri = Object.prototype, Ii = Ri.hasOwnProperty;
function Vn(e, t, r) {
  var n = e[t];
  (!(Ii.call(e, t) && kn(n, r)) || r === void 0 && !(t in e)) && zn(e, t, r);
}
function Ft(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var s = -1, i = t.length; ++s < i; ) {
    var l = t[s], c = void 0;
    c === void 0 && (c = e[l]), a ? zn(r, l, c) : Vn(r, l, c);
  }
  return r;
}
function Di(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Mi = "[object Arguments]";
function Mr(e) {
  return ze(e) && Le(e) == Mi;
}
var Bn = Object.prototype, ki = Bn.hasOwnProperty, Li = Bn.propertyIsEnumerable, zi = Mr(/* @__PURE__ */ function() {
  return arguments;
}()) ? Mr : function(e) {
  return ze(e) && ki.call(e, "callee") && !Li.call(e, "callee");
}, dt = Array.isArray;
function Vi() {
  return !1;
}
var Un = typeof exports == "object" && exports && !exports.nodeType && exports, kr = Un && typeof module == "object" && module && !module.nodeType && module, Bi = kr && kr.exports === Un, Lr = Bi ? ve.Buffer : void 0, Ui = Lr ? Lr.isBuffer : void 0, Gn = Ui || Vi, Gi = 9007199254740991, Yi = /^(?:0|[1-9]\d*)$/;
function Ki(e, t) {
  var r = typeof e;
  return t = t ?? Gi, !!t && (r == "number" || r != "symbol" && Yi.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Hi = 9007199254740991;
function Yn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Hi;
}
var Wi = "[object Arguments]", qi = "[object Array]", Zi = "[object Boolean]", Qi = "[object Date]", Xi = "[object Error]", Ji = "[object Function]", eo = "[object Map]", to = "[object Number]", ro = "[object Object]", no = "[object RegExp]", ao = "[object Set]", so = "[object String]", io = "[object WeakMap]", oo = "[object ArrayBuffer]", lo = "[object DataView]", co = "[object Float32Array]", uo = "[object Float64Array]", fo = "[object Int8Array]", ho = "[object Int16Array]", po = "[object Int32Array]", mo = "[object Uint8Array]", yo = "[object Uint8ClampedArray]", go = "[object Uint16Array]", bo = "[object Uint32Array]", Z = {};
Z[co] = Z[uo] = Z[fo] = Z[ho] = Z[po] = Z[mo] = Z[yo] = Z[go] = Z[bo] = !0;
Z[Wi] = Z[qi] = Z[oo] = Z[Zi] = Z[lo] = Z[Qi] = Z[Xi] = Z[Ji] = Z[eo] = Z[to] = Z[ro] = Z[no] = Z[ao] = Z[so] = Z[io] = !1;
function xo(e) {
  return ze(e) && Yn(e.length) && !!Z[Le(e)];
}
function cr(e) {
  return function(t) {
    return e(t);
  };
}
var Kn = typeof exports == "object" && exports && !exports.nodeType && exports, et = Kn && typeof module == "object" && module && !module.nodeType && module, vo = et && et.exports === Kn, Vt = vo && Rn.process, We = function() {
  try {
    var e = et && et.require && et.require("util").types;
    return e || Vt && Vt.binding && Vt.binding("util");
  } catch {
  }
}(), zr = We && We.isTypedArray, wo = zr ? cr(zr) : xo, jo = Object.prototype, To = jo.hasOwnProperty;
function Hn(e, t) {
  var r = dt(e), n = !r && zi(e), a = !r && !n && Gn(e), s = !r && !n && !a && wo(e), i = r || n || a || s, l = i ? Di(e.length, String) : [], c = l.length;
  for (var u in e)
    (t || To.call(e, u)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ki(u, c))) && l.push(u);
  return l;
}
var Eo = Object.prototype;
function ur(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Eo;
  return e === r;
}
var So = Dn(Object.keys, Object), _o = Object.prototype, No = _o.hasOwnProperty;
function $o(e) {
  if (!ur(e))
    return So(e);
  var t = [];
  for (var r in Object(e))
    No.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function Wn(e) {
  return e != null && Yn(e.length) && !Ln(e);
}
function dr(e) {
  return Wn(e) ? Hn(e) : $o(e);
}
function Ao(e, t) {
  return e && Ft(t, dr(t), e);
}
function Oo(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Fo = Object.prototype, Co = Fo.hasOwnProperty;
function Po(e) {
  if (!ut(e))
    return Oo(e);
  var t = ur(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Co.call(e, n)) || r.push(n);
  return r;
}
function fr(e) {
  return Wn(e) ? Hn(e, !0) : Po(e);
}
function Ro(e, t) {
  return e && Ft(t, fr(t), e);
}
var qn = typeof exports == "object" && exports && !exports.nodeType && exports, Vr = qn && typeof module == "object" && module && !module.nodeType && module, Io = Vr && Vr.exports === qn, Br = Io ? ve.Buffer : void 0, Ur = Br ? Br.allocUnsafe : void 0;
function Do(e, t) {
  if (t)
    return e.slice();
  var r = e.length, n = Ur ? Ur(r) : new e.constructor(r);
  return e.copy(n), n;
}
function Zn(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
function Mo(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, s = []; ++r < n; ) {
    var i = e[r];
    t(i, r, e) && (s[a++] = i);
  }
  return s;
}
function Qn() {
  return [];
}
var ko = Object.prototype, Lo = ko.propertyIsEnumerable, Gr = Object.getOwnPropertySymbols, hr = Gr ? function(e) {
  return e == null ? [] : (e = Object(e), Mo(Gr(e), function(t) {
    return Lo.call(e, t);
  }));
} : Qn;
function zo(e, t) {
  return Ft(e, hr(e), t);
}
function Xn(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var Vo = Object.getOwnPropertySymbols, Jn = Vo ? function(e) {
  for (var t = []; e; )
    Xn(t, hr(e)), e = lr(e);
  return t;
} : Qn;
function Bo(e, t) {
  return Ft(e, Jn(e), t);
}
function ea(e, t, r) {
  var n = t(e);
  return dt(e) ? n : Xn(n, r(e));
}
function Uo(e) {
  return ea(e, dr, hr);
}
function Go(e) {
  return ea(e, fr, Jn);
}
var tr = Be(ve, "DataView"), rr = Be(ve, "Promise"), nr = Be(ve, "Set"), ar = Be(ve, "WeakMap"), Yr = "[object Map]", Yo = "[object Object]", Kr = "[object Promise]", Hr = "[object Set]", Wr = "[object WeakMap]", qr = "[object DataView]", Ko = Ve(tr), Ho = Ve(at), Wo = Ve(rr), qo = Ve(nr), Zo = Ve(ar), Te = Le;
(tr && Te(new tr(new ArrayBuffer(1))) != qr || at && Te(new at()) != Yr || rr && Te(rr.resolve()) != Kr || nr && Te(new nr()) != Hr || ar && Te(new ar()) != Wr) && (Te = function(e) {
  var t = Le(e), r = t == Yo ? e.constructor : void 0, n = r ? Ve(r) : "";
  if (n)
    switch (n) {
      case Ko:
        return qr;
      case Ho:
        return Yr;
      case Wo:
        return Kr;
      case qo:
        return Hr;
      case Zo:
        return Wr;
    }
  return t;
});
var Qo = Object.prototype, Xo = Qo.hasOwnProperty;
function Jo(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && Xo.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var Zr = ve.Uint8Array;
function pr(e) {
  var t = new e.constructor(e.byteLength);
  return new Zr(t).set(new Zr(e)), t;
}
function el(e, t) {
  var r = t ? pr(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var tl = /\w*$/;
function rl(e) {
  var t = new e.constructor(e.source, tl.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Qr = Ae ? Ae.prototype : void 0, Xr = Qr ? Qr.valueOf : void 0;
function nl(e) {
  return Xr ? Object(Xr.call(e)) : {};
}
function al(e, t) {
  var r = t ? pr(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var sl = "[object Boolean]", il = "[object Date]", ol = "[object Map]", ll = "[object Number]", cl = "[object RegExp]", ul = "[object Set]", dl = "[object String]", fl = "[object Symbol]", hl = "[object ArrayBuffer]", pl = "[object DataView]", ml = "[object Float32Array]", yl = "[object Float64Array]", gl = "[object Int8Array]", bl = "[object Int16Array]", xl = "[object Int32Array]", vl = "[object Uint8Array]", wl = "[object Uint8ClampedArray]", jl = "[object Uint16Array]", Tl = "[object Uint32Array]";
function El(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case hl:
      return pr(e);
    case sl:
    case il:
      return new n(+e);
    case pl:
      return el(e, r);
    case ml:
    case yl:
    case gl:
    case bl:
    case xl:
    case vl:
    case wl:
    case jl:
    case Tl:
      return al(e, r);
    case ol:
      return new n();
    case ll:
    case dl:
      return new n(e);
    case cl:
      return rl(e);
    case ul:
      return new n();
    case fl:
      return nl(e);
  }
}
var Jr = Object.create, Sl = /* @__PURE__ */ function() {
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
function _l(e) {
  return typeof e.constructor == "function" && !ur(e) ? Sl(lr(e)) : {};
}
var Nl = "[object Map]";
function $l(e) {
  return ze(e) && Te(e) == Nl;
}
var en = We && We.isMap, Al = en ? cr(en) : $l, Ol = "[object Set]";
function Fl(e) {
  return ze(e) && Te(e) == Ol;
}
var tn = We && We.isSet, Cl = tn ? cr(tn) : Fl, Pl = 1, Rl = 2, Il = 4, ta = "[object Arguments]", Dl = "[object Array]", Ml = "[object Boolean]", kl = "[object Date]", Ll = "[object Error]", ra = "[object Function]", zl = "[object GeneratorFunction]", Vl = "[object Map]", Bl = "[object Number]", na = "[object Object]", Ul = "[object RegExp]", Gl = "[object Set]", Yl = "[object String]", Kl = "[object Symbol]", Hl = "[object WeakMap]", Wl = "[object ArrayBuffer]", ql = "[object DataView]", Zl = "[object Float32Array]", Ql = "[object Float64Array]", Xl = "[object Int8Array]", Jl = "[object Int16Array]", ec = "[object Int32Array]", tc = "[object Uint8Array]", rc = "[object Uint8ClampedArray]", nc = "[object Uint16Array]", ac = "[object Uint32Array]", W = {};
W[ta] = W[Dl] = W[Wl] = W[ql] = W[Ml] = W[kl] = W[Zl] = W[Ql] = W[Xl] = W[Jl] = W[ec] = W[Vl] = W[Bl] = W[na] = W[Ul] = W[Gl] = W[Yl] = W[Kl] = W[tc] = W[rc] = W[nc] = W[ac] = !0;
W[Ll] = W[ra] = W[Hl] = !1;
function tt(e, t, r, n, a, s) {
  var i, l = t & Pl, c = t & Rl, u = t & Il;
  if (i !== void 0)
    return i;
  if (!ut(e))
    return e;
  var h = dt(e);
  if (h) {
    if (i = Jo(e), !l)
      return Zn(e, i);
  } else {
    var f = Te(e), d = f == ra || f == zl;
    if (Gn(e))
      return Do(e, l);
    if (f == na || f == ta || d && !a) {
      if (i = c || d ? {} : _l(e), !l)
        return c ? Bo(e, Ro(i, e)) : zo(e, Ao(i, e));
    } else {
      if (!W[f])
        return a ? e : {};
      i = El(e, f, l);
    }
  }
  s || (s = new qe());
  var x = s.get(e);
  if (x)
    return x;
  s.set(e, i), Cl(e) ? e.forEach(function(E) {
    i.add(tt(E, t, r, E, e, s));
  }) : Al(e) && e.forEach(function(E, p) {
    i.set(p, tt(E, t, r, p, e, s));
  });
  var S = u ? c ? Go : Uo : c ? fr : dr, v = h ? void 0 : S(e);
  return Pi(v || e, function(E, p) {
    v && (p = E, E = e[p]), Vn(i, p, tt(E, t, r, p, e, s));
  }), i;
}
var sc = 1, ic = 4;
function gt(e) {
  return tt(e, sc | ic);
}
var Bt, rn;
function oc() {
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
      var S = s instanceof RegExp, v = i instanceof RegExp;
      if (S != v) return !1;
      if (S && v) return s.toString() == i.toString();
      var E = t(s);
      if (h = E.length, h !== t(i).length)
        return !1;
      for (u = h; u-- !== 0; )
        if (!r.call(i, E[u])) return !1;
      if (n && s instanceof Element && i instanceof Element)
        return s === i;
      for (u = h; u-- !== 0; )
        if (f = E[u], !(f === "_owner" && s.$$typeof) && !a(s[f], i[f]))
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
var lc = oc();
const Pe = /* @__PURE__ */ mn(lc);
var cc = process.env.NODE_ENV === "production";
function He(e, t) {
  if (!cc) {
    var r = "Warning: " + t;
    typeof console < "u" && console.warn(r);
    try {
      throw Error(r);
    } catch {
    }
  }
}
var uc = 4;
function nn(e) {
  return tt(e, uc);
}
function aa(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var dc = "[object Symbol]";
function mr(e) {
  return typeof e == "symbol" || ze(e) && Le(e) == dc;
}
var fc = "Expected a function";
function yr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(fc);
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
var hc = 500;
function pc(e) {
  var t = yr(e, function(n) {
    return r.size === hc && r.clear(), n;
  }), r = t.cache;
  return t;
}
var mc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, yc = /\\(\\)?/g, gc = pc(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(mc, function(r, n, a, s) {
    t.push(a ? s.replace(yc, "$1") : n || r);
  }), t;
});
function bc(e) {
  if (typeof e == "string" || mr(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var an = Ae ? Ae.prototype : void 0, sn = an ? an.toString : void 0;
function sa(e) {
  if (typeof e == "string")
    return e;
  if (dt(e))
    return aa(e, sa) + "";
  if (mr(e))
    return sn ? sn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function xc(e) {
  return e == null ? "" : sa(e);
}
function ia(e) {
  return dt(e) ? aa(e, bc) : mr(e) ? [e] : Zn(gc(xc(e)));
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
function vc() {
  if (on) return Y;
  on = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, p = e ? Symbol.for("react.responder") : 60118, j = e ? Symbol.for("react.scope") : 60119;
  function w(y) {
    if (typeof y == "object" && y !== null) {
      var _ = y.$$typeof;
      switch (_) {
        case t:
          switch (y = y.type, y) {
            case c:
            case u:
            case n:
            case s:
            case a:
            case f:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case l:
                case h:
                case S:
                case x:
                case i:
                  return y;
                default:
                  return _;
              }
          }
        case r:
          return _;
      }
    }
  }
  function g(y) {
    return w(y) === u;
  }
  return Y.AsyncMode = c, Y.ConcurrentMode = u, Y.ContextConsumer = l, Y.ContextProvider = i, Y.Element = t, Y.ForwardRef = h, Y.Fragment = n, Y.Lazy = S, Y.Memo = x, Y.Portal = r, Y.Profiler = s, Y.StrictMode = a, Y.Suspense = f, Y.isAsyncMode = function(y) {
    return g(y) || w(y) === c;
  }, Y.isConcurrentMode = g, Y.isContextConsumer = function(y) {
    return w(y) === l;
  }, Y.isContextProvider = function(y) {
    return w(y) === i;
  }, Y.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, Y.isForwardRef = function(y) {
    return w(y) === h;
  }, Y.isFragment = function(y) {
    return w(y) === n;
  }, Y.isLazy = function(y) {
    return w(y) === S;
  }, Y.isMemo = function(y) {
    return w(y) === x;
  }, Y.isPortal = function(y) {
    return w(y) === r;
  }, Y.isProfiler = function(y) {
    return w(y) === s;
  }, Y.isStrictMode = function(y) {
    return w(y) === a;
  }, Y.isSuspense = function(y) {
    return w(y) === f;
  }, Y.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === u || y === s || y === a || y === f || y === d || typeof y == "object" && y !== null && (y.$$typeof === S || y.$$typeof === x || y.$$typeof === i || y.$$typeof === l || y.$$typeof === h || y.$$typeof === E || y.$$typeof === p || y.$$typeof === j || y.$$typeof === v);
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
function wc() {
  return ln || (ln = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, p = e ? Symbol.for("react.responder") : 60118, j = e ? Symbol.for("react.scope") : 60119;
    function w(I) {
      return typeof I == "string" || typeof I == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      I === n || I === u || I === s || I === a || I === f || I === d || typeof I == "object" && I !== null && (I.$$typeof === S || I.$$typeof === x || I.$$typeof === i || I.$$typeof === l || I.$$typeof === h || I.$$typeof === E || I.$$typeof === p || I.$$typeof === j || I.$$typeof === v);
    }
    function g(I) {
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
                  case S:
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
    var y = c, _ = u, N = l, V = i, Q = t, le = h, k = n, re = S, G = x, C = r, $ = s, A = a, M = f, z = !1;
    function R(I) {
      return z || (z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), b(I) || g(I) === c;
    }
    function b(I) {
      return g(I) === u;
    }
    function T(I) {
      return g(I) === l;
    }
    function P(I) {
      return g(I) === i;
    }
    function B(I) {
      return typeof I == "object" && I !== null && I.$$typeof === t;
    }
    function q(I) {
      return g(I) === h;
    }
    function X(I) {
      return g(I) === n;
    }
    function ge(I) {
      return g(I) === S;
    }
    function we(I) {
      return g(I) === x;
    }
    function J(I) {
      return g(I) === r;
    }
    function ye(I) {
      return g(I) === s;
    }
    function Ne(I) {
      return g(I) === a;
    }
    function Fe(I) {
      return g(I) === f;
    }
    K.AsyncMode = y, K.ConcurrentMode = _, K.ContextConsumer = N, K.ContextProvider = V, K.Element = Q, K.ForwardRef = le, K.Fragment = k, K.Lazy = re, K.Memo = G, K.Portal = C, K.Profiler = $, K.StrictMode = A, K.Suspense = M, K.isAsyncMode = R, K.isConcurrentMode = b, K.isContextConsumer = T, K.isContextProvider = P, K.isElement = B, K.isForwardRef = q, K.isFragment = X, K.isLazy = ge, K.isMemo = we, K.isPortal = J, K.isProfiler = ye, K.isStrictMode = Ne, K.isSuspense = Fe, K.isValidElementType = w, K.typeOf = g;
  }()), K;
}
var cn;
function jc() {
  return cn || (cn = 1, process.env.NODE_ENV === "production" ? bt.exports = vc() : bt.exports = wc()), bt.exports;
}
var Ut, un;
function Tc() {
  if (un) return Ut;
  un = 1;
  var e = jc(), t = {
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
  function i(S) {
    return e.isMemo(S) ? a : s[S.$$typeof] || t;
  }
  var l = Object.defineProperty, c = Object.getOwnPropertyNames, u = Object.getOwnPropertySymbols, h = Object.getOwnPropertyDescriptor, f = Object.getPrototypeOf, d = Object.prototype;
  function x(S, v, E) {
    if (typeof v != "string") {
      if (d) {
        var p = f(v);
        p && p !== d && x(S, p, E);
      }
      var j = c(v);
      u && (j = j.concat(u(v)));
      for (var w = i(S), g = i(v), y = 0; y < j.length; ++y) {
        var _ = j[y];
        if (!r[_] && !(E && E[_]) && !(g && g[_]) && !(w && w[_])) {
          var N = h(v, _);
          try {
            l(S, _, N);
          } catch {
          }
        }
      }
    }
    return S;
  }
  return Ut = x, Ut;
}
Tc();
function se() {
  return se = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, se.apply(this, arguments);
}
function oa(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, s;
  for (s = 0; s < n.length; s++)
    a = n[s], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var Ct = /* @__PURE__ */ ga(void 0);
Ct.displayName = "FormikContext";
Ct.Provider;
Ct.Consumer;
function Ec() {
  var e = va(Ct);
  return e || (process.env.NODE_ENV !== "production" ? He(!1, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.") : He()), e;
}
var me = function(t) {
  return typeof t == "function";
}, Pt = function(t) {
  return t !== null && typeof t == "object";
}, Sc = function(t) {
  return String(Math.floor(Number(t))) === t;
}, Gt = function(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}, Yt = function(t) {
  return Pt(t) && me(t.then);
};
function _c(e) {
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
  for (var a = ia(t); e && n < a.length; )
    e = e[a[n++]];
  return n !== a.length && !e || e === void 0 ? r : e;
}
function De(e, t, r) {
  for (var n = nn(e), a = n, s = 0, i = ia(t); s < i.length - 1; s++) {
    var l = i[s], c = ue(e, i.slice(0, s + 1));
    if (c && (Pt(c) || Array.isArray(c)))
      a = a[l] = nn(c);
    else {
      var u = i[s + 1];
      a = a[l] = Sc(u) && Number(u) >= 0 ? [] : {};
    }
  }
  return (s === 0 ? e : a)[i[s]] === r ? e : (r === void 0 ? delete a[i[s]] : a[i[s]] = r, s === 0 && r === void 0 && delete n[i[s]], n);
}
function la(e, t, r, n) {
  r === void 0 && (r = /* @__PURE__ */ new WeakMap()), n === void 0 && (n = {});
  for (var a = 0, s = Object.keys(e); a < s.length; a++) {
    var i = s[a], l = e[i];
    Pt(l) ? r.get(l) || (r.set(l, !0), n[i] = Array.isArray(l) ? [] : {}, la(l, t, r, n[i])) : n[i] = t;
  }
  return n;
}
function Nc(e, t) {
  switch (t.type) {
    case "SET_VALUES":
      return se({}, e, {
        values: t.payload
      });
    case "SET_TOUCHED":
      return se({}, e, {
        touched: t.payload
      });
    case "SET_ERRORS":
      return Pe(e.errors, t.payload) ? e : se({}, e, {
        errors: t.payload
      });
    case "SET_STATUS":
      return se({}, e, {
        status: t.payload
      });
    case "SET_ISSUBMITTING":
      return se({}, e, {
        isSubmitting: t.payload
      });
    case "SET_ISVALIDATING":
      return se({}, e, {
        isValidating: t.payload
      });
    case "SET_FIELD_VALUE":
      return se({}, e, {
        values: De(e.values, t.payload.field, t.payload.value)
      });
    case "SET_FIELD_TOUCHED":
      return se({}, e, {
        touched: De(e.touched, t.payload.field, t.payload.value)
      });
    case "SET_FIELD_ERROR":
      return se({}, e, {
        errors: De(e.errors, t.payload.field, t.payload.value)
      });
    case "RESET_FORM":
      return se({}, e, t.payload);
    case "SET_FORMIK_STATE":
      return t.payload(e);
    case "SUBMIT_ATTEMPT":
      return se({}, e, {
        touched: la(e.values, !0),
        isSubmitting: !0,
        submitCount: e.submitCount + 1
      });
    case "SUBMIT_FAILURE":
      return se({}, e, {
        isSubmitting: !1
      });
    case "SUBMIT_SUCCESS":
      return se({}, e, {
        isSubmitting: !1
      });
    default:
      return e;
  }
}
var Ce = {}, xt = {};
function $c(e) {
  var t = e.validateOnChange, r = t === void 0 ? !0 : t, n = e.validateOnBlur, a = n === void 0 ? !0 : n, s = e.validateOnMount, i = s === void 0 ? !1 : s, l = e.isInitialValid, c = e.enableReinitialize, u = c === void 0 ? !1 : c, h = e.onSubmit, f = oa(e, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]), d = se({
    validateOnChange: r,
    validateOnBlur: a,
    validateOnMount: i,
    onSubmit: h
  }, f), x = de(d.initialValues), S = de(d.initialErrors || Ce), v = de(d.initialTouched || xt), E = de(d.initialStatus), p = de(!1), j = de({});
  process.env.NODE_ENV !== "production" && ie(function() {
    typeof l > "u" || (process.env.NODE_ENV !== "production" ? He(!1, "isInitialValid has been deprecated and will be removed in future versions of Formik. Please use initialErrors or validateOnMount instead.") : He());
  }, []), ie(function() {
    return p.current = !0, function() {
      p.current = !1;
    };
  }, []);
  var w = te(0), g = w[1], y = de({
    values: gt(d.initialValues),
    errors: gt(d.initialErrors) || Ce,
    touched: gt(d.initialTouched) || xt,
    status: gt(d.initialStatus),
    isSubmitting: !1,
    isValidating: !1,
    submitCount: 0
  }), _ = y.current, N = ee(function(m) {
    var O = y.current;
    y.current = Nc(O, m), O !== y.current && g(function(F) {
      return F + 1;
    });
  }, []), V = ee(function(m, O) {
    return new Promise(function(F, D) {
      var L = d.validate(m, O);
      L == null ? F(Ce) : Yt(L) ? L.then(function(U) {
        F(U || Ce);
      }, function(U) {
        process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validate />", U), D(U);
      }) : F(L);
    });
  }, [d.validate]), Q = ee(function(m, O) {
    var F = d.validationSchema, D = me(F) ? F(O) : F, L = O && D.validateAt ? D.validateAt(O, m) : Oc(m, D);
    return new Promise(function(U, ae) {
      L.then(function() {
        U(Ce);
      }, function(be) {
        be.name === "ValidationError" ? U(Ac(be)) : (process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validationSchema />", be), ae(be));
      });
    });
  }, [d.validationSchema]), le = ee(function(m, O) {
    return new Promise(function(F) {
      return F(j.current[m].validate(O));
    });
  }, []), k = ee(function(m) {
    var O = Object.keys(j.current).filter(function(D) {
      return me(j.current[D].validate);
    }), F = O.length > 0 ? O.map(function(D) {
      return le(D, ue(m, D));
    }) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
    return Promise.all(F).then(function(D) {
      return D.reduce(function(L, U, ae) {
        return U === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || U && (L = De(L, O[ae], U)), L;
      }, {});
    });
  }, [le]), re = ee(function(m) {
    return Promise.all([k(m), d.validationSchema ? Q(m) : {}, d.validate ? V(m) : {}]).then(function(O) {
      var F = O[0], D = O[1], L = O[2], U = er.all([F, D, L], {
        arrayMerge: Fc
      });
      return U;
    });
  }, [d.validate, d.validationSchema, k, V, Q]), G = pe(function(m) {
    return m === void 0 && (m = _.values), N({
      type: "SET_ISVALIDATING",
      payload: !0
    }), re(m).then(function(O) {
      return p.current && (N({
        type: "SET_ISVALIDATING",
        payload: !1
      }), N({
        type: "SET_ERRORS",
        payload: O
      })), O;
    });
  });
  ie(function() {
    i && p.current === !0 && Pe(x.current, d.initialValues) && G(x.current);
  }, [i, G]);
  var C = ee(function(m) {
    var O = m && m.values ? m.values : x.current, F = m && m.errors ? m.errors : S.current ? S.current : d.initialErrors || {}, D = m && m.touched ? m.touched : v.current ? v.current : d.initialTouched || {}, L = m && m.status ? m.status : E.current ? E.current : d.initialStatus;
    x.current = O, S.current = F, v.current = D, E.current = L;
    var U = function() {
      N({
        type: "RESET_FORM",
        payload: {
          isSubmitting: !!m && !!m.isSubmitting,
          errors: F,
          touched: D,
          status: L,
          values: O,
          isValidating: !!m && !!m.isValidating,
          submitCount: m && m.submitCount && typeof m.submitCount == "number" ? m.submitCount : 0
        }
      });
    };
    if (d.onReset) {
      var ae = d.onReset(_.values, Ue);
      Yt(ae) ? ae.then(U) : U();
    } else
      U();
  }, [d.initialErrors, d.initialStatus, d.initialTouched, d.onReset]);
  ie(function() {
    p.current === !0 && !Pe(x.current, d.initialValues) && u && (x.current = d.initialValues, C(), i && G(x.current));
  }, [u, d.initialValues, C, i, G]), ie(function() {
    u && p.current === !0 && !Pe(S.current, d.initialErrors) && (S.current = d.initialErrors || Ce, N({
      type: "SET_ERRORS",
      payload: d.initialErrors || Ce
    }));
  }, [u, d.initialErrors]), ie(function() {
    u && p.current === !0 && !Pe(v.current, d.initialTouched) && (v.current = d.initialTouched || xt, N({
      type: "SET_TOUCHED",
      payload: d.initialTouched || xt
    }));
  }, [u, d.initialTouched]), ie(function() {
    u && p.current === !0 && !Pe(E.current, d.initialStatus) && (E.current = d.initialStatus, N({
      type: "SET_STATUS",
      payload: d.initialStatus
    }));
  }, [u, d.initialStatus, d.initialTouched]);
  var $ = pe(function(m) {
    if (j.current[m] && me(j.current[m].validate)) {
      var O = ue(_.values, m), F = j.current[m].validate(O);
      return Yt(F) ? (N({
        type: "SET_ISVALIDATING",
        payload: !0
      }), F.then(function(D) {
        return D;
      }).then(function(D) {
        N({
          type: "SET_FIELD_ERROR",
          payload: {
            field: m,
            value: D
          }
        }), N({
          type: "SET_ISVALIDATING",
          payload: !1
        });
      })) : (N({
        type: "SET_FIELD_ERROR",
        payload: {
          field: m,
          value: F
        }
      }), Promise.resolve(F));
    } else if (d.validationSchema)
      return N({
        type: "SET_ISVALIDATING",
        payload: !0
      }), Q(_.values, m).then(function(D) {
        return D;
      }).then(function(D) {
        N({
          type: "SET_FIELD_ERROR",
          payload: {
            field: m,
            value: ue(D, m)
          }
        }), N({
          type: "SET_ISVALIDATING",
          payload: !1
        });
      });
    return Promise.resolve();
  }), A = ee(function(m, O) {
    var F = O.validate;
    j.current[m] = {
      validate: F
    };
  }, []), M = ee(function(m) {
    delete j.current[m];
  }, []), z = pe(function(m, O) {
    N({
      type: "SET_TOUCHED",
      payload: m
    });
    var F = O === void 0 ? a : O;
    return F ? G(_.values) : Promise.resolve();
  }), R = ee(function(m) {
    N({
      type: "SET_ERRORS",
      payload: m
    });
  }, []), b = pe(function(m, O) {
    var F = me(m) ? m(_.values) : m;
    N({
      type: "SET_VALUES",
      payload: F
    });
    var D = O === void 0 ? r : O;
    return D ? G(F) : Promise.resolve();
  }), T = ee(function(m, O) {
    N({
      type: "SET_FIELD_ERROR",
      payload: {
        field: m,
        value: O
      }
    });
  }, []), P = pe(function(m, O, F) {
    var D = me(O) ? O(ue(_.values, m)) : O;
    N({
      type: "SET_FIELD_VALUE",
      payload: {
        field: m,
        value: D
      }
    });
    var L = F === void 0 ? r : F;
    return L ? G(De(_.values, m, D)) : Promise.resolve();
  }), B = ee(function(m, O) {
    var F = O, D = m, L;
    if (!Gt(m)) {
      m.persist && m.persist();
      var U = m.target ? m.target : m.currentTarget, ae = U.type, be = U.name, It = U.id, Dt = U.value, pa = U.checked, ma = U.outerHTML, br = U.options, ya = U.multiple;
      F = O || be || It, !F && process.env.NODE_ENV !== "production" && dn({
        htmlContent: ma,
        documentationAnchorLink: "handlechange-e-reactchangeeventany--void",
        handlerName: "handleChange"
      }), D = /number|range/.test(ae) ? (L = parseFloat(Dt), isNaN(L) ? "" : L) : /checkbox/.test(ae) ? Pc(ue(_.values, F), pa, Dt) : br && ya ? Cc(br) : Dt;
    }
    F && P(F, D);
  }, [P, _.values]), q = pe(function(m) {
    if (Gt(m))
      return function(O) {
        return B(O, m);
      };
    B(m);
  }), X = pe(function(m, O, F) {
    O === void 0 && (O = !0), N({
      type: "SET_FIELD_TOUCHED",
      payload: {
        field: m,
        value: O
      }
    });
    var D = F === void 0 ? a : F;
    return D ? G(_.values) : Promise.resolve();
  }), ge = ee(function(m, O) {
    m.persist && m.persist();
    var F = m.target, D = F.name, L = F.id, U = F.outerHTML, ae = O || D || L;
    !ae && process.env.NODE_ENV !== "production" && dn({
      htmlContent: U,
      documentationAnchorLink: "handleblur-e-any--void",
      handlerName: "handleBlur"
    }), X(ae, !0);
  }, [X]), we = pe(function(m) {
    if (Gt(m))
      return function(O) {
        return ge(O, m);
      };
    ge(m);
  }), J = ee(function(m) {
    me(m) ? N({
      type: "SET_FORMIK_STATE",
      payload: m
    }) : N({
      type: "SET_FORMIK_STATE",
      payload: function() {
        return m;
      }
    });
  }, []), ye = ee(function(m) {
    N({
      type: "SET_STATUS",
      payload: m
    });
  }, []), Ne = ee(function(m) {
    N({
      type: "SET_ISSUBMITTING",
      payload: m
    });
  }, []), Fe = pe(function() {
    return N({
      type: "SUBMIT_ATTEMPT"
    }), G().then(function(m) {
      var O = m instanceof Error, F = !O && Object.keys(m).length === 0;
      if (F) {
        var D;
        try {
          if (D = Ge(), D === void 0)
            return;
        } catch (L) {
          throw L;
        }
        return Promise.resolve(D).then(function(L) {
          return p.current && N({
            type: "SUBMIT_SUCCESS"
          }), L;
        }).catch(function(L) {
          if (p.current)
            throw N({
              type: "SUBMIT_FAILURE"
            }), L;
        });
      } else if (p.current && (N({
        type: "SUBMIT_FAILURE"
      }), O))
        throw m;
    });
  }), I = pe(function(m) {
    if (m && m.preventDefault && me(m.preventDefault) && m.preventDefault(), m && m.stopPropagation && me(m.stopPropagation) && m.stopPropagation(), process.env.NODE_ENV !== "production" && typeof document < "u") {
      var O = _c();
      O !== null && O instanceof HTMLButtonElement && (O.attributes && O.attributes.getNamedItem("type") || (process.env.NODE_ENV !== "production" ? He(!1, 'You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type="submit"`. If this is not a submit button, please add `type="button"`.') : He()));
    }
    Fe().catch(function(F) {
      console.warn("Warning: An unhandled error was caught from submitForm()", F);
    });
  }), Ue = {
    resetForm: C,
    validateForm: G,
    validateField: $,
    setErrors: R,
    setFieldError: T,
    setFieldTouched: X,
    setFieldValue: P,
    setStatus: ye,
    setSubmitting: Ne,
    setTouched: z,
    setValues: b,
    setFormikState: J,
    submitForm: Fe
  }, Ge = pe(function() {
    return h(_.values, Ue);
  }), ft = pe(function(m) {
    m && m.preventDefault && me(m.preventDefault) && m.preventDefault(), m && m.stopPropagation && me(m.stopPropagation) && m.stopPropagation(), C();
  }), ca = ee(function(m) {
    return {
      value: ue(_.values, m),
      error: ue(_.errors, m),
      touched: !!ue(_.touched, m),
      initialValue: ue(x.current, m),
      initialTouched: !!ue(v.current, m),
      initialError: ue(S.current, m)
    };
  }, [_.errors, _.touched, _.values]), ua = ee(function(m) {
    return {
      setValue: function(F, D) {
        return P(m, F, D);
      },
      setTouched: function(F, D) {
        return X(m, F, D);
      },
      setError: function(F) {
        return T(m, F);
      }
    };
  }, [P, X, T]), da = ee(function(m) {
    var O = Pt(m), F = O ? m.name : m, D = ue(_.values, F), L = {
      name: F,
      value: D,
      onChange: q,
      onBlur: we
    };
    if (O) {
      var U = m.type, ae = m.value, be = m.as, It = m.multiple;
      U === "checkbox" ? ae === void 0 ? L.checked = !!D : (L.checked = !!(Array.isArray(D) && ~D.indexOf(ae)), L.value = ae) : U === "radio" ? (L.checked = D === ae, L.value = ae) : be === "select" && It && (L.value = L.value || [], L.multiple = !0);
    }
    return L;
  }, [we, q, _.values]), Rt = Et(function() {
    return !Pe(x.current, _.values);
  }, [x.current, _.values]), fa = Et(function() {
    return typeof l < "u" ? Rt ? _.errors && Object.keys(_.errors).length === 0 : l !== !1 && me(l) ? l(d) : l : _.errors && Object.keys(_.errors).length === 0;
  }, [l, Rt, _.errors, d]), ha = se({}, _, {
    initialValues: x.current,
    initialErrors: S.current,
    initialTouched: v.current,
    initialStatus: E.current,
    handleBlur: we,
    handleChange: q,
    handleReset: ft,
    handleSubmit: I,
    resetForm: C,
    setErrors: R,
    setFormikState: J,
    setFieldTouched: X,
    setFieldValue: P,
    setFieldError: T,
    setStatus: ye,
    setSubmitting: Ne,
    setTouched: z,
    setValues: b,
    submitForm: Fe,
    validateForm: G,
    validateField: $,
    isValid: fa,
    dirty: Rt,
    unregisterField: M,
    registerField: A,
    getFieldProps: da,
    getFieldMeta: ca,
    getFieldHelpers: ua,
    validateOnBlur: a,
    validateOnChange: r,
    validateOnMount: i
  });
  return ha;
}
function dn(e) {
  var t = e.htmlContent, r = e.documentationAnchorLink, n = e.handlerName;
  console.warn("Warning: Formik called `" + n + "`, but you forgot to pass an `id` or `name` attribute to your input:\n    " + t + `
    Formik cannot determine which value to update. For more info see https://formik.org/docs/api/formik#` + r + `
  `);
}
function Ac(e) {
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
function Oc(e, t, r, n) {
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
function Fc(e, t, r) {
  var n = e.slice();
  return t.forEach(function(s, i) {
    if (typeof n[i] > "u") {
      var l = r.clone !== !1, c = l && r.isMergeableObject(s);
      n[i] = c ? er(Array.isArray(s) ? [] : {}, s, r) : s;
    } else r.isMergeableObject(s) ? n[i] = er(e[i], s, r) : e.indexOf(s) === -1 && n.push(s);
  }), n;
}
function Cc(e) {
  return Array.from(e).filter(function(t) {
    return t.selected;
  }).map(function(t) {
    return t.value;
  });
}
function Pc(e, t, r) {
  if (typeof e == "boolean")
    return !!t;
  var n = [], a = !1, s = -1;
  if (Array.isArray(e))
    n = e, s = e.indexOf(r), a = s >= 0;
  else if (!r || r == "true" || r == "false")
    return !!t;
  return t && r && !a ? n.concat(r) : a ? n.slice(0, s).concat(n.slice(s + 1)) : n;
}
var Rc = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? pn : ie;
function pe(e) {
  var t = de(e);
  return Rc(function() {
    t.current = e;
  }), ee(function() {
    for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return t.current.apply(void 0, n);
  }, []);
}
var Ic = /* @__PURE__ */ ba(function(e, t) {
  var r = e.action, n = oa(e, ["action"]), a = r ?? "#", s = Ec(), i = s.handleReset, l = s.handleSubmit;
  return xa("form", se({
    onSubmit: l,
    ref: t,
    onReset: i,
    action: a
  }, n));
});
Ic.displayName = "Form";
function Kt({
  anchorRef: e,
  open: t,
  children: r,
  offset: n = 4
}) {
  const [a, s] = te({});
  return pn(() => {
    if (!t || !e.current) return;
    const i = e.current.getBoundingClientRect();
    s({
      position: "fixed",
      top: i.bottom + n,
      left: i.left,
      width: "200px",
      zIndex: 1e3
    });
  }, [t, e, n]), t ? wa(
    /* @__PURE__ */ o.jsx("div", { style: a, children: r }),
    document.body
  ) : null;
}
function Dc({
  field: e,
  formik: t,
  methods: r = {},
  sqlOpsUrls: n,
  refid: a,
  optionsOverride: s,
  setFieldOptions: i
}) {
  const [l, c] = te(!1), [u, h] = te(
    s ?? e.options ?? {}
  ), [f, d] = te(""), [x, S] = te(0), v = de(null), [E, p] = te(!1), j = ne.useRef(f), w = de(null);
  ne.useEffect(() => {
    j.current = f;
  }, [f]), ie(() => {
    s && h(s);
  }, [s]), ie(() => {
    if (!E) return;
    const C = ($) => {
      const A = $.target;
      w.current?.contains(A) || v.current?.contains(A) || (p(!1), d(""));
    };
    return document.addEventListener("mousedown", C), () => {
      document.removeEventListener("mousedown", C);
    };
  }, [E]);
  const g = e.name;
  ne.useEffect(() => {
    let C = !0;
    return (async () => {
      if (e?.options) {
        h(e.options);
        return;
      }
      const A = e?.source ?? {};
      if (e.type === "dataMethod") {
        const M = e.method, z = M ? r[M] : void 0;
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
      if (A.type === "api" && A.url)
        try {
          const M = await H({
            method: A.method || "GET",
            url: A.url,
            data: A.body ?? {},
            params: A.params ?? {},
            headers: A.headers ?? {}
          }), z = e.valueKey || "value", R = e.labelKey || "title", b = Re(z, R, M, e.groupKey);
          C && h(b);
        } catch (M) {
          console.error("API execution failed:", M), C && h({});
        }
      if (e.table || e.type === "dataSelector") {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let M;
          if (e.type === "dataSelector")
            M = {
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
            M = {
              ...e,
              table: e.table,
              cols: e.columns
            };
          }
          e.where && e.type !== "dataSelector" && (M.where = a ? fe(e.where, { refid: a }) : e.where);
          const z = await yt(n, M);
          console.log("fetchDataByquery res", z);
          const R = e.valueKey || "do_lists.value", b = e.labelKey || "do_lists.title", T = Re(R, b, z, e.groupKey);
          C && h(T);
        } catch (M) {
          console.error("API fetch failed:", M);
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
  const y = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, _ = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, N = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, V = (C) => C.icon ? /* @__PURE__ */ o.jsx("i", { className: C.icon }) : null, Q = Et(
    () => ps(u),
    [u]
  ), le = Q.length, k = Et(() => e.search || !f ? Q : Q.filter(
    ([, C]) => C.toLowerCase().includes(f.toLowerCase())
  ), [e.search, f, Q]), re = (C, $) => {
    if (E === !0)
      if (C.key === "ArrowDown")
        C.preventDefault(), S(
          (A) => A + 1 < k.length ? A + 1 : 0
        );
      else if (C.key === "ArrowUp")
        C.preventDefault(), S(
          (A) => A - 1 >= 0 ? A - 1 : k.length - 1
        );
      else if (C.key === "Enter") {
        C.preventDefault();
        const [A] = k[x] || [];
        A && t.setFieldValue(e.name, $ ? A : [...t.values[e.name], A]);
      } else C.key === "Escape" && (d(""), p(!1));
  };
  ie(() => {
    v.current?.querySelector(
      `[data-index="${x}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [x]), ie(() => {
    x >= k.length && S(0);
  }, [k, x]), ie(() => {
    const C = e.autocomplete, $ = e.ajaxchain;
    if (!C && !$) return;
    const A = t.values[e.name];
    if (!A) return;
    const M = Array.isArray($) ? $ : $ ? [$] : [];
    (async () => {
      try {
        if (fs(C)) {
          const R = C.src;
          if (!R || !n) return;
          const b = fe(R.where ?? {}, {
            refid: A
          }), T = {
            ...R,
            table: R.table,
            cols: R.columns,
            where: b
          }, { data: P } = await yt(n, T), B = Array.isArray(P?.data) ? P.data[0] : P?.data;
          B && C.target.split(",").map((q) => q.trim()).forEach((q) => {
            B[q] !== void 0 && t.setFieldValue(q, B[q]);
          });
        }
        for (const R of M) {
          const b = R.src;
          if (!R || typeof R != "object" || !b || typeof b != "object" || !n) continue;
          const T = fe(b?.where ?? {}, {
            refid: A
          }), P = {
            ...b,
            table: b.table,
            cols: b.columns,
            where: T
          }, { data: B } = await yt(n, P), q = Re(
            e.valueKey || "value",
            e.labelKey || "title",
            B,
            e.groupKey
          );
          i?.(R.target, q);
        }
      } catch (R) {
        console.error("Autocomplete / AjaxChain fetch failed", R);
      }
    })();
  }, [t.values[e.name]]), ne.useEffect(() => {
    if (!e.search || !f.trim() || !e.table || !n) return;
    const C = hs(e.columns ?? ""), $ = new AbortController(), A = setTimeout(async () => {
      try {
        const M = a ? fe(e.where ?? {}, {
          refid: a
        }) : e.where, z = {
          ...e,
          table: e.table,
          cols: e.columns || e.cols,
          where: M
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
      } catch (M) {
        if (H.isCancel(M)) return;
        console.error("Search fetch failed", M);
      }
    }, 500);
    return () => {
      clearTimeout(A), $.abort();
    };
  }, [f, a]);
  const G = async (C) => {
    if (C.length === 0) {
      console.error("No file");
      return;
    }
    if (!n) return;
    const $ = n?.baseURL + n?.uploadURL;
    if (!$) {
      console.error("No Upload URL ");
      return;
    }
    const A = e.multiple === !0;
    try {
      const M = await Promise.all(
        Array.from(C).map(async (z) => {
          const R = new FormData();
          return R.append("file", z), (await H({
            method: "POST",
            url: $,
            data: R,
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${n?.accessToken}`
            }
          })).data;
        })
      );
      t.setFieldValue(
        g,
        A ? M.map((z) => z.path) : M[0]?.path
      );
    } catch (M) {
      console.error("File upload failed", M), t.setFieldError(g, "File upload failed");
    }
  };
  switch (e.type) {
    case "autocomplete": {
      const $ = t.values[g] ?? "", A = f !== "" ? f : Cr(u, $) ?? String($ ?? ""), M = (R) => {
        const b = R.target.value;
        d(b), S(0), b.trim() ? p(!0) : (p(!1), t.setFieldValue(g, ""));
      }, z = (R) => {
        t.setFieldValue(g, R), d(""), p(!1);
      };
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsx("div", { ref: w, children: /* @__PURE__ */ o.jsx(
          "input",
          {
            className: `${y} ${_}`,
            value: A,
            placeholder: e.placeholder || "Type to search...",
            onChange: M,
            onFocus: () => {
              const R = String(t.values[g] ?? "");
              d(R);
            },
            onBlur: () => {
              setTimeout(() => p(!1), 150);
            },
            onKeyDown: (R) => {
              if (R.key === "Enter") {
                if (R.preventDefault(), k[x]) {
                  const [b] = k[x];
                  t.setFieldValue(g, b);
                } else f.trim() && t.setFieldValue(g, f.trim());
                p(!1);
                return;
              }
              re(R, !0);
            },
            disabled: e.disabled
          }
        ) }),
        /* @__PURE__ */ o.jsx(Kt, { anchorRef: w, open: E, children: /* @__PURE__ */ o.jsx(
          "div",
          {
            ref: v,
            className: "bg-white border rounded shadow max-h-52 overflow-y-auto",
            children: k.length > 0 ? k.map(([R, b], T) => /* @__PURE__ */ o.jsx(
              "div",
              {
                "data-index": T,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${x === T ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => z(R),
                children: b
              },
              R
            )) : /* @__PURE__ */ o.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `No matches press enter to add "${A}" ` })
          }
        ) }),
        t.touched[g] && t.errors[g] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[g]) })
      ] });
    }
    case "dataSelector":
    case "dataSelectorFromTable":
    case "dataSelectorFromUniques":
    case "dataMethod": {
      if (e.multiple === !0) {
        const $ = t.values[g] ?? [];
        return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ o.jsxs("label", { className: N, children: [
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
                p((A) => !A), S(0);
              },
              onKeyDown: (A) => re(A, !1),
              onBlur: () => {
                e.multiple || setTimeout(() => {
                  p(!1), d("");
                }, 150);
              },
              children: [
                /* @__PURE__ */ o.jsx("span", { className: "text-sm text-gray-700 truncate", children: $.length > 0 ? $.join(", ") : `Select ${e.label}` }),
                /* @__PURE__ */ o.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
              ]
            }
          ),
          /* @__PURE__ */ o.jsx(Kt, { anchorRef: w, open: E, children: /* @__PURE__ */ o.jsxs(
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
                    onChange: (A) => {
                      d(A.target.value), S(0);
                    },
                    placeholder: "Search...",
                    className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                  }
                ) }),
                k.length > 0 ? k.map(([A, M], z) => /* @__PURE__ */ o.jsxs(
                  "label",
                  {
                    "data-index": z,
                    className: `flex items-center gap-x-2 px-2 py-1 rounded cursor-pointer text-sm
                    ${$.includes(A) ? "bg-indigo-50 text-indigo-600 font-medium" : x === z ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: [
                      /* @__PURE__ */ o.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: $.includes(A),
                          onChange: (R) => {
                            const b = R.target.checked ? [...$, A] : $.filter((T) => T !== A);
                            t.setFieldValue(g, b);
                          },
                          className: "h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        }
                      ),
                      M
                    ]
                  },
                  A
                )) : /* @__PURE__ */ o.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ]
            }
          ) }),
          t.touched[g] && t.errors[g] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[g]) })
        ] });
      }
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: N, children: [
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
              p(($) => !$), S(0);
            },
            onKeyDown: ($) => re($, !0),
            onBlur: () => {
              setTimeout(() => {
                p(!1), d("");
              }, 150);
            },
            children: [
              /* @__PURE__ */ o.jsx("span", { className: "text-sm text-gray-700 truncate", children: t.values[g] ? Cr(u, t.values[g]) ?? "Select option" : `Select ${e.label}` }),
              /* @__PURE__ */ o.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
            ]
          }
        ),
        /* @__PURE__ */ o.jsx(Kt, { anchorRef: w, open: E, children: /* @__PURE__ */ o.jsxs(
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
                    d($.target.value), S(0);
                  },
                  onKeyDown: ($) => re($, !0),
                  placeholder: "Search...",
                  className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                }
              ) }),
              k.length > 0 && /* @__PURE__ */ o.jsx(
                "div",
                {
                  onMouseDown: ($) => {
                    $.preventDefault(), t.setFieldValue(g, ""), p(!1), d("");
                  },
                  className: "px-2 py-1 text-sm cursor-pointer hover:bg-gray-50",
                  children: "Clear selection"
                }
              ),
              k.length > 0 ? k.map(([$, A], M) => /* @__PURE__ */ o.jsx(
                "div",
                {
                  "data-index": M,
                  onMouseDown: () => {
                    t.setFieldValue(g, $), p(!1), d(""), S(0);
                  },
                  className: `px-2 py-1 rounded cursor-pointer text-sm
                  ${t.values[g] === $ ? "bg-indigo-50 text-indigo-600 font-medium" : x === M ? "bg-gray-100" : "hover:bg-gray-50"}`,
                  children: A
                },
                $
              )) : /* @__PURE__ */ o.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
            ]
          }
        ) }),
        t.touched[g] && t.errors[g] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[g]) })
      ] });
    }
    case "textarea":
      return /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ o.jsx(
            "textarea",
            {
              className: `${y} ${_} min-h-[120px] resize-none`,
              onFocus: () => c(!0),
              name: g,
              value: t.values[g],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ o.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${l ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[g] && t.errors[g] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[g]) })
      ] }) });
    case "select":
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ o.jsxs(
            "select",
            {
              className: `${y} ${_} appearance-none cursor-pointer pr-12`,
              onFocus: () => c(!0),
              name: g,
              value: t.values[g],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              disabled: e.disabled,
              children: [
                /* @__PURE__ */ o.jsx("option", { value: "", disabled: !0, children: e.placeholder || "Please select an option" }),
                !Jt(u) && Object.entries(u).map(([$, A]) => /* @__PURE__ */ o.jsx("option", { value: $, className: "py-2", children: A }, $)),
                Jt(u) && Object.entries(u).map(([$, A]) => /* @__PURE__ */ o.jsx("optgroup", { label: $, children: Object.entries(A).map(([M, z]) => /* @__PURE__ */ o.jsx("option", { value: M, children: z }, M)) }, $))
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
        t.touched[g] && t.errors[g] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[g]) })
      ] });
    case "radioList":
    case "radio":
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: `flex ${le > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(u || {}).map(([$, A]) => /* @__PURE__ */ o.jsxs(
          "label",
          {
            htmlFor: `${g}-${$}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  id: `${g}-${$}`,
                  type: "radio",
                  name: g,
                  checked: t.values[g] === $,
                  value: $,
                  onChange: t.handleChange,
                  onBlur: t.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              A
            ]
          },
          $
        )) }),
        t.touched[g] && t.errors[g] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[g]) })
      ] });
    case "checkbox": {
      const $ = t.values[g];
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(u || {}).map(([A, M]) => /* @__PURE__ */ o.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: $.includes(A),
                  onChange: (z) => {
                    const R = z.target.checked ? [...$, A] : $.filter((b) => b !== A);
                    t.setFieldValue(g, R);
                  },
                  onBlur: t.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              M
            ]
          },
          A
        )) }),
        t.touched[g] && t.errors[g] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[g]) })
      ] });
    }
    case "tags": {
      const $ = t.values[g], A = f.trim(), M = Array.isArray(u) ? u : Object.entries(u || {}).map(([T, P]) => ({ value: T, label: P })), z = (T) => {
        T && !$.includes(T) && (t.setFieldValue(g, [...$, T]), d(""));
      }, R = (T) => {
        t.setFieldValue(
          g,
          $.filter((P) => P !== T)
        );
      }, b = (T) => M.find((P) => P.value === T)?.label ?? T;
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: `${y} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !e.disabled && document.getElementById(`${g}-input`)?.focus(),
            children: [
              $.map((T) => /* @__PURE__ */ o.jsxs(
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
                  id: `${g}-input`,
                  type: "text",
                  value: f,
                  onChange: (T) => d(T.target.value),
                  onKeyDown: (T) => {
                    (T.key === "Enter" || T.key === ",") && (T.preventDefault(), z(A));
                  },
                  placeholder: $.length === 0 ? e.placeholder || "Type and press Enter" : "",
                  className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                  disabled: e.disabled
                }
              )
            ]
          }
        ),
        t.touched[g] && t.errors[g] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[g]) })
      ] });
    }
    case "attachment":
    case "photo":
    case "avatar":
    case "file":
      const C = e.multiple === !0;
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ o.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: V(e) }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "file",
              className: `${y} ${_} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => c(!0),
              name: g,
              multiple: C,
              onChange: ($) => {
                const A = $.currentTarget.files;
                A && G(A);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ o.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${l ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.values[g]?.split("/").pop() && /* @__PURE__ */ o.jsx("div", { className: "mt-1", children: /* @__PURE__ */ o.jsx("span", { className: "text-sm ", children: String(t.values[g]?.split("/").pop()) }) }),
        t.touched[g] && t.errors[g] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[g]) })
      ] });
    case "json":
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ o.jsx(
            "textarea",
            {
              id: `${g}-json`,
              name: g,
              value: t.values[g],
              onChange: ($) => t.setFieldValue(g, $.target.value),
              onBlur: t.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: e.disabled,
              className: `${y} ${_} min-h-[200px] font-mono text-sm resize-y`
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
        t.touched[g] && t.errors[g] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[g]) })
      ] });
    case "date":
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ o.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: V(e) }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "date",
              name: g,
              value: t.values[g],
              onChange: t.handleChange,
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled,
              className: `${y} ${_} ${e.icon ? "pl-9" : ""}`
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
        t.touched[g] && t.errors[g] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[g]) })
      ] });
    default:
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: N, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ o.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: V(e) }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: e.type || "text",
              className: `${y} ${_} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => c(!0),
              name: g,
              value: t.values[g],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ o.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${l ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[g] && t.errors[g] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[g]) })
      ] });
  }
}
function Mc({
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
  const c = cs(t, i?.operation), [u, h] = ne.useState({}), f = (v, E) => {
    h((p) => ({
      ...p,
      [v]: E
    }));
  }, { initialValues: d, validationSchema: x } = ne.useMemo(() => {
    const v = {}, E = {};
    return c.forEach((p) => {
      ds([p], v, E, r);
    }), {
      initialValues: v,
      validationSchema: E
    };
  }, [c, r]), S = $c({
    initialValues: d,
    enableReinitialize: !0,
    validationSchema: An().shape(x),
    onSubmit: (v) => {
      n(v), S.resetForm();
    }
  });
  return console.log("formik.values", S.values), /* @__PURE__ */ o.jsx("div", { className: "relative z-10 max-w-full  m-4", children: /* @__PURE__ */ o.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ o.jsxs("form", { onSubmit: S.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "grid grid-flow-col auto-cols-max gap-4 items-end overflow-x-auto", children: [
      c.map((v, E) => us(v.hidden) || v.type === "geolocation" || v.vmode === "edit" && i?.operation === "create" ? null : /* @__PURE__ */ o.jsx(
        "div",
        {
          children: /* @__PURE__ */ o.jsx(
            Dc,
            {
              refid: l,
              ...i ? { sqlOpsUrls: i } : {},
              field: v,
              formik: S,
              methods: s,
              setFieldOptions: f,
              ...u[v.name] ? { optionsOverride: u[v.name] } : {}
            }
          )
        },
        v?.name ?? `field-${E}`
      )),
      /* @__PURE__ */ o.jsxs("div", { className: "pl-2", children: [
        /* @__PURE__ */ o.jsx("div", { children: "  " }),
        /* @__PURE__ */ o.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" }),
        Object.keys(S.errors).length > 0 && /* @__PURE__ */ o.jsx("div", { children: "  " })
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
)).data.refid, kc = {
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
  const c = e.endPoints, u = e?.source?.refid, [h, f] = ne.useState(i), d = ne.useMemo(() => os(e.fields), [e.fields]);
  ne.useEffect(() => {
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
            const g = await Promise.resolve(w());
            v && f(g ?? {});
          } catch (g) {
            console.error("Method execution failed:", g), v && f({});
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
          const j = await kc.fetch(c, {
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
    const E = e?.source ?? {};
    let p = null;
    if (d.length > 0)
      try {
        p = await ls();
      } catch (w) {
        console.log("catch fetchGeolocation", w), p = null;
      }
    const j = {
      ...v,
      ...Object.fromEntries(
        d.map((w) => [w, p])
      )
    };
    if (E.type === "method") {
      const w = E.method, g = w ? t[w] : void 0;
      if (g)
        try {
          const y = await Promise.resolve(g(j));
          l?.(null), s?.(y);
        } catch (y) {
          s?.(y), console.error("Method execution failed:", y);
        }
    }
    if (E.type === "api") {
      if (!c) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const w = await H({
          method: E.method || "POST",
          url: c.baseURL + E.endpoint,
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
    if (E.type === "sql") {
      const w = e.endPoints;
      if (!w) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const g = await H({
          method: "GET",
          url: w.baseURL + w.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${w?.accessToken}`
          }
        });
        let y = {
          ...E
        };
        E.where && (y = {
          ...E,
          where: fe(E.where, {
            refid: u
          })
        });
        const _ = await H({
          method: "POST",
          url: w.baseURL + w.dbopsGetRefId,
          data: {
            operation: w.operation,
            source: y,
            fields: Or(e.fields, w.operation),
            forcefill: e.forcefill,
            datahash: g.data.refhash
          },
          headers: {
            Authorization: `Bearer ${w?.accessToken}`
          }
        }), N = await H({
          method: "POST",
          url: w.baseURL + w[w.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: _.data.refid,
            fields: j,
            datahash: g.data.refhash
          },
          headers: {
            Authorization: `Bearer ${w?.accessToken}`
          }
        });
        l?.(null), s?.(N);
      } catch (g) {
        s?.(g), console.error("API fetch failed:", g);
      }
    }
  }, S = {
    simple: /* @__PURE__ */ o.jsx(
      Mc,
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
  return /* @__PURE__ */ o.jsx("div", { className: "relative", children: S.simple });
}
function gr({ tabObj: e, methods: t, tabName: r, sqlOpsUrls: n, refid: a, Reports: s, toast: i, handleAction: l, infoViewJson: c }) {
  const [u, h] = te(1), [f, d] = te(10), [x, S] = te(""), [v, E] = te(!1), [p, j] = te(null), [w, g] = ne.useState([]);
  de(null);
  const [y, _] = te(null), [N, V] = te({ key: "", direction: null }), [Q, le] = te(null), [k, re] = ne.useState(null), G = e?.config;
  console.log("tabObj", e), console.log("source", G);
  const C = e?.config, $ = C?.["popup.form"] ? "popup.form" : (C?.form, "form"), A = C?.[$] && Object.keys(C?.[$]).length > 0, M = (T, P) => {
    re(T);
  }, z = (T) => {
    j(T), E(!0);
  }, R = async () => {
    if (p?.id) {
      if (!n) {
        le({ type: "error", message: "Delete configuration missing." });
        return;
      }
      try {
        let T = e?.config;
        const P = T?.["popup.form"] ? "popup.form" : (T?.form, "form");
        console.log("config?.[formType]", T?.[P]);
        const B = T?.[P];
        if (!B?.source) throw new Error("Form source missing");
        const q = await H({
          method: "GET",
          url: n.baseURL + n.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${n.accessToken}`
          }
        });
        let X = { ...B.source, refid: p.id };
        B.source.where && (X = {
          ...X,
          where: fe(B.source.where, {
            refid: p.id
          })
        });
        const ge = await H({
          method: "POST",
          url: n.baseURL + n.dbopsGetRefId,
          data: {
            operation: "update",
            source: X,
            fields: B.fields,
            forcefill: B.forcefill,
            datahash: q.data.refhash
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
            datahash: q.data.refhash
          },
          headers: {
            Authorization: `Bearer ${n.accessToken}`
          }
        }), window.alert("Record deleted successfully.");
      } catch (T) {
        console.error(T), window.alert("Failed to delete record. Please try again");
      } finally {
        j(null), E(!1), setTimeout(() => le(null), 3e3);
      }
    }
  }, b = () => {
    j(null), E(!1);
  };
  return /* @__PURE__ */ o.jsx(o.Fragment, { children: s ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      s,
      {
        methods: { ...t, deleteRecord: z, editRecord: M },
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
    A && /* @__PURE__ */ o.jsx(fn, { formJson: { ...C[$], endPoints: n }, initialvalues: k ?? {} }),
    /* @__PURE__ */ o.jsx(
      gs,
      {
        open: v,
        onConfirm: R,
        onCancel: b
      }
    )
  ] }) : A && /* @__PURE__ */ o.jsx(
    fn,
    {
      formJson: {
        ...C[$],
        endPoints: {
          ...n,
          operation: k ? "update" : "create"
        }
      },
      initialvalues: k ?? {},
      setEditData: re
    }
  ) });
}
const Lc = ({
  groups: e,
  groupNames: t,
  setActiveTabIndex: r,
  activeTabIndex: n,
  layoutConfig: a,
  showScrollHint: s,
  isCommonInfo: i,
  tabsNavRef: l
}) => {
  const [c, u] = te(!1), h = de(null);
  return ie(() => {
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
}, zc = ({
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
      )) }) }) : n ? /* @__PURE__ */ o.jsx("div", { className: "flex-1 overflow-y-auto", children: i(n, e[t] || "") }) : null : /* @__PURE__ */ o.jsx("div", { className: "flex-1 col-span-full text-center py-8 text-gray-500", children: "No data available" }),
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
function hn({
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
  const [x, S] = te(0), [v, E] = te(!1), p = de(null), j = Object.keys(e);
  ie(() => {
    const N = () => {
      if (p.current) {
        const V = p.current;
        E(V.scrollWidth > V.clientWidth);
      }
    };
    return N(), window.addEventListener("resize", N), () => window.removeEventListener("resize", N);
  }, [j.length]), ie(() => {
    if (p.current && j.length > 0) {
      const N = p.current.children[x];
      N && N.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [x, j.length]);
  const w = e[j[x] ?? ""] || null, g = {
    single: (N, V) => /* @__PURE__ */ o.jsx(or, { tabObj: N, methods: t, tabName: V, ...l ? { sqlOpsUrls: l } : {}, refid: c }),
    grid: (N, V) => /* @__PURE__ */ o.jsx(
      gr,
      {
        ...u ? { Reports: u } : {},
        toast: h,
        handleAction: f,
        tabObj: N,
        methods: t,
        tabName: V,
        ...l ? { sqlOpsUrls: l } : {},
        refid: c,
        infoViewJson: d
      }
    )
  }, y = w?.config?.uimode, _ = n[y] || g[y] || (() => /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No UI mode for this type" }));
  return /* @__PURE__ */ o.jsxs("div", { className: "flex-1 flex flex-col min-h-0 ", children: [
    /* @__PURE__ */ o.jsx(
      Lc,
      {
        groupNames: j,
        groups: e,
        setActiveTabIndex: S,
        activeTabIndex: x,
        tabsNavRef: p,
        isCommonInfo: a,
        showScrollHint: v,
        layoutConfig: s
      }
    ),
    /* @__PURE__ */ o.jsx(
      zc,
      {
        groupNames: j,
        activeTabIndex: x,
        layoutConfig: s,
        tabObj: w,
        infoData: r,
        setActiveTabIndex: S,
        renderView: _,
        groups: e,
        methods: t,
        refid: c,
        ...l ? { sqlOpsUrls: l } : {}
      }
    )
  ] });
}
function Vc({ title: e, children: t, isFirst: r }) {
  const [n, a] = te(r);
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
function Bc({
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
  return /* @__PURE__ */ o.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ o.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ o.jsx("div", { className: "space-y-2 flex flex-col min-h-0", children: e && Object.entries(e).map(([f, d], x) => /* @__PURE__ */ o.jsx(Vc, { title: f, isFirst: x === 0, children: d?.fields ? /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ o.jsx("div", { className: "grid grid-cols-12 gap-2", children: d.fields.map((S, v) => /* @__PURE__ */ o.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${ot[lt(S.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ o.jsx(ct, { methods: t, field: S, data: r ?? {}, ...a ? { sqlOpsUrls: a } : {}, refid: s })
    },
    S?.name ?? `field-${v}`
  )) }) }) : d ? /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: n[d.config?.uimode]?.(d) || h[d.config?.uimode]?.(d, f) || /* @__PURE__ */ o.jsx("div", { children: "No renderer for this type" }) }) : null }, f)) }) }) });
}
function Uc({ title: e, children: t }) {
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
function Gc({
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
  return /* @__PURE__ */ o.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ o.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ o.jsx("div", { className: "space-y-2  flex flex-col min-h-0", children: e && Object.entries(e).map(([f, d], x) => /* @__PURE__ */ o.jsx(Uc, { title: f, children: d?.fields ? /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ o.jsx("div", { className: "grid grid-cols-12 gap-2", children: d.fields.map((S, v) => /* @__PURE__ */ o.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${ot[lt(S.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ o.jsx(ct, { methods: t, field: S, data: r ?? {}, ...a ? { sqlOpsUrls: a } : {}, refid: s })
    },
    S?.name ?? `field-${v}`
  )) }) }) : d ? /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: n[d.config?.uimode]?.(d) || h[d.config?.uimode]?.(d, f) || /* @__PURE__ */ o.jsx("div", { children: "No renderer for this type" }) }) : null }, f)) }) }) });
}
function Wc({
  infoViewJson: e,
  data: t = {},
  hiddenFields: r = [],
  groupFieldsFn: n = is,
  layoutConfig: a = {},
  viewRenderers: s = {},
  methods: i = {},
  Reports: l,
  toast: c = {},
  handleAction: u = () => {
  }
}) {
  const [h, f] = ne.useState({}), d = ss(e.infoview ?? {}), x = e.endPoints, S = ne.useMemo(
    () => n(e.fields || {}),
    [e.fields, n]
  ), v = e?.source?.refid;
  let E = { ...S };
  e.infoview?.groups && (E = { ...E, ...e.infoview.groups }), console.log("source", e.source), ne.useEffect(() => {
    let w = !1;
    return (async () => {
      const y = e?.source;
      if (!y?.type) {
        w || f({});
        return;
      }
      if (y.type === "method") {
        const _ = y.method, N = _ ? i[_] : void 0;
        if (N)
          try {
            const V = await Promise.resolve(N());
            w || f(V || {});
          } catch (V) {
            console.error("Method execution failed:", V), w || f({});
          }
        else
          w || f({});
      }
      if (y.type === "api")
        try {
          const _ = await H({
            method: y.method || "GET",
            url: y.url,
            data: y.body || {},
            params: y.params || {},
            headers: y.headers || {}
          });
          w || f(_.data || {});
        } catch (_) {
          console.error("API fetch failed:", _), w || f({});
        }
      if (y.type === "sql" && y.refid && y.refid != "0") {
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
                ...y,
                cols: y.cols,
                table: y.table,
                where: fe(y.where, {
                  refid: y.refid
                })
              }
            },
            headers: {
              Authorization: `Bearer ${x?.accessToken}`
            }
          }), N = await H({
            method: "POST",
            url: x.baseURL + x.runQuery,
            data: {
              queryid: _.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${x?.accessToken}`
            }
          }), V = Cn(N) ?? {};
          w || f(V);
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
  const p = E.common || null;
  p && delete E.common;
  const j = (w) => {
    switch (w) {
      case "accordion":
        return /* @__PURE__ */ o.jsx(
          Bc,
          {
            groups: E,
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
          hn,
          {
            groups: E,
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
          Gc,
          {
            groups: E,
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
          hn,
          {
            groups: E,
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
      ys,
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
  Wc as InfoView
};
