import ne, { useState as le, useEffect as ge, useMemo as Lt, useRef as We, useLayoutEffect as xa } from "react";
import * as Se from "yup";
import { useFormik as ba } from "formik";
import { createPortal as wa } from "react-dom";
var _t = { exports: {} }, lt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kr;
function va() {
  if (Kr) return lt;
  Kr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, a, o) {
    var i = null;
    if (o !== void 0 && (i = "" + o), a.key !== void 0 && (i = "" + a.key), "key" in a) {
      o = {};
      for (var l in a)
        l !== "key" && (o[l] = a[l]);
    } else o = a;
    return a = o.ref, {
      $$typeof: e,
      type: r,
      key: i,
      ref: a !== void 0 ? a : null,
      props: o
    };
  }
  return lt.Fragment = t, lt.jsx = n, lt.jsxs = n, lt;
}
var ct = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vr;
function Ea() {
  return Vr || (Vr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(S) {
      if (S == null) return null;
      if (typeof S == "function")
        return S.$$typeof === R ? null : S.displayName || S.name || null;
      if (typeof S == "string") return S;
      switch (S) {
        case N:
          return "Fragment";
        case m:
          return "Profiler";
        case A:
          return "StrictMode";
        case E:
          return "Suspense";
        case _:
          return "SuspenseList";
        case k:
          return "Activity";
      }
      if (typeof S == "object")
        switch (typeof S.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), S.$$typeof) {
          case g:
            return "Portal";
          case b:
            return (S.displayName || "Context") + ".Provider";
          case p:
            return (S._context.displayName || "Context") + ".Consumer";
          case v:
            var D = S.render;
            return S = S.displayName, S || (S = D.displayName || D.name || "", S = S !== "" ? "ForwardRef(" + S + ")" : "ForwardRef"), S;
          case L:
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
        var J = D.error, V = typeof Symbol == "function" && Symbol.toStringTag && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return J.call(
          D,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          V
        ), t(S);
      }
    }
    function r(S) {
      if (S === N) return "<>";
      if (typeof S == "object" && S !== null && S.$$typeof === F)
        return "<...>";
      try {
        var D = e(S);
        return D ? "<" + D + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var S = u.A;
      return S === null ? null : S.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(S) {
      if ($.call(S, "key")) {
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
      return se[S] || (se[S] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), S = this.props.ref, S !== void 0 ? S : null;
    }
    function c(S, D, J, V, I, P, j, z) {
      return J = P.ref, S = {
        $$typeof: T,
        type: S,
        key: D,
        props: P,
        _owner: I
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
        value: j
      }), Object.defineProperty(S, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: z
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    }
    function f(S, D, J, V, I, P, j, z) {
      var O = D.children;
      if (O !== void 0)
        if (V)
          if (q(O)) {
            for (V = 0; V < O.length; V++)
              x(O[V]);
            Object.freeze && Object.freeze(O);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(O);
      if ($.call(D, "key")) {
        O = e(S);
        var B = Object.keys(D).filter(function(H) {
          return H !== "key";
        });
        V = 0 < B.length ? "{key: someKey, " + B.join(": ..., ") + ": ...}" : "{key: someKey}", me[O + V] || (B = 0 < B.length ? "{" + B.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          V,
          O,
          B,
          O
        ), me[O + V] = !0);
      }
      if (O = null, J !== void 0 && (n(J), O = "" + J), i(D) && (n(D.key), O = "" + D.key), "key" in D) {
        J = {};
        for (var Y in D)
          Y !== "key" && (J[Y] = D[Y]);
      } else J = D;
      return O && l(
        J,
        typeof S == "function" ? S.displayName || S.name || "Unknown" : S
      ), c(
        S,
        O,
        P,
        I,
        a(),
        J,
        j,
        z
      );
    }
    function x(S) {
      typeof S == "object" && S !== null && S.$$typeof === T && S._store && (S._store.validated = 1);
    }
    var y = ne, T = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), N = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), p = Symbol.for("react.consumer"), b = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), k = Symbol.for("react.activity"), R = Symbol.for("react.client.reference"), u = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, q = Array.isArray, Q = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      react_stack_bottom_frame: function(S) {
        return S();
      }
    };
    var te, se = {}, je = y.react_stack_bottom_frame.bind(
      y,
      o
    )(), he = Q(r(o)), me = {};
    ct.Fragment = N, ct.jsx = function(S, D, J, V, I) {
      var P = 1e4 > u.recentlyCreatedOwnerStacks++;
      return f(
        S,
        D,
        J,
        !1,
        V,
        I,
        P ? Error("react-stack-top-frame") : je,
        P ? Q(r(S)) : he
      );
    }, ct.jsxs = function(S, D, J, V, I) {
      var P = 1e4 > u.recentlyCreatedOwnerStacks++;
      return f(
        S,
        D,
        J,
        !0,
        V,
        I,
        P ? Error("react-stack-top-frame") : je,
        P ? Q(r(S)) : he
      );
    };
  }()), ct;
}
var Yr;
function Aa() {
  return Yr || (Yr = 1, process.env.NODE_ENV === "production" ? _t.exports = va() : _t.exports = Ea()), _t.exports;
}
var s = Aa();
function Sn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Na } = Object.prototype, { getPrototypeOf: Tr } = Object, { iterator: Ut, toStringTag: Rn } = Symbol, Ht = /* @__PURE__ */ ((e) => (t) => {
  const n = Na.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Oe = (e) => (e = e.toLowerCase(), (t) => Ht(t) === e), Gt = (e) => (t) => typeof t === e, { isArray: nt } = Array, yt = Gt("undefined");
function xt(e) {
  return e !== null && !yt(e) && e.constructor !== null && !yt(e.constructor) && Ee(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const _n = Oe("ArrayBuffer");
function Ta(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && _n(e.buffer), t;
}
const ja = Gt("string"), Ee = Gt("function"), Cn = Gt("number"), bt = (e) => e !== null && typeof e == "object", Sa = (e) => e === !0 || e === !1, Ft = (e) => {
  if (Ht(e) !== "object")
    return !1;
  const t = Tr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Rn in e) && !(Ut in e);
}, Ra = (e) => {
  if (!bt(e) || xt(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, _a = Oe("Date"), Ca = Oe("File"), Oa = Oe("Blob"), La = Oe("FileList"), Fa = (e) => bt(e) && Ee(e.pipe), Pa = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Ee(e.append) && ((t = Ht(e)) === "formdata" || // detect form-data instance
  t === "object" && Ee(e.toString) && e.toString() === "[object FormData]"));
}, Ia = Oe("URLSearchParams"), [Da, Ma, ka, $a] = ["ReadableStream", "Request", "Response", "Headers"].map(Oe), Ba = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function wt(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, a;
  if (typeof e != "object" && (e = [e]), nt(e))
    for (r = 0, a = e.length; r < a; r++)
      t.call(null, e[r], r, e);
  else {
    if (xt(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let l;
    for (r = 0; r < i; r++)
      l = o[r], t.call(null, e[l], l, e);
  }
}
function On(e, t) {
  if (xt(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, a;
  for (; r-- > 0; )
    if (a = n[r], t === a.toLowerCase())
      return a;
  return null;
}
const Ge = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ln = (e) => !yt(e) && e !== Ge;
function mr() {
  const { caseless: e } = Ln(this) && this || {}, t = {}, n = (r, a) => {
    const o = e && On(t, a) || a;
    Ft(t[o]) && Ft(r) ? t[o] = mr(t[o], r) : Ft(r) ? t[o] = mr({}, r) : nt(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, a = arguments.length; r < a; r++)
    arguments[r] && wt(arguments[r], n);
  return t;
}
const za = (e, t, n, { allOwnKeys: r } = {}) => (wt(t, (a, o) => {
  n && Ee(a) ? e[o] = Sn(a, n) : e[o] = a;
}, { allOwnKeys: r }), e), Ua = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ha = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Ga = (e, t, n, r) => {
  let a, o, i;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (a = Object.getOwnPropertyNames(e), o = a.length; o-- > 0; )
      i = a[o], (!r || r(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && Tr(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Wa = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, qa = (e) => {
  if (!e) return null;
  if (nt(e)) return e;
  let t = e.length;
  if (!Cn(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Ka = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Tr(Uint8Array)), Va = (e, t) => {
  const r = (e && e[Ut]).call(e);
  let a;
  for (; (a = r.next()) && !a.done; ) {
    const o = a.value;
    t.call(e, o[0], o[1]);
  }
}, Ya = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Xa = Oe("HTMLFormElement"), Qa = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, a) {
    return r.toUpperCase() + a;
  }
), Xr = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Za = Oe("RegExp"), Fn = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  wt(n, (a, o) => {
    let i;
    (i = t(a, o, e)) !== !1 && (r[o] = i || a);
  }), Object.defineProperties(e, r);
}, Ja = (e) => {
  Fn(e, (t, n) => {
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
}, es = (e, t) => {
  const n = {}, r = (a) => {
    a.forEach((o) => {
      n[o] = !0;
    });
  };
  return nt(e) ? r(e) : r(String(e).split(t)), n;
}, ts = () => {
}, rs = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function ns(e) {
  return !!(e && Ee(e.append) && e[Rn] === "FormData" && e[Ut]);
}
const as = (e) => {
  const t = new Array(10), n = (r, a) => {
    if (bt(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (xt(r))
        return r;
      if (!("toJSON" in r)) {
        t[a] = r;
        const o = nt(r) ? [] : {};
        return wt(r, (i, l) => {
          const h = n(i, a + 1);
          !yt(h) && (o[l] = h);
        }), t[a] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, ss = Oe("AsyncFunction"), os = (e) => e && (bt(e) || Ee(e)) && Ee(e.then) && Ee(e.catch), Pn = ((e, t) => e ? setImmediate : t ? ((n, r) => (Ge.addEventListener("message", ({ source: a, data: o }) => {
  a === Ge && o === n && r.length && r.shift()();
}, !1), (a) => {
  r.push(a), Ge.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  Ee(Ge.postMessage)
), is = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ge) : typeof process < "u" && process.nextTick || Pn, ls = (e) => e != null && Ee(e[Ut]), w = {
  isArray: nt,
  isArrayBuffer: _n,
  isBuffer: xt,
  isFormData: Pa,
  isArrayBufferView: Ta,
  isString: ja,
  isNumber: Cn,
  isBoolean: Sa,
  isObject: bt,
  isPlainObject: Ft,
  isEmptyObject: Ra,
  isReadableStream: Da,
  isRequest: Ma,
  isResponse: ka,
  isHeaders: $a,
  isUndefined: yt,
  isDate: _a,
  isFile: Ca,
  isBlob: Oa,
  isRegExp: Za,
  isFunction: Ee,
  isStream: Fa,
  isURLSearchParams: Ia,
  isTypedArray: Ka,
  isFileList: La,
  forEach: wt,
  merge: mr,
  extend: za,
  trim: Ba,
  stripBOM: Ua,
  inherits: Ha,
  toFlatObject: Ga,
  kindOf: Ht,
  kindOfTest: Oe,
  endsWith: Wa,
  toArray: qa,
  forEachEntry: Va,
  matchAll: Ya,
  isHTMLForm: Xa,
  hasOwnProperty: Xr,
  hasOwnProp: Xr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Fn,
  freezeMethods: Ja,
  toObjectSet: es,
  toCamelCase: Qa,
  noop: ts,
  toFiniteNumber: rs,
  findKey: On,
  global: Ge,
  isContextDefined: Ln,
  isSpecCompliantForm: ns,
  toJSONObject: as,
  isAsyncFn: ss,
  isThenable: os,
  setImmediate: Pn,
  asap: is,
  isIterable: ls
};
function K(e, t, n, r, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), a && (this.response = a, this.status = a.status ? a.status : null);
}
w.inherits(K, Error, {
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
const In = K.prototype, Dn = {};
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
  Dn[e] = { value: e };
});
Object.defineProperties(K, Dn);
Object.defineProperty(In, "isAxiosError", { value: !0 });
K.from = (e, t, n, r, a, o) => {
  const i = Object.create(In);
  return w.toFlatObject(e, i, function(h) {
    return h !== Error.prototype;
  }, (l) => l !== "isAxiosError"), K.call(i, e.message, t, n, r, a), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const cs = null;
function pr(e) {
  return w.isPlainObject(e) || w.isArray(e);
}
function Mn(e) {
  return w.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Qr(e, t, n) {
  return e ? e.concat(t).map(function(a, o) {
    return a = Mn(a), !n && o ? "[" + a + "]" : a;
  }).join(n ? "." : "") : t;
}
function us(e) {
  return w.isArray(e) && !e.some(pr);
}
const ds = w.toFlatObject(w, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Wt(e, t, n) {
  if (!w.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = w.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(N, A) {
    return !w.isUndefined(A[N]);
  });
  const r = n.metaTokens, a = n.visitor || f, o = n.dots, i = n.indexes, h = (n.Blob || typeof Blob < "u" && Blob) && w.isSpecCompliantForm(t);
  if (!w.isFunction(a))
    throw new TypeError("visitor must be a function");
  function c(g) {
    if (g === null) return "";
    if (w.isDate(g))
      return g.toISOString();
    if (w.isBoolean(g))
      return g.toString();
    if (!h && w.isBlob(g))
      throw new K("Blob is not supported. Use a Buffer instead.");
    return w.isArrayBuffer(g) || w.isTypedArray(g) ? h && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function f(g, N, A) {
    let m = g;
    if (g && !A && typeof g == "object") {
      if (w.endsWith(N, "{}"))
        N = r ? N : N.slice(0, -2), g = JSON.stringify(g);
      else if (w.isArray(g) && us(g) || (w.isFileList(g) || w.endsWith(N, "[]")) && (m = w.toArray(g)))
        return N = Mn(N), m.forEach(function(b, v) {
          !(w.isUndefined(b) || b === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Qr([N], v, o) : i === null ? N : N + "[]",
            c(b)
          );
        }), !1;
    }
    return pr(g) ? !0 : (t.append(Qr(A, N, o), c(g)), !1);
  }
  const x = [], y = Object.assign(ds, {
    defaultVisitor: f,
    convertValue: c,
    isVisitable: pr
  });
  function T(g, N) {
    if (!w.isUndefined(g)) {
      if (x.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + N.join("."));
      x.push(g), w.forEach(g, function(m, p) {
        (!(w.isUndefined(m) || m === null) && a.call(
          t,
          m,
          w.isString(p) ? p.trim() : p,
          N,
          y
        )) === !0 && T(m, N ? N.concat(p) : [p]);
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
const kn = jr.prototype;
kn.append = function(t, n) {
  this._pairs.push([t, n]);
};
kn.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Zr);
  } : Zr;
  return this._pairs.map(function(a) {
    return n(a[0]) + "=" + n(a[1]);
  }, "").join("&");
};
function fs(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function $n(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || fs;
  w.isFunction(n) && (n = {
    serialize: n
  });
  const a = n && n.serialize;
  let o;
  if (a ? o = a(t, n) : o = w.isURLSearchParams(t) ? t.toString() : new jr(t, n).toString(r), o) {
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
const Bn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, hs = typeof URLSearchParams < "u" ? URLSearchParams : jr, ms = typeof FormData < "u" ? FormData : null, ps = typeof Blob < "u" ? Blob : null, gs = {
  isBrowser: !0,
  classes: {
    URLSearchParams: hs,
    FormData: ms,
    Blob: ps
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Sr = typeof window < "u" && typeof document < "u", gr = typeof navigator == "object" && navigator || void 0, ys = Sr && (!gr || ["ReactNative", "NativeScript", "NS"].indexOf(gr.product) < 0), xs = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", bs = Sr && window.location.href || "http://localhost", ws = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Sr,
  hasStandardBrowserEnv: ys,
  hasStandardBrowserWebWorkerEnv: xs,
  navigator: gr,
  origin: bs
}, Symbol.toStringTag, { value: "Module" })), fe = {
  ...ws,
  ...gs
};
function vs(e, t) {
  return Wt(e, new fe.classes.URLSearchParams(), {
    visitor: function(n, r, a, o) {
      return fe.isNode && w.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function Es(e) {
  return w.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function As(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const a = n.length;
  let o;
  for (r = 0; r < a; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function zn(e) {
  function t(n, r, a, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const l = Number.isFinite(+i), h = o >= n.length;
    return i = !i && w.isArray(a) ? a.length : i, h ? (w.hasOwnProp(a, i) ? a[i] = [a[i], r] : a[i] = r, !l) : ((!a[i] || !w.isObject(a[i])) && (a[i] = []), t(n, r, a[i], o) && w.isArray(a[i]) && (a[i] = As(a[i])), !l);
  }
  if (w.isFormData(e) && w.isFunction(e.entries)) {
    const n = {};
    return w.forEachEntry(e, (r, a) => {
      t(Es(r), a, n, 0);
    }), n;
  }
  return null;
}
function Ns(e, t, n) {
  if (w.isString(e))
    try {
      return (t || JSON.parse)(e), w.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const vt = {
  transitional: Bn,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", a = r.indexOf("application/json") > -1, o = w.isObject(t);
    if (o && w.isHTMLForm(t) && (t = new FormData(t)), w.isFormData(t))
      return a ? JSON.stringify(zn(t)) : t;
    if (w.isArrayBuffer(t) || w.isBuffer(t) || w.isStream(t) || w.isFile(t) || w.isBlob(t) || w.isReadableStream(t))
      return t;
    if (w.isArrayBufferView(t))
      return t.buffer;
    if (w.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return vs(t, this.formSerializer).toString();
      if ((l = w.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const h = this.env && this.env.FormData;
        return Wt(
          l ? { "files[]": t } : t,
          h && new h(),
          this.formSerializer
        );
      }
    }
    return o || a ? (n.setContentType("application/json", !1), Ns(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || vt.transitional, r = n && n.forcedJSONParsing, a = this.responseType === "json";
    if (w.isResponse(t) || w.isReadableStream(t))
      return t;
    if (t && w.isString(t) && (r && !this.responseType || a)) {
      const i = !(n && n.silentJSONParsing) && a;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (i)
          throw l.name === "SyntaxError" ? K.from(l, K.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
  vt.headers[e] = {};
});
const Ts = w.toObjectSet([
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
]), js = (e) => {
  const t = {};
  let n, r, a;
  return e && e.split(`
`).forEach(function(i) {
    a = i.indexOf(":"), n = i.substring(0, a).trim().toLowerCase(), r = i.substring(a + 1).trim(), !(!n || t[n] && Ts[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, en = Symbol("internals");
function ut(e) {
  return e && String(e).trim().toLowerCase();
}
function Pt(e) {
  return e === !1 || e == null ? e : w.isArray(e) ? e.map(Pt) : String(e);
}
function Ss(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Rs = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function rr(e, t, n, r, a) {
  if (w.isFunction(r))
    return r.call(this, t, n);
  if (a && (t = n), !!w.isString(t)) {
    if (w.isString(r))
      return t.indexOf(r) !== -1;
    if (w.isRegExp(r))
      return r.test(t);
  }
}
function _s(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Cs(e, t) {
  const n = w.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(a, o, i) {
        return this[r].call(this, t, a, o, i);
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
    const a = this;
    function o(l, h, c) {
      const f = ut(h);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const x = w.findKey(a, f);
      (!x || a[x] === void 0 || c === !0 || c === void 0 && a[x] !== !1) && (a[x || h] = Pt(l));
    }
    const i = (l, h) => w.forEach(l, (c, f) => o(c, f, h));
    if (w.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (w.isString(t) && (t = t.trim()) && !Rs(t))
      i(js(t), n);
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
    if (t = ut(t), t) {
      const r = w.findKey(this, t);
      if (r) {
        const a = this[r];
        if (!n)
          return a;
        if (n === !0)
          return Ss(a);
        if (w.isFunction(n))
          return n.call(this, a, r);
        if (w.isRegExp(n))
          return n.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = ut(t), t) {
      const r = w.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || rr(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let a = !1;
    function o(i) {
      if (i = ut(i), i) {
        const l = w.findKey(r, i);
        l && (!n || rr(r, r[l], l, n)) && (delete r[l], a = !0);
      }
    }
    return w.isArray(t) ? t.forEach(o) : o(t), a;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, a = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || rr(this, this[o], o, t, !0)) && (delete this[o], a = !0);
    }
    return a;
  }
  normalize(t) {
    const n = this, r = {};
    return w.forEach(this, (a, o) => {
      const i = w.findKey(r, o);
      if (i) {
        n[i] = Pt(a), delete n[o];
        return;
      }
      const l = t ? _s(o) : String(o).trim();
      l !== o && delete n[o], n[l] = Pt(a), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return w.forEach(this, (r, a) => {
      r != null && r !== !1 && (n[a] = t && w.isArray(r) ? r.join(", ") : r);
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
    return n.forEach((a) => r.set(a)), r;
  }
  static accessor(t) {
    const r = (this[en] = this[en] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function o(i) {
      const l = ut(i);
      r[l] || (Cs(a, i), r[l] = !0);
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
  const n = this || vt, r = t || n, a = Ae.from(r.headers);
  let o = r.data;
  return w.forEach(e, function(l) {
    o = l.call(n, o, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), o;
}
function Un(e) {
  return !!(e && e.__CANCEL__);
}
function at(e, t, n) {
  K.call(this, e ?? "canceled", K.ERR_CANCELED, t, n), this.name = "CanceledError";
}
w.inherits(at, K, {
  __CANCEL__: !0
});
function Hn(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new K(
    "Request failed with status code " + n.status,
    [K.ERR_BAD_REQUEST, K.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Os(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Ls(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let a = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(h) {
    const c = Date.now(), f = r[o];
    i || (i = c), n[a] = h, r[a] = c;
    let x = o, y = 0;
    for (; x !== a; )
      y += n[x++], x = x % e;
    if (a = (a + 1) % e, a === o && (o = (o + 1) % e), c - i < t)
      return;
    const T = f && c - f;
    return T ? Math.round(y * 1e3 / T) : void 0;
  };
}
function Fs(e, t) {
  let n = 0, r = 1e3 / t, a, o;
  const i = (c, f = Date.now()) => {
    n = f, a = null, o && (clearTimeout(o), o = null), e(...c);
  };
  return [(...c) => {
    const f = Date.now(), x = f - n;
    x >= r ? i(c, f) : (a = c, o || (o = setTimeout(() => {
      o = null, i(a);
    }, r - x)));
  }, () => a && i(a)];
}
const kt = (e, t, n = 3) => {
  let r = 0;
  const a = Ls(50, 250);
  return Fs((o) => {
    const i = o.loaded, l = o.lengthComputable ? o.total : void 0, h = i - r, c = a(h), f = i <= l;
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
}, rn = (e) => (...t) => w.asap(() => e(...t)), Ps = fe.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, fe.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(fe.origin),
  fe.navigator && /(msie|trident)/i.test(fe.navigator.userAgent)
) : () => !0, Is = fe.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, a, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      w.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), w.isString(r) && i.push("path=" + r), w.isString(a) && i.push("domain=" + a), o === !0 && i.push("secure"), document.cookie = i.join("; ");
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
function Ds(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ms(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Gn(e, t, n) {
  let r = !Ds(t);
  return e && (r || n == !1) ? Ms(e, t) : t;
}
const nn = (e) => e instanceof Ae ? { ...e } : e;
function Ke(e, t) {
  t = t || {};
  const n = {};
  function r(c, f, x, y) {
    return w.isPlainObject(c) && w.isPlainObject(f) ? w.merge.call({ caseless: y }, c, f) : w.isPlainObject(f) ? w.merge({}, f) : w.isArray(f) ? f.slice() : f;
  }
  function a(c, f, x, y) {
    if (w.isUndefined(f)) {
      if (!w.isUndefined(c))
        return r(void 0, c, x, y);
    } else return r(c, f, x, y);
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
    headers: (c, f, x) => a(nn(c), nn(f), x, !0)
  };
  return w.forEach(Object.keys({ ...e, ...t }), function(f) {
    const x = h[f] || a, y = x(e[f], t[f], f);
    w.isUndefined(y) && x !== l || (n[f] = y);
  }), n;
}
const Wn = (e) => {
  const t = Ke({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: a, xsrfCookieName: o, headers: i, auth: l } = t;
  t.headers = i = Ae.from(i), t.url = $n(Gn(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), l && i.set(
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
  if (fe.hasStandardBrowserEnv && (r && w.isFunction(r) && (r = r(t)), r || r !== !1 && Ps(t.url))) {
    const c = a && o && Is.read(o);
    c && i.set(a, c);
  }
  return t;
}, ks = typeof XMLHttpRequest < "u", $s = ks && function(e) {
  return new Promise(function(n, r) {
    const a = Wn(e);
    let o = a.data;
    const i = Ae.from(a.headers).normalize();
    let { responseType: l, onUploadProgress: h, onDownloadProgress: c } = a, f, x, y, T, g;
    function N() {
      T && T(), g && g(), a.cancelToken && a.cancelToken.unsubscribe(f), a.signal && a.signal.removeEventListener("abort", f);
    }
    let A = new XMLHttpRequest();
    A.open(a.method.toUpperCase(), a.url, !0), A.timeout = a.timeout;
    function m() {
      if (!A)
        return;
      const b = Ae.from(
        "getAllResponseHeaders" in A && A.getAllResponseHeaders()
      ), E = {
        data: !l || l === "text" || l === "json" ? A.responseText : A.response,
        status: A.status,
        statusText: A.statusText,
        headers: b,
        config: e,
        request: A
      };
      Hn(function(L) {
        n(L), N();
      }, function(L) {
        r(L), N();
      }, E), A = null;
    }
    "onloadend" in A ? A.onloadend = m : A.onreadystatechange = function() {
      !A || A.readyState !== 4 || A.status === 0 && !(A.responseURL && A.responseURL.indexOf("file:") === 0) || setTimeout(m);
    }, A.onabort = function() {
      A && (r(new K("Request aborted", K.ECONNABORTED, e, A)), A = null);
    }, A.onerror = function() {
      r(new K("Network Error", K.ERR_NETWORK, e, A)), A = null;
    }, A.ontimeout = function() {
      let v = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const E = a.transitional || Bn;
      a.timeoutErrorMessage && (v = a.timeoutErrorMessage), r(new K(
        v,
        E.clarifyTimeoutError ? K.ETIMEDOUT : K.ECONNABORTED,
        e,
        A
      )), A = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in A && w.forEach(i.toJSON(), function(v, E) {
      A.setRequestHeader(E, v);
    }), w.isUndefined(a.withCredentials) || (A.withCredentials = !!a.withCredentials), l && l !== "json" && (A.responseType = a.responseType), c && ([y, g] = kt(c, !0), A.addEventListener("progress", y)), h && A.upload && ([x, T] = kt(h), A.upload.addEventListener("progress", x), A.upload.addEventListener("loadend", T)), (a.cancelToken || a.signal) && (f = (b) => {
      A && (r(!b || b.type ? new at(null, e, A) : b), A.abort(), A = null);
    }, a.cancelToken && a.cancelToken.subscribe(f), a.signal && (a.signal.aborted ? f() : a.signal.addEventListener("abort", f)));
    const p = Os(a.url);
    if (p && fe.protocols.indexOf(p) === -1) {
      r(new K("Unsupported protocol " + p + ":", K.ERR_BAD_REQUEST, e));
      return;
    }
    A.send(o || null);
  });
}, Bs = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), a;
    const o = function(c) {
      if (!a) {
        a = !0, l();
        const f = c instanceof Error ? c : this.reason;
        r.abort(f instanceof K ? f : new at(f instanceof Error ? f.message : f));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new K(`timeout ${t} of ms exceeded`, K.ETIMEDOUT));
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
}, zs = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, a;
  for (; r < n; )
    a = r + t, yield e.slice(r, a), r = a;
}, Us = async function* (e, t) {
  for await (const n of Hs(e))
    yield* zs(n, t);
}, Hs = async function* (e) {
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
}, an = (e, t, n, r) => {
  const a = Us(e, t);
  let o = 0, i, l = (h) => {
    i || (i = !0, r && r(h));
  };
  return new ReadableStream({
    async pull(h) {
      try {
        const { done: c, value: f } = await a.next();
        if (c) {
          l(), h.close();
          return;
        }
        let x = f.byteLength;
        if (n) {
          let y = o += x;
          n(y);
        }
        h.enqueue(new Uint8Array(f));
      } catch (c) {
        throw l(c), c;
      }
    },
    cancel(h) {
      return l(h), a.return();
    }
  }, {
    highWaterMark: 2
  });
}, qt = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", qn = qt && typeof ReadableStream == "function", Gs = qt && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Kn = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Ws = qn && Kn(() => {
  let e = !1;
  const t = new Request(fe.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), sn = 64 * 1024, yr = qn && Kn(() => w.isReadableStream(new Response("").body)), $t = {
  stream: yr && ((e) => e.body)
};
qt && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !$t[t] && ($t[t] = w.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new K(`Response type '${t}' is not supported`, K.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const qs = async (e) => {
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
    return (await Gs(e)).byteLength;
}, Ks = async (e, t) => {
  const n = w.toFiniteNumber(e.getContentLength());
  return n ?? qs(t);
}, Vs = qt && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: a,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: l,
    onUploadProgress: h,
    responseType: c,
    headers: f,
    withCredentials: x = "same-origin",
    fetchOptions: y
  } = Wn(e);
  c = c ? (c + "").toLowerCase() : "text";
  let T = Bs([a, o && o.toAbortSignal()], i), g;
  const N = T && T.unsubscribe && (() => {
    T.unsubscribe();
  });
  let A;
  try {
    if (h && Ws && n !== "get" && n !== "head" && (A = await Ks(f, r)) !== 0) {
      let E = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), _;
      if (w.isFormData(r) && (_ = E.headers.get("content-type")) && f.setContentType(_), E.body) {
        const [L, F] = tn(
          A,
          kt(rn(h))
        );
        r = an(E.body, sn, L, F);
      }
    }
    w.isString(x) || (x = x ? "include" : "omit");
    const m = "credentials" in Request.prototype;
    g = new Request(t, {
      ...y,
      signal: T,
      method: n.toUpperCase(),
      headers: f.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: m ? x : void 0
    });
    let p = await fetch(g, y);
    const b = yr && (c === "stream" || c === "response");
    if (yr && (l || b && N)) {
      const E = {};
      ["status", "statusText", "headers"].forEach((k) => {
        E[k] = p[k];
      });
      const _ = w.toFiniteNumber(p.headers.get("content-length")), [L, F] = l && tn(
        _,
        kt(rn(l), !0)
      ) || [];
      p = new Response(
        an(p.body, sn, L, () => {
          F && F(), N && N();
        }),
        E
      );
    }
    c = c || "text";
    let v = await $t[w.findKey($t, c) || "text"](p, e);
    return !b && N && N(), await new Promise((E, _) => {
      Hn(E, _, {
        data: v,
        headers: Ae.from(p.headers),
        status: p.status,
        statusText: p.statusText,
        config: e,
        request: g
      });
    });
  } catch (m) {
    throw N && N(), m && m.name === "TypeError" && /Load failed|fetch/i.test(m.message) ? Object.assign(
      new K("Network Error", K.ERR_NETWORK, e, g),
      {
        cause: m.cause || m
      }
    ) : K.from(m, m && m.code, e, g);
  }
}), xr = {
  http: cs,
  xhr: $s,
  fetch: Vs
};
w.forEach(xr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const on = (e) => `- ${e}`, Ys = (e) => w.isFunction(e) || e === null || e === !1, Vn = {
  getAdapter: (e) => {
    e = w.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const a = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !Ys(n) && (r = xr[(i = String(n)).toLowerCase()], r === void 0))
        throw new K(`Unknown adapter '${i}'`);
      if (r)
        break;
      a[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(a).map(
        ([l, h]) => `adapter ${l} ` + (h === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(on).join(`
`) : " " + on(o[0]) : "as no adapter specified";
      throw new K(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: xr
};
function ar(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new at(null, e);
}
function ln(e) {
  return ar(e), e.headers = Ae.from(e.headers), e.data = nr.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Vn.getAdapter(e.adapter || vt.adapter)(e).then(function(r) {
    return ar(e), r.data = nr.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Ae.from(r.headers), r;
  }, function(r) {
    return Un(r) || (ar(e), r && r.response && (r.response.data = nr.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Ae.from(r.response.headers))), Promise.reject(r);
  });
}
const Yn = "1.11.0", Kt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Kt[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const cn = {};
Kt.transitional = function(t, n, r) {
  function a(o, i) {
    return "[Axios v" + Yn + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, l) => {
    if (t === !1)
      throw new K(
        a(i, " has been removed" + (n ? " in " + n : "")),
        K.ERR_DEPRECATED
      );
    return n && !cn[i] && (cn[i] = !0, console.warn(
      a(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, l) : !0;
  };
};
Kt.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Xs(e, t, n) {
  if (typeof e != "object")
    throw new K("options must be an object", K.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let a = r.length;
  for (; a-- > 0; ) {
    const o = r[a], i = t[o];
    if (i) {
      const l = e[o], h = l === void 0 || i(l, o, e);
      if (h !== !0)
        throw new K("option " + o + " must be " + h, K.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new K("Unknown option " + o, K.ERR_BAD_OPTION);
  }
}
const It = {
  assertOptions: Xs,
  validators: Kt
}, Ie = It.validators;
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
        let a = {};
        Error.captureStackTrace ? Error.captureStackTrace(a) : a = new Error();
        const o = a.stack ? a.stack.replace(/^.+\n/, "") : "";
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Ke(this.defaults, n);
    const { transitional: r, paramsSerializer: a, headers: o } = n;
    r !== void 0 && It.assertOptions(r, {
      silentJSONParsing: Ie.transitional(Ie.boolean),
      forcedJSONParsing: Ie.transitional(Ie.boolean),
      clarifyTimeoutError: Ie.transitional(Ie.boolean)
    }, !1), a != null && (w.isFunction(a) ? n.paramsSerializer = {
      serialize: a
    } : It.assertOptions(a, {
      encode: Ie.function,
      serialize: Ie.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), It.assertOptions(n, {
      baseUrl: Ie.spelling("baseURL"),
      withXsrfToken: Ie.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && w.merge(
      o.common,
      o[n.method]
    );
    o && w.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete o[g];
      }
    ), n.headers = Ae.concat(i, o);
    const l = [];
    let h = !0;
    this.interceptors.request.forEach(function(N) {
      typeof N.runWhen == "function" && N.runWhen(n) === !1 || (h = h && N.synchronous, l.unshift(N.fulfilled, N.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(N) {
      c.push(N.fulfilled, N.rejected);
    });
    let f, x = 0, y;
    if (!h) {
      const g = [ln.bind(this), void 0];
      for (g.unshift(...l), g.push(...c), y = g.length, f = Promise.resolve(n); x < y; )
        f = f.then(g[x++], g[x++]);
      return f;
    }
    y = l.length;
    let T = n;
    for (x = 0; x < y; ) {
      const g = l[x++], N = l[x++];
      try {
        T = g(T);
      } catch (A) {
        N.call(this, A);
        break;
      }
    }
    try {
      f = ln.call(this, T);
    } catch (g) {
      return Promise.reject(g);
    }
    for (x = 0, y = c.length; x < y; )
      f = f.then(c[x++], c[x++]);
    return f;
  }
  getUri(t) {
    t = Ke(this.defaults, t);
    const n = Gn(t.baseURL, t.url, t.allowAbsoluteUrls);
    return $n(n, t.params, t.paramsSerializer);
  }
};
w.forEach(["delete", "get", "head", "options"], function(t) {
  qe.prototype[t] = function(n, r) {
    return this.request(Ke(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
w.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, l) {
      return this.request(Ke(l || {}, {
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
let Qs = class Xn {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((a) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](a);
      r._listeners = null;
    }), this.promise.then = (a) => {
      let o;
      const i = new Promise((l) => {
        r.subscribe(l), o = l;
      }).then(a);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, l) {
      r.reason || (r.reason = new at(o, i, l), n(r.reason));
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
      token: new Xn(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
};
function Zs(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Js(e) {
  return w.isObject(e) && e.isAxiosError === !0;
}
const br = {
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
Object.entries(br).forEach(([e, t]) => {
  br[t] = e;
});
function Qn(e) {
  const t = new qe(e), n = Sn(qe.prototype.request, t);
  return w.extend(n, qe.prototype, t, { allOwnKeys: !0 }), w.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(a) {
    return Qn(Ke(e, a));
  }, n;
}
const G = Qn(vt);
G.Axios = qe;
G.CanceledError = at;
G.CancelToken = Qs;
G.isCancel = Un;
G.VERSION = Yn;
G.toFormData = Wt;
G.AxiosError = K;
G.Cancel = G.CanceledError;
G.all = function(t) {
  return Promise.all(t);
};
G.spread = Zs;
G.isAxiosError = Js;
G.mergeConfig = Ke;
G.AxiosHeaders = Ae;
G.formToJSON = (e) => zn(w.isHTMLForm(e) ? new FormData(e) : e);
G.getAdapter = Vn.getAdapter;
G.HttpStatusCode = br;
G.default = G;
const {
  Axios: vi,
  AxiosError: Ei,
  CanceledError: Ai,
  isCancel: Ni,
  CancelToken: Ti,
  VERSION: ji,
  all: Si,
  Cancel: Ri,
  isAxiosError: _i,
  spread: Ci,
  toFormData: Oi,
  AxiosHeaders: Li,
  HttpStatusCode: Fi,
  formToJSON: Pi,
  getAdapter: Ii,
  mergeConfig: Di
} = G;
/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */
const {
  entries: Zn,
  setPrototypeOf: un,
  isFrozen: eo,
  getPrototypeOf: to,
  getOwnPropertyDescriptor: ro
} = Object;
let {
  freeze: ye,
  seal: Re,
  create: wr
} = Object, {
  apply: vr,
  construct: Er
} = typeof Reflect < "u" && Reflect;
ye || (ye = function(t) {
  return t;
});
Re || (Re = function(t) {
  return t;
});
vr || (vr = function(t, n) {
  for (var r = arguments.length, a = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    a[o - 2] = arguments[o];
  return t.apply(n, a);
});
Er || (Er = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return new t(...r);
});
const Ct = xe(Array.prototype.forEach), no = xe(Array.prototype.lastIndexOf), dn = xe(Array.prototype.pop), dt = xe(Array.prototype.push), ao = xe(Array.prototype.splice), Dt = xe(String.prototype.toLowerCase), sr = xe(String.prototype.toString), or = xe(String.prototype.match), ft = xe(String.prototype.replace), so = xe(String.prototype.indexOf), oo = xe(String.prototype.trim), Ce = xe(Object.prototype.hasOwnProperty), pe = xe(RegExp.prototype.test), ht = io(TypeError);
function xe(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      r[a - 1] = arguments[a];
    return vr(e, t, r);
  };
}
function io(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Er(e, n);
  };
}
function X(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Dt;
  un && un(e, null);
  let r = t.length;
  for (; r--; ) {
    let a = t[r];
    if (typeof a == "string") {
      const o = n(a);
      o !== a && (eo(t) || (t[r] = o), a = o);
    }
    e[a] = !0;
  }
  return e;
}
function lo(e) {
  for (let t = 0; t < e.length; t++)
    Ce(e, t) || (e[t] = null);
  return e;
}
function De(e) {
  const t = wr(null);
  for (const [n, r] of Zn(e))
    Ce(e, n) && (Array.isArray(r) ? t[n] = lo(r) : r && typeof r == "object" && r.constructor === Object ? t[n] = De(r) : t[n] = r);
  return t;
}
function mt(e, t) {
  for (; e !== null; ) {
    const r = ro(e, t);
    if (r) {
      if (r.get)
        return xe(r.get);
      if (typeof r.value == "function")
        return xe(r.value);
    }
    e = to(e);
  }
  function n() {
    return null;
  }
  return n;
}
const fn = ye(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ir = ye(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), lr = ye(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), co = ye(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), cr = ye(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), uo = ye(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), hn = ye(["#text"]), mn = ye(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ur = ye(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), pn = ye(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ot = ye(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), fo = Re(/\{\{[\w\W]*|[\w\W]*\}\}/gm), ho = Re(/<%[\w\W]*|[\w\W]*%>/gm), mo = Re(/\$\{[\w\W]*/gm), po = Re(/^data-[\-\w.\u00B7-\uFFFF]+$/), go = Re(/^aria-[\-\w]+$/), Jn = Re(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), yo = Re(/^(?:\w+script|data):/i), xo = Re(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), ea = Re(/^html$/i), bo = Re(/^[a-z][.\w]*(-[.\w]+)+$/i);
var gn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: go,
  ATTR_WHITESPACE: xo,
  CUSTOM_ELEMENT: bo,
  DATA_ATTR: po,
  DOCTYPE_NAME: ea,
  ERB_EXPR: ho,
  IS_ALLOWED_URI: Jn,
  IS_SCRIPT_OR_DATA: yo,
  MUSTACHE_EXPR: fo,
  TMPLIT_EXPR: mo
});
const pt = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, wo = function() {
  return typeof window > "u" ? null : window;
}, vo = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let r = null;
  const a = "data-tt-policy-suffix";
  n && n.hasAttribute(a) && (r = n.getAttribute(a));
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
function ta() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : wo();
  const t = (U) => ta(U);
  if (t.version = "3.3.1", t.removed = [], !e || !e.document || e.document.nodeType !== pt.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: n
  } = e;
  const r = n, a = r.currentScript, {
    DocumentFragment: o,
    HTMLTemplateElement: i,
    Node: l,
    Element: h,
    NodeFilter: c,
    NamedNodeMap: f = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: x,
    DOMParser: y,
    trustedTypes: T
  } = e, g = h.prototype, N = mt(g, "cloneNode"), A = mt(g, "remove"), m = mt(g, "nextSibling"), p = mt(g, "childNodes"), b = mt(g, "parentNode");
  if (typeof i == "function") {
    const U = n.createElement("template");
    U.content && U.content.ownerDocument && (n = U.content.ownerDocument);
  }
  let v, E = "";
  const {
    implementation: _,
    createNodeIterator: L,
    createDocumentFragment: F,
    getElementsByTagName: k
  } = n, {
    importNode: R
  } = r;
  let u = yn();
  t.isSupported = typeof Zn == "function" && typeof b == "function" && _ && _.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: $,
    ERB_EXPR: q,
    TMPLIT_EXPR: Q,
    DATA_ATTR: te,
    ARIA_ATTR: se,
    IS_SCRIPT_OR_DATA: je,
    ATTR_WHITESPACE: he,
    CUSTOM_ELEMENT: me
  } = gn;
  let {
    IS_ALLOWED_URI: S
  } = gn, D = null;
  const J = X({}, [...fn, ...ir, ...lr, ...cr, ...hn]);
  let V = null;
  const I = X({}, [...mn, ...ur, ...pn, ...Ot]);
  let P = Object.seal(wr(null, {
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
  })), j = null, z = null;
  const O = Object.seal(wr(null, {
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
  let B = !0, Y = !0, H = !1, Z = !0, W = !1, ee = !0, re = !1, ue = !1, be = !1, _e = !1, Ne = !1, Le = !1, Xe = !0, At = !1;
  const Nt = "user-content-";
  let st = !0, ot = !1, Qe = {}, Fe = null;
  const Yt = X({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Lr = null;
  const Fr = X({}, ["audio", "video", "img", "source", "image", "track"]);
  let Xt = null;
  const Pr = X({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Tt = "http://www.w3.org/1998/Math/MathML", jt = "http://www.w3.org/2000/svg", ke = "http://www.w3.org/1999/xhtml";
  let Ze = ke, Qt = !1, Zt = null;
  const da = X({}, [Tt, jt, ke], sr);
  let St = X({}, ["mi", "mo", "mn", "ms", "mtext"]), Rt = X({}, ["annotation-xml"]);
  const fa = X({}, ["title", "style", "font", "a", "script"]);
  let it = null;
  const ha = ["application/xhtml+xml", "text/html"], ma = "text/html";
  let ie = null, Je = null;
  const pa = n.createElement("form"), Ir = function(d) {
    return d instanceof RegExp || d instanceof Function;
  }, Jt = function() {
    let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Je && Je === d)) {
      if ((!d || typeof d != "object") && (d = {}), d = De(d), it = // eslint-disable-next-line unicorn/prefer-includes
      ha.indexOf(d.PARSER_MEDIA_TYPE) === -1 ? ma : d.PARSER_MEDIA_TYPE, ie = it === "application/xhtml+xml" ? sr : Dt, D = Ce(d, "ALLOWED_TAGS") ? X({}, d.ALLOWED_TAGS, ie) : J, V = Ce(d, "ALLOWED_ATTR") ? X({}, d.ALLOWED_ATTR, ie) : I, Zt = Ce(d, "ALLOWED_NAMESPACES") ? X({}, d.ALLOWED_NAMESPACES, sr) : da, Xt = Ce(d, "ADD_URI_SAFE_ATTR") ? X(De(Pr), d.ADD_URI_SAFE_ATTR, ie) : Pr, Lr = Ce(d, "ADD_DATA_URI_TAGS") ? X(De(Fr), d.ADD_DATA_URI_TAGS, ie) : Fr, Fe = Ce(d, "FORBID_CONTENTS") ? X({}, d.FORBID_CONTENTS, ie) : Yt, j = Ce(d, "FORBID_TAGS") ? X({}, d.FORBID_TAGS, ie) : De({}), z = Ce(d, "FORBID_ATTR") ? X({}, d.FORBID_ATTR, ie) : De({}), Qe = Ce(d, "USE_PROFILES") ? d.USE_PROFILES : !1, B = d.ALLOW_ARIA_ATTR !== !1, Y = d.ALLOW_DATA_ATTR !== !1, H = d.ALLOW_UNKNOWN_PROTOCOLS || !1, Z = d.ALLOW_SELF_CLOSE_IN_ATTR !== !1, W = d.SAFE_FOR_TEMPLATES || !1, ee = d.SAFE_FOR_XML !== !1, re = d.WHOLE_DOCUMENT || !1, _e = d.RETURN_DOM || !1, Ne = d.RETURN_DOM_FRAGMENT || !1, Le = d.RETURN_TRUSTED_TYPE || !1, be = d.FORCE_BODY || !1, Xe = d.SANITIZE_DOM !== !1, At = d.SANITIZE_NAMED_PROPS || !1, st = d.KEEP_CONTENT !== !1, ot = d.IN_PLACE || !1, S = d.ALLOWED_URI_REGEXP || Jn, Ze = d.NAMESPACE || ke, St = d.MATHML_TEXT_INTEGRATION_POINTS || St, Rt = d.HTML_INTEGRATION_POINTS || Rt, P = d.CUSTOM_ELEMENT_HANDLING || {}, d.CUSTOM_ELEMENT_HANDLING && Ir(d.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (P.tagNameCheck = d.CUSTOM_ELEMENT_HANDLING.tagNameCheck), d.CUSTOM_ELEMENT_HANDLING && Ir(d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (P.attributeNameCheck = d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), d.CUSTOM_ELEMENT_HANDLING && typeof d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (P.allowCustomizedBuiltInElements = d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), W && (Y = !1), Ne && (_e = !0), Qe && (D = X({}, hn), V = [], Qe.html === !0 && (X(D, fn), X(V, mn)), Qe.svg === !0 && (X(D, ir), X(V, ur), X(V, Ot)), Qe.svgFilters === !0 && (X(D, lr), X(V, ur), X(V, Ot)), Qe.mathMl === !0 && (X(D, cr), X(V, pn), X(V, Ot))), d.ADD_TAGS && (typeof d.ADD_TAGS == "function" ? O.tagCheck = d.ADD_TAGS : (D === J && (D = De(D)), X(D, d.ADD_TAGS, ie))), d.ADD_ATTR && (typeof d.ADD_ATTR == "function" ? O.attributeCheck = d.ADD_ATTR : (V === I && (V = De(V)), X(V, d.ADD_ATTR, ie))), d.ADD_URI_SAFE_ATTR && X(Xt, d.ADD_URI_SAFE_ATTR, ie), d.FORBID_CONTENTS && (Fe === Yt && (Fe = De(Fe)), X(Fe, d.FORBID_CONTENTS, ie)), d.ADD_FORBID_CONTENTS && (Fe === Yt && (Fe = De(Fe)), X(Fe, d.ADD_FORBID_CONTENTS, ie)), st && (D["#text"] = !0), re && X(D, ["html", "head", "body"]), D.table && (X(D, ["tbody"]), delete j.tbody), d.TRUSTED_TYPES_POLICY) {
        if (typeof d.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw ht('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof d.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw ht('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        v = d.TRUSTED_TYPES_POLICY, E = v.createHTML("");
      } else
        v === void 0 && (v = vo(T, a)), v !== null && typeof E == "string" && (E = v.createHTML(""));
      ye && ye(d), Je = d;
    }
  }, Dr = X({}, [...ir, ...lr, ...co]), Mr = X({}, [...cr, ...uo]), ga = function(d) {
    let C = b(d);
    (!C || !C.tagName) && (C = {
      namespaceURI: Ze,
      tagName: "template"
    });
    const M = Dt(d.tagName), ae = Dt(C.tagName);
    return Zt[d.namespaceURI] ? d.namespaceURI === jt ? C.namespaceURI === ke ? M === "svg" : C.namespaceURI === Tt ? M === "svg" && (ae === "annotation-xml" || St[ae]) : !!Dr[M] : d.namespaceURI === Tt ? C.namespaceURI === ke ? M === "math" : C.namespaceURI === jt ? M === "math" && Rt[ae] : !!Mr[M] : d.namespaceURI === ke ? C.namespaceURI === jt && !Rt[ae] || C.namespaceURI === Tt && !St[ae] ? !1 : !Mr[M] && (fa[M] || !Dr[M]) : !!(it === "application/xhtml+xml" && Zt[d.namespaceURI]) : !1;
  }, Pe = function(d) {
    dt(t.removed, {
      element: d
    });
    try {
      b(d).removeChild(d);
    } catch {
      A(d);
    }
  }, ze = function(d, C) {
    try {
      dt(t.removed, {
        attribute: C.getAttributeNode(d),
        from: C
      });
    } catch {
      dt(t.removed, {
        attribute: null,
        from: C
      });
    }
    if (C.removeAttribute(d), d === "is")
      if (_e || Ne)
        try {
          Pe(C);
        } catch {
        }
      else
        try {
          C.setAttribute(d, "");
        } catch {
        }
  }, kr = function(d) {
    let C = null, M = null;
    if (be)
      d = "<remove></remove>" + d;
    else {
      const oe = or(d, /^[\r\n\t ]+/);
      M = oe && oe[0];
    }
    it === "application/xhtml+xml" && Ze === ke && (d = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + d + "</body></html>");
    const ae = v ? v.createHTML(d) : d;
    if (Ze === ke)
      try {
        C = new y().parseFromString(ae, it);
      } catch {
      }
    if (!C || !C.documentElement) {
      C = _.createDocument(Ze, "template", null);
      try {
        C.documentElement.innerHTML = Qt ? E : ae;
      } catch {
      }
    }
    const de = C.body || C.documentElement;
    return d && M && de.insertBefore(n.createTextNode(M), de.childNodes[0] || null), Ze === ke ? k.call(C, re ? "html" : "body")[0] : re ? C.documentElement : de;
  }, $r = function(d) {
    return L.call(
      d.ownerDocument || d,
      d,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, er = function(d) {
    return d instanceof x && (typeof d.nodeName != "string" || typeof d.textContent != "string" || typeof d.removeChild != "function" || !(d.attributes instanceof f) || typeof d.removeAttribute != "function" || typeof d.setAttribute != "function" || typeof d.namespaceURI != "string" || typeof d.insertBefore != "function" || typeof d.hasChildNodes != "function");
  }, Br = function(d) {
    return typeof l == "function" && d instanceof l;
  };
  function $e(U, d, C) {
    Ct(U, (M) => {
      M.call(t, d, C, Je);
    });
  }
  const zr = function(d) {
    let C = null;
    if ($e(u.beforeSanitizeElements, d, null), er(d))
      return Pe(d), !0;
    const M = ie(d.nodeName);
    if ($e(u.uponSanitizeElement, d, {
      tagName: M,
      allowedTags: D
    }), ee && d.hasChildNodes() && !Br(d.firstElementChild) && pe(/<[/\w!]/g, d.innerHTML) && pe(/<[/\w!]/g, d.textContent) || d.nodeType === pt.progressingInstruction || ee && d.nodeType === pt.comment && pe(/<[/\w]/g, d.data))
      return Pe(d), !0;
    if (!(O.tagCheck instanceof Function && O.tagCheck(M)) && (!D[M] || j[M])) {
      if (!j[M] && Hr(M) && (P.tagNameCheck instanceof RegExp && pe(P.tagNameCheck, M) || P.tagNameCheck instanceof Function && P.tagNameCheck(M)))
        return !1;
      if (st && !Fe[M]) {
        const ae = b(d) || d.parentNode, de = p(d) || d.childNodes;
        if (de && ae) {
          const oe = de.length;
          for (let we = oe - 1; we >= 0; --we) {
            const Be = N(de[we], !0);
            Be.__removalCount = (d.__removalCount || 0) + 1, ae.insertBefore(Be, m(d));
          }
        }
      }
      return Pe(d), !0;
    }
    return d instanceof h && !ga(d) || (M === "noscript" || M === "noembed" || M === "noframes") && pe(/<\/no(script|embed|frames)/i, d.innerHTML) ? (Pe(d), !0) : (W && d.nodeType === pt.text && (C = d.textContent, Ct([$, q, Q], (ae) => {
      C = ft(C, ae, " ");
    }), d.textContent !== C && (dt(t.removed, {
      element: d.cloneNode()
    }), d.textContent = C)), $e(u.afterSanitizeElements, d, null), !1);
  }, Ur = function(d, C, M) {
    if (Xe && (C === "id" || C === "name") && (M in n || M in pa))
      return !1;
    if (!(Y && !z[C] && pe(te, C))) {
      if (!(B && pe(se, C))) {
        if (!(O.attributeCheck instanceof Function && O.attributeCheck(C, d))) {
          if (!V[C] || z[C]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(Hr(d) && (P.tagNameCheck instanceof RegExp && pe(P.tagNameCheck, d) || P.tagNameCheck instanceof Function && P.tagNameCheck(d)) && (P.attributeNameCheck instanceof RegExp && pe(P.attributeNameCheck, C) || P.attributeNameCheck instanceof Function && P.attributeNameCheck(C, d)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              C === "is" && P.allowCustomizedBuiltInElements && (P.tagNameCheck instanceof RegExp && pe(P.tagNameCheck, M) || P.tagNameCheck instanceof Function && P.tagNameCheck(M)))
            ) return !1;
          } else if (!Xt[C]) {
            if (!pe(S, ft(M, he, ""))) {
              if (!((C === "src" || C === "xlink:href" || C === "href") && d !== "script" && so(M, "data:") === 0 && Lr[d])) {
                if (!(H && !pe(je, ft(M, he, "")))) {
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
  }, Hr = function(d) {
    return d !== "annotation-xml" && or(d, me);
  }, Gr = function(d) {
    $e(u.beforeSanitizeAttributes, d, null);
    const {
      attributes: C
    } = d;
    if (!C || er(d))
      return;
    const M = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: V,
      forceKeepAttr: void 0
    };
    let ae = C.length;
    for (; ae--; ) {
      const de = C[ae], {
        name: oe,
        namespaceURI: we,
        value: Be
      } = de, et = ie(oe), tr = Be;
      let ce = oe === "value" ? tr : oo(tr);
      if (M.attrName = et, M.attrValue = ce, M.keepAttr = !0, M.forceKeepAttr = void 0, $e(u.uponSanitizeAttribute, d, M), ce = M.attrValue, At && (et === "id" || et === "name") && (ze(oe, d), ce = Nt + ce), ee && pe(/((--!?|])>)|<\/(style|title|textarea)/i, ce)) {
        ze(oe, d);
        continue;
      }
      if (et === "attributename" && or(ce, "href")) {
        ze(oe, d);
        continue;
      }
      if (M.forceKeepAttr)
        continue;
      if (!M.keepAttr) {
        ze(oe, d);
        continue;
      }
      if (!Z && pe(/\/>/i, ce)) {
        ze(oe, d);
        continue;
      }
      W && Ct([$, q, Q], (qr) => {
        ce = ft(ce, qr, " ");
      });
      const Wr = ie(d.nodeName);
      if (!Ur(Wr, et, ce)) {
        ze(oe, d);
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
          we ? d.setAttributeNS(we, oe, ce) : d.setAttribute(oe, ce), er(d) ? Pe(d) : dn(t.removed);
        } catch {
          ze(oe, d);
        }
    }
    $e(u.afterSanitizeAttributes, d, null);
  }, ya = function U(d) {
    let C = null;
    const M = $r(d);
    for ($e(u.beforeSanitizeShadowDOM, d, null); C = M.nextNode(); )
      $e(u.uponSanitizeShadowNode, C, null), zr(C), Gr(C), C.content instanceof o && U(C.content);
    $e(u.afterSanitizeShadowDOM, d, null);
  };
  return t.sanitize = function(U) {
    let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, C = null, M = null, ae = null, de = null;
    if (Qt = !U, Qt && (U = "<!-->"), typeof U != "string" && !Br(U))
      if (typeof U.toString == "function") {
        if (U = U.toString(), typeof U != "string")
          throw ht("dirty is not a string, aborting");
      } else
        throw ht("toString is not a function");
    if (!t.isSupported)
      return U;
    if (ue || Jt(d), t.removed = [], typeof U == "string" && (ot = !1), ot) {
      if (U.nodeName) {
        const Be = ie(U.nodeName);
        if (!D[Be] || j[Be])
          throw ht("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (U instanceof l)
      C = kr("<!---->"), M = C.ownerDocument.importNode(U, !0), M.nodeType === pt.element && M.nodeName === "BODY" || M.nodeName === "HTML" ? C = M : C.appendChild(M);
    else {
      if (!_e && !W && !re && // eslint-disable-next-line unicorn/prefer-includes
      U.indexOf("<") === -1)
        return v && Le ? v.createHTML(U) : U;
      if (C = kr(U), !C)
        return _e ? null : Le ? E : "";
    }
    C && be && Pe(C.firstChild);
    const oe = $r(ot ? U : C);
    for (; ae = oe.nextNode(); )
      zr(ae), Gr(ae), ae.content instanceof o && ya(ae.content);
    if (ot)
      return U;
    if (_e) {
      if (Ne)
        for (de = F.call(C.ownerDocument); C.firstChild; )
          de.appendChild(C.firstChild);
      else
        de = C;
      return (V.shadowroot || V.shadowrootmode) && (de = R.call(r, de, !0)), de;
    }
    let we = re ? C.outerHTML : C.innerHTML;
    return re && D["!doctype"] && C.ownerDocument && C.ownerDocument.doctype && C.ownerDocument.doctype.name && pe(ea, C.ownerDocument.doctype.name) && (we = "<!DOCTYPE " + C.ownerDocument.doctype.name + `>
` + we), W && Ct([$, q, Q], (Be) => {
      we = ft(we, Be, " ");
    }), v && Le ? v.createHTML(we) : we;
  }, t.setConfig = function() {
    let U = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Jt(U), ue = !0;
  }, t.clearConfig = function() {
    Je = null, ue = !1;
  }, t.isValidAttribute = function(U, d, C) {
    Je || Jt({});
    const M = ie(U), ae = ie(d);
    return Ur(M, ae, C);
  }, t.addHook = function(U, d) {
    typeof d == "function" && dt(u[U], d);
  }, t.removeHook = function(U, d) {
    if (d !== void 0) {
      const C = no(u[U], d);
      return C === -1 ? void 0 : ao(u[U], C, 1)[0];
    }
    return dn(u[U]);
  }, t.removeHooks = function(U) {
    u[U] = [];
  }, t.removeAllHooks = function() {
    u = yn();
  }, t;
}
var Eo = ta();
const Ao = "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg", No = ["jpg", "jpeg", "png", "gif", "svg", "webp"], To = ["mp4", "webm", "ogg"], jo = ["txt", "json", "csv"], So = ["pdf"], xn = ["file", "camera", "camera2", "photo", "avatar", "attachment"];
function Ro(e) {
  return e.template ? e.template : "tab";
}
const ra = (e) => /^https?:\/\//i.test(e);
function _o(e) {
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    const a = r.group || "Info";
    t[a] || (t[a] = { label: a, type: "fields", fields: [] }), t[a]?.fields?.push({ name: n, ...r });
  }), t;
}
const Co = (e) => Object.entries(e ?? {}).filter(([, t]) => t.type === "geolocation").map(([t]) => t), Oo = (e) => e.reduce((t, n) => {
  const r = n.group || "__ungrouped__";
  return t[r] || (t[r] = []), t[r].push(n), t;
}, {}), Lo = (e) => e >= 1024 * 1024 ? `${(e / (1024 * 1024)).toFixed(2)} MB` : `${(e / 1024).toFixed(0)} KB`, Fo = ({
  e,
  existingFiles: t,
  maxFiles: n,
  maxFileSize: r
}) => {
  const a = e.currentTarget.files;
  if (!a) return null;
  const o = Array.from(a);
  if (t.length + o.length > n)
    return alert(`You can upload maximum ${n} file(s)`), e.currentTarget.value = "", null;
  if (r) {
    const l = Number(r), h = o.find((c) => c.size > l);
    if (h)
      return alert(
        `File "${h.name}" exceeds max size of ${Lo(r)}`
      ), e.currentTarget.value = "", null;
  }
  return a;
}, Po = (e) => Object.entries(e ?? {}).filter(([, t]) => t.type === "altitude").map(([t]) => t);
async function Ar() {
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
      accuracy: a
    } = e.coords;
    return {
      latitude: t,
      longitude: n,
      altitude: r,
      accuracy: a
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
function Io(e, t) {
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
function Do(e, t = "create") {
  return Object.entries(e).filter(([, n]) => !(n.vmode === "edit" && t === "create")).map(([n, r]) => ({
    ...r,
    name: n
  }));
}
const Ve = {
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
const Mo = (e) => {
  const t = {};
  for (const n of e) {
    const r = n.name;
    if (!r) continue;
    const a = n.ajaxchain;
    if (!a) continue;
    const o = Array.isArray(a) ? a : [a];
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
) : e, na = (e) => {
  const t = Array.isArray(e?.data?.data) ? e.data.data[0] : Array.isArray(e?.data) ? e.data[0] : e?.data?.data ?? e?.data;
  return t && typeof t == "object" && !Array.isArray(t) ? t : null;
}, Me = (e, t, n, r) => {
  if (!Array.isArray(n) || n.length === 0) return [];
  const a = r ?? (n[0] && typeof n[0] == "object" && "category" in n[0] ? "category" : void 0);
  return n.map((o) => {
    const i = o[e], l = o[t];
    return i == null || l == null ? null : {
      value: String(i),
      label: String(l),
      group: a && o[a] ? String(o[a]) : void 0
    };
  }).filter(Boolean);
}, Ue = (e, t) => {
  const n = Mt(e.options_top), r = Mt(e.options), a = t ?? [], o = Mt(e.options_bottom), i = /* @__PURE__ */ new Set(), l = (h) => h.filter((c) => i.has(c.value) ? !1 : (i.add(c.value), !0));
  return [
    ...l(n),
    ...l(r),
    ...l(a),
    ...l(o)
  ];
};
function bn(e, t) {
  if (!t?.length) return e;
  const n = (r) => t.find((a) => String(a.value) === r)?.label;
  if (typeof e == "number")
    return n(String(e)) ?? e;
  if (typeof e == "string") {
    const a = e.split(",").map((o) => o.trim()).map(n).filter(Boolean);
    return a.length ? a.join(", ") : e;
  }
  return e;
}
const ko = ({
  field: e,
  formValues: t
}) => {
  const n = {};
  if (typeof e.parameter == "string" && e.parameter)
    return n[e.parameter] = t[e.parameter], n;
  if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
    for (const [r, a] of Object.entries(e.parameter))
      n[r] = t?.[a];
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
        const [, a, o] = r;
        if (!a || !o)
          return t;
        const i = Number(a), l = o.toLowerCase();
        return l === "d" ? n.setDate(n.getDate() + i) : l === "m" ? n.setMonth(n.getMonth() + i) : l === "y" && n.setFullYear(n.getFullYear() + i), n.toISOString().split("T")[0];
      }
      return t;
    }
  }
  return n.toISOString().split("T")[0];
}, Vt = (e) => e === !0 || e === "true", $o = (e, t, n, r) => {
  e.forEach((a) => {
    const o = a?.name;
    if (!o) return;
    let i = r?.[o];
    if (i == null && (i = a.default), xn.includes(a.type ?? ""))
      t[o] = Array.isArray(i) ? i : typeof i == "string" && i.length > 0 ? i.split(",").map((h) => h.trim()).filter(Boolean) : [];
    else if (a.multiple === !0 || a.type === "tags")
      t[o] = Array.isArray(i) ? i : typeof i == "string" ? i.split(",").map((h) => h.trim()).filter(Boolean) : [];
    else if (a.type === "checkbox")
      t[o] = String(i ?? "false");
    else if (a.type === "json")
      t[o] = typeof i == "object" && i !== null ? JSON.stringify(i, null, 2) : i ?? "";
    else if (a.type === "date") {
      const h = Nr(i);
      t[o] = typeof h == "string" && h.trim() ? h.slice(0, 10) : null;
    } else a.type === "time" ? typeof i == "string" ? i.includes("T") ? t[o] = i.slice(11, 16) : t[o] = i.slice(0, 5) : t[o] = "" : o === "blocked" || o === "blacklist" ? t[o] = String(i ?? "false") : t[o] = i ?? "";
    let l;
    if (xn.includes(a.type ?? "")) {
      const h = Se.array().of(
        Se.string()
      );
      l = a.required ? h.min(1, a.error_message || `${a.label} is required`) : h;
    } else if (a.multiple === !0 || a.type === "tags") {
      const h = Se.array().of(Se.string());
      l = a.required ? h.min(1, a.error_message || `${a.label} is required`) : h;
    } else a.type === "email" ? l = Se.string().email("Invalid email") : a.type === "number" ? l = Se.number().typeError("Must be a number") : a.type === "json" ? l = Se.string().test("json", "Invalid JSON", (h) => {
      if (!h) return !0;
      try {
        return JSON.parse(h), !0;
      } catch {
        return !1;
      }
    }) : a.type === "date" ? l = Se.string().nullable() : l = Se.string();
    a?.validate && Object.entries(a.validate).forEach(([h, c]) => {
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
            a?.error_message || `Must match pattern: ${c}`
          );
          break;
        case "date":
          l = l.nullable().test(
            "date",
            "Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)",
            (f) => {
              if (f == null || f === "") return !0;
              const x = f.replace(/-/g, "/"), [y, T, g] = x.split("/");
              if (!y || !T || !g) return !1;
              const N = /* @__PURE__ */ new Date(`${g}-${T}-${y}`);
              return !isNaN(N.getTime());
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
            const y = Number(x);
            if (isNaN(y)) return f;
            if (typeof f == "number" && !isNaN(f)) {
              const T = Number(f);
              return Number.isInteger(T) ? Number(y.toFixed(T)) : y;
            }
            return y;
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
    }), a.required && (l = l.required(
      a.error_message || `${a.label || o} is required`
    )), n[o] = l;
  });
};
function Bo(e) {
  if (!e || typeof e != "object") return !1;
  const t = e.src;
  return typeof e.target == "string" && typeof t == "object" && t !== null && (t.type === "api" || typeof t.queryid == "string" || typeof t.table == "string" && typeof t.columns < "u");
}
function zo(e) {
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
  for (const a of Object.values(e))
    if (n in a)
      return a[n];
}, Uo = (e) => {
  if (!e) return [];
  if (Array.isArray(e))
    return e.map(
      (r) => [
        String(r.value),
        String(r.title ?? r.label ?? r.value)
      ]
    );
  const t = Object.values(e);
  return t.length ? typeof t[0] == "string" ? Object.entries(e).map(([r, a]) => [String(r), a]) : Object.values(e).flatMap(
    (r) => Object.entries(r).map(
      ([a, o]) => [String(a), o]
    )
  ) : [];
}, wn = (e, t = [" ", "-", "_", ".", ",", "@", "/"]) => {
  const n = t.map((a) => a.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")).join(""), r = new RegExp(`[^a-zA-Z0-9${n}]`, "g");
  return e.replace(r, "");
}, Mt = (e) => e ? Array.isArray(e) ? e.map((t) => ({
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
    const a = n.includes(".") ? n.split(".").pop() : n;
    if (a in t) {
      console.warn(`Duplicate key after normalization: ${a}`);
      continue;
    }
    t[a] = r;
  }
  return t;
};
function Ho(e) {
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
function Go(e = "") {
  return e.split(".").pop()?.toLowerCase() ?? "";
}
function Wo(e) {
  return No.includes(e) ? "image" : To.includes(e) ? "video" : So.includes(e) ? "pdf" : jo.includes(e) ? "text" : "other";
}
const vn = {
  image: "fa fa-file-image",
  pdf: "fa fa-file-pdf",
  video: "fa fa-file-video",
  text: "fa fa-file-lines",
  other: "fa fa-file"
}, qo = "__form_persist__", aa = (e) => `${qo}:${e}`;
function Ko(e) {
  return Eo.sanitize(e, {
    USE_PROFILES: { html: !0 }
  });
}
function Vo(e) {
  try {
    return JSON.parse(localStorage.getItem(aa(e)) || "{}");
  } catch {
    return {};
  }
}
function Yo(e) {
  return e.persistent ? e.persistent === !0 ? e.name : typeof e.persistent == "string" ? e.persistent : null : null;
}
function Xo(e, t, n) {
  const r = Vo(e);
  localStorage.setItem(
    aa(e),
    JSON.stringify({
      ...r,
      [t]: n
    })
  );
}
function He(e, t, n) {
  const r = Yo(t);
  r && n && Xo(n, r, e);
}
function tt(e) {
  return G.isAxiosError(e) ? e.response?.data?.message || e.message || "Something went wrong" : e instanceof Error ? e.message : typeof e == "string" ? e : "Something went wrong";
}
function dr(e) {
  return e?.data?.message ? e.data.message : e?.message ? e.message : "Operation completed successfully";
}
const sa = ({
  uploads: e,
  currentValue: t,
  multiple: n
}) => {
  const r = Array.isArray(t) ? t : t ? [t] : [], a = e.map((o) => `${o.fileId}&${o.path}`);
  return [...r, ...a];
}, Qo = (e) => {
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
}, Zo = (e) => {
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
}, Jo = (e) => {
  const t = e?.data;
  return Array.isArray(t?.results?.options) ? t.results.options[0] : Array.isArray(t?.data) ? t.data[0] : Array.isArray(t?.results) ? t.results[0] : Array.isArray(t) ? t[0] : t?.results ?? t;
}, ei = ({ fileUrl: e, category: t }) => e ? t === "image" ? /* @__PURE__ */ s.jsx("img", { src: e, className: "max-h-[80vh] mx-auto" }) : t === "pdf" || t === "text" ? /* @__PURE__ */ s.jsx("iframe", { src: e, className: "w-full h-[80vh]" }) : t === "video" ? /* @__PURE__ */ s.jsx("video", { controls: !0, className: "w-full max-h-[80vh]", children: /* @__PURE__ */ s.jsx("source", { src: e }) }) : /* @__PURE__ */ s.jsxs("div", { className: "text-center p-4", children: [
  /* @__PURE__ */ s.jsx("p", { children: "Preview not available" }),
  /* @__PURE__ */ s.jsx("a", { href: e, download: !0, className: "text-blue-600 underline", children: "Download file" })
] }) : null, gt = (e) => ({
  Authorization: `Bearer ${e.accessToken}`
}), fr = async (e) => (await G.get(
  e.baseURL + e.dbopsGetHash,
  { headers: gt(e) }
)).data.refhash, hr = async (e, t) => (await G.post(
  e.baseURL + e.dbopsGetRefId,
  t,
  { headers: gt(e) }
)).data.refid, ti = {
  async fetch(e, t, n, r) {
    const a = await fr(e);
    let o = !1, i;
    n && (o = !0, i = n), o || (i = await hr(e, {
      operation: "fetch",
      source: t.source,
      fields: t.fields ?? {},
      datahash: a,
      srcid: r
    }));
    const l = { refid: i, datahash: a, refid1: e.refid };
    t.source?.refid && (l.refid1 = t.source?.refid);
    const h = await G.post(
      e.baseURL + e.dbopsFetch,
      l,
      { headers: gt(e) }
    );
    return h.data?.data ?? h.data;
  },
  async create(e, t, n) {
    const r = await fr(e), a = await hr(e, {
      operation: "create",
      source: t.source,
      fields: t.values,
      datahash: r,
      srcid: n
    });
    return (await G.post(
      e.baseURL + e.dbopsCreate,
      { refid: a, fields: t.values, datahash: r },
      { headers: gt(e) }
    )).data;
  },
  async update(e, t, n) {
    const r = await fr(e), a = await hr(e, {
      operation: "update",
      source: t.source,
      fields: t.values,
      datahash: r,
      srcid: n
    });
    return (await G.post(
      e.baseURL + e.dbopsUpdate,
      { refid: a, fields: t.values, datahash: r },
      { headers: gt(e) }
    )).data;
  }
};
async function rt(e, t, n, r = void 0, a = void 0, o = {}) {
  try {
    let i = n;
    return i || (i = (await G({
      method: "POST",
      url: e.baseURL + e.registerQuery,
      data: { query: t, srcid: a },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    })).data.queryid), await G({
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
async function ri({
  field: e,
  value: t,
  sqlOpsUrls: n,
  setFieldOptions: r,
  values: a
}) {
  if (!e.ajaxchain || !t || !n) return;
  const o = Array.isArray(e.ajaxchain) ? e.ajaxchain : [e.ajaxchain];
  for (const i of o) {
    const l = i.src;
    if (!i || typeof i != "object" || !l || typeof l != "object") continue;
    let h;
    if ("type" in l && l.type === "api") {
      let y = e.name;
      typeof e.parameter == "string" && e.parameter && (y = e.parameter);
      const T = { [y]: t, refid: t };
      if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
        for (const [A, m] of Object.entries(e.parameter))
          T[A] = A === y ? t : a?.[m];
      const g = {
        method: l.method || "GET",
        url: n?.baseURL + l.endpoint,
        headers: {
          Authorization: `Bearer ${n?.accessToken}`
        },
        ...l.method === "GET" ? { params: T } : { data: T }
      }, { data: N } = await G(g);
      h = N;
    } else {
      let y;
      if (!l.queryid) {
        if (!l.table || !l.columns)
          throw new Error("SQL query requires field.table");
        const g = ve(l.where ?? {}, { refid: t });
        y = {
          ...l,
          table: l.table,
          cols: l.columns,
          where: g
        };
      }
      const { data: T } = await rt(
        n,
        y,
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
async function oa(e, t) {
  let n = t.previewPath ?? "/api/files/preview";
  const r = await G.get(
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
async function ia(e, t) {
  const n = e?.uploadURL ?? "/api/files/upload";
  return Promise.all(
    Array.from(t).map(async (r) => {
      const a = new FormData();
      return a.append("file", r), (await G.post(`${e?.baseURL}${n}`, a, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${e?.accessToken}`
        }
      })).data;
    })
  );
}
async function la(e, t) {
  let n = e?.removeFileURL ?? "/api/files/delete";
  return (await G.post(
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
function ni(e) {
  const t = vn[e] ?? vn.other;
  return /* @__PURE__ */ s.jsx("i", { className: `${t} text-2xl text-gray-600` });
}
const ca = ({ filePath: e, sqlOpsUrls: t }) => {
  const n = e.replace(/^[^&]*&/, ""), [r, a] = le(null), [o, i] = le(!1), l = Go(n), h = Wo(l);
  ge(() => {
    if (ra(n)) {
      a(n);
      return;
    }
    if (!t || h !== "image" && !o) return;
    let f = !0, x = null;
    return oa(n, t).then((y) => {
      f && (x = y, a(y));
    }), () => {
      f = !1, x && URL.revokeObjectURL(x);
    };
  }, [h, o, n, t]);
  let c = n.split("/").pop();
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    h === "image" && r ? /* @__PURE__ */ s.jsx(
      "img",
      {
        src: r,
        alt: c,
        title: "Click to preview",
        onClick: () => i(!0),
        className: "h-16 w-16 object-cover rounded  cursor-pointer hover:opacity-90"
      }
    ) : /* @__PURE__ */ s.jsxs(
      "div",
      {
        role: "button",
        tabIndex: 0,
        onClick: () => i(!0),
        onKeyDown: (f) => f.key === "Enter" && i(!0),
        className: "inline-flex cursor-pointer items-center gap-1",
        title: "Click to preview",
        children: [
          ni(h),
          /* @__PURE__ */ s.jsx("span", { className: "text-sm", children: c })
        ]
      }
    ),
    o && /* @__PURE__ */ s.jsx("div", { className: "fixed inset-0 bg-black/60 z-50 flex items-center justify-center", children: /* @__PURE__ */ s.jsxs("div", { className: "bg-white rounded-lg p-4 max-w-5xl w-full", children: [
      /* @__PURE__ */ s.jsx(
        "button",
        {
          className: "float-right text-sm",
          onClick: () => i(!1),
          children: "✕"
        }
      ),
      r ? /* @__PURE__ */ s.jsx(ei, { fileUrl: r, category: h }) : /* @__PURE__ */ s.jsx("div", { className: "text-center p-8", children: "Loading preview…" })
    ] }) })
  ] });
};
function Et({
  field: e,
  data: t,
  methods: n = {},
  sqlOpsUrls: r,
  refid: a,
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
  ), y = ne.useRef(!1);
  ne.useEffect(() => {
    i && x(i);
  }, [i]);
  const T = ne.useMemo(
    () => Mt(f),
    [f]
  );
  ne.useEffect(() => {
    let b = !0, v = e.valueKey ?? "value", E = e.labelKey ?? "title";
    return (async () => {
      let L = e?.options;
      if (L && (Array.isArray(L) && L.length > 0 || !Array.isArray(L) && Object.keys(L).length > 0)) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const $ = Object.values(e.options);
          if ($.length && typeof $[0] == "string") {
            x(e.options);
            return;
          }
        }
        const R = (Array.isArray(e.options) ? e.options : [e.options]).map(Te), u = Me(
          v,
          E,
          R,
          e.groupKey
          // auto-uses `category` if present
        );
        x(u);
        return;
      }
      const F = e?.source ?? {};
      if (e.type === "dataMethod") {
        const k = e.method, R = k ? n[k] : void 0;
        if (R)
          try {
            const u = await Promise.resolve(R()), $ = Array.isArray(u.data?.results?.options) ? u.data?.results?.options : Array.isArray(u?.data?.data) ? u.data.data : Array.isArray(u.data?.results) ? u.data?.results : Array.isArray(u?.data) ? u.data : u;
            if (typeof $ == "object" && !Array.isArray($)) {
              const te = Object.values($);
              if (te.length && typeof te[0] == "string") {
                x($);
                return;
              }
            }
            const q = Array.isArray($) ? $.map(Te) : [], Q = Me(v, E, q, e.groupKey);
            b && x(Q);
            return;
          } catch (u) {
            console.error("Method execution failed:", u), b && x([]);
            return;
          }
        else {
          b && x([]);
          return;
        }
      }
      if (F.type === "api" && F.endpoint)
        try {
          const k = {
            method: F.method || "GET",
            url: r?.baseURL + F.endpoint,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            },
            ...F.method === "GET" ? { params: { refid: F.refid } } : { data: { refid: F.refid } }
          }, R = await G(k), u = Array.isArray(R.data?.results?.options) ? R.data?.results?.options : Array.isArray(R?.data?.data) ? R.data.data : Array.isArray(R.data?.results) ? R.data?.results : Array.isArray(R?.data) ? R.data : R;
          if (typeof u == "object" && !Array.isArray(u)) {
            const Q = Object.values(u);
            if (Q.length && typeof Q[0] == "string") {
              x(u);
              return;
            }
          }
          const $ = Array.isArray(u) ? u.map(Te) : [], q = Me(v, E, $, e.groupKey);
          b && x(q);
          return;
        } catch (k) {
          console.error("API execution failed:", k), b && x([]);
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
              where: e.where ? a ? ve(e.where, { refid: a }) : e.where : void 0
            };
          }
          const R = await rt(r, k, e?.queryid, void 0, o), u = Array.isArray(R?.data?.data) ? R.data.data : Array.isArray(R?.data) ? R.data : R;
          if (typeof u == "object" && !Array.isArray(u)) {
            const Q = Object.values(u);
            if (Q.length && typeof Q[0] == "string") {
              x(u);
              return;
            }
          }
          const $ = Array.isArray(u) ? u.map(Te) : [], q = Me(v, E, $, e.groupKey);
          b && x(q);
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
    a
  ]);
  const g = e?.name ? t?.[e.name] : void 0;
  ne.useEffect(() => {
    y.current || !l || !g || (y.current = !0, ri({
      field: e,
      value: g,
      sqlOpsUrls: r,
      setFieldOptions: l,
      values: t ?? {}
    }));
  }, [g, r, l]);
  let N;
  typeof g == "string" ? e.type === "date" ? N = g.split("T")[0] : e.type === "time" ? N = g.includes("T") ? g.slice(11, 16) : g.slice(0, 5) : N = bn(g, T) : N = bn(g, T);
  const A = N == null ? "" : typeof N == "string" || typeof N == "number" ? N : JSON.stringify(N), m = Ho(g), p = e.type === "richtextarea" && typeof A == "string" ? Ko(A) : null;
  return /* @__PURE__ */ s.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ s.jsx("label", { className: c, children: e?.label }),
    /* @__PURE__ */ s.jsx("div", { className: "relative", children: m ? m.type === "drawn" ? /* @__PURE__ */ s.jsx("svg", { viewBox: "0 0 300 150", className: "h-24 w-full border bg-white rounded", children: m.paths.map((b, v) => /* @__PURE__ */ s.jsx(
      "path",
      {
        d: b.d,
        stroke: b.color || "#000",
        strokeWidth: b.width || 2,
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      v
    )) }) : m.type === "text" ? /* @__PURE__ */ s.jsx("svg", { viewBox: "0 0 300 150", className: "h-24 w-full border bg-white rounded", children: /* @__PURE__ */ s.jsx(
      "text",
      {
        x: "10",
        y: "100",
        fontSize: m.data.style?.fontSize || 32,
        fontFamily: m.data.style?.fontFamily || "cursive",
        fill: m.data.style?.textColor || "#000",
        children: m.data.text
      }
    ) }) : m.type === "html" ? /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "border bg-white rounded p-2 text-sm",
        dangerouslySetInnerHTML: { __html: m.html }
      }
    ) : /* @__PURE__ */ s.jsx(
      "img",
      {
        src: m.src,
        alt: "signature",
        className: "h-24 object-contain border bg-white rounded"
      }
    ) : (e.type === "file" || e.type === "camera" || e.type === "camera2" || e.type === "attachement" || e.type === "photo" || e.type === "avatar") && N ? /* @__PURE__ */ s.jsx("div", { className: "flex flex-wrap gap-2", children: String(N).split(",").map((b) => b.trim()).filter(Boolean).map((b) => /* @__PURE__ */ s.jsx(
      ca,
      {
        sqlOpsUrls: r,
        filePath: b
      },
      b
    )) }) : e.type === "richtextarea" ? /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "tiptap border border-gray-200 min-h-[400px] max-h-[220px] overflow-auto bg-white rounded p-2 text-sm",
        dangerouslySetInnerHTML: { __html: p ?? "" }
      }
    ) : /* @__PURE__ */ s.jsx("p", { className: h, children: A }) })
  ] });
}
function ua({ filePath: e, field_name: t, sqlOpsUrls: n }) {
  const [r, a] = le(null), o = e.replace(/^[^&]*&/, "");
  return ge(() => {
    if (ra(o)) {
      a(o);
      return;
    }
    if (!open || !n) return;
    let i = !0, l = null;
    return oa(o, n).then((h) => {
      i && (l = h, a(h));
    }), () => {
      i = !1, l && URL.revokeObjectURL(l);
    };
  }, [open, o, n]), r ? /* @__PURE__ */ s.jsx(
    "img",
    {
      src: r,
      alt: t,
      title: t,
      className: "h-24 w-24 object-cover rounded border border-dashed   hover:opacity-90",
      onError: (i) => {
        const l = i.currentTarget;
        l.onerror = null, l.src = Ao;
      }
    }
  ) : null;
}
function ai({
  commonInfo: e,
  infoData: t,
  hiddenFields: n = [],
  sqlOpsUrls: r,
  setFieldOptions: a,
  fieldOptions: o,
  module_refid: i,
  refid: l,
  methods: h
}) {
  const c = Lt(
    () => e?.fields?.find((y) => y.type === "avatar"),
    [e?.fields]
  ), f = c?.name, x = f && typeof t?.[f] == "string" ? t[f].trim() : "";
  return /* @__PURE__ */ s.jsx("div", { className: "bg-white border border-gray-100 p-4 min-h-3/10 overflow-auto", children: /* @__PURE__ */ s.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    c && /* @__PURE__ */ s.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ s.jsx("div", { className: "relative w-42 h-42 p-2 rounded-sm overflow-hidden bg-gray-100 flex items-center justify-center", children: x ? /* @__PURE__ */ s.jsx(
      ua,
      {
        field_name: c.name,
        filePath: x,
        sqlOpsUrls: r
      }
    ) : /* @__PURE__ */ s.jsx(
      "img",
      {
        src: "https://cdn-icons-png.flaticon.com/512/266/266033.png",
        alt: "avatar placeholder",
        className: "w-full h-full object-cover opacity-60"
      }
    ) }) }),
    /* @__PURE__ */ s.jsx("div", { className: `min-h-0 max-h-40 overflow-y-auto custom-scrollbar ${c ? "lg:col-span-10" : "lg:col-span-12"}`, children: /* @__PURE__ */ s.jsx("div", { className: "grid grid-cols-12 gap-2", children: e.fields?.map((y, T) => n.includes(y.name) || y.type === "avatar" ? null : /* @__PURE__ */ s.jsx("div", { className: `hover:bg-gray-100 transition-colors duration-200 col-span-12 sm:col-span-6 ${Ve[Ye(Number(y.width))] || "lg:col-span-4"}`, children: /* @__PURE__ */ s.jsx(
      Et,
      {
        field: y,
        data: t ?? {},
        sqlOpsUrls: r,
        methods: h,
        refid: l,
        module_refid: i,
        setFieldOptions: a,
        ...o[y.name] ? { optionsOverride: o[y.name] } : {}
      },
      y?.name
    ) }, y.name)) }) })
  ] }) });
}
function Rr({ tabObj: e, methods: t, tabName: n, sqlOpsUrls: r, refid: a, module_refid: o, setFieldOptions: i, fieldOptions: l }) {
  const [h, c] = ne.useState(null);
  return ne.useEffect(() => {
    let f = !1;
    return (async () => {
      const y = e?.config;
      if (!y?.type) {
        f || c(null);
        return;
      }
      if (y.type === "method") {
        const T = y.method, g = T ? t[T] : void 0;
        if (g)
          try {
            const N = await Promise.resolve(g());
            f || c(N || null);
          } catch (N) {
            console.error("Method execution failed:", N), f || c(null);
          }
        else
          f || c(null);
      }
      if (y.type === "api")
        try {
          const T = await G({
            method: y.method || "GET",
            // GET, POST, etc.
            url: y.url,
            data: y.body || {},
            // request body
            params: y.params || {},
            // query params
            headers: y.headers || {}
            // optional headers
          });
          f || c(T.data || null);
        } catch (T) {
          console.error("API fetch failed:", T), f || c(null);
        }
      if (y.type === "sql" && a && a != "0" || y?.dbopsid) {
        if (!r) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let T = !1, g;
          y?.dbopsid && (T = !0, g = y?.dbopsid);
          const N = await G({
            method: "GET",
            url: r.baseURL + r.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            }
          });
          if (!T) {
            let p = {
              ...y
            };
            y.where && (p = {
              ...y,
              where: ve(y.where, {
                refid: a
              })
            }), g = (await G({
              method: "POST",
              url: r.baseURL + r.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: p,
                fields: Bt(y.fields, r.operation),
                forcefill: y.forcefill,
                datahash: N.data.refhash,
                srcid: o
              },
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              }
            }))?.data.refid;
          }
          const A = await G({
            method: "POST",
            url: r.baseURL + r.dbopsFetch,
            data: {
              refid: g,
              datahash: N.data.refhash
            },
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            }
          }), m = na(A);
          f || c(m);
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
  ]), /* @__PURE__ */ s.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ s.jsx("div", { className: "grid grid-cols-12 gap-2", children: h ? Object.keys(h).map((f, x) => {
    let y = { name: f, label: f };
    return /* @__PURE__ */ s.jsx(
      "div",
      {
        className: `col-span-12 sm:col-span-6 ${Ve[Ye(e.width)] || "lg:col-span-2"}`,
        children: /* @__PURE__ */ s.jsx(
          Et,
          {
            field: y,
            data: h ?? {},
            methods: t,
            refid: a,
            sqlOpsUrls: r,
            setFieldOptions: i,
            ...l[y.name] ? { optionsOverride: l[y.name] } : {}
          },
          f
        )
      },
      `field-${x}`
    );
  }) : /* @__PURE__ */ s.jsx("div", { className: "col-span-12 flex flex-col  min-h-0", children: /* @__PURE__ */ s.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center text-gray-500", children: [
    /* @__PURE__ */ s.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ s.jsxs("svg", { className: "w-8 h-8 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
      /* @__PURE__ */ s.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" }),
      /* @__PURE__ */ s.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m8 7 4-4 4 4" })
    ] }) }),
    /* @__PURE__ */ s.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No Data Available" }),
    /* @__PURE__ */ s.jsx("p", { className: "text-sm text-gray-500 text-center max-w-sm", children: "There are no records to display  at the moment." })
  ] }) }) }) });
}
function si({
  open: e,
  title: t = "Confirm Delete",
  message: n = "Are you sure you want to delete this record?",
  onConfirm: r,
  onCancel: a
}) {
  return e ? /* @__PURE__ */ s.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40", children: /* @__PURE__ */ s.jsxs("div", { className: "bg-white rounded-lg shadow-lg w-full max-w-sm p-4", children: [
    /* @__PURE__ */ s.jsx("h3", { className: "text-sm font-semibold text-gray-900", children: t }),
    /* @__PURE__ */ s.jsx("p", { className: "mt-2 text-sm text-gray-600", children: n }),
    /* @__PURE__ */ s.jsxs("div", { className: "mt-4 flex justify-end gap-2", children: [
      /* @__PURE__ */ s.jsx(
        "button",
        {
          onClick: a,
          className: "px-3 py-1.5 text-sm rounded border border-gray-300 text-gray-700 hover:bg-gray-50",
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
function oi({
  field: e,
  formik: t,
  methods: n = {},
  sqlOpsUrls: r,
  refid: a,
  module_refid: o = "menuManager.main",
  optionsOverride: i,
  setFieldOptions: l,
  chainMap: h
}) {
  const [c, f] = le(!1), [x, y] = le(!1), [T, g] = le(
    Ue(e, i ?? [])
  ), [N, A] = le(0), [m, p] = le(""), [b, v] = le(0), E = We(null), _ = We(null), [L, F] = le(!1), k = We(m), R = e.disabled === !0;
  ge(() => {
    k.current = m;
  }, [m]), ge(() => {
    if (e.type !== "select" || e.multiple || e["no-option"] !== "false" || t.values[u] || T.length === 0) return;
    const z = T[0]?.value;
    z != null && t.setFieldValue(u, z, !1);
  }, [T]), ge(() => {
    i && g(Ue(e, i));
  }, [i]), ge(() => {
    window.formAPI = {
      setValue: (j, z) => {
        t.setFieldValue(j, z);
      },
      getValue: (j) => t.values[j],
      setValues: (j) => {
        Object.entries(j).forEach(([z, O]) => {
          t.setFieldValue(z, O);
        });
      },
      getValues: () => t.values
    }, window.setFieldValue = (j, z) => {
      t.setFieldValue(j, z);
    };
  }, [t]), ge(() => {
    if (!L) return;
    const j = (z) => {
      const O = z.target;
      _.current?.contains(O) || E.current?.contains(O) || (F(!1), p(""));
    };
    return document.addEventListener("mousedown", j), () => {
      document.removeEventListener("mousedown", j);
    };
  }, [L]);
  const u = e.name;
  ge(() => {
    let j = !0;
    return (async () => {
      let O = e.valueKey ?? "value", B = e.labelKey ?? "title";
      const Y = e?.source ?? {};
      if (e.type === "dataMethod") {
        const H = e.method, Z = H ? n[H] : void 0;
        if (Z)
          try {
            const W = await Z(), ee = Array.isArray(W.data?.results?.options) ? W.data?.results?.options : Array.isArray(W?.data?.data) ? W.data.data : Array.isArray(W.data?.results) ? W.data?.results : Array.isArray(W?.data) ? W.data : W, re = Array.isArray(ee) ? ee.map(Te) : [], ue = Me(O, B, re, e.groupKey);
            j && g(Ue(e, ue));
            return;
          } catch (W) {
            console.error("Method execution failed:", W), j && g([]);
            return;
          }
        else {
          j && g([]);
          return;
        }
      }
      if (Y.type === "api" && Y.endpoint)
        try {
          let H = {};
          if (Y.refid && (H.refid = Y.refid), e.parameter) {
            const be = ko({ field: e, formValues: t.values });
            console.log("paramsssssss", e.name, be), console.log("payload", H), H = { ...H, ...be };
          }
          const Z = {
            method: Y.method || "GET",
            url: r?.baseURL + Y.endpoint,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            },
            ...Y.method === "GET" ? { params: { refid: Y.refid } } : { data: H }
          }, W = await G(Z), ee = Array.isArray(W.data?.results?.options) ? W.data?.results?.options : Array.isArray(W?.data?.data) ? W.data.data : Array.isArray(W.data?.results) ? W.data?.results : Array.isArray(W?.data) ? W.data : W, re = Array.isArray(ee) ? ee.map(Te) : [], ue = Me(O, B, re, e.groupKey);
          j && g(Ue(e, ue));
          return;
        } catch (H) {
          console.error("API execution failed:", H), j && g([]);
          return;
        }
      if (e.table || e.type === "dataSelector" || e.queryid) {
        if (!r) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let H;
          if (e.type === "dataSelector")
            H = {
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
            H = {
              table: e.table,
              cols: e.columns,
              where: e.where ? a ? ve(e.where, { refid: a }) : e.where : void 0
            };
          }
          const Z = await rt(r, H, e?.queryid, void 0, o), W = Array.isArray(Z?.data?.data) ? Z.data.data : Array.isArray(Z?.data) ? Z.data : Z, ee = Array.isArray(W) ? W.map(Te) : [], re = Me(O, B, ee, e.groupKey);
          j && g(Ue(e, re));
        } catch (H) {
          console.error("API fetch failed:", H);
        }
      }
    })(), () => {
      j = !1;
    };
  }, [
    e.options,
    e.source,
    e.table,
    e.columns,
    e.where,
    a,
    e.queryid,
    e.groupKey,
    e.valueKey,
    e.labelKey,
    N
  ]);
  const $ = `
  w-full px-4 py-2 rounded-lg border transition-all duration-300
  backdrop-blur-sm text-gray-800 placeholder-gray-400
  focus:outline-none focus:ring-0

  ${R ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:shadow-md"}
`, q = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, Q = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, te = Lt(
    () => Uo(T),
    [T]
  ), se = Lt(() => {
    if (!e.type || !["suggest", "autosuggest", "autocomplete"].includes(e.type) || !m.trim()) return null;
    const j = m.trim().toLowerCase();
    return te.find(([, z]) => z.trim().toLowerCase() === j);
  }, [e.type, m, te]), je = te.length, he = !!(e.search && (e.queryid || e.table)), me = Lt(() => he || !m ? te : te.filter(
    ([, j]) => j.toLowerCase().includes(m.toLowerCase())
  ), [he, m, te]), S = (j, z) => {
    if (L)
      if (j.key === "ArrowDown")
        j.preventDefault(), v(
          (O) => O + 1 < me.length ? O + 1 : 0
        );
      else if (j.key === "ArrowUp")
        j.preventDefault(), v(
          (O) => O - 1 >= 0 ? O - 1 : me.length - 1
        );
      else if (j.key === "Enter") {
        j.preventDefault();
        const [O] = me[b] || [];
        if (O) {
          let B = z ? O : [...t.values[e.name], O];
          t.setFieldValue(e.name, B), He(B, e, o);
        }
        F(!1);
      } else j.key === "Escape" && (p(""), F(!1));
  };
  ge(() => {
    E.current?.querySelector(
      `[data-index="${b}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [b]), ge(() => {
    b >= me.length && v(0);
  }, [me, b]), ge(() => {
    const j = e.autocomplete, z = e.ajaxchain;
    if (!j && !z) return;
    const O = t.values[e.name];
    if (!O) return;
    const B = Array.isArray(z) ? z : z ? [z] : [];
    (async () => {
      try {
        if (Bo(j)) {
          const H = j.src;
          if (!H || !r) return;
          let Z;
          if ("type" in H && H.type === "api") {
            let ee = e.name;
            typeof e.parameter == "string" && e.parameter && (ee = e.parameter);
            const re = { [ee]: O, refid: O };
            if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
              for (const [_e, Ne] of Object.entries(e.parameter))
                re[_e] = _e === ee ? O : t.values?.[Ne];
            const ue = {
              method: H.method || "GET",
              url: r?.baseURL + H.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...H.method === "GET" ? { params: re } : { data: re }
            }, be = await G(ue);
            Z = Jo(be);
          } else {
            let ee;
            if (!H.queryid) {
              if (!H.table || !H.columns)
                throw new Error("SQL query requires field.table");
              const ue = ve(H?.where ?? {}, {
                refid: O
              });
              ee = {
                ...H,
                table: H.table,
                cols: H.columns,
                where: ue
              };
            }
            const { data: re } = await rt(r, ee, H?.queryid, O, o);
            Z = Array.isArray(re?.data?.data) ? re.data.data[0] : Array.isArray(re?.data) ? re.data[0] : re?.data;
          }
          let W = Te(Z);
          W && j.target.split(",").map((ee) => ee.trim()).forEach((ee) => {
            W[ee] !== void 0 && t.setFieldValue(ee, W[ee]);
          });
        }
        for (const H of B) {
          const Z = H.src;
          if (!H || typeof H != "object" || !Z || typeof Z != "object" || !r) continue;
          let W;
          if ("type" in Z && Z.type === "api") {
            let Ne = e.name;
            typeof e.parameter == "string" && e.parameter && (Ne = e.parameter);
            let Le = { [Ne]: O, refid: O };
            if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
              for (const [Nt, st] of Object.entries(e.parameter))
                Le[Nt] = Nt === Ne ? O : t.values?.[st];
            const Xe = {
              method: Z.method || "GET",
              url: r?.baseURL + Z.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...Z.method === "GET" ? { params: Le } : { data: Le }
            }, { data: At } = await G(Xe);
            W = At;
          } else {
            let Ne;
            if (!Z.queryid) {
              if (!Z.table || !Z.columns)
                throw new Error("SQL query requires field.table");
              const Xe = ve(Z?.where ?? {}, {
                refid: O
              });
              Ne = {
                ...Z,
                table: Z.table,
                cols: Z.columns,
                where: Xe
              };
            }
            const { data: Le } = await rt(r, Ne, Z?.queryid, O, o);
            W = Le;
          }
          let ee = e.valueKey ?? "value", re = e.labelKey ?? "title";
          const ue = Array.isArray(W?.results?.options) ? W?.results?.options : Array.isArray(W.data) ? W.data : Array.isArray(W.results) ? W.results : W, be = Array.isArray(ue) ? ue.map(Te) : [], _e = Me(
            ee,
            re,
            be,
            e.groupKey
          );
          t.setFieldValue(H.target, t.initialValues[H.target]), l?.(H.target, _e);
        }
      } catch (H) {
        console.error("Autocomplete / AjaxChain fetch failed", H);
      }
    })();
  }, [t.values[e.name]]), ge(() => {
    if (!he || !m.trim() || !r) return;
    const j = zo(e.columns ?? ""), z = new AbortController(), O = setTimeout(async () => {
      try {
        let B;
        if (!e.queryid) {
          if (!e.table || !e.cols)
            throw new Error("SQL query requires field.table");
          const be = a ? ve(e.where ?? {}, {
            refid: a
          }) : e.where;
          B = {
            ...e,
            table: e.table,
            cols: e.columns || e.cols,
            where: be
          };
        }
        let Y = {};
        Array.isArray(j) && j.forEach((be) => {
          Y[be] = [m, "LIKE"];
        });
        let H = e.valueKey ?? "value", Z = e.labelKey ?? "title";
        const { data: W } = await rt(r, B, e?.queryid, void 0, o, Y), ee = Array.isArray(W?.data?.data) ? W.data.data : Array.isArray(W?.data) ? W.data : W, re = Array.isArray(ee) ? ee.map(Te) : [], ue = Me(
          H,
          Z,
          re,
          e.groupKey
        );
        g(Ue(e, ue));
      } catch (B) {
        if (G.isCancel(B)) return;
        console.error("Search fetch failed", B);
      }
    }, 500);
    return () => {
      clearTimeout(O), z.abort();
    };
  }, [he, m, a]);
  const D = async (j) => {
    if (j.length === 0) {
      console.error("No file");
      return;
    }
    try {
      const z = await ia(r, j), O = sa({
        uploads: z,
        currentValue: t.values[u],
        multiple: e.multiple ?? !1
      });
      t.setFieldValue(
        u,
        O
      ), He(O, e, o);
    } catch (z) {
      console.error("File upload failed", z), t.setFieldError(u, "File upload failed");
    }
  }, J = async (j) => {
    const z = Array.isArray(t.values[u]) ? t.values[u] : [], O = j.split("&")[0];
    if (!O) return;
    const B = z.filter((Y) => Y.split("&")[0] !== O);
    t.setFieldValue(u, B);
    try {
      await la(r, O), He(B, e, o);
    } catch (Y) {
      console.log(Y), t.setFieldValue(u, z), window.alert("Failed to delete file due to a technical issue. Please try again.");
    }
  }, V = async (j, z, O) => {
    const B = z[j];
    if (!B) return;
    const Y = n?.[B];
    if (typeof Y != "function") {
      console.error(`Method "${String(B)}" not found`);
      return;
    }
    try {
      await Promise.resolve(Y(O));
    } catch (H) {
      console.error(`Method "${String(B)}" failed`, H);
    }
  };
  return {
    setHighlightedIndex: v,
    executeFieldMethod: V,
    handleFileUpload: D,
    handleKeyDown: S,
    setSearch: p,
    setOpen: F,
    setIsFocused: f,
    handleInputChange: (j) => {
      if (R) return;
      const z = j.target.value;
      p(z), v(0), z.trim() ? F(!0) : (F(!1), t.setFieldValue(u, ""));
    },
    handleSelect: (j) => {
      t.setFieldValue(u, j), He(j, e, o), p(""), F(!1), V("onChange", e, `${u}-${j}`);
    },
    handlePersist: He,
    setLoading: y,
    removeFile: J,
    optionCount: je,
    baseInputClasses: $,
    focusClasses: q,
    labelClasses: Q,
    search: m,
    highlightedIndex: b,
    options: T,
    isDisabled: R,
    key: u,
    filteredOptions: me,
    open: L,
    listRef: E,
    isFocused: c,
    exactMatch: se,
    triggerRef: _,
    loading: x,
    refreshOptions: () => A((j) => j + 1)
  };
}
function _r({
  anchorRef: e,
  open: t,
  children: n,
  offset: r = 4,
  maxHeight: a = 240
}) {
  const [o, i] = le({}), l = We(null);
  return xa(() => {
    if (!t || !e.current || !l.current) return;
    const h = e.current, c = () => {
      const x = h.getBoundingClientRect(), y = window.innerHeight, T = l.current?.offsetHeight || a, g = y - x.bottom, N = x.top, m = g < T && N > g ? x.top - T - r : x.bottom + r;
      i({
        position: "fixed",
        top: m,
        left: x.left,
        width: x.width,
        maxHeight: a,
        overflowY: "auto",
        zIndex: 9999
      });
    };
    c();
    const f = requestAnimationFrame(c);
    return window.addEventListener("scroll", c, !0), window.addEventListener("resize", c), () => {
      cancelAnimationFrame(f), window.removeEventListener("scroll", c, !0), window.removeEventListener("resize", c);
    };
  }, [t, e, r, a]), t ? wa(
    /* @__PURE__ */ s.jsx("div", { ref: l, style: o, children: n }),
    document.body
  ) : null;
}
function En({
  field: e,
  isDisabled: t,
  handleKeyDown: n,
  labelClasses: r,
  listRef: a,
  search: o,
  filteredOptions: i,
  highlightedIndex: l,
  setSearch: h,
  formik: c,
  executeFieldMethod: f,
  handlePersist: x,
  module_refid: y,
  options: T,
  triggerRef: g,
  open: N,
  setOpen: A
}) {
  const m = e.name;
  return /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ s.jsx(
      "input",
      {
        type: "hidden",
        name: m,
        value: JSON.stringify(c.values[m] ?? "")
      }
    ),
    /* @__PURE__ */ s.jsxs("label", { className: r, children: [
      e.label,
      e.required && /* @__PURE__ */ s.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        id: m,
        className: `
        relative w-full select-none border rounded-lg px-4 py-2.5 flex justify-between items-center
        ${t ? "opacity-70 bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 cursor-pointer"}
      `,
        ref: g,
        tabIndex: 0,
        onClick: () => {
          t || A((p) => !p);
        },
        onKeyDown: (p) => {
          t || n(p, !0);
        },
        children: [
          /* @__PURE__ */ s.jsx("span", { className: "text-sm text-gray-700", children: c.values[m] ? zt(T, c.values[m]) ?? "Select option" : `Select ${e.label}` }),
          c.values[m] && /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              onClick: (p) => {
                p.preventDefault(), p.stopPropagation(), c.setFieldValue(m, ""), A(!1), x("", e, y), h("");
              },
              className: "absolute right-10 text-gray-500 hover:text-red-500 transition-colors",
              children: /* @__PURE__ */ s.jsx("i", { className: "fa-solid fa-xmark text-xs" })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "svg",
            {
              className: "w-4 h-4 text-gray-500",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ s.jsx(
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
    /* @__PURE__ */ s.jsx(_r, { anchorRef: g, open: N, children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: a,
        className: " w-full border border-gray-200 rounded-lg bg-white shadow-md  max-h-60 overflow-y-auto p-2",
        children: [
          e.search && /* @__PURE__ */ s.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "text",
              value: o,
              onChange: (p) => {
                h(p.target.value);
              },
              onKeyDown: (p) => n(p, !0),
              placeholder: "Search...",
              className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                      bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                      focus:outline-none focus:ring-0`
            }
          ) }),
          i.length > 0 ? i.map(([p, b], v) => /* @__PURE__ */ s.jsx(
            "div",
            {
              id: `${m}-${p}`,
              "data-index": v,
              onClick: (E) => {
                E.preventDefault(), E.stopPropagation(), c.setFieldValue(m, p), x(p, e, y), A(!1), h(""), f("onChange", e, `${m}-${p}`);
              },
              className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                            ${c.values[m] === p ? "bg-indigo-50 text-indigo-600 font-medium" : l === v ? "bg-gray-100" : "hover:bg-gray-50"}`,
              children: b
            },
            p
          )) : /* @__PURE__ */ s.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
        ]
      }
    ) }),
    c.touched[m] && c.errors[m] && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(c.errors[m]) })
  ] });
}
function An({
  field: e,
  isDisabled: t,
  handleKeyDown: n,
  valueArray: r,
  labelClasses: a,
  listRef: o,
  search: i,
  filteredOptions: l,
  highlightedIndex: h,
  setSearch: c,
  formik: f,
  executeFieldMethod: x,
  handlePersist: y,
  module_refid: T,
  options: g,
  triggerRef: N,
  open: A,
  setOpen: m
}) {
  const p = e.name;
  return /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ s.jsxs("label", { className: a, children: [
      e.label,
      e.required && /* @__PURE__ */ s.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `
    relative w-full select-none border rounded-lg px-4 py-2.5 flex justify-between items-center
    ${t ? " opacity-70 bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 cursor-pointer"}
  `,
        tabIndex: 0,
        ref: N,
        onClick: () => {
          m((b) => !b);
        },
        onKeyDown: (b) => {
          t || n(b, !1);
        },
        onBlur: () => {
          e.multiple || setTimeout(() => {
            m(!1), c("");
          }, 150);
        },
        children: [
          /* @__PURE__ */ s.jsx("span", { className: "text-sm text-gray-700", children: r?.length > 0 ? r.map((b) => zt(g, b) ?? b).join(", ") : `Select ${e.label}` }),
          /* @__PURE__ */ s.jsx(
            "svg",
            {
              className: "w-4 h-4 text-gray-500",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ s.jsx(
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
    /* @__PURE__ */ s.jsx(_r, { anchorRef: N, open: A && !t, children: /* @__PURE__ */ s.jsxs("div", { ref: o, className: " w-full border border-gray-200 rounded-lg bg-white shadow-md  max-h-60 overflow-y-auto p-2", children: [
      e.search && /* @__PURE__ */ s.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ s.jsx(
        "input",
        {
          type: "text",
          value: i,
          onChange: (b) => {
            t || c(b.target.value);
          },
          placeholder: "Search...",
          className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
        }
      ) }),
      l.length > 0 ? l.map(([b, v], E) => /* @__PURE__ */ s.jsxs(
        "label",
        {
          htmlFor: `${p}-${b}`,
          className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${r?.includes(b) ? "bg-indigo-50 text-indigo-600 font-medium" : h === E ? "bg-gray-100" : "hover:bg-gray-50"}`,
          children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                id: `${p}-${b}`,
                type: "checkbox",
                checked: r?.includes(b),
                onChange: (_) => {
                  const L = _.target.checked ? [...r, b] : r?.filter((F) => F !== b);
                  f.setFieldValue(p, L), y(L, e, T), x("onChange", e, `${p}-${b}`);
                },
                onBlur: f.handleBlur,
                disabled: t,
                className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              }
            ),
            v
          ]
        },
        b
      )) : /* @__PURE__ */ s.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
    ] }) }),
    f.touched[p] && f.errors[p] && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(f.errors[p]) })
  ] });
}
function ii({
  formik: e,
  field: t,
  sqlOpsUrls: n,
  module_refid: r
}) {
  let a = t?.name;
  const o = We(null), i = t.max !== void 0 ? Number(t.max) : 1 / 0, l = Array.isArray(e.values[a]) ? e.values[a] : e.values[a] ? [e.values[a]] : [], h = async (y) => {
    const T = y.currentTarget.files;
    if (!T?.length) return;
    const g = Array.from(y.currentTarget.files || []);
    if (l.length + g.length > i) {
      alert(`You can upload maximum ${i} file(s)`), y.currentTarget.value = "";
      return;
    }
    try {
      const A = await ia(n, T), m = sa({
        uploads: A,
        currentValue: e.values[a],
        multiple: t.multiple ?? !1
      });
      e.setFieldValue(
        a,
        m
      ), He(m, t, r), y.target.value = "";
    } catch (A) {
      console.error("File upload failed", A), e.setFieldError(a, "File upload failed");
    }
  }, c = async (y) => {
    const T = Array.isArray(e.values[a]) ? e.values[a] : [], g = y.split("&")[0];
    if (!g) return;
    const N = T.filter((A) => A.split("&")[0] !== g);
    e.setFieldValue(a, N);
    try {
      if (!y.split("&")[0]) return;
      await la(n, g), He(N, t, r);
    } catch {
      e.setFieldValue(a, T), window.alert("Failed to delete file due to a technical issue. Please try again.");
    }
  }, f = Qo(t), x = t.multiple === !0;
  return /* @__PURE__ */ s.jsxs("div", { children: [
    /* @__PURE__ */ s.jsxs("label", { className: "block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700", children: [
      t.label,
      t.required && /* @__PURE__ */ s.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ s.jsx(
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
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "flex flex-wrap gap-2",
        children: [
          l.length > 0 ? l.map((y) => /* @__PURE__ */ s.jsxs("div", { className: "relative group", children: [
            /* @__PURE__ */ s.jsx(
              ua,
              {
                field_name: y,
                filePath: y,
                sqlOpsUrls: n
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  c(y);
                },
                className: "absolute -top-2 -right-2 cursor-pointer bg-white text-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xl cursor-pointer transition",
                children: "×"
              }
            )
          ] }, y)) : null,
          /* @__PURE__ */ s.jsx(
            "div",
            {
              onClick: () => o.current?.click(),
              className: "w-24 h-24 flex items-center justify-center border border-dashed rounded-md bg-gray-50 hover:bg-gray-100 cursor-pointer",
              children: /* @__PURE__ */ s.jsx("i", { className: `fa-solid ${Zo(t)} text-2xl text-gray-400` })
            }
          )
        ]
      }
    ),
    e.touched[a] && e.errors[a] && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[a]) })
  ] });
}
function li({
  field: e,
  formik: t,
  methods: n = {},
  sqlOpsUrls: r,
  refid: a,
  module_refid: o = "menuManager.main",
  optionsOverride: i,
  setFieldOptions: l,
  chainMap: h
}) {
  const {
    executeFieldMethod: c,
    handleFileUpload: f,
    handleKeyDown: x,
    setSearch: y,
    setOpen: T,
    setIsFocused: g,
    handleInputChange: N,
    handleSelect: A,
    handlePersist: m,
    setLoading: p,
    removeFile: b,
    baseInputClasses: v,
    focusClasses: E,
    labelClasses: _,
    search: L,
    highlightedIndex: F,
    options: k,
    isDisabled: R,
    key: u,
    filteredOptions: $,
    open: q,
    listRef: Q,
    triggerRef: te,
    isFocused: se,
    exactMatch: je,
    loading: he
  } = oi({
    field: e,
    formik: t,
    methods: n,
    sqlOpsUrls: r,
    refid: a,
    module_refid: o,
    chainMap: h,
    ...i && { optionsOverride: i },
    ...l && { setFieldOptions: l }
  }), me = (S) => S.icon ? /* @__PURE__ */ s.jsx("i", { className: S.icon }) : null;
  switch (e.type) {
    case "suggest":
    case "autosuggest":
    case "autocomplete": {
      const I = t.values[u] ?? "", P = L !== "" ? L : zt(k, I) ?? String(I ?? "");
      return /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ s.jsxs("label", { className: _, children: [
          e.label,
          e.required && /* @__PURE__ */ s.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ s.jsx("div", { ref: te, children: /* @__PURE__ */ s.jsx(
          "input",
          {
            className: `${v} ${E}`,
            value: P,
            placeholder: e.placeholder || "Type to search...",
            onChange: N,
            onBlur: () => {
              setTimeout(() => T(!1), 150);
            },
            onKeyDown: (j) => {
              if (j.key === "Enter") {
                if (j.preventDefault(), je) {
                  const [z] = je;
                  t.setFieldValue(u, z), m(z, e, o);
                } else L.trim() && (t.setFieldValue(u, L.trim()), m(L.trim(), e, o));
                y(""), T(!1);
                return;
              }
              x(j, !0);
            },
            disabled: R
          }
        ) }),
        /* @__PURE__ */ s.jsx(_r, { anchorRef: te, open: q && !R, children: /* @__PURE__ */ s.jsx(
          "div",
          {
            ref: Q,
            className: " w-full bg-white border rounded shadow max-h-52 overflow-y-auto",
            children: $.length > 0 && je ? $.map(([j, z], O) => /* @__PURE__ */ s.jsx(
              "div",
              {
                id: `${u}-${j}`,
                "data-index": O,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${F === O ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => A(j),
                children: z
              },
              j
            )) : /* @__PURE__ */ s.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `Press "ENTER" to ADD "${P}" ` })
          }
        ) }),
        t.touched[u] && t.errors[u] && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[u]) })
      ] });
    }
    case "dataSelector":
    case "dataSelectorFromTable":
    case "dataSelectorFromUniques":
    case "dataMethod": {
      if (e.multiple === !0) {
        const I = t.values[u];
        return /* @__PURE__ */ s.jsx(
          An,
          {
            field: e,
            isDisabled: R,
            handleKeyDown: x,
            valueArray: I,
            labelClasses: _,
            listRef: Q,
            search: L,
            filteredOptions: $,
            highlightedIndex: F,
            setSearch: y,
            formik: t,
            executeFieldMethod: c,
            handlePersist: m,
            module_refid: o,
            options: k,
            triggerRef: te,
            open: q,
            setOpen: T
          }
        );
      }
      return /* @__PURE__ */ s.jsx(
        En,
        {
          field: e,
          isDisabled: R,
          handleKeyDown: x,
          labelClasses: _,
          listRef: Q,
          search: L,
          filteredOptions: $,
          highlightedIndex: F,
          setSearch: y,
          formik: t,
          executeFieldMethod: c,
          handlePersist: m,
          module_refid: o,
          options: k,
          triggerRef: te,
          open: q,
          setOpen: T
        }
      );
    }
    case "textarea":
      return /* @__PURE__ */ s.jsx(s.Fragment, { children: /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ s.jsxs("label", { className: _, children: [
          e.label,
          e.required && /* @__PURE__ */ s.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ s.jsx(
            "textarea",
            {
              id: u,
              className: `${v} ${E} min-h-[120px] resize-none`,
              onFocus: () => g(!0),
              name: u,
              value: t.values[u],
              onBlur: t.handleBlur,
              onChange: (I) => {
                let P = I.target.value;
                e.alphanumeric !== !1 && (P = wn(P)), t.setFieldValue(u, P), m(P, e, o), c("onChange", e, `${u}`);
              },
              placeholder: e.placeholder,
              disabled: R
            }
          ),
          /* @__PURE__ */ s.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${se ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[u] && t.errors[u] && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[u]) })
      ] }) });
    case "select":
      if (e.multiple === !0) {
        const I = t.values[u];
        return /* @__PURE__ */ s.jsx(
          An,
          {
            field: e,
            isDisabled: R,
            handleKeyDown: x,
            valueArray: I,
            labelClasses: _,
            listRef: Q,
            search: L,
            filteredOptions: $,
            highlightedIndex: F,
            setSearch: y,
            formik: t,
            executeFieldMethod: c,
            handlePersist: m,
            module_refid: o,
            options: k,
            triggerRef: te,
            open: q,
            setOpen: T
          }
        );
      }
      if (e.search)
        return /* @__PURE__ */ s.jsx(
          En,
          {
            field: e,
            isDisabled: R,
            handleKeyDown: x,
            labelClasses: _,
            listRef: Q,
            search: L,
            filteredOptions: $,
            highlightedIndex: F,
            setSearch: y,
            formik: t,
            executeFieldMethod: c,
            handlePersist: m,
            module_refid: o,
            options: k,
            triggerRef: te,
            open: q,
            setOpen: T
          }
        );
      const S = Oo(k);
      return /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ s.jsxs("label", { className: _, children: [
          e.label,
          e.required && /* @__PURE__ */ s.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ s.jsxs(
            "select",
            {
              className: `${v} ${E} appearance-none ${R ? "" : "cursor-pointer"} pr-12`,
              onFocus: () => g(!0),
              name: u,
              id: u,
              value: t.values[u],
              onBlur: t.handleBlur,
              onChange: (I) => {
                t.setFieldValue(u, I.target.value), m(I.target.value, e, o), c("onChange", e, `${u}`);
              },
              disabled: R,
              children: [
                e?.["no-option"] !== "false" && !t.values[u] && /* @__PURE__ */ s.jsx("option", { value: "", children: e?.["no-option"] || `Please select ${e.label}` }),
                t.values[u] && /* @__PURE__ */ s.jsx("option", { value: "", className: "text-gray-500", children: "Clear Selection" }),
                Object.entries(S).map(
                  ([I, P]) => I === "__ungrouped__" ? P.map((j) => /* @__PURE__ */ s.jsx("option", { value: j.value, className: "py-2", children: j.label }, j.value)) : /* @__PURE__ */ s.jsx("optgroup", { label: I, children: P.map((j) => /* @__PURE__ */ s.jsx("option", { value: j.value, children: j.label }, j.value)) }, I)
                )
              ]
            }
          ),
          /* @__PURE__ */ s.jsx("div", { className: "absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none", children: /* @__PURE__ */ s.jsx(
            "svg",
            {
              className: "w-5 h-5 transition-colors duration-300 text-gray-400",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ s.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
            }
          ) })
        ] }),
        t.touched[u] && t.errors[u] && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[u]) })
      ] });
    case "radioList":
    case "radio":
      return /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ s.jsxs("label", { className: _, children: [
          e.label,
          e.required && /* @__PURE__ */ s.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: `flex ${k.length > 3 ? "flex-col" : ""} gap-2 ml-1`, children: k.map((I) => /* @__PURE__ */ s.jsxs(
          "label",
          {
            htmlFor: `${u}-${I.value}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  id: `${u}-${I.value}`,
                  type: "radio",
                  name: u,
                  checked: t.values[u] === I.value,
                  value: I.value,
                  onChange: (P) => {
                    t.setFieldValue(u, P.target.value), m(P.target.value, e, o), c("onChange", e, `${u}-${I.value}`);
                  },
                  onBlur: t.handleBlur,
                  disabled: R,
                  className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${R ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                }
              ),
              I.label
            ]
          },
          I.value
        )) }),
        t.touched[u] && t.errors[u] && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[u]) })
      ] });
    case "checkbox": {
      const I = e.multiple === !0, P = t.values[u];
      return /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ s.jsxs("label", { className: _, children: [
          e.label,
          e.required && /* @__PURE__ */ s.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "flex flex-col gap-2 ml-1", children: k.map((j) => {
          const z = I ? Array.isArray(P) && P.includes(j.value) : P === j.value;
          return /* @__PURE__ */ s.jsxs(
            "label",
            {
              className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
              children: [
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    id: `${u}-${j.value}`,
                    type: "checkbox",
                    checked: z,
                    onChange: (O) => {
                      let B;
                      if (I) {
                        const Y = Array.isArray(P) ? P : [];
                        B = O.target.checked ? [...Y, j.value] : Y.filter((H) => H !== j.value);
                      } else
                        B = O.target.checked ? j.value : "false";
                      t.setFieldValue(u, B), m(B, e, o), c("onChange", e, `${u}-${j.value}`);
                    },
                    onBlur: t.handleBlur,
                    disabled: R,
                    className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${R ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                  }
                ),
                j.label
              ]
            },
            j.value
          );
        }) }),
        t.touched[u] && t.errors[u] && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[u]) })
      ] });
    }
    case "tags": {
      const I = t.values[u] ?? [], P = L.trim(), j = (B) => {
        if (!R && B && !I.includes(B)) {
          let Y = [...I, B];
          t.setFieldValue(u, Y), m(Y, e, o), y("");
        }
      }, z = (B) => {
        let Y = I.filter((H) => H !== B);
        t.setFieldValue(
          u,
          Y
        ), m(Y, e, o);
      }, O = (B) => zt(k, B) ?? B;
      return /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ s.jsxs("label", { className: _, children: [
          e.label,
          e.required && /* @__PURE__ */ s.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: `${v} 
            flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center
            ${R ? "pointer-events-none opacity-70" : ""}
            `,
            onClick: () => !R && document.getElementById(`${u}-input`)?.focus(),
            children: [
              I.map((B) => /* @__PURE__ */ s.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ s.jsx("span", { className: "text-indigo-700", children: O(B) }),
                    /* @__PURE__ */ s.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (Y) => {
                          Y.stopPropagation(), R || z(B);
                        },
                        onMouseDown: (Y) => Y.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                B
              )),
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  id: `${u}-input`,
                  type: "text",
                  value: L,
                  onChange: (B) => y(B.target.value),
                  onKeyDown: (B) => {
                    (B.key === "Enter" || B.key === ",") && (B.preventDefault(), j(P));
                  },
                  placeholder: I.length === 0 ? e.placeholder || "Type and press Enter" : "",
                  className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                  disabled: R
                }
              )
            ]
          }
        ),
        t.touched[u] && t.errors[u] && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[u]) })
      ] });
    }
    case "camera":
    case "camera2":
    case "photo":
    case "avatar":
      return /* @__PURE__ */ s.jsx(
        ii,
        {
          formik: t,
          field: e,
          sqlOpsUrls: r,
          module_refid: o
        }
      );
    case "attachment":
    case "file":
      const D = e.multiple === !0, J = e.max !== void 0 ? Number(e.max) : 1 / 0, V = Array.isArray(t.values[u]) ? t.values[u] : t.values[u] ? [t.values[u]] : [];
      return /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ s.jsxs("label", { className: _, children: [
          e.label,
          e.required && /* @__PURE__ */ s.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "relative mb-1", children: [
          e.icon && /* @__PURE__ */ s.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: me(e) }),
          /* @__PURE__ */ s.jsx(
            "input",
            {
              id: u,
              type: "file",
              accept: e.accept,
              className: `${v} ${E} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => g(!0),
              name: u,
              multiple: D,
              onChange: (I) => {
                const P = Fo({
                  e: I,
                  existingFiles: V,
                  maxFiles: J,
                  maxFileSize: e.file_size
                });
                P && (P && f(P), c("onChange", e, u), I.currentTarget.value = "");
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: R
            }
          ),
          /* @__PURE__ */ s.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${se ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "flex flex-wrap gap-2", children: V.map((I) => /* @__PURE__ */ s.jsxs("div", { className: "relative group", children: [
          /* @__PURE__ */ s.jsx(
            ca,
            {
              sqlOpsUrls: r,
              filePath: I
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              onClick: () => b(I),
              className: "absolute -top-2 -right-2 bg-white text-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xl cursor-pointer transition",
              children: "×"
            }
          )
        ] }, I)) }),
        t.touched[u] && t.errors[u] && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[u]) })
      ] });
    case "json":
      return /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ s.jsxs("label", { className: _, children: [
          e.label,
          e.required && /* @__PURE__ */ s.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ s.jsx(
            "textarea",
            {
              id: u,
              name: u,
              value: t.values[u],
              onChange: (I) => {
                t.setFieldValue(u, I.target.value), m(I.target.value, e, o), c("onChange", e, `${u}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: R,
              className: `${v} ${E} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${se ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        t.touched[u] && t.errors[u] && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[u]) })
      ] });
    case "date": {
      const I = Nr(e.min), P = Nr(e.max);
      return /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ s.jsxs("label", { className: _, children: [
          e.label,
          e.required && /* @__PURE__ */ s.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "relative",
            children: [
              /* @__PURE__ */ s.jsx("div", { className: "absolute z-10 right-3 top-1/2 -translate-y-1/2 pointer-events-none", children: /* @__PURE__ */ s.jsx("i", { className: "fa-solid fa-calendar" }) }),
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  id: u,
                  type: "date",
                  name: u,
                  min: I,
                  max: P,
                  value: t.values[u] ?? "",
                  onChange: (j) => {
                    t.setFieldValue(u, j.target.value), m(j.target.value, e, o), c("onChange", e, `${u}`);
                  },
                  onBlur: t.handleBlur,
                  placeholder: e.placeholder,
                  disabled: R,
                  className: `${v} ${E} ${e.icon ? "pl-9" : ""}`
                }
              ),
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${se ? "opacity-20" : ""}`,
                  style: { zIndex: -1, filter: "blur(8px)" }
                }
              )
            ]
          }
        ),
        t.touched[u] && t.errors[u] && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[u]) })
      ] });
    }
    case "geolocation": {
      const I = t.values[u] || "", P = async () => {
        try {
          const { latitude: j, longitude: z } = await Ar(), O = `${j},${z}`;
          t.setFieldValue(u, O), m(O, e, o);
        } catch (j) {
          console.error(j), t.setFieldError(u, "Failed to fetch location");
        } finally {
          p(!1);
        }
      };
      return /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ s.jsxs("label", { className: _, children: [
          e.label,
          e.required && /* @__PURE__ */ s.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "text",
              value: I,
              readOnly: !0,
              className: `${v} ${E}`,
              placeholder: "Click to fetch location"
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              onClick: P,
              disabled: he,
              className: "absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 disabled:opacity-50",
              children: he ? /* @__PURE__ */ s.jsx("i", { className: "fa-solid fa-spinner fa-spin text-red-500" }) : /* @__PURE__ */ s.jsx("i", { className: "fa-solid fa-location-dot text-red-600 hover:text-red-700" })
            }
          )
        ] }),
        t.touched[u] && t.errors[u] && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[u]) })
      ] });
    }
    case "altitude": {
      const I = t.values[u] || "", P = async () => {
        try {
          p(!0);
          const { altitude: j } = await Ar();
          t.setFieldValue(u, j), m(j, e, o);
        } catch (j) {
          console.error(j), t.setFieldError(
            u,
            "Failed to fetch altitude"
          );
        } finally {
          p(!1);
        }
      };
      return /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ s.jsxs("label", { className: _, children: [
          e.label,
          e.required && /* @__PURE__ */ s.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "text",
              value: I,
              readOnly: !0,
              className: `${v} ${E}`,
              placeholder: "Click to fetch altitude"
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              onClick: P,
              disabled: he,
              className: "absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 disabled:opacity-50",
              children: he ? /* @__PURE__ */ s.jsx("i", { className: "fa-solid fa-spinner fa-spin text-red-500" }) : /* @__PURE__ */ s.jsx("i", { className: "fa-solid fa-mountain text-blue-600 hover:text-blue-700" })
            }
          )
        ] }),
        t.touched[u] && t.errors[u] && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[u]) })
      ] });
    }
    case "number":
      return /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ s.jsxs("label", { className: _, children: [
          e.label,
          e.required && /* @__PURE__ */ s.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ s.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: me(e) }),
          /* @__PURE__ */ s.jsx(
            "input",
            {
              id: u,
              type: "number",
              className: `${v} ${E} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => g(!0),
              name: u,
              value: t.values[u],
              onBlur: t.handleBlur,
              onChange: (I) => {
                t.setFieldValue(u, I.target.value), m(I.target.value, e, o), c("onChange", e, `${u}`);
              },
              step: e.step,
              placeholder: e.placeholder,
              disabled: R,
              min: e.min,
              max: e.max
            }
          ),
          /* @__PURE__ */ s.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${se ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[u] && t.errors[u] && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[u]) })
      ] });
    default:
      return /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ s.jsxs("label", { className: _, children: [
          e.label,
          e.required && /* @__PURE__ */ s.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ s.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: me(e) }),
          /* @__PURE__ */ s.jsx(
            "input",
            {
              id: u,
              type: e.type || "text",
              className: `${v} ${E} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => g(!0),
              name: u,
              value: t.values[u],
              onBlur: t.handleBlur,
              onChange: (I) => {
                let P = I.target.value;
                e.alphanumeric !== !1 && (P = wn(P)), t.setFieldValue(u, P), m(P, e, o), c("onChange", e, `${u}`);
              },
              step: e.step,
              placeholder: e.placeholder,
              disabled: R,
              minLength: e.minlength,
              maxLength: e.maxlength
            }
          ),
          /* @__PURE__ */ s.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${se ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[u] && t.errors[u] && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[u]) })
      ] });
  }
}
function ci({
  title: e,
  fields: t,
  data: n,
  onSubmit: r = async (c) => {
  },
  onCancel: a = () => {
  },
  methods: o = {},
  sqlOpsUrls: i,
  refid: l,
  module_refid: h
}) {
  const c = Do(t, i?.operation), [f, x] = ne.useState({}), y = (p, b) => {
    x((v) => ({
      ...v,
      [p]: b
    }));
  }, { initialValues: T, validationSchema: g } = ne.useMemo(() => {
    const p = {}, b = {};
    return c.forEach((v) => {
      $o([v], p, b, n);
    }), {
      initialValues: p,
      validationSchema: b
    };
  }, [c, n]), N = ba({
    initialValues: T,
    enableReinitialize: !0,
    validationSchema: Se.object().shape(g),
    onSubmit: async (p) => {
      try {
        let b = Io(p, c);
        console.log("filteredValues", b);
        const v = await r(b);
        N.resetForm();
      } catch (b) {
        console.log("error", b);
      }
    }
  });
  console.log("flatfields", c);
  function A(p) {
    p.preventDefault(), N.resetForm();
  }
  const m = ne.useMemo(
    () => Mo(c),
    [c]
  );
  return /* @__PURE__ */ s.jsx("div", { className: "relative  max-w-full ", children: /* @__PURE__ */ s.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ s.jsxs("form", { onSubmit: N.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "grid grid-flow-col auto-cols-max gap-4  overflow-x-auto", children: [
      c.map((p) => {
        const v = `${Vt(p.hidden) ? "hidden" : ""}`;
        return /* @__PURE__ */ s.jsx(
          "div",
          {
            id: `wrapper-${p.name}`,
            className: v,
            children: /* @__PURE__ */ s.jsx(
              li,
              {
                refid: l,
                module_refid: h,
                sqlOpsUrls: i,
                chainMap: m,
                field: p,
                formik: N,
                methods: o,
                setFieldOptions: y,
                ...f[p.name] ? { optionsOverride: f[p.name] } : {}
              }
            )
          },
          p?.name
        );
      }),
      /* @__PURE__ */ s.jsxs("div", { className: "", children: [
        /* @__PURE__ */ s.jsx("div", { children: "  " }),
        /* @__PURE__ */ s.jsx("button", { type: "button", onClick: A, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Reset" }),
        Object.keys(N.errors).length > 0 && /* @__PURE__ */ s.jsx("div", { children: "  " })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "", children: [
        /* @__PURE__ */ s.jsx("div", { children: "  " }),
        /* @__PURE__ */ s.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" }),
        Object.keys(N.errors).length > 0 && /* @__PURE__ */ s.jsx("div", { children: "  " })
      ] })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "mt-8 flex justify-between space-x-3", children: /* @__PURE__ */ s.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }) })
  ] }) }) });
}
function ui({
  formJson: e,
  methods: t = {},
  onCancel: n = () => {
  },
  components: r = {},
  callback: a = () => {
  },
  initialvalues: o,
  setEditData: i,
  toast: l
}) {
  const h = e.endPoints, c = e?.source?.refid, [f, x] = ne.useState(o ?? {}), y = ne.useMemo(() => Co(e.fields), [e.fields]), T = ne.useMemo(() => Po(e.fields), [e.fields]);
  ne.useEffect(() => {
    let m = !0;
    const p = async () => {
      try {
        const { latitude: v, longitude: E, altitude: _ } = await Ar(), L = `${v},${E}`, F = {};
        y.forEach((k) => {
          F[k] = L;
        }), T.forEach((k) => {
          F[k] = _ ?? "";
        }), m && x((k) => ({
          ...k,
          ...F
        }));
      } catch (v) {
        console.warn("Geo fetch failed", v);
      }
    }, b = setTimeout(() => {
      (y.length > 0 || T.length > 0) && p();
    }, 0);
    return () => {
      m = !1, clearTimeout(b);
    };
  }, [y, T]), ne.useEffect(() => {
    x((m) => ({
      ...m,
      ...o ?? {}
    }));
  }, [o]);
  const g = ne.useCallback(
    (m) => {
      m && x((p) => ({
        ...p,
        ...m
      }));
    },
    []
  );
  ne.useEffect(() => {
    let m = !0;
    return (async () => {
      const b = e?.source ?? {};
      if (b?.type) {
        if (b.type === "method" && h?.operation !== "create") {
          const v = b.method, E = v ? t[v] : void 0;
          if (E)
            try {
              const _ = await E();
              m && g(_);
            } catch (_) {
              console.error("Method execution failed:", _);
            }
        }
        if (b.type === "api" && h?.operation !== "create")
          try {
            const v = {
              method: b.method || "GET",
              url: h?.baseURL + b.endpoint,
              headers: {
                Authorization: `Bearer ${h?.accessToken}`
              },
              ...b.method === "GET" ? { params: { refid: b.refid } } : { data: { refid: b.refid } }
            }, { data: E } = await G(v), _ = E?.results?.options ? E?.results?.options : E.data ? E.data : E.results ? E.results : E;
            m && g(_ ?? {});
          } catch (v) {
            console.error("API fetch failed:", v);
          }
        if (b.type === "sql" && b.refid && b.refid !== "0" && h?.operation !== "create" || h?.operation !== "create" && b.dbopsid) {
          if (!h) {
            console.error("SQL source requires formJson.endPoints but it is missing");
            return;
          }
          try {
            const v = await ti.fetch(h, {
              source: {
                ...b,
                table: b.table,
                columns: b.columns,
                where: ve(b.where, {
                  refid: c
                })
              },
              fields: Bt(e.fields, h.operation)
            }, b?.dbopsid, e?.module_refid);
            m && g(v);
          } catch (v) {
            console.error("API fetch failed:", v);
          }
        }
      }
    })(), () => {
      m = !1;
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
  const N = async (m) => {
    const p = e?.source ?? {};
    let b = { ...m }, v = "0,0";
    if (y.length > 0 || T.length > 0) {
      const E = y[0];
      v = (E ? m[E] : null) || "0,0";
      const L = y.filter(
        (u) => !m[u]
      ), F = T.filter(
        (u) => !m[u]
      ), k = T[0], R = k ? m[k] : null;
      (L.length > 0 || F.length > 0) && (b = {
        ...m,
        ...Object.fromEntries(
          L.map((u) => [u, v])
        ),
        ...Object.fromEntries(
          F.map((u) => [
            u,
            R
          ])
        )
      });
    }
    if (p.type === "method") {
      const E = p.method, _ = E ? t[E] : void 0;
      if (_)
        try {
          let L = b ? { ...b, geolocation: v } : {};
          const F = await _(L);
          i?.(null), a?.(F), l?.success?.(dr(F));
        } catch (L) {
          throw a?.(L), l?.error?.(tt(L)), new Error(tt(L));
        }
    }
    if (p.type === "api") {
      if (!h) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const E = await G({
          method: p.method || "POST",
          url: h.baseURL + p.endpoint,
          data: b ?? {},
          headers: {
            Authorization: `Bearer ${h?.accessToken}`
          }
        });
        i?.(null), a?.(E), l?.success?.(dr(E));
      } catch (E) {
        throw a?.(E), l?.error?.(tt(E)), new Error(tt(E));
      }
    }
    if (p.type === "sql") {
      const E = e.endPoints;
      if (!E)
        throw new Error("SQL source requires formJson.endPoints but it is missing");
      try {
        let _ = !1, L;
        p?.dbopsid && (_ = !0, L = p?.dbopsid);
        const F = await G({
          method: "GET",
          url: E.baseURL + E.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${E?.accessToken}`
          }
        });
        if (!_) {
          let u = {
            ...p
          };
          p.where && (u = {
            ...p,
            where: ve(p.where, {
              refid: c
            })
          }), L = (await G({
            method: "POST",
            url: E.baseURL + E.dbopsGetRefId,
            data: {
              operation: E.operation,
              source: u,
              fields: Bt(e.fields, E.operation),
              forcefill: e.forcefill,
              datahash: F.data.refhash,
              scrid: e?.module_refid
            },
            headers: {
              Authorization: `Bearer ${E?.accessToken}`
            }
          }))?.data.refid;
        }
        let k = {
          refid: L,
          fields: b,
          datahash: F.data.refhash,
          refid1: E.refid,
          geolocation: v
        };
        console.log("payload", k), p?.refid && (k.refid1 = p?.refid);
        const R = await G({
          method: "POST",
          url: E.baseURL + E[E.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: k,
          headers: {
            Authorization: `Bearer ${E?.accessToken}`
          }
        });
        l?.success?.(dr(R)), i?.(null), a?.(R);
      } catch (_) {
        throw a?.(_), l?.error?.(tt(_)), new Error(tt(_));
      }
    }
  }, A = {
    simple: /* @__PURE__ */ s.jsx(
      ci,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: f,
        onSubmit: N,
        onCancel: n,
        methods: t,
        components: r,
        sqlOpsUrls: h,
        refid: c,
        module_refid: e?.module_refid
      }
    )
  };
  return /* @__PURE__ */ s.jsx("div", { className: "relative", children: A.simple });
}
function Cr({ tabObj: e, methods: t, tabName: n, sqlOpsUrls: r, refid: a, Reports: o, toast: i, handleAction: l, infoViewJson: h }) {
  const [c, f] = le(!1), [x, y] = le(null), [T, g] = ne.useState(0), [N, A] = ne.useState(null), m = e?.config, p = e?.config, b = p?.["popup.form"] ? "popup.form" : (p?.form, "form"), v = p?.[b] && Object.keys(p?.[b]).length > 0, E = (R) => {
    let u = Te(R.data);
    A(u);
  }, _ = (R) => {
    A(R), g((u) => u + 1);
  }, L = (R) => {
    let u = Te(R.data);
    y(u), f(!0);
  }, F = async () => {
    if (x?.id) {
      if (!r) {
        window.alert("Delete configuration missing.");
        return;
      }
      try {
        let R = e?.config;
        const u = R?.["popup.form"] ? "popup.form" : (R?.form, "form"), $ = R?.[u];
        if (!$?.source) throw new Error("Form source missing");
        let q = !1, Q;
        $?.source?.dbopsid && (q = !0, Q = $?.source?.dbopsid);
        const te = await G({
          method: "GET",
          url: r.baseURL + r.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${r.accessToken}`
          }
        });
        if (!q) {
          let se = { ...$.source, refid: x.id };
          $.source.where && (se = {
            ...se,
            where: ve($.source.where, {
              refid: x?.id
            })
          }), Q = (await G({
            method: "POST",
            url: r.baseURL + r.dbopsGetRefId,
            data: {
              operation: "update",
              source: se,
              fields: $.fields,
              forcefill: $.forcefill,
              datahash: te.data.refhash,
              scrid: h?.module_refid
            },
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            }
          }))?.data.refid;
        }
        await G({
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
        }), window.alert("Record deleted successfully."), g((se) => se + 1);
      } catch (R) {
        console.error(R), window.alert("Failed to delete record. Please try again");
      } finally {
        y(null), f(!1);
      }
    }
  }, k = () => {
    y(null), f(!1);
  };
  return /* @__PURE__ */ s.jsx(s.Fragment, { children: o ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    m?.datagrid && /* @__PURE__ */ s.jsx(
      o,
      {
        methods: { ...t, deleteRecord: L, editRecord: E },
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
          endPoints: r,
          actions: { ...m?.actions, ...h?.buttons, ...h.actions },
          datagrid: m?.datagrid,
          buttons: m?.buttons,
          refresh: T
        },
        onButtonClick: l
      }
    ),
    v && /* @__PURE__ */ s.jsx(
      ui,
      {
        formJson: {
          ...p[b],
          source: {
            ...p?.[b].source,
            refid: N?.id
          },
          endPoints: {
            ...r,
            operation: N ? "update" : "create"
          },
          module_refid: h?.module_refid
        },
        toast: i,
        methods: t,
        initialvalues: N ?? {},
        setEditData: _
      }
    ),
    /* @__PURE__ */ s.jsx(
      si,
      {
        open: c,
        onConfirm: F,
        onCancel: k
      }
    )
  ] }) : /* @__PURE__ */ s.jsx("h3", { children: "Report not found" }) });
}
function Or(e, t) {
  if (!e || !t) return null;
  const n = t[e];
  if (ne.isValidElement(n))
    return n;
  if (typeof n == "function") {
    const r = n;
    return /* @__PURE__ */ s.jsx(r, {});
  }
  return null;
}
const Nn = ({ groups: e, groupNames: t, setActiveTabIndex: n, activeTabIndex: r }) => /* @__PURE__ */ s.jsx(
  "nav",
  {
    className: "flex flex-col overflow-y-auto h-full px-2 py-1 space-y-1",
    children: t.length > 0 ? t.map((a, o) => /* @__PURE__ */ s.jsx(
      "button",
      {
        type: "button",
        onClick: () => n(o),
        className: `cursor-pointer w-full text-left py-2 px-3 rounded-md text-sm font-semibold transition-all duration-200 ${r === o ? "bg-white shadow text-action" : "text-gray-600 hover:bg-white/50"}`,
        children: /* @__PURE__ */ s.jsx("span", { className: "truncate", children: e[a]?.label || a })
      },
      a
    )) : /* @__PURE__ */ s.jsx("div", { className: "py-3 px-2 text-sm text-gray-500", children: "No group available" })
  }
), di = ({
  groups: e,
  groupNames: t,
  setActiveTabIndex: n,
  activeTabIndex: r,
  layoutConfig: a,
  showScrollHint: o,
  isCommonInfo: i,
  tabsNavRef: l
}) => {
  const [h, c] = le(!1), f = We(null);
  return ge(() => {
    const x = (y) => {
      f.current && !f.current.contains(y.target) && c(!1);
    };
    return document.addEventListener("mousedown", x), () => document.removeEventListener("mousedown", x);
  }, []), /* @__PURE__ */ s.jsxs("div", { className: a?.tabNavClass || "relative z-10", children: [
    o && /* @__PURE__ */ s.jsx("div", { className: "absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 flex items-center justify-center", children: /* @__PURE__ */ s.jsx(
      "button",
      {
        onClick: () => l.current?.scrollBy({ left: -200, behavior: "smooth" }),
        className: "w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group",
        children: /* @__PURE__ */ s.jsx("svg", { className: "w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ s.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
      }
    ) }),
    /* @__PURE__ */ s.jsxs("div", { className: "absolute right-0 top-1/2 -translate-y-1/2 z-20 w-18 flex items-center justify-between pr-1", children: [
      o && /* @__PURE__ */ s.jsx(
        "button",
        {
          onClick: () => l.current?.scrollBy({ left: 200, behavior: "smooth" }),
          className: "w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group",
          children: /* @__PURE__ */ s.jsx("svg", { className: "w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ s.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
        }
      ),
      /* @__PURE__ */ s.jsxs("div", { className: "relative", ref: f, children: [
        /* @__PURE__ */ s.jsx(
          "button",
          {
            onClick: () => c(!h),
            className: "ml-1 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200",
            children: "⋮"
          }
        ),
        h && /* @__PURE__ */ s.jsx("div", { className: "absolute right-0 mt-2 w-48 max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-30", children: t.map((x, y) => /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              n(y), c(!1);
            },
            className: `w-full text-left px-3 py-2 text-sm truncate hover:bg-gray-100 ${r === y ? "bg-gray-50 font-semibold text-action" : "text-gray-700"}`,
            children: e[x]?.label || x
          },
          x
        )) })
      ] })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: `relative bg-gray-100 ${i ? "" : "rounded-t-lg"} px-1 pt-1 shadow-inner overflow-hidden`, children: /* @__PURE__ */ s.jsx(
      "nav",
      {
        ref: l,
        className: "relative flex overflow-x-auto scrollbar-hide scroll-smooth",
        style: {
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        },
        children: t.length > 0 ? t.map((x, y) => /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            onClick: () => n(y),
            className: `relative cursor-pointer flex-shrink-0
            min-w-[8rem]   
            py-2 px-8
            rounded-t-lg text-xs sm:text-sm font-semibold
            transition-all duration-300 ease-out
            focus:outline-none whitespace-nowrap
            ${r === y ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
            children: /* @__PURE__ */ s.jsx("span", { className: "relative z-10 flex items-center justify-center gap-1 sm:gap-2", children: /* @__PURE__ */ s.jsx("span", { className: "truncate", children: e[x]?.label || x }) })
          },
          x
        )) : /* @__PURE__ */ s.jsx("div", { className: "py-3 px-6 text-sm text-gray-500", children: "No group available" })
      }
    ) })
  ] });
}, Tn = ({
  groupNames: e,
  activeTabIndex: t,
  layoutConfig: n,
  tabObj: r,
  infoData: a,
  setActiveTabIndex: o,
  renderView: i,
  methods: l = {},
  refid: h,
  sqlOpsUrls: c,
  module_refid: f,
  fieldOptions: x,
  setFieldOptions: y,
  buttons: T,
  handleAction: g,
  components: N
}) => {
  let A = T ? Object.entries(T).filter(([b, v]) => v.groups ? v.groups.includes(e[t]) : !0) : [];
  async function m(b, v) {
    const E = l?.[b];
    if (E) {
      try {
        await E();
      } catch (_) {
        console.error("Method execution failed:", _);
      }
      return;
    }
    g?.({ [b]: v }, a);
  }
  const p = Or(r?.component, N);
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "bg-white rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex-1 flex flex-col min-h-0",
      children: [
        e.length > 0 ? r?.type === "fields" && r?.fields ? /* @__PURE__ */ s.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ s.jsx("div", { className: n?.fieldGridClass || "grid grid-cols-12 gap-2", children: r.fields.map((b, v) => Vt(b.hidden) ? null : /* @__PURE__ */ s.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${Ve[Ye(Number(b.width))] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ s.jsx(
              Et,
              {
                field: b,
                data: a ?? {},
                methods: l,
                refid: h,
                sqlOpsUrls: c,
                module_refid: f,
                setFieldOptions: y,
                ...x[b.name] ? { optionsOverride: x[b.name] } : {}
              }
            )
          },
          b?.name ?? `field-${v}`
        )) }) }) : r?.type === "component" && p ? /* @__PURE__ */ s.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: p }) : r ? /* @__PURE__ */ s.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: i(r, e[t] || "") }) : null : /* @__PURE__ */ s.jsx("div", { className: "flex-1 col-span-full text-center py-8 text-gray-500", children: "No data available" }),
        /* @__PURE__ */ s.jsx("div", { className: "flex justify-end gap-2 p-3 border-t border-gray-100", children: A && A.map(([b, v]) => /* @__PURE__ */ s.jsx(
          "button",
          {
            onClick: () => m(b, v),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: v.label
          },
          b
        )) }),
        e.length > 5 && /* @__PURE__ */ s.jsxs("div", { className: "mt-2 pt-2 border-t border-gray-100 flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-500", children: [
            /* @__PURE__ */ s.jsxs("span", { children: [
              "Tab ",
              t + 1,
              " of ",
              e.length
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "flex gap-1", children: [
              e.slice(0, 5).map((b, v) => /* @__PURE__ */ s.jsx(
                "div",
                {
                  className: `w-2 h-2 rounded-full transition-all duration-300 ${v === t ? "bg-action w-6" : "bg-gray-300"}`
                },
                v
              )),
              e.length > 5 && /* @__PURE__ */ s.jsxs("span", { className: "text-xs text-gray-400 ml-1", children: [
                "+",
                e.length - 5
              ] })
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "hidden sm:flex gap-2", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: () => o(Math.max(0, t - 1)),
                disabled: t === 0,
                className: "px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                children: "Previous"
              }
            ),
            /* @__PURE__ */ s.jsx(
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
        e.length <= 5 && /* @__PURE__ */ s.jsx("div", { className: " pt-3 border-t border-gray-100", children: /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
          /* @__PURE__ */ s.jsxs("span", { children: [
            "Tab ",
            t + 1,
            " of ",
            e.length
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "flex gap-1", children: e.map((b, v) => /* @__PURE__ */ s.jsx(
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
function jn({
  groups: e,
  methods: t = {},
  infoData: n,
  viewRenderers: r = {},
  isCommonInfo: a,
  layoutConfig: o = {},
  viewMode: i,
  sqlOpsUrls: l,
  refid: h,
  Reports: c,
  toast: f,
  handleAction: x = () => {
  },
  infoViewJson: y,
  fieldOptions: T,
  setFieldOptions: g,
  components: N
}) {
  const [A, m] = le(0), [p, b] = le(!1), v = We(null), E = Object.keys(e);
  ge(() => {
    const q = () => {
      if (v.current) {
        const Q = v.current;
        b(Q.scrollWidth > Q.clientWidth);
      }
    };
    return q(), window.addEventListener("resize", q), () => window.removeEventListener("resize", q);
  }, [E.length]), ge(() => {
    if (v.current && E.length > 0) {
      const q = v.current.children[A];
      q && q.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [A, E.length]);
  const _ = i === "tableft", L = i === "tabright", F = !_ && !L, k = e[E[A] ?? ""] || null, R = {
    single: (q, Q) => /* @__PURE__ */ s.jsx(Rr, { fieldOptions: T, setFieldOptions: g, module_refid: y.module_refid, tabObj: q, methods: t, tabName: Q, sqlOpsUrls: l, refid: h }),
    grid: (q, Q) => /* @__PURE__ */ s.jsx(
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
        infoViewJson: y
      }
    )
  }, u = k?.config?.uimode, $ = r[u] || R[u] || (() => /* @__PURE__ */ s.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No UI mode for this type" }));
  return F ? /* @__PURE__ */ s.jsxs("div", { className: "flex-1 flex flex-col min-h-0 ", children: [
    /* @__PURE__ */ s.jsx(
      di,
      {
        groupNames: E,
        groups: e,
        setActiveTabIndex: m,
        activeTabIndex: A,
        tabsNavRef: v,
        isCommonInfo: a,
        showScrollHint: p,
        layoutConfig: o
      }
    ),
    /* @__PURE__ */ s.jsx(
      Tn,
      {
        groupNames: E,
        activeTabIndex: A,
        layoutConfig: o,
        tabObj: k,
        infoData: n,
        setActiveTabIndex: m,
        renderView: $,
        groups: e,
        methods: t,
        refid: h,
        sqlOpsUrls: l,
        module_refid: y.module_refid,
        fieldOptions: T,
        setFieldOptions: g,
        buttons: y.buttons,
        handleAction: x,
        ...N ? { components: N } : {}
      }
    )
  ] }) : /* @__PURE__ */ s.jsxs("div", { className: "flex-1 flex min-h-0", children: [
    _ && /* @__PURE__ */ s.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ s.jsx(
      Nn,
      {
        groupNames: E,
        groups: e,
        setActiveTabIndex: m,
        activeTabIndex: A
      }
    ) }),
    /* @__PURE__ */ s.jsx("main", { className: "flex-1 flex flex-col min-h-0 overflow-auto", children: /* @__PURE__ */ s.jsx(
      Tn,
      {
        groupNames: E,
        activeTabIndex: A,
        layoutConfig: o,
        tabObj: k,
        infoData: n,
        setActiveTabIndex: m,
        renderView: $,
        groups: e,
        methods: t,
        refid: h,
        module_refid: y.module_refid,
        sqlOpsUrls: l,
        fieldOptions: T,
        setFieldOptions: g,
        handleAction: x,
        ...N ? { components: N } : {}
      }
    ) }),
    L && /* @__PURE__ */ s.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ s.jsx(
      Nn,
      {
        groupNames: E,
        groups: e,
        setActiveTabIndex: m,
        activeTabIndex: A
      }
    ) })
  ] });
}
function fi({ title: e, children: t, isFirst: n }) {
  const [r, a] = le(n);
  return /* @__PURE__ */ s.jsx("div", { className: "group relative mt-1 flex-1 flex flex-col min-h-0 max-h-screen", children: /* @__PURE__ */ s.jsxs("div", { className: "flex-1 flex flex-col min-h-0 relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ s.jsxs(
      "button",
      {
        onClick: () => a(!r),
        className: "w-full bg-gray-50 flex justify-between items-center px-2 py-1 b text-left transition-all duration-300 ",
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ s.jsx("div", { className: `w-3 h-3 rounded-full transition-all duration-300 ${r ? "bg-action" : "bg-gray-300"}` }),
            /* @__PURE__ */ s.jsx("h3", { className: "text-md capitalize font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: e })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: `relative transition-all duration-300 ${r ? "rotate-180" : ""}`, children: [
            /* @__PURE__ */ s.jsx("div", { className: `absolute inset-0 rounded-full blur-md transition-opacity duration-300 ${r ? "bg-action opacity-30" : "bg-transparent opacity-0"}` }),
            /* @__PURE__ */ s.jsx(
              "svg",
              {
                className: "relative w-4 h-4 text-gray-500 group-hover:text-action-500 transition-colors duration-300",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ s.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: `flex-1 flex flex-col min-h-0 transition-all  duration-500 ease-in-out overflow-hidden ${r ? "max-h-full opacity-100" : "max-h-0 opacity-0"}`,
        children: /* @__PURE__ */ s.jsx("div", { className: "px-1 pb-1 bg-gradient-to-br from-gray-50/50 to-white flex-1 flex flex-col min-h-0", children: /* @__PURE__ */ s.jsx("div", { className: "space-y-5 pt-1 flex-1 flex flex-col min-h-0 overflow-y-auto", children: t }) })
      }
    )
  ] }) });
}
function hi({
  groups: e,
  methods: t = {},
  infoData: n,
  viewRenderers: r = {},
  sqlOpsUrls: a,
  refid: o,
  Reports: i,
  toast: l,
  handleAction: h = () => {
  },
  infoViewJson: c,
  fieldOptions: f,
  setFieldOptions: x,
  components: y
}) {
  const T = {
    single: (m, p) => /* @__PURE__ */ s.jsx(
      Rr,
      {
        tabObj: m,
        methods: t,
        tabName: p,
        sqlOpsUrls: a,
        fieldOptions: f,
        setFieldOptions: x,
        refid: o,
        module_refid: c?.module_refid
      }
    ),
    grid: (m, p) => /* @__PURE__ */ s.jsx(
      Cr,
      {
        ...i ? { Reports: i } : {},
        toast: l,
        infoViewJson: c,
        handleAction: h,
        tabObj: m,
        methods: t,
        tabName: p,
        sqlOpsUrls: a,
        refid: o
      }
    )
  }, g = c?.buttons;
  let N = g ? Object.entries(g).filter(([m, p]) => !(p.groups && p.groups.length > 0)) : [];
  async function A(m, p) {
    const b = t?.[m];
    if (b) {
      try {
        await b();
      } catch (v) {
        console.error("Method execution failed:", v);
      }
      return;
    }
    h?.({ [m]: p }, n);
  }
  return /* @__PURE__ */ s.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ s.jsx("div", { className: "mx-auto", children: /* @__PURE__ */ s.jsxs("div", { className: "grid grid-cols-12 gap-2 min-h-0", children: [
    e && Object.entries(e).map(([m, p], b) => {
      let v = g ? Object.entries(g).filter(([_, L]) => L.groups ? L.groups.includes(m) : !1) : [];
      const E = Or(p.component, y);
      return /* @__PURE__ */ s.jsx(
        "div",
        {
          className: `col-span-12 ${Ve[Ye(Number(p.width))] || "lg:col-span-12"}`,
          children: /* @__PURE__ */ s.jsxs(fi, { title: p.label, isFirst: b === 0, children: [
            p?.type === "fields" && p?.fields ? /* @__PURE__ */ s.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ s.jsx("div", { className: "grid grid-cols-12 gap-2", children: p.fields.map((_, L) => Vt(_.hidden) ? null : /* @__PURE__ */ s.jsx(
              "div",
              {
                className: `col-span-12 sm:col-span-6 ${Ve[Ye(Number(_.width))] || "lg:col-span-2"}`,
                children: /* @__PURE__ */ s.jsx(
                  Et,
                  {
                    module_refid: c?.module_refid,
                    methods: t,
                    field: _,
                    data: n ?? {},
                    setFieldOptions: x,
                    ...f[_.name] ? { optionsOverride: f[_.name] } : {},
                    sqlOpsUrls: a,
                    refid: o
                  }
                )
              },
              _?.name ?? `field-${L}`
            )) }) }) : p?.type === "component" && E ? /* @__PURE__ */ s.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: E }) : p ? /* @__PURE__ */ s.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: r[p.config?.uimode]?.(p) || T[p.config?.uimode]?.(p, m) || /* @__PURE__ */ s.jsx("div", { children: "No renderer for this type" }) }) : null,
            /* @__PURE__ */ s.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: v && v.map(([_, L]) => /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: () => A(_, L),
                className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
                children: L.label
              },
              _
            )) })
          ] }, m)
        },
        m
      );
    }),
    N && /* @__PURE__ */ s.jsx("div", { className: "flex justify-end gap-2 p-3 border-t border-gray-100", children: N.map(([m, p]) => /* @__PURE__ */ s.jsx(
      "button",
      {
        onClick: () => A(m, p),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: p.label
      },
      m
    )) })
  ] }) }) });
}
function mi({ title: e, children: t }) {
  return /* @__PURE__ */ s.jsx("div", { className: "group relative mt-1 flex-1 flex flex-col min-h-0 max-h-screen", children: /* @__PURE__ */ s.jsxs("div", { className: "flex flex-col min-h-0 relative  bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ s.jsx(
      "button",
      {
        className: "w-full bg-gray-50 flex justify-between items-center px-2 py-1 b text-left transition-all duration-300 ",
        children: /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ s.jsx("div", { className: "w-3 h-3 rounded-full transition-all duration-300 bg-action" }),
          /* @__PURE__ */ s.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r capitalize from-gray-800 to-gray-600 bg-clip-text text-transparent", children: e })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: `flex flex-col min-h-0 transition-all duration-500 ease-in-out opacity-100'
            }`,
        children: /* @__PURE__ */ s.jsx("div", { className: "px-1 pb-1 bg-gradient-to-br from-gray-50/50 to-white flex flex-col min-h-0", children: /* @__PURE__ */ s.jsx("div", { className: "space-y-5 pt-1 flex-1 flex flex-col min-h-0 overflow-y-auto", children: t }) })
      }
    )
  ] }) });
}
function pi({
  groups: e,
  methods: t = {},
  infoData: n,
  viewRenderers: r = {},
  sqlOpsUrls: a,
  refid: o,
  Reports: i,
  toast: l,
  handleAction: h = () => {
  },
  infoViewJson: c,
  fieldOptions: f,
  setFieldOptions: x,
  components: y
}) {
  const T = {
    single: (m, p) => /* @__PURE__ */ s.jsx(Rr, { fieldOptions: f, setFieldOptions: x, module_refid: c?.module_refid, tabObj: m, methods: t, tabName: p, sqlOpsUrls: a, refid: o }),
    grid: (m, p) => /* @__PURE__ */ s.jsx(
      Cr,
      {
        ...i ? { Reports: i } : {},
        toast: l,
        handleAction: h,
        tabObj: m,
        methods: t,
        tabName: p,
        sqlOpsUrls: a,
        refid: o,
        infoViewJson: c
      }
    )
  }, g = c?.buttons;
  let N = g ? Object.entries(g).filter(([m, p]) => !(p.groups && p.groups.length > 0)) : [];
  async function A(m, p) {
    const b = t?.[m];
    if (b) {
      try {
        await b();
      } catch (v) {
        console.error("Method execution failed:", v);
      }
      return;
    }
    h?.({ [m]: p }, n);
  }
  return /* @__PURE__ */ s.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ s.jsx("div", { className: "mx-auto", children: /* @__PURE__ */ s.jsxs("div", { className: "grid grid-cols-12 gap-2 min-h-0", children: [
    e && Object.entries(e).map(([m, p], b) => {
      let v = g ? Object.entries(g).filter(([_, L]) => L.groups ? L.groups.includes(m) : !1) : [];
      const E = Or(p.component, y);
      return /* @__PURE__ */ s.jsx(
        "div",
        {
          className: `col-span-12 ${Ve[Ye(Number(p.width))] || "lg:col-span-12"}`,
          children: /* @__PURE__ */ s.jsxs(mi, { title: p.label, children: [
            p?.type === "fields" && p?.fields ? /* @__PURE__ */ s.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ s.jsx("div", { className: "grid grid-cols-12 gap-2", children: p.fields.map((_, L) => Vt(_.hidden) ? null : /* @__PURE__ */ s.jsx(
              "div",
              {
                className: `col-span-12 sm:col-span-6 ${Ve[Ye(Number(_.width))] || "lg:col-span-2"}`,
                children: /* @__PURE__ */ s.jsx(
                  Et,
                  {
                    module_refid: c?.module_refid,
                    methods: t,
                    field: _,
                    data: n ?? {},
                    setFieldOptions: x,
                    ...f[_.name] ? { optionsOverride: f[_.name] } : {},
                    sqlOpsUrls: a,
                    refid: o
                  }
                )
              },
              _?.name ?? `field-${L}`
            )) }) }) : p?.type === "component" && E ? /* @__PURE__ */ s.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: E }) : p ? /* @__PURE__ */ s.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: r[p.config?.uimode]?.(p) || T[p.config?.uimode]?.(p, m) || /* @__PURE__ */ s.jsx("div", { children: "No renderer for this type" }) }) : null,
            /* @__PURE__ */ s.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: v && v.map(([_, L]) => /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: () => A(_, L),
                className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
                children: L.label
              },
              _
            )) })
          ] })
        },
        m
      );
    }),
    N.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "flex justify-end gap-2 p-3 border-t border-gray-100", children: N.map(([m, p]) => /* @__PURE__ */ s.jsx(
      "button",
      {
        onClick: () => A(m, p),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: p.label
      },
      m
    )) })
  ] }) }) });
}
function Mi({
  infoViewJson: e,
  hiddenFields: t = [],
  groupFieldsFn: n = _o,
  layoutConfig: r = {},
  viewRenderers: a = {},
  methods: o = {},
  Reports: i,
  toast: l,
  handleAction: h = () => {
  },
  components: c,
  initialvalues: f
}) {
  const [x, y] = ne.useState(f ?? {}), T = Ro(e.infoview ?? {}), g = e.endPoints, N = ne.useMemo(
    () => n(e.fields || {}),
    [e.fields, n]
  ), [A, m] = ne.useState({}), p = (F, k) => {
    m((R) => ({
      ...R,
      [F]: k
    }));
  }, b = e?.source?.refid;
  let v = { ...N };
  e.infoview?.groups && (v = { ...v, ...e.infoview.groups }), ne.useEffect(() => {
    f && y((F) => ({
      ...F,
      ...f ?? {}
    }));
  }, [f]);
  const E = ne.useCallback(
    (F) => {
      F && y((k) => ({
        ...k,
        ...F
      }));
    },
    []
  );
  ne.useEffect(() => {
    let F = !1;
    return (async () => {
      const R = e?.source;
      if (!R?.type) {
        F || E({});
        return;
      }
      if (R.type === "method") {
        const u = R.method, $ = u ? o[u] : void 0;
        if ($)
          try {
            const q = await $();
            F || E(q || {});
          } catch (q) {
            console.error("Method execution failed:", q), F || E({});
          }
        else
          F || E({});
      }
      if (R.type === "api")
        try {
          const u = {
            method: R.method || "GET",
            url: g?.baseURL + R.endpoint,
            headers: {
              Authorization: `Bearer ${g?.accessToken}`
            },
            ...R.method === "GET" ? { params: { refid: R.refid } } : { data: { refid: R.refid } }
          }, { data: $ } = await G(u), q = $?.results?.options ? $?.results?.options : $.data ? $.data : $.results ? $.results : $;
          F || E(q ?? {});
        } catch (u) {
          console.error("API fetch failed:", u), F || E({});
        }
      if (R.type === "sql" && R.refid && R.refid != "0" || R.dbopsid) {
        if (!g) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let u = !1, $;
          R?.dbopsid && (u = !0, $ = R?.dbopsid);
          const q = await G({
            method: "GET",
            url: g.baseURL + g.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${g?.accessToken}`
            }
          });
          if (!u) {
            let se = {
              ...R
            };
            R.where && (se = {
              ...R,
              where: ve(R.where, {
                refid: b
              })
            }), $ = (await G({
              method: "POST",
              url: g.baseURL + g.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: se,
                fields: Bt(e.fields ?? {}, g.operation),
                forcefill: e.forcefill,
                datahash: q.data.refhash,
                srcid: e?.module_refid
              },
              headers: {
                Authorization: `Bearer ${g?.accessToken}`
              }
            }))?.data.refid;
          }
          const Q = await G({
            method: "POST",
            url: g.baseURL + g.dbopsFetch,
            data: {
              refid: $,
              datahash: q.data.refhash,
              module_refid: e.module_refid
            },
            headers: {
              Authorization: `Bearer ${g?.accessToken}`
            }
          }), te = na(Q) ?? {};
          F || E(te);
        } catch (u) {
          F || E({}), console.error("API fetch failed:", u);
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
  const _ = v.common || null;
  _ && delete v.common;
  const L = (F) => {
    switch (F) {
      case "accordion":
        return /* @__PURE__ */ s.jsx(
          hi,
          {
            groups: v,
            methods: o,
            infoData: x,
            viewRenderers: a,
            sqlOpsUrls: g,
            refid: b,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: h,
            infoViewJson: e,
            setFieldOptions: p,
            fieldOptions: A,
            ...c ? { components: c } : {}
          }
        );
      case "tab":
      case "tableft":
      case "tabright":
        return /* @__PURE__ */ s.jsx(
          jn,
          {
            groups: v,
            viewRenderers: a,
            layoutConfig: r,
            methods: o,
            infoData: x,
            isCommonInfo: !!_,
            viewMode: F,
            sqlOpsUrls: g,
            refid: b,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: h,
            infoViewJson: e,
            setFieldOptions: p,
            fieldOptions: A,
            ...c ? { components: c } : {}
          }
        );
      case "cards":
        return /* @__PURE__ */ s.jsx(
          pi,
          {
            groups: v,
            viewRenderers: a,
            methods: o,
            infoData: x,
            sqlOpsUrls: g,
            refid: b,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: h,
            infoViewJson: e,
            setFieldOptions: p,
            fieldOptions: A,
            ...c ? { components: c } : {}
          }
        );
      default:
        return /* @__PURE__ */ s.jsx(
          jn,
          {
            groups: v,
            viewRenderers: a,
            layoutConfig: r,
            methods: o,
            infoData: x,
            isCommonInfo: !!_,
            viewMode: F,
            sqlOpsUrls: g,
            refid: b,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: h,
            infoViewJson: e,
            setFieldOptions: p,
            fieldOptions: A,
            ...c ? { components: c } : {}
          }
        );
    }
  };
  return /* @__PURE__ */ s.jsxs("div", { className: r.containerClass || "h-screen flex flex-col ", children: [
    _ && g && /* @__PURE__ */ s.jsx(
      ai,
      {
        commonInfo: _,
        infoData: x,
        hiddenFields: t,
        sqlOpsUrls: g,
        setFieldOptions: p,
        fieldOptions: A,
        module_refid: e.module_refid,
        refid: b,
        methods: o
      }
    ),
    L(T)
  ] });
}
export {
  Mi as InfoView
};
