import te, { useState as ie, useRef as be, useEffect as oe, useCallback as ne, useMemo as St, useLayoutEffect as gn, createContext as va, forwardRef as wa, createElement as ja, useContext as Ta } from "react";
import X from "axios";
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
function _a() {
  return jr || (jr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(y) {
      if (y == null) return null;
      if (typeof y == "function")
        return y.$$typeof === V ? null : y.displayName || y.name || null;
      if (typeof y == "string") return y;
      switch (y) {
        case x:
          return "Fragment";
        case p:
          return "Profiler";
        case T:
          return "StrictMode";
        case l:
          return "Suspense";
        case w:
          return "SuspenseList";
        case z:
          return "Activity";
      }
      if (typeof y == "object")
        switch (typeof y.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), y.$$typeof) {
          case v:
            return "Portal";
          case S:
            return (y.displayName || "Context") + ".Provider";
          case j:
            return (y._context.displayName || "Context") + ".Consumer";
          case N:
            var E = y.render;
            return y = y.displayName, y || (y = E.displayName || E.name || "", y = y !== "" ? "ForwardRef(" + y + ")" : "ForwardRef"), y;
          case A:
            return E = y.displayName || null, E !== null ? E : e(y.type) || "Memo";
          case D:
            E = y._payload, y = y._init;
            try {
              return e(y(E));
            } catch {
            }
        }
      return null;
    }
    function t(y) {
      return "" + y;
    }
    function r(y) {
      try {
        t(y);
        var E = !1;
      } catch {
        E = !0;
      }
      if (E) {
        E = console;
        var F = E.error, $ = typeof Symbol == "function" && Symbol.toStringTag && y[Symbol.toStringTag] || y.constructor.name || "Object";
        return F.call(
          E,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          $
        ), t(y);
      }
    }
    function n(y) {
      if (y === x) return "<>";
      if (typeof y == "object" && y !== null && y.$$typeof === D)
        return "<...>";
      try {
        var E = e(y);
        return E ? "<" + E + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var y = I.A;
      return y === null ? null : y.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(y) {
      if (k.call(y, "key")) {
        var E = Object.getOwnPropertyDescriptor(y, "key").get;
        if (E && E.isReactWarning) return !1;
      }
      return y.key !== void 0;
    }
    function c(y, E) {
      function F() {
        L || (L = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          E
        ));
      }
      F.isReactWarning = !0, Object.defineProperty(y, "key", {
        get: F,
        configurable: !0
      });
    }
    function u() {
      var y = e(this.type);
      return H[y] || (H[y] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), y = this.props.ref, y !== void 0 ? y : null;
    }
    function f(y, E, F, $, K, Y, le, xe) {
      return F = Y.ref, y = {
        $$typeof: g,
        type: y,
        key: E,
        props: Y,
        _owner: K
      }, (F !== void 0 ? F : null) !== null ? Object.defineProperty(y, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(y, "ref", { enumerable: !1, value: null }), y._store = {}, Object.defineProperty(y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(y, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(y, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: le
      }), Object.defineProperty(y, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: xe
      }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
    }
    function d(y, E, F, $, K, Y, le, xe) {
      var re = E.children;
      if (re !== void 0)
        if ($)
          if (B(re)) {
            for ($ = 0; $ < re.length; $++)
              m(re[$]);
            Object.freeze && Object.freeze(re);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(re);
      if (k.call(E, "key")) {
        re = e(y);
        var he = Object.keys(E).filter(function(Ie) {
          return Ie !== "key";
        });
        $ = 0 < he.length ? "{key: someKey, " + he.join(": ..., ") + ": ...}" : "{key: someKey}", U[re + $] || (he = 0 < he.length ? "{" + he.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          $,
          re,
          he,
          re
        ), U[re + $] = !0);
      }
      if (re = null, F !== void 0 && (r(F), re = "" + F), i(E) && (r(E.key), re = "" + E.key), "key" in E) {
        F = {};
        for (var $e in E)
          $e !== "key" && (F[$e] = E[$e]);
      } else F = E;
      return re && c(
        F,
        typeof y == "function" ? y.displayName || y.name || "Unknown" : y
      ), f(
        y,
        re,
        Y,
        K,
        a(),
        F,
        le,
        xe
      );
    }
    function m(y) {
      typeof y == "object" && y !== null && y.$$typeof === g && y._store && (y._store.validated = 1);
    }
    var h = te, g = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), j = Symbol.for("react.consumer"), S = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), z = Symbol.for("react.activity"), V = Symbol.for("react.client.reference"), I = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = Object.prototype.hasOwnProperty, B = Array.isArray, Q = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(y) {
        return y();
      }
    };
    var L, H = {}, _ = h.react_stack_bottom_frame.bind(
      h,
      s
    )(), C = Q(n(s)), U = {};
    Je.Fragment = x, Je.jsx = function(y, E, F, $, K) {
      var Y = 1e4 > I.recentlyCreatedOwnerStacks++;
      return d(
        y,
        E,
        F,
        !1,
        $,
        K,
        Y ? Error("react-stack-top-frame") : _,
        Y ? Q(n(y)) : C
      );
    }, Je.jsxs = function(y, E, F, $, K) {
      var Y = 1e4 > I.recentlyCreatedOwnerStacks++;
      return d(
        y,
        E,
        F,
        !0,
        $,
        K,
        Y ? Error("react-stack-top-frame") : _,
        Y ? Q(n(y)) : C
      );
    };
  }()), Je;
}
var Tr;
function Aa() {
  return Tr || (Tr = 1, process.env.NODE_ENV === "production" ? mt.exports = Sa() : mt.exports = _a()), mt.exports;
}
var o = Aa(), Lt, Er;
function Na() {
  if (Er) return Lt;
  Er = 1;
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
  var t = /[^.^\]^[]+|(?=\[\]|\.\.)/g, r = /^\d+$/, n = /^\d/, a = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, s = /^\s*(['"]?)(.*?)(\1)\s*$/, i = 512, c = new e(i), u = new e(i), f = new e(i);
  Lt = {
    Cache: e,
    split: m,
    normalizePath: d,
    setter: function(p) {
      var j = d(p);
      return u.get(p) || u.set(p, function(N, l) {
        for (var w = 0, A = j.length, D = N; w < A - 1; ) {
          var z = j[w];
          if (z === "__proto__" || z === "constructor" || z === "prototype")
            return N;
          D = D[j[w++]];
        }
        D[j[w]] = l;
      });
    },
    getter: function(p, j) {
      var S = d(p);
      return f.get(p) || f.set(p, function(l) {
        for (var w = 0, A = S.length; w < A; )
          if (l != null || !j) l = l[S[w++]];
          else return;
        return l;
      });
    },
    join: function(p) {
      return p.reduce(function(j, S) {
        return j + (g(S) || r.test(S) ? "[" + S + "]" : (j ? "." : "") + S);
      }, "");
    },
    forEach: function(p, j, S) {
      h(Array.isArray(p) ? p : m(p), j, S);
    }
  };
  function d(p) {
    return c.get(p) || c.set(
      p,
      m(p).map(function(j) {
        return j.replace(s, "$2");
      })
    );
  }
  function m(p) {
    return p.match(t) || [""];
  }
  function h(p, j, S) {
    var N = p.length, l, w, A, D;
    for (w = 0; w < N; w++)
      l = p[w], l && (T(l) && (l = '"' + l + '"'), D = g(l), A = !D && /^\d+$/.test(l), j.call(S, l, D, A, w, p));
  }
  function g(p) {
    return typeof p == "string" && p && ["'", '"'].indexOf(p.charAt(0)) !== -1;
  }
  function v(p) {
    return p.match(n) && !p.match(r);
  }
  function x(p) {
    return a.test(p);
  }
  function T(p) {
    return !g(p) && (v(p) || x(p));
  }
  return Lt;
}
var De = Na(), zt, Sr;
function $a() {
  if (Sr) return zt;
  Sr = 1;
  const e = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, t = (d) => d.match(e) || [], r = (d) => d[0].toUpperCase() + d.slice(1), n = (d, m) => t(d).join(m).toLowerCase(), a = (d) => t(d).reduce(
    (m, h) => `${m}${m ? h[0].toUpperCase() + h.slice(1).toLowerCase() : h.toLowerCase()}`,
    ""
  );
  return zt = {
    words: t,
    upperFirst: r,
    camelCase: a,
    pascalCase: (d) => r(a(d)),
    snakeCase: (d) => n(d, "_"),
    kebabCase: (d) => n(d, "-"),
    sentenceCase: (d) => r(n(d, " ")),
    titleCase: (d) => t(d).map(r).join(" ")
  }, zt;
}
var Vt = $a(), yt = { exports: {} }, _r;
function Oa() {
  if (_r) return yt.exports;
  _r = 1, yt.exports = function(a) {
    return e(t(a), a);
  }, yt.exports.array = e;
  function e(a, s) {
    var i = a.length, c = new Array(i), u = {}, f = i, d = r(s), m = n(a);
    for (s.forEach(function(g) {
      if (!m.has(g[0]) || !m.has(g[1]))
        throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }); f--; )
      u[f] || h(a[f], f, /* @__PURE__ */ new Set());
    return c;
    function h(g, v, x) {
      if (x.has(g)) {
        var T;
        try {
          T = ", node was:" + JSON.stringify(g);
        } catch {
          T = "";
        }
        throw new Error("Cyclic dependency" + T);
      }
      if (!m.has(g))
        throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(g));
      if (!u[v]) {
        u[v] = !0;
        var p = d.get(g) || /* @__PURE__ */ new Set();
        if (p = Array.from(p), v = p.length) {
          x.add(g);
          do {
            var j = p[--v];
            h(j, m.get(j), x);
          } while (v);
          x.delete(g);
        }
        c[--i] = g;
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
var Fa = Oa();
const Ca = /* @__PURE__ */ bn(Fa), Ia = Object.prototype.toString, Ra = Error.prototype.toString, Pa = RegExp.prototype.toString, Da = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", Ma = /^Symbol\((.*)\)(.*)$/;
function ka(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function Ar(e, t = !1) {
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
  let r = Ar(e, t);
  return r !== null ? r : JSON.stringify(e, function(n, a) {
    let s = Ar(this[n], t);
    return s !== null ? s : a;
  }, 2);
}
function xn(e) {
  return e == null ? [] : [].concat(e);
}
let vn, wn, jn, La = /\$\{\s*(\w+)\s*\}/g;
vn = Symbol.toStringTag;
class Nr {
  constructor(t, r, n, a) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[vn] = "Error", this.name = "ValidationError", this.value = r, this.path = n, this.type = a, this.errors = [], this.inner = [], xn(t).forEach((s) => {
      if (ce.isError(s)) {
        this.errors.push(...s.errors);
        const i = s.inner.length ? s.inner : [s];
        this.inner.push(...i);
      } else
        this.errors.push(s);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
wn = Symbol.hasInstance;
jn = Symbol.toStringTag;
class ce extends Error {
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
    const i = new Nr(t, r, n, a);
    if (s)
      return i;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[jn] = "Error", this.name = i.name, this.message = i.message, this.type = i.type, this.value = i.value, this.path = i.path, this.errors = i.errors, this.inner = i.inner, Error.captureStackTrace && Error.captureStackTrace(this, ce);
  }
  static [wn](t) {
    return Nr[Symbol.hasInstance](t) || super[Symbol.hasInstance](t);
  }
}
let je = {
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
}, ue = {
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
}, wt = {
  noUnknown: "${path} field has unspecified keys: ${unknown}",
  exact: "${path} object contains unknown properties: ${properties}"
}, jt = {
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
    return ce.formatError(je.notType, e);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: je,
  string: ue,
  number: Oe,
  date: Qt,
  object: wt,
  array: jt,
  boolean: za,
  tuple: Va
});
const Ot = (e) => e && e.__isYupSchema__;
class _t {
  static fromOptions(t, r) {
    if (!r.then && !r.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: n,
      then: a,
      otherwise: s
    } = r, i = typeof n == "function" ? n : (...c) => c.every((u) => u === n);
    return new _t(t, (c, u) => {
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
    if (!Ot(a)) throw new TypeError("conditions must return a schema object");
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
const _e = (e) => e == null;
function Ye(e) {
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
      skipAbsent: g
    } = e;
    let {
      parent: v,
      context: x,
      abortEarly: T = i.spec.abortEarly,
      disableStackTrace: p = i.spec.disableStackTrace
    } = a;
    const j = {
      value: r,
      parent: v,
      context: x
    };
    function S(I = {}) {
      const k = Tn(Object.assign({
        value: r,
        originalValue: s,
        label: i.spec.label,
        path: I.path || n,
        spec: i.spec,
        disableStackTrace: I.disableStackTrace || p
      }, m, I.params), j), B = new ce(ce.formatError(I.message || h, k), r, k.path, I.type || f, k.disableStackTrace);
      return B.params = k, B;
    }
    const N = T ? c : u;
    let l = {
      path: n,
      parent: v,
      type: f,
      from: a.from,
      createError: S,
      resolve(I) {
        return En(I, j);
      },
      options: a,
      originalValue: s,
      schema: i
    };
    const w = (I) => {
      ce.isError(I) ? N(I) : I ? u(null) : N(S());
    }, A = (I) => {
      ce.isError(I) ? N(I) : c(I);
    };
    if (g && _e(r))
      return w(!0);
    let z;
    try {
      var V;
      if (z = d.call(l, r, l), typeof ((V = z) == null ? void 0 : V.then) == "function") {
        if (a.sync)
          throw new Error(`Validation test of type: "${l.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(z).then(w, A);
      }
    } catch (I) {
      A(I);
      return;
    }
    w(z);
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
function qe(e, t = /* @__PURE__ */ new Map()) {
  if (Ot(e) || !e || typeof e != "object") return e;
  if (t.has(e)) return t.get(e);
  let r;
  if (e instanceof Date)
    r = new Date(e.getTime()), t.set(e, r);
  else if (e instanceof RegExp)
    r = new RegExp(e), t.set(e, r);
  else if (Array.isArray(e)) {
    r = new Array(e.length), t.set(e, r);
    for (let n = 0; n < e.length; n++) r[n] = qe(e[n], t);
  } else if (e instanceof Map) {
    r = /* @__PURE__ */ new Map(), t.set(e, r);
    for (const [n, a] of e.entries()) r.set(n, qe(a, t));
  } else if (e instanceof Set) {
    r = /* @__PURE__ */ new Set(), t.set(e, r);
    for (const n of e) r.add(qe(n, t));
  } else if (e instanceof Object) {
    r = {}, t.set(e, r);
    for (const [n, a] of Object.entries(e)) r[n] = qe(a, t);
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
    path: Ga(r)
  }));
}
function Sn(e, t) {
  var r;
  if (!((r = e.inner) != null && r.length) && e.errors.length)
    return Ua(e, t);
  const n = t ? `${t}.${e.path}` : e.path;
  return e.inner.flatMap((a) => Sn(a, n));
}
class me {
  constructor(t) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new At(), this._blacklist = new At(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(je.notType);
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
    return r.type = this.type, r._typeCheck = this._typeCheck, r._whitelist = this._whitelist.clone(), r._blacklist = this._blacklist.clone(), r.internalTests = Object.assign({}, this.internalTests), r.exclusiveTests = Object.assign({}, this.exclusiveTests), r.deps = [...this.deps], r.conditions = [...this.conditions], r.tests = [...this.tests], r.transforms = [...this.transforms], r.spec = qe(Object.assign({}, this.spec, t)), r;
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
      if (a && _e(s))
        return s;
      let i = Ae(t), c = Ae(s);
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
    }, h = s.length, g = [];
    if (!h) return m([]);
    let v = {
      value: i,
      originalValue: c,
      path: u,
      options: f,
      schema: this
    };
    for (let x = 0; x < s.length; x++) {
      const T = s[x];
      T(v, d, function(j) {
        j && (Array.isArray(j) ? g.push(...j) : g.push(j)), --h <= 0 && m(g);
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
    return (m, h, g) => this.resolve(d)._validate(f, d, h, g);
  }
  validate(t, r) {
    var n;
    let a = this.resolve(Object.assign({}, r, {
      value: t
    })), s = (n = r?.disableStackTrace) != null ? n : a.spec.disableStackTrace;
    return new Promise((i, c) => a._validate(t, r, (u, f) => {
      ce.isError(u) && (u.value = f), c(u);
    }, (u, f) => {
      u.length ? c(new ce(u, f, void 0, void 0, s)) : i(f);
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
      throw ce.isError(c) && (c.value = u), c;
    }, (c, u) => {
      if (c.length) throw new ce(c, t, void 0, void 0, i);
      s = u;
    }), s;
  }
  isValid(t, r) {
    return this.validate(t, r).then(() => !0, (n) => {
      if (ce.isError(n)) return !1;
      throw n;
    });
  }
  isValidSync(t, r) {
    try {
      return this.validateSync(t, r), !0;
    } catch (n) {
      if (ce.isError(n)) return !1;
      throw n;
    }
  }
  _getDefault(t) {
    let r = this.spec.default;
    return r == null ? r : typeof r == "function" ? r.call(this, t) : qe(r);
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
  defined(t = je.defined) {
    return this.optionality(!1, t);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(t = je.notNull) {
    return this.nullability(!1, t);
  }
  required(t = je.required) {
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
    }, r.message === void 0 && (r.message = je.default), typeof r.test != "function") throw new TypeError("`test` is a required parameters");
    let n = this.clone(), a = Ye(r), s = r.exclusive || r.name && n.exclusiveTests[r.name] === !0;
    if (r.exclusive && !r.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return r.name && (n.exclusiveTests[r.name] = !!r.exclusive), n.tests = n.tests.filter((i) => !(i.OPTIONS.name === r.name && (s || i.OPTIONS.test === a.OPTIONS.test))), n.tests.push(a), n;
  }
  when(t, r) {
    !Array.isArray(t) && typeof t != "string" && (r = t, t = ".");
    let n = this.clone(), a = xn(t).map((s) => new Le(s));
    return a.forEach((s) => {
      s.isSibling && n.deps.push(s.key);
    }), n.conditions.push(typeof r == "function" ? new _t(a, r) : _t.fromOptions(a, r)), n;
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
  oneOf(t, r = je.oneOf) {
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
  notOneOf(t, r = je.notOneOf) {
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
          if (a instanceof ce)
            return {
              issues: Sn(a)
            };
          throw a;
        }
      }
    };
  }
}
me.prototype.__isYupSchema__ = !0;
for (const e of ["validate", "validateSync"]) me.prototype[`${e}At`] = function(t, r, n = {}) {
  const {
    parent: a,
    parentPath: s,
    schema: i
  } = Ba(this, t, r, n.context);
  return i[e](a && a[s], Object.assign({}, n, {
    parent: a,
    path: t
  }));
};
for (const e of ["equals", "is"]) me.prototype[e] = me.prototype.oneOf;
for (const e of ["not", "nope"]) me.prototype[e] = me.prototype.notOneOf;
const Ka = () => !0;
function Xt(e) {
  return new _n(e);
}
class _n extends me {
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
Xt.prototype = _n.prototype;
const Ya = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
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
  const n = Ya.exec(e);
  return n ? {
    year: Ee(n[1]),
    month: Ee(n[2], 1) - 1,
    day: Ee(n[3], 1),
    hour: Ee(n[4]),
    minute: Ee(n[5]),
    second: Ee(n[6]),
    millisecond: n[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      Ee(n[7].substring(0, 3))
    ) : 0,
    precision: (t = (r = n[7]) == null ? void 0 : r.length) != null ? t : void 0,
    z: n[8] || void 0,
    plusMinus: n[9] || void 0,
    hourOffset: Ee(n[10]),
    minuteOffset: Ee(n[11])
  } : null;
}
function Ee(e, t = 0) {
  return Number(e) || t;
}
let Ha = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), Wa = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), Za = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, Qa = "^\\d{4}-\\d{2}-\\d{2}", Xa = "\\d{2}:\\d{2}:\\d{2}", Ja = "(([+-]\\d{2}(:?\\d{2})?)|Z)", es = new RegExp(`${Qa}T${Xa}(\\.\\d+)?${Ja}$`), ts = (e) => _e(e) || e === e.trim(), rs = {}.toString();
function tt() {
  return new An();
}
class An extends me {
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
      message: t || je.required,
      name: "required",
      skipAbsent: !0,
      test: (n) => !!n.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation((t) => (t.tests = t.tests.filter((r) => r.OPTIONS.name !== "required"), t));
  }
  length(t, r = ue.length) {
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
  min(t, r = ue.min) {
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
  max(t, r = ue.max) {
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
      message: a || ue.matches,
      params: {
        regex: t
      },
      skipAbsent: !0,
      test: (i) => i === "" && n || i.search(t) !== -1
    });
  }
  email(t = ue.email) {
    return this.matches(Ha, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = ue.url) {
    return this.matches(Wa, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = ue.uuid) {
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
      message: r || ue.datetime,
      excludeEmptyString: !0
    }).test({
      name: "datetime_offset",
      message: r || ue.datetime_offset,
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
      message: r || ue.datetime_precision,
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
  trim(t = ue.trim) {
    return this.transform((r) => r != null ? r.trim() : r).test({
      message: t,
      name: "trim",
      test: ts
    });
  }
  lowercase(t = ue.lowercase) {
    return this.transform((r) => _e(r) ? r : r.toLowerCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (r) => _e(r) || r === r.toLowerCase()
    });
  }
  uppercase(t = ue.uppercase) {
    return this.transform((r) => _e(r) ? r : r.toUpperCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (r) => _e(r) || r === r.toUpperCase()
    });
  }
}
tt.prototype = An.prototype;
let ns = (e) => e != +e;
function Tt() {
  return new Nn();
}
class Nn extends me {
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
    return this.transform((t) => _e(t) ? t : t | 0);
  }
  round(t) {
    var r;
    let n = ["ceil", "floor", "round", "trunc"];
    if (t = ((r = t) == null ? void 0 : r.toLowerCase()) || "round", t === "trunc") return this.truncate();
    if (n.indexOf(t.toLowerCase()) === -1) throw new TypeError("Only valid options for round() are: " + n.join(", "));
    return this.transform((a) => _e(a) ? a : Math[t](a));
  }
}
Tt.prototype = Nn.prototype;
let $n = /* @__PURE__ */ new Date(""), as = (e) => Object.prototype.toString.call(e) === "[object Date]";
function lr() {
  return new lt();
}
class lt extends me {
  constructor() {
    super({
      type: "date",
      check(t) {
        return as(t) && !isNaN(t.getTime());
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
lt.INVALID_DATE = $n;
lr.prototype = lt.prototype;
lr.INVALID_DATE = $n;
function ss(e, t = []) {
  let r = [], n = /* @__PURE__ */ new Set(), a = new Set(t.map(([i, c]) => `${i}-${c}`));
  function s(i, c) {
    let u = De.split(i)[0];
    n.add(u), a.has(`${c}-${u}`) || r.push([c, u]);
  }
  for (const i of Object.keys(e)) {
    let c = e[i];
    n.add(i), Le.isRef(c) && c.isSibling ? s(c.path, i) : Ot(c) && "deps" in c && c.deps.forEach((u) => s(u, i));
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
function Et(e) {
  if ("fields" in e) {
    const t = {};
    for (const [r, n] of Object.entries(e.fields))
      t[r] = Et(n);
    return e.setFields(t);
  }
  if (e.type === "array") {
    const t = e.optional();
    return t.innerType && (t.innerType = Et(t.innerType)), t;
  }
  return e.type === "tuple" ? e.optional().clone({
    types: e.spec.types.map(Et)
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
class In extends me {
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
    let s = this.fields, i = (n = r.stripUnknown) != null ? n : this.spec.noUnknown, c = [].concat(this._nodes, Object.keys(a).filter((m) => !this._nodes.includes(m))), u = {}, f = Object.assign({}, r, {
      parent: u,
      __validating: r.__validating || !1
    }), d = !1;
    for (const m of c) {
      let h = s[m], g = m in a, v = a[m];
      if (h) {
        let x;
        f.path = (r.path ? `${r.path}.` : "") + m, h = h.resolve({
          value: v,
          context: r.context,
          parent: u
        });
        let T = h instanceof me ? h.spec : void 0, p = T?.strict;
        if (T != null && T.strip) {
          d = d || m in a;
          continue;
        }
        x = !r.__validating || !p ? h.cast(v, f) : v, x !== void 0 && (u[m] = x);
      } else g && !i && (u[m] = v);
      (g !== m in u || u[m] !== v) && (d = !0);
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
    return Et(this);
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
      return is(s, t) && (i = Object.assign({}, s), n || delete i[t], i[r] = a(s)), i;
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
      message: t || wt.exact,
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
  noUnknown(t = !0, r = wt.noUnknown) {
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
  unknown(t = !0, r = wt.noUnknown) {
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
Cn.prototype = In.prototype;
function er(e) {
  return new Rn(e);
}
class Rn extends me {
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
      for (let g = 0; g < f.length; g++) {
        var h;
        m[g] = i.asNestedTest({
          options: r,
          index: g,
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
      }, n, (g) => a(g.concat(u), f));
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
    if (!Ot(t)) throw new TypeError("`array.of()` sub-schema must be a valid yup schema not: " + Ae(t));
    return r.innerType = t, r.spec = Object.assign({}, r.spec, {
      types: t
    }), r;
  }
  length(t, r = jt.length) {
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
    return r = r || jt.min, this.test({
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
    return r = r || jt.max, this.test({
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
function ls(e) {
  return e.template ? e.template : "tab";
}
function cs(e) {
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    const a = n.group || "General";
    t[a] || (t[a] = { label: a, type: "fields", fields: [] }), t[a]?.fields?.push({ name: r, ...n });
  }), t;
}
const us = (e) => Object.entries(e ?? {}).filter(([, t]) => t.type === "geolocation").map(([t]) => t);
async function ds() {
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
function Nt(e, t = "create") {
  const r = {};
  return Object.keys(e).forEach((n) => {
    e[n].vmode === "edit" && t === "create" || (r[n] = {
      label: n,
      required: e[n].required ?? !1
    });
  }), r;
}
function fs(e, t = "create") {
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
const fe = (e, t) => typeof e == "string" ? e.replace(
  /#(\w+)#/g,
  (r, n) => t[n] !== void 0 ? String(t[n]) : r
) : Array.isArray(e) ? e.map((r) => fe(r, t)) : e && typeof e == "object" ? Object.fromEntries(
  Object.entries(e).map(([r, n]) => [
    fe(r, t),
    fe(n, t)
  ])
) : e, Pn = (e) => {
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
const hs = (e) => e === !0 || e === "true", ps = (e, t, r, n) => {
  e.forEach((a) => {
    const s = a?.name;
    if (!s) return;
    let i = n?.[s];
    i == null && (i = a.default), a.multiple === !0 || a.type === "checkbox" || a.type === "tags" ? t[s] = Array.isArray(i) ? i : typeof i == "string" ? i.split(",").map((u) => u.trim()).filter(Boolean) : [] : a.type === "json" ? t[s] = typeof i == "object" && i !== null ? JSON.stringify(i, null, 2) : i ?? "" : a.type === "date" ? t[s] = typeof i == "string" ? i.slice(0, 10) : "" : a.type === "time" ? typeof i == "string" ? i.includes("T") ? t[s] = i.slice(11, 16) : t[s] = i.slice(0, 5) : t[s] = "" : s === "blocked" || s === "blacklist" ? t[s] = String(i ?? "false") : t[s] = i ?? "";
    let c;
    a.type === "file" ? c = a.multiple ? er().of(Xt()) : Xt() : a.multiple === !0 || a.type === "checkbox" || a.type === "tags" ? c = er().of(tt()) : a.type === "email" ? c = tt().email("Invalid email") : a.type === "number" ? c = Tt().typeError("Must be a number") : a.type === "json" ? c = tt().test("json", "Invalid JSON", (u) => {
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
              const h = m.replace(/-/g, "/"), [g, v, x] = h.split("/");
              if (g && v && x)
                return /* @__PURE__ */ new Date(`${x}-${v}-${g}`);
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
          c = Tt().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          c = Tt().typeError("Must be a decimal").transform((d, m) => {
            if (m == null || m === "") return;
            const h = Number(m);
            if (isNaN(h)) return d;
            if (typeof d == "number" && !isNaN(d)) {
              const g = Number(d);
              return Number.isInteger(g) ? Number(h.toFixed(g)) : h;
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
function ms(e) {
  return typeof e == "object" && e !== null && typeof e.target == "string" && typeof e.src == "object" && e.src !== null && typeof e.src.table == "string";
}
function ys(e) {
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
}, gs = (e) => {
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
    return i || (i = (await X({
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
function bs(e) {
  return e ? tr(e) ? Object.values(e).reduce((t, r) => (Object.assign(t, r), t), {}) : e : {};
}
const pe = (e) => {
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
async function xs({
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
      const h = fe(i.where ?? {}, { refid: t });
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
    ), f = Array.isArray(u?.data?.data) ? u.data.data : Array.isArray(u?.data) ? u.data : u, d = Array.isArray(f) ? f.map(pe) : [], m = ve(
      e.valueKey ?? "value",
      e.labelKey ?? "title",
      d,
      e.groupKey
    );
    n(s.target, m);
  }
}
const Dn = "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg";
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
  `, [m, h] = ie(
    i ?? e.options ?? {}
  ), g = te.useRef(!1);
  te.useEffect(() => {
    i && h(i);
  }, [i]);
  const v = te.useMemo(
    () => bs(m),
    [m]
  );
  te.useEffect(() => {
    let N = !0, l = e.valueKey ?? "value", w = e.labelKey ?? "title";
    return (async () => {
      if (e?.options) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const k = Object.values(e.options);
          if (k.length && typeof k[0] == "string") {
            h(e.options);
            return;
          }
        }
        const V = (Array.isArray(e.options) ? e.options : [e.options]).map(pe), I = ve(
          l,
          w,
          V,
          e.groupKey
          // auto-uses `category` if present
        );
        h(I);
        return;
      }
      const D = e?.source ?? {};
      if (e.type === "dataMethod") {
        const z = e.method, V = z ? r[z] : void 0;
        if (V)
          try {
            const I = await Promise.resolve(V()), k = Array.isArray(I?.data?.data) ? I.data.data : Array.isArray(I?.data) ? I.data : I, B = Array.isArray(k) ? k.map(pe) : [], Q = ve(l, w, B, e.groupKey);
            N && h(Q);
          } catch (I) {
            console.error("Method execution failed:", I), N && h({});
          }
        else
          N && h({});
      }
      if (D.type === "api" && D.url)
        try {
          const z = await X({
            method: D.method || "GET",
            url: D.url,
            data: D.body ?? {},
            params: D.params ?? {},
            headers: D.headers ?? {}
          }), V = Array.isArray(z?.data?.data) ? z.data.data : Array.isArray(z?.data) ? z.data : z, I = Array.isArray(V) ? V.map(pe) : [], k = ve(l, w, I, e.groupKey);
          N && h(k);
        } catch (z) {
          console.error("API execution failed:", z), N && h({});
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
              where: e.where ? a ? fe(e.where, { refid: a }) : e.where : void 0
            };
          }
          const V = await He(n, z, e?.queryid, void 0, s), I = Array.isArray(V?.data?.data) ? V.data.data : Array.isArray(V?.data) ? V.data : V, k = Array.isArray(I) ? I.map(pe) : [], B = ve(l, w, k, e.groupKey);
          N && h(B);
        } catch (z) {
          console.error("API fetch failed:", z);
        }
      }
    })(), () => {
      N = !1;
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
    g.current || !c || !x || (g.current = !0, xs({
      field: e,
      value: x,
      sqlOpsUrls: n,
      setFieldOptions: c
    }));
  }, [x, n, c]);
  const T = typeof u == "string" ? t?.[u] : void 0, p = typeof T == "string" ? e.type === "date" ? T.split("T")[0] : e.type === "time" ? T.includes("T") ? T.slice(11, 16) : T.slice(0, 5) : Cr(T, v) : Cr(T, v), j = typeof u == "string" && (u.toLowerCase().includes("avatar") || u.toLowerCase().includes("logo")), S = p == null ? "" : typeof p == "string" || typeof p == "number" ? p : JSON.stringify(p);
  return /* @__PURE__ */ o.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ o.jsx("label", { className: d, children: e?.label }),
    /* @__PURE__ */ o.jsx("div", { className: "relative", children: j ? /* @__PURE__ */ o.jsx(
      "img",
      {
        src: String(p),
        alt: "avatar",
        className: "w-16 h-16 rounded-full object-cover border",
        onError: (N) => {
          const l = N.currentTarget;
          l.onerror = null, l.src = Dn;
        }
      }
    ) : /* @__PURE__ */ o.jsx("p", { className: f, children: S }) })
  ] });
}
function vs({ commonInfo: e, infoData: t, hiddenFields: r = [] }) {
  return /* @__PURE__ */ o.jsx("div", { className: "bg-white border border-gray-100 p-4 min-h-3/10 overflow-auto", children: /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    /* @__PURE__ */ o.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ o.jsx("div", { className: "relative w-42 h-42", children: /* @__PURE__ */ o.jsx(
      "img",
      {
        src: String(t.avatar_photo),
        alt: "Profile",
        className: " w-full h-full object-cover border-4 rounded-[12px] border-white shadow-lg",
        onError: (n) => {
          const a = n.currentTarget;
          a.onerror = null, a.src = Dn;
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
            const g = await Promise.resolve(h());
            u || c(g || null);
          } catch (g) {
            console.error("Method execution failed:", g), u || c(null);
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
          const g = await X({
            method: "GET",
            url: n.baseURL + n.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          });
          if (!m) {
            let T = {
              ...d
            };
            d.where && (T = {
              ...d,
              where: fe(d.where, {
                refid: a
              })
            }), h = (await X({
              method: "POST",
              url: n.baseURL + n.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: T,
                fields: Nt(d.fields, n.operation),
                forcefill: d.forcefill,
                datahash: g.data.refhash,
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
              datahash: g.data.refhash
            },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }), x = Pn(v);
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
function ws({
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
var js = function(t) {
  return Ts(t) && !Es(t);
};
function Ts(e) {
  return !!e && typeof e == "object";
}
function Es(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || As(e);
}
var Ss = typeof Symbol == "function" && Symbol.for, _s = Ss ? Symbol.for("react.element") : 60103;
function As(e) {
  return e.$$typeof === _s;
}
function Ns(e) {
  return Array.isArray(e) ? [] : {};
}
function $t(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? st(Ns(e), e, t) : e;
}
function $s(e, t, r) {
  return e.concat(t).map(function(n) {
    return $t(n, r);
  });
}
function Os(e, t, r) {
  var n = {};
  return r.isMergeableObject(e) && Object.keys(e).forEach(function(a) {
    n[a] = $t(e[a], r);
  }), Object.keys(t).forEach(function(a) {
    !r.isMergeableObject(t[a]) || !e[a] ? n[a] = $t(t[a], r) : n[a] = st(e[a], t[a], r);
  }), n;
}
function st(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || $s, r.isMergeableObject = r.isMergeableObject || js;
  var n = Array.isArray(t), a = Array.isArray(e), s = n === a;
  return s ? n ? r.arrayMerge(e, t, r) : Os(e, t, r) : $t(t, r);
}
st.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(n, a) {
    return st(n, a, r);
  }, {});
};
var rr = st, Mn = typeof global == "object" && global && global.Object === Object && global, Fs = typeof self == "object" && self && self.Object === Object && self, Te = Mn || Fs || Function("return this")(), Fe = Te.Symbol, kn = Object.prototype, Cs = kn.hasOwnProperty, Is = kn.toString, et = Fe ? Fe.toStringTag : void 0;
function Rs(e) {
  var t = Cs.call(e, et), r = e[et];
  try {
    e[et] = void 0;
    var n = !0;
  } catch {
  }
  var a = Is.call(e);
  return n && (t ? e[et] = r : delete e[et]), a;
}
var Ps = Object.prototype, Ds = Ps.toString;
function Ms(e) {
  return Ds.call(e);
}
var ks = "[object Null]", Ls = "[object Undefined]", Rr = Fe ? Fe.toStringTag : void 0;
function ze(e) {
  return e == null ? e === void 0 ? Ls : ks : Rr && Rr in Object(e) ? Rs(e) : Ms(e);
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
var zs = "[object Object]", Vs = Function.prototype, Bs = Object.prototype, zn = Vs.toString, Gs = Bs.hasOwnProperty, Us = zn.call(Object);
function Pr(e) {
  if (!Ve(e) || ze(e) != zs)
    return !1;
  var t = ur(e);
  if (t === null)
    return !0;
  var r = Gs.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && zn.call(r) == Us;
}
function Ks() {
  this.__data__ = [], this.size = 0;
}
function Vn(e, t) {
  return e === t || e !== e && t !== t;
}
function Ft(e, t) {
  for (var r = e.length; r--; )
    if (Vn(e[r][0], t))
      return r;
  return -1;
}
var Ys = Array.prototype, qs = Ys.splice;
function Hs(e) {
  var t = this.__data__, r = Ft(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : qs.call(t, r, 1), --this.size, !0;
}
function Ws(e) {
  var t = this.__data__, r = Ft(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Zs(e) {
  return Ft(this.__data__, e) > -1;
}
function Qs(e, t) {
  var r = this.__data__, n = Ft(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function Ne(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ne.prototype.clear = Ks;
Ne.prototype.delete = Hs;
Ne.prototype.get = Ws;
Ne.prototype.has = Zs;
Ne.prototype.set = Qs;
function Xs() {
  this.__data__ = new Ne(), this.size = 0;
}
function Js(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function ei(e) {
  return this.__data__.get(e);
}
function ti(e) {
  return this.__data__.has(e);
}
function ft(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ri = "[object AsyncFunction]", ni = "[object Function]", ai = "[object GeneratorFunction]", si = "[object Proxy]";
function Bn(e) {
  if (!ft(e))
    return !1;
  var t = ze(e);
  return t == ni || t == ai || t == ri || t == si;
}
var Bt = Te["__core-js_shared__"], Dr = function() {
  var e = /[^.]+$/.exec(Bt && Bt.keys && Bt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ii(e) {
  return !!Dr && Dr in e;
}
var oi = Function.prototype, li = oi.toString;
function Be(e) {
  if (e != null) {
    try {
      return li.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ci = /[\\^$.*+?()[\]{}|]/g, ui = /^\[object .+?Constructor\]$/, di = Function.prototype, fi = Object.prototype, hi = di.toString, pi = fi.hasOwnProperty, mi = RegExp(
  "^" + hi.call(pi).replace(ci, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function yi(e) {
  if (!ft(e) || ii(e))
    return !1;
  var t = Bn(e) ? mi : ui;
  return t.test(Be(e));
}
function gi(e, t) {
  return e?.[t];
}
function Ge(e, t) {
  var r = gi(e, t);
  return yi(r) ? r : void 0;
}
var it = Ge(Te, "Map"), ot = Ge(Object, "create");
function bi() {
  this.__data__ = ot ? ot(null) : {}, this.size = 0;
}
function xi(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var vi = "__lodash_hash_undefined__", wi = Object.prototype, ji = wi.hasOwnProperty;
function Ti(e) {
  var t = this.__data__;
  if (ot) {
    var r = t[e];
    return r === vi ? void 0 : r;
  }
  return ji.call(t, e) ? t[e] : void 0;
}
var Ei = Object.prototype, Si = Ei.hasOwnProperty;
function _i(e) {
  var t = this.__data__;
  return ot ? t[e] !== void 0 : Si.call(t, e);
}
var Ai = "__lodash_hash_undefined__";
function Ni(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ot && t === void 0 ? Ai : t, this;
}
function ke(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ke.prototype.clear = bi;
ke.prototype.delete = xi;
ke.prototype.get = Ti;
ke.prototype.has = _i;
ke.prototype.set = Ni;
function $i() {
  this.size = 0, this.__data__ = {
    hash: new ke(),
    map: new (it || Ne)(),
    string: new ke()
  };
}
function Oi(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ct(e, t) {
  var r = e.__data__;
  return Oi(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Fi(e) {
  var t = Ct(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ci(e) {
  return Ct(this, e).get(e);
}
function Ii(e) {
  return Ct(this, e).has(e);
}
function Ri(e, t) {
  var r = Ct(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function Ce(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ce.prototype.clear = $i;
Ce.prototype.delete = Fi;
Ce.prototype.get = Ci;
Ce.prototype.has = Ii;
Ce.prototype.set = Ri;
var Pi = 200;
function Di(e, t) {
  var r = this.__data__;
  if (r instanceof Ne) {
    var n = r.__data__;
    if (!it || n.length < Pi - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Ce(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Qe(e) {
  var t = this.__data__ = new Ne(e);
  this.size = t.size;
}
Qe.prototype.clear = Xs;
Qe.prototype.delete = Js;
Qe.prototype.get = ei;
Qe.prototype.has = ti;
Qe.prototype.set = Di;
function Mi(e, t) {
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
function Gn(e, t, r) {
  t == "__proto__" && Mr ? Mr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var ki = Object.prototype, Li = ki.hasOwnProperty;
function Un(e, t, r) {
  var n = e[t];
  (!(Li.call(e, t) && Vn(n, r)) || r === void 0 && !(t in e)) && Gn(e, t, r);
}
function It(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var s = -1, i = t.length; ++s < i; ) {
    var c = t[s], u = void 0;
    u === void 0 && (u = e[c]), a ? Gn(r, c, u) : Un(r, c, u);
  }
  return r;
}
function zi(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Vi = "[object Arguments]";
function kr(e) {
  return Ve(e) && ze(e) == Vi;
}
var Kn = Object.prototype, Bi = Kn.hasOwnProperty, Gi = Kn.propertyIsEnumerable, Ui = kr(/* @__PURE__ */ function() {
  return arguments;
}()) ? kr : function(e) {
  return Ve(e) && Bi.call(e, "callee") && !Gi.call(e, "callee");
}, ht = Array.isArray;
function Ki() {
  return !1;
}
var Yn = typeof exports == "object" && exports && !exports.nodeType && exports, Lr = Yn && typeof module == "object" && module && !module.nodeType && module, Yi = Lr && Lr.exports === Yn, zr = Yi ? Te.Buffer : void 0, qi = zr ? zr.isBuffer : void 0, qn = qi || Ki, Hi = 9007199254740991, Wi = /^(?:0|[1-9]\d*)$/;
function Zi(e, t) {
  var r = typeof e;
  return t = t ?? Hi, !!t && (r == "number" || r != "symbol" && Wi.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Qi = 9007199254740991;
function Hn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Qi;
}
var Xi = "[object Arguments]", Ji = "[object Array]", eo = "[object Boolean]", to = "[object Date]", ro = "[object Error]", no = "[object Function]", ao = "[object Map]", so = "[object Number]", io = "[object Object]", oo = "[object RegExp]", lo = "[object Set]", co = "[object String]", uo = "[object WeakMap]", fo = "[object ArrayBuffer]", ho = "[object DataView]", po = "[object Float32Array]", mo = "[object Float64Array]", yo = "[object Int8Array]", go = "[object Int16Array]", bo = "[object Int32Array]", xo = "[object Uint8Array]", vo = "[object Uint8ClampedArray]", wo = "[object Uint16Array]", jo = "[object Uint32Array]", ee = {};
ee[po] = ee[mo] = ee[yo] = ee[go] = ee[bo] = ee[xo] = ee[vo] = ee[wo] = ee[jo] = !0;
ee[Xi] = ee[Ji] = ee[fo] = ee[eo] = ee[ho] = ee[to] = ee[ro] = ee[no] = ee[ao] = ee[so] = ee[io] = ee[oo] = ee[lo] = ee[co] = ee[uo] = !1;
function To(e) {
  return Ve(e) && Hn(e.length) && !!ee[ze(e)];
}
function dr(e) {
  return function(t) {
    return e(t);
  };
}
var Wn = typeof exports == "object" && exports && !exports.nodeType && exports, rt = Wn && typeof module == "object" && module && !module.nodeType && module, Eo = rt && rt.exports === Wn, Gt = Eo && Mn.process, Ze = function() {
  try {
    var e = rt && rt.require && rt.require("util").types;
    return e || Gt && Gt.binding && Gt.binding("util");
  } catch {
  }
}(), Vr = Ze && Ze.isTypedArray, So = Vr ? dr(Vr) : To, _o = Object.prototype, Ao = _o.hasOwnProperty;
function Zn(e, t) {
  var r = ht(e), n = !r && Ui(e), a = !r && !n && qn(e), s = !r && !n && !a && So(e), i = r || n || a || s, c = i ? zi(e.length, String) : [], u = c.length;
  for (var f in e)
    (t || Ao.call(e, f)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    Zi(f, u))) && c.push(f);
  return c;
}
var No = Object.prototype;
function fr(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || No;
  return e === r;
}
var $o = Ln(Object.keys, Object), Oo = Object.prototype, Fo = Oo.hasOwnProperty;
function Co(e) {
  if (!fr(e))
    return $o(e);
  var t = [];
  for (var r in Object(e))
    Fo.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function Qn(e) {
  return e != null && Hn(e.length) && !Bn(e);
}
function hr(e) {
  return Qn(e) ? Zn(e) : Co(e);
}
function Io(e, t) {
  return e && It(t, hr(t), e);
}
function Ro(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Po = Object.prototype, Do = Po.hasOwnProperty;
function Mo(e) {
  if (!ft(e))
    return Ro(e);
  var t = fr(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Do.call(e, n)) || r.push(n);
  return r;
}
function pr(e) {
  return Qn(e) ? Zn(e, !0) : Mo(e);
}
function ko(e, t) {
  return e && It(t, pr(t), e);
}
var Xn = typeof exports == "object" && exports && !exports.nodeType && exports, Br = Xn && typeof module == "object" && module && !module.nodeType && module, Lo = Br && Br.exports === Xn, Gr = Lo ? Te.Buffer : void 0, Ur = Gr ? Gr.allocUnsafe : void 0;
function zo(e, t) {
  if (t)
    return e.slice();
  var r = e.length, n = Ur ? Ur(r) : new e.constructor(r);
  return e.copy(n), n;
}
function Jn(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
function Vo(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, s = []; ++r < n; ) {
    var i = e[r];
    t(i, r, e) && (s[a++] = i);
  }
  return s;
}
function ea() {
  return [];
}
var Bo = Object.prototype, Go = Bo.propertyIsEnumerable, Kr = Object.getOwnPropertySymbols, mr = Kr ? function(e) {
  return e == null ? [] : (e = Object(e), Vo(Kr(e), function(t) {
    return Go.call(e, t);
  }));
} : ea;
function Uo(e, t) {
  return It(e, mr(e), t);
}
function ta(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var Ko = Object.getOwnPropertySymbols, ra = Ko ? function(e) {
  for (var t = []; e; )
    ta(t, mr(e)), e = ur(e);
  return t;
} : ea;
function Yo(e, t) {
  return It(e, ra(e), t);
}
function na(e, t, r) {
  var n = t(e);
  return ht(e) ? n : ta(n, r(e));
}
function qo(e) {
  return na(e, hr, mr);
}
function Ho(e) {
  return na(e, pr, ra);
}
var nr = Ge(Te, "DataView"), ar = Ge(Te, "Promise"), sr = Ge(Te, "Set"), ir = Ge(Te, "WeakMap"), Yr = "[object Map]", Wo = "[object Object]", qr = "[object Promise]", Hr = "[object Set]", Wr = "[object WeakMap]", Zr = "[object DataView]", Zo = Be(nr), Qo = Be(it), Xo = Be(ar), Jo = Be(sr), el = Be(ir), Se = ze;
(nr && Se(new nr(new ArrayBuffer(1))) != Zr || it && Se(new it()) != Yr || ar && Se(ar.resolve()) != qr || sr && Se(new sr()) != Hr || ir && Se(new ir()) != Wr) && (Se = function(e) {
  var t = ze(e), r = t == Wo ? e.constructor : void 0, n = r ? Be(r) : "";
  if (n)
    switch (n) {
      case Zo:
        return Zr;
      case Qo:
        return Yr;
      case Xo:
        return qr;
      case Jo:
        return Hr;
      case el:
        return Wr;
    }
  return t;
});
var tl = Object.prototype, rl = tl.hasOwnProperty;
function nl(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && rl.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var Qr = Te.Uint8Array;
function yr(e) {
  var t = new e.constructor(e.byteLength);
  return new Qr(t).set(new Qr(e)), t;
}
function al(e, t) {
  var r = t ? yr(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var sl = /\w*$/;
function il(e) {
  var t = new e.constructor(e.source, sl.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Xr = Fe ? Fe.prototype : void 0, Jr = Xr ? Xr.valueOf : void 0;
function ol(e) {
  return Jr ? Object(Jr.call(e)) : {};
}
function ll(e, t) {
  var r = t ? yr(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var cl = "[object Boolean]", ul = "[object Date]", dl = "[object Map]", fl = "[object Number]", hl = "[object RegExp]", pl = "[object Set]", ml = "[object String]", yl = "[object Symbol]", gl = "[object ArrayBuffer]", bl = "[object DataView]", xl = "[object Float32Array]", vl = "[object Float64Array]", wl = "[object Int8Array]", jl = "[object Int16Array]", Tl = "[object Int32Array]", El = "[object Uint8Array]", Sl = "[object Uint8ClampedArray]", _l = "[object Uint16Array]", Al = "[object Uint32Array]";
function Nl(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case gl:
      return yr(e);
    case cl:
    case ul:
      return new n(+e);
    case bl:
      return al(e, r);
    case xl:
    case vl:
    case wl:
    case jl:
    case Tl:
    case El:
    case Sl:
    case _l:
    case Al:
      return ll(e, r);
    case dl:
      return new n();
    case fl:
    case ml:
      return new n(e);
    case hl:
      return il(e);
    case pl:
      return new n();
    case yl:
      return ol(e);
  }
}
var en = Object.create, $l = /* @__PURE__ */ function() {
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
function Ol(e) {
  return typeof e.constructor == "function" && !fr(e) ? $l(ur(e)) : {};
}
var Fl = "[object Map]";
function Cl(e) {
  return Ve(e) && Se(e) == Fl;
}
var tn = Ze && Ze.isMap, Il = tn ? dr(tn) : Cl, Rl = "[object Set]";
function Pl(e) {
  return Ve(e) && Se(e) == Rl;
}
var rn = Ze && Ze.isSet, Dl = rn ? dr(rn) : Pl, Ml = 1, kl = 2, Ll = 4, aa = "[object Arguments]", zl = "[object Array]", Vl = "[object Boolean]", Bl = "[object Date]", Gl = "[object Error]", sa = "[object Function]", Ul = "[object GeneratorFunction]", Kl = "[object Map]", Yl = "[object Number]", ia = "[object Object]", ql = "[object RegExp]", Hl = "[object Set]", Wl = "[object String]", Zl = "[object Symbol]", Ql = "[object WeakMap]", Xl = "[object ArrayBuffer]", Jl = "[object DataView]", ec = "[object Float32Array]", tc = "[object Float64Array]", rc = "[object Int8Array]", nc = "[object Int16Array]", ac = "[object Int32Array]", sc = "[object Uint8Array]", ic = "[object Uint8ClampedArray]", oc = "[object Uint16Array]", lc = "[object Uint32Array]", J = {};
J[aa] = J[zl] = J[Xl] = J[Jl] = J[Vl] = J[Bl] = J[ec] = J[tc] = J[rc] = J[nc] = J[ac] = J[Kl] = J[Yl] = J[ia] = J[ql] = J[Hl] = J[Wl] = J[Zl] = J[sc] = J[ic] = J[oc] = J[lc] = !0;
J[Gl] = J[sa] = J[Ql] = !1;
function nt(e, t, r, n, a, s) {
  var i, c = t & Ml, u = t & kl, f = t & Ll;
  if (i !== void 0)
    return i;
  if (!ft(e))
    return e;
  var d = ht(e);
  if (d) {
    if (i = nl(e), !c)
      return Jn(e, i);
  } else {
    var m = Se(e), h = m == sa || m == Ul;
    if (qn(e))
      return zo(e, c);
    if (m == ia || m == aa || h && !a) {
      if (i = u || h ? {} : Ol(e), !c)
        return u ? Yo(e, ko(i, e)) : Uo(e, Io(i, e));
    } else {
      if (!J[m])
        return a ? e : {};
      i = Nl(e, m, c);
    }
  }
  s || (s = new Qe());
  var g = s.get(e);
  if (g)
    return g;
  s.set(e, i), Dl(e) ? e.forEach(function(T) {
    i.add(nt(T, t, r, T, e, s));
  }) : Il(e) && e.forEach(function(T, p) {
    i.set(p, nt(T, t, r, p, e, s));
  });
  var v = f ? u ? Ho : qo : u ? pr : hr, x = d ? void 0 : v(e);
  return Mi(x || e, function(T, p) {
    x && (p = T, T = e[p]), Un(i, p, nt(T, t, r, p, e, s));
  }), i;
}
var cc = 1, uc = 4;
function bt(e) {
  return nt(e, cc | uc);
}
var Ut, nn;
function dc() {
  if (nn) return Ut;
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
      var h = s instanceof Date, g = i instanceof Date;
      if (h != g) return !1;
      if (h && g) return s.getTime() == i.getTime();
      var v = s instanceof RegExp, x = i instanceof RegExp;
      if (v != x) return !1;
      if (v && x) return s.toString() == i.toString();
      var T = t(s);
      if (d = T.length, d !== t(i).length)
        return !1;
      for (f = d; f-- !== 0; )
        if (!r.call(i, T[f])) return !1;
      if (n && s instanceof Element && i instanceof Element)
        return s === i;
      for (f = d; f-- !== 0; )
        if (m = T[f], !(m === "_owner" && s.$$typeof) && !a(s[m], i[m]))
          return !1;
      return !0;
    }
    return s !== s && i !== i;
  }
  return Ut = function(i, c) {
    try {
      return a(i, c);
    } catch (u) {
      if (u.message && u.message.match(/stack|recursion/i) || u.number === -2146828260)
        return console.warn("Warning: react-fast-compare does not handle circular references.", u.name, u.message), !1;
      throw u;
    }
  }, Ut;
}
var fc = dc();
const Pe = /* @__PURE__ */ bn(fc);
var hc = process.env.NODE_ENV === "production";
function We(e, t) {
  if (!hc) {
    var r = "Warning: " + t;
    typeof console < "u" && console.warn(r);
    try {
      throw Error(r);
    } catch {
    }
  }
}
var pc = 4;
function an(e) {
  return nt(e, pc);
}
function oa(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var mc = "[object Symbol]";
function gr(e) {
  return typeof e == "symbol" || Ve(e) && ze(e) == mc;
}
var yc = "Expected a function";
function br(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(yc);
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
var gc = 500;
function bc(e) {
  var t = br(e, function(n) {
    return r.size === gc && r.clear(), n;
  }), r = t.cache;
  return t;
}
var xc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, vc = /\\(\\)?/g, wc = bc(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(xc, function(r, n, a, s) {
    t.push(a ? s.replace(vc, "$1") : n || r);
  }), t;
});
function jc(e) {
  if (typeof e == "string" || gr(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var sn = Fe ? Fe.prototype : void 0, on = sn ? sn.toString : void 0;
function la(e) {
  if (typeof e == "string")
    return e;
  if (ht(e))
    return oa(e, la) + "";
  if (gr(e))
    return on ? on.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Tc(e) {
  return e == null ? "" : la(e);
}
function ca(e) {
  return ht(e) ? oa(e, jc) : gr(e) ? [e] : Jn(wc(Tc(e)));
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
var ln;
function Ec() {
  if (ln) return W;
  ln = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, T = e ? Symbol.for("react.fundamental") : 60117, p = e ? Symbol.for("react.responder") : 60118, j = e ? Symbol.for("react.scope") : 60119;
  function S(l) {
    if (typeof l == "object" && l !== null) {
      var w = l.$$typeof;
      switch (w) {
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
                case g:
                case i:
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
  function N(l) {
    return S(l) === f;
  }
  return W.AsyncMode = u, W.ConcurrentMode = f, W.ContextConsumer = c, W.ContextProvider = i, W.Element = t, W.ForwardRef = d, W.Fragment = n, W.Lazy = v, W.Memo = g, W.Portal = r, W.Profiler = s, W.StrictMode = a, W.Suspense = m, W.isAsyncMode = function(l) {
    return N(l) || S(l) === u;
  }, W.isConcurrentMode = N, W.isContextConsumer = function(l) {
    return S(l) === c;
  }, W.isContextProvider = function(l) {
    return S(l) === i;
  }, W.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === t;
  }, W.isForwardRef = function(l) {
    return S(l) === d;
  }, W.isFragment = function(l) {
    return S(l) === n;
  }, W.isLazy = function(l) {
    return S(l) === v;
  }, W.isMemo = function(l) {
    return S(l) === g;
  }, W.isPortal = function(l) {
    return S(l) === r;
  }, W.isProfiler = function(l) {
    return S(l) === s;
  }, W.isStrictMode = function(l) {
    return S(l) === a;
  }, W.isSuspense = function(l) {
    return S(l) === m;
  }, W.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === n || l === f || l === s || l === a || l === m || l === h || typeof l == "object" && l !== null && (l.$$typeof === v || l.$$typeof === g || l.$$typeof === i || l.$$typeof === c || l.$$typeof === d || l.$$typeof === T || l.$$typeof === p || l.$$typeof === j || l.$$typeof === x);
  }, W.typeOf = S, W;
}
var Z = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cn;
function Sc() {
  return cn || (cn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, T = e ? Symbol.for("react.fundamental") : 60117, p = e ? Symbol.for("react.responder") : 60118, j = e ? Symbol.for("react.scope") : 60119;
    function S(P) {
      return typeof P == "string" || typeof P == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      P === n || P === f || P === s || P === a || P === m || P === h || typeof P == "object" && P !== null && (P.$$typeof === v || P.$$typeof === g || P.$$typeof === i || P.$$typeof === c || P.$$typeof === d || P.$$typeof === T || P.$$typeof === p || P.$$typeof === j || P.$$typeof === x);
    }
    function N(P) {
      if (typeof P == "object" && P !== null) {
        var Ue = P.$$typeof;
        switch (Ue) {
          case t:
            var Ke = P.type;
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
                  case g:
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
    var l = u, w = f, A = c, D = i, z = t, V = d, I = n, k = v, B = g, Q = r, L = s, H = a, _ = m, C = !1;
    function U(P) {
      return C || (C = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), y(P) || N(P) === u;
    }
    function y(P) {
      return N(P) === f;
    }
    function E(P) {
      return N(P) === c;
    }
    function F(P) {
      return N(P) === i;
    }
    function $(P) {
      return typeof P == "object" && P !== null && P.$$typeof === t;
    }
    function K(P) {
      return N(P) === d;
    }
    function Y(P) {
      return N(P) === n;
    }
    function le(P) {
      return N(P) === v;
    }
    function xe(P) {
      return N(P) === g;
    }
    function re(P) {
      return N(P) === r;
    }
    function he(P) {
      return N(P) === s;
    }
    function $e(P) {
      return N(P) === a;
    }
    function Ie(P) {
      return N(P) === m;
    }
    Z.AsyncMode = l, Z.ConcurrentMode = w, Z.ContextConsumer = A, Z.ContextProvider = D, Z.Element = z, Z.ForwardRef = V, Z.Fragment = I, Z.Lazy = k, Z.Memo = B, Z.Portal = Q, Z.Profiler = L, Z.StrictMode = H, Z.Suspense = _, Z.isAsyncMode = U, Z.isConcurrentMode = y, Z.isContextConsumer = E, Z.isContextProvider = F, Z.isElement = $, Z.isForwardRef = K, Z.isFragment = Y, Z.isLazy = le, Z.isMemo = xe, Z.isPortal = re, Z.isProfiler = he, Z.isStrictMode = $e, Z.isSuspense = Ie, Z.isValidElementType = S, Z.typeOf = N;
  }()), Z;
}
var un;
function _c() {
  return un || (un = 1, process.env.NODE_ENV === "production" ? xt.exports = Ec() : xt.exports = Sc()), xt.exports;
}
var Kt, dn;
function Ac() {
  if (dn) return Kt;
  dn = 1;
  var e = _c(), t = {
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
  function g(v, x, T) {
    if (typeof x != "string") {
      if (h) {
        var p = m(x);
        p && p !== h && g(v, p, T);
      }
      var j = u(x);
      f && (j = j.concat(f(x)));
      for (var S = i(v), N = i(x), l = 0; l < j.length; ++l) {
        var w = j[l];
        if (!r[w] && !(T && T[w]) && !(N && N[w]) && !(S && S[w])) {
          var A = d(x, w);
          try {
            c(v, w, A);
          } catch {
          }
        }
      }
    }
    return v;
  }
  return Kt = g, Kt;
}
Ac();
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
function ua(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, s;
  for (s = 0; s < n.length; s++)
    a = n[s], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var Rt = /* @__PURE__ */ va(void 0);
Rt.displayName = "FormikContext";
Rt.Provider;
Rt.Consumer;
function Nc() {
  var e = Ta(Rt);
  return e || (process.env.NODE_ENV !== "production" ? We(!1, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.") : We()), e;
}
var ge = function(t) {
  return typeof t == "function";
}, Pt = function(t) {
  return t !== null && typeof t == "object";
}, $c = function(t) {
  return String(Math.floor(Number(t))) === t;
}, Yt = function(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}, qt = function(t) {
  return Pt(t) && ge(t.then);
};
function Oc(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function de(e, t, r, n) {
  n === void 0 && (n = 0);
  for (var a = ca(t); e && n < a.length; )
    e = e[a[n++]];
  return n !== a.length && !e || e === void 0 ? r : e;
}
function Me(e, t, r) {
  for (var n = an(e), a = n, s = 0, i = ca(t); s < i.length - 1; s++) {
    var c = i[s], u = de(e, i.slice(0, s + 1));
    if (u && (Pt(u) || Array.isArray(u)))
      a = a[c] = an(u);
    else {
      var f = i[s + 1];
      a = a[c] = $c(f) && Number(f) >= 0 ? [] : {};
    }
  }
  return (s === 0 ? e : a)[i[s]] === r ? e : (r === void 0 ? delete a[i[s]] : a[i[s]] = r, s === 0 && r === void 0 && delete n[i[s]], n);
}
function da(e, t, r, n) {
  r === void 0 && (r = /* @__PURE__ */ new WeakMap()), n === void 0 && (n = {});
  for (var a = 0, s = Object.keys(e); a < s.length; a++) {
    var i = s[a], c = e[i];
    Pt(c) ? r.get(c) || (r.set(c, !0), n[i] = Array.isArray(c) ? [] : {}, da(c, t, r, n[i])) : n[i] = t;
  }
  return n;
}
function Fc(e, t) {
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
        values: Me(e.values, t.payload.field, t.payload.value)
      });
    case "SET_FIELD_TOUCHED":
      return se({}, e, {
        touched: Me(e.touched, t.payload.field, t.payload.value)
      });
    case "SET_FIELD_ERROR":
      return se({}, e, {
        errors: Me(e.errors, t.payload.field, t.payload.value)
      });
    case "RESET_FORM":
      return se({}, e, t.payload);
    case "SET_FORMIK_STATE":
      return t.payload(e);
    case "SUBMIT_ATTEMPT":
      return se({}, e, {
        touched: da(e.values, !0),
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
var Re = {}, vt = {};
function Cc(e) {
  var t = e.validateOnChange, r = t === void 0 ? !0 : t, n = e.validateOnBlur, a = n === void 0 ? !0 : n, s = e.validateOnMount, i = s === void 0 ? !1 : s, c = e.isInitialValid, u = e.enableReinitialize, f = u === void 0 ? !1 : u, d = e.onSubmit, m = ua(e, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]), h = se({
    validateOnChange: r,
    validateOnBlur: a,
    validateOnMount: i,
    onSubmit: d
  }, m), g = be(h.initialValues), v = be(h.initialErrors || Re), x = be(h.initialTouched || vt), T = be(h.initialStatus), p = be(!1), j = be({});
  process.env.NODE_ENV !== "production" && oe(function() {
    typeof c > "u" || (process.env.NODE_ENV !== "production" ? We(!1, "isInitialValid has been deprecated and will be removed in future versions of Formik. Please use initialErrors or validateOnMount instead.") : We());
  }, []), oe(function() {
    return p.current = !0, function() {
      p.current = !1;
    };
  }, []);
  var S = ie(0), N = S[1], l = be({
    values: bt(h.initialValues),
    errors: bt(h.initialErrors) || Re,
    touched: bt(h.initialTouched) || vt,
    status: bt(h.initialStatus),
    isSubmitting: !1,
    isValidating: !1,
    submitCount: 0
  }), w = l.current, A = ne(function(b) {
    var O = l.current;
    l.current = Fc(O, b), O !== l.current && N(function(R) {
      return R + 1;
    });
  }, []), D = ne(function(b, O) {
    return new Promise(function(R, M) {
      var G = h.validate(b, O);
      G == null ? R(Re) : qt(G) ? G.then(function(q) {
        R(q || Re);
      }, function(q) {
        process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validate />", q), M(q);
      }) : R(G);
    });
  }, [h.validate]), z = ne(function(b, O) {
    var R = h.validationSchema, M = ge(R) ? R(O) : R, G = O && M.validateAt ? M.validateAt(O, b) : Rc(b, M);
    return new Promise(function(q, ae) {
      G.then(function() {
        q(Re);
      }, function(we) {
        we.name === "ValidationError" ? q(Ic(we)) : (process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validationSchema />", we), ae(we));
      });
    });
  }, [h.validationSchema]), V = ne(function(b, O) {
    return new Promise(function(R) {
      return R(j.current[b].validate(O));
    });
  }, []), I = ne(function(b) {
    var O = Object.keys(j.current).filter(function(M) {
      return ge(j.current[M].validate);
    }), R = O.length > 0 ? O.map(function(M) {
      return V(M, de(b, M));
    }) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
    return Promise.all(R).then(function(M) {
      return M.reduce(function(G, q, ae) {
        return q === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || q && (G = Me(G, O[ae], q)), G;
      }, {});
    });
  }, [V]), k = ne(function(b) {
    return Promise.all([I(b), h.validationSchema ? z(b) : {}, h.validate ? D(b) : {}]).then(function(O) {
      var R = O[0], M = O[1], G = O[2], q = rr.all([R, M, G], {
        arrayMerge: Pc
      });
      return q;
    });
  }, [h.validate, h.validationSchema, I, D, z]), B = ye(function(b) {
    return b === void 0 && (b = w.values), A({
      type: "SET_ISVALIDATING",
      payload: !0
    }), k(b).then(function(O) {
      return p.current && (A({
        type: "SET_ISVALIDATING",
        payload: !1
      }), A({
        type: "SET_ERRORS",
        payload: O
      })), O;
    });
  });
  oe(function() {
    i && p.current === !0 && Pe(g.current, h.initialValues) && B(g.current);
  }, [i, B]);
  var Q = ne(function(b) {
    var O = b && b.values ? b.values : g.current, R = b && b.errors ? b.errors : v.current ? v.current : h.initialErrors || {}, M = b && b.touched ? b.touched : x.current ? x.current : h.initialTouched || {}, G = b && b.status ? b.status : T.current ? T.current : h.initialStatus;
    g.current = O, v.current = R, x.current = M, T.current = G;
    var q = function() {
      A({
        type: "RESET_FORM",
        payload: {
          isSubmitting: !!b && !!b.isSubmitting,
          errors: R,
          touched: M,
          status: G,
          values: O,
          isValidating: !!b && !!b.isValidating,
          submitCount: b && b.submitCount && typeof b.submitCount == "number" ? b.submitCount : 0
        }
      });
    };
    if (h.onReset) {
      var ae = h.onReset(w.values, Ue);
      qt(ae) ? ae.then(q) : q();
    } else
      q();
  }, [h.initialErrors, h.initialStatus, h.initialTouched, h.onReset]);
  oe(function() {
    p.current === !0 && !Pe(g.current, h.initialValues) && f && (g.current = h.initialValues, Q(), i && B(g.current));
  }, [f, h.initialValues, Q, i, B]), oe(function() {
    f && p.current === !0 && !Pe(v.current, h.initialErrors) && (v.current = h.initialErrors || Re, A({
      type: "SET_ERRORS",
      payload: h.initialErrors || Re
    }));
  }, [f, h.initialErrors]), oe(function() {
    f && p.current === !0 && !Pe(x.current, h.initialTouched) && (x.current = h.initialTouched || vt, A({
      type: "SET_TOUCHED",
      payload: h.initialTouched || vt
    }));
  }, [f, h.initialTouched]), oe(function() {
    f && p.current === !0 && !Pe(T.current, h.initialStatus) && (T.current = h.initialStatus, A({
      type: "SET_STATUS",
      payload: h.initialStatus
    }));
  }, [f, h.initialStatus, h.initialTouched]);
  var L = ye(function(b) {
    if (j.current[b] && ge(j.current[b].validate)) {
      var O = de(w.values, b), R = j.current[b].validate(O);
      return qt(R) ? (A({
        type: "SET_ISVALIDATING",
        payload: !0
      }), R.then(function(M) {
        return M;
      }).then(function(M) {
        A({
          type: "SET_FIELD_ERROR",
          payload: {
            field: b,
            value: M
          }
        }), A({
          type: "SET_ISVALIDATING",
          payload: !1
        });
      })) : (A({
        type: "SET_FIELD_ERROR",
        payload: {
          field: b,
          value: R
        }
      }), Promise.resolve(R));
    } else if (h.validationSchema)
      return A({
        type: "SET_ISVALIDATING",
        payload: !0
      }), z(w.values, b).then(function(M) {
        return M;
      }).then(function(M) {
        A({
          type: "SET_FIELD_ERROR",
          payload: {
            field: b,
            value: de(M, b)
          }
        }), A({
          type: "SET_ISVALIDATING",
          payload: !1
        });
      });
    return Promise.resolve();
  }), H = ne(function(b, O) {
    var R = O.validate;
    j.current[b] = {
      validate: R
    };
  }, []), _ = ne(function(b) {
    delete j.current[b];
  }, []), C = ye(function(b, O) {
    A({
      type: "SET_TOUCHED",
      payload: b
    });
    var R = O === void 0 ? a : O;
    return R ? B(w.values) : Promise.resolve();
  }), U = ne(function(b) {
    A({
      type: "SET_ERRORS",
      payload: b
    });
  }, []), y = ye(function(b, O) {
    var R = ge(b) ? b(w.values) : b;
    A({
      type: "SET_VALUES",
      payload: R
    });
    var M = O === void 0 ? r : O;
    return M ? B(R) : Promise.resolve();
  }), E = ne(function(b, O) {
    A({
      type: "SET_FIELD_ERROR",
      payload: {
        field: b,
        value: O
      }
    });
  }, []), F = ye(function(b, O, R) {
    var M = ge(O) ? O(de(w.values, b)) : O;
    A({
      type: "SET_FIELD_VALUE",
      payload: {
        field: b,
        value: M
      }
    });
    var G = R === void 0 ? r : R;
    return G ? B(Me(w.values, b, M)) : Promise.resolve();
  }), $ = ne(function(b, O) {
    var R = O, M = b, G;
    if (!Yt(b)) {
      b.persist && b.persist();
      var q = b.target ? b.target : b.currentTarget, ae = q.type, we = q.name, Mt = q.id, kt = q.value, ga = q.checked, ba = q.outerHTML, vr = q.options, xa = q.multiple;
      R = O || we || Mt, !R && process.env.NODE_ENV !== "production" && fn({
        htmlContent: ba,
        documentationAnchorLink: "handlechange-e-reactchangeeventany--void",
        handlerName: "handleChange"
      }), M = /number|range/.test(ae) ? (G = parseFloat(kt), isNaN(G) ? "" : G) : /checkbox/.test(ae) ? Mc(de(w.values, R), ga, kt) : vr && xa ? Dc(vr) : kt;
    }
    R && F(R, M);
  }, [F, w.values]), K = ye(function(b) {
    if (Yt(b))
      return function(O) {
        return $(O, b);
      };
    $(b);
  }), Y = ye(function(b, O, R) {
    O === void 0 && (O = !0), A({
      type: "SET_FIELD_TOUCHED",
      payload: {
        field: b,
        value: O
      }
    });
    var M = R === void 0 ? a : R;
    return M ? B(w.values) : Promise.resolve();
  }), le = ne(function(b, O) {
    b.persist && b.persist();
    var R = b.target, M = R.name, G = R.id, q = R.outerHTML, ae = O || M || G;
    !ae && process.env.NODE_ENV !== "production" && fn({
      htmlContent: q,
      documentationAnchorLink: "handleblur-e-any--void",
      handlerName: "handleBlur"
    }), Y(ae, !0);
  }, [Y]), xe = ye(function(b) {
    if (Yt(b))
      return function(O) {
        return le(O, b);
      };
    le(b);
  }), re = ne(function(b) {
    ge(b) ? A({
      type: "SET_FORMIK_STATE",
      payload: b
    }) : A({
      type: "SET_FORMIK_STATE",
      payload: function() {
        return b;
      }
    });
  }, []), he = ne(function(b) {
    A({
      type: "SET_STATUS",
      payload: b
    });
  }, []), $e = ne(function(b) {
    A({
      type: "SET_ISSUBMITTING",
      payload: b
    });
  }, []), Ie = ye(function() {
    return A({
      type: "SUBMIT_ATTEMPT"
    }), B().then(function(b) {
      var O = b instanceof Error, R = !O && Object.keys(b).length === 0;
      if (R) {
        var M;
        try {
          if (M = Ke(), M === void 0)
            return;
        } catch (G) {
          throw G;
        }
        return Promise.resolve(M).then(function(G) {
          return p.current && A({
            type: "SUBMIT_SUCCESS"
          }), G;
        }).catch(function(G) {
          if (p.current)
            throw A({
              type: "SUBMIT_FAILURE"
            }), G;
        });
      } else if (p.current && (A({
        type: "SUBMIT_FAILURE"
      }), O))
        throw b;
    });
  }), P = ye(function(b) {
    if (b && b.preventDefault && ge(b.preventDefault) && b.preventDefault(), b && b.stopPropagation && ge(b.stopPropagation) && b.stopPropagation(), process.env.NODE_ENV !== "production" && typeof document < "u") {
      var O = Oc();
      O !== null && O instanceof HTMLButtonElement && (O.attributes && O.attributes.getNamedItem("type") || (process.env.NODE_ENV !== "production" ? We(!1, 'You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type="submit"`. If this is not a submit button, please add `type="button"`.') : We()));
    }
    Ie().catch(function(R) {
      console.warn("Warning: An unhandled error was caught from submitForm()", R);
    });
  }), Ue = {
    resetForm: Q,
    validateForm: B,
    validateField: L,
    setErrors: U,
    setFieldError: E,
    setFieldTouched: Y,
    setFieldValue: F,
    setStatus: he,
    setSubmitting: $e,
    setTouched: C,
    setValues: y,
    setFormikState: re,
    submitForm: Ie
  }, Ke = ye(function() {
    return d(w.values, Ue);
  }), pt = ye(function(b) {
    b && b.preventDefault && ge(b.preventDefault) && b.preventDefault(), b && b.stopPropagation && ge(b.stopPropagation) && b.stopPropagation(), Q();
  }), fa = ne(function(b) {
    return {
      value: de(w.values, b),
      error: de(w.errors, b),
      touched: !!de(w.touched, b),
      initialValue: de(g.current, b),
      initialTouched: !!de(x.current, b),
      initialError: de(v.current, b)
    };
  }, [w.errors, w.touched, w.values]), ha = ne(function(b) {
    return {
      setValue: function(R, M) {
        return F(b, R, M);
      },
      setTouched: function(R, M) {
        return Y(b, R, M);
      },
      setError: function(R) {
        return E(b, R);
      }
    };
  }, [F, Y, E]), pa = ne(function(b) {
    var O = Pt(b), R = O ? b.name : b, M = de(w.values, R), G = {
      name: R,
      value: M,
      onChange: K,
      onBlur: xe
    };
    if (O) {
      var q = b.type, ae = b.value, we = b.as, Mt = b.multiple;
      q === "checkbox" ? ae === void 0 ? G.checked = !!M : (G.checked = !!(Array.isArray(M) && ~M.indexOf(ae)), G.value = ae) : q === "radio" ? (G.checked = M === ae, G.value = ae) : we === "select" && Mt && (G.value = G.value || [], G.multiple = !0);
    }
    return G;
  }, [xe, K, w.values]), Dt = St(function() {
    return !Pe(g.current, w.values);
  }, [g.current, w.values]), ma = St(function() {
    return typeof c < "u" ? Dt ? w.errors && Object.keys(w.errors).length === 0 : c !== !1 && ge(c) ? c(h) : c : w.errors && Object.keys(w.errors).length === 0;
  }, [c, Dt, w.errors, h]), ya = se({}, w, {
    initialValues: g.current,
    initialErrors: v.current,
    initialTouched: x.current,
    initialStatus: T.current,
    handleBlur: xe,
    handleChange: K,
    handleReset: pt,
    handleSubmit: P,
    resetForm: Q,
    setErrors: U,
    setFormikState: re,
    setFieldTouched: Y,
    setFieldValue: F,
    setFieldError: E,
    setStatus: he,
    setSubmitting: $e,
    setTouched: C,
    setValues: y,
    submitForm: Ie,
    validateForm: B,
    validateField: L,
    isValid: ma,
    dirty: Dt,
    unregisterField: _,
    registerField: H,
    getFieldProps: pa,
    getFieldMeta: fa,
    getFieldHelpers: ha,
    validateOnBlur: a,
    validateOnChange: r,
    validateOnMount: i
  });
  return ya;
}
function fn(e) {
  var t = e.htmlContent, r = e.documentationAnchorLink, n = e.handlerName;
  console.warn("Warning: Formik called `" + n + "`, but you forgot to pass an `id` or `name` attribute to your input:\n    " + t + `
    Formik cannot determine which value to update. For more info see https://formik.org/docs/api/formik#` + r + `
  `);
}
function Ic(e) {
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
      de(t, i.path) || (t = Me(t, i.path, i.message));
    }
  }
  return t;
}
function Rc(e, t, r, n) {
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
function Pc(e, t, r) {
  var n = e.slice();
  return t.forEach(function(s, i) {
    if (typeof n[i] > "u") {
      var c = r.clone !== !1, u = c && r.isMergeableObject(s);
      n[i] = u ? rr(Array.isArray(s) ? [] : {}, s, r) : s;
    } else r.isMergeableObject(s) ? n[i] = rr(e[i], s, r) : e.indexOf(s) === -1 && n.push(s);
  }), n;
}
function Dc(e) {
  return Array.from(e).filter(function(t) {
    return t.selected;
  }).map(function(t) {
    return t.value;
  });
}
function Mc(e, t, r) {
  if (typeof e == "boolean")
    return !!t;
  var n = [], a = !1, s = -1;
  if (Array.isArray(e))
    n = e, s = e.indexOf(r), a = s >= 0;
  else if (!r || r == "true" || r == "false")
    return !!t;
  return t && r && !a ? n.concat(r) : a ? n.slice(0, s).concat(n.slice(s + 1)) : n;
}
var kc = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? gn : oe;
function ye(e) {
  var t = be(e);
  return kc(function() {
    t.current = e;
  }), ne(function() {
    for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return t.current.apply(void 0, n);
  }, []);
}
var Lc = /* @__PURE__ */ wa(function(e, t) {
  var r = e.action, n = ua(e, ["action"]), a = r ?? "#", s = Nc(), i = s.handleReset, c = s.handleSubmit;
  return ja("form", se({
    onSubmit: c,
    ref: t,
    onReset: i,
    action: a
  }, n));
});
Lc.displayName = "Form";
function Ht({
  anchorRef: e,
  open: t,
  children: r,
  offset: n = 4
}) {
  const [a, s] = ie({});
  return gn(() => {
    if (!t || !e.current) return;
    const i = e.current.getBoundingClientRect();
    s({
      position: "fixed",
      top: i.bottom + n,
      left: i.left,
      width: "200px",
      zIndex: 1e3
    });
  }, [t, e, n]), t ? Ea(
    /* @__PURE__ */ o.jsx("div", { style: a, children: r }),
    document.body
  ) : null;
}
function zc({
  field: e,
  formik: t,
  methods: r = {},
  sqlOpsUrls: n,
  refid: a,
  optionsOverride: s,
  setFieldOptions: i,
  module_refid: c
}) {
  const [u, f] = ie(!1), [d, m] = ie(
    s ?? e.options ?? {}
  ), [h, g] = ie(""), [v, x] = ie(0), T = be(null), [p, j] = ie(!1), S = te.useRef(h), N = be(null);
  te.useEffect(() => {
    S.current = h;
  }, [h]), oe(() => {
    s && Object.keys(s).length !== 0 && m(s);
  }, [s]), oe(() => {
    if (!p) return;
    const L = (H) => {
      const _ = H.target;
      N.current?.contains(_) || T.current?.contains(_) || (j(!1), g(""));
    };
    return document.addEventListener("mousedown", L), () => {
      document.removeEventListener("mousedown", L);
    };
  }, [p]);
  const l = e.name;
  te.useEffect(() => {
    let L = !0;
    return (async () => {
      let _ = e.valueKey ?? "value", C = e.labelKey ?? "title";
      if (e?.options) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const $ = Object.values(e.options);
          if ($.length && typeof $[0] == "string") {
            m(e.options);
            return;
          }
        }
        const E = (Array.isArray(e.options) ? e.options : [e.options]).map(pe), F = ve(
          _,
          C,
          E,
          e.groupKey
          // auto-uses `category` if present
        );
        m(F);
        return;
      }
      const U = e?.source ?? {};
      if (e.type === "dataMethod") {
        const y = e.method, E = y ? r[y] : void 0;
        if (E)
          try {
            const F = await Promise.resolve(E()), $ = Array.isArray(F?.data?.data) ? F.data.data : Array.isArray(F?.data) ? F.data : F, K = Array.isArray($) ? $.map(pe) : [], Y = ve(_, C, K, e.groupKey);
            L && m(Y);
          } catch (F) {
            console.error("Method execution failed:", F), L && m({});
          }
        else
          L && m({});
      }
      if (U.type === "api" && U.url)
        try {
          const y = await X({
            method: U.method || "GET",
            url: U.url,
            data: U.body ?? {},
            params: U.params ?? {},
            headers: U.headers ?? {}
          }), E = Array.isArray(y?.data?.data) ? y.data.data : Array.isArray(y?.data) ? y.data : y, F = Array.isArray(E) ? E.map(pe) : [], $ = ve(_, C, F, e.groupKey);
          L && m($);
        } catch (y) {
          console.error("API execution failed:", y), L && m({});
        }
      if (e.table || e.type === "dataSelector" || e.queryid) {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let y;
          if (e.type === "dataSelector")
            y = {
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
            y = {
              table: e.table,
              cols: e.columns,
              where: e.where ? a ? fe(e.where, { refid: a }) : e.where : void 0
            };
          }
          const E = await He(n, y, e?.queryid, void 0, c), F = Array.isArray(E?.data?.data) ? E.data.data : Array.isArray(E?.data) ? E.data : E, $ = Array.isArray(F) ? F.map(pe) : [], K = ve(_, C, $, e.groupKey);
          L && m(K);
        } catch (y) {
          console.error("API fetch failed:", y);
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
  const w = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, A = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, D = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, z = (L) => L.icon ? /* @__PURE__ */ o.jsx("i", { className: L.icon }) : null, V = St(
    () => gs(d),
    [d]
  ), I = V.length, k = St(() => e.search || !h ? V : V.filter(
    ([, L]) => L.toLowerCase().includes(h.toLowerCase())
  ), [e.search, h, V]), B = (L, H) => {
    if (p === !0)
      if (L.key === "ArrowDown")
        L.preventDefault(), x(
          (_) => _ + 1 < k.length ? _ + 1 : 0
        );
      else if (L.key === "ArrowUp")
        L.preventDefault(), x(
          (_) => _ - 1 >= 0 ? _ - 1 : k.length - 1
        );
      else if (L.key === "Enter") {
        L.preventDefault();
        const [_] = k[v] || [];
        _ && t.setFieldValue(e.name, H ? _ : [...t.values[e.name], _]);
      } else L.key === "Escape" && (g(""), j(!1));
  };
  oe(() => {
    T.current?.querySelector(
      `[data-index="${v}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [v]), oe(() => {
    v >= k.length && x(0);
  }, [k, v]), oe(() => {
    const L = e.autocomplete, H = e.ajaxchain;
    if (!L && !H) return;
    const _ = t.values[e.name];
    if (!_) return;
    const C = Array.isArray(H) ? H : H ? [H] : [];
    (async () => {
      try {
        if (ms(L)) {
          const y = L.src;
          if (!y || !n) return;
          const E = fe(y.where ?? {}, {
            refid: _
          }), F = {
            ...y,
            table: y.table,
            cols: y.columns,
            where: E
          }, { data: $ } = await He(n, F, e?.queryid, void 0, c), K = Array.isArray($?.data) ? $.data[0] : $?.data;
          K && L.target.split(",").map((Y) => Y.trim()).forEach((Y) => {
            K[Y] !== void 0 && t.setFieldValue(Y, K[Y]);
          });
        }
        for (const y of C) {
          const E = y.src;
          if (!y || typeof y != "object" || !E || typeof E != "object" || !n) continue;
          let F;
          if (!E.queryid) {
            if (!E.table || !E.columns)
              throw new Error("SQL query requires field.table");
            const he = fe(E?.where ?? {}, {
              refid: _
            });
            F = {
              ...E,
              table: E.table,
              cols: E.columns,
              where: he
            };
          }
          const { data: $ } = await He(n, F, e?.queryid, void 0, c);
          let K = e.valueKey ?? "value", Y = e.labelKey ?? "title";
          const le = Array.isArray($?.data?.data) ? $.data.data : Array.isArray($?.data) ? $.data : $, xe = Array.isArray(le) ? le.map(pe) : [], re = ve(
            K,
            Y,
            xe,
            e.groupKey
          );
          i?.(y.target, re);
        }
      } catch (y) {
        console.error("Autocomplete / AjaxChain fetch failed", y);
      }
    })();
  }, [t.values[e.name]]), te.useEffect(() => {
    if (!e.search || !h.trim() || !e.table || !n) return;
    const L = ys(e.columns ?? ""), H = new AbortController(), _ = setTimeout(async () => {
      try {
        let C;
        if (!e.queryid) {
          if (!e.table || !e.cols)
            throw new Error("SQL query requires field.table");
          const le = a ? fe(e.where ?? {}, {
            refid: a
          }) : e.where;
          C = {
            ...e,
            table: e.table,
            cols: e.columns || e.cols,
            where: le
          };
        }
        let U = {};
        Array.isArray(L) && L.forEach((le) => {
          U[le] = [h, "LIKE"];
        });
        const { data: y } = await He(n, C, e?.queryid, void 0, c, U);
        let E = e.valueKey ?? "value", F = e.labelKey ?? "title";
        const $ = Array.isArray(y?.data?.data) ? y.data.data : Array.isArray(y?.data) ? y.data : y, K = Array.isArray($) ? $.map(pe) : [], Y = ve(
          E,
          F,
          K,
          e.groupKey
        );
        m(Y);
      } catch (C) {
        if (X.isCancel(C)) return;
        console.error("Search fetch failed", C);
      }
    }, 500);
    return () => {
      clearTimeout(_), H.abort();
    };
  }, [h, a]);
  const Q = async (L) => {
    if (L.length === 0) {
      console.error("No file");
      return;
    }
    if (!n) return;
    const H = n?.baseURL + n?.uploadURL;
    if (!H) {
      console.error("No Upload URL ");
      return;
    }
    const _ = e.multiple === !0;
    try {
      const C = await Promise.all(
        Array.from(L).map(async (U) => {
          const y = new FormData();
          return y.append("file", U), (await X({
            method: "POST",
            url: H,
            data: y,
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${n?.accessToken}`
            }
          })).data;
        })
      );
      t.setFieldValue(
        l,
        _ ? C.map((U) => U.path) : C[0]?.path
      );
    } catch (C) {
      console.error("File upload failed", C), t.setFieldError(l, "File upload failed");
    }
  };
  switch (e.type) {
    case "autocomplete": {
      const _ = t.values[l] ?? "", C = h !== "" ? h : Ir(d, _) ?? String(_ ?? ""), U = (E) => {
        const F = E.target.value;
        g(F), x(0), F.trim() ? j(!0) : (j(!1), t.setFieldValue(l, ""));
      }, y = (E) => {
        t.setFieldValue(l, E), g(""), j(!1);
      };
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: D, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsx("div", { ref: N, children: /* @__PURE__ */ o.jsx(
          "input",
          {
            className: `${w} ${A}`,
            value: C,
            placeholder: e.placeholder || "Type to search...",
            onChange: U,
            onFocus: () => {
              const E = String(t.values[l] ?? "");
              g(E);
            },
            onBlur: () => {
              setTimeout(() => j(!1), 150);
            },
            onKeyDown: (E) => {
              if (E.key === "Enter") {
                if (E.preventDefault(), k[v]) {
                  const [F] = k[v];
                  t.setFieldValue(l, F);
                } else h.trim() && t.setFieldValue(l, h.trim());
                j(!1);
                return;
              }
              B(E, !0);
            },
            disabled: e.disabled
          }
        ) }),
        /* @__PURE__ */ o.jsx(Ht, { anchorRef: N, open: p, children: /* @__PURE__ */ o.jsx(
          "div",
          {
            ref: T,
            className: "bg-white border rounded shadow max-h-52 overflow-y-auto",
            children: k.length > 0 ? k.map(([E, F], $) => /* @__PURE__ */ o.jsx(
              "div",
              {
                "data-index": $,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${v === $ ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => y(E),
                children: F
              },
              E
            )) : /* @__PURE__ */ o.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `No matches press enter to add "${C}" ` })
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
        const _ = t.values[l] ?? [];
        return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ o.jsxs("label", { className: D, children: [
            e.label,
            e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ o.jsxs(
            "div",
            {
              ref: N,
              tabIndex: 0,
              className: "cursor-pointer select-none border border-gray-300 rounded-lg px-4 py-2.5 bg-white flex justify-between items-center",
              onClick: () => {
                j((C) => !C), x(0);
              },
              onKeyDown: (C) => B(C, !1),
              onBlur: () => {
                e.multiple || setTimeout(() => {
                  j(!1), g("");
                }, 150);
              },
              children: [
                /* @__PURE__ */ o.jsx("span", { className: "text-sm text-gray-700 truncate", children: _.length > 0 ? _.join(", ") : `Select ${e.label}` }),
                /* @__PURE__ */ o.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
              ]
            }
          ),
          /* @__PURE__ */ o.jsx(Ht, { anchorRef: N, open: p, children: /* @__PURE__ */ o.jsxs(
            "div",
            {
              ref: T,
              className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
              children: [
                e.search && /* @__PURE__ */ o.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "text",
                    value: h,
                    onChange: (C) => {
                      g(C.target.value), x(0);
                    },
                    placeholder: "Search...",
                    className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                  }
                ) }),
                k.length > 0 ? k.map(([C, U], y) => /* @__PURE__ */ o.jsxs(
                  "label",
                  {
                    "data-index": y,
                    className: `flex items-center gap-x-2 px-2 py-1 rounded cursor-pointer text-sm
                    ${_.includes(C) ? "bg-indigo-50 text-indigo-600 font-medium" : v === y ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: [
                      /* @__PURE__ */ o.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: _.includes(C),
                          onChange: (E) => {
                            const F = E.target.checked ? [..._, C] : _.filter(($) => $ !== C);
                            t.setFieldValue(l, F);
                          },
                          className: "h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        }
                      ),
                      U
                    ]
                  },
                  C
                )) : /* @__PURE__ */ o.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ]
            }
          ) }),
          t.touched[l] && t.errors[l] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[l]) })
        ] });
      }
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: D, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs(
          "div",
          {
            ref: N,
            tabIndex: 0,
            className: "cursor-pointer select-none border border-gray-300 rounded-lg px-4 py-2.5 bg-white flex justify-between items-center",
            onClick: () => {
              j((_) => !_), x(0);
            },
            onKeyDown: (_) => B(_, !0),
            onBlur: () => {
              setTimeout(() => {
                j(!1), g("");
              }, 150);
            },
            children: [
              /* @__PURE__ */ o.jsx("span", { className: "text-sm text-gray-700 truncate", children: t.values[l] ? Ir(d, t.values[l]) ?? "Select option" : `Select ${e.label}` }),
              /* @__PURE__ */ o.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
            ]
          }
        ),
        /* @__PURE__ */ o.jsx(Ht, { anchorRef: N, open: p, children: /* @__PURE__ */ o.jsxs(
          "div",
          {
            ref: T,
            className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
            children: [
              e.search && /* @__PURE__ */ o.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ o.jsx(
                "input",
                {
                  type: "text",
                  value: h,
                  onChange: (_) => {
                    g(_.target.value), x(0);
                  },
                  onKeyDown: (_) => B(_, !0),
                  placeholder: "Search...",
                  className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                }
              ) }),
              k.length > 0 && /* @__PURE__ */ o.jsx(
                "div",
                {
                  onMouseDown: (_) => {
                    _.preventDefault(), t.setFieldValue(l, ""), j(!1), g("");
                  },
                  className: "px-2 py-1 text-sm cursor-pointer hover:bg-gray-50",
                  children: "Clear selection"
                }
              ),
              k.length > 0 ? k.map(([_, C], U) => /* @__PURE__ */ o.jsx(
                "div",
                {
                  "data-index": U,
                  onMouseDown: () => {
                    t.setFieldValue(l, _), j(!1), g(""), x(0);
                  },
                  className: `px-2 py-1 rounded cursor-pointer text-sm
                  ${t.values[l] === _ ? "bg-indigo-50 text-indigo-600 font-medium" : v === U ? "bg-gray-100" : "hover:bg-gray-50"}`,
                  children: C
                },
                _
              )) : /* @__PURE__ */ o.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
            ]
          }
        ) }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[l]) })
      ] });
    }
    case "textarea":
      return /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: D, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ o.jsx(
            "textarea",
            {
              className: `${w} ${A} min-h-[120px] resize-none`,
              onFocus: () => f(!0),
              name: l,
              value: t.values[l],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ o.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${u ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[l]) })
      ] }) });
    case "select":
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: D, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ o.jsxs(
            "select",
            {
              className: `${w} ${A} appearance-none cursor-pointer pr-12`,
              onFocus: () => f(!0),
              name: l,
              value: t.values[l],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              disabled: e.disabled,
              children: [
                /* @__PURE__ */ o.jsx("option", { value: "", disabled: !0, children: e.placeholder || "Please select an option" }),
                !tr(d) && Object.entries(d).map(([_, C]) => /* @__PURE__ */ o.jsx("option", { value: _, className: "py-2", children: C }, _)),
                tr(d) && Object.entries(d).map(([_, C]) => /* @__PURE__ */ o.jsx("optgroup", { label: _, children: Object.entries(C).map(([U, y]) => /* @__PURE__ */ o.jsx("option", { value: U, children: y }, U)) }, _))
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
        /* @__PURE__ */ o.jsxs("label", { className: D, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: `flex ${I > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(d || {}).map(([_, C]) => /* @__PURE__ */ o.jsxs(
          "label",
          {
            htmlFor: `${l}-${_}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  id: `${l}-${_}`,
                  type: "radio",
                  name: l,
                  checked: t.values[l] === _,
                  value: _,
                  onChange: t.handleChange,
                  onBlur: t.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              C
            ]
          },
          _
        )) }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[l]) })
      ] });
    case "checkbox": {
      const _ = t.values[l];
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: D, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(d || {}).map(([C, U]) => /* @__PURE__ */ o.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: _.includes(C),
                  onChange: (y) => {
                    const E = y.target.checked ? [..._, C] : _.filter((F) => F !== C);
                    t.setFieldValue(l, E);
                  },
                  onBlur: t.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              U
            ]
          },
          C
        )) }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[l]) })
      ] });
    }
    case "tags": {
      const _ = t.values[l], C = h.trim(), U = Array.isArray(d) ? d : Object.entries(d || {}).map(([$, K]) => ({ value: $, label: K })), y = ($) => {
        $ && !_.includes($) && (t.setFieldValue(l, [..._, $]), g(""));
      }, E = ($) => {
        t.setFieldValue(
          l,
          _.filter((K) => K !== $)
        );
      }, F = ($) => U.find((K) => K.value === $)?.label ?? $;
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: D, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: `${w} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !e.disabled && document.getElementById(`${l}-input`)?.focus(),
            children: [
              _.map(($) => /* @__PURE__ */ o.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ o.jsx("span", { className: "text-indigo-700", children: F($) }),
                    /* @__PURE__ */ o.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (K) => {
                          K.stopPropagation(), e.disabled || E($);
                        },
                        onMouseDown: (K) => K.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                $
              )),
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  id: `${l}-input`,
                  type: "text",
                  value: h,
                  onChange: ($) => g($.target.value),
                  onKeyDown: ($) => {
                    ($.key === "Enter" || $.key === ",") && ($.preventDefault(), y(C));
                  },
                  placeholder: _.length === 0 ? e.placeholder || "Type and press Enter" : "",
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
      const L = e.multiple === !0, H = Array.isArray(t.values[l]) ? t.values[l] : t.values[l] ? [t.values[l]] : [];
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: D, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ o.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: z(e) }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "file",
              className: `${w} ${A} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => f(!0),
              name: l,
              multiple: L,
              onChange: (_) => {
                const C = _.currentTarget.files;
                C && Q(C);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ o.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${u ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        H.map((_) => {
          const C = _?.split("/").pop();
          return C ? /* @__PURE__ */ o.jsx("div", { className: "mt-1", children: /* @__PURE__ */ o.jsx("span", { className: "text-sm", children: C }) }, _) : null;
        }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[l]) })
      ] });
    case "json":
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: D, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ o.jsx(
            "textarea",
            {
              id: `${l}-json`,
              name: l,
              value: t.values[l],
              onChange: (_) => t.setFieldValue(l, _.target.value),
              onBlur: t.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: e.disabled,
              className: `${w} ${A} min-h-[200px] font-mono text-sm resize-y`
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
        /* @__PURE__ */ o.jsxs("label", { className: D, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ o.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: z(e) }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "date",
              name: l,
              value: t.values[l],
              onChange: t.handleChange,
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled,
              className: `${w} ${A} ${e.icon ? "pl-9" : ""}`
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
    default:
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: D, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ o.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: z(e) }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: e.type || "text",
              className: `${w} ${A} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => f(!0),
              name: l,
              value: t.values[l],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ o.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${u ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[l] && t.errors[l] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[l]) })
      ] });
  }
}
function Vc({
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
  const f = fs(t, i?.operation), [d, m] = te.useState({}), h = (T, p) => {
    m((j) => ({
      ...j,
      [T]: p
    }));
  }, { initialValues: g, validationSchema: v } = te.useMemo(() => {
    const T = {}, p = {};
    return f.forEach((j) => {
      ps([j], T, p, r);
    }), {
      initialValues: T,
      validationSchema: p
    };
  }, [f, r]), x = Cc({
    initialValues: g,
    enableReinitialize: !0,
    validationSchema: Cn().shape(v),
    onSubmit: (T) => {
      n(T), x.resetForm();
    }
  });
  return /* @__PURE__ */ o.jsx("div", { className: "relative z-10 max-w-full ", children: /* @__PURE__ */ o.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ o.jsxs("form", { onSubmit: x.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "grid grid-flow-col auto-cols-max gap-4  overflow-x-auto", children: [
      f.map((T, p) => hs(T.hidden) || T.type === "geolocation" || T.vmode === "edit" && i?.operation === "create" ? null : /* @__PURE__ */ o.jsx(
        "div",
        {
          children: /* @__PURE__ */ o.jsx(
            zc,
            {
              refid: c,
              module_refid: u,
              ...i ? { sqlOpsUrls: i } : {},
              field: T,
              formik: x,
              methods: s,
              setFieldOptions: h,
              ...d[T.name] ? { optionsOverride: d[T.name] } : {}
            }
          )
        },
        T?.name ?? `field-${p}`
      )),
      /* @__PURE__ */ o.jsxs("div", { className: "pl-2", children: [
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
}), Wt = async (e) => (await X.get(
  e.baseURL + e.dbopsGetHash,
  { headers: at(e) }
)).data.refhash, Zt = async (e, t) => (await X.post(
  e.baseURL + e.dbopsGetRefId,
  t,
  { headers: at(e) }
)).data.refid, Bc = {
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
    const c = await X.post(
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
    return (await X.post(
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
    return (await X.post(
      e.baseURL + e.dbopsUpdate,
      { refid: a, fields: t.values, datahash: n },
      { headers: at(e) }
    )).data;
  }
};
function hn({
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
  const f = e.endPoints, d = e?.source?.refid, [m, h] = te.useState(i), g = te.useMemo(() => us(e.fields), [e.fields]);
  console.log("initialvalues", i), console.log("resolvedData", m), te.useEffect(() => {
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
          const N = S.method, l = N ? t[N] : void 0;
          if (l)
            try {
              const w = await Promise.resolve(l());
              p && v(w);
            } catch (w) {
              console.error("Method execution failed:", w);
            }
        }
        if (S.type === "api" && f?.operation !== "create")
          try {
            const N = await X({
              method: S.method || "GET",
              url: S.url ?? "",
              data: S.body ?? {},
              params: S.params ?? {},
              headers: S.headers ?? {}
            });
            p && v(N.data);
          } catch (N) {
            console.error("API fetch failed:", N);
          }
        if (S.type === "sql" && S.refid && S.refid !== "0" && f?.operation !== "create" || f?.operation !== "create" && S.dbopsid) {
          if (!f) {
            console.error("SQL source requires formJson.endPoints but it is missing");
            return;
          }
          try {
            const N = await Bc.fetch(f, {
              source: {
                ...S,
                table: S.table,
                columns: S.columns,
                where: fe(S.where, {
                  refid: d
                })
              },
              fields: Nt(e.fields, f.operation)
            }, S?.dbopsid, u);
            p && v(N);
          } catch (N) {
            console.error("API fetch failed:", N);
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
  ]), console.log("source?.refid", e?.source?.refid);
  const x = async (p) => {
    const j = e?.source ?? {};
    let S = null;
    if (g.length > 0)
      try {
        S = await ds();
      } catch (l) {
        console.log("catch fetchGeolocation", l), S = null;
      }
    const N = {
      ...p,
      ...Object.fromEntries(
        g.map((l) => [l, S])
      )
    };
    if (j.type === "method") {
      const l = j.method, w = l ? t[l] : void 0;
      if (w)
        try {
          const A = await Promise.resolve(w(N));
          c?.(null), s?.(A);
        } catch (A) {
          s?.(A), console.error("Method execution failed:", A);
        }
    }
    if (j.type === "api") {
      if (!f) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const l = await X({
          method: j.method || "POST",
          url: f.baseURL + j.endpoint,
          data: N ?? {},
          headers: {
            Authorization: `Bearer ${f?.accessToken}`
          }
        });
        c?.(null), s?.(l);
      } catch (l) {
        s?.(l), console.error("API fetch failed:", l);
      }
    }
    if (j.type === "sql") {
      const l = e.endPoints;
      if (!l) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let w = !1, A;
        j?.dbopsid && (w = !0, A = j?.dbopsid);
        const D = await X({
          method: "GET",
          url: l.baseURL + l.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${l?.accessToken}`
          }
        });
        if (!w) {
          let I = {
            ...j
          };
          j.where && (I = {
            ...j,
            where: fe(j.where, {
              refid: d
            })
          }), A = (await X({
            method: "POST",
            url: l.baseURL + l.dbopsGetRefId,
            data: {
              operation: l.operation,
              source: I,
              fields: Nt(e.fields, l.operation),
              forcefill: e.forcefill,
              datahash: D.data.refhash,
              scrid: u
            },
            headers: {
              Authorization: `Bearer ${l?.accessToken}`
            }
          }))?.data.refid;
        }
        let z = {
          refid: A,
          fields: N,
          datahash: D.data.refhash,
          refid1: l.refid
        };
        j?.refid && (z.refid1 = j?.refid);
        const V = await X({
          method: "POST",
          url: l.baseURL + l[l.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: z,
          headers: {
            Authorization: `Bearer ${l?.accessToken}`
          }
        });
        c?.(null), s?.(V);
      } catch (w) {
        s?.(w), console.error("API fetch failed:", w);
      }
    }
  }, T = {
    simple: /* @__PURE__ */ o.jsx(
      Vc,
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
  return /* @__PURE__ */ o.jsx("div", { className: "relative", children: T.simple });
}
function xr({ tabObj: e, methods: t, tabName: r, sqlOpsUrls: n, refid: a, Reports: s, toast: i, handleAction: c, infoViewJson: u }) {
  const [f, d] = ie(!1), [m, h] = ie(null), [g, v] = te.useState(0), [x, T] = te.useState(null), p = e?.config, j = e?.config, S = j?.["popup.form"] ? "popup.form" : (j?.form, "form"), N = j?.[S] && Object.keys(j?.[S]).length > 0, l = (V) => {
    let I = pe(V.data);
    T(I);
  }, w = (V) => {
    T(V), v((I) => I + 1);
  }, A = (V) => {
    let I = pe(V.data);
    h(I), d(!0);
  };
  console.log("config?.[formType]", j?.[S]);
  const D = async () => {
    if (console.log("deleteTarget", m), !!m?.id) {
      if (!n) {
        window.alert("Delete configuration missing.");
        return;
      }
      try {
        let V = e?.config;
        const I = V?.["popup.form"] ? "popup.form" : (V?.form, "form"), k = V?.[I];
        if (!k?.source) throw new Error("Form source missing");
        let B = !1, Q;
        k?.source?.dbopsid && (B = !0, Q = k?.source?.dbopsid);
        const L = await X({
          method: "GET",
          url: n.baseURL + n.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${n.accessToken}`
          }
        });
        if (!B) {
          let H = { ...k.source, refid: m.id };
          k.source.where && (H = {
            ...H,
            where: fe(k.source.where, {
              refid: m?.id
            })
          }), Q = (await X({
            method: "POST",
            url: n.baseURL + n.dbopsGetRefId,
            data: {
              operation: "update",
              source: H,
              fields: k.fields,
              forcefill: k.forcefill,
              datahash: L.data.refhash,
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
            refid: Q,
            fields: { blocked: "true" },
            datahash: L.data.refhash,
            refid1: m?.id
          },
          headers: {
            Authorization: `Bearer ${n.accessToken}`
          }
        }), window.alert("Record deleted successfully."), v((H) => H + 1);
      } catch (V) {
        console.error(V), window.alert("Failed to delete record. Please try again");
      } finally {
        h(null), d(!1);
      }
    }
  }, z = () => {
    h(null), d(!1);
  };
  return /* @__PURE__ */ o.jsx(o.Fragment, { children: s ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      s,
      {
        methods: { ...t, deleteRecord: A, editRecord: l },
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
          refresh: g
        },
        onButtonClick: c
      }
    ),
    N && /* @__PURE__ */ o.jsx(
      hn,
      {
        formJson: {
          ...j[S],
          source: {
            ...j?.[S].source,
            refid: x?.id
          },
          endPoints: {
            ...n,
            operation: x ? "update" : "create"
          }
        },
        initialvalues: x ?? {},
        setEditData: w,
        module_refid: u?.module_refid
      }
    ),
    /* @__PURE__ */ o.jsx(
      ws,
      {
        open: f,
        onConfirm: D,
        onCancel: z
      }
    )
  ] }) : N && /* @__PURE__ */ o.jsx(
    hn,
    {
      formJson: {
        ...j[S],
        source: {
          ...j?.[S].source,
          refid: x?.id
        },
        endPoints: {
          ...n,
          operation: x ? "update" : "create"
        }
      },
      initialvalues: x ?? {},
      setEditData: w,
      module_refid: u?.module_refid
    }
  ) });
}
const pn = ({ groups: e, groupNames: t, setActiveTabIndex: r, activeTabIndex: n }) => /* @__PURE__ */ o.jsx(
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
  const [u, f] = ie(!1), d = be(null);
  return oe(() => {
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
}, mn = ({
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
      e.length > 0 ? n?.fields ? /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ o.jsx("div", { className: r?.fieldGridClass || "grid grid-cols-12 gap-2", children: n.fields.map((g, v) => /* @__PURE__ */ o.jsx(
        "div",
        {
          className: `col-span-12 sm:col-span-6 ${ct[ut(g.width)] || "lg:col-span-2"}`,
          children: /* @__PURE__ */ o.jsx(
            dt,
            {
              field: g,
              data: a ?? {},
              methods: c,
              refid: u,
              ...f ? { sqlOpsUrls: f } : {},
              module_refid: d,
              setFieldOptions: h,
              ...m[g.name] ? { optionsOverride: m[g.name] } : {}
            }
          )
        },
        g?.name ?? `field-${v}`
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
            e.slice(0, 5).map((g, v) => /* @__PURE__ */ o.jsx(
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
        /* @__PURE__ */ o.jsx("div", { className: "flex gap-1", children: e.map((g, v) => /* @__PURE__ */ o.jsx(
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
  viewMode: i,
  sqlOpsUrls: c,
  refid: u,
  Reports: f,
  toast: d = {},
  handleAction: m = () => {
  },
  infoViewJson: h
}) {
  const [g, v] = ie(0), [x, T] = ie(!1), p = be(null), [j, S] = ie({}), N = (B, Q) => {
    S((L) => ({
      ...L,
      [B]: Q
    }));
  }, l = Object.keys(e);
  oe(() => {
    const B = () => {
      if (p.current) {
        const Q = p.current;
        T(Q.scrollWidth > Q.clientWidth);
      }
    };
    return B(), window.addEventListener("resize", B), () => window.removeEventListener("resize", B);
  }, [l.length]), oe(() => {
    if (p.current && l.length > 0) {
      const B = p.current.children[g];
      B && B.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [g, l.length]);
  const w = i === "tableft", A = i === "tabright", D = !w && !A, z = e[l[g] ?? ""] || null, V = {
    single: (B, Q) => /* @__PURE__ */ o.jsx(cr, { module_refid: h.module_refid, tabObj: B, methods: t, tabName: Q, ...c ? { sqlOpsUrls: c } : {}, refid: u }),
    grid: (B, Q) => /* @__PURE__ */ o.jsx(
      xr,
      {
        ...f ? { Reports: f } : {},
        toast: d,
        handleAction: m,
        tabObj: B,
        methods: t,
        tabName: Q,
        ...c ? { sqlOpsUrls: c } : {},
        refid: u,
        infoViewJson: h
      }
    )
  }, I = z?.config?.uimode, k = n[I] || V[I] || (() => /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No UI mode for this type" }));
  return D ? /* @__PURE__ */ o.jsxs("div", { className: "flex-1 flex flex-col min-h-0 ", children: [
    /* @__PURE__ */ o.jsx(
      Gc,
      {
        groupNames: l,
        groups: e,
        setActiveTabIndex: v,
        activeTabIndex: g,
        tabsNavRef: p,
        isCommonInfo: a,
        showScrollHint: x,
        layoutConfig: s
      }
    ),
    /* @__PURE__ */ o.jsx(
      mn,
      {
        groupNames: l,
        activeTabIndex: g,
        layoutConfig: s,
        tabObj: z,
        infoData: r,
        setActiveTabIndex: v,
        renderView: k,
        groups: e,
        methods: t,
        refid: u,
        ...c ? { sqlOpsUrls: c } : {},
        module_refid: h.module_refid,
        fieldOptions: j,
        setFieldOptions: N
      }
    )
  ] }) : /* @__PURE__ */ o.jsxs("div", { className: "flex-1 flex min-h-0", children: [
    w && /* @__PURE__ */ o.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ o.jsx(
      pn,
      {
        groupNames: l,
        groups: e,
        setActiveTabIndex: v,
        activeTabIndex: g
      }
    ) }),
    /* @__PURE__ */ o.jsx("main", { className: "flex-1 flex flex-col min-h-0 overflow-auto", children: /* @__PURE__ */ o.jsx(
      mn,
      {
        groupNames: l,
        activeTabIndex: g,
        layoutConfig: s,
        tabObj: z,
        infoData: r,
        setActiveTabIndex: v,
        renderView: k,
        groups: e,
        methods: t,
        refid: u,
        module_refid: h.module_refid,
        ...c ? { sqlOpsUrls: c } : {},
        fieldOptions: j,
        setFieldOptions: N
      }
    ) }),
    A && /* @__PURE__ */ o.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ o.jsx(
      pn,
      {
        groupNames: l,
        groups: e,
        setActiveTabIndex: v,
        activeTabIndex: g
      }
    ) })
  ] });
}
function Uc({ title: e, children: t, isFirst: r }) {
  const [n, a] = ie(r);
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
  const [d, m] = ie({}), h = (v, x) => {
    m((T) => ({ ...T, [v]: x }));
  }, g = {
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
  return /* @__PURE__ */ o.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ o.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ o.jsx("div", { className: "space-y-1 flex flex-col min-h-0", children: e && Object.entries(e).map(([v, x], T) => /* @__PURE__ */ o.jsx(Uc, { title: x.label, isFirst: T === 0, children: x?.fields ? /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ o.jsx("div", { className: "grid grid-cols-12 gap-2", children: x.fields.map((p, j) => /* @__PURE__ */ o.jsx(
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
    p?.name ?? `field-${j}`
  )) }) }) : x ? /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: n[x.config?.uimode]?.(x) || g[x.config?.uimode]?.(x, v) || /* @__PURE__ */ o.jsx("div", { children: "No renderer for this type" }) }) : null }, v)) }) }) });
}
function Yc({ title: e, children: t }) {
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
function qc({
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
  const [d, m] = ie({}), h = (v, x) => {
    m((T) => ({ ...T, [v]: x }));
  }, g = {
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
  return /* @__PURE__ */ o.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ o.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ o.jsx("div", { className: "space-y-2  flex flex-col min-h-0", children: e && Object.entries(e).map(([v, x], T) => /* @__PURE__ */ o.jsx(Yc, { title: x.label, children: x?.fields ? /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ o.jsx("div", { className: "grid grid-cols-12 gap-2", children: x.fields.map((p, j) => /* @__PURE__ */ o.jsx(
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
    p?.name ?? `field-${j}`
  )) }) }) : x ? /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: n[x.config?.uimode]?.(x) || g[x.config?.uimode]?.(x, v) || /* @__PURE__ */ o.jsx("div", { children: "No renderer for this type" }) }) : null }, v)) }) }) });
}
function Qc({
  infoViewJson: e,
  data: t = {},
  hiddenFields: r = [],
  groupFieldsFn: n = cs,
  layoutConfig: a = {},
  viewRenderers: s = {},
  methods: i = {},
  Reports: c,
  toast: u = {},
  handleAction: f = () => {
  }
}) {
  const [d, m] = te.useState({}), h = ls(e.infoview ?? {}), g = e.endPoints, v = te.useMemo(
    () => n(e.fields || {}),
    [e.fields, n]
  ), x = e?.source?.refid;
  let T = { ...v };
  e.infoview?.groups && (T = { ...T, ...e.infoview.groups }), te.useEffect(() => {
    let S = !1;
    return (async () => {
      const l = e?.source;
      if (!l?.type) {
        S || m({});
        return;
      }
      if (l.type === "method") {
        const w = l.method, A = w ? i[w] : void 0;
        if (A)
          try {
            const D = await Promise.resolve(A());
            S || m(D || {});
          } catch (D) {
            console.error("Method execution failed:", D), S || m({});
          }
        else
          S || m({});
      }
      if (l.type === "api")
        try {
          const w = await X({
            method: l.method || "GET",
            url: l.url,
            data: l.body || {},
            params: l.params || {},
            headers: l.headers || {}
          });
          S || m(w.data || {});
        } catch (w) {
          console.error("API fetch failed:", w), S || m({});
        }
      if (l.type === "sql" && l.refid && l.refid != "0" || l.dbopsid) {
        if (!g) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let w = !1, A;
          l?.dbopsid && (w = !0, A = l?.dbopsid);
          const D = await X({
            method: "GET",
            url: g.baseURL + g.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${g?.accessToken}`
            }
          });
          if (!w) {
            let I = {
              ...l
            };
            l.where && (I = {
              ...l,
              where: fe(l.where, {
                refid: x
              })
            }), A = (await X({
              method: "POST",
              url: g.baseURL + g.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: I,
                fields: Nt(e.fields, g.operation),
                forcefill: e.forcefill,
                datahash: D.data.refhash,
                srcid: e?.module_refid
              },
              headers: {
                Authorization: `Bearer ${g?.accessToken}`
              }
            }))?.data.refid;
          }
          const z = await X({
            method: "POST",
            url: g.baseURL + g.dbopsFetch,
            data: {
              refid: A,
              datahash: D.data.refhash,
              module_refid: e.module_refid
            },
            headers: {
              Authorization: `Bearer ${g?.accessToken}`
            }
          }), V = Pn(z) ?? {};
          S || m(V);
        } catch (w) {
          console.error("API fetch failed:", w);
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
  const p = T.common || null;
  p && delete T.common;
  const j = (S) => {
    switch (S) {
      case "accordion":
        return /* @__PURE__ */ o.jsx(
          Kc,
          {
            groups: T,
            methods: i,
            infoData: d,
            viewRenderers: s,
            ...g ? { sqlOpsUrls: g } : {},
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
          yn,
          {
            groups: T,
            viewRenderers: s,
            layoutConfig: a,
            methods: i,
            infoData: d,
            isCommonInfo: !!p,
            viewMode: S,
            ...g ? { sqlOpsUrls: g } : {},
            refid: x,
            ...c ? { Reports: c } : {},
            toast: u,
            handleAction: f,
            infoViewJson: e
          }
        );
      case "cards":
        return /* @__PURE__ */ o.jsx(
          qc,
          {
            groups: T,
            viewRenderers: s,
            methods: i,
            infoData: d,
            ...g ? { sqlOpsUrls: g } : {},
            refid: x,
            ...c ? { Reports: c } : {},
            toast: u,
            handleAction: f,
            infoViewJson: e
          }
        );
      default:
        return /* @__PURE__ */ o.jsx(
          yn,
          {
            groups: T,
            viewRenderers: s,
            layoutConfig: a,
            methods: i,
            infoData: d,
            isCommonInfo: !!p,
            viewMode: S,
            ...g ? { sqlOpsUrls: g } : {},
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
      vs,
      {
        commonInfo: p,
        infoData: d,
        hiddenFields: r
      }
    ),
    j(h)
  ] });
}
export {
  Qc as InfoView
};
