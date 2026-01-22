import te, { useState as oe, useRef as xe, useEffect as ce, useCallback as ae, useMemo as _t, useLayoutEffect as yn, createContext as xa, forwardRef as va, createElement as wa, useContext as ja } from "react";
import Q from "axios";
import { createPortal as Ta } from "react-dom";
function gn(e) {
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
function Ea() {
  if (wr) return Xe;
  wr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, a, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), a.key !== void 0 && (i = "" + a.key), "key" in a) {
      s = {};
      for (var c in a)
        c !== "key" && (s[c] = a[c]);
    } else s = a;
    return a = s.ref, {
      $$typeof: e,
      type: n,
      key: i,
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
function Sa() {
  return jr || (jr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(b) {
      if (b == null) return null;
      if (typeof b == "function")
        return b.$$typeof === B ? null : b.displayName || b.name || null;
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
        case V:
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
          case O:
            var E = b.render;
            return b = b.displayName, b || (b = E.displayName || E.name || "", b = b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef"), b;
          case $:
            return E = b.displayName || null, E !== null ? E : e(b.type) || "Memo";
          case M:
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
        var N = E.error, P = typeof Symbol == "function" && Symbol.toStringTag && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return N.call(
          E,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          P
        ), t(b);
      }
    }
    function n(b) {
      if (b === x) return "<>";
      if (typeof b == "object" && b !== null && b.$$typeof === M)
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
    function i(b) {
      if (k.call(b, "key")) {
        var E = Object.getOwnPropertyDescriptor(b, "key").get;
        if (E && E.isReactWarning) return !1;
      }
      return b.key !== void 0;
    }
    function c(b, E) {
      function N() {
        J || (J = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          E
        ));
      }
      N.isReactWarning = !0, Object.defineProperty(b, "key", {
        get: N,
        configurable: !0
      });
    }
    function u() {
      var b = e(this.type);
      return L[b] || (L[b] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), b = this.props.ref, b !== void 0 ? b : null;
    }
    function f(b, E, N, P, C, U, ne, le) {
      return N = U.ref, b = {
        $$typeof: y,
        type: b,
        key: E,
        props: U,
        _owner: C
      }, (N !== void 0 ? N : null) !== null ? Object.defineProperty(b, "ref", {
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
    function d(b, E, N, P, C, U, ne, le) {
      var re = E.children;
      if (re !== void 0)
        if (P)
          if (G(re)) {
            for (P = 0; P < re.length; P++)
              m(re[P]);
            Object.freeze && Object.freeze(re);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(re);
      if (k.call(E, "key")) {
        re = e(b);
        var pe = Object.keys(E).filter(function(Ie) {
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
      if (re = null, N !== void 0 && (r(N), re = "" + N), i(E) && (r(E.key), re = "" + E.key), "key" in E) {
        N = {};
        for (var we in E)
          we !== "key" && (N[we] = E[we]);
      } else N = E;
      return re && c(
        N,
        typeof b == "function" ? b.displayName || b.name || "Unknown" : b
      ), f(
        b,
        re,
        U,
        C,
        a(),
        N,
        ne,
        le
      );
    }
    function m(b) {
      typeof b == "object" && b !== null && b.$$typeof === y && b._store && (b._store.validated = 1);
    }
    var h = te, y = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), T = Symbol.for("react.consumer"), S = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), V = Symbol.for("react.activity"), B = Symbol.for("react.client.reference"), I = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = Object.prototype.hasOwnProperty, G = Array.isArray, W = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(b) {
        return b();
      }
    };
    var J, L = {}, Z = h.react_stack_bottom_frame.bind(
      h,
      s
    )(), w = W(n(s)), A = {};
    Je.Fragment = x, Je.jsx = function(b, E, N, P, C) {
      var U = 1e4 > I.recentlyCreatedOwnerStacks++;
      return d(
        b,
        E,
        N,
        !1,
        P,
        C,
        U ? Error("react-stack-top-frame") : Z,
        U ? W(n(b)) : w
      );
    }, Je.jsxs = function(b, E, N, P, C) {
      var U = 1e4 > I.recentlyCreatedOwnerStacks++;
      return d(
        b,
        E,
        N,
        !0,
        P,
        C,
        U ? Error("react-stack-top-frame") : Z,
        U ? W(n(b)) : w
      );
    };
  }()), Je;
}
var Tr;
function _a() {
  return Tr || (Tr = 1, process.env.NODE_ENV === "production" ? mt.exports = Ea() : mt.exports = Sa()), mt.exports;
}
var o = _a(), zt, Er;
function Aa() {
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
  var t = /[^.^\]^[]+|(?=\[\]|\.\.)/g, r = /^\d+$/, n = /^\d/, a = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, s = /^\s*(['"]?)(.*?)(\1)\s*$/, i = 512, c = new e(i), u = new e(i), f = new e(i);
  zt = {
    Cache: e,
    split: m,
    normalizePath: d,
    setter: function(p) {
      var T = d(p);
      return u.get(p) || u.set(p, function(O, l) {
        for (var j = 0, $ = T.length, M = O; j < $ - 1; ) {
          var V = T[j];
          if (V === "__proto__" || V === "constructor" || V === "prototype")
            return O;
          M = M[T[j++]];
        }
        M[T[j]] = l;
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
    var O = p.length, l, j, $, M;
    for (j = 0; j < O; j++)
      l = p[j], l && (_(l) && (l = '"' + l + '"'), M = y(l), $ = !M && /^\d+$/.test(l), T.call(S, l, M, $, j, p));
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
var De = Aa(), Vt, Sr;
function Na() {
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
var Bt = Na(), yt = { exports: {} }, _r;
function $a() {
  if (_r) return yt.exports;
  _r = 1, yt.exports = function(a) {
    return e(t(a), a);
  }, yt.exports.array = e;
  function e(a, s) {
    var i = a.length, c = new Array(i), u = {}, f = i, d = r(s), m = n(a);
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
        c[--i] = y;
      }
    }
  }
  function t(a) {
    for (var s = /* @__PURE__ */ new Set(), i = 0, c = a.length; i < c; i++) {
      var u = a[i];
      s.add(u[0]), s.add(u[1]);
    }
    return Array.from(s);
  }
  function r(a) {
    for (var s = /* @__PURE__ */ new Map(), i = 0, c = a.length; i < c; i++) {
      var u = a[i];
      s.has(u[0]) || s.set(u[0], /* @__PURE__ */ new Set()), s.has(u[1]) || s.set(u[1], /* @__PURE__ */ new Set()), s.get(u[0]).add(u[1]);
    }
    return s;
  }
  function n(a) {
    for (var s = /* @__PURE__ */ new Map(), i = 0, c = a.length; i < c; i++)
      s.set(a[i], i);
    return s;
  }
  return yt.exports;
}
var Oa = $a();
const Fa = /* @__PURE__ */ gn(Oa), Ca = Object.prototype.toString, Ia = Error.prototype.toString, Ra = RegExp.prototype.toString, Pa = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", Da = /^Symbol\((.*)\)(.*)$/;
function Ma(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function Ar(e, t = !1) {
  if (e == null || e === !0 || e === !1) return "" + e;
  const r = typeof e;
  if (r === "number") return Ma(e);
  if (r === "string") return t ? `"${e}"` : e;
  if (r === "function") return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol") return Pa.call(e).replace(Da, "Symbol($1)");
  const n = Ca.call(e).slice(8, -1);
  return n === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : n === "Error" || e instanceof Error ? "[" + Ia.call(e) + "]" : n === "RegExp" ? Ra.call(e) : null;
}
function Ne(e, t) {
  let r = Ar(e, t);
  return r !== null ? r : JSON.stringify(e, function(n, a) {
    let s = Ar(this[n], t);
    return s !== null ? s : a;
  }, 2);
}
function bn(e) {
  return e == null ? [] : [].concat(e);
}
let xn, vn, wn, ka = /\$\{\s*(\w+)\s*\}/g;
xn = Symbol.toStringTag;
class Nr {
  constructor(t, r, n, a) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[xn] = "Error", this.name = "ValidationError", this.value = r, this.path = n, this.type = a, this.errors = [], this.inner = [], bn(t).forEach((s) => {
      if (ue.isError(s)) {
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
class ue extends Error {
  static formatError(t, r) {
    const n = r.label || r.path || "this";
    return r = Object.assign({}, r, {
      path: n,
      originalPath: r.path
    }), typeof t == "string" ? t.replace(ka, (a, s) => Ne(r[s])) : typeof t == "function" ? t(r) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, r, n, a, s) {
    const i = new Nr(t, r, n, a);
    if (s)
      return i;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[wn] = "Error", this.name = i.name, this.message = i.message, this.type = i.type, this.value = i.value, this.path = i.path, this.errors = i.errors, this.inner = i.inner, Error.captureStackTrace && Error.captureStackTrace(this, ue);
  }
  static [vn](t) {
    return Nr[Symbol.hasInstance](t) || super[Symbol.hasInstance](t);
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
    const a = n != null && n !== r ? ` (cast from the value \`${Ne(n, !0)}\`).` : ".";
    return t !== "mixed" ? `${e} must be a \`${t}\` type, but the final value was: \`${Ne(r, !0)}\`` + a : `${e} must match the configured type. The validated value was: \`${Ne(r, !0)}\`` + a;
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
}, La = {
  isValue: "${path} field must be ${value}"
}, jt = {
  noUnknown: "${path} field has unspecified keys: ${unknown}",
  exact: "${path} object contains unknown properties: ${properties}"
}, Tt = {
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
      if (r.length < a) return `${t} tuple value has too few items, expected a length of ${a} but got ${r.length} for value: \`${Ne(r, !0)}\``;
      if (r.length > a) return `${t} tuple value has too many items, expected a length of ${a} but got ${r.length} for value: \`${Ne(r, !0)}\``;
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
  boolean: La,
  tuple: za
});
const Ft = (e) => e && e.__isYupSchema__;
class At {
  static fromOptions(t, r) {
    if (!r.then && !r.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: n,
      then: a,
      otherwise: s
    } = r, i = typeof n == "function" ? n : (...c) => c.every((u) => u === n);
    return new At(t, (c, u) => {
      var f;
      let d = i(...c) ? a : s;
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
const Ae = (e) => e == null;
function qe(e) {
  function t({
    value: r,
    path: n = "",
    options: a,
    originalValue: s,
    schema: i
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
      abortEarly: _ = i.spec.abortEarly,
      disableStackTrace: p = i.spec.disableStackTrace
    } = a;
    const T = {
      value: r,
      parent: v,
      context: x
    };
    function S(I = {}) {
      const k = jn(Object.assign({
        value: r,
        originalValue: s,
        label: i.spec.label,
        path: I.path || n,
        spec: i.spec,
        disableStackTrace: I.disableStackTrace || p
      }, m, I.params), T), G = new ue(ue.formatError(I.message || h, k), r, k.path, I.type || f, k.disableStackTrace);
      return G.params = k, G;
    }
    const O = _ ? c : u;
    let l = {
      path: n,
      parent: v,
      type: f,
      from: a.from,
      createError: S,
      resolve(I) {
        return Tn(I, T);
      },
      options: a,
      originalValue: s,
      schema: i
    };
    const j = (I) => {
      ue.isError(I) ? O(I) : I ? u(null) : O(S());
    }, $ = (I) => {
      ue.isError(I) ? O(I) : c(I);
    };
    if (y && Ae(r))
      return j(!0);
    let V;
    try {
      var B;
      if (V = d.call(l, r, l), typeof ((B = V) == null ? void 0 : B.then) == "function") {
        if (a.sync)
          throw new Error(`Validation test of type: "${l.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(V).then(j, $);
      }
    } catch (I) {
      $(I);
      return;
    }
    j(V);
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
  return Le.isRef(e) ? e.getValue(t.value, t.parent, t.context) : e;
}
function Va(e, t, r, n = r) {
  let a, s, i;
  return t ? (De.forEach(t, (c, u, f) => {
    let d = u ? c.slice(1, c.length - 1) : c;
    e = e.resolve({
      context: n,
      parent: a,
      value: r
    });
    let m = e.type === "tuple", h = f ? parseInt(d, 10) : 0;
    if (e.innerType || m) {
      if (m && !f) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${i}" must contain an index to the tuple element, e.g. "${i}[0]"`);
      if (r && h >= r.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${c}, in the path: ${t}. because there is no value at that index. `);
      a = r, r = r && r[h], e = m ? e.spec.types[h] : e.innerType;
    }
    if (!f) {
      if (!e.fields || !e.fields[d]) throw new Error(`The schema does not contain the path: ${t}. (failed at: ${i} which is a type: "${e.type}")`);
      a = r, r = r && r[d], e = e.fields[d];
    }
    s = d, i = u ? "[" + c + "]" : "." + c;
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
class Nt extends Set {
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
    return new Nt(this.values());
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
function Ga(e, t) {
  const r = t ? `${t}.${e.path}` : e.path;
  return e.errors.map((n) => ({
    message: n,
    path: Ba(r)
  }));
}
function En(e, t) {
  var r;
  if (!((r = e.inner) != null && r.length) && e.errors.length)
    return Ga(e, t);
  const n = t ? `${t}.${e.path}` : e.path;
  return e.inner.flatMap((a) => En(a, n));
}
class ye {
  constructor(t) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new Nt(), this._blacklist = new Nt(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
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
      if (a && Ae(s))
        return s;
      let i = Ne(t), c = Ne(s);
      throw new TypeError(`The value of ${r.path || "field"} could not be cast to a value that satisfies the schema type: "${n.type}". 

attempted value: ${i} 
` + (c !== i ? `result of cast: ${c}` : ""));
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
      originalValue: i,
      options: r,
      tests: f
    }, n, (d) => {
      if (d.length)
        return a(d, u);
      this.runTests({
        path: s,
        value: u,
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
      originalValue: c,
      path: u,
      options: f
    } = t, d = (x) => {
      a || (a = !0, r(x, i));
    }, m = (x) => {
      a || (a = !0, n(x, i));
    }, h = s.length, y = [];
    if (!h) return m([]);
    let v = {
      value: i,
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
    options: i
  }) {
    const c = t ?? r;
    if (c == null)
      throw TypeError("Must include `key` or `index` for nested validations");
    const u = typeof c == "number";
    let f = n[c];
    const d = Object.assign({}, i, {
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
    return new Promise((i, c) => a._validate(t, r, (u, f) => {
      ue.isError(u) && (u.value = f), c(u);
    }, (u, f) => {
      u.length ? c(new ue(u, f, void 0, void 0, s)) : i(f);
    }));
  }
  validateSync(t, r) {
    var n;
    let a = this.resolve(Object.assign({}, r, {
      value: t
    })), s, i = (n = r?.disableStackTrace) != null ? n : a.spec.disableStackTrace;
    return a._validate(t, Object.assign({}, r, {
      sync: !0
    }), (c, u) => {
      throw ue.isError(c) && (c.value = u), c;
    }, (c, u) => {
      if (c.length) throw new ue(c, t, void 0, void 0, i);
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
    return r.name && (n.exclusiveTests[r.name] = !!r.exclusive), n.tests = n.tests.filter((i) => !(i.OPTIONS.name === r.name && (s || i.OPTIONS.test === a.OPTIONS.test))), n.tests.push(a), n;
  }
  when(t, r) {
    !Array.isArray(t) && typeof t != "string" && (r = t, t = ".");
    let n = this.clone(), a = bn(t).map((s) => new Le(s));
    return a.forEach((s) => {
      s.isSibling && n.deps.push(s.key);
    }), n.conditions.push(typeof r == "function" ? new At(a, r) : At.fromOptions(a, r)), n;
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
  notOneOf(t, r = Te.notOneOf) {
    let n = this.clone();
    return t.forEach((a) => {
      n._blacklist.add(a), n._whitelist.delete(a);
    }), n.internalTests.blacklist = qe({
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
      tests: r.tests.filter((u, f, d) => d.findIndex((m) => m.OPTIONS.name === u.OPTIONS.name) === f).map((u) => {
        const f = u.OPTIONS.params && t ? jn(Object.assign({}, u.OPTIONS.params), t) : u.OPTIONS.params;
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
              issues: En(a)
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
    schema: i
  } = Va(this, t, r, n.context);
  return i[e](a && a[s], Object.assign({}, n, {
    parent: a,
    path: t
  }));
};
for (const e of ["equals", "is"]) ye.prototype[e] = ye.prototype.oneOf;
for (const e of ["not", "nope"]) ye.prototype[e] = ye.prototype.notOneOf;
const Ua = () => !0;
function Xt(e) {
  return new Sn(e);
}
class Sn extends ye {
  constructor(t) {
    super(typeof t == "function" ? {
      type: "mixed",
      check: t
    } : Object.assign({
      type: "mixed",
      check: Ua
    }, t));
  }
}
Xt.prototype = Sn.prototype;
const Ka = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function qa(e) {
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
let Ya = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), Ha = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), Wa = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, Za = "^\\d{4}-\\d{2}-\\d{2}", Qa = "\\d{2}:\\d{2}:\\d{2}", Xa = "(([+-]\\d{2}(:?\\d{2})?)|Z)", Ja = new RegExp(`${Za}T${Qa}(\\.\\d+)?${Xa}$`), es = (e) => Ae(e) || e === e.trim(), ts = {}.toString();
function tt() {
  return new _n();
}
class _n extends ye {
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
      test: (i) => i === "" && n || i.search(t) !== -1
    });
  }
  email(t = de.email) {
    return this.matches(Ya, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = de.url) {
    return this.matches(Ha, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = de.uuid) {
    return this.matches(Wa, {
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
        const i = Jt(s);
        return i ? !!i.z : !1;
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
        const i = Jt(s);
        return i ? i.precision === a : !1;
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
      test: es
    });
  }
  lowercase(t = de.lowercase) {
    return this.transform((r) => Ae(r) ? r : r.toLowerCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (r) => Ae(r) || r === r.toLowerCase()
    });
  }
  uppercase(t = de.uppercase) {
    return this.transform((r) => Ae(r) ? r : r.toUpperCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (r) => Ae(r) || r === r.toUpperCase()
    });
  }
}
tt.prototype = _n.prototype;
let rs = (e) => e != +e;
function Et() {
  return new An();
}
class An extends ye {
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
    return this.transform((t) => Ae(t) ? t : t | 0);
  }
  round(t) {
    var r;
    let n = ["ceil", "floor", "round", "trunc"];
    if (t = ((r = t) == null ? void 0 : r.toLowerCase()) || "round", t === "trunc") return this.truncate();
    if (n.indexOf(t.toLowerCase()) === -1) throw new TypeError("Only valid options for round() are: " + n.join(", "));
    return this.transform((a) => Ae(a) ? a : Math[t](a));
  }
}
Et.prototype = An.prototype;
let Nn = /* @__PURE__ */ new Date(""), ns = (e) => Object.prototype.toString.call(e) === "[object Date]";
function lr() {
  return new lt();
}
class lt extends ye {
  constructor() {
    super({
      type: "date",
      check(t) {
        return ns(t) && !isNaN(t.getTime());
      }
    }), this.withMutation(() => {
      this.transform((t, r) => !this.spec.coerce || this.isType(t) || t === null ? t : (t = qa(t), isNaN(t) ? lt.INVALID_DATE : new Date(t)));
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
lt.INVALID_DATE = Nn;
lr.prototype = lt.prototype;
lr.INVALID_DATE = Nn;
function as(e, t = []) {
  let r = [], n = /* @__PURE__ */ new Set(), a = new Set(t.map(([i, c]) => `${i}-${c}`));
  function s(i, c) {
    let u = De.split(i)[0];
    n.add(u), a.has(`${c}-${u}`) || r.push([c, u]);
  }
  for (const i of Object.keys(e)) {
    let c = e[i];
    n.add(i), Le.isRef(c) && c.isSibling ? s(c.path, i) : Ft(c) && "deps" in c && c.deps.forEach((u) => s(u, i));
  }
  return Fa.array(Array.from(n), r).reverse();
}
function $r(e, t) {
  let r = 1 / 0;
  return e.some((n, a) => {
    var s;
    if ((s = t.path) != null && s.includes(n))
      return r = a, !0;
  }), r;
}
function $n(e) {
  return (t, r) => $r(e, t) - $r(e, r);
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
const ss = (e, t) => {
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
const is = $n([]);
function Fn(e) {
  return new Cn(e);
}
class Cn extends ye {
  constructor(t) {
    super({
      type: "object",
      check(r) {
        return Or(r) || typeof r == "function";
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
    let s = this.fields, i = (n = r.stripUnknown) != null ? n : this.spec.noUnknown, c = [].concat(this._nodes, Object.keys(a).filter((m) => !this._nodes.includes(m))), u = {}, f = Object.assign({}, r, {
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
      } else y && !i && (u[m] = v);
      (y !== m in u || u[m] !== v) && (d = !0);
    }
    return d ? u : a;
  }
  _validate(t, r = {}, n, a) {
    let {
      from: s = [],
      originalValue: i = t,
      recursive: c = this.spec.recursive
    } = r;
    r.from = [{
      schema: this,
      value: i
    }, ...s], r.__validating = !0, r.originalValue = i, super._validate(t, r, n, (u, f) => {
      if (!c || !Or(f)) {
        a(u, f);
        return;
      }
      i = i || f;
      let d = [];
      for (let m of this._nodes) {
        let h = this.fields[m];
        !h || Le.isRef(h) || d.push(h.asNestedTest({
          options: r,
          key: m,
          parent: f,
          parentPath: r.path,
          originalParent: i
        }));
      }
      this.runTests({
        tests: d,
        value: f,
        originalValue: i,
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
    return n.fields = t, n._nodes = as(t, r), n._sortErrors = $n(Object.keys(t)), r && (n._excludedEdges = r), n;
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
    for (const [s, i] of Object.entries(r.fields)) {
      var a;
      let c = t;
      (a = c) != null && a.value && (c = Object.assign({}, c, {
        parent: c.value,
        value: c.value[s]
      })), n.fields[s] = i.describe(c);
    }
    return n;
  }
}
Fn.prototype = Cn.prototype;
function er(e) {
  return new In(e);
}
class In extends ye {
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
    const s = n.map((i, c) => {
      const u = this.innerType.cast(i, Object.assign({}, r, {
        path: `${r.path || ""}[${c}]`,
        parent: n,
        originalValue: i,
        value: i,
        index: c
      }));
      return u !== i && (a = !0), u;
    });
    return a ? s : n;
  }
  _validate(t, r = {}, n, a) {
    var s;
    let i = this.innerType, c = (s = r.recursive) != null ? s : this.spec.recursive;
    r.originalValue != null && r.originalValue, super._validate(t, r, n, (u, f) => {
      var d;
      if (!c || !i || !this._typeCheck(f)) {
        a(u, f);
        return;
      }
      let m = new Array(f.length);
      for (let y = 0; y < f.length; y++) {
        var h;
        m[y] = i.asNestedTest({
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
    if (!Ft(t)) throw new TypeError("`array.of()` sub-schema must be a valid yup schema not: " + Ne(t));
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
er.prototype = In.prototype;
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
function $t(e, t = "create") {
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
) : e, Rn = (e) => {
  const t = Array.isArray(e?.data?.data) ? e.data.data[0] : Array.isArray(e?.data) ? e.data[0] : e?.data?.data ?? e?.data;
  return t && typeof t == "object" && !Array.isArray(t) ? t : null;
}, ve = (e, t, r, n) => {
  if (!Array.isArray(r) || r.length === 0) return {};
  const a = n ?? (r[0] && typeof r[0] == "object" && "category" in r[0] ? "category" : void 0);
  if (!a) {
    const i = {};
    return r.forEach((c) => {
      const u = c[e], f = c[t];
      u != null && f != null && (i[String(u)] = String(f));
    }), i;
  }
  const s = {};
  return r.forEach((i) => {
    const c = i[a] ?? "Others", u = i[e], f = i[t];
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
const fs = (e) => e === !0 || e === "true", hs = (e, t, r, n) => {
  e.forEach((a) => {
    const s = a?.name;
    if (!s) return;
    let i = n?.[s];
    i == null && (i = a.default), a.multiple === !0 || a.type === "checkbox" || a.type === "tags" ? t[s] = Array.isArray(i) ? i : typeof i == "string" ? i.split(",").map((u) => u.trim()).filter(Boolean) : [] : a.type === "json" ? t[s] = typeof i == "object" && i !== null ? JSON.stringify(i, null, 2) : i ?? "" : a.type === "date" ? t[s] = typeof i == "string" ? i.slice(0, 10) : "" : a.type === "time" ? typeof i == "string" ? i.includes("T") ? t[s] = i.slice(11, 16) : t[s] = i.slice(0, 5) : t[s] = "" : s === "blocked" || s === "blacklist" ? t[s] = String(i ?? "false") : t[s] = i ?? "";
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
function ps(e) {
  return typeof e == "object" && e !== null && typeof e.target == "string" && typeof e.src == "object" && e.src !== null && typeof e.src.table == "string";
}
function ms(e) {
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
}, ys = (e) => {
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
async function He(e, t, r, n = void 0, a = void 0, s = {}) {
  try {
    let i = r;
    return i || (i = (await Q({
      method: "POST",
      url: e.baseURL + e.registerQuery,
      data: { query: t, srcid: a },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    })).data.queryid), await Q({
      method: "POST",
      url: e.baseURL + e.runQuery,
      data: {
        queryid: i,
        filter: s,
        refid: n,
        page: 0,
        limit: 1e4
      },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    });
  } catch (i) {
    throw i;
  }
}
function gs(e) {
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
async function bs({
  field: e,
  value: t,
  sqlOpsUrls: r,
  setFieldOptions: n
}) {
  if (!e.ajaxchain || !t || !r) return;
  const a = Array.isArray(e.ajaxchain) ? e.ajaxchain : [e.ajaxchain];
  for (const s of a) {
    const i = s.src;
    if (!i) continue;
    let c;
    if (!i.queryid) {
      const h = he(i.where ?? {}, { refid: t });
      c = {
        ...i,
        table: i.table,
        cols: i.columns,
        where: h
      };
    }
    const { data: u } = await He(
      r,
      c,
      i.queryid,
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
const Pn = "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg";
function dt({
  field: e,
  data: t,
  methods: r = {},
  sqlOpsUrls: n,
  refid: a,
  module_refid: s,
  optionsOverride: i,
  setFieldOptions: c
}) {
  const u = e?.name, f = `
    text-sm text-gray-600 break-words
  `, d = `
    block text-sm font-semibold  transition-all duration-300 text-gray-700 capitalize
  `, [m, h] = oe(
    i ?? e.options ?? {}
  ), y = te.useRef(!1);
  te.useEffect(() => {
    i && h(i);
  }, [i]);
  const v = te.useMemo(
    () => gs(m),
    [m]
  );
  te.useEffect(() => {
    let O = !0, l = e.valueKey ?? "value", j = e.labelKey ?? "title";
    return (async () => {
      if (e?.options) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const k = Object.values(e.options);
          if (k.length && typeof k[0] == "string") {
            h(e.options);
            return;
          }
        }
        const B = (Array.isArray(e.options) ? e.options : [e.options]).map(me), I = ve(
          l,
          j,
          B,
          e.groupKey
          // auto-uses `category` if present
        );
        h(I);
        return;
      }
      const M = e?.source ?? {};
      if (e.type === "dataMethod") {
        const V = e.method, B = V ? r[V] : void 0;
        if (B)
          try {
            const I = await Promise.resolve(B()), k = Array.isArray(I?.data?.data) ? I.data.data : Array.isArray(I?.data) ? I.data : I, G = Array.isArray(k) ? k.map(me) : [], W = ve(l, j, G, e.groupKey);
            O && h(W);
          } catch (I) {
            console.error("Method execution failed:", I), O && h({});
          }
        else
          O && h({});
      }
      if (M.type === "api" && M.url)
        try {
          const V = await Q({
            method: M.method || "GET",
            url: M.url,
            data: M.body ?? {},
            params: M.params ?? {},
            headers: M.headers ?? {}
          }), B = Array.isArray(V?.data?.data) ? V.data.data : Array.isArray(V?.data) ? V.data : V, I = Array.isArray(B) ? B.map(me) : [], k = ve(l, j, I, e.groupKey);
          O && h(k);
        } catch (V) {
          console.error("API execution failed:", V), O && h({});
        }
      if (e.table || e.type === "dataSelector" || e.queryid) {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let V;
          if (e.type === "dataSelector")
            V = {
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
            V = {
              table: e.table,
              cols: e.columns,
              where: e.where ? a ? he(e.where, { refid: a }) : e.where : void 0
            };
          }
          const B = await He(n, V, e?.queryid, void 0, s), I = Array.isArray(B?.data?.data) ? B.data.data : Array.isArray(B?.data) ? B.data : B, k = Array.isArray(I) ? I.map(me) : [], G = ve(l, j, k, e.groupKey);
          O && h(G);
        } catch (V) {
          console.error("API fetch failed:", V);
        }
      }
    })(), () => {
      O = !1;
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
    y.current || !c || !x || (y.current = !0, bs({
      field: e,
      value: x,
      sqlOpsUrls: n,
      setFieldOptions: c
    }));
  }, [x, n, c]);
  const _ = typeof u == "string" ? t?.[u] : void 0, p = typeof _ == "string" ? e.type === "date" ? _.split("T")[0] : e.type === "time" ? _.includes("T") ? _.slice(11, 16) : _.slice(0, 5) : Cr(_, v) : Cr(_, v), T = typeof u == "string" && (u.toLowerCase().includes("avatar") || u.toLowerCase().includes("logo")), S = p == null ? "" : typeof p == "string" || typeof p == "number" ? p : JSON.stringify(p);
  return /* @__PURE__ */ o.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ o.jsx("label", { className: d, children: e?.label }),
    /* @__PURE__ */ o.jsx("div", { className: "relative", children: T ? /* @__PURE__ */ o.jsx(
      "img",
      {
        src: String(p),
        alt: "avatar",
        className: "w-16 h-16 rounded-full object-cover border",
        onError: (O) => {
          const l = O.currentTarget;
          l.onerror = null, l.src = Pn;
        }
      }
    ) : /* @__PURE__ */ o.jsx("p", { className: f, children: S }) })
  ] });
}
function xs({ commonInfo: e, infoData: t, hiddenFields: r = [] }) {
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
      return r.includes(n.name) || !s && s !== !1 && s !== 0 ? null : /* @__PURE__ */ o.jsx("div", { className: `hover:bg-gray-100 transition-colors duration-200 col-span-12 sm:col-span-6 ${ct[ut(n.width)] || "lg:col-span-4"}`, children: /* @__PURE__ */ o.jsx(
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
  const [i, c] = te.useState(null);
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
          const m = await Q({
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
          const y = await Q({
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
            }), h = (await Q({
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
          const v = await Q({
            method: "POST",
            url: n.baseURL + n.dbopsFetch,
            data: {
              refid: h,
              datahash: y.data.refhash
            },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }), x = Rn(v);
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
  ]), /* @__PURE__ */ o.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ o.jsx("div", { className: "grid grid-cols-12 gap-2", children: i ? Object.keys(i).map((u, f) => /* @__PURE__ */ o.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${ct[ut(e.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ o.jsx(
        dt,
        {
          field: { name: u, label: u },
          data: i ?? {},
          methods: t,
          refid: a,
          ...n ? { sqlOpsUrls: n } : {}
        },
        u
      )
    },
    `field-${f}`
  )) : /* @__PURE__ */ o.jsx("div", { className: "col-span-12 flex flex-col  min-h-0", children: /* @__PURE__ */ o.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center text-gray-500", children: [
    /* @__PURE__ */ o.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ o.jsxs("svg", { className: "w-8 h-8 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
      /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" }),
      /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m8 7 4-4 4 4" })
    ] }) }),
    /* @__PURE__ */ o.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No Data Available" }),
    /* @__PURE__ */ o.jsx("p", { className: "text-sm text-gray-500 text-center max-w-sm", children: "There are no records to display  at the moment." })
  ] }) }) }) });
}
function vs({
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
var ws = function(t) {
  return js(t) && !Ts(t);
};
function js(e) {
  return !!e && typeof e == "object";
}
function Ts(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || _s(e);
}
var Es = typeof Symbol == "function" && Symbol.for, Ss = Es ? Symbol.for("react.element") : 60103;
function _s(e) {
  return e.$$typeof === Ss;
}
function As(e) {
  return Array.isArray(e) ? [] : {};
}
function Ot(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? st(As(e), e, t) : e;
}
function Ns(e, t, r) {
  return e.concat(t).map(function(n) {
    return Ot(n, r);
  });
}
function $s(e, t, r) {
  var n = {};
  return r.isMergeableObject(e) && Object.keys(e).forEach(function(a) {
    n[a] = Ot(e[a], r);
  }), Object.keys(t).forEach(function(a) {
    !r.isMergeableObject(t[a]) || !e[a] ? n[a] = Ot(t[a], r) : n[a] = st(e[a], t[a], r);
  }), n;
}
function st(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || Ns, r.isMergeableObject = r.isMergeableObject || ws;
  var n = Array.isArray(t), a = Array.isArray(e), s = n === a;
  return s ? n ? r.arrayMerge(e, t, r) : $s(e, t, r) : Ot(t, r);
}
st.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(n, a) {
    return st(n, a, r);
  }, {});
};
var rr = st, Dn = typeof global == "object" && global && global.Object === Object && global, Os = typeof self == "object" && self && self.Object === Object && self, Ee = Dn || Os || Function("return this")(), Fe = Ee.Symbol, Mn = Object.prototype, Fs = Mn.hasOwnProperty, Cs = Mn.toString, et = Fe ? Fe.toStringTag : void 0;
function Is(e) {
  var t = Fs.call(e, et), r = e[et];
  try {
    e[et] = void 0;
    var n = !0;
  } catch {
  }
  var a = Cs.call(e);
  return n && (t ? e[et] = r : delete e[et]), a;
}
var Rs = Object.prototype, Ps = Rs.toString;
function Ds(e) {
  return Ps.call(e);
}
var Ms = "[object Null]", ks = "[object Undefined]", Rr = Fe ? Fe.toStringTag : void 0;
function ze(e) {
  return e == null ? e === void 0 ? ks : Ms : Rr && Rr in Object(e) ? Is(e) : Ds(e);
}
function kn(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var ur = kn(Object.getPrototypeOf, Object);
function Ve(e) {
  return e != null && typeof e == "object";
}
var Ls = "[object Object]", zs = Function.prototype, Vs = Object.prototype, Ln = zs.toString, Bs = Vs.hasOwnProperty, Gs = Ln.call(Object);
function Pr(e) {
  if (!Ve(e) || ze(e) != Ls)
    return !1;
  var t = ur(e);
  if (t === null)
    return !0;
  var r = Bs.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Ln.call(r) == Gs;
}
function Us() {
  this.__data__ = [], this.size = 0;
}
function zn(e, t) {
  return e === t || e !== e && t !== t;
}
function Ct(e, t) {
  for (var r = e.length; r--; )
    if (zn(e[r][0], t))
      return r;
  return -1;
}
var Ks = Array.prototype, qs = Ks.splice;
function Ys(e) {
  var t = this.__data__, r = Ct(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : qs.call(t, r, 1), --this.size, !0;
}
function Hs(e) {
  var t = this.__data__, r = Ct(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Ws(e) {
  return Ct(this.__data__, e) > -1;
}
function Zs(e, t) {
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
$e.prototype.clear = Us;
$e.prototype.delete = Ys;
$e.prototype.get = Hs;
$e.prototype.has = Ws;
$e.prototype.set = Zs;
function Qs() {
  this.__data__ = new $e(), this.size = 0;
}
function Xs(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Js(e) {
  return this.__data__.get(e);
}
function ei(e) {
  return this.__data__.has(e);
}
function ft(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ti = "[object AsyncFunction]", ri = "[object Function]", ni = "[object GeneratorFunction]", ai = "[object Proxy]";
function Vn(e) {
  if (!ft(e))
    return !1;
  var t = ze(e);
  return t == ri || t == ni || t == ti || t == ai;
}
var Gt = Ee["__core-js_shared__"], Dr = function() {
  var e = /[^.]+$/.exec(Gt && Gt.keys && Gt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function si(e) {
  return !!Dr && Dr in e;
}
var ii = Function.prototype, oi = ii.toString;
function Be(e) {
  if (e != null) {
    try {
      return oi.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var li = /[\\^$.*+?()[\]{}|]/g, ci = /^\[object .+?Constructor\]$/, ui = Function.prototype, di = Object.prototype, fi = ui.toString, hi = di.hasOwnProperty, pi = RegExp(
  "^" + fi.call(hi).replace(li, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function mi(e) {
  if (!ft(e) || si(e))
    return !1;
  var t = Vn(e) ? pi : ci;
  return t.test(Be(e));
}
function yi(e, t) {
  return e?.[t];
}
function Ge(e, t) {
  var r = yi(e, t);
  return mi(r) ? r : void 0;
}
var it = Ge(Ee, "Map"), ot = Ge(Object, "create");
function gi() {
  this.__data__ = ot ? ot(null) : {}, this.size = 0;
}
function bi(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var xi = "__lodash_hash_undefined__", vi = Object.prototype, wi = vi.hasOwnProperty;
function ji(e) {
  var t = this.__data__;
  if (ot) {
    var r = t[e];
    return r === xi ? void 0 : r;
  }
  return wi.call(t, e) ? t[e] : void 0;
}
var Ti = Object.prototype, Ei = Ti.hasOwnProperty;
function Si(e) {
  var t = this.__data__;
  return ot ? t[e] !== void 0 : Ei.call(t, e);
}
var _i = "__lodash_hash_undefined__";
function Ai(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ot && t === void 0 ? _i : t, this;
}
function ke(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ke.prototype.clear = gi;
ke.prototype.delete = bi;
ke.prototype.get = ji;
ke.prototype.has = Si;
ke.prototype.set = Ai;
function Ni() {
  this.size = 0, this.__data__ = {
    hash: new ke(),
    map: new (it || $e)(),
    string: new ke()
  };
}
function $i(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function It(e, t) {
  var r = e.__data__;
  return $i(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Oi(e) {
  var t = It(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Fi(e) {
  return It(this, e).get(e);
}
function Ci(e) {
  return It(this, e).has(e);
}
function Ii(e, t) {
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
Ce.prototype.clear = Ni;
Ce.prototype.delete = Oi;
Ce.prototype.get = Fi;
Ce.prototype.has = Ci;
Ce.prototype.set = Ii;
var Ri = 200;
function Pi(e, t) {
  var r = this.__data__;
  if (r instanceof $e) {
    var n = r.__data__;
    if (!it || n.length < Ri - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Ce(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Qe(e) {
  var t = this.__data__ = new $e(e);
  this.size = t.size;
}
Qe.prototype.clear = Qs;
Qe.prototype.delete = Xs;
Qe.prototype.get = Js;
Qe.prototype.has = ei;
Qe.prototype.set = Pi;
function Di(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var Mr = function() {
  try {
    var e = Ge(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function Bn(e, t, r) {
  t == "__proto__" && Mr ? Mr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Mi = Object.prototype, ki = Mi.hasOwnProperty;
function Gn(e, t, r) {
  var n = e[t];
  (!(ki.call(e, t) && zn(n, r)) || r === void 0 && !(t in e)) && Bn(e, t, r);
}
function Rt(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var s = -1, i = t.length; ++s < i; ) {
    var c = t[s], u = void 0;
    u === void 0 && (u = e[c]), a ? Bn(r, c, u) : Gn(r, c, u);
  }
  return r;
}
function Li(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var zi = "[object Arguments]";
function kr(e) {
  return Ve(e) && ze(e) == zi;
}
var Un = Object.prototype, Vi = Un.hasOwnProperty, Bi = Un.propertyIsEnumerable, Gi = kr(/* @__PURE__ */ function() {
  return arguments;
}()) ? kr : function(e) {
  return Ve(e) && Vi.call(e, "callee") && !Bi.call(e, "callee");
}, ht = Array.isArray;
function Ui() {
  return !1;
}
var Kn = typeof exports == "object" && exports && !exports.nodeType && exports, Lr = Kn && typeof module == "object" && module && !module.nodeType && module, Ki = Lr && Lr.exports === Kn, zr = Ki ? Ee.Buffer : void 0, qi = zr ? zr.isBuffer : void 0, qn = qi || Ui, Yi = 9007199254740991, Hi = /^(?:0|[1-9]\d*)$/;
function Wi(e, t) {
  var r = typeof e;
  return t = t ?? Yi, !!t && (r == "number" || r != "symbol" && Hi.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Zi = 9007199254740991;
function Yn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Zi;
}
var Qi = "[object Arguments]", Xi = "[object Array]", Ji = "[object Boolean]", eo = "[object Date]", to = "[object Error]", ro = "[object Function]", no = "[object Map]", ao = "[object Number]", so = "[object Object]", io = "[object RegExp]", oo = "[object Set]", lo = "[object String]", co = "[object WeakMap]", uo = "[object ArrayBuffer]", fo = "[object DataView]", ho = "[object Float32Array]", po = "[object Float64Array]", mo = "[object Int8Array]", yo = "[object Int16Array]", go = "[object Int32Array]", bo = "[object Uint8Array]", xo = "[object Uint8ClampedArray]", vo = "[object Uint16Array]", wo = "[object Uint32Array]", ee = {};
ee[ho] = ee[po] = ee[mo] = ee[yo] = ee[go] = ee[bo] = ee[xo] = ee[vo] = ee[wo] = !0;
ee[Qi] = ee[Xi] = ee[uo] = ee[Ji] = ee[fo] = ee[eo] = ee[to] = ee[ro] = ee[no] = ee[ao] = ee[so] = ee[io] = ee[oo] = ee[lo] = ee[co] = !1;
function jo(e) {
  return Ve(e) && Yn(e.length) && !!ee[ze(e)];
}
function dr(e) {
  return function(t) {
    return e(t);
  };
}
var Hn = typeof exports == "object" && exports && !exports.nodeType && exports, rt = Hn && typeof module == "object" && module && !module.nodeType && module, To = rt && rt.exports === Hn, Ut = To && Dn.process, Ze = function() {
  try {
    var e = rt && rt.require && rt.require("util").types;
    return e || Ut && Ut.binding && Ut.binding("util");
  } catch {
  }
}(), Vr = Ze && Ze.isTypedArray, Eo = Vr ? dr(Vr) : jo, So = Object.prototype, _o = So.hasOwnProperty;
function Wn(e, t) {
  var r = ht(e), n = !r && Gi(e), a = !r && !n && qn(e), s = !r && !n && !a && Eo(e), i = r || n || a || s, c = i ? Li(e.length, String) : [], u = c.length;
  for (var f in e)
    (t || _o.call(e, f)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    Wi(f, u))) && c.push(f);
  return c;
}
var Ao = Object.prototype;
function fr(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Ao;
  return e === r;
}
var No = kn(Object.keys, Object), $o = Object.prototype, Oo = $o.hasOwnProperty;
function Fo(e) {
  if (!fr(e))
    return No(e);
  var t = [];
  for (var r in Object(e))
    Oo.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function Zn(e) {
  return e != null && Yn(e.length) && !Vn(e);
}
function hr(e) {
  return Zn(e) ? Wn(e) : Fo(e);
}
function Co(e, t) {
  return e && Rt(t, hr(t), e);
}
function Io(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Ro = Object.prototype, Po = Ro.hasOwnProperty;
function Do(e) {
  if (!ft(e))
    return Io(e);
  var t = fr(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Po.call(e, n)) || r.push(n);
  return r;
}
function pr(e) {
  return Zn(e) ? Wn(e, !0) : Do(e);
}
function Mo(e, t) {
  return e && Rt(t, pr(t), e);
}
var Qn = typeof exports == "object" && exports && !exports.nodeType && exports, Br = Qn && typeof module == "object" && module && !module.nodeType && module, ko = Br && Br.exports === Qn, Gr = ko ? Ee.Buffer : void 0, Ur = Gr ? Gr.allocUnsafe : void 0;
function Lo(e, t) {
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
function zo(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, s = []; ++r < n; ) {
    var i = e[r];
    t(i, r, e) && (s[a++] = i);
  }
  return s;
}
function Jn() {
  return [];
}
var Vo = Object.prototype, Bo = Vo.propertyIsEnumerable, Kr = Object.getOwnPropertySymbols, mr = Kr ? function(e) {
  return e == null ? [] : (e = Object(e), zo(Kr(e), function(t) {
    return Bo.call(e, t);
  }));
} : Jn;
function Go(e, t) {
  return Rt(e, mr(e), t);
}
function ea(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var Uo = Object.getOwnPropertySymbols, ta = Uo ? function(e) {
  for (var t = []; e; )
    ea(t, mr(e)), e = ur(e);
  return t;
} : Jn;
function Ko(e, t) {
  return Rt(e, ta(e), t);
}
function ra(e, t, r) {
  var n = t(e);
  return ht(e) ? n : ea(n, r(e));
}
function qo(e) {
  return ra(e, hr, mr);
}
function Yo(e) {
  return ra(e, pr, ta);
}
var nr = Ge(Ee, "DataView"), ar = Ge(Ee, "Promise"), sr = Ge(Ee, "Set"), ir = Ge(Ee, "WeakMap"), qr = "[object Map]", Ho = "[object Object]", Yr = "[object Promise]", Hr = "[object Set]", Wr = "[object WeakMap]", Zr = "[object DataView]", Wo = Be(nr), Zo = Be(it), Qo = Be(ar), Xo = Be(sr), Jo = Be(ir), _e = ze;
(nr && _e(new nr(new ArrayBuffer(1))) != Zr || it && _e(new it()) != qr || ar && _e(ar.resolve()) != Yr || sr && _e(new sr()) != Hr || ir && _e(new ir()) != Wr) && (_e = function(e) {
  var t = ze(e), r = t == Ho ? e.constructor : void 0, n = r ? Be(r) : "";
  if (n)
    switch (n) {
      case Wo:
        return Zr;
      case Zo:
        return qr;
      case Qo:
        return Yr;
      case Xo:
        return Hr;
      case Jo:
        return Wr;
    }
  return t;
});
var el = Object.prototype, tl = el.hasOwnProperty;
function rl(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && tl.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var Qr = Ee.Uint8Array;
function yr(e) {
  var t = new e.constructor(e.byteLength);
  return new Qr(t).set(new Qr(e)), t;
}
function nl(e, t) {
  var r = t ? yr(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var al = /\w*$/;
function sl(e) {
  var t = new e.constructor(e.source, al.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Xr = Fe ? Fe.prototype : void 0, Jr = Xr ? Xr.valueOf : void 0;
function il(e) {
  return Jr ? Object(Jr.call(e)) : {};
}
function ol(e, t) {
  var r = t ? yr(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var ll = "[object Boolean]", cl = "[object Date]", ul = "[object Map]", dl = "[object Number]", fl = "[object RegExp]", hl = "[object Set]", pl = "[object String]", ml = "[object Symbol]", yl = "[object ArrayBuffer]", gl = "[object DataView]", bl = "[object Float32Array]", xl = "[object Float64Array]", vl = "[object Int8Array]", wl = "[object Int16Array]", jl = "[object Int32Array]", Tl = "[object Uint8Array]", El = "[object Uint8ClampedArray]", Sl = "[object Uint16Array]", _l = "[object Uint32Array]";
function Al(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case yl:
      return yr(e);
    case ll:
    case cl:
      return new n(+e);
    case gl:
      return nl(e, r);
    case bl:
    case xl:
    case vl:
    case wl:
    case jl:
    case Tl:
    case El:
    case Sl:
    case _l:
      return ol(e, r);
    case ul:
      return new n();
    case dl:
    case pl:
      return new n(e);
    case fl:
      return sl(e);
    case hl:
      return new n();
    case ml:
      return il(e);
  }
}
var en = Object.create, Nl = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!ft(t))
      return {};
    if (en)
      return en(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function $l(e) {
  return typeof e.constructor == "function" && !fr(e) ? Nl(ur(e)) : {};
}
var Ol = "[object Map]";
function Fl(e) {
  return Ve(e) && _e(e) == Ol;
}
var tn = Ze && Ze.isMap, Cl = tn ? dr(tn) : Fl, Il = "[object Set]";
function Rl(e) {
  return Ve(e) && _e(e) == Il;
}
var rn = Ze && Ze.isSet, Pl = rn ? dr(rn) : Rl, Dl = 1, Ml = 2, kl = 4, na = "[object Arguments]", Ll = "[object Array]", zl = "[object Boolean]", Vl = "[object Date]", Bl = "[object Error]", aa = "[object Function]", Gl = "[object GeneratorFunction]", Ul = "[object Map]", Kl = "[object Number]", sa = "[object Object]", ql = "[object RegExp]", Yl = "[object Set]", Hl = "[object String]", Wl = "[object Symbol]", Zl = "[object WeakMap]", Ql = "[object ArrayBuffer]", Xl = "[object DataView]", Jl = "[object Float32Array]", ec = "[object Float64Array]", tc = "[object Int8Array]", rc = "[object Int16Array]", nc = "[object Int32Array]", ac = "[object Uint8Array]", sc = "[object Uint8ClampedArray]", ic = "[object Uint16Array]", oc = "[object Uint32Array]", X = {};
X[na] = X[Ll] = X[Ql] = X[Xl] = X[zl] = X[Vl] = X[Jl] = X[ec] = X[tc] = X[rc] = X[nc] = X[Ul] = X[Kl] = X[sa] = X[ql] = X[Yl] = X[Hl] = X[Wl] = X[ac] = X[sc] = X[ic] = X[oc] = !0;
X[Bl] = X[aa] = X[Zl] = !1;
function nt(e, t, r, n, a, s) {
  var i, c = t & Dl, u = t & Ml, f = t & kl;
  if (i !== void 0)
    return i;
  if (!ft(e))
    return e;
  var d = ht(e);
  if (d) {
    if (i = rl(e), !c)
      return Xn(e, i);
  } else {
    var m = _e(e), h = m == aa || m == Gl;
    if (qn(e))
      return Lo(e, c);
    if (m == sa || m == na || h && !a) {
      if (i = u || h ? {} : $l(e), !c)
        return u ? Ko(e, Mo(i, e)) : Go(e, Co(i, e));
    } else {
      if (!X[m])
        return a ? e : {};
      i = Al(e, m, c);
    }
  }
  s || (s = new Qe());
  var y = s.get(e);
  if (y)
    return y;
  s.set(e, i), Pl(e) ? e.forEach(function(_) {
    i.add(nt(_, t, r, _, e, s));
  }) : Cl(e) && e.forEach(function(_, p) {
    i.set(p, nt(_, t, r, p, e, s));
  });
  var v = f ? u ? Yo : qo : u ? pr : hr, x = d ? void 0 : v(e);
  return Di(x || e, function(_, p) {
    x && (p = _, _ = e[p]), Gn(i, p, nt(_, t, r, p, e, s));
  }), i;
}
var lc = 1, cc = 4;
function bt(e) {
  return nt(e, lc | cc);
}
var Kt, nn;
function uc() {
  if (nn) return Kt;
  nn = 1;
  var e = Array.isArray, t = Object.keys, r = Object.prototype.hasOwnProperty, n = typeof Element < "u";
  function a(s, i) {
    if (s === i) return !0;
    if (s && i && typeof s == "object" && typeof i == "object") {
      var c = e(s), u = e(i), f, d, m;
      if (c && u) {
        if (d = s.length, d != i.length) return !1;
        for (f = d; f-- !== 0; )
          if (!a(s[f], i[f])) return !1;
        return !0;
      }
      if (c != u) return !1;
      var h = s instanceof Date, y = i instanceof Date;
      if (h != y) return !1;
      if (h && y) return s.getTime() == i.getTime();
      var v = s instanceof RegExp, x = i instanceof RegExp;
      if (v != x) return !1;
      if (v && x) return s.toString() == i.toString();
      var _ = t(s);
      if (d = _.length, d !== t(i).length)
        return !1;
      for (f = d; f-- !== 0; )
        if (!r.call(i, _[f])) return !1;
      if (n && s instanceof Element && i instanceof Element)
        return s === i;
      for (f = d; f-- !== 0; )
        if (m = _[f], !(m === "_owner" && s.$$typeof) && !a(s[m], i[m]))
          return !1;
      return !0;
    }
    return s !== s && i !== i;
  }
  return Kt = function(i, c) {
    try {
      return a(i, c);
    } catch (u) {
      if (u.message && u.message.match(/stack|recursion/i) || u.number === -2146828260)
        return console.warn("Warning: react-fast-compare does not handle circular references.", u.name, u.message), !1;
      throw u;
    }
  }, Kt;
}
var dc = uc();
const Pe = /* @__PURE__ */ gn(dc);
var fc = process.env.NODE_ENV === "production";
function We(e, t) {
  if (!fc) {
    var r = "Warning: " + t;
    typeof console < "u" && console.warn(r);
    try {
      throw Error(r);
    } catch {
    }
  }
}
var hc = 4;
function an(e) {
  return nt(e, hc);
}
function ia(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var pc = "[object Symbol]";
function gr(e) {
  return typeof e == "symbol" || Ve(e) && ze(e) == pc;
}
var mc = "Expected a function";
function br(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(mc);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(a))
      return s.get(a);
    var i = e.apply(this, n);
    return r.cache = s.set(a, i) || s, i;
  };
  return r.cache = new (br.Cache || Ce)(), r;
}
br.Cache = Ce;
var yc = 500;
function gc(e) {
  var t = br(e, function(n) {
    return r.size === yc && r.clear(), n;
  }), r = t.cache;
  return t;
}
var bc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, xc = /\\(\\)?/g, vc = gc(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(bc, function(r, n, a, s) {
    t.push(a ? s.replace(xc, "$1") : n || r);
  }), t;
});
function wc(e) {
  if (typeof e == "string" || gr(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var sn = Fe ? Fe.prototype : void 0, on = sn ? sn.toString : void 0;
function oa(e) {
  if (typeof e == "string")
    return e;
  if (ht(e))
    return ia(e, oa) + "";
  if (gr(e))
    return on ? on.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function jc(e) {
  return e == null ? "" : oa(e);
}
function la(e) {
  return ht(e) ? ia(e, wc) : gr(e) ? [e] : Xn(vc(jc(e)));
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
var ln;
function Tc() {
  if (ln) return Y;
  ln = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, p = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
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
                case i:
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
    return S(l) === f;
  }
  return Y.AsyncMode = u, Y.ConcurrentMode = f, Y.ContextConsumer = c, Y.ContextProvider = i, Y.Element = t, Y.ForwardRef = d, Y.Fragment = n, Y.Lazy = v, Y.Memo = y, Y.Portal = r, Y.Profiler = s, Y.StrictMode = a, Y.Suspense = m, Y.isAsyncMode = function(l) {
    return O(l) || S(l) === u;
  }, Y.isConcurrentMode = O, Y.isContextConsumer = function(l) {
    return S(l) === c;
  }, Y.isContextProvider = function(l) {
    return S(l) === i;
  }, Y.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === t;
  }, Y.isForwardRef = function(l) {
    return S(l) === d;
  }, Y.isFragment = function(l) {
    return S(l) === n;
  }, Y.isLazy = function(l) {
    return S(l) === v;
  }, Y.isMemo = function(l) {
    return S(l) === y;
  }, Y.isPortal = function(l) {
    return S(l) === r;
  }, Y.isProfiler = function(l) {
    return S(l) === s;
  }, Y.isStrictMode = function(l) {
    return S(l) === a;
  }, Y.isSuspense = function(l) {
    return S(l) === m;
  }, Y.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === n || l === f || l === s || l === a || l === m || l === h || typeof l == "object" && l !== null && (l.$$typeof === v || l.$$typeof === y || l.$$typeof === i || l.$$typeof === c || l.$$typeof === d || l.$$typeof === _ || l.$$typeof === p || l.$$typeof === T || l.$$typeof === x);
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
var cn;
function Ec() {
  return cn || (cn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, p = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function S(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === n || D === f || D === s || D === a || D === m || D === h || typeof D == "object" && D !== null && (D.$$typeof === v || D.$$typeof === y || D.$$typeof === i || D.$$typeof === c || D.$$typeof === d || D.$$typeof === _ || D.$$typeof === p || D.$$typeof === T || D.$$typeof === x);
    }
    function O(D) {
      if (typeof D == "object" && D !== null) {
        var Ue = D.$$typeof;
        switch (Ue) {
          case t:
            var Ke = D.type;
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
                  case i:
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
    var l = u, j = f, $ = c, M = i, V = t, B = d, I = n, k = v, G = y, W = r, J = s, L = a, Z = m, w = !1;
    function A(D) {
      return w || (w = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), b(D) || O(D) === u;
    }
    function b(D) {
      return O(D) === f;
    }
    function E(D) {
      return O(D) === c;
    }
    function N(D) {
      return O(D) === i;
    }
    function P(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function C(D) {
      return O(D) === d;
    }
    function U(D) {
      return O(D) === n;
    }
    function ne(D) {
      return O(D) === v;
    }
    function le(D) {
      return O(D) === y;
    }
    function re(D) {
      return O(D) === r;
    }
    function pe(D) {
      return O(D) === s;
    }
    function we(D) {
      return O(D) === a;
    }
    function Ie(D) {
      return O(D) === m;
    }
    H.AsyncMode = l, H.ConcurrentMode = j, H.ContextConsumer = $, H.ContextProvider = M, H.Element = V, H.ForwardRef = B, H.Fragment = I, H.Lazy = k, H.Memo = G, H.Portal = W, H.Profiler = J, H.StrictMode = L, H.Suspense = Z, H.isAsyncMode = A, H.isConcurrentMode = b, H.isContextConsumer = E, H.isContextProvider = N, H.isElement = P, H.isForwardRef = C, H.isFragment = U, H.isLazy = ne, H.isMemo = le, H.isPortal = re, H.isProfiler = pe, H.isStrictMode = we, H.isSuspense = Ie, H.isValidElementType = S, H.typeOf = O;
  }()), H;
}
var un;
function Sc() {
  return un || (un = 1, process.env.NODE_ENV === "production" ? xt.exports = Tc() : xt.exports = Ec()), xt.exports;
}
var qt, dn;
function _c() {
  if (dn) return qt;
  dn = 1;
  var e = Sc(), t = {
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
  function i(v) {
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
      for (var S = i(v), O = i(x), l = 0; l < T.length; ++l) {
        var j = T[l];
        if (!r[j] && !(_ && _[j]) && !(O && O[j]) && !(S && S[j])) {
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
_c();
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
var Pt = /* @__PURE__ */ xa(void 0);
Pt.displayName = "FormikContext";
Pt.Provider;
Pt.Consumer;
function Ac() {
  var e = ja(Pt);
  return e || (process.env.NODE_ENV !== "production" ? We(!1, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.") : We()), e;
}
var be = function(t) {
  return typeof t == "function";
}, Dt = function(t) {
  return t !== null && typeof t == "object";
}, Nc = function(t) {
  return String(Math.floor(Number(t))) === t;
}, Yt = function(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}, Ht = function(t) {
  return Dt(t) && be(t.then);
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
function fe(e, t, r, n) {
  n === void 0 && (n = 0);
  for (var a = la(t); e && n < a.length; )
    e = e[a[n++]];
  return n !== a.length && !e || e === void 0 ? r : e;
}
function Me(e, t, r) {
  for (var n = an(e), a = n, s = 0, i = la(t); s < i.length - 1; s++) {
    var c = i[s], u = fe(e, i.slice(0, s + 1));
    if (u && (Dt(u) || Array.isArray(u)))
      a = a[c] = an(u);
    else {
      var f = i[s + 1];
      a = a[c] = Nc(f) && Number(f) >= 0 ? [] : {};
    }
  }
  return (s === 0 ? e : a)[i[s]] === r ? e : (r === void 0 ? delete a[i[s]] : a[i[s]] = r, s === 0 && r === void 0 && delete n[i[s]], n);
}
function ua(e, t, r, n) {
  r === void 0 && (r = /* @__PURE__ */ new WeakMap()), n === void 0 && (n = {});
  for (var a = 0, s = Object.keys(e); a < s.length; a++) {
    var i = s[a], c = e[i];
    Dt(c) ? r.get(c) || (r.set(c, !0), n[i] = Array.isArray(c) ? [] : {}, ua(c, t, r, n[i])) : n[i] = t;
  }
  return n;
}
function Oc(e, t) {
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
var Re = {}, vt = {};
function Fc(e) {
  var t = e.validateOnChange, r = t === void 0 ? !0 : t, n = e.validateOnBlur, a = n === void 0 ? !0 : n, s = e.validateOnMount, i = s === void 0 ? !1 : s, c = e.isInitialValid, u = e.enableReinitialize, f = u === void 0 ? !1 : u, d = e.onSubmit, m = ca(e, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]), h = ie({
    validateOnChange: r,
    validateOnBlur: a,
    validateOnMount: i,
    onSubmit: d
  }, m), y = xe(h.initialValues), v = xe(h.initialErrors || Re), x = xe(h.initialTouched || vt), _ = xe(h.initialStatus), p = xe(!1), T = xe({});
  process.env.NODE_ENV !== "production" && ce(function() {
    typeof c > "u" || (process.env.NODE_ENV !== "production" ? We(!1, "isInitialValid has been deprecated and will be removed in future versions of Formik. Please use initialErrors or validateOnMount instead.") : We());
  }, []), ce(function() {
    return p.current = !0, function() {
      p.current = !1;
    };
  }, []);
  var S = oe(0), O = S[1], l = xe({
    values: bt(h.initialValues),
    errors: bt(h.initialErrors) || Re,
    touched: bt(h.initialTouched) || vt,
    status: bt(h.initialStatus),
    isSubmitting: !1,
    isValidating: !1,
    submitCount: 0
  }), j = l.current, $ = ae(function(g) {
    var F = l.current;
    l.current = Oc(F, g), F !== l.current && O(function(R) {
      return R + 1;
    });
  }, []), M = ae(function(g, F) {
    return new Promise(function(R, z) {
      var K = h.validate(g, F);
      K == null ? R(Re) : Ht(K) ? K.then(function(q) {
        R(q || Re);
      }, function(q) {
        process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validate />", q), z(q);
      }) : R(K);
    });
  }, [h.validate]), V = ae(function(g, F) {
    var R = h.validationSchema, z = be(R) ? R(F) : R, K = F && z.validateAt ? z.validateAt(F, g) : Ic(g, z);
    return new Promise(function(q, se) {
      K.then(function() {
        q(Re);
      }, function(je) {
        je.name === "ValidationError" ? q(Cc(je)) : (process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validationSchema />", je), se(je));
      });
    });
  }, [h.validationSchema]), B = ae(function(g, F) {
    return new Promise(function(R) {
      return R(T.current[g].validate(F));
    });
  }, []), I = ae(function(g) {
    var F = Object.keys(T.current).filter(function(z) {
      return be(T.current[z].validate);
    }), R = F.length > 0 ? F.map(function(z) {
      return B(z, fe(g, z));
    }) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
    return Promise.all(R).then(function(z) {
      return z.reduce(function(K, q, se) {
        return q === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || q && (K = Me(K, F[se], q)), K;
      }, {});
    });
  }, [B]), k = ae(function(g) {
    return Promise.all([I(g), h.validationSchema ? V(g) : {}, h.validate ? M(g) : {}]).then(function(F) {
      var R = F[0], z = F[1], K = F[2], q = rr.all([R, z, K], {
        arrayMerge: Rc
      });
      return q;
    });
  }, [h.validate, h.validationSchema, I, M, V]), G = ge(function(g) {
    return g === void 0 && (g = j.values), $({
      type: "SET_ISVALIDATING",
      payload: !0
    }), k(g).then(function(F) {
      return p.current && ($({
        type: "SET_ISVALIDATING",
        payload: !1
      }), $({
        type: "SET_ERRORS",
        payload: F
      })), F;
    });
  });
  ce(function() {
    i && p.current === !0 && Pe(y.current, h.initialValues) && G(y.current);
  }, [i, G]);
  var W = ae(function(g) {
    var F = g && g.values ? g.values : y.current, R = g && g.errors ? g.errors : v.current ? v.current : h.initialErrors || {}, z = g && g.touched ? g.touched : x.current ? x.current : h.initialTouched || {}, K = g && g.status ? g.status : _.current ? _.current : h.initialStatus;
    y.current = F, v.current = R, x.current = z, _.current = K;
    var q = function() {
      $({
        type: "RESET_FORM",
        payload: {
          isSubmitting: !!g && !!g.isSubmitting,
          errors: R,
          touched: z,
          status: K,
          values: F,
          isValidating: !!g && !!g.isValidating,
          submitCount: g && g.submitCount && typeof g.submitCount == "number" ? g.submitCount : 0
        }
      });
    };
    if (h.onReset) {
      var se = h.onReset(j.values, Ue);
      Ht(se) ? se.then(q) : q();
    } else
      q();
  }, [h.initialErrors, h.initialStatus, h.initialTouched, h.onReset]);
  ce(function() {
    p.current === !0 && !Pe(y.current, h.initialValues) && f && (y.current = h.initialValues, W(), i && G(y.current));
  }, [f, h.initialValues, W, i, G]), ce(function() {
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
  var J = ge(function(g) {
    if (T.current[g] && be(T.current[g].validate)) {
      var F = fe(j.values, g), R = T.current[g].validate(F);
      return Ht(R) ? ($({
        type: "SET_ISVALIDATING",
        payload: !0
      }), R.then(function(z) {
        return z;
      }).then(function(z) {
        $({
          type: "SET_FIELD_ERROR",
          payload: {
            field: g,
            value: z
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
      }), V(j.values, g).then(function(z) {
        return z;
      }).then(function(z) {
        $({
          type: "SET_FIELD_ERROR",
          payload: {
            field: g,
            value: fe(z, g)
          }
        }), $({
          type: "SET_ISVALIDATING",
          payload: !1
        });
      });
    return Promise.resolve();
  }), L = ae(function(g, F) {
    var R = F.validate;
    T.current[g] = {
      validate: R
    };
  }, []), Z = ae(function(g) {
    delete T.current[g];
  }, []), w = ge(function(g, F) {
    $({
      type: "SET_TOUCHED",
      payload: g
    });
    var R = F === void 0 ? a : F;
    return R ? G(j.values) : Promise.resolve();
  }), A = ae(function(g) {
    $({
      type: "SET_ERRORS",
      payload: g
    });
  }, []), b = ge(function(g, F) {
    var R = be(g) ? g(j.values) : g;
    $({
      type: "SET_VALUES",
      payload: R
    });
    var z = F === void 0 ? r : F;
    return z ? G(R) : Promise.resolve();
  }), E = ae(function(g, F) {
    $({
      type: "SET_FIELD_ERROR",
      payload: {
        field: g,
        value: F
      }
    });
  }, []), N = ge(function(g, F, R) {
    var z = be(F) ? F(fe(j.values, g)) : F;
    $({
      type: "SET_FIELD_VALUE",
      payload: {
        field: g,
        value: z
      }
    });
    var K = R === void 0 ? r : R;
    return K ? G(Me(j.values, g, z)) : Promise.resolve();
  }), P = ae(function(g, F) {
    var R = F, z = g, K;
    if (!Yt(g)) {
      g.persist && g.persist();
      var q = g.target ? g.target : g.currentTarget, se = q.type, je = q.name, kt = q.id, Lt = q.value, ya = q.checked, ga = q.outerHTML, vr = q.options, ba = q.multiple;
      R = F || je || kt, !R && process.env.NODE_ENV !== "production" && fn({
        htmlContent: ga,
        documentationAnchorLink: "handlechange-e-reactchangeeventany--void",
        handlerName: "handleChange"
      }), z = /number|range/.test(se) ? (K = parseFloat(Lt), isNaN(K) ? "" : K) : /checkbox/.test(se) ? Dc(fe(j.values, R), ya, Lt) : vr && ba ? Pc(vr) : Lt;
    }
    R && N(R, z);
  }, [N, j.values]), C = ge(function(g) {
    if (Yt(g))
      return function(F) {
        return P(F, g);
      };
    P(g);
  }), U = ge(function(g, F, R) {
    F === void 0 && (F = !0), $({
      type: "SET_FIELD_TOUCHED",
      payload: {
        field: g,
        value: F
      }
    });
    var z = R === void 0 ? a : R;
    return z ? G(j.values) : Promise.resolve();
  }), ne = ae(function(g, F) {
    g.persist && g.persist();
    var R = g.target, z = R.name, K = R.id, q = R.outerHTML, se = F || z || K;
    !se && process.env.NODE_ENV !== "production" && fn({
      htmlContent: q,
      documentationAnchorLink: "handleblur-e-any--void",
      handlerName: "handleBlur"
    }), U(se, !0);
  }, [U]), le = ge(function(g) {
    if (Yt(g))
      return function(F) {
        return ne(F, g);
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
    }), G().then(function(g) {
      var F = g instanceof Error, R = !F && Object.keys(g).length === 0;
      if (R) {
        var z;
        try {
          if (z = Ke(), z === void 0)
            return;
        } catch (K) {
          throw K;
        }
        return Promise.resolve(z).then(function(K) {
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
      }), F))
        throw g;
    });
  }), D = ge(function(g) {
    if (g && g.preventDefault && be(g.preventDefault) && g.preventDefault(), g && g.stopPropagation && be(g.stopPropagation) && g.stopPropagation(), process.env.NODE_ENV !== "production" && typeof document < "u") {
      var F = $c();
      F !== null && F instanceof HTMLButtonElement && (F.attributes && F.attributes.getNamedItem("type") || (process.env.NODE_ENV !== "production" ? We(!1, 'You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type="submit"`. If this is not a submit button, please add `type="button"`.') : We()));
    }
    Ie().catch(function(R) {
      console.warn("Warning: An unhandled error was caught from submitForm()", R);
    });
  }), Ue = {
    resetForm: W,
    validateForm: G,
    validateField: J,
    setErrors: A,
    setFieldError: E,
    setFieldTouched: U,
    setFieldValue: N,
    setStatus: pe,
    setSubmitting: we,
    setTouched: w,
    setValues: b,
    setFormikState: re,
    submitForm: Ie
  }, Ke = ge(function() {
    return d(j.values, Ue);
  }), pt = ge(function(g) {
    g && g.preventDefault && be(g.preventDefault) && g.preventDefault(), g && g.stopPropagation && be(g.stopPropagation) && g.stopPropagation(), W();
  }), da = ae(function(g) {
    return {
      value: fe(j.values, g),
      error: fe(j.errors, g),
      touched: !!fe(j.touched, g),
      initialValue: fe(y.current, g),
      initialTouched: !!fe(x.current, g),
      initialError: fe(v.current, g)
    };
  }, [j.errors, j.touched, j.values]), fa = ae(function(g) {
    return {
      setValue: function(R, z) {
        return N(g, R, z);
      },
      setTouched: function(R, z) {
        return U(g, R, z);
      },
      setError: function(R) {
        return E(g, R);
      }
    };
  }, [N, U, E]), ha = ae(function(g) {
    var F = Dt(g), R = F ? g.name : g, z = fe(j.values, R), K = {
      name: R,
      value: z,
      onChange: C,
      onBlur: le
    };
    if (F) {
      var q = g.type, se = g.value, je = g.as, kt = g.multiple;
      q === "checkbox" ? se === void 0 ? K.checked = !!z : (K.checked = !!(Array.isArray(z) && ~z.indexOf(se)), K.value = se) : q === "radio" ? (K.checked = z === se, K.value = se) : je === "select" && kt && (K.value = K.value || [], K.multiple = !0);
    }
    return K;
  }, [le, C, j.values]), Mt = _t(function() {
    return !Pe(y.current, j.values);
  }, [y.current, j.values]), pa = _t(function() {
    return typeof c < "u" ? Mt ? j.errors && Object.keys(j.errors).length === 0 : c !== !1 && be(c) ? c(h) : c : j.errors && Object.keys(j.errors).length === 0;
  }, [c, Mt, j.errors, h]), ma = ie({}, j, {
    initialValues: y.current,
    initialErrors: v.current,
    initialTouched: x.current,
    initialStatus: _.current,
    handleBlur: le,
    handleChange: C,
    handleReset: pt,
    handleSubmit: D,
    resetForm: W,
    setErrors: A,
    setFormikState: re,
    setFieldTouched: U,
    setFieldValue: N,
    setFieldError: E,
    setStatus: pe,
    setSubmitting: we,
    setTouched: w,
    setValues: b,
    submitForm: Ie,
    validateForm: G,
    validateField: J,
    isValid: pa,
    dirty: Mt,
    unregisterField: Z,
    registerField: L,
    getFieldProps: ha,
    getFieldMeta: da,
    getFieldHelpers: fa,
    validateOnBlur: a,
    validateOnChange: r,
    validateOnMount: i
  });
  return ma;
}
function fn(e) {
  var t = e.htmlContent, r = e.documentationAnchorLink, n = e.handlerName;
  console.warn("Warning: Formik called `" + n + "`, but you forgot to pass an `id` or `name` attribute to your input:\n    " + t + `
    Formik cannot determine which value to update. For more info see https://formik.org/docs/api/formik#` + r + `
  `);
}
function Cc(e) {
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
      var i = s;
      fe(t, i.path) || (t = Me(t, i.path, i.message));
    }
  }
  return t;
}
function Ic(e, t, r, n) {
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
        return Array.isArray(a) === !0 || Pr(a) ? or(a) : a !== "" ? a : void 0;
      }) : Pr(e[n]) ? t[n] = or(e[n]) : t[n] = e[n] !== "" ? e[n] : void 0;
    }
  return t;
}
function Rc(e, t, r) {
  var n = e.slice();
  return t.forEach(function(s, i) {
    if (typeof n[i] > "u") {
      var c = r.clone !== !1, u = c && r.isMergeableObject(s);
      n[i] = u ? rr(Array.isArray(s) ? [] : {}, s, r) : s;
    } else r.isMergeableObject(s) ? n[i] = rr(e[i], s, r) : e.indexOf(s) === -1 && n.push(s);
  }), n;
}
function Pc(e) {
  return Array.from(e).filter(function(t) {
    return t.selected;
  }).map(function(t) {
    return t.value;
  });
}
function Dc(e, t, r) {
  if (typeof e == "boolean")
    return !!t;
  var n = [], a = !1, s = -1;
  if (Array.isArray(e))
    n = e, s = e.indexOf(r), a = s >= 0;
  else if (!r || r == "true" || r == "false")
    return !!t;
  return t && r && !a ? n.concat(r) : a ? n.slice(0, s).concat(n.slice(s + 1)) : n;
}
var Mc = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? yn : ce;
function ge(e) {
  var t = xe(e);
  return Mc(function() {
    t.current = e;
  }), ae(function() {
    for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return t.current.apply(void 0, n);
  }, []);
}
var kc = /* @__PURE__ */ va(function(e, t) {
  var r = e.action, n = ca(e, ["action"]), a = r ?? "#", s = Ac(), i = s.handleReset, c = s.handleSubmit;
  return wa("form", ie({
    onSubmit: c,
    ref: t,
    onReset: i,
    action: a
  }, n));
});
kc.displayName = "Form";
function wt({
  anchorRef: e,
  open: t,
  children: r,
  offset: n = 4
}) {
  const [a, s] = oe({});
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
function Lc({
  field: e,
  formik: t,
  methods: r = {},
  sqlOpsUrls: n,
  refid: a,
  optionsOverride: s,
  setFieldOptions: i,
  module_refid: c
}) {
  const [u, f] = oe(!1), [d, m] = oe(
    s ?? e.options ?? {}
  );
  console.log("methods in noram FieldRenderer", r);
  const [h, y] = oe(""), [v, x] = oe(0), _ = xe(null), [p, T] = oe(!1), S = te.useRef(h), O = xe(null);
  te.useEffect(() => {
    S.current = h;
  }, [h]), ce(() => {
    s && Object.keys(s).length !== 0 && m(s);
  }, [s]), ce(() => {
    if (!p) return;
    const L = (Z) => {
      const w = Z.target;
      O.current?.contains(w) || _.current?.contains(w) || (T(!1), y(""));
    };
    return document.addEventListener("mousedown", L), () => {
      document.removeEventListener("mousedown", L);
    };
  }, [p]);
  const l = e.name;
  te.useEffect(() => {
    let L = !0;
    return (async () => {
      let w = e.valueKey ?? "value", A = e.labelKey ?? "title";
      if (e?.options) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const C = Object.values(e.options);
          if (C.length && typeof C[0] == "string") {
            m(e.options);
            return;
          }
        }
        const N = (Array.isArray(e.options) ? e.options : [e.options]).map(me), P = ve(
          w,
          A,
          N,
          e.groupKey
          // auto-uses `category` if present
        );
        m(P);
        return;
      }
      const b = e?.source ?? {};
      if (e.type === "dataMethod") {
        const E = e.method, N = E ? r[E] : void 0;
        if (N)
          try {
            const P = await Promise.resolve(N()), C = Array.isArray(P?.data?.data) ? P.data.data : Array.isArray(P?.data) ? P.data : P, U = Array.isArray(C) ? C.map(me) : [], ne = ve(w, A, U, e.groupKey);
            L && m(ne);
          } catch (P) {
            console.error("Method execution failed:", P), L && m({});
          }
        else
          L && m({});
      }
      if (b.type === "api" && b.url)
        try {
          const E = await Q({
            method: b.method || "GET",
            url: b.url,
            data: b.body ?? {},
            params: b.params ?? {},
            headers: b.headers ?? {}
          }), N = Array.isArray(E?.data?.data) ? E.data.data : Array.isArray(E?.data) ? E.data : E, P = Array.isArray(N) ? N.map(me) : [], C = ve(w, A, P, e.groupKey);
          L && m(C);
        } catch (E) {
          console.error("API execution failed:", E), L && m({});
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
          const N = await He(n, E, e?.queryid, void 0, c), P = Array.isArray(N?.data?.data) ? N.data.data : Array.isArray(N?.data) ? N.data : N, C = Array.isArray(P) ? P.map(me) : [], U = ve(w, A, C, e.groupKey);
          L && m(U);
        } catch (E) {
          console.error("API fetch failed:", E);
        }
      }
    })(), () => {
      L = !1;
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
  `, M = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, V = (L) => L.icon ? /* @__PURE__ */ o.jsx("i", { className: L.icon }) : null, B = _t(
    () => ys(d),
    [d]
  ), I = B.length, k = _t(() => e.search || !h ? B : B.filter(
    ([, L]) => L.toLowerCase().includes(h.toLowerCase())
  ), [e.search, h, B]), G = (L, Z) => {
    if (p === !0)
      if (L.key === "ArrowDown")
        L.preventDefault(), x(
          (w) => w + 1 < k.length ? w + 1 : 0
        );
      else if (L.key === "ArrowUp")
        L.preventDefault(), x(
          (w) => w - 1 >= 0 ? w - 1 : k.length - 1
        );
      else if (L.key === "Enter") {
        L.preventDefault();
        const [w] = k[v] || [];
        w && t.setFieldValue(e.name, Z ? w : [...t.values[e.name], w]);
      } else L.key === "Escape" && (y(""), T(!1));
  };
  ce(() => {
    _.current?.querySelector(
      `[data-index="${v}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [v]), ce(() => {
    v >= k.length && x(0);
  }, [k, v]), ce(() => {
    const L = e.autocomplete, Z = e.ajaxchain;
    if (!L && !Z) return;
    const w = t.values[e.name];
    if (!w) return;
    const A = Array.isArray(Z) ? Z : Z ? [Z] : [];
    (async () => {
      try {
        if (ps(L)) {
          const E = L.src;
          if (!E || !n) return;
          const N = he(E.where ?? {}, {
            refid: w
          }), P = {
            ...E,
            table: E.table,
            cols: E.columns,
            where: N
          }, { data: C } = await He(n, P, e?.queryid, void 0, c), U = Array.isArray(C?.data) ? C.data[0] : C?.data;
          U && L.target.split(",").map((ne) => ne.trim()).forEach((ne) => {
            U[ne] !== void 0 && t.setFieldValue(ne, U[ne]);
          });
        }
        for (const E of A) {
          const N = E.src;
          if (!E || typeof E != "object" || !N || typeof N != "object" || !n) continue;
          let P;
          if (!N.queryid) {
            if (!N.table || !N.columns)
              throw new Error("SQL query requires field.table");
            const we = he(N?.where ?? {}, {
              refid: w
            });
            P = {
              ...N,
              table: N.table,
              cols: N.columns,
              where: we
            };
          }
          const { data: C } = await He(n, P, e?.queryid, w, c);
          let U = e.valueKey ?? "value", ne = e.labelKey ?? "title";
          const le = Array.isArray(C?.data?.data) ? C.data.data : Array.isArray(C?.data) ? C.data : C, re = Array.isArray(le) ? le.map(me) : [], pe = ve(
            U,
            ne,
            re,
            e.groupKey
          );
          i?.(E.target, pe);
        }
      } catch (E) {
        console.error("Autocomplete / AjaxChain fetch failed", E);
      }
    })();
  }, [t.values[e.name]]), te.useEffect(() => {
    if (!e.search || !h.trim() || !e.table || !n) return;
    const L = ms(e.columns ?? ""), Z = new AbortController(), w = setTimeout(async () => {
      try {
        let A;
        if (!e.queryid) {
          if (!e.table || !e.cols)
            throw new Error("SQL query requires field.table");
          const le = a ? he(e.where ?? {}, {
            refid: a
          }) : e.where;
          A = {
            ...e,
            table: e.table,
            cols: e.columns || e.cols,
            where: le
          };
        }
        let b = {};
        Array.isArray(L) && L.forEach((le) => {
          b[le] = [h, "LIKE"];
        });
        const { data: E } = await He(n, A, e?.queryid, void 0, c, b);
        let N = e.valueKey ?? "value", P = e.labelKey ?? "title";
        const C = Array.isArray(E?.data?.data) ? E.data.data : Array.isArray(E?.data) ? E.data : E, U = Array.isArray(C) ? C.map(me) : [], ne = ve(
          N,
          P,
          U,
          e.groupKey
        );
        m(ne);
      } catch (A) {
        if (Q.isCancel(A)) return;
        console.error("Search fetch failed", A);
      }
    }, 500);
    return () => {
      clearTimeout(w), Z.abort();
    };
  }, [h, a]);
  const W = async (L) => {
    if (L.length === 0) {
      console.error("No file");
      return;
    }
    if (!n) return;
    const Z = n?.baseURL + n?.uploadURL;
    if (!Z) {
      console.error("No Upload URL ");
      return;
    }
    const w = e.multiple === !0;
    try {
      const A = await Promise.all(
        Array.from(L).map(async (b) => {
          const E = new FormData();
          return E.append("file", b), (await Q({
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
        w ? A.map((b) => b.path) : A[0]?.path
      );
    } catch (A) {
      console.error("File upload failed", A), t.setFieldError(l, "File upload failed");
    }
  }, J = async (L, Z, w) => {
    const A = Z[L];
    if (console.log("methodName", A), !A) return;
    const b = r?.[A];
    if (typeof b != "function") {
      console.error(`Method "${String(A)}" not found`);
      return;
    }
    try {
      await Promise.resolve(b(w));
    } catch (E) {
      console.error(`Method "${String(A)}" failed`, E);
    }
  };
  switch (e.type) {
    case "autocomplete": {
      const w = t.values[l] ?? "", A = h !== "" ? h : Ir(d, w) ?? String(w ?? ""), b = (N) => {
        const P = N.target.value;
        y(P), x(0), P.trim() ? T(!0) : (T(!1), t.setFieldValue(l, ""));
      }, E = (N) => {
        t.setFieldValue(l, N), y(""), T(!1), J("onChange", e, `${l}-${N}`);
      };
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsx("div", { ref: O, children: /* @__PURE__ */ o.jsx(
          "input",
          {
            className: `${j} ${$}`,
            value: A,
            placeholder: e.placeholder || "Type to search...",
            onChange: b,
            onFocus: () => {
              const N = String(t.values[l] ?? "");
              y(N);
            },
            onBlur: () => {
              setTimeout(() => T(!1), 150);
            },
            onKeyDown: (N) => {
              if (N.key === "Enter") {
                if (N.preventDefault(), k[v]) {
                  const [P] = k[v];
                  t.setFieldValue(l, P);
                } else h.trim() && t.setFieldValue(l, h.trim());
                T(!1);
                return;
              }
              G(N, !0);
            },
            disabled: e.disabled
          }
        ) }),
        /* @__PURE__ */ o.jsx(wt, { anchorRef: O, open: p, children: /* @__PURE__ */ o.jsx(
          "div",
          {
            ref: _,
            className: "bg-white border rounded shadow max-h-52 overflow-y-auto",
            children: k.length > 0 ? k.map(([N, P], C) => /* @__PURE__ */ o.jsx(
              "div",
              {
                id: `${l}-${N}`,
                "data-index": C,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${v === C ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => E(N),
                children: P
              },
              N
            )) : /* @__PURE__ */ o.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `No matches press enter to add "${A}" ` })
          }
        ) }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[l]) })
      ] });
    }
    case "dataSelector":
    case "dataSelectorFromTable":
    case "dataSelectorFromUniques":
    case "dataMethod": {
      if (e.multiple === !0) {
        const w = t.values[l] ?? [];
        return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ o.jsxs("label", { className: M, children: [
            e.label,
            e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ o.jsxs(
            "div",
            {
              ref: O,
              tabIndex: 0,
              className: "cursor-pointer select-none border border-gray-300 rounded-lg px-4 py-2.5 bg-white flex justify-between items-center",
              onClick: () => {
                T((A) => !A), x(0);
              },
              onKeyDown: (A) => G(A, !1),
              onBlur: () => {
                e.multiple || setTimeout(() => {
                  T(!1), y("");
                }, 150);
              },
              children: [
                /* @__PURE__ */ o.jsx("span", { className: "text-sm text-gray-700 truncate", children: w.length > 0 ? w.join(", ") : `Select ${e.label}` }),
                /* @__PURE__ */ o.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
              ]
            }
          ),
          /* @__PURE__ */ o.jsx(wt, { anchorRef: O, open: p, children: /* @__PURE__ */ o.jsxs(
            "div",
            {
              ref: _,
              className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
              children: [
                e.search && /* @__PURE__ */ o.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "text",
                    value: h,
                    onChange: (A) => {
                      y(A.target.value), x(0);
                    },
                    placeholder: "Search...",
                    className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                  }
                ) }),
                k.length > 0 ? k.map(([A, b], E) => /* @__PURE__ */ o.jsxs(
                  "label",
                  {
                    "data-index": E,
                    className: `flex items-center gap-x-2 px-2 py-1 rounded cursor-pointer text-sm
                    ${w.includes(A) ? "bg-indigo-50 text-indigo-600 font-medium" : v === E ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: [
                      /* @__PURE__ */ o.jsx(
                        "input",
                        {
                          id: `${l}-${A}`,
                          type: "checkbox",
                          checked: w.includes(A),
                          onChange: (N) => {
                            const P = N.target.checked ? [...w, A] : w.filter((C) => C !== A);
                            t.setFieldValue(l, P), J("onChange", e, `${l}-${A}`);
                          },
                          className: "h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        }
                      ),
                      b
                    ]
                  },
                  A
                )) : /* @__PURE__ */ o.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ]
            }
          ) }),
          t.touched[l] && t.errors[l] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[l]) })
        ] });
      }
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs(
          "div",
          {
            ref: O,
            tabIndex: 0,
            className: "cursor-pointer select-none border border-gray-300 rounded-lg px-4 py-2.5 bg-white flex justify-between items-center",
            onClick: () => {
              T((w) => !w), x(0);
            },
            onKeyDown: (w) => G(w, !0),
            onBlur: () => {
              setTimeout(() => {
                T(!1), y("");
              }, 150);
            },
            children: [
              /* @__PURE__ */ o.jsx("span", { className: "text-sm text-gray-700 truncate", children: t.values[l] ? Ir(d, t.values[l]) ?? "Select option" : `Select ${e.label}` }),
              /* @__PURE__ */ o.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
            ]
          }
        ),
        /* @__PURE__ */ o.jsx(wt, { anchorRef: O, open: p, children: /* @__PURE__ */ o.jsxs(
          "div",
          {
            ref: _,
            className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
            children: [
              e.search && /* @__PURE__ */ o.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ o.jsx(
                "input",
                {
                  type: "text",
                  value: h,
                  onChange: (w) => {
                    y(w.target.value), x(0);
                  },
                  onKeyDown: (w) => G(w, !0),
                  placeholder: "Search...",
                  className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                }
              ) }),
              k.length > 0 && /* @__PURE__ */ o.jsx(
                "div",
                {
                  onMouseDown: (w) => {
                    w.preventDefault(), t.setFieldValue(l, ""), T(!1), y("");
                  },
                  className: "px-2 py-1 text-sm cursor-pointer hover:bg-gray-50",
                  children: "Clear selection"
                }
              ),
              k.length > 0 ? k.map(([w, A], b) => /* @__PURE__ */ o.jsx(
                "div",
                {
                  id: `${l}-${w}`,
                  "data-index": b,
                  onMouseDown: () => {
                    t.setFieldValue(l, w), T(!1), y(""), x(0), J("onChange", e, `${l}-${w}`);
                  },
                  className: `px-2 py-1 rounded cursor-pointer text-sm
                  ${t.values[l] === w ? "bg-indigo-50 text-indigo-600 font-medium" : v === b ? "bg-gray-100" : "hover:bg-gray-50"}`,
                  children: A
                },
                w
              )) : /* @__PURE__ */ o.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
            ]
          }
        ) }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[l]) })
      ] });
    }
    case "textarea":
      return /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ o.jsx(
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
                ), J("onChange", e, `${l}`);
              },
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ o.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${u ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[l]) })
      ] }) });
    case "select":
      if (e.multiple === !0) {
        const w = t.values[l] ?? [];
        return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ o.jsxs("label", { className: M, children: [
            e.label,
            e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ o.jsxs(
            "div",
            {
              ref: O,
              tabIndex: 0,
              className: "cursor-pointer select-none border border-gray-300 rounded-lg px-4 py-2.5 bg-white flex justify-between items-center",
              onClick: () => {
                T((A) => !A), x(0);
              },
              onKeyDown: (A) => G(A, !1),
              onBlur: () => {
                e.multiple || setTimeout(() => {
                  T(!1), y("");
                }, 150);
              },
              children: [
                /* @__PURE__ */ o.jsx("span", { className: "text-sm text-gray-700 truncate", children: w.length > 0 ? w.join(", ") : `Select ${e.label}` }),
                /* @__PURE__ */ o.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
              ]
            }
          ),
          /* @__PURE__ */ o.jsx(wt, { anchorRef: O, open: p, children: /* @__PURE__ */ o.jsxs(
            "div",
            {
              ref: _,
              className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
              children: [
                e.search && /* @__PURE__ */ o.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "text",
                    value: h,
                    onChange: (A) => {
                      y(A.target.value), x(0);
                    },
                    placeholder: "Search...",
                    className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                  }
                ) }),
                k.length > 0 ? k.map(([A, b], E) => /* @__PURE__ */ o.jsxs(
                  "label",
                  {
                    "data-index": E,
                    className: `flex items-center gap-x-2 px-2 py-1 rounded cursor-pointer text-sm
                    ${w.includes(A) ? "bg-indigo-50 text-indigo-600 font-medium" : v === E ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: [
                      /* @__PURE__ */ o.jsx(
                        "input",
                        {
                          id: `${l}-${A}`,
                          type: "checkbox",
                          checked: w.includes(A),
                          onChange: (N) => {
                            const P = N.target.checked ? [...w, A] : w.filter((C) => C !== A);
                            t.setFieldValue(l, P), J("onChange", e, `${l}-${A}`);
                          },
                          className: "h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        }
                      ),
                      b
                    ]
                  },
                  A
                )) : /* @__PURE__ */ o.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ]
            }
          ) }),
          t.touched[l] && t.errors[l] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[l]) })
        ] });
      }
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ o.jsxs(
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
                ), J("onChange", e, `${l}`);
              },
              disabled: e.disabled,
              children: [
                /* @__PURE__ */ o.jsx("option", { value: "", disabled: !0, children: e.placeholder || "Please select an option" }),
                !tr(d) && Object.entries(d).map(([w, A]) => /* @__PURE__ */ o.jsx("option", { value: w, className: "py-2", children: A }, w)),
                tr(d) && Object.entries(d).map(([w, A]) => /* @__PURE__ */ o.jsx("optgroup", { label: w, children: Object.entries(A).map(([b, E]) => /* @__PURE__ */ o.jsx("option", { value: b, children: E }, b)) }, w))
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
        t.touched[l] && t.errors[l] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[l]) })
      ] });
    case "radioList":
    case "radio":
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: `flex ${I > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(d || {}).map(([w, A]) => /* @__PURE__ */ o.jsxs(
          "label",
          {
            htmlFor: `${l}-${w}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ o.jsx(
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
                    ), J("onChange", e, `${l}-${w}`);
                  },
                  onBlur: t.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              A
            ]
          },
          w
        )) }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[l]) })
      ] });
    case "checkbox": {
      const w = t.values[l];
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(d || {}).map(([A, b]) => /* @__PURE__ */ o.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  id: `${l}-${A}`,
                  type: "checkbox",
                  checked: w.includes(A),
                  onChange: (E) => {
                    const N = E.target.checked ? [...w, A] : w.filter((P) => P !== A);
                    t.setFieldValue(l, N), J("onChange", e, `${l}-${A}`);
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
        t.touched[l] && t.errors[l] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[l]) })
      ] });
    }
    case "tags": {
      const w = t.values[l], A = h.trim(), b = Array.isArray(d) ? d : Object.entries(d || {}).map(([C, U]) => ({ value: C, label: U })), E = (C) => {
        C && !w.includes(C) && (t.setFieldValue(l, [...w, C]), y(""));
      }, N = (C) => {
        t.setFieldValue(
          l,
          w.filter((U) => U !== C)
        );
      }, P = (C) => b.find((U) => U.value === C)?.label ?? C;
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: `${j} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !e.disabled && document.getElementById(`${l}-input`)?.focus(),
            children: [
              w.map((C) => /* @__PURE__ */ o.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ o.jsx("span", { className: "text-indigo-700", children: P(C) }),
                    /* @__PURE__ */ o.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (U) => {
                          U.stopPropagation(), e.disabled || N(C);
                        },
                        onMouseDown: (U) => U.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                C
              )),
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  id: `${l}-input`,
                  type: "text",
                  value: h,
                  onChange: (C) => y(C.target.value),
                  onKeyDown: (C) => {
                    (C.key === "Enter" || C.key === ",") && (C.preventDefault(), E(A));
                  },
                  placeholder: w.length === 0 ? e.placeholder || "Type and press Enter" : "",
                  className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                  disabled: e.disabled
                }
              )
            ]
          }
        ),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[l]) })
      ] });
    }
    case "attachment":
    case "photo":
    case "avatar":
    case "file":
      const L = e.multiple === !0, Z = Array.isArray(t.values[l]) ? t.values[l] : t.values[l] ? [t.values[l]] : [];
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ o.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: V(e) }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              id: l,
              type: "file",
              className: `${j} ${$} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => f(!0),
              name: l,
              multiple: L,
              onChange: (w) => {
                const A = w.currentTarget.files;
                A && W(A), J("onChange", e, `${l}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ o.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${u ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        Z.map((w) => {
          const A = w?.split("/").pop();
          return A ? /* @__PURE__ */ o.jsx("div", { className: "mt-1", children: /* @__PURE__ */ o.jsx("span", { className: "text-sm", children: A }) }, w) : null;
        }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[l]) })
      ] });
    case "json":
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ o.jsx(
            "textarea",
            {
              id: l,
              name: l,
              value: t.values[l],
              onChange: (w) => {
                t.setFieldValue(
                  l,
                  w.target.value
                ), J("onChange", e, `${l}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: e.disabled,
              className: `${j} ${$} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ o.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${u ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[l]) })
      ] });
    case "date":
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ o.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: V(e) }),
          /* @__PURE__ */ o.jsx(
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
                ), J("onChange", e, `${l}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled,
              className: `${j} ${$} ${e.icon ? "pl-9" : ""}`
            }
          ),
          /* @__PURE__ */ o.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${u ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[l]) })
      ] });
    case "number":
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ o.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: V(e) }),
          /* @__PURE__ */ o.jsx(
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
                ), J("onChange", e, `${l}`);
              },
              step: e.step,
              placeholder: e.placeholder,
              disabled: e.disabled,
              min: e.min,
              max: e.max
            }
          ),
          /* @__PURE__ */ o.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${u ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[l]) })
      ] });
    default:
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ o.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: V(e) }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              id: l,
              type: e.type || "text",
              className: `${j} ${$} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => f(!0),
              name: l,
              value: t.values[l],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              placeholder: e.placeholder,
              disabled: e.disabled,
              step: e.step,
              minLength: e.minlength,
              maxLength: e.maxlength
            }
          ),
          /* @__PURE__ */ o.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${u ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[l]) })
      ] });
  }
}
function zc({
  title: e,
  fields: t,
  data: r,
  onSubmit: n = (f) => {
  },
  onCancel: a = () => {
  },
  methods: s = {},
  sqlOpsUrls: i,
  refid: c,
  module_refid: u
}) {
  const f = ds(t, i?.operation), [d, m] = te.useState({}), h = (p, T) => {
    m((S) => ({
      ...S,
      [p]: T
    }));
  }, { initialValues: y, validationSchema: v } = te.useMemo(() => {
    const p = {}, T = {};
    return f.forEach((S) => {
      hs([S], p, T, r);
    }), {
      initialValues: p,
      validationSchema: T
    };
  }, [f, r]), x = Fc({
    initialValues: y,
    enableReinitialize: !0,
    validationSchema: Fn().shape(v),
    onSubmit: (p) => {
      n(p), x.resetForm();
    }
  });
  function _(p) {
    p.preventDefault(), x.resetForm();
  }
  return console.log("methods in noram form", s), /* @__PURE__ */ o.jsx("div", { className: "relative z-10 max-w-full ", children: /* @__PURE__ */ o.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ o.jsxs("form", { onSubmit: x.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "grid grid-flow-col auto-cols-max gap-4  overflow-x-auto", children: [
      f.map((p, T) => fs(p.hidden) || p.type === "geolocation" || p.vmode === "edit" && i?.operation === "create" ? null : /* @__PURE__ */ o.jsx(
        "div",
        {
          children: /* @__PURE__ */ o.jsx(
            Lc,
            {
              refid: c,
              module_refid: u,
              ...i ? { sqlOpsUrls: i } : {},
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
      /* @__PURE__ */ o.jsxs("div", { className: "", children: [
        /* @__PURE__ */ o.jsx("div", { children: "  " }),
        /* @__PURE__ */ o.jsx("button", { onClick: _, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Reset" }),
        Object.keys(x.errors).length > 0 && /* @__PURE__ */ o.jsx("div", { children: "  " })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "", children: [
        /* @__PURE__ */ o.jsx("div", { children: "  " }),
        /* @__PURE__ */ o.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" }),
        Object.keys(x.errors).length > 0 && /* @__PURE__ */ o.jsx("div", { children: "  " })
      ] })
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "mt-8 flex justify-between space-x-3", children: /* @__PURE__ */ o.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }) })
  ] }) }) });
}
const at = (e) => ({
  Authorization: `Bearer ${e.accessToken}`
}), Wt = async (e) => (await Q.get(
  e.baseURL + e.dbopsGetHash,
  { headers: at(e) }
)).data.refhash, Zt = async (e, t) => (await Q.post(
  e.baseURL + e.dbopsGetRefId,
  t,
  { headers: at(e) }
)).data.refid, Vc = {
  async fetch(e, t, r, n) {
    const a = await Wt(e);
    let s = !1, i;
    r && (s = !0, i = r), s || (i = await Zt(e, {
      operation: "fetch",
      source: t.source,
      fields: t.fields ?? {},
      datahash: a,
      srcid: n
    }));
    const c = await Q.post(
      e.baseURL + e.dbopsFetch,
      { refid: i, datahash: a },
      { headers: at(e) }
    );
    return c.data?.data ?? c.data;
  },
  async create(e, t, r) {
    const n = await Wt(e), a = await Zt(e, {
      operation: "create",
      source: t.source,
      fields: t.values,
      datahash: n,
      srcid: r
    });
    return (await Q.post(
      e.baseURL + e.dbopsCreate,
      { refid: a, fields: t.values, datahash: n },
      { headers: at(e) }
    )).data;
  },
  async update(e, t, r) {
    const n = await Wt(e), a = await Zt(e, {
      operation: "update",
      source: t.source,
      fields: t.values,
      datahash: n,
      srcid: r
    });
    return (await Q.post(
      e.baseURL + e.dbopsUpdate,
      { refid: a, fields: t.values, datahash: n },
      { headers: at(e) }
    )).data;
  }
};
function Bc({
  formJson: e = { title: "", fields: {}, source: {} },
  methods: t = {},
  userid: r = null,
  onCancel: n = () => {
  },
  components: a = {},
  callback: s = () => {
  },
  initialvalues: i = {},
  setEditData: c,
  module_refid: u
}) {
  const f = e.endPoints, d = e?.source?.refid, [m, h] = te.useState(i), y = te.useMemo(() => cs(e.fields), [e.fields]);
  te.useEffect(() => {
    h(i ?? {});
  }, [i]);
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
          const O = S.method, l = O ? t[O] : void 0;
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
            const O = await Q({
              method: S.method || "GET",
              url: S.url ?? "",
              data: S.body ?? {},
              params: S.params ?? {},
              headers: S.headers ?? {}
            });
            p && v(O.data);
          } catch (O) {
            console.error("API fetch failed:", O);
          }
        if (S.type === "sql" && S.refid && S.refid !== "0" && f?.operation !== "create" || f?.operation !== "create" && S.dbopsid) {
          if (!f) {
            console.error("SQL source requires formJson.endPoints but it is missing");
            return;
          }
          try {
            const O = await Vc.fetch(f, {
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
            p && v(O);
          } catch (O) {
            console.error("API fetch failed:", O);
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
        S = await us();
      } catch (l) {
        console.log("catch fetchGeolocation", l), S = null;
      }
    const O = {
      ...p,
      ...Object.fromEntries(
        y.map((l) => [l, S])
      )
    };
    if (T.type === "method") {
      const l = T.method, j = l ? t[l] : void 0;
      if (j)
        try {
          const $ = await Promise.resolve(j(O));
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
        const l = await Q({
          method: T.method || "POST",
          url: f.baseURL + T.endpoint,
          data: O ?? {},
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
        const M = await Q({
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
          }), $ = (await Q({
            method: "POST",
            url: l.baseURL + l.dbopsGetRefId,
            data: {
              operation: l.operation,
              source: I,
              fields: $t(e.fields, l.operation),
              forcefill: e.forcefill,
              datahash: M.data.refhash,
              scrid: u
            },
            headers: {
              Authorization: `Bearer ${l?.accessToken}`
            }
          }))?.data.refid;
        }
        let V = {
          refid: $,
          fields: O,
          datahash: M.data.refhash,
          refid1: l.refid
        };
        T?.refid && (V.refid1 = T?.refid);
        const B = await Q({
          method: "POST",
          url: l.baseURL + l[l.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: V,
          headers: {
            Authorization: `Bearer ${l?.accessToken}`
          }
        });
        c?.(null), s?.(B);
      } catch (j) {
        s?.(j), console.error("API fetch failed:", j);
      }
    }
  };
  console.log("methods in FORM", t);
  const _ = {
    simple: /* @__PURE__ */ o.jsx(
      zc,
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
  return /* @__PURE__ */ o.jsx("div", { className: "relative", children: _.simple });
}
function xr({ tabObj: e, methods: t, tabName: r, sqlOpsUrls: n, refid: a, Reports: s, toast: i, handleAction: c, infoViewJson: u }) {
  const [f, d] = oe(!1), [m, h] = oe(null), [y, v] = te.useState(0), [x, _] = te.useState(null), p = e?.config, T = e?.config, S = T?.["popup.form"] ? "popup.form" : (T?.form, "form"), O = T?.[S] && Object.keys(T?.[S]).length > 0, l = (B) => {
    let I = me(B.data);
    _(I);
  }, j = (B) => {
    _(B), v((I) => I + 1);
  }, $ = (B) => {
    let I = me(B.data);
    h(I), d(!0);
  }, M = async () => {
    if (m?.id) {
      if (!n) {
        window.alert("Delete configuration missing.");
        return;
      }
      try {
        let B = e?.config;
        const I = B?.["popup.form"] ? "popup.form" : (B?.form, "form"), k = B?.[I];
        if (!k?.source) throw new Error("Form source missing");
        let G = !1, W;
        k?.source?.dbopsid && (G = !0, W = k?.source?.dbopsid);
        const J = await Q({
          method: "GET",
          url: n.baseURL + n.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${n.accessToken}`
          }
        });
        if (!G) {
          let L = { ...k.source, refid: m.id };
          k.source.where && (L = {
            ...L,
            where: he(k.source.where, {
              refid: m?.id
            })
          }), W = (await Q({
            method: "POST",
            url: n.baseURL + n.dbopsGetRefId,
            data: {
              operation: "update",
              source: L,
              fields: k.fields,
              forcefill: k.forcefill,
              datahash: J.data.refhash,
              scrid: u?.module_refid
            },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }))?.data.refid;
        }
        await Q({
          method: "POST",
          url: n.baseURL + n.dbopsUpdate,
          data: {
            refid: W,
            fields: { blocked: "true" },
            datahash: J.data.refhash,
            refid1: m?.id
          },
          headers: {
            Authorization: `Bearer ${n.accessToken}`
          }
        }), window.alert("Record deleted successfully."), v((L) => L + 1);
      } catch (B) {
        console.error(B), window.alert("Failed to delete record. Please try again");
      } finally {
        h(null), d(!1);
      }
    }
  }, V = () => {
    h(null), d(!1);
  };
  return console.log("methods in Grid", t), /* @__PURE__ */ o.jsx(o.Fragment, { children: s ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
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
    O && /* @__PURE__ */ o.jsx(
      Bc,
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
    /* @__PURE__ */ o.jsx(
      vs,
      {
        open: f,
        onConfirm: M,
        onCancel: V
      }
    )
  ] }) : /* @__PURE__ */ o.jsx("p", { children: "Report not available" }) });
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
), Gc = ({
  groups: e,
  groupNames: t,
  setActiveTabIndex: r,
  activeTabIndex: n,
  layoutConfig: a,
  showScrollHint: s,
  isCommonInfo: i,
  tabsNavRef: c
}) => {
  const [u, f] = oe(!1), d = xe(null);
  return ce(() => {
    const m = (h) => {
      d.current && !d.current.contains(h.target) && f(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, []), /* @__PURE__ */ o.jsxs("div", { className: a?.tabNavClass || "relative z-10", children: [
    s && /* @__PURE__ */ o.jsx("div", { className: "absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 flex items-center justify-center", children: /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => c.current?.scrollBy({ left: -200, behavior: "smooth" }),
        className: "w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group",
        children: /* @__PURE__ */ o.jsx("svg", { className: "w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
      }
    ) }),
    /* @__PURE__ */ o.jsxs("div", { className: "absolute right-0 top-1/2 -translate-y-1/2 z-20 w-18 flex items-center justify-between pr-1", children: [
      s && /* @__PURE__ */ o.jsx(
        "button",
        {
          onClick: () => c.current?.scrollBy({ left: 200, behavior: "smooth" }),
          className: "w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group",
          children: /* @__PURE__ */ o.jsx("svg", { className: "w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
        }
      ),
      /* @__PURE__ */ o.jsxs("div", { className: "relative", ref: d, children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            onClick: () => f(!u),
            className: "ml-1 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200",
            children: "⋮"
          }
        ),
        u && /* @__PURE__ */ o.jsx("div", { className: "absolute right-0 mt-2 w-48 max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-30", children: t.map((m, h) => /* @__PURE__ */ o.jsx(
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
    /* @__PURE__ */ o.jsx("div", { className: `relative bg-gray-100 ${i ? "" : "rounded-t-lg"} px-12 pt-1 shadow-inner overflow-hidden`, children: /* @__PURE__ */ o.jsx(
      "nav",
      {
        ref: c,
        className: "relative flex overflow-x-auto scrollbar-hide scroll-smooth",
        style: {
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        },
        children: t.length > 0 ? t.map((m, h) => /* @__PURE__ */ o.jsx(
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
            children: /* @__PURE__ */ o.jsx("span", { className: "relative z-10 flex items-center justify-center gap-1 sm:gap-2", children: /* @__PURE__ */ o.jsx("span", { className: "truncate", children: e[m]?.label || m }) })
          },
          m
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
  methods: c = {},
  refid: u,
  sqlOpsUrls: f,
  module_refid: d,
  fieldOptions: m,
  setFieldOptions: h
}) => /* @__PURE__ */ o.jsxs(
  "div",
  {
    className: "bg-white rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex-1 flex flex-col min-h-0",
    children: [
      e.length > 0 ? n?.fields ? /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ o.jsx("div", { className: r?.fieldGridClass || "grid grid-cols-12 gap-2", children: n.fields.map((y, v) => /* @__PURE__ */ o.jsx(
        "div",
        {
          className: `col-span-12 sm:col-span-6 ${ct[ut(y.width)] || "lg:col-span-2"}`,
          children: /* @__PURE__ */ o.jsx(
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
            e.slice(0, 5).map((y, v) => /* @__PURE__ */ o.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${v === t ? "bg-action w-6" : "bg-gray-300"}`
              },
              v
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
        /* @__PURE__ */ o.jsx("div", { className: "flex gap-1", children: e.map((y, v) => /* @__PURE__ */ o.jsx(
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
function mn({
  groups: e,
  methods: t = {},
  infoData: r,
  viewRenderers: n = {},
  isCommonInfo: a,
  layoutConfig: s = {},
  viewMode: i,
  sqlOpsUrls: c,
  refid: u,
  Reports: f,
  toast: d = {},
  handleAction: m = () => {
  },
  infoViewJson: h
}) {
  const [y, v] = oe(0), [x, _] = oe(!1), p = xe(null), [T, S] = oe({}), O = (G, W) => {
    S((J) => ({
      ...J,
      [G]: W
    }));
  }, l = Object.keys(e);
  ce(() => {
    const G = () => {
      if (p.current) {
        const W = p.current;
        _(W.scrollWidth > W.clientWidth);
      }
    };
    return G(), window.addEventListener("resize", G), () => window.removeEventListener("resize", G);
  }, [l.length]), ce(() => {
    if (p.current && l.length > 0) {
      const G = p.current.children[y];
      G && G.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [y, l.length]);
  const j = i === "tableft", $ = i === "tabright", M = !j && !$, V = e[l[y] ?? ""] || null, B = {
    single: (G, W) => /* @__PURE__ */ o.jsx(cr, { module_refid: h.module_refid, tabObj: G, methods: t, tabName: W, ...c ? { sqlOpsUrls: c } : {}, refid: u }),
    grid: (G, W) => /* @__PURE__ */ o.jsx(
      xr,
      {
        ...f ? { Reports: f } : {},
        toast: d,
        handleAction: m,
        tabObj: G,
        methods: t,
        tabName: W,
        ...c ? { sqlOpsUrls: c } : {},
        refid: u,
        infoViewJson: h
      }
    )
  }, I = V?.config?.uimode, k = n[I] || B[I] || (() => /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No UI mode for this type" }));
  return M ? /* @__PURE__ */ o.jsxs("div", { className: "flex-1 flex flex-col min-h-0 ", children: [
    /* @__PURE__ */ o.jsx(
      Gc,
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
    /* @__PURE__ */ o.jsx(
      pn,
      {
        groupNames: l,
        activeTabIndex: y,
        layoutConfig: s,
        tabObj: V,
        infoData: r,
        setActiveTabIndex: v,
        renderView: k,
        groups: e,
        methods: t,
        refid: u,
        ...c ? { sqlOpsUrls: c } : {},
        module_refid: h.module_refid,
        fieldOptions: T,
        setFieldOptions: O
      }
    )
  ] }) : /* @__PURE__ */ o.jsxs("div", { className: "flex-1 flex min-h-0", children: [
    j && /* @__PURE__ */ o.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ o.jsx(
      hn,
      {
        groupNames: l,
        groups: e,
        setActiveTabIndex: v,
        activeTabIndex: y
      }
    ) }),
    /* @__PURE__ */ o.jsx("main", { className: "flex-1 flex flex-col min-h-0 overflow-auto", children: /* @__PURE__ */ o.jsx(
      pn,
      {
        groupNames: l,
        activeTabIndex: y,
        layoutConfig: s,
        tabObj: V,
        infoData: r,
        setActiveTabIndex: v,
        renderView: k,
        groups: e,
        methods: t,
        refid: u,
        module_refid: h.module_refid,
        ...c ? { sqlOpsUrls: c } : {},
        fieldOptions: T,
        setFieldOptions: O
      }
    ) }),
    $ && /* @__PURE__ */ o.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ o.jsx(
      hn,
      {
        groupNames: l,
        groups: e,
        setActiveTabIndex: v,
        activeTabIndex: y
      }
    ) })
  ] });
}
function Uc({ title: e, children: t, isFirst: r }) {
  const [n, a] = oe(r);
  return /* @__PURE__ */ o.jsx("div", { className: "group relative mt-1 flex-1 flex flex-col min-h-0 max-h-screen", children: /* @__PURE__ */ o.jsxs("div", { className: "flex-1 flex flex-col min-h-0 relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ o.jsxs(
      "button",
      {
        onClick: () => a(!n),
        className: "w-full bg-gray-50 flex justify-between items-center px-2 py-1 b text-left transition-all duration-300 ",
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
        children: /* @__PURE__ */ o.jsx("div", { className: "px-1 pb-1 bg-gradient-to-br from-gray-50/50 to-white flex-1 flex flex-col min-h-0", children: /* @__PURE__ */ o.jsx("div", { className: "space-y-5 pt-1 flex-1 flex flex-col min-h-0 overflow-y-auto", children: t }) })
      }
    )
  ] }) });
}
function Kc({
  groups: e,
  methods: t = {},
  infoData: r,
  viewRenderers: n = {},
  sqlOpsUrls: a,
  refid: s,
  Reports: i,
  toast: c = {},
  handleAction: u = () => {
  },
  infoViewJson: f
}) {
  const [d, m] = oe({}), h = (v, x) => {
    m((_) => ({ ..._, [v]: x }));
  }, y = {
    single: (v, x) => /* @__PURE__ */ o.jsx(
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
    grid: (v, x) => /* @__PURE__ */ o.jsx(
      xr,
      {
        ...i ? { Reports: i } : {},
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
  return /* @__PURE__ */ o.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ o.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ o.jsx("div", { className: "space-y-1 flex flex-col min-h-0", children: e && Object.entries(e).map(([v, x], _) => /* @__PURE__ */ o.jsx(Uc, { title: x.label, isFirst: _ === 0, children: x?.fields ? /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ o.jsx("div", { className: "grid grid-cols-12 gap-2", children: x.fields.map((p, T) => /* @__PURE__ */ o.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${ct[ut(p.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ o.jsx(
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
  )) }) }) : x ? /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: n[x.config?.uimode]?.(x) || y[x.config?.uimode]?.(x, v) || /* @__PURE__ */ o.jsx("div", { children: "No renderer for this type" }) }) : null }, v)) }) }) });
}
function qc({ title: e, children: t }) {
  return /* @__PURE__ */ o.jsx("div", { className: "group relative mt-1 flex-1 flex flex-col min-h-0 max-h-screen", children: /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col min-h-0 relative  bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ o.jsx(
      "button",
      {
        className: "w-full bg-gray-50 flex justify-between items-center px-2 py-1 b text-left transition-all duration-300 ",
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
        children: /* @__PURE__ */ o.jsx("div", { className: "px-1 pb-1 bg-gradient-to-br from-gray-50/50 to-white flex flex-col min-h-0", children: /* @__PURE__ */ o.jsx("div", { className: "space-y-5 pt-1 flex-1 flex flex-col min-h-0 overflow-y-auto", children: t }) })
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
  toast: c = {},
  handleAction: u = () => {
  },
  infoViewJson: f
}) {
  const [d, m] = oe({}), h = (v, x) => {
    m((_) => ({ ..._, [v]: x }));
  }, y = {
    single: (v, x) => /* @__PURE__ */ o.jsx(cr, { module_refid: f?.module_refid, tabObj: v, methods: t, tabName: x, ...a ? { sqlOpsUrls: a } : {}, refid: s }),
    grid: (v, x) => /* @__PURE__ */ o.jsx(
      xr,
      {
        ...i ? { Reports: i } : {},
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
  return /* @__PURE__ */ o.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ o.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ o.jsx("div", { className: "space-y-2  flex flex-col min-h-0", children: e && Object.entries(e).map(([v, x], _) => /* @__PURE__ */ o.jsx(qc, { title: x.label, children: x?.fields ? /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ o.jsx("div", { className: "grid grid-cols-12 gap-2", children: x.fields.map((p, T) => /* @__PURE__ */ o.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${ct[ut(p.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ o.jsx(
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
  )) }) }) : x ? /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: n[x.config?.uimode]?.(x) || y[x.config?.uimode]?.(x, v) || /* @__PURE__ */ o.jsx("div", { children: "No renderer for this type" }) }) : null }, v)) }) }) });
}
function Qc({
  infoViewJson: e,
  data: t = {},
  hiddenFields: r = [],
  groupFieldsFn: n = ls,
  layoutConfig: a = {},
  viewRenderers: s = {},
  methods: i = {},
  Reports: c,
  toast: u = {},
  handleAction: f = () => {
  }
}) {
  const [d, m] = te.useState({}), h = os(e.infoview ?? {}), y = e.endPoints, v = te.useMemo(
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
        const j = l.method, $ = j ? i[j] : void 0;
        if ($)
          try {
            const M = await Promise.resolve($());
            S || m(M || {});
          } catch (M) {
            console.error("Method execution failed:", M), S || m({});
          }
        else
          S || m({});
      }
      if (l.type === "api")
        try {
          const j = await Q({
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
          const M = await Q({
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
            }), $ = (await Q({
              method: "POST",
              url: y.baseURL + y.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: I,
                fields: $t(e.fields, y.operation),
                forcefill: e.forcefill,
                datahash: M.data.refhash,
                srcid: e?.module_refid
              },
              headers: {
                Authorization: `Bearer ${y?.accessToken}`
              }
            }))?.data.refid;
          }
          const V = await Q({
            method: "POST",
            url: y.baseURL + y.dbopsFetch,
            data: {
              refid: $,
              datahash: M.data.refhash,
              module_refid: e.module_refid
            },
            headers: {
              Authorization: `Bearer ${y?.accessToken}`
            }
          }), B = Rn(V) ?? {};
          S || m(B);
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
        return /* @__PURE__ */ o.jsx(
          Kc,
          {
            groups: _,
            methods: i,
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
        return /* @__PURE__ */ o.jsx(
          mn,
          {
            groups: _,
            viewRenderers: s,
            layoutConfig: a,
            methods: i,
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
        return /* @__PURE__ */ o.jsx(
          Yc,
          {
            groups: _,
            viewRenderers: s,
            methods: i,
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
        return /* @__PURE__ */ o.jsx(
          mn,
          {
            groups: _,
            viewRenderers: s,
            layoutConfig: a,
            methods: i,
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
  return /* @__PURE__ */ o.jsxs("div", { className: a.containerClass || "h-screen flex flex-col ", children: [
    p && /* @__PURE__ */ o.jsx(
      xs,
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
  Qc as InfoView
};
