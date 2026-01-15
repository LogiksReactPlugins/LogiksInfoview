import V, { useState as F, useRef as ke, useMemo as Oe, useEffect as Te } from "react";
import M from "axios";
var ye = { exports: {} }, oe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function tt() {
  if (Ae) return oe;
  Ae = 1;
  var r = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function t(n, s, i) {
    var o = null;
    if (i !== void 0 && (o = "" + i), s.key !== void 0 && (o = "" + s.key), "key" in s) {
      i = {};
      for (var l in s)
        l !== "key" && (i[l] = s[l]);
    } else i = s;
    return s = i.ref, {
      $$typeof: r,
      type: n,
      key: o,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return oe.Fragment = e, oe.jsx = t, oe.jsxs = t, oe;
}
var le = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Re;
function rt() {
  return Re || (Re = 1, process.env.NODE_ENV !== "production" && function() {
    function r(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === I ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case N:
          return "Fragment";
        case h:
          return "Profiler";
        case E:
          return "StrictMode";
        case v:
          return "Suspense";
        case T:
          return "SuspenseList";
        case z:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case j:
            return "Portal";
          case b:
            return (c.displayName || "Context") + ".Provider";
          case x:
            return (c._context.displayName || "Context") + ".Consumer";
          case _:
            var w = c.render;
            return c = c.displayName, c || (c = w.displayName || w.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case k:
            return w = c.displayName || null, w !== null ? w : r(c.type) || "Memo";
          case P:
            w = c._payload, c = c._init;
            try {
              return r(c(w));
            } catch {
            }
        }
      return null;
    }
    function e(c) {
      return "" + c;
    }
    function t(c) {
      try {
        e(c);
        var w = !1;
      } catch {
        w = !0;
      }
      if (w) {
        w = console;
        var O = w.error, D = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return O.call(
          w,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          D
        ), e(c);
      }
    }
    function n(c) {
      if (c === N) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === P)
        return "<...>";
      try {
        var w = r(c);
        return w ? "<" + w + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var c = y.A;
      return c === null ? null : c.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function o(c) {
      if (Y.call(c, "key")) {
        var w = Object.getOwnPropertyDescriptor(c, "key").get;
        if (w && w.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function l(c, w) {
      function O() {
        q || (q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          w
        ));
      }
      O.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: O,
        configurable: !0
      });
    }
    function u() {
      var c = r(this.type);
      return W[c] || (W[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function f(c, w, O, D, Q, B, se, S) {
      return O = B.ref, c = {
        $$typeof: g,
        type: c,
        key: w,
        props: B,
        _owner: Q
      }, (O !== void 0 ? O : null) !== null ? Object.defineProperty(c, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(c, "ref", { enumerable: !1, value: null }), c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(c, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(c, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: se
      }), Object.defineProperty(c, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: S
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function m(c, w, O, D, Q, B, se, S) {
      var $ = w.children;
      if ($ !== void 0)
        if (D)
          if (G($)) {
            for (D = 0; D < $.length; D++)
              d($[D]);
            Object.freeze && Object.freeze($);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d($);
      if (Y.call(w, "key")) {
        $ = r(c);
        var A = Object.keys(w).filter(function(C) {
          return C !== "key";
        });
        D = 0 < A.length ? "{key: someKey, " + A.join(": ..., ") + ": ...}" : "{key: someKey}", pe[$ + D] || (A = 0 < A.length ? "{" + A.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          D,
          $,
          A,
          $
        ), pe[$ + D] = !0);
      }
      if ($ = null, O !== void 0 && (t(O), $ = "" + O), o(w) && (t(w.key), $ = "" + w.key), "key" in w) {
        O = {};
        for (var R in w)
          R !== "key" && (O[R] = w[R]);
      } else O = w;
      return $ && l(
        O,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), f(
        c,
        $,
        B,
        Q,
        s(),
        O,
        se,
        S
      );
    }
    function d(c) {
      typeof c == "object" && c !== null && c.$$typeof === g && c._store && (c._store.validated = 1);
    }
    var p = V, g = Symbol.for("react.transitional.element"), j = Symbol.for("react.portal"), N = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), b = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), z = Symbol.for("react.activity"), I = Symbol.for("react.client.reference"), y = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = Object.prototype.hasOwnProperty, G = Array.isArray, fe = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(c) {
        return c();
      }
    };
    var q, W = {}, J = p.react_stack_bottom_frame.bind(
      p,
      i
    )(), me = fe(n(i)), pe = {};
    le.Fragment = N, le.jsx = function(c, w, O, D, Q) {
      var B = 1e4 > y.recentlyCreatedOwnerStacks++;
      return m(
        c,
        w,
        O,
        !1,
        D,
        Q,
        B ? Error("react-stack-top-frame") : J,
        B ? fe(n(c)) : me
      );
    }, le.jsxs = function(c, w, O, D, Q) {
      var B = 1e4 > y.recentlyCreatedOwnerStacks++;
      return m(
        c,
        w,
        O,
        !0,
        D,
        Q,
        B ? Error("react-stack-top-frame") : J,
        B ? fe(n(c)) : me
      );
    };
  }()), le;
}
var Pe;
function nt() {
  return Pe || (Pe = 1, process.env.NODE_ENV === "production" ? ye.exports = tt() : ye.exports = rt()), ye.exports;
}
var a = nt(), Ne, Ce;
function st() {
  if (Ce) return Ne;
  Ce = 1;
  function r(h) {
    this._maxSize = h, this.clear();
  }
  r.prototype.clear = function() {
    this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
  }, r.prototype.get = function(h) {
    return this._values[h];
  }, r.prototype.set = function(h, x) {
    return this._size >= this._maxSize && this.clear(), h in this._values || this._size++, this._values[h] = x;
  };
  var e = /[^.^\]^[]+|(?=\[\]|\.\.)/g, t = /^\d+$/, n = /^\d/, s = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, i = /^\s*(['"]?)(.*?)(\1)\s*$/, o = 512, l = new r(o), u = new r(o), f = new r(o);
  Ne = {
    Cache: r,
    split: d,
    normalizePath: m,
    setter: function(h) {
      var x = m(h);
      return u.get(h) || u.set(h, function(_, v) {
        for (var T = 0, k = x.length, P = _; T < k - 1; ) {
          var z = x[T];
          if (z === "__proto__" || z === "constructor" || z === "prototype")
            return _;
          P = P[x[T++]];
        }
        P[x[T]] = v;
      });
    },
    getter: function(h, x) {
      var b = m(h);
      return f.get(h) || f.set(h, function(v) {
        for (var T = 0, k = b.length; T < k; )
          if (v != null || !x) v = v[b[T++]];
          else return;
        return v;
      });
    },
    join: function(h) {
      return h.reduce(function(x, b) {
        return x + (g(b) || t.test(b) ? "[" + b + "]" : (x ? "." : "") + b);
      }, "");
    },
    forEach: function(h, x, b) {
      p(Array.isArray(h) ? h : d(h), x, b);
    }
  };
  function m(h) {
    return l.get(h) || l.set(
      h,
      d(h).map(function(x) {
        return x.replace(i, "$2");
      })
    );
  }
  function d(h) {
    return h.match(e) || [""];
  }
  function p(h, x, b) {
    var _ = h.length, v, T, k, P;
    for (T = 0; T < _; T++)
      v = h[T], v && (E(v) && (v = '"' + v + '"'), P = g(v), k = !P && /^\d+$/.test(v), x.call(b, v, P, k, T, h));
  }
  function g(h) {
    return typeof h == "string" && h && ["'", '"'].indexOf(h.charAt(0)) !== -1;
  }
  function j(h) {
    return h.match(n) && !h.match(t);
  }
  function N(h) {
    return s.test(h);
  }
  function E(h) {
    return !g(h) && (j(h) || N(h));
  }
  return Ne;
}
var Ge = st(), be = { exports: {} }, Ie;
function at() {
  if (Ie) return be.exports;
  Ie = 1, be.exports = function(s) {
    return r(e(s), s);
  }, be.exports.array = r;
  function r(s, i) {
    var o = s.length, l = new Array(o), u = {}, f = o, m = t(i), d = n(s);
    for (i.forEach(function(g) {
      if (!d.has(g[0]) || !d.has(g[1]))
        throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }); f--; )
      u[f] || p(s[f], f, /* @__PURE__ */ new Set());
    return l;
    function p(g, j, N) {
      if (N.has(g)) {
        var E;
        try {
          E = ", node was:" + JSON.stringify(g);
        } catch {
          E = "";
        }
        throw new Error("Cyclic dependency" + E);
      }
      if (!d.has(g))
        throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(g));
      if (!u[j]) {
        u[j] = !0;
        var h = m.get(g) || /* @__PURE__ */ new Set();
        if (h = Array.from(h), j = h.length) {
          N.add(g);
          do {
            var x = h[--j];
            p(x, d.get(x), N);
          } while (j);
          N.delete(g);
        }
        l[--o] = g;
      }
    }
  }
  function e(s) {
    for (var i = /* @__PURE__ */ new Set(), o = 0, l = s.length; o < l; o++) {
      var u = s[o];
      i.add(u[0]), i.add(u[1]);
    }
    return Array.from(i);
  }
  function t(s) {
    for (var i = /* @__PURE__ */ new Map(), o = 0, l = s.length; o < l; o++) {
      var u = s[o];
      i.has(u[0]) || i.set(u[0], /* @__PURE__ */ new Set()), i.has(u[1]) || i.set(u[1], /* @__PURE__ */ new Set()), i.get(u[0]).add(u[1]);
    }
    return i;
  }
  function n(s) {
    for (var i = /* @__PURE__ */ new Map(), o = 0, l = s.length; o < l; o++)
      i.set(s[o], o);
    return i;
  }
  return be.exports;
}
at();
const it = Object.prototype.toString, ot = Error.prototype.toString, lt = RegExp.prototype.toString, ct = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", ut = /^Symbol\((.*)\)(.*)$/;
function dt(r) {
  return r != +r ? "NaN" : r === 0 && 1 / r < 0 ? "-0" : "" + r;
}
function De(r, e = !1) {
  if (r == null || r === !0 || r === !1) return "" + r;
  const t = typeof r;
  if (t === "number") return dt(r);
  if (t === "string") return e ? `"${r}"` : r;
  if (t === "function") return "[Function " + (r.name || "anonymous") + "]";
  if (t === "symbol") return ct.call(r).replace(ut, "Symbol($1)");
  const n = it.call(r).slice(8, -1);
  return n === "Date" ? isNaN(r.getTime()) ? "" + r : r.toISOString(r) : n === "Error" || r instanceof Error ? "[" + ot.call(r) + "]" : n === "RegExp" ? lt.call(r) : null;
}
function Z(r, e) {
  let t = De(r, e);
  return t !== null ? t : JSON.stringify(r, function(n, s) {
    let i = De(this[n], e);
    return i !== null ? i : s;
  }, 2);
}
function Qe(r) {
  return r == null ? [] : [].concat(r);
}
let Ve, We, He, ht = /\$\{\s*(\w+)\s*\}/g;
Ve = Symbol.toStringTag;
class Le {
  constructor(e, t, n, s) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[Ve] = "Error", this.name = "ValidationError", this.value = t, this.path = n, this.type = s, this.errors = [], this.inner = [], Qe(e).forEach((i) => {
      if (L.isError(i)) {
        this.errors.push(...i.errors);
        const o = i.inner.length ? i.inner : [i];
        this.inner.push(...o);
      } else
        this.errors.push(i);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
We = Symbol.hasInstance;
He = Symbol.toStringTag;
class L extends Error {
  static formatError(e, t) {
    const n = t.label || t.path || "this";
    return t = Object.assign({}, t, {
      path: n,
      originalPath: t.path
    }), typeof e == "string" ? e.replace(ht, (s, i) => Z(t[i])) : typeof e == "function" ? e(t) : e;
  }
  static isError(e) {
    return e && e.name === "ValidationError";
  }
  constructor(e, t, n, s, i) {
    const o = new Le(e, t, n, s);
    if (i)
      return o;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[He] = "Error", this.name = o.name, this.message = o.message, this.type = o.type, this.value = o.value, this.path = o.path, this.errors = o.errors, this.inner = o.inner, Error.captureStackTrace && Error.captureStackTrace(this, L);
  }
  static [We](e) {
    return Le[Symbol.hasInstance](e) || super[Symbol.hasInstance](e);
  }
}
let X = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  defined: "${path} must be defined",
  notNull: "${path} cannot be null",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path: r,
    type: e,
    value: t,
    originalValue: n
  }) => {
    const s = n != null && n !== t ? ` (cast from the value \`${Z(n, !0)}\`).` : ".";
    return e !== "mixed" ? `${r} must be a \`${e}\` type, but the final value was: \`${Z(t, !0)}\`` + s : `${r} must match the configured type. The validated value was: \`${Z(t, !0)}\`` + s;
  }
}, ft = {
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
}, mt = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, Ee = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, pt = {
  isValue: "${path} field must be ${value}"
}, gt = {
  noUnknown: "${path} field has unspecified keys: ${unknown}",
  exact: "${path} object contains unknown properties: ${properties}"
}, xt = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, yt = {
  notType: (r) => {
    const {
      path: e,
      value: t,
      spec: n
    } = r, s = n.types.length;
    if (Array.isArray(t)) {
      if (t.length < s) return `${e} tuple value has too few items, expected a length of ${s} but got ${t.length} for value: \`${Z(t, !0)}\``;
      if (t.length > s) return `${e} tuple value has too many items, expected a length of ${s} but got ${t.length} for value: \`${Z(t, !0)}\``;
    }
    return L.formatError(X.notType, r);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: X,
  string: ft,
  number: mt,
  date: Ee,
  object: gt,
  array: xt,
  boolean: pt,
  tuple: yt
});
const Xe = (r) => r && r.__isYupSchema__;
class we {
  static fromOptions(e, t) {
    if (!t.then && !t.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: n,
      then: s,
      otherwise: i
    } = t, o = typeof n == "function" ? n : (...l) => l.every((u) => u === n);
    return new we(e, (l, u) => {
      var f;
      let m = o(...l) ? s : i;
      return (f = m?.(u)) != null ? f : u;
    });
  }
  constructor(e, t) {
    this.fn = void 0, this.refs = e, this.refs = e, this.fn = t;
  }
  resolve(e, t) {
    let n = this.refs.map((i) => (
      // TODO: ? operator here?
      i.getValue(t?.value, t?.parent, t?.context)
    )), s = this.fn(n, e, t);
    if (s === void 0 || // @ts-ignore this can be base
    s === e)
      return e;
    if (!Xe(s)) throw new TypeError("conditions must return a schema object");
    return s.resolve(t);
  }
}
const ve = {
  context: "$",
  value: "."
};
class ce {
  constructor(e, t = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof e != "string") throw new TypeError("ref must be a string, got: " + e);
    if (this.key = e.trim(), e === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === ve.context, this.isValue = this.key[0] === ve.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? ve.context : this.isValue ? ve.value : "";
    this.path = this.key.slice(n.length), this.getter = this.path && Ge.getter(this.path, !0), this.map = t.map;
  }
  getValue(e, t, n) {
    let s = this.isContext ? n : this.isValue ? e : t;
    return this.getter && (s = this.getter(s || {})), this.map && (s = this.map(s)), s;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */
  cast(e, t) {
    return this.getValue(e, t?.parent, t?.context);
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
  static isRef(e) {
    return e && e.__isYupRef;
  }
}
ce.prototype.__isYupRef = !0;
const qe = (r) => r == null;
function re(r) {
  function e({
    value: t,
    path: n = "",
    options: s,
    originalValue: i,
    schema: o
  }, l, u) {
    const {
      name: f,
      test: m,
      params: d,
      message: p,
      skipAbsent: g
    } = r;
    let {
      parent: j,
      context: N,
      abortEarly: E = o.spec.abortEarly,
      disableStackTrace: h = o.spec.disableStackTrace
    } = s;
    const x = {
      value: t,
      parent: j,
      context: N
    };
    function b(y = {}) {
      const Y = Ze(Object.assign({
        value: t,
        originalValue: i,
        label: o.spec.label,
        path: y.path || n,
        spec: o.spec,
        disableStackTrace: y.disableStackTrace || h
      }, d, y.params), x), G = new L(L.formatError(y.message || p, Y), t, Y.path, y.type || f, Y.disableStackTrace);
      return G.params = Y, G;
    }
    const _ = E ? l : u;
    let v = {
      path: n,
      parent: j,
      type: f,
      from: s.from,
      createError: b,
      resolve(y) {
        return Ke(y, x);
      },
      options: s,
      originalValue: i,
      schema: o
    };
    const T = (y) => {
      L.isError(y) ? _(y) : y ? u(null) : _(b());
    }, k = (y) => {
      L.isError(y) ? _(y) : l(y);
    };
    if (g && qe(t))
      return T(!0);
    let z;
    try {
      var I;
      if (z = m.call(v, t, v), typeof ((I = z) == null ? void 0 : I.then) == "function") {
        if (s.sync)
          throw new Error(`Validation test of type: "${v.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(z).then(T, k);
      }
    } catch (y) {
      k(y);
      return;
    }
    T(z);
  }
  return e.OPTIONS = r, e;
}
function Ze(r, e) {
  if (!r) return r;
  for (const t of Object.keys(r))
    r[t] = Ke(r[t], e);
  return r;
}
function Ke(r, e) {
  return ce.isRef(r) ? r.getValue(e.value, e.parent, e.context) : r;
}
function bt(r, e, t, n = t) {
  let s, i, o;
  return e ? (Ge.forEach(e, (l, u, f) => {
    let m = u ? l.slice(1, l.length - 1) : l;
    r = r.resolve({
      context: n,
      parent: s,
      value: t
    });
    let d = r.type === "tuple", p = f ? parseInt(m, 10) : 0;
    if (r.innerType || d) {
      if (d && !f) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);
      if (t && p >= t.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${l}, in the path: ${e}. because there is no value at that index. `);
      s = t, t = t && t[p], r = d ? r.spec.types[p] : r.innerType;
    }
    if (!f) {
      if (!r.fields || !r.fields[m]) throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${r.type}")`);
      s = t, t = t && t[m], r = r.fields[m];
    }
    i = m, o = u ? "[" + l + "]" : "." + l;
  }), {
    schema: r,
    parent: s,
    parentPath: i
  }) : {
    parent: s,
    parentPath: e,
    schema: r
  };
}
class je extends Set {
  describe() {
    const e = [];
    for (const t of this.values())
      e.push(ce.isRef(t) ? t.describe() : t);
    return e;
  }
  resolveAll(e) {
    let t = [];
    for (const n of this.values())
      t.push(e(n));
    return t;
  }
  clone() {
    return new je(this.values());
  }
  merge(e, t) {
    const n = this.clone();
    return e.forEach((s) => n.add(s)), t.forEach((s) => n.delete(s)), n;
  }
}
function ne(r, e = /* @__PURE__ */ new Map()) {
  if (Xe(r) || !r || typeof r != "object") return r;
  if (e.has(r)) return e.get(r);
  let t;
  if (r instanceof Date)
    t = new Date(r.getTime()), e.set(r, t);
  else if (r instanceof RegExp)
    t = new RegExp(r), e.set(r, t);
  else if (Array.isArray(r)) {
    t = new Array(r.length), e.set(r, t);
    for (let n = 0; n < r.length; n++) t[n] = ne(r[n], e);
  } else if (r instanceof Map) {
    t = /* @__PURE__ */ new Map(), e.set(r, t);
    for (const [n, s] of r.entries()) t.set(n, ne(s, e));
  } else if (r instanceof Set) {
    t = /* @__PURE__ */ new Set(), e.set(r, t);
    for (const n of r) t.add(ne(n, e));
  } else if (r instanceof Object) {
    t = {}, e.set(r, t);
    for (const [n, s] of Object.entries(r)) t[n] = ne(s, e);
  } else
    throw Error(`Unable to clone ${r}`);
  return t;
}
function vt(r) {
  if (!(r != null && r.length))
    return;
  const e = [];
  let t = "", n = !1, s = !1;
  for (let i = 0; i < r.length; i++) {
    const o = r[i];
    if (o === "[" && !s) {
      t && (e.push(...t.split(".").filter(Boolean)), t = ""), n = !0;
      continue;
    }
    if (o === "]" && !s) {
      t && (/^\d+$/.test(t) ? e.push(t) : e.push(t.replace(/^"|"$/g, "")), t = ""), n = !1;
      continue;
    }
    if (o === '"') {
      s = !s;
      continue;
    }
    if (o === "." && !n && !s) {
      t && (e.push(t), t = "");
      continue;
    }
    t += o;
  }
  return t && e.push(...t.split(".").filter(Boolean)), e;
}
function wt(r, e) {
  const t = e ? `${e}.${r.path}` : r.path;
  return r.errors.map((n) => ({
    message: n,
    path: vt(t)
  }));
}
function Je(r, e) {
  var t;
  if (!((t = r.inner) != null && t.length) && r.errors.length)
    return wt(r, e);
  const n = e ? `${e}.${r.path}` : r.path;
  return r.inner.flatMap((s) => Je(s, n));
}
class U {
  constructor(e) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new je(), this._blacklist = new je(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(X.notType);
    }), this.type = e.type, this._typeCheck = e.check, this.spec = Object.assign({
      strip: !1,
      strict: !1,
      abortEarly: !0,
      recursive: !0,
      disableStackTrace: !1,
      nullable: !1,
      optional: !0,
      coerce: !0
    }, e?.spec), this.withMutation((t) => {
      t.nonNullable();
    });
  }
  // TODO: remove
  get _type() {
    return this.type;
  }
  clone(e) {
    if (this._mutate)
      return e && Object.assign(this.spec, e), this;
    const t = Object.create(Object.getPrototypeOf(this));
    return t.type = this.type, t._typeCheck = this._typeCheck, t._whitelist = this._whitelist.clone(), t._blacklist = this._blacklist.clone(), t.internalTests = Object.assign({}, this.internalTests), t.exclusiveTests = Object.assign({}, this.exclusiveTests), t.deps = [...this.deps], t.conditions = [...this.conditions], t.tests = [...this.tests], t.transforms = [...this.transforms], t.spec = ne(Object.assign({}, this.spec, e)), t;
  }
  label(e) {
    let t = this.clone();
    return t.spec.label = e, t;
  }
  meta(...e) {
    if (e.length === 0) return this.spec.meta;
    let t = this.clone();
    return t.spec.meta = Object.assign(t.spec.meta || {}, e[0]), t;
  }
  withMutation(e) {
    let t = this._mutate;
    this._mutate = !0;
    let n = e(this);
    return this._mutate = t, n;
  }
  concat(e) {
    if (!e || e === this) return this;
    if (e.type !== this.type && this.type !== "mixed") throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);
    let t = this, n = e.clone();
    const s = Object.assign({}, t.spec, n.spec);
    return n.spec = s, n.internalTests = Object.assign({}, t.internalTests, n.internalTests), n._whitelist = t._whitelist.merge(e._whitelist, e._blacklist), n._blacklist = t._blacklist.merge(e._blacklist, e._whitelist), n.tests = t.tests, n.exclusiveTests = t.exclusiveTests, n.withMutation((i) => {
      e.tests.forEach((o) => {
        i.test(o.OPTIONS);
      });
    }), n.transforms = [...t.transforms, ...n.transforms], n;
  }
  isType(e) {
    return e == null ? !!(this.spec.nullable && e === null || this.spec.optional && e === void 0) : this._typeCheck(e);
  }
  resolve(e) {
    let t = this;
    if (t.conditions.length) {
      let n = t.conditions;
      t = t.clone(), t.conditions = [], t = n.reduce((s, i) => i.resolve(s, e), t), t = t.resolve(e);
    }
    return t;
  }
  resolveOptions(e) {
    var t, n, s, i;
    return Object.assign({}, e, {
      from: e.from || [],
      strict: (t = e.strict) != null ? t : this.spec.strict,
      abortEarly: (n = e.abortEarly) != null ? n : this.spec.abortEarly,
      recursive: (s = e.recursive) != null ? s : this.spec.recursive,
      disableStackTrace: (i = e.disableStackTrace) != null ? i : this.spec.disableStackTrace
    });
  }
  /**
   * Run the configured transform pipeline over an input value.
   */
  cast(e, t = {}) {
    let n = this.resolve(Object.assign({}, t, {
      value: e
      // parent: options.parent,
      // context: options.context,
    })), s = t.assert === "ignore-optionality", i = n._cast(e, t);
    if (t.assert !== !1 && !n.isType(i)) {
      if (s && qe(i))
        return i;
      let o = Z(e), l = Z(i);
      throw new TypeError(`The value of ${t.path || "field"} could not be cast to a value that satisfies the schema type: "${n.type}". 

attempted value: ${o} 
` + (l !== o ? `result of cast: ${l}` : ""));
    }
    return i;
  }
  _cast(e, t) {
    let n = e === void 0 ? e : this.transforms.reduce((s, i) => i.call(this, s, e, this, t), e);
    return n === void 0 && (n = this.getDefault(t)), n;
  }
  _validate(e, t = {}, n, s) {
    let {
      path: i,
      originalValue: o = e,
      strict: l = this.spec.strict
    } = t, u = e;
    l || (u = this._cast(u, Object.assign({
      assert: !1
    }, t)));
    let f = [];
    for (let m of Object.values(this.internalTests))
      m && f.push(m);
    this.runTests({
      path: i,
      value: u,
      originalValue: o,
      options: t,
      tests: f
    }, n, (m) => {
      if (m.length)
        return s(m, u);
      this.runTests({
        path: i,
        value: u,
        originalValue: o,
        options: t,
        tests: this.tests
      }, n, s);
    });
  }
  /**
   * Executes a set of validations, either schema, produced Tests or a nested
   * schema validate result.
   */
  runTests(e, t, n) {
    let s = !1, {
      tests: i,
      value: o,
      originalValue: l,
      path: u,
      options: f
    } = e, m = (N) => {
      s || (s = !0, t(N, o));
    }, d = (N) => {
      s || (s = !0, n(N, o));
    }, p = i.length, g = [];
    if (!p) return d([]);
    let j = {
      value: o,
      originalValue: l,
      path: u,
      options: f,
      schema: this
    };
    for (let N = 0; N < i.length; N++) {
      const E = i[N];
      E(j, m, function(x) {
        x && (Array.isArray(x) ? g.push(...x) : g.push(x)), --p <= 0 && d(g);
      });
    }
  }
  asNestedTest({
    key: e,
    index: t,
    parent: n,
    parentPath: s,
    originalParent: i,
    options: o
  }) {
    const l = e ?? t;
    if (l == null)
      throw TypeError("Must include `key` or `index` for nested validations");
    const u = typeof l == "number";
    let f = n[l];
    const m = Object.assign({}, o, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: !0,
      parent: n,
      value: f,
      originalValue: i[l],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [u ? "index" : "key"]: l,
      path: u || l.includes(".") ? `${s || ""}[${u ? l : `"${l}"`}]` : (s ? `${s}.` : "") + e
    });
    return (d, p, g) => this.resolve(m)._validate(f, m, p, g);
  }
  validate(e, t) {
    var n;
    let s = this.resolve(Object.assign({}, t, {
      value: e
    })), i = (n = t?.disableStackTrace) != null ? n : s.spec.disableStackTrace;
    return new Promise((o, l) => s._validate(e, t, (u, f) => {
      L.isError(u) && (u.value = f), l(u);
    }, (u, f) => {
      u.length ? l(new L(u, f, void 0, void 0, i)) : o(f);
    }));
  }
  validateSync(e, t) {
    var n;
    let s = this.resolve(Object.assign({}, t, {
      value: e
    })), i, o = (n = t?.disableStackTrace) != null ? n : s.spec.disableStackTrace;
    return s._validate(e, Object.assign({}, t, {
      sync: !0
    }), (l, u) => {
      throw L.isError(l) && (l.value = u), l;
    }, (l, u) => {
      if (l.length) throw new L(l, e, void 0, void 0, o);
      i = u;
    }), i;
  }
  isValid(e, t) {
    return this.validate(e, t).then(() => !0, (n) => {
      if (L.isError(n)) return !1;
      throw n;
    });
  }
  isValidSync(e, t) {
    try {
      return this.validateSync(e, t), !0;
    } catch (n) {
      if (L.isError(n)) return !1;
      throw n;
    }
  }
  _getDefault(e) {
    let t = this.spec.default;
    return t == null ? t : typeof t == "function" ? t.call(this, e) : ne(t);
  }
  getDefault(e) {
    return this.resolve(e || {})._getDefault(e);
  }
  default(e) {
    return arguments.length === 0 ? this._getDefault() : this.clone({
      default: e
    });
  }
  strict(e = !0) {
    return this.clone({
      strict: e
    });
  }
  nullability(e, t) {
    const n = this.clone({
      nullable: e
    });
    return n.internalTests.nullable = re({
      message: t,
      name: "nullable",
      test(s) {
        return s === null ? this.schema.spec.nullable : !0;
      }
    }), n;
  }
  optionality(e, t) {
    const n = this.clone({
      optional: e
    });
    return n.internalTests.optionality = re({
      message: t,
      name: "optionality",
      test(s) {
        return s === void 0 ? this.schema.spec.optional : !0;
      }
    }), n;
  }
  optional() {
    return this.optionality(!0);
  }
  defined(e = X.defined) {
    return this.optionality(!1, e);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(e = X.notNull) {
    return this.nullability(!1, e);
  }
  required(e = X.required) {
    return this.clone().withMutation((t) => t.nonNullable(e).defined(e));
  }
  notRequired() {
    return this.clone().withMutation((e) => e.nullable().optional());
  }
  transform(e) {
    let t = this.clone();
    return t.transforms.push(e), t;
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
  test(...e) {
    let t;
    if (e.length === 1 ? typeof e[0] == "function" ? t = {
      test: e[0]
    } : t = e[0] : e.length === 2 ? t = {
      name: e[0],
      test: e[1]
    } : t = {
      name: e[0],
      message: e[1],
      test: e[2]
    }, t.message === void 0 && (t.message = X.default), typeof t.test != "function") throw new TypeError("`test` is a required parameters");
    let n = this.clone(), s = re(t), i = t.exclusive || t.name && n.exclusiveTests[t.name] === !0;
    if (t.exclusive && !t.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return t.name && (n.exclusiveTests[t.name] = !!t.exclusive), n.tests = n.tests.filter((o) => !(o.OPTIONS.name === t.name && (i || o.OPTIONS.test === s.OPTIONS.test))), n.tests.push(s), n;
  }
  when(e, t) {
    !Array.isArray(e) && typeof e != "string" && (t = e, e = ".");
    let n = this.clone(), s = Qe(e).map((i) => new ce(i));
    return s.forEach((i) => {
      i.isSibling && n.deps.push(i.key);
    }), n.conditions.push(typeof t == "function" ? new we(s, t) : we.fromOptions(s, t)), n;
  }
  typeError(e) {
    let t = this.clone();
    return t.internalTests.typeError = re({
      message: e,
      name: "typeError",
      skipAbsent: !0,
      test(n) {
        return this.schema._typeCheck(n) ? !0 : this.createError({
          params: {
            type: this.schema.type
          }
        });
      }
    }), t;
  }
  oneOf(e, t = X.oneOf) {
    let n = this.clone();
    return e.forEach((s) => {
      n._whitelist.add(s), n._blacklist.delete(s);
    }), n.internalTests.whiteList = re({
      message: t,
      name: "oneOf",
      skipAbsent: !0,
      test(s) {
        let i = this.schema._whitelist, o = i.resolveAll(this.resolve);
        return o.includes(s) ? !0 : this.createError({
          params: {
            values: Array.from(i).join(", "),
            resolved: o
          }
        });
      }
    }), n;
  }
  notOneOf(e, t = X.notOneOf) {
    let n = this.clone();
    return e.forEach((s) => {
      n._blacklist.add(s), n._whitelist.delete(s);
    }), n.internalTests.blacklist = re({
      message: t,
      name: "notOneOf",
      test(s) {
        let i = this.schema._blacklist, o = i.resolveAll(this.resolve);
        return o.includes(s) ? this.createError({
          params: {
            values: Array.from(i).join(", "),
            resolved: o
          }
        }) : !0;
      }
    }), n;
  }
  strip(e = !0) {
    let t = this.clone();
    return t.spec.strip = e, t;
  }
  /**
   * Return a serialized description of the schema including validations, flags, types etc.
   *
   * @param options Provide any needed context for resolving runtime schema alterations (lazy, when conditions, etc).
   */
  describe(e) {
    const t = (e ? this.resolve(e) : this).clone(), {
      label: n,
      meta: s,
      optional: i,
      nullable: o
    } = t.spec;
    return {
      meta: s,
      label: n,
      optional: i,
      nullable: o,
      default: t.getDefault(e),
      type: t.type,
      oneOf: t._whitelist.describe(),
      notOneOf: t._blacklist.describe(),
      tests: t.tests.filter((u, f, m) => m.findIndex((d) => d.OPTIONS.name === u.OPTIONS.name) === f).map((u) => {
        const f = u.OPTIONS.params && e ? Ze(Object.assign({}, u.OPTIONS.params), e) : u.OPTIONS.params;
        return {
          name: u.OPTIONS.name,
          params: f
        };
      })
    };
  }
  get "~standard"() {
    const e = this;
    return {
      version: 1,
      vendor: "yup",
      async validate(n) {
        try {
          return {
            value: await e.validate(n, {
              abortEarly: !1
            })
          };
        } catch (s) {
          if (s instanceof L)
            return {
              issues: Je(s)
            };
          throw s;
        }
      }
    };
  }
}
U.prototype.__isYupSchema__ = !0;
for (const r of ["validate", "validateSync"]) U.prototype[`${r}At`] = function(e, t, n = {}) {
  const {
    parent: s,
    parentPath: i,
    schema: o
  } = bt(this, e, t, n.context);
  return o[r](s && s[i], Object.assign({}, n, {
    parent: s,
    path: e
  }));
};
for (const r of ["equals", "is"]) U.prototype[r] = U.prototype.oneOf;
for (const r of ["not", "nope"]) U.prototype[r] = U.prototype.notOneOf;
const jt = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function Nt(r) {
  const e = Tt(r);
  if (!e) return Date.parse ? Date.parse(r) : Number.NaN;
  if (e.z === void 0 && e.plusMinus === void 0)
    return new Date(e.year, e.month, e.day, e.hour, e.minute, e.second, e.millisecond).valueOf();
  let t = 0;
  return e.z !== "Z" && e.plusMinus !== void 0 && (t = e.hourOffset * 60 + e.minuteOffset, e.plusMinus === "+" && (t = 0 - t)), Date.UTC(e.year, e.month, e.day, e.hour, e.minute + t, e.second, e.millisecond);
}
function Tt(r) {
  var e, t;
  const n = jt.exec(r);
  return n ? {
    year: H(n[1]),
    month: H(n[2], 1) - 1,
    day: H(n[3], 1),
    hour: H(n[4]),
    minute: H(n[5]),
    second: H(n[6]),
    millisecond: n[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      H(n[7].substring(0, 3))
    ) : 0,
    precision: (e = (t = n[7]) == null ? void 0 : t.length) != null ? e : void 0,
    z: n[8] || void 0,
    plusMinus: n[9] || void 0,
    hourOffset: H(n[10]),
    minuteOffset: H(n[11])
  } : null;
}
function H(r, e = 0) {
  return Number(r) || e;
}
let Et = /* @__PURE__ */ new Date(""), kt = (r) => Object.prototype.toString.call(r) === "[object Date]";
class Se extends U {
  constructor() {
    super({
      type: "date",
      check(e) {
        return kt(e) && !isNaN(e.getTime());
      }
    }), this.withMutation(() => {
      this.transform((e, t) => !this.spec.coerce || this.isType(e) || e === null ? e : (e = Nt(e), isNaN(e) ? Se.INVALID_DATE : new Date(e)));
    });
  }
  prepareParam(e, t) {
    let n;
    if (ce.isRef(e))
      n = e;
    else {
      let s = this.cast(e);
      if (!this._typeCheck(s)) throw new TypeError(`\`${t}\` must be a Date or a value that can be \`cast()\` to a Date`);
      n = s;
    }
    return n;
  }
  min(e, t = Ee.min) {
    let n = this.prepareParam(e, "min");
    return this.test({
      message: t,
      name: "min",
      exclusive: !0,
      params: {
        min: e
      },
      skipAbsent: !0,
      test(s) {
        return s >= this.resolve(n);
      }
    });
  }
  max(e, t = Ee.max) {
    let n = this.prepareParam(e, "max");
    return this.test({
      message: t,
      name: "max",
      exclusive: !0,
      params: {
        max: e
      },
      skipAbsent: !0,
      test(s) {
        return s <= this.resolve(n);
      }
    });
  }
}
Se.INVALID_DATE = Et;
function St(r) {
  return r.template ? r.template : "tab";
}
function $t(r) {
  const e = {};
  return Object.entries(r).forEach(([t, n]) => {
    const s = n.group || "General";
    e[s] || (e[s] = { label: s, type: "fields", fields: [] }), e[s]?.fields?.push({ name: t, ...n });
  }), e;
}
const ue = {
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
function de(r) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(r) ? r : 6;
}
const K = (r, e) => typeof r == "string" ? r.replace(
  /#(\w+)#/g,
  (t, n) => e[n] !== void 0 ? String(e[n]) : t
) : Array.isArray(r) ? r.map((t) => K(t, e)) : r && typeof r == "object" ? Object.fromEntries(
  Object.entries(r).map(([t, n]) => [
    K(t, e),
    K(n, e)
  ])
) : r, Ue = (r) => {
  const e = Array.isArray(r?.data?.data) ? r.data.data[0] : Array.isArray(r?.data) ? r.data[0] : r?.data?.data ?? r?.data;
  return e && typeof e == "object" && !Array.isArray(e) ? e : null;
}, Me = (r, e, t) => {
  const n = Array.isArray(t?.data?.data) ? t.data.data : Array.isArray(t?.data) ? t.data : t;
  if (!Array.isArray(n) || n.length === 0)
    return {};
  const s = {};
  return n.forEach((i) => {
    i[r] != null && i[e] != null && (s[i[r]] = i[e]);
  }), s;
};
function ze(r, e) {
  if (!e || Object.keys(e).length === 0) return r;
  if (typeof r == "number")
    return e[String(r)] ?? r;
  if (typeof r == "string") {
    const n = r.split(",").map((s) => s.trim()).map((s) => e[s]).filter(Boolean);
    return n.length ? n.join(", ") : r;
  }
  return r;
}
const et = "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg";
function he({ field: r, data: e, methods: t = {}, sqlOpsUrls: n, refid: s }) {
  const i = r?.name, o = `
    text-sm text-gray-600 break-words
  `, l = `
    block text-sm font-semibold  transition-all duration-300 text-gray-700 capitalize
  `, [u, f] = F(
    r.options ?? {}
  );
  V.useEffect(() => {
    let j = !0;
    return (async () => {
      if (r?.options) {
        f(r.options);
        return;
      }
      const E = r?.source ?? {};
      if (E.type === "method") {
        const h = E.method, x = h ? t[h] : void 0;
        if (x)
          try {
            const b = await Promise.resolve(x());
            j && f(b ?? {});
          } catch (b) {
            console.error("Method execution failed:", b), j && f({});
          }
        else
          j && f({});
      }
      if (E.type === "api" && E.url)
        try {
          const h = await M({
            method: E.method || "GET",
            url: E.url,
            data: E.body ?? {},
            params: E.params ?? {},
            headers: E.headers ?? {}
          }), x = r.valueKey || "value", b = r.labelKey || "title", _ = Me(x, b, h);
          j && f(_);
        } catch (h) {
          console.error("API execution failed:", h), j && f({});
        }
      if (r.table || r.type === "dataSelector") {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let h;
          if (r.type === "dataSelector")
            h = {
              ...r,
              table: "do_lists",
              cols: "title,value",
              where: {
                groupid: r.groupid ?? ""
              }
            };
          else {
            if (!r.table || !r.columns) {
              console.error("Invalid SQL field config", r);
              return;
            }
            h = {
              ...r,
              table: r.table,
              cols: r.columns
            };
          }
          r.where && r.type !== "dataSelector" && (h.where = s ? K(r.where, { refid: s }) : r.where);
          const x = await M({
            method: "POST",
            url: n.baseURL + n.registerQuery,
            data: { query: h },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }), b = await M({
            method: "POST",
            url: n.baseURL + n.runQuery,
            data: {
              queryid: x.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }), _ = r.valueKey || "value", v = r.labelKey || "title", T = Me(_, v, b);
          j && f(T);
        } catch (h) {
          console.error("API fetch failed:", h);
        }
      }
    })(), () => {
      j = !1;
    };
  }, [
    r.options,
    r.source,
    r.table,
    r.columns,
    r.where,
    s
  ]);
  const m = typeof i == "string" ? e?.[i] : void 0, d = typeof m == "string" ? r.type === "date" ? m.split("T")[0] : r.type === "time" ? m.includes("T") ? m.slice(11, 16) : m.slice(0, 5) : ze(m, u) : ze(m, u), p = typeof i == "string" && (i.toLowerCase().includes("avatar") || i.toLowerCase().includes("logo")), g = d == null ? "" : typeof d == "string" || typeof d == "number" ? d : JSON.stringify(d);
  return /* @__PURE__ */ a.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ a.jsx("label", { className: l, children: r?.label }),
    /* @__PURE__ */ a.jsx("div", { className: "relative", children: p ? /* @__PURE__ */ a.jsx(
      "img",
      {
        src: String(d),
        alt: "avatar",
        className: "w-16 h-16 rounded-full object-cover border",
        onError: (j) => {
          const N = j.currentTarget;
          N.onerror = null, N.src = et;
        }
      }
    ) : /* @__PURE__ */ a.jsx("p", { className: o, children: g }) })
  ] });
}
function _t({ commonInfo: r, infoData: e, hiddenFields: t = [] }) {
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white border border-gray-100 p-4 min-h-3/10 overflow-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    /* @__PURE__ */ a.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ a.jsx("div", { className: "relative w-42 h-42", children: /* @__PURE__ */ a.jsx(
      "img",
      {
        src: String(e.avatar_photo),
        alt: "Profile",
        className: " w-full h-full object-cover border-4 rounded-[12px] border-white shadow-lg",
        onError: (n) => {
          const s = n.currentTarget;
          s.onerror = null, s.src = et;
        }
      }
    ) }) }),
    /* @__PURE__ */ a.jsx("div", { className: "lg:col-span-10 min-h-0 max-h-40  overflow-y-auto custom-scrollbar", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: r.fields?.map((n, s) => {
      const i = e?.[n.name];
      return t.includes(n.name) || !i && i !== !1 && i !== 0 ? null : /* @__PURE__ */ a.jsx("div", { className: `hover:bg-gray-100 transition-colors duration-200 col-span-12 sm:col-span-6 ${ue[de(n.width)] || "lg:col-span-4"}`, children: /* @__PURE__ */ a.jsx(
        he,
        {
          field: n,
          data: e ?? {}
        },
        n?.name || s
      ) }, n.name);
    }) }) })
  ] }) });
}
function $e({ tabObj: r, methods: e, tabName: t, sqlOpsUrls: n, refid: s }) {
  const [i, o] = V.useState(null);
  return V.useEffect(() => {
    let l = !1;
    return (async () => {
      const f = r?.config;
      if (!f?.type) {
        l || o(null);
        return;
      }
      if (f.type === "method") {
        const m = f.method, d = m ? e[m] : void 0;
        if (d)
          try {
            const p = await Promise.resolve(d());
            l || o(p || null);
          } catch (p) {
            console.error("Method execution failed:", p), l || o(null);
          }
        else
          l || o(null);
      }
      if (f.type === "api")
        try {
          const m = await M({
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
          l || o(m.data || null);
        } catch (m) {
          console.error("API fetch failed:", m), l || o(null);
        }
      if (f.type === "sql" && s && s != "0") {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const m = await M({
            method: "POST",
            url: n.baseURL + n.registerQuery,
            data: {
              query: {
                ...f,
                cols: f.cols,
                table: f.table,
                where: K(f.where, {
                  refid: f.refid
                })
              }
            },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }), d = await M({
            method: "POST",
            url: n.baseURL + n.runQuery,
            data: {
              queryid: m.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }), p = Ue(d);
          l || o(p);
        } catch (m) {
          console.error("API fetch failed:", m);
        }
      }
    })(), () => {
      l = !0;
    };
  }, [
    r?.config?.type || "",
    r?.config?.method || "",
    r?.config?.url || "",
    JSON.stringify(r?.config?.params || {}),
    JSON.stringify(r?.config?.body || {}),
    JSON.stringify(r?.config?.headers || {})
  ]), /* @__PURE__ */ a.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: i ? Object.keys(i).map((l, u) => /* @__PURE__ */ a.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${ue[de(r.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ a.jsx(
        he,
        {
          field: { name: l, label: l },
          data: i ?? {},
          methods: e,
          refid: s,
          sqlOpsUrls: n
        },
        l
      )
    },
    `field-${u}`
  )) : /* @__PURE__ */ a.jsx("div", { className: "col-span-12 flex flex-col  min-h-0", children: /* @__PURE__ */ a.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center text-gray-500", children: [
    /* @__PURE__ */ a.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ a.jsxs("svg", { className: "w-8 h-8 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
      /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" }),
      /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m8 7 4-4 4 4" })
    ] }) }),
    /* @__PURE__ */ a.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No Data Available" }),
    /* @__PURE__ */ a.jsx("p", { className: "text-sm text-gray-500 text-center max-w-sm", children: "There are no records to display  at the moment." })
  ] }) }) }) });
}
function Ot({
  open: r,
  title: e = "Confirm Delete",
  message: t = "Are you sure you want to delete this record?",
  onConfirm: n,
  onCancel: s
}) {
  return r ? /* @__PURE__ */ a.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40", children: /* @__PURE__ */ a.jsxs("div", { className: "bg-white rounded-lg shadow-lg w-full max-w-sm p-4", children: [
    /* @__PURE__ */ a.jsx("h3", { className: "text-sm font-semibold text-gray-900", children: e }),
    /* @__PURE__ */ a.jsx("p", { className: "mt-2 text-sm text-gray-600", children: t }),
    /* @__PURE__ */ a.jsxs("div", { className: "mt-4 flex justify-end gap-2", children: [
      /* @__PURE__ */ a.jsx(
        "button",
        {
          onClick: s,
          className: "px-3 py-1.5 text-sm rounded border border-gray-300 text-gray-700 hover:bg-gray-50",
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ a.jsx(
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
function _e({ tabObj: r, methods: e, tabName: t, sqlOpsUrls: n, refid: s, Reports: i, toast: o, handleAction: l, infoViewJson: u }) {
  const [f, m] = F(1), [d, p] = F(10), [g, j] = F(""), [N, E] = F(!1), [h, x] = F(null), [b, _] = V.useState([]);
  ke(null);
  const [v, T] = F(null), [k, P] = F({ key: "", direction: null }), [z, I] = F(null), y = r?.config;
  console.log("tabObj", r), console.log("source", y);
  const Y = V.useCallback(async () => {
    if (!y?.type) {
      _([]);
      return;
    }
    if (y.type === "method") {
      const S = y.method, $ = S ? e[S] : void 0;
      if (!$) {
        _([]);
        return;
      }
      try {
        const A = await Promise.resolve($());
        _(A || []);
      } catch {
        _([]);
      }
    }
    if (y.type === "api")
      try {
        const S = await M({
          method: y.method || "GET",
          url: y.url,
          data: y.body || {},
          params: y.params || {},
          headers: y.headers || {}
        });
        _(S.data || []);
      } catch (S) {
        console.error("API fetch failed:", S), _([]);
      }
    if (y.type === "sql" && s && s !== "0") {
      if (!n) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const { form: S, actions: $, uimode: A, type: R, unilinks: C, DEBUG: ee, ...ae } = y, ie = await M({
          method: "POST",
          url: n.baseURL + n.registerQuery,
          data: {
            query: {
              ...ae,
              where: K(y.where, { refid: s })
            }
          },
          headers: {
            Authorization: `Bearer ${n.accessToken}`
          }
        }), te = await M({
          method: "POST",
          url: n.baseURL + n.runQuery,
          data: {
            queryid: ie.data.queryid,
            filter: {}
          },
          headers: {
            Authorization: `Bearer ${n.accessToken}`
          }
        });
        _(te.data?.data ?? te.data ?? []);
      } catch (S) {
        console.error("SQL fetch failed:", S);
      }
    }
  }, [
    r?.config,
    e,
    s,
    n
  ]);
  V.useEffect(() => {
    Y();
  }, [
    Y
  ]);
  const G = Array.isArray(b) ? b : [b], q = ((S) => {
    const $ = /* @__PURE__ */ new Set();
    return S.forEach((A) => {
      A && typeof A == "object" && Object.keys(A).forEach((R) => $.add(R));
    }), Array.from($);
  })(G);
  r?.vmode;
  const W = r?.config, J = W?.["popup.form"] ? "popup.form" : (W?.form, "form"), me = W?.[J] && Object.keys(W?.[J]).length > 0;
  W?.info && Object.keys(W?.info).length > 0;
  const pe = (S) => !k.key || !k.direction ? S : [...S].sort(($, A) => {
    const R = $[k.key], C = A[k.key];
    if (R == null) return k.direction === "asc" ? 1 : -1;
    if (C == null) return k.direction === "asc" ? -1 : 1;
    if (typeof R == "boolean" && typeof C == "boolean")
      return k.direction === "asc" ? R === C ? 0 : R ? -1 : 1 : R === C ? 0 : R ? 1 : -1;
    const ee = new Date(R), ae = new Date(C);
    if (!isNaN(ee.getTime()) && !isNaN(ae.getTime()))
      return k.direction === "asc" ? ee.getTime() - ae.getTime() : ae.getTime() - ee.getTime();
    const ie = parseFloat(R), te = parseFloat(C);
    if (!isNaN(ie) && !isNaN(te))
      return k.direction === "asc" ? ie - te : te - ie;
    const ge = String(R).toLowerCase(), xe = String(C).toLowerCase();
    return k.direction === "asc" ? ge < xe ? -1 : ge > xe ? 1 : 0 : ge > xe ? -1 : ge < xe ? 1 : 0;
  }), c = Oe(() => {
    let S = G;
    if (g.trim()) {
      const $ = g.toLowerCase();
      S = G.filter((A) => q.some((R) => {
        const C = A[R];
        return C == null ? !1 : String(C).toLowerCase().includes($);
      }));
    }
    return pe(S);
  }, [G, g, q, k]);
  Math.ceil(c.length / d);
  const w = (f - 1) * d, O = w + d;
  c.slice(w, O);
  const D = (S) => {
    x(S), E(!0);
  }, Q = async () => {
    if (h?.id) {
      if (!n) {
        I({ type: "error", message: "Delete configuration missing." });
        return;
      }
      try {
        let S = r?.config;
        const $ = S?.["popup.form"] ? "popup.form" : (S?.form, "form");
        console.log("config?.[formType]", S?.[$]);
        const A = S?.[$];
        if (!A?.source) throw new Error("Form source missing");
        const R = await M({
          method: "GET",
          url: n.baseURL + n.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${n.accessToken}`
          }
        });
        let C = { ...A.source, refid: h.id };
        A.source.where && (C = {
          ...C,
          where: K(A.source.where, {
            refid: h.id
          })
        });
        const ee = await M({
          method: "POST",
          url: n.baseURL + n.dbopsGetRefId,
          data: {
            operation: "update",
            source: C,
            fields: A.fields,
            forcefill: A.forcefill,
            datahash: R.data.refhash
          },
          headers: {
            Authorization: `Bearer ${n.accessToken}`
          }
        });
        await M({
          method: "POST",
          url: n.baseURL + n.dbopsUpdate,
          data: {
            refid: ee.data.refid,
            fields: { blocked: "true" },
            datahash: R.data.refhash
          },
          headers: {
            Authorization: `Bearer ${n.accessToken}`
          }
        }), window.alert("Record deleted successfully."), Y();
      } catch (S) {
        console.error(S), window.alert("Failed to delete record. Please try again");
      } finally {
        x(null), E(!1), setTimeout(() => I(null), 3e3);
      }
    }
  }, B = () => {
    x(null), E(!1);
  }, se = () => {
    e?.addInfoRecord?.({ [J]: r?.config?.[J] }, s);
  };
  return Oe(() => ({
    totalRows: c.length,
    columns: q.length,
    currentPageStart: w + 1,
    currentPageEnd: Math.min(O, c.length),
    isFiltered: g.trim().length > 0
  }), [c, G, q, w, O]), G.length === 0 || q.length === 0 ? /* @__PURE__ */ a.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center text-gray-500", children: [
    /* @__PURE__ */ a.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ a.jsxs("svg", { className: "w-8 h-8 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
      /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" }),
      /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m8 7 4-4 4 4" })
    ] }) }),
    /* @__PURE__ */ a.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No Data Available" }),
    /* @__PURE__ */ a.jsx("p", { className: "text-sm text-gray-500 text-center max-w-sm", children: "There are no records to display in the grid view at the moment." }),
    me && /* @__PURE__ */ a.jsxs(
      "button",
      {
        onClick: se,
        className: "mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-action cursor-pointer",
        children: [
          /* @__PURE__ */ a.jsx("svg", { className: "w-4 h-4 mr-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 4v16m8-8H4" }) }),
          "Add Record"
        ]
      }
    )
  ] }) : /* @__PURE__ */ a.jsx(a.Fragment, { children: i ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      i,
      {
        methods: { ...e, deleteRecord: D },
        report: {
          ...y,
          source: {
            table: y?.table,
            type: "sql",
            cols: y?.cols,
            where: y?.where,
            orderby: y?.orderby
          },
          endPoints: n,
          actions: { ...y?.actions, ...u?.buttons, ...u.actions },
          datagrid: y?.datagrid,
          buttons: y?.buttons
        },
        onButtonClick: l
      }
    ),
    /* @__PURE__ */ a.jsx(
      Ot,
      {
        open: N,
        onConfirm: Q,
        onCancel: B
      }
    )
  ] }) : /* @__PURE__ */ a.jsx("div", { className: "text-sm text-gray-500 text-center py-4", children: "Reports component is not available." }) });
}
const Fe = ({ groups: r, groupNames: e, setActiveTabIndex: t, activeTabIndex: n }) => /* @__PURE__ */ a.jsx(
  "nav",
  {
    className: "flex flex-col overflow-y-auto h-full px-2 py-1 space-y-1",
    children: e.length > 0 ? e.map((s, i) => /* @__PURE__ */ a.jsx(
      "button",
      {
        type: "button",
        onClick: () => t(i),
        className: `cursor-pointer w-full text-left py-2 px-3 rounded-md text-sm font-semibold transition-all duration-200 ${n === i ? "bg-white shadow text-action" : "text-gray-600 hover:bg-white/50"}`,
        children: /* @__PURE__ */ a.jsx("span", { className: "truncate", children: r[s]?.label || s })
      },
      s
    )) : /* @__PURE__ */ a.jsx("div", { className: "py-3 px-2 text-sm text-gray-500", children: "No group available" })
  }
), At = ({
  groups: r,
  groupNames: e,
  setActiveTabIndex: t,
  activeTabIndex: n,
  layoutConfig: s,
  showScrollHint: i,
  isCommonInfo: o,
  tabsNavRef: l
}) => {
  const [u, f] = F(!1), m = ke(null);
  return Te(() => {
    const d = (p) => {
      m.current && !m.current.contains(p.target) && f(!1);
    };
    return document.addEventListener("mousedown", d), () => document.removeEventListener("mousedown", d);
  }, []), /* @__PURE__ */ a.jsxs("div", { className: s?.tabNavClass || "relative z-10", children: [
    i && /* @__PURE__ */ a.jsx("div", { className: "absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 flex items-center justify-center", children: /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => l.current?.scrollBy({ left: -200, behavior: "smooth" }),
        className: "w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group",
        children: /* @__PURE__ */ a.jsx("svg", { className: "w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
      }
    ) }),
    /* @__PURE__ */ a.jsxs("div", { className: "absolute right-0 top-1/2 -translate-y-1/2 z-20 w-18 flex items-center justify-between pr-1", children: [
      i && /* @__PURE__ */ a.jsx(
        "button",
        {
          onClick: () => l.current?.scrollBy({ left: 200, behavior: "smooth" }),
          className: "w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group",
          children: /* @__PURE__ */ a.jsx("svg", { className: "w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
        }
      ),
      /* @__PURE__ */ a.jsxs("div", { className: "relative", ref: m, children: [
        /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => f(!u),
            className: "ml-1 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200",
            children: "⋮"
          }
        ),
        u && /* @__PURE__ */ a.jsx("div", { className: "absolute right-0 mt-2 w-48 max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-30", children: e.map((d, p) => /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              t(p), f(!1);
            },
            className: `w-full text-left px-3 py-2 text-sm truncate hover:bg-gray-100 ${n === p ? "bg-gray-50 font-semibold text-action" : "text-gray-700"}`,
            children: r[d]?.label || d
          },
          d
        )) })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: `relative bg-gray-100 ${o ? "" : "rounded-t-lg"} px-12 pt-1 shadow-inner overflow-hidden`, children: /* @__PURE__ */ a.jsx(
      "nav",
      {
        ref: l,
        className: "relative flex overflow-x-auto scrollbar-hide scroll-smooth",
        style: {
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        },
        children: e.length > 0 ? e.map((d, p) => /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            onClick: () => t(p),
            className: `relative cursor-pointer flex-shrink-0
            min-w-[8rem]   
            py-2 px-8
            rounded-t-lg text-xs sm:text-sm font-semibold
            transition-all duration-300 ease-out
            focus:outline-none whitespace-nowrap
            ${n === p ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
            children: /* @__PURE__ */ a.jsx("span", { className: "relative z-10 flex items-center justify-center gap-1 sm:gap-2", children: /* @__PURE__ */ a.jsx("span", { className: "truncate", children: r[d]?.label || d }) })
          },
          d
        )) : /* @__PURE__ */ a.jsx("div", { className: "py-3 px-6 text-sm text-gray-500", children: "No group available" })
      }
    ) })
  ] });
}, Be = ({
  groupNames: r,
  activeTabIndex: e,
  layoutConfig: t,
  tabObj: n,
  infoData: s,
  setActiveTabIndex: i,
  renderView: o,
  methods: l = {},
  refid: u,
  sqlOpsUrls: f
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: "bg-white rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex-1 flex flex-col min-h-0",
    children: [
      r.length > 0 ? n?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: t?.fieldGridClass || "grid grid-cols-12 gap-2", children: n.fields.map((m, d) => /* @__PURE__ */ a.jsx(
        "div",
        {
          className: `col-span-12 sm:col-span-6 ${ue[de(m.width)] || "lg:col-span-2"}`,
          children: /* @__PURE__ */ a.jsx(
            he,
            {
              field: m,
              data: s ?? {},
              methods: l,
              refid: u,
              sqlOpsUrls: f
            }
          )
        },
        m?.name ?? `field-${d}`
      )) }) }) : n ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: o(n, r[e] || "") }) : null : /* @__PURE__ */ a.jsx("div", { className: "flex-1 col-span-full text-center py-8 text-gray-500", children: "No data available" }),
      r.length > 5 && /* @__PURE__ */ a.jsxs("div", { className: "mt-10 pt-2 border-t border-gray-100 flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-500", children: [
          /* @__PURE__ */ a.jsxs("span", { children: [
            "Tab ",
            e + 1,
            " of ",
            r.length
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "flex gap-1", children: [
            r.slice(0, 5).map((m, d) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${d === e ? "bg-action w-6" : "bg-gray-300"}`
              },
              d
            )),
            r.length > 5 && /* @__PURE__ */ a.jsxs("span", { className: "text-xs text-gray-400 ml-1", children: [
              "+",
              r.length - 5
            ] })
          ] })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "hidden sm:flex gap-2", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: () => i(Math.max(0, e - 1)),
              disabled: e === 0,
              className: "px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
              children: "Previous"
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: () => i(Math.min(r.length - 1, e + 1)),
              disabled: e === r.length - 1,
              className: "px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
              children: "Next"
            }
          )
        ] })
      ] }),
      r.length <= 5 && /* @__PURE__ */ a.jsx("div", { className: "mt-6 pt-3 border-t border-gray-100", children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Tab ",
          e + 1,
          " of ",
          r.length
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "flex gap-1", children: r.map((m, d) => /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `w-2 h-2 rounded-full transition-all duration-300 ${d === e ? "bg-action w-6" : "bg-gray-300"}`
          },
          d
        )) })
      ] }) })
    ]
  },
  r[e]
);
function Ye({
  groups: r,
  methods: e = {},
  infoData: t,
  viewRenderers: n = {},
  isCommonInfo: s,
  layoutConfig: i = {},
  viewMode: o,
  sqlOpsUrls: l = {},
  refid: u,
  Reports: f,
  toast: m = {},
  handleAction: d = () => {
  },
  infoViewJson: p
}) {
  const [g, j] = F(0), [N, E] = F(!1), h = ke(null), x = Object.keys(r);
  Te(() => {
    const I = () => {
      if (h.current) {
        const y = h.current;
        E(y.scrollWidth > y.clientWidth);
      }
    };
    return I(), window.addEventListener("resize", I), () => window.removeEventListener("resize", I);
  }, [x.length]), Te(() => {
    if (h.current && x.length > 0) {
      const I = h.current.children[g];
      I && I.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [g, x.length]);
  const b = o === "tableft", _ = o === "tabright", v = !b && !_, T = r[x[g] ?? ""] || null, k = {
    single: (I, y) => /* @__PURE__ */ a.jsx($e, { tabObj: I, methods: e, tabName: y, sqlOpsUrls: l, refid: u }),
    grid: (I, y) => /* @__PURE__ */ a.jsx(
      _e,
      {
        ...f ? { Reports: f } : {},
        toast: m,
        handleAction: d,
        tabObj: I,
        methods: e,
        tabName: y,
        sqlOpsUrls: l,
        refid: u,
        infoViewJson: p
      }
    )
  }, P = T?.config?.uimode, z = n[P] || k[P] || (() => /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No UI mode for this type" }));
  return v ? /* @__PURE__ */ a.jsxs("div", { className: "flex-1 flex flex-col min-h-0 ", children: [
    /* @__PURE__ */ a.jsx(
      At,
      {
        groupNames: x,
        groups: r,
        setActiveTabIndex: j,
        activeTabIndex: g,
        tabsNavRef: h,
        isCommonInfo: s,
        showScrollHint: N,
        layoutConfig: i
      }
    ),
    /* @__PURE__ */ a.jsx(
      Be,
      {
        groupNames: x,
        activeTabIndex: g,
        layoutConfig: i,
        tabObj: T,
        infoData: t,
        setActiveTabIndex: j,
        renderView: z,
        groups: r,
        methods: e,
        refid: u,
        sqlOpsUrls: l
      }
    )
  ] }) : /* @__PURE__ */ a.jsxs("div", { className: "flex-1 flex min-h-0", children: [
    b && /* @__PURE__ */ a.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ a.jsx(
      Fe,
      {
        groupNames: x,
        groups: r,
        setActiveTabIndex: j,
        activeTabIndex: g
      }
    ) }),
    /* @__PURE__ */ a.jsx("main", { className: "flex-1 flex flex-col min-h-0 overflow-auto", children: /* @__PURE__ */ a.jsx(
      Be,
      {
        groupNames: x,
        activeTabIndex: g,
        layoutConfig: i,
        tabObj: T,
        infoData: t,
        setActiveTabIndex: j,
        renderView: z,
        groups: r,
        methods: e,
        refid: u,
        sqlOpsUrls: l
      }
    ) }),
    _ && /* @__PURE__ */ a.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ a.jsx(
      Fe,
      {
        groupNames: x,
        groups: r,
        setActiveTabIndex: j,
        activeTabIndex: g
      }
    ) })
  ] });
}
function Rt({ title: r, children: e, isFirst: t }) {
  const [n, s] = F(t);
  return /* @__PURE__ */ a.jsx("div", { className: "group relative mt-1 flex-1 flex flex-col min-h-0 max-h-screen", children: /* @__PURE__ */ a.jsxs("div", { className: "flex-1 flex flex-col min-h-0 relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ a.jsxs(
      "button",
      {
        onClick: () => s(!n),
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: [
          /* @__PURE__ */ a.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ a.jsx("div", { className: `w-3 h-3 rounded-full transition-all duration-300 ${n ? "bg-action" : "bg-gray-300"}` }),
            /* @__PURE__ */ a.jsx("h3", { className: "text-md capitalize font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: r })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: `relative transition-all duration-300 ${n ? "rotate-180" : ""}`, children: [
            /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-full blur-md transition-opacity duration-300 ${n ? "bg-action opacity-30" : "bg-transparent opacity-0"}` }),
            /* @__PURE__ */ a.jsx(
              "svg",
              {
                className: "relative w-4 h-4 text-gray-500 group-hover:text-action-500 transition-colors duration-300",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: `flex-1 flex flex-col min-h-0 transition-all  duration-500 ease-in-out overflow-hidden ${n ? "max-h-full opacity-100" : "max-h-0 opacity-0"}`,
        children: /* @__PURE__ */ a.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white flex-1 flex flex-col min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: "space-y-5 pt-4 flex-1 flex flex-col min-h-0 overflow-y-auto", children: e }) })
      }
    )
  ] }) });
}
function Pt({
  groups: r,
  methods: e = {},
  infoData: t,
  viewRenderers: n = {},
  sqlOpsUrls: s = {},
  refid: i,
  Reports: o,
  toast: l = {},
  handleAction: u = () => {
  },
  infoViewJson: f
}) {
  const m = {
    single: (d, p) => /* @__PURE__ */ a.jsx($e, { tabObj: d, methods: e, tabName: p, sqlOpsUrls: s, refid: i }),
    grid: (d, p) => /* @__PURE__ */ a.jsx(
      _e,
      {
        ...o ? { Reports: o } : {},
        toast: l,
        infoViewJson: f,
        handleAction: u,
        tabObj: d,
        methods: e,
        tabName: p,
        sqlOpsUrls: s,
        refid: i
      }
    )
  };
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ a.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ a.jsx("div", { className: "space-y-2 flex flex-col min-h-0", children: r && Object.entries(r).map(([d, p], g) => /* @__PURE__ */ a.jsx(Rt, { title: d, isFirst: g === 0, children: p?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: p.fields.map((j, N) => /* @__PURE__ */ a.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${ue[de(j.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ a.jsx(he, { methods: e, field: j, data: t ?? {}, sqlOpsUrls: s, refid: i })
    },
    j?.name ?? `field-${N}`
  )) }) }) : p ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: n[p.config?.uimode]?.(p) || m[p.config?.uimode]?.(p, d) || /* @__PURE__ */ a.jsx("div", { children: "No renderer for this type" }) }) : null }, d)) }) }) });
}
function Ct({ title: r, children: e }) {
  return /* @__PURE__ */ a.jsx("div", { className: "group relative mt-1 flex-1 flex flex-col min-h-0 max-h-screen", children: /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col min-h-0 relative  bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ a.jsx(
      "button",
      {
        className: "w-full bg-gray-50 flex justify-between items-center px-6 py-3 b text-left transition-all duration-300 ",
        children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ a.jsx("div", { className: "w-3 h-3 rounded-full transition-all duration-300 bg-action" }),
          /* @__PURE__ */ a.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r capitalize from-gray-800 to-gray-600 bg-clip-text text-transparent", children: r })
        ] })
      }
    ),
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: `flex flex-col min-h-0 transition-all duration-500 ease-in-out opacity-100'
            }`,
        children: /* @__PURE__ */ a.jsx("div", { className: "px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white flex flex-col min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: "space-y-5 pt-4 flex-1 flex flex-col min-h-0 overflow-y-auto", children: e }) })
      }
    )
  ] }) });
}
function It({
  groups: r,
  methods: e = {},
  infoData: t,
  viewRenderers: n = {},
  sqlOpsUrls: s = {},
  refid: i,
  Reports: o,
  toast: l = {},
  handleAction: u = () => {
  },
  infoViewJson: f
}) {
  const m = {
    single: (d, p) => /* @__PURE__ */ a.jsx($e, { tabObj: d, methods: e, tabName: p, sqlOpsUrls: s, refid: i }),
    grid: (d, p) => /* @__PURE__ */ a.jsx(
      _e,
      {
        ...o ? { Reports: o } : {},
        toast: l,
        handleAction: u,
        tabObj: d,
        methods: e,
        tabName: p,
        sqlOpsUrls: s,
        refid: i,
        infoViewJson: f
      }
    )
  };
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ a.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ a.jsx("div", { className: "space-y-2  flex flex-col min-h-0", children: r && Object.entries(r).map(([d, p], g) => /* @__PURE__ */ a.jsx(Ct, { title: d, children: p?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: p.fields.map((j, N) => /* @__PURE__ */ a.jsx(
    "div",
    {
      className: `col-span-12 sm:col-span-6 ${ue[de(j.width)] || "lg:col-span-2"}`,
      children: /* @__PURE__ */ a.jsx(he, { methods: e, field: j, data: t ?? {}, sqlOpsUrls: s, refid: i })
    },
    j?.name ?? `field-${N}`
  )) }) }) : p ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: n[p.config?.uimode]?.(p) || m[p.config?.uimode]?.(p, d) || /* @__PURE__ */ a.jsx("div", { children: "No renderer for this type" }) }) : null }, d)) }) }) });
}
function Mt({
  infoViewJson: r,
  data: e = {},
  hiddenFields: t = [],
  groupFieldsFn: n = $t,
  layoutConfig: s = {},
  viewRenderers: i = {},
  methods: o = {},
  Reports: l,
  toast: u = {},
  handleAction: f = () => {
  }
}) {
  const [m, d] = V.useState({}), p = St(r.infoview ?? {}), g = r.endPoints ?? {}, j = V.useMemo(
    () => n(r.fields || {}),
    [r.fields, n]
  ), N = r?.source?.refid;
  let E = { ...j };
  r.infoview?.groups && (E = { ...E, ...r.infoview.groups }), V.useEffect(() => {
    let b = !1;
    return (async () => {
      const v = r?.source;
      if (!v?.type) {
        b || d({});
        return;
      }
      if (v.type === "method") {
        const T = v.method, k = T ? o[T] : void 0;
        if (k)
          try {
            const P = await Promise.resolve(k());
            b || d(P || {});
          } catch (P) {
            console.error("Method execution failed:", P), b || d({});
          }
        else
          b || d({});
      }
      if (v.type === "api")
        try {
          const T = await M({
            method: v.method || "GET",
            url: v.url,
            data: v.body || {},
            params: v.params || {},
            headers: v.headers || {}
          });
          b || d(T.data || {});
        } catch (T) {
          console.error("API fetch failed:", T), b || d({});
        }
      if (v.type === "sql" && v.refid && v.refid != "0") {
        if (!g) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const T = await M({
            method: "POST",
            url: g.baseURL + g.registerQuery,
            data: {
              query: {
                ...v,
                cols: v.cols,
                table: v.table,
                where: K(v.where, {
                  refid: v.refid
                })
              }
            },
            headers: {
              Authorization: `Bearer ${g?.accessToken}`
            }
          }), k = await M({
            method: "POST",
            url: g.baseURL + g.runQuery,
            data: {
              queryid: T.data.queryid,
              filter: {}
            },
            headers: {
              Authorization: `Bearer ${g?.accessToken}`
            }
          }), P = Ue(k) ?? {};
          b || d(P);
        } catch (T) {
          console.error("API fetch failed:", T);
        }
      }
    })(), () => {
      b = !0;
    };
  }, [
    r?.source?.type || "",
    r?.source?.method || "",
    r?.source?.url || "",
    JSON.stringify(r?.source?.params || {}),
    JSON.stringify(r?.source?.body || {}),
    JSON.stringify(r?.source?.headers || {})
  ]);
  const h = E.common || null;
  h && delete E.common;
  const x = (b) => {
    switch (b) {
      case "accordion":
        return /* @__PURE__ */ a.jsx(
          Pt,
          {
            groups: E,
            methods: o,
            infoData: m,
            viewRenderers: i,
            sqlOpsUrls: g,
            refid: N,
            ...l ? { Reports: l } : {},
            toast: u,
            handleAction: f,
            infoViewJson: r
          }
        );
      case "tab":
      case "tableft":
      case "tabright":
        return /* @__PURE__ */ a.jsx(
          Ye,
          {
            groups: E,
            viewRenderers: i,
            layoutConfig: s,
            methods: o,
            infoData: m,
            isCommonInfo: !!h,
            viewMode: b,
            sqlOpsUrls: g,
            refid: N,
            ...l ? { Reports: l } : {},
            toast: u,
            handleAction: f,
            infoViewJson: r
          }
        );
      case "cards":
        return /* @__PURE__ */ a.jsx(
          It,
          {
            groups: E,
            viewRenderers: i,
            methods: o,
            infoData: m,
            sqlOpsUrls: g,
            refid: N,
            ...l ? { Reports: l } : {},
            toast: u,
            handleAction: f,
            infoViewJson: r
          }
        );
      default:
        return /* @__PURE__ */ a.jsx(
          Ye,
          {
            groups: E,
            viewRenderers: i,
            layoutConfig: s,
            methods: o,
            infoData: m,
            isCommonInfo: !!h,
            viewMode: b,
            sqlOpsUrls: g,
            refid: N,
            ...l ? { Reports: l } : {},
            toast: u,
            handleAction: f,
            infoViewJson: r
          }
        );
    }
  };
  return /* @__PURE__ */ a.jsxs("div", { className: s.containerClass || "h-screen flex flex-col ", children: [
    h && /* @__PURE__ */ a.jsx(
      _t,
      {
        commonInfo: h,
        infoData: m,
        hiddenFields: t
      }
    ),
    x(p)
  ] });
}
export {
  Mt as InfoView
};
