import ae, { useState as re, useRef as he, useEffect as le, useCallback as te, useMemo as St, useLayoutEffect as yn, createContext as xa, forwardRef as va, createElement as wa, useContext as ja } from "react";
import Q from "axios";
import { createPortal as Ta } from "react-dom";
function gn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var mt = { exports: {} }, Qe = {};
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
  if (wr) return Qe;
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
  return Qe.Fragment = t, Qe.jsx = r, Qe.jsxs = r, Qe;
}
var Xe = {};
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
    function e(p) {
      if (p == null) return null;
      if (typeof p == "function")
        return p.$$typeof === U ? null : p.displayName || p.name || null;
      if (typeof p == "string") return p;
      switch (p) {
        case E:
          return "Fragment";
        case b:
          return "Profiler";
        case w:
          return "StrictMode";
        case c:
          return "Suspense";
        case x:
          return "SuspenseList";
        case G:
          return "Activity";
      }
      if (typeof p == "object")
        switch (typeof p.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), p.$$typeof) {
          case T:
            return "Portal";
          case N:
            return (p.displayName || "Context") + ".Provider";
          case v:
            return (p._context.displayName || "Context") + ".Consumer";
          case _:
            var j = p.render;
            return p = p.displayName, p || (p = j.displayName || j.name || "", p = p !== "" ? "ForwardRef(" + p + ")" : "ForwardRef"), p;
          case A:
            return j = p.displayName || null, j !== null ? j : e(p.type) || "Memo";
          case P:
            j = p._payload, p = p._init;
            try {
              return e(p(j));
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
        var j = !1;
      } catch {
        j = !0;
      }
      if (j) {
        j = console;
        var S = j.error, C = typeof Symbol == "function" && Symbol.toStringTag && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return S.call(
          j,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          C
        ), t(p);
      }
    }
    function n(p) {
      if (p === E) return "<>";
      if (typeof p == "object" && p !== null && p.$$typeof === P)
        return "<...>";
      try {
        var j = e(p);
        return j ? "<" + j + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var p = L.A;
      return p === null ? null : p.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(p) {
      if (q.call(p, "key")) {
        var j = Object.getOwnPropertyDescriptor(p, "key").get;
        if (j && j.isReactWarning) return !1;
      }
      return p.key !== void 0;
    }
    function l(p, j) {
      function S() {
        M || (M = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          j
        ));
      }
      S.isReactWarning = !0, Object.defineProperty(p, "key", {
        get: S,
        configurable: !0
      });
    }
    function d() {
      var p = e(this.type);
      return $[p] || ($[p] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), p = this.props.ref, p !== void 0 ? p : null;
    }
    function h(p, j, S, C, Z, B, oe, be) {
      return S = B.ref, p = {
        $$typeof: y,
        type: p,
        key: j,
        props: B,
        _owner: Z
      }, (S !== void 0 ? S : null) !== null ? Object.defineProperty(p, "ref", {
        enumerable: !1,
        get: d
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
        value: be
      }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
    }
    function f(p, j, S, C, Z, B, oe, be) {
      var ee = j.children;
      if (ee !== void 0)
        if (C)
          if (Y(ee)) {
            for (C = 0; C < ee.length; C++)
              m(ee[C]);
            Object.freeze && Object.freeze(ee);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(ee);
      if (q.call(j, "key")) {
        ee = e(p);
        var fe = Object.keys(j).filter(function(Ie) {
          return Ie !== "key";
        });
        C = 0 < fe.length ? "{key: someKey, " + fe.join(": ..., ") + ": ...}" : "{key: someKey}", V[ee + C] || (fe = 0 < fe.length ? "{" + fe.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          C,
          ee,
          fe,
          ee
        ), V[ee + C] = !0);
      }
      if (ee = null, S !== void 0 && (r(S), ee = "" + S), i(j) && (r(j.key), ee = "" + j.key), "key" in j) {
        S = {};
        for (var $e in j)
          $e !== "key" && (S[$e] = j[$e]);
      } else S = j;
      return ee && l(
        S,
        typeof p == "function" ? p.displayName || p.name || "Unknown" : p
      ), h(
        p,
        ee,
        B,
        Z,
        a(),
        S,
        oe,
        be
      );
    }
    function m(p) {
      typeof p == "object" && p !== null && p.$$typeof === y && p._store && (p._store.validated = 1);
    }
    var u = ae, y = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), v = Symbol.for("react.consumer"), N = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), G = Symbol.for("react.activity"), U = Symbol.for("react.client.reference"), L = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = Object.prototype.hasOwnProperty, Y = Array.isArray, ne = console.createTask ? console.createTask : function() {
      return null;
    };
    u = {
      react_stack_bottom_frame: function(p) {
        return p();
      }
    };
    var M, $ = {}, F = u.react_stack_bottom_frame.bind(
      u,
      s
    )(), k = ne(n(s)), V = {};
    Xe.Fragment = E, Xe.jsx = function(p, j, S, C, Z) {
      var B = 1e4 > L.recentlyCreatedOwnerStacks++;
      return f(
        p,
        j,
        S,
        !1,
        C,
        Z,
        B ? Error("react-stack-top-frame") : F,
        B ? ne(n(p)) : k
      );
    }, Xe.jsxs = function(p, j, S, C, Z) {
      var B = 1e4 > L.recentlyCreatedOwnerStacks++;
      return f(
        p,
        j,
        S,
        !0,
        C,
        Z,
        B ? Error("react-stack-top-frame") : F,
        B ? ne(n(p)) : k
      );
    };
  }()), Xe;
}
var Tr;
function _a() {
  return Tr || (Tr = 1, process.env.NODE_ENV === "production" ? mt.exports = Ea() : mt.exports = Sa()), mt.exports;
}
var o = _a(), Lt, Er;
function Aa() {
  if (Er) return Lt;
  Er = 1;
  function e(b) {
    this._maxSize = b, this.clear();
  }
  e.prototype.clear = function() {
    this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
  }, e.prototype.get = function(b) {
    return this._values[b];
  }, e.prototype.set = function(b, v) {
    return this._size >= this._maxSize && this.clear(), b in this._values || this._size++, this._values[b] = v;
  };
  var t = /[^.^\]^[]+|(?=\[\]|\.\.)/g, r = /^\d+$/, n = /^\d/, a = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, s = /^\s*(['"]?)(.*?)(\1)\s*$/, i = 512, l = new e(i), d = new e(i), h = new e(i);
  Lt = {
    Cache: e,
    split: m,
    normalizePath: f,
    setter: function(b) {
      var v = f(b);
      return d.get(b) || d.set(b, function(_, c) {
        for (var x = 0, A = v.length, P = _; x < A - 1; ) {
          var G = v[x];
          if (G === "__proto__" || G === "constructor" || G === "prototype")
            return _;
          P = P[v[x++]];
        }
        P[v[x]] = c;
      });
    },
    getter: function(b, v) {
      var N = f(b);
      return h.get(b) || h.set(b, function(c) {
        for (var x = 0, A = N.length; x < A; )
          if (c != null || !v) c = c[N[x++]];
          else return;
        return c;
      });
    },
    join: function(b) {
      return b.reduce(function(v, N) {
        return v + (y(N) || r.test(N) ? "[" + N + "]" : (v ? "." : "") + N);
      }, "");
    },
    forEach: function(b, v, N) {
      u(Array.isArray(b) ? b : m(b), v, N);
    }
  };
  function f(b) {
    return l.get(b) || l.set(
      b,
      m(b).map(function(v) {
        return v.replace(s, "$2");
      })
    );
  }
  function m(b) {
    return b.match(t) || [""];
  }
  function u(b, v, N) {
    var _ = b.length, c, x, A, P;
    for (x = 0; x < _; x++)
      c = b[x], c && (w(c) && (c = '"' + c + '"'), P = y(c), A = !P && /^\d+$/.test(c), v.call(N, c, P, A, x, b));
  }
  function y(b) {
    return typeof b == "string" && b && ["'", '"'].indexOf(b.charAt(0)) !== -1;
  }
  function T(b) {
    return b.match(n) && !b.match(r);
  }
  function E(b) {
    return a.test(b);
  }
  function w(b) {
    return !y(b) && (T(b) || E(b));
  }
  return Lt;
}
var De = Aa(), zt, Sr;
function Na() {
  if (Sr) return zt;
  Sr = 1;
  const e = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, t = (f) => f.match(e) || [], r = (f) => f[0].toUpperCase() + f.slice(1), n = (f, m) => t(f).join(m).toLowerCase(), a = (f) => t(f).reduce(
    (m, u) => `${m}${m ? u[0].toUpperCase() + u.slice(1).toLowerCase() : u.toLowerCase()}`,
    ""
  );
  return zt = {
    words: t,
    upperFirst: r,
    camelCase: a,
    pascalCase: (f) => r(a(f)),
    snakeCase: (f) => n(f, "_"),
    kebabCase: (f) => n(f, "-"),
    sentenceCase: (f) => r(n(f, " ")),
    titleCase: (f) => t(f).map(r).join(" ")
  }, zt;
}
var Vt = Na(), yt = { exports: {} }, _r;
function $a() {
  if (_r) return yt.exports;
  _r = 1, yt.exports = function(a) {
    return e(t(a), a);
  }, yt.exports.array = e;
  function e(a, s) {
    var i = a.length, l = new Array(i), d = {}, h = i, f = r(s), m = n(a);
    for (s.forEach(function(y) {
      if (!m.has(y[0]) || !m.has(y[1]))
        throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }); h--; )
      d[h] || u(a[h], h, /* @__PURE__ */ new Set());
    return l;
    function u(y, T, E) {
      if (E.has(y)) {
        var w;
        try {
          w = ", node was:" + JSON.stringify(y);
        } catch {
          w = "";
        }
        throw new Error("Cyclic dependency" + w);
      }
      if (!m.has(y))
        throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(y));
      if (!d[T]) {
        d[T] = !0;
        var b = f.get(y) || /* @__PURE__ */ new Set();
        if (b = Array.from(b), T = b.length) {
          E.add(y);
          do {
            var v = b[--T];
            u(v, m.get(v), E);
          } while (T);
          E.delete(y);
        }
        l[--i] = y;
      }
    }
  }
  function t(a) {
    for (var s = /* @__PURE__ */ new Set(), i = 0, l = a.length; i < l; i++) {
      var d = a[i];
      s.add(d[0]), s.add(d[1]);
    }
    return Array.from(s);
  }
  function r(a) {
    for (var s = /* @__PURE__ */ new Map(), i = 0, l = a.length; i < l; i++) {
      var d = a[i];
      s.has(d[0]) || s.set(d[0], /* @__PURE__ */ new Set()), s.has(d[1]) || s.set(d[1], /* @__PURE__ */ new Set()), s.get(d[0]).add(d[1]);
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
function Ae(e, t) {
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
      if (ce.isError(s)) {
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
class ce extends Error {
  static formatError(t, r) {
    const n = r.label || r.path || "this";
    return r = Object.assign({}, r, {
      path: n,
      originalPath: r.path
    }), typeof t == "string" ? t.replace(ka, (a, s) => Ae(r[s])) : typeof t == "function" ? t(r) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, r, n, a, s) {
    const i = new Nr(t, r, n, a);
    if (s)
      return i;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[wn] = "Error", this.name = i.name, this.message = i.message, this.type = i.type, this.value = i.value, this.path = i.path, this.errors = i.errors, this.inner = i.inner, Error.captureStackTrace && Error.captureStackTrace(this, ce);
  }
  static [vn](t) {
    return Nr[Symbol.hasInstance](t) || super[Symbol.hasInstance](t);
  }
}
let ve = {
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
}, La = {
  isValue: "${path} field must be ${value}"
}, wt = {
  noUnknown: "${path} field has unspecified keys: ${unknown}",
  exact: "${path} object contains unknown properties: ${properties}"
}, jt = {
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
      if (r.length < a) return `${t} tuple value has too few items, expected a length of ${a} but got ${r.length} for value: \`${Ae(r, !0)}\``;
      if (r.length > a) return `${t} tuple value has too many items, expected a length of ${a} but got ${r.length} for value: \`${Ae(r, !0)}\``;
    }
    return ce.formatError(ve.notType, e);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: ve,
  string: ue,
  number: Oe,
  date: Qt,
  object: wt,
  array: jt,
  boolean: La,
  tuple: za
});
const Ot = (e) => e && e.__isYupSchema__;
class _t {
  static fromOptions(t, r) {
    if (!r.then && !r.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: n,
      then: a,
      otherwise: s
    } = r, i = typeof n == "function" ? n : (...l) => l.every((d) => d === n);
    return new _t(t, (l, d) => {
      var h;
      let f = i(...l) ? a : s;
      return (h = f?.(d)) != null ? h : d;
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
function Ke(e) {
  function t({
    value: r,
    path: n = "",
    options: a,
    originalValue: s,
    schema: i
  }, l, d) {
    const {
      name: h,
      test: f,
      params: m,
      message: u,
      skipAbsent: y
    } = e;
    let {
      parent: T,
      context: E,
      abortEarly: w = i.spec.abortEarly,
      disableStackTrace: b = i.spec.disableStackTrace
    } = a;
    const v = {
      value: r,
      parent: T,
      context: E
    };
    function N(L = {}) {
      const q = jn(Object.assign({
        value: r,
        originalValue: s,
        label: i.spec.label,
        path: L.path || n,
        spec: i.spec,
        disableStackTrace: L.disableStackTrace || b
      }, m, L.params), v), Y = new ce(ce.formatError(L.message || u, q), r, q.path, L.type || h, q.disableStackTrace);
      return Y.params = q, Y;
    }
    const _ = w ? l : d;
    let c = {
      path: n,
      parent: T,
      type: h,
      from: a.from,
      createError: N,
      resolve(L) {
        return Tn(L, v);
      },
      options: a,
      originalValue: s,
      schema: i
    };
    const x = (L) => {
      ce.isError(L) ? _(L) : L ? d(null) : _(N());
    }, A = (L) => {
      ce.isError(L) ? _(L) : l(L);
    };
    if (y && _e(r))
      return x(!0);
    let G;
    try {
      var U;
      if (G = f.call(c, r, c), typeof ((U = G) == null ? void 0 : U.then) == "function") {
        if (a.sync)
          throw new Error(`Validation test of type: "${c.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(G).then(x, A);
      }
    } catch (L) {
      A(L);
      return;
    }
    x(G);
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
  return t ? (De.forEach(t, (l, d, h) => {
    let f = d ? l.slice(1, l.length - 1) : l;
    e = e.resolve({
      context: n,
      parent: a,
      value: r
    });
    let m = e.type === "tuple", u = h ? parseInt(f, 10) : 0;
    if (e.innerType || m) {
      if (m && !h) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${i}" must contain an index to the tuple element, e.g. "${i}[0]"`);
      if (r && u >= r.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${l}, in the path: ${t}. because there is no value at that index. `);
      a = r, r = r && r[u], e = m ? e.spec.types[u] : e.innerType;
    }
    if (!h) {
      if (!e.fields || !e.fields[f]) throw new Error(`The schema does not contain the path: ${t}. (failed at: ${i} which is a type: "${e.type}")`);
      a = r, r = r && r[f], e = e.fields[f];
    }
    s = f, i = d ? "[" + l + "]" : "." + l;
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
class me {
  constructor(t) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new At(), this._blacklist = new At(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(ve.notType);
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
    } = r, d = t;
    l || (d = this._cast(d, Object.assign({
      assert: !1
    }, r)));
    let h = [];
    for (let f of Object.values(this.internalTests))
      f && h.push(f);
    this.runTests({
      path: s,
      value: d,
      originalValue: i,
      options: r,
      tests: h
    }, n, (f) => {
      if (f.length)
        return a(f, d);
      this.runTests({
        path: s,
        value: d,
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
      path: d,
      options: h
    } = t, f = (E) => {
      a || (a = !0, r(E, i));
    }, m = (E) => {
      a || (a = !0, n(E, i));
    }, u = s.length, y = [];
    if (!u) return m([]);
    let T = {
      value: i,
      originalValue: l,
      path: d,
      options: h,
      schema: this
    };
    for (let E = 0; E < s.length; E++) {
      const w = s[E];
      w(T, f, function(v) {
        v && (Array.isArray(v) ? y.push(...v) : y.push(v)), --u <= 0 && m(y);
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
    const d = typeof l == "number";
    let h = n[l];
    const f = Object.assign({}, i, {
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
      [d ? "index" : "key"]: l,
      path: d || l.includes(".") ? `${a || ""}[${d ? l : `"${l}"`}]` : (a ? `${a}.` : "") + t
    });
    return (m, u, y) => this.resolve(f)._validate(h, f, u, y);
  }
  validate(t, r) {
    var n;
    let a = this.resolve(Object.assign({}, r, {
      value: t
    })), s = (n = r?.disableStackTrace) != null ? n : a.spec.disableStackTrace;
    return new Promise((i, l) => a._validate(t, r, (d, h) => {
      ce.isError(d) && (d.value = h), l(d);
    }, (d, h) => {
      d.length ? l(new ce(d, h, void 0, void 0, s)) : i(h);
    }));
  }
  validateSync(t, r) {
    var n;
    let a = this.resolve(Object.assign({}, r, {
      value: t
    })), s, i = (n = r?.disableStackTrace) != null ? n : a.spec.disableStackTrace;
    return a._validate(t, Object.assign({}, r, {
      sync: !0
    }), (l, d) => {
      throw ce.isError(l) && (l.value = d), l;
    }, (l, d) => {
      if (l.length) throw new ce(l, t, void 0, void 0, i);
      s = d;
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
  defined(t = ve.defined) {
    return this.optionality(!1, t);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(t = ve.notNull) {
    return this.nullability(!1, t);
  }
  required(t = ve.required) {
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
    }, r.message === void 0 && (r.message = ve.default), typeof r.test != "function") throw new TypeError("`test` is a required parameters");
    let n = this.clone(), a = Ke(r), s = r.exclusive || r.name && n.exclusiveTests[r.name] === !0;
    if (r.exclusive && !r.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return r.name && (n.exclusiveTests[r.name] = !!r.exclusive), n.tests = n.tests.filter((i) => !(i.OPTIONS.name === r.name && (s || i.OPTIONS.test === a.OPTIONS.test))), n.tests.push(a), n;
  }
  when(t, r) {
    !Array.isArray(t) && typeof t != "string" && (r = t, t = ".");
    let n = this.clone(), a = bn(t).map((s) => new Le(s));
    return a.forEach((s) => {
      s.isSibling && n.deps.push(s.key);
    }), n.conditions.push(typeof r == "function" ? new _t(a, r) : _t.fromOptions(a, r)), n;
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
  oneOf(t, r = ve.oneOf) {
    let n = this.clone();
    return t.forEach((a) => {
      n._whitelist.add(a), n._blacklist.delete(a);
    }), n.internalTests.whiteList = Ke({
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
  notOneOf(t, r = ve.notOneOf) {
    let n = this.clone();
    return t.forEach((a) => {
      n._blacklist.add(a), n._whitelist.delete(a);
    }), n.internalTests.blacklist = Ke({
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
      tests: r.tests.filter((d, h, f) => f.findIndex((m) => m.OPTIONS.name === d.OPTIONS.name) === h).map((d) => {
        const h = d.OPTIONS.params && t ? jn(Object.assign({}, d.OPTIONS.params), t) : d.OPTIONS.params;
        return {
          name: d.OPTIONS.name,
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
              issues: En(a)
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
  } = Va(this, t, r, n.context);
  return i[e](a && a[s], Object.assign({}, n, {
    parent: a,
    path: t
  }));
};
for (const e of ["equals", "is"]) me.prototype[e] = me.prototype.oneOf;
for (const e of ["not", "nope"]) me.prototype[e] = me.prototype.notOneOf;
const Ua = () => !0;
function Xt(e) {
  return new Sn(e);
}
class Sn extends me {
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
const Ya = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function Ka(e) {
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
let qa = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), Ha = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), Wa = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, Za = "^\\d{4}-\\d{2}-\\d{2}", Qa = "\\d{2}:\\d{2}:\\d{2}", Xa = "(([+-]\\d{2}(:?\\d{2})?)|Z)", Ja = new RegExp(`${Za}T${Qa}(\\.\\d+)?${Xa}$`), es = (e) => _e(e) || e === e.trim(), ts = {}.toString();
function et() {
  return new _n();
}
class _n extends me {
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
      message: t || ve.required,
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
    return this.matches(qa, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = ue.url) {
    return this.matches(Ha, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = ue.uuid) {
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
      test: es
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
et.prototype = _n.prototype;
let rs = (e) => e != +e;
function Tt() {
  return new An();
}
class An extends me {
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
Tt.prototype = An.prototype;
let Nn = /* @__PURE__ */ new Date(""), ns = (e) => Object.prototype.toString.call(e) === "[object Date]";
function lr() {
  return new lt();
}
class lt extends me {
  constructor() {
    super({
      type: "date",
      check(t) {
        return ns(t) && !isNaN(t.getTime());
      }
    }), this.withMutation(() => {
      this.transform((t, r) => !this.spec.coerce || this.isType(t) || t === null ? t : (t = Ka(t), isNaN(t) ? lt.INVALID_DATE : new Date(t)));
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
  let r = [], n = /* @__PURE__ */ new Set(), a = new Set(t.map(([i, l]) => `${i}-${l}`));
  function s(i, l) {
    let d = De.split(i)[0];
    n.add(d), a.has(`${l}-${d}`) || r.push([l, d]);
  }
  for (const i of Object.keys(e)) {
    let l = e[i];
    n.add(i), Le.isRef(l) && l.isSibling ? s(l.path, i) : Ot(l) && "deps" in l && l.deps.forEach((d) => s(d, i));
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
class Cn extends me {
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
    let s = this.fields, i = (n = r.stripUnknown) != null ? n : this.spec.noUnknown, l = [].concat(this._nodes, Object.keys(a).filter((m) => !this._nodes.includes(m))), d = {}, h = Object.assign({}, r, {
      parent: d,
      __validating: r.__validating || !1
    }), f = !1;
    for (const m of l) {
      let u = s[m], y = m in a, T = a[m];
      if (u) {
        let E;
        h.path = (r.path ? `${r.path}.` : "") + m, u = u.resolve({
          value: T,
          context: r.context,
          parent: d
        });
        let w = u instanceof me ? u.spec : void 0, b = w?.strict;
        if (w != null && w.strip) {
          f = f || m in a;
          continue;
        }
        E = !r.__validating || !b ? u.cast(T, h) : T, E !== void 0 && (d[m] = E);
      } else y && !i && (d[m] = T);
      (y !== m in d || d[m] !== T) && (f = !0);
    }
    return f ? d : a;
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
    }, ...s], r.__validating = !0, r.originalValue = i, super._validate(t, r, n, (d, h) => {
      if (!l || !Or(h)) {
        a(d, h);
        return;
      }
      i = i || h;
      let f = [];
      for (let m of this._nodes) {
        let u = this.fields[m];
        !u || Le.isRef(u) || f.push(u.asNestedTest({
          options: r,
          key: m,
          parent: h,
          parentPath: r.path,
          originalParent: i
        }));
      }
      this.runTests({
        tests: f,
        value: h,
        originalValue: i,
        options: r
      }, n, (m) => {
        a(m.sort(this._sortErrors).concat(d), h);
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
Fn.prototype = Cn.prototype;
function er(e) {
  return new In(e);
}
class In extends me {
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
      const d = this.innerType.cast(i, Object.assign({}, r, {
        path: `${r.path || ""}[${l}]`,
        parent: n,
        originalValue: i,
        value: i,
        index: l
      }));
      return d !== i && (a = !0), d;
    });
    return a ? s : n;
  }
  _validate(t, r = {}, n, a) {
    var s;
    let i = this.innerType, l = (s = r.recursive) != null ? s : this.spec.recursive;
    r.originalValue != null && r.originalValue, super._validate(t, r, n, (d, h) => {
      var f;
      if (!l || !i || !this._typeCheck(h)) {
        a(d, h);
        return;
      }
      let m = new Array(h.length);
      for (let y = 0; y < h.length; y++) {
        var u;
        m[y] = i.asNestedTest({
          options: r,
          index: y,
          parent: h,
          parentPath: r.path,
          originalParent: (u = r.originalValue) != null ? u : t
        });
      }
      this.runTests({
        value: h,
        tests: m,
        originalValue: (f = r.originalValue) != null ? f : t,
        options: r
      }, n, (y) => a(y.concat(d), h));
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
function Nt(e, t = "create") {
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
const pe = (e, t) => typeof e == "string" ? e.replace(
  /#(\w+)#/g,
  (r, n) => t[n] !== void 0 ? String(t[n]) : r
) : Array.isArray(e) ? e.map((r) => pe(r, t)) : e && typeof e == "object" ? Object.fromEntries(
  Object.entries(e).map(([r, n]) => [
    pe(r, t),
    pe(n, t)
  ])
) : e, Rn = (e) => {
  const t = Array.isArray(e?.data?.data) ? e.data.data[0] : Array.isArray(e?.data) ? e.data[0] : e?.data?.data ?? e?.data;
  return t && typeof t == "object" && !Array.isArray(t) ? t : null;
}, we = (e, t, r, n) => {
  if (!Array.isArray(r) || r.length === 0) return {};
  const a = n ?? (r[0] && typeof r[0] == "object" && "category" in r[0] ? "category" : void 0);
  if (!a) {
    const i = {};
    return r.forEach((l) => {
      const d = l[e], h = l[t];
      d != null && h != null && (i[String(d)] = String(h));
    }), i;
  }
  const s = {};
  return r.forEach((i) => {
    const l = i[a] ?? "Others", d = i[e], h = i[t];
    d == null || h == null || (s[l] || (s[l] = {}), s[l][String(d)] = String(h));
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
    i == null && (i = a.default), a.multiple === !0 || a.type === "checkbox" || a.type === "tags" ? t[s] = Array.isArray(i) ? i : typeof i == "string" ? i.split(",").map((d) => d.trim()).filter(Boolean) : [] : a.type === "json" ? t[s] = typeof i == "object" && i !== null ? JSON.stringify(i, null, 2) : i ?? "" : a.type === "date" ? t[s] = typeof i == "string" ? i.slice(0, 10) : "" : a.type === "time" ? typeof i == "string" ? i.includes("T") ? t[s] = i.slice(11, 16) : t[s] = i.slice(0, 5) : t[s] = "" : s === "blocked" || s === "blacklist" ? t[s] = String(i ?? "false") : t[s] = i ?? "";
    let l;
    a.type === "file" ? l = a.multiple ? er().of(Xt()) : Xt() : a.multiple === !0 || a.type === "checkbox" || a.type === "tags" ? l = er().of(et()) : a.type === "email" ? l = et().email("Invalid email") : a.type === "number" ? l = Tt().typeError("Must be a number") : a.type === "json" ? l = et().test("json", "Invalid JSON", (d) => {
      if (!d) return !0;
      try {
        return JSON.parse(d), !0;
      } catch {
        return !1;
      }
    }) : l = et(), a.required && (l = l.required(
      a.error_message || `${a.label || s} is required`
    )), a?.validate?.regex && typeof a.validate.regex == "string" && (l = l.matches(
      new RegExp(a?.validate?.regex),
      a?.error_message || "Invalid input format"
    )), a?.validate && Object.entries(a.validate).forEach(([d, h]) => {
      switch (d) {
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
          l = lr().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((f, m) => {
            if (typeof m == "string") {
              const u = m.replace(/-/g, "/"), [y, T, E] = u.split("/");
              if (y && T && E)
                return /* @__PURE__ */ new Date(`${E}-${T}-${y}`);
            }
            return f;
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
          l = Tt().typeError("Must be a decimal").transform((f, m) => {
            if (m == null || m === "") return;
            const u = Number(m);
            if (isNaN(u)) return f;
            if (typeof f == "number" && !isNaN(f)) {
              const y = Number(f);
              return Number.isInteger(y) ? Number(u.toFixed(y)) : u;
            }
            return u;
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
            (f) => f && f.toUpperCase()
          );
          break;
        case "lower":
          l = l.transform(
            (f) => f && f.toLowerCase()
          );
          break;
        case "length-min": {
          const f = Number(h);
          isNaN(f) || (l = l.min(f, `Minimum length is ${f}`));
          break;
        }
        case "length-max": {
          const f = Number(h);
          isNaN(f) || (l = l.max(f, `Maximum length is ${f}`));
          break;
        }
      }
    }), r[s] = l;
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
async function tt(e, t, r, n = void 0, a = void 0, s = {}) {
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
const je = (e) => {
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
}, Pn = "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg";
function dt({ field: e, data: t, methods: r = {}, sqlOpsUrls: n, refid: a, module_refid: s }) {
  const i = e?.name, l = `
    text-sm text-gray-600 break-words
  `, d = `
    block text-sm font-semibold  transition-all duration-300 text-gray-700 capitalize
  `, [h, f] = re(
    e.options ?? {}
  ), m = ae.useMemo(
    () => gs(h),
    [h]
  );
  ae.useEffect(() => {
    let w = !0, b = e.valueKey ?? "value", v = e.labelKey ?? "title";
    return (async () => {
      if (e?.options) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const P = Object.values(e.options);
          if (P.length && typeof P[0] == "string") {
            f(e.options);
            return;
          }
        }
        const x = (Array.isArray(e.options) ? e.options : [e.options]).map(je), A = we(
          b,
          v,
          x,
          e.groupKey
          // auto-uses `category` if present
        );
        f(A);
        return;
      }
      const _ = e?.source ?? {};
      if (e.type === "dataMethod") {
        const c = e.method, x = c ? r[c] : void 0;
        if (x)
          try {
            const A = await Promise.resolve(x()), P = Array.isArray(A?.data?.data) ? A.data.data : Array.isArray(A?.data) ? A.data : A, G = Array.isArray(P) ? P.map(je) : [], U = we(b, v, G, e.groupKey);
            w && f(U);
          } catch (A) {
            console.error("Method execution failed:", A), w && f({});
          }
        else
          w && f({});
      }
      if (_.type === "api" && _.url)
        try {
          const c = await Q({
            method: _.method || "GET",
            url: _.url,
            data: _.body ?? {},
            params: _.params ?? {},
            headers: _.headers ?? {}
          }), x = Array.isArray(c?.data?.data) ? c.data.data : Array.isArray(c?.data) ? c.data : c, A = Array.isArray(x) ? x.map(je) : [], P = we(b, v, A, e.groupKey);
          w && f(P);
        } catch (c) {
          console.error("API execution failed:", c), w && f({});
        }
      if (e.table || e.type === "dataSelector" || e.queryid) {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let c;
          if (e.type === "dataSelector")
            c = {
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
            c = {
              table: e.table,
              cols: e.columns,
              where: e.where ? a ? pe(e.where, { refid: a }) : e.where : void 0
            };
          }
          const x = await tt(n, c, e?.queryid, s), A = Array.isArray(x?.data?.data) ? x.data.data : Array.isArray(x?.data) ? x.data : x, P = Array.isArray(A) ? A.map(je) : [], G = we(b, v, P, e.groupKey);
          w && f(G);
        } catch (c) {
          console.error("API fetch failed:", c);
        }
      }
    })(), () => {
      w = !1;
    };
  }, [
    e.options,
    e.source,
    e.table,
    e.columns,
    e.where,
    a
  ]);
  const u = typeof i == "string" ? t?.[i] : void 0, y = typeof u == "string" ? e.type === "date" ? u.split("T")[0] : e.type === "time" ? u.includes("T") ? u.slice(11, 16) : u.slice(0, 5) : Cr(u, m) : Cr(u, m), T = typeof i == "string" && (i.toLowerCase().includes("avatar") || i.toLowerCase().includes("logo")), E = y == null ? "" : typeof y == "string" || typeof y == "number" ? y : JSON.stringify(y);
  return /* @__PURE__ */ o.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ o.jsx("label", { className: d, children: e?.label }),
    /* @__PURE__ */ o.jsx("div", { className: "relative", children: T ? /* @__PURE__ */ o.jsx(
      "img",
      {
        src: String(y),
        alt: "avatar",
        className: "w-16 h-16 rounded-full object-cover border",
        onError: (w) => {
          const b = w.currentTarget;
          b.onerror = null, b.src = Pn;
        }
      }
    ) : /* @__PURE__ */ o.jsx("p", { className: l, children: E }) })
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
  const [i, l] = ae.useState(null);
  return ae.useEffect(() => {
    let d = !1;
    return (async () => {
      const f = e?.config;
      if (!f?.type) {
        d || l(null);
        return;
      }
      if (f.type === "method") {
        const m = f.method, u = m ? t[m] : void 0;
        if (u)
          try {
            const y = await Promise.resolve(u());
            d || l(y || null);
          } catch (y) {
            console.error("Method execution failed:", y), d || l(null);
          }
        else
          d || l(null);
      }
      if (f.type === "api")
        try {
          const m = await Q({
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
          d || l(m.data || null);
        } catch (m) {
          console.error("API fetch failed:", m), d || l(null);
        }
      if (f.type === "sql" && a && a != "0" || f?.dbopsid) {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let m = !1, u;
          f?.dbopsid && (m = !0, u = f?.dbopsid);
          const y = await Q({
            method: "GET",
            url: n.baseURL + n.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          });
          if (!m) {
            let w = {
              ...f
            };
            f.where && (w = {
              ...f,
              where: pe(f.where, {
                refid: a
              })
            }), u = (await Q({
              method: "POST",
              url: n.baseURL + n.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: w,
                fields: Nt(f.fields, n.operation),
                forcefill: f.forcefill,
                datahash: y.data.refhash,
                srcid: s
              },
              headers: {
                Authorization: `Bearer ${n?.accessToken}`
              }
            }))?.data.refid;
          }
          const T = await Q({
            method: "POST",
            url: n.baseURL + n.dbopsFetch,
            data: {
              refid: u,
              datahash: y.data.refhash
            },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }), E = Rn(T);
          d || l(E);
        } catch (m) {
          console.error("API fetch failed:", m);
        }
      }
    })(), () => {
      d = !0;
    };
  }, [
    e?.config?.type || "",
    e?.config?.method || "",
    e?.config?.url || "",
    JSON.stringify(e?.config?.params || {}),
    JSON.stringify(e?.config?.body || {}),
    JSON.stringify(e?.config?.headers || {})
  ]), /* @__PURE__ */ o.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ o.jsx("div", { className: "grid grid-cols-12 gap-2", children: i ? Object.keys(i).map((d, h) => /* @__PURE__ */ o.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${ct[ut(e.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ o.jsx(
        dt,
        {
          field: { name: d, label: d },
          data: i ?? {},
          methods: t,
          refid: a,
          ...n ? { sqlOpsUrls: n } : {}
        },
        d
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
function $t(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? st(_s(e), e, t) : e;
}
function As(e, t, r) {
  return e.concat(t).map(function(n) {
    return $t(n, r);
  });
}
function Ns(e, t, r) {
  var n = {};
  return r.isMergeableObject(e) && Object.keys(e).forEach(function(a) {
    n[a] = $t(e[a], r);
  }), Object.keys(t).forEach(function(a) {
    !r.isMergeableObject(t[a]) || !e[a] ? n[a] = $t(t[a], r) : n[a] = st(e[a], t[a], r);
  }), n;
}
function st(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || As, r.isMergeableObject = r.isMergeableObject || vs;
  var n = Array.isArray(t), a = Array.isArray(e), s = n === a;
  return s ? n ? r.arrayMerge(e, t, r) : Ns(e, t, r) : $t(t, r);
}
st.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(n, a) {
    return st(n, a, r);
  }, {});
};
var rr = st, Dn = typeof global == "object" && global && global.Object === Object && global, $s = typeof self == "object" && self && self.Object === Object && self, Te = Dn || $s || Function("return this")(), Fe = Te.Symbol, Mn = Object.prototype, Os = Mn.hasOwnProperty, Fs = Mn.toString, Je = Fe ? Fe.toStringTag : void 0;
function Cs(e) {
  var t = Os.call(e, Je), r = e[Je];
  try {
    e[Je] = void 0;
    var n = !0;
  } catch {
  }
  var a = Fs.call(e);
  return n && (t ? e[Je] = r : delete e[Je]), a;
}
var Is = Object.prototype, Rs = Is.toString;
function Ps(e) {
  return Rs.call(e);
}
var Ds = "[object Null]", Ms = "[object Undefined]", Rr = Fe ? Fe.toStringTag : void 0;
function ze(e) {
  return e == null ? e === void 0 ? Ms : Ds : Rr && Rr in Object(e) ? Cs(e) : Ps(e);
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
var ks = "[object Object]", Ls = Function.prototype, zs = Object.prototype, Ln = Ls.toString, Vs = zs.hasOwnProperty, Bs = Ln.call(Object);
function Pr(e) {
  if (!Ve(e) || ze(e) != ks)
    return !1;
  var t = ur(e);
  if (t === null)
    return !0;
  var r = Vs.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Ln.call(r) == Bs;
}
function Gs() {
  this.__data__ = [], this.size = 0;
}
function zn(e, t) {
  return e === t || e !== e && t !== t;
}
function Ft(e, t) {
  for (var r = e.length; r--; )
    if (zn(e[r][0], t))
      return r;
  return -1;
}
var Us = Array.prototype, Ys = Us.splice;
function Ks(e) {
  var t = this.__data__, r = Ft(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Ys.call(t, r, 1), --this.size, !0;
}
function qs(e) {
  var t = this.__data__, r = Ft(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Hs(e) {
  return Ft(this.__data__, e) > -1;
}
function Ws(e, t) {
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
Ne.prototype.clear = Gs;
Ne.prototype.delete = Ks;
Ne.prototype.get = qs;
Ne.prototype.has = Hs;
Ne.prototype.set = Ws;
function Zs() {
  this.__data__ = new Ne(), this.size = 0;
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
function ft(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ei = "[object AsyncFunction]", ti = "[object Function]", ri = "[object GeneratorFunction]", ni = "[object Proxy]";
function Vn(e) {
  if (!ft(e))
    return !1;
  var t = ze(e);
  return t == ti || t == ri || t == ei || t == ni;
}
var Bt = Te["__core-js_shared__"], Dr = function() {
  var e = /[^.]+$/.exec(Bt && Bt.keys && Bt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ai(e) {
  return !!Dr && Dr in e;
}
var si = Function.prototype, ii = si.toString;
function Be(e) {
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
  if (!ft(e) || ai(e))
    return !1;
  var t = Vn(e) ? hi : li;
  return t.test(Be(e));
}
function mi(e, t) {
  return e?.[t];
}
function Ge(e, t) {
  var r = mi(e, t);
  return pi(r) ? r : void 0;
}
var it = Ge(Te, "Map"), ot = Ge(Object, "create");
function yi() {
  this.__data__ = ot ? ot(null) : {}, this.size = 0;
}
function gi(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var bi = "__lodash_hash_undefined__", xi = Object.prototype, vi = xi.hasOwnProperty;
function wi(e) {
  var t = this.__data__;
  if (ot) {
    var r = t[e];
    return r === bi ? void 0 : r;
  }
  return vi.call(t, e) ? t[e] : void 0;
}
var ji = Object.prototype, Ti = ji.hasOwnProperty;
function Ei(e) {
  var t = this.__data__;
  return ot ? t[e] !== void 0 : Ti.call(t, e);
}
var Si = "__lodash_hash_undefined__";
function _i(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ot && t === void 0 ? Si : t, this;
}
function ke(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ke.prototype.clear = yi;
ke.prototype.delete = gi;
ke.prototype.get = wi;
ke.prototype.has = Ei;
ke.prototype.set = _i;
function Ai() {
  this.size = 0, this.__data__ = {
    hash: new ke(),
    map: new (it || Ne)(),
    string: new ke()
  };
}
function Ni(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ct(e, t) {
  var r = e.__data__;
  return Ni(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function $i(e) {
  var t = Ct(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Oi(e) {
  return Ct(this, e).get(e);
}
function Fi(e) {
  return Ct(this, e).has(e);
}
function Ci(e, t) {
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
Ce.prototype.clear = Ai;
Ce.prototype.delete = $i;
Ce.prototype.get = Oi;
Ce.prototype.has = Fi;
Ce.prototype.set = Ci;
var Ii = 200;
function Ri(e, t) {
  var r = this.__data__;
  if (r instanceof Ne) {
    var n = r.__data__;
    if (!it || n.length < Ii - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Ce(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Ze(e) {
  var t = this.__data__ = new Ne(e);
  this.size = t.size;
}
Ze.prototype.clear = Zs;
Ze.prototype.delete = Qs;
Ze.prototype.get = Xs;
Ze.prototype.has = Js;
Ze.prototype.set = Ri;
function Pi(e, t) {
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
var Di = Object.prototype, Mi = Di.hasOwnProperty;
function Gn(e, t, r) {
  var n = e[t];
  (!(Mi.call(e, t) && zn(n, r)) || r === void 0 && !(t in e)) && Bn(e, t, r);
}
function It(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var s = -1, i = t.length; ++s < i; ) {
    var l = t[s], d = void 0;
    d === void 0 && (d = e[l]), a ? Bn(r, l, d) : Gn(r, l, d);
  }
  return r;
}
function ki(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Li = "[object Arguments]";
function kr(e) {
  return Ve(e) && ze(e) == Li;
}
var Un = Object.prototype, zi = Un.hasOwnProperty, Vi = Un.propertyIsEnumerable, Bi = kr(/* @__PURE__ */ function() {
  return arguments;
}()) ? kr : function(e) {
  return Ve(e) && zi.call(e, "callee") && !Vi.call(e, "callee");
}, ht = Array.isArray;
function Gi() {
  return !1;
}
var Yn = typeof exports == "object" && exports && !exports.nodeType && exports, Lr = Yn && typeof module == "object" && module && !module.nodeType && module, Ui = Lr && Lr.exports === Yn, zr = Ui ? Te.Buffer : void 0, Yi = zr ? zr.isBuffer : void 0, Kn = Yi || Gi, Ki = 9007199254740991, qi = /^(?:0|[1-9]\d*)$/;
function Hi(e, t) {
  var r = typeof e;
  return t = t ?? Ki, !!t && (r == "number" || r != "symbol" && qi.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Wi = 9007199254740991;
function qn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Wi;
}
var Zi = "[object Arguments]", Qi = "[object Array]", Xi = "[object Boolean]", Ji = "[object Date]", eo = "[object Error]", to = "[object Function]", ro = "[object Map]", no = "[object Number]", ao = "[object Object]", so = "[object RegExp]", io = "[object Set]", oo = "[object String]", lo = "[object WeakMap]", co = "[object ArrayBuffer]", uo = "[object DataView]", fo = "[object Float32Array]", ho = "[object Float64Array]", po = "[object Int8Array]", mo = "[object Int16Array]", yo = "[object Int32Array]", go = "[object Uint8Array]", bo = "[object Uint8ClampedArray]", xo = "[object Uint16Array]", vo = "[object Uint32Array]", J = {};
J[fo] = J[ho] = J[po] = J[mo] = J[yo] = J[go] = J[bo] = J[xo] = J[vo] = !0;
J[Zi] = J[Qi] = J[co] = J[Xi] = J[uo] = J[Ji] = J[eo] = J[to] = J[ro] = J[no] = J[ao] = J[so] = J[io] = J[oo] = J[lo] = !1;
function wo(e) {
  return Ve(e) && qn(e.length) && !!J[ze(e)];
}
function dr(e) {
  return function(t) {
    return e(t);
  };
}
var Hn = typeof exports == "object" && exports && !exports.nodeType && exports, rt = Hn && typeof module == "object" && module && !module.nodeType && module, jo = rt && rt.exports === Hn, Gt = jo && Dn.process, We = function() {
  try {
    var e = rt && rt.require && rt.require("util").types;
    return e || Gt && Gt.binding && Gt.binding("util");
  } catch {
  }
}(), Vr = We && We.isTypedArray, To = Vr ? dr(Vr) : wo, Eo = Object.prototype, So = Eo.hasOwnProperty;
function Wn(e, t) {
  var r = ht(e), n = !r && Bi(e), a = !r && !n && Kn(e), s = !r && !n && !a && To(e), i = r || n || a || s, l = i ? ki(e.length, String) : [], d = l.length;
  for (var h in e)
    (t || So.call(e, h)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
    Hi(h, d))) && l.push(h);
  return l;
}
var _o = Object.prototype;
function fr(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || _o;
  return e === r;
}
var Ao = kn(Object.keys, Object), No = Object.prototype, $o = No.hasOwnProperty;
function Oo(e) {
  if (!fr(e))
    return Ao(e);
  var t = [];
  for (var r in Object(e))
    $o.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function Zn(e) {
  return e != null && qn(e.length) && !Vn(e);
}
function hr(e) {
  return Zn(e) ? Wn(e) : Oo(e);
}
function Fo(e, t) {
  return e && It(t, hr(t), e);
}
function Co(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Io = Object.prototype, Ro = Io.hasOwnProperty;
function Po(e) {
  if (!ft(e))
    return Co(e);
  var t = fr(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Ro.call(e, n)) || r.push(n);
  return r;
}
function pr(e) {
  return Zn(e) ? Wn(e, !0) : Po(e);
}
function Do(e, t) {
  return e && It(t, pr(t), e);
}
var Qn = typeof exports == "object" && exports && !exports.nodeType && exports, Br = Qn && typeof module == "object" && module && !module.nodeType && module, Mo = Br && Br.exports === Qn, Gr = Mo ? Te.Buffer : void 0, Ur = Gr ? Gr.allocUnsafe : void 0;
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
var zo = Object.prototype, Vo = zo.propertyIsEnumerable, Yr = Object.getOwnPropertySymbols, mr = Yr ? function(e) {
  return e == null ? [] : (e = Object(e), Lo(Yr(e), function(t) {
    return Vo.call(e, t);
  }));
} : Jn;
function Bo(e, t) {
  return It(e, mr(e), t);
}
function ea(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var Go = Object.getOwnPropertySymbols, ta = Go ? function(e) {
  for (var t = []; e; )
    ea(t, mr(e)), e = ur(e);
  return t;
} : Jn;
function Uo(e, t) {
  return It(e, ta(e), t);
}
function ra(e, t, r) {
  var n = t(e);
  return ht(e) ? n : ea(n, r(e));
}
function Yo(e) {
  return ra(e, hr, mr);
}
function Ko(e) {
  return ra(e, pr, ta);
}
var nr = Ge(Te, "DataView"), ar = Ge(Te, "Promise"), sr = Ge(Te, "Set"), ir = Ge(Te, "WeakMap"), Kr = "[object Map]", qo = "[object Object]", qr = "[object Promise]", Hr = "[object Set]", Wr = "[object WeakMap]", Zr = "[object DataView]", Ho = Be(nr), Wo = Be(it), Zo = Be(ar), Qo = Be(sr), Xo = Be(ir), Se = ze;
(nr && Se(new nr(new ArrayBuffer(1))) != Zr || it && Se(new it()) != Kr || ar && Se(ar.resolve()) != qr || sr && Se(new sr()) != Hr || ir && Se(new ir()) != Wr) && (Se = function(e) {
  var t = ze(e), r = t == qo ? e.constructor : void 0, n = r ? Be(r) : "";
  if (n)
    switch (n) {
      case Ho:
        return Zr;
      case Wo:
        return Kr;
      case Zo:
        return qr;
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
var Qr = Te.Uint8Array;
function yr(e) {
  var t = new e.constructor(e.byteLength);
  return new Qr(t).set(new Qr(e)), t;
}
function rl(e, t) {
  var r = t ? yr(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var nl = /\w*$/;
function al(e) {
  var t = new e.constructor(e.source, nl.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Xr = Fe ? Fe.prototype : void 0, Jr = Xr ? Xr.valueOf : void 0;
function sl(e) {
  return Jr ? Object(Jr.call(e)) : {};
}
function il(e, t) {
  var r = t ? yr(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var ol = "[object Boolean]", ll = "[object Date]", cl = "[object Map]", ul = "[object Number]", dl = "[object RegExp]", fl = "[object Set]", hl = "[object String]", pl = "[object Symbol]", ml = "[object ArrayBuffer]", yl = "[object DataView]", gl = "[object Float32Array]", bl = "[object Float64Array]", xl = "[object Int8Array]", vl = "[object Int16Array]", wl = "[object Int32Array]", jl = "[object Uint8Array]", Tl = "[object Uint8ClampedArray]", El = "[object Uint16Array]", Sl = "[object Uint32Array]";
function _l(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case ml:
      return yr(e);
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
var en = Object.create, Al = /* @__PURE__ */ function() {
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
function Nl(e) {
  return typeof e.constructor == "function" && !fr(e) ? Al(ur(e)) : {};
}
var $l = "[object Map]";
function Ol(e) {
  return Ve(e) && Se(e) == $l;
}
var tn = We && We.isMap, Fl = tn ? dr(tn) : Ol, Cl = "[object Set]";
function Il(e) {
  return Ve(e) && Se(e) == Cl;
}
var rn = We && We.isSet, Rl = rn ? dr(rn) : Il, Pl = 1, Dl = 2, Ml = 4, na = "[object Arguments]", kl = "[object Array]", Ll = "[object Boolean]", zl = "[object Date]", Vl = "[object Error]", aa = "[object Function]", Bl = "[object GeneratorFunction]", Gl = "[object Map]", Ul = "[object Number]", sa = "[object Object]", Yl = "[object RegExp]", Kl = "[object Set]", ql = "[object String]", Hl = "[object Symbol]", Wl = "[object WeakMap]", Zl = "[object ArrayBuffer]", Ql = "[object DataView]", Xl = "[object Float32Array]", Jl = "[object Float64Array]", ec = "[object Int8Array]", tc = "[object Int16Array]", rc = "[object Int32Array]", nc = "[object Uint8Array]", ac = "[object Uint8ClampedArray]", sc = "[object Uint16Array]", ic = "[object Uint32Array]", X = {};
X[na] = X[kl] = X[Zl] = X[Ql] = X[Ll] = X[zl] = X[Xl] = X[Jl] = X[ec] = X[tc] = X[rc] = X[Gl] = X[Ul] = X[sa] = X[Yl] = X[Kl] = X[ql] = X[Hl] = X[nc] = X[ac] = X[sc] = X[ic] = !0;
X[Vl] = X[aa] = X[Wl] = !1;
function nt(e, t, r, n, a, s) {
  var i, l = t & Pl, d = t & Dl, h = t & Ml;
  if (i !== void 0)
    return i;
  if (!ft(e))
    return e;
  var f = ht(e);
  if (f) {
    if (i = tl(e), !l)
      return Xn(e, i);
  } else {
    var m = Se(e), u = m == aa || m == Bl;
    if (Kn(e))
      return ko(e, l);
    if (m == sa || m == na || u && !a) {
      if (i = d || u ? {} : Nl(e), !l)
        return d ? Uo(e, Do(i, e)) : Bo(e, Fo(i, e));
    } else {
      if (!X[m])
        return a ? e : {};
      i = _l(e, m, l);
    }
  }
  s || (s = new Ze());
  var y = s.get(e);
  if (y)
    return y;
  s.set(e, i), Rl(e) ? e.forEach(function(w) {
    i.add(nt(w, t, r, w, e, s));
  }) : Fl(e) && e.forEach(function(w, b) {
    i.set(b, nt(w, t, r, b, e, s));
  });
  var T = h ? d ? Ko : Yo : d ? pr : hr, E = f ? void 0 : T(e);
  return Pi(E || e, function(w, b) {
    E && (b = w, w = e[b]), Gn(i, b, nt(w, t, r, b, e, s));
  }), i;
}
var oc = 1, lc = 4;
function bt(e) {
  return nt(e, oc | lc);
}
var Ut, nn;
function cc() {
  if (nn) return Ut;
  nn = 1;
  var e = Array.isArray, t = Object.keys, r = Object.prototype.hasOwnProperty, n = typeof Element < "u";
  function a(s, i) {
    if (s === i) return !0;
    if (s && i && typeof s == "object" && typeof i == "object") {
      var l = e(s), d = e(i), h, f, m;
      if (l && d) {
        if (f = s.length, f != i.length) return !1;
        for (h = f; h-- !== 0; )
          if (!a(s[h], i[h])) return !1;
        return !0;
      }
      if (l != d) return !1;
      var u = s instanceof Date, y = i instanceof Date;
      if (u != y) return !1;
      if (u && y) return s.getTime() == i.getTime();
      var T = s instanceof RegExp, E = i instanceof RegExp;
      if (T != E) return !1;
      if (T && E) return s.toString() == i.toString();
      var w = t(s);
      if (f = w.length, f !== t(i).length)
        return !1;
      for (h = f; h-- !== 0; )
        if (!r.call(i, w[h])) return !1;
      if (n && s instanceof Element && i instanceof Element)
        return s === i;
      for (h = f; h-- !== 0; )
        if (m = w[h], !(m === "_owner" && s.$$typeof) && !a(s[m], i[m]))
          return !1;
      return !0;
    }
    return s !== s && i !== i;
  }
  return Ut = function(i, l) {
    try {
      return a(i, l);
    } catch (d) {
      if (d.message && d.message.match(/stack|recursion/i) || d.number === -2146828260)
        return console.warn("Warning: react-fast-compare does not handle circular references.", d.name, d.message), !1;
      throw d;
    }
  }, Ut;
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
function an(e) {
  return nt(e, fc);
}
function ia(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var hc = "[object Symbol]";
function gr(e) {
  return typeof e == "symbol" || Ve(e) && ze(e) == hc;
}
var pc = "Expected a function";
function br(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(pc);
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
var mc = 500;
function yc(e) {
  var t = br(e, function(n) {
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
function wc(e) {
  return e == null ? "" : oa(e);
}
function la(e) {
  return ht(e) ? ia(e, vc) : gr(e) ? [e] : Xn(xc(wc(e)));
}
var xt = { exports: {} }, H = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ln;
function jc() {
  if (ln) return H;
  ln = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, u = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, T = e ? Symbol.for("react.lazy") : 60116, E = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, v = e ? Symbol.for("react.scope") : 60119;
  function N(c) {
    if (typeof c == "object" && c !== null) {
      var x = c.$$typeof;
      switch (x) {
        case t:
          switch (c = c.type, c) {
            case d:
            case h:
            case n:
            case s:
            case a:
            case m:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case l:
                case f:
                case T:
                case y:
                case i:
                  return c;
                default:
                  return x;
              }
          }
        case r:
          return x;
      }
    }
  }
  function _(c) {
    return N(c) === h;
  }
  return H.AsyncMode = d, H.ConcurrentMode = h, H.ContextConsumer = l, H.ContextProvider = i, H.Element = t, H.ForwardRef = f, H.Fragment = n, H.Lazy = T, H.Memo = y, H.Portal = r, H.Profiler = s, H.StrictMode = a, H.Suspense = m, H.isAsyncMode = function(c) {
    return _(c) || N(c) === d;
  }, H.isConcurrentMode = _, H.isContextConsumer = function(c) {
    return N(c) === l;
  }, H.isContextProvider = function(c) {
    return N(c) === i;
  }, H.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === t;
  }, H.isForwardRef = function(c) {
    return N(c) === f;
  }, H.isFragment = function(c) {
    return N(c) === n;
  }, H.isLazy = function(c) {
    return N(c) === T;
  }, H.isMemo = function(c) {
    return N(c) === y;
  }, H.isPortal = function(c) {
    return N(c) === r;
  }, H.isProfiler = function(c) {
    return N(c) === s;
  }, H.isStrictMode = function(c) {
    return N(c) === a;
  }, H.isSuspense = function(c) {
    return N(c) === m;
  }, H.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === n || c === h || c === s || c === a || c === m || c === u || typeof c == "object" && c !== null && (c.$$typeof === T || c.$$typeof === y || c.$$typeof === i || c.$$typeof === l || c.$$typeof === f || c.$$typeof === w || c.$$typeof === b || c.$$typeof === v || c.$$typeof === E);
  }, H.typeOf = N, H;
}
var W = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cn;
function Tc() {
  return cn || (cn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, u = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, T = e ? Symbol.for("react.lazy") : 60116, E = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, v = e ? Symbol.for("react.scope") : 60119;
    function N(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === n || R === h || R === s || R === a || R === m || R === u || typeof R == "object" && R !== null && (R.$$typeof === T || R.$$typeof === y || R.$$typeof === i || R.$$typeof === l || R.$$typeof === f || R.$$typeof === w || R.$$typeof === b || R.$$typeof === v || R.$$typeof === E);
    }
    function _(R) {
      if (typeof R == "object" && R !== null) {
        var Ue = R.$$typeof;
        switch (Ue) {
          case t:
            var Ye = R.type;
            switch (Ye) {
              case d:
              case h:
              case n:
              case s:
              case a:
              case m:
                return Ye;
              default:
                var pt = Ye && Ye.$$typeof;
                switch (pt) {
                  case l:
                  case f:
                  case T:
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
    var c = d, x = h, A = l, P = i, G = t, U = f, L = n, q = T, Y = y, ne = r, M = s, $ = a, F = m, k = !1;
    function V(R) {
      return k || (k = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), p(R) || _(R) === d;
    }
    function p(R) {
      return _(R) === h;
    }
    function j(R) {
      return _(R) === l;
    }
    function S(R) {
      return _(R) === i;
    }
    function C(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function Z(R) {
      return _(R) === f;
    }
    function B(R) {
      return _(R) === n;
    }
    function oe(R) {
      return _(R) === T;
    }
    function be(R) {
      return _(R) === y;
    }
    function ee(R) {
      return _(R) === r;
    }
    function fe(R) {
      return _(R) === s;
    }
    function $e(R) {
      return _(R) === a;
    }
    function Ie(R) {
      return _(R) === m;
    }
    W.AsyncMode = c, W.ConcurrentMode = x, W.ContextConsumer = A, W.ContextProvider = P, W.Element = G, W.ForwardRef = U, W.Fragment = L, W.Lazy = q, W.Memo = Y, W.Portal = ne, W.Profiler = M, W.StrictMode = $, W.Suspense = F, W.isAsyncMode = V, W.isConcurrentMode = p, W.isContextConsumer = j, W.isContextProvider = S, W.isElement = C, W.isForwardRef = Z, W.isFragment = B, W.isLazy = oe, W.isMemo = be, W.isPortal = ee, W.isProfiler = fe, W.isStrictMode = $e, W.isSuspense = Ie, W.isValidElementType = N, W.typeOf = _;
  }()), W;
}
var un;
function Ec() {
  return un || (un = 1, process.env.NODE_ENV === "production" ? xt.exports = jc() : xt.exports = Tc()), xt.exports;
}
var Yt, dn;
function Sc() {
  if (dn) return Yt;
  dn = 1;
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
  function i(T) {
    return e.isMemo(T) ? a : s[T.$$typeof] || t;
  }
  var l = Object.defineProperty, d = Object.getOwnPropertyNames, h = Object.getOwnPropertySymbols, f = Object.getOwnPropertyDescriptor, m = Object.getPrototypeOf, u = Object.prototype;
  function y(T, E, w) {
    if (typeof E != "string") {
      if (u) {
        var b = m(E);
        b && b !== u && y(T, b, w);
      }
      var v = d(E);
      h && (v = v.concat(h(E)));
      for (var N = i(T), _ = i(E), c = 0; c < v.length; ++c) {
        var x = v[c];
        if (!r[x] && !(w && w[x]) && !(_ && _[x]) && !(N && N[x])) {
          var A = f(E, x);
          try {
            l(T, x, A);
          } catch {
          }
        }
      }
    }
    return T;
  }
  return Yt = y, Yt;
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
var Rt = /* @__PURE__ */ xa(void 0);
Rt.displayName = "FormikContext";
Rt.Provider;
Rt.Consumer;
function _c() {
  var e = ja(Rt);
  return e || (process.env.NODE_ENV !== "production" ? He(!1, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.") : He()), e;
}
var ge = function(t) {
  return typeof t == "function";
}, Pt = function(t) {
  return t !== null && typeof t == "object";
}, Ac = function(t) {
  return String(Math.floor(Number(t))) === t;
}, Kt = function(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}, qt = function(t) {
  return Pt(t) && ge(t.then);
};
function Nc(e) {
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
  for (var a = la(t); e && n < a.length; )
    e = e[a[n++]];
  return n !== a.length && !e || e === void 0 ? r : e;
}
function Me(e, t, r) {
  for (var n = an(e), a = n, s = 0, i = la(t); s < i.length - 1; s++) {
    var l = i[s], d = de(e, i.slice(0, s + 1));
    if (d && (Pt(d) || Array.isArray(d)))
      a = a[l] = an(d);
    else {
      var h = i[s + 1];
      a = a[l] = Ac(h) && Number(h) >= 0 ? [] : {};
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
function $c(e, t) {
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
function Oc(e) {
  var t = e.validateOnChange, r = t === void 0 ? !0 : t, n = e.validateOnBlur, a = n === void 0 ? !0 : n, s = e.validateOnMount, i = s === void 0 ? !1 : s, l = e.isInitialValid, d = e.enableReinitialize, h = d === void 0 ? !1 : d, f = e.onSubmit, m = ca(e, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]), u = ie({
    validateOnChange: r,
    validateOnBlur: a,
    validateOnMount: i,
    onSubmit: f
  }, m), y = he(u.initialValues), T = he(u.initialErrors || Re), E = he(u.initialTouched || vt), w = he(u.initialStatus), b = he(!1), v = he({});
  process.env.NODE_ENV !== "production" && le(function() {
    typeof l > "u" || (process.env.NODE_ENV !== "production" ? He(!1, "isInitialValid has been deprecated and will be removed in future versions of Formik. Please use initialErrors or validateOnMount instead.") : He());
  }, []), le(function() {
    return b.current = !0, function() {
      b.current = !1;
    };
  }, []);
  var N = re(0), _ = N[1], c = he({
    values: bt(u.initialValues),
    errors: bt(u.initialErrors) || Re,
    touched: bt(u.initialTouched) || vt,
    status: bt(u.initialStatus),
    isSubmitting: !1,
    isValidating: !1,
    submitCount: 0
  }), x = c.current, A = te(function(g) {
    var O = c.current;
    c.current = $c(O, g), O !== c.current && _(function(I) {
      return I + 1;
    });
  }, []), P = te(function(g, O) {
    return new Promise(function(I, D) {
      var z = u.validate(g, O);
      z == null ? I(Re) : qt(z) ? z.then(function(K) {
        I(K || Re);
      }, function(K) {
        process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validate />", K), D(K);
      }) : I(z);
    });
  }, [u.validate]), G = te(function(g, O) {
    var I = u.validationSchema, D = ge(I) ? I(O) : I, z = O && D.validateAt ? D.validateAt(O, g) : Cc(g, D);
    return new Promise(function(K, se) {
      z.then(function() {
        K(Re);
      }, function(xe) {
        xe.name === "ValidationError" ? K(Fc(xe)) : (process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validationSchema />", xe), se(xe));
      });
    });
  }, [u.validationSchema]), U = te(function(g, O) {
    return new Promise(function(I) {
      return I(v.current[g].validate(O));
    });
  }, []), L = te(function(g) {
    var O = Object.keys(v.current).filter(function(D) {
      return ge(v.current[D].validate);
    }), I = O.length > 0 ? O.map(function(D) {
      return U(D, de(g, D));
    }) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
    return Promise.all(I).then(function(D) {
      return D.reduce(function(z, K, se) {
        return K === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || K && (z = Me(z, O[se], K)), z;
      }, {});
    });
  }, [U]), q = te(function(g) {
    return Promise.all([L(g), u.validationSchema ? G(g) : {}, u.validate ? P(g) : {}]).then(function(O) {
      var I = O[0], D = O[1], z = O[2], K = rr.all([I, D, z], {
        arrayMerge: Ic
      });
      return K;
    });
  }, [u.validate, u.validationSchema, L, P, G]), Y = ye(function(g) {
    return g === void 0 && (g = x.values), A({
      type: "SET_ISVALIDATING",
      payload: !0
    }), q(g).then(function(O) {
      return b.current && (A({
        type: "SET_ISVALIDATING",
        payload: !1
      }), A({
        type: "SET_ERRORS",
        payload: O
      })), O;
    });
  });
  le(function() {
    i && b.current === !0 && Pe(y.current, u.initialValues) && Y(y.current);
  }, [i, Y]);
  var ne = te(function(g) {
    var O = g && g.values ? g.values : y.current, I = g && g.errors ? g.errors : T.current ? T.current : u.initialErrors || {}, D = g && g.touched ? g.touched : E.current ? E.current : u.initialTouched || {}, z = g && g.status ? g.status : w.current ? w.current : u.initialStatus;
    y.current = O, T.current = I, E.current = D, w.current = z;
    var K = function() {
      A({
        type: "RESET_FORM",
        payload: {
          isSubmitting: !!g && !!g.isSubmitting,
          errors: I,
          touched: D,
          status: z,
          values: O,
          isValidating: !!g && !!g.isValidating,
          submitCount: g && g.submitCount && typeof g.submitCount == "number" ? g.submitCount : 0
        }
      });
    };
    if (u.onReset) {
      var se = u.onReset(x.values, Ue);
      qt(se) ? se.then(K) : K();
    } else
      K();
  }, [u.initialErrors, u.initialStatus, u.initialTouched, u.onReset]);
  le(function() {
    b.current === !0 && !Pe(y.current, u.initialValues) && h && (y.current = u.initialValues, ne(), i && Y(y.current));
  }, [h, u.initialValues, ne, i, Y]), le(function() {
    h && b.current === !0 && !Pe(T.current, u.initialErrors) && (T.current = u.initialErrors || Re, A({
      type: "SET_ERRORS",
      payload: u.initialErrors || Re
    }));
  }, [h, u.initialErrors]), le(function() {
    h && b.current === !0 && !Pe(E.current, u.initialTouched) && (E.current = u.initialTouched || vt, A({
      type: "SET_TOUCHED",
      payload: u.initialTouched || vt
    }));
  }, [h, u.initialTouched]), le(function() {
    h && b.current === !0 && !Pe(w.current, u.initialStatus) && (w.current = u.initialStatus, A({
      type: "SET_STATUS",
      payload: u.initialStatus
    }));
  }, [h, u.initialStatus, u.initialTouched]);
  var M = ye(function(g) {
    if (v.current[g] && ge(v.current[g].validate)) {
      var O = de(x.values, g), I = v.current[g].validate(O);
      return qt(I) ? (A({
        type: "SET_ISVALIDATING",
        payload: !0
      }), I.then(function(D) {
        return D;
      }).then(function(D) {
        A({
          type: "SET_FIELD_ERROR",
          payload: {
            field: g,
            value: D
          }
        }), A({
          type: "SET_ISVALIDATING",
          payload: !1
        });
      })) : (A({
        type: "SET_FIELD_ERROR",
        payload: {
          field: g,
          value: I
        }
      }), Promise.resolve(I));
    } else if (u.validationSchema)
      return A({
        type: "SET_ISVALIDATING",
        payload: !0
      }), G(x.values, g).then(function(D) {
        return D;
      }).then(function(D) {
        A({
          type: "SET_FIELD_ERROR",
          payload: {
            field: g,
            value: de(D, g)
          }
        }), A({
          type: "SET_ISVALIDATING",
          payload: !1
        });
      });
    return Promise.resolve();
  }), $ = te(function(g, O) {
    var I = O.validate;
    v.current[g] = {
      validate: I
    };
  }, []), F = te(function(g) {
    delete v.current[g];
  }, []), k = ye(function(g, O) {
    A({
      type: "SET_TOUCHED",
      payload: g
    });
    var I = O === void 0 ? a : O;
    return I ? Y(x.values) : Promise.resolve();
  }), V = te(function(g) {
    A({
      type: "SET_ERRORS",
      payload: g
    });
  }, []), p = ye(function(g, O) {
    var I = ge(g) ? g(x.values) : g;
    A({
      type: "SET_VALUES",
      payload: I
    });
    var D = O === void 0 ? r : O;
    return D ? Y(I) : Promise.resolve();
  }), j = te(function(g, O) {
    A({
      type: "SET_FIELD_ERROR",
      payload: {
        field: g,
        value: O
      }
    });
  }, []), S = ye(function(g, O, I) {
    var D = ge(O) ? O(de(x.values, g)) : O;
    A({
      type: "SET_FIELD_VALUE",
      payload: {
        field: g,
        value: D
      }
    });
    var z = I === void 0 ? r : I;
    return z ? Y(Me(x.values, g, D)) : Promise.resolve();
  }), C = te(function(g, O) {
    var I = O, D = g, z;
    if (!Kt(g)) {
      g.persist && g.persist();
      var K = g.target ? g.target : g.currentTarget, se = K.type, xe = K.name, Mt = K.id, kt = K.value, ya = K.checked, ga = K.outerHTML, vr = K.options, ba = K.multiple;
      I = O || xe || Mt, !I && process.env.NODE_ENV !== "production" && fn({
        htmlContent: ga,
        documentationAnchorLink: "handlechange-e-reactchangeeventany--void",
        handlerName: "handleChange"
      }), D = /number|range/.test(se) ? (z = parseFloat(kt), isNaN(z) ? "" : z) : /checkbox/.test(se) ? Pc(de(x.values, I), ya, kt) : vr && ba ? Rc(vr) : kt;
    }
    I && S(I, D);
  }, [S, x.values]), Z = ye(function(g) {
    if (Kt(g))
      return function(O) {
        return C(O, g);
      };
    C(g);
  }), B = ye(function(g, O, I) {
    O === void 0 && (O = !0), A({
      type: "SET_FIELD_TOUCHED",
      payload: {
        field: g,
        value: O
      }
    });
    var D = I === void 0 ? a : I;
    return D ? Y(x.values) : Promise.resolve();
  }), oe = te(function(g, O) {
    g.persist && g.persist();
    var I = g.target, D = I.name, z = I.id, K = I.outerHTML, se = O || D || z;
    !se && process.env.NODE_ENV !== "production" && fn({
      htmlContent: K,
      documentationAnchorLink: "handleblur-e-any--void",
      handlerName: "handleBlur"
    }), B(se, !0);
  }, [B]), be = ye(function(g) {
    if (Kt(g))
      return function(O) {
        return oe(O, g);
      };
    oe(g);
  }), ee = te(function(g) {
    ge(g) ? A({
      type: "SET_FORMIK_STATE",
      payload: g
    }) : A({
      type: "SET_FORMIK_STATE",
      payload: function() {
        return g;
      }
    });
  }, []), fe = te(function(g) {
    A({
      type: "SET_STATUS",
      payload: g
    });
  }, []), $e = te(function(g) {
    A({
      type: "SET_ISSUBMITTING",
      payload: g
    });
  }, []), Ie = ye(function() {
    return A({
      type: "SUBMIT_ATTEMPT"
    }), Y().then(function(g) {
      var O = g instanceof Error, I = !O && Object.keys(g).length === 0;
      if (I) {
        var D;
        try {
          if (D = Ye(), D === void 0)
            return;
        } catch (z) {
          throw z;
        }
        return Promise.resolve(D).then(function(z) {
          return b.current && A({
            type: "SUBMIT_SUCCESS"
          }), z;
        }).catch(function(z) {
          if (b.current)
            throw A({
              type: "SUBMIT_FAILURE"
            }), z;
        });
      } else if (b.current && (A({
        type: "SUBMIT_FAILURE"
      }), O))
        throw g;
    });
  }), R = ye(function(g) {
    if (g && g.preventDefault && ge(g.preventDefault) && g.preventDefault(), g && g.stopPropagation && ge(g.stopPropagation) && g.stopPropagation(), process.env.NODE_ENV !== "production" && typeof document < "u") {
      var O = Nc();
      O !== null && O instanceof HTMLButtonElement && (O.attributes && O.attributes.getNamedItem("type") || (process.env.NODE_ENV !== "production" ? He(!1, 'You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type="submit"`. If this is not a submit button, please add `type="button"`.') : He()));
    }
    Ie().catch(function(I) {
      console.warn("Warning: An unhandled error was caught from submitForm()", I);
    });
  }), Ue = {
    resetForm: ne,
    validateForm: Y,
    validateField: M,
    setErrors: V,
    setFieldError: j,
    setFieldTouched: B,
    setFieldValue: S,
    setStatus: fe,
    setSubmitting: $e,
    setTouched: k,
    setValues: p,
    setFormikState: ee,
    submitForm: Ie
  }, Ye = ye(function() {
    return f(x.values, Ue);
  }), pt = ye(function(g) {
    g && g.preventDefault && ge(g.preventDefault) && g.preventDefault(), g && g.stopPropagation && ge(g.stopPropagation) && g.stopPropagation(), ne();
  }), da = te(function(g) {
    return {
      value: de(x.values, g),
      error: de(x.errors, g),
      touched: !!de(x.touched, g),
      initialValue: de(y.current, g),
      initialTouched: !!de(E.current, g),
      initialError: de(T.current, g)
    };
  }, [x.errors, x.touched, x.values]), fa = te(function(g) {
    return {
      setValue: function(I, D) {
        return S(g, I, D);
      },
      setTouched: function(I, D) {
        return B(g, I, D);
      },
      setError: function(I) {
        return j(g, I);
      }
    };
  }, [S, B, j]), ha = te(function(g) {
    var O = Pt(g), I = O ? g.name : g, D = de(x.values, I), z = {
      name: I,
      value: D,
      onChange: Z,
      onBlur: be
    };
    if (O) {
      var K = g.type, se = g.value, xe = g.as, Mt = g.multiple;
      K === "checkbox" ? se === void 0 ? z.checked = !!D : (z.checked = !!(Array.isArray(D) && ~D.indexOf(se)), z.value = se) : K === "radio" ? (z.checked = D === se, z.value = se) : xe === "select" && Mt && (z.value = z.value || [], z.multiple = !0);
    }
    return z;
  }, [be, Z, x.values]), Dt = St(function() {
    return !Pe(y.current, x.values);
  }, [y.current, x.values]), pa = St(function() {
    return typeof l < "u" ? Dt ? x.errors && Object.keys(x.errors).length === 0 : l !== !1 && ge(l) ? l(u) : l : x.errors && Object.keys(x.errors).length === 0;
  }, [l, Dt, x.errors, u]), ma = ie({}, x, {
    initialValues: y.current,
    initialErrors: T.current,
    initialTouched: E.current,
    initialStatus: w.current,
    handleBlur: be,
    handleChange: Z,
    handleReset: pt,
    handleSubmit: R,
    resetForm: ne,
    setErrors: V,
    setFormikState: ee,
    setFieldTouched: B,
    setFieldValue: S,
    setFieldError: j,
    setStatus: fe,
    setSubmitting: $e,
    setTouched: k,
    setValues: p,
    submitForm: Ie,
    validateForm: Y,
    validateField: M,
    isValid: pa,
    dirty: Dt,
    unregisterField: F,
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
function fn(e) {
  var t = e.htmlContent, r = e.documentationAnchorLink, n = e.handlerName;
  console.warn("Warning: Formik called `" + n + "`, but you forgot to pass an `id` or `name` attribute to your input:\n    " + t + `
    Formik cannot determine which value to update. For more info see https://formik.org/docs/api/formik#` + r + `
  `);
}
function Fc(e) {
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
function Cc(e, t, r, n) {
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
function Ic(e, t, r) {
  var n = e.slice();
  return t.forEach(function(s, i) {
    if (typeof n[i] > "u") {
      var l = r.clone !== !1, d = l && r.isMergeableObject(s);
      n[i] = d ? rr(Array.isArray(s) ? [] : {}, s, r) : s;
    } else r.isMergeableObject(s) ? n[i] = rr(e[i], s, r) : e.indexOf(s) === -1 && n.push(s);
  }), n;
}
function Rc(e) {
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
var Dc = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? yn : le;
function ye(e) {
  var t = he(e);
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
function Ht({
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
  setFieldOptions: i,
  module_refid: l
}) {
  const [d, h] = re(!1), [f, m] = re(
    s ?? e.options ?? {}
  ), [u, y] = re(""), [T, E] = re(0), w = he(null), [b, v] = re(!1), N = ae.useRef(u), _ = he(null);
  ae.useEffect(() => {
    N.current = u;
  }, [u]), le(() => {
    s && Object.keys(s).length !== 0 && m(s);
  }, [s]), le(() => {
    if (!b) return;
    const M = ($) => {
      const F = $.target;
      _.current?.contains(F) || w.current?.contains(F) || (v(!1), y(""));
    };
    return document.addEventListener("mousedown", M), () => {
      document.removeEventListener("mousedown", M);
    };
  }, [b]);
  const c = e.name;
  ae.useEffect(() => {
    let M = !0;
    return (async () => {
      let F = e.valueKey ?? "value", k = e.labelKey ?? "title";
      if (e?.options) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const C = Object.values(e.options);
          if (C.length && typeof C[0] == "string") {
            m(e.options);
            return;
          }
        }
        const j = (Array.isArray(e.options) ? e.options : [e.options]).map(je), S = we(
          F,
          k,
          j,
          e.groupKey
          // auto-uses `category` if present
        );
        m(S);
        return;
      }
      const V = e?.source ?? {};
      if (e.type === "dataMethod") {
        const p = e.method, j = p ? r[p] : void 0;
        if (j)
          try {
            const S = await Promise.resolve(j()), C = Array.isArray(S?.data?.data) ? S.data.data : Array.isArray(S?.data) ? S.data : S, Z = Array.isArray(C) ? C.map(je) : [], B = we(F, k, Z, e.groupKey);
            M && m(B);
          } catch (S) {
            console.error("Method execution failed:", S), M && m({});
          }
        else
          M && m({});
      }
      if (V.type === "api" && V.url)
        try {
          const p = await Q({
            method: V.method || "GET",
            url: V.url,
            data: V.body ?? {},
            params: V.params ?? {},
            headers: V.headers ?? {}
          }), j = Array.isArray(p?.data?.data) ? p.data.data : Array.isArray(p?.data) ? p.data : p, S = Array.isArray(j) ? j.map(je) : [], C = we(F, k, S, e.groupKey);
          M && m(C);
        } catch (p) {
          console.error("API execution failed:", p), M && m({});
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
              where: e.where ? a ? pe(e.where, { refid: a }) : e.where : void 0
            };
          }
          const j = await tt(n, p, e?.queryid, void 0, l), S = Array.isArray(j?.data?.data) ? j.data.data : Array.isArray(j?.data) ? j.data : j, C = Array.isArray(S) ? S.map(je) : [], Z = we(F, k, C, e.groupKey);
          M && m(Z);
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
  const x = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, A = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, P = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, G = (M) => M.icon ? /* @__PURE__ */ o.jsx("i", { className: M.icon }) : null, U = St(
    () => ys(f),
    [f]
  ), L = U.length, q = St(() => e.search || !u ? U : U.filter(
    ([, M]) => M.toLowerCase().includes(u.toLowerCase())
  ), [e.search, u, U]), Y = (M, $) => {
    if (b === !0)
      if (M.key === "ArrowDown")
        M.preventDefault(), E(
          (F) => F + 1 < q.length ? F + 1 : 0
        );
      else if (M.key === "ArrowUp")
        M.preventDefault(), E(
          (F) => F - 1 >= 0 ? F - 1 : q.length - 1
        );
      else if (M.key === "Enter") {
        M.preventDefault();
        const [F] = q[T] || [];
        F && t.setFieldValue(e.name, $ ? F : [...t.values[e.name], F]);
      } else M.key === "Escape" && (y(""), v(!1));
  };
  le(() => {
    w.current?.querySelector(
      `[data-index="${T}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [T]), le(() => {
    T >= q.length && E(0);
  }, [q, T]), le(() => {
    const M = e.autocomplete, $ = e.ajaxchain;
    if (!M && !$) return;
    const F = t.values[e.name];
    if (!F) return;
    const k = Array.isArray($) ? $ : $ ? [$] : [];
    (async () => {
      try {
        if (ps(M)) {
          const p = M.src;
          if (!p || !n) return;
          const j = pe(p.where ?? {}, {
            refid: F
          }), S = {
            ...p,
            table: p.table,
            cols: p.columns,
            where: j
          }, { data: C } = await tt(n, S, e?.queryid, void 0, l), Z = Array.isArray(C?.data) ? C.data[0] : C?.data;
          Z && M.target.split(",").map((B) => B.trim()).forEach((B) => {
            Z[B] !== void 0 && t.setFieldValue(B, Z[B]);
          });
        }
        for (const p of k) {
          const j = p.src;
          if (!p || typeof p != "object" || !j || typeof j != "object" || !n) continue;
          let S;
          if (!j.queryid) {
            if (!j.table || !j.columns)
              throw new Error("SQL query requires field.table");
            const fe = pe(j?.where ?? {}, {
              refid: F
            });
            S = {
              ...j,
              table: j.table,
              cols: j.columns,
              where: fe
            };
          }
          const { data: C } = await tt(n, S, e?.queryid, void 0, l);
          let Z = e.valueKey ?? "value", B = e.labelKey ?? "title";
          const oe = Array.isArray(C?.data?.data) ? C.data.data : Array.isArray(C?.data) ? C.data : C, be = Array.isArray(oe) ? oe.map(je) : [], ee = we(
            Z,
            B,
            be,
            e.groupKey
          );
          i?.(p.target, ee);
        }
      } catch (p) {
        console.error("Autocomplete / AjaxChain fetch failed", p);
      }
    })();
  }, [t.values[e.name]]), ae.useEffect(() => {
    if (!e.search || !u.trim() || !e.table || !n) return;
    const M = ms(e.columns ?? ""), $ = new AbortController(), F = setTimeout(async () => {
      try {
        let k;
        if (!e.queryid) {
          if (!e.table || !e.cols)
            throw new Error("SQL query requires field.table");
          const oe = a ? pe(e.where ?? {}, {
            refid: a
          }) : e.where;
          k = {
            ...e,
            table: e.table,
            cols: e.columns || e.cols,
            where: oe
          };
        }
        let V = {};
        Array.isArray(M) && M.forEach((oe) => {
          V[oe] = [u, "LIKE"];
        });
        const { data: p } = await tt(n, k, e?.queryid, void 0, l, V);
        let j = e.valueKey ?? "value", S = e.labelKey ?? "title";
        const C = Array.isArray(p?.data?.data) ? p.data.data : Array.isArray(p?.data) ? p.data : p, Z = Array.isArray(C) ? C.map(je) : [], B = we(
          j,
          S,
          Z,
          e.groupKey
        );
        m(B);
      } catch (k) {
        if (Q.isCancel(k)) return;
        console.error("Search fetch failed", k);
      }
    }, 500);
    return () => {
      clearTimeout(F), $.abort();
    };
  }, [u, a]);
  const ne = async (M) => {
    if (M.length === 0) {
      console.error("No file");
      return;
    }
    if (!n) return;
    const $ = n?.baseURL + n?.uploadURL;
    if (!$) {
      console.error("No Upload URL ");
      return;
    }
    const F = e.multiple === !0;
    try {
      const k = await Promise.all(
        Array.from(M).map(async (V) => {
          const p = new FormData();
          return p.append("file", V), (await Q({
            method: "POST",
            url: $,
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
        F ? k.map((V) => V.path) : k[0]?.path
      );
    } catch (k) {
      console.error("File upload failed", k), t.setFieldError(c, "File upload failed");
    }
  };
  switch (e.type) {
    case "autocomplete": {
      const $ = t.values[c] ?? "", F = u !== "" ? u : Ir(f, $) ?? String($ ?? ""), k = (p) => {
        const j = p.target.value;
        y(j), E(0), j.trim() ? v(!0) : (v(!1), t.setFieldValue(c, ""));
      }, V = (p) => {
        t.setFieldValue(c, p), y(""), v(!1);
      };
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: P, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsx("div", { ref: _, children: /* @__PURE__ */ o.jsx(
          "input",
          {
            className: `${x} ${A}`,
            value: F,
            placeholder: e.placeholder || "Type to search...",
            onChange: k,
            onFocus: () => {
              const p = String(t.values[c] ?? "");
              y(p);
            },
            onBlur: () => {
              setTimeout(() => v(!1), 150);
            },
            onKeyDown: (p) => {
              if (p.key === "Enter") {
                if (p.preventDefault(), q[T]) {
                  const [j] = q[T];
                  t.setFieldValue(c, j);
                } else u.trim() && t.setFieldValue(c, u.trim());
                v(!1);
                return;
              }
              Y(p, !0);
            },
            disabled: e.disabled
          }
        ) }),
        /* @__PURE__ */ o.jsx(Ht, { anchorRef: _, open: b, children: /* @__PURE__ */ o.jsx(
          "div",
          {
            ref: w,
            className: "bg-white border rounded shadow max-h-52 overflow-y-auto",
            children: q.length > 0 ? q.map(([p, j], S) => /* @__PURE__ */ o.jsx(
              "div",
              {
                "data-index": S,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${T === S ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => V(p),
                children: j
              },
              p
            )) : /* @__PURE__ */ o.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `No matches press enter to add "${F}" ` })
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
        const $ = t.values[c] ?? [];
        return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ o.jsxs("label", { className: P, children: [
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
                v((F) => !F), E(0);
              },
              onKeyDown: (F) => Y(F, !1),
              onBlur: () => {
                e.multiple || setTimeout(() => {
                  v(!1), y("");
                }, 150);
              },
              children: [
                /* @__PURE__ */ o.jsx("span", { className: "text-sm text-gray-700 truncate", children: $.length > 0 ? $.join(", ") : `Select ${e.label}` }),
                /* @__PURE__ */ o.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
              ]
            }
          ),
          /* @__PURE__ */ o.jsx(Ht, { anchorRef: _, open: b, children: /* @__PURE__ */ o.jsxs(
            "div",
            {
              ref: w,
              className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
              children: [
                e.search && /* @__PURE__ */ o.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "text",
                    value: u,
                    onChange: (F) => {
                      y(F.target.value), E(0);
                    },
                    placeholder: "Search...",
                    className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                  }
                ) }),
                q.length > 0 ? q.map(([F, k], V) => /* @__PURE__ */ o.jsxs(
                  "label",
                  {
                    "data-index": V,
                    className: `flex items-center gap-x-2 px-2 py-1 rounded cursor-pointer text-sm
                    ${$.includes(F) ? "bg-indigo-50 text-indigo-600 font-medium" : T === V ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: [
                      /* @__PURE__ */ o.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: $.includes(F),
                          onChange: (p) => {
                            const j = p.target.checked ? [...$, F] : $.filter((S) => S !== F);
                            t.setFieldValue(c, j);
                          },
                          className: "h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        }
                      ),
                      k
                    ]
                  },
                  F
                )) : /* @__PURE__ */ o.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ]
            }
          ) }),
          t.touched[c] && t.errors[c] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[c]) })
        ] });
      }
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: P, children: [
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
              v(($) => !$), E(0);
            },
            onKeyDown: ($) => Y($, !0),
            onBlur: () => {
              setTimeout(() => {
                v(!1), y("");
              }, 150);
            },
            children: [
              /* @__PURE__ */ o.jsx("span", { className: "text-sm text-gray-700 truncate", children: t.values[c] ? Ir(f, t.values[c]) ?? "Select option" : `Select ${e.label}` }),
              /* @__PURE__ */ o.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
            ]
          }
        ),
        /* @__PURE__ */ o.jsx(Ht, { anchorRef: _, open: b, children: /* @__PURE__ */ o.jsxs(
          "div",
          {
            ref: w,
            className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
            children: [
              e.search && /* @__PURE__ */ o.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ o.jsx(
                "input",
                {
                  type: "text",
                  value: u,
                  onChange: ($) => {
                    y($.target.value), E(0);
                  },
                  onKeyDown: ($) => Y($, !0),
                  placeholder: "Search...",
                  className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                }
              ) }),
              q.length > 0 && /* @__PURE__ */ o.jsx(
                "div",
                {
                  onMouseDown: ($) => {
                    $.preventDefault(), t.setFieldValue(c, ""), v(!1), y("");
                  },
                  className: "px-2 py-1 text-sm cursor-pointer hover:bg-gray-50",
                  children: "Clear selection"
                }
              ),
              q.length > 0 ? q.map(([$, F], k) => /* @__PURE__ */ o.jsx(
                "div",
                {
                  "data-index": k,
                  onMouseDown: () => {
                    t.setFieldValue(c, $), v(!1), y(""), E(0);
                  },
                  className: `px-2 py-1 rounded cursor-pointer text-sm
                  ${t.values[c] === $ ? "bg-indigo-50 text-indigo-600 font-medium" : T === k ? "bg-gray-100" : "hover:bg-gray-50"}`,
                  children: F
                },
                $
              )) : /* @__PURE__ */ o.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
            ]
          }
        ) }),
        t.touched[c] && t.errors[c] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[c]) })
      ] });
    }
    case "textarea":
      return /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: P, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ o.jsx(
            "textarea",
            {
              className: `${x} ${A} min-h-[120px] resize-none`,
              onFocus: () => h(!0),
              name: c,
              value: t.values[c],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ o.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${d ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[c] && t.errors[c] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[c]) })
      ] }) });
    case "select":
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: P, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ o.jsxs(
            "select",
            {
              className: `${x} ${A} appearance-none cursor-pointer pr-12`,
              onFocus: () => h(!0),
              name: c,
              value: t.values[c],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              disabled: e.disabled,
              children: [
                /* @__PURE__ */ o.jsx("option", { value: "", disabled: !0, children: e.placeholder || "Please select an option" }),
                !tr(f) && Object.entries(f).map(([$, F]) => /* @__PURE__ */ o.jsx("option", { value: $, className: "py-2", children: F }, $)),
                tr(f) && Object.entries(f).map(([$, F]) => /* @__PURE__ */ o.jsx("optgroup", { label: $, children: Object.entries(F).map(([k, V]) => /* @__PURE__ */ o.jsx("option", { value: k, children: V }, k)) }, $))
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
        /* @__PURE__ */ o.jsxs("label", { className: P, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: `flex ${L > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(f || {}).map(([$, F]) => /* @__PURE__ */ o.jsxs(
          "label",
          {
            htmlFor: `${c}-${$}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  id: `${c}-${$}`,
                  type: "radio",
                  name: c,
                  checked: t.values[c] === $,
                  value: $,
                  onChange: t.handleChange,
                  onBlur: t.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              F
            ]
          },
          $
        )) }),
        t.touched[c] && t.errors[c] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[c]) })
      ] });
    case "checkbox": {
      const $ = t.values[c];
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: P, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(f || {}).map(([F, k]) => /* @__PURE__ */ o.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: $.includes(F),
                  onChange: (V) => {
                    const p = V.target.checked ? [...$, F] : $.filter((j) => j !== F);
                    t.setFieldValue(c, p);
                  },
                  onBlur: t.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              k
            ]
          },
          F
        )) }),
        t.touched[c] && t.errors[c] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[c]) })
      ] });
    }
    case "tags": {
      const $ = t.values[c], F = u.trim(), k = Array.isArray(f) ? f : Object.entries(f || {}).map(([S, C]) => ({ value: S, label: C })), V = (S) => {
        S && !$.includes(S) && (t.setFieldValue(c, [...$, S]), y(""));
      }, p = (S) => {
        t.setFieldValue(
          c,
          $.filter((C) => C !== S)
        );
      }, j = (S) => k.find((C) => C.value === S)?.label ?? S;
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: P, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: `${x} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !e.disabled && document.getElementById(`${c}-input`)?.focus(),
            children: [
              $.map((S) => /* @__PURE__ */ o.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ o.jsx("span", { className: "text-indigo-700", children: j(S) }),
                    /* @__PURE__ */ o.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (C) => {
                          C.stopPropagation(), e.disabled || p(S);
                        },
                        onMouseDown: (C) => C.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                S
              )),
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  id: `${c}-input`,
                  type: "text",
                  value: u,
                  onChange: (S) => y(S.target.value),
                  onKeyDown: (S) => {
                    (S.key === "Enter" || S.key === ",") && (S.preventDefault(), V(F));
                  },
                  placeholder: $.length === 0 ? e.placeholder || "Type and press Enter" : "",
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
      const M = e.multiple === !0;
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: P, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ o.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: G(e) }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "file",
              className: `${x} ${A} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => h(!0),
              name: c,
              multiple: M,
              onChange: ($) => {
                const F = $.currentTarget.files;
                F && ne(F);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ o.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${d ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.values[c]?.split("/").pop() && /* @__PURE__ */ o.jsx("div", { className: "mt-1", children: /* @__PURE__ */ o.jsx("span", { className: "text-sm ", children: String(t.values[c]?.split("/").pop()) }) }),
        t.touched[c] && t.errors[c] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[c]) })
      ] });
    case "json":
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: P, children: [
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
              onChange: ($) => t.setFieldValue(c, $.target.value),
              onBlur: t.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: e.disabled,
              className: `${x} ${A} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ o.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${d ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        t.touched[c] && t.errors[c] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[c]) })
      ] });
    case "date":
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: P, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ o.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: G(e) }),
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
              className: `${x} ${A} ${e.icon ? "pl-9" : ""}`
            }
          ),
          /* @__PURE__ */ o.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${d ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        t.touched[c] && t.errors[c] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[c]) })
      ] });
    default:
      return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs("label", { className: P, children: [
          e.label,
          e.required && /* @__PURE__ */ o.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ o.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: G(e) }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: e.type || "text",
              className: `${x} ${A} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => h(!0),
              name: c,
              value: t.values[c],
              onBlur: t.handleBlur,
              onChange: t.handleChange,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ o.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${d ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[c] && t.errors[c] && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[c]) })
      ] });
  }
}
function Lc({
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
  module_refid: d
}) {
  const h = ds(t, i?.operation), [f, m] = ae.useState({}), u = (w, b) => {
    m((v) => ({
      ...v,
      [w]: b
    }));
  }, { initialValues: y, validationSchema: T } = ae.useMemo(() => {
    const w = {}, b = {};
    return h.forEach((v) => {
      hs([v], w, b, r);
    }), {
      initialValues: w,
      validationSchema: b
    };
  }, [h, r]), E = Oc({
    initialValues: y,
    enableReinitialize: !0,
    validationSchema: Fn().shape(T),
    onSubmit: (w) => {
      n(w), E.resetForm();
    }
  });
  return console.log("formik.values", E.values), /* @__PURE__ */ o.jsx("div", { className: "relative z-10 max-w-full ", children: /* @__PURE__ */ o.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ o.jsxs("form", { onSubmit: E.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "grid grid-flow-col auto-cols-max gap-4  overflow-x-auto", children: [
      h.map((w, b) => fs(w.hidden) || w.type === "geolocation" || w.vmode === "edit" && i?.operation === "create" ? null : /* @__PURE__ */ o.jsx(
        "div",
        {
          children: /* @__PURE__ */ o.jsx(
            kc,
            {
              refid: l,
              module_refid: d,
              ...i ? { sqlOpsUrls: i } : {},
              field: w,
              formik: E,
              methods: s,
              setFieldOptions: u,
              ...f[w.name] ? { optionsOverride: f[w.name] } : {}
            }
          )
        },
        w?.name ?? `field-${b}`
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
const at = (e) => ({
  Authorization: `Bearer ${e.accessToken}`
}), Wt = async (e) => (await Q.get(
  e.baseURL + e.dbopsGetHash,
  { headers: at(e) }
)).data.refhash, Zt = async (e, t) => (await Q.post(
  e.baseURL + e.dbopsGetRefId,
  t,
  { headers: at(e) }
)).data.refid, zc = {
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
    const l = await Q.post(
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
function Vc({
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
  module_refid: d
}) {
  const h = e.endPoints, f = e?.source?.refid, [m, u] = ae.useState(i), y = ae.useMemo(() => cs(e.fields), [e.fields]);
  ae.useEffect(() => {
    let w = !0;
    return (async () => {
      const v = e?.source ?? {};
      if (!v?.type) {
        w && u({});
        return;
      }
      if (v.type === "method") {
        const N = v.method, _ = N ? t[N] : void 0;
        if (_)
          try {
            const c = await Promise.resolve(_());
            w && u(c ?? {});
          } catch (c) {
            console.error("Method execution failed:", c), w && u({});
          }
        else
          w && u({});
      }
      if (v.type === "api" && h?.operation !== "create")
        try {
          const N = await Q({
            method: v.method || "GET",
            url: v.url ?? "",
            data: v.body ?? {},
            params: v.params ?? {},
            headers: v.headers ?? {}
          });
          w && u(N.data ?? {});
        } catch (N) {
          console.error("API fetch failed:", N), w && u({});
        }
      if (v.type === "sql" && v.refid && v.refid !== "0" && h?.operation !== "create" || h?.operation !== "create" && v.dbopsid) {
        if (!h) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const N = await zc.fetch(h, {
            source: {
              ...v,
              table: v.table,
              columns: v.columns,
              where: pe(v.where, {
                refid: f
              })
            },
            fields: Nt(e.fields, h.operation)
          }, v?.dbopsid, d);
          w && u(N);
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
  const T = async (w) => {
    const b = e?.source ?? {};
    let v = null;
    if (y.length > 0)
      try {
        v = await us();
      } catch (_) {
        console.log("catch fetchGeolocation", _), v = null;
      }
    const N = {
      ...w,
      ...Object.fromEntries(
        y.map((_) => [_, v])
      )
    };
    if (b.type === "method") {
      const _ = b.method, c = _ ? t[_] : void 0;
      if (c)
        try {
          const x = await Promise.resolve(c(N));
          l?.(null), s?.(x);
        } catch (x) {
          s?.(x), console.error("Method execution failed:", x);
        }
    }
    if (b.type === "api") {
      if (!h) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const _ = await Q({
          method: b.method || "POST",
          url: h.baseURL + b.endpoint,
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
    if (b.type === "sql") {
      const _ = e.endPoints;
      if (!_) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let c = !1, x;
        b?.dbopsid && (c = !0, x = b?.dbopsid);
        const A = await Q({
          method: "GET",
          url: _.baseURL + _.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${_?.accessToken}`
          }
        });
        if (!c) {
          let G = {
            ...b
          };
          b.where && (G = {
            ...b,
            where: pe(b.where, {
              refid: f
            })
          }), x = (await Q({
            method: "POST",
            url: _.baseURL + _.dbopsGetRefId,
            data: {
              operation: _.operation,
              source: G,
              fields: Nt(e.fields, _.operation),
              forcefill: e.forcefill,
              datahash: A.data.refhash,
              scrid: d
            },
            headers: {
              Authorization: `Bearer ${_?.accessToken}`
            }
          }))?.data.refid;
        }
        const P = await Q({
          method: "POST",
          url: _.baseURL + _[_.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: {
            refid: x,
            fields: N,
            datahash: A.data.refhash
          },
          headers: {
            Authorization: `Bearer ${_?.accessToken}`
          }
        });
        l?.(null), s?.(P);
      } catch (c) {
        s?.(c), console.error("API fetch failed:", c);
      }
    }
  }, E = {
    simple: /* @__PURE__ */ o.jsx(
      Lc,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: m,
        onSubmit: T,
        onCancel: n,
        methods: t,
        components: a,
        ...h ? { sqlOpsUrls: h } : {},
        refid: f,
        module_refid: d
      }
    )
  };
  return /* @__PURE__ */ o.jsx("div", { className: "relative", children: E.simple });
}
function xr({ tabObj: e, methods: t, tabName: r, sqlOpsUrls: n, refid: a, Reports: s, toast: i, handleAction: l, infoViewJson: d }) {
  const [h, f] = re(1), [m, u] = re(10), [y, T] = re(""), [E, w] = re(!1), [b, v] = re(null), [N, _] = ae.useState([]);
  he(null);
  const [c, x] = re(null), [A, P] = re({ key: "", direction: null }), [G, U] = re(null), [L, q] = ae.useState(null), Y = e?.config;
  console.log("tabObj", e), console.log("source", Y);
  const ne = e?.config, M = ne?.["popup.form"] ? "popup.form" : (ne?.form, "form"), $ = ne?.[M] && Object.keys(ne?.[M]).length > 0, F = (j, S) => {
    q(j);
  }, k = (j) => {
    v(j), w(!0);
  }, V = async () => {
    if (b?.id) {
      if (!n) {
        U({ type: "error", message: "Delete configuration missing." });
        return;
      }
      try {
        let j = e?.config;
        const S = j?.["popup.form"] ? "popup.form" : (j?.form, "form");
        console.log("config?.[formType]", j?.[S]);
        const C = j?.[S];
        if (!C?.source) throw new Error("Form source missing");
        const Z = await Q({
          method: "GET",
          url: n.baseURL + n.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${n.accessToken}`
          }
        });
        let B = { ...C.source, refid: b.id };
        C.source.where && (B = {
          ...B,
          where: pe(C.source.where, {
            refid: b.id
          })
        });
        const oe = await Q({
          method: "POST",
          url: n.baseURL + n.dbopsGetRefId,
          data: {
            operation: "update",
            source: B,
            fields: C.fields,
            forcefill: C.forcefill,
            datahash: Z.data.refhash
          },
          headers: {
            Authorization: `Bearer ${n.accessToken}`
          }
        });
        await Q({
          method: "POST",
          url: n.baseURL + n.dbopsUpdate,
          data: {
            refid: oe.data.refid,
            fields: { blocked: "true" },
            datahash: Z.data.refhash
          },
          headers: {
            Authorization: `Bearer ${n.accessToken}`
          }
        }), window.alert("Record deleted successfully.");
      } catch (j) {
        console.error(j), window.alert("Failed to delete record. Please try again");
      } finally {
        v(null), w(!1);
      }
    }
  }, p = () => {
    v(null), w(!1);
  };
  return /* @__PURE__ */ o.jsx(o.Fragment, { children: s ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      s,
      {
        methods: { ...t, deleteRecord: k, editRecord: F },
        report: {
          ...Y,
          source: {
            table: Y?.table,
            type: "sql",
            cols: Y?.cols,
            where: Y?.where,
            orderby: Y?.orderby
          },
          endPoints: n,
          actions: { ...Y?.actions, ...d?.buttons, ...d.actions },
          datagrid: Y?.datagrid,
          buttons: Y?.buttons
        },
        onButtonClick: l
      }
    ),
    $ && /* @__PURE__ */ o.jsx(
      Vc,
      {
        formJson: {
          ...ne[M],
          endPoints: {
            ...n,
            operation: L ? "update" : "create"
          }
        },
        initialvalues: L ?? {},
        setEditData: q,
        module_refid: d?.module_refid
      }
    ),
    /* @__PURE__ */ o.jsx(
      xs,
      {
        open: E,
        onConfirm: V,
        onCancel: p
      }
    )
  ] }) : /* @__PURE__ */ o.jsx("div", { children: "Report not found" }) });
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
), Bc = ({
  groups: e,
  groupNames: t,
  setActiveTabIndex: r,
  activeTabIndex: n,
  layoutConfig: a,
  showScrollHint: s,
  isCommonInfo: i,
  tabsNavRef: l
}) => {
  const [d, h] = re(!1), f = he(null);
  return le(() => {
    const m = (u) => {
      f.current && !f.current.contains(u.target) && h(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
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
      /* @__PURE__ */ o.jsxs("div", { className: "relative", ref: f, children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            onClick: () => h(!d),
            className: "ml-1 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200",
            children: "⋮"
          }
        ),
        d && /* @__PURE__ */ o.jsx("div", { className: "absolute right-0 mt-2 w-48 max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-30", children: t.map((m, u) => /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              r(u), h(!1);
            },
            className: `w-full text-left px-3 py-2 text-sm truncate hover:bg-gray-100 ${n === u ? "bg-gray-50 font-semibold text-action" : "text-gray-700"}`,
            children: e[m]?.label || m
          },
          m
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
        children: t.length > 0 ? t.map((m, u) => /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            onClick: () => r(u),
            className: `relative cursor-pointer flex-shrink-0
            min-w-[8rem]   
            py-2 px-8
            rounded-t-lg text-xs sm:text-sm font-semibold
            transition-all duration-300 ease-out
            focus:outline-none whitespace-nowrap
            ${n === u ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
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
  methods: l = {},
  refid: d,
  sqlOpsUrls: h,
  module_refid: f
}) => /* @__PURE__ */ o.jsxs(
  "div",
  {
    className: "bg-white rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex-1 flex flex-col min-h-0",
    children: [
      e.length > 0 ? n?.fields ? /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ o.jsx("div", { className: r?.fieldGridClass || "grid grid-cols-12 gap-2", children: n.fields.map((m, u) => /* @__PURE__ */ o.jsx(
        "div",
        {
          className: `col-span-12 sm:col-span-6 ${ct[ut(m.width)] || "lg:col-span-2"}`,
          children: /* @__PURE__ */ o.jsx(
            dt,
            {
              field: m,
              data: a ?? {},
              methods: l,
              refid: d,
              ...h ? { sqlOpsUrls: h } : {},
              module_refid: f
            }
          )
        },
        m?.name ?? `field-${u}`
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
            e.slice(0, 5).map((m, u) => /* @__PURE__ */ o.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${u === t ? "bg-action w-6" : "bg-gray-300"}`
              },
              u
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
        /* @__PURE__ */ o.jsx("div", { className: "flex gap-1", children: e.map((m, u) => /* @__PURE__ */ o.jsx(
          "div",
          {
            className: `w-2 h-2 rounded-full transition-all duration-300 ${u === t ? "bg-action w-6" : "bg-gray-300"}`
          },
          u
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
  refid: d,
  Reports: h,
  toast: f = {},
  handleAction: m = () => {
  },
  infoViewJson: u
}) {
  const [y, T] = re(0), [E, w] = re(!1), b = he(null), v = Object.keys(e);
  le(() => {
    const U = () => {
      if (b.current) {
        const L = b.current;
        w(L.scrollWidth > L.clientWidth);
      }
    };
    return U(), window.addEventListener("resize", U), () => window.removeEventListener("resize", U);
  }, [v.length]), le(() => {
    if (b.current && v.length > 0) {
      const U = b.current.children[y];
      U && U.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [y, v.length]);
  const N = i === "tableft", _ = i === "tabright", c = !N && !_, x = e[v[y] ?? ""] || null;
  console.log("tabObj", x);
  const A = {
    single: (U, L) => /* @__PURE__ */ o.jsx(cr, { module_refid: u.module_refid, tabObj: U, methods: t, tabName: L, ...l ? { sqlOpsUrls: l } : {}, refid: d }),
    grid: (U, L) => /* @__PURE__ */ o.jsx(
      xr,
      {
        ...h ? { Reports: h } : {},
        toast: f,
        handleAction: m,
        tabObj: U,
        methods: t,
        tabName: L,
        ...l ? { sqlOpsUrls: l } : {},
        refid: d,
        infoViewJson: u
      }
    )
  }, P = x?.config?.uimode, G = n[P] || A[P] || (() => /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No UI mode for this type" }));
  return console.log("tabObjjjjjjjjjjjjjjjjjjjjjj", x), c ? /* @__PURE__ */ o.jsxs("div", { className: "flex-1 flex flex-col min-h-0 ", children: [
    /* @__PURE__ */ o.jsx(
      Bc,
      {
        groupNames: v,
        groups: e,
        setActiveTabIndex: T,
        activeTabIndex: y,
        tabsNavRef: b,
        isCommonInfo: a,
        showScrollHint: E,
        layoutConfig: s
      }
    ),
    /* @__PURE__ */ o.jsx(
      pn,
      {
        groupNames: v,
        activeTabIndex: y,
        layoutConfig: s,
        tabObj: x,
        infoData: r,
        setActiveTabIndex: T,
        renderView: G,
        groups: e,
        methods: t,
        refid: d,
        ...l ? { sqlOpsUrls: l } : {},
        module_refid: u.module_refid
      }
    )
  ] }) : /* @__PURE__ */ o.jsxs("div", { className: "flex-1 flex min-h-0", children: [
    N && /* @__PURE__ */ o.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ o.jsx(
      hn,
      {
        groupNames: v,
        groups: e,
        setActiveTabIndex: T,
        activeTabIndex: y
      }
    ) }),
    /* @__PURE__ */ o.jsx("main", { className: "flex-1 flex flex-col min-h-0 overflow-auto", children: /* @__PURE__ */ o.jsx(
      pn,
      {
        groupNames: v,
        activeTabIndex: y,
        layoutConfig: s,
        tabObj: x,
        infoData: r,
        setActiveTabIndex: T,
        renderView: G,
        groups: e,
        methods: t,
        refid: d,
        module_refid: u.module_refid,
        ...l ? { sqlOpsUrls: l } : {}
      }
    ) }),
    _ && /* @__PURE__ */ o.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ o.jsx(
      hn,
      {
        groupNames: v,
        groups: e,
        setActiveTabIndex: T,
        activeTabIndex: y
      }
    ) })
  ] });
}
function Gc({ title: e, children: t, isFirst: r }) {
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
function Uc({
  groups: e,
  methods: t = {},
  infoData: r,
  viewRenderers: n = {},
  sqlOpsUrls: a,
  refid: s,
  Reports: i,
  toast: l = {},
  handleAction: d = () => {
  },
  infoViewJson: h
}) {
  const f = {
    single: (m, u) => /* @__PURE__ */ o.jsx(
      cr,
      {
        tabObj: m,
        methods: t,
        tabName: u,
        ...a ? { sqlOpsUrls: a } : {},
        refid: s,
        module_refid: h?.module_refid
      }
    ),
    grid: (m, u) => /* @__PURE__ */ o.jsx(
      xr,
      {
        ...i ? { Reports: i } : {},
        toast: l,
        infoViewJson: h,
        handleAction: d,
        tabObj: m,
        methods: t,
        tabName: u,
        ...a ? { sqlOpsUrls: a } : {},
        refid: s
      }
    )
  };
  return /* @__PURE__ */ o.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ o.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ o.jsx("div", { className: "space-y-1 flex flex-col min-h-0", children: e && Object.entries(e).map(([m, u], y) => (console.log(
    "group",
    m
  ), /* @__PURE__ */ o.jsx(Gc, { title: u.label, isFirst: y === 0, children: u?.fields ? /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ o.jsx("div", { className: "grid grid-cols-12 gap-2", children: u.fields.map((T, E) => /* @__PURE__ */ o.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${ct[ut(T.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ o.jsx(dt, { module_refid: h?.module_refid, methods: t, field: T, data: r ?? {}, ...a ? { sqlOpsUrls: a } : {}, refid: s })
    },
    T?.name ?? `field-${E}`
  )) }) }) : u ? /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: n[u.config?.uimode]?.(u) || f[u.config?.uimode]?.(u, m) || /* @__PURE__ */ o.jsx("div", { children: "No renderer for this type" }) }) : null }, m))) }) }) });
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
function Kc({
  groups: e,
  methods: t = {},
  infoData: r,
  viewRenderers: n = {},
  sqlOpsUrls: a,
  refid: s,
  Reports: i,
  toast: l = {},
  handleAction: d = () => {
  },
  infoViewJson: h
}) {
  const f = {
    single: (m, u) => /* @__PURE__ */ o.jsx(cr, { module_refid: h?.module_refid, tabObj: m, methods: t, tabName: u, ...a ? { sqlOpsUrls: a } : {}, refid: s }),
    grid: (m, u) => /* @__PURE__ */ o.jsx(
      xr,
      {
        ...i ? { Reports: i } : {},
        toast: l,
        handleAction: d,
        tabObj: m,
        methods: t,
        tabName: u,
        ...a ? { sqlOpsUrls: a } : {},
        refid: s,
        infoViewJson: h
      }
    )
  };
  return /* @__PURE__ */ o.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ o.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ o.jsx("div", { className: "space-y-2  flex flex-col min-h-0", children: e && Object.entries(e).map(([m, u], y) => /* @__PURE__ */ o.jsx(Yc, { title: u.label, children: u?.fields ? /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ o.jsx("div", { className: "grid grid-cols-12 gap-2", children: u.fields.map((T, E) => /* @__PURE__ */ o.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${ct[ut(T.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ o.jsx(dt, { module_refid: h?.module_refid, methods: t, field: T, data: r ?? {}, ...a ? { sqlOpsUrls: a } : {}, refid: s })
    },
    T?.name ?? `field-${E}`
  )) }) }) : u ? /* @__PURE__ */ o.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: n[u.config?.uimode]?.(u) || f[u.config?.uimode]?.(u, m) || /* @__PURE__ */ o.jsx("div", { children: "No renderer for this type" }) }) : null }, m)) }) }) });
}
function Zc({
  infoViewJson: e,
  data: t = {},
  hiddenFields: r = [],
  groupFieldsFn: n = ls,
  layoutConfig: a = {},
  viewRenderers: s = {},
  methods: i = {},
  Reports: l,
  toast: d = {},
  handleAction: h = () => {
  }
}) {
  const [f, m] = ae.useState({}), u = os(e.infoview ?? {}), y = e.endPoints, T = ae.useMemo(
    () => n(e.fields || {}),
    [e.fields, n]
  ), E = e?.source?.refid;
  let w = { ...T };
  e.infoview?.groups && (w = { ...w, ...e.infoview.groups }), e?.source, console.log("module_refid", e.module_refid), ae.useEffect(() => {
    let N = !1;
    return (async () => {
      const c = e?.source;
      if (!c?.type) {
        N || m({});
        return;
      }
      if (c.type === "method") {
        const x = c.method, A = x ? i[x] : void 0;
        if (A)
          try {
            const P = await Promise.resolve(A());
            N || m(P || {});
          } catch (P) {
            console.error("Method execution failed:", P), N || m({});
          }
        else
          N || m({});
      }
      if (c.type === "api")
        try {
          const x = await Q({
            method: c.method || "GET",
            url: c.url,
            data: c.body || {},
            params: c.params || {},
            headers: c.headers || {}
          });
          N || m(x.data || {});
        } catch (x) {
          console.error("API fetch failed:", x), N || m({});
        }
      if (c.type === "sql" && c.refid && c.refid != "0" || c.dbopsid) {
        if (!y) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let x = !1, A;
          c?.dbopsid && (x = !0, A = c?.dbopsid);
          const P = await Q({
            method: "GET",
            url: y.baseURL + y.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${y?.accessToken}`
            }
          });
          if (!x) {
            let L = {
              ...c
            };
            c.where && (L = {
              ...c,
              where: pe(c.where, {
                refid: E
              })
            }), A = (await Q({
              method: "POST",
              url: y.baseURL + y.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: L,
                fields: Nt(e.fields, y.operation),
                forcefill: e.forcefill,
                datahash: P.data.refhash,
                srcid: e?.module_refid
              },
              headers: {
                Authorization: `Bearer ${y?.accessToken}`
              }
            }))?.data.refid;
          }
          const G = await Q({
            method: "POST",
            url: y.baseURL + y.dbopsFetch,
            data: {
              refid: A,
              datahash: P.data.refhash,
              module_refid: e.module_refid
            },
            headers: {
              Authorization: `Bearer ${y?.accessToken}`
            }
          }), U = Rn(G) ?? {};
          N || m(U);
        } catch (x) {
          console.error("API fetch failed:", x);
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
  const b = w.common || null;
  b && delete w.common;
  const v = (N) => {
    switch (N) {
      case "accordion":
        return /* @__PURE__ */ o.jsx(
          Uc,
          {
            groups: w,
            methods: i,
            infoData: f,
            viewRenderers: s,
            ...y ? { sqlOpsUrls: y } : {},
            refid: E,
            ...l ? { Reports: l } : {},
            toast: d,
            handleAction: h,
            infoViewJson: e
          }
        );
      case "tab":
      case "tableft":
      case "tabright":
        return /* @__PURE__ */ o.jsx(
          mn,
          {
            groups: w,
            viewRenderers: s,
            layoutConfig: a,
            methods: i,
            infoData: f,
            isCommonInfo: !!b,
            viewMode: N,
            ...y ? { sqlOpsUrls: y } : {},
            refid: E,
            ...l ? { Reports: l } : {},
            toast: d,
            handleAction: h,
            infoViewJson: e
          }
        );
      case "cards":
        return /* @__PURE__ */ o.jsx(
          Kc,
          {
            groups: w,
            viewRenderers: s,
            methods: i,
            infoData: f,
            ...y ? { sqlOpsUrls: y } : {},
            refid: E,
            ...l ? { Reports: l } : {},
            toast: d,
            handleAction: h,
            infoViewJson: e
          }
        );
      default:
        return /* @__PURE__ */ o.jsx(
          mn,
          {
            groups: w,
            viewRenderers: s,
            layoutConfig: a,
            methods: i,
            infoData: f,
            isCommonInfo: !!b,
            viewMode: N,
            ...y ? { sqlOpsUrls: y } : {},
            refid: E,
            ...l ? { Reports: l } : {},
            toast: d,
            handleAction: h,
            infoViewJson: e
          }
        );
    }
  };
  return /* @__PURE__ */ o.jsxs("div", { className: a.containerClass || "h-screen flex flex-col ", children: [
    b && /* @__PURE__ */ o.jsx(
      bs,
      {
        commonInfo: b,
        infoData: f,
        hiddenFields: r
      }
    ),
    v(u)
  ] });
}
export {
  Zc as InfoView
};
