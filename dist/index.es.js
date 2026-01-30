import ee, { useState as le, useEffect as oe, useRef as xe, useCallback as ae, useMemo as _t, useLayoutEffect as gn, createContext as va, forwardRef as wa, createElement as ja, useContext as Ta } from "react";
import W from "axios";
import { createPortal as Ea } from "react-dom";
function bn(e) {
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
var wr;
function Sa() {
  if (wr) return Xe;
  wr = 1;
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
var jr;
function _a() {
  return jr || (jr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(x) {
      if (x == null) return null;
      if (typeof x == "function")
        return x.$$typeof === B ? null : x.displayName || x.name || null;
      if (typeof x == "string") return x;
      switch (x) {
        case w:
          return "Fragment";
        case m:
          return "Profiler";
        case $:
          return "StrictMode";
        case l:
          return "Suspense";
        case j:
          return "SuspenseList";
        case D:
          return "Activity";
      }
      if (typeof x == "object")
        switch (typeof x.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), x.$$typeof) {
          case b:
            return "Portal";
          case S:
            return (x.displayName || "Context") + ".Provider";
          case v:
            return (x._context.displayName || "Context") + ".Consumer";
          case O:
            var E = x.render;
            return x = x.displayName, x || (x = E.displayName || E.name || "", x = x !== "" ? "ForwardRef(" + x + ")" : "ForwardRef"), x;
          case _:
            return E = x.displayName || null, E !== null ? E : e(x.type) || "Memo";
          case F:
            E = x._payload, x = x._init;
            try {
              return e(x(E));
            } catch {
            }
        }
      return null;
    }
    function t(x) {
      return "" + x;
    }
    function r(x) {
      try {
        t(x);
        var E = !1;
      } catch {
        E = !0;
      }
      if (E) {
        E = console;
        var A = E.error, P = typeof Symbol == "function" && Symbol.toStringTag && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return A.call(
          E,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          P
        ), t(x);
      }
    }
    function n(x) {
      if (x === w) return "<>";
      if (typeof x == "object" && x !== null && x.$$typeof === F)
        return "<...>";
      try {
        var E = e(x);
        return E ? "<" + E + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var x = k.A;
      return x === null ? null : x.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function o(x) {
      if (L.call(x, "key")) {
        var E = Object.getOwnPropertyDescriptor(x, "key").get;
        if (E && E.isReactWarning) return !1;
      }
      return x.key !== void 0;
    }
    function c(x, E) {
      function A() {
        X || (X = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          E
        ));
      }
      A.isReactWarning = !0, Object.defineProperty(x, "key", {
        get: A,
        configurable: !0
      });
    }
    function d() {
      var x = e(this.type);
      return z[x] || (z[x] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), x = this.props.ref, x !== void 0 ? x : null;
    }
    function u(x, E, A, P, I, U, ne, ce) {
      return A = U.ref, x = {
        $$typeof: p,
        type: x,
        key: E,
        props: U,
        _owner: I
      }, (A !== void 0 ? A : null) !== null ? Object.defineProperty(x, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(x, "ref", { enumerable: !1, value: null }), x._store = {}, Object.defineProperty(x._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(x, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(x, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ne
      }), Object.defineProperty(x, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ce
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    }
    function f(x, E, A, P, I, U, ne, ce) {
      var te = E.children;
      if (te !== void 0)
        if (P)
          if (q(te)) {
            for (P = 0; P < te.length; P++)
              y(te[P]);
            Object.freeze && Object.freeze(te);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(te);
      if (L.call(E, "key")) {
        te = e(x);
        var pe = Object.keys(E).filter(function(Ie) {
          return Ie !== "key";
        });
        P = 0 < pe.length ? "{key: someKey, " + pe.join(": ..., ") + ": ...}" : "{key: someKey}", N[te + P] || (pe = 0 < pe.length ? "{" + pe.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          P,
          te,
          pe,
          te
        ), N[te + P] = !0);
      }
      if (te = null, A !== void 0 && (r(A), te = "" + A), o(E) && (r(E.key), te = "" + E.key), "key" in E) {
        A = {};
        for (var we in E)
          we !== "key" && (A[we] = E[we]);
      } else A = E;
      return te && c(
        A,
        typeof x == "function" ? x.displayName || x.name || "Unknown" : x
      ), u(
        x,
        te,
        U,
        I,
        a(),
        A,
        ne,
        ce
      );
    }
    function y(x) {
      typeof x == "object" && x !== null && x.$$typeof === p && x._store && (x._store.validated = 1);
    }
    var h = ee, p = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), v = Symbol.for("react.consumer"), S = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), D = Symbol.for("react.activity"), B = Symbol.for("react.client.reference"), k = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = Object.prototype.hasOwnProperty, q = Array.isArray, re = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(x) {
        return x();
      }
    };
    var X, z = {}, Z = h.react_stack_bottom_frame.bind(
      h,
      s
    )(), T = re(n(s)), N = {};
    Je.Fragment = w, Je.jsx = function(x, E, A, P, I) {
      var U = 1e4 > k.recentlyCreatedOwnerStacks++;
      return f(
        x,
        E,
        A,
        !1,
        P,
        I,
        U ? Error("react-stack-top-frame") : Z,
        U ? re(n(x)) : T
      );
    }, Je.jsxs = function(x, E, A, P, I) {
      var U = 1e4 > k.recentlyCreatedOwnerStacks++;
      return f(
        x,
        E,
        A,
        !0,
        P,
        I,
        U ? Error("react-stack-top-frame") : Z,
        U ? re(n(x)) : T
      );
    };
  }()), Je;
}
var Tr;
function Na() {
  return Tr || (Tr = 1, process.env.NODE_ENV === "production" ? mt.exports = Sa() : mt.exports = _a()), mt.exports;
}
var i = Na(), zt, Er;
function Aa() {
  if (Er) return zt;
  Er = 1;
  function e(m) {
    this._maxSize = m, this.clear();
  }
  e.prototype.clear = function() {
    this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
  }, e.prototype.get = function(m) {
    return this._values[m];
  }, e.prototype.set = function(m, v) {
    return this._size >= this._maxSize && this.clear(), m in this._values || this._size++, this._values[m] = v;
  };
  var t = /[^.^\]^[]+|(?=\[\]|\.\.)/g, r = /^\d+$/, n = /^\d/, a = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, s = /^\s*(['"]?)(.*?)(\1)\s*$/, o = 512, c = new e(o), d = new e(o), u = new e(o);
  zt = {
    Cache: e,
    split: y,
    normalizePath: f,
    setter: function(m) {
      var v = f(m);
      return d.get(m) || d.set(m, function(O, l) {
        for (var j = 0, _ = v.length, F = O; j < _ - 1; ) {
          var D = v[j];
          if (D === "__proto__" || D === "constructor" || D === "prototype")
            return O;
          F = F[v[j++]];
        }
        F[v[j]] = l;
      });
    },
    getter: function(m, v) {
      var S = f(m);
      return u.get(m) || u.set(m, function(l) {
        for (var j = 0, _ = S.length; j < _; )
          if (l != null || !v) l = l[S[j++]];
          else return;
        return l;
      });
    },
    join: function(m) {
      return m.reduce(function(v, S) {
        return v + (p(S) || r.test(S) ? "[" + S + "]" : (v ? "." : "") + S);
      }, "");
    },
    forEach: function(m, v, S) {
      h(Array.isArray(m) ? m : y(m), v, S);
    }
  };
  function f(m) {
    return c.get(m) || c.set(
      m,
      y(m).map(function(v) {
        return v.replace(s, "$2");
      })
    );
  }
  function y(m) {
    return m.match(t) || [""];
  }
  function h(m, v, S) {
    var O = m.length, l, j, _, F;
    for (j = 0; j < O; j++)
      l = m[j], l && ($(l) && (l = '"' + l + '"'), F = p(l), _ = !F && /^\d+$/.test(l), v.call(S, l, F, _, j, m));
  }
  function p(m) {
    return typeof m == "string" && m && ["'", '"'].indexOf(m.charAt(0)) !== -1;
  }
  function b(m) {
    return m.match(n) && !m.match(r);
  }
  function w(m) {
    return a.test(m);
  }
  function $(m) {
    return !p(m) && (b(m) || w(m));
  }
  return zt;
}
var De = Aa(), Vt, Sr;
function $a() {
  if (Sr) return Vt;
  Sr = 1;
  const e = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, t = (f) => f.match(e) || [], r = (f) => f[0].toUpperCase() + f.slice(1), n = (f, y) => t(f).join(y).toLowerCase(), a = (f) => t(f).reduce(
    (y, h) => `${y}${y ? h[0].toUpperCase() + h.slice(1).toLowerCase() : h.toLowerCase()}`,
    ""
  );
  return Vt = {
    words: t,
    upperFirst: r,
    camelCase: a,
    pascalCase: (f) => r(a(f)),
    snakeCase: (f) => n(f, "_"),
    kebabCase: (f) => n(f, "-"),
    sentenceCase: (f) => r(n(f, " ")),
    titleCase: (f) => t(f).map(r).join(" ")
  }, Vt;
}
var Bt = $a(), yt = { exports: {} }, _r;
function Oa() {
  if (_r) return yt.exports;
  _r = 1, yt.exports = function(a) {
    return e(t(a), a);
  }, yt.exports.array = e;
  function e(a, s) {
    var o = a.length, c = new Array(o), d = {}, u = o, f = r(s), y = n(a);
    for (s.forEach(function(p) {
      if (!y.has(p[0]) || !y.has(p[1]))
        throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }); u--; )
      d[u] || h(a[u], u, /* @__PURE__ */ new Set());
    return c;
    function h(p, b, w) {
      if (w.has(p)) {
        var $;
        try {
          $ = ", node was:" + JSON.stringify(p);
        } catch {
          $ = "";
        }
        throw new Error("Cyclic dependency" + $);
      }
      if (!y.has(p))
        throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(p));
      if (!d[b]) {
        d[b] = !0;
        var m = f.get(p) || /* @__PURE__ */ new Set();
        if (m = Array.from(m), b = m.length) {
          w.add(p);
          do {
            var v = m[--b];
            h(v, y.get(v), w);
          } while (b);
          w.delete(p);
        }
        c[--o] = p;
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
var Fa = Oa();
const Ca = /* @__PURE__ */ bn(Fa), Ia = Object.prototype.toString, Ra = Error.prototype.toString, Pa = RegExp.prototype.toString, Da = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", Ma = /^Symbol\((.*)\)(.*)$/;
function ka(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function Nr(e, t = !1) {
  if (e == null || e === !0 || e === !1) return "" + e;
  const r = typeof e;
  if (r === "number") return ka(e);
  if (r === "string") return t ? `"${e}"` : e;
  if (r === "function") return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol") return Da.call(e).replace(Ma, "Symbol($1)");
  const n = Ia.call(e).slice(8, -1);
  return n === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : n === "Error" || e instanceof Error ? "[" + Ra.call(e) + "]" : n === "RegExp" ? Pa.call(e) : null;
}
function Ae(e, t) {
  let r = Nr(e, t);
  return r !== null ? r : JSON.stringify(e, function(n, a) {
    let s = Nr(this[n], t);
    return s !== null ? s : a;
  }, 2);
}
function xn(e) {
  return e == null ? [] : [].concat(e);
}
let vn, wn, jn, La = /\$\{\s*(\w+)\s*\}/g;
vn = Symbol.toStringTag;
class Ar {
  constructor(t, r, n, a) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[vn] = "Error", this.name = "ValidationError", this.value = r, this.path = n, this.type = a, this.errors = [], this.inner = [], xn(t).forEach((s) => {
      if (ue.isError(s)) {
        this.errors.push(...s.errors);
        const o = s.inner.length ? s.inner : [s];
        this.inner.push(...o);
      } else
        this.errors.push(s);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
wn = Symbol.hasInstance;
jn = Symbol.toStringTag;
class ue extends Error {
  static formatError(t, r) {
    const n = r.label || r.path || "this";
    return r = Object.assign({}, r, {
      path: n,
      originalPath: r.path
    }), typeof t == "string" ? t.replace(La, (a, s) => Ae(r[s])) : typeof t == "function" ? t(r) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, r, n, a, s) {
    const o = new Ar(t, r, n, a);
    if (s)
      return o;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[jn] = "Error", this.name = o.name, this.message = o.message, this.type = o.type, this.value = o.value, this.path = o.path, this.errors = o.errors, this.inner = o.inner, Error.captureStackTrace && Error.captureStackTrace(this, ue);
  }
  static [wn](t) {
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
    const a = n != null && n !== r ? ` (cast from the value \`${Ae(n, !0)}\`).` : ".";
    return t !== "mixed" ? `${e} must be a \`${t}\` type, but the final value was: \`${Ae(r, !0)}\`` + a : `${e} must match the configured type. The validated value was: \`${Ae(r, !0)}\`` + a;
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
}, za = {
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
      if (r.length < a) return `${t} tuple value has too few items, expected a length of ${a} but got ${r.length} for value: \`${Ae(r, !0)}\``;
      if (r.length > a) return `${t} tuple value has too many items, expected a length of ${a} but got ${r.length} for value: \`${Ae(r, !0)}\``;
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
  boolean: za,
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
      let f = o(...c) ? a : s;
      return (u = f?.(d)) != null ? u : d;
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
    this.path = this.key.slice(n.length), this.getter = this.path && De.getter(this.path, !0), this.map = r.map;
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
      test: f,
      params: y,
      message: h,
      skipAbsent: p
    } = e;
    let {
      parent: b,
      context: w,
      abortEarly: $ = o.spec.abortEarly,
      disableStackTrace: m = o.spec.disableStackTrace
    } = a;
    const v = {
      value: r,
      parent: b,
      context: w
    };
    function S(k = {}) {
      const L = Tn(Object.assign({
        value: r,
        originalValue: s,
        label: o.spec.label,
        path: k.path || n,
        spec: o.spec,
        disableStackTrace: k.disableStackTrace || m
      }, y, k.params), v), q = new ue(ue.formatError(k.message || h, L), r, L.path, k.type || u, L.disableStackTrace);
      return q.params = L, q;
    }
    const O = $ ? c : d;
    let l = {
      path: n,
      parent: b,
      type: u,
      from: a.from,
      createError: S,
      resolve(k) {
        return En(k, v);
      },
      options: a,
      originalValue: s,
      schema: o
    };
    const j = (k) => {
      ue.isError(k) ? O(k) : k ? d(null) : O(S());
    }, _ = (k) => {
      ue.isError(k) ? O(k) : c(k);
    };
    if (p && Ne(r))
      return j(!0);
    let D;
    try {
      var B;
      if (D = f.call(l, r, l), typeof ((B = D) == null ? void 0 : B.then) == "function") {
        if (a.sync)
          throw new Error(`Validation test of type: "${l.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(D).then(j, _);
      }
    } catch (k) {
      _(k);
      return;
    }
    j(D);
  }
  return t.OPTIONS = e, t;
}
function Tn(e, t) {
  if (!e) return e;
  for (const r of Object.keys(e))
    e[r] = En(e[r], t);
  return e;
}
function En(e, t) {
  return Le.isRef(e) ? e.getValue(t.value, t.parent, t.context) : e;
}
function Ba(e, t, r, n = r) {
  let a, s, o;
  return t ? (De.forEach(t, (c, d, u) => {
    let f = d ? c.slice(1, c.length - 1) : c;
    e = e.resolve({
      context: n,
      parent: a,
      value: r
    });
    let y = e.type === "tuple", h = u ? parseInt(f, 10) : 0;
    if (e.innerType || y) {
      if (y && !u) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);
      if (r && h >= r.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${c}, in the path: ${t}. because there is no value at that index. `);
      a = r, r = r && r[h], e = y ? e.spec.types[h] : e.innerType;
    }
    if (!u) {
      if (!e.fields || !e.fields[f]) throw new Error(`The schema does not contain the path: ${t}. (failed at: ${o} which is a type: "${e.type}")`);
      a = r, r = r && r[f], e = e.fields[f];
    }
    s = f, o = d ? "[" + c + "]" : "." + c;
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
class At extends Set {
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
    return new At(this.values());
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
function Ua(e) {
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
function Ga(e, t) {
  const r = t ? `${t}.${e.path}` : e.path;
  return e.errors.map((n) => ({
    message: n,
    path: Ua(r)
  }));
}
function Sn(e, t) {
  var r;
  if (!((r = e.inner) != null && r.length) && e.errors.length)
    return Ga(e, t);
  const n = t ? `${t}.${e.path}` : e.path;
  return e.inner.flatMap((a) => Sn(a, n));
}
class ye {
  constructor(t) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new At(), this._blacklist = new At(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
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
      let o = Ae(t), c = Ae(s);
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
    for (let f of Object.values(this.internalTests))
      f && u.push(f);
    this.runTests({
      path: s,
      value: d,
      originalValue: o,
      options: r,
      tests: u
    }, n, (f) => {
      if (f.length)
        return a(f, d);
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
    } = t, f = (w) => {
      a || (a = !0, r(w, o));
    }, y = (w) => {
      a || (a = !0, n(w, o));
    }, h = s.length, p = [];
    if (!h) return y([]);
    let b = {
      value: o,
      originalValue: c,
      path: d,
      options: u,
      schema: this
    };
    for (let w = 0; w < s.length; w++) {
      const $ = s[w];
      $(b, f, function(v) {
        v && (Array.isArray(v) ? p.push(...v) : p.push(v)), --h <= 0 && y(p);
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
    const f = Object.assign({}, o, {
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
    return (y, h, p) => this.resolve(f)._validate(u, f, h, p);
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
    let n = this.clone(), a = xn(t).map((s) => new Le(s));
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
      tests: r.tests.filter((d, u, f) => f.findIndex((y) => y.OPTIONS.name === d.OPTIONS.name) === u).map((d) => {
        const u = d.OPTIONS.params && t ? Tn(Object.assign({}, d.OPTIONS.params), t) : d.OPTIONS.params;
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
              issues: Sn(a)
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
  } = Ba(this, t, r, n.context);
  return o[e](a && a[s], Object.assign({}, n, {
    parent: a,
    path: t
  }));
};
for (const e of ["equals", "is"]) ye.prototype[e] = ye.prototype.oneOf;
for (const e of ["not", "nope"]) ye.prototype[e] = ye.prototype.notOneOf;
const qa = () => !0;
function Xt(e) {
  return new _n(e);
}
class _n extends ye {
  constructor(t) {
    super(typeof t == "function" ? {
      type: "mixed",
      check: t
    } : Object.assign({
      type: "mixed",
      check: qa
    }, t));
  }
}
Xt.prototype = _n.prototype;
const Ka = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function Ya(e) {
  const t = Jt(e);
  if (!t) return Date.parse ? Date.parse(e) : Number.NaN;
  if (t.z === void 0 && t.plusMinus === void 0)
    return new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond).valueOf();
  let r = 0;
  return t.z !== "Z" && t.plusMinus !== void 0 && (r = t.hourOffset * 60 + t.minuteOffset, t.plusMinus === "+" && (r = 0 - r)), Date.UTC(t.year, t.month, t.day, t.hour, t.minute + r, t.second, t.millisecond);
}
function Jt(e) {
  var t, r;
  const n = Ka.exec(e);
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
let Ha = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), Wa = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), Za = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, Qa = "^\\d{4}-\\d{2}-\\d{2}", Xa = "\\d{2}:\\d{2}:\\d{2}", Ja = "(([+-]\\d{2}(:?\\d{2})?)|Z)", es = new RegExp(`${Qa}T${Xa}(\\.\\d+)?${Ja}$`), ts = (e) => Ne(e) || e === e.trim(), rs = {}.toString();
function tt() {
  return new Nn();
}
class Nn extends ye {
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
        return n === rs ? t : n;
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
    return this.matches(Ha, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = de.url) {
    return this.matches(Wa, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = de.uuid) {
    return this.matches(Za, {
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
    } = t : r = t), this.matches(es, {
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
      test: ts
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
tt.prototype = Nn.prototype;
let ns = (e) => e != +e;
function Et() {
  return new An();
}
class An extends ye {
  constructor() {
    super({
      type: "number",
      check(t) {
        return t instanceof Number && (t = t.valueOf()), typeof t == "number" && !ns(t);
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
let $n = /* @__PURE__ */ new Date(""), as = (e) => Object.prototype.toString.call(e) === "[object Date]";
function lr() {
  return new lt();
}
class lt extends ye {
  constructor() {
    super({
      type: "date",
      check(t) {
        return as(t) && !isNaN(t.getTime());
      }
    }), this.withMutation(() => {
      this.transform((t, r) => !this.spec.coerce || this.isType(t) || t === null ? t : (t = Ya(t), isNaN(t) ? lt.INVALID_DATE : new Date(t)));
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
lt.INVALID_DATE = $n;
lr.prototype = lt.prototype;
lr.INVALID_DATE = $n;
function ss(e, t = []) {
  let r = [], n = /* @__PURE__ */ new Set(), a = new Set(t.map(([o, c]) => `${o}-${c}`));
  function s(o, c) {
    let d = De.split(o)[0];
    n.add(d), a.has(`${c}-${d}`) || r.push([c, d]);
  }
  for (const o of Object.keys(e)) {
    let c = e[o];
    n.add(o), Le.isRef(c) && c.isSibling ? s(c.path, o) : Ft(c) && "deps" in c && c.deps.forEach((d) => s(d, o));
  }
  return Ca.array(Array.from(n), r).reverse();
}
function $r(e, t) {
  let r = 1 / 0;
  return e.some((n, a) => {
    var s;
    if ((s = t.path) != null && s.includes(n))
      return r = a, !0;
  }), r;
}
function On(e) {
  return (t, r) => $r(e, t) - $r(e, r);
}
const Fn = (e, t, r) => {
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
const is = (e, t) => {
  const r = [...De.normalizePath(t)];
  if (r.length === 1) return r[0] in e;
  let n = r.pop(), a = De.getter(De.join(r), !0)(e);
  return !!(a && n in a);
};
let Or = (e) => Object.prototype.toString.call(e) === "[object Object]";
function Fr(e, t) {
  let r = Object.keys(e.fields);
  return Object.keys(t).filter((n) => r.indexOf(n) === -1);
}
const os = On([]);
function Cn(e) {
  return new In(e);
}
class In extends ye {
  constructor(t) {
    super({
      type: "object",
      check(r) {
        return Or(r) || typeof r == "function";
      }
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = os, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
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
    }), f = !1;
    for (const y of c) {
      let h = s[y], p = y in a, b = a[y];
      if (h) {
        let w;
        u.path = (r.path ? `${r.path}.` : "") + y, h = h.resolve({
          value: b,
          context: r.context,
          parent: d
        });
        let $ = h instanceof ye ? h.spec : void 0, m = $?.strict;
        if ($ != null && $.strip) {
          f = f || y in a;
          continue;
        }
        w = !r.__validating || !m ? h.cast(b, u) : b, w !== void 0 && (d[y] = w);
      } else p && !o && (d[y] = b);
      (p !== y in d || d[y] !== b) && (f = !0);
    }
    return f ? d : a;
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
      if (!c || !Or(u)) {
        a(d, u);
        return;
      }
      o = o || u;
      let f = [];
      for (let y of this._nodes) {
        let h = this.fields[y];
        !h || Le.isRef(h) || f.push(h.asNestedTest({
          options: r,
          key: y,
          parent: u,
          parentPath: r.path,
          originalParent: o
        }));
      }
      this.runTests({
        tests: f,
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
    return n.fields = t, n._nodes = ss(t, r), n._sortErrors = On(Object.keys(t)), r && (n._excludedEdges = r), n;
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
    let a = De.getter(t, !0);
    return this.transform((s) => {
      if (!s) return s;
      let o = s;
      return is(s, t) && (o = Object.assign({}, s), n || delete o[t], o[r] = a(s)), o;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(Fn);
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
        const n = Fr(this.schema, r);
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
        const s = Fr(this.schema, a);
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
    return this.transformKeys(Bt.camelCase);
  }
  snakeCase() {
    return this.transformKeys(Bt.snakeCase);
  }
  constantCase() {
    return this.transformKeys((t) => Bt.snakeCase(t).toUpperCase());
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
Cn.prototype = In.prototype;
function er(e) {
  return new Rn(e);
}
class Rn extends ye {
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
      var f;
      if (!c || !o || !this._typeCheck(u)) {
        a(d, u);
        return;
      }
      let y = new Array(u.length);
      for (let p = 0; p < u.length; p++) {
        var h;
        y[p] = o.asNestedTest({
          options: r,
          index: p,
          parent: u,
          parentPath: r.path,
          originalParent: (h = r.originalValue) != null ? h : t
        });
      }
      this.runTests({
        value: u,
        tests: y,
        originalValue: (f = r.originalValue) != null ? f : t,
        options: r
      }, n, (p) => a(p.concat(d), u));
    });
  }
  clone(t) {
    const r = super.clone(t);
    return r.innerType = this.innerType, r;
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(Fn);
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
    if (!Ft(t)) throw new TypeError("`array.of()` sub-schema must be a valid yup schema not: " + Ae(t));
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
er.prototype = Rn.prototype;
const ls = "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg", cs = ["jpg", "jpeg", "png", "gif", "svg", "webp"], us = ["mp4", "webm", "ogg"], ds = ["txt", "json", "csv"], fs = ["pdf"];
function hs(e) {
  return e.template ? e.template : "tab";
}
function ps(e) {
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    const a = n.group || "Info";
    t[a] || (t[a] = { label: a, type: "fields", fields: [] }), t[a]?.fields?.push({ name: r, ...n });
  }), t;
}
const ms = (e) => Object.entries(e ?? {}).filter(([, t]) => t.type === "geolocation").map(([t]) => t);
async function ys() {
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
function $t(e, t = "create") {
  const r = {};
  return Object.keys(e).forEach((n) => {
    e[n].vmode === "edit" && t === "create" || (r[n] = {
      label: n,
      required: e[n].required ?? !1
    });
  }), r;
}
function gs(e, t = "create") {
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
) : e, Pn = (e) => {
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
function Cr(e, t) {
  if (!t || Object.keys(t).length === 0) return e;
  if (typeof e == "number")
    return t[String(e)] ?? e;
  if (typeof e == "string") {
    const n = e.split(",").map((a) => a.trim()).map((a) => t[a]).filter(Boolean);
    return n.length ? n.join(", ") : e;
  }
  return e;
}
const bs = (e) => e === !0 || e === "true", xs = (e, t, r, n) => {
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
          c = lr().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((f, y) => {
            if (typeof y == "string") {
              const h = y.replace(/-/g, "/"), [p, b, w] = h.split("/");
              if (p && b && w)
                return /* @__PURE__ */ new Date(`${w}-${b}-${p}`);
            }
            return f;
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
          c = Et().typeError("Must be a decimal").transform((f, y) => {
            if (y == null || y === "") return;
            const h = Number(y);
            if (isNaN(h)) return f;
            if (typeof f == "number" && !isNaN(f)) {
              const p = Number(f);
              return Number.isInteger(p) ? Number(h.toFixed(p)) : h;
            }
            return h;
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
            (f) => f && f.toUpperCase()
          );
          break;
        case "lower":
          c = c.transform(
            (f) => f && f.toLowerCase()
          );
          break;
        case "length-min": {
          const f = Number(u);
          isNaN(f) || (c = c.min(f, `Minimum length is ${f}`));
          break;
        }
        case "length-max": {
          const f = Number(u);
          isNaN(f) || (c = c.max(f, `Maximum length is ${f}`));
          break;
        }
      }
    }), r[s] = c;
  });
}, tr = (e) => !e || typeof e != "object" ? !1 : Object.values(e).every(
  (t) => typeof t == "object" && t !== null
);
function vs(e) {
  return typeof e == "object" && e !== null && typeof e.target == "string" && typeof e.src == "object" && e.src !== null && typeof e.src.table == "string";
}
function ws(e) {
  return e.split(",").map((t) => t.trim()).map((t) => {
    const r = t.match(/^(.+?)\s+as\s+.+$/i);
    return r ? r[1]?.trim() : t;
  }).filter((t) => !!t);
}
const Ir = (e, t) => {
  if (!e || t == null) return;
  const r = String(t);
  if (typeof Object.values(e)[0] == "string")
    return e[r];
  for (const a of Object.values(e))
    if (r in a)
      return a[r];
}, js = (e) => {
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
function Ts(e) {
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
function Es(e) {
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
function Ss(e = "") {
  return e.split(".").pop()?.toLowerCase() ?? "";
}
function _s(e) {
  return cs.includes(e) ? "image" : us.includes(e) ? "video" : fs.includes(e) ? "pdf" : ds.includes(e) ? "text" : "other";
}
const Rr = {
  image: "fa fa-file-image",
  pdf: "fa fa-file-pdf",
  video: "fa fa-file-video",
  text: "fa fa-file-lines",
  other: "fa fa-file"
}, Ns = ({ fileUrl: e, category: t }) => e ? t === "image" ? /* @__PURE__ */ i.jsx("img", { src: e, className: "max-h-[80vh] mx-auto" }) : t === "pdf" || t === "text" ? /* @__PURE__ */ i.jsx("iframe", { src: e, className: "w-full h-[80vh]" }) : t === "video" ? /* @__PURE__ */ i.jsx("video", { controls: !0, className: "w-full max-h-[80vh]", children: /* @__PURE__ */ i.jsx("source", { src: e }) }) : /* @__PURE__ */ i.jsxs("div", { className: "text-center p-4", children: [
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
async function $s({
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
      const h = he(o.where ?? {}, { refid: t });
      c = {
        ...o,
        table: o.table,
        cols: o.columns,
        where: h
      };
    }
    const { data: d } = await He(
      r,
      c,
      o.queryid,
      t
    ), u = Array.isArray(d?.data?.data) ? d.data.data : Array.isArray(d?.data) ? d.data : d, f = Array.isArray(u) ? u.map(me) : [], y = ve(
      e.valueKey ?? "value",
      e.labelKey ?? "title",
      f,
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
function Os(e) {
  const t = Rr[e] ?? Rr.other;
  return /* @__PURE__ */ i.jsx("i", { className: `${t} text-2xl text-gray-600` });
}
const Fs = ({ filePath: e, sqlOpsUrls: t }) => {
  const [r, n] = le(null), [a, s] = le(!1), o = Ss(e), c = _s(o);
  oe(() => {
    if (!t || c !== "image" && !a) return;
    let u = !0, f = null;
    return Dn(e, t).then((y) => {
      u && (f = y, n(y));
    }), () => {
      u = !1, f && URL.revokeObjectURL(f);
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
          Os(c),
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
      r ? /* @__PURE__ */ i.jsx(Ns, { fileUrl: r, category: c }) : /* @__PURE__ */ i.jsx("div", { className: "text-center p-8", children: "Loading preview…" })
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
  `, [f, y] = le(
    o ?? e.options ?? {}
  ), h = ee.useRef(!1);
  ee.useEffect(() => {
    o && y(o);
  }, [o]);
  const p = ee.useMemo(
    () => Ts(f),
    [f]
  );
  ee.useEffect(() => {
    let v = !0, S = e.valueKey ?? "value", O = e.labelKey ?? "title";
    return (async () => {
      if (e?.options) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const B = Object.values(e.options);
          if (B.length && typeof B[0] == "string") {
            y(e.options);
            return;
          }
        }
        const F = (Array.isArray(e.options) ? e.options : [e.options]).map(me), D = ve(
          S,
          O,
          F,
          e.groupKey
          // auto-uses `category` if present
        );
        y(D);
        return;
      }
      const j = e?.source ?? {};
      if (e.type === "dataMethod") {
        const _ = e.method, F = _ ? r[_] : void 0;
        if (F)
          try {
            const D = await Promise.resolve(F()), B = Array.isArray(D?.data?.data) ? D.data.data : Array.isArray(D?.data) ? D.data : D, k = Array.isArray(B) ? B.map(me) : [], L = ve(S, O, k, e.groupKey);
            v && y(L);
          } catch (D) {
            console.error("Method execution failed:", D), v && y({});
          }
        else
          v && y({});
      }
      if (j.type === "api" && j.url)
        try {
          const _ = await W({
            method: j.method || "GET",
            url: j.url,
            data: j.body ?? {},
            params: j.params ?? {},
            headers: j.headers ?? {}
          }), F = Array.isArray(_?.data?.data) ? _.data.data : Array.isArray(_?.data) ? _.data : _, D = Array.isArray(F) ? F.map(me) : [], B = ve(S, O, D, e.groupKey);
          v && y(B);
        } catch (_) {
          console.error("API execution failed:", _), v && y({});
        }
      if (e.table || e.type === "dataSelector" || e.queryid) {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let _;
          if (e.type === "dataSelector")
            _ = {
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
            _ = {
              table: e.table,
              cols: e.columns,
              where: e.where ? a ? he(e.where, { refid: a }) : e.where : void 0
            };
          }
          const F = await He(n, _, e?.queryid, void 0, s), D = Array.isArray(F?.data?.data) ? F.data.data : Array.isArray(F?.data) ? F.data : F, B = Array.isArray(D) ? D.map(me) : [], k = ve(S, O, B, e.groupKey);
          v && y(k);
        } catch (_) {
          console.error("API fetch failed:", _);
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
  const b = e?.name ? t?.[e.name] : void 0;
  ee.useEffect(() => {
    h.current || !c || !b || (h.current = !0, $s({
      field: e,
      value: b,
      sqlOpsUrls: n,
      setFieldOptions: c
    }));
  }, [b, n, c]);
  let w;
  typeof b == "string" ? e.type === "date" ? w = b.split("T")[0] : e.type === "time" ? w = b.includes("T") ? b.slice(11, 16) : b.slice(0, 5) : w = Cr(b, p) : w = Cr(b, p);
  const $ = w == null ? "" : typeof w == "string" || typeof w == "number" ? w : JSON.stringify(w), m = Es(b);
  return /* @__PURE__ */ i.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ i.jsx("label", { className: u, children: e?.label }),
    /* @__PURE__ */ i.jsx("div", { className: "relative", children: m ? m.type === "drawn" ? /* @__PURE__ */ i.jsx("svg", { viewBox: "0 0 300 150", className: "h-24 w-full border bg-white rounded", children: m.paths.map((v, S) => /* @__PURE__ */ i.jsx(
      "path",
      {
        d: v.d,
        stroke: v.color || "#000",
        strokeWidth: v.width || 2,
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      S
    )) }) : m.type === "text" ? /* @__PURE__ */ i.jsx("svg", { viewBox: "0 0 300 150", className: "h-24 w-full border bg-white rounded", children: /* @__PURE__ */ i.jsx(
      "text",
      {
        x: "10",
        y: "100",
        fontSize: m.data.style?.fontSize || 32,
        fontFamily: m.data.style?.fontFamily || "cursive",
        fill: m.data.style?.textColor || "#000",
        children: m.data.text
      }
    ) }) : m.type === "html" ? /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "border bg-white rounded p-2 text-sm",
        dangerouslySetInnerHTML: { __html: m.html }
      }
    ) : /* @__PURE__ */ i.jsx(
      "img",
      {
        src: `${n?.baseURL}${m.src}`,
        alt: "signature",
        className: "h-24 object-contain border bg-white rounded"
      }
    ) : (e.type === "file" || e.type === "attachement" || e.type === "photo" || e.type === "avatar") && w ? /* @__PURE__ */ i.jsx(Fs, { sqlOpsUrls: n, filePath: String(w) }) : /* @__PURE__ */ i.jsx("p", { className: d, children: $ }) })
  ] });
}
function Cs({ filePath: e, field_name: t, sqlOpsUrls: r }) {
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
        o.onerror = null, o.src = ls;
      }
    }
  ) : null;
}
function Is({
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
      const f = t[u.name];
      return typeof f != "string" || f.trim() === "" ? null : /* @__PURE__ */ i.jsx(Cs, { field_name: u.name, filePath: f, sqlOpsUrls: n });
    }) }) }),
    /* @__PURE__ */ i.jsx("div", { className: "lg:col-span-10 min-h-0 max-h-40  overflow-y-auto custom-scrollbar", children: /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-12 gap-2", children: e.fields?.map((u, f) => {
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
    let f = !1;
    return (async () => {
      const h = e?.config;
      if (!h?.type) {
        f || u(null);
        return;
      }
      if (h.type === "method") {
        const p = h.method, b = p ? t[p] : void 0;
        if (b)
          try {
            const w = await Promise.resolve(b());
            f || u(w || null);
          } catch (w) {
            console.error("Method execution failed:", w), f || u(null);
          }
        else
          f || u(null);
      }
      if (h.type === "api")
        try {
          const p = await W({
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
          f || u(p.data || null);
        } catch (p) {
          console.error("API fetch failed:", p), f || u(null);
        }
      if (h.type === "sql" && a && a != "0" || h?.dbopsid) {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let p = !1, b;
          h?.dbopsid && (p = !0, b = h?.dbopsid);
          const w = await W({
            method: "GET",
            url: n.baseURL + n.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          });
          if (!p) {
            let v = {
              ...h
            };
            h.where && (v = {
              ...h,
              where: he(h.where, {
                refid: a
              })
            }), b = (await W({
              method: "POST",
              url: n.baseURL + n.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: v,
                fields: $t(h.fields, n.operation),
                forcefill: h.forcefill,
                datahash: w.data.refhash,
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
              refid: b,
              datahash: w.data.refhash
            },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }), m = Pn($);
          f || u(m);
        } catch (p) {
          console.error("API fetch failed:", p);
        }
      }
    })(), () => {
      f = !0;
    };
  }, [
    e?.config?.type || "",
    e?.config?.method || "",
    e?.config?.url || "",
    JSON.stringify(e?.config?.params || {}),
    JSON.stringify(e?.config?.body || {}),
    JSON.stringify(e?.config?.headers || {})
  ]), /* @__PURE__ */ i.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-12 gap-2", children: d ? Object.keys(d).map((f, y) => {
    let h = { name: f, label: f };
    return /* @__PURE__ */ i.jsx(
      "div",
      {
        className: `col-span-12 sm:col-span-6 ${ct[ut(e.width)] || "lg:col-span-2"}`,
        children: /* @__PURE__ */ i.jsx(
          dt,
          {
            field: h,
            data: d ?? {},
            methods: t,
            refid: a,
            sqlOpsUrls: n,
            setFieldOptions: o,
            ...c[h.name] ? { optionsOverride: c[h.name] } : {}
          },
          f
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
function Rs({
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
var Ps = function(t) {
  return Ds(t) && !Ms(t);
};
function Ds(e) {
  return !!e && typeof e == "object";
}
function Ms(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || zs(e);
}
var ks = typeof Symbol == "function" && Symbol.for, Ls = ks ? Symbol.for("react.element") : 60103;
function zs(e) {
  return e.$$typeof === Ls;
}
function Vs(e) {
  return Array.isArray(e) ? [] : {};
}
function Ot(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? st(Vs(e), e, t) : e;
}
function Bs(e, t, r) {
  return e.concat(t).map(function(n) {
    return Ot(n, r);
  });
}
function Us(e, t, r) {
  var n = {};
  return r.isMergeableObject(e) && Object.keys(e).forEach(function(a) {
    n[a] = Ot(e[a], r);
  }), Object.keys(t).forEach(function(a) {
    !r.isMergeableObject(t[a]) || !e[a] ? n[a] = Ot(t[a], r) : n[a] = st(e[a], t[a], r);
  }), n;
}
function st(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || Bs, r.isMergeableObject = r.isMergeableObject || Ps;
  var n = Array.isArray(t), a = Array.isArray(e), s = n === a;
  return s ? n ? r.arrayMerge(e, t, r) : Us(e, t, r) : Ot(t, r);
}
st.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(n, a) {
    return st(n, a, r);
  }, {});
};
var rr = st, Mn = typeof global == "object" && global && global.Object === Object && global, Gs = typeof self == "object" && self && self.Object === Object && self, Ee = Mn || Gs || Function("return this")(), Fe = Ee.Symbol, kn = Object.prototype, qs = kn.hasOwnProperty, Ks = kn.toString, et = Fe ? Fe.toStringTag : void 0;
function Ys(e) {
  var t = qs.call(e, et), r = e[et];
  try {
    e[et] = void 0;
    var n = !0;
  } catch {
  }
  var a = Ks.call(e);
  return n && (t ? e[et] = r : delete e[et]), a;
}
var Hs = Object.prototype, Ws = Hs.toString;
function Zs(e) {
  return Ws.call(e);
}
var Qs = "[object Null]", Xs = "[object Undefined]", Pr = Fe ? Fe.toStringTag : void 0;
function ze(e) {
  return e == null ? e === void 0 ? Xs : Qs : Pr && Pr in Object(e) ? Ys(e) : Zs(e);
}
function Ln(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var ur = Ln(Object.getPrototypeOf, Object);
function Ve(e) {
  return e != null && typeof e == "object";
}
var Js = "[object Object]", ei = Function.prototype, ti = Object.prototype, zn = ei.toString, ri = ti.hasOwnProperty, ni = zn.call(Object);
function Dr(e) {
  if (!Ve(e) || ze(e) != Js)
    return !1;
  var t = ur(e);
  if (t === null)
    return !0;
  var r = ri.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && zn.call(r) == ni;
}
function ai() {
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
var si = Array.prototype, ii = si.splice;
function oi(e) {
  var t = this.__data__, r = Ct(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : ii.call(t, r, 1), --this.size, !0;
}
function li(e) {
  var t = this.__data__, r = Ct(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function ci(e) {
  return Ct(this.__data__, e) > -1;
}
function ui(e, t) {
  var r = this.__data__, n = Ct(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function $e(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
$e.prototype.clear = ai;
$e.prototype.delete = oi;
$e.prototype.get = li;
$e.prototype.has = ci;
$e.prototype.set = ui;
function di() {
  this.__data__ = new $e(), this.size = 0;
}
function fi(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function hi(e) {
  return this.__data__.get(e);
}
function pi(e) {
  return this.__data__.has(e);
}
function ft(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var mi = "[object AsyncFunction]", yi = "[object Function]", gi = "[object GeneratorFunction]", bi = "[object Proxy]";
function Bn(e) {
  if (!ft(e))
    return !1;
  var t = ze(e);
  return t == yi || t == gi || t == mi || t == bi;
}
var qt = Ee["__core-js_shared__"], Mr = function() {
  var e = /[^.]+$/.exec(qt && qt.keys && qt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function xi(e) {
  return !!Mr && Mr in e;
}
var vi = Function.prototype, wi = vi.toString;
function Be(e) {
  if (e != null) {
    try {
      return wi.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ji = /[\\^$.*+?()[\]{}|]/g, Ti = /^\[object .+?Constructor\]$/, Ei = Function.prototype, Si = Object.prototype, _i = Ei.toString, Ni = Si.hasOwnProperty, Ai = RegExp(
  "^" + _i.call(Ni).replace(ji, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function $i(e) {
  if (!ft(e) || xi(e))
    return !1;
  var t = Bn(e) ? Ai : Ti;
  return t.test(Be(e));
}
function Oi(e, t) {
  return e?.[t];
}
function Ue(e, t) {
  var r = Oi(e, t);
  return $i(r) ? r : void 0;
}
var it = Ue(Ee, "Map"), ot = Ue(Object, "create");
function Fi() {
  this.__data__ = ot ? ot(null) : {}, this.size = 0;
}
function Ci(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ii = "__lodash_hash_undefined__", Ri = Object.prototype, Pi = Ri.hasOwnProperty;
function Di(e) {
  var t = this.__data__;
  if (ot) {
    var r = t[e];
    return r === Ii ? void 0 : r;
  }
  return Pi.call(t, e) ? t[e] : void 0;
}
var Mi = Object.prototype, ki = Mi.hasOwnProperty;
function Li(e) {
  var t = this.__data__;
  return ot ? t[e] !== void 0 : ki.call(t, e);
}
var zi = "__lodash_hash_undefined__";
function Vi(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ot && t === void 0 ? zi : t, this;
}
function ke(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ke.prototype.clear = Fi;
ke.prototype.delete = Ci;
ke.prototype.get = Di;
ke.prototype.has = Li;
ke.prototype.set = Vi;
function Bi() {
  this.size = 0, this.__data__ = {
    hash: new ke(),
    map: new (it || $e)(),
    string: new ke()
  };
}
function Ui(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function It(e, t) {
  var r = e.__data__;
  return Ui(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Gi(e) {
  var t = It(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function qi(e) {
  return It(this, e).get(e);
}
function Ki(e) {
  return It(this, e).has(e);
}
function Yi(e, t) {
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
Ce.prototype.clear = Bi;
Ce.prototype.delete = Gi;
Ce.prototype.get = qi;
Ce.prototype.has = Ki;
Ce.prototype.set = Yi;
var Hi = 200;
function Wi(e, t) {
  var r = this.__data__;
  if (r instanceof $e) {
    var n = r.__data__;
    if (!it || n.length < Hi - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Ce(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Qe(e) {
  var t = this.__data__ = new $e(e);
  this.size = t.size;
}
Qe.prototype.clear = di;
Qe.prototype.delete = fi;
Qe.prototype.get = hi;
Qe.prototype.has = pi;
Qe.prototype.set = Wi;
function Zi(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var kr = function() {
  try {
    var e = Ue(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function Un(e, t, r) {
  t == "__proto__" && kr ? kr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Qi = Object.prototype, Xi = Qi.hasOwnProperty;
function Gn(e, t, r) {
  var n = e[t];
  (!(Xi.call(e, t) && Vn(n, r)) || r === void 0 && !(t in e)) && Un(e, t, r);
}
function Rt(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var s = -1, o = t.length; ++s < o; ) {
    var c = t[s], d = void 0;
    d === void 0 && (d = e[c]), a ? Un(r, c, d) : Gn(r, c, d);
  }
  return r;
}
function Ji(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var eo = "[object Arguments]";
function Lr(e) {
  return Ve(e) && ze(e) == eo;
}
var qn = Object.prototype, to = qn.hasOwnProperty, ro = qn.propertyIsEnumerable, no = Lr(/* @__PURE__ */ function() {
  return arguments;
}()) ? Lr : function(e) {
  return Ve(e) && to.call(e, "callee") && !ro.call(e, "callee");
}, ht = Array.isArray;
function ao() {
  return !1;
}
var Kn = typeof exports == "object" && exports && !exports.nodeType && exports, zr = Kn && typeof module == "object" && module && !module.nodeType && module, so = zr && zr.exports === Kn, Vr = so ? Ee.Buffer : void 0, io = Vr ? Vr.isBuffer : void 0, Yn = io || ao, oo = 9007199254740991, lo = /^(?:0|[1-9]\d*)$/;
function co(e, t) {
  var r = typeof e;
  return t = t ?? oo, !!t && (r == "number" || r != "symbol" && lo.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var uo = 9007199254740991;
function Hn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= uo;
}
var fo = "[object Arguments]", ho = "[object Array]", po = "[object Boolean]", mo = "[object Date]", yo = "[object Error]", go = "[object Function]", bo = "[object Map]", xo = "[object Number]", vo = "[object Object]", wo = "[object RegExp]", jo = "[object Set]", To = "[object String]", Eo = "[object WeakMap]", So = "[object ArrayBuffer]", _o = "[object DataView]", No = "[object Float32Array]", Ao = "[object Float64Array]", $o = "[object Int8Array]", Oo = "[object Int16Array]", Fo = "[object Int32Array]", Co = "[object Uint8Array]", Io = "[object Uint8ClampedArray]", Ro = "[object Uint16Array]", Po = "[object Uint32Array]", J = {};
J[No] = J[Ao] = J[$o] = J[Oo] = J[Fo] = J[Co] = J[Io] = J[Ro] = J[Po] = !0;
J[fo] = J[ho] = J[So] = J[po] = J[_o] = J[mo] = J[yo] = J[go] = J[bo] = J[xo] = J[vo] = J[wo] = J[jo] = J[To] = J[Eo] = !1;
function Do(e) {
  return Ve(e) && Hn(e.length) && !!J[ze(e)];
}
function dr(e) {
  return function(t) {
    return e(t);
  };
}
var Wn = typeof exports == "object" && exports && !exports.nodeType && exports, nt = Wn && typeof module == "object" && module && !module.nodeType && module, Mo = nt && nt.exports === Wn, Kt = Mo && Mn.process, Ze = function() {
  try {
    var e = nt && nt.require && nt.require("util").types;
    return e || Kt && Kt.binding && Kt.binding("util");
  } catch {
  }
}(), Br = Ze && Ze.isTypedArray, ko = Br ? dr(Br) : Do, Lo = Object.prototype, zo = Lo.hasOwnProperty;
function Zn(e, t) {
  var r = ht(e), n = !r && no(e), a = !r && !n && Yn(e), s = !r && !n && !a && ko(e), o = r || n || a || s, c = o ? Ji(e.length, String) : [], d = c.length;
  for (var u in e)
    (t || zo.call(e, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    co(u, d))) && c.push(u);
  return c;
}
var Vo = Object.prototype;
function fr(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Vo;
  return e === r;
}
var Bo = Ln(Object.keys, Object), Uo = Object.prototype, Go = Uo.hasOwnProperty;
function qo(e) {
  if (!fr(e))
    return Bo(e);
  var t = [];
  for (var r in Object(e))
    Go.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function Qn(e) {
  return e != null && Hn(e.length) && !Bn(e);
}
function hr(e) {
  return Qn(e) ? Zn(e) : qo(e);
}
function Ko(e, t) {
  return e && Rt(t, hr(t), e);
}
function Yo(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Ho = Object.prototype, Wo = Ho.hasOwnProperty;
function Zo(e) {
  if (!ft(e))
    return Yo(e);
  var t = fr(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Wo.call(e, n)) || r.push(n);
  return r;
}
function pr(e) {
  return Qn(e) ? Zn(e, !0) : Zo(e);
}
function Qo(e, t) {
  return e && Rt(t, pr(t), e);
}
var Xn = typeof exports == "object" && exports && !exports.nodeType && exports, Ur = Xn && typeof module == "object" && module && !module.nodeType && module, Xo = Ur && Ur.exports === Xn, Gr = Xo ? Ee.Buffer : void 0, qr = Gr ? Gr.allocUnsafe : void 0;
function Jo(e, t) {
  if (t)
    return e.slice();
  var r = e.length, n = qr ? qr(r) : new e.constructor(r);
  return e.copy(n), n;
}
function Jn(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
function el(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, s = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (s[a++] = o);
  }
  return s;
}
function ea() {
  return [];
}
var tl = Object.prototype, rl = tl.propertyIsEnumerable, Kr = Object.getOwnPropertySymbols, mr = Kr ? function(e) {
  return e == null ? [] : (e = Object(e), el(Kr(e), function(t) {
    return rl.call(e, t);
  }));
} : ea;
function nl(e, t) {
  return Rt(e, mr(e), t);
}
function ta(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var al = Object.getOwnPropertySymbols, ra = al ? function(e) {
  for (var t = []; e; )
    ta(t, mr(e)), e = ur(e);
  return t;
} : ea;
function sl(e, t) {
  return Rt(e, ra(e), t);
}
function na(e, t, r) {
  var n = t(e);
  return ht(e) ? n : ta(n, r(e));
}
function il(e) {
  return na(e, hr, mr);
}
function ol(e) {
  return na(e, pr, ra);
}
var nr = Ue(Ee, "DataView"), ar = Ue(Ee, "Promise"), sr = Ue(Ee, "Set"), ir = Ue(Ee, "WeakMap"), Yr = "[object Map]", ll = "[object Object]", Hr = "[object Promise]", Wr = "[object Set]", Zr = "[object WeakMap]", Qr = "[object DataView]", cl = Be(nr), ul = Be(it), dl = Be(ar), fl = Be(sr), hl = Be(ir), _e = ze;
(nr && _e(new nr(new ArrayBuffer(1))) != Qr || it && _e(new it()) != Yr || ar && _e(ar.resolve()) != Hr || sr && _e(new sr()) != Wr || ir && _e(new ir()) != Zr) && (_e = function(e) {
  var t = ze(e), r = t == ll ? e.constructor : void 0, n = r ? Be(r) : "";
  if (n)
    switch (n) {
      case cl:
        return Qr;
      case ul:
        return Yr;
      case dl:
        return Hr;
      case fl:
        return Wr;
      case hl:
        return Zr;
    }
  return t;
});
var pl = Object.prototype, ml = pl.hasOwnProperty;
function yl(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && ml.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var Xr = Ee.Uint8Array;
function yr(e) {
  var t = new e.constructor(e.byteLength);
  return new Xr(t).set(new Xr(e)), t;
}
function gl(e, t) {
  var r = t ? yr(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var bl = /\w*$/;
function xl(e) {
  var t = new e.constructor(e.source, bl.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Jr = Fe ? Fe.prototype : void 0, en = Jr ? Jr.valueOf : void 0;
function vl(e) {
  return en ? Object(en.call(e)) : {};
}
function wl(e, t) {
  var r = t ? yr(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var jl = "[object Boolean]", Tl = "[object Date]", El = "[object Map]", Sl = "[object Number]", _l = "[object RegExp]", Nl = "[object Set]", Al = "[object String]", $l = "[object Symbol]", Ol = "[object ArrayBuffer]", Fl = "[object DataView]", Cl = "[object Float32Array]", Il = "[object Float64Array]", Rl = "[object Int8Array]", Pl = "[object Int16Array]", Dl = "[object Int32Array]", Ml = "[object Uint8Array]", kl = "[object Uint8ClampedArray]", Ll = "[object Uint16Array]", zl = "[object Uint32Array]";
function Vl(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case Ol:
      return yr(e);
    case jl:
    case Tl:
      return new n(+e);
    case Fl:
      return gl(e, r);
    case Cl:
    case Il:
    case Rl:
    case Pl:
    case Dl:
    case Ml:
    case kl:
    case Ll:
    case zl:
      return wl(e, r);
    case El:
      return new n();
    case Sl:
    case Al:
      return new n(e);
    case _l:
      return xl(e);
    case Nl:
      return new n();
    case $l:
      return vl(e);
  }
}
var tn = Object.create, Bl = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!ft(t))
      return {};
    if (tn)
      return tn(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function Ul(e) {
  return typeof e.constructor == "function" && !fr(e) ? Bl(ur(e)) : {};
}
var Gl = "[object Map]";
function ql(e) {
  return Ve(e) && _e(e) == Gl;
}
var rn = Ze && Ze.isMap, Kl = rn ? dr(rn) : ql, Yl = "[object Set]";
function Hl(e) {
  return Ve(e) && _e(e) == Yl;
}
var nn = Ze && Ze.isSet, Wl = nn ? dr(nn) : Hl, Zl = 1, Ql = 2, Xl = 4, aa = "[object Arguments]", Jl = "[object Array]", ec = "[object Boolean]", tc = "[object Date]", rc = "[object Error]", sa = "[object Function]", nc = "[object GeneratorFunction]", ac = "[object Map]", sc = "[object Number]", ia = "[object Object]", ic = "[object RegExp]", oc = "[object Set]", lc = "[object String]", cc = "[object Symbol]", uc = "[object WeakMap]", dc = "[object ArrayBuffer]", fc = "[object DataView]", hc = "[object Float32Array]", pc = "[object Float64Array]", mc = "[object Int8Array]", yc = "[object Int16Array]", gc = "[object Int32Array]", bc = "[object Uint8Array]", xc = "[object Uint8ClampedArray]", vc = "[object Uint16Array]", wc = "[object Uint32Array]", Q = {};
Q[aa] = Q[Jl] = Q[dc] = Q[fc] = Q[ec] = Q[tc] = Q[hc] = Q[pc] = Q[mc] = Q[yc] = Q[gc] = Q[ac] = Q[sc] = Q[ia] = Q[ic] = Q[oc] = Q[lc] = Q[cc] = Q[bc] = Q[xc] = Q[vc] = Q[wc] = !0;
Q[rc] = Q[sa] = Q[uc] = !1;
function at(e, t, r, n, a, s) {
  var o, c = t & Zl, d = t & Ql, u = t & Xl;
  if (o !== void 0)
    return o;
  if (!ft(e))
    return e;
  var f = ht(e);
  if (f) {
    if (o = yl(e), !c)
      return Jn(e, o);
  } else {
    var y = _e(e), h = y == sa || y == nc;
    if (Yn(e))
      return Jo(e, c);
    if (y == ia || y == aa || h && !a) {
      if (o = d || h ? {} : Ul(e), !c)
        return d ? sl(e, Qo(o, e)) : nl(e, Ko(o, e));
    } else {
      if (!Q[y])
        return a ? e : {};
      o = Vl(e, y, c);
    }
  }
  s || (s = new Qe());
  var p = s.get(e);
  if (p)
    return p;
  s.set(e, o), Wl(e) ? e.forEach(function($) {
    o.add(at($, t, r, $, e, s));
  }) : Kl(e) && e.forEach(function($, m) {
    o.set(m, at($, t, r, m, e, s));
  });
  var b = u ? d ? ol : il : d ? pr : hr, w = f ? void 0 : b(e);
  return Zi(w || e, function($, m) {
    w && (m = $, $ = e[m]), Gn(o, m, at($, t, r, m, e, s));
  }), o;
}
var jc = 1, Tc = 4;
function bt(e) {
  return at(e, jc | Tc);
}
var Yt, an;
function Ec() {
  if (an) return Yt;
  an = 1;
  var e = Array.isArray, t = Object.keys, r = Object.prototype.hasOwnProperty, n = typeof Element < "u";
  function a(s, o) {
    if (s === o) return !0;
    if (s && o && typeof s == "object" && typeof o == "object") {
      var c = e(s), d = e(o), u, f, y;
      if (c && d) {
        if (f = s.length, f != o.length) return !1;
        for (u = f; u-- !== 0; )
          if (!a(s[u], o[u])) return !1;
        return !0;
      }
      if (c != d) return !1;
      var h = s instanceof Date, p = o instanceof Date;
      if (h != p) return !1;
      if (h && p) return s.getTime() == o.getTime();
      var b = s instanceof RegExp, w = o instanceof RegExp;
      if (b != w) return !1;
      if (b && w) return s.toString() == o.toString();
      var $ = t(s);
      if (f = $.length, f !== t(o).length)
        return !1;
      for (u = f; u-- !== 0; )
        if (!r.call(o, $[u])) return !1;
      if (n && s instanceof Element && o instanceof Element)
        return s === o;
      for (u = f; u-- !== 0; )
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
var Sc = Ec();
const Pe = /* @__PURE__ */ bn(Sc);
var _c = process.env.NODE_ENV === "production";
function We(e, t) {
  if (!_c) {
    var r = "Warning: " + t;
    typeof console < "u" && console.warn(r);
    try {
      throw Error(r);
    } catch {
    }
  }
}
var Nc = 4;
function sn(e) {
  return at(e, Nc);
}
function oa(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var Ac = "[object Symbol]";
function gr(e) {
  return typeof e == "symbol" || Ve(e) && ze(e) == Ac;
}
var $c = "Expected a function";
function br(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError($c);
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
var Oc = 500;
function Fc(e) {
  var t = br(e, function(n) {
    return r.size === Oc && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Cc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ic = /\\(\\)?/g, Rc = Fc(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Cc, function(r, n, a, s) {
    t.push(a ? s.replace(Ic, "$1") : n || r);
  }), t;
});
function Pc(e) {
  if (typeof e == "string" || gr(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var on = Fe ? Fe.prototype : void 0, ln = on ? on.toString : void 0;
function la(e) {
  if (typeof e == "string")
    return e;
  if (ht(e))
    return oa(e, la) + "";
  if (gr(e))
    return ln ? ln.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Dc(e) {
  return e == null ? "" : la(e);
}
function ca(e) {
  return ht(e) ? oa(e, Pc) : gr(e) ? [e] : Jn(Rc(Dc(e)));
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
var cn;
function Mc() {
  if (cn) return Y;
  cn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, $ = e ? Symbol.for("react.fundamental") : 60117, m = e ? Symbol.for("react.responder") : 60118, v = e ? Symbol.for("react.scope") : 60119;
  function S(l) {
    if (typeof l == "object" && l !== null) {
      var j = l.$$typeof;
      switch (j) {
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
                case f:
                case b:
                case p:
                case o:
                  return l;
                default:
                  return j;
              }
          }
        case r:
          return j;
      }
    }
  }
  function O(l) {
    return S(l) === u;
  }
  return Y.AsyncMode = d, Y.ConcurrentMode = u, Y.ContextConsumer = c, Y.ContextProvider = o, Y.Element = t, Y.ForwardRef = f, Y.Fragment = n, Y.Lazy = b, Y.Memo = p, Y.Portal = r, Y.Profiler = s, Y.StrictMode = a, Y.Suspense = y, Y.isAsyncMode = function(l) {
    return O(l) || S(l) === d;
  }, Y.isConcurrentMode = O, Y.isContextConsumer = function(l) {
    return S(l) === c;
  }, Y.isContextProvider = function(l) {
    return S(l) === o;
  }, Y.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === t;
  }, Y.isForwardRef = function(l) {
    return S(l) === f;
  }, Y.isFragment = function(l) {
    return S(l) === n;
  }, Y.isLazy = function(l) {
    return S(l) === b;
  }, Y.isMemo = function(l) {
    return S(l) === p;
  }, Y.isPortal = function(l) {
    return S(l) === r;
  }, Y.isProfiler = function(l) {
    return S(l) === s;
  }, Y.isStrictMode = function(l) {
    return S(l) === a;
  }, Y.isSuspense = function(l) {
    return S(l) === y;
  }, Y.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === n || l === u || l === s || l === a || l === y || l === h || typeof l == "object" && l !== null && (l.$$typeof === b || l.$$typeof === p || l.$$typeof === o || l.$$typeof === c || l.$$typeof === f || l.$$typeof === $ || l.$$typeof === m || l.$$typeof === v || l.$$typeof === w);
  }, Y.typeOf = S, Y;
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
var un;
function kc() {
  return un || (un = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, $ = e ? Symbol.for("react.fundamental") : 60117, m = e ? Symbol.for("react.responder") : 60118, v = e ? Symbol.for("react.scope") : 60119;
    function S(M) {
      return typeof M == "string" || typeof M == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      M === n || M === u || M === s || M === a || M === y || M === h || typeof M == "object" && M !== null && (M.$$typeof === b || M.$$typeof === p || M.$$typeof === o || M.$$typeof === c || M.$$typeof === f || M.$$typeof === $ || M.$$typeof === m || M.$$typeof === v || M.$$typeof === w);
    }
    function O(M) {
      if (typeof M == "object" && M !== null) {
        var Ge = M.$$typeof;
        switch (Ge) {
          case t:
            var qe = M.type;
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
                  case f:
                  case b:
                  case p:
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
    var l = d, j = u, _ = c, F = o, D = t, B = f, k = n, L = b, q = p, re = r, X = s, z = a, Z = y, T = !1;
    function N(M) {
      return T || (T = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), x(M) || O(M) === d;
    }
    function x(M) {
      return O(M) === u;
    }
    function E(M) {
      return O(M) === c;
    }
    function A(M) {
      return O(M) === o;
    }
    function P(M) {
      return typeof M == "object" && M !== null && M.$$typeof === t;
    }
    function I(M) {
      return O(M) === f;
    }
    function U(M) {
      return O(M) === n;
    }
    function ne(M) {
      return O(M) === b;
    }
    function ce(M) {
      return O(M) === p;
    }
    function te(M) {
      return O(M) === r;
    }
    function pe(M) {
      return O(M) === s;
    }
    function we(M) {
      return O(M) === a;
    }
    function Ie(M) {
      return O(M) === y;
    }
    H.AsyncMode = l, H.ConcurrentMode = j, H.ContextConsumer = _, H.ContextProvider = F, H.Element = D, H.ForwardRef = B, H.Fragment = k, H.Lazy = L, H.Memo = q, H.Portal = re, H.Profiler = X, H.StrictMode = z, H.Suspense = Z, H.isAsyncMode = N, H.isConcurrentMode = x, H.isContextConsumer = E, H.isContextProvider = A, H.isElement = P, H.isForwardRef = I, H.isFragment = U, H.isLazy = ne, H.isMemo = ce, H.isPortal = te, H.isProfiler = pe, H.isStrictMode = we, H.isSuspense = Ie, H.isValidElementType = S, H.typeOf = O;
  }()), H;
}
var dn;
function Lc() {
  return dn || (dn = 1, process.env.NODE_ENV === "production" ? xt.exports = Mc() : xt.exports = kc()), xt.exports;
}
var Ht, fn;
function zc() {
  if (fn) return Ht;
  fn = 1;
  var e = Lc(), t = {
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
  function o(b) {
    return e.isMemo(b) ? a : s[b.$$typeof] || t;
  }
  var c = Object.defineProperty, d = Object.getOwnPropertyNames, u = Object.getOwnPropertySymbols, f = Object.getOwnPropertyDescriptor, y = Object.getPrototypeOf, h = Object.prototype;
  function p(b, w, $) {
    if (typeof w != "string") {
      if (h) {
        var m = y(w);
        m && m !== h && p(b, m, $);
      }
      var v = d(w);
      u && (v = v.concat(u(w)));
      for (var S = o(b), O = o(w), l = 0; l < v.length; ++l) {
        var j = v[l];
        if (!r[j] && !($ && $[j]) && !(O && O[j]) && !(S && S[j])) {
          var _ = f(w, j);
          try {
            c(b, j, _);
          } catch {
          }
        }
      }
    }
    return b;
  }
  return Ht = p, Ht;
}
zc();
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
function ua(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, s;
  for (s = 0; s < n.length; s++)
    a = n[s], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var Pt = /* @__PURE__ */ va(void 0);
Pt.displayName = "FormikContext";
Pt.Provider;
Pt.Consumer;
function Vc() {
  var e = Ta(Pt);
  return e || (process.env.NODE_ENV !== "production" ? We(!1, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.") : We()), e;
}
var be = function(t) {
  return typeof t == "function";
}, Dt = function(t) {
  return t !== null && typeof t == "object";
}, Bc = function(t) {
  return String(Math.floor(Number(t))) === t;
}, Wt = function(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}, Zt = function(t) {
  return Dt(t) && be(t.then);
};
function Uc(e) {
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
  for (var a = ca(t); e && n < a.length; )
    e = e[a[n++]];
  return n !== a.length && !e || e === void 0 ? r : e;
}
function Me(e, t, r) {
  for (var n = sn(e), a = n, s = 0, o = ca(t); s < o.length - 1; s++) {
    var c = o[s], d = fe(e, o.slice(0, s + 1));
    if (d && (Dt(d) || Array.isArray(d)))
      a = a[c] = sn(d);
    else {
      var u = o[s + 1];
      a = a[c] = Bc(u) && Number(u) >= 0 ? [] : {};
    }
  }
  return (s === 0 ? e : a)[o[s]] === r ? e : (r === void 0 ? delete a[o[s]] : a[o[s]] = r, s === 0 && r === void 0 && delete n[o[s]], n);
}
function da(e, t, r, n) {
  r === void 0 && (r = /* @__PURE__ */ new WeakMap()), n === void 0 && (n = {});
  for (var a = 0, s = Object.keys(e); a < s.length; a++) {
    var o = s[a], c = e[o];
    Dt(c) ? r.get(c) || (r.set(c, !0), n[o] = Array.isArray(c) ? [] : {}, da(c, t, r, n[o])) : n[o] = t;
  }
  return n;
}
function Gc(e, t) {
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
        values: Me(e.values, t.payload.field, t.payload.value)
      });
    case "SET_FIELD_TOUCHED":
      return ie({}, e, {
        touched: Me(e.touched, t.payload.field, t.payload.value)
      });
    case "SET_FIELD_ERROR":
      return ie({}, e, {
        errors: Me(e.errors, t.payload.field, t.payload.value)
      });
    case "RESET_FORM":
      return ie({}, e, t.payload);
    case "SET_FORMIK_STATE":
      return t.payload(e);
    case "SUBMIT_ATTEMPT":
      return ie({}, e, {
        touched: da(e.values, !0),
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
function qc(e) {
  var t = e.validateOnChange, r = t === void 0 ? !0 : t, n = e.validateOnBlur, a = n === void 0 ? !0 : n, s = e.validateOnMount, o = s === void 0 ? !1 : s, c = e.isInitialValid, d = e.enableReinitialize, u = d === void 0 ? !1 : d, f = e.onSubmit, y = ua(e, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]), h = ie({
    validateOnChange: r,
    validateOnBlur: a,
    validateOnMount: o,
    onSubmit: f
  }, y), p = xe(h.initialValues), b = xe(h.initialErrors || Re), w = xe(h.initialTouched || vt), $ = xe(h.initialStatus), m = xe(!1), v = xe({});
  process.env.NODE_ENV !== "production" && oe(function() {
    typeof c > "u" || (process.env.NODE_ENV !== "production" ? We(!1, "isInitialValid has been deprecated and will be removed in future versions of Formik. Please use initialErrors or validateOnMount instead.") : We());
  }, []), oe(function() {
    return m.current = !0, function() {
      m.current = !1;
    };
  }, []);
  var S = le(0), O = S[1], l = xe({
    values: bt(h.initialValues),
    errors: bt(h.initialErrors) || Re,
    touched: bt(h.initialTouched) || vt,
    status: bt(h.initialStatus),
    isSubmitting: !1,
    isValidating: !1,
    submitCount: 0
  }), j = l.current, _ = ae(function(g) {
    var C = l.current;
    l.current = Gc(C, g), C !== l.current && O(function(R) {
      return R + 1;
    });
  }, []), F = ae(function(g, C) {
    return new Promise(function(R, V) {
      var G = h.validate(g, C);
      G == null ? R(Re) : Zt(G) ? G.then(function(K) {
        R(K || Re);
      }, function(K) {
        process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validate />", K), V(K);
      }) : R(G);
    });
  }, [h.validate]), D = ae(function(g, C) {
    var R = h.validationSchema, V = be(R) ? R(C) : R, G = C && V.validateAt ? V.validateAt(C, g) : Yc(g, V);
    return new Promise(function(K, se) {
      G.then(function() {
        K(Re);
      }, function(je) {
        je.name === "ValidationError" ? K(Kc(je)) : (process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validationSchema />", je), se(je));
      });
    });
  }, [h.validationSchema]), B = ae(function(g, C) {
    return new Promise(function(R) {
      return R(v.current[g].validate(C));
    });
  }, []), k = ae(function(g) {
    var C = Object.keys(v.current).filter(function(V) {
      return be(v.current[V].validate);
    }), R = C.length > 0 ? C.map(function(V) {
      return B(V, fe(g, V));
    }) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
    return Promise.all(R).then(function(V) {
      return V.reduce(function(G, K, se) {
        return K === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || K && (G = Me(G, C[se], K)), G;
      }, {});
    });
  }, [B]), L = ae(function(g) {
    return Promise.all([k(g), h.validationSchema ? D(g) : {}, h.validate ? F(g) : {}]).then(function(C) {
      var R = C[0], V = C[1], G = C[2], K = rr.all([R, V, G], {
        arrayMerge: Hc
      });
      return K;
    });
  }, [h.validate, h.validationSchema, k, F, D]), q = ge(function(g) {
    return g === void 0 && (g = j.values), _({
      type: "SET_ISVALIDATING",
      payload: !0
    }), L(g).then(function(C) {
      return m.current && (_({
        type: "SET_ISVALIDATING",
        payload: !1
      }), _({
        type: "SET_ERRORS",
        payload: C
      })), C;
    });
  });
  oe(function() {
    o && m.current === !0 && Pe(p.current, h.initialValues) && q(p.current);
  }, [o, q]);
  var re = ae(function(g) {
    var C = g && g.values ? g.values : p.current, R = g && g.errors ? g.errors : b.current ? b.current : h.initialErrors || {}, V = g && g.touched ? g.touched : w.current ? w.current : h.initialTouched || {}, G = g && g.status ? g.status : $.current ? $.current : h.initialStatus;
    p.current = C, b.current = R, w.current = V, $.current = G;
    var K = function() {
      _({
        type: "RESET_FORM",
        payload: {
          isSubmitting: !!g && !!g.isSubmitting,
          errors: R,
          touched: V,
          status: G,
          values: C,
          isValidating: !!g && !!g.isValidating,
          submitCount: g && g.submitCount && typeof g.submitCount == "number" ? g.submitCount : 0
        }
      });
    };
    if (h.onReset) {
      var se = h.onReset(j.values, Ge);
      Zt(se) ? se.then(K) : K();
    } else
      K();
  }, [h.initialErrors, h.initialStatus, h.initialTouched, h.onReset]);
  oe(function() {
    m.current === !0 && !Pe(p.current, h.initialValues) && u && (p.current = h.initialValues, re(), o && q(p.current));
  }, [u, h.initialValues, re, o, q]), oe(function() {
    u && m.current === !0 && !Pe(b.current, h.initialErrors) && (b.current = h.initialErrors || Re, _({
      type: "SET_ERRORS",
      payload: h.initialErrors || Re
    }));
  }, [u, h.initialErrors]), oe(function() {
    u && m.current === !0 && !Pe(w.current, h.initialTouched) && (w.current = h.initialTouched || vt, _({
      type: "SET_TOUCHED",
      payload: h.initialTouched || vt
    }));
  }, [u, h.initialTouched]), oe(function() {
    u && m.current === !0 && !Pe($.current, h.initialStatus) && ($.current = h.initialStatus, _({
      type: "SET_STATUS",
      payload: h.initialStatus
    }));
  }, [u, h.initialStatus, h.initialTouched]);
  var X = ge(function(g) {
    if (v.current[g] && be(v.current[g].validate)) {
      var C = fe(j.values, g), R = v.current[g].validate(C);
      return Zt(R) ? (_({
        type: "SET_ISVALIDATING",
        payload: !0
      }), R.then(function(V) {
        return V;
      }).then(function(V) {
        _({
          type: "SET_FIELD_ERROR",
          payload: {
            field: g,
            value: V
          }
        }), _({
          type: "SET_ISVALIDATING",
          payload: !1
        });
      })) : (_({
        type: "SET_FIELD_ERROR",
        payload: {
          field: g,
          value: R
        }
      }), Promise.resolve(R));
    } else if (h.validationSchema)
      return _({
        type: "SET_ISVALIDATING",
        payload: !0
      }), D(j.values, g).then(function(V) {
        return V;
      }).then(function(V) {
        _({
          type: "SET_FIELD_ERROR",
          payload: {
            field: g,
            value: fe(V, g)
          }
        }), _({
          type: "SET_ISVALIDATING",
          payload: !1
        });
      });
    return Promise.resolve();
  }), z = ae(function(g, C) {
    var R = C.validate;
    v.current[g] = {
      validate: R
    };
  }, []), Z = ae(function(g) {
    delete v.current[g];
  }, []), T = ge(function(g, C) {
    _({
      type: "SET_TOUCHED",
      payload: g
    });
    var R = C === void 0 ? a : C;
    return R ? q(j.values) : Promise.resolve();
  }), N = ae(function(g) {
    _({
      type: "SET_ERRORS",
      payload: g
    });
  }, []), x = ge(function(g, C) {
    var R = be(g) ? g(j.values) : g;
    _({
      type: "SET_VALUES",
      payload: R
    });
    var V = C === void 0 ? r : C;
    return V ? q(R) : Promise.resolve();
  }), E = ae(function(g, C) {
    _({
      type: "SET_FIELD_ERROR",
      payload: {
        field: g,
        value: C
      }
    });
  }, []), A = ge(function(g, C, R) {
    var V = be(C) ? C(fe(j.values, g)) : C;
    _({
      type: "SET_FIELD_VALUE",
      payload: {
        field: g,
        value: V
      }
    });
    var G = R === void 0 ? r : R;
    return G ? q(Me(j.values, g, V)) : Promise.resolve();
  }), P = ae(function(g, C) {
    var R = C, V = g, G;
    if (!Wt(g)) {
      g.persist && g.persist();
      var K = g.target ? g.target : g.currentTarget, se = K.type, je = K.name, kt = K.id, Lt = K.value, ga = K.checked, ba = K.outerHTML, vr = K.options, xa = K.multiple;
      R = C || je || kt, !R && process.env.NODE_ENV !== "production" && hn({
        htmlContent: ba,
        documentationAnchorLink: "handlechange-e-reactchangeeventany--void",
        handlerName: "handleChange"
      }), V = /number|range/.test(se) ? (G = parseFloat(Lt), isNaN(G) ? "" : G) : /checkbox/.test(se) ? Zc(fe(j.values, R), ga, Lt) : vr && xa ? Wc(vr) : Lt;
    }
    R && A(R, V);
  }, [A, j.values]), I = ge(function(g) {
    if (Wt(g))
      return function(C) {
        return P(C, g);
      };
    P(g);
  }), U = ge(function(g, C, R) {
    C === void 0 && (C = !0), _({
      type: "SET_FIELD_TOUCHED",
      payload: {
        field: g,
        value: C
      }
    });
    var V = R === void 0 ? a : R;
    return V ? q(j.values) : Promise.resolve();
  }), ne = ae(function(g, C) {
    g.persist && g.persist();
    var R = g.target, V = R.name, G = R.id, K = R.outerHTML, se = C || V || G;
    !se && process.env.NODE_ENV !== "production" && hn({
      htmlContent: K,
      documentationAnchorLink: "handleblur-e-any--void",
      handlerName: "handleBlur"
    }), U(se, !0);
  }, [U]), ce = ge(function(g) {
    if (Wt(g))
      return function(C) {
        return ne(C, g);
      };
    ne(g);
  }), te = ae(function(g) {
    be(g) ? _({
      type: "SET_FORMIK_STATE",
      payload: g
    }) : _({
      type: "SET_FORMIK_STATE",
      payload: function() {
        return g;
      }
    });
  }, []), pe = ae(function(g) {
    _({
      type: "SET_STATUS",
      payload: g
    });
  }, []), we = ae(function(g) {
    _({
      type: "SET_ISSUBMITTING",
      payload: g
    });
  }, []), Ie = ge(function() {
    return _({
      type: "SUBMIT_ATTEMPT"
    }), q().then(function(g) {
      var C = g instanceof Error, R = !C && Object.keys(g).length === 0;
      if (R) {
        var V;
        try {
          if (V = qe(), V === void 0)
            return;
        } catch (G) {
          throw G;
        }
        return Promise.resolve(V).then(function(G) {
          return m.current && _({
            type: "SUBMIT_SUCCESS"
          }), G;
        }).catch(function(G) {
          if (m.current)
            throw _({
              type: "SUBMIT_FAILURE"
            }), G;
        });
      } else if (m.current && (_({
        type: "SUBMIT_FAILURE"
      }), C))
        throw g;
    });
  }), M = ge(function(g) {
    if (g && g.preventDefault && be(g.preventDefault) && g.preventDefault(), g && g.stopPropagation && be(g.stopPropagation) && g.stopPropagation(), process.env.NODE_ENV !== "production" && typeof document < "u") {
      var C = Uc();
      C !== null && C instanceof HTMLButtonElement && (C.attributes && C.attributes.getNamedItem("type") || (process.env.NODE_ENV !== "production" ? We(!1, 'You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type="submit"`. If this is not a submit button, please add `type="button"`.') : We()));
    }
    Ie().catch(function(R) {
      console.warn("Warning: An unhandled error was caught from submitForm()", R);
    });
  }), Ge = {
    resetForm: re,
    validateForm: q,
    validateField: X,
    setErrors: N,
    setFieldError: E,
    setFieldTouched: U,
    setFieldValue: A,
    setStatus: pe,
    setSubmitting: we,
    setTouched: T,
    setValues: x,
    setFormikState: te,
    submitForm: Ie
  }, qe = ge(function() {
    return f(j.values, Ge);
  }), pt = ge(function(g) {
    g && g.preventDefault && be(g.preventDefault) && g.preventDefault(), g && g.stopPropagation && be(g.stopPropagation) && g.stopPropagation(), re();
  }), fa = ae(function(g) {
    return {
      value: fe(j.values, g),
      error: fe(j.errors, g),
      touched: !!fe(j.touched, g),
      initialValue: fe(p.current, g),
      initialTouched: !!fe(w.current, g),
      initialError: fe(b.current, g)
    };
  }, [j.errors, j.touched, j.values]), ha = ae(function(g) {
    return {
      setValue: function(R, V) {
        return A(g, R, V);
      },
      setTouched: function(R, V) {
        return U(g, R, V);
      },
      setError: function(R) {
        return E(g, R);
      }
    };
  }, [A, U, E]), pa = ae(function(g) {
    var C = Dt(g), R = C ? g.name : g, V = fe(j.values, R), G = {
      name: R,
      value: V,
      onChange: I,
      onBlur: ce
    };
    if (C) {
      var K = g.type, se = g.value, je = g.as, kt = g.multiple;
      K === "checkbox" ? se === void 0 ? G.checked = !!V : (G.checked = !!(Array.isArray(V) && ~V.indexOf(se)), G.value = se) : K === "radio" ? (G.checked = V === se, G.value = se) : je === "select" && kt && (G.value = G.value || [], G.multiple = !0);
    }
    return G;
  }, [ce, I, j.values]), Mt = _t(function() {
    return !Pe(p.current, j.values);
  }, [p.current, j.values]), ma = _t(function() {
    return typeof c < "u" ? Mt ? j.errors && Object.keys(j.errors).length === 0 : c !== !1 && be(c) ? c(h) : c : j.errors && Object.keys(j.errors).length === 0;
  }, [c, Mt, j.errors, h]), ya = ie({}, j, {
    initialValues: p.current,
    initialErrors: b.current,
    initialTouched: w.current,
    initialStatus: $.current,
    handleBlur: ce,
    handleChange: I,
    handleReset: pt,
    handleSubmit: M,
    resetForm: re,
    setErrors: N,
    setFormikState: te,
    setFieldTouched: U,
    setFieldValue: A,
    setFieldError: E,
    setStatus: pe,
    setSubmitting: we,
    setTouched: T,
    setValues: x,
    submitForm: Ie,
    validateForm: q,
    validateField: X,
    isValid: ma,
    dirty: Mt,
    unregisterField: Z,
    registerField: z,
    getFieldProps: pa,
    getFieldMeta: fa,
    getFieldHelpers: ha,
    validateOnBlur: a,
    validateOnChange: r,
    validateOnMount: o
  });
  return ya;
}
function hn(e) {
  var t = e.htmlContent, r = e.documentationAnchorLink, n = e.handlerName;
  console.warn("Warning: Formik called `" + n + "`, but you forgot to pass an `id` or `name` attribute to your input:\n    " + t + `
    Formik cannot determine which value to update. For more info see https://formik.org/docs/api/formik#` + r + `
  `);
}
function Kc(e) {
  var t = {};
  if (e.inner) {
    if (e.inner.length === 0)
      return Me(t, e.path, e.message);
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
      fe(t, o.path) || (t = Me(t, o.path, o.message));
    }
  }
  return t;
}
function Yc(e, t, r, n) {
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
function Hc(e, t, r) {
  var n = e.slice();
  return t.forEach(function(s, o) {
    if (typeof n[o] > "u") {
      var c = r.clone !== !1, d = c && r.isMergeableObject(s);
      n[o] = d ? rr(Array.isArray(s) ? [] : {}, s, r) : s;
    } else r.isMergeableObject(s) ? n[o] = rr(e[o], s, r) : e.indexOf(s) === -1 && n.push(s);
  }), n;
}
function Wc(e) {
  return Array.from(e).filter(function(t) {
    return t.selected;
  }).map(function(t) {
    return t.value;
  });
}
function Zc(e, t, r) {
  if (typeof e == "boolean")
    return !!t;
  var n = [], a = !1, s = -1;
  if (Array.isArray(e))
    n = e, s = e.indexOf(r), a = s >= 0;
  else if (!r || r == "true" || r == "false")
    return !!t;
  return t && r && !a ? n.concat(r) : a ? n.slice(0, s).concat(n.slice(s + 1)) : n;
}
var Qc = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? gn : oe;
function ge(e) {
  var t = xe(e);
  return Qc(function() {
    t.current = e;
  }), ae(function() {
    for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return t.current.apply(void 0, n);
  }, []);
}
var Xc = /* @__PURE__ */ wa(function(e, t) {
  var r = e.action, n = ua(e, ["action"]), a = r ?? "#", s = Vc(), o = s.handleReset, c = s.handleSubmit;
  return ja("form", ie({
    onSubmit: c,
    ref: t,
    onReset: o,
    action: a
  }, n));
});
Xc.displayName = "Form";
function wt({
  anchorRef: e,
  open: t,
  children: r,
  offset: n = 4
}) {
  const [a, s] = le({});
  return gn(() => {
    if (!t || !e.current) return;
    const o = e.current.getBoundingClientRect();
    s({
      position: "fixed",
      top: o.bottom + n,
      left: o.left,
      width: "200px",
      zIndex: 1e3
    });
  }, [t, e, n]), t ? Ea(
    /* @__PURE__ */ i.jsx("div", { style: a, children: r }),
    document.body
  ) : null;
}
function Jc({
  field: e,
  formik: t,
  methods: r = {},
  sqlOpsUrls: n,
  refid: a,
  optionsOverride: s,
  setFieldOptions: o,
  module_refid: c
}) {
  const [d, u] = le(!1), [f, y] = le(
    s ?? e.options ?? {}
  ), [h, p] = le(""), [b, w] = le(0), $ = xe(null), [m, v] = le(!1), S = ee.useRef(h), O = xe(null);
  ee.useEffect(() => {
    S.current = h;
  }, [h]), oe(() => {
    s && Object.keys(s).length !== 0 && y(s);
  }, [s]), oe(() => {
    if (!m) return;
    const z = (Z) => {
      const T = Z.target;
      O.current?.contains(T) || $.current?.contains(T) || (v(!1), p(""));
    };
    return document.addEventListener("mousedown", z), () => {
      document.removeEventListener("mousedown", z);
    };
  }, [m]);
  const l = e.name;
  ee.useEffect(() => {
    let z = !0;
    return (async () => {
      let T = e.valueKey ?? "value", N = e.labelKey ?? "title";
      if (e?.options) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const I = Object.values(e.options);
          if (I.length && typeof I[0] == "string") {
            y(e.options);
            return;
          }
        }
        const A = (Array.isArray(e.options) ? e.options : [e.options]).map(me), P = ve(
          T,
          N,
          A,
          e.groupKey
          // auto-uses `category` if present
        );
        y(P);
        return;
      }
      const x = e?.source ?? {};
      if (e.type === "dataMethod") {
        const E = e.method, A = E ? r[E] : void 0;
        if (A)
          try {
            const P = await Promise.resolve(A()), I = Array.isArray(P?.data?.data) ? P.data.data : Array.isArray(P?.data) ? P.data : P, U = Array.isArray(I) ? I.map(me) : [], ne = ve(T, N, U, e.groupKey);
            z && y(ne);
          } catch (P) {
            console.error("Method execution failed:", P), z && y({});
          }
        else
          z && y({});
      }
      if (x.type === "api" && x.url)
        try {
          const E = await W({
            method: x.method || "GET",
            url: x.url,
            data: x.body ?? {},
            params: x.params ?? {},
            headers: x.headers ?? {}
          }), A = Array.isArray(E?.data?.data) ? E.data.data : Array.isArray(E?.data) ? E.data : E, P = Array.isArray(A) ? A.map(me) : [], I = ve(T, N, P, e.groupKey);
          z && y(I);
        } catch (E) {
          console.error("API execution failed:", E), z && y({});
        }
      if (e.table || e.type === "dataSelector" || e.queryid) {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let E;
          if (e.type === "dataSelector")
            E = {
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
            E = {
              table: e.table,
              cols: e.columns,
              where: e.where ? a ? he(e.where, { refid: a }) : e.where : void 0
            };
          }
          const A = await He(n, E, e?.queryid, void 0, c), P = Array.isArray(A?.data?.data) ? A.data.data : Array.isArray(A?.data) ? A.data : A, I = Array.isArray(P) ? P.map(me) : [], U = ve(T, N, I, e.groupKey);
          z && y(U);
        } catch (E) {
          console.error("API fetch failed:", E);
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
  const j = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, _ = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, F = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, D = (z) => z.icon ? /* @__PURE__ */ i.jsx("i", { className: z.icon }) : null, B = _t(
    () => js(f),
    [f]
  ), k = B.length, L = _t(() => e.search || !h ? B : B.filter(
    ([, z]) => z.toLowerCase().includes(h.toLowerCase())
  ), [e.search, h, B]), q = (z, Z) => {
    if (m === !0)
      if (z.key === "ArrowDown")
        z.preventDefault(), w(
          (T) => T + 1 < L.length ? T + 1 : 0
        );
      else if (z.key === "ArrowUp")
        z.preventDefault(), w(
          (T) => T - 1 >= 0 ? T - 1 : L.length - 1
        );
      else if (z.key === "Enter") {
        z.preventDefault();
        const [T] = L[b] || [];
        T && t.setFieldValue(e.name, Z ? T : [...t.values[e.name], T]);
      } else z.key === "Escape" && (p(""), v(!1));
  };
  oe(() => {
    $.current?.querySelector(
      `[data-index="${b}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [b]), oe(() => {
    b >= L.length && w(0);
  }, [L, b]), oe(() => {
    const z = e.autocomplete, Z = e.ajaxchain;
    if (!z && !Z) return;
    const T = t.values[e.name];
    if (!T) return;
    const N = Array.isArray(Z) ? Z : Z ? [Z] : [];
    (async () => {
      try {
        if (vs(z)) {
          const E = z.src;
          if (!E || !n) return;
          const A = he(E.where ?? {}, {
            refid: T
          }), P = {
            ...E,
            table: E.table,
            cols: E.columns,
            where: A
          }, { data: I } = await He(n, P, e?.queryid, void 0, c), U = Array.isArray(I?.data) ? I.data[0] : I?.data;
          U && z.target.split(",").map((ne) => ne.trim()).forEach((ne) => {
            U[ne] !== void 0 && t.setFieldValue(ne, U[ne]);
          });
        }
        for (const E of N) {
          const A = E.src;
          if (!E || typeof E != "object" || !A || typeof A != "object" || !n) continue;
          let P;
          if (!A.queryid) {
            if (!A.table || !A.columns)
              throw new Error("SQL query requires field.table");
            const we = he(A?.where ?? {}, {
              refid: T
            });
            P = {
              ...A,
              table: A.table,
              cols: A.columns,
              where: we
            };
          }
          const { data: I } = await He(n, P, e?.queryid, T, c);
          let U = e.valueKey ?? "value", ne = e.labelKey ?? "title";
          const ce = Array.isArray(I?.data?.data) ? I.data.data : Array.isArray(I?.data) ? I.data : I, te = Array.isArray(ce) ? ce.map(me) : [], pe = ve(
            U,
            ne,
            te,
            e.groupKey
          );
          o?.(E.target, pe);
        }
      } catch (E) {
        console.error("Autocomplete / AjaxChain fetch failed", E);
      }
    })();
  }, [t.values[e.name]]), ee.useEffect(() => {
    if (!e.search || !h.trim() || !e.table || !n) return;
    const z = ws(e.columns ?? ""), Z = new AbortController(), T = setTimeout(async () => {
      try {
        let N;
        if (!e.queryid) {
          if (!e.table || !e.cols)
            throw new Error("SQL query requires field.table");
          const ce = a ? he(e.where ?? {}, {
            refid: a
          }) : e.where;
          N = {
            ...e,
            table: e.table,
            cols: e.columns || e.cols,
            where: ce
          };
        }
        let x = {};
        Array.isArray(z) && z.forEach((ce) => {
          x[ce] = [h, "LIKE"];
        });
        const { data: E } = await He(n, N, e?.queryid, void 0, c, x);
        let A = e.valueKey ?? "value", P = e.labelKey ?? "title";
        const I = Array.isArray(E?.data?.data) ? E.data.data : Array.isArray(E?.data) ? E.data : E, U = Array.isArray(I) ? I.map(me) : [], ne = ve(
          A,
          P,
          U,
          e.groupKey
        );
        y(ne);
      } catch (N) {
        if (W.isCancel(N)) return;
        console.error("Search fetch failed", N);
      }
    }, 500);
    return () => {
      clearTimeout(T), Z.abort();
    };
  }, [h, a]);
  const re = async (z) => {
    if (z.length === 0) {
      console.error("No file");
      return;
    }
    if (!n) return;
    const Z = n?.baseURL + n?.uploadURL;
    if (!Z) {
      console.error("No Upload URL ");
      return;
    }
    const T = e.multiple === !0;
    try {
      const N = await Promise.all(
        Array.from(z).map(async (x) => {
          const E = new FormData();
          return E.append("file", x), (await W({
            method: "POST",
            url: Z,
            data: E,
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${n?.accessToken}`
            }
          })).data;
        })
      );
      t.setFieldValue(
        l,
        T ? N.map((x) => x.path) : N[0]?.path
      );
    } catch (N) {
      console.error("File upload failed", N), t.setFieldError(l, "File upload failed");
    }
  }, X = async (z, Z, T) => {
    const N = Z[z];
    if (!N) return;
    const x = r?.[N];
    if (typeof x != "function") {
      console.error(`Method "${String(N)}" not found`);
      return;
    }
    try {
      await Promise.resolve(x(T));
    } catch (E) {
      console.error(`Method "${String(N)}" failed`, E);
    }
  };
  switch (e.type) {
    case "autocomplete": {
      const T = t.values[l] ?? "", N = h !== "" ? h : Ir(f, T) ?? String(T ?? ""), x = (A) => {
        const P = A.target.value;
        p(P), w(0), P.trim() ? v(!0) : (v(!1), t.setFieldValue(l, ""));
      }, E = (A) => {
        t.setFieldValue(l, A), p(""), v(!1), X("onChange", e, `${l}-${A}`);
      };
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: F, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsx("div", { ref: O, children: /* @__PURE__ */ i.jsx(
          "input",
          {
            className: `${j} ${_}`,
            value: N,
            placeholder: e.placeholder || "Type to search...",
            onChange: x,
            onFocus: () => {
              const A = String(t.values[l] ?? "");
              p(A);
            },
            onBlur: () => {
              setTimeout(() => v(!1), 150);
            },
            onKeyDown: (A) => {
              if (A.key === "Enter") {
                if (A.preventDefault(), L[b]) {
                  const [P] = L[b];
                  t.setFieldValue(l, P);
                } else h.trim() && t.setFieldValue(l, h.trim());
                v(!1);
                return;
              }
              q(A, !0);
            },
            disabled: e.disabled
          }
        ) }),
        /* @__PURE__ */ i.jsx(wt, { anchorRef: O, open: m, children: /* @__PURE__ */ i.jsx(
          "div",
          {
            ref: $,
            className: "bg-white border rounded shadow max-h-52 overflow-y-auto",
            children: L.length > 0 ? L.map(([A, P], I) => /* @__PURE__ */ i.jsx(
              "div",
              {
                id: `${l}-${A}`,
                "data-index": I,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${b === I ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => E(A),
                children: P
              },
              A
            )) : /* @__PURE__ */ i.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `No matches press enter to add "${N}" ` })
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
        const T = t.values[l] ?? [];
        return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsxs("label", { className: F, children: [
            e.label,
            e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ i.jsxs(
            "div",
            {
              ref: O,
              tabIndex: 0,
              className: "cursor-pointer select-none border border-gray-300 rounded-lg px-4 py-2.5 bg-white flex justify-between items-center",
              onClick: () => {
                v((N) => !N), w(0);
              },
              onKeyDown: (N) => q(N, !1),
              onBlur: () => {
                e.multiple || setTimeout(() => {
                  v(!1), p("");
                }, 150);
              },
              children: [
                /* @__PURE__ */ i.jsx("span", { className: "text-sm text-gray-700 truncate", children: T.length > 0 ? T.join(", ") : `Select ${e.label}` }),
                /* @__PURE__ */ i.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
              ]
            }
          ),
          /* @__PURE__ */ i.jsx(wt, { anchorRef: O, open: m, children: /* @__PURE__ */ i.jsxs(
            "div",
            {
              ref: $,
              className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
              children: [
                e.search && /* @__PURE__ */ i.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "text",
                    value: h,
                    onChange: (N) => {
                      p(N.target.value), w(0);
                    },
                    placeholder: "Search...",
                    className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                  }
                ) }),
                L.length > 0 ? L.map(([N, x], E) => /* @__PURE__ */ i.jsxs(
                  "label",
                  {
                    "data-index": E,
                    className: `flex items-center gap-x-2 px-2 py-1 rounded cursor-pointer text-sm
                    ${T.includes(N) ? "bg-indigo-50 text-indigo-600 font-medium" : b === E ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: [
                      /* @__PURE__ */ i.jsx(
                        "input",
                        {
                          id: `${l}-${N}`,
                          type: "checkbox",
                          checked: T.includes(N),
                          onChange: (A) => {
                            const P = A.target.checked ? [...T, N] : T.filter((I) => I !== N);
                            t.setFieldValue(l, P), X("onChange", e, `${l}-${N}`);
                          },
                          className: "h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        }
                      ),
                      x
                    ]
                  },
                  N
                )) : /* @__PURE__ */ i.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ]
            }
          ) }),
          t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[l]) })
        ] });
      }
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: F, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs(
          "div",
          {
            ref: O,
            tabIndex: 0,
            className: "cursor-pointer select-none border border-gray-300 rounded-lg px-4 py-2.5 bg-white flex justify-between items-center",
            onClick: () => {
              v((T) => !T), w(0);
            },
            onKeyDown: (T) => q(T, !0),
            onBlur: () => {
              setTimeout(() => {
                v(!1), p("");
              }, 150);
            },
            children: [
              /* @__PURE__ */ i.jsx("span", { className: "text-sm text-gray-700 truncate", children: t.values[l] ? Ir(f, t.values[l]) ?? "Select option" : `Select ${e.label}` }),
              /* @__PURE__ */ i.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
            ]
          }
        ),
        /* @__PURE__ */ i.jsx(wt, { anchorRef: O, open: m, children: /* @__PURE__ */ i.jsxs(
          "div",
          {
            ref: $,
            className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
            children: [
              e.search && /* @__PURE__ */ i.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "text",
                  value: h,
                  onChange: (T) => {
                    p(T.target.value), w(0);
                  },
                  onKeyDown: (T) => q(T, !0),
                  placeholder: "Search...",
                  className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                }
              ) }),
              L.length > 0 && /* @__PURE__ */ i.jsx(
                "div",
                {
                  onMouseDown: (T) => {
                    T.preventDefault(), t.setFieldValue(l, ""), v(!1), p("");
                  },
                  className: "px-2 py-1 text-sm cursor-pointer hover:bg-gray-50",
                  children: "Clear selection"
                }
              ),
              L.length > 0 ? L.map(([T, N], x) => /* @__PURE__ */ i.jsx(
                "div",
                {
                  id: `${l}-${T}`,
                  "data-index": x,
                  onMouseDown: () => {
                    t.setFieldValue(l, T), v(!1), p(""), w(0), X("onChange", e, `${l}-${T}`);
                  },
                  className: `px-2 py-1 rounded cursor-pointer text-sm
                  ${t.values[l] === T ? "bg-indigo-50 text-indigo-600 font-medium" : b === x ? "bg-gray-100" : "hover:bg-gray-50"}`,
                  children: N
                },
                T
              )) : /* @__PURE__ */ i.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
            ]
          }
        ) }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[l]) })
      ] });
    }
    case "textarea":
      return /* @__PURE__ */ i.jsx(i.Fragment, { children: /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: F, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsx(
            "textarea",
            {
              id: l,
              className: `${j} ${_} min-h-[120px] resize-none`,
              onFocus: () => u(!0),
              name: l,
              value: t.values[l],
              onBlur: t.handleBlur,
              onChange: (T) => {
                t.setFieldValue(
                  l,
                  T.target.value
                ), X("onChange", e, `${l}`);
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
        const T = t.values[l] ?? [];
        return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsxs("label", { className: F, children: [
            e.label,
            e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ i.jsxs(
            "div",
            {
              ref: O,
              tabIndex: 0,
              className: "cursor-pointer select-none border border-gray-300 rounded-lg px-4 py-2.5 bg-white flex justify-between items-center",
              onClick: () => {
                v((N) => !N), w(0);
              },
              onKeyDown: (N) => q(N, !1),
              onBlur: () => {
                e.multiple || setTimeout(() => {
                  v(!1), p("");
                }, 150);
              },
              children: [
                /* @__PURE__ */ i.jsx("span", { className: "text-sm text-gray-700 truncate", children: T.length > 0 ? T.join(", ") : `Select ${e.label}` }),
                /* @__PURE__ */ i.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
              ]
            }
          ),
          /* @__PURE__ */ i.jsx(wt, { anchorRef: O, open: m, children: /* @__PURE__ */ i.jsxs(
            "div",
            {
              ref: $,
              className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
              children: [
                e.search && /* @__PURE__ */ i.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "text",
                    value: h,
                    onChange: (N) => {
                      p(N.target.value), w(0);
                    },
                    placeholder: "Search...",
                    className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                  }
                ) }),
                L.length > 0 ? L.map(([N, x], E) => /* @__PURE__ */ i.jsxs(
                  "label",
                  {
                    "data-index": E,
                    className: `flex items-center gap-x-2 px-2 py-1 rounded cursor-pointer text-sm
                    ${T.includes(N) ? "bg-indigo-50 text-indigo-600 font-medium" : b === E ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: [
                      /* @__PURE__ */ i.jsx(
                        "input",
                        {
                          id: `${l}-${N}`,
                          type: "checkbox",
                          checked: T.includes(N),
                          onChange: (A) => {
                            const P = A.target.checked ? [...T, N] : T.filter((I) => I !== N);
                            t.setFieldValue(l, P), X("onChange", e, `${l}-${N}`);
                          },
                          className: "h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        }
                      ),
                      x
                    ]
                  },
                  N
                )) : /* @__PURE__ */ i.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ]
            }
          ) }),
          t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[l]) })
        ] });
      }
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: F, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsxs(
            "select",
            {
              className: `${j} ${_} appearance-none cursor-pointer pr-12`,
              onFocus: () => u(!0),
              name: l,
              id: l,
              value: t.values[l],
              onBlur: t.handleBlur,
              onChange: (T) => {
                t.setFieldValue(
                  l,
                  T.target.value === "" ? "" : T.target.value
                ), X("onChange", e, `${l}`);
              },
              disabled: e.disabled,
              children: [
                /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: e.placeholder || "Please select an option" }),
                !tr(f) && Object.entries(f).map(([T, N]) => /* @__PURE__ */ i.jsx("option", { value: T, className: "py-2", children: N }, T)),
                tr(f) && Object.entries(f).map(([T, N]) => /* @__PURE__ */ i.jsx("optgroup", { label: T, children: Object.entries(N).map(([x, E]) => /* @__PURE__ */ i.jsx("option", { value: x, children: E }, x)) }, T))
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
        /* @__PURE__ */ i.jsxs("label", { className: F, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: `flex ${k > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(f || {}).map(([T, N]) => /* @__PURE__ */ i.jsxs(
          "label",
          {
            htmlFor: `${l}-${T}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  id: `${l}-${T}`,
                  type: "radio",
                  name: l,
                  checked: t.values[l] === T,
                  value: T,
                  onChange: (x) => {
                    t.setFieldValue(
                      l,
                      x.target.value === "" ? "" : x.target.value
                    ), X("onChange", e, `${l}-${T}`);
                  },
                  onBlur: t.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              N
            ]
          },
          T
        )) }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[l]) })
      ] });
    case "checkbox": {
      const T = t.values[l];
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: F, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(f || {}).map(([N, x]) => /* @__PURE__ */ i.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  id: `${l}-${N}`,
                  type: "checkbox",
                  checked: T.includes(N),
                  onChange: (E) => {
                    const A = E.target.checked ? [...T, N] : T.filter((P) => P !== N);
                    t.setFieldValue(l, A), X("onChange", e, `${l}-${N}`);
                  },
                  onBlur: t.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              x
            ]
          },
          N
        )) }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[l]) })
      ] });
    }
    case "tags": {
      const T = t.values[l], N = h.trim(), x = Array.isArray(f) ? f : Object.entries(f || {}).map(([I, U]) => ({ value: I, label: U })), E = (I) => {
        I && !T.includes(I) && (t.setFieldValue(l, [...T, I]), p(""));
      }, A = (I) => {
        t.setFieldValue(
          l,
          T.filter((U) => U !== I)
        );
      }, P = (I) => x.find((U) => U.value === I)?.label ?? I;
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: F, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs(
          "div",
          {
            className: `${j} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !e.disabled && document.getElementById(`${l}-input`)?.focus(),
            children: [
              T.map((I) => /* @__PURE__ */ i.jsxs(
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
                          U.stopPropagation(), e.disabled || A(I);
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
                  value: h,
                  onChange: (I) => p(I.target.value),
                  onKeyDown: (I) => {
                    (I.key === "Enter" || I.key === ",") && (I.preventDefault(), E(N));
                  },
                  placeholder: T.length === 0 ? e.placeholder || "Type and press Enter" : "",
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
      const z = e.multiple === !0, Z = Array.isArray(t.values[l]) ? t.values[l] : t.values[l] ? [t.values[l]] : [];
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: F, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ i.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: D(e) }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              id: l,
              type: "file",
              className: `${j} ${_} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => u(!0),
              name: l,
              multiple: z,
              onChange: (T) => {
                const N = T.currentTarget.files;
                N && re(N), X("onChange", e, `${l}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ i.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${d ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        Z.map((T) => {
          const N = T?.split("/").pop();
          return N ? /* @__PURE__ */ i.jsx("div", { className: "mt-1", children: /* @__PURE__ */ i.jsx("span", { className: "text-sm", children: N }) }, T) : null;
        }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[l]) })
      ] });
    case "json":
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: F, children: [
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
              onChange: (T) => {
                t.setFieldValue(
                  l,
                  T.target.value
                ), X("onChange", e, `${l}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: e.disabled,
              className: `${j} ${_} min-h-[200px] font-mono text-sm resize-y`
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
        /* @__PURE__ */ i.jsxs("label", { className: F, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ i.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: D(e) }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              id: l,
              type: "date",
              name: l,
              min: e.min,
              max: e.max,
              value: t.values[l],
              onChange: (T) => {
                t.setFieldValue(
                  l,
                  T.target.value
                ), X("onChange", e, `${l}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled,
              className: `${j} ${_} ${e.icon ? "pl-9" : ""}`
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
        /* @__PURE__ */ i.jsxs("label", { className: F, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ i.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: D(e) }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              id: l,
              type: e.type || "text",
              className: `${j} ${_} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => u(!0),
              name: l,
              value: t.values[l],
              onBlur: t.handleBlur,
              onChange: (T) => {
                t.setFieldValue(
                  l,
                  T.target.value
                ), X("onChange", e, `${l}`);
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
        /* @__PURE__ */ i.jsxs("label", { className: F, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ i.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: D(e) }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              id: l,
              type: e.type || "text",
              className: `${j} ${_} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => u(!0),
              name: l,
              value: t.values[l],
              onBlur: t.handleBlur,
              onChange: (T) => {
                t.setFieldValue(
                  l,
                  T.target.value
                ), X("onChange", e, `${l}`);
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
function eu({
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
  const u = gs(t, o?.operation), [f, y] = ee.useState({}), h = (m, v) => {
    y((S) => ({
      ...S,
      [m]: v
    }));
  }, { initialValues: p, validationSchema: b } = ee.useMemo(() => {
    const m = {}, v = {};
    return u.forEach((S) => {
      xs([S], m, v, r);
    }), {
      initialValues: m,
      validationSchema: v
    };
  }, [u, r]), w = qc({
    initialValues: p,
    enableReinitialize: !0,
    validationSchema: Cn().shape(b),
    onSubmit: (m) => {
      n(m), w.resetForm();
    }
  });
  function $(m) {
    m.preventDefault(), w.resetForm();
  }
  return /* @__PURE__ */ i.jsx("div", { className: "relative z-10 max-w-full ", children: /* @__PURE__ */ i.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ i.jsxs("form", { onSubmit: w.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "grid grid-flow-col auto-cols-max gap-4  overflow-x-auto", children: [
      u.map((m, v) => bs(m.hidden) || m.type === "geolocation" || m.vmode === "edit" && o?.operation === "create" ? null : /* @__PURE__ */ i.jsx(
        "div",
        {
          children: /* @__PURE__ */ i.jsx(
            Jc,
            {
              refid: c,
              module_refid: d,
              sqlOpsUrls: o,
              field: m,
              formik: w,
              methods: s,
              setFieldOptions: h,
              ...f[m.name] ? { optionsOverride: f[m.name] } : {}
            }
          )
        },
        m?.name ?? `field-${v}`
      )),
      /* @__PURE__ */ i.jsxs("div", { className: "", children: [
        /* @__PURE__ */ i.jsx("div", { children: "  " }),
        /* @__PURE__ */ i.jsx("button", { onClick: $, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Reset" }),
        Object.keys(w.errors).length > 0 && /* @__PURE__ */ i.jsx("div", { children: "  " })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "", children: [
        /* @__PURE__ */ i.jsx("div", { children: "  " }),
        /* @__PURE__ */ i.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" }),
        Object.keys(w.errors).length > 0 && /* @__PURE__ */ i.jsx("div", { children: "  " })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "mt-8 flex justify-between space-x-3", children: /* @__PURE__ */ i.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }) })
  ] }) }) });
}
function tu({
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
  const u = e.endPoints, f = e?.source?.refid, [y, h] = ee.useState(o), p = ee.useMemo(() => ms(e.fields), [e.fields]);
  ee.useEffect(() => {
    h(o ?? {});
  }, [o]);
  const b = ee.useCallback(
    (m) => {
      m && Object.keys(m).length > 0 && h(m);
    },
    []
  );
  ee.useEffect(() => {
    let m = !0;
    return (async () => {
      const S = e?.source ?? {};
      if (S?.type) {
        if (S.type === "method") {
          const O = S.method, l = O ? t[O] : void 0;
          if (l)
            try {
              const j = await Promise.resolve(l());
              m && b(j);
            } catch (j) {
              console.error("Method execution failed:", j);
            }
        }
        if (S.type === "api" && u?.operation !== "create")
          try {
            const O = await W({
              method: S.method || "GET",
              url: S.url ?? "",
              data: S.body ?? {},
              params: S.params ?? {},
              headers: S.headers ?? {}
            });
            m && b(O.data);
          } catch (O) {
            console.error("API fetch failed:", O);
          }
        if (S.type === "sql" && S.refid && S.refid !== "0" && u?.operation !== "create" || u?.operation !== "create" && S.dbopsid) {
          if (!u) {
            console.error("SQL source requires formJson.endPoints but it is missing");
            return;
          }
          try {
            const O = await As.fetch(u, {
              source: {
                ...S,
                table: S.table,
                columns: S.columns,
                where: he(S.where, {
                  refid: f
                })
              },
              fields: $t(e.fields, u.operation)
            }, S?.dbopsid, d);
            m && b(O);
          } catch (O) {
            console.error("API fetch failed:", O);
          }
        }
      }
    })(), () => {
      m = !1;
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
  const w = async (m) => {
    const v = e?.source ?? {};
    let S = null;
    if (p.length > 0)
      try {
        S = await ys();
      } catch (l) {
        console.log("catch fetchGeolocation", l), S = null;
      }
    const O = {
      ...m,
      ...Object.fromEntries(
        p.map((l) => [l, S])
      )
    };
    if (v.type === "method") {
      const l = v.method, j = l ? t[l] : void 0;
      if (j)
        try {
          const _ = await Promise.resolve(j(O));
          c?.(null), s?.(_);
        } catch (_) {
          s?.(_), console.error("Method execution failed:", _);
        }
    }
    if (v.type === "api") {
      if (!u) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const l = await W({
          method: v.method || "POST",
          url: u.baseURL + v.endpoint,
          data: O ?? {},
          headers: {
            Authorization: `Bearer ${u?.accessToken}`
          }
        });
        c?.(null), s?.(l);
      } catch (l) {
        s?.(l), console.error("API fetch failed:", l);
      }
    }
    if (v.type === "sql") {
      const l = e.endPoints;
      if (!l) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let j = !1, _;
        v?.dbopsid && (j = !0, _ = v?.dbopsid);
        const F = await W({
          method: "GET",
          url: l.baseURL + l.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${l?.accessToken}`
          }
        });
        if (!j) {
          let k = {
            ...v
          };
          v.where && (k = {
            ...v,
            where: he(v.where, {
              refid: f
            })
          }), _ = (await W({
            method: "POST",
            url: l.baseURL + l.dbopsGetRefId,
            data: {
              operation: l.operation,
              source: k,
              fields: $t(e.fields, l.operation),
              forcefill: e.forcefill,
              datahash: F.data.refhash,
              scrid: d
            },
            headers: {
              Authorization: `Bearer ${l?.accessToken}`
            }
          }))?.data.refid;
        }
        let D = {
          refid: _,
          fields: O,
          datahash: F.data.refhash,
          refid1: l.refid
        };
        v?.refid && (D.refid1 = v?.refid);
        const B = await W({
          method: "POST",
          url: l.baseURL + l[l.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: D,
          headers: {
            Authorization: `Bearer ${l?.accessToken}`
          }
        });
        c?.(null), s?.(B);
      } catch (j) {
        s?.(j), console.error("API fetch failed:", j);
      }
    }
  }, $ = {
    simple: /* @__PURE__ */ i.jsx(
      eu,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: y,
        onSubmit: w,
        onCancel: n,
        methods: t,
        components: a,
        sqlOpsUrls: u,
        refid: f,
        module_refid: d
      }
    )
  };
  return /* @__PURE__ */ i.jsx("div", { className: "relative", children: $.simple });
}
function xr({ tabObj: e, methods: t, tabName: r, sqlOpsUrls: n, refid: a, Reports: s, toast: o, handleAction: c, infoViewJson: d }) {
  const [u, f] = le(!1), [y, h] = le(null), [p, b] = ee.useState(0), [w, $] = ee.useState(null), m = e?.config, v = e?.config, S = v?.["popup.form"] ? "popup.form" : (v?.form, "form"), O = v?.[S] && Object.keys(v?.[S]).length > 0, l = (B) => {
    let k = me(B.data);
    $(k);
  }, j = (B) => {
    $(B), b((k) => k + 1);
  }, _ = (B) => {
    let k = me(B.data);
    h(k), f(!0);
  }, F = async () => {
    if (y?.id) {
      if (!n) {
        window.alert("Delete configuration missing.");
        return;
      }
      try {
        let B = e?.config;
        const k = B?.["popup.form"] ? "popup.form" : (B?.form, "form"), L = B?.[k];
        if (!L?.source) throw new Error("Form source missing");
        let q = !1, re;
        L?.source?.dbopsid && (q = !0, re = L?.source?.dbopsid);
        const X = await W({
          method: "GET",
          url: n.baseURL + n.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${n.accessToken}`
          }
        });
        if (!q) {
          let z = { ...L.source, refid: y.id };
          L.source.where && (z = {
            ...z,
            where: he(L.source.where, {
              refid: y?.id
            })
          }), re = (await W({
            method: "POST",
            url: n.baseURL + n.dbopsGetRefId,
            data: {
              operation: "update",
              source: z,
              fields: L.fields,
              forcefill: L.forcefill,
              datahash: X.data.refhash,
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
            refid: re,
            fields: { blocked: "true" },
            datahash: X.data.refhash,
            refid1: y?.id
          },
          headers: {
            Authorization: `Bearer ${n.accessToken}`
          }
        }), window.alert("Record deleted successfully."), b((z) => z + 1);
      } catch (B) {
        console.error(B), window.alert("Failed to delete record. Please try again");
      } finally {
        h(null), f(!1);
      }
    }
  }, D = () => {
    h(null), f(!1);
  };
  return /* @__PURE__ */ i.jsx(i.Fragment, { children: s ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      s,
      {
        methods: { ...t, deleteRecord: _, editRecord: l },
        report: {
          ...m,
          source: {
            table: m?.table,
            type: "sql",
            cols: m?.cols,
            where: m?.where,
            orderby: m?.orderby,
            queryid: m?.queryid
          },
          endPoints: n,
          actions: { ...m?.actions, ...d?.buttons, ...d.actions },
          datagrid: m?.datagrid,
          buttons: m?.buttons,
          refresh: p
        },
        onButtonClick: c
      }
    ),
    O && /* @__PURE__ */ i.jsx(
      tu,
      {
        formJson: {
          ...v[S],
          source: {
            ...v?.[S].source,
            refid: w?.id
          },
          endPoints: {
            ...n,
            operation: w ? "update" : "create"
          }
        },
        methods: t,
        initialvalues: w ?? {},
        setEditData: j,
        module_refid: d?.module_refid
      }
    ),
    /* @__PURE__ */ i.jsx(
      Rs,
      {
        open: u,
        onConfirm: F,
        onCancel: D
      }
    )
  ] }) : /* @__PURE__ */ i.jsx("p", { children: "Report not available" }) });
}
const pn = ({ groups: e, groupNames: t, setActiveTabIndex: r, activeTabIndex: n }) => /* @__PURE__ */ i.jsx(
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
), ru = ({
  groups: e,
  groupNames: t,
  setActiveTabIndex: r,
  activeTabIndex: n,
  layoutConfig: a,
  showScrollHint: s,
  isCommonInfo: o,
  tabsNavRef: c
}) => {
  const [d, u] = le(!1), f = xe(null);
  return oe(() => {
    const y = (h) => {
      f.current && !f.current.contains(h.target) && u(!1);
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
      /* @__PURE__ */ i.jsxs("div", { className: "relative", ref: f, children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            onClick: () => u(!d),
            className: "ml-1 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200",
            children: "⋮"
          }
        ),
        d && /* @__PURE__ */ i.jsx("div", { className: "absolute right-0 mt-2 w-48 max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-30", children: t.map((y, h) => /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              r(h), u(!1);
            },
            className: `w-full text-left px-3 py-2 text-sm truncate hover:bg-gray-100 ${n === h ? "bg-gray-50 font-semibold text-action" : "text-gray-700"}`,
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
        children: t.length > 0 ? t.map((y, h) => /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            onClick: () => r(h),
            className: `relative cursor-pointer flex-shrink-0
            min-w-[8rem]   
            py-2 px-8
            rounded-t-lg text-xs sm:text-sm font-semibold
            transition-all duration-300 ease-out
            focus:outline-none whitespace-nowrap
            ${n === h ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
            children: /* @__PURE__ */ i.jsx("span", { className: "relative z-10 flex items-center justify-center gap-1 sm:gap-2", children: /* @__PURE__ */ i.jsx("span", { className: "truncate", children: e[y]?.label || y }) })
          },
          y
        )) : /* @__PURE__ */ i.jsx("div", { className: "py-3 px-6 text-sm text-gray-500", children: "No group available" })
      }
    ) })
  ] });
}, mn = ({
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
  module_refid: f,
  fieldOptions: y,
  setFieldOptions: h
}) => /* @__PURE__ */ i.jsxs(
  "div",
  {
    className: "bg-white rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex-1 flex flex-col min-h-0",
    children: [
      e.length > 0 ? n?.fields ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ i.jsx("div", { className: r?.fieldGridClass || "grid grid-cols-12 gap-2", children: n.fields.map((p, b) => /* @__PURE__ */ i.jsx(
        "div",
        {
          className: `col-span-12 sm:col-span-6 ${ct[ut(p.width)] || "lg:col-span-2"}`,
          children: /* @__PURE__ */ i.jsx(
            dt,
            {
              field: p,
              data: a ?? {},
              methods: c,
              refid: d,
              sqlOpsUrls: u,
              module_refid: f,
              setFieldOptions: h,
              ...y[p.name] ? { optionsOverride: y[p.name] } : {}
            }
          )
        },
        p?.name ?? `field-${b}`
      )) }) }) : n ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: o(n, e[t] || "") }) : null : /* @__PURE__ */ i.jsx("div", { className: "flex-1 col-span-full text-center py-8 text-gray-500", children: "No data available" }),
      e.length > 5 && /* @__PURE__ */ i.jsxs("div", { className: "mt-10 pt-2 border-t border-gray-100 flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-500", children: [
          /* @__PURE__ */ i.jsxs("span", { children: [
            "Tab ",
            t + 1,
            " of ",
            e.length
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "flex gap-1", children: [
            e.slice(0, 5).map((p, b) => /* @__PURE__ */ i.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${b === t ? "bg-action w-6" : "bg-gray-300"}`
              },
              b
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
        /* @__PURE__ */ i.jsx("div", { className: "flex gap-1", children: e.map((p, b) => /* @__PURE__ */ i.jsx(
          "div",
          {
            className: `w-2 h-2 rounded-full transition-all duration-300 ${b === t ? "bg-action w-6" : "bg-gray-300"}`
          },
          b
        )) })
      ] }) })
    ]
  },
  e[t]
);
function yn({
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
  toast: f = {},
  handleAction: y = () => {
  },
  infoViewJson: h,
  fieldOptions: p,
  setFieldOptions: b
}) {
  const [w, $] = le(0), [m, v] = le(!1), S = xe(null), O = Object.keys(e);
  oe(() => {
    const L = () => {
      if (S.current) {
        const q = S.current;
        v(q.scrollWidth > q.clientWidth);
      }
    };
    return L(), window.addEventListener("resize", L), () => window.removeEventListener("resize", L);
  }, [O.length]), oe(() => {
    if (S.current && O.length > 0) {
      const L = S.current.children[w];
      L && L.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [w, O.length]);
  const l = o === "tableft", j = o === "tabright", _ = !l && !j, F = e[O[w] ?? ""] || null, D = {
    single: (L, q) => /* @__PURE__ */ i.jsx(cr, { fieldOptions: p, setFieldOptions: b, module_refid: h.module_refid, tabObj: L, methods: t, tabName: q, sqlOpsUrls: c, refid: d }),
    grid: (L, q) => /* @__PURE__ */ i.jsx(
      xr,
      {
        ...u ? { Reports: u } : {},
        toast: f,
        handleAction: y,
        tabObj: L,
        methods: t,
        tabName: q,
        sqlOpsUrls: c,
        refid: d,
        infoViewJson: h
      }
    )
  }, B = F?.config?.uimode, k = n[B] || D[B] || (() => /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No UI mode for this type" }));
  return _ ? /* @__PURE__ */ i.jsxs("div", { className: "flex-1 flex flex-col min-h-0 ", children: [
    /* @__PURE__ */ i.jsx(
      ru,
      {
        groupNames: O,
        groups: e,
        setActiveTabIndex: $,
        activeTabIndex: w,
        tabsNavRef: S,
        isCommonInfo: a,
        showScrollHint: m,
        layoutConfig: s
      }
    ),
    /* @__PURE__ */ i.jsx(
      mn,
      {
        groupNames: O,
        activeTabIndex: w,
        layoutConfig: s,
        tabObj: F,
        infoData: r,
        setActiveTabIndex: $,
        renderView: k,
        groups: e,
        methods: t,
        refid: d,
        sqlOpsUrls: c,
        module_refid: h.module_refid,
        fieldOptions: p,
        setFieldOptions: b
      }
    )
  ] }) : /* @__PURE__ */ i.jsxs("div", { className: "flex-1 flex min-h-0", children: [
    l && /* @__PURE__ */ i.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ i.jsx(
      pn,
      {
        groupNames: O,
        groups: e,
        setActiveTabIndex: $,
        activeTabIndex: w
      }
    ) }),
    /* @__PURE__ */ i.jsx("main", { className: "flex-1 flex flex-col min-h-0 overflow-auto", children: /* @__PURE__ */ i.jsx(
      mn,
      {
        groupNames: O,
        activeTabIndex: w,
        layoutConfig: s,
        tabObj: F,
        infoData: r,
        setActiveTabIndex: $,
        renderView: k,
        groups: e,
        methods: t,
        refid: d,
        module_refid: h.module_refid,
        sqlOpsUrls: c,
        fieldOptions: p,
        setFieldOptions: b
      }
    ) }),
    j && /* @__PURE__ */ i.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ i.jsx(
      pn,
      {
        groupNames: O,
        groups: e,
        setActiveTabIndex: $,
        activeTabIndex: w
      }
    ) })
  ] });
}
function nu({ title: e, children: t, isFirst: r }) {
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
function au({
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
  fieldOptions: f,
  setFieldOptions: y
}) {
  const h = {
    single: (p, b) => /* @__PURE__ */ i.jsx(
      cr,
      {
        tabObj: p,
        methods: t,
        tabName: b,
        sqlOpsUrls: a,
        fieldOptions: f,
        setFieldOptions: y,
        refid: s,
        module_refid: u?.module_refid
      }
    ),
    grid: (p, b) => /* @__PURE__ */ i.jsx(
      xr,
      {
        ...o ? { Reports: o } : {},
        toast: c,
        infoViewJson: u,
        handleAction: d,
        tabObj: p,
        methods: t,
        tabName: b,
        sqlOpsUrls: a,
        refid: s
      }
    )
  };
  return /* @__PURE__ */ i.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ i.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ i.jsx("div", { className: "space-y-1 flex flex-col min-h-0", children: e && Object.entries(e).map(([p, b], w) => /* @__PURE__ */ i.jsx(nu, { title: b.label, isFirst: w === 0, children: b?.fields ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-12 gap-2", children: b.fields.map(($, m) => /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${ct[ut($.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ i.jsx(
        dt,
        {
          module_refid: u?.module_refid,
          methods: t,
          field: $,
          data: r ?? {},
          setFieldOptions: y,
          ...f[$.name] ? { optionsOverride: f[$.name] } : {},
          sqlOpsUrls: a,
          refid: s
        }
      )
    },
    $?.name ?? `field-${m}`
  )) }) }) : b ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: n[b.config?.uimode]?.(b) || h[b.config?.uimode]?.(b, p) || /* @__PURE__ */ i.jsx("div", { children: "No renderer for this type" }) }) : null }, p)) }) }) });
}
function su({ title: e, children: t }) {
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
function iu({
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
  fieldOptions: f,
  setFieldOptions: y
}) {
  const h = {
    single: (p, b) => /* @__PURE__ */ i.jsx(cr, { fieldOptions: f, setFieldOptions: y, module_refid: u?.module_refid, tabObj: p, methods: t, tabName: b, sqlOpsUrls: a, refid: s }),
    grid: (p, b) => /* @__PURE__ */ i.jsx(
      xr,
      {
        ...o ? { Reports: o } : {},
        toast: c,
        handleAction: d,
        tabObj: p,
        methods: t,
        tabName: b,
        sqlOpsUrls: a,
        refid: s,
        infoViewJson: u
      }
    )
  };
  return /* @__PURE__ */ i.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ i.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ i.jsx("div", { className: "space-y-2  flex flex-col min-h-0", children: e && Object.entries(e).map(([p, b], w) => /* @__PURE__ */ i.jsx(su, { title: b.label, children: b?.fields ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-12 gap-2", children: b.fields.map(($, m) => /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${ct[ut($.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ i.jsx(
        dt,
        {
          module_refid: u?.module_refid,
          methods: t,
          field: $,
          data: r ?? {},
          setFieldOptions: y,
          ...f[$.name] ? { optionsOverride: f[$.name] } : {},
          sqlOpsUrls: a,
          refid: s
        }
      )
    },
    $?.name ?? `field-${m}`
  )) }) }) : b ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: n[b.config?.uimode]?.(b) || h[b.config?.uimode]?.(b, p) || /* @__PURE__ */ i.jsx("div", { children: "No renderer for this type" }) }) : null }, p)) }) }) });
}
function uu({
  infoViewJson: e,
  data: t = {},
  hiddenFields: r = [],
  groupFieldsFn: n = ps,
  layoutConfig: a = {},
  viewRenderers: s = {},
  methods: o = {},
  Reports: c,
  toast: d = {},
  handleAction: u = () => {
  }
}) {
  const [f, y] = ee.useState({}), h = hs(e.infoview ?? {}), p = e.endPoints, b = ee.useMemo(
    () => n(e.fields || {}),
    [e.fields, n]
  ), [w, $] = ee.useState({}), m = (j, _) => {
    $((F) => ({ ...F, [j]: _ }));
  }, v = e?.source?.refid;
  let S = { ...b };
  e.infoview?.groups && (S = { ...S, ...e.infoview.groups }), ee.useEffect(() => {
    let j = !1;
    return (async () => {
      const F = e?.source;
      if (!F?.type) {
        j || y({});
        return;
      }
      if (F.type === "method") {
        const D = F.method, B = D ? o[D] : void 0;
        if (B)
          try {
            const k = await Promise.resolve(B());
            j || y(k || {});
          } catch (k) {
            console.error("Method execution failed:", k), j || y({});
          }
        else
          j || y({});
      }
      if (F.type === "api")
        try {
          const D = await W({
            method: F.method || "GET",
            url: F.url,
            data: F.body || {},
            params: F.params || {},
            headers: F.headers || {}
          });
          j || y(D.data || {});
        } catch (D) {
          console.error("API fetch failed:", D), j || y({});
        }
      if (F.type === "sql" && F.refid && F.refid != "0" || F.dbopsid) {
        if (!p) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let D = !1, B;
          F?.dbopsid && (D = !0, B = F?.dbopsid);
          const k = await W({
            method: "GET",
            url: p.baseURL + p.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${p?.accessToken}`
            }
          });
          if (!D) {
            let re = {
              ...F
            };
            F.where && (re = {
              ...F,
              where: he(F.where, {
                refid: v
              })
            }), B = (await W({
              method: "POST",
              url: p.baseURL + p.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: re,
                fields: $t(e.fields, p.operation),
                forcefill: e.forcefill,
                datahash: k.data.refhash,
                srcid: e?.module_refid
              },
              headers: {
                Authorization: `Bearer ${p?.accessToken}`
              }
            }))?.data.refid;
          }
          const L = await W({
            method: "POST",
            url: p.baseURL + p.dbopsFetch,
            data: {
              refid: B,
              datahash: k.data.refhash,
              module_refid: e.module_refid
            },
            headers: {
              Authorization: `Bearer ${p?.accessToken}`
            }
          }), q = Pn(L) ?? {};
          j || y(q);
        } catch (D) {
          console.error("API fetch failed:", D);
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
  const O = S.common || null;
  O && delete S.common;
  const l = (j) => {
    switch (j) {
      case "accordion":
        return /* @__PURE__ */ i.jsx(
          au,
          {
            groups: S,
            methods: o,
            infoData: f,
            viewRenderers: s,
            sqlOpsUrls: p,
            refid: v,
            ...c ? { Reports: c } : {},
            toast: d,
            handleAction: u,
            infoViewJson: e,
            setFieldOptions: m,
            fieldOptions: w
          }
        );
      case "tab":
      case "tableft":
      case "tabright":
        return /* @__PURE__ */ i.jsx(
          yn,
          {
            groups: S,
            viewRenderers: s,
            layoutConfig: a,
            methods: o,
            infoData: f,
            isCommonInfo: !!O,
            viewMode: j,
            sqlOpsUrls: p,
            refid: v,
            ...c ? { Reports: c } : {},
            toast: d,
            handleAction: u,
            infoViewJson: e,
            setFieldOptions: m,
            fieldOptions: w
          }
        );
      case "cards":
        return /* @__PURE__ */ i.jsx(
          iu,
          {
            groups: S,
            viewRenderers: s,
            methods: o,
            infoData: f,
            sqlOpsUrls: p,
            refid: v,
            ...c ? { Reports: c } : {},
            toast: d,
            handleAction: u,
            infoViewJson: e,
            setFieldOptions: m,
            fieldOptions: w
          }
        );
      default:
        return /* @__PURE__ */ i.jsx(
          yn,
          {
            groups: S,
            viewRenderers: s,
            layoutConfig: a,
            methods: o,
            infoData: f,
            isCommonInfo: !!O,
            viewMode: j,
            sqlOpsUrls: p,
            refid: v,
            ...c ? { Reports: c } : {},
            toast: d,
            handleAction: u,
            infoViewJson: e,
            setFieldOptions: m,
            fieldOptions: w
          }
        );
    }
  };
  return /* @__PURE__ */ i.jsxs("div", { className: a.containerClass || "h-screen flex flex-col ", children: [
    O && p && /* @__PURE__ */ i.jsx(
      Is,
      {
        commonInfo: O,
        infoData: f,
        hiddenFields: r,
        sqlOpsUrls: p,
        setFieldOptions: m,
        fieldOptions: w,
        module_refid: e.module_refid,
        refid: v,
        methods: o
      }
    ),
    l(h)
  ] });
}
export {
  uu as InfoView
};
