import ne, { useState as le, useEffect as ge, useMemo as Ot, useRef as We, useLayoutEffect as bs } from "react";
import * as Se from "yup";
import { useFormik as ws } from "formik";
import { createPortal as vs } from "react-dom";
var Rt = { exports: {} }, it = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vr;
function Es() {
  if (Vr) return it;
  Vr = 1;
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
  return it.Fragment = t, it.jsx = n, it.jsxs = n, it;
}
var lt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kr;
function As() {
  return Kr || (Kr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(S) {
      if (S == null) return null;
      if (typeof S == "function")
        return S.$$typeof === _ ? null : S.displayName || S.name || null;
      if (typeof S == "string") return S;
      switch (S) {
        case A:
          return "Fragment";
        case p:
          return "Profiler";
        case E:
          return "StrictMode";
        case j:
          return "Suspense";
        case O:
          return "SuspenseList";
        case W:
          return "Activity";
      }
      if (typeof S == "object")
        switch (typeof S.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), S.$$typeof) {
          case y:
            return "Portal";
          case m:
            return (S.displayName || "Context") + ".Provider";
          case g:
            return (S._context.displayName || "Context") + ".Consumer";
          case v:
            var D = S.render;
            return S = S.displayName, S || (S = D.displayName || D.name || "", S = S !== "" ? "ForwardRef(" + S + ")" : "ForwardRef"), S;
          case I:
            return D = S.displayName || null, D !== null ? D : e(S.type) || "Memo";
          case F:
            D = S._payload, S = S._init;
            try {
              return e(S(D));
            } catch {
            }
        }
      return null;
    }
    function t(S) {
      return "" + S;
    }
    function n(S) {
      try {
        t(S);
        var D = !1;
      } catch {
        D = !0;
      }
      if (D) {
        D = console;
        var J = D.error, K = typeof Symbol == "function" && Symbol.toStringTag && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return J.call(
          D,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          K
        ), t(S);
      }
    }
    function r(S) {
      if (S === A) return "<>";
      if (typeof S == "object" && S !== null && S.$$typeof === F)
        return "<...>";
      try {
        var D = e(S);
        return D ? "<" + D + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var S = d.A;
      return S === null ? null : S.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(S) {
      if (k.call(S, "key")) {
        var D = Object.getOwnPropertyDescriptor(S, "key").get;
        if (D && D.isReactWarning) return !1;
      }
      return S.key !== void 0;
    }
    function l(S, D) {
      function J() {
        te || (te = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          D
        ));
      }
      J.isReactWarning = !0, Object.defineProperty(S, "key", {
        get: J,
        configurable: !0
      });
    }
    function h() {
      var S = e(this.type);
      return ae[S] || (ae[S] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), S = this.props.ref, S !== void 0 ? S : null;
    }
    function c(S, D, J, K, P, L, N, B) {
      return J = L.ref, S = {
        $$typeof: T,
        type: S,
        key: D,
        props: L,
        _owner: P
      }, (J !== void 0 ? J : null) !== null ? Object.defineProperty(S, "ref", {
        enumerable: !1,
        get: h
      }) : Object.defineProperty(S, "ref", { enumerable: !1, value: null }), S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(S, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(S, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: N
      }), Object.defineProperty(S, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: B
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    }
    function f(S, D, J, K, P, L, N, B) {
      var C = D.children;
      if (C !== void 0)
        if (K)
          if (q(C)) {
            for (K = 0; K < C.length; K++)
              x(C[K]);
            Object.freeze && Object.freeze(C);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(C);
      if (k.call(D, "key")) {
        C = e(S);
        var $ = Object.keys(D).filter(function(U) {
          return U !== "key";
        });
        K = 0 < $.length ? "{key: someKey, " + $.join(": ..., ") + ": ...}" : "{key: someKey}", me[C + K] || ($ = 0 < $.length ? "{" + $.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          K,
          C,
          $,
          C
        ), me[C + K] = !0);
      }
      if (C = null, J !== void 0 && (n(J), C = "" + J), i(D) && (n(D.key), C = "" + D.key), "key" in D) {
        J = {};
        for (var Y in D)
          Y !== "key" && (J[Y] = D[Y]);
      } else J = D;
      return C && l(
        J,
        typeof S == "function" ? S.displayName || S.name || "Unknown" : S
      ), c(
        S,
        C,
        L,
        P,
        s(),
        J,
        N,
        B
      );
    }
    function x(S) {
      typeof S == "object" && S !== null && S.$$typeof === T && S._store && (S._store.validated = 1);
    }
    var b = ne, T = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), g = Symbol.for("react.consumer"), m = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), W = Symbol.for("react.activity"), _ = Symbol.for("react.client.reference"), d = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = Object.prototype.hasOwnProperty, q = Array.isArray, Q = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(S) {
        return S();
      }
    };
    var te, ae = {}, je = b.react_stack_bottom_frame.bind(
      b,
      o
    )(), he = Q(r(o)), me = {};
    lt.Fragment = A, lt.jsx = function(S, D, J, K, P) {
      var L = 1e4 > d.recentlyCreatedOwnerStacks++;
      return f(
        S,
        D,
        J,
        !1,
        K,
        P,
        L ? Error("react-stack-top-frame") : je,
        L ? Q(r(S)) : he
      );
    }, lt.jsxs = function(S, D, J, K, P) {
      var L = 1e4 > d.recentlyCreatedOwnerStacks++;
      return f(
        S,
        D,
        J,
        !0,
        K,
        P,
        L ? Error("react-stack-top-frame") : je,
        L ? Q(r(S)) : he
      );
    };
  }()), lt;
}
var Yr;
function Ns() {
  return Yr || (Yr = 1, process.env.NODE_ENV === "production" ? Rt.exports = Es() : Rt.exports = As()), Rt.exports;
}
var a = Ns();
function Rn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ts } = Object.prototype, { getPrototypeOf: Tr } = Object, { iterator: Ut, toStringTag: _n } = Symbol, Ht = /* @__PURE__ */ ((e) => (t) => {
  const n = Ts.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Oe = (e) => (e = e.toLowerCase(), (t) => Ht(t) === e), Gt = (e) => (t) => typeof t === e, { isArray: rt } = Array, gt = Gt("undefined");
function yt(e) {
  return e !== null && !gt(e) && e.constructor !== null && !gt(e.constructor) && Ee(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Cn = Oe("ArrayBuffer");
function js(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Cn(e.buffer), t;
}
const Ss = Gt("string"), Ee = Gt("function"), On = Gt("number"), xt = (e) => e !== null && typeof e == "object", Rs = (e) => e === !0 || e === !1, Lt = (e) => {
  if (Ht(e) !== "object")
    return !1;
  const t = Tr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(_n in e) && !(Ut in e);
}, _s = (e) => {
  if (!xt(e) || yt(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Cs = Oe("Date"), Os = Oe("File"), Ls = Oe("Blob"), Ps = Oe("FileList"), Is = (e) => xt(e) && Ee(e.pipe), Fs = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Ee(e.append) && ((t = Ht(e)) === "formdata" || // detect form-data instance
  t === "object" && Ee(e.toString) && e.toString() === "[object FormData]"));
}, Ds = Oe("URLSearchParams"), [Ms, ks, $s, Bs] = ["ReadableStream", "Request", "Response", "Headers"].map(Oe), zs = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function bt(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), rt(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (yt(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let l;
    for (r = 0; r < i; r++)
      l = o[r], t.call(null, e[l], l, e);
  }
}
function Ln(e, t) {
  if (yt(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const Ge = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Pn = (e) => !gt(e) && e !== Ge;
function pr() {
  const { caseless: e } = Pn(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && Ln(t, s) || s;
    Lt(t[o]) && Lt(r) ? t[o] = pr(t[o], r) : Lt(r) ? t[o] = pr({}, r) : rt(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && bt(arguments[r], n);
  return t;
}
const Us = (e, t, n, { allOwnKeys: r } = {}) => (bt(t, (s, o) => {
  n && Ee(s) ? e[o] = Rn(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), Hs = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Gs = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Ws = (e, t, n, r) => {
  let s, o, i;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && Tr(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, qs = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Vs = (e) => {
  if (!e) return null;
  if (rt(e)) return e;
  let t = e.length;
  if (!On(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Ks = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Tr(Uint8Array)), Ys = (e, t) => {
  const r = (e && e[Ut]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Xs = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Qs = Oe("HTMLFormElement"), Zs = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Xr = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Js = Oe("RegExp"), In = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  bt(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, ea = (e) => {
  In(e, (t, n) => {
    if (Ee(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (Ee(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, ta = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return rt(e) ? r(e) : r(String(e).split(t)), n;
}, ra = () => {
}, na = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function sa(e) {
  return !!(e && Ee(e.append) && e[_n] === "FormData" && e[Ut]);
}
const aa = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (xt(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (yt(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = rt(r) ? [] : {};
        return bt(r, (i, l) => {
          const h = n(i, s + 1);
          !gt(h) && (o[l] = h);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, oa = Oe("AsyncFunction"), ia = (e) => e && (xt(e) || Ee(e)) && Ee(e.then) && Ee(e.catch), Fn = ((e, t) => e ? setImmediate : t ? ((n, r) => (Ge.addEventListener("message", ({ source: s, data: o }) => {
  s === Ge && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), Ge.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  Ee(Ge.postMessage)
), la = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ge) : typeof process < "u" && process.nextTick || Fn, ca = (e) => e != null && Ee(e[Ut]), w = {
  isArray: rt,
  isArrayBuffer: Cn,
  isBuffer: yt,
  isFormData: Fs,
  isArrayBufferView: js,
  isString: Ss,
  isNumber: On,
  isBoolean: Rs,
  isObject: xt,
  isPlainObject: Lt,
  isEmptyObject: _s,
  isReadableStream: Ms,
  isRequest: ks,
  isResponse: $s,
  isHeaders: Bs,
  isUndefined: gt,
  isDate: Cs,
  isFile: Os,
  isBlob: Ls,
  isRegExp: Js,
  isFunction: Ee,
  isStream: Is,
  isURLSearchParams: Ds,
  isTypedArray: Ks,
  isFileList: Ps,
  forEach: bt,
  merge: pr,
  extend: Us,
  trim: zs,
  stripBOM: Hs,
  inherits: Gs,
  toFlatObject: Ws,
  kindOf: Ht,
  kindOfTest: Oe,
  endsWith: qs,
  toArray: Vs,
  forEachEntry: Ys,
  matchAll: Xs,
  isHTMLForm: Qs,
  hasOwnProperty: Xr,
  hasOwnProp: Xr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: In,
  freezeMethods: ea,
  toObjectSet: ta,
  toCamelCase: Zs,
  noop: ra,
  toFiniteNumber: na,
  findKey: Ln,
  global: Ge,
  isContextDefined: Pn,
  isSpecCompliantForm: sa,
  toJSONObject: aa,
  isAsyncFn: oa,
  isThenable: ia,
  setImmediate: Fn,
  asap: la,
  isIterable: ca
};
function V(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
w.inherits(V, Error, {
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
      config: w.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Dn = V.prototype, Mn = {};
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
  Mn[e] = { value: e };
});
Object.defineProperties(V, Mn);
Object.defineProperty(Dn, "isAxiosError", { value: !0 });
V.from = (e, t, n, r, s, o) => {
  const i = Object.create(Dn);
  return w.toFlatObject(e, i, function(h) {
    return h !== Error.prototype;
  }, (l) => l !== "isAxiosError"), V.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const ua = null;
function gr(e) {
  return w.isPlainObject(e) || w.isArray(e);
}
function kn(e) {
  return w.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Qr(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = kn(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function da(e) {
  return w.isArray(e) && !e.some(gr);
}
const fa = w.toFlatObject(w, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Wt(e, t, n) {
  if (!w.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = w.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(A, E) {
    return !w.isUndefined(E[A]);
  });
  const r = n.metaTokens, s = n.visitor || f, o = n.dots, i = n.indexes, h = (n.Blob || typeof Blob < "u" && Blob) && w.isSpecCompliantForm(t);
  if (!w.isFunction(s))
    throw new TypeError("visitor must be a function");
  function c(y) {
    if (y === null) return "";
    if (w.isDate(y))
      return y.toISOString();
    if (w.isBoolean(y))
      return y.toString();
    if (!h && w.isBlob(y))
      throw new V("Blob is not supported. Use a Buffer instead.");
    return w.isArrayBuffer(y) || w.isTypedArray(y) ? h && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y;
  }
  function f(y, A, E) {
    let p = y;
    if (y && !E && typeof y == "object") {
      if (w.endsWith(A, "{}"))
        A = r ? A : A.slice(0, -2), y = JSON.stringify(y);
      else if (w.isArray(y) && da(y) || (w.isFileList(y) || w.endsWith(A, "[]")) && (p = w.toArray(y)))
        return A = kn(A), p.forEach(function(m, v) {
          !(w.isUndefined(m) || m === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Qr([A], v, o) : i === null ? A : A + "[]",
            c(m)
          );
        }), !1;
    }
    return gr(y) ? !0 : (t.append(Qr(E, A, o), c(y)), !1);
  }
  const x = [], b = Object.assign(fa, {
    defaultVisitor: f,
    convertValue: c,
    isVisitable: gr
  });
  function T(y, A) {
    if (!w.isUndefined(y)) {
      if (x.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + A.join("."));
      x.push(y), w.forEach(y, function(p, g) {
        (!(w.isUndefined(p) || p === null) && s.call(
          t,
          p,
          w.isString(g) ? g.trim() : g,
          A,
          b
        )) === !0 && T(p, A ? A.concat(g) : [g]);
      }), x.pop();
    }
  }
  if (!w.isObject(e))
    throw new TypeError("data must be an object");
  return T(e), t;
}
function Zr(e) {
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
function jr(e, t) {
  this._pairs = [], e && Wt(e, this, t);
}
const $n = jr.prototype;
$n.append = function(t, n) {
  this._pairs.push([t, n]);
};
$n.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Zr);
  } : Zr;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function ha(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Bn(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || ha;
  w.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = w.isURLSearchParams(t) ? t.toString() : new jr(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Jr {
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
    w.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const zn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ma = typeof URLSearchParams < "u" ? URLSearchParams : jr, pa = typeof FormData < "u" ? FormData : null, ga = typeof Blob < "u" ? Blob : null, ya = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ma,
    FormData: pa,
    Blob: ga
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Sr = typeof window < "u" && typeof document < "u", yr = typeof navigator == "object" && navigator || void 0, xa = Sr && (!yr || ["ReactNative", "NativeScript", "NS"].indexOf(yr.product) < 0), ba = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", wa = Sr && window.location.href || "http://localhost", va = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Sr,
  hasStandardBrowserEnv: xa,
  hasStandardBrowserWebWorkerEnv: ba,
  navigator: yr,
  origin: wa
}, Symbol.toStringTag, { value: "Module" })), fe = {
  ...va,
  ...ya
};
function Ea(e, t) {
  return Wt(e, new fe.classes.URLSearchParams(), {
    visitor: function(n, r, s, o) {
      return fe.isNode && w.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function Aa(e) {
  return w.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Na(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Un(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const l = Number.isFinite(+i), h = o >= n.length;
    return i = !i && w.isArray(s) ? s.length : i, h ? (w.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !l) : ((!s[i] || !w.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && w.isArray(s[i]) && (s[i] = Na(s[i])), !l);
  }
  if (w.isFormData(e) && w.isFunction(e.entries)) {
    const n = {};
    return w.forEachEntry(e, (r, s) => {
      t(Aa(r), s, n, 0);
    }), n;
  }
  return null;
}
function Ta(e, t, n) {
  if (w.isString(e))
    try {
      return (t || JSON.parse)(e), w.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const wt = {
  transitional: zn,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = w.isObject(t);
    if (o && w.isHTMLForm(t) && (t = new FormData(t)), w.isFormData(t))
      return s ? JSON.stringify(Un(t)) : t;
    if (w.isArrayBuffer(t) || w.isBuffer(t) || w.isStream(t) || w.isFile(t) || w.isBlob(t) || w.isReadableStream(t))
      return t;
    if (w.isArrayBufferView(t))
      return t.buffer;
    if (w.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Ea(t, this.formSerializer).toString();
      if ((l = w.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const h = this.env && this.env.FormData;
        return Wt(
          l ? { "files[]": t } : t,
          h && new h(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), Ta(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || wt.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (w.isResponse(t) || w.isReadableStream(t))
      return t;
    if (t && w.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (i)
          throw l.name === "SyntaxError" ? V.from(l, V.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
    FormData: fe.classes.FormData,
    Blob: fe.classes.Blob
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
w.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  wt.headers[e] = {};
});
const ja = w.toObjectSet([
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
]), Sa = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && ja[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, en = Symbol("internals");
function ct(e) {
  return e && String(e).trim().toLowerCase();
}
function Pt(e) {
  return e === !1 || e == null ? e : w.isArray(e) ? e.map(Pt) : String(e);
}
function Ra(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const _a = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function rr(e, t, n, r, s) {
  if (w.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!w.isString(t)) {
    if (w.isString(r))
      return t.indexOf(r) !== -1;
    if (w.isRegExp(r))
      return r.test(t);
  }
}
function Ca(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Oa(e, t) {
  const n = w.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
let Ae = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(l, h, c) {
      const f = ct(h);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const x = w.findKey(s, f);
      (!x || s[x] === void 0 || c === !0 || c === void 0 && s[x] !== !1) && (s[x || h] = Pt(l));
    }
    const i = (l, h) => w.forEach(l, (c, f) => o(c, f, h));
    if (w.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (w.isString(t) && (t = t.trim()) && !_a(t))
      i(Sa(t), n);
    else if (w.isObject(t) && w.isIterable(t)) {
      let l = {}, h, c;
      for (const f of t) {
        if (!w.isArray(f))
          throw TypeError("Object iterator must return a key-value pair");
        l[c = f[0]] = (h = l[c]) ? w.isArray(h) ? [...h, f[1]] : [h, f[1]] : f[1];
      }
      i(l, n);
    } else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = ct(t), t) {
      const r = w.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Ra(s);
        if (w.isFunction(n))
          return n.call(this, s, r);
        if (w.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = ct(t), t) {
      const r = w.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || rr(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = ct(i), i) {
        const l = w.findKey(r, i);
        l && (!n || rr(r, r[l], l, n)) && (delete r[l], s = !0);
      }
    }
    return w.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || rr(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return w.forEach(this, (s, o) => {
      const i = w.findKey(r, o);
      if (i) {
        n[i] = Pt(s), delete n[o];
        return;
      }
      const l = t ? Ca(o) : String(o).trim();
      l !== o && delete n[o], n[l] = Pt(s), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return w.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && w.isArray(r) ? r.join(", ") : r);
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
    const r = (this[en] = this[en] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const l = ct(i);
      r[l] || (Oa(s, i), r[l] = !0);
    }
    return w.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
Ae.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
w.reduceDescriptors(Ae.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
w.freezeMethods(Ae);
function nr(e, t) {
  const n = this || wt, r = t || n, s = Ae.from(r.headers);
  let o = r.data;
  return w.forEach(e, function(l) {
    o = l.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Hn(e) {
  return !!(e && e.__CANCEL__);
}
function nt(e, t, n) {
  V.call(this, e ?? "canceled", V.ERR_CANCELED, t, n), this.name = "CanceledError";
}
w.inherits(nt, V, {
  __CANCEL__: !0
});
function Gn(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new V(
    "Request failed with status code " + n.status,
    [V.ERR_BAD_REQUEST, V.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function La(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Pa(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(h) {
    const c = Date.now(), f = r[o];
    i || (i = c), n[s] = h, r[s] = c;
    let x = o, b = 0;
    for (; x !== s; )
      b += n[x++], x = x % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), c - i < t)
      return;
    const T = f && c - f;
    return T ? Math.round(b * 1e3 / T) : void 0;
  };
}
function Ia(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const i = (c, f = Date.now()) => {
    n = f, s = null, o && (clearTimeout(o), o = null), e(...c);
  };
  return [(...c) => {
    const f = Date.now(), x = f - n;
    x >= r ? i(c, f) : (s = c, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - x)));
  }, () => s && i(s)];
}
const Mt = (e, t, n = 3) => {
  let r = 0;
  const s = Pa(50, 250);
  return Ia((o) => {
    const i = o.loaded, l = o.lengthComputable ? o.total : void 0, h = i - r, c = s(h), f = i <= l;
    r = i;
    const x = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: h,
      rate: c || void 0,
      estimated: c && l && f ? (l - i) / c : void 0,
      event: o,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(x);
  }, n);
}, tn = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, rn = (e) => (...t) => w.asap(() => e(...t)), Fa = fe.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, fe.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(fe.origin),
  fe.navigator && /(msie|trident)/i.test(fe.navigator.userAgent)
) : () => !0, Da = fe.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      w.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), w.isString(r) && i.push("path=" + r), w.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
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
function Ma(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function ka(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Wn(e, t, n) {
  let r = !Ma(t);
  return e && (r || n == !1) ? ka(e, t) : t;
}
const nn = (e) => e instanceof Ae ? { ...e } : e;
function Ve(e, t) {
  t = t || {};
  const n = {};
  function r(c, f, x, b) {
    return w.isPlainObject(c) && w.isPlainObject(f) ? w.merge.call({ caseless: b }, c, f) : w.isPlainObject(f) ? w.merge({}, f) : w.isArray(f) ? f.slice() : f;
  }
  function s(c, f, x, b) {
    if (w.isUndefined(f)) {
      if (!w.isUndefined(c))
        return r(void 0, c, x, b);
    } else return r(c, f, x, b);
  }
  function o(c, f) {
    if (!w.isUndefined(f))
      return r(void 0, f);
  }
  function i(c, f) {
    if (w.isUndefined(f)) {
      if (!w.isUndefined(c))
        return r(void 0, c);
    } else return r(void 0, f);
  }
  function l(c, f, x) {
    if (x in t)
      return r(c, f);
    if (x in e)
      return r(void 0, c);
  }
  const h = {
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
    headers: (c, f, x) => s(nn(c), nn(f), x, !0)
  };
  return w.forEach(Object.keys({ ...e, ...t }), function(f) {
    const x = h[f] || s, b = x(e[f], t[f], f);
    w.isUndefined(b) && x !== l || (n[f] = b);
  }), n;
}
const qn = (e) => {
  const t = Ve({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: l } = t;
  t.headers = i = Ae.from(i), t.url = Bn(Wn(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), l && i.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let h;
  if (w.isFormData(n)) {
    if (fe.hasStandardBrowserEnv || fe.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((h = i.getContentType()) !== !1) {
      const [c, ...f] = h ? h.split(";").map((x) => x.trim()).filter(Boolean) : [];
      i.setContentType([c || "multipart/form-data", ...f].join("; "));
    }
  }
  if (fe.hasStandardBrowserEnv && (r && w.isFunction(r) && (r = r(t)), r || r !== !1 && Fa(t.url))) {
    const c = s && o && Da.read(o);
    c && i.set(s, c);
  }
  return t;
}, $a = typeof XMLHttpRequest < "u", Ba = $a && function(e) {
  return new Promise(function(n, r) {
    const s = qn(e);
    let o = s.data;
    const i = Ae.from(s.headers).normalize();
    let { responseType: l, onUploadProgress: h, onDownloadProgress: c } = s, f, x, b, T, y;
    function A() {
      T && T(), y && y(), s.cancelToken && s.cancelToken.unsubscribe(f), s.signal && s.signal.removeEventListener("abort", f);
    }
    let E = new XMLHttpRequest();
    E.open(s.method.toUpperCase(), s.url, !0), E.timeout = s.timeout;
    function p() {
      if (!E)
        return;
      const m = Ae.from(
        "getAllResponseHeaders" in E && E.getAllResponseHeaders()
      ), j = {
        data: !l || l === "text" || l === "json" ? E.responseText : E.response,
        status: E.status,
        statusText: E.statusText,
        headers: m,
        config: e,
        request: E
      };
      Gn(function(I) {
        n(I), A();
      }, function(I) {
        r(I), A();
      }, j), E = null;
    }
    "onloadend" in E ? E.onloadend = p : E.onreadystatechange = function() {
      !E || E.readyState !== 4 || E.status === 0 && !(E.responseURL && E.responseURL.indexOf("file:") === 0) || setTimeout(p);
    }, E.onabort = function() {
      E && (r(new V("Request aborted", V.ECONNABORTED, e, E)), E = null);
    }, E.onerror = function() {
      r(new V("Network Error", V.ERR_NETWORK, e, E)), E = null;
    }, E.ontimeout = function() {
      let v = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const j = s.transitional || zn;
      s.timeoutErrorMessage && (v = s.timeoutErrorMessage), r(new V(
        v,
        j.clarifyTimeoutError ? V.ETIMEDOUT : V.ECONNABORTED,
        e,
        E
      )), E = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in E && w.forEach(i.toJSON(), function(v, j) {
      E.setRequestHeader(j, v);
    }), w.isUndefined(s.withCredentials) || (E.withCredentials = !!s.withCredentials), l && l !== "json" && (E.responseType = s.responseType), c && ([b, y] = Mt(c, !0), E.addEventListener("progress", b)), h && E.upload && ([x, T] = Mt(h), E.upload.addEventListener("progress", x), E.upload.addEventListener("loadend", T)), (s.cancelToken || s.signal) && (f = (m) => {
      E && (r(!m || m.type ? new nt(null, e, E) : m), E.abort(), E = null);
    }, s.cancelToken && s.cancelToken.subscribe(f), s.signal && (s.signal.aborted ? f() : s.signal.addEventListener("abort", f)));
    const g = La(s.url);
    if (g && fe.protocols.indexOf(g) === -1) {
      r(new V("Unsupported protocol " + g + ":", V.ERR_BAD_REQUEST, e));
      return;
    }
    E.send(o || null);
  });
}, za = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const o = function(c) {
      if (!s) {
        s = !0, l();
        const f = c instanceof Error ? c : this.reason;
        r.abort(f instanceof V ? f : new nt(f instanceof Error ? f.message : f));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new V(`timeout ${t} of ms exceeded`, V.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(o) : c.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((c) => c.addEventListener("abort", o));
    const { signal: h } = r;
    return h.unsubscribe = () => w.asap(l), h;
  }
}, Ua = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, Ha = async function* (e, t) {
  for await (const n of Ga(e))
    yield* Ua(n, t);
}, Ga = async function* (e) {
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
}, sn = (e, t, n, r) => {
  const s = Ha(e, t);
  let o = 0, i, l = (h) => {
    i || (i = !0, r && r(h));
  };
  return new ReadableStream({
    async pull(h) {
      try {
        const { done: c, value: f } = await s.next();
        if (c) {
          l(), h.close();
          return;
        }
        let x = f.byteLength;
        if (n) {
          let b = o += x;
          n(b);
        }
        h.enqueue(new Uint8Array(f));
      } catch (c) {
        throw l(c), c;
      }
    },
    cancel(h) {
      return l(h), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, qt = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Vn = qt && typeof ReadableStream == "function", Wa = qt && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Kn = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, qa = Vn && Kn(() => {
  let e = !1;
  const t = new Request(fe.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), an = 64 * 1024, xr = Vn && Kn(() => w.isReadableStream(new Response("").body)), kt = {
  stream: xr && ((e) => e.body)
};
qt && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !kt[t] && (kt[t] = w.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new V(`Response type '${t}' is not supported`, V.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Va = async (e) => {
  if (e == null)
    return 0;
  if (w.isBlob(e))
    return e.size;
  if (w.isSpecCompliantForm(e))
    return (await new Request(fe.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (w.isArrayBufferView(e) || w.isArrayBuffer(e))
    return e.byteLength;
  if (w.isURLSearchParams(e) && (e = e + ""), w.isString(e))
    return (await Wa(e)).byteLength;
}, Ka = async (e, t) => {
  const n = w.toFiniteNumber(e.getContentLength());
  return n ?? Va(t);
}, Ya = qt && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: s,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: l,
    onUploadProgress: h,
    responseType: c,
    headers: f,
    withCredentials: x = "same-origin",
    fetchOptions: b
  } = qn(e);
  c = c ? (c + "").toLowerCase() : "text";
  let T = za([s, o && o.toAbortSignal()], i), y;
  const A = T && T.unsubscribe && (() => {
    T.unsubscribe();
  });
  let E;
  try {
    if (h && qa && n !== "get" && n !== "head" && (E = await Ka(f, r)) !== 0) {
      let j = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), O;
      if (w.isFormData(r) && (O = j.headers.get("content-type")) && f.setContentType(O), j.body) {
        const [I, F] = tn(
          E,
          Mt(rn(h))
        );
        r = sn(j.body, an, I, F);
      }
    }
    w.isString(x) || (x = x ? "include" : "omit");
    const p = "credentials" in Request.prototype;
    y = new Request(t, {
      ...b,
      signal: T,
      method: n.toUpperCase(),
      headers: f.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: p ? x : void 0
    });
    let g = await fetch(y, b);
    const m = xr && (c === "stream" || c === "response");
    if (xr && (l || m && A)) {
      const j = {};
      ["status", "statusText", "headers"].forEach((W) => {
        j[W] = g[W];
      });
      const O = w.toFiniteNumber(g.headers.get("content-length")), [I, F] = l && tn(
        O,
        Mt(rn(l), !0)
      ) || [];
      g = new Response(
        sn(g.body, an, I, () => {
          F && F(), A && A();
        }),
        j
      );
    }
    c = c || "text";
    let v = await kt[w.findKey(kt, c) || "text"](g, e);
    return !m && A && A(), await new Promise((j, O) => {
      Gn(j, O, {
        data: v,
        headers: Ae.from(g.headers),
        status: g.status,
        statusText: g.statusText,
        config: e,
        request: y
      });
    });
  } catch (p) {
    throw A && A(), p && p.name === "TypeError" && /Load failed|fetch/i.test(p.message) ? Object.assign(
      new V("Network Error", V.ERR_NETWORK, e, y),
      {
        cause: p.cause || p
      }
    ) : V.from(p, p && p.code, e, y);
  }
}), br = {
  http: ua,
  xhr: Ba,
  fetch: Ya
};
w.forEach(br, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const on = (e) => `- ${e}`, Xa = (e) => w.isFunction(e) || e === null || e === !1, Yn = {
  getAdapter: (e) => {
    e = w.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !Xa(n) && (r = br[(i = String(n)).toLowerCase()], r === void 0))
        throw new V(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([l, h]) => `adapter ${l} ` + (h === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(on).join(`
`) : " " + on(o[0]) : "as no adapter specified";
      throw new V(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: br
};
function sr(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new nt(null, e);
}
function ln(e) {
  return sr(e), e.headers = Ae.from(e.headers), e.data = nr.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Yn.getAdapter(e.adapter || wt.adapter)(e).then(function(r) {
    return sr(e), r.data = nr.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Ae.from(r.headers), r;
  }, function(r) {
    return Hn(r) || (sr(e), r && r.response && (r.response.data = nr.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Ae.from(r.response.headers))), Promise.reject(r);
  });
}
const Xn = "1.11.0", Vt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Vt[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const cn = {};
Vt.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + Xn + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, l) => {
    if (t === !1)
      throw new V(
        s(i, " has been removed" + (n ? " in " + n : "")),
        V.ERR_DEPRECATED
      );
    return n && !cn[i] && (cn[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, l) : !0;
  };
};
Vt.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Qa(e, t, n) {
  if (typeof e != "object")
    throw new V("options must be an object", V.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const l = e[o], h = l === void 0 || i(l, o, e);
      if (h !== !0)
        throw new V("option " + o + " must be " + h, V.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new V("Unknown option " + o, V.ERR_BAD_OPTION);
  }
}
const It = {
  assertOptions: Qa,
  validators: Vt
}, Fe = It.validators;
let qe = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Jr(),
      response: new Jr()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Ve(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && It.assertOptions(r, {
      silentJSONParsing: Fe.transitional(Fe.boolean),
      forcedJSONParsing: Fe.transitional(Fe.boolean),
      clarifyTimeoutError: Fe.transitional(Fe.boolean)
    }, !1), s != null && (w.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : It.assertOptions(s, {
      encode: Fe.function,
      serialize: Fe.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), It.assertOptions(n, {
      baseUrl: Fe.spelling("baseURL"),
      withXsrfToken: Fe.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && w.merge(
      o.common,
      o[n.method]
    );
    o && w.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (y) => {
        delete o[y];
      }
    ), n.headers = Ae.concat(i, o);
    const l = [];
    let h = !0;
    this.interceptors.request.forEach(function(A) {
      typeof A.runWhen == "function" && A.runWhen(n) === !1 || (h = h && A.synchronous, l.unshift(A.fulfilled, A.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(A) {
      c.push(A.fulfilled, A.rejected);
    });
    let f, x = 0, b;
    if (!h) {
      const y = [ln.bind(this), void 0];
      for (y.unshift(...l), y.push(...c), b = y.length, f = Promise.resolve(n); x < b; )
        f = f.then(y[x++], y[x++]);
      return f;
    }
    b = l.length;
    let T = n;
    for (x = 0; x < b; ) {
      const y = l[x++], A = l[x++];
      try {
        T = y(T);
      } catch (E) {
        A.call(this, E);
        break;
      }
    }
    try {
      f = ln.call(this, T);
    } catch (y) {
      return Promise.reject(y);
    }
    for (x = 0, b = c.length; x < b; )
      f = f.then(c[x++], c[x++]);
    return f;
  }
  getUri(t) {
    t = Ve(this.defaults, t);
    const n = Wn(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Bn(n, t.params, t.paramsSerializer);
  }
};
w.forEach(["delete", "get", "head", "options"], function(t) {
  qe.prototype[t] = function(n, r) {
    return this.request(Ve(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
w.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, l) {
      return this.request(Ve(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  qe.prototype[t] = n(), qe.prototype[t + "Form"] = n(!0);
});
let Za = class Qn {
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
      r.reason || (r.reason = new nt(o, i, l), n(r.reason));
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
      token: new Qn(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function Ja(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function eo(e) {
  return w.isObject(e) && e.isAxiosError === !0;
}
const wr = {
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
Object.entries(wr).forEach(([e, t]) => {
  wr[t] = e;
});
function Zn(e) {
  const t = new qe(e), n = Rn(qe.prototype.request, t);
  return w.extend(n, qe.prototype, t, { allOwnKeys: !0 }), w.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Zn(Ve(e, s));
  }, n;
}
const H = Zn(wt);
H.Axios = qe;
H.CanceledError = nt;
H.CancelToken = Za;
H.isCancel = Hn;
H.VERSION = Xn;
H.toFormData = Wt;
H.AxiosError = V;
H.Cancel = H.CanceledError;
H.all = function(t) {
  return Promise.all(t);
};
H.spread = Ja;
H.isAxiosError = eo;
H.mergeConfig = Ve;
H.AxiosHeaders = Ae;
H.formToJSON = (e) => Un(w.isHTMLForm(e) ? new FormData(e) : e);
H.getAdapter = Yn.getAdapter;
H.HttpStatusCode = wr;
H.default = H;
const {
  Axios: wi,
  AxiosError: vi,
  CanceledError: Ei,
  isCancel: Ai,
  CancelToken: Ni,
  VERSION: Ti,
  all: ji,
  Cancel: Si,
  isAxiosError: Ri,
  spread: _i,
  toFormData: Ci,
  AxiosHeaders: Oi,
  HttpStatusCode: Li,
  formToJSON: Pi,
  getAdapter: Ii,
  mergeConfig: Fi
} = H;
/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */
const {
  entries: Jn,
  setPrototypeOf: un,
  isFrozen: to,
  getPrototypeOf: ro,
  getOwnPropertyDescriptor: no
} = Object;
let {
  freeze: ye,
  seal: Re,
  create: vr
} = Object, {
  apply: Er,
  construct: Ar
} = typeof Reflect < "u" && Reflect;
ye || (ye = function(t) {
  return t;
});
Re || (Re = function(t) {
  return t;
});
Er || (Er = function(t, n) {
  for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    s[o - 2] = arguments[o];
  return t.apply(n, s);
});
Ar || (Ar = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return new t(...r);
});
const _t = xe(Array.prototype.forEach), so = xe(Array.prototype.lastIndexOf), dn = xe(Array.prototype.pop), ut = xe(Array.prototype.push), ao = xe(Array.prototype.splice), Ft = xe(String.prototype.toLowerCase), ar = xe(String.prototype.toString), or = xe(String.prototype.match), dt = xe(String.prototype.replace), oo = xe(String.prototype.indexOf), io = xe(String.prototype.trim), Ce = xe(Object.prototype.hasOwnProperty), pe = xe(RegExp.prototype.test), ft = lo(TypeError);
function xe(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    return Er(e, t, r);
  };
}
function lo(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Ar(e, n);
  };
}
function X(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ft;
  un && un(e, null);
  let r = t.length;
  for (; r--; ) {
    let s = t[r];
    if (typeof s == "string") {
      const o = n(s);
      o !== s && (to(t) || (t[r] = o), s = o);
    }
    e[s] = !0;
  }
  return e;
}
function co(e) {
  for (let t = 0; t < e.length; t++)
    Ce(e, t) || (e[t] = null);
  return e;
}
function De(e) {
  const t = vr(null);
  for (const [n, r] of Jn(e))
    Ce(e, n) && (Array.isArray(r) ? t[n] = co(r) : r && typeof r == "object" && r.constructor === Object ? t[n] = De(r) : t[n] = r);
  return t;
}
function ht(e, t) {
  for (; e !== null; ) {
    const r = no(e, t);
    if (r) {
      if (r.get)
        return xe(r.get);
      if (typeof r.value == "function")
        return xe(r.value);
    }
    e = ro(e);
  }
  function n() {
    return null;
  }
  return n;
}
const fn = ye(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ir = ye(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), lr = ye(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), uo = ye(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), cr = ye(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), fo = ye(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), hn = ye(["#text"]), mn = ye(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ur = ye(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), pn = ye(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ct = ye(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ho = Re(/\{\{[\w\W]*|[\w\W]*\}\}/gm), mo = Re(/<%[\w\W]*|[\w\W]*%>/gm), po = Re(/\$\{[\w\W]*/gm), go = Re(/^data-[\-\w.\u00B7-\uFFFF]+$/), yo = Re(/^aria-[\-\w]+$/), es = Re(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), xo = Re(/^(?:\w+script|data):/i), bo = Re(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), ts = Re(/^html$/i), wo = Re(/^[a-z][.\w]*(-[.\w]+)+$/i);
var gn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: yo,
  ATTR_WHITESPACE: bo,
  CUSTOM_ELEMENT: wo,
  DATA_ATTR: go,
  DOCTYPE_NAME: ts,
  ERB_EXPR: mo,
  IS_ALLOWED_URI: es,
  IS_SCRIPT_OR_DATA: xo,
  MUSTACHE_EXPR: ho,
  TMPLIT_EXPR: po
});
const mt = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, vo = function() {
  return typeof window > "u" ? null : window;
}, Eo = function(t, n) {
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
}, yn = function() {
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
function rs() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : vo();
  const t = (z) => rs(z);
  if (t.version = "3.3.1", t.removed = [], !e || !e.document || e.document.nodeType !== mt.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: n
  } = e;
  const r = n, s = r.currentScript, {
    DocumentFragment: o,
    HTMLTemplateElement: i,
    Node: l,
    Element: h,
    NodeFilter: c,
    NamedNodeMap: f = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: x,
    DOMParser: b,
    trustedTypes: T
  } = e, y = h.prototype, A = ht(y, "cloneNode"), E = ht(y, "remove"), p = ht(y, "nextSibling"), g = ht(y, "childNodes"), m = ht(y, "parentNode");
  if (typeof i == "function") {
    const z = n.createElement("template");
    z.content && z.content.ownerDocument && (n = z.content.ownerDocument);
  }
  let v, j = "";
  const {
    implementation: O,
    createNodeIterator: I,
    createDocumentFragment: F,
    getElementsByTagName: W
  } = n, {
    importNode: _
  } = r;
  let d = yn();
  t.isSupported = typeof Jn == "function" && typeof m == "function" && O && O.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: k,
    ERB_EXPR: q,
    TMPLIT_EXPR: Q,
    DATA_ATTR: te,
    ARIA_ATTR: ae,
    IS_SCRIPT_OR_DATA: je,
    ATTR_WHITESPACE: he,
    CUSTOM_ELEMENT: me
  } = gn;
  let {
    IS_ALLOWED_URI: S
  } = gn, D = null;
  const J = X({}, [...fn, ...ir, ...lr, ...cr, ...hn]);
  let K = null;
  const P = X({}, [...mn, ...ur, ...pn, ...Ct]);
  let L = Object.seal(vr(null, {
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
  })), N = null, B = null;
  const C = Object.seal(vr(null, {
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
  let $ = !0, Y = !0, U = !1, Z = !0, G = !1, ee = !0, re = !1, ue = !1, be = !1, _e = !1, Ne = !1, Le = !1, Xe = !0, Et = !1;
  const At = "user-content-";
  let st = !0, at = !1, Qe = {}, Pe = null;
  const Yt = X({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Lr = null;
  const Pr = X({}, ["audio", "video", "img", "source", "image", "track"]);
  let Xt = null;
  const Ir = X({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Nt = "http://www.w3.org/1998/Math/MathML", Tt = "http://www.w3.org/2000/svg", ke = "http://www.w3.org/1999/xhtml";
  let Ze = ke, Qt = !1, Zt = null;
  const fs = X({}, [Nt, Tt, ke], ar);
  let jt = X({}, ["mi", "mo", "mn", "ms", "mtext"]), St = X({}, ["annotation-xml"]);
  const hs = X({}, ["title", "style", "font", "a", "script"]);
  let ot = null;
  const ms = ["application/xhtml+xml", "text/html"], ps = "text/html";
  let ie = null, Je = null;
  const gs = n.createElement("form"), Fr = function(u) {
    return u instanceof RegExp || u instanceof Function;
  }, Jt = function() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Je && Je === u)) {
      if ((!u || typeof u != "object") && (u = {}), u = De(u), ot = // eslint-disable-next-line unicorn/prefer-includes
      ms.indexOf(u.PARSER_MEDIA_TYPE) === -1 ? ps : u.PARSER_MEDIA_TYPE, ie = ot === "application/xhtml+xml" ? ar : Ft, D = Ce(u, "ALLOWED_TAGS") ? X({}, u.ALLOWED_TAGS, ie) : J, K = Ce(u, "ALLOWED_ATTR") ? X({}, u.ALLOWED_ATTR, ie) : P, Zt = Ce(u, "ALLOWED_NAMESPACES") ? X({}, u.ALLOWED_NAMESPACES, ar) : fs, Xt = Ce(u, "ADD_URI_SAFE_ATTR") ? X(De(Ir), u.ADD_URI_SAFE_ATTR, ie) : Ir, Lr = Ce(u, "ADD_DATA_URI_TAGS") ? X(De(Pr), u.ADD_DATA_URI_TAGS, ie) : Pr, Pe = Ce(u, "FORBID_CONTENTS") ? X({}, u.FORBID_CONTENTS, ie) : Yt, N = Ce(u, "FORBID_TAGS") ? X({}, u.FORBID_TAGS, ie) : De({}), B = Ce(u, "FORBID_ATTR") ? X({}, u.FORBID_ATTR, ie) : De({}), Qe = Ce(u, "USE_PROFILES") ? u.USE_PROFILES : !1, $ = u.ALLOW_ARIA_ATTR !== !1, Y = u.ALLOW_DATA_ATTR !== !1, U = u.ALLOW_UNKNOWN_PROTOCOLS || !1, Z = u.ALLOW_SELF_CLOSE_IN_ATTR !== !1, G = u.SAFE_FOR_TEMPLATES || !1, ee = u.SAFE_FOR_XML !== !1, re = u.WHOLE_DOCUMENT || !1, _e = u.RETURN_DOM || !1, Ne = u.RETURN_DOM_FRAGMENT || !1, Le = u.RETURN_TRUSTED_TYPE || !1, be = u.FORCE_BODY || !1, Xe = u.SANITIZE_DOM !== !1, Et = u.SANITIZE_NAMED_PROPS || !1, st = u.KEEP_CONTENT !== !1, at = u.IN_PLACE || !1, S = u.ALLOWED_URI_REGEXP || es, Ze = u.NAMESPACE || ke, jt = u.MATHML_TEXT_INTEGRATION_POINTS || jt, St = u.HTML_INTEGRATION_POINTS || St, L = u.CUSTOM_ELEMENT_HANDLING || {}, u.CUSTOM_ELEMENT_HANDLING && Fr(u.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (L.tagNameCheck = u.CUSTOM_ELEMENT_HANDLING.tagNameCheck), u.CUSTOM_ELEMENT_HANDLING && Fr(u.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (L.attributeNameCheck = u.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), u.CUSTOM_ELEMENT_HANDLING && typeof u.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (L.allowCustomizedBuiltInElements = u.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), G && (Y = !1), Ne && (_e = !0), Qe && (D = X({}, hn), K = [], Qe.html === !0 && (X(D, fn), X(K, mn)), Qe.svg === !0 && (X(D, ir), X(K, ur), X(K, Ct)), Qe.svgFilters === !0 && (X(D, lr), X(K, ur), X(K, Ct)), Qe.mathMl === !0 && (X(D, cr), X(K, pn), X(K, Ct))), u.ADD_TAGS && (typeof u.ADD_TAGS == "function" ? C.tagCheck = u.ADD_TAGS : (D === J && (D = De(D)), X(D, u.ADD_TAGS, ie))), u.ADD_ATTR && (typeof u.ADD_ATTR == "function" ? C.attributeCheck = u.ADD_ATTR : (K === P && (K = De(K)), X(K, u.ADD_ATTR, ie))), u.ADD_URI_SAFE_ATTR && X(Xt, u.ADD_URI_SAFE_ATTR, ie), u.FORBID_CONTENTS && (Pe === Yt && (Pe = De(Pe)), X(Pe, u.FORBID_CONTENTS, ie)), u.ADD_FORBID_CONTENTS && (Pe === Yt && (Pe = De(Pe)), X(Pe, u.ADD_FORBID_CONTENTS, ie)), st && (D["#text"] = !0), re && X(D, ["html", "head", "body"]), D.table && (X(D, ["tbody"]), delete N.tbody), u.TRUSTED_TYPES_POLICY) {
        if (typeof u.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw ft('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof u.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw ft('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        v = u.TRUSTED_TYPES_POLICY, j = v.createHTML("");
      } else
        v === void 0 && (v = Eo(T, s)), v !== null && typeof j == "string" && (j = v.createHTML(""));
      ye && ye(u), Je = u;
    }
  }, Dr = X({}, [...ir, ...lr, ...uo]), Mr = X({}, [...cr, ...fo]), ys = function(u) {
    let R = m(u);
    (!R || !R.tagName) && (R = {
      namespaceURI: Ze,
      tagName: "template"
    });
    const M = Ft(u.tagName), se = Ft(R.tagName);
    return Zt[u.namespaceURI] ? u.namespaceURI === Tt ? R.namespaceURI === ke ? M === "svg" : R.namespaceURI === Nt ? M === "svg" && (se === "annotation-xml" || jt[se]) : !!Dr[M] : u.namespaceURI === Nt ? R.namespaceURI === ke ? M === "math" : R.namespaceURI === Tt ? M === "math" && St[se] : !!Mr[M] : u.namespaceURI === ke ? R.namespaceURI === Tt && !St[se] || R.namespaceURI === Nt && !jt[se] ? !1 : !Mr[M] && (hs[M] || !Dr[M]) : !!(ot === "application/xhtml+xml" && Zt[u.namespaceURI]) : !1;
  }, Ie = function(u) {
    ut(t.removed, {
      element: u
    });
    try {
      m(u).removeChild(u);
    } catch {
      E(u);
    }
  }, ze = function(u, R) {
    try {
      ut(t.removed, {
        attribute: R.getAttributeNode(u),
        from: R
      });
    } catch {
      ut(t.removed, {
        attribute: null,
        from: R
      });
    }
    if (R.removeAttribute(u), u === "is")
      if (_e || Ne)
        try {
          Ie(R);
        } catch {
        }
      else
        try {
          R.setAttribute(u, "");
        } catch {
        }
  }, kr = function(u) {
    let R = null, M = null;
    if (be)
      u = "<remove></remove>" + u;
    else {
      const oe = or(u, /^[\r\n\t ]+/);
      M = oe && oe[0];
    }
    ot === "application/xhtml+xml" && Ze === ke && (u = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + u + "</body></html>");
    const se = v ? v.createHTML(u) : u;
    if (Ze === ke)
      try {
        R = new b().parseFromString(se, ot);
      } catch {
      }
    if (!R || !R.documentElement) {
      R = O.createDocument(Ze, "template", null);
      try {
        R.documentElement.innerHTML = Qt ? j : se;
      } catch {
      }
    }
    const de = R.body || R.documentElement;
    return u && M && de.insertBefore(n.createTextNode(M), de.childNodes[0] || null), Ze === ke ? W.call(R, re ? "html" : "body")[0] : re ? R.documentElement : de;
  }, $r = function(u) {
    return I.call(
      u.ownerDocument || u,
      u,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, er = function(u) {
    return u instanceof x && (typeof u.nodeName != "string" || typeof u.textContent != "string" || typeof u.removeChild != "function" || !(u.attributes instanceof f) || typeof u.removeAttribute != "function" || typeof u.setAttribute != "function" || typeof u.namespaceURI != "string" || typeof u.insertBefore != "function" || typeof u.hasChildNodes != "function");
  }, Br = function(u) {
    return typeof l == "function" && u instanceof l;
  };
  function $e(z, u, R) {
    _t(z, (M) => {
      M.call(t, u, R, Je);
    });
  }
  const zr = function(u) {
    let R = null;
    if ($e(d.beforeSanitizeElements, u, null), er(u))
      return Ie(u), !0;
    const M = ie(u.nodeName);
    if ($e(d.uponSanitizeElement, u, {
      tagName: M,
      allowedTags: D
    }), ee && u.hasChildNodes() && !Br(u.firstElementChild) && pe(/<[/\w!]/g, u.innerHTML) && pe(/<[/\w!]/g, u.textContent) || u.nodeType === mt.progressingInstruction || ee && u.nodeType === mt.comment && pe(/<[/\w]/g, u.data))
      return Ie(u), !0;
    if (!(C.tagCheck instanceof Function && C.tagCheck(M)) && (!D[M] || N[M])) {
      if (!N[M] && Hr(M) && (L.tagNameCheck instanceof RegExp && pe(L.tagNameCheck, M) || L.tagNameCheck instanceof Function && L.tagNameCheck(M)))
        return !1;
      if (st && !Pe[M]) {
        const se = m(u) || u.parentNode, de = g(u) || u.childNodes;
        if (de && se) {
          const oe = de.length;
          for (let we = oe - 1; we >= 0; --we) {
            const Be = A(de[we], !0);
            Be.__removalCount = (u.__removalCount || 0) + 1, se.insertBefore(Be, p(u));
          }
        }
      }
      return Ie(u), !0;
    }
    return u instanceof h && !ys(u) || (M === "noscript" || M === "noembed" || M === "noframes") && pe(/<\/no(script|embed|frames)/i, u.innerHTML) ? (Ie(u), !0) : (G && u.nodeType === mt.text && (R = u.textContent, _t([k, q, Q], (se) => {
      R = dt(R, se, " ");
    }), u.textContent !== R && (ut(t.removed, {
      element: u.cloneNode()
    }), u.textContent = R)), $e(d.afterSanitizeElements, u, null), !1);
  }, Ur = function(u, R, M) {
    if (Xe && (R === "id" || R === "name") && (M in n || M in gs))
      return !1;
    if (!(Y && !B[R] && pe(te, R))) {
      if (!($ && pe(ae, R))) {
        if (!(C.attributeCheck instanceof Function && C.attributeCheck(R, u))) {
          if (!K[R] || B[R]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(Hr(u) && (L.tagNameCheck instanceof RegExp && pe(L.tagNameCheck, u) || L.tagNameCheck instanceof Function && L.tagNameCheck(u)) && (L.attributeNameCheck instanceof RegExp && pe(L.attributeNameCheck, R) || L.attributeNameCheck instanceof Function && L.attributeNameCheck(R, u)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              R === "is" && L.allowCustomizedBuiltInElements && (L.tagNameCheck instanceof RegExp && pe(L.tagNameCheck, M) || L.tagNameCheck instanceof Function && L.tagNameCheck(M)))
            ) return !1;
          } else if (!Xt[R]) {
            if (!pe(S, dt(M, he, ""))) {
              if (!((R === "src" || R === "xlink:href" || R === "href") && u !== "script" && oo(M, "data:") === 0 && Lr[u])) {
                if (!(U && !pe(je, dt(M, he, "")))) {
                  if (M)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, Hr = function(u) {
    return u !== "annotation-xml" && or(u, me);
  }, Gr = function(u) {
    $e(d.beforeSanitizeAttributes, u, null);
    const {
      attributes: R
    } = u;
    if (!R || er(u))
      return;
    const M = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: K,
      forceKeepAttr: void 0
    };
    let se = R.length;
    for (; se--; ) {
      const de = R[se], {
        name: oe,
        namespaceURI: we,
        value: Be
      } = de, et = ie(oe), tr = Be;
      let ce = oe === "value" ? tr : io(tr);
      if (M.attrName = et, M.attrValue = ce, M.keepAttr = !0, M.forceKeepAttr = void 0, $e(d.uponSanitizeAttribute, u, M), ce = M.attrValue, Et && (et === "id" || et === "name") && (ze(oe, u), ce = At + ce), ee && pe(/((--!?|])>)|<\/(style|title|textarea)/i, ce)) {
        ze(oe, u);
        continue;
      }
      if (et === "attributename" && or(ce, "href")) {
        ze(oe, u);
        continue;
      }
      if (M.forceKeepAttr)
        continue;
      if (!M.keepAttr) {
        ze(oe, u);
        continue;
      }
      if (!Z && pe(/\/>/i, ce)) {
        ze(oe, u);
        continue;
      }
      G && _t([k, q, Q], (qr) => {
        ce = dt(ce, qr, " ");
      });
      const Wr = ie(u.nodeName);
      if (!Ur(Wr, et, ce)) {
        ze(oe, u);
        continue;
      }
      if (v && typeof T == "object" && typeof T.getAttributeType == "function" && !we)
        switch (T.getAttributeType(Wr, et)) {
          case "TrustedHTML": {
            ce = v.createHTML(ce);
            break;
          }
          case "TrustedScriptURL": {
            ce = v.createScriptURL(ce);
            break;
          }
        }
      if (ce !== tr)
        try {
          we ? u.setAttributeNS(we, oe, ce) : u.setAttribute(oe, ce), er(u) ? Ie(u) : dn(t.removed);
        } catch {
          ze(oe, u);
        }
    }
    $e(d.afterSanitizeAttributes, u, null);
  }, xs = function z(u) {
    let R = null;
    const M = $r(u);
    for ($e(d.beforeSanitizeShadowDOM, u, null); R = M.nextNode(); )
      $e(d.uponSanitizeShadowNode, R, null), zr(R), Gr(R), R.content instanceof o && z(R.content);
    $e(d.afterSanitizeShadowDOM, u, null);
  };
  return t.sanitize = function(z) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, R = null, M = null, se = null, de = null;
    if (Qt = !z, Qt && (z = "<!-->"), typeof z != "string" && !Br(z))
      if (typeof z.toString == "function") {
        if (z = z.toString(), typeof z != "string")
          throw ft("dirty is not a string, aborting");
      } else
        throw ft("toString is not a function");
    if (!t.isSupported)
      return z;
    if (ue || Jt(u), t.removed = [], typeof z == "string" && (at = !1), at) {
      if (z.nodeName) {
        const Be = ie(z.nodeName);
        if (!D[Be] || N[Be])
          throw ft("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (z instanceof l)
      R = kr("<!---->"), M = R.ownerDocument.importNode(z, !0), M.nodeType === mt.element && M.nodeName === "BODY" || M.nodeName === "HTML" ? R = M : R.appendChild(M);
    else {
      if (!_e && !G && !re && // eslint-disable-next-line unicorn/prefer-includes
      z.indexOf("<") === -1)
        return v && Le ? v.createHTML(z) : z;
      if (R = kr(z), !R)
        return _e ? null : Le ? j : "";
    }
    R && be && Ie(R.firstChild);
    const oe = $r(at ? z : R);
    for (; se = oe.nextNode(); )
      zr(se), Gr(se), se.content instanceof o && xs(se.content);
    if (at)
      return z;
    if (_e) {
      if (Ne)
        for (de = F.call(R.ownerDocument); R.firstChild; )
          de.appendChild(R.firstChild);
      else
        de = R;
      return (K.shadowroot || K.shadowrootmode) && (de = _.call(r, de, !0)), de;
    }
    let we = re ? R.outerHTML : R.innerHTML;
    return re && D["!doctype"] && R.ownerDocument && R.ownerDocument.doctype && R.ownerDocument.doctype.name && pe(ts, R.ownerDocument.doctype.name) && (we = "<!DOCTYPE " + R.ownerDocument.doctype.name + `>
` + we), G && _t([k, q, Q], (Be) => {
      we = dt(we, Be, " ");
    }), v && Le ? v.createHTML(we) : we;
  }, t.setConfig = function() {
    let z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Jt(z), ue = !0;
  }, t.clearConfig = function() {
    Je = null, ue = !1;
  }, t.isValidAttribute = function(z, u, R) {
    Je || Jt({});
    const M = ie(z), se = ie(u);
    return Ur(M, se, R);
  }, t.addHook = function(z, u) {
    typeof u == "function" && ut(d[z], u);
  }, t.removeHook = function(z, u) {
    if (u !== void 0) {
      const R = so(d[z], u);
      return R === -1 ? void 0 : ao(d[z], R, 1)[0];
    }
    return dn(d[z]);
  }, t.removeHooks = function(z) {
    d[z] = [];
  }, t.removeAllHooks = function() {
    d = yn();
  }, t;
}
var Ao = rs();
const No = "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg", To = ["jpg", "jpeg", "png", "gif", "svg", "webp"], jo = ["mp4", "webm", "ogg"], So = ["txt", "json", "csv"], Ro = ["pdf"], xn = ["file", "camera", "camera2", "photo", "avatar", "attachment"];
function _o(e) {
  return e.template ? e.template : "tab";
}
const ns = (e) => /^https?:\/\//i.test(e);
function Co(e) {
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    const s = r.group || "Info";
    t[s] || (t[s] = { label: s, type: "fields", fields: [] }), t[s]?.fields?.push({ name: n, ...r });
  }), t;
}
const Oo = (e) => Object.entries(e ?? {}).filter(([, t]) => t.type === "geolocation").map(([t]) => t), Lo = (e) => e.reduce((t, n) => {
  const r = n.group || "__ungrouped__";
  return t[r] || (t[r] = []), t[r].push(n), t;
}, {}), Po = (e) => e >= 1024 * 1024 ? `${(e / (1024 * 1024)).toFixed(2)} MB` : `${(e / 1024).toFixed(0)} KB`, Io = ({
  e,
  existingFiles: t,
  maxFiles: n,
  maxFileSize: r
}) => {
  const s = e.currentTarget.files;
  if (!s) return null;
  const o = Array.from(s);
  if (t.length + o.length > n)
    return alert(`You can upload maximum ${n} file(s)`), e.currentTarget.value = "", null;
  if (r) {
    const l = Number(r), h = o.find((c) => c.size > l);
    if (h)
      return alert(
        `File "${h.name}" exceeds max size of ${Po(r)}`
      ), e.currentTarget.value = "", null;
  }
  return s;
};
async function $t() {
  if (!("geolocation" in navigator))
    throw new Error(
      "Geolocation is not supported by this browser. You cannot access this portal."
    );
  try {
    const e = await new Promise(
      (o, i) => {
        navigator.geolocation.getCurrentPosition(o, i, {
          enableHighAccuracy: !1,
          timeout: 3e4,
          maximumAge: 12e4
        });
      }
    ), {
      latitude: t,
      longitude: n,
      altitude: r,
      accuracy: s
    } = e.coords;
    return {
      latitude: t,
      longitude: n,
      altitude: r,
      accuracy: s
    };
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
function bn(e, t) {
  const n = new Set(
    t.filter((r) => r.nodb === !0 || r.nosave === !0).map((r) => r.name)
  );
  return Object.fromEntries(
    Object.entries(e).filter(([r]) => !n.has(r))
  );
}
function Bt(e, t = "create") {
  const n = {};
  return Object.keys(e).forEach((r) => {
    e[r].vmode === "edit" && t === "create" || (n[r] = {
      label: r,
      required: e[r].required ?? !1
    });
  }), n;
}
function Fo(e, t = "create") {
  return Object.entries(e).filter(([, n]) => !(n.vmode === "edit" && t === "create")).map(([n, r]) => ({
    ...r,
    name: n
  }));
}
const Ke = {
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
function Ye(e) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(e) ? e : 12;
}
const Do = (e) => {
  const t = {};
  for (const n of e) {
    const r = n.name;
    if (!r) continue;
    const s = n.ajaxchain;
    if (!s) continue;
    const o = Array.isArray(s) ? s : [s];
    for (const i of o)
      i?.target && (t[r] || (t[r] = []), t[r].push(i.target));
  }
  return t;
}, ve = (e, t) => typeof e == "string" ? e.replace(
  /#(\w+)#/g,
  (n, r) => t[r] !== void 0 ? String(t[r]) : n
) : Array.isArray(e) ? e.map((n) => ve(n, t)) : e && typeof e == "object" ? Object.fromEntries(
  Object.entries(e).map(([n, r]) => [
    ve(n, t),
    ve(r, t)
  ])
) : e, ss = (e) => {
  const t = Array.isArray(e?.data?.data) ? e.data.data[0] : Array.isArray(e?.data) ? e.data[0] : e?.data?.data ?? e?.data;
  return t && typeof t == "object" && !Array.isArray(t) ? t : null;
}, Me = (e, t, n, r) => {
  if (!Array.isArray(n) || n.length === 0) return [];
  const s = r ?? (n[0] && typeof n[0] == "object" && "category" in n[0] ? "category" : void 0);
  return n.map((o) => {
    const i = o[e], l = o[t];
    return i == null || l == null ? null : {
      value: String(i),
      label: String(l),
      group: s && o[s] ? String(o[s]) : void 0
    };
  }).filter(Boolean);
}, Ue = (e, t) => {
  const n = Dt(e.options_top), r = Dt(e.options), s = t ?? [], o = Dt(e.options_bottom), i = /* @__PURE__ */ new Set(), l = (h) => h.filter((c) => i.has(c.value) ? !1 : (i.add(c.value), !0));
  return [
    ...l(n),
    ...l(r),
    ...l(s),
    ...l(o)
  ];
};
function wn(e, t) {
  if (!t?.length) return e;
  const n = (r) => t.find((s) => String(s.value) === r)?.label;
  if (typeof e == "number")
    return n(String(e)) ?? e;
  if (typeof e == "string") {
    const s = e.split(",").map((o) => o.trim()).map(n).filter(Boolean);
    return s.length ? s.join(", ") : e;
  }
  return e;
}
const Mo = ({
  field: e,
  formValues: t
}) => {
  const n = {};
  if (typeof e.parameter == "string" && e.parameter)
    return n[e.parameter] = t[e.parameter], n;
  if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
    for (const [r, s] of Object.entries(e.parameter))
      n[r] = t?.[s];
  return n;
}, Nr = (e) => {
  if (e == null) return;
  if (typeof e == "number")
    return e;
  const t = e.trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(t))
    return t;
  const n = /* @__PURE__ */ new Date();
  switch (t.toLowerCase()) {
    case "today":
      break;
    case "tomorrow":
      n.setDate(n.getDate() + 1);
      break;
    case "yesterday":
      n.setDate(n.getDate() - 1);
      break;
    case "startofmonth":
      n.setDate(1);
      break;
    case "endofmonth":
      n.setMonth(n.getMonth() + 1, 0);
      break;
    case "startofyear":
      n.setMonth(0, 1);
      break;
    case "endofyear":
      n.setMonth(11, 31);
      break;
    default: {
      const r = t.match(/^([+-]\d+)([dmy])$/i);
      if (r) {
        const [, s, o] = r;
        if (!s || !o)
          return t;
        const i = Number(s), l = o.toLowerCase();
        return l === "d" ? n.setDate(n.getDate() + i) : l === "m" ? n.setMonth(n.getMonth() + i) : l === "y" && n.setFullYear(n.getFullYear() + i), n.toISOString().split("T")[0];
      }
      return t;
    }
  }
  return n.toISOString().split("T")[0];
}, Kt = (e) => e === !0 || e === "true", ko = (e, t, n, r) => {
  e.forEach((s) => {
    const o = s?.name;
    if (!o) return;
    let i = r?.[o];
    if (i == null && (i = s.default), xn.includes(s.type ?? ""))
      t[o] = Array.isArray(i) ? i : typeof i == "string" && i.length > 0 ? i.split(",").map((h) => h.trim()).filter(Boolean) : [];
    else if (s.multiple === !0 || s.type === "tags")
      t[o] = Array.isArray(i) ? i : typeof i == "string" ? i.split(",").map((h) => h.trim()).filter(Boolean) : [];
    else if (s.type === "checkbox")
      t[o] = String(i ?? "false");
    else if (s.type === "json")
      t[o] = typeof i == "object" && i !== null ? JSON.stringify(i, null, 2) : i ?? "";
    else if (s.type === "date") {
      const h = Nr(i);
      t[o] = typeof h == "string" && h.trim() ? h.slice(0, 10) : null;
    } else s.type === "time" ? typeof i == "string" ? i.includes("T") ? t[o] = i.slice(11, 16) : t[o] = i.slice(0, 5) : t[o] = "" : o === "blocked" || o === "blacklist" ? t[o] = String(i ?? "false") : t[o] = i ?? "";
    let l;
    if (xn.includes(s.type ?? "")) {
      const h = Se.array().of(
        Se.string()
      );
      l = s.required ? h.min(1, s.error_message || `${s.label} is required`) : h;
    } else if (s.multiple === !0 || s.type === "tags") {
      const h = Se.array().of(Se.string());
      l = s.required ? h.min(1, s.error_message || `${s.label} is required`) : h;
    } else s.type === "email" ? l = Se.string().email("Invalid email") : s.type === "number" ? l = Se.number().typeError("Must be a number") : s.type === "json" ? l = Se.string().test("json", "Invalid JSON", (h) => {
      if (!h) return !0;
      try {
        return JSON.parse(h), !0;
      } catch {
        return !1;
      }
    }) : s.type === "date" ? l = Se.string().nullable() : l = Se.string();
    s?.validate && Object.entries(s.validate).forEach(([h, c]) => {
      switch (h) {
        case "email":
          c && (l = l.email("Invalid email format"));
          break;
        case "mobile":
          l = l.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          l = l.matches(
            new RegExp(c),
            s?.error_message || `Must match pattern: ${c}`
          );
          break;
        case "date":
          l = l.nullable().test(
            "date",
            "Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)",
            (f) => {
              if (f == null || f === "") return !0;
              const x = f.replace(/-/g, "/"), [b, T, y] = x.split("/");
              if (!b || !T || !y) return !1;
              const A = /* @__PURE__ */ new Date(`${y}-${T}-${b}`);
              return !isNaN(A.getTime());
            }
          );
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
          l = Se.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          l = Se.number().typeError("Must be a decimal").transform((f, x) => {
            if (x == null || x === "") return;
            const b = Number(x);
            if (isNaN(b)) return f;
            if (typeof f == "number" && !isNaN(f)) {
              const T = Number(f);
              return Number.isInteger(T) ? Number(b.toFixed(T)) : b;
            }
            return b;
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
          const f = Number(c);
          isNaN(f) || (l = l.min(f, `Minimum length is ${f}`));
          break;
        }
        case "length-max": {
          const f = Number(c);
          isNaN(f) || (l = l.max(f, `Maximum length is ${f}`));
          break;
        }
      }
    }), s.required && (l = l.required(
      s.error_message || `${s.label || o} is required`
    )), n[o] = l;
  });
};
function $o(e) {
  if (!e || typeof e != "object") return !1;
  const t = e.src;
  return typeof e.target == "string" && typeof t == "object" && t !== null && (t.type === "api" || typeof t.queryid == "string" || typeof t.table == "string" && typeof t.columns < "u");
}
function Bo(e) {
  return e.split(",").map((t) => t.trim()).map((t) => {
    const n = t.match(/^(.+?)\s+as\s+.+$/i);
    return n ? n[1]?.trim() : t;
  }).filter((t) => !!t);
}
const zt = (e, t) => {
  if (!e || t == null) return;
  const n = String(t);
  if (typeof Object.values(e)[0] == "string")
    return e[n];
  for (const s of Object.values(e))
    if (n in s)
      return s[n];
}, zo = (e) => {
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
}, vn = (e, t = [" ", "-", "_", ".", ",", "@", "/"]) => {
  const n = t.map((s) => s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")).join(""), r = new RegExp(`[^a-zA-Z0-9${n}]`, "g");
  return e.replace(r, "");
}, Dt = (e) => e ? Array.isArray(e) ? e.map((t) => ({
  value: String(t.value),
  label: String(t.label ?? t.title ?? t.value),
  group: t.group ?? t.category ?? //  support category if present
  void 0
})) : typeof e == "object" ? Object.entries(e).map(([t, n]) => ({
  value: String(t),
  label: String(n)
})) : [] : [], Te = (e) => {
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
function Uo(e) {
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
function Ho(e = "") {
  return e.split(".").pop()?.toLowerCase() ?? "";
}
function Go(e) {
  return To.includes(e) ? "image" : jo.includes(e) ? "video" : Ro.includes(e) ? "pdf" : So.includes(e) ? "text" : "other";
}
const En = {
  image: "fa fa-file-image",
  pdf: "fa fa-file-pdf",
  video: "fa fa-file-video",
  text: "fa fa-file-lines",
  other: "fa fa-file"
}, Wo = "__form_persist__", as = (e) => `${Wo}:${e}`;
function qo(e) {
  return Ao.sanitize(e, {
    USE_PROFILES: { html: !0 }
  });
}
function Vo(e) {
  try {
    return JSON.parse(localStorage.getItem(as(e)) || "{}");
  } catch {
    return {};
  }
}
function Ko(e) {
  return e.persistent ? e.persistent === !0 ? e.name : typeof e.persistent == "string" ? e.persistent : null : null;
}
function Yo(e, t, n) {
  const r = Vo(e);
  localStorage.setItem(
    as(e),
    JSON.stringify({
      ...r,
      [t]: n
    })
  );
}
function He(e, t, n) {
  const r = Ko(t);
  r && n && Yo(n, r, e);
}
function dr(e) {
  return H.isAxiosError(e) ? e.response?.data?.message || e.message || "Something went wrong" : e instanceof Error ? e.message : typeof e == "string" ? e : "Something went wrong";
}
function fr(e) {
  return e?.data?.message ? e.data.message : e?.message ? e.message : "Operation completed successfully";
}
const os = ({
  uploads: e,
  currentValue: t,
  multiple: n
}) => {
  const r = Array.isArray(t) ? t : t ? [t] : [], s = e.map((o) => `${o.fileId}&${o.path}`);
  return [...r, ...s];
}, Xo = (e) => {
  switch (e.type) {
    case "camera2":
      return {
        accept: "image/*",
        capture: "environment"
      };
    case "camera":
    case "photo":
    case "avatar":
    default:
      return {
        accept: "image/*"
      };
  }
}, Qo = (e) => {
  switch (e.type) {
    case "camera2":
      return "fa-camera";
    // strict camera
    case "camera":
      return "fa-camera-retro";
    // optional variation
    case "photo":
    case "avatar":
    default:
      return "fa-image";
  }
}, Zo = (e) => {
  const t = e?.data;
  return Array.isArray(t?.results?.options) ? t.results.options[0] : Array.isArray(t?.data) ? t.data[0] : Array.isArray(t?.results) ? t.results[0] : Array.isArray(t) ? t[0] : t?.results ?? t;
}, Jo = ({ fileUrl: e, category: t }) => e ? t === "image" ? /* @__PURE__ */ a.jsx("img", { src: e, className: "max-h-[80vh] mx-auto" }) : t === "pdf" || t === "text" ? /* @__PURE__ */ a.jsx("iframe", { src: e, className: "w-full h-[80vh]" }) : t === "video" ? /* @__PURE__ */ a.jsx("video", { controls: !0, className: "w-full max-h-[80vh]", children: /* @__PURE__ */ a.jsx("source", { src: e }) }) : /* @__PURE__ */ a.jsxs("div", { className: "text-center p-4", children: [
  /* @__PURE__ */ a.jsx("p", { children: "Preview not available" }),
  /* @__PURE__ */ a.jsx("a", { href: e, download: !0, className: "text-blue-600 underline", children: "Download file" })
] }) : null, pt = (e) => ({
  Authorization: `Bearer ${e.accessToken}`
}), hr = async (e) => (await H.get(
  e.baseURL + e.dbopsGetHash,
  { headers: pt(e) }
)).data.refhash, mr = async (e, t) => (await H.post(
  e.baseURL + e.dbopsGetRefId,
  t,
  { headers: pt(e) }
)).data.refid, ei = {
  async fetch(e, t, n, r) {
    const s = await hr(e);
    let o = !1, i;
    n && (o = !0, i = n), o || (i = await mr(e, {
      operation: "fetch",
      source: t.source,
      fields: t.fields ?? {},
      datahash: s,
      srcid: r
    }));
    const l = { refid: i, datahash: s, refid1: e.refid };
    t.source?.refid && (l.refid1 = t.source?.refid);
    const h = await H.post(
      e.baseURL + e.dbopsFetch,
      l,
      { headers: pt(e) }
    );
    return h.data?.data ?? h.data;
  },
  async create(e, t, n) {
    const r = await hr(e), s = await mr(e, {
      operation: "create",
      source: t.source,
      fields: t.values,
      datahash: r,
      srcid: n
    });
    return (await H.post(
      e.baseURL + e.dbopsCreate,
      { refid: s, fields: t.values, datahash: r },
      { headers: pt(e) }
    )).data;
  },
  async update(e, t, n) {
    const r = await hr(e), s = await mr(e, {
      operation: "update",
      source: t.source,
      fields: t.values,
      datahash: r,
      srcid: n
    });
    return (await H.post(
      e.baseURL + e.dbopsUpdate,
      { refid: s, fields: t.values, datahash: r },
      { headers: pt(e) }
    )).data;
  }
};
async function tt(e, t, n, r = void 0, s = void 0, o = {}) {
  try {
    let i = n;
    return i || (i = (await H({
      method: "POST",
      url: e.baseURL + e.registerQuery,
      data: { query: t, srcid: s },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    })).data.queryid), await H({
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
async function ti({
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
    let h;
    if ("type" in l && l.type === "api") {
      let b = e.name;
      typeof e.parameter == "string" && e.parameter && (b = e.parameter);
      const T = { [b]: t, refid: t };
      if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
        for (const [E, p] of Object.entries(e.parameter))
          T[E] = E === b ? t : s?.[p];
      const y = {
        method: l.method || "GET",
        url: n?.baseURL + l.endpoint,
        headers: {
          Authorization: `Bearer ${n?.accessToken}`
        },
        ...l.method === "GET" ? { params: T } : { data: T }
      }, { data: A } = await H(y);
      h = A;
    } else {
      let b;
      if (!l.queryid) {
        if (!l.table || !l.columns)
          throw new Error("SQL query requires field.table");
        const y = ve(l.where ?? {}, { refid: t });
        b = {
          ...l,
          table: l.table,
          cols: l.columns,
          where: y
        };
      }
      const { data: T } = await tt(
        n,
        b,
        l.queryid,
        t
      );
      h = T;
    }
    const c = Array.isArray(h?.results?.options) ? h?.results?.options : Array.isArray(h.data) ? h.data : Array.isArray(h.results) ? h.results : h, f = Array.isArray(c) ? c.map(Te) : [], x = Me(
      e.valueKey ?? "value",
      e.labelKey ?? "title",
      f,
      e.groupKey
    );
    r(i.target, x);
  }
}
async function is(e, t) {
  let n = t.previewPath ?? "/api/files/preview";
  const r = await H.get(
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
async function ls(e, t) {
  const n = e?.uploadURL ?? "/api/files/upload";
  return Promise.all(
    Array.from(t).map(async (r) => {
      const s = new FormData();
      return s.append("file", r), (await H.post(`${e?.baseURL}${n}`, s, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${e?.accessToken}`
        }
      })).data;
    })
  );
}
async function cs(e, t) {
  let n = e?.removeFileURL ?? "/api/files/delete";
  return (await H.post(
    `${e?.baseURL}${n}`,
    { fileId: String(t) },
    {
      headers: {
        Authorization: `Bearer ${e?.accessToken}`,
        "Content-Type": "application/json"
      }
    }
  )).data;
}
function ri(e) {
  const t = En[e] ?? En.other;
  return /* @__PURE__ */ a.jsx("i", { className: `${t} text-2xl text-gray-600` });
}
const us = ({ filePath: e, sqlOpsUrls: t }) => {
  const n = e.replace(/^[^&]*&/, ""), [r, s] = le(null), [o, i] = le(!1), l = Ho(n), h = Go(l);
  ge(() => {
    if (ns(n)) {
      s(n);
      return;
    }
    if (!t || h !== "image" && !o) return;
    let f = !0, x = null;
    return is(n, t).then((b) => {
      f && (x = b, s(b));
    }), () => {
      f = !1, x && URL.revokeObjectURL(x);
    };
  }, [h, o, n, t]);
  let c = n.split("/").pop();
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    h === "image" && r ? /* @__PURE__ */ a.jsx(
      "img",
      {
        src: r,
        alt: c,
        title: "Click to preview",
        onClick: () => i(!0),
        className: "h-16 w-16 object-cover rounded  cursor-pointer hover:opacity-90"
      }
    ) : /* @__PURE__ */ a.jsxs(
      "div",
      {
        role: "button",
        tabIndex: 0,
        onClick: () => i(!0),
        onKeyDown: (f) => f.key === "Enter" && i(!0),
        className: "inline-flex cursor-pointer items-center gap-1",
        title: "Click to preview",
        children: [
          ri(h),
          /* @__PURE__ */ a.jsx("span", { className: "text-sm", children: c })
        ]
      }
    ),
    o && /* @__PURE__ */ a.jsx("div", { className: "fixed inset-0 bg-black/60 z-50 flex items-center justify-center", children: /* @__PURE__ */ a.jsxs("div", { className: "bg-white rounded-lg p-4 max-w-5xl w-full", children: [
      /* @__PURE__ */ a.jsx(
        "button",
        {
          className: "float-right text-sm",
          onClick: () => i(!1),
          children: "✕"
        }
      ),
      r ? /* @__PURE__ */ a.jsx(Jo, { fileUrl: r, category: h }) : /* @__PURE__ */ a.jsx("div", { className: "text-center p-8", children: "Loading preview…" })
    ] }) })
  ] });
};
function vt({
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
  const h = `
    text-sm text-gray-600 break-words capitalize
  `, c = `
    block text-sm font-semibold  transition-all duration-300 text-gray-700 capitalize
  `, [f, x] = le(
    Ue(e, i ?? [])
  ), b = ne.useRef(!1);
  ne.useEffect(() => {
    i && x(i);
  }, [i]);
  const T = ne.useMemo(
    () => Dt(f),
    [f]
  );
  ne.useEffect(() => {
    let m = !0, v = e.valueKey ?? "value", j = e.labelKey ?? "title";
    return (async () => {
      let I = e?.options;
      if (I && (Array.isArray(I) && I.length > 0 || !Array.isArray(I) && Object.keys(I).length > 0)) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const k = Object.values(e.options);
          if (k.length && typeof k[0] == "string") {
            x(e.options);
            return;
          }
        }
        const _ = (Array.isArray(e.options) ? e.options : [e.options]).map(Te), d = Me(
          v,
          j,
          _,
          e.groupKey
          // auto-uses `category` if present
        );
        x(d);
        return;
      }
      const F = e?.source ?? {};
      if (e.type === "dataMethod") {
        const W = e.method, _ = W ? n[W] : void 0;
        if (_)
          try {
            const d = await Promise.resolve(_()), k = Array.isArray(d.data?.results?.options) ? d.data?.results?.options : Array.isArray(d?.data?.data) ? d.data.data : Array.isArray(d.data?.results) ? d.data?.results : Array.isArray(d?.data) ? d.data : d;
            if (typeof k == "object" && !Array.isArray(k)) {
              const te = Object.values(k);
              if (te.length && typeof te[0] == "string") {
                x(k);
                return;
              }
            }
            const q = Array.isArray(k) ? k.map(Te) : [], Q = Me(v, j, q, e.groupKey);
            m && x(Q);
            return;
          } catch (d) {
            console.error("Method execution failed:", d), m && x([]);
            return;
          }
        else {
          m && x([]);
          return;
        }
      }
      if (F.type === "api" && F.endpoint)
        try {
          const W = {
            method: F.method || "GET",
            url: r?.baseURL + F.endpoint,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            },
            ...F.method === "GET" ? { params: { refid: F.refid } } : { data: { refid: F.refid } }
          }, _ = await H(W), d = Array.isArray(_.data?.results?.options) ? _.data?.results?.options : Array.isArray(_?.data?.data) ? _.data.data : Array.isArray(_.data?.results) ? _.data?.results : Array.isArray(_?.data) ? _.data : _;
          if (typeof d == "object" && !Array.isArray(d)) {
            const Q = Object.values(d);
            if (Q.length && typeof Q[0] == "string") {
              x(d);
              return;
            }
          }
          const k = Array.isArray(d) ? d.map(Te) : [], q = Me(v, j, k, e.groupKey);
          m && x(q);
          return;
        } catch (W) {
          console.error("API execution failed:", W), m && x([]);
          return;
        }
      if (e.table || e.type === "dataSelector" || e.queryid) {
        if (!r) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let W;
          if (e.type === "dataSelector")
            W = {
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
            W = {
              table: e.table,
              cols: e.columns,
              where: e.where ? s ? ve(e.where, { refid: s }) : e.where : void 0
            };
          }
          const _ = await tt(r, W, e?.queryid, void 0, o), d = Array.isArray(_?.data?.data) ? _.data.data : Array.isArray(_?.data) ? _.data : _;
          if (typeof d == "object" && !Array.isArray(d)) {
            const Q = Object.values(d);
            if (Q.length && typeof Q[0] == "string") {
              x(d);
              return;
            }
          }
          const k = Array.isArray(d) ? d.map(Te) : [], q = Me(v, j, k, e.groupKey);
          m && x(q);
        } catch (W) {
          console.error("API fetch failed:", W);
        }
      }
    })(), () => {
      m = !1;
    };
  }, [
    e.options,
    e.source,
    e.table,
    e.columns,
    e.where,
    s
  ]);
  const y = e?.name ? t?.[e.name] : void 0;
  ne.useEffect(() => {
    b.current || !l || !y || (b.current = !0, ti({
      field: e,
      value: y,
      sqlOpsUrls: r,
      setFieldOptions: l,
      values: t ?? {}
    }));
  }, [y, r, l]);
  let A;
  typeof y == "string" ? e.type === "date" ? A = y.split("T")[0] : e.type === "time" ? A = y.includes("T") ? y.slice(11, 16) : y.slice(0, 5) : A = wn(y, T) : A = wn(y, T);
  const E = A == null ? "" : typeof A == "string" || typeof A == "number" ? A : JSON.stringify(A), p = Uo(y), g = e.type === "richtextarea" && typeof E == "string" ? qo(E) : null;
  return /* @__PURE__ */ a.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ a.jsx("label", { className: c, children: e?.label }),
    /* @__PURE__ */ a.jsx("div", { className: "relative", children: p ? p.type === "drawn" ? /* @__PURE__ */ a.jsx("svg", { viewBox: "0 0 300 150", className: "h-24 w-full border bg-white rounded", children: p.paths.map((m, v) => /* @__PURE__ */ a.jsx(
      "path",
      {
        d: m.d,
        stroke: m.color || "#000",
        strokeWidth: m.width || 2,
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      v
    )) }) : p.type === "text" ? /* @__PURE__ */ a.jsx("svg", { viewBox: "0 0 300 150", className: "h-24 w-full border bg-white rounded", children: /* @__PURE__ */ a.jsx(
      "text",
      {
        x: "10",
        y: "100",
        fontSize: p.data.style?.fontSize || 32,
        fontFamily: p.data.style?.fontFamily || "cursive",
        fill: p.data.style?.textColor || "#000",
        children: p.data.text
      }
    ) }) : p.type === "html" ? /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "border bg-white rounded p-2 text-sm",
        dangerouslySetInnerHTML: { __html: p.html }
      }
    ) : /* @__PURE__ */ a.jsx(
      "img",
      {
        src: p.src,
        alt: "signature",
        className: "h-24 object-contain border bg-white rounded"
      }
    ) : (e.type === "file" || e.type === "camera" || e.type === "camera2" || e.type === "attachement" || e.type === "photo" || e.type === "avatar") && A ? /* @__PURE__ */ a.jsx("div", { className: "flex flex-wrap gap-2", children: String(A).split(",").map((m) => m.trim()).filter(Boolean).map((m) => /* @__PURE__ */ a.jsx(
      us,
      {
        sqlOpsUrls: r,
        filePath: m
      },
      m
    )) }) : e.type === "richtextarea" ? /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "tiptap border border-gray-200 min-h-[400px] max-h-[220px] overflow-auto bg-white rounded p-2 text-sm",
        dangerouslySetInnerHTML: { __html: g ?? "" }
      }
    ) : /* @__PURE__ */ a.jsx("p", { className: h, children: E }) })
  ] });
}
function ds({ filePath: e, field_name: t, sqlOpsUrls: n }) {
  const [r, s] = le(null), o = e.replace(/^[^&]*&/, "");
  return ge(() => {
    if (ns(o)) {
      s(o);
      return;
    }
    if (!open || !n) return;
    let i = !0, l = null;
    return is(o, n).then((h) => {
      i && (l = h, s(h));
    }), () => {
      i = !1, l && URL.revokeObjectURL(l);
    };
  }, [open, o, n]), r ? /* @__PURE__ */ a.jsx(
    "img",
    {
      src: r,
      alt: t,
      title: t,
      className: "h-24 w-24 object-cover rounded border border-dashed   hover:opacity-90",
      onError: (i) => {
        const l = i.currentTarget;
        l.onerror = null, l.src = No;
      }
    }
  ) : null;
}
function ni({
  commonInfo: e,
  infoData: t,
  hiddenFields: n = [],
  sqlOpsUrls: r,
  setFieldOptions: s,
  fieldOptions: o,
  module_refid: i,
  refid: l,
  methods: h
}) {
  const c = Ot(
    () => e?.fields?.find((b) => b.type === "avatar"),
    [e?.fields]
  ), f = c?.name, x = f && typeof t?.[f] == "string" ? t[f].trim() : "";
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white border border-gray-100 p-4 min-h-3/10 overflow-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    c && /* @__PURE__ */ a.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ a.jsx("div", { className: "relative w-42 h-42 p-2 rounded-sm overflow-hidden bg-gray-100 flex items-center justify-center", children: x ? /* @__PURE__ */ a.jsx(
      ds,
      {
        field_name: c.name,
        filePath: x,
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
    /* @__PURE__ */ a.jsx("div", { className: `min-h-0 max-h-40 overflow-y-auto custom-scrollbar ${c ? "lg:col-span-10" : "lg:col-span-12"}`, children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: e.fields?.map((b, T) => n.includes(b.name) || b.type === "avatar" ? null : /* @__PURE__ */ a.jsx("div", { className: `hover:bg-gray-100 transition-colors duration-200 col-span-12 sm:col-span-6 ${Ke[Ye(Number(b.width))] || "lg:col-span-4"}`, children: /* @__PURE__ */ a.jsx(
      vt,
      {
        field: b,
        data: t ?? {},
        sqlOpsUrls: r,
        methods: h,
        refid: l,
        module_refid: i,
        setFieldOptions: s,
        ...o[b.name] ? { optionsOverride: o[b.name] } : {}
      },
      b?.name
    ) }, b.name)) }) })
  ] }) });
}
function Rr({ tabObj: e, methods: t, tabName: n, sqlOpsUrls: r, refid: s, module_refid: o, setFieldOptions: i, fieldOptions: l }) {
  const [h, c] = ne.useState(null);
  return ne.useEffect(() => {
    let f = !1;
    return (async () => {
      const b = e?.config;
      if (!b?.type) {
        f || c(null);
        return;
      }
      if (b.type === "method") {
        const T = b.method, y = T ? t[T] : void 0;
        if (y)
          try {
            const A = await Promise.resolve(y());
            f || c(A || null);
          } catch (A) {
            console.error("Method execution failed:", A), f || c(null);
          }
        else
          f || c(null);
      }
      if (b.type === "api")
        try {
          const T = await H({
            method: b.method || "GET",
            // GET, POST, etc.
            url: b.url,
            data: b.body || {},
            // request body
            params: b.params || {},
            // query params
            headers: b.headers || {}
            // optional headers
          });
          f || c(T.data || null);
        } catch (T) {
          console.error("API fetch failed:", T), f || c(null);
        }
      if (b.type === "sql" && s && s != "0" || b?.dbopsid) {
        if (!r) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let T = !1, y;
          b?.dbopsid && (T = !0, y = b?.dbopsid);
          const A = await H({
            method: "GET",
            url: r.baseURL + r.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            }
          });
          if (!T) {
            let g = {
              ...b
            };
            b.where && (g = {
              ...b,
              where: ve(b.where, {
                refid: s
              })
            }), y = (await H({
              method: "POST",
              url: r.baseURL + r.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: g,
                fields: Bt(b.fields, r.operation),
                forcefill: b.forcefill,
                datahash: A.data.refhash,
                srcid: o
              },
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              }
            }))?.data.refid;
          }
          const E = await H({
            method: "POST",
            url: r.baseURL + r.dbopsFetch,
            data: {
              refid: y,
              datahash: A.data.refhash
            },
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            }
          }), p = ss(E);
          f || c(p);
        } catch (T) {
          console.error("API fetch failed:", T);
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
  ]), /* @__PURE__ */ a.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: h ? Object.keys(h).map((f, x) => {
    let b = { name: f, label: f };
    return /* @__PURE__ */ a.jsx(
      "div",
      {
        className: `col-span-12 sm:col-span-6 ${Ke[Ye(e.width)] || "lg:col-span-2"}`,
        children: /* @__PURE__ */ a.jsx(
          vt,
          {
            field: b,
            data: h ?? {},
            methods: t,
            refid: s,
            sqlOpsUrls: r,
            setFieldOptions: i,
            ...l[b.name] ? { optionsOverride: l[b.name] } : {}
          },
          f
        )
      },
      `field-${x}`
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
function si({
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
function ai({
  field: e,
  formik: t,
  methods: n = {},
  sqlOpsUrls: r,
  refid: s,
  module_refid: o = "menuManager.main",
  optionsOverride: i,
  setFieldOptions: l,
  chainMap: h
}) {
  const [c, f] = le(!1), [x, b] = le(!1), [T, y] = le(
    Ue(e, i ?? [])
  ), [A, E] = le(0), [p, g] = le(""), [m, v] = le(0), j = We(null), O = We(null), [I, F] = le(!1), W = We(p), _ = e.disabled === !0;
  ge(() => {
    W.current = p;
  }, [p]), ge(() => {
    if (e.type !== "select" || e.multiple || e["no-option"] !== "false" || t.values[d] || T.length === 0) return;
    const B = T[0]?.value;
    B != null && t.setFieldValue(d, B, !1);
  }, [T]), ge(() => {
    i && y(Ue(e, i));
  }, [i]), ge(() => {
    window.formAPI = {
      setValue: (N, B) => {
        t.setFieldValue(N, B);
      },
      getValue: (N) => t.values[N],
      setValues: (N) => {
        Object.entries(N).forEach(([B, C]) => {
          t.setFieldValue(B, C);
        });
      },
      getValues: () => t.values
    }, window.setFieldValue = (N, B) => {
      t.setFieldValue(N, B);
    };
  }, [t]), ge(() => {
    if (!I) return;
    const N = (B) => {
      const C = B.target;
      O.current?.contains(C) || j.current?.contains(C) || (F(!1), g(""));
    };
    return document.addEventListener("mousedown", N), () => {
      document.removeEventListener("mousedown", N);
    };
  }, [I]);
  const d = e.name;
  ge(() => {
    let N = !0;
    return (async () => {
      let C = e.valueKey ?? "value", $ = e.labelKey ?? "title";
      const Y = e?.source ?? {};
      if (e.type === "dataMethod") {
        const U = e.method, Z = U ? n[U] : void 0;
        if (Z)
          try {
            const G = await Z(), ee = Array.isArray(G.data?.results?.options) ? G.data?.results?.options : Array.isArray(G?.data?.data) ? G.data.data : Array.isArray(G.data?.results) ? G.data?.results : Array.isArray(G?.data) ? G.data : G, re = Array.isArray(ee) ? ee.map(Te) : [], ue = Me(C, $, re, e.groupKey);
            N && y(Ue(e, ue));
            return;
          } catch (G) {
            console.error("Method execution failed:", G), N && y([]);
            return;
          }
        else {
          N && y([]);
          return;
        }
      }
      if (Y.type === "api" && Y.endpoint)
        try {
          let U = {};
          if (Y.refid && (U.refid = Y.refid), e.parameter) {
            const be = Mo({ field: e, formValues: t.values });
            console.log("paramsssssss", e.name, be), console.log("payload", U), U = { ...U, ...be };
          }
          const Z = {
            method: Y.method || "GET",
            url: r?.baseURL + Y.endpoint,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            },
            ...Y.method === "GET" ? { params: { refid: Y.refid } } : { data: U }
          }, G = await H(Z), ee = Array.isArray(G.data?.results?.options) ? G.data?.results?.options : Array.isArray(G?.data?.data) ? G.data.data : Array.isArray(G.data?.results) ? G.data?.results : Array.isArray(G?.data) ? G.data : G, re = Array.isArray(ee) ? ee.map(Te) : [], ue = Me(C, $, re, e.groupKey);
          N && y(Ue(e, ue));
          return;
        } catch (U) {
          console.error("API execution failed:", U), N && y([]);
          return;
        }
      if (e.table || e.type === "dataSelector" || e.queryid) {
        if (!r) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let U;
          if (e.type === "dataSelector")
            U = {
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
            U = {
              table: e.table,
              cols: e.columns,
              where: e.where ? s ? ve(e.where, { refid: s }) : e.where : void 0
            };
          }
          const Z = await tt(r, U, e?.queryid, void 0, o), G = Array.isArray(Z?.data?.data) ? Z.data.data : Array.isArray(Z?.data) ? Z.data : Z, ee = Array.isArray(G) ? G.map(Te) : [], re = Me(C, $, ee, e.groupKey);
          N && y(Ue(e, re));
        } catch (U) {
          console.error("API fetch failed:", U);
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
    s,
    e.queryid,
    e.groupKey,
    e.valueKey,
    e.labelKey,
    A
  ]);
  const k = `
  w-full px-4 py-2 rounded-lg border transition-all duration-300
  backdrop-blur-sm text-gray-800 placeholder-gray-400
  focus:outline-none focus:ring-0

  ${_ ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:shadow-md"}
`, q = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, Q = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, te = Ot(
    () => zo(T),
    [T]
  ), ae = Ot(() => {
    if (!e.type || !["suggest", "autosuggest", "autocomplete"].includes(e.type) || !p.trim()) return null;
    const N = p.trim().toLowerCase();
    return te.find(([, B]) => B.trim().toLowerCase() === N);
  }, [e.type, p, te]), je = te.length, he = !!(e.search && (e.queryid || e.table)), me = Ot(() => he || !p ? te : te.filter(
    ([, N]) => N.toLowerCase().includes(p.toLowerCase())
  ), [he, p, te]), S = (N, B) => {
    if (I)
      if (N.key === "ArrowDown")
        N.preventDefault(), v(
          (C) => C + 1 < me.length ? C + 1 : 0
        );
      else if (N.key === "ArrowUp")
        N.preventDefault(), v(
          (C) => C - 1 >= 0 ? C - 1 : me.length - 1
        );
      else if (N.key === "Enter") {
        N.preventDefault();
        const [C] = me[m] || [];
        if (C) {
          let $ = B ? C : [...t.values[e.name], C];
          t.setFieldValue(e.name, $), He($, e, o);
        }
        F(!1);
      } else N.key === "Escape" && (g(""), F(!1));
  };
  ge(() => {
    j.current?.querySelector(
      `[data-index="${m}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [m]), ge(() => {
    m >= me.length && v(0);
  }, [me, m]), ge(() => {
    const N = e.autocomplete, B = e.ajaxchain;
    if (!N && !B) return;
    const C = t.values[e.name];
    if (!C) return;
    const $ = Array.isArray(B) ? B : B ? [B] : [];
    (async () => {
      try {
        if ($o(N)) {
          const U = N.src;
          if (!U || !r) return;
          let Z;
          if ("type" in U && U.type === "api") {
            let ee = e.name;
            typeof e.parameter == "string" && e.parameter && (ee = e.parameter);
            const re = { [ee]: C, refid: C };
            if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
              for (const [_e, Ne] of Object.entries(e.parameter))
                re[_e] = _e === ee ? C : t.values?.[Ne];
            const ue = {
              method: U.method || "GET",
              url: r?.baseURL + U.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...U.method === "GET" ? { params: re } : { data: re }
            }, be = await H(ue);
            Z = Zo(be);
          } else {
            let ee;
            if (!U.queryid) {
              if (!U.table || !U.columns)
                throw new Error("SQL query requires field.table");
              const ue = ve(U?.where ?? {}, {
                refid: C
              });
              ee = {
                ...U,
                table: U.table,
                cols: U.columns,
                where: ue
              };
            }
            const { data: re } = await tt(r, ee, U?.queryid, C, o);
            Z = Array.isArray(re?.data?.data) ? re.data.data[0] : Array.isArray(re?.data) ? re.data[0] : re?.data;
          }
          let G = Te(Z);
          G && N.target.split(",").map((ee) => ee.trim()).forEach((ee) => {
            G[ee] !== void 0 && t.setFieldValue(ee, G[ee]);
          });
        }
        for (const U of $) {
          const Z = U.src;
          if (!U || typeof U != "object" || !Z || typeof Z != "object" || !r) continue;
          let G;
          if ("type" in Z && Z.type === "api") {
            let Ne = e.name;
            typeof e.parameter == "string" && e.parameter && (Ne = e.parameter);
            let Le = { [Ne]: C, refid: C };
            if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
              for (const [At, st] of Object.entries(e.parameter))
                Le[At] = At === Ne ? C : t.values?.[st];
            const Xe = {
              method: Z.method || "GET",
              url: r?.baseURL + Z.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...Z.method === "GET" ? { params: Le } : { data: Le }
            }, { data: Et } = await H(Xe);
            G = Et;
          } else {
            let Ne;
            if (!Z.queryid) {
              if (!Z.table || !Z.columns)
                throw new Error("SQL query requires field.table");
              const Xe = ve(Z?.where ?? {}, {
                refid: C
              });
              Ne = {
                ...Z,
                table: Z.table,
                cols: Z.columns,
                where: Xe
              };
            }
            const { data: Le } = await tt(r, Ne, Z?.queryid, C, o);
            G = Le;
          }
          let ee = e.valueKey ?? "value", re = e.labelKey ?? "title";
          const ue = Array.isArray(G?.results?.options) ? G?.results?.options : Array.isArray(G.data) ? G.data : Array.isArray(G.results) ? G.results : G, be = Array.isArray(ue) ? ue.map(Te) : [], _e = Me(
            ee,
            re,
            be,
            e.groupKey
          );
          t.setFieldValue(U.target, t.initialValues[U.target]), l?.(U.target, _e);
        }
      } catch (U) {
        console.error("Autocomplete / AjaxChain fetch failed", U);
      }
    })();
  }, [t.values[e.name]]), ge(() => {
    if (!he || !p.trim() || !r) return;
    const N = Bo(e.columns ?? ""), B = new AbortController(), C = setTimeout(async () => {
      try {
        let $;
        if (!e.queryid) {
          if (!e.table || !e.cols)
            throw new Error("SQL query requires field.table");
          const be = s ? ve(e.where ?? {}, {
            refid: s
          }) : e.where;
          $ = {
            ...e,
            table: e.table,
            cols: e.columns || e.cols,
            where: be
          };
        }
        let Y = {};
        Array.isArray(N) && N.forEach((be) => {
          Y[be] = [p, "LIKE"];
        });
        let U = e.valueKey ?? "value", Z = e.labelKey ?? "title";
        const { data: G } = await tt(r, $, e?.queryid, void 0, o, Y), ee = Array.isArray(G?.data?.data) ? G.data.data : Array.isArray(G?.data) ? G.data : G, re = Array.isArray(ee) ? ee.map(Te) : [], ue = Me(
          U,
          Z,
          re,
          e.groupKey
        );
        y(Ue(e, ue));
      } catch ($) {
        if (H.isCancel($)) return;
        console.error("Search fetch failed", $);
      }
    }, 500);
    return () => {
      clearTimeout(C), B.abort();
    };
  }, [he, p, s]);
  const D = async (N) => {
    if (N.length === 0) {
      console.error("No file");
      return;
    }
    try {
      const B = await ls(r, N), C = os({
        uploads: B,
        currentValue: t.values[d],
        multiple: e.multiple ?? !1
      });
      t.setFieldValue(
        d,
        C
      ), He(C, e, o);
    } catch (B) {
      console.error("File upload failed", B), t.setFieldError(d, "File upload failed");
    }
  }, J = async (N) => {
    const B = Array.isArray(t.values[d]) ? t.values[d] : [], C = N.split("&")[0];
    if (!C) return;
    const $ = B.filter((Y) => Y.split("&")[0] !== C);
    t.setFieldValue(d, $);
    try {
      await cs(r, C), He($, e, o);
    } catch (Y) {
      console.log(Y), t.setFieldValue(d, B), window.alert("Failed to delete file due to a technical issue. Please try again.");
    }
  }, K = async (N, B, C) => {
    const $ = B[N];
    if (!$) return;
    const Y = n?.[$];
    if (typeof Y != "function") {
      console.error(`Method "${String($)}" not found`);
      return;
    }
    try {
      await Promise.resolve(Y(C));
    } catch (U) {
      console.error(`Method "${String($)}" failed`, U);
    }
  };
  return {
    setHighlightedIndex: v,
    executeFieldMethod: K,
    handleFileUpload: D,
    handleKeyDown: S,
    setSearch: g,
    setOpen: F,
    setIsFocused: f,
    handleInputChange: (N) => {
      if (_) return;
      const B = N.target.value;
      g(B), v(0), B.trim() ? F(!0) : (F(!1), t.setFieldValue(d, ""));
    },
    handleSelect: (N) => {
      t.setFieldValue(d, N), He(N, e, o), g(""), F(!1), K("onChange", e, `${d}-${N}`);
    },
    handlePersist: He,
    setLoading: b,
    removeFile: J,
    optionCount: je,
    baseInputClasses: k,
    focusClasses: q,
    labelClasses: Q,
    search: p,
    highlightedIndex: m,
    options: T,
    isDisabled: _,
    key: d,
    filteredOptions: me,
    open: I,
    listRef: j,
    isFocused: c,
    exactMatch: ae,
    triggerRef: O,
    loading: x,
    refreshOptions: () => E((N) => N + 1)
  };
}
function _r({
  anchorRef: e,
  open: t,
  children: n,
  offset: r = 4,
  maxHeight: s = 240
}) {
  const [o, i] = le({}), l = We(null);
  return bs(() => {
    if (!t || !e.current || !l.current) return;
    const h = e.current, c = () => {
      const x = h.getBoundingClientRect(), b = window.innerHeight, T = l.current?.offsetHeight || s, y = b - x.bottom, A = x.top, p = y < T && A > y ? x.top - T - r : x.bottom + r;
      i({
        position: "fixed",
        top: p,
        left: x.left,
        width: x.width,
        maxHeight: s,
        overflowY: "auto",
        zIndex: 9999
      });
    };
    c();
    const f = requestAnimationFrame(c);
    return window.addEventListener("scroll", c, !0), window.addEventListener("resize", c), () => {
      cancelAnimationFrame(f), window.removeEventListener("scroll", c, !0), window.removeEventListener("resize", c);
    };
  }, [t, e, r, s]), t ? vs(
    /* @__PURE__ */ a.jsx("div", { ref: l, style: o, children: n }),
    document.body
  ) : null;
}
function An({
  field: e,
  isDisabled: t,
  handleKeyDown: n,
  labelClasses: r,
  listRef: s,
  search: o,
  filteredOptions: i,
  highlightedIndex: l,
  setSearch: h,
  formik: c,
  executeFieldMethod: f,
  handlePersist: x,
  module_refid: b,
  options: T,
  triggerRef: y,
  open: A,
  setOpen: E
}) {
  const p = e.name;
  return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ a.jsx(
      "input",
      {
        type: "hidden",
        name: p,
        value: JSON.stringify(c.values[p] ?? "")
      }
    ),
    /* @__PURE__ */ a.jsxs("label", { className: r, children: [
      e.label,
      e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        id: p,
        className: `
        relative w-full select-none border rounded-lg px-4 py-2.5 flex justify-between items-center
        ${t ? "opacity-70 bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 cursor-pointer"}
      `,
        ref: y,
        tabIndex: 0,
        onClick: () => {
          t || E((g) => !g);
        },
        onKeyDown: (g) => {
          t || n(g, !0);
        },
        children: [
          /* @__PURE__ */ a.jsx("span", { className: "text-sm text-gray-700", children: c.values[p] ? zt(T, c.values[p]) ?? "Select option" : `Select ${e.label}` }),
          c.values[p] && /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              onClick: (g) => {
                g.preventDefault(), g.stopPropagation(), c.setFieldValue(p, ""), E(!1), x("", e, b), h("");
              },
              className: "absolute right-10 text-gray-500 hover:text-red-500 transition-colors",
              children: /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-xmark text-xs" })
            }
          ),
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
    /* @__PURE__ */ a.jsx(_r, { anchorRef: y, open: A, children: /* @__PURE__ */ a.jsxs(
      "div",
      {
        ref: s,
        className: " w-full border border-gray-200 rounded-lg bg-white shadow-md  max-h-60 overflow-y-auto p-2",
        children: [
          e.search && /* @__PURE__ */ a.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "text",
              value: o,
              onChange: (g) => {
                h(g.target.value);
              },
              onKeyDown: (g) => n(g, !0),
              placeholder: "Search...",
              className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                      bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                      focus:outline-none focus:ring-0`
            }
          ) }),
          i.length > 0 ? i.map(([g, m], v) => /* @__PURE__ */ a.jsx(
            "div",
            {
              id: `${p}-${g}`,
              "data-index": v,
              onClick: (j) => {
                j.preventDefault(), j.stopPropagation(), c.setFieldValue(p, g), x(g, e, b), E(!1), h(""), f("onChange", e, `${p}-${g}`);
              },
              className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                            ${c.values[p] === g ? "bg-indigo-50 text-indigo-600 font-medium" : l === v ? "bg-gray-100" : "hover:bg-gray-50"}`,
              children: m
            },
            g
          )) : /* @__PURE__ */ a.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
        ]
      }
    ) }),
    c.touched[p] && c.errors[p] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(c.errors[p]) })
  ] });
}
function Nn({
  field: e,
  isDisabled: t,
  handleKeyDown: n,
  valueArray: r,
  labelClasses: s,
  listRef: o,
  search: i,
  filteredOptions: l,
  highlightedIndex: h,
  setSearch: c,
  formik: f,
  executeFieldMethod: x,
  handlePersist: b,
  module_refid: T,
  options: y,
  triggerRef: A,
  open: E,
  setOpen: p
}) {
  const g = e.name;
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
          p((m) => !m);
        },
        onKeyDown: (m) => {
          t || n(m, !1);
        },
        onBlur: () => {
          e.multiple || setTimeout(() => {
            p(!1), c("");
          }, 150);
        },
        children: [
          /* @__PURE__ */ a.jsx("span", { className: "text-sm text-gray-700", children: r?.length > 0 ? r.map((m) => zt(y, m) ?? m).join(", ") : `Select ${e.label}` }),
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
    /* @__PURE__ */ a.jsx(_r, { anchorRef: A, open: E && !t, children: /* @__PURE__ */ a.jsxs("div", { ref: o, className: " w-full border border-gray-200 rounded-lg bg-white shadow-md  max-h-60 overflow-y-auto p-2", children: [
      e.search && /* @__PURE__ */ a.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ a.jsx(
        "input",
        {
          type: "text",
          value: i,
          onChange: (m) => {
            t || c(m.target.value);
          },
          placeholder: "Search...",
          className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
        }
      ) }),
      l.length > 0 ? l.map(([m, v], j) => /* @__PURE__ */ a.jsxs(
        "label",
        {
          htmlFor: `${g}-${m}`,
          className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${r?.includes(m) ? "bg-indigo-50 text-indigo-600 font-medium" : h === j ? "bg-gray-100" : "hover:bg-gray-50"}`,
          children: [
            /* @__PURE__ */ a.jsx(
              "input",
              {
                id: `${g}-${m}`,
                type: "checkbox",
                checked: r?.includes(m),
                onChange: (O) => {
                  const I = O.target.checked ? [...r, m] : r?.filter((F) => F !== m);
                  f.setFieldValue(g, I), b(I, e, T), x("onChange", e, `${g}-${m}`);
                },
                onBlur: f.handleBlur,
                disabled: t,
                className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              }
            ),
            v
          ]
        },
        m
      )) : /* @__PURE__ */ a.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
    ] }) }),
    f.touched[g] && f.errors[g] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(f.errors[g]) })
  ] });
}
function oi({
  formik: e,
  field: t,
  sqlOpsUrls: n,
  module_refid: r
}) {
  let s = t?.name;
  const o = We(null), i = t.max !== void 0 ? Number(t.max) : 1 / 0, l = Array.isArray(e.values[s]) ? e.values[s] : e.values[s] ? [e.values[s]] : [], h = async (b) => {
    const T = b.currentTarget.files;
    if (!T?.length) return;
    const y = Array.from(b.currentTarget.files || []);
    if (l.length + y.length > i) {
      alert(`You can upload maximum ${i} file(s)`), b.currentTarget.value = "";
      return;
    }
    try {
      const E = await ls(n, T), p = os({
        uploads: E,
        currentValue: e.values[s],
        multiple: t.multiple ?? !1
      });
      e.setFieldValue(
        s,
        p
      ), He(p, t, r), b.target.value = "";
    } catch (E) {
      console.error("File upload failed", E), e.setFieldError(s, "File upload failed");
    }
  }, c = async (b) => {
    const T = Array.isArray(e.values[s]) ? e.values[s] : [], y = b.split("&")[0];
    if (!y) return;
    const A = T.filter((E) => E.split("&")[0] !== y);
    e.setFieldValue(s, A);
    try {
      if (!b.split("&")[0]) return;
      await cs(n, y), He(A, t, r);
    } catch {
      e.setFieldValue(s, T), window.alert("Failed to delete file due to a technical issue. Please try again.");
    }
  }, f = Xo(t), x = t.multiple === !0;
  return /* @__PURE__ */ a.jsxs("div", { children: [
    /* @__PURE__ */ a.jsxs("label", { className: "block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700", children: [
      t.label,
      t.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ a.jsx(
      "input",
      {
        ref: o,
        type: "file",
        className: "hidden",
        multiple: x,
        ...f,
        onChange: h
      }
    ),
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "flex flex-wrap gap-2",
        children: [
          l.length > 0 ? l.map((b) => /* @__PURE__ */ a.jsxs("div", { className: "relative group", children: [
            /* @__PURE__ */ a.jsx(
              ds,
              {
                field_name: b,
                filePath: b,
                sqlOpsUrls: n
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  c(b);
                },
                className: "absolute -top-2 -right-2 cursor-pointer bg-white text-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xl cursor-pointer transition",
                children: "×"
              }
            )
          ] }, b)) : null,
          /* @__PURE__ */ a.jsx(
            "div",
            {
              onClick: () => o.current?.click(),
              className: "w-24 h-24 flex items-center justify-center border border-dashed rounded-md bg-gray-50 hover:bg-gray-100 cursor-pointer",
              children: /* @__PURE__ */ a.jsx("i", { className: `fa-solid ${Qo(t)} text-2xl text-gray-400` })
            }
          )
        ]
      }
    ),
    e.touched[s] && e.errors[s] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[s]) })
  ] });
}
function ii({
  field: e,
  formik: t,
  methods: n = {},
  sqlOpsUrls: r,
  refid: s,
  module_refid: o = "menuManager.main",
  optionsOverride: i,
  setFieldOptions: l,
  chainMap: h
}) {
  const {
    executeFieldMethod: c,
    handleFileUpload: f,
    handleKeyDown: x,
    setSearch: b,
    setOpen: T,
    setIsFocused: y,
    handleInputChange: A,
    handleSelect: E,
    handlePersist: p,
    setLoading: g,
    removeFile: m,
    baseInputClasses: v,
    focusClasses: j,
    labelClasses: O,
    search: I,
    highlightedIndex: F,
    options: W,
    isDisabled: _,
    key: d,
    filteredOptions: k,
    open: q,
    listRef: Q,
    triggerRef: te,
    isFocused: ae,
    exactMatch: je,
    loading: he
  } = ai({
    field: e,
    formik: t,
    methods: n,
    sqlOpsUrls: r,
    refid: s,
    module_refid: o,
    chainMap: h,
    ...i && { optionsOverride: i },
    ...l && { setFieldOptions: l }
  }), me = (S) => S.icon ? /* @__PURE__ */ a.jsx("i", { className: S.icon }) : null;
  switch (e.type) {
    case "suggest":
    case "autosuggest":
    case "autocomplete": {
      const P = t.values[d] ?? "", L = I !== "" ? I : zt(W, P) ?? String(P ?? "");
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: O, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { ref: te, children: /* @__PURE__ */ a.jsx(
          "input",
          {
            className: `${v} ${j}`,
            value: L,
            placeholder: e.placeholder || "Type to search...",
            onChange: A,
            onBlur: () => {
              setTimeout(() => T(!1), 150);
            },
            onKeyDown: (N) => {
              if (N.key === "Enter") {
                if (N.preventDefault(), je) {
                  const [B] = je;
                  t.setFieldValue(d, B), p(B, e, o);
                } else I.trim() && (t.setFieldValue(d, I.trim()), p(I.trim(), e, o));
                b(""), T(!1);
                return;
              }
              x(N, !0);
            },
            disabled: _
          }
        ) }),
        /* @__PURE__ */ a.jsx(_r, { anchorRef: te, open: q && !_, children: /* @__PURE__ */ a.jsx(
          "div",
          {
            ref: Q,
            className: " w-full bg-white border rounded shadow max-h-52 overflow-y-auto",
            children: k.length > 0 && je ? k.map(([N, B], C) => /* @__PURE__ */ a.jsx(
              "div",
              {
                id: `${d}-${N}`,
                "data-index": C,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${F === C ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => E(N),
                children: B
              },
              N
            )) : /* @__PURE__ */ a.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `Press "ENTER" to ADD "${L}" ` })
          }
        ) }),
        t.touched[d] && t.errors[d] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[d]) })
      ] });
    }
    case "dataSelector":
    case "dataSelectorFromTable":
    case "dataSelectorFromUniques":
    case "dataMethod": {
      if (e.multiple === !0) {
        const P = t.values[d];
        return /* @__PURE__ */ a.jsx(
          Nn,
          {
            field: e,
            isDisabled: _,
            handleKeyDown: x,
            valueArray: P,
            labelClasses: O,
            listRef: Q,
            search: I,
            filteredOptions: k,
            highlightedIndex: F,
            setSearch: b,
            formik: t,
            executeFieldMethod: c,
            handlePersist: p,
            module_refid: o,
            options: W,
            triggerRef: te,
            open: q,
            setOpen: T
          }
        );
      }
      return /* @__PURE__ */ a.jsx(
        An,
        {
          field: e,
          isDisabled: _,
          handleKeyDown: x,
          labelClasses: O,
          listRef: Q,
          search: I,
          filteredOptions: k,
          highlightedIndex: F,
          setSearch: b,
          formik: t,
          executeFieldMethod: c,
          handlePersist: p,
          module_refid: o,
          options: W,
          triggerRef: te,
          open: q,
          setOpen: T
        }
      );
    }
    case "textarea":
      return /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: O, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ a.jsx(
            "textarea",
            {
              id: d,
              className: `${v} ${j} min-h-[120px] resize-none`,
              onFocus: () => y(!0),
              name: d,
              value: t.values[d],
              onBlur: t.handleBlur,
              onChange: (P) => {
                let L = P.target.value;
                e.alphanumeric !== !1 && (L = vn(L)), t.setFieldValue(d, L), p(L, e, o), c("onChange", e, `${d}`);
              },
              placeholder: e.placeholder,
              disabled: _
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${ae ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[d] && t.errors[d] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[d]) })
      ] }) });
    case "select":
      if (e.multiple === !0) {
        const P = t.values[d];
        return /* @__PURE__ */ a.jsx(
          Nn,
          {
            field: e,
            isDisabled: _,
            handleKeyDown: x,
            valueArray: P,
            labelClasses: O,
            listRef: Q,
            search: I,
            filteredOptions: k,
            highlightedIndex: F,
            setSearch: b,
            formik: t,
            executeFieldMethod: c,
            handlePersist: p,
            module_refid: o,
            options: W,
            triggerRef: te,
            open: q,
            setOpen: T
          }
        );
      }
      if (e.search)
        return /* @__PURE__ */ a.jsx(
          An,
          {
            field: e,
            isDisabled: _,
            handleKeyDown: x,
            labelClasses: O,
            listRef: Q,
            search: I,
            filteredOptions: k,
            highlightedIndex: F,
            setSearch: b,
            formik: t,
            executeFieldMethod: c,
            handlePersist: p,
            module_refid: o,
            options: W,
            triggerRef: te,
            open: q,
            setOpen: T
          }
        );
      const S = Lo(W);
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: O, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ a.jsxs(
            "select",
            {
              className: `${v} ${j} appearance-none ${_ ? "" : "cursor-pointer"} pr-12`,
              onFocus: () => y(!0),
              name: d,
              id: d,
              value: t.values[d],
              onBlur: t.handleBlur,
              onChange: (P) => {
                t.setFieldValue(d, P.target.value), p(P.target.value, e, o), c("onChange", e, `${d}`);
              },
              disabled: _,
              children: [
                e?.["no-option"] !== "false" && !t.values[d] && /* @__PURE__ */ a.jsx("option", { value: "", children: e?.["no-option"] || `Please select ${e.label}` }),
                t.values[d] && /* @__PURE__ */ a.jsx("option", { value: "", className: "text-gray-500", children: "Clear Selection" }),
                Object.entries(S).map(
                  ([P, L]) => P === "__ungrouped__" ? L.map((N) => /* @__PURE__ */ a.jsx("option", { value: N.value, className: "py-2", children: N.label }, N.value)) : /* @__PURE__ */ a.jsx("optgroup", { label: P, children: L.map((N) => /* @__PURE__ */ a.jsx("option", { value: N.value, children: N.label }, N.value)) }, P)
                )
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
        t.touched[d] && t.errors[d] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[d]) })
      ] });
    case "radioList":
    case "radio":
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: O, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: `flex ${W.length > 3 ? "flex-col" : ""} gap-2 ml-1`, children: W.map((P) => /* @__PURE__ */ a.jsxs(
          "label",
          {
            htmlFor: `${d}-${P.value}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  id: `${d}-${P.value}`,
                  type: "radio",
                  name: d,
                  checked: t.values[d] === P.value,
                  value: P.value,
                  onChange: (L) => {
                    t.setFieldValue(d, L.target.value), p(L.target.value, e, o), c("onChange", e, `${d}-${P.value}`);
                  },
                  onBlur: t.handleBlur,
                  disabled: _,
                  className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${_ ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                }
              ),
              P.label
            ]
          },
          P.value
        )) }),
        t.touched[d] && t.errors[d] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[d]) })
      ] });
    case "checkbox": {
      const P = e.multiple === !0, L = t.values[d];
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: O, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "flex flex-col gap-2 ml-1", children: W.map((N) => {
          const B = P ? Array.isArray(L) && L.includes(N.value) : L === N.value;
          return /* @__PURE__ */ a.jsxs(
            "label",
            {
              className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
              children: [
                /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    id: `${d}-${N.value}`,
                    type: "checkbox",
                    checked: B,
                    onChange: (C) => {
                      let $;
                      if (P) {
                        const Y = Array.isArray(L) ? L : [];
                        $ = C.target.checked ? [...Y, N.value] : Y.filter((U) => U !== N.value);
                      } else
                        $ = C.target.checked ? N.value : "false";
                      t.setFieldValue(d, $), p($, e, o), c("onChange", e, `${d}-${N.value}`);
                    },
                    onBlur: t.handleBlur,
                    disabled: _,
                    className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${_ ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                  }
                ),
                N.label
              ]
            },
            N.value
          );
        }) }),
        t.touched[d] && t.errors[d] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[d]) })
      ] });
    }
    case "tags": {
      const P = t.values[d] ?? [], L = I.trim(), N = ($) => {
        if (!_ && $ && !P.includes($)) {
          let Y = [...P, $];
          t.setFieldValue(d, Y), p(Y, e, o), b("");
        }
      }, B = ($) => {
        let Y = P.filter((U) => U !== $);
        t.setFieldValue(
          d,
          Y
        ), p(Y, e, o);
      }, C = ($) => zt(W, $) ?? $;
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: O, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: `${v} 
            flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center
            ${_ ? "pointer-events-none opacity-70" : ""}
            `,
            onClick: () => !_ && document.getElementById(`${d}-input`)?.focus(),
            children: [
              P.map(($) => /* @__PURE__ */ a.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ a.jsx("span", { className: "text-indigo-700", children: C($) }),
                    /* @__PURE__ */ a.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (Y) => {
                          Y.stopPropagation(), _ || B($);
                        },
                        onMouseDown: (Y) => Y.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                $
              )),
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  id: `${d}-input`,
                  type: "text",
                  value: I,
                  onChange: ($) => b($.target.value),
                  onKeyDown: ($) => {
                    ($.key === "Enter" || $.key === ",") && ($.preventDefault(), N(L));
                  },
                  placeholder: P.length === 0 ? e.placeholder || "Type and press Enter" : "",
                  className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                  disabled: _
                }
              )
            ]
          }
        ),
        t.touched[d] && t.errors[d] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[d]) })
      ] });
    }
    case "camera":
    case "camera2":
    case "photo":
    case "avatar":
      return /* @__PURE__ */ a.jsx(
        oi,
        {
          formik: t,
          field: e,
          sqlOpsUrls: r,
          module_refid: o
        }
      );
    case "attachment":
    case "file":
      const D = e.multiple === !0, J = e.max !== void 0 ? Number(e.max) : 1 / 0, K = Array.isArray(t.values[d]) ? t.values[d] : t.values[d] ? [t.values[d]] : [];
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: O, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative mb-1", children: [
          e.icon && /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: me(e) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: d,
              type: "file",
              accept: e.accept,
              className: `${v} ${j} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => y(!0),
              name: d,
              multiple: D,
              onChange: (P) => {
                const L = Io({
                  e: P,
                  existingFiles: K,
                  maxFiles: J,
                  maxFileSize: e.file_size
                });
                L && (L && f(L), c("onChange", e, d), P.currentTarget.value = "");
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: _
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${ae ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "flex flex-wrap gap-2", children: K.map((P) => /* @__PURE__ */ a.jsxs("div", { className: "relative group", children: [
          /* @__PURE__ */ a.jsx(
            us,
            {
              sqlOpsUrls: r,
              filePath: P
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              onClick: () => m(P),
              className: "absolute -top-2 -right-2 bg-white text-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xl cursor-pointer transition",
              children: "×"
            }
          )
        ] }, P)) }),
        t.touched[d] && t.errors[d] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[d]) })
      ] });
    case "json":
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: O, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ a.jsx(
            "textarea",
            {
              id: d,
              name: d,
              value: t.values[d],
              onChange: (P) => {
                t.setFieldValue(d, P.target.value), p(P.target.value, e, o), c("onChange", e, `${d}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: _,
              className: `${v} ${j} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${ae ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        t.touched[d] && t.errors[d] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[d]) })
      ] });
    case "date": {
      const P = Nr(e.min), L = Nr(e.max);
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: O, children: [
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
                  id: d,
                  type: "date",
                  name: d,
                  min: P,
                  max: L,
                  value: t.values[d] ?? "",
                  onChange: (N) => {
                    t.setFieldValue(d, N.target.value), p(N.target.value, e, o), c("onChange", e, `${d}`);
                  },
                  onBlur: t.handleBlur,
                  placeholder: e.placeholder,
                  disabled: _,
                  className: `${v} ${j} ${e.icon ? "pl-9" : ""}`
                }
              ),
              /* @__PURE__ */ a.jsx(
                "div",
                {
                  className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${ae ? "opacity-20" : ""}`,
                  style: { zIndex: -1, filter: "blur(8px)" }
                }
              )
            ]
          }
        ),
        t.touched[d] && t.errors[d] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[d]) })
      ] });
    }
    case "geolocation": {
      const P = t.values[d] || "", L = async () => {
        try {
          const { latitude: N, longitude: B } = await $t(), C = `${N},${B}`;
          t.setFieldValue(d, C), p(C, e, o);
        } catch (N) {
          console.error(N), t.setFieldError(d, "Failed to fetch location");
        } finally {
          g(!1);
        }
      };
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: O, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "text",
              value: P,
              readOnly: !0,
              className: `${v} ${j}`,
              placeholder: "Click to fetch location"
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              onClick: L,
              disabled: he,
              className: "absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 disabled:opacity-50",
              children: he ? /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-spinner fa-spin text-red-500" }) : /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-location-dot text-red-600 hover:text-red-700" })
            }
          )
        ] }),
        t.touched[d] && t.errors[d] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[d]) })
      ] });
    }
    case "altitude": {
      const P = t.values[d] || "", L = async () => {
        try {
          g(!0);
          const { altitude: N } = await $t();
          t.setFieldValue(d, N), p(N, e, o);
        } catch (N) {
          console.error(N), t.setFieldError(
            d,
            "Failed to fetch altitude"
          );
        } finally {
          g(!1);
        }
      };
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: O, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "text",
              value: P,
              readOnly: !0,
              className: `${v} ${j}`,
              placeholder: "Click to fetch altitude"
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              onClick: L,
              disabled: he,
              className: "absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 disabled:opacity-50",
              children: he ? /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-spinner fa-spin text-red-500" }) : /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-mountain text-blue-600 hover:text-blue-700" })
            }
          )
        ] }),
        t.touched[d] && t.errors[d] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[d]) })
      ] });
    }
    case "number":
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: O, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: me(e) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: d,
              type: "number",
              className: `${v} ${j} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => y(!0),
              name: d,
              value: t.values[d],
              onBlur: t.handleBlur,
              onChange: (P) => {
                t.setFieldValue(d, P.target.value), p(P.target.value, e, o), c("onChange", e, `${d}`);
              },
              step: e.step,
              placeholder: e.placeholder,
              disabled: _,
              min: e.min,
              max: e.max
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${ae ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[d] && t.errors[d] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[d]) })
      ] });
    default:
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: O, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: me(e) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: d,
              type: e.type || "text",
              className: `${v} ${j} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => y(!0),
              name: d,
              value: t.values[d],
              onBlur: t.handleBlur,
              onChange: (P) => {
                let L = P.target.value;
                e.alphanumeric !== !1 && (L = vn(L)), t.setFieldValue(d, L), p(L, e, o), c("onChange", e, `${d}`);
              },
              step: e.step,
              placeholder: e.placeholder,
              disabled: _,
              minLength: e.minlength,
              maxLength: e.maxlength
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${ae ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[d] && t.errors[d] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[d]) })
      ] });
  }
}
function li({
  title: e,
  fields: t,
  data: n,
  onSubmit: r = async (c) => {
  },
  onCancel: s = () => {
  },
  methods: o = {},
  sqlOpsUrls: i,
  refid: l,
  module_refid: h
}) {
  const c = Fo(t, i?.operation), [f, x] = ne.useState({}), b = (m, v) => {
    x((j) => ({
      ...j,
      [m]: v
    }));
  }, { initialValues: T, validationSchema: y } = ne.useMemo(() => {
    const m = {}, v = {};
    return c.forEach((j) => {
      ko([j], m, v, n);
    }), {
      initialValues: m,
      validationSchema: v
    };
  }, [c, n]);
  console.log("initialValues", T), console.log("flatfields", c), console.log("data", n);
  const A = ws({
    initialValues: T,
    enableReinitialize: !0,
    validationSchema: Se.object().shape(y),
    onSubmit: async (m) => {
      try {
        console.log("valuessssss", m);
        let v = bn(m, c);
        console.log("filteredValues in", v);
        const j = await r(m);
        A.resetForm();
      } catch (v) {
        console.log("error", v);
      }
    }
  });
  let E = bn(A.values, c);
  console.log("filteredValues outs", E);
  function p(m) {
    m.preventDefault(), A.resetForm();
  }
  const g = ne.useMemo(
    () => Do(c),
    [c]
  );
  return /* @__PURE__ */ a.jsx("div", { className: "relative  max-w-full ", children: /* @__PURE__ */ a.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ a.jsxs("form", { onSubmit: A.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "grid grid-flow-col auto-cols-max gap-4  overflow-x-auto", children: [
      c.map((m) => {
        const j = `${Kt(m.hidden) ? "hidden" : ""}`;
        return /* @__PURE__ */ a.jsx(
          "div",
          {
            id: `wrapper-${m.name}`,
            className: j,
            children: /* @__PURE__ */ a.jsx(
              ii,
              {
                refid: l,
                module_refid: h,
                sqlOpsUrls: i,
                chainMap: g,
                field: m,
                formik: A,
                methods: o,
                setFieldOptions: b,
                ...f[m.name] ? { optionsOverride: f[m.name] } : {}
              }
            )
          },
          m?.name
        );
      }),
      /* @__PURE__ */ a.jsxs("div", { className: "", children: [
        /* @__PURE__ */ a.jsx("div", { children: "  " }),
        /* @__PURE__ */ a.jsx("button", { type: "button", onClick: p, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Reset" }),
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
function ci({
  formJson: e,
  methods: t = {},
  onCancel: n = () => {
  },
  components: r = {},
  callback: s = () => {
  },
  initialvalues: o,
  setEditData: i,
  toast: l
}) {
  const h = e.endPoints, c = e?.source?.refid, [f, x] = ne.useState(o ?? {}), b = ne.useMemo(() => Oo(e.fields), [e.fields]);
  ne.useEffect(() => {
    let E = !0;
    return (async () => {
      try {
        const g = await $t();
        E && x((m) => ({
          ...m,
          ...Object.fromEntries(
            b.map((v) => [v, g])
          )
        }));
      } catch (g) {
        console.warn("Geo fetch failed", g);
      }
    })(), () => {
      E = !1;
    };
  }, [b]), ne.useEffect(() => {
    x(o ?? {});
  }, [o]);
  const T = ne.useCallback(
    (E) => {
      E && Object.keys(E).length > 0 && x(E);
    },
    []
  );
  ne.useEffect(() => {
    let E = !0;
    return (async () => {
      const g = e?.source ?? {};
      if (g?.type) {
        if (g.type === "method" && h?.operation !== "create") {
          const m = g.method, v = m ? t[m] : void 0;
          if (v)
            try {
              const j = await v();
              E && T(j);
            } catch (j) {
              console.error("Method execution failed:", j);
            }
        }
        if (g.type === "api" && h?.operation !== "create")
          try {
            const m = {
              method: g.method || "GET",
              url: h?.baseURL + g.endpoint,
              headers: {
                Authorization: `Bearer ${h?.accessToken}`
              },
              ...g.method === "GET" ? { params: { refid: g.refid } } : { data: { refid: g.refid } }
            }, v = await H(m);
            E && T(v.data);
          } catch (m) {
            console.error("API fetch failed:", m);
          }
        if (g.type === "sql" && g.refid && g.refid !== "0" && h?.operation !== "create" || h?.operation !== "create" && g.dbopsid) {
          if (!h) {
            console.error("SQL source requires formJson.endPoints but it is missing");
            return;
          }
          try {
            const m = await ei.fetch(h, {
              source: {
                ...g,
                table: g.table,
                columns: g.columns,
                where: ve(g.where, {
                  refid: c
                })
              },
              fields: Bt(e.fields, h.operation)
            }, g?.dbopsid, e?.module_refid);
            E && T(m);
          } catch (m) {
            console.error("API fetch failed:", m);
          }
        }
      }
    })(), () => {
      E = !1;
    };
  }, [
    h,
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.url || "",
    JSON.stringify(e?.source?.params ?? {}),
    JSON.stringify(e?.source?.body ?? {}),
    JSON.stringify(e?.source?.headers ?? {})
  ]);
  const y = async (E) => {
    const p = e?.source ?? {};
    let g = { ...E };
    if (b.length > 0) {
      const m = b.filter((v) => !E[v]);
      if (m.length > 0)
        try {
          const v = await $t();
          g = {
            ...E,
            ...Object.fromEntries(
              m.map((j) => [j, v])
            )
          };
        } catch {
          console.warn("Geo fetch failed");
        }
    }
    if (p.type === "method") {
      const m = p.method, v = m ? t[m] : void 0;
      if (v)
        try {
          const j = await v(g);
          i?.(null), s?.(j), l?.success?.(fr(j));
        } catch (j) {
          s?.(j), l?.error?.(dr(j)), console.error("Method execution failed:", j);
        }
    }
    if (p.type === "api") {
      if (!h) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const m = await H({
          method: p.method || "POST",
          url: h.baseURL + p.endpoint,
          data: g ?? {},
          headers: {
            Authorization: `Bearer ${h?.accessToken}`
          }
        });
        i?.(null), s?.(m), l?.success?.(fr(m));
      } catch (m) {
        s?.(m), l?.error?.(dr(m)), console.error("API fetch failed:", m);
      }
    }
    if (p.type === "sql") {
      const m = e.endPoints;
      if (!m) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let v = !1, j;
        p?.dbopsid && (v = !0, j = p?.dbopsid);
        const O = await H({
          method: "GET",
          url: m.baseURL + m.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${m?.accessToken}`
          }
        });
        if (!v) {
          let W = {
            ...p
          };
          p.where && (W = {
            ...p,
            where: ve(p.where, {
              refid: c
            })
          }), j = (await H({
            method: "POST",
            url: m.baseURL + m.dbopsGetRefId,
            data: {
              operation: m.operation,
              source: W,
              fields: Bt(e.fields, m.operation),
              forcefill: e.forcefill,
              datahash: O.data.refhash,
              scrid: e?.module_refid
            },
            headers: {
              Authorization: `Bearer ${m?.accessToken}`
            }
          }))?.data.refid;
        }
        let I = {
          refid: j,
          fields: g,
          datahash: O.data.refhash,
          refid1: m.refid
        };
        p?.refid && (I.refid1 = p?.refid);
        const F = await H({
          method: "POST",
          url: m.baseURL + m[m.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: I,
          headers: {
            Authorization: `Bearer ${m?.accessToken}`
          }
        });
        l?.success?.(fr(F)), i?.(null), s?.(F);
      } catch (v) {
        s?.(v), l?.error?.(dr(v)), console.error("API fetch failed:", v);
      }
    }
  }, A = {
    simple: /* @__PURE__ */ a.jsx(
      li,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: f,
        onSubmit: y,
        onCancel: n,
        methods: t,
        components: r,
        sqlOpsUrls: h,
        refid: c,
        module_refid: e?.module_refid
      }
    )
  };
  return /* @__PURE__ */ a.jsx("div", { className: "relative", children: A.simple });
}
function Cr({ tabObj: e, methods: t, tabName: n, sqlOpsUrls: r, refid: s, Reports: o, toast: i, handleAction: l, infoViewJson: h }) {
  const [c, f] = le(!1), [x, b] = le(null), [T, y] = ne.useState(0), [A, E] = ne.useState(null), p = e?.config, g = e?.config, m = g?.["popup.form"] ? "popup.form" : (g?.form, "form"), v = g?.[m] && Object.keys(g?.[m]).length > 0, j = (_) => {
    let d = Te(_.data);
    E(d);
  }, O = (_) => {
    E(_), y((d) => d + 1);
  }, I = (_) => {
    let d = Te(_.data);
    b(d), f(!0);
  }, F = async () => {
    if (x?.id) {
      if (!r) {
        window.alert("Delete configuration missing.");
        return;
      }
      try {
        let _ = e?.config;
        const d = _?.["popup.form"] ? "popup.form" : (_?.form, "form"), k = _?.[d];
        if (!k?.source) throw new Error("Form source missing");
        let q = !1, Q;
        k?.source?.dbopsid && (q = !0, Q = k?.source?.dbopsid);
        const te = await H({
          method: "GET",
          url: r.baseURL + r.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${r.accessToken}`
          }
        });
        if (!q) {
          let ae = { ...k.source, refid: x.id };
          k.source.where && (ae = {
            ...ae,
            where: ve(k.source.where, {
              refid: x?.id
            })
          }), Q = (await H({
            method: "POST",
            url: r.baseURL + r.dbopsGetRefId,
            data: {
              operation: "update",
              source: ae,
              fields: k.fields,
              forcefill: k.forcefill,
              datahash: te.data.refhash,
              scrid: h?.module_refid
            },
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            }
          }))?.data.refid;
        }
        await H({
          method: "POST",
          url: r.baseURL + r.dbopsUpdate,
          data: {
            refid: Q,
            fields: { blocked: "true" },
            datahash: te.data.refhash,
            refid1: x?.id
          },
          headers: {
            Authorization: `Bearer ${r.accessToken}`
          }
        }), window.alert("Record deleted successfully."), y((ae) => ae + 1);
      } catch (_) {
        console.error(_), window.alert("Failed to delete record. Please try again");
      } finally {
        b(null), f(!1);
      }
    }
  }, W = () => {
    b(null), f(!1);
  };
  return /* @__PURE__ */ a.jsx(a.Fragment, { children: o ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    p?.datagrid && /* @__PURE__ */ a.jsx(
      o,
      {
        methods: { ...t, deleteRecord: I, editRecord: j },
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
          endPoints: r,
          actions: { ...p?.actions, ...h?.buttons, ...h.actions },
          datagrid: p?.datagrid,
          buttons: p?.buttons,
          refresh: T
        },
        onButtonClick: l
      }
    ),
    v && /* @__PURE__ */ a.jsx(
      ci,
      {
        formJson: {
          ...g[m],
          source: {
            ...g?.[m].source,
            refid: A?.id
          },
          endPoints: {
            ...r,
            operation: A ? "update" : "create"
          },
          module_refid: h?.module_refid
        },
        toast: i,
        methods: t,
        initialvalues: A ?? {},
        setEditData: O
      }
    ),
    /* @__PURE__ */ a.jsx(
      si,
      {
        open: c,
        onConfirm: F,
        onCancel: W
      }
    )
  ] }) : /* @__PURE__ */ a.jsx("h3", { children: "Report not found" }) });
}
function Or(e, t) {
  if (!e || !t) return null;
  const n = t[e];
  if (ne.isValidElement(n))
    return n;
  if (typeof n == "function") {
    const r = n;
    return /* @__PURE__ */ a.jsx(r, {});
  }
  return null;
}
const Tn = ({ groups: e, groupNames: t, setActiveTabIndex: n, activeTabIndex: r }) => /* @__PURE__ */ a.jsx(
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
), ui = ({
  groups: e,
  groupNames: t,
  setActiveTabIndex: n,
  activeTabIndex: r,
  layoutConfig: s,
  showScrollHint: o,
  isCommonInfo: i,
  tabsNavRef: l
}) => {
  const [h, c] = le(!1), f = We(null);
  return ge(() => {
    const x = (b) => {
      f.current && !f.current.contains(b.target) && c(!1);
    };
    return document.addEventListener("mousedown", x), () => document.removeEventListener("mousedown", x);
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
            onClick: () => c(!h),
            className: "ml-1 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200",
            children: "⋮"
          }
        ),
        h && /* @__PURE__ */ a.jsx("div", { className: "absolute right-0 mt-2 w-48 max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-30", children: t.map((x, b) => /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              n(b), c(!1);
            },
            className: `w-full text-left px-3 py-2 text-sm truncate hover:bg-gray-100 ${r === b ? "bg-gray-50 font-semibold text-action" : "text-gray-700"}`,
            children: e[x]?.label || x
          },
          x
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
        children: t.length > 0 ? t.map((x, b) => /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            onClick: () => n(b),
            className: `relative cursor-pointer flex-shrink-0
            min-w-[8rem]   
            py-2 px-8
            rounded-t-lg text-xs sm:text-sm font-semibold
            transition-all duration-300 ease-out
            focus:outline-none whitespace-nowrap
            ${r === b ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
            children: /* @__PURE__ */ a.jsx("span", { className: "relative z-10 flex items-center justify-center gap-1 sm:gap-2", children: /* @__PURE__ */ a.jsx("span", { className: "truncate", children: e[x]?.label || x }) })
          },
          x
        )) : /* @__PURE__ */ a.jsx("div", { className: "py-3 px-6 text-sm text-gray-500", children: "No group available" })
      }
    ) })
  ] });
}, jn = ({
  groupNames: e,
  activeTabIndex: t,
  layoutConfig: n,
  tabObj: r,
  infoData: s,
  setActiveTabIndex: o,
  renderView: i,
  methods: l = {},
  refid: h,
  sqlOpsUrls: c,
  module_refid: f,
  fieldOptions: x,
  setFieldOptions: b,
  buttons: T,
  handleAction: y,
  components: A
}) => {
  let E = T ? Object.entries(T).filter(([m, v]) => v.groups ? v.groups.includes(e[t]) : !0) : [];
  async function p(m, v) {
    const j = l?.[m];
    if (j) {
      try {
        await j();
      } catch (O) {
        console.error("Method execution failed:", O);
      }
      return;
    }
    y?.({ [m]: v }, s);
  }
  const g = Or(r?.component, A);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "bg-white rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex-1 flex flex-col min-h-0",
      children: [
        e.length > 0 ? r?.type === "fields" && r?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: n?.fieldGridClass || "grid grid-cols-12 gap-2", children: r.fields.map((m, v) => Kt(m.hidden) ? null : /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${Ke[Ye(Number(m.width))] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ a.jsx(
              vt,
              {
                field: m,
                data: s ?? {},
                methods: l,
                refid: h,
                sqlOpsUrls: c,
                module_refid: f,
                setFieldOptions: b,
                ...x[m.name] ? { optionsOverride: x[m.name] } : {}
              }
            )
          },
          m?.name ?? `field-${v}`
        )) }) }) : r?.type === "component" && g ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: g }) : r ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: i(r, e[t] || "") }) : null : /* @__PURE__ */ a.jsx("div", { className: "flex-1 col-span-full text-center py-8 text-gray-500", children: "No data available" }),
        /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 p-3 border-t border-gray-100", children: E && E.map(([m, v]) => /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => p(m, v),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: v.label
          },
          m
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
              e.slice(0, 5).map((m, v) => /* @__PURE__ */ a.jsx(
                "div",
                {
                  className: `w-2 h-2 rounded-full transition-all duration-300 ${v === t ? "bg-action w-6" : "bg-gray-300"}`
                },
                v
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
        e.length <= 5 && /* @__PURE__ */ a.jsx("div", { className: " pt-3 border-t border-gray-100", children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
          /* @__PURE__ */ a.jsxs("span", { children: [
            "Tab ",
            t + 1,
            " of ",
            e.length
          ] }),
          /* @__PURE__ */ a.jsx("div", { className: "flex gap-1", children: e.map((m, v) => /* @__PURE__ */ a.jsx(
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
};
function Sn({
  groups: e,
  methods: t = {},
  infoData: n,
  viewRenderers: r = {},
  isCommonInfo: s,
  layoutConfig: o = {},
  viewMode: i,
  sqlOpsUrls: l,
  refid: h,
  Reports: c,
  toast: f,
  handleAction: x = () => {
  },
  infoViewJson: b,
  fieldOptions: T,
  setFieldOptions: y,
  components: A
}) {
  const [E, p] = le(0), [g, m] = le(!1), v = We(null), j = Object.keys(e);
  ge(() => {
    const q = () => {
      if (v.current) {
        const Q = v.current;
        m(Q.scrollWidth > Q.clientWidth);
      }
    };
    return q(), window.addEventListener("resize", q), () => window.removeEventListener("resize", q);
  }, [j.length]), ge(() => {
    if (v.current && j.length > 0) {
      const q = v.current.children[E];
      q && q.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [E, j.length]);
  const O = i === "tableft", I = i === "tabright", F = !O && !I, W = e[j[E] ?? ""] || null, _ = {
    single: (q, Q) => /* @__PURE__ */ a.jsx(Rr, { fieldOptions: T, setFieldOptions: y, module_refid: b.module_refid, tabObj: q, methods: t, tabName: Q, sqlOpsUrls: l, refid: h }),
    grid: (q, Q) => /* @__PURE__ */ a.jsx(
      Cr,
      {
        ...c ? { Reports: c } : {},
        toast: f,
        handleAction: x,
        tabObj: q,
        methods: t,
        tabName: Q,
        sqlOpsUrls: l,
        refid: h,
        infoViewJson: b
      }
    )
  }, d = W?.config?.uimode, k = r[d] || _[d] || (() => /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No UI mode for this type" }));
  return F ? /* @__PURE__ */ a.jsxs("div", { className: "flex-1 flex flex-col min-h-0 ", children: [
    /* @__PURE__ */ a.jsx(
      ui,
      {
        groupNames: j,
        groups: e,
        setActiveTabIndex: p,
        activeTabIndex: E,
        tabsNavRef: v,
        isCommonInfo: s,
        showScrollHint: g,
        layoutConfig: o
      }
    ),
    /* @__PURE__ */ a.jsx(
      jn,
      {
        groupNames: j,
        activeTabIndex: E,
        layoutConfig: o,
        tabObj: W,
        infoData: n,
        setActiveTabIndex: p,
        renderView: k,
        groups: e,
        methods: t,
        refid: h,
        sqlOpsUrls: l,
        module_refid: b.module_refid,
        fieldOptions: T,
        setFieldOptions: y,
        buttons: b.buttons,
        handleAction: x,
        ...A ? { components: A } : {}
      }
    )
  ] }) : /* @__PURE__ */ a.jsxs("div", { className: "flex-1 flex min-h-0", children: [
    O && /* @__PURE__ */ a.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ a.jsx(
      Tn,
      {
        groupNames: j,
        groups: e,
        setActiveTabIndex: p,
        activeTabIndex: E
      }
    ) }),
    /* @__PURE__ */ a.jsx("main", { className: "flex-1 flex flex-col min-h-0 overflow-auto", children: /* @__PURE__ */ a.jsx(
      jn,
      {
        groupNames: j,
        activeTabIndex: E,
        layoutConfig: o,
        tabObj: W,
        infoData: n,
        setActiveTabIndex: p,
        renderView: k,
        groups: e,
        methods: t,
        refid: h,
        module_refid: b.module_refid,
        sqlOpsUrls: l,
        fieldOptions: T,
        setFieldOptions: y,
        handleAction: x,
        ...A ? { components: A } : {}
      }
    ) }),
    I && /* @__PURE__ */ a.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ a.jsx(
      Tn,
      {
        groupNames: j,
        groups: e,
        setActiveTabIndex: p,
        activeTabIndex: E
      }
    ) })
  ] });
}
function di({ title: e, children: t, isFirst: n }) {
  const [r, s] = le(n);
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
function fi({
  groups: e,
  methods: t = {},
  infoData: n,
  viewRenderers: r = {},
  sqlOpsUrls: s,
  refid: o,
  Reports: i,
  toast: l,
  handleAction: h = () => {
  },
  infoViewJson: c,
  fieldOptions: f,
  setFieldOptions: x,
  components: b
}) {
  const T = {
    single: (p, g) => /* @__PURE__ */ a.jsx(
      Rr,
      {
        tabObj: p,
        methods: t,
        tabName: g,
        sqlOpsUrls: s,
        fieldOptions: f,
        setFieldOptions: x,
        refid: o,
        module_refid: c?.module_refid
      }
    ),
    grid: (p, g) => /* @__PURE__ */ a.jsx(
      Cr,
      {
        ...i ? { Reports: i } : {},
        toast: l,
        infoViewJson: c,
        handleAction: h,
        tabObj: p,
        methods: t,
        tabName: g,
        sqlOpsUrls: s,
        refid: o
      }
    )
  }, y = c?.buttons;
  let A = y ? Object.entries(y).filter(([p, g]) => !(g.groups && g.groups.length > 0)) : [];
  async function E(p, g) {
    const m = t?.[p];
    if (m) {
      try {
        await m();
      } catch (v) {
        console.error("Method execution failed:", v);
      }
      return;
    }
    h?.({ [p]: g }, n);
  }
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ a.jsx("div", { className: "mx-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "grid grid-cols-12 gap-2 min-h-0", children: [
    e && Object.entries(e).map(([p, g], m) => {
      let v = y ? Object.entries(y).filter(([O, I]) => I.groups ? I.groups.includes(p) : !1) : [];
      const j = Or(g.component, b);
      return /* @__PURE__ */ a.jsx(
        "div",
        {
          className: `col-span-12 ${Ke[Ye(Number(g.width))] || "lg:col-span-12"}`,
          children: /* @__PURE__ */ a.jsxs(di, { title: g.label, isFirst: m === 0, children: [
            g?.type === "fields" && g?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: g.fields.map((O, I) => Kt(O.hidden) ? null : /* @__PURE__ */ a.jsx(
              "div",
              {
                className: `col-span-12 sm:col-span-6 ${Ke[Ye(Number(O.width))] || "lg:col-span-2"}`,
                children: /* @__PURE__ */ a.jsx(
                  vt,
                  {
                    module_refid: c?.module_refid,
                    methods: t,
                    field: O,
                    data: n ?? {},
                    setFieldOptions: x,
                    ...f[O.name] ? { optionsOverride: f[O.name] } : {},
                    sqlOpsUrls: s,
                    refid: o
                  }
                )
              },
              O?.name ?? `field-${I}`
            )) }) }) : g?.type === "component" && j ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: j }) : g ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: r[g.config?.uimode]?.(g) || T[g.config?.uimode]?.(g, p) || /* @__PURE__ */ a.jsx("div", { children: "No renderer for this type" }) }) : null,
            /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: v && v.map(([O, I]) => /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: () => E(O, I),
                className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
                children: I.label
              },
              O
            )) })
          ] }, p)
        },
        p
      );
    }),
    A && /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 p-3 border-t border-gray-100", children: A.map(([p, g]) => /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => E(p, g),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: g.label
      },
      p
    )) })
  ] }) }) });
}
function hi({ title: e, children: t }) {
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
function mi({
  groups: e,
  methods: t = {},
  infoData: n,
  viewRenderers: r = {},
  sqlOpsUrls: s,
  refid: o,
  Reports: i,
  toast: l,
  handleAction: h = () => {
  },
  infoViewJson: c,
  fieldOptions: f,
  setFieldOptions: x,
  components: b
}) {
  const T = {
    single: (p, g) => /* @__PURE__ */ a.jsx(Rr, { fieldOptions: f, setFieldOptions: x, module_refid: c?.module_refid, tabObj: p, methods: t, tabName: g, sqlOpsUrls: s, refid: o }),
    grid: (p, g) => /* @__PURE__ */ a.jsx(
      Cr,
      {
        ...i ? { Reports: i } : {},
        toast: l,
        handleAction: h,
        tabObj: p,
        methods: t,
        tabName: g,
        sqlOpsUrls: s,
        refid: o,
        infoViewJson: c
      }
    )
  }, y = c?.buttons;
  let A = y ? Object.entries(y).filter(([p, g]) => !(g.groups && g.groups.length > 0)) : [];
  async function E(p, g) {
    const m = t?.[p];
    if (m) {
      try {
        await m();
      } catch (v) {
        console.error("Method execution failed:", v);
      }
      return;
    }
    h?.({ [p]: g }, n);
  }
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ a.jsx("div", { className: "mx-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "grid grid-cols-12 gap-2 min-h-0", children: [
    e && Object.entries(e).map(([p, g], m) => {
      let v = y ? Object.entries(y).filter(([O, I]) => I.groups ? I.groups.includes(p) : !1) : [];
      const j = Or(g.component, b);
      return /* @__PURE__ */ a.jsx(
        "div",
        {
          className: `col-span-12 ${Ke[Ye(Number(g.width))] || "lg:col-span-12"}`,
          children: /* @__PURE__ */ a.jsxs(hi, { title: g.label, children: [
            g?.type === "fields" && g?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: g.fields.map((O, I) => Kt(O.hidden) ? null : /* @__PURE__ */ a.jsx(
              "div",
              {
                className: `col-span-12 sm:col-span-6 ${Ke[Ye(Number(O.width))] || "lg:col-span-2"}`,
                children: /* @__PURE__ */ a.jsx(
                  vt,
                  {
                    module_refid: c?.module_refid,
                    methods: t,
                    field: O,
                    data: n ?? {},
                    setFieldOptions: x,
                    ...f[O.name] ? { optionsOverride: f[O.name] } : {},
                    sqlOpsUrls: s,
                    refid: o
                  }
                )
              },
              O?.name ?? `field-${I}`
            )) }) }) : g?.type === "component" && j ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: j }) : g ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: r[g.config?.uimode]?.(g) || T[g.config?.uimode]?.(g, p) || /* @__PURE__ */ a.jsx("div", { children: "No renderer for this type" }) }) : null,
            /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: v && v.map(([O, I]) => /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: () => E(O, I),
                className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
                children: I.label
              },
              O
            )) })
          ] })
        },
        p
      );
    }),
    A.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 p-3 border-t border-gray-100", children: A.map(([p, g]) => /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => E(p, g),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: g.label
      },
      p
    )) })
  ] }) }) });
}
function Di({
  infoViewJson: e,
  hiddenFields: t = [],
  groupFieldsFn: n = Co,
  layoutConfig: r = {},
  viewRenderers: s = {},
  methods: o = {},
  Reports: i,
  toast: l,
  handleAction: h = () => {
  },
  components: c,
  initialvalues: f
}) {
  const [x, b] = ne.useState(f ?? {}), T = _o(e.infoview ?? {}), y = e.endPoints, A = ne.useMemo(
    () => n(e.fields || {}),
    [e.fields, n]
  ), [E, p] = ne.useState({}), g = (F, W) => {
    p((_) => ({
      ..._,
      [F]: W
    }));
  }, m = e?.source?.refid;
  let v = { ...A };
  e.infoview?.groups && (v = { ...v, ...e.infoview.groups }), ne.useEffect(() => {
    f && b((F) => ({
      ...F,
      ...f ?? {}
    }));
  }, [f]);
  const j = ne.useCallback(
    (F) => {
      F && b((W) => ({
        ...W,
        ...F
      }));
    },
    []
  );
  ne.useEffect(() => {
    let F = !1;
    return (async () => {
      const _ = e?.source;
      if (!_?.type) {
        F || j({});
        return;
      }
      if (_.type === "method") {
        const d = _.method, k = d ? o[d] : void 0;
        if (k)
          try {
            const q = await k();
            F || j(q || {});
          } catch (q) {
            console.error("Method execution failed:", q), F || j({});
          }
        else
          F || j({});
      }
      if (_.type === "api")
        try {
          const d = {
            method: _.method || "GET",
            url: y?.baseURL + _.endpoint,
            headers: {
              Authorization: `Bearer ${y?.accessToken}`
            },
            ..._.method === "GET" ? { params: { refid: _.refid } } : { data: { refid: _.refid } }
          }, { data: k } = await H(d), q = k?.results?.options ? k?.results?.options : k.data ? k.data : k.results ? k.results : k;
          F || j(q ?? {});
        } catch (d) {
          console.error("API fetch failed:", d), F || j({});
        }
      if (_.type === "sql" && _.refid && _.refid != "0" || _.dbopsid) {
        if (!y) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let d = !1, k;
          _?.dbopsid && (d = !0, k = _?.dbopsid);
          const q = await H({
            method: "GET",
            url: y.baseURL + y.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${y?.accessToken}`
            }
          });
          if (!d) {
            let ae = {
              ..._
            };
            _.where && (ae = {
              ..._,
              where: ve(_.where, {
                refid: m
              })
            }), k = (await H({
              method: "POST",
              url: y.baseURL + y.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: ae,
                fields: Bt(e.fields ?? {}, y.operation),
                forcefill: e.forcefill,
                datahash: q.data.refhash,
                srcid: e?.module_refid
              },
              headers: {
                Authorization: `Bearer ${y?.accessToken}`
              }
            }))?.data.refid;
          }
          const Q = await H({
            method: "POST",
            url: y.baseURL + y.dbopsFetch,
            data: {
              refid: k,
              datahash: q.data.refhash,
              module_refid: e.module_refid
            },
            headers: {
              Authorization: `Bearer ${y?.accessToken}`
            }
          }), te = ss(Q) ?? {};
          F || j(te);
        } catch (d) {
          F || j({}), console.error("API fetch failed:", d);
        }
      }
    })(), () => {
      F = !0;
    };
  }, [
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.url || "",
    JSON.stringify(e?.source?.params || {}),
    JSON.stringify(e?.source?.body || {}),
    JSON.stringify(e?.source?.headers || {})
  ]);
  const O = v.common || null;
  O && delete v.common;
  const I = (F) => {
    switch (F) {
      case "accordion":
        return /* @__PURE__ */ a.jsx(
          fi,
          {
            groups: v,
            methods: o,
            infoData: x,
            viewRenderers: s,
            sqlOpsUrls: y,
            refid: m,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: h,
            infoViewJson: e,
            setFieldOptions: g,
            fieldOptions: E,
            ...c ? { components: c } : {}
          }
        );
      case "tab":
      case "tableft":
      case "tabright":
        return /* @__PURE__ */ a.jsx(
          Sn,
          {
            groups: v,
            viewRenderers: s,
            layoutConfig: r,
            methods: o,
            infoData: x,
            isCommonInfo: !!O,
            viewMode: F,
            sqlOpsUrls: y,
            refid: m,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: h,
            infoViewJson: e,
            setFieldOptions: g,
            fieldOptions: E,
            ...c ? { components: c } : {}
          }
        );
      case "cards":
        return /* @__PURE__ */ a.jsx(
          mi,
          {
            groups: v,
            viewRenderers: s,
            methods: o,
            infoData: x,
            sqlOpsUrls: y,
            refid: m,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: h,
            infoViewJson: e,
            setFieldOptions: g,
            fieldOptions: E,
            ...c ? { components: c } : {}
          }
        );
      default:
        return /* @__PURE__ */ a.jsx(
          Sn,
          {
            groups: v,
            viewRenderers: s,
            layoutConfig: r,
            methods: o,
            infoData: x,
            isCommonInfo: !!O,
            viewMode: F,
            sqlOpsUrls: y,
            refid: m,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: h,
            infoViewJson: e,
            setFieldOptions: g,
            fieldOptions: E,
            ...c ? { components: c } : {}
          }
        );
    }
  };
  return /* @__PURE__ */ a.jsxs("div", { className: r.containerClass || "h-screen flex flex-col ", children: [
    O && y && /* @__PURE__ */ a.jsx(
      ni,
      {
        commonInfo: O,
        infoData: x,
        hiddenFields: t,
        sqlOpsUrls: y,
        setFieldOptions: g,
        fieldOptions: E,
        module_refid: e.module_refid,
        refid: m,
        methods: o
      }
    ),
    I(T)
  ] });
}
export {
  Di as InfoView
};
