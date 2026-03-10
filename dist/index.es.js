import ee, { useState as oe, useEffect as pe, useMemo as jt, useRef as Ke, useLayoutEffect as is } from "react";
import * as be from "yup";
import { useFormik as ls } from "formik";
import { createPortal as cs } from "react-dom";
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
var Br;
function us() {
  if (Br) return Ze;
  Br = 1;
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
var zr;
function ds() {
  return zr || (zr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === m ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case N:
          return "Fragment";
        case g:
          return "Profiler";
        case T:
          return "StrictMode";
        case _:
          return "Suspense";
        case C:
          return "SuspenseList";
        case O:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case b:
            return "Portal";
          case w:
            return (c.displayName || "Context") + ".Provider";
          case x:
            return (c._context.displayName || "Context") + ".Consumer";
          case E:
            var A = c.render;
            return c = c.displayName, c || (c = A.displayName || A.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case F:
            return A = c.displayName || null, A !== null ? A : e(c.type) || "Memo";
          case H:
            A = c._payload, c = c._init;
            try {
              return e(c(A));
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
        var A = !1;
      } catch {
        A = !0;
      }
      if (A) {
        A = console;
        var S = A.error, P = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return S.call(
          A,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          P
        ), t(c);
      }
    }
    function r(c) {
      if (c === N) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === H)
        return "<...>";
      try {
        var A = e(c);
        return A ? "<" + A + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var c = L.A;
      return c === null ? null : c.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(c) {
      if (U.call(c, "key")) {
        var A = Object.getOwnPropertyDescriptor(c, "key").get;
        if (A && A.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function l(c, A) {
      function S() {
        J || (J = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          A
        ));
      }
      S.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: S,
        configurable: !0
      });
    }
    function p() {
      var c = e(this.type);
      return ne[c] || (ne[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function f(c, A, S, P, Y, D, k, M) {
      return S = D.ref, c = {
        $$typeof: j,
        type: c,
        key: A,
        props: D,
        _owner: Y
      }, (S !== void 0 ? S : null) !== null ? Object.defineProperty(c, "ref", {
        enumerable: !1,
        get: p
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
        value: k
      }), Object.defineProperty(c, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: M
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function d(c, A, S, P, Y, D, k, M) {
      var I = A.children;
      if (I !== void 0)
        if (P)
          if (W(I)) {
            for (P = 0; P < I.length; P++)
              h(I[P]);
            Object.freeze && Object.freeze(I);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(I);
      if (U.call(A, "key")) {
        I = e(c);
        var V = Object.keys(A).filter(function(X) {
          return X !== "key";
        });
        P = 0 < V.length ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}", De[I + P] || (V = 0 < V.length ? "{" + V.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          P,
          I,
          V,
          I
        ), De[I + P] = !0);
      }
      if (I = null, S !== void 0 && (n(S), I = "" + S), i(A) && (n(A.key), I = "" + A.key), "key" in A) {
        S = {};
        for (var Z in A)
          Z !== "key" && (S[Z] = A[Z]);
      } else S = A;
      return I && l(
        S,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), f(
        c,
        I,
        D,
        Y,
        s(),
        S,
        k,
        M
      );
    }
    function h(c) {
      typeof c == "object" && c !== null && c.$$typeof === j && c._store && (c._store.validated = 1);
    }
    var y = ee, j = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), N = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), w = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), m = Symbol.for("react.client.reference"), L = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = Object.prototype.hasOwnProperty, W = Array.isArray, K = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      react_stack_bottom_frame: function(c) {
        return c();
      }
    };
    var J, ne = {}, ve = y.react_stack_bottom_frame.bind(
      y,
      o
    )(), xe = K(r(o)), De = {};
    et.Fragment = N, et.jsx = function(c, A, S, P, Y) {
      var D = 1e4 > L.recentlyCreatedOwnerStacks++;
      return d(
        c,
        A,
        S,
        !1,
        P,
        Y,
        D ? Error("react-stack-top-frame") : ve,
        D ? K(r(c)) : xe
      );
    }, et.jsxs = function(c, A, S, P, Y) {
      var D = 1e4 > L.recentlyCreatedOwnerStacks++;
      return d(
        c,
        A,
        S,
        !0,
        P,
        Y,
        D ? Error("react-stack-top-frame") : ve,
        D ? K(r(c)) : xe
      );
    };
  }()), et;
}
var Ur;
function fs() {
  return Ur || (Ur = 1, process.env.NODE_ENV === "production" ? At.exports = us() : At.exports = ds()), At.exports;
}
var a = fs();
function bn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: ps } = Object.prototype, { getPrototypeOf: gr } = Object, { iterator: Dt, toStringTag: xn } = Symbol, kt = /* @__PURE__ */ ((e) => (t) => {
  const n = ps.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Te = (e) => (e = e.toLowerCase(), (t) => kt(t) === e), Ft = (e) => (t) => typeof t === e, { isArray: Ve } = Array, ct = Ft("undefined");
function ut(e) {
  return e !== null && !ct(e) && e.constructor !== null && !ct(e.constructor) && ye(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const wn = Te("ArrayBuffer");
function ms(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && wn(e.buffer), t;
}
const hs = Ft("string"), ye = Ft("function"), vn = Ft("number"), dt = (e) => e !== null && typeof e == "object", ys = (e) => e === !0 || e === !1, St = (e) => {
  if (kt(e) !== "object")
    return !1;
  const t = gr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(xn in e) && !(Dt in e);
}, gs = (e) => {
  if (!dt(e) || ut(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, bs = Te("Date"), xs = Te("File"), ws = Te("Blob"), vs = Te("FileList"), Es = (e) => dt(e) && ye(e.pipe), As = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ye(e.append) && ((t = kt(e)) === "formdata" || // detect form-data instance
  t === "object" && ye(e.toString) && e.toString() === "[object FormData]"));
}, Ns = Te("URLSearchParams"), [Ts, js, Ss, Rs] = ["ReadableStream", "Request", "Response", "Headers"].map(Te), _s = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
function En(e, t) {
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
const Me = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, An = (e) => !ct(e) && e !== Me;
function or() {
  const { caseless: e } = An(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && En(t, s) || s;
    St(t[o]) && St(r) ? t[o] = or(t[o], r) : St(r) ? t[o] = or({}, r) : Ve(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && ft(arguments[r], n);
  return t;
}
const Cs = (e, t, n, { allOwnKeys: r } = {}) => (ft(t, (s, o) => {
  n && ye(s) ? e[o] = bn(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), Os = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ls = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Is = (e, t, n, r) => {
  let s, o, i;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && gr(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Ps = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Ds = (e) => {
  if (!e) return null;
  if (Ve(e)) return e;
  let t = e.length;
  if (!vn(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, ks = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && gr(Uint8Array)), Fs = (e, t) => {
  const r = (e && e[Dt]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Ms = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, $s = Te("HTMLFormElement"), Bs = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Hr = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), zs = Te("RegExp"), Nn = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  ft(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, Us = (e) => {
  Nn(e, (t, n) => {
    if (ye(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (ye(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Hs = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return Ve(e) ? r(e) : r(String(e).split(t)), n;
}, Gs = () => {
}, Ws = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function qs(e) {
  return !!(e && ye(e.append) && e[xn] === "FormData" && e[Dt]);
}
const Ks = (e) => {
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
          const p = n(i, s + 1);
          !ct(p) && (o[l] = p);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, Vs = Te("AsyncFunction"), Ys = (e) => e && (dt(e) || ye(e)) && ye(e.then) && ye(e.catch), Tn = ((e, t) => e ? setImmediate : t ? ((n, r) => (Me.addEventListener("message", ({ source: s, data: o }) => {
  s === Me && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), Me.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  ye(Me.postMessage)
), Xs = typeof queueMicrotask < "u" ? queueMicrotask.bind(Me) : typeof process < "u" && process.nextTick || Tn, Qs = (e) => e != null && ye(e[Dt]), v = {
  isArray: Ve,
  isArrayBuffer: wn,
  isBuffer: ut,
  isFormData: As,
  isArrayBufferView: ms,
  isString: hs,
  isNumber: vn,
  isBoolean: ys,
  isObject: dt,
  isPlainObject: St,
  isEmptyObject: gs,
  isReadableStream: Ts,
  isRequest: js,
  isResponse: Ss,
  isHeaders: Rs,
  isUndefined: ct,
  isDate: bs,
  isFile: xs,
  isBlob: ws,
  isRegExp: zs,
  isFunction: ye,
  isStream: Es,
  isURLSearchParams: Ns,
  isTypedArray: ks,
  isFileList: vs,
  forEach: ft,
  merge: or,
  extend: Cs,
  trim: _s,
  stripBOM: Os,
  inherits: Ls,
  toFlatObject: Is,
  kindOf: kt,
  kindOfTest: Te,
  endsWith: Ps,
  toArray: Ds,
  forEachEntry: Fs,
  matchAll: Ms,
  isHTMLForm: $s,
  hasOwnProperty: Hr,
  hasOwnProp: Hr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Nn,
  freezeMethods: Us,
  toObjectSet: Hs,
  toCamelCase: Bs,
  noop: Gs,
  toFiniteNumber: Ws,
  findKey: En,
  global: Me,
  isContextDefined: An,
  isSpecCompliantForm: qs,
  toJSONObject: Ks,
  isAsyncFn: Vs,
  isThenable: Ys,
  setImmediate: Tn,
  asap: Xs,
  isIterable: Qs
};
function G(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
v.inherits(G, Error, {
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
      config: v.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const jn = G.prototype, Sn = {};
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
  Sn[e] = { value: e };
});
Object.defineProperties(G, Sn);
Object.defineProperty(jn, "isAxiosError", { value: !0 });
G.from = (e, t, n, r, s, o) => {
  const i = Object.create(jn);
  return v.toFlatObject(e, i, function(p) {
    return p !== Error.prototype;
  }, (l) => l !== "isAxiosError"), G.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Js = null;
function ir(e) {
  return v.isPlainObject(e) || v.isArray(e);
}
function Rn(e) {
  return v.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Gr(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = Rn(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Zs(e) {
  return v.isArray(e) && !e.some(ir);
}
const ea = v.toFlatObject(v, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Mt(e, t, n) {
  if (!v.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = v.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(N, T) {
    return !v.isUndefined(T[N]);
  });
  const r = n.metaTokens, s = n.visitor || d, o = n.dots, i = n.indexes, p = (n.Blob || typeof Blob < "u" && Blob) && v.isSpecCompliantForm(t);
  if (!v.isFunction(s))
    throw new TypeError("visitor must be a function");
  function f(b) {
    if (b === null) return "";
    if (v.isDate(b))
      return b.toISOString();
    if (v.isBoolean(b))
      return b.toString();
    if (!p && v.isBlob(b))
      throw new G("Blob is not supported. Use a Buffer instead.");
    return v.isArrayBuffer(b) || v.isTypedArray(b) ? p && typeof Blob == "function" ? new Blob([b]) : Buffer.from(b) : b;
  }
  function d(b, N, T) {
    let g = b;
    if (b && !T && typeof b == "object") {
      if (v.endsWith(N, "{}"))
        N = r ? N : N.slice(0, -2), b = JSON.stringify(b);
      else if (v.isArray(b) && Zs(b) || (v.isFileList(b) || v.endsWith(N, "[]")) && (g = v.toArray(b)))
        return N = Rn(N), g.forEach(function(w, E) {
          !(v.isUndefined(w) || w === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Gr([N], E, o) : i === null ? N : N + "[]",
            f(w)
          );
        }), !1;
    }
    return ir(b) ? !0 : (t.append(Gr(T, N, o), f(b)), !1);
  }
  const h = [], y = Object.assign(ea, {
    defaultVisitor: d,
    convertValue: f,
    isVisitable: ir
  });
  function j(b, N) {
    if (!v.isUndefined(b)) {
      if (h.indexOf(b) !== -1)
        throw Error("Circular reference detected in " + N.join("."));
      h.push(b), v.forEach(b, function(g, x) {
        (!(v.isUndefined(g) || g === null) && s.call(
          t,
          g,
          v.isString(x) ? x.trim() : x,
          N,
          y
        )) === !0 && j(g, N ? N.concat(x) : [x]);
      }), h.pop();
    }
  }
  if (!v.isObject(e))
    throw new TypeError("data must be an object");
  return j(e), t;
}
function Wr(e) {
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
function br(e, t) {
  this._pairs = [], e && Mt(e, this, t);
}
const _n = br.prototype;
_n.append = function(t, n) {
  this._pairs.push([t, n]);
};
_n.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Wr);
  } : Wr;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function ta(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Cn(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || ta;
  v.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = v.isURLSearchParams(t) ? t.toString() : new br(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class qr {
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
    v.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const On = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ra = typeof URLSearchParams < "u" ? URLSearchParams : br, na = typeof FormData < "u" ? FormData : null, sa = typeof Blob < "u" ? Blob : null, aa = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ra,
    FormData: na,
    Blob: sa
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, xr = typeof window < "u" && typeof document < "u", lr = typeof navigator == "object" && navigator || void 0, oa = xr && (!lr || ["ReactNative", "NativeScript", "NS"].indexOf(lr.product) < 0), ia = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", la = xr && window.location.href || "http://localhost", ca = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: xr,
  hasStandardBrowserEnv: oa,
  hasStandardBrowserWebWorkerEnv: ia,
  navigator: lr,
  origin: la
}, Symbol.toStringTag, { value: "Module" })), ie = {
  ...ca,
  ...aa
};
function ua(e, t) {
  return Mt(e, new ie.classes.URLSearchParams(), {
    visitor: function(n, r, s, o) {
      return ie.isNode && v.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function da(e) {
  return v.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function fa(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Ln(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const l = Number.isFinite(+i), p = o >= n.length;
    return i = !i && v.isArray(s) ? s.length : i, p ? (v.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !l) : ((!s[i] || !v.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && v.isArray(s[i]) && (s[i] = fa(s[i])), !l);
  }
  if (v.isFormData(e) && v.isFunction(e.entries)) {
    const n = {};
    return v.forEachEntry(e, (r, s) => {
      t(da(r), s, n, 0);
    }), n;
  }
  return null;
}
function pa(e, t, n) {
  if (v.isString(e))
    try {
      return (t || JSON.parse)(e), v.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const pt = {
  transitional: On,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = v.isObject(t);
    if (o && v.isHTMLForm(t) && (t = new FormData(t)), v.isFormData(t))
      return s ? JSON.stringify(Ln(t)) : t;
    if (v.isArrayBuffer(t) || v.isBuffer(t) || v.isStream(t) || v.isFile(t) || v.isBlob(t) || v.isReadableStream(t))
      return t;
    if (v.isArrayBufferView(t))
      return t.buffer;
    if (v.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return ua(t, this.formSerializer).toString();
      if ((l = v.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return Mt(
          l ? { "files[]": t } : t,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), pa(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || pt.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (v.isResponse(t) || v.isReadableStream(t))
      return t;
    if (t && v.isString(t) && (r && !this.responseType || s)) {
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
v.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  pt.headers[e] = {};
});
const ma = v.toObjectSet([
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
]), ha = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && ma[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Kr = Symbol("internals");
function tt(e) {
  return e && String(e).trim().toLowerCase();
}
function Rt(e) {
  return e === !1 || e == null ? e : v.isArray(e) ? e.map(Rt) : String(e);
}
function ya(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const ga = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Yt(e, t, n, r, s) {
  if (v.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!v.isString(t)) {
    if (v.isString(r))
      return t.indexOf(r) !== -1;
    if (v.isRegExp(r))
      return r.test(t);
  }
}
function ba(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function xa(e, t) {
  const n = v.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
let ge = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(l, p, f) {
      const d = tt(p);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const h = v.findKey(s, d);
      (!h || s[h] === void 0 || f === !0 || f === void 0 && s[h] !== !1) && (s[h || p] = Rt(l));
    }
    const i = (l, p) => v.forEach(l, (f, d) => o(f, d, p));
    if (v.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (v.isString(t) && (t = t.trim()) && !ga(t))
      i(ha(t), n);
    else if (v.isObject(t) && v.isIterable(t)) {
      let l = {}, p, f;
      for (const d of t) {
        if (!v.isArray(d))
          throw TypeError("Object iterator must return a key-value pair");
        l[f = d[0]] = (p = l[f]) ? v.isArray(p) ? [...p, d[1]] : [p, d[1]] : d[1];
      }
      i(l, n);
    } else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = tt(t), t) {
      const r = v.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return ya(s);
        if (v.isFunction(n))
          return n.call(this, s, r);
        if (v.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = tt(t), t) {
      const r = v.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Yt(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = tt(i), i) {
        const l = v.findKey(r, i);
        l && (!n || Yt(r, r[l], l, n)) && (delete r[l], s = !0);
      }
    }
    return v.isArray(t) ? t.forEach(o) : o(t), s;
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
    return v.forEach(this, (s, o) => {
      const i = v.findKey(r, o);
      if (i) {
        n[i] = Rt(s), delete n[o];
        return;
      }
      const l = t ? ba(o) : String(o).trim();
      l !== o && delete n[o], n[l] = Rt(s), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return v.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && v.isArray(r) ? r.join(", ") : r);
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
    const r = (this[Kr] = this[Kr] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const l = tt(i);
      r[l] || (xa(s, i), r[l] = !0);
    }
    return v.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
ge.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
v.reduceDescriptors(ge.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
v.freezeMethods(ge);
function Xt(e, t) {
  const n = this || pt, r = t || n, s = ge.from(r.headers);
  let o = r.data;
  return v.forEach(e, function(l) {
    o = l.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function In(e) {
  return !!(e && e.__CANCEL__);
}
function Ye(e, t, n) {
  G.call(this, e ?? "canceled", G.ERR_CANCELED, t, n), this.name = "CanceledError";
}
v.inherits(Ye, G, {
  __CANCEL__: !0
});
function Pn(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new G(
    "Request failed with status code " + n.status,
    [G.ERR_BAD_REQUEST, G.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function wa(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function va(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(p) {
    const f = Date.now(), d = r[o];
    i || (i = f), n[s] = p, r[s] = f;
    let h = o, y = 0;
    for (; h !== s; )
      y += n[h++], h = h % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), f - i < t)
      return;
    const j = d && f - d;
    return j ? Math.round(y * 1e3 / j) : void 0;
  };
}
function Ea(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const i = (f, d = Date.now()) => {
    n = d, s = null, o && (clearTimeout(o), o = null), e(...f);
  };
  return [(...f) => {
    const d = Date.now(), h = d - n;
    h >= r ? i(f, d) : (s = f, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - h)));
  }, () => s && i(s)];
}
const Ot = (e, t, n = 3) => {
  let r = 0;
  const s = va(50, 250);
  return Ea((o) => {
    const i = o.loaded, l = o.lengthComputable ? o.total : void 0, p = i - r, f = s(p), d = i <= l;
    r = i;
    const h = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: p,
      rate: f || void 0,
      estimated: f && l && d ? (l - i) / f : void 0,
      event: o,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(h);
  }, n);
}, Vr = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Yr = (e) => (...t) => v.asap(() => e(...t)), Aa = ie.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, ie.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(ie.origin),
  ie.navigator && /(msie|trident)/i.test(ie.navigator.userAgent)
) : () => !0, Na = ie.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      v.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), v.isString(r) && i.push("path=" + r), v.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
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
function Ta(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function ja(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Dn(e, t, n) {
  let r = !Ta(t);
  return e && (r || n == !1) ? ja(e, t) : t;
}
const Xr = (e) => e instanceof ge ? { ...e } : e;
function Be(e, t) {
  t = t || {};
  const n = {};
  function r(f, d, h, y) {
    return v.isPlainObject(f) && v.isPlainObject(d) ? v.merge.call({ caseless: y }, f, d) : v.isPlainObject(d) ? v.merge({}, d) : v.isArray(d) ? d.slice() : d;
  }
  function s(f, d, h, y) {
    if (v.isUndefined(d)) {
      if (!v.isUndefined(f))
        return r(void 0, f, h, y);
    } else return r(f, d, h, y);
  }
  function o(f, d) {
    if (!v.isUndefined(d))
      return r(void 0, d);
  }
  function i(f, d) {
    if (v.isUndefined(d)) {
      if (!v.isUndefined(f))
        return r(void 0, f);
    } else return r(void 0, d);
  }
  function l(f, d, h) {
    if (h in t)
      return r(f, d);
    if (h in e)
      return r(void 0, f);
  }
  const p = {
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
    headers: (f, d, h) => s(Xr(f), Xr(d), h, !0)
  };
  return v.forEach(Object.keys({ ...e, ...t }), function(d) {
    const h = p[d] || s, y = h(e[d], t[d], d);
    v.isUndefined(y) && h !== l || (n[d] = y);
  }), n;
}
const kn = (e) => {
  const t = Be({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: l } = t;
  t.headers = i = ge.from(i), t.url = Cn(Dn(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), l && i.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let p;
  if (v.isFormData(n)) {
    if (ie.hasStandardBrowserEnv || ie.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((p = i.getContentType()) !== !1) {
      const [f, ...d] = p ? p.split(";").map((h) => h.trim()).filter(Boolean) : [];
      i.setContentType([f || "multipart/form-data", ...d].join("; "));
    }
  }
  if (ie.hasStandardBrowserEnv && (r && v.isFunction(r) && (r = r(t)), r || r !== !1 && Aa(t.url))) {
    const f = s && o && Na.read(o);
    f && i.set(s, f);
  }
  return t;
}, Sa = typeof XMLHttpRequest < "u", Ra = Sa && function(e) {
  return new Promise(function(n, r) {
    const s = kn(e);
    let o = s.data;
    const i = ge.from(s.headers).normalize();
    let { responseType: l, onUploadProgress: p, onDownloadProgress: f } = s, d, h, y, j, b;
    function N() {
      j && j(), b && b(), s.cancelToken && s.cancelToken.unsubscribe(d), s.signal && s.signal.removeEventListener("abort", d);
    }
    let T = new XMLHttpRequest();
    T.open(s.method.toUpperCase(), s.url, !0), T.timeout = s.timeout;
    function g() {
      if (!T)
        return;
      const w = ge.from(
        "getAllResponseHeaders" in T && T.getAllResponseHeaders()
      ), _ = {
        data: !l || l === "text" || l === "json" ? T.responseText : T.response,
        status: T.status,
        statusText: T.statusText,
        headers: w,
        config: e,
        request: T
      };
      Pn(function(F) {
        n(F), N();
      }, function(F) {
        r(F), N();
      }, _), T = null;
    }
    "onloadend" in T ? T.onloadend = g : T.onreadystatechange = function() {
      !T || T.readyState !== 4 || T.status === 0 && !(T.responseURL && T.responseURL.indexOf("file:") === 0) || setTimeout(g);
    }, T.onabort = function() {
      T && (r(new G("Request aborted", G.ECONNABORTED, e, T)), T = null);
    }, T.onerror = function() {
      r(new G("Network Error", G.ERR_NETWORK, e, T)), T = null;
    }, T.ontimeout = function() {
      let E = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const _ = s.transitional || On;
      s.timeoutErrorMessage && (E = s.timeoutErrorMessage), r(new G(
        E,
        _.clarifyTimeoutError ? G.ETIMEDOUT : G.ECONNABORTED,
        e,
        T
      )), T = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in T && v.forEach(i.toJSON(), function(E, _) {
      T.setRequestHeader(_, E);
    }), v.isUndefined(s.withCredentials) || (T.withCredentials = !!s.withCredentials), l && l !== "json" && (T.responseType = s.responseType), f && ([y, b] = Ot(f, !0), T.addEventListener("progress", y)), p && T.upload && ([h, j] = Ot(p), T.upload.addEventListener("progress", h), T.upload.addEventListener("loadend", j)), (s.cancelToken || s.signal) && (d = (w) => {
      T && (r(!w || w.type ? new Ye(null, e, T) : w), T.abort(), T = null);
    }, s.cancelToken && s.cancelToken.subscribe(d), s.signal && (s.signal.aborted ? d() : s.signal.addEventListener("abort", d)));
    const x = wa(s.url);
    if (x && ie.protocols.indexOf(x) === -1) {
      r(new G("Unsupported protocol " + x + ":", G.ERR_BAD_REQUEST, e));
      return;
    }
    T.send(o || null);
  });
}, _a = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const o = function(f) {
      if (!s) {
        s = !0, l();
        const d = f instanceof Error ? f : this.reason;
        r.abort(d instanceof G ? d : new Ye(d instanceof Error ? d.message : d));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new G(`timeout ${t} of ms exceeded`, G.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((f) => {
        f.unsubscribe ? f.unsubscribe(o) : f.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((f) => f.addEventListener("abort", o));
    const { signal: p } = r;
    return p.unsubscribe = () => v.asap(l), p;
  }
}, Ca = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, Oa = async function* (e, t) {
  for await (const n of La(e))
    yield* Ca(n, t);
}, La = async function* (e) {
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
}, Qr = (e, t, n, r) => {
  const s = Oa(e, t);
  let o = 0, i, l = (p) => {
    i || (i = !0, r && r(p));
  };
  return new ReadableStream({
    async pull(p) {
      try {
        const { done: f, value: d } = await s.next();
        if (f) {
          l(), p.close();
          return;
        }
        let h = d.byteLength;
        if (n) {
          let y = o += h;
          n(y);
        }
        p.enqueue(new Uint8Array(d));
      } catch (f) {
        throw l(f), f;
      }
    },
    cancel(p) {
      return l(p), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, $t = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Fn = $t && typeof ReadableStream == "function", Ia = $t && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Mn = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Pa = Fn && Mn(() => {
  let e = !1;
  const t = new Request(ie.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Jr = 64 * 1024, cr = Fn && Mn(() => v.isReadableStream(new Response("").body)), Lt = {
  stream: cr && ((e) => e.body)
};
$t && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Lt[t] && (Lt[t] = v.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new G(`Response type '${t}' is not supported`, G.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Da = async (e) => {
  if (e == null)
    return 0;
  if (v.isBlob(e))
    return e.size;
  if (v.isSpecCompliantForm(e))
    return (await new Request(ie.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (v.isArrayBufferView(e) || v.isArrayBuffer(e))
    return e.byteLength;
  if (v.isURLSearchParams(e) && (e = e + ""), v.isString(e))
    return (await Ia(e)).byteLength;
}, ka = async (e, t) => {
  const n = v.toFiniteNumber(e.getContentLength());
  return n ?? Da(t);
}, Fa = $t && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: s,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: l,
    onUploadProgress: p,
    responseType: f,
    headers: d,
    withCredentials: h = "same-origin",
    fetchOptions: y
  } = kn(e);
  f = f ? (f + "").toLowerCase() : "text";
  let j = _a([s, o && o.toAbortSignal()], i), b;
  const N = j && j.unsubscribe && (() => {
    j.unsubscribe();
  });
  let T;
  try {
    if (p && Pa && n !== "get" && n !== "head" && (T = await ka(d, r)) !== 0) {
      let _ = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), C;
      if (v.isFormData(r) && (C = _.headers.get("content-type")) && d.setContentType(C), _.body) {
        const [F, H] = Vr(
          T,
          Ot(Yr(p))
        );
        r = Qr(_.body, Jr, F, H);
      }
    }
    v.isString(h) || (h = h ? "include" : "omit");
    const g = "credentials" in Request.prototype;
    b = new Request(t, {
      ...y,
      signal: j,
      method: n.toUpperCase(),
      headers: d.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: g ? h : void 0
    });
    let x = await fetch(b, y);
    const w = cr && (f === "stream" || f === "response");
    if (cr && (l || w && N)) {
      const _ = {};
      ["status", "statusText", "headers"].forEach((O) => {
        _[O] = x[O];
      });
      const C = v.toFiniteNumber(x.headers.get("content-length")), [F, H] = l && Vr(
        C,
        Ot(Yr(l), !0)
      ) || [];
      x = new Response(
        Qr(x.body, Jr, F, () => {
          H && H(), N && N();
        }),
        _
      );
    }
    f = f || "text";
    let E = await Lt[v.findKey(Lt, f) || "text"](x, e);
    return !w && N && N(), await new Promise((_, C) => {
      Pn(_, C, {
        data: E,
        headers: ge.from(x.headers),
        status: x.status,
        statusText: x.statusText,
        config: e,
        request: b
      });
    });
  } catch (g) {
    throw N && N(), g && g.name === "TypeError" && /Load failed|fetch/i.test(g.message) ? Object.assign(
      new G("Network Error", G.ERR_NETWORK, e, b),
      {
        cause: g.cause || g
      }
    ) : G.from(g, g && g.code, e, b);
  }
}), ur = {
  http: Js,
  xhr: Ra,
  fetch: Fa
};
v.forEach(ur, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Zr = (e) => `- ${e}`, Ma = (e) => v.isFunction(e) || e === null || e === !1, $n = {
  getAdapter: (e) => {
    e = v.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !Ma(n) && (r = ur[(i = String(n)).toLowerCase()], r === void 0))
        throw new G(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([l, p]) => `adapter ${l} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(Zr).join(`
`) : " " + Zr(o[0]) : "as no adapter specified";
      throw new G(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: ur
};
function Qt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ye(null, e);
}
function en(e) {
  return Qt(e), e.headers = ge.from(e.headers), e.data = Xt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), $n.getAdapter(e.adapter || pt.adapter)(e).then(function(r) {
    return Qt(e), r.data = Xt.call(
      e,
      e.transformResponse,
      r
    ), r.headers = ge.from(r.headers), r;
  }, function(r) {
    return In(r) || (Qt(e), r && r.response && (r.response.data = Xt.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = ge.from(r.response.headers))), Promise.reject(r);
  });
}
const Bn = "1.11.0", Bt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Bt[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const tn = {};
Bt.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + Bn + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, l) => {
    if (t === !1)
      throw new G(
        s(i, " has been removed" + (n ? " in " + n : "")),
        G.ERR_DEPRECATED
      );
    return n && !tn[i] && (tn[i] = !0, console.warn(
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
function $a(e, t, n) {
  if (typeof e != "object")
    throw new G("options must be an object", G.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const l = e[o], p = l === void 0 || i(l, o, e);
      if (p !== !0)
        throw new G("option " + o + " must be " + p, G.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new G("Unknown option " + o, G.ERR_BAD_OPTION);
  }
}
const _t = {
  assertOptions: $a,
  validators: Bt
}, Ce = _t.validators;
let $e = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new qr(),
      response: new qr()
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
    }, !1), s != null && (v.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : _t.assertOptions(s, {
      encode: Ce.function,
      serialize: Ce.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), _t.assertOptions(n, {
      baseUrl: Ce.spelling("baseURL"),
      withXsrfToken: Ce.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && v.merge(
      o.common,
      o[n.method]
    );
    o && v.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (b) => {
        delete o[b];
      }
    ), n.headers = ge.concat(i, o);
    const l = [];
    let p = !0;
    this.interceptors.request.forEach(function(N) {
      typeof N.runWhen == "function" && N.runWhen(n) === !1 || (p = p && N.synchronous, l.unshift(N.fulfilled, N.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(N) {
      f.push(N.fulfilled, N.rejected);
    });
    let d, h = 0, y;
    if (!p) {
      const b = [en.bind(this), void 0];
      for (b.unshift(...l), b.push(...f), y = b.length, d = Promise.resolve(n); h < y; )
        d = d.then(b[h++], b[h++]);
      return d;
    }
    y = l.length;
    let j = n;
    for (h = 0; h < y; ) {
      const b = l[h++], N = l[h++];
      try {
        j = b(j);
      } catch (T) {
        N.call(this, T);
        break;
      }
    }
    try {
      d = en.call(this, j);
    } catch (b) {
      return Promise.reject(b);
    }
    for (h = 0, y = f.length; h < y; )
      d = d.then(f[h++], f[h++]);
    return d;
  }
  getUri(t) {
    t = Be(this.defaults, t);
    const n = Dn(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Cn(n, t.params, t.paramsSerializer);
  }
};
v.forEach(["delete", "get", "head", "options"], function(t) {
  $e.prototype[t] = function(n, r) {
    return this.request(Be(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
v.forEach(["post", "put", "patch"], function(t) {
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
let Ba = class zn {
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
      token: new zn(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function za(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Ua(e) {
  return v.isObject(e) && e.isAxiosError === !0;
}
const dr = {
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
Object.entries(dr).forEach(([e, t]) => {
  dr[t] = e;
});
function Un(e) {
  const t = new $e(e), n = bn($e.prototype.request, t);
  return v.extend(n, $e.prototype, t, { allOwnKeys: !0 }), v.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Un(Be(e, s));
  }, n;
}
const z = Un(pt);
z.Axios = $e;
z.CanceledError = Ye;
z.CancelToken = Ba;
z.isCancel = In;
z.VERSION = Bn;
z.toFormData = Mt;
z.AxiosError = G;
z.Cancel = z.CanceledError;
z.all = function(t) {
  return Promise.all(t);
};
z.spread = za;
z.isAxiosError = Ua;
z.mergeConfig = Be;
z.AxiosHeaders = ge;
z.formToJSON = (e) => Ln(v.isHTMLForm(e) ? new FormData(e) : e);
z.getAdapter = $n.getAdapter;
z.HttpStatusCode = dr;
z.default = z;
const {
  Axios: ri,
  AxiosError: ni,
  CanceledError: si,
  isCancel: ai,
  CancelToken: oi,
  VERSION: ii,
  all: li,
  Cancel: ci,
  isAxiosError: ui,
  spread: di,
  toFormData: fi,
  AxiosHeaders: pi,
  HttpStatusCode: mi,
  formToJSON: hi,
  getAdapter: yi,
  mergeConfig: gi
} = z;
/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */
const {
  entries: Hn,
  setPrototypeOf: rn,
  isFrozen: Ha,
  getPrototypeOf: Ga,
  getOwnPropertyDescriptor: Wa
} = Object;
let {
  freeze: ue,
  seal: we,
  create: fr
} = Object, {
  apply: pr,
  construct: mr
} = typeof Reflect < "u" && Reflect;
ue || (ue = function(t) {
  return t;
});
we || (we = function(t) {
  return t;
});
pr || (pr = function(t, n) {
  for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    s[o - 2] = arguments[o];
  return t.apply(n, s);
});
mr || (mr = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return new t(...r);
});
const Nt = de(Array.prototype.forEach), qa = de(Array.prototype.lastIndexOf), nn = de(Array.prototype.pop), rt = de(Array.prototype.push), Ka = de(Array.prototype.splice), Ct = de(String.prototype.toLowerCase), Jt = de(String.prototype.toString), Zt = de(String.prototype.match), nt = de(String.prototype.replace), Va = de(String.prototype.indexOf), Ya = de(String.prototype.trim), Ae = de(Object.prototype.hasOwnProperty), ce = de(RegExp.prototype.test), st = Xa(TypeError);
function de(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    return pr(e, t, r);
  };
}
function Xa(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return mr(e, n);
  };
}
function q(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ct;
  rn && rn(e, null);
  let r = t.length;
  for (; r--; ) {
    let s = t[r];
    if (typeof s == "string") {
      const o = n(s);
      o !== s && (Ha(t) || (t[r] = o), s = o);
    }
    e[s] = !0;
  }
  return e;
}
function Qa(e) {
  for (let t = 0; t < e.length; t++)
    Ae(e, t) || (e[t] = null);
  return e;
}
function Oe(e) {
  const t = fr(null);
  for (const [n, r] of Hn(e))
    Ae(e, n) && (Array.isArray(r) ? t[n] = Qa(r) : r && typeof r == "object" && r.constructor === Object ? t[n] = Oe(r) : t[n] = r);
  return t;
}
function at(e, t) {
  for (; e !== null; ) {
    const r = Wa(e, t);
    if (r) {
      if (r.get)
        return de(r.get);
      if (typeof r.value == "function")
        return de(r.value);
    }
    e = Ga(e);
  }
  function n() {
    return null;
  }
  return n;
}
const sn = ue(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), er = ue(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), tr = ue(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ja = ue(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), rr = ue(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Za = ue(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), an = ue(["#text"]), on = ue(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), nr = ue(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ln = ue(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Tt = ue(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), eo = we(/\{\{[\w\W]*|[\w\W]*\}\}/gm), to = we(/<%[\w\W]*|[\w\W]*%>/gm), ro = we(/\$\{[\w\W]*/gm), no = we(/^data-[\-\w.\u00B7-\uFFFF]+$/), so = we(/^aria-[\-\w]+$/), Gn = we(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), ao = we(/^(?:\w+script|data):/i), oo = we(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Wn = we(/^html$/i), io = we(/^[a-z][.\w]*(-[.\w]+)+$/i);
var cn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: so,
  ATTR_WHITESPACE: oo,
  CUSTOM_ELEMENT: io,
  DATA_ATTR: no,
  DOCTYPE_NAME: Wn,
  ERB_EXPR: to,
  IS_ALLOWED_URI: Gn,
  IS_SCRIPT_OR_DATA: ao,
  MUSTACHE_EXPR: eo,
  TMPLIT_EXPR: ro
});
const ot = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, lo = function() {
  return typeof window > "u" ? null : window;
}, co = function(t, n) {
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
}, un = function() {
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
function qn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : lo();
  const t = (B) => qn(B);
  if (t.version = "3.3.1", t.removed = [], !e || !e.document || e.document.nodeType !== ot.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: n
  } = e;
  const r = n, s = r.currentScript, {
    DocumentFragment: o,
    HTMLTemplateElement: i,
    Node: l,
    Element: p,
    NodeFilter: f,
    NamedNodeMap: d = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: h,
    DOMParser: y,
    trustedTypes: j
  } = e, b = p.prototype, N = at(b, "cloneNode"), T = at(b, "remove"), g = at(b, "nextSibling"), x = at(b, "childNodes"), w = at(b, "parentNode");
  if (typeof i == "function") {
    const B = n.createElement("template");
    B.content && B.content.ownerDocument && (n = B.content.ownerDocument);
  }
  let E, _ = "";
  const {
    implementation: C,
    createNodeIterator: F,
    createDocumentFragment: H,
    getElementsByTagName: O
  } = n, {
    importNode: m
  } = r;
  let L = un();
  t.isSupported = typeof Hn == "function" && typeof w == "function" && C && C.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: U,
    ERB_EXPR: W,
    TMPLIT_EXPR: K,
    DATA_ATTR: J,
    ARIA_ATTR: ne,
    IS_SCRIPT_OR_DATA: ve,
    ATTR_WHITESPACE: xe,
    CUSTOM_ELEMENT: De
  } = cn;
  let {
    IS_ALLOWED_URI: c
  } = cn, A = null;
  const S = q({}, [...sn, ...er, ...tr, ...rr, ...an]);
  let P = null;
  const Y = q({}, [...on, ...nr, ...ln, ...Tt]);
  let D = Object.seal(fr(null, {
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
  })), k = null, M = null;
  const I = Object.seal(fr(null, {
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
  let V = !0, Z = !0, X = !1, je = !0, le = !1, Se = !0, Ee = !1, Xe = !1, ze = !1, ke = !1, gt = !1, bt = !1, Ar = !0, Nr = !1;
  const Zn = "user-content-";
  let zt = !0, Qe = !1, Ue = {}, Re = null;
  const Ut = q({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Tr = null;
  const jr = q({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ht = null;
  const Sr = q({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), xt = "http://www.w3.org/1998/Math/MathML", wt = "http://www.w3.org/2000/svg", Le = "http://www.w3.org/1999/xhtml";
  let He = Le, Gt = !1, Wt = null;
  const es = q({}, [xt, wt, Le], Jt);
  let vt = q({}, ["mi", "mo", "mn", "ms", "mtext"]), Et = q({}, ["annotation-xml"]);
  const ts = q({}, ["title", "style", "font", "a", "script"]);
  let Je = null;
  const rs = ["application/xhtml+xml", "text/html"], ns = "text/html";
  let re = null, Ge = null;
  const ss = n.createElement("form"), Rr = function(u) {
    return u instanceof RegExp || u instanceof Function;
  }, qt = function() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Ge && Ge === u)) {
      if ((!u || typeof u != "object") && (u = {}), u = Oe(u), Je = // eslint-disable-next-line unicorn/prefer-includes
      rs.indexOf(u.PARSER_MEDIA_TYPE) === -1 ? ns : u.PARSER_MEDIA_TYPE, re = Je === "application/xhtml+xml" ? Jt : Ct, A = Ae(u, "ALLOWED_TAGS") ? q({}, u.ALLOWED_TAGS, re) : S, P = Ae(u, "ALLOWED_ATTR") ? q({}, u.ALLOWED_ATTR, re) : Y, Wt = Ae(u, "ALLOWED_NAMESPACES") ? q({}, u.ALLOWED_NAMESPACES, Jt) : es, Ht = Ae(u, "ADD_URI_SAFE_ATTR") ? q(Oe(Sr), u.ADD_URI_SAFE_ATTR, re) : Sr, Tr = Ae(u, "ADD_DATA_URI_TAGS") ? q(Oe(jr), u.ADD_DATA_URI_TAGS, re) : jr, Re = Ae(u, "FORBID_CONTENTS") ? q({}, u.FORBID_CONTENTS, re) : Ut, k = Ae(u, "FORBID_TAGS") ? q({}, u.FORBID_TAGS, re) : Oe({}), M = Ae(u, "FORBID_ATTR") ? q({}, u.FORBID_ATTR, re) : Oe({}), Ue = Ae(u, "USE_PROFILES") ? u.USE_PROFILES : !1, V = u.ALLOW_ARIA_ATTR !== !1, Z = u.ALLOW_DATA_ATTR !== !1, X = u.ALLOW_UNKNOWN_PROTOCOLS || !1, je = u.ALLOW_SELF_CLOSE_IN_ATTR !== !1, le = u.SAFE_FOR_TEMPLATES || !1, Se = u.SAFE_FOR_XML !== !1, Ee = u.WHOLE_DOCUMENT || !1, ke = u.RETURN_DOM || !1, gt = u.RETURN_DOM_FRAGMENT || !1, bt = u.RETURN_TRUSTED_TYPE || !1, ze = u.FORCE_BODY || !1, Ar = u.SANITIZE_DOM !== !1, Nr = u.SANITIZE_NAMED_PROPS || !1, zt = u.KEEP_CONTENT !== !1, Qe = u.IN_PLACE || !1, c = u.ALLOWED_URI_REGEXP || Gn, He = u.NAMESPACE || Le, vt = u.MATHML_TEXT_INTEGRATION_POINTS || vt, Et = u.HTML_INTEGRATION_POINTS || Et, D = u.CUSTOM_ELEMENT_HANDLING || {}, u.CUSTOM_ELEMENT_HANDLING && Rr(u.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (D.tagNameCheck = u.CUSTOM_ELEMENT_HANDLING.tagNameCheck), u.CUSTOM_ELEMENT_HANDLING && Rr(u.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (D.attributeNameCheck = u.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), u.CUSTOM_ELEMENT_HANDLING && typeof u.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (D.allowCustomizedBuiltInElements = u.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), le && (Z = !1), gt && (ke = !0), Ue && (A = q({}, an), P = [], Ue.html === !0 && (q(A, sn), q(P, on)), Ue.svg === !0 && (q(A, er), q(P, nr), q(P, Tt)), Ue.svgFilters === !0 && (q(A, tr), q(P, nr), q(P, Tt)), Ue.mathMl === !0 && (q(A, rr), q(P, ln), q(P, Tt))), u.ADD_TAGS && (typeof u.ADD_TAGS == "function" ? I.tagCheck = u.ADD_TAGS : (A === S && (A = Oe(A)), q(A, u.ADD_TAGS, re))), u.ADD_ATTR && (typeof u.ADD_ATTR == "function" ? I.attributeCheck = u.ADD_ATTR : (P === Y && (P = Oe(P)), q(P, u.ADD_ATTR, re))), u.ADD_URI_SAFE_ATTR && q(Ht, u.ADD_URI_SAFE_ATTR, re), u.FORBID_CONTENTS && (Re === Ut && (Re = Oe(Re)), q(Re, u.FORBID_CONTENTS, re)), u.ADD_FORBID_CONTENTS && (Re === Ut && (Re = Oe(Re)), q(Re, u.ADD_FORBID_CONTENTS, re)), zt && (A["#text"] = !0), Ee && q(A, ["html", "head", "body"]), A.table && (q(A, ["tbody"]), delete k.tbody), u.TRUSTED_TYPES_POLICY) {
        if (typeof u.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw st('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof u.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw st('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        E = u.TRUSTED_TYPES_POLICY, _ = E.createHTML("");
      } else
        E === void 0 && (E = co(j, s)), E !== null && typeof _ == "string" && (_ = E.createHTML(""));
      ue && ue(u), Ge = u;
    }
  }, _r = q({}, [...er, ...tr, ...Ja]), Cr = q({}, [...rr, ...Za]), as = function(u) {
    let R = w(u);
    (!R || !R.tagName) && (R = {
      namespaceURI: He,
      tagName: "template"
    });
    const $ = Ct(u.tagName), Q = Ct(R.tagName);
    return Wt[u.namespaceURI] ? u.namespaceURI === wt ? R.namespaceURI === Le ? $ === "svg" : R.namespaceURI === xt ? $ === "svg" && (Q === "annotation-xml" || vt[Q]) : !!_r[$] : u.namespaceURI === xt ? R.namespaceURI === Le ? $ === "math" : R.namespaceURI === wt ? $ === "math" && Et[Q] : !!Cr[$] : u.namespaceURI === Le ? R.namespaceURI === wt && !Et[Q] || R.namespaceURI === xt && !vt[Q] ? !1 : !Cr[$] && (ts[$] || !_r[$]) : !!(Je === "application/xhtml+xml" && Wt[u.namespaceURI]) : !1;
  }, _e = function(u) {
    rt(t.removed, {
      element: u
    });
    try {
      w(u).removeChild(u);
    } catch {
      T(u);
    }
  }, Fe = function(u, R) {
    try {
      rt(t.removed, {
        attribute: R.getAttributeNode(u),
        from: R
      });
    } catch {
      rt(t.removed, {
        attribute: null,
        from: R
      });
    }
    if (R.removeAttribute(u), u === "is")
      if (ke || gt)
        try {
          _e(R);
        } catch {
        }
      else
        try {
          R.setAttribute(u, "");
        } catch {
        }
  }, Or = function(u) {
    let R = null, $ = null;
    if (ze)
      u = "<remove></remove>" + u;
    else {
      const te = Zt(u, /^[\r\n\t ]+/);
      $ = te && te[0];
    }
    Je === "application/xhtml+xml" && He === Le && (u = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + u + "</body></html>");
    const Q = E ? E.createHTML(u) : u;
    if (He === Le)
      try {
        R = new y().parseFromString(Q, Je);
      } catch {
      }
    if (!R || !R.documentElement) {
      R = C.createDocument(He, "template", null);
      try {
        R.documentElement.innerHTML = Gt ? _ : Q;
      } catch {
      }
    }
    const ae = R.body || R.documentElement;
    return u && $ && ae.insertBefore(n.createTextNode($), ae.childNodes[0] || null), He === Le ? O.call(R, Ee ? "html" : "body")[0] : Ee ? R.documentElement : ae;
  }, Lr = function(u) {
    return F.call(
      u.ownerDocument || u,
      u,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, Kt = function(u) {
    return u instanceof h && (typeof u.nodeName != "string" || typeof u.textContent != "string" || typeof u.removeChild != "function" || !(u.attributes instanceof d) || typeof u.removeAttribute != "function" || typeof u.setAttribute != "function" || typeof u.namespaceURI != "string" || typeof u.insertBefore != "function" || typeof u.hasChildNodes != "function");
  }, Ir = function(u) {
    return typeof l == "function" && u instanceof l;
  };
  function Ie(B, u, R) {
    Nt(B, ($) => {
      $.call(t, u, R, Ge);
    });
  }
  const Pr = function(u) {
    let R = null;
    if (Ie(L.beforeSanitizeElements, u, null), Kt(u))
      return _e(u), !0;
    const $ = re(u.nodeName);
    if (Ie(L.uponSanitizeElement, u, {
      tagName: $,
      allowedTags: A
    }), Se && u.hasChildNodes() && !Ir(u.firstElementChild) && ce(/<[/\w!]/g, u.innerHTML) && ce(/<[/\w!]/g, u.textContent) || u.nodeType === ot.progressingInstruction || Se && u.nodeType === ot.comment && ce(/<[/\w]/g, u.data))
      return _e(u), !0;
    if (!(I.tagCheck instanceof Function && I.tagCheck($)) && (!A[$] || k[$])) {
      if (!k[$] && kr($) && (D.tagNameCheck instanceof RegExp && ce(D.tagNameCheck, $) || D.tagNameCheck instanceof Function && D.tagNameCheck($)))
        return !1;
      if (zt && !Re[$]) {
        const Q = w(u) || u.parentNode, ae = x(u) || u.childNodes;
        if (ae && Q) {
          const te = ae.length;
          for (let fe = te - 1; fe >= 0; --fe) {
            const Pe = N(ae[fe], !0);
            Pe.__removalCount = (u.__removalCount || 0) + 1, Q.insertBefore(Pe, g(u));
          }
        }
      }
      return _e(u), !0;
    }
    return u instanceof p && !as(u) || ($ === "noscript" || $ === "noembed" || $ === "noframes") && ce(/<\/no(script|embed|frames)/i, u.innerHTML) ? (_e(u), !0) : (le && u.nodeType === ot.text && (R = u.textContent, Nt([U, W, K], (Q) => {
      R = nt(R, Q, " ");
    }), u.textContent !== R && (rt(t.removed, {
      element: u.cloneNode()
    }), u.textContent = R)), Ie(L.afterSanitizeElements, u, null), !1);
  }, Dr = function(u, R, $) {
    if (Ar && (R === "id" || R === "name") && ($ in n || $ in ss))
      return !1;
    if (!(Z && !M[R] && ce(J, R))) {
      if (!(V && ce(ne, R))) {
        if (!(I.attributeCheck instanceof Function && I.attributeCheck(R, u))) {
          if (!P[R] || M[R]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(kr(u) && (D.tagNameCheck instanceof RegExp && ce(D.tagNameCheck, u) || D.tagNameCheck instanceof Function && D.tagNameCheck(u)) && (D.attributeNameCheck instanceof RegExp && ce(D.attributeNameCheck, R) || D.attributeNameCheck instanceof Function && D.attributeNameCheck(R, u)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              R === "is" && D.allowCustomizedBuiltInElements && (D.tagNameCheck instanceof RegExp && ce(D.tagNameCheck, $) || D.tagNameCheck instanceof Function && D.tagNameCheck($)))
            ) return !1;
          } else if (!Ht[R]) {
            if (!ce(c, nt($, xe, ""))) {
              if (!((R === "src" || R === "xlink:href" || R === "href") && u !== "script" && Va($, "data:") === 0 && Tr[u])) {
                if (!(X && !ce(ve, nt($, xe, "")))) {
                  if ($)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, kr = function(u) {
    return u !== "annotation-xml" && Zt(u, De);
  }, Fr = function(u) {
    Ie(L.beforeSanitizeAttributes, u, null);
    const {
      attributes: R
    } = u;
    if (!R || Kt(u))
      return;
    const $ = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: P,
      forceKeepAttr: void 0
    };
    let Q = R.length;
    for (; Q--; ) {
      const ae = R[Q], {
        name: te,
        namespaceURI: fe,
        value: Pe
      } = ae, We = re(te), Vt = Pe;
      let se = te === "value" ? Vt : Ya(Vt);
      if ($.attrName = We, $.attrValue = se, $.keepAttr = !0, $.forceKeepAttr = void 0, Ie(L.uponSanitizeAttribute, u, $), se = $.attrValue, Nr && (We === "id" || We === "name") && (Fe(te, u), se = Zn + se), Se && ce(/((--!?|])>)|<\/(style|title|textarea)/i, se)) {
        Fe(te, u);
        continue;
      }
      if (We === "attributename" && Zt(se, "href")) {
        Fe(te, u);
        continue;
      }
      if ($.forceKeepAttr)
        continue;
      if (!$.keepAttr) {
        Fe(te, u);
        continue;
      }
      if (!je && ce(/\/>/i, se)) {
        Fe(te, u);
        continue;
      }
      le && Nt([U, W, K], ($r) => {
        se = nt(se, $r, " ");
      });
      const Mr = re(u.nodeName);
      if (!Dr(Mr, We, se)) {
        Fe(te, u);
        continue;
      }
      if (E && typeof j == "object" && typeof j.getAttributeType == "function" && !fe)
        switch (j.getAttributeType(Mr, We)) {
          case "TrustedHTML": {
            se = E.createHTML(se);
            break;
          }
          case "TrustedScriptURL": {
            se = E.createScriptURL(se);
            break;
          }
        }
      if (se !== Vt)
        try {
          fe ? u.setAttributeNS(fe, te, se) : u.setAttribute(te, se), Kt(u) ? _e(u) : nn(t.removed);
        } catch {
          Fe(te, u);
        }
    }
    Ie(L.afterSanitizeAttributes, u, null);
  }, os = function B(u) {
    let R = null;
    const $ = Lr(u);
    for (Ie(L.beforeSanitizeShadowDOM, u, null); R = $.nextNode(); )
      Ie(L.uponSanitizeShadowNode, R, null), Pr(R), Fr(R), R.content instanceof o && B(R.content);
    Ie(L.afterSanitizeShadowDOM, u, null);
  };
  return t.sanitize = function(B) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, R = null, $ = null, Q = null, ae = null;
    if (Gt = !B, Gt && (B = "<!-->"), typeof B != "string" && !Ir(B))
      if (typeof B.toString == "function") {
        if (B = B.toString(), typeof B != "string")
          throw st("dirty is not a string, aborting");
      } else
        throw st("toString is not a function");
    if (!t.isSupported)
      return B;
    if (Xe || qt(u), t.removed = [], typeof B == "string" && (Qe = !1), Qe) {
      if (B.nodeName) {
        const Pe = re(B.nodeName);
        if (!A[Pe] || k[Pe])
          throw st("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (B instanceof l)
      R = Or("<!---->"), $ = R.ownerDocument.importNode(B, !0), $.nodeType === ot.element && $.nodeName === "BODY" || $.nodeName === "HTML" ? R = $ : R.appendChild($);
    else {
      if (!ke && !le && !Ee && // eslint-disable-next-line unicorn/prefer-includes
      B.indexOf("<") === -1)
        return E && bt ? E.createHTML(B) : B;
      if (R = Or(B), !R)
        return ke ? null : bt ? _ : "";
    }
    R && ze && _e(R.firstChild);
    const te = Lr(Qe ? B : R);
    for (; Q = te.nextNode(); )
      Pr(Q), Fr(Q), Q.content instanceof o && os(Q.content);
    if (Qe)
      return B;
    if (ke) {
      if (gt)
        for (ae = H.call(R.ownerDocument); R.firstChild; )
          ae.appendChild(R.firstChild);
      else
        ae = R;
      return (P.shadowroot || P.shadowrootmode) && (ae = m.call(r, ae, !0)), ae;
    }
    let fe = Ee ? R.outerHTML : R.innerHTML;
    return Ee && A["!doctype"] && R.ownerDocument && R.ownerDocument.doctype && R.ownerDocument.doctype.name && ce(Wn, R.ownerDocument.doctype.name) && (fe = "<!DOCTYPE " + R.ownerDocument.doctype.name + `>
` + fe), le && Nt([U, W, K], (Pe) => {
      fe = nt(fe, Pe, " ");
    }), E && bt ? E.createHTML(fe) : fe;
  }, t.setConfig = function() {
    let B = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    qt(B), Xe = !0;
  }, t.clearConfig = function() {
    Ge = null, Xe = !1;
  }, t.isValidAttribute = function(B, u, R) {
    Ge || qt({});
    const $ = re(B), Q = re(u);
    return Dr($, Q, R);
  }, t.addHook = function(B, u) {
    typeof u == "function" && rt(L[B], u);
  }, t.removeHook = function(B, u) {
    if (u !== void 0) {
      const R = qa(L[B], u);
      return R === -1 ? void 0 : Ka(L[B], R, 1)[0];
    }
    return nn(L[B]);
  }, t.removeHooks = function(B) {
    L[B] = [];
  }, t.removeAllHooks = function() {
    L = un();
  }, t;
}
var uo = qn();
const fo = "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg", po = ["jpg", "jpeg", "png", "gif", "svg", "webp"], mo = ["mp4", "webm", "ogg"], ho = ["txt", "json", "csv"], yo = ["pdf"];
function go(e) {
  return e.template ? e.template : "tab";
}
function bo(e) {
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    const s = r.group || "Info";
    t[s] || (t[s] = { label: s, type: "fields", fields: [] }), t[s]?.fields?.push({ name: n, ...r });
  }), t;
}
const xo = (e) => Object.entries(e ?? {}).filter(([, t]) => t.type === "geolocation").map(([t]) => t);
async function wo() {
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
function vo(e, t = "create") {
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
) : e, Kn = (e) => {
  const t = Array.isArray(e?.data?.data) ? e.data.data[0] : Array.isArray(e?.data) ? e.data[0] : e?.data?.data ?? e?.data;
  return t && typeof t == "object" && !Array.isArray(t) ? t : null;
}, Ne = (e, t, n, r) => {
  if (!Array.isArray(n) || n.length === 0) return {};
  const s = r ?? (n[0] && typeof n[0] == "object" && "category" in n[0] ? "category" : void 0);
  if (!s) {
    const i = {};
    return n.forEach((l) => {
      const p = l[e], f = l[t];
      p != null && f != null && (i[String(p)] = String(f));
    }), i;
  }
  const o = {};
  return n.forEach((i) => {
    const l = i[s] ?? "Others", p = i[e], f = i[t];
    p == null || f == null || (o[l] || (o[l] = {}), o[l][String(p)] = String(f));
  }), o;
};
function dn(e, t) {
  if (!t || Object.keys(t).length === 0) return e;
  if (typeof e == "number")
    return t[String(e)] ?? e;
  if (typeof e == "string") {
    const r = e.split(",").map((s) => s.trim()).map((s) => t[s]).filter(Boolean);
    return r.length ? r.join(", ") : e;
  }
  return e;
}
const Eo = (e) => e === !0 || e === "true", Ao = (e, t, n, r) => {
  e.forEach((s) => {
    const o = s?.name;
    if (!o) return;
    let i = r?.[o];
    i == null && (i = s.default), s.multiple === !0 || s.type === "checkbox" || s.type === "tags" ? t[o] = Array.isArray(i) ? i : typeof i == "string" ? i.split(",").map((p) => p.trim()).filter(Boolean) : [] : s.type === "json" ? t[o] = typeof i == "object" && i !== null ? JSON.stringify(i, null, 2) : i ?? "" : s.type === "date" ? t[o] = typeof i == "string" ? i.slice(0, 10) : "" : s.type === "time" ? typeof i == "string" ? i.includes("T") ? t[o] = i.slice(11, 16) : t[o] = i.slice(0, 5) : t[o] = "" : o === "blocked" || o === "blacklist" ? t[o] = String(i ?? "false") : t[o] = i ?? "";
    let l;
    s.type === "file" ? l = s.multiple ? be.array().of(be.mixed()) : be.mixed() : s.multiple === !0 || s.type === "checkbox" || s.type === "tags" ? l = be.array().of(be.string()) : s.type === "email" ? l = be.string().email("Invalid email") : s.type === "number" ? l = be.number().typeError("Must be a number") : s.type === "json" ? l = be.string().test("json", "Invalid JSON", (p) => {
      if (!p) return !0;
      try {
        return JSON.parse(p), !0;
      } catch {
        return !1;
      }
    }) : l = be.string(), s.required && (l = l.required(
      s.error_message || `${s.label || o} is required`
    )), s?.validate?.regex && typeof s.validate.regex == "string" && (l = l.matches(
      new RegExp(s?.validate?.regex),
      s?.error_message || "Invalid input format"
    )), s?.validate && Object.entries(s.validate).forEach(([p, f]) => {
      switch (p) {
        case "email":
          f && (l = l.email("Invalid email format"));
          break;
        case "mobile":
          l = l.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          l = l.matches(
            new RegExp(f),
            `Must match pattern: ${f}`
          );
          break;
        case "date":
          l = be.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((d, h) => {
            if (typeof h == "string") {
              const y = h.replace(/-/g, "/"), [j, b, N] = y.split("/");
              if (j && b && N)
                return /* @__PURE__ */ new Date(`${N}-${b}-${j}`);
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
          l = be.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          l = be.number().typeError("Must be a decimal").transform((d, h) => {
            if (h == null || h === "") return;
            const y = Number(h);
            if (isNaN(y)) return d;
            if (typeof d == "number" && !isNaN(d)) {
              const j = Number(d);
              return Number.isInteger(j) ? Number(y.toFixed(j)) : y;
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
            (d) => d && d.toUpperCase()
          );
          break;
        case "lower":
          l = l.transform(
            (d) => d && d.toLowerCase()
          );
          break;
        case "length-min": {
          const d = Number(f);
          isNaN(d) || (l = l.min(d, `Minimum length is ${d}`));
          break;
        }
        case "length-max": {
          const d = Number(f);
          isNaN(d) || (l = l.max(d, `Maximum length is ${d}`));
          break;
        }
      }
    }), n[o] = l;
  });
}, Pt = (e) => !e || typeof e != "object" ? !1 : Object.values(e).every(
  (t) => typeof t == "object" && t !== null
);
function No(e) {
  if (!e || typeof e != "object") return !1;
  const t = e.src;
  return typeof e.target == "string" && typeof t == "object" && t !== null && (t.type === "api" || typeof t.queryid == "string" || typeof t.table == "string" && typeof t.columns < "u");
}
function To(e) {
  return e.split(",").map((t) => t.trim()).map((t) => {
    const n = t.match(/^(.+?)\s+as\s+.+$/i);
    return n ? n[1]?.trim() : t;
  }).filter((t) => !!t);
}
const hr = (e, t) => {
  if (!e || t == null) return;
  const n = String(t);
  if (typeof Object.values(e)[0] == "string")
    return e[n];
  for (const s of Object.values(e))
    if (n in s)
      return s[n];
}, jo = (e) => {
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
function So(e) {
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
function Ro(e) {
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
function _o(e = "") {
  return e.split(".").pop()?.toLowerCase() ?? "";
}
function Co(e) {
  return po.includes(e) ? "image" : mo.includes(e) ? "video" : yo.includes(e) ? "pdf" : ho.includes(e) ? "text" : "other";
}
const fn = {
  image: "fa fa-file-image",
  pdf: "fa fa-file-pdf",
  video: "fa fa-file-video",
  text: "fa fa-file-lines",
  other: "fa fa-file"
}, Oo = "__form_persist__", Vn = (e) => `${Oo}:${e}`;
function Lo(e) {
  return uo.sanitize(e, {
    USE_PROFILES: { html: !0 }
  });
}
function Io(e) {
  try {
    return JSON.parse(localStorage.getItem(Vn(e)) || "{}");
  } catch {
    return {};
  }
}
function Po(e) {
  return e.persistent ? e.persistent === !0 ? e.name : typeof e.persistent == "string" ? e.persistent : null : null;
}
function Do(e, t, n) {
  const r = Io(e);
  localStorage.setItem(
    Vn(e),
    JSON.stringify({
      ...r,
      [t]: n
    })
  );
}
function it(e, t, n) {
  const r = Po(t);
  r && n && Do(n, r, e);
}
const ko = ({ fileUrl: e, category: t }) => e ? t === "image" ? /* @__PURE__ */ a.jsx("img", { src: e, className: "max-h-[80vh] mx-auto" }) : t === "pdf" || t === "text" ? /* @__PURE__ */ a.jsx("iframe", { src: e, className: "w-full h-[80vh]" }) : t === "video" ? /* @__PURE__ */ a.jsx("video", { controls: !0, className: "w-full max-h-[80vh]", children: /* @__PURE__ */ a.jsx("source", { src: e }) }) : /* @__PURE__ */ a.jsxs("div", { className: "text-center p-4", children: [
  /* @__PURE__ */ a.jsx("p", { children: "Preview not available" }),
  /* @__PURE__ */ a.jsx("a", { href: e, download: !0, className: "text-blue-600 underline", children: "Download file" })
] }) : null, lt = (e) => ({
  Authorization: `Bearer ${e.accessToken}`
}), sr = async (e) => (await z.get(
  e.baseURL + e.dbopsGetHash,
  { headers: lt(e) }
)).data.refhash, ar = async (e, t) => (await z.post(
  e.baseURL + e.dbopsGetRefId,
  t,
  { headers: lt(e) }
)).data.refid, Fo = {
  async fetch(e, t, n, r) {
    const s = await sr(e);
    let o = !1, i;
    n && (o = !0, i = n), o || (i = await ar(e, {
      operation: "fetch",
      source: t.source,
      fields: t.fields ?? {},
      datahash: s,
      srcid: r
    }));
    const l = { refid: i, datahash: s, refid1: e.refid };
    t.source?.refid && (l.refid1 = t.source?.refid);
    const p = await z.post(
      e.baseURL + e.dbopsFetch,
      l,
      { headers: lt(e) }
    );
    return p.data?.data ?? p.data;
  },
  async create(e, t, n) {
    const r = await sr(e), s = await ar(e, {
      operation: "create",
      source: t.source,
      fields: t.values,
      datahash: r,
      srcid: n
    });
    return (await z.post(
      e.baseURL + e.dbopsCreate,
      { refid: s, fields: t.values, datahash: r },
      { headers: lt(e) }
    )).data;
  },
  async update(e, t, n) {
    const r = await sr(e), s = await ar(e, {
      operation: "update",
      source: t.source,
      fields: t.values,
      datahash: r,
      srcid: n
    });
    return (await z.post(
      e.baseURL + e.dbopsUpdate,
      { refid: s, fields: t.values, datahash: r },
      { headers: lt(e) }
    )).data;
  }
};
async function qe(e, t, n, r = void 0, s = void 0, o = {}) {
  try {
    let i = n;
    return i || (i = (await z({
      method: "POST",
      url: e.baseURL + e.registerQuery,
      data: { query: t, srcid: s },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    })).data.queryid), await z({
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
async function Mo({
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
    let p;
    if ("type" in l && l.type === "api") {
      let y = e.name;
      typeof e.parameter == "string" && e.parameter && (y = e.parameter);
      const j = { [y]: t, refid: t };
      if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
        for (const [T, g] of Object.entries(e.parameter))
          j[T] = T === y ? t : s?.[g];
      const b = {
        method: l.method || "GET",
        url: n?.baseURL + l.endpoint,
        headers: {
          Authorization: `Bearer ${n?.accessToken}`
        },
        ...l.method === "GET" ? { params: j } : { data: j }
      }, { data: N } = await z(b);
      p = N;
    } else {
      let y;
      if (!l.queryid) {
        if (!l.table || !l.columns)
          throw new Error("SQL query requires field.table");
        const b = he(l.where ?? {}, { refid: t });
        y = {
          ...l,
          table: l.table,
          cols: l.columns,
          where: b
        };
      }
      const { data: j } = await qe(
        n,
        y,
        l.queryid,
        t
      );
      p = j;
    }
    const f = Array.isArray(p?.results?.options) ? p?.results?.options : Array.isArray(p.data) ? p.data : Array.isArray(p.results) ? p.results : p, d = Array.isArray(f) ? f.map(me) : [], h = Ne(
      e.valueKey ?? "value",
      e.labelKey ?? "title",
      d,
      e.groupKey
    );
    r(i.target, h);
  }
}
async function Yn(e, t) {
  let n = t.previewPath ?? "/api/files/preview";
  const r = await z.get(
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
async function Xn(e, t) {
  if (!e?.uploadURL)
    throw new Error("Upload URL missing");
  const n = e.baseURL + e.uploadURL;
  return Promise.all(
    Array.from(t).map(async (r) => {
      const s = new FormData();
      return s.append("file", r), (await z.post(n, s, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${e.accessToken}`
        }
      })).data;
    })
  );
}
function $o(e) {
  const t = fn[e] ?? fn.other;
  return /* @__PURE__ */ a.jsx("i", { className: `${t} text-2xl text-gray-600` });
}
const Qn = ({ filePath: e, sqlOpsUrls: t }) => {
  const [n, r] = oe(null), [s, o] = oe(!1), i = _o(e), l = Co(i);
  pe(() => {
    if (!t || l !== "image" && !s) return;
    let f = !0, d = null;
    return Yn(e, t).then((h) => {
      f && (d = h, r(h));
    }), () => {
      f = !1, d && URL.revokeObjectURL(d);
    };
  }, [l, s, e, t]);
  let p = e.split("/").pop();
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    l === "image" && n ? /* @__PURE__ */ a.jsx(
      "img",
      {
        src: n,
        alt: p,
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
        onKeyDown: (f) => f.key === "Enter" && o(!0),
        className: "inline-flex cursor-pointer items-center gap-1",
        title: "Click to preview",
        children: [
          $o(l),
          /* @__PURE__ */ a.jsx("span", { className: "text-sm", children: p })
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
      n ? /* @__PURE__ */ a.jsx(ko, { fileUrl: n, category: l }) : /* @__PURE__ */ a.jsx("div", { className: "text-center p-8", children: "Loading preview…" })
    ] }) })
  ] });
};
function yt({
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
  const p = `
    text-sm text-gray-600 break-words capitalize
  `, f = `
    block text-sm font-semibold  transition-all duration-300 text-gray-700 capitalize
  `, [d, h] = oe(
    i ?? e.options ?? {}
  ), y = ee.useRef(!1);
  ee.useEffect(() => {
    i && h(i);
  }, [i]);
  const j = ee.useMemo(
    () => So(d),
    [d]
  );
  ee.useEffect(() => {
    let w = !0, E = e.valueKey ?? "value", _ = e.labelKey ?? "title";
    return (async () => {
      let F = e?.options;
      if (F && (Array.isArray(F) && F.length > 0 || !Array.isArray(F) && Object.keys(F).length > 0)) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const U = Object.values(e.options);
          if (U.length && typeof U[0] == "string") {
            h(e.options);
            return;
          }
        }
        const m = (Array.isArray(e.options) ? e.options : [e.options]).map(me), L = Ne(
          E,
          _,
          m,
          e.groupKey
          // auto-uses `category` if present
        );
        h(L);
        return;
      }
      const H = e?.source ?? {};
      if (e.type === "dataMethod") {
        const O = e.method, m = O ? n[O] : void 0;
        if (m)
          try {
            const L = await Promise.resolve(m()), U = Array.isArray(L.data?.results?.options) ? L.data?.results?.options : Array.isArray(L?.data?.data) ? L.data.data : Array.isArray(L.data?.results) ? L.data?.results : Array.isArray(L?.data) ? L.data : L;
            if (typeof U == "object" && !Array.isArray(U)) {
              const J = Object.values(U);
              if (J.length && typeof J[0] == "string") {
                h(U);
                return;
              }
            }
            const W = Array.isArray(U) ? U.map(me) : [], K = Ne(E, _, W, e.groupKey);
            w && h(K);
            return;
          } catch (L) {
            console.error("Method execution failed:", L), w && h({});
            return;
          }
        else {
          w && h({});
          return;
        }
      }
      if (H.type === "api" && H.endpoint)
        try {
          const O = {
            method: H.method || "GET",
            url: r?.baseURL + H.endpoint,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            },
            ...H.method === "GET" ? { params: { refid: H.refid } } : { data: { refid: H.refid } }
          }, m = await z(O), L = Array.isArray(m.data?.results?.options) ? m.data?.results?.options : Array.isArray(m?.data?.data) ? m.data.data : Array.isArray(m.data?.results) ? m.data?.results : Array.isArray(m?.data) ? m.data : m;
          if (typeof L == "object" && !Array.isArray(L)) {
            const K = Object.values(L);
            if (K.length && typeof K[0] == "string") {
              h(L);
              return;
            }
          }
          const U = Array.isArray(L) ? L.map(me) : [], W = Ne(E, _, U, e.groupKey);
          w && h(W);
          return;
        } catch (O) {
          console.error("API execution failed:", O), w && h({});
          return;
        }
      if (e.table || e.type === "dataSelector" || e.queryid) {
        if (!r) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let O;
          if (e.type === "dataSelector")
            O = {
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
            O = {
              table: e.table,
              cols: e.columns,
              where: e.where ? s ? he(e.where, { refid: s }) : e.where : void 0
            };
          }
          const m = await qe(r, O, e?.queryid, void 0, o), L = Array.isArray(m?.data?.data) ? m.data.data : Array.isArray(m?.data) ? m.data : m;
          if (typeof L == "object" && !Array.isArray(L)) {
            const K = Object.values(L);
            if (K.length && typeof K[0] == "string") {
              h(L);
              return;
            }
          }
          const U = Array.isArray(L) ? L.map(me) : [], W = Ne(E, _, U, e.groupKey);
          w && h(W);
        } catch (O) {
          console.error("API fetch failed:", O);
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
    s
  ]);
  const b = e?.name ? t?.[e.name] : void 0;
  ee.useEffect(() => {
    y.current || !l || !b || (y.current = !0, Mo({
      field: e,
      value: b,
      sqlOpsUrls: r,
      setFieldOptions: l,
      values: t ?? {}
    }));
  }, [b, r, l]);
  let N;
  typeof b == "string" ? e.type === "date" ? N = b.split("T")[0] : e.type === "time" ? N = b.includes("T") ? b.slice(11, 16) : b.slice(0, 5) : N = dn(b, j) : N = dn(b, j);
  const T = N == null ? "" : typeof N == "string" || typeof N == "number" ? N : JSON.stringify(N), g = Ro(b), x = e.type === "richtextarea" && typeof T == "string" ? Lo(T) : null;
  return /* @__PURE__ */ a.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ a.jsx("label", { className: f, children: e?.label }),
    /* @__PURE__ */ a.jsx("div", { className: "relative", children: g ? g.type === "drawn" ? /* @__PURE__ */ a.jsx("svg", { viewBox: "0 0 300 150", className: "h-24 w-full border bg-white rounded", children: g.paths.map((w, E) => /* @__PURE__ */ a.jsx(
      "path",
      {
        d: w.d,
        stroke: w.color || "#000",
        strokeWidth: w.width || 2,
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      E
    )) }) : g.type === "text" ? /* @__PURE__ */ a.jsx("svg", { viewBox: "0 0 300 150", className: "h-24 w-full border bg-white rounded", children: /* @__PURE__ */ a.jsx(
      "text",
      {
        x: "10",
        y: "100",
        fontSize: g.data.style?.fontSize || 32,
        fontFamily: g.data.style?.fontFamily || "cursive",
        fill: g.data.style?.textColor || "#000",
        children: g.data.text
      }
    ) }) : g.type === "html" ? /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "border bg-white rounded p-2 text-sm",
        dangerouslySetInnerHTML: { __html: g.html }
      }
    ) : /* @__PURE__ */ a.jsx(
      "img",
      {
        src: g.src,
        alt: "signature",
        className: "h-24 object-contain border bg-white rounded"
      }
    ) : (e.type === "file" || e.type === "attachement" || e.type === "photo" || e.type === "avatar") && N ? /* @__PURE__ */ a.jsx("div", { className: "flex flex-wrap gap-2", children: String(N).split(",").map((w) => w.trim()).filter(Boolean).map((w) => /* @__PURE__ */ a.jsx(
      Qn,
      {
        sqlOpsUrls: r,
        filePath: w
      },
      w
    )) }) : e.type === "richtextarea" ? /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "tiptap border border-gray-200 min-h-[400px] max-h-[220px] overflow-auto bg-white rounded p-2 text-sm",
        dangerouslySetInnerHTML: { __html: x ?? "" }
      }
    ) : /* @__PURE__ */ a.jsx("p", { className: p, children: T }) })
  ] });
}
function Jn({ filePath: e, field_name: t, sqlOpsUrls: n }) {
  const [r, s] = oe(null);
  return pe(() => {
    if (!open || !n) return;
    let o = !0, i = null;
    return Yn(e, n).then((l) => {
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
        i.onerror = null, i.src = fo;
      }
    }
  ) : null;
}
function Bo({
  commonInfo: e,
  infoData: t,
  hiddenFields: n = [],
  sqlOpsUrls: r,
  setFieldOptions: s,
  fieldOptions: o,
  module_refid: i,
  refid: l,
  methods: p
}) {
  const f = jt(
    () => e?.fields?.find((y) => y.type === "avatar"),
    [e?.fields]
  ), d = f?.name, h = d && typeof t?.[d] == "string" ? t[d].trim() : "";
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white border border-gray-100 p-4 min-h-3/10 overflow-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    f && /* @__PURE__ */ a.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ a.jsx("div", { className: "relative w-42 h-42 p-2 rounded-sm overflow-hidden bg-gray-100 flex items-center justify-center", children: h ? /* @__PURE__ */ a.jsx(
      Jn,
      {
        field_name: f.name,
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
    /* @__PURE__ */ a.jsx("div", { className: `min-h-0 max-h-40 overflow-y-auto custom-scrollbar ${f ? "lg:col-span-10" : "lg:col-span-12"}`, children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: e.fields?.map((y, j) => n.includes(y.name) || y.type === "avatar" ? null : /* @__PURE__ */ a.jsx("div", { className: `hover:bg-gray-100 transition-colors duration-200 col-span-12 sm:col-span-6 ${mt[ht(y.width)] || "lg:col-span-4"}`, children: /* @__PURE__ */ a.jsx(
      yt,
      {
        field: y,
        data: t ?? {},
        sqlOpsUrls: r,
        methods: p,
        refid: l,
        module_refid: i,
        setFieldOptions: s,
        ...o[y.name] ? { optionsOverride: o[y.name] } : {}
      },
      y?.name
    ) }, y.name)) }) })
  ] }) });
}
function wr({ tabObj: e, methods: t, tabName: n, sqlOpsUrls: r, refid: s, module_refid: o, setFieldOptions: i, fieldOptions: l }) {
  const [p, f] = ee.useState(null);
  return ee.useEffect(() => {
    let d = !1;
    return (async () => {
      const y = e?.config;
      if (!y?.type) {
        d || f(null);
        return;
      }
      if (y.type === "method") {
        const j = y.method, b = j ? t[j] : void 0;
        if (b)
          try {
            const N = await Promise.resolve(b());
            d || f(N || null);
          } catch (N) {
            console.error("Method execution failed:", N), d || f(null);
          }
        else
          d || f(null);
      }
      if (y.type === "api")
        try {
          const j = await z({
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
          d || f(j.data || null);
        } catch (j) {
          console.error("API fetch failed:", j), d || f(null);
        }
      if (y.type === "sql" && s && s != "0" || y?.dbopsid) {
        if (!r) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let j = !1, b;
          y?.dbopsid && (j = !0, b = y?.dbopsid);
          const N = await z({
            method: "GET",
            url: r.baseURL + r.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            }
          });
          if (!j) {
            let x = {
              ...y
            };
            y.where && (x = {
              ...y,
              where: he(y.where, {
                refid: s
              })
            }), b = (await z({
              method: "POST",
              url: r.baseURL + r.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: x,
                fields: It(y.fields, r.operation),
                forcefill: y.forcefill,
                datahash: N.data.refhash,
                srcid: o
              },
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              }
            }))?.data.refid;
          }
          const T = await z({
            method: "POST",
            url: r.baseURL + r.dbopsFetch,
            data: {
              refid: b,
              datahash: N.data.refhash
            },
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            }
          }), g = Kn(T);
          d || f(g);
        } catch (j) {
          console.error("API fetch failed:", j);
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
  ]), /* @__PURE__ */ a.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: p ? Object.keys(p).map((d, h) => {
    let y = { name: d, label: d };
    return /* @__PURE__ */ a.jsx(
      "div",
      {
        className: `col-span-12 sm:col-span-6 ${mt[ht(e.width)] || "lg:col-span-2"}`,
        children: /* @__PURE__ */ a.jsx(
          yt,
          {
            field: y,
            data: p ?? {},
            methods: t,
            refid: s,
            sqlOpsUrls: r,
            setFieldOptions: i,
            ...l[y.name] ? { optionsOverride: l[y.name] } : {}
          },
          d
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
function zo({
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
function Uo({
  field: e,
  formik: t,
  methods: n = {},
  sqlOpsUrls: r,
  refid: s,
  module_refid: o = "menuManager.main",
  optionsOverride: i,
  setFieldOptions: l
}) {
  const [p, f] = oe(!1), [d, h] = oe(
    i ?? e.options ?? {}
  ), [y, j] = oe(""), [b, N] = oe(0), T = Ke(null), g = Ke(null), [x, w] = oe(!1), E = Ke(y), _ = e.disabled === !0;
  pe(() => {
    E.current = y;
  }, [y]), pe(() => {
    if (e.type !== "select" || e.multiple || e["no-option"] !== "false" || t.values[C] || !d) return;
    let A;
    if (Array.isArray(d))
      A = d[0]?.value;
    else if (!Pt(d))
      A = Object.keys(d)[0];
    else {
      const S = Object.values(d)[0];
      A = S ? Object.keys(S)[0] : void 0;
    }
    A != null && t.setFieldValue(C, String(A), !1);
  }, [d]), pe(() => {
    i && Object.keys(i).length !== 0 && h(i);
  }, [i]), pe(() => {
    if (!x) return;
    const c = (A) => {
      const S = A.target;
      g.current?.contains(S) || T.current?.contains(S) || (w(!1), j(""));
    };
    return document.addEventListener("mousedown", c), () => {
      document.removeEventListener("mousedown", c);
    };
  }, [x]);
  const C = e.name;
  pe(() => {
    let c = !0;
    return (async () => {
      let S = e.valueKey ?? "value", P = e.labelKey ?? "title", Y = e?.options;
      if (Y && (Array.isArray(Y) && Y.length > 0 || !Array.isArray(Y) && Object.keys(Y).length > 0)) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const V = Object.values(e.options);
          if (V.length && typeof V[0] == "string") {
            h(e.options);
            return;
          }
        }
        const M = (Array.isArray(e.options) ? e.options : [e.options]).map(me), I = Ne(
          S,
          P,
          M,
          e.groupKey
          // auto-uses `category` if present
        );
        h(I);
        return;
      }
      const D = e?.source ?? {};
      if (e.type === "dataMethod") {
        const k = e.method, M = k ? n[k] : void 0;
        if (M)
          try {
            const I = await M(), V = Array.isArray(I.data?.results?.options) ? I.data?.results?.options : Array.isArray(I?.data?.data) ? I.data.data : Array.isArray(I.data?.results) ? I.data?.results : Array.isArray(I?.data) ? I.data : I;
            if (typeof V == "object" && !Array.isArray(V)) {
              const je = Object.values(V);
              if (je.length && typeof je[0] == "string") {
                h(V);
                return;
              }
            }
            const Z = Array.isArray(V) ? V.map(me) : [], X = Ne(S, P, Z, e.groupKey);
            c && h(X);
            return;
          } catch (I) {
            console.error("Method execution failed:", I), c && h({});
            return;
          }
        else {
          c && h({});
          return;
        }
      }
      if (D.type === "api" && D.endpoint)
        try {
          const k = {
            method: D.method || "GET",
            url: r?.baseURL + D.endpoint,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            },
            ...D.method === "GET" ? { params: { refid: D.refid } } : { data: { refid: D.refid } }
          }, M = await z(k), I = Array.isArray(M.data?.results?.options) ? M.data?.results?.options : Array.isArray(M?.data?.data) ? M.data.data : Array.isArray(M.data?.results) ? M.data?.results : Array.isArray(M?.data) ? M.data : M;
          if (typeof I == "object" && !Array.isArray(I)) {
            const X = Object.values(I);
            if (X.length && typeof X[0] == "string") {
              h(I);
              return;
            }
          }
          const V = Array.isArray(I) ? I.map(me) : [], Z = Ne(S, P, V, e.groupKey);
          c && h(Z);
          return;
        } catch (k) {
          console.error("API execution failed:", k), c && h({});
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
          const M = await qe(r, k, e?.queryid, void 0, o), I = Array.isArray(M?.data?.data) ? M.data.data : Array.isArray(M?.data) ? M.data : M;
          if (typeof I == "object" && !Array.isArray(I)) {
            const X = Object.values(I);
            if (X.length && typeof X[0] == "string") {
              h(I);
              return;
            }
          }
          const V = Array.isArray(I) ? I.map(me) : [], Z = Ne(S, P, V, e.groupKey);
          c && h(Z);
        } catch (k) {
          console.error("API fetch failed:", k);
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
  const F = `
  w-full px-4 py-2 rounded-lg border transition-all duration-300
  backdrop-blur-sm text-gray-800 placeholder-gray-400
  focus:outline-none focus:ring-0

  ${_ ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:shadow-md"}
`, H = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, O = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, m = jt(
    () => jo(d),
    [d]
  ), L = jt(() => {
    if (!e.type || !["suggest", "autosuggest", "autocomplete"].includes(e.type) || !y.trim()) return null;
    const c = y.trim().toLowerCase();
    return m.find(([, A]) => A.trim().toLowerCase() === c);
  }, [e.type, y, m]), U = m.length, W = jt(() => e.search || !y ? m : m.filter(
    ([, c]) => c.toLowerCase().includes(y.toLowerCase())
  ), [e.search, y, m]), K = (c, A) => {
    if (x)
      if (c.key === "ArrowDown")
        c.preventDefault(), N(
          (S) => S + 1 < W.length ? S + 1 : 0
        );
      else if (c.key === "ArrowUp")
        c.preventDefault(), N(
          (S) => S - 1 >= 0 ? S - 1 : W.length - 1
        );
      else if (c.key === "Enter") {
        c.preventDefault();
        const [S] = W[b] || [];
        if (S) {
          let P = A ? S : [...t.values[e.name], S];
          t.setFieldValue(e.name, P), it(P, e, o);
        }
      } else c.key === "Escape" && (j(""), w(!1));
  };
  pe(() => {
    T.current?.querySelector(
      `[data-index="${b}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [b]), pe(() => {
    b >= W.length && N(0);
  }, [W, b]), pe(() => {
    const c = e.autocomplete, A = e.ajaxchain;
    if (!c && !A) return;
    const S = t.values[e.name];
    if (!S) return;
    const P = Array.isArray(A) ? A : A ? [A] : [];
    (async () => {
      try {
        if (No(c)) {
          const D = c.src;
          if (!D || !r) return;
          let k;
          if ("type" in D && D.type === "api") {
            let I = e.name;
            typeof e.parameter == "string" && e.parameter && (I = e.parameter);
            const V = { [I]: S, refid: S };
            if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
              for (const [je, le] of Object.entries(e.parameter))
                V[je] = je === I ? S : t.values?.[le];
            const Z = {
              method: D.method || "GET",
              url: r?.baseURL + D.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...D.method === "GET" ? { params: V } : { data: V }
            }, { data: X } = await z(Z);
            k = Array.isArray(X?.data?.results?.options) ? X?.data?.results?.options[0] : Array.isArray(X?.data?.data) ? X.data.data[0] : Array.isArray(X?.data?.results) ? X.data.results[0] : Array.isArray(X?.data) ? X.data[0] : X?.data;
          } else {
            let I;
            if (!D.queryid) {
              if (!D.table || !D.columns)
                throw new Error("SQL query requires field.table");
              const Z = he(D?.where ?? {}, {
                refid: S
              });
              I = {
                ...D,
                table: D.table,
                cols: D.columns,
                where: Z
              };
            }
            const { data: V } = await qe(r, I, D?.queryid, S, o);
            k = Array.isArray(V?.data?.data) ? V.data.data[0] : Array.isArray(V?.data) ? V.data[0] : V?.data;
          }
          let M = me(k);
          M && c.target.split(",").map((I) => I.trim()).forEach((I) => {
            M[I] !== void 0 && t.setFieldValue(I, M[I]);
          });
        }
        for (const D of P) {
          const k = D.src;
          if (!D || typeof D != "object" || !k || typeof k != "object" || !r) continue;
          let M;
          if ("type" in k && k.type === "api") {
            let le = e.name;
            typeof e.parameter == "string" && e.parameter && (le = e.parameter);
            let Se = { [le]: S, refid: S };
            if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
              for (const [ze, ke] of Object.entries(e.parameter))
                Se[ze] = ze === le ? S : t.values?.[ke];
            const Ee = {
              method: k.method || "GET",
              url: r?.baseURL + k.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...k.method === "GET" ? { params: Se } : { data: Se }
            }, { data: Xe } = await z(Ee);
            M = Xe;
          } else {
            let le;
            if (!k.queryid) {
              if (!k.table || !k.columns)
                throw new Error("SQL query requires field.table");
              const Ee = he(k?.where ?? {}, {
                refid: S
              });
              le = {
                ...k,
                table: k.table,
                cols: k.columns,
                where: Ee
              };
            }
            const { data: Se } = await qe(r, le, k?.queryid, S, o);
            M = Se;
          }
          let I = e.valueKey ?? "value", V = e.labelKey ?? "title";
          const Z = Array.isArray(M?.results?.options) ? M?.results?.options : Array.isArray(M.data) ? M.data : Array.isArray(M.results) ? M.results : M, X = Array.isArray(Z) ? Z.map(me) : [], je = Ne(
            I,
            V,
            X,
            e.groupKey
          );
          l?.(D.target, je);
        }
      } catch (D) {
        console.error("Autocomplete / AjaxChain fetch failed", D);
      }
    })();
  }, [t.values[e.name]]), pe(() => {
    if (!e.search || !y.trim() || !r) return;
    const c = To(e.columns ?? ""), A = new AbortController(), S = setTimeout(async () => {
      try {
        let P;
        if (!e.queryid) {
          if (!e.table || !e.cols)
            throw new Error("SQL query requires field.table");
          const X = s ? he(e.where ?? {}, {
            refid: s
          }) : e.where;
          P = {
            ...e,
            table: e.table,
            cols: e.columns || e.cols,
            where: X
          };
        }
        let Y = {};
        Array.isArray(c) && c.forEach((X) => {
          Y[X] = [y, "LIKE"];
        });
        let D = e.valueKey ?? "value", k = e.labelKey ?? "title";
        const { data: M } = await qe(r, P, e?.queryid, void 0, o, Y), I = Array.isArray(M?.data?.data) ? M.data.data : Array.isArray(M?.data) ? M.data : M, V = Array.isArray(I) ? I.map(me) : [], Z = Ne(
          D,
          k,
          V,
          e.groupKey
        );
        h(Z);
      } catch (P) {
        if (z.isCancel(P)) return;
        console.error("Search fetch failed", P);
      }
    }, 500);
    return () => {
      clearTimeout(S), A.abort();
    };
  }, [y, s]);
  const J = async (c) => {
    if (c.length === 0) {
      console.error("No file");
      return;
    }
    try {
      const A = await Xn(r, c), S = e.multiple ? A.map((P) => P.path) : A[0]?.path;
      t.setFieldValue(
        C,
        S
      ), it(S, e, o);
    } catch (A) {
      console.error("File upload failed", A), t.setFieldError(C, "File upload failed");
    }
  }, ne = async (c, A, S) => {
    const P = A[c];
    if (!P) return;
    const Y = n?.[P];
    if (typeof Y != "function") {
      console.error(`Method "${String(P)}" not found`);
      return;
    }
    try {
      await Promise.resolve(Y(S));
    } catch (D) {
      console.error(`Method "${String(P)}" failed`, D);
    }
  }, ve = (c) => {
    if (_) return;
    const A = c.target.value;
    j(A), N(0), A.trim() ? w(!0) : (w(!1), t.setFieldValue(C, ""));
  }, xe = (c) => {
    t.setFieldValue(C, c), it(c, e, o), j(""), w(!1), ne("onChange", e, `${C}-${c}`);
  };
  function De(c) {
    const A = c.currentTarget.files;
    A && J(A);
  }
  return {
    setHighlightedIndex: N,
    executeFieldMethod: ne,
    handleFileUpload: J,
    handleKeyDown: K,
    setSearch: j,
    setOpen: w,
    setIsFocused: f,
    handleInputChange: ve,
    handleSelect: xe,
    handlePersist: it,
    handleFileChange: De,
    optionCount: U,
    baseInputClasses: F,
    focusClasses: H,
    labelClasses: O,
    search: y,
    highlightedIndex: b,
    options: d,
    isDisabled: _,
    key: C,
    filteredOptions: W,
    open: x,
    listRef: T,
    isFocused: p,
    exactMatch: L,
    triggerRef: g
  };
}
function yr({
  anchorRef: e,
  open: t,
  children: n,
  offset: r = 4,
  maxHeight: s = 240
}) {
  const [o, i] = oe({});
  return is(() => {
    if (!t || !e.current) return;
    const l = e.current, p = () => {
      const d = l.getBoundingClientRect(), y = window.innerHeight - d.bottom, j = d.top, N = y < s && j > y ? d.top - Math.min(s, j) - r : d.bottom + r;
      i({
        position: "fixed",
        top: N,
        left: d.left,
        width: d.width,
        maxHeight: s,
        zIndex: 9999
      });
    };
    p();
    const f = requestAnimationFrame(p);
    return window.addEventListener("scroll", p, !0), window.addEventListener("resize", p), () => {
      cancelAnimationFrame(f), window.removeEventListener("scroll", p, !0), window.removeEventListener("resize", p);
    };
  }, [t, e, r, s]), t ? cs(
    /* @__PURE__ */ a.jsx("div", { style: o, children: n }),
    document.body
  ) : null;
}
function pn({
  field: e,
  isDisabled: t,
  handleKeyDown: n,
  valueArray: r,
  labelClasses: s,
  listRef: o,
  search: i,
  filteredOptions: l,
  highlightedIndex: p,
  setSearch: f,
  formik: d,
  executeFieldMethod: h,
  handlePersist: y,
  module_refid: j,
  options: b,
  triggerRef: N,
  open: T,
  setOpen: g
}) {
  const x = e.name;
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
        ref: N,
        onClick: () => {
          g((w) => !w);
        },
        onKeyDown: (w) => {
          t || n(w, !1);
        },
        onBlur: () => {
          e.multiple || setTimeout(() => {
            g(!1), f("");
          }, 150);
        },
        children: [
          /* @__PURE__ */ a.jsx("span", { className: "text-sm text-gray-700", children: r?.length > 0 ? r.map((w) => hr(b, w) ?? w).join(", ") : `Select ${e.label}` }),
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
    /* @__PURE__ */ a.jsx(yr, { anchorRef: N, open: T && !t, children: /* @__PURE__ */ a.jsxs("div", { ref: o, className: " w-full border border-gray-200 rounded-lg bg-white shadow-md  max-h-60 overflow-y-auto p-2", children: [
      e.search && /* @__PURE__ */ a.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ a.jsx(
        "input",
        {
          type: "text",
          value: i,
          onChange: (w) => {
            t || f(w.target.value);
          },
          placeholder: "Search...",
          className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
        }
      ) }),
      l.length > 0 ? l.map(([w, E], _) => /* @__PURE__ */ a.jsxs(
        "label",
        {
          htmlFor: `${x}-${w}`,
          className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${r?.includes(w) ? "bg-indigo-50 text-indigo-600 font-medium" : p === _ ? "bg-gray-100" : "hover:bg-gray-50"}`,
          children: [
            /* @__PURE__ */ a.jsx(
              "input",
              {
                id: `${x}-${w}`,
                type: "checkbox",
                checked: r?.includes(w),
                onChange: (C) => {
                  const F = C.target.checked ? [...r, w] : r?.filter((H) => H !== w);
                  d.setFieldValue(x, F), y(F, e, j), h("onChange", e, `${x}-${w}`);
                },
                onBlur: d.handleBlur,
                disabled: t,
                className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              }
            ),
            E
          ]
        },
        w
      )) : /* @__PURE__ */ a.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
    ] }) }),
    d.touched[x] && d.errors[x] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(d.errors[x]) })
  ] });
}
function Ho({
  formik: e,
  field: t,
  sqlOpsUrls: n,
  module_refid: r
}) {
  let s = t?.name;
  const o = Ke(null), i = async (p) => {
    const f = p.currentTarget.files;
    if (!(!f || f.length === 0))
      try {
        const d = await Xn(n, f), h = t.multiple ? d.map((y) => y.path) : d[0]?.path;
        e.setFieldValue(
          s,
          h
        ), it(h, t, r);
      } catch (d) {
        console.error("File upload failed", d), e.setFieldError(s, "File upload failed");
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
        children: l.length > 0 ? l.map((p) => /* @__PURE__ */ a.jsx(Jn, { field_name: p, filePath: p, sqlOpsUrls: n })) : /* @__PURE__ */ a.jsx(
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
function Go({
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
    setHighlightedIndex: p,
    executeFieldMethod: f,
    handleFileUpload: d,
    handleKeyDown: h,
    setSearch: y,
    setOpen: j,
    setIsFocused: b,
    handleInputChange: N,
    handleSelect: T,
    handlePersist: g,
    optionCount: x,
    baseInputClasses: w,
    focusClasses: E,
    labelClasses: _,
    search: C,
    highlightedIndex: F,
    options: H,
    isDisabled: O,
    key: m,
    filteredOptions: L,
    open: U,
    listRef: W,
    triggerRef: K,
    isFocused: J,
    exactMatch: ne
  } = Uo({
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
      const c = t.values[m] ?? "", A = C !== "" ? C : hr(H, c) ?? String(c ?? "");
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: _, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { ref: K, children: /* @__PURE__ */ a.jsx(
          "input",
          {
            className: `${w} ${E}`,
            value: A,
            placeholder: e.placeholder || "Type to search...",
            onChange: N,
            onBlur: () => {
              setTimeout(() => j(!1), 150);
            },
            onKeyDown: (S) => {
              if (S.key === "Enter") {
                if (S.preventDefault(), ne) {
                  const [P] = ne;
                  t.setFieldValue(m, P), g(P, e, o);
                } else C.trim() && (t.setFieldValue(m, C.trim()), g(C.trim(), e, o));
                j(!1);
                return;
              }
              h(S, !0);
            },
            disabled: O
          }
        ) }),
        /* @__PURE__ */ a.jsx(yr, { anchorRef: K, open: U && !O, children: /* @__PURE__ */ a.jsx(
          "div",
          {
            ref: W,
            className: "absolute z-20 w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1",
            children: L.length > 0 && ne ? L.map(([S, P], Y) => /* @__PURE__ */ a.jsx(
              "div",
              {
                id: `${m}-${S}`,
                "data-index": Y,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${F === Y ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => T(S),
                children: P
              },
              S
            )) : /* @__PURE__ */ a.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `Press "ENTER" to ADD "${A}" ` })
          }
        ) }),
        t.touched[m] && t.errors[m] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[m]) })
      ] });
    }
    case "dataSelector":
    case "dataSelectorFromTable":
    case "dataSelectorFromUniques":
    case "dataMethod": {
      if (e.multiple === !0) {
        const c = t.values[m];
        return /* @__PURE__ */ a.jsx(
          pn,
          {
            field: e,
            isDisabled: O,
            handleKeyDown: h,
            valueArray: c,
            labelClasses: _,
            listRef: W,
            search: C,
            filteredOptions: L,
            highlightedIndex: F,
            setSearch: y,
            formik: t,
            executeFieldMethod: f,
            handlePersist: g,
            module_refid: o,
            options: H,
            triggerRef: K,
            open: U,
            setOpen: j
          }
        );
      }
      return console.log("open", U, m), /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: _, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: `
    relative w-full select-none border rounded-lg px-4 py-2.5 flex justify-between items-center
    ${O ? "opacity-70 bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 cursor-pointer"}
  `,
            ref: K,
            tabIndex: 0,
            onClick: () => {
              j((c) => !c), p(0);
            },
            onKeyDown: (c) => {
              O || h(c, !0);
            },
            children: [
              /* @__PURE__ */ a.jsx("span", { className: "text-sm text-gray-700", children: t.values[m] ? hr(H, t.values[m]) ?? "Select option" : `Select ${e.label}` }),
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
        /* @__PURE__ */ a.jsx(yr, { anchorRef: K, open: U, children: /* @__PURE__ */ a.jsxs(
          "div",
          {
            ref: W,
            className: "absolute mt-1 w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2",
            children: [
              e.search && /* @__PURE__ */ a.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ a.jsx(
                "input",
                {
                  type: "text",
                  value: C,
                  onChange: (c) => {
                    y(c.target.value), p(0);
                  },
                  onKeyDown: (c) => h(c, !0),
                  placeholder: "Search...",
                  className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                  bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-0`
                }
              ) }),
              L.length > 0 && /* @__PURE__ */ a.jsx(
                "div",
                {
                  onClick: (c) => {
                    c.preventDefault(), c.stopPropagation(), t.setFieldValue(m, ""), j(!1), g("", e, o), y("");
                  },
                  className: "px-2 py-1 hover:bg-gray-50 text-gray-500 rounded cursor-pointer text-sm hover:bg-gray-50",
                  children: "Clear selection"
                }
              ),
              L.length > 0 ? L.map(([c, A], S) => /* @__PURE__ */ a.jsx(
                "div",
                {
                  id: `${m}-${c}`,
                  "data-index": S,
                  onClick: (P) => {
                    P.preventDefault(), P.stopPropagation(), t.setFieldValue(m, c), g(c, e, o), j(!1), y(""), p(0), f("onChange", e, `${m}-${c}`);
                  },
                  className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                        ${t.values[m] === c ? "bg-indigo-50 text-indigo-600 font-medium" : F === S ? "bg-gray-100" : "hover:bg-gray-50"}`,
                  children: A
                },
                c
              )) : /* @__PURE__ */ a.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
            ]
          }
        ) }),
        t.touched[m] && t.errors[m] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[m]) })
      ] });
    }
    case "textarea":
      return /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: _, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ a.jsx(
            "textarea",
            {
              id: m,
              className: `${w} ${E} min-h-[120px] resize-none`,
              onFocus: () => b(!0),
              name: m,
              value: t.values[m],
              onBlur: t.handleBlur,
              onChange: (c) => {
                t.setFieldValue(m, c.target.value), g(c.target.value, e, o), f("onChange", e, `${m}`);
              },
              placeholder: e.placeholder,
              disabled: O
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${J ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[m] && t.errors[m] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[m]) })
      ] }) });
    case "select":
      if (e.multiple === !0) {
        const c = t.values[m];
        return /* @__PURE__ */ a.jsx(
          pn,
          {
            field: e,
            isDisabled: O,
            handleKeyDown: h,
            valueArray: c,
            labelClasses: _,
            listRef: W,
            search: C,
            filteredOptions: L,
            highlightedIndex: F,
            setSearch: y,
            formik: t,
            executeFieldMethod: f,
            handlePersist: g,
            module_refid: o,
            options: H,
            triggerRef: K,
            open: U,
            setOpen: j
          }
        );
      }
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: _, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ a.jsxs(
            "select",
            {
              className: `${w} ${E} appearance-none ${O ? "" : "cursor-pointer"} pr-12`,
              onFocus: () => b(!0),
              name: m,
              id: m,
              value: t.values[m],
              onBlur: t.handleBlur,
              onChange: (c) => {
                t.setFieldValue(m, c.target.value), g(c.target.value, e, o), f("onChange", e, `${m}`);
              },
              disabled: O,
              children: [
                e?.["no-option"] !== "false" && !t.values[m] && /* @__PURE__ */ a.jsx("option", { value: "", disabled: !0, children: e?.["no-option"] || `Please select ${e.label}` }),
                /* @__PURE__ */ a.jsx("option", { value: "", className: "text-gray-500", children: "Clear Selection" }),
                !Pt(H) && Object.entries(H).map(([c, A]) => /* @__PURE__ */ a.jsx("option", { value: c, className: "py-2", children: A }, c)),
                Pt(H) && Object.entries(H).map(([c, A]) => /* @__PURE__ */ a.jsx("optgroup", { label: c, children: Object.entries(A).map(([S, P]) => /* @__PURE__ */ a.jsx("option", { value: S, children: P }, S)) }, c))
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
        t.touched[m] && t.errors[m] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[m]) })
      ] });
    case "radioList":
    case "radio":
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: _, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: `flex ${x > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(H || {}).map(([c, A]) => /* @__PURE__ */ a.jsxs(
          "label",
          {
            htmlFor: `${m}-${c}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  id: `${m}-${c}`,
                  type: "radio",
                  name: m,
                  checked: t.values[m] === c,
                  value: c,
                  onChange: (S) => {
                    t.setFieldValue(m, S.target.value), g(S.target.value, e, o), f("onChange", e, `${m}-${c}`);
                  },
                  onBlur: t.handleBlur,
                  disabled: O,
                  className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${O ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                }
              ),
              A
            ]
          },
          c
        )) }),
        t.touched[m] && t.errors[m] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[m]) })
      ] });
    case "checkbox": {
      const c = e.multiple === !0, A = t.values[m];
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: _, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(H || {}).map(([S, P]) => {
          const Y = c ? Array.isArray(A) && A.includes(S) : A === S;
          return /* @__PURE__ */ a.jsxs(
            "label",
            {
              className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
              children: [
                /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    id: `${m}-${S}`,
                    type: "checkbox",
                    checked: Y,
                    onChange: (D) => {
                      let k;
                      if (c) {
                        const M = Array.isArray(A) ? A : [];
                        k = D.target.checked ? [...M, S] : M.filter((I) => I !== S);
                      } else
                        k = D.target.checked ? S : "false";
                      t.setFieldValue(m, k), g(k, e, o), f("onChange", e, `${m}-${S}`);
                    },
                    onBlur: t.handleBlur,
                    disabled: O,
                    className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${O ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                  }
                ),
                P
              ]
            },
            S
          );
        }) }),
        t.touched[m] && t.errors[m] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[m]) })
      ] });
    }
    case "tags": {
      const c = t.values[m], A = C.trim(), S = Array.isArray(H) ? H : Object.entries(H || {}).map(([k, M]) => ({ value: k, label: M })), P = (k) => {
        if (!O && k && !c.includes(k)) {
          let M = [...c, k];
          t.setFieldValue(m, M), g(M, e, o), y("");
        }
      }, Y = (k) => {
        let M = c.filter((I) => I !== k);
        t.setFieldValue(
          m,
          M
        ), g(M, e, o);
      }, D = (k) => S.find((M) => M.value === k)?.label ?? k;
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: _, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: `${w} 
            flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center
            ${O ? "pointer-events-none opacity-70" : ""}
            `,
            onClick: () => !O && document.getElementById(`${m}-input`)?.focus(),
            children: [
              c.map((k) => /* @__PURE__ */ a.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ a.jsx("span", { className: "text-indigo-700", children: D(k) }),
                    /* @__PURE__ */ a.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (M) => {
                          M.stopPropagation(), O || Y(k);
                        },
                        onMouseDown: (M) => M.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                k
              )),
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  id: `${m}-input`,
                  type: "text",
                  value: C,
                  onChange: (k) => y(k.target.value),
                  onKeyDown: (k) => {
                    (k.key === "Enter" || k.key === ",") && (k.preventDefault(), P(A));
                  },
                  placeholder: c.length === 0 ? e.placeholder || "Type and press Enter" : "",
                  className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                  disabled: O
                }
              )
            ]
          }
        ),
        t.touched[m] && t.errors[m] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[m]) })
      ] });
    }
    case "photo":
    case "avatar":
      return /* @__PURE__ */ a.jsx(
        Ho,
        {
          formik: t,
          field: e,
          sqlOpsUrls: r,
          module_refid: o
        }
      );
    case "attachment":
    case "file":
      const xe = e.multiple === !0, De = Array.isArray(t.values[m]) ? t.values[m] : t.values[m] ? [t.values[m]] : [];
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: _, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative mb-1", children: [
          e.icon && /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: ve(e) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: m,
              type: "file",
              className: `${w} ${E} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => b(!0),
              name: m,
              multiple: xe,
              onChange: (c) => {
                const A = c.currentTarget.files;
                A && d(A), f("onChange", e, m);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: O
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${J ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "flex flex-wrap gap-2", children: De.map((c) => {
          const A = c?.split("/").pop();
          return /* @__PURE__ */ a.jsx(Qn, { sqlOpsUrls: r, filePath: c }, A);
        }) }),
        t.touched[m] && t.errors[m] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[m]) })
      ] });
    case "json":
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: _, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ a.jsx(
            "textarea",
            {
              id: m,
              name: m,
              value: t.values[m],
              onChange: (c) => {
                t.setFieldValue(m, c.target.value), g(c.target.value, e, o), f("onChange", e, `${m}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: O,
              className: `${w} ${E} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${J ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        t.touched[m] && t.errors[m] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[m]) })
      ] });
    case "date":
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: _, children: [
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
                  id: m,
                  type: "date",
                  name: m,
                  min: e.min,
                  max: e.max,
                  value: t.values[m] ?? "",
                  onChange: (c) => {
                    t.setFieldValue(m, c.target.value), g(c.target.value, e, o), f("onChange", e, `${m}`);
                  },
                  onBlur: t.handleBlur,
                  placeholder: e.placeholder,
                  disabled: O,
                  className: `${w} ${E} ${e.icon ? "pl-9" : ""}`
                }
              ),
              /* @__PURE__ */ a.jsx(
                "div",
                {
                  className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${J ? "opacity-20" : ""}`,
                  style: { zIndex: -1, filter: "blur(8px)" }
                }
              )
            ]
          }
        ),
        t.touched[m] && t.errors[m] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[m]) })
      ] });
    case "number":
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: _, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: ve(e) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: m,
              type: "number",
              className: `${w} ${E} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => b(!0),
              name: m,
              value: t.values[m],
              onBlur: t.handleBlur,
              onChange: (c) => {
                t.setFieldValue(m, c.target.value), g(c.target.value, e, o), f("onChange", e, `${m}`);
              },
              step: e.step,
              placeholder: e.placeholder,
              disabled: O,
              min: e.min,
              max: e.max
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${J ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[m] && t.errors[m] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[m]) })
      ] });
    default:
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: _, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: ve(e) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: m,
              type: e.type || "text",
              className: `${w} ${E} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => b(!0),
              name: m,
              value: t.values[m],
              onBlur: t.handleBlur,
              onChange: (c) => {
                t.setFieldValue(m, c.target.value), g(c.target.value, e, o), f("onChange", e, `${m}`);
              },
              step: e.step,
              placeholder: e.placeholder,
              disabled: O,
              minLength: e.minlength,
              maxLength: e.maxlength
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${J ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[m] && t.errors[m] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[m]) })
      ] });
  }
}
function Wo({
  title: e,
  fields: t,
  data: n,
  onSubmit: r = (f) => {
  },
  onCancel: s = () => {
  },
  methods: o = {},
  sqlOpsUrls: i,
  refid: l,
  module_refid: p
}) {
  const f = vo(t, i?.operation), [d, h] = ee.useState({}), y = (g, x) => {
    h((w) => ({
      ...w,
      [g]: x
    }));
  }, { initialValues: j, validationSchema: b } = ee.useMemo(() => {
    const g = {}, x = {};
    return f.forEach((w) => {
      Ao([w], g, x, n);
    }), {
      initialValues: g,
      validationSchema: x
    };
  }, [f, n]), N = ls({
    initialValues: j,
    enableReinitialize: !0,
    validationSchema: be.object().shape(b),
    onSubmit: (g) => {
      r(g), N.resetForm();
    }
  });
  function T(g) {
    g.preventDefault(), N.resetForm();
  }
  return /* @__PURE__ */ a.jsx("div", { className: "relative  max-w-full ", children: /* @__PURE__ */ a.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ a.jsxs("form", { onSubmit: N.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "grid grid-flow-col auto-cols-max gap-4  overflow-x-auto", children: [
      f.map((g, x) => Eo(g.hidden) || g.type === "geolocation" || g.vmode === "edit" && i?.operation === "create" ? null : /* @__PURE__ */ a.jsx(
        "div",
        {
          children: /* @__PURE__ */ a.jsx(
            Go,
            {
              refid: l,
              module_refid: p,
              sqlOpsUrls: i,
              field: g,
              formik: N,
              methods: o,
              setFieldOptions: y,
              ...d[g.name] ? { optionsOverride: d[g.name] } : {}
            }
          )
        },
        g?.name ?? `field-${x}`
      )),
      /* @__PURE__ */ a.jsxs("div", { className: "", children: [
        /* @__PURE__ */ a.jsx("div", { children: "  " }),
        /* @__PURE__ */ a.jsx("button", { onClick: T, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Reset" }),
        Object.keys(N.errors).length > 0 && /* @__PURE__ */ a.jsx("div", { children: "  " })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "", children: [
        /* @__PURE__ */ a.jsx("div", { children: "  " }),
        /* @__PURE__ */ a.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" }),
        Object.keys(N.errors).length > 0 && /* @__PURE__ */ a.jsx("div", { children: "  " })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "mt-8 flex justify-between space-x-3", children: /* @__PURE__ */ a.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }) })
  ] }) }) });
}
function mn({
  formJson: e,
  methods: t = {},
  onCancel: n = () => {
  },
  components: r = {},
  callback: s = () => {
  },
  initialvalues: o = {},
  setEditData: i,
  module_refid: l
}) {
  const p = e.endPoints, f = e?.source?.refid, [d, h] = ee.useState(o), y = ee.useMemo(() => xo(e.fields), [e.fields]);
  ee.useEffect(() => {
    h(o ?? {});
  }, [o]);
  const j = ee.useCallback(
    (T) => {
      T && Object.keys(T).length > 0 && h(T);
    },
    []
  );
  ee.useEffect(() => {
    let T = !0;
    return (async () => {
      const x = e?.source ?? {};
      if (x?.type) {
        if (x.type === "method" && p?.operation !== "create") {
          const w = x.method, E = w ? t[w] : void 0;
          if (E)
            try {
              const _ = await E();
              T && j(_);
            } catch (_) {
              console.error("Method execution failed:", _);
            }
        }
        if (x.type === "api" && p?.operation !== "create")
          try {
            const w = {
              method: x.method || "GET",
              url: p?.baseURL + x.endpoint,
              headers: {
                Authorization: `Bearer ${p?.accessToken}`
              },
              ...x.method === "GET" ? { params: { refid: x.refid } } : { data: { refid: x.refid } }
            }, E = await z(w);
            T && j(E.data);
          } catch (w) {
            console.error("API fetch failed:", w);
          }
        if (x.type === "sql" && x.refid && x.refid !== "0" && p?.operation !== "create" || p?.operation !== "create" && x.dbopsid) {
          if (!p) {
            console.error("SQL source requires formJson.endPoints but it is missing");
            return;
          }
          try {
            const w = await Fo.fetch(p, {
              source: {
                ...x,
                table: x.table,
                columns: x.columns,
                where: he(x.where, {
                  refid: f
                })
              },
              fields: It(e.fields, p.operation)
            }, x?.dbopsid, l);
            T && j(w);
          } catch (w) {
            console.error("API fetch failed:", w);
          }
        }
      }
    })(), () => {
      T = !1;
    };
  }, [
    p,
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.url || "",
    JSON.stringify(e?.source?.params ?? {}),
    JSON.stringify(e?.source?.body ?? {}),
    JSON.stringify(e?.source?.headers ?? {})
  ]);
  const b = async (T) => {
    const g = e?.source ?? {};
    let x = null;
    if (y.length > 0)
      try {
        x = await wo();
      } catch (E) {
        console.log("catch fetchGeolocation", E), x = null;
      }
    const w = {
      ...T,
      ...Object.fromEntries(
        y.map((E) => [E, x])
      )
    };
    if (g.type === "method") {
      const E = g.method, _ = E ? t[E] : void 0;
      if (_)
        try {
          const C = await _(w);
          i?.(null), s?.(C);
        } catch (C) {
          s?.(C), console.error("Method execution failed:", C);
        }
    }
    if (g.type === "api") {
      if (!p) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const E = await z({
          method: g.method || "POST",
          url: p.baseURL + g.endpoint,
          data: w ?? {},
          headers: {
            Authorization: `Bearer ${p?.accessToken}`
          }
        });
        i?.(null), s?.(E);
      } catch (E) {
        s?.(E), console.error("API fetch failed:", E);
      }
    }
    if (g.type === "sql") {
      const E = e.endPoints;
      if (!E) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let _ = !1, C;
        g?.dbopsid && (_ = !0, C = g?.dbopsid);
        const F = await z({
          method: "GET",
          url: E.baseURL + E.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${E?.accessToken}`
          }
        });
        if (!_) {
          let m = {
            ...g
          };
          g.where && (m = {
            ...g,
            where: he(g.where, {
              refid: f
            })
          }), C = (await z({
            method: "POST",
            url: E.baseURL + E.dbopsGetRefId,
            data: {
              operation: E.operation,
              source: m,
              fields: It(e.fields, E.operation),
              forcefill: e.forcefill,
              datahash: F.data.refhash,
              scrid: l
            },
            headers: {
              Authorization: `Bearer ${E?.accessToken}`
            }
          }))?.data.refid;
        }
        let H = {
          refid: C,
          fields: w,
          datahash: F.data.refhash,
          refid1: E.refid
        };
        g?.refid && (H.refid1 = g?.refid);
        const O = await z({
          method: "POST",
          url: E.baseURL + E[E.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: H,
          headers: {
            Authorization: `Bearer ${E?.accessToken}`
          }
        });
        i?.(null), s?.(O);
      } catch (_) {
        s?.(_), console.error("API fetch failed:", _);
      }
    }
  }, N = {
    simple: /* @__PURE__ */ a.jsx(
      Wo,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: d,
        onSubmit: b,
        onCancel: n,
        methods: t,
        components: r,
        sqlOpsUrls: p,
        refid: f,
        module_refid: l
      }
    )
  };
  return /* @__PURE__ */ a.jsx("div", { className: "relative", children: N.simple });
}
function vr({ tabObj: e, methods: t, tabName: n, sqlOpsUrls: r, refid: s, Reports: o, toast: i, handleAction: l, infoViewJson: p }) {
  const [f, d] = oe(!1), [h, y] = oe(null), [j, b] = ee.useState(0), [N, T] = ee.useState(null), g = e?.config, x = e?.config, w = x?.["popup.form"] ? "popup.form" : (x?.form, "form"), E = x?.[w] && Object.keys(x?.[w]).length > 0, _ = (m) => {
    let L = me(m.data);
    T(L);
  }, C = (m) => {
    T(m), b((L) => L + 1);
  }, F = (m) => {
    let L = me(m.data);
    y(L), d(!0);
  }, H = async () => {
    if (h?.id) {
      if (!r) {
        window.alert("Delete configuration missing.");
        return;
      }
      try {
        let m = e?.config;
        const L = m?.["popup.form"] ? "popup.form" : (m?.form, "form"), U = m?.[L];
        if (!U?.source) throw new Error("Form source missing");
        let W = !1, K;
        U?.source?.dbopsid && (W = !0, K = U?.source?.dbopsid);
        const J = await z({
          method: "GET",
          url: r.baseURL + r.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${r.accessToken}`
          }
        });
        if (!W) {
          let ne = { ...U.source, refid: h.id };
          U.source.where && (ne = {
            ...ne,
            where: he(U.source.where, {
              refid: h?.id
            })
          }), K = (await z({
            method: "POST",
            url: r.baseURL + r.dbopsGetRefId,
            data: {
              operation: "update",
              source: ne,
              fields: U.fields,
              forcefill: U.forcefill,
              datahash: J.data.refhash,
              scrid: p?.module_refid
            },
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            }
          }))?.data.refid;
        }
        await z({
          method: "POST",
          url: r.baseURL + r.dbopsUpdate,
          data: {
            refid: K,
            fields: { blocked: "true" },
            datahash: J.data.refhash,
            refid1: h?.id
          },
          headers: {
            Authorization: `Bearer ${r.accessToken}`
          }
        }), window.alert("Record deleted successfully."), b((ne) => ne + 1);
      } catch (m) {
        console.error(m), window.alert("Failed to delete record. Please try again");
      } finally {
        y(null), d(!1);
      }
    }
  }, O = () => {
    y(null), d(!1);
  };
  return /* @__PURE__ */ a.jsx(a.Fragment, { children: o ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      o,
      {
        methods: { ...t, deleteRecord: F, editRecord: _ },
        report: {
          ...g,
          source: {
            table: g?.table,
            type: "sql",
            cols: g?.cols,
            where: g?.where,
            orderby: g?.orderby,
            queryid: g?.queryid
          },
          endPoints: r,
          actions: { ...g?.actions, ...p?.buttons, ...p.actions },
          datagrid: g?.datagrid,
          buttons: g?.buttons,
          refresh: j
        },
        onButtonClick: l
      }
    ),
    E && /* @__PURE__ */ a.jsx(
      mn,
      {
        formJson: {
          ...x[w],
          source: {
            ...x?.[w].source,
            refid: N?.id
          },
          endPoints: {
            ...r,
            operation: N ? "update" : "create"
          }
        },
        methods: t,
        initialvalues: N ?? {},
        setEditData: C,
        module_refid: p?.module_refid
      }
    ),
    /* @__PURE__ */ a.jsx(
      zo,
      {
        open: f,
        onConfirm: H,
        onCancel: O
      }
    )
  ] }) : E && /* @__PURE__ */ a.jsx(
    mn,
    {
      formJson: {
        ...x[w],
        source: {
          ...x?.[w].source,
          refid: N?.id
        },
        endPoints: {
          ...r,
          operation: N ? "update" : "create"
        }
      },
      methods: t,
      initialvalues: N ?? {},
      setEditData: C,
      module_refid: p?.module_refid
    }
  ) });
}
function Er(e, t) {
  if (!e || !t) return null;
  const n = t[e];
  if (ee.isValidElement(n))
    return n;
  if (typeof n == "function") {
    const r = n;
    return /* @__PURE__ */ a.jsx(r, {});
  }
  return null;
}
const hn = ({ groups: e, groupNames: t, setActiveTabIndex: n, activeTabIndex: r }) => /* @__PURE__ */ a.jsx(
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
), qo = ({
  groups: e,
  groupNames: t,
  setActiveTabIndex: n,
  activeTabIndex: r,
  layoutConfig: s,
  showScrollHint: o,
  isCommonInfo: i,
  tabsNavRef: l
}) => {
  const [p, f] = oe(!1), d = Ke(null);
  return pe(() => {
    const h = (y) => {
      d.current && !d.current.contains(y.target) && f(!1);
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
      /* @__PURE__ */ a.jsxs("div", { className: "relative", ref: d, children: [
        /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => f(!p),
            className: "ml-1 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200",
            children: "⋮"
          }
        ),
        p && /* @__PURE__ */ a.jsx("div", { className: "absolute right-0 mt-2 w-48 max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-30", children: t.map((h, y) => /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              n(y), f(!1);
            },
            className: `w-full text-left px-3 py-2 text-sm truncate hover:bg-gray-100 ${r === y ? "bg-gray-50 font-semibold text-action" : "text-gray-700"}`,
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
        children: t.length > 0 ? t.map((h, y) => /* @__PURE__ */ a.jsx(
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
  refid: p,
  sqlOpsUrls: f,
  module_refid: d,
  fieldOptions: h,
  setFieldOptions: y,
  buttons: j,
  handleAction: b,
  components: N
}) => {
  let T = j ? Object.entries(j).filter(([w, E]) => E.groups ? E.groups.includes(e[t]) : !0) : [];
  async function g(w, E) {
    const _ = l?.[w];
    if (_) {
      try {
        await _();
      } catch (C) {
        console.error("Method execution failed:", C);
      }
      return;
    }
    b?.({ [w]: E }, s);
  }
  const x = Er(r?.component, N);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "bg-white rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex-1 flex flex-col min-h-0",
      children: [
        e.length > 0 ? r?.type === "fields" && r?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: n?.fieldGridClass || "grid grid-cols-12 gap-2", children: r.fields.map((w, E) => /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${mt[ht(w.width)] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ a.jsx(
              yt,
              {
                field: w,
                data: s ?? {},
                methods: l,
                refid: p,
                sqlOpsUrls: f,
                module_refid: d,
                setFieldOptions: y,
                ...h[w.name] ? { optionsOverride: h[w.name] } : {}
              }
            )
          },
          w?.name ?? `field-${E}`
        )) }) }) : r?.type === "component" && x ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: x }) : r ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: i(r, e[t] || "") }) : null : /* @__PURE__ */ a.jsx("div", { className: "flex-1 col-span-full text-center py-8 text-gray-500", children: "No data available" }),
        /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: T && T.map(([w, E]) => /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => g(w, E),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: E.label
          },
          w
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
              e.slice(0, 5).map((w, E) => /* @__PURE__ */ a.jsx(
                "div",
                {
                  className: `w-2 h-2 rounded-full transition-all duration-300 ${E === t ? "bg-action w-6" : "bg-gray-300"}`
                },
                E
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
          /* @__PURE__ */ a.jsx("div", { className: "flex gap-1", children: e.map((w, E) => /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `w-2 h-2 rounded-full transition-all duration-300 ${E === t ? "bg-action w-6" : "bg-gray-300"}`
            },
            E
          )) })
        ] }) })
      ]
    },
    e[t]
  );
};
function gn({
  groups: e,
  methods: t = {},
  infoData: n,
  viewRenderers: r = {},
  isCommonInfo: s,
  layoutConfig: o = {},
  viewMode: i,
  sqlOpsUrls: l,
  refid: p,
  Reports: f,
  toast: d = {},
  handleAction: h = () => {
  },
  infoViewJson: y,
  fieldOptions: j,
  setFieldOptions: b,
  components: N
}) {
  const [T, g] = oe(0), [x, w] = oe(!1), E = Ke(null), _ = Object.keys(e);
  pe(() => {
    const W = () => {
      if (E.current) {
        const K = E.current;
        w(K.scrollWidth > K.clientWidth);
      }
    };
    return W(), window.addEventListener("resize", W), () => window.removeEventListener("resize", W);
  }, [_.length]), pe(() => {
    if (E.current && _.length > 0) {
      const W = E.current.children[T];
      W && W.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [T, _.length]);
  const C = i === "tableft", F = i === "tabright", H = !C && !F, O = e[_[T] ?? ""] || null, m = {
    single: (W, K) => /* @__PURE__ */ a.jsx(wr, { fieldOptions: j, setFieldOptions: b, module_refid: y.module_refid, tabObj: W, methods: t, tabName: K, sqlOpsUrls: l, refid: p }),
    grid: (W, K) => /* @__PURE__ */ a.jsx(
      vr,
      {
        ...f ? { Reports: f } : {},
        toast: d,
        handleAction: h,
        tabObj: W,
        methods: t,
        tabName: K,
        sqlOpsUrls: l,
        refid: p,
        infoViewJson: y
      }
    )
  }, L = O?.config?.uimode, U = r[L] || m[L] || (() => /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No UI mode for this type" }));
  return H ? /* @__PURE__ */ a.jsxs("div", { className: "flex-1 flex flex-col min-h-0 ", children: [
    /* @__PURE__ */ a.jsx(
      qo,
      {
        groupNames: _,
        groups: e,
        setActiveTabIndex: g,
        activeTabIndex: T,
        tabsNavRef: E,
        isCommonInfo: s,
        showScrollHint: x,
        layoutConfig: o
      }
    ),
    /* @__PURE__ */ a.jsx(
      yn,
      {
        groupNames: _,
        activeTabIndex: T,
        layoutConfig: o,
        tabObj: O,
        infoData: n,
        setActiveTabIndex: g,
        renderView: U,
        groups: e,
        methods: t,
        refid: p,
        sqlOpsUrls: l,
        module_refid: y.module_refid,
        fieldOptions: j,
        setFieldOptions: b,
        buttons: y.buttons,
        handleAction: h,
        ...N ? { components: N } : {}
      }
    )
  ] }) : /* @__PURE__ */ a.jsxs("div", { className: "flex-1 flex min-h-0", children: [
    C && /* @__PURE__ */ a.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ a.jsx(
      hn,
      {
        groupNames: _,
        groups: e,
        setActiveTabIndex: g,
        activeTabIndex: T
      }
    ) }),
    /* @__PURE__ */ a.jsx("main", { className: "flex-1 flex flex-col min-h-0 overflow-auto", children: /* @__PURE__ */ a.jsx(
      yn,
      {
        groupNames: _,
        activeTabIndex: T,
        layoutConfig: o,
        tabObj: O,
        infoData: n,
        setActiveTabIndex: g,
        renderView: U,
        groups: e,
        methods: t,
        refid: p,
        module_refid: y.module_refid,
        sqlOpsUrls: l,
        fieldOptions: j,
        setFieldOptions: b,
        handleAction: h,
        ...N ? { components: N } : {}
      }
    ) }),
    F && /* @__PURE__ */ a.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ a.jsx(
      hn,
      {
        groupNames: _,
        groups: e,
        setActiveTabIndex: g,
        activeTabIndex: T
      }
    ) })
  ] });
}
function Ko({ title: e, children: t, isFirst: n }) {
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
function Vo({
  groups: e,
  methods: t = {},
  infoData: n,
  viewRenderers: r = {},
  sqlOpsUrls: s,
  refid: o,
  Reports: i,
  toast: l = {},
  handleAction: p = () => {
  },
  infoViewJson: f,
  fieldOptions: d,
  setFieldOptions: h,
  components: y
}) {
  const j = {
    single: (g, x) => /* @__PURE__ */ a.jsx(
      wr,
      {
        tabObj: g,
        methods: t,
        tabName: x,
        sqlOpsUrls: s,
        fieldOptions: d,
        setFieldOptions: h,
        refid: o,
        module_refid: f?.module_refid
      }
    ),
    grid: (g, x) => /* @__PURE__ */ a.jsx(
      vr,
      {
        ...i ? { Reports: i } : {},
        toast: l,
        infoViewJson: f,
        handleAction: p,
        tabObj: g,
        methods: t,
        tabName: x,
        sqlOpsUrls: s,
        refid: o
      }
    )
  }, b = f?.buttons;
  let N = b ? Object.entries(b).filter(([g, x]) => !(x.groups && x.groups.length > 0)) : [];
  async function T(g, x) {
    const w = t?.[g];
    if (w) {
      try {
        await w();
      } catch (E) {
        console.error("Method execution failed:", E);
      }
      return;
    }
    p?.({ [g]: x }, n);
  }
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ a.jsx("div", { className: "mx-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "space-y-1 flex flex-col min-h-0", children: [
    e && Object.entries(e).map(([g, x], w) => {
      let E = b ? Object.entries(b).filter(([C, F]) => F.groups ? F.groups.includes(g) : !1) : [];
      const _ = Er(x.component, y);
      return /* @__PURE__ */ a.jsxs(Ko, { title: x.label, isFirst: w === 0, children: [
        x?.type === "fields" && x?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: x.fields.map((C, F) => /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${mt[ht(C.width)] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ a.jsx(
              yt,
              {
                module_refid: f?.module_refid,
                methods: t,
                field: C,
                data: n ?? {},
                setFieldOptions: h,
                ...d[C.name] ? { optionsOverride: d[C.name] } : {},
                sqlOpsUrls: s,
                refid: o
              }
            )
          },
          C?.name ?? `field-${F}`
        )) }) }) : x?.type === "component" && _ ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: _ }) : x ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: r[x.config?.uimode]?.(x) || j[x.config?.uimode]?.(x, g) || /* @__PURE__ */ a.jsx("div", { children: "No renderer for this type" }) }) : null,
        /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: E && E.map(([C, F]) => /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => T(C, F),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: F.label
          },
          C
        )) })
      ] }, g);
    }),
    /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: N && N.map(([g, x]) => /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => T(g, x),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: x.label
      },
      g
    )) })
  ] }) }) });
}
function Yo({ title: e, children: t }) {
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
function Xo({
  groups: e,
  methods: t = {},
  infoData: n,
  viewRenderers: r = {},
  sqlOpsUrls: s,
  refid: o,
  Reports: i,
  toast: l = {},
  handleAction: p = () => {
  },
  infoViewJson: f,
  fieldOptions: d,
  setFieldOptions: h,
  components: y
}) {
  const j = {
    single: (g, x) => /* @__PURE__ */ a.jsx(wr, { fieldOptions: d, setFieldOptions: h, module_refid: f?.module_refid, tabObj: g, methods: t, tabName: x, sqlOpsUrls: s, refid: o }),
    grid: (g, x) => /* @__PURE__ */ a.jsx(
      vr,
      {
        ...i ? { Reports: i } : {},
        toast: l,
        handleAction: p,
        tabObj: g,
        methods: t,
        tabName: x,
        sqlOpsUrls: s,
        refid: o,
        infoViewJson: f
      }
    )
  }, b = f?.buttons;
  let N = b ? Object.entries(b).filter(([g, x]) => !(x.groups && x.groups.length > 0)) : [];
  async function T(g, x) {
    const w = t?.[g];
    if (w) {
      try {
        await w();
      } catch (E) {
        console.error("Method execution failed:", E);
      }
      return;
    }
    p?.({ [g]: x }, n);
  }
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ a.jsx("div", { className: "mx-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "space-y-2  flex flex-col min-h-0", children: [
    e && Object.entries(e).map(([g, x], w) => {
      let E = b ? Object.entries(b).filter(([C, F]) => F.groups ? F.groups.includes(g) : !1) : [];
      const _ = Er(x.component, y);
      return /* @__PURE__ */ a.jsxs(Yo, { title: x.label, children: [
        x?.type === "fields" && x?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: x.fields.map((C, F) => /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${mt[ht(C.width)] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ a.jsx(
              yt,
              {
                module_refid: f?.module_refid,
                methods: t,
                field: C,
                data: n ?? {},
                setFieldOptions: h,
                ...d[C.name] ? { optionsOverride: d[C.name] } : {},
                sqlOpsUrls: s,
                refid: o
              }
            )
          },
          C?.name ?? `field-${F}`
        )) }) }) : x?.type === "component" && _ ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: _ }) : x ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: r[x.config?.uimode]?.(x) || j[x.config?.uimode]?.(x, g) || /* @__PURE__ */ a.jsx("div", { children: "No renderer for this type" }) }) : null,
        /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: E && E.map(([C, F]) => /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => T(C, F),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: F.label
          },
          C
        )) })
      ] }, g);
    }),
    /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: N && N.map(([g, x]) => /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => T(g, x),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: x.label
      },
      g
    )) })
  ] }) }) });
}
function bi({
  infoViewJson: e,
  data: t = {},
  hiddenFields: n = [],
  groupFieldsFn: r = bo,
  layoutConfig: s = {},
  viewRenderers: o = {},
  methods: i = {},
  Reports: l,
  toast: p = {},
  handleAction: f = () => {
  },
  components: d
}) {
  const [h, y] = ee.useState({}), j = go(e.infoview ?? {}), b = e.endPoints, N = ee.useMemo(
    () => r(e.fields || {}),
    [e.fields, r]
  ), [T, g] = ee.useState({}), x = (F, H) => {
    g((O) => ({ ...O, [F]: H }));
  }, w = e?.source?.refid;
  let E = { ...N };
  e.infoview?.groups && (E = { ...E, ...e.infoview.groups }), ee.useEffect(() => {
    let F = !1;
    return (async () => {
      const O = e?.source;
      if (!O?.type) {
        F || y({});
        return;
      }
      if (O.type === "method") {
        const m = O.method, L = m ? i[m] : void 0;
        if (L)
          try {
            const U = await Promise.resolve(L());
            F || y(U || {});
          } catch (U) {
            console.error("Method execution failed:", U), F || y({});
          }
        else
          F || y({});
      }
      if (O.type === "api")
        try {
          const m = await z({
            method: O.method || "GET",
            url: O.url,
            data: O.body || {},
            params: O.params || {},
            headers: O.headers || {}
          });
          F || y(m.data || {});
        } catch (m) {
          console.error("API fetch failed:", m), F || y({});
        }
      if (O.type === "sql" && O.refid && O.refid != "0" || O.dbopsid) {
        if (!b) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let m = !1, L;
          O?.dbopsid && (m = !0, L = O?.dbopsid);
          const U = await z({
            method: "GET",
            url: b.baseURL + b.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${b?.accessToken}`
            }
          });
          if (!m) {
            let J = {
              ...O
            };
            O.where && (J = {
              ...O,
              where: he(O.where, {
                refid: w
              })
            }), L = (await z({
              method: "POST",
              url: b.baseURL + b.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: J,
                fields: It(e.fields, b.operation),
                forcefill: e.forcefill,
                datahash: U.data.refhash,
                srcid: e?.module_refid
              },
              headers: {
                Authorization: `Bearer ${b?.accessToken}`
              }
            }))?.data.refid;
          }
          const W = await z({
            method: "POST",
            url: b.baseURL + b.dbopsFetch,
            data: {
              refid: L,
              datahash: U.data.refhash,
              module_refid: e.module_refid
            },
            headers: {
              Authorization: `Bearer ${b?.accessToken}`
            }
          }), K = Kn(W) ?? {};
          F || y(K);
        } catch (m) {
          console.error("API fetch failed:", m);
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
  const _ = E.common || null;
  _ && delete E.common;
  const C = (F) => {
    switch (F) {
      case "accordion":
        return /* @__PURE__ */ a.jsx(
          Vo,
          {
            groups: E,
            methods: i,
            infoData: h,
            viewRenderers: o,
            sqlOpsUrls: b,
            refid: w,
            ...l ? { Reports: l } : {},
            toast: p,
            handleAction: f,
            infoViewJson: e,
            setFieldOptions: x,
            fieldOptions: T,
            ...d ? { components: d } : {}
          }
        );
      case "tab":
      case "tableft":
      case "tabright":
        return /* @__PURE__ */ a.jsx(
          gn,
          {
            groups: E,
            viewRenderers: o,
            layoutConfig: s,
            methods: i,
            infoData: h,
            isCommonInfo: !!_,
            viewMode: F,
            sqlOpsUrls: b,
            refid: w,
            ...l ? { Reports: l } : {},
            toast: p,
            handleAction: f,
            infoViewJson: e,
            setFieldOptions: x,
            fieldOptions: T,
            ...d ? { components: d } : {}
          }
        );
      case "cards":
        return /* @__PURE__ */ a.jsx(
          Xo,
          {
            groups: E,
            viewRenderers: o,
            methods: i,
            infoData: h,
            sqlOpsUrls: b,
            refid: w,
            ...l ? { Reports: l } : {},
            toast: p,
            handleAction: f,
            infoViewJson: e,
            setFieldOptions: x,
            fieldOptions: T,
            ...d ? { components: d } : {}
          }
        );
      default:
        return /* @__PURE__ */ a.jsx(
          gn,
          {
            groups: E,
            viewRenderers: o,
            layoutConfig: s,
            methods: i,
            infoData: h,
            isCommonInfo: !!_,
            viewMode: F,
            sqlOpsUrls: b,
            refid: w,
            ...l ? { Reports: l } : {},
            toast: p,
            handleAction: f,
            infoViewJson: e,
            setFieldOptions: x,
            fieldOptions: T,
            ...d ? { components: d } : {}
          }
        );
    }
  };
  return /* @__PURE__ */ a.jsxs("div", { className: s.containerClass || "h-screen flex flex-col ", children: [
    _ && b && /* @__PURE__ */ a.jsx(
      Bo,
      {
        commonInfo: _,
        infoData: h,
        hiddenFields: n,
        sqlOpsUrls: b,
        setFieldOptions: x,
        fieldOptions: T,
        module_refid: e.module_refid,
        refid: w,
        methods: i
      }
    ),
    C(j)
  ] });
}
export {
  bi as InfoView
};
