import oe, { useState as be, useEffect as ye, useRef as Me, useCallback as he, useMemo as xr, useLayoutEffect as Ua, createContext as Ys, forwardRef as qs, createElement as Ks, useContext as Xs } from "react";
import ae from "axios";
import { createPortal as Zs } from "react-dom";
function Ba(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var sr = { exports: {} }, It = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ln;
function Qs() {
  if (Ln) return It;
  Ln = 1;
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
  return It.Fragment = t, It.jsx = r, It.jsxs = r, It;
}
var Dt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kn;
function Js() {
  return kn || (kn = 1, process.env.NODE_ENV !== "production" && function() {
    function e(x) {
      if (x == null) return null;
      if (typeof x == "function")
        return x.$$typeof === B ? null : x.displayName || x.name || null;
      if (typeof x == "string") return x;
      switch (x) {
        case j:
          return "Fragment";
        case m:
          return "Profiler";
        case O:
          return "StrictMode";
        case l:
          return "Suspense";
        case S:
          return "SuspenseList";
        case P:
          return "Activity";
      }
      if (typeof x == "object")
        switch (typeof x.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), x.$$typeof) {
          case v:
            return "Portal";
          case E:
            return (x.displayName || "Context") + ".Provider";
          case y:
            return (x._context.displayName || "Context") + ".Consumer";
          case w:
            var _ = x.render;
            return x = x.displayName, x || (x = _.displayName || _.name || "", x = x !== "" ? "ForwardRef(" + x + ")" : "ForwardRef"), x;
          case N:
            return _ = x.displayName || null, _ !== null ? _ : e(x.type) || "Memo";
          case z:
            _ = x._payload, x = x._init;
            try {
              return e(x(_));
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
        var _ = !1;
      } catch {
        _ = !0;
      }
      if (_) {
        _ = console;
        var $ = _.error, F = typeof Symbol == "function" && Symbol.toStringTag && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return $.call(
          _,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          F
        ), t(x);
      }
    }
    function n(x) {
      if (x === j) return "<>";
      if (typeof x == "object" && x !== null && x.$$typeof === z)
        return "<...>";
      try {
        var _ = e(x);
        return _ ? "<" + _ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var x = I.A;
      return x === null ? null : x.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function o(x) {
      if (H.call(x, "key")) {
        var _ = Object.getOwnPropertyDescriptor(x, "key").get;
        if (_ && _.isReactWarning) return !1;
      }
      return x.key !== void 0;
    }
    function c(x, _) {
      function $() {
        re || (re = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          _
        ));
      }
      $.isReactWarning = !0, Object.defineProperty(x, "key", {
        get: $,
        configurable: !0
      });
    }
    function f() {
      var x = e(this.type);
      return W[x] || (W[x] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), x = this.props.ref, x !== void 0 ? x : null;
    }
    function u(x, _, $, F, M, L, se, de) {
      return $ = L.ref, x = {
        $$typeof: T,
        type: x,
        key: _,
        props: L,
        _owner: M
      }, ($ !== void 0 ? $ : null) !== null ? Object.defineProperty(x, "ref", {
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
        value: se
      }), Object.defineProperty(x, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: de
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    }
    function p(x, _, $, F, M, L, se, de) {
      var J = _.children;
      if (J !== void 0)
        if (F)
          if (K(J)) {
            for (F = 0; F < J.length; F++)
              g(J[F]);
            Object.freeze && Object.freeze(J);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(J);
      if (H.call(_, "key")) {
        J = e(x);
        var xe = Object.keys(_).filter(function(Ve) {
          return Ve !== "key";
        });
        F = 0 < xe.length ? "{key: someKey, " + xe.join(": ..., ") + ": ...}" : "{key: someKey}", R[J + F] || (xe = 0 < xe.length ? "{" + xe.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          F,
          J,
          xe,
          J
        ), R[J + F] = !0);
      }
      if (J = null, $ !== void 0 && (r($), J = "" + $), o(_) && (r(_.key), J = "" + _.key), "key" in _) {
        $ = {};
        for (var Se in _)
          Se !== "key" && ($[Se] = _[Se]);
      } else $ = _;
      return J && c(
        $,
        typeof x == "function" ? x.displayName || x.name || "Unknown" : x
      ), u(
        x,
        J,
        L,
        M,
        a(),
        $,
        se,
        de
      );
    }
    function g(x) {
      typeof x == "object" && x !== null && x.$$typeof === T && x._store && (x._store.validated = 1);
    }
    var h = oe, T = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), E = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), P = Symbol.for("react.activity"), B = Symbol.for("react.client.reference"), I = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, K = Array.isArray, Q = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(x) {
        return x();
      }
    };
    var re, W = {}, ne = h.react_stack_bottom_frame.bind(
      h,
      s
    )(), A = Q(n(s)), R = {};
    Dt.Fragment = j, Dt.jsx = function(x, _, $, F, M) {
      var L = 1e4 > I.recentlyCreatedOwnerStacks++;
      return p(
        x,
        _,
        $,
        !1,
        F,
        M,
        L ? Error("react-stack-top-frame") : ne,
        L ? Q(n(x)) : A
      );
    }, Dt.jsxs = function(x, _, $, F, M) {
      var L = 1e4 > I.recentlyCreatedOwnerStacks++;
      return p(
        x,
        _,
        $,
        !0,
        F,
        M,
        L ? Error("react-stack-top-frame") : ne,
        L ? Q(n(x)) : A
      );
    };
  }()), Dt;
}
var zn;
function ei() {
  return zn || (zn = 1, process.env.NODE_ENV === "production" ? sr.exports = Qs() : sr.exports = Js()), sr.exports;
}
var i = ei(), Dr, Un;
function ti() {
  if (Un) return Dr;
  Un = 1;
  function e(m) {
    this._maxSize = m, this.clear();
  }
  e.prototype.clear = function() {
    this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
  }, e.prototype.get = function(m) {
    return this._values[m];
  }, e.prototype.set = function(m, y) {
    return this._size >= this._maxSize && this.clear(), m in this._values || this._size++, this._values[m] = y;
  };
  var t = /[^.^\]^[]+|(?=\[\]|\.\.)/g, r = /^\d+$/, n = /^\d/, a = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, s = /^\s*(['"]?)(.*?)(\1)\s*$/, o = 512, c = new e(o), f = new e(o), u = new e(o);
  Dr = {
    Cache: e,
    split: g,
    normalizePath: p,
    setter: function(m) {
      var y = p(m);
      return f.get(m) || f.set(m, function(w, l) {
        for (var S = 0, N = y.length, z = w; S < N - 1; ) {
          var P = y[S];
          if (P === "__proto__" || P === "constructor" || P === "prototype")
            return w;
          z = z[y[S++]];
        }
        z[y[S]] = l;
      });
    },
    getter: function(m, y) {
      var E = p(m);
      return u.get(m) || u.set(m, function(l) {
        for (var S = 0, N = E.length; S < N; )
          if (l != null || !y) l = l[E[S++]];
          else return;
        return l;
      });
    },
    join: function(m) {
      return m.reduce(function(y, E) {
        return y + (T(E) || r.test(E) ? "[" + E + "]" : (y ? "." : "") + E);
      }, "");
    },
    forEach: function(m, y, E) {
      h(Array.isArray(m) ? m : g(m), y, E);
    }
  };
  function p(m) {
    return c.get(m) || c.set(
      m,
      g(m).map(function(y) {
        return y.replace(s, "$2");
      })
    );
  }
  function g(m) {
    return m.match(t) || [""];
  }
  function h(m, y, E) {
    var w = m.length, l, S, N, z;
    for (S = 0; S < w; S++)
      l = m[S], l && (O(l) && (l = '"' + l + '"'), z = T(l), N = !z && /^\d+$/.test(l), y.call(E, l, z, N, S, m));
  }
  function T(m) {
    return typeof m == "string" && m && ["'", '"'].indexOf(m.charAt(0)) !== -1;
  }
  function v(m) {
    return m.match(n) && !m.match(r);
  }
  function j(m) {
    return a.test(m);
  }
  function O(m) {
    return !T(m) && (v(m) || j(m));
  }
  return Dr;
}
var dt = ti(), Pr, Bn;
function ri() {
  if (Bn) return Pr;
  Bn = 1;
  const e = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, t = (p) => p.match(e) || [], r = (p) => p[0].toUpperCase() + p.slice(1), n = (p, g) => t(p).join(g).toLowerCase(), a = (p) => t(p).reduce(
    (g, h) => `${g}${g ? h[0].toUpperCase() + h.slice(1).toLowerCase() : h.toLowerCase()}`,
    ""
  );
  return Pr = {
    words: t,
    upperFirst: r,
    camelCase: a,
    pascalCase: (p) => r(a(p)),
    snakeCase: (p) => n(p, "_"),
    kebabCase: (p) => n(p, "-"),
    sentenceCase: (p) => r(n(p, " ")),
    titleCase: (p) => t(p).map(r).join(" ")
  }, Pr;
}
var Mr = ri(), ir = { exports: {} }, Vn;
function ni() {
  if (Vn) return ir.exports;
  Vn = 1, ir.exports = function(a) {
    return e(t(a), a);
  }, ir.exports.array = e;
  function e(a, s) {
    var o = a.length, c = new Array(o), f = {}, u = o, p = r(s), g = n(a);
    for (s.forEach(function(T) {
      if (!g.has(T[0]) || !g.has(T[1]))
        throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }); u--; )
      f[u] || h(a[u], u, /* @__PURE__ */ new Set());
    return c;
    function h(T, v, j) {
      if (j.has(T)) {
        var O;
        try {
          O = ", node was:" + JSON.stringify(T);
        } catch {
          O = "";
        }
        throw new Error("Cyclic dependency" + O);
      }
      if (!g.has(T))
        throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(T));
      if (!f[v]) {
        f[v] = !0;
        var m = p.get(T) || /* @__PURE__ */ new Set();
        if (m = Array.from(m), v = m.length) {
          j.add(T);
          do {
            var y = m[--v];
            h(y, g.get(y), j);
          } while (v);
          j.delete(T);
        }
        c[--o] = T;
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
  return ir.exports;
}
var ai = ni();
const si = /* @__PURE__ */ Ba(ai), ii = Object.prototype.toString, oi = Error.prototype.toString, li = RegExp.prototype.toString, ci = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", ui = /^Symbol\((.*)\)(.*)$/;
function di(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function Gn(e, t = !1) {
  if (e == null || e === !0 || e === !1) return "" + e;
  const r = typeof e;
  if (r === "number") return di(e);
  if (r === "string") return t ? `"${e}"` : e;
  if (r === "function") return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol") return ci.call(e).replace(ui, "Symbol($1)");
  const n = ii.call(e).slice(8, -1);
  return n === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : n === "Error" || e instanceof Error ? "[" + oi.call(e) + "]" : n === "RegExp" ? li.call(e) : null;
}
function Je(e, t) {
  let r = Gn(e, t);
  return r !== null ? r : JSON.stringify(e, function(n, a) {
    let s = Gn(this[n], t);
    return s !== null ? s : a;
  }, 2);
}
function Va(e) {
  return e == null ? [] : [].concat(e);
}
let Ga, Ha, Wa, fi = /\$\{\s*(\w+)\s*\}/g;
Ga = Symbol.toStringTag;
class Hn {
  constructor(t, r, n, a) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[Ga] = "Error", this.name = "ValidationError", this.value = r, this.path = n, this.type = a, this.errors = [], this.inner = [], Va(t).forEach((s) => {
      if (Ee.isError(s)) {
        this.errors.push(...s.errors);
        const o = s.inner.length ? s.inner : [s];
        this.inner.push(...o);
      } else
        this.errors.push(s);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
Ha = Symbol.hasInstance;
Wa = Symbol.toStringTag;
class Ee extends Error {
  static formatError(t, r) {
    const n = r.label || r.path || "this";
    return r = Object.assign({}, r, {
      path: n,
      originalPath: r.path
    }), typeof t == "string" ? t.replace(fi, (a, s) => Je(r[s])) : typeof t == "function" ? t(r) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, r, n, a, s) {
    const o = new Hn(t, r, n, a);
    if (s)
      return o;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[Wa] = "Error", this.name = o.name, this.message = o.message, this.type = o.type, this.value = o.value, this.path = o.path, this.errors = o.errors, this.inner = o.inner, Error.captureStackTrace && Error.captureStackTrace(this, Ee);
  }
  static [Ha](t) {
    return Hn[Symbol.hasInstance](t) || super[Symbol.hasInstance](t);
  }
}
let We = {
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
    const a = n != null && n !== r ? ` (cast from the value \`${Je(n, !0)}\`).` : ".";
    return t !== "mixed" ? `${e} must be a \`${t}\` type, but the final value was: \`${Je(r, !0)}\`` + a : `${e} must match the configured type. The validated value was: \`${Je(r, !0)}\`` + a;
  }
}, je = {
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
}, nt = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, Qr = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, hi = {
  isValue: "${path} field must be ${value}"
}, pr = {
  noUnknown: "${path} field has unspecified keys: ${unknown}",
  exact: "${path} object contains unknown properties: ${properties}"
}, mr = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, pi = {
  notType: (e) => {
    const {
      path: t,
      value: r,
      spec: n
    } = e, a = n.types.length;
    if (Array.isArray(r)) {
      if (r.length < a) return `${t} tuple value has too few items, expected a length of ${a} but got ${r.length} for value: \`${Je(r, !0)}\``;
      if (r.length > a) return `${t} tuple value has too many items, expected a length of ${a} but got ${r.length} for value: \`${Je(r, !0)}\``;
    }
    return Ee.formatError(We.notType, e);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: We,
  string: je,
  number: nt,
  date: Qr,
  object: pr,
  array: mr,
  boolean: hi,
  tuple: pi
});
const _r = (e) => e && e.__isYupSchema__;
class vr {
  static fromOptions(t, r) {
    if (!r.then && !r.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: n,
      then: a,
      otherwise: s
    } = r, o = typeof n == "function" ? n : (...c) => c.every((f) => f === n);
    return new vr(t, (c, f) => {
      var u;
      let p = o(...c) ? a : s;
      return (u = p?.(f)) != null ? u : f;
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
    if (!_r(a)) throw new TypeError("conditions must return a schema object");
    return a.resolve(r);
  }
}
const or = {
  context: "$",
  value: "."
};
class pt {
  constructor(t, r = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string") throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === or.context, this.isValue = this.key[0] === or.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? or.context : this.isValue ? or.value : "";
    this.path = this.key.slice(n.length), this.getter = this.path && dt.getter(this.path, !0), this.map = r.map;
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
pt.prototype.__isYupRef = !0;
const Qe = (e) => e == null;
function St(e) {
  function t({
    value: r,
    path: n = "",
    options: a,
    originalValue: s,
    schema: o
  }, c, f) {
    const {
      name: u,
      test: p,
      params: g,
      message: h,
      skipAbsent: T
    } = e;
    let {
      parent: v,
      context: j,
      abortEarly: O = o.spec.abortEarly,
      disableStackTrace: m = o.spec.disableStackTrace
    } = a;
    const y = {
      value: r,
      parent: v,
      context: j
    };
    function E(I = {}) {
      const H = Ya(Object.assign({
        value: r,
        originalValue: s,
        label: o.spec.label,
        path: I.path || n,
        spec: o.spec,
        disableStackTrace: I.disableStackTrace || m
      }, g, I.params), y), K = new Ee(Ee.formatError(I.message || h, H), r, H.path, I.type || u, H.disableStackTrace);
      return K.params = H, K;
    }
    const w = O ? c : f;
    let l = {
      path: n,
      parent: v,
      type: u,
      from: a.from,
      createError: E,
      resolve(I) {
        return qa(I, y);
      },
      options: a,
      originalValue: s,
      schema: o
    };
    const S = (I) => {
      Ee.isError(I) ? w(I) : I ? f(null) : w(E());
    }, N = (I) => {
      Ee.isError(I) ? w(I) : c(I);
    };
    if (T && Qe(r))
      return S(!0);
    let P;
    try {
      var B;
      if (P = p.call(l, r, l), typeof ((B = P) == null ? void 0 : B.then) == "function") {
        if (a.sync)
          throw new Error(`Validation test of type: "${l.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(P).then(S, N);
      }
    } catch (I) {
      N(I);
      return;
    }
    S(P);
  }
  return t.OPTIONS = e, t;
}
function Ya(e, t) {
  if (!e) return e;
  for (const r of Object.keys(e))
    e[r] = qa(e[r], t);
  return e;
}
function qa(e, t) {
  return pt.isRef(e) ? e.getValue(t.value, t.parent, t.context) : e;
}
function mi(e, t, r, n = r) {
  let a, s, o;
  return t ? (dt.forEach(t, (c, f, u) => {
    let p = f ? c.slice(1, c.length - 1) : c;
    e = e.resolve({
      context: n,
      parent: a,
      value: r
    });
    let g = e.type === "tuple", h = u ? parseInt(p, 10) : 0;
    if (e.innerType || g) {
      if (g && !u) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);
      if (r && h >= r.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${c}, in the path: ${t}. because there is no value at that index. `);
      a = r, r = r && r[h], e = g ? e.spec.types[h] : e.innerType;
    }
    if (!u) {
      if (!e.fields || !e.fields[p]) throw new Error(`The schema does not contain the path: ${t}. (failed at: ${o} which is a type: "${e.type}")`);
      a = r, r = r && r[p], e = e.fields[p];
    }
    s = p, o = f ? "[" + c + "]" : "." + c;
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
class Tr extends Set {
  describe() {
    const t = [];
    for (const r of this.values())
      t.push(pt.isRef(r) ? r.describe() : r);
    return t;
  }
  resolveAll(t) {
    let r = [];
    for (const n of this.values())
      r.push(t(n));
    return r;
  }
  clone() {
    return new Tr(this.values());
  }
  merge(t, r) {
    const n = this.clone();
    return t.forEach((a) => n.add(a)), r.forEach((a) => n.delete(a)), n;
  }
}
function At(e, t = /* @__PURE__ */ new Map()) {
  if (_r(e) || !e || typeof e != "object") return e;
  if (t.has(e)) return t.get(e);
  let r;
  if (e instanceof Date)
    r = new Date(e.getTime()), t.set(e, r);
  else if (e instanceof RegExp)
    r = new RegExp(e), t.set(e, r);
  else if (Array.isArray(e)) {
    r = new Array(e.length), t.set(e, r);
    for (let n = 0; n < e.length; n++) r[n] = At(e[n], t);
  } else if (e instanceof Map) {
    r = /* @__PURE__ */ new Map(), t.set(e, r);
    for (const [n, a] of e.entries()) r.set(n, At(a, t));
  } else if (e instanceof Set) {
    r = /* @__PURE__ */ new Set(), t.set(e, r);
    for (const n of e) r.add(At(n, t));
  } else if (e instanceof Object) {
    r = {}, t.set(e, r);
    for (const [n, a] of Object.entries(e)) r[n] = At(a, t);
  } else
    throw Error(`Unable to clone ${e}`);
  return r;
}
function yi(e) {
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
function gi(e, t) {
  const r = t ? `${t}.${e.path}` : e.path;
  return e.errors.map((n) => ({
    message: n,
    path: yi(r)
  }));
}
function Ka(e, t) {
  var r;
  if (!((r = e.inner) != null && r.length) && e.errors.length)
    return gi(e, t);
  const n = t ? `${t}.${e.path}` : e.path;
  return e.inner.flatMap((a) => Ka(a, n));
}
class Fe {
  constructor(t) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new Tr(), this._blacklist = new Tr(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(We.notType);
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
    return r.type = this.type, r._typeCheck = this._typeCheck, r._whitelist = this._whitelist.clone(), r._blacklist = this._blacklist.clone(), r.internalTests = Object.assign({}, this.internalTests), r.exclusiveTests = Object.assign({}, this.exclusiveTests), r.deps = [...this.deps], r.conditions = [...this.conditions], r.tests = [...this.tests], r.transforms = [...this.transforms], r.spec = At(Object.assign({}, this.spec, t)), r;
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
      if (a && Qe(s))
        return s;
      let o = Je(t), c = Je(s);
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
    let u = [];
    for (let p of Object.values(this.internalTests))
      p && u.push(p);
    this.runTests({
      path: s,
      value: f,
      originalValue: o,
      options: r,
      tests: u
    }, n, (p) => {
      if (p.length)
        return a(p, f);
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
      options: u
    } = t, p = (j) => {
      a || (a = !0, r(j, o));
    }, g = (j) => {
      a || (a = !0, n(j, o));
    }, h = s.length, T = [];
    if (!h) return g([]);
    let v = {
      value: o,
      originalValue: c,
      path: f,
      options: u,
      schema: this
    };
    for (let j = 0; j < s.length; j++) {
      const O = s[j];
      O(v, p, function(y) {
        y && (Array.isArray(y) ? T.push(...y) : T.push(y)), --h <= 0 && g(T);
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
    let u = n[c];
    const p = Object.assign({}, o, {
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
      [f ? "index" : "key"]: c,
      path: f || c.includes(".") ? `${a || ""}[${f ? c : `"${c}"`}]` : (a ? `${a}.` : "") + t
    });
    return (g, h, T) => this.resolve(p)._validate(u, p, h, T);
  }
  validate(t, r) {
    var n;
    let a = this.resolve(Object.assign({}, r, {
      value: t
    })), s = (n = r?.disableStackTrace) != null ? n : a.spec.disableStackTrace;
    return new Promise((o, c) => a._validate(t, r, (f, u) => {
      Ee.isError(f) && (f.value = u), c(f);
    }, (f, u) => {
      f.length ? c(new Ee(f, u, void 0, void 0, s)) : o(u);
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
      throw Ee.isError(c) && (c.value = f), c;
    }, (c, f) => {
      if (c.length) throw new Ee(c, t, void 0, void 0, o);
      s = f;
    }), s;
  }
  isValid(t, r) {
    return this.validate(t, r).then(() => !0, (n) => {
      if (Ee.isError(n)) return !1;
      throw n;
    });
  }
  isValidSync(t, r) {
    try {
      return this.validateSync(t, r), !0;
    } catch (n) {
      if (Ee.isError(n)) return !1;
      throw n;
    }
  }
  _getDefault(t) {
    let r = this.spec.default;
    return r == null ? r : typeof r == "function" ? r.call(this, t) : At(r);
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
    return n.internalTests.nullable = St({
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
    return n.internalTests.optionality = St({
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
  defined(t = We.defined) {
    return this.optionality(!1, t);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(t = We.notNull) {
    return this.nullability(!1, t);
  }
  required(t = We.required) {
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
    }, r.message === void 0 && (r.message = We.default), typeof r.test != "function") throw new TypeError("`test` is a required parameters");
    let n = this.clone(), a = St(r), s = r.exclusive || r.name && n.exclusiveTests[r.name] === !0;
    if (r.exclusive && !r.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return r.name && (n.exclusiveTests[r.name] = !!r.exclusive), n.tests = n.tests.filter((o) => !(o.OPTIONS.name === r.name && (s || o.OPTIONS.test === a.OPTIONS.test))), n.tests.push(a), n;
  }
  when(t, r) {
    !Array.isArray(t) && typeof t != "string" && (r = t, t = ".");
    let n = this.clone(), a = Va(t).map((s) => new pt(s));
    return a.forEach((s) => {
      s.isSibling && n.deps.push(s.key);
    }), n.conditions.push(typeof r == "function" ? new vr(a, r) : vr.fromOptions(a, r)), n;
  }
  typeError(t) {
    let r = this.clone();
    return r.internalTests.typeError = St({
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
  oneOf(t, r = We.oneOf) {
    let n = this.clone();
    return t.forEach((a) => {
      n._whitelist.add(a), n._blacklist.delete(a);
    }), n.internalTests.whiteList = St({
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
  notOneOf(t, r = We.notOneOf) {
    let n = this.clone();
    return t.forEach((a) => {
      n._blacklist.add(a), n._whitelist.delete(a);
    }), n.internalTests.blacklist = St({
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
      tests: r.tests.filter((f, u, p) => p.findIndex((g) => g.OPTIONS.name === f.OPTIONS.name) === u).map((f) => {
        const u = f.OPTIONS.params && t ? Ya(Object.assign({}, f.OPTIONS.params), t) : f.OPTIONS.params;
        return {
          name: f.OPTIONS.name,
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
          if (a instanceof Ee)
            return {
              issues: Ka(a)
            };
          throw a;
        }
      }
    };
  }
}
Fe.prototype.__isYupSchema__ = !0;
for (const e of ["validate", "validateSync"]) Fe.prototype[`${e}At`] = function(t, r, n = {}) {
  const {
    parent: a,
    parentPath: s,
    schema: o
  } = mi(this, t, r, n.context);
  return o[e](a && a[s], Object.assign({}, n, {
    parent: a,
    path: t
  }));
};
for (const e of ["equals", "is"]) Fe.prototype[e] = Fe.prototype.oneOf;
for (const e of ["not", "nope"]) Fe.prototype[e] = Fe.prototype.notOneOf;
const bi = () => !0;
function Jr(e) {
  return new Xa(e);
}
class Xa extends Fe {
  constructor(t) {
    super(typeof t == "function" ? {
      type: "mixed",
      check: t
    } : Object.assign({
      type: "mixed",
      check: bi
    }, t));
  }
}
Jr.prototype = Xa.prototype;
const xi = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function vi(e) {
  const t = en(e);
  if (!t) return Date.parse ? Date.parse(e) : Number.NaN;
  if (t.z === void 0 && t.plusMinus === void 0)
    return new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond).valueOf();
  let r = 0;
  return t.z !== "Z" && t.plusMinus !== void 0 && (r = t.hourOffset * 60 + t.minuteOffset, t.plusMinus === "+" && (r = 0 - r)), Date.UTC(t.year, t.month, t.day, t.hour, t.minute + r, t.second, t.millisecond);
}
function en(e) {
  var t, r;
  const n = xi.exec(e);
  return n ? {
    year: Xe(n[1]),
    month: Xe(n[2], 1) - 1,
    day: Xe(n[3], 1),
    hour: Xe(n[4]),
    minute: Xe(n[5]),
    second: Xe(n[6]),
    millisecond: n[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      Xe(n[7].substring(0, 3))
    ) : 0,
    precision: (t = (r = n[7]) == null ? void 0 : r.length) != null ? t : void 0,
    z: n[8] || void 0,
    plusMinus: n[9] || void 0,
    hourOffset: Xe(n[10]),
    minuteOffset: Xe(n[11])
  } : null;
}
function Xe(e, t = 0) {
  return Number(e) || t;
}
let Ti = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), Ei = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), wi = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, _i = "^\\d{4}-\\d{2}-\\d{2}", Si = "\\d{2}:\\d{2}:\\d{2}", Ai = "(([+-]\\d{2}(:?\\d{2})?)|Z)", ji = new RegExp(`${_i}T${Si}(\\.\\d+)?${Ai}$`), Ni = (e) => Qe(e) || e === e.trim(), Oi = {}.toString();
function Bt() {
  return new Za();
}
class Za extends Fe {
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
        return n === Oi ? t : n;
      });
    });
  }
  required(t) {
    return super.required(t).withMutation((r) => r.test({
      message: t || We.required,
      name: "required",
      skipAbsent: !0,
      test: (n) => !!n.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation((t) => (t.tests = t.tests.filter((r) => r.OPTIONS.name !== "required"), t));
  }
  length(t, r = je.length) {
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
  min(t, r = je.min) {
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
  max(t, r = je.max) {
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
      message: a || je.matches,
      params: {
        regex: t
      },
      skipAbsent: !0,
      test: (o) => o === "" && n || o.search(t) !== -1
    });
  }
  email(t = je.email) {
    return this.matches(Ti, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = je.url) {
    return this.matches(Ei, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = je.uuid) {
    return this.matches(wi, {
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
    } = t : r = t), this.matches(ji, {
      name: "datetime",
      message: r || je.datetime,
      excludeEmptyString: !0
    }).test({
      name: "datetime_offset",
      message: r || je.datetime_offset,
      params: {
        allowOffset: n
      },
      skipAbsent: !0,
      test: (s) => {
        if (!s || n) return !0;
        const o = en(s);
        return o ? !!o.z : !1;
      }
    }).test({
      name: "datetime_precision",
      message: r || je.datetime_precision,
      params: {
        precision: a
      },
      skipAbsent: !0,
      test: (s) => {
        if (!s || a == null) return !0;
        const o = en(s);
        return o ? o.precision === a : !1;
      }
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((t) => t === null ? "" : t);
  }
  trim(t = je.trim) {
    return this.transform((r) => r != null ? r.trim() : r).test({
      message: t,
      name: "trim",
      test: Ni
    });
  }
  lowercase(t = je.lowercase) {
    return this.transform((r) => Qe(r) ? r : r.toLowerCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (r) => Qe(r) || r === r.toLowerCase()
    });
  }
  uppercase(t = je.uppercase) {
    return this.transform((r) => Qe(r) ? r : r.toUpperCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (r) => Qe(r) || r === r.toUpperCase()
    });
  }
}
Bt.prototype = Za.prototype;
let Ci = (e) => e != +e;
function yr() {
  return new Qa();
}
class Qa extends Fe {
  constructor() {
    super({
      type: "number",
      check(t) {
        return t instanceof Number && (t = t.valueOf()), typeof t == "number" && !Ci(t);
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
  min(t, r = nt.min) {
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
  max(t, r = nt.max) {
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
  lessThan(t, r = nt.lessThan) {
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
  moreThan(t, r = nt.moreThan) {
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
  positive(t = nt.positive) {
    return this.moreThan(0, t);
  }
  negative(t = nt.negative) {
    return this.lessThan(0, t);
  }
  integer(t = nt.integer) {
    return this.test({
      name: "integer",
      message: t,
      skipAbsent: !0,
      test: (r) => Number.isInteger(r)
    });
  }
  truncate() {
    return this.transform((t) => Qe(t) ? t : t | 0);
  }
  round(t) {
    var r;
    let n = ["ceil", "floor", "round", "trunc"];
    if (t = ((r = t) == null ? void 0 : r.toLowerCase()) || "round", t === "trunc") return this.truncate();
    if (n.indexOf(t.toLowerCase()) === -1) throw new TypeError("Only valid options for round() are: " + n.join(", "));
    return this.transform((a) => Qe(a) ? a : Math[t](a));
  }
}
yr.prototype = Qa.prototype;
let Ja = /* @__PURE__ */ new Date(""), $i = (e) => Object.prototype.toString.call(e) === "[object Date]";
function hn() {
  return new Kt();
}
class Kt extends Fe {
  constructor() {
    super({
      type: "date",
      check(t) {
        return $i(t) && !isNaN(t.getTime());
      }
    }), this.withMutation(() => {
      this.transform((t, r) => !this.spec.coerce || this.isType(t) || t === null ? t : (t = vi(t), isNaN(t) ? Kt.INVALID_DATE : new Date(t)));
    });
  }
  prepareParam(t, r) {
    let n;
    if (pt.isRef(t))
      n = t;
    else {
      let a = this.cast(t);
      if (!this._typeCheck(a)) throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);
      n = a;
    }
    return n;
  }
  min(t, r = Qr.min) {
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
  max(t, r = Qr.max) {
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
Kt.INVALID_DATE = Ja;
hn.prototype = Kt.prototype;
hn.INVALID_DATE = Ja;
function Ri(e, t = []) {
  let r = [], n = /* @__PURE__ */ new Set(), a = new Set(t.map(([o, c]) => `${o}-${c}`));
  function s(o, c) {
    let f = dt.split(o)[0];
    n.add(f), a.has(`${c}-${f}`) || r.push([c, f]);
  }
  for (const o of Object.keys(e)) {
    let c = e[o];
    n.add(o), pt.isRef(c) && c.isSibling ? s(c.path, o) : _r(c) && "deps" in c && c.deps.forEach((f) => s(f, o));
  }
  return si.array(Array.from(n), r).reverse();
}
function Wn(e, t) {
  let r = 1 / 0;
  return e.some((n, a) => {
    var s;
    if ((s = t.path) != null && s.includes(n))
      return r = a, !0;
  }), r;
}
function es(e) {
  return (t, r) => Wn(e, t) - Wn(e, r);
}
const ts = (e, t, r) => {
  if (typeof e != "string")
    return e;
  let n = e;
  try {
    n = JSON.parse(e);
  } catch {
  }
  return r.isType(n) ? n : e;
};
function gr(e) {
  if ("fields" in e) {
    const t = {};
    for (const [r, n] of Object.entries(e.fields))
      t[r] = gr(n);
    return e.setFields(t);
  }
  if (e.type === "array") {
    const t = e.optional();
    return t.innerType && (t.innerType = gr(t.innerType)), t;
  }
  return e.type === "tuple" ? e.optional().clone({
    types: e.spec.types.map(gr)
  }) : "optional" in e ? e.optional() : e;
}
const Fi = (e, t) => {
  const r = [...dt.normalizePath(t)];
  if (r.length === 1) return r[0] in e;
  let n = r.pop(), a = dt.getter(dt.join(r), !0)(e);
  return !!(a && n in a);
};
let Yn = (e) => Object.prototype.toString.call(e) === "[object Object]";
function qn(e, t) {
  let r = Object.keys(e.fields);
  return Object.keys(t).filter((n) => r.indexOf(n) === -1);
}
const Ii = es([]);
function rs(e) {
  return new ns(e);
}
class ns extends Fe {
  constructor(t) {
    super({
      type: "object",
      check(r) {
        return Yn(r) || typeof r == "function";
      }
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = Ii, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      t && this.shape(t);
    });
  }
  _cast(t, r = {}) {
    var n;
    let a = super._cast(t, r);
    if (a === void 0) return this.getDefault(r);
    if (!this._typeCheck(a)) return a;
    let s = this.fields, o = (n = r.stripUnknown) != null ? n : this.spec.noUnknown, c = [].concat(this._nodes, Object.keys(a).filter((g) => !this._nodes.includes(g))), f = {}, u = Object.assign({}, r, {
      parent: f,
      __validating: r.__validating || !1
    }), p = !1;
    for (const g of c) {
      let h = s[g], T = g in a, v = a[g];
      if (h) {
        let j;
        u.path = (r.path ? `${r.path}.` : "") + g, h = h.resolve({
          value: v,
          context: r.context,
          parent: f
        });
        let O = h instanceof Fe ? h.spec : void 0, m = O?.strict;
        if (O != null && O.strip) {
          p = p || g in a;
          continue;
        }
        j = !r.__validating || !m ? h.cast(v, u) : v, j !== void 0 && (f[g] = j);
      } else T && !o && (f[g] = v);
      (T !== g in f || f[g] !== v) && (p = !0);
    }
    return p ? f : a;
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
    }, ...s], r.__validating = !0, r.originalValue = o, super._validate(t, r, n, (f, u) => {
      if (!c || !Yn(u)) {
        a(f, u);
        return;
      }
      o = o || u;
      let p = [];
      for (let g of this._nodes) {
        let h = this.fields[g];
        !h || pt.isRef(h) || p.push(h.asNestedTest({
          options: r,
          key: g,
          parent: u,
          parentPath: r.path,
          originalParent: o
        }));
      }
      this.runTests({
        tests: p,
        value: u,
        originalValue: o,
        options: r
      }, n, (g) => {
        a(g.sort(this._sortErrors).concat(f), u);
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
    return n.fields = t, n._nodes = Ri(t, r), n._sortErrors = es(Object.keys(t)), r && (n._excludedEdges = r), n;
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
    return gr(this);
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
    let a = dt.getter(t, !0);
    return this.transform((s) => {
      if (!s) return s;
      let o = s;
      return Fi(s, t) && (o = Object.assign({}, s), n || delete o[t], o[r] = a(s)), o;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(ts);
  }
  /**
   * Similar to `noUnknown` but only validates that an object is the right shape without stripping the unknown keys
   */
  exact(t) {
    return this.test({
      name: "exact",
      exclusive: !0,
      message: t || pr.exact,
      test(r) {
        if (r == null) return !0;
        const n = qn(this.schema, r);
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
  noUnknown(t = !0, r = pr.noUnknown) {
    typeof t != "boolean" && (r = t, t = !0);
    let n = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: r,
      test(a) {
        if (a == null) return !0;
        const s = qn(this.schema, a);
        return !t || s.length === 0 || this.createError({
          params: {
            unknown: s.join(", ")
          }
        });
      }
    });
    return n.spec.noUnknown = t, n;
  }
  unknown(t = !0, r = pr.noUnknown) {
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
    return this.transformKeys(Mr.camelCase);
  }
  snakeCase() {
    return this.transformKeys(Mr.snakeCase);
  }
  constantCase() {
    return this.transformKeys((t) => Mr.snakeCase(t).toUpperCase());
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
rs.prototype = ns.prototype;
function tn(e) {
  return new as(e);
}
class as extends Fe {
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
    r.originalValue != null && r.originalValue, super._validate(t, r, n, (f, u) => {
      var p;
      if (!c || !o || !this._typeCheck(u)) {
        a(f, u);
        return;
      }
      let g = new Array(u.length);
      for (let T = 0; T < u.length; T++) {
        var h;
        g[T] = o.asNestedTest({
          options: r,
          index: T,
          parent: u,
          parentPath: r.path,
          originalParent: (h = r.originalValue) != null ? h : t
        });
      }
      this.runTests({
        value: u,
        tests: g,
        originalValue: (p = r.originalValue) != null ? p : t,
        options: r
      }, n, (T) => a(T.concat(f), u));
    });
  }
  clone(t) {
    const r = super.clone(t);
    return r.innerType = this.innerType, r;
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(ts);
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
    if (!_r(t)) throw new TypeError("`array.of()` sub-schema must be a valid yup schema not: " + Je(t));
    return r.innerType = t, r.spec = Object.assign({}, r.spec, {
      types: t
    }), r;
  }
  length(t, r = mr.length) {
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
    return r = r || mr.min, this.test({
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
    return r = r || mr.max, this.test({
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
tn.prototype = as.prototype;
/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */
const {
  entries: ss,
  setPrototypeOf: Kn,
  isFrozen: Di,
  getPrototypeOf: Pi,
  getOwnPropertyDescriptor: Mi
} = Object;
let {
  freeze: we,
  seal: Le,
  create: rn
} = Object, {
  apply: nn,
  construct: an
} = typeof Reflect < "u" && Reflect;
we || (we = function(t) {
  return t;
});
Le || (Le = function(t) {
  return t;
});
nn || (nn = function(t, r) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    a[s - 2] = arguments[s];
  return t.apply(r, a);
});
an || (an = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    n[a - 1] = arguments[a];
  return new t(...n);
});
const lr = _e(Array.prototype.forEach), Li = _e(Array.prototype.lastIndexOf), Xn = _e(Array.prototype.pop), Pt = _e(Array.prototype.push), ki = _e(Array.prototype.splice), br = _e(String.prototype.toLowerCase), Lr = _e(String.prototype.toString), kr = _e(String.prototype.match), Mt = _e(String.prototype.replace), zi = _e(String.prototype.indexOf), Ui = _e(String.prototype.trim), Ue = _e(Object.prototype.hasOwnProperty), Te = _e(RegExp.prototype.test), Lt = Bi(TypeError);
function _e(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return nn(e, t, n);
  };
}
function Bi(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return an(e, r);
  };
}
function Z(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : br;
  Kn && Kn(e, null);
  let n = t.length;
  for (; n--; ) {
    let a = t[n];
    if (typeof a == "string") {
      const s = r(a);
      s !== a && (Di(t) || (t[n] = s), a = s);
    }
    e[a] = !0;
  }
  return e;
}
function Vi(e) {
  for (let t = 0; t < e.length; t++)
    Ue(e, t) || (e[t] = null);
  return e;
}
function He(e) {
  const t = rn(null);
  for (const [r, n] of ss(e))
    Ue(e, r) && (Array.isArray(n) ? t[r] = Vi(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = He(n) : t[r] = n);
  return t;
}
function kt(e, t) {
  for (; e !== null; ) {
    const n = Mi(e, t);
    if (n) {
      if (n.get)
        return _e(n.get);
      if (typeof n.value == "function")
        return _e(n.value);
    }
    e = Pi(e);
  }
  function r() {
    return null;
  }
  return r;
}
const Zn = we(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), zr = we(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ur = we(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Gi = we(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Br = we(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Hi = we(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Qn = we(["#text"]), Jn = we(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Vr = we(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ea = we(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), cr = we(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Wi = Le(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Yi = Le(/<%[\w\W]*|[\w\W]*%>/gm), qi = Le(/\$\{[\w\W]*/gm), Ki = Le(/^data-[\-\w.\u00B7-\uFFFF]+$/), Xi = Le(/^aria-[\-\w]+$/), is = Le(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Zi = Le(/^(?:\w+script|data):/i), Qi = Le(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), os = Le(/^html$/i), Ji = Le(/^[a-z][.\w]*(-[.\w]+)+$/i);
var ta = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Xi,
  ATTR_WHITESPACE: Qi,
  CUSTOM_ELEMENT: Ji,
  DATA_ATTR: Ki,
  DOCTYPE_NAME: os,
  ERB_EXPR: Yi,
  IS_ALLOWED_URI: is,
  IS_SCRIPT_OR_DATA: Zi,
  MUSTACHE_EXPR: Wi,
  TMPLIT_EXPR: qi
});
const zt = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, eo = function() {
  return typeof window > "u" ? null : window;
}, to = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let n = null;
  const a = "data-tt-policy-suffix";
  r && r.hasAttribute(a) && (n = r.getAttribute(a));
  const s = "dompurify" + (n ? "#" + n : "");
  try {
    return t.createPolicy(s, {
      createHTML(o) {
        return o;
      },
      createScriptURL(o) {
        return o;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
}, ra = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function ls() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : eo();
  const t = (Y) => ls(Y);
  if (t.version = "3.3.1", t.removed = [], !e || !e.document || e.document.nodeType !== zt.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const n = r, a = n.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: o,
    Node: c,
    Element: f,
    NodeFilter: u,
    NamedNodeMap: p = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: g,
    DOMParser: h,
    trustedTypes: T
  } = e, v = f.prototype, j = kt(v, "cloneNode"), O = kt(v, "remove"), m = kt(v, "nextSibling"), y = kt(v, "childNodes"), E = kt(v, "parentNode");
  if (typeof o == "function") {
    const Y = r.createElement("template");
    Y.content && Y.content.ownerDocument && (r = Y.content.ownerDocument);
  }
  let w, l = "";
  const {
    implementation: S,
    createNodeIterator: N,
    createDocumentFragment: z,
    getElementsByTagName: P
  } = r, {
    importNode: B
  } = n;
  let I = ra();
  t.isSupported = typeof ss == "function" && typeof E == "function" && S && S.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: H,
    ERB_EXPR: K,
    TMPLIT_EXPR: Q,
    DATA_ATTR: re,
    ARIA_ATTR: W,
    IS_SCRIPT_OR_DATA: ne,
    ATTR_WHITESPACE: A,
    CUSTOM_ELEMENT: R
  } = ta;
  let {
    IS_ALLOWED_URI: x
  } = ta, _ = null;
  const $ = Z({}, [...Zn, ...zr, ...Ur, ...Br, ...Qn]);
  let F = null;
  const M = Z({}, [...Jn, ...Vr, ...ea, ...cr]);
  let L = Object.seal(rn(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), se = null, de = null;
  const J = Object.seal(rn(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let xe = !0, Se = !0, Ve = !1, V = !0, Ce = !1, ke = !0, Ie = !1, $t = !1, Rt = !1, tt = !1, rt = !1, xt = !1, tr = !0, b = !1;
  const D = "user-content-";
  let k = !0, G = !1, q = {}, X = null;
  const ue = Z({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let $e = null;
  const vt = Z({}, ["audio", "video", "img", "source", "image", "track"]);
  let it = null;
  const rr = Z({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Tt = "http://www.w3.org/1998/Math/MathML", ot = "http://www.w3.org/2000/svg", ze = "http://www.w3.org/1999/xhtml";
  let Et = ze, Cr = !1, $r = null;
  const zs = Z({}, [Tt, ot, ze], Lr);
  let nr = Z({}, ["mi", "mo", "mn", "ms", "mtext"]), ar = Z({}, ["annotation-xml"]);
  const Us = Z({}, ["title", "style", "font", "a", "script"]);
  let Ft = null;
  const Bs = ["application/xhtml+xml", "text/html"], Vs = "text/html";
  let pe = null, wt = null;
  const Gs = r.createElement("form"), An = function(d) {
    return d instanceof RegExp || d instanceof Function;
  }, Rr = function() {
    let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(wt && wt === d)) {
      if ((!d || typeof d != "object") && (d = {}), d = He(d), Ft = // eslint-disable-next-line unicorn/prefer-includes
      Bs.indexOf(d.PARSER_MEDIA_TYPE) === -1 ? Vs : d.PARSER_MEDIA_TYPE, pe = Ft === "application/xhtml+xml" ? Lr : br, _ = Ue(d, "ALLOWED_TAGS") ? Z({}, d.ALLOWED_TAGS, pe) : $, F = Ue(d, "ALLOWED_ATTR") ? Z({}, d.ALLOWED_ATTR, pe) : M, $r = Ue(d, "ALLOWED_NAMESPACES") ? Z({}, d.ALLOWED_NAMESPACES, Lr) : zs, it = Ue(d, "ADD_URI_SAFE_ATTR") ? Z(He(rr), d.ADD_URI_SAFE_ATTR, pe) : rr, $e = Ue(d, "ADD_DATA_URI_TAGS") ? Z(He(vt), d.ADD_DATA_URI_TAGS, pe) : vt, X = Ue(d, "FORBID_CONTENTS") ? Z({}, d.FORBID_CONTENTS, pe) : ue, se = Ue(d, "FORBID_TAGS") ? Z({}, d.FORBID_TAGS, pe) : He({}), de = Ue(d, "FORBID_ATTR") ? Z({}, d.FORBID_ATTR, pe) : He({}), q = Ue(d, "USE_PROFILES") ? d.USE_PROFILES : !1, xe = d.ALLOW_ARIA_ATTR !== !1, Se = d.ALLOW_DATA_ATTR !== !1, Ve = d.ALLOW_UNKNOWN_PROTOCOLS || !1, V = d.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ce = d.SAFE_FOR_TEMPLATES || !1, ke = d.SAFE_FOR_XML !== !1, Ie = d.WHOLE_DOCUMENT || !1, tt = d.RETURN_DOM || !1, rt = d.RETURN_DOM_FRAGMENT || !1, xt = d.RETURN_TRUSTED_TYPE || !1, Rt = d.FORCE_BODY || !1, tr = d.SANITIZE_DOM !== !1, b = d.SANITIZE_NAMED_PROPS || !1, k = d.KEEP_CONTENT !== !1, G = d.IN_PLACE || !1, x = d.ALLOWED_URI_REGEXP || is, Et = d.NAMESPACE || ze, nr = d.MATHML_TEXT_INTEGRATION_POINTS || nr, ar = d.HTML_INTEGRATION_POINTS || ar, L = d.CUSTOM_ELEMENT_HANDLING || {}, d.CUSTOM_ELEMENT_HANDLING && An(d.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (L.tagNameCheck = d.CUSTOM_ELEMENT_HANDLING.tagNameCheck), d.CUSTOM_ELEMENT_HANDLING && An(d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (L.attributeNameCheck = d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), d.CUSTOM_ELEMENT_HANDLING && typeof d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (L.allowCustomizedBuiltInElements = d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Ce && (Se = !1), rt && (tt = !0), q && (_ = Z({}, Qn), F = [], q.html === !0 && (Z(_, Zn), Z(F, Jn)), q.svg === !0 && (Z(_, zr), Z(F, Vr), Z(F, cr)), q.svgFilters === !0 && (Z(_, Ur), Z(F, Vr), Z(F, cr)), q.mathMl === !0 && (Z(_, Br), Z(F, ea), Z(F, cr))), d.ADD_TAGS && (typeof d.ADD_TAGS == "function" ? J.tagCheck = d.ADD_TAGS : (_ === $ && (_ = He(_)), Z(_, d.ADD_TAGS, pe))), d.ADD_ATTR && (typeof d.ADD_ATTR == "function" ? J.attributeCheck = d.ADD_ATTR : (F === M && (F = He(F)), Z(F, d.ADD_ATTR, pe))), d.ADD_URI_SAFE_ATTR && Z(it, d.ADD_URI_SAFE_ATTR, pe), d.FORBID_CONTENTS && (X === ue && (X = He(X)), Z(X, d.FORBID_CONTENTS, pe)), d.ADD_FORBID_CONTENTS && (X === ue && (X = He(X)), Z(X, d.ADD_FORBID_CONTENTS, pe)), k && (_["#text"] = !0), Ie && Z(_, ["html", "head", "body"]), _.table && (Z(_, ["tbody"]), delete se.tbody), d.TRUSTED_TYPES_POLICY) {
        if (typeof d.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Lt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof d.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Lt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        w = d.TRUSTED_TYPES_POLICY, l = w.createHTML("");
      } else
        w === void 0 && (w = to(T, a)), w !== null && typeof l == "string" && (l = w.createHTML(""));
      we && we(d), wt = d;
    }
  }, jn = Z({}, [...zr, ...Ur, ...Gi]), Nn = Z({}, [...Br, ...Hi]), Hs = function(d) {
    let C = E(d);
    (!C || !C.tagName) && (C = {
      namespaceURI: Et,
      tagName: "template"
    });
    const U = br(d.tagName), ce = br(C.tagName);
    return $r[d.namespaceURI] ? d.namespaceURI === ot ? C.namespaceURI === ze ? U === "svg" : C.namespaceURI === Tt ? U === "svg" && (ce === "annotation-xml" || nr[ce]) : !!jn[U] : d.namespaceURI === Tt ? C.namespaceURI === ze ? U === "math" : C.namespaceURI === ot ? U === "math" && ar[ce] : !!Nn[U] : d.namespaceURI === ze ? C.namespaceURI === ot && !ar[ce] || C.namespaceURI === Tt && !nr[ce] ? !1 : !Nn[U] && (Us[U] || !jn[U]) : !!(Ft === "application/xhtml+xml" && $r[d.namespaceURI]) : !1;
  }, Ge = function(d) {
    Pt(t.removed, {
      element: d
    });
    try {
      E(d).removeChild(d);
    } catch {
      O(d);
    }
  }, lt = function(d, C) {
    try {
      Pt(t.removed, {
        attribute: C.getAttributeNode(d),
        from: C
      });
    } catch {
      Pt(t.removed, {
        attribute: null,
        from: C
      });
    }
    if (C.removeAttribute(d), d === "is")
      if (tt || rt)
        try {
          Ge(C);
        } catch {
        }
      else
        try {
          C.setAttribute(d, "");
        } catch {
        }
  }, On = function(d) {
    let C = null, U = null;
    if (Rt)
      d = "<remove></remove>" + d;
    else {
      const fe = kr(d, /^[\r\n\t ]+/);
      U = fe && fe[0];
    }
    Ft === "application/xhtml+xml" && Et === ze && (d = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + d + "</body></html>");
    const ce = w ? w.createHTML(d) : d;
    if (Et === ze)
      try {
        C = new h().parseFromString(ce, Ft);
      } catch {
      }
    if (!C || !C.documentElement) {
      C = S.createDocument(Et, "template", null);
      try {
        C.documentElement.innerHTML = Cr ? l : ce;
      } catch {
      }
    }
    const ve = C.body || C.documentElement;
    return d && U && ve.insertBefore(r.createTextNode(U), ve.childNodes[0] || null), Et === ze ? P.call(C, Ie ? "html" : "body")[0] : Ie ? C.documentElement : ve;
  }, Cn = function(d) {
    return N.call(
      d.ownerDocument || d,
      d,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null
    );
  }, Fr = function(d) {
    return d instanceof g && (typeof d.nodeName != "string" || typeof d.textContent != "string" || typeof d.removeChild != "function" || !(d.attributes instanceof p) || typeof d.removeAttribute != "function" || typeof d.setAttribute != "function" || typeof d.namespaceURI != "string" || typeof d.insertBefore != "function" || typeof d.hasChildNodes != "function");
  }, $n = function(d) {
    return typeof c == "function" && d instanceof c;
  };
  function qe(Y, d, C) {
    lr(Y, (U) => {
      U.call(t, d, C, wt);
    });
  }
  const Rn = function(d) {
    let C = null;
    if (qe(I.beforeSanitizeElements, d, null), Fr(d))
      return Ge(d), !0;
    const U = pe(d.nodeName);
    if (qe(I.uponSanitizeElement, d, {
      tagName: U,
      allowedTags: _
    }), ke && d.hasChildNodes() && !$n(d.firstElementChild) && Te(/<[/\w!]/g, d.innerHTML) && Te(/<[/\w!]/g, d.textContent) || d.nodeType === zt.progressingInstruction || ke && d.nodeType === zt.comment && Te(/<[/\w]/g, d.data))
      return Ge(d), !0;
    if (!(J.tagCheck instanceof Function && J.tagCheck(U)) && (!_[U] || se[U])) {
      if (!se[U] && In(U) && (L.tagNameCheck instanceof RegExp && Te(L.tagNameCheck, U) || L.tagNameCheck instanceof Function && L.tagNameCheck(U)))
        return !1;
      if (k && !X[U]) {
        const ce = E(d) || d.parentNode, ve = y(d) || d.childNodes;
        if (ve && ce) {
          const fe = ve.length;
          for (let Ae = fe - 1; Ae >= 0; --Ae) {
            const Ke = j(ve[Ae], !0);
            Ke.__removalCount = (d.__removalCount || 0) + 1, ce.insertBefore(Ke, m(d));
          }
        }
      }
      return Ge(d), !0;
    }
    return d instanceof f && !Hs(d) || (U === "noscript" || U === "noembed" || U === "noframes") && Te(/<\/no(script|embed|frames)/i, d.innerHTML) ? (Ge(d), !0) : (Ce && d.nodeType === zt.text && (C = d.textContent, lr([H, K, Q], (ce) => {
      C = Mt(C, ce, " ");
    }), d.textContent !== C && (Pt(t.removed, {
      element: d.cloneNode()
    }), d.textContent = C)), qe(I.afterSanitizeElements, d, null), !1);
  }, Fn = function(d, C, U) {
    if (tr && (C === "id" || C === "name") && (U in r || U in Gs))
      return !1;
    if (!(Se && !de[C] && Te(re, C))) {
      if (!(xe && Te(W, C))) {
        if (!(J.attributeCheck instanceof Function && J.attributeCheck(C, d))) {
          if (!F[C] || de[C]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(In(d) && (L.tagNameCheck instanceof RegExp && Te(L.tagNameCheck, d) || L.tagNameCheck instanceof Function && L.tagNameCheck(d)) && (L.attributeNameCheck instanceof RegExp && Te(L.attributeNameCheck, C) || L.attributeNameCheck instanceof Function && L.attributeNameCheck(C, d)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              C === "is" && L.allowCustomizedBuiltInElements && (L.tagNameCheck instanceof RegExp && Te(L.tagNameCheck, U) || L.tagNameCheck instanceof Function && L.tagNameCheck(U)))
            ) return !1;
          } else if (!it[C]) {
            if (!Te(x, Mt(U, A, ""))) {
              if (!((C === "src" || C === "xlink:href" || C === "href") && d !== "script" && zi(U, "data:") === 0 && $e[d])) {
                if (!(Ve && !Te(ne, Mt(U, A, "")))) {
                  if (U)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, In = function(d) {
    return d !== "annotation-xml" && kr(d, R);
  }, Dn = function(d) {
    qe(I.beforeSanitizeAttributes, d, null);
    const {
      attributes: C
    } = d;
    if (!C || Fr(d))
      return;
    const U = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: F,
      forceKeepAttr: void 0
    };
    let ce = C.length;
    for (; ce--; ) {
      const ve = C[ce], {
        name: fe,
        namespaceURI: Ae,
        value: Ke
      } = ve, _t = pe(fe), Ir = Ke;
      let ge = fe === "value" ? Ir : Ui(Ir);
      if (U.attrName = _t, U.attrValue = ge, U.keepAttr = !0, U.forceKeepAttr = void 0, qe(I.uponSanitizeAttribute, d, U), ge = U.attrValue, b && (_t === "id" || _t === "name") && (lt(fe, d), ge = D + ge), ke && Te(/((--!?|])>)|<\/(style|title|textarea)/i, ge)) {
        lt(fe, d);
        continue;
      }
      if (_t === "attributename" && kr(ge, "href")) {
        lt(fe, d);
        continue;
      }
      if (U.forceKeepAttr)
        continue;
      if (!U.keepAttr) {
        lt(fe, d);
        continue;
      }
      if (!V && Te(/\/>/i, ge)) {
        lt(fe, d);
        continue;
      }
      Ce && lr([H, K, Q], (Mn) => {
        ge = Mt(ge, Mn, " ");
      });
      const Pn = pe(d.nodeName);
      if (!Fn(Pn, _t, ge)) {
        lt(fe, d);
        continue;
      }
      if (w && typeof T == "object" && typeof T.getAttributeType == "function" && !Ae)
        switch (T.getAttributeType(Pn, _t)) {
          case "TrustedHTML": {
            ge = w.createHTML(ge);
            break;
          }
          case "TrustedScriptURL": {
            ge = w.createScriptURL(ge);
            break;
          }
        }
      if (ge !== Ir)
        try {
          Ae ? d.setAttributeNS(Ae, fe, ge) : d.setAttribute(fe, ge), Fr(d) ? Ge(d) : Xn(t.removed);
        } catch {
          lt(fe, d);
        }
    }
    qe(I.afterSanitizeAttributes, d, null);
  }, Ws = function Y(d) {
    let C = null;
    const U = Cn(d);
    for (qe(I.beforeSanitizeShadowDOM, d, null); C = U.nextNode(); )
      qe(I.uponSanitizeShadowNode, C, null), Rn(C), Dn(C), C.content instanceof s && Y(C.content);
    qe(I.afterSanitizeShadowDOM, d, null);
  };
  return t.sanitize = function(Y) {
    let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, C = null, U = null, ce = null, ve = null;
    if (Cr = !Y, Cr && (Y = "<!-->"), typeof Y != "string" && !$n(Y))
      if (typeof Y.toString == "function") {
        if (Y = Y.toString(), typeof Y != "string")
          throw Lt("dirty is not a string, aborting");
      } else
        throw Lt("toString is not a function");
    if (!t.isSupported)
      return Y;
    if ($t || Rr(d), t.removed = [], typeof Y == "string" && (G = !1), G) {
      if (Y.nodeName) {
        const Ke = pe(Y.nodeName);
        if (!_[Ke] || se[Ke])
          throw Lt("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (Y instanceof c)
      C = On("<!---->"), U = C.ownerDocument.importNode(Y, !0), U.nodeType === zt.element && U.nodeName === "BODY" || U.nodeName === "HTML" ? C = U : C.appendChild(U);
    else {
      if (!tt && !Ce && !Ie && // eslint-disable-next-line unicorn/prefer-includes
      Y.indexOf("<") === -1)
        return w && xt ? w.createHTML(Y) : Y;
      if (C = On(Y), !C)
        return tt ? null : xt ? l : "";
    }
    C && Rt && Ge(C.firstChild);
    const fe = Cn(G ? Y : C);
    for (; ce = fe.nextNode(); )
      Rn(ce), Dn(ce), ce.content instanceof s && Ws(ce.content);
    if (G)
      return Y;
    if (tt) {
      if (rt)
        for (ve = z.call(C.ownerDocument); C.firstChild; )
          ve.appendChild(C.firstChild);
      else
        ve = C;
      return (F.shadowroot || F.shadowrootmode) && (ve = B.call(n, ve, !0)), ve;
    }
    let Ae = Ie ? C.outerHTML : C.innerHTML;
    return Ie && _["!doctype"] && C.ownerDocument && C.ownerDocument.doctype && C.ownerDocument.doctype.name && Te(os, C.ownerDocument.doctype.name) && (Ae = "<!DOCTYPE " + C.ownerDocument.doctype.name + `>
` + Ae), Ce && lr([H, K, Q], (Ke) => {
      Ae = Mt(Ae, Ke, " ");
    }), w && xt ? w.createHTML(Ae) : Ae;
  }, t.setConfig = function() {
    let Y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Rr(Y), $t = !0;
  }, t.clearConfig = function() {
    wt = null, $t = !1;
  }, t.isValidAttribute = function(Y, d, C) {
    wt || Rr({});
    const U = pe(Y), ce = pe(d);
    return Fn(U, ce, C);
  }, t.addHook = function(Y, d) {
    typeof d == "function" && Pt(I[Y], d);
  }, t.removeHook = function(Y, d) {
    if (d !== void 0) {
      const C = Li(I[Y], d);
      return C === -1 ? void 0 : ki(I[Y], C, 1)[0];
    }
    return Xn(I[Y]);
  }, t.removeHooks = function(Y) {
    I[Y] = [];
  }, t.removeAllHooks = function() {
    I = ra();
  }, t;
}
var ro = ls();
const no = "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg", ao = ["jpg", "jpeg", "png", "gif", "svg", "webp"], so = ["mp4", "webm", "ogg"], io = ["txt", "json", "csv"], oo = ["pdf"];
function lo(e) {
  return e.template ? e.template : "tab";
}
function co(e) {
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    const a = n.group || "Info";
    t[a] || (t[a] = { label: a, type: "fields", fields: [] }), t[a]?.fields?.push({ name: r, ...n });
  }), t;
}
const uo = (e) => Object.entries(e ?? {}).filter(([, t]) => t.type === "geolocation").map(([t]) => t);
async function fo() {
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
function Er(e, t = "create") {
  const r = {};
  return Object.keys(e).forEach((n) => {
    e[n].vmode === "edit" && t === "create" || (r[n] = {
      label: n,
      required: e[n].required ?? !1
    });
  }), r;
}
function ho(e, t = "create") {
  return Object.entries(e).filter(([, r]) => !(r.vmode === "edit" && t === "create")).map(([r, n]) => ({
    ...n,
    name: r
  }));
}
const Xt = {
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
function Zt(e) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(e) ? e : 6;
}
const Oe = (e, t) => typeof e == "string" ? e.replace(
  /#(\w+)#/g,
  (r, n) => t[n] !== void 0 ? String(t[n]) : r
) : Array.isArray(e) ? e.map((r) => Oe(r, t)) : e && typeof e == "object" ? Object.fromEntries(
  Object.entries(e).map(([r, n]) => [
    Oe(r, t),
    Oe(n, t)
  ])
) : e, cs = (e) => {
  const t = Array.isArray(e?.data?.data) ? e.data.data[0] : Array.isArray(e?.data) ? e.data[0] : e?.data?.data ?? e?.data;
  return t && typeof t == "object" && !Array.isArray(t) ? t : null;
}, Be = (e, t, r, n) => {
  if (!Array.isArray(r) || r.length === 0) return {};
  const a = n ?? (r[0] && typeof r[0] == "object" && "category" in r[0] ? "category" : void 0);
  if (!a) {
    const o = {};
    return r.forEach((c) => {
      const f = c[e], u = c[t];
      f != null && u != null && (o[String(f)] = String(u));
    }), o;
  }
  const s = {};
  return r.forEach((o) => {
    const c = o[a] ?? "Others", f = o[e], u = o[t];
    f == null || u == null || (s[c] || (s[c] = {}), s[c][String(f)] = String(u));
  }), s;
};
function na(e, t) {
  if (!t || Object.keys(t).length === 0) return e;
  if (typeof e == "number")
    return t[String(e)] ?? e;
  if (typeof e == "string") {
    const n = e.split(",").map((a) => a.trim()).map((a) => t[a]).filter(Boolean);
    return n.length ? n.join(", ") : e;
  }
  return e;
}
const po = (e) => e === !0 || e === "true", mo = (e, t, r, n) => {
  e.forEach((a) => {
    const s = a?.name;
    if (!s) return;
    let o = n?.[s];
    o == null && (o = a.default), a.multiple === !0 || a.type === "checkbox" || a.type === "tags" ? t[s] = Array.isArray(o) ? o : typeof o == "string" ? o.split(",").map((f) => f.trim()).filter(Boolean) : [] : a.type === "json" ? t[s] = typeof o == "object" && o !== null ? JSON.stringify(o, null, 2) : o ?? "" : a.type === "date" ? t[s] = typeof o == "string" ? o.slice(0, 10) : "" : a.type === "time" ? typeof o == "string" ? o.includes("T") ? t[s] = o.slice(11, 16) : t[s] = o.slice(0, 5) : t[s] = "" : s === "blocked" || s === "blacklist" ? t[s] = String(o ?? "false") : t[s] = o ?? "";
    let c;
    a.type === "file" ? c = a.multiple ? tn().of(Jr()) : Jr() : a.multiple === !0 || a.type === "checkbox" || a.type === "tags" ? c = tn().of(Bt()) : a.type === "email" ? c = Bt().email("Invalid email") : a.type === "number" ? c = yr().typeError("Must be a number") : a.type === "json" ? c = Bt().test("json", "Invalid JSON", (f) => {
      if (!f) return !0;
      try {
        return JSON.parse(f), !0;
      } catch {
        return !1;
      }
    }) : c = Bt(), a.required && (c = c.required(
      a.error_message || `${a.label || s} is required`
    )), a?.validate?.regex && typeof a.validate.regex == "string" && (c = c.matches(
      new RegExp(a?.validate?.regex),
      a?.error_message || "Invalid input format"
    )), a?.validate && Object.entries(a.validate).forEach(([f, u]) => {
      switch (f) {
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
          c = hn().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((p, g) => {
            if (typeof g == "string") {
              const h = g.replace(/-/g, "/"), [T, v, j] = h.split("/");
              if (T && v && j)
                return /* @__PURE__ */ new Date(`${j}-${v}-${T}`);
            }
            return p;
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
          c = yr().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          c = yr().typeError("Must be a decimal").transform((p, g) => {
            if (g == null || g === "") return;
            const h = Number(g);
            if (isNaN(h)) return p;
            if (typeof p == "number" && !isNaN(p)) {
              const T = Number(p);
              return Number.isInteger(T) ? Number(h.toFixed(T)) : h;
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
            (p) => p && p.toUpperCase()
          );
          break;
        case "lower":
          c = c.transform(
            (p) => p && p.toLowerCase()
          );
          break;
        case "length-min": {
          const p = Number(u);
          isNaN(p) || (c = c.min(p, `Minimum length is ${p}`));
          break;
        }
        case "length-max": {
          const p = Number(u);
          isNaN(p) || (c = c.max(p, `Maximum length is ${p}`));
          break;
        }
      }
    }), r[s] = c;
  });
}, sn = (e) => !e || typeof e != "object" ? !1 : Object.values(e).every(
  (t) => typeof t == "object" && t !== null
);
function yo(e) {
  return typeof e == "object" && e !== null && typeof e.target == "string" && typeof e.src == "object" && e.src !== null && typeof e.src.table == "string";
}
function go(e) {
  return e.split(",").map((t) => t.trim()).map((t) => {
    const r = t.match(/^(.+?)\s+as\s+.+$/i);
    return r ? r[1]?.trim() : t;
  }).filter((t) => !!t);
}
const aa = (e, t) => {
  if (!e || t == null) return;
  const r = String(t);
  if (typeof Object.values(e)[0] == "string")
    return e[r];
  for (const a of Object.values(e))
    if (r in a)
      return a[r];
}, bo = (e) => {
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
function xo(e) {
  return e ? sn(e) ? Object.values(e).reduce((t, r) => (Object.assign(t, r), t), {}) : e : {};
}
const Re = (e) => {
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
function vo(e) {
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
function To(e = "") {
  return e.split(".").pop()?.toLowerCase() ?? "";
}
function Eo(e) {
  return ao.includes(e) ? "image" : so.includes(e) ? "video" : oo.includes(e) ? "pdf" : io.includes(e) ? "text" : "other";
}
const sa = {
  image: "fa fa-file-image",
  pdf: "fa fa-file-pdf",
  video: "fa fa-file-video",
  text: "fa fa-file-lines",
  other: "fa fa-file"
};
function wo(e) {
  return ro.sanitize(e, {
    USE_PROFILES: { html: !0 }
  });
}
const _o = ({ fileUrl: e, category: t }) => e ? t === "image" ? /* @__PURE__ */ i.jsx("img", { src: e, className: "max-h-[80vh] mx-auto" }) : t === "pdf" || t === "text" ? /* @__PURE__ */ i.jsx("iframe", { src: e, className: "w-full h-[80vh]" }) : t === "video" ? /* @__PURE__ */ i.jsx("video", { controls: !0, className: "w-full max-h-[80vh]", children: /* @__PURE__ */ i.jsx("source", { src: e }) }) : /* @__PURE__ */ i.jsxs("div", { className: "text-center p-4", children: [
  /* @__PURE__ */ i.jsx("p", { children: "Preview not available" }),
  /* @__PURE__ */ i.jsx("a", { href: e, download: !0, className: "text-blue-600 underline", children: "Download file" })
] }) : null, Vt = (e) => ({
  Authorization: `Bearer ${e.accessToken}`
}), Gr = async (e) => (await ae.get(
  e.baseURL + e.dbopsGetHash,
  { headers: Vt(e) }
)).data.refhash, Hr = async (e, t) => (await ae.post(
  e.baseURL + e.dbopsGetRefId,
  t,
  { headers: Vt(e) }
)).data.refid, So = {
  async fetch(e, t, r, n) {
    const a = await Gr(e);
    let s = !1, o;
    r && (s = !0, o = r), s || (o = await Hr(e, {
      operation: "fetch",
      source: t.source,
      fields: t.fields ?? {},
      datahash: a,
      srcid: n
    }));
    const c = await ae.post(
      e.baseURL + e.dbopsFetch,
      { refid: o, datahash: a },
      { headers: Vt(e) }
    );
    return c.data?.data ?? c.data;
  },
  async create(e, t, r) {
    const n = await Gr(e), a = await Hr(e, {
      operation: "create",
      source: t.source,
      fields: t.values,
      datahash: n,
      srcid: r
    });
    return (await ae.post(
      e.baseURL + e.dbopsCreate,
      { refid: a, fields: t.values, datahash: n },
      { headers: Vt(e) }
    )).data;
  },
  async update(e, t, r) {
    const n = await Gr(e), a = await Hr(e, {
      operation: "update",
      source: t.source,
      fields: t.values,
      datahash: n,
      srcid: r
    });
    return (await ae.post(
      e.baseURL + e.dbopsUpdate,
      { refid: a, fields: t.values, datahash: n },
      { headers: Vt(e) }
    )).data;
  }
};
async function jt(e, t, r, n = void 0, a = void 0, s = {}) {
  try {
    let o = r;
    return o || (o = (await ae({
      method: "POST",
      url: e.baseURL + e.registerQuery,
      data: { query: t, srcid: a },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    })).data.queryid), await ae({
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
async function Ao({
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
      const h = Oe(o.where ?? {}, { refid: t });
      c = {
        ...o,
        table: o.table,
        cols: o.columns,
        where: h
      };
    }
    const { data: f } = await jt(
      r,
      c,
      o.queryid,
      t
    ), u = Array.isArray(f?.data?.data) ? f.data.data : Array.isArray(f?.data) ? f.data : f, p = Array.isArray(u) ? u.map(Re) : [], g = Be(
      e.valueKey ?? "value",
      e.labelKey ?? "title",
      p,
      e.groupKey
    );
    n(s.target, g);
  }
}
async function us(e, t) {
  let r = t.previewPath ?? "/api/files/preview";
  const n = await ae.get(
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
function jo(e) {
  const t = sa[e] ?? sa.other;
  return /* @__PURE__ */ i.jsx("i", { className: `${t} text-2xl text-gray-600` });
}
const No = ({ filePath: e, sqlOpsUrls: t }) => {
  const [r, n] = be(null), [a, s] = be(!1), o = To(e), c = Eo(o);
  ye(() => {
    if (!t || c !== "image" && !a) return;
    let u = !0, p = null;
    return us(e, t).then((g) => {
      u && (p = g, n(g));
    }), () => {
      u = !1, p && URL.revokeObjectURL(p);
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
        onKeyDown: (u) => u.key === "Enter" && s(!0),
        className: "inline-flex cursor-pointer items-center gap-1",
        title: "Click to preview",
        children: [
          jo(c),
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
      r ? /* @__PURE__ */ i.jsx(_o, { fileUrl: r, category: c }) : /* @__PURE__ */ i.jsx("div", { className: "text-center p-8", children: "Loading preview…" })
    ] }) })
  ] });
};
function Qt({
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
  `, u = `
    block text-sm font-semibold  transition-all duration-300 text-gray-700 capitalize
  `, [p, g] = be(
    o ?? e.options ?? {}
  ), h = oe.useRef(!1);
  oe.useEffect(() => {
    o && g(o);
  }, [o]);
  const T = oe.useMemo(
    () => xo(p),
    [p]
  );
  oe.useEffect(() => {
    let E = !0, w = e.valueKey ?? "value", l = e.labelKey ?? "title";
    return (async () => {
      if (e?.options) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const I = Object.values(e.options);
          if (I.length && typeof I[0] == "string") {
            g(e.options);
            return;
          }
        }
        const P = (Array.isArray(e.options) ? e.options : [e.options]).map(Re), B = Be(
          w,
          l,
          P,
          e.groupKey
          // auto-uses `category` if present
        );
        g(B);
        return;
      }
      const N = e?.source ?? {};
      if (e.type === "dataMethod") {
        const z = e.method, P = z ? r[z] : void 0;
        if (P)
          try {
            const B = await Promise.resolve(P()), I = Array.isArray(B?.data?.data) ? B.data.data : Array.isArray(B?.data) ? B.data : B, H = Array.isArray(I) ? I.map(Re) : [], K = Be(w, l, H, e.groupKey);
            E && g(K);
          } catch (B) {
            console.error("Method execution failed:", B), E && g({});
          }
        else
          E && g({});
      }
      if (N.type === "api" && N.url)
        try {
          const z = await ae({
            method: N.method || "GET",
            url: N.url,
            data: N.body ?? {},
            params: N.params ?? {},
            headers: N.headers ?? {}
          }), P = Array.isArray(z?.data?.data) ? z.data.data : Array.isArray(z?.data) ? z.data : z, B = Array.isArray(P) ? P.map(Re) : [], I = Be(w, l, B, e.groupKey);
          E && g(I);
        } catch (z) {
          console.error("API execution failed:", z), E && g({});
        }
      if (e.table || e.type === "dataSelector" || e.queryid) {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let z;
          if (e.type === "dataSelector")
            z = {
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
            z = {
              table: e.table,
              cols: e.columns,
              where: e.where ? a ? Oe(e.where, { refid: a }) : e.where : void 0
            };
          }
          const P = await jt(n, z, e?.queryid, void 0, s), B = Array.isArray(P?.data?.data) ? P.data.data : Array.isArray(P?.data) ? P.data : P, I = Array.isArray(B) ? B.map(Re) : [], H = Be(w, l, I, e.groupKey);
          E && g(H);
        } catch (z) {
          console.error("API fetch failed:", z);
        }
      }
    })(), () => {
      E = !1;
    };
  }, [
    e.options,
    e.source,
    e.table,
    e.columns,
    e.where,
    a
  ]);
  const v = e?.name ? t?.[e.name] : void 0;
  oe.useEffect(() => {
    h.current || !c || !v || (h.current = !0, Ao({
      field: e,
      value: v,
      sqlOpsUrls: n,
      setFieldOptions: c
    }));
  }, [v, n, c]);
  let j;
  typeof v == "string" ? e.type === "date" ? j = v.split("T")[0] : e.type === "time" ? j = v.includes("T") ? v.slice(11, 16) : v.slice(0, 5) : j = na(v, T) : j = na(v, T);
  const O = j == null ? "" : typeof j == "string" || typeof j == "number" ? j : JSON.stringify(j), m = vo(v), y = e.type === "richtextarea" && typeof O == "string" ? wo(O) : null;
  return /* @__PURE__ */ i.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ i.jsx("label", { className: u, children: e?.label }),
    /* @__PURE__ */ i.jsx("div", { className: "relative", children: m ? m.type === "drawn" ? /* @__PURE__ */ i.jsx("svg", { viewBox: "0 0 300 150", className: "h-24 w-full border bg-white rounded", children: m.paths.map((E, w) => /* @__PURE__ */ i.jsx(
      "path",
      {
        d: E.d,
        stroke: E.color || "#000",
        strokeWidth: E.width || 2,
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      w
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
        src: m.src,
        alt: "signature",
        className: "h-24 object-contain border bg-white rounded"
      }
    ) : (e.type === "file" || e.type === "attachement" || e.type === "photo" || e.type === "avatar") && j ? /* @__PURE__ */ i.jsx("div", { className: "flex flex-wrap gap-2", children: String(j).split(",").map((E) => E.trim()).filter(Boolean).map((E) => /* @__PURE__ */ i.jsx(
      No,
      {
        sqlOpsUrls: n,
        filePath: E
      },
      E
    )) }) : e.type === "richtextarea" ? /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "ttiptap border border-gray-200 min-h-[400px] max-h-[220px] overflow-auto bg-white rounded p-2 text-sm",
        dangerouslySetInnerHTML: { __html: y ?? "" }
      }
    ) : /* @__PURE__ */ i.jsx("p", { className: f, children: O }) })
  ] });
}
function Oo({ filePath: e, field_name: t, sqlOpsUrls: r }) {
  const [n, a] = be(null);
  return ye(() => {
    if (!open || !r) return;
    let s = !0, o = null;
    return us(e, r).then((c) => {
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
        o.onerror = null, o.src = no;
      }
    }
  ) : null;
}
function Co({
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
    /* @__PURE__ */ i.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ i.jsx("div", { className: "relative w-42 h-42 ", children: e?.fields?.filter((u) => u.type === "avatar").map((u) => {
      const p = t[u.name];
      return typeof p != "string" || p.trim() === "" ? null : /* @__PURE__ */ i.jsx(Oo, { field_name: u.name, filePath: p, sqlOpsUrls: n });
    }) }) }),
    /* @__PURE__ */ i.jsx("div", { className: "lg:col-span-10 min-h-0 max-h-40  overflow-y-auto custom-scrollbar", children: /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-12 gap-2", children: e.fields?.map((u, p) => {
      const g = t?.[u.name];
      return r.includes(u.name) || u.type === "avatar" || !g && g !== !1 && g !== 0 ? null : /* @__PURE__ */ i.jsx("div", { className: `hover:bg-gray-100 transition-colors duration-200 col-span-12 sm:col-span-6 ${Xt[Zt(u.width)] || "lg:col-span-4"}`, children: /* @__PURE__ */ i.jsx(
        Qt,
        {
          field: u,
          data: t ?? {},
          sqlOpsUrls: n,
          methods: f,
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
function pn({ tabObj: e, methods: t, tabName: r, sqlOpsUrls: n, refid: a, module_refid: s, setFieldOptions: o, fieldOptions: c }) {
  const [f, u] = oe.useState(null);
  return oe.useEffect(() => {
    let p = !1;
    return (async () => {
      const h = e?.config;
      if (!h?.type) {
        p || u(null);
        return;
      }
      if (h.type === "method") {
        const T = h.method, v = T ? t[T] : void 0;
        if (v)
          try {
            const j = await Promise.resolve(v());
            p || u(j || null);
          } catch (j) {
            console.error("Method execution failed:", j), p || u(null);
          }
        else
          p || u(null);
      }
      if (h.type === "api")
        try {
          const T = await ae({
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
          p || u(T.data || null);
        } catch (T) {
          console.error("API fetch failed:", T), p || u(null);
        }
      if (h.type === "sql" && a && a != "0" || h?.dbopsid) {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let T = !1, v;
          h?.dbopsid && (T = !0, v = h?.dbopsid);
          const j = await ae({
            method: "GET",
            url: n.baseURL + n.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          });
          if (!T) {
            let y = {
              ...h
            };
            h.where && (y = {
              ...h,
              where: Oe(h.where, {
                refid: a
              })
            }), v = (await ae({
              method: "POST",
              url: n.baseURL + n.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: y,
                fields: Er(h.fields, n.operation),
                forcefill: h.forcefill,
                datahash: j.data.refhash,
                srcid: s
              },
              headers: {
                Authorization: `Bearer ${n?.accessToken}`
              }
            }))?.data.refid;
          }
          const O = await ae({
            method: "POST",
            url: n.baseURL + n.dbopsFetch,
            data: {
              refid: v,
              datahash: j.data.refhash
            },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }), m = cs(O);
          p || u(m);
        } catch (T) {
          console.error("API fetch failed:", T);
        }
      }
    })(), () => {
      p = !0;
    };
  }, [
    e?.config?.type || "",
    e?.config?.method || "",
    e?.config?.url || "",
    JSON.stringify(e?.config?.params || {}),
    JSON.stringify(e?.config?.body || {}),
    JSON.stringify(e?.config?.headers || {})
  ]), /* @__PURE__ */ i.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-12 gap-2", children: f ? Object.keys(f).map((p, g) => {
    let h = { name: p, label: p };
    return /* @__PURE__ */ i.jsx(
      "div",
      {
        className: `col-span-12 sm:col-span-6 ${Xt[Zt(e.width)] || "lg:col-span-2"}`,
        children: /* @__PURE__ */ i.jsx(
          Qt,
          {
            field: h,
            data: f ?? {},
            methods: t,
            refid: a,
            sqlOpsUrls: n,
            setFieldOptions: o,
            ...c[h.name] ? { optionsOverride: c[h.name] } : {}
          },
          p
        )
      },
      `field-${g}`
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
function $o({
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
var Ro = function(t) {
  return Fo(t) && !Io(t);
};
function Fo(e) {
  return !!e && typeof e == "object";
}
function Io(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || Mo(e);
}
var Do = typeof Symbol == "function" && Symbol.for, Po = Do ? Symbol.for("react.element") : 60103;
function Mo(e) {
  return e.$$typeof === Po;
}
function Lo(e) {
  return Array.isArray(e) ? [] : {};
}
function wr(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? Wt(Lo(e), e, t) : e;
}
function ko(e, t, r) {
  return e.concat(t).map(function(n) {
    return wr(n, r);
  });
}
function zo(e, t, r) {
  var n = {};
  return r.isMergeableObject(e) && Object.keys(e).forEach(function(a) {
    n[a] = wr(e[a], r);
  }), Object.keys(t).forEach(function(a) {
    !r.isMergeableObject(t[a]) || !e[a] ? n[a] = wr(t[a], r) : n[a] = Wt(e[a], t[a], r);
  }), n;
}
function Wt(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || ko, r.isMergeableObject = r.isMergeableObject || Ro;
  var n = Array.isArray(t), a = Array.isArray(e), s = n === a;
  return s ? n ? r.arrayMerge(e, t, r) : zo(e, t, r) : wr(t, r);
}
Wt.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(n, a) {
    return Wt(n, a, r);
  }, {});
};
var on = Wt, ds = typeof global == "object" && global && global.Object === Object && global, Uo = typeof self == "object" && self && self.Object === Object && self, Ye = ds || Uo || Function("return this")(), at = Ye.Symbol, fs = Object.prototype, Bo = fs.hasOwnProperty, Vo = fs.toString, Ut = at ? at.toStringTag : void 0;
function Go(e) {
  var t = Bo.call(e, Ut), r = e[Ut];
  try {
    e[Ut] = void 0;
    var n = !0;
  } catch {
  }
  var a = Vo.call(e);
  return n && (t ? e[Ut] = r : delete e[Ut]), a;
}
var Ho = Object.prototype, Wo = Ho.toString;
function Yo(e) {
  return Wo.call(e);
}
var qo = "[object Null]", Ko = "[object Undefined]", ia = at ? at.toStringTag : void 0;
function mt(e) {
  return e == null ? e === void 0 ? Ko : qo : ia && ia in Object(e) ? Go(e) : Yo(e);
}
function hs(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var mn = hs(Object.getPrototypeOf, Object);
function yt(e) {
  return e != null && typeof e == "object";
}
var Xo = "[object Object]", Zo = Function.prototype, Qo = Object.prototype, ps = Zo.toString, Jo = Qo.hasOwnProperty, el = ps.call(Object);
function oa(e) {
  if (!yt(e) || mt(e) != Xo)
    return !1;
  var t = mn(e);
  if (t === null)
    return !0;
  var r = Jo.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && ps.call(r) == el;
}
function tl() {
  this.__data__ = [], this.size = 0;
}
function ms(e, t) {
  return e === t || e !== e && t !== t;
}
function Sr(e, t) {
  for (var r = e.length; r--; )
    if (ms(e[r][0], t))
      return r;
  return -1;
}
var rl = Array.prototype, nl = rl.splice;
function al(e) {
  var t = this.__data__, r = Sr(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : nl.call(t, r, 1), --this.size, !0;
}
function sl(e) {
  var t = this.__data__, r = Sr(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function il(e) {
  return Sr(this.__data__, e) > -1;
}
function ol(e, t) {
  var r = this.__data__, n = Sr(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function et(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
et.prototype.clear = tl;
et.prototype.delete = al;
et.prototype.get = sl;
et.prototype.has = il;
et.prototype.set = ol;
function ll() {
  this.__data__ = new et(), this.size = 0;
}
function cl(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function ul(e) {
  return this.__data__.get(e);
}
function dl(e) {
  return this.__data__.has(e);
}
function Jt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var fl = "[object AsyncFunction]", hl = "[object Function]", pl = "[object GeneratorFunction]", ml = "[object Proxy]";
function ys(e) {
  if (!Jt(e))
    return !1;
  var t = mt(e);
  return t == hl || t == pl || t == fl || t == ml;
}
var Wr = Ye["__core-js_shared__"], la = function() {
  var e = /[^.]+$/.exec(Wr && Wr.keys && Wr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function yl(e) {
  return !!la && la in e;
}
var gl = Function.prototype, bl = gl.toString;
function gt(e) {
  if (e != null) {
    try {
      return bl.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var xl = /[\\^$.*+?()[\]{}|]/g, vl = /^\[object .+?Constructor\]$/, Tl = Function.prototype, El = Object.prototype, wl = Tl.toString, _l = El.hasOwnProperty, Sl = RegExp(
  "^" + wl.call(_l).replace(xl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Al(e) {
  if (!Jt(e) || yl(e))
    return !1;
  var t = ys(e) ? Sl : vl;
  return t.test(gt(e));
}
function jl(e, t) {
  return e?.[t];
}
function bt(e, t) {
  var r = jl(e, t);
  return Al(r) ? r : void 0;
}
var Yt = bt(Ye, "Map"), qt = bt(Object, "create");
function Nl() {
  this.__data__ = qt ? qt(null) : {}, this.size = 0;
}
function Ol(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Cl = "__lodash_hash_undefined__", $l = Object.prototype, Rl = $l.hasOwnProperty;
function Fl(e) {
  var t = this.__data__;
  if (qt) {
    var r = t[e];
    return r === Cl ? void 0 : r;
  }
  return Rl.call(t, e) ? t[e] : void 0;
}
var Il = Object.prototype, Dl = Il.hasOwnProperty;
function Pl(e) {
  var t = this.__data__;
  return qt ? t[e] !== void 0 : Dl.call(t, e);
}
var Ml = "__lodash_hash_undefined__";
function Ll(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = qt && t === void 0 ? Ml : t, this;
}
function ht(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ht.prototype.clear = Nl;
ht.prototype.delete = Ol;
ht.prototype.get = Fl;
ht.prototype.has = Pl;
ht.prototype.set = Ll;
function kl() {
  this.size = 0, this.__data__ = {
    hash: new ht(),
    map: new (Yt || et)(),
    string: new ht()
  };
}
function zl(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ar(e, t) {
  var r = e.__data__;
  return zl(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Ul(e) {
  var t = Ar(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Bl(e) {
  return Ar(this, e).get(e);
}
function Vl(e) {
  return Ar(this, e).has(e);
}
function Gl(e, t) {
  var r = Ar(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function st(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
st.prototype.clear = kl;
st.prototype.delete = Ul;
st.prototype.get = Bl;
st.prototype.has = Vl;
st.prototype.set = Gl;
var Hl = 200;
function Wl(e, t) {
  var r = this.__data__;
  if (r instanceof et) {
    var n = r.__data__;
    if (!Yt || n.length < Hl - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new st(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Ct(e) {
  var t = this.__data__ = new et(e);
  this.size = t.size;
}
Ct.prototype.clear = ll;
Ct.prototype.delete = cl;
Ct.prototype.get = ul;
Ct.prototype.has = dl;
Ct.prototype.set = Wl;
function Yl(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var ca = function() {
  try {
    var e = bt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function gs(e, t, r) {
  t == "__proto__" && ca ? ca(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var ql = Object.prototype, Kl = ql.hasOwnProperty;
function bs(e, t, r) {
  var n = e[t];
  (!(Kl.call(e, t) && ms(n, r)) || r === void 0 && !(t in e)) && gs(e, t, r);
}
function jr(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var s = -1, o = t.length; ++s < o; ) {
    var c = t[s], f = void 0;
    f === void 0 && (f = e[c]), a ? gs(r, c, f) : bs(r, c, f);
  }
  return r;
}
function Xl(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Zl = "[object Arguments]";
function ua(e) {
  return yt(e) && mt(e) == Zl;
}
var xs = Object.prototype, Ql = xs.hasOwnProperty, Jl = xs.propertyIsEnumerable, ec = ua(/* @__PURE__ */ function() {
  return arguments;
}()) ? ua : function(e) {
  return yt(e) && Ql.call(e, "callee") && !Jl.call(e, "callee");
}, er = Array.isArray;
function tc() {
  return !1;
}
var vs = typeof exports == "object" && exports && !exports.nodeType && exports, da = vs && typeof module == "object" && module && !module.nodeType && module, rc = da && da.exports === vs, fa = rc ? Ye.Buffer : void 0, nc = fa ? fa.isBuffer : void 0, Ts = nc || tc, ac = 9007199254740991, sc = /^(?:0|[1-9]\d*)$/;
function ic(e, t) {
  var r = typeof e;
  return t = t ?? ac, !!t && (r == "number" || r != "symbol" && sc.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var oc = 9007199254740991;
function Es(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= oc;
}
var lc = "[object Arguments]", cc = "[object Array]", uc = "[object Boolean]", dc = "[object Date]", fc = "[object Error]", hc = "[object Function]", pc = "[object Map]", mc = "[object Number]", yc = "[object Object]", gc = "[object RegExp]", bc = "[object Set]", xc = "[object String]", vc = "[object WeakMap]", Tc = "[object ArrayBuffer]", Ec = "[object DataView]", wc = "[object Float32Array]", _c = "[object Float64Array]", Sc = "[object Int8Array]", Ac = "[object Int16Array]", jc = "[object Int32Array]", Nc = "[object Uint8Array]", Oc = "[object Uint8ClampedArray]", Cc = "[object Uint16Array]", $c = "[object Uint32Array]", le = {};
le[wc] = le[_c] = le[Sc] = le[Ac] = le[jc] = le[Nc] = le[Oc] = le[Cc] = le[$c] = !0;
le[lc] = le[cc] = le[Tc] = le[uc] = le[Ec] = le[dc] = le[fc] = le[hc] = le[pc] = le[mc] = le[yc] = le[gc] = le[bc] = le[xc] = le[vc] = !1;
function Rc(e) {
  return yt(e) && Es(e.length) && !!le[mt(e)];
}
function yn(e) {
  return function(t) {
    return e(t);
  };
}
var ws = typeof exports == "object" && exports && !exports.nodeType && exports, Gt = ws && typeof module == "object" && module && !module.nodeType && module, Fc = Gt && Gt.exports === ws, Yr = Fc && ds.process, Ot = function() {
  try {
    var e = Gt && Gt.require && Gt.require("util").types;
    return e || Yr && Yr.binding && Yr.binding("util");
  } catch {
  }
}(), ha = Ot && Ot.isTypedArray, Ic = ha ? yn(ha) : Rc, Dc = Object.prototype, Pc = Dc.hasOwnProperty;
function _s(e, t) {
  var r = er(e), n = !r && ec(e), a = !r && !n && Ts(e), s = !r && !n && !a && Ic(e), o = r || n || a || s, c = o ? Xl(e.length, String) : [], f = c.length;
  for (var u in e)
    (t || Pc.call(e, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    ic(u, f))) && c.push(u);
  return c;
}
var Mc = Object.prototype;
function gn(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Mc;
  return e === r;
}
var Lc = hs(Object.keys, Object), kc = Object.prototype, zc = kc.hasOwnProperty;
function Uc(e) {
  if (!gn(e))
    return Lc(e);
  var t = [];
  for (var r in Object(e))
    zc.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function Ss(e) {
  return e != null && Es(e.length) && !ys(e);
}
function bn(e) {
  return Ss(e) ? _s(e) : Uc(e);
}
function Bc(e, t) {
  return e && jr(t, bn(t), e);
}
function Vc(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Gc = Object.prototype, Hc = Gc.hasOwnProperty;
function Wc(e) {
  if (!Jt(e))
    return Vc(e);
  var t = gn(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Hc.call(e, n)) || r.push(n);
  return r;
}
function xn(e) {
  return Ss(e) ? _s(e, !0) : Wc(e);
}
function Yc(e, t) {
  return e && jr(t, xn(t), e);
}
var As = typeof exports == "object" && exports && !exports.nodeType && exports, pa = As && typeof module == "object" && module && !module.nodeType && module, qc = pa && pa.exports === As, ma = qc ? Ye.Buffer : void 0, ya = ma ? ma.allocUnsafe : void 0;
function Kc(e, t) {
  if (t)
    return e.slice();
  var r = e.length, n = ya ? ya(r) : new e.constructor(r);
  return e.copy(n), n;
}
function js(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
function Xc(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, s = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (s[a++] = o);
  }
  return s;
}
function Ns() {
  return [];
}
var Zc = Object.prototype, Qc = Zc.propertyIsEnumerable, ga = Object.getOwnPropertySymbols, vn = ga ? function(e) {
  return e == null ? [] : (e = Object(e), Xc(ga(e), function(t) {
    return Qc.call(e, t);
  }));
} : Ns;
function Jc(e, t) {
  return jr(e, vn(e), t);
}
function Os(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var eu = Object.getOwnPropertySymbols, Cs = eu ? function(e) {
  for (var t = []; e; )
    Os(t, vn(e)), e = mn(e);
  return t;
} : Ns;
function tu(e, t) {
  return jr(e, Cs(e), t);
}
function $s(e, t, r) {
  var n = t(e);
  return er(e) ? n : Os(n, r(e));
}
function ru(e) {
  return $s(e, bn, vn);
}
function nu(e) {
  return $s(e, xn, Cs);
}
var ln = bt(Ye, "DataView"), cn = bt(Ye, "Promise"), un = bt(Ye, "Set"), dn = bt(Ye, "WeakMap"), ba = "[object Map]", au = "[object Object]", xa = "[object Promise]", va = "[object Set]", Ta = "[object WeakMap]", Ea = "[object DataView]", su = gt(ln), iu = gt(Yt), ou = gt(cn), lu = gt(un), cu = gt(dn), Ze = mt;
(ln && Ze(new ln(new ArrayBuffer(1))) != Ea || Yt && Ze(new Yt()) != ba || cn && Ze(cn.resolve()) != xa || un && Ze(new un()) != va || dn && Ze(new dn()) != Ta) && (Ze = function(e) {
  var t = mt(e), r = t == au ? e.constructor : void 0, n = r ? gt(r) : "";
  if (n)
    switch (n) {
      case su:
        return Ea;
      case iu:
        return ba;
      case ou:
        return xa;
      case lu:
        return va;
      case cu:
        return Ta;
    }
  return t;
});
var uu = Object.prototype, du = uu.hasOwnProperty;
function fu(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && du.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var wa = Ye.Uint8Array;
function Tn(e) {
  var t = new e.constructor(e.byteLength);
  return new wa(t).set(new wa(e)), t;
}
function hu(e, t) {
  var r = t ? Tn(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var pu = /\w*$/;
function mu(e) {
  var t = new e.constructor(e.source, pu.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var _a = at ? at.prototype : void 0, Sa = _a ? _a.valueOf : void 0;
function yu(e) {
  return Sa ? Object(Sa.call(e)) : {};
}
function gu(e, t) {
  var r = t ? Tn(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var bu = "[object Boolean]", xu = "[object Date]", vu = "[object Map]", Tu = "[object Number]", Eu = "[object RegExp]", wu = "[object Set]", _u = "[object String]", Su = "[object Symbol]", Au = "[object ArrayBuffer]", ju = "[object DataView]", Nu = "[object Float32Array]", Ou = "[object Float64Array]", Cu = "[object Int8Array]", $u = "[object Int16Array]", Ru = "[object Int32Array]", Fu = "[object Uint8Array]", Iu = "[object Uint8ClampedArray]", Du = "[object Uint16Array]", Pu = "[object Uint32Array]";
function Mu(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case Au:
      return Tn(e);
    case bu:
    case xu:
      return new n(+e);
    case ju:
      return hu(e, r);
    case Nu:
    case Ou:
    case Cu:
    case $u:
    case Ru:
    case Fu:
    case Iu:
    case Du:
    case Pu:
      return gu(e, r);
    case vu:
      return new n();
    case Tu:
    case _u:
      return new n(e);
    case Eu:
      return mu(e);
    case wu:
      return new n();
    case Su:
      return yu(e);
  }
}
var Aa = Object.create, Lu = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!Jt(t))
      return {};
    if (Aa)
      return Aa(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function ku(e) {
  return typeof e.constructor == "function" && !gn(e) ? Lu(mn(e)) : {};
}
var zu = "[object Map]";
function Uu(e) {
  return yt(e) && Ze(e) == zu;
}
var ja = Ot && Ot.isMap, Bu = ja ? yn(ja) : Uu, Vu = "[object Set]";
function Gu(e) {
  return yt(e) && Ze(e) == Vu;
}
var Na = Ot && Ot.isSet, Hu = Na ? yn(Na) : Gu, Wu = 1, Yu = 2, qu = 4, Rs = "[object Arguments]", Ku = "[object Array]", Xu = "[object Boolean]", Zu = "[object Date]", Qu = "[object Error]", Fs = "[object Function]", Ju = "[object GeneratorFunction]", ed = "[object Map]", td = "[object Number]", Is = "[object Object]", rd = "[object RegExp]", nd = "[object Set]", ad = "[object String]", sd = "[object Symbol]", id = "[object WeakMap]", od = "[object ArrayBuffer]", ld = "[object DataView]", cd = "[object Float32Array]", ud = "[object Float64Array]", dd = "[object Int8Array]", fd = "[object Int16Array]", hd = "[object Int32Array]", pd = "[object Uint8Array]", md = "[object Uint8ClampedArray]", yd = "[object Uint16Array]", gd = "[object Uint32Array]", ie = {};
ie[Rs] = ie[Ku] = ie[od] = ie[ld] = ie[Xu] = ie[Zu] = ie[cd] = ie[ud] = ie[dd] = ie[fd] = ie[hd] = ie[ed] = ie[td] = ie[Is] = ie[rd] = ie[nd] = ie[ad] = ie[sd] = ie[pd] = ie[md] = ie[yd] = ie[gd] = !0;
ie[Qu] = ie[Fs] = ie[id] = !1;
function Ht(e, t, r, n, a, s) {
  var o, c = t & Wu, f = t & Yu, u = t & qu;
  if (o !== void 0)
    return o;
  if (!Jt(e))
    return e;
  var p = er(e);
  if (p) {
    if (o = fu(e), !c)
      return js(e, o);
  } else {
    var g = Ze(e), h = g == Fs || g == Ju;
    if (Ts(e))
      return Kc(e, c);
    if (g == Is || g == Rs || h && !a) {
      if (o = f || h ? {} : ku(e), !c)
        return f ? tu(e, Yc(o, e)) : Jc(e, Bc(o, e));
    } else {
      if (!ie[g])
        return a ? e : {};
      o = Mu(e, g, c);
    }
  }
  s || (s = new Ct());
  var T = s.get(e);
  if (T)
    return T;
  s.set(e, o), Hu(e) ? e.forEach(function(O) {
    o.add(Ht(O, t, r, O, e, s));
  }) : Bu(e) && e.forEach(function(O, m) {
    o.set(m, Ht(O, t, r, m, e, s));
  });
  var v = u ? f ? nu : ru : f ? xn : bn, j = p ? void 0 : v(e);
  return Yl(j || e, function(O, m) {
    j && (m = O, O = e[m]), bs(o, m, Ht(O, t, r, m, e, s));
  }), o;
}
var bd = 1, xd = 4;
function ur(e) {
  return Ht(e, bd | xd);
}
var qr, Oa;
function vd() {
  if (Oa) return qr;
  Oa = 1;
  var e = Array.isArray, t = Object.keys, r = Object.prototype.hasOwnProperty, n = typeof Element < "u";
  function a(s, o) {
    if (s === o) return !0;
    if (s && o && typeof s == "object" && typeof o == "object") {
      var c = e(s), f = e(o), u, p, g;
      if (c && f) {
        if (p = s.length, p != o.length) return !1;
        for (u = p; u-- !== 0; )
          if (!a(s[u], o[u])) return !1;
        return !0;
      }
      if (c != f) return !1;
      var h = s instanceof Date, T = o instanceof Date;
      if (h != T) return !1;
      if (h && T) return s.getTime() == o.getTime();
      var v = s instanceof RegExp, j = o instanceof RegExp;
      if (v != j) return !1;
      if (v && j) return s.toString() == o.toString();
      var O = t(s);
      if (p = O.length, p !== t(o).length)
        return !1;
      for (u = p; u-- !== 0; )
        if (!r.call(o, O[u])) return !1;
      if (n && s instanceof Element && o instanceof Element)
        return s === o;
      for (u = p; u-- !== 0; )
        if (g = O[u], !(g === "_owner" && s.$$typeof) && !a(s[g], o[g]))
          return !1;
      return !0;
    }
    return s !== s && o !== o;
  }
  return qr = function(o, c) {
    try {
      return a(o, c);
    } catch (f) {
      if (f.message && f.message.match(/stack|recursion/i) || f.number === -2146828260)
        return console.warn("Warning: react-fast-compare does not handle circular references.", f.name, f.message), !1;
      throw f;
    }
  }, qr;
}
var Td = vd();
const ut = /* @__PURE__ */ Ba(Td);
var Ed = process.env.NODE_ENV === "production";
function Nt(e, t) {
  if (!Ed) {
    var r = "Warning: " + t;
    typeof console < "u" && console.warn(r);
    try {
      throw Error(r);
    } catch {
    }
  }
}
var wd = 4;
function Ca(e) {
  return Ht(e, wd);
}
function Ds(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var _d = "[object Symbol]";
function En(e) {
  return typeof e == "symbol" || yt(e) && mt(e) == _d;
}
var Sd = "Expected a function";
function wn(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Sd);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(a))
      return s.get(a);
    var o = e.apply(this, n);
    return r.cache = s.set(a, o) || s, o;
  };
  return r.cache = new (wn.Cache || st)(), r;
}
wn.Cache = st;
var Ad = 500;
function jd(e) {
  var t = wn(e, function(n) {
    return r.size === Ad && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Nd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Od = /\\(\\)?/g, Cd = jd(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Nd, function(r, n, a, s) {
    t.push(a ? s.replace(Od, "$1") : n || r);
  }), t;
});
function $d(e) {
  if (typeof e == "string" || En(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var $a = at ? at.prototype : void 0, Ra = $a ? $a.toString : void 0;
function Ps(e) {
  if (typeof e == "string")
    return e;
  if (er(e))
    return Ds(e, Ps) + "";
  if (En(e))
    return Ra ? Ra.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Rd(e) {
  return e == null ? "" : Ps(e);
}
function Ms(e) {
  return er(e) ? Ds(e, $d) : En(e) ? [e] : js(Cd(Rd(e)));
}
var dr = { exports: {} }, ee = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fa;
function Fd() {
  if (Fa) return ee;
  Fa = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, j = e ? Symbol.for("react.block") : 60121, O = e ? Symbol.for("react.fundamental") : 60117, m = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function E(l) {
    if (typeof l == "object" && l !== null) {
      var S = l.$$typeof;
      switch (S) {
        case t:
          switch (l = l.type, l) {
            case f:
            case u:
            case n:
            case s:
            case a:
            case g:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case c:
                case p:
                case v:
                case T:
                case o:
                  return l;
                default:
                  return S;
              }
          }
        case r:
          return S;
      }
    }
  }
  function w(l) {
    return E(l) === u;
  }
  return ee.AsyncMode = f, ee.ConcurrentMode = u, ee.ContextConsumer = c, ee.ContextProvider = o, ee.Element = t, ee.ForwardRef = p, ee.Fragment = n, ee.Lazy = v, ee.Memo = T, ee.Portal = r, ee.Profiler = s, ee.StrictMode = a, ee.Suspense = g, ee.isAsyncMode = function(l) {
    return w(l) || E(l) === f;
  }, ee.isConcurrentMode = w, ee.isContextConsumer = function(l) {
    return E(l) === c;
  }, ee.isContextProvider = function(l) {
    return E(l) === o;
  }, ee.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === t;
  }, ee.isForwardRef = function(l) {
    return E(l) === p;
  }, ee.isFragment = function(l) {
    return E(l) === n;
  }, ee.isLazy = function(l) {
    return E(l) === v;
  }, ee.isMemo = function(l) {
    return E(l) === T;
  }, ee.isPortal = function(l) {
    return E(l) === r;
  }, ee.isProfiler = function(l) {
    return E(l) === s;
  }, ee.isStrictMode = function(l) {
    return E(l) === a;
  }, ee.isSuspense = function(l) {
    return E(l) === g;
  }, ee.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === n || l === u || l === s || l === a || l === g || l === h || typeof l == "object" && l !== null && (l.$$typeof === v || l.$$typeof === T || l.$$typeof === o || l.$$typeof === c || l.$$typeof === p || l.$$typeof === O || l.$$typeof === m || l.$$typeof === y || l.$$typeof === j);
  }, ee.typeOf = E, ee;
}
var te = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ia;
function Id() {
  return Ia || (Ia = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, j = e ? Symbol.for("react.block") : 60121, O = e ? Symbol.for("react.fundamental") : 60117, m = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function E(V) {
      return typeof V == "string" || typeof V == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      V === n || V === u || V === s || V === a || V === g || V === h || typeof V == "object" && V !== null && (V.$$typeof === v || V.$$typeof === T || V.$$typeof === o || V.$$typeof === c || V.$$typeof === p || V.$$typeof === O || V.$$typeof === m || V.$$typeof === y || V.$$typeof === j);
    }
    function w(V) {
      if (typeof V == "object" && V !== null) {
        var Ce = V.$$typeof;
        switch (Ce) {
          case t:
            var ke = V.type;
            switch (ke) {
              case f:
              case u:
              case n:
              case s:
              case a:
              case g:
                return ke;
              default:
                var Ie = ke && ke.$$typeof;
                switch (Ie) {
                  case c:
                  case p:
                  case v:
                  case T:
                  case o:
                    return Ie;
                  default:
                    return Ce;
                }
            }
          case r:
            return Ce;
        }
      }
    }
    var l = f, S = u, N = c, z = o, P = t, B = p, I = n, H = v, K = T, Q = r, re = s, W = a, ne = g, A = !1;
    function R(V) {
      return A || (A = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), x(V) || w(V) === f;
    }
    function x(V) {
      return w(V) === u;
    }
    function _(V) {
      return w(V) === c;
    }
    function $(V) {
      return w(V) === o;
    }
    function F(V) {
      return typeof V == "object" && V !== null && V.$$typeof === t;
    }
    function M(V) {
      return w(V) === p;
    }
    function L(V) {
      return w(V) === n;
    }
    function se(V) {
      return w(V) === v;
    }
    function de(V) {
      return w(V) === T;
    }
    function J(V) {
      return w(V) === r;
    }
    function xe(V) {
      return w(V) === s;
    }
    function Se(V) {
      return w(V) === a;
    }
    function Ve(V) {
      return w(V) === g;
    }
    te.AsyncMode = l, te.ConcurrentMode = S, te.ContextConsumer = N, te.ContextProvider = z, te.Element = P, te.ForwardRef = B, te.Fragment = I, te.Lazy = H, te.Memo = K, te.Portal = Q, te.Profiler = re, te.StrictMode = W, te.Suspense = ne, te.isAsyncMode = R, te.isConcurrentMode = x, te.isContextConsumer = _, te.isContextProvider = $, te.isElement = F, te.isForwardRef = M, te.isFragment = L, te.isLazy = se, te.isMemo = de, te.isPortal = J, te.isProfiler = xe, te.isStrictMode = Se, te.isSuspense = Ve, te.isValidElementType = E, te.typeOf = w;
  }()), te;
}
var Da;
function Dd() {
  return Da || (Da = 1, process.env.NODE_ENV === "production" ? dr.exports = Fd() : dr.exports = Id()), dr.exports;
}
var Kr, Pa;
function Pd() {
  if (Pa) return Kr;
  Pa = 1;
  var e = Dd(), t = {
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
  function o(v) {
    return e.isMemo(v) ? a : s[v.$$typeof] || t;
  }
  var c = Object.defineProperty, f = Object.getOwnPropertyNames, u = Object.getOwnPropertySymbols, p = Object.getOwnPropertyDescriptor, g = Object.getPrototypeOf, h = Object.prototype;
  function T(v, j, O) {
    if (typeof j != "string") {
      if (h) {
        var m = g(j);
        m && m !== h && T(v, m, O);
      }
      var y = f(j);
      u && (y = y.concat(u(j)));
      for (var E = o(v), w = o(j), l = 0; l < y.length; ++l) {
        var S = y[l];
        if (!r[S] && !(O && O[S]) && !(w && w[S]) && !(E && E[S])) {
          var N = p(j, S);
          try {
            c(v, S, N);
          } catch {
          }
        }
      }
    }
    return v;
  }
  return Kr = T, Kr;
}
Pd();
function me() {
  return me = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, me.apply(this, arguments);
}
function Ls(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, s;
  for (s = 0; s < n.length; s++)
    a = n[s], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var Nr = /* @__PURE__ */ Ys(void 0);
Nr.displayName = "FormikContext";
Nr.Provider;
Nr.Consumer;
function Md() {
  var e = Xs(Nr);
  return e || (process.env.NODE_ENV !== "production" ? Nt(!1, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.") : Nt()), e;
}
var Pe = function(t) {
  return typeof t == "function";
}, Or = function(t) {
  return t !== null && typeof t == "object";
}, Ld = function(t) {
  return String(Math.floor(Number(t))) === t;
}, Xr = function(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}, Zr = function(t) {
  return Or(t) && Pe(t.then);
};
function kd(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ne(e, t, r, n) {
  n === void 0 && (n = 0);
  for (var a = Ms(t); e && n < a.length; )
    e = e[a[n++]];
  return n !== a.length && !e || e === void 0 ? r : e;
}
function ft(e, t, r) {
  for (var n = Ca(e), a = n, s = 0, o = Ms(t); s < o.length - 1; s++) {
    var c = o[s], f = Ne(e, o.slice(0, s + 1));
    if (f && (Or(f) || Array.isArray(f)))
      a = a[c] = Ca(f);
    else {
      var u = o[s + 1];
      a = a[c] = Ld(u) && Number(u) >= 0 ? [] : {};
    }
  }
  return (s === 0 ? e : a)[o[s]] === r ? e : (r === void 0 ? delete a[o[s]] : a[o[s]] = r, s === 0 && r === void 0 && delete n[o[s]], n);
}
function ks(e, t, r, n) {
  r === void 0 && (r = /* @__PURE__ */ new WeakMap()), n === void 0 && (n = {});
  for (var a = 0, s = Object.keys(e); a < s.length; a++) {
    var o = s[a], c = e[o];
    Or(c) ? r.get(c) || (r.set(c, !0), n[o] = Array.isArray(c) ? [] : {}, ks(c, t, r, n[o])) : n[o] = t;
  }
  return n;
}
function zd(e, t) {
  switch (t.type) {
    case "SET_VALUES":
      return me({}, e, {
        values: t.payload
      });
    case "SET_TOUCHED":
      return me({}, e, {
        touched: t.payload
      });
    case "SET_ERRORS":
      return ut(e.errors, t.payload) ? e : me({}, e, {
        errors: t.payload
      });
    case "SET_STATUS":
      return me({}, e, {
        status: t.payload
      });
    case "SET_ISSUBMITTING":
      return me({}, e, {
        isSubmitting: t.payload
      });
    case "SET_ISVALIDATING":
      return me({}, e, {
        isValidating: t.payload
      });
    case "SET_FIELD_VALUE":
      return me({}, e, {
        values: ft(e.values, t.payload.field, t.payload.value)
      });
    case "SET_FIELD_TOUCHED":
      return me({}, e, {
        touched: ft(e.touched, t.payload.field, t.payload.value)
      });
    case "SET_FIELD_ERROR":
      return me({}, e, {
        errors: ft(e.errors, t.payload.field, t.payload.value)
      });
    case "RESET_FORM":
      return me({}, e, t.payload);
    case "SET_FORMIK_STATE":
      return t.payload(e);
    case "SUBMIT_ATTEMPT":
      return me({}, e, {
        touched: ks(e.values, !0),
        isSubmitting: !0,
        submitCount: e.submitCount + 1
      });
    case "SUBMIT_FAILURE":
      return me({}, e, {
        isSubmitting: !1
      });
    case "SUBMIT_SUCCESS":
      return me({}, e, {
        isSubmitting: !1
      });
    default:
      return e;
  }
}
var ct = {}, fr = {};
function Ud(e) {
  var t = e.validateOnChange, r = t === void 0 ? !0 : t, n = e.validateOnBlur, a = n === void 0 ? !0 : n, s = e.validateOnMount, o = s === void 0 ? !1 : s, c = e.isInitialValid, f = e.enableReinitialize, u = f === void 0 ? !1 : f, p = e.onSubmit, g = Ls(e, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]), h = me({
    validateOnChange: r,
    validateOnBlur: a,
    validateOnMount: o,
    onSubmit: p
  }, g), T = Me(h.initialValues), v = Me(h.initialErrors || ct), j = Me(h.initialTouched || fr), O = Me(h.initialStatus), m = Me(!1), y = Me({});
  process.env.NODE_ENV !== "production" && ye(function() {
    typeof c > "u" || (process.env.NODE_ENV !== "production" ? Nt(!1, "isInitialValid has been deprecated and will be removed in future versions of Formik. Please use initialErrors or validateOnMount instead.") : Nt());
  }, []), ye(function() {
    return m.current = !0, function() {
      m.current = !1;
    };
  }, []);
  var E = be(0), w = E[1], l = Me({
    values: ur(h.initialValues),
    errors: ur(h.initialErrors) || ct,
    touched: ur(h.initialTouched) || fr,
    status: ur(h.initialStatus),
    isSubmitting: !1,
    isValidating: !1,
    submitCount: 0
  }), S = l.current, N = he(function(b) {
    var D = l.current;
    l.current = zd(D, b), D !== l.current && w(function(k) {
      return k + 1;
    });
  }, []), z = he(function(b, D) {
    return new Promise(function(k, G) {
      var q = h.validate(b, D);
      q == null ? k(ct) : Zr(q) ? q.then(function(X) {
        k(X || ct);
      }, function(X) {
        process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validate />", X), G(X);
      }) : k(q);
    });
  }, [h.validate]), P = he(function(b, D) {
    var k = h.validationSchema, G = Pe(k) ? k(D) : k, q = D && G.validateAt ? G.validateAt(D, b) : Vd(b, G);
    return new Promise(function(X, ue) {
      q.then(function() {
        X(ct);
      }, function($e) {
        $e.name === "ValidationError" ? X(Bd($e)) : (process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validationSchema />", $e), ue($e));
      });
    });
  }, [h.validationSchema]), B = he(function(b, D) {
    return new Promise(function(k) {
      return k(y.current[b].validate(D));
    });
  }, []), I = he(function(b) {
    var D = Object.keys(y.current).filter(function(G) {
      return Pe(y.current[G].validate);
    }), k = D.length > 0 ? D.map(function(G) {
      return B(G, Ne(b, G));
    }) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
    return Promise.all(k).then(function(G) {
      return G.reduce(function(q, X, ue) {
        return X === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || X && (q = ft(q, D[ue], X)), q;
      }, {});
    });
  }, [B]), H = he(function(b) {
    return Promise.all([I(b), h.validationSchema ? P(b) : {}, h.validate ? z(b) : {}]).then(function(D) {
      var k = D[0], G = D[1], q = D[2], X = on.all([k, G, q], {
        arrayMerge: Gd
      });
      return X;
    });
  }, [h.validate, h.validationSchema, I, z, P]), K = De(function(b) {
    return b === void 0 && (b = S.values), N({
      type: "SET_ISVALIDATING",
      payload: !0
    }), H(b).then(function(D) {
      return m.current && (N({
        type: "SET_ISVALIDATING",
        payload: !1
      }), N({
        type: "SET_ERRORS",
        payload: D
      })), D;
    });
  });
  ye(function() {
    o && m.current === !0 && ut(T.current, h.initialValues) && K(T.current);
  }, [o, K]);
  var Q = he(function(b) {
    var D = b && b.values ? b.values : T.current, k = b && b.errors ? b.errors : v.current ? v.current : h.initialErrors || {}, G = b && b.touched ? b.touched : j.current ? j.current : h.initialTouched || {}, q = b && b.status ? b.status : O.current ? O.current : h.initialStatus;
    T.current = D, v.current = k, j.current = G, O.current = q;
    var X = function() {
      N({
        type: "RESET_FORM",
        payload: {
          isSubmitting: !!b && !!b.isSubmitting,
          errors: k,
          touched: G,
          status: q,
          values: D,
          isValidating: !!b && !!b.isValidating,
          submitCount: b && b.submitCount && typeof b.submitCount == "number" ? b.submitCount : 0
        }
      });
    };
    if (h.onReset) {
      var ue = h.onReset(S.values, Ce);
      Zr(ue) ? ue.then(X) : X();
    } else
      X();
  }, [h.initialErrors, h.initialStatus, h.initialTouched, h.onReset]);
  ye(function() {
    m.current === !0 && !ut(T.current, h.initialValues) && u && (T.current = h.initialValues, Q(), o && K(T.current));
  }, [u, h.initialValues, Q, o, K]), ye(function() {
    u && m.current === !0 && !ut(v.current, h.initialErrors) && (v.current = h.initialErrors || ct, N({
      type: "SET_ERRORS",
      payload: h.initialErrors || ct
    }));
  }, [u, h.initialErrors]), ye(function() {
    u && m.current === !0 && !ut(j.current, h.initialTouched) && (j.current = h.initialTouched || fr, N({
      type: "SET_TOUCHED",
      payload: h.initialTouched || fr
    }));
  }, [u, h.initialTouched]), ye(function() {
    u && m.current === !0 && !ut(O.current, h.initialStatus) && (O.current = h.initialStatus, N({
      type: "SET_STATUS",
      payload: h.initialStatus
    }));
  }, [u, h.initialStatus, h.initialTouched]);
  var re = De(function(b) {
    if (y.current[b] && Pe(y.current[b].validate)) {
      var D = Ne(S.values, b), k = y.current[b].validate(D);
      return Zr(k) ? (N({
        type: "SET_ISVALIDATING",
        payload: !0
      }), k.then(function(G) {
        return G;
      }).then(function(G) {
        N({
          type: "SET_FIELD_ERROR",
          payload: {
            field: b,
            value: G
          }
        }), N({
          type: "SET_ISVALIDATING",
          payload: !1
        });
      })) : (N({
        type: "SET_FIELD_ERROR",
        payload: {
          field: b,
          value: k
        }
      }), Promise.resolve(k));
    } else if (h.validationSchema)
      return N({
        type: "SET_ISVALIDATING",
        payload: !0
      }), P(S.values, b).then(function(G) {
        return G;
      }).then(function(G) {
        N({
          type: "SET_FIELD_ERROR",
          payload: {
            field: b,
            value: Ne(G, b)
          }
        }), N({
          type: "SET_ISVALIDATING",
          payload: !1
        });
      });
    return Promise.resolve();
  }), W = he(function(b, D) {
    var k = D.validate;
    y.current[b] = {
      validate: k
    };
  }, []), ne = he(function(b) {
    delete y.current[b];
  }, []), A = De(function(b, D) {
    N({
      type: "SET_TOUCHED",
      payload: b
    });
    var k = D === void 0 ? a : D;
    return k ? K(S.values) : Promise.resolve();
  }), R = he(function(b) {
    N({
      type: "SET_ERRORS",
      payload: b
    });
  }, []), x = De(function(b, D) {
    var k = Pe(b) ? b(S.values) : b;
    N({
      type: "SET_VALUES",
      payload: k
    });
    var G = D === void 0 ? r : D;
    return G ? K(k) : Promise.resolve();
  }), _ = he(function(b, D) {
    N({
      type: "SET_FIELD_ERROR",
      payload: {
        field: b,
        value: D
      }
    });
  }, []), $ = De(function(b, D, k) {
    var G = Pe(D) ? D(Ne(S.values, b)) : D;
    N({
      type: "SET_FIELD_VALUE",
      payload: {
        field: b,
        value: G
      }
    });
    var q = k === void 0 ? r : k;
    return q ? K(ft(S.values, b, G)) : Promise.resolve();
  }), F = he(function(b, D) {
    var k = D, G = b, q;
    if (!Xr(b)) {
      b.persist && b.persist();
      var X = b.target ? b.target : b.currentTarget, ue = X.type, $e = X.name, vt = X.id, it = X.value, rr = X.checked, Tt = X.outerHTML, ot = X.options, ze = X.multiple;
      k = D || $e || vt, !k && process.env.NODE_ENV !== "production" && Ma({
        htmlContent: Tt,
        documentationAnchorLink: "handlechange-e-reactchangeeventany--void",
        handlerName: "handleChange"
      }), G = /number|range/.test(ue) ? (q = parseFloat(it), isNaN(q) ? "" : q) : /checkbox/.test(ue) ? Wd(Ne(S.values, k), rr, it) : ot && ze ? Hd(ot) : it;
    }
    k && $(k, G);
  }, [$, S.values]), M = De(function(b) {
    if (Xr(b))
      return function(D) {
        return F(D, b);
      };
    F(b);
  }), L = De(function(b, D, k) {
    D === void 0 && (D = !0), N({
      type: "SET_FIELD_TOUCHED",
      payload: {
        field: b,
        value: D
      }
    });
    var G = k === void 0 ? a : k;
    return G ? K(S.values) : Promise.resolve();
  }), se = he(function(b, D) {
    b.persist && b.persist();
    var k = b.target, G = k.name, q = k.id, X = k.outerHTML, ue = D || G || q;
    !ue && process.env.NODE_ENV !== "production" && Ma({
      htmlContent: X,
      documentationAnchorLink: "handleblur-e-any--void",
      handlerName: "handleBlur"
    }), L(ue, !0);
  }, [L]), de = De(function(b) {
    if (Xr(b))
      return function(D) {
        return se(D, b);
      };
    se(b);
  }), J = he(function(b) {
    Pe(b) ? N({
      type: "SET_FORMIK_STATE",
      payload: b
    }) : N({
      type: "SET_FORMIK_STATE",
      payload: function() {
        return b;
      }
    });
  }, []), xe = he(function(b) {
    N({
      type: "SET_STATUS",
      payload: b
    });
  }, []), Se = he(function(b) {
    N({
      type: "SET_ISSUBMITTING",
      payload: b
    });
  }, []), Ve = De(function() {
    return N({
      type: "SUBMIT_ATTEMPT"
    }), K().then(function(b) {
      var D = b instanceof Error, k = !D && Object.keys(b).length === 0;
      if (k) {
        var G;
        try {
          if (G = ke(), G === void 0)
            return;
        } catch (q) {
          throw q;
        }
        return Promise.resolve(G).then(function(q) {
          return m.current && N({
            type: "SUBMIT_SUCCESS"
          }), q;
        }).catch(function(q) {
          if (m.current)
            throw N({
              type: "SUBMIT_FAILURE"
            }), q;
        });
      } else if (m.current && (N({
        type: "SUBMIT_FAILURE"
      }), D))
        throw b;
    });
  }), V = De(function(b) {
    if (b && b.preventDefault && Pe(b.preventDefault) && b.preventDefault(), b && b.stopPropagation && Pe(b.stopPropagation) && b.stopPropagation(), process.env.NODE_ENV !== "production" && typeof document < "u") {
      var D = kd();
      D !== null && D instanceof HTMLButtonElement && (D.attributes && D.attributes.getNamedItem("type") || (process.env.NODE_ENV !== "production" ? Nt(!1, 'You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type="submit"`. If this is not a submit button, please add `type="button"`.') : Nt()));
    }
    Ve().catch(function(k) {
      console.warn("Warning: An unhandled error was caught from submitForm()", k);
    });
  }), Ce = {
    resetForm: Q,
    validateForm: K,
    validateField: re,
    setErrors: R,
    setFieldError: _,
    setFieldTouched: L,
    setFieldValue: $,
    setStatus: xe,
    setSubmitting: Se,
    setTouched: A,
    setValues: x,
    setFormikState: J,
    submitForm: Ve
  }, ke = De(function() {
    return p(S.values, Ce);
  }), Ie = De(function(b) {
    b && b.preventDefault && Pe(b.preventDefault) && b.preventDefault(), b && b.stopPropagation && Pe(b.stopPropagation) && b.stopPropagation(), Q();
  }), $t = he(function(b) {
    return {
      value: Ne(S.values, b),
      error: Ne(S.errors, b),
      touched: !!Ne(S.touched, b),
      initialValue: Ne(T.current, b),
      initialTouched: !!Ne(j.current, b),
      initialError: Ne(v.current, b)
    };
  }, [S.errors, S.touched, S.values]), Rt = he(function(b) {
    return {
      setValue: function(k, G) {
        return $(b, k, G);
      },
      setTouched: function(k, G) {
        return L(b, k, G);
      },
      setError: function(k) {
        return _(b, k);
      }
    };
  }, [$, L, _]), tt = he(function(b) {
    var D = Or(b), k = D ? b.name : b, G = Ne(S.values, k), q = {
      name: k,
      value: G,
      onChange: M,
      onBlur: de
    };
    if (D) {
      var X = b.type, ue = b.value, $e = b.as, vt = b.multiple;
      X === "checkbox" ? ue === void 0 ? q.checked = !!G : (q.checked = !!(Array.isArray(G) && ~G.indexOf(ue)), q.value = ue) : X === "radio" ? (q.checked = G === ue, q.value = ue) : $e === "select" && vt && (q.value = q.value || [], q.multiple = !0);
    }
    return q;
  }, [de, M, S.values]), rt = xr(function() {
    return !ut(T.current, S.values);
  }, [T.current, S.values]), xt = xr(function() {
    return typeof c < "u" ? rt ? S.errors && Object.keys(S.errors).length === 0 : c !== !1 && Pe(c) ? c(h) : c : S.errors && Object.keys(S.errors).length === 0;
  }, [c, rt, S.errors, h]), tr = me({}, S, {
    initialValues: T.current,
    initialErrors: v.current,
    initialTouched: j.current,
    initialStatus: O.current,
    handleBlur: de,
    handleChange: M,
    handleReset: Ie,
    handleSubmit: V,
    resetForm: Q,
    setErrors: R,
    setFormikState: J,
    setFieldTouched: L,
    setFieldValue: $,
    setFieldError: _,
    setStatus: xe,
    setSubmitting: Se,
    setTouched: A,
    setValues: x,
    submitForm: Ve,
    validateForm: K,
    validateField: re,
    isValid: xt,
    dirty: rt,
    unregisterField: ne,
    registerField: W,
    getFieldProps: tt,
    getFieldMeta: $t,
    getFieldHelpers: Rt,
    validateOnBlur: a,
    validateOnChange: r,
    validateOnMount: o
  });
  return tr;
}
function Ma(e) {
  var t = e.htmlContent, r = e.documentationAnchorLink, n = e.handlerName;
  console.warn("Warning: Formik called `" + n + "`, but you forgot to pass an `id` or `name` attribute to your input:\n    " + t + `
    Formik cannot determine which value to update. For more info see https://formik.org/docs/api/formik#` + r + `
  `);
}
function Bd(e) {
  var t = {};
  if (e.inner) {
    if (e.inner.length === 0)
      return ft(t, e.path, e.message);
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
      Ne(t, o.path) || (t = ft(t, o.path, o.message));
    }
  }
  return t;
}
function Vd(e, t, r, n) {
  r === void 0 && (r = !1);
  var a = fn(e);
  return t[r ? "validateSync" : "validate"](a, {
    abortEarly: !1,
    context: a
  });
}
function fn(e) {
  var t = Array.isArray(e) ? [] : {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      var n = String(r);
      Array.isArray(e[n]) === !0 ? t[n] = e[n].map(function(a) {
        return Array.isArray(a) === !0 || oa(a) ? fn(a) : a !== "" ? a : void 0;
      }) : oa(e[n]) ? t[n] = fn(e[n]) : t[n] = e[n] !== "" ? e[n] : void 0;
    }
  return t;
}
function Gd(e, t, r) {
  var n = e.slice();
  return t.forEach(function(s, o) {
    if (typeof n[o] > "u") {
      var c = r.clone !== !1, f = c && r.isMergeableObject(s);
      n[o] = f ? on(Array.isArray(s) ? [] : {}, s, r) : s;
    } else r.isMergeableObject(s) ? n[o] = on(e[o], s, r) : e.indexOf(s) === -1 && n.push(s);
  }), n;
}
function Hd(e) {
  return Array.from(e).filter(function(t) {
    return t.selected;
  }).map(function(t) {
    return t.value;
  });
}
function Wd(e, t, r) {
  if (typeof e == "boolean")
    return !!t;
  var n = [], a = !1, s = -1;
  if (Array.isArray(e))
    n = e, s = e.indexOf(r), a = s >= 0;
  else if (!r || r == "true" || r == "false")
    return !!t;
  return t && r && !a ? n.concat(r) : a ? n.slice(0, s).concat(n.slice(s + 1)) : n;
}
var Yd = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Ua : ye;
function De(e) {
  var t = Me(e);
  return Yd(function() {
    t.current = e;
  }), he(function() {
    for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return t.current.apply(void 0, n);
  }, []);
}
var qd = /* @__PURE__ */ qs(function(e, t) {
  var r = e.action, n = Ls(e, ["action"]), a = r ?? "#", s = Md(), o = s.handleReset, c = s.handleSubmit;
  return Ks("form", me({
    onSubmit: c,
    ref: t,
    onReset: o,
    action: a
  }, n));
});
qd.displayName = "Form";
function hr({
  anchorRef: e,
  open: t,
  children: r,
  offset: n = 4
}) {
  const [a, s] = be({});
  return Ua(() => {
    if (!t || !e.current) return;
    const o = e.current.getBoundingClientRect();
    s({
      position: "fixed",
      top: o.bottom + n,
      left: o.left,
      width: "200px",
      zIndex: 1e3
    });
  }, [t, e, n]), t ? Zs(
    /* @__PURE__ */ i.jsx("div", { style: a, children: r }),
    document.body
  ) : null;
}
function Kd({
  field: e,
  formik: t,
  methods: r = {},
  sqlOpsUrls: n,
  refid: a,
  optionsOverride: s,
  setFieldOptions: o,
  module_refid: c
}) {
  const [f, u] = be(!1), [p, g] = be(
    s ?? e.options ?? {}
  ), [h, T] = be(""), [v, j] = be(0), O = Me(null), [m, y] = be(!1), E = oe.useRef(h), w = Me(null);
  oe.useEffect(() => {
    E.current = h;
  }, [h]), ye(() => {
    s && Object.keys(s).length !== 0 && g(s);
  }, [s]), ye(() => {
    if (!m) return;
    const W = (ne) => {
      const A = ne.target;
      w.current?.contains(A) || O.current?.contains(A) || (y(!1), T(""));
    };
    return document.addEventListener("mousedown", W), () => {
      document.removeEventListener("mousedown", W);
    };
  }, [m]);
  const l = e.name;
  oe.useEffect(() => {
    let W = !0;
    return (async () => {
      let A = e.valueKey ?? "value", R = e.labelKey ?? "title";
      if (e?.options) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const M = Object.values(e.options);
          if (M.length && typeof M[0] == "string") {
            g(e.options);
            return;
          }
        }
        const $ = (Array.isArray(e.options) ? e.options : [e.options]).map(Re), F = Be(
          A,
          R,
          $,
          e.groupKey
          // auto-uses `category` if present
        );
        g(F);
        return;
      }
      const x = e?.source ?? {};
      if (e.type === "dataMethod") {
        const _ = e.method, $ = _ ? r[_] : void 0;
        if ($)
          try {
            const F = await Promise.resolve($()), M = Array.isArray(F?.data?.data) ? F.data.data : Array.isArray(F?.data) ? F.data : F, L = Array.isArray(M) ? M.map(Re) : [], se = Be(A, R, L, e.groupKey);
            W && g(se);
          } catch (F) {
            console.error("Method execution failed:", F), W && g({});
          }
        else
          W && g({});
      }
      if (x.type === "api" && x.url)
        try {
          const _ = await ae({
            method: x.method || "GET",
            url: x.url,
            data: x.body ?? {},
            params: x.params ?? {},
            headers: x.headers ?? {}
          }), $ = Array.isArray(_?.data?.data) ? _.data.data : Array.isArray(_?.data) ? _.data : _, F = Array.isArray($) ? $.map(Re) : [], M = Be(A, R, F, e.groupKey);
          W && g(M);
        } catch (_) {
          console.error("API execution failed:", _), W && g({});
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
              where: e.where ? a ? Oe(e.where, { refid: a }) : e.where : void 0
            };
          }
          const $ = await jt(n, _, e?.queryid, void 0, c), F = Array.isArray($?.data?.data) ? $.data.data : Array.isArray($?.data) ? $.data : $, M = Array.isArray(F) ? F.map(Re) : [], L = Be(A, R, M, e.groupKey);
          W && g(L);
        } catch (_) {
          console.error("API fetch failed:", _);
        }
      }
    })(), () => {
      W = !1;
    };
  }, [
    e.options,
    e.source,
    e.table,
    e.columns,
    e.where,
    a
  ]);
  const S = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, N = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, z = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, P = (W) => W.icon ? /* @__PURE__ */ i.jsx("i", { className: W.icon }) : null, B = xr(
    () => bo(p),
    [p]
  ), I = B.length, H = xr(() => e.search || !h ? B : B.filter(
    ([, W]) => W.toLowerCase().includes(h.toLowerCase())
  ), [e.search, h, B]), K = (W, ne) => {
    if (m === !0)
      if (W.key === "ArrowDown")
        W.preventDefault(), j(
          (A) => A + 1 < H.length ? A + 1 : 0
        );
      else if (W.key === "ArrowUp")
        W.preventDefault(), j(
          (A) => A - 1 >= 0 ? A - 1 : H.length - 1
        );
      else if (W.key === "Enter") {
        W.preventDefault();
        const [A] = H[v] || [];
        A && t.setFieldValue(e.name, ne ? A : [...t.values[e.name], A]);
      } else W.key === "Escape" && (T(""), y(!1));
  };
  ye(() => {
    O.current?.querySelector(
      `[data-index="${v}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [v]), ye(() => {
    v >= H.length && j(0);
  }, [H, v]), ye(() => {
    const W = e.autocomplete, ne = e.ajaxchain;
    if (!W && !ne) return;
    const A = t.values[e.name];
    if (!A) return;
    const R = Array.isArray(ne) ? ne : ne ? [ne] : [];
    (async () => {
      try {
        if (yo(W)) {
          const _ = W.src;
          if (!_ || !n) return;
          const $ = Oe(_.where ?? {}, {
            refid: A
          }), F = {
            ..._,
            table: _.table,
            cols: _.columns,
            where: $
          }, { data: M } = await jt(n, F, e?.queryid, void 0, c), L = Array.isArray(M?.data) ? M.data[0] : M?.data;
          L && W.target.split(",").map((se) => se.trim()).forEach((se) => {
            L[se] !== void 0 && t.setFieldValue(se, L[se]);
          });
        }
        for (const _ of R) {
          const $ = _.src;
          if (!_ || typeof _ != "object" || !$ || typeof $ != "object" || !n) continue;
          let F;
          if (!$.queryid) {
            if (!$.table || !$.columns)
              throw new Error("SQL query requires field.table");
            const Se = Oe($?.where ?? {}, {
              refid: A
            });
            F = {
              ...$,
              table: $.table,
              cols: $.columns,
              where: Se
            };
          }
          const { data: M } = await jt(n, F, e?.queryid, A, c);
          let L = e.valueKey ?? "value", se = e.labelKey ?? "title";
          const de = Array.isArray(M?.data?.data) ? M.data.data : Array.isArray(M?.data) ? M.data : M, J = Array.isArray(de) ? de.map(Re) : [], xe = Be(
            L,
            se,
            J,
            e.groupKey
          );
          o?.(_.target, xe);
        }
      } catch (_) {
        console.error("Autocomplete / AjaxChain fetch failed", _);
      }
    })();
  }, [t.values[e.name]]), oe.useEffect(() => {
    if (!e.search || !h.trim() || !e.table || !n) return;
    const W = go(e.columns ?? ""), ne = new AbortController(), A = setTimeout(async () => {
      try {
        let R;
        if (!e.queryid) {
          if (!e.table || !e.cols)
            throw new Error("SQL query requires field.table");
          const de = a ? Oe(e.where ?? {}, {
            refid: a
          }) : e.where;
          R = {
            ...e,
            table: e.table,
            cols: e.columns || e.cols,
            where: de
          };
        }
        let x = {};
        Array.isArray(W) && W.forEach((de) => {
          x[de] = [h, "LIKE"];
        });
        const { data: _ } = await jt(n, R, e?.queryid, void 0, c, x);
        let $ = e.valueKey ?? "value", F = e.labelKey ?? "title";
        const M = Array.isArray(_?.data?.data) ? _.data.data : Array.isArray(_?.data) ? _.data : _, L = Array.isArray(M) ? M.map(Re) : [], se = Be(
          $,
          F,
          L,
          e.groupKey
        );
        g(se);
      } catch (R) {
        if (ae.isCancel(R)) return;
        console.error("Search fetch failed", R);
      }
    }, 500);
    return () => {
      clearTimeout(A), ne.abort();
    };
  }, [h, a]);
  const Q = async (W) => {
    if (W.length === 0) {
      console.error("No file");
      return;
    }
    if (!n) return;
    const ne = n?.baseURL + n?.uploadURL;
    if (!ne) {
      console.error("No Upload URL ");
      return;
    }
    const A = e.multiple === !0;
    try {
      const R = await Promise.all(
        Array.from(W).map(async (x) => {
          const _ = new FormData();
          return _.append("file", x), (await ae({
            method: "POST",
            url: ne,
            data: _,
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${n?.accessToken}`
            }
          })).data;
        })
      );
      t.setFieldValue(
        l,
        A ? R.map((x) => x.path) : R[0]?.path
      );
    } catch (R) {
      console.error("File upload failed", R), t.setFieldError(l, "File upload failed");
    }
  }, re = async (W, ne, A) => {
    const R = ne[W];
    if (!R) return;
    const x = r?.[R];
    if (typeof x != "function") {
      console.error(`Method "${String(R)}" not found`);
      return;
    }
    try {
      await Promise.resolve(x(A));
    } catch (_) {
      console.error(`Method "${String(R)}" failed`, _);
    }
  };
  switch (e.type) {
    case "autocomplete": {
      const A = t.values[l] ?? "", R = h !== "" ? h : aa(p, A) ?? String(A ?? ""), x = ($) => {
        const F = $.target.value;
        T(F), j(0), F.trim() ? y(!0) : (y(!1), t.setFieldValue(l, ""));
      }, _ = ($) => {
        t.setFieldValue(l, $), T(""), y(!1), re("onChange", e, `${l}-${$}`);
      };
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: z, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsx("div", { ref: w, children: /* @__PURE__ */ i.jsx(
          "input",
          {
            className: `${S} ${N}`,
            value: R,
            placeholder: e.placeholder || "Type to search...",
            onChange: x,
            onFocus: () => {
              const $ = String(t.values[l] ?? "");
              T($);
            },
            onBlur: () => {
              setTimeout(() => y(!1), 150);
            },
            onKeyDown: ($) => {
              if ($.key === "Enter") {
                if ($.preventDefault(), H[v]) {
                  const [F] = H[v];
                  t.setFieldValue(l, F);
                } else h.trim() && t.setFieldValue(l, h.trim());
                y(!1);
                return;
              }
              K($, !0);
            },
            disabled: e.disabled
          }
        ) }),
        /* @__PURE__ */ i.jsx(hr, { anchorRef: w, open: m, children: /* @__PURE__ */ i.jsx(
          "div",
          {
            ref: O,
            className: "bg-white border rounded shadow max-h-52 overflow-y-auto",
            children: H.length > 0 ? H.map(([$, F], M) => /* @__PURE__ */ i.jsx(
              "div",
              {
                id: `${l}-${$}`,
                "data-index": M,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${v === M ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => _($),
                children: F
              },
              $
            )) : /* @__PURE__ */ i.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `No matches press enter to add "${R}" ` })
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
        const A = t.values[l] ?? [];
        return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsxs("label", { className: z, children: [
            e.label,
            e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ i.jsxs(
            "div",
            {
              ref: w,
              tabIndex: 0,
              className: "cursor-pointer select-none border border-gray-300 rounded-lg px-4 py-2.5 bg-white flex justify-between items-center",
              onClick: () => {
                y((R) => !R), j(0);
              },
              onKeyDown: (R) => K(R, !1),
              onBlur: () => {
                e.multiple || setTimeout(() => {
                  y(!1), T("");
                }, 150);
              },
              children: [
                /* @__PURE__ */ i.jsx("span", { className: "text-sm text-gray-700 truncate", children: A.length > 0 ? A.join(", ") : `Select ${e.label}` }),
                /* @__PURE__ */ i.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
              ]
            }
          ),
          /* @__PURE__ */ i.jsx(hr, { anchorRef: w, open: m, children: /* @__PURE__ */ i.jsxs(
            "div",
            {
              ref: O,
              className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
              children: [
                e.search && /* @__PURE__ */ i.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "text",
                    value: h,
                    onChange: (R) => {
                      T(R.target.value), j(0);
                    },
                    placeholder: "Search...",
                    className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                  }
                ) }),
                H.length > 0 ? H.map(([R, x], _) => /* @__PURE__ */ i.jsxs(
                  "label",
                  {
                    "data-index": _,
                    className: `flex items-center gap-x-2 px-2 py-1 rounded cursor-pointer text-sm
                    ${A.includes(R) ? "bg-indigo-50 text-indigo-600 font-medium" : v === _ ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: [
                      /* @__PURE__ */ i.jsx(
                        "input",
                        {
                          id: `${l}-${R}`,
                          type: "checkbox",
                          checked: A.includes(R),
                          onChange: ($) => {
                            const F = $.target.checked ? [...A, R] : A.filter((M) => M !== R);
                            t.setFieldValue(l, F), re("onChange", e, `${l}-${R}`);
                          },
                          className: "h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        }
                      ),
                      x
                    ]
                  },
                  R
                )) : /* @__PURE__ */ i.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ]
            }
          ) }),
          t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[l]) })
        ] });
      }
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: z, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs(
          "div",
          {
            ref: w,
            tabIndex: 0,
            className: "cursor-pointer select-none border border-gray-300 rounded-lg px-4 py-2.5 bg-white flex justify-between items-center",
            onClick: () => {
              y((A) => !A), j(0);
            },
            onKeyDown: (A) => K(A, !0),
            onBlur: () => {
              setTimeout(() => {
                y(!1), T("");
              }, 150);
            },
            children: [
              /* @__PURE__ */ i.jsx("span", { className: "text-sm text-gray-700 truncate", children: t.values[l] ? aa(p, t.values[l]) ?? "Select option" : `Select ${e.label}` }),
              /* @__PURE__ */ i.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
            ]
          }
        ),
        /* @__PURE__ */ i.jsx(hr, { anchorRef: w, open: m, children: /* @__PURE__ */ i.jsxs(
          "div",
          {
            ref: O,
            className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
            children: [
              e.search && /* @__PURE__ */ i.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "text",
                  value: h,
                  onChange: (A) => {
                    T(A.target.value), j(0);
                  },
                  onKeyDown: (A) => K(A, !0),
                  placeholder: "Search...",
                  className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                }
              ) }),
              H.length > 0 && /* @__PURE__ */ i.jsx(
                "div",
                {
                  onMouseDown: (A) => {
                    A.preventDefault(), t.setFieldValue(l, ""), y(!1), T("");
                  },
                  className: "px-2 py-1 text-sm cursor-pointer hover:bg-gray-50",
                  children: "Clear selection"
                }
              ),
              H.length > 0 ? H.map(([A, R], x) => /* @__PURE__ */ i.jsx(
                "div",
                {
                  id: `${l}-${A}`,
                  "data-index": x,
                  onMouseDown: () => {
                    t.setFieldValue(l, A), y(!1), T(""), j(0), re("onChange", e, `${l}-${A}`);
                  },
                  className: `px-2 py-1 rounded cursor-pointer text-sm
                  ${t.values[l] === A ? "bg-indigo-50 text-indigo-600 font-medium" : v === x ? "bg-gray-100" : "hover:bg-gray-50"}`,
                  children: R
                },
                A
              )) : /* @__PURE__ */ i.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
            ]
          }
        ) }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[l]) })
      ] });
    }
    case "textarea":
      return /* @__PURE__ */ i.jsx(i.Fragment, { children: /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: z, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsx(
            "textarea",
            {
              id: l,
              className: `${S} ${N} min-h-[120px] resize-none`,
              onFocus: () => u(!0),
              name: l,
              value: t.values[l],
              onBlur: t.handleBlur,
              onChange: (A) => {
                t.setFieldValue(
                  l,
                  A.target.value
                ), re("onChange", e, `${l}`);
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
        const A = t.values[l] ?? [];
        return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsxs("label", { className: z, children: [
            e.label,
            e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ i.jsxs(
            "div",
            {
              ref: w,
              tabIndex: 0,
              className: "cursor-pointer select-none border border-gray-300 rounded-lg px-4 py-2.5 bg-white flex justify-between items-center",
              onClick: () => {
                y((R) => !R), j(0);
              },
              onKeyDown: (R) => K(R, !1),
              onBlur: () => {
                e.multiple || setTimeout(() => {
                  y(!1), T("");
                }, 150);
              },
              children: [
                /* @__PURE__ */ i.jsx("span", { className: "text-sm text-gray-700 truncate", children: A.length > 0 ? A.join(", ") : `Select ${e.label}` }),
                /* @__PURE__ */ i.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
              ]
            }
          ),
          /* @__PURE__ */ i.jsx(hr, { anchorRef: w, open: m, children: /* @__PURE__ */ i.jsxs(
            "div",
            {
              ref: O,
              className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
              children: [
                e.search && /* @__PURE__ */ i.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "text",
                    value: h,
                    onChange: (R) => {
                      T(R.target.value), j(0);
                    },
                    placeholder: "Search...",
                    className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                  }
                ) }),
                H.length > 0 ? H.map(([R, x], _) => /* @__PURE__ */ i.jsxs(
                  "label",
                  {
                    "data-index": _,
                    className: `flex items-center gap-x-2 px-2 py-1 rounded cursor-pointer text-sm
                    ${A.includes(R) ? "bg-indigo-50 text-indigo-600 font-medium" : v === _ ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: [
                      /* @__PURE__ */ i.jsx(
                        "input",
                        {
                          id: `${l}-${R}`,
                          type: "checkbox",
                          checked: A.includes(R),
                          onChange: ($) => {
                            const F = $.target.checked ? [...A, R] : A.filter((M) => M !== R);
                            t.setFieldValue(l, F), re("onChange", e, `${l}-${R}`);
                          },
                          className: "h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        }
                      ),
                      x
                    ]
                  },
                  R
                )) : /* @__PURE__ */ i.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ]
            }
          ) }),
          t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[l]) })
        ] });
      }
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: z, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsxs(
            "select",
            {
              className: `${S} ${N} appearance-none cursor-pointer pr-12`,
              onFocus: () => u(!0),
              name: l,
              id: l,
              value: t.values[l],
              onBlur: t.handleBlur,
              onChange: (A) => {
                t.setFieldValue(
                  l,
                  A.target.value === "" ? "" : A.target.value
                ), re("onChange", e, `${l}`);
              },
              disabled: e.disabled,
              children: [
                /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: e.placeholder || "Please select an option" }),
                !sn(p) && Object.entries(p).map(([A, R]) => /* @__PURE__ */ i.jsx("option", { value: A, className: "py-2", children: R }, A)),
                sn(p) && Object.entries(p).map(([A, R]) => /* @__PURE__ */ i.jsx("optgroup", { label: A, children: Object.entries(R).map(([x, _]) => /* @__PURE__ */ i.jsx("option", { value: x, children: _ }, x)) }, A))
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
        /* @__PURE__ */ i.jsxs("label", { className: z, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: `flex ${I > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(p || {}).map(([A, R]) => /* @__PURE__ */ i.jsxs(
          "label",
          {
            htmlFor: `${l}-${A}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  id: `${l}-${A}`,
                  type: "radio",
                  name: l,
                  checked: t.values[l] === A,
                  value: A,
                  onChange: (x) => {
                    t.setFieldValue(
                      l,
                      x.target.value === "" ? "" : x.target.value
                    ), re("onChange", e, `${l}-${A}`);
                  },
                  onBlur: t.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              R
            ]
          },
          A
        )) }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[l]) })
      ] });
    case "checkbox": {
      const A = t.values[l];
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: z, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(p || {}).map(([R, x]) => /* @__PURE__ */ i.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  id: `${l}-${R}`,
                  type: "checkbox",
                  checked: A.includes(R),
                  onChange: (_) => {
                    const $ = _.target.checked ? [...A, R] : A.filter((F) => F !== R);
                    t.setFieldValue(l, $), re("onChange", e, `${l}-${R}`);
                  },
                  onBlur: t.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              x
            ]
          },
          R
        )) }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[l]) })
      ] });
    }
    case "tags": {
      const A = t.values[l], R = h.trim(), x = Array.isArray(p) ? p : Object.entries(p || {}).map(([M, L]) => ({ value: M, label: L })), _ = (M) => {
        M && !A.includes(M) && (t.setFieldValue(l, [...A, M]), T(""));
      }, $ = (M) => {
        t.setFieldValue(
          l,
          A.filter((L) => L !== M)
        );
      }, F = (M) => x.find((L) => L.value === M)?.label ?? M;
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: z, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs(
          "div",
          {
            className: `${S} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !e.disabled && document.getElementById(`${l}-input`)?.focus(),
            children: [
              A.map((M) => /* @__PURE__ */ i.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ i.jsx("span", { className: "text-indigo-700", children: F(M) }),
                    /* @__PURE__ */ i.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (L) => {
                          L.stopPropagation(), e.disabled || $(M);
                        },
                        onMouseDown: (L) => L.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                M
              )),
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  id: `${l}-input`,
                  type: "text",
                  value: h,
                  onChange: (M) => T(M.target.value),
                  onKeyDown: (M) => {
                    (M.key === "Enter" || M.key === ",") && (M.preventDefault(), _(R));
                  },
                  placeholder: A.length === 0 ? e.placeholder || "Type and press Enter" : "",
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
      const W = e.multiple === !0, ne = Array.isArray(t.values[l]) ? t.values[l] : t.values[l] ? [t.values[l]] : [];
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: z, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ i.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: P(e) }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              id: l,
              type: "file",
              className: `${S} ${N} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => u(!0),
              name: l,
              multiple: W,
              onChange: (A) => {
                const R = A.currentTarget.files;
                R && Q(R), re("onChange", e, `${l}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ i.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${f ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        ne.map((A) => {
          const R = A?.split("/").pop();
          return R ? /* @__PURE__ */ i.jsx("div", { className: "mt-1", children: /* @__PURE__ */ i.jsx("span", { className: "text-sm", children: R }) }, A) : null;
        }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[l]) })
      ] });
    case "json":
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: z, children: [
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
              onChange: (A) => {
                t.setFieldValue(
                  l,
                  A.target.value
                ), re("onChange", e, `${l}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: e.disabled,
              className: `${S} ${N} min-h-[200px] font-mono text-sm resize-y`
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
        /* @__PURE__ */ i.jsxs("label", { className: z, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ i.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: P(e) }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              id: l,
              type: "date",
              name: l,
              min: e.min,
              max: e.max,
              value: t.values[l],
              onChange: (A) => {
                t.setFieldValue(
                  l,
                  A.target.value
                ), re("onChange", e, `${l}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled,
              className: `${S} ${N} ${e.icon ? "pl-9" : ""}`
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
        /* @__PURE__ */ i.jsxs("label", { className: z, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ i.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: P(e) }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              id: l,
              type: e.type || "text",
              className: `${S} ${N} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => u(!0),
              name: l,
              value: t.values[l],
              onBlur: t.handleBlur,
              onChange: (A) => {
                t.setFieldValue(
                  l,
                  A.target.value
                ), re("onChange", e, `${l}`);
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
        /* @__PURE__ */ i.jsxs("label", { className: z, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ i.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: P(e) }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              id: l,
              type: e.type || "text",
              className: `${S} ${N} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => u(!0),
              name: l,
              value: t.values[l],
              onBlur: t.handleBlur,
              onChange: (A) => {
                t.setFieldValue(
                  l,
                  A.target.value
                ), re("onChange", e, `${l}`);
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
function Xd({
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
  module_refid: f
}) {
  const u = ho(t, o?.operation), [p, g] = oe.useState({}), h = (m, y) => {
    g((E) => ({
      ...E,
      [m]: y
    }));
  }, { initialValues: T, validationSchema: v } = oe.useMemo(() => {
    const m = {}, y = {};
    return u.forEach((E) => {
      mo([E], m, y, r);
    }), {
      initialValues: m,
      validationSchema: y
    };
  }, [u, r]), j = Ud({
    initialValues: T,
    enableReinitialize: !0,
    validationSchema: rs().shape(v),
    onSubmit: (m) => {
      n(m), j.resetForm();
    }
  });
  function O(m) {
    m.preventDefault(), j.resetForm();
  }
  return /* @__PURE__ */ i.jsx("div", { className: "relative z-10 max-w-full ", children: /* @__PURE__ */ i.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ i.jsxs("form", { onSubmit: j.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "grid grid-flow-col auto-cols-max gap-4  overflow-x-auto", children: [
      u.map((m, y) => po(m.hidden) || m.type === "geolocation" || m.vmode === "edit" && o?.operation === "create" ? null : /* @__PURE__ */ i.jsx(
        "div",
        {
          children: /* @__PURE__ */ i.jsx(
            Kd,
            {
              refid: c,
              module_refid: f,
              sqlOpsUrls: o,
              field: m,
              formik: j,
              methods: s,
              setFieldOptions: h,
              ...p[m.name] ? { optionsOverride: p[m.name] } : {}
            }
          )
        },
        m?.name ?? `field-${y}`
      )),
      /* @__PURE__ */ i.jsxs("div", { className: "", children: [
        /* @__PURE__ */ i.jsx("div", { children: "  " }),
        /* @__PURE__ */ i.jsx("button", { onClick: O, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Reset" }),
        Object.keys(j.errors).length > 0 && /* @__PURE__ */ i.jsx("div", { children: "  " })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "", children: [
        /* @__PURE__ */ i.jsx("div", { children: "  " }),
        /* @__PURE__ */ i.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" }),
        Object.keys(j.errors).length > 0 && /* @__PURE__ */ i.jsx("div", { children: "  " })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "mt-8 flex justify-between space-x-3", children: /* @__PURE__ */ i.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }) })
  ] }) }) });
}
function Zd({
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
  const u = e.endPoints, p = e?.source?.refid, [g, h] = oe.useState(o), T = oe.useMemo(() => uo(e.fields), [e.fields]);
  oe.useEffect(() => {
    h(o ?? {});
  }, [o]);
  const v = oe.useCallback(
    (m) => {
      m && Object.keys(m).length > 0 && h(m);
    },
    []
  );
  oe.useEffect(() => {
    let m = !0;
    return (async () => {
      const E = e?.source ?? {};
      if (E?.type) {
        if (E.type === "method") {
          const w = E.method, l = w ? t[w] : void 0;
          if (l)
            try {
              const S = await Promise.resolve(l());
              m && v(S);
            } catch (S) {
              console.error("Method execution failed:", S);
            }
        }
        if (E.type === "api" && u?.operation !== "create")
          try {
            const w = await ae({
              method: E.method || "GET",
              url: E.url ?? "",
              data: E.body ?? {},
              params: E.params ?? {},
              headers: E.headers ?? {}
            });
            m && v(w.data);
          } catch (w) {
            console.error("API fetch failed:", w);
          }
        if (E.type === "sql" && E.refid && E.refid !== "0" && u?.operation !== "create" || u?.operation !== "create" && E.dbopsid) {
          if (!u) {
            console.error("SQL source requires formJson.endPoints but it is missing");
            return;
          }
          try {
            const w = await So.fetch(u, {
              source: {
                ...E,
                table: E.table,
                columns: E.columns,
                where: Oe(E.where, {
                  refid: p
                })
              },
              fields: Er(e.fields, u.operation)
            }, E?.dbopsid, f);
            m && v(w);
          } catch (w) {
            console.error("API fetch failed:", w);
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
  const j = async (m) => {
    const y = e?.source ?? {};
    let E = null;
    if (T.length > 0)
      try {
        E = await fo();
      } catch (l) {
        console.log("catch fetchGeolocation", l), E = null;
      }
    const w = {
      ...m,
      ...Object.fromEntries(
        T.map((l) => [l, E])
      )
    };
    if (y.type === "method") {
      const l = y.method, S = l ? t[l] : void 0;
      if (S)
        try {
          const N = await Promise.resolve(S(w));
          c?.(null), s?.(N);
        } catch (N) {
          s?.(N), console.error("Method execution failed:", N);
        }
    }
    if (y.type === "api") {
      if (!u) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const l = await ae({
          method: y.method || "POST",
          url: u.baseURL + y.endpoint,
          data: w ?? {},
          headers: {
            Authorization: `Bearer ${u?.accessToken}`
          }
        });
        c?.(null), s?.(l);
      } catch (l) {
        s?.(l), console.error("API fetch failed:", l);
      }
    }
    if (y.type === "sql") {
      const l = e.endPoints;
      if (!l) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let S = !1, N;
        y?.dbopsid && (S = !0, N = y?.dbopsid);
        const z = await ae({
          method: "GET",
          url: l.baseURL + l.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${l?.accessToken}`
          }
        });
        if (!S) {
          let I = {
            ...y
          };
          y.where && (I = {
            ...y,
            where: Oe(y.where, {
              refid: p
            })
          }), N = (await ae({
            method: "POST",
            url: l.baseURL + l.dbopsGetRefId,
            data: {
              operation: l.operation,
              source: I,
              fields: Er(e.fields, l.operation),
              forcefill: e.forcefill,
              datahash: z.data.refhash,
              scrid: f
            },
            headers: {
              Authorization: `Bearer ${l?.accessToken}`
            }
          }))?.data.refid;
        }
        let P = {
          refid: N,
          fields: w,
          datahash: z.data.refhash,
          refid1: l.refid
        };
        y?.refid && (P.refid1 = y?.refid);
        const B = await ae({
          method: "POST",
          url: l.baseURL + l[l.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: P,
          headers: {
            Authorization: `Bearer ${l?.accessToken}`
          }
        });
        c?.(null), s?.(B);
      } catch (S) {
        s?.(S), console.error("API fetch failed:", S);
      }
    }
  }, O = {
    simple: /* @__PURE__ */ i.jsx(
      Xd,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: g,
        onSubmit: j,
        onCancel: n,
        methods: t,
        components: a,
        sqlOpsUrls: u,
        refid: p,
        module_refid: f
      }
    )
  };
  return /* @__PURE__ */ i.jsx("div", { className: "relative", children: O.simple });
}
function _n({ tabObj: e, methods: t, tabName: r, sqlOpsUrls: n, refid: a, Reports: s, toast: o, handleAction: c, infoViewJson: f }) {
  const [u, p] = be(!1), [g, h] = be(null), [T, v] = oe.useState(0), [j, O] = oe.useState(null), m = e?.config, y = e?.config, E = y?.["popup.form"] ? "popup.form" : (y?.form, "form"), w = y?.[E] && Object.keys(y?.[E]).length > 0, l = (B) => {
    let I = Re(B.data);
    O(I);
  }, S = (B) => {
    O(B), v((I) => I + 1);
  }, N = (B) => {
    let I = Re(B.data);
    h(I), p(!0);
  }, z = async () => {
    if (g?.id) {
      if (!n) {
        window.alert("Delete configuration missing.");
        return;
      }
      try {
        let B = e?.config;
        const I = B?.["popup.form"] ? "popup.form" : (B?.form, "form"), H = B?.[I];
        if (!H?.source) throw new Error("Form source missing");
        let K = !1, Q;
        H?.source?.dbopsid && (K = !0, Q = H?.source?.dbopsid);
        const re = await ae({
          method: "GET",
          url: n.baseURL + n.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${n.accessToken}`
          }
        });
        if (!K) {
          let W = { ...H.source, refid: g.id };
          H.source.where && (W = {
            ...W,
            where: Oe(H.source.where, {
              refid: g?.id
            })
          }), Q = (await ae({
            method: "POST",
            url: n.baseURL + n.dbopsGetRefId,
            data: {
              operation: "update",
              source: W,
              fields: H.fields,
              forcefill: H.forcefill,
              datahash: re.data.refhash,
              scrid: f?.module_refid
            },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }))?.data.refid;
        }
        await ae({
          method: "POST",
          url: n.baseURL + n.dbopsUpdate,
          data: {
            refid: Q,
            fields: { blocked: "true" },
            datahash: re.data.refhash,
            refid1: g?.id
          },
          headers: {
            Authorization: `Bearer ${n.accessToken}`
          }
        }), window.alert("Record deleted successfully."), v((W) => W + 1);
      } catch (B) {
        console.error(B), window.alert("Failed to delete record. Please try again");
      } finally {
        h(null), p(!1);
      }
    }
  }, P = () => {
    h(null), p(!1);
  };
  return /* @__PURE__ */ i.jsx(i.Fragment, { children: s ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      s,
      {
        methods: { ...t, deleteRecord: N, editRecord: l },
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
          actions: { ...m?.actions, ...f?.buttons, ...f.actions },
          datagrid: m?.datagrid,
          buttons: m?.buttons,
          refresh: T
        },
        onButtonClick: c
      }
    ),
    w && /* @__PURE__ */ i.jsx(
      Zd,
      {
        formJson: {
          ...y[E],
          source: {
            ...y?.[E].source,
            refid: j?.id
          },
          endPoints: {
            ...n,
            operation: j ? "update" : "create"
          }
        },
        methods: t,
        initialvalues: j ?? {},
        setEditData: S,
        module_refid: f?.module_refid
      }
    ),
    /* @__PURE__ */ i.jsx(
      $o,
      {
        open: u,
        onConfirm: z,
        onCancel: P
      }
    )
  ] }) : /* @__PURE__ */ i.jsx("p", { children: "Report not available" }) });
}
function Sn(e, t) {
  if (!e || !t) return null;
  const r = t[e];
  if (oe.isValidElement(r))
    return r;
  if (typeof r == "function") {
    const n = r;
    return /* @__PURE__ */ i.jsx(n, {});
  }
  return null;
}
const La = ({ groups: e, groupNames: t, setActiveTabIndex: r, activeTabIndex: n }) => /* @__PURE__ */ i.jsx(
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
), Qd = ({
  groups: e,
  groupNames: t,
  setActiveTabIndex: r,
  activeTabIndex: n,
  layoutConfig: a,
  showScrollHint: s,
  isCommonInfo: o,
  tabsNavRef: c
}) => {
  const [f, u] = be(!1), p = Me(null);
  return ye(() => {
    const g = (h) => {
      p.current && !p.current.contains(h.target) && u(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
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
      /* @__PURE__ */ i.jsxs("div", { className: "relative", ref: p, children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            onClick: () => u(!f),
            className: "ml-1 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200",
            children: "⋮"
          }
        ),
        f && /* @__PURE__ */ i.jsx("div", { className: "absolute right-0 mt-2 w-48 max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-30", children: t.map((g, h) => /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              r(h), u(!1);
            },
            className: `w-full text-left px-3 py-2 text-sm truncate hover:bg-gray-100 ${n === h ? "bg-gray-50 font-semibold text-action" : "text-gray-700"}`,
            children: e[g]?.label || g
          },
          g
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
        children: t.length > 0 ? t.map((g, h) => /* @__PURE__ */ i.jsx(
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
            children: /* @__PURE__ */ i.jsx("span", { className: "relative z-10 flex items-center justify-center gap-1 sm:gap-2", children: /* @__PURE__ */ i.jsx("span", { className: "truncate", children: e[g]?.label || g }) })
          },
          g
        )) : /* @__PURE__ */ i.jsx("div", { className: "py-3 px-6 text-sm text-gray-500", children: "No group available" })
      }
    ) })
  ] });
}, ka = ({
  groupNames: e,
  activeTabIndex: t,
  layoutConfig: r,
  tabObj: n,
  infoData: a,
  setActiveTabIndex: s,
  renderView: o,
  methods: c = {},
  refid: f,
  sqlOpsUrls: u,
  module_refid: p,
  fieldOptions: g,
  setFieldOptions: h,
  buttons: T,
  handleAction: v,
  components: j
}) => {
  let O = T ? Object.entries(T).filter(([E, w]) => w.groups ? w.groups.includes(e[t]) : !0) : [];
  async function m(E, w) {
    const l = c?.[E];
    if (l) {
      try {
        await l();
      } catch (S) {
        console.error("Method execution failed:", S);
      }
      return;
    }
    v?.({ [E]: w }, a);
  }
  const y = Sn(n?.component, j);
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: "bg-white rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex-1 flex flex-col min-h-0",
      children: [
        e.length > 0 ? n?.type === "fields" && n?.fields ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ i.jsx("div", { className: r?.fieldGridClass || "grid grid-cols-12 gap-2", children: n.fields.map((E, w) => /* @__PURE__ */ i.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${Xt[Zt(E.width)] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ i.jsx(
              Qt,
              {
                field: E,
                data: a ?? {},
                methods: c,
                refid: f,
                sqlOpsUrls: u,
                module_refid: p,
                setFieldOptions: h,
                ...g[E.name] ? { optionsOverride: g[E.name] } : {}
              }
            )
          },
          E?.name ?? `field-${w}`
        )) }) }) : n?.type === "component" && y ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: y }) : n ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: o(n, e[t] || "") }) : null : /* @__PURE__ */ i.jsx("div", { className: "flex-1 col-span-full text-center py-8 text-gray-500", children: "No data available" }),
        /* @__PURE__ */ i.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: O && O.map(([E, w]) => /* @__PURE__ */ i.jsx(
          "button",
          {
            onClick: () => m(E, w),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: w.label
          },
          E
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
              e.slice(0, 5).map((E, w) => /* @__PURE__ */ i.jsx(
                "div",
                {
                  className: `w-2 h-2 rounded-full transition-all duration-300 ${w === t ? "bg-action w-6" : "bg-gray-300"}`
                },
                w
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
          /* @__PURE__ */ i.jsx("div", { className: "flex gap-1", children: e.map((E, w) => /* @__PURE__ */ i.jsx(
            "div",
            {
              className: `w-2 h-2 rounded-full transition-all duration-300 ${w === t ? "bg-action w-6" : "bg-gray-300"}`
            },
            w
          )) })
        ] }) })
      ]
    },
    e[t]
  );
};
function za({
  groups: e,
  methods: t = {},
  infoData: r,
  viewRenderers: n = {},
  isCommonInfo: a,
  layoutConfig: s = {},
  viewMode: o,
  sqlOpsUrls: c,
  refid: f,
  Reports: u,
  toast: p = {},
  handleAction: g = () => {
  },
  infoViewJson: h,
  fieldOptions: T,
  setFieldOptions: v,
  components: j
}) {
  const [O, m] = be(0), [y, E] = be(!1), w = Me(null), l = Object.keys(e);
  ye(() => {
    const K = () => {
      if (w.current) {
        const Q = w.current;
        E(Q.scrollWidth > Q.clientWidth);
      }
    };
    return K(), window.addEventListener("resize", K), () => window.removeEventListener("resize", K);
  }, [l.length]), ye(() => {
    if (w.current && l.length > 0) {
      const K = w.current.children[O];
      K && K.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [O, l.length]);
  const S = o === "tableft", N = o === "tabright", z = !S && !N, P = e[l[O] ?? ""] || null, B = {
    single: (K, Q) => /* @__PURE__ */ i.jsx(pn, { fieldOptions: T, setFieldOptions: v, module_refid: h.module_refid, tabObj: K, methods: t, tabName: Q, sqlOpsUrls: c, refid: f }),
    grid: (K, Q) => /* @__PURE__ */ i.jsx(
      _n,
      {
        ...u ? { Reports: u } : {},
        toast: p,
        handleAction: g,
        tabObj: K,
        methods: t,
        tabName: Q,
        sqlOpsUrls: c,
        refid: f,
        infoViewJson: h
      }
    )
  }, I = P?.config?.uimode, H = n[I] || B[I] || (() => /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No UI mode for this type" }));
  return z ? /* @__PURE__ */ i.jsxs("div", { className: "flex-1 flex flex-col min-h-0 ", children: [
    /* @__PURE__ */ i.jsx(
      Qd,
      {
        groupNames: l,
        groups: e,
        setActiveTabIndex: m,
        activeTabIndex: O,
        tabsNavRef: w,
        isCommonInfo: a,
        showScrollHint: y,
        layoutConfig: s
      }
    ),
    /* @__PURE__ */ i.jsx(
      ka,
      {
        groupNames: l,
        activeTabIndex: O,
        layoutConfig: s,
        tabObj: P,
        infoData: r,
        setActiveTabIndex: m,
        renderView: H,
        groups: e,
        methods: t,
        refid: f,
        sqlOpsUrls: c,
        module_refid: h.module_refid,
        fieldOptions: T,
        setFieldOptions: v,
        buttons: h.buttons,
        handleAction: g,
        ...j ? { components: j } : {}
      }
    )
  ] }) : /* @__PURE__ */ i.jsxs("div", { className: "flex-1 flex min-h-0", children: [
    S && /* @__PURE__ */ i.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ i.jsx(
      La,
      {
        groupNames: l,
        groups: e,
        setActiveTabIndex: m,
        activeTabIndex: O
      }
    ) }),
    /* @__PURE__ */ i.jsx("main", { className: "flex-1 flex flex-col min-h-0 overflow-auto", children: /* @__PURE__ */ i.jsx(
      ka,
      {
        groupNames: l,
        activeTabIndex: O,
        layoutConfig: s,
        tabObj: P,
        infoData: r,
        setActiveTabIndex: m,
        renderView: H,
        groups: e,
        methods: t,
        refid: f,
        module_refid: h.module_refid,
        sqlOpsUrls: c,
        fieldOptions: T,
        setFieldOptions: v,
        handleAction: g,
        ...j ? { components: j } : {}
      }
    ) }),
    N && /* @__PURE__ */ i.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ i.jsx(
      La,
      {
        groupNames: l,
        groups: e,
        setActiveTabIndex: m,
        activeTabIndex: O
      }
    ) })
  ] });
}
function Jd({ title: e, children: t, isFirst: r }) {
  const [n, a] = be(r);
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
function ef({
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
  infoViewJson: u,
  fieldOptions: p,
  setFieldOptions: g,
  components: h
}) {
  const T = {
    single: (m, y) => /* @__PURE__ */ i.jsx(
      pn,
      {
        tabObj: m,
        methods: t,
        tabName: y,
        sqlOpsUrls: a,
        fieldOptions: p,
        setFieldOptions: g,
        refid: s,
        module_refid: u?.module_refid
      }
    ),
    grid: (m, y) => /* @__PURE__ */ i.jsx(
      _n,
      {
        ...o ? { Reports: o } : {},
        toast: c,
        infoViewJson: u,
        handleAction: f,
        tabObj: m,
        methods: t,
        tabName: y,
        sqlOpsUrls: a,
        refid: s
      }
    )
  }, v = u?.buttons;
  let j = v ? Object.entries(v).filter(([m, y]) => !(y.groups && y.groups.length > 0)) : [];
  async function O(m, y) {
    const E = t?.[m];
    if (E) {
      try {
        await E();
      } catch (w) {
        console.error("Method execution failed:", w);
      }
      return;
    }
    f?.({ [m]: y }, r);
  }
  return /* @__PURE__ */ i.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ i.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ i.jsxs("div", { className: "space-y-1 flex flex-col min-h-0", children: [
    e && Object.entries(e).map(([m, y], E) => {
      let w = v ? Object.entries(v).filter(([S, N]) => N.groups ? N.groups.includes(m) : !1) : [];
      const l = Sn(y.component, h);
      return /* @__PURE__ */ i.jsxs(Jd, { title: y.label, isFirst: E === 0, children: [
        y?.type === "fields" && y?.fields ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-12 gap-2", children: y.fields.map((S, N) => /* @__PURE__ */ i.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${Xt[Zt(S.width)] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ i.jsx(
              Qt,
              {
                module_refid: u?.module_refid,
                methods: t,
                field: S,
                data: r ?? {},
                setFieldOptions: g,
                ...p[S.name] ? { optionsOverride: p[S.name] } : {},
                sqlOpsUrls: a,
                refid: s
              }
            )
          },
          S?.name ?? `field-${N}`
        )) }) }) : y?.type === "component" && l ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: l }) : y ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: n[y.config?.uimode]?.(y) || T[y.config?.uimode]?.(y, m) || /* @__PURE__ */ i.jsx("div", { children: "No renderer for this type" }) }) : null,
        /* @__PURE__ */ i.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: w && w.map(([S, N]) => /* @__PURE__ */ i.jsx(
          "button",
          {
            onClick: () => O(S, N),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: N.label
          },
          S
        )) })
      ] }, m);
    }),
    /* @__PURE__ */ i.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: j && j.map(([m, y]) => /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => O(m, y),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: y.label
      },
      m
    )) })
  ] }) }) });
}
function tf({ title: e, children: t }) {
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
function rf({
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
  infoViewJson: u,
  fieldOptions: p,
  setFieldOptions: g,
  components: h
}) {
  const T = {
    single: (m, y) => /* @__PURE__ */ i.jsx(pn, { fieldOptions: p, setFieldOptions: g, module_refid: u?.module_refid, tabObj: m, methods: t, tabName: y, sqlOpsUrls: a, refid: s }),
    grid: (m, y) => /* @__PURE__ */ i.jsx(
      _n,
      {
        ...o ? { Reports: o } : {},
        toast: c,
        handleAction: f,
        tabObj: m,
        methods: t,
        tabName: y,
        sqlOpsUrls: a,
        refid: s,
        infoViewJson: u
      }
    )
  }, v = u?.buttons;
  let j = v ? Object.entries(v).filter(([m, y]) => !(y.groups && y.groups.length > 0)) : [];
  async function O(m, y) {
    const E = t?.[m];
    if (E) {
      try {
        await E();
      } catch (w) {
        console.error("Method execution failed:", w);
      }
      return;
    }
    f?.({ [m]: y }, r);
  }
  return /* @__PURE__ */ i.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ i.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ i.jsxs("div", { className: "space-y-2  flex flex-col min-h-0", children: [
    e && Object.entries(e).map(([m, y], E) => {
      console.log("group", m), console.log("buttons", v);
      let w = v ? Object.entries(v).filter(([S, N]) => N.groups ? N.groups.includes(m) : !1) : [];
      const l = Sn(y.component, h);
      return /* @__PURE__ */ i.jsxs(tf, { title: y.label, children: [
        y?.type === "fields" && y?.fields ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-12 gap-2", children: y.fields.map((S, N) => /* @__PURE__ */ i.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${Xt[Zt(S.width)] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ i.jsx(
              Qt,
              {
                module_refid: u?.module_refid,
                methods: t,
                field: S,
                data: r ?? {},
                setFieldOptions: g,
                ...p[S.name] ? { optionsOverride: p[S.name] } : {},
                sqlOpsUrls: a,
                refid: s
              }
            )
          },
          S?.name ?? `field-${N}`
        )) }) }) : y?.type === "component" && l ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: l }) : y ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: n[y.config?.uimode]?.(y) || T[y.config?.uimode]?.(y, m) || /* @__PURE__ */ i.jsx("div", { children: "No renderer for this type" }) }) : null,
        /* @__PURE__ */ i.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: w && w.map(([S, N]) => /* @__PURE__ */ i.jsx(
          "button",
          {
            onClick: () => O(S, N),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: N.label
          },
          S
        )) })
      ] }, m);
    }),
    /* @__PURE__ */ i.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: j && j.map(([m, y]) => /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => O(m, y),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: y.label
      },
      m
    )) })
  ] }) }) });
}
function of({
  infoViewJson: e,
  data: t = {},
  hiddenFields: r = [],
  groupFieldsFn: n = co,
  layoutConfig: a = {},
  viewRenderers: s = {},
  methods: o = {},
  Reports: c,
  toast: f = {},
  handleAction: u = () => {
  },
  components: p
}) {
  const [g, h] = oe.useState({}), T = lo(e.infoview ?? {}), v = e.endPoints, j = oe.useMemo(
    () => n(e.fields || {}),
    [e.fields, n]
  ), [O, m] = oe.useState({}), y = (N, z) => {
    m((P) => ({ ...P, [N]: z }));
  }, E = e?.source?.refid;
  let w = { ...j };
  e.infoview?.groups && (w = { ...w, ...e.infoview.groups }), oe.useEffect(() => {
    let N = !1;
    return (async () => {
      const P = e?.source;
      if (!P?.type) {
        N || h({});
        return;
      }
      if (P.type === "method") {
        const B = P.method, I = B ? o[B] : void 0;
        if (I)
          try {
            const H = await Promise.resolve(I());
            N || h(H || {});
          } catch (H) {
            console.error("Method execution failed:", H), N || h({});
          }
        else
          N || h({});
      }
      if (P.type === "api")
        try {
          const B = await ae({
            method: P.method || "GET",
            url: P.url,
            data: P.body || {},
            params: P.params || {},
            headers: P.headers || {}
          });
          N || h(B.data || {});
        } catch (B) {
          console.error("API fetch failed:", B), N || h({});
        }
      if (P.type === "sql" && P.refid && P.refid != "0" || P.dbopsid) {
        if (!v) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let B = !1, I;
          P?.dbopsid && (B = !0, I = P?.dbopsid);
          const H = await ae({
            method: "GET",
            url: v.baseURL + v.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${v?.accessToken}`
            }
          });
          if (!B) {
            let re = {
              ...P
            };
            P.where && (re = {
              ...P,
              where: Oe(P.where, {
                refid: E
              })
            }), I = (await ae({
              method: "POST",
              url: v.baseURL + v.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: re,
                fields: Er(e.fields, v.operation),
                forcefill: e.forcefill,
                datahash: H.data.refhash,
                srcid: e?.module_refid
              },
              headers: {
                Authorization: `Bearer ${v?.accessToken}`
              }
            }))?.data.refid;
          }
          const K = await ae({
            method: "POST",
            url: v.baseURL + v.dbopsFetch,
            data: {
              refid: I,
              datahash: H.data.refhash,
              module_refid: e.module_refid
            },
            headers: {
              Authorization: `Bearer ${v?.accessToken}`
            }
          }), Q = cs(K) ?? {};
          N || h(Q);
        } catch (B) {
          console.error("API fetch failed:", B);
        }
      }
    })(), () => {
      N = !0;
    };
  }, [
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.url || "",
    JSON.stringify(e?.source?.params || {}),
    JSON.stringify(e?.source?.body || {}),
    JSON.stringify(e?.source?.headers || {})
  ]);
  const l = w.common || null;
  l && delete w.common;
  const S = (N) => {
    switch (N) {
      case "accordion":
        return /* @__PURE__ */ i.jsx(
          ef,
          {
            groups: w,
            methods: o,
            infoData: g,
            viewRenderers: s,
            sqlOpsUrls: v,
            refid: E,
            ...c ? { Reports: c } : {},
            toast: f,
            handleAction: u,
            infoViewJson: e,
            setFieldOptions: y,
            fieldOptions: O,
            ...p ? { components: p } : {}
          }
        );
      case "tab":
      case "tableft":
      case "tabright":
        return /* @__PURE__ */ i.jsx(
          za,
          {
            groups: w,
            viewRenderers: s,
            layoutConfig: a,
            methods: o,
            infoData: g,
            isCommonInfo: !!l,
            viewMode: N,
            sqlOpsUrls: v,
            refid: E,
            ...c ? { Reports: c } : {},
            toast: f,
            handleAction: u,
            infoViewJson: e,
            setFieldOptions: y,
            fieldOptions: O,
            ...p ? { components: p } : {}
          }
        );
      case "cards":
        return /* @__PURE__ */ i.jsx(
          rf,
          {
            groups: w,
            viewRenderers: s,
            methods: o,
            infoData: g,
            sqlOpsUrls: v,
            refid: E,
            ...c ? { Reports: c } : {},
            toast: f,
            handleAction: u,
            infoViewJson: e,
            setFieldOptions: y,
            fieldOptions: O,
            ...p ? { components: p } : {}
          }
        );
      default:
        return /* @__PURE__ */ i.jsx(
          za,
          {
            groups: w,
            viewRenderers: s,
            layoutConfig: a,
            methods: o,
            infoData: g,
            isCommonInfo: !!l,
            viewMode: N,
            sqlOpsUrls: v,
            refid: E,
            ...c ? { Reports: c } : {},
            toast: f,
            handleAction: u,
            infoViewJson: e,
            setFieldOptions: y,
            fieldOptions: O,
            ...p ? { components: p } : {}
          }
        );
    }
  };
  return /* @__PURE__ */ i.jsxs("div", { className: a.containerClass || "h-screen flex flex-col ", children: [
    l && v && /* @__PURE__ */ i.jsx(
      Co,
      {
        commonInfo: l,
        infoData: g,
        hiddenFields: r,
        sqlOpsUrls: v,
        setFieldOptions: y,
        fieldOptions: O,
        module_refid: e.module_refid,
        refid: E,
        methods: o
      }
    ),
    S(T)
  ] });
}
export {
  of as InfoView
};
