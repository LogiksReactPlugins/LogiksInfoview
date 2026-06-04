import re, { useState as de, useEffect as ve, useMemo as Rt, useRef as We, useLayoutEffect as hs } from "react";
import * as Re from "yup";
import { useFormik as gs } from "formik";
import { createPortal as ys } from "react-dom";
var Tt = { exports: {} }, at = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gr;
function xs() {
  if (Gr) return at;
  Gr = 1;
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
  return at.Fragment = t, at.jsx = n, at.jsxs = n, at;
}
var ot = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wr;
function bs() {
  return Wr || (Wr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(N) {
      if (N == null) return null;
      if (typeof N == "function")
        return N.$$typeof === O ? null : N.displayName || N.name || null;
      if (typeof N == "string") return N;
      switch (N) {
        case E:
          return "Fragment";
        case A:
          return "Profiler";
        case x:
          return "StrictMode";
        case j:
          return "Suspense";
        case S:
          return "SuspenseList";
        case G:
          return "Activity";
      }
      if (typeof N == "object")
        switch (typeof N.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), N.$$typeof) {
          case p:
            return "Portal";
          case y:
            return (N.displayName || "Context") + ".Provider";
          case f:
            return (N._context.displayName || "Context") + ".Consumer";
          case h:
            var $ = N.render;
            return N = N.displayName, N || (N = $.displayName || $.name || "", N = N !== "" ? "ForwardRef(" + N + ")" : "ForwardRef"), N;
          case F:
            return $ = N.displayName || null, $ !== null ? $ : e(N.type) || "Memo";
          case M:
            $ = N._payload, N = N._init;
            try {
              return e(N($));
            } catch {
            }
        }
      return null;
    }
    function t(N) {
      return "" + N;
    }
    function n(N) {
      try {
        t(N);
        var $ = !1;
      } catch {
        $ = !0;
      }
      if ($) {
        $ = console;
        var J = $.error, X = typeof Symbol == "function" && Symbol.toStringTag && N[Symbol.toStringTag] || N.constructor.name || "Object";
        return J.call(
          $,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          X
        ), t(N);
      }
    }
    function r(N) {
      if (N === E) return "<>";
      if (typeof N == "object" && N !== null && N.$$typeof === M)
        return "<...>";
      try {
        var $ = e(N);
        return $ ? "<" + $ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var N = C.A;
      return N === null ? null : N.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(N) {
      if (D.call(N, "key")) {
        var $ = Object.getOwnPropertyDescriptor(N, "key").get;
        if ($ && $.isReactWarning) return !1;
      }
      return N.key !== void 0;
    }
    function l(N, $) {
      function J() {
        ae || (ae = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          $
        ));
      }
      J.isReactWarning = !0, Object.defineProperty(N, "key", {
        get: J,
        configurable: !0
      });
    }
    function m() {
      var N = e(this.type);
      return se[N] || (se[N] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), N = this.props.ref, N !== void 0 ? N : null;
    }
    function d(N, $, J, X, me, R, L, P) {
      return J = R.ref, N = {
        $$typeof: T,
        type: N,
        key: $,
        props: R,
        _owner: me
      }, (J !== void 0 ? J : null) !== null ? Object.defineProperty(N, "ref", {
        enumerable: !1,
        get: m
      }) : Object.defineProperty(N, "ref", { enumerable: !1, value: null }), N._store = {}, Object.defineProperty(N._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(N, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(N, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: L
      }), Object.defineProperty(N, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: P
      }), Object.freeze && (Object.freeze(N.props), Object.freeze(N)), N;
    }
    function u(N, $, J, X, me, R, L, P) {
      var I = $.children;
      if (I !== void 0)
        if (X)
          if (v(I)) {
            for (X = 0; X < I.length; X++)
              g(I[X]);
            Object.freeze && Object.freeze(I);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(I);
      if (D.call($, "key")) {
        I = e(N);
        var Y = Object.keys($).filter(function(k) {
          return k !== "key";
        });
        X = 0 < Y.length ? "{key: someKey, " + Y.join(": ..., ") + ": ...}" : "{key: someKey}", Ie[I + X] || (Y = 0 < Y.length ? "{" + Y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          X,
          I,
          Y,
          I
        ), Ie[I + X] = !0);
      }
      if (I = null, J !== void 0 && (n(J), I = "" + J), i($) && (n($.key), I = "" + $.key), "key" in $) {
        J = {};
        for (var ee in $)
          ee !== "key" && (J[ee] = $[ee]);
      } else J = $;
      return I && l(
        J,
        typeof N == "function" ? N.displayName || N.name || "Unknown" : N
      ), d(
        N,
        I,
        R,
        me,
        s(),
        J,
        L,
        P
      );
    }
    function g(N) {
      typeof N == "object" && N !== null && N.$$typeof === T && N._store && (N._store.validated = 1);
    }
    var b = re, T = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), y = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), G = Symbol.for("react.activity"), O = Symbol.for("react.client.reference"), C = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.prototype.hasOwnProperty, v = Array.isArray, K = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(N) {
        return N();
      }
    };
    var ae, se = {}, ce = b.react_stack_bottom_frame.bind(
      b,
      o
    )(), ie = K(r(o)), Ie = {};
    ot.Fragment = E, ot.jsx = function(N, $, J, X, me) {
      var R = 1e4 > C.recentlyCreatedOwnerStacks++;
      return u(
        N,
        $,
        J,
        !1,
        X,
        me,
        R ? Error("react-stack-top-frame") : ce,
        R ? K(r(N)) : ie
      );
    }, ot.jsxs = function(N, $, J, X, me) {
      var R = 1e4 > C.recentlyCreatedOwnerStacks++;
      return u(
        N,
        $,
        J,
        !0,
        X,
        me,
        R ? Error("react-stack-top-frame") : ce,
        R ? K(r(N)) : ie
      );
    };
  }()), ot;
}
var qr;
function ws() {
  return qr || (qr = 1, process.env.NODE_ENV === "production" ? Tt.exports = xs() : Tt.exports = bs()), Tt.exports;
}
var a = ws();
function Nn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: vs } = Object.prototype, { getPrototypeOf: vr } = Object, { iterator: kt, toStringTag: Tn } = Symbol, Mt = /* @__PURE__ */ ((e) => (t) => {
  const n = vs.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Le = (e) => (e = e.toLowerCase(), (t) => Mt(t) === e), $t = (e) => (t) => typeof t === e, { isArray: Je } = Array, pt = $t("undefined");
function ht(e) {
  return e !== null && !pt(e) && e.constructor !== null && !pt(e.constructor) && Ne(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const jn = Le("ArrayBuffer");
function As(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && jn(e.buffer), t;
}
const Es = $t("string"), Ne = $t("function"), Sn = $t("number"), gt = (e) => e !== null && typeof e == "object", Ns = (e) => e === !0 || e === !1, _t = (e) => {
  if (Mt(e) !== "object")
    return !1;
  const t = vr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Tn in e) && !(kt in e);
}, Ts = (e) => {
  if (!gt(e) || ht(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, js = Le("Date"), Ss = Le("File"), Rs = Le("Blob"), _s = Le("FileList"), Cs = (e) => gt(e) && Ne(e.pipe), Os = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Ne(e.append) && ((t = Mt(e)) === "formdata" || // detect form-data instance
  t === "object" && Ne(e.toString) && e.toString() === "[object FormData]"));
}, Ls = Le("URLSearchParams"), [Is, Ps, Fs, Ds] = ["ReadableStream", "Request", "Response", "Headers"].map(Le), ks = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function yt(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), Je(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (ht(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let l;
    for (r = 0; r < i; r++)
      l = o[r], t.call(null, e[l], l, e);
  }
}
function Rn(e, t) {
  if (ht(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const Ge = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, _n = (e) => !pt(e) && e !== Ge;
function fr() {
  const { caseless: e } = _n(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && Rn(t, s) || s;
    _t(t[o]) && _t(r) ? t[o] = fr(t[o], r) : _t(r) ? t[o] = fr({}, r) : Je(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && yt(arguments[r], n);
  return t;
}
const Ms = (e, t, n, { allOwnKeys: r } = {}) => (yt(t, (s, o) => {
  n && Ne(s) ? e[o] = Nn(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), $s = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Bs = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, zs = (e, t, n, r) => {
  let s, o, i;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && vr(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Us = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Hs = (e) => {
  if (!e) return null;
  if (Je(e)) return e;
  let t = e.length;
  if (!Sn(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Gs = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && vr(Uint8Array)), Ws = (e, t) => {
  const r = (e && e[kt]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, qs = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Ks = Le("HTMLFormElement"), Vs = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Kr = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Ys = Le("RegExp"), Cn = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  yt(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, Xs = (e) => {
  Cn(e, (t, n) => {
    if (Ne(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (Ne(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Qs = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return Je(e) ? r(e) : r(String(e).split(t)), n;
}, Zs = () => {
}, Js = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function ea(e) {
  return !!(e && Ne(e.append) && e[Tn] === "FormData" && e[kt]);
}
const ta = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (gt(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (ht(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = Je(r) ? [] : {};
        return yt(r, (i, l) => {
          const m = n(i, s + 1);
          !pt(m) && (o[l] = m);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, ra = Le("AsyncFunction"), na = (e) => e && (gt(e) || Ne(e)) && Ne(e.then) && Ne(e.catch), On = ((e, t) => e ? setImmediate : t ? ((n, r) => (Ge.addEventListener("message", ({ source: s, data: o }) => {
  s === Ge && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), Ge.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  Ne(Ge.postMessage)
), sa = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ge) : typeof process < "u" && process.nextTick || On, aa = (e) => e != null && Ne(e[kt]), w = {
  isArray: Je,
  isArrayBuffer: jn,
  isBuffer: ht,
  isFormData: Os,
  isArrayBufferView: As,
  isString: Es,
  isNumber: Sn,
  isBoolean: Ns,
  isObject: gt,
  isPlainObject: _t,
  isEmptyObject: Ts,
  isReadableStream: Is,
  isRequest: Ps,
  isResponse: Fs,
  isHeaders: Ds,
  isUndefined: pt,
  isDate: js,
  isFile: Ss,
  isBlob: Rs,
  isRegExp: Ys,
  isFunction: Ne,
  isStream: Cs,
  isURLSearchParams: Ls,
  isTypedArray: Gs,
  isFileList: _s,
  forEach: yt,
  merge: fr,
  extend: Ms,
  trim: ks,
  stripBOM: $s,
  inherits: Bs,
  toFlatObject: zs,
  kindOf: Mt,
  kindOfTest: Le,
  endsWith: Us,
  toArray: Hs,
  forEachEntry: Ws,
  matchAll: qs,
  isHTMLForm: Ks,
  hasOwnProperty: Kr,
  hasOwnProp: Kr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Cn,
  freezeMethods: Xs,
  toObjectSet: Qs,
  toCamelCase: Vs,
  noop: Zs,
  toFiniteNumber: Js,
  findKey: Rn,
  global: Ge,
  isContextDefined: _n,
  isSpecCompliantForm: ea,
  toJSONObject: ta,
  isAsyncFn: ra,
  isThenable: na,
  setImmediate: On,
  asap: sa,
  isIterable: aa
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
const Ln = V.prototype, In = {};
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
  In[e] = { value: e };
});
Object.defineProperties(V, In);
Object.defineProperty(Ln, "isAxiosError", { value: !0 });
V.from = (e, t, n, r, s, o) => {
  const i = Object.create(Ln);
  return w.toFlatObject(e, i, function(m) {
    return m !== Error.prototype;
  }, (l) => l !== "isAxiosError"), V.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const oa = null;
function mr(e) {
  return w.isPlainObject(e) || w.isArray(e);
}
function Pn(e) {
  return w.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Vr(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = Pn(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function ia(e) {
  return w.isArray(e) && !e.some(mr);
}
const la = w.toFlatObject(w, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Bt(e, t, n) {
  if (!w.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = w.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(E, x) {
    return !w.isUndefined(x[E]);
  });
  const r = n.metaTokens, s = n.visitor || u, o = n.dots, i = n.indexes, m = (n.Blob || typeof Blob < "u" && Blob) && w.isSpecCompliantForm(t);
  if (!w.isFunction(s))
    throw new TypeError("visitor must be a function");
  function d(p) {
    if (p === null) return "";
    if (w.isDate(p))
      return p.toISOString();
    if (w.isBoolean(p))
      return p.toString();
    if (!m && w.isBlob(p))
      throw new V("Blob is not supported. Use a Buffer instead.");
    return w.isArrayBuffer(p) || w.isTypedArray(p) ? m && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function u(p, E, x) {
    let A = p;
    if (p && !x && typeof p == "object") {
      if (w.endsWith(E, "{}"))
        E = r ? E : E.slice(0, -2), p = JSON.stringify(p);
      else if (w.isArray(p) && ia(p) || (w.isFileList(p) || w.endsWith(E, "[]")) && (A = w.toArray(p)))
        return E = Pn(E), A.forEach(function(y, h) {
          !(w.isUndefined(y) || y === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Vr([E], h, o) : i === null ? E : E + "[]",
            d(y)
          );
        }), !1;
    }
    return mr(p) ? !0 : (t.append(Vr(x, E, o), d(p)), !1);
  }
  const g = [], b = Object.assign(la, {
    defaultVisitor: u,
    convertValue: d,
    isVisitable: mr
  });
  function T(p, E) {
    if (!w.isUndefined(p)) {
      if (g.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + E.join("."));
      g.push(p), w.forEach(p, function(A, f) {
        (!(w.isUndefined(A) || A === null) && s.call(
          t,
          A,
          w.isString(f) ? f.trim() : f,
          E,
          b
        )) === !0 && T(A, E ? E.concat(f) : [f]);
      }), g.pop();
    }
  }
  if (!w.isObject(e))
    throw new TypeError("data must be an object");
  return T(e), t;
}
function Yr(e) {
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
function Ar(e, t) {
  this._pairs = [], e && Bt(e, this, t);
}
const Fn = Ar.prototype;
Fn.append = function(t, n) {
  this._pairs.push([t, n]);
};
Fn.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Yr);
  } : Yr;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function ca(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Dn(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || ca;
  w.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = w.isURLSearchParams(t) ? t.toString() : new Ar(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Xr {
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
const kn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ua = typeof URLSearchParams < "u" ? URLSearchParams : Ar, da = typeof FormData < "u" ? FormData : null, fa = typeof Blob < "u" ? Blob : null, ma = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ua,
    FormData: da,
    Blob: fa
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Er = typeof window < "u" && typeof document < "u", pr = typeof navigator == "object" && navigator || void 0, pa = Er && (!pr || ["ReactNative", "NativeScript", "NS"].indexOf(pr.product) < 0), ha = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ga = Er && window.location.href || "http://localhost", ya = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Er,
  hasStandardBrowserEnv: pa,
  hasStandardBrowserWebWorkerEnv: ha,
  navigator: pr,
  origin: ga
}, Symbol.toStringTag, { value: "Module" })), he = {
  ...ya,
  ...ma
};
function xa(e, t) {
  return Bt(e, new he.classes.URLSearchParams(), {
    visitor: function(n, r, s, o) {
      return he.isNode && w.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function ba(e) {
  return w.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function wa(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Mn(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const l = Number.isFinite(+i), m = o >= n.length;
    return i = !i && w.isArray(s) ? s.length : i, m ? (w.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !l) : ((!s[i] || !w.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && w.isArray(s[i]) && (s[i] = wa(s[i])), !l);
  }
  if (w.isFormData(e) && w.isFunction(e.entries)) {
    const n = {};
    return w.forEachEntry(e, (r, s) => {
      t(ba(r), s, n, 0);
    }), n;
  }
  return null;
}
function va(e, t, n) {
  if (w.isString(e))
    try {
      return (t || JSON.parse)(e), w.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const xt = {
  transitional: kn,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = w.isObject(t);
    if (o && w.isHTMLForm(t) && (t = new FormData(t)), w.isFormData(t))
      return s ? JSON.stringify(Mn(t)) : t;
    if (w.isArrayBuffer(t) || w.isBuffer(t) || w.isStream(t) || w.isFile(t) || w.isBlob(t) || w.isReadableStream(t))
      return t;
    if (w.isArrayBufferView(t))
      return t.buffer;
    if (w.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return xa(t, this.formSerializer).toString();
      if ((l = w.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const m = this.env && this.env.FormData;
        return Bt(
          l ? { "files[]": t } : t,
          m && new m(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), va(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || xt.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
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
    FormData: he.classes.FormData,
    Blob: he.classes.Blob
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
  xt.headers[e] = {};
});
const Aa = w.toObjectSet([
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
]), Ea = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && Aa[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Qr = Symbol("internals");
function it(e) {
  return e && String(e).trim().toLowerCase();
}
function Ct(e) {
  return e === !1 || e == null ? e : w.isArray(e) ? e.map(Ct) : String(e);
}
function Na(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Ta = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Jt(e, t, n, r, s) {
  if (w.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!w.isString(t)) {
    if (w.isString(r))
      return t.indexOf(r) !== -1;
    if (w.isRegExp(r))
      return r.test(t);
  }
}
function ja(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Sa(e, t) {
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
let Te = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(l, m, d) {
      const u = it(m);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const g = w.findKey(s, u);
      (!g || s[g] === void 0 || d === !0 || d === void 0 && s[g] !== !1) && (s[g || m] = Ct(l));
    }
    const i = (l, m) => w.forEach(l, (d, u) => o(d, u, m));
    if (w.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (w.isString(t) && (t = t.trim()) && !Ta(t))
      i(Ea(t), n);
    else if (w.isObject(t) && w.isIterable(t)) {
      let l = {}, m, d;
      for (const u of t) {
        if (!w.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        l[d = u[0]] = (m = l[d]) ? w.isArray(m) ? [...m, u[1]] : [m, u[1]] : u[1];
      }
      i(l, n);
    } else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = it(t), t) {
      const r = w.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Na(s);
        if (w.isFunction(n))
          return n.call(this, s, r);
        if (w.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = it(t), t) {
      const r = w.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Jt(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = it(i), i) {
        const l = w.findKey(r, i);
        l && (!n || Jt(r, r[l], l, n)) && (delete r[l], s = !0);
      }
    }
    return w.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Jt(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return w.forEach(this, (s, o) => {
      const i = w.findKey(r, o);
      if (i) {
        n[i] = Ct(s), delete n[o];
        return;
      }
      const l = t ? ja(o) : String(o).trim();
      l !== o && delete n[o], n[l] = Ct(s), r[l] = !0;
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
    const r = (this[Qr] = this[Qr] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const l = it(i);
      r[l] || (Sa(s, i), r[l] = !0);
    }
    return w.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
Te.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
w.reduceDescriptors(Te.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
w.freezeMethods(Te);
function er(e, t) {
  const n = this || xt, r = t || n, s = Te.from(r.headers);
  let o = r.data;
  return w.forEach(e, function(l) {
    o = l.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function $n(e) {
  return !!(e && e.__CANCEL__);
}
function et(e, t, n) {
  V.call(this, e ?? "canceled", V.ERR_CANCELED, t, n), this.name = "CanceledError";
}
w.inherits(et, V, {
  __CANCEL__: !0
});
function Bn(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new V(
    "Request failed with status code " + n.status,
    [V.ERR_BAD_REQUEST, V.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Ra(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function _a(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(m) {
    const d = Date.now(), u = r[o];
    i || (i = d), n[s] = m, r[s] = d;
    let g = o, b = 0;
    for (; g !== s; )
      b += n[g++], g = g % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), d - i < t)
      return;
    const T = u && d - u;
    return T ? Math.round(b * 1e3 / T) : void 0;
  };
}
function Ca(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const i = (d, u = Date.now()) => {
    n = u, s = null, o && (clearTimeout(o), o = null), e(...d);
  };
  return [(...d) => {
    const u = Date.now(), g = u - n;
    g >= r ? i(d, u) : (s = d, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - g)));
  }, () => s && i(s)];
}
const It = (e, t, n = 3) => {
  let r = 0;
  const s = _a(50, 250);
  return Ca((o) => {
    const i = o.loaded, l = o.lengthComputable ? o.total : void 0, m = i - r, d = s(m), u = i <= l;
    r = i;
    const g = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: m,
      rate: d || void 0,
      estimated: d && l && u ? (l - i) / d : void 0,
      event: o,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(g);
  }, n);
}, Zr = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Jr = (e) => (...t) => w.asap(() => e(...t)), Oa = he.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, he.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(he.origin),
  he.navigator && /(msie|trident)/i.test(he.navigator.userAgent)
) : () => !0, La = he.hasStandardBrowserEnv ? (
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
function Ia(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Pa(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function zn(e, t, n) {
  let r = !Ia(t);
  return e && (r || n == !1) ? Pa(e, t) : t;
}
const en = (e) => e instanceof Te ? { ...e } : e;
function Ke(e, t) {
  t = t || {};
  const n = {};
  function r(d, u, g, b) {
    return w.isPlainObject(d) && w.isPlainObject(u) ? w.merge.call({ caseless: b }, d, u) : w.isPlainObject(u) ? w.merge({}, u) : w.isArray(u) ? u.slice() : u;
  }
  function s(d, u, g, b) {
    if (w.isUndefined(u)) {
      if (!w.isUndefined(d))
        return r(void 0, d, g, b);
    } else return r(d, u, g, b);
  }
  function o(d, u) {
    if (!w.isUndefined(u))
      return r(void 0, u);
  }
  function i(d, u) {
    if (w.isUndefined(u)) {
      if (!w.isUndefined(d))
        return r(void 0, d);
    } else return r(void 0, u);
  }
  function l(d, u, g) {
    if (g in t)
      return r(d, u);
    if (g in e)
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
    headers: (d, u, g) => s(en(d), en(u), g, !0)
  };
  return w.forEach(Object.keys({ ...e, ...t }), function(u) {
    const g = m[u] || s, b = g(e[u], t[u], u);
    w.isUndefined(b) && g !== l || (n[u] = b);
  }), n;
}
const Un = (e) => {
  const t = Ke({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: l } = t;
  t.headers = i = Te.from(i), t.url = Dn(zn(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), l && i.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let m;
  if (w.isFormData(n)) {
    if (he.hasStandardBrowserEnv || he.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((m = i.getContentType()) !== !1) {
      const [d, ...u] = m ? m.split(";").map((g) => g.trim()).filter(Boolean) : [];
      i.setContentType([d || "multipart/form-data", ...u].join("; "));
    }
  }
  if (he.hasStandardBrowserEnv && (r && w.isFunction(r) && (r = r(t)), r || r !== !1 && Oa(t.url))) {
    const d = s && o && La.read(o);
    d && i.set(s, d);
  }
  return t;
}, Fa = typeof XMLHttpRequest < "u", Da = Fa && function(e) {
  return new Promise(function(n, r) {
    const s = Un(e);
    let o = s.data;
    const i = Te.from(s.headers).normalize();
    let { responseType: l, onUploadProgress: m, onDownloadProgress: d } = s, u, g, b, T, p;
    function E() {
      T && T(), p && p(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
    }
    let x = new XMLHttpRequest();
    x.open(s.method.toUpperCase(), s.url, !0), x.timeout = s.timeout;
    function A() {
      if (!x)
        return;
      const y = Te.from(
        "getAllResponseHeaders" in x && x.getAllResponseHeaders()
      ), j = {
        data: !l || l === "text" || l === "json" ? x.responseText : x.response,
        status: x.status,
        statusText: x.statusText,
        headers: y,
        config: e,
        request: x
      };
      Bn(function(F) {
        n(F), E();
      }, function(F) {
        r(F), E();
      }, j), x = null;
    }
    "onloadend" in x ? x.onloadend = A : x.onreadystatechange = function() {
      !x || x.readyState !== 4 || x.status === 0 && !(x.responseURL && x.responseURL.indexOf("file:") === 0) || setTimeout(A);
    }, x.onabort = function() {
      x && (r(new V("Request aborted", V.ECONNABORTED, e, x)), x = null);
    }, x.onerror = function() {
      r(new V("Network Error", V.ERR_NETWORK, e, x)), x = null;
    }, x.ontimeout = function() {
      let h = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const j = s.transitional || kn;
      s.timeoutErrorMessage && (h = s.timeoutErrorMessage), r(new V(
        h,
        j.clarifyTimeoutError ? V.ETIMEDOUT : V.ECONNABORTED,
        e,
        x
      )), x = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in x && w.forEach(i.toJSON(), function(h, j) {
      x.setRequestHeader(j, h);
    }), w.isUndefined(s.withCredentials) || (x.withCredentials = !!s.withCredentials), l && l !== "json" && (x.responseType = s.responseType), d && ([b, p] = It(d, !0), x.addEventListener("progress", b)), m && x.upload && ([g, T] = It(m), x.upload.addEventListener("progress", g), x.upload.addEventListener("loadend", T)), (s.cancelToken || s.signal) && (u = (y) => {
      x && (r(!y || y.type ? new et(null, e, x) : y), x.abort(), x = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const f = Ra(s.url);
    if (f && he.protocols.indexOf(f) === -1) {
      r(new V("Unsupported protocol " + f + ":", V.ERR_BAD_REQUEST, e));
      return;
    }
    x.send(o || null);
  });
}, ka = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const o = function(d) {
      if (!s) {
        s = !0, l();
        const u = d instanceof Error ? d : this.reason;
        r.abort(u instanceof V ? u : new et(u instanceof Error ? u.message : u));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new V(`timeout ${t} of ms exceeded`, V.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((d) => {
        d.unsubscribe ? d.unsubscribe(o) : d.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((d) => d.addEventListener("abort", o));
    const { signal: m } = r;
    return m.unsubscribe = () => w.asap(l), m;
  }
}, Ma = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, $a = async function* (e, t) {
  for await (const n of Ba(e))
    yield* Ma(n, t);
}, Ba = async function* (e) {
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
}, tn = (e, t, n, r) => {
  const s = $a(e, t);
  let o = 0, i, l = (m) => {
    i || (i = !0, r && r(m));
  };
  return new ReadableStream({
    async pull(m) {
      try {
        const { done: d, value: u } = await s.next();
        if (d) {
          l(), m.close();
          return;
        }
        let g = u.byteLength;
        if (n) {
          let b = o += g;
          n(b);
        }
        m.enqueue(new Uint8Array(u));
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
}, zt = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Hn = zt && typeof ReadableStream == "function", za = zt && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Gn = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Ua = Hn && Gn(() => {
  let e = !1;
  const t = new Request(he.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), rn = 64 * 1024, hr = Hn && Gn(() => w.isReadableStream(new Response("").body)), Pt = {
  stream: hr && ((e) => e.body)
};
zt && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Pt[t] && (Pt[t] = w.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new V(`Response type '${t}' is not supported`, V.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Ha = async (e) => {
  if (e == null)
    return 0;
  if (w.isBlob(e))
    return e.size;
  if (w.isSpecCompliantForm(e))
    return (await new Request(he.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (w.isArrayBufferView(e) || w.isArrayBuffer(e))
    return e.byteLength;
  if (w.isURLSearchParams(e) && (e = e + ""), w.isString(e))
    return (await za(e)).byteLength;
}, Ga = async (e, t) => {
  const n = w.toFiniteNumber(e.getContentLength());
  return n ?? Ha(t);
}, Wa = zt && (async (e) => {
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
    headers: u,
    withCredentials: g = "same-origin",
    fetchOptions: b
  } = Un(e);
  d = d ? (d + "").toLowerCase() : "text";
  let T = ka([s, o && o.toAbortSignal()], i), p;
  const E = T && T.unsubscribe && (() => {
    T.unsubscribe();
  });
  let x;
  try {
    if (m && Ua && n !== "get" && n !== "head" && (x = await Ga(u, r)) !== 0) {
      let j = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), S;
      if (w.isFormData(r) && (S = j.headers.get("content-type")) && u.setContentType(S), j.body) {
        const [F, M] = Zr(
          x,
          It(Jr(m))
        );
        r = tn(j.body, rn, F, M);
      }
    }
    w.isString(g) || (g = g ? "include" : "omit");
    const A = "credentials" in Request.prototype;
    p = new Request(t, {
      ...b,
      signal: T,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: A ? g : void 0
    });
    let f = await fetch(p, b);
    const y = hr && (d === "stream" || d === "response");
    if (hr && (l || y && E)) {
      const j = {};
      ["status", "statusText", "headers"].forEach((G) => {
        j[G] = f[G];
      });
      const S = w.toFiniteNumber(f.headers.get("content-length")), [F, M] = l && Zr(
        S,
        It(Jr(l), !0)
      ) || [];
      f = new Response(
        tn(f.body, rn, F, () => {
          M && M(), E && E();
        }),
        j
      );
    }
    d = d || "text";
    let h = await Pt[w.findKey(Pt, d) || "text"](f, e);
    return !y && E && E(), await new Promise((j, S) => {
      Bn(j, S, {
        data: h,
        headers: Te.from(f.headers),
        status: f.status,
        statusText: f.statusText,
        config: e,
        request: p
      });
    });
  } catch (A) {
    throw E && E(), A && A.name === "TypeError" && /Load failed|fetch/i.test(A.message) ? Object.assign(
      new V("Network Error", V.ERR_NETWORK, e, p),
      {
        cause: A.cause || A
      }
    ) : V.from(A, A && A.code, e, p);
  }
}), gr = {
  http: oa,
  xhr: Da,
  fetch: Wa
};
w.forEach(gr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const nn = (e) => `- ${e}`, qa = (e) => w.isFunction(e) || e === null || e === !1, Wn = {
  getAdapter: (e) => {
    e = w.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !qa(n) && (r = gr[(i = String(n)).toLowerCase()], r === void 0))
        throw new V(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([l, m]) => `adapter ${l} ` + (m === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(nn).join(`
`) : " " + nn(o[0]) : "as no adapter specified";
      throw new V(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: gr
};
function tr(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new et(null, e);
}
function sn(e) {
  return tr(e), e.headers = Te.from(e.headers), e.data = er.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Wn.getAdapter(e.adapter || xt.adapter)(e).then(function(r) {
    return tr(e), r.data = er.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Te.from(r.headers), r;
  }, function(r) {
    return $n(r) || (tr(e), r && r.response && (r.response.data = er.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Te.from(r.response.headers))), Promise.reject(r);
  });
}
const qn = "1.11.0", Ut = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ut[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const an = {};
Ut.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + qn + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, l) => {
    if (t === !1)
      throw new V(
        s(i, " has been removed" + (n ? " in " + n : "")),
        V.ERR_DEPRECATED
      );
    return n && !an[i] && (an[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, l) : !0;
  };
};
Ut.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Ka(e, t, n) {
  if (typeof e != "object")
    throw new V("options must be an object", V.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const l = e[o], m = l === void 0 || i(l, o, e);
      if (m !== !0)
        throw new V("option " + o + " must be " + m, V.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new V("Unknown option " + o, V.ERR_BAD_OPTION);
  }
}
const Ot = {
  assertOptions: Ka,
  validators: Ut
}, De = Ot.validators;
let qe = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Xr(),
      response: new Xr()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Ke(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && Ot.assertOptions(r, {
      silentJSONParsing: De.transitional(De.boolean),
      forcedJSONParsing: De.transitional(De.boolean),
      clarifyTimeoutError: De.transitional(De.boolean)
    }, !1), s != null && (w.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Ot.assertOptions(s, {
      encode: De.function,
      serialize: De.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Ot.assertOptions(n, {
      baseUrl: De.spelling("baseURL"),
      withXsrfToken: De.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && w.merge(
      o.common,
      o[n.method]
    );
    o && w.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete o[p];
      }
    ), n.headers = Te.concat(i, o);
    const l = [];
    let m = !0;
    this.interceptors.request.forEach(function(E) {
      typeof E.runWhen == "function" && E.runWhen(n) === !1 || (m = m && E.synchronous, l.unshift(E.fulfilled, E.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function(E) {
      d.push(E.fulfilled, E.rejected);
    });
    let u, g = 0, b;
    if (!m) {
      const p = [sn.bind(this), void 0];
      for (p.unshift(...l), p.push(...d), b = p.length, u = Promise.resolve(n); g < b; )
        u = u.then(p[g++], p[g++]);
      return u;
    }
    b = l.length;
    let T = n;
    for (g = 0; g < b; ) {
      const p = l[g++], E = l[g++];
      try {
        T = p(T);
      } catch (x) {
        E.call(this, x);
        break;
      }
    }
    try {
      u = sn.call(this, T);
    } catch (p) {
      return Promise.reject(p);
    }
    for (g = 0, b = d.length; g < b; )
      u = u.then(d[g++], d[g++]);
    return u;
  }
  getUri(t) {
    t = Ke(this.defaults, t);
    const n = zn(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Dn(n, t.params, t.paramsSerializer);
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
let Va = class Kn {
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
      r.reason || (r.reason = new et(o, i, l), n(r.reason));
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
      token: new Kn(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function Ya(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Xa(e) {
  return w.isObject(e) && e.isAxiosError === !0;
}
const yr = {
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
Object.entries(yr).forEach(([e, t]) => {
  yr[t] = e;
});
function Vn(e) {
  const t = new qe(e), n = Nn(qe.prototype.request, t);
  return w.extend(n, qe.prototype, t, { allOwnKeys: !0 }), w.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Vn(Ke(e, s));
  }, n;
}
const H = Vn(xt);
H.Axios = qe;
H.CanceledError = et;
H.CancelToken = Va;
H.isCancel = $n;
H.VERSION = qn;
H.toFormData = Bt;
H.AxiosError = V;
H.Cancel = H.CanceledError;
H.all = function(t) {
  return Promise.all(t);
};
H.spread = Ya;
H.isAxiosError = Xa;
H.mergeConfig = Ke;
H.AxiosHeaders = Te;
H.formToJSON = (e) => Mn(w.isHTMLForm(e) ? new FormData(e) : e);
H.getAdapter = Wn.getAdapter;
H.HttpStatusCode = yr;
H.default = H;
const {
  Axios: di,
  AxiosError: fi,
  CanceledError: mi,
  isCancel: pi,
  CancelToken: hi,
  VERSION: gi,
  all: yi,
  Cancel: xi,
  isAxiosError: bi,
  spread: wi,
  toFormData: vi,
  AxiosHeaders: Ai,
  HttpStatusCode: Ei,
  formToJSON: Ni,
  getAdapter: Ti,
  mergeConfig: ji
} = H;
/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */
const {
  entries: Yn,
  setPrototypeOf: on,
  isFrozen: Qa,
  getPrototypeOf: Za,
  getOwnPropertyDescriptor: Ja
} = Object;
let {
  freeze: ye,
  seal: _e,
  create: xr
} = Object, {
  apply: br,
  construct: wr
} = typeof Reflect < "u" && Reflect;
ye || (ye = function(t) {
  return t;
});
_e || (_e = function(t) {
  return t;
});
br || (br = function(t, n) {
  for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    s[o - 2] = arguments[o];
  return t.apply(n, s);
});
wr || (wr = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return new t(...r);
});
const jt = xe(Array.prototype.forEach), eo = xe(Array.prototype.lastIndexOf), ln = xe(Array.prototype.pop), lt = xe(Array.prototype.push), to = xe(Array.prototype.splice), Lt = xe(String.prototype.toLowerCase), rr = xe(String.prototype.toString), nr = xe(String.prototype.match), ct = xe(String.prototype.replace), ro = xe(String.prototype.indexOf), no = xe(String.prototype.trim), Ce = xe(Object.prototype.hasOwnProperty), ge = xe(RegExp.prototype.test), ut = so(TypeError);
function xe(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    return br(e, t, r);
  };
}
function so(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return wr(e, n);
  };
}
function Q(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Lt;
  on && on(e, null);
  let r = t.length;
  for (; r--; ) {
    let s = t[r];
    if (typeof s == "string") {
      const o = n(s);
      o !== s && (Qa(t) || (t[r] = o), s = o);
    }
    e[s] = !0;
  }
  return e;
}
function ao(e) {
  for (let t = 0; t < e.length; t++)
    Ce(e, t) || (e[t] = null);
  return e;
}
function ke(e) {
  const t = xr(null);
  for (const [n, r] of Yn(e))
    Ce(e, n) && (Array.isArray(r) ? t[n] = ao(r) : r && typeof r == "object" && r.constructor === Object ? t[n] = ke(r) : t[n] = r);
  return t;
}
function dt(e, t) {
  for (; e !== null; ) {
    const r = Ja(e, t);
    if (r) {
      if (r.get)
        return xe(r.get);
      if (typeof r.value == "function")
        return xe(r.value);
    }
    e = Za(e);
  }
  function n() {
    return null;
  }
  return n;
}
const cn = ye(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), sr = ye(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ar = ye(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), oo = ye(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), or = ye(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), io = ye(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), un = ye(["#text"]), dn = ye(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ir = ye(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), fn = ye(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), St = ye(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), lo = _e(/\{\{[\w\W]*|[\w\W]*\}\}/gm), co = _e(/<%[\w\W]*|[\w\W]*%>/gm), uo = _e(/\$\{[\w\W]*/gm), fo = _e(/^data-[\-\w.\u00B7-\uFFFF]+$/), mo = _e(/^aria-[\-\w]+$/), Xn = _e(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), po = _e(/^(?:\w+script|data):/i), ho = _e(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Qn = _e(/^html$/i), go = _e(/^[a-z][.\w]*(-[.\w]+)+$/i);
var mn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: mo,
  ATTR_WHITESPACE: ho,
  CUSTOM_ELEMENT: go,
  DATA_ATTR: fo,
  DOCTYPE_NAME: Qn,
  ERB_EXPR: co,
  IS_ALLOWED_URI: Xn,
  IS_SCRIPT_OR_DATA: po,
  MUSTACHE_EXPR: lo,
  TMPLIT_EXPR: uo
});
const ft = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, yo = function() {
  return typeof window > "u" ? null : window;
}, xo = function(t, n) {
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
}, pn = function() {
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
function Zn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : yo();
  const t = (U) => Zn(U);
  if (t.version = "3.3.1", t.removed = [], !e || !e.document || e.document.nodeType !== ft.document || !e.Element)
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
    NamedNodeMap: u = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: g,
    DOMParser: b,
    trustedTypes: T
  } = e, p = m.prototype, E = dt(p, "cloneNode"), x = dt(p, "remove"), A = dt(p, "nextSibling"), f = dt(p, "childNodes"), y = dt(p, "parentNode");
  if (typeof i == "function") {
    const U = n.createElement("template");
    U.content && U.content.ownerDocument && (n = U.content.ownerDocument);
  }
  let h, j = "";
  const {
    implementation: S,
    createNodeIterator: F,
    createDocumentFragment: M,
    getElementsByTagName: G
  } = n, {
    importNode: O
  } = r;
  let C = pn();
  t.isSupported = typeof Yn == "function" && typeof y == "function" && S && S.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: D,
    ERB_EXPR: v,
    TMPLIT_EXPR: K,
    DATA_ATTR: ae,
    ARIA_ATTR: se,
    IS_SCRIPT_OR_DATA: ce,
    ATTR_WHITESPACE: ie,
    CUSTOM_ELEMENT: Ie
  } = mn;
  let {
    IS_ALLOWED_URI: N
  } = mn, $ = null;
  const J = Q({}, [...cn, ...sr, ...ar, ...or, ...un]);
  let X = null;
  const me = Q({}, [...dn, ...ir, ...fn, ...St]);
  let R = Object.seal(xr(null, {
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
  })), L = null, P = null;
  const I = Object.seal(xr(null, {
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
  let Y = !0, ee = !0, k = !1, z = !0, W = !1, q = !0, Z = !1, ue = !1, te = !1, be = !1, je = !1, Se = !1, wt = !0, ze = !1;
  const Gt = "user-content-";
  let Wt = !0, nt = !1, Ve = {}, Pe = null;
  const qt = Q({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let _r = null;
  const Cr = Q({}, ["audio", "video", "img", "source", "image", "track"]);
  let Kt = null;
  const Or = Q({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), vt = "http://www.w3.org/1998/Math/MathML", At = "http://www.w3.org/2000/svg", Me = "http://www.w3.org/1999/xhtml";
  let Ye = Me, Vt = !1, Yt = null;
  const ls = Q({}, [vt, At, Me], rr);
  let Et = Q({}, ["mi", "mo", "mn", "ms", "mtext"]), Nt = Q({}, ["annotation-xml"]);
  const cs = Q({}, ["title", "style", "font", "a", "script"]);
  let st = null;
  const us = ["application/xhtml+xml", "text/html"], ds = "text/html";
  let le = null, Xe = null;
  const fs = n.createElement("form"), Lr = function(c) {
    return c instanceof RegExp || c instanceof Function;
  }, Xt = function() {
    let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Xe && Xe === c)) {
      if ((!c || typeof c != "object") && (c = {}), c = ke(c), st = // eslint-disable-next-line unicorn/prefer-includes
      us.indexOf(c.PARSER_MEDIA_TYPE) === -1 ? ds : c.PARSER_MEDIA_TYPE, le = st === "application/xhtml+xml" ? rr : Lt, $ = Ce(c, "ALLOWED_TAGS") ? Q({}, c.ALLOWED_TAGS, le) : J, X = Ce(c, "ALLOWED_ATTR") ? Q({}, c.ALLOWED_ATTR, le) : me, Yt = Ce(c, "ALLOWED_NAMESPACES") ? Q({}, c.ALLOWED_NAMESPACES, rr) : ls, Kt = Ce(c, "ADD_URI_SAFE_ATTR") ? Q(ke(Or), c.ADD_URI_SAFE_ATTR, le) : Or, _r = Ce(c, "ADD_DATA_URI_TAGS") ? Q(ke(Cr), c.ADD_DATA_URI_TAGS, le) : Cr, Pe = Ce(c, "FORBID_CONTENTS") ? Q({}, c.FORBID_CONTENTS, le) : qt, L = Ce(c, "FORBID_TAGS") ? Q({}, c.FORBID_TAGS, le) : ke({}), P = Ce(c, "FORBID_ATTR") ? Q({}, c.FORBID_ATTR, le) : ke({}), Ve = Ce(c, "USE_PROFILES") ? c.USE_PROFILES : !1, Y = c.ALLOW_ARIA_ATTR !== !1, ee = c.ALLOW_DATA_ATTR !== !1, k = c.ALLOW_UNKNOWN_PROTOCOLS || !1, z = c.ALLOW_SELF_CLOSE_IN_ATTR !== !1, W = c.SAFE_FOR_TEMPLATES || !1, q = c.SAFE_FOR_XML !== !1, Z = c.WHOLE_DOCUMENT || !1, be = c.RETURN_DOM || !1, je = c.RETURN_DOM_FRAGMENT || !1, Se = c.RETURN_TRUSTED_TYPE || !1, te = c.FORCE_BODY || !1, wt = c.SANITIZE_DOM !== !1, ze = c.SANITIZE_NAMED_PROPS || !1, Wt = c.KEEP_CONTENT !== !1, nt = c.IN_PLACE || !1, N = c.ALLOWED_URI_REGEXP || Xn, Ye = c.NAMESPACE || Me, Et = c.MATHML_TEXT_INTEGRATION_POINTS || Et, Nt = c.HTML_INTEGRATION_POINTS || Nt, R = c.CUSTOM_ELEMENT_HANDLING || {}, c.CUSTOM_ELEMENT_HANDLING && Lr(c.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (R.tagNameCheck = c.CUSTOM_ELEMENT_HANDLING.tagNameCheck), c.CUSTOM_ELEMENT_HANDLING && Lr(c.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (R.attributeNameCheck = c.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), c.CUSTOM_ELEMENT_HANDLING && typeof c.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (R.allowCustomizedBuiltInElements = c.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), W && (ee = !1), je && (be = !0), Ve && ($ = Q({}, un), X = [], Ve.html === !0 && (Q($, cn), Q(X, dn)), Ve.svg === !0 && (Q($, sr), Q(X, ir), Q(X, St)), Ve.svgFilters === !0 && (Q($, ar), Q(X, ir), Q(X, St)), Ve.mathMl === !0 && (Q($, or), Q(X, fn), Q(X, St))), c.ADD_TAGS && (typeof c.ADD_TAGS == "function" ? I.tagCheck = c.ADD_TAGS : ($ === J && ($ = ke($)), Q($, c.ADD_TAGS, le))), c.ADD_ATTR && (typeof c.ADD_ATTR == "function" ? I.attributeCheck = c.ADD_ATTR : (X === me && (X = ke(X)), Q(X, c.ADD_ATTR, le))), c.ADD_URI_SAFE_ATTR && Q(Kt, c.ADD_URI_SAFE_ATTR, le), c.FORBID_CONTENTS && (Pe === qt && (Pe = ke(Pe)), Q(Pe, c.FORBID_CONTENTS, le)), c.ADD_FORBID_CONTENTS && (Pe === qt && (Pe = ke(Pe)), Q(Pe, c.ADD_FORBID_CONTENTS, le)), Wt && ($["#text"] = !0), Z && Q($, ["html", "head", "body"]), $.table && (Q($, ["tbody"]), delete L.tbody), c.TRUSTED_TYPES_POLICY) {
        if (typeof c.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw ut('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof c.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw ut('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        h = c.TRUSTED_TYPES_POLICY, j = h.createHTML("");
      } else
        h === void 0 && (h = xo(T, s)), h !== null && typeof j == "string" && (j = h.createHTML(""));
      ye && ye(c), Xe = c;
    }
  }, Ir = Q({}, [...sr, ...ar, ...oo]), Pr = Q({}, [...or, ...io]), ms = function(c) {
    let _ = y(c);
    (!_ || !_.tagName) && (_ = {
      namespaceURI: Ye,
      tagName: "template"
    });
    const B = Lt(c.tagName), ne = Lt(_.tagName);
    return Yt[c.namespaceURI] ? c.namespaceURI === At ? _.namespaceURI === Me ? B === "svg" : _.namespaceURI === vt ? B === "svg" && (ne === "annotation-xml" || Et[ne]) : !!Ir[B] : c.namespaceURI === vt ? _.namespaceURI === Me ? B === "math" : _.namespaceURI === At ? B === "math" && Nt[ne] : !!Pr[B] : c.namespaceURI === Me ? _.namespaceURI === At && !Nt[ne] || _.namespaceURI === vt && !Et[ne] ? !1 : !Pr[B] && (cs[B] || !Ir[B]) : !!(st === "application/xhtml+xml" && Yt[c.namespaceURI]) : !1;
  }, Fe = function(c) {
    lt(t.removed, {
      element: c
    });
    try {
      y(c).removeChild(c);
    } catch {
      x(c);
    }
  }, Ue = function(c, _) {
    try {
      lt(t.removed, {
        attribute: _.getAttributeNode(c),
        from: _
      });
    } catch {
      lt(t.removed, {
        attribute: null,
        from: _
      });
    }
    if (_.removeAttribute(c), c === "is")
      if (be || je)
        try {
          Fe(_);
        } catch {
        }
      else
        try {
          _.setAttribute(c, "");
        } catch {
        }
  }, Fr = function(c) {
    let _ = null, B = null;
    if (te)
      c = "<remove></remove>" + c;
    else {
      const oe = nr(c, /^[\r\n\t ]+/);
      B = oe && oe[0];
    }
    st === "application/xhtml+xml" && Ye === Me && (c = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + c + "</body></html>");
    const ne = h ? h.createHTML(c) : c;
    if (Ye === Me)
      try {
        _ = new b().parseFromString(ne, st);
      } catch {
      }
    if (!_ || !_.documentElement) {
      _ = S.createDocument(Ye, "template", null);
      try {
        _.documentElement.innerHTML = Vt ? j : ne;
      } catch {
      }
    }
    const pe = _.body || _.documentElement;
    return c && B && pe.insertBefore(n.createTextNode(B), pe.childNodes[0] || null), Ye === Me ? G.call(_, Z ? "html" : "body")[0] : Z ? _.documentElement : pe;
  }, Dr = function(c) {
    return F.call(
      c.ownerDocument || c,
      c,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null
    );
  }, Qt = function(c) {
    return c instanceof g && (typeof c.nodeName != "string" || typeof c.textContent != "string" || typeof c.removeChild != "function" || !(c.attributes instanceof u) || typeof c.removeAttribute != "function" || typeof c.setAttribute != "function" || typeof c.namespaceURI != "string" || typeof c.insertBefore != "function" || typeof c.hasChildNodes != "function");
  }, kr = function(c) {
    return typeof l == "function" && c instanceof l;
  };
  function $e(U, c, _) {
    jt(U, (B) => {
      B.call(t, c, _, Xe);
    });
  }
  const Mr = function(c) {
    let _ = null;
    if ($e(C.beforeSanitizeElements, c, null), Qt(c))
      return Fe(c), !0;
    const B = le(c.nodeName);
    if ($e(C.uponSanitizeElement, c, {
      tagName: B,
      allowedTags: $
    }), q && c.hasChildNodes() && !kr(c.firstElementChild) && ge(/<[/\w!]/g, c.innerHTML) && ge(/<[/\w!]/g, c.textContent) || c.nodeType === ft.progressingInstruction || q && c.nodeType === ft.comment && ge(/<[/\w]/g, c.data))
      return Fe(c), !0;
    if (!(I.tagCheck instanceof Function && I.tagCheck(B)) && (!$[B] || L[B])) {
      if (!L[B] && Br(B) && (R.tagNameCheck instanceof RegExp && ge(R.tagNameCheck, B) || R.tagNameCheck instanceof Function && R.tagNameCheck(B)))
        return !1;
      if (Wt && !Pe[B]) {
        const ne = y(c) || c.parentNode, pe = f(c) || c.childNodes;
        if (pe && ne) {
          const oe = pe.length;
          for (let we = oe - 1; we >= 0; --we) {
            const Be = E(pe[we], !0);
            Be.__removalCount = (c.__removalCount || 0) + 1, ne.insertBefore(Be, A(c));
          }
        }
      }
      return Fe(c), !0;
    }
    return c instanceof m && !ms(c) || (B === "noscript" || B === "noembed" || B === "noframes") && ge(/<\/no(script|embed|frames)/i, c.innerHTML) ? (Fe(c), !0) : (W && c.nodeType === ft.text && (_ = c.textContent, jt([D, v, K], (ne) => {
      _ = ct(_, ne, " ");
    }), c.textContent !== _ && (lt(t.removed, {
      element: c.cloneNode()
    }), c.textContent = _)), $e(C.afterSanitizeElements, c, null), !1);
  }, $r = function(c, _, B) {
    if (wt && (_ === "id" || _ === "name") && (B in n || B in fs))
      return !1;
    if (!(ee && !P[_] && ge(ae, _))) {
      if (!(Y && ge(se, _))) {
        if (!(I.attributeCheck instanceof Function && I.attributeCheck(_, c))) {
          if (!X[_] || P[_]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(Br(c) && (R.tagNameCheck instanceof RegExp && ge(R.tagNameCheck, c) || R.tagNameCheck instanceof Function && R.tagNameCheck(c)) && (R.attributeNameCheck instanceof RegExp && ge(R.attributeNameCheck, _) || R.attributeNameCheck instanceof Function && R.attributeNameCheck(_, c)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              _ === "is" && R.allowCustomizedBuiltInElements && (R.tagNameCheck instanceof RegExp && ge(R.tagNameCheck, B) || R.tagNameCheck instanceof Function && R.tagNameCheck(B)))
            ) return !1;
          } else if (!Kt[_]) {
            if (!ge(N, ct(B, ie, ""))) {
              if (!((_ === "src" || _ === "xlink:href" || _ === "href") && c !== "script" && ro(B, "data:") === 0 && _r[c])) {
                if (!(k && !ge(ce, ct(B, ie, "")))) {
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
  }, Br = function(c) {
    return c !== "annotation-xml" && nr(c, Ie);
  }, zr = function(c) {
    $e(C.beforeSanitizeAttributes, c, null);
    const {
      attributes: _
    } = c;
    if (!_ || Qt(c))
      return;
    const B = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: X,
      forceKeepAttr: void 0
    };
    let ne = _.length;
    for (; ne--; ) {
      const pe = _[ne], {
        name: oe,
        namespaceURI: we,
        value: Be
      } = pe, Qe = le(oe), Zt = Be;
      let fe = oe === "value" ? Zt : no(Zt);
      if (B.attrName = Qe, B.attrValue = fe, B.keepAttr = !0, B.forceKeepAttr = void 0, $e(C.uponSanitizeAttribute, c, B), fe = B.attrValue, ze && (Qe === "id" || Qe === "name") && (Ue(oe, c), fe = Gt + fe), q && ge(/((--!?|])>)|<\/(style|title|textarea)/i, fe)) {
        Ue(oe, c);
        continue;
      }
      if (Qe === "attributename" && nr(fe, "href")) {
        Ue(oe, c);
        continue;
      }
      if (B.forceKeepAttr)
        continue;
      if (!B.keepAttr) {
        Ue(oe, c);
        continue;
      }
      if (!z && ge(/\/>/i, fe)) {
        Ue(oe, c);
        continue;
      }
      W && jt([D, v, K], (Hr) => {
        fe = ct(fe, Hr, " ");
      });
      const Ur = le(c.nodeName);
      if (!$r(Ur, Qe, fe)) {
        Ue(oe, c);
        continue;
      }
      if (h && typeof T == "object" && typeof T.getAttributeType == "function" && !we)
        switch (T.getAttributeType(Ur, Qe)) {
          case "TrustedHTML": {
            fe = h.createHTML(fe);
            break;
          }
          case "TrustedScriptURL": {
            fe = h.createScriptURL(fe);
            break;
          }
        }
      if (fe !== Zt)
        try {
          we ? c.setAttributeNS(we, oe, fe) : c.setAttribute(oe, fe), Qt(c) ? Fe(c) : ln(t.removed);
        } catch {
          Ue(oe, c);
        }
    }
    $e(C.afterSanitizeAttributes, c, null);
  }, ps = function U(c) {
    let _ = null;
    const B = Dr(c);
    for ($e(C.beforeSanitizeShadowDOM, c, null); _ = B.nextNode(); )
      $e(C.uponSanitizeShadowNode, _, null), Mr(_), zr(_), _.content instanceof o && U(_.content);
    $e(C.afterSanitizeShadowDOM, c, null);
  };
  return t.sanitize = function(U) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ = null, B = null, ne = null, pe = null;
    if (Vt = !U, Vt && (U = "<!-->"), typeof U != "string" && !kr(U))
      if (typeof U.toString == "function") {
        if (U = U.toString(), typeof U != "string")
          throw ut("dirty is not a string, aborting");
      } else
        throw ut("toString is not a function");
    if (!t.isSupported)
      return U;
    if (ue || Xt(c), t.removed = [], typeof U == "string" && (nt = !1), nt) {
      if (U.nodeName) {
        const Be = le(U.nodeName);
        if (!$[Be] || L[Be])
          throw ut("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (U instanceof l)
      _ = Fr("<!---->"), B = _.ownerDocument.importNode(U, !0), B.nodeType === ft.element && B.nodeName === "BODY" || B.nodeName === "HTML" ? _ = B : _.appendChild(B);
    else {
      if (!be && !W && !Z && // eslint-disable-next-line unicorn/prefer-includes
      U.indexOf("<") === -1)
        return h && Se ? h.createHTML(U) : U;
      if (_ = Fr(U), !_)
        return be ? null : Se ? j : "";
    }
    _ && te && Fe(_.firstChild);
    const oe = Dr(nt ? U : _);
    for (; ne = oe.nextNode(); )
      Mr(ne), zr(ne), ne.content instanceof o && ps(ne.content);
    if (nt)
      return U;
    if (be) {
      if (je)
        for (pe = M.call(_.ownerDocument); _.firstChild; )
          pe.appendChild(_.firstChild);
      else
        pe = _;
      return (X.shadowroot || X.shadowrootmode) && (pe = O.call(r, pe, !0)), pe;
    }
    let we = Z ? _.outerHTML : _.innerHTML;
    return Z && $["!doctype"] && _.ownerDocument && _.ownerDocument.doctype && _.ownerDocument.doctype.name && ge(Qn, _.ownerDocument.doctype.name) && (we = "<!DOCTYPE " + _.ownerDocument.doctype.name + `>
` + we), W && jt([D, v, K], (Be) => {
      we = ct(we, Be, " ");
    }), h && Se ? h.createHTML(we) : we;
  }, t.setConfig = function() {
    let U = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Xt(U), ue = !0;
  }, t.clearConfig = function() {
    Xe = null, ue = !1;
  }, t.isValidAttribute = function(U, c, _) {
    Xe || Xt({});
    const B = le(U), ne = le(c);
    return $r(B, ne, _);
  }, t.addHook = function(U, c) {
    typeof c == "function" && lt(C[U], c);
  }, t.removeHook = function(U, c) {
    if (c !== void 0) {
      const _ = eo(C[U], c);
      return _ === -1 ? void 0 : to(C[U], _, 1)[0];
    }
    return ln(C[U]);
  }, t.removeHooks = function(U) {
    C[U] = [];
  }, t.removeAllHooks = function() {
    C = pn();
  }, t;
}
var bo = Zn();
const wo = ["jpg", "jpeg", "png", "gif", "svg", "webp"], vo = ["mp4", "webm", "ogg"], Ao = ["txt", "json", "csv"], Eo = ["pdf"], hn = ["file", "camera", "camera2", "photo", "avatar", "attachment"];
function No(e) {
  return e.template ? e.template : "tab";
}
function To(e) {
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    const s = r.group || "Info";
    t[s] || (t[s] = { label: s, type: "fields", fields: [] }), t[s]?.fields?.push({ name: n, ...r });
  }), t;
}
const jo = (e) => Object.entries(e ?? {}).filter(([, t]) => t.type === "geolocation").map(([t]) => t);
async function Jn() {
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
function So(e, t) {
  const n = new Set(
    t.filter((r) => r.nodb === !0 || r.nosave === !0).map((r) => r.name)
  );
  return Object.fromEntries(
    Object.entries(e).filter(([r]) => !n.has(r))
  );
}
function Ft(e, t = "create") {
  const n = {};
  return Object.keys(e).forEach((r) => {
    e[r].vmode === "edit" && t === "create" || (n[r] = {
      label: r,
      required: e[r].required ?? !1
    });
  }), n;
}
function Ro(e, t = "create") {
  return Object.entries(e).filter(([, n]) => !(n.vmode === "edit" && t === "create")).map(([n, r]) => ({
    ...r,
    name: n
  }));
}
const tt = {
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
function rt(e) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(e) ? e : 6;
}
const Ee = (e, t) => typeof e == "string" ? e.replace(
  /#(\w+)#/g,
  (n, r) => t[r] !== void 0 ? String(t[r]) : n
) : Array.isArray(e) ? e.map((n) => Ee(n, t)) : e && typeof e == "object" ? Object.fromEntries(
  Object.entries(e).map(([n, r]) => [
    Ee(n, t),
    Ee(r, t)
  ])
) : e, es = (e) => {
  const t = Array.isArray(e?.data?.data) ? e.data.data[0] : Array.isArray(e?.data) ? e.data[0] : e?.data?.data ?? e?.data;
  return t && typeof t == "object" && !Array.isArray(t) ? t : null;
}, Oe = (e, t, n, r) => {
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
function gn(e, t) {
  if (!t || Object.keys(t).length === 0) return e;
  if (typeof e == "number")
    return t[String(e)] ?? e;
  if (typeof e == "string") {
    const r = e.split(",").map((s) => s.trim()).map((s) => t[s]).filter(Boolean);
    return r.length ? r.join(", ") : e;
  }
  return e;
}
const Ht = (e) => e === !0 || e === "true", _o = (e, t, n, r) => {
  e.forEach((s) => {
    const o = s?.name;
    if (!o) return;
    let i = r?.[o];
    i == null && (i = s.default), hn.includes(s.type ?? "") ? t[o] = Array.isArray(i) ? i : typeof i == "string" && i.length > 0 ? i.split(",").map((m) => m.trim()).filter(Boolean) : [] : s.multiple === !0 || s.type === "tags" ? t[o] = Array.isArray(i) ? i : typeof i == "string" ? i.split(",").map((m) => m.trim()).filter(Boolean) : [] : s.type === "checkbox" ? t[o] = String(i ?? "false") : s.type === "json" ? t[o] = typeof i == "object" && i !== null ? JSON.stringify(i, null, 2) : i ?? "" : s.type === "date" ? t[o] = typeof i == "string" && i.trim() ? i.slice(0, 10) : null : s.type === "time" ? typeof i == "string" ? i.includes("T") ? t[o] = i.slice(11, 16) : t[o] = i.slice(0, 5) : t[o] = "" : o === "blocked" || o === "blacklist" ? t[o] = String(i ?? "false") : t[o] = i ?? "";
    let l;
    if (hn.includes(s.type ?? "")) {
      const m = Re.array().of(
        Re.string()
      );
      l = s.required ? m.min(1, s.error_message || `${s.label} is required`) : m;
    } else if (s.multiple === !0 || s.type === "tags") {
      const m = Re.array().of(Re.string());
      l = s.required ? m.min(1, s.error_message || `${s.label} is required`) : m;
    } else s.type === "email" ? l = Re.string().email("Invalid email") : s.type === "number" ? l = Re.number().typeError("Must be a number") : s.type === "json" ? l = Re.string().test("json", "Invalid JSON", (m) => {
      if (!m) return !0;
      try {
        return JSON.parse(m), !0;
      } catch {
        return !1;
      }
    }) : s.type === "date" ? l = Re.string().nullable() : l = Re.string();
    s?.validate && Object.entries(s.validate).forEach(([m, d]) => {
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
            s?.error_message || `Must match pattern: ${d}`
          );
          break;
        case "date":
          l = l.nullable().test(
            "date",
            "Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)",
            (u) => {
              if (u == null || u === "") return !0;
              const g = u.replace(/-/g, "/"), [b, T, p] = g.split("/");
              if (!b || !T || !p) return !1;
              const E = /* @__PURE__ */ new Date(`${p}-${T}-${b}`);
              return !isNaN(E.getTime());
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
          l = Re.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          l = Re.number().typeError("Must be a decimal").transform((u, g) => {
            if (g == null || g === "") return;
            const b = Number(g);
            if (isNaN(b)) return u;
            if (typeof u == "number" && !isNaN(u)) {
              const T = Number(u);
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
            (u) => u && u.toUpperCase()
          );
          break;
        case "lower":
          l = l.transform(
            (u) => u && u.toLowerCase()
          );
          break;
        case "length-min": {
          const u = Number(d);
          isNaN(u) || (l = l.min(u, `Minimum length is ${u}`));
          break;
        }
        case "length-max": {
          const u = Number(d);
          isNaN(u) || (l = l.max(u, `Maximum length is ${u}`));
          break;
        }
      }
    }), s.required && (l = l.required(
      s.error_message || `${s.label || o} is required`
    )), n[o] = l;
  });
}, Dt = (e) => !e || typeof e != "object" ? !1 : Object.values(e).every(
  (t) => typeof t == "object" && t !== null
);
function Co(e) {
  if (!e || typeof e != "object") return !1;
  const t = e.src;
  return typeof e.target == "string" && typeof t == "object" && t !== null && (t.type === "api" || typeof t.queryid == "string" || typeof t.table == "string" && typeof t.columns < "u");
}
function Oo(e) {
  return e.split(",").map((t) => t.trim()).map((t) => {
    const n = t.match(/^(.+?)\s+as\s+.+$/i);
    return n ? n[1]?.trim() : t;
  }).filter((t) => !!t);
}
const Nr = (e, t) => {
  if (!e || t == null) return;
  const n = String(t);
  if (typeof Object.values(e)[0] == "string")
    return e[n];
  for (const s of Object.values(e))
    if (n in s)
      return s[n];
}, Lo = (e) => {
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
function Io(e) {
  return e ? Dt(e) ? Object.values(e).reduce((t, n) => (Object.assign(t, n), t), {}) : e : {};
}
const Ae = (e) => {
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
function Po(e) {
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
function Fo(e = "") {
  return e.split(".").pop()?.toLowerCase() ?? "";
}
function Do(e) {
  return wo.includes(e) ? "image" : vo.includes(e) ? "video" : Eo.includes(e) ? "pdf" : Ao.includes(e) ? "text" : "other";
}
const yn = {
  image: "fa fa-file-image",
  pdf: "fa fa-file-pdf",
  video: "fa fa-file-video",
  text: "fa fa-file-lines",
  other: "fa fa-file"
}, ko = "__form_persist__", ts = (e) => `${ko}:${e}`;
function Mo(e) {
  return bo.sanitize(e, {
    USE_PROFILES: { html: !0 }
  });
}
function $o(e) {
  try {
    return JSON.parse(localStorage.getItem(ts(e)) || "{}");
  } catch {
    return {};
  }
}
function Bo(e) {
  return e.persistent ? e.persistent === !0 ? e.name : typeof e.persistent == "string" ? e.persistent : null : null;
}
function zo(e, t, n) {
  const r = $o(e);
  localStorage.setItem(
    ts(e),
    JSON.stringify({
      ...r,
      [t]: n
    })
  );
}
function He(e, t, n) {
  const r = Bo(t);
  r && n && zo(n, r, e);
}
function lr(e) {
  return H.isAxiosError(e) ? e.response?.data?.message || e.message || "Something went wrong" : e instanceof Error ? e.message : typeof e == "string" ? e : "Something went wrong";
}
function cr(e) {
  return e?.data?.message ? e.data.message : e?.message ? e.message : "Operation completed successfully";
}
const rs = ({
  uploads: e,
  currentValue: t,
  multiple: n
}) => {
  const r = Array.isArray(t) ? t : t ? [t] : [], s = e.map((o) => `${o.fileId}&${o.path}`);
  return [...r, ...s];
}, Uo = (e) => {
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
}, Ho = (e) => {
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
}, Go = (e) => e === "today" ? (/* @__PURE__ */ new Date()).toISOString().split("T")[0] : e, Wo = ({ fileUrl: e, category: t }) => e ? t === "image" ? /* @__PURE__ */ a.jsx("img", { src: e, className: "max-h-[80vh] mx-auto" }) : t === "pdf" || t === "text" ? /* @__PURE__ */ a.jsx("iframe", { src: e, className: "w-full h-[80vh]" }) : t === "video" ? /* @__PURE__ */ a.jsx("video", { controls: !0, className: "w-full max-h-[80vh]", children: /* @__PURE__ */ a.jsx("source", { src: e }) }) : /* @__PURE__ */ a.jsxs("div", { className: "text-center p-4", children: [
  /* @__PURE__ */ a.jsx("p", { children: "Preview not available" }),
  /* @__PURE__ */ a.jsx("a", { href: e, download: !0, className: "text-blue-600 underline", children: "Download file" })
] }) : null, mt = (e) => ({
  Authorization: `Bearer ${e.accessToken}`
}), ur = async (e) => (await H.get(
  e.baseURL + e.dbopsGetHash,
  { headers: mt(e) }
)).data.refhash, dr = async (e, t) => (await H.post(
  e.baseURL + e.dbopsGetRefId,
  t,
  { headers: mt(e) }
)).data.refid, qo = {
  async fetch(e, t, n, r) {
    const s = await ur(e);
    let o = !1, i;
    n && (o = !0, i = n), o || (i = await dr(e, {
      operation: "fetch",
      source: t.source,
      fields: t.fields ?? {},
      datahash: s,
      srcid: r
    }));
    const l = { refid: i, datahash: s, refid1: e.refid };
    t.source?.refid && (l.refid1 = t.source?.refid);
    const m = await H.post(
      e.baseURL + e.dbopsFetch,
      l,
      { headers: mt(e) }
    );
    return m.data?.data ?? m.data;
  },
  async create(e, t, n) {
    const r = await ur(e), s = await dr(e, {
      operation: "create",
      source: t.source,
      fields: t.values,
      datahash: r,
      srcid: n
    });
    return (await H.post(
      e.baseURL + e.dbopsCreate,
      { refid: s, fields: t.values, datahash: r },
      { headers: mt(e) }
    )).data;
  },
  async update(e, t, n) {
    const r = await ur(e), s = await dr(e, {
      operation: "update",
      source: t.source,
      fields: t.values,
      datahash: r,
      srcid: n
    });
    return (await H.post(
      e.baseURL + e.dbopsUpdate,
      { refid: s, fields: t.values, datahash: r },
      { headers: mt(e) }
    )).data;
  }
};
async function Ze(e, t, n, r = void 0, s = void 0, o = {}) {
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
async function Ko({
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
      let b = e.name;
      typeof e.parameter == "string" && e.parameter && (b = e.parameter);
      const T = { [b]: t, refid: t };
      if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
        for (const [x, A] of Object.entries(e.parameter))
          T[x] = x === b ? t : s?.[A];
      const p = {
        method: l.method || "GET",
        url: n?.baseURL + l.endpoint,
        headers: {
          Authorization: `Bearer ${n?.accessToken}`
        },
        ...l.method === "GET" ? { params: T } : { data: T }
      }, { data: E } = await H(p);
      m = E;
    } else {
      let b;
      if (!l.queryid) {
        if (!l.table || !l.columns)
          throw new Error("SQL query requires field.table");
        const p = Ee(l.where ?? {}, { refid: t });
        b = {
          ...l,
          table: l.table,
          cols: l.columns,
          where: p
        };
      }
      const { data: T } = await Ze(
        n,
        b,
        l.queryid,
        t
      );
      m = T;
    }
    const d = Array.isArray(m?.results?.options) ? m?.results?.options : Array.isArray(m.data) ? m.data : Array.isArray(m.results) ? m.results : m, u = Array.isArray(d) ? d.map(Ae) : [], g = Oe(
      e.valueKey ?? "value",
      e.labelKey ?? "title",
      u,
      e.groupKey
    );
    r(i.target, g);
  }
}
async function ns(e, t) {
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
async function ss(e, t) {
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
async function as(e, t) {
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
function Vo(e) {
  const t = yn[e] ?? yn.other;
  return /* @__PURE__ */ a.jsx("i", { className: `${t} text-2xl text-gray-600` });
}
const os = ({ filePath: e, sqlOpsUrls: t }) => {
  const n = e.replace(/^[^&]*&/, ""), [r, s] = de(null), [o, i] = de(!1), l = Fo(n), m = Do(l);
  ve(() => {
    if (!t || m !== "image" && !o) return;
    let u = !0, g = null;
    return ns(n, t).then((b) => {
      u && (g = b, s(b));
    }), () => {
      u = !1, g && URL.revokeObjectURL(g);
    };
  }, [m, o, n, t]);
  let d = n.split("/").pop();
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    m === "image" ? /* @__PURE__ */ a.jsx(
      "div",
      {
        role: "button",
        tabIndex: 0,
        onClick: () => i(!0),
        onKeyDown: (u) => u.key === "Enter" && i(!0),
        className: "h-16 w-16 rounded overflow-hidden cursor-pointer",
        title: "Click to preview",
        children: r ? /* @__PURE__ */ a.jsx(
          "img",
          {
            src: r,
            alt: d,
            className: "h-full w-full object-cover hover:opacity-90"
          }
        ) : /* @__PURE__ */ a.jsx("div", { className: "h-full w-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ a.jsx("i", { className: "fa-regular fa-image text-gray-400" }) })
      }
    ) : /* @__PURE__ */ a.jsxs(
      "div",
      {
        role: "button",
        tabIndex: 0,
        onClick: () => i(!0),
        onKeyDown: (u) => u.key === "Enter" && i(!0),
        className: "inline-flex cursor-pointer items-center gap-1",
        title: "Click to preview",
        children: [
          Vo(m),
          /* @__PURE__ */ a.jsx("span", { className: "text-sm", children: d })
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
      r ? /* @__PURE__ */ a.jsx(Wo, { fileUrl: r, category: m }) : /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col items-center justify-center py-12", children: [
        /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-spinner fa-spin text-3xl text-gray-900 mb-3" }),
        /* @__PURE__ */ a.jsx("span", { className: "text-gray-600", children: "Loading preview..." })
      ] })
    ] }) })
  ] });
};
function bt({
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
  `, [u, g] = de(
    i ?? e.options ?? {}
  ), b = re.useRef(!1);
  re.useEffect(() => {
    i && g(i);
  }, [i]);
  const T = re.useMemo(
    () => Io(u),
    [u]
  );
  re.useEffect(() => {
    let y = !0, h = e.valueKey ?? "value", j = e.labelKey ?? "title";
    return (async () => {
      let F = e?.options;
      if (F && (Array.isArray(F) && F.length > 0 || !Array.isArray(F) && Object.keys(F).length > 0)) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const D = Object.values(e.options);
          if (D.length && typeof D[0] == "string") {
            g(e.options);
            return;
          }
        }
        const O = (Array.isArray(e.options) ? e.options : [e.options]).map(Ae), C = Oe(
          h,
          j,
          O,
          e.groupKey
          // auto-uses `category` if present
        );
        g(C);
        return;
      }
      const M = e?.source ?? {};
      if (e.type === "dataMethod") {
        const G = e.method, O = G ? n[G] : void 0;
        if (O)
          try {
            const C = await Promise.resolve(O()), D = Array.isArray(C.data?.results?.options) ? C.data?.results?.options : Array.isArray(C?.data?.data) ? C.data.data : Array.isArray(C.data?.results) ? C.data?.results : Array.isArray(C?.data) ? C.data : C;
            if (typeof D == "object" && !Array.isArray(D)) {
              const ae = Object.values(D);
              if (ae.length && typeof ae[0] == "string") {
                g(D);
                return;
              }
            }
            const v = Array.isArray(D) ? D.map(Ae) : [], K = Oe(h, j, v, e.groupKey);
            y && g(K);
            return;
          } catch (C) {
            console.error("Method execution failed:", C), y && g({});
            return;
          }
        else {
          y && g({});
          return;
        }
      }
      if (M.type === "api" && M.endpoint)
        try {
          const G = {
            method: M.method || "GET",
            url: r?.baseURL + M.endpoint,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            },
            ...M.method === "GET" ? { params: { refid: M.refid } } : { data: { refid: M.refid } }
          }, O = await H(G), C = Array.isArray(O.data?.results?.options) ? O.data?.results?.options : Array.isArray(O?.data?.data) ? O.data.data : Array.isArray(O.data?.results) ? O.data?.results : Array.isArray(O?.data) ? O.data : O;
          if (typeof C == "object" && !Array.isArray(C)) {
            const K = Object.values(C);
            if (K.length && typeof K[0] == "string") {
              g(C);
              return;
            }
          }
          const D = Array.isArray(C) ? C.map(Ae) : [], v = Oe(h, j, D, e.groupKey);
          y && g(v);
          return;
        } catch (G) {
          console.error("API execution failed:", G), y && g({});
          return;
        }
      if (e.table || e.type === "dataSelector" || e.queryid) {
        if (!r) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let G;
          if (e.type === "dataSelector")
            G = {
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
            G = {
              table: e.table,
              cols: e.columns,
              where: e.where ? s ? Ee(e.where, { refid: s }) : e.where : void 0
            };
          }
          const O = await Ze(r, G, e?.queryid, void 0, o), C = Array.isArray(O?.data?.data) ? O.data.data : Array.isArray(O?.data) ? O.data : O;
          if (typeof C == "object" && !Array.isArray(C)) {
            const K = Object.values(C);
            if (K.length && typeof K[0] == "string") {
              g(C);
              return;
            }
          }
          const D = Array.isArray(C) ? C.map(Ae) : [], v = Oe(h, j, D, e.groupKey);
          y && g(v);
        } catch (G) {
          console.error("API fetch failed:", G);
        }
      }
    })(), () => {
      y = !1;
    };
  }, [
    e.options,
    e.source,
    e.table,
    e.columns,
    e.where,
    s
  ]);
  const p = e?.name ? t?.[e.name] : void 0;
  re.useEffect(() => {
    b.current || !l || !p || (b.current = !0, Ko({
      field: e,
      value: p,
      sqlOpsUrls: r,
      setFieldOptions: l,
      values: t ?? {}
    }));
  }, [p, r, l]);
  let E;
  typeof p == "string" ? e.type === "date" ? E = p.split("T")[0] : e.type === "time" ? E = p.includes("T") ? p.slice(11, 16) : p.slice(0, 5) : E = gn(p, T) : E = gn(p, T);
  const x = E == null ? "" : typeof E == "string" || typeof E == "number" ? E : JSON.stringify(E), A = Po(p), f = e.type === "richtextarea" && typeof x == "string" ? Mo(x) : null;
  return /* @__PURE__ */ a.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ a.jsx("label", { className: d, children: e?.label }),
    /* @__PURE__ */ a.jsx("div", { className: "relative", children: A ? A.type === "drawn" ? /* @__PURE__ */ a.jsx("svg", { viewBox: "0 0 300 150", className: "h-24 w-full border bg-white rounded", children: A.paths.map((y, h) => /* @__PURE__ */ a.jsx(
      "path",
      {
        d: y.d,
        stroke: y.color || "#000",
        strokeWidth: y.width || 2,
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      h
    )) }) : A.type === "text" ? /* @__PURE__ */ a.jsx("svg", { viewBox: "0 0 300 150", className: "h-24 w-full border bg-white rounded", children: /* @__PURE__ */ a.jsx(
      "text",
      {
        x: "10",
        y: "100",
        fontSize: A.data.style?.fontSize || 32,
        fontFamily: A.data.style?.fontFamily || "cursive",
        fill: A.data.style?.textColor || "#000",
        children: A.data.text
      }
    ) }) : A.type === "html" ? /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "border bg-white rounded p-2 text-sm",
        dangerouslySetInnerHTML: { __html: A.html }
      }
    ) : /* @__PURE__ */ a.jsx(
      "img",
      {
        src: A.src,
        alt: "signature",
        className: "h-24 object-contain border bg-white rounded"
      }
    ) : (e.type === "file" || e.type === "camera" || e.type === "camera2" || e.type === "attachement" || e.type === "photo" || e.type === "avatar") && E ? /* @__PURE__ */ a.jsx("div", { className: "flex flex-wrap gap-2", children: String(E).split(",").map((y) => y.trim()).filter(Boolean).map((y) => /* @__PURE__ */ a.jsx(
      os,
      {
        sqlOpsUrls: r,
        filePath: y
      },
      y
    )) }) : e.type === "richtextarea" ? /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "tiptap border border-gray-200 min-h-[400px] max-h-[220px] overflow-auto bg-white rounded p-2 text-sm",
        dangerouslySetInnerHTML: { __html: f ?? "" }
      }
    ) : /* @__PURE__ */ a.jsx("p", { className: m, children: x }) })
  ] });
}
function is({ filePath: e, field_name: t, sqlOpsUrls: n }) {
  const [r, s] = de(null), o = e.replace(/^[^&]*&/, "");
  return ve(() => {
    if (!open || !n) return;
    let i = !0, l = null;
    return ns(o, n).then((m) => {
      i && (l = m, s(m));
    }), () => {
      i = !1, l && URL.revokeObjectURL(l);
    };
  }, [open, o, n]), r ? /* @__PURE__ */ a.jsx("div", { className: "h-24 w-24 rounded border border-dashed bg-gray-50 flex items-center justify-center", children: r ? /* @__PURE__ */ a.jsx(
    "img",
    {
      alt: t,
      title: t,
      src: r,
      className: "h-24 w-24 object-cover rounded"
    }
  ) : /* @__PURE__ */ a.jsx("i", { className: "fa-regular fa-image text-gray-400 text-2xl" }) }) : null;
}
function Yo({
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
  const d = Rt(
    () => e?.fields?.find((b) => b.type === "avatar"),
    [e?.fields]
  ), u = d?.name, g = u && typeof t?.[u] == "string" ? t[u].trim() : "";
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white border border-gray-100 p-4 min-h-3/10 overflow-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    d && /* @__PURE__ */ a.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ a.jsx("div", { className: "relative w-42 h-42 p-2 rounded-sm overflow-hidden bg-gray-100 flex items-center justify-center", children: g ? /* @__PURE__ */ a.jsx(
      is,
      {
        field_name: d.name,
        filePath: g,
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
    /* @__PURE__ */ a.jsx("div", { className: `min-h-0 max-h-40 overflow-y-auto custom-scrollbar ${d ? "lg:col-span-10" : "lg:col-span-12"}`, children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: e.fields?.map((b, T) => n.includes(b.name) || b.type === "avatar" ? null : /* @__PURE__ */ a.jsx("div", { className: `hover:bg-gray-100 transition-colors duration-200 col-span-12 sm:col-span-6 ${tt[rt(Number(b.width))] || "lg:col-span-4"}`, children: /* @__PURE__ */ a.jsx(
      bt,
      {
        field: b,
        data: t ?? {},
        sqlOpsUrls: r,
        methods: m,
        refid: l,
        module_refid: i,
        setFieldOptions: s,
        ...o[b.name] ? { optionsOverride: o[b.name] } : {}
      },
      b?.name
    ) }, b.name)) }) })
  ] }) });
}
function Tr({ tabObj: e, methods: t, tabName: n, sqlOpsUrls: r, refid: s, module_refid: o, setFieldOptions: i, fieldOptions: l }) {
  const [m, d] = re.useState(null);
  return re.useEffect(() => {
    let u = !1;
    return (async () => {
      const b = e?.config;
      if (!b?.type) {
        u || d(null);
        return;
      }
      if (b.type === "method") {
        const T = b.method, p = T ? t[T] : void 0;
        if (p)
          try {
            const E = await Promise.resolve(p());
            u || d(E || null);
          } catch (E) {
            console.error("Method execution failed:", E), u || d(null);
          }
        else
          u || d(null);
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
          u || d(T.data || null);
        } catch (T) {
          console.error("API fetch failed:", T), u || d(null);
        }
      if (b.type === "sql" && s && s != "0" || b?.dbopsid) {
        if (!r) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let T = !1, p;
          b?.dbopsid && (T = !0, p = b?.dbopsid);
          const E = await H({
            method: "GET",
            url: r.baseURL + r.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            }
          });
          if (!T) {
            let f = {
              ...b
            };
            b.where && (f = {
              ...b,
              where: Ee(b.where, {
                refid: s
              })
            }), p = (await H({
              method: "POST",
              url: r.baseURL + r.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: f,
                fields: Ft(b.fields, r.operation),
                forcefill: b.forcefill,
                datahash: E.data.refhash,
                srcid: o
              },
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              }
            }))?.data.refid;
          }
          const x = await H({
            method: "POST",
            url: r.baseURL + r.dbopsFetch,
            data: {
              refid: p,
              datahash: E.data.refhash
            },
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            }
          }), A = es(x);
          u || d(A);
        } catch (T) {
          console.error("API fetch failed:", T);
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
  ]), /* @__PURE__ */ a.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: m ? Object.keys(m).map((u, g) => {
    let b = { name: u, label: u };
    return /* @__PURE__ */ a.jsx(
      "div",
      {
        className: `col-span-12 sm:col-span-6 ${tt[rt(e.width)] || "lg:col-span-2"}`,
        children: /* @__PURE__ */ a.jsx(
          bt,
          {
            field: b,
            data: m ?? {},
            methods: t,
            refid: s,
            sqlOpsUrls: r,
            setFieldOptions: i,
            ...l[b.name] ? { optionsOverride: l[b.name] } : {}
          },
          u
        )
      },
      `field-${g}`
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
function Xo({
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
function Qo({
  field: e,
  formik: t,
  methods: n = {},
  sqlOpsUrls: r,
  refid: s,
  module_refid: o = "menuManager.main",
  optionsOverride: i,
  setFieldOptions: l,
  setFieldLoading: m
}) {
  const d = [
    "select",
    "dataSelector",
    "dataSelectorFromTable",
    "dataSelectorFromUniques",
    "dataMethod",
    "suggest",
    "autosuggest",
    "autocomplete"
  ].includes(e?.type || "text"), [u, g] = de(!1), [b, T] = de(d), [p, E] = de(
    i ?? e.options ?? {}
  ), [x, A] = de(""), [f, y] = de(0), h = We(null), j = We(null), [S, F] = de(!1), M = We(x), G = e.disabled === !0;
  ve(() => {
    M.current = x;
  }, [x]), ve(() => {
    if (e.type !== "select" || e.multiple || e["no-option"] !== "false" || t.values[O] || !p) return;
    let P;
    if (Array.isArray(p))
      P = p[0]?.value;
    else if (!Dt(p))
      P = Object.keys(p)[0];
    else {
      const I = Object.values(p)[0];
      P = I ? Object.keys(I)[0] : void 0;
    }
    P != null && t.setFieldValue(O, String(P), !1);
  }, [p]), ve(() => {
    i && E(i);
  }, [i]), ve(() => {
    if (!S) return;
    const L = (P) => {
      const I = P.target;
      j.current?.contains(I) || h.current?.contains(I) || (F(!1), A(""));
    };
    return document.addEventListener("mousedown", L), () => {
      document.removeEventListener("mousedown", L);
    };
  }, [S]);
  const O = e.name;
  ve(() => {
    let L = !0;
    return (async () => {
      try {
        let I = e.valueKey ?? "value", Y = e.labelKey ?? "title", ee = e?.options;
        if (ee && (Array.isArray(ee) && ee.length > 0 || !Array.isArray(ee) && Object.keys(ee).length > 0)) {
          if (typeof e.options == "object" && !Array.isArray(e.options)) {
            const Z = Object.values(e.options);
            if (Z.length && typeof Z[0] == "string") {
              E(e.options);
              return;
            }
          }
          const W = (Array.isArray(e.options) ? e.options : [e.options]).map(Ae), q = Oe(
            I,
            Y,
            W,
            e.groupKey
            // auto-uses `category` if present
          );
          E(q);
          return;
        }
        const k = e?.source ?? {};
        if (e.type === "dataMethod") {
          const z = e.method, W = z ? n[z] : void 0;
          if (W)
            try {
              const q = await W(), Z = Array.isArray(q.data?.results?.options) ? q.data?.results?.options : Array.isArray(q?.data?.data) ? q.data.data : Array.isArray(q.data?.results) ? q.data?.results : Array.isArray(q?.data) ? q.data : q;
              if (typeof Z == "object" && !Array.isArray(Z)) {
                const be = Object.values(Z);
                if (be.length && typeof be[0] == "string") {
                  E(Z);
                  return;
                }
              }
              const ue = Array.isArray(Z) ? Z.map(Ae) : [], te = Oe(I, Y, ue, e.groupKey);
              L && E(te);
              return;
            } catch (q) {
              console.error("Method execution failed:", q), L && E({});
              return;
            }
          else {
            L && E({});
            return;
          }
        }
        if (k.type === "api" && k.endpoint)
          try {
            const z = {
              method: k.method || "GET",
              url: r?.baseURL + k.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...k.method === "GET" ? { params: { refid: k.refid } } : { data: { refid: k.refid } }
            }, W = await H(z), q = Array.isArray(W.data?.results?.options) ? W.data?.results?.options : Array.isArray(W?.data?.data) ? W.data.data : Array.isArray(W.data?.results) ? W.data?.results : Array.isArray(W?.data) ? W.data : W;
            if (typeof q == "object" && !Array.isArray(q)) {
              const te = Object.values(q);
              if (te.length && typeof te[0] == "string") {
                E(q);
                return;
              }
            }
            const Z = Array.isArray(q) ? q.map(Ae) : [], ue = Oe(I, Y, Z, e.groupKey);
            L && E(ue);
            return;
          } catch (z) {
            console.error("API execution failed:", z), L && E({});
            return;
          }
        if (e.table || e.type === "dataSelector" || e.queryid) {
          if (!r) {
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
                where: e.where ? s ? Ee(e.where, { refid: s }) : e.where : void 0
              };
            }
            const W = await Ze(r, z, e?.queryid, void 0, o), q = Array.isArray(W?.data?.data) ? W.data.data : Array.isArray(W?.data) ? W.data : W;
            if (typeof q == "object" && !Array.isArray(q)) {
              const te = Object.values(q);
              if (te.length && typeof te[0] == "string") {
                E(q);
                return;
              }
            }
            const Z = Array.isArray(q) ? q.map(Ae) : [], ue = Oe(I, Y, Z, e.groupKey);
            L && E(ue);
          } catch (z) {
            console.error("API fetch failed:", z);
          }
        }
      } catch (I) {
        console.log(I);
      } finally {
        L && d && T(!1);
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
    s,
    e.queryid,
    e.groupKey,
    e.valueKey,
    e.labelKey
  ]);
  const C = `
  w-full px-4 py-2 rounded-lg border transition-all duration-300
  backdrop-blur-sm text-gray-800 placeholder-gray-400
  focus:outline-none focus:ring-0

  ${G ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:shadow-md"}
`, D = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, v = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, K = Rt(
    () => Lo(p),
    [p]
  ), ae = Rt(() => {
    if (!e.type || !["suggest", "autosuggest", "autocomplete"].includes(e.type) || !x.trim()) return null;
    const L = x.trim().toLowerCase();
    return K.find(([, P]) => P.trim().toLowerCase() === L);
  }, [e.type, x, K]), se = K.length, ce = !!(e.search && (e.queryid || e.table)), ie = Rt(() => ce || !x ? K : K.filter(
    ([, L]) => L.toLowerCase().includes(x.toLowerCase())
  ), [ce, x, K]), Ie = (L, P) => {
    if (S)
      if (L.key === "ArrowDown")
        L.preventDefault(), y(
          (I) => I + 1 < ie.length ? I + 1 : 0
        );
      else if (L.key === "ArrowUp")
        L.preventDefault(), y(
          (I) => I - 1 >= 0 ? I - 1 : ie.length - 1
        );
      else if (L.key === "Enter") {
        L.preventDefault();
        const [I] = ie[f] || [];
        if (I) {
          let Y = P ? I : [...t.values[e.name], I];
          t.setFieldValue(e.name, Y), He(Y, e, o);
        }
        F(!1);
      } else L.key === "Escape" && (A(""), F(!1));
  };
  ve(() => {
    h.current?.querySelector(
      `[data-index="${f}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [f]), ve(() => {
    f >= ie.length && y(0);
  }, [ie, f]), ve(() => {
    const L = e.autocomplete, P = e.ajaxchain;
    if (!L && !P) return;
    const I = t.values[e.name];
    if (!I) return;
    const Y = Array.isArray(P) ? P : P ? [P] : [];
    (async () => {
      try {
        if (Co(L)) {
          const k = L.src;
          if (!k || !r) return;
          let z;
          if ("type" in k && k.type === "api") {
            let q = e.name;
            typeof e.parameter == "string" && e.parameter && (q = e.parameter);
            const Z = { [q]: I, refid: I };
            if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
              for (const [be, je] of Object.entries(e.parameter))
                Z[be] = be === q ? I : t.values?.[je];
            const ue = {
              method: k.method || "GET",
              url: r?.baseURL + k.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...k.method === "GET" ? { params: Z } : { data: Z }
            }, { data: te } = await H(ue);
            z = Array.isArray(te?.data?.results?.options) ? te?.data?.results?.options[0] : Array.isArray(te?.data?.data) ? te.data.data[0] : Array.isArray(te?.data?.results) ? te.data.results[0] : Array.isArray(te?.data) ? te.data[0] : te?.data;
          } else {
            let q;
            if (!k.queryid) {
              if (!k.table || !k.columns)
                throw new Error("SQL query requires field.table");
              const ue = Ee(k?.where ?? {}, {
                refid: I
              });
              q = {
                ...k,
                table: k.table,
                cols: k.columns,
                where: ue
              };
            }
            const { data: Z } = await Ze(r, q, k?.queryid, I, o);
            z = Array.isArray(Z?.data?.data) ? Z.data.data[0] : Array.isArray(Z?.data) ? Z.data[0] : Z?.data;
          }
          let W = Ae(z);
          W && L.target.split(",").map((q) => q.trim()).forEach((q) => {
            W[q] !== void 0 && t.setFieldValue(q, W[q]);
          });
        }
        for (const k of Y) {
          m?.(k.target, !0);
          const z = k.src;
          if (!k || typeof k != "object" || !z || typeof z != "object" || !r) continue;
          let W;
          if ("type" in z && z.type === "api") {
            let je = e.name;
            typeof e.parameter == "string" && e.parameter && (je = e.parameter);
            let Se = { [je]: I, refid: I };
            if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
              for (const [ze, Gt] of Object.entries(e.parameter))
                Se[ze] = ze === je ? I : t.values?.[Gt];
            const wt = {
              method: z.method || "GET",
              url: r?.baseURL + z.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...z.method === "GET" ? { params: Se } : { data: Se }
            };
            try {
              const { data: ze } = await H(wt);
              W = ze;
            } catch {
            } finally {
              m?.(k.target, !1);
            }
          } else {
            let je;
            if (!z.queryid) {
              if (!z.table || !z.columns)
                throw new Error("SQL query requires field.table");
              const Se = Ee(z?.where ?? {}, {
                refid: I
              });
              je = {
                ...z,
                table: z.table,
                cols: z.columns,
                where: Se
              };
            }
            try {
              const { data: Se } = await Ze(r, je, z?.queryid, I, o);
              W = Se;
            } catch {
            } finally {
              m?.(k.target, !1);
            }
          }
          let q = e.valueKey ?? "value", Z = e.labelKey ?? "title";
          const ue = Array.isArray(W?.results?.options) ? W?.results?.options : Array.isArray(W.data) ? W.data : Array.isArray(W.results) ? W.results : W, te = Array.isArray(ue) ? ue.map(Ae) : [], be = Oe(
            q,
            Z,
            te,
            e.groupKey
          );
          t.setFieldValue(k.target, t.initialValues[k.target]), l?.(k.target, be);
        }
      } catch (k) {
        console.error("Autocomplete / AjaxChain fetch failed", k);
      }
    })();
  }, [t.values[e.name]]), ve(() => {
    if (!ce || !x.trim() || !r) return;
    const L = Oo(e.columns ?? ""), P = new AbortController(), I = setTimeout(async () => {
      try {
        let Y;
        if (!e.queryid) {
          if (!e.table || !e.cols)
            throw new Error("SQL query requires field.table");
          const te = s ? Ee(e.where ?? {}, {
            refid: s
          }) : e.where;
          Y = {
            ...e,
            table: e.table,
            cols: e.columns || e.cols,
            where: te
          };
        }
        let ee = {};
        Array.isArray(L) && L.forEach((te) => {
          ee[te] = [x, "LIKE"];
        });
        let k = e.valueKey ?? "value", z = e.labelKey ?? "title";
        const { data: W } = await Ze(r, Y, e?.queryid, void 0, o, ee), q = Array.isArray(W?.data?.data) ? W.data.data : Array.isArray(W?.data) ? W.data : W, Z = Array.isArray(q) ? q.map(Ae) : [], ue = Oe(
          k,
          z,
          Z,
          e.groupKey
        );
        E(ue);
      } catch (Y) {
        if (H.isCancel(Y)) return;
        console.error("Search fetch failed", Y);
      }
    }, 500);
    return () => {
      clearTimeout(I), P.abort();
    };
  }, [ce, x, s]);
  const N = async (L) => {
    if (L.length === 0) {
      console.error("No file");
      return;
    }
    try {
      const P = await ss(r, L), I = rs({
        uploads: P,
        currentValue: t.values[O],
        multiple: e.multiple ?? !1
      });
      t.setFieldValue(
        O,
        I
      ), He(I, e, o);
    } catch (P) {
      console.error("File upload failed", P), t.setFieldError(O, "File upload failed");
    }
  }, $ = async (L) => {
    const P = Array.isArray(t.values[O]) ? t.values[O] : [], I = L.split("&")[0];
    if (!I) return;
    const Y = P.filter((ee) => ee.split("&")[0] !== I);
    t.setFieldValue(O, Y);
    try {
      await as(r, I), He(Y, e, o);
    } catch (ee) {
      console.log(ee), t.setFieldValue(O, P), window.alert("Failed to delete file due to a technical issue. Please try again.");
    }
  }, J = async (L, P, I) => {
    const Y = P[L];
    if (!Y) return;
    const ee = n?.[Y];
    if (typeof ee != "function") {
      console.error(`Method "${String(Y)}" not found`);
      return;
    }
    try {
      await Promise.resolve(ee(I));
    } catch (k) {
      console.error(`Method "${String(Y)}" failed`, k);
    }
  }, X = (L) => {
    if (G) return;
    const P = L.target.value;
    A(P), y(0), P.trim() ? F(!0) : (F(!1), t.setFieldValue(O, ""));
  }, me = (L) => {
    t.setFieldValue(O, L), He(L, e, o), A(""), F(!1), J("onChange", e, `${O}-${L}`);
  };
  function R(L) {
    const P = L.currentTarget.files;
    P && N(P);
  }
  return {
    setHighlightedIndex: y,
    executeFieldMethod: J,
    handleFileUpload: N,
    handleKeyDown: Ie,
    setSearch: A,
    setOpen: F,
    setIsFocused: g,
    handleInputChange: X,
    handleSelect: me,
    handlePersist: He,
    handleFileChange: R,
    setLoading: T,
    removeFile: $,
    optionCount: se,
    baseInputClasses: C,
    focusClasses: D,
    labelClasses: v,
    search: x,
    highlightedIndex: f,
    options: p,
    isDisabled: G,
    key: O,
    filteredOptions: ie,
    open: S,
    listRef: h,
    isFocused: u,
    exactMatch: ae,
    triggerRef: j,
    loading: b
  };
}
function jr({
  anchorRef: e,
  open: t,
  children: n,
  offset: r = 4,
  maxHeight: s = 240
}) {
  const [o, i] = de({}), l = We(null);
  return hs(() => {
    if (!t || !e.current || !l.current) return;
    const m = e.current, d = () => {
      const g = m.getBoundingClientRect(), b = window.innerHeight, T = l.current?.offsetHeight || s, p = b - g.bottom, E = g.top, A = p < T && E > p ? g.top - T - r : g.bottom + r;
      i({
        position: "fixed",
        top: A,
        left: g.left,
        minWidth: g.width,
        maxHeight: s,
        overflowY: "auto",
        zIndex: 9999
      });
    };
    d();
    const u = requestAnimationFrame(d);
    return window.addEventListener("scroll", d, !0), window.addEventListener("resize", d), () => {
      cancelAnimationFrame(u), window.removeEventListener("scroll", d, !0), window.removeEventListener("resize", d);
    };
  }, [t, e, r, s]), t ? ys(
    /* @__PURE__ */ a.jsx("div", { ref: l, style: o, children: n }),
    document.body
  ) : null;
}
function xn({
  field: e,
  isDisabled: t,
  handleKeyDown: n,
  labelClasses: r,
  listRef: s,
  search: o,
  filteredOptions: i,
  highlightedIndex: l,
  setSearch: m,
  formik: d,
  executeFieldMethod: u,
  handlePersist: g,
  module_refid: b,
  options: T,
  triggerRef: p,
  open: E,
  setOpen: x,
  loading: A
}) {
  const f = e.name;
  return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ a.jsx(
      "input",
      {
        type: "hidden",
        name: f,
        value: JSON.stringify(d.values[f] ?? "")
      }
    ),
    /* @__PURE__ */ a.jsxs("label", { className: r, children: [
      e.label,
      e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: `
        relative w-full select-none border rounded-lg px-4 py-2.5 flex justify-between items-center
        ${t ? "opacity-70 bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 cursor-pointer"}
      `,
        ref: p,
        tabIndex: 0,
        onClick: () => {
          x((y) => !y);
        },
        onKeyDown: (y) => {
          t || n(y, !0);
        },
        children: [
          /* @__PURE__ */ a.jsx("span", { className: "text-sm text-gray-700", children: d.values[f] ? Nr(T, d.values[f]) ?? "Select option" : `Select ${e.label}` }),
          A ? /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) : /* @__PURE__ */ a.jsx(
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
    /* @__PURE__ */ a.jsx(jr, { anchorRef: p, open: E, children: /* @__PURE__ */ a.jsxs(
      "div",
      {
        ref: s,
        className: "w-full border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto p-2",
        children: [
          e.search && /* @__PURE__ */ a.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "text",
              value: o,
              onChange: (y) => {
                m(y.target.value);
              },
              onKeyDown: (y) => n(y, !0),
              placeholder: "Search...",
              className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                      bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                      focus:outline-none focus:ring-0`
            }
          ) }),
          i.length > 0 && /* @__PURE__ */ a.jsx(
            "div",
            {
              onClick: (y) => {
                y.preventDefault(), y.stopPropagation(), d.setFieldValue(f, ""), x(!1), g("", e, b), m("");
              },
              className: "px-2 py-1 hover:bg-gray-50 text-gray-500 rounded cursor-pointer text-sm hover:bg-gray-50",
              children: "Clear selection"
            }
          ),
          i.length > 0 ? i.map(([y, h], j) => /* @__PURE__ */ a.jsx(
            "div",
            {
              id: `${f}-${y}`,
              "data-index": j,
              onClick: (S) => {
                S.preventDefault(), S.stopPropagation(), d.setFieldValue(f, y), g(y, e, b), x(!1), m(""), u("onChange", e, `${f}-${y}`);
              },
              className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                            ${d.values[f] === y ? "bg-indigo-50 text-indigo-600 font-medium" : l === j ? "bg-gray-100" : "hover:bg-gray-50"}`,
              children: h
            },
            y
          )) : /* @__PURE__ */ a.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
        ]
      }
    ) }),
    d.touched[f] && d.errors[f] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(d.errors[f]) })
  ] });
}
function bn({
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
  formik: u,
  executeFieldMethod: g,
  handlePersist: b,
  module_refid: T,
  options: p,
  triggerRef: E,
  open: x,
  setOpen: A,
  loading: f
}) {
  const y = e.name;
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
        ref: E,
        onClick: () => {
          A((h) => !h);
        },
        onKeyDown: (h) => {
          t || n(h, !1);
        },
        onBlur: () => {
          e.multiple || setTimeout(() => {
            A(!1), d("");
          }, 150);
        },
        children: [
          /* @__PURE__ */ a.jsx("span", { className: "text-sm text-gray-700", children: r?.length > 0 ? r.map((h) => Nr(p, h) ?? h).join(", ") : `Select ${e.label}` }),
          f ? /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) : /* @__PURE__ */ a.jsx(
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
    /* @__PURE__ */ a.jsx(jr, { anchorRef: E, open: x && !t, children: /* @__PURE__ */ a.jsxs("div", { ref: o, className: " w-full border border-gray-200 rounded-lg bg-white shadow-md  max-h-60 overflow-y-auto p-2", children: [
      e.search && /* @__PURE__ */ a.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ a.jsx(
        "input",
        {
          type: "text",
          value: i,
          onChange: (h) => {
            t || d(h.target.value);
          },
          placeholder: "Search...",
          className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
        }
      ) }),
      l.length > 0 ? l.map(([h, j], S) => /* @__PURE__ */ a.jsxs(
        "label",
        {
          htmlFor: `${y}-${h}`,
          className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${r?.includes(h) ? "bg-indigo-50 text-indigo-600 font-medium" : m === S ? "bg-gray-100" : "hover:bg-gray-50"}`,
          children: [
            /* @__PURE__ */ a.jsx(
              "input",
              {
                id: `${y}-${h}`,
                type: "checkbox",
                checked: r?.includes(h),
                onChange: (F) => {
                  const M = F.target.checked ? [...r, h] : r?.filter((G) => G !== h);
                  u.setFieldValue(y, M), b(M, e, T), g("onChange", e, `${y}-${h}`);
                },
                onBlur: u.handleBlur,
                disabled: t,
                className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              }
            ),
            j
          ]
        },
        h
      )) : /* @__PURE__ */ a.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
    ] }) }),
    u.touched[y] && u.errors[y] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(u.errors[y]) })
  ] });
}
function Zo({
  formik: e,
  field: t,
  sqlOpsUrls: n,
  module_refid: r
}) {
  let s = t?.name;
  const o = We(null), i = t.max !== void 0 ? Number(t.max) : 1 / 0, [l, m] = de(!1), d = Array.isArray(e.values[s]) ? e.values[s] : e.values[s] ? [e.values[s]] : [], u = async (p) => {
    const E = p.currentTarget.files;
    if (!E?.length) return;
    const x = Array.from(p.currentTarget.files || []);
    if (d.length + x.length > i) {
      alert(`You can upload maximum ${i} file(s)`), p.currentTarget.value = "";
      return;
    }
    try {
      m(!0);
      const f = await ss(n, E), y = rs({
        uploads: f,
        currentValue: e.values[s],
        multiple: t.multiple ?? !1
      });
      e.setFieldValue(
        s,
        y
      ), He(y, t, r), p.target.value = "";
    } catch (f) {
      console.error("File upload failed", f), e.setFieldError(s, "File upload failed");
    } finally {
      m(!1);
    }
  }, g = async (p) => {
    const E = Array.isArray(e.values[s]) ? e.values[s] : [], x = p.split("&")[0];
    if (!x) return;
    const A = E.filter((f) => f.split("&")[0] !== x);
    e.setFieldValue(s, A);
    try {
      if (!p.split("&")[0]) return;
      await as(n, x), He(A, t, r);
    } catch {
      e.setFieldValue(s, E), window.alert("Failed to delete file due to a technical issue. Please try again.");
    }
  }, b = Uo(t), T = t.multiple === !0;
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
        multiple: T,
        ...b,
        onChange: u
      }
    ),
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "flex flex-wrap gap-2",
        children: [
          d.length > 0 ? d.map((p) => /* @__PURE__ */ a.jsxs("div", { className: "relative group", children: [
            /* @__PURE__ */ a.jsx(
              is,
              {
                field_name: p,
                filePath: p,
                sqlOpsUrls: n
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  g(p);
                },
                className: "absolute -top-2 -right-2 cursor-pointer bg-white text-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xl cursor-pointer transition",
                children: "×"
              }
            )
          ] }, p)) : null,
          /* @__PURE__ */ a.jsx(
            "div",
            {
              onClick: () => {
                l || o.current?.click();
              },
              className: "w-24 h-24 flex items-center justify-center border border-dashed rounded-md bg-gray-50 hover:bg-gray-100 cursor-pointer",
              children: l ? /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-spinner fa-spin text-2xl text-gray-900" }) : /* @__PURE__ */ a.jsx("i", { className: `fa-solid ${Ho(t)} text-2xl text-gray-400` })
            }
          )
        ]
      }
    ),
    e.touched[s] && e.errors[s] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[s]) })
  ] });
}
function Jo({
  field: e,
  formik: t,
  methods: n = {},
  sqlOpsUrls: r,
  refid: s,
  module_refid: o = "menuManager.main",
  optionsOverride: i,
  setFieldOptions: l,
  fieldLoading: m,
  setFieldLoading: d
}) {
  const {
    executeFieldMethod: u,
    handleFileUpload: g,
    handleKeyDown: b,
    setSearch: T,
    setOpen: p,
    setIsFocused: E,
    handleInputChange: x,
    handleSelect: A,
    handlePersist: f,
    setLoading: y,
    removeFile: h,
    optionCount: j,
    baseInputClasses: S,
    focusClasses: F,
    labelClasses: M,
    search: G,
    highlightedIndex: O,
    options: C,
    isDisabled: D,
    key: v,
    filteredOptions: K,
    open: ae,
    listRef: se,
    triggerRef: ce,
    isFocused: ie,
    exactMatch: Ie,
    loading: N
  } = Qo({
    field: e,
    formik: t,
    methods: n,
    sqlOpsUrls: r,
    refid: s,
    module_refid: o,
    ...d && { setFieldLoading: d },
    ...i && { optionsOverride: i },
    ...l && { setFieldOptions: l }
  }), $ = (J) => J.icon ? /* @__PURE__ */ a.jsx("i", { className: J.icon }) : null;
  switch (e.type) {
    case "suggest":
    case "autosuggest":
    case "autocomplete": {
      const R = t.values[v] ?? "", L = G !== "" ? G : Nr(C, R) ?? String(R ?? "");
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { ref: ce, children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              className: `${S} ${F}`,
              value: L,
              placeholder: e.placeholder || "Type to search...",
              onChange: x,
              onBlur: () => {
                setTimeout(() => p(!1), 150);
              },
              onKeyDown: (P) => {
                if (P.key === "Enter") {
                  if (P.preventDefault(), Ie) {
                    const [I] = Ie;
                    t.setFieldValue(v, I), f(I, e, o);
                  } else G.trim() && (t.setFieldValue(v, G.trim()), f(G.trim(), e, o));
                  p(!1), T("");
                  return;
                }
                b(P, !0);
              },
              disabled: D
            }
          ),
          (N || m) && /* @__PURE__ */ a.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) })
        ] }),
        /* @__PURE__ */ a.jsx(jr, { anchorRef: ce, open: ae && !D, children: /* @__PURE__ */ a.jsx(
          "div",
          {
            ref: se,
            className: " w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1",
            children: K.length > 0 && Ie ? K.map(([P, I], Y) => /* @__PURE__ */ a.jsx(
              "div",
              {
                id: `${v}-${P}`,
                "data-index": Y,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${O === Y ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => A(P),
                children: I
              },
              P
            )) : /* @__PURE__ */ a.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `Press "ENTER" to ADD "${L}" ` })
          }
        ) }),
        t.touched[v] && t.errors[v] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[v]) })
      ] });
    }
    case "dataSelector":
    case "dataSelectorFromTable":
    case "dataSelectorFromUniques":
    case "dataMethod": {
      if (e.multiple === !0) {
        const R = t.values[v];
        return /* @__PURE__ */ a.jsx(
          bn,
          {
            field: e,
            isDisabled: D,
            handleKeyDown: b,
            valueArray: R,
            labelClasses: M,
            listRef: se,
            search: G,
            filteredOptions: K,
            highlightedIndex: O,
            setSearch: T,
            formik: t,
            executeFieldMethod: u,
            handlePersist: f,
            module_refid: o,
            options: C,
            triggerRef: ce,
            open: ae,
            setOpen: p,
            loading: N || !!m
          }
        );
      }
      return /* @__PURE__ */ a.jsx(
        xn,
        {
          field: e,
          isDisabled: D,
          handleKeyDown: b,
          labelClasses: M,
          listRef: se,
          search: G,
          filteredOptions: K,
          highlightedIndex: O,
          setSearch: T,
          formik: t,
          executeFieldMethod: u,
          handlePersist: f,
          module_refid: o,
          options: C,
          triggerRef: ce,
          open: ae,
          setOpen: p,
          loading: N || !!m
        }
      );
    }
    case "textarea":
      return /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ a.jsx(
            "textarea",
            {
              id: v,
              className: `${S} ${F} min-h-[120px] resize-none`,
              onFocus: () => E(!0),
              name: v,
              value: t.values[v],
              onBlur: t.handleBlur,
              onChange: (R) => {
                t.setFieldValue(v, R.target.value), f(R.target.value, e, o), u("onChange", e, `${v}`);
              },
              placeholder: e.placeholder,
              disabled: D
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${ie ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[v] && t.errors[v] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[v]) })
      ] }) });
    case "select":
      if (e.multiple === !0) {
        const R = t.values[v];
        return /* @__PURE__ */ a.jsx(
          bn,
          {
            field: e,
            isDisabled: D,
            handleKeyDown: b,
            valueArray: R,
            labelClasses: M,
            listRef: se,
            search: G,
            filteredOptions: K,
            highlightedIndex: O,
            setSearch: T,
            formik: t,
            executeFieldMethod: u,
            handlePersist: f,
            module_refid: o,
            options: C,
            triggerRef: ce,
            open: ae,
            setOpen: p,
            loading: N || !!m
          }
        );
      }
      return e.search ? /* @__PURE__ */ a.jsx(
        xn,
        {
          field: e,
          isDisabled: D,
          handleKeyDown: b,
          labelClasses: M,
          listRef: se,
          search: G,
          filteredOptions: K,
          highlightedIndex: O,
          setSearch: T,
          formik: t,
          executeFieldMethod: u,
          handlePersist: f,
          module_refid: o,
          options: C,
          triggerRef: ce,
          open: ae,
          setOpen: p,
          loading: N || !!m
        }
      ) : /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ a.jsxs(
            "select",
            {
              className: `${S} ${F} appearance-none ${D ? "" : "cursor-pointer"} pr-12`,
              onFocus: () => E(!0),
              name: v,
              id: v,
              value: t.values[v],
              onBlur: t.handleBlur,
              onChange: (R) => {
                t.setFieldValue(v, R.target.value), f(R.target.value, e, o), u("onChange", e, `${v}`);
              },
              disabled: D,
              children: [
                e?.["no-option"] !== "false" && !t.values[v] && /* @__PURE__ */ a.jsx("option", { value: "", disabled: !0, children: e?.["no-option"] || `Please select ${e.label}` }),
                /* @__PURE__ */ a.jsx("option", { value: "", className: "text-gray-500", children: "Clear Selection" }),
                !Dt(C) && Object.entries(C).map(([R, L]) => /* @__PURE__ */ a.jsx("option", { value: R, className: "py-2", children: L }, R)),
                Dt(C) && Object.entries(C).map(([R, L]) => /* @__PURE__ */ a.jsx("optgroup", { label: R, children: Object.entries(L).map(([P, I]) => /* @__PURE__ */ a.jsx("option", { value: P, children: I }, P)) }, R))
              ]
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: "absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none", children: N || m ? /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) : /* @__PURE__ */ a.jsx(
            "svg",
            {
              className: "w-5 h-5 transition-colors duration-300 text-gray-400",
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
          ) })
        ] }),
        t.touched[v] && t.errors[v] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[v]) })
      ] });
    case "radioList":
    case "radio":
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: `flex ${j > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(C || {}).map(([R, L]) => /* @__PURE__ */ a.jsxs(
          "label",
          {
            htmlFor: `${v}-${R}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  id: `${v}-${R}`,
                  type: "radio",
                  name: v,
                  checked: t.values[v] === R,
                  value: R,
                  onChange: (P) => {
                    t.setFieldValue(v, P.target.value), f(P.target.value, e, o), u("onChange", e, `${v}-${R}`);
                  },
                  onBlur: t.handleBlur,
                  disabled: D,
                  className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${D ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                }
              ),
              L
            ]
          },
          R
        )) }),
        t.touched[v] && t.errors[v] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[v]) })
      ] });
    case "checkbox": {
      const R = e.multiple === !0, L = t.values[v];
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(C || {}).map(([P, I]) => {
          const Y = R ? Array.isArray(L) && L.includes(P) : L === P;
          return /* @__PURE__ */ a.jsxs(
            "label",
            {
              className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
              children: [
                /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    id: `${v}-${P}`,
                    type: "checkbox",
                    checked: Y,
                    onChange: (ee) => {
                      let k;
                      if (R) {
                        const z = Array.isArray(L) ? L : [];
                        k = ee.target.checked ? [...z, P] : z.filter((W) => W !== P);
                      } else
                        k = ee.target.checked ? P : "false";
                      t.setFieldValue(v, k), f(k, e, o), u("onChange", e, `${v}-${P}`);
                    },
                    onBlur: t.handleBlur,
                    disabled: D,
                    className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${D ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                  }
                ),
                I
              ]
            },
            P
          );
        }) }),
        t.touched[v] && t.errors[v] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[v]) })
      ] });
    }
    case "tags": {
      const R = t.values[v], L = G.trim(), P = Array.isArray(C) ? C : Object.entries(C || {}).map(([k, z]) => ({ value: k, label: z })), I = (k) => {
        if (!D && k && !R.includes(k)) {
          let z = [...R, k];
          t.setFieldValue(v, z), f(z, e, o), T("");
        }
      }, Y = (k) => {
        let z = R.filter((W) => W !== k);
        t.setFieldValue(
          v,
          z
        ), f(z, e, o);
      }, ee = (k) => P.find((z) => z.value === k)?.label ?? k;
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: `${S} 
            flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center
            ${D ? "pointer-events-none opacity-70" : ""}
            `,
            onClick: () => !D && document.getElementById(`${v}-input`)?.focus(),
            children: [
              R.map((k) => /* @__PURE__ */ a.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ a.jsx("span", { className: "text-indigo-700", children: ee(k) }),
                    /* @__PURE__ */ a.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (z) => {
                          z.stopPropagation(), D || Y(k);
                        },
                        onMouseDown: (z) => z.preventDefault(),
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
                  id: `${v}-input`,
                  type: "text",
                  value: G,
                  onChange: (k) => T(k.target.value),
                  onKeyDown: (k) => {
                    (k.key === "Enter" || k.key === ",") && (k.preventDefault(), I(L));
                  },
                  placeholder: R.length === 0 ? e.placeholder || "Type and press Enter" : "",
                  className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                  disabled: D
                }
              )
            ]
          }
        ),
        t.touched[v] && t.errors[v] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[v]) })
      ] });
    }
    case "camera":
    case "camera2":
    case "photo":
    case "avatar":
      return /* @__PURE__ */ a.jsx(
        Zo,
        {
          formik: t,
          field: e,
          sqlOpsUrls: r,
          module_refid: o
        }
      );
    case "attachment":
    case "file":
      const J = e.multiple === !0, X = e.max !== void 0 ? Number(e.max) : 1 / 0, me = Array.isArray(t.values[v]) ? t.values[v] : t.values[v] ? [t.values[v]] : [];
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative mb-1", children: [
          e.icon && /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: $(e) }),
          N && /* @__PURE__ */ a.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 z-10", children: /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: v,
              type: "file",
              accept: e.accept,
              className: `${S} ${F} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => E(!0),
              name: v,
              multiple: J,
              onChange: (R) => {
                const L = R.currentTarget.files, P = Array.from(R.currentTarget.files || []);
                if (me.length + P.length > X) {
                  alert(`You can upload maximum ${X} file(s)`), R.currentTarget.value = "";
                  return;
                }
                L && g(L), u("onChange", e, v), R.currentTarget.value = "";
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: D
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${ie ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "flex flex-wrap gap-2", children: me.map((R) => /* @__PURE__ */ a.jsxs("div", { className: "relative group", children: [
          /* @__PURE__ */ a.jsx(
            os,
            {
              sqlOpsUrls: r,
              filePath: R
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              onClick: () => h(R),
              className: "absolute -top-2 -right-2 bg-white text-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xl cursor-pointer transition",
              children: "×"
            }
          )
        ] }, R)) }),
        t.touched[v] && t.errors[v] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[v]) })
      ] });
    case "json":
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ a.jsx(
            "textarea",
            {
              id: v,
              name: v,
              value: t.values[v],
              onChange: (R) => {
                t.setFieldValue(v, R.target.value), f(R.target.value, e, o), u("onChange", e, `${v}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: D,
              className: `${S} ${F} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${ie ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        t.touched[v] && t.errors[v] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[v]) })
      ] });
    case "date": {
      const R = Go(e.max);
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: M, children: [
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
                  id: v,
                  type: "date",
                  name: v,
                  min: e.min,
                  max: R,
                  value: t.values[v] ?? "",
                  onChange: (L) => {
                    t.setFieldValue(v, L.target.value), f(L.target.value, e, o), u("onChange", e, `${v}`);
                  },
                  onBlur: t.handleBlur,
                  placeholder: e.placeholder,
                  disabled: D,
                  className: `${S} ${F} ${e.icon ? "pl-9" : ""}`
                }
              ),
              /* @__PURE__ */ a.jsx(
                "div",
                {
                  className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${ie ? "opacity-20" : ""}`,
                  style: { zIndex: -1, filter: "blur(8px)" }
                }
              )
            ]
          }
        ),
        t.touched[v] && t.errors[v] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[v]) })
      ] });
    }
    case "geolocation": {
      const R = t.values[v] || "", L = async () => {
        try {
          const P = await Jn();
          t.setFieldValue(v, P), f(P, e, o);
        } catch (P) {
          console.error(P), t.setFieldError(v, "Failed to fetch location");
        } finally {
          y(!1);
        }
      };
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "text",
              value: R,
              readOnly: !0,
              className: `${S} ${F}`,
              placeholder: "Click to fetch location"
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              onClick: L,
              disabled: N,
              className: "absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 disabled:opacity-50",
              children: N ? /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-spinner fa-spin text-red-500" }) : /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-location-dot text-red-600 hover:text-red-700" })
            }
          )
        ] }),
        t.touched[v] && t.errors[v] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[v]) })
      ] });
    }
    case "number":
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: $(e) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: v,
              type: "number",
              className: `${S} ${F} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => E(!0),
              name: v,
              value: t.values[v],
              onBlur: t.handleBlur,
              onChange: (R) => {
                t.setFieldValue(v, R.target.value), f(R.target.value, e, o), u("onChange", e, `${v}`);
              },
              step: e.step,
              placeholder: e.placeholder,
              disabled: D,
              min: e.min,
              max: e.max
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${ie ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[v] && t.errors[v] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[v]) })
      ] });
    default:
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: M, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: $(e) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: v,
              type: e.type || "text",
              className: `${S} ${F} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => E(!0),
              name: v,
              value: t.values[v],
              onBlur: t.handleBlur,
              onChange: (R) => {
                t.setFieldValue(v, R.target.value), f(R.target.value, e, o), u("onChange", e, `${v}`);
              },
              step: e.step,
              placeholder: e.placeholder,
              disabled: D,
              minLength: e.minlength,
              maxLength: e.maxlength
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${ie ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[v] && t.errors[v] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[v]) })
      ] });
  }
}
function ei({
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
  const d = Ro(t, i?.operation), [u, g] = re.useState({}), b = (h, j) => {
    g((S) => ({
      ...S,
      [h]: j
    }));
  }, [T, p] = re.useState({}), E = (h, j) => {
    p((S) => ({
      ...S,
      [h]: j
    }));
  }, { initialValues: x, validationSchema: A } = re.useMemo(() => {
    const h = {}, j = {};
    return d.forEach((S) => {
      _o([S], h, j, n);
    }), {
      initialValues: h,
      validationSchema: j
    };
  }, [d, n]), f = gs({
    initialValues: x,
    enableReinitialize: !0,
    validationSchema: Re.object().shape(A),
    onSubmit: (h) => {
      let j = So(h, d);
      r(j), f.resetForm();
    }
  });
  function y(h) {
    h.preventDefault(), f.resetForm();
  }
  return /* @__PURE__ */ a.jsx("div", { className: "relative  max-w-full ", children: /* @__PURE__ */ a.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ a.jsxs("form", { onSubmit: f.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "grid grid-cols-12 gap-4", children: [
      d.map((h, j) => {
        const S = Ht(h.hidden) || h.type === "hidden", F = `
  col-span-12 md:col-span-6
  ${tt[rt(Number(h.width))] || "lg:col-span-4"}
  ${S ? "hidden" : ""}
`;
        return /* @__PURE__ */ a.jsx(
          "div",
          {
            className: F,
            children: /* @__PURE__ */ a.jsx(
              Jo,
              {
                refid: l,
                module_refid: m,
                sqlOpsUrls: i,
                field: h,
                formik: f,
                methods: o,
                setFieldOptions: b,
                ...u[h.name] ? { optionsOverride: u[h.name] } : {},
                fieldLoading: T[h.name] ?? !1,
                setFieldLoading: E
              }
            )
          },
          h?.name ?? `field-${j}`
        );
      }),
      /* @__PURE__ */ a.jsxs("div", { className: "col-span-12 flex flex-row gap-1 justify-end", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", onClick: y, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Reset" }),
        Object.keys(f.errors).length > 0 && /* @__PURE__ */ a.jsx("div", { children: "  " }),
        /* @__PURE__ */ a.jsx("div", { children: "  " }),
        /* @__PURE__ */ a.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" }),
        Object.keys(f.errors).length > 0 && /* @__PURE__ */ a.jsx("div", { children: "  " })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "mt-8 flex justify-between space-x-3", children: /* @__PURE__ */ a.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }) })
  ] }) }) });
}
function wn({
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
  const m = e.endPoints, d = e?.source?.refid, [u, g] = re.useState(o ?? {}), b = re.useMemo(() => jo(e.fields), [e.fields]);
  re.useEffect(() => {
    let x = !0;
    return (async () => {
      try {
        const f = await Jn();
        x && g((y) => ({
          ...y,
          ...Object.fromEntries(
            b.map((h) => [h, f])
          )
        }));
      } catch (f) {
        console.warn("Geo fetch failed", f);
      }
    })(), () => {
      x = !1;
    };
  }, [b]), re.useEffect(() => {
    g(o ?? {});
  }, [o]);
  const T = re.useCallback(
    (x) => {
      x && g((A) => {
        const f = { ...A };
        for (const y in x)
          x[y] !== null && x[y] !== void 0 && (f[y] = x[y]);
        return f;
      });
    },
    []
  );
  re.useEffect(() => {
    let x = !0;
    return (async () => {
      const f = e?.source ?? {};
      if (f?.type && m?.operation !== "create") {
        if (f.type === "method") {
          const y = f.method, h = y ? t[y] : void 0;
          if (h)
            try {
              const j = await h();
              x && T(j);
            } catch (j) {
              console.error("Method execution failed:", j);
            }
        }
        if (f.type === "api")
          try {
            const y = {
              method: f.method || "GET",
              url: m?.baseURL + f.endpoint,
              headers: {
                Authorization: `Bearer ${m?.accessToken}`
              },
              ...f.method === "GET" ? { params: { refid: f.refid } } : { data: { refid: f.refid } }
            }, h = await H(y);
            x && T(h.data);
          } catch (y) {
            console.error("API fetch failed:", y);
          }
        if (f.type === "sql" && f.refid && f.refid !== "0" || f.dbopsid) {
          if (!m) {
            console.error("SQL source requires formJson.endPoints but it is missing");
            return;
          }
          try {
            const y = await qo.fetch(m, {
              source: {
                ...f,
                table: f.table,
                columns: f.columns,
                where: Ee(f.where, {
                  refid: d
                })
              },
              fields: Ft(e.fields, m.operation)
            }, f?.dbopsid, e?.module_refid);
            x && T(y);
          } catch (y) {
            console.error("API fetch failed:", y);
          }
        }
      }
    })(), () => {
      x = !1;
    };
  }, [
    m,
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.endpoint || ""
  ]);
  const p = async (x) => {
    const A = e?.source ?? {};
    let f = { ...x }, y = "0,0";
    if (b.length > 0) {
      const h = b[0];
      y = (h ? x[h] : null) || "0,0";
      const S = b.filter((F) => !x[F]);
      if (S.length > 0)
        try {
          f = {
            ...x,
            ...Object.fromEntries(
              S.map((F) => [F, y])
            )
          };
        } catch {
          console.warn("Geo fetch failed");
        }
    }
    if (A.type === "method") {
      const h = A.method, j = h ? t[h] : void 0;
      if (j)
        try {
          let S = f ? { ...f, geolocation: y } : {};
          const F = await j(S);
          i?.(null), s?.(F), l?.success?.(cr(F));
        } catch (S) {
          s?.(S), l?.error?.(lr(S)), console.error("Method execution failed:", S);
        }
    }
    if (A.type === "api") {
      if (!m) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const h = await H({
          method: A.method || "POST",
          url: m.baseURL + A.endpoint,
          data: f ? { ...f, geolocation: y } : {},
          headers: {
            Authorization: `Bearer ${m?.accessToken}`
          }
        });
        i?.(null), s?.(h), l?.success?.(cr(h));
      } catch (h) {
        s?.(h), l?.error?.(lr(h)), console.error("API fetch failed:", h);
      }
    }
    if (A.type === "sql") {
      const h = e.endPoints;
      if (!h) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let j = !1, S;
        A?.dbopsid && (j = !0, S = A?.dbopsid);
        const F = await H({
          method: "GET",
          url: h.baseURL + h.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${h?.accessToken}`
          }
        });
        if (!j) {
          let O = {
            ...A
          };
          A.where && (O = {
            ...A,
            where: Ee(A.where, {
              refid: d
            })
          }), S = (await H({
            method: "POST",
            url: h.baseURL + h.dbopsGetRefId,
            data: {
              operation: h.operation,
              source: O,
              fields: Ft(e.fields, h.operation),
              forcefill: e.forcefill,
              datahash: F.data.refhash,
              scrid: e?.module_refid
            },
            headers: {
              Authorization: `Bearer ${h?.accessToken}`
            }
          }))?.data.refid;
        }
        let M = {
          refid: S,
          fields: f,
          datahash: F.data.refhash,
          refid1: h.refid,
          geolocation: y
        };
        A?.refid && (M.refid1 = A?.refid);
        const G = await H({
          method: "POST",
          url: h.baseURL + h[h.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: M,
          headers: {
            Authorization: `Bearer ${h?.accessToken}`
          }
        });
        l?.success?.(cr(G)), i?.(null), s?.(G);
      } catch (j) {
        s?.(j), l?.error?.(lr(j)), console.error("API fetch failed:", j);
      }
    }
  }, E = {
    simple: /* @__PURE__ */ a.jsx(
      ei,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: u,
        onSubmit: p,
        onCancel: n,
        methods: t,
        components: r,
        sqlOpsUrls: m,
        refid: d,
        module_refid: e?.module_refid
      }
    )
  };
  return /* @__PURE__ */ a.jsx("div", { className: "relative", children: E.simple });
}
function Sr({ tabObj: e, methods: t, tabName: n, sqlOpsUrls: r, refid: s, Reports: o, toast: i, handleAction: l, infoViewJson: m }) {
  const [d, u] = de(!1), [g, b] = de(null), [T, p] = re.useState(0), [E, x] = re.useState(null), A = e?.config, f = e?.config, y = f?.["popup.form"] ? "popup.form" : (f?.form, "form"), h = f?.[y] && Object.keys(f?.[y]).length > 0, j = (O) => {
    let C = Ae(O.data);
    x(C);
  }, S = (O) => {
    x(O), p((C) => C + 1);
  }, F = (O) => {
    let C = Ae(O.data);
    b(C), u(!0);
  }, M = async () => {
    if (g?.id) {
      if (!r) {
        window.alert("Delete configuration missing.");
        return;
      }
      try {
        let O = e?.config;
        const C = O?.["popup.form"] ? "popup.form" : (O?.form, "form"), D = O?.[C];
        if (!D?.source) throw new Error("Form source missing");
        let v = !1, K;
        D?.source?.dbopsid && (v = !0, K = D?.source?.dbopsid);
        const ae = await H({
          method: "GET",
          url: r.baseURL + r.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${r.accessToken}`
          }
        });
        if (!v) {
          let se = { ...D.source, refid: g.id };
          D.source.where && (se = {
            ...se,
            where: Ee(D.source.where, {
              refid: g?.id
            })
          }), K = (await H({
            method: "POST",
            url: r.baseURL + r.dbopsGetRefId,
            data: {
              operation: "update",
              source: se,
              fields: D.fields,
              forcefill: D.forcefill,
              datahash: ae.data.refhash,
              scrid: m?.module_refid
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
            refid: K,
            fields: { blocked: "true" },
            datahash: ae.data.refhash,
            refid1: g?.id
          },
          headers: {
            Authorization: `Bearer ${r.accessToken}`
          }
        }), window.alert("Record deleted successfully."), p((se) => se + 1);
      } catch (O) {
        console.error(O), window.alert("Failed to delete record. Please try again");
      } finally {
        b(null), u(!1);
      }
    }
  }, G = () => {
    b(null), u(!1);
  };
  return /* @__PURE__ */ a.jsx(a.Fragment, { children: o ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    A?.datagrid && /* @__PURE__ */ a.jsx(
      o,
      {
        methods: { ...t, deleteRecord: F, editRecord: j },
        report: {
          ...A,
          source: {
            table: A?.table,
            type: "sql",
            cols: A?.cols,
            where: A?.where,
            orderby: A?.orderby,
            queryid: A?.queryid
          },
          endPoints: r,
          actions: { ...A?.actions, ...m?.buttons, ...m.actions },
          datagrid: A?.datagrid,
          buttons: A?.buttons,
          refresh: T
        },
        onButtonClick: l
      }
    ),
    h && /* @__PURE__ */ a.jsx(
      wn,
      {
        formJson: {
          ...f[y],
          source: {
            ...f?.[y].source,
            refid: E?.id
          },
          endPoints: {
            ...r,
            operation: E ? "update" : "create"
          },
          module_refid: m?.module_refid
        },
        toast: i,
        methods: t,
        initialvalues: E ?? {},
        setEditData: S
      }
    ),
    /* @__PURE__ */ a.jsx(
      Xo,
      {
        open: d,
        onConfirm: M,
        onCancel: G
      }
    )
  ] }) : h && /* @__PURE__ */ a.jsx(
    wn,
    {
      formJson: {
        ...f[y],
        source: {
          ...f?.[y].source,
          refid: E?.id
        },
        endPoints: {
          ...r,
          operation: E ? "update" : "create"
        },
        module_refid: m?.module_refid
      },
      toast: i,
      methods: t,
      initialvalues: E ?? {},
      setEditData: S
    }
  ) });
}
function Rr(e, t) {
  if (!e || !t) return null;
  const n = t[e];
  if (re.isValidElement(n))
    return n;
  if (typeof n == "function") {
    const r = n;
    return /* @__PURE__ */ a.jsx(r, {});
  }
  return null;
}
const vn = ({ groups: e, groupNames: t, setActiveTabIndex: n, activeTabIndex: r }) => /* @__PURE__ */ a.jsx(
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
), ti = ({
  groups: e,
  groupNames: t,
  setActiveTabIndex: n,
  activeTabIndex: r,
  layoutConfig: s,
  showScrollHint: o,
  isCommonInfo: i,
  tabsNavRef: l
}) => {
  const [m, d] = de(!1), u = We(null);
  return ve(() => {
    const g = (b) => {
      u.current && !u.current.contains(b.target) && d(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
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
      /* @__PURE__ */ a.jsxs("div", { className: "relative", ref: u, children: [
        /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => d(!m),
            className: "ml-1 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200",
            children: "⋮"
          }
        ),
        m && /* @__PURE__ */ a.jsx("div", { className: "absolute right-0 mt-2 w-48 max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-30", children: t.map((g, b) => /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              n(b), d(!1);
            },
            className: `w-full text-left px-3 py-2 text-sm truncate hover:bg-gray-100 ${r === b ? "bg-gray-50 font-semibold text-action" : "text-gray-700"}`,
            children: e[g]?.label || g
          },
          g
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
        children: t.length > 0 ? t.map((g, b) => /* @__PURE__ */ a.jsx(
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
            children: /* @__PURE__ */ a.jsx("span", { className: "relative z-10 flex items-center justify-center gap-1 sm:gap-2", children: /* @__PURE__ */ a.jsx("span", { className: "truncate", children: e[g]?.label || g }) })
          },
          g
        )) : /* @__PURE__ */ a.jsx("div", { className: "py-3 px-6 text-sm text-gray-500", children: "No group available" })
      }
    ) })
  ] });
}, An = ({
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
  module_refid: u,
  fieldOptions: g,
  setFieldOptions: b,
  buttons: T,
  handleAction: p,
  components: E
}) => {
  let x = T ? Object.entries(T).filter(([y, h]) => h.groups ? h.groups.includes(e[t]) : !0) : [];
  async function A(y, h) {
    const j = l?.[y];
    if (j) {
      try {
        await j();
      } catch (S) {
        console.error("Method execution failed:", S);
      }
      return;
    }
    p?.({ [y]: h }, s);
  }
  const f = Rr(r?.component, E);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "bg-white rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex-1 flex flex-col min-h-0",
      children: [
        e.length > 0 ? r?.type === "fields" && r?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: n?.fieldGridClass || "grid grid-cols-12 gap-2", children: r.fields.map((y, h) => Ht(y.hidden) ? null : /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${tt[rt(Number(y.width))] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ a.jsx(
              bt,
              {
                field: y,
                data: s ?? {},
                methods: l,
                refid: m,
                sqlOpsUrls: d,
                module_refid: u,
                setFieldOptions: b,
                ...g[y.name] ? { optionsOverride: g[y.name] } : {}
              }
            )
          },
          y?.name ?? `field-${h}`
        )) }) }) : r?.type === "component" && f ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: f }) : r ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: i(r, e[t] || "") }) : null : /* @__PURE__ */ a.jsx("div", { className: "flex-1 col-span-full text-center py-8 text-gray-500", children: "No data available" }),
        /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: x && x.map(([y, h]) => /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => A(y, h),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: h.label
          },
          y
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
              e.slice(0, 5).map((y, h) => /* @__PURE__ */ a.jsx(
                "div",
                {
                  className: `w-2 h-2 rounded-full transition-all duration-300 ${h === t ? "bg-action w-6" : "bg-gray-300"}`
                },
                h
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
          /* @__PURE__ */ a.jsx("div", { className: "flex gap-1", children: e.map((y, h) => /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `w-2 h-2 rounded-full transition-all duration-300 ${h === t ? "bg-action w-6" : "bg-gray-300"}`
            },
            h
          )) })
        ] }) })
      ]
    },
    e[t]
  );
};
function En({
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
  toast: u,
  handleAction: g = () => {
  },
  infoViewJson: b,
  fieldOptions: T,
  setFieldOptions: p,
  components: E
}) {
  const [x, A] = de(0), [f, y] = de(!1), h = We(null), j = Object.keys(e);
  ve(() => {
    const v = () => {
      if (h.current) {
        const K = h.current;
        y(K.scrollWidth > K.clientWidth);
      }
    };
    return v(), window.addEventListener("resize", v), () => window.removeEventListener("resize", v);
  }, [j.length]), ve(() => {
    if (h.current && j.length > 0) {
      const v = h.current.children[x];
      v && v.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [x, j.length]);
  const S = i === "tableft", F = i === "tabright", M = !S && !F, G = e[j[x] ?? ""] || null, O = {
    single: (v, K) => /* @__PURE__ */ a.jsx(Tr, { fieldOptions: T, setFieldOptions: p, module_refid: b.module_refid, tabObj: v, methods: t, tabName: K, sqlOpsUrls: l, refid: m }),
    grid: (v, K) => /* @__PURE__ */ a.jsx(
      Sr,
      {
        ...d ? { Reports: d } : {},
        toast: u,
        handleAction: g,
        tabObj: v,
        methods: t,
        tabName: K,
        sqlOpsUrls: l,
        refid: m,
        infoViewJson: b
      }
    )
  }, C = G?.config?.uimode, D = r[C] || O[C] || (() => /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No UI mode for this type" }));
  return M ? /* @__PURE__ */ a.jsxs("div", { className: "flex-1 flex flex-col min-h-0 ", children: [
    /* @__PURE__ */ a.jsx(
      ti,
      {
        groupNames: j,
        groups: e,
        setActiveTabIndex: A,
        activeTabIndex: x,
        tabsNavRef: h,
        isCommonInfo: s,
        showScrollHint: f,
        layoutConfig: o
      }
    ),
    /* @__PURE__ */ a.jsx(
      An,
      {
        groupNames: j,
        activeTabIndex: x,
        layoutConfig: o,
        tabObj: G,
        infoData: n,
        setActiveTabIndex: A,
        renderView: D,
        groups: e,
        methods: t,
        refid: m,
        sqlOpsUrls: l,
        module_refid: b.module_refid,
        fieldOptions: T,
        setFieldOptions: p,
        buttons: b.buttons,
        handleAction: g,
        ...E ? { components: E } : {}
      }
    )
  ] }) : /* @__PURE__ */ a.jsxs("div", { className: "flex-1 flex min-h-0", children: [
    S && /* @__PURE__ */ a.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ a.jsx(
      vn,
      {
        groupNames: j,
        groups: e,
        setActiveTabIndex: A,
        activeTabIndex: x
      }
    ) }),
    /* @__PURE__ */ a.jsx("main", { className: "flex-1 flex flex-col min-h-0 overflow-auto", children: /* @__PURE__ */ a.jsx(
      An,
      {
        groupNames: j,
        activeTabIndex: x,
        layoutConfig: o,
        tabObj: G,
        infoData: n,
        setActiveTabIndex: A,
        renderView: D,
        groups: e,
        methods: t,
        refid: m,
        module_refid: b.module_refid,
        sqlOpsUrls: l,
        fieldOptions: T,
        setFieldOptions: p,
        handleAction: g,
        ...E ? { components: E } : {}
      }
    ) }),
    F && /* @__PURE__ */ a.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ a.jsx(
      vn,
      {
        groupNames: j,
        groups: e,
        setActiveTabIndex: A,
        activeTabIndex: x
      }
    ) })
  ] });
}
function ri({ title: e, children: t, isFirst: n }) {
  const [r, s] = de(n);
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
function ni({
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
  fieldOptions: u,
  setFieldOptions: g,
  components: b
}) {
  const T = {
    single: (A, f) => /* @__PURE__ */ a.jsx(
      Tr,
      {
        tabObj: A,
        methods: t,
        tabName: f,
        sqlOpsUrls: s,
        fieldOptions: u,
        setFieldOptions: g,
        refid: o,
        module_refid: d?.module_refid
      }
    ),
    grid: (A, f) => /* @__PURE__ */ a.jsx(
      Sr,
      {
        ...i ? { Reports: i } : {},
        toast: l,
        infoViewJson: d,
        handleAction: m,
        tabObj: A,
        methods: t,
        tabName: f,
        sqlOpsUrls: s,
        refid: o
      }
    )
  }, p = d?.buttons;
  let E = p ? Object.entries(p).filter(([A, f]) => !(f.groups && f.groups.length > 0)) : [];
  async function x(A, f) {
    const y = t?.[A];
    if (y) {
      try {
        await y();
      } catch (h) {
        console.error("Method execution failed:", h);
      }
      return;
    }
    m?.({ [A]: f }, n);
  }
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ a.jsx("div", { className: "mx-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "space-y-1 flex flex-col min-h-0", children: [
    e && Object.entries(e).map(([A, f], y) => {
      let h = p ? Object.entries(p).filter(([S, F]) => F.groups ? F.groups.includes(A) : !1) : [];
      const j = Rr(f.component, b);
      return /* @__PURE__ */ a.jsxs(ri, { title: f.label, isFirst: y === 0, children: [
        f?.type === "fields" && f?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: f.fields.map((S, F) => Ht(S.hidden) ? null : /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${tt[rt(Number(S.width))] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ a.jsx(
              bt,
              {
                module_refid: d?.module_refid,
                methods: t,
                field: S,
                data: n ?? {},
                setFieldOptions: g,
                ...u[S.name] ? { optionsOverride: u[S.name] } : {},
                sqlOpsUrls: s,
                refid: o
              }
            )
          },
          S?.name ?? `field-${F}`
        )) }) }) : f?.type === "component" && j ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: j }) : f ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: r[f.config?.uimode]?.(f) || T[f.config?.uimode]?.(f, A) || /* @__PURE__ */ a.jsx("div", { children: "No renderer for this type" }) }) : null,
        /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: h && h.map(([S, F]) => /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => x(S, F),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: F.label
          },
          S
        )) })
      ] }, A);
    }),
    /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: E && E.map(([A, f]) => /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => x(A, f),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: f.label
      },
      A
    )) })
  ] }) }) });
}
function si({ title: e, children: t }) {
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
function ai({
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
  fieldOptions: u,
  setFieldOptions: g,
  components: b
}) {
  const T = {
    single: (A, f) => /* @__PURE__ */ a.jsx(Tr, { fieldOptions: u, setFieldOptions: g, module_refid: d?.module_refid, tabObj: A, methods: t, tabName: f, sqlOpsUrls: s, refid: o }),
    grid: (A, f) => /* @__PURE__ */ a.jsx(
      Sr,
      {
        ...i ? { Reports: i } : {},
        toast: l,
        handleAction: m,
        tabObj: A,
        methods: t,
        tabName: f,
        sqlOpsUrls: s,
        refid: o,
        infoViewJson: d
      }
    )
  }, p = d?.buttons;
  let E = p ? Object.entries(p).filter(([A, f]) => !(f.groups && f.groups.length > 0)) : [];
  async function x(A, f) {
    const y = t?.[A];
    if (y) {
      try {
        await y();
      } catch (h) {
        console.error("Method execution failed:", h);
      }
      return;
    }
    m?.({ [A]: f }, n);
  }
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ a.jsx("div", { className: "mx-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "space-y-2  flex flex-col min-h-0", children: [
    e && Object.entries(e).map(([A, f], y) => {
      let h = p ? Object.entries(p).filter(([S, F]) => F.groups ? F.groups.includes(A) : !1) : [];
      const j = Rr(f.component, b);
      return /* @__PURE__ */ a.jsxs(si, { title: f.label, children: [
        f?.type === "fields" && f?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: f.fields.map((S, F) => Ht(S.hidden) ? null : /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${tt[rt(Number(S.width))] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ a.jsx(
              bt,
              {
                module_refid: d?.module_refid,
                methods: t,
                field: S,
                data: n ?? {},
                setFieldOptions: g,
                ...u[S.name] ? { optionsOverride: u[S.name] } : {},
                sqlOpsUrls: s,
                refid: o
              }
            )
          },
          S?.name ?? `field-${F}`
        )) }) }) : f?.type === "component" && j ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: j }) : f ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: r[f.config?.uimode]?.(f) || T[f.config?.uimode]?.(f, A) || /* @__PURE__ */ a.jsx("div", { children: "No renderer for this type" }) }) : null,
        /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: h && h.map(([S, F]) => /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => x(S, F),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: F.label
          },
          S
        )) })
      ] }, A);
    }),
    /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: E && E.map(([A, f]) => /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => x(A, f),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: f.label
      },
      A
    )) })
  ] }) }) });
}
function Si({
  infoViewJson: e,
  hiddenFields: t = [],
  groupFieldsFn: n = To,
  layoutConfig: r = {},
  viewRenderers: s = {},
  methods: o = {},
  Reports: i,
  toast: l,
  handleAction: m = () => {
  },
  components: d,
  initialvalues: u
}) {
  const [g, b] = re.useState(u ?? {}), T = No(e.infoview ?? {}), p = e.endPoints, E = re.useMemo(
    () => n(e.fields || {}),
    [e.fields, n]
  ), [x, A] = re.useState({}), f = (M, G) => {
    A((O) => ({ ...O, [M]: G }));
  }, y = e?.source?.refid;
  let h = { ...E };
  e.infoview?.groups && (h = { ...h, ...e.infoview.groups }), re.useEffect(() => {
    u && b((M) => ({
      ...M,
      ...u ?? {}
    }));
  }, [u]);
  const j = re.useCallback(
    (M) => {
      M && b((G) => ({
        ...G,
        ...M
      }));
    },
    []
  );
  re.useEffect(() => {
    let M = !1;
    return (async () => {
      const O = e?.source;
      if (!O?.type) {
        M || j({});
        return;
      }
      if (O.type === "method") {
        const C = O.method, D = C ? o[C] : void 0;
        if (D)
          try {
            const v = await D();
            M || j(v || {});
          } catch (v) {
            console.error("Method execution failed:", v), M || j({});
          }
        else
          M || j({});
      }
      if (O.type === "api")
        try {
          const C = {
            method: O.method || "GET",
            url: p?.baseURL + O.endpoint,
            headers: {
              Authorization: `Bearer ${p?.accessToken}`
            },
            ...O.method === "GET" ? { params: { refid: O.refid } } : { data: { refid: O.refid } }
          }, { data: D } = await H(C), v = D?.results?.options ? D?.results?.options : D.data ? D.data : D.results ? D.results : D;
          M || j(v ?? {});
        } catch (C) {
          console.error("API fetch failed:", C), M || j({});
        }
      if (O.type === "sql" && O.refid && O.refid != "0" || O.dbopsid) {
        if (!p) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let C = !1, D;
          O?.dbopsid && (C = !0, D = O?.dbopsid);
          const v = await H({
            method: "GET",
            url: p.baseURL + p.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${p?.accessToken}`
            }
          });
          if (!C) {
            let se = {
              ...O
            };
            O.where && (se = {
              ...O,
              where: Ee(O.where, {
                refid: y
              })
            }), D = (await H({
              method: "POST",
              url: p.baseURL + p.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: se,
                fields: Ft(e.fields ?? {}, p.operation),
                forcefill: e.forcefill,
                datahash: v.data.refhash,
                srcid: e?.module_refid
              },
              headers: {
                Authorization: `Bearer ${p?.accessToken}`
              }
            }))?.data.refid;
          }
          const K = await H({
            method: "POST",
            url: p.baseURL + p.dbopsFetch,
            data: {
              refid: D,
              datahash: v.data.refhash,
              module_refid: e.module_refid
            },
            headers: {
              Authorization: `Bearer ${p?.accessToken}`
            }
          }), ae = es(K) ?? {};
          M || j(ae);
        } catch (C) {
          M || j({}), console.error("API fetch failed:", C);
        }
      }
    })(), () => {
      M = !0;
    };
  }, [
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.url || "",
    JSON.stringify(e?.source?.params || {}),
    JSON.stringify(e?.source?.body || {}),
    JSON.stringify(e?.source?.headers || {})
  ]);
  const S = h.common || null;
  S && delete h.common;
  const F = (M) => {
    switch (M) {
      case "accordion":
        return /* @__PURE__ */ a.jsx(
          ni,
          {
            groups: h,
            methods: o,
            infoData: g,
            viewRenderers: s,
            sqlOpsUrls: p,
            refid: y,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: m,
            infoViewJson: e,
            setFieldOptions: f,
            fieldOptions: x,
            ...d ? { components: d } : {}
          }
        );
      case "tab":
      case "tableft":
      case "tabright":
        return /* @__PURE__ */ a.jsx(
          En,
          {
            groups: h,
            viewRenderers: s,
            layoutConfig: r,
            methods: o,
            infoData: g,
            isCommonInfo: !!S,
            viewMode: M,
            sqlOpsUrls: p,
            refid: y,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: m,
            infoViewJson: e,
            setFieldOptions: f,
            fieldOptions: x,
            ...d ? { components: d } : {}
          }
        );
      case "cards":
        return /* @__PURE__ */ a.jsx(
          ai,
          {
            groups: h,
            viewRenderers: s,
            methods: o,
            infoData: g,
            sqlOpsUrls: p,
            refid: y,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: m,
            infoViewJson: e,
            setFieldOptions: f,
            fieldOptions: x,
            ...d ? { components: d } : {}
          }
        );
      default:
        return /* @__PURE__ */ a.jsx(
          En,
          {
            groups: h,
            viewRenderers: s,
            layoutConfig: r,
            methods: o,
            infoData: g,
            isCommonInfo: !!S,
            viewMode: M,
            sqlOpsUrls: p,
            refid: y,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: m,
            infoViewJson: e,
            setFieldOptions: f,
            fieldOptions: x,
            ...d ? { components: d } : {}
          }
        );
    }
  };
  return /* @__PURE__ */ a.jsxs("div", { className: r.containerClass || "h-screen flex flex-col ", children: [
    S && p && /* @__PURE__ */ a.jsx(
      Yo,
      {
        commonInfo: S,
        infoData: g,
        hiddenFields: t,
        sqlOpsUrls: p,
        setFieldOptions: f,
        fieldOptions: x,
        module_refid: e.module_refid,
        refid: y,
        methods: o
      }
    ),
    F(T)
  ] });
}
export {
  Si as InfoView
};
