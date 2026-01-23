import te, { useState as oe, useRef as xe, useEffect as ce, useCallback as ae, useMemo as _t, useLayoutEffect as gn, createContext as ja, forwardRef as Ta, createElement as Ea, useContext as Sa } from "react";
import X from "axios";
import { createPortal as _a } from "react-dom";
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
function Na() {
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
function Aa() {
  return jr || (jr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(b) {
      if (b == null) return null;
      if (typeof b == "function")
        return b.$$typeof === z ? null : b.displayName || b.name || null;
      if (typeof b == "string") return b;
      switch (b) {
        case x:
          return "Fragment";
        case p:
          return "Profiler";
        case _:
          return "StrictMode";
        case l:
          return "Suspense";
        case j:
          return "SuspenseList";
        case U:
          return "Activity";
      }
      if (typeof b == "object")
        switch (typeof b.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), b.$$typeof) {
          case v:
            return "Portal";
          case S:
            return (b.displayName || "Context") + ".Provider";
          case T:
            return (b._context.displayName || "Context") + ".Consumer";
          case F:
            var E = b.render;
            return b = b.displayName, b || (b = E.displayName || E.name || "", b = b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef"), b;
          case $:
            return E = b.displayName || null, E !== null ? E : e(b.type) || "Memo";
          case B:
            E = b._payload, b = b._init;
            try {
              return e(b(E));
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
        var E = !1;
      } catch {
        E = !0;
      }
      if (E) {
        E = console;
        var A = E.error, P = typeof Symbol == "function" && Symbol.toStringTag && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return A.call(
          E,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          P
        ), t(b);
      }
    }
    function n(b) {
      if (b === x) return "<>";
      if (typeof b == "object" && b !== null && b.$$typeof === B)
        return "<...>";
      try {
        var E = e(b);
        return E ? "<" + E + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var b = I.A;
      return b === null ? null : b.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function o(b) {
      if (D.call(b, "key")) {
        var E = Object.getOwnPropertyDescriptor(b, "key").get;
        if (E && E.isReactWarning) return !1;
      }
      return b.key !== void 0;
    }
    function c(b, E) {
      function A() {
        Z || (Z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          E
        ));
      }
      A.isReactWarning = !0, Object.defineProperty(b, "key", {
        get: A,
        configurable: !0
      });
    }
    function u() {
      var b = e(this.type);
      return k[b] || (k[b] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), b = this.props.ref, b !== void 0 ? b : null;
    }
    function f(b, E, A, P, C, G, ne, le) {
      return A = G.ref, b = {
        $$typeof: y,
        type: b,
        key: E,
        props: G,
        _owner: C
      }, (A !== void 0 ? A : null) !== null ? Object.defineProperty(b, "ref", {
        enumerable: !1,
        get: u
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
        value: le
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    }
    function d(b, E, A, P, C, G, ne, le) {
      var re = E.children;
      if (re !== void 0)
        if (P)
          if (V(re)) {
            for (P = 0; P < re.length; P++)
              m(re[P]);
            Object.freeze && Object.freeze(re);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(re);
      if (D.call(E, "key")) {
        re = e(b);
        var pe = Object.keys(E).filter(function(Ie) {
          return Ie !== "key";
        });
        P = 0 < pe.length ? "{key: someKey, " + pe.join(": ..., ") + ": ...}" : "{key: someKey}", N[re + P] || (pe = 0 < pe.length ? "{" + pe.join(": ..., ") + ": ...}" : "{}", console.error(
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
        ), N[re + P] = !0);
      }
      if (re = null, A !== void 0 && (r(A), re = "" + A), o(E) && (r(E.key), re = "" + E.key), "key" in E) {
        A = {};
        for (var we in E)
          we !== "key" && (A[we] = E[we]);
      } else A = E;
      return re && c(
        A,
        typeof b == "function" ? b.displayName || b.name || "Unknown" : b
      ), f(
        b,
        re,
        G,
        C,
        a(),
        A,
        ne,
        le
      );
    }
    function m(b) {
      typeof b == "object" && b !== null && b.$$typeof === y && b._store && (b._store.validated = 1);
    }
    var h = te, y = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), T = Symbol.for("react.consumer"), S = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), U = Symbol.for("react.activity"), z = Symbol.for("react.client.reference"), I = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.prototype.hasOwnProperty, V = Array.isArray, Y = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(b) {
        return b();
      }
    };
    var Z, k = {}, Q = h.react_stack_bottom_frame.bind(
      h,
      s
    )(), w = Y(n(s)), N = {};
    Je.Fragment = x, Je.jsx = function(b, E, A, P, C) {
      var G = 1e4 > I.recentlyCreatedOwnerStacks++;
      return d(
        b,
        E,
        A,
        !1,
        P,
        C,
        G ? Error("react-stack-top-frame") : Q,
        G ? Y(n(b)) : w
      );
    }, Je.jsxs = function(b, E, A, P, C) {
      var G = 1e4 > I.recentlyCreatedOwnerStacks++;
      return d(
        b,
        E,
        A,
        !0,
        P,
        C,
        G ? Error("react-stack-top-frame") : Q,
        G ? Y(n(b)) : w
      );
    };
  }()), Je;
}
var Tr;
function $a() {
  return Tr || (Tr = 1, process.env.NODE_ENV === "production" ? mt.exports = Na() : mt.exports = Aa()), mt.exports;
}
var i = $a(), zt, Er;
function Oa() {
  if (Er) return zt;
  Er = 1;
  function e(p) {
    this._maxSize = p, this.clear();
  }
  e.prototype.clear = function() {
    this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
  }, e.prototype.get = function(p) {
    return this._values[p];
  }, e.prototype.set = function(p, T) {
    return this._size >= this._maxSize && this.clear(), p in this._values || this._size++, this._values[p] = T;
  };
  var t = /[^.^\]^[]+|(?=\[\]|\.\.)/g, r = /^\d+$/, n = /^\d/, a = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, s = /^\s*(['"]?)(.*?)(\1)\s*$/, o = 512, c = new e(o), u = new e(o), f = new e(o);
  zt = {
    Cache: e,
    split: m,
    normalizePath: d,
    setter: function(p) {
      var T = d(p);
      return u.get(p) || u.set(p, function(F, l) {
        for (var j = 0, $ = T.length, B = F; j < $ - 1; ) {
          var U = T[j];
          if (U === "__proto__" || U === "constructor" || U === "prototype")
            return F;
          B = B[T[j++]];
        }
        B[T[j]] = l;
      });
    },
    getter: function(p, T) {
      var S = d(p);
      return f.get(p) || f.set(p, function(l) {
        for (var j = 0, $ = S.length; j < $; )
          if (l != null || !T) l = l[S[j++]];
          else return;
        return l;
      });
    },
    join: function(p) {
      return p.reduce(function(T, S) {
        return T + (y(S) || r.test(S) ? "[" + S + "]" : (T ? "." : "") + S);
      }, "");
    },
    forEach: function(p, T, S) {
      h(Array.isArray(p) ? p : m(p), T, S);
    }
  };
  function d(p) {
    return c.get(p) || c.set(
      p,
      m(p).map(function(T) {
        return T.replace(s, "$2");
      })
    );
  }
  function m(p) {
    return p.match(t) || [""];
  }
  function h(p, T, S) {
    var F = p.length, l, j, $, B;
    for (j = 0; j < F; j++)
      l = p[j], l && (_(l) && (l = '"' + l + '"'), B = y(l), $ = !B && /^\d+$/.test(l), T.call(S, l, B, $, j, p));
  }
  function y(p) {
    return typeof p == "string" && p && ["'", '"'].indexOf(p.charAt(0)) !== -1;
  }
  function v(p) {
    return p.match(n) && !p.match(r);
  }
  function x(p) {
    return a.test(p);
  }
  function _(p) {
    return !y(p) && (v(p) || x(p));
  }
  return zt;
}
var De = Oa(), Vt, Sr;
function Fa() {
  if (Sr) return Vt;
  Sr = 1;
  const e = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, t = (d) => d.match(e) || [], r = (d) => d[0].toUpperCase() + d.slice(1), n = (d, m) => t(d).join(m).toLowerCase(), a = (d) => t(d).reduce(
    (m, h) => `${m}${m ? h[0].toUpperCase() + h.slice(1).toLowerCase() : h.toLowerCase()}`,
    ""
  );
  return Vt = {
    words: t,
    upperFirst: r,
    camelCase: a,
    pascalCase: (d) => r(a(d)),
    snakeCase: (d) => n(d, "_"),
    kebabCase: (d) => n(d, "-"),
    sentenceCase: (d) => r(n(d, " ")),
    titleCase: (d) => t(d).map(r).join(" ")
  }, Vt;
}
var Bt = Fa(), yt = { exports: {} }, _r;
function Ca() {
  if (_r) return yt.exports;
  _r = 1, yt.exports = function(a) {
    return e(t(a), a);
  }, yt.exports.array = e;
  function e(a, s) {
    var o = a.length, c = new Array(o), u = {}, f = o, d = r(s), m = n(a);
    for (s.forEach(function(y) {
      if (!m.has(y[0]) || !m.has(y[1]))
        throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }); f--; )
      u[f] || h(a[f], f, /* @__PURE__ */ new Set());
    return c;
    function h(y, v, x) {
      if (x.has(y)) {
        var _;
        try {
          _ = ", node was:" + JSON.stringify(y);
        } catch {
          _ = "";
        }
        throw new Error("Cyclic dependency" + _);
      }
      if (!m.has(y))
        throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(y));
      if (!u[v]) {
        u[v] = !0;
        var p = d.get(y) || /* @__PURE__ */ new Set();
        if (p = Array.from(p), v = p.length) {
          x.add(y);
          do {
            var T = p[--v];
            h(T, m.get(T), x);
          } while (v);
          x.delete(y);
        }
        c[--o] = y;
      }
    }
  }
  function t(a) {
    for (var s = /* @__PURE__ */ new Set(), o = 0, c = a.length; o < c; o++) {
      var u = a[o];
      s.add(u[0]), s.add(u[1]);
    }
    return Array.from(s);
  }
  function r(a) {
    for (var s = /* @__PURE__ */ new Map(), o = 0, c = a.length; o < c; o++) {
      var u = a[o];
      s.has(u[0]) || s.set(u[0], /* @__PURE__ */ new Set()), s.has(u[1]) || s.set(u[1], /* @__PURE__ */ new Set()), s.get(u[0]).add(u[1]);
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
var Ia = Ca();
const Ra = /* @__PURE__ */ bn(Ia), Pa = Object.prototype.toString, Da = Error.prototype.toString, Ma = RegExp.prototype.toString, ka = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", La = /^Symbol\((.*)\)(.*)$/;
function za(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function Nr(e, t = !1) {
  if (e == null || e === !0 || e === !1) return "" + e;
  const r = typeof e;
  if (r === "number") return za(e);
  if (r === "string") return t ? `"${e}"` : e;
  if (r === "function") return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol") return ka.call(e).replace(La, "Symbol($1)");
  const n = Pa.call(e).slice(8, -1);
  return n === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : n === "Error" || e instanceof Error ? "[" + Da.call(e) + "]" : n === "RegExp" ? Ma.call(e) : null;
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
let vn, wn, jn, Va = /\$\{\s*(\w+)\s*\}/g;
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
    }), typeof t == "string" ? t.replace(Va, (a, s) => Ae(r[s])) : typeof t == "function" ? t(r) : t;
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
}, Ba = {
  isValue: "${path} field must be ${value}"
}, jt = {
  noUnknown: "${path} field has unspecified keys: ${unknown}",
  exact: "${path} object contains unknown properties: ${properties}"
}, Tt = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, Ga = {
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
  boolean: Ba,
  tuple: Ga
});
const Ft = (e) => e && e.__isYupSchema__;
class Nt {
  static fromOptions(t, r) {
    if (!r.then && !r.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: n,
      then: a,
      otherwise: s
    } = r, o = typeof n == "function" ? n : (...c) => c.every((u) => u === n);
    return new Nt(t, (c, u) => {
      var f;
      let d = o(...c) ? a : s;
      return (f = d?.(u)) != null ? f : u;
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
function qe(e) {
  function t({
    value: r,
    path: n = "",
    options: a,
    originalValue: s,
    schema: o
  }, c, u) {
    const {
      name: f,
      test: d,
      params: m,
      message: h,
      skipAbsent: y
    } = e;
    let {
      parent: v,
      context: x,
      abortEarly: _ = o.spec.abortEarly,
      disableStackTrace: p = o.spec.disableStackTrace
    } = a;
    const T = {
      value: r,
      parent: v,
      context: x
    };
    function S(I = {}) {
      const D = Tn(Object.assign({
        value: r,
        originalValue: s,
        label: o.spec.label,
        path: I.path || n,
        spec: o.spec,
        disableStackTrace: I.disableStackTrace || p
      }, m, I.params), T), V = new ue(ue.formatError(I.message || h, D), r, D.path, I.type || f, D.disableStackTrace);
      return V.params = D, V;
    }
    const F = _ ? c : u;
    let l = {
      path: n,
      parent: v,
      type: f,
      from: a.from,
      createError: S,
      resolve(I) {
        return En(I, T);
      },
      options: a,
      originalValue: s,
      schema: o
    };
    const j = (I) => {
      ue.isError(I) ? F(I) : I ? u(null) : F(S());
    }, $ = (I) => {
      ue.isError(I) ? F(I) : c(I);
    };
    if (y && Ne(r))
      return j(!0);
    let U;
    try {
      var z;
      if (U = d.call(l, r, l), typeof ((z = U) == null ? void 0 : z.then) == "function") {
        if (a.sync)
          throw new Error(`Validation test of type: "${l.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(U).then(j, $);
      }
    } catch (I) {
      $(I);
      return;
    }
    j(U);
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
function Ua(e, t, r, n = r) {
  let a, s, o;
  return t ? (De.forEach(t, (c, u, f) => {
    let d = u ? c.slice(1, c.length - 1) : c;
    e = e.resolve({
      context: n,
      parent: a,
      value: r
    });
    let m = e.type === "tuple", h = f ? parseInt(d, 10) : 0;
    if (e.innerType || m) {
      if (m && !f) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);
      if (r && h >= r.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${c}, in the path: ${t}. because there is no value at that index. `);
      a = r, r = r && r[h], e = m ? e.spec.types[h] : e.innerType;
    }
    if (!f) {
      if (!e.fields || !e.fields[d]) throw new Error(`The schema does not contain the path: ${t}. (failed at: ${o} which is a type: "${e.type}")`);
      a = r, r = r && r[d], e = e.fields[d];
    }
    s = d, o = u ? "[" + c + "]" : "." + c;
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
function Ka(e) {
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
    path: Ka(r)
  }));
}
function Sn(e, t) {
  var r;
  if (!((r = e.inner) != null && r.length) && e.errors.length)
    return qa(e, t);
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
    } = r, u = t;
    c || (u = this._cast(u, Object.assign({
      assert: !1
    }, r)));
    let f = [];
    for (let d of Object.values(this.internalTests))
      d && f.push(d);
    this.runTests({
      path: s,
      value: u,
      originalValue: o,
      options: r,
      tests: f
    }, n, (d) => {
      if (d.length)
        return a(d, u);
      this.runTests({
        path: s,
        value: u,
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
      path: u,
      options: f
    } = t, d = (x) => {
      a || (a = !0, r(x, o));
    }, m = (x) => {
      a || (a = !0, n(x, o));
    }, h = s.length, y = [];
    if (!h) return m([]);
    let v = {
      value: o,
      originalValue: c,
      path: u,
      options: f,
      schema: this
    };
    for (let x = 0; x < s.length; x++) {
      const _ = s[x];
      _(v, d, function(T) {
        T && (Array.isArray(T) ? y.push(...T) : y.push(T)), --h <= 0 && m(y);
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
    const u = typeof c == "number";
    let f = n[c];
    const d = Object.assign({}, o, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: !0,
      parent: n,
      value: f,
      originalValue: s[c],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [u ? "index" : "key"]: c,
      path: u || c.includes(".") ? `${a || ""}[${u ? c : `"${c}"`}]` : (a ? `${a}.` : "") + t
    });
    return (m, h, y) => this.resolve(d)._validate(f, d, h, y);
  }
  validate(t, r) {
    var n;
    let a = this.resolve(Object.assign({}, r, {
      value: t
    })), s = (n = r?.disableStackTrace) != null ? n : a.spec.disableStackTrace;
    return new Promise((o, c) => a._validate(t, r, (u, f) => {
      ue.isError(u) && (u.value = f), c(u);
    }, (u, f) => {
      u.length ? c(new ue(u, f, void 0, void 0, s)) : o(f);
    }));
  }
  validateSync(t, r) {
    var n;
    let a = this.resolve(Object.assign({}, r, {
      value: t
    })), s, o = (n = r?.disableStackTrace) != null ? n : a.spec.disableStackTrace;
    return a._validate(t, Object.assign({}, r, {
      sync: !0
    }), (c, u) => {
      throw ue.isError(c) && (c.value = u), c;
    }, (c, u) => {
      if (c.length) throw new ue(c, t, void 0, void 0, o);
      s = u;
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
    return n.internalTests.nullable = qe({
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
    return n.internalTests.optionality = qe({
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
    let n = this.clone(), a = qe(r), s = r.exclusive || r.name && n.exclusiveTests[r.name] === !0;
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
    return r.internalTests.typeError = qe({
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
    }), n.internalTests.whiteList = qe({
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
    }), n.internalTests.blacklist = qe({
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
      tests: r.tests.filter((u, f, d) => d.findIndex((m) => m.OPTIONS.name === u.OPTIONS.name) === f).map((u) => {
        const f = u.OPTIONS.params && t ? Tn(Object.assign({}, u.OPTIONS.params), t) : u.OPTIONS.params;
        return {
          name: u.OPTIONS.name,
          params: f
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
  } = Ua(this, t, r, n.context);
  return o[e](a && a[s], Object.assign({}, n, {
    parent: a,
    path: t
  }));
};
for (const e of ["equals", "is"]) ye.prototype[e] = ye.prototype.oneOf;
for (const e of ["not", "nope"]) ye.prototype[e] = ye.prototype.notOneOf;
const Ya = () => !0;
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
      check: Ya
    }, t));
  }
}
Xt.prototype = _n.prototype;
const Wa = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
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
  const n = Wa.exec(e);
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
let Za = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), Qa = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), Xa = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, Ja = "^\\d{4}-\\d{2}-\\d{2}", es = "\\d{2}:\\d{2}:\\d{2}", ts = "(([+-]\\d{2}(:?\\d{2})?)|Z)", rs = new RegExp(`${Ja}T${es}(\\.\\d+)?${ts}$`), ns = (e) => Ne(e) || e === e.trim(), as = {}.toString();
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
        return n === as ? t : n;
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
    return this.matches(Za, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = de.url) {
    return this.matches(Qa, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = de.uuid) {
    return this.matches(Xa, {
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
    } = t : r = t), this.matches(rs, {
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
      test: ns
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
let ss = (e) => e != +e;
function Et() {
  return new An();
}
class An extends ye {
  constructor() {
    super({
      type: "number",
      check(t) {
        return t instanceof Number && (t = t.valueOf()), typeof t == "number" && !ss(t);
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
let $n = /* @__PURE__ */ new Date(""), is = (e) => Object.prototype.toString.call(e) === "[object Date]";
function lr() {
  return new lt();
}
class lt extends ye {
  constructor() {
    super({
      type: "date",
      check(t) {
        return is(t) && !isNaN(t.getTime());
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
lt.INVALID_DATE = $n;
lr.prototype = lt.prototype;
lr.INVALID_DATE = $n;
function os(e, t = []) {
  let r = [], n = /* @__PURE__ */ new Set(), a = new Set(t.map(([o, c]) => `${o}-${c}`));
  function s(o, c) {
    let u = De.split(o)[0];
    n.add(u), a.has(`${c}-${u}`) || r.push([c, u]);
  }
  for (const o of Object.keys(e)) {
    let c = e[o];
    n.add(o), Le.isRef(c) && c.isSibling ? s(c.path, o) : Ft(c) && "deps" in c && c.deps.forEach((u) => s(u, o));
  }
  return Ra.array(Array.from(n), r).reverse();
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
const ls = (e, t) => {
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
const cs = On([]);
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
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = cs, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      t && this.shape(t);
    });
  }
  _cast(t, r = {}) {
    var n;
    let a = super._cast(t, r);
    if (a === void 0) return this.getDefault(r);
    if (!this._typeCheck(a)) return a;
    let s = this.fields, o = (n = r.stripUnknown) != null ? n : this.spec.noUnknown, c = [].concat(this._nodes, Object.keys(a).filter((m) => !this._nodes.includes(m))), u = {}, f = Object.assign({}, r, {
      parent: u,
      __validating: r.__validating || !1
    }), d = !1;
    for (const m of c) {
      let h = s[m], y = m in a, v = a[m];
      if (h) {
        let x;
        f.path = (r.path ? `${r.path}.` : "") + m, h = h.resolve({
          value: v,
          context: r.context,
          parent: u
        });
        let _ = h instanceof ye ? h.spec : void 0, p = _?.strict;
        if (_ != null && _.strip) {
          d = d || m in a;
          continue;
        }
        x = !r.__validating || !p ? h.cast(v, f) : v, x !== void 0 && (u[m] = x);
      } else y && !o && (u[m] = v);
      (y !== m in u || u[m] !== v) && (d = !0);
    }
    return d ? u : a;
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
    }, ...s], r.__validating = !0, r.originalValue = o, super._validate(t, r, n, (u, f) => {
      if (!c || !Or(f)) {
        a(u, f);
        return;
      }
      o = o || f;
      let d = [];
      for (let m of this._nodes) {
        let h = this.fields[m];
        !h || Le.isRef(h) || d.push(h.asNestedTest({
          options: r,
          key: m,
          parent: f,
          parentPath: r.path,
          originalParent: o
        }));
      }
      this.runTests({
        tests: d,
        value: f,
        originalValue: o,
        options: r
      }, n, (m) => {
        a(m.sort(this._sortErrors).concat(u), f);
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
    return n.fields = t, n._nodes = os(t, r), n._sortErrors = On(Object.keys(t)), r && (n._excludedEdges = r), n;
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
      return ls(s, t) && (o = Object.assign({}, s), n || delete o[t], o[r] = a(s)), o;
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
      const u = this.innerType.cast(o, Object.assign({}, r, {
        path: `${r.path || ""}[${c}]`,
        parent: n,
        originalValue: o,
        value: o,
        index: c
      }));
      return u !== o && (a = !0), u;
    });
    return a ? s : n;
  }
  _validate(t, r = {}, n, a) {
    var s;
    let o = this.innerType, c = (s = r.recursive) != null ? s : this.spec.recursive;
    r.originalValue != null && r.originalValue, super._validate(t, r, n, (u, f) => {
      var d;
      if (!c || !o || !this._typeCheck(f)) {
        a(u, f);
        return;
      }
      let m = new Array(f.length);
      for (let y = 0; y < f.length; y++) {
        var h;
        m[y] = o.asNestedTest({
          options: r,
          index: y,
          parent: f,
          parentPath: r.path,
          originalParent: (h = r.originalValue) != null ? h : t
        });
      }
      this.runTests({
        value: f,
        tests: m,
        originalValue: (d = r.originalValue) != null ? d : t,
        options: r
      }, n, (y) => a(y.concat(u), f));
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
const Pn = "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg", us = ["jpg", "jpeg", "png", "gif", "svg"], ds = ["mp4", "webm", "ogg"], fs = ["txt", "json", "csv"], hs = ["pdf"];
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
function $t(e, t = "create") {
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
) : e, Dn = (e) => {
  const t = Array.isArray(e?.data?.data) ? e.data.data[0] : Array.isArray(e?.data) ? e.data[0] : e?.data?.data ?? e?.data;
  return t && typeof t == "object" && !Array.isArray(t) ? t : null;
}, ve = (e, t, r, n) => {
  if (!Array.isArray(r) || r.length === 0) return {};
  const a = n ?? (r[0] && typeof r[0] == "object" && "category" in r[0] ? "category" : void 0);
  if (!a) {
    const o = {};
    return r.forEach((c) => {
      const u = c[e], f = c[t];
      u != null && f != null && (o[String(u)] = String(f));
    }), o;
  }
  const s = {};
  return r.forEach((o) => {
    const c = o[a] ?? "Others", u = o[e], f = o[t];
    u == null || f == null || (s[c] || (s[c] = {}), s[c][String(u)] = String(f));
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
const xs = (e) => e === !0 || e === "true", vs = (e, t, r, n) => {
  e.forEach((a) => {
    const s = a?.name;
    if (!s) return;
    let o = n?.[s];
    o == null && (o = a.default), a.multiple === !0 || a.type === "checkbox" || a.type === "tags" ? t[s] = Array.isArray(o) ? o : typeof o == "string" ? o.split(",").map((u) => u.trim()).filter(Boolean) : [] : a.type === "json" ? t[s] = typeof o == "object" && o !== null ? JSON.stringify(o, null, 2) : o ?? "" : a.type === "date" ? t[s] = typeof o == "string" ? o.slice(0, 10) : "" : a.type === "time" ? typeof o == "string" ? o.includes("T") ? t[s] = o.slice(11, 16) : t[s] = o.slice(0, 5) : t[s] = "" : s === "blocked" || s === "blacklist" ? t[s] = String(o ?? "false") : t[s] = o ?? "";
    let c;
    a.type === "file" ? c = a.multiple ? er().of(Xt()) : Xt() : a.multiple === !0 || a.type === "checkbox" || a.type === "tags" ? c = er().of(tt()) : a.type === "email" ? c = tt().email("Invalid email") : a.type === "number" ? c = Et().typeError("Must be a number") : a.type === "json" ? c = tt().test("json", "Invalid JSON", (u) => {
      if (!u) return !0;
      try {
        return JSON.parse(u), !0;
      } catch {
        return !1;
      }
    }) : c = tt(), a.required && (c = c.required(
      a.error_message || `${a.label || s} is required`
    )), a?.validate?.regex && typeof a.validate.regex == "string" && (c = c.matches(
      new RegExp(a?.validate?.regex),
      a?.error_message || "Invalid input format"
    )), a?.validate && Object.entries(a.validate).forEach(([u, f]) => {
      switch (u) {
        case "email":
          f && (c = c.email("Invalid email format"));
          break;
        case "mobile":
          c = c.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          c = c.matches(
            new RegExp(f),
            `Must match pattern: ${f}`
          );
          break;
        case "date":
          c = lr().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((d, m) => {
            if (typeof m == "string") {
              const h = m.replace(/-/g, "/"), [y, v, x] = h.split("/");
              if (y && v && x)
                return /* @__PURE__ */ new Date(`${x}-${v}-${y}`);
            }
            return d;
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
          c = Et().typeError("Must be a decimal").transform((d, m) => {
            if (m == null || m === "") return;
            const h = Number(m);
            if (isNaN(h)) return d;
            if (typeof d == "number" && !isNaN(d)) {
              const y = Number(d);
              return Number.isInteger(y) ? Number(h.toFixed(y)) : h;
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
            (d) => d && d.toUpperCase()
          );
          break;
        case "lower":
          c = c.transform(
            (d) => d && d.toLowerCase()
          );
          break;
        case "length-min": {
          const d = Number(f);
          isNaN(d) || (c = c.min(d, `Minimum length is ${d}`));
          break;
        }
        case "length-max": {
          const d = Number(f);
          isNaN(d) || (c = c.max(d, `Maximum length is ${d}`));
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
const Ir = (e, t) => {
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
async function We(e, t, r, n = void 0, a = void 0, s = {}) {
  try {
    let o = r;
    return o || (o = (await X({
      method: "POST",
      url: e.baseURL + e.registerQuery,
      data: { query: t, srcid: a },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    })).data.queryid), await X({
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
async function Ss({
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
    const { data: u } = await We(
      r,
      c,
      o.queryid,
      t
    ), f = Array.isArray(u?.data?.data) ? u.data.data : Array.isArray(u?.data) ? u.data : u, d = Array.isArray(f) ? f.map(me) : [], m = ve(
      e.valueKey ?? "value",
      e.labelKey ?? "title",
      d,
      e.groupKey
    );
    n(s.target, m);
  }
}
function _s(e) {
  if (typeof e == "string")
    return e.startsWith("data:image/") || e.startsWith("http") || e.startsWith("/") ? { type: "image", src: e } : null;
  if (!e || e.type !== "Buffer" || !Array.isArray(e.data)) return null;
  const t = new TextDecoder().decode(new Uint8Array(e.data)).trim();
  if (t.startsWith("data:image/"))
    return { type: "image", src: t };
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
function Mn(e = "") {
  return e.split(".").pop()?.toLowerCase() ?? "";
}
function kn(e) {
  return us.includes(e) ? "image" : ds.includes(e) ? "video" : hs.includes(e) ? "pdf" : fs.includes(e) ? "text" : "other";
}
const Rr = {
  image: "fa fa-file-image",
  pdf: "fa fa-file-pdf",
  video: "fa fa-file-video",
  text: "fa fa-file-lines",
  other: "fa fa-file"
}, Ns = ({ fileUrl: e }) => {
  if (!e) return null;
  const t = Mn(e), r = kn(t);
  return r === "image" ? /* @__PURE__ */ i.jsx("img", { src: e, className: "max-h-[80vh] mx-auto" }) : r === "pdf" || r === "text" ? /* @__PURE__ */ i.jsx("iframe", { src: e, className: "w-full h-[80vh]" }) : r === "video" ? /* @__PURE__ */ i.jsx("video", { controls: !0, className: "w-full max-h-[80vh]", children: /* @__PURE__ */ i.jsx("source", { src: e }) }) : /* @__PURE__ */ i.jsxs("div", { className: "text-center p-4", children: [
    /* @__PURE__ */ i.jsx("p", { children: "Preview not available" }),
    /* @__PURE__ */ i.jsx("a", { href: e, download: !0, className: "text-blue-600 underline", children: "Download file" })
  ] });
};
function As(e) {
  const t = Rr[e] ?? Rr.other;
  return /* @__PURE__ */ i.jsx("i", { className: `${t} text-2xl text-gray-600` });
}
const $s = ({ filePath: e, sqlOpsUrls: t }) => {
  const [r, n] = oe(!1), a = Mn(e), s = kn(a), o = As(s);
  let c = `${t?.baseURL}${String(e).startsWith("/") ? e : `/${e}`}`;
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        role: "button",
        tabIndex: 0,
        onClick: () => n(!0),
        onKeyDown: (u) => u.key === "Enter" && n(!0),
        className: "inline-flex cursor-pointer",
        children: [
          o,
          "   ",
          e?.split("/").pop()
        ]
      }
    ),
    r && /* @__PURE__ */ i.jsx("div", { className: "fixed inset-0 bg-black/60 z-50 flex items-center justify-center", children: /* @__PURE__ */ i.jsxs("div", { className: "bg-white rounded-lg p-4 max-w-5xl w-full", children: [
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "float-right text-sm",
          onClick: () => n(!1),
          children: "✕"
        }
      ),
      /* @__PURE__ */ i.jsx(Ns, { fileUrl: c })
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
  const u = e?.name, f = `
    text-sm text-gray-600 break-words
  `, d = `
    block text-sm font-semibold  transition-all duration-300 text-gray-700 capitalize
  `, [m, h] = oe(
    o ?? e.options ?? {}
  ), y = te.useRef(!1);
  te.useEffect(() => {
    o && h(o);
  }, [o]);
  const v = te.useMemo(
    () => Es(m),
    [m]
  );
  te.useEffect(() => {
    let l = !0, j = e.valueKey ?? "value", $ = e.labelKey ?? "title";
    return (async () => {
      if (e?.options) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const V = Object.values(e.options);
          if (V.length && typeof V[0] == "string") {
            h(e.options);
            return;
          }
        }
        const I = (Array.isArray(e.options) ? e.options : [e.options]).map(me), D = ve(
          j,
          $,
          I,
          e.groupKey
          // auto-uses `category` if present
        );
        h(D);
        return;
      }
      const U = e?.source ?? {};
      if (e.type === "dataMethod") {
        const z = e.method, I = z ? r[z] : void 0;
        if (I)
          try {
            const D = await Promise.resolve(I()), V = Array.isArray(D?.data?.data) ? D.data.data : Array.isArray(D?.data) ? D.data : D, Y = Array.isArray(V) ? V.map(me) : [], Z = ve(j, $, Y, e.groupKey);
            l && h(Z);
          } catch (D) {
            console.error("Method execution failed:", D), l && h({});
          }
        else
          l && h({});
      }
      if (U.type === "api" && U.url)
        try {
          const z = await X({
            method: U.method || "GET",
            url: U.url,
            data: U.body ?? {},
            params: U.params ?? {},
            headers: U.headers ?? {}
          }), I = Array.isArray(z?.data?.data) ? z.data.data : Array.isArray(z?.data) ? z.data : z, D = Array.isArray(I) ? I.map(me) : [], V = ve(j, $, D, e.groupKey);
          l && h(V);
        } catch (z) {
          console.error("API execution failed:", z), l && h({});
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
              where: e.where ? a ? he(e.where, { refid: a }) : e.where : void 0
            };
          }
          const I = await We(n, z, e?.queryid, void 0, s), D = Array.isArray(I?.data?.data) ? I.data.data : Array.isArray(I?.data) ? I.data : I, V = Array.isArray(D) ? D.map(me) : [], Y = ve(j, $, V, e.groupKey);
          l && h(Y);
        } catch (z) {
          console.error("API fetch failed:", z);
        }
      }
    })(), () => {
      l = !1;
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
  te.useEffect(() => {
    y.current || !c || !x || (y.current = !0, Ss({
      field: e,
      value: x,
      sqlOpsUrls: n,
      setFieldOptions: c
    }));
  }, [x, n, c]);
  const _ = typeof u == "string" ? t?.[u] : void 0;
  let p;
  typeof _ == "string" ? e.type === "date" ? p = _.split("T")[0] : e.type === "time" ? p = _.includes("T") ? _.slice(11, 16) : _.slice(0, 5) : p = Cr(_, v) : p = Cr(_, v);
  const T = p == null ? "" : typeof p == "string" || typeof p == "number" ? p : JSON.stringify(p), S = _s(_), F = `${n?.baseURL}${String(p).startsWith("/") ? p : `/${p}`}`;
  return /* @__PURE__ */ i.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ i.jsx("label", { className: d, children: e?.label }),
    /* @__PURE__ */ i.jsx("div", { className: "relative", children: S ? S.type === "drawn" ? /* @__PURE__ */ i.jsx("svg", { viewBox: "0 0 300 150", className: "h-24 w-full border bg-white rounded", children: S.paths.map((l, j) => /* @__PURE__ */ i.jsx(
      "path",
      {
        d: l.d,
        stroke: l.color || "#000",
        strokeWidth: l.width || 2,
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      j
    )) }) : S.type === "text" ? /* @__PURE__ */ i.jsx("svg", { viewBox: "0 0 300 150", className: "h-24 w-full border bg-white rounded", children: /* @__PURE__ */ i.jsx(
      "text",
      {
        x: "10",
        y: "100",
        fontSize: S.data.style?.fontSize || 32,
        fontFamily: S.data.style?.fontFamily || "cursive",
        fill: S.data.style?.textColor || "#000",
        children: S.data.text
      }
    ) }) : S.type === "html" ? /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "border bg-white rounded p-2 text-sm",
        dangerouslySetInnerHTML: { __html: S.html }
      }
    ) : /* @__PURE__ */ i.jsx(
      "img",
      {
        src: S.src,
        alt: "signature",
        className: "h-24 object-contain border bg-white rounded"
      }
    ) : e.type === "photo" || e.type === "avatar" ? /* @__PURE__ */ i.jsx(
      "img",
      {
        src: F,
        alt: "image",
        className: "w-16 h-16 rounded-full object-cover border",
        onError: (l) => l.currentTarget.src = Pn
      }
    ) : e.type === "file" ? /* @__PURE__ */ i.jsx($s, { sqlOpsUrls: n, filePath: String(p) }) : /* @__PURE__ */ i.jsx("p", { className: f, children: T }) })
  ] });
}
function Os({ commonInfo: e, infoData: t, hiddenFields: r = [] }) {
  return /* @__PURE__ */ i.jsx("div", { className: "bg-white border border-gray-100 p-4 min-h-3/10 overflow-auto", children: /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    /* @__PURE__ */ i.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ i.jsx("div", { className: "relative w-42 h-42", children: /* @__PURE__ */ i.jsx(
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
    /* @__PURE__ */ i.jsx("div", { className: "lg:col-span-10 min-h-0 max-h-40  overflow-y-auto custom-scrollbar", children: /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-12 gap-2", children: e.fields?.map((n, a) => {
      const s = t?.[n.name];
      return r.includes(n.name) || !s && s !== !1 && s !== 0 ? null : /* @__PURE__ */ i.jsx("div", { className: `hover:bg-gray-100 transition-colors duration-200 col-span-12 sm:col-span-6 ${ct[ut(n.width)] || "lg:col-span-4"}`, children: /* @__PURE__ */ i.jsx(
        dt,
        {
          field: n,
          data: t ?? {}
        },
        n?.name || a
      ) }, n.name);
    }) }) })
  ] }) });
}
function cr({ tabObj: e, methods: t, tabName: r, sqlOpsUrls: n, refid: a, module_refid: s }) {
  const [o, c] = te.useState(null);
  return te.useEffect(() => {
    let u = !1;
    return (async () => {
      const d = e?.config;
      if (!d?.type) {
        u || c(null);
        return;
      }
      if (d.type === "method") {
        const m = d.method, h = m ? t[m] : void 0;
        if (h)
          try {
            const y = await Promise.resolve(h());
            u || c(y || null);
          } catch (y) {
            console.error("Method execution failed:", y), u || c(null);
          }
        else
          u || c(null);
      }
      if (d.type === "api")
        try {
          const m = await X({
            method: d.method || "GET",
            // GET, POST, etc.
            url: d.url,
            data: d.body || {},
            // request body
            params: d.params || {},
            // query params
            headers: d.headers || {}
            // optional headers
          });
          u || c(m.data || null);
        } catch (m) {
          console.error("API fetch failed:", m), u || c(null);
        }
      if (d.type === "sql" && a && a != "0" || d?.dbopsid) {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let m = !1, h;
          d?.dbopsid && (m = !0, h = d?.dbopsid);
          const y = await X({
            method: "GET",
            url: n.baseURL + n.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          });
          if (!m) {
            let _ = {
              ...d
            };
            d.where && (_ = {
              ...d,
              where: he(d.where, {
                refid: a
              })
            }), h = (await X({
              method: "POST",
              url: n.baseURL + n.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: _,
                fields: $t(d.fields, n.operation),
                forcefill: d.forcefill,
                datahash: y.data.refhash,
                srcid: s
              },
              headers: {
                Authorization: `Bearer ${n?.accessToken}`
              }
            }))?.data.refid;
          }
          const v = await X({
            method: "POST",
            url: n.baseURL + n.dbopsFetch,
            data: {
              refid: h,
              datahash: y.data.refhash
            },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }), x = Dn(v);
          u || c(x);
        } catch (m) {
          console.error("API fetch failed:", m);
        }
      }
    })(), () => {
      u = !0;
    };
  }, [
    e?.config?.type || "",
    e?.config?.method || "",
    e?.config?.url || "",
    JSON.stringify(e?.config?.params || {}),
    JSON.stringify(e?.config?.body || {}),
    JSON.stringify(e?.config?.headers || {})
  ]), /* @__PURE__ */ i.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-12 gap-2", children: o ? Object.keys(o).map((u, f) => /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${ct[ut(e.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ i.jsx(
        dt,
        {
          field: { name: u, label: u },
          data: o ?? {},
          methods: t,
          refid: a,
          ...n ? { sqlOpsUrls: n } : {}
        },
        u
      )
    },
    `field-${f}`
  )) : /* @__PURE__ */ i.jsx("div", { className: "col-span-12 flex flex-col  min-h-0", children: /* @__PURE__ */ i.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center text-gray-500", children: [
    /* @__PURE__ */ i.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ i.jsxs("svg", { className: "w-8 h-8 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
      /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" }),
      /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m8 7 4-4 4 4" })
    ] }) }),
    /* @__PURE__ */ i.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No Data Available" }),
    /* @__PURE__ */ i.jsx("p", { className: "text-sm text-gray-500 text-center max-w-sm", children: "There are no records to display  at the moment." })
  ] }) }) }) });
}
function Fs({
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
var Cs = function(t) {
  return Is(t) && !Rs(t);
};
function Is(e) {
  return !!e && typeof e == "object";
}
function Rs(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || Ms(e);
}
var Ps = typeof Symbol == "function" && Symbol.for, Ds = Ps ? Symbol.for("react.element") : 60103;
function Ms(e) {
  return e.$$typeof === Ds;
}
function ks(e) {
  return Array.isArray(e) ? [] : {};
}
function Ot(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? st(ks(e), e, t) : e;
}
function Ls(e, t, r) {
  return e.concat(t).map(function(n) {
    return Ot(n, r);
  });
}
function zs(e, t, r) {
  var n = {};
  return r.isMergeableObject(e) && Object.keys(e).forEach(function(a) {
    n[a] = Ot(e[a], r);
  }), Object.keys(t).forEach(function(a) {
    !r.isMergeableObject(t[a]) || !e[a] ? n[a] = Ot(t[a], r) : n[a] = st(e[a], t[a], r);
  }), n;
}
function st(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || Ls, r.isMergeableObject = r.isMergeableObject || Cs;
  var n = Array.isArray(t), a = Array.isArray(e), s = n === a;
  return s ? n ? r.arrayMerge(e, t, r) : zs(e, t, r) : Ot(t, r);
}
st.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(n, a) {
    return st(n, a, r);
  }, {});
};
var rr = st, Ln = typeof global == "object" && global && global.Object === Object && global, Vs = typeof self == "object" && self && self.Object === Object && self, Ee = Ln || Vs || Function("return this")(), Fe = Ee.Symbol, zn = Object.prototype, Bs = zn.hasOwnProperty, Gs = zn.toString, et = Fe ? Fe.toStringTag : void 0;
function Us(e) {
  var t = Bs.call(e, et), r = e[et];
  try {
    e[et] = void 0;
    var n = !0;
  } catch {
  }
  var a = Gs.call(e);
  return n && (t ? e[et] = r : delete e[et]), a;
}
var Ks = Object.prototype, qs = Ks.toString;
function Ys(e) {
  return qs.call(e);
}
var Ws = "[object Null]", Hs = "[object Undefined]", Pr = Fe ? Fe.toStringTag : void 0;
function ze(e) {
  return e == null ? e === void 0 ? Hs : Ws : Pr && Pr in Object(e) ? Us(e) : Ys(e);
}
function Vn(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var ur = Vn(Object.getPrototypeOf, Object);
function Ve(e) {
  return e != null && typeof e == "object";
}
var Zs = "[object Object]", Qs = Function.prototype, Xs = Object.prototype, Bn = Qs.toString, Js = Xs.hasOwnProperty, ei = Bn.call(Object);
function Dr(e) {
  if (!Ve(e) || ze(e) != Zs)
    return !1;
  var t = ur(e);
  if (t === null)
    return !0;
  var r = Js.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Bn.call(r) == ei;
}
function ti() {
  this.__data__ = [], this.size = 0;
}
function Gn(e, t) {
  return e === t || e !== e && t !== t;
}
function Ct(e, t) {
  for (var r = e.length; r--; )
    if (Gn(e[r][0], t))
      return r;
  return -1;
}
var ri = Array.prototype, ni = ri.splice;
function ai(e) {
  var t = this.__data__, r = Ct(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : ni.call(t, r, 1), --this.size, !0;
}
function si(e) {
  var t = this.__data__, r = Ct(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function ii(e) {
  return Ct(this.__data__, e) > -1;
}
function oi(e, t) {
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
$e.prototype.clear = ti;
$e.prototype.delete = ai;
$e.prototype.get = si;
$e.prototype.has = ii;
$e.prototype.set = oi;
function li() {
  this.__data__ = new $e(), this.size = 0;
}
function ci(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function ui(e) {
  return this.__data__.get(e);
}
function di(e) {
  return this.__data__.has(e);
}
function ft(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var fi = "[object AsyncFunction]", hi = "[object Function]", pi = "[object GeneratorFunction]", mi = "[object Proxy]";
function Un(e) {
  if (!ft(e))
    return !1;
  var t = ze(e);
  return t == hi || t == pi || t == fi || t == mi;
}
var Gt = Ee["__core-js_shared__"], Mr = function() {
  var e = /[^.]+$/.exec(Gt && Gt.keys && Gt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function yi(e) {
  return !!Mr && Mr in e;
}
var gi = Function.prototype, bi = gi.toString;
function Be(e) {
  if (e != null) {
    try {
      return bi.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var xi = /[\\^$.*+?()[\]{}|]/g, vi = /^\[object .+?Constructor\]$/, wi = Function.prototype, ji = Object.prototype, Ti = wi.toString, Ei = ji.hasOwnProperty, Si = RegExp(
  "^" + Ti.call(Ei).replace(xi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function _i(e) {
  if (!ft(e) || yi(e))
    return !1;
  var t = Un(e) ? Si : vi;
  return t.test(Be(e));
}
function Ni(e, t) {
  return e?.[t];
}
function Ge(e, t) {
  var r = Ni(e, t);
  return _i(r) ? r : void 0;
}
var it = Ge(Ee, "Map"), ot = Ge(Object, "create");
function Ai() {
  this.__data__ = ot ? ot(null) : {}, this.size = 0;
}
function $i(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Oi = "__lodash_hash_undefined__", Fi = Object.prototype, Ci = Fi.hasOwnProperty;
function Ii(e) {
  var t = this.__data__;
  if (ot) {
    var r = t[e];
    return r === Oi ? void 0 : r;
  }
  return Ci.call(t, e) ? t[e] : void 0;
}
var Ri = Object.prototype, Pi = Ri.hasOwnProperty;
function Di(e) {
  var t = this.__data__;
  return ot ? t[e] !== void 0 : Pi.call(t, e);
}
var Mi = "__lodash_hash_undefined__";
function ki(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ot && t === void 0 ? Mi : t, this;
}
function ke(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ke.prototype.clear = Ai;
ke.prototype.delete = $i;
ke.prototype.get = Ii;
ke.prototype.has = Di;
ke.prototype.set = ki;
function Li() {
  this.size = 0, this.__data__ = {
    hash: new ke(),
    map: new (it || $e)(),
    string: new ke()
  };
}
function zi(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function It(e, t) {
  var r = e.__data__;
  return zi(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Vi(e) {
  var t = It(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Bi(e) {
  return It(this, e).get(e);
}
function Gi(e) {
  return It(this, e).has(e);
}
function Ui(e, t) {
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
Ce.prototype.clear = Li;
Ce.prototype.delete = Vi;
Ce.prototype.get = Bi;
Ce.prototype.has = Gi;
Ce.prototype.set = Ui;
var Ki = 200;
function qi(e, t) {
  var r = this.__data__;
  if (r instanceof $e) {
    var n = r.__data__;
    if (!it || n.length < Ki - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Ce(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Qe(e) {
  var t = this.__data__ = new $e(e);
  this.size = t.size;
}
Qe.prototype.clear = li;
Qe.prototype.delete = ci;
Qe.prototype.get = ui;
Qe.prototype.has = di;
Qe.prototype.set = qi;
function Yi(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var kr = function() {
  try {
    var e = Ge(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function Kn(e, t, r) {
  t == "__proto__" && kr ? kr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Wi = Object.prototype, Hi = Wi.hasOwnProperty;
function qn(e, t, r) {
  var n = e[t];
  (!(Hi.call(e, t) && Gn(n, r)) || r === void 0 && !(t in e)) && Kn(e, t, r);
}
function Rt(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var s = -1, o = t.length; ++s < o; ) {
    var c = t[s], u = void 0;
    u === void 0 && (u = e[c]), a ? Kn(r, c, u) : qn(r, c, u);
  }
  return r;
}
function Zi(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Qi = "[object Arguments]";
function Lr(e) {
  return Ve(e) && ze(e) == Qi;
}
var Yn = Object.prototype, Xi = Yn.hasOwnProperty, Ji = Yn.propertyIsEnumerable, eo = Lr(/* @__PURE__ */ function() {
  return arguments;
}()) ? Lr : function(e) {
  return Ve(e) && Xi.call(e, "callee") && !Ji.call(e, "callee");
}, ht = Array.isArray;
function to() {
  return !1;
}
var Wn = typeof exports == "object" && exports && !exports.nodeType && exports, zr = Wn && typeof module == "object" && module && !module.nodeType && module, ro = zr && zr.exports === Wn, Vr = ro ? Ee.Buffer : void 0, no = Vr ? Vr.isBuffer : void 0, Hn = no || to, ao = 9007199254740991, so = /^(?:0|[1-9]\d*)$/;
function io(e, t) {
  var r = typeof e;
  return t = t ?? ao, !!t && (r == "number" || r != "symbol" && so.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var oo = 9007199254740991;
function Zn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= oo;
}
var lo = "[object Arguments]", co = "[object Array]", uo = "[object Boolean]", fo = "[object Date]", ho = "[object Error]", po = "[object Function]", mo = "[object Map]", yo = "[object Number]", go = "[object Object]", bo = "[object RegExp]", xo = "[object Set]", vo = "[object String]", wo = "[object WeakMap]", jo = "[object ArrayBuffer]", To = "[object DataView]", Eo = "[object Float32Array]", So = "[object Float64Array]", _o = "[object Int8Array]", No = "[object Int16Array]", Ao = "[object Int32Array]", $o = "[object Uint8Array]", Oo = "[object Uint8ClampedArray]", Fo = "[object Uint16Array]", Co = "[object Uint32Array]", ee = {};
ee[Eo] = ee[So] = ee[_o] = ee[No] = ee[Ao] = ee[$o] = ee[Oo] = ee[Fo] = ee[Co] = !0;
ee[lo] = ee[co] = ee[jo] = ee[uo] = ee[To] = ee[fo] = ee[ho] = ee[po] = ee[mo] = ee[yo] = ee[go] = ee[bo] = ee[xo] = ee[vo] = ee[wo] = !1;
function Io(e) {
  return Ve(e) && Zn(e.length) && !!ee[ze(e)];
}
function dr(e) {
  return function(t) {
    return e(t);
  };
}
var Qn = typeof exports == "object" && exports && !exports.nodeType && exports, rt = Qn && typeof module == "object" && module && !module.nodeType && module, Ro = rt && rt.exports === Qn, Ut = Ro && Ln.process, Ze = function() {
  try {
    var e = rt && rt.require && rt.require("util").types;
    return e || Ut && Ut.binding && Ut.binding("util");
  } catch {
  }
}(), Br = Ze && Ze.isTypedArray, Po = Br ? dr(Br) : Io, Do = Object.prototype, Mo = Do.hasOwnProperty;
function Xn(e, t) {
  var r = ht(e), n = !r && eo(e), a = !r && !n && Hn(e), s = !r && !n && !a && Po(e), o = r || n || a || s, c = o ? Zi(e.length, String) : [], u = c.length;
  for (var f in e)
    (t || Mo.call(e, f)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    io(f, u))) && c.push(f);
  return c;
}
var ko = Object.prototype;
function fr(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || ko;
  return e === r;
}
var Lo = Vn(Object.keys, Object), zo = Object.prototype, Vo = zo.hasOwnProperty;
function Bo(e) {
  if (!fr(e))
    return Lo(e);
  var t = [];
  for (var r in Object(e))
    Vo.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function Jn(e) {
  return e != null && Zn(e.length) && !Un(e);
}
function hr(e) {
  return Jn(e) ? Xn(e) : Bo(e);
}
function Go(e, t) {
  return e && Rt(t, hr(t), e);
}
function Uo(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Ko = Object.prototype, qo = Ko.hasOwnProperty;
function Yo(e) {
  if (!ft(e))
    return Uo(e);
  var t = fr(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !qo.call(e, n)) || r.push(n);
  return r;
}
function pr(e) {
  return Jn(e) ? Xn(e, !0) : Yo(e);
}
function Wo(e, t) {
  return e && Rt(t, pr(t), e);
}
var ea = typeof exports == "object" && exports && !exports.nodeType && exports, Gr = ea && typeof module == "object" && module && !module.nodeType && module, Ho = Gr && Gr.exports === ea, Ur = Ho ? Ee.Buffer : void 0, Kr = Ur ? Ur.allocUnsafe : void 0;
function Zo(e, t) {
  if (t)
    return e.slice();
  var r = e.length, n = Kr ? Kr(r) : new e.constructor(r);
  return e.copy(n), n;
}
function ta(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
function Qo(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, s = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (s[a++] = o);
  }
  return s;
}
function ra() {
  return [];
}
var Xo = Object.prototype, Jo = Xo.propertyIsEnumerable, qr = Object.getOwnPropertySymbols, mr = qr ? function(e) {
  return e == null ? [] : (e = Object(e), Qo(qr(e), function(t) {
    return Jo.call(e, t);
  }));
} : ra;
function el(e, t) {
  return Rt(e, mr(e), t);
}
function na(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var tl = Object.getOwnPropertySymbols, aa = tl ? function(e) {
  for (var t = []; e; )
    na(t, mr(e)), e = ur(e);
  return t;
} : ra;
function rl(e, t) {
  return Rt(e, aa(e), t);
}
function sa(e, t, r) {
  var n = t(e);
  return ht(e) ? n : na(n, r(e));
}
function nl(e) {
  return sa(e, hr, mr);
}
function al(e) {
  return sa(e, pr, aa);
}
var nr = Ge(Ee, "DataView"), ar = Ge(Ee, "Promise"), sr = Ge(Ee, "Set"), ir = Ge(Ee, "WeakMap"), Yr = "[object Map]", sl = "[object Object]", Wr = "[object Promise]", Hr = "[object Set]", Zr = "[object WeakMap]", Qr = "[object DataView]", il = Be(nr), ol = Be(it), ll = Be(ar), cl = Be(sr), ul = Be(ir), _e = ze;
(nr && _e(new nr(new ArrayBuffer(1))) != Qr || it && _e(new it()) != Yr || ar && _e(ar.resolve()) != Wr || sr && _e(new sr()) != Hr || ir && _e(new ir()) != Zr) && (_e = function(e) {
  var t = ze(e), r = t == sl ? e.constructor : void 0, n = r ? Be(r) : "";
  if (n)
    switch (n) {
      case il:
        return Qr;
      case ol:
        return Yr;
      case ll:
        return Wr;
      case cl:
        return Hr;
      case ul:
        return Zr;
    }
  return t;
});
var dl = Object.prototype, fl = dl.hasOwnProperty;
function hl(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && fl.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var Xr = Ee.Uint8Array;
function yr(e) {
  var t = new e.constructor(e.byteLength);
  return new Xr(t).set(new Xr(e)), t;
}
function pl(e, t) {
  var r = t ? yr(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var ml = /\w*$/;
function yl(e) {
  var t = new e.constructor(e.source, ml.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Jr = Fe ? Fe.prototype : void 0, en = Jr ? Jr.valueOf : void 0;
function gl(e) {
  return en ? Object(en.call(e)) : {};
}
function bl(e, t) {
  var r = t ? yr(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var xl = "[object Boolean]", vl = "[object Date]", wl = "[object Map]", jl = "[object Number]", Tl = "[object RegExp]", El = "[object Set]", Sl = "[object String]", _l = "[object Symbol]", Nl = "[object ArrayBuffer]", Al = "[object DataView]", $l = "[object Float32Array]", Ol = "[object Float64Array]", Fl = "[object Int8Array]", Cl = "[object Int16Array]", Il = "[object Int32Array]", Rl = "[object Uint8Array]", Pl = "[object Uint8ClampedArray]", Dl = "[object Uint16Array]", Ml = "[object Uint32Array]";
function kl(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case Nl:
      return yr(e);
    case xl:
    case vl:
      return new n(+e);
    case Al:
      return pl(e, r);
    case $l:
    case Ol:
    case Fl:
    case Cl:
    case Il:
    case Rl:
    case Pl:
    case Dl:
    case Ml:
      return bl(e, r);
    case wl:
      return new n();
    case jl:
    case Sl:
      return new n(e);
    case Tl:
      return yl(e);
    case El:
      return new n();
    case _l:
      return gl(e);
  }
}
var tn = Object.create, Ll = /* @__PURE__ */ function() {
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
function zl(e) {
  return typeof e.constructor == "function" && !fr(e) ? Ll(ur(e)) : {};
}
var Vl = "[object Map]";
function Bl(e) {
  return Ve(e) && _e(e) == Vl;
}
var rn = Ze && Ze.isMap, Gl = rn ? dr(rn) : Bl, Ul = "[object Set]";
function Kl(e) {
  return Ve(e) && _e(e) == Ul;
}
var nn = Ze && Ze.isSet, ql = nn ? dr(nn) : Kl, Yl = 1, Wl = 2, Hl = 4, ia = "[object Arguments]", Zl = "[object Array]", Ql = "[object Boolean]", Xl = "[object Date]", Jl = "[object Error]", oa = "[object Function]", ec = "[object GeneratorFunction]", tc = "[object Map]", rc = "[object Number]", la = "[object Object]", nc = "[object RegExp]", ac = "[object Set]", sc = "[object String]", ic = "[object Symbol]", oc = "[object WeakMap]", lc = "[object ArrayBuffer]", cc = "[object DataView]", uc = "[object Float32Array]", dc = "[object Float64Array]", fc = "[object Int8Array]", hc = "[object Int16Array]", pc = "[object Int32Array]", mc = "[object Uint8Array]", yc = "[object Uint8ClampedArray]", gc = "[object Uint16Array]", bc = "[object Uint32Array]", J = {};
J[ia] = J[Zl] = J[lc] = J[cc] = J[Ql] = J[Xl] = J[uc] = J[dc] = J[fc] = J[hc] = J[pc] = J[tc] = J[rc] = J[la] = J[nc] = J[ac] = J[sc] = J[ic] = J[mc] = J[yc] = J[gc] = J[bc] = !0;
J[Jl] = J[oa] = J[oc] = !1;
function nt(e, t, r, n, a, s) {
  var o, c = t & Yl, u = t & Wl, f = t & Hl;
  if (o !== void 0)
    return o;
  if (!ft(e))
    return e;
  var d = ht(e);
  if (d) {
    if (o = hl(e), !c)
      return ta(e, o);
  } else {
    var m = _e(e), h = m == oa || m == ec;
    if (Hn(e))
      return Zo(e, c);
    if (m == la || m == ia || h && !a) {
      if (o = u || h ? {} : zl(e), !c)
        return u ? rl(e, Wo(o, e)) : el(e, Go(o, e));
    } else {
      if (!J[m])
        return a ? e : {};
      o = kl(e, m, c);
    }
  }
  s || (s = new Qe());
  var y = s.get(e);
  if (y)
    return y;
  s.set(e, o), ql(e) ? e.forEach(function(_) {
    o.add(nt(_, t, r, _, e, s));
  }) : Gl(e) && e.forEach(function(_, p) {
    o.set(p, nt(_, t, r, p, e, s));
  });
  var v = f ? u ? al : nl : u ? pr : hr, x = d ? void 0 : v(e);
  return Yi(x || e, function(_, p) {
    x && (p = _, _ = e[p]), qn(o, p, nt(_, t, r, p, e, s));
  }), o;
}
var xc = 1, vc = 4;
function bt(e) {
  return nt(e, xc | vc);
}
var Kt, an;
function wc() {
  if (an) return Kt;
  an = 1;
  var e = Array.isArray, t = Object.keys, r = Object.prototype.hasOwnProperty, n = typeof Element < "u";
  function a(s, o) {
    if (s === o) return !0;
    if (s && o && typeof s == "object" && typeof o == "object") {
      var c = e(s), u = e(o), f, d, m;
      if (c && u) {
        if (d = s.length, d != o.length) return !1;
        for (f = d; f-- !== 0; )
          if (!a(s[f], o[f])) return !1;
        return !0;
      }
      if (c != u) return !1;
      var h = s instanceof Date, y = o instanceof Date;
      if (h != y) return !1;
      if (h && y) return s.getTime() == o.getTime();
      var v = s instanceof RegExp, x = o instanceof RegExp;
      if (v != x) return !1;
      if (v && x) return s.toString() == o.toString();
      var _ = t(s);
      if (d = _.length, d !== t(o).length)
        return !1;
      for (f = d; f-- !== 0; )
        if (!r.call(o, _[f])) return !1;
      if (n && s instanceof Element && o instanceof Element)
        return s === o;
      for (f = d; f-- !== 0; )
        if (m = _[f], !(m === "_owner" && s.$$typeof) && !a(s[m], o[m]))
          return !1;
      return !0;
    }
    return s !== s && o !== o;
  }
  return Kt = function(o, c) {
    try {
      return a(o, c);
    } catch (u) {
      if (u.message && u.message.match(/stack|recursion/i) || u.number === -2146828260)
        return console.warn("Warning: react-fast-compare does not handle circular references.", u.name, u.message), !1;
      throw u;
    }
  }, Kt;
}
var jc = wc();
const Pe = /* @__PURE__ */ bn(jc);
var Tc = process.env.NODE_ENV === "production";
function He(e, t) {
  if (!Tc) {
    var r = "Warning: " + t;
    typeof console < "u" && console.warn(r);
    try {
      throw Error(r);
    } catch {
    }
  }
}
var Ec = 4;
function sn(e) {
  return nt(e, Ec);
}
function ca(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var Sc = "[object Symbol]";
function gr(e) {
  return typeof e == "symbol" || Ve(e) && ze(e) == Sc;
}
var _c = "Expected a function";
function br(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(_c);
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
var Nc = 500;
function Ac(e) {
  var t = br(e, function(n) {
    return r.size === Nc && r.clear(), n;
  }), r = t.cache;
  return t;
}
var $c = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Oc = /\\(\\)?/g, Fc = Ac(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace($c, function(r, n, a, s) {
    t.push(a ? s.replace(Oc, "$1") : n || r);
  }), t;
});
function Cc(e) {
  if (typeof e == "string" || gr(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var on = Fe ? Fe.prototype : void 0, ln = on ? on.toString : void 0;
function ua(e) {
  if (typeof e == "string")
    return e;
  if (ht(e))
    return ca(e, ua) + "";
  if (gr(e))
    return ln ? ln.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ic(e) {
  return e == null ? "" : ua(e);
}
function da(e) {
  return ht(e) ? ca(e, Cc) : gr(e) ? [e] : ta(Fc(Ic(e)));
}
var xt = { exports: {} }, W = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cn;
function Rc() {
  if (cn) return W;
  cn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, p = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function S(l) {
    if (typeof l == "object" && l !== null) {
      var j = l.$$typeof;
      switch (j) {
        case t:
          switch (l = l.type, l) {
            case u:
            case f:
            case n:
            case s:
            case a:
            case m:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case c:
                case d:
                case v:
                case y:
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
  function F(l) {
    return S(l) === f;
  }
  return W.AsyncMode = u, W.ConcurrentMode = f, W.ContextConsumer = c, W.ContextProvider = o, W.Element = t, W.ForwardRef = d, W.Fragment = n, W.Lazy = v, W.Memo = y, W.Portal = r, W.Profiler = s, W.StrictMode = a, W.Suspense = m, W.isAsyncMode = function(l) {
    return F(l) || S(l) === u;
  }, W.isConcurrentMode = F, W.isContextConsumer = function(l) {
    return S(l) === c;
  }, W.isContextProvider = function(l) {
    return S(l) === o;
  }, W.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === t;
  }, W.isForwardRef = function(l) {
    return S(l) === d;
  }, W.isFragment = function(l) {
    return S(l) === n;
  }, W.isLazy = function(l) {
    return S(l) === v;
  }, W.isMemo = function(l) {
    return S(l) === y;
  }, W.isPortal = function(l) {
    return S(l) === r;
  }, W.isProfiler = function(l) {
    return S(l) === s;
  }, W.isStrictMode = function(l) {
    return S(l) === a;
  }, W.isSuspense = function(l) {
    return S(l) === m;
  }, W.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === n || l === f || l === s || l === a || l === m || l === h || typeof l == "object" && l !== null && (l.$$typeof === v || l.$$typeof === y || l.$$typeof === o || l.$$typeof === c || l.$$typeof === d || l.$$typeof === _ || l.$$typeof === p || l.$$typeof === T || l.$$typeof === x);
  }, W.typeOf = S, W;
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
function Pc() {
  return un || (un = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, p = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function S(M) {
      return typeof M == "string" || typeof M == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      M === n || M === f || M === s || M === a || M === m || M === h || typeof M == "object" && M !== null && (M.$$typeof === v || M.$$typeof === y || M.$$typeof === o || M.$$typeof === c || M.$$typeof === d || M.$$typeof === _ || M.$$typeof === p || M.$$typeof === T || M.$$typeof === x);
    }
    function F(M) {
      if (typeof M == "object" && M !== null) {
        var Ue = M.$$typeof;
        switch (Ue) {
          case t:
            var Ke = M.type;
            switch (Ke) {
              case u:
              case f:
              case n:
              case s:
              case a:
              case m:
                return Ke;
              default:
                var pt = Ke && Ke.$$typeof;
                switch (pt) {
                  case c:
                  case d:
                  case v:
                  case y:
                  case o:
                    return pt;
                  default:
                    return Ue;
                }
            }
          case r:
            return Ue;
        }
      }
    }
    var l = u, j = f, $ = c, B = o, U = t, z = d, I = n, D = v, V = y, Y = r, Z = s, k = a, Q = m, w = !1;
    function N(M) {
      return w || (w = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), b(M) || F(M) === u;
    }
    function b(M) {
      return F(M) === f;
    }
    function E(M) {
      return F(M) === c;
    }
    function A(M) {
      return F(M) === o;
    }
    function P(M) {
      return typeof M == "object" && M !== null && M.$$typeof === t;
    }
    function C(M) {
      return F(M) === d;
    }
    function G(M) {
      return F(M) === n;
    }
    function ne(M) {
      return F(M) === v;
    }
    function le(M) {
      return F(M) === y;
    }
    function re(M) {
      return F(M) === r;
    }
    function pe(M) {
      return F(M) === s;
    }
    function we(M) {
      return F(M) === a;
    }
    function Ie(M) {
      return F(M) === m;
    }
    H.AsyncMode = l, H.ConcurrentMode = j, H.ContextConsumer = $, H.ContextProvider = B, H.Element = U, H.ForwardRef = z, H.Fragment = I, H.Lazy = D, H.Memo = V, H.Portal = Y, H.Profiler = Z, H.StrictMode = k, H.Suspense = Q, H.isAsyncMode = N, H.isConcurrentMode = b, H.isContextConsumer = E, H.isContextProvider = A, H.isElement = P, H.isForwardRef = C, H.isFragment = G, H.isLazy = ne, H.isMemo = le, H.isPortal = re, H.isProfiler = pe, H.isStrictMode = we, H.isSuspense = Ie, H.isValidElementType = S, H.typeOf = F;
  }()), H;
}
var dn;
function Dc() {
  return dn || (dn = 1, process.env.NODE_ENV === "production" ? xt.exports = Rc() : xt.exports = Pc()), xt.exports;
}
var qt, fn;
function Mc() {
  if (fn) return qt;
  fn = 1;
  var e = Dc(), t = {
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
  var c = Object.defineProperty, u = Object.getOwnPropertyNames, f = Object.getOwnPropertySymbols, d = Object.getOwnPropertyDescriptor, m = Object.getPrototypeOf, h = Object.prototype;
  function y(v, x, _) {
    if (typeof x != "string") {
      if (h) {
        var p = m(x);
        p && p !== h && y(v, p, _);
      }
      var T = u(x);
      f && (T = T.concat(f(x)));
      for (var S = o(v), F = o(x), l = 0; l < T.length; ++l) {
        var j = T[l];
        if (!r[j] && !(_ && _[j]) && !(F && F[j]) && !(S && S[j])) {
          var $ = d(x, j);
          try {
            c(v, j, $);
          } catch {
          }
        }
      }
    }
    return v;
  }
  return qt = y, qt;
}
Mc();
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
function fa(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, s;
  for (s = 0; s < n.length; s++)
    a = n[s], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var Pt = /* @__PURE__ */ ja(void 0);
Pt.displayName = "FormikContext";
Pt.Provider;
Pt.Consumer;
function kc() {
  var e = Sa(Pt);
  return e || (process.env.NODE_ENV !== "production" ? He(!1, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.") : He()), e;
}
var be = function(t) {
  return typeof t == "function";
}, Dt = function(t) {
  return t !== null && typeof t == "object";
}, Lc = function(t) {
  return String(Math.floor(Number(t))) === t;
}, Yt = function(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}, Wt = function(t) {
  return Dt(t) && be(t.then);
};
function zc(e) {
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
  for (var a = da(t); e && n < a.length; )
    e = e[a[n++]];
  return n !== a.length && !e || e === void 0 ? r : e;
}
function Me(e, t, r) {
  for (var n = sn(e), a = n, s = 0, o = da(t); s < o.length - 1; s++) {
    var c = o[s], u = fe(e, o.slice(0, s + 1));
    if (u && (Dt(u) || Array.isArray(u)))
      a = a[c] = sn(u);
    else {
      var f = o[s + 1];
      a = a[c] = Lc(f) && Number(f) >= 0 ? [] : {};
    }
  }
  return (s === 0 ? e : a)[o[s]] === r ? e : (r === void 0 ? delete a[o[s]] : a[o[s]] = r, s === 0 && r === void 0 && delete n[o[s]], n);
}
function ha(e, t, r, n) {
  r === void 0 && (r = /* @__PURE__ */ new WeakMap()), n === void 0 && (n = {});
  for (var a = 0, s = Object.keys(e); a < s.length; a++) {
    var o = s[a], c = e[o];
    Dt(c) ? r.get(c) || (r.set(c, !0), n[o] = Array.isArray(c) ? [] : {}, ha(c, t, r, n[o])) : n[o] = t;
  }
  return n;
}
function Vc(e, t) {
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
        touched: ha(e.values, !0),
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
function Bc(e) {
  var t = e.validateOnChange, r = t === void 0 ? !0 : t, n = e.validateOnBlur, a = n === void 0 ? !0 : n, s = e.validateOnMount, o = s === void 0 ? !1 : s, c = e.isInitialValid, u = e.enableReinitialize, f = u === void 0 ? !1 : u, d = e.onSubmit, m = fa(e, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]), h = ie({
    validateOnChange: r,
    validateOnBlur: a,
    validateOnMount: o,
    onSubmit: d
  }, m), y = xe(h.initialValues), v = xe(h.initialErrors || Re), x = xe(h.initialTouched || vt), _ = xe(h.initialStatus), p = xe(!1), T = xe({});
  process.env.NODE_ENV !== "production" && ce(function() {
    typeof c > "u" || (process.env.NODE_ENV !== "production" ? He(!1, "isInitialValid has been deprecated and will be removed in future versions of Formik. Please use initialErrors or validateOnMount instead.") : He());
  }, []), ce(function() {
    return p.current = !0, function() {
      p.current = !1;
    };
  }, []);
  var S = oe(0), F = S[1], l = xe({
    values: bt(h.initialValues),
    errors: bt(h.initialErrors) || Re,
    touched: bt(h.initialTouched) || vt,
    status: bt(h.initialStatus),
    isSubmitting: !1,
    isValidating: !1,
    submitCount: 0
  }), j = l.current, $ = ae(function(g) {
    var O = l.current;
    l.current = Vc(O, g), O !== l.current && F(function(R) {
      return R + 1;
    });
  }, []), B = ae(function(g, O) {
    return new Promise(function(R, L) {
      var K = h.validate(g, O);
      K == null ? R(Re) : Wt(K) ? K.then(function(q) {
        R(q || Re);
      }, function(q) {
        process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validate />", q), L(q);
      }) : R(K);
    });
  }, [h.validate]), U = ae(function(g, O) {
    var R = h.validationSchema, L = be(R) ? R(O) : R, K = O && L.validateAt ? L.validateAt(O, g) : Uc(g, L);
    return new Promise(function(q, se) {
      K.then(function() {
        q(Re);
      }, function(je) {
        je.name === "ValidationError" ? q(Gc(je)) : (process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validationSchema />", je), se(je));
      });
    });
  }, [h.validationSchema]), z = ae(function(g, O) {
    return new Promise(function(R) {
      return R(T.current[g].validate(O));
    });
  }, []), I = ae(function(g) {
    var O = Object.keys(T.current).filter(function(L) {
      return be(T.current[L].validate);
    }), R = O.length > 0 ? O.map(function(L) {
      return z(L, fe(g, L));
    }) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
    return Promise.all(R).then(function(L) {
      return L.reduce(function(K, q, se) {
        return q === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || q && (K = Me(K, O[se], q)), K;
      }, {});
    });
  }, [z]), D = ae(function(g) {
    return Promise.all([I(g), h.validationSchema ? U(g) : {}, h.validate ? B(g) : {}]).then(function(O) {
      var R = O[0], L = O[1], K = O[2], q = rr.all([R, L, K], {
        arrayMerge: Kc
      });
      return q;
    });
  }, [h.validate, h.validationSchema, I, B, U]), V = ge(function(g) {
    return g === void 0 && (g = j.values), $({
      type: "SET_ISVALIDATING",
      payload: !0
    }), D(g).then(function(O) {
      return p.current && ($({
        type: "SET_ISVALIDATING",
        payload: !1
      }), $({
        type: "SET_ERRORS",
        payload: O
      })), O;
    });
  });
  ce(function() {
    o && p.current === !0 && Pe(y.current, h.initialValues) && V(y.current);
  }, [o, V]);
  var Y = ae(function(g) {
    var O = g && g.values ? g.values : y.current, R = g && g.errors ? g.errors : v.current ? v.current : h.initialErrors || {}, L = g && g.touched ? g.touched : x.current ? x.current : h.initialTouched || {}, K = g && g.status ? g.status : _.current ? _.current : h.initialStatus;
    y.current = O, v.current = R, x.current = L, _.current = K;
    var q = function() {
      $({
        type: "RESET_FORM",
        payload: {
          isSubmitting: !!g && !!g.isSubmitting,
          errors: R,
          touched: L,
          status: K,
          values: O,
          isValidating: !!g && !!g.isValidating,
          submitCount: g && g.submitCount && typeof g.submitCount == "number" ? g.submitCount : 0
        }
      });
    };
    if (h.onReset) {
      var se = h.onReset(j.values, Ue);
      Wt(se) ? se.then(q) : q();
    } else
      q();
  }, [h.initialErrors, h.initialStatus, h.initialTouched, h.onReset]);
  ce(function() {
    p.current === !0 && !Pe(y.current, h.initialValues) && f && (y.current = h.initialValues, Y(), o && V(y.current));
  }, [f, h.initialValues, Y, o, V]), ce(function() {
    f && p.current === !0 && !Pe(v.current, h.initialErrors) && (v.current = h.initialErrors || Re, $({
      type: "SET_ERRORS",
      payload: h.initialErrors || Re
    }));
  }, [f, h.initialErrors]), ce(function() {
    f && p.current === !0 && !Pe(x.current, h.initialTouched) && (x.current = h.initialTouched || vt, $({
      type: "SET_TOUCHED",
      payload: h.initialTouched || vt
    }));
  }, [f, h.initialTouched]), ce(function() {
    f && p.current === !0 && !Pe(_.current, h.initialStatus) && (_.current = h.initialStatus, $({
      type: "SET_STATUS",
      payload: h.initialStatus
    }));
  }, [f, h.initialStatus, h.initialTouched]);
  var Z = ge(function(g) {
    if (T.current[g] && be(T.current[g].validate)) {
      var O = fe(j.values, g), R = T.current[g].validate(O);
      return Wt(R) ? ($({
        type: "SET_ISVALIDATING",
        payload: !0
      }), R.then(function(L) {
        return L;
      }).then(function(L) {
        $({
          type: "SET_FIELD_ERROR",
          payload: {
            field: g,
            value: L
          }
        }), $({
          type: "SET_ISVALIDATING",
          payload: !1
        });
      })) : ($({
        type: "SET_FIELD_ERROR",
        payload: {
          field: g,
          value: R
        }
      }), Promise.resolve(R));
    } else if (h.validationSchema)
      return $({
        type: "SET_ISVALIDATING",
        payload: !0
      }), U(j.values, g).then(function(L) {
        return L;
      }).then(function(L) {
        $({
          type: "SET_FIELD_ERROR",
          payload: {
            field: g,
            value: fe(L, g)
          }
        }), $({
          type: "SET_ISVALIDATING",
          payload: !1
        });
      });
    return Promise.resolve();
  }), k = ae(function(g, O) {
    var R = O.validate;
    T.current[g] = {
      validate: R
    };
  }, []), Q = ae(function(g) {
    delete T.current[g];
  }, []), w = ge(function(g, O) {
    $({
      type: "SET_TOUCHED",
      payload: g
    });
    var R = O === void 0 ? a : O;
    return R ? V(j.values) : Promise.resolve();
  }), N = ae(function(g) {
    $({
      type: "SET_ERRORS",
      payload: g
    });
  }, []), b = ge(function(g, O) {
    var R = be(g) ? g(j.values) : g;
    $({
      type: "SET_VALUES",
      payload: R
    });
    var L = O === void 0 ? r : O;
    return L ? V(R) : Promise.resolve();
  }), E = ae(function(g, O) {
    $({
      type: "SET_FIELD_ERROR",
      payload: {
        field: g,
        value: O
      }
    });
  }, []), A = ge(function(g, O, R) {
    var L = be(O) ? O(fe(j.values, g)) : O;
    $({
      type: "SET_FIELD_VALUE",
      payload: {
        field: g,
        value: L
      }
    });
    var K = R === void 0 ? r : R;
    return K ? V(Me(j.values, g, L)) : Promise.resolve();
  }), P = ae(function(g, O) {
    var R = O, L = g, K;
    if (!Yt(g)) {
      g.persist && g.persist();
      var q = g.target ? g.target : g.currentTarget, se = q.type, je = q.name, kt = q.id, Lt = q.value, xa = q.checked, va = q.outerHTML, vr = q.options, wa = q.multiple;
      R = O || je || kt, !R && process.env.NODE_ENV !== "production" && hn({
        htmlContent: va,
        documentationAnchorLink: "handlechange-e-reactchangeeventany--void",
        handlerName: "handleChange"
      }), L = /number|range/.test(se) ? (K = parseFloat(Lt), isNaN(K) ? "" : K) : /checkbox/.test(se) ? Yc(fe(j.values, R), xa, Lt) : vr && wa ? qc(vr) : Lt;
    }
    R && A(R, L);
  }, [A, j.values]), C = ge(function(g) {
    if (Yt(g))
      return function(O) {
        return P(O, g);
      };
    P(g);
  }), G = ge(function(g, O, R) {
    O === void 0 && (O = !0), $({
      type: "SET_FIELD_TOUCHED",
      payload: {
        field: g,
        value: O
      }
    });
    var L = R === void 0 ? a : R;
    return L ? V(j.values) : Promise.resolve();
  }), ne = ae(function(g, O) {
    g.persist && g.persist();
    var R = g.target, L = R.name, K = R.id, q = R.outerHTML, se = O || L || K;
    !se && process.env.NODE_ENV !== "production" && hn({
      htmlContent: q,
      documentationAnchorLink: "handleblur-e-any--void",
      handlerName: "handleBlur"
    }), G(se, !0);
  }, [G]), le = ge(function(g) {
    if (Yt(g))
      return function(O) {
        return ne(O, g);
      };
    ne(g);
  }), re = ae(function(g) {
    be(g) ? $({
      type: "SET_FORMIK_STATE",
      payload: g
    }) : $({
      type: "SET_FORMIK_STATE",
      payload: function() {
        return g;
      }
    });
  }, []), pe = ae(function(g) {
    $({
      type: "SET_STATUS",
      payload: g
    });
  }, []), we = ae(function(g) {
    $({
      type: "SET_ISSUBMITTING",
      payload: g
    });
  }, []), Ie = ge(function() {
    return $({
      type: "SUBMIT_ATTEMPT"
    }), V().then(function(g) {
      var O = g instanceof Error, R = !O && Object.keys(g).length === 0;
      if (R) {
        var L;
        try {
          if (L = Ke(), L === void 0)
            return;
        } catch (K) {
          throw K;
        }
        return Promise.resolve(L).then(function(K) {
          return p.current && $({
            type: "SUBMIT_SUCCESS"
          }), K;
        }).catch(function(K) {
          if (p.current)
            throw $({
              type: "SUBMIT_FAILURE"
            }), K;
        });
      } else if (p.current && ($({
        type: "SUBMIT_FAILURE"
      }), O))
        throw g;
    });
  }), M = ge(function(g) {
    if (g && g.preventDefault && be(g.preventDefault) && g.preventDefault(), g && g.stopPropagation && be(g.stopPropagation) && g.stopPropagation(), process.env.NODE_ENV !== "production" && typeof document < "u") {
      var O = zc();
      O !== null && O instanceof HTMLButtonElement && (O.attributes && O.attributes.getNamedItem("type") || (process.env.NODE_ENV !== "production" ? He(!1, 'You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type="submit"`. If this is not a submit button, please add `type="button"`.') : He()));
    }
    Ie().catch(function(R) {
      console.warn("Warning: An unhandled error was caught from submitForm()", R);
    });
  }), Ue = {
    resetForm: Y,
    validateForm: V,
    validateField: Z,
    setErrors: N,
    setFieldError: E,
    setFieldTouched: G,
    setFieldValue: A,
    setStatus: pe,
    setSubmitting: we,
    setTouched: w,
    setValues: b,
    setFormikState: re,
    submitForm: Ie
  }, Ke = ge(function() {
    return d(j.values, Ue);
  }), pt = ge(function(g) {
    g && g.preventDefault && be(g.preventDefault) && g.preventDefault(), g && g.stopPropagation && be(g.stopPropagation) && g.stopPropagation(), Y();
  }), pa = ae(function(g) {
    return {
      value: fe(j.values, g),
      error: fe(j.errors, g),
      touched: !!fe(j.touched, g),
      initialValue: fe(y.current, g),
      initialTouched: !!fe(x.current, g),
      initialError: fe(v.current, g)
    };
  }, [j.errors, j.touched, j.values]), ma = ae(function(g) {
    return {
      setValue: function(R, L) {
        return A(g, R, L);
      },
      setTouched: function(R, L) {
        return G(g, R, L);
      },
      setError: function(R) {
        return E(g, R);
      }
    };
  }, [A, G, E]), ya = ae(function(g) {
    var O = Dt(g), R = O ? g.name : g, L = fe(j.values, R), K = {
      name: R,
      value: L,
      onChange: C,
      onBlur: le
    };
    if (O) {
      var q = g.type, se = g.value, je = g.as, kt = g.multiple;
      q === "checkbox" ? se === void 0 ? K.checked = !!L : (K.checked = !!(Array.isArray(L) && ~L.indexOf(se)), K.value = se) : q === "radio" ? (K.checked = L === se, K.value = se) : je === "select" && kt && (K.value = K.value || [], K.multiple = !0);
    }
    return K;
  }, [le, C, j.values]), Mt = _t(function() {
    return !Pe(y.current, j.values);
  }, [y.current, j.values]), ga = _t(function() {
    return typeof c < "u" ? Mt ? j.errors && Object.keys(j.errors).length === 0 : c !== !1 && be(c) ? c(h) : c : j.errors && Object.keys(j.errors).length === 0;
  }, [c, Mt, j.errors, h]), ba = ie({}, j, {
    initialValues: y.current,
    initialErrors: v.current,
    initialTouched: x.current,
    initialStatus: _.current,
    handleBlur: le,
    handleChange: C,
    handleReset: pt,
    handleSubmit: M,
    resetForm: Y,
    setErrors: N,
    setFormikState: re,
    setFieldTouched: G,
    setFieldValue: A,
    setFieldError: E,
    setStatus: pe,
    setSubmitting: we,
    setTouched: w,
    setValues: b,
    submitForm: Ie,
    validateForm: V,
    validateField: Z,
    isValid: ga,
    dirty: Mt,
    unregisterField: Q,
    registerField: k,
    getFieldProps: ya,
    getFieldMeta: pa,
    getFieldHelpers: ma,
    validateOnBlur: a,
    validateOnChange: r,
    validateOnMount: o
  });
  return ba;
}
function hn(e) {
  var t = e.htmlContent, r = e.documentationAnchorLink, n = e.handlerName;
  console.warn("Warning: Formik called `" + n + "`, but you forgot to pass an `id` or `name` attribute to your input:\n    " + t + `
    Formik cannot determine which value to update. For more info see https://formik.org/docs/api/formik#` + r + `
  `);
}
function Gc(e) {
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
function Uc(e, t, r, n) {
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
function Kc(e, t, r) {
  var n = e.slice();
  return t.forEach(function(s, o) {
    if (typeof n[o] > "u") {
      var c = r.clone !== !1, u = c && r.isMergeableObject(s);
      n[o] = u ? rr(Array.isArray(s) ? [] : {}, s, r) : s;
    } else r.isMergeableObject(s) ? n[o] = rr(e[o], s, r) : e.indexOf(s) === -1 && n.push(s);
  }), n;
}
function qc(e) {
  return Array.from(e).filter(function(t) {
    return t.selected;
  }).map(function(t) {
    return t.value;
  });
}
function Yc(e, t, r) {
  if (typeof e == "boolean")
    return !!t;
  var n = [], a = !1, s = -1;
  if (Array.isArray(e))
    n = e, s = e.indexOf(r), a = s >= 0;
  else if (!r || r == "true" || r == "false")
    return !!t;
  return t && r && !a ? n.concat(r) : a ? n.slice(0, s).concat(n.slice(s + 1)) : n;
}
var Wc = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? gn : ce;
function ge(e) {
  var t = xe(e);
  return Wc(function() {
    t.current = e;
  }), ae(function() {
    for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return t.current.apply(void 0, n);
  }, []);
}
var Hc = /* @__PURE__ */ Ta(function(e, t) {
  var r = e.action, n = fa(e, ["action"]), a = r ?? "#", s = kc(), o = s.handleReset, c = s.handleSubmit;
  return Ea("form", ie({
    onSubmit: c,
    ref: t,
    onReset: o,
    action: a
  }, n));
});
Hc.displayName = "Form";
function wt({
  anchorRef: e,
  open: t,
  children: r,
  offset: n = 4
}) {
  const [a, s] = oe({});
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
  }, [t, e, n]), t ? _a(
    /* @__PURE__ */ i.jsx("div", { style: a, children: r }),
    document.body
  ) : null;
}
function Zc({
  field: e,
  formik: t,
  methods: r = {},
  sqlOpsUrls: n,
  refid: a,
  optionsOverride: s,
  setFieldOptions: o,
  module_refid: c
}) {
  const [u, f] = oe(!1), [d, m] = oe(
    s ?? e.options ?? {}
  ), [h, y] = oe(""), [v, x] = oe(0), _ = xe(null), [p, T] = oe(!1), S = te.useRef(h), F = xe(null);
  te.useEffect(() => {
    S.current = h;
  }, [h]), ce(() => {
    s && Object.keys(s).length !== 0 && m(s);
  }, [s]), ce(() => {
    if (!p) return;
    const k = (Q) => {
      const w = Q.target;
      F.current?.contains(w) || _.current?.contains(w) || (T(!1), y(""));
    };
    return document.addEventListener("mousedown", k), () => {
      document.removeEventListener("mousedown", k);
    };
  }, [p]);
  const l = e.name;
  te.useEffect(() => {
    let k = !0;
    return (async () => {
      let w = e.valueKey ?? "value", N = e.labelKey ?? "title";
      if (e?.options) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const C = Object.values(e.options);
          if (C.length && typeof C[0] == "string") {
            m(e.options);
            return;
          }
        }
        const A = (Array.isArray(e.options) ? e.options : [e.options]).map(me), P = ve(
          w,
          N,
          A,
          e.groupKey
          // auto-uses `category` if present
        );
        m(P);
        return;
      }
      const b = e?.source ?? {};
      if (e.type === "dataMethod") {
        const E = e.method, A = E ? r[E] : void 0;
        if (A)
          try {
            const P = await Promise.resolve(A()), C = Array.isArray(P?.data?.data) ? P.data.data : Array.isArray(P?.data) ? P.data : P, G = Array.isArray(C) ? C.map(me) : [], ne = ve(w, N, G, e.groupKey);
            k && m(ne);
          } catch (P) {
            console.error("Method execution failed:", P), k && m({});
          }
        else
          k && m({});
      }
      if (b.type === "api" && b.url)
        try {
          const E = await X({
            method: b.method || "GET",
            url: b.url,
            data: b.body ?? {},
            params: b.params ?? {},
            headers: b.headers ?? {}
          }), A = Array.isArray(E?.data?.data) ? E.data.data : Array.isArray(E?.data) ? E.data : E, P = Array.isArray(A) ? A.map(me) : [], C = ve(w, N, P, e.groupKey);
          k && m(C);
        } catch (E) {
          console.error("API execution failed:", E), k && m({});
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
          const A = await We(n, E, e?.queryid, void 0, c), P = Array.isArray(A?.data?.data) ? A.data.data : Array.isArray(A?.data) ? A.data : A, C = Array.isArray(P) ? P.map(me) : [], G = ve(w, N, C, e.groupKey);
          k && m(G);
        } catch (E) {
          console.error("API fetch failed:", E);
        }
      }
    })(), () => {
      k = !1;
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
  `, $ = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, B = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, U = (k) => k.icon ? /* @__PURE__ */ i.jsx("i", { className: k.icon }) : null, z = _t(
    () => Ts(d),
    [d]
  ), I = z.length, D = _t(() => e.search || !h ? z : z.filter(
    ([, k]) => k.toLowerCase().includes(h.toLowerCase())
  ), [e.search, h, z]), V = (k, Q) => {
    if (p === !0)
      if (k.key === "ArrowDown")
        k.preventDefault(), x(
          (w) => w + 1 < D.length ? w + 1 : 0
        );
      else if (k.key === "ArrowUp")
        k.preventDefault(), x(
          (w) => w - 1 >= 0 ? w - 1 : D.length - 1
        );
      else if (k.key === "Enter") {
        k.preventDefault();
        const [w] = D[v] || [];
        w && t.setFieldValue(e.name, Q ? w : [...t.values[e.name], w]);
      } else k.key === "Escape" && (y(""), T(!1));
  };
  ce(() => {
    _.current?.querySelector(
      `[data-index="${v}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [v]), ce(() => {
    v >= D.length && x(0);
  }, [D, v]), ce(() => {
    const k = e.autocomplete, Q = e.ajaxchain;
    if (!k && !Q) return;
    const w = t.values[e.name];
    if (!w) return;
    const N = Array.isArray(Q) ? Q : Q ? [Q] : [];
    (async () => {
      try {
        if (ws(k)) {
          const E = k.src;
          if (!E || !n) return;
          const A = he(E.where ?? {}, {
            refid: w
          }), P = {
            ...E,
            table: E.table,
            cols: E.columns,
            where: A
          }, { data: C } = await We(n, P, e?.queryid, void 0, c), G = Array.isArray(C?.data) ? C.data[0] : C?.data;
          G && k.target.split(",").map((ne) => ne.trim()).forEach((ne) => {
            G[ne] !== void 0 && t.setFieldValue(ne, G[ne]);
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
              refid: w
            });
            P = {
              ...A,
              table: A.table,
              cols: A.columns,
              where: we
            };
          }
          const { data: C } = await We(n, P, e?.queryid, w, c);
          let G = e.valueKey ?? "value", ne = e.labelKey ?? "title";
          const le = Array.isArray(C?.data?.data) ? C.data.data : Array.isArray(C?.data) ? C.data : C, re = Array.isArray(le) ? le.map(me) : [], pe = ve(
            G,
            ne,
            re,
            e.groupKey
          );
          o?.(E.target, pe);
        }
      } catch (E) {
        console.error("Autocomplete / AjaxChain fetch failed", E);
      }
    })();
  }, [t.values[e.name]]), te.useEffect(() => {
    if (!e.search || !h.trim() || !e.table || !n) return;
    const k = js(e.columns ?? ""), Q = new AbortController(), w = setTimeout(async () => {
      try {
        let N;
        if (!e.queryid) {
          if (!e.table || !e.cols)
            throw new Error("SQL query requires field.table");
          const le = a ? he(e.where ?? {}, {
            refid: a
          }) : e.where;
          N = {
            ...e,
            table: e.table,
            cols: e.columns || e.cols,
            where: le
          };
        }
        let b = {};
        Array.isArray(k) && k.forEach((le) => {
          b[le] = [h, "LIKE"];
        });
        const { data: E } = await We(n, N, e?.queryid, void 0, c, b);
        let A = e.valueKey ?? "value", P = e.labelKey ?? "title";
        const C = Array.isArray(E?.data?.data) ? E.data.data : Array.isArray(E?.data) ? E.data : E, G = Array.isArray(C) ? C.map(me) : [], ne = ve(
          A,
          P,
          G,
          e.groupKey
        );
        m(ne);
      } catch (N) {
        if (X.isCancel(N)) return;
        console.error("Search fetch failed", N);
      }
    }, 500);
    return () => {
      clearTimeout(w), Q.abort();
    };
  }, [h, a]);
  const Y = async (k) => {
    if (k.length === 0) {
      console.error("No file");
      return;
    }
    if (!n) return;
    const Q = n?.baseURL + n?.uploadURL;
    if (!Q) {
      console.error("No Upload URL ");
      return;
    }
    const w = e.multiple === !0;
    try {
      const N = await Promise.all(
        Array.from(k).map(async (b) => {
          const E = new FormData();
          return E.append("file", b), (await X({
            method: "POST",
            url: Q,
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
        w ? N.map((b) => b.path) : N[0]?.path
      );
    } catch (N) {
      console.error("File upload failed", N), t.setFieldError(l, "File upload failed");
    }
  }, Z = async (k, Q, w) => {
    const N = Q[k];
    if (console.log("methodName", N), !N) return;
    const b = r?.[N];
    if (typeof b != "function") {
      console.error(`Method "${String(N)}" not found`);
      return;
    }
    try {
      await Promise.resolve(b(w));
    } catch (E) {
      console.error(`Method "${String(N)}" failed`, E);
    }
  };
  switch (e.type) {
    case "autocomplete": {
      const w = t.values[l] ?? "", N = h !== "" ? h : Ir(d, w) ?? String(w ?? ""), b = (A) => {
        const P = A.target.value;
        y(P), x(0), P.trim() ? T(!0) : (T(!1), t.setFieldValue(l, ""));
      }, E = (A) => {
        t.setFieldValue(l, A), y(""), T(!1), Z("onChange", e, `${l}-${A}`);
      };
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: B, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsx("div", { ref: F, children: /* @__PURE__ */ i.jsx(
          "input",
          {
            className: `${j} ${$}`,
            value: N,
            placeholder: e.placeholder || "Type to search...",
            onChange: b,
            onFocus: () => {
              const A = String(t.values[l] ?? "");
              y(A);
            },
            onBlur: () => {
              setTimeout(() => T(!1), 150);
            },
            onKeyDown: (A) => {
              if (A.key === "Enter") {
                if (A.preventDefault(), D[v]) {
                  const [P] = D[v];
                  t.setFieldValue(l, P);
                } else h.trim() && t.setFieldValue(l, h.trim());
                T(!1);
                return;
              }
              V(A, !0);
            },
            disabled: e.disabled
          }
        ) }),
        /* @__PURE__ */ i.jsx(wt, { anchorRef: F, open: p, children: /* @__PURE__ */ i.jsx(
          "div",
          {
            ref: _,
            className: "bg-white border rounded shadow max-h-52 overflow-y-auto",
            children: D.length > 0 ? D.map(([A, P], C) => /* @__PURE__ */ i.jsx(
              "div",
              {
                id: `${l}-${A}`,
                "data-index": C,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${v === C ? "bg-gray-100" : "hover:bg-gray-100"}`,
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
        const w = t.values[l] ?? [];
        return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsxs("label", { className: B, children: [
            e.label,
            e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ i.jsxs(
            "div",
            {
              ref: F,
              tabIndex: 0,
              className: "cursor-pointer select-none border border-gray-300 rounded-lg px-4 py-2.5 bg-white flex justify-between items-center",
              onClick: () => {
                T((N) => !N), x(0);
              },
              onKeyDown: (N) => V(N, !1),
              onBlur: () => {
                e.multiple || setTimeout(() => {
                  T(!1), y("");
                }, 150);
              },
              children: [
                /* @__PURE__ */ i.jsx("span", { className: "text-sm text-gray-700 truncate", children: w.length > 0 ? w.join(", ") : `Select ${e.label}` }),
                /* @__PURE__ */ i.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
              ]
            }
          ),
          /* @__PURE__ */ i.jsx(wt, { anchorRef: F, open: p, children: /* @__PURE__ */ i.jsxs(
            "div",
            {
              ref: _,
              className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
              children: [
                e.search && /* @__PURE__ */ i.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "text",
                    value: h,
                    onChange: (N) => {
                      y(N.target.value), x(0);
                    },
                    placeholder: "Search...",
                    className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                  }
                ) }),
                D.length > 0 ? D.map(([N, b], E) => /* @__PURE__ */ i.jsxs(
                  "label",
                  {
                    "data-index": E,
                    className: `flex items-center gap-x-2 px-2 py-1 rounded cursor-pointer text-sm
                    ${w.includes(N) ? "bg-indigo-50 text-indigo-600 font-medium" : v === E ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: [
                      /* @__PURE__ */ i.jsx(
                        "input",
                        {
                          id: `${l}-${N}`,
                          type: "checkbox",
                          checked: w.includes(N),
                          onChange: (A) => {
                            const P = A.target.checked ? [...w, N] : w.filter((C) => C !== N);
                            t.setFieldValue(l, P), Z("onChange", e, `${l}-${N}`);
                          },
                          className: "h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        }
                      ),
                      b
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
        /* @__PURE__ */ i.jsxs("label", { className: B, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs(
          "div",
          {
            ref: F,
            tabIndex: 0,
            className: "cursor-pointer select-none border border-gray-300 rounded-lg px-4 py-2.5 bg-white flex justify-between items-center",
            onClick: () => {
              T((w) => !w), x(0);
            },
            onKeyDown: (w) => V(w, !0),
            onBlur: () => {
              setTimeout(() => {
                T(!1), y("");
              }, 150);
            },
            children: [
              /* @__PURE__ */ i.jsx("span", { className: "text-sm text-gray-700 truncate", children: t.values[l] ? Ir(d, t.values[l]) ?? "Select option" : `Select ${e.label}` }),
              /* @__PURE__ */ i.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
            ]
          }
        ),
        /* @__PURE__ */ i.jsx(wt, { anchorRef: F, open: p, children: /* @__PURE__ */ i.jsxs(
          "div",
          {
            ref: _,
            className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
            children: [
              e.search && /* @__PURE__ */ i.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "text",
                  value: h,
                  onChange: (w) => {
                    y(w.target.value), x(0);
                  },
                  onKeyDown: (w) => V(w, !0),
                  placeholder: "Search...",
                  className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                }
              ) }),
              D.length > 0 && /* @__PURE__ */ i.jsx(
                "div",
                {
                  onMouseDown: (w) => {
                    w.preventDefault(), t.setFieldValue(l, ""), T(!1), y("");
                  },
                  className: "px-2 py-1 text-sm cursor-pointer hover:bg-gray-50",
                  children: "Clear selection"
                }
              ),
              D.length > 0 ? D.map(([w, N], b) => /* @__PURE__ */ i.jsx(
                "div",
                {
                  id: `${l}-${w}`,
                  "data-index": b,
                  onMouseDown: () => {
                    t.setFieldValue(l, w), T(!1), y(""), x(0), Z("onChange", e, `${l}-${w}`);
                  },
                  className: `px-2 py-1 rounded cursor-pointer text-sm
                  ${t.values[l] === w ? "bg-indigo-50 text-indigo-600 font-medium" : v === b ? "bg-gray-100" : "hover:bg-gray-50"}`,
                  children: N
                },
                w
              )) : /* @__PURE__ */ i.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
            ]
          }
        ) }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[l]) })
      ] });
    }
    case "textarea":
      return /* @__PURE__ */ i.jsx(i.Fragment, { children: /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: B, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsx(
            "textarea",
            {
              id: l,
              className: `${j} ${$} min-h-[120px] resize-none`,
              onFocus: () => f(!0),
              name: l,
              value: t.values[l],
              onBlur: t.handleBlur,
              onChange: (w) => {
                t.setFieldValue(
                  l,
                  w.target.value
                ), Z("onChange", e, `${l}`);
              },
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ i.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${u ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[l]) })
      ] }) });
    case "select":
      if (e.multiple === !0) {
        const w = t.values[l] ?? [];
        return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsxs("label", { className: B, children: [
            e.label,
            e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ i.jsxs(
            "div",
            {
              ref: F,
              tabIndex: 0,
              className: "cursor-pointer select-none border border-gray-300 rounded-lg px-4 py-2.5 bg-white flex justify-between items-center",
              onClick: () => {
                T((N) => !N), x(0);
              },
              onKeyDown: (N) => V(N, !1),
              onBlur: () => {
                e.multiple || setTimeout(() => {
                  T(!1), y("");
                }, 150);
              },
              children: [
                /* @__PURE__ */ i.jsx("span", { className: "text-sm text-gray-700 truncate", children: w.length > 0 ? w.join(", ") : `Select ${e.label}` }),
                /* @__PURE__ */ i.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
              ]
            }
          ),
          /* @__PURE__ */ i.jsx(wt, { anchorRef: F, open: p, children: /* @__PURE__ */ i.jsxs(
            "div",
            {
              ref: _,
              className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
              children: [
                e.search && /* @__PURE__ */ i.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "text",
                    value: h,
                    onChange: (N) => {
                      y(N.target.value), x(0);
                    },
                    placeholder: "Search...",
                    className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                  }
                ) }),
                D.length > 0 ? D.map(([N, b], E) => /* @__PURE__ */ i.jsxs(
                  "label",
                  {
                    "data-index": E,
                    className: `flex items-center gap-x-2 px-2 py-1 rounded cursor-pointer text-sm
                    ${w.includes(N) ? "bg-indigo-50 text-indigo-600 font-medium" : v === E ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: [
                      /* @__PURE__ */ i.jsx(
                        "input",
                        {
                          id: `${l}-${N}`,
                          type: "checkbox",
                          checked: w.includes(N),
                          onChange: (A) => {
                            const P = A.target.checked ? [...w, N] : w.filter((C) => C !== N);
                            t.setFieldValue(l, P), Z("onChange", e, `${l}-${N}`);
                          },
                          className: "h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        }
                      ),
                      b
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
        /* @__PURE__ */ i.jsxs("label", { className: B, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsxs(
            "select",
            {
              className: `${j} ${$} appearance-none cursor-pointer pr-12`,
              onFocus: () => f(!0),
              name: l,
              id: l,
              value: t.values[l],
              onBlur: t.handleBlur,
              onChange: (w) => {
                t.setFieldValue(
                  l,
                  w.target.value === "" ? "" : w.target.value
                ), Z("onChange", e, `${l}`);
              },
              disabled: e.disabled,
              children: [
                /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: e.placeholder || "Please select an option" }),
                !tr(d) && Object.entries(d).map(([w, N]) => /* @__PURE__ */ i.jsx("option", { value: w, className: "py-2", children: N }, w)),
                tr(d) && Object.entries(d).map(([w, N]) => /* @__PURE__ */ i.jsx("optgroup", { label: w, children: Object.entries(N).map(([b, E]) => /* @__PURE__ */ i.jsx("option", { value: b, children: E }, b)) }, w))
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
        /* @__PURE__ */ i.jsxs("label", { className: B, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: `flex ${I > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(d || {}).map(([w, N]) => /* @__PURE__ */ i.jsxs(
          "label",
          {
            htmlFor: `${l}-${w}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  id: `${l}-${w}`,
                  type: "radio",
                  name: l,
                  checked: t.values[l] === w,
                  value: w,
                  onChange: (b) => {
                    t.setFieldValue(
                      l,
                      b.target.value === "" ? "" : b.target.value
                    ), Z("onChange", e, `${l}-${w}`);
                  },
                  onBlur: t.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              N
            ]
          },
          w
        )) }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[l]) })
      ] });
    case "checkbox": {
      const w = t.values[l];
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: B, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(d || {}).map(([N, b]) => /* @__PURE__ */ i.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  id: `${l}-${N}`,
                  type: "checkbox",
                  checked: w.includes(N),
                  onChange: (E) => {
                    const A = E.target.checked ? [...w, N] : w.filter((P) => P !== N);
                    t.setFieldValue(l, A), Z("onChange", e, `${l}-${N}`);
                  },
                  onBlur: t.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              b
            ]
          },
          N
        )) }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[l]) })
      ] });
    }
    case "tags": {
      const w = t.values[l], N = h.trim(), b = Array.isArray(d) ? d : Object.entries(d || {}).map(([C, G]) => ({ value: C, label: G })), E = (C) => {
        C && !w.includes(C) && (t.setFieldValue(l, [...w, C]), y(""));
      }, A = (C) => {
        t.setFieldValue(
          l,
          w.filter((G) => G !== C)
        );
      }, P = (C) => b.find((G) => G.value === C)?.label ?? C;
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: B, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs(
          "div",
          {
            className: `${j} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !e.disabled && document.getElementById(`${l}-input`)?.focus(),
            children: [
              w.map((C) => /* @__PURE__ */ i.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ i.jsx("span", { className: "text-indigo-700", children: P(C) }),
                    /* @__PURE__ */ i.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (G) => {
                          G.stopPropagation(), e.disabled || A(C);
                        },
                        onMouseDown: (G) => G.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                C
              )),
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  id: `${l}-input`,
                  type: "text",
                  value: h,
                  onChange: (C) => y(C.target.value),
                  onKeyDown: (C) => {
                    (C.key === "Enter" || C.key === ",") && (C.preventDefault(), E(N));
                  },
                  placeholder: w.length === 0 ? e.placeholder || "Type and press Enter" : "",
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
      const k = e.multiple === !0, Q = Array.isArray(t.values[l]) ? t.values[l] : t.values[l] ? [t.values[l]] : [];
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: B, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ i.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: U(e) }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              id: l,
              type: "file",
              className: `${j} ${$} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => f(!0),
              name: l,
              multiple: k,
              onChange: (w) => {
                const N = w.currentTarget.files;
                N && Y(N), Z("onChange", e, `${l}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ i.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${u ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        Q.map((w) => {
          const N = w?.split("/").pop();
          return N ? /* @__PURE__ */ i.jsx("div", { className: "mt-1", children: /* @__PURE__ */ i.jsx("span", { className: "text-sm", children: N }) }, w) : null;
        }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[l]) })
      ] });
    case "json":
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: B, children: [
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
              onChange: (w) => {
                t.setFieldValue(
                  l,
                  w.target.value
                ), Z("onChange", e, `${l}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: e.disabled,
              className: `${j} ${$} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${u ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[l]) })
      ] });
    case "date":
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: B, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ i.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: U(e) }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              id: l,
              type: "date",
              name: l,
              min: e.min,
              max: e.max,
              value: t.values[l],
              onChange: (w) => {
                t.setFieldValue(
                  l,
                  w.target.value
                ), Z("onChange", e, `${l}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled,
              className: `${j} ${$} ${e.icon ? "pl-9" : ""}`
            }
          ),
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${u ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[l]) })
      ] });
    case "number":
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: B, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ i.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: U(e) }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              id: l,
              type: e.type || "text",
              className: `${j} ${$} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => f(!0),
              name: l,
              value: t.values[l],
              onBlur: t.handleBlur,
              onChange: (w) => {
                t.setFieldValue(
                  l,
                  w.target.value
                ), Z("onChange", e, `${l}`);
              },
              step: e.step,
              placeholder: e.placeholder,
              disabled: e.disabled,
              min: e.min,
              max: e.max
            }
          ),
          /* @__PURE__ */ i.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${u ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[l]) })
      ] });
    default:
      return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsxs("label", { className: B, children: [
          e.label,
          e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ i.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: U(e) }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              id: l,
              type: e.type || "text",
              className: `${j} ${$} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => f(!0),
              name: l,
              value: t.values[l],
              onBlur: t.handleBlur,
              onChange: (w) => {
                t.setFieldValue(
                  l,
                  w.target.value
                ), Z("onChange", e, `${l}`);
              },
              placeholder: e.placeholder,
              disabled: e.disabled,
              step: e.step,
              minLength: e.minlength,
              maxLength: e.maxlength
            }
          ),
          /* @__PURE__ */ i.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${u ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[l]) })
      ] });
  }
}
function Qc({
  title: e,
  fields: t,
  data: r,
  onSubmit: n = (f) => {
  },
  onCancel: a = () => {
  },
  methods: s = {},
  sqlOpsUrls: o,
  refid: c,
  module_refid: u
}) {
  const f = bs(t, o?.operation), [d, m] = te.useState({}), h = (p, T) => {
    m((S) => ({
      ...S,
      [p]: T
    }));
  }, { initialValues: y, validationSchema: v } = te.useMemo(() => {
    const p = {}, T = {};
    return f.forEach((S) => {
      vs([S], p, T, r);
    }), {
      initialValues: p,
      validationSchema: T
    };
  }, [f, r]), x = Bc({
    initialValues: y,
    enableReinitialize: !0,
    validationSchema: Cn().shape(v),
    onSubmit: (p) => {
      n(p), x.resetForm();
    }
  });
  function _(p) {
    p.preventDefault(), x.resetForm();
  }
  return /* @__PURE__ */ i.jsx("div", { className: "relative z-10 max-w-full ", children: /* @__PURE__ */ i.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ i.jsxs("form", { onSubmit: x.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "grid grid-flow-col auto-cols-max gap-4  overflow-x-auto", children: [
      f.map((p, T) => xs(p.hidden) || p.type === "geolocation" || p.vmode === "edit" && o?.operation === "create" ? null : /* @__PURE__ */ i.jsx(
        "div",
        {
          children: /* @__PURE__ */ i.jsx(
            Zc,
            {
              refid: c,
              module_refid: u,
              ...o ? { sqlOpsUrls: o } : {},
              field: p,
              formik: x,
              methods: s,
              setFieldOptions: h,
              ...d[p.name] ? { optionsOverride: d[p.name] } : {}
            }
          )
        },
        p?.name ?? `field-${T}`
      )),
      /* @__PURE__ */ i.jsxs("div", { className: "", children: [
        /* @__PURE__ */ i.jsx("div", { children: "  " }),
        /* @__PURE__ */ i.jsx("button", { onClick: _, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Reset" }),
        Object.keys(x.errors).length > 0 && /* @__PURE__ */ i.jsx("div", { children: "  " })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "", children: [
        /* @__PURE__ */ i.jsx("div", { children: "  " }),
        /* @__PURE__ */ i.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" }),
        Object.keys(x.errors).length > 0 && /* @__PURE__ */ i.jsx("div", { children: "  " })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "mt-8 flex justify-between space-x-3", children: /* @__PURE__ */ i.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }) })
  ] }) }) });
}
const at = (e) => ({
  Authorization: `Bearer ${e.accessToken}`
}), Ht = async (e) => (await X.get(
  e.baseURL + e.dbopsGetHash,
  { headers: at(e) }
)).data.refhash, Zt = async (e, t) => (await X.post(
  e.baseURL + e.dbopsGetRefId,
  t,
  { headers: at(e) }
)).data.refid, Xc = {
  async fetch(e, t, r, n) {
    const a = await Ht(e);
    let s = !1, o;
    r && (s = !0, o = r), s || (o = await Zt(e, {
      operation: "fetch",
      source: t.source,
      fields: t.fields ?? {},
      datahash: a,
      srcid: n
    }));
    const c = await X.post(
      e.baseURL + e.dbopsFetch,
      { refid: o, datahash: a },
      { headers: at(e) }
    );
    return c.data?.data ?? c.data;
  },
  async create(e, t, r) {
    const n = await Ht(e), a = await Zt(e, {
      operation: "create",
      source: t.source,
      fields: t.values,
      datahash: n,
      srcid: r
    });
    return (await X.post(
      e.baseURL + e.dbopsCreate,
      { refid: a, fields: t.values, datahash: n },
      { headers: at(e) }
    )).data;
  },
  async update(e, t, r) {
    const n = await Ht(e), a = await Zt(e, {
      operation: "update",
      source: t.source,
      fields: t.values,
      datahash: n,
      srcid: r
    });
    return (await X.post(
      e.baseURL + e.dbopsUpdate,
      { refid: a, fields: t.values, datahash: n },
      { headers: at(e) }
    )).data;
  }
};
function Jc({
  formJson: e = { title: "", fields: {}, source: {} },
  methods: t = {},
  userid: r = null,
  onCancel: n = () => {
  },
  components: a = {},
  callback: s = () => {
  },
  initialvalues: o = {},
  setEditData: c,
  module_refid: u
}) {
  const f = e.endPoints, d = e?.source?.refid, [m, h] = te.useState(o), y = te.useMemo(() => ys(e.fields), [e.fields]);
  te.useEffect(() => {
    h(o ?? {});
  }, [o]);
  const v = te.useCallback(
    (p) => {
      p && Object.keys(p).length > 0 && h(p);
    },
    []
  );
  te.useEffect(() => {
    let p = !0;
    return (async () => {
      const S = e?.source ?? {};
      if (S?.type) {
        if (S.type === "method") {
          const F = S.method, l = F ? t[F] : void 0;
          if (l)
            try {
              const j = await Promise.resolve(l());
              p && v(j);
            } catch (j) {
              console.error("Method execution failed:", j);
            }
        }
        if (S.type === "api" && f?.operation !== "create")
          try {
            const F = await X({
              method: S.method || "GET",
              url: S.url ?? "",
              data: S.body ?? {},
              params: S.params ?? {},
              headers: S.headers ?? {}
            });
            p && v(F.data);
          } catch (F) {
            console.error("API fetch failed:", F);
          }
        if (S.type === "sql" && S.refid && S.refid !== "0" && f?.operation !== "create" || f?.operation !== "create" && S.dbopsid) {
          if (!f) {
            console.error("SQL source requires formJson.endPoints but it is missing");
            return;
          }
          try {
            const F = await Xc.fetch(f, {
              source: {
                ...S,
                table: S.table,
                columns: S.columns,
                where: he(S.where, {
                  refid: d
                })
              },
              fields: $t(e.fields, f.operation)
            }, S?.dbopsid, u);
            p && v(F);
          } catch (F) {
            console.error("API fetch failed:", F);
          }
        }
      }
    })(), () => {
      p = !1;
    };
  }, [
    r,
    f,
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.url || "",
    JSON.stringify(e?.source?.params ?? {}),
    JSON.stringify(e?.source?.body ?? {}),
    JSON.stringify(e?.source?.headers ?? {})
  ]);
  const x = async (p) => {
    const T = e?.source ?? {};
    let S = null;
    if (y.length > 0)
      try {
        S = await gs();
      } catch (l) {
        console.log("catch fetchGeolocation", l), S = null;
      }
    const F = {
      ...p,
      ...Object.fromEntries(
        y.map((l) => [l, S])
      )
    };
    if (T.type === "method") {
      const l = T.method, j = l ? t[l] : void 0;
      if (j)
        try {
          const $ = await Promise.resolve(j(F));
          c?.(null), s?.($);
        } catch ($) {
          s?.($), console.error("Method execution failed:", $);
        }
    }
    if (T.type === "api") {
      if (!f) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const l = await X({
          method: T.method || "POST",
          url: f.baseURL + T.endpoint,
          data: F ?? {},
          headers: {
            Authorization: `Bearer ${f?.accessToken}`
          }
        });
        c?.(null), s?.(l);
      } catch (l) {
        s?.(l), console.error("API fetch failed:", l);
      }
    }
    if (T.type === "sql") {
      const l = e.endPoints;
      if (!l) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let j = !1, $;
        T?.dbopsid && (j = !0, $ = T?.dbopsid);
        const B = await X({
          method: "GET",
          url: l.baseURL + l.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${l?.accessToken}`
          }
        });
        if (!j) {
          let I = {
            ...T
          };
          T.where && (I = {
            ...T,
            where: he(T.where, {
              refid: d
            })
          }), $ = (await X({
            method: "POST",
            url: l.baseURL + l.dbopsGetRefId,
            data: {
              operation: l.operation,
              source: I,
              fields: $t(e.fields, l.operation),
              forcefill: e.forcefill,
              datahash: B.data.refhash,
              scrid: u
            },
            headers: {
              Authorization: `Bearer ${l?.accessToken}`
            }
          }))?.data.refid;
        }
        let U = {
          refid: $,
          fields: F,
          datahash: B.data.refhash,
          refid1: l.refid
        };
        T?.refid && (U.refid1 = T?.refid);
        const z = await X({
          method: "POST",
          url: l.baseURL + l[l.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: U,
          headers: {
            Authorization: `Bearer ${l?.accessToken}`
          }
        });
        c?.(null), s?.(z);
      } catch (j) {
        s?.(j), console.error("API fetch failed:", j);
      }
    }
  }, _ = {
    simple: /* @__PURE__ */ i.jsx(
      Qc,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: m,
        onSubmit: x,
        onCancel: n,
        methods: t,
        components: a,
        ...f ? { sqlOpsUrls: f } : {},
        refid: d,
        module_refid: u
      }
    )
  };
  return /* @__PURE__ */ i.jsx("div", { className: "relative", children: _.simple });
}
function xr({ tabObj: e, methods: t, tabName: r, sqlOpsUrls: n, refid: a, Reports: s, toast: o, handleAction: c, infoViewJson: u }) {
  const [f, d] = oe(!1), [m, h] = oe(null), [y, v] = te.useState(0), [x, _] = te.useState(null), p = e?.config, T = e?.config, S = T?.["popup.form"] ? "popup.form" : (T?.form, "form"), F = T?.[S] && Object.keys(T?.[S]).length > 0, l = (z) => {
    let I = me(z.data);
    _(I);
  }, j = (z) => {
    _(z), v((I) => I + 1);
  }, $ = (z) => {
    let I = me(z.data);
    h(I), d(!0);
  }, B = async () => {
    if (m?.id) {
      if (!n) {
        window.alert("Delete configuration missing.");
        return;
      }
      try {
        let z = e?.config;
        const I = z?.["popup.form"] ? "popup.form" : (z?.form, "form"), D = z?.[I];
        if (!D?.source) throw new Error("Form source missing");
        let V = !1, Y;
        D?.source?.dbopsid && (V = !0, Y = D?.source?.dbopsid);
        const Z = await X({
          method: "GET",
          url: n.baseURL + n.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${n.accessToken}`
          }
        });
        if (!V) {
          let k = { ...D.source, refid: m.id };
          D.source.where && (k = {
            ...k,
            where: he(D.source.where, {
              refid: m?.id
            })
          }), Y = (await X({
            method: "POST",
            url: n.baseURL + n.dbopsGetRefId,
            data: {
              operation: "update",
              source: k,
              fields: D.fields,
              forcefill: D.forcefill,
              datahash: Z.data.refhash,
              scrid: u?.module_refid
            },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }))?.data.refid;
        }
        await X({
          method: "POST",
          url: n.baseURL + n.dbopsUpdate,
          data: {
            refid: Y,
            fields: { blocked: "true" },
            datahash: Z.data.refhash,
            refid1: m?.id
          },
          headers: {
            Authorization: `Bearer ${n.accessToken}`
          }
        }), window.alert("Record deleted successfully."), v((k) => k + 1);
      } catch (z) {
        console.error(z), window.alert("Failed to delete record. Please try again");
      } finally {
        h(null), d(!1);
      }
    }
  }, U = () => {
    h(null), d(!1);
  };
  return /* @__PURE__ */ i.jsx(i.Fragment, { children: s ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      s,
      {
        methods: { ...t, deleteRecord: $, editRecord: l },
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
          actions: { ...p?.actions, ...u?.buttons, ...u.actions },
          datagrid: p?.datagrid,
          buttons: p?.buttons,
          refresh: y
        },
        onButtonClick: c
      }
    ),
    F && /* @__PURE__ */ i.jsx(
      Jc,
      {
        formJson: {
          ...T[S],
          source: {
            ...T?.[S].source,
            refid: x?.id
          },
          endPoints: {
            ...n,
            operation: x ? "update" : "create"
          }
        },
        methods: t,
        initialvalues: x ?? {},
        setEditData: j,
        module_refid: u?.module_refid
      }
    ),
    /* @__PURE__ */ i.jsx(
      Fs,
      {
        open: f,
        onConfirm: B,
        onCancel: U
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
), eu = ({
  groups: e,
  groupNames: t,
  setActiveTabIndex: r,
  activeTabIndex: n,
  layoutConfig: a,
  showScrollHint: s,
  isCommonInfo: o,
  tabsNavRef: c
}) => {
  const [u, f] = oe(!1), d = xe(null);
  return ce(() => {
    const m = (h) => {
      d.current && !d.current.contains(h.target) && f(!1);
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
      /* @__PURE__ */ i.jsxs("div", { className: "relative", ref: d, children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            onClick: () => f(!u),
            className: "ml-1 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200",
            children: "⋮"
          }
        ),
        u && /* @__PURE__ */ i.jsx("div", { className: "absolute right-0 mt-2 w-48 max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-30", children: t.map((m, h) => /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              r(h), f(!1);
            },
            className: `w-full text-left px-3 py-2 text-sm truncate hover:bg-gray-100 ${n === h ? "bg-gray-50 font-semibold text-action" : "text-gray-700"}`,
            children: e[m]?.label || m
          },
          m
        )) })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: `relative bg-gray-100 ${o ? "" : "rounded-t-lg"} px-12 pt-1 shadow-inner overflow-hidden`, children: /* @__PURE__ */ i.jsx(
      "nav",
      {
        ref: c,
        className: "relative flex overflow-x-auto scrollbar-hide scroll-smooth",
        style: {
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        },
        children: t.length > 0 ? t.map((m, h) => /* @__PURE__ */ i.jsx(
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
  refid: u,
  sqlOpsUrls: f,
  module_refid: d,
  fieldOptions: m,
  setFieldOptions: h
}) => /* @__PURE__ */ i.jsxs(
  "div",
  {
    className: "bg-white rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex-1 flex flex-col min-h-0",
    children: [
      e.length > 0 ? n?.fields ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ i.jsx("div", { className: r?.fieldGridClass || "grid grid-cols-12 gap-2", children: n.fields.map((y, v) => /* @__PURE__ */ i.jsx(
        "div",
        {
          className: `col-span-12 sm:col-span-6 ${ct[ut(y.width)] || "lg:col-span-2"}`,
          children: /* @__PURE__ */ i.jsx(
            dt,
            {
              field: y,
              data: a ?? {},
              methods: c,
              refid: u,
              ...f ? { sqlOpsUrls: f } : {},
              module_refid: d,
              setFieldOptions: h,
              ...m[y.name] ? { optionsOverride: m[y.name] } : {}
            }
          )
        },
        y?.name ?? `field-${v}`
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
            e.slice(0, 5).map((y, v) => /* @__PURE__ */ i.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${v === t ? "bg-action w-6" : "bg-gray-300"}`
              },
              v
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
        /* @__PURE__ */ i.jsx("div", { className: "flex gap-1", children: e.map((y, v) => /* @__PURE__ */ i.jsx(
          "div",
          {
            className: `w-2 h-2 rounded-full transition-all duration-300 ${v === t ? "bg-action w-6" : "bg-gray-300"}`
          },
          v
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
  refid: u,
  Reports: f,
  toast: d = {},
  handleAction: m = () => {
  },
  infoViewJson: h
}) {
  const [y, v] = oe(0), [x, _] = oe(!1), p = xe(null), [T, S] = oe({}), F = (V, Y) => {
    S((Z) => ({
      ...Z,
      [V]: Y
    }));
  }, l = Object.keys(e);
  ce(() => {
    const V = () => {
      if (p.current) {
        const Y = p.current;
        _(Y.scrollWidth > Y.clientWidth);
      }
    };
    return V(), window.addEventListener("resize", V), () => window.removeEventListener("resize", V);
  }, [l.length]), ce(() => {
    if (p.current && l.length > 0) {
      const V = p.current.children[y];
      V && V.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [y, l.length]);
  const j = o === "tableft", $ = o === "tabright", B = !j && !$, U = e[l[y] ?? ""] || null, z = {
    single: (V, Y) => /* @__PURE__ */ i.jsx(cr, { module_refid: h.module_refid, tabObj: V, methods: t, tabName: Y, ...c ? { sqlOpsUrls: c } : {}, refid: u }),
    grid: (V, Y) => /* @__PURE__ */ i.jsx(
      xr,
      {
        ...f ? { Reports: f } : {},
        toast: d,
        handleAction: m,
        tabObj: V,
        methods: t,
        tabName: Y,
        ...c ? { sqlOpsUrls: c } : {},
        refid: u,
        infoViewJson: h
      }
    )
  }, I = U?.config?.uimode, D = n[I] || z[I] || (() => /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No UI mode for this type" }));
  return B ? /* @__PURE__ */ i.jsxs("div", { className: "flex-1 flex flex-col min-h-0 ", children: [
    /* @__PURE__ */ i.jsx(
      eu,
      {
        groupNames: l,
        groups: e,
        setActiveTabIndex: v,
        activeTabIndex: y,
        tabsNavRef: p,
        isCommonInfo: a,
        showScrollHint: x,
        layoutConfig: s
      }
    ),
    /* @__PURE__ */ i.jsx(
      mn,
      {
        groupNames: l,
        activeTabIndex: y,
        layoutConfig: s,
        tabObj: U,
        infoData: r,
        setActiveTabIndex: v,
        renderView: D,
        groups: e,
        methods: t,
        refid: u,
        ...c ? { sqlOpsUrls: c } : {},
        module_refid: h.module_refid,
        fieldOptions: T,
        setFieldOptions: F
      }
    )
  ] }) : /* @__PURE__ */ i.jsxs("div", { className: "flex-1 flex min-h-0", children: [
    j && /* @__PURE__ */ i.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ i.jsx(
      pn,
      {
        groupNames: l,
        groups: e,
        setActiveTabIndex: v,
        activeTabIndex: y
      }
    ) }),
    /* @__PURE__ */ i.jsx("main", { className: "flex-1 flex flex-col min-h-0 overflow-auto", children: /* @__PURE__ */ i.jsx(
      mn,
      {
        groupNames: l,
        activeTabIndex: y,
        layoutConfig: s,
        tabObj: U,
        infoData: r,
        setActiveTabIndex: v,
        renderView: D,
        groups: e,
        methods: t,
        refid: u,
        module_refid: h.module_refid,
        ...c ? { sqlOpsUrls: c } : {},
        fieldOptions: T,
        setFieldOptions: F
      }
    ) }),
    $ && /* @__PURE__ */ i.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ i.jsx(
      pn,
      {
        groupNames: l,
        groups: e,
        setActiveTabIndex: v,
        activeTabIndex: y
      }
    ) })
  ] });
}
function tu({ title: e, children: t, isFirst: r }) {
  const [n, a] = oe(r);
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
function ru({
  groups: e,
  methods: t = {},
  infoData: r,
  viewRenderers: n = {},
  sqlOpsUrls: a,
  refid: s,
  Reports: o,
  toast: c = {},
  handleAction: u = () => {
  },
  infoViewJson: f
}) {
  const [d, m] = oe({}), h = (v, x) => {
    m((_) => ({ ..._, [v]: x }));
  }, y = {
    single: (v, x) => /* @__PURE__ */ i.jsx(
      cr,
      {
        tabObj: v,
        methods: t,
        tabName: x,
        ...a ? { sqlOpsUrls: a } : {},
        refid: s,
        module_refid: f?.module_refid
      }
    ),
    grid: (v, x) => /* @__PURE__ */ i.jsx(
      xr,
      {
        ...o ? { Reports: o } : {},
        toast: c,
        infoViewJson: f,
        handleAction: u,
        tabObj: v,
        methods: t,
        tabName: x,
        ...a ? { sqlOpsUrls: a } : {},
        refid: s
      }
    )
  };
  return /* @__PURE__ */ i.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ i.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ i.jsx("div", { className: "space-y-1 flex flex-col min-h-0", children: e && Object.entries(e).map(([v, x], _) => /* @__PURE__ */ i.jsx(tu, { title: x.label, isFirst: _ === 0, children: x?.fields ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-12 gap-2", children: x.fields.map((p, T) => /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${ct[ut(p.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ i.jsx(
        dt,
        {
          module_refid: f?.module_refid,
          methods: t,
          field: p,
          data: r ?? {},
          setFieldOptions: h,
          ...d[p.name] ? { optionsOverride: d[p.name] } : {},
          ...a ? { sqlOpsUrls: a } : {},
          refid: s
        }
      )
    },
    p?.name ?? `field-${T}`
  )) }) }) : x ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: n[x.config?.uimode]?.(x) || y[x.config?.uimode]?.(x, v) || /* @__PURE__ */ i.jsx("div", { children: "No renderer for this type" }) }) : null }, v)) }) }) });
}
function nu({ title: e, children: t }) {
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
function au({
  groups: e,
  methods: t = {},
  infoData: r,
  viewRenderers: n = {},
  sqlOpsUrls: a,
  refid: s,
  Reports: o,
  toast: c = {},
  handleAction: u = () => {
  },
  infoViewJson: f
}) {
  const [d, m] = oe({}), h = (v, x) => {
    m((_) => ({ ..._, [v]: x }));
  }, y = {
    single: (v, x) => /* @__PURE__ */ i.jsx(cr, { module_refid: f?.module_refid, tabObj: v, methods: t, tabName: x, ...a ? { sqlOpsUrls: a } : {}, refid: s }),
    grid: (v, x) => /* @__PURE__ */ i.jsx(
      xr,
      {
        ...o ? { Reports: o } : {},
        toast: c,
        handleAction: u,
        tabObj: v,
        methods: t,
        tabName: x,
        ...a ? { sqlOpsUrls: a } : {},
        refid: s,
        infoViewJson: f
      }
    )
  };
  return /* @__PURE__ */ i.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ i.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ i.jsx("div", { className: "space-y-2  flex flex-col min-h-0", children: e && Object.entries(e).map(([v, x], _) => /* @__PURE__ */ i.jsx(nu, { title: x.label, children: x?.fields ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-12 gap-2", children: x.fields.map((p, T) => /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${ct[ut(p.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ i.jsx(
        dt,
        {
          module_refid: f?.module_refid,
          methods: t,
          field: p,
          data: r ?? {},
          setFieldOptions: h,
          ...d[p.name] ? { optionsOverride: d[p.name] } : {},
          ...a ? { sqlOpsUrls: a } : {},
          refid: s
        }
      )
    },
    p?.name ?? `field-${T}`
  )) }) }) : x ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: n[x.config?.uimode]?.(x) || y[x.config?.uimode]?.(x, v) || /* @__PURE__ */ i.jsx("div", { children: "No renderer for this type" }) }) : null }, v)) }) }) });
}
function lu({
  infoViewJson: e,
  data: t = {},
  hiddenFields: r = [],
  groupFieldsFn: n = ms,
  layoutConfig: a = {},
  viewRenderers: s = {},
  methods: o = {},
  Reports: c,
  toast: u = {},
  handleAction: f = () => {
  }
}) {
  const [d, m] = te.useState({}), h = ps(e.infoview ?? {}), y = e.endPoints, v = te.useMemo(
    () => n(e.fields || {}),
    [e.fields, n]
  ), x = e?.source?.refid;
  let _ = { ...v };
  e.infoview?.groups && (_ = { ..._, ...e.infoview.groups }), te.useEffect(() => {
    let S = !1;
    return (async () => {
      const l = e?.source;
      if (!l?.type) {
        S || m({});
        return;
      }
      if (l.type === "method") {
        const j = l.method, $ = j ? o[j] : void 0;
        if ($)
          try {
            const B = await Promise.resolve($());
            S || m(B || {});
          } catch (B) {
            console.error("Method execution failed:", B), S || m({});
          }
        else
          S || m({});
      }
      if (l.type === "api")
        try {
          const j = await X({
            method: l.method || "GET",
            url: l.url,
            data: l.body || {},
            params: l.params || {},
            headers: l.headers || {}
          });
          S || m(j.data || {});
        } catch (j) {
          console.error("API fetch failed:", j), S || m({});
        }
      if (l.type === "sql" && l.refid && l.refid != "0" || l.dbopsid) {
        if (!y) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let j = !1, $;
          l?.dbopsid && (j = !0, $ = l?.dbopsid);
          const B = await X({
            method: "GET",
            url: y.baseURL + y.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${y?.accessToken}`
            }
          });
          if (!j) {
            let I = {
              ...l
            };
            l.where && (I = {
              ...l,
              where: he(l.where, {
                refid: x
              })
            }), $ = (await X({
              method: "POST",
              url: y.baseURL + y.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: I,
                fields: $t(e.fields, y.operation),
                forcefill: e.forcefill,
                datahash: B.data.refhash,
                srcid: e?.module_refid
              },
              headers: {
                Authorization: `Bearer ${y?.accessToken}`
              }
            }))?.data.refid;
          }
          const U = await X({
            method: "POST",
            url: y.baseURL + y.dbopsFetch,
            data: {
              refid: $,
              datahash: B.data.refhash,
              module_refid: e.module_refid
            },
            headers: {
              Authorization: `Bearer ${y?.accessToken}`
            }
          }), z = Dn(U) ?? {};
          S || m(z);
        } catch (j) {
          console.error("API fetch failed:", j);
        }
      }
    })(), () => {
      S = !0;
    };
  }, [
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.url || "",
    JSON.stringify(e?.source?.params || {}),
    JSON.stringify(e?.source?.body || {}),
    JSON.stringify(e?.source?.headers || {})
  ]);
  const p = _.common || null;
  p && delete _.common;
  const T = (S) => {
    switch (S) {
      case "accordion":
        return /* @__PURE__ */ i.jsx(
          ru,
          {
            groups: _,
            methods: o,
            infoData: d,
            viewRenderers: s,
            ...y ? { sqlOpsUrls: y } : {},
            refid: x,
            ...c ? { Reports: c } : {},
            toast: u,
            handleAction: f,
            infoViewJson: e
          }
        );
      case "tab":
      case "tableft":
      case "tabright":
        return /* @__PURE__ */ i.jsx(
          yn,
          {
            groups: _,
            viewRenderers: s,
            layoutConfig: a,
            methods: o,
            infoData: d,
            isCommonInfo: !!p,
            viewMode: S,
            ...y ? { sqlOpsUrls: y } : {},
            refid: x,
            ...c ? { Reports: c } : {},
            toast: u,
            handleAction: f,
            infoViewJson: e
          }
        );
      case "cards":
        return /* @__PURE__ */ i.jsx(
          au,
          {
            groups: _,
            viewRenderers: s,
            methods: o,
            infoData: d,
            ...y ? { sqlOpsUrls: y } : {},
            refid: x,
            ...c ? { Reports: c } : {},
            toast: u,
            handleAction: f,
            infoViewJson: e
          }
        );
      default:
        return /* @__PURE__ */ i.jsx(
          yn,
          {
            groups: _,
            viewRenderers: s,
            layoutConfig: a,
            methods: o,
            infoData: d,
            isCommonInfo: !!p,
            viewMode: S,
            ...y ? { sqlOpsUrls: y } : {},
            refid: x,
            ...c ? { Reports: c } : {},
            toast: u,
            handleAction: f,
            infoViewJson: e
          }
        );
    }
  };
  return /* @__PURE__ */ i.jsxs("div", { className: a.containerClass || "h-screen flex flex-col ", children: [
    p && /* @__PURE__ */ i.jsx(
      Os,
      {
        commonInfo: p,
        infoData: d,
        hiddenFields: r
      }
    ),
    T(h)
  ] });
}
export {
  lu as InfoView
};
