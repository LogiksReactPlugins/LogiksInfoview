import ne, { useState as re, useRef as pe, useEffect as le, useCallback as ae, useMemo as St, useLayoutEffect as gn, createContext as va, forwardRef as wa, createElement as ja, useContext as Ta } from "react";
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
    function e(p) {
      if (p == null) return null;
      if (typeof p == "function")
        return p.$$typeof === K ? null : p.displayName || p.name || null;
      if (typeof p == "string") return p;
      switch (p) {
        case x:
          return "Fragment";
        case m:
          return "Profiler";
        case w:
          return "StrictMode";
        case c:
          return "Suspense";
        case E:
          return "SuspenseList";
        case z:
          return "Activity";
      }
      if (typeof p == "object")
        switch (typeof p.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), p.$$typeof) {
          case v:
            return "Portal";
          case N:
            return (p.displayName || "Context") + ".Provider";
          case j:
            return (p._context.displayName || "Context") + ".Consumer";
          case _:
            var T = p.render;
            return p = p.displayName, p || (p = T.displayName || T.name || "", p = p !== "" ? "ForwardRef(" + p + ")" : "ForwardRef"), p;
          case F:
            return T = p.displayName || null, T !== null ? T : e(p.type) || "Memo";
          case L:
            T = p._payload, p = p._init;
            try {
              return e(p(T));
            } catch {
            }
        }
      return null;
    }
    function t(p) {
      return "" + p;
    }
    function r(p) {
      try {
        t(p);
        var T = !1;
      } catch {
        T = !0;
      }
      if (T) {
        T = console;
        var $ = T.error, A = typeof Symbol == "function" && Symbol.toStringTag && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return $.call(
          T,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          A
        ), t(p);
      }
    }
    function n(p) {
      if (p === x) return "<>";
      if (typeof p == "object" && p !== null && p.$$typeof === L)
        return "<...>";
      try {
        var T = e(p);
        return T ? "<" + T + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var p = R.A;
      return p === null ? null : p.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(p) {
      if (V.call(p, "key")) {
        var T = Object.getOwnPropertyDescriptor(p, "key").get;
        if (T && T.isReactWarning) return !1;
      }
      return p.key !== void 0;
    }
    function l(p, T) {
      function $() {
        M || (M = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          T
        ));
      }
      $.isReactWarning = !0, Object.defineProperty(p, "key", {
        get: $,
        configurable: !0
      });
    }
    function u() {
      var p = e(this.type);
      return Q[p] || (Q[p] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), p = this.props.ref, p !== void 0 ? p : null;
    }
    function h(p, T, $, A, U, q, oe, xe) {
      return $ = q.ref, p = {
        $$typeof: y,
        type: p,
        key: T,
        props: q,
        _owner: U
      }, ($ !== void 0 ? $ : null) !== null ? Object.defineProperty(p, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(p, "ref", { enumerable: !1, value: null }), p._store = {}, Object.defineProperty(p._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(p, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(p, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: oe
      }), Object.defineProperty(p, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: xe
      }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
    }
    function d(p, T, $, A, U, q, oe, xe) {
      var te = T.children;
      if (te !== void 0)
        if (A)
          if (D(te)) {
            for (A = 0; A < te.length; A++)
              g(te[A]);
            Object.freeze && Object.freeze(te);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(te);
      if (V.call(T, "key")) {
        te = e(p);
        var he = Object.keys(T).filter(function(Ie) {
          return Ie !== "key";
        });
        A = 0 < he.length ? "{key: someKey, " + he.join(": ..., ") + ": ...}" : "{key: someKey}", G[te + A] || (he = 0 < he.length ? "{" + he.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          A,
          te,
          he,
          te
        ), G[te + A] = !0);
      }
      if (te = null, $ !== void 0 && (r($), te = "" + $), i(T) && (r(T.key), te = "" + T.key), "key" in T) {
        $ = {};
        for (var $e in T)
          $e !== "key" && ($[$e] = T[$e]);
      } else $ = T;
      return te && l(
        $,
        typeof p == "function" ? p.displayName || p.name || "Unknown" : p
      ), h(
        p,
        te,
        q,
        U,
        a(),
        $,
        oe,
        xe
      );
    }
    function g(p) {
      typeof p == "object" && p !== null && p.$$typeof === y && p._store && (p._store.validated = 1);
    }
    var f = ne, y = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), j = Symbol.for("react.consumer"), N = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), z = Symbol.for("react.activity"), K = Symbol.for("react.client.reference"), R = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, D = Array.isArray, Y = console.createTask ? console.createTask : function() {
      return null;
    };
    f = {
      react_stack_bottom_frame: function(p) {
        return p();
      }
    };
    var M, Q = {}, S = f.react_stack_bottom_frame.bind(
      f,
      s
    )(), C = Y(n(s)), G = {};
    Je.Fragment = x, Je.jsx = function(p, T, $, A, U) {
      var q = 1e4 > R.recentlyCreatedOwnerStacks++;
      return d(
        p,
        T,
        $,
        !1,
        A,
        U,
        q ? Error("react-stack-top-frame") : S,
        q ? Y(n(p)) : C
      );
    }, Je.jsxs = function(p, T, $, A, U) {
      var q = 1e4 > R.recentlyCreatedOwnerStacks++;
      return d(
        p,
        T,
        $,
        !0,
        A,
        U,
        q ? Error("react-stack-top-frame") : S,
        q ? Y(n(p)) : C
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
  function e(m) {
    this._maxSize = m, this.clear();
  }
  e.prototype.clear = function() {
    this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
  }, e.prototype.get = function(m) {
    return this._values[m];
  }, e.prototype.set = function(m, j) {
    return this._size >= this._maxSize && this.clear(), m in this._values || this._size++, this._values[m] = j;
  };
  var t = /[^.^\]^[]+|(?=\[\]|\.\.)/g, r = /^\d+$/, n = /^\d/, a = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, s = /^\s*(['"]?)(.*?)(\1)\s*$/, i = 512, l = new e(i), u = new e(i), h = new e(i);
  Lt = {
    Cache: e,
    split: g,
    normalizePath: d,
    setter: function(m) {
      var j = d(m);
      return u.get(m) || u.set(m, function(_, c) {
        for (var E = 0, F = j.length, L = _; E < F - 1; ) {
          var z = j[E];
          if (z === "__proto__" || z === "constructor" || z === "prototype")
            return _;
          L = L[j[E++]];
        }
        L[j[E]] = c;
      });
    },
    getter: function(m, j) {
      var N = d(m);
      return h.get(m) || h.set(m, function(c) {
        for (var E = 0, F = N.length; E < F; )
          if (c != null || !j) c = c[N[E++]];
          else return;
        return c;
      });
    },
    join: function(m) {
      return m.reduce(function(j, N) {
        return j + (y(N) || r.test(N) ? "[" + N + "]" : (j ? "." : "") + N);
      }, "");
    },
    forEach: function(m, j, N) {
      f(Array.isArray(m) ? m : g(m), j, N);
    }
  };
  function d(m) {
    return l.get(m) || l.set(
      m,
      g(m).map(function(j) {
        return j.replace(s, "$2");
      })
    );
  }
  function g(m) {
    return m.match(t) || [""];
  }
  function f(m, j, N) {
    var _ = m.length, c, E, F, L;
    for (E = 0; E < _; E++)
      c = m[E], c && (w(c) && (c = '"' + c + '"'), L = y(c), F = !L && /^\d+$/.test(c), j.call(N, c, L, F, E, m));
  }
  function y(m) {
    return typeof m == "string" && m && ["'", '"'].indexOf(m.charAt(0)) !== -1;
  }
  function v(m) {
    return m.match(n) && !m.match(r);
  }
  function x(m) {
    return a.test(m);
  }
  function w(m) {
    return !y(m) && (v(m) || x(m));
  }
  return Lt;
}
var De = Na(), zt, Sr;
function $a() {
  if (Sr) return zt;
  Sr = 1;
  const e = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, t = (d) => d.match(e) || [], r = (d) => d[0].toUpperCase() + d.slice(1), n = (d, g) => t(d).join(g).toLowerCase(), a = (d) => t(d).reduce(
    (g, f) => `${g}${g ? f[0].toUpperCase() + f.slice(1).toLowerCase() : f.toLowerCase()}`,
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
    var i = a.length, l = new Array(i), u = {}, h = i, d = r(s), g = n(a);
    for (s.forEach(function(y) {
      if (!g.has(y[0]) || !g.has(y[1]))
        throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }); h--; )
      u[h] || f(a[h], h, /* @__PURE__ */ new Set());
    return l;
    function f(y, v, x) {
      if (x.has(y)) {
        var w;
        try {
          w = ", node was:" + JSON.stringify(y);
        } catch {
          w = "";
        }
        throw new Error("Cyclic dependency" + w);
      }
      if (!g.has(y))
        throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(y));
      if (!u[v]) {
        u[v] = !0;
        var m = d.get(y) || /* @__PURE__ */ new Set();
        if (m = Array.from(m), v = m.length) {
          x.add(y);
          do {
            var j = m[--v];
            f(j, g.get(j), x);
          } while (v);
          x.delete(y);
        }
        l[--i] = y;
      }
    }
  }
  function t(a) {
    for (var s = /* @__PURE__ */ new Set(), i = 0, l = a.length; i < l; i++) {
      var u = a[i];
      s.add(u[0]), s.add(u[1]);
    }
    return Array.from(s);
  }
  function r(a) {
    for (var s = /* @__PURE__ */ new Map(), i = 0, l = a.length; i < l; i++) {
      var u = a[i];
      s.has(u[0]) || s.set(u[0], /* @__PURE__ */ new Set()), s.has(u[1]) || s.set(u[1], /* @__PURE__ */ new Set()), s.get(u[0]).add(u[1]);
    }
    return s;
  }
  function n(a) {
    for (var s = /* @__PURE__ */ new Map(), i = 0, l = a.length; i < l; i++)
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
    } = r, i = typeof n == "function" ? n : (...l) => l.every((u) => u === n);
    return new _t(t, (l, u) => {
      var h;
      let d = i(...l) ? a : s;
      return (h = d?.(u)) != null ? h : u;
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
function qe(e) {
  function t({
    value: r,
    path: n = "",
    options: a,
    originalValue: s,
    schema: i
  }, l, u) {
    const {
      name: h,
      test: d,
      params: g,
      message: f,
      skipAbsent: y
    } = e;
    let {
      parent: v,
      context: x,
      abortEarly: w = i.spec.abortEarly,
      disableStackTrace: m = i.spec.disableStackTrace
    } = a;
    const j = {
      value: r,
      parent: v,
      context: x
    };
    function N(R = {}) {
      const V = Tn(Object.assign({
        value: r,
        originalValue: s,
        label: i.spec.label,
        path: R.path || n,
        spec: i.spec,
        disableStackTrace: R.disableStackTrace || m
      }, g, R.params), j), D = new ce(ce.formatError(R.message || f, V), r, V.path, R.type || h, V.disableStackTrace);
      return D.params = V, D;
    }
    const _ = w ? l : u;
    let c = {
      path: n,
      parent: v,
      type: h,
      from: a.from,
      createError: N,
      resolve(R) {
        return En(R, j);
      },
      options: a,
      originalValue: s,
      schema: i
    };
    const E = (R) => {
      ce.isError(R) ? _(R) : R ? u(null) : _(N());
    }, F = (R) => {
      ce.isError(R) ? _(R) : l(R);
    };
    if (y && _e(r))
      return E(!0);
    let z;
    try {
      var K;
      if (z = d.call(c, r, c), typeof ((K = z) == null ? void 0 : K.then) == "function") {
        if (a.sync)
          throw new Error(`Validation test of type: "${c.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(z).then(E, F);
      }
    } catch (R) {
      F(R);
      return;
    }
    E(z);
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
  return t ? (De.forEach(t, (l, u, h) => {
    let d = u ? l.slice(1, l.length - 1) : l;
    e = e.resolve({
      context: n,
      parent: a,
      value: r
    });
    let g = e.type === "tuple", f = h ? parseInt(d, 10) : 0;
    if (e.innerType || g) {
      if (g && !h) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${i}" must contain an index to the tuple element, e.g. "${i}[0]"`);
      if (r && f >= r.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${l}, in the path: ${t}. because there is no value at that index. `);
      a = r, r = r && r[f], e = g ? e.spec.types[f] : e.innerType;
    }
    if (!h) {
      if (!e.fields || !e.fields[d]) throw new Error(`The schema does not contain the path: ${t}. (failed at: ${i} which is a type: "${e.type}")`);
      a = r, r = r && r[d], e = e.fields[d];
    }
    s = d, i = u ? "[" + l + "]" : "." + l;
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
  if (Ot(e) || !e || typeof e != "object") return e;
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
      if (a && _e(s))
        return s;
      let i = Ae(t), l = Ae(s);
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
    } = r, u = t;
    l || (u = this._cast(u, Object.assign({
      assert: !1
    }, r)));
    let h = [];
    for (let d of Object.values(this.internalTests))
      d && h.push(d);
    this.runTests({
      path: s,
      value: u,
      originalValue: i,
      options: r,
      tests: h
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
      originalValue: l,
      path: u,
      options: h
    } = t, d = (x) => {
      a || (a = !0, r(x, i));
    }, g = (x) => {
      a || (a = !0, n(x, i));
    }, f = s.length, y = [];
    if (!f) return g([]);
    let v = {
      value: i,
      originalValue: l,
      path: u,
      options: h,
      schema: this
    };
    for (let x = 0; x < s.length; x++) {
      const w = s[x];
      w(v, d, function(j) {
        j && (Array.isArray(j) ? y.push(...j) : y.push(j)), --f <= 0 && g(y);
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
    const u = typeof l == "number";
    let h = n[l];
    const d = Object.assign({}, i, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: !0,
      parent: n,
      value: h,
      originalValue: s[l],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [u ? "index" : "key"]: l,
      path: u || l.includes(".") ? `${a || ""}[${u ? l : `"${l}"`}]` : (a ? `${a}.` : "") + t
    });
    return (g, f, y) => this.resolve(d)._validate(h, d, f, y);
  }
  validate(t, r) {
    var n;
    let a = this.resolve(Object.assign({}, r, {
      value: t
    })), s = (n = r?.disableStackTrace) != null ? n : a.spec.disableStackTrace;
    return new Promise((i, l) => a._validate(t, r, (u, h) => {
      ce.isError(u) && (u.value = h), l(u);
    }, (u, h) => {
      u.length ? l(new ce(u, h, void 0, void 0, s)) : i(h);
    }));
  }
  validateSync(t, r) {
    var n;
    let a = this.resolve(Object.assign({}, r, {
      value: t
    })), s, i = (n = r?.disableStackTrace) != null ? n : a.spec.disableStackTrace;
    return a._validate(t, Object.assign({}, r, {
      sync: !0
    }), (l, u) => {
      throw ce.isError(l) && (l.value = u), l;
    }, (l, u) => {
      if (l.length) throw new ce(l, t, void 0, void 0, i);
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
    let n = this.clone(), a = qe(r), s = r.exclusive || r.name && n.exclusiveTests[r.name] === !0;
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
  oneOf(t, r = je.oneOf) {
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
  notOneOf(t, r = je.notOneOf) {
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
      tests: r.tests.filter((u, h, d) => d.findIndex((g) => g.OPTIONS.name === u.OPTIONS.name) === h).map((u) => {
        const h = u.OPTIONS.params && t ? Tn(Object.assign({}, u.OPTIONS.params), t) : u.OPTIONS.params;
        return {
          name: u.OPTIONS.name,
          params: h
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
const qa = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
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
  const n = qa.exec(e);
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
  let r = [], n = /* @__PURE__ */ new Set(), a = new Set(t.map(([i, l]) => `${i}-${l}`));
  function s(i, l) {
    let u = De.split(i)[0];
    n.add(u), a.has(`${l}-${u}`) || r.push([l, u]);
  }
  for (const i of Object.keys(e)) {
    let l = e[i];
    n.add(i), Le.isRef(l) && l.isSibling ? s(l.path, i) : Ot(l) && "deps" in l && l.deps.forEach((u) => s(u, i));
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
    let s = this.fields, i = (n = r.stripUnknown) != null ? n : this.spec.noUnknown, l = [].concat(this._nodes, Object.keys(a).filter((g) => !this._nodes.includes(g))), u = {}, h = Object.assign({}, r, {
      parent: u,
      __validating: r.__validating || !1
    }), d = !1;
    for (const g of l) {
      let f = s[g], y = g in a, v = a[g];
      if (f) {
        let x;
        h.path = (r.path ? `${r.path}.` : "") + g, f = f.resolve({
          value: v,
          context: r.context,
          parent: u
        });
        let w = f instanceof me ? f.spec : void 0, m = w?.strict;
        if (w != null && w.strip) {
          d = d || g in a;
          continue;
        }
        x = !r.__validating || !m ? f.cast(v, h) : v, x !== void 0 && (u[g] = x);
      } else y && !i && (u[g] = v);
      (y !== g in u || u[g] !== v) && (d = !0);
    }
    return d ? u : a;
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
    }, ...s], r.__validating = !0, r.originalValue = i, super._validate(t, r, n, (u, h) => {
      if (!l || !Or(h)) {
        a(u, h);
        return;
      }
      i = i || h;
      let d = [];
      for (let g of this._nodes) {
        let f = this.fields[g];
        !f || Le.isRef(f) || d.push(f.asNestedTest({
          options: r,
          key: g,
          parent: h,
          parentPath: r.path,
          originalParent: i
        }));
      }
      this.runTests({
        tests: d,
        value: h,
        originalValue: i,
        options: r
      }, n, (g) => {
        a(g.sort(this._sortErrors).concat(u), h);
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
      let l = t;
      (a = l) != null && a.value && (l = Object.assign({}, l, {
        parent: l.value,
        value: l.value[s]
      })), n.fields[s] = i.describe(l);
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
    const s = n.map((i, l) => {
      const u = this.innerType.cast(i, Object.assign({}, r, {
        path: `${r.path || ""}[${l}]`,
        parent: n,
        originalValue: i,
        value: i,
        index: l
      }));
      return u !== i && (a = !0), u;
    });
    return a ? s : n;
  }
  _validate(t, r = {}, n, a) {
    var s;
    let i = this.innerType, l = (s = r.recursive) != null ? s : this.spec.recursive;
    r.originalValue != null && r.originalValue, super._validate(t, r, n, (u, h) => {
      var d;
      if (!l || !i || !this._typeCheck(h)) {
        a(u, h);
        return;
      }
      let g = new Array(h.length);
      for (let y = 0; y < h.length; y++) {
        var f;
        g[y] = i.asNestedTest({
          options: r,
          index: y,
          parent: h,
          parentPath: r.path,
          originalParent: (f = r.originalValue) != null ? f : t
        });
      }
      this.runTests({
        value: h,
        tests: g,
        originalValue: (d = r.originalValue) != null ? d : t,
        options: r
      }, n, (y) => a(y.concat(u), h));
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
    return r.forEach((l) => {
      const u = l[e], h = l[t];
      u != null && h != null && (i[String(u)] = String(h));
    }), i;
  }
  const s = {};
  return r.forEach((i) => {
    const l = i[a] ?? "Others", u = i[e], h = i[t];
    u == null || h == null || (s[l] || (s[l] = {}), s[l][String(u)] = String(h));
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
    let l;
    a.type === "file" ? l = a.multiple ? er().of(Xt()) : Xt() : a.multiple === !0 || a.type === "checkbox" || a.type === "tags" ? l = er().of(tt()) : a.type === "email" ? l = tt().email("Invalid email") : a.type === "number" ? l = Tt().typeError("Must be a number") : a.type === "json" ? l = tt().test("json", "Invalid JSON", (u) => {
      if (!u) return !0;
      try {
        return JSON.parse(u), !0;
      } catch {
        return !1;
      }
    }) : l = tt(), a.required && (l = l.required(
      a.error_message || `${a.label || s} is required`
    )), a?.validate?.regex && typeof a.validate.regex == "string" && (l = l.matches(
      new RegExp(a?.validate?.regex),
      a?.error_message || "Invalid input format"
    )), a?.validate && Object.entries(a.validate).forEach(([u, h]) => {
      switch (u) {
        case "email":
          h && (l = l.email("Invalid email format"));
          break;
        case "mobile":
          l = l.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          l = l.matches(
            new RegExp(h),
            `Must match pattern: ${h}`
          );
          break;
        case "date":
          l = lr().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((d, g) => {
            if (typeof g == "string") {
              const f = g.replace(/-/g, "/"), [y, v, x] = f.split("/");
              if (y && v && x)
                return /* @__PURE__ */ new Date(`${x}-${v}-${y}`);
            }
            return d;
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
          l = Tt().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          l = Tt().typeError("Must be a decimal").transform((d, g) => {
            if (g == null || g === "") return;
            const f = Number(g);
            if (isNaN(f)) return d;
            if (typeof d == "number" && !isNaN(d)) {
              const y = Number(d);
              return Number.isInteger(y) ? Number(f.toFixed(y)) : f;
            }
            return f;
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
            (d) => d && d.toUpperCase()
          );
          break;
        case "lower":
          l = l.transform(
            (d) => d && d.toLowerCase()
          );
          break;
        case "length-min": {
          const d = Number(h);
          isNaN(d) || (l = l.min(d, `Minimum length is ${d}`));
          break;
        }
        case "length-max": {
          const d = Number(h);
          isNaN(d) || (l = l.max(d, `Maximum length is ${d}`));
          break;
        }
      }
    }), r[s] = l;
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
const be = (e) => {
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
    let l;
    if (!i.queryid) {
      const f = fe(i.where ?? {}, { refid: t });
      l = {
        ...i,
        table: i.table,
        cols: i.columns,
        where: f
      };
    }
    const { data: u } = await He(
      r,
      l,
      i.queryid,
      t
    ), h = Array.isArray(u?.data?.data) ? u.data.data : Array.isArray(u?.data) ? u.data : u, d = Array.isArray(h) ? h.map(be) : [], g = ve(
      e.valueKey ?? "value",
      e.labelKey ?? "title",
      d,
      e.groupKey
    );
    n(s.target, g);
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
  setFieldOptions: l
}) {
  const u = e?.name, h = `
    text-sm text-gray-600 break-words
  `, d = `
    block text-sm font-semibold  transition-all duration-300 text-gray-700 capitalize
  `, [g, f] = re(
    i ?? e.options ?? {}
  ), y = ne.useRef(!1);
  ne.useEffect(() => {
    i && f(i);
  }, [i]);
  const v = ne.useMemo(
    () => bs(g),
    [g]
  );
  ne.useEffect(() => {
    let _ = !0, c = e.valueKey ?? "value", E = e.labelKey ?? "title";
    return (async () => {
      if (e?.options) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const V = Object.values(e.options);
          if (V.length && typeof V[0] == "string") {
            f(e.options);
            return;
          }
        }
        const K = (Array.isArray(e.options) ? e.options : [e.options]).map(be), R = ve(
          c,
          E,
          K,
          e.groupKey
          // auto-uses `category` if present
        );
        f(R);
        return;
      }
      const L = e?.source ?? {};
      if (e.type === "dataMethod") {
        const z = e.method, K = z ? r[z] : void 0;
        if (K)
          try {
            const R = await Promise.resolve(K()), V = Array.isArray(R?.data?.data) ? R.data.data : Array.isArray(R?.data) ? R.data : R, D = Array.isArray(V) ? V.map(be) : [], Y = ve(c, E, D, e.groupKey);
            _ && f(Y);
          } catch (R) {
            console.error("Method execution failed:", R), _ && f({});
          }
        else
          _ && f({});
      }
      if (L.type === "api" && L.url)
        try {
          const z = await X({
            method: L.method || "GET",
            url: L.url,
            data: L.body ?? {},
            params: L.params ?? {},
            headers: L.headers ?? {}
          }), K = Array.isArray(z?.data?.data) ? z.data.data : Array.isArray(z?.data) ? z.data : z, R = Array.isArray(K) ? K.map(be) : [], V = ve(c, E, R, e.groupKey);
          _ && f(V);
        } catch (z) {
          console.error("API execution failed:", z), _ && f({});
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
          const K = await He(n, z, e?.queryid, void 0, s), R = Array.isArray(K?.data?.data) ? K.data.data : Array.isArray(K?.data) ? K.data : K, V = Array.isArray(R) ? R.map(be) : [], D = ve(c, E, V, e.groupKey);
          _ && f(D);
        } catch (z) {
          console.error("API fetch failed:", z);
        }
      }
    })(), () => {
      _ = !1;
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
  ne.useEffect(() => {
    y.current || !l || !x || (y.current = !0, xs({
      field: e,
      value: x,
      sqlOpsUrls: n,
      setFieldOptions: l
    }));
  }, [x, n, l]);
  const w = typeof u == "string" ? t?.[u] : void 0, m = typeof w == "string" ? e.type === "date" ? w.split("T")[0] : e.type === "time" ? w.includes("T") ? w.slice(11, 16) : w.slice(0, 5) : Cr(w, v) : Cr(w, v), j = typeof u == "string" && (u.toLowerCase().includes("avatar") || u.toLowerCase().includes("logo")), N = m == null ? "" : typeof m == "string" || typeof m == "number" ? m : JSON.stringify(m);
  return /* @__PURE__ */ o.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ o.jsx("label", { className: d, children: e?.label }),
    /* @__PURE__ */ o.jsx("div", { className: "relative", children: j ? /* @__PURE__ */ o.jsx(
      "img",
      {
        src: String(m),
        alt: "avatar",
        className: "w-16 h-16 rounded-full object-cover border",
        onError: (_) => {
          const c = _.currentTarget;
          c.onerror = null, c.src = Dn;
        }
      }
    ) : /* @__PURE__ */ o.jsx("p", { className: h, children: N }) })
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
  const [i, l] = ne.useState(null);
  return ne.useEffect(() => {
    let u = !1;
    return (async () => {
      const d = e?.config;
      if (!d?.type) {
        u || l(null);
        return;
      }
      if (d.type === "method") {
        const g = d.method, f = g ? t[g] : void 0;
        if (f)
          try {
            const y = await Promise.resolve(f());
            u || l(y || null);
          } catch (y) {
            console.error("Method execution failed:", y), u || l(null);
          }
        else
          u || l(null);
      }
      if (d.type === "api")
        try {
          const g = await X({
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
          u || l(g.data || null);
        } catch (g) {
          console.error("API fetch failed:", g), u || l(null);
        }
      if (d.type === "sql" && a && a != "0" || d?.dbopsid) {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let g = !1, f;
          d?.dbopsid && (g = !0, f = d?.dbopsid);
          const y = await X({
            method: "GET",
            url: n.baseURL + n.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          });
          if (!g) {
            let w = {
              ...d
            };
            d.where && (w = {
              ...d,
              where: fe(d.where, {
                refid: a
              })
            }), f = (await X({
              method: "POST",
              url: n.baseURL + n.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: w,
                fields: Nt(d.fields, n.operation),
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
              refid: f,
              datahash: y.data.refhash
            },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }), x = Pn(v);
          u || l(x);
        } catch (g) {
          console.error("API fetch failed:", g);
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
  ]), /* @__PURE__ */ o.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ o.jsx("div", { className: "grid grid-cols-12 gap-2", children: i ? Object.keys(i).map((u, h) => /* @__PURE__ */ o.jsx(
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
    `field-${h}`
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
var qs = Array.prototype, Ys = qs.splice;
function Hs(e) {
  var t = this.__data__, r = Ft(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Ys.call(t, r, 1), --this.size, !0;
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
    var l = t[s], u = void 0;
    u === void 0 && (u = e[l]), a ? Gn(r, l, u) : Un(r, l, u);
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
var qn = typeof exports == "object" && exports && !exports.nodeType && exports, Lr = qn && typeof module == "object" && module && !module.nodeType && module, qi = Lr && Lr.exports === qn, zr = qi ? Te.Buffer : void 0, Yi = zr ? zr.isBuffer : void 0, Yn = Yi || Ki, Hi = 9007199254740991, Wi = /^(?:0|[1-9]\d*)$/;
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
  var r = ht(e), n = !r && Ui(e), a = !r && !n && Yn(e), s = !r && !n && !a && So(e), i = r || n || a || s, l = i ? zi(e.length, String) : [], u = l.length;
  for (var h in e)
    (t || Ao.call(e, h)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
    Zi(h, u))) && l.push(h);
  return l;
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
function qo(e, t) {
  return It(e, ra(e), t);
}
function na(e, t, r) {
  var n = t(e);
  return ht(e) ? n : ta(n, r(e));
}
function Yo(e) {
  return na(e, hr, mr);
}
function Ho(e) {
  return na(e, pr, ra);
}
var nr = Ge(Te, "DataView"), ar = Ge(Te, "Promise"), sr = Ge(Te, "Set"), ir = Ge(Te, "WeakMap"), qr = "[object Map]", Wo = "[object Object]", Yr = "[object Promise]", Hr = "[object Set]", Wr = "[object WeakMap]", Zr = "[object DataView]", Zo = Be(nr), Qo = Be(it), Xo = Be(ar), Jo = Be(sr), el = Be(ir), Se = ze;
(nr && Se(new nr(new ArrayBuffer(1))) != Zr || it && Se(new it()) != qr || ar && Se(ar.resolve()) != Yr || sr && Se(new sr()) != Hr || ir && Se(new ir()) != Wr) && (Se = function(e) {
  var t = ze(e), r = t == Wo ? e.constructor : void 0, n = r ? Be(r) : "";
  if (n)
    switch (n) {
      case Zo:
        return Zr;
      case Qo:
        return qr;
      case Xo:
        return Yr;
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
var rn = Ze && Ze.isSet, Dl = rn ? dr(rn) : Pl, Ml = 1, kl = 2, Ll = 4, aa = "[object Arguments]", zl = "[object Array]", Vl = "[object Boolean]", Bl = "[object Date]", Gl = "[object Error]", sa = "[object Function]", Ul = "[object GeneratorFunction]", Kl = "[object Map]", ql = "[object Number]", ia = "[object Object]", Yl = "[object RegExp]", Hl = "[object Set]", Wl = "[object String]", Zl = "[object Symbol]", Ql = "[object WeakMap]", Xl = "[object ArrayBuffer]", Jl = "[object DataView]", ec = "[object Float32Array]", tc = "[object Float64Array]", rc = "[object Int8Array]", nc = "[object Int16Array]", ac = "[object Int32Array]", sc = "[object Uint8Array]", ic = "[object Uint8ClampedArray]", oc = "[object Uint16Array]", lc = "[object Uint32Array]", J = {};
J[aa] = J[zl] = J[Xl] = J[Jl] = J[Vl] = J[Bl] = J[ec] = J[tc] = J[rc] = J[nc] = J[ac] = J[Kl] = J[ql] = J[ia] = J[Yl] = J[Hl] = J[Wl] = J[Zl] = J[sc] = J[ic] = J[oc] = J[lc] = !0;
J[Gl] = J[sa] = J[Ql] = !1;
function nt(e, t, r, n, a, s) {
  var i, l = t & Ml, u = t & kl, h = t & Ll;
  if (i !== void 0)
    return i;
  if (!ft(e))
    return e;
  var d = ht(e);
  if (d) {
    if (i = nl(e), !l)
      return Jn(e, i);
  } else {
    var g = Se(e), f = g == sa || g == Ul;
    if (Yn(e))
      return zo(e, l);
    if (g == ia || g == aa || f && !a) {
      if (i = u || f ? {} : Ol(e), !l)
        return u ? qo(e, ko(i, e)) : Uo(e, Io(i, e));
    } else {
      if (!J[g])
        return a ? e : {};
      i = Nl(e, g, l);
    }
  }
  s || (s = new Qe());
  var y = s.get(e);
  if (y)
    return y;
  s.set(e, i), Dl(e) ? e.forEach(function(w) {
    i.add(nt(w, t, r, w, e, s));
  }) : Il(e) && e.forEach(function(w, m) {
    i.set(m, nt(w, t, r, m, e, s));
  });
  var v = h ? u ? Ho : Yo : u ? pr : hr, x = d ? void 0 : v(e);
  return Mi(x || e, function(w, m) {
    x && (m = w, w = e[m]), Un(i, m, nt(w, t, r, m, e, s));
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
      var l = e(s), u = e(i), h, d, g;
      if (l && u) {
        if (d = s.length, d != i.length) return !1;
        for (h = d; h-- !== 0; )
          if (!a(s[h], i[h])) return !1;
        return !0;
      }
      if (l != u) return !1;
      var f = s instanceof Date, y = i instanceof Date;
      if (f != y) return !1;
      if (f && y) return s.getTime() == i.getTime();
      var v = s instanceof RegExp, x = i instanceof RegExp;
      if (v != x) return !1;
      if (v && x) return s.toString() == i.toString();
      var w = t(s);
      if (d = w.length, d !== t(i).length)
        return !1;
      for (h = d; h-- !== 0; )
        if (!r.call(i, w[h])) return !1;
      if (n && s instanceof Element && i instanceof Element)
        return s === i;
      for (h = d; h-- !== 0; )
        if (g = w[h], !(g === "_owner" && s.$$typeof) && !a(s[g], i[g]))
          return !1;
      return !0;
    }
    return s !== s && i !== i;
  }
  return Ut = function(i, l) {
    try {
      return a(i, l);
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
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, m = e ? Symbol.for("react.responder") : 60118, j = e ? Symbol.for("react.scope") : 60119;
  function N(c) {
    if (typeof c == "object" && c !== null) {
      var E = c.$$typeof;
      switch (E) {
        case t:
          switch (c = c.type, c) {
            case u:
            case h:
            case n:
            case s:
            case a:
            case g:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case l:
                case d:
                case v:
                case y:
                case i:
                  return c;
                default:
                  return E;
              }
          }
        case r:
          return E;
      }
    }
  }
  function _(c) {
    return N(c) === h;
  }
  return W.AsyncMode = u, W.ConcurrentMode = h, W.ContextConsumer = l, W.ContextProvider = i, W.Element = t, W.ForwardRef = d, W.Fragment = n, W.Lazy = v, W.Memo = y, W.Portal = r, W.Profiler = s, W.StrictMode = a, W.Suspense = g, W.isAsyncMode = function(c) {
    return _(c) || N(c) === u;
  }, W.isConcurrentMode = _, W.isContextConsumer = function(c) {
    return N(c) === l;
  }, W.isContextProvider = function(c) {
    return N(c) === i;
  }, W.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === t;
  }, W.isForwardRef = function(c) {
    return N(c) === d;
  }, W.isFragment = function(c) {
    return N(c) === n;
  }, W.isLazy = function(c) {
    return N(c) === v;
  }, W.isMemo = function(c) {
    return N(c) === y;
  }, W.isPortal = function(c) {
    return N(c) === r;
  }, W.isProfiler = function(c) {
    return N(c) === s;
  }, W.isStrictMode = function(c) {
    return N(c) === a;
  }, W.isSuspense = function(c) {
    return N(c) === g;
  }, W.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === n || c === h || c === s || c === a || c === g || c === f || typeof c == "object" && c !== null && (c.$$typeof === v || c.$$typeof === y || c.$$typeof === i || c.$$typeof === l || c.$$typeof === d || c.$$typeof === w || c.$$typeof === m || c.$$typeof === j || c.$$typeof === x);
  }, W.typeOf = N, W;
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
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, m = e ? Symbol.for("react.responder") : 60118, j = e ? Symbol.for("react.scope") : 60119;
    function N(P) {
      return typeof P == "string" || typeof P == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      P === n || P === h || P === s || P === a || P === g || P === f || typeof P == "object" && P !== null && (P.$$typeof === v || P.$$typeof === y || P.$$typeof === i || P.$$typeof === l || P.$$typeof === d || P.$$typeof === w || P.$$typeof === m || P.$$typeof === j || P.$$typeof === x);
    }
    function _(P) {
      if (typeof P == "object" && P !== null) {
        var Ue = P.$$typeof;
        switch (Ue) {
          case t:
            var Ke = P.type;
            switch (Ke) {
              case u:
              case h:
              case n:
              case s:
              case a:
              case g:
                return Ke;
              default:
                var pt = Ke && Ke.$$typeof;
                switch (pt) {
                  case l:
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
    var c = u, E = h, F = l, L = i, z = t, K = d, R = n, V = v, D = y, Y = r, M = s, Q = a, S = g, C = !1;
    function G(P) {
      return C || (C = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), p(P) || _(P) === u;
    }
    function p(P) {
      return _(P) === h;
    }
    function T(P) {
      return _(P) === l;
    }
    function $(P) {
      return _(P) === i;
    }
    function A(P) {
      return typeof P == "object" && P !== null && P.$$typeof === t;
    }
    function U(P) {
      return _(P) === d;
    }
    function q(P) {
      return _(P) === n;
    }
    function oe(P) {
      return _(P) === v;
    }
    function xe(P) {
      return _(P) === y;
    }
    function te(P) {
      return _(P) === r;
    }
    function he(P) {
      return _(P) === s;
    }
    function $e(P) {
      return _(P) === a;
    }
    function Ie(P) {
      return _(P) === g;
    }
    Z.AsyncMode = c, Z.ConcurrentMode = E, Z.ContextConsumer = F, Z.ContextProvider = L, Z.Element = z, Z.ForwardRef = K, Z.Fragment = R, Z.Lazy = V, Z.Memo = D, Z.Portal = Y, Z.Profiler = M, Z.StrictMode = Q, Z.Suspense = S, Z.isAsyncMode = G, Z.isConcurrentMode = p, Z.isContextConsumer = T, Z.isContextProvider = $, Z.isElement = A, Z.isForwardRef = U, Z.isFragment = q, Z.isLazy = oe, Z.isMemo = xe, Z.isPortal = te, Z.isProfiler = he, Z.isStrictMode = $e, Z.isSuspense = Ie, Z.isValidElementType = N, Z.typeOf = _;
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
  var l = Object.defineProperty, u = Object.getOwnPropertyNames, h = Object.getOwnPropertySymbols, d = Object.getOwnPropertyDescriptor, g = Object.getPrototypeOf, f = Object.prototype;
  function y(v, x, w) {
    if (typeof x != "string") {
      if (f) {
        var m = g(x);
        m && m !== f && y(v, m, w);
      }
      var j = u(x);
      h && (j = j.concat(h(x)));
      for (var N = i(v), _ = i(x), c = 0; c < j.length; ++c) {
        var E = j[c];
        if (!r[E] && !(w && w[E]) && !(_ && _[E]) && !(N && N[E])) {
          var F = d(x, E);
          try {
            l(v, E, F);
          } catch {
          }
        }
      }
    }
    return v;
  }
  return Kt = y, Kt;
}
Ac();
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
}, qt = function(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}, Yt = function(t) {
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
    var l = i[s], u = de(e, i.slice(0, s + 1));
    if (u && (Pt(u) || Array.isArray(u)))
      a = a[l] = an(u);
    else {
      var h = i[s + 1];
      a = a[l] = $c(h) && Number(h) >= 0 ? [] : {};
    }
  }
  return (s === 0 ? e : a)[i[s]] === r ? e : (r === void 0 ? delete a[i[s]] : a[i[s]] = r, s === 0 && r === void 0 && delete n[i[s]], n);
}
function da(e, t, r, n) {
  r === void 0 && (r = /* @__PURE__ */ new WeakMap()), n === void 0 && (n = {});
  for (var a = 0, s = Object.keys(e); a < s.length; a++) {
    var i = s[a], l = e[i];
    Pt(l) ? r.get(l) || (r.set(l, !0), n[i] = Array.isArray(l) ? [] : {}, da(l, t, r, n[i])) : n[i] = t;
  }
  return n;
}
function Fc(e, t) {
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
function Cc(e) {
  var t = e.validateOnChange, r = t === void 0 ? !0 : t, n = e.validateOnBlur, a = n === void 0 ? !0 : n, s = e.validateOnMount, i = s === void 0 ? !1 : s, l = e.isInitialValid, u = e.enableReinitialize, h = u === void 0 ? !1 : u, d = e.onSubmit, g = ua(e, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]), f = ie({
    validateOnChange: r,
    validateOnBlur: a,
    validateOnMount: i,
    onSubmit: d
  }, g), y = pe(f.initialValues), v = pe(f.initialErrors || Re), x = pe(f.initialTouched || vt), w = pe(f.initialStatus), m = pe(!1), j = pe({});
  process.env.NODE_ENV !== "production" && le(function() {
    typeof l > "u" || (process.env.NODE_ENV !== "production" ? We(!1, "isInitialValid has been deprecated and will be removed in future versions of Formik. Please use initialErrors or validateOnMount instead.") : We());
  }, []), le(function() {
    return m.current = !0, function() {
      m.current = !1;
    };
  }, []);
  var N = re(0), _ = N[1], c = pe({
    values: bt(f.initialValues),
    errors: bt(f.initialErrors) || Re,
    touched: bt(f.initialTouched) || vt,
    status: bt(f.initialStatus),
    isSubmitting: !1,
    isValidating: !1,
    submitCount: 0
  }), E = c.current, F = ae(function(b) {
    var O = c.current;
    c.current = Fc(O, b), O !== c.current && _(function(I) {
      return I + 1;
    });
  }, []), L = ae(function(b, O) {
    return new Promise(function(I, k) {
      var B = f.validate(b, O);
      B == null ? I(Re) : Yt(B) ? B.then(function(H) {
        I(H || Re);
      }, function(H) {
        process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validate />", H), k(H);
      }) : I(B);
    });
  }, [f.validate]), z = ae(function(b, O) {
    var I = f.validationSchema, k = ge(I) ? I(O) : I, B = O && k.validateAt ? k.validateAt(O, b) : Rc(b, k);
    return new Promise(function(H, se) {
      B.then(function() {
        H(Re);
      }, function(we) {
        we.name === "ValidationError" ? H(Ic(we)) : (process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validationSchema />", we), se(we));
      });
    });
  }, [f.validationSchema]), K = ae(function(b, O) {
    return new Promise(function(I) {
      return I(j.current[b].validate(O));
    });
  }, []), R = ae(function(b) {
    var O = Object.keys(j.current).filter(function(k) {
      return ge(j.current[k].validate);
    }), I = O.length > 0 ? O.map(function(k) {
      return K(k, de(b, k));
    }) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
    return Promise.all(I).then(function(k) {
      return k.reduce(function(B, H, se) {
        return H === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || H && (B = Me(B, O[se], H)), B;
      }, {});
    });
  }, [K]), V = ae(function(b) {
    return Promise.all([R(b), f.validationSchema ? z(b) : {}, f.validate ? L(b) : {}]).then(function(O) {
      var I = O[0], k = O[1], B = O[2], H = rr.all([I, k, B], {
        arrayMerge: Pc
      });
      return H;
    });
  }, [f.validate, f.validationSchema, R, L, z]), D = ye(function(b) {
    return b === void 0 && (b = E.values), F({
      type: "SET_ISVALIDATING",
      payload: !0
    }), V(b).then(function(O) {
      return m.current && (F({
        type: "SET_ISVALIDATING",
        payload: !1
      }), F({
        type: "SET_ERRORS",
        payload: O
      })), O;
    });
  });
  le(function() {
    i && m.current === !0 && Pe(y.current, f.initialValues) && D(y.current);
  }, [i, D]);
  var Y = ae(function(b) {
    var O = b && b.values ? b.values : y.current, I = b && b.errors ? b.errors : v.current ? v.current : f.initialErrors || {}, k = b && b.touched ? b.touched : x.current ? x.current : f.initialTouched || {}, B = b && b.status ? b.status : w.current ? w.current : f.initialStatus;
    y.current = O, v.current = I, x.current = k, w.current = B;
    var H = function() {
      F({
        type: "RESET_FORM",
        payload: {
          isSubmitting: !!b && !!b.isSubmitting,
          errors: I,
          touched: k,
          status: B,
          values: O,
          isValidating: !!b && !!b.isValidating,
          submitCount: b && b.submitCount && typeof b.submitCount == "number" ? b.submitCount : 0
        }
      });
    };
    if (f.onReset) {
      var se = f.onReset(E.values, Ue);
      Yt(se) ? se.then(H) : H();
    } else
      H();
  }, [f.initialErrors, f.initialStatus, f.initialTouched, f.onReset]);
  le(function() {
    m.current === !0 && !Pe(y.current, f.initialValues) && h && (y.current = f.initialValues, Y(), i && D(y.current));
  }, [h, f.initialValues, Y, i, D]), le(function() {
    h && m.current === !0 && !Pe(v.current, f.initialErrors) && (v.current = f.initialErrors || Re, F({
      type: "SET_ERRORS",
      payload: f.initialErrors || Re
    }));
  }, [h, f.initialErrors]), le(function() {
    h && m.current === !0 && !Pe(x.current, f.initialTouched) && (x.current = f.initialTouched || vt, F({
      type: "SET_TOUCHED",
      payload: f.initialTouched || vt
    }));
  }, [h, f.initialTouched]), le(function() {
    h && m.current === !0 && !Pe(w.current, f.initialStatus) && (w.current = f.initialStatus, F({
      type: "SET_STATUS",
      payload: f.initialStatus
    }));
  }, [h, f.initialStatus, f.initialTouched]);
  var M = ye(function(b) {
    if (j.current[b] && ge(j.current[b].validate)) {
      var O = de(E.values, b), I = j.current[b].validate(O);
      return Yt(I) ? (F({
        type: "SET_ISVALIDATING",
        payload: !0
      }), I.then(function(k) {
        return k;
      }).then(function(k) {
        F({
          type: "SET_FIELD_ERROR",
          payload: {
            field: b,
            value: k
          }
        }), F({
          type: "SET_ISVALIDATING",
          payload: !1
        });
      })) : (F({
        type: "SET_FIELD_ERROR",
        payload: {
          field: b,
          value: I
        }
      }), Promise.resolve(I));
    } else if (f.validationSchema)
      return F({
        type: "SET_ISVALIDATING",
        payload: !0
      }), z(E.values, b).then(function(k) {
        return k;
      }).then(function(k) {
        F({
          type: "SET_FIELD_ERROR",
          payload: {
            field: b,
            value: de(k, b)
          }
        }), F({
          type: "SET_ISVALIDATING",
          payload: !1
        });
      });
    return Promise.resolve();
  }), Q = ae(function(b, O) {
    var I = O.validate;
    j.current[b] = {
      validate: I
    };
  }, []), S = ae(function(b) {
    delete j.current[b];
  }, []), C = ye(function(b, O) {
    F({
      type: "SET_TOUCHED",
      payload: b
    });
    var I = O === void 0 ? a : O;
    return I ? D(E.values) : Promise.resolve();
  }), G = ae(function(b) {
    F({
      type: "SET_ERRORS",
      payload: b
    });
  }, []), p = ye(function(b, O) {
    var I = ge(b) ? b(E.values) : b;
    F({
      type: "SET_VALUES",
      payload: I
    });
    var k = O === void 0 ? r : O;
    return k ? D(I) : Promise.resolve();
  }), T = ae(function(b, O) {
    F({
      type: "SET_FIELD_ERROR",
      payload: {
        field: b,
        value: O
      }
    });
  }, []), $ = ye(function(b, O, I) {
    var k = ge(O) ? O(de(E.values, b)) : O;
    F({
      type: "SET_FIELD_VALUE",
      payload: {
        field: b,
        value: k
      }
    });
    var B = I === void 0 ? r : I;
    return B ? D(Me(E.values, b, k)) : Promise.resolve();
  }), A = ae(function(b, O) {
    var I = O, k = b, B;
    if (!qt(b)) {
      b.persist && b.persist();
      var H = b.target ? b.target : b.currentTarget, se = H.type, we = H.name, Mt = H.id, kt = H.value, ga = H.checked, ba = H.outerHTML, vr = H.options, xa = H.multiple;
      I = O || we || Mt, !I && process.env.NODE_ENV !== "production" && fn({
        htmlContent: ba,
        documentationAnchorLink: "handlechange-e-reactchangeeventany--void",
        handlerName: "handleChange"
      }), k = /number|range/.test(se) ? (B = parseFloat(kt), isNaN(B) ? "" : B) : /checkbox/.test(se) ? Mc(de(E.values, I), ga, kt) : vr && xa ? Dc(vr) : kt;
    }
    I && $(I, k);
  }, [$, E.values]), U = ye(function(b) {
    if (qt(b))
      return function(O) {
        return A(O, b);
      };
    A(b);
  }), q = ye(function(b, O, I) {
    O === void 0 && (O = !0), F({
      type: "SET_FIELD_TOUCHED",
      payload: {
        field: b,
        value: O
      }
    });
    var k = I === void 0 ? a : I;
    return k ? D(E.values) : Promise.resolve();
  }), oe = ae(function(b, O) {
    b.persist && b.persist();
    var I = b.target, k = I.name, B = I.id, H = I.outerHTML, se = O || k || B;
    !se && process.env.NODE_ENV !== "production" && fn({
      htmlContent: H,
      documentationAnchorLink: "handleblur-e-any--void",
      handlerName: "handleBlur"
    }), q(se, !0);
  }, [q]), xe = ye(function(b) {
    if (qt(b))
      return function(O) {
        return oe(O, b);
      };
    oe(b);
  }), te = ae(function(b) {
    ge(b) ? F({
      type: "SET_FORMIK_STATE",
      payload: b
    }) : F({
      type: "SET_FORMIK_STATE",
      payload: function() {
        return b;
      }
    });
  }, []), he = ae(function(b) {
    F({
      type: "SET_STATUS",
      payload: b
    });
  }, []), $e = ae(function(b) {
    F({
      type: "SET_ISSUBMITTING",
      payload: b
    });
  }, []), Ie = ye(function() {
    return F({
      type: "SUBMIT_ATTEMPT"
    }), D().then(function(b) {
      var O = b instanceof Error, I = !O && Object.keys(b).length === 0;
      if (I) {
        var k;
        try {
          if (k = Ke(), k === void 0)
            return;
        } catch (B) {
          throw B;
        }
        return Promise.resolve(k).then(function(B) {
          return m.current && F({
            type: "SUBMIT_SUCCESS"
          }), B;
        }).catch(function(B) {
          if (m.current)
            throw F({
              type: "SUBMIT_FAILURE"
            }), B;
        });
      } else if (m.current && (F({
        type: "SUBMIT_FAILURE"
      }), O))
        throw b;
    });
  }), P = ye(function(b) {
    if (b && b.preventDefault && ge(b.preventDefault) && b.preventDefault(), b && b.stopPropagation && ge(b.stopPropagation) && b.stopPropagation(), process.env.NODE_ENV !== "production" && typeof document < "u") {
      var O = Oc();
      O !== null && O instanceof HTMLButtonElement && (O.attributes && O.attributes.getNamedItem("type") || (process.env.NODE_ENV !== "production" ? We(!1, 'You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type="submit"`. If this is not a submit button, please add `type="button"`.') : We()));
    }
    Ie().catch(function(I) {
      console.warn("Warning: An unhandled error was caught from submitForm()", I);
    });
  }), Ue = {
    resetForm: Y,
    validateForm: D,
    validateField: M,
    setErrors: G,
    setFieldError: T,
    setFieldTouched: q,
    setFieldValue: $,
    setStatus: he,
    setSubmitting: $e,
    setTouched: C,
    setValues: p,
    setFormikState: te,
    submitForm: Ie
  }, Ke = ye(function() {
    return d(E.values, Ue);
  }), pt = ye(function(b) {
    b && b.preventDefault && ge(b.preventDefault) && b.preventDefault(), b && b.stopPropagation && ge(b.stopPropagation) && b.stopPropagation(), Y();
  }), fa = ae(function(b) {
    return {
      value: de(E.values, b),
      error: de(E.errors, b),
      touched: !!de(E.touched, b),
      initialValue: de(y.current, b),
      initialTouched: !!de(x.current, b),
      initialError: de(v.current, b)
    };
  }, [E.errors, E.touched, E.values]), ha = ae(function(b) {
    return {
      setValue: function(I, k) {
        return $(b, I, k);
      },
      setTouched: function(I, k) {
        return q(b, I, k);
      },
      setError: function(I) {
        return T(b, I);
      }
    };
  }, [$, q, T]), pa = ae(function(b) {
    var O = Pt(b), I = O ? b.name : b, k = de(E.values, I), B = {
      name: I,
      value: k,
      onChange: U,
      onBlur: xe
    };
    if (O) {
      var H = b.type, se = b.value, we = b.as, Mt = b.multiple;
      H === "checkbox" ? se === void 0 ? B.checked = !!k : (B.checked = !!(Array.isArray(k) && ~k.indexOf(se)), B.value = se) : H === "radio" ? (B.checked = k === se, B.value = se) : we === "select" && Mt && (B.value = B.value || [], B.multiple = !0);
    }
    return B;
  }, [xe, U, E.values]), Dt = St(function() {
    return !Pe(y.current, E.values);
  }, [y.current, E.values]), ma = St(function() {
    return typeof l < "u" ? Dt ? E.errors && Object.keys(E.errors).length === 0 : l !== !1 && ge(l) ? l(f) : l : E.errors && Object.keys(E.errors).length === 0;
  }, [l, Dt, E.errors, f]), ya = ie({}, E, {
    initialValues: y.current,
    initialErrors: v.current,
    initialTouched: x.current,
    initialStatus: w.current,
    handleBlur: xe,
    handleChange: U,
    handleReset: pt,
    handleSubmit: P,
    resetForm: Y,
    setErrors: G,
    setFormikState: te,
    setFieldTouched: q,
    setFieldValue: $,
    setFieldError: T,
    setStatus: he,
    setSubmitting: $e,
    setTouched: C,
    setValues: p,
    submitForm: Ie,
    validateForm: D,
    validateField: M,
    isValid: ma,
    dirty: Dt,
    unregisterField: S,
    registerField: Q,
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
      var l = r.clone !== !1, u = l && r.isMergeableObject(s);
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
var kc = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? gn : le;
function ye(e) {
  var t = pe(e);
  return kc(function() {
    t.current = e;
  }), ae(function() {
    for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return t.current.apply(void 0, n);
  }, []);
}
var Lc = /* @__PURE__ */ wa(function(e, t) {
  var r = e.action, n = ua(e, ["action"]), a = r ?? "#", s = Nc(), i = s.handleReset, l = s.handleSubmit;
  return ja("form", ie({
    onSubmit: l,
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
  const [a, s] = re({});
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
  module_refid: l
}) {
  const [u, h] = re(!1), [d, g] = re(
    s ?? e.options ?? {}
  ), [f, y] = re(""), [v, x] = re(0), w = pe(null), [m, j] = re(!1), N = ne.useRef(f), _ = pe(null);
  ne.useEffect(() => {
    N.current = f;
  }, [f]), le(() => {
    s && Object.keys(s).length !== 0 && g(s);
  }, [s]), le(() => {
    if (!m) return;
    const M = (Q) => {
      const S = Q.target;
      _.current?.contains(S) || w.current?.contains(S) || (j(!1), y(""));
    };
    return document.addEventListener("mousedown", M), () => {
      document.removeEventListener("mousedown", M);
    };
  }, [m]);
  const c = e.name;
  ne.useEffect(() => {
    let M = !0;
    return (async () => {
      let S = e.valueKey ?? "value", C = e.labelKey ?? "title";
      if (e?.options) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const A = Object.values(e.options);
          if (A.length && typeof A[0] == "string") {
            g(e.options);
            return;
          }
        }
        const T = (Array.isArray(e.options) ? e.options : [e.options]).map(be), $ = ve(
          S,
          C,
          T,
          e.groupKey
          // auto-uses `category` if present
        );
        g($);
        return;
      }
      const G = e?.source ?? {};
      if (e.type === "dataMethod") {
        const p = e.method, T = p ? r[p] : void 0;
        if (T)
          try {
            const $ = await Promise.resolve(T()), A = Array.isArray($?.data?.data) ? $.data.data : Array.isArray($?.data) ? $.data : $, U = Array.isArray(A) ? A.map(be) : [], q = ve(S, C, U, e.groupKey);
            M && g(q);
          } catch ($) {
            console.error("Method execution failed:", $), M && g({});
          }
        else
          M && g({});
      }
      if (G.type === "api" && G.url)
        try {
          const p = await X({
            method: G.method || "GET",
            url: G.url,
            data: G.body ?? {},
            params: G.params ?? {},
            headers: G.headers ?? {}
          }), T = Array.isArray(p?.data?.data) ? p.data.data : Array.isArray(p?.data) ? p.data : p, $ = Array.isArray(T) ? T.map(be) : [], A = ve(S, C, $, e.groupKey);
          M && g(A);
        } catch (p) {
          console.error("API execution failed:", p), M && g({});
        }
      if (e.table || e.type === "dataSelector" || e.queryid) {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let p;
          if (e.type === "dataSelector")
            p = {
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
            p = {
              table: e.table,
              cols: e.columns,
              where: e.where ? a ? fe(e.where, { refid: a }) : e.where : void 0
            };
          }
          const T = await He(n, p, e?.queryid, void 0, l), $ = Array.isArray(T?.data?.data) ? T.data.data : Array.isArray(T?.data) ? T.data : T, A = Array.isArray($) ? $.map(be) : [], U = ve(S, C, A, e.groupKey);
          M && g(U);
        } catch (p) {
          console.error("API fetch failed:", p);
        }
      }
    })(), () => {
      M = !1;
    };
  }, [
    e.options,
    e.source,
    e.table,
    e.columns,
    e.where,
    a
  ]);
  const E = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, F = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, L = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, z = (M) => M.icon ? /* @__PURE__ */ o.jsx("i", { className: M.icon }) : null, K = St(
    () => gs(d),
    [d]
  ), R = K.length, V = St(() => e.search || !f ? K : K.filter(
    ([, M]) => M.toLowerCase().includes(f.toLowerCase())
  ), [e.search, f, K]), D = (M, Q) => {
    if (m === !0)
      if (M.key === "ArrowDown")
        M.preventDefault(), x(
          (S) => S + 1 < V.length ? S + 1 : 0
        );
      else if (M.key === "ArrowUp")
        M.preventDefault(), x(
          (S) => S - 1 >= 0 ? S - 1 : V.length - 1
        );
      else if (M.key === "Enter") {
        M.preventDefault();
        const [S] = V[v] || [];
        S && t.setFieldValue(e.name, Q ? S : [...t.values[e.name], S]);
      } else M.key === "Escape" && (y(""), j(!1));
  };
  le(() => {
    w.current?.querySelector(
      `[data-index="${v}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [v]), le(() => {
    v >= V.length && x(0);
  }, [V, v]), le(() => {
    const M = e.autocomplete, Q = e.ajaxchain;
    if (!M && !Q) return;
    const S = t.values[e.name];
    if (!S) return;
    const C = Array.isArray(Q) ? Q : Q ? [Q] : [];
    (async () => {
      try {
        if (ms(M)) {
          const p = M.src;
          if (!p || !n) return;
          const T = fe(p.where ?? {}, {
            refid: S
          }), $ = {
            ...p,
            table: p.table,
            cols: p.columns,
            where: T
          }, { data: A } = await He(n, $, e?.queryid, void 0, l), U = Array.isArray(A?.data) ? A.data[0] : A?.data;
          U && M.target.split(",").map((q) => q.trim()).forEach((q) => {
            U[q] !== void 0 && t.setFieldValue(q, U[q]);
          });
        }
        for (const p of C) {
          const T = p.src;
          if (!p || typeof p != "object" || !T || typeof T != "object" || !n) continue;
          let $;
          if (!T.queryid) {
            if (!T.table || !T.columns)
              throw new Error("SQL query requires field.table");
            const he = fe(T?.where ?? {}, {
              refid: S
            });
            $ = {
              ...T,
              table: T.table,
              cols: T.columns,
              where: he
            };
          }
          const { data: A } = await He(n, $, e?.queryid, void 0, l);
          let U = e.valueKey ?? "value", q = e.labelKey ?? "title";
          const oe = Array.isArray(A?.data?.data) ? A.data.data : Array.isArray(A?.data) ? A.data : A, xe = Array.isArray(oe) ? oe.map(be) : [], te = ve(
            U,
            q,
            xe,
            e.groupKey
          );
          i?.(p.target, te);
        }
      } catch (p) {
        console.error("Autocomplete / AjaxChain fetch failed", p);
      }
    })();
  }, [t.values[e.name]]), ne.useEffect(() => {
    if (!e.search || !f.trim() || !e.table || !n) return;
    const M = ys(e.columns ?? ""), Q = new AbortController(), S = setTimeout(async () => {
      try {
        let C;
        if (!e.queryid) {
          if (!e.table || !e.cols)
            throw new Error("SQL query requires field.table");
          const oe = a ? fe(e.where ?? {}, {
            refid: a
          }) : e.where;
          C = {
            ...e,
            table: e.table,
            cols: e.columns || e.cols,
            where: oe
          };
        }
        let G = {};
        Array.isArray(M) && M.forEach((oe) => {
          G[oe] = [f, "LIKE"];
        });
        const { data: p } = await He(n, C, e?.queryid, void 0, l, G);
        let T = e.valueKey ?? "value", $ = e.labelKey ?? "title";
        const A = Array.isArray(p?.data?.data) ? p.data.data : Array.isArray(p?.data) ? p.data : p, U = Array.isArray(A) ? A.map(be) : [], q = ve(
          T,
          $,
          U,
          e.groupKey
        );
        g(q);
      } catch (C) {
        if (X.isCancel(C)) return;
        console.error("Search fetch failed", C);
      }
    }, 500);
    return () => {
      clearTimeout(S), Q.abort();
    };
  }, [f, a]);
  const Y = async (M) => {
    if (M.length === 0) {
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
      const C = await Promise.all(
        Array.from(M).map(async (G) => {
          const p = new FormData();
          return p.append("file", G), (await X({
            method: "POST",
            url: Q,
            data: p,
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${n?.accessToken}`
            }
          })).data;
        })
      );
      t.setFieldValue(
        c,
        S ? C.map((G) => G.path) : C[0]?.path
      );
    } catch (C) {
      console.error("File upload failed", C), t.setFieldError(c, "File upload failed");
    }
  };
  switch (e.type) {
    case "autocomplete": {
      const S = t.values[c] ?? "", C = f !== "" ? f : Ir(d, S) ?? String(S ?? ""), G = (T) => {
        const $ = T.target.value;
        y($), x(0), $.trim() ? j(!0) : (j(!1), t.setFieldValue(c, ""));
      }, p = (T) => {
        t.setFieldValue(c, T), y(""), j(!1);
      };
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: L, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsx("div", { ref: _, children: /* @__PURE__ */ o.jsx(
          "input",
          {
            className: `${E} ${F}`,
            value: C,
            placeholder: e.placeholder || "Type to search...",
            onChange: G,
            onFocus: () => {
              const T = String(t.values[c] ?? "");
              y(T);
            },
            onBlur: () => {
              setTimeout(() => j(!1), 150);
            },
            onKeyDown: (T) => {
              if (T.key === "Enter") {
                if (T.preventDefault(), V[v]) {
                  const [$] = V[v];
                  t.setFieldValue(c, $);
                } else f.trim() && t.setFieldValue(c, f.trim());
                j(!1);
                return;
              }
              D(T, !0);
            },
            disabled: e.disabled
          }
        ) }),
        /* @__PURE__ */ o.jsx(Ht, { anchorRef: _, open: m, children: /* @__PURE__ */ o.jsx(
          "div",
          {
            ref: w,
            className: "bg-white border rounded shadow max-h-52 overflow-y-auto",
            children: V.length > 0 ? V.map(([T, $], A) => /* @__PURE__ */ o.jsx(
              "div",
              {
                "data-index": A,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${v === A ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => p(T),
                children: $
              },
              T
            )) : /* @__PURE__ */ o.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `No matches press enter to add "${C}" ` })
          }
        ) }),
        t.touched[c] && t.errors[c] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[c]) })
      ] });
    }
    case "dataSelector":
    case "dataSelectorFromTable":
    case "dataSelectorFromUniques":
    case "dataMethod": {
      if (e.multiple === !0) {
        const S = t.values[c] ?? [];
        return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ o.jsxs("label", { className: L, children: [
            e.label,
            e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ o.jsxs(
            "div",
            {
              ref: _,
              tabIndex: 0,
              className: "cursor-pointer select-none border border-gray-300 rounded-lg px-4 py-2.5 bg-white flex justify-between items-center",
              onClick: () => {
                j((C) => !C), x(0);
              },
              onKeyDown: (C) => D(C, !1),
              onBlur: () => {
                e.multiple || setTimeout(() => {
                  j(!1), y("");
                }, 150);
              },
              children: [
                /* @__PURE__ */ o.jsx("span", { className: "text-sm text-gray-700 truncate", children: S.length > 0 ? S.join(", ") : `Select ${e.label}` }),
                /* @__PURE__ */ o.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
              ]
            }
          ),
          /* @__PURE__ */ o.jsx(Ht, { anchorRef: _, open: m, children: /* @__PURE__ */ o.jsxs(
            "div",
            {
              ref: w,
              className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
              children: [
                e.search && /* @__PURE__ */ o.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "text",
                    value: f,
                    onChange: (C) => {
                      y(C.target.value), x(0);
                    },
                    placeholder: "Search...",
                    className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                  }
                ) }),
                V.length > 0 ? V.map(([C, G], p) => /* @__PURE__ */ o.jsxs(
                  "label",
                  {
                    "data-index": p,
                    className: `flex items-center gap-x-2 px-2 py-1 rounded cursor-pointer text-sm
                    ${S.includes(C) ? "bg-indigo-50 text-indigo-600 font-medium" : v === p ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: [
                      /* @__PURE__ */ o.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: S.includes(C),
                          onChange: (T) => {
                            const $ = T.target.checked ? [...S, C] : S.filter((A) => A !== C);
                            t.setFieldValue(c, $);
                          },
                          className: "h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        }
                      ),
                      G
                    ]
                  },
                  C
                )) : /* @__PURE__ */ o.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ]
            }
          ) }),
          t.touched[c] && t.errors[c] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[c]) })
        ] });
      }
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: L, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs(
          "div",
          {
            ref: _,
            tabIndex: 0,
            className: "cursor-pointer select-none border border-gray-300 rounded-lg px-4 py-2.5 bg-white flex justify-between items-center",
            onClick: () => {
              j((S) => !S), x(0);
            },
            onKeyDown: (S) => D(S, !0),
            onBlur: () => {
              setTimeout(() => {
                j(!1), y("");
              }, 150);
            },
            children: [
              /* @__PURE__ */ o.jsx("span", { className: "text-sm text-gray-700 truncate", children: t.values[c] ? Ir(d, t.values[c]) ?? "Select option" : `Select ${e.label}` }),
              /* @__PURE__ */ o.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
            ]
          }
        ),
        /* @__PURE__ */ o.jsx(Ht, { anchorRef: _, open: m, children: /* @__PURE__ */ o.jsxs(
          "div",
          {
            ref: w,
            className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
            children: [
              e.search && /* @__PURE__ */ o.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ o.jsx(
                "input",
                {
                  type: "text",
                  value: f,
                  onChange: (S) => {
                    y(S.target.value), x(0);
                  },
                  onKeyDown: (S) => D(S, !0),
                  placeholder: "Search...",
                  className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                }
              ) }),
              V.length > 0 && /* @__PURE__ */ o.jsx(
                "div",
                {
                  onMouseDown: (S) => {
                    S.preventDefault(), t.setFieldValue(c, ""), j(!1), y("");
                  },
                  className: "px-2 py-1 text-sm cursor-pointer hover:bg-gray-50",
                  children: "Clear selection"
                }
              ),
              V.length > 0 ? V.map(([S, C], G) => /* @__PURE__ */ o.jsx(
                "div",
                {
                  "data-index": G,
                  onMouseDown: () => {
                    t.setFieldValue(c, S), j(!1), y(""), x(0);
                  },
                  className: `px-2 py-1 rounded cursor-pointer text-sm
                  ${t.values[c] === S ? "bg-indigo-50 text-indigo-600 font-medium" : v === G ? "bg-gray-100" : "hover:bg-gray-50"}`,
                  children: C
                },
                S
              )) : /* @__PURE__ */ o.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
            ]
          }
        ) }),
        t.touched[c] && t.errors[c] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[c]) })
      ] });
    }
    case "textarea":
      return /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: L, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ o.jsx(
            "textarea",
            {
              className: `${E} ${F} min-h-[120px] resize-none`,
              onFocus: () => h(!0),
              name: c,
              value: t.values[c],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ o.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${u ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[c] && t.errors[c] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[c]) })
      ] }) });
    case "select":
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: L, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ o.jsxs(
            "select",
            {
              className: `${E} ${F} appearance-none cursor-pointer pr-12`,
              onFocus: () => h(!0),
              name: c,
              value: t.values[c],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              disabled: e.disabled,
              children: [
                /* @__PURE__ */ o.jsx("option", { value: "", disabled: !0, children: e.placeholder || "Please select an option" }),
                !tr(d) && Object.entries(d).map(([S, C]) => /* @__PURE__ */ o.jsx("option", { value: S, className: "py-2", children: C }, S)),
                tr(d) && Object.entries(d).map(([S, C]) => /* @__PURE__ */ o.jsx("optgroup", { label: S, children: Object.entries(C).map(([G, p]) => /* @__PURE__ */ o.jsx("option", { value: G, children: p }, G)) }, S))
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
        t.touched[c] && t.errors[c] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[c]) })
      ] });
    case "radioList":
    case "radio":
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: L, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: `flex ${R > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(d || {}).map(([S, C]) => /* @__PURE__ */ o.jsxs(
          "label",
          {
            htmlFor: `${c}-${S}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  id: `${c}-${S}`,
                  type: "radio",
                  name: c,
                  checked: t.values[c] === S,
                  value: S,
                  onChange: t.handleChange,
                  onBlur: t.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              C
            ]
          },
          S
        )) }),
        t.touched[c] && t.errors[c] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[c]) })
      ] });
    case "checkbox": {
      const S = t.values[c];
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: L, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(d || {}).map(([C, G]) => /* @__PURE__ */ o.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: S.includes(C),
                  onChange: (p) => {
                    const T = p.target.checked ? [...S, C] : S.filter(($) => $ !== C);
                    t.setFieldValue(c, T);
                  },
                  onBlur: t.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              G
            ]
          },
          C
        )) }),
        t.touched[c] && t.errors[c] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[c]) })
      ] });
    }
    case "tags": {
      const S = t.values[c], C = f.trim(), G = Array.isArray(d) ? d : Object.entries(d || {}).map(([A, U]) => ({ value: A, label: U })), p = (A) => {
        A && !S.includes(A) && (t.setFieldValue(c, [...S, A]), y(""));
      }, T = (A) => {
        t.setFieldValue(
          c,
          S.filter((U) => U !== A)
        );
      }, $ = (A) => G.find((U) => U.value === A)?.label ?? A;
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: L, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: `${E} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !e.disabled && document.getElementById(`${c}-input`)?.focus(),
            children: [
              S.map((A) => /* @__PURE__ */ o.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ o.jsx("span", { className: "text-indigo-700", children: $(A) }),
                    /* @__PURE__ */ o.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (U) => {
                          U.stopPropagation(), e.disabled || T(A);
                        },
                        onMouseDown: (U) => U.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                A
              )),
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  id: `${c}-input`,
                  type: "text",
                  value: f,
                  onChange: (A) => y(A.target.value),
                  onKeyDown: (A) => {
                    (A.key === "Enter" || A.key === ",") && (A.preventDefault(), p(C));
                  },
                  placeholder: S.length === 0 ? e.placeholder || "Type and press Enter" : "",
                  className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                  disabled: e.disabled
                }
              )
            ]
          }
        ),
        t.touched[c] && t.errors[c] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[c]) })
      ] });
    }
    case "attachment":
    case "photo":
    case "avatar":
    case "file":
      const M = e.multiple === !0, Q = Array.isArray(t.values[c]) ? t.values[c] : t.values[c] ? [t.values[c]] : [];
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: L, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ o.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: z(e) }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "file",
              className: `${E} ${F} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => h(!0),
              name: c,
              multiple: M,
              onChange: (S) => {
                const C = S.currentTarget.files;
                C && Y(C);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ o.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${u ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        Q.map((S) => {
          const C = S?.split("/").pop();
          return C ? /* @__PURE__ */ o.jsx("div", { className: "mt-1", children: /* @__PURE__ */ o.jsx("span", { className: "text-sm", children: C }) }, S) : null;
        }),
        t.touched[c] && t.errors[c] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[c]) })
      ] });
    case "json":
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: L, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ o.jsx(
            "textarea",
            {
              id: `${c}-json`,
              name: c,
              value: t.values[c],
              onChange: (S) => t.setFieldValue(c, S.target.value),
              onBlur: t.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: e.disabled,
              className: `${E} ${F} min-h-[200px] font-mono text-sm resize-y`
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
        t.touched[c] && t.errors[c] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[c]) })
      ] });
    case "date":
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: L, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ o.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: z(e) }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "date",
              name: c,
              value: t.values[c],
              onChange: t.handleChange,
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled,
              className: `${E} ${F} ${e.icon ? "pl-9" : ""}`
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
        t.touched[c] && t.errors[c] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[c]) })
      ] });
    default:
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: L, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ o.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: z(e) }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: e.type || "text",
              className: `${E} ${F} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => h(!0),
              name: c,
              value: t.values[c],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ o.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${u ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[c] && t.errors[c] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[c]) })
      ] });
  }
}
function Vc({
  title: e,
  fields: t,
  data: r,
  onSubmit: n = (h) => {
  },
  onCancel: a = () => {
  },
  methods: s = {},
  sqlOpsUrls: i,
  refid: l,
  module_refid: u
}) {
  const h = fs(t, i?.operation), [d, g] = ne.useState({}), f = (w, m) => {
    g((j) => ({
      ...j,
      [w]: m
    }));
  }, { initialValues: y, validationSchema: v } = ne.useMemo(() => {
    const w = {}, m = {};
    return h.forEach((j) => {
      ps([j], w, m, r);
    }), {
      initialValues: w,
      validationSchema: m
    };
  }, [h, r]), x = Cc({
    initialValues: y,
    enableReinitialize: !0,
    validationSchema: Cn().shape(v),
    onSubmit: (w) => {
      n(w), x.resetForm();
    }
  });
  return console.log("formik.values", x.values), /* @__PURE__ */ o.jsx("div", { className: "relative z-10 max-w-full ", children: /* @__PURE__ */ o.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ o.jsxs("form", { onSubmit: x.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "grid grid-flow-col auto-cols-max gap-4  overflow-x-auto", children: [
      h.map((w, m) => hs(w.hidden) || w.type === "geolocation" || w.vmode === "edit" && i?.operation === "create" ? null : /* @__PURE__ */ o.jsx(
        "div",
        {
          children: /* @__PURE__ */ o.jsx(
            zc,
            {
              refid: l,
              module_refid: u,
              ...i ? { sqlOpsUrls: i } : {},
              field: w,
              formik: x,
              methods: s,
              setFieldOptions: f,
              ...d[w.name] ? { optionsOverride: d[w.name] } : {}
            }
          )
        },
        w?.name ?? `field-${m}`
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
    r && (s = !0, i = r), console.log("skipquery,dbopsid", s, r), s || (i = await Zt(e, {
      operation: "fetch",
      source: t.source,
      fields: t.fields ?? {},
      datahash: a,
      srcid: n
    }));
    const l = await X.post(
      e.baseURL + e.dbopsFetch,
      { refid: i, datahash: a },
      { headers: at(e) }
    );
    return l.data?.data ?? l.data;
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
  setEditData: l,
  module_refid: u
}) {
  const h = e.endPoints, d = e?.source?.refid, [g, f] = ne.useState(i), y = ne.useMemo(() => us(e.fields), [e.fields]);
  ne.useEffect(() => {
    let w = !0;
    return (async () => {
      const j = e?.source ?? {};
      if (!j?.type) {
        w && f({});
        return;
      }
      if (j.type === "method") {
        const N = j.method, _ = N ? t[N] : void 0;
        if (_)
          try {
            const c = await Promise.resolve(_());
            w && f(c ?? {});
          } catch (c) {
            console.error("Method execution failed:", c), w && f({});
          }
        else
          w && f({});
      }
      if (j.type === "api" && h?.operation !== "create")
        try {
          const N = await X({
            method: j.method || "GET",
            url: j.url ?? "",
            data: j.body ?? {},
            params: j.params ?? {},
            headers: j.headers ?? {}
          });
          w && f(N.data ?? {});
        } catch (N) {
          console.error("API fetch failed:", N), w && f({});
        }
      if (j.type === "sql" && j.refid && j.refid !== "0" && h?.operation !== "create" || h?.operation !== "create" && j.dbopsid) {
        if (!h) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const N = await Bc.fetch(h, {
            source: {
              ...j,
              table: j.table,
              columns: j.columns,
              where: fe(j.where, {
                refid: d
              })
            },
            fields: Nt(e.fields, h.operation)
          }, j?.dbopsid, u);
          w && f(N);
        } catch (N) {
          console.error("API fetch failed:", N);
        }
      }
    })(), () => {
      w = !1;
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
  const v = async (w) => {
    const m = e?.source ?? {};
    let j = null;
    if (y.length > 0)
      try {
        j = await ds();
      } catch (_) {
        console.log("catch fetchGeolocation", _), j = null;
      }
    const N = {
      ...w,
      ...Object.fromEntries(
        y.map((_) => [_, j])
      )
    };
    if (m.type === "method") {
      const _ = m.method, c = _ ? t[_] : void 0;
      if (c)
        try {
          const E = await Promise.resolve(c(N));
          l?.(null), s?.(E);
        } catch (E) {
          s?.(E), console.error("Method execution failed:", E);
        }
    }
    if (m.type === "api") {
      if (!h) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const _ = await X({
          method: m.method || "POST",
          url: h.baseURL + m.endpoint,
          data: N ?? {},
          headers: {
            Authorization: `Bearer ${h?.accessToken}`
          }
        });
        l?.(null), s?.(_);
      } catch (_) {
        s?.(_), console.error("API fetch failed:", _);
      }
    }
    if (m.type === "sql") {
      const _ = e.endPoints;
      if (!_) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let c = !1, E;
        m?.dbopsid && (c = !0, E = m?.dbopsid);
        const F = await X({
          method: "GET",
          url: _.baseURL + _.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${_?.accessToken}`
          }
        });
        if (!c) {
          let z = {
            ...m
          };
          m.where && (z = {
            ...m,
            where: fe(m.where, {
              refid: d
            })
          }), E = (await X({
            method: "POST",
            url: _.baseURL + _.dbopsGetRefId,
            data: {
              operation: _.operation,
              source: z,
              fields: Nt(e.fields, _.operation),
              forcefill: e.forcefill,
              datahash: F.data.refhash,
              scrid: u
            },
            headers: {
              Authorization: `Bearer ${_?.accessToken}`
            }
          }))?.data.refid;
        }
        const L = await X({
          method: "POST",
          url: _.baseURL + _[_.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: E,
            refid1: _?.refid,
            fields: N,
            datahash: F.data.refhash
          },
          headers: {
            Authorization: `Bearer ${_?.accessToken}`
          }
        });
        l?.(null), s?.(L);
      } catch (c) {
        s?.(c), console.error("API fetch failed:", c);
      }
    }
  }, x = {
    simple: /* @__PURE__ */ o.jsx(
      Vc,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: g,
        onSubmit: v,
        onCancel: n,
        methods: t,
        components: a,
        ...h ? { sqlOpsUrls: h } : {},
        refid: d,
        module_refid: u
      }
    )
  };
  return /* @__PURE__ */ o.jsx("div", { className: "relative", children: x.simple });
}
function xr({ tabObj: e, methods: t, tabName: r, sqlOpsUrls: n, refid: a, Reports: s, toast: i, handleAction: l, infoViewJson: u }) {
  const [h, d] = re(1), [g, f] = re(10), [y, v] = re(""), [x, w] = re(!1), [m, j] = re(null), [N, _] = ne.useState([]);
  pe(null);
  const [c, E] = re(null), [F, L] = re({ key: "", direction: null }), [z, K] = re(null), [R, V] = ne.useState({
    "hse_induction_details.id": 12,
    "hse_induction_details.gender": "male",
    "hse_induction_details.count": 5,
    "hse_induction_details.company": "wel",
    "hse_induction_details.company_name": "SSSffg"
  }), D = e?.config;
  console.log("tabObj", e), console.log("source", D);
  const Y = e?.config, M = Y?.["popup.form"] ? "popup.form" : (Y?.form, "form"), Q = Y?.[M] && Object.keys(Y?.[M]).length > 0, S = (T, $) => {
    let A = be(T.data);
    V(A);
  };
  console.log("editData", R);
  const C = (T) => {
    j(T), w(!0);
  }, G = async () => {
    if (m?.id) {
      if (!n) {
        K({ type: "error", message: "Delete configuration missing." });
        return;
      }
      try {
        let T = e?.config;
        const $ = T?.["popup.form"] ? "popup.form" : (T?.form, "form");
        console.log("config?.[formType]", T?.[$]);
        const A = T?.[$];
        if (!A?.source) throw new Error("Form source missing");
        const U = await X({
          method: "GET",
          url: n.baseURL + n.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${n.accessToken}`
          }
        });
        let q = { ...A.source, refid: m.id };
        A.source.where && (q = {
          ...q,
          where: fe(A.source.where, {
            refid: m.id
          })
        });
        const oe = await X({
          method: "POST",
          url: n.baseURL + n.dbopsGetRefId,
          data: {
            operation: "update",
            source: q,
            fields: A.fields,
            forcefill: A.forcefill,
            datahash: U.data.refhash
          },
          headers: {
            Authorization: `Bearer ${n.accessToken}`
          }
        });
        await X({
          method: "POST",
          url: n.baseURL + n.dbopsUpdate,
          data: {
            refid: oe.data.refid,
            fields: { blocked: "true" },
            datahash: U.data.refhash
          },
          headers: {
            Authorization: `Bearer ${n.accessToken}`
          }
        }), window.alert("Record deleted successfully.");
      } catch (T) {
        console.error(T), window.alert("Failed to delete record. Please try again");
      } finally {
        j(null), w(!1);
      }
    }
  }, p = () => {
    j(null), w(!1);
  };
  return console.log("source", D), console.log("source?.querid", D?.querid), /* @__PURE__ */ o.jsx(o.Fragment, { children: s ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      s,
      {
        methods: { ...t, deleteRecord: C, editRecord: S },
        report: {
          ...D,
          source: {
            table: D?.table,
            type: "sql",
            cols: D?.cols,
            where: D?.where,
            orderby: D?.orderby,
            queryid: D?.queryid
          },
          endPoints: n,
          actions: { ...D?.actions, ...u?.buttons, ...u.actions },
          datagrid: D?.datagrid,
          buttons: D?.buttons
        },
        onButtonClick: l
      }
    ),
    Q && /* @__PURE__ */ o.jsx(
      hn,
      {
        formJson: {
          ...Y[M],
          endPoints: {
            ...n,
            operation: R ? "update" : "create"
          }
        },
        initialvalues: R ?? {},
        setEditData: V,
        module_refid: u?.module_refid
      }
    ),
    /* @__PURE__ */ o.jsx(
      ws,
      {
        open: x,
        onConfirm: G,
        onCancel: p
      }
    )
  ] }) : Q && /* @__PURE__ */ o.jsx(
    hn,
    {
      formJson: {
        ...Y[M],
        endPoints: {
          ...n,
          operation: R ? "update" : "create"
        }
      },
      initialvalues: R ?? {},
      setEditData: V,
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
  tabsNavRef: l
}) => {
  const [u, h] = re(!1), d = pe(null);
  return le(() => {
    const g = (f) => {
      d.current && !d.current.contains(f.target) && h(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
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
      /* @__PURE__ */ o.jsxs("div", { className: "relative", ref: d, children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            onClick: () => h(!u),
            className: "ml-1 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200",
            children: "⋮"
          }
        ),
        u && /* @__PURE__ */ o.jsx("div", { className: "absolute right-0 mt-2 w-48 max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-30", children: t.map((g, f) => /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              r(f), h(!1);
            },
            className: `w-full text-left px-3 py-2 text-sm truncate hover:bg-gray-100 ${n === f ? "bg-gray-50 font-semibold text-action" : "text-gray-700"}`,
            children: e[g]?.label || g
          },
          g
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
        children: t.length > 0 ? t.map((g, f) => /* @__PURE__ */ o.jsx(
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
            children: /* @__PURE__ */ o.jsx("span", { className: "relative z-10 flex items-center justify-center gap-1 sm:gap-2", children: /* @__PURE__ */ o.jsx("span", { className: "truncate", children: e[g]?.label || g }) })
          },
          g
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
  methods: l = {},
  refid: u,
  sqlOpsUrls: h,
  module_refid: d,
  fieldOptions: g,
  setFieldOptions: f
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
              methods: l,
              refid: u,
              ...h ? { sqlOpsUrls: h } : {},
              module_refid: d,
              setFieldOptions: f,
              ...g[y.name] ? { optionsOverride: g[y.name] } : {}
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
function yn({
  groups: e,
  methods: t = {},
  infoData: r,
  viewRenderers: n = {},
  isCommonInfo: a,
  layoutConfig: s = {},
  viewMode: i,
  sqlOpsUrls: l,
  refid: u,
  Reports: h,
  toast: d = {},
  handleAction: g = () => {
  },
  infoViewJson: f
}) {
  const [y, v] = re(0), [x, w] = re(!1), m = pe(null), [j, N] = re({}), _ = (D, Y) => {
    N((M) => ({
      ...M,
      [D]: Y
    }));
  }, c = Object.keys(e);
  le(() => {
    const D = () => {
      if (m.current) {
        const Y = m.current;
        w(Y.scrollWidth > Y.clientWidth);
      }
    };
    return D(), window.addEventListener("resize", D), () => window.removeEventListener("resize", D);
  }, [c.length]), le(() => {
    if (m.current && c.length > 0) {
      const D = m.current.children[y];
      D && D.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [y, c.length]);
  const E = i === "tableft", F = i === "tabright", L = !E && !F, z = e[c[y] ?? ""] || null;
  console.log("tabObj", z);
  const K = {
    single: (D, Y) => /* @__PURE__ */ o.jsx(cr, { module_refid: f.module_refid, tabObj: D, methods: t, tabName: Y, ...l ? { sqlOpsUrls: l } : {}, refid: u }),
    grid: (D, Y) => /* @__PURE__ */ o.jsx(
      xr,
      {
        ...h ? { Reports: h } : {},
        toast: d,
        handleAction: g,
        tabObj: D,
        methods: t,
        tabName: Y,
        ...l ? { sqlOpsUrls: l } : {},
        refid: u,
        infoViewJson: f
      }
    )
  }, R = z?.config?.uimode, V = n[R] || K[R] || (() => /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No UI mode for this type" }));
  return console.log("tabObjjjjjjjjjjjjjjjjjjjjjj", z), L ? /* @__PURE__ */ o.jsxs("div", { className: "flex-1 flex flex-col min-h-0 ", children: [
    /* @__PURE__ */ o.jsx(
      Gc,
      {
        groupNames: c,
        groups: e,
        setActiveTabIndex: v,
        activeTabIndex: y,
        tabsNavRef: m,
        isCommonInfo: a,
        showScrollHint: x,
        layoutConfig: s
      }
    ),
    /* @__PURE__ */ o.jsx(
      mn,
      {
        groupNames: c,
        activeTabIndex: y,
        layoutConfig: s,
        tabObj: z,
        infoData: r,
        setActiveTabIndex: v,
        renderView: V,
        groups: e,
        methods: t,
        refid: u,
        ...l ? { sqlOpsUrls: l } : {},
        module_refid: f.module_refid,
        fieldOptions: j,
        setFieldOptions: _
      }
    )
  ] }) : /* @__PURE__ */ o.jsxs("div", { className: "flex-1 flex min-h-0", children: [
    E && /* @__PURE__ */ o.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ o.jsx(
      pn,
      {
        groupNames: c,
        groups: e,
        setActiveTabIndex: v,
        activeTabIndex: y
      }
    ) }),
    /* @__PURE__ */ o.jsx("main", { className: "flex-1 flex flex-col min-h-0 overflow-auto", children: /* @__PURE__ */ o.jsx(
      mn,
      {
        groupNames: c,
        activeTabIndex: y,
        layoutConfig: s,
        tabObj: z,
        infoData: r,
        setActiveTabIndex: v,
        renderView: V,
        groups: e,
        methods: t,
        refid: u,
        module_refid: f.module_refid,
        ...l ? { sqlOpsUrls: l } : {},
        fieldOptions: j,
        setFieldOptions: _
      }
    ) }),
    F && /* @__PURE__ */ o.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ o.jsx(
      pn,
      {
        groupNames: c,
        groups: e,
        setActiveTabIndex: v,
        activeTabIndex: y
      }
    ) })
  ] });
}
function Uc({ title: e, children: t, isFirst: r }) {
  const [n, a] = re(r);
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
  toast: l = {},
  handleAction: u = () => {
  },
  infoViewJson: h
}) {
  const [d, g] = re({}), f = (v, x) => {
    g((w) => ({ ...w, [v]: x }));
  }, y = {
    single: (v, x) => /* @__PURE__ */ o.jsx(
      cr,
      {
        tabObj: v,
        methods: t,
        tabName: x,
        ...a ? { sqlOpsUrls: a } : {},
        refid: s,
        module_refid: h?.module_refid
      }
    ),
    grid: (v, x) => /* @__PURE__ */ o.jsx(
      xr,
      {
        ...i ? { Reports: i } : {},
        toast: l,
        infoViewJson: h,
        handleAction: u,
        tabObj: v,
        methods: t,
        tabName: x,
        ...a ? { sqlOpsUrls: a } : {},
        refid: s
      }
    )
  };
  return /* @__PURE__ */ o.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ o.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ o.jsx("div", { className: "space-y-1 flex flex-col min-h-0", children: e && Object.entries(e).map(([v, x], w) => (console.log(
    "group",
    v
  ), /* @__PURE__ */ o.jsx(Uc, { title: x.label, isFirst: w === 0, children: x?.fields ? /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ o.jsx("div", { className: "grid grid-cols-12 gap-2", children: x.fields.map((m, j) => /* @__PURE__ */ o.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${ct[ut(m.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ o.jsx(
        dt,
        {
          module_refid: h?.module_refid,
          methods: t,
          field: m,
          data: r ?? {},
          setFieldOptions: f,
          ...d[m.name] ? { optionsOverride: d[m.name] } : {},
          ...a ? { sqlOpsUrls: a } : {},
          refid: s
        }
      )
    },
    m?.name ?? `field-${j}`
  )) }) }) : x ? /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: n[x.config?.uimode]?.(x) || y[x.config?.uimode]?.(x, v) || /* @__PURE__ */ o.jsx("div", { children: "No renderer for this type" }) }) : null }, v))) }) }) });
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
  toast: l = {},
  handleAction: u = () => {
  },
  infoViewJson: h
}) {
  const [d, g] = re({}), f = (v, x) => {
    g((w) => ({ ...w, [v]: x }));
  }, y = {
    single: (v, x) => /* @__PURE__ */ o.jsx(cr, { module_refid: h?.module_refid, tabObj: v, methods: t, tabName: x, ...a ? { sqlOpsUrls: a } : {}, refid: s }),
    grid: (v, x) => /* @__PURE__ */ o.jsx(
      xr,
      {
        ...i ? { Reports: i } : {},
        toast: l,
        handleAction: u,
        tabObj: v,
        methods: t,
        tabName: x,
        ...a ? { sqlOpsUrls: a } : {},
        refid: s,
        infoViewJson: h
      }
    )
  };
  return /* @__PURE__ */ o.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ o.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ o.jsx("div", { className: "space-y-2  flex flex-col min-h-0", children: e && Object.entries(e).map(([v, x], w) => /* @__PURE__ */ o.jsx(qc, { title: x.label, children: x?.fields ? /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ o.jsx("div", { className: "grid grid-cols-12 gap-2", children: x.fields.map((m, j) => /* @__PURE__ */ o.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${ct[ut(m.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ o.jsx(
        dt,
        {
          module_refid: h?.module_refid,
          methods: t,
          field: m,
          data: r ?? {},
          setFieldOptions: f,
          ...d[m.name] ? { optionsOverride: d[m.name] } : {},
          ...a ? { sqlOpsUrls: a } : {},
          refid: s
        }
      )
    },
    m?.name ?? `field-${j}`
  )) }) }) : x ? /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: n[x.config?.uimode]?.(x) || y[x.config?.uimode]?.(x, v) || /* @__PURE__ */ o.jsx("div", { children: "No renderer for this type" }) }) : null }, v)) }) }) });
}
function Qc({
  infoViewJson: e,
  data: t = {},
  hiddenFields: r = [],
  groupFieldsFn: n = cs,
  layoutConfig: a = {},
  viewRenderers: s = {},
  methods: i = {},
  Reports: l,
  toast: u = {},
  handleAction: h = () => {
  }
}) {
  const [d, g] = ne.useState({}), f = ls(e.infoview ?? {}), y = e.endPoints, v = ne.useMemo(
    () => n(e.fields || {}),
    [e.fields, n]
  ), x = e?.source?.refid;
  let w = { ...v };
  e.infoview?.groups && (w = { ...w, ...e.infoview.groups }), ne.useEffect(() => {
    let N = !1;
    return (async () => {
      const c = e?.source;
      if (!c?.type) {
        N || g({});
        return;
      }
      if (c.type === "method") {
        const E = c.method, F = E ? i[E] : void 0;
        if (F)
          try {
            const L = await Promise.resolve(F());
            N || g(L || {});
          } catch (L) {
            console.error("Method execution failed:", L), N || g({});
          }
        else
          N || g({});
      }
      if (c.type === "api")
        try {
          const E = await X({
            method: c.method || "GET",
            url: c.url,
            data: c.body || {},
            params: c.params || {},
            headers: c.headers || {}
          });
          N || g(E.data || {});
        } catch (E) {
          console.error("API fetch failed:", E), N || g({});
        }
      if (c.type === "sql" && c.refid && c.refid != "0" || c.dbopsid) {
        if (!y) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let E = !1, F;
          c?.dbopsid && (E = !0, F = c?.dbopsid);
          const L = await X({
            method: "GET",
            url: y.baseURL + y.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${y?.accessToken}`
            }
          });
          if (!E) {
            let R = {
              ...c
            };
            c.where && (R = {
              ...c,
              where: fe(c.where, {
                refid: x
              })
            }), F = (await X({
              method: "POST",
              url: y.baseURL + y.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: R,
                fields: Nt(e.fields, y.operation),
                forcefill: e.forcefill,
                datahash: L.data.refhash,
                srcid: e?.module_refid
              },
              headers: {
                Authorization: `Bearer ${y?.accessToken}`
              }
            }))?.data.refid;
          }
          const z = await X({
            method: "POST",
            url: y.baseURL + y.dbopsFetch,
            data: {
              refid: F,
              datahash: L.data.refhash,
              module_refid: e.module_refid
            },
            headers: {
              Authorization: `Bearer ${y?.accessToken}`
            }
          }), K = Pn(z) ?? {};
          N || g(K);
        } catch (E) {
          console.error("API fetch failed:", E);
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
  const m = w.common || null;
  m && delete w.common;
  const j = (N) => {
    switch (N) {
      case "accordion":
        return /* @__PURE__ */ o.jsx(
          Kc,
          {
            groups: w,
            methods: i,
            infoData: d,
            viewRenderers: s,
            ...y ? { sqlOpsUrls: y } : {},
            refid: x,
            ...l ? { Reports: l } : {},
            toast: u,
            handleAction: h,
            infoViewJson: e
          }
        );
      case "tab":
      case "tableft":
      case "tabright":
        return /* @__PURE__ */ o.jsx(
          yn,
          {
            groups: w,
            viewRenderers: s,
            layoutConfig: a,
            methods: i,
            infoData: d,
            isCommonInfo: !!m,
            viewMode: N,
            ...y ? { sqlOpsUrls: y } : {},
            refid: x,
            ...l ? { Reports: l } : {},
            toast: u,
            handleAction: h,
            infoViewJson: e
          }
        );
      case "cards":
        return /* @__PURE__ */ o.jsx(
          Yc,
          {
            groups: w,
            viewRenderers: s,
            methods: i,
            infoData: d,
            ...y ? { sqlOpsUrls: y } : {},
            refid: x,
            ...l ? { Reports: l } : {},
            toast: u,
            handleAction: h,
            infoViewJson: e
          }
        );
      default:
        return /* @__PURE__ */ o.jsx(
          yn,
          {
            groups: w,
            viewRenderers: s,
            layoutConfig: a,
            methods: i,
            infoData: d,
            isCommonInfo: !!m,
            viewMode: N,
            ...y ? { sqlOpsUrls: y } : {},
            refid: x,
            ...l ? { Reports: l } : {},
            toast: u,
            handleAction: h,
            infoViewJson: e
          }
        );
    }
  };
  return /* @__PURE__ */ o.jsxs("div", { className: a.containerClass || "h-screen flex flex-col ", children: [
    m && /* @__PURE__ */ o.jsx(
      vs,
      {
        commonInfo: m,
        infoData: d,
        hiddenFields: r
      }
    ),
    j(f)
  ] });
}
export {
  Qc as InfoView
};
