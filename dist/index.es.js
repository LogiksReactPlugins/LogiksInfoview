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
        return x.$$typeof === V ? null : x.displayName || x.name || null;
      if (typeof x == "string") return x;
      switch (x) {
        case v:
          return "Fragment";
        case u:
          return "Profiler";
        case S:
          return "StrictMode";
        case l:
          return "Suspense";
        case w:
          return "SuspenseList";
        case M:
          return "Activity";
      }
      if (typeof x == "object")
        switch (typeof x.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), x.$$typeof) {
          case E:
            return "Portal";
          case T:
            return (x.displayName || "Context") + ".Provider";
          case g:
            return (x._context.displayName || "Context") + ".Consumer";
          case _:
            var N = x.render;
            return x = x.displayName, x || (x = N.displayName || N.name || "", x = x !== "" ? "ForwardRef(" + x + ")" : "ForwardRef"), x;
          case $:
            return N = x.displayName || null, N !== null ? N : e(x.type) || "Memo";
          case F:
            N = x._payload, x = x._init;
            try {
              return e(x(N));
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
        var N = !1;
      } catch {
        N = !0;
      }
      if (N) {
        N = console;
        var O = N.error, P = typeof Symbol == "function" && Symbol.toStringTag && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return O.call(
          N,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          P
        ), t(x);
      }
    }
    function n(x) {
      if (x === v) return "<>";
      if (typeof x == "object" && x !== null && x.$$typeof === F)
        return "<...>";
      try {
        var N = e(x);
        return N ? "<" + N + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var x = D.A;
      return x === null ? null : x.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function o(x) {
      if (L.call(x, "key")) {
        var N = Object.getOwnPropertyDescriptor(x, "key").get;
        if (N && N.isReactWarning) return !1;
      }
      return x.key !== void 0;
    }
    function c(x, N) {
      function O() {
        X || (X = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          N
        ));
      }
      O.isReactWarning = !0, Object.defineProperty(x, "key", {
        get: O,
        configurable: !0
      });
    }
    function f() {
      var x = e(this.type);
      return z[x] || (z[x] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), x = this.props.ref, x !== void 0 ? x : null;
    }
    function d(x, N, O, P, I, U, ne, ce) {
      return O = U.ref, x = {
        $$typeof: y,
        type: x,
        key: N,
        props: U,
        _owner: I
      }, (O !== void 0 ? O : null) !== null ? Object.defineProperty(x, "ref", {
        enumerable: !1,
        get: f
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
    function h(x, N, O, P, I, U, ne, ce) {
      var te = N.children;
      if (te !== void 0)
        if (P)
          if (q(te)) {
            for (P = 0; P < te.length; P++)
              m(te[P]);
            Object.freeze && Object.freeze(te);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(te);
      if (L.call(N, "key")) {
        te = e(x);
        var pe = Object.keys(N).filter(function(Ie) {
          return Ie !== "key";
        });
        P = 0 < pe.length ? "{key: someKey, " + pe.join(": ..., ") + ": ...}" : "{key: someKey}", A[te + P] || (pe = 0 < pe.length ? "{" + pe.join(": ..., ") + ": ...}" : "{}", console.error(
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
        ), A[te + P] = !0);
      }
      if (te = null, O !== void 0 && (r(O), te = "" + O), o(N) && (r(N.key), te = "" + N.key), "key" in N) {
        O = {};
        for (var we in N)
          we !== "key" && (O[we] = N[we]);
      } else O = N;
      return te && c(
        O,
        typeof x == "function" ? x.displayName || x.name || "Unknown" : x
      ), d(
        x,
        te,
        U,
        I,
        a(),
        O,
        ne,
        ce
      );
    }
    function m(x) {
      typeof x == "object" && x !== null && x.$$typeof === y && x._store && (x._store.validated = 1);
    }
    var p = ee, y = Symbol.for("react.transitional.element"), E = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), g = Symbol.for("react.consumer"), T = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), M = Symbol.for("react.activity"), V = Symbol.for("react.client.reference"), D = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = Object.prototype.hasOwnProperty, q = Array.isArray, re = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(x) {
        return x();
      }
    };
    var X, z = {}, Z = p.react_stack_bottom_frame.bind(
      p,
      s
    )(), j = re(n(s)), A = {};
    Je.Fragment = v, Je.jsx = function(x, N, O, P, I) {
      var U = 1e4 > D.recentlyCreatedOwnerStacks++;
      return h(
        x,
        N,
        O,
        !1,
        P,
        I,
        U ? Error("react-stack-top-frame") : Z,
        U ? re(n(x)) : j
      );
    }, Je.jsxs = function(x, N, O, P, I) {
      var U = 1e4 > D.recentlyCreatedOwnerStacks++;
      return h(
        x,
        N,
        O,
        !0,
        P,
        I,
        U ? Error("react-stack-top-frame") : Z,
        U ? re(n(x)) : j
      );
    };
  }()), Je;
}
var Tr;
function Na() {
  return Tr || (Tr = 1, process.env.NODE_ENV === "production" ? mt.exports = Sa() : mt.exports = _a()), mt.exports;
}
var i = Na(), zt, Er;
function $a() {
  if (Er) return zt;
  Er = 1;
  function e(u) {
    this._maxSize = u, this.clear();
  }
  e.prototype.clear = function() {
    this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
  }, e.prototype.get = function(u) {
    return this._values[u];
  }, e.prototype.set = function(u, g) {
    return this._size >= this._maxSize && this.clear(), u in this._values || this._size++, this._values[u] = g;
  };
  var t = /[^.^\]^[]+|(?=\[\]|\.\.)/g, r = /^\d+$/, n = /^\d/, a = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, s = /^\s*(['"]?)(.*?)(\1)\s*$/, o = 512, c = new e(o), f = new e(o), d = new e(o);
  zt = {
    Cache: e,
    split: m,
    normalizePath: h,
    setter: function(u) {
      var g = h(u);
      return f.get(u) || f.set(u, function(_, l) {
        for (var w = 0, $ = g.length, F = _; w < $ - 1; ) {
          var M = g[w];
          if (M === "__proto__" || M === "constructor" || M === "prototype")
            return _;
          F = F[g[w++]];
        }
        F[g[w]] = l;
      });
    },
    getter: function(u, g) {
      var T = h(u);
      return d.get(u) || d.set(u, function(l) {
        for (var w = 0, $ = T.length; w < $; )
          if (l != null || !g) l = l[T[w++]];
          else return;
        return l;
      });
    },
    join: function(u) {
      return u.reduce(function(g, T) {
        return g + (y(T) || r.test(T) ? "[" + T + "]" : (g ? "." : "") + T);
      }, "");
    },
    forEach: function(u, g, T) {
      p(Array.isArray(u) ? u : m(u), g, T);
    }
  };
  function h(u) {
    return c.get(u) || c.set(
      u,
      m(u).map(function(g) {
        return g.replace(s, "$2");
      })
    );
  }
  function m(u) {
    return u.match(t) || [""];
  }
  function p(u, g, T) {
    var _ = u.length, l, w, $, F;
    for (w = 0; w < _; w++)
      l = u[w], l && (S(l) && (l = '"' + l + '"'), F = y(l), $ = !F && /^\d+$/.test(l), g.call(T, l, F, $, w, u));
  }
  function y(u) {
    return typeof u == "string" && u && ["'", '"'].indexOf(u.charAt(0)) !== -1;
  }
  function E(u) {
    return u.match(n) && !u.match(r);
  }
  function v(u) {
    return a.test(u);
  }
  function S(u) {
    return !y(u) && (E(u) || v(u));
  }
  return zt;
}
var Me = $a(), Bt, Sr;
function Aa() {
  if (Sr) return Bt;
  Sr = 1;
  const e = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, t = (h) => h.match(e) || [], r = (h) => h[0].toUpperCase() + h.slice(1), n = (h, m) => t(h).join(m).toLowerCase(), a = (h) => t(h).reduce(
    (m, p) => `${m}${m ? p[0].toUpperCase() + p.slice(1).toLowerCase() : p.toLowerCase()}`,
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
var Vt = Aa(), yt = { exports: {} }, _r;
function Oa() {
  if (_r) return yt.exports;
  _r = 1, yt.exports = function(a) {
    return e(t(a), a);
  }, yt.exports.array = e;
  function e(a, s) {
    var o = a.length, c = new Array(o), f = {}, d = o, h = r(s), m = n(a);
    for (s.forEach(function(y) {
      if (!m.has(y[0]) || !m.has(y[1]))
        throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }); d--; )
      f[d] || p(a[d], d, /* @__PURE__ */ new Set());
    return c;
    function p(y, E, v) {
      if (v.has(y)) {
        var S;
        try {
          S = ", node was:" + JSON.stringify(y);
        } catch {
          S = "";
        }
        throw new Error("Cyclic dependency" + S);
      }
      if (!m.has(y))
        throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(y));
      if (!f[E]) {
        f[E] = !0;
        var u = h.get(y) || /* @__PURE__ */ new Set();
        if (u = Array.from(u), E = u.length) {
          v.add(y);
          do {
            var g = u[--E];
            p(g, m.get(g), v);
          } while (E);
          v.delete(y);
        }
        c[--o] = y;
      }
    }
  }
  function t(a) {
    for (var s = /* @__PURE__ */ new Set(), o = 0, c = a.length; o < c; o++) {
      var f = a[o];
      s.add(f[0]), s.add(f[1]);
    }
    return Array.from(s);
  }
  function r(a) {
    for (var s = /* @__PURE__ */ new Map(), o = 0, c = a.length; o < c; o++) {
      var f = a[o];
      s.has(f[0]) || s.set(f[0], /* @__PURE__ */ new Set()), s.has(f[1]) || s.set(f[1], /* @__PURE__ */ new Set()), s.get(f[0]).add(f[1]);
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
const Ca = /* @__PURE__ */ bn(Fa), Ia = Object.prototype.toString, Ra = Error.prototype.toString, Pa = RegExp.prototype.toString, Ma = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", ka = /^Symbol\((.*)\)(.*)$/;
function Da(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function Nr(e, t = !1) {
  if (e == null || e === !0 || e === !1) return "" + e;
  const r = typeof e;
  if (r === "number") return Da(e);
  if (r === "string") return t ? `"${e}"` : e;
  if (r === "function") return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol") return Ma.call(e).replace(ka, "Symbol($1)");
  const n = Ia.call(e).slice(8, -1);
  return n === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : n === "Error" || e instanceof Error ? "[" + Ra.call(e) + "]" : n === "RegExp" ? Pa.call(e) : null;
}
function $e(e, t) {
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
class $r {
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
    }), typeof t == "string" ? t.replace(La, (a, s) => $e(r[s])) : typeof t == "function" ? t(r) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, r, n, a, s) {
    const o = new $r(t, r, n, a);
    if (s)
      return o;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[jn] = "Error", this.name = o.name, this.message = o.message, this.type = o.type, this.value = o.value, this.path = o.path, this.errors = o.errors, this.inner = o.inner, Error.captureStackTrace && Error.captureStackTrace(this, ue);
  }
  static [wn](t) {
    return $r[Symbol.hasInstance](t) || super[Symbol.hasInstance](t);
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
}, za = {
  isValue: "${path} field must be ${value}"
}, jt = {
  noUnknown: "${path} field has unspecified keys: ${unknown}",
  exact: "${path} object contains unknown properties: ${properties}"
}, Tt = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, Ba = {
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
  boolean: za,
  tuple: Ba
});
const Ft = (e) => e && e.__isYupSchema__;
class Nt {
  static fromOptions(t, r) {
    if (!r.then && !r.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: n,
      then: a,
      otherwise: s
    } = r, o = typeof n == "function" ? n : (...c) => c.every((f) => f === n);
    return new Nt(t, (c, f) => {
      var d;
      let h = o(...c) ? a : s;
      return (d = h?.(f)) != null ? d : f;
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
  }, c, f) {
    const {
      name: d,
      test: h,
      params: m,
      message: p,
      skipAbsent: y
    } = e;
    let {
      parent: E,
      context: v,
      abortEarly: S = o.spec.abortEarly,
      disableStackTrace: u = o.spec.disableStackTrace
    } = a;
    const g = {
      value: r,
      parent: E,
      context: v
    };
    function T(D = {}) {
      const L = Tn(Object.assign({
        value: r,
        originalValue: s,
        label: o.spec.label,
        path: D.path || n,
        spec: o.spec,
        disableStackTrace: D.disableStackTrace || u
      }, m, D.params), g), q = new ue(ue.formatError(D.message || p, L), r, L.path, D.type || d, L.disableStackTrace);
      return q.params = L, q;
    }
    const _ = S ? c : f;
    let l = {
      path: n,
      parent: E,
      type: d,
      from: a.from,
      createError: T,
      resolve(D) {
        return En(D, g);
      },
      options: a,
      originalValue: s,
      schema: o
    };
    const w = (D) => {
      ue.isError(D) ? _(D) : D ? f(null) : _(T());
    }, $ = (D) => {
      ue.isError(D) ? _(D) : c(D);
    };
    if (y && Ne(r))
      return w(!0);
    let M;
    try {
      var V;
      if (M = h.call(l, r, l), typeof ((V = M) == null ? void 0 : V.then) == "function") {
        if (a.sync)
          throw new Error(`Validation test of type: "${l.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(M).then(w, $);
      }
    } catch (D) {
      $(D);
      return;
    }
    w(M);
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
function Va(e, t, r, n = r) {
  let a, s, o;
  return t ? (Me.forEach(t, (c, f, d) => {
    let h = f ? c.slice(1, c.length - 1) : c;
    e = e.resolve({
      context: n,
      parent: a,
      value: r
    });
    let m = e.type === "tuple", p = d ? parseInt(h, 10) : 0;
    if (e.innerType || m) {
      if (m && !d) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);
      if (r && p >= r.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${c}, in the path: ${t}. because there is no value at that index. `);
      a = r, r = r && r[p], e = m ? e.spec.types[p] : e.innerType;
    }
    if (!d) {
      if (!e.fields || !e.fields[h]) throw new Error(`The schema does not contain the path: ${t}. (failed at: ${o} which is a type: "${e.type}")`);
      a = r, r = r && r[h], e = e.fields[h];
    }
    s = h, o = f ? "[" + c + "]" : "." + c;
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
    } = r, f = t;
    c || (f = this._cast(f, Object.assign({
      assert: !1
    }, r)));
    let d = [];
    for (let h of Object.values(this.internalTests))
      h && d.push(h);
    this.runTests({
      path: s,
      value: f,
      originalValue: o,
      options: r,
      tests: d
    }, n, (h) => {
      if (h.length)
        return a(h, f);
      this.runTests({
        path: s,
        value: f,
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
      path: f,
      options: d
    } = t, h = (v) => {
      a || (a = !0, r(v, o));
    }, m = (v) => {
      a || (a = !0, n(v, o));
    }, p = s.length, y = [];
    if (!p) return m([]);
    let E = {
      value: o,
      originalValue: c,
      path: f,
      options: d,
      schema: this
    };
    for (let v = 0; v < s.length; v++) {
      const S = s[v];
      S(E, h, function(g) {
        g && (Array.isArray(g) ? y.push(...g) : y.push(g)), --p <= 0 && m(y);
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
    const f = typeof c == "number";
    let d = n[c];
    const h = Object.assign({}, o, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: !0,
      parent: n,
      value: d,
      originalValue: s[c],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [f ? "index" : "key"]: c,
      path: f || c.includes(".") ? `${a || ""}[${f ? c : `"${c}"`}]` : (a ? `${a}.` : "") + t
    });
    return (m, p, y) => this.resolve(h)._validate(d, h, p, y);
  }
  validate(t, r) {
    var n;
    let a = this.resolve(Object.assign({}, r, {
      value: t
    })), s = (n = r?.disableStackTrace) != null ? n : a.spec.disableStackTrace;
    return new Promise((o, c) => a._validate(t, r, (f, d) => {
      ue.isError(f) && (f.value = d), c(f);
    }, (f, d) => {
      f.length ? c(new ue(f, d, void 0, void 0, s)) : o(d);
    }));
  }
  validateSync(t, r) {
    var n;
    let a = this.resolve(Object.assign({}, r, {
      value: t
    })), s, o = (n = r?.disableStackTrace) != null ? n : a.spec.disableStackTrace;
    return a._validate(t, Object.assign({}, r, {
      sync: !0
    }), (c, f) => {
      throw ue.isError(c) && (c.value = f), c;
    }, (c, f) => {
      if (c.length) throw new ue(c, t, void 0, void 0, o);
      s = f;
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
      tests: r.tests.filter((f, d, h) => h.findIndex((m) => m.OPTIONS.name === f.OPTIONS.name) === d).map((f) => {
        const d = f.OPTIONS.params && t ? Tn(Object.assign({}, f.OPTIONS.params), t) : f.OPTIONS.params;
        return {
          name: f.OPTIONS.name,
          params: d
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
  } = Va(this, t, r, n.context);
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
  return new $n();
}
class $n extends ye {
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
Et.prototype = $n.prototype;
let An = /* @__PURE__ */ new Date(""), as = (e) => Object.prototype.toString.call(e) === "[object Date]";
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
lt.INVALID_DATE = An;
lr.prototype = lt.prototype;
lr.INVALID_DATE = An;
function ss(e, t = []) {
  let r = [], n = /* @__PURE__ */ new Set(), a = new Set(t.map(([o, c]) => `${o}-${c}`));
  function s(o, c) {
    let f = Me.split(o)[0];
    n.add(f), a.has(`${c}-${f}`) || r.push([c, f]);
  }
  for (const o of Object.keys(e)) {
    let c = e[o];
    n.add(o), Le.isRef(c) && c.isSibling ? s(c.path, o) : Ft(c) && "deps" in c && c.deps.forEach((f) => s(f, o));
  }
  return Ca.array(Array.from(n), r).reverse();
}
function Ar(e, t) {
  let r = 1 / 0;
  return e.some((n, a) => {
    var s;
    if ((s = t.path) != null && s.includes(n))
      return r = a, !0;
  }), r;
}
function On(e) {
  return (t, r) => Ar(e, t) - Ar(e, r);
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
  const r = [...Me.normalizePath(t)];
  if (r.length === 1) return r[0] in e;
  let n = r.pop(), a = Me.getter(Me.join(r), !0)(e);
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
    let s = this.fields, o = (n = r.stripUnknown) != null ? n : this.spec.noUnknown, c = [].concat(this._nodes, Object.keys(a).filter((m) => !this._nodes.includes(m))), f = {}, d = Object.assign({}, r, {
      parent: f,
      __validating: r.__validating || !1
    }), h = !1;
    for (const m of c) {
      let p = s[m], y = m in a, E = a[m];
      if (p) {
        let v;
        d.path = (r.path ? `${r.path}.` : "") + m, p = p.resolve({
          value: E,
          context: r.context,
          parent: f
        });
        let S = p instanceof ye ? p.spec : void 0, u = S?.strict;
        if (S != null && S.strip) {
          h = h || m in a;
          continue;
        }
        v = !r.__validating || !u ? p.cast(E, d) : E, v !== void 0 && (f[m] = v);
      } else y && !o && (f[m] = E);
      (y !== m in f || f[m] !== E) && (h = !0);
    }
    return h ? f : a;
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
    }, ...s], r.__validating = !0, r.originalValue = o, super._validate(t, r, n, (f, d) => {
      if (!c || !Or(d)) {
        a(f, d);
        return;
      }
      o = o || d;
      let h = [];
      for (let m of this._nodes) {
        let p = this.fields[m];
        !p || Le.isRef(p) || h.push(p.asNestedTest({
          options: r,
          key: m,
          parent: d,
          parentPath: r.path,
          originalParent: o
        }));
      }
      this.runTests({
        tests: h,
        value: d,
        originalValue: o,
        options: r
      }, n, (m) => {
        a(m.sort(this._sortErrors).concat(f), d);
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
    let a = Me.getter(t, !0);
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
      const f = this.innerType.cast(o, Object.assign({}, r, {
        path: `${r.path || ""}[${c}]`,
        parent: n,
        originalValue: o,
        value: o,
        index: c
      }));
      return f !== o && (a = !0), f;
    });
    return a ? s : n;
  }
  _validate(t, r = {}, n, a) {
    var s;
    let o = this.innerType, c = (s = r.recursive) != null ? s : this.spec.recursive;
    r.originalValue != null && r.originalValue, super._validate(t, r, n, (f, d) => {
      var h;
      if (!c || !o || !this._typeCheck(d)) {
        a(f, d);
        return;
      }
      let m = new Array(d.length);
      for (let y = 0; y < d.length; y++) {
        var p;
        m[y] = o.asNestedTest({
          options: r,
          index: y,
          parent: d,
          parentPath: r.path,
          originalParent: (p = r.originalValue) != null ? p : t
        });
      }
      this.runTests({
        value: d,
        tests: m,
        originalValue: (h = r.originalValue) != null ? h : t,
        options: r
      }, n, (y) => a(y.concat(f), d));
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
function At(e, t = "create") {
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
      const f = c[e], d = c[t];
      f != null && d != null && (o[String(f)] = String(d));
    }), o;
  }
  const s = {};
  return r.forEach((o) => {
    const c = o[a] ?? "Others", f = o[e], d = o[t];
    f == null || d == null || (s[c] || (s[c] = {}), s[c][String(f)] = String(d));
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
    o == null && (o = a.default), a.multiple === !0 || a.type === "checkbox" || a.type === "tags" ? t[s] = Array.isArray(o) ? o : typeof o == "string" ? o.split(",").map((f) => f.trim()).filter(Boolean) : [] : a.type === "json" ? t[s] = typeof o == "object" && o !== null ? JSON.stringify(o, null, 2) : o ?? "" : a.type === "date" ? t[s] = typeof o == "string" ? o.slice(0, 10) : "" : a.type === "time" ? typeof o == "string" ? o.includes("T") ? t[s] = o.slice(11, 16) : t[s] = o.slice(0, 5) : t[s] = "" : s === "blocked" || s === "blacklist" ? t[s] = String(o ?? "false") : t[s] = o ?? "";
    let c;
    a.type === "file" ? c = a.multiple ? er().of(Xt()) : Xt() : a.multiple === !0 || a.type === "checkbox" || a.type === "tags" ? c = er().of(tt()) : a.type === "email" ? c = tt().email("Invalid email") : a.type === "number" ? c = Et().typeError("Must be a number") : a.type === "json" ? c = tt().test("json", "Invalid JSON", (f) => {
      if (!f) return !0;
      try {
        return JSON.parse(f), !0;
      } catch {
        return !1;
      }
    }) : c = tt(), a.required && (c = c.required(
      a.error_message || `${a.label || s} is required`
    )), a?.validate?.regex && typeof a.validate.regex == "string" && (c = c.matches(
      new RegExp(a?.validate?.regex),
      a?.error_message || "Invalid input format"
    )), a?.validate && Object.entries(a.validate).forEach(([f, d]) => {
      switch (f) {
        case "email":
          d && (c = c.email("Invalid email format"));
          break;
        case "mobile":
          c = c.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          c = c.matches(
            new RegExp(d),
            `Must match pattern: ${d}`
          );
          break;
        case "date":
          c = lr().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((h, m) => {
            if (typeof m == "string") {
              const p = m.replace(/-/g, "/"), [y, E, v] = p.split("/");
              if (y && E && v)
                return /* @__PURE__ */ new Date(`${v}-${E}-${y}`);
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
          c = Et().typeError("Must be a decimal").transform((h, m) => {
            if (m == null || m === "") return;
            const p = Number(m);
            if (isNaN(p)) return h;
            if (typeof h == "number" && !isNaN(h)) {
              const y = Number(h);
              return Number.isInteger(y) ? Number(p.toFixed(y)) : p;
            }
            return p;
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
          const h = Number(d);
          isNaN(h) || (c = c.min(h, `Minimum length is ${h}`));
          break;
        }
        case "length-max": {
          const h = Number(d);
          isNaN(h) || (c = c.max(h, `Maximum length is ${h}`));
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
)).data.refid, $s = {
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
async function As({
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
      const p = he(o.where ?? {}, { refid: t });
      c = {
        ...o,
        table: o.table,
        cols: o.columns,
        where: p
      };
    }
    const { data: f } = await He(
      r,
      c,
      o.queryid,
      t
    ), d = Array.isArray(f?.data?.data) ? f.data.data : Array.isArray(f?.data) ? f.data : f, h = Array.isArray(d) ? d.map(me) : [], m = ve(
      e.valueKey ?? "value",
      e.labelKey ?? "title",
      h,
      e.groupKey
    );
    n(s.target, m);
  }
}
async function Mn(e, t) {
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
    let d = !0, h = null;
    return Mn(e, t).then((m) => {
      d && (h = m, n(m));
    }), () => {
      d = !1, h && URL.revokeObjectURL(h);
    };
  }, [c, a, e, t]);
  let f = e.split("/").pop();
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    c === "image" && r ? /* @__PURE__ */ i.jsx(
      "img",
      {
        src: r,
        alt: f,
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
        onKeyDown: (d) => d.key === "Enter" && s(!0),
        className: "inline-flex cursor-pointer items-center gap-1",
        title: "Click to preview",
        children: [
          Os(c),
          /* @__PURE__ */ i.jsx("span", { className: "text-sm", children: f })
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
  const f = `
    text-sm text-gray-600 break-words
  `, d = `
    block text-sm font-semibold  transition-all duration-300 text-gray-700 capitalize
  `, [h, m] = le(
    o ?? e.options ?? {}
  ), p = ee.useRef(!1);
  ee.useEffect(() => {
    o && m(o);
  }, [o]);
  const y = ee.useMemo(
    () => Ts(h),
    [h]
  );
  ee.useEffect(() => {
    let g = !0, T = e.valueKey ?? "value", _ = e.labelKey ?? "title";
    return (async () => {
      if (e?.options) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const V = Object.values(e.options);
          if (V.length && typeof V[0] == "string") {
            m(e.options);
            return;
          }
        }
        const F = (Array.isArray(e.options) ? e.options : [e.options]).map(me), M = ve(
          T,
          _,
          F,
          e.groupKey
          // auto-uses `category` if present
        );
        m(M);
        return;
      }
      const w = e?.source ?? {};
      if (e.type === "dataMethod") {
        const $ = e.method, F = $ ? r[$] : void 0;
        if (F)
          try {
            const M = await Promise.resolve(F()), V = Array.isArray(M?.data?.data) ? M.data.data : Array.isArray(M?.data) ? M.data : M, D = Array.isArray(V) ? V.map(me) : [], L = ve(T, _, D, e.groupKey);
            g && m(L);
          } catch (M) {
            console.error("Method execution failed:", M), g && m({});
          }
        else
          g && m({});
      }
      if (w.type === "api" && w.url)
        try {
          const $ = await W({
            method: w.method || "GET",
            url: w.url,
            data: w.body ?? {},
            params: w.params ?? {},
            headers: w.headers ?? {}
          }), F = Array.isArray($?.data?.data) ? $.data.data : Array.isArray($?.data) ? $.data : $, M = Array.isArray(F) ? F.map(me) : [], V = ve(T, _, M, e.groupKey);
          g && m(V);
        } catch ($) {
          console.error("API execution failed:", $), g && m({});
        }
      if (e.table || e.type === "dataSelector" || e.queryid) {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let $;
          if (e.type === "dataSelector")
            $ = {
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
            $ = {
              table: e.table,
              cols: e.columns,
              where: e.where ? a ? he(e.where, { refid: a }) : e.where : void 0
            };
          }
          const F = await He(n, $, e?.queryid, void 0, s), M = Array.isArray(F?.data?.data) ? F.data.data : Array.isArray(F?.data) ? F.data : F, V = Array.isArray(M) ? M.map(me) : [], D = ve(T, _, V, e.groupKey);
          g && m(D);
        } catch ($) {
          console.error("API fetch failed:", $);
        }
      }
    })(), () => {
      g = !1;
    };
  }, [
    e.options,
    e.source,
    e.table,
    e.columns,
    e.where,
    a
  ]);
  const E = e?.name ? t?.[e.name] : void 0;
  ee.useEffect(() => {
    p.current || !c || !E || (p.current = !0, As({
      field: e,
      value: E,
      sqlOpsUrls: n,
      setFieldOptions: c
    }));
  }, [E, n, c]);
  let v;
  typeof E == "string" ? e.type === "date" ? v = E.split("T")[0] : e.type === "time" ? v = E.includes("T") ? E.slice(11, 16) : E.slice(0, 5) : v = Cr(E, y) : v = Cr(E, y);
  const S = v == null ? "" : typeof v == "string" || typeof v == "number" ? v : JSON.stringify(v), u = Es(E);
  return /* @__PURE__ */ i.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ i.jsx("label", { className: d, children: e?.label }),
    /* @__PURE__ */ i.jsx("div", { className: "relative", children: u ? u.type === "drawn" ? /* @__PURE__ */ i.jsx("svg", { viewBox: "0 0 300 150", className: "h-24 w-full border bg-white rounded", children: u.paths.map((g, T) => /* @__PURE__ */ i.jsx(
      "path",
      {
        d: g.d,
        stroke: g.color || "#000",
        strokeWidth: g.width || 2,
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      T
    )) }) : u.type === "text" ? /* @__PURE__ */ i.jsx("svg", { viewBox: "0 0 300 150", className: "h-24 w-full border bg-white rounded", children: /* @__PURE__ */ i.jsx(
      "text",
      {
        x: "10",
        y: "100",
        fontSize: u.data.style?.fontSize || 32,
        fontFamily: u.data.style?.fontFamily || "cursive",
        fill: u.data.style?.textColor || "#000",
        children: u.data.text
      }
    ) }) : u.type === "html" ? /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "border bg-white rounded p-2 text-sm",
        dangerouslySetInnerHTML: { __html: u.html }
      }
    ) : /* @__PURE__ */ i.jsx(
      "img",
      {
        src: u.src,
        alt: "signature",
        className: "h-24 object-contain border bg-white rounded"
      }
    ) : (e.type === "file" || e.type === "attachement" || e.type === "photo" || e.type === "avatar") && v ? /* @__PURE__ */ i.jsx(Fs, { sqlOpsUrls: n, filePath: String(v) }) : /* @__PURE__ */ i.jsx("p", { className: f, children: S }) })
  ] });
}
function Cs({ filePath: e, field_name: t, sqlOpsUrls: r }) {
  const [n, a] = le(null);
  return oe(() => {
    if (!open || !r) return;
    let s = !0, o = null;
    return Mn(e, r).then((c) => {
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
  methods: f
}) {
  return /* @__PURE__ */ i.jsx("div", { className: "bg-white border border-gray-100 p-4 min-h-3/10 overflow-auto", children: /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    /* @__PURE__ */ i.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ i.jsx("div", { className: "relative w-42 h-42 ", children: e?.fields?.filter((d) => d.type === "avatar").map((d) => {
      const h = t[d.name];
      return typeof h != "string" || h.trim() === "" ? null : /* @__PURE__ */ i.jsx(Cs, { field_name: d.name, filePath: h, sqlOpsUrls: n });
    }) }) }),
    /* @__PURE__ */ i.jsx("div", { className: "lg:col-span-10 min-h-0 max-h-40  overflow-y-auto custom-scrollbar", children: /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-12 gap-2", children: e.fields?.map((d, h) => {
      const m = t?.[d.name];
      return r.includes(d.name) || d.type === "avatar" || !m && m !== !1 && m !== 0 ? null : /* @__PURE__ */ i.jsx("div", { className: `hover:bg-gray-100 transition-colors duration-200 col-span-12 sm:col-span-6 ${ct[ut(d.width)] || "lg:col-span-4"}`, children: /* @__PURE__ */ i.jsx(
        dt,
        {
          field: d,
          data: t ?? {},
          sqlOpsUrls: n,
          methods: f,
          refid: c,
          module_refid: o,
          setFieldOptions: a,
          ...s[d.name] ? { optionsOverride: s[d.name] } : {}
        },
        d?.name
      ) }, d.name);
    }) }) })
  ] }) });
}
function cr({ tabObj: e, methods: t, tabName: r, sqlOpsUrls: n, refid: a, module_refid: s, setFieldOptions: o, fieldOptions: c }) {
  const [f, d] = ee.useState(null);
  return ee.useEffect(() => {
    let h = !1;
    return (async () => {
      const p = e?.config;
      if (!p?.type) {
        h || d(null);
        return;
      }
      if (p.type === "method") {
        const y = p.method, E = y ? t[y] : void 0;
        if (E)
          try {
            const v = await Promise.resolve(E());
            h || d(v || null);
          } catch (v) {
            console.error("Method execution failed:", v), h || d(null);
          }
        else
          h || d(null);
      }
      if (p.type === "api")
        try {
          const y = await W({
            method: p.method || "GET",
            // GET, POST, etc.
            url: p.url,
            data: p.body || {},
            // request body
            params: p.params || {},
            // query params
            headers: p.headers || {}
            // optional headers
          });
          h || d(y.data || null);
        } catch (y) {
          console.error("API fetch failed:", y), h || d(null);
        }
      if (p.type === "sql" && a && a != "0" || p?.dbopsid) {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let y = !1, E;
          p?.dbopsid && (y = !0, E = p?.dbopsid);
          const v = await W({
            method: "GET",
            url: n.baseURL + n.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          });
          if (!y) {
            let g = {
              ...p
            };
            p.where && (g = {
              ...p,
              where: he(p.where, {
                refid: a
              })
            }), E = (await W({
              method: "POST",
              url: n.baseURL + n.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: g,
                fields: At(p.fields, n.operation),
                forcefill: p.forcefill,
                datahash: v.data.refhash,
                srcid: s
              },
              headers: {
                Authorization: `Bearer ${n?.accessToken}`
              }
            }))?.data.refid;
          }
          const S = await W({
            method: "POST",
            url: n.baseURL + n.dbopsFetch,
            data: {
              refid: E,
              datahash: v.data.refhash
            },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }), u = Pn(S);
          h || d(u);
        } catch (y) {
          console.error("API fetch failed:", y);
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
  ]), /* @__PURE__ */ i.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-12 gap-2", children: f ? Object.keys(f).map((h, m) => {
    let p = { name: h, label: h };
    return /* @__PURE__ */ i.jsx(
      "div",
      {
        className: `col-span-12 sm:col-span-6 ${ct[ut(e.width)] || "lg:col-span-2"}`,
        children: /* @__PURE__ */ i.jsx(
          dt,
          {
            field: p,
            data: f ?? {},
            methods: t,
            refid: a,
            sqlOpsUrls: n,
            setFieldOptions: o,
            ...c[p.name] ? { optionsOverride: c[p.name] } : {}
          },
          h
        )
      },
      `field-${m}`
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
  return Ms(t) && !ks(t);
};
function Ms(e) {
  return !!e && typeof e == "object";
}
function ks(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || zs(e);
}
var Ds = typeof Symbol == "function" && Symbol.for, Ls = Ds ? Symbol.for("react.element") : 60103;
function zs(e) {
  return e.$$typeof === Ls;
}
function Bs(e) {
  return Array.isArray(e) ? [] : {};
}
function Ot(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? st(Bs(e), e, t) : e;
}
function Vs(e, t, r) {
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
  r = r || {}, r.arrayMerge = r.arrayMerge || Vs, r.isMergeableObject = r.isMergeableObject || Ps;
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
var rr = st, kn = typeof global == "object" && global && global.Object === Object && global, Gs = typeof self == "object" && self && self.Object === Object && self, Ee = kn || Gs || Function("return this")(), Fe = Ee.Symbol, Dn = Object.prototype, qs = Dn.hasOwnProperty, Ks = Dn.toString, et = Fe ? Fe.toStringTag : void 0;
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
function Be(e) {
  return e != null && typeof e == "object";
}
var Js = "[object Object]", ei = Function.prototype, ti = Object.prototype, zn = ei.toString, ri = ti.hasOwnProperty, ni = zn.call(Object);
function Mr(e) {
  if (!Be(e) || ze(e) != Js)
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
function Bn(e, t) {
  return e === t || e !== e && t !== t;
}
function Ct(e, t) {
  for (var r = e.length; r--; )
    if (Bn(e[r][0], t))
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
function Ae(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ae.prototype.clear = ai;
Ae.prototype.delete = oi;
Ae.prototype.get = li;
Ae.prototype.has = ci;
Ae.prototype.set = ui;
function di() {
  this.__data__ = new Ae(), this.size = 0;
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
function Vn(e) {
  if (!ft(e))
    return !1;
  var t = ze(e);
  return t == yi || t == gi || t == mi || t == bi;
}
var qt = Ee["__core-js_shared__"], kr = function() {
  var e = /[^.]+$/.exec(qt && qt.keys && qt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function xi(e) {
  return !!kr && kr in e;
}
var vi = Function.prototype, wi = vi.toString;
function Ve(e) {
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
var ji = /[\\^$.*+?()[\]{}|]/g, Ti = /^\[object .+?Constructor\]$/, Ei = Function.prototype, Si = Object.prototype, _i = Ei.toString, Ni = Si.hasOwnProperty, $i = RegExp(
  "^" + _i.call(Ni).replace(ji, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ai(e) {
  if (!ft(e) || xi(e))
    return !1;
  var t = Vn(e) ? $i : Ti;
  return t.test(Ve(e));
}
function Oi(e, t) {
  return e?.[t];
}
function Ue(e, t) {
  var r = Oi(e, t);
  return Ai(r) ? r : void 0;
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
function Mi(e) {
  var t = this.__data__;
  if (ot) {
    var r = t[e];
    return r === Ii ? void 0 : r;
  }
  return Pi.call(t, e) ? t[e] : void 0;
}
var ki = Object.prototype, Di = ki.hasOwnProperty;
function Li(e) {
  var t = this.__data__;
  return ot ? t[e] !== void 0 : Di.call(t, e);
}
var zi = "__lodash_hash_undefined__";
function Bi(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ot && t === void 0 ? zi : t, this;
}
function De(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
De.prototype.clear = Fi;
De.prototype.delete = Ci;
De.prototype.get = Mi;
De.prototype.has = Li;
De.prototype.set = Bi;
function Vi() {
  this.size = 0, this.__data__ = {
    hash: new De(),
    map: new (it || Ae)(),
    string: new De()
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
Ce.prototype.clear = Vi;
Ce.prototype.delete = Gi;
Ce.prototype.get = qi;
Ce.prototype.has = Ki;
Ce.prototype.set = Yi;
var Hi = 200;
function Wi(e, t) {
  var r = this.__data__;
  if (r instanceof Ae) {
    var n = r.__data__;
    if (!it || n.length < Hi - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Ce(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Qe(e) {
  var t = this.__data__ = new Ae(e);
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
var Dr = function() {
  try {
    var e = Ue(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function Un(e, t, r) {
  t == "__proto__" && Dr ? Dr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Qi = Object.prototype, Xi = Qi.hasOwnProperty;
function Gn(e, t, r) {
  var n = e[t];
  (!(Xi.call(e, t) && Bn(n, r)) || r === void 0 && !(t in e)) && Un(e, t, r);
}
function Rt(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var s = -1, o = t.length; ++s < o; ) {
    var c = t[s], f = void 0;
    f === void 0 && (f = e[c]), a ? Un(r, c, f) : Gn(r, c, f);
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
  return Be(e) && ze(e) == eo;
}
var qn = Object.prototype, to = qn.hasOwnProperty, ro = qn.propertyIsEnumerable, no = Lr(/* @__PURE__ */ function() {
  return arguments;
}()) ? Lr : function(e) {
  return Be(e) && to.call(e, "callee") && !ro.call(e, "callee");
}, ht = Array.isArray;
function ao() {
  return !1;
}
var Kn = typeof exports == "object" && exports && !exports.nodeType && exports, zr = Kn && typeof module == "object" && module && !module.nodeType && module, so = zr && zr.exports === Kn, Br = so ? Ee.Buffer : void 0, io = Br ? Br.isBuffer : void 0, Yn = io || ao, oo = 9007199254740991, lo = /^(?:0|[1-9]\d*)$/;
function co(e, t) {
  var r = typeof e;
  return t = t ?? oo, !!t && (r == "number" || r != "symbol" && lo.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var uo = 9007199254740991;
function Hn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= uo;
}
var fo = "[object Arguments]", ho = "[object Array]", po = "[object Boolean]", mo = "[object Date]", yo = "[object Error]", go = "[object Function]", bo = "[object Map]", xo = "[object Number]", vo = "[object Object]", wo = "[object RegExp]", jo = "[object Set]", To = "[object String]", Eo = "[object WeakMap]", So = "[object ArrayBuffer]", _o = "[object DataView]", No = "[object Float32Array]", $o = "[object Float64Array]", Ao = "[object Int8Array]", Oo = "[object Int16Array]", Fo = "[object Int32Array]", Co = "[object Uint8Array]", Io = "[object Uint8ClampedArray]", Ro = "[object Uint16Array]", Po = "[object Uint32Array]", J = {};
J[No] = J[$o] = J[Ao] = J[Oo] = J[Fo] = J[Co] = J[Io] = J[Ro] = J[Po] = !0;
J[fo] = J[ho] = J[So] = J[po] = J[_o] = J[mo] = J[yo] = J[go] = J[bo] = J[xo] = J[vo] = J[wo] = J[jo] = J[To] = J[Eo] = !1;
function Mo(e) {
  return Be(e) && Hn(e.length) && !!J[ze(e)];
}
function dr(e) {
  return function(t) {
    return e(t);
  };
}
var Wn = typeof exports == "object" && exports && !exports.nodeType && exports, nt = Wn && typeof module == "object" && module && !module.nodeType && module, ko = nt && nt.exports === Wn, Kt = ko && kn.process, Ze = function() {
  try {
    var e = nt && nt.require && nt.require("util").types;
    return e || Kt && Kt.binding && Kt.binding("util");
  } catch {
  }
}(), Vr = Ze && Ze.isTypedArray, Do = Vr ? dr(Vr) : Mo, Lo = Object.prototype, zo = Lo.hasOwnProperty;
function Zn(e, t) {
  var r = ht(e), n = !r && no(e), a = !r && !n && Yn(e), s = !r && !n && !a && Do(e), o = r || n || a || s, c = o ? Ji(e.length, String) : [], f = c.length;
  for (var d in e)
    (t || zo.call(e, d)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
    co(d, f))) && c.push(d);
  return c;
}
var Bo = Object.prototype;
function fr(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Bo;
  return e === r;
}
var Vo = Ln(Object.keys, Object), Uo = Object.prototype, Go = Uo.hasOwnProperty;
function qo(e) {
  if (!fr(e))
    return Vo(e);
  var t = [];
  for (var r in Object(e))
    Go.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function Qn(e) {
  return e != null && Hn(e.length) && !Vn(e);
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
var nr = Ue(Ee, "DataView"), ar = Ue(Ee, "Promise"), sr = Ue(Ee, "Set"), ir = Ue(Ee, "WeakMap"), Yr = "[object Map]", ll = "[object Object]", Hr = "[object Promise]", Wr = "[object Set]", Zr = "[object WeakMap]", Qr = "[object DataView]", cl = Ve(nr), ul = Ve(it), dl = Ve(ar), fl = Ve(sr), hl = Ve(ir), _e = ze;
(nr && _e(new nr(new ArrayBuffer(1))) != Qr || it && _e(new it()) != Yr || ar && _e(ar.resolve()) != Hr || sr && _e(new sr()) != Wr || ir && _e(new ir()) != Zr) && (_e = function(e) {
  var t = ze(e), r = t == ll ? e.constructor : void 0, n = r ? Ve(r) : "";
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
var jl = "[object Boolean]", Tl = "[object Date]", El = "[object Map]", Sl = "[object Number]", _l = "[object RegExp]", Nl = "[object Set]", $l = "[object String]", Al = "[object Symbol]", Ol = "[object ArrayBuffer]", Fl = "[object DataView]", Cl = "[object Float32Array]", Il = "[object Float64Array]", Rl = "[object Int8Array]", Pl = "[object Int16Array]", Ml = "[object Int32Array]", kl = "[object Uint8Array]", Dl = "[object Uint8ClampedArray]", Ll = "[object Uint16Array]", zl = "[object Uint32Array]";
function Bl(e, t, r) {
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
    case Ml:
    case kl:
    case Dl:
    case Ll:
    case zl:
      return wl(e, r);
    case El:
      return new n();
    case Sl:
    case $l:
      return new n(e);
    case _l:
      return xl(e);
    case Nl:
      return new n();
    case Al:
      return vl(e);
  }
}
var tn = Object.create, Vl = /* @__PURE__ */ function() {
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
  return typeof e.constructor == "function" && !fr(e) ? Vl(ur(e)) : {};
}
var Gl = "[object Map]";
function ql(e) {
  return Be(e) && _e(e) == Gl;
}
var rn = Ze && Ze.isMap, Kl = rn ? dr(rn) : ql, Yl = "[object Set]";
function Hl(e) {
  return Be(e) && _e(e) == Yl;
}
var nn = Ze && Ze.isSet, Wl = nn ? dr(nn) : Hl, Zl = 1, Ql = 2, Xl = 4, aa = "[object Arguments]", Jl = "[object Array]", ec = "[object Boolean]", tc = "[object Date]", rc = "[object Error]", sa = "[object Function]", nc = "[object GeneratorFunction]", ac = "[object Map]", sc = "[object Number]", ia = "[object Object]", ic = "[object RegExp]", oc = "[object Set]", lc = "[object String]", cc = "[object Symbol]", uc = "[object WeakMap]", dc = "[object ArrayBuffer]", fc = "[object DataView]", hc = "[object Float32Array]", pc = "[object Float64Array]", mc = "[object Int8Array]", yc = "[object Int16Array]", gc = "[object Int32Array]", bc = "[object Uint8Array]", xc = "[object Uint8ClampedArray]", vc = "[object Uint16Array]", wc = "[object Uint32Array]", Q = {};
Q[aa] = Q[Jl] = Q[dc] = Q[fc] = Q[ec] = Q[tc] = Q[hc] = Q[pc] = Q[mc] = Q[yc] = Q[gc] = Q[ac] = Q[sc] = Q[ia] = Q[ic] = Q[oc] = Q[lc] = Q[cc] = Q[bc] = Q[xc] = Q[vc] = Q[wc] = !0;
Q[rc] = Q[sa] = Q[uc] = !1;
function at(e, t, r, n, a, s) {
  var o, c = t & Zl, f = t & Ql, d = t & Xl;
  if (o !== void 0)
    return o;
  if (!ft(e))
    return e;
  var h = ht(e);
  if (h) {
    if (o = yl(e), !c)
      return Jn(e, o);
  } else {
    var m = _e(e), p = m == sa || m == nc;
    if (Yn(e))
      return Jo(e, c);
    if (m == ia || m == aa || p && !a) {
      if (o = f || p ? {} : Ul(e), !c)
        return f ? sl(e, Qo(o, e)) : nl(e, Ko(o, e));
    } else {
      if (!Q[m])
        return a ? e : {};
      o = Bl(e, m, c);
    }
  }
  s || (s = new Qe());
  var y = s.get(e);
  if (y)
    return y;
  s.set(e, o), Wl(e) ? e.forEach(function(S) {
    o.add(at(S, t, r, S, e, s));
  }) : Kl(e) && e.forEach(function(S, u) {
    o.set(u, at(S, t, r, u, e, s));
  });
  var E = d ? f ? ol : il : f ? pr : hr, v = h ? void 0 : E(e);
  return Zi(v || e, function(S, u) {
    v && (u = S, S = e[u]), Gn(o, u, at(S, t, r, u, e, s));
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
      var c = e(s), f = e(o), d, h, m;
      if (c && f) {
        if (h = s.length, h != o.length) return !1;
        for (d = h; d-- !== 0; )
          if (!a(s[d], o[d])) return !1;
        return !0;
      }
      if (c != f) return !1;
      var p = s instanceof Date, y = o instanceof Date;
      if (p != y) return !1;
      if (p && y) return s.getTime() == o.getTime();
      var E = s instanceof RegExp, v = o instanceof RegExp;
      if (E != v) return !1;
      if (E && v) return s.toString() == o.toString();
      var S = t(s);
      if (h = S.length, h !== t(o).length)
        return !1;
      for (d = h; d-- !== 0; )
        if (!r.call(o, S[d])) return !1;
      if (n && s instanceof Element && o instanceof Element)
        return s === o;
      for (d = h; d-- !== 0; )
        if (m = S[d], !(m === "_owner" && s.$$typeof) && !a(s[m], o[m]))
          return !1;
      return !0;
    }
    return s !== s && o !== o;
  }
  return Yt = function(o, c) {
    try {
      return a(o, c);
    } catch (f) {
      if (f.message && f.message.match(/stack|recursion/i) || f.number === -2146828260)
        return console.warn("Warning: react-fast-compare does not handle circular references.", f.name, f.message), !1;
      throw f;
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
var $c = "[object Symbol]";
function gr(e) {
  return typeof e == "symbol" || Be(e) && ze(e) == $c;
}
var Ac = "Expected a function";
function br(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Ac);
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
function Mc(e) {
  return e == null ? "" : la(e);
}
function ca(e) {
  return ht(e) ? oa(e, Pc) : gr(e) ? [e] : Jn(Rc(Mc(e)));
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
function kc() {
  if (cn) return Y;
  cn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, u = e ? Symbol.for("react.responder") : 60118, g = e ? Symbol.for("react.scope") : 60119;
  function T(l) {
    if (typeof l == "object" && l !== null) {
      var w = l.$$typeof;
      switch (w) {
        case t:
          switch (l = l.type, l) {
            case f:
            case d:
            case n:
            case s:
            case a:
            case m:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case c:
                case h:
                case E:
                case y:
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
    return T(l) === d;
  }
  return Y.AsyncMode = f, Y.ConcurrentMode = d, Y.ContextConsumer = c, Y.ContextProvider = o, Y.Element = t, Y.ForwardRef = h, Y.Fragment = n, Y.Lazy = E, Y.Memo = y, Y.Portal = r, Y.Profiler = s, Y.StrictMode = a, Y.Suspense = m, Y.isAsyncMode = function(l) {
    return _(l) || T(l) === f;
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
    return T(l) === E;
  }, Y.isMemo = function(l) {
    return T(l) === y;
  }, Y.isPortal = function(l) {
    return T(l) === r;
  }, Y.isProfiler = function(l) {
    return T(l) === s;
  }, Y.isStrictMode = function(l) {
    return T(l) === a;
  }, Y.isSuspense = function(l) {
    return T(l) === m;
  }, Y.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === n || l === d || l === s || l === a || l === m || l === p || typeof l == "object" && l !== null && (l.$$typeof === E || l.$$typeof === y || l.$$typeof === o || l.$$typeof === c || l.$$typeof === h || l.$$typeof === S || l.$$typeof === u || l.$$typeof === g || l.$$typeof === v);
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
var un;
function Dc() {
  return un || (un = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, u = e ? Symbol.for("react.responder") : 60118, g = e ? Symbol.for("react.scope") : 60119;
    function T(k) {
      return typeof k == "string" || typeof k == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      k === n || k === d || k === s || k === a || k === m || k === p || typeof k == "object" && k !== null && (k.$$typeof === E || k.$$typeof === y || k.$$typeof === o || k.$$typeof === c || k.$$typeof === h || k.$$typeof === S || k.$$typeof === u || k.$$typeof === g || k.$$typeof === v);
    }
    function _(k) {
      if (typeof k == "object" && k !== null) {
        var Ge = k.$$typeof;
        switch (Ge) {
          case t:
            var qe = k.type;
            switch (qe) {
              case f:
              case d:
              case n:
              case s:
              case a:
              case m:
                return qe;
              default:
                var pt = qe && qe.$$typeof;
                switch (pt) {
                  case c:
                  case h:
                  case E:
                  case y:
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
    var l = f, w = d, $ = c, F = o, M = t, V = h, D = n, L = E, q = y, re = r, X = s, z = a, Z = m, j = !1;
    function A(k) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), x(k) || _(k) === f;
    }
    function x(k) {
      return _(k) === d;
    }
    function N(k) {
      return _(k) === c;
    }
    function O(k) {
      return _(k) === o;
    }
    function P(k) {
      return typeof k == "object" && k !== null && k.$$typeof === t;
    }
    function I(k) {
      return _(k) === h;
    }
    function U(k) {
      return _(k) === n;
    }
    function ne(k) {
      return _(k) === E;
    }
    function ce(k) {
      return _(k) === y;
    }
    function te(k) {
      return _(k) === r;
    }
    function pe(k) {
      return _(k) === s;
    }
    function we(k) {
      return _(k) === a;
    }
    function Ie(k) {
      return _(k) === m;
    }
    H.AsyncMode = l, H.ConcurrentMode = w, H.ContextConsumer = $, H.ContextProvider = F, H.Element = M, H.ForwardRef = V, H.Fragment = D, H.Lazy = L, H.Memo = q, H.Portal = re, H.Profiler = X, H.StrictMode = z, H.Suspense = Z, H.isAsyncMode = A, H.isConcurrentMode = x, H.isContextConsumer = N, H.isContextProvider = O, H.isElement = P, H.isForwardRef = I, H.isFragment = U, H.isLazy = ne, H.isMemo = ce, H.isPortal = te, H.isProfiler = pe, H.isStrictMode = we, H.isSuspense = Ie, H.isValidElementType = T, H.typeOf = _;
  }()), H;
}
var dn;
function Lc() {
  return dn || (dn = 1, process.env.NODE_ENV === "production" ? xt.exports = kc() : xt.exports = Dc()), xt.exports;
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
  function o(E) {
    return e.isMemo(E) ? a : s[E.$$typeof] || t;
  }
  var c = Object.defineProperty, f = Object.getOwnPropertyNames, d = Object.getOwnPropertySymbols, h = Object.getOwnPropertyDescriptor, m = Object.getPrototypeOf, p = Object.prototype;
  function y(E, v, S) {
    if (typeof v != "string") {
      if (p) {
        var u = m(v);
        u && u !== p && y(E, u, S);
      }
      var g = f(v);
      d && (g = g.concat(d(v)));
      for (var T = o(E), _ = o(v), l = 0; l < g.length; ++l) {
        var w = g[l];
        if (!r[w] && !(S && S[w]) && !(_ && _[w]) && !(T && T[w])) {
          var $ = h(v, w);
          try {
            c(E, w, $);
          } catch {
          }
        }
      }
    }
    return E;
  }
  return Ht = y, Ht;
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
function Bc() {
  var e = Ta(Pt);
  return e || (process.env.NODE_ENV !== "production" ? We(!1, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.") : We()), e;
}
var be = function(t) {
  return typeof t == "function";
}, Mt = function(t) {
  return t !== null && typeof t == "object";
}, Vc = function(t) {
  return String(Math.floor(Number(t))) === t;
}, Wt = function(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}, Zt = function(t) {
  return Mt(t) && be(t.then);
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
function ke(e, t, r) {
  for (var n = sn(e), a = n, s = 0, o = ca(t); s < o.length - 1; s++) {
    var c = o[s], f = fe(e, o.slice(0, s + 1));
    if (f && (Mt(f) || Array.isArray(f)))
      a = a[c] = sn(f);
    else {
      var d = o[s + 1];
      a = a[c] = Vc(d) && Number(d) >= 0 ? [] : {};
    }
  }
  return (s === 0 ? e : a)[o[s]] === r ? e : (r === void 0 ? delete a[o[s]] : a[o[s]] = r, s === 0 && r === void 0 && delete n[o[s]], n);
}
function da(e, t, r, n) {
  r === void 0 && (r = /* @__PURE__ */ new WeakMap()), n === void 0 && (n = {});
  for (var a = 0, s = Object.keys(e); a < s.length; a++) {
    var o = s[a], c = e[o];
    Mt(c) ? r.get(c) || (r.set(c, !0), n[o] = Array.isArray(c) ? [] : {}, da(c, t, r, n[o])) : n[o] = t;
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
        values: ke(e.values, t.payload.field, t.payload.value)
      });
    case "SET_FIELD_TOUCHED":
      return ie({}, e, {
        touched: ke(e.touched, t.payload.field, t.payload.value)
      });
    case "SET_FIELD_ERROR":
      return ie({}, e, {
        errors: ke(e.errors, t.payload.field, t.payload.value)
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
  var t = e.validateOnChange, r = t === void 0 ? !0 : t, n = e.validateOnBlur, a = n === void 0 ? !0 : n, s = e.validateOnMount, o = s === void 0 ? !1 : s, c = e.isInitialValid, f = e.enableReinitialize, d = f === void 0 ? !1 : f, h = e.onSubmit, m = ua(e, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]), p = ie({
    validateOnChange: r,
    validateOnBlur: a,
    validateOnMount: o,
    onSubmit: h
  }, m), y = xe(p.initialValues), E = xe(p.initialErrors || Re), v = xe(p.initialTouched || vt), S = xe(p.initialStatus), u = xe(!1), g = xe({});
  process.env.NODE_ENV !== "production" && oe(function() {
    typeof c > "u" || (process.env.NODE_ENV !== "production" ? We(!1, "isInitialValid has been deprecated and will be removed in future versions of Formik. Please use initialErrors or validateOnMount instead.") : We());
  }, []), oe(function() {
    return u.current = !0, function() {
      u.current = !1;
    };
  }, []);
  var T = le(0), _ = T[1], l = xe({
    values: bt(p.initialValues),
    errors: bt(p.initialErrors) || Re,
    touched: bt(p.initialTouched) || vt,
    status: bt(p.initialStatus),
    isSubmitting: !1,
    isValidating: !1,
    submitCount: 0
  }), w = l.current, $ = ae(function(b) {
    var C = l.current;
    l.current = Gc(C, b), C !== l.current && _(function(R) {
      return R + 1;
    });
  }, []), F = ae(function(b, C) {
    return new Promise(function(R, B) {
      var G = p.validate(b, C);
      G == null ? R(Re) : Zt(G) ? G.then(function(K) {
        R(K || Re);
      }, function(K) {
        process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validate />", K), B(K);
      }) : R(G);
    });
  }, [p.validate]), M = ae(function(b, C) {
    var R = p.validationSchema, B = be(R) ? R(C) : R, G = C && B.validateAt ? B.validateAt(C, b) : Yc(b, B);
    return new Promise(function(K, se) {
      G.then(function() {
        K(Re);
      }, function(je) {
        je.name === "ValidationError" ? K(Kc(je)) : (process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validationSchema />", je), se(je));
      });
    });
  }, [p.validationSchema]), V = ae(function(b, C) {
    return new Promise(function(R) {
      return R(g.current[b].validate(C));
    });
  }, []), D = ae(function(b) {
    var C = Object.keys(g.current).filter(function(B) {
      return be(g.current[B].validate);
    }), R = C.length > 0 ? C.map(function(B) {
      return V(B, fe(b, B));
    }) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
    return Promise.all(R).then(function(B) {
      return B.reduce(function(G, K, se) {
        return K === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || K && (G = ke(G, C[se], K)), G;
      }, {});
    });
  }, [V]), L = ae(function(b) {
    return Promise.all([D(b), p.validationSchema ? M(b) : {}, p.validate ? F(b) : {}]).then(function(C) {
      var R = C[0], B = C[1], G = C[2], K = rr.all([R, B, G], {
        arrayMerge: Hc
      });
      return K;
    });
  }, [p.validate, p.validationSchema, D, F, M]), q = ge(function(b) {
    return b === void 0 && (b = w.values), $({
      type: "SET_ISVALIDATING",
      payload: !0
    }), L(b).then(function(C) {
      return u.current && ($({
        type: "SET_ISVALIDATING",
        payload: !1
      }), $({
        type: "SET_ERRORS",
        payload: C
      })), C;
    });
  });
  oe(function() {
    o && u.current === !0 && Pe(y.current, p.initialValues) && q(y.current);
  }, [o, q]);
  var re = ae(function(b) {
    var C = b && b.values ? b.values : y.current, R = b && b.errors ? b.errors : E.current ? E.current : p.initialErrors || {}, B = b && b.touched ? b.touched : v.current ? v.current : p.initialTouched || {}, G = b && b.status ? b.status : S.current ? S.current : p.initialStatus;
    y.current = C, E.current = R, v.current = B, S.current = G;
    var K = function() {
      $({
        type: "RESET_FORM",
        payload: {
          isSubmitting: !!b && !!b.isSubmitting,
          errors: R,
          touched: B,
          status: G,
          values: C,
          isValidating: !!b && !!b.isValidating,
          submitCount: b && b.submitCount && typeof b.submitCount == "number" ? b.submitCount : 0
        }
      });
    };
    if (p.onReset) {
      var se = p.onReset(w.values, Ge);
      Zt(se) ? se.then(K) : K();
    } else
      K();
  }, [p.initialErrors, p.initialStatus, p.initialTouched, p.onReset]);
  oe(function() {
    u.current === !0 && !Pe(y.current, p.initialValues) && d && (y.current = p.initialValues, re(), o && q(y.current));
  }, [d, p.initialValues, re, o, q]), oe(function() {
    d && u.current === !0 && !Pe(E.current, p.initialErrors) && (E.current = p.initialErrors || Re, $({
      type: "SET_ERRORS",
      payload: p.initialErrors || Re
    }));
  }, [d, p.initialErrors]), oe(function() {
    d && u.current === !0 && !Pe(v.current, p.initialTouched) && (v.current = p.initialTouched || vt, $({
      type: "SET_TOUCHED",
      payload: p.initialTouched || vt
    }));
  }, [d, p.initialTouched]), oe(function() {
    d && u.current === !0 && !Pe(S.current, p.initialStatus) && (S.current = p.initialStatus, $({
      type: "SET_STATUS",
      payload: p.initialStatus
    }));
  }, [d, p.initialStatus, p.initialTouched]);
  var X = ge(function(b) {
    if (g.current[b] && be(g.current[b].validate)) {
      var C = fe(w.values, b), R = g.current[b].validate(C);
      return Zt(R) ? ($({
        type: "SET_ISVALIDATING",
        payload: !0
      }), R.then(function(B) {
        return B;
      }).then(function(B) {
        $({
          type: "SET_FIELD_ERROR",
          payload: {
            field: b,
            value: B
          }
        }), $({
          type: "SET_ISVALIDATING",
          payload: !1
        });
      })) : ($({
        type: "SET_FIELD_ERROR",
        payload: {
          field: b,
          value: R
        }
      }), Promise.resolve(R));
    } else if (p.validationSchema)
      return $({
        type: "SET_ISVALIDATING",
        payload: !0
      }), M(w.values, b).then(function(B) {
        return B;
      }).then(function(B) {
        $({
          type: "SET_FIELD_ERROR",
          payload: {
            field: b,
            value: fe(B, b)
          }
        }), $({
          type: "SET_ISVALIDATING",
          payload: !1
        });
      });
    return Promise.resolve();
  }), z = ae(function(b, C) {
    var R = C.validate;
    g.current[b] = {
      validate: R
    };
  }, []), Z = ae(function(b) {
    delete g.current[b];
  }, []), j = ge(function(b, C) {
    $({
      type: "SET_TOUCHED",
      payload: b
    });
    var R = C === void 0 ? a : C;
    return R ? q(w.values) : Promise.resolve();
  }), A = ae(function(b) {
    $({
      type: "SET_ERRORS",
      payload: b
    });
  }, []), x = ge(function(b, C) {
    var R = be(b) ? b(w.values) : b;
    $({
      type: "SET_VALUES",
      payload: R
    });
    var B = C === void 0 ? r : C;
    return B ? q(R) : Promise.resolve();
  }), N = ae(function(b, C) {
    $({
      type: "SET_FIELD_ERROR",
      payload: {
        field: b,
        value: C
      }
    });
  }, []), O = ge(function(b, C, R) {
    var B = be(C) ? C(fe(w.values, b)) : C;
    $({
      type: "SET_FIELD_VALUE",
      payload: {
        field: b,
        value: B
      }
    });
    var G = R === void 0 ? r : R;
    return G ? q(ke(w.values, b, B)) : Promise.resolve();
  }), P = ae(function(b, C) {
    var R = C, B = b, G;
    if (!Wt(b)) {
      b.persist && b.persist();
      var K = b.target ? b.target : b.currentTarget, se = K.type, je = K.name, Dt = K.id, Lt = K.value, ga = K.checked, ba = K.outerHTML, vr = K.options, xa = K.multiple;
      R = C || je || Dt, !R && process.env.NODE_ENV !== "production" && hn({
        htmlContent: ba,
        documentationAnchorLink: "handlechange-e-reactchangeeventany--void",
        handlerName: "handleChange"
      }), B = /number|range/.test(se) ? (G = parseFloat(Lt), isNaN(G) ? "" : G) : /checkbox/.test(se) ? Zc(fe(w.values, R), ga, Lt) : vr && xa ? Wc(vr) : Lt;
    }
    R && O(R, B);
  }, [O, w.values]), I = ge(function(b) {
    if (Wt(b))
      return function(C) {
        return P(C, b);
      };
    P(b);
  }), U = ge(function(b, C, R) {
    C === void 0 && (C = !0), $({
      type: "SET_FIELD_TOUCHED",
      payload: {
        field: b,
        value: C
      }
    });
    var B = R === void 0 ? a : R;
    return B ? q(w.values) : Promise.resolve();
  }), ne = ae(function(b, C) {
    b.persist && b.persist();
    var R = b.target, B = R.name, G = R.id, K = R.outerHTML, se = C || B || G;
    !se && process.env.NODE_ENV !== "production" && hn({
      htmlContent: K,
      documentationAnchorLink: "handleblur-e-any--void",
      handlerName: "handleBlur"
    }), U(se, !0);
  }, [U]), ce = ge(function(b) {
    if (Wt(b))
      return function(C) {
        return ne(C, b);
      };
    ne(b);
  }), te = ae(function(b) {
    be(b) ? $({
      type: "SET_FORMIK_STATE",
      payload: b
    }) : $({
      type: "SET_FORMIK_STATE",
      payload: function() {
        return b;
      }
    });
  }, []), pe = ae(function(b) {
    $({
      type: "SET_STATUS",
      payload: b
    });
  }, []), we = ae(function(b) {
    $({
      type: "SET_ISSUBMITTING",
      payload: b
    });
  }, []), Ie = ge(function() {
    return $({
      type: "SUBMIT_ATTEMPT"
    }), q().then(function(b) {
      var C = b instanceof Error, R = !C && Object.keys(b).length === 0;
      if (R) {
        var B;
        try {
          if (B = qe(), B === void 0)
            return;
        } catch (G) {
          throw G;
        }
        return Promise.resolve(B).then(function(G) {
          return u.current && $({
            type: "SUBMIT_SUCCESS"
          }), G;
        }).catch(function(G) {
          if (u.current)
            throw $({
              type: "SUBMIT_FAILURE"
            }), G;
        });
      } else if (u.current && ($({
        type: "SUBMIT_FAILURE"
      }), C))
        throw b;
    });
  }), k = ge(function(b) {
    if (b && b.preventDefault && be(b.preventDefault) && b.preventDefault(), b && b.stopPropagation && be(b.stopPropagation) && b.stopPropagation(), process.env.NODE_ENV !== "production" && typeof document < "u") {
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
    setErrors: A,
    setFieldError: N,
    setFieldTouched: U,
    setFieldValue: O,
    setStatus: pe,
    setSubmitting: we,
    setTouched: j,
    setValues: x,
    setFormikState: te,
    submitForm: Ie
  }, qe = ge(function() {
    return h(w.values, Ge);
  }), pt = ge(function(b) {
    b && b.preventDefault && be(b.preventDefault) && b.preventDefault(), b && b.stopPropagation && be(b.stopPropagation) && b.stopPropagation(), re();
  }), fa = ae(function(b) {
    return {
      value: fe(w.values, b),
      error: fe(w.errors, b),
      touched: !!fe(w.touched, b),
      initialValue: fe(y.current, b),
      initialTouched: !!fe(v.current, b),
      initialError: fe(E.current, b)
    };
  }, [w.errors, w.touched, w.values]), ha = ae(function(b) {
    return {
      setValue: function(R, B) {
        return O(b, R, B);
      },
      setTouched: function(R, B) {
        return U(b, R, B);
      },
      setError: function(R) {
        return N(b, R);
      }
    };
  }, [O, U, N]), pa = ae(function(b) {
    var C = Mt(b), R = C ? b.name : b, B = fe(w.values, R), G = {
      name: R,
      value: B,
      onChange: I,
      onBlur: ce
    };
    if (C) {
      var K = b.type, se = b.value, je = b.as, Dt = b.multiple;
      K === "checkbox" ? se === void 0 ? G.checked = !!B : (G.checked = !!(Array.isArray(B) && ~B.indexOf(se)), G.value = se) : K === "radio" ? (G.checked = B === se, G.value = se) : je === "select" && Dt && (G.value = G.value || [], G.multiple = !0);
    }
    return G;
  }, [ce, I, w.values]), kt = _t(function() {
    return !Pe(y.current, w.values);
  }, [y.current, w.values]), ma = _t(function() {
    return typeof c < "u" ? kt ? w.errors && Object.keys(w.errors).length === 0 : c !== !1 && be(c) ? c(p) : c : w.errors && Object.keys(w.errors).length === 0;
  }, [c, kt, w.errors, p]), ya = ie({}, w, {
    initialValues: y.current,
    initialErrors: E.current,
    initialTouched: v.current,
    initialStatus: S.current,
    handleBlur: ce,
    handleChange: I,
    handleReset: pt,
    handleSubmit: k,
    resetForm: re,
    setErrors: A,
    setFormikState: te,
    setFieldTouched: U,
    setFieldValue: O,
    setFieldError: N,
    setStatus: pe,
    setSubmitting: we,
    setTouched: j,
    setValues: x,
    submitForm: Ie,
    validateForm: q,
    validateField: X,
    isValid: ma,
    dirty: kt,
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
      return ke(t, e.path, e.message);
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
      fe(t, o.path) || (t = ke(t, o.path, o.message));
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
        return Array.isArray(a) === !0 || Mr(a) ? or(a) : a !== "" ? a : void 0;
      }) : Mr(e[n]) ? t[n] = or(e[n]) : t[n] = e[n] !== "" ? e[n] : void 0;
    }
  return t;
}
function Hc(e, t, r) {
  var n = e.slice();
  return t.forEach(function(s, o) {
    if (typeof n[o] > "u") {
      var c = r.clone !== !1, f = c && r.isMergeableObject(s);
      n[o] = f ? rr(Array.isArray(s) ? [] : {}, s, r) : s;
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
  var r = e.action, n = ua(e, ["action"]), a = r ?? "#", s = Bc(), o = s.handleReset, c = s.handleSubmit;
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
  const [f, d] = le(!1), [h, m] = le(
    s ?? e.options ?? {}
  ), [p, y] = le(""), [E, v] = le(0), S = xe(null), [u, g] = le(!1), T = ee.useRef(p), _ = xe(null);
  ee.useEffect(() => {
    T.current = p;
  }, [p]), oe(() => {
    s && Object.keys(s).length !== 0 && m(s);
  }, [s]), oe(() => {
    if (!u) return;
    const z = (Z) => {
      const j = Z.target;
      _.current?.contains(j) || S.current?.contains(j) || (g(!1), y(""));
    };
    return document.addEventListener("mousedown", z), () => {
      document.removeEventListener("mousedown", z);
    };
  }, [u]);
  const l = e.name;
  ee.useEffect(() => {
    let z = !0;
    return (async () => {
      let j = e.valueKey ?? "value", A = e.labelKey ?? "title";
      if (e?.options) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const I = Object.values(e.options);
          if (I.length && typeof I[0] == "string") {
            m(e.options);
            return;
          }
        }
        const O = (Array.isArray(e.options) ? e.options : [e.options]).map(me), P = ve(
          j,
          A,
          O,
          e.groupKey
          // auto-uses `category` if present
        );
        m(P);
        return;
      }
      const x = e?.source ?? {};
      if (e.type === "dataMethod") {
        const N = e.method, O = N ? r[N] : void 0;
        if (O)
          try {
            const P = await Promise.resolve(O()), I = Array.isArray(P?.data?.data) ? P.data.data : Array.isArray(P?.data) ? P.data : P, U = Array.isArray(I) ? I.map(me) : [], ne = ve(j, A, U, e.groupKey);
            z && m(ne);
          } catch (P) {
            console.error("Method execution failed:", P), z && m({});
          }
        else
          z && m({});
      }
      if (x.type === "api" && x.url)
        try {
          const N = await W({
            method: x.method || "GET",
            url: x.url,
            data: x.body ?? {},
            params: x.params ?? {},
            headers: x.headers ?? {}
          }), O = Array.isArray(N?.data?.data) ? N.data.data : Array.isArray(N?.data) ? N.data : N, P = Array.isArray(O) ? O.map(me) : [], I = ve(j, A, P, e.groupKey);
          z && m(I);
        } catch (N) {
          console.error("API execution failed:", N), z && m({});
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
          const O = await He(n, N, e?.queryid, void 0, c), P = Array.isArray(O?.data?.data) ? O.data.data : Array.isArray(O?.data) ? O.data : O, I = Array.isArray(P) ? P.map(me) : [], U = ve(j, A, I, e.groupKey);
          z && m(U);
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
  `, $ = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, F = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, M = (z) => z.icon ? /* @__PURE__ */ i.jsx("i", { className: z.icon }) : null, V = _t(
    () => js(h),
    [h]
  ), D = V.length, L = _t(() => e.search || !p ? V : V.filter(
    ([, z]) => z.toLowerCase().includes(p.toLowerCase())
  ), [e.search, p, V]), q = (z, Z) => {
    if (u === !0)
      if (z.key === "ArrowDown")
        z.preventDefault(), v(
          (j) => j + 1 < L.length ? j + 1 : 0
        );
      else if (z.key === "ArrowUp")
        z.preventDefault(), v(
          (j) => j - 1 >= 0 ? j - 1 : L.length - 1
        );
      else if (z.key === "Enter") {
        z.preventDefault();
        const [j] = L[E] || [];
        j && t.setFieldValue(e.name, Z ? j : [...t.values[e.name], j]);
      } else z.key === "Escape" && (y(""), g(!1));
  };
  oe(() => {
    S.current?.querySelector(
      `[data-index="${E}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [E]), oe(() => {
    E >= L.length && v(0);
  }, [L, E]), oe(() => {
    const z = e.autocomplete, Z = e.ajaxchain;
    if (!z && !Z) return;
    const j = t.values[e.name];
    if (!j) return;
    const A = Array.isArray(Z) ? Z : Z ? [Z] : [];
    (async () => {
      try {
        if (vs(z)) {
          const N = z.src;
          if (!N || !n) return;
          const O = he(N.where ?? {}, {
            refid: j
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
              refid: j
            });
            P = {
              ...O,
              table: O.table,
              cols: O.columns,
              where: we
            };
          }
          const { data: I } = await He(n, P, e?.queryid, j, c);
          let U = e.valueKey ?? "value", ne = e.labelKey ?? "title";
          const ce = Array.isArray(I?.data?.data) ? I.data.data : Array.isArray(I?.data) ? I.data : I, te = Array.isArray(ce) ? ce.map(me) : [], pe = ve(
            U,
            ne,
            te,
            e.groupKey
          );
          o?.(N.target, pe);
        }
      } catch (N) {
        console.error("Autocomplete / AjaxChain fetch failed", N);
      }
    })();
  }, [t.values[e.name]]), ee.useEffect(() => {
    if (!e.search || !p.trim() || !e.table || !n) return;
    const z = ws(e.columns ?? ""), Z = new AbortController(), j = setTimeout(async () => {
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
        let x = {};
        Array.isArray(z) && z.forEach((ce) => {
          x[ce] = [p, "LIKE"];
        });
        const { data: N } = await He(n, A, e?.queryid, void 0, c, x);
        let O = e.valueKey ?? "value", P = e.labelKey ?? "title";
        const I = Array.isArray(N?.data?.data) ? N.data.data : Array.isArray(N?.data) ? N.data : N, U = Array.isArray(I) ? I.map(me) : [], ne = ve(
          O,
          P,
          U,
          e.groupKey
        );
        m(ne);
      } catch (A) {
        if (W.isCancel(A)) return;
        console.error("Search fetch failed", A);
      }
    }, 500);
    return () => {
      clearTimeout(j), Z.abort();
    };
  }, [p, a]);
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
    const j = e.multiple === !0;
    try {
      const A = await Promise.all(
        Array.from(z).map(async (x) => {
          const N = new FormData();
          return N.append("file", x), (await W({
            method: "POST",
            url: Z,
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
        j ? A.map((x) => x.path) : A[0]?.path
      );
    } catch (A) {
      console.error("File upload failed", A), t.setFieldError(l, "File upload failed");
    }
  }, X = async (z, Z, j) => {
    const A = Z[z];
    if (!A) return;
    const x = r?.[A];
    if (typeof x != "function") {
      console.error(`Method "${String(A)}" not found`);
      return;
    }
    try {
      await Promise.resolve(x(j));
    } catch (N) {
      console.error(`Method "${String(A)}" failed`, N);
    }
  };
  switch (e.type) {
    case "autocomplete": {
      const j = t.values[l] ?? "", A = p !== "" ? p : Ir(h, j) ?? String(j ?? ""), x = (O) => {
        const P = O.target.value;
        y(P), v(0), P.trim() ? g(!0) : (g(!1), t.setFieldValue(l, ""));
      }, N = (O) => {
        t.setFieldValue(l, O), y(""), g(!1), X("onChange", e, `${l}-${O}`);
      };
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: F, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsx("div", { ref: _, children: /* @__PURE__ */ i.jsx(
          "input",
          {
            className: `${w} ${$}`,
            value: A,
            placeholder: e.placeholder || "Type to search...",
            onChange: x,
            onFocus: () => {
              const O = String(t.values[l] ?? "");
              y(O);
            },
            onBlur: () => {
              setTimeout(() => g(!1), 150);
            },
            onKeyDown: (O) => {
              if (O.key === "Enter") {
                if (O.preventDefault(), L[E]) {
                  const [P] = L[E];
                  t.setFieldValue(l, P);
                } else p.trim() && t.setFieldValue(l, p.trim());
                g(!1);
                return;
              }
              q(O, !0);
            },
            disabled: e.disabled
          }
        ) }),
        /* @__PURE__ */ i.jsx(wt, { anchorRef: _, open: u, children: /* @__PURE__ */ i.jsx(
          "div",
          {
            ref: S,
            className: "bg-white border rounded shadow max-h-52 overflow-y-auto",
            children: L.length > 0 ? L.map(([O, P], I) => /* @__PURE__ */ i.jsx(
              "div",
              {
                id: `${l}-${O}`,
                "data-index": I,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${E === I ? "bg-gray-100" : "hover:bg-gray-100"}`,
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
        const j = t.values[l] ?? [];
        return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsxs("label", { className: F, children: [
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
                g((A) => !A), v(0);
              },
              onKeyDown: (A) => q(A, !1),
              onBlur: () => {
                e.multiple || setTimeout(() => {
                  g(!1), y("");
                }, 150);
              },
              children: [
                /* @__PURE__ */ i.jsx("span", { className: "text-sm text-gray-700 truncate", children: j.length > 0 ? j.join(", ") : `Select ${e.label}` }),
                /* @__PURE__ */ i.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
              ]
            }
          ),
          /* @__PURE__ */ i.jsx(wt, { anchorRef: _, open: u, children: /* @__PURE__ */ i.jsxs(
            "div",
            {
              ref: S,
              className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
              children: [
                e.search && /* @__PURE__ */ i.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "text",
                    value: p,
                    onChange: (A) => {
                      y(A.target.value), v(0);
                    },
                    placeholder: "Search...",
                    className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                  }
                ) }),
                L.length > 0 ? L.map(([A, x], N) => /* @__PURE__ */ i.jsxs(
                  "label",
                  {
                    "data-index": N,
                    className: `flex items-center gap-x-2 px-2 py-1 rounded cursor-pointer text-sm
                    ${j.includes(A) ? "bg-indigo-50 text-indigo-600 font-medium" : E === N ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: [
                      /* @__PURE__ */ i.jsx(
                        "input",
                        {
                          id: `${l}-${A}`,
                          type: "checkbox",
                          checked: j.includes(A),
                          onChange: (O) => {
                            const P = O.target.checked ? [...j, A] : j.filter((I) => I !== A);
                            t.setFieldValue(l, P), X("onChange", e, `${l}-${A}`);
                          },
                          className: "h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        }
                      ),
                      x
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
        /* @__PURE__ */ i.jsxs("label", { className: F, children: [
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
              g((j) => !j), v(0);
            },
            onKeyDown: (j) => q(j, !0),
            onBlur: () => {
              setTimeout(() => {
                g(!1), y("");
              }, 150);
            },
            children: [
              /* @__PURE__ */ i.jsx("span", { className: "text-sm text-gray-700 truncate", children: t.values[l] ? Ir(h, t.values[l]) ?? "Select option" : `Select ${e.label}` }),
              /* @__PURE__ */ i.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
            ]
          }
        ),
        /* @__PURE__ */ i.jsx(wt, { anchorRef: _, open: u, children: /* @__PURE__ */ i.jsxs(
          "div",
          {
            ref: S,
            className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
            children: [
              e.search && /* @__PURE__ */ i.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "text",
                  value: p,
                  onChange: (j) => {
                    y(j.target.value), v(0);
                  },
                  onKeyDown: (j) => q(j, !0),
                  placeholder: "Search...",
                  className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                }
              ) }),
              L.length > 0 && /* @__PURE__ */ i.jsx(
                "div",
                {
                  onMouseDown: (j) => {
                    j.preventDefault(), t.setFieldValue(l, ""), g(!1), y("");
                  },
                  className: "px-2 py-1 text-sm cursor-pointer hover:bg-gray-50",
                  children: "Clear selection"
                }
              ),
              L.length > 0 ? L.map(([j, A], x) => /* @__PURE__ */ i.jsx(
                "div",
                {
                  id: `${l}-${j}`,
                  "data-index": x,
                  onMouseDown: () => {
                    t.setFieldValue(l, j), g(!1), y(""), v(0), X("onChange", e, `${l}-${j}`);
                  },
                  className: `px-2 py-1 rounded cursor-pointer text-sm
                  ${t.values[l] === j ? "bg-indigo-50 text-indigo-600 font-medium" : E === x ? "bg-gray-100" : "hover:bg-gray-50"}`,
                  children: A
                },
                j
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
              className: `${w} ${$} min-h-[120px] resize-none`,
              onFocus: () => d(!0),
              name: l,
              value: t.values[l],
              onBlur: t.handleBlur,
              onChange: (j) => {
                t.setFieldValue(
                  l,
                  j.target.value
                ), X("onChange", e, `${l}`);
              },
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ i.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${f ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[l]) })
      ] }) });
    case "select":
      if (e.multiple === !0) {
        const j = t.values[l] ?? [];
        return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsxs("label", { className: F, children: [
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
                g((A) => !A), v(0);
              },
              onKeyDown: (A) => q(A, !1),
              onBlur: () => {
                e.multiple || setTimeout(() => {
                  g(!1), y("");
                }, 150);
              },
              children: [
                /* @__PURE__ */ i.jsx("span", { className: "text-sm text-gray-700 truncate", children: j.length > 0 ? j.join(", ") : `Select ${e.label}` }),
                /* @__PURE__ */ i.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
              ]
            }
          ),
          /* @__PURE__ */ i.jsx(wt, { anchorRef: _, open: u, children: /* @__PURE__ */ i.jsxs(
            "div",
            {
              ref: S,
              className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
              children: [
                e.search && /* @__PURE__ */ i.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "text",
                    value: p,
                    onChange: (A) => {
                      y(A.target.value), v(0);
                    },
                    placeholder: "Search...",
                    className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                  }
                ) }),
                L.length > 0 ? L.map(([A, x], N) => /* @__PURE__ */ i.jsxs(
                  "label",
                  {
                    "data-index": N,
                    className: `flex items-center gap-x-2 px-2 py-1 rounded cursor-pointer text-sm
                    ${j.includes(A) ? "bg-indigo-50 text-indigo-600 font-medium" : E === N ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: [
                      /* @__PURE__ */ i.jsx(
                        "input",
                        {
                          id: `${l}-${A}`,
                          type: "checkbox",
                          checked: j.includes(A),
                          onChange: (O) => {
                            const P = O.target.checked ? [...j, A] : j.filter((I) => I !== A);
                            t.setFieldValue(l, P), X("onChange", e, `${l}-${A}`);
                          },
                          className: "h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        }
                      ),
                      x
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
        /* @__PURE__ */ i.jsxs("label", { className: F, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsxs(
            "select",
            {
              className: `${w} ${$} appearance-none cursor-pointer pr-12`,
              onFocus: () => d(!0),
              name: l,
              id: l,
              value: t.values[l],
              onBlur: t.handleBlur,
              onChange: (j) => {
                t.setFieldValue(
                  l,
                  j.target.value === "" ? "" : j.target.value
                ), X("onChange", e, `${l}`);
              },
              disabled: e.disabled,
              children: [
                /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: e.placeholder || "Please select an option" }),
                !tr(h) && Object.entries(h).map(([j, A]) => /* @__PURE__ */ i.jsx("option", { value: j, className: "py-2", children: A }, j)),
                tr(h) && Object.entries(h).map(([j, A]) => /* @__PURE__ */ i.jsx("optgroup", { label: j, children: Object.entries(A).map(([x, N]) => /* @__PURE__ */ i.jsx("option", { value: x, children: N }, x)) }, j))
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
        /* @__PURE__ */ i.jsx("div", { className: `flex ${D > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(h || {}).map(([j, A]) => /* @__PURE__ */ i.jsxs(
          "label",
          {
            htmlFor: `${l}-${j}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  id: `${l}-${j}`,
                  type: "radio",
                  name: l,
                  checked: t.values[l] === j,
                  value: j,
                  onChange: (x) => {
                    t.setFieldValue(
                      l,
                      x.target.value === "" ? "" : x.target.value
                    ), X("onChange", e, `${l}-${j}`);
                  },
                  onBlur: t.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              A
            ]
          },
          j
        )) }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[l]) })
      ] });
    case "checkbox": {
      const j = t.values[l];
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: F, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(h || {}).map(([A, x]) => /* @__PURE__ */ i.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  id: `${l}-${A}`,
                  type: "checkbox",
                  checked: j.includes(A),
                  onChange: (N) => {
                    const O = N.target.checked ? [...j, A] : j.filter((P) => P !== A);
                    t.setFieldValue(l, O), X("onChange", e, `${l}-${A}`);
                  },
                  onBlur: t.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              x
            ]
          },
          A
        )) }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[l]) })
      ] });
    }
    case "tags": {
      const j = t.values[l], A = p.trim(), x = Array.isArray(h) ? h : Object.entries(h || {}).map(([I, U]) => ({ value: I, label: U })), N = (I) => {
        I && !j.includes(I) && (t.setFieldValue(l, [...j, I]), y(""));
      }, O = (I) => {
        t.setFieldValue(
          l,
          j.filter((U) => U !== I)
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
            className: `${w} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !e.disabled && document.getElementById(`${l}-input`)?.focus(),
            children: [
              j.map((I) => /* @__PURE__ */ i.jsxs(
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
                  value: p,
                  onChange: (I) => y(I.target.value),
                  onKeyDown: (I) => {
                    (I.key === "Enter" || I.key === ",") && (I.preventDefault(), N(A));
                  },
                  placeholder: j.length === 0 ? e.placeholder || "Type and press Enter" : "",
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
          e.icon && /* @__PURE__ */ i.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: M(e) }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              id: l,
              type: "file",
              className: `${w} ${$} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => d(!0),
              name: l,
              multiple: z,
              onChange: (j) => {
                const A = j.currentTarget.files;
                A && re(A), X("onChange", e, `${l}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ i.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${f ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        Z.map((j) => {
          const A = j?.split("/").pop();
          return A ? /* @__PURE__ */ i.jsx("div", { className: "mt-1", children: /* @__PURE__ */ i.jsx("span", { className: "text-sm", children: A }) }, j) : null;
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
              onChange: (j) => {
                t.setFieldValue(
                  l,
                  j.target.value
                ), X("onChange", e, `${l}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: e.disabled,
              className: `${w} ${$} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${f ? "opacity-20" : ""}`,
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
          e.icon && /* @__PURE__ */ i.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: M(e) }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              id: l,
              type: "date",
              name: l,
              min: e.min,
              max: e.max,
              value: t.values[l],
              onChange: (j) => {
                t.setFieldValue(
                  l,
                  j.target.value
                ), X("onChange", e, `${l}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled,
              className: `${w} ${$} ${e.icon ? "pl-9" : ""}`
            }
          ),
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${f ? "opacity-20" : ""}`,
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
          e.icon && /* @__PURE__ */ i.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: M(e) }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              id: l,
              type: e.type || "text",
              className: `${w} ${$} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => d(!0),
              name: l,
              value: t.values[l],
              onBlur: t.handleBlur,
              onChange: (j) => {
                t.setFieldValue(
                  l,
                  j.target.value
                ), X("onChange", e, `${l}`);
              },
              step: e.step,
              placeholder: e.placeholder,
              disabled: e.disabled,
              min: e.min,
              max: e.max
            }
          ),
          /* @__PURE__ */ i.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${f ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
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
          e.icon && /* @__PURE__ */ i.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: M(e) }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              id: l,
              type: e.type || "text",
              className: `${w} ${$} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => d(!0),
              name: l,
              value: t.values[l],
              onBlur: t.handleBlur,
              onChange: (j) => {
                t.setFieldValue(
                  l,
                  j.target.value
                ), X("onChange", e, `${l}`);
              },
              placeholder: e.placeholder,
              disabled: e.disabled,
              step: e.step,
              minLength: e.minlength,
              maxLength: e.maxlength
            }
          ),
          /* @__PURE__ */ i.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${f ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[l]) })
      ] });
  }
}
function eu({
  title: e,
  fields: t,
  data: r,
  onSubmit: n = (d) => {
  },
  onCancel: a = () => {
  },
  methods: s = {},
  sqlOpsUrls: o,
  refid: c,
  module_refid: f
}) {
  const d = gs(t, o?.operation), [h, m] = ee.useState({}), p = (u, g) => {
    m((T) => ({
      ...T,
      [u]: g
    }));
  }, { initialValues: y, validationSchema: E } = ee.useMemo(() => {
    const u = {}, g = {};
    return d.forEach((T) => {
      xs([T], u, g, r);
    }), {
      initialValues: u,
      validationSchema: g
    };
  }, [d, r]), v = qc({
    initialValues: y,
    enableReinitialize: !0,
    validationSchema: Cn().shape(E),
    onSubmit: (u) => {
      n(u), v.resetForm();
    }
  });
  function S(u) {
    u.preventDefault(), v.resetForm();
  }
  return /* @__PURE__ */ i.jsx("div", { className: "relative z-10 max-w-full ", children: /* @__PURE__ */ i.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ i.jsxs("form", { onSubmit: v.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "grid grid-flow-col auto-cols-max gap-4  overflow-x-auto", children: [
      d.map((u, g) => bs(u.hidden) || u.type === "geolocation" || u.vmode === "edit" && o?.operation === "create" ? null : /* @__PURE__ */ i.jsx(
        "div",
        {
          children: /* @__PURE__ */ i.jsx(
            Jc,
            {
              refid: c,
              module_refid: f,
              sqlOpsUrls: o,
              field: u,
              formik: v,
              methods: s,
              setFieldOptions: p,
              ...h[u.name] ? { optionsOverride: h[u.name] } : {}
            }
          )
        },
        u?.name ?? `field-${g}`
      )),
      /* @__PURE__ */ i.jsxs("div", { className: "", children: [
        /* @__PURE__ */ i.jsx("div", { children: "  " }),
        /* @__PURE__ */ i.jsx("button", { onClick: S, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Reset" }),
        Object.keys(v.errors).length > 0 && /* @__PURE__ */ i.jsx("div", { children: "  " })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "", children: [
        /* @__PURE__ */ i.jsx("div", { children: "  " }),
        /* @__PURE__ */ i.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" }),
        Object.keys(v.errors).length > 0 && /* @__PURE__ */ i.jsx("div", { children: "  " })
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
  module_refid: f
}) {
  const d = e.endPoints, h = e?.source?.refid, [m, p] = ee.useState(o), y = ee.useMemo(() => ms(e.fields), [e.fields]);
  ee.useEffect(() => {
    p(o ?? {});
  }, [o]);
  const E = ee.useCallback(
    (u) => {
      u && Object.keys(u).length > 0 && p(u);
    },
    []
  );
  ee.useEffect(() => {
    let u = !0;
    return (async () => {
      const T = e?.source ?? {};
      if (T?.type) {
        if (T.type === "method") {
          const _ = T.method, l = _ ? t[_] : void 0;
          if (l)
            try {
              const w = await Promise.resolve(l());
              u && E(w);
            } catch (w) {
              console.error("Method execution failed:", w);
            }
        }
        if (T.type === "api" && d?.operation !== "create")
          try {
            const _ = await W({
              method: T.method || "GET",
              url: T.url ?? "",
              data: T.body ?? {},
              params: T.params ?? {},
              headers: T.headers ?? {}
            });
            u && E(_.data);
          } catch (_) {
            console.error("API fetch failed:", _);
          }
        if (T.type === "sql" && T.refid && T.refid !== "0" && d?.operation !== "create" || d?.operation !== "create" && T.dbopsid) {
          if (!d) {
            console.error("SQL source requires formJson.endPoints but it is missing");
            return;
          }
          try {
            const _ = await $s.fetch(d, {
              source: {
                ...T,
                table: T.table,
                columns: T.columns,
                where: he(T.where, {
                  refid: h
                })
              },
              fields: At(e.fields, d.operation)
            }, T?.dbopsid, f);
            u && E(_);
          } catch (_) {
            console.error("API fetch failed:", _);
          }
        }
      }
    })(), () => {
      u = !1;
    };
  }, [
    r,
    d,
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.url || "",
    JSON.stringify(e?.source?.params ?? {}),
    JSON.stringify(e?.source?.body ?? {}),
    JSON.stringify(e?.source?.headers ?? {})
  ]);
  const v = async (u) => {
    const g = e?.source ?? {};
    let T = null;
    if (y.length > 0)
      try {
        T = await ys();
      } catch (l) {
        console.log("catch fetchGeolocation", l), T = null;
      }
    const _ = {
      ...u,
      ...Object.fromEntries(
        y.map((l) => [l, T])
      )
    };
    if (g.type === "method") {
      const l = g.method, w = l ? t[l] : void 0;
      if (w)
        try {
          const $ = await Promise.resolve(w(_));
          c?.(null), s?.($);
        } catch ($) {
          s?.($), console.error("Method execution failed:", $);
        }
    }
    if (g.type === "api") {
      if (!d) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const l = await W({
          method: g.method || "POST",
          url: d.baseURL + g.endpoint,
          data: _ ?? {},
          headers: {
            Authorization: `Bearer ${d?.accessToken}`
          }
        });
        c?.(null), s?.(l);
      } catch (l) {
        s?.(l), console.error("API fetch failed:", l);
      }
    }
    if (g.type === "sql") {
      const l = e.endPoints;
      if (!l) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let w = !1, $;
        g?.dbopsid && (w = !0, $ = g?.dbopsid);
        const F = await W({
          method: "GET",
          url: l.baseURL + l.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${l?.accessToken}`
          }
        });
        if (!w) {
          let D = {
            ...g
          };
          g.where && (D = {
            ...g,
            where: he(g.where, {
              refid: h
            })
          }), $ = (await W({
            method: "POST",
            url: l.baseURL + l.dbopsGetRefId,
            data: {
              operation: l.operation,
              source: D,
              fields: At(e.fields, l.operation),
              forcefill: e.forcefill,
              datahash: F.data.refhash,
              scrid: f
            },
            headers: {
              Authorization: `Bearer ${l?.accessToken}`
            }
          }))?.data.refid;
        }
        let M = {
          refid: $,
          fields: _,
          datahash: F.data.refhash,
          refid1: l.refid
        };
        g?.refid && (M.refid1 = g?.refid);
        const V = await W({
          method: "POST",
          url: l.baseURL + l[l.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: M,
          headers: {
            Authorization: `Bearer ${l?.accessToken}`
          }
        });
        c?.(null), s?.(V);
      } catch (w) {
        s?.(w), console.error("API fetch failed:", w);
      }
    }
  }, S = {
    simple: /* @__PURE__ */ i.jsx(
      eu,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: m,
        onSubmit: v,
        onCancel: n,
        methods: t,
        components: a,
        sqlOpsUrls: d,
        refid: h,
        module_refid: f
      }
    )
  };
  return /* @__PURE__ */ i.jsx("div", { className: "relative", children: S.simple });
}
function xr({ tabObj: e, methods: t, tabName: r, sqlOpsUrls: n, refid: a, Reports: s, toast: o, handleAction: c, infoViewJson: f }) {
  const [d, h] = le(!1), [m, p] = le(null), [y, E] = ee.useState(0), [v, S] = ee.useState(null), u = e?.config, g = e?.config, T = g?.["popup.form"] ? "popup.form" : (g?.form, "form"), _ = g?.[T] && Object.keys(g?.[T]).length > 0, l = (V) => {
    let D = me(V.data);
    S(D);
  }, w = (V) => {
    S(V), E((D) => D + 1);
  }, $ = (V) => {
    let D = me(V.data);
    p(D), h(!0);
  }, F = async () => {
    if (m?.id) {
      if (!n) {
        window.alert("Delete configuration missing.");
        return;
      }
      try {
        let V = e?.config;
        const D = V?.["popup.form"] ? "popup.form" : (V?.form, "form"), L = V?.[D];
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
          let z = { ...L.source, refid: m.id };
          L.source.where && (z = {
            ...z,
            where: he(L.source.where, {
              refid: m?.id
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
              scrid: f?.module_refid
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
            refid1: m?.id
          },
          headers: {
            Authorization: `Bearer ${n.accessToken}`
          }
        }), window.alert("Record deleted successfully."), E((z) => z + 1);
      } catch (V) {
        console.error(V), window.alert("Failed to delete record. Please try again");
      } finally {
        p(null), h(!1);
      }
    }
  }, M = () => {
    p(null), h(!1);
  };
  return /* @__PURE__ */ i.jsx(i.Fragment, { children: s ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      s,
      {
        methods: { ...t, deleteRecord: $, editRecord: l },
        report: {
          ...u,
          source: {
            table: u?.table,
            type: "sql",
            cols: u?.cols,
            where: u?.where,
            orderby: u?.orderby,
            queryid: u?.queryid
          },
          endPoints: n,
          actions: { ...u?.actions, ...f?.buttons, ...f.actions },
          datagrid: u?.datagrid,
          buttons: u?.buttons,
          refresh: y
        },
        onButtonClick: c
      }
    ),
    _ && /* @__PURE__ */ i.jsx(
      tu,
      {
        formJson: {
          ...g[T],
          source: {
            ...g?.[T].source,
            refid: v?.id
          },
          endPoints: {
            ...n,
            operation: v ? "update" : "create"
          }
        },
        methods: t,
        initialvalues: v ?? {},
        setEditData: w,
        module_refid: f?.module_refid
      }
    ),
    /* @__PURE__ */ i.jsx(
      Rs,
      {
        open: d,
        onConfirm: F,
        onCancel: M
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
  const [f, d] = le(!1), h = xe(null);
  return oe(() => {
    const m = (p) => {
      h.current && !h.current.contains(p.target) && d(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
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
            onClick: () => d(!f),
            className: "ml-1 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200",
            children: "⋮"
          }
        ),
        f && /* @__PURE__ */ i.jsx("div", { className: "absolute right-0 mt-2 w-48 max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-30", children: t.map((m, p) => /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              r(p), d(!1);
            },
            className: `w-full text-left px-3 py-2 text-sm truncate hover:bg-gray-100 ${n === p ? "bg-gray-50 font-semibold text-action" : "text-gray-700"}`,
            children: e[m]?.label || m
          },
          m
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
        children: t.length > 0 ? t.map((m, p) => /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            onClick: () => r(p),
            className: `relative cursor-pointer flex-shrink-0
            min-w-[8rem]   
            py-2 px-8
            rounded-t-lg text-xs sm:text-sm font-semibold
            transition-all duration-300 ease-out
            focus:outline-none whitespace-nowrap
            ${n === p ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
            children: /* @__PURE__ */ i.jsx("span", { className: "relative z-10 flex items-center justify-center gap-1 sm:gap-2", children: /* @__PURE__ */ i.jsx("span", { className: "truncate", children: e[m]?.label || m }) })
          },
          m
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
  refid: f,
  sqlOpsUrls: d,
  module_refid: h,
  fieldOptions: m,
  setFieldOptions: p,
  buttons: y,
  handleAction: E
}) => {
  let v = y ? Object.entries(y).filter(([u, g]) => g.groups ? g.groups.includes(e[t]) : !0) : [];
  async function S(u, g) {
    const T = c?.[u];
    if (T) {
      try {
        await T();
      } catch (_) {
        console.error("Method execution failed:", _);
      }
      return;
    }
    E?.({ [u]: g }, a);
  }
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: "bg-white rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex-1 flex flex-col min-h-0",
      children: [
        e.length > 0 ? n?.fields ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ i.jsx("div", { className: r?.fieldGridClass || "grid grid-cols-12 gap-2", children: n.fields.map((u, g) => /* @__PURE__ */ i.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${ct[ut(u.width)] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ i.jsx(
              dt,
              {
                field: u,
                data: a ?? {},
                methods: c,
                refid: f,
                sqlOpsUrls: d,
                module_refid: h,
                setFieldOptions: p,
                ...m[u.name] ? { optionsOverride: m[u.name] } : {}
              }
            )
          },
          u?.name ?? `field-${g}`
        )) }) }) : n ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: o(n, e[t] || "") }) : null : /* @__PURE__ */ i.jsx("div", { className: "flex-1 col-span-full text-center py-8 text-gray-500", children: "No data available" }),
        /* @__PURE__ */ i.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: v && v.map(([u, g]) => /* @__PURE__ */ i.jsx(
          "button",
          {
            onClick: () => S(u, g),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: g.label
          },
          u
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
              e.slice(0, 5).map((u, g) => /* @__PURE__ */ i.jsx(
                "div",
                {
                  className: `w-2 h-2 rounded-full transition-all duration-300 ${g === t ? "bg-action w-6" : "bg-gray-300"}`
                },
                g
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
          /* @__PURE__ */ i.jsx("div", { className: "flex gap-1", children: e.map((u, g) => /* @__PURE__ */ i.jsx(
            "div",
            {
              className: `w-2 h-2 rounded-full transition-all duration-300 ${g === t ? "bg-action w-6" : "bg-gray-300"}`
            },
            g
          )) })
        ] }) })
      ]
    },
    e[t]
  );
};
function yn({
  groups: e,
  methods: t = {},
  infoData: r,
  viewRenderers: n = {},
  isCommonInfo: a,
  layoutConfig: s = {},
  viewMode: o,
  sqlOpsUrls: c,
  refid: f,
  Reports: d,
  toast: h = {},
  handleAction: m = () => {
  },
  infoViewJson: p,
  fieldOptions: y,
  setFieldOptions: E
}) {
  const [v, S] = le(0), [u, g] = le(!1), T = xe(null), _ = Object.keys(e);
  oe(() => {
    const L = () => {
      if (T.current) {
        const q = T.current;
        g(q.scrollWidth > q.clientWidth);
      }
    };
    return L(), window.addEventListener("resize", L), () => window.removeEventListener("resize", L);
  }, [_.length]), oe(() => {
    if (T.current && _.length > 0) {
      const L = T.current.children[v];
      L && L.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [v, _.length]);
  const l = o === "tableft", w = o === "tabright", $ = !l && !w, F = e[_[v] ?? ""] || null, M = {
    single: (L, q) => /* @__PURE__ */ i.jsx(cr, { fieldOptions: y, setFieldOptions: E, module_refid: p.module_refid, tabObj: L, methods: t, tabName: q, sqlOpsUrls: c, refid: f }),
    grid: (L, q) => /* @__PURE__ */ i.jsx(
      xr,
      {
        ...d ? { Reports: d } : {},
        toast: h,
        handleAction: m,
        tabObj: L,
        methods: t,
        tabName: q,
        sqlOpsUrls: c,
        refid: f,
        infoViewJson: p
      }
    )
  }, V = F?.config?.uimode, D = n[V] || M[V] || (() => /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No UI mode for this type" }));
  return $ ? /* @__PURE__ */ i.jsxs("div", { className: "flex-1 flex flex-col min-h-0 ", children: [
    /* @__PURE__ */ i.jsx(
      ru,
      {
        groupNames: _,
        groups: e,
        setActiveTabIndex: S,
        activeTabIndex: v,
        tabsNavRef: T,
        isCommonInfo: a,
        showScrollHint: u,
        layoutConfig: s
      }
    ),
    /* @__PURE__ */ i.jsx(
      mn,
      {
        groupNames: _,
        activeTabIndex: v,
        layoutConfig: s,
        tabObj: F,
        infoData: r,
        setActiveTabIndex: S,
        renderView: D,
        groups: e,
        methods: t,
        refid: f,
        sqlOpsUrls: c,
        module_refid: p.module_refid,
        fieldOptions: y,
        setFieldOptions: E,
        buttons: p.buttons,
        handleAction: m
      }
    )
  ] }) : /* @__PURE__ */ i.jsxs("div", { className: "flex-1 flex min-h-0", children: [
    l && /* @__PURE__ */ i.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ i.jsx(
      pn,
      {
        groupNames: _,
        groups: e,
        setActiveTabIndex: S,
        activeTabIndex: v
      }
    ) }),
    /* @__PURE__ */ i.jsx("main", { className: "flex-1 flex flex-col min-h-0 overflow-auto", children: /* @__PURE__ */ i.jsx(
      mn,
      {
        groupNames: _,
        activeTabIndex: v,
        layoutConfig: s,
        tabObj: F,
        infoData: r,
        setActiveTabIndex: S,
        renderView: D,
        groups: e,
        methods: t,
        refid: f,
        module_refid: p.module_refid,
        sqlOpsUrls: c,
        fieldOptions: y,
        setFieldOptions: E,
        handleAction: m
      }
    ) }),
    w && /* @__PURE__ */ i.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ i.jsx(
      pn,
      {
        groupNames: _,
        groups: e,
        setActiveTabIndex: S,
        activeTabIndex: v
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
  handleAction: f = () => {
  },
  infoViewJson: d,
  fieldOptions: h,
  setFieldOptions: m
}) {
  const p = {
    single: (S, u) => /* @__PURE__ */ i.jsx(
      cr,
      {
        tabObj: S,
        methods: t,
        tabName: u,
        sqlOpsUrls: a,
        fieldOptions: h,
        setFieldOptions: m,
        refid: s,
        module_refid: d?.module_refid
      }
    ),
    grid: (S, u) => /* @__PURE__ */ i.jsx(
      xr,
      {
        ...o ? { Reports: o } : {},
        toast: c,
        infoViewJson: d,
        handleAction: f,
        tabObj: S,
        methods: t,
        tabName: u,
        sqlOpsUrls: a,
        refid: s
      }
    )
  }, y = d?.buttons;
  let E = y ? Object.entries(y).filter(([S, u]) => !(u.groups && u.groups.length > 0)) : [];
  async function v(S, u) {
    const g = t?.[S];
    if (g) {
      try {
        await g();
      } catch (T) {
        console.error("Method execution failed:", T);
      }
      return;
    }
    f?.({ [S]: u }, r);
  }
  return console.log("commonButtons", E), /* @__PURE__ */ i.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ i.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ i.jsxs("div", { className: "space-y-1 flex flex-col min-h-0", children: [
    e && Object.entries(e).map(([S, u], g) => {
      let T = y ? Object.entries(y).filter(([_, l]) => l.groups ? l.groups.includes(S) : !1) : [];
      return /* @__PURE__ */ i.jsxs(nu, { title: u.label, isFirst: g === 0, children: [
        u?.fields ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-12 gap-2", children: u.fields.map((_, l) => /* @__PURE__ */ i.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${ct[ut(_.width)] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ i.jsx(
              dt,
              {
                module_refid: d?.module_refid,
                methods: t,
                field: _,
                data: r ?? {},
                setFieldOptions: m,
                ...h[_.name] ? { optionsOverride: h[_.name] } : {},
                sqlOpsUrls: a,
                refid: s
              }
            )
          },
          _?.name ?? `field-${l}`
        )) }) }) : u ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: n[u.config?.uimode]?.(u) || p[u.config?.uimode]?.(u, S) || /* @__PURE__ */ i.jsx("div", { children: "No renderer for this type" }) }) : null,
        /* @__PURE__ */ i.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: T && T.map(([_, l]) => /* @__PURE__ */ i.jsx(
          "button",
          {
            onClick: () => v(_, l),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: l.label
          },
          _
        )) })
      ] }, S);
    }),
    /* @__PURE__ */ i.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: E && E.map(([S, u]) => /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => v(S, u),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: u.label
      },
      S
    )) })
  ] }) }) });
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
  handleAction: f = () => {
  },
  infoViewJson: d,
  fieldOptions: h,
  setFieldOptions: m
}) {
  const p = {
    single: (S, u) => /* @__PURE__ */ i.jsx(cr, { fieldOptions: h, setFieldOptions: m, module_refid: d?.module_refid, tabObj: S, methods: t, tabName: u, sqlOpsUrls: a, refid: s }),
    grid: (S, u) => /* @__PURE__ */ i.jsx(
      xr,
      {
        ...o ? { Reports: o } : {},
        toast: c,
        handleAction: f,
        tabObj: S,
        methods: t,
        tabName: u,
        sqlOpsUrls: a,
        refid: s,
        infoViewJson: d
      }
    )
  }, y = d?.buttons;
  let E = y ? Object.entries(y).filter(([S, u]) => !(u.groups && u.groups.length > 0)) : [];
  async function v(S, u) {
    const g = t?.[S];
    if (g) {
      try {
        await g();
      } catch (T) {
        console.error("Method execution failed:", T);
      }
      return;
    }
    f?.({ [S]: u }, r);
  }
  return /* @__PURE__ */ i.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ i.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ i.jsxs("div", { className: "space-y-2  flex flex-col min-h-0", children: [
    e && Object.entries(e).map(([S, u], g) => {
      console.log("group", S), console.log("buttons", y);
      let T = y ? Object.entries(y).filter(([_, l]) => l.groups ? l.groups.includes(S) : !1) : [];
      return console.log(`visibleButtons ${S}`, T), /* @__PURE__ */ i.jsxs(su, { title: u.label, children: [
        u?.fields ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-12 gap-2", children: u.fields.map((_, l) => /* @__PURE__ */ i.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${ct[ut(_.width)] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ i.jsx(
              dt,
              {
                module_refid: d?.module_refid,
                methods: t,
                field: _,
                data: r ?? {},
                setFieldOptions: m,
                ...h[_.name] ? { optionsOverride: h[_.name] } : {},
                sqlOpsUrls: a,
                refid: s
              }
            )
          },
          _?.name ?? `field-${l}`
        )) }) }) : u ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: n[u.config?.uimode]?.(u) || p[u.config?.uimode]?.(u, S) || /* @__PURE__ */ i.jsx("div", { children: "No renderer for this type" }) }) : null,
        /* @__PURE__ */ i.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: T && T.map(([_, l]) => /* @__PURE__ */ i.jsx(
          "button",
          {
            onClick: () => v(_, l),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: l.label
          },
          _
        )) })
      ] }, S);
    }),
    /* @__PURE__ */ i.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: E && E.map(([S, u]) => /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => v(S, u),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: u.label
      },
      S
    )) })
  ] }) }) });
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
  toast: f = {},
  handleAction: d = () => {
  }
}) {
  const [h, m] = ee.useState({}), p = hs(e.infoview ?? {}), y = e.endPoints, E = ee.useMemo(
    () => n(e.fields || {}),
    [e.fields, n]
  ), [v, S] = ee.useState({}), u = (w, $) => {
    S((F) => ({ ...F, [w]: $ }));
  }, g = e?.source?.refid;
  let T = { ...E };
  e.infoview?.groups && (T = { ...T, ...e.infoview.groups }), ee.useEffect(() => {
    let w = !1;
    return (async () => {
      const F = e?.source;
      if (!F?.type) {
        w || m({});
        return;
      }
      if (F.type === "method") {
        const M = F.method, V = M ? o[M] : void 0;
        if (V)
          try {
            const D = await Promise.resolve(V());
            w || m(D || {});
          } catch (D) {
            console.error("Method execution failed:", D), w || m({});
          }
        else
          w || m({});
      }
      if (F.type === "api")
        try {
          const M = await W({
            method: F.method || "GET",
            url: F.url,
            data: F.body || {},
            params: F.params || {},
            headers: F.headers || {}
          });
          w || m(M.data || {});
        } catch (M) {
          console.error("API fetch failed:", M), w || m({});
        }
      if (F.type === "sql" && F.refid && F.refid != "0" || F.dbopsid) {
        if (!y) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let M = !1, V;
          F?.dbopsid && (M = !0, V = F?.dbopsid);
          const D = await W({
            method: "GET",
            url: y.baseURL + y.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${y?.accessToken}`
            }
          });
          if (!M) {
            let re = {
              ...F
            };
            F.where && (re = {
              ...F,
              where: he(F.where, {
                refid: g
              })
            }), V = (await W({
              method: "POST",
              url: y.baseURL + y.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: re,
                fields: At(e.fields, y.operation),
                forcefill: e.forcefill,
                datahash: D.data.refhash,
                srcid: e?.module_refid
              },
              headers: {
                Authorization: `Bearer ${y?.accessToken}`
              }
            }))?.data.refid;
          }
          const L = await W({
            method: "POST",
            url: y.baseURL + y.dbopsFetch,
            data: {
              refid: V,
              datahash: D.data.refhash,
              module_refid: e.module_refid
            },
            headers: {
              Authorization: `Bearer ${y?.accessToken}`
            }
          }), q = Pn(L) ?? {};
          w || m(q);
        } catch (M) {
          console.error("API fetch failed:", M);
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
  const _ = T.common || null;
  _ && delete T.common;
  const l = (w) => {
    switch (w) {
      case "accordion":
        return /* @__PURE__ */ i.jsx(
          au,
          {
            groups: T,
            methods: o,
            infoData: h,
            viewRenderers: s,
            sqlOpsUrls: y,
            refid: g,
            ...c ? { Reports: c } : {},
            toast: f,
            handleAction: d,
            infoViewJson: e,
            setFieldOptions: u,
            fieldOptions: v
          }
        );
      case "tab":
      case "tableft":
      case "tabright":
        return /* @__PURE__ */ i.jsx(
          yn,
          {
            groups: T,
            viewRenderers: s,
            layoutConfig: a,
            methods: o,
            infoData: h,
            isCommonInfo: !!_,
            viewMode: w,
            sqlOpsUrls: y,
            refid: g,
            ...c ? { Reports: c } : {},
            toast: f,
            handleAction: d,
            infoViewJson: e,
            setFieldOptions: u,
            fieldOptions: v
          }
        );
      case "cards":
        return /* @__PURE__ */ i.jsx(
          iu,
          {
            groups: T,
            viewRenderers: s,
            methods: o,
            infoData: h,
            sqlOpsUrls: y,
            refid: g,
            ...c ? { Reports: c } : {},
            toast: f,
            handleAction: d,
            infoViewJson: e,
            setFieldOptions: u,
            fieldOptions: v
          }
        );
      default:
        return /* @__PURE__ */ i.jsx(
          yn,
          {
            groups: T,
            viewRenderers: s,
            layoutConfig: a,
            methods: o,
            infoData: h,
            isCommonInfo: !!_,
            viewMode: w,
            sqlOpsUrls: y,
            refid: g,
            ...c ? { Reports: c } : {},
            toast: f,
            handleAction: d,
            infoViewJson: e,
            setFieldOptions: u,
            fieldOptions: v
          }
        );
    }
  };
  return /* @__PURE__ */ i.jsxs("div", { className: a.containerClass || "h-screen flex flex-col ", children: [
    _ && y && /* @__PURE__ */ i.jsx(
      Is,
      {
        commonInfo: _,
        infoData: h,
        hiddenFields: r,
        sqlOpsUrls: y,
        setFieldOptions: u,
        fieldOptions: v,
        module_refid: e.module_refid,
        refid: g,
        methods: o
      }
    ),
    l(p)
  ] });
}
export {
  uu as InfoView
};
