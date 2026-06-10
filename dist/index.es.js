import ne, { useState as ue, useEffect as ve, useMemo as Rt, useRef as We, useLayoutEffect as ms } from "react";
import * as Re from "yup";
import { useFormik as ps } from "formik";
import { createPortal as hs } from "react-dom";
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
function gs() {
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
    function e(T) {
      if (T == null) return null;
      if (typeof T == "function")
        return T.$$typeof === $ ? null : T.displayName || T.name || null;
      if (typeof T == "string") return T;
      switch (T) {
        case y:
          return "Fragment";
        case j:
          return "Profiler";
        case x:
          return "StrictMode";
        case N:
          return "Suspense";
        case S:
          return "SuspenseList";
        case z:
          return "Activity";
      }
      if (typeof T == "object")
        switch (typeof T.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), T.$$typeof) {
          case b:
            return "Portal";
          case h:
            return (T.displayName || "Context") + ".Provider";
          case m:
            return (T._context.displayName || "Context") + ".Consumer";
          case p:
            var M = T.render;
            return T = T.displayName, T || (T = M.displayName || M.name || "", T = T !== "" ? "ForwardRef(" + T + ")" : "ForwardRef"), T;
          case P:
            return M = T.displayName || null, M !== null ? M : e(T.type) || "Memo";
          case k:
            M = T._payload, T = T._init;
            try {
              return e(T(M));
            } catch {
            }
        }
      return null;
    }
    function t(T) {
      return "" + T;
    }
    function n(T) {
      try {
        t(T);
        var M = !1;
      } catch {
        M = !0;
      }
      if (M) {
        M = console;
        var J = M.error, X = typeof Symbol == "function" && Symbol.toStringTag && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return J.call(
          M,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          X
        ), t(T);
      }
    }
    function r(T) {
      if (T === y) return "<>";
      if (typeof T == "object" && T !== null && T.$$typeof === k)
        return "<...>";
      try {
        var M = e(T);
        return M ? "<" + M + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var T = R.A;
      return T === null ? null : T.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(T) {
      if (O.call(T, "key")) {
        var M = Object.getOwnPropertyDescriptor(T, "key").get;
        if (M && M.isReactWarning) return !1;
      }
      return T.key !== void 0;
    }
    function l(T, M) {
      function J() {
        ee || (ee = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          M
        ));
      }
      J.isReactWarning = !0, Object.defineProperty(T, "key", {
        get: J,
        configurable: !0
      });
    }
    function f() {
      var T = e(this.type);
      return ae[T] || (ae[T] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), T = this.props.ref, T !== void 0 ? T : null;
    }
    function d(T, M, J, X, me, _, L, D) {
      return J = _.ref, T = {
        $$typeof: A,
        type: T,
        key: M,
        props: _,
        _owner: me
      }, (J !== void 0 ? J : null) !== null ? Object.defineProperty(T, "ref", {
        enumerable: !1,
        get: f
      }) : Object.defineProperty(T, "ref", { enumerable: !1, value: null }), T._store = {}, Object.defineProperty(T._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(T, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(T, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: L
      }), Object.defineProperty(T, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: D
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    }
    function u(T, M, J, X, me, _, L, D) {
      var I = M.children;
      if (I !== void 0)
        if (X)
          if (w(I)) {
            for (X = 0; X < I.length; X++)
              g(I[X]);
            Object.freeze && Object.freeze(I);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(I);
      if (O.call(M, "key")) {
        I = e(T);
        var Y = Object.keys(M).filter(function(F) {
          return F !== "key";
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
      if (I = null, J !== void 0 && (n(J), I = "" + J), i(M) && (n(M.key), I = "" + M.key), "key" in M) {
        J = {};
        for (var te in M)
          te !== "key" && (J[te] = M[te]);
      } else J = M;
      return I && l(
        J,
        typeof T == "function" ? T.displayName || T.name || "Unknown" : T
      ), d(
        T,
        I,
        _,
        me,
        s(),
        J,
        L,
        D
      );
    }
    function g(T) {
      typeof T == "object" && T !== null && T.$$typeof === A && T._store && (T._store.validated = 1);
    }
    var E = ne, A = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), m = Symbol.for("react.consumer"), h = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), z = Symbol.for("react.activity"), $ = Symbol.for("react.client.reference"), R = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, O = Object.prototype.hasOwnProperty, w = Array.isArray, W = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      react_stack_bottom_frame: function(T) {
        return T();
      }
    };
    var ee, ae = {}, oe = E.react_stack_bottom_frame.bind(
      E,
      o
    )(), ie = W(r(o)), Ie = {};
    ot.Fragment = y, ot.jsx = function(T, M, J, X, me) {
      var _ = 1e4 > R.recentlyCreatedOwnerStacks++;
      return u(
        T,
        M,
        J,
        !1,
        X,
        me,
        _ ? Error("react-stack-top-frame") : oe,
        _ ? W(r(T)) : ie
      );
    }, ot.jsxs = function(T, M, J, X, me) {
      var _ = 1e4 > R.recentlyCreatedOwnerStacks++;
      return u(
        T,
        M,
        J,
        !0,
        X,
        me,
        _ ? Error("react-stack-top-frame") : oe,
        _ ? W(r(T)) : ie
      );
    };
  }()), ot;
}
var qr;
function xs() {
  return qr || (qr = 1, process.env.NODE_ENV === "production" ? jt.exports = gs() : jt.exports = ys()), jt.exports;
}
var a = xs();
function Nn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: bs } = Object.prototype, { getPrototypeOf: vr } = Object, { iterator: kt, toStringTag: jn } = Symbol, Mt = /* @__PURE__ */ ((e) => (t) => {
  const n = bs.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Le = (e) => (e = e.toLowerCase(), (t) => Mt(t) === e), $t = (e) => (t) => typeof t === e, { isArray: Je } = Array, pt = $t("undefined");
function ht(e) {
  return e !== null && !pt(e) && e.constructor !== null && !pt(e.constructor) && Ne(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Tn = Le("ArrayBuffer");
function ws(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Tn(e.buffer), t;
}
const vs = $t("string"), Ne = $t("function"), Sn = $t("number"), gt = (e) => e !== null && typeof e == "object", Es = (e) => e === !0 || e === !1, _t = (e) => {
  if (Mt(e) !== "object")
    return !1;
  const t = vr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(jn in e) && !(kt in e);
}, As = (e) => {
  if (!gt(e) || ht(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Ns = Le("Date"), js = Le("File"), Ts = Le("Blob"), Ss = Le("FileList"), Rs = (e) => gt(e) && Ne(e.pipe), _s = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Ne(e.append) && ((t = Mt(e)) === "formdata" || // detect form-data instance
  t === "object" && Ne(e.toString) && e.toString() === "[object FormData]"));
}, Cs = Le("URLSearchParams"), [Os, Ls, Is, Ps] = ["ReadableStream", "Request", "Response", "Headers"].map(Le), Ds = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
const Fs = (e, t, n, { allOwnKeys: r } = {}) => (yt(t, (s, o) => {
  n && Ne(s) ? e[o] = Nn(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), ks = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ms = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, $s = (e, t, n, r) => {
  let s, o, i;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && vr(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Bs = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, zs = (e) => {
  if (!e) return null;
  if (Je(e)) return e;
  let t = e.length;
  if (!Sn(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Us = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && vr(Uint8Array)), Hs = (e, t) => {
  const r = (e && e[kt]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Gs = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Ws = Le("HTMLFormElement"), qs = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Kr = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Ks = Le("RegExp"), Cn = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  yt(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, Vs = (e) => {
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
}, Ys = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return Je(e) ? r(e) : r(String(e).split(t)), n;
}, Xs = () => {
}, Qs = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Zs(e) {
  return !!(e && Ne(e.append) && e[jn] === "FormData" && e[kt]);
}
const Js = (e) => {
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
          const f = n(i, s + 1);
          !pt(f) && (o[l] = f);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, ea = Le("AsyncFunction"), ta = (e) => e && (gt(e) || Ne(e)) && Ne(e.then) && Ne(e.catch), On = ((e, t) => e ? setImmediate : t ? ((n, r) => (Ge.addEventListener("message", ({ source: s, data: o }) => {
  s === Ge && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), Ge.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  Ne(Ge.postMessage)
), ra = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ge) : typeof process < "u" && process.nextTick || On, na = (e) => e != null && Ne(e[kt]), v = {
  isArray: Je,
  isArrayBuffer: Tn,
  isBuffer: ht,
  isFormData: _s,
  isArrayBufferView: ws,
  isString: vs,
  isNumber: Sn,
  isBoolean: Es,
  isObject: gt,
  isPlainObject: _t,
  isEmptyObject: As,
  isReadableStream: Os,
  isRequest: Ls,
  isResponse: Is,
  isHeaders: Ps,
  isUndefined: pt,
  isDate: Ns,
  isFile: js,
  isBlob: Ts,
  isRegExp: Ks,
  isFunction: Ne,
  isStream: Rs,
  isURLSearchParams: Cs,
  isTypedArray: Us,
  isFileList: Ss,
  forEach: yt,
  merge: fr,
  extend: Fs,
  trim: Ds,
  stripBOM: ks,
  inherits: Ms,
  toFlatObject: $s,
  kindOf: Mt,
  kindOfTest: Le,
  endsWith: Bs,
  toArray: zs,
  forEachEntry: Hs,
  matchAll: Gs,
  isHTMLForm: Ws,
  hasOwnProperty: Kr,
  hasOwnProp: Kr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Cn,
  freezeMethods: Vs,
  toObjectSet: Ys,
  toCamelCase: qs,
  noop: Xs,
  toFiniteNumber: Qs,
  findKey: Rn,
  global: Ge,
  isContextDefined: _n,
  isSpecCompliantForm: Zs,
  toJSONObject: Js,
  isAsyncFn: ea,
  isThenable: ta,
  setImmediate: On,
  asap: ra,
  isIterable: na
};
function V(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
v.inherits(V, Error, {
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
  return v.toFlatObject(e, i, function(f) {
    return f !== Error.prototype;
  }, (l) => l !== "isAxiosError"), V.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const sa = null;
function mr(e) {
  return v.isPlainObject(e) || v.isArray(e);
}
function Pn(e) {
  return v.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Vr(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = Pn(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function aa(e) {
  return v.isArray(e) && !e.some(mr);
}
const oa = v.toFlatObject(v, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Bt(e, t, n) {
  if (!v.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = v.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, x) {
    return !v.isUndefined(x[y]);
  });
  const r = n.metaTokens, s = n.visitor || u, o = n.dots, i = n.indexes, f = (n.Blob || typeof Blob < "u" && Blob) && v.isSpecCompliantForm(t);
  if (!v.isFunction(s))
    throw new TypeError("visitor must be a function");
  function d(b) {
    if (b === null) return "";
    if (v.isDate(b))
      return b.toISOString();
    if (v.isBoolean(b))
      return b.toString();
    if (!f && v.isBlob(b))
      throw new V("Blob is not supported. Use a Buffer instead.");
    return v.isArrayBuffer(b) || v.isTypedArray(b) ? f && typeof Blob == "function" ? new Blob([b]) : Buffer.from(b) : b;
  }
  function u(b, y, x) {
    let j = b;
    if (b && !x && typeof b == "object") {
      if (v.endsWith(y, "{}"))
        y = r ? y : y.slice(0, -2), b = JSON.stringify(b);
      else if (v.isArray(b) && aa(b) || (v.isFileList(b) || v.endsWith(y, "[]")) && (j = v.toArray(b)))
        return y = Pn(y), j.forEach(function(h, p) {
          !(v.isUndefined(h) || h === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Vr([y], p, o) : i === null ? y : y + "[]",
            d(h)
          );
        }), !1;
    }
    return mr(b) ? !0 : (t.append(Vr(x, y, o), d(b)), !1);
  }
  const g = [], E = Object.assign(oa, {
    defaultVisitor: u,
    convertValue: d,
    isVisitable: mr
  });
  function A(b, y) {
    if (!v.isUndefined(b)) {
      if (g.indexOf(b) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      g.push(b), v.forEach(b, function(j, m) {
        (!(v.isUndefined(j) || j === null) && s.call(
          t,
          j,
          v.isString(m) ? m.trim() : m,
          y,
          E
        )) === !0 && A(j, y ? y.concat(m) : [m]);
      }), g.pop();
    }
  }
  if (!v.isObject(e))
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
const Dn = Er.prototype;
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
function ia(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Fn(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || ia;
  v.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = v.isURLSearchParams(t) ? t.toString() : new Er(t, n).toString(r), o) {
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
    v.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const kn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, la = typeof URLSearchParams < "u" ? URLSearchParams : Er, ca = typeof FormData < "u" ? FormData : null, ua = typeof Blob < "u" ? Blob : null, da = {
  isBrowser: !0,
  classes: {
    URLSearchParams: la,
    FormData: ca,
    Blob: ua
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ar = typeof window < "u" && typeof document < "u", pr = typeof navigator == "object" && navigator || void 0, fa = Ar && (!pr || ["ReactNative", "NativeScript", "NS"].indexOf(pr.product) < 0), ma = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", pa = Ar && window.location.href || "http://localhost", ha = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ar,
  hasStandardBrowserEnv: fa,
  hasStandardBrowserWebWorkerEnv: ma,
  navigator: pr,
  origin: pa
}, Symbol.toStringTag, { value: "Module" })), he = {
  ...ha,
  ...da
};
function ga(e, t) {
  return Bt(e, new he.classes.URLSearchParams(), {
    visitor: function(n, r, s, o) {
      return he.isNode && v.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function ya(e) {
  return v.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function xa(e) {
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
    const l = Number.isFinite(+i), f = o >= n.length;
    return i = !i && v.isArray(s) ? s.length : i, f ? (v.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !l) : ((!s[i] || !v.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && v.isArray(s[i]) && (s[i] = xa(s[i])), !l);
  }
  if (v.isFormData(e) && v.isFunction(e.entries)) {
    const n = {};
    return v.forEachEntry(e, (r, s) => {
      t(ya(r), s, n, 0);
    }), n;
  }
  return null;
}
function ba(e, t, n) {
  if (v.isString(e))
    try {
      return (t || JSON.parse)(e), v.trim(e);
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
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = v.isObject(t);
    if (o && v.isHTMLForm(t) && (t = new FormData(t)), v.isFormData(t))
      return s ? JSON.stringify(Mn(t)) : t;
    if (v.isArrayBuffer(t) || v.isBuffer(t) || v.isStream(t) || v.isFile(t) || v.isBlob(t) || v.isReadableStream(t))
      return t;
    if (v.isArrayBufferView(t))
      return t.buffer;
    if (v.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return ga(t, this.formSerializer).toString();
      if ((l = v.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return Bt(
          l ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), ba(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || xt.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (v.isResponse(t) || v.isReadableStream(t))
      return t;
    if (t && v.isString(t) && (r && !this.responseType || s)) {
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
v.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  xt.headers[e] = {};
});
const wa = v.toObjectSet([
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
]), va = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && wa[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Qr = Symbol("internals");
function it(e) {
  return e && String(e).trim().toLowerCase();
}
function Ct(e) {
  return e === !1 || e == null ? e : v.isArray(e) ? e.map(Ct) : String(e);
}
function Ea(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Aa = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Jt(e, t, n, r, s) {
  if (v.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!v.isString(t)) {
    if (v.isString(r))
      return t.indexOf(r) !== -1;
    if (v.isRegExp(r))
      return r.test(t);
  }
}
function Na(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function ja(e, t) {
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
let je = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(l, f, d) {
      const u = it(f);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const g = v.findKey(s, u);
      (!g || s[g] === void 0 || d === !0 || d === void 0 && s[g] !== !1) && (s[g || f] = Ct(l));
    }
    const i = (l, f) => v.forEach(l, (d, u) => o(d, u, f));
    if (v.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (v.isString(t) && (t = t.trim()) && !Aa(t))
      i(va(t), n);
    else if (v.isObject(t) && v.isIterable(t)) {
      let l = {}, f, d;
      for (const u of t) {
        if (!v.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        l[d = u[0]] = (f = l[d]) ? v.isArray(f) ? [...f, u[1]] : [f, u[1]] : u[1];
      }
      i(l, n);
    } else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = it(t), t) {
      const r = v.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Ea(s);
        if (v.isFunction(n))
          return n.call(this, s, r);
        if (v.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = it(t), t) {
      const r = v.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Jt(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = it(i), i) {
        const l = v.findKey(r, i);
        l && (!n || Jt(r, r[l], l, n)) && (delete r[l], s = !0);
      }
    }
    return v.isArray(t) ? t.forEach(o) : o(t), s;
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
    return v.forEach(this, (s, o) => {
      const i = v.findKey(r, o);
      if (i) {
        n[i] = Ct(s), delete n[o];
        return;
      }
      const l = t ? Na(o) : String(o).trim();
      l !== o && delete n[o], n[l] = Ct(s), r[l] = !0;
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
    const r = (this[Qr] = this[Qr] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const l = it(i);
      r[l] || (ja(s, i), r[l] = !0);
    }
    return v.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
je.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
v.reduceDescriptors(je.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
v.freezeMethods(je);
function er(e, t) {
  const n = this || xt, r = t || n, s = je.from(r.headers);
  let o = r.data;
  return v.forEach(e, function(l) {
    o = l.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function $n(e) {
  return !!(e && e.__CANCEL__);
}
function et(e, t, n) {
  V.call(this, e ?? "canceled", V.ERR_CANCELED, t, n), this.name = "CanceledError";
}
v.inherits(et, V, {
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
function Ta(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Sa(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const d = Date.now(), u = r[o];
    i || (i = d), n[s] = f, r[s] = d;
    let g = o, E = 0;
    for (; g !== s; )
      E += n[g++], g = g % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), d - i < t)
      return;
    const A = u && d - u;
    return A ? Math.round(E * 1e3 / A) : void 0;
  };
}
function Ra(e, t) {
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
  const s = Sa(50, 250);
  return Ra((o) => {
    const i = o.loaded, l = o.lengthComputable ? o.total : void 0, f = i - r, d = s(f), u = i <= l;
    r = i;
    const g = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: f,
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
}, Jr = (e) => (...t) => v.asap(() => e(...t)), _a = he.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, he.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(he.origin),
  he.navigator && /(msie|trident)/i.test(he.navigator.userAgent)
) : () => !0, Ca = he.hasStandardBrowserEnv ? (
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
function Oa(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function La(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function zn(e, t, n) {
  let r = !Oa(t);
  return e && (r || n == !1) ? La(e, t) : t;
}
const en = (e) => e instanceof je ? { ...e } : e;
function Ke(e, t) {
  t = t || {};
  const n = {};
  function r(d, u, g, E) {
    return v.isPlainObject(d) && v.isPlainObject(u) ? v.merge.call({ caseless: E }, d, u) : v.isPlainObject(u) ? v.merge({}, u) : v.isArray(u) ? u.slice() : u;
  }
  function s(d, u, g, E) {
    if (v.isUndefined(u)) {
      if (!v.isUndefined(d))
        return r(void 0, d, g, E);
    } else return r(d, u, g, E);
  }
  function o(d, u) {
    if (!v.isUndefined(u))
      return r(void 0, u);
  }
  function i(d, u) {
    if (v.isUndefined(u)) {
      if (!v.isUndefined(d))
        return r(void 0, d);
    } else return r(void 0, u);
  }
  function l(d, u, g) {
    if (g in t)
      return r(d, u);
    if (g in e)
      return r(void 0, d);
  }
  const f = {
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
  return v.forEach(Object.keys({ ...e, ...t }), function(u) {
    const g = f[u] || s, E = g(e[u], t[u], u);
    v.isUndefined(E) && g !== l || (n[u] = E);
  }), n;
}
const Un = (e) => {
  const t = Ke({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: l } = t;
  t.headers = i = je.from(i), t.url = Fn(zn(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), l && i.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let f;
  if (v.isFormData(n)) {
    if (he.hasStandardBrowserEnv || he.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((f = i.getContentType()) !== !1) {
      const [d, ...u] = f ? f.split(";").map((g) => g.trim()).filter(Boolean) : [];
      i.setContentType([d || "multipart/form-data", ...u].join("; "));
    }
  }
  if (he.hasStandardBrowserEnv && (r && v.isFunction(r) && (r = r(t)), r || r !== !1 && _a(t.url))) {
    const d = s && o && Ca.read(o);
    d && i.set(s, d);
  }
  return t;
}, Ia = typeof XMLHttpRequest < "u", Pa = Ia && function(e) {
  return new Promise(function(n, r) {
    const s = Un(e);
    let o = s.data;
    const i = je.from(s.headers).normalize();
    let { responseType: l, onUploadProgress: f, onDownloadProgress: d } = s, u, g, E, A, b;
    function y() {
      A && A(), b && b(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
    }
    let x = new XMLHttpRequest();
    x.open(s.method.toUpperCase(), s.url, !0), x.timeout = s.timeout;
    function j() {
      if (!x)
        return;
      const h = je.from(
        "getAllResponseHeaders" in x && x.getAllResponseHeaders()
      ), N = {
        data: !l || l === "text" || l === "json" ? x.responseText : x.response,
        status: x.status,
        statusText: x.statusText,
        headers: h,
        config: e,
        request: x
      };
      Bn(function(P) {
        n(P), y();
      }, function(P) {
        r(P), y();
      }, N), x = null;
    }
    "onloadend" in x ? x.onloadend = j : x.onreadystatechange = function() {
      !x || x.readyState !== 4 || x.status === 0 && !(x.responseURL && x.responseURL.indexOf("file:") === 0) || setTimeout(j);
    }, x.onabort = function() {
      x && (r(new V("Request aborted", V.ECONNABORTED, e, x)), x = null);
    }, x.onerror = function() {
      r(new V("Network Error", V.ERR_NETWORK, e, x)), x = null;
    }, x.ontimeout = function() {
      let p = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const N = s.transitional || kn;
      s.timeoutErrorMessage && (p = s.timeoutErrorMessage), r(new V(
        p,
        N.clarifyTimeoutError ? V.ETIMEDOUT : V.ECONNABORTED,
        e,
        x
      )), x = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in x && v.forEach(i.toJSON(), function(p, N) {
      x.setRequestHeader(N, p);
    }), v.isUndefined(s.withCredentials) || (x.withCredentials = !!s.withCredentials), l && l !== "json" && (x.responseType = s.responseType), d && ([E, b] = It(d, !0), x.addEventListener("progress", E)), f && x.upload && ([g, A] = It(f), x.upload.addEventListener("progress", g), x.upload.addEventListener("loadend", A)), (s.cancelToken || s.signal) && (u = (h) => {
      x && (r(!h || h.type ? new et(null, e, x) : h), x.abort(), x = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const m = Ta(s.url);
    if (m && he.protocols.indexOf(m) === -1) {
      r(new V("Unsupported protocol " + m + ":", V.ERR_BAD_REQUEST, e));
      return;
    }
    x.send(o || null);
  });
}, Da = (e, t) => {
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
    const { signal: f } = r;
    return f.unsubscribe = () => v.asap(l), f;
  }
}, Fa = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, ka = async function* (e, t) {
  for await (const n of Ma(e))
    yield* Fa(n, t);
}, Ma = async function* (e) {
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
  const s = ka(e, t);
  let o = 0, i, l = (f) => {
    i || (i = !0, r && r(f));
  };
  return new ReadableStream({
    async pull(f) {
      try {
        const { done: d, value: u } = await s.next();
        if (d) {
          l(), f.close();
          return;
        }
        let g = u.byteLength;
        if (n) {
          let E = o += g;
          n(E);
        }
        f.enqueue(new Uint8Array(u));
      } catch (d) {
        throw l(d), d;
      }
    },
    cancel(f) {
      return l(f), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, zt = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Hn = zt && typeof ReadableStream == "function", $a = zt && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Gn = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Ba = Hn && Gn(() => {
  let e = !1;
  const t = new Request(he.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), rn = 64 * 1024, hr = Hn && Gn(() => v.isReadableStream(new Response("").body)), Pt = {
  stream: hr && ((e) => e.body)
};
zt && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Pt[t] && (Pt[t] = v.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new V(`Response type '${t}' is not supported`, V.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const za = async (e) => {
  if (e == null)
    return 0;
  if (v.isBlob(e))
    return e.size;
  if (v.isSpecCompliantForm(e))
    return (await new Request(he.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (v.isArrayBufferView(e) || v.isArrayBuffer(e))
    return e.byteLength;
  if (v.isURLSearchParams(e) && (e = e + ""), v.isString(e))
    return (await $a(e)).byteLength;
}, Ua = async (e, t) => {
  const n = v.toFiniteNumber(e.getContentLength());
  return n ?? za(t);
}, Ha = zt && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: s,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: l,
    onUploadProgress: f,
    responseType: d,
    headers: u,
    withCredentials: g = "same-origin",
    fetchOptions: E
  } = Un(e);
  d = d ? (d + "").toLowerCase() : "text";
  let A = Da([s, o && o.toAbortSignal()], i), b;
  const y = A && A.unsubscribe && (() => {
    A.unsubscribe();
  });
  let x;
  try {
    if (f && Ba && n !== "get" && n !== "head" && (x = await Ua(u, r)) !== 0) {
      let N = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), S;
      if (v.isFormData(r) && (S = N.headers.get("content-type")) && u.setContentType(S), N.body) {
        const [P, k] = Zr(
          x,
          It(Jr(f))
        );
        r = tn(N.body, rn, P, k);
      }
    }
    v.isString(g) || (g = g ? "include" : "omit");
    const j = "credentials" in Request.prototype;
    b = new Request(t, {
      ...E,
      signal: A,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: j ? g : void 0
    });
    let m = await fetch(b, E);
    const h = hr && (d === "stream" || d === "response");
    if (hr && (l || h && y)) {
      const N = {};
      ["status", "statusText", "headers"].forEach((z) => {
        N[z] = m[z];
      });
      const S = v.toFiniteNumber(m.headers.get("content-length")), [P, k] = l && Zr(
        S,
        It(Jr(l), !0)
      ) || [];
      m = new Response(
        tn(m.body, rn, P, () => {
          k && k(), y && y();
        }),
        N
      );
    }
    d = d || "text";
    let p = await Pt[v.findKey(Pt, d) || "text"](m, e);
    return !h && y && y(), await new Promise((N, S) => {
      Bn(N, S, {
        data: p,
        headers: je.from(m.headers),
        status: m.status,
        statusText: m.statusText,
        config: e,
        request: b
      });
    });
  } catch (j) {
    throw y && y(), j && j.name === "TypeError" && /Load failed|fetch/i.test(j.message) ? Object.assign(
      new V("Network Error", V.ERR_NETWORK, e, b),
      {
        cause: j.cause || j
      }
    ) : V.from(j, j && j.code, e, b);
  }
}), gr = {
  http: sa,
  xhr: Pa,
  fetch: Ha
};
v.forEach(gr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const nn = (e) => `- ${e}`, Ga = (e) => v.isFunction(e) || e === null || e === !1, Wn = {
  getAdapter: (e) => {
    e = v.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !Ga(n) && (r = gr[(i = String(n)).toLowerCase()], r === void 0))
        throw new V(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([l, f]) => `adapter ${l} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
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
function Wa(e, t, n) {
  if (typeof e != "object")
    throw new V("options must be an object", V.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const l = e[o], f = l === void 0 || i(l, o, e);
      if (f !== !0)
        throw new V("option " + o + " must be " + f, V.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new V("Unknown option " + o, V.ERR_BAD_OPTION);
  }
}
const Ot = {
  assertOptions: Wa,
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
    }, !1), s != null && (v.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Ot.assertOptions(s, {
      encode: Fe.function,
      serialize: Fe.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Ot.assertOptions(n, {
      baseUrl: Fe.spelling("baseURL"),
      withXsrfToken: Fe.spelling("withXSRFToken")
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
    ), n.headers = je.concat(i, o);
    const l = [];
    let f = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(n) === !1 || (f = f && y.synchronous, l.unshift(y.fulfilled, y.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function(y) {
      d.push(y.fulfilled, y.rejected);
    });
    let u, g = 0, E;
    if (!f) {
      const b = [sn.bind(this), void 0];
      for (b.unshift(...l), b.push(...d), E = b.length, u = Promise.resolve(n); g < E; )
        u = u.then(b[g++], b[g++]);
      return u;
    }
    E = l.length;
    let A = n;
    for (g = 0; g < E; ) {
      const b = l[g++], y = l[g++];
      try {
        A = b(A);
      } catch (x) {
        y.call(this, x);
        break;
      }
    }
    try {
      u = sn.call(this, A);
    } catch (b) {
      return Promise.reject(b);
    }
    for (g = 0, E = d.length; g < E; )
      u = u.then(d[g++], d[g++]);
    return u;
  }
  getUri(t) {
    t = Ke(this.defaults, t);
    const n = zn(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Fn(n, t.params, t.paramsSerializer);
  }
};
v.forEach(["delete", "get", "head", "options"], function(t) {
  qe.prototype[t] = function(n, r) {
    return this.request(Ke(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
v.forEach(["post", "put", "patch"], function(t) {
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
let qa = class Kn {
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
function Ka(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Va(e) {
  return v.isObject(e) && e.isAxiosError === !0;
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
  return v.extend(n, qe.prototype, t, { allOwnKeys: !0 }), v.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Vn(Ke(e, s));
  }, n;
}
const G = Vn(xt);
G.Axios = qe;
G.CanceledError = et;
G.CancelToken = qa;
G.isCancel = $n;
G.VERSION = qn;
G.toFormData = Bt;
G.AxiosError = V;
G.Cancel = G.CanceledError;
G.all = function(t) {
  return Promise.all(t);
};
G.spread = Ka;
G.isAxiosError = Va;
G.mergeConfig = Ke;
G.AxiosHeaders = je;
G.formToJSON = (e) => Mn(v.isHTMLForm(e) ? new FormData(e) : e);
G.getAdapter = Wn.getAdapter;
G.HttpStatusCode = yr;
G.default = G;
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
  toFormData: Ei,
  AxiosHeaders: Ai,
  HttpStatusCode: Ni,
  formToJSON: ji,
  getAdapter: Ti,
  mergeConfig: Si
} = G;
/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */
const {
  entries: Yn,
  setPrototypeOf: on,
  isFrozen: Ya,
  getPrototypeOf: Xa,
  getOwnPropertyDescriptor: Qa
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
const Tt = xe(Array.prototype.forEach), Za = xe(Array.prototype.lastIndexOf), ln = xe(Array.prototype.pop), lt = xe(Array.prototype.push), Ja = xe(Array.prototype.splice), Lt = xe(String.prototype.toLowerCase), rr = xe(String.prototype.toString), nr = xe(String.prototype.match), ct = xe(String.prototype.replace), eo = xe(String.prototype.indexOf), to = xe(String.prototype.trim), Ce = xe(Object.prototype.hasOwnProperty), ge = xe(RegExp.prototype.test), ut = ro(TypeError);
function xe(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    return br(e, t, r);
  };
}
function ro(e) {
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
      o !== s && (Ya(t) || (t[r] = o), s = o);
    }
    e[s] = !0;
  }
  return e;
}
function no(e) {
  for (let t = 0; t < e.length; t++)
    Ce(e, t) || (e[t] = null);
  return e;
}
function ke(e) {
  const t = xr(null);
  for (const [n, r] of Yn(e))
    Ce(e, n) && (Array.isArray(r) ? t[n] = no(r) : r && typeof r == "object" && r.constructor === Object ? t[n] = ke(r) : t[n] = r);
  return t;
}
function dt(e, t) {
  for (; e !== null; ) {
    const r = Qa(e, t);
    if (r) {
      if (r.get)
        return xe(r.get);
      if (typeof r.value == "function")
        return xe(r.value);
    }
    e = Xa(e);
  }
  function n() {
    return null;
  }
  return n;
}
const cn = ye(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), sr = ye(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ar = ye(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), so = ye(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), or = ye(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), ao = ye(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), un = ye(["#text"]), dn = ye(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ir = ye(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), fn = ye(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), St = ye(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), oo = _e(/\{\{[\w\W]*|[\w\W]*\}\}/gm), io = _e(/<%[\w\W]*|[\w\W]*%>/gm), lo = _e(/\$\{[\w\W]*/gm), co = _e(/^data-[\-\w.\u00B7-\uFFFF]+$/), uo = _e(/^aria-[\-\w]+$/), Xn = _e(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), fo = _e(/^(?:\w+script|data):/i), mo = _e(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Qn = _e(/^html$/i), po = _e(/^[a-z][.\w]*(-[.\w]+)+$/i);
var mn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: uo,
  ATTR_WHITESPACE: mo,
  CUSTOM_ELEMENT: po,
  DATA_ATTR: co,
  DOCTYPE_NAME: Qn,
  ERB_EXPR: io,
  IS_ALLOWED_URI: Xn,
  IS_SCRIPT_OR_DATA: fo,
  MUSTACHE_EXPR: oo,
  TMPLIT_EXPR: lo
});
const ft = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, ho = function() {
  return typeof window > "u" ? null : window;
}, go = function(t, n) {
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
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ho();
  const t = (H) => Zn(H);
  if (t.version = "3.3.1", t.removed = [], !e || !e.document || e.document.nodeType !== ft.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: n
  } = e;
  const r = n, s = r.currentScript, {
    DocumentFragment: o,
    HTMLTemplateElement: i,
    Node: l,
    Element: f,
    NodeFilter: d,
    NamedNodeMap: u = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: g,
    DOMParser: E,
    trustedTypes: A
  } = e, b = f.prototype, y = dt(b, "cloneNode"), x = dt(b, "remove"), j = dt(b, "nextSibling"), m = dt(b, "childNodes"), h = dt(b, "parentNode");
  if (typeof i == "function") {
    const H = n.createElement("template");
    H.content && H.content.ownerDocument && (n = H.content.ownerDocument);
  }
  let p, N = "";
  const {
    implementation: S,
    createNodeIterator: P,
    createDocumentFragment: k,
    getElementsByTagName: z
  } = n, {
    importNode: $
  } = r;
  let R = pn();
  t.isSupported = typeof Yn == "function" && typeof h == "function" && S && S.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: O,
    ERB_EXPR: w,
    TMPLIT_EXPR: W,
    DATA_ATTR: ee,
    ARIA_ATTR: ae,
    IS_SCRIPT_OR_DATA: oe,
    ATTR_WHITESPACE: ie,
    CUSTOM_ELEMENT: Ie
  } = mn;
  let {
    IS_ALLOWED_URI: T
  } = mn, M = null;
  const J = Q({}, [...cn, ...sr, ...ar, ...or, ...un]);
  let X = null;
  const me = Q({}, [...dn, ...ir, ...fn, ...St]);
  let _ = Object.seal(xr(null, {
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
  })), L = null, D = null;
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
  let Y = !0, te = !0, F = !1, U = !0, q = !1, K = !0, Z = !1, de = !1, re = !1, be = !1, Te = !1, Se = !1, wt = !0, ze = !1;
  const Gt = "user-content-";
  let Wt = !0, nt = !1, Ve = {}, Pe = null;
  const qt = Q({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let _r = null;
  const Cr = Q({}, ["audio", "video", "img", "source", "image", "track"]);
  let Kt = null;
  const Or = Q({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), vt = "http://www.w3.org/1998/Math/MathML", Et = "http://www.w3.org/2000/svg", Me = "http://www.w3.org/1999/xhtml";
  let Ye = Me, Vt = !1, Yt = null;
  const os = Q({}, [vt, Et, Me], rr);
  let At = Q({}, ["mi", "mo", "mn", "ms", "mtext"]), Nt = Q({}, ["annotation-xml"]);
  const is = Q({}, ["title", "style", "font", "a", "script"]);
  let st = null;
  const ls = ["application/xhtml+xml", "text/html"], cs = "text/html";
  let ce = null, Xe = null;
  const us = n.createElement("form"), Lr = function(c) {
    return c instanceof RegExp || c instanceof Function;
  }, Xt = function() {
    let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Xe && Xe === c)) {
      if ((!c || typeof c != "object") && (c = {}), c = ke(c), st = // eslint-disable-next-line unicorn/prefer-includes
      ls.indexOf(c.PARSER_MEDIA_TYPE) === -1 ? cs : c.PARSER_MEDIA_TYPE, ce = st === "application/xhtml+xml" ? rr : Lt, M = Ce(c, "ALLOWED_TAGS") ? Q({}, c.ALLOWED_TAGS, ce) : J, X = Ce(c, "ALLOWED_ATTR") ? Q({}, c.ALLOWED_ATTR, ce) : me, Yt = Ce(c, "ALLOWED_NAMESPACES") ? Q({}, c.ALLOWED_NAMESPACES, rr) : os, Kt = Ce(c, "ADD_URI_SAFE_ATTR") ? Q(ke(Or), c.ADD_URI_SAFE_ATTR, ce) : Or, _r = Ce(c, "ADD_DATA_URI_TAGS") ? Q(ke(Cr), c.ADD_DATA_URI_TAGS, ce) : Cr, Pe = Ce(c, "FORBID_CONTENTS") ? Q({}, c.FORBID_CONTENTS, ce) : qt, L = Ce(c, "FORBID_TAGS") ? Q({}, c.FORBID_TAGS, ce) : ke({}), D = Ce(c, "FORBID_ATTR") ? Q({}, c.FORBID_ATTR, ce) : ke({}), Ve = Ce(c, "USE_PROFILES") ? c.USE_PROFILES : !1, Y = c.ALLOW_ARIA_ATTR !== !1, te = c.ALLOW_DATA_ATTR !== !1, F = c.ALLOW_UNKNOWN_PROTOCOLS || !1, U = c.ALLOW_SELF_CLOSE_IN_ATTR !== !1, q = c.SAFE_FOR_TEMPLATES || !1, K = c.SAFE_FOR_XML !== !1, Z = c.WHOLE_DOCUMENT || !1, be = c.RETURN_DOM || !1, Te = c.RETURN_DOM_FRAGMENT || !1, Se = c.RETURN_TRUSTED_TYPE || !1, re = c.FORCE_BODY || !1, wt = c.SANITIZE_DOM !== !1, ze = c.SANITIZE_NAMED_PROPS || !1, Wt = c.KEEP_CONTENT !== !1, nt = c.IN_PLACE || !1, T = c.ALLOWED_URI_REGEXP || Xn, Ye = c.NAMESPACE || Me, At = c.MATHML_TEXT_INTEGRATION_POINTS || At, Nt = c.HTML_INTEGRATION_POINTS || Nt, _ = c.CUSTOM_ELEMENT_HANDLING || {}, c.CUSTOM_ELEMENT_HANDLING && Lr(c.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (_.tagNameCheck = c.CUSTOM_ELEMENT_HANDLING.tagNameCheck), c.CUSTOM_ELEMENT_HANDLING && Lr(c.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (_.attributeNameCheck = c.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), c.CUSTOM_ELEMENT_HANDLING && typeof c.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (_.allowCustomizedBuiltInElements = c.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), q && (te = !1), Te && (be = !0), Ve && (M = Q({}, un), X = [], Ve.html === !0 && (Q(M, cn), Q(X, dn)), Ve.svg === !0 && (Q(M, sr), Q(X, ir), Q(X, St)), Ve.svgFilters === !0 && (Q(M, ar), Q(X, ir), Q(X, St)), Ve.mathMl === !0 && (Q(M, or), Q(X, fn), Q(X, St))), c.ADD_TAGS && (typeof c.ADD_TAGS == "function" ? I.tagCheck = c.ADD_TAGS : (M === J && (M = ke(M)), Q(M, c.ADD_TAGS, ce))), c.ADD_ATTR && (typeof c.ADD_ATTR == "function" ? I.attributeCheck = c.ADD_ATTR : (X === me && (X = ke(X)), Q(X, c.ADD_ATTR, ce))), c.ADD_URI_SAFE_ATTR && Q(Kt, c.ADD_URI_SAFE_ATTR, ce), c.FORBID_CONTENTS && (Pe === qt && (Pe = ke(Pe)), Q(Pe, c.FORBID_CONTENTS, ce)), c.ADD_FORBID_CONTENTS && (Pe === qt && (Pe = ke(Pe)), Q(Pe, c.ADD_FORBID_CONTENTS, ce)), Wt && (M["#text"] = !0), Z && Q(M, ["html", "head", "body"]), M.table && (Q(M, ["tbody"]), delete L.tbody), c.TRUSTED_TYPES_POLICY) {
        if (typeof c.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw ut('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof c.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw ut('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        p = c.TRUSTED_TYPES_POLICY, N = p.createHTML("");
      } else
        p === void 0 && (p = go(A, s)), p !== null && typeof N == "string" && (N = p.createHTML(""));
      ye && ye(c), Xe = c;
    }
  }, Ir = Q({}, [...sr, ...ar, ...so]), Pr = Q({}, [...or, ...ao]), ds = function(c) {
    let C = h(c);
    (!C || !C.tagName) && (C = {
      namespaceURI: Ye,
      tagName: "template"
    });
    const B = Lt(c.tagName), se = Lt(C.tagName);
    return Yt[c.namespaceURI] ? c.namespaceURI === Et ? C.namespaceURI === Me ? B === "svg" : C.namespaceURI === vt ? B === "svg" && (se === "annotation-xml" || At[se]) : !!Ir[B] : c.namespaceURI === vt ? C.namespaceURI === Me ? B === "math" : C.namespaceURI === Et ? B === "math" && Nt[se] : !!Pr[B] : c.namespaceURI === Me ? C.namespaceURI === Et && !Nt[se] || C.namespaceURI === vt && !At[se] ? !1 : !Pr[B] && (is[B] || !Ir[B]) : !!(st === "application/xhtml+xml" && Yt[c.namespaceURI]) : !1;
  }, De = function(c) {
    lt(t.removed, {
      element: c
    });
    try {
      h(c).removeChild(c);
    } catch {
      x(c);
    }
  }, Ue = function(c, C) {
    try {
      lt(t.removed, {
        attribute: C.getAttributeNode(c),
        from: C
      });
    } catch {
      lt(t.removed, {
        attribute: null,
        from: C
      });
    }
    if (C.removeAttribute(c), c === "is")
      if (be || Te)
        try {
          De(C);
        } catch {
        }
      else
        try {
          C.setAttribute(c, "");
        } catch {
        }
  }, Dr = function(c) {
    let C = null, B = null;
    if (re)
      c = "<remove></remove>" + c;
    else {
      const le = nr(c, /^[\r\n\t ]+/);
      B = le && le[0];
    }
    st === "application/xhtml+xml" && Ye === Me && (c = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + c + "</body></html>");
    const se = p ? p.createHTML(c) : c;
    if (Ye === Me)
      try {
        C = new E().parseFromString(se, st);
      } catch {
      }
    if (!C || !C.documentElement) {
      C = S.createDocument(Ye, "template", null);
      try {
        C.documentElement.innerHTML = Vt ? N : se;
      } catch {
      }
    }
    const pe = C.body || C.documentElement;
    return c && B && pe.insertBefore(n.createTextNode(B), pe.childNodes[0] || null), Ye === Me ? z.call(C, Z ? "html" : "body")[0] : Z ? C.documentElement : pe;
  }, Fr = function(c) {
    return P.call(
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
  function $e(H, c, C) {
    Tt(H, (B) => {
      B.call(t, c, C, Xe);
    });
  }
  const Mr = function(c) {
    let C = null;
    if ($e(R.beforeSanitizeElements, c, null), Qt(c))
      return De(c), !0;
    const B = ce(c.nodeName);
    if ($e(R.uponSanitizeElement, c, {
      tagName: B,
      allowedTags: M
    }), K && c.hasChildNodes() && !kr(c.firstElementChild) && ge(/<[/\w!]/g, c.innerHTML) && ge(/<[/\w!]/g, c.textContent) || c.nodeType === ft.progressingInstruction || K && c.nodeType === ft.comment && ge(/<[/\w]/g, c.data))
      return De(c), !0;
    if (!(I.tagCheck instanceof Function && I.tagCheck(B)) && (!M[B] || L[B])) {
      if (!L[B] && Br(B) && (_.tagNameCheck instanceof RegExp && ge(_.tagNameCheck, B) || _.tagNameCheck instanceof Function && _.tagNameCheck(B)))
        return !1;
      if (Wt && !Pe[B]) {
        const se = h(c) || c.parentNode, pe = m(c) || c.childNodes;
        if (pe && se) {
          const le = pe.length;
          for (let we = le - 1; we >= 0; --we) {
            const Be = y(pe[we], !0);
            Be.__removalCount = (c.__removalCount || 0) + 1, se.insertBefore(Be, j(c));
          }
        }
      }
      return De(c), !0;
    }
    return c instanceof f && !ds(c) || (B === "noscript" || B === "noembed" || B === "noframes") && ge(/<\/no(script|embed|frames)/i, c.innerHTML) ? (De(c), !0) : (q && c.nodeType === ft.text && (C = c.textContent, Tt([O, w, W], (se) => {
      C = ct(C, se, " ");
    }), c.textContent !== C && (lt(t.removed, {
      element: c.cloneNode()
    }), c.textContent = C)), $e(R.afterSanitizeElements, c, null), !1);
  }, $r = function(c, C, B) {
    if (wt && (C === "id" || C === "name") && (B in n || B in us))
      return !1;
    if (!(te && !D[C] && ge(ee, C))) {
      if (!(Y && ge(ae, C))) {
        if (!(I.attributeCheck instanceof Function && I.attributeCheck(C, c))) {
          if (!X[C] || D[C]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(Br(c) && (_.tagNameCheck instanceof RegExp && ge(_.tagNameCheck, c) || _.tagNameCheck instanceof Function && _.tagNameCheck(c)) && (_.attributeNameCheck instanceof RegExp && ge(_.attributeNameCheck, C) || _.attributeNameCheck instanceof Function && _.attributeNameCheck(C, c)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              C === "is" && _.allowCustomizedBuiltInElements && (_.tagNameCheck instanceof RegExp && ge(_.tagNameCheck, B) || _.tagNameCheck instanceof Function && _.tagNameCheck(B)))
            ) return !1;
          } else if (!Kt[C]) {
            if (!ge(T, ct(B, ie, ""))) {
              if (!((C === "src" || C === "xlink:href" || C === "href") && c !== "script" && eo(B, "data:") === 0 && _r[c])) {
                if (!(F && !ge(oe, ct(B, ie, "")))) {
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
    $e(R.beforeSanitizeAttributes, c, null);
    const {
      attributes: C
    } = c;
    if (!C || Qt(c))
      return;
    const B = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: X,
      forceKeepAttr: void 0
    };
    let se = C.length;
    for (; se--; ) {
      const pe = C[se], {
        name: le,
        namespaceURI: we,
        value: Be
      } = pe, Qe = ce(le), Zt = Be;
      let fe = le === "value" ? Zt : to(Zt);
      if (B.attrName = Qe, B.attrValue = fe, B.keepAttr = !0, B.forceKeepAttr = void 0, $e(R.uponSanitizeAttribute, c, B), fe = B.attrValue, ze && (Qe === "id" || Qe === "name") && (Ue(le, c), fe = Gt + fe), K && ge(/((--!?|])>)|<\/(style|title|textarea)/i, fe)) {
        Ue(le, c);
        continue;
      }
      if (Qe === "attributename" && nr(fe, "href")) {
        Ue(le, c);
        continue;
      }
      if (B.forceKeepAttr)
        continue;
      if (!B.keepAttr) {
        Ue(le, c);
        continue;
      }
      if (!U && ge(/\/>/i, fe)) {
        Ue(le, c);
        continue;
      }
      q && Tt([O, w, W], (Hr) => {
        fe = ct(fe, Hr, " ");
      });
      const Ur = ce(c.nodeName);
      if (!$r(Ur, Qe, fe)) {
        Ue(le, c);
        continue;
      }
      if (p && typeof A == "object" && typeof A.getAttributeType == "function" && !we)
        switch (A.getAttributeType(Ur, Qe)) {
          case "TrustedHTML": {
            fe = p.createHTML(fe);
            break;
          }
          case "TrustedScriptURL": {
            fe = p.createScriptURL(fe);
            break;
          }
        }
      if (fe !== Zt)
        try {
          we ? c.setAttributeNS(we, le, fe) : c.setAttribute(le, fe), Qt(c) ? De(c) : ln(t.removed);
        } catch {
          Ue(le, c);
        }
    }
    $e(R.afterSanitizeAttributes, c, null);
  }, fs = function H(c) {
    let C = null;
    const B = Fr(c);
    for ($e(R.beforeSanitizeShadowDOM, c, null); C = B.nextNode(); )
      $e(R.uponSanitizeShadowNode, C, null), Mr(C), zr(C), C.content instanceof o && H(C.content);
    $e(R.afterSanitizeShadowDOM, c, null);
  };
  return t.sanitize = function(H) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, C = null, B = null, se = null, pe = null;
    if (Vt = !H, Vt && (H = "<!-->"), typeof H != "string" && !kr(H))
      if (typeof H.toString == "function") {
        if (H = H.toString(), typeof H != "string")
          throw ut("dirty is not a string, aborting");
      } else
        throw ut("toString is not a function");
    if (!t.isSupported)
      return H;
    if (de || Xt(c), t.removed = [], typeof H == "string" && (nt = !1), nt) {
      if (H.nodeName) {
        const Be = ce(H.nodeName);
        if (!M[Be] || L[Be])
          throw ut("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (H instanceof l)
      C = Dr("<!---->"), B = C.ownerDocument.importNode(H, !0), B.nodeType === ft.element && B.nodeName === "BODY" || B.nodeName === "HTML" ? C = B : C.appendChild(B);
    else {
      if (!be && !q && !Z && // eslint-disable-next-line unicorn/prefer-includes
      H.indexOf("<") === -1)
        return p && Se ? p.createHTML(H) : H;
      if (C = Dr(H), !C)
        return be ? null : Se ? N : "";
    }
    C && re && De(C.firstChild);
    const le = Fr(nt ? H : C);
    for (; se = le.nextNode(); )
      Mr(se), zr(se), se.content instanceof o && fs(se.content);
    if (nt)
      return H;
    if (be) {
      if (Te)
        for (pe = k.call(C.ownerDocument); C.firstChild; )
          pe.appendChild(C.firstChild);
      else
        pe = C;
      return (X.shadowroot || X.shadowrootmode) && (pe = $.call(r, pe, !0)), pe;
    }
    let we = Z ? C.outerHTML : C.innerHTML;
    return Z && M["!doctype"] && C.ownerDocument && C.ownerDocument.doctype && C.ownerDocument.doctype.name && ge(Qn, C.ownerDocument.doctype.name) && (we = "<!DOCTYPE " + C.ownerDocument.doctype.name + `>
` + we), q && Tt([O, w, W], (Be) => {
      we = ct(we, Be, " ");
    }), p && Se ? p.createHTML(we) : we;
  }, t.setConfig = function() {
    let H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Xt(H), de = !0;
  }, t.clearConfig = function() {
    Xe = null, de = !1;
  }, t.isValidAttribute = function(H, c, C) {
    Xe || Xt({});
    const B = ce(H), se = ce(c);
    return $r(B, se, C);
  }, t.addHook = function(H, c) {
    typeof c == "function" && lt(R[H], c);
  }, t.removeHook = function(H, c) {
    if (c !== void 0) {
      const C = Za(R[H], c);
      return C === -1 ? void 0 : Ja(R[H], C, 1)[0];
    }
    return ln(R[H]);
  }, t.removeHooks = function(H) {
    R[H] = [];
  }, t.removeAllHooks = function() {
    R = pn();
  }, t;
}
var yo = Zn();
const xo = ["jpg", "jpeg", "png", "gif", "svg", "webp"], bo = ["mp4", "webm", "ogg"], wo = ["txt", "json", "csv"], vo = ["pdf"], hn = ["file", "camera", "camera2", "photo", "avatar", "attachment"];
function Eo(e) {
  return e.template ? e.template : "tab";
}
function Ao(e) {
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    const s = r.group || "Info";
    t[s] || (t[s] = { label: s, type: "fields", fields: [] }), t[s]?.fields?.push({ name: n, ...r });
  }), t;
}
const No = (e) => Object.entries(e ?? {}).filter(([, t]) => t.type === "geolocation").map(([t]) => t);
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
function jo(e, t) {
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
function To(e, t = "create") {
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
const Ae = (e, t) => typeof e == "string" ? e.replace(
  /#(\w+)#/g,
  (n, r) => t[r] !== void 0 ? String(t[r]) : n
) : Array.isArray(e) ? e.map((n) => Ae(n, t)) : e && typeof e == "object" ? Object.fromEntries(
  Object.entries(e).map(([n, r]) => [
    Ae(n, t),
    Ae(r, t)
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
      const f = l[e], d = l[t];
      f != null && d != null && (i[String(f)] = String(d));
    }), i;
  }
  const o = {};
  return n.forEach((i) => {
    const l = i[s] ?? "Others", f = i[e], d = i[t];
    f == null || d == null || (o[l] || (o[l] = {}), o[l][String(f)] = String(d));
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
const Ht = (e) => e === !0 || e === "true", So = (e, t, n, r) => {
  e.forEach((s) => {
    const o = s?.name;
    if (!o) return;
    let i = r?.[o];
    i == null && (i = s.default), hn.includes(s.type ?? "") ? t[o] = Array.isArray(i) ? i : typeof i == "string" && i.length > 0 ? i.split(",").map((f) => f.trim()).filter(Boolean) : [] : s.multiple === !0 || s.type === "tags" ? t[o] = Array.isArray(i) ? i : typeof i == "string" ? i.split(",").map((f) => f.trim()).filter(Boolean) : [] : s.type === "checkbox" ? t[o] = String(i ?? "false") : s.type === "json" ? t[o] = typeof i == "object" && i !== null ? JSON.stringify(i, null, 2) : i ?? "" : s.type === "date" ? t[o] = typeof i == "string" && i.trim() ? i.slice(0, 10) : null : s.type === "time" ? typeof i == "string" ? i.includes("T") ? t[o] = i.slice(11, 16) : t[o] = i.slice(0, 5) : t[o] = "" : o === "blocked" || o === "blacklist" ? t[o] = String(i ?? "false") : t[o] = i ?? "";
    let l;
    if (hn.includes(s.type ?? "")) {
      const f = Re.array().of(
        Re.string()
      );
      l = s.required ? f.min(1, s.error_message || `${s.label} is required`) : f;
    } else if (s.multiple === !0 || s.type === "tags") {
      const f = Re.array().of(Re.string());
      l = s.required ? f.min(1, s.error_message || `${s.label} is required`) : f;
    } else s.type === "email" ? l = Re.string().email("Invalid email") : s.type === "number" ? l = Re.number().typeError("Must be a number") : s.type === "json" ? l = Re.string().test("json", "Invalid JSON", (f) => {
      if (!f) return !0;
      try {
        return JSON.parse(f), !0;
      } catch {
        return !1;
      }
    }) : s.type === "date" ? l = Re.string().nullable() : l = Re.string();
    s?.validate && Object.entries(s.validate).forEach(([f, d]) => {
      switch (f) {
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
              const g = u.replace(/-/g, "/"), [E, A, b] = g.split("/");
              if (!E || !A || !b) return !1;
              const y = /* @__PURE__ */ new Date(`${b}-${A}-${E}`);
              return !isNaN(y.getTime());
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
            const E = Number(g);
            if (isNaN(E)) return u;
            if (typeof u == "number" && !isNaN(u)) {
              const A = Number(u);
              return Number.isInteger(A) ? Number(E.toFixed(A)) : E;
            }
            return E;
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
}, Ft = (e) => !e || typeof e != "object" ? !1 : Object.values(e).every(
  (t) => typeof t == "object" && t !== null
);
function Ro(e) {
  if (!e || typeof e != "object") return !1;
  const t = e.src;
  return typeof e.target == "string" && typeof t == "object" && t !== null && (t.type === "api" || typeof t.queryid == "string" || typeof t.table == "string" && typeof t.columns < "u");
}
function _o(e) {
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
}, Co = (e) => {
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
function Oo(e) {
  return e ? Ft(e) ? Object.values(e).reduce((t, n) => (Object.assign(t, n), t), {}) : e : {};
}
const Ee = (e) => {
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
function Lo(e) {
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
function Po(e) {
  return xo.includes(e) ? "image" : bo.includes(e) ? "video" : vo.includes(e) ? "pdf" : wo.includes(e) ? "text" : "other";
}
const yn = {
  image: "fa fa-file-image",
  pdf: "fa fa-file-pdf",
  video: "fa fa-file-video",
  text: "fa fa-file-lines",
  other: "fa fa-file"
}, Do = "__form_persist__", ts = (e) => `${Do}:${e}`;
function Fo(e) {
  return yo.sanitize(e, {
    USE_PROFILES: { html: !0 }
  });
}
function ko(e) {
  try {
    return JSON.parse(localStorage.getItem(ts(e)) || "{}");
  } catch {
    return {};
  }
}
function Mo(e) {
  return e.persistent ? e.persistent === !0 ? e.name : typeof e.persistent == "string" ? e.persistent : null : null;
}
function $o(e, t, n) {
  const r = ko(e);
  localStorage.setItem(
    ts(e),
    JSON.stringify({
      ...r,
      [t]: n
    })
  );
}
function He(e, t, n) {
  const r = Mo(t);
  r && n && $o(n, r, e);
}
function lr(e) {
  return G.isAxiosError(e) ? e.response?.data?.message || e.message || "Something went wrong" : e instanceof Error ? e.message : typeof e == "string" ? e : "Something went wrong";
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
}, Bo = (e) => {
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
}, zo = (e) => {
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
}, Uo = (e) => e === "today" ? (/* @__PURE__ */ new Date()).toISOString().split("T")[0] : e, Ho = ({
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
  ) ? "zip" : t, f = typeof r?.native?.downloadFile == "function", d = async (g) => {
    const E = r?.native?.downloadFile;
    typeof E == "function" && n && (g.preventDefault(), await E(
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
  if (l === "pdf" && !f)
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
  const u = l === "pdf" ? {
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
  return u ? /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `w-full min-h-[420px] flex flex-col items-center justify-center gap-5 border border-gray-200 rounded-xl bg-gradient-to-b ${u.bg}`,
      children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `w-24 h-24 rounded-2xl text-white flex items-center justify-center shadow-lg ${u.iconBg}`,
            children: /* @__PURE__ */ a.jsx("span", { className: "text-4xl", children: "📄" })
          }
        ),
        /* @__PURE__ */ a.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ a.jsx("div", { className: "text-lg font-semibold text-gray-800", children: u.title }),
          /* @__PURE__ */ a.jsx("div", { className: "text-sm text-gray-500 w-full max-w-xs sm:max-w-md px-4 break-words", children: o })
        ] }),
        /* @__PURE__ */ a.jsx(
          "a",
          {
            href: e,
            download: !0,
            onClick: d,
            className: `${u.button} text-white px-5 py-2.5 rounded-lg`,
            children: u.buttonText
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
}), ur = async (e) => (await G.get(
  e.baseURL + e.dbopsGetHash,
  { headers: mt(e) }
)).data.refhash, dr = async (e, t) => (await G.post(
  e.baseURL + e.dbopsGetRefId,
  t,
  { headers: mt(e) }
)).data.refid, Go = {
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
    const f = await G.post(
      e.baseURL + e.dbopsFetch,
      l,
      { headers: mt(e) }
    );
    return f.data?.data ?? f.data;
  },
  async create(e, t, n) {
    const r = await ur(e), s = await dr(e, {
      operation: "create",
      source: t.source,
      fields: t.values,
      datahash: r,
      srcid: n
    });
    return (await G.post(
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
    return (await G.post(
      e.baseURL + e.dbopsUpdate,
      { refid: s, fields: t.values, datahash: r },
      { headers: mt(e) }
    )).data;
  }
};
async function Ze(e, t, n, r = void 0, s = void 0, o = {}) {
  try {
    let i = n;
    return i || (i = (await G({
      method: "POST",
      url: e.baseURL + e.registerQuery,
      data: { query: t, srcid: s },
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
async function Wo({
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
    let f;
    if ("type" in l && l.type === "api") {
      let E = e.name;
      typeof e.parameter == "string" && e.parameter && (E = e.parameter);
      const A = { [E]: t, refid: t };
      if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
        for (const [x, j] of Object.entries(e.parameter))
          A[x] = x === E ? t : s?.[j];
      const b = {
        method: l.method || "GET",
        url: n?.baseURL + l.endpoint,
        headers: {
          Authorization: `Bearer ${n?.accessToken}`
        },
        ...l.method === "GET" ? { params: A } : { data: A }
      }, { data: y } = await G(b);
      f = y;
    } else {
      let E;
      if (!l.queryid) {
        if (!l.table || !l.columns)
          throw new Error("SQL query requires field.table");
        const b = Ae(l.where ?? {}, { refid: t });
        E = {
          ...l,
          table: l.table,
          cols: l.columns,
          where: b
        };
      }
      const { data: A } = await Ze(
        n,
        E,
        l.queryid,
        t
      );
      f = A;
    }
    const d = Array.isArray(f?.results?.options) ? f?.results?.options : Array.isArray(f.data) ? f.data : Array.isArray(f.results) ? f.results : f, u = Array.isArray(d) ? d.map(Ee) : [], g = Oe(
      e.valueKey ?? "value",
      e.labelKey ?? "title",
      u,
      e.groupKey
    );
    r(i.target, g);
  }
}
async function qo(e, t) {
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
async function Ko(e, t) {
  const n = t.previewPath ?? "/api/files/preview", { data: r } = await G.get(
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
      return s.append("file", r), (await G.post(`${e?.baseURL}${n}`, s, {
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
function Vo(e) {
  const t = yn[e] ?? yn.other;
  return /* @__PURE__ */ a.jsx("i", { className: `${t} text-2xl text-gray-600` });
}
const Yo = ({ filePath: e, sqlOpsUrls: t }) => {
  const n = e.replace(/^[^&]*&/, ""), [r, s] = ue(null), [o, i] = ue(!1), [l, f] = ue(null), d = Io(n), u = Po(d);
  ve(() => {
    if (!t || u !== "image" && !o) return;
    let E = !0, A = null;
    return Ko(n, t).then(
      ({ previewUrl: b, blob: y }) => {
        E && (A = b, s(b), f(y));
      }
    ), () => {
      E = !1, A && URL.revokeObjectURL(A);
    };
  }, [u, o, n, t]);
  let g = n.split("/").pop();
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    u === "image" ? /* @__PURE__ */ a.jsx(
      "div",
      {
        role: "button",
        tabIndex: 0,
        onClick: () => i(!0),
        onKeyDown: (E) => E.key === "Enter" && i(!0),
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
        onKeyDown: (E) => E.key === "Enter" && i(!0),
        className: "inline-flex cursor-pointer items-center gap-1",
        title: "Click to preview",
        children: [
          Vo(u),
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
      r ? /* @__PURE__ */ a.jsx(Ho, { sqlOpsUrls: t, filePath: e, blob: l, fileUrl: r, category: u }) : /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col items-center justify-center py-12", children: [
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
  AttachmentPopup: l,
  setFieldOptions: f
}) {
  e?.name;
  const d = `
    text-sm text-gray-600 break-words capitalize
  `, u = `
    block text-sm font-semibold  transition-all duration-300 text-gray-700 capitalize
  `, [g, E] = ue(
    i ?? e.options ?? {}
  ), A = ne.useRef(!1);
  ne.useEffect(() => {
    i && E(i);
  }, [i]);
  const b = ne.useMemo(
    () => Oo(g),
    [g]
  );
  ne.useEffect(() => {
    let p = !0, N = e.valueKey ?? "value", S = e.labelKey ?? "title";
    return (async () => {
      let k = e?.options;
      if (k && (Array.isArray(k) && k.length > 0 || !Array.isArray(k) && Object.keys(k).length > 0)) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const w = Object.values(e.options);
          if (w.length && typeof w[0] == "string") {
            E(e.options);
            return;
          }
        }
        const R = (Array.isArray(e.options) ? e.options : [e.options]).map(Ee), O = Oe(
          N,
          S,
          R,
          e.groupKey
          // auto-uses `category` if present
        );
        E(O);
        return;
      }
      const z = e?.source ?? {};
      if (e.type === "dataMethod") {
        const $ = e.method, R = $ ? n[$] : void 0;
        if (R)
          try {
            const O = await Promise.resolve(R()), w = Array.isArray(O.data?.results?.options) ? O.data?.results?.options : Array.isArray(O?.data?.data) ? O.data.data : Array.isArray(O.data?.results) ? O.data?.results : Array.isArray(O?.data) ? O.data : O;
            if (typeof w == "object" && !Array.isArray(w)) {
              const ae = Object.values(w);
              if (ae.length && typeof ae[0] == "string") {
                E(w);
                return;
              }
            }
            const W = Array.isArray(w) ? w.map(Ee) : [], ee = Oe(N, S, W, e.groupKey);
            p && E(ee);
            return;
          } catch (O) {
            console.error("Method execution failed:", O), p && E({});
            return;
          }
        else {
          p && E({});
          return;
        }
      }
      if (z.type === "api" && z.endpoint)
        try {
          const $ = {
            method: z.method || "GET",
            url: r?.baseURL + z.endpoint,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            },
            ...z.method === "GET" ? { params: { refid: z.refid } } : { data: { refid: z.refid } }
          }, R = await G($), O = Array.isArray(R.data?.results?.options) ? R.data?.results?.options : Array.isArray(R?.data?.data) ? R.data.data : Array.isArray(R.data?.results) ? R.data?.results : Array.isArray(R?.data) ? R.data : R;
          if (typeof O == "object" && !Array.isArray(O)) {
            const ee = Object.values(O);
            if (ee.length && typeof ee[0] == "string") {
              E(O);
              return;
            }
          }
          const w = Array.isArray(O) ? O.map(Ee) : [], W = Oe(N, S, w, e.groupKey);
          p && E(W);
          return;
        } catch ($) {
          console.error("API execution failed:", $), p && E({});
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
              where: e.where ? s ? Ae(e.where, { refid: s }) : e.where : void 0
            };
          }
          const R = await Ze(r, $, e?.queryid, void 0, o), O = Array.isArray(R?.data?.data) ? R.data.data : Array.isArray(R?.data) ? R.data : R;
          if (typeof O == "object" && !Array.isArray(O)) {
            const ee = Object.values(O);
            if (ee.length && typeof ee[0] == "string") {
              E(O);
              return;
            }
          }
          const w = Array.isArray(O) ? O.map(Ee) : [], W = Oe(N, S, w, e.groupKey);
          p && E(W);
        } catch ($) {
          console.error("API fetch failed:", $);
        }
      }
    })(), () => {
      p = !1;
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
    A.current || !f || !y || (A.current = !0, Wo({
      field: e,
      value: y,
      sqlOpsUrls: r,
      setFieldOptions: f,
      values: t ?? {}
    }));
  }, [y, r, f]);
  let x;
  typeof y == "string" ? e.type === "date" ? x = y.split("T")[0] : e.type === "time" ? x = y.includes("T") ? y.slice(11, 16) : y.slice(0, 5) : x = gn(y, b) : x = gn(y, b);
  const j = x == null ? "" : typeof x == "string" || typeof x == "number" ? x : JSON.stringify(x), m = Lo(y), h = e.type === "richtextarea" && typeof j == "string" ? Fo(j) : null;
  return /* @__PURE__ */ a.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ a.jsx("label", { className: u, children: e?.label }),
    /* @__PURE__ */ a.jsx("div", { className: "relative", children: m ? m.type === "drawn" ? /* @__PURE__ */ a.jsx("svg", { viewBox: "0 0 300 150", className: "h-24 w-full border bg-white rounded", children: m.paths.map((p, N) => /* @__PURE__ */ a.jsx(
      "path",
      {
        d: p.d,
        stroke: p.color || "#000",
        strokeWidth: p.width || 2,
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      N
    )) }) : m.type === "text" ? /* @__PURE__ */ a.jsx("svg", { viewBox: "0 0 300 150", className: "h-24 w-full border bg-white rounded", children: /* @__PURE__ */ a.jsx(
      "text",
      {
        x: "10",
        y: "100",
        fontSize: m.data.style?.fontSize || 32,
        fontFamily: m.data.style?.fontFamily || "cursive",
        fill: m.data.style?.textColor || "#000",
        children: m.data.text
      }
    ) }) : m.type === "html" ? /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "border bg-white rounded p-2 text-sm",
        dangerouslySetInnerHTML: { __html: m.html }
      }
    ) : /* @__PURE__ */ a.jsx(
      "img",
      {
        src: m.src,
        alt: "signature",
        className: "h-24 object-contain border bg-white rounded"
      }
    ) : (e.type === "file" || e.type === "camera" || e.type === "camera2" || e.type === "attachement" || e.type === "photo" || e.type === "avatar") && x ? /* @__PURE__ */ a.jsx("div", { className: "flex flex-wrap gap-2", children: l && String(x).split(",").map((p) => p.trim()).filter(Boolean).map((p) => /* @__PURE__ */ a.jsx(
      l,
      {
        url: p
      },
      p
    )) }) : e.type === "richtextarea" ? /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "tiptap border border-gray-200 min-h-[400px] max-h-[220px] overflow-auto bg-white rounded p-2 text-sm",
        dangerouslySetInnerHTML: { __html: h ?? "" }
      }
    ) : /* @__PURE__ */ a.jsx("p", { className: d, children: j }) })
  ] });
}
function as({ filePath: e, field_name: t, sqlOpsUrls: n }) {
  const [r, s] = ue(null), o = e.replace(/^[^&]*&/, "");
  return ve(() => {
    if (!open || !n) return;
    let i = !0, l = null;
    return qo(o, n).then((f) => {
      i && (l = f, s(f));
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
  methods: f,
  AttachmentPopup: d
}) {
  const u = Rt(
    () => e?.fields?.find((A) => A.type === "avatar"),
    [e?.fields]
  ), g = u?.name, E = g && typeof t?.[g] == "string" ? t[g].trim() : "";
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white border border-gray-100 p-4 min-h-3/10 overflow-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    u && /* @__PURE__ */ a.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ a.jsx("div", { className: "relative w-42 h-42 p-2 rounded-sm overflow-hidden bg-gray-100 flex items-center justify-center", children: E ? /* @__PURE__ */ a.jsx(
      as,
      {
        field_name: u.name,
        filePath: E,
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
    /* @__PURE__ */ a.jsx("div", { className: `min-h-0 max-h-40 overflow-y-auto custom-scrollbar ${u ? "lg:col-span-10" : "lg:col-span-12"}`, children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: e.fields?.map((A, b) => n.includes(A.name) || A.type === "avatar" ? null : /* @__PURE__ */ a.jsx("div", { className: `hover:bg-gray-100 transition-colors duration-200 col-span-12 sm:col-span-6 ${tt[rt(Number(A.width))] || "lg:col-span-4"}`, children: /* @__PURE__ */ a.jsx(
      bt,
      {
        field: A,
        data: t ?? {},
        sqlOpsUrls: r,
        methods: f,
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
function jr({ tabObj: e, methods: t, tabName: n, sqlOpsUrls: r, refid: s, module_refid: o, setFieldOptions: i, fieldOptions: l, AttachmentPopup: f }) {
  const [d, u] = ne.useState(null);
  return ne.useEffect(() => {
    let g = !1;
    return (async () => {
      const A = e?.config;
      if (!A?.type) {
        g || u(null);
        return;
      }
      if (A.type === "method") {
        const b = A.method, y = b ? t[b] : void 0;
        if (y)
          try {
            const x = await Promise.resolve(y());
            g || u(x || null);
          } catch (x) {
            console.error("Method execution failed:", x), g || u(null);
          }
        else
          g || u(null);
      }
      if (A.type === "api")
        try {
          const b = await G({
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
          g || u(b.data || null);
        } catch (b) {
          console.error("API fetch failed:", b), g || u(null);
        }
      if (A.type === "sql" && s && s != "0" || A?.dbopsid) {
        if (!r) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let b = !1, y;
          A?.dbopsid && (b = !0, y = A?.dbopsid);
          const x = await G({
            method: "GET",
            url: r.baseURL + r.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            }
          });
          if (!b) {
            let h = {
              ...A
            };
            A.where && (h = {
              ...A,
              where: Ae(A.where, {
                refid: s
              })
            }), y = (await G({
              method: "POST",
              url: r.baseURL + r.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: h,
                fields: Dt(A.fields, r.operation),
                forcefill: A.forcefill,
                datahash: x.data.refhash,
                srcid: o
              },
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              }
            }))?.data.refid;
          }
          const j = await G({
            method: "POST",
            url: r.baseURL + r.dbopsFetch,
            data: {
              refid: y,
              datahash: x.data.refhash
            },
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            }
          }), m = es(j);
          g || u(m);
        } catch (b) {
          console.error("API fetch failed:", b);
        }
      }
    })(), () => {
      g = !0;
    };
  }, [
    e?.config?.type || "",
    e?.config?.method || "",
    e?.config?.url || "",
    JSON.stringify(e?.config?.params || {}),
    JSON.stringify(e?.config?.body || {}),
    JSON.stringify(e?.config?.headers || {})
  ]), /* @__PURE__ */ a.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: d ? Object.keys(d).map((g, E) => {
    let A = { name: g, label: g };
    return /* @__PURE__ */ a.jsx(
      "div",
      {
        className: `col-span-12 sm:col-span-6 ${tt[rt(e.width)] || "lg:col-span-2"}`,
        children: /* @__PURE__ */ a.jsx(
          bt,
          {
            field: A,
            data: d ?? {},
            methods: t,
            refid: s,
            sqlOpsUrls: r,
            setFieldOptions: i,
            ...l[A.name] ? { optionsOverride: l[A.name] } : {},
            AttachmentPopup: f
          },
          g
        )
      },
      `field-${E}`
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
  setFieldLoading: f
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
  ].includes(e?.type || "text"), [u, g] = ue(!1), [E, A] = ue(d), [b, y] = ue(
    i ?? e.options ?? {}
  ), [x, j] = ue(""), [m, h] = ue(0), p = We(null), N = We(null), [S, P] = ue(!1), k = We(x), z = e.disabled === !0;
  ve(() => {
    k.current = x;
  }, [x]), ve(() => {
    if (e.type !== "select" || e.multiple || e["no-option"] !== "false" || t.values[$] || !b) return;
    let D;
    if (Array.isArray(b))
      D = b[0]?.value;
    else if (!Ft(b))
      D = Object.keys(b)[0];
    else {
      const I = Object.values(b)[0];
      D = I ? Object.keys(I)[0] : void 0;
    }
    D != null && t.setFieldValue($, String(D), !1);
  }, [b]), ve(() => {
    i && y(i);
  }, [i]), ve(() => {
    if (!S) return;
    const L = (D) => {
      const I = D.target;
      N.current?.contains(I) || p.current?.contains(I) || (P(!1), j(""));
    };
    return document.addEventListener("mousedown", L), () => {
      document.removeEventListener("mousedown", L);
    };
  }, [S]);
  const $ = e.name;
  ve(() => {
    let L = !0;
    return (async () => {
      try {
        let I = e.valueKey ?? "value", Y = e.labelKey ?? "title", te = e?.options;
        if (te && (Array.isArray(te) && te.length > 0 || !Array.isArray(te) && Object.keys(te).length > 0)) {
          if (typeof e.options == "object" && !Array.isArray(e.options)) {
            const Z = Object.values(e.options);
            if (Z.length && typeof Z[0] == "string") {
              y(e.options);
              return;
            }
          }
          const q = (Array.isArray(e.options) ? e.options : [e.options]).map(Ee), K = Oe(
            I,
            Y,
            q,
            e.groupKey
            // auto-uses `category` if present
          );
          y(K);
          return;
        }
        const F = e?.source ?? {};
        if (e.type === "dataMethod") {
          const U = e.method, q = U ? n[U] : void 0;
          if (q)
            try {
              const K = await q(), Z = Array.isArray(K.data?.results?.options) ? K.data?.results?.options : Array.isArray(K?.data?.data) ? K.data.data : Array.isArray(K.data?.results) ? K.data?.results : Array.isArray(K?.data) ? K.data : K;
              if (typeof Z == "object" && !Array.isArray(Z)) {
                const be = Object.values(Z);
                if (be.length && typeof be[0] == "string") {
                  y(Z);
                  return;
                }
              }
              const de = Array.isArray(Z) ? Z.map(Ee) : [], re = Oe(I, Y, de, e.groupKey);
              L && y(re);
              return;
            } catch (K) {
              console.error("Method execution failed:", K), L && y({});
              return;
            }
          else {
            L && y({});
            return;
          }
        }
        if (F.type === "api" && F.endpoint)
          try {
            const U = {
              method: F.method || "GET",
              url: r?.baseURL + F.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...F.method === "GET" ? { params: { refid: F.refid } } : { data: { refid: F.refid } }
            }, q = await G(U), K = Array.isArray(q.data?.results?.options) ? q.data?.results?.options : Array.isArray(q?.data?.data) ? q.data.data : Array.isArray(q.data?.results) ? q.data?.results : Array.isArray(q?.data) ? q.data : q;
            if (typeof K == "object" && !Array.isArray(K)) {
              const re = Object.values(K);
              if (re.length && typeof re[0] == "string") {
                y(K);
                return;
              }
            }
            const Z = Array.isArray(K) ? K.map(Ee) : [], de = Oe(I, Y, Z, e.groupKey);
            L && y(de);
            return;
          } catch (U) {
            console.error("API execution failed:", U), L && y({});
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
                where: e.where ? s ? Ae(e.where, { refid: s }) : e.where : void 0
              };
            }
            const q = await Ze(r, U, e?.queryid, void 0, o), K = Array.isArray(q?.data?.data) ? q.data.data : Array.isArray(q?.data) ? q.data : q;
            if (typeof K == "object" && !Array.isArray(K)) {
              const re = Object.values(K);
              if (re.length && typeof re[0] == "string") {
                y(K);
                return;
              }
            }
            const Z = Array.isArray(K) ? K.map(Ee) : [], de = Oe(I, Y, Z, e.groupKey);
            L && y(de);
          } catch (U) {
            console.error("API fetch failed:", U);
          }
        }
      } catch (I) {
        console.log(I);
      } finally {
        L && d && A(!1);
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
  const R = `
  w-full px-4 py-2 rounded-lg border transition-all duration-300
  backdrop-blur-sm text-gray-800 placeholder-gray-400
  focus:outline-none focus:ring-0

  ${z ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:shadow-md"}
`, O = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, w = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, W = Rt(
    () => Co(b),
    [b]
  ), ee = Rt(() => {
    if (!e.type || !["suggest", "autosuggest", "autocomplete"].includes(e.type) || !x.trim()) return null;
    const L = x.trim().toLowerCase();
    return W.find(([, D]) => D.trim().toLowerCase() === L);
  }, [e.type, x, W]), ae = W.length, oe = !!(e.search && (e.queryid || e.table)), ie = Rt(() => oe || !x ? W : W.filter(
    ([, L]) => L.toLowerCase().includes(x.toLowerCase())
  ), [oe, x, W]), Ie = (L, D) => {
    if (S)
      if (L.key === "ArrowDown")
        L.preventDefault(), h(
          (I) => I + 1 < ie.length ? I + 1 : 0
        );
      else if (L.key === "ArrowUp")
        L.preventDefault(), h(
          (I) => I - 1 >= 0 ? I - 1 : ie.length - 1
        );
      else if (L.key === "Enter") {
        L.preventDefault();
        const [I] = ie[m] || [];
        if (I) {
          let Y = D ? I : [...t.values[e.name], I];
          t.setFieldValue(e.name, Y), He(Y, e, o);
        }
        P(!1);
      } else L.key === "Escape" && (j(""), P(!1));
  };
  ve(() => {
    p.current?.querySelector(
      `[data-index="${m}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [m]), ve(() => {
    m >= ie.length && h(0);
  }, [ie, m]), ve(() => {
    const L = e.autocomplete, D = e.ajaxchain;
    if (!L && !D) return;
    const I = t.values[e.name];
    if (!I) return;
    const Y = Array.isArray(D) ? D : D ? [D] : [];
    (async () => {
      try {
        if (Ro(L)) {
          const F = L.src;
          if (!F || !r) return;
          let U;
          if ("type" in F && F.type === "api") {
            let K = e.name;
            typeof e.parameter == "string" && e.parameter && (K = e.parameter);
            const Z = { [K]: I, refid: I };
            if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
              for (const [be, Te] of Object.entries(e.parameter))
                Z[be] = be === K ? I : t.values?.[Te];
            const de = {
              method: F.method || "GET",
              url: r?.baseURL + F.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...F.method === "GET" ? { params: Z } : { data: Z }
            }, { data: re } = await G(de);
            U = Array.isArray(re?.data?.results?.options) ? re?.data?.results?.options[0] : Array.isArray(re?.data?.data) ? re.data.data[0] : Array.isArray(re?.data?.results) ? re.data.results[0] : Array.isArray(re?.data) ? re.data[0] : re?.data;
          } else {
            let K;
            if (!F.queryid) {
              if (!F.table || !F.columns)
                throw new Error("SQL query requires field.table");
              const de = Ae(F?.where ?? {}, {
                refid: I
              });
              K = {
                ...F,
                table: F.table,
                cols: F.columns,
                where: de
              };
            }
            const { data: Z } = await Ze(r, K, F?.queryid, I, o);
            U = Array.isArray(Z?.data?.data) ? Z.data.data[0] : Array.isArray(Z?.data) ? Z.data[0] : Z?.data;
          }
          let q = Ee(U);
          q && L.target.split(",").map((K) => K.trim()).forEach((K) => {
            q[K] !== void 0 && t.setFieldValue(K, q[K]);
          });
        }
        for (const F of Y) {
          f?.(F.target, !0);
          const U = F.src;
          if (!F || typeof F != "object" || !U || typeof U != "object" || !r) continue;
          let q;
          if ("type" in U && U.type === "api") {
            let Te = e.name;
            typeof e.parameter == "string" && e.parameter && (Te = e.parameter);
            let Se = { [Te]: I, refid: I };
            if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
              for (const [ze, Gt] of Object.entries(e.parameter))
                Se[ze] = ze === Te ? I : t.values?.[Gt];
            const wt = {
              method: U.method || "GET",
              url: r?.baseURL + U.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...U.method === "GET" ? { params: Se } : { data: Se }
            };
            try {
              const { data: ze } = await G(wt);
              q = ze;
            } catch {
            } finally {
              f?.(F.target, !1);
            }
          } else {
            let Te;
            if (!U.queryid) {
              if (!U.table || !U.columns)
                throw new Error("SQL query requires field.table");
              const Se = Ae(U?.where ?? {}, {
                refid: I
              });
              Te = {
                ...U,
                table: U.table,
                cols: U.columns,
                where: Se
              };
            }
            try {
              const { data: Se } = await Ze(r, Te, U?.queryid, I, o);
              q = Se;
            } catch {
            } finally {
              f?.(F.target, !1);
            }
          }
          let K = e.valueKey ?? "value", Z = e.labelKey ?? "title";
          const de = Array.isArray(q?.results?.options) ? q?.results?.options : Array.isArray(q.data) ? q.data : Array.isArray(q.results) ? q.results : q, re = Array.isArray(de) ? de.map(Ee) : [], be = Oe(
            K,
            Z,
            re,
            e.groupKey
          );
          t.setFieldValue(F.target, t.initialValues[F.target]), l?.(F.target, be);
        }
      } catch (F) {
        console.error("Autocomplete / AjaxChain fetch failed", F);
      }
    })();
  }, [t.values[e.name]]), ve(() => {
    if (!oe || !x.trim() || !r) return;
    const L = _o(e.columns ?? ""), D = new AbortController(), I = setTimeout(async () => {
      try {
        let Y;
        if (!e.queryid) {
          if (!e.table || !e.cols)
            throw new Error("SQL query requires field.table");
          const re = s ? Ae(e.where ?? {}, {
            refid: s
          }) : e.where;
          Y = {
            ...e,
            table: e.table,
            cols: e.columns || e.cols,
            where: re
          };
        }
        let te = {};
        Array.isArray(L) && L.forEach((re) => {
          te[re] = [x, "LIKE"];
        });
        let F = e.valueKey ?? "value", U = e.labelKey ?? "title";
        const { data: q } = await Ze(r, Y, e?.queryid, void 0, o, te), K = Array.isArray(q?.data?.data) ? q.data.data : Array.isArray(q?.data) ? q.data : q, Z = Array.isArray(K) ? K.map(Ee) : [], de = Oe(
          F,
          U,
          Z,
          e.groupKey
        );
        y(de);
      } catch (Y) {
        if (G.isCancel(Y)) return;
        console.error("Search fetch failed", Y);
      }
    }, 500);
    return () => {
      clearTimeout(I), D.abort();
    };
  }, [oe, x, s]);
  const T = async (L) => {
    if (L.length === 0) {
      console.error("No file");
      return;
    }
    try {
      A(!0);
      const D = await ns(r, L), I = rs({
        uploads: D,
        currentValue: t.values[$],
        multiple: e.multiple ?? !1
      });
      t.setFieldValue(
        $,
        I
      ), He(I, e, o);
    } catch (D) {
      console.error("File upload failed", D), t.setFieldError($, "File upload failed");
    } finally {
      A(!1);
    }
  }, M = async (L) => {
    const D = Array.isArray(t.values[$]) ? t.values[$] : [], I = L.split("&")[0];
    if (!I) return;
    const Y = D.filter((te) => te.split("&")[0] !== I);
    t.setFieldValue($, Y);
    try {
      await ss(r, I), He(Y, e, o);
    } catch (te) {
      console.log(te), t.setFieldValue($, D), window.alert("Failed to delete file due to a technical issue. Please try again.");
    }
  }, J = async (L, D, I) => {
    const Y = D[L];
    if (!Y) return;
    const te = n?.[Y];
    if (typeof te != "function") {
      console.error(`Method "${String(Y)}" not found`);
      return;
    }
    try {
      await Promise.resolve(te(I));
    } catch (F) {
      console.error(`Method "${String(Y)}" failed`, F);
    }
  }, X = (L) => {
    if (z) return;
    const D = L.target.value;
    j(D), h(0), D.trim() ? P(!0) : (P(!1), t.setFieldValue($, ""));
  }, me = (L) => {
    t.setFieldValue($, L), He(L, e, o), j(""), P(!1), J("onChange", e, `${$}-${L}`);
  };
  function _(L) {
    const D = L.currentTarget.files;
    D && T(D);
  }
  return {
    setHighlightedIndex: h,
    executeFieldMethod: J,
    handleFileUpload: T,
    handleKeyDown: Ie,
    setSearch: j,
    setOpen: P,
    setIsFocused: g,
    handleInputChange: X,
    handleSelect: me,
    handlePersist: He,
    handleFileChange: _,
    setLoading: A,
    removeFile: M,
    optionCount: ae,
    baseInputClasses: R,
    focusClasses: O,
    labelClasses: w,
    search: x,
    highlightedIndex: m,
    options: b,
    isDisabled: z,
    key: $,
    filteredOptions: ie,
    open: S,
    listRef: p,
    isFocused: u,
    exactMatch: ee,
    triggerRef: N,
    loading: E
  };
}
function Tr({
  anchorRef: e,
  open: t,
  children: n,
  offset: r = 4,
  maxHeight: s = 240
}) {
  const [o, i] = ue({}), l = We(null);
  return ms(() => {
    if (!t || !e.current || !l.current) return;
    const f = e.current, d = () => {
      const g = f.getBoundingClientRect(), E = window.innerHeight, A = l.current?.offsetHeight || s, b = E - g.bottom, y = g.top, j = b < A && y > b ? g.top - A - r : g.bottom + r;
      i({
        position: "fixed",
        top: j,
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
  }, [t, e, r, s]), t ? hs(
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
  setSearch: f,
  formik: d,
  executeFieldMethod: u,
  handlePersist: g,
  module_refid: E,
  options: A,
  triggerRef: b,
  open: y,
  setOpen: x,
  loading: j
}) {
  const m = e.name;
  return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ a.jsx(
      "input",
      {
        type: "hidden",
        name: m,
        value: JSON.stringify(d.values[m] ?? "")
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
        ref: b,
        tabIndex: 0,
        onClick: () => {
          x((h) => !h);
        },
        onKeyDown: (h) => {
          t || n(h, !0);
        },
        children: [
          /* @__PURE__ */ a.jsx("span", { className: "text-sm text-gray-700", children: d.values[m] ? Nr(A, d.values[m]) ?? "Select option" : `Select ${e.label}` }),
          j ? /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) : /* @__PURE__ */ a.jsx(
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
    /* @__PURE__ */ a.jsx(Tr, { anchorRef: b, open: y, children: /* @__PURE__ */ a.jsxs(
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
              onChange: (h) => {
                f(h.target.value);
              },
              onKeyDown: (h) => n(h, !0),
              placeholder: "Search...",
              className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                      bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                      focus:outline-none focus:ring-0`
            }
          ) }),
          i.length > 0 && /* @__PURE__ */ a.jsx(
            "div",
            {
              onClick: (h) => {
                h.preventDefault(), h.stopPropagation(), d.setFieldValue(m, ""), x(!1), g("", e, E), f("");
              },
              className: "px-2 py-1 hover:bg-gray-50 text-gray-500 rounded cursor-pointer text-sm hover:bg-gray-50",
              children: "Clear selection"
            }
          ),
          i.length > 0 ? i.map(([h, p], N) => /* @__PURE__ */ a.jsx(
            "div",
            {
              id: `${m}-${h}`,
              "data-index": N,
              onClick: (S) => {
                S.preventDefault(), S.stopPropagation(), d.setFieldValue(m, h), g(h, e, E), x(!1), f(""), u("onChange", e, `${m}-${h}`);
              },
              className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                            ${d.values[m] === h ? "bg-indigo-50 text-indigo-600 font-medium" : l === N ? "bg-gray-100" : "hover:bg-gray-50"}`,
              children: p
            },
            h
          )) : /* @__PURE__ */ a.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
        ]
      }
    ) }),
    d.touched[m] && d.errors[m] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(d.errors[m]) })
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
  highlightedIndex: f,
  setSearch: d,
  formik: u,
  executeFieldMethod: g,
  handlePersist: E,
  module_refid: A,
  options: b,
  triggerRef: y,
  open: x,
  setOpen: j,
  loading: m
}) {
  const h = e.name;
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
        ref: y,
        onClick: () => {
          j((p) => !p);
        },
        onKeyDown: (p) => {
          t || n(p, !1);
        },
        onBlur: () => {
          e.multiple || setTimeout(() => {
            j(!1), d("");
          }, 150);
        },
        children: [
          /* @__PURE__ */ a.jsx("span", { className: "text-sm text-gray-700", children: r?.length > 0 ? r.map((p) => Nr(b, p) ?? p).join(", ") : `Select ${e.label}` }),
          m ? /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) : /* @__PURE__ */ a.jsx(
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
    /* @__PURE__ */ a.jsx(Tr, { anchorRef: y, open: x && !t, children: /* @__PURE__ */ a.jsxs("div", { ref: o, className: " w-full border border-gray-200 rounded-lg bg-white shadow-md  max-h-60 overflow-y-auto p-2", children: [
      e.search && /* @__PURE__ */ a.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ a.jsx(
        "input",
        {
          type: "text",
          value: i,
          onChange: (p) => {
            t || d(p.target.value);
          },
          placeholder: "Search...",
          className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
        }
      ) }),
      l.length > 0 ? l.map(([p, N], S) => /* @__PURE__ */ a.jsxs(
        "label",
        {
          htmlFor: `${h}-${p}`,
          className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${r?.includes(p) ? "bg-indigo-50 text-indigo-600 font-medium" : f === S ? "bg-gray-100" : "hover:bg-gray-50"}`,
          children: [
            /* @__PURE__ */ a.jsx(
              "input",
              {
                id: `${h}-${p}`,
                type: "checkbox",
                checked: r?.includes(p),
                onChange: (P) => {
                  const k = P.target.checked ? [...r, p] : r?.filter((z) => z !== p);
                  u.setFieldValue(h, k), E(k, e, A), g("onChange", e, `${h}-${p}`);
                },
                onBlur: u.handleBlur,
                disabled: t,
                className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              }
            ),
            N
          ]
        },
        p
      )) : /* @__PURE__ */ a.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
    ] }) }),
    u.touched[h] && u.errors[h] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(u.errors[h]) })
  ] });
}
function Jo({
  formik: e,
  field: t,
  sqlOpsUrls: n,
  module_refid: r
}) {
  let s = t?.name;
  const o = We(null), i = t.max !== void 0 ? Number(t.max) : 1 / 0, [l, f] = ue(!1), d = Array.isArray(e.values[s]) ? e.values[s] : e.values[s] ? [e.values[s]] : [], u = async (b) => {
    const y = b.currentTarget.files;
    if (!y?.length) return;
    const x = Array.from(b.currentTarget.files || []);
    if (d.length + x.length > i) {
      alert(`You can upload maximum ${i} file(s)`), b.currentTarget.value = "";
      return;
    }
    try {
      f(!0);
      const m = await ns(n, y), h = rs({
        uploads: m,
        currentValue: e.values[s],
        multiple: t.multiple ?? !1
      });
      e.setFieldValue(
        s,
        h
      ), He(h, t, r), b.target.value = "";
    } catch (m) {
      console.error("File upload failed", m), e.setFieldError(s, "File upload failed");
    } finally {
      f(!1);
    }
  }, g = async (b) => {
    const y = Array.isArray(e.values[s]) ? e.values[s] : [], x = b.split("&")[0];
    if (!x) return;
    const j = y.filter((m) => m.split("&")[0] !== x);
    e.setFieldValue(s, j);
    try {
      if (!b.split("&")[0]) return;
      await ss(n, x), He(j, t, r);
    } catch {
      e.setFieldValue(s, y), window.alert("Failed to delete file due to a technical issue. Please try again.");
    }
  }, E = Bo(t), A = t.multiple === !0;
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
        ...E,
        onChange: u
      }
    ),
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "flex flex-wrap gap-2",
        children: [
          d.length > 0 ? d.map((b) => /* @__PURE__ */ a.jsxs("div", { className: "relative group", children: [
            /* @__PURE__ */ a.jsx(
              as,
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
                  g(b);
                },
                className: "absolute -top-2 -right-2 cursor-pointer bg-white text-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xl cursor-pointer transition",
                children: "×"
              }
            )
          ] }, b)) : null,
          /* @__PURE__ */ a.jsx(
            "div",
            {
              onClick: () => {
                l || o.current?.click();
              },
              className: "w-24 h-24 flex items-center justify-center border border-dashed rounded-md bg-gray-50 hover:bg-gray-100 cursor-pointer",
              children: l ? /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-spinner fa-spin text-2xl text-gray-900" }) : /* @__PURE__ */ a.jsx("i", { className: `fa-solid ${zo(t)} text-2xl text-gray-400` })
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
  fieldLoading: f,
  setFieldLoading: d
}) {
  const {
    executeFieldMethod: u,
    handleFileUpload: g,
    handleKeyDown: E,
    setSearch: A,
    setOpen: b,
    setIsFocused: y,
    handleInputChange: x,
    handleSelect: j,
    handlePersist: m,
    setLoading: h,
    removeFile: p,
    optionCount: N,
    baseInputClasses: S,
    focusClasses: P,
    labelClasses: k,
    search: z,
    highlightedIndex: $,
    options: R,
    isDisabled: O,
    key: w,
    filteredOptions: W,
    open: ee,
    listRef: ae,
    triggerRef: oe,
    isFocused: ie,
    exactMatch: Ie,
    loading: T
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
  }), M = (J) => J.icon ? /* @__PURE__ */ a.jsx("i", { className: J.icon }) : null;
  switch (e.type) {
    case "suggest":
    case "autosuggest":
    case "autocomplete": {
      const _ = t.values[w] ?? "", L = z !== "" ? z : Nr(R, _) ?? String(_ ?? "");
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: k, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { ref: oe, children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              className: `${S} ${P}`,
              value: L,
              placeholder: e.placeholder || "Type to search...",
              onChange: x,
              onBlur: () => {
                setTimeout(() => b(!1), 150);
              },
              onKeyDown: (D) => {
                if (D.key === "Enter") {
                  if (D.preventDefault(), Ie) {
                    const [I] = Ie;
                    t.setFieldValue(w, I), m(I, e, o);
                  } else z.trim() && (t.setFieldValue(w, z.trim()), m(z.trim(), e, o));
                  b(!1), A("");
                  return;
                }
                E(D, !0);
              },
              disabled: O
            }
          ),
          (T || f) && /* @__PURE__ */ a.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) })
        ] }),
        /* @__PURE__ */ a.jsx(Tr, { anchorRef: oe, open: ee && !O, children: /* @__PURE__ */ a.jsx(
          "div",
          {
            ref: ae,
            className: " w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1",
            children: W.length > 0 && Ie ? W.map(([D, I], Y) => /* @__PURE__ */ a.jsx(
              "div",
              {
                id: `${w}-${D}`,
                "data-index": Y,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${$ === Y ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => j(D),
                children: I
              },
              D
            )) : /* @__PURE__ */ a.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `Press "ENTER" to ADD "${L}" ` })
          }
        ) }),
        t.touched[w] && t.errors[w] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[w]) })
      ] });
    }
    case "dataSelector":
    case "dataSelectorFromTable":
    case "dataSelectorFromUniques":
    case "dataMethod": {
      if (e.multiple === !0) {
        const _ = t.values[w];
        return /* @__PURE__ */ a.jsx(
          bn,
          {
            field: e,
            isDisabled: O,
            handleKeyDown: E,
            valueArray: _,
            labelClasses: k,
            listRef: ae,
            search: z,
            filteredOptions: W,
            highlightedIndex: $,
            setSearch: A,
            formik: t,
            executeFieldMethod: u,
            handlePersist: m,
            module_refid: o,
            options: R,
            triggerRef: oe,
            open: ee,
            setOpen: b,
            loading: T || !!f
          }
        );
      }
      return /* @__PURE__ */ a.jsx(
        xn,
        {
          field: e,
          isDisabled: O,
          handleKeyDown: E,
          labelClasses: k,
          listRef: ae,
          search: z,
          filteredOptions: W,
          highlightedIndex: $,
          setSearch: A,
          formik: t,
          executeFieldMethod: u,
          handlePersist: m,
          module_refid: o,
          options: R,
          triggerRef: oe,
          open: ee,
          setOpen: b,
          loading: T || !!f
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
              id: w,
              className: `${S} ${P} min-h-[120px] resize-none`,
              onFocus: () => y(!0),
              name: w,
              value: t.values[w],
              onBlur: t.handleBlur,
              onChange: (_) => {
                t.setFieldValue(w, _.target.value), m(_.target.value, e, o), u("onChange", e, `${w}`);
              },
              placeholder: e.placeholder,
              disabled: O
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${ie ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[w] && t.errors[w] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[w]) })
      ] }) });
    case "select":
      if (e.multiple === !0) {
        const _ = t.values[w];
        return /* @__PURE__ */ a.jsx(
          bn,
          {
            field: e,
            isDisabled: O,
            handleKeyDown: E,
            valueArray: _,
            labelClasses: k,
            listRef: ae,
            search: z,
            filteredOptions: W,
            highlightedIndex: $,
            setSearch: A,
            formik: t,
            executeFieldMethod: u,
            handlePersist: m,
            module_refid: o,
            options: R,
            triggerRef: oe,
            open: ee,
            setOpen: b,
            loading: T || !!f
          }
        );
      }
      return e.search ? /* @__PURE__ */ a.jsx(
        xn,
        {
          field: e,
          isDisabled: O,
          handleKeyDown: E,
          labelClasses: k,
          listRef: ae,
          search: z,
          filteredOptions: W,
          highlightedIndex: $,
          setSearch: A,
          formik: t,
          executeFieldMethod: u,
          handlePersist: m,
          module_refid: o,
          options: R,
          triggerRef: oe,
          open: ee,
          setOpen: b,
          loading: T || !!f
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
              className: `${S} ${P} appearance-none ${O ? "" : "cursor-pointer"} pr-12`,
              onFocus: () => y(!0),
              name: w,
              id: w,
              value: t.values[w],
              onBlur: t.handleBlur,
              onChange: (_) => {
                t.setFieldValue(w, _.target.value), m(_.target.value, e, o), u("onChange", e, `${w}`);
              },
              disabled: O,
              children: [
                e?.["no-option"] !== "false" && !t.values[w] && /* @__PURE__ */ a.jsx("option", { value: "", disabled: !0, children: e?.["no-option"] || `Please select ${e.label}` }),
                /* @__PURE__ */ a.jsx("option", { value: "", className: "text-gray-500", children: "Clear Selection" }),
                !Ft(R) && Object.entries(R).map(([_, L]) => /* @__PURE__ */ a.jsx("option", { value: _, className: "py-2", children: L }, _)),
                Ft(R) && Object.entries(R).map(([_, L]) => /* @__PURE__ */ a.jsx("optgroup", { label: _, children: Object.entries(L).map(([D, I]) => /* @__PURE__ */ a.jsx("option", { value: D, children: I }, D)) }, _))
              ]
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: "absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none", children: T || f ? /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) : /* @__PURE__ */ a.jsx(
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
        t.touched[w] && t.errors[w] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[w]) })
      ] });
    case "radioList":
    case "radio":
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: k, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: `flex ${N > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(R || {}).map(([_, L]) => /* @__PURE__ */ a.jsxs(
          "label",
          {
            htmlFor: `${w}-${_}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  id: `${w}-${_}`,
                  type: "radio",
                  name: w,
                  checked: t.values[w] === _,
                  value: _,
                  onChange: (D) => {
                    t.setFieldValue(w, D.target.value), m(D.target.value, e, o), u("onChange", e, `${w}-${_}`);
                  },
                  onBlur: t.handleBlur,
                  disabled: O,
                  className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${O ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                }
              ),
              L
            ]
          },
          _
        )) }),
        t.touched[w] && t.errors[w] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[w]) })
      ] });
    case "checkbox": {
      const _ = e.multiple === !0, L = t.values[w];
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: k, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(R || {}).map(([D, I]) => {
          const Y = _ ? Array.isArray(L) && L.includes(D) : L === D;
          return /* @__PURE__ */ a.jsxs(
            "label",
            {
              className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
              children: [
                /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    id: `${w}-${D}`,
                    type: "checkbox",
                    checked: Y,
                    onChange: (te) => {
                      let F;
                      if (_) {
                        const U = Array.isArray(L) ? L : [];
                        F = te.target.checked ? [...U, D] : U.filter((q) => q !== D);
                      } else
                        F = te.target.checked ? D : "false";
                      t.setFieldValue(w, F), m(F, e, o), u("onChange", e, `${w}-${D}`);
                    },
                    onBlur: t.handleBlur,
                    disabled: O,
                    className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${O ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                  }
                ),
                I
              ]
            },
            D
          );
        }) }),
        t.touched[w] && t.errors[w] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[w]) })
      ] });
    }
    case "tags": {
      const _ = t.values[w], L = z.trim(), D = Array.isArray(R) ? R : Object.entries(R || {}).map(([F, U]) => ({ value: F, label: U })), I = (F) => {
        if (!O && F && !_.includes(F)) {
          let U = [..._, F];
          t.setFieldValue(w, U), m(U, e, o), A("");
        }
      }, Y = (F) => {
        let U = _.filter((q) => q !== F);
        t.setFieldValue(
          w,
          U
        ), m(U, e, o);
      }, te = (F) => D.find((U) => U.value === F)?.label ?? F;
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
            ${O ? "pointer-events-none opacity-70" : ""}
            `,
            onClick: () => !O && document.getElementById(`${w}-input`)?.focus(),
            children: [
              _.map((F) => /* @__PURE__ */ a.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ a.jsx("span", { className: "text-indigo-700", children: te(F) }),
                    /* @__PURE__ */ a.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (U) => {
                          U.stopPropagation(), O || Y(F);
                        },
                        onMouseDown: (U) => U.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                F
              )),
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  id: `${w}-input`,
                  type: "text",
                  value: z,
                  onChange: (F) => A(F.target.value),
                  onKeyDown: (F) => {
                    (F.key === "Enter" || F.key === ",") && (F.preventDefault(), I(L));
                  },
                  placeholder: _.length === 0 ? e.placeholder || "Type and press Enter" : "",
                  className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                  disabled: O
                }
              )
            ]
          }
        ),
        t.touched[w] && t.errors[w] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[w]) })
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
      const J = e.multiple === !0, X = e.max !== void 0 ? Number(e.max) : 1 / 0, me = Array.isArray(t.values[w]) ? t.values[w] : t.values[w] ? [t.values[w]] : [];
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: k, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative mb-1", children: [
          e.icon && /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: M(e) }),
          T && /* @__PURE__ */ a.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 z-10", children: /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: w,
              type: "file",
              accept: e.accept,
              className: `${S} ${P} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => y(!0),
              name: w,
              multiple: J,
              onChange: (_) => {
                const L = _.currentTarget.files, D = Array.from(_.currentTarget.files || []);
                if (me.length + D.length > X) {
                  alert(`You can upload maximum ${X} file(s)`), _.currentTarget.value = "";
                  return;
                }
                L && g(L), u("onChange", e, w), _.currentTarget.value = "";
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: O
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${ie ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "flex flex-wrap gap-2", children: me.map((_) => /* @__PURE__ */ a.jsxs("div", { className: "relative group", children: [
          /* @__PURE__ */ a.jsx(
            Yo,
            {
              sqlOpsUrls: r,
              filePath: _
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              onClick: () => p(_),
              className: "absolute -top-2 -right-2 bg-white text-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xl cursor-pointer transition",
              children: "×"
            }
          )
        ] }, _)) }),
        t.touched[w] && t.errors[w] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[w]) })
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
              id: w,
              name: w,
              value: t.values[w],
              onChange: (_) => {
                t.setFieldValue(w, _.target.value), m(_.target.value, e, o), u("onChange", e, `${w}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: O,
              className: `${S} ${P} min-h-[200px] font-mono text-sm resize-y`
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
        t.touched[w] && t.errors[w] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[w]) })
      ] });
    case "date": {
      const _ = Uo(e.max);
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
                  id: w,
                  type: "date",
                  name: w,
                  min: e.min,
                  max: _,
                  value: t.values[w] ?? "",
                  onChange: (L) => {
                    t.setFieldValue(w, L.target.value), m(L.target.value, e, o), u("onChange", e, `${w}`);
                  },
                  onBlur: t.handleBlur,
                  placeholder: e.placeholder,
                  disabled: O,
                  className: `${S} ${P} ${e.icon ? "pl-9" : ""}`
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
        t.touched[w] && t.errors[w] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[w]) })
      ] });
    }
    case "geolocation": {
      const _ = t.values[w] || "", L = async () => {
        try {
          const D = await Jn();
          t.setFieldValue(w, D), m(D, e, o);
        } catch (D) {
          console.error(D), t.setFieldError(w, "Failed to fetch location");
        } finally {
          h(!1);
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
              value: _,
              readOnly: !0,
              className: `${S} ${P}`,
              placeholder: "Click to fetch location"
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              onClick: L,
              disabled: T,
              className: "absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 disabled:opacity-50",
              children: T ? /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-spinner fa-spin text-red-500" }) : /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-location-dot text-red-600 hover:text-red-700" })
            }
          )
        ] }),
        t.touched[w] && t.errors[w] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[w]) })
      ] });
    }
    case "number":
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: k, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: M(e) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: w,
              type: "number",
              className: `${S} ${P} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => y(!0),
              name: w,
              value: t.values[w],
              onBlur: t.handleBlur,
              onChange: (_) => {
                t.setFieldValue(w, _.target.value), m(_.target.value, e, o), u("onChange", e, `${w}`);
              },
              step: e.step,
              placeholder: e.placeholder,
              disabled: O,
              min: e.min,
              max: e.max
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${ie ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[w] && t.errors[w] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[w]) })
      ] });
    default:
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: k, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: M(e) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: w,
              type: e.type || "text",
              className: `${S} ${P} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => y(!0),
              name: w,
              value: t.values[w],
              onBlur: t.handleBlur,
              onChange: (_) => {
                t.setFieldValue(w, _.target.value), m(_.target.value, e, o), u("onChange", e, `${w}`);
              },
              step: e.step,
              placeholder: e.placeholder,
              disabled: O,
              minLength: e.minlength,
              maxLength: e.maxlength
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${ie ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[w] && t.errors[w] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[w]) })
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
  module_refid: f
}) {
  const d = To(t, i?.operation), [u, g] = ne.useState({}), E = (p, N) => {
    g((S) => ({
      ...S,
      [p]: N
    }));
  }, [A, b] = ne.useState({}), y = (p, N) => {
    b((S) => ({
      ...S,
      [p]: N
    }));
  }, { initialValues: x, validationSchema: j } = ne.useMemo(() => {
    const p = {}, N = {};
    return d.forEach((S) => {
      So([S], p, N, n);
    }), {
      initialValues: p,
      validationSchema: N
    };
  }, [d, n]), m = ps({
    initialValues: x,
    enableReinitialize: !0,
    validationSchema: Re.object().shape(j),
    onSubmit: (p) => {
      let N = jo(p, d);
      r(N), m.resetForm();
    }
  });
  function h(p) {
    p.preventDefault(), m.resetForm();
  }
  return /* @__PURE__ */ a.jsx("div", { className: "relative  max-w-full ", children: /* @__PURE__ */ a.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ a.jsxs("form", { onSubmit: m.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "grid grid-cols-12 gap-4", children: [
      d.map((p, N) => {
        const S = Ht(p.hidden) || p.type === "hidden", P = `
  col-span-12 md:col-span-6
  ${tt[rt(Number(p.width))] || "lg:col-span-4"}
  ${S ? "hidden" : ""}
`;
        return /* @__PURE__ */ a.jsx(
          "div",
          {
            className: P,
            children: /* @__PURE__ */ a.jsx(
              ei,
              {
                refid: l,
                module_refid: f,
                sqlOpsUrls: i,
                field: p,
                formik: m,
                methods: o,
                setFieldOptions: E,
                ...u[p.name] ? { optionsOverride: u[p.name] } : {},
                fieldLoading: A[p.name] ?? !1,
                setFieldLoading: y
              }
            )
          },
          p?.name ?? `field-${N}`
        );
      }),
      /* @__PURE__ */ a.jsxs("div", { className: "col-span-12 flex flex-row gap-1 justify-end", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", onClick: h, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Reset" }),
        Object.keys(m.errors).length > 0 && /* @__PURE__ */ a.jsx("div", { children: "  " }),
        /* @__PURE__ */ a.jsx("div", { children: "  " }),
        /* @__PURE__ */ a.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" }),
        Object.keys(m.errors).length > 0 && /* @__PURE__ */ a.jsx("div", { children: "  " })
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
  const f = e.endPoints, d = e?.source?.refid, [u, g] = ne.useState(o ?? {}), E = ne.useMemo(() => No(e.fields), [e.fields]);
  ne.useEffect(() => {
    let x = !0;
    return (async () => {
      try {
        const m = await Jn();
        x && g((h) => ({
          ...h,
          ...Object.fromEntries(
            E.map((p) => [p, m])
          )
        }));
      } catch (m) {
        console.warn("Geo fetch failed", m);
      }
    })(), () => {
      x = !1;
    };
  }, [E]), ne.useEffect(() => {
    g(o ?? {});
  }, [o]);
  const A = ne.useCallback(
    (x) => {
      x && g((j) => {
        const m = { ...j };
        for (const h in x)
          x[h] !== null && x[h] !== void 0 && (m[h] = x[h]);
        return m;
      });
    },
    []
  );
  ne.useEffect(() => {
    let x = !0;
    return (async () => {
      const m = e?.source ?? {};
      if (m?.type && f?.operation !== "create") {
        if (m.type === "method") {
          const h = m.method, p = h ? t[h] : void 0;
          if (p)
            try {
              const N = await p();
              x && A(N);
            } catch (N) {
              console.error("Method execution failed:", N);
            }
        }
        if (m.type === "api")
          try {
            const h = {
              method: m.method || "GET",
              url: f?.baseURL + m.endpoint,
              headers: {
                Authorization: `Bearer ${f?.accessToken}`
              },
              ...m.method === "GET" ? { params: { refid: m.refid } } : { data: { refid: m.refid } }
            }, p = await G(h);
            x && A(p.data);
          } catch (h) {
            console.error("API fetch failed:", h);
          }
        if (m.type === "sql" && m.refid && m.refid !== "0" || m.dbopsid) {
          if (!f) {
            console.error("SQL source requires formJson.endPoints but it is missing");
            return;
          }
          try {
            const h = await Go.fetch(f, {
              source: {
                ...m,
                table: m.table,
                columns: m.columns,
                where: Ae(m.where, {
                  refid: d
                })
              },
              fields: Dt(e.fields, f.operation)
            }, m?.dbopsid, e?.module_refid);
            x && A(h);
          } catch (h) {
            console.error("API fetch failed:", h);
          }
        }
      }
    })(), () => {
      x = !1;
    };
  }, [
    f,
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.endpoint || ""
  ]);
  const b = async (x) => {
    const j = e?.source ?? {};
    let m = { ...x }, h = "0,0";
    if (E.length > 0) {
      const p = E[0];
      h = (p ? x[p] : null) || "0,0";
      const S = E.filter((P) => !x[P]);
      if (S.length > 0)
        try {
          m = {
            ...x,
            ...Object.fromEntries(
              S.map((P) => [P, h])
            )
          };
        } catch {
          console.warn("Geo fetch failed");
        }
    }
    if (j.type === "method") {
      const p = j.method, N = p ? t[p] : void 0;
      if (N)
        try {
          let S = m ? { ...m, geolocation: h } : {};
          const P = await N(S);
          i?.(null), s?.(P);
          const k = cr(P, e?.submit_msg);
          k && l?.success?.(k);
        } catch (S) {
          s?.(S), l?.error?.(lr(S)), console.error("Method execution failed:", S);
        }
    }
    if (j.type === "api") {
      if (!f) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const p = await G({
          method: j.method || "POST",
          url: f.baseURL + j.endpoint,
          data: m ? { ...m, geolocation: h } : {},
          headers: {
            Authorization: `Bearer ${f?.accessToken}`
          }
        });
        i?.(null), s?.(p);
        const N = cr(p, e?.submit_msg);
        N && l?.success?.(N);
      } catch (p) {
        s?.(p), l?.error?.(lr(p)), console.error("API fetch failed:", p);
      }
    }
    if (j.type === "sql") {
      const p = e.endPoints;
      if (!p) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let N = !1, S;
        j?.dbopsid && (N = !0, S = j?.dbopsid);
        const P = await G({
          method: "GET",
          url: p.baseURL + p.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${p?.accessToken}`
          }
        });
        if (!N) {
          let R = {
            ...j
          };
          j.where && (R = {
            ...j,
            where: Ae(j.where, {
              refid: d
            })
          }), S = (await G({
            method: "POST",
            url: p.baseURL + p.dbopsGetRefId,
            data: {
              operation: p.operation,
              source: R,
              fields: Dt(e.fields, p.operation),
              forcefill: e.forcefill,
              datahash: P.data.refhash,
              scrid: e?.module_refid
            },
            headers: {
              Authorization: `Bearer ${p?.accessToken}`
            }
          }))?.data.refid;
        }
        let k = {
          refid: S,
          fields: m,
          datahash: P.data.refhash,
          refid1: p.refid,
          geolocation: h
        };
        j?.refid && (k.refid1 = j?.refid);
        const z = await G({
          method: "POST",
          url: p.baseURL + p[p.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: k,
          headers: {
            Authorization: `Bearer ${p?.accessToken}`
          }
        }), $ = cr(z, e?.submit_msg);
        $ && l?.success?.($), i?.(null), s?.(z);
      } catch (N) {
        s?.(N), l?.error?.(lr(N)), console.error("API fetch failed:", N);
      }
    }
  }, y = {
    simple: /* @__PURE__ */ a.jsx(
      ti,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: u,
        onSubmit: b,
        onCancel: n,
        methods: t,
        components: r,
        sqlOpsUrls: f,
        refid: d,
        module_refid: e?.module_refid
      }
    )
  };
  return /* @__PURE__ */ a.jsx("div", { className: "relative", children: y.simple });
}
function Sr({ tabObj: e, methods: t, tabName: n, sqlOpsUrls: r, refid: s, Reports: o, toast: i, handleAction: l, infoViewJson: f }) {
  const [d, u] = ue(!1), [g, E] = ue(null), [A, b] = ne.useState(0), [y, x] = ne.useState(null), j = e?.config, m = e?.config, h = m?.["popup.form"] ? "popup.form" : (m?.form, "form"), p = m?.[h] && Object.keys(m?.[h]).length > 0, N = ($) => {
    let R = Ee($.data);
    x(R);
  }, S = ($) => {
    x($), b((R) => R + 1);
  }, P = ($) => {
    let R = Ee($.data);
    E(R), u(!0);
  }, k = async () => {
    if (g?.id) {
      if (!r) {
        window.alert("Delete configuration missing.");
        return;
      }
      try {
        let $ = e?.config;
        const R = $?.["popup.form"] ? "popup.form" : ($?.form, "form"), O = $?.[R];
        if (!O?.source) throw new Error("Form source missing");
        let w = !1, W;
        O?.source?.dbopsid && (w = !0, W = O?.source?.dbopsid);
        const ee = await G({
          method: "GET",
          url: r.baseURL + r.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${r.accessToken}`
          }
        });
        if (!w) {
          let ae = { ...O.source, refid: g.id };
          O.source.where && (ae = {
            ...ae,
            where: Ae(O.source.where, {
              refid: g?.id
            })
          }), W = (await G({
            method: "POST",
            url: r.baseURL + r.dbopsGetRefId,
            data: {
              operation: "update",
              source: ae,
              fields: O.fields,
              forcefill: O.forcefill,
              datahash: ee.data.refhash,
              scrid: f?.module_refid
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
            refid: W,
            fields: { blocked: "true" },
            datahash: ee.data.refhash,
            refid1: g?.id
          },
          headers: {
            Authorization: `Bearer ${r.accessToken}`
          }
        }), window.alert("Record deleted successfully."), b((ae) => ae + 1);
      } catch ($) {
        console.error($), window.alert("Failed to delete record. Please try again");
      } finally {
        E(null), u(!1);
      }
    }
  }, z = () => {
    E(null), u(!1);
  };
  return /* @__PURE__ */ a.jsx(a.Fragment, { children: o ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    j?.datagrid && /* @__PURE__ */ a.jsx(
      o,
      {
        methods: { ...t, deleteRecord: P, editRecord: N },
        report: {
          ...j,
          source: {
            table: j?.table,
            type: "sql",
            cols: j?.cols,
            where: j?.where,
            orderby: j?.orderby,
            queryid: j?.queryid
          },
          endPoints: r,
          actions: { ...j?.actions, ...f?.buttons, ...f.actions },
          datagrid: j?.datagrid,
          buttons: j?.buttons,
          refresh: A,
          native: r?.native
        },
        onButtonClick: l
      }
    ),
    p && /* @__PURE__ */ a.jsx(
      wn,
      {
        formJson: {
          ...m[h],
          source: {
            ...m?.[h].source,
            refid: y?.id
          },
          endPoints: {
            ...r,
            operation: y ? "update" : "create"
          },
          module_refid: f?.module_refid
        },
        toast: i,
        methods: t,
        initialvalues: y ?? {},
        setEditData: S
      }
    ),
    /* @__PURE__ */ a.jsx(
      Qo,
      {
        open: d,
        onConfirm: k,
        onCancel: z
      }
    )
  ] }) : p && /* @__PURE__ */ a.jsx(
    wn,
    {
      formJson: {
        ...m[h],
        source: {
          ...m?.[h].source,
          refid: y?.id
        },
        endPoints: {
          ...r,
          operation: y ? "update" : "create"
        },
        module_refid: f?.module_refid
      },
      toast: i,
      methods: t,
      initialvalues: y ?? {},
      setEditData: S
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
  const [f, d] = ue(!1), u = We(null);
  return ve(() => {
    const g = (E) => {
      u.current && !u.current.contains(E.target) && d(!1);
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
            onClick: () => d(!f),
            className: "ml-1 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200",
            children: "⋮"
          }
        ),
        f && /* @__PURE__ */ a.jsx("div", { className: "absolute right-0 mt-2 w-48 max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-30", children: t.map((g, E) => /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              n(E), d(!1);
            },
            className: `w-full text-left px-3 py-2 text-sm truncate hover:bg-gray-100 ${r === E ? "bg-gray-50 font-semibold text-action" : "text-gray-700"}`,
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
        children: t.length > 0 ? t.map((g, E) => /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            onClick: () => n(E),
            className: `relative cursor-pointer flex-shrink-0
            min-w-[8rem]   
            py-2 px-8
            rounded-t-lg text-xs sm:text-sm font-semibold
            transition-all duration-300 ease-out
            focus:outline-none whitespace-nowrap
            ${r === E ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
            children: /* @__PURE__ */ a.jsx("span", { className: "relative z-10 flex items-center justify-center gap-1 sm:gap-2", children: /* @__PURE__ */ a.jsx("span", { className: "truncate", children: e[g]?.label || g }) })
          },
          g
        )) : /* @__PURE__ */ a.jsx("div", { className: "py-3 px-6 text-sm text-gray-500", children: "No group available" })
      }
    ) })
  ] });
}, En = ({
  groupNames: e,
  activeTabIndex: t,
  layoutConfig: n,
  tabObj: r,
  infoData: s,
  setActiveTabIndex: o,
  renderView: i,
  methods: l = {},
  refid: f,
  sqlOpsUrls: d,
  module_refid: u,
  fieldOptions: g,
  setFieldOptions: E,
  buttons: A,
  handleAction: b,
  components: y,
  AttachmentPopup: x
}) => {
  let j = A ? Object.entries(A).filter(([p, N]) => N.groups ? N.groups.includes(e[t]) : !0) : [];
  async function m(p, N) {
    const S = l?.[p];
    if (S) {
      try {
        await S();
      } catch (P) {
        console.error("Method execution failed:", P);
      }
      return;
    }
    b?.({ [p]: N }, s);
  }
  const h = Rr(r?.component, y);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "bg-white rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex-1 flex flex-col min-h-0",
      children: [
        e.length > 0 ? r?.type === "fields" && r?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: n?.fieldGridClass || "grid grid-cols-12 gap-2", children: r.fields.map((p, N) => Ht(p.hidden) ? null : /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${tt[rt(Number(p.width))] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ a.jsx(
              bt,
              {
                field: p,
                data: s ?? {},
                methods: l,
                refid: f,
                sqlOpsUrls: d,
                module_refid: u,
                setFieldOptions: E,
                ...g[p.name] ? { optionsOverride: g[p.name] } : {},
                AttachmentPopup: x
              }
            )
          },
          p?.name ?? `field-${N}`
        )) }) }) : r?.type === "component" && h ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: h }) : r ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: i(r, e[t] || "") }) : null : /* @__PURE__ */ a.jsx("div", { className: "flex-1 col-span-full text-center py-8 text-gray-500", children: "No data available" }),
        /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: j && j.map(([p, N]) => /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => m(p, N),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: N.label
          },
          p
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
              e.slice(0, 5).map((p, N) => /* @__PURE__ */ a.jsx(
                "div",
                {
                  className: `w-2 h-2 rounded-full transition-all duration-300 ${N === t ? "bg-action w-6" : "bg-gray-300"}`
                },
                N
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
          /* @__PURE__ */ a.jsx("div", { className: "flex gap-1", children: e.map((p, N) => /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `w-2 h-2 rounded-full transition-all duration-300 ${N === t ? "bg-action w-6" : "bg-gray-300"}`
            },
            N
          )) })
        ] }) })
      ]
    },
    e[t]
  );
};
function An({
  groups: e,
  methods: t = {},
  infoData: n,
  viewRenderers: r = {},
  isCommonInfo: s,
  layoutConfig: o = {},
  viewMode: i,
  sqlOpsUrls: l,
  refid: f,
  Reports: d,
  toast: u,
  handleAction: g = () => {
  },
  infoViewJson: E,
  fieldOptions: A,
  setFieldOptions: b,
  components: y,
  AttachmentPopup: x
}) {
  const [j, m] = ue(0), [h, p] = ue(!1), N = We(null), S = Object.keys(e);
  ve(() => {
    const W = () => {
      if (N.current) {
        const ee = N.current;
        p(ee.scrollWidth > ee.clientWidth);
      }
    };
    return W(), window.addEventListener("resize", W), () => window.removeEventListener("resize", W);
  }, [S.length]), ve(() => {
    if (N.current && S.length > 0) {
      const W = N.current.children[j];
      W && W.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [j, S.length]);
  const P = i === "tableft", k = i === "tabright", z = !P && !k, $ = e[S[j] ?? ""] || null, R = {
    single: (W, ee) => /* @__PURE__ */ a.jsx(
      jr,
      {
        fieldOptions: A,
        setFieldOptions: b,
        module_refid: E.module_refid,
        tabObj: W,
        methods: t,
        tabName: ee,
        sqlOpsUrls: l,
        refid: f,
        AttachmentPopup: x
      }
    ),
    grid: (W, ee) => /* @__PURE__ */ a.jsx(
      Sr,
      {
        ...d ? { Reports: d } : {},
        toast: u,
        handleAction: g,
        tabObj: W,
        methods: t,
        tabName: ee,
        sqlOpsUrls: l,
        refid: f,
        infoViewJson: E
      }
    )
  }, O = $?.config?.uimode, w = r[O] || R[O] || (() => /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No UI mode for this type" }));
  return z ? /* @__PURE__ */ a.jsxs("div", { className: "flex-1 flex flex-col min-h-0 ", children: [
    /* @__PURE__ */ a.jsx(
      ri,
      {
        groupNames: S,
        groups: e,
        setActiveTabIndex: m,
        activeTabIndex: j,
        tabsNavRef: N,
        isCommonInfo: s,
        showScrollHint: h,
        layoutConfig: o
      }
    ),
    /* @__PURE__ */ a.jsx(
      En,
      {
        groupNames: S,
        activeTabIndex: j,
        layoutConfig: o,
        tabObj: $,
        infoData: n,
        setActiveTabIndex: m,
        renderView: w,
        groups: e,
        methods: t,
        refid: f,
        sqlOpsUrls: l,
        module_refid: E.module_refid,
        fieldOptions: A,
        setFieldOptions: b,
        buttons: E.buttons,
        handleAction: g,
        ...y ? { components: y } : {},
        AttachmentPopup: x
      }
    )
  ] }) : /* @__PURE__ */ a.jsxs("div", { className: "flex-1 flex min-h-0", children: [
    P && /* @__PURE__ */ a.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ a.jsx(
      vn,
      {
        groupNames: S,
        groups: e,
        setActiveTabIndex: m,
        activeTabIndex: j
      }
    ) }),
    /* @__PURE__ */ a.jsx("main", { className: "flex-1 flex flex-col min-h-0 overflow-auto", children: /* @__PURE__ */ a.jsx(
      En,
      {
        groupNames: S,
        activeTabIndex: j,
        layoutConfig: o,
        tabObj: $,
        infoData: n,
        setActiveTabIndex: m,
        renderView: w,
        groups: e,
        methods: t,
        refid: f,
        module_refid: E.module_refid,
        sqlOpsUrls: l,
        fieldOptions: A,
        setFieldOptions: b,
        handleAction: g,
        ...y ? { components: y } : {},
        AttachmentPopup: x
      }
    ) }),
    k && /* @__PURE__ */ a.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ a.jsx(
      vn,
      {
        groupNames: S,
        groups: e,
        setActiveTabIndex: m,
        activeTabIndex: j
      }
    ) })
  ] });
}
function ni({ title: e, children: t, isFirst: n }) {
  const [r, s] = ue(n);
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
  handleAction: f = () => {
  },
  infoViewJson: d,
  fieldOptions: u,
  setFieldOptions: g,
  components: E,
  AttachmentPopup: A
}) {
  const b = {
    single: (m, h) => /* @__PURE__ */ a.jsx(
      jr,
      {
        tabObj: m,
        methods: t,
        tabName: h,
        sqlOpsUrls: s,
        fieldOptions: u,
        setFieldOptions: g,
        refid: o,
        module_refid: d?.module_refid,
        AttachmentPopup: A
      }
    ),
    grid: (m, h) => /* @__PURE__ */ a.jsx(
      Sr,
      {
        ...i ? { Reports: i } : {},
        toast: l,
        infoViewJson: d,
        handleAction: f,
        tabObj: m,
        methods: t,
        tabName: h,
        sqlOpsUrls: s,
        refid: o
      }
    )
  }, y = d?.buttons;
  let x = y ? Object.entries(y).filter(([m, h]) => !(h.groups && h.groups.length > 0)) : [];
  async function j(m, h) {
    const p = t?.[m];
    if (p) {
      try {
        await p();
      } catch (N) {
        console.error("Method execution failed:", N);
      }
      return;
    }
    f?.({ [m]: h }, n);
  }
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ a.jsx("div", { className: "mx-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "space-y-1 flex flex-col min-h-0", children: [
    e && Object.entries(e).map(([m, h], p) => {
      let N = y ? Object.entries(y).filter(([P, k]) => k.groups ? k.groups.includes(m) : !1) : [];
      const S = Rr(h.component, E);
      return /* @__PURE__ */ a.jsxs(ni, { title: h.label, isFirst: p === 0, children: [
        h?.type === "fields" && h?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: h.fields.map((P, k) => Ht(P.hidden) ? null : /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${tt[rt(Number(P.width))] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ a.jsx(
              bt,
              {
                module_refid: d?.module_refid,
                methods: t,
                field: P,
                data: n ?? {},
                setFieldOptions: g,
                ...u[P.name] ? { optionsOverride: u[P.name] } : {},
                sqlOpsUrls: s,
                refid: o,
                AttachmentPopup: A
              }
            )
          },
          P?.name ?? `field-${k}`
        )) }) }) : h?.type === "component" && S ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: S }) : h ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: r[h.config?.uimode]?.(h) || b[h.config?.uimode]?.(h, m) || /* @__PURE__ */ a.jsx("div", { children: "No renderer for this type" }) }) : null,
        /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: N && N.map(([P, k]) => /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => j(P, k),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: k.label
          },
          P
        )) })
      ] }, m);
    }),
    /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: x && x.map(([m, h]) => /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => j(m, h),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: h.label
      },
      m
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
  handleAction: f = () => {
  },
  infoViewJson: d,
  fieldOptions: u,
  setFieldOptions: g,
  components: E,
  AttachmentPopup: A
}) {
  const b = {
    single: (m, h) => /* @__PURE__ */ a.jsx(
      jr,
      {
        fieldOptions: u,
        setFieldOptions: g,
        module_refid: d?.module_refid,
        tabObj: m,
        methods: t,
        tabName: h,
        sqlOpsUrls: s,
        refid: o,
        AttachmentPopup: A
      }
    ),
    grid: (m, h) => /* @__PURE__ */ a.jsx(
      Sr,
      {
        ...i ? { Reports: i } : {},
        toast: l,
        handleAction: f,
        tabObj: m,
        methods: t,
        tabName: h,
        sqlOpsUrls: s,
        refid: o,
        infoViewJson: d
      }
    )
  }, y = d?.buttons;
  let x = y ? Object.entries(y).filter(([m, h]) => !(h.groups && h.groups.length > 0)) : [];
  async function j(m, h) {
    const p = t?.[m];
    if (p) {
      try {
        await p();
      } catch (N) {
        console.error("Method execution failed:", N);
      }
      return;
    }
    f?.({ [m]: h }, n);
  }
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ a.jsx("div", { className: "mx-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "space-y-2  flex flex-col min-h-0", children: [
    e && Object.entries(e).map(([m, h], p) => {
      let N = y ? Object.entries(y).filter(([P, k]) => k.groups ? k.groups.includes(m) : !1) : [];
      const S = Rr(h.component, E);
      return /* @__PURE__ */ a.jsxs(ai, { title: h.label, children: [
        h?.type === "fields" && h?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: h.fields.map((P, k) => Ht(P.hidden) ? null : /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${tt[rt(Number(P.width))] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ a.jsx(
              bt,
              {
                module_refid: d?.module_refid,
                methods: t,
                field: P,
                data: n ?? {},
                setFieldOptions: g,
                ...u[P.name] ? { optionsOverride: u[P.name] } : {},
                sqlOpsUrls: s,
                refid: o,
                AttachmentPopup: A
              }
            )
          },
          P?.name ?? `field-${k}`
        )) }) }) : h?.type === "component" && S ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: S }) : h ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: r[h.config?.uimode]?.(h) || b[h.config?.uimode]?.(h, m) || /* @__PURE__ */ a.jsx("div", { children: "No renderer for this type" }) }) : null,
        /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: N && N.map(([P, k]) => /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => j(P, k),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: k.label
          },
          P
        )) })
      ] }, m);
    }),
    /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: x && x.map(([m, h]) => /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => j(m, h),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: h.label
      },
      m
    )) })
  ] }) }) });
}
function Ri({
  infoViewJson: e,
  hiddenFields: t = [],
  groupFieldsFn: n = Ao,
  layoutConfig: r = {},
  viewRenderers: s = {},
  methods: o = {},
  Reports: i,
  toast: l,
  handleAction: f = () => {
  },
  components: d,
  initialvalues: u,
  AttachmentPopup: g
}) {
  const [E, A] = ne.useState(u ?? {}), b = Eo(e.infoview ?? {}), y = e.endPoints, x = ne.useMemo(
    () => n(e.fields || {}),
    [e.fields, n]
  ), [j, m] = ne.useState({}), h = (z, $) => {
    m((R) => ({ ...R, [z]: $ }));
  }, p = e?.source?.refid;
  let N = { ...x };
  e.infoview?.groups && (N = { ...N, ...e.infoview.groups }), ne.useEffect(() => {
    u && A((z) => ({
      ...z,
      ...u ?? {}
    }));
  }, [u]);
  const S = ne.useCallback(
    (z) => {
      z && A(($) => ({
        ...$,
        ...z
      }));
    },
    []
  );
  ne.useEffect(() => {
    let z = !1;
    return (async () => {
      const R = e?.source;
      if (!R?.type) {
        z || S({});
        return;
      }
      if (R.type === "method") {
        const O = R.method, w = O ? o[O] : void 0;
        if (w)
          try {
            const W = await w();
            z || S(W || {});
          } catch (W) {
            console.error("Method execution failed:", W), z || S({});
          }
        else
          z || S({});
      }
      if (R.type === "api")
        try {
          const O = {
            method: R.method || "GET",
            url: y?.baseURL + R.endpoint,
            headers: {
              Authorization: `Bearer ${y?.accessToken}`
            },
            ...R.method === "GET" ? { params: { refid: R.refid } } : { data: { refid: R.refid } }
          }, { data: w } = await G(O), W = w?.results?.options ? w?.results?.options : w.data ? w.data : w.results ? w.results : w;
          z || S(W ?? {});
        } catch (O) {
          console.error("API fetch failed:", O), z || S({});
        }
      if (R.type === "sql" && R.refid && R.refid != "0" || R.dbopsid) {
        if (!y) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let O = !1, w;
          R?.dbopsid && (O = !0, w = R?.dbopsid);
          const W = await G({
            method: "GET",
            url: y.baseURL + y.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${y?.accessToken}`
            }
          });
          if (!O) {
            let oe = {
              ...R
            };
            R.where && (oe = {
              ...R,
              where: Ae(R.where, {
                refid: p
              })
            }), w = (await G({
              method: "POST",
              url: y.baseURL + y.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: oe,
                fields: Dt(e.fields ?? {}, y.operation),
                forcefill: e.forcefill,
                datahash: W.data.refhash,
                srcid: e?.module_refid
              },
              headers: {
                Authorization: `Bearer ${y?.accessToken}`
              }
            }))?.data.refid;
          }
          const ee = await G({
            method: "POST",
            url: y.baseURL + y.dbopsFetch,
            data: {
              refid: w,
              datahash: W.data.refhash,
              module_refid: e.module_refid
            },
            headers: {
              Authorization: `Bearer ${y?.accessToken}`
            }
          }), ae = es(ee) ?? {};
          z || S(ae);
        } catch (O) {
          z || S({}), console.error("API fetch failed:", O);
        }
      }
    })(), () => {
      z = !0;
    };
  }, [
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.url || "",
    JSON.stringify(e?.source?.params || {}),
    JSON.stringify(e?.source?.body || {}),
    JSON.stringify(e?.source?.headers || {})
  ]);
  const P = N.common || null;
  P && delete N.common;
  const k = (z) => {
    switch (z) {
      case "accordion":
        return /* @__PURE__ */ a.jsx(
          si,
          {
            groups: N,
            methods: o,
            infoData: E,
            viewRenderers: s,
            sqlOpsUrls: y,
            refid: p,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: f,
            infoViewJson: e,
            setFieldOptions: h,
            fieldOptions: j,
            ...d ? { components: d } : {},
            AttachmentPopup: g
          }
        );
      case "tab":
      case "tableft":
      case "tabright":
        return /* @__PURE__ */ a.jsx(
          An,
          {
            groups: N,
            viewRenderers: s,
            layoutConfig: r,
            methods: o,
            infoData: E,
            isCommonInfo: !!P,
            viewMode: z,
            sqlOpsUrls: y,
            refid: p,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: f,
            infoViewJson: e,
            setFieldOptions: h,
            fieldOptions: j,
            ...d ? { components: d } : {},
            AttachmentPopup: g
          }
        );
      case "cards":
        return /* @__PURE__ */ a.jsx(
          oi,
          {
            groups: N,
            viewRenderers: s,
            methods: o,
            infoData: E,
            sqlOpsUrls: y,
            refid: p,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: f,
            infoViewJson: e,
            setFieldOptions: h,
            fieldOptions: j,
            ...d ? { components: d } : {},
            AttachmentPopup: g
          }
        );
      default:
        return /* @__PURE__ */ a.jsx(
          An,
          {
            groups: N,
            viewRenderers: s,
            layoutConfig: r,
            methods: o,
            infoData: E,
            isCommonInfo: !!P,
            viewMode: z,
            sqlOpsUrls: y,
            refid: p,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: f,
            infoViewJson: e,
            setFieldOptions: h,
            fieldOptions: j,
            ...d ? { components: d } : {},
            AttachmentPopup: g
          }
        );
    }
  };
  return /* @__PURE__ */ a.jsxs("div", { className: r.containerClass || "h-screen flex flex-col ", children: [
    P && y && /* @__PURE__ */ a.jsx(
      Xo,
      {
        commonInfo: P,
        infoData: E,
        hiddenFields: t,
        sqlOpsUrls: y,
        setFieldOptions: h,
        fieldOptions: j,
        module_refid: e.module_refid,
        refid: p,
        methods: o,
        AttachmentPopup: g
      }
    ),
    k(b)
  ] });
}
export {
  Ri as InfoView
};
