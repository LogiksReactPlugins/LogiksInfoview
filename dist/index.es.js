import ee, { useState as le, useEffect as oe, useRef as xe, useCallback as ae, useMemo as _t, useLayoutEffect as bn, createContext as wa, forwardRef as ja, createElement as Ta, useContext as Ea } from "react";
import W from "axios";
import { createPortal as Sa } from "react-dom";
function xn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var mt = { exports: {} }, Xe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jr;
function _a() {
  if (jr) return Xe;
  jr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, a, s) {
    var o = null;
    if (s !== void 0 && (o = "" + s), a.key !== void 0 && (o = "" + a.key), "key" in a) {
      s = {};
      for (var c in a)
        c !== "key" && (s[c] = a[c]);
    } else s = a;
    return a = s.ref, {
      $$typeof: e,
      type: n,
      key: o,
      ref: a !== void 0 ? a : null,
      props: s
    };
  }
  return Xe.Fragment = t, Xe.jsx = r, Xe.jsxs = r, Xe;
}
var Je = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tr;
function Na() {
  return Tr || (Tr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(b) {
      if (b == null) return null;
      if (typeof b == "function")
        return b.$$typeof === k ? null : b.displayName || b.name || null;
      if (typeof b == "string") return b;
      switch (b) {
        case E:
          return "Fragment";
        case p:
          return "Profiler";
        case $:
          return "StrictMode";
        case l:
          return "Suspense";
        case w:
          return "SuspenseList";
        case C:
          return "Activity";
      }
      if (typeof b == "object")
        switch (typeof b.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), b.$$typeof) {
          case x:
            return "Portal";
          case T:
            return (b.displayName || "Context") + ".Provider";
          case m:
            return (b._context.displayName || "Context") + ".Consumer";
          case _:
            var N = b.render;
            return b = b.displayName, b || (b = N.displayName || N.name || "", b = b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef"), b;
          case j:
            return N = b.displayName || null, N !== null ? N : e(b.type) || "Memo";
          case M:
            N = b._payload, b = b._init;
            try {
              return e(b(N));
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
        var N = !1;
      } catch {
        N = !0;
      }
      if (N) {
        N = console;
        var O = N.error, P = typeof Symbol == "function" && Symbol.toStringTag && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return O.call(
          N,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          P
        ), t(b);
      }
    }
    function n(b) {
      if (b === E) return "<>";
      if (typeof b == "object" && b !== null && b.$$typeof === M)
        return "<...>";
      try {
        var N = e(b);
        return N ? "<" + N + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var b = L.A;
      return b === null ? null : b.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function o(b) {
      if (V.call(b, "key")) {
        var N = Object.getOwnPropertyDescriptor(b, "key").get;
        if (N && N.isReactWarning) return !1;
      }
      return b.key !== void 0;
    }
    function c(b, N) {
      function O() {
        Z || (Z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          N
        ));
      }
      O.isReactWarning = !0, Object.defineProperty(b, "key", {
        get: O,
        configurable: !0
      });
    }
    function d() {
      var b = e(this.type);
      return z[b] || (z[b] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), b = this.props.ref, b !== void 0 ? b : null;
    }
    function u(b, N, O, P, I, U, ne, ce) {
      return O = U.ref, b = {
        $$typeof: v,
        type: b,
        key: N,
        props: U,
        _owner: I
      }, (O !== void 0 ? O : null) !== null ? Object.defineProperty(b, "ref", {
        enumerable: !1,
        get: d
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
        value: ne
      }), Object.defineProperty(b, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ce
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    }
    function h(b, N, O, P, I, U, ne, ce) {
      var re = N.children;
      if (re !== void 0)
        if (P)
          if (G(re)) {
            for (P = 0; P < re.length; P++)
              y(re[P]);
            Object.freeze && Object.freeze(re);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(re);
      if (V.call(N, "key")) {
        re = e(b);
        var pe = Object.keys(N).filter(function(Ie) {
          return Ie !== "key";
        });
        P = 0 < pe.length ? "{key: someKey, " + pe.join(": ..., ") + ": ...}" : "{key: someKey}", A[re + P] || (pe = 0 < pe.length ? "{" + pe.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          P,
          re,
          pe,
          re
        ), A[re + P] = !0);
      }
      if (re = null, O !== void 0 && (r(O), re = "" + O), o(N) && (r(N.key), re = "" + N.key), "key" in N) {
        O = {};
        for (var we in N)
          we !== "key" && (O[we] = N[we]);
      } else O = N;
      return re && c(
        O,
        typeof b == "function" ? b.displayName || b.name || "Unknown" : b
      ), u(
        b,
        re,
        U,
        I,
        a(),
        O,
        ne,
        ce
      );
    }
    function y(b) {
      typeof b == "object" && b !== null && b.$$typeof === v && b._store && (b._store.validated = 1);
    }
    var f = ee, v = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), m = Symbol.for("react.consumer"), T = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), C = Symbol.for("react.activity"), k = Symbol.for("react.client.reference"), L = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, G = Array.isArray, X = console.createTask ? console.createTask : function() {
      return null;
    };
    f = {
      react_stack_bottom_frame: function(b) {
        return b();
      }
    };
    var Z, z = {}, Q = f.react_stack_bottom_frame.bind(
      f,
      s
    )(), S = X(n(s)), A = {};
    Je.Fragment = E, Je.jsx = function(b, N, O, P, I) {
      var U = 1e4 > L.recentlyCreatedOwnerStacks++;
      return h(
        b,
        N,
        O,
        !1,
        P,
        I,
        U ? Error("react-stack-top-frame") : Q,
        U ? X(n(b)) : S
      );
    }, Je.jsxs = function(b, N, O, P, I) {
      var U = 1e4 > L.recentlyCreatedOwnerStacks++;
      return h(
        b,
        N,
        O,
        !0,
        P,
        I,
        U ? Error("react-stack-top-frame") : Q,
        U ? X(n(b)) : S
      );
    };
  }()), Je;
}
var Er;
function $a() {
  return Er || (Er = 1, process.env.NODE_ENV === "production" ? mt.exports = _a() : mt.exports = Na()), mt.exports;
}
var i = $a(), zt, Sr;
function Aa() {
  if (Sr) return zt;
  Sr = 1;
  function e(p) {
    this._maxSize = p, this.clear();
  }
  e.prototype.clear = function() {
    this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
  }, e.prototype.get = function(p) {
    return this._values[p];
  }, e.prototype.set = function(p, m) {
    return this._size >= this._maxSize && this.clear(), p in this._values || this._size++, this._values[p] = m;
  };
  var t = /[^.^\]^[]+|(?=\[\]|\.\.)/g, r = /^\d+$/, n = /^\d/, a = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, s = /^\s*(['"]?)(.*?)(\1)\s*$/, o = 512, c = new e(o), d = new e(o), u = new e(o);
  zt = {
    Cache: e,
    split: y,
    normalizePath: h,
    setter: function(p) {
      var m = h(p);
      return d.get(p) || d.set(p, function(_, l) {
        for (var w = 0, j = m.length, M = _; w < j - 1; ) {
          var C = m[w];
          if (C === "__proto__" || C === "constructor" || C === "prototype")
            return _;
          M = M[m[w++]];
        }
        M[m[w]] = l;
      });
    },
    getter: function(p, m) {
      var T = h(p);
      return u.get(p) || u.set(p, function(l) {
        for (var w = 0, j = T.length; w < j; )
          if (l != null || !m) l = l[T[w++]];
          else return;
        return l;
      });
    },
    join: function(p) {
      return p.reduce(function(m, T) {
        return m + (v(T) || r.test(T) ? "[" + T + "]" : (m ? "." : "") + T);
      }, "");
    },
    forEach: function(p, m, T) {
      f(Array.isArray(p) ? p : y(p), m, T);
    }
  };
  function h(p) {
    return c.get(p) || c.set(
      p,
      y(p).map(function(m) {
        return m.replace(s, "$2");
      })
    );
  }
  function y(p) {
    return p.match(t) || [""];
  }
  function f(p, m, T) {
    var _ = p.length, l, w, j, M;
    for (w = 0; w < _; w++)
      l = p[w], l && ($(l) && (l = '"' + l + '"'), M = v(l), j = !M && /^\d+$/.test(l), m.call(T, l, M, j, w, p));
  }
  function v(p) {
    return typeof p == "string" && p && ["'", '"'].indexOf(p.charAt(0)) !== -1;
  }
  function x(p) {
    return p.match(n) && !p.match(r);
  }
  function E(p) {
    return a.test(p);
  }
  function $(p) {
    return !v(p) && (x(p) || E(p));
  }
  return zt;
}
var Me = Aa(), Bt, _r;
function Oa() {
  if (_r) return Bt;
  _r = 1;
  const e = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, t = (h) => h.match(e) || [], r = (h) => h[0].toUpperCase() + h.slice(1), n = (h, y) => t(h).join(y).toLowerCase(), a = (h) => t(h).reduce(
    (y, f) => `${y}${y ? f[0].toUpperCase() + f.slice(1).toLowerCase() : f.toLowerCase()}`,
    ""
  );
  return Bt = {
    words: t,
    upperFirst: r,
    camelCase: a,
    pascalCase: (h) => r(a(h)),
    snakeCase: (h) => n(h, "_"),
    kebabCase: (h) => n(h, "-"),
    sentenceCase: (h) => r(n(h, " ")),
    titleCase: (h) => t(h).map(r).join(" ")
  }, Bt;
}
var Vt = Oa(), yt = { exports: {} }, Nr;
function Fa() {
  if (Nr) return yt.exports;
  Nr = 1, yt.exports = function(a) {
    return e(t(a), a);
  }, yt.exports.array = e;
  function e(a, s) {
    var o = a.length, c = new Array(o), d = {}, u = o, h = r(s), y = n(a);
    for (s.forEach(function(v) {
      if (!y.has(v[0]) || !y.has(v[1]))
        throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }); u--; )
      d[u] || f(a[u], u, /* @__PURE__ */ new Set());
    return c;
    function f(v, x, E) {
      if (E.has(v)) {
        var $;
        try {
          $ = ", node was:" + JSON.stringify(v);
        } catch {
          $ = "";
        }
        throw new Error("Cyclic dependency" + $);
      }
      if (!y.has(v))
        throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(v));
      if (!d[x]) {
        d[x] = !0;
        var p = h.get(v) || /* @__PURE__ */ new Set();
        if (p = Array.from(p), x = p.length) {
          E.add(v);
          do {
            var m = p[--x];
            f(m, y.get(m), E);
          } while (x);
          E.delete(v);
        }
        c[--o] = v;
      }
    }
  }
  function t(a) {
    for (var s = /* @__PURE__ */ new Set(), o = 0, c = a.length; o < c; o++) {
      var d = a[o];
      s.add(d[0]), s.add(d[1]);
    }
    return Array.from(s);
  }
  function r(a) {
    for (var s = /* @__PURE__ */ new Map(), o = 0, c = a.length; o < c; o++) {
      var d = a[o];
      s.has(d[0]) || s.set(d[0], /* @__PURE__ */ new Set()), s.has(d[1]) || s.set(d[1], /* @__PURE__ */ new Set()), s.get(d[0]).add(d[1]);
    }
    return s;
  }
  function n(a) {
    for (var s = /* @__PURE__ */ new Map(), o = 0, c = a.length; o < c; o++)
      s.set(a[o], o);
    return s;
  }
  return yt.exports;
}
var Ca = Fa();
const Ia = /* @__PURE__ */ xn(Ca), Ra = Object.prototype.toString, Pa = Error.prototype.toString, Ma = RegExp.prototype.toString, Da = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", ka = /^Symbol\((.*)\)(.*)$/;
function La(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function $r(e, t = !1) {
  if (e == null || e === !0 || e === !1) return "" + e;
  const r = typeof e;
  if (r === "number") return La(e);
  if (r === "string") return t ? `"${e}"` : e;
  if (r === "function") return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol") return Da.call(e).replace(ka, "Symbol($1)");
  const n = Ra.call(e).slice(8, -1);
  return n === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : n === "Error" || e instanceof Error ? "[" + Pa.call(e) + "]" : n === "RegExp" ? Ma.call(e) : null;
}
function $e(e, t) {
  let r = $r(e, t);
  return r !== null ? r : JSON.stringify(e, function(n, a) {
    let s = $r(this[n], t);
    return s !== null ? s : a;
  }, 2);
}
function vn(e) {
  return e == null ? [] : [].concat(e);
}
let wn, jn, Tn, za = /\$\{\s*(\w+)\s*\}/g;
wn = Symbol.toStringTag;
class Ar {
  constructor(t, r, n, a) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[wn] = "Error", this.name = "ValidationError", this.value = r, this.path = n, this.type = a, this.errors = [], this.inner = [], vn(t).forEach((s) => {
      if (ue.isError(s)) {
        this.errors.push(...s.errors);
        const o = s.inner.length ? s.inner : [s];
        this.inner.push(...o);
      } else
        this.errors.push(s);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
jn = Symbol.hasInstance;
Tn = Symbol.toStringTag;
class ue extends Error {
  static formatError(t, r) {
    const n = r.label || r.path || "this";
    return r = Object.assign({}, r, {
      path: n,
      originalPath: r.path
    }), typeof t == "string" ? t.replace(za, (a, s) => $e(r[s])) : typeof t == "function" ? t(r) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, r, n, a, s) {
    const o = new Ar(t, r, n, a);
    if (s)
      return o;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[Tn] = "Error", this.name = o.name, this.message = o.message, this.type = o.type, this.value = o.value, this.path = o.path, this.errors = o.errors, this.inner = o.inner, Error.captureStackTrace && Error.captureStackTrace(this, ue);
  }
  static [jn](t) {
    return Ar[Symbol.hasInstance](t) || super[Symbol.hasInstance](t);
  }
}
let Te = {
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
    const a = n != null && n !== r ? ` (cast from the value \`${$e(n, !0)}\`).` : ".";
    return t !== "mixed" ? `${e} must be a \`${t}\` type, but the final value was: \`${$e(r, !0)}\`` + a : `${e} must match the configured type. The validated value was: \`${$e(r, !0)}\`` + a;
  }
}, de = {
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
}, Oe = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, Qt = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, Ba = {
  isValue: "${path} field must be ${value}"
}, jt = {
  noUnknown: "${path} field has unspecified keys: ${unknown}",
  exact: "${path} object contains unknown properties: ${properties}"
}, Tt = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, Va = {
  notType: (e) => {
    const {
      path: t,
      value: r,
      spec: n
    } = e, a = n.types.length;
    if (Array.isArray(r)) {
      if (r.length < a) return `${t} tuple value has too few items, expected a length of ${a} but got ${r.length} for value: \`${$e(r, !0)}\``;
      if (r.length > a) return `${t} tuple value has too many items, expected a length of ${a} but got ${r.length} for value: \`${$e(r, !0)}\``;
    }
    return ue.formatError(Te.notType, e);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: Te,
  string: de,
  number: Oe,
  date: Qt,
  object: jt,
  array: Tt,
  boolean: Ba,
  tuple: Va
});
const Ft = (e) => e && e.__isYupSchema__;
class Nt {
  static fromOptions(t, r) {
    if (!r.then && !r.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: n,
      then: a,
      otherwise: s
    } = r, o = typeof n == "function" ? n : (...c) => c.every((d) => d === n);
    return new Nt(t, (c, d) => {
      var u;
      let h = o(...c) ? a : s;
      return (u = h?.(d)) != null ? u : d;
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
    if (!Ft(a)) throw new TypeError("conditions must return a schema object");
    return a.resolve(r);
  }
}
const gt = {
  context: "$",
  value: "."
};
class Le {
  constructor(t, r = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string") throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === gt.context, this.isValue = this.key[0] === gt.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? gt.context : this.isValue ? gt.value : "";
    this.path = this.key.slice(n.length), this.getter = this.path && Me.getter(this.path, !0), this.map = r.map;
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
Le.prototype.__isYupRef = !0;
const Ne = (e) => e == null;
function Ke(e) {
  function t({
    value: r,
    path: n = "",
    options: a,
    originalValue: s,
    schema: o
  }, c, d) {
    const {
      name: u,
      test: h,
      params: y,
      message: f,
      skipAbsent: v
    } = e;
    let {
      parent: x,
      context: E,
      abortEarly: $ = o.spec.abortEarly,
      disableStackTrace: p = o.spec.disableStackTrace
    } = a;
    const m = {
      value: r,
      parent: x,
      context: E
    };
    function T(L = {}) {
      const V = En(Object.assign({
        value: r,
        originalValue: s,
        label: o.spec.label,
        path: L.path || n,
        spec: o.spec,
        disableStackTrace: L.disableStackTrace || p
      }, y, L.params), m), G = new ue(ue.formatError(L.message || f, V), r, V.path, L.type || u, V.disableStackTrace);
      return G.params = V, G;
    }
    const _ = $ ? c : d;
    let l = {
      path: n,
      parent: x,
      type: u,
      from: a.from,
      createError: T,
      resolve(L) {
        return Sn(L, m);
      },
      options: a,
      originalValue: s,
      schema: o
    };
    const w = (L) => {
      ue.isError(L) ? _(L) : L ? d(null) : _(T());
    }, j = (L) => {
      ue.isError(L) ? _(L) : c(L);
    };
    if (v && Ne(r))
      return w(!0);
    let C;
    try {
      var k;
      if (C = h.call(l, r, l), typeof ((k = C) == null ? void 0 : k.then) == "function") {
        if (a.sync)
          throw new Error(`Validation test of type: "${l.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(C).then(w, j);
      }
    } catch (L) {
      j(L);
      return;
    }
    w(C);
  }
  return t.OPTIONS = e, t;
}
function En(e, t) {
  if (!e) return e;
  for (const r of Object.keys(e))
    e[r] = Sn(e[r], t);
  return e;
}
function Sn(e, t) {
  return Le.isRef(e) ? e.getValue(t.value, t.parent, t.context) : e;
}
function Ua(e, t, r, n = r) {
  let a, s, o;
  return t ? (Me.forEach(t, (c, d, u) => {
    let h = d ? c.slice(1, c.length - 1) : c;
    e = e.resolve({
      context: n,
      parent: a,
      value: r
    });
    let y = e.type === "tuple", f = u ? parseInt(h, 10) : 0;
    if (e.innerType || y) {
      if (y && !u) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);
      if (r && f >= r.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${c}, in the path: ${t}. because there is no value at that index. `);
      a = r, r = r && r[f], e = y ? e.spec.types[f] : e.innerType;
    }
    if (!u) {
      if (!e.fields || !e.fields[h]) throw new Error(`The schema does not contain the path: ${t}. (failed at: ${o} which is a type: "${e.type}")`);
      a = r, r = r && r[h], e = e.fields[h];
    }
    s = h, o = d ? "[" + c + "]" : "." + c;
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
class $t extends Set {
  describe() {
    const t = [];
    for (const r of this.values())
      t.push(Le.isRef(r) ? r.describe() : r);
    return t;
  }
  resolveAll(t) {
    let r = [];
    for (const n of this.values())
      r.push(t(n));
    return r;
  }
  clone() {
    return new $t(this.values());
  }
  merge(t, r) {
    const n = this.clone();
    return t.forEach((a) => n.add(a)), r.forEach((a) => n.delete(a)), n;
  }
}
function Ye(e, t = /* @__PURE__ */ new Map()) {
  if (Ft(e) || !e || typeof e != "object") return e;
  if (t.has(e)) return t.get(e);
  let r;
  if (e instanceof Date)
    r = new Date(e.getTime()), t.set(e, r);
  else if (e instanceof RegExp)
    r = new RegExp(e), t.set(e, r);
  else if (Array.isArray(e)) {
    r = new Array(e.length), t.set(e, r);
    for (let n = 0; n < e.length; n++) r[n] = Ye(e[n], t);
  } else if (e instanceof Map) {
    r = /* @__PURE__ */ new Map(), t.set(e, r);
    for (const [n, a] of e.entries()) r.set(n, Ye(a, t));
  } else if (e instanceof Set) {
    r = /* @__PURE__ */ new Set(), t.set(e, r);
    for (const n of e) r.add(Ye(n, t));
  } else if (e instanceof Object) {
    r = {}, t.set(e, r);
    for (const [n, a] of Object.entries(e)) r[n] = Ye(a, t);
  } else
    throw Error(`Unable to clone ${e}`);
  return r;
}
function Ga(e) {
  if (!(e != null && e.length))
    return;
  const t = [];
  let r = "", n = !1, a = !1;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (o === "[" && !a) {
      r && (t.push(...r.split(".").filter(Boolean)), r = ""), n = !0;
      continue;
    }
    if (o === "]" && !a) {
      r && (/^\d+$/.test(r) ? t.push(r) : t.push(r.replace(/^"|"$/g, "")), r = ""), n = !1;
      continue;
    }
    if (o === '"') {
      a = !a;
      continue;
    }
    if (o === "." && !n && !a) {
      r && (t.push(r), r = "");
      continue;
    }
    r += o;
  }
  return r && t.push(...r.split(".").filter(Boolean)), t;
}
function qa(e, t) {
  const r = t ? `${t}.${e.path}` : e.path;
  return e.errors.map((n) => ({
    message: n,
    path: Ga(r)
  }));
}
function _n(e, t) {
  var r;
  if (!((r = e.inner) != null && r.length) && e.errors.length)
    return qa(e, t);
  const n = t ? `${t}.${e.path}` : e.path;
  return e.inner.flatMap((a) => _n(a, n));
}
class ye {
  constructor(t) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new $t(), this._blacklist = new $t(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(Te.notType);
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
    return r.type = this.type, r._typeCheck = this._typeCheck, r._whitelist = this._whitelist.clone(), r._blacklist = this._blacklist.clone(), r.internalTests = Object.assign({}, this.internalTests), r.exclusiveTests = Object.assign({}, this.exclusiveTests), r.deps = [...this.deps], r.conditions = [...this.conditions], r.tests = [...this.tests], r.transforms = [...this.transforms], r.spec = Ye(Object.assign({}, this.spec, t)), r;
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
      t.tests.forEach((o) => {
        s.test(o.OPTIONS);
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
      if (a && Ne(s))
        return s;
      let o = $e(t), c = $e(s);
      throw new TypeError(`The value of ${r.path || "field"} could not be cast to a value that satisfies the schema type: "${n.type}". 

attempted value: ${o} 
` + (c !== o ? `result of cast: ${c}` : ""));
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
      originalValue: o = t,
      strict: c = this.spec.strict
    } = r, d = t;
    c || (d = this._cast(d, Object.assign({
      assert: !1
    }, r)));
    let u = [];
    for (let h of Object.values(this.internalTests))
      h && u.push(h);
    this.runTests({
      path: s,
      value: d,
      originalValue: o,
      options: r,
      tests: u
    }, n, (h) => {
      if (h.length)
        return a(h, d);
      this.runTests({
        path: s,
        value: d,
        originalValue: o,
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
      value: o,
      originalValue: c,
      path: d,
      options: u
    } = t, h = (E) => {
      a || (a = !0, r(E, o));
    }, y = (E) => {
      a || (a = !0, n(E, o));
    }, f = s.length, v = [];
    if (!f) return y([]);
    let x = {
      value: o,
      originalValue: c,
      path: d,
      options: u,
      schema: this
    };
    for (let E = 0; E < s.length; E++) {
      const $ = s[E];
      $(x, h, function(m) {
        m && (Array.isArray(m) ? v.push(...m) : v.push(m)), --f <= 0 && y(v);
      });
    }
  }
  asNestedTest({
    key: t,
    index: r,
    parent: n,
    parentPath: a,
    originalParent: s,
    options: o
  }) {
    const c = t ?? r;
    if (c == null)
      throw TypeError("Must include `key` or `index` for nested validations");
    const d = typeof c == "number";
    let u = n[c];
    const h = Object.assign({}, o, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: !0,
      parent: n,
      value: u,
      originalValue: s[c],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [d ? "index" : "key"]: c,
      path: d || c.includes(".") ? `${a || ""}[${d ? c : `"${c}"`}]` : (a ? `${a}.` : "") + t
    });
    return (y, f, v) => this.resolve(h)._validate(u, h, f, v);
  }
  validate(t, r) {
    var n;
    let a = this.resolve(Object.assign({}, r, {
      value: t
    })), s = (n = r?.disableStackTrace) != null ? n : a.spec.disableStackTrace;
    return new Promise((o, c) => a._validate(t, r, (d, u) => {
      ue.isError(d) && (d.value = u), c(d);
    }, (d, u) => {
      d.length ? c(new ue(d, u, void 0, void 0, s)) : o(u);
    }));
  }
  validateSync(t, r) {
    var n;
    let a = this.resolve(Object.assign({}, r, {
      value: t
    })), s, o = (n = r?.disableStackTrace) != null ? n : a.spec.disableStackTrace;
    return a._validate(t, Object.assign({}, r, {
      sync: !0
    }), (c, d) => {
      throw ue.isError(c) && (c.value = d), c;
    }, (c, d) => {
      if (c.length) throw new ue(c, t, void 0, void 0, o);
      s = d;
    }), s;
  }
  isValid(t, r) {
    return this.validate(t, r).then(() => !0, (n) => {
      if (ue.isError(n)) return !1;
      throw n;
    });
  }
  isValidSync(t, r) {
    try {
      return this.validateSync(t, r), !0;
    } catch (n) {
      if (ue.isError(n)) return !1;
      throw n;
    }
  }
  _getDefault(t) {
    let r = this.spec.default;
    return r == null ? r : typeof r == "function" ? r.call(this, t) : Ye(r);
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
    return n.internalTests.nullable = Ke({
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
    return n.internalTests.optionality = Ke({
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
  defined(t = Te.defined) {
    return this.optionality(!1, t);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(t = Te.notNull) {
    return this.nullability(!1, t);
  }
  required(t = Te.required) {
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
    }, r.message === void 0 && (r.message = Te.default), typeof r.test != "function") throw new TypeError("`test` is a required parameters");
    let n = this.clone(), a = Ke(r), s = r.exclusive || r.name && n.exclusiveTests[r.name] === !0;
    if (r.exclusive && !r.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return r.name && (n.exclusiveTests[r.name] = !!r.exclusive), n.tests = n.tests.filter((o) => !(o.OPTIONS.name === r.name && (s || o.OPTIONS.test === a.OPTIONS.test))), n.tests.push(a), n;
  }
  when(t, r) {
    !Array.isArray(t) && typeof t != "string" && (r = t, t = ".");
    let n = this.clone(), a = vn(t).map((s) => new Le(s));
    return a.forEach((s) => {
      s.isSibling && n.deps.push(s.key);
    }), n.conditions.push(typeof r == "function" ? new Nt(a, r) : Nt.fromOptions(a, r)), n;
  }
  typeError(t) {
    let r = this.clone();
    return r.internalTests.typeError = Ke({
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
  oneOf(t, r = Te.oneOf) {
    let n = this.clone();
    return t.forEach((a) => {
      n._whitelist.add(a), n._blacklist.delete(a);
    }), n.internalTests.whiteList = Ke({
      message: r,
      name: "oneOf",
      skipAbsent: !0,
      test(a) {
        let s = this.schema._whitelist, o = s.resolveAll(this.resolve);
        return o.includes(a) ? !0 : this.createError({
          params: {
            values: Array.from(s).join(", "),
            resolved: o
          }
        });
      }
    }), n;
  }
  notOneOf(t, r = Te.notOneOf) {
    let n = this.clone();
    return t.forEach((a) => {
      n._blacklist.add(a), n._whitelist.delete(a);
    }), n.internalTests.blacklist = Ke({
      message: r,
      name: "notOneOf",
      test(a) {
        let s = this.schema._blacklist, o = s.resolveAll(this.resolve);
        return o.includes(a) ? this.createError({
          params: {
            values: Array.from(s).join(", "),
            resolved: o
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
      nullable: o
    } = r.spec;
    return {
      meta: a,
      label: n,
      optional: s,
      nullable: o,
      default: r.getDefault(t),
      type: r.type,
      oneOf: r._whitelist.describe(),
      notOneOf: r._blacklist.describe(),
      tests: r.tests.filter((d, u, h) => h.findIndex((y) => y.OPTIONS.name === d.OPTIONS.name) === u).map((d) => {
        const u = d.OPTIONS.params && t ? En(Object.assign({}, d.OPTIONS.params), t) : d.OPTIONS.params;
        return {
          name: d.OPTIONS.name,
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
          if (a instanceof ue)
            return {
              issues: _n(a)
            };
          throw a;
        }
      }
    };
  }
}
ye.prototype.__isYupSchema__ = !0;
for (const e of ["validate", "validateSync"]) ye.prototype[`${e}At`] = function(t, r, n = {}) {
  const {
    parent: a,
    parentPath: s,
    schema: o
  } = Ua(this, t, r, n.context);
  return o[e](a && a[s], Object.assign({}, n, {
    parent: a,
    path: t
  }));
};
for (const e of ["equals", "is"]) ye.prototype[e] = ye.prototype.oneOf;
for (const e of ["not", "nope"]) ye.prototype[e] = ye.prototype.notOneOf;
const Ka = () => !0;
function Xt(e) {
  return new Nn(e);
}
class Nn extends ye {
  constructor(t) {
    super(typeof t == "function" ? {
      type: "mixed",
      check: t
    } : Object.assign({
      type: "mixed",
      check: Ka
    }, t));
  }
}
Xt.prototype = Nn.prototype;
const Ya = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function Ha(e) {
  const t = Jt(e);
  if (!t) return Date.parse ? Date.parse(e) : Number.NaN;
  if (t.z === void 0 && t.plusMinus === void 0)
    return new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond).valueOf();
  let r = 0;
  return t.z !== "Z" && t.plusMinus !== void 0 && (r = t.hourOffset * 60 + t.minuteOffset, t.plusMinus === "+" && (r = 0 - r)), Date.UTC(t.year, t.month, t.day, t.hour, t.minute + r, t.second, t.millisecond);
}
function Jt(e) {
  var t, r;
  const n = Ya.exec(e);
  return n ? {
    year: Se(n[1]),
    month: Se(n[2], 1) - 1,
    day: Se(n[3], 1),
    hour: Se(n[4]),
    minute: Se(n[5]),
    second: Se(n[6]),
    millisecond: n[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      Se(n[7].substring(0, 3))
    ) : 0,
    precision: (t = (r = n[7]) == null ? void 0 : r.length) != null ? t : void 0,
    z: n[8] || void 0,
    plusMinus: n[9] || void 0,
    hourOffset: Se(n[10]),
    minuteOffset: Se(n[11])
  } : null;
}
function Se(e, t = 0) {
  return Number(e) || t;
}
let Wa = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), Za = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), Qa = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, Xa = "^\\d{4}-\\d{2}-\\d{2}", Ja = "\\d{2}:\\d{2}:\\d{2}", es = "(([+-]\\d{2}(:?\\d{2})?)|Z)", ts = new RegExp(`${Xa}T${Ja}(\\.\\d+)?${es}$`), rs = (e) => Ne(e) || e === e.trim(), ns = {}.toString();
function tt() {
  return new $n();
}
class $n extends ye {
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
        return n === ns ? t : n;
      });
    });
  }
  required(t) {
    return super.required(t).withMutation((r) => r.test({
      message: t || Te.required,
      name: "required",
      skipAbsent: !0,
      test: (n) => !!n.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation((t) => (t.tests = t.tests.filter((r) => r.OPTIONS.name !== "required"), t));
  }
  length(t, r = de.length) {
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
  min(t, r = de.min) {
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
  max(t, r = de.max) {
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
      message: a || de.matches,
      params: {
        regex: t
      },
      skipAbsent: !0,
      test: (o) => o === "" && n || o.search(t) !== -1
    });
  }
  email(t = de.email) {
    return this.matches(Wa, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = de.url) {
    return this.matches(Za, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = de.uuid) {
    return this.matches(Qa, {
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
    } = t : r = t), this.matches(ts, {
      name: "datetime",
      message: r || de.datetime,
      excludeEmptyString: !0
    }).test({
      name: "datetime_offset",
      message: r || de.datetime_offset,
      params: {
        allowOffset: n
      },
      skipAbsent: !0,
      test: (s) => {
        if (!s || n) return !0;
        const o = Jt(s);
        return o ? !!o.z : !1;
      }
    }).test({
      name: "datetime_precision",
      message: r || de.datetime_precision,
      params: {
        precision: a
      },
      skipAbsent: !0,
      test: (s) => {
        if (!s || a == null) return !0;
        const o = Jt(s);
        return o ? o.precision === a : !1;
      }
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((t) => t === null ? "" : t);
  }
  trim(t = de.trim) {
    return this.transform((r) => r != null ? r.trim() : r).test({
      message: t,
      name: "trim",
      test: rs
    });
  }
  lowercase(t = de.lowercase) {
    return this.transform((r) => Ne(r) ? r : r.toLowerCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (r) => Ne(r) || r === r.toLowerCase()
    });
  }
  uppercase(t = de.uppercase) {
    return this.transform((r) => Ne(r) ? r : r.toUpperCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (r) => Ne(r) || r === r.toUpperCase()
    });
  }
}
tt.prototype = $n.prototype;
let as = (e) => e != +e;
function Et() {
  return new An();
}
class An extends ye {
  constructor() {
    super({
      type: "number",
      check(t) {
        return t instanceof Number && (t = t.valueOf()), typeof t == "number" && !as(t);
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
  min(t, r = Oe.min) {
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
  max(t, r = Oe.max) {
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
  lessThan(t, r = Oe.lessThan) {
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
  moreThan(t, r = Oe.moreThan) {
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
  positive(t = Oe.positive) {
    return this.moreThan(0, t);
  }
  negative(t = Oe.negative) {
    return this.lessThan(0, t);
  }
  integer(t = Oe.integer) {
    return this.test({
      name: "integer",
      message: t,
      skipAbsent: !0,
      test: (r) => Number.isInteger(r)
    });
  }
  truncate() {
    return this.transform((t) => Ne(t) ? t : t | 0);
  }
  round(t) {
    var r;
    let n = ["ceil", "floor", "round", "trunc"];
    if (t = ((r = t) == null ? void 0 : r.toLowerCase()) || "round", t === "trunc") return this.truncate();
    if (n.indexOf(t.toLowerCase()) === -1) throw new TypeError("Only valid options for round() are: " + n.join(", "));
    return this.transform((a) => Ne(a) ? a : Math[t](a));
  }
}
Et.prototype = An.prototype;
let On = /* @__PURE__ */ new Date(""), ss = (e) => Object.prototype.toString.call(e) === "[object Date]";
function lr() {
  return new lt();
}
class lt extends ye {
  constructor() {
    super({
      type: "date",
      check(t) {
        return ss(t) && !isNaN(t.getTime());
      }
    }), this.withMutation(() => {
      this.transform((t, r) => !this.spec.coerce || this.isType(t) || t === null ? t : (t = Ha(t), isNaN(t) ? lt.INVALID_DATE : new Date(t)));
    });
  }
  prepareParam(t, r) {
    let n;
    if (Le.isRef(t))
      n = t;
    else {
      let a = this.cast(t);
      if (!this._typeCheck(a)) throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);
      n = a;
    }
    return n;
  }
  min(t, r = Qt.min) {
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
  max(t, r = Qt.max) {
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
lt.INVALID_DATE = On;
lr.prototype = lt.prototype;
lr.INVALID_DATE = On;
function is(e, t = []) {
  let r = [], n = /* @__PURE__ */ new Set(), a = new Set(t.map(([o, c]) => `${o}-${c}`));
  function s(o, c) {
    let d = Me.split(o)[0];
    n.add(d), a.has(`${c}-${d}`) || r.push([c, d]);
  }
  for (const o of Object.keys(e)) {
    let c = e[o];
    n.add(o), Le.isRef(c) && c.isSibling ? s(c.path, o) : Ft(c) && "deps" in c && c.deps.forEach((d) => s(d, o));
  }
  return Ia.array(Array.from(n), r).reverse();
}
function Or(e, t) {
  let r = 1 / 0;
  return e.some((n, a) => {
    var s;
    if ((s = t.path) != null && s.includes(n))
      return r = a, !0;
  }), r;
}
function Fn(e) {
  return (t, r) => Or(e, t) - Or(e, r);
}
const Cn = (e, t, r) => {
  if (typeof e != "string")
    return e;
  let n = e;
  try {
    n = JSON.parse(e);
  } catch {
  }
  return r.isType(n) ? n : e;
};
function St(e) {
  if ("fields" in e) {
    const t = {};
    for (const [r, n] of Object.entries(e.fields))
      t[r] = St(n);
    return e.setFields(t);
  }
  if (e.type === "array") {
    const t = e.optional();
    return t.innerType && (t.innerType = St(t.innerType)), t;
  }
  return e.type === "tuple" ? e.optional().clone({
    types: e.spec.types.map(St)
  }) : "optional" in e ? e.optional() : e;
}
const os = (e, t) => {
  const r = [...Me.normalizePath(t)];
  if (r.length === 1) return r[0] in e;
  let n = r.pop(), a = Me.getter(Me.join(r), !0)(e);
  return !!(a && n in a);
};
let Fr = (e) => Object.prototype.toString.call(e) === "[object Object]";
function Cr(e, t) {
  let r = Object.keys(e.fields);
  return Object.keys(t).filter((n) => r.indexOf(n) === -1);
}
const ls = Fn([]);
function In(e) {
  return new Rn(e);
}
class Rn extends ye {
  constructor(t) {
    super({
      type: "object",
      check(r) {
        return Fr(r) || typeof r == "function";
      }
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = ls, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      t && this.shape(t);
    });
  }
  _cast(t, r = {}) {
    var n;
    let a = super._cast(t, r);
    if (a === void 0) return this.getDefault(r);
    if (!this._typeCheck(a)) return a;
    let s = this.fields, o = (n = r.stripUnknown) != null ? n : this.spec.noUnknown, c = [].concat(this._nodes, Object.keys(a).filter((y) => !this._nodes.includes(y))), d = {}, u = Object.assign({}, r, {
      parent: d,
      __validating: r.__validating || !1
    }), h = !1;
    for (const y of c) {
      let f = s[y], v = y in a, x = a[y];
      if (f) {
        let E;
        u.path = (r.path ? `${r.path}.` : "") + y, f = f.resolve({
          value: x,
          context: r.context,
          parent: d
        });
        let $ = f instanceof ye ? f.spec : void 0, p = $?.strict;
        if ($ != null && $.strip) {
          h = h || y in a;
          continue;
        }
        E = !r.__validating || !p ? f.cast(x, u) : x, E !== void 0 && (d[y] = E);
      } else v && !o && (d[y] = x);
      (v !== y in d || d[y] !== x) && (h = !0);
    }
    return h ? d : a;
  }
  _validate(t, r = {}, n, a) {
    let {
      from: s = [],
      originalValue: o = t,
      recursive: c = this.spec.recursive
    } = r;
    r.from = [{
      schema: this,
      value: o
    }, ...s], r.__validating = !0, r.originalValue = o, super._validate(t, r, n, (d, u) => {
      if (!c || !Fr(u)) {
        a(d, u);
        return;
      }
      o = o || u;
      let h = [];
      for (let y of this._nodes) {
        let f = this.fields[y];
        !f || Le.isRef(f) || h.push(f.asNestedTest({
          options: r,
          key: y,
          parent: u,
          parentPath: r.path,
          originalParent: o
        }));
      }
      this.runTests({
        tests: h,
        value: u,
        originalValue: o,
        options: r
      }, n, (y) => {
        a(y.sort(this._sortErrors).concat(d), u);
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
      const o = n[a];
      n[a] = o === void 0 ? s : o;
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
      let o = t;
      (a = o) != null && a.value && (o = Object.assign({}, o, {
        parent: o.value,
        value: o.value[n]
      })), r[n] = s && "getDefault" in s ? s.getDefault(o) : void 0;
    }), r;
  }
  setFields(t, r) {
    let n = this.clone();
    return n.fields = t, n._nodes = is(t, r), n._sortErrors = Fn(Object.keys(t)), r && (n._excludedEdges = r), n;
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
    return St(this);
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
    let a = Me.getter(t, !0);
    return this.transform((s) => {
      if (!s) return s;
      let o = s;
      return os(s, t) && (o = Object.assign({}, s), n || delete o[t], o[r] = a(s)), o;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(Cn);
  }
  /**
   * Similar to `noUnknown` but only validates that an object is the right shape without stripping the unknown keys
   */
  exact(t) {
    return this.test({
      name: "exact",
      exclusive: !0,
      message: t || jt.exact,
      test(r) {
        if (r == null) return !0;
        const n = Cr(this.schema, r);
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
  noUnknown(t = !0, r = jt.noUnknown) {
    typeof t != "boolean" && (r = t, t = !0);
    let n = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: r,
      test(a) {
        if (a == null) return !0;
        const s = Cr(this.schema, a);
        return !t || s.length === 0 || this.createError({
          params: {
            unknown: s.join(", ")
          }
        });
      }
    });
    return n.spec.noUnknown = t, n;
  }
  unknown(t = !0, r = jt.noUnknown) {
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
    return this.transformKeys(Vt.camelCase);
  }
  snakeCase() {
    return this.transformKeys(Vt.snakeCase);
  }
  constantCase() {
    return this.transformKeys((t) => Vt.snakeCase(t).toUpperCase());
  }
  describe(t) {
    const r = (t ? this.resolve(t) : this).clone(), n = super.describe(t);
    n.fields = {};
    for (const [s, o] of Object.entries(r.fields)) {
      var a;
      let c = t;
      (a = c) != null && a.value && (c = Object.assign({}, c, {
        parent: c.value,
        value: c.value[s]
      })), n.fields[s] = o.describe(c);
    }
    return n;
  }
}
In.prototype = Rn.prototype;
function er(e) {
  return new Pn(e);
}
class Pn extends ye {
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
    const s = n.map((o, c) => {
      const d = this.innerType.cast(o, Object.assign({}, r, {
        path: `${r.path || ""}[${c}]`,
        parent: n,
        originalValue: o,
        value: o,
        index: c
      }));
      return d !== o && (a = !0), d;
    });
    return a ? s : n;
  }
  _validate(t, r = {}, n, a) {
    var s;
    let o = this.innerType, c = (s = r.recursive) != null ? s : this.spec.recursive;
    r.originalValue != null && r.originalValue, super._validate(t, r, n, (d, u) => {
      var h;
      if (!c || !o || !this._typeCheck(u)) {
        a(d, u);
        return;
      }
      let y = new Array(u.length);
      for (let v = 0; v < u.length; v++) {
        var f;
        y[v] = o.asNestedTest({
          options: r,
          index: v,
          parent: u,
          parentPath: r.path,
          originalParent: (f = r.originalValue) != null ? f : t
        });
      }
      this.runTests({
        value: u,
        tests: y,
        originalValue: (h = r.originalValue) != null ? h : t,
        options: r
      }, n, (v) => a(v.concat(d), u));
    });
  }
  clone(t) {
    const r = super.clone(t);
    return r.innerType = this.innerType, r;
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(Cn);
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
    if (!Ft(t)) throw new TypeError("`array.of()` sub-schema must be a valid yup schema not: " + $e(t));
    return r.innerType = t, r.spec = Object.assign({}, r.spec, {
      types: t
    }), r;
  }
  length(t, r = Tt.length) {
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
    return r = r || Tt.min, this.test({
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
    return r = r || Tt.max, this.test({
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
er.prototype = Pn.prototype;
const cs = "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg", us = ["jpg", "jpeg", "png", "gif", "svg", "webp"], ds = ["mp4", "webm", "ogg"], fs = ["txt", "json", "csv"], hs = ["pdf"];
function ps(e) {
  return e.template ? e.template : "tab";
}
function ms(e) {
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    const a = n.group || "Info";
    t[a] || (t[a] = { label: a, type: "fields", fields: [] }), t[a]?.fields?.push({ name: r, ...n });
  }), t;
}
const ys = (e) => Object.entries(e ?? {}).filter(([, t]) => t.type === "geolocation").map(([t]) => t);
async function gs() {
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
function At(e, t = "create") {
  const r = {};
  return Object.keys(e).forEach((n) => {
    e[n].vmode === "edit" && t === "create" || (r[n] = {
      label: n,
      required: e[n].required ?? !1
    });
  }), r;
}
function bs(e, t = "create") {
  return Object.entries(e).filter(([, r]) => !(r.vmode === "edit" && t === "create")).map(([r, n]) => ({
    ...n,
    name: r
  }));
}
const ct = {
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
function ut(e) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(e) ? e : 6;
}
const he = (e, t) => typeof e == "string" ? e.replace(
  /#(\w+)#/g,
  (r, n) => t[n] !== void 0 ? String(t[n]) : r
) : Array.isArray(e) ? e.map((r) => he(r, t)) : e && typeof e == "object" ? Object.fromEntries(
  Object.entries(e).map(([r, n]) => [
    he(r, t),
    he(n, t)
  ])
) : e, Mn = (e) => {
  const t = Array.isArray(e?.data?.data) ? e.data.data[0] : Array.isArray(e?.data) ? e.data[0] : e?.data?.data ?? e?.data;
  return t && typeof t == "object" && !Array.isArray(t) ? t : null;
}, ve = (e, t, r, n) => {
  if (!Array.isArray(r) || r.length === 0) return {};
  const a = n ?? (r[0] && typeof r[0] == "object" && "category" in r[0] ? "category" : void 0);
  if (!a) {
    const o = {};
    return r.forEach((c) => {
      const d = c[e], u = c[t];
      d != null && u != null && (o[String(d)] = String(u));
    }), o;
  }
  const s = {};
  return r.forEach((o) => {
    const c = o[a] ?? "Others", d = o[e], u = o[t];
    d == null || u == null || (s[c] || (s[c] = {}), s[c][String(d)] = String(u));
  }), s;
};
function Ir(e, t) {
  if (!t || Object.keys(t).length === 0) return e;
  if (typeof e == "number")
    return t[String(e)] ?? e;
  if (typeof e == "string") {
    const n = e.split(",").map((a) => a.trim()).map((a) => t[a]).filter(Boolean);
    return n.length ? n.join(", ") : e;
  }
  return e;
}
const xs = (e) => e === !0 || e === "true", vs = (e, t, r, n) => {
  e.forEach((a) => {
    const s = a?.name;
    if (!s) return;
    let o = n?.[s];
    o == null && (o = a.default), a.multiple === !0 || a.type === "checkbox" || a.type === "tags" ? t[s] = Array.isArray(o) ? o : typeof o == "string" ? o.split(",").map((d) => d.trim()).filter(Boolean) : [] : a.type === "json" ? t[s] = typeof o == "object" && o !== null ? JSON.stringify(o, null, 2) : o ?? "" : a.type === "date" ? t[s] = typeof o == "string" ? o.slice(0, 10) : "" : a.type === "time" ? typeof o == "string" ? o.includes("T") ? t[s] = o.slice(11, 16) : t[s] = o.slice(0, 5) : t[s] = "" : s === "blocked" || s === "blacklist" ? t[s] = String(o ?? "false") : t[s] = o ?? "";
    let c;
    a.type === "file" ? c = a.multiple ? er().of(Xt()) : Xt() : a.multiple === !0 || a.type === "checkbox" || a.type === "tags" ? c = er().of(tt()) : a.type === "email" ? c = tt().email("Invalid email") : a.type === "number" ? c = Et().typeError("Must be a number") : a.type === "json" ? c = tt().test("json", "Invalid JSON", (d) => {
      if (!d) return !0;
      try {
        return JSON.parse(d), !0;
      } catch {
        return !1;
      }
    }) : c = tt(), a.required && (c = c.required(
      a.error_message || `${a.label || s} is required`
    )), a?.validate?.regex && typeof a.validate.regex == "string" && (c = c.matches(
      new RegExp(a?.validate?.regex),
      a?.error_message || "Invalid input format"
    )), a?.validate && Object.entries(a.validate).forEach(([d, u]) => {
      switch (d) {
        case "email":
          u && (c = c.email("Invalid email format"));
          break;
        case "mobile":
          c = c.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          c = c.matches(
            new RegExp(u),
            `Must match pattern: ${u}`
          );
          break;
        case "date":
          c = lr().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((h, y) => {
            if (typeof y == "string") {
              const f = y.replace(/-/g, "/"), [v, x, E] = f.split("/");
              if (v && x && E)
                return /* @__PURE__ */ new Date(`${E}-${x}-${v}`);
            }
            return h;
          });
          break;
        case "time":
          c = c.matches(
            /^([0-1][0-9]|2[0-3])[:\-]([0-5][0-9])$/,
            "Invalid time format (HH:MM)"
          );
          break;
        case "timesec":
          c = c.matches(
            /^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/,
            "Invalid time format (HH:MM:SS)"
          );
          break;
        case "number":
        case "numeric":
          c = Et().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          c = Et().typeError("Must be a decimal").transform((h, y) => {
            if (y == null || y === "") return;
            const f = Number(y);
            if (isNaN(f)) return h;
            if (typeof h == "number" && !isNaN(h)) {
              const v = Number(h);
              return Number.isInteger(v) ? Number(f.toFixed(v)) : f;
            }
            return f;
          });
          break;
        case "alphanumeric":
          c = c.matches(
            /^[a-z0-9]+$/i,
            "Must be alphanumeric"
          );
          break;
        case "alpha":
          c = c.matches(
            /^[a-zA-Z]+$/,
            "Must contain only letters"
          );
          break;
        case "upper":
          c = c.transform(
            (h) => h && h.toUpperCase()
          );
          break;
        case "lower":
          c = c.transform(
            (h) => h && h.toLowerCase()
          );
          break;
        case "length-min": {
          const h = Number(u);
          isNaN(h) || (c = c.min(h, `Minimum length is ${h}`));
          break;
        }
        case "length-max": {
          const h = Number(u);
          isNaN(h) || (c = c.max(h, `Maximum length is ${h}`));
          break;
        }
      }
    }), r[s] = c;
  });
}, tr = (e) => !e || typeof e != "object" ? !1 : Object.values(e).every(
  (t) => typeof t == "object" && t !== null
);
function ws(e) {
  return typeof e == "object" && e !== null && typeof e.target == "string" && typeof e.src == "object" && e.src !== null && typeof e.src.table == "string";
}
function js(e) {
  return e.split(",").map((t) => t.trim()).map((t) => {
    const r = t.match(/^(.+?)\s+as\s+.+$/i);
    return r ? r[1]?.trim() : t;
  }).filter((t) => !!t);
}
const Rr = (e, t) => {
  if (!e || t == null) return;
  const r = String(t);
  if (typeof Object.values(e)[0] == "string")
    return e[r];
  for (const a of Object.values(e))
    if (r in a)
      return a[r];
}, Ts = (e) => {
  if (!e) return [];
  if (Array.isArray(e))
    return e.map(
      (n) => [
        String(n.value),
        String(n.title ?? n.label ?? n.value)
      ]
    );
  const t = Object.values(e);
  return t.length ? typeof t[0] == "string" ? Object.entries(e).map(([n, a]) => [String(n), a]) : Object.values(e).flatMap(
    (n) => Object.entries(n).map(
      ([a, s]) => [String(a), s]
    )
  ) : [];
};
function Es(e) {
  return e ? tr(e) ? Object.values(e).reduce((t, r) => (Object.assign(t, r), t), {}) : e : {};
}
const me = (e) => {
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    const a = r.includes(".") ? r.split(".").pop() : r;
    if (a in t) {
      console.warn(`Duplicate key after normalization: ${a}`);
      continue;
    }
    t[a] = n;
  }
  return t;
};
function Ss(e) {
  if (!e || e.type !== "Buffer" || !Array.isArray(e.data)) return null;
  const t = new TextDecoder().decode(new Uint8Array(e.data)).trim();
  if (t.startsWith("data:image/"))
    return console.log("decoded", t), { type: "image", src: t };
  if (t.startsWith("<"))
    return { type: "html", html: t };
  try {
    const r = JSON.parse(t);
    if (Array.isArray(r) && r[0]?.d)
      return { type: "drawn", paths: r };
    if (r?.text)
      return { type: "text", data: r };
  } catch {
  }
  return null;
}
function _s(e = "") {
  return e.split(".").pop()?.toLowerCase() ?? "";
}
function Ns(e) {
  return us.includes(e) ? "image" : ds.includes(e) ? "video" : hs.includes(e) ? "pdf" : fs.includes(e) ? "text" : "other";
}
const Pr = {
  image: "fa fa-file-image",
  pdf: "fa fa-file-pdf",
  video: "fa fa-file-video",
  text: "fa fa-file-lines",
  other: "fa fa-file"
}, $s = ({ fileUrl: e, category: t }) => e ? t === "image" ? /* @__PURE__ */ i.jsx("img", { src: e, className: "max-h-[80vh] mx-auto" }) : t === "pdf" || t === "text" ? /* @__PURE__ */ i.jsx("iframe", { src: e, className: "w-full h-[80vh]" }) : t === "video" ? /* @__PURE__ */ i.jsx("video", { controls: !0, className: "w-full max-h-[80vh]", children: /* @__PURE__ */ i.jsx("source", { src: e }) }) : /* @__PURE__ */ i.jsxs("div", { className: "text-center p-4", children: [
  /* @__PURE__ */ i.jsx("p", { children: "Preview not available" }),
  /* @__PURE__ */ i.jsx("a", { href: e, download: !0, className: "text-blue-600 underline", children: "Download file" })
] }) : null, rt = (e) => ({
  Authorization: `Bearer ${e.accessToken}`
}), Ut = async (e) => (await W.get(
  e.baseURL + e.dbopsGetHash,
  { headers: rt(e) }
)).data.refhash, Gt = async (e, t) => (await W.post(
  e.baseURL + e.dbopsGetRefId,
  t,
  { headers: rt(e) }
)).data.refid, As = {
  async fetch(e, t, r, n) {
    const a = await Ut(e);
    let s = !1, o;
    r && (s = !0, o = r), s || (o = await Gt(e, {
      operation: "fetch",
      source: t.source,
      fields: t.fields ?? {},
      datahash: a,
      srcid: n
    }));
    const c = await W.post(
      e.baseURL + e.dbopsFetch,
      { refid: o, datahash: a },
      { headers: rt(e) }
    );
    return c.data?.data ?? c.data;
  },
  async create(e, t, r) {
    const n = await Ut(e), a = await Gt(e, {
      operation: "create",
      source: t.source,
      fields: t.values,
      datahash: n,
      srcid: r
    });
    return (await W.post(
      e.baseURL + e.dbopsCreate,
      { refid: a, fields: t.values, datahash: n },
      { headers: rt(e) }
    )).data;
  },
  async update(e, t, r) {
    const n = await Ut(e), a = await Gt(e, {
      operation: "update",
      source: t.source,
      fields: t.values,
      datahash: n,
      srcid: r
    });
    return (await W.post(
      e.baseURL + e.dbopsUpdate,
      { refid: a, fields: t.values, datahash: n },
      { headers: rt(e) }
    )).data;
  }
};
async function He(e, t, r, n = void 0, a = void 0, s = {}) {
  try {
    let o = r;
    return o || (o = (await W({
      method: "POST",
      url: e.baseURL + e.registerQuery,
      data: { query: t, srcid: a },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    })).data.queryid), await W({
      method: "POST",
      url: e.baseURL + e.runQuery,
      data: {
        queryid: o,
        filter: s,
        refid: n,
        page: 0,
        limit: 1e4
      },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    });
  } catch (o) {
    throw o;
  }
}
async function Os({
  field: e,
  value: t,
  sqlOpsUrls: r,
  setFieldOptions: n
}) {
  if (!e.ajaxchain || !t || !r) return;
  const a = Array.isArray(e.ajaxchain) ? e.ajaxchain : [e.ajaxchain];
  for (const s of a) {
    const o = s.src;
    if (!o) continue;
    let c;
    if (!o.queryid) {
      const f = he(o.where ?? {}, { refid: t });
      c = {
        ...o,
        table: o.table,
        cols: o.columns,
        where: f
      };
    }
    const { data: d } = await He(
      r,
      c,
      o.queryid,
      t
    ), u = Array.isArray(d?.data?.data) ? d.data.data : Array.isArray(d?.data) ? d.data : d, h = Array.isArray(u) ? u.map(me) : [], y = ve(
      e.valueKey ?? "value",
      e.labelKey ?? "title",
      h,
      e.groupKey
    );
    n(s.target, y);
  }
}
async function Dn(e, t) {
  let r = t.previewPath ?? "/api/files/preview";
  const n = await W.get(
    `${t.baseURL}${r}?uri=${encodeURIComponent(e)}`,
    {
      responseType: "blob",
      headers: {
        Authorization: `Bearer ${t?.accessToken}`
      }
    }
  );
  return URL.createObjectURL(n.data);
}
function Fs(e) {
  const t = Pr[e] ?? Pr.other;
  return /* @__PURE__ */ i.jsx("i", { className: `${t} text-2xl text-gray-600` });
}
const Cs = ({ filePath: e, sqlOpsUrls: t }) => {
  const [r, n] = le(null), [a, s] = le(!1), o = _s(e), c = Ns(o);
  oe(() => {
    if (!t || c !== "image" && !a) return;
    let u = !0, h = null;
    return Dn(e, t).then((y) => {
      u && (h = y, n(y));
    }), () => {
      u = !1, h && URL.revokeObjectURL(h);
    };
  }, [c, a, e, t]);
  let d = e.split("/").pop();
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    c === "image" && r ? /* @__PURE__ */ i.jsx(
      "img",
      {
        src: r,
        alt: d,
        title: "Click to preview",
        onClick: () => s(!0),
        className: "h-16 w-16 object-cover rounded  cursor-pointer hover:opacity-90"
      }
    ) : /* @__PURE__ */ i.jsxs(
      "div",
      {
        role: "button",
        tabIndex: 0,
        onClick: () => s(!0),
        onKeyDown: (u) => u.key === "Enter" && s(!0),
        className: "inline-flex cursor-pointer items-center gap-1",
        title: "Click to preview",
        children: [
          Fs(c),
          /* @__PURE__ */ i.jsx("span", { className: "text-sm", children: d })
        ]
      }
    ),
    a && /* @__PURE__ */ i.jsx("div", { className: "fixed inset-0 bg-black/60 z-50 flex items-center justify-center", children: /* @__PURE__ */ i.jsxs("div", { className: "bg-white rounded-lg p-4 max-w-5xl w-full", children: [
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "float-right text-sm",
          onClick: () => s(!1),
          children: "✕"
        }
      ),
      r ? /* @__PURE__ */ i.jsx($s, { fileUrl: r, category: c }) : /* @__PURE__ */ i.jsx("div", { className: "text-center p-8", children: "Loading preview…" })
    ] }) })
  ] });
};
function dt({
  field: e,
  data: t,
  methods: r = {},
  sqlOpsUrls: n,
  refid: a,
  module_refid: s,
  optionsOverride: o,
  setFieldOptions: c
}) {
  e?.name;
  const d = `
    text-sm text-gray-600 break-words
  `, u = `
    block text-sm font-semibold  transition-all duration-300 text-gray-700 capitalize
  `, [h, y] = le(
    o ?? e.options ?? {}
  ), f = ee.useRef(!1);
  ee.useEffect(() => {
    o && y(o);
  }, [o]);
  const v = ee.useMemo(
    () => Es(h),
    [h]
  );
  ee.useEffect(() => {
    let m = !0, T = e.valueKey ?? "value", _ = e.labelKey ?? "title";
    return (async () => {
      if (e?.options) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const k = Object.values(e.options);
          if (k.length && typeof k[0] == "string") {
            y(e.options);
            return;
          }
        }
        const M = (Array.isArray(e.options) ? e.options : [e.options]).map(me), C = ve(
          T,
          _,
          M,
          e.groupKey
          // auto-uses `category` if present
        );
        y(C);
        return;
      }
      const w = e?.source ?? {};
      if (e.type === "dataMethod") {
        const j = e.method, M = j ? r[j] : void 0;
        if (M)
          try {
            const C = await Promise.resolve(M()), k = Array.isArray(C?.data?.data) ? C.data.data : Array.isArray(C?.data) ? C.data : C, L = Array.isArray(k) ? k.map(me) : [], V = ve(T, _, L, e.groupKey);
            m && y(V);
          } catch (C) {
            console.error("Method execution failed:", C), m && y({});
          }
        else
          m && y({});
      }
      if (w.type === "api" && w.url)
        try {
          const j = await W({
            method: w.method || "GET",
            url: w.url,
            data: w.body ?? {},
            params: w.params ?? {},
            headers: w.headers ?? {}
          }), M = Array.isArray(j?.data?.data) ? j.data.data : Array.isArray(j?.data) ? j.data : j, C = Array.isArray(M) ? M.map(me) : [], k = ve(T, _, C, e.groupKey);
          m && y(k);
        } catch (j) {
          console.error("API execution failed:", j), m && y({});
        }
      if (e.table || e.type === "dataSelector" || e.queryid) {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let j;
          if (e.type === "dataSelector")
            j = {
              table: "do_lists",
              cols: "title,value",
              where: {
                groupid: e.groupid ?? ""
              }
            };
          else if (!e.queryid) {
            if (!e.table || !e.columns) {
              console.error("Invalid SQL field config", e);
              return;
            }
            j = {
              table: e.table,
              cols: e.columns,
              where: e.where ? a ? he(e.where, { refid: a }) : e.where : void 0
            };
          }
          const M = await He(n, j, e?.queryid, void 0, s), C = Array.isArray(M?.data?.data) ? M.data.data : Array.isArray(M?.data) ? M.data : M, k = Array.isArray(C) ? C.map(me) : [], L = ve(T, _, k, e.groupKey);
          m && y(L);
        } catch (j) {
          console.error("API fetch failed:", j);
        }
      }
    })(), () => {
      m = !1;
    };
  }, [
    e.options,
    e.source,
    e.table,
    e.columns,
    e.where,
    a
  ]);
  const x = e?.name ? t?.[e.name] : void 0;
  ee.useEffect(() => {
    f.current || !c || !x || (f.current = !0, Os({
      field: e,
      value: x,
      sqlOpsUrls: n,
      setFieldOptions: c
    }));
  }, [x, n, c]);
  let E;
  typeof x == "string" ? e.type === "date" ? E = x.split("T")[0] : e.type === "time" ? E = x.includes("T") ? x.slice(11, 16) : x.slice(0, 5) : E = Ir(x, v) : E = Ir(x, v);
  const $ = E == null ? "" : typeof E == "string" || typeof E == "number" ? E : JSON.stringify(E), p = Ss(x);
  return /* @__PURE__ */ i.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ i.jsx("label", { className: u, children: e?.label }),
    /* @__PURE__ */ i.jsx("div", { className: "relative", children: p ? p.type === "drawn" ? /* @__PURE__ */ i.jsx("svg", { viewBox: "0 0 300 150", className: "h-24 w-full border bg-white rounded", children: p.paths.map((m, T) => /* @__PURE__ */ i.jsx(
      "path",
      {
        d: m.d,
        stroke: m.color || "#000",
        strokeWidth: m.width || 2,
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      T
    )) }) : p.type === "text" ? /* @__PURE__ */ i.jsx("svg", { viewBox: "0 0 300 150", className: "h-24 w-full border bg-white rounded", children: /* @__PURE__ */ i.jsx(
      "text",
      {
        x: "10",
        y: "100",
        fontSize: p.data.style?.fontSize || 32,
        fontFamily: p.data.style?.fontFamily || "cursive",
        fill: p.data.style?.textColor || "#000",
        children: p.data.text
      }
    ) }) : p.type === "html" ? /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "border bg-white rounded p-2 text-sm",
        dangerouslySetInnerHTML: { __html: p.html }
      }
    ) : /* @__PURE__ */ i.jsx(
      "img",
      {
        src: p.src,
        alt: "signature",
        className: "h-24 object-contain border bg-white rounded"
      }
    ) : (e.type === "file" || e.type === "attachement" || e.type === "photo" || e.type === "avatar") && E ? /* @__PURE__ */ i.jsx("div", { className: "flex flex-wrap gap-2", children: String(E).split(",").map((m) => m.trim()).filter(Boolean).map((m) => /* @__PURE__ */ i.jsx(
      Cs,
      {
        sqlOpsUrls: n,
        filePath: m
      },
      m
    )) }) : e.type === "richtextarea" ? /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "tiptap-view border bg-white rounded p-2 text-sm",
        dangerouslySetInnerHTML: { __html: String($) }
      }
    ) : /* @__PURE__ */ i.jsx("p", { className: d, children: $ }) })
  ] });
}
function Is({ filePath: e, field_name: t, sqlOpsUrls: r }) {
  const [n, a] = le(null);
  return oe(() => {
    if (!open || !r) return;
    let s = !0, o = null;
    return Dn(e, r).then((c) => {
      s && (o = c, a(c));
    }), () => {
      s = !1, o && URL.revokeObjectURL(o);
    };
  }, [open, e, r]), n ? /* @__PURE__ */ i.jsx(
    "img",
    {
      src: n,
      alt: t,
      title: t,
      className: "object-contain h-full w-full",
      onError: (s) => {
        const o = s.currentTarget;
        o.onerror = null, o.src = cs;
      }
    }
  ) : null;
}
function Rs({
  commonInfo: e,
  infoData: t,
  hiddenFields: r = [],
  sqlOpsUrls: n,
  setFieldOptions: a,
  fieldOptions: s,
  module_refid: o,
  refid: c,
  methods: d
}) {
  return /* @__PURE__ */ i.jsx("div", { className: "bg-white border border-gray-100 p-4 min-h-3/10 overflow-auto", children: /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    /* @__PURE__ */ i.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ i.jsx("div", { className: "relative w-42 h-42 ", children: e?.fields?.filter((u) => u.type === "avatar").map((u) => {
      const h = t[u.name];
      return typeof h != "string" || h.trim() === "" ? null : /* @__PURE__ */ i.jsx(Is, { field_name: u.name, filePath: h, sqlOpsUrls: n });
    }) }) }),
    /* @__PURE__ */ i.jsx("div", { className: "lg:col-span-10 min-h-0 max-h-40  overflow-y-auto custom-scrollbar", children: /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-12 gap-2", children: e.fields?.map((u, h) => {
      const y = t?.[u.name];
      return r.includes(u.name) || u.type === "avatar" || !y && y !== !1 && y !== 0 ? null : /* @__PURE__ */ i.jsx("div", { className: `hover:bg-gray-100 transition-colors duration-200 col-span-12 sm:col-span-6 ${ct[ut(u.width)] || "lg:col-span-4"}`, children: /* @__PURE__ */ i.jsx(
        dt,
        {
          field: u,
          data: t ?? {},
          sqlOpsUrls: n,
          methods: d,
          refid: c,
          module_refid: o,
          setFieldOptions: a,
          ...s[u.name] ? { optionsOverride: s[u.name] } : {}
        },
        u?.name
      ) }, u.name);
    }) }) })
  ] }) });
}
function cr({ tabObj: e, methods: t, tabName: r, sqlOpsUrls: n, refid: a, module_refid: s, setFieldOptions: o, fieldOptions: c }) {
  const [d, u] = ee.useState(null);
  return ee.useEffect(() => {
    let h = !1;
    return (async () => {
      const f = e?.config;
      if (!f?.type) {
        h || u(null);
        return;
      }
      if (f.type === "method") {
        const v = f.method, x = v ? t[v] : void 0;
        if (x)
          try {
            const E = await Promise.resolve(x());
            h || u(E || null);
          } catch (E) {
            console.error("Method execution failed:", E), h || u(null);
          }
        else
          h || u(null);
      }
      if (f.type === "api")
        try {
          const v = await W({
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
          h || u(v.data || null);
        } catch (v) {
          console.error("API fetch failed:", v), h || u(null);
        }
      if (f.type === "sql" && a && a != "0" || f?.dbopsid) {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let v = !1, x;
          f?.dbopsid && (v = !0, x = f?.dbopsid);
          const E = await W({
            method: "GET",
            url: n.baseURL + n.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          });
          if (!v) {
            let m = {
              ...f
            };
            f.where && (m = {
              ...f,
              where: he(f.where, {
                refid: a
              })
            }), x = (await W({
              method: "POST",
              url: n.baseURL + n.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: m,
                fields: At(f.fields, n.operation),
                forcefill: f.forcefill,
                datahash: E.data.refhash,
                srcid: s
              },
              headers: {
                Authorization: `Bearer ${n?.accessToken}`
              }
            }))?.data.refid;
          }
          const $ = await W({
            method: "POST",
            url: n.baseURL + n.dbopsFetch,
            data: {
              refid: x,
              datahash: E.data.refhash
            },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }), p = Mn($);
          h || u(p);
        } catch (v) {
          console.error("API fetch failed:", v);
        }
      }
    })(), () => {
      h = !0;
    };
  }, [
    e?.config?.type || "",
    e?.config?.method || "",
    e?.config?.url || "",
    JSON.stringify(e?.config?.params || {}),
    JSON.stringify(e?.config?.body || {}),
    JSON.stringify(e?.config?.headers || {})
  ]), /* @__PURE__ */ i.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-12 gap-2", children: d ? Object.keys(d).map((h, y) => {
    let f = { name: h, label: h };
    return /* @__PURE__ */ i.jsx(
      "div",
      {
        className: `col-span-12 sm:col-span-6 ${ct[ut(e.width)] || "lg:col-span-2"}`,
        children: /* @__PURE__ */ i.jsx(
          dt,
          {
            field: f,
            data: d ?? {},
            methods: t,
            refid: a,
            sqlOpsUrls: n,
            setFieldOptions: o,
            ...c[f.name] ? { optionsOverride: c[f.name] } : {}
          },
          h
        )
      },
      `field-${y}`
    );
  }) : /* @__PURE__ */ i.jsx("div", { className: "col-span-12 flex flex-col  min-h-0", children: /* @__PURE__ */ i.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center text-gray-500", children: [
    /* @__PURE__ */ i.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ i.jsxs("svg", { className: "w-8 h-8 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
      /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" }),
      /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m8 7 4-4 4 4" })
    ] }) }),
    /* @__PURE__ */ i.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No Data Available" }),
    /* @__PURE__ */ i.jsx("p", { className: "text-sm text-gray-500 text-center max-w-sm", children: "There are no records to display  at the moment." })
  ] }) }) }) });
}
function Ps({
  open: e,
  title: t = "Confirm Delete",
  message: r = "Are you sure you want to delete this record?",
  onConfirm: n,
  onCancel: a
}) {
  return e ? /* @__PURE__ */ i.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40", children: /* @__PURE__ */ i.jsxs("div", { className: "bg-white rounded-lg shadow-lg w-full max-w-sm p-4", children: [
    /* @__PURE__ */ i.jsx("h3", { className: "text-sm font-semibold text-gray-900", children: t }),
    /* @__PURE__ */ i.jsx("p", { className: "mt-2 text-sm text-gray-600", children: r }),
    /* @__PURE__ */ i.jsxs("div", { className: "mt-4 flex justify-end gap-2", children: [
      /* @__PURE__ */ i.jsx(
        "button",
        {
          onClick: a,
          className: "px-3 py-1.5 text-sm rounded border border-gray-300 text-gray-700 hover:bg-gray-50",
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ i.jsx(
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
var Ms = function(t) {
  return Ds(t) && !ks(t);
};
function Ds(e) {
  return !!e && typeof e == "object";
}
function ks(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || Bs(e);
}
var Ls = typeof Symbol == "function" && Symbol.for, zs = Ls ? Symbol.for("react.element") : 60103;
function Bs(e) {
  return e.$$typeof === zs;
}
function Vs(e) {
  return Array.isArray(e) ? [] : {};
}
function Ot(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? st(Vs(e), e, t) : e;
}
function Us(e, t, r) {
  return e.concat(t).map(function(n) {
    return Ot(n, r);
  });
}
function Gs(e, t, r) {
  var n = {};
  return r.isMergeableObject(e) && Object.keys(e).forEach(function(a) {
    n[a] = Ot(e[a], r);
  }), Object.keys(t).forEach(function(a) {
    !r.isMergeableObject(t[a]) || !e[a] ? n[a] = Ot(t[a], r) : n[a] = st(e[a], t[a], r);
  }), n;
}
function st(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || Us, r.isMergeableObject = r.isMergeableObject || Ms;
  var n = Array.isArray(t), a = Array.isArray(e), s = n === a;
  return s ? n ? r.arrayMerge(e, t, r) : Gs(e, t, r) : Ot(t, r);
}
st.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(n, a) {
    return st(n, a, r);
  }, {});
};
var rr = st, kn = typeof global == "object" && global && global.Object === Object && global, qs = typeof self == "object" && self && self.Object === Object && self, Ee = kn || qs || Function("return this")(), Fe = Ee.Symbol, Ln = Object.prototype, Ks = Ln.hasOwnProperty, Ys = Ln.toString, et = Fe ? Fe.toStringTag : void 0;
function Hs(e) {
  var t = Ks.call(e, et), r = e[et];
  try {
    e[et] = void 0;
    var n = !0;
  } catch {
  }
  var a = Ys.call(e);
  return n && (t ? e[et] = r : delete e[et]), a;
}
var Ws = Object.prototype, Zs = Ws.toString;
function Qs(e) {
  return Zs.call(e);
}
var Xs = "[object Null]", Js = "[object Undefined]", Mr = Fe ? Fe.toStringTag : void 0;
function ze(e) {
  return e == null ? e === void 0 ? Js : Xs : Mr && Mr in Object(e) ? Hs(e) : Qs(e);
}
function zn(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var ur = zn(Object.getPrototypeOf, Object);
function Be(e) {
  return e != null && typeof e == "object";
}
var ei = "[object Object]", ti = Function.prototype, ri = Object.prototype, Bn = ti.toString, ni = ri.hasOwnProperty, ai = Bn.call(Object);
function Dr(e) {
  if (!Be(e) || ze(e) != ei)
    return !1;
  var t = ur(e);
  if (t === null)
    return !0;
  var r = ni.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Bn.call(r) == ai;
}
function si() {
  this.__data__ = [], this.size = 0;
}
function Vn(e, t) {
  return e === t || e !== e && t !== t;
}
function Ct(e, t) {
  for (var r = e.length; r--; )
    if (Vn(e[r][0], t))
      return r;
  return -1;
}
var ii = Array.prototype, oi = ii.splice;
function li(e) {
  var t = this.__data__, r = Ct(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : oi.call(t, r, 1), --this.size, !0;
}
function ci(e) {
  var t = this.__data__, r = Ct(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function ui(e) {
  return Ct(this.__data__, e) > -1;
}
function di(e, t) {
  var r = this.__data__, n = Ct(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function Ae(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ae.prototype.clear = si;
Ae.prototype.delete = li;
Ae.prototype.get = ci;
Ae.prototype.has = ui;
Ae.prototype.set = di;
function fi() {
  this.__data__ = new Ae(), this.size = 0;
}
function hi(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function pi(e) {
  return this.__data__.get(e);
}
function mi(e) {
  return this.__data__.has(e);
}
function ft(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var yi = "[object AsyncFunction]", gi = "[object Function]", bi = "[object GeneratorFunction]", xi = "[object Proxy]";
function Un(e) {
  if (!ft(e))
    return !1;
  var t = ze(e);
  return t == gi || t == bi || t == yi || t == xi;
}
var qt = Ee["__core-js_shared__"], kr = function() {
  var e = /[^.]+$/.exec(qt && qt.keys && qt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function vi(e) {
  return !!kr && kr in e;
}
var wi = Function.prototype, ji = wi.toString;
function Ve(e) {
  if (e != null) {
    try {
      return ji.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ti = /[\\^$.*+?()[\]{}|]/g, Ei = /^\[object .+?Constructor\]$/, Si = Function.prototype, _i = Object.prototype, Ni = Si.toString, $i = _i.hasOwnProperty, Ai = RegExp(
  "^" + Ni.call($i).replace(Ti, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Oi(e) {
  if (!ft(e) || vi(e))
    return !1;
  var t = Un(e) ? Ai : Ei;
  return t.test(Ve(e));
}
function Fi(e, t) {
  return e?.[t];
}
function Ue(e, t) {
  var r = Fi(e, t);
  return Oi(r) ? r : void 0;
}
var it = Ue(Ee, "Map"), ot = Ue(Object, "create");
function Ci() {
  this.__data__ = ot ? ot(null) : {}, this.size = 0;
}
function Ii(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ri = "__lodash_hash_undefined__", Pi = Object.prototype, Mi = Pi.hasOwnProperty;
function Di(e) {
  var t = this.__data__;
  if (ot) {
    var r = t[e];
    return r === Ri ? void 0 : r;
  }
  return Mi.call(t, e) ? t[e] : void 0;
}
var ki = Object.prototype, Li = ki.hasOwnProperty;
function zi(e) {
  var t = this.__data__;
  return ot ? t[e] !== void 0 : Li.call(t, e);
}
var Bi = "__lodash_hash_undefined__";
function Vi(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ot && t === void 0 ? Bi : t, this;
}
function ke(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ke.prototype.clear = Ci;
ke.prototype.delete = Ii;
ke.prototype.get = Di;
ke.prototype.has = zi;
ke.prototype.set = Vi;
function Ui() {
  this.size = 0, this.__data__ = {
    hash: new ke(),
    map: new (it || Ae)(),
    string: new ke()
  };
}
function Gi(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function It(e, t) {
  var r = e.__data__;
  return Gi(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function qi(e) {
  var t = It(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ki(e) {
  return It(this, e).get(e);
}
function Yi(e) {
  return It(this, e).has(e);
}
function Hi(e, t) {
  var r = It(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function Ce(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ce.prototype.clear = Ui;
Ce.prototype.delete = qi;
Ce.prototype.get = Ki;
Ce.prototype.has = Yi;
Ce.prototype.set = Hi;
var Wi = 200;
function Zi(e, t) {
  var r = this.__data__;
  if (r instanceof Ae) {
    var n = r.__data__;
    if (!it || n.length < Wi - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Ce(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Qe(e) {
  var t = this.__data__ = new Ae(e);
  this.size = t.size;
}
Qe.prototype.clear = fi;
Qe.prototype.delete = hi;
Qe.prototype.get = pi;
Qe.prototype.has = mi;
Qe.prototype.set = Zi;
function Qi(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var Lr = function() {
  try {
    var e = Ue(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function Gn(e, t, r) {
  t == "__proto__" && Lr ? Lr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Xi = Object.prototype, Ji = Xi.hasOwnProperty;
function qn(e, t, r) {
  var n = e[t];
  (!(Ji.call(e, t) && Vn(n, r)) || r === void 0 && !(t in e)) && Gn(e, t, r);
}
function Rt(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var s = -1, o = t.length; ++s < o; ) {
    var c = t[s], d = void 0;
    d === void 0 && (d = e[c]), a ? Gn(r, c, d) : qn(r, c, d);
  }
  return r;
}
function eo(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var to = "[object Arguments]";
function zr(e) {
  return Be(e) && ze(e) == to;
}
var Kn = Object.prototype, ro = Kn.hasOwnProperty, no = Kn.propertyIsEnumerable, ao = zr(/* @__PURE__ */ function() {
  return arguments;
}()) ? zr : function(e) {
  return Be(e) && ro.call(e, "callee") && !no.call(e, "callee");
}, ht = Array.isArray;
function so() {
  return !1;
}
var Yn = typeof exports == "object" && exports && !exports.nodeType && exports, Br = Yn && typeof module == "object" && module && !module.nodeType && module, io = Br && Br.exports === Yn, Vr = io ? Ee.Buffer : void 0, oo = Vr ? Vr.isBuffer : void 0, Hn = oo || so, lo = 9007199254740991, co = /^(?:0|[1-9]\d*)$/;
function uo(e, t) {
  var r = typeof e;
  return t = t ?? lo, !!t && (r == "number" || r != "symbol" && co.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var fo = 9007199254740991;
function Wn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= fo;
}
var ho = "[object Arguments]", po = "[object Array]", mo = "[object Boolean]", yo = "[object Date]", go = "[object Error]", bo = "[object Function]", xo = "[object Map]", vo = "[object Number]", wo = "[object Object]", jo = "[object RegExp]", To = "[object Set]", Eo = "[object String]", So = "[object WeakMap]", _o = "[object ArrayBuffer]", No = "[object DataView]", $o = "[object Float32Array]", Ao = "[object Float64Array]", Oo = "[object Int8Array]", Fo = "[object Int16Array]", Co = "[object Int32Array]", Io = "[object Uint8Array]", Ro = "[object Uint8ClampedArray]", Po = "[object Uint16Array]", Mo = "[object Uint32Array]", te = {};
te[$o] = te[Ao] = te[Oo] = te[Fo] = te[Co] = te[Io] = te[Ro] = te[Po] = te[Mo] = !0;
te[ho] = te[po] = te[_o] = te[mo] = te[No] = te[yo] = te[go] = te[bo] = te[xo] = te[vo] = te[wo] = te[jo] = te[To] = te[Eo] = te[So] = !1;
function Do(e) {
  return Be(e) && Wn(e.length) && !!te[ze(e)];
}
function dr(e) {
  return function(t) {
    return e(t);
  };
}
var Zn = typeof exports == "object" && exports && !exports.nodeType && exports, nt = Zn && typeof module == "object" && module && !module.nodeType && module, ko = nt && nt.exports === Zn, Kt = ko && kn.process, Ze = function() {
  try {
    var e = nt && nt.require && nt.require("util").types;
    return e || Kt && Kt.binding && Kt.binding("util");
  } catch {
  }
}(), Ur = Ze && Ze.isTypedArray, Lo = Ur ? dr(Ur) : Do, zo = Object.prototype, Bo = zo.hasOwnProperty;
function Qn(e, t) {
  var r = ht(e), n = !r && ao(e), a = !r && !n && Hn(e), s = !r && !n && !a && Lo(e), o = r || n || a || s, c = o ? eo(e.length, String) : [], d = c.length;
  for (var u in e)
    (t || Bo.call(e, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    uo(u, d))) && c.push(u);
  return c;
}
var Vo = Object.prototype;
function fr(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Vo;
  return e === r;
}
var Uo = zn(Object.keys, Object), Go = Object.prototype, qo = Go.hasOwnProperty;
function Ko(e) {
  if (!fr(e))
    return Uo(e);
  var t = [];
  for (var r in Object(e))
    qo.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function Xn(e) {
  return e != null && Wn(e.length) && !Un(e);
}
function hr(e) {
  return Xn(e) ? Qn(e) : Ko(e);
}
function Yo(e, t) {
  return e && Rt(t, hr(t), e);
}
function Ho(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Wo = Object.prototype, Zo = Wo.hasOwnProperty;
function Qo(e) {
  if (!ft(e))
    return Ho(e);
  var t = fr(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Zo.call(e, n)) || r.push(n);
  return r;
}
function pr(e) {
  return Xn(e) ? Qn(e, !0) : Qo(e);
}
function Xo(e, t) {
  return e && Rt(t, pr(t), e);
}
var Jn = typeof exports == "object" && exports && !exports.nodeType && exports, Gr = Jn && typeof module == "object" && module && !module.nodeType && module, Jo = Gr && Gr.exports === Jn, qr = Jo ? Ee.Buffer : void 0, Kr = qr ? qr.allocUnsafe : void 0;
function el(e, t) {
  if (t)
    return e.slice();
  var r = e.length, n = Kr ? Kr(r) : new e.constructor(r);
  return e.copy(n), n;
}
function ea(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
function tl(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, s = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (s[a++] = o);
  }
  return s;
}
function ta() {
  return [];
}
var rl = Object.prototype, nl = rl.propertyIsEnumerable, Yr = Object.getOwnPropertySymbols, mr = Yr ? function(e) {
  return e == null ? [] : (e = Object(e), tl(Yr(e), function(t) {
    return nl.call(e, t);
  }));
} : ta;
function al(e, t) {
  return Rt(e, mr(e), t);
}
function ra(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var sl = Object.getOwnPropertySymbols, na = sl ? function(e) {
  for (var t = []; e; )
    ra(t, mr(e)), e = ur(e);
  return t;
} : ta;
function il(e, t) {
  return Rt(e, na(e), t);
}
function aa(e, t, r) {
  var n = t(e);
  return ht(e) ? n : ra(n, r(e));
}
function ol(e) {
  return aa(e, hr, mr);
}
function ll(e) {
  return aa(e, pr, na);
}
var nr = Ue(Ee, "DataView"), ar = Ue(Ee, "Promise"), sr = Ue(Ee, "Set"), ir = Ue(Ee, "WeakMap"), Hr = "[object Map]", cl = "[object Object]", Wr = "[object Promise]", Zr = "[object Set]", Qr = "[object WeakMap]", Xr = "[object DataView]", ul = Ve(nr), dl = Ve(it), fl = Ve(ar), hl = Ve(sr), pl = Ve(ir), _e = ze;
(nr && _e(new nr(new ArrayBuffer(1))) != Xr || it && _e(new it()) != Hr || ar && _e(ar.resolve()) != Wr || sr && _e(new sr()) != Zr || ir && _e(new ir()) != Qr) && (_e = function(e) {
  var t = ze(e), r = t == cl ? e.constructor : void 0, n = r ? Ve(r) : "";
  if (n)
    switch (n) {
      case ul:
        return Xr;
      case dl:
        return Hr;
      case fl:
        return Wr;
      case hl:
        return Zr;
      case pl:
        return Qr;
    }
  return t;
});
var ml = Object.prototype, yl = ml.hasOwnProperty;
function gl(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && yl.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var Jr = Ee.Uint8Array;
function yr(e) {
  var t = new e.constructor(e.byteLength);
  return new Jr(t).set(new Jr(e)), t;
}
function bl(e, t) {
  var r = t ? yr(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var xl = /\w*$/;
function vl(e) {
  var t = new e.constructor(e.source, xl.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var en = Fe ? Fe.prototype : void 0, tn = en ? en.valueOf : void 0;
function wl(e) {
  return tn ? Object(tn.call(e)) : {};
}
function jl(e, t) {
  var r = t ? yr(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var Tl = "[object Boolean]", El = "[object Date]", Sl = "[object Map]", _l = "[object Number]", Nl = "[object RegExp]", $l = "[object Set]", Al = "[object String]", Ol = "[object Symbol]", Fl = "[object ArrayBuffer]", Cl = "[object DataView]", Il = "[object Float32Array]", Rl = "[object Float64Array]", Pl = "[object Int8Array]", Ml = "[object Int16Array]", Dl = "[object Int32Array]", kl = "[object Uint8Array]", Ll = "[object Uint8ClampedArray]", zl = "[object Uint16Array]", Bl = "[object Uint32Array]";
function Vl(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case Fl:
      return yr(e);
    case Tl:
    case El:
      return new n(+e);
    case Cl:
      return bl(e, r);
    case Il:
    case Rl:
    case Pl:
    case Ml:
    case Dl:
    case kl:
    case Ll:
    case zl:
    case Bl:
      return jl(e, r);
    case Sl:
      return new n();
    case _l:
    case Al:
      return new n(e);
    case Nl:
      return vl(e);
    case $l:
      return new n();
    case Ol:
      return wl(e);
  }
}
var rn = Object.create, Ul = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!ft(t))
      return {};
    if (rn)
      return rn(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function Gl(e) {
  return typeof e.constructor == "function" && !fr(e) ? Ul(ur(e)) : {};
}
var ql = "[object Map]";
function Kl(e) {
  return Be(e) && _e(e) == ql;
}
var nn = Ze && Ze.isMap, Yl = nn ? dr(nn) : Kl, Hl = "[object Set]";
function Wl(e) {
  return Be(e) && _e(e) == Hl;
}
var an = Ze && Ze.isSet, Zl = an ? dr(an) : Wl, Ql = 1, Xl = 2, Jl = 4, sa = "[object Arguments]", ec = "[object Array]", tc = "[object Boolean]", rc = "[object Date]", nc = "[object Error]", ia = "[object Function]", ac = "[object GeneratorFunction]", sc = "[object Map]", ic = "[object Number]", oa = "[object Object]", oc = "[object RegExp]", lc = "[object Set]", cc = "[object String]", uc = "[object Symbol]", dc = "[object WeakMap]", fc = "[object ArrayBuffer]", hc = "[object DataView]", pc = "[object Float32Array]", mc = "[object Float64Array]", yc = "[object Int8Array]", gc = "[object Int16Array]", bc = "[object Int32Array]", xc = "[object Uint8Array]", vc = "[object Uint8ClampedArray]", wc = "[object Uint16Array]", jc = "[object Uint32Array]", J = {};
J[sa] = J[ec] = J[fc] = J[hc] = J[tc] = J[rc] = J[pc] = J[mc] = J[yc] = J[gc] = J[bc] = J[sc] = J[ic] = J[oa] = J[oc] = J[lc] = J[cc] = J[uc] = J[xc] = J[vc] = J[wc] = J[jc] = !0;
J[nc] = J[ia] = J[dc] = !1;
function at(e, t, r, n, a, s) {
  var o, c = t & Ql, d = t & Xl, u = t & Jl;
  if (o !== void 0)
    return o;
  if (!ft(e))
    return e;
  var h = ht(e);
  if (h) {
    if (o = gl(e), !c)
      return ea(e, o);
  } else {
    var y = _e(e), f = y == ia || y == ac;
    if (Hn(e))
      return el(e, c);
    if (y == oa || y == sa || f && !a) {
      if (o = d || f ? {} : Gl(e), !c)
        return d ? il(e, Xo(o, e)) : al(e, Yo(o, e));
    } else {
      if (!J[y])
        return a ? e : {};
      o = Vl(e, y, c);
    }
  }
  s || (s = new Qe());
  var v = s.get(e);
  if (v)
    return v;
  s.set(e, o), Zl(e) ? e.forEach(function($) {
    o.add(at($, t, r, $, e, s));
  }) : Yl(e) && e.forEach(function($, p) {
    o.set(p, at($, t, r, p, e, s));
  });
  var x = u ? d ? ll : ol : d ? pr : hr, E = h ? void 0 : x(e);
  return Qi(E || e, function($, p) {
    E && (p = $, $ = e[p]), qn(o, p, at($, t, r, p, e, s));
  }), o;
}
var Tc = 1, Ec = 4;
function bt(e) {
  return at(e, Tc | Ec);
}
var Yt, sn;
function Sc() {
  if (sn) return Yt;
  sn = 1;
  var e = Array.isArray, t = Object.keys, r = Object.prototype.hasOwnProperty, n = typeof Element < "u";
  function a(s, o) {
    if (s === o) return !0;
    if (s && o && typeof s == "object" && typeof o == "object") {
      var c = e(s), d = e(o), u, h, y;
      if (c && d) {
        if (h = s.length, h != o.length) return !1;
        for (u = h; u-- !== 0; )
          if (!a(s[u], o[u])) return !1;
        return !0;
      }
      if (c != d) return !1;
      var f = s instanceof Date, v = o instanceof Date;
      if (f != v) return !1;
      if (f && v) return s.getTime() == o.getTime();
      var x = s instanceof RegExp, E = o instanceof RegExp;
      if (x != E) return !1;
      if (x && E) return s.toString() == o.toString();
      var $ = t(s);
      if (h = $.length, h !== t(o).length)
        return !1;
      for (u = h; u-- !== 0; )
        if (!r.call(o, $[u])) return !1;
      if (n && s instanceof Element && o instanceof Element)
        return s === o;
      for (u = h; u-- !== 0; )
        if (y = $[u], !(y === "_owner" && s.$$typeof) && !a(s[y], o[y]))
          return !1;
      return !0;
    }
    return s !== s && o !== o;
  }
  return Yt = function(o, c) {
    try {
      return a(o, c);
    } catch (d) {
      if (d.message && d.message.match(/stack|recursion/i) || d.number === -2146828260)
        return console.warn("Warning: react-fast-compare does not handle circular references.", d.name, d.message), !1;
      throw d;
    }
  }, Yt;
}
var _c = Sc();
const Pe = /* @__PURE__ */ xn(_c);
var Nc = process.env.NODE_ENV === "production";
function We(e, t) {
  if (!Nc) {
    var r = "Warning: " + t;
    typeof console < "u" && console.warn(r);
    try {
      throw Error(r);
    } catch {
    }
  }
}
var $c = 4;
function on(e) {
  return at(e, $c);
}
function la(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var Ac = "[object Symbol]";
function gr(e) {
  return typeof e == "symbol" || Be(e) && ze(e) == Ac;
}
var Oc = "Expected a function";
function br(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Oc);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(a))
      return s.get(a);
    var o = e.apply(this, n);
    return r.cache = s.set(a, o) || s, o;
  };
  return r.cache = new (br.Cache || Ce)(), r;
}
br.Cache = Ce;
var Fc = 500;
function Cc(e) {
  var t = br(e, function(n) {
    return r.size === Fc && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Ic = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Rc = /\\(\\)?/g, Pc = Cc(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ic, function(r, n, a, s) {
    t.push(a ? s.replace(Rc, "$1") : n || r);
  }), t;
});
function Mc(e) {
  if (typeof e == "string" || gr(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var ln = Fe ? Fe.prototype : void 0, cn = ln ? ln.toString : void 0;
function ca(e) {
  if (typeof e == "string")
    return e;
  if (ht(e))
    return la(e, ca) + "";
  if (gr(e))
    return cn ? cn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Dc(e) {
  return e == null ? "" : ca(e);
}
function ua(e) {
  return ht(e) ? la(e, Mc) : gr(e) ? [e] : ea(Pc(Dc(e)));
}
var xt = { exports: {} }, Y = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var un;
function kc() {
  if (un) return Y;
  un = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, E = e ? Symbol.for("react.block") : 60121, $ = e ? Symbol.for("react.fundamental") : 60117, p = e ? Symbol.for("react.responder") : 60118, m = e ? Symbol.for("react.scope") : 60119;
  function T(l) {
    if (typeof l == "object" && l !== null) {
      var w = l.$$typeof;
      switch (w) {
        case t:
          switch (l = l.type, l) {
            case d:
            case u:
            case n:
            case s:
            case a:
            case y:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case c:
                case h:
                case x:
                case v:
                case o:
                  return l;
                default:
                  return w;
              }
          }
        case r:
          return w;
      }
    }
  }
  function _(l) {
    return T(l) === u;
  }
  return Y.AsyncMode = d, Y.ConcurrentMode = u, Y.ContextConsumer = c, Y.ContextProvider = o, Y.Element = t, Y.ForwardRef = h, Y.Fragment = n, Y.Lazy = x, Y.Memo = v, Y.Portal = r, Y.Profiler = s, Y.StrictMode = a, Y.Suspense = y, Y.isAsyncMode = function(l) {
    return _(l) || T(l) === d;
  }, Y.isConcurrentMode = _, Y.isContextConsumer = function(l) {
    return T(l) === c;
  }, Y.isContextProvider = function(l) {
    return T(l) === o;
  }, Y.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === t;
  }, Y.isForwardRef = function(l) {
    return T(l) === h;
  }, Y.isFragment = function(l) {
    return T(l) === n;
  }, Y.isLazy = function(l) {
    return T(l) === x;
  }, Y.isMemo = function(l) {
    return T(l) === v;
  }, Y.isPortal = function(l) {
    return T(l) === r;
  }, Y.isProfiler = function(l) {
    return T(l) === s;
  }, Y.isStrictMode = function(l) {
    return T(l) === a;
  }, Y.isSuspense = function(l) {
    return T(l) === y;
  }, Y.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === n || l === u || l === s || l === a || l === y || l === f || typeof l == "object" && l !== null && (l.$$typeof === x || l.$$typeof === v || l.$$typeof === o || l.$$typeof === c || l.$$typeof === h || l.$$typeof === $ || l.$$typeof === p || l.$$typeof === m || l.$$typeof === E);
  }, Y.typeOf = T, Y;
}
var H = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dn;
function Lc() {
  return dn || (dn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, E = e ? Symbol.for("react.block") : 60121, $ = e ? Symbol.for("react.fundamental") : 60117, p = e ? Symbol.for("react.responder") : 60118, m = e ? Symbol.for("react.scope") : 60119;
    function T(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === n || D === u || D === s || D === a || D === y || D === f || typeof D == "object" && D !== null && (D.$$typeof === x || D.$$typeof === v || D.$$typeof === o || D.$$typeof === c || D.$$typeof === h || D.$$typeof === $ || D.$$typeof === p || D.$$typeof === m || D.$$typeof === E);
    }
    function _(D) {
      if (typeof D == "object" && D !== null) {
        var Ge = D.$$typeof;
        switch (Ge) {
          case t:
            var qe = D.type;
            switch (qe) {
              case d:
              case u:
              case n:
              case s:
              case a:
              case y:
                return qe;
              default:
                var pt = qe && qe.$$typeof;
                switch (pt) {
                  case c:
                  case h:
                  case x:
                  case v:
                  case o:
                    return pt;
                  default:
                    return Ge;
                }
            }
          case r:
            return Ge;
        }
      }
    }
    var l = d, w = u, j = c, M = o, C = t, k = h, L = n, V = x, G = v, X = r, Z = s, z = a, Q = y, S = !1;
    function A(D) {
      return S || (S = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), b(D) || _(D) === d;
    }
    function b(D) {
      return _(D) === u;
    }
    function N(D) {
      return _(D) === c;
    }
    function O(D) {
      return _(D) === o;
    }
    function P(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function I(D) {
      return _(D) === h;
    }
    function U(D) {
      return _(D) === n;
    }
    function ne(D) {
      return _(D) === x;
    }
    function ce(D) {
      return _(D) === v;
    }
    function re(D) {
      return _(D) === r;
    }
    function pe(D) {
      return _(D) === s;
    }
    function we(D) {
      return _(D) === a;
    }
    function Ie(D) {
      return _(D) === y;
    }
    H.AsyncMode = l, H.ConcurrentMode = w, H.ContextConsumer = j, H.ContextProvider = M, H.Element = C, H.ForwardRef = k, H.Fragment = L, H.Lazy = V, H.Memo = G, H.Portal = X, H.Profiler = Z, H.StrictMode = z, H.Suspense = Q, H.isAsyncMode = A, H.isConcurrentMode = b, H.isContextConsumer = N, H.isContextProvider = O, H.isElement = P, H.isForwardRef = I, H.isFragment = U, H.isLazy = ne, H.isMemo = ce, H.isPortal = re, H.isProfiler = pe, H.isStrictMode = we, H.isSuspense = Ie, H.isValidElementType = T, H.typeOf = _;
  }()), H;
}
var fn;
function zc() {
  return fn || (fn = 1, process.env.NODE_ENV === "production" ? xt.exports = kc() : xt.exports = Lc()), xt.exports;
}
var Ht, hn;
function Bc() {
  if (hn) return Ht;
  hn = 1;
  var e = zc(), t = {
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
  function o(x) {
    return e.isMemo(x) ? a : s[x.$$typeof] || t;
  }
  var c = Object.defineProperty, d = Object.getOwnPropertyNames, u = Object.getOwnPropertySymbols, h = Object.getOwnPropertyDescriptor, y = Object.getPrototypeOf, f = Object.prototype;
  function v(x, E, $) {
    if (typeof E != "string") {
      if (f) {
        var p = y(E);
        p && p !== f && v(x, p, $);
      }
      var m = d(E);
      u && (m = m.concat(u(E)));
      for (var T = o(x), _ = o(E), l = 0; l < m.length; ++l) {
        var w = m[l];
        if (!r[w] && !($ && $[w]) && !(_ && _[w]) && !(T && T[w])) {
          var j = h(E, w);
          try {
            c(x, w, j);
          } catch {
          }
        }
      }
    }
    return x;
  }
  return Ht = v, Ht;
}
Bc();
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
function da(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, s;
  for (s = 0; s < n.length; s++)
    a = n[s], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var Pt = /* @__PURE__ */ wa(void 0);
Pt.displayName = "FormikContext";
Pt.Provider;
Pt.Consumer;
function Vc() {
  var e = Ea(Pt);
  return e || (process.env.NODE_ENV !== "production" ? We(!1, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.") : We()), e;
}
var be = function(t) {
  return typeof t == "function";
}, Mt = function(t) {
  return t !== null && typeof t == "object";
}, Uc = function(t) {
  return String(Math.floor(Number(t))) === t;
}, Wt = function(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}, Zt = function(t) {
  return Mt(t) && be(t.then);
};
function Gc(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function fe(e, t, r, n) {
  n === void 0 && (n = 0);
  for (var a = ua(t); e && n < a.length; )
    e = e[a[n++]];
  return n !== a.length && !e || e === void 0 ? r : e;
}
function De(e, t, r) {
  for (var n = on(e), a = n, s = 0, o = ua(t); s < o.length - 1; s++) {
    var c = o[s], d = fe(e, o.slice(0, s + 1));
    if (d && (Mt(d) || Array.isArray(d)))
      a = a[c] = on(d);
    else {
      var u = o[s + 1];
      a = a[c] = Uc(u) && Number(u) >= 0 ? [] : {};
    }
  }
  return (s === 0 ? e : a)[o[s]] === r ? e : (r === void 0 ? delete a[o[s]] : a[o[s]] = r, s === 0 && r === void 0 && delete n[o[s]], n);
}
function fa(e, t, r, n) {
  r === void 0 && (r = /* @__PURE__ */ new WeakMap()), n === void 0 && (n = {});
  for (var a = 0, s = Object.keys(e); a < s.length; a++) {
    var o = s[a], c = e[o];
    Mt(c) ? r.get(c) || (r.set(c, !0), n[o] = Array.isArray(c) ? [] : {}, fa(c, t, r, n[o])) : n[o] = t;
  }
  return n;
}
function qc(e, t) {
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
        touched: fa(e.values, !0),
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
var Re = {}, vt = {};
function Kc(e) {
  var t = e.validateOnChange, r = t === void 0 ? !0 : t, n = e.validateOnBlur, a = n === void 0 ? !0 : n, s = e.validateOnMount, o = s === void 0 ? !1 : s, c = e.isInitialValid, d = e.enableReinitialize, u = d === void 0 ? !1 : d, h = e.onSubmit, y = da(e, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]), f = ie({
    validateOnChange: r,
    validateOnBlur: a,
    validateOnMount: o,
    onSubmit: h
  }, y), v = xe(f.initialValues), x = xe(f.initialErrors || Re), E = xe(f.initialTouched || vt), $ = xe(f.initialStatus), p = xe(!1), m = xe({});
  process.env.NODE_ENV !== "production" && oe(function() {
    typeof c > "u" || (process.env.NODE_ENV !== "production" ? We(!1, "isInitialValid has been deprecated and will be removed in future versions of Formik. Please use initialErrors or validateOnMount instead.") : We());
  }, []), oe(function() {
    return p.current = !0, function() {
      p.current = !1;
    };
  }, []);
  var T = le(0), _ = T[1], l = xe({
    values: bt(f.initialValues),
    errors: bt(f.initialErrors) || Re,
    touched: bt(f.initialTouched) || vt,
    status: bt(f.initialStatus),
    isSubmitting: !1,
    isValidating: !1,
    submitCount: 0
  }), w = l.current, j = ae(function(g) {
    var F = l.current;
    l.current = qc(F, g), F !== l.current && _(function(R) {
      return R + 1;
    });
  }, []), M = ae(function(g, F) {
    return new Promise(function(R, B) {
      var q = f.validate(g, F);
      q == null ? R(Re) : Zt(q) ? q.then(function(K) {
        R(K || Re);
      }, function(K) {
        process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validate />", K), B(K);
      }) : R(q);
    });
  }, [f.validate]), C = ae(function(g, F) {
    var R = f.validationSchema, B = be(R) ? R(F) : R, q = F && B.validateAt ? B.validateAt(F, g) : Hc(g, B);
    return new Promise(function(K, se) {
      q.then(function() {
        K(Re);
      }, function(je) {
        je.name === "ValidationError" ? K(Yc(je)) : (process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validationSchema />", je), se(je));
      });
    });
  }, [f.validationSchema]), k = ae(function(g, F) {
    return new Promise(function(R) {
      return R(m.current[g].validate(F));
    });
  }, []), L = ae(function(g) {
    var F = Object.keys(m.current).filter(function(B) {
      return be(m.current[B].validate);
    }), R = F.length > 0 ? F.map(function(B) {
      return k(B, fe(g, B));
    }) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
    return Promise.all(R).then(function(B) {
      return B.reduce(function(q, K, se) {
        return K === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || K && (q = De(q, F[se], K)), q;
      }, {});
    });
  }, [k]), V = ae(function(g) {
    return Promise.all([L(g), f.validationSchema ? C(g) : {}, f.validate ? M(g) : {}]).then(function(F) {
      var R = F[0], B = F[1], q = F[2], K = rr.all([R, B, q], {
        arrayMerge: Wc
      });
      return K;
    });
  }, [f.validate, f.validationSchema, L, M, C]), G = ge(function(g) {
    return g === void 0 && (g = w.values), j({
      type: "SET_ISVALIDATING",
      payload: !0
    }), V(g).then(function(F) {
      return p.current && (j({
        type: "SET_ISVALIDATING",
        payload: !1
      }), j({
        type: "SET_ERRORS",
        payload: F
      })), F;
    });
  });
  oe(function() {
    o && p.current === !0 && Pe(v.current, f.initialValues) && G(v.current);
  }, [o, G]);
  var X = ae(function(g) {
    var F = g && g.values ? g.values : v.current, R = g && g.errors ? g.errors : x.current ? x.current : f.initialErrors || {}, B = g && g.touched ? g.touched : E.current ? E.current : f.initialTouched || {}, q = g && g.status ? g.status : $.current ? $.current : f.initialStatus;
    v.current = F, x.current = R, E.current = B, $.current = q;
    var K = function() {
      j({
        type: "RESET_FORM",
        payload: {
          isSubmitting: !!g && !!g.isSubmitting,
          errors: R,
          touched: B,
          status: q,
          values: F,
          isValidating: !!g && !!g.isValidating,
          submitCount: g && g.submitCount && typeof g.submitCount == "number" ? g.submitCount : 0
        }
      });
    };
    if (f.onReset) {
      var se = f.onReset(w.values, Ge);
      Zt(se) ? se.then(K) : K();
    } else
      K();
  }, [f.initialErrors, f.initialStatus, f.initialTouched, f.onReset]);
  oe(function() {
    p.current === !0 && !Pe(v.current, f.initialValues) && u && (v.current = f.initialValues, X(), o && G(v.current));
  }, [u, f.initialValues, X, o, G]), oe(function() {
    u && p.current === !0 && !Pe(x.current, f.initialErrors) && (x.current = f.initialErrors || Re, j({
      type: "SET_ERRORS",
      payload: f.initialErrors || Re
    }));
  }, [u, f.initialErrors]), oe(function() {
    u && p.current === !0 && !Pe(E.current, f.initialTouched) && (E.current = f.initialTouched || vt, j({
      type: "SET_TOUCHED",
      payload: f.initialTouched || vt
    }));
  }, [u, f.initialTouched]), oe(function() {
    u && p.current === !0 && !Pe($.current, f.initialStatus) && ($.current = f.initialStatus, j({
      type: "SET_STATUS",
      payload: f.initialStatus
    }));
  }, [u, f.initialStatus, f.initialTouched]);
  var Z = ge(function(g) {
    if (m.current[g] && be(m.current[g].validate)) {
      var F = fe(w.values, g), R = m.current[g].validate(F);
      return Zt(R) ? (j({
        type: "SET_ISVALIDATING",
        payload: !0
      }), R.then(function(B) {
        return B;
      }).then(function(B) {
        j({
          type: "SET_FIELD_ERROR",
          payload: {
            field: g,
            value: B
          }
        }), j({
          type: "SET_ISVALIDATING",
          payload: !1
        });
      })) : (j({
        type: "SET_FIELD_ERROR",
        payload: {
          field: g,
          value: R
        }
      }), Promise.resolve(R));
    } else if (f.validationSchema)
      return j({
        type: "SET_ISVALIDATING",
        payload: !0
      }), C(w.values, g).then(function(B) {
        return B;
      }).then(function(B) {
        j({
          type: "SET_FIELD_ERROR",
          payload: {
            field: g,
            value: fe(B, g)
          }
        }), j({
          type: "SET_ISVALIDATING",
          payload: !1
        });
      });
    return Promise.resolve();
  }), z = ae(function(g, F) {
    var R = F.validate;
    m.current[g] = {
      validate: R
    };
  }, []), Q = ae(function(g) {
    delete m.current[g];
  }, []), S = ge(function(g, F) {
    j({
      type: "SET_TOUCHED",
      payload: g
    });
    var R = F === void 0 ? a : F;
    return R ? G(w.values) : Promise.resolve();
  }), A = ae(function(g) {
    j({
      type: "SET_ERRORS",
      payload: g
    });
  }, []), b = ge(function(g, F) {
    var R = be(g) ? g(w.values) : g;
    j({
      type: "SET_VALUES",
      payload: R
    });
    var B = F === void 0 ? r : F;
    return B ? G(R) : Promise.resolve();
  }), N = ae(function(g, F) {
    j({
      type: "SET_FIELD_ERROR",
      payload: {
        field: g,
        value: F
      }
    });
  }, []), O = ge(function(g, F, R) {
    var B = be(F) ? F(fe(w.values, g)) : F;
    j({
      type: "SET_FIELD_VALUE",
      payload: {
        field: g,
        value: B
      }
    });
    var q = R === void 0 ? r : R;
    return q ? G(De(w.values, g, B)) : Promise.resolve();
  }), P = ae(function(g, F) {
    var R = F, B = g, q;
    if (!Wt(g)) {
      g.persist && g.persist();
      var K = g.target ? g.target : g.currentTarget, se = K.type, je = K.name, kt = K.id, Lt = K.value, ba = K.checked, xa = K.outerHTML, wr = K.options, va = K.multiple;
      R = F || je || kt, !R && process.env.NODE_ENV !== "production" && pn({
        htmlContent: xa,
        documentationAnchorLink: "handlechange-e-reactchangeeventany--void",
        handlerName: "handleChange"
      }), B = /number|range/.test(se) ? (q = parseFloat(Lt), isNaN(q) ? "" : q) : /checkbox/.test(se) ? Qc(fe(w.values, R), ba, Lt) : wr && va ? Zc(wr) : Lt;
    }
    R && O(R, B);
  }, [O, w.values]), I = ge(function(g) {
    if (Wt(g))
      return function(F) {
        return P(F, g);
      };
    P(g);
  }), U = ge(function(g, F, R) {
    F === void 0 && (F = !0), j({
      type: "SET_FIELD_TOUCHED",
      payload: {
        field: g,
        value: F
      }
    });
    var B = R === void 0 ? a : R;
    return B ? G(w.values) : Promise.resolve();
  }), ne = ae(function(g, F) {
    g.persist && g.persist();
    var R = g.target, B = R.name, q = R.id, K = R.outerHTML, se = F || B || q;
    !se && process.env.NODE_ENV !== "production" && pn({
      htmlContent: K,
      documentationAnchorLink: "handleblur-e-any--void",
      handlerName: "handleBlur"
    }), U(se, !0);
  }, [U]), ce = ge(function(g) {
    if (Wt(g))
      return function(F) {
        return ne(F, g);
      };
    ne(g);
  }), re = ae(function(g) {
    be(g) ? j({
      type: "SET_FORMIK_STATE",
      payload: g
    }) : j({
      type: "SET_FORMIK_STATE",
      payload: function() {
        return g;
      }
    });
  }, []), pe = ae(function(g) {
    j({
      type: "SET_STATUS",
      payload: g
    });
  }, []), we = ae(function(g) {
    j({
      type: "SET_ISSUBMITTING",
      payload: g
    });
  }, []), Ie = ge(function() {
    return j({
      type: "SUBMIT_ATTEMPT"
    }), G().then(function(g) {
      var F = g instanceof Error, R = !F && Object.keys(g).length === 0;
      if (R) {
        var B;
        try {
          if (B = qe(), B === void 0)
            return;
        } catch (q) {
          throw q;
        }
        return Promise.resolve(B).then(function(q) {
          return p.current && j({
            type: "SUBMIT_SUCCESS"
          }), q;
        }).catch(function(q) {
          if (p.current)
            throw j({
              type: "SUBMIT_FAILURE"
            }), q;
        });
      } else if (p.current && (j({
        type: "SUBMIT_FAILURE"
      }), F))
        throw g;
    });
  }), D = ge(function(g) {
    if (g && g.preventDefault && be(g.preventDefault) && g.preventDefault(), g && g.stopPropagation && be(g.stopPropagation) && g.stopPropagation(), process.env.NODE_ENV !== "production" && typeof document < "u") {
      var F = Gc();
      F !== null && F instanceof HTMLButtonElement && (F.attributes && F.attributes.getNamedItem("type") || (process.env.NODE_ENV !== "production" ? We(!1, 'You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type="submit"`. If this is not a submit button, please add `type="button"`.') : We()));
    }
    Ie().catch(function(R) {
      console.warn("Warning: An unhandled error was caught from submitForm()", R);
    });
  }), Ge = {
    resetForm: X,
    validateForm: G,
    validateField: Z,
    setErrors: A,
    setFieldError: N,
    setFieldTouched: U,
    setFieldValue: O,
    setStatus: pe,
    setSubmitting: we,
    setTouched: S,
    setValues: b,
    setFormikState: re,
    submitForm: Ie
  }, qe = ge(function() {
    return h(w.values, Ge);
  }), pt = ge(function(g) {
    g && g.preventDefault && be(g.preventDefault) && g.preventDefault(), g && g.stopPropagation && be(g.stopPropagation) && g.stopPropagation(), X();
  }), ha = ae(function(g) {
    return {
      value: fe(w.values, g),
      error: fe(w.errors, g),
      touched: !!fe(w.touched, g),
      initialValue: fe(v.current, g),
      initialTouched: !!fe(E.current, g),
      initialError: fe(x.current, g)
    };
  }, [w.errors, w.touched, w.values]), pa = ae(function(g) {
    return {
      setValue: function(R, B) {
        return O(g, R, B);
      },
      setTouched: function(R, B) {
        return U(g, R, B);
      },
      setError: function(R) {
        return N(g, R);
      }
    };
  }, [O, U, N]), ma = ae(function(g) {
    var F = Mt(g), R = F ? g.name : g, B = fe(w.values, R), q = {
      name: R,
      value: B,
      onChange: I,
      onBlur: ce
    };
    if (F) {
      var K = g.type, se = g.value, je = g.as, kt = g.multiple;
      K === "checkbox" ? se === void 0 ? q.checked = !!B : (q.checked = !!(Array.isArray(B) && ~B.indexOf(se)), q.value = se) : K === "radio" ? (q.checked = B === se, q.value = se) : je === "select" && kt && (q.value = q.value || [], q.multiple = !0);
    }
    return q;
  }, [ce, I, w.values]), Dt = _t(function() {
    return !Pe(v.current, w.values);
  }, [v.current, w.values]), ya = _t(function() {
    return typeof c < "u" ? Dt ? w.errors && Object.keys(w.errors).length === 0 : c !== !1 && be(c) ? c(f) : c : w.errors && Object.keys(w.errors).length === 0;
  }, [c, Dt, w.errors, f]), ga = ie({}, w, {
    initialValues: v.current,
    initialErrors: x.current,
    initialTouched: E.current,
    initialStatus: $.current,
    handleBlur: ce,
    handleChange: I,
    handleReset: pt,
    handleSubmit: D,
    resetForm: X,
    setErrors: A,
    setFormikState: re,
    setFieldTouched: U,
    setFieldValue: O,
    setFieldError: N,
    setStatus: pe,
    setSubmitting: we,
    setTouched: S,
    setValues: b,
    submitForm: Ie,
    validateForm: G,
    validateField: Z,
    isValid: ya,
    dirty: Dt,
    unregisterField: Q,
    registerField: z,
    getFieldProps: ma,
    getFieldMeta: ha,
    getFieldHelpers: pa,
    validateOnBlur: a,
    validateOnChange: r,
    validateOnMount: o
  });
  return ga;
}
function pn(e) {
  var t = e.htmlContent, r = e.documentationAnchorLink, n = e.handlerName;
  console.warn("Warning: Formik called `" + n + "`, but you forgot to pass an `id` or `name` attribute to your input:\n    " + t + `
    Formik cannot determine which value to update. For more info see https://formik.org/docs/api/formik#` + r + `
  `);
}
function Yc(e) {
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
      var o = s;
      fe(t, o.path) || (t = De(t, o.path, o.message));
    }
  }
  return t;
}
function Hc(e, t, r, n) {
  r === void 0 && (r = !1);
  var a = or(e);
  return t[r ? "validateSync" : "validate"](a, {
    abortEarly: !1,
    context: a
  });
}
function or(e) {
  var t = Array.isArray(e) ? [] : {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      var n = String(r);
      Array.isArray(e[n]) === !0 ? t[n] = e[n].map(function(a) {
        return Array.isArray(a) === !0 || Dr(a) ? or(a) : a !== "" ? a : void 0;
      }) : Dr(e[n]) ? t[n] = or(e[n]) : t[n] = e[n] !== "" ? e[n] : void 0;
    }
  return t;
}
function Wc(e, t, r) {
  var n = e.slice();
  return t.forEach(function(s, o) {
    if (typeof n[o] > "u") {
      var c = r.clone !== !1, d = c && r.isMergeableObject(s);
      n[o] = d ? rr(Array.isArray(s) ? [] : {}, s, r) : s;
    } else r.isMergeableObject(s) ? n[o] = rr(e[o], s, r) : e.indexOf(s) === -1 && n.push(s);
  }), n;
}
function Zc(e) {
  return Array.from(e).filter(function(t) {
    return t.selected;
  }).map(function(t) {
    return t.value;
  });
}
function Qc(e, t, r) {
  if (typeof e == "boolean")
    return !!t;
  var n = [], a = !1, s = -1;
  if (Array.isArray(e))
    n = e, s = e.indexOf(r), a = s >= 0;
  else if (!r || r == "true" || r == "false")
    return !!t;
  return t && r && !a ? n.concat(r) : a ? n.slice(0, s).concat(n.slice(s + 1)) : n;
}
var Xc = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? bn : oe;
function ge(e) {
  var t = xe(e);
  return Xc(function() {
    t.current = e;
  }), ae(function() {
    for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return t.current.apply(void 0, n);
  }, []);
}
var Jc = /* @__PURE__ */ ja(function(e, t) {
  var r = e.action, n = da(e, ["action"]), a = r ?? "#", s = Vc(), o = s.handleReset, c = s.handleSubmit;
  return Ta("form", ie({
    onSubmit: c,
    ref: t,
    onReset: o,
    action: a
  }, n));
});
Jc.displayName = "Form";
function wt({
  anchorRef: e,
  open: t,
  children: r,
  offset: n = 4
}) {
  const [a, s] = le({});
  return bn(() => {
    if (!t || !e.current) return;
    const o = e.current.getBoundingClientRect();
    s({
      position: "fixed",
      top: o.bottom + n,
      left: o.left,
      width: "200px",
      zIndex: 1e3
    });
  }, [t, e, n]), t ? Sa(
    /* @__PURE__ */ i.jsx("div", { style: a, children: r }),
    document.body
  ) : null;
}
function eu({
  field: e,
  formik: t,
  methods: r = {},
  sqlOpsUrls: n,
  refid: a,
  optionsOverride: s,
  setFieldOptions: o,
  module_refid: c
}) {
  const [d, u] = le(!1), [h, y] = le(
    s ?? e.options ?? {}
  ), [f, v] = le(""), [x, E] = le(0), $ = xe(null), [p, m] = le(!1), T = ee.useRef(f), _ = xe(null);
  ee.useEffect(() => {
    T.current = f;
  }, [f]), oe(() => {
    s && Object.keys(s).length !== 0 && y(s);
  }, [s]), oe(() => {
    if (!p) return;
    const z = (Q) => {
      const S = Q.target;
      _.current?.contains(S) || $.current?.contains(S) || (m(!1), v(""));
    };
    return document.addEventListener("mousedown", z), () => {
      document.removeEventListener("mousedown", z);
    };
  }, [p]);
  const l = e.name;
  ee.useEffect(() => {
    let z = !0;
    return (async () => {
      let S = e.valueKey ?? "value", A = e.labelKey ?? "title";
      if (e?.options) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const I = Object.values(e.options);
          if (I.length && typeof I[0] == "string") {
            y(e.options);
            return;
          }
        }
        const O = (Array.isArray(e.options) ? e.options : [e.options]).map(me), P = ve(
          S,
          A,
          O,
          e.groupKey
          // auto-uses `category` if present
        );
        y(P);
        return;
      }
      const b = e?.source ?? {};
      if (e.type === "dataMethod") {
        const N = e.method, O = N ? r[N] : void 0;
        if (O)
          try {
            const P = await Promise.resolve(O()), I = Array.isArray(P?.data?.data) ? P.data.data : Array.isArray(P?.data) ? P.data : P, U = Array.isArray(I) ? I.map(me) : [], ne = ve(S, A, U, e.groupKey);
            z && y(ne);
          } catch (P) {
            console.error("Method execution failed:", P), z && y({});
          }
        else
          z && y({});
      }
      if (b.type === "api" && b.url)
        try {
          const N = await W({
            method: b.method || "GET",
            url: b.url,
            data: b.body ?? {},
            params: b.params ?? {},
            headers: b.headers ?? {}
          }), O = Array.isArray(N?.data?.data) ? N.data.data : Array.isArray(N?.data) ? N.data : N, P = Array.isArray(O) ? O.map(me) : [], I = ve(S, A, P, e.groupKey);
          z && y(I);
        } catch (N) {
          console.error("API execution failed:", N), z && y({});
        }
      if (e.table || e.type === "dataSelector" || e.queryid) {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let N;
          if (e.type === "dataSelector")
            N = {
              table: "do_lists",
              cols: "title,value",
              where: {
                groupid: e.groupid ?? ""
              }
            };
          else if (!e.queryid) {
            if (!e.table || !e.columns) {
              console.error("Invalid SQL field config", e);
              return;
            }
            N = {
              table: e.table,
              cols: e.columns,
              where: e.where ? a ? he(e.where, { refid: a }) : e.where : void 0
            };
          }
          const O = await He(n, N, e?.queryid, void 0, c), P = Array.isArray(O?.data?.data) ? O.data.data : Array.isArray(O?.data) ? O.data : O, I = Array.isArray(P) ? P.map(me) : [], U = ve(S, A, I, e.groupKey);
          z && y(U);
        } catch (N) {
          console.error("API fetch failed:", N);
        }
      }
    })(), () => {
      z = !1;
    };
  }, [
    e.options,
    e.source,
    e.table,
    e.columns,
    e.where,
    a
  ]);
  const w = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, j = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, M = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, C = (z) => z.icon ? /* @__PURE__ */ i.jsx("i", { className: z.icon }) : null, k = _t(
    () => Ts(h),
    [h]
  ), L = k.length, V = _t(() => e.search || !f ? k : k.filter(
    ([, z]) => z.toLowerCase().includes(f.toLowerCase())
  ), [e.search, f, k]), G = (z, Q) => {
    if (p === !0)
      if (z.key === "ArrowDown")
        z.preventDefault(), E(
          (S) => S + 1 < V.length ? S + 1 : 0
        );
      else if (z.key === "ArrowUp")
        z.preventDefault(), E(
          (S) => S - 1 >= 0 ? S - 1 : V.length - 1
        );
      else if (z.key === "Enter") {
        z.preventDefault();
        const [S] = V[x] || [];
        S && t.setFieldValue(e.name, Q ? S : [...t.values[e.name], S]);
      } else z.key === "Escape" && (v(""), m(!1));
  };
  oe(() => {
    $.current?.querySelector(
      `[data-index="${x}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [x]), oe(() => {
    x >= V.length && E(0);
  }, [V, x]), oe(() => {
    const z = e.autocomplete, Q = e.ajaxchain;
    if (!z && !Q) return;
    const S = t.values[e.name];
    if (!S) return;
    const A = Array.isArray(Q) ? Q : Q ? [Q] : [];
    (async () => {
      try {
        if (ws(z)) {
          const N = z.src;
          if (!N || !n) return;
          const O = he(N.where ?? {}, {
            refid: S
          }), P = {
            ...N,
            table: N.table,
            cols: N.columns,
            where: O
          }, { data: I } = await He(n, P, e?.queryid, void 0, c), U = Array.isArray(I?.data) ? I.data[0] : I?.data;
          U && z.target.split(",").map((ne) => ne.trim()).forEach((ne) => {
            U[ne] !== void 0 && t.setFieldValue(ne, U[ne]);
          });
        }
        for (const N of A) {
          const O = N.src;
          if (!N || typeof N != "object" || !O || typeof O != "object" || !n) continue;
          let P;
          if (!O.queryid) {
            if (!O.table || !O.columns)
              throw new Error("SQL query requires field.table");
            const we = he(O?.where ?? {}, {
              refid: S
            });
            P = {
              ...O,
              table: O.table,
              cols: O.columns,
              where: we
            };
          }
          const { data: I } = await He(n, P, e?.queryid, S, c);
          let U = e.valueKey ?? "value", ne = e.labelKey ?? "title";
          const ce = Array.isArray(I?.data?.data) ? I.data.data : Array.isArray(I?.data) ? I.data : I, re = Array.isArray(ce) ? ce.map(me) : [], pe = ve(
            U,
            ne,
            re,
            e.groupKey
          );
          o?.(N.target, pe);
        }
      } catch (N) {
        console.error("Autocomplete / AjaxChain fetch failed", N);
      }
    })();
  }, [t.values[e.name]]), ee.useEffect(() => {
    if (!e.search || !f.trim() || !e.table || !n) return;
    const z = js(e.columns ?? ""), Q = new AbortController(), S = setTimeout(async () => {
      try {
        let A;
        if (!e.queryid) {
          if (!e.table || !e.cols)
            throw new Error("SQL query requires field.table");
          const ce = a ? he(e.where ?? {}, {
            refid: a
          }) : e.where;
          A = {
            ...e,
            table: e.table,
            cols: e.columns || e.cols,
            where: ce
          };
        }
        let b = {};
        Array.isArray(z) && z.forEach((ce) => {
          b[ce] = [f, "LIKE"];
        });
        const { data: N } = await He(n, A, e?.queryid, void 0, c, b);
        let O = e.valueKey ?? "value", P = e.labelKey ?? "title";
        const I = Array.isArray(N?.data?.data) ? N.data.data : Array.isArray(N?.data) ? N.data : N, U = Array.isArray(I) ? I.map(me) : [], ne = ve(
          O,
          P,
          U,
          e.groupKey
        );
        y(ne);
      } catch (A) {
        if (W.isCancel(A)) return;
        console.error("Search fetch failed", A);
      }
    }, 500);
    return () => {
      clearTimeout(S), Q.abort();
    };
  }, [f, a]);
  const X = async (z) => {
    if (z.length === 0) {
      console.error("No file");
      return;
    }
    if (!n) return;
    const Q = n?.baseURL + n?.uploadURL;
    if (!Q) {
      console.error("No Upload URL ");
      return;
    }
    const S = e.multiple === !0;
    try {
      const A = await Promise.all(
        Array.from(z).map(async (b) => {
          const N = new FormData();
          return N.append("file", b), (await W({
            method: "POST",
            url: Q,
            data: N,
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${n?.accessToken}`
            }
          })).data;
        })
      );
      t.setFieldValue(
        l,
        S ? A.map((b) => b.path) : A[0]?.path
      );
    } catch (A) {
      console.error("File upload failed", A), t.setFieldError(l, "File upload failed");
    }
  }, Z = async (z, Q, S) => {
    const A = Q[z];
    if (!A) return;
    const b = r?.[A];
    if (typeof b != "function") {
      console.error(`Method "${String(A)}" not found`);
      return;
    }
    try {
      await Promise.resolve(b(S));
    } catch (N) {
      console.error(`Method "${String(A)}" failed`, N);
    }
  };
  switch (e.type) {
    case "autocomplete": {
      const S = t.values[l] ?? "", A = f !== "" ? f : Rr(h, S) ?? String(S ?? ""), b = (O) => {
        const P = O.target.value;
        v(P), E(0), P.trim() ? m(!0) : (m(!1), t.setFieldValue(l, ""));
      }, N = (O) => {
        t.setFieldValue(l, O), v(""), m(!1), Z("onChange", e, `${l}-${O}`);
      };
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsx("div", { ref: _, children: /* @__PURE__ */ i.jsx(
          "input",
          {
            className: `${w} ${j}`,
            value: A,
            placeholder: e.placeholder || "Type to search...",
            onChange: b,
            onFocus: () => {
              const O = String(t.values[l] ?? "");
              v(O);
            },
            onBlur: () => {
              setTimeout(() => m(!1), 150);
            },
            onKeyDown: (O) => {
              if (O.key === "Enter") {
                if (O.preventDefault(), V[x]) {
                  const [P] = V[x];
                  t.setFieldValue(l, P);
                } else f.trim() && t.setFieldValue(l, f.trim());
                m(!1);
                return;
              }
              G(O, !0);
            },
            disabled: e.disabled
          }
        ) }),
        /* @__PURE__ */ i.jsx(wt, { anchorRef: _, open: p, children: /* @__PURE__ */ i.jsx(
          "div",
          {
            ref: $,
            className: "bg-white border rounded shadow max-h-52 overflow-y-auto",
            children: V.length > 0 ? V.map(([O, P], I) => /* @__PURE__ */ i.jsx(
              "div",
              {
                id: `${l}-${O}`,
                "data-index": I,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${x === I ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => N(O),
                children: P
              },
              O
            )) : /* @__PURE__ */ i.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `No matches press enter to add "${A}" ` })
          }
        ) }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[l]) })
      ] });
    }
    case "dataSelector":
    case "dataSelectorFromTable":
    case "dataSelectorFromUniques":
    case "dataMethod": {
      if (e.multiple === !0) {
        const S = t.values[l] ?? [];
        return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsxs("label", { className: M, children: [
            e.label,
            e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ i.jsxs(
            "div",
            {
              ref: _,
              tabIndex: 0,
              className: "cursor-pointer select-none border border-gray-300 rounded-lg px-4 py-2.5 bg-white flex justify-between items-center",
              onClick: () => {
                m((A) => !A), E(0);
              },
              onKeyDown: (A) => G(A, !1),
              onBlur: () => {
                e.multiple || setTimeout(() => {
                  m(!1), v("");
                }, 150);
              },
              children: [
                /* @__PURE__ */ i.jsx("span", { className: "text-sm text-gray-700 truncate", children: S.length > 0 ? S.join(", ") : `Select ${e.label}` }),
                /* @__PURE__ */ i.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
              ]
            }
          ),
          /* @__PURE__ */ i.jsx(wt, { anchorRef: _, open: p, children: /* @__PURE__ */ i.jsxs(
            "div",
            {
              ref: $,
              className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
              children: [
                e.search && /* @__PURE__ */ i.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "text",
                    value: f,
                    onChange: (A) => {
                      v(A.target.value), E(0);
                    },
                    placeholder: "Search...",
                    className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                  }
                ) }),
                V.length > 0 ? V.map(([A, b], N) => /* @__PURE__ */ i.jsxs(
                  "label",
                  {
                    "data-index": N,
                    className: `flex items-center gap-x-2 px-2 py-1 rounded cursor-pointer text-sm
                    ${S.includes(A) ? "bg-indigo-50 text-indigo-600 font-medium" : x === N ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: [
                      /* @__PURE__ */ i.jsx(
                        "input",
                        {
                          id: `${l}-${A}`,
                          type: "checkbox",
                          checked: S.includes(A),
                          onChange: (O) => {
                            const P = O.target.checked ? [...S, A] : S.filter((I) => I !== A);
                            t.setFieldValue(l, P), Z("onChange", e, `${l}-${A}`);
                          },
                          className: "h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        }
                      ),
                      b
                    ]
                  },
                  A
                )) : /* @__PURE__ */ i.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ]
            }
          ) }),
          t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[l]) })
        ] });
      }
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs(
          "div",
          {
            ref: _,
            tabIndex: 0,
            className: "cursor-pointer select-none border border-gray-300 rounded-lg px-4 py-2.5 bg-white flex justify-between items-center",
            onClick: () => {
              m((S) => !S), E(0);
            },
            onKeyDown: (S) => G(S, !0),
            onBlur: () => {
              setTimeout(() => {
                m(!1), v("");
              }, 150);
            },
            children: [
              /* @__PURE__ */ i.jsx("span", { className: "text-sm text-gray-700 truncate", children: t.values[l] ? Rr(h, t.values[l]) ?? "Select option" : `Select ${e.label}` }),
              /* @__PURE__ */ i.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
            ]
          }
        ),
        /* @__PURE__ */ i.jsx(wt, { anchorRef: _, open: p, children: /* @__PURE__ */ i.jsxs(
          "div",
          {
            ref: $,
            className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
            children: [
              e.search && /* @__PURE__ */ i.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "text",
                  value: f,
                  onChange: (S) => {
                    v(S.target.value), E(0);
                  },
                  onKeyDown: (S) => G(S, !0),
                  placeholder: "Search...",
                  className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                }
              ) }),
              V.length > 0 && /* @__PURE__ */ i.jsx(
                "div",
                {
                  onMouseDown: (S) => {
                    S.preventDefault(), t.setFieldValue(l, ""), m(!1), v("");
                  },
                  className: "px-2 py-1 text-sm cursor-pointer hover:bg-gray-50",
                  children: "Clear selection"
                }
              ),
              V.length > 0 ? V.map(([S, A], b) => /* @__PURE__ */ i.jsx(
                "div",
                {
                  id: `${l}-${S}`,
                  "data-index": b,
                  onMouseDown: () => {
                    t.setFieldValue(l, S), m(!1), v(""), E(0), Z("onChange", e, `${l}-${S}`);
                  },
                  className: `px-2 py-1 rounded cursor-pointer text-sm
                  ${t.values[l] === S ? "bg-indigo-50 text-indigo-600 font-medium" : x === b ? "bg-gray-100" : "hover:bg-gray-50"}`,
                  children: A
                },
                S
              )) : /* @__PURE__ */ i.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
            ]
          }
        ) }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[l]) })
      ] });
    }
    case "textarea":
      return /* @__PURE__ */ i.jsx(i.Fragment, { children: /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsx(
            "textarea",
            {
              id: l,
              className: `${w} ${j} min-h-[120px] resize-none`,
              onFocus: () => u(!0),
              name: l,
              value: t.values[l],
              onBlur: t.handleBlur,
              onChange: (S) => {
                t.setFieldValue(
                  l,
                  S.target.value
                ), Z("onChange", e, `${l}`);
              },
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ i.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${d ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[l]) })
      ] }) });
    case "select":
      if (e.multiple === !0) {
        const S = t.values[l] ?? [];
        return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsxs("label", { className: M, children: [
            e.label,
            e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ i.jsxs(
            "div",
            {
              ref: _,
              tabIndex: 0,
              className: "cursor-pointer select-none border border-gray-300 rounded-lg px-4 py-2.5 bg-white flex justify-between items-center",
              onClick: () => {
                m((A) => !A), E(0);
              },
              onKeyDown: (A) => G(A, !1),
              onBlur: () => {
                e.multiple || setTimeout(() => {
                  m(!1), v("");
                }, 150);
              },
              children: [
                /* @__PURE__ */ i.jsx("span", { className: "text-sm text-gray-700 truncate", children: S.length > 0 ? S.join(", ") : `Select ${e.label}` }),
                /* @__PURE__ */ i.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
              ]
            }
          ),
          /* @__PURE__ */ i.jsx(wt, { anchorRef: _, open: p, children: /* @__PURE__ */ i.jsxs(
            "div",
            {
              ref: $,
              className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
              children: [
                e.search && /* @__PURE__ */ i.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "text",
                    value: f,
                    onChange: (A) => {
                      v(A.target.value), E(0);
                    },
                    placeholder: "Search...",
                    className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                  }
                ) }),
                V.length > 0 ? V.map(([A, b], N) => /* @__PURE__ */ i.jsxs(
                  "label",
                  {
                    "data-index": N,
                    className: `flex items-center gap-x-2 px-2 py-1 rounded cursor-pointer text-sm
                    ${S.includes(A) ? "bg-indigo-50 text-indigo-600 font-medium" : x === N ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: [
                      /* @__PURE__ */ i.jsx(
                        "input",
                        {
                          id: `${l}-${A}`,
                          type: "checkbox",
                          checked: S.includes(A),
                          onChange: (O) => {
                            const P = O.target.checked ? [...S, A] : S.filter((I) => I !== A);
                            t.setFieldValue(l, P), Z("onChange", e, `${l}-${A}`);
                          },
                          className: "h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        }
                      ),
                      b
                    ]
                  },
                  A
                )) : /* @__PURE__ */ i.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ]
            }
          ) }),
          t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[l]) })
        ] });
      }
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsxs(
            "select",
            {
              className: `${w} ${j} appearance-none cursor-pointer pr-12`,
              onFocus: () => u(!0),
              name: l,
              id: l,
              value: t.values[l],
              onBlur: t.handleBlur,
              onChange: (S) => {
                t.setFieldValue(
                  l,
                  S.target.value === "" ? "" : S.target.value
                ), Z("onChange", e, `${l}`);
              },
              disabled: e.disabled,
              children: [
                /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: e.placeholder || "Please select an option" }),
                !tr(h) && Object.entries(h).map(([S, A]) => /* @__PURE__ */ i.jsx("option", { value: S, className: "py-2", children: A }, S)),
                tr(h) && Object.entries(h).map(([S, A]) => /* @__PURE__ */ i.jsx("optgroup", { label: S, children: Object.entries(A).map(([b, N]) => /* @__PURE__ */ i.jsx("option", { value: b, children: N }, b)) }, S))
              ]
            }
          ),
          /* @__PURE__ */ i.jsx("div", { className: "absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none", children: /* @__PURE__ */ i.jsx(
            "svg",
            {
              className: "w-5 h-5 transition-colors duration-300 text-gray-400",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
            }
          ) })
        ] }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[l]) })
      ] });
    case "radioList":
    case "radio":
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: `flex ${L > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(h || {}).map(([S, A]) => /* @__PURE__ */ i.jsxs(
          "label",
          {
            htmlFor: `${l}-${S}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  id: `${l}-${S}`,
                  type: "radio",
                  name: l,
                  checked: t.values[l] === S,
                  value: S,
                  onChange: (b) => {
                    t.setFieldValue(
                      l,
                      b.target.value === "" ? "" : b.target.value
                    ), Z("onChange", e, `${l}-${S}`);
                  },
                  onBlur: t.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              A
            ]
          },
          S
        )) }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[l]) })
      ] });
    case "checkbox": {
      const S = t.values[l];
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(h || {}).map(([A, b]) => /* @__PURE__ */ i.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  id: `${l}-${A}`,
                  type: "checkbox",
                  checked: S.includes(A),
                  onChange: (N) => {
                    const O = N.target.checked ? [...S, A] : S.filter((P) => P !== A);
                    t.setFieldValue(l, O), Z("onChange", e, `${l}-${A}`);
                  },
                  onBlur: t.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              b
            ]
          },
          A
        )) }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[l]) })
      ] });
    }
    case "tags": {
      const S = t.values[l], A = f.trim(), b = Array.isArray(h) ? h : Object.entries(h || {}).map(([I, U]) => ({ value: I, label: U })), N = (I) => {
        I && !S.includes(I) && (t.setFieldValue(l, [...S, I]), v(""));
      }, O = (I) => {
        t.setFieldValue(
          l,
          S.filter((U) => U !== I)
        );
      }, P = (I) => b.find((U) => U.value === I)?.label ?? I;
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs(
          "div",
          {
            className: `${w} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !e.disabled && document.getElementById(`${l}-input`)?.focus(),
            children: [
              S.map((I) => /* @__PURE__ */ i.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ i.jsx("span", { className: "text-indigo-700", children: P(I) }),
                    /* @__PURE__ */ i.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (U) => {
                          U.stopPropagation(), e.disabled || O(I);
                        },
                        onMouseDown: (U) => U.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                I
              )),
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  id: `${l}-input`,
                  type: "text",
                  value: f,
                  onChange: (I) => v(I.target.value),
                  onKeyDown: (I) => {
                    (I.key === "Enter" || I.key === ",") && (I.preventDefault(), N(A));
                  },
                  placeholder: S.length === 0 ? e.placeholder || "Type and press Enter" : "",
                  className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                  disabled: e.disabled
                }
              )
            ]
          }
        ),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[l]) })
      ] });
    }
    case "attachment":
    case "photo":
    case "avatar":
    case "file":
      const z = e.multiple === !0, Q = Array.isArray(t.values[l]) ? t.values[l] : t.values[l] ? [t.values[l]] : [];
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ i.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: C(e) }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              id: l,
              type: "file",
              className: `${w} ${j} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => u(!0),
              name: l,
              multiple: z,
              onChange: (S) => {
                const A = S.currentTarget.files;
                A && X(A), Z("onChange", e, `${l}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ i.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${d ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        Q.map((S) => {
          const A = S?.split("/").pop();
          return A ? /* @__PURE__ */ i.jsx("div", { className: "mt-1", children: /* @__PURE__ */ i.jsx("span", { className: "text-sm", children: A }) }, S) : null;
        }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[l]) })
      ] });
    case "json":
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsx(
            "textarea",
            {
              id: l,
              name: l,
              value: t.values[l],
              onChange: (S) => {
                t.setFieldValue(
                  l,
                  S.target.value
                ), Z("onChange", e, `${l}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: e.disabled,
              className: `${w} ${j} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${d ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[l]) })
      ] });
    case "date":
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ i.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: C(e) }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              id: l,
              type: "date",
              name: l,
              min: e.min,
              max: e.max,
              value: t.values[l],
              onChange: (S) => {
                t.setFieldValue(
                  l,
                  S.target.value
                ), Z("onChange", e, `${l}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled,
              className: `${w} ${j} ${e.icon ? "pl-9" : ""}`
            }
          ),
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${d ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[l]) })
      ] });
    case "number":
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ i.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: C(e) }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              id: l,
              type: e.type || "text",
              className: `${w} ${j} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => u(!0),
              name: l,
              value: t.values[l],
              onBlur: t.handleBlur,
              onChange: (S) => {
                t.setFieldValue(
                  l,
                  S.target.value
                ), Z("onChange", e, `${l}`);
              },
              step: e.step,
              placeholder: e.placeholder,
              disabled: e.disabled,
              min: e.min,
              max: e.max
            }
          ),
          /* @__PURE__ */ i.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${d ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[l]) })
      ] });
    default:
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ i.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: C(e) }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              id: l,
              type: e.type || "text",
              className: `${w} ${j} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => u(!0),
              name: l,
              value: t.values[l],
              onBlur: t.handleBlur,
              onChange: (S) => {
                t.setFieldValue(
                  l,
                  S.target.value
                ), Z("onChange", e, `${l}`);
              },
              placeholder: e.placeholder,
              disabled: e.disabled,
              step: e.step,
              minLength: e.minlength,
              maxLength: e.maxlength
            }
          ),
          /* @__PURE__ */ i.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${d ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[l]) })
      ] });
  }
}
function tu({
  title: e,
  fields: t,
  data: r,
  onSubmit: n = (u) => {
  },
  onCancel: a = () => {
  },
  methods: s = {},
  sqlOpsUrls: o,
  refid: c,
  module_refid: d
}) {
  const u = bs(t, o?.operation), [h, y] = ee.useState({}), f = (p, m) => {
    y((T) => ({
      ...T,
      [p]: m
    }));
  }, { initialValues: v, validationSchema: x } = ee.useMemo(() => {
    const p = {}, m = {};
    return u.forEach((T) => {
      vs([T], p, m, r);
    }), {
      initialValues: p,
      validationSchema: m
    };
  }, [u, r]), E = Kc({
    initialValues: v,
    enableReinitialize: !0,
    validationSchema: In().shape(x),
    onSubmit: (p) => {
      n(p), E.resetForm();
    }
  });
  function $(p) {
    p.preventDefault(), E.resetForm();
  }
  return /* @__PURE__ */ i.jsx("div", { className: "relative z-10 max-w-full ", children: /* @__PURE__ */ i.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ i.jsxs("form", { onSubmit: E.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "grid grid-flow-col auto-cols-max gap-4  overflow-x-auto", children: [
      u.map((p, m) => xs(p.hidden) || p.type === "geolocation" || p.vmode === "edit" && o?.operation === "create" ? null : /* @__PURE__ */ i.jsx(
        "div",
        {
          children: /* @__PURE__ */ i.jsx(
            eu,
            {
              refid: c,
              module_refid: d,
              sqlOpsUrls: o,
              field: p,
              formik: E,
              methods: s,
              setFieldOptions: f,
              ...h[p.name] ? { optionsOverride: h[p.name] } : {}
            }
          )
        },
        p?.name ?? `field-${m}`
      )),
      /* @__PURE__ */ i.jsxs("div", { className: "", children: [
        /* @__PURE__ */ i.jsx("div", { children: "  " }),
        /* @__PURE__ */ i.jsx("button", { onClick: $, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Reset" }),
        Object.keys(E.errors).length > 0 && /* @__PURE__ */ i.jsx("div", { children: "  " })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "", children: [
        /* @__PURE__ */ i.jsx("div", { children: "  " }),
        /* @__PURE__ */ i.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" }),
        Object.keys(E.errors).length > 0 && /* @__PURE__ */ i.jsx("div", { children: "  " })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "mt-8 flex justify-between space-x-3", children: /* @__PURE__ */ i.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }) })
  ] }) }) });
}
function ru({
  formJson: e,
  methods: t = {},
  userid: r = null,
  onCancel: n = () => {
  },
  components: a = {},
  callback: s = () => {
  },
  initialvalues: o = {},
  setEditData: c,
  module_refid: d
}) {
  const u = e.endPoints, h = e?.source?.refid, [y, f] = ee.useState(o), v = ee.useMemo(() => ys(e.fields), [e.fields]);
  ee.useEffect(() => {
    f(o ?? {});
  }, [o]);
  const x = ee.useCallback(
    (p) => {
      p && Object.keys(p).length > 0 && f(p);
    },
    []
  );
  ee.useEffect(() => {
    let p = !0;
    return (async () => {
      const T = e?.source ?? {};
      if (T?.type) {
        if (T.type === "method") {
          const _ = T.method, l = _ ? t[_] : void 0;
          if (l)
            try {
              const w = await Promise.resolve(l());
              p && x(w);
            } catch (w) {
              console.error("Method execution failed:", w);
            }
        }
        if (T.type === "api" && u?.operation !== "create")
          try {
            const _ = await W({
              method: T.method || "GET",
              url: T.url ?? "",
              data: T.body ?? {},
              params: T.params ?? {},
              headers: T.headers ?? {}
            });
            p && x(_.data);
          } catch (_) {
            console.error("API fetch failed:", _);
          }
        if (T.type === "sql" && T.refid && T.refid !== "0" && u?.operation !== "create" || u?.operation !== "create" && T.dbopsid) {
          if (!u) {
            console.error("SQL source requires formJson.endPoints but it is missing");
            return;
          }
          try {
            const _ = await As.fetch(u, {
              source: {
                ...T,
                table: T.table,
                columns: T.columns,
                where: he(T.where, {
                  refid: h
                })
              },
              fields: At(e.fields, u.operation)
            }, T?.dbopsid, d);
            p && x(_);
          } catch (_) {
            console.error("API fetch failed:", _);
          }
        }
      }
    })(), () => {
      p = !1;
    };
  }, [
    r,
    u,
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.url || "",
    JSON.stringify(e?.source?.params ?? {}),
    JSON.stringify(e?.source?.body ?? {}),
    JSON.stringify(e?.source?.headers ?? {})
  ]);
  const E = async (p) => {
    const m = e?.source ?? {};
    let T = null;
    if (v.length > 0)
      try {
        T = await gs();
      } catch (l) {
        console.log("catch fetchGeolocation", l), T = null;
      }
    const _ = {
      ...p,
      ...Object.fromEntries(
        v.map((l) => [l, T])
      )
    };
    if (m.type === "method") {
      const l = m.method, w = l ? t[l] : void 0;
      if (w)
        try {
          const j = await Promise.resolve(w(_));
          c?.(null), s?.(j);
        } catch (j) {
          s?.(j), console.error("Method execution failed:", j);
        }
    }
    if (m.type === "api") {
      if (!u) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const l = await W({
          method: m.method || "POST",
          url: u.baseURL + m.endpoint,
          data: _ ?? {},
          headers: {
            Authorization: `Bearer ${u?.accessToken}`
          }
        });
        c?.(null), s?.(l);
      } catch (l) {
        s?.(l), console.error("API fetch failed:", l);
      }
    }
    if (m.type === "sql") {
      const l = e.endPoints;
      if (!l) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let w = !1, j;
        m?.dbopsid && (w = !0, j = m?.dbopsid);
        const M = await W({
          method: "GET",
          url: l.baseURL + l.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${l?.accessToken}`
          }
        });
        if (!w) {
          let L = {
            ...m
          };
          m.where && (L = {
            ...m,
            where: he(m.where, {
              refid: h
            })
          }), j = (await W({
            method: "POST",
            url: l.baseURL + l.dbopsGetRefId,
            data: {
              operation: l.operation,
              source: L,
              fields: At(e.fields, l.operation),
              forcefill: e.forcefill,
              datahash: M.data.refhash,
              scrid: d
            },
            headers: {
              Authorization: `Bearer ${l?.accessToken}`
            }
          }))?.data.refid;
        }
        let C = {
          refid: j,
          fields: _,
          datahash: M.data.refhash,
          refid1: l.refid
        };
        m?.refid && (C.refid1 = m?.refid);
        const k = await W({
          method: "POST",
          url: l.baseURL + l[l.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: C,
          headers: {
            Authorization: `Bearer ${l?.accessToken}`
          }
        });
        c?.(null), s?.(k);
      } catch (w) {
        s?.(w), console.error("API fetch failed:", w);
      }
    }
  }, $ = {
    simple: /* @__PURE__ */ i.jsx(
      tu,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: y,
        onSubmit: E,
        onCancel: n,
        methods: t,
        components: a,
        sqlOpsUrls: u,
        refid: h,
        module_refid: d
      }
    )
  };
  return /* @__PURE__ */ i.jsx("div", { className: "relative", children: $.simple });
}
function xr({ tabObj: e, methods: t, tabName: r, sqlOpsUrls: n, refid: a, Reports: s, toast: o, handleAction: c, infoViewJson: d }) {
  const [u, h] = le(!1), [y, f] = le(null), [v, x] = ee.useState(0), [E, $] = ee.useState(null), p = e?.config, m = e?.config, T = m?.["popup.form"] ? "popup.form" : (m?.form, "form"), _ = m?.[T] && Object.keys(m?.[T]).length > 0, l = (k) => {
    let L = me(k.data);
    $(L);
  }, w = (k) => {
    $(k), x((L) => L + 1);
  }, j = (k) => {
    let L = me(k.data);
    f(L), h(!0);
  }, M = async () => {
    if (y?.id) {
      if (!n) {
        window.alert("Delete configuration missing.");
        return;
      }
      try {
        let k = e?.config;
        const L = k?.["popup.form"] ? "popup.form" : (k?.form, "form"), V = k?.[L];
        if (!V?.source) throw new Error("Form source missing");
        let G = !1, X;
        V?.source?.dbopsid && (G = !0, X = V?.source?.dbopsid);
        const Z = await W({
          method: "GET",
          url: n.baseURL + n.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${n.accessToken}`
          }
        });
        if (!G) {
          let z = { ...V.source, refid: y.id };
          V.source.where && (z = {
            ...z,
            where: he(V.source.where, {
              refid: y?.id
            })
          }), X = (await W({
            method: "POST",
            url: n.baseURL + n.dbopsGetRefId,
            data: {
              operation: "update",
              source: z,
              fields: V.fields,
              forcefill: V.forcefill,
              datahash: Z.data.refhash,
              scrid: d?.module_refid
            },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }))?.data.refid;
        }
        await W({
          method: "POST",
          url: n.baseURL + n.dbopsUpdate,
          data: {
            refid: X,
            fields: { blocked: "true" },
            datahash: Z.data.refhash,
            refid1: y?.id
          },
          headers: {
            Authorization: `Bearer ${n.accessToken}`
          }
        }), window.alert("Record deleted successfully."), x((z) => z + 1);
      } catch (k) {
        console.error(k), window.alert("Failed to delete record. Please try again");
      } finally {
        f(null), h(!1);
      }
    }
  }, C = () => {
    f(null), h(!1);
  };
  return /* @__PURE__ */ i.jsx(i.Fragment, { children: s ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      s,
      {
        methods: { ...t, deleteRecord: j, editRecord: l },
        report: {
          ...p,
          source: {
            table: p?.table,
            type: "sql",
            cols: p?.cols,
            where: p?.where,
            orderby: p?.orderby,
            queryid: p?.queryid
          },
          endPoints: n,
          actions: { ...p?.actions, ...d?.buttons, ...d.actions },
          datagrid: p?.datagrid,
          buttons: p?.buttons,
          refresh: v
        },
        onButtonClick: c
      }
    ),
    _ && /* @__PURE__ */ i.jsx(
      ru,
      {
        formJson: {
          ...m[T],
          source: {
            ...m?.[T].source,
            refid: E?.id
          },
          endPoints: {
            ...n,
            operation: E ? "update" : "create"
          }
        },
        methods: t,
        initialvalues: E ?? {},
        setEditData: w,
        module_refid: d?.module_refid
      }
    ),
    /* @__PURE__ */ i.jsx(
      Ps,
      {
        open: u,
        onConfirm: M,
        onCancel: C
      }
    )
  ] }) : /* @__PURE__ */ i.jsx("p", { children: "Report not available" }) });
}
function vr(e, t) {
  if (!e || !t) return null;
  const r = t[e];
  if (ee.isValidElement(r))
    return r;
  if (typeof r == "function") {
    const n = r;
    return /* @__PURE__ */ i.jsx(n, {});
  }
  return null;
}
const mn = ({ groups: e, groupNames: t, setActiveTabIndex: r, activeTabIndex: n }) => /* @__PURE__ */ i.jsx(
  "nav",
  {
    className: "flex flex-col overflow-y-auto h-full px-2 py-1 space-y-1",
    children: t.length > 0 ? t.map((a, s) => /* @__PURE__ */ i.jsx(
      "button",
      {
        type: "button",
        onClick: () => r(s),
        className: `cursor-pointer w-full text-left py-2 px-3 rounded-md text-sm font-semibold transition-all duration-200 ${n === s ? "bg-white shadow text-action" : "text-gray-600 hover:bg-white/50"}`,
        children: /* @__PURE__ */ i.jsx("span", { className: "truncate", children: e[a]?.label || a })
      },
      a
    )) : /* @__PURE__ */ i.jsx("div", { className: "py-3 px-2 text-sm text-gray-500", children: "No group available" })
  }
), nu = ({
  groups: e,
  groupNames: t,
  setActiveTabIndex: r,
  activeTabIndex: n,
  layoutConfig: a,
  showScrollHint: s,
  isCommonInfo: o,
  tabsNavRef: c
}) => {
  const [d, u] = le(!1), h = xe(null);
  return oe(() => {
    const y = (f) => {
      h.current && !h.current.contains(f.target) && u(!1);
    };
    return document.addEventListener("mousedown", y), () => document.removeEventListener("mousedown", y);
  }, []), /* @__PURE__ */ i.jsxs("div", { className: a?.tabNavClass || "relative z-10", children: [
    s && /* @__PURE__ */ i.jsx("div", { className: "absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 flex items-center justify-center", children: /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => c.current?.scrollBy({ left: -200, behavior: "smooth" }),
        className: "w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group",
        children: /* @__PURE__ */ i.jsx("svg", { className: "w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
      }
    ) }),
    /* @__PURE__ */ i.jsxs("div", { className: "absolute right-0 top-1/2 -translate-y-1/2 z-20 w-18 flex items-center justify-between pr-1", children: [
      s && /* @__PURE__ */ i.jsx(
        "button",
        {
          onClick: () => c.current?.scrollBy({ left: 200, behavior: "smooth" }),
          className: "w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group",
          children: /* @__PURE__ */ i.jsx("svg", { className: "w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: "relative", ref: h, children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            onClick: () => u(!d),
            className: "ml-1 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200",
            children: "⋮"
          }
        ),
        d && /* @__PURE__ */ i.jsx("div", { className: "absolute right-0 mt-2 w-48 max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-30", children: t.map((y, f) => /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              r(f), u(!1);
            },
            className: `w-full text-left px-3 py-2 text-sm truncate hover:bg-gray-100 ${n === f ? "bg-gray-50 font-semibold text-action" : "text-gray-700"}`,
            children: e[y]?.label || y
          },
          y
        )) })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: `relative bg-gray-100 ${o ? "" : "rounded-t-lg"} px-1 pt-1 shadow-inner overflow-hidden`, children: /* @__PURE__ */ i.jsx(
      "nav",
      {
        ref: c,
        className: "relative flex overflow-x-auto scrollbar-hide scroll-smooth",
        style: {
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        },
        children: t.length > 0 ? t.map((y, f) => /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            onClick: () => r(f),
            className: `relative cursor-pointer flex-shrink-0
            min-w-[8rem]   
            py-2 px-8
            rounded-t-lg text-xs sm:text-sm font-semibold
            transition-all duration-300 ease-out
            focus:outline-none whitespace-nowrap
            ${n === f ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
            children: /* @__PURE__ */ i.jsx("span", { className: "relative z-10 flex items-center justify-center gap-1 sm:gap-2", children: /* @__PURE__ */ i.jsx("span", { className: "truncate", children: e[y]?.label || y }) })
          },
          y
        )) : /* @__PURE__ */ i.jsx("div", { className: "py-3 px-6 text-sm text-gray-500", children: "No group available" })
      }
    ) })
  ] });
}, yn = ({
  groupNames: e,
  activeTabIndex: t,
  layoutConfig: r,
  tabObj: n,
  infoData: a,
  setActiveTabIndex: s,
  renderView: o,
  methods: c = {},
  refid: d,
  sqlOpsUrls: u,
  module_refid: h,
  fieldOptions: y,
  setFieldOptions: f,
  buttons: v,
  handleAction: x,
  components: E
}) => {
  let $ = v ? Object.entries(v).filter(([T, _]) => _.groups ? _.groups.includes(e[t]) : !0) : [];
  async function p(T, _) {
    const l = c?.[T];
    if (l) {
      try {
        await l();
      } catch (w) {
        console.error("Method execution failed:", w);
      }
      return;
    }
    x?.({ [T]: _ }, a);
  }
  const m = vr(n?.component, E);
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: "bg-white rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex-1 flex flex-col min-h-0",
      children: [
        e.length > 0 ? n?.type === "fields" && n?.fields ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ i.jsx("div", { className: r?.fieldGridClass || "grid grid-cols-12 gap-2", children: n.fields.map((T, _) => /* @__PURE__ */ i.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${ct[ut(T.width)] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ i.jsx(
              dt,
              {
                field: T,
                data: a ?? {},
                methods: c,
                refid: d,
                sqlOpsUrls: u,
                module_refid: h,
                setFieldOptions: f,
                ...y[T.name] ? { optionsOverride: y[T.name] } : {}
              }
            )
          },
          T?.name ?? `field-${_}`
        )) }) }) : n?.type === "component" && m ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: m }) : n ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: o(n, e[t] || "") }) : null : /* @__PURE__ */ i.jsx("div", { className: "flex-1 col-span-full text-center py-8 text-gray-500", children: "No data available" }),
        /* @__PURE__ */ i.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: $ && $.map(([T, _]) => /* @__PURE__ */ i.jsx(
          "button",
          {
            onClick: () => p(T, _),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: _.label
          },
          T
        )) }),
        e.length > 5 && /* @__PURE__ */ i.jsxs("div", { className: "mt-2 pt-2 border-t border-gray-100 flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-500", children: [
            /* @__PURE__ */ i.jsxs("span", { children: [
              "Tab ",
              t + 1,
              " of ",
              e.length
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "flex gap-1", children: [
              e.slice(0, 5).map((T, _) => /* @__PURE__ */ i.jsx(
                "div",
                {
                  className: `w-2 h-2 rounded-full transition-all duration-300 ${_ === t ? "bg-action w-6" : "bg-gray-300"}`
                },
                _
              )),
              e.length > 5 && /* @__PURE__ */ i.jsxs("span", { className: "text-xs text-gray-400 ml-1", children: [
                "+",
                e.length - 5
              ] })
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "hidden sm:flex gap-2", children: [
            /* @__PURE__ */ i.jsx(
              "button",
              {
                onClick: () => s(Math.max(0, t - 1)),
                disabled: t === 0,
                className: "px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                children: "Previous"
              }
            ),
            /* @__PURE__ */ i.jsx(
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
        e.length <= 5 && /* @__PURE__ */ i.jsx("div", { className: "mt-6 pt-3 border-t border-gray-100", children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
          /* @__PURE__ */ i.jsxs("span", { children: [
            "Tab ",
            t + 1,
            " of ",
            e.length
          ] }),
          /* @__PURE__ */ i.jsx("div", { className: "flex gap-1", children: e.map((T, _) => /* @__PURE__ */ i.jsx(
            "div",
            {
              className: `w-2 h-2 rounded-full transition-all duration-300 ${_ === t ? "bg-action w-6" : "bg-gray-300"}`
            },
            _
          )) })
        ] }) })
      ]
    },
    e[t]
  );
};
function gn({
  groups: e,
  methods: t = {},
  infoData: r,
  viewRenderers: n = {},
  isCommonInfo: a,
  layoutConfig: s = {},
  viewMode: o,
  sqlOpsUrls: c,
  refid: d,
  Reports: u,
  toast: h = {},
  handleAction: y = () => {
  },
  infoViewJson: f,
  fieldOptions: v,
  setFieldOptions: x,
  components: E
}) {
  const [$, p] = le(0), [m, T] = le(!1), _ = xe(null), l = Object.keys(e);
  oe(() => {
    const G = () => {
      if (_.current) {
        const X = _.current;
        T(X.scrollWidth > X.clientWidth);
      }
    };
    return G(), window.addEventListener("resize", G), () => window.removeEventListener("resize", G);
  }, [l.length]), oe(() => {
    if (_.current && l.length > 0) {
      const G = _.current.children[$];
      G && G.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [$, l.length]);
  const w = o === "tableft", j = o === "tabright", M = !w && !j, C = e[l[$] ?? ""] || null, k = {
    single: (G, X) => /* @__PURE__ */ i.jsx(cr, { fieldOptions: v, setFieldOptions: x, module_refid: f.module_refid, tabObj: G, methods: t, tabName: X, sqlOpsUrls: c, refid: d }),
    grid: (G, X) => /* @__PURE__ */ i.jsx(
      xr,
      {
        ...u ? { Reports: u } : {},
        toast: h,
        handleAction: y,
        tabObj: G,
        methods: t,
        tabName: X,
        sqlOpsUrls: c,
        refid: d,
        infoViewJson: f
      }
    )
  }, L = C?.config?.uimode, V = n[L] || k[L] || (() => /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No UI mode for this type" }));
  return M ? /* @__PURE__ */ i.jsxs("div", { className: "flex-1 flex flex-col min-h-0 ", children: [
    /* @__PURE__ */ i.jsx(
      nu,
      {
        groupNames: l,
        groups: e,
        setActiveTabIndex: p,
        activeTabIndex: $,
        tabsNavRef: _,
        isCommonInfo: a,
        showScrollHint: m,
        layoutConfig: s
      }
    ),
    /* @__PURE__ */ i.jsx(
      yn,
      {
        groupNames: l,
        activeTabIndex: $,
        layoutConfig: s,
        tabObj: C,
        infoData: r,
        setActiveTabIndex: p,
        renderView: V,
        groups: e,
        methods: t,
        refid: d,
        sqlOpsUrls: c,
        module_refid: f.module_refid,
        fieldOptions: v,
        setFieldOptions: x,
        buttons: f.buttons,
        handleAction: y,
        ...E ? { components: E } : {}
      }
    )
  ] }) : /* @__PURE__ */ i.jsxs("div", { className: "flex-1 flex min-h-0", children: [
    w && /* @__PURE__ */ i.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ i.jsx(
      mn,
      {
        groupNames: l,
        groups: e,
        setActiveTabIndex: p,
        activeTabIndex: $
      }
    ) }),
    /* @__PURE__ */ i.jsx("main", { className: "flex-1 flex flex-col min-h-0 overflow-auto", children: /* @__PURE__ */ i.jsx(
      yn,
      {
        groupNames: l,
        activeTabIndex: $,
        layoutConfig: s,
        tabObj: C,
        infoData: r,
        setActiveTabIndex: p,
        renderView: V,
        groups: e,
        methods: t,
        refid: d,
        module_refid: f.module_refid,
        sqlOpsUrls: c,
        fieldOptions: v,
        setFieldOptions: x,
        handleAction: y,
        ...E ? { components: E } : {}
      }
    ) }),
    j && /* @__PURE__ */ i.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ i.jsx(
      mn,
      {
        groupNames: l,
        groups: e,
        setActiveTabIndex: p,
        activeTabIndex: $
      }
    ) })
  ] });
}
function au({ title: e, children: t, isFirst: r }) {
  const [n, a] = le(r);
  return /* @__PURE__ */ i.jsx("div", { className: "group relative mt-1 flex-1 flex flex-col min-h-0 max-h-screen", children: /* @__PURE__ */ i.jsxs("div", { className: "flex-1 flex flex-col min-h-0 relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ i.jsxs(
      "button",
      {
        onClick: () => a(!n),
        className: "w-full bg-gray-50 flex justify-between items-center px-2 py-1 b text-left transition-all duration-300 ",
        children: [
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ i.jsx("div", { className: `w-3 h-3 rounded-full transition-all duration-300 ${n ? "bg-action" : "bg-gray-300"}` }),
            /* @__PURE__ */ i.jsx("h3", { className: "text-md capitalize font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: e })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: `relative transition-all duration-300 ${n ? "rotate-180" : ""}`, children: [
            /* @__PURE__ */ i.jsx("div", { className: `absolute inset-0 rounded-full blur-md transition-opacity duration-300 ${n ? "bg-action opacity-30" : "bg-transparent opacity-0"}` }),
            /* @__PURE__ */ i.jsx(
              "svg",
              {
                className: "relative w-4 h-4 text-gray-500 group-hover:text-action-500 transition-colors duration-300",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: `flex-1 flex flex-col min-h-0 transition-all  duration-500 ease-in-out overflow-hidden ${n ? "max-h-full opacity-100" : "max-h-0 opacity-0"}`,
        children: /* @__PURE__ */ i.jsx("div", { className: "px-1 pb-1 bg-gradient-to-br from-gray-50/50 to-white flex-1 flex flex-col min-h-0", children: /* @__PURE__ */ i.jsx("div", { className: "space-y-5 pt-1 flex-1 flex flex-col min-h-0 overflow-y-auto", children: t }) })
      }
    )
  ] }) });
}
function su({
  groups: e,
  methods: t = {},
  infoData: r,
  viewRenderers: n = {},
  sqlOpsUrls: a,
  refid: s,
  Reports: o,
  toast: c = {},
  handleAction: d = () => {
  },
  infoViewJson: u,
  fieldOptions: h,
  setFieldOptions: y,
  components: f
}) {
  const v = {
    single: (p, m) => /* @__PURE__ */ i.jsx(
      cr,
      {
        tabObj: p,
        methods: t,
        tabName: m,
        sqlOpsUrls: a,
        fieldOptions: h,
        setFieldOptions: y,
        refid: s,
        module_refid: u?.module_refid
      }
    ),
    grid: (p, m) => /* @__PURE__ */ i.jsx(
      xr,
      {
        ...o ? { Reports: o } : {},
        toast: c,
        infoViewJson: u,
        handleAction: d,
        tabObj: p,
        methods: t,
        tabName: m,
        sqlOpsUrls: a,
        refid: s
      }
    )
  }, x = u?.buttons;
  let E = x ? Object.entries(x).filter(([p, m]) => !(m.groups && m.groups.length > 0)) : [];
  async function $(p, m) {
    const T = t?.[p];
    if (T) {
      try {
        await T();
      } catch (_) {
        console.error("Method execution failed:", _);
      }
      return;
    }
    d?.({ [p]: m }, r);
  }
  return /* @__PURE__ */ i.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ i.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ i.jsxs("div", { className: "space-y-1 flex flex-col min-h-0", children: [
    e && Object.entries(e).map(([p, m], T) => {
      let _ = x ? Object.entries(x).filter(([w, j]) => j.groups ? j.groups.includes(p) : !1) : [];
      const l = vr(m.component, f);
      return /* @__PURE__ */ i.jsxs(au, { title: m.label, isFirst: T === 0, children: [
        m?.type === "fields" && m?.fields ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-12 gap-2", children: m.fields.map((w, j) => /* @__PURE__ */ i.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${ct[ut(w.width)] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ i.jsx(
              dt,
              {
                module_refid: u?.module_refid,
                methods: t,
                field: w,
                data: r ?? {},
                setFieldOptions: y,
                ...h[w.name] ? { optionsOverride: h[w.name] } : {},
                sqlOpsUrls: a,
                refid: s
              }
            )
          },
          w?.name ?? `field-${j}`
        )) }) }) : m?.type === "component" && l ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: l }) : m ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: n[m.config?.uimode]?.(m) || v[m.config?.uimode]?.(m, p) || /* @__PURE__ */ i.jsx("div", { children: "No renderer for this type" }) }) : null,
        /* @__PURE__ */ i.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: _ && _.map(([w, j]) => /* @__PURE__ */ i.jsx(
          "button",
          {
            onClick: () => $(w, j),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: j.label
          },
          w
        )) })
      ] }, p);
    }),
    /* @__PURE__ */ i.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: E && E.map(([p, m]) => /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => $(p, m),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: m.label
      },
      p
    )) })
  ] }) }) });
}
function iu({ title: e, children: t }) {
  return /* @__PURE__ */ i.jsx("div", { className: "group relative mt-1 flex-1 flex flex-col min-h-0 max-h-screen", children: /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col min-h-0 relative  bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ i.jsx(
      "button",
      {
        className: "w-full bg-gray-50 flex justify-between items-center px-2 py-1 b text-left transition-all duration-300 ",
        children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ i.jsx("div", { className: "w-3 h-3 rounded-full transition-all duration-300 bg-action" }),
          /* @__PURE__ */ i.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r capitalize from-gray-800 to-gray-600 bg-clip-text text-transparent", children: e })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: `flex flex-col min-h-0 transition-all duration-500 ease-in-out opacity-100'
            }`,
        children: /* @__PURE__ */ i.jsx("div", { className: "px-1 pb-1 bg-gradient-to-br from-gray-50/50 to-white flex flex-col min-h-0", children: /* @__PURE__ */ i.jsx("div", { className: "space-y-5 pt-1 flex-1 flex flex-col min-h-0 overflow-y-auto", children: t }) })
      }
    )
  ] }) });
}
function ou({
  groups: e,
  methods: t = {},
  infoData: r,
  viewRenderers: n = {},
  sqlOpsUrls: a,
  refid: s,
  Reports: o,
  toast: c = {},
  handleAction: d = () => {
  },
  infoViewJson: u,
  fieldOptions: h,
  setFieldOptions: y,
  components: f
}) {
  const v = {
    single: (p, m) => /* @__PURE__ */ i.jsx(cr, { fieldOptions: h, setFieldOptions: y, module_refid: u?.module_refid, tabObj: p, methods: t, tabName: m, sqlOpsUrls: a, refid: s }),
    grid: (p, m) => /* @__PURE__ */ i.jsx(
      xr,
      {
        ...o ? { Reports: o } : {},
        toast: c,
        handleAction: d,
        tabObj: p,
        methods: t,
        tabName: m,
        sqlOpsUrls: a,
        refid: s,
        infoViewJson: u
      }
    )
  }, x = u?.buttons;
  let E = x ? Object.entries(x).filter(([p, m]) => !(m.groups && m.groups.length > 0)) : [];
  async function $(p, m) {
    const T = t?.[p];
    if (T) {
      try {
        await T();
      } catch (_) {
        console.error("Method execution failed:", _);
      }
      return;
    }
    d?.({ [p]: m }, r);
  }
  return /* @__PURE__ */ i.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ i.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ i.jsxs("div", { className: "space-y-2  flex flex-col min-h-0", children: [
    e && Object.entries(e).map(([p, m], T) => {
      console.log("group", p), console.log("buttons", x);
      let _ = x ? Object.entries(x).filter(([w, j]) => j.groups ? j.groups.includes(p) : !1) : [];
      const l = vr(m.component, f);
      return /* @__PURE__ */ i.jsxs(iu, { title: m.label, children: [
        m?.type === "fields" && m?.fields ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-12 gap-2", children: m.fields.map((w, j) => /* @__PURE__ */ i.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${ct[ut(w.width)] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ i.jsx(
              dt,
              {
                module_refid: u?.module_refid,
                methods: t,
                field: w,
                data: r ?? {},
                setFieldOptions: y,
                ...h[w.name] ? { optionsOverride: h[w.name] } : {},
                sqlOpsUrls: a,
                refid: s
              }
            )
          },
          w?.name ?? `field-${j}`
        )) }) }) : m?.type === "component" && l ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: l }) : m ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: n[m.config?.uimode]?.(m) || v[m.config?.uimode]?.(m, p) || /* @__PURE__ */ i.jsx("div", { children: "No renderer for this type" }) }) : null,
        /* @__PURE__ */ i.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: _ && _.map(([w, j]) => /* @__PURE__ */ i.jsx(
          "button",
          {
            onClick: () => $(w, j),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: j.label
          },
          w
        )) })
      ] }, p);
    }),
    /* @__PURE__ */ i.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: E && E.map(([p, m]) => /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => $(p, m),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: m.label
      },
      p
    )) })
  ] }) }) });
}
function du({
  infoViewJson: e,
  data: t = {},
  hiddenFields: r = [],
  groupFieldsFn: n = ms,
  layoutConfig: a = {},
  viewRenderers: s = {},
  methods: o = {},
  Reports: c,
  toast: d = {},
  handleAction: u = () => {
  },
  components: h
}) {
  const [y, f] = ee.useState({}), v = ps(e.infoview ?? {}), x = e.endPoints, E = ee.useMemo(
    () => n(e.fields || {}),
    [e.fields, n]
  ), [$, p] = ee.useState({}), m = (j, M) => {
    p((C) => ({ ...C, [j]: M }));
  }, T = e?.source?.refid;
  let _ = { ...E };
  e.infoview?.groups && (_ = { ..._, ...e.infoview.groups }), console.log("groups", _), ee.useEffect(() => {
    let j = !1;
    return (async () => {
      const C = e?.source;
      if (!C?.type) {
        j || f({});
        return;
      }
      if (C.type === "method") {
        const k = C.method, L = k ? o[k] : void 0;
        if (L)
          try {
            const V = await Promise.resolve(L());
            j || f(V || {});
          } catch (V) {
            console.error("Method execution failed:", V), j || f({});
          }
        else
          j || f({});
      }
      if (C.type === "api")
        try {
          const k = await W({
            method: C.method || "GET",
            url: C.url,
            data: C.body || {},
            params: C.params || {},
            headers: C.headers || {}
          });
          j || f(k.data || {});
        } catch (k) {
          console.error("API fetch failed:", k), j || f({});
        }
      if (C.type === "sql" && C.refid && C.refid != "0" || C.dbopsid) {
        if (!x) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let k = !1, L;
          C?.dbopsid && (k = !0, L = C?.dbopsid);
          const V = await W({
            method: "GET",
            url: x.baseURL + x.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${x?.accessToken}`
            }
          });
          if (!k) {
            let Z = {
              ...C
            };
            C.where && (Z = {
              ...C,
              where: he(C.where, {
                refid: T
              })
            }), L = (await W({
              method: "POST",
              url: x.baseURL + x.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: Z,
                fields: At(e.fields, x.operation),
                forcefill: e.forcefill,
                datahash: V.data.refhash,
                srcid: e?.module_refid
              },
              headers: {
                Authorization: `Bearer ${x?.accessToken}`
              }
            }))?.data.refid;
          }
          const G = await W({
            method: "POST",
            url: x.baseURL + x.dbopsFetch,
            data: {
              refid: L,
              datahash: V.data.refhash,
              module_refid: e.module_refid
            },
            headers: {
              Authorization: `Bearer ${x?.accessToken}`
            }
          }), X = Mn(G) ?? {};
          j || f(X);
        } catch (k) {
          console.error("API fetch failed:", k);
        }
      }
    })(), () => {
      j = !0;
    };
  }, [
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.url || "",
    JSON.stringify(e?.source?.params || {}),
    JSON.stringify(e?.source?.body || {}),
    JSON.stringify(e?.source?.headers || {})
  ]);
  const l = _.common || null;
  l && delete _.common;
  const w = (j) => {
    switch (j) {
      case "accordion":
        return /* @__PURE__ */ i.jsx(
          su,
          {
            groups: _,
            methods: o,
            infoData: y,
            viewRenderers: s,
            sqlOpsUrls: x,
            refid: T,
            ...c ? { Reports: c } : {},
            toast: d,
            handleAction: u,
            infoViewJson: e,
            setFieldOptions: m,
            fieldOptions: $,
            ...h ? { components: h } : {}
          }
        );
      case "tab":
      case "tableft":
      case "tabright":
        return /* @__PURE__ */ i.jsx(
          gn,
          {
            groups: _,
            viewRenderers: s,
            layoutConfig: a,
            methods: o,
            infoData: y,
            isCommonInfo: !!l,
            viewMode: j,
            sqlOpsUrls: x,
            refid: T,
            ...c ? { Reports: c } : {},
            toast: d,
            handleAction: u,
            infoViewJson: e,
            setFieldOptions: m,
            fieldOptions: $,
            ...h ? { components: h } : {}
          }
        );
      case "cards":
        return /* @__PURE__ */ i.jsx(
          ou,
          {
            groups: _,
            viewRenderers: s,
            methods: o,
            infoData: y,
            sqlOpsUrls: x,
            refid: T,
            ...c ? { Reports: c } : {},
            toast: d,
            handleAction: u,
            infoViewJson: e,
            setFieldOptions: m,
            fieldOptions: $,
            ...h ? { components: h } : {}
          }
        );
      default:
        return /* @__PURE__ */ i.jsx(
          gn,
          {
            groups: _,
            viewRenderers: s,
            layoutConfig: a,
            methods: o,
            infoData: y,
            isCommonInfo: !!l,
            viewMode: j,
            sqlOpsUrls: x,
            refid: T,
            ...c ? { Reports: c } : {},
            toast: d,
            handleAction: u,
            infoViewJson: e,
            setFieldOptions: m,
            fieldOptions: $,
            ...h ? { components: h } : {}
          }
        );
    }
  };
  return /* @__PURE__ */ i.jsxs("div", { className: a.containerClass || "h-screen flex flex-col ", children: [
    l && x && /* @__PURE__ */ i.jsx(
      Rs,
      {
        commonInfo: l,
        infoData: y,
        hiddenFields: r,
        sqlOpsUrls: x,
        setFieldOptions: m,
        fieldOptions: $,
        module_refid: e.module_refid,
        refid: T,
        methods: o
      }
    ),
    w(v)
  ] });
}
export {
  du as InfoView
};
