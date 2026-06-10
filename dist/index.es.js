import ne, { useState as pe, useEffect as Re, useMemo as Rt, useRef as We, useLayoutEffect as fs } from "react";
import * as _e from "yup";
import { useFormik as ms } from "formik";
import { createPortal as ps } from "react-dom";
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
function hs() {
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
function ys() {
  return Wr || (Wr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(R) {
      if (R == null) return null;
      if (typeof R == "function")
        return R.$$typeof === U ? null : R.displayName || R.name || null;
      if (typeof R == "string") return R;
      switch (R) {
        case h:
          return "Fragment";
        case S:
          return "Profiler";
        case x:
          return "StrictMode";
        case v:
          return "Suspense";
        case _:
          return "SuspenseList";
        case k:
          return "Activity";
      }
      if (typeof R == "object")
        switch (typeof R.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), R.$$typeof) {
          case y:
            return "Portal";
          case u:
            return (R.displayName || "Context") + ".Provider";
          case b:
            return (R._context.displayName || "Context") + ".Consumer";
          case w:
            var P = R.render;
            return R = R.displayName, R || (R = P.displayName || P.name || "", R = R !== "" ? "ForwardRef(" + R + ")" : "ForwardRef"), R;
          case C:
            return P = R.displayName || null, P !== null ? P : e(R.type) || "Memo";
          case M:
            P = R._payload, R = R._init;
            try {
              return e(R(P));
            } catch {
            }
        }
      return null;
    }
    function t(R) {
      return "" + R;
    }
    function n(R) {
      try {
        t(R);
        var P = !1;
      } catch {
        P = !0;
      }
      if (P) {
        P = console;
        var ee = P.error, Y = typeof Symbol == "function" && Symbol.toStringTag && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ee.call(
          P,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          Y
        ), t(R);
      }
    }
    function r(R) {
      if (R === h) return "<>";
      if (typeof R == "object" && R !== null && R.$$typeof === M)
        return "<...>";
      try {
        var P = e(R);
        return P ? "<" + P + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var R = L.A;
      return R === null ? null : R.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(R) {
      if (I.call(R, "key")) {
        var P = Object.getOwnPropertyDescriptor(R, "key").get;
        if (P && P.isReactWarning) return !1;
      }
      return R.key !== void 0;
    }
    function l(R, P) {
      function ee() {
        J || (J = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          P
        ));
      }
      ee.isReactWarning = !0, Object.defineProperty(R, "key", {
        get: ee,
        configurable: !0
      });
    }
    function m() {
      var R = e(this.type);
      return ie[R] || (ie[R] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), R = this.props.ref, R !== void 0 ? R : null;
    }
    function d(R, P, ee, Y, fe, Q, T, D) {
      return ee = Q.ref, R = {
        $$typeof: A,
        type: R,
        key: P,
        props: Q,
        _owner: fe
      }, (ee !== void 0 ? ee : null) !== null ? Object.defineProperty(R, "ref", {
        enumerable: !1,
        get: m
      }) : Object.defineProperty(R, "ref", { enumerable: !1, value: null }), R._store = {}, Object.defineProperty(R._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(R, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(R, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: T
      }), Object.defineProperty(R, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: D
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    }
    function f(R, P, ee, Y, fe, Q, T, D) {
      var j = P.children;
      if (j !== void 0)
        if (Y)
          if (F(j)) {
            for (Y = 0; Y < j.length; Y++)
              p(j[Y]);
            Object.freeze && Object.freeze(j);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(j);
      if (I.call(P, "key")) {
        j = e(R);
        var K = Object.keys(P).filter(function(q) {
          return q !== "key";
        });
        Y = 0 < K.length ? "{key: someKey, " + K.join(": ..., ") + ": ...}" : "{key: someKey}", Te[j + Y] || (K = 0 < K.length ? "{" + K.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          Y,
          j,
          K,
          j
        ), Te[j + Y] = !0);
      }
      if (j = null, ee !== void 0 && (n(ee), j = "" + ee), i(P) && (n(P.key), j = "" + P.key), "key" in P) {
        ee = {};
        for (var te in P)
          te !== "key" && (ee[te] = P[te]);
      } else ee = P;
      return j && l(
        ee,
        typeof R == "function" ? R.displayName || R.name || "Unknown" : R
      ), d(
        R,
        j,
        Q,
        fe,
        s(),
        ee,
        T,
        D
      );
    }
    function p(R) {
      typeof R == "object" && R !== null && R.$$typeof === A && R._store && (R._store.validated = 1);
    }
    var N = ne, A = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), u = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), k = Symbol.for("react.activity"), U = Symbol.for("react.client.reference"), L = N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, F = Array.isArray, g = console.createTask ? console.createTask : function() {
      return null;
    };
    N = {
      react_stack_bottom_frame: function(R) {
        return R();
      }
    };
    var J, ie = {}, se = N.react_stack_bottom_frame.bind(
      N,
      o
    )(), oe = g(r(o)), Te = {};
    ot.Fragment = h, ot.jsx = function(R, P, ee, Y, fe) {
      var Q = 1e4 > L.recentlyCreatedOwnerStacks++;
      return f(
        R,
        P,
        ee,
        !1,
        Y,
        fe,
        Q ? Error("react-stack-top-frame") : se,
        Q ? g(r(R)) : oe
      );
    }, ot.jsxs = function(R, P, ee, Y, fe) {
      var Q = 1e4 > L.recentlyCreatedOwnerStacks++;
      return f(
        R,
        P,
        ee,
        !0,
        Y,
        fe,
        Q ? Error("react-stack-top-frame") : se,
        Q ? g(r(R)) : oe
      );
    };
  }()), ot;
}
var qr;
function gs() {
  return qr || (qr = 1, process.env.NODE_ENV === "production" ? Tt.exports = hs() : Tt.exports = ys()), Tt.exports;
}
var a = gs();
function An(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: bs } = Object.prototype, { getPrototypeOf: vr } = Object, { iterator: kt, toStringTag: Nn } = Symbol, Mt = /* @__PURE__ */ ((e) => (t) => {
  const n = bs.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ie = (e) => (e = e.toLowerCase(), (t) => Mt(t) === e), $t = (e) => (t) => typeof t === e, { isArray: Je } = Array, pt = $t("undefined");
function ht(e) {
  return e !== null && !pt(e) && e.constructor !== null && !pt(e.constructor) && Ae(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Tn = Ie("ArrayBuffer");
function xs(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Tn(e.buffer), t;
}
const ws = $t("string"), Ae = $t("function"), jn = $t("number"), yt = (e) => e !== null && typeof e == "object", vs = (e) => e === !0 || e === !1, _t = (e) => {
  if (Mt(e) !== "object")
    return !1;
  const t = vr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Nn in e) && !(kt in e);
}, Es = (e) => {
  if (!yt(e) || ht(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, As = Ie("Date"), Ns = Ie("File"), Ts = Ie("Blob"), js = Ie("FileList"), Ss = (e) => yt(e) && Ae(e.pipe), Rs = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Ae(e.append) && ((t = Mt(e)) === "formdata" || // detect form-data instance
  t === "object" && Ae(e.toString) && e.toString() === "[object FormData]"));
}, _s = Ie("URLSearchParams"), [Cs, Os, Ls, Is] = ["ReadableStream", "Request", "Response", "Headers"].map(Ie), Fs = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function gt(e, t, { allOwnKeys: n = !1 } = {}) {
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
function Sn(e, t) {
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
const Ge = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Rn = (e) => !pt(e) && e !== Ge;
function fr() {
  const { caseless: e } = Rn(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && Sn(t, s) || s;
    _t(t[o]) && _t(r) ? t[o] = fr(t[o], r) : _t(r) ? t[o] = fr({}, r) : Je(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && gt(arguments[r], n);
  return t;
}
const Ps = (e, t, n, { allOwnKeys: r } = {}) => (gt(t, (s, o) => {
  n && Ae(s) ? e[o] = An(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), Ds = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), ks = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Ms = (e, t, n, r) => {
  let s, o, i;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && vr(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, $s = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Bs = (e) => {
  if (!e) return null;
  if (Je(e)) return e;
  let t = e.length;
  if (!jn(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, zs = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && vr(Uint8Array)), Us = (e, t) => {
  const r = (e && e[kt]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Hs = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Gs = Ie("HTMLFormElement"), Ws = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Kr = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), qs = Ie("RegExp"), _n = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  gt(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, Ks = (e) => {
  _n(e, (t, n) => {
    if (Ae(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (Ae(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Vs = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return Je(e) ? r(e) : r(String(e).split(t)), n;
}, Ys = () => {
}, Xs = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Qs(e) {
  return !!(e && Ae(e.append) && e[Nn] === "FormData" && e[kt]);
}
const Zs = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (yt(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (ht(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = Je(r) ? [] : {};
        return gt(r, (i, l) => {
          const m = n(i, s + 1);
          !pt(m) && (o[l] = m);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, Js = Ie("AsyncFunction"), ea = (e) => e && (yt(e) || Ae(e)) && Ae(e.then) && Ae(e.catch), Cn = ((e, t) => e ? setImmediate : t ? ((n, r) => (Ge.addEventListener("message", ({ source: s, data: o }) => {
  s === Ge && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), Ge.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  Ae(Ge.postMessage)
), ta = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ge) : typeof process < "u" && process.nextTick || Cn, ra = (e) => e != null && Ae(e[kt]), E = {
  isArray: Je,
  isArrayBuffer: Tn,
  isBuffer: ht,
  isFormData: Rs,
  isArrayBufferView: xs,
  isString: ws,
  isNumber: jn,
  isBoolean: vs,
  isObject: yt,
  isPlainObject: _t,
  isEmptyObject: Es,
  isReadableStream: Cs,
  isRequest: Os,
  isResponse: Ls,
  isHeaders: Is,
  isUndefined: pt,
  isDate: As,
  isFile: Ns,
  isBlob: Ts,
  isRegExp: qs,
  isFunction: Ae,
  isStream: Ss,
  isURLSearchParams: _s,
  isTypedArray: zs,
  isFileList: js,
  forEach: gt,
  merge: fr,
  extend: Ps,
  trim: Fs,
  stripBOM: Ds,
  inherits: ks,
  toFlatObject: Ms,
  kindOf: Mt,
  kindOfTest: Ie,
  endsWith: $s,
  toArray: Bs,
  forEachEntry: Us,
  matchAll: Hs,
  isHTMLForm: Gs,
  hasOwnProperty: Kr,
  hasOwnProp: Kr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: _n,
  freezeMethods: Ks,
  toObjectSet: Vs,
  toCamelCase: Ws,
  noop: Ys,
  toFiniteNumber: Xs,
  findKey: Sn,
  global: Ge,
  isContextDefined: Rn,
  isSpecCompliantForm: Qs,
  toJSONObject: Zs,
  isAsyncFn: Js,
  isThenable: ea,
  setImmediate: Cn,
  asap: ta,
  isIterable: ra
};
function V(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
E.inherits(V, Error, {
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
      config: E.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const On = V.prototype, Ln = {};
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
  Ln[e] = { value: e };
});
Object.defineProperties(V, Ln);
Object.defineProperty(On, "isAxiosError", { value: !0 });
V.from = (e, t, n, r, s, o) => {
  const i = Object.create(On);
  return E.toFlatObject(e, i, function(m) {
    return m !== Error.prototype;
  }, (l) => l !== "isAxiosError"), V.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const na = null;
function mr(e) {
  return E.isPlainObject(e) || E.isArray(e);
}
function In(e) {
  return E.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Vr(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = In(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function sa(e) {
  return E.isArray(e) && !e.some(mr);
}
const aa = E.toFlatObject(E, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Bt(e, t, n) {
  if (!E.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = E.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, x) {
    return !E.isUndefined(x[h]);
  });
  const r = n.metaTokens, s = n.visitor || f, o = n.dots, i = n.indexes, m = (n.Blob || typeof Blob < "u" && Blob) && E.isSpecCompliantForm(t);
  if (!E.isFunction(s))
    throw new TypeError("visitor must be a function");
  function d(y) {
    if (y === null) return "";
    if (E.isDate(y))
      return y.toISOString();
    if (E.isBoolean(y))
      return y.toString();
    if (!m && E.isBlob(y))
      throw new V("Blob is not supported. Use a Buffer instead.");
    return E.isArrayBuffer(y) || E.isTypedArray(y) ? m && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y;
  }
  function f(y, h, x) {
    let S = y;
    if (y && !x && typeof y == "object") {
      if (E.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), y = JSON.stringify(y);
      else if (E.isArray(y) && sa(y) || (E.isFileList(y) || E.endsWith(h, "[]")) && (S = E.toArray(y)))
        return h = In(h), S.forEach(function(u, w) {
          !(E.isUndefined(u) || u === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Vr([h], w, o) : i === null ? h : h + "[]",
            d(u)
          );
        }), !1;
    }
    return mr(y) ? !0 : (t.append(Vr(x, h, o), d(y)), !1);
  }
  const p = [], N = Object.assign(aa, {
    defaultVisitor: f,
    convertValue: d,
    isVisitable: mr
  });
  function A(y, h) {
    if (!E.isUndefined(y)) {
      if (p.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      p.push(y), E.forEach(y, function(S, b) {
        (!(E.isUndefined(S) || S === null) && s.call(
          t,
          S,
          E.isString(b) ? b.trim() : b,
          h,
          N
        )) === !0 && A(S, h ? h.concat(b) : [b]);
      }), p.pop();
    }
  }
  if (!E.isObject(e))
    throw new TypeError("data must be an object");
  return A(e), t;
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
function Er(e, t) {
  this._pairs = [], e && Bt(e, this, t);
}
const Fn = Er.prototype;
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
function oa(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Pn(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || oa;
  E.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = E.isURLSearchParams(t) ? t.toString() : new Er(t, n).toString(r), o) {
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
    E.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Dn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ia = typeof URLSearchParams < "u" ? URLSearchParams : Er, la = typeof FormData < "u" ? FormData : null, ca = typeof Blob < "u" ? Blob : null, ua = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ia,
    FormData: la,
    Blob: ca
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ar = typeof window < "u" && typeof document < "u", pr = typeof navigator == "object" && navigator || void 0, da = Ar && (!pr || ["ReactNative", "NativeScript", "NS"].indexOf(pr.product) < 0), fa = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ma = Ar && window.location.href || "http://localhost", pa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ar,
  hasStandardBrowserEnv: da,
  hasStandardBrowserWebWorkerEnv: fa,
  navigator: pr,
  origin: ma
}, Symbol.toStringTag, { value: "Module" })), he = {
  ...pa,
  ...ua
};
function ha(e, t) {
  return Bt(e, new he.classes.URLSearchParams(), {
    visitor: function(n, r, s, o) {
      return he.isNode && E.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function ya(e) {
  return E.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function ga(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function kn(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const l = Number.isFinite(+i), m = o >= n.length;
    return i = !i && E.isArray(s) ? s.length : i, m ? (E.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !l) : ((!s[i] || !E.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && E.isArray(s[i]) && (s[i] = ga(s[i])), !l);
  }
  if (E.isFormData(e) && E.isFunction(e.entries)) {
    const n = {};
    return E.forEachEntry(e, (r, s) => {
      t(ya(r), s, n, 0);
    }), n;
  }
  return null;
}
function ba(e, t, n) {
  if (E.isString(e))
    try {
      return (t || JSON.parse)(e), E.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const bt = {
  transitional: Dn,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = E.isObject(t);
    if (o && E.isHTMLForm(t) && (t = new FormData(t)), E.isFormData(t))
      return s ? JSON.stringify(kn(t)) : t;
    if (E.isArrayBuffer(t) || E.isBuffer(t) || E.isStream(t) || E.isFile(t) || E.isBlob(t) || E.isReadableStream(t))
      return t;
    if (E.isArrayBufferView(t))
      return t.buffer;
    if (E.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return ha(t, this.formSerializer).toString();
      if ((l = E.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const m = this.env && this.env.FormData;
        return Bt(
          l ? { "files[]": t } : t,
          m && new m(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), ba(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || bt.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (E.isResponse(t) || E.isReadableStream(t))
      return t;
    if (t && E.isString(t) && (r && !this.responseType || s)) {
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
E.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  bt.headers[e] = {};
});
const xa = E.toObjectSet([
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
]), wa = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && xa[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Qr = Symbol("internals");
function it(e) {
  return e && String(e).trim().toLowerCase();
}
function Ct(e) {
  return e === !1 || e == null ? e : E.isArray(e) ? e.map(Ct) : String(e);
}
function va(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Ea = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Jt(e, t, n, r, s) {
  if (E.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!E.isString(t)) {
    if (E.isString(r))
      return t.indexOf(r) !== -1;
    if (E.isRegExp(r))
      return r.test(t);
  }
}
function Aa(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Na(e, t) {
  const n = E.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
let Ne = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(l, m, d) {
      const f = it(m);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const p = E.findKey(s, f);
      (!p || s[p] === void 0 || d === !0 || d === void 0 && s[p] !== !1) && (s[p || m] = Ct(l));
    }
    const i = (l, m) => E.forEach(l, (d, f) => o(d, f, m));
    if (E.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (E.isString(t) && (t = t.trim()) && !Ea(t))
      i(wa(t), n);
    else if (E.isObject(t) && E.isIterable(t)) {
      let l = {}, m, d;
      for (const f of t) {
        if (!E.isArray(f))
          throw TypeError("Object iterator must return a key-value pair");
        l[d = f[0]] = (m = l[d]) ? E.isArray(m) ? [...m, f[1]] : [m, f[1]] : f[1];
      }
      i(l, n);
    } else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = it(t), t) {
      const r = E.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return va(s);
        if (E.isFunction(n))
          return n.call(this, s, r);
        if (E.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = it(t), t) {
      const r = E.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Jt(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = it(i), i) {
        const l = E.findKey(r, i);
        l && (!n || Jt(r, r[l], l, n)) && (delete r[l], s = !0);
      }
    }
    return E.isArray(t) ? t.forEach(o) : o(t), s;
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
    return E.forEach(this, (s, o) => {
      const i = E.findKey(r, o);
      if (i) {
        n[i] = Ct(s), delete n[o];
        return;
      }
      const l = t ? Aa(o) : String(o).trim();
      l !== o && delete n[o], n[l] = Ct(s), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return E.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && E.isArray(r) ? r.join(", ") : r);
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
      r[l] || (Na(s, i), r[l] = !0);
    }
    return E.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
Ne.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
E.reduceDescriptors(Ne.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
E.freezeMethods(Ne);
function er(e, t) {
  const n = this || bt, r = t || n, s = Ne.from(r.headers);
  let o = r.data;
  return E.forEach(e, function(l) {
    o = l.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Mn(e) {
  return !!(e && e.__CANCEL__);
}
function et(e, t, n) {
  V.call(this, e ?? "canceled", V.ERR_CANCELED, t, n), this.name = "CanceledError";
}
E.inherits(et, V, {
  __CANCEL__: !0
});
function $n(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new V(
    "Request failed with status code " + n.status,
    [V.ERR_BAD_REQUEST, V.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Ta(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function ja(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(m) {
    const d = Date.now(), f = r[o];
    i || (i = d), n[s] = m, r[s] = d;
    let p = o, N = 0;
    for (; p !== s; )
      N += n[p++], p = p % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), d - i < t)
      return;
    const A = f && d - f;
    return A ? Math.round(N * 1e3 / A) : void 0;
  };
}
function Sa(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const i = (d, f = Date.now()) => {
    n = f, s = null, o && (clearTimeout(o), o = null), e(...d);
  };
  return [(...d) => {
    const f = Date.now(), p = f - n;
    p >= r ? i(d, f) : (s = d, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - p)));
  }, () => s && i(s)];
}
const It = (e, t, n = 3) => {
  let r = 0;
  const s = ja(50, 250);
  return Sa((o) => {
    const i = o.loaded, l = o.lengthComputable ? o.total : void 0, m = i - r, d = s(m), f = i <= l;
    r = i;
    const p = {
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
    e(p);
  }, n);
}, Zr = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Jr = (e) => (...t) => E.asap(() => e(...t)), Ra = he.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, he.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(he.origin),
  he.navigator && /(msie|trident)/i.test(he.navigator.userAgent)
) : () => !0, _a = he.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      E.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), E.isString(r) && i.push("path=" + r), E.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
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
function Ca(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Oa(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Bn(e, t, n) {
  let r = !Ca(t);
  return e && (r || n == !1) ? Oa(e, t) : t;
}
const en = (e) => e instanceof Ne ? { ...e } : e;
function Ke(e, t) {
  t = t || {};
  const n = {};
  function r(d, f, p, N) {
    return E.isPlainObject(d) && E.isPlainObject(f) ? E.merge.call({ caseless: N }, d, f) : E.isPlainObject(f) ? E.merge({}, f) : E.isArray(f) ? f.slice() : f;
  }
  function s(d, f, p, N) {
    if (E.isUndefined(f)) {
      if (!E.isUndefined(d))
        return r(void 0, d, p, N);
    } else return r(d, f, p, N);
  }
  function o(d, f) {
    if (!E.isUndefined(f))
      return r(void 0, f);
  }
  function i(d, f) {
    if (E.isUndefined(f)) {
      if (!E.isUndefined(d))
        return r(void 0, d);
    } else return r(void 0, f);
  }
  function l(d, f, p) {
    if (p in t)
      return r(d, f);
    if (p in e)
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
    headers: (d, f, p) => s(en(d), en(f), p, !0)
  };
  return E.forEach(Object.keys({ ...e, ...t }), function(f) {
    const p = m[f] || s, N = p(e[f], t[f], f);
    E.isUndefined(N) && p !== l || (n[f] = N);
  }), n;
}
const zn = (e) => {
  const t = Ke({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: l } = t;
  t.headers = i = Ne.from(i), t.url = Pn(Bn(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), l && i.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let m;
  if (E.isFormData(n)) {
    if (he.hasStandardBrowserEnv || he.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((m = i.getContentType()) !== !1) {
      const [d, ...f] = m ? m.split(";").map((p) => p.trim()).filter(Boolean) : [];
      i.setContentType([d || "multipart/form-data", ...f].join("; "));
    }
  }
  if (he.hasStandardBrowserEnv && (r && E.isFunction(r) && (r = r(t)), r || r !== !1 && Ra(t.url))) {
    const d = s && o && _a.read(o);
    d && i.set(s, d);
  }
  return t;
}, La = typeof XMLHttpRequest < "u", Ia = La && function(e) {
  return new Promise(function(n, r) {
    const s = zn(e);
    let o = s.data;
    const i = Ne.from(s.headers).normalize();
    let { responseType: l, onUploadProgress: m, onDownloadProgress: d } = s, f, p, N, A, y;
    function h() {
      A && A(), y && y(), s.cancelToken && s.cancelToken.unsubscribe(f), s.signal && s.signal.removeEventListener("abort", f);
    }
    let x = new XMLHttpRequest();
    x.open(s.method.toUpperCase(), s.url, !0), x.timeout = s.timeout;
    function S() {
      if (!x)
        return;
      const u = Ne.from(
        "getAllResponseHeaders" in x && x.getAllResponseHeaders()
      ), v = {
        data: !l || l === "text" || l === "json" ? x.responseText : x.response,
        status: x.status,
        statusText: x.statusText,
        headers: u,
        config: e,
        request: x
      };
      $n(function(C) {
        n(C), h();
      }, function(C) {
        r(C), h();
      }, v), x = null;
    }
    "onloadend" in x ? x.onloadend = S : x.onreadystatechange = function() {
      !x || x.readyState !== 4 || x.status === 0 && !(x.responseURL && x.responseURL.indexOf("file:") === 0) || setTimeout(S);
    }, x.onabort = function() {
      x && (r(new V("Request aborted", V.ECONNABORTED, e, x)), x = null);
    }, x.onerror = function() {
      r(new V("Network Error", V.ERR_NETWORK, e, x)), x = null;
    }, x.ontimeout = function() {
      let w = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const v = s.transitional || Dn;
      s.timeoutErrorMessage && (w = s.timeoutErrorMessage), r(new V(
        w,
        v.clarifyTimeoutError ? V.ETIMEDOUT : V.ECONNABORTED,
        e,
        x
      )), x = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in x && E.forEach(i.toJSON(), function(w, v) {
      x.setRequestHeader(v, w);
    }), E.isUndefined(s.withCredentials) || (x.withCredentials = !!s.withCredentials), l && l !== "json" && (x.responseType = s.responseType), d && ([N, y] = It(d, !0), x.addEventListener("progress", N)), m && x.upload && ([p, A] = It(m), x.upload.addEventListener("progress", p), x.upload.addEventListener("loadend", A)), (s.cancelToken || s.signal) && (f = (u) => {
      x && (r(!u || u.type ? new et(null, e, x) : u), x.abort(), x = null);
    }, s.cancelToken && s.cancelToken.subscribe(f), s.signal && (s.signal.aborted ? f() : s.signal.addEventListener("abort", f)));
    const b = Ta(s.url);
    if (b && he.protocols.indexOf(b) === -1) {
      r(new V("Unsupported protocol " + b + ":", V.ERR_BAD_REQUEST, e));
      return;
    }
    x.send(o || null);
  });
}, Fa = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const o = function(d) {
      if (!s) {
        s = !0, l();
        const f = d instanceof Error ? d : this.reason;
        r.abort(f instanceof V ? f : new et(f instanceof Error ? f.message : f));
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
    return m.unsubscribe = () => E.asap(l), m;
  }
}, Pa = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, Da = async function* (e, t) {
  for await (const n of ka(e))
    yield* Pa(n, t);
}, ka = async function* (e) {
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
  const s = Da(e, t);
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
        let p = f.byteLength;
        if (n) {
          let N = o += p;
          n(N);
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
}, zt = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Un = zt && typeof ReadableStream == "function", Ma = zt && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Hn = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, $a = Un && Hn(() => {
  let e = !1;
  const t = new Request(he.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), rn = 64 * 1024, hr = Un && Hn(() => E.isReadableStream(new Response("").body)), Ft = {
  stream: hr && ((e) => e.body)
};
zt && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Ft[t] && (Ft[t] = E.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new V(`Response type '${t}' is not supported`, V.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Ba = async (e) => {
  if (e == null)
    return 0;
  if (E.isBlob(e))
    return e.size;
  if (E.isSpecCompliantForm(e))
    return (await new Request(he.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (E.isArrayBufferView(e) || E.isArrayBuffer(e))
    return e.byteLength;
  if (E.isURLSearchParams(e) && (e = e + ""), E.isString(e))
    return (await Ma(e)).byteLength;
}, za = async (e, t) => {
  const n = E.toFiniteNumber(e.getContentLength());
  return n ?? Ba(t);
}, Ua = zt && (async (e) => {
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
    withCredentials: p = "same-origin",
    fetchOptions: N
  } = zn(e);
  d = d ? (d + "").toLowerCase() : "text";
  let A = Fa([s, o && o.toAbortSignal()], i), y;
  const h = A && A.unsubscribe && (() => {
    A.unsubscribe();
  });
  let x;
  try {
    if (m && $a && n !== "get" && n !== "head" && (x = await za(f, r)) !== 0) {
      let v = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), _;
      if (E.isFormData(r) && (_ = v.headers.get("content-type")) && f.setContentType(_), v.body) {
        const [C, M] = Zr(
          x,
          It(Jr(m))
        );
        r = tn(v.body, rn, C, M);
      }
    }
    E.isString(p) || (p = p ? "include" : "omit");
    const S = "credentials" in Request.prototype;
    y = new Request(t, {
      ...N,
      signal: A,
      method: n.toUpperCase(),
      headers: f.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: S ? p : void 0
    });
    let b = await fetch(y, N);
    const u = hr && (d === "stream" || d === "response");
    if (hr && (l || u && h)) {
      const v = {};
      ["status", "statusText", "headers"].forEach((k) => {
        v[k] = b[k];
      });
      const _ = E.toFiniteNumber(b.headers.get("content-length")), [C, M] = l && Zr(
        _,
        It(Jr(l), !0)
      ) || [];
      b = new Response(
        tn(b.body, rn, C, () => {
          M && M(), h && h();
        }),
        v
      );
    }
    d = d || "text";
    let w = await Ft[E.findKey(Ft, d) || "text"](b, e);
    return !u && h && h(), await new Promise((v, _) => {
      $n(v, _, {
        data: w,
        headers: Ne.from(b.headers),
        status: b.status,
        statusText: b.statusText,
        config: e,
        request: y
      });
    });
  } catch (S) {
    throw h && h(), S && S.name === "TypeError" && /Load failed|fetch/i.test(S.message) ? Object.assign(
      new V("Network Error", V.ERR_NETWORK, e, y),
      {
        cause: S.cause || S
      }
    ) : V.from(S, S && S.code, e, y);
  }
}), yr = {
  http: na,
  xhr: Ia,
  fetch: Ua
};
E.forEach(yr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const nn = (e) => `- ${e}`, Ha = (e) => E.isFunction(e) || e === null || e === !1, Gn = {
  getAdapter: (e) => {
    e = E.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !Ha(n) && (r = yr[(i = String(n)).toLowerCase()], r === void 0))
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
  adapters: yr
};
function tr(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new et(null, e);
}
function sn(e) {
  return tr(e), e.headers = Ne.from(e.headers), e.data = er.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Gn.getAdapter(e.adapter || bt.adapter)(e).then(function(r) {
    return tr(e), r.data = er.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Ne.from(r.headers), r;
  }, function(r) {
    return Mn(r) || (tr(e), r && r.response && (r.response.data = er.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Ne.from(r.response.headers))), Promise.reject(r);
  });
}
const Wn = "1.11.0", Ut = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ut[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const an = {};
Ut.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + Wn + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
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
function Ga(e, t, n) {
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
  assertOptions: Ga,
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
    }, !1), s != null && (E.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Ot.assertOptions(s, {
      encode: De.function,
      serialize: De.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Ot.assertOptions(n, {
      baseUrl: De.spelling("baseURL"),
      withXsrfToken: De.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && E.merge(
      o.common,
      o[n.method]
    );
    o && E.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (y) => {
        delete o[y];
      }
    ), n.headers = Ne.concat(i, o);
    const l = [];
    let m = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(n) === !1 || (m = m && h.synchronous, l.unshift(h.fulfilled, h.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function(h) {
      d.push(h.fulfilled, h.rejected);
    });
    let f, p = 0, N;
    if (!m) {
      const y = [sn.bind(this), void 0];
      for (y.unshift(...l), y.push(...d), N = y.length, f = Promise.resolve(n); p < N; )
        f = f.then(y[p++], y[p++]);
      return f;
    }
    N = l.length;
    let A = n;
    for (p = 0; p < N; ) {
      const y = l[p++], h = l[p++];
      try {
        A = y(A);
      } catch (x) {
        h.call(this, x);
        break;
      }
    }
    try {
      f = sn.call(this, A);
    } catch (y) {
      return Promise.reject(y);
    }
    for (p = 0, N = d.length; p < N; )
      f = f.then(d[p++], d[p++]);
    return f;
  }
  getUri(t) {
    t = Ke(this.defaults, t);
    const n = Bn(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Pn(n, t.params, t.paramsSerializer);
  }
};
E.forEach(["delete", "get", "head", "options"], function(t) {
  qe.prototype[t] = function(n, r) {
    return this.request(Ke(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
E.forEach(["post", "put", "patch"], function(t) {
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
let Wa = class qn {
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
      token: new qn(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function qa(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Ka(e) {
  return E.isObject(e) && e.isAxiosError === !0;
}
const gr = {
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
Object.entries(gr).forEach(([e, t]) => {
  gr[t] = e;
});
function Kn(e) {
  const t = new qe(e), n = An(qe.prototype.request, t);
  return E.extend(n, qe.prototype, t, { allOwnKeys: !0 }), E.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Kn(Ke(e, s));
  }, n;
}
const W = Kn(bt);
W.Axios = qe;
W.CanceledError = et;
W.CancelToken = Wa;
W.isCancel = Mn;
W.VERSION = Wn;
W.toFormData = Bt;
W.AxiosError = V;
W.Cancel = W.CanceledError;
W.all = function(t) {
  return Promise.all(t);
};
W.spread = qa;
W.isAxiosError = Ka;
W.mergeConfig = Ke;
W.AxiosHeaders = Ne;
W.formToJSON = (e) => kn(E.isHTMLForm(e) ? new FormData(e) : e);
W.getAdapter = Gn.getAdapter;
W.HttpStatusCode = gr;
W.default = W;
const {
  Axios: ti,
  AxiosError: ri,
  CanceledError: ni,
  isCancel: si,
  CancelToken: ai,
  VERSION: oi,
  all: ii,
  Cancel: li,
  isAxiosError: ci,
  spread: ui,
  toFormData: di,
  AxiosHeaders: fi,
  HttpStatusCode: mi,
  formToJSON: pi,
  getAdapter: hi,
  mergeConfig: yi
} = W;
/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */
const {
  entries: Vn,
  setPrototypeOf: on,
  isFrozen: Va,
  getPrototypeOf: Ya,
  getOwnPropertyDescriptor: Xa
} = Object;
let {
  freeze: ge,
  seal: Ce,
  create: br
} = Object, {
  apply: xr,
  construct: wr
} = typeof Reflect < "u" && Reflect;
ge || (ge = function(t) {
  return t;
});
Ce || (Ce = function(t) {
  return t;
});
xr || (xr = function(t, n) {
  for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    s[o - 2] = arguments[o];
  return t.apply(n, s);
});
wr || (wr = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return new t(...r);
});
const jt = be(Array.prototype.forEach), Qa = be(Array.prototype.lastIndexOf), ln = be(Array.prototype.pop), lt = be(Array.prototype.push), Za = be(Array.prototype.splice), Lt = be(String.prototype.toLowerCase), rr = be(String.prototype.toString), nr = be(String.prototype.match), ct = be(String.prototype.replace), Ja = be(String.prototype.indexOf), eo = be(String.prototype.trim), Oe = be(Object.prototype.hasOwnProperty), ye = be(RegExp.prototype.test), ut = to(TypeError);
function be(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    return xr(e, t, r);
  };
}
function to(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return wr(e, n);
  };
}
function X(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Lt;
  on && on(e, null);
  let r = t.length;
  for (; r--; ) {
    let s = t[r];
    if (typeof s == "string") {
      const o = n(s);
      o !== s && (Va(t) || (t[r] = o), s = o);
    }
    e[s] = !0;
  }
  return e;
}
function ro(e) {
  for (let t = 0; t < e.length; t++)
    Oe(e, t) || (e[t] = null);
  return e;
}
function ke(e) {
  const t = br(null);
  for (const [n, r] of Vn(e))
    Oe(e, n) && (Array.isArray(r) ? t[n] = ro(r) : r && typeof r == "object" && r.constructor === Object ? t[n] = ke(r) : t[n] = r);
  return t;
}
function dt(e, t) {
  for (; e !== null; ) {
    const r = Xa(e, t);
    if (r) {
      if (r.get)
        return be(r.get);
      if (typeof r.value == "function")
        return be(r.value);
    }
    e = Ya(e);
  }
  function n() {
    return null;
  }
  return n;
}
const cn = ge(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), sr = ge(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ar = ge(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), no = ge(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), or = ge(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), so = ge(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), un = ge(["#text"]), dn = ge(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ir = ge(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), fn = ge(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), St = ge(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ao = Ce(/\{\{[\w\W]*|[\w\W]*\}\}/gm), oo = Ce(/<%[\w\W]*|[\w\W]*%>/gm), io = Ce(/\$\{[\w\W]*/gm), lo = Ce(/^data-[\-\w.\u00B7-\uFFFF]+$/), co = Ce(/^aria-[\-\w]+$/), Yn = Ce(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), uo = Ce(/^(?:\w+script|data):/i), fo = Ce(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Xn = Ce(/^html$/i), mo = Ce(/^[a-z][.\w]*(-[.\w]+)+$/i);
var mn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: co,
  ATTR_WHITESPACE: fo,
  CUSTOM_ELEMENT: mo,
  DATA_ATTR: lo,
  DOCTYPE_NAME: Xn,
  ERB_EXPR: oo,
  IS_ALLOWED_URI: Yn,
  IS_SCRIPT_OR_DATA: uo,
  MUSTACHE_EXPR: ao,
  TMPLIT_EXPR: io
});
const ft = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, po = function() {
  return typeof window > "u" ? null : window;
}, ho = function(t, n) {
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
function Qn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : po();
  const t = (H) => Qn(H);
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
    NamedNodeMap: f = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: p,
    DOMParser: N,
    trustedTypes: A
  } = e, y = m.prototype, h = dt(y, "cloneNode"), x = dt(y, "remove"), S = dt(y, "nextSibling"), b = dt(y, "childNodes"), u = dt(y, "parentNode");
  if (typeof i == "function") {
    const H = n.createElement("template");
    H.content && H.content.ownerDocument && (n = H.content.ownerDocument);
  }
  let w, v = "";
  const {
    implementation: _,
    createNodeIterator: C,
    createDocumentFragment: M,
    getElementsByTagName: k
  } = n, {
    importNode: U
  } = r;
  let L = pn();
  t.isSupported = typeof Vn == "function" && typeof u == "function" && _ && _.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: I,
    ERB_EXPR: F,
    TMPLIT_EXPR: g,
    DATA_ATTR: J,
    ARIA_ATTR: ie,
    IS_SCRIPT_OR_DATA: se,
    ATTR_WHITESPACE: oe,
    CUSTOM_ELEMENT: Te
  } = mn;
  let {
    IS_ALLOWED_URI: R
  } = mn, P = null;
  const ee = X({}, [...cn, ...sr, ...ar, ...or, ...un]);
  let Y = null;
  const fe = X({}, [...dn, ...ir, ...fn, ...St]);
  let Q = Object.seal(br(null, {
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
  })), T = null, D = null;
  const j = Object.seal(br(null, {
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
  let K = !0, te = !0, q = !1, $ = !0, B = !1, G = !0, Z = !1, ue = !1, re = !1, xe = !1, je = !1, Se = !1, wt = !0, ze = !1;
  const Gt = "user-content-";
  let Wt = !0, nt = !1, Ve = {}, Fe = null;
  const qt = X({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let _r = null;
  const Cr = X({}, ["audio", "video", "img", "source", "image", "track"]);
  let Kt = null;
  const Or = X({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), vt = "http://www.w3.org/1998/Math/MathML", Et = "http://www.w3.org/2000/svg", Me = "http://www.w3.org/1999/xhtml";
  let Ye = Me, Vt = !1, Yt = null;
  const as = X({}, [vt, Et, Me], rr);
  let At = X({}, ["mi", "mo", "mn", "ms", "mtext"]), Nt = X({}, ["annotation-xml"]);
  const os = X({}, ["title", "style", "font", "a", "script"]);
  let st = null;
  const is = ["application/xhtml+xml", "text/html"], ls = "text/html";
  let ce = null, Xe = null;
  const cs = n.createElement("form"), Lr = function(c) {
    return c instanceof RegExp || c instanceof Function;
  }, Xt = function() {
    let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Xe && Xe === c)) {
      if ((!c || typeof c != "object") && (c = {}), c = ke(c), st = // eslint-disable-next-line unicorn/prefer-includes
      is.indexOf(c.PARSER_MEDIA_TYPE) === -1 ? ls : c.PARSER_MEDIA_TYPE, ce = st === "application/xhtml+xml" ? rr : Lt, P = Oe(c, "ALLOWED_TAGS") ? X({}, c.ALLOWED_TAGS, ce) : ee, Y = Oe(c, "ALLOWED_ATTR") ? X({}, c.ALLOWED_ATTR, ce) : fe, Yt = Oe(c, "ALLOWED_NAMESPACES") ? X({}, c.ALLOWED_NAMESPACES, rr) : as, Kt = Oe(c, "ADD_URI_SAFE_ATTR") ? X(ke(Or), c.ADD_URI_SAFE_ATTR, ce) : Or, _r = Oe(c, "ADD_DATA_URI_TAGS") ? X(ke(Cr), c.ADD_DATA_URI_TAGS, ce) : Cr, Fe = Oe(c, "FORBID_CONTENTS") ? X({}, c.FORBID_CONTENTS, ce) : qt, T = Oe(c, "FORBID_TAGS") ? X({}, c.FORBID_TAGS, ce) : ke({}), D = Oe(c, "FORBID_ATTR") ? X({}, c.FORBID_ATTR, ce) : ke({}), Ve = Oe(c, "USE_PROFILES") ? c.USE_PROFILES : !1, K = c.ALLOW_ARIA_ATTR !== !1, te = c.ALLOW_DATA_ATTR !== !1, q = c.ALLOW_UNKNOWN_PROTOCOLS || !1, $ = c.ALLOW_SELF_CLOSE_IN_ATTR !== !1, B = c.SAFE_FOR_TEMPLATES || !1, G = c.SAFE_FOR_XML !== !1, Z = c.WHOLE_DOCUMENT || !1, xe = c.RETURN_DOM || !1, je = c.RETURN_DOM_FRAGMENT || !1, Se = c.RETURN_TRUSTED_TYPE || !1, re = c.FORCE_BODY || !1, wt = c.SANITIZE_DOM !== !1, ze = c.SANITIZE_NAMED_PROPS || !1, Wt = c.KEEP_CONTENT !== !1, nt = c.IN_PLACE || !1, R = c.ALLOWED_URI_REGEXP || Yn, Ye = c.NAMESPACE || Me, At = c.MATHML_TEXT_INTEGRATION_POINTS || At, Nt = c.HTML_INTEGRATION_POINTS || Nt, Q = c.CUSTOM_ELEMENT_HANDLING || {}, c.CUSTOM_ELEMENT_HANDLING && Lr(c.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Q.tagNameCheck = c.CUSTOM_ELEMENT_HANDLING.tagNameCheck), c.CUSTOM_ELEMENT_HANDLING && Lr(c.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Q.attributeNameCheck = c.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), c.CUSTOM_ELEMENT_HANDLING && typeof c.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (Q.allowCustomizedBuiltInElements = c.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), B && (te = !1), je && (xe = !0), Ve && (P = X({}, un), Y = [], Ve.html === !0 && (X(P, cn), X(Y, dn)), Ve.svg === !0 && (X(P, sr), X(Y, ir), X(Y, St)), Ve.svgFilters === !0 && (X(P, ar), X(Y, ir), X(Y, St)), Ve.mathMl === !0 && (X(P, or), X(Y, fn), X(Y, St))), c.ADD_TAGS && (typeof c.ADD_TAGS == "function" ? j.tagCheck = c.ADD_TAGS : (P === ee && (P = ke(P)), X(P, c.ADD_TAGS, ce))), c.ADD_ATTR && (typeof c.ADD_ATTR == "function" ? j.attributeCheck = c.ADD_ATTR : (Y === fe && (Y = ke(Y)), X(Y, c.ADD_ATTR, ce))), c.ADD_URI_SAFE_ATTR && X(Kt, c.ADD_URI_SAFE_ATTR, ce), c.FORBID_CONTENTS && (Fe === qt && (Fe = ke(Fe)), X(Fe, c.FORBID_CONTENTS, ce)), c.ADD_FORBID_CONTENTS && (Fe === qt && (Fe = ke(Fe)), X(Fe, c.ADD_FORBID_CONTENTS, ce)), Wt && (P["#text"] = !0), Z && X(P, ["html", "head", "body"]), P.table && (X(P, ["tbody"]), delete T.tbody), c.TRUSTED_TYPES_POLICY) {
        if (typeof c.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw ut('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof c.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw ut('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        w = c.TRUSTED_TYPES_POLICY, v = w.createHTML("");
      } else
        w === void 0 && (w = ho(A, s)), w !== null && typeof v == "string" && (v = w.createHTML(""));
      ge && ge(c), Xe = c;
    }
  }, Ir = X({}, [...sr, ...ar, ...no]), Fr = X({}, [...or, ...so]), us = function(c) {
    let O = u(c);
    (!O || !O.tagName) && (O = {
      namespaceURI: Ye,
      tagName: "template"
    });
    const z = Lt(c.tagName), ae = Lt(O.tagName);
    return Yt[c.namespaceURI] ? c.namespaceURI === Et ? O.namespaceURI === Me ? z === "svg" : O.namespaceURI === vt ? z === "svg" && (ae === "annotation-xml" || At[ae]) : !!Ir[z] : c.namespaceURI === vt ? O.namespaceURI === Me ? z === "math" : O.namespaceURI === Et ? z === "math" && Nt[ae] : !!Fr[z] : c.namespaceURI === Me ? O.namespaceURI === Et && !Nt[ae] || O.namespaceURI === vt && !At[ae] ? !1 : !Fr[z] && (os[z] || !Ir[z]) : !!(st === "application/xhtml+xml" && Yt[c.namespaceURI]) : !1;
  }, Pe = function(c) {
    lt(t.removed, {
      element: c
    });
    try {
      u(c).removeChild(c);
    } catch {
      x(c);
    }
  }, Ue = function(c, O) {
    try {
      lt(t.removed, {
        attribute: O.getAttributeNode(c),
        from: O
      });
    } catch {
      lt(t.removed, {
        attribute: null,
        from: O
      });
    }
    if (O.removeAttribute(c), c === "is")
      if (xe || je)
        try {
          Pe(O);
        } catch {
        }
      else
        try {
          O.setAttribute(c, "");
        } catch {
        }
  }, Pr = function(c) {
    let O = null, z = null;
    if (re)
      c = "<remove></remove>" + c;
    else {
      const le = nr(c, /^[\r\n\t ]+/);
      z = le && le[0];
    }
    st === "application/xhtml+xml" && Ye === Me && (c = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + c + "</body></html>");
    const ae = w ? w.createHTML(c) : c;
    if (Ye === Me)
      try {
        O = new N().parseFromString(ae, st);
      } catch {
      }
    if (!O || !O.documentElement) {
      O = _.createDocument(Ye, "template", null);
      try {
        O.documentElement.innerHTML = Vt ? v : ae;
      } catch {
      }
    }
    const me = O.body || O.documentElement;
    return c && z && me.insertBefore(n.createTextNode(z), me.childNodes[0] || null), Ye === Me ? k.call(O, Z ? "html" : "body")[0] : Z ? O.documentElement : me;
  }, Dr = function(c) {
    return C.call(
      c.ownerDocument || c,
      c,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null
    );
  }, Qt = function(c) {
    return c instanceof p && (typeof c.nodeName != "string" || typeof c.textContent != "string" || typeof c.removeChild != "function" || !(c.attributes instanceof f) || typeof c.removeAttribute != "function" || typeof c.setAttribute != "function" || typeof c.namespaceURI != "string" || typeof c.insertBefore != "function" || typeof c.hasChildNodes != "function");
  }, kr = function(c) {
    return typeof l == "function" && c instanceof l;
  };
  function $e(H, c, O) {
    jt(H, (z) => {
      z.call(t, c, O, Xe);
    });
  }
  const Mr = function(c) {
    let O = null;
    if ($e(L.beforeSanitizeElements, c, null), Qt(c))
      return Pe(c), !0;
    const z = ce(c.nodeName);
    if ($e(L.uponSanitizeElement, c, {
      tagName: z,
      allowedTags: P
    }), G && c.hasChildNodes() && !kr(c.firstElementChild) && ye(/<[/\w!]/g, c.innerHTML) && ye(/<[/\w!]/g, c.textContent) || c.nodeType === ft.progressingInstruction || G && c.nodeType === ft.comment && ye(/<[/\w]/g, c.data))
      return Pe(c), !0;
    if (!(j.tagCheck instanceof Function && j.tagCheck(z)) && (!P[z] || T[z])) {
      if (!T[z] && Br(z) && (Q.tagNameCheck instanceof RegExp && ye(Q.tagNameCheck, z) || Q.tagNameCheck instanceof Function && Q.tagNameCheck(z)))
        return !1;
      if (Wt && !Fe[z]) {
        const ae = u(c) || c.parentNode, me = b(c) || c.childNodes;
        if (me && ae) {
          const le = me.length;
          for (let we = le - 1; we >= 0; --we) {
            const Be = h(me[we], !0);
            Be.__removalCount = (c.__removalCount || 0) + 1, ae.insertBefore(Be, S(c));
          }
        }
      }
      return Pe(c), !0;
    }
    return c instanceof m && !us(c) || (z === "noscript" || z === "noembed" || z === "noframes") && ye(/<\/no(script|embed|frames)/i, c.innerHTML) ? (Pe(c), !0) : (B && c.nodeType === ft.text && (O = c.textContent, jt([I, F, g], (ae) => {
      O = ct(O, ae, " ");
    }), c.textContent !== O && (lt(t.removed, {
      element: c.cloneNode()
    }), c.textContent = O)), $e(L.afterSanitizeElements, c, null), !1);
  }, $r = function(c, O, z) {
    if (wt && (O === "id" || O === "name") && (z in n || z in cs))
      return !1;
    if (!(te && !D[O] && ye(J, O))) {
      if (!(K && ye(ie, O))) {
        if (!(j.attributeCheck instanceof Function && j.attributeCheck(O, c))) {
          if (!Y[O] || D[O]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(Br(c) && (Q.tagNameCheck instanceof RegExp && ye(Q.tagNameCheck, c) || Q.tagNameCheck instanceof Function && Q.tagNameCheck(c)) && (Q.attributeNameCheck instanceof RegExp && ye(Q.attributeNameCheck, O) || Q.attributeNameCheck instanceof Function && Q.attributeNameCheck(O, c)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              O === "is" && Q.allowCustomizedBuiltInElements && (Q.tagNameCheck instanceof RegExp && ye(Q.tagNameCheck, z) || Q.tagNameCheck instanceof Function && Q.tagNameCheck(z)))
            ) return !1;
          } else if (!Kt[O]) {
            if (!ye(R, ct(z, oe, ""))) {
              if (!((O === "src" || O === "xlink:href" || O === "href") && c !== "script" && Ja(z, "data:") === 0 && _r[c])) {
                if (!(q && !ye(se, ct(z, oe, "")))) {
                  if (z)
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
    return c !== "annotation-xml" && nr(c, Te);
  }, zr = function(c) {
    $e(L.beforeSanitizeAttributes, c, null);
    const {
      attributes: O
    } = c;
    if (!O || Qt(c))
      return;
    const z = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Y,
      forceKeepAttr: void 0
    };
    let ae = O.length;
    for (; ae--; ) {
      const me = O[ae], {
        name: le,
        namespaceURI: we,
        value: Be
      } = me, Qe = ce(le), Zt = Be;
      let de = le === "value" ? Zt : eo(Zt);
      if (z.attrName = Qe, z.attrValue = de, z.keepAttr = !0, z.forceKeepAttr = void 0, $e(L.uponSanitizeAttribute, c, z), de = z.attrValue, ze && (Qe === "id" || Qe === "name") && (Ue(le, c), de = Gt + de), G && ye(/((--!?|])>)|<\/(style|title|textarea)/i, de)) {
        Ue(le, c);
        continue;
      }
      if (Qe === "attributename" && nr(de, "href")) {
        Ue(le, c);
        continue;
      }
      if (z.forceKeepAttr)
        continue;
      if (!z.keepAttr) {
        Ue(le, c);
        continue;
      }
      if (!$ && ye(/\/>/i, de)) {
        Ue(le, c);
        continue;
      }
      B && jt([I, F, g], (Hr) => {
        de = ct(de, Hr, " ");
      });
      const Ur = ce(c.nodeName);
      if (!$r(Ur, Qe, de)) {
        Ue(le, c);
        continue;
      }
      if (w && typeof A == "object" && typeof A.getAttributeType == "function" && !we)
        switch (A.getAttributeType(Ur, Qe)) {
          case "TrustedHTML": {
            de = w.createHTML(de);
            break;
          }
          case "TrustedScriptURL": {
            de = w.createScriptURL(de);
            break;
          }
        }
      if (de !== Zt)
        try {
          we ? c.setAttributeNS(we, le, de) : c.setAttribute(le, de), Qt(c) ? Pe(c) : ln(t.removed);
        } catch {
          Ue(le, c);
        }
    }
    $e(L.afterSanitizeAttributes, c, null);
  }, ds = function H(c) {
    let O = null;
    const z = Dr(c);
    for ($e(L.beforeSanitizeShadowDOM, c, null); O = z.nextNode(); )
      $e(L.uponSanitizeShadowNode, O, null), Mr(O), zr(O), O.content instanceof o && H(O.content);
    $e(L.afterSanitizeShadowDOM, c, null);
  };
  return t.sanitize = function(H) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, O = null, z = null, ae = null, me = null;
    if (Vt = !H, Vt && (H = "<!-->"), typeof H != "string" && !kr(H))
      if (typeof H.toString == "function") {
        if (H = H.toString(), typeof H != "string")
          throw ut("dirty is not a string, aborting");
      } else
        throw ut("toString is not a function");
    if (!t.isSupported)
      return H;
    if (ue || Xt(c), t.removed = [], typeof H == "string" && (nt = !1), nt) {
      if (H.nodeName) {
        const Be = ce(H.nodeName);
        if (!P[Be] || T[Be])
          throw ut("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (H instanceof l)
      O = Pr("<!---->"), z = O.ownerDocument.importNode(H, !0), z.nodeType === ft.element && z.nodeName === "BODY" || z.nodeName === "HTML" ? O = z : O.appendChild(z);
    else {
      if (!xe && !B && !Z && // eslint-disable-next-line unicorn/prefer-includes
      H.indexOf("<") === -1)
        return w && Se ? w.createHTML(H) : H;
      if (O = Pr(H), !O)
        return xe ? null : Se ? v : "";
    }
    O && re && Pe(O.firstChild);
    const le = Dr(nt ? H : O);
    for (; ae = le.nextNode(); )
      Mr(ae), zr(ae), ae.content instanceof o && ds(ae.content);
    if (nt)
      return H;
    if (xe) {
      if (je)
        for (me = M.call(O.ownerDocument); O.firstChild; )
          me.appendChild(O.firstChild);
      else
        me = O;
      return (Y.shadowroot || Y.shadowrootmode) && (me = U.call(r, me, !0)), me;
    }
    let we = Z ? O.outerHTML : O.innerHTML;
    return Z && P["!doctype"] && O.ownerDocument && O.ownerDocument.doctype && O.ownerDocument.doctype.name && ye(Xn, O.ownerDocument.doctype.name) && (we = "<!DOCTYPE " + O.ownerDocument.doctype.name + `>
` + we), B && jt([I, F, g], (Be) => {
      we = ct(we, Be, " ");
    }), w && Se ? w.createHTML(we) : we;
  }, t.setConfig = function() {
    let H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Xt(H), ue = !0;
  }, t.clearConfig = function() {
    Xe = null, ue = !1;
  }, t.isValidAttribute = function(H, c, O) {
    Xe || Xt({});
    const z = ce(H), ae = ce(c);
    return $r(z, ae, O);
  }, t.addHook = function(H, c) {
    typeof c == "function" && lt(L[H], c);
  }, t.removeHook = function(H, c) {
    if (c !== void 0) {
      const O = Qa(L[H], c);
      return O === -1 ? void 0 : Za(L[H], O, 1)[0];
    }
    return ln(L[H]);
  }, t.removeHooks = function(H) {
    L[H] = [];
  }, t.removeAllHooks = function() {
    L = pn();
  }, t;
}
var yo = Qn();
const hn = ["file", "camera", "camera2", "photo", "avatar", "attachment"];
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
async function Zn() {
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
function wo(e, t) {
  const n = new Set(
    t.filter((r) => r.nodb === !0 || r.nosave === !0).map((r) => r.name)
  );
  return Object.fromEntries(
    Object.entries(e).filter(([r]) => !n.has(r))
  );
}
function Pt(e, t = "create") {
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
) : e, Jn = (e) => {
  const t = Array.isArray(e?.data?.data) ? e.data.data[0] : Array.isArray(e?.data) ? e.data[0] : e?.data?.data ?? e?.data;
  return t && typeof t == "object" && !Array.isArray(t) ? t : null;
}, Le = (e, t, n, r) => {
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
function yn(e, t) {
  if (!t || Object.keys(t).length === 0) return e;
  if (typeof e == "number")
    return t[String(e)] ?? e;
  if (typeof e == "string") {
    const r = e.split(",").map((s) => s.trim()).map((s) => t[s]).filter(Boolean);
    return r.length ? r.join(", ") : e;
  }
  return e;
}
const Ht = (e) => e === !0 || e === "true", Eo = (e, t, n, r) => {
  e.forEach((s) => {
    const o = s?.name;
    if (!o) return;
    let i = r?.[o];
    i == null && (i = s.default), hn.includes(s.type ?? "") ? t[o] = Array.isArray(i) ? i : typeof i == "string" && i.length > 0 ? i.split(",").map((m) => m.trim()).filter(Boolean) : [] : s.multiple === !0 || s.type === "tags" ? t[o] = Array.isArray(i) ? i : typeof i == "string" ? i.split(",").map((m) => m.trim()).filter(Boolean) : [] : s.type === "checkbox" ? t[o] = String(i ?? "false") : s.type === "json" ? t[o] = typeof i == "object" && i !== null ? JSON.stringify(i, null, 2) : i ?? "" : s.type === "date" ? t[o] = typeof i == "string" && i.trim() ? i.slice(0, 10) : null : s.type === "time" ? typeof i == "string" ? i.includes("T") ? t[o] = i.slice(11, 16) : t[o] = i.slice(0, 5) : t[o] = "" : o === "blocked" || o === "blacklist" ? t[o] = String(i ?? "false") : t[o] = i ?? "";
    let l;
    if (hn.includes(s.type ?? "")) {
      const m = _e.array().of(
        _e.string()
      );
      l = s.required ? m.min(1, s.error_message || `${s.label} is required`) : m;
    } else if (s.multiple === !0 || s.type === "tags") {
      const m = _e.array().of(_e.string());
      l = s.required ? m.min(1, s.error_message || `${s.label} is required`) : m;
    } else s.type === "email" ? l = _e.string().email("Invalid email") : s.type === "number" ? l = _e.number().typeError("Must be a number") : s.type === "json" ? l = _e.string().test("json", "Invalid JSON", (m) => {
      if (!m) return !0;
      try {
        return JSON.parse(m), !0;
      } catch {
        return !1;
      }
    }) : s.type === "date" ? l = _e.string().nullable() : l = _e.string();
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
            (f) => {
              if (f == null || f === "") return !0;
              const p = f.replace(/-/g, "/"), [N, A, y] = p.split("/");
              if (!N || !A || !y) return !1;
              const h = /* @__PURE__ */ new Date(`${y}-${A}-${N}`);
              return !isNaN(h.getTime());
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
          l = _e.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          l = _e.number().typeError("Must be a decimal").transform((f, p) => {
            if (p == null || p === "") return;
            const N = Number(p);
            if (isNaN(N)) return f;
            if (typeof f == "number" && !isNaN(f)) {
              const A = Number(f);
              return Number.isInteger(A) ? Number(N.toFixed(A)) : N;
            }
            return N;
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
    }), s.required && (l = l.required(
      s.error_message || `${s.label || o} is required`
    )), n[o] = l;
  });
}, Dt = (e) => !e || typeof e != "object" ? !1 : Object.values(e).every(
  (t) => typeof t == "object" && t !== null
);
function Ao(e) {
  if (!e || typeof e != "object") return !1;
  const t = e.src;
  return typeof e.target == "string" && typeof t == "object" && t !== null && (t.type === "api" || typeof t.queryid == "string" || typeof t.table == "string" && typeof t.columns < "u");
}
function No(e) {
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
}, To = (e) => {
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
function jo(e) {
  return e ? Dt(e) ? Object.values(e).reduce((t, n) => (Object.assign(t, n), t), {}) : e : {};
}
const ve = (e) => {
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
function So(e) {
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
const Ro = "__form_persist__", es = (e) => `${Ro}:${e}`;
function _o(e) {
  return yo.sanitize(e, {
    USE_PROFILES: { html: !0 }
  });
}
function Co(e) {
  try {
    return JSON.parse(localStorage.getItem(es(e)) || "{}");
  } catch {
    return {};
  }
}
function Oo(e) {
  return e.persistent ? e.persistent === !0 ? e.name : typeof e.persistent == "string" ? e.persistent : null : null;
}
function Lo(e, t, n) {
  const r = Co(e);
  localStorage.setItem(
    es(e),
    JSON.stringify({
      ...r,
      [t]: n
    })
  );
}
function He(e, t, n) {
  const r = Oo(t);
  r && n && Lo(n, r, e);
}
function lr(e) {
  return W.isAxiosError(e) ? e.response?.data?.message || e.message || "Something went wrong" : e instanceof Error ? e.message : typeof e == "string" ? e : "Something went wrong";
}
function cr(e, t) {
  return t === !1 ? null : typeof t == "string" ? t : e?.data?.message ? e.data.message : e?.message ? e.message : "Operation completed successfully";
}
const ts = ({
  uploads: e,
  currentValue: t,
  multiple: n
}) => {
  const r = Array.isArray(t) ? t : t ? [t] : [], s = e.map((o) => `${o.fileId}&${o.path}`);
  return [...r, ...s];
}, Io = (e) => {
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
}, Fo = (e) => {
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
}, Po = (e) => e === "today" ? (/* @__PURE__ */ new Date()).toISOString().split("T")[0] : e, mt = (e) => ({
  Authorization: `Bearer ${e.accessToken}`
}), ur = async (e) => (await W.get(
  e.baseURL + e.dbopsGetHash,
  { headers: mt(e) }
)).data.refhash, dr = async (e, t) => (await W.post(
  e.baseURL + e.dbopsGetRefId,
  t,
  { headers: mt(e) }
)).data.refid, Do = {
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
    const m = await W.post(
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
    return (await W.post(
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
    return (await W.post(
      e.baseURL + e.dbopsUpdate,
      { refid: s, fields: t.values, datahash: r },
      { headers: mt(e) }
    )).data;
  }
};
async function Ze(e, t, n, r = void 0, s = void 0, o = {}) {
  try {
    let i = n;
    return i || (i = (await W({
      method: "POST",
      url: e.baseURL + e.registerQuery,
      data: { query: t, srcid: s },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    })).data.queryid), await W({
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
async function ko({
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
      let N = e.name;
      typeof e.parameter == "string" && e.parameter && (N = e.parameter);
      const A = { [N]: t, refid: t };
      if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
        for (const [x, S] of Object.entries(e.parameter))
          A[x] = x === N ? t : s?.[S];
      const y = {
        method: l.method || "GET",
        url: n?.baseURL + l.endpoint,
        headers: {
          Authorization: `Bearer ${n?.accessToken}`
        },
        ...l.method === "GET" ? { params: A } : { data: A }
      }, { data: h } = await W(y);
      m = h;
    } else {
      let N;
      if (!l.queryid) {
        if (!l.table || !l.columns)
          throw new Error("SQL query requires field.table");
        const y = Ee(l.where ?? {}, { refid: t });
        N = {
          ...l,
          table: l.table,
          cols: l.columns,
          where: y
        };
      }
      const { data: A } = await Ze(
        n,
        N,
        l.queryid,
        t
      );
      m = A;
    }
    const d = Array.isArray(m?.results?.options) ? m?.results?.options : Array.isArray(m.data) ? m.data : Array.isArray(m.results) ? m.results : m, f = Array.isArray(d) ? d.map(ve) : [], p = Le(
      e.valueKey ?? "value",
      e.labelKey ?? "title",
      f,
      e.groupKey
    );
    r(i.target, p);
  }
}
async function Mo(e, t) {
  let n = t.previewPath ?? "/api/files/preview";
  const r = await W.get(
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
async function rs(e, t) {
  const n = e?.uploadURL ?? "/api/files/upload";
  return Promise.all(
    Array.from(t).map(async (r) => {
      const s = new FormData();
      return s.append("file", r), (await W.post(`${e?.baseURL}${n}`, s, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${e?.accessToken}`
        }
      })).data;
    })
  );
}
async function ns(e, t) {
  let n = e?.removeFileURL ?? "/api/files/delete";
  return (await W.post(
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
function xt({
  field: e,
  data: t,
  methods: n = {},
  sqlOpsUrls: r,
  refid: s,
  module_refid: o,
  optionsOverride: i,
  AttachmentPopup: l,
  setFieldOptions: m
}) {
  e?.name;
  const d = `
    text-sm text-gray-600 break-words capitalize
  `, f = `
    block text-sm font-semibold  transition-all duration-300 text-gray-700 capitalize
  `, [p, N] = pe(
    i ?? e.options ?? {}
  ), A = ne.useRef(!1);
  ne.useEffect(() => {
    i && N(i);
  }, [i]);
  const y = ne.useMemo(
    () => jo(p),
    [p]
  );
  ne.useEffect(() => {
    let w = !0, v = e.valueKey ?? "value", _ = e.labelKey ?? "title";
    return (async () => {
      let M = e?.options;
      if (M && (Array.isArray(M) && M.length > 0 || !Array.isArray(M) && Object.keys(M).length > 0)) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const F = Object.values(e.options);
          if (F.length && typeof F[0] == "string") {
            N(e.options);
            return;
          }
        }
        const L = (Array.isArray(e.options) ? e.options : [e.options]).map(ve), I = Le(
          v,
          _,
          L,
          e.groupKey
          // auto-uses `category` if present
        );
        N(I);
        return;
      }
      const k = e?.source ?? {};
      if (e.type === "dataMethod") {
        const U = e.method, L = U ? n[U] : void 0;
        if (L)
          try {
            const I = await Promise.resolve(L()), F = Array.isArray(I.data?.results?.options) ? I.data?.results?.options : Array.isArray(I?.data?.data) ? I.data.data : Array.isArray(I.data?.results) ? I.data?.results : Array.isArray(I?.data) ? I.data : I;
            if (typeof F == "object" && !Array.isArray(F)) {
              const ie = Object.values(F);
              if (ie.length && typeof ie[0] == "string") {
                N(F);
                return;
              }
            }
            const g = Array.isArray(F) ? F.map(ve) : [], J = Le(v, _, g, e.groupKey);
            w && N(J);
            return;
          } catch (I) {
            console.error("Method execution failed:", I), w && N({});
            return;
          }
        else {
          w && N({});
          return;
        }
      }
      if (k.type === "api" && k.endpoint)
        try {
          const U = {
            method: k.method || "GET",
            url: r?.baseURL + k.endpoint,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            },
            ...k.method === "GET" ? { params: { refid: k.refid } } : { data: { refid: k.refid } }
          }, L = await W(U), I = Array.isArray(L.data?.results?.options) ? L.data?.results?.options : Array.isArray(L?.data?.data) ? L.data.data : Array.isArray(L.data?.results) ? L.data?.results : Array.isArray(L?.data) ? L.data : L;
          if (typeof I == "object" && !Array.isArray(I)) {
            const J = Object.values(I);
            if (J.length && typeof J[0] == "string") {
              N(I);
              return;
            }
          }
          const F = Array.isArray(I) ? I.map(ve) : [], g = Le(v, _, F, e.groupKey);
          w && N(g);
          return;
        } catch (U) {
          console.error("API execution failed:", U), w && N({});
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
              where: e.where ? s ? Ee(e.where, { refid: s }) : e.where : void 0
            };
          }
          const L = await Ze(r, U, e?.queryid, void 0, o), I = Array.isArray(L?.data?.data) ? L.data.data : Array.isArray(L?.data) ? L.data : L;
          if (typeof I == "object" && !Array.isArray(I)) {
            const J = Object.values(I);
            if (J.length && typeof J[0] == "string") {
              N(I);
              return;
            }
          }
          const F = Array.isArray(I) ? I.map(ve) : [], g = Le(v, _, F, e.groupKey);
          w && N(g);
        } catch (U) {
          console.error("API fetch failed:", U);
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
  const h = e?.name ? t?.[e.name] : void 0;
  ne.useEffect(() => {
    A.current || !m || !h || (A.current = !0, ko({
      field: e,
      value: h,
      sqlOpsUrls: r,
      setFieldOptions: m,
      values: t ?? {}
    }));
  }, [h, r, m]);
  let x;
  typeof h == "string" ? e.type === "date" ? x = h.split("T")[0] : e.type === "time" ? x = h.includes("T") ? h.slice(11, 16) : h.slice(0, 5) : x = yn(h, y) : x = yn(h, y);
  const S = x == null ? "" : typeof x == "string" || typeof x == "number" ? x : JSON.stringify(x), b = So(h), u = e.type === "richtextarea" && typeof S == "string" ? _o(S) : null;
  return /* @__PURE__ */ a.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ a.jsx("label", { className: f, children: e?.label }),
    /* @__PURE__ */ a.jsx("div", { className: "relative", children: b ? b.type === "drawn" ? /* @__PURE__ */ a.jsx("svg", { viewBox: "0 0 300 150", className: "h-24 w-full border bg-white rounded", children: b.paths.map((w, v) => /* @__PURE__ */ a.jsx(
      "path",
      {
        d: w.d,
        stroke: w.color || "#000",
        strokeWidth: w.width || 2,
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      v
    )) }) : b.type === "text" ? /* @__PURE__ */ a.jsx("svg", { viewBox: "0 0 300 150", className: "h-24 w-full border bg-white rounded", children: /* @__PURE__ */ a.jsx(
      "text",
      {
        x: "10",
        y: "100",
        fontSize: b.data.style?.fontSize || 32,
        fontFamily: b.data.style?.fontFamily || "cursive",
        fill: b.data.style?.textColor || "#000",
        children: b.data.text
      }
    ) }) : b.type === "html" ? /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "border bg-white rounded p-2 text-sm",
        dangerouslySetInnerHTML: { __html: b.html }
      }
    ) : /* @__PURE__ */ a.jsx(
      "img",
      {
        src: b.src,
        alt: "signature",
        className: "h-24 object-contain border bg-white rounded"
      }
    ) : (e.type === "file" || e.type === "camera" || e.type === "camera2" || e.type === "attachement" || e.type === "photo" || e.type === "avatar") && x ? /* @__PURE__ */ a.jsx("div", { className: "flex flex-wrap gap-2", children: l && String(x).split(",").map((w) => w.trim()).filter(Boolean).map((w) => /* @__PURE__ */ a.jsx(
      l,
      {
        url: w
      },
      w
    )) }) : e.type === "richtextarea" ? /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "tiptap border border-gray-200 min-h-[400px] max-h-[220px] overflow-auto bg-white rounded p-2 text-sm",
        dangerouslySetInnerHTML: { __html: u ?? "" }
      }
    ) : /* @__PURE__ */ a.jsx("p", { className: d, children: S }) })
  ] });
}
function ss({ filePath: e, field_name: t, sqlOpsUrls: n }) {
  const [r, s] = pe(null), o = e.replace(/^[^&]*&/, "");
  return Re(() => {
    if (!open || !n) return;
    let i = !0, l = null;
    return Mo(o, n).then((m) => {
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
function $o({
  commonInfo: e,
  infoData: t,
  hiddenFields: n = [],
  sqlOpsUrls: r,
  setFieldOptions: s,
  fieldOptions: o,
  module_refid: i,
  refid: l,
  methods: m,
  AttachmentPopup: d
}) {
  const f = Rt(
    () => e?.fields?.find((A) => A.type === "avatar"),
    [e?.fields]
  ), p = f?.name, N = p && typeof t?.[p] == "string" ? t[p].trim() : "";
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white border border-gray-100 p-4 min-h-3/10 overflow-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    f && /* @__PURE__ */ a.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ a.jsx("div", { className: "relative w-42 h-42 p-2 rounded-sm overflow-hidden bg-gray-100 flex items-center justify-center", children: N ? /* @__PURE__ */ a.jsx(
      ss,
      {
        field_name: f.name,
        filePath: N,
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
    /* @__PURE__ */ a.jsx("div", { className: `min-h-0 max-h-40 overflow-y-auto custom-scrollbar ${f ? "lg:col-span-10" : "lg:col-span-12"}`, children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: e.fields?.map((A, y) => n.includes(A.name) || A.type === "avatar" ? null : /* @__PURE__ */ a.jsx("div", { className: `hover:bg-gray-100 transition-colors duration-200 col-span-12 sm:col-span-6 ${tt[rt(Number(A.width))] || "lg:col-span-4"}`, children: /* @__PURE__ */ a.jsx(
      xt,
      {
        field: A,
        data: t ?? {},
        sqlOpsUrls: r,
        methods: m,
        refid: l,
        module_refid: i,
        setFieldOptions: s,
        ...o[A.name] ? { optionsOverride: o[A.name] } : {},
        AttachmentPopup: d
      },
      A?.name
    ) }, A.name)) }) })
  ] }) });
}
function Tr({ tabObj: e, methods: t, tabName: n, sqlOpsUrls: r, refid: s, module_refid: o, setFieldOptions: i, fieldOptions: l, AttachmentPopup: m }) {
  const [d, f] = ne.useState(null);
  return ne.useEffect(() => {
    let p = !1;
    return (async () => {
      const A = e?.config;
      if (!A?.type) {
        p || f(null);
        return;
      }
      if (A.type === "method") {
        const y = A.method, h = y ? t[y] : void 0;
        if (h)
          try {
            const x = await Promise.resolve(h());
            p || f(x || null);
          } catch (x) {
            console.error("Method execution failed:", x), p || f(null);
          }
        else
          p || f(null);
      }
      if (A.type === "api")
        try {
          const y = await W({
            method: A.method || "GET",
            // GET, POST, etc.
            url: A.url,
            data: A.body || {},
            // request body
            params: A.params || {},
            // query params
            headers: A.headers || {}
            // optional headers
          });
          p || f(y.data || null);
        } catch (y) {
          console.error("API fetch failed:", y), p || f(null);
        }
      if (A.type === "sql" && s && s != "0" || A?.dbopsid) {
        if (!r) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let y = !1, h;
          A?.dbopsid && (y = !0, h = A?.dbopsid);
          const x = await W({
            method: "GET",
            url: r.baseURL + r.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            }
          });
          if (!y) {
            let u = {
              ...A
            };
            A.where && (u = {
              ...A,
              where: Ee(A.where, {
                refid: s
              })
            }), h = (await W({
              method: "POST",
              url: r.baseURL + r.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: u,
                fields: Pt(A.fields, r.operation),
                forcefill: A.forcefill,
                datahash: x.data.refhash,
                srcid: o
              },
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              }
            }))?.data.refid;
          }
          const S = await W({
            method: "POST",
            url: r.baseURL + r.dbopsFetch,
            data: {
              refid: h,
              datahash: x.data.refhash
            },
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            }
          }), b = Jn(S);
          p || f(b);
        } catch (y) {
          console.error("API fetch failed:", y);
        }
      }
    })(), () => {
      p = !0;
    };
  }, [
    e?.config?.type || "",
    e?.config?.method || "",
    e?.config?.url || "",
    JSON.stringify(e?.config?.params || {}),
    JSON.stringify(e?.config?.body || {}),
    JSON.stringify(e?.config?.headers || {})
  ]), /* @__PURE__ */ a.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: d ? Object.keys(d).map((p, N) => {
    let A = { name: p, label: p };
    return /* @__PURE__ */ a.jsx(
      "div",
      {
        className: `col-span-12 sm:col-span-6 ${tt[rt(e.width)] || "lg:col-span-2"}`,
        children: /* @__PURE__ */ a.jsx(
          xt,
          {
            field: A,
            data: d ?? {},
            methods: t,
            refid: s,
            sqlOpsUrls: r,
            setFieldOptions: i,
            ...l[A.name] ? { optionsOverride: l[A.name] } : {},
            AttachmentPopup: m
          },
          p
        )
      },
      `field-${N}`
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
function Bo({
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
function zo({
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
  ].includes(e?.type || "text"), [f, p] = pe(!1), [N, A] = pe(d), [y, h] = pe(
    i ?? e.options ?? {}
  ), [x, S] = pe(""), [b, u] = pe(0), w = We(null), v = We(null), [_, C] = pe(!1), M = We(x), k = e.disabled === !0;
  Re(() => {
    M.current = x;
  }, [x]), Re(() => {
    if (e.type !== "select" || e.multiple || e["no-option"] !== "false" || t.values[U] || !y) return;
    let D;
    if (Array.isArray(y))
      D = y[0]?.value;
    else if (!Dt(y))
      D = Object.keys(y)[0];
    else {
      const j = Object.values(y)[0];
      D = j ? Object.keys(j)[0] : void 0;
    }
    D != null && t.setFieldValue(U, String(D), !1);
  }, [y]), Re(() => {
    i && h(i);
  }, [i]), Re(() => {
    if (!_) return;
    const T = (D) => {
      const j = D.target;
      v.current?.contains(j) || w.current?.contains(j) || (C(!1), S(""));
    };
    return document.addEventListener("mousedown", T), () => {
      document.removeEventListener("mousedown", T);
    };
  }, [_]);
  const U = e.name;
  Re(() => {
    let T = !0;
    return (async () => {
      try {
        let j = e.valueKey ?? "value", K = e.labelKey ?? "title", te = e?.options;
        if (te && (Array.isArray(te) && te.length > 0 || !Array.isArray(te) && Object.keys(te).length > 0)) {
          if (typeof e.options == "object" && !Array.isArray(e.options)) {
            const Z = Object.values(e.options);
            if (Z.length && typeof Z[0] == "string") {
              h(e.options);
              return;
            }
          }
          const B = (Array.isArray(e.options) ? e.options : [e.options]).map(ve), G = Le(
            j,
            K,
            B,
            e.groupKey
            // auto-uses `category` if present
          );
          h(G);
          return;
        }
        const q = e?.source ?? {};
        if (e.type === "dataMethod") {
          const $ = e.method, B = $ ? n[$] : void 0;
          if (B)
            try {
              const G = await B(), Z = Array.isArray(G.data?.results?.options) ? G.data?.results?.options : Array.isArray(G?.data?.data) ? G.data.data : Array.isArray(G.data?.results) ? G.data?.results : Array.isArray(G?.data) ? G.data : G;
              if (typeof Z == "object" && !Array.isArray(Z)) {
                const xe = Object.values(Z);
                if (xe.length && typeof xe[0] == "string") {
                  h(Z);
                  return;
                }
              }
              const ue = Array.isArray(Z) ? Z.map(ve) : [], re = Le(j, K, ue, e.groupKey);
              T && h(re);
              return;
            } catch (G) {
              console.error("Method execution failed:", G), T && h({});
              return;
            }
          else {
            T && h({});
            return;
          }
        }
        if (q.type === "api" && q.endpoint)
          try {
            const $ = {
              method: q.method || "GET",
              url: r?.baseURL + q.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...q.method === "GET" ? { params: { refid: q.refid } } : { data: { refid: q.refid } }
            }, B = await W($), G = Array.isArray(B.data?.results?.options) ? B.data?.results?.options : Array.isArray(B?.data?.data) ? B.data.data : Array.isArray(B.data?.results) ? B.data?.results : Array.isArray(B?.data) ? B.data : B;
            if (typeof G == "object" && !Array.isArray(G)) {
              const re = Object.values(G);
              if (re.length && typeof re[0] == "string") {
                h(G);
                return;
              }
            }
            const Z = Array.isArray(G) ? G.map(ve) : [], ue = Le(j, K, Z, e.groupKey);
            T && h(ue);
            return;
          } catch ($) {
            console.error("API execution failed:", $), T && h({});
            return;
          }
        if (e.table || e.type === "dataSelector" || e.queryid) {
          if (!r) {
            console.error("SQL source requires formJson.endPoints but it is missing");
            return;
          }
          try {
            let $;
            if (e.type === "dataSelector")
              $ = {
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
              $ = {
                table: e.table,
                cols: e.columns,
                where: e.where ? s ? Ee(e.where, { refid: s }) : e.where : void 0
              };
            }
            const B = await Ze(r, $, e?.queryid, void 0, o), G = Array.isArray(B?.data?.data) ? B.data.data : Array.isArray(B?.data) ? B.data : B;
            if (typeof G == "object" && !Array.isArray(G)) {
              const re = Object.values(G);
              if (re.length && typeof re[0] == "string") {
                h(G);
                return;
              }
            }
            const Z = Array.isArray(G) ? G.map(ve) : [], ue = Le(j, K, Z, e.groupKey);
            T && h(ue);
          } catch ($) {
            console.error("API fetch failed:", $);
          }
        }
      } catch (j) {
        console.log(j);
      } finally {
        T && d && A(!1);
      }
    })(), () => {
      T = !1;
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
  const L = `
  w-full px-4 py-2 rounded-lg border transition-all duration-300
  backdrop-blur-sm text-gray-800 placeholder-gray-400
  focus:outline-none focus:ring-0

  ${k ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:shadow-md"}
`, I = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, F = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, g = Rt(
    () => To(y),
    [y]
  ), J = Rt(() => {
    if (!e.type || !["suggest", "autosuggest", "autocomplete"].includes(e.type) || !x.trim()) return null;
    const T = x.trim().toLowerCase();
    return g.find(([, D]) => D.trim().toLowerCase() === T);
  }, [e.type, x, g]), ie = g.length, se = !!(e.search && (e.queryid || e.table)), oe = Rt(() => se || !x ? g : g.filter(
    ([, T]) => T.toLowerCase().includes(x.toLowerCase())
  ), [se, x, g]), Te = (T, D) => {
    if (_)
      if (T.key === "ArrowDown")
        T.preventDefault(), u(
          (j) => j + 1 < oe.length ? j + 1 : 0
        );
      else if (T.key === "ArrowUp")
        T.preventDefault(), u(
          (j) => j - 1 >= 0 ? j - 1 : oe.length - 1
        );
      else if (T.key === "Enter") {
        T.preventDefault();
        const [j] = oe[b] || [];
        if (j) {
          let K = D ? j : [...t.values[e.name], j];
          t.setFieldValue(e.name, K), He(K, e, o);
        }
        C(!1);
      } else T.key === "Escape" && (S(""), C(!1));
  };
  Re(() => {
    w.current?.querySelector(
      `[data-index="${b}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [b]), Re(() => {
    b >= oe.length && u(0);
  }, [oe, b]), Re(() => {
    const T = e.autocomplete, D = e.ajaxchain;
    if (!T && !D) return;
    const j = t.values[e.name];
    if (!j) return;
    const K = Array.isArray(D) ? D : D ? [D] : [];
    (async () => {
      try {
        if (Ao(T)) {
          const q = T.src;
          if (!q || !r) return;
          let $;
          if ("type" in q && q.type === "api") {
            let G = e.name;
            typeof e.parameter == "string" && e.parameter && (G = e.parameter);
            const Z = { [G]: j, refid: j };
            if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
              for (const [xe, je] of Object.entries(e.parameter))
                Z[xe] = xe === G ? j : t.values?.[je];
            const ue = {
              method: q.method || "GET",
              url: r?.baseURL + q.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...q.method === "GET" ? { params: Z } : { data: Z }
            }, { data: re } = await W(ue);
            $ = Array.isArray(re?.data?.results?.options) ? re?.data?.results?.options[0] : Array.isArray(re?.data?.data) ? re.data.data[0] : Array.isArray(re?.data?.results) ? re.data.results[0] : Array.isArray(re?.data) ? re.data[0] : re?.data;
          } else {
            let G;
            if (!q.queryid) {
              if (!q.table || !q.columns)
                throw new Error("SQL query requires field.table");
              const ue = Ee(q?.where ?? {}, {
                refid: j
              });
              G = {
                ...q,
                table: q.table,
                cols: q.columns,
                where: ue
              };
            }
            const { data: Z } = await Ze(r, G, q?.queryid, j, o);
            $ = Array.isArray(Z?.data?.data) ? Z.data.data[0] : Array.isArray(Z?.data) ? Z.data[0] : Z?.data;
          }
          let B = ve($);
          B && T.target.split(",").map((G) => G.trim()).forEach((G) => {
            B[G] !== void 0 && t.setFieldValue(G, B[G]);
          });
        }
        for (const q of K) {
          m?.(q.target, !0);
          const $ = q.src;
          if (!q || typeof q != "object" || !$ || typeof $ != "object" || !r) continue;
          let B;
          if ("type" in $ && $.type === "api") {
            let je = e.name;
            typeof e.parameter == "string" && e.parameter && (je = e.parameter);
            let Se = { [je]: j, refid: j };
            if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
              for (const [ze, Gt] of Object.entries(e.parameter))
                Se[ze] = ze === je ? j : t.values?.[Gt];
            const wt = {
              method: $.method || "GET",
              url: r?.baseURL + $.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...$.method === "GET" ? { params: Se } : { data: Se }
            };
            try {
              const { data: ze } = await W(wt);
              B = ze;
            } catch {
            } finally {
              m?.(q.target, !1);
            }
          } else {
            let je;
            if (!$.queryid) {
              if (!$.table || !$.columns)
                throw new Error("SQL query requires field.table");
              const Se = Ee($?.where ?? {}, {
                refid: j
              });
              je = {
                ...$,
                table: $.table,
                cols: $.columns,
                where: Se
              };
            }
            try {
              const { data: Se } = await Ze(r, je, $?.queryid, j, o);
              B = Se;
            } catch {
            } finally {
              m?.(q.target, !1);
            }
          }
          let G = e.valueKey ?? "value", Z = e.labelKey ?? "title";
          const ue = Array.isArray(B?.results?.options) ? B?.results?.options : Array.isArray(B.data) ? B.data : Array.isArray(B.results) ? B.results : B, re = Array.isArray(ue) ? ue.map(ve) : [], xe = Le(
            G,
            Z,
            re,
            e.groupKey
          );
          t.setFieldValue(q.target, t.initialValues[q.target]), l?.(q.target, xe);
        }
      } catch (q) {
        console.error("Autocomplete / AjaxChain fetch failed", q);
      }
    })();
  }, [t.values[e.name]]), Re(() => {
    if (!se || !x.trim() || !r) return;
    const T = No(e.columns ?? ""), D = new AbortController(), j = setTimeout(async () => {
      try {
        let K;
        if (!e.queryid) {
          if (!e.table || !e.cols)
            throw new Error("SQL query requires field.table");
          const re = s ? Ee(e.where ?? {}, {
            refid: s
          }) : e.where;
          K = {
            ...e,
            table: e.table,
            cols: e.columns || e.cols,
            where: re
          };
        }
        let te = {};
        Array.isArray(T) && T.forEach((re) => {
          te[re] = [x, "LIKE"];
        });
        let q = e.valueKey ?? "value", $ = e.labelKey ?? "title";
        const { data: B } = await Ze(r, K, e?.queryid, void 0, o, te), G = Array.isArray(B?.data?.data) ? B.data.data : Array.isArray(B?.data) ? B.data : B, Z = Array.isArray(G) ? G.map(ve) : [], ue = Le(
          q,
          $,
          Z,
          e.groupKey
        );
        h(ue);
      } catch (K) {
        if (W.isCancel(K)) return;
        console.error("Search fetch failed", K);
      }
    }, 500);
    return () => {
      clearTimeout(j), D.abort();
    };
  }, [se, x, s]);
  const R = async (T) => {
    if (T.length === 0) {
      console.error("No file");
      return;
    }
    try {
      A(!0);
      const D = await rs(r, T), j = ts({
        uploads: D,
        currentValue: t.values[U],
        multiple: e.multiple ?? !1
      });
      t.setFieldValue(
        U,
        j
      ), He(j, e, o);
    } catch (D) {
      console.error("File upload failed", D), t.setFieldError(U, "File upload failed");
    } finally {
      A(!1);
    }
  }, P = async (T) => {
    const D = Array.isArray(t.values[U]) ? t.values[U] : [], j = T.split("&")[0];
    if (!j) return;
    const K = D.filter((te) => te.split("&")[0] !== j);
    t.setFieldValue(U, K);
    try {
      await ns(r, j), He(K, e, o);
    } catch (te) {
      console.log(te), t.setFieldValue(U, D), window.alert("Failed to delete file due to a technical issue. Please try again.");
    }
  }, ee = async (T, D, j) => {
    const K = D[T];
    if (!K) return;
    const te = n?.[K];
    if (typeof te != "function") {
      console.error(`Method "${String(K)}" not found`);
      return;
    }
    try {
      await Promise.resolve(te(j));
    } catch (q) {
      console.error(`Method "${String(K)}" failed`, q);
    }
  }, Y = (T) => {
    if (k) return;
    const D = T.target.value;
    S(D), u(0), D.trim() ? C(!0) : (C(!1), t.setFieldValue(U, ""));
  }, fe = (T) => {
    t.setFieldValue(U, T), He(T, e, o), S(""), C(!1), ee("onChange", e, `${U}-${T}`);
  };
  function Q(T) {
    const D = T.currentTarget.files;
    D && R(D);
  }
  return {
    setHighlightedIndex: u,
    executeFieldMethod: ee,
    handleFileUpload: R,
    handleKeyDown: Te,
    setSearch: S,
    setOpen: C,
    setIsFocused: p,
    handleInputChange: Y,
    handleSelect: fe,
    handlePersist: He,
    handleFileChange: Q,
    setLoading: A,
    removeFile: P,
    optionCount: ie,
    baseInputClasses: L,
    focusClasses: I,
    labelClasses: F,
    search: x,
    highlightedIndex: b,
    options: y,
    isDisabled: k,
    key: U,
    filteredOptions: oe,
    open: _,
    listRef: w,
    isFocused: f,
    exactMatch: J,
    triggerRef: v,
    loading: N
  };
}
function jr({
  anchorRef: e,
  open: t,
  children: n,
  offset: r = 4,
  maxHeight: s = 240
}) {
  const [o, i] = pe({}), l = We(null);
  return fs(() => {
    if (!t || !e.current || !l.current) return;
    const m = e.current, d = () => {
      const p = m.getBoundingClientRect(), N = window.innerHeight, A = l.current?.offsetHeight || s, y = N - p.bottom, h = p.top, S = y < A && h > y ? p.top - A - r : p.bottom + r;
      i({
        position: "fixed",
        top: S,
        left: p.left,
        minWidth: p.width,
        maxHeight: s,
        overflowY: "auto",
        zIndex: 9999
      });
    };
    d();
    const f = requestAnimationFrame(d);
    return window.addEventListener("scroll", d, !0), window.addEventListener("resize", d), () => {
      cancelAnimationFrame(f), window.removeEventListener("scroll", d, !0), window.removeEventListener("resize", d);
    };
  }, [t, e, r, s]), t ? ps(
    /* @__PURE__ */ a.jsx("div", { ref: l, style: o, children: n }),
    document.body
  ) : null;
}
function gn({
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
  executeFieldMethod: f,
  handlePersist: p,
  module_refid: N,
  options: A,
  triggerRef: y,
  open: h,
  setOpen: x,
  loading: S
}) {
  const b = e.name;
  return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ a.jsx(
      "input",
      {
        type: "hidden",
        name: b,
        value: JSON.stringify(d.values[b] ?? "")
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
        ref: y,
        tabIndex: 0,
        onClick: () => {
          x((u) => !u);
        },
        onKeyDown: (u) => {
          t || n(u, !0);
        },
        children: [
          /* @__PURE__ */ a.jsx("span", { className: "text-sm text-gray-700", children: d.values[b] ? Nr(A, d.values[b]) ?? "Select option" : `Select ${e.label}` }),
          S ? /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) : /* @__PURE__ */ a.jsx(
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
    /* @__PURE__ */ a.jsx(jr, { anchorRef: y, open: h, children: /* @__PURE__ */ a.jsxs(
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
              onChange: (u) => {
                m(u.target.value);
              },
              onKeyDown: (u) => n(u, !0),
              placeholder: "Search...",
              className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                      bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                      focus:outline-none focus:ring-0`
            }
          ) }),
          i.length > 0 && /* @__PURE__ */ a.jsx(
            "div",
            {
              onClick: (u) => {
                u.preventDefault(), u.stopPropagation(), d.setFieldValue(b, ""), x(!1), p("", e, N), m("");
              },
              className: "px-2 py-1 hover:bg-gray-50 text-gray-500 rounded cursor-pointer text-sm hover:bg-gray-50",
              children: "Clear selection"
            }
          ),
          i.length > 0 ? i.map(([u, w], v) => /* @__PURE__ */ a.jsx(
            "div",
            {
              id: `${b}-${u}`,
              "data-index": v,
              onClick: (_) => {
                _.preventDefault(), _.stopPropagation(), d.setFieldValue(b, u), p(u, e, N), x(!1), m(""), f("onChange", e, `${b}-${u}`);
              },
              className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                            ${d.values[b] === u ? "bg-indigo-50 text-indigo-600 font-medium" : l === v ? "bg-gray-100" : "hover:bg-gray-50"}`,
              children: w
            },
            u
          )) : /* @__PURE__ */ a.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
        ]
      }
    ) }),
    d.touched[b] && d.errors[b] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(d.errors[b]) })
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
  formik: f,
  executeFieldMethod: p,
  handlePersist: N,
  module_refid: A,
  options: y,
  triggerRef: h,
  open: x,
  setOpen: S,
  loading: b
}) {
  const u = e.name;
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
        ref: h,
        onClick: () => {
          S((w) => !w);
        },
        onKeyDown: (w) => {
          t || n(w, !1);
        },
        onBlur: () => {
          e.multiple || setTimeout(() => {
            S(!1), d("");
          }, 150);
        },
        children: [
          /* @__PURE__ */ a.jsx("span", { className: "text-sm text-gray-700", children: r?.length > 0 ? r.map((w) => Nr(y, w) ?? w).join(", ") : `Select ${e.label}` }),
          b ? /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) : /* @__PURE__ */ a.jsx(
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
    /* @__PURE__ */ a.jsx(jr, { anchorRef: h, open: x && !t, children: /* @__PURE__ */ a.jsxs("div", { ref: o, className: " w-full border border-gray-200 rounded-lg bg-white shadow-md  max-h-60 overflow-y-auto p-2", children: [
      e.search && /* @__PURE__ */ a.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ a.jsx(
        "input",
        {
          type: "text",
          value: i,
          onChange: (w) => {
            t || d(w.target.value);
          },
          placeholder: "Search...",
          className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
        }
      ) }),
      l.length > 0 ? l.map(([w, v], _) => /* @__PURE__ */ a.jsxs(
        "label",
        {
          htmlFor: `${u}-${w}`,
          className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${r?.includes(w) ? "bg-indigo-50 text-indigo-600 font-medium" : m === _ ? "bg-gray-100" : "hover:bg-gray-50"}`,
          children: [
            /* @__PURE__ */ a.jsx(
              "input",
              {
                id: `${u}-${w}`,
                type: "checkbox",
                checked: r?.includes(w),
                onChange: (C) => {
                  const M = C.target.checked ? [...r, w] : r?.filter((k) => k !== w);
                  f.setFieldValue(u, M), N(M, e, A), p("onChange", e, `${u}-${w}`);
                },
                onBlur: f.handleBlur,
                disabled: t,
                className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              }
            ),
            v
          ]
        },
        w
      )) : /* @__PURE__ */ a.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
    ] }) }),
    f.touched[u] && f.errors[u] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(f.errors[u]) })
  ] });
}
function Uo({
  formik: e,
  field: t,
  sqlOpsUrls: n,
  module_refid: r
}) {
  let s = t?.name;
  const o = We(null), i = t.max !== void 0 ? Number(t.max) : 1 / 0, [l, m] = pe(!1), d = Array.isArray(e.values[s]) ? e.values[s] : e.values[s] ? [e.values[s]] : [], f = async (y) => {
    const h = y.currentTarget.files;
    if (!h?.length) return;
    const x = Array.from(y.currentTarget.files || []);
    if (d.length + x.length > i) {
      alert(`You can upload maximum ${i} file(s)`), y.currentTarget.value = "";
      return;
    }
    try {
      m(!0);
      const b = await rs(n, h), u = ts({
        uploads: b,
        currentValue: e.values[s],
        multiple: t.multiple ?? !1
      });
      e.setFieldValue(
        s,
        u
      ), He(u, t, r), y.target.value = "";
    } catch (b) {
      console.error("File upload failed", b), e.setFieldError(s, "File upload failed");
    } finally {
      m(!1);
    }
  }, p = async (y) => {
    const h = Array.isArray(e.values[s]) ? e.values[s] : [], x = y.split("&")[0];
    if (!x) return;
    const S = h.filter((b) => b.split("&")[0] !== x);
    e.setFieldValue(s, S);
    try {
      if (!y.split("&")[0]) return;
      await ns(n, x), He(S, t, r);
    } catch {
      e.setFieldValue(s, h), window.alert("Failed to delete file due to a technical issue. Please try again.");
    }
  }, N = Io(t), A = t.multiple === !0;
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
        multiple: A,
        ...N,
        onChange: f
      }
    ),
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "flex flex-wrap gap-2",
        children: [
          d.length > 0 ? d.map((y) => /* @__PURE__ */ a.jsxs("div", { className: "relative group", children: [
            /* @__PURE__ */ a.jsx(
              ss,
              {
                field_name: y,
                filePath: y,
                sqlOpsUrls: n
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  p(y);
                },
                className: "absolute -top-2 -right-2 cursor-pointer bg-white text-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xl cursor-pointer transition",
                children: "×"
              }
            )
          ] }, y)) : null,
          /* @__PURE__ */ a.jsx(
            "div",
            {
              onClick: () => {
                l || o.current?.click();
              },
              className: "w-24 h-24 flex items-center justify-center border border-dashed rounded-md bg-gray-50 hover:bg-gray-100 cursor-pointer",
              children: l ? /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-spinner fa-spin text-2xl text-gray-900" }) : /* @__PURE__ */ a.jsx("i", { className: `fa-solid ${Fo(t)} text-2xl text-gray-400` })
            }
          )
        ]
      }
    ),
    e.touched[s] && e.errors[s] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[s]) })
  ] });
}
function Ho({
  field: e,
  formik: t,
  methods: n = {},
  sqlOpsUrls: r,
  refid: s,
  module_refid: o = "menuManager.main",
  optionsOverride: i,
  setFieldOptions: l,
  fieldLoading: m,
  setFieldLoading: d,
  AttachmentPopup: f
}) {
  const {
    executeFieldMethod: p,
    handleFileUpload: N,
    handleKeyDown: A,
    setSearch: y,
    setOpen: h,
    setIsFocused: x,
    handleInputChange: S,
    handleSelect: b,
    handlePersist: u,
    setLoading: w,
    removeFile: v,
    optionCount: _,
    baseInputClasses: C,
    focusClasses: M,
    labelClasses: k,
    search: U,
    highlightedIndex: L,
    options: I,
    isDisabled: F,
    key: g,
    filteredOptions: J,
    open: ie,
    listRef: se,
    triggerRef: oe,
    isFocused: Te,
    exactMatch: R,
    loading: P
  } = zo({
    field: e,
    formik: t,
    methods: n,
    sqlOpsUrls: r,
    refid: s,
    module_refid: o,
    ...d && { setFieldLoading: d },
    ...i && { optionsOverride: i },
    ...l && { setFieldOptions: l }
  }), ee = (Y) => Y.icon ? /* @__PURE__ */ a.jsx("i", { className: Y.icon }) : null;
  switch (e.type) {
    case "suggest":
    case "autosuggest":
    case "autocomplete": {
      const T = t.values[g] ?? "", D = U !== "" ? U : Nr(I, T) ?? String(T ?? "");
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: k, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { ref: oe, children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              className: `${C} ${M}`,
              value: D,
              placeholder: e.placeholder || "Type to search...",
              onChange: S,
              onBlur: () => {
                setTimeout(() => h(!1), 150);
              },
              onKeyDown: (j) => {
                if (j.key === "Enter") {
                  if (j.preventDefault(), R) {
                    const [K] = R;
                    t.setFieldValue(g, K), u(K, e, o);
                  } else U.trim() && (t.setFieldValue(g, U.trim()), u(U.trim(), e, o));
                  h(!1), y("");
                  return;
                }
                A(j, !0);
              },
              disabled: F
            }
          ),
          (P || m) && /* @__PURE__ */ a.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) })
        ] }),
        /* @__PURE__ */ a.jsx(jr, { anchorRef: oe, open: ie && !F, children: /* @__PURE__ */ a.jsx(
          "div",
          {
            ref: se,
            className: " w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1",
            children: J.length > 0 && R ? J.map(([j, K], te) => /* @__PURE__ */ a.jsx(
              "div",
              {
                id: `${g}-${j}`,
                "data-index": te,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${L === te ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => b(j),
                children: K
              },
              j
            )) : /* @__PURE__ */ a.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `Press "ENTER" to ADD "${D}" ` })
          }
        ) }),
        t.touched[g] && t.errors[g] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[g]) })
      ] });
    }
    case "dataSelector":
    case "dataSelectorFromTable":
    case "dataSelectorFromUniques":
    case "dataMethod": {
      if (e.multiple === !0) {
        const T = t.values[g];
        return /* @__PURE__ */ a.jsx(
          bn,
          {
            field: e,
            isDisabled: F,
            handleKeyDown: A,
            valueArray: T,
            labelClasses: k,
            listRef: se,
            search: U,
            filteredOptions: J,
            highlightedIndex: L,
            setSearch: y,
            formik: t,
            executeFieldMethod: p,
            handlePersist: u,
            module_refid: o,
            options: I,
            triggerRef: oe,
            open: ie,
            setOpen: h,
            loading: P || !!m
          }
        );
      }
      return /* @__PURE__ */ a.jsx(
        gn,
        {
          field: e,
          isDisabled: F,
          handleKeyDown: A,
          labelClasses: k,
          listRef: se,
          search: U,
          filteredOptions: J,
          highlightedIndex: L,
          setSearch: y,
          formik: t,
          executeFieldMethod: p,
          handlePersist: u,
          module_refid: o,
          options: I,
          triggerRef: oe,
          open: ie,
          setOpen: h,
          loading: P || !!m
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
              id: g,
              className: `${C} ${M} min-h-[120px] resize-none`,
              onFocus: () => x(!0),
              name: g,
              value: t.values[g],
              onBlur: t.handleBlur,
              onChange: (T) => {
                t.setFieldValue(g, T.target.value), u(T.target.value, e, o), p("onChange", e, `${g}`);
              },
              placeholder: e.placeholder,
              disabled: F
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${Te ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[g] && t.errors[g] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[g]) })
      ] }) });
    case "select":
      if (e.multiple === !0) {
        const T = t.values[g];
        return /* @__PURE__ */ a.jsx(
          bn,
          {
            field: e,
            isDisabled: F,
            handleKeyDown: A,
            valueArray: T,
            labelClasses: k,
            listRef: se,
            search: U,
            filteredOptions: J,
            highlightedIndex: L,
            setSearch: y,
            formik: t,
            executeFieldMethod: p,
            handlePersist: u,
            module_refid: o,
            options: I,
            triggerRef: oe,
            open: ie,
            setOpen: h,
            loading: P || !!m
          }
        );
      }
      return e.search ? /* @__PURE__ */ a.jsx(
        gn,
        {
          field: e,
          isDisabled: F,
          handleKeyDown: A,
          labelClasses: k,
          listRef: se,
          search: U,
          filteredOptions: J,
          highlightedIndex: L,
          setSearch: y,
          formik: t,
          executeFieldMethod: p,
          handlePersist: u,
          module_refid: o,
          options: I,
          triggerRef: oe,
          open: ie,
          setOpen: h,
          loading: P || !!m
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
              className: `${C} ${M} appearance-none ${F ? "" : "cursor-pointer"} pr-12`,
              onFocus: () => x(!0),
              name: g,
              id: g,
              value: t.values[g],
              onBlur: t.handleBlur,
              onChange: (T) => {
                t.setFieldValue(g, T.target.value), u(T.target.value, e, o), p("onChange", e, `${g}`);
              },
              disabled: F,
              children: [
                e?.["no-option"] !== "false" && !t.values[g] && /* @__PURE__ */ a.jsx("option", { value: "", disabled: !0, children: e?.["no-option"] || `Please select ${e.label}` }),
                /* @__PURE__ */ a.jsx("option", { value: "", className: "text-gray-500", children: "Clear Selection" }),
                !Dt(I) && Object.entries(I).map(([T, D]) => /* @__PURE__ */ a.jsx("option", { value: T, className: "py-2", children: D }, T)),
                Dt(I) && Object.entries(I).map(([T, D]) => /* @__PURE__ */ a.jsx("optgroup", { label: T, children: Object.entries(D).map(([j, K]) => /* @__PURE__ */ a.jsx("option", { value: j, children: K }, j)) }, T))
              ]
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: "absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none", children: P || m ? /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) : /* @__PURE__ */ a.jsx(
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
        t.touched[g] && t.errors[g] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[g]) })
      ] });
    case "radioList":
    case "radio":
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: k, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: `flex ${_ > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(I || {}).map(([T, D]) => /* @__PURE__ */ a.jsxs(
          "label",
          {
            htmlFor: `${g}-${T}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  id: `${g}-${T}`,
                  type: "radio",
                  name: g,
                  checked: t.values[g] === T,
                  value: T,
                  onChange: (j) => {
                    t.setFieldValue(g, j.target.value), u(j.target.value, e, o), p("onChange", e, `${g}-${T}`);
                  },
                  onBlur: t.handleBlur,
                  disabled: F,
                  className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${F ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                }
              ),
              D
            ]
          },
          T
        )) }),
        t.touched[g] && t.errors[g] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[g]) })
      ] });
    case "checkbox": {
      const T = e.multiple === !0, D = t.values[g];
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: k, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(I || {}).map(([j, K]) => {
          const te = T ? Array.isArray(D) && D.includes(j) : D === j;
          return /* @__PURE__ */ a.jsxs(
            "label",
            {
              className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
              children: [
                /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    id: `${g}-${j}`,
                    type: "checkbox",
                    checked: te,
                    onChange: (q) => {
                      let $;
                      if (T) {
                        const B = Array.isArray(D) ? D : [];
                        $ = q.target.checked ? [...B, j] : B.filter((G) => G !== j);
                      } else
                        $ = q.target.checked ? j : "false";
                      t.setFieldValue(g, $), u($, e, o), p("onChange", e, `${g}-${j}`);
                    },
                    onBlur: t.handleBlur,
                    disabled: F,
                    className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${F ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                  }
                ),
                K
              ]
            },
            j
          );
        }) }),
        t.touched[g] && t.errors[g] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[g]) })
      ] });
    }
    case "tags": {
      const T = t.values[g], D = U.trim(), j = Array.isArray(I) ? I : Object.entries(I || {}).map(([$, B]) => ({ value: $, label: B })), K = ($) => {
        if (!F && $ && !T.includes($)) {
          let B = [...T, $];
          t.setFieldValue(g, B), u(B, e, o), y("");
        }
      }, te = ($) => {
        let B = T.filter((G) => G !== $);
        t.setFieldValue(
          g,
          B
        ), u(B, e, o);
      }, q = ($) => j.find((B) => B.value === $)?.label ?? $;
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: k, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: `${C} 
            flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center
            ${F ? "pointer-events-none opacity-70" : ""}
            `,
            onClick: () => !F && document.getElementById(`${g}-input`)?.focus(),
            children: [
              T.map(($) => /* @__PURE__ */ a.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ a.jsx("span", { className: "text-indigo-700", children: q($) }),
                    /* @__PURE__ */ a.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (B) => {
                          B.stopPropagation(), F || te($);
                        },
                        onMouseDown: (B) => B.preventDefault(),
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
                  id: `${g}-input`,
                  type: "text",
                  value: U,
                  onChange: ($) => y($.target.value),
                  onKeyDown: ($) => {
                    ($.key === "Enter" || $.key === ",") && ($.preventDefault(), K(D));
                  },
                  placeholder: T.length === 0 ? e.placeholder || "Type and press Enter" : "",
                  className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                  disabled: F
                }
              )
            ]
          }
        ),
        t.touched[g] && t.errors[g] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[g]) })
      ] });
    }
    case "camera":
    case "camera2":
    case "photo":
    case "avatar":
      return /* @__PURE__ */ a.jsx(
        Uo,
        {
          formik: t,
          field: e,
          sqlOpsUrls: r,
          module_refid: o
        }
      );
    case "attachment":
    case "file":
      const Y = e.multiple === !0, fe = e.max !== void 0 ? Number(e.max) : 1 / 0, Q = Array.isArray(t.values[g]) ? t.values[g] : t.values[g] ? [t.values[g]] : [];
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: k, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative mb-1", children: [
          e.icon && /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: ee(e) }),
          P && /* @__PURE__ */ a.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 z-10", children: /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: g,
              type: "file",
              accept: e.accept,
              className: `${C} ${M} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => x(!0),
              name: g,
              multiple: Y,
              onChange: (T) => {
                const D = T.currentTarget.files, j = Array.from(T.currentTarget.files || []);
                if (Q.length + j.length > fe) {
                  alert(`You can upload maximum ${fe} file(s)`), T.currentTarget.value = "";
                  return;
                }
                D && N(D), p("onChange", e, g), T.currentTarget.value = "";
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: F
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${Te ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "flex flex-wrap gap-2", children: Q.map((T) => /* @__PURE__ */ a.jsxs("div", { className: "relative group", children: [
          f && /* @__PURE__ */ a.jsx(f, { url: T }),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              onClick: () => v(T),
              className: "absolute -top-2 -right-2 bg-white text-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xl cursor-pointer transition",
              children: "×"
            }
          )
        ] }, T)) }),
        t.touched[g] && t.errors[g] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[g]) })
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
              id: g,
              name: g,
              value: t.values[g],
              onChange: (T) => {
                t.setFieldValue(g, T.target.value), u(T.target.value, e, o), p("onChange", e, `${g}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: F,
              className: `${C} ${M} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${Te ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        t.touched[g] && t.errors[g] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[g]) })
      ] });
    case "date": {
      const T = Po(e.max);
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
                  id: g,
                  type: "date",
                  name: g,
                  min: e.min,
                  max: T,
                  value: t.values[g] ?? "",
                  onChange: (D) => {
                    t.setFieldValue(g, D.target.value), u(D.target.value, e, o), p("onChange", e, `${g}`);
                  },
                  onBlur: t.handleBlur,
                  placeholder: e.placeholder,
                  disabled: F,
                  className: `${C} ${M} ${e.icon ? "pl-9" : ""}`
                }
              ),
              /* @__PURE__ */ a.jsx(
                "div",
                {
                  className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${Te ? "opacity-20" : ""}`,
                  style: { zIndex: -1, filter: "blur(8px)" }
                }
              )
            ]
          }
        ),
        t.touched[g] && t.errors[g] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[g]) })
      ] });
    }
    case "geolocation": {
      const T = t.values[g] || "", D = async () => {
        try {
          const j = await Zn();
          t.setFieldValue(g, j), u(j, e, o);
        } catch (j) {
          console.error(j), t.setFieldError(g, "Failed to fetch location");
        } finally {
          w(!1);
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
              value: T,
              readOnly: !0,
              className: `${C} ${M}`,
              placeholder: "Click to fetch location"
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              onClick: D,
              disabled: P,
              className: "absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 disabled:opacity-50",
              children: P ? /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-spinner fa-spin text-red-500" }) : /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-location-dot text-red-600 hover:text-red-700" })
            }
          )
        ] }),
        t.touched[g] && t.errors[g] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[g]) })
      ] });
    }
    case "number":
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: k, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: ee(e) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: g,
              type: "number",
              className: `${C} ${M} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => x(!0),
              name: g,
              value: t.values[g],
              onBlur: t.handleBlur,
              onChange: (T) => {
                t.setFieldValue(g, T.target.value), u(T.target.value, e, o), p("onChange", e, `${g}`);
              },
              step: e.step,
              placeholder: e.placeholder,
              disabled: F,
              min: e.min,
              max: e.max
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${Te ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[g] && t.errors[g] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[g]) })
      ] });
    default:
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: k, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: ee(e) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: g,
              type: e.type || "text",
              className: `${C} ${M} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => x(!0),
              name: g,
              value: t.values[g],
              onBlur: t.handleBlur,
              onChange: (T) => {
                t.setFieldValue(g, T.target.value), u(T.target.value, e, o), p("onChange", e, `${g}`);
              },
              step: e.step,
              placeholder: e.placeholder,
              disabled: F,
              minLength: e.minlength,
              maxLength: e.maxlength
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${Te ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[g] && t.errors[g] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[g]) })
      ] });
  }
}
function Go({
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
  module_refid: m,
  AttachmentPopup: d
}) {
  const f = vo(t, i?.operation), [p, N] = ne.useState({}), A = (v, _) => {
    N((C) => ({
      ...C,
      [v]: _
    }));
  }, [y, h] = ne.useState({}), x = (v, _) => {
    h((C) => ({
      ...C,
      [v]: _
    }));
  }, { initialValues: S, validationSchema: b } = ne.useMemo(() => {
    const v = {}, _ = {};
    return f.forEach((C) => {
      Eo([C], v, _, n);
    }), {
      initialValues: v,
      validationSchema: _
    };
  }, [f, n]), u = ms({
    initialValues: S,
    enableReinitialize: !0,
    validationSchema: _e.object().shape(b),
    onSubmit: (v) => {
      let _ = wo(v, f);
      r(_), u.resetForm();
    }
  });
  function w(v) {
    v.preventDefault(), u.resetForm();
  }
  return /* @__PURE__ */ a.jsx("div", { className: "relative  max-w-full ", children: /* @__PURE__ */ a.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ a.jsxs("form", { onSubmit: u.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "grid grid-cols-12 gap-4", children: [
      f.map((v, _) => {
        const C = Ht(v.hidden) || v.type === "hidden", M = `
  col-span-12 md:col-span-6
  ${tt[rt(Number(v.width))] || "lg:col-span-4"}
  ${C ? "hidden" : ""}
`;
        return /* @__PURE__ */ a.jsx(
          "div",
          {
            className: M,
            children: /* @__PURE__ */ a.jsx(
              Ho,
              {
                refid: l,
                module_refid: m,
                sqlOpsUrls: i,
                field: v,
                formik: u,
                methods: o,
                setFieldOptions: A,
                ...p[v.name] ? { optionsOverride: p[v.name] } : {},
                fieldLoading: y[v.name] ?? !1,
                setFieldLoading: x,
                AttachmentPopup: d
              }
            )
          },
          v?.name ?? `field-${_}`
        );
      }),
      /* @__PURE__ */ a.jsxs("div", { className: "col-span-12 flex flex-row gap-1 justify-end", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", onClick: w, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Reset" }),
        Object.keys(u.errors).length > 0 && /* @__PURE__ */ a.jsx("div", { children: "  " }),
        /* @__PURE__ */ a.jsx("div", { children: "  " }),
        /* @__PURE__ */ a.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" }),
        Object.keys(u.errors).length > 0 && /* @__PURE__ */ a.jsx("div", { children: "  " })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "mt-8 flex justify-between space-x-3", children: /* @__PURE__ */ a.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }) })
  ] }) }) });
}
function xn({
  formJson: e,
  methods: t = {},
  onCancel: n = () => {
  },
  components: r = {},
  callback: s = () => {
  },
  initialvalues: o,
  setEditData: i,
  toast: l,
  AttachmentPopup: m
}) {
  const d = e.endPoints, f = e?.source?.refid, [p, N] = ne.useState(o ?? {}), A = ne.useMemo(() => xo(e.fields), [e.fields]);
  ne.useEffect(() => {
    let S = !0;
    return (async () => {
      try {
        const u = await Zn();
        S && N((w) => ({
          ...w,
          ...Object.fromEntries(
            A.map((v) => [v, u])
          )
        }));
      } catch (u) {
        console.warn("Geo fetch failed", u);
      }
    })(), () => {
      S = !1;
    };
  }, [A]), ne.useEffect(() => {
    N(o ?? {});
  }, [o]);
  const y = ne.useCallback(
    (S) => {
      S && N((b) => {
        const u = { ...b };
        for (const w in S)
          S[w] !== null && S[w] !== void 0 && (u[w] = S[w]);
        return u;
      });
    },
    []
  );
  ne.useEffect(() => {
    let S = !0;
    return (async () => {
      const u = e?.source ?? {};
      if (u?.type && d?.operation !== "create") {
        if (u.type === "method") {
          const w = u.method, v = w ? t[w] : void 0;
          if (v)
            try {
              const _ = await v();
              S && y(_);
            } catch (_) {
              console.error("Method execution failed:", _);
            }
        }
        if (u.type === "api")
          try {
            const w = {
              method: u.method || "GET",
              url: d?.baseURL + u.endpoint,
              headers: {
                Authorization: `Bearer ${d?.accessToken}`
              },
              ...u.method === "GET" ? { params: { refid: u.refid } } : { data: { refid: u.refid } }
            }, v = await W(w);
            S && y(v.data);
          } catch (w) {
            console.error("API fetch failed:", w);
          }
        if (u.type === "sql" && u.refid && u.refid !== "0" || u.dbopsid) {
          if (!d) {
            console.error("SQL source requires formJson.endPoints but it is missing");
            return;
          }
          try {
            const w = await Do.fetch(d, {
              source: {
                ...u,
                table: u.table,
                columns: u.columns,
                where: Ee(u.where, {
                  refid: f
                })
              },
              fields: Pt(e.fields, d.operation)
            }, u?.dbopsid, e?.module_refid);
            S && y(w);
          } catch (w) {
            console.error("API fetch failed:", w);
          }
        }
      }
    })(), () => {
      S = !1;
    };
  }, [
    d,
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.endpoint || ""
  ]);
  const h = async (S) => {
    const b = e?.source ?? {};
    let u = { ...S }, w = "0,0";
    if (A.length > 0) {
      const v = A[0];
      w = (v ? S[v] : null) || "0,0";
      const C = A.filter((M) => !S[M]);
      if (C.length > 0)
        try {
          u = {
            ...S,
            ...Object.fromEntries(
              C.map((M) => [M, w])
            )
          };
        } catch {
          console.warn("Geo fetch failed");
        }
    }
    if (b.type === "method") {
      const v = b.method, _ = v ? t[v] : void 0;
      if (_)
        try {
          let C = u ? { ...u, geolocation: w } : {};
          const M = await _(C);
          i?.(null), s?.(M);
          const k = cr(M, e?.submit_msg);
          k && l?.success?.(k);
        } catch (C) {
          s?.(C), l?.error?.(lr(C)), console.error("Method execution failed:", C);
        }
    }
    if (b.type === "api") {
      if (!d) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const v = await W({
          method: b.method || "POST",
          url: d.baseURL + b.endpoint,
          data: u ? { ...u, geolocation: w } : {},
          headers: {
            Authorization: `Bearer ${d?.accessToken}`
          }
        });
        i?.(null), s?.(v);
        const _ = cr(v, e?.submit_msg);
        _ && l?.success?.(_);
      } catch (v) {
        s?.(v), l?.error?.(lr(v)), console.error("API fetch failed:", v);
      }
    }
    if (b.type === "sql") {
      const v = e.endPoints;
      if (!v) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let _ = !1, C;
        b?.dbopsid && (_ = !0, C = b?.dbopsid);
        const M = await W({
          method: "GET",
          url: v.baseURL + v.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${v?.accessToken}`
          }
        });
        if (!_) {
          let I = {
            ...b
          };
          b.where && (I = {
            ...b,
            where: Ee(b.where, {
              refid: f
            })
          }), C = (await W({
            method: "POST",
            url: v.baseURL + v.dbopsGetRefId,
            data: {
              operation: v.operation,
              source: I,
              fields: Pt(e.fields, v.operation),
              forcefill: e.forcefill,
              datahash: M.data.refhash,
              scrid: e?.module_refid
            },
            headers: {
              Authorization: `Bearer ${v?.accessToken}`
            }
          }))?.data.refid;
        }
        let k = {
          refid: C,
          fields: u,
          datahash: M.data.refhash,
          refid1: v.refid,
          geolocation: w
        };
        b?.refid && (k.refid1 = b?.refid);
        const U = await W({
          method: "POST",
          url: v.baseURL + v[v.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: k,
          headers: {
            Authorization: `Bearer ${v?.accessToken}`
          }
        }), L = cr(U, e?.submit_msg);
        L && l?.success?.(L), i?.(null), s?.(U);
      } catch (_) {
        s?.(_), l?.error?.(lr(_)), console.error("API fetch failed:", _);
      }
    }
  }, x = {
    simple: /* @__PURE__ */ a.jsx(
      Go,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: p,
        onSubmit: h,
        onCancel: n,
        methods: t,
        components: r,
        sqlOpsUrls: d,
        refid: f,
        module_refid: e?.module_refid,
        AttachmentPopup: m
      }
    )
  };
  return /* @__PURE__ */ a.jsx("div", { className: "relative", children: x.simple });
}
function Sr({
  tabObj: e,
  methods: t,
  tabName: n,
  sqlOpsUrls: r,
  refid: s,
  Reports: o,
  toast: i,
  handleAction: l,
  infoViewJson: m,
  AttachmentPopup: d
}) {
  const [f, p] = pe(!1), [N, A] = pe(null), [y, h] = ne.useState(0), [x, S] = ne.useState(null), b = e?.config, u = e?.config, w = u?.["popup.form"] ? "popup.form" : (u?.form, "form"), v = u?.[w] && Object.keys(u?.[w]).length > 0, _ = (L) => {
    let I = ve(L.data);
    S(I);
  }, C = (L) => {
    S(L), h((I) => I + 1);
  }, M = (L) => {
    let I = ve(L.data);
    A(I), p(!0);
  }, k = async () => {
    if (N?.id) {
      if (!r) {
        window.alert("Delete configuration missing.");
        return;
      }
      try {
        let L = e?.config;
        const I = L?.["popup.form"] ? "popup.form" : (L?.form, "form"), F = L?.[I];
        if (!F?.source) throw new Error("Form source missing");
        let g = !1, J;
        F?.source?.dbopsid && (g = !0, J = F?.source?.dbopsid);
        const ie = await W({
          method: "GET",
          url: r.baseURL + r.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${r.accessToken}`
          }
        });
        if (!g) {
          let se = { ...F.source, refid: N.id };
          F.source.where && (se = {
            ...se,
            where: Ee(F.source.where, {
              refid: N?.id
            })
          }), J = (await W({
            method: "POST",
            url: r.baseURL + r.dbopsGetRefId,
            data: {
              operation: "update",
              source: se,
              fields: F.fields,
              forcefill: F.forcefill,
              datahash: ie.data.refhash,
              scrid: m?.module_refid
            },
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            }
          }))?.data.refid;
        }
        await W({
          method: "POST",
          url: r.baseURL + r.dbopsUpdate,
          data: {
            refid: J,
            fields: { blocked: "true" },
            datahash: ie.data.refhash,
            refid1: N?.id
          },
          headers: {
            Authorization: `Bearer ${r.accessToken}`
          }
        }), window.alert("Record deleted successfully."), h((se) => se + 1);
      } catch (L) {
        console.error(L), window.alert("Failed to delete record. Please try again");
      } finally {
        A(null), p(!1);
      }
    }
  }, U = () => {
    A(null), p(!1);
  };
  return /* @__PURE__ */ a.jsx(a.Fragment, { children: o ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    b?.datagrid && /* @__PURE__ */ a.jsx(
      o,
      {
        methods: { ...t, deleteRecord: M, editRecord: _ },
        report: {
          ...b,
          source: {
            table: b?.table,
            type: "sql",
            cols: b?.cols,
            where: b?.where,
            orderby: b?.orderby,
            queryid: b?.queryid
          },
          endPoints: r,
          actions: { ...b?.actions, ...m?.buttons, ...m.actions },
          datagrid: b?.datagrid,
          buttons: b?.buttons,
          refresh: y,
          native: r?.native
        },
        onButtonClick: l
      }
    ),
    v && /* @__PURE__ */ a.jsx(
      xn,
      {
        formJson: {
          ...u[w],
          source: {
            ...u?.[w].source,
            refid: x?.id
          },
          endPoints: {
            ...r,
            operation: x ? "update" : "create"
          },
          module_refid: m?.module_refid
        },
        toast: i,
        methods: t,
        initialvalues: x ?? {},
        setEditData: C,
        AttachmentPopup: d
      }
    ),
    /* @__PURE__ */ a.jsx(
      Bo,
      {
        open: f,
        onConfirm: k,
        onCancel: U
      }
    )
  ] }) : v && /* @__PURE__ */ a.jsx(
    xn,
    {
      formJson: {
        ...u[w],
        source: {
          ...u?.[w].source,
          refid: x?.id
        },
        endPoints: {
          ...r,
          operation: x ? "update" : "create"
        },
        module_refid: m?.module_refid
      },
      toast: i,
      methods: t,
      initialvalues: x ?? {},
      setEditData: C,
      AttachmentPopup: d
    }
  ) });
}
function Rr(e, t) {
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
const wn = ({ groups: e, groupNames: t, setActiveTabIndex: n, activeTabIndex: r }) => /* @__PURE__ */ a.jsx(
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
), Wo = ({
  groups: e,
  groupNames: t,
  setActiveTabIndex: n,
  activeTabIndex: r,
  layoutConfig: s,
  showScrollHint: o,
  isCommonInfo: i,
  tabsNavRef: l
}) => {
  const [m, d] = pe(!1), f = We(null);
  return Re(() => {
    const p = (N) => {
      f.current && !f.current.contains(N.target) && d(!1);
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
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
        m && /* @__PURE__ */ a.jsx("div", { className: "absolute right-0 mt-2 w-48 max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-30", children: t.map((p, N) => /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              n(N), d(!1);
            },
            className: `w-full text-left px-3 py-2 text-sm truncate hover:bg-gray-100 ${r === N ? "bg-gray-50 font-semibold text-action" : "text-gray-700"}`,
            children: e[p]?.label || p
          },
          p
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
        children: t.length > 0 ? t.map((p, N) => /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            onClick: () => n(N),
            className: `relative cursor-pointer flex-shrink-0
            min-w-[8rem]   
            py-2 px-8
            rounded-t-lg text-xs sm:text-sm font-semibold
            transition-all duration-300 ease-out
            focus:outline-none whitespace-nowrap
            ${r === N ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
            children: /* @__PURE__ */ a.jsx("span", { className: "relative z-10 flex items-center justify-center gap-1 sm:gap-2", children: /* @__PURE__ */ a.jsx("span", { className: "truncate", children: e[p]?.label || p }) })
          },
          p
        )) : /* @__PURE__ */ a.jsx("div", { className: "py-3 px-6 text-sm text-gray-500", children: "No group available" })
      }
    ) })
  ] });
}, vn = ({
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
  fieldOptions: p,
  setFieldOptions: N,
  buttons: A,
  handleAction: y,
  components: h,
  AttachmentPopup: x
}) => {
  let S = A ? Object.entries(A).filter(([w, v]) => v.groups ? v.groups.includes(e[t]) : !0) : [];
  async function b(w, v) {
    const _ = l?.[w];
    if (_) {
      try {
        await _();
      } catch (C) {
        console.error("Method execution failed:", C);
      }
      return;
    }
    y?.({ [w]: v }, s);
  }
  const u = Rr(r?.component, h);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "bg-white rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex-1 flex flex-col min-h-0",
      children: [
        e.length > 0 ? r?.type === "fields" && r?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: n?.fieldGridClass || "grid grid-cols-12 gap-2", children: r.fields.map((w, v) => Ht(w.hidden) ? null : /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${tt[rt(Number(w.width))] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ a.jsx(
              xt,
              {
                field: w,
                data: s ?? {},
                methods: l,
                refid: m,
                sqlOpsUrls: d,
                module_refid: f,
                setFieldOptions: N,
                ...p[w.name] ? { optionsOverride: p[w.name] } : {},
                AttachmentPopup: x
              }
            )
          },
          w?.name ?? `field-${v}`
        )) }) }) : r?.type === "component" && u ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: u }) : r ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: i(r, e[t] || "") }) : null : /* @__PURE__ */ a.jsx("div", { className: "flex-1 col-span-full text-center py-8 text-gray-500", children: "No data available" }),
        /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: S && S.map(([w, v]) => /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => b(w, v),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: v.label
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
              e.slice(0, 5).map((w, v) => /* @__PURE__ */ a.jsx(
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
        e.length <= 5 && /* @__PURE__ */ a.jsx("div", { className: "mt-6 pt-3 border-t border-gray-100", children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
          /* @__PURE__ */ a.jsxs("span", { children: [
            "Tab ",
            t + 1,
            " of ",
            e.length
          ] }),
          /* @__PURE__ */ a.jsx("div", { className: "flex gap-1", children: e.map((w, v) => /* @__PURE__ */ a.jsx(
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
  toast: f,
  handleAction: p = () => {
  },
  infoViewJson: N,
  fieldOptions: A,
  setFieldOptions: y,
  components: h,
  AttachmentPopup: x
}) {
  const [S, b] = pe(0), [u, w] = pe(!1), v = We(null), _ = Object.keys(e);
  Re(() => {
    const g = () => {
      if (v.current) {
        const J = v.current;
        w(J.scrollWidth > J.clientWidth);
      }
    };
    return g(), window.addEventListener("resize", g), () => window.removeEventListener("resize", g);
  }, [_.length]), Re(() => {
    if (v.current && _.length > 0) {
      const g = v.current.children[S];
      g && g.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [S, _.length]);
  const C = i === "tableft", M = i === "tabright", k = !C && !M, U = e[_[S] ?? ""] || null, L = {
    single: (g, J) => /* @__PURE__ */ a.jsx(
      Tr,
      {
        fieldOptions: A,
        setFieldOptions: y,
        module_refid: N.module_refid,
        tabObj: g,
        methods: t,
        tabName: J,
        sqlOpsUrls: l,
        refid: m,
        AttachmentPopup: x
      }
    ),
    grid: (g, J) => /* @__PURE__ */ a.jsx(
      Sr,
      {
        ...d ? { Reports: d } : {},
        toast: f,
        handleAction: p,
        tabObj: g,
        methods: t,
        tabName: J,
        sqlOpsUrls: l,
        refid: m,
        infoViewJson: N,
        AttachmentPopup: x
      }
    )
  }, I = U?.config?.uimode, F = r[I] || L[I] || (() => /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No UI mode for this type" }));
  return k ? /* @__PURE__ */ a.jsxs("div", { className: "flex-1 flex flex-col min-h-0 ", children: [
    /* @__PURE__ */ a.jsx(
      Wo,
      {
        groupNames: _,
        groups: e,
        setActiveTabIndex: b,
        activeTabIndex: S,
        tabsNavRef: v,
        isCommonInfo: s,
        showScrollHint: u,
        layoutConfig: o
      }
    ),
    /* @__PURE__ */ a.jsx(
      vn,
      {
        groupNames: _,
        activeTabIndex: S,
        layoutConfig: o,
        tabObj: U,
        infoData: n,
        setActiveTabIndex: b,
        renderView: F,
        groups: e,
        methods: t,
        refid: m,
        sqlOpsUrls: l,
        module_refid: N.module_refid,
        fieldOptions: A,
        setFieldOptions: y,
        buttons: N.buttons,
        handleAction: p,
        ...h ? { components: h } : {},
        AttachmentPopup: x
      }
    )
  ] }) : /* @__PURE__ */ a.jsxs("div", { className: "flex-1 flex min-h-0", children: [
    C && /* @__PURE__ */ a.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ a.jsx(
      wn,
      {
        groupNames: _,
        groups: e,
        setActiveTabIndex: b,
        activeTabIndex: S
      }
    ) }),
    /* @__PURE__ */ a.jsx("main", { className: "flex-1 flex flex-col min-h-0 overflow-auto", children: /* @__PURE__ */ a.jsx(
      vn,
      {
        groupNames: _,
        activeTabIndex: S,
        layoutConfig: o,
        tabObj: U,
        infoData: n,
        setActiveTabIndex: b,
        renderView: F,
        groups: e,
        methods: t,
        refid: m,
        module_refid: N.module_refid,
        sqlOpsUrls: l,
        fieldOptions: A,
        setFieldOptions: y,
        handleAction: p,
        ...h ? { components: h } : {},
        AttachmentPopup: x
      }
    ) }),
    M && /* @__PURE__ */ a.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ a.jsx(
      wn,
      {
        groupNames: _,
        groups: e,
        setActiveTabIndex: b,
        activeTabIndex: S
      }
    ) })
  ] });
}
function qo({ title: e, children: t, isFirst: n }) {
  const [r, s] = pe(n);
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
function Ko({
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
  setFieldOptions: p,
  components: N,
  AttachmentPopup: A
}) {
  const y = {
    single: (b, u) => /* @__PURE__ */ a.jsx(
      Tr,
      {
        tabObj: b,
        methods: t,
        tabName: u,
        sqlOpsUrls: s,
        fieldOptions: f,
        setFieldOptions: p,
        refid: o,
        module_refid: d?.module_refid,
        AttachmentPopup: A
      }
    ),
    grid: (b, u) => /* @__PURE__ */ a.jsx(
      Sr,
      {
        ...i ? { Reports: i } : {},
        toast: l,
        infoViewJson: d,
        handleAction: m,
        tabObj: b,
        methods: t,
        tabName: u,
        sqlOpsUrls: s,
        refid: o,
        AttachmentPopup: A
      }
    )
  }, h = d?.buttons;
  let x = h ? Object.entries(h).filter(([b, u]) => !(u.groups && u.groups.length > 0)) : [];
  async function S(b, u) {
    const w = t?.[b];
    if (w) {
      try {
        await w();
      } catch (v) {
        console.error("Method execution failed:", v);
      }
      return;
    }
    m?.({ [b]: u }, n);
  }
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ a.jsx("div", { className: "mx-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "space-y-1 flex flex-col min-h-0", children: [
    e && Object.entries(e).map(([b, u], w) => {
      let v = h ? Object.entries(h).filter(([C, M]) => M.groups ? M.groups.includes(b) : !1) : [];
      const _ = Rr(u.component, N);
      return /* @__PURE__ */ a.jsxs(qo, { title: u.label, isFirst: w === 0, children: [
        u?.type === "fields" && u?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: u.fields.map((C, M) => Ht(C.hidden) ? null : /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${tt[rt(Number(C.width))] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ a.jsx(
              xt,
              {
                module_refid: d?.module_refid,
                methods: t,
                field: C,
                data: n ?? {},
                setFieldOptions: p,
                ...f[C.name] ? { optionsOverride: f[C.name] } : {},
                sqlOpsUrls: s,
                refid: o,
                AttachmentPopup: A
              }
            )
          },
          C?.name ?? `field-${M}`
        )) }) }) : u?.type === "component" && _ ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: _ }) : u ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: r[u.config?.uimode]?.(u) || y[u.config?.uimode]?.(u, b) || /* @__PURE__ */ a.jsx("div", { children: "No renderer for this type" }) }) : null,
        /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: v && v.map(([C, M]) => /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => S(C, M),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: M.label
          },
          C
        )) })
      ] }, b);
    }),
    /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: x && x.map(([b, u]) => /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => S(b, u),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: u.label
      },
      b
    )) })
  ] }) }) });
}
function Vo({ title: e, children: t }) {
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
function Yo({
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
  setFieldOptions: p,
  components: N,
  AttachmentPopup: A
}) {
  const y = {
    single: (b, u) => /* @__PURE__ */ a.jsx(
      Tr,
      {
        fieldOptions: f,
        setFieldOptions: p,
        module_refid: d?.module_refid,
        tabObj: b,
        methods: t,
        tabName: u,
        sqlOpsUrls: s,
        refid: o,
        AttachmentPopup: A
      }
    ),
    grid: (b, u) => /* @__PURE__ */ a.jsx(
      Sr,
      {
        ...i ? { Reports: i } : {},
        toast: l,
        handleAction: m,
        tabObj: b,
        methods: t,
        tabName: u,
        sqlOpsUrls: s,
        refid: o,
        infoViewJson: d,
        AttachmentPopup: A
      }
    )
  }, h = d?.buttons;
  let x = h ? Object.entries(h).filter(([b, u]) => !(u.groups && u.groups.length > 0)) : [];
  async function S(b, u) {
    const w = t?.[b];
    if (w) {
      try {
        await w();
      } catch (v) {
        console.error("Method execution failed:", v);
      }
      return;
    }
    m?.({ [b]: u }, n);
  }
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ a.jsx("div", { className: "mx-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "space-y-2  flex flex-col min-h-0", children: [
    e && Object.entries(e).map(([b, u], w) => {
      let v = h ? Object.entries(h).filter(([C, M]) => M.groups ? M.groups.includes(b) : !1) : [];
      const _ = Rr(u.component, N);
      return /* @__PURE__ */ a.jsxs(Vo, { title: u.label, children: [
        u?.type === "fields" && u?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: u.fields.map((C, M) => Ht(C.hidden) ? null : /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${tt[rt(Number(C.width))] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ a.jsx(
              xt,
              {
                module_refid: d?.module_refid,
                methods: t,
                field: C,
                data: n ?? {},
                setFieldOptions: p,
                ...f[C.name] ? { optionsOverride: f[C.name] } : {},
                sqlOpsUrls: s,
                refid: o,
                AttachmentPopup: A
              }
            )
          },
          C?.name ?? `field-${M}`
        )) }) }) : u?.type === "component" && _ ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: _ }) : u ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: r[u.config?.uimode]?.(u) || y[u.config?.uimode]?.(u, b) || /* @__PURE__ */ a.jsx("div", { children: "No renderer for this type" }) }) : null,
        /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: v && v.map(([C, M]) => /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => S(C, M),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: M.label
          },
          C
        )) })
      ] }, b);
    }),
    /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: x && x.map(([b, u]) => /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => S(b, u),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: u.label
      },
      b
    )) })
  ] }) }) });
}
function gi({
  infoViewJson: e,
  hiddenFields: t = [],
  groupFieldsFn: n = bo,
  layoutConfig: r = {},
  viewRenderers: s = {},
  methods: o = {},
  Reports: i,
  toast: l,
  handleAction: m = () => {
  },
  components: d,
  initialvalues: f,
  AttachmentPopup: p
}) {
  const [N, A] = ne.useState(f ?? {}), y = go(e.infoview ?? {}), h = e.endPoints, x = ne.useMemo(
    () => n(e.fields || {}),
    [e.fields, n]
  ), [S, b] = ne.useState({}), u = (k, U) => {
    b((L) => ({ ...L, [k]: U }));
  }, w = e?.source?.refid;
  let v = { ...x };
  e.infoview?.groups && (v = { ...v, ...e.infoview.groups }), ne.useEffect(() => {
    f && A((k) => ({
      ...k,
      ...f ?? {}
    }));
  }, [f]);
  const _ = ne.useCallback(
    (k) => {
      k && A((U) => ({
        ...U,
        ...k
      }));
    },
    []
  );
  ne.useEffect(() => {
    let k = !1;
    return (async () => {
      const L = e?.source;
      if (!L?.type) {
        k || _({});
        return;
      }
      if (L.type === "method") {
        const I = L.method, F = I ? o[I] : void 0;
        if (F)
          try {
            const g = await F();
            k || _(g || {});
          } catch (g) {
            console.error("Method execution failed:", g), k || _({});
          }
        else
          k || _({});
      }
      if (L.type === "api")
        try {
          const I = {
            method: L.method || "GET",
            url: h?.baseURL + L.endpoint,
            headers: {
              Authorization: `Bearer ${h?.accessToken}`
            },
            ...L.method === "GET" ? { params: { refid: L.refid } } : { data: { refid: L.refid } }
          }, { data: F } = await W(I), g = F?.results?.options ? F?.results?.options : F.data ? F.data : F.results ? F.results : F;
          k || _(g ?? {});
        } catch (I) {
          console.error("API fetch failed:", I), k || _({});
        }
      if (L.type === "sql" && L.refid && L.refid != "0" || L.dbopsid) {
        if (!h) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let I = !1, F;
          L?.dbopsid && (I = !0, F = L?.dbopsid);
          const g = await W({
            method: "GET",
            url: h.baseURL + h.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${h?.accessToken}`
            }
          });
          if (!I) {
            let se = {
              ...L
            };
            L.where && (se = {
              ...L,
              where: Ee(L.where, {
                refid: w
              })
            }), F = (await W({
              method: "POST",
              url: h.baseURL + h.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: se,
                fields: Pt(e.fields ?? {}, h.operation),
                forcefill: e.forcefill,
                datahash: g.data.refhash,
                srcid: e?.module_refid
              },
              headers: {
                Authorization: `Bearer ${h?.accessToken}`
              }
            }))?.data.refid;
          }
          const J = await W({
            method: "POST",
            url: h.baseURL + h.dbopsFetch,
            data: {
              refid: F,
              datahash: g.data.refhash,
              module_refid: e.module_refid
            },
            headers: {
              Authorization: `Bearer ${h?.accessToken}`
            }
          }), ie = Jn(J) ?? {};
          k || _(ie);
        } catch (I) {
          k || _({}), console.error("API fetch failed:", I);
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
  const C = v.common || null;
  C && delete v.common;
  const M = (k) => {
    switch (k) {
      case "accordion":
        return /* @__PURE__ */ a.jsx(
          Ko,
          {
            groups: v,
            methods: o,
            infoData: N,
            viewRenderers: s,
            sqlOpsUrls: h,
            refid: w,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: m,
            infoViewJson: e,
            setFieldOptions: u,
            fieldOptions: S,
            ...d ? { components: d } : {},
            AttachmentPopup: p
          }
        );
      case "tab":
      case "tableft":
      case "tabright":
        return /* @__PURE__ */ a.jsx(
          En,
          {
            groups: v,
            viewRenderers: s,
            layoutConfig: r,
            methods: o,
            infoData: N,
            isCommonInfo: !!C,
            viewMode: k,
            sqlOpsUrls: h,
            refid: w,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: m,
            infoViewJson: e,
            setFieldOptions: u,
            fieldOptions: S,
            ...d ? { components: d } : {},
            AttachmentPopup: p
          }
        );
      case "cards":
        return /* @__PURE__ */ a.jsx(
          Yo,
          {
            groups: v,
            viewRenderers: s,
            methods: o,
            infoData: N,
            sqlOpsUrls: h,
            refid: w,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: m,
            infoViewJson: e,
            setFieldOptions: u,
            fieldOptions: S,
            ...d ? { components: d } : {},
            AttachmentPopup: p
          }
        );
      default:
        return /* @__PURE__ */ a.jsx(
          En,
          {
            groups: v,
            viewRenderers: s,
            layoutConfig: r,
            methods: o,
            infoData: N,
            isCommonInfo: !!C,
            viewMode: k,
            sqlOpsUrls: h,
            refid: w,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: m,
            infoViewJson: e,
            setFieldOptions: u,
            fieldOptions: S,
            ...d ? { components: d } : {},
            AttachmentPopup: p
          }
        );
    }
  };
  return /* @__PURE__ */ a.jsxs("div", { className: r.containerClass || "h-screen flex flex-col ", children: [
    C && h && /* @__PURE__ */ a.jsx(
      $o,
      {
        commonInfo: C,
        infoData: N,
        hiddenFields: t,
        sqlOpsUrls: h,
        setFieldOptions: u,
        fieldOptions: S,
        module_refid: e.module_refid,
        refid: w,
        methods: o,
        AttachmentPopup: p
      }
    ),
    M(y)
  ] });
}
export {
  gi as InfoView
};
