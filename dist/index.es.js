import re, { useState as ce, useEffect as ve, useMemo as Rt, useRef as We, useLayoutEffect as ps } from "react";
import * as Re from "yup";
import { useFormik as hs } from "formik";
import { createPortal as gs } from "react-dom";
var jt = { exports: {} }, at = {};
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
function ys() {
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
function xs() {
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
        case b:
          return "StrictMode";
        case T:
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
          case x:
            return (N.displayName || "Context") + ".Provider";
          case f:
            return (N._context.displayName || "Context") + ".Consumer";
          case h:
            var $ = N.render;
            return N = N.displayName, N || (N = $.displayName || $.name || "", N = N !== "" ? "ForwardRef(" + N + ")" : "ForwardRef"), N;
          case F:
            return $ = N.displayName || null, $ !== null ? $ : e(N.type) || "Memo";
          case k:
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
      if (typeof N == "object" && N !== null && N.$$typeof === k)
        return "<...>";
      try {
        var $ = e(N);
        return $ ? "<" + $ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var N = _.A;
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
    function d(N, $, J, X, me, R, L, I) {
      return J = R.ref, N = {
        $$typeof: j,
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
        value: I
      }), Object.freeze && (Object.freeze(N.props), Object.freeze(N)), N;
    }
    function c(N, $, J, X, me, R, L, I) {
      var P = $.children;
      if (P !== void 0)
        if (X)
          if (v(P)) {
            for (X = 0; X < P.length; X++)
              g(P[X]);
            Object.freeze && Object.freeze(P);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(P);
      if (D.call($, "key")) {
        P = e(N);
        var Y = Object.keys($).filter(function(M) {
          return M !== "key";
        });
        X = 0 < Y.length ? "{key: someKey, " + Y.join(": ..., ") + ": ...}" : "{key: someKey}", Pe[P + X] || (Y = 0 < Y.length ? "{" + Y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          X,
          P,
          Y,
          P
        ), Pe[P + X] = !0);
      }
      if (P = null, J !== void 0 && (n(J), P = "" + J), i($) && (n($.key), P = "" + $.key), "key" in $) {
        J = {};
        for (var ee in $)
          ee !== "key" && (J[ee] = $[ee]);
      } else J = $;
      return P && l(
        J,
        typeof N == "function" ? N.displayName || N.name || "Unknown" : N
      ), d(
        N,
        P,
        R,
        me,
        s(),
        J,
        L,
        I
      );
    }
    function g(N) {
      typeof N == "object" && N !== null && N.$$typeof === j && N._store && (N._store.validated = 1);
    }
    var y = re, j = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), x = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), G = Symbol.for("react.activity"), O = Symbol.for("react.client.reference"), _ = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.prototype.hasOwnProperty, v = Array.isArray, K = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      react_stack_bottom_frame: function(N) {
        return N();
      }
    };
    var ae, se = {}, ue = y.react_stack_bottom_frame.bind(
      y,
      o
    )(), ie = K(r(o)), Pe = {};
    ot.Fragment = E, ot.jsx = function(N, $, J, X, me) {
      var R = 1e4 > _.recentlyCreatedOwnerStacks++;
      return c(
        N,
        $,
        J,
        !1,
        X,
        me,
        R ? Error("react-stack-top-frame") : ue,
        R ? K(r(N)) : ie
      );
    }, ot.jsxs = function(N, $, J, X, me) {
      var R = 1e4 > _.recentlyCreatedOwnerStacks++;
      return c(
        N,
        $,
        J,
        !0,
        X,
        me,
        R ? Error("react-stack-top-frame") : ue,
        R ? K(r(N)) : ie
      );
    };
  }()), ot;
}
var qr;
function bs() {
  return qr || (qr = 1, process.env.NODE_ENV === "production" ? jt.exports = ys() : jt.exports = xs()), jt.exports;
}
var a = bs();
function Nn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: ws } = Object.prototype, { getPrototypeOf: vr } = Object, { iterator: kt, toStringTag: jn } = Symbol, Mt = /* @__PURE__ */ ((e) => (t) => {
  const n = ws.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Le = (e) => (e = e.toLowerCase(), (t) => Mt(t) === e), $t = (e) => (t) => typeof t === e, { isArray: Je } = Array, pt = $t("undefined");
function ht(e) {
  return e !== null && !pt(e) && e.constructor !== null && !pt(e.constructor) && Ne(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Tn = Le("ArrayBuffer");
function vs(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Tn(e.buffer), t;
}
const As = $t("string"), Ne = $t("function"), Sn = $t("number"), gt = (e) => e !== null && typeof e == "object", Es = (e) => e === !0 || e === !1, _t = (e) => {
  if (Mt(e) !== "object")
    return !1;
  const t = vr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(jn in e) && !(kt in e);
}, Ns = (e) => {
  if (!gt(e) || ht(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, js = Le("Date"), Ts = Le("File"), Ss = Le("Blob"), Rs = Le("FileList"), _s = (e) => gt(e) && Ne(e.pipe), Cs = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Ne(e.append) && ((t = Mt(e)) === "formdata" || // detect form-data instance
  t === "object" && Ne(e.toString) && e.toString() === "[object FormData]"));
}, Os = Le("URLSearchParams"), [Ls, Ps, Is, Ds] = ["ReadableStream", "Request", "Response", "Headers"].map(Le), Fs = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
const ks = (e, t, n, { allOwnKeys: r } = {}) => (yt(t, (s, o) => {
  n && Ne(s) ? e[o] = Nn(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), Ms = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), $s = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Bs = (e, t, n, r) => {
  let s, o, i;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && vr(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, zs = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Us = (e) => {
  if (!e) return null;
  if (Je(e)) return e;
  let t = e.length;
  if (!Sn(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Hs = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && vr(Uint8Array)), Gs = (e, t) => {
  const r = (e && e[kt]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Ws = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, qs = Le("HTMLFormElement"), Ks = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Kr = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Vs = Le("RegExp"), Cn = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  yt(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, Ys = (e) => {
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
}, Xs = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return Je(e) ? r(e) : r(String(e).split(t)), n;
}, Qs = () => {
}, Zs = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Js(e) {
  return !!(e && Ne(e.append) && e[jn] === "FormData" && e[kt]);
}
const ea = (e) => {
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
}, ta = Le("AsyncFunction"), ra = (e) => e && (gt(e) || Ne(e)) && Ne(e.then) && Ne(e.catch), On = ((e, t) => e ? setImmediate : t ? ((n, r) => (Ge.addEventListener("message", ({ source: s, data: o }) => {
  s === Ge && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), Ge.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  Ne(Ge.postMessage)
), na = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ge) : typeof process < "u" && process.nextTick || On, sa = (e) => e != null && Ne(e[kt]), w = {
  isArray: Je,
  isArrayBuffer: Tn,
  isBuffer: ht,
  isFormData: Cs,
  isArrayBufferView: vs,
  isString: As,
  isNumber: Sn,
  isBoolean: Es,
  isObject: gt,
  isPlainObject: _t,
  isEmptyObject: Ns,
  isReadableStream: Ls,
  isRequest: Ps,
  isResponse: Is,
  isHeaders: Ds,
  isUndefined: pt,
  isDate: js,
  isFile: Ts,
  isBlob: Ss,
  isRegExp: Vs,
  isFunction: Ne,
  isStream: _s,
  isURLSearchParams: Os,
  isTypedArray: Hs,
  isFileList: Rs,
  forEach: yt,
  merge: fr,
  extend: ks,
  trim: Fs,
  stripBOM: Ms,
  inherits: $s,
  toFlatObject: Bs,
  kindOf: Mt,
  kindOfTest: Le,
  endsWith: zs,
  toArray: Us,
  forEachEntry: Gs,
  matchAll: Ws,
  isHTMLForm: qs,
  hasOwnProperty: Kr,
  hasOwnProp: Kr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Cn,
  freezeMethods: Ys,
  toObjectSet: Xs,
  toCamelCase: Ks,
  noop: Qs,
  toFiniteNumber: Zs,
  findKey: Rn,
  global: Ge,
  isContextDefined: _n,
  isSpecCompliantForm: Js,
  toJSONObject: ea,
  isAsyncFn: ta,
  isThenable: ra,
  setImmediate: On,
  asap: na,
  isIterable: sa
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
const Ln = V.prototype, Pn = {};
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
  Pn[e] = { value: e };
});
Object.defineProperties(V, Pn);
Object.defineProperty(Ln, "isAxiosError", { value: !0 });
V.from = (e, t, n, r, s, o) => {
  const i = Object.create(Ln);
  return w.toFlatObject(e, i, function(m) {
    return m !== Error.prototype;
  }, (l) => l !== "isAxiosError"), V.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const aa = null;
function mr(e) {
  return w.isPlainObject(e) || w.isArray(e);
}
function In(e) {
  return w.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Vr(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = In(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function oa(e) {
  return w.isArray(e) && !e.some(mr);
}
const ia = w.toFlatObject(w, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Bt(e, t, n) {
  if (!w.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = w.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(E, b) {
    return !w.isUndefined(b[E]);
  });
  const r = n.metaTokens, s = n.visitor || c, o = n.dots, i = n.indexes, m = (n.Blob || typeof Blob < "u" && Blob) && w.isSpecCompliantForm(t);
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
  function c(p, E, b) {
    let A = p;
    if (p && !b && typeof p == "object") {
      if (w.endsWith(E, "{}"))
        E = r ? E : E.slice(0, -2), p = JSON.stringify(p);
      else if (w.isArray(p) && oa(p) || (w.isFileList(p) || w.endsWith(E, "[]")) && (A = w.toArray(p)))
        return E = In(E), A.forEach(function(x, h) {
          !(w.isUndefined(x) || x === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Vr([E], h, o) : i === null ? E : E + "[]",
            d(x)
          );
        }), !1;
    }
    return mr(p) ? !0 : (t.append(Vr(b, E, o), d(p)), !1);
  }
  const g = [], y = Object.assign(ia, {
    defaultVisitor: c,
    convertValue: d,
    isVisitable: mr
  });
  function j(p, E) {
    if (!w.isUndefined(p)) {
      if (g.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + E.join("."));
      g.push(p), w.forEach(p, function(A, f) {
        (!(w.isUndefined(A) || A === null) && s.call(
          t,
          A,
          w.isString(f) ? f.trim() : f,
          E,
          y
        )) === !0 && j(A, E ? E.concat(f) : [f]);
      }), g.pop();
    }
  }
  if (!w.isObject(e))
    throw new TypeError("data must be an object");
  return j(e), t;
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
const Dn = Ar.prototype;
Dn.append = function(t, n) {
  this._pairs.push([t, n]);
};
Dn.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Yr);
  } : Yr;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function la(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Fn(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || la;
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
}, ca = typeof URLSearchParams < "u" ? URLSearchParams : Ar, ua = typeof FormData < "u" ? FormData : null, da = typeof Blob < "u" ? Blob : null, fa = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ca,
    FormData: ua,
    Blob: da
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Er = typeof window < "u" && typeof document < "u", pr = typeof navigator == "object" && navigator || void 0, ma = Er && (!pr || ["ReactNative", "NativeScript", "NS"].indexOf(pr.product) < 0), pa = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ha = Er && window.location.href || "http://localhost", ga = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Er,
  hasStandardBrowserEnv: ma,
  hasStandardBrowserWebWorkerEnv: pa,
  navigator: pr,
  origin: ha
}, Symbol.toStringTag, { value: "Module" })), he = {
  ...ga,
  ...fa
};
function ya(e, t) {
  return Bt(e, new he.classes.URLSearchParams(), {
    visitor: function(n, r, s, o) {
      return he.isNode && w.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function xa(e) {
  return w.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function ba(e) {
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
    return i = !i && w.isArray(s) ? s.length : i, m ? (w.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !l) : ((!s[i] || !w.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && w.isArray(s[i]) && (s[i] = ba(s[i])), !l);
  }
  if (w.isFormData(e) && w.isFunction(e.entries)) {
    const n = {};
    return w.forEachEntry(e, (r, s) => {
      t(xa(r), s, n, 0);
    }), n;
  }
  return null;
}
function wa(e, t, n) {
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
        return ya(t, this.formSerializer).toString();
      if ((l = w.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const m = this.env && this.env.FormData;
        return Bt(
          l ? { "files[]": t } : t,
          m && new m(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), wa(t)) : t;
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
const va = w.toObjectSet([
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
]), Aa = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && va[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Qr = Symbol("internals");
function it(e) {
  return e && String(e).trim().toLowerCase();
}
function Ct(e) {
  return e === !1 || e == null ? e : w.isArray(e) ? e.map(Ct) : String(e);
}
function Ea(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Na = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
function Ta(e, t) {
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
let je = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(l, m, d) {
      const c = it(m);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const g = w.findKey(s, c);
      (!g || s[g] === void 0 || d === !0 || d === void 0 && s[g] !== !1) && (s[g || m] = Ct(l));
    }
    const i = (l, m) => w.forEach(l, (d, c) => o(d, c, m));
    if (w.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (w.isString(t) && (t = t.trim()) && !Na(t))
      i(Aa(t), n);
    else if (w.isObject(t) && w.isIterable(t)) {
      let l = {}, m, d;
      for (const c of t) {
        if (!w.isArray(c))
          throw TypeError("Object iterator must return a key-value pair");
        l[d = c[0]] = (m = l[d]) ? w.isArray(m) ? [...m, c[1]] : [m, c[1]] : c[1];
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
          return Ea(s);
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
      r[l] || (Ta(s, i), r[l] = !0);
    }
    return w.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
je.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
w.reduceDescriptors(je.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
w.freezeMethods(je);
function er(e, t) {
  const n = this || xt, r = t || n, s = je.from(r.headers);
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
function Sa(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Ra(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(m) {
    const d = Date.now(), c = r[o];
    i || (i = d), n[s] = m, r[s] = d;
    let g = o, y = 0;
    for (; g !== s; )
      y += n[g++], g = g % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), d - i < t)
      return;
    const j = c && d - c;
    return j ? Math.round(y * 1e3 / j) : void 0;
  };
}
function _a(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const i = (d, c = Date.now()) => {
    n = c, s = null, o && (clearTimeout(o), o = null), e(...d);
  };
  return [(...d) => {
    const c = Date.now(), g = c - n;
    g >= r ? i(d, c) : (s = d, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - g)));
  }, () => s && i(s)];
}
const Pt = (e, t, n = 3) => {
  let r = 0;
  const s = Ra(50, 250);
  return _a((o) => {
    const i = o.loaded, l = o.lengthComputable ? o.total : void 0, m = i - r, d = s(m), c = i <= l;
    r = i;
    const g = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: m,
      rate: d || void 0,
      estimated: d && l && c ? (l - i) / d : void 0,
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
}, Jr = (e) => (...t) => w.asap(() => e(...t)), Ca = he.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, he.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(he.origin),
  he.navigator && /(msie|trident)/i.test(he.navigator.userAgent)
) : () => !0, Oa = he.hasStandardBrowserEnv ? (
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
function La(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Pa(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function zn(e, t, n) {
  let r = !La(t);
  return e && (r || n == !1) ? Pa(e, t) : t;
}
const en = (e) => e instanceof je ? { ...e } : e;
function Ke(e, t) {
  t = t || {};
  const n = {};
  function r(d, c, g, y) {
    return w.isPlainObject(d) && w.isPlainObject(c) ? w.merge.call({ caseless: y }, d, c) : w.isPlainObject(c) ? w.merge({}, c) : w.isArray(c) ? c.slice() : c;
  }
  function s(d, c, g, y) {
    if (w.isUndefined(c)) {
      if (!w.isUndefined(d))
        return r(void 0, d, g, y);
    } else return r(d, c, g, y);
  }
  function o(d, c) {
    if (!w.isUndefined(c))
      return r(void 0, c);
  }
  function i(d, c) {
    if (w.isUndefined(c)) {
      if (!w.isUndefined(d))
        return r(void 0, d);
    } else return r(void 0, c);
  }
  function l(d, c, g) {
    if (g in t)
      return r(d, c);
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
    headers: (d, c, g) => s(en(d), en(c), g, !0)
  };
  return w.forEach(Object.keys({ ...e, ...t }), function(c) {
    const g = m[c] || s, y = g(e[c], t[c], c);
    w.isUndefined(y) && g !== l || (n[c] = y);
  }), n;
}
const Un = (e) => {
  const t = Ke({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: l } = t;
  t.headers = i = je.from(i), t.url = Fn(zn(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), l && i.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let m;
  if (w.isFormData(n)) {
    if (he.hasStandardBrowserEnv || he.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((m = i.getContentType()) !== !1) {
      const [d, ...c] = m ? m.split(";").map((g) => g.trim()).filter(Boolean) : [];
      i.setContentType([d || "multipart/form-data", ...c].join("; "));
    }
  }
  if (he.hasStandardBrowserEnv && (r && w.isFunction(r) && (r = r(t)), r || r !== !1 && Ca(t.url))) {
    const d = s && o && Oa.read(o);
    d && i.set(s, d);
  }
  return t;
}, Ia = typeof XMLHttpRequest < "u", Da = Ia && function(e) {
  return new Promise(function(n, r) {
    const s = Un(e);
    let o = s.data;
    const i = je.from(s.headers).normalize();
    let { responseType: l, onUploadProgress: m, onDownloadProgress: d } = s, c, g, y, j, p;
    function E() {
      j && j(), p && p(), s.cancelToken && s.cancelToken.unsubscribe(c), s.signal && s.signal.removeEventListener("abort", c);
    }
    let b = new XMLHttpRequest();
    b.open(s.method.toUpperCase(), s.url, !0), b.timeout = s.timeout;
    function A() {
      if (!b)
        return;
      const x = je.from(
        "getAllResponseHeaders" in b && b.getAllResponseHeaders()
      ), T = {
        data: !l || l === "text" || l === "json" ? b.responseText : b.response,
        status: b.status,
        statusText: b.statusText,
        headers: x,
        config: e,
        request: b
      };
      Bn(function(F) {
        n(F), E();
      }, function(F) {
        r(F), E();
      }, T), b = null;
    }
    "onloadend" in b ? b.onloadend = A : b.onreadystatechange = function() {
      !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.indexOf("file:") === 0) || setTimeout(A);
    }, b.onabort = function() {
      b && (r(new V("Request aborted", V.ECONNABORTED, e, b)), b = null);
    }, b.onerror = function() {
      r(new V("Network Error", V.ERR_NETWORK, e, b)), b = null;
    }, b.ontimeout = function() {
      let h = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const T = s.transitional || kn;
      s.timeoutErrorMessage && (h = s.timeoutErrorMessage), r(new V(
        h,
        T.clarifyTimeoutError ? V.ETIMEDOUT : V.ECONNABORTED,
        e,
        b
      )), b = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in b && w.forEach(i.toJSON(), function(h, T) {
      b.setRequestHeader(T, h);
    }), w.isUndefined(s.withCredentials) || (b.withCredentials = !!s.withCredentials), l && l !== "json" && (b.responseType = s.responseType), d && ([y, p] = Pt(d, !0), b.addEventListener("progress", y)), m && b.upload && ([g, j] = Pt(m), b.upload.addEventListener("progress", g), b.upload.addEventListener("loadend", j)), (s.cancelToken || s.signal) && (c = (x) => {
      b && (r(!x || x.type ? new et(null, e, b) : x), b.abort(), b = null);
    }, s.cancelToken && s.cancelToken.subscribe(c), s.signal && (s.signal.aborted ? c() : s.signal.addEventListener("abort", c)));
    const f = Sa(s.url);
    if (f && he.protocols.indexOf(f) === -1) {
      r(new V("Unsupported protocol " + f + ":", V.ERR_BAD_REQUEST, e));
      return;
    }
    b.send(o || null);
  });
}, Fa = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const o = function(d) {
      if (!s) {
        s = !0, l();
        const c = d instanceof Error ? d : this.reason;
        r.abort(c instanceof V ? c : new et(c instanceof Error ? c.message : c));
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
}, ka = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, Ma = async function* (e, t) {
  for await (const n of $a(e))
    yield* ka(n, t);
}, $a = async function* (e) {
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
  const s = Ma(e, t);
  let o = 0, i, l = (m) => {
    i || (i = !0, r && r(m));
  };
  return new ReadableStream({
    async pull(m) {
      try {
        const { done: d, value: c } = await s.next();
        if (d) {
          l(), m.close();
          return;
        }
        let g = c.byteLength;
        if (n) {
          let y = o += g;
          n(y);
        }
        m.enqueue(new Uint8Array(c));
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
}, zt = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Hn = zt && typeof ReadableStream == "function", Ba = zt && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Gn = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, za = Hn && Gn(() => {
  let e = !1;
  const t = new Request(he.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), rn = 64 * 1024, hr = Hn && Gn(() => w.isReadableStream(new Response("").body)), It = {
  stream: hr && ((e) => e.body)
};
zt && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !It[t] && (It[t] = w.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new V(`Response type '${t}' is not supported`, V.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Ua = async (e) => {
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
    return (await Ba(e)).byteLength;
}, Ha = async (e, t) => {
  const n = w.toFiniteNumber(e.getContentLength());
  return n ?? Ua(t);
}, Ga = zt && (async (e) => {
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
    headers: c,
    withCredentials: g = "same-origin",
    fetchOptions: y
  } = Un(e);
  d = d ? (d + "").toLowerCase() : "text";
  let j = Fa([s, o && o.toAbortSignal()], i), p;
  const E = j && j.unsubscribe && (() => {
    j.unsubscribe();
  });
  let b;
  try {
    if (m && za && n !== "get" && n !== "head" && (b = await Ha(c, r)) !== 0) {
      let T = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), S;
      if (w.isFormData(r) && (S = T.headers.get("content-type")) && c.setContentType(S), T.body) {
        const [F, k] = Zr(
          b,
          Pt(Jr(m))
        );
        r = tn(T.body, rn, F, k);
      }
    }
    w.isString(g) || (g = g ? "include" : "omit");
    const A = "credentials" in Request.prototype;
    p = new Request(t, {
      ...y,
      signal: j,
      method: n.toUpperCase(),
      headers: c.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: A ? g : void 0
    });
    let f = await fetch(p, y);
    const x = hr && (d === "stream" || d === "response");
    if (hr && (l || x && E)) {
      const T = {};
      ["status", "statusText", "headers"].forEach((G) => {
        T[G] = f[G];
      });
      const S = w.toFiniteNumber(f.headers.get("content-length")), [F, k] = l && Zr(
        S,
        Pt(Jr(l), !0)
      ) || [];
      f = new Response(
        tn(f.body, rn, F, () => {
          k && k(), E && E();
        }),
        T
      );
    }
    d = d || "text";
    let h = await It[w.findKey(It, d) || "text"](f, e);
    return !x && E && E(), await new Promise((T, S) => {
      Bn(T, S, {
        data: h,
        headers: je.from(f.headers),
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
  http: aa,
  xhr: Da,
  fetch: Ga
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
const nn = (e) => `- ${e}`, Wa = (e) => w.isFunction(e) || e === null || e === !1, Wn = {
  getAdapter: (e) => {
    e = w.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !Wa(n) && (r = gr[(i = String(n)).toLowerCase()], r === void 0))
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
  return tr(e), e.headers = je.from(e.headers), e.data = er.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Wn.getAdapter(e.adapter || xt.adapter)(e).then(function(r) {
    return tr(e), r.data = er.call(
      e,
      e.transformResponse,
      r
    ), r.headers = je.from(r.headers), r;
  }, function(r) {
    return $n(r) || (tr(e), r && r.response && (r.response.data = er.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = je.from(r.response.headers))), Promise.reject(r);
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
function qa(e, t, n) {
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
  assertOptions: qa,
  validators: Ut
}, Fe = Ot.validators;
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
      silentJSONParsing: Fe.transitional(Fe.boolean),
      forcedJSONParsing: Fe.transitional(Fe.boolean),
      clarifyTimeoutError: Fe.transitional(Fe.boolean)
    }, !1), s != null && (w.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Ot.assertOptions(s, {
      encode: Fe.function,
      serialize: Fe.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Ot.assertOptions(n, {
      baseUrl: Fe.spelling("baseURL"),
      withXsrfToken: Fe.spelling("withXSRFToken")
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
    ), n.headers = je.concat(i, o);
    const l = [];
    let m = !0;
    this.interceptors.request.forEach(function(E) {
      typeof E.runWhen == "function" && E.runWhen(n) === !1 || (m = m && E.synchronous, l.unshift(E.fulfilled, E.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function(E) {
      d.push(E.fulfilled, E.rejected);
    });
    let c, g = 0, y;
    if (!m) {
      const p = [sn.bind(this), void 0];
      for (p.unshift(...l), p.push(...d), y = p.length, c = Promise.resolve(n); g < y; )
        c = c.then(p[g++], p[g++]);
      return c;
    }
    y = l.length;
    let j = n;
    for (g = 0; g < y; ) {
      const p = l[g++], E = l[g++];
      try {
        j = p(j);
      } catch (b) {
        E.call(this, b);
        break;
      }
    }
    try {
      c = sn.call(this, j);
    } catch (p) {
      return Promise.reject(p);
    }
    for (g = 0, y = d.length; g < y; )
      c = c.then(d[g++], d[g++]);
    return c;
  }
  getUri(t) {
    t = Ke(this.defaults, t);
    const n = zn(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Fn(n, t.params, t.paramsSerializer);
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
let Ka = class Kn {
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
function Va(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Ya(e) {
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
H.CancelToken = Ka;
H.isCancel = $n;
H.VERSION = qn;
H.toFormData = Bt;
H.AxiosError = V;
H.Cancel = H.CanceledError;
H.all = function(t) {
  return Promise.all(t);
};
H.spread = Va;
H.isAxiosError = Ya;
H.mergeConfig = Ke;
H.AxiosHeaders = je;
H.formToJSON = (e) => Mn(w.isHTMLForm(e) ? new FormData(e) : e);
H.getAdapter = Wn.getAdapter;
H.HttpStatusCode = yr;
H.default = H;
const {
  Axios: fi,
  AxiosError: mi,
  CanceledError: pi,
  isCancel: hi,
  CancelToken: gi,
  VERSION: yi,
  all: xi,
  Cancel: bi,
  isAxiosError: wi,
  spread: vi,
  toFormData: Ai,
  AxiosHeaders: Ei,
  HttpStatusCode: Ni,
  formToJSON: ji,
  getAdapter: Ti,
  mergeConfig: Si
} = H;
/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */
const {
  entries: Yn,
  setPrototypeOf: on,
  isFrozen: Xa,
  getPrototypeOf: Qa,
  getOwnPropertyDescriptor: Za
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
const Tt = xe(Array.prototype.forEach), Ja = xe(Array.prototype.lastIndexOf), ln = xe(Array.prototype.pop), lt = xe(Array.prototype.push), eo = xe(Array.prototype.splice), Lt = xe(String.prototype.toLowerCase), rr = xe(String.prototype.toString), nr = xe(String.prototype.match), ct = xe(String.prototype.replace), to = xe(String.prototype.indexOf), ro = xe(String.prototype.trim), Ce = xe(Object.prototype.hasOwnProperty), ge = xe(RegExp.prototype.test), ut = no(TypeError);
function xe(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    return br(e, t, r);
  };
}
function no(e) {
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
      o !== s && (Xa(t) || (t[r] = o), s = o);
    }
    e[s] = !0;
  }
  return e;
}
function so(e) {
  for (let t = 0; t < e.length; t++)
    Ce(e, t) || (e[t] = null);
  return e;
}
function ke(e) {
  const t = xr(null);
  for (const [n, r] of Yn(e))
    Ce(e, n) && (Array.isArray(r) ? t[n] = so(r) : r && typeof r == "object" && r.constructor === Object ? t[n] = ke(r) : t[n] = r);
  return t;
}
function dt(e, t) {
  for (; e !== null; ) {
    const r = Za(e, t);
    if (r) {
      if (r.get)
        return xe(r.get);
      if (typeof r.value == "function")
        return xe(r.value);
    }
    e = Qa(e);
  }
  function n() {
    return null;
  }
  return n;
}
const cn = ye(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), sr = ye(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ar = ye(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), ao = ye(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), or = ye(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), oo = ye(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), un = ye(["#text"]), dn = ye(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ir = ye(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), fn = ye(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), St = ye(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), io = _e(/\{\{[\w\W]*|[\w\W]*\}\}/gm), lo = _e(/<%[\w\W]*|[\w\W]*%>/gm), co = _e(/\$\{[\w\W]*/gm), uo = _e(/^data-[\-\w.\u00B7-\uFFFF]+$/), fo = _e(/^aria-[\-\w]+$/), Xn = _e(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), mo = _e(/^(?:\w+script|data):/i), po = _e(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Qn = _e(/^html$/i), ho = _e(/^[a-z][.\w]*(-[.\w]+)+$/i);
var mn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: fo,
  ATTR_WHITESPACE: po,
  CUSTOM_ELEMENT: ho,
  DATA_ATTR: uo,
  DOCTYPE_NAME: Qn,
  ERB_EXPR: lo,
  IS_ALLOWED_URI: Xn,
  IS_SCRIPT_OR_DATA: mo,
  MUSTACHE_EXPR: io,
  TMPLIT_EXPR: co
});
const ft = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, go = function() {
  return typeof window > "u" ? null : window;
}, yo = function(t, n) {
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
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : go();
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
    NamedNodeMap: c = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: g,
    DOMParser: y,
    trustedTypes: j
  } = e, p = m.prototype, E = dt(p, "cloneNode"), b = dt(p, "remove"), A = dt(p, "nextSibling"), f = dt(p, "childNodes"), x = dt(p, "parentNode");
  if (typeof i == "function") {
    const U = n.createElement("template");
    U.content && U.content.ownerDocument && (n = U.content.ownerDocument);
  }
  let h, T = "";
  const {
    implementation: S,
    createNodeIterator: F,
    createDocumentFragment: k,
    getElementsByTagName: G
  } = n, {
    importNode: O
  } = r;
  let _ = pn();
  t.isSupported = typeof Yn == "function" && typeof x == "function" && S && S.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: D,
    ERB_EXPR: v,
    TMPLIT_EXPR: K,
    DATA_ATTR: ae,
    ARIA_ATTR: se,
    IS_SCRIPT_OR_DATA: ue,
    ATTR_WHITESPACE: ie,
    CUSTOM_ELEMENT: Pe
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
  })), L = null, I = null;
  const P = Object.seal(xr(null, {
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
  let Y = !0, ee = !0, M = !1, z = !0, W = !1, q = !0, Z = !1, de = !1, te = !1, be = !1, Te = !1, Se = !1, wt = !0, ze = !1;
  const Gt = "user-content-";
  let Wt = !0, nt = !1, Ve = {}, Ie = null;
  const qt = Q({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let _r = null;
  const Cr = Q({}, ["audio", "video", "img", "source", "image", "track"]);
  let Kt = null;
  const Or = Q({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), vt = "http://www.w3.org/1998/Math/MathML", At = "http://www.w3.org/2000/svg", Me = "http://www.w3.org/1999/xhtml";
  let Ye = Me, Vt = !1, Yt = null;
  const is = Q({}, [vt, At, Me], rr);
  let Et = Q({}, ["mi", "mo", "mn", "ms", "mtext"]), Nt = Q({}, ["annotation-xml"]);
  const ls = Q({}, ["title", "style", "font", "a", "script"]);
  let st = null;
  const cs = ["application/xhtml+xml", "text/html"], us = "text/html";
  let le = null, Xe = null;
  const ds = n.createElement("form"), Lr = function(u) {
    return u instanceof RegExp || u instanceof Function;
  }, Xt = function() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Xe && Xe === u)) {
      if ((!u || typeof u != "object") && (u = {}), u = ke(u), st = // eslint-disable-next-line unicorn/prefer-includes
      cs.indexOf(u.PARSER_MEDIA_TYPE) === -1 ? us : u.PARSER_MEDIA_TYPE, le = st === "application/xhtml+xml" ? rr : Lt, $ = Ce(u, "ALLOWED_TAGS") ? Q({}, u.ALLOWED_TAGS, le) : J, X = Ce(u, "ALLOWED_ATTR") ? Q({}, u.ALLOWED_ATTR, le) : me, Yt = Ce(u, "ALLOWED_NAMESPACES") ? Q({}, u.ALLOWED_NAMESPACES, rr) : is, Kt = Ce(u, "ADD_URI_SAFE_ATTR") ? Q(ke(Or), u.ADD_URI_SAFE_ATTR, le) : Or, _r = Ce(u, "ADD_DATA_URI_TAGS") ? Q(ke(Cr), u.ADD_DATA_URI_TAGS, le) : Cr, Ie = Ce(u, "FORBID_CONTENTS") ? Q({}, u.FORBID_CONTENTS, le) : qt, L = Ce(u, "FORBID_TAGS") ? Q({}, u.FORBID_TAGS, le) : ke({}), I = Ce(u, "FORBID_ATTR") ? Q({}, u.FORBID_ATTR, le) : ke({}), Ve = Ce(u, "USE_PROFILES") ? u.USE_PROFILES : !1, Y = u.ALLOW_ARIA_ATTR !== !1, ee = u.ALLOW_DATA_ATTR !== !1, M = u.ALLOW_UNKNOWN_PROTOCOLS || !1, z = u.ALLOW_SELF_CLOSE_IN_ATTR !== !1, W = u.SAFE_FOR_TEMPLATES || !1, q = u.SAFE_FOR_XML !== !1, Z = u.WHOLE_DOCUMENT || !1, be = u.RETURN_DOM || !1, Te = u.RETURN_DOM_FRAGMENT || !1, Se = u.RETURN_TRUSTED_TYPE || !1, te = u.FORCE_BODY || !1, wt = u.SANITIZE_DOM !== !1, ze = u.SANITIZE_NAMED_PROPS || !1, Wt = u.KEEP_CONTENT !== !1, nt = u.IN_PLACE || !1, N = u.ALLOWED_URI_REGEXP || Xn, Ye = u.NAMESPACE || Me, Et = u.MATHML_TEXT_INTEGRATION_POINTS || Et, Nt = u.HTML_INTEGRATION_POINTS || Nt, R = u.CUSTOM_ELEMENT_HANDLING || {}, u.CUSTOM_ELEMENT_HANDLING && Lr(u.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (R.tagNameCheck = u.CUSTOM_ELEMENT_HANDLING.tagNameCheck), u.CUSTOM_ELEMENT_HANDLING && Lr(u.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (R.attributeNameCheck = u.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), u.CUSTOM_ELEMENT_HANDLING && typeof u.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (R.allowCustomizedBuiltInElements = u.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), W && (ee = !1), Te && (be = !0), Ve && ($ = Q({}, un), X = [], Ve.html === !0 && (Q($, cn), Q(X, dn)), Ve.svg === !0 && (Q($, sr), Q(X, ir), Q(X, St)), Ve.svgFilters === !0 && (Q($, ar), Q(X, ir), Q(X, St)), Ve.mathMl === !0 && (Q($, or), Q(X, fn), Q(X, St))), u.ADD_TAGS && (typeof u.ADD_TAGS == "function" ? P.tagCheck = u.ADD_TAGS : ($ === J && ($ = ke($)), Q($, u.ADD_TAGS, le))), u.ADD_ATTR && (typeof u.ADD_ATTR == "function" ? P.attributeCheck = u.ADD_ATTR : (X === me && (X = ke(X)), Q(X, u.ADD_ATTR, le))), u.ADD_URI_SAFE_ATTR && Q(Kt, u.ADD_URI_SAFE_ATTR, le), u.FORBID_CONTENTS && (Ie === qt && (Ie = ke(Ie)), Q(Ie, u.FORBID_CONTENTS, le)), u.ADD_FORBID_CONTENTS && (Ie === qt && (Ie = ke(Ie)), Q(Ie, u.ADD_FORBID_CONTENTS, le)), Wt && ($["#text"] = !0), Z && Q($, ["html", "head", "body"]), $.table && (Q($, ["tbody"]), delete L.tbody), u.TRUSTED_TYPES_POLICY) {
        if (typeof u.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw ut('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof u.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw ut('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        h = u.TRUSTED_TYPES_POLICY, T = h.createHTML("");
      } else
        h === void 0 && (h = yo(j, s)), h !== null && typeof T == "string" && (T = h.createHTML(""));
      ye && ye(u), Xe = u;
    }
  }, Pr = Q({}, [...sr, ...ar, ...ao]), Ir = Q({}, [...or, ...oo]), fs = function(u) {
    let C = x(u);
    (!C || !C.tagName) && (C = {
      namespaceURI: Ye,
      tagName: "template"
    });
    const B = Lt(u.tagName), ne = Lt(C.tagName);
    return Yt[u.namespaceURI] ? u.namespaceURI === At ? C.namespaceURI === Me ? B === "svg" : C.namespaceURI === vt ? B === "svg" && (ne === "annotation-xml" || Et[ne]) : !!Pr[B] : u.namespaceURI === vt ? C.namespaceURI === Me ? B === "math" : C.namespaceURI === At ? B === "math" && Nt[ne] : !!Ir[B] : u.namespaceURI === Me ? C.namespaceURI === At && !Nt[ne] || C.namespaceURI === vt && !Et[ne] ? !1 : !Ir[B] && (ls[B] || !Pr[B]) : !!(st === "application/xhtml+xml" && Yt[u.namespaceURI]) : !1;
  }, De = function(u) {
    lt(t.removed, {
      element: u
    });
    try {
      x(u).removeChild(u);
    } catch {
      b(u);
    }
  }, Ue = function(u, C) {
    try {
      lt(t.removed, {
        attribute: C.getAttributeNode(u),
        from: C
      });
    } catch {
      lt(t.removed, {
        attribute: null,
        from: C
      });
    }
    if (C.removeAttribute(u), u === "is")
      if (be || Te)
        try {
          De(C);
        } catch {
        }
      else
        try {
          C.setAttribute(u, "");
        } catch {
        }
  }, Dr = function(u) {
    let C = null, B = null;
    if (te)
      u = "<remove></remove>" + u;
    else {
      const oe = nr(u, /^[\r\n\t ]+/);
      B = oe && oe[0];
    }
    st === "application/xhtml+xml" && Ye === Me && (u = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + u + "</body></html>");
    const ne = h ? h.createHTML(u) : u;
    if (Ye === Me)
      try {
        C = new y().parseFromString(ne, st);
      } catch {
      }
    if (!C || !C.documentElement) {
      C = S.createDocument(Ye, "template", null);
      try {
        C.documentElement.innerHTML = Vt ? T : ne;
      } catch {
      }
    }
    const pe = C.body || C.documentElement;
    return u && B && pe.insertBefore(n.createTextNode(B), pe.childNodes[0] || null), Ye === Me ? G.call(C, Z ? "html" : "body")[0] : Z ? C.documentElement : pe;
  }, Fr = function(u) {
    return F.call(
      u.ownerDocument || u,
      u,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null
    );
  }, Qt = function(u) {
    return u instanceof g && (typeof u.nodeName != "string" || typeof u.textContent != "string" || typeof u.removeChild != "function" || !(u.attributes instanceof c) || typeof u.removeAttribute != "function" || typeof u.setAttribute != "function" || typeof u.namespaceURI != "string" || typeof u.insertBefore != "function" || typeof u.hasChildNodes != "function");
  }, kr = function(u) {
    return typeof l == "function" && u instanceof l;
  };
  function $e(U, u, C) {
    Tt(U, (B) => {
      B.call(t, u, C, Xe);
    });
  }
  const Mr = function(u) {
    let C = null;
    if ($e(_.beforeSanitizeElements, u, null), Qt(u))
      return De(u), !0;
    const B = le(u.nodeName);
    if ($e(_.uponSanitizeElement, u, {
      tagName: B,
      allowedTags: $
    }), q && u.hasChildNodes() && !kr(u.firstElementChild) && ge(/<[/\w!]/g, u.innerHTML) && ge(/<[/\w!]/g, u.textContent) || u.nodeType === ft.progressingInstruction || q && u.nodeType === ft.comment && ge(/<[/\w]/g, u.data))
      return De(u), !0;
    if (!(P.tagCheck instanceof Function && P.tagCheck(B)) && (!$[B] || L[B])) {
      if (!L[B] && Br(B) && (R.tagNameCheck instanceof RegExp && ge(R.tagNameCheck, B) || R.tagNameCheck instanceof Function && R.tagNameCheck(B)))
        return !1;
      if (Wt && !Ie[B]) {
        const ne = x(u) || u.parentNode, pe = f(u) || u.childNodes;
        if (pe && ne) {
          const oe = pe.length;
          for (let we = oe - 1; we >= 0; --we) {
            const Be = E(pe[we], !0);
            Be.__removalCount = (u.__removalCount || 0) + 1, ne.insertBefore(Be, A(u));
          }
        }
      }
      return De(u), !0;
    }
    return u instanceof m && !fs(u) || (B === "noscript" || B === "noembed" || B === "noframes") && ge(/<\/no(script|embed|frames)/i, u.innerHTML) ? (De(u), !0) : (W && u.nodeType === ft.text && (C = u.textContent, Tt([D, v, K], (ne) => {
      C = ct(C, ne, " ");
    }), u.textContent !== C && (lt(t.removed, {
      element: u.cloneNode()
    }), u.textContent = C)), $e(_.afterSanitizeElements, u, null), !1);
  }, $r = function(u, C, B) {
    if (wt && (C === "id" || C === "name") && (B in n || B in ds))
      return !1;
    if (!(ee && !I[C] && ge(ae, C))) {
      if (!(Y && ge(se, C))) {
        if (!(P.attributeCheck instanceof Function && P.attributeCheck(C, u))) {
          if (!X[C] || I[C]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(Br(u) && (R.tagNameCheck instanceof RegExp && ge(R.tagNameCheck, u) || R.tagNameCheck instanceof Function && R.tagNameCheck(u)) && (R.attributeNameCheck instanceof RegExp && ge(R.attributeNameCheck, C) || R.attributeNameCheck instanceof Function && R.attributeNameCheck(C, u)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              C === "is" && R.allowCustomizedBuiltInElements && (R.tagNameCheck instanceof RegExp && ge(R.tagNameCheck, B) || R.tagNameCheck instanceof Function && R.tagNameCheck(B)))
            ) return !1;
          } else if (!Kt[C]) {
            if (!ge(N, ct(B, ie, ""))) {
              if (!((C === "src" || C === "xlink:href" || C === "href") && u !== "script" && to(B, "data:") === 0 && _r[u])) {
                if (!(M && !ge(ue, ct(B, ie, "")))) {
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
  }, Br = function(u) {
    return u !== "annotation-xml" && nr(u, Pe);
  }, zr = function(u) {
    $e(_.beforeSanitizeAttributes, u, null);
    const {
      attributes: C
    } = u;
    if (!C || Qt(u))
      return;
    const B = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: X,
      forceKeepAttr: void 0
    };
    let ne = C.length;
    for (; ne--; ) {
      const pe = C[ne], {
        name: oe,
        namespaceURI: we,
        value: Be
      } = pe, Qe = le(oe), Zt = Be;
      let fe = oe === "value" ? Zt : ro(Zt);
      if (B.attrName = Qe, B.attrValue = fe, B.keepAttr = !0, B.forceKeepAttr = void 0, $e(_.uponSanitizeAttribute, u, B), fe = B.attrValue, ze && (Qe === "id" || Qe === "name") && (Ue(oe, u), fe = Gt + fe), q && ge(/((--!?|])>)|<\/(style|title|textarea)/i, fe)) {
        Ue(oe, u);
        continue;
      }
      if (Qe === "attributename" && nr(fe, "href")) {
        Ue(oe, u);
        continue;
      }
      if (B.forceKeepAttr)
        continue;
      if (!B.keepAttr) {
        Ue(oe, u);
        continue;
      }
      if (!z && ge(/\/>/i, fe)) {
        Ue(oe, u);
        continue;
      }
      W && Tt([D, v, K], (Hr) => {
        fe = ct(fe, Hr, " ");
      });
      const Ur = le(u.nodeName);
      if (!$r(Ur, Qe, fe)) {
        Ue(oe, u);
        continue;
      }
      if (h && typeof j == "object" && typeof j.getAttributeType == "function" && !we)
        switch (j.getAttributeType(Ur, Qe)) {
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
          we ? u.setAttributeNS(we, oe, fe) : u.setAttribute(oe, fe), Qt(u) ? De(u) : ln(t.removed);
        } catch {
          Ue(oe, u);
        }
    }
    $e(_.afterSanitizeAttributes, u, null);
  }, ms = function U(u) {
    let C = null;
    const B = Fr(u);
    for ($e(_.beforeSanitizeShadowDOM, u, null); C = B.nextNode(); )
      $e(_.uponSanitizeShadowNode, C, null), Mr(C), zr(C), C.content instanceof o && U(C.content);
    $e(_.afterSanitizeShadowDOM, u, null);
  };
  return t.sanitize = function(U) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, C = null, B = null, ne = null, pe = null;
    if (Vt = !U, Vt && (U = "<!-->"), typeof U != "string" && !kr(U))
      if (typeof U.toString == "function") {
        if (U = U.toString(), typeof U != "string")
          throw ut("dirty is not a string, aborting");
      } else
        throw ut("toString is not a function");
    if (!t.isSupported)
      return U;
    if (de || Xt(u), t.removed = [], typeof U == "string" && (nt = !1), nt) {
      if (U.nodeName) {
        const Be = le(U.nodeName);
        if (!$[Be] || L[Be])
          throw ut("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (U instanceof l)
      C = Dr("<!---->"), B = C.ownerDocument.importNode(U, !0), B.nodeType === ft.element && B.nodeName === "BODY" || B.nodeName === "HTML" ? C = B : C.appendChild(B);
    else {
      if (!be && !W && !Z && // eslint-disable-next-line unicorn/prefer-includes
      U.indexOf("<") === -1)
        return h && Se ? h.createHTML(U) : U;
      if (C = Dr(U), !C)
        return be ? null : Se ? T : "";
    }
    C && te && De(C.firstChild);
    const oe = Fr(nt ? U : C);
    for (; ne = oe.nextNode(); )
      Mr(ne), zr(ne), ne.content instanceof o && ms(ne.content);
    if (nt)
      return U;
    if (be) {
      if (Te)
        for (pe = k.call(C.ownerDocument); C.firstChild; )
          pe.appendChild(C.firstChild);
      else
        pe = C;
      return (X.shadowroot || X.shadowrootmode) && (pe = O.call(r, pe, !0)), pe;
    }
    let we = Z ? C.outerHTML : C.innerHTML;
    return Z && $["!doctype"] && C.ownerDocument && C.ownerDocument.doctype && C.ownerDocument.doctype.name && ge(Qn, C.ownerDocument.doctype.name) && (we = "<!DOCTYPE " + C.ownerDocument.doctype.name + `>
` + we), W && Tt([D, v, K], (Be) => {
      we = ct(we, Be, " ");
    }), h && Se ? h.createHTML(we) : we;
  }, t.setConfig = function() {
    let U = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Xt(U), de = !0;
  }, t.clearConfig = function() {
    Xe = null, de = !1;
  }, t.isValidAttribute = function(U, u, C) {
    Xe || Xt({});
    const B = le(U), ne = le(u);
    return $r(B, ne, C);
  }, t.addHook = function(U, u) {
    typeof u == "function" && lt(_[U], u);
  }, t.removeHook = function(U, u) {
    if (u !== void 0) {
      const C = Ja(_[U], u);
      return C === -1 ? void 0 : eo(_[U], C, 1)[0];
    }
    return ln(_[U]);
  }, t.removeHooks = function(U) {
    _[U] = [];
  }, t.removeAllHooks = function() {
    _ = pn();
  }, t;
}
var xo = Zn();
const bo = ["jpg", "jpeg", "png", "gif", "svg", "webp"], wo = ["mp4", "webm", "ogg"], vo = ["txt", "json", "csv"], Ao = ["pdf"], hn = ["file", "camera", "camera2", "photo", "avatar", "attachment"];
function Eo(e) {
  return e.template ? e.template : "tab";
}
function No(e) {
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
function To(e, t) {
  const n = new Set(
    t.filter((r) => r.nodb === !0 || r.nosave === !0).map((r) => r.name)
  );
  return Object.fromEntries(
    Object.entries(e).filter(([r]) => !n.has(r))
  );
}
function Dt(e, t = "create") {
  const n = {};
  return Object.keys(e).forEach((r) => {
    e[r].vmode === "edit" && t === "create" || (n[r] = {
      label: r,
      required: e[r].required ?? !1
    });
  }), n;
}
function So(e, t = "create") {
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
const Ht = (e) => e === !0 || e === "true", Ro = (e, t, n, r) => {
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
            (c) => {
              if (c == null || c === "") return !0;
              const g = c.replace(/-/g, "/"), [y, j, p] = g.split("/");
              if (!y || !j || !p) return !1;
              const E = /* @__PURE__ */ new Date(`${p}-${j}-${y}`);
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
          l = Re.number().typeError("Must be a decimal").transform((c, g) => {
            if (g == null || g === "") return;
            const y = Number(g);
            if (isNaN(y)) return c;
            if (typeof c == "number" && !isNaN(c)) {
              const j = Number(c);
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
            (c) => c && c.toUpperCase()
          );
          break;
        case "lower":
          l = l.transform(
            (c) => c && c.toLowerCase()
          );
          break;
        case "length-min": {
          const c = Number(d);
          isNaN(c) || (l = l.min(c, `Minimum length is ${c}`));
          break;
        }
        case "length-max": {
          const c = Number(d);
          isNaN(c) || (l = l.max(c, `Maximum length is ${c}`));
          break;
        }
      }
    }), s.required && (l = l.required(
      s.error_message || `${s.label || o} is required`
    )), n[o] = l;
  });
}, Ft = (e) => !e || typeof e != "object" ? !1 : Object.values(e).every(
  (t) => typeof t == "object" && t !== null
);
function _o(e) {
  if (!e || typeof e != "object") return !1;
  const t = e.src;
  return typeof e.target == "string" && typeof t == "object" && t !== null && (t.type === "api" || typeof t.queryid == "string" || typeof t.table == "string" && typeof t.columns < "u");
}
function Co(e) {
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
}, Oo = (e) => {
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
function Lo(e) {
  return e ? Ft(e) ? Object.values(e).reduce((t, n) => (Object.assign(t, n), t), {}) : e : {};
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
function Io(e = "") {
  return e.split(".").pop()?.toLowerCase() ?? "";
}
function Do(e) {
  return bo.includes(e) ? "image" : wo.includes(e) ? "video" : Ao.includes(e) ? "pdf" : vo.includes(e) ? "text" : "other";
}
const yn = {
  image: "fa fa-file-image",
  pdf: "fa fa-file-pdf",
  video: "fa fa-file-video",
  text: "fa fa-file-lines",
  other: "fa fa-file"
}, Fo = "__form_persist__", ts = (e) => `${Fo}:${e}`;
function ko(e) {
  return xo.sanitize(e, {
    USE_PROFILES: { html: !0 }
  });
}
function Mo(e) {
  try {
    return JSON.parse(localStorage.getItem(ts(e)) || "{}");
  } catch {
    return {};
  }
}
function $o(e) {
  return e.persistent ? e.persistent === !0 ? e.name : typeof e.persistent == "string" ? e.persistent : null : null;
}
function Bo(e, t, n) {
  const r = Mo(e);
  localStorage.setItem(
    ts(e),
    JSON.stringify({
      ...r,
      [t]: n
    })
  );
}
function He(e, t, n) {
  const r = $o(t);
  r && n && Bo(n, r, e);
}
function lr(e) {
  return H.isAxiosError(e) ? e.response?.data?.message || e.message || "Something went wrong" : e instanceof Error ? e.message : typeof e == "string" ? e : "Something went wrong";
}
function cr(e, t) {
  return t === !1 ? null : typeof t == "string" ? t : e?.data?.message ? e.data.message : e?.message ? e.message : "Operation completed successfully";
}
const rs = ({
  uploads: e,
  currentValue: t,
  multiple: n
}) => {
  const r = Array.isArray(t) ? t : t ? [t] : [], s = e.map((o) => `${o.fileId}&${o.path}`);
  return [...r, ...s];
}, zo = (e) => {
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
}, Uo = (e) => {
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
}, Ho = (e) => e === "today" ? (/* @__PURE__ */ new Date()).toISOString().split("T")[0] : e, Go = ({
  fileUrl: e,
  category: t,
  blob: n,
  sqlOpsUrls: r,
  filePath: s
}) => {
  if (!e) return null;
  const o = s?.split("/").pop() || "download", i = o.split(".").pop()?.toLowerCase() || "", l = i === "pdf" ? "pdf" : ["xlsx", "xls"].includes(
    i
  ) ? "excel" : i === "csv" ? "csv" : ["doc", "docx"].includes(
    i
  ) ? "doc" : ["ppt", "pptx"].includes(
    i
  ) ? "ppt" : ["zip", "rar", "7z"].includes(
    i
  ) ? "zip" : t, m = typeof r?.native?.downloadFile == "function", d = async (g) => {
    const y = r?.native?.downloadFile;
    typeof y == "function" && n && (g.preventDefault(), await y(
      n,
      o
    ));
  };
  if (l === "image")
    return /* @__PURE__ */ a.jsx(
      "img",
      {
        src: e,
        alt: o,
        className: "max-h-[80vh] mx-auto"
      }
    );
  if (l === "text")
    return /* @__PURE__ */ a.jsx(
      "iframe",
      {
        src: e,
        className: "w-full h-[80vh]"
      }
    );
  if (l === "pdf" && !m)
    return /* @__PURE__ */ a.jsx(
      "iframe",
      {
        src: e,
        className: "w-full h-[80vh]"
      }
    );
  if (l === "video")
    return /* @__PURE__ */ a.jsx(
      "video",
      {
        controls: !0,
        className: "w-full max-h-[80vh]",
        children: /* @__PURE__ */ a.jsx("source", { src: e })
      }
    );
  const c = l === "pdf" ? {
    title: "PDF Document",
    buttonText: "Download PDF",
    bg: "from-red-50 to-white",
    button: "bg-red-600 hover:bg-red-700",
    iconBg: "bg-red-600"
  } : l === "excel" ? {
    title: "Excel File",
    buttonText: "Download Excel File",
    bg: "from-green-50 to-white",
    button: "bg-green-600 hover:bg-green-700",
    iconBg: "bg-green-600"
  } : l === "csv" ? {
    title: "CSV File",
    buttonText: "Download CSV File",
    bg: "from-emerald-50 to-white",
    button: "bg-emerald-600 hover:bg-emerald-700",
    iconBg: "bg-emerald-600"
  } : l === "doc" ? {
    title: "Word Document",
    buttonText: "Download Document",
    bg: "from-blue-50 to-white",
    button: "bg-blue-600 hover:bg-blue-700",
    iconBg: "bg-blue-600"
  } : l === "ppt" ? {
    title: "PowerPoint Presentation",
    buttonText: "Download Presentation",
    bg: "from-orange-50 to-white",
    button: "bg-orange-600 hover:bg-orange-700",
    iconBg: "bg-orange-600"
  } : l === "zip" ? {
    title: "Archive File",
    buttonText: "Download Archive",
    bg: "from-gray-50 to-white",
    button: "bg-gray-700 hover:bg-gray-800",
    iconBg: "bg-gray-700"
  } : null;
  return c ? /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `w-full min-h-[420px] flex flex-col items-center justify-center gap-5 border border-gray-200 rounded-xl bg-gradient-to-b ${c.bg}`,
      children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `w-24 h-24 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.iconBg}`,
            children: /* @__PURE__ */ a.jsx("span", { className: "text-4xl", children: "📄" })
          }
        ),
        /* @__PURE__ */ a.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ a.jsx("div", { className: "text-lg font-semibold text-gray-800", children: c.title }),
          /* @__PURE__ */ a.jsx("div", { className: "text-sm text-gray-500 w-full max-w-xs sm:max-w-md px-4 break-words", children: o })
        ] }),
        /* @__PURE__ */ a.jsx(
          "a",
          {
            href: e,
            download: !0,
            onClick: d,
            className: `${c.button} text-white px-5 py-2.5 rounded-lg`,
            children: c.buttonText
          }
        )
      ]
    }
  ) : /* @__PURE__ */ a.jsxs("div", { className: "text-center p-4", children: [
    /* @__PURE__ */ a.jsx("p", { children: "Preview not available" }),
    /* @__PURE__ */ a.jsx(
      "a",
      {
        href: e,
        download: !0,
        onClick: d,
        className: "text-blue-600 underline",
        children: "Download file"
      }
    )
  ] });
}, mt = (e) => ({
  Authorization: `Bearer ${e.accessToken}`
}), ur = async (e) => (await H.get(
  e.baseURL + e.dbopsGetHash,
  { headers: mt(e) }
)).data.refhash, dr = async (e, t) => (await H.post(
  e.baseURL + e.dbopsGetRefId,
  t,
  { headers: mt(e) }
)).data.refid, Wo = {
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
async function qo({
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
      let y = e.name;
      typeof e.parameter == "string" && e.parameter && (y = e.parameter);
      const j = { [y]: t, refid: t };
      if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
        for (const [b, A] of Object.entries(e.parameter))
          j[b] = b === y ? t : s?.[A];
      const p = {
        method: l.method || "GET",
        url: n?.baseURL + l.endpoint,
        headers: {
          Authorization: `Bearer ${n?.accessToken}`
        },
        ...l.method === "GET" ? { params: j } : { data: j }
      }, { data: E } = await H(p);
      m = E;
    } else {
      let y;
      if (!l.queryid) {
        if (!l.table || !l.columns)
          throw new Error("SQL query requires field.table");
        const p = Ee(l.where ?? {}, { refid: t });
        y = {
          ...l,
          table: l.table,
          cols: l.columns,
          where: p
        };
      }
      const { data: j } = await Ze(
        n,
        y,
        l.queryid,
        t
      );
      m = j;
    }
    const d = Array.isArray(m?.results?.options) ? m?.results?.options : Array.isArray(m.data) ? m.data : Array.isArray(m.results) ? m.results : m, c = Array.isArray(d) ? d.map(Ae) : [], g = Oe(
      e.valueKey ?? "value",
      e.labelKey ?? "title",
      c,
      e.groupKey
    );
    r(i.target, g);
  }
}
async function Ko(e, t) {
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
async function Vo(e, t) {
  const n = t.previewPath ?? "/api/files/preview", { data: r } = await H.get(
    `${t.baseURL}${n}?uri=${encodeURIComponent(
      e
    )}`,
    {
      responseType: "blob",
      headers: {
        Authorization: `Bearer ${t?.accessToken}`
      }
    }
  );
  return {
    previewUrl: URL.createObjectURL(r),
    blob: r
  };
}
async function ns(e, t) {
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
async function ss(e, t) {
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
function Yo(e) {
  const t = yn[e] ?? yn.other;
  return /* @__PURE__ */ a.jsx("i", { className: `${t} text-2xl text-gray-600` });
}
const as = ({ filePath: e, sqlOpsUrls: t }) => {
  const n = e.replace(/^[^&]*&/, ""), [r, s] = ce(null), [o, i] = ce(!1), [l, m] = ce(null), d = Io(n), c = Do(d);
  ve(() => {
    if (!t || c !== "image" && !o) return;
    let y = !0, j = null;
    return Vo(n, t).then(
      ({ previewUrl: p, blob: E }) => {
        y && (j = p, s(p), m(E));
      }
    ), () => {
      y = !1, j && URL.revokeObjectURL(j);
    };
  }, [c, o, n, t]);
  let g = n.split("/").pop();
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    c === "image" ? /* @__PURE__ */ a.jsx(
      "div",
      {
        role: "button",
        tabIndex: 0,
        onClick: () => i(!0),
        onKeyDown: (y) => y.key === "Enter" && i(!0),
        className: "h-16 w-16 rounded overflow-hidden cursor-pointer",
        title: "Click to preview",
        children: r ? /* @__PURE__ */ a.jsx(
          "img",
          {
            src: r,
            alt: g,
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
        onKeyDown: (y) => y.key === "Enter" && i(!0),
        className: "inline-flex cursor-pointer items-center gap-1",
        title: "Click to preview",
        children: [
          Yo(c),
          /* @__PURE__ */ a.jsx("span", { className: "text-sm", children: g })
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
      r ? /* @__PURE__ */ a.jsx(Go, { sqlOpsUrls: t, filePath: e, blob: l, fileUrl: r, category: c }) : /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col items-center justify-center py-12", children: [
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
  `, [c, g] = ce(
    i ?? e.options ?? {}
  ), y = re.useRef(!1);
  re.useEffect(() => {
    i && g(i);
  }, [i]);
  const j = re.useMemo(
    () => Lo(c),
    [c]
  );
  re.useEffect(() => {
    let x = !0, h = e.valueKey ?? "value", T = e.labelKey ?? "title";
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
        const O = (Array.isArray(e.options) ? e.options : [e.options]).map(Ae), _ = Oe(
          h,
          T,
          O,
          e.groupKey
          // auto-uses `category` if present
        );
        g(_);
        return;
      }
      const k = e?.source ?? {};
      if (e.type === "dataMethod") {
        const G = e.method, O = G ? n[G] : void 0;
        if (O)
          try {
            const _ = await Promise.resolve(O()), D = Array.isArray(_.data?.results?.options) ? _.data?.results?.options : Array.isArray(_?.data?.data) ? _.data.data : Array.isArray(_.data?.results) ? _.data?.results : Array.isArray(_?.data) ? _.data : _;
            if (typeof D == "object" && !Array.isArray(D)) {
              const ae = Object.values(D);
              if (ae.length && typeof ae[0] == "string") {
                g(D);
                return;
              }
            }
            const v = Array.isArray(D) ? D.map(Ae) : [], K = Oe(h, T, v, e.groupKey);
            x && g(K);
            return;
          } catch (_) {
            console.error("Method execution failed:", _), x && g({});
            return;
          }
        else {
          x && g({});
          return;
        }
      }
      if (k.type === "api" && k.endpoint)
        try {
          const G = {
            method: k.method || "GET",
            url: r?.baseURL + k.endpoint,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            },
            ...k.method === "GET" ? { params: { refid: k.refid } } : { data: { refid: k.refid } }
          }, O = await H(G), _ = Array.isArray(O.data?.results?.options) ? O.data?.results?.options : Array.isArray(O?.data?.data) ? O.data.data : Array.isArray(O.data?.results) ? O.data?.results : Array.isArray(O?.data) ? O.data : O;
          if (typeof _ == "object" && !Array.isArray(_)) {
            const K = Object.values(_);
            if (K.length && typeof K[0] == "string") {
              g(_);
              return;
            }
          }
          const D = Array.isArray(_) ? _.map(Ae) : [], v = Oe(h, T, D, e.groupKey);
          x && g(v);
          return;
        } catch (G) {
          console.error("API execution failed:", G), x && g({});
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
          const O = await Ze(r, G, e?.queryid, void 0, o), _ = Array.isArray(O?.data?.data) ? O.data.data : Array.isArray(O?.data) ? O.data : O;
          if (typeof _ == "object" && !Array.isArray(_)) {
            const K = Object.values(_);
            if (K.length && typeof K[0] == "string") {
              g(_);
              return;
            }
          }
          const D = Array.isArray(_) ? _.map(Ae) : [], v = Oe(h, T, D, e.groupKey);
          x && g(v);
        } catch (G) {
          console.error("API fetch failed:", G);
        }
      }
    })(), () => {
      x = !1;
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
    y.current || !l || !p || (y.current = !0, qo({
      field: e,
      value: p,
      sqlOpsUrls: r,
      setFieldOptions: l,
      values: t ?? {}
    }));
  }, [p, r, l]);
  let E;
  typeof p == "string" ? e.type === "date" ? E = p.split("T")[0] : e.type === "time" ? E = p.includes("T") ? p.slice(11, 16) : p.slice(0, 5) : E = gn(p, j) : E = gn(p, j);
  const b = E == null ? "" : typeof E == "string" || typeof E == "number" ? E : JSON.stringify(E), A = Po(p), f = e.type === "richtextarea" && typeof b == "string" ? ko(b) : null;
  return /* @__PURE__ */ a.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ a.jsx("label", { className: d, children: e?.label }),
    /* @__PURE__ */ a.jsx("div", { className: "relative", children: A ? A.type === "drawn" ? /* @__PURE__ */ a.jsx("svg", { viewBox: "0 0 300 150", className: "h-24 w-full border bg-white rounded", children: A.paths.map((x, h) => /* @__PURE__ */ a.jsx(
      "path",
      {
        d: x.d,
        stroke: x.color || "#000",
        strokeWidth: x.width || 2,
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
    ) : (e.type === "file" || e.type === "camera" || e.type === "camera2" || e.type === "attachement" || e.type === "photo" || e.type === "avatar") && E ? /* @__PURE__ */ a.jsx("div", { className: "flex flex-wrap gap-2", children: String(E).split(",").map((x) => x.trim()).filter(Boolean).map((x) => /* @__PURE__ */ a.jsx(
      as,
      {
        sqlOpsUrls: r,
        filePath: x
      },
      x
    )) }) : e.type === "richtextarea" ? /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "tiptap border border-gray-200 min-h-[400px] max-h-[220px] overflow-auto bg-white rounded p-2 text-sm",
        dangerouslySetInnerHTML: { __html: f ?? "" }
      }
    ) : /* @__PURE__ */ a.jsx("p", { className: m, children: b }) })
  ] });
}
function os({ filePath: e, field_name: t, sqlOpsUrls: n }) {
  const [r, s] = ce(null), o = e.replace(/^[^&]*&/, "");
  return ve(() => {
    if (!open || !n) return;
    let i = !0, l = null;
    return Ko(o, n).then((m) => {
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
function Xo({
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
    () => e?.fields?.find((y) => y.type === "avatar"),
    [e?.fields]
  ), c = d?.name, g = c && typeof t?.[c] == "string" ? t[c].trim() : "";
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white border border-gray-100 p-4 min-h-3/10 overflow-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    d && /* @__PURE__ */ a.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ a.jsx("div", { className: "relative w-42 h-42 p-2 rounded-sm overflow-hidden bg-gray-100 flex items-center justify-center", children: g ? /* @__PURE__ */ a.jsx(
      os,
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
    /* @__PURE__ */ a.jsx("div", { className: `min-h-0 max-h-40 overflow-y-auto custom-scrollbar ${d ? "lg:col-span-10" : "lg:col-span-12"}`, children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: e.fields?.map((y, j) => n.includes(y.name) || y.type === "avatar" ? null : /* @__PURE__ */ a.jsx("div", { className: `hover:bg-gray-100 transition-colors duration-200 col-span-12 sm:col-span-6 ${tt[rt(Number(y.width))] || "lg:col-span-4"}`, children: /* @__PURE__ */ a.jsx(
      bt,
      {
        field: y,
        data: t ?? {},
        sqlOpsUrls: r,
        methods: m,
        refid: l,
        module_refid: i,
        setFieldOptions: s,
        ...o[y.name] ? { optionsOverride: o[y.name] } : {}
      },
      y?.name
    ) }, y.name)) }) })
  ] }) });
}
function jr({ tabObj: e, methods: t, tabName: n, sqlOpsUrls: r, refid: s, module_refid: o, setFieldOptions: i, fieldOptions: l }) {
  const [m, d] = re.useState(null);
  return re.useEffect(() => {
    let c = !1;
    return (async () => {
      const y = e?.config;
      if (!y?.type) {
        c || d(null);
        return;
      }
      if (y.type === "method") {
        const j = y.method, p = j ? t[j] : void 0;
        if (p)
          try {
            const E = await Promise.resolve(p());
            c || d(E || null);
          } catch (E) {
            console.error("Method execution failed:", E), c || d(null);
          }
        else
          c || d(null);
      }
      if (y.type === "api")
        try {
          const j = await H({
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
          c || d(j.data || null);
        } catch (j) {
          console.error("API fetch failed:", j), c || d(null);
        }
      if (y.type === "sql" && s && s != "0" || y?.dbopsid) {
        if (!r) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let j = !1, p;
          y?.dbopsid && (j = !0, p = y?.dbopsid);
          const E = await H({
            method: "GET",
            url: r.baseURL + r.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            }
          });
          if (!j) {
            let f = {
              ...y
            };
            y.where && (f = {
              ...y,
              where: Ee(y.where, {
                refid: s
              })
            }), p = (await H({
              method: "POST",
              url: r.baseURL + r.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: f,
                fields: Dt(y.fields, r.operation),
                forcefill: y.forcefill,
                datahash: E.data.refhash,
                srcid: o
              },
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              }
            }))?.data.refid;
          }
          const b = await H({
            method: "POST",
            url: r.baseURL + r.dbopsFetch,
            data: {
              refid: p,
              datahash: E.data.refhash
            },
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            }
          }), A = es(b);
          c || d(A);
        } catch (j) {
          console.error("API fetch failed:", j);
        }
      }
    })(), () => {
      c = !0;
    };
  }, [
    e?.config?.type || "",
    e?.config?.method || "",
    e?.config?.url || "",
    JSON.stringify(e?.config?.params || {}),
    JSON.stringify(e?.config?.body || {}),
    JSON.stringify(e?.config?.headers || {})
  ]), /* @__PURE__ */ a.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: m ? Object.keys(m).map((c, g) => {
    let y = { name: c, label: c };
    return /* @__PURE__ */ a.jsx(
      "div",
      {
        className: `col-span-12 sm:col-span-6 ${tt[rt(e.width)] || "lg:col-span-2"}`,
        children: /* @__PURE__ */ a.jsx(
          bt,
          {
            field: y,
            data: m ?? {},
            methods: t,
            refid: s,
            sqlOpsUrls: r,
            setFieldOptions: i,
            ...l[y.name] ? { optionsOverride: l[y.name] } : {}
          },
          c
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
function Qo({
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
function Zo({
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
  ].includes(e?.type || "text"), [c, g] = ce(!1), [y, j] = ce(d), [p, E] = ce(
    i ?? e.options ?? {}
  ), [b, A] = ce(""), [f, x] = ce(0), h = We(null), T = We(null), [S, F] = ce(!1), k = We(b), G = e.disabled === !0;
  ve(() => {
    k.current = b;
  }, [b]), ve(() => {
    if (e.type !== "select" || e.multiple || e["no-option"] !== "false" || t.values[O] || !p) return;
    let I;
    if (Array.isArray(p))
      I = p[0]?.value;
    else if (!Ft(p))
      I = Object.keys(p)[0];
    else {
      const P = Object.values(p)[0];
      I = P ? Object.keys(P)[0] : void 0;
    }
    I != null && t.setFieldValue(O, String(I), !1);
  }, [p]), ve(() => {
    i && E(i);
  }, [i]), ve(() => {
    if (!S) return;
    const L = (I) => {
      const P = I.target;
      T.current?.contains(P) || h.current?.contains(P) || (F(!1), A(""));
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
        let P = e.valueKey ?? "value", Y = e.labelKey ?? "title", ee = e?.options;
        if (ee && (Array.isArray(ee) && ee.length > 0 || !Array.isArray(ee) && Object.keys(ee).length > 0)) {
          if (typeof e.options == "object" && !Array.isArray(e.options)) {
            const Z = Object.values(e.options);
            if (Z.length && typeof Z[0] == "string") {
              E(e.options);
              return;
            }
          }
          const W = (Array.isArray(e.options) ? e.options : [e.options]).map(Ae), q = Oe(
            P,
            Y,
            W,
            e.groupKey
            // auto-uses `category` if present
          );
          E(q);
          return;
        }
        const M = e?.source ?? {};
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
              const de = Array.isArray(Z) ? Z.map(Ae) : [], te = Oe(P, Y, de, e.groupKey);
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
        if (M.type === "api" && M.endpoint)
          try {
            const z = {
              method: M.method || "GET",
              url: r?.baseURL + M.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...M.method === "GET" ? { params: { refid: M.refid } } : { data: { refid: M.refid } }
            }, W = await H(z), q = Array.isArray(W.data?.results?.options) ? W.data?.results?.options : Array.isArray(W?.data?.data) ? W.data.data : Array.isArray(W.data?.results) ? W.data?.results : Array.isArray(W?.data) ? W.data : W;
            if (typeof q == "object" && !Array.isArray(q)) {
              const te = Object.values(q);
              if (te.length && typeof te[0] == "string") {
                E(q);
                return;
              }
            }
            const Z = Array.isArray(q) ? q.map(Ae) : [], de = Oe(P, Y, Z, e.groupKey);
            L && E(de);
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
            const Z = Array.isArray(q) ? q.map(Ae) : [], de = Oe(P, Y, Z, e.groupKey);
            L && E(de);
          } catch (z) {
            console.error("API fetch failed:", z);
          }
        }
      } catch (P) {
        console.log(P);
      } finally {
        L && d && j(!1);
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
  const _ = `
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
    () => Oo(p),
    [p]
  ), ae = Rt(() => {
    if (!e.type || !["suggest", "autosuggest", "autocomplete"].includes(e.type) || !b.trim()) return null;
    const L = b.trim().toLowerCase();
    return K.find(([, I]) => I.trim().toLowerCase() === L);
  }, [e.type, b, K]), se = K.length, ue = !!(e.search && (e.queryid || e.table)), ie = Rt(() => ue || !b ? K : K.filter(
    ([, L]) => L.toLowerCase().includes(b.toLowerCase())
  ), [ue, b, K]), Pe = (L, I) => {
    if (S)
      if (L.key === "ArrowDown")
        L.preventDefault(), x(
          (P) => P + 1 < ie.length ? P + 1 : 0
        );
      else if (L.key === "ArrowUp")
        L.preventDefault(), x(
          (P) => P - 1 >= 0 ? P - 1 : ie.length - 1
        );
      else if (L.key === "Enter") {
        L.preventDefault();
        const [P] = ie[f] || [];
        if (P) {
          let Y = I ? P : [...t.values[e.name], P];
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
    f >= ie.length && x(0);
  }, [ie, f]), ve(() => {
    const L = e.autocomplete, I = e.ajaxchain;
    if (!L && !I) return;
    const P = t.values[e.name];
    if (!P) return;
    const Y = Array.isArray(I) ? I : I ? [I] : [];
    (async () => {
      try {
        if (_o(L)) {
          const M = L.src;
          if (!M || !r) return;
          let z;
          if ("type" in M && M.type === "api") {
            let q = e.name;
            typeof e.parameter == "string" && e.parameter && (q = e.parameter);
            const Z = { [q]: P, refid: P };
            if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
              for (const [be, Te] of Object.entries(e.parameter))
                Z[be] = be === q ? P : t.values?.[Te];
            const de = {
              method: M.method || "GET",
              url: r?.baseURL + M.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...M.method === "GET" ? { params: Z } : { data: Z }
            }, { data: te } = await H(de);
            z = Array.isArray(te?.data?.results?.options) ? te?.data?.results?.options[0] : Array.isArray(te?.data?.data) ? te.data.data[0] : Array.isArray(te?.data?.results) ? te.data.results[0] : Array.isArray(te?.data) ? te.data[0] : te?.data;
          } else {
            let q;
            if (!M.queryid) {
              if (!M.table || !M.columns)
                throw new Error("SQL query requires field.table");
              const de = Ee(M?.where ?? {}, {
                refid: P
              });
              q = {
                ...M,
                table: M.table,
                cols: M.columns,
                where: de
              };
            }
            const { data: Z } = await Ze(r, q, M?.queryid, P, o);
            z = Array.isArray(Z?.data?.data) ? Z.data.data[0] : Array.isArray(Z?.data) ? Z.data[0] : Z?.data;
          }
          let W = Ae(z);
          W && L.target.split(",").map((q) => q.trim()).forEach((q) => {
            W[q] !== void 0 && t.setFieldValue(q, W[q]);
          });
        }
        for (const M of Y) {
          m?.(M.target, !0);
          const z = M.src;
          if (!M || typeof M != "object" || !z || typeof z != "object" || !r) continue;
          let W;
          if ("type" in z && z.type === "api") {
            let Te = e.name;
            typeof e.parameter == "string" && e.parameter && (Te = e.parameter);
            let Se = { [Te]: P, refid: P };
            if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
              for (const [ze, Gt] of Object.entries(e.parameter))
                Se[ze] = ze === Te ? P : t.values?.[Gt];
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
              m?.(M.target, !1);
            }
          } else {
            let Te;
            if (!z.queryid) {
              if (!z.table || !z.columns)
                throw new Error("SQL query requires field.table");
              const Se = Ee(z?.where ?? {}, {
                refid: P
              });
              Te = {
                ...z,
                table: z.table,
                cols: z.columns,
                where: Se
              };
            }
            try {
              const { data: Se } = await Ze(r, Te, z?.queryid, P, o);
              W = Se;
            } catch {
            } finally {
              m?.(M.target, !1);
            }
          }
          let q = e.valueKey ?? "value", Z = e.labelKey ?? "title";
          const de = Array.isArray(W?.results?.options) ? W?.results?.options : Array.isArray(W.data) ? W.data : Array.isArray(W.results) ? W.results : W, te = Array.isArray(de) ? de.map(Ae) : [], be = Oe(
            q,
            Z,
            te,
            e.groupKey
          );
          t.setFieldValue(M.target, t.initialValues[M.target]), l?.(M.target, be);
        }
      } catch (M) {
        console.error("Autocomplete / AjaxChain fetch failed", M);
      }
    })();
  }, [t.values[e.name]]), ve(() => {
    if (!ue || !b.trim() || !r) return;
    const L = Co(e.columns ?? ""), I = new AbortController(), P = setTimeout(async () => {
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
          ee[te] = [b, "LIKE"];
        });
        let M = e.valueKey ?? "value", z = e.labelKey ?? "title";
        const { data: W } = await Ze(r, Y, e?.queryid, void 0, o, ee), q = Array.isArray(W?.data?.data) ? W.data.data : Array.isArray(W?.data) ? W.data : W, Z = Array.isArray(q) ? q.map(Ae) : [], de = Oe(
          M,
          z,
          Z,
          e.groupKey
        );
        E(de);
      } catch (Y) {
        if (H.isCancel(Y)) return;
        console.error("Search fetch failed", Y);
      }
    }, 500);
    return () => {
      clearTimeout(P), I.abort();
    };
  }, [ue, b, s]);
  const N = async (L) => {
    if (L.length === 0) {
      console.error("No file");
      return;
    }
    try {
      j(!0);
      const I = await ns(r, L), P = rs({
        uploads: I,
        currentValue: t.values[O],
        multiple: e.multiple ?? !1
      });
      t.setFieldValue(
        O,
        P
      ), He(P, e, o);
    } catch (I) {
      console.error("File upload failed", I), t.setFieldError(O, "File upload failed");
    } finally {
      j(!1);
    }
  }, $ = async (L) => {
    const I = Array.isArray(t.values[O]) ? t.values[O] : [], P = L.split("&")[0];
    if (!P) return;
    const Y = I.filter((ee) => ee.split("&")[0] !== P);
    t.setFieldValue(O, Y);
    try {
      await ss(r, P), He(Y, e, o);
    } catch (ee) {
      console.log(ee), t.setFieldValue(O, I), window.alert("Failed to delete file due to a technical issue. Please try again.");
    }
  }, J = async (L, I, P) => {
    const Y = I[L];
    if (!Y) return;
    const ee = n?.[Y];
    if (typeof ee != "function") {
      console.error(`Method "${String(Y)}" not found`);
      return;
    }
    try {
      await Promise.resolve(ee(P));
    } catch (M) {
      console.error(`Method "${String(Y)}" failed`, M);
    }
  }, X = (L) => {
    if (G) return;
    const I = L.target.value;
    A(I), x(0), I.trim() ? F(!0) : (F(!1), t.setFieldValue(O, ""));
  }, me = (L) => {
    t.setFieldValue(O, L), He(L, e, o), A(""), F(!1), J("onChange", e, `${O}-${L}`);
  };
  function R(L) {
    const I = L.currentTarget.files;
    I && N(I);
  }
  return {
    setHighlightedIndex: x,
    executeFieldMethod: J,
    handleFileUpload: N,
    handleKeyDown: Pe,
    setSearch: A,
    setOpen: F,
    setIsFocused: g,
    handleInputChange: X,
    handleSelect: me,
    handlePersist: He,
    handleFileChange: R,
    setLoading: j,
    removeFile: $,
    optionCount: se,
    baseInputClasses: _,
    focusClasses: D,
    labelClasses: v,
    search: b,
    highlightedIndex: f,
    options: p,
    isDisabled: G,
    key: O,
    filteredOptions: ie,
    open: S,
    listRef: h,
    isFocused: c,
    exactMatch: ae,
    triggerRef: T,
    loading: y
  };
}
function Tr({
  anchorRef: e,
  open: t,
  children: n,
  offset: r = 4,
  maxHeight: s = 240
}) {
  const [o, i] = ce({}), l = We(null);
  return ps(() => {
    if (!t || !e.current || !l.current) return;
    const m = e.current, d = () => {
      const g = m.getBoundingClientRect(), y = window.innerHeight, j = l.current?.offsetHeight || s, p = y - g.bottom, E = g.top, A = p < j && E > p ? g.top - j - r : g.bottom + r;
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
    const c = requestAnimationFrame(d);
    return window.addEventListener("scroll", d, !0), window.addEventListener("resize", d), () => {
      cancelAnimationFrame(c), window.removeEventListener("scroll", d, !0), window.removeEventListener("resize", d);
    };
  }, [t, e, r, s]), t ? gs(
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
  executeFieldMethod: c,
  handlePersist: g,
  module_refid: y,
  options: j,
  triggerRef: p,
  open: E,
  setOpen: b,
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
          b((x) => !x);
        },
        onKeyDown: (x) => {
          t || n(x, !0);
        },
        children: [
          /* @__PURE__ */ a.jsx("span", { className: "text-sm text-gray-700", children: d.values[f] ? Nr(j, d.values[f]) ?? "Select option" : `Select ${e.label}` }),
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
    /* @__PURE__ */ a.jsx(Tr, { anchorRef: p, open: E, children: /* @__PURE__ */ a.jsxs(
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
              onChange: (x) => {
                m(x.target.value);
              },
              onKeyDown: (x) => n(x, !0),
              placeholder: "Search...",
              className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                      bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                      focus:outline-none focus:ring-0`
            }
          ) }),
          i.length > 0 && /* @__PURE__ */ a.jsx(
            "div",
            {
              onClick: (x) => {
                x.preventDefault(), x.stopPropagation(), d.setFieldValue(f, ""), b(!1), g("", e, y), m("");
              },
              className: "px-2 py-1 hover:bg-gray-50 text-gray-500 rounded cursor-pointer text-sm hover:bg-gray-50",
              children: "Clear selection"
            }
          ),
          i.length > 0 ? i.map(([x, h], T) => /* @__PURE__ */ a.jsx(
            "div",
            {
              id: `${f}-${x}`,
              "data-index": T,
              onClick: (S) => {
                S.preventDefault(), S.stopPropagation(), d.setFieldValue(f, x), g(x, e, y), b(!1), m(""), c("onChange", e, `${f}-${x}`);
              },
              className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                            ${d.values[f] === x ? "bg-indigo-50 text-indigo-600 font-medium" : l === T ? "bg-gray-100" : "hover:bg-gray-50"}`,
              children: h
            },
            x
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
  formik: c,
  executeFieldMethod: g,
  handlePersist: y,
  module_refid: j,
  options: p,
  triggerRef: E,
  open: b,
  setOpen: A,
  loading: f
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
    /* @__PURE__ */ a.jsx(Tr, { anchorRef: E, open: b && !t, children: /* @__PURE__ */ a.jsxs("div", { ref: o, className: " w-full border border-gray-200 rounded-lg bg-white shadow-md  max-h-60 overflow-y-auto p-2", children: [
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
      l.length > 0 ? l.map(([h, T], S) => /* @__PURE__ */ a.jsxs(
        "label",
        {
          htmlFor: `${x}-${h}`,
          className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${r?.includes(h) ? "bg-indigo-50 text-indigo-600 font-medium" : m === S ? "bg-gray-100" : "hover:bg-gray-50"}`,
          children: [
            /* @__PURE__ */ a.jsx(
              "input",
              {
                id: `${x}-${h}`,
                type: "checkbox",
                checked: r?.includes(h),
                onChange: (F) => {
                  const k = F.target.checked ? [...r, h] : r?.filter((G) => G !== h);
                  c.setFieldValue(x, k), y(k, e, j), g("onChange", e, `${x}-${h}`);
                },
                onBlur: c.handleBlur,
                disabled: t,
                className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              }
            ),
            T
          ]
        },
        h
      )) : /* @__PURE__ */ a.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
    ] }) }),
    c.touched[x] && c.errors[x] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(c.errors[x]) })
  ] });
}
function Jo({
  formik: e,
  field: t,
  sqlOpsUrls: n,
  module_refid: r
}) {
  let s = t?.name;
  const o = We(null), i = t.max !== void 0 ? Number(t.max) : 1 / 0, [l, m] = ce(!1), d = Array.isArray(e.values[s]) ? e.values[s] : e.values[s] ? [e.values[s]] : [], c = async (p) => {
    const E = p.currentTarget.files;
    if (!E?.length) return;
    const b = Array.from(p.currentTarget.files || []);
    if (d.length + b.length > i) {
      alert(`You can upload maximum ${i} file(s)`), p.currentTarget.value = "";
      return;
    }
    try {
      m(!0);
      const f = await ns(n, E), x = rs({
        uploads: f,
        currentValue: e.values[s],
        multiple: t.multiple ?? !1
      });
      e.setFieldValue(
        s,
        x
      ), He(x, t, r), p.target.value = "";
    } catch (f) {
      console.error("File upload failed", f), e.setFieldError(s, "File upload failed");
    } finally {
      m(!1);
    }
  }, g = async (p) => {
    const E = Array.isArray(e.values[s]) ? e.values[s] : [], b = p.split("&")[0];
    if (!b) return;
    const A = E.filter((f) => f.split("&")[0] !== b);
    e.setFieldValue(s, A);
    try {
      if (!p.split("&")[0]) return;
      await ss(n, b), He(A, t, r);
    } catch {
      e.setFieldValue(s, E), window.alert("Failed to delete file due to a technical issue. Please try again.");
    }
  }, y = zo(t), j = t.multiple === !0;
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
        multiple: j,
        ...y,
        onChange: c
      }
    ),
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "flex flex-wrap gap-2",
        children: [
          d.length > 0 ? d.map((p) => /* @__PURE__ */ a.jsxs("div", { className: "relative group", children: [
            /* @__PURE__ */ a.jsx(
              os,
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
              children: l ? /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-spinner fa-spin text-2xl text-gray-900" }) : /* @__PURE__ */ a.jsx("i", { className: `fa-solid ${Uo(t)} text-2xl text-gray-400` })
            }
          )
        ]
      }
    ),
    e.touched[s] && e.errors[s] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[s]) })
  ] });
}
function ei({
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
    executeFieldMethod: c,
    handleFileUpload: g,
    handleKeyDown: y,
    setSearch: j,
    setOpen: p,
    setIsFocused: E,
    handleInputChange: b,
    handleSelect: A,
    handlePersist: f,
    setLoading: x,
    removeFile: h,
    optionCount: T,
    baseInputClasses: S,
    focusClasses: F,
    labelClasses: k,
    search: G,
    highlightedIndex: O,
    options: _,
    isDisabled: D,
    key: v,
    filteredOptions: K,
    open: ae,
    listRef: se,
    triggerRef: ue,
    isFocused: ie,
    exactMatch: Pe,
    loading: N
  } = Zo({
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
      const R = t.values[v] ?? "", L = G !== "" ? G : Nr(_, R) ?? String(R ?? "");
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: k, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { ref: ue, children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              className: `${S} ${F}`,
              value: L,
              placeholder: e.placeholder || "Type to search...",
              onChange: b,
              onBlur: () => {
                setTimeout(() => p(!1), 150);
              },
              onKeyDown: (I) => {
                if (I.key === "Enter") {
                  if (I.preventDefault(), Pe) {
                    const [P] = Pe;
                    t.setFieldValue(v, P), f(P, e, o);
                  } else G.trim() && (t.setFieldValue(v, G.trim()), f(G.trim(), e, o));
                  p(!1), j("");
                  return;
                }
                y(I, !0);
              },
              disabled: D
            }
          ),
          (N || m) && /* @__PURE__ */ a.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) })
        ] }),
        /* @__PURE__ */ a.jsx(Tr, { anchorRef: ue, open: ae && !D, children: /* @__PURE__ */ a.jsx(
          "div",
          {
            ref: se,
            className: " w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1",
            children: K.length > 0 && Pe ? K.map(([I, P], Y) => /* @__PURE__ */ a.jsx(
              "div",
              {
                id: `${v}-${I}`,
                "data-index": Y,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${O === Y ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => A(I),
                children: P
              },
              I
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
            handleKeyDown: y,
            valueArray: R,
            labelClasses: k,
            listRef: se,
            search: G,
            filteredOptions: K,
            highlightedIndex: O,
            setSearch: j,
            formik: t,
            executeFieldMethod: c,
            handlePersist: f,
            module_refid: o,
            options: _,
            triggerRef: ue,
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
          handleKeyDown: y,
          labelClasses: k,
          listRef: se,
          search: G,
          filteredOptions: K,
          highlightedIndex: O,
          setSearch: j,
          formik: t,
          executeFieldMethod: c,
          handlePersist: f,
          module_refid: o,
          options: _,
          triggerRef: ue,
          open: ae,
          setOpen: p,
          loading: N || !!m
        }
      );
    }
    case "textarea":
      return /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: k, children: [
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
                t.setFieldValue(v, R.target.value), f(R.target.value, e, o), c("onChange", e, `${v}`);
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
            handleKeyDown: y,
            valueArray: R,
            labelClasses: k,
            listRef: se,
            search: G,
            filteredOptions: K,
            highlightedIndex: O,
            setSearch: j,
            formik: t,
            executeFieldMethod: c,
            handlePersist: f,
            module_refid: o,
            options: _,
            triggerRef: ue,
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
          handleKeyDown: y,
          labelClasses: k,
          listRef: se,
          search: G,
          filteredOptions: K,
          highlightedIndex: O,
          setSearch: j,
          formik: t,
          executeFieldMethod: c,
          handlePersist: f,
          module_refid: o,
          options: _,
          triggerRef: ue,
          open: ae,
          setOpen: p,
          loading: N || !!m
        }
      ) : /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: k, children: [
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
                t.setFieldValue(v, R.target.value), f(R.target.value, e, o), c("onChange", e, `${v}`);
              },
              disabled: D,
              children: [
                e?.["no-option"] !== "false" && !t.values[v] && /* @__PURE__ */ a.jsx("option", { value: "", disabled: !0, children: e?.["no-option"] || `Please select ${e.label}` }),
                /* @__PURE__ */ a.jsx("option", { value: "", className: "text-gray-500", children: "Clear Selection" }),
                !Ft(_) && Object.entries(_).map(([R, L]) => /* @__PURE__ */ a.jsx("option", { value: R, className: "py-2", children: L }, R)),
                Ft(_) && Object.entries(_).map(([R, L]) => /* @__PURE__ */ a.jsx("optgroup", { label: R, children: Object.entries(L).map(([I, P]) => /* @__PURE__ */ a.jsx("option", { value: I, children: P }, I)) }, R))
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
        /* @__PURE__ */ a.jsxs("label", { className: k, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: `flex ${T > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(_ || {}).map(([R, L]) => /* @__PURE__ */ a.jsxs(
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
                  onChange: (I) => {
                    t.setFieldValue(v, I.target.value), f(I.target.value, e, o), c("onChange", e, `${v}-${R}`);
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
        /* @__PURE__ */ a.jsxs("label", { className: k, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(_ || {}).map(([I, P]) => {
          const Y = R ? Array.isArray(L) && L.includes(I) : L === I;
          return /* @__PURE__ */ a.jsxs(
            "label",
            {
              className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
              children: [
                /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    id: `${v}-${I}`,
                    type: "checkbox",
                    checked: Y,
                    onChange: (ee) => {
                      let M;
                      if (R) {
                        const z = Array.isArray(L) ? L : [];
                        M = ee.target.checked ? [...z, I] : z.filter((W) => W !== I);
                      } else
                        M = ee.target.checked ? I : "false";
                      t.setFieldValue(v, M), f(M, e, o), c("onChange", e, `${v}-${I}`);
                    },
                    onBlur: t.handleBlur,
                    disabled: D,
                    className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${D ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                  }
                ),
                P
              ]
            },
            I
          );
        }) }),
        t.touched[v] && t.errors[v] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[v]) })
      ] });
    }
    case "tags": {
      const R = t.values[v], L = G.trim(), I = Array.isArray(_) ? _ : Object.entries(_ || {}).map(([M, z]) => ({ value: M, label: z })), P = (M) => {
        if (!D && M && !R.includes(M)) {
          let z = [...R, M];
          t.setFieldValue(v, z), f(z, e, o), j("");
        }
      }, Y = (M) => {
        let z = R.filter((W) => W !== M);
        t.setFieldValue(
          v,
          z
        ), f(z, e, o);
      }, ee = (M) => I.find((z) => z.value === M)?.label ?? M;
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: k, children: [
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
              R.map((M) => /* @__PURE__ */ a.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ a.jsx("span", { className: "text-indigo-700", children: ee(M) }),
                    /* @__PURE__ */ a.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (z) => {
                          z.stopPropagation(), D || Y(M);
                        },
                        onMouseDown: (z) => z.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                M
              )),
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  id: `${v}-input`,
                  type: "text",
                  value: G,
                  onChange: (M) => j(M.target.value),
                  onKeyDown: (M) => {
                    (M.key === "Enter" || M.key === ",") && (M.preventDefault(), P(L));
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
        Jo,
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
        /* @__PURE__ */ a.jsxs("label", { className: k, children: [
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
                const L = R.currentTarget.files, I = Array.from(R.currentTarget.files || []);
                if (me.length + I.length > X) {
                  alert(`You can upload maximum ${X} file(s)`), R.currentTarget.value = "";
                  return;
                }
                L && g(L), c("onChange", e, v), R.currentTarget.value = "";
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
            as,
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
        /* @__PURE__ */ a.jsxs("label", { className: k, children: [
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
                t.setFieldValue(v, R.target.value), f(R.target.value, e, o), c("onChange", e, `${v}`);
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
      const R = Ho(e.max);
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: k, children: [
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
                    t.setFieldValue(v, L.target.value), f(L.target.value, e, o), c("onChange", e, `${v}`);
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
          const I = await Jn();
          t.setFieldValue(v, I), f(I, e, o);
        } catch (I) {
          console.error(I), t.setFieldError(v, "Failed to fetch location");
        } finally {
          x(!1);
        }
      };
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: k, children: [
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
        /* @__PURE__ */ a.jsxs("label", { className: k, children: [
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
                t.setFieldValue(v, R.target.value), f(R.target.value, e, o), c("onChange", e, `${v}`);
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
        /* @__PURE__ */ a.jsxs("label", { className: k, children: [
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
                t.setFieldValue(v, R.target.value), f(R.target.value, e, o), c("onChange", e, `${v}`);
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
function ti({
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
  const d = So(t, i?.operation), [c, g] = re.useState({}), y = (h, T) => {
    g((S) => ({
      ...S,
      [h]: T
    }));
  }, [j, p] = re.useState({}), E = (h, T) => {
    p((S) => ({
      ...S,
      [h]: T
    }));
  }, { initialValues: b, validationSchema: A } = re.useMemo(() => {
    const h = {}, T = {};
    return d.forEach((S) => {
      Ro([S], h, T, n);
    }), {
      initialValues: h,
      validationSchema: T
    };
  }, [d, n]), f = hs({
    initialValues: b,
    enableReinitialize: !0,
    validationSchema: Re.object().shape(A),
    onSubmit: (h) => {
      let T = To(h, d);
      r(T), f.resetForm();
    }
  });
  function x(h) {
    h.preventDefault(), f.resetForm();
  }
  return /* @__PURE__ */ a.jsx("div", { className: "relative  max-w-full ", children: /* @__PURE__ */ a.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ a.jsxs("form", { onSubmit: f.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "grid grid-cols-12 gap-4", children: [
      d.map((h, T) => {
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
              ei,
              {
                refid: l,
                module_refid: m,
                sqlOpsUrls: i,
                field: h,
                formik: f,
                methods: o,
                setFieldOptions: y,
                ...c[h.name] ? { optionsOverride: c[h.name] } : {},
                fieldLoading: j[h.name] ?? !1,
                setFieldLoading: E
              }
            )
          },
          h?.name ?? `field-${T}`
        );
      }),
      /* @__PURE__ */ a.jsxs("div", { className: "col-span-12 flex flex-row gap-1 justify-end", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", onClick: x, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Reset" }),
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
  const m = e.endPoints, d = e?.source?.refid, [c, g] = re.useState(o ?? {}), y = re.useMemo(() => jo(e.fields), [e.fields]);
  re.useEffect(() => {
    let b = !0;
    return (async () => {
      try {
        const f = await Jn();
        b && g((x) => ({
          ...x,
          ...Object.fromEntries(
            y.map((h) => [h, f])
          )
        }));
      } catch (f) {
        console.warn("Geo fetch failed", f);
      }
    })(), () => {
      b = !1;
    };
  }, [y]), re.useEffect(() => {
    g(o ?? {});
  }, [o]);
  const j = re.useCallback(
    (b) => {
      b && g((A) => {
        const f = { ...A };
        for (const x in b)
          b[x] !== null && b[x] !== void 0 && (f[x] = b[x]);
        return f;
      });
    },
    []
  );
  re.useEffect(() => {
    let b = !0;
    return (async () => {
      const f = e?.source ?? {};
      if (f?.type && m?.operation !== "create") {
        if (f.type === "method") {
          const x = f.method, h = x ? t[x] : void 0;
          if (h)
            try {
              const T = await h();
              b && j(T);
            } catch (T) {
              console.error("Method execution failed:", T);
            }
        }
        if (f.type === "api")
          try {
            const x = {
              method: f.method || "GET",
              url: m?.baseURL + f.endpoint,
              headers: {
                Authorization: `Bearer ${m?.accessToken}`
              },
              ...f.method === "GET" ? { params: { refid: f.refid } } : { data: { refid: f.refid } }
            }, h = await H(x);
            b && j(h.data);
          } catch (x) {
            console.error("API fetch failed:", x);
          }
        if (f.type === "sql" && f.refid && f.refid !== "0" || f.dbopsid) {
          if (!m) {
            console.error("SQL source requires formJson.endPoints but it is missing");
            return;
          }
          try {
            const x = await Wo.fetch(m, {
              source: {
                ...f,
                table: f.table,
                columns: f.columns,
                where: Ee(f.where, {
                  refid: d
                })
              },
              fields: Dt(e.fields, m.operation)
            }, f?.dbopsid, e?.module_refid);
            b && j(x);
          } catch (x) {
            console.error("API fetch failed:", x);
          }
        }
      }
    })(), () => {
      b = !1;
    };
  }, [
    m,
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.endpoint || ""
  ]);
  const p = async (b) => {
    const A = e?.source ?? {};
    let f = { ...b }, x = "0,0";
    if (y.length > 0) {
      const h = y[0];
      x = (h ? b[h] : null) || "0,0";
      const S = y.filter((F) => !b[F]);
      if (S.length > 0)
        try {
          f = {
            ...b,
            ...Object.fromEntries(
              S.map((F) => [F, x])
            )
          };
        } catch {
          console.warn("Geo fetch failed");
        }
    }
    if (A.type === "method") {
      const h = A.method, T = h ? t[h] : void 0;
      if (T)
        try {
          let S = f ? { ...f, geolocation: x } : {};
          const F = await T(S);
          i?.(null), s?.(F);
          const k = cr(F, e?.submit_msg);
          k && l?.success?.(k);
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
          data: f ? { ...f, geolocation: x } : {},
          headers: {
            Authorization: `Bearer ${m?.accessToken}`
          }
        });
        i?.(null), s?.(h);
        const T = cr(h, e?.submit_msg);
        T && l?.success?.(T);
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
        let T = !1, S;
        A?.dbopsid && (T = !0, S = A?.dbopsid);
        const F = await H({
          method: "GET",
          url: h.baseURL + h.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${h?.accessToken}`
          }
        });
        if (!T) {
          let _ = {
            ...A
          };
          A.where && (_ = {
            ...A,
            where: Ee(A.where, {
              refid: d
            })
          }), S = (await H({
            method: "POST",
            url: h.baseURL + h.dbopsGetRefId,
            data: {
              operation: h.operation,
              source: _,
              fields: Dt(e.fields, h.operation),
              forcefill: e.forcefill,
              datahash: F.data.refhash,
              scrid: e?.module_refid
            },
            headers: {
              Authorization: `Bearer ${h?.accessToken}`
            }
          }))?.data.refid;
        }
        let k = {
          refid: S,
          fields: f,
          datahash: F.data.refhash,
          refid1: h.refid,
          geolocation: x
        };
        A?.refid && (k.refid1 = A?.refid);
        const G = await H({
          method: "POST",
          url: h.baseURL + h[h.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: k,
          headers: {
            Authorization: `Bearer ${h?.accessToken}`
          }
        }), O = cr(G, e?.submit_msg);
        O && l?.success?.(O), i?.(null), s?.(G);
      } catch (T) {
        s?.(T), l?.error?.(lr(T)), console.error("API fetch failed:", T);
      }
    }
  }, E = {
    simple: /* @__PURE__ */ a.jsx(
      ti,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: c,
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
  const [d, c] = ce(!1), [g, y] = ce(null), [j, p] = re.useState(0), [E, b] = re.useState(null), A = e?.config, f = e?.config, x = f?.["popup.form"] ? "popup.form" : (f?.form, "form"), h = f?.[x] && Object.keys(f?.[x]).length > 0, T = (O) => {
    let _ = Ae(O.data);
    b(_);
  }, S = (O) => {
    b(O), p((_) => _ + 1);
  }, F = (O) => {
    let _ = Ae(O.data);
    y(_), c(!0);
  }, k = async () => {
    if (g?.id) {
      if (!r) {
        window.alert("Delete configuration missing.");
        return;
      }
      try {
        let O = e?.config;
        const _ = O?.["popup.form"] ? "popup.form" : (O?.form, "form"), D = O?.[_];
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
        y(null), c(!1);
      }
    }
  }, G = () => {
    y(null), c(!1);
  };
  return /* @__PURE__ */ a.jsx(a.Fragment, { children: o ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    A?.datagrid && /* @__PURE__ */ a.jsx(
      o,
      {
        methods: { ...t, deleteRecord: F, editRecord: T },
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
          refresh: j,
          native: r?.native
        },
        onButtonClick: l
      }
    ),
    h && /* @__PURE__ */ a.jsx(
      wn,
      {
        formJson: {
          ...f[x],
          source: {
            ...f?.[x].source,
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
      Qo,
      {
        open: d,
        onConfirm: k,
        onCancel: G
      }
    )
  ] }) : h && /* @__PURE__ */ a.jsx(
    wn,
    {
      formJson: {
        ...f[x],
        source: {
          ...f?.[x].source,
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
), ri = ({
  groups: e,
  groupNames: t,
  setActiveTabIndex: n,
  activeTabIndex: r,
  layoutConfig: s,
  showScrollHint: o,
  isCommonInfo: i,
  tabsNavRef: l
}) => {
  const [m, d] = ce(!1), c = We(null);
  return ve(() => {
    const g = (y) => {
      c.current && !c.current.contains(y.target) && d(!1);
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
      /* @__PURE__ */ a.jsxs("div", { className: "relative", ref: c, children: [
        /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => d(!m),
            className: "ml-1 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200",
            children: "⋮"
          }
        ),
        m && /* @__PURE__ */ a.jsx("div", { className: "absolute right-0 mt-2 w-48 max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-30", children: t.map((g, y) => /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              n(y), d(!1);
            },
            className: `w-full text-left px-3 py-2 text-sm truncate hover:bg-gray-100 ${r === y ? "bg-gray-50 font-semibold text-action" : "text-gray-700"}`,
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
        children: t.length > 0 ? t.map((g, y) => /* @__PURE__ */ a.jsx(
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
  module_refid: c,
  fieldOptions: g,
  setFieldOptions: y,
  buttons: j,
  handleAction: p,
  components: E
}) => {
  let b = j ? Object.entries(j).filter(([x, h]) => h.groups ? h.groups.includes(e[t]) : !0) : [];
  async function A(x, h) {
    const T = l?.[x];
    if (T) {
      try {
        await T();
      } catch (S) {
        console.error("Method execution failed:", S);
      }
      return;
    }
    p?.({ [x]: h }, s);
  }
  const f = Rr(r?.component, E);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "bg-white rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex-1 flex flex-col min-h-0",
      children: [
        e.length > 0 ? r?.type === "fields" && r?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: n?.fieldGridClass || "grid grid-cols-12 gap-2", children: r.fields.map((x, h) => Ht(x.hidden) ? null : /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${tt[rt(Number(x.width))] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ a.jsx(
              bt,
              {
                field: x,
                data: s ?? {},
                methods: l,
                refid: m,
                sqlOpsUrls: d,
                module_refid: c,
                setFieldOptions: y,
                ...g[x.name] ? { optionsOverride: g[x.name] } : {}
              }
            )
          },
          x?.name ?? `field-${h}`
        )) }) }) : r?.type === "component" && f ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: f }) : r ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: i(r, e[t] || "") }) : null : /* @__PURE__ */ a.jsx("div", { className: "flex-1 col-span-full text-center py-8 text-gray-500", children: "No data available" }),
        /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: b && b.map(([x, h]) => /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => A(x, h),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: h.label
          },
          x
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
              e.slice(0, 5).map((x, h) => /* @__PURE__ */ a.jsx(
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
          /* @__PURE__ */ a.jsx("div", { className: "flex gap-1", children: e.map((x, h) => /* @__PURE__ */ a.jsx(
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
  toast: c,
  handleAction: g = () => {
  },
  infoViewJson: y,
  fieldOptions: j,
  setFieldOptions: p,
  components: E
}) {
  const [b, A] = ce(0), [f, x] = ce(!1), h = We(null), T = Object.keys(e);
  ve(() => {
    const v = () => {
      if (h.current) {
        const K = h.current;
        x(K.scrollWidth > K.clientWidth);
      }
    };
    return v(), window.addEventListener("resize", v), () => window.removeEventListener("resize", v);
  }, [T.length]), ve(() => {
    if (h.current && T.length > 0) {
      const v = h.current.children[b];
      v && v.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [b, T.length]);
  const S = i === "tableft", F = i === "tabright", k = !S && !F, G = e[T[b] ?? ""] || null, O = {
    single: (v, K) => /* @__PURE__ */ a.jsx(jr, { fieldOptions: j, setFieldOptions: p, module_refid: y.module_refid, tabObj: v, methods: t, tabName: K, sqlOpsUrls: l, refid: m }),
    grid: (v, K) => /* @__PURE__ */ a.jsx(
      Sr,
      {
        ...d ? { Reports: d } : {},
        toast: c,
        handleAction: g,
        tabObj: v,
        methods: t,
        tabName: K,
        sqlOpsUrls: l,
        refid: m,
        infoViewJson: y
      }
    )
  }, _ = G?.config?.uimode, D = r[_] || O[_] || (() => /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No UI mode for this type" }));
  return k ? /* @__PURE__ */ a.jsxs("div", { className: "flex-1 flex flex-col min-h-0 ", children: [
    /* @__PURE__ */ a.jsx(
      ri,
      {
        groupNames: T,
        groups: e,
        setActiveTabIndex: A,
        activeTabIndex: b,
        tabsNavRef: h,
        isCommonInfo: s,
        showScrollHint: f,
        layoutConfig: o
      }
    ),
    /* @__PURE__ */ a.jsx(
      An,
      {
        groupNames: T,
        activeTabIndex: b,
        layoutConfig: o,
        tabObj: G,
        infoData: n,
        setActiveTabIndex: A,
        renderView: D,
        groups: e,
        methods: t,
        refid: m,
        sqlOpsUrls: l,
        module_refid: y.module_refid,
        fieldOptions: j,
        setFieldOptions: p,
        buttons: y.buttons,
        handleAction: g,
        ...E ? { components: E } : {}
      }
    )
  ] }) : /* @__PURE__ */ a.jsxs("div", { className: "flex-1 flex min-h-0", children: [
    S && /* @__PURE__ */ a.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ a.jsx(
      vn,
      {
        groupNames: T,
        groups: e,
        setActiveTabIndex: A,
        activeTabIndex: b
      }
    ) }),
    /* @__PURE__ */ a.jsx("main", { className: "flex-1 flex flex-col min-h-0 overflow-auto", children: /* @__PURE__ */ a.jsx(
      An,
      {
        groupNames: T,
        activeTabIndex: b,
        layoutConfig: o,
        tabObj: G,
        infoData: n,
        setActiveTabIndex: A,
        renderView: D,
        groups: e,
        methods: t,
        refid: m,
        module_refid: y.module_refid,
        sqlOpsUrls: l,
        fieldOptions: j,
        setFieldOptions: p,
        handleAction: g,
        ...E ? { components: E } : {}
      }
    ) }),
    F && /* @__PURE__ */ a.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ a.jsx(
      vn,
      {
        groupNames: T,
        groups: e,
        setActiveTabIndex: A,
        activeTabIndex: b
      }
    ) })
  ] });
}
function ni({ title: e, children: t, isFirst: n }) {
  const [r, s] = ce(n);
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
function si({
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
  fieldOptions: c,
  setFieldOptions: g,
  components: y
}) {
  const j = {
    single: (A, f) => /* @__PURE__ */ a.jsx(
      jr,
      {
        tabObj: A,
        methods: t,
        tabName: f,
        sqlOpsUrls: s,
        fieldOptions: c,
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
  async function b(A, f) {
    const x = t?.[A];
    if (x) {
      try {
        await x();
      } catch (h) {
        console.error("Method execution failed:", h);
      }
      return;
    }
    m?.({ [A]: f }, n);
  }
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ a.jsx("div", { className: "mx-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "space-y-1 flex flex-col min-h-0", children: [
    e && Object.entries(e).map(([A, f], x) => {
      let h = p ? Object.entries(p).filter(([S, F]) => F.groups ? F.groups.includes(A) : !1) : [];
      const T = Rr(f.component, y);
      return /* @__PURE__ */ a.jsxs(ni, { title: f.label, isFirst: x === 0, children: [
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
                ...c[S.name] ? { optionsOverride: c[S.name] } : {},
                sqlOpsUrls: s,
                refid: o
              }
            )
          },
          S?.name ?? `field-${F}`
        )) }) }) : f?.type === "component" && T ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: T }) : f ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: r[f.config?.uimode]?.(f) || j[f.config?.uimode]?.(f, A) || /* @__PURE__ */ a.jsx("div", { children: "No renderer for this type" }) }) : null,
        /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: h && h.map(([S, F]) => /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => b(S, F),
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
        onClick: () => b(A, f),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: f.label
      },
      A
    )) })
  ] }) }) });
}
function ai({ title: e, children: t }) {
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
function oi({
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
  fieldOptions: c,
  setFieldOptions: g,
  components: y
}) {
  const j = {
    single: (A, f) => /* @__PURE__ */ a.jsx(jr, { fieldOptions: c, setFieldOptions: g, module_refid: d?.module_refid, tabObj: A, methods: t, tabName: f, sqlOpsUrls: s, refid: o }),
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
  async function b(A, f) {
    const x = t?.[A];
    if (x) {
      try {
        await x();
      } catch (h) {
        console.error("Method execution failed:", h);
      }
      return;
    }
    m?.({ [A]: f }, n);
  }
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ a.jsx("div", { className: "mx-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "space-y-2  flex flex-col min-h-0", children: [
    e && Object.entries(e).map(([A, f], x) => {
      let h = p ? Object.entries(p).filter(([S, F]) => F.groups ? F.groups.includes(A) : !1) : [];
      const T = Rr(f.component, y);
      return /* @__PURE__ */ a.jsxs(ai, { title: f.label, children: [
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
                ...c[S.name] ? { optionsOverride: c[S.name] } : {},
                sqlOpsUrls: s,
                refid: o
              }
            )
          },
          S?.name ?? `field-${F}`
        )) }) }) : f?.type === "component" && T ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: T }) : f ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: r[f.config?.uimode]?.(f) || j[f.config?.uimode]?.(f, A) || /* @__PURE__ */ a.jsx("div", { children: "No renderer for this type" }) }) : null,
        /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: h && h.map(([S, F]) => /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => b(S, F),
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
        onClick: () => b(A, f),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: f.label
      },
      A
    )) })
  ] }) }) });
}
function Ri({
  infoViewJson: e,
  hiddenFields: t = [],
  groupFieldsFn: n = No,
  layoutConfig: r = {},
  viewRenderers: s = {},
  methods: o = {},
  Reports: i,
  toast: l,
  handleAction: m = () => {
  },
  components: d,
  initialvalues: c
}) {
  const [g, y] = re.useState(c ?? {}), j = Eo(e.infoview ?? {}), p = e.endPoints, E = re.useMemo(
    () => n(e.fields || {}),
    [e.fields, n]
  ), [b, A] = re.useState({}), f = (k, G) => {
    A((O) => ({ ...O, [k]: G }));
  }, x = e?.source?.refid;
  let h = { ...E };
  e.infoview?.groups && (h = { ...h, ...e.infoview.groups }), re.useEffect(() => {
    c && y((k) => ({
      ...k,
      ...c ?? {}
    }));
  }, [c]);
  const T = re.useCallback(
    (k) => {
      k && y((G) => ({
        ...G,
        ...k
      }));
    },
    []
  );
  re.useEffect(() => {
    let k = !1;
    return (async () => {
      const O = e?.source;
      if (!O?.type) {
        k || T({});
        return;
      }
      if (O.type === "method") {
        const _ = O.method, D = _ ? o[_] : void 0;
        if (D)
          try {
            const v = await D();
            k || T(v || {});
          } catch (v) {
            console.error("Method execution failed:", v), k || T({});
          }
        else
          k || T({});
      }
      if (O.type === "api")
        try {
          const _ = {
            method: O.method || "GET",
            url: p?.baseURL + O.endpoint,
            headers: {
              Authorization: `Bearer ${p?.accessToken}`
            },
            ...O.method === "GET" ? { params: { refid: O.refid } } : { data: { refid: O.refid } }
          }, { data: D } = await H(_), v = D?.results?.options ? D?.results?.options : D.data ? D.data : D.results ? D.results : D;
          k || T(v ?? {});
        } catch (_) {
          console.error("API fetch failed:", _), k || T({});
        }
      if (O.type === "sql" && O.refid && O.refid != "0" || O.dbopsid) {
        if (!p) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let _ = !1, D;
          O?.dbopsid && (_ = !0, D = O?.dbopsid);
          const v = await H({
            method: "GET",
            url: p.baseURL + p.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${p?.accessToken}`
            }
          });
          if (!_) {
            let se = {
              ...O
            };
            O.where && (se = {
              ...O,
              where: Ee(O.where, {
                refid: x
              })
            }), D = (await H({
              method: "POST",
              url: p.baseURL + p.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: se,
                fields: Dt(e.fields ?? {}, p.operation),
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
          k || T(ae);
        } catch (_) {
          k || T({}), console.error("API fetch failed:", _);
        }
      }
    })(), () => {
      k = !0;
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
  const F = (k) => {
    switch (k) {
      case "accordion":
        return /* @__PURE__ */ a.jsx(
          si,
          {
            groups: h,
            methods: o,
            infoData: g,
            viewRenderers: s,
            sqlOpsUrls: p,
            refid: x,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: m,
            infoViewJson: e,
            setFieldOptions: f,
            fieldOptions: b,
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
            viewMode: k,
            sqlOpsUrls: p,
            refid: x,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: m,
            infoViewJson: e,
            setFieldOptions: f,
            fieldOptions: b,
            ...d ? { components: d } : {}
          }
        );
      case "cards":
        return /* @__PURE__ */ a.jsx(
          oi,
          {
            groups: h,
            viewRenderers: s,
            methods: o,
            infoData: g,
            sqlOpsUrls: p,
            refid: x,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: m,
            infoViewJson: e,
            setFieldOptions: f,
            fieldOptions: b,
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
            viewMode: k,
            sqlOpsUrls: p,
            refid: x,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: m,
            infoViewJson: e,
            setFieldOptions: f,
            fieldOptions: b,
            ...d ? { components: d } : {}
          }
        );
    }
  };
  return /* @__PURE__ */ a.jsxs("div", { className: r.containerClass || "h-screen flex flex-col ", children: [
    S && p && /* @__PURE__ */ a.jsx(
      Xo,
      {
        commonInfo: S,
        infoData: g,
        hiddenFields: t,
        sqlOpsUrls: p,
        setFieldOptions: f,
        fieldOptions: b,
        module_refid: e.module_refid,
        refid: x,
        methods: o
      }
    ),
    F(j)
  ] });
}
export {
  Ri as InfoView
};
