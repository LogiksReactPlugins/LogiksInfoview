import Z, { useState as oe, useEffect as pe, useMemo as jt, useRef as Ke, useLayoutEffect as ls } from "react";
import * as be from "yup";
import { useFormik as cs } from "formik";
import { createPortal as us } from "react-dom";
var At = { exports: {} }, Ze = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ur;
function ds() {
  if (Ur) return Ze;
  Ur = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, s, o) {
    var i = null;
    if (o !== void 0 && (i = "" + o), s.key !== void 0 && (i = "" + s.key), "key" in s) {
      o = {};
      for (var l in s)
        l !== "key" && (o[l] = s[l]);
    } else o = s;
    return s = o.ref, {
      $$typeof: e,
      type: r,
      key: i,
      ref: s !== void 0 ? s : null,
      props: o
    };
  }
  return Ze.Fragment = t, Ze.jsx = n, Ze.jsxs = n, Ze;
}
var et = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hr;
function fs() {
  return Hr || (Hr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === p ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case A:
          return "Fragment";
        case y:
          return "Profiler";
        case S:
          return "StrictMode";
        case T:
          return "Suspense";
        case _:
          return "SuspenseList";
        case k:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case v:
            return "Portal";
          case b:
            return (c.displayName || "Context") + ".Provider";
          case w:
            return (c._context.displayName || "Context") + ".Consumer";
          case j:
            var E = c.render;
            return c = c.displayName, c || (c = E.displayName || E.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case $:
            return E = c.displayName || null, E !== null ? E : e(c.type) || "Memo";
          case M:
            E = c._payload, c = c._init;
            try {
              return e(c(E));
            } catch {
            }
        }
      return null;
    }
    function t(c) {
      return "" + c;
    }
    function n(c) {
      try {
        t(c);
        var E = !1;
      } catch {
        E = !0;
      }
      if (E) {
        E = console;
        var R = E.error, I = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return R.call(
          E,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          I
        ), t(c);
      }
    }
    function r(c) {
      if (c === A) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === M)
        return "<...>";
      try {
        var E = e(c);
        return E ? "<" + E + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var c = O.A;
      return c === null ? null : c.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(c) {
      if (H.call(c, "key")) {
        var E = Object.getOwnPropertyDescriptor(c, "key").get;
        if (E && E.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function l(c, E) {
      function R() {
        ee || (ee = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          E
        ));
      }
      R.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: R,
        configurable: !0
      });
    }
    function m() {
      var c = e(this.type);
      return ne[c] || (ne[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function d(c, E, R, I, Y, P, D, F) {
      return R = P.ref, c = {
        $$typeof: N,
        type: c,
        key: E,
        props: P,
        _owner: Y
      }, (R !== void 0 ? R : null) !== null ? Object.defineProperty(c, "ref", {
        enumerable: !1,
        get: m
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
        value: D
      }), Object.defineProperty(c, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: F
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function f(c, E, R, I, Y, P, D, F) {
      var L = E.children;
      if (L !== void 0)
        if (I)
          if (W(L)) {
            for (I = 0; I < L.length; I++)
              h(L[I]);
            Object.freeze && Object.freeze(L);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(L);
      if (H.call(E, "key")) {
        L = e(c);
        var V = Object.keys(E).filter(function(X) {
          return X !== "key";
        });
        I = 0 < V.length ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}", De[L + I] || (V = 0 < V.length ? "{" + V.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          I,
          L,
          V,
          L
        ), De[L + I] = !0);
      }
      if (L = null, R !== void 0 && (n(R), L = "" + R), i(E) && (n(E.key), L = "" + E.key), "key" in E) {
        R = {};
        for (var J in E)
          J !== "key" && (R[J] = E[J]);
      } else R = E;
      return L && l(
        R,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), d(
        c,
        L,
        P,
        Y,
        s(),
        R,
        D,
        F
      );
    }
    function h(c) {
      typeof c == "object" && c !== null && c.$$typeof === N && c._store && (c._store.validated = 1);
    }
    var g = Z, N = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), b = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), k = Symbol.for("react.activity"), p = Symbol.for("react.client.reference"), O = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, W = Array.isArray, q = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(c) {
        return c();
      }
    };
    var ee, ne = {}, ve = g.react_stack_bottom_frame.bind(
      g,
      o
    )(), xe = q(r(o)), De = {};
    et.Fragment = A, et.jsx = function(c, E, R, I, Y) {
      var P = 1e4 > O.recentlyCreatedOwnerStacks++;
      return f(
        c,
        E,
        R,
        !1,
        I,
        Y,
        P ? Error("react-stack-top-frame") : ve,
        P ? q(r(c)) : xe
      );
    }, et.jsxs = function(c, E, R, I, Y) {
      var P = 1e4 > O.recentlyCreatedOwnerStacks++;
      return f(
        c,
        E,
        R,
        !0,
        I,
        Y,
        P ? Error("react-stack-top-frame") : ve,
        P ? q(r(c)) : xe
      );
    };
  }()), et;
}
var Gr;
function ps() {
  return Gr || (Gr = 1, process.env.NODE_ENV === "production" ? At.exports = ds() : At.exports = fs()), At.exports;
}
var a = ps();
function xn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: ms } = Object.prototype, { getPrototypeOf: xr } = Object, { iterator: Dt, toStringTag: wn } = Symbol, kt = /* @__PURE__ */ ((e) => (t) => {
  const n = ms.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Te = (e) => (e = e.toLowerCase(), (t) => kt(t) === e), Ft = (e) => (t) => typeof t === e, { isArray: Ve } = Array, ct = Ft("undefined");
function ut(e) {
  return e !== null && !ct(e) && e.constructor !== null && !ct(e.constructor) && ge(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const vn = Te("ArrayBuffer");
function hs(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && vn(e.buffer), t;
}
const gs = Ft("string"), ge = Ft("function"), En = Ft("number"), dt = (e) => e !== null && typeof e == "object", ys = (e) => e === !0 || e === !1, St = (e) => {
  if (kt(e) !== "object")
    return !1;
  const t = xr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(wn in e) && !(Dt in e);
}, bs = (e) => {
  if (!dt(e) || ut(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, xs = Te("Date"), ws = Te("File"), vs = Te("Blob"), Es = Te("FileList"), As = (e) => dt(e) && ge(e.pipe), Ns = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ge(e.append) && ((t = kt(e)) === "formdata" || // detect form-data instance
  t === "object" && ge(e.toString) && e.toString() === "[object FormData]"));
}, Ts = Te("URLSearchParams"), [js, Ss, Rs, _s] = ["ReadableStream", "Request", "Response", "Headers"].map(Te), Cs = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ft(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), Ve(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (ut(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let l;
    for (r = 0; r < i; r++)
      l = o[r], t.call(null, e[l], l, e);
  }
}
function An(e, t) {
  if (ut(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const Me = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Nn = (e) => !ct(e) && e !== Me;
function lr() {
  const { caseless: e } = Nn(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && An(t, s) || s;
    St(t[o]) && St(r) ? t[o] = lr(t[o], r) : St(r) ? t[o] = lr({}, r) : Ve(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && ft(arguments[r], n);
  return t;
}
const Os = (e, t, n, { allOwnKeys: r } = {}) => (ft(t, (s, o) => {
  n && ge(s) ? e[o] = xn(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), Ls = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Is = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Ps = (e, t, n, r) => {
  let s, o, i;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && xr(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Ds = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, ks = (e) => {
  if (!e) return null;
  if (Ve(e)) return e;
  let t = e.length;
  if (!En(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Fs = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && xr(Uint8Array)), Ms = (e, t) => {
  const r = (e && e[Dt]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, $s = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Bs = Te("HTMLFormElement"), zs = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Wr = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Us = Te("RegExp"), Tn = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  ft(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, Hs = (e) => {
  Tn(e, (t, n) => {
    if (ge(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (ge(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Gs = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return Ve(e) ? r(e) : r(String(e).split(t)), n;
}, Ws = () => {
}, qs = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Ks(e) {
  return !!(e && ge(e.append) && e[wn] === "FormData" && e[Dt]);
}
const Vs = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (dt(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (ut(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = Ve(r) ? [] : {};
        return ft(r, (i, l) => {
          const m = n(i, s + 1);
          !ct(m) && (o[l] = m);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, Ys = Te("AsyncFunction"), Xs = (e) => e && (dt(e) || ge(e)) && ge(e.then) && ge(e.catch), jn = ((e, t) => e ? setImmediate : t ? ((n, r) => (Me.addEventListener("message", ({ source: s, data: o }) => {
  s === Me && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), Me.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  ge(Me.postMessage)
), Qs = typeof queueMicrotask < "u" ? queueMicrotask.bind(Me) : typeof process < "u" && process.nextTick || jn, Js = (e) => e != null && ge(e[Dt]), x = {
  isArray: Ve,
  isArrayBuffer: vn,
  isBuffer: ut,
  isFormData: Ns,
  isArrayBufferView: hs,
  isString: gs,
  isNumber: En,
  isBoolean: ys,
  isObject: dt,
  isPlainObject: St,
  isEmptyObject: bs,
  isReadableStream: js,
  isRequest: Ss,
  isResponse: Rs,
  isHeaders: _s,
  isUndefined: ct,
  isDate: xs,
  isFile: ws,
  isBlob: vs,
  isRegExp: Us,
  isFunction: ge,
  isStream: As,
  isURLSearchParams: Ts,
  isTypedArray: Fs,
  isFileList: Es,
  forEach: ft,
  merge: lr,
  extend: Os,
  trim: Cs,
  stripBOM: Ls,
  inherits: Is,
  toFlatObject: Ps,
  kindOf: kt,
  kindOfTest: Te,
  endsWith: Ds,
  toArray: ks,
  forEachEntry: Ms,
  matchAll: $s,
  isHTMLForm: Bs,
  hasOwnProperty: Wr,
  hasOwnProp: Wr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Tn,
  freezeMethods: Hs,
  toObjectSet: Gs,
  toCamelCase: zs,
  noop: Ws,
  toFiniteNumber: qs,
  findKey: An,
  global: Me,
  isContextDefined: Nn,
  isSpecCompliantForm: Ks,
  toJSONObject: Vs,
  isAsyncFn: Ys,
  isThenable: Xs,
  setImmediate: jn,
  asap: Qs,
  isIterable: Js
};
function G(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
x.inherits(G, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: x.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Sn = G.prototype, Rn = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Rn[e] = { value: e };
});
Object.defineProperties(G, Rn);
Object.defineProperty(Sn, "isAxiosError", { value: !0 });
G.from = (e, t, n, r, s, o) => {
  const i = Object.create(Sn);
  return x.toFlatObject(e, i, function(m) {
    return m !== Error.prototype;
  }, (l) => l !== "isAxiosError"), G.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Zs = null;
function cr(e) {
  return x.isPlainObject(e) || x.isArray(e);
}
function _n(e) {
  return x.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function qr(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = _n(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function ea(e) {
  return x.isArray(e) && !e.some(cr);
}
const ta = x.toFlatObject(x, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Mt(e, t, n) {
  if (!x.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = x.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(A, S) {
    return !x.isUndefined(S[A]);
  });
  const r = n.metaTokens, s = n.visitor || f, o = n.dots, i = n.indexes, m = (n.Blob || typeof Blob < "u" && Blob) && x.isSpecCompliantForm(t);
  if (!x.isFunction(s))
    throw new TypeError("visitor must be a function");
  function d(v) {
    if (v === null) return "";
    if (x.isDate(v))
      return v.toISOString();
    if (x.isBoolean(v))
      return v.toString();
    if (!m && x.isBlob(v))
      throw new G("Blob is not supported. Use a Buffer instead.");
    return x.isArrayBuffer(v) || x.isTypedArray(v) ? m && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v;
  }
  function f(v, A, S) {
    let y = v;
    if (v && !S && typeof v == "object") {
      if (x.endsWith(A, "{}"))
        A = r ? A : A.slice(0, -2), v = JSON.stringify(v);
      else if (x.isArray(v) && ea(v) || (x.isFileList(v) || x.endsWith(A, "[]")) && (y = x.toArray(v)))
        return A = _n(A), y.forEach(function(b, j) {
          !(x.isUndefined(b) || b === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? qr([A], j, o) : i === null ? A : A + "[]",
            d(b)
          );
        }), !1;
    }
    return cr(v) ? !0 : (t.append(qr(S, A, o), d(v)), !1);
  }
  const h = [], g = Object.assign(ta, {
    defaultVisitor: f,
    convertValue: d,
    isVisitable: cr
  });
  function N(v, A) {
    if (!x.isUndefined(v)) {
      if (h.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + A.join("."));
      h.push(v), x.forEach(v, function(y, w) {
        (!(x.isUndefined(y) || y === null) && s.call(
          t,
          y,
          x.isString(w) ? w.trim() : w,
          A,
          g
        )) === !0 && N(y, A ? A.concat(w) : [w]);
      }), h.pop();
    }
  }
  if (!x.isObject(e))
    throw new TypeError("data must be an object");
  return N(e), t;
}
function Kr(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function wr(e, t) {
  this._pairs = [], e && Mt(e, this, t);
}
const Cn = wr.prototype;
Cn.append = function(t, n) {
  this._pairs.push([t, n]);
};
Cn.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Kr);
  } : Kr;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function ra(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function On(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || ra;
  x.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = x.isURLSearchParams(t) ? t.toString() : new wr(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Vr {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    x.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Ln = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, na = typeof URLSearchParams < "u" ? URLSearchParams : wr, sa = typeof FormData < "u" ? FormData : null, aa = typeof Blob < "u" ? Blob : null, oa = {
  isBrowser: !0,
  classes: {
    URLSearchParams: na,
    FormData: sa,
    Blob: aa
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, vr = typeof window < "u" && typeof document < "u", ur = typeof navigator == "object" && navigator || void 0, ia = vr && (!ur || ["ReactNative", "NativeScript", "NS"].indexOf(ur.product) < 0), la = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ca = vr && window.location.href || "http://localhost", ua = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: vr,
  hasStandardBrowserEnv: ia,
  hasStandardBrowserWebWorkerEnv: la,
  navigator: ur,
  origin: ca
}, Symbol.toStringTag, { value: "Module" })), ie = {
  ...ua,
  ...oa
};
function da(e, t) {
  return Mt(e, new ie.classes.URLSearchParams(), {
    visitor: function(n, r, s, o) {
      return ie.isNode && x.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function fa(e) {
  return x.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function pa(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function In(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const l = Number.isFinite(+i), m = o >= n.length;
    return i = !i && x.isArray(s) ? s.length : i, m ? (x.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !l) : ((!s[i] || !x.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && x.isArray(s[i]) && (s[i] = pa(s[i])), !l);
  }
  if (x.isFormData(e) && x.isFunction(e.entries)) {
    const n = {};
    return x.forEachEntry(e, (r, s) => {
      t(fa(r), s, n, 0);
    }), n;
  }
  return null;
}
function ma(e, t, n) {
  if (x.isString(e))
    try {
      return (t || JSON.parse)(e), x.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const pt = {
  transitional: Ln,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = x.isObject(t);
    if (o && x.isHTMLForm(t) && (t = new FormData(t)), x.isFormData(t))
      return s ? JSON.stringify(In(t)) : t;
    if (x.isArrayBuffer(t) || x.isBuffer(t) || x.isStream(t) || x.isFile(t) || x.isBlob(t) || x.isReadableStream(t))
      return t;
    if (x.isArrayBufferView(t))
      return t.buffer;
    if (x.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return da(t, this.formSerializer).toString();
      if ((l = x.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const m = this.env && this.env.FormData;
        return Mt(
          l ? { "files[]": t } : t,
          m && new m(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), ma(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || pt.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (x.isResponse(t) || x.isReadableStream(t))
      return t;
    if (t && x.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (i)
          throw l.name === "SyntaxError" ? G.from(l, G.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: ie.classes.FormData,
    Blob: ie.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
x.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  pt.headers[e] = {};
});
const ha = x.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), ga = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && ha[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Yr = Symbol("internals");
function tt(e) {
  return e && String(e).trim().toLowerCase();
}
function Rt(e) {
  return e === !1 || e == null ? e : x.isArray(e) ? e.map(Rt) : String(e);
}
function ya(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const ba = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Yt(e, t, n, r, s) {
  if (x.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!x.isString(t)) {
    if (x.isString(r))
      return t.indexOf(r) !== -1;
    if (x.isRegExp(r))
      return r.test(t);
  }
}
function xa(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function wa(e, t) {
  const n = x.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
let ye = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(l, m, d) {
      const f = tt(m);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const h = x.findKey(s, f);
      (!h || s[h] === void 0 || d === !0 || d === void 0 && s[h] !== !1) && (s[h || m] = Rt(l));
    }
    const i = (l, m) => x.forEach(l, (d, f) => o(d, f, m));
    if (x.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (x.isString(t) && (t = t.trim()) && !ba(t))
      i(ga(t), n);
    else if (x.isObject(t) && x.isIterable(t)) {
      let l = {}, m, d;
      for (const f of t) {
        if (!x.isArray(f))
          throw TypeError("Object iterator must return a key-value pair");
        l[d = f[0]] = (m = l[d]) ? x.isArray(m) ? [...m, f[1]] : [m, f[1]] : f[1];
      }
      i(l, n);
    } else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = tt(t), t) {
      const r = x.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return ya(s);
        if (x.isFunction(n))
          return n.call(this, s, r);
        if (x.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = tt(t), t) {
      const r = x.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Yt(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = tt(i), i) {
        const l = x.findKey(r, i);
        l && (!n || Yt(r, r[l], l, n)) && (delete r[l], s = !0);
      }
    }
    return x.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Yt(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return x.forEach(this, (s, o) => {
      const i = x.findKey(r, o);
      if (i) {
        n[i] = Rt(s), delete n[o];
        return;
      }
      const l = t ? xa(o) : String(o).trim();
      l !== o && delete n[o], n[l] = Rt(s), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return x.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && x.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Yr] = this[Yr] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const l = tt(i);
      r[l] || (wa(s, i), r[l] = !0);
    }
    return x.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
ye.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
x.reduceDescriptors(ye.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
x.freezeMethods(ye);
function Xt(e, t) {
  const n = this || pt, r = t || n, s = ye.from(r.headers);
  let o = r.data;
  return x.forEach(e, function(l) {
    o = l.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Pn(e) {
  return !!(e && e.__CANCEL__);
}
function Ye(e, t, n) {
  G.call(this, e ?? "canceled", G.ERR_CANCELED, t, n), this.name = "CanceledError";
}
x.inherits(Ye, G, {
  __CANCEL__: !0
});
function Dn(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new G(
    "Request failed with status code " + n.status,
    [G.ERR_BAD_REQUEST, G.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function va(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Ea(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(m) {
    const d = Date.now(), f = r[o];
    i || (i = d), n[s] = m, r[s] = d;
    let h = o, g = 0;
    for (; h !== s; )
      g += n[h++], h = h % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), d - i < t)
      return;
    const N = f && d - f;
    return N ? Math.round(g * 1e3 / N) : void 0;
  };
}
function Aa(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const i = (d, f = Date.now()) => {
    n = f, s = null, o && (clearTimeout(o), o = null), e(...d);
  };
  return [(...d) => {
    const f = Date.now(), h = f - n;
    h >= r ? i(d, f) : (s = d, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - h)));
  }, () => s && i(s)];
}
const Ot = (e, t, n = 3) => {
  let r = 0;
  const s = Ea(50, 250);
  return Aa((o) => {
    const i = o.loaded, l = o.lengthComputable ? o.total : void 0, m = i - r, d = s(m), f = i <= l;
    r = i;
    const h = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: m,
      rate: d || void 0,
      estimated: d && l && f ? (l - i) / d : void 0,
      event: o,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(h);
  }, n);
}, Xr = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Qr = (e) => (...t) => x.asap(() => e(...t)), Na = ie.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, ie.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(ie.origin),
  ie.navigator && /(msie|trident)/i.test(ie.navigator.userAgent)
) : () => !0, Ta = ie.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      x.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), x.isString(r) && i.push("path=" + r), x.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function ja(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Sa(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function kn(e, t, n) {
  let r = !ja(t);
  return e && (r || n == !1) ? Sa(e, t) : t;
}
const Jr = (e) => e instanceof ye ? { ...e } : e;
function Be(e, t) {
  t = t || {};
  const n = {};
  function r(d, f, h, g) {
    return x.isPlainObject(d) && x.isPlainObject(f) ? x.merge.call({ caseless: g }, d, f) : x.isPlainObject(f) ? x.merge({}, f) : x.isArray(f) ? f.slice() : f;
  }
  function s(d, f, h, g) {
    if (x.isUndefined(f)) {
      if (!x.isUndefined(d))
        return r(void 0, d, h, g);
    } else return r(d, f, h, g);
  }
  function o(d, f) {
    if (!x.isUndefined(f))
      return r(void 0, f);
  }
  function i(d, f) {
    if (x.isUndefined(f)) {
      if (!x.isUndefined(d))
        return r(void 0, d);
    } else return r(void 0, f);
  }
  function l(d, f, h) {
    if (h in t)
      return r(d, f);
    if (h in e)
      return r(void 0, d);
  }
  const m = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: l,
    headers: (d, f, h) => s(Jr(d), Jr(f), h, !0)
  };
  return x.forEach(Object.keys({ ...e, ...t }), function(f) {
    const h = m[f] || s, g = h(e[f], t[f], f);
    x.isUndefined(g) && h !== l || (n[f] = g);
  }), n;
}
const Fn = (e) => {
  const t = Be({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: l } = t;
  t.headers = i = ye.from(i), t.url = On(kn(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), l && i.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let m;
  if (x.isFormData(n)) {
    if (ie.hasStandardBrowserEnv || ie.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((m = i.getContentType()) !== !1) {
      const [d, ...f] = m ? m.split(";").map((h) => h.trim()).filter(Boolean) : [];
      i.setContentType([d || "multipart/form-data", ...f].join("; "));
    }
  }
  if (ie.hasStandardBrowserEnv && (r && x.isFunction(r) && (r = r(t)), r || r !== !1 && Na(t.url))) {
    const d = s && o && Ta.read(o);
    d && i.set(s, d);
  }
  return t;
}, Ra = typeof XMLHttpRequest < "u", _a = Ra && function(e) {
  return new Promise(function(n, r) {
    const s = Fn(e);
    let o = s.data;
    const i = ye.from(s.headers).normalize();
    let { responseType: l, onUploadProgress: m, onDownloadProgress: d } = s, f, h, g, N, v;
    function A() {
      N && N(), v && v(), s.cancelToken && s.cancelToken.unsubscribe(f), s.signal && s.signal.removeEventListener("abort", f);
    }
    let S = new XMLHttpRequest();
    S.open(s.method.toUpperCase(), s.url, !0), S.timeout = s.timeout;
    function y() {
      if (!S)
        return;
      const b = ye.from(
        "getAllResponseHeaders" in S && S.getAllResponseHeaders()
      ), T = {
        data: !l || l === "text" || l === "json" ? S.responseText : S.response,
        status: S.status,
        statusText: S.statusText,
        headers: b,
        config: e,
        request: S
      };
      Dn(function($) {
        n($), A();
      }, function($) {
        r($), A();
      }, T), S = null;
    }
    "onloadend" in S ? S.onloadend = y : S.onreadystatechange = function() {
      !S || S.readyState !== 4 || S.status === 0 && !(S.responseURL && S.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, S.onabort = function() {
      S && (r(new G("Request aborted", G.ECONNABORTED, e, S)), S = null);
    }, S.onerror = function() {
      r(new G("Network Error", G.ERR_NETWORK, e, S)), S = null;
    }, S.ontimeout = function() {
      let j = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const T = s.transitional || Ln;
      s.timeoutErrorMessage && (j = s.timeoutErrorMessage), r(new G(
        j,
        T.clarifyTimeoutError ? G.ETIMEDOUT : G.ECONNABORTED,
        e,
        S
      )), S = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in S && x.forEach(i.toJSON(), function(j, T) {
      S.setRequestHeader(T, j);
    }), x.isUndefined(s.withCredentials) || (S.withCredentials = !!s.withCredentials), l && l !== "json" && (S.responseType = s.responseType), d && ([g, v] = Ot(d, !0), S.addEventListener("progress", g)), m && S.upload && ([h, N] = Ot(m), S.upload.addEventListener("progress", h), S.upload.addEventListener("loadend", N)), (s.cancelToken || s.signal) && (f = (b) => {
      S && (r(!b || b.type ? new Ye(null, e, S) : b), S.abort(), S = null);
    }, s.cancelToken && s.cancelToken.subscribe(f), s.signal && (s.signal.aborted ? f() : s.signal.addEventListener("abort", f)));
    const w = va(s.url);
    if (w && ie.protocols.indexOf(w) === -1) {
      r(new G("Unsupported protocol " + w + ":", G.ERR_BAD_REQUEST, e));
      return;
    }
    S.send(o || null);
  });
}, Ca = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const o = function(d) {
      if (!s) {
        s = !0, l();
        const f = d instanceof Error ? d : this.reason;
        r.abort(f instanceof G ? f : new Ye(f instanceof Error ? f.message : f));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new G(`timeout ${t} of ms exceeded`, G.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((d) => {
        d.unsubscribe ? d.unsubscribe(o) : d.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((d) => d.addEventListener("abort", o));
    const { signal: m } = r;
    return m.unsubscribe = () => x.asap(l), m;
  }
}, Oa = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, La = async function* (e, t) {
  for await (const n of Ia(e))
    yield* Oa(n, t);
}, Ia = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, Zr = (e, t, n, r) => {
  const s = La(e, t);
  let o = 0, i, l = (m) => {
    i || (i = !0, r && r(m));
  };
  return new ReadableStream({
    async pull(m) {
      try {
        const { done: d, value: f } = await s.next();
        if (d) {
          l(), m.close();
          return;
        }
        let h = f.byteLength;
        if (n) {
          let g = o += h;
          n(g);
        }
        m.enqueue(new Uint8Array(f));
      } catch (d) {
        throw l(d), d;
      }
    },
    cancel(m) {
      return l(m), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, $t = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Mn = $t && typeof ReadableStream == "function", Pa = $t && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), $n = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Da = Mn && $n(() => {
  let e = !1;
  const t = new Request(ie.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), en = 64 * 1024, dr = Mn && $n(() => x.isReadableStream(new Response("").body)), Lt = {
  stream: dr && ((e) => e.body)
};
$t && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Lt[t] && (Lt[t] = x.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new G(`Response type '${t}' is not supported`, G.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const ka = async (e) => {
  if (e == null)
    return 0;
  if (x.isBlob(e))
    return e.size;
  if (x.isSpecCompliantForm(e))
    return (await new Request(ie.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (x.isArrayBufferView(e) || x.isArrayBuffer(e))
    return e.byteLength;
  if (x.isURLSearchParams(e) && (e = e + ""), x.isString(e))
    return (await Pa(e)).byteLength;
}, Fa = async (e, t) => {
  const n = x.toFiniteNumber(e.getContentLength());
  return n ?? ka(t);
}, Ma = $t && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: s,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: l,
    onUploadProgress: m,
    responseType: d,
    headers: f,
    withCredentials: h = "same-origin",
    fetchOptions: g
  } = Fn(e);
  d = d ? (d + "").toLowerCase() : "text";
  let N = Ca([s, o && o.toAbortSignal()], i), v;
  const A = N && N.unsubscribe && (() => {
    N.unsubscribe();
  });
  let S;
  try {
    if (m && Da && n !== "get" && n !== "head" && (S = await Fa(f, r)) !== 0) {
      let T = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), _;
      if (x.isFormData(r) && (_ = T.headers.get("content-type")) && f.setContentType(_), T.body) {
        const [$, M] = Xr(
          S,
          Ot(Qr(m))
        );
        r = Zr(T.body, en, $, M);
      }
    }
    x.isString(h) || (h = h ? "include" : "omit");
    const y = "credentials" in Request.prototype;
    v = new Request(t, {
      ...g,
      signal: N,
      method: n.toUpperCase(),
      headers: f.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: y ? h : void 0
    });
    let w = await fetch(v, g);
    const b = dr && (d === "stream" || d === "response");
    if (dr && (l || b && A)) {
      const T = {};
      ["status", "statusText", "headers"].forEach((k) => {
        T[k] = w[k];
      });
      const _ = x.toFiniteNumber(w.headers.get("content-length")), [$, M] = l && Xr(
        _,
        Ot(Qr(l), !0)
      ) || [];
      w = new Response(
        Zr(w.body, en, $, () => {
          M && M(), A && A();
        }),
        T
      );
    }
    d = d || "text";
    let j = await Lt[x.findKey(Lt, d) || "text"](w, e);
    return !b && A && A(), await new Promise((T, _) => {
      Dn(T, _, {
        data: j,
        headers: ye.from(w.headers),
        status: w.status,
        statusText: w.statusText,
        config: e,
        request: v
      });
    });
  } catch (y) {
    throw A && A(), y && y.name === "TypeError" && /Load failed|fetch/i.test(y.message) ? Object.assign(
      new G("Network Error", G.ERR_NETWORK, e, v),
      {
        cause: y.cause || y
      }
    ) : G.from(y, y && y.code, e, v);
  }
}), fr = {
  http: Zs,
  xhr: _a,
  fetch: Ma
};
x.forEach(fr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const tn = (e) => `- ${e}`, $a = (e) => x.isFunction(e) || e === null || e === !1, Bn = {
  getAdapter: (e) => {
    e = x.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !$a(n) && (r = fr[(i = String(n)).toLowerCase()], r === void 0))
        throw new G(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([l, m]) => `adapter ${l} ` + (m === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(tn).join(`
`) : " " + tn(o[0]) : "as no adapter specified";
      throw new G(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: fr
};
function Qt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ye(null, e);
}
function rn(e) {
  return Qt(e), e.headers = ye.from(e.headers), e.data = Xt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Bn.getAdapter(e.adapter || pt.adapter)(e).then(function(r) {
    return Qt(e), r.data = Xt.call(
      e,
      e.transformResponse,
      r
    ), r.headers = ye.from(r.headers), r;
  }, function(r) {
    return Pn(r) || (Qt(e), r && r.response && (r.response.data = Xt.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = ye.from(r.response.headers))), Promise.reject(r);
  });
}
const zn = "1.11.0", Bt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Bt[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const nn = {};
Bt.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + zn + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, l) => {
    if (t === !1)
      throw new G(
        s(i, " has been removed" + (n ? " in " + n : "")),
        G.ERR_DEPRECATED
      );
    return n && !nn[i] && (nn[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, l) : !0;
  };
};
Bt.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Ba(e, t, n) {
  if (typeof e != "object")
    throw new G("options must be an object", G.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const l = e[o], m = l === void 0 || i(l, o, e);
      if (m !== !0)
        throw new G("option " + o + " must be " + m, G.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new G("Unknown option " + o, G.ERR_BAD_OPTION);
  }
}
const _t = {
  assertOptions: Ba,
  validators: Bt
}, Ce = _t.validators;
let $e = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Vr(),
      response: new Vr()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Be(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && _t.assertOptions(r, {
      silentJSONParsing: Ce.transitional(Ce.boolean),
      forcedJSONParsing: Ce.transitional(Ce.boolean),
      clarifyTimeoutError: Ce.transitional(Ce.boolean)
    }, !1), s != null && (x.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : _t.assertOptions(s, {
      encode: Ce.function,
      serialize: Ce.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), _t.assertOptions(n, {
      baseUrl: Ce.spelling("baseURL"),
      withXsrfToken: Ce.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && x.merge(
      o.common,
      o[n.method]
    );
    o && x.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (v) => {
        delete o[v];
      }
    ), n.headers = ye.concat(i, o);
    const l = [];
    let m = !0;
    this.interceptors.request.forEach(function(A) {
      typeof A.runWhen == "function" && A.runWhen(n) === !1 || (m = m && A.synchronous, l.unshift(A.fulfilled, A.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function(A) {
      d.push(A.fulfilled, A.rejected);
    });
    let f, h = 0, g;
    if (!m) {
      const v = [rn.bind(this), void 0];
      for (v.unshift(...l), v.push(...d), g = v.length, f = Promise.resolve(n); h < g; )
        f = f.then(v[h++], v[h++]);
      return f;
    }
    g = l.length;
    let N = n;
    for (h = 0; h < g; ) {
      const v = l[h++], A = l[h++];
      try {
        N = v(N);
      } catch (S) {
        A.call(this, S);
        break;
      }
    }
    try {
      f = rn.call(this, N);
    } catch (v) {
      return Promise.reject(v);
    }
    for (h = 0, g = d.length; h < g; )
      f = f.then(d[h++], d[h++]);
    return f;
  }
  getUri(t) {
    t = Be(this.defaults, t);
    const n = kn(t.baseURL, t.url, t.allowAbsoluteUrls);
    return On(n, t.params, t.paramsSerializer);
  }
};
x.forEach(["delete", "get", "head", "options"], function(t) {
  $e.prototype[t] = function(n, r) {
    return this.request(Be(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
x.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, l) {
      return this.request(Be(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  $e.prototype[t] = n(), $e.prototype[t + "Form"] = n(!0);
});
let za = class Un {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((l) => {
        r.subscribe(l), o = l;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, l) {
      r.reason || (r.reason = new Ye(o, i, l), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Un(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function Ua(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Ha(e) {
  return x.isObject(e) && e.isAxiosError === !0;
}
const pr = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(pr).forEach(([e, t]) => {
  pr[t] = e;
});
function Hn(e) {
  const t = new $e(e), n = xn($e.prototype.request, t);
  return x.extend(n, $e.prototype, t, { allOwnKeys: !0 }), x.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Hn(Be(e, s));
  }, n;
}
const U = Hn(pt);
U.Axios = $e;
U.CanceledError = Ye;
U.CancelToken = za;
U.isCancel = Pn;
U.VERSION = zn;
U.toFormData = Mt;
U.AxiosError = G;
U.Cancel = U.CanceledError;
U.all = function(t) {
  return Promise.all(t);
};
U.spread = Ua;
U.isAxiosError = Ha;
U.mergeConfig = Be;
U.AxiosHeaders = ye;
U.formToJSON = (e) => In(x.isHTMLForm(e) ? new FormData(e) : e);
U.getAdapter = Bn.getAdapter;
U.HttpStatusCode = pr;
U.default = U;
const {
  Axios: si,
  AxiosError: ai,
  CanceledError: oi,
  isCancel: ii,
  CancelToken: li,
  VERSION: ci,
  all: ui,
  Cancel: di,
  isAxiosError: fi,
  spread: pi,
  toFormData: mi,
  AxiosHeaders: hi,
  HttpStatusCode: gi,
  formToJSON: yi,
  getAdapter: bi,
  mergeConfig: xi
} = U;
/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */
const {
  entries: Gn,
  setPrototypeOf: sn,
  isFrozen: Ga,
  getPrototypeOf: Wa,
  getOwnPropertyDescriptor: qa
} = Object;
let {
  freeze: ue,
  seal: we,
  create: mr
} = Object, {
  apply: hr,
  construct: gr
} = typeof Reflect < "u" && Reflect;
ue || (ue = function(t) {
  return t;
});
we || (we = function(t) {
  return t;
});
hr || (hr = function(t, n) {
  for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    s[o - 2] = arguments[o];
  return t.apply(n, s);
});
gr || (gr = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return new t(...r);
});
const Nt = de(Array.prototype.forEach), Ka = de(Array.prototype.lastIndexOf), an = de(Array.prototype.pop), rt = de(Array.prototype.push), Va = de(Array.prototype.splice), Ct = de(String.prototype.toLowerCase), Jt = de(String.prototype.toString), Zt = de(String.prototype.match), nt = de(String.prototype.replace), Ya = de(String.prototype.indexOf), Xa = de(String.prototype.trim), Ae = de(Object.prototype.hasOwnProperty), ce = de(RegExp.prototype.test), st = Qa(TypeError);
function de(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    return hr(e, t, r);
  };
}
function Qa(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return gr(e, n);
  };
}
function K(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ct;
  sn && sn(e, null);
  let r = t.length;
  for (; r--; ) {
    let s = t[r];
    if (typeof s == "string") {
      const o = n(s);
      o !== s && (Ga(t) || (t[r] = o), s = o);
    }
    e[s] = !0;
  }
  return e;
}
function Ja(e) {
  for (let t = 0; t < e.length; t++)
    Ae(e, t) || (e[t] = null);
  return e;
}
function Oe(e) {
  const t = mr(null);
  for (const [n, r] of Gn(e))
    Ae(e, n) && (Array.isArray(r) ? t[n] = Ja(r) : r && typeof r == "object" && r.constructor === Object ? t[n] = Oe(r) : t[n] = r);
  return t;
}
function at(e, t) {
  for (; e !== null; ) {
    const r = qa(e, t);
    if (r) {
      if (r.get)
        return de(r.get);
      if (typeof r.value == "function")
        return de(r.value);
    }
    e = Wa(e);
  }
  function n() {
    return null;
  }
  return n;
}
const on = ue(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), er = ue(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), tr = ue(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Za = ue(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), rr = ue(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), eo = ue(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ln = ue(["#text"]), cn = ue(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), nr = ue(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), un = ue(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Tt = ue(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), to = we(/\{\{[\w\W]*|[\w\W]*\}\}/gm), ro = we(/<%[\w\W]*|[\w\W]*%>/gm), no = we(/\$\{[\w\W]*/gm), so = we(/^data-[\-\w.\u00B7-\uFFFF]+$/), ao = we(/^aria-[\-\w]+$/), Wn = we(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), oo = we(/^(?:\w+script|data):/i), io = we(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), qn = we(/^html$/i), lo = we(/^[a-z][.\w]*(-[.\w]+)+$/i);
var dn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: ao,
  ATTR_WHITESPACE: io,
  CUSTOM_ELEMENT: lo,
  DATA_ATTR: so,
  DOCTYPE_NAME: qn,
  ERB_EXPR: ro,
  IS_ALLOWED_URI: Wn,
  IS_SCRIPT_OR_DATA: oo,
  MUSTACHE_EXPR: to,
  TMPLIT_EXPR: no
});
const ot = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, co = function() {
  return typeof window > "u" ? null : window;
}, uo = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let r = null;
  const s = "data-tt-policy-suffix";
  n && n.hasAttribute(s) && (r = n.getAttribute(s));
  const o = "dompurify" + (r ? "#" + r : "");
  try {
    return t.createPolicy(o, {
      createHTML(i) {
        return i;
      },
      createScriptURL(i) {
        return i;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + o + " could not be created."), null;
  }
}, fn = function() {
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
function Kn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : co();
  const t = (z) => Kn(z);
  if (t.version = "3.3.1", t.removed = [], !e || !e.document || e.document.nodeType !== ot.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: n
  } = e;
  const r = n, s = r.currentScript, {
    DocumentFragment: o,
    HTMLTemplateElement: i,
    Node: l,
    Element: m,
    NodeFilter: d,
    NamedNodeMap: f = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: h,
    DOMParser: g,
    trustedTypes: N
  } = e, v = m.prototype, A = at(v, "cloneNode"), S = at(v, "remove"), y = at(v, "nextSibling"), w = at(v, "childNodes"), b = at(v, "parentNode");
  if (typeof i == "function") {
    const z = n.createElement("template");
    z.content && z.content.ownerDocument && (n = z.content.ownerDocument);
  }
  let j, T = "";
  const {
    implementation: _,
    createNodeIterator: $,
    createDocumentFragment: M,
    getElementsByTagName: k
  } = n, {
    importNode: p
  } = r;
  let O = fn();
  t.isSupported = typeof Gn == "function" && typeof b == "function" && _ && _.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: H,
    ERB_EXPR: W,
    TMPLIT_EXPR: q,
    DATA_ATTR: ee,
    ARIA_ATTR: ne,
    IS_SCRIPT_OR_DATA: ve,
    ATTR_WHITESPACE: xe,
    CUSTOM_ELEMENT: De
  } = dn;
  let {
    IS_ALLOWED_URI: c
  } = dn, E = null;
  const R = K({}, [...on, ...er, ...tr, ...rr, ...ln]);
  let I = null;
  const Y = K({}, [...cn, ...nr, ...un, ...Tt]);
  let P = Object.seal(mr(null, {
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
  })), D = null, F = null;
  const L = Object.seal(mr(null, {
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
  let V = !0, J = !0, X = !1, je = !0, le = !1, Se = !0, Ee = !1, Xe = !1, ze = !1, ke = !1, yt = !1, bt = !1, Tr = !0, jr = !1;
  const es = "user-content-";
  let zt = !0, Qe = !1, Ue = {}, Re = null;
  const Ut = K({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Sr = null;
  const Rr = K({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ht = null;
  const _r = K({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), xt = "http://www.w3.org/1998/Math/MathML", wt = "http://www.w3.org/2000/svg", Le = "http://www.w3.org/1999/xhtml";
  let He = Le, Gt = !1, Wt = null;
  const ts = K({}, [xt, wt, Le], Jt);
  let vt = K({}, ["mi", "mo", "mn", "ms", "mtext"]), Et = K({}, ["annotation-xml"]);
  const rs = K({}, ["title", "style", "font", "a", "script"]);
  let Je = null;
  const ns = ["application/xhtml+xml", "text/html"], ss = "text/html";
  let re = null, Ge = null;
  const as = n.createElement("form"), Cr = function(u) {
    return u instanceof RegExp || u instanceof Function;
  }, qt = function() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Ge && Ge === u)) {
      if ((!u || typeof u != "object") && (u = {}), u = Oe(u), Je = // eslint-disable-next-line unicorn/prefer-includes
      ns.indexOf(u.PARSER_MEDIA_TYPE) === -1 ? ss : u.PARSER_MEDIA_TYPE, re = Je === "application/xhtml+xml" ? Jt : Ct, E = Ae(u, "ALLOWED_TAGS") ? K({}, u.ALLOWED_TAGS, re) : R, I = Ae(u, "ALLOWED_ATTR") ? K({}, u.ALLOWED_ATTR, re) : Y, Wt = Ae(u, "ALLOWED_NAMESPACES") ? K({}, u.ALLOWED_NAMESPACES, Jt) : ts, Ht = Ae(u, "ADD_URI_SAFE_ATTR") ? K(Oe(_r), u.ADD_URI_SAFE_ATTR, re) : _r, Sr = Ae(u, "ADD_DATA_URI_TAGS") ? K(Oe(Rr), u.ADD_DATA_URI_TAGS, re) : Rr, Re = Ae(u, "FORBID_CONTENTS") ? K({}, u.FORBID_CONTENTS, re) : Ut, D = Ae(u, "FORBID_TAGS") ? K({}, u.FORBID_TAGS, re) : Oe({}), F = Ae(u, "FORBID_ATTR") ? K({}, u.FORBID_ATTR, re) : Oe({}), Ue = Ae(u, "USE_PROFILES") ? u.USE_PROFILES : !1, V = u.ALLOW_ARIA_ATTR !== !1, J = u.ALLOW_DATA_ATTR !== !1, X = u.ALLOW_UNKNOWN_PROTOCOLS || !1, je = u.ALLOW_SELF_CLOSE_IN_ATTR !== !1, le = u.SAFE_FOR_TEMPLATES || !1, Se = u.SAFE_FOR_XML !== !1, Ee = u.WHOLE_DOCUMENT || !1, ke = u.RETURN_DOM || !1, yt = u.RETURN_DOM_FRAGMENT || !1, bt = u.RETURN_TRUSTED_TYPE || !1, ze = u.FORCE_BODY || !1, Tr = u.SANITIZE_DOM !== !1, jr = u.SANITIZE_NAMED_PROPS || !1, zt = u.KEEP_CONTENT !== !1, Qe = u.IN_PLACE || !1, c = u.ALLOWED_URI_REGEXP || Wn, He = u.NAMESPACE || Le, vt = u.MATHML_TEXT_INTEGRATION_POINTS || vt, Et = u.HTML_INTEGRATION_POINTS || Et, P = u.CUSTOM_ELEMENT_HANDLING || {}, u.CUSTOM_ELEMENT_HANDLING && Cr(u.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (P.tagNameCheck = u.CUSTOM_ELEMENT_HANDLING.tagNameCheck), u.CUSTOM_ELEMENT_HANDLING && Cr(u.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (P.attributeNameCheck = u.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), u.CUSTOM_ELEMENT_HANDLING && typeof u.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (P.allowCustomizedBuiltInElements = u.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), le && (J = !1), yt && (ke = !0), Ue && (E = K({}, ln), I = [], Ue.html === !0 && (K(E, on), K(I, cn)), Ue.svg === !0 && (K(E, er), K(I, nr), K(I, Tt)), Ue.svgFilters === !0 && (K(E, tr), K(I, nr), K(I, Tt)), Ue.mathMl === !0 && (K(E, rr), K(I, un), K(I, Tt))), u.ADD_TAGS && (typeof u.ADD_TAGS == "function" ? L.tagCheck = u.ADD_TAGS : (E === R && (E = Oe(E)), K(E, u.ADD_TAGS, re))), u.ADD_ATTR && (typeof u.ADD_ATTR == "function" ? L.attributeCheck = u.ADD_ATTR : (I === Y && (I = Oe(I)), K(I, u.ADD_ATTR, re))), u.ADD_URI_SAFE_ATTR && K(Ht, u.ADD_URI_SAFE_ATTR, re), u.FORBID_CONTENTS && (Re === Ut && (Re = Oe(Re)), K(Re, u.FORBID_CONTENTS, re)), u.ADD_FORBID_CONTENTS && (Re === Ut && (Re = Oe(Re)), K(Re, u.ADD_FORBID_CONTENTS, re)), zt && (E["#text"] = !0), Ee && K(E, ["html", "head", "body"]), E.table && (K(E, ["tbody"]), delete D.tbody), u.TRUSTED_TYPES_POLICY) {
        if (typeof u.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw st('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof u.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw st('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        j = u.TRUSTED_TYPES_POLICY, T = j.createHTML("");
      } else
        j === void 0 && (j = uo(N, s)), j !== null && typeof T == "string" && (T = j.createHTML(""));
      ue && ue(u), Ge = u;
    }
  }, Or = K({}, [...er, ...tr, ...Za]), Lr = K({}, [...rr, ...eo]), os = function(u) {
    let C = b(u);
    (!C || !C.tagName) && (C = {
      namespaceURI: He,
      tagName: "template"
    });
    const B = Ct(u.tagName), Q = Ct(C.tagName);
    return Wt[u.namespaceURI] ? u.namespaceURI === wt ? C.namespaceURI === Le ? B === "svg" : C.namespaceURI === xt ? B === "svg" && (Q === "annotation-xml" || vt[Q]) : !!Or[B] : u.namespaceURI === xt ? C.namespaceURI === Le ? B === "math" : C.namespaceURI === wt ? B === "math" && Et[Q] : !!Lr[B] : u.namespaceURI === Le ? C.namespaceURI === wt && !Et[Q] || C.namespaceURI === xt && !vt[Q] ? !1 : !Lr[B] && (rs[B] || !Or[B]) : !!(Je === "application/xhtml+xml" && Wt[u.namespaceURI]) : !1;
  }, _e = function(u) {
    rt(t.removed, {
      element: u
    });
    try {
      b(u).removeChild(u);
    } catch {
      S(u);
    }
  }, Fe = function(u, C) {
    try {
      rt(t.removed, {
        attribute: C.getAttributeNode(u),
        from: C
      });
    } catch {
      rt(t.removed, {
        attribute: null,
        from: C
      });
    }
    if (C.removeAttribute(u), u === "is")
      if (ke || yt)
        try {
          _e(C);
        } catch {
        }
      else
        try {
          C.setAttribute(u, "");
        } catch {
        }
  }, Ir = function(u) {
    let C = null, B = null;
    if (ze)
      u = "<remove></remove>" + u;
    else {
      const te = Zt(u, /^[\r\n\t ]+/);
      B = te && te[0];
    }
    Je === "application/xhtml+xml" && He === Le && (u = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + u + "</body></html>");
    const Q = j ? j.createHTML(u) : u;
    if (He === Le)
      try {
        C = new g().parseFromString(Q, Je);
      } catch {
      }
    if (!C || !C.documentElement) {
      C = _.createDocument(He, "template", null);
      try {
        C.documentElement.innerHTML = Gt ? T : Q;
      } catch {
      }
    }
    const ae = C.body || C.documentElement;
    return u && B && ae.insertBefore(n.createTextNode(B), ae.childNodes[0] || null), He === Le ? k.call(C, Ee ? "html" : "body")[0] : Ee ? C.documentElement : ae;
  }, Pr = function(u) {
    return $.call(
      u.ownerDocument || u,
      u,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null
    );
  }, Kt = function(u) {
    return u instanceof h && (typeof u.nodeName != "string" || typeof u.textContent != "string" || typeof u.removeChild != "function" || !(u.attributes instanceof f) || typeof u.removeAttribute != "function" || typeof u.setAttribute != "function" || typeof u.namespaceURI != "string" || typeof u.insertBefore != "function" || typeof u.hasChildNodes != "function");
  }, Dr = function(u) {
    return typeof l == "function" && u instanceof l;
  };
  function Ie(z, u, C) {
    Nt(z, (B) => {
      B.call(t, u, C, Ge);
    });
  }
  const kr = function(u) {
    let C = null;
    if (Ie(O.beforeSanitizeElements, u, null), Kt(u))
      return _e(u), !0;
    const B = re(u.nodeName);
    if (Ie(O.uponSanitizeElement, u, {
      tagName: B,
      allowedTags: E
    }), Se && u.hasChildNodes() && !Dr(u.firstElementChild) && ce(/<[/\w!]/g, u.innerHTML) && ce(/<[/\w!]/g, u.textContent) || u.nodeType === ot.progressingInstruction || Se && u.nodeType === ot.comment && ce(/<[/\w]/g, u.data))
      return _e(u), !0;
    if (!(L.tagCheck instanceof Function && L.tagCheck(B)) && (!E[B] || D[B])) {
      if (!D[B] && Mr(B) && (P.tagNameCheck instanceof RegExp && ce(P.tagNameCheck, B) || P.tagNameCheck instanceof Function && P.tagNameCheck(B)))
        return !1;
      if (zt && !Re[B]) {
        const Q = b(u) || u.parentNode, ae = w(u) || u.childNodes;
        if (ae && Q) {
          const te = ae.length;
          for (let fe = te - 1; fe >= 0; --fe) {
            const Pe = A(ae[fe], !0);
            Pe.__removalCount = (u.__removalCount || 0) + 1, Q.insertBefore(Pe, y(u));
          }
        }
      }
      return _e(u), !0;
    }
    return u instanceof m && !os(u) || (B === "noscript" || B === "noembed" || B === "noframes") && ce(/<\/no(script|embed|frames)/i, u.innerHTML) ? (_e(u), !0) : (le && u.nodeType === ot.text && (C = u.textContent, Nt([H, W, q], (Q) => {
      C = nt(C, Q, " ");
    }), u.textContent !== C && (rt(t.removed, {
      element: u.cloneNode()
    }), u.textContent = C)), Ie(O.afterSanitizeElements, u, null), !1);
  }, Fr = function(u, C, B) {
    if (Tr && (C === "id" || C === "name") && (B in n || B in as))
      return !1;
    if (!(J && !F[C] && ce(ee, C))) {
      if (!(V && ce(ne, C))) {
        if (!(L.attributeCheck instanceof Function && L.attributeCheck(C, u))) {
          if (!I[C] || F[C]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(Mr(u) && (P.tagNameCheck instanceof RegExp && ce(P.tagNameCheck, u) || P.tagNameCheck instanceof Function && P.tagNameCheck(u)) && (P.attributeNameCheck instanceof RegExp && ce(P.attributeNameCheck, C) || P.attributeNameCheck instanceof Function && P.attributeNameCheck(C, u)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              C === "is" && P.allowCustomizedBuiltInElements && (P.tagNameCheck instanceof RegExp && ce(P.tagNameCheck, B) || P.tagNameCheck instanceof Function && P.tagNameCheck(B)))
            ) return !1;
          } else if (!Ht[C]) {
            if (!ce(c, nt(B, xe, ""))) {
              if (!((C === "src" || C === "xlink:href" || C === "href") && u !== "script" && Ya(B, "data:") === 0 && Sr[u])) {
                if (!(X && !ce(ve, nt(B, xe, "")))) {
                  if (B)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, Mr = function(u) {
    return u !== "annotation-xml" && Zt(u, De);
  }, $r = function(u) {
    Ie(O.beforeSanitizeAttributes, u, null);
    const {
      attributes: C
    } = u;
    if (!C || Kt(u))
      return;
    const B = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: I,
      forceKeepAttr: void 0
    };
    let Q = C.length;
    for (; Q--; ) {
      const ae = C[Q], {
        name: te,
        namespaceURI: fe,
        value: Pe
      } = ae, We = re(te), Vt = Pe;
      let se = te === "value" ? Vt : Xa(Vt);
      if (B.attrName = We, B.attrValue = se, B.keepAttr = !0, B.forceKeepAttr = void 0, Ie(O.uponSanitizeAttribute, u, B), se = B.attrValue, jr && (We === "id" || We === "name") && (Fe(te, u), se = es + se), Se && ce(/((--!?|])>)|<\/(style|title|textarea)/i, se)) {
        Fe(te, u);
        continue;
      }
      if (We === "attributename" && Zt(se, "href")) {
        Fe(te, u);
        continue;
      }
      if (B.forceKeepAttr)
        continue;
      if (!B.keepAttr) {
        Fe(te, u);
        continue;
      }
      if (!je && ce(/\/>/i, se)) {
        Fe(te, u);
        continue;
      }
      le && Nt([H, W, q], (zr) => {
        se = nt(se, zr, " ");
      });
      const Br = re(u.nodeName);
      if (!Fr(Br, We, se)) {
        Fe(te, u);
        continue;
      }
      if (j && typeof N == "object" && typeof N.getAttributeType == "function" && !fe)
        switch (N.getAttributeType(Br, We)) {
          case "TrustedHTML": {
            se = j.createHTML(se);
            break;
          }
          case "TrustedScriptURL": {
            se = j.createScriptURL(se);
            break;
          }
        }
      if (se !== Vt)
        try {
          fe ? u.setAttributeNS(fe, te, se) : u.setAttribute(te, se), Kt(u) ? _e(u) : an(t.removed);
        } catch {
          Fe(te, u);
        }
    }
    Ie(O.afterSanitizeAttributes, u, null);
  }, is = function z(u) {
    let C = null;
    const B = Pr(u);
    for (Ie(O.beforeSanitizeShadowDOM, u, null); C = B.nextNode(); )
      Ie(O.uponSanitizeShadowNode, C, null), kr(C), $r(C), C.content instanceof o && z(C.content);
    Ie(O.afterSanitizeShadowDOM, u, null);
  };
  return t.sanitize = function(z) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, C = null, B = null, Q = null, ae = null;
    if (Gt = !z, Gt && (z = "<!-->"), typeof z != "string" && !Dr(z))
      if (typeof z.toString == "function") {
        if (z = z.toString(), typeof z != "string")
          throw st("dirty is not a string, aborting");
      } else
        throw st("toString is not a function");
    if (!t.isSupported)
      return z;
    if (Xe || qt(u), t.removed = [], typeof z == "string" && (Qe = !1), Qe) {
      if (z.nodeName) {
        const Pe = re(z.nodeName);
        if (!E[Pe] || D[Pe])
          throw st("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (z instanceof l)
      C = Ir("<!---->"), B = C.ownerDocument.importNode(z, !0), B.nodeType === ot.element && B.nodeName === "BODY" || B.nodeName === "HTML" ? C = B : C.appendChild(B);
    else {
      if (!ke && !le && !Ee && // eslint-disable-next-line unicorn/prefer-includes
      z.indexOf("<") === -1)
        return j && bt ? j.createHTML(z) : z;
      if (C = Ir(z), !C)
        return ke ? null : bt ? T : "";
    }
    C && ze && _e(C.firstChild);
    const te = Pr(Qe ? z : C);
    for (; Q = te.nextNode(); )
      kr(Q), $r(Q), Q.content instanceof o && is(Q.content);
    if (Qe)
      return z;
    if (ke) {
      if (yt)
        for (ae = M.call(C.ownerDocument); C.firstChild; )
          ae.appendChild(C.firstChild);
      else
        ae = C;
      return (I.shadowroot || I.shadowrootmode) && (ae = p.call(r, ae, !0)), ae;
    }
    let fe = Ee ? C.outerHTML : C.innerHTML;
    return Ee && E["!doctype"] && C.ownerDocument && C.ownerDocument.doctype && C.ownerDocument.doctype.name && ce(qn, C.ownerDocument.doctype.name) && (fe = "<!DOCTYPE " + C.ownerDocument.doctype.name + `>
` + fe), le && Nt([H, W, q], (Pe) => {
      fe = nt(fe, Pe, " ");
    }), j && bt ? j.createHTML(fe) : fe;
  }, t.setConfig = function() {
    let z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    qt(z), Xe = !0;
  }, t.clearConfig = function() {
    Ge = null, Xe = !1;
  }, t.isValidAttribute = function(z, u, C) {
    Ge || qt({});
    const B = re(z), Q = re(u);
    return Fr(B, Q, C);
  }, t.addHook = function(z, u) {
    typeof u == "function" && rt(O[z], u);
  }, t.removeHook = function(z, u) {
    if (u !== void 0) {
      const C = Ka(O[z], u);
      return C === -1 ? void 0 : Va(O[z], C, 1)[0];
    }
    return an(O[z]);
  }, t.removeHooks = function(z) {
    O[z] = [];
  }, t.removeAllHooks = function() {
    O = fn();
  }, t;
}
var fo = Kn();
const po = "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg", mo = ["jpg", "jpeg", "png", "gif", "svg", "webp"], ho = ["mp4", "webm", "ogg"], go = ["txt", "json", "csv"], yo = ["pdf"];
function bo(e) {
  return e.template ? e.template : "tab";
}
function xo(e) {
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    const s = r.group || "Info";
    t[s] || (t[s] = { label: s, type: "fields", fields: [] }), t[s]?.fields?.push({ name: n, ...r });
  }), t;
}
const wo = (e) => Object.entries(e ?? {}).filter(([, t]) => t.type === "geolocation").map(([t]) => t);
async function vo() {
  if (!("geolocation" in navigator))
    throw new Error(
      "Geolocation is not supported by this browser. You cannot access this portal."
    );
  try {
    const e = await new Promise(
      (r, s) => {
        navigator.geolocation.getCurrentPosition(r, s, {
          enableHighAccuracy: !1,
          timeout: 3e4,
          maximumAge: 12e4
        });
      }
    ), { latitude: t, longitude: n } = e.coords;
    return `${t},${n}`;
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
function It(e, t = "create") {
  const n = {};
  return Object.keys(e).forEach((r) => {
    e[r].vmode === "edit" && t === "create" || (n[r] = {
      label: r,
      required: e[r].required ?? !1
    });
  }), n;
}
function Eo(e, t = "create") {
  return Object.entries(e).filter(([, n]) => !(n.vmode === "edit" && t === "create")).map(([n, r]) => ({
    ...r,
    name: n
  }));
}
const mt = {
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
function ht(e) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(e) ? e : 6;
}
const he = (e, t) => typeof e == "string" ? e.replace(
  /#(\w+)#/g,
  (n, r) => t[r] !== void 0 ? String(t[r]) : n
) : Array.isArray(e) ? e.map((n) => he(n, t)) : e && typeof e == "object" ? Object.fromEntries(
  Object.entries(e).map(([n, r]) => [
    he(n, t),
    he(r, t)
  ])
) : e, Vn = (e) => {
  const t = Array.isArray(e?.data?.data) ? e.data.data[0] : Array.isArray(e?.data) ? e.data[0] : e?.data?.data ?? e?.data;
  return t && typeof t == "object" && !Array.isArray(t) ? t : null;
}, Ne = (e, t, n, r) => {
  if (!Array.isArray(n) || n.length === 0) return {};
  const s = r ?? (n[0] && typeof n[0] == "object" && "category" in n[0] ? "category" : void 0);
  if (!s) {
    const i = {};
    return n.forEach((l) => {
      const m = l[e], d = l[t];
      m != null && d != null && (i[String(m)] = String(d));
    }), i;
  }
  const o = {};
  return n.forEach((i) => {
    const l = i[s] ?? "Others", m = i[e], d = i[t];
    m == null || d == null || (o[l] || (o[l] = {}), o[l][String(m)] = String(d));
  }), o;
};
function pn(e, t) {
  if (!t || Object.keys(t).length === 0) return e;
  if (typeof e == "number")
    return t[String(e)] ?? e;
  if (typeof e == "string") {
    const r = e.split(",").map((s) => s.trim()).map((s) => t[s]).filter(Boolean);
    return r.length ? r.join(", ") : e;
  }
  return e;
}
const Ao = (e) => e === !0 || e === "true", No = (e, t, n, r) => {
  e.forEach((s) => {
    const o = s?.name;
    if (!o) return;
    let i = r?.[o];
    i == null && (i = s.default), s.multiple === !0 || s.type === "checkbox" || s.type === "tags" ? t[o] = Array.isArray(i) ? i : typeof i == "string" ? i.split(",").map((m) => m.trim()).filter(Boolean) : [] : s.type === "json" ? t[o] = typeof i == "object" && i !== null ? JSON.stringify(i, null, 2) : i ?? "" : s.type === "date" ? t[o] = typeof i == "string" ? i.slice(0, 10) : "" : s.type === "time" ? typeof i == "string" ? i.includes("T") ? t[o] = i.slice(11, 16) : t[o] = i.slice(0, 5) : t[o] = "" : o === "blocked" || o === "blacklist" ? t[o] = String(i ?? "false") : t[o] = i ?? "";
    let l;
    s.type === "file" ? l = s.multiple ? be.array().of(be.mixed()) : be.mixed() : s.multiple === !0 || s.type === "checkbox" || s.type === "tags" ? l = be.array().of(be.string()) : s.type === "email" ? l = be.string().email("Invalid email") : s.type === "number" ? l = be.number().typeError("Must be a number") : s.type === "json" ? l = be.string().test("json", "Invalid JSON", (m) => {
      if (!m) return !0;
      try {
        return JSON.parse(m), !0;
      } catch {
        return !1;
      }
    }) : l = be.string(), s.required && (l = l.required(
      s.error_message || `${s.label || o} is required`
    )), s?.validate?.regex && typeof s.validate.regex == "string" && (l = l.matches(
      new RegExp(s?.validate?.regex),
      s?.error_message || "Invalid input format"
    )), s?.validate && Object.entries(s.validate).forEach(([m, d]) => {
      switch (m) {
        case "email":
          d && (l = l.email("Invalid email format"));
          break;
        case "mobile":
          l = l.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          l = l.matches(
            new RegExp(d),
            `Must match pattern: ${d}`
          );
          break;
        case "date":
          l = be.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((f, h) => {
            if (typeof h == "string") {
              const g = h.replace(/-/g, "/"), [N, v, A] = g.split("/");
              if (N && v && A)
                return /* @__PURE__ */ new Date(`${A}-${v}-${N}`);
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
          l = be.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          l = be.number().typeError("Must be a decimal").transform((f, h) => {
            if (h == null || h === "") return;
            const g = Number(h);
            if (isNaN(g)) return f;
            if (typeof f == "number" && !isNaN(f)) {
              const N = Number(f);
              return Number.isInteger(N) ? Number(g.toFixed(N)) : g;
            }
            return g;
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
          const f = Number(d);
          isNaN(f) || (l = l.min(f, `Minimum length is ${f}`));
          break;
        }
        case "length-max": {
          const f = Number(d);
          isNaN(f) || (l = l.max(f, `Maximum length is ${f}`));
          break;
        }
      }
    }), n[o] = l;
  });
}, Pt = (e) => !e || typeof e != "object" ? !1 : Object.values(e).every(
  (t) => typeof t == "object" && t !== null
);
function To(e) {
  if (!e || typeof e != "object") return !1;
  const t = e.src;
  return typeof e.target == "string" && typeof t == "object" && t !== null && (t.type === "api" || typeof t.queryid == "string" || typeof t.table == "string" && typeof t.columns < "u");
}
function jo(e) {
  return e.split(",").map((t) => t.trim()).map((t) => {
    const n = t.match(/^(.+?)\s+as\s+.+$/i);
    return n ? n[1]?.trim() : t;
  }).filter((t) => !!t);
}
const yr = (e, t) => {
  if (!e || t == null) return;
  const n = String(t);
  if (typeof Object.values(e)[0] == "string")
    return e[n];
  for (const s of Object.values(e))
    if (n in s)
      return s[n];
}, So = (e) => {
  if (!e) return [];
  if (Array.isArray(e))
    return e.map(
      (r) => [
        String(r.value),
        String(r.title ?? r.label ?? r.value)
      ]
    );
  const t = Object.values(e);
  return t.length ? typeof t[0] == "string" ? Object.entries(e).map(([r, s]) => [String(r), s]) : Object.values(e).flatMap(
    (r) => Object.entries(r).map(
      ([s, o]) => [String(s), o]
    )
  ) : [];
};
function Ro(e) {
  return e ? Pt(e) ? Object.values(e).reduce((t, n) => (Object.assign(t, n), t), {}) : e : {};
}
const me = (e) => {
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    const s = n.includes(".") ? n.split(".").pop() : n;
    if (s in t) {
      console.warn(`Duplicate key after normalization: ${s}`);
      continue;
    }
    t[s] = r;
  }
  return t;
};
function _o(e) {
  if (!e || e.type !== "Buffer" || !Array.isArray(e.data)) return null;
  const t = new TextDecoder().decode(new Uint8Array(e.data)).trim();
  if (t.startsWith("data:image/"))
    return console.log("decoded", t), { type: "image", src: t };
  if (t.startsWith("<"))
    return { type: "html", html: t };
  try {
    const n = JSON.parse(t);
    if (Array.isArray(n) && n[0]?.d)
      return { type: "drawn", paths: n };
    if (n?.text)
      return { type: "text", data: n };
  } catch {
  }
  return null;
}
function Co(e = "") {
  return e.split(".").pop()?.toLowerCase() ?? "";
}
function Oo(e) {
  return mo.includes(e) ? "image" : ho.includes(e) ? "video" : yo.includes(e) ? "pdf" : go.includes(e) ? "text" : "other";
}
const mn = {
  image: "fa fa-file-image",
  pdf: "fa fa-file-pdf",
  video: "fa fa-file-video",
  text: "fa fa-file-lines",
  other: "fa fa-file"
}, Lo = "__form_persist__", Yn = (e) => `${Lo}:${e}`;
function Io(e) {
  return fo.sanitize(e, {
    USE_PROFILES: { html: !0 }
  });
}
function Po(e) {
  try {
    return JSON.parse(localStorage.getItem(Yn(e)) || "{}");
  } catch {
    return {};
  }
}
function Do(e) {
  return e.persistent ? e.persistent === !0 ? e.name : typeof e.persistent == "string" ? e.persistent : null : null;
}
function ko(e, t, n) {
  const r = Po(e);
  localStorage.setItem(
    Yn(e),
    JSON.stringify({
      ...r,
      [t]: n
    })
  );
}
function it(e, t, n) {
  const r = Do(t);
  r && n && ko(n, r, e);
}
function sr(e) {
  return U.isAxiosError(e) ? e.response?.data?.message || e.message || "Something went wrong" : e instanceof Error ? e.message : typeof e == "string" ? e : "Something went wrong";
}
function ar(e) {
  return e?.data?.message ? e.data.message : e?.message ? e.message : "Operation completed successfully";
}
const Fo = ({ fileUrl: e, category: t }) => e ? t === "image" ? /* @__PURE__ */ a.jsx("img", { src: e, className: "max-h-[80vh] mx-auto" }) : t === "pdf" || t === "text" ? /* @__PURE__ */ a.jsx("iframe", { src: e, className: "w-full h-[80vh]" }) : t === "video" ? /* @__PURE__ */ a.jsx("video", { controls: !0, className: "w-full max-h-[80vh]", children: /* @__PURE__ */ a.jsx("source", { src: e }) }) : /* @__PURE__ */ a.jsxs("div", { className: "text-center p-4", children: [
  /* @__PURE__ */ a.jsx("p", { children: "Preview not available" }),
  /* @__PURE__ */ a.jsx("a", { href: e, download: !0, className: "text-blue-600 underline", children: "Download file" })
] }) : null, lt = (e) => ({
  Authorization: `Bearer ${e.accessToken}`
}), or = async (e) => (await U.get(
  e.baseURL + e.dbopsGetHash,
  { headers: lt(e) }
)).data.refhash, ir = async (e, t) => (await U.post(
  e.baseURL + e.dbopsGetRefId,
  t,
  { headers: lt(e) }
)).data.refid, Mo = {
  async fetch(e, t, n, r) {
    const s = await or(e);
    let o = !1, i;
    n && (o = !0, i = n), o || (i = await ir(e, {
      operation: "fetch",
      source: t.source,
      fields: t.fields ?? {},
      datahash: s,
      srcid: r
    }));
    const l = { refid: i, datahash: s, refid1: e.refid };
    t.source?.refid && (l.refid1 = t.source?.refid);
    const m = await U.post(
      e.baseURL + e.dbopsFetch,
      l,
      { headers: lt(e) }
    );
    return m.data?.data ?? m.data;
  },
  async create(e, t, n) {
    const r = await or(e), s = await ir(e, {
      operation: "create",
      source: t.source,
      fields: t.values,
      datahash: r,
      srcid: n
    });
    return (await U.post(
      e.baseURL + e.dbopsCreate,
      { refid: s, fields: t.values, datahash: r },
      { headers: lt(e) }
    )).data;
  },
  async update(e, t, n) {
    const r = await or(e), s = await ir(e, {
      operation: "update",
      source: t.source,
      fields: t.values,
      datahash: r,
      srcid: n
    });
    return (await U.post(
      e.baseURL + e.dbopsUpdate,
      { refid: s, fields: t.values, datahash: r },
      { headers: lt(e) }
    )).data;
  }
};
async function qe(e, t, n, r = void 0, s = void 0, o = {}) {
  try {
    let i = n;
    return i || (i = (await U({
      method: "POST",
      url: e.baseURL + e.registerQuery,
      data: { query: t, srcid: s },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    })).data.queryid), await U({
      method: "POST",
      url: e.baseURL + e.runQuery,
      data: {
        queryid: i,
        filter: o,
        refid: r,
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
async function $o({
  field: e,
  value: t,
  sqlOpsUrls: n,
  setFieldOptions: r,
  values: s
}) {
  if (!e.ajaxchain || !t || !n) return;
  const o = Array.isArray(e.ajaxchain) ? e.ajaxchain : [e.ajaxchain];
  for (const i of o) {
    const l = i.src;
    if (!i || typeof i != "object" || !l || typeof l != "object") continue;
    let m;
    if ("type" in l && l.type === "api") {
      let g = e.name;
      typeof e.parameter == "string" && e.parameter && (g = e.parameter);
      const N = { [g]: t, refid: t };
      if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
        for (const [S, y] of Object.entries(e.parameter))
          N[S] = S === g ? t : s?.[y];
      const v = {
        method: l.method || "GET",
        url: n?.baseURL + l.endpoint,
        headers: {
          Authorization: `Bearer ${n?.accessToken}`
        },
        ...l.method === "GET" ? { params: N } : { data: N }
      }, { data: A } = await U(v);
      m = A;
    } else {
      let g;
      if (!l.queryid) {
        if (!l.table || !l.columns)
          throw new Error("SQL query requires field.table");
        const v = he(l.where ?? {}, { refid: t });
        g = {
          ...l,
          table: l.table,
          cols: l.columns,
          where: v
        };
      }
      const { data: N } = await qe(
        n,
        g,
        l.queryid,
        t
      );
      m = N;
    }
    const d = Array.isArray(m?.results?.options) ? m?.results?.options : Array.isArray(m.data) ? m.data : Array.isArray(m.results) ? m.results : m, f = Array.isArray(d) ? d.map(me) : [], h = Ne(
      e.valueKey ?? "value",
      e.labelKey ?? "title",
      f,
      e.groupKey
    );
    r(i.target, h);
  }
}
async function Xn(e, t) {
  let n = t.previewPath ?? "/api/files/preview";
  const r = await U.get(
    `${t.baseURL}${n}?uri=${encodeURIComponent(e)}`,
    {
      responseType: "blob",
      headers: {
        Authorization: `Bearer ${t?.accessToken}`
      }
    }
  );
  return URL.createObjectURL(r.data);
}
async function Qn(e, t) {
  if (!e?.uploadURL)
    throw new Error("Upload URL missing");
  const n = e.baseURL + e.uploadURL;
  return Promise.all(
    Array.from(t).map(async (r) => {
      const s = new FormData();
      return s.append("file", r), (await U.post(n, s, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${e.accessToken}`
        }
      })).data;
    })
  );
}
function Bo(e) {
  const t = mn[e] ?? mn.other;
  return /* @__PURE__ */ a.jsx("i", { className: `${t} text-2xl text-gray-600` });
}
const Jn = ({ filePath: e, sqlOpsUrls: t }) => {
  const [n, r] = oe(null), [s, o] = oe(!1), i = Co(e), l = Oo(i);
  pe(() => {
    if (!t || l !== "image" && !s) return;
    let d = !0, f = null;
    return Xn(e, t).then((h) => {
      d && (f = h, r(h));
    }), () => {
      d = !1, f && URL.revokeObjectURL(f);
    };
  }, [l, s, e, t]);
  let m = e.split("/").pop();
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    l === "image" && n ? /* @__PURE__ */ a.jsx(
      "img",
      {
        src: n,
        alt: m,
        title: "Click to preview",
        onClick: () => o(!0),
        className: "h-16 w-16 object-cover rounded  cursor-pointer hover:opacity-90"
      }
    ) : /* @__PURE__ */ a.jsxs(
      "div",
      {
        role: "button",
        tabIndex: 0,
        onClick: () => o(!0),
        onKeyDown: (d) => d.key === "Enter" && o(!0),
        className: "inline-flex cursor-pointer items-center gap-1",
        title: "Click to preview",
        children: [
          Bo(l),
          /* @__PURE__ */ a.jsx("span", { className: "text-sm", children: m })
        ]
      }
    ),
    s && /* @__PURE__ */ a.jsx("div", { className: "fixed inset-0 bg-black/60 z-50 flex items-center justify-center", children: /* @__PURE__ */ a.jsxs("div", { className: "bg-white rounded-lg p-4 max-w-5xl w-full", children: [
      /* @__PURE__ */ a.jsx(
        "button",
        {
          className: "float-right text-sm",
          onClick: () => o(!1),
          children: "✕"
        }
      ),
      n ? /* @__PURE__ */ a.jsx(Fo, { fileUrl: n, category: l }) : /* @__PURE__ */ a.jsx("div", { className: "text-center p-8", children: "Loading preview…" })
    ] }) })
  ] });
};
function gt({
  field: e,
  data: t,
  methods: n = {},
  sqlOpsUrls: r,
  refid: s,
  module_refid: o,
  optionsOverride: i,
  setFieldOptions: l
}) {
  e?.name;
  const m = `
    text-sm text-gray-600 break-words capitalize
  `, d = `
    block text-sm font-semibold  transition-all duration-300 text-gray-700 capitalize
  `, [f, h] = oe(
    i ?? e.options ?? {}
  ), g = Z.useRef(!1);
  Z.useEffect(() => {
    i && h(i);
  }, [i]);
  const N = Z.useMemo(
    () => Ro(f),
    [f]
  );
  Z.useEffect(() => {
    let b = !0, j = e.valueKey ?? "value", T = e.labelKey ?? "title";
    return (async () => {
      let $ = e?.options;
      if ($ && (Array.isArray($) && $.length > 0 || !Array.isArray($) && Object.keys($).length > 0)) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const H = Object.values(e.options);
          if (H.length && typeof H[0] == "string") {
            h(e.options);
            return;
          }
        }
        const p = (Array.isArray(e.options) ? e.options : [e.options]).map(me), O = Ne(
          j,
          T,
          p,
          e.groupKey
          // auto-uses `category` if present
        );
        h(O);
        return;
      }
      const M = e?.source ?? {};
      if (e.type === "dataMethod") {
        const k = e.method, p = k ? n[k] : void 0;
        if (p)
          try {
            const O = await Promise.resolve(p()), H = Array.isArray(O.data?.results?.options) ? O.data?.results?.options : Array.isArray(O?.data?.data) ? O.data.data : Array.isArray(O.data?.results) ? O.data?.results : Array.isArray(O?.data) ? O.data : O;
            if (typeof H == "object" && !Array.isArray(H)) {
              const ee = Object.values(H);
              if (ee.length && typeof ee[0] == "string") {
                h(H);
                return;
              }
            }
            const W = Array.isArray(H) ? H.map(me) : [], q = Ne(j, T, W, e.groupKey);
            b && h(q);
            return;
          } catch (O) {
            console.error("Method execution failed:", O), b && h({});
            return;
          }
        else {
          b && h({});
          return;
        }
      }
      if (M.type === "api" && M.endpoint)
        try {
          const k = {
            method: M.method || "GET",
            url: r?.baseURL + M.endpoint,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            },
            ...M.method === "GET" ? { params: { refid: M.refid } } : { data: { refid: M.refid } }
          }, p = await U(k), O = Array.isArray(p.data?.results?.options) ? p.data?.results?.options : Array.isArray(p?.data?.data) ? p.data.data : Array.isArray(p.data?.results) ? p.data?.results : Array.isArray(p?.data) ? p.data : p;
          if (typeof O == "object" && !Array.isArray(O)) {
            const q = Object.values(O);
            if (q.length && typeof q[0] == "string") {
              h(O);
              return;
            }
          }
          const H = Array.isArray(O) ? O.map(me) : [], W = Ne(j, T, H, e.groupKey);
          b && h(W);
          return;
        } catch (k) {
          console.error("API execution failed:", k), b && h({});
          return;
        }
      if (e.table || e.type === "dataSelector" || e.queryid) {
        if (!r) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let k;
          if (e.type === "dataSelector")
            k = {
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
            k = {
              table: e.table,
              cols: e.columns,
              where: e.where ? s ? he(e.where, { refid: s }) : e.where : void 0
            };
          }
          const p = await qe(r, k, e?.queryid, void 0, o), O = Array.isArray(p?.data?.data) ? p.data.data : Array.isArray(p?.data) ? p.data : p;
          if (typeof O == "object" && !Array.isArray(O)) {
            const q = Object.values(O);
            if (q.length && typeof q[0] == "string") {
              h(O);
              return;
            }
          }
          const H = Array.isArray(O) ? O.map(me) : [], W = Ne(j, T, H, e.groupKey);
          b && h(W);
        } catch (k) {
          console.error("API fetch failed:", k);
        }
      }
    })(), () => {
      b = !1;
    };
  }, [
    e.options,
    e.source,
    e.table,
    e.columns,
    e.where,
    s
  ]);
  const v = e?.name ? t?.[e.name] : void 0;
  Z.useEffect(() => {
    g.current || !l || !v || (g.current = !0, $o({
      field: e,
      value: v,
      sqlOpsUrls: r,
      setFieldOptions: l,
      values: t ?? {}
    }));
  }, [v, r, l]);
  let A;
  typeof v == "string" ? e.type === "date" ? A = v.split("T")[0] : e.type === "time" ? A = v.includes("T") ? v.slice(11, 16) : v.slice(0, 5) : A = pn(v, N) : A = pn(v, N);
  const S = A == null ? "" : typeof A == "string" || typeof A == "number" ? A : JSON.stringify(A), y = _o(v), w = e.type === "richtextarea" && typeof S == "string" ? Io(S) : null;
  return /* @__PURE__ */ a.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ a.jsx("label", { className: d, children: e?.label }),
    /* @__PURE__ */ a.jsx("div", { className: "relative", children: y ? y.type === "drawn" ? /* @__PURE__ */ a.jsx("svg", { viewBox: "0 0 300 150", className: "h-24 w-full border bg-white rounded", children: y.paths.map((b, j) => /* @__PURE__ */ a.jsx(
      "path",
      {
        d: b.d,
        stroke: b.color || "#000",
        strokeWidth: b.width || 2,
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      j
    )) }) : y.type === "text" ? /* @__PURE__ */ a.jsx("svg", { viewBox: "0 0 300 150", className: "h-24 w-full border bg-white rounded", children: /* @__PURE__ */ a.jsx(
      "text",
      {
        x: "10",
        y: "100",
        fontSize: y.data.style?.fontSize || 32,
        fontFamily: y.data.style?.fontFamily || "cursive",
        fill: y.data.style?.textColor || "#000",
        children: y.data.text
      }
    ) }) : y.type === "html" ? /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "border bg-white rounded p-2 text-sm",
        dangerouslySetInnerHTML: { __html: y.html }
      }
    ) : /* @__PURE__ */ a.jsx(
      "img",
      {
        src: y.src,
        alt: "signature",
        className: "h-24 object-contain border bg-white rounded"
      }
    ) : (e.type === "file" || e.type === "attachement" || e.type === "photo" || e.type === "avatar") && A ? /* @__PURE__ */ a.jsx("div", { className: "flex flex-wrap gap-2", children: String(A).split(",").map((b) => b.trim()).filter(Boolean).map((b) => /* @__PURE__ */ a.jsx(
      Jn,
      {
        sqlOpsUrls: r,
        filePath: b
      },
      b
    )) }) : e.type === "richtextarea" ? /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "tiptap border border-gray-200 min-h-[400px] max-h-[220px] overflow-auto bg-white rounded p-2 text-sm",
        dangerouslySetInnerHTML: { __html: w ?? "" }
      }
    ) : /* @__PURE__ */ a.jsx("p", { className: m, children: S }) })
  ] });
}
function Zn({ filePath: e, field_name: t, sqlOpsUrls: n }) {
  const [r, s] = oe(null);
  return pe(() => {
    if (!open || !n) return;
    let o = !0, i = null;
    return Xn(e, n).then((l) => {
      o && (i = l, s(l));
    }), () => {
      o = !1, i && URL.revokeObjectURL(i);
    };
  }, [open, e, n]), r ? /* @__PURE__ */ a.jsx(
    "img",
    {
      src: r,
      alt: t,
      title: t,
      className: "object-contain h-full w-full",
      onError: (o) => {
        const i = o.currentTarget;
        i.onerror = null, i.src = po;
      }
    }
  ) : null;
}
function zo({
  commonInfo: e,
  infoData: t,
  hiddenFields: n = [],
  sqlOpsUrls: r,
  setFieldOptions: s,
  fieldOptions: o,
  module_refid: i,
  refid: l,
  methods: m
}) {
  const d = jt(
    () => e?.fields?.find((g) => g.type === "avatar"),
    [e?.fields]
  ), f = d?.name, h = f && typeof t?.[f] == "string" ? t[f].trim() : "";
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white border border-gray-100 p-4 min-h-3/10 overflow-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    d && /* @__PURE__ */ a.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ a.jsx("div", { className: "relative w-42 h-42 p-2 rounded-sm overflow-hidden bg-gray-100 flex items-center justify-center", children: h ? /* @__PURE__ */ a.jsx(
      Zn,
      {
        field_name: d.name,
        filePath: h,
        sqlOpsUrls: r
      }
    ) : /* @__PURE__ */ a.jsx(
      "img",
      {
        src: "https://cdn-icons-png.flaticon.com/512/266/266033.png",
        alt: "avatar placeholder",
        className: "w-full h-full object-cover opacity-60"
      }
    ) }) }),
    /* @__PURE__ */ a.jsx("div", { className: `min-h-0 max-h-40 overflow-y-auto custom-scrollbar ${d ? "lg:col-span-10" : "lg:col-span-12"}`, children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: e.fields?.map((g, N) => n.includes(g.name) || g.type === "avatar" ? null : /* @__PURE__ */ a.jsx("div", { className: `hover:bg-gray-100 transition-colors duration-200 col-span-12 sm:col-span-6 ${mt[ht(g.width)] || "lg:col-span-4"}`, children: /* @__PURE__ */ a.jsx(
      gt,
      {
        field: g,
        data: t ?? {},
        sqlOpsUrls: r,
        methods: m,
        refid: l,
        module_refid: i,
        setFieldOptions: s,
        ...o[g.name] ? { optionsOverride: o[g.name] } : {}
      },
      g?.name
    ) }, g.name)) }) })
  ] }) });
}
function Er({ tabObj: e, methods: t, tabName: n, sqlOpsUrls: r, refid: s, module_refid: o, setFieldOptions: i, fieldOptions: l }) {
  const [m, d] = Z.useState(null);
  return Z.useEffect(() => {
    let f = !1;
    return (async () => {
      const g = e?.config;
      if (!g?.type) {
        f || d(null);
        return;
      }
      if (g.type === "method") {
        const N = g.method, v = N ? t[N] : void 0;
        if (v)
          try {
            const A = await Promise.resolve(v());
            f || d(A || null);
          } catch (A) {
            console.error("Method execution failed:", A), f || d(null);
          }
        else
          f || d(null);
      }
      if (g.type === "api")
        try {
          const N = await U({
            method: g.method || "GET",
            // GET, POST, etc.
            url: g.url,
            data: g.body || {},
            // request body
            params: g.params || {},
            // query params
            headers: g.headers || {}
            // optional headers
          });
          f || d(N.data || null);
        } catch (N) {
          console.error("API fetch failed:", N), f || d(null);
        }
      if (g.type === "sql" && s && s != "0" || g?.dbopsid) {
        if (!r) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let N = !1, v;
          g?.dbopsid && (N = !0, v = g?.dbopsid);
          const A = await U({
            method: "GET",
            url: r.baseURL + r.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            }
          });
          if (!N) {
            let w = {
              ...g
            };
            g.where && (w = {
              ...g,
              where: he(g.where, {
                refid: s
              })
            }), v = (await U({
              method: "POST",
              url: r.baseURL + r.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: w,
                fields: It(g.fields, r.operation),
                forcefill: g.forcefill,
                datahash: A.data.refhash,
                srcid: o
              },
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              }
            }))?.data.refid;
          }
          const S = await U({
            method: "POST",
            url: r.baseURL + r.dbopsFetch,
            data: {
              refid: v,
              datahash: A.data.refhash
            },
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            }
          }), y = Vn(S);
          f || d(y);
        } catch (N) {
          console.error("API fetch failed:", N);
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
  ]), /* @__PURE__ */ a.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: m ? Object.keys(m).map((f, h) => {
    let g = { name: f, label: f };
    return /* @__PURE__ */ a.jsx(
      "div",
      {
        className: `col-span-12 sm:col-span-6 ${mt[ht(e.width)] || "lg:col-span-2"}`,
        children: /* @__PURE__ */ a.jsx(
          gt,
          {
            field: g,
            data: m ?? {},
            methods: t,
            refid: s,
            sqlOpsUrls: r,
            setFieldOptions: i,
            ...l[g.name] ? { optionsOverride: l[g.name] } : {}
          },
          f
        )
      },
      `field-${h}`
    );
  }) : /* @__PURE__ */ a.jsx("div", { className: "col-span-12 flex flex-col  min-h-0", children: /* @__PURE__ */ a.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center text-gray-500", children: [
    /* @__PURE__ */ a.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ a.jsxs("svg", { className: "w-8 h-8 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
      /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" }),
      /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m8 7 4-4 4 4" })
    ] }) }),
    /* @__PURE__ */ a.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No Data Available" }),
    /* @__PURE__ */ a.jsx("p", { className: "text-sm text-gray-500 text-center max-w-sm", children: "There are no records to display  at the moment." })
  ] }) }) }) });
}
function Uo({
  open: e,
  title: t = "Confirm Delete",
  message: n = "Are you sure you want to delete this record?",
  onConfirm: r,
  onCancel: s
}) {
  return e ? /* @__PURE__ */ a.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40", children: /* @__PURE__ */ a.jsxs("div", { className: "bg-white rounded-lg shadow-lg w-full max-w-sm p-4", children: [
    /* @__PURE__ */ a.jsx("h3", { className: "text-sm font-semibold text-gray-900", children: t }),
    /* @__PURE__ */ a.jsx("p", { className: "mt-2 text-sm text-gray-600", children: n }),
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
          onClick: r,
          className: "px-3 py-1.5 text-sm rounded bg-red-600 text-white hover:bg-red-700",
          children: "Delete"
        }
      )
    ] })
  ] }) }) : null;
}
function Ho({
  field: e,
  formik: t,
  methods: n = {},
  sqlOpsUrls: r,
  refid: s,
  module_refid: o = "menuManager.main",
  optionsOverride: i,
  setFieldOptions: l
}) {
  const [m, d] = oe(!1), [f, h] = oe(
    i ?? e.options ?? {}
  ), [g, N] = oe(""), [v, A] = oe(0), S = Ke(null), y = Ke(null), [w, b] = oe(!1), j = Ke(g), T = e.disabled === !0;
  pe(() => {
    j.current = g;
  }, [g]), pe(() => {
    if (e.type !== "select" || e.multiple || e["no-option"] !== "false" || t.values[_] || !f) return;
    let E;
    if (Array.isArray(f))
      E = f[0]?.value;
    else if (!Pt(f))
      E = Object.keys(f)[0];
    else {
      const R = Object.values(f)[0];
      E = R ? Object.keys(R)[0] : void 0;
    }
    E != null && t.setFieldValue(_, String(E), !1);
  }, [f]), pe(() => {
    i && Object.keys(i).length !== 0 && h(i);
  }, [i]), pe(() => {
    if (!w) return;
    const c = (E) => {
      const R = E.target;
      y.current?.contains(R) || S.current?.contains(R) || (b(!1), N(""));
    };
    return document.addEventListener("mousedown", c), () => {
      document.removeEventListener("mousedown", c);
    };
  }, [w]);
  const _ = e.name;
  pe(() => {
    let c = !0;
    return (async () => {
      let R = e.valueKey ?? "value", I = e.labelKey ?? "title", Y = e?.options;
      if (Y && (Array.isArray(Y) && Y.length > 0 || !Array.isArray(Y) && Object.keys(Y).length > 0)) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const V = Object.values(e.options);
          if (V.length && typeof V[0] == "string") {
            h(e.options);
            return;
          }
        }
        const F = (Array.isArray(e.options) ? e.options : [e.options]).map(me), L = Ne(
          R,
          I,
          F,
          e.groupKey
          // auto-uses `category` if present
        );
        h(L);
        return;
      }
      const P = e?.source ?? {};
      if (e.type === "dataMethod") {
        const D = e.method, F = D ? n[D] : void 0;
        if (F)
          try {
            const L = await F(), V = Array.isArray(L.data?.results?.options) ? L.data?.results?.options : Array.isArray(L?.data?.data) ? L.data.data : Array.isArray(L.data?.results) ? L.data?.results : Array.isArray(L?.data) ? L.data : L;
            if (typeof V == "object" && !Array.isArray(V)) {
              const je = Object.values(V);
              if (je.length && typeof je[0] == "string") {
                h(V);
                return;
              }
            }
            const J = Array.isArray(V) ? V.map(me) : [], X = Ne(R, I, J, e.groupKey);
            c && h(X);
            return;
          } catch (L) {
            console.error("Method execution failed:", L), c && h({});
            return;
          }
        else {
          c && h({});
          return;
        }
      }
      if (P.type === "api" && P.endpoint)
        try {
          const D = {
            method: P.method || "GET",
            url: r?.baseURL + P.endpoint,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            },
            ...P.method === "GET" ? { params: { refid: P.refid } } : { data: { refid: P.refid } }
          }, F = await U(D), L = Array.isArray(F.data?.results?.options) ? F.data?.results?.options : Array.isArray(F?.data?.data) ? F.data.data : Array.isArray(F.data?.results) ? F.data?.results : Array.isArray(F?.data) ? F.data : F;
          if (typeof L == "object" && !Array.isArray(L)) {
            const X = Object.values(L);
            if (X.length && typeof X[0] == "string") {
              h(L);
              return;
            }
          }
          const V = Array.isArray(L) ? L.map(me) : [], J = Ne(R, I, V, e.groupKey);
          c && h(J);
          return;
        } catch (D) {
          console.error("API execution failed:", D), c && h({});
          return;
        }
      if (e.table || e.type === "dataSelector" || e.queryid) {
        if (!r) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let D;
          if (e.type === "dataSelector")
            D = {
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
            D = {
              table: e.table,
              cols: e.columns,
              where: e.where ? s ? he(e.where, { refid: s }) : e.where : void 0
            };
          }
          const F = await qe(r, D, e?.queryid, void 0, o), L = Array.isArray(F?.data?.data) ? F.data.data : Array.isArray(F?.data) ? F.data : F;
          if (typeof L == "object" && !Array.isArray(L)) {
            const X = Object.values(L);
            if (X.length && typeof X[0] == "string") {
              h(L);
              return;
            }
          }
          const V = Array.isArray(L) ? L.map(me) : [], J = Ne(R, I, V, e.groupKey);
          c && h(J);
        } catch (D) {
          console.error("API fetch failed:", D);
        }
      }
    })(), () => {
      c = !1;
    };
  }, [
    e.options,
    e.source,
    e.table,
    e.columns,
    e.where,
    s,
    e.queryid,
    e.groupKey,
    e.valueKey,
    e.labelKey
  ]);
  const $ = `
  w-full px-4 py-2 rounded-lg border transition-all duration-300
  backdrop-blur-sm text-gray-800 placeholder-gray-400
  focus:outline-none focus:ring-0

  ${T ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:shadow-md"}
`, M = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, k = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, p = jt(
    () => So(f),
    [f]
  ), O = jt(() => {
    if (!e.type || !["suggest", "autosuggest", "autocomplete"].includes(e.type) || !g.trim()) return null;
    const c = g.trim().toLowerCase();
    return p.find(([, E]) => E.trim().toLowerCase() === c);
  }, [e.type, g, p]), H = p.length, W = jt(() => e.search || !g ? p : p.filter(
    ([, c]) => c.toLowerCase().includes(g.toLowerCase())
  ), [e.search, g, p]), q = (c, E) => {
    if (w)
      if (c.key === "ArrowDown")
        c.preventDefault(), A(
          (R) => R + 1 < W.length ? R + 1 : 0
        );
      else if (c.key === "ArrowUp")
        c.preventDefault(), A(
          (R) => R - 1 >= 0 ? R - 1 : W.length - 1
        );
      else if (c.key === "Enter") {
        c.preventDefault();
        const [R] = W[v] || [];
        if (R) {
          let I = E ? R : [...t.values[e.name], R];
          t.setFieldValue(e.name, I), it(I, e, o);
        }
      } else c.key === "Escape" && (N(""), b(!1));
  };
  pe(() => {
    S.current?.querySelector(
      `[data-index="${v}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [v]), pe(() => {
    v >= W.length && A(0);
  }, [W, v]), pe(() => {
    const c = e.autocomplete, E = e.ajaxchain;
    if (!c && !E) return;
    const R = t.values[e.name];
    if (!R) return;
    const I = Array.isArray(E) ? E : E ? [E] : [];
    (async () => {
      try {
        if (To(c)) {
          const P = c.src;
          if (!P || !r) return;
          let D;
          if ("type" in P && P.type === "api") {
            let L = e.name;
            typeof e.parameter == "string" && e.parameter && (L = e.parameter);
            const V = { [L]: R, refid: R };
            if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
              for (const [je, le] of Object.entries(e.parameter))
                V[je] = je === L ? R : t.values?.[le];
            const J = {
              method: P.method || "GET",
              url: r?.baseURL + P.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...P.method === "GET" ? { params: V } : { data: V }
            }, { data: X } = await U(J);
            D = Array.isArray(X?.data?.results?.options) ? X?.data?.results?.options[0] : Array.isArray(X?.data?.data) ? X.data.data[0] : Array.isArray(X?.data?.results) ? X.data.results[0] : Array.isArray(X?.data) ? X.data[0] : X?.data;
          } else {
            let L;
            if (!P.queryid) {
              if (!P.table || !P.columns)
                throw new Error("SQL query requires field.table");
              const J = he(P?.where ?? {}, {
                refid: R
              });
              L = {
                ...P,
                table: P.table,
                cols: P.columns,
                where: J
              };
            }
            const { data: V } = await qe(r, L, P?.queryid, R, o);
            D = Array.isArray(V?.data?.data) ? V.data.data[0] : Array.isArray(V?.data) ? V.data[0] : V?.data;
          }
          let F = me(D);
          F && c.target.split(",").map((L) => L.trim()).forEach((L) => {
            F[L] !== void 0 && t.setFieldValue(L, F[L]);
          });
        }
        for (const P of I) {
          const D = P.src;
          if (!P || typeof P != "object" || !D || typeof D != "object" || !r) continue;
          let F;
          if ("type" in D && D.type === "api") {
            let le = e.name;
            typeof e.parameter == "string" && e.parameter && (le = e.parameter);
            let Se = { [le]: R, refid: R };
            if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
              for (const [ze, ke] of Object.entries(e.parameter))
                Se[ze] = ze === le ? R : t.values?.[ke];
            const Ee = {
              method: D.method || "GET",
              url: r?.baseURL + D.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...D.method === "GET" ? { params: Se } : { data: Se }
            }, { data: Xe } = await U(Ee);
            F = Xe;
          } else {
            let le;
            if (!D.queryid) {
              if (!D.table || !D.columns)
                throw new Error("SQL query requires field.table");
              const Ee = he(D?.where ?? {}, {
                refid: R
              });
              le = {
                ...D,
                table: D.table,
                cols: D.columns,
                where: Ee
              };
            }
            const { data: Se } = await qe(r, le, D?.queryid, R, o);
            F = Se;
          }
          let L = e.valueKey ?? "value", V = e.labelKey ?? "title";
          const J = Array.isArray(F?.results?.options) ? F?.results?.options : Array.isArray(F.data) ? F.data : Array.isArray(F.results) ? F.results : F, X = Array.isArray(J) ? J.map(me) : [], je = Ne(
            L,
            V,
            X,
            e.groupKey
          );
          l?.(P.target, je);
        }
      } catch (P) {
        console.error("Autocomplete / AjaxChain fetch failed", P);
      }
    })();
  }, [t.values[e.name]]), pe(() => {
    if (!e.search || !g.trim() || !r) return;
    const c = jo(e.columns ?? ""), E = new AbortController(), R = setTimeout(async () => {
      try {
        let I;
        if (!e.queryid) {
          if (!e.table || !e.cols)
            throw new Error("SQL query requires field.table");
          const X = s ? he(e.where ?? {}, {
            refid: s
          }) : e.where;
          I = {
            ...e,
            table: e.table,
            cols: e.columns || e.cols,
            where: X
          };
        }
        let Y = {};
        Array.isArray(c) && c.forEach((X) => {
          Y[X] = [g, "LIKE"];
        });
        let P = e.valueKey ?? "value", D = e.labelKey ?? "title";
        const { data: F } = await qe(r, I, e?.queryid, void 0, o, Y), L = Array.isArray(F?.data?.data) ? F.data.data : Array.isArray(F?.data) ? F.data : F, V = Array.isArray(L) ? L.map(me) : [], J = Ne(
          P,
          D,
          V,
          e.groupKey
        );
        h(J);
      } catch (I) {
        if (U.isCancel(I)) return;
        console.error("Search fetch failed", I);
      }
    }, 500);
    return () => {
      clearTimeout(R), E.abort();
    };
  }, [g, s]);
  const ee = async (c) => {
    if (c.length === 0) {
      console.error("No file");
      return;
    }
    try {
      const E = await Qn(r, c), R = e.multiple ? E.map((I) => I.path) : E[0]?.path;
      t.setFieldValue(
        _,
        R
      ), it(R, e, o);
    } catch (E) {
      console.error("File upload failed", E), t.setFieldError(_, "File upload failed");
    }
  }, ne = async (c, E, R) => {
    const I = E[c];
    if (!I) return;
    const Y = n?.[I];
    if (typeof Y != "function") {
      console.error(`Method "${String(I)}" not found`);
      return;
    }
    try {
      await Promise.resolve(Y(R));
    } catch (P) {
      console.error(`Method "${String(I)}" failed`, P);
    }
  }, ve = (c) => {
    if (T) return;
    const E = c.target.value;
    N(E), A(0), E.trim() ? b(!0) : (b(!1), t.setFieldValue(_, ""));
  }, xe = (c) => {
    t.setFieldValue(_, c), it(c, e, o), N(""), b(!1), ne("onChange", e, `${_}-${c}`);
  };
  function De(c) {
    const E = c.currentTarget.files;
    E && ee(E);
  }
  return {
    setHighlightedIndex: A,
    executeFieldMethod: ne,
    handleFileUpload: ee,
    handleKeyDown: q,
    setSearch: N,
    setOpen: b,
    setIsFocused: d,
    handleInputChange: ve,
    handleSelect: xe,
    handlePersist: it,
    handleFileChange: De,
    optionCount: H,
    baseInputClasses: $,
    focusClasses: M,
    labelClasses: k,
    search: g,
    highlightedIndex: v,
    options: f,
    isDisabled: T,
    key: _,
    filteredOptions: W,
    open: w,
    listRef: S,
    isFocused: m,
    exactMatch: O,
    triggerRef: y
  };
}
function br({
  anchorRef: e,
  open: t,
  children: n,
  offset: r = 4,
  maxHeight: s = 240
}) {
  const [o, i] = oe({});
  return ls(() => {
    if (!t || !e.current) return;
    const l = e.current, m = () => {
      const f = l.getBoundingClientRect(), g = window.innerHeight - f.bottom, N = f.top, A = g < s && N > g ? f.top - Math.min(s, N) - r : f.bottom + r;
      i({
        position: "fixed",
        top: A,
        left: f.left,
        width: f.width,
        maxHeight: s,
        zIndex: 9999
      });
    };
    m();
    const d = requestAnimationFrame(m);
    return window.addEventListener("scroll", m, !0), window.addEventListener("resize", m), () => {
      cancelAnimationFrame(d), window.removeEventListener("scroll", m, !0), window.removeEventListener("resize", m);
    };
  }, [t, e, r, s]), t ? us(
    /* @__PURE__ */ a.jsx("div", { style: o, children: n }),
    document.body
  ) : null;
}
function hn({
  field: e,
  isDisabled: t,
  handleKeyDown: n,
  valueArray: r,
  labelClasses: s,
  listRef: o,
  search: i,
  filteredOptions: l,
  highlightedIndex: m,
  setSearch: d,
  formik: f,
  executeFieldMethod: h,
  handlePersist: g,
  module_refid: N,
  options: v,
  triggerRef: A,
  open: S,
  setOpen: y
}) {
  const w = e.name;
  return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ a.jsxs("label", { className: s, children: [
      e.label,
      e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: `
    relative w-full select-none border rounded-lg px-4 py-2.5 flex justify-between items-center
    ${t ? " opacity-70 bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 cursor-pointer"}
  `,
        tabIndex: 0,
        ref: A,
        onClick: () => {
          y((b) => !b);
        },
        onKeyDown: (b) => {
          t || n(b, !1);
        },
        onBlur: () => {
          e.multiple || setTimeout(() => {
            y(!1), d("");
          }, 150);
        },
        children: [
          /* @__PURE__ */ a.jsx("span", { className: "text-sm text-gray-700", children: r?.length > 0 ? r.map((b) => yr(v, b) ?? b).join(", ") : `Select ${e.label}` }),
          /* @__PURE__ */ a.jsx(
            "svg",
            {
              className: "w-4 h-4 text-gray-500",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ a.jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M19 9l-7 7-7-7"
                }
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ a.jsx(br, { anchorRef: A, open: S && !t, children: /* @__PURE__ */ a.jsxs("div", { ref: o, className: " w-full border border-gray-200 rounded-lg bg-white shadow-md  max-h-60 overflow-y-auto p-2", children: [
      e.search && /* @__PURE__ */ a.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ a.jsx(
        "input",
        {
          type: "text",
          value: i,
          onChange: (b) => {
            t || d(b.target.value);
          },
          placeholder: "Search...",
          className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
        }
      ) }),
      l.length > 0 ? l.map(([b, j], T) => /* @__PURE__ */ a.jsxs(
        "label",
        {
          htmlFor: `${w}-${b}`,
          className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${r?.includes(b) ? "bg-indigo-50 text-indigo-600 font-medium" : m === T ? "bg-gray-100" : "hover:bg-gray-50"}`,
          children: [
            /* @__PURE__ */ a.jsx(
              "input",
              {
                id: `${w}-${b}`,
                type: "checkbox",
                checked: r?.includes(b),
                onChange: (_) => {
                  const $ = _.target.checked ? [...r, b] : r?.filter((M) => M !== b);
                  f.setFieldValue(w, $), g($, e, N), h("onChange", e, `${w}-${b}`);
                },
                onBlur: f.handleBlur,
                disabled: t,
                className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              }
            ),
            j
          ]
        },
        b
      )) : /* @__PURE__ */ a.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
    ] }) }),
    f.touched[w] && f.errors[w] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(f.errors[w]) })
  ] });
}
function Go({
  formik: e,
  field: t,
  sqlOpsUrls: n,
  module_refid: r
}) {
  let s = t?.name;
  const o = Ke(null), i = async (m) => {
    const d = m.currentTarget.files;
    if (!(!d || d.length === 0))
      try {
        const f = await Qn(n, d), h = t.multiple ? f.map((g) => g.path) : f[0]?.path;
        e.setFieldValue(
          s,
          h
        ), it(h, t, r);
      } catch (f) {
        console.error("File upload failed", f), e.setFieldError(s, "File upload failed");
      }
  }, l = Array.isArray(e.values[s]) ? e.values[s] : e.values[s] ? [e.values[s]] : [];
  return /* @__PURE__ */ a.jsxs("div", { children: [
    /* @__PURE__ */ a.jsx(
      "input",
      {
        ref: o,
        type: "file",
        accept: "image/*",
        className: "hidden",
        onChange: i
      }
    ),
    /* @__PURE__ */ a.jsx(
      "div",
      {
        onClick: () => o.current?.click(),
        className: "flex flex-wrap gap-2",
        children: l.length > 0 ? l.map((m) => /* @__PURE__ */ a.jsx(Zn, { field_name: m, filePath: m, sqlOpsUrls: n })) : /* @__PURE__ */ a.jsx(
          "img",
          {
            src: "https://cdn-icons-png.flaticon.com/512/266/266033.png",
            alt: "avatar placeholder",
            className: "w-42 h-42 p-2 rounded-sm object-cover opacity-60"
          }
        )
      }
    )
  ] });
}
function Wo({
  field: e,
  formik: t,
  methods: n = {},
  sqlOpsUrls: r,
  refid: s,
  module_refid: o = "menuManager.main",
  optionsOverride: i,
  setFieldOptions: l
}) {
  const {
    setHighlightedIndex: m,
    executeFieldMethod: d,
    handleFileUpload: f,
    handleKeyDown: h,
    setSearch: g,
    setOpen: N,
    setIsFocused: v,
    handleInputChange: A,
    handleSelect: S,
    handlePersist: y,
    optionCount: w,
    baseInputClasses: b,
    focusClasses: j,
    labelClasses: T,
    search: _,
    highlightedIndex: $,
    options: M,
    isDisabled: k,
    key: p,
    filteredOptions: O,
    open: H,
    listRef: W,
    triggerRef: q,
    isFocused: ee,
    exactMatch: ne
  } = Ho({
    field: e,
    formik: t,
    methods: n,
    sqlOpsUrls: r,
    refid: s,
    module_refid: o,
    ...i && { optionsOverride: i },
    ...l && { setFieldOptions: l }
  }), ve = (xe) => xe.icon ? /* @__PURE__ */ a.jsx("i", { className: xe.icon }) : null;
  switch (e.type) {
    case "suggest":
    case "autosuggest":
    case "autocomplete": {
      const c = t.values[p] ?? "", E = _ !== "" ? _ : yr(M, c) ?? String(c ?? "");
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: T, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { ref: q, children: /* @__PURE__ */ a.jsx(
          "input",
          {
            className: `${b} ${j}`,
            value: E,
            placeholder: e.placeholder || "Type to search...",
            onChange: A,
            onBlur: () => {
              setTimeout(() => N(!1), 150);
            },
            onKeyDown: (R) => {
              if (R.key === "Enter") {
                if (R.preventDefault(), ne) {
                  const [I] = ne;
                  t.setFieldValue(p, I), y(I, e, o);
                } else _.trim() && (t.setFieldValue(p, _.trim()), y(_.trim(), e, o));
                N(!1);
                return;
              }
              h(R, !0);
            },
            disabled: k
          }
        ) }),
        /* @__PURE__ */ a.jsx(br, { anchorRef: q, open: H && !k, children: /* @__PURE__ */ a.jsx(
          "div",
          {
            ref: W,
            className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1",
            children: O.length > 0 && ne ? O.map(([R, I], Y) => /* @__PURE__ */ a.jsx(
              "div",
              {
                id: `${p}-${R}`,
                "data-index": Y,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${$ === Y ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => S(R),
                children: I
              },
              R
            )) : /* @__PURE__ */ a.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `Press "ENTER" to ADD "${E}" ` })
          }
        ) }),
        t.touched[p] && t.errors[p] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[p]) })
      ] });
    }
    case "dataSelector":
    case "dataSelectorFromTable":
    case "dataSelectorFromUniques":
    case "dataMethod": {
      if (e.multiple === !0) {
        const c = t.values[p];
        return /* @__PURE__ */ a.jsx(
          hn,
          {
            field: e,
            isDisabled: k,
            handleKeyDown: h,
            valueArray: c,
            labelClasses: T,
            listRef: W,
            search: _,
            filteredOptions: O,
            highlightedIndex: $,
            setSearch: g,
            formik: t,
            executeFieldMethod: d,
            handlePersist: y,
            module_refid: o,
            options: M,
            triggerRef: q,
            open: H,
            setOpen: N
          }
        );
      }
      return console.log("open", H, p), /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: T, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: `
    relative w-full select-none border rounded-lg px-4 py-2.5 flex justify-between items-center
    ${k ? "opacity-70 bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 cursor-pointer"}
  `,
            ref: q,
            tabIndex: 0,
            onClick: () => {
              N((c) => !c), m(0);
            },
            onKeyDown: (c) => {
              k || h(c, !0);
            },
            children: [
              /* @__PURE__ */ a.jsx("span", { className: "text-sm text-gray-700", children: t.values[p] ? yr(M, t.values[p]) ?? "Select option" : `Select ${e.label}` }),
              /* @__PURE__ */ a.jsx(
                "svg",
                {
                  className: "w-4 h-4 text-gray-500",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ a.jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M19 9l-7 7-7-7"
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ a.jsx(br, { anchorRef: q, open: H, children: /* @__PURE__ */ a.jsxs(
          "div",
          {
            ref: W,
            className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2",
            children: [
              e.search && /* @__PURE__ */ a.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ a.jsx(
                "input",
                {
                  type: "text",
                  value: _,
                  onChange: (c) => {
                    g(c.target.value), m(0);
                  },
                  onKeyDown: (c) => h(c, !0),
                  placeholder: "Search...",
                  className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
                }
              ) }),
              O.length > 0 && /* @__PURE__ */ a.jsx(
                "div",
                {
                  onClick: (c) => {
                    c.preventDefault(), c.stopPropagation(), t.setFieldValue(p, ""), N(!1), y("", e, o), g("");
                  },
                  className: "px-2 py-1 hover:bg-gray-50 text-gray-500 rounded cursor-pointer text-sm hover:bg-gray-50",
                  children: "Clear selection"
                }
              ),
              O.length > 0 ? O.map(([c, E], R) => /* @__PURE__ */ a.jsx(
                "div",
                {
                  id: `${p}-${c}`,
                  "data-index": R,
                  onClick: (I) => {
                    I.preventDefault(), I.stopPropagation(), t.setFieldValue(p, c), y(c, e, o), N(!1), g(""), m(0), d("onChange", e, `${p}-${c}`);
                  },
                  className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${t.values[p] === c ? "bg-indigo-50 text-indigo-600 font-medium" : $ === R ? "bg-gray-100" : "hover:bg-gray-50"}`,
                  children: E
                },
                c
              )) : /* @__PURE__ */ a.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
            ]
          }
        ) }),
        t.touched[p] && t.errors[p] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[p]) })
      ] });
    }
    case "textarea":
      return /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: T, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ a.jsx(
            "textarea",
            {
              id: p,
              className: `${b} ${j} min-h-[120px] resize-none`,
              onFocus: () => v(!0),
              name: p,
              value: t.values[p],
              onBlur: t.handleBlur,
              onChange: (c) => {
                t.setFieldValue(p, c.target.value), y(c.target.value, e, o), d("onChange", e, `${p}`);
              },
              placeholder: e.placeholder,
              disabled: k
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${ee ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[p] && t.errors[p] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[p]) })
      ] }) });
    case "select":
      if (e.multiple === !0) {
        const c = t.values[p];
        return /* @__PURE__ */ a.jsx(
          hn,
          {
            field: e,
            isDisabled: k,
            handleKeyDown: h,
            valueArray: c,
            labelClasses: T,
            listRef: W,
            search: _,
            filteredOptions: O,
            highlightedIndex: $,
            setSearch: g,
            formik: t,
            executeFieldMethod: d,
            handlePersist: y,
            module_refid: o,
            options: M,
            triggerRef: q,
            open: H,
            setOpen: N
          }
        );
      }
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: T, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ a.jsxs(
            "select",
            {
              className: `${b} ${j} appearance-none ${k ? "" : "cursor-pointer"} pr-12`,
              onFocus: () => v(!0),
              name: p,
              id: p,
              value: t.values[p],
              onBlur: t.handleBlur,
              onChange: (c) => {
                t.setFieldValue(p, c.target.value), y(c.target.value, e, o), d("onChange", e, `${p}`);
              },
              disabled: k,
              children: [
                e?.["no-option"] !== "false" && !t.values[p] && /* @__PURE__ */ a.jsx("option", { value: "", disabled: !0, children: e?.["no-option"] || `Please select ${e.label}` }),
                /* @__PURE__ */ a.jsx("option", { value: "", className: "text-gray-500", children: "Clear Selection" }),
                !Pt(M) && Object.entries(M).map(([c, E]) => /* @__PURE__ */ a.jsx("option", { value: c, className: "py-2", children: E }, c)),
                Pt(M) && Object.entries(M).map(([c, E]) => /* @__PURE__ */ a.jsx("optgroup", { label: c, children: Object.entries(E).map(([R, I]) => /* @__PURE__ */ a.jsx("option", { value: R, children: I }, R)) }, c))
              ]
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: "absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none", children: /* @__PURE__ */ a.jsx(
            "svg",
            {
              className: "w-5 h-5 transition-colors duration-300 text-gray-400",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
            }
          ) })
        ] }),
        t.touched[p] && t.errors[p] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[p]) })
      ] });
    case "radioList":
    case "radio":
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: T, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: `flex ${w > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(M || {}).map(([c, E]) => /* @__PURE__ */ a.jsxs(
          "label",
          {
            htmlFor: `${p}-${c}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  id: `${p}-${c}`,
                  type: "radio",
                  name: p,
                  checked: t.values[p] === c,
                  value: c,
                  onChange: (R) => {
                    t.setFieldValue(p, R.target.value), y(R.target.value, e, o), d("onChange", e, `${p}-${c}`);
                  },
                  onBlur: t.handleBlur,
                  disabled: k,
                  className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${k ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                }
              ),
              E
            ]
          },
          c
        )) }),
        t.touched[p] && t.errors[p] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[p]) })
      ] });
    case "checkbox": {
      const c = e.multiple === !0, E = t.values[p];
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: T, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(M || {}).map(([R, I]) => {
          const Y = c ? Array.isArray(E) && E.includes(R) : E === R;
          return /* @__PURE__ */ a.jsxs(
            "label",
            {
              className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
              children: [
                /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    id: `${p}-${R}`,
                    type: "checkbox",
                    checked: Y,
                    onChange: (P) => {
                      let D;
                      if (c) {
                        const F = Array.isArray(E) ? E : [];
                        D = P.target.checked ? [...F, R] : F.filter((L) => L !== R);
                      } else
                        D = P.target.checked ? R : "false";
                      t.setFieldValue(p, D), y(D, e, o), d("onChange", e, `${p}-${R}`);
                    },
                    onBlur: t.handleBlur,
                    disabled: k,
                    className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${k ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                  }
                ),
                I
              ]
            },
            R
          );
        }) }),
        t.touched[p] && t.errors[p] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[p]) })
      ] });
    }
    case "tags": {
      const c = t.values[p], E = _.trim(), R = Array.isArray(M) ? M : Object.entries(M || {}).map(([D, F]) => ({ value: D, label: F })), I = (D) => {
        if (!k && D && !c.includes(D)) {
          let F = [...c, D];
          t.setFieldValue(p, F), y(F, e, o), g("");
        }
      }, Y = (D) => {
        let F = c.filter((L) => L !== D);
        t.setFieldValue(
          p,
          F
        ), y(F, e, o);
      }, P = (D) => R.find((F) => F.value === D)?.label ?? D;
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: T, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: `${b} 
            flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center
            ${k ? "pointer-events-none opacity-70" : ""}
            `,
            onClick: () => !k && document.getElementById(`${p}-input`)?.focus(),
            children: [
              c.map((D) => /* @__PURE__ */ a.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ a.jsx("span", { className: "text-indigo-700", children: P(D) }),
                    /* @__PURE__ */ a.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (F) => {
                          F.stopPropagation(), k || Y(D);
                        },
                        onMouseDown: (F) => F.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                D
              )),
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  id: `${p}-input`,
                  type: "text",
                  value: _,
                  onChange: (D) => g(D.target.value),
                  onKeyDown: (D) => {
                    (D.key === "Enter" || D.key === ",") && (D.preventDefault(), I(E));
                  },
                  placeholder: c.length === 0 ? e.placeholder || "Type and press Enter" : "",
                  className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                  disabled: k
                }
              )
            ]
          }
        ),
        t.touched[p] && t.errors[p] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[p]) })
      ] });
    }
    case "photo":
    case "avatar":
      return /* @__PURE__ */ a.jsx(
        Go,
        {
          formik: t,
          field: e,
          sqlOpsUrls: r,
          module_refid: o
        }
      );
    case "attachment":
    case "file":
      const xe = e.multiple === !0, De = Array.isArray(t.values[p]) ? t.values[p] : t.values[p] ? [t.values[p]] : [];
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: T, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative mb-1", children: [
          e.icon && /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: ve(e) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: p,
              type: "file",
              className: `${b} ${j} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => v(!0),
              name: p,
              multiple: xe,
              onChange: (c) => {
                const E = c.currentTarget.files;
                E && f(E), d("onChange", e, p);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: k
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${ee ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "flex flex-wrap gap-2", children: De.map((c) => {
          const E = c?.split("/").pop();
          return /* @__PURE__ */ a.jsx(Jn, { sqlOpsUrls: r, filePath: c }, E);
        }) }),
        t.touched[p] && t.errors[p] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[p]) })
      ] });
    case "json":
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: T, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ a.jsx(
            "textarea",
            {
              id: p,
              name: p,
              value: t.values[p],
              onChange: (c) => {
                t.setFieldValue(p, c.target.value), y(c.target.value, e, o), d("onChange", e, `${p}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: k,
              className: `${b} ${j} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${ee ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        t.touched[p] && t.errors[p] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[p]) })
      ] });
    case "date":
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: T, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: "relative",
            children: [
              /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 right-3 top-1/2 -translate-y-1/2 pointer-events-none", children: /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-calendar" }) }),
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  id: p,
                  type: "date",
                  name: p,
                  min: e.min,
                  max: e.max,
                  value: t.values[p] ?? "",
                  onChange: (c) => {
                    t.setFieldValue(p, c.target.value), y(c.target.value, e, o), d("onChange", e, `${p}`);
                  },
                  onBlur: t.handleBlur,
                  placeholder: e.placeholder,
                  disabled: k,
                  className: `${b} ${j} ${e.icon ? "pl-9" : ""}`
                }
              ),
              /* @__PURE__ */ a.jsx(
                "div",
                {
                  className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${ee ? "opacity-20" : ""}`,
                  style: { zIndex: -1, filter: "blur(8px)" }
                }
              )
            ]
          }
        ),
        t.touched[p] && t.errors[p] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[p]) })
      ] });
    case "number":
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: T, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: ve(e) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: p,
              type: "number",
              className: `${b} ${j} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => v(!0),
              name: p,
              value: t.values[p],
              onBlur: t.handleBlur,
              onChange: (c) => {
                t.setFieldValue(p, c.target.value), y(c.target.value, e, o), d("onChange", e, `${p}`);
              },
              step: e.step,
              placeholder: e.placeholder,
              disabled: k,
              min: e.min,
              max: e.max
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${ee ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[p] && t.errors[p] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[p]) })
      ] });
    default:
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: T, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: ve(e) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: p,
              type: e.type || "text",
              className: `${b} ${j} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => v(!0),
              name: p,
              value: t.values[p],
              onBlur: t.handleBlur,
              onChange: (c) => {
                t.setFieldValue(p, c.target.value), y(c.target.value, e, o), d("onChange", e, `${p}`);
              },
              step: e.step,
              placeholder: e.placeholder,
              disabled: k,
              minLength: e.minlength,
              maxLength: e.maxlength
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${ee ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[p] && t.errors[p] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[p]) })
      ] });
  }
}
function qo({
  title: e,
  fields: t,
  data: n,
  onSubmit: r = (d) => {
  },
  onCancel: s = () => {
  },
  methods: o = {},
  sqlOpsUrls: i,
  refid: l,
  module_refid: m
}) {
  const d = Eo(t, i?.operation), [f, h] = Z.useState({}), g = (y, w) => {
    h((b) => ({
      ...b,
      [y]: w
    }));
  }, { initialValues: N, validationSchema: v } = Z.useMemo(() => {
    const y = {}, w = {};
    return d.forEach((b) => {
      No([b], y, w, n);
    }), {
      initialValues: y,
      validationSchema: w
    };
  }, [d, n]), A = cs({
    initialValues: N,
    enableReinitialize: !0,
    validationSchema: be.object().shape(v),
    onSubmit: (y) => {
      r(y), A.resetForm();
    }
  });
  function S(y) {
    y.preventDefault(), A.resetForm();
  }
  return /* @__PURE__ */ a.jsx("div", { className: "relative  max-w-full ", children: /* @__PURE__ */ a.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ a.jsxs("form", { onSubmit: A.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "grid grid-flow-col auto-cols-max gap-4  overflow-x-auto", children: [
      d.map((y, w) => Ao(y.hidden) || y.type === "geolocation" || y.vmode === "edit" && i?.operation === "create" ? null : /* @__PURE__ */ a.jsx(
        "div",
        {
          children: /* @__PURE__ */ a.jsx(
            Wo,
            {
              refid: l,
              module_refid: m,
              sqlOpsUrls: i,
              field: y,
              formik: A,
              methods: o,
              setFieldOptions: g,
              ...f[y.name] ? { optionsOverride: f[y.name] } : {}
            }
          )
        },
        y?.name ?? `field-${w}`
      )),
      /* @__PURE__ */ a.jsxs("div", { className: "", children: [
        /* @__PURE__ */ a.jsx("div", { children: "  " }),
        /* @__PURE__ */ a.jsx("button", { onClick: S, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Reset" }),
        Object.keys(A.errors).length > 0 && /* @__PURE__ */ a.jsx("div", { children: "  " })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "", children: [
        /* @__PURE__ */ a.jsx("div", { children: "  " }),
        /* @__PURE__ */ a.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" }),
        Object.keys(A.errors).length > 0 && /* @__PURE__ */ a.jsx("div", { children: "  " })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "mt-8 flex justify-between space-x-3", children: /* @__PURE__ */ a.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }) })
  ] }) }) });
}
function Ko({
  formJson: e,
  methods: t = {},
  onCancel: n = () => {
  },
  components: r = {},
  callback: s = () => {
  },
  initialvalues: o = {},
  setEditData: i,
  module_refid: l,
  toast: m
}) {
  const d = e.endPoints, f = e?.source?.refid, [h, g] = Z.useState(o), N = Z.useMemo(() => wo(e.fields), [e.fields]);
  Z.useEffect(() => {
    g(o ?? {});
  }, [o]);
  const v = Z.useCallback(
    (y) => {
      y && Object.keys(y).length > 0 && g(y);
    },
    []
  );
  Z.useEffect(() => {
    let y = !0;
    return (async () => {
      const b = e?.source ?? {};
      if (b?.type) {
        if (b.type === "method" && d?.operation !== "create") {
          const j = b.method, T = j ? t[j] : void 0;
          if (T)
            try {
              const _ = await T();
              y && v(_);
            } catch (_) {
              console.error("Method execution failed:", _);
            }
        }
        if (b.type === "api" && d?.operation !== "create")
          try {
            const j = {
              method: b.method || "GET",
              url: d?.baseURL + b.endpoint,
              headers: {
                Authorization: `Bearer ${d?.accessToken}`
              },
              ...b.method === "GET" ? { params: { refid: b.refid } } : { data: { refid: b.refid } }
            }, T = await U(j);
            y && v(T.data);
          } catch (j) {
            console.error("API fetch failed:", j);
          }
        if (b.type === "sql" && b.refid && b.refid !== "0" && d?.operation !== "create" || d?.operation !== "create" && b.dbopsid) {
          if (!d) {
            console.error("SQL source requires formJson.endPoints but it is missing");
            return;
          }
          try {
            const j = await Mo.fetch(d, {
              source: {
                ...b,
                table: b.table,
                columns: b.columns,
                where: he(b.where, {
                  refid: f
                })
              },
              fields: It(e.fields, d.operation)
            }, b?.dbopsid, l);
            y && v(j);
          } catch (j) {
            console.error("API fetch failed:", j);
          }
        }
      }
    })(), () => {
      y = !1;
    };
  }, [
    d,
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.url || "",
    JSON.stringify(e?.source?.params ?? {}),
    JSON.stringify(e?.source?.body ?? {}),
    JSON.stringify(e?.source?.headers ?? {})
  ]);
  const A = async (y) => {
    const w = e?.source ?? {};
    let b = null;
    if (N.length > 0)
      try {
        b = await vo();
      } catch {
        m?.error?.(" Geolocation error"), b = null;
      }
    const j = {
      ...y,
      ...Object.fromEntries(
        N.map((T) => [T, b])
      )
    };
    if (w.type === "method") {
      const T = w.method, _ = T ? t[T] : void 0;
      if (_)
        try {
          const $ = await _(j);
          i?.(null), s?.($), m?.success?.(ar($));
        } catch ($) {
          s?.($), m?.error?.(sr($)), console.error("Method execution failed:", $);
        }
    }
    if (w.type === "api") {
      if (!d) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const T = await U({
          method: w.method || "POST",
          url: d.baseURL + w.endpoint,
          data: j ?? {},
          headers: {
            Authorization: `Bearer ${d?.accessToken}`
          }
        });
        i?.(null), s?.(T), m?.success?.(ar(T));
      } catch (T) {
        s?.(T), m?.error?.(sr(T)), console.error("API fetch failed:", T);
      }
    }
    if (w.type === "sql") {
      const T = e.endPoints;
      if (!T) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let _ = !1, $;
        w?.dbopsid && (_ = !0, $ = w?.dbopsid);
        const M = await U({
          method: "GET",
          url: T.baseURL + T.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${T?.accessToken}`
          }
        });
        if (!_) {
          let O = {
            ...w
          };
          w.where && (O = {
            ...w,
            where: he(w.where, {
              refid: f
            })
          }), $ = (await U({
            method: "POST",
            url: T.baseURL + T.dbopsGetRefId,
            data: {
              operation: T.operation,
              source: O,
              fields: It(e.fields, T.operation),
              forcefill: e.forcefill,
              datahash: M.data.refhash,
              scrid: l
            },
            headers: {
              Authorization: `Bearer ${T?.accessToken}`
            }
          }))?.data.refid;
        }
        let k = {
          refid: $,
          fields: j,
          datahash: M.data.refhash,
          refid1: T.refid
        };
        w?.refid && (k.refid1 = w?.refid);
        const p = await U({
          method: "POST",
          url: T.baseURL + T[T.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: k,
          headers: {
            Authorization: `Bearer ${T?.accessToken}`
          }
        });
        m?.success?.(ar(p)), i?.(null), s?.(p);
      } catch (_) {
        s?.(_), m?.error?.(sr(_)), console.error("API fetch failed:", _);
      }
    }
  }, S = {
    simple: /* @__PURE__ */ a.jsx(
      qo,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: h,
        onSubmit: A,
        onCancel: n,
        methods: t,
        components: r,
        sqlOpsUrls: d,
        refid: f,
        module_refid: l
      }
    )
  };
  return /* @__PURE__ */ a.jsx("div", { className: "relative", children: S.simple });
}
function Ar({ tabObj: e, methods: t, tabName: n, sqlOpsUrls: r, refid: s, Reports: o, toast: i, handleAction: l, infoViewJson: m }) {
  const [d, f] = oe(!1), [h, g] = oe(null), [N, v] = Z.useState(0), [A, S] = Z.useState(null), y = e?.config, w = e?.config, b = w?.["popup.form"] ? "popup.form" : (w?.form, "form"), j = w?.[b] && Object.keys(w?.[b]).length > 0, T = (p) => {
    let O = me(p.data);
    S(O);
  }, _ = (p) => {
    S(p), v((O) => O + 1);
  }, $ = (p) => {
    let O = me(p.data);
    g(O), f(!0);
  }, M = async () => {
    if (h?.id) {
      if (!r) {
        window.alert("Delete configuration missing.");
        return;
      }
      try {
        let p = e?.config;
        const O = p?.["popup.form"] ? "popup.form" : (p?.form, "form"), H = p?.[O];
        if (!H?.source) throw new Error("Form source missing");
        let W = !1, q;
        H?.source?.dbopsid && (W = !0, q = H?.source?.dbopsid);
        const ee = await U({
          method: "GET",
          url: r.baseURL + r.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${r.accessToken}`
          }
        });
        if (!W) {
          let ne = { ...H.source, refid: h.id };
          H.source.where && (ne = {
            ...ne,
            where: he(H.source.where, {
              refid: h?.id
            })
          }), q = (await U({
            method: "POST",
            url: r.baseURL + r.dbopsGetRefId,
            data: {
              operation: "update",
              source: ne,
              fields: H.fields,
              forcefill: H.forcefill,
              datahash: ee.data.refhash,
              scrid: m?.module_refid
            },
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            }
          }))?.data.refid;
        }
        await U({
          method: "POST",
          url: r.baseURL + r.dbopsUpdate,
          data: {
            refid: q,
            fields: { blocked: "true" },
            datahash: ee.data.refhash,
            refid1: h?.id
          },
          headers: {
            Authorization: `Bearer ${r.accessToken}`
          }
        }), window.alert("Record deleted successfully."), v((ne) => ne + 1);
      } catch (p) {
        console.error(p), window.alert("Failed to delete record. Please try again");
      } finally {
        g(null), f(!1);
      }
    }
  }, k = () => {
    g(null), f(!1);
  };
  return /* @__PURE__ */ a.jsx(a.Fragment, { children: o ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      o,
      {
        methods: { ...t, deleteRecord: $, editRecord: T },
        report: {
          ...y,
          source: {
            table: y?.table,
            type: "sql",
            cols: y?.cols,
            where: y?.where,
            orderby: y?.orderby,
            queryid: y?.queryid
          },
          endPoints: r,
          actions: { ...y?.actions, ...m?.buttons, ...m.actions },
          datagrid: y?.datagrid,
          buttons: y?.buttons,
          refresh: N
        },
        onButtonClick: l
      }
    ),
    j && /* @__PURE__ */ a.jsx(
      Ko,
      {
        formJson: {
          ...w[b],
          source: {
            ...w?.[b].source,
            refid: A?.id
          },
          endPoints: {
            ...r,
            operation: A ? "update" : "create"
          }
        },
        toast: i,
        methods: t,
        initialvalues: A ?? {},
        setEditData: _,
        module_refid: m?.module_refid
      }
    ),
    /* @__PURE__ */ a.jsx(
      Uo,
      {
        open: d,
        onConfirm: M,
        onCancel: k
      }
    )
  ] }) : /* @__PURE__ */ a.jsx("p", { children: "No report found" }) });
}
function Nr(e, t) {
  if (!e || !t) return null;
  const n = t[e];
  if (Z.isValidElement(n))
    return n;
  if (typeof n == "function") {
    const r = n;
    return /* @__PURE__ */ a.jsx(r, {});
  }
  return null;
}
const gn = ({ groups: e, groupNames: t, setActiveTabIndex: n, activeTabIndex: r }) => /* @__PURE__ */ a.jsx(
  "nav",
  {
    className: "flex flex-col overflow-y-auto h-full px-2 py-1 space-y-1",
    children: t.length > 0 ? t.map((s, o) => /* @__PURE__ */ a.jsx(
      "button",
      {
        type: "button",
        onClick: () => n(o),
        className: `cursor-pointer w-full text-left py-2 px-3 rounded-md text-sm font-semibold transition-all duration-200 ${r === o ? "bg-white shadow text-action" : "text-gray-600 hover:bg-white/50"}`,
        children: /* @__PURE__ */ a.jsx("span", { className: "truncate", children: e[s]?.label || s })
      },
      s
    )) : /* @__PURE__ */ a.jsx("div", { className: "py-3 px-2 text-sm text-gray-500", children: "No group available" })
  }
), Vo = ({
  groups: e,
  groupNames: t,
  setActiveTabIndex: n,
  activeTabIndex: r,
  layoutConfig: s,
  showScrollHint: o,
  isCommonInfo: i,
  tabsNavRef: l
}) => {
  const [m, d] = oe(!1), f = Ke(null);
  return pe(() => {
    const h = (g) => {
      f.current && !f.current.contains(g.target) && d(!1);
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, []), /* @__PURE__ */ a.jsxs("div", { className: s?.tabNavClass || "relative z-10", children: [
    o && /* @__PURE__ */ a.jsx("div", { className: "absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 flex items-center justify-center", children: /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => l.current?.scrollBy({ left: -200, behavior: "smooth" }),
        className: "w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group",
        children: /* @__PURE__ */ a.jsx("svg", { className: "w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
      }
    ) }),
    /* @__PURE__ */ a.jsxs("div", { className: "absolute right-0 top-1/2 -translate-y-1/2 z-20 w-18 flex items-center justify-between pr-1", children: [
      o && /* @__PURE__ */ a.jsx(
        "button",
        {
          onClick: () => l.current?.scrollBy({ left: 200, behavior: "smooth" }),
          className: "w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group",
          children: /* @__PURE__ */ a.jsx("svg", { className: "w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
        }
      ),
      /* @__PURE__ */ a.jsxs("div", { className: "relative", ref: f, children: [
        /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => d(!m),
            className: "ml-1 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200",
            children: "⋮"
          }
        ),
        m && /* @__PURE__ */ a.jsx("div", { className: "absolute right-0 mt-2 w-48 max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-30", children: t.map((h, g) => /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              n(g), d(!1);
            },
            className: `w-full text-left px-3 py-2 text-sm truncate hover:bg-gray-100 ${r === g ? "bg-gray-50 font-semibold text-action" : "text-gray-700"}`,
            children: e[h]?.label || h
          },
          h
        )) })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: `relative bg-gray-100 ${i ? "" : "rounded-t-lg"} px-1 pt-1 shadow-inner overflow-hidden`, children: /* @__PURE__ */ a.jsx(
      "nav",
      {
        ref: l,
        className: "relative flex overflow-x-auto scrollbar-hide scroll-smooth",
        style: {
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        },
        children: t.length > 0 ? t.map((h, g) => /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            onClick: () => n(g),
            className: `relative cursor-pointer flex-shrink-0
            min-w-[8rem]   
            py-2 px-8
            rounded-t-lg text-xs sm:text-sm font-semibold
            transition-all duration-300 ease-out
            focus:outline-none whitespace-nowrap
            ${r === g ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
            children: /* @__PURE__ */ a.jsx("span", { className: "relative z-10 flex items-center justify-center gap-1 sm:gap-2", children: /* @__PURE__ */ a.jsx("span", { className: "truncate", children: e[h]?.label || h }) })
          },
          h
        )) : /* @__PURE__ */ a.jsx("div", { className: "py-3 px-6 text-sm text-gray-500", children: "No group available" })
      }
    ) })
  ] });
}, yn = ({
  groupNames: e,
  activeTabIndex: t,
  layoutConfig: n,
  tabObj: r,
  infoData: s,
  setActiveTabIndex: o,
  renderView: i,
  methods: l = {},
  refid: m,
  sqlOpsUrls: d,
  module_refid: f,
  fieldOptions: h,
  setFieldOptions: g,
  buttons: N,
  handleAction: v,
  components: A
}) => {
  let S = N ? Object.entries(N).filter(([b, j]) => j.groups ? j.groups.includes(e[t]) : !0) : [];
  async function y(b, j) {
    const T = l?.[b];
    if (T) {
      try {
        await T();
      } catch (_) {
        console.error("Method execution failed:", _);
      }
      return;
    }
    v?.({ [b]: j }, s);
  }
  const w = Nr(r?.component, A);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "bg-white rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex-1 flex flex-col min-h-0",
      children: [
        e.length > 0 ? r?.type === "fields" && r?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: n?.fieldGridClass || "grid grid-cols-12 gap-2", children: r.fields.map((b, j) => /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${mt[ht(b.width)] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ a.jsx(
              gt,
              {
                field: b,
                data: s ?? {},
                methods: l,
                refid: m,
                sqlOpsUrls: d,
                module_refid: f,
                setFieldOptions: g,
                ...h[b.name] ? { optionsOverride: h[b.name] } : {}
              }
            )
          },
          b?.name ?? `field-${j}`
        )) }) }) : r?.type === "component" && w ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: w }) : r ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: i(r, e[t] || "") }) : null : /* @__PURE__ */ a.jsx("div", { className: "flex-1 col-span-full text-center py-8 text-gray-500", children: "No data available" }),
        /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: S && S.map(([b, j]) => /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => y(b, j),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: j.label
          },
          b
        )) }),
        e.length > 5 && /* @__PURE__ */ a.jsxs("div", { className: "mt-2 pt-2 border-t border-gray-100 flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-500", children: [
            /* @__PURE__ */ a.jsxs("span", { children: [
              "Tab ",
              t + 1,
              " of ",
              e.length
            ] }),
            /* @__PURE__ */ a.jsxs("div", { className: "flex gap-1", children: [
              e.slice(0, 5).map((b, j) => /* @__PURE__ */ a.jsx(
                "div",
                {
                  className: `w-2 h-2 rounded-full transition-all duration-300 ${j === t ? "bg-action w-6" : "bg-gray-300"}`
                },
                j
              )),
              e.length > 5 && /* @__PURE__ */ a.jsxs("span", { className: "text-xs text-gray-400 ml-1", children: [
                "+",
                e.length - 5
              ] })
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "hidden sm:flex gap-2", children: [
            /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: () => o(Math.max(0, t - 1)),
                disabled: t === 0,
                className: "px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                children: "Previous"
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: () => o(Math.min(e.length - 1, t + 1)),
                disabled: t === e.length - 1,
                className: "px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                children: "Next"
              }
            )
          ] })
        ] }),
        e.length <= 5 && /* @__PURE__ */ a.jsx("div", { className: "mt-6 pt-3 border-t border-gray-100", children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
          /* @__PURE__ */ a.jsxs("span", { children: [
            "Tab ",
            t + 1,
            " of ",
            e.length
          ] }),
          /* @__PURE__ */ a.jsx("div", { className: "flex gap-1", children: e.map((b, j) => /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `w-2 h-2 rounded-full transition-all duration-300 ${j === t ? "bg-action w-6" : "bg-gray-300"}`
            },
            j
          )) })
        ] }) })
      ]
    },
    e[t]
  );
};
function bn({
  groups: e,
  methods: t = {},
  infoData: n,
  viewRenderers: r = {},
  isCommonInfo: s,
  layoutConfig: o = {},
  viewMode: i,
  sqlOpsUrls: l,
  refid: m,
  Reports: d,
  toast: f,
  handleAction: h = () => {
  },
  infoViewJson: g,
  fieldOptions: N,
  setFieldOptions: v,
  components: A
}) {
  const [S, y] = oe(0), [w, b] = oe(!1), j = Ke(null), T = Object.keys(e);
  pe(() => {
    const W = () => {
      if (j.current) {
        const q = j.current;
        b(q.scrollWidth > q.clientWidth);
      }
    };
    return W(), window.addEventListener("resize", W), () => window.removeEventListener("resize", W);
  }, [T.length]), pe(() => {
    if (j.current && T.length > 0) {
      const W = j.current.children[S];
      W && W.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [S, T.length]);
  const _ = i === "tableft", $ = i === "tabright", M = !_ && !$, k = e[T[S] ?? ""] || null, p = {
    single: (W, q) => /* @__PURE__ */ a.jsx(Er, { fieldOptions: N, setFieldOptions: v, module_refid: g.module_refid, tabObj: W, methods: t, tabName: q, sqlOpsUrls: l, refid: m }),
    grid: (W, q) => /* @__PURE__ */ a.jsx(
      Ar,
      {
        ...d ? { Reports: d } : {},
        toast: f,
        handleAction: h,
        tabObj: W,
        methods: t,
        tabName: q,
        sqlOpsUrls: l,
        refid: m,
        infoViewJson: g
      }
    )
  }, O = k?.config?.uimode, H = r[O] || p[O] || (() => /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No UI mode for this type" }));
  return M ? /* @__PURE__ */ a.jsxs("div", { className: "flex-1 flex flex-col min-h-0 ", children: [
    /* @__PURE__ */ a.jsx(
      Vo,
      {
        groupNames: T,
        groups: e,
        setActiveTabIndex: y,
        activeTabIndex: S,
        tabsNavRef: j,
        isCommonInfo: s,
        showScrollHint: w,
        layoutConfig: o
      }
    ),
    /* @__PURE__ */ a.jsx(
      yn,
      {
        groupNames: T,
        activeTabIndex: S,
        layoutConfig: o,
        tabObj: k,
        infoData: n,
        setActiveTabIndex: y,
        renderView: H,
        groups: e,
        methods: t,
        refid: m,
        sqlOpsUrls: l,
        module_refid: g.module_refid,
        fieldOptions: N,
        setFieldOptions: v,
        buttons: g.buttons,
        handleAction: h,
        ...A ? { components: A } : {}
      }
    )
  ] }) : /* @__PURE__ */ a.jsxs("div", { className: "flex-1 flex min-h-0", children: [
    _ && /* @__PURE__ */ a.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ a.jsx(
      gn,
      {
        groupNames: T,
        groups: e,
        setActiveTabIndex: y,
        activeTabIndex: S
      }
    ) }),
    /* @__PURE__ */ a.jsx("main", { className: "flex-1 flex flex-col min-h-0 overflow-auto", children: /* @__PURE__ */ a.jsx(
      yn,
      {
        groupNames: T,
        activeTabIndex: S,
        layoutConfig: o,
        tabObj: k,
        infoData: n,
        setActiveTabIndex: y,
        renderView: H,
        groups: e,
        methods: t,
        refid: m,
        module_refid: g.module_refid,
        sqlOpsUrls: l,
        fieldOptions: N,
        setFieldOptions: v,
        handleAction: h,
        ...A ? { components: A } : {}
      }
    ) }),
    $ && /* @__PURE__ */ a.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ a.jsx(
      gn,
      {
        groupNames: T,
        groups: e,
        setActiveTabIndex: y,
        activeTabIndex: S
      }
    ) })
  ] });
}
function Yo({ title: e, children: t, isFirst: n }) {
  const [r, s] = oe(n);
  return /* @__PURE__ */ a.jsx("div", { className: "group relative mt-1 flex-1 flex flex-col min-h-0 max-h-screen", children: /* @__PURE__ */ a.jsxs("div", { className: "flex-1 flex flex-col min-h-0 relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ a.jsxs(
      "button",
      {
        onClick: () => s(!r),
        className: "w-full bg-gray-50 flex justify-between items-center px-2 py-1 b text-left transition-all duration-300 ",
        children: [
          /* @__PURE__ */ a.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ a.jsx("div", { className: `w-3 h-3 rounded-full transition-all duration-300 ${r ? "bg-action" : "bg-gray-300"}` }),
            /* @__PURE__ */ a.jsx("h3", { className: "text-md capitalize font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: e })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: `relative transition-all duration-300 ${r ? "rotate-180" : ""}`, children: [
            /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-full blur-md transition-opacity duration-300 ${r ? "bg-action opacity-30" : "bg-transparent opacity-0"}` }),
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
        className: `flex-1 flex flex-col min-h-0 transition-all  duration-500 ease-in-out overflow-hidden ${r ? "max-h-full opacity-100" : "max-h-0 opacity-0"}`,
        children: /* @__PURE__ */ a.jsx("div", { className: "px-1 pb-1 bg-gradient-to-br from-gray-50/50 to-white flex-1 flex flex-col min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: "space-y-5 pt-1 flex-1 flex flex-col min-h-0 overflow-y-auto", children: t }) })
      }
    )
  ] }) });
}
function Xo({
  groups: e,
  methods: t = {},
  infoData: n,
  viewRenderers: r = {},
  sqlOpsUrls: s,
  refid: o,
  Reports: i,
  toast: l,
  handleAction: m = () => {
  },
  infoViewJson: d,
  fieldOptions: f,
  setFieldOptions: h,
  components: g
}) {
  const N = {
    single: (y, w) => /* @__PURE__ */ a.jsx(
      Er,
      {
        tabObj: y,
        methods: t,
        tabName: w,
        sqlOpsUrls: s,
        fieldOptions: f,
        setFieldOptions: h,
        refid: o,
        module_refid: d?.module_refid
      }
    ),
    grid: (y, w) => /* @__PURE__ */ a.jsx(
      Ar,
      {
        ...i ? { Reports: i } : {},
        toast: l,
        infoViewJson: d,
        handleAction: m,
        tabObj: y,
        methods: t,
        tabName: w,
        sqlOpsUrls: s,
        refid: o
      }
    )
  }, v = d?.buttons;
  let A = v ? Object.entries(v).filter(([y, w]) => !(w.groups && w.groups.length > 0)) : [];
  async function S(y, w) {
    const b = t?.[y];
    if (b) {
      try {
        await b();
      } catch (j) {
        console.error("Method execution failed:", j);
      }
      return;
    }
    m?.({ [y]: w }, n);
  }
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ a.jsx("div", { className: "mx-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "space-y-1 flex flex-col min-h-0", children: [
    e && Object.entries(e).map(([y, w], b) => {
      let j = v ? Object.entries(v).filter(([_, $]) => $.groups ? $.groups.includes(y) : !1) : [];
      const T = Nr(w.component, g);
      return /* @__PURE__ */ a.jsxs(Yo, { title: w.label, isFirst: b === 0, children: [
        w?.type === "fields" && w?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: w.fields.map((_, $) => /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${mt[ht(_.width)] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ a.jsx(
              gt,
              {
                module_refid: d?.module_refid,
                methods: t,
                field: _,
                data: n ?? {},
                setFieldOptions: h,
                ...f[_.name] ? { optionsOverride: f[_.name] } : {},
                sqlOpsUrls: s,
                refid: o
              }
            )
          },
          _?.name ?? `field-${$}`
        )) }) }) : w?.type === "component" && T ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: T }) : w ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: r[w.config?.uimode]?.(w) || N[w.config?.uimode]?.(w, y) || /* @__PURE__ */ a.jsx("div", { children: "No renderer for this type" }) }) : null,
        /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: j && j.map(([_, $]) => /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => S(_, $),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: $.label
          },
          _
        )) })
      ] }, y);
    }),
    /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: A && A.map(([y, w]) => /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => S(y, w),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: w.label
      },
      y
    )) })
  ] }) }) });
}
function Qo({ title: e, children: t }) {
  return /* @__PURE__ */ a.jsx("div", { className: "group relative mt-1 flex-1 flex flex-col min-h-0 max-h-screen", children: /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col min-h-0 relative  bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ a.jsx(
      "button",
      {
        className: "w-full bg-gray-50 flex justify-between items-center px-2 py-1 b text-left transition-all duration-300 ",
        children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ a.jsx("div", { className: "w-3 h-3 rounded-full transition-all duration-300 bg-action" }),
          /* @__PURE__ */ a.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r capitalize from-gray-800 to-gray-600 bg-clip-text text-transparent", children: e })
        ] })
      }
    ),
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: `flex flex-col min-h-0 transition-all duration-500 ease-in-out opacity-100'
            }`,
        children: /* @__PURE__ */ a.jsx("div", { className: "px-1 pb-1 bg-gradient-to-br from-gray-50/50 to-white flex flex-col min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: "space-y-5 pt-1 flex-1 flex flex-col min-h-0 overflow-y-auto", children: t }) })
      }
    )
  ] }) });
}
function Jo({
  groups: e,
  methods: t = {},
  infoData: n,
  viewRenderers: r = {},
  sqlOpsUrls: s,
  refid: o,
  Reports: i,
  toast: l,
  handleAction: m = () => {
  },
  infoViewJson: d,
  fieldOptions: f,
  setFieldOptions: h,
  components: g
}) {
  const N = {
    single: (y, w) => /* @__PURE__ */ a.jsx(Er, { fieldOptions: f, setFieldOptions: h, module_refid: d?.module_refid, tabObj: y, methods: t, tabName: w, sqlOpsUrls: s, refid: o }),
    grid: (y, w) => /* @__PURE__ */ a.jsx(
      Ar,
      {
        ...i ? { Reports: i } : {},
        toast: l,
        handleAction: m,
        tabObj: y,
        methods: t,
        tabName: w,
        sqlOpsUrls: s,
        refid: o,
        infoViewJson: d
      }
    )
  }, v = d?.buttons;
  let A = v ? Object.entries(v).filter(([y, w]) => !(w.groups && w.groups.length > 0)) : [];
  async function S(y, w) {
    const b = t?.[y];
    if (b) {
      try {
        await b();
      } catch (j) {
        console.error("Method execution failed:", j);
      }
      return;
    }
    m?.({ [y]: w }, n);
  }
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ a.jsx("div", { className: "mx-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "space-y-2  flex flex-col min-h-0", children: [
    e && Object.entries(e).map(([y, w], b) => {
      let j = v ? Object.entries(v).filter(([_, $]) => $.groups ? $.groups.includes(y) : !1) : [];
      const T = Nr(w.component, g);
      return /* @__PURE__ */ a.jsxs(Qo, { title: w.label, children: [
        w?.type === "fields" && w?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: w.fields.map((_, $) => /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${mt[ht(_.width)] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ a.jsx(
              gt,
              {
                module_refid: d?.module_refid,
                methods: t,
                field: _,
                data: n ?? {},
                setFieldOptions: h,
                ...f[_.name] ? { optionsOverride: f[_.name] } : {},
                sqlOpsUrls: s,
                refid: o
              }
            )
          },
          _?.name ?? `field-${$}`
        )) }) }) : w?.type === "component" && T ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: T }) : w ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: r[w.config?.uimode]?.(w) || N[w.config?.uimode]?.(w, y) || /* @__PURE__ */ a.jsx("div", { children: "No renderer for this type" }) }) : null,
        /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: j && j.map(([_, $]) => /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => S(_, $),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: $.label
          },
          _
        )) })
      ] }, y);
    }),
    /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: A && A.map(([y, w]) => /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => S(y, w),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: w.label
      },
      y
    )) })
  ] }) }) });
}
function wi({
  infoViewJson: e,
  hiddenFields: t = [],
  groupFieldsFn: n = xo,
  layoutConfig: r = {},
  viewRenderers: s = {},
  methods: o = {},
  Reports: i,
  toast: l,
  handleAction: m = () => {
  },
  components: d
}) {
  const [f, h] = Z.useState({}), g = bo(e.infoview ?? {}), N = e.endPoints, v = Z.useMemo(
    () => n(e.fields || {}),
    [e.fields, n]
  ), [A, S] = Z.useState({}), y = (_, $) => {
    S((M) => ({ ...M, [_]: $ }));
  }, w = e?.source?.refid;
  let b = { ...v };
  e.infoview?.groups && (b = { ...b, ...e.infoview.groups }), Z.useEffect(() => {
    let _ = !1;
    return (async () => {
      const M = e?.source;
      if (!M?.type) {
        _ || h({});
        return;
      }
      if (M.type === "method") {
        const k = M.method, p = k ? o[k] : void 0;
        if (p)
          try {
            const O = await Promise.resolve(p());
            _ || h(O || {});
          } catch (O) {
            console.error("Method execution failed:", O), _ || h({});
          }
        else
          _ || h({});
      }
      if (M.type === "api")
        try {
          const k = await U({
            method: M.method || "GET",
            url: M.url,
            data: M.body || {},
            params: M.params || {},
            headers: M.headers || {}
          });
          _ || h(k.data || {});
        } catch (k) {
          console.error("API fetch failed:", k), _ || h({});
        }
      if (M.type === "sql" && M.refid && M.refid != "0" || M.dbopsid) {
        if (!N) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let k = !1, p;
          M?.dbopsid && (k = !0, p = M?.dbopsid);
          const O = await U({
            method: "GET",
            url: N.baseURL + N.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${N?.accessToken}`
            }
          });
          if (!k) {
            let q = {
              ...M
            };
            M.where && (q = {
              ...M,
              where: he(M.where, {
                refid: w
              })
            }), p = (await U({
              method: "POST",
              url: N.baseURL + N.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: q,
                fields: It(e.fields, N.operation),
                forcefill: e.forcefill,
                datahash: O.data.refhash,
                srcid: e?.module_refid
              },
              headers: {
                Authorization: `Bearer ${N?.accessToken}`
              }
            }))?.data.refid;
          }
          const H = await U({
            method: "POST",
            url: N.baseURL + N.dbopsFetch,
            data: {
              refid: p,
              datahash: O.data.refhash,
              module_refid: e.module_refid
            },
            headers: {
              Authorization: `Bearer ${N?.accessToken}`
            }
          }), W = Vn(H) ?? {};
          _ || h(W);
        } catch (k) {
          console.error("API fetch failed:", k);
        }
      }
    })(), () => {
      _ = !0;
    };
  }, [
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.url || "",
    JSON.stringify(e?.source?.params || {}),
    JSON.stringify(e?.source?.body || {}),
    JSON.stringify(e?.source?.headers || {})
  ]);
  const j = b.common || null;
  j && delete b.common;
  const T = (_) => {
    switch (_) {
      case "accordion":
        return /* @__PURE__ */ a.jsx(
          Xo,
          {
            groups: b,
            methods: o,
            infoData: f,
            viewRenderers: s,
            sqlOpsUrls: N,
            refid: w,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: m,
            infoViewJson: e,
            setFieldOptions: y,
            fieldOptions: A,
            ...d ? { components: d } : {}
          }
        );
      case "tab":
      case "tableft":
      case "tabright":
        return /* @__PURE__ */ a.jsx(
          bn,
          {
            groups: b,
            viewRenderers: s,
            layoutConfig: r,
            methods: o,
            infoData: f,
            isCommonInfo: !!j,
            viewMode: _,
            sqlOpsUrls: N,
            refid: w,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: m,
            infoViewJson: e,
            setFieldOptions: y,
            fieldOptions: A,
            ...d ? { components: d } : {}
          }
        );
      case "cards":
        return /* @__PURE__ */ a.jsx(
          Jo,
          {
            groups: b,
            viewRenderers: s,
            methods: o,
            infoData: f,
            sqlOpsUrls: N,
            refid: w,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: m,
            infoViewJson: e,
            setFieldOptions: y,
            fieldOptions: A,
            ...d ? { components: d } : {}
          }
        );
      default:
        return /* @__PURE__ */ a.jsx(
          bn,
          {
            groups: b,
            viewRenderers: s,
            layoutConfig: r,
            methods: o,
            infoData: f,
            isCommonInfo: !!j,
            viewMode: _,
            sqlOpsUrls: N,
            refid: w,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: m,
            infoViewJson: e,
            setFieldOptions: y,
            fieldOptions: A,
            ...d ? { components: d } : {}
          }
        );
    }
  };
  return /* @__PURE__ */ a.jsxs("div", { className: r.containerClass || "h-screen flex flex-col ", children: [
    j && N && /* @__PURE__ */ a.jsx(
      zo,
      {
        commonInfo: j,
        infoData: f,
        hiddenFields: t,
        sqlOpsUrls: N,
        setFieldOptions: y,
        fieldOptions: A,
        module_refid: e.module_refid,
        refid: w,
        methods: o
      }
    ),
    T(g)
  ] });
}
export {
  wi as InfoView
};
