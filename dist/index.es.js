import re, { useState as ce, useEffect as ge, useMemo as Rt, useRef as He, useLayoutEffect as ms } from "react";
import * as Ne from "yup";
import { useFormik as hs } from "formik";
import { createPortal as gs } from "react-dom";
var Tt = { exports: {} }, nt = {};
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
  if (Gr) return nt;
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
  return nt.Fragment = t, nt.jsx = n, nt.jsxs = n, nt;
}
var st = {};
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
    function e(T) {
      if (T == null) return null;
      if (typeof T == "function")
        return T.$$typeof === C ? null : T.displayName || T.name || null;
      if (typeof T == "string") return T;
      switch (T) {
        case E:
          return "Fragment";
        case b:
          return "Profiler";
        case w:
          return "StrictMode";
        case S:
          return "Suspense";
        case L:
          return "SuspenseList";
        case H:
          return "Activity";
      }
      if (typeof T == "object")
        switch (typeof T.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), T.$$typeof) {
          case g:
            return "Portal";
          case x:
            return (T.displayName || "Context") + ".Provider";
          case m:
            return (T._context.displayName || "Context") + ".Consumer";
          case A:
            var M = T.render;
            return T = T.displayName, T || (T = M.displayName || M.name || "", T = T !== "" ? "ForwardRef(" + T + ")" : "ForwardRef"), T;
          case F:
            return M = T.displayName || null, M !== null ? M : e(T.type) || "Memo";
          case P:
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
        var J = M.error, R = typeof Symbol == "function" && Symbol.toStringTag && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return J.call(
          M,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          R
        ), t(T);
      }
    }
    function r(T) {
      if (T === E) return "<>";
      if (typeof T == "object" && T !== null && T.$$typeof === P)
        return "<...>";
      try {
        var M = e(T);
        return M ? "<" + M + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var T = p.A;
      return T === null ? null : T.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(T) {
      if (k.call(T, "key")) {
        var M = Object.getOwnPropertyDescriptor(T, "key").get;
        if (M && M.isReactWarning) return !1;
      }
      return T.key !== void 0;
    }
    function l(T, M) {
      function J() {
        ne || (ne = !0, console.error(
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
      return te[T] || (te[T] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), T = this.props.ref, T !== void 0 ? T : null;
    }
    function u(T, M, J, R, O, j, D, Y) {
      return J = j.ref, T = {
        $$typeof: N,
        type: T,
        key: M,
        props: j,
        _owner: O
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
        value: D
      }), Object.defineProperty(T, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Y
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    }
    function d(T, M, J, R, O, j, D, Y) {
      var q = M.children;
      if (q !== void 0)
        if (R)
          if (K(q)) {
            for (R = 0; R < q.length; R++)
              y(q[R]);
            Object.freeze && Object.freeze(q);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(q);
      if (k.call(M, "key")) {
        q = e(T);
        var I = Object.keys(M).filter(function(G) {
          return G !== "key";
        });
        R = 0 < I.length ? "{key: someKey, " + I.join(": ..., ") + ": ...}" : "{key: someKey}", Oe[q + R] || (I = 0 < I.length ? "{" + I.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          R,
          q,
          I,
          q
        ), Oe[q + R] = !0);
      }
      if (q = null, J !== void 0 && (n(J), q = "" + J), i(M) && (n(M.key), q = "" + M.key), "key" in M) {
        J = {};
        for (var B in M)
          B !== "key" && (J[B] = M[B]);
      } else J = M;
      return q && l(
        J,
        typeof T == "function" ? T.displayName || T.name || "Unknown" : T
      ), u(
        T,
        q,
        j,
        O,
        s(),
        J,
        D,
        Y
      );
    }
    function y(T) {
      typeof T == "object" && T !== null && T.$$typeof === N && T._store && (T._store.validated = 1);
    }
    var h = re, N = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), m = Symbol.for("react.consumer"), x = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), H = Symbol.for("react.activity"), C = Symbol.for("react.client.reference"), p = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = Object.prototype.hasOwnProperty, K = Array.isArray, Q = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(T) {
        return T();
      }
    };
    var ne, te = {}, ve = h.react_stack_bottom_frame.bind(
      h,
      o
    )(), je = Q(r(o)), Oe = {};
    st.Fragment = E, st.jsx = function(T, M, J, R, O) {
      var j = 1e4 > p.recentlyCreatedOwnerStacks++;
      return d(
        T,
        M,
        J,
        !1,
        R,
        O,
        j ? Error("react-stack-top-frame") : ve,
        j ? Q(r(T)) : je
      );
    }, st.jsxs = function(T, M, J, R, O) {
      var j = 1e4 > p.recentlyCreatedOwnerStacks++;
      return d(
        T,
        M,
        J,
        !0,
        R,
        O,
        j ? Error("react-stack-top-frame") : ve,
        j ? Q(r(T)) : je
      );
    };
  }()), st;
}
var qr;
function xs() {
  return qr || (qr = 1, process.env.NODE_ENV === "production" ? Tt.exports = ys() : Tt.exports = bs()), Tt.exports;
}
var a = xs();
function En(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: ws } = Object.prototype, { getPrototypeOf: vr } = Object, { iterator: kt, toStringTag: Nn } = Symbol, Mt = /* @__PURE__ */ ((e) => (t) => {
  const n = ws.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ce = (e) => (e = e.toLowerCase(), (t) => Mt(t) === e), $t = (e) => (t) => typeof t === e, { isArray: Ze } = Array, ft = $t("undefined");
function pt(e) {
  return e !== null && !ft(e) && e.constructor !== null && !ft(e.constructor) && xe(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Tn = Ce("ArrayBuffer");
function vs(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Tn(e.buffer), t;
}
const As = $t("string"), xe = $t("function"), jn = $t("number"), mt = (e) => e !== null && typeof e == "object", Es = (e) => e === !0 || e === !1, _t = (e) => {
  if (Mt(e) !== "object")
    return !1;
  const t = vr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Nn in e) && !(kt in e);
}, Ns = (e) => {
  if (!mt(e) || pt(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Ts = Ce("Date"), js = Ce("File"), Ss = Ce("Blob"), Rs = Ce("FileList"), _s = (e) => mt(e) && xe(e.pipe), Cs = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || xe(e.append) && ((t = Mt(e)) === "formdata" || // detect form-data instance
  t === "object" && xe(e.toString) && e.toString() === "[object FormData]"));
}, Os = Ce("URLSearchParams"), [Ls, Is, Ps, Ds] = ["ReadableStream", "Request", "Response", "Headers"].map(Ce), Fs = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ht(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), Ze(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (pt(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let l;
    for (r = 0; r < i; r++)
      l = o[r], t.call(null, e[l], l, e);
  }
}
function Sn(e, t) {
  if (pt(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const Ue = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Rn = (e) => !ft(e) && e !== Ue;
function dr() {
  const { caseless: e } = Rn(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && Sn(t, s) || s;
    _t(t[o]) && _t(r) ? t[o] = dr(t[o], r) : _t(r) ? t[o] = dr({}, r) : Ze(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && ht(arguments[r], n);
  return t;
}
const ks = (e, t, n, { allOwnKeys: r } = {}) => (ht(t, (s, o) => {
  n && xe(s) ? e[o] = En(s, n) : e[o] = s;
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
  if (Ze(e)) return e;
  let t = e.length;
  if (!jn(t)) return null;
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
}, qs = Ce("HTMLFormElement"), Ks = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Kr = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Vs = Ce("RegExp"), _n = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  ht(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, Ys = (e) => {
  _n(e, (t, n) => {
    if (xe(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (xe(r)) {
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
  return Ze(e) ? r(e) : r(String(e).split(t)), n;
}, Qs = () => {
}, Zs = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Js(e) {
  return !!(e && xe(e.append) && e[Nn] === "FormData" && e[kt]);
}
const ea = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (mt(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (pt(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = Ze(r) ? [] : {};
        return ht(r, (i, l) => {
          const f = n(i, s + 1);
          !ft(f) && (o[l] = f);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, ta = Ce("AsyncFunction"), ra = (e) => e && (mt(e) || xe(e)) && xe(e.then) && xe(e.catch), Cn = ((e, t) => e ? setImmediate : t ? ((n, r) => (Ue.addEventListener("message", ({ source: s, data: o }) => {
  s === Ue && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), Ue.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  xe(Ue.postMessage)
), na = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ue) : typeof process < "u" && process.nextTick || Cn, sa = (e) => e != null && xe(e[kt]), v = {
  isArray: Ze,
  isArrayBuffer: Tn,
  isBuffer: pt,
  isFormData: Cs,
  isArrayBufferView: vs,
  isString: As,
  isNumber: jn,
  isBoolean: Es,
  isObject: mt,
  isPlainObject: _t,
  isEmptyObject: Ns,
  isReadableStream: Ls,
  isRequest: Is,
  isResponse: Ps,
  isHeaders: Ds,
  isUndefined: ft,
  isDate: Ts,
  isFile: js,
  isBlob: Ss,
  isRegExp: Vs,
  isFunction: xe,
  isStream: _s,
  isURLSearchParams: Os,
  isTypedArray: Hs,
  isFileList: Rs,
  forEach: ht,
  merge: dr,
  extend: ks,
  trim: Fs,
  stripBOM: Ms,
  inherits: $s,
  toFlatObject: Bs,
  kindOf: Mt,
  kindOfTest: Ce,
  endsWith: zs,
  toArray: Us,
  forEachEntry: Gs,
  matchAll: Ws,
  isHTMLForm: qs,
  hasOwnProperty: Kr,
  hasOwnProp: Kr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: _n,
  freezeMethods: Ys,
  toObjectSet: Xs,
  toCamelCase: Ks,
  noop: Qs,
  toFiniteNumber: Zs,
  findKey: Sn,
  global: Ue,
  isContextDefined: Rn,
  isSpecCompliantForm: Js,
  toJSONObject: ea,
  isAsyncFn: ta,
  isThenable: ra,
  setImmediate: Cn,
  asap: na,
  isIterable: sa
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
  return v.toFlatObject(e, i, function(f) {
    return f !== Error.prototype;
  }, (l) => l !== "isAxiosError"), V.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const aa = null;
function fr(e) {
  return v.isPlainObject(e) || v.isArray(e);
}
function In(e) {
  return v.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Vr(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = In(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function oa(e) {
  return v.isArray(e) && !e.some(fr);
}
const ia = v.toFlatObject(v, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Bt(e, t, n) {
  if (!v.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = v.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(E, w) {
    return !v.isUndefined(w[E]);
  });
  const r = n.metaTokens, s = n.visitor || d, o = n.dots, i = n.indexes, f = (n.Blob || typeof Blob < "u" && Blob) && v.isSpecCompliantForm(t);
  if (!v.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(g) {
    if (g === null) return "";
    if (v.isDate(g))
      return g.toISOString();
    if (v.isBoolean(g))
      return g.toString();
    if (!f && v.isBlob(g))
      throw new V("Blob is not supported. Use a Buffer instead.");
    return v.isArrayBuffer(g) || v.isTypedArray(g) ? f && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function d(g, E, w) {
    let b = g;
    if (g && !w && typeof g == "object") {
      if (v.endsWith(E, "{}"))
        E = r ? E : E.slice(0, -2), g = JSON.stringify(g);
      else if (v.isArray(g) && oa(g) || (v.isFileList(g) || v.endsWith(E, "[]")) && (b = v.toArray(g)))
        return E = In(E), b.forEach(function(x, A) {
          !(v.isUndefined(x) || x === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Vr([E], A, o) : i === null ? E : E + "[]",
            u(x)
          );
        }), !1;
    }
    return fr(g) ? !0 : (t.append(Vr(w, E, o), u(g)), !1);
  }
  const y = [], h = Object.assign(ia, {
    defaultVisitor: d,
    convertValue: u,
    isVisitable: fr
  });
  function N(g, E) {
    if (!v.isUndefined(g)) {
      if (y.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + E.join("."));
      y.push(g), v.forEach(g, function(b, m) {
        (!(v.isUndefined(b) || b === null) && s.call(
          t,
          b,
          v.isString(m) ? m.trim() : m,
          E,
          h
        )) === !0 && N(b, E ? E.concat(m) : [m]);
      }), y.pop();
    }
  }
  if (!v.isObject(e))
    throw new TypeError("data must be an object");
  return N(e), t;
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
const Pn = Ar.prototype;
Pn.append = function(t, n) {
  this._pairs.push([t, n]);
};
Pn.toString = function(t) {
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
function Dn(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || la;
  v.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = v.isURLSearchParams(t) ? t.toString() : new Ar(t, n).toString(r), o) {
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
const Fn = {
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
}, Er = typeof window < "u" && typeof document < "u", pr = typeof navigator == "object" && navigator || void 0, pa = Er && (!pr || ["ReactNative", "NativeScript", "NS"].indexOf(pr.product) < 0), ma = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ha = Er && window.location.href || "http://localhost", ga = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Er,
  hasStandardBrowserEnv: pa,
  hasStandardBrowserWebWorkerEnv: ma,
  navigator: pr,
  origin: ha
}, Symbol.toStringTag, { value: "Module" })), de = {
  ...ga,
  ...fa
};
function ya(e, t) {
  return Bt(e, new de.classes.URLSearchParams(), {
    visitor: function(n, r, s, o) {
      return de.isNode && v.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function ba(e) {
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
function kn(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const l = Number.isFinite(+i), f = o >= n.length;
    return i = !i && v.isArray(s) ? s.length : i, f ? (v.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !l) : ((!s[i] || !v.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && v.isArray(s[i]) && (s[i] = xa(s[i])), !l);
  }
  if (v.isFormData(e) && v.isFunction(e.entries)) {
    const n = {};
    return v.forEachEntry(e, (r, s) => {
      t(ba(r), s, n, 0);
    }), n;
  }
  return null;
}
function wa(e, t, n) {
  if (v.isString(e))
    try {
      return (t || JSON.parse)(e), v.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const gt = {
  transitional: Fn,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = v.isObject(t);
    if (o && v.isHTMLForm(t) && (t = new FormData(t)), v.isFormData(t))
      return s ? JSON.stringify(kn(t)) : t;
    if (v.isArrayBuffer(t) || v.isBuffer(t) || v.isStream(t) || v.isFile(t) || v.isBlob(t) || v.isReadableStream(t))
      return t;
    if (v.isArrayBufferView(t))
      return t.buffer;
    if (v.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return ya(t, this.formSerializer).toString();
      if ((l = v.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return Bt(
          l ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), wa(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || gt.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
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
    FormData: de.classes.FormData,
    Blob: de.classes.Blob
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
  gt.headers[e] = {};
});
const va = v.toObjectSet([
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
function at(e) {
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
const Na = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Zt(e, t, n, r, s) {
  if (v.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!v.isString(t)) {
    if (v.isString(r))
      return t.indexOf(r) !== -1;
    if (v.isRegExp(r))
      return r.test(t);
  }
}
function Ta(e) {
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
let we = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(l, f, u) {
      const d = at(f);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const y = v.findKey(s, d);
      (!y || s[y] === void 0 || u === !0 || u === void 0 && s[y] !== !1) && (s[y || f] = Ct(l));
    }
    const i = (l, f) => v.forEach(l, (u, d) => o(u, d, f));
    if (v.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (v.isString(t) && (t = t.trim()) && !Na(t))
      i(Aa(t), n);
    else if (v.isObject(t) && v.isIterable(t)) {
      let l = {}, f, u;
      for (const d of t) {
        if (!v.isArray(d))
          throw TypeError("Object iterator must return a key-value pair");
        l[u = d[0]] = (f = l[u]) ? v.isArray(f) ? [...f, d[1]] : [f, d[1]] : d[1];
      }
      i(l, n);
    } else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = at(t), t) {
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
    if (t = at(t), t) {
      const r = v.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Zt(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = at(i), i) {
        const l = v.findKey(r, i);
        l && (!n || Zt(r, r[l], l, n)) && (delete r[l], s = !0);
      }
    }
    return v.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Zt(this, this[o], o, t, !0)) && (delete this[o], s = !0);
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
      const l = t ? Ta(o) : String(o).trim();
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
      const l = at(i);
      r[l] || (ja(s, i), r[l] = !0);
    }
    return v.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
we.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
v.reduceDescriptors(we.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
v.freezeMethods(we);
function Jt(e, t) {
  const n = this || gt, r = t || n, s = we.from(r.headers);
  let o = r.data;
  return v.forEach(e, function(l) {
    o = l.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Mn(e) {
  return !!(e && e.__CANCEL__);
}
function Je(e, t, n) {
  V.call(this, e ?? "canceled", V.ERR_CANCELED, t, n), this.name = "CanceledError";
}
v.inherits(Je, V, {
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
function Sa(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Ra(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const u = Date.now(), d = r[o];
    i || (i = u), n[s] = f, r[s] = u;
    let y = o, h = 0;
    for (; y !== s; )
      h += n[y++], y = y % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), u - i < t)
      return;
    const N = d && u - d;
    return N ? Math.round(h * 1e3 / N) : void 0;
  };
}
function _a(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const i = (u, d = Date.now()) => {
    n = d, s = null, o && (clearTimeout(o), o = null), e(...u);
  };
  return [(...u) => {
    const d = Date.now(), y = d - n;
    y >= r ? i(u, d) : (s = u, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - y)));
  }, () => s && i(s)];
}
const It = (e, t, n = 3) => {
  let r = 0;
  const s = Ra(50, 250);
  return _a((o) => {
    const i = o.loaded, l = o.lengthComputable ? o.total : void 0, f = i - r, u = s(f), d = i <= l;
    r = i;
    const y = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: f,
      rate: u || void 0,
      estimated: u && l && d ? (l - i) / u : void 0,
      event: o,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(y);
  }, n);
}, Zr = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Jr = (e) => (...t) => v.asap(() => e(...t)), Ca = de.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, de.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(de.origin),
  de.navigator && /(msie|trident)/i.test(de.navigator.userAgent)
) : () => !0, Oa = de.hasStandardBrowserEnv ? (
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
function La(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ia(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Bn(e, t, n) {
  let r = !La(t);
  return e && (r || n == !1) ? Ia(e, t) : t;
}
const en = (e) => e instanceof we ? { ...e } : e;
function We(e, t) {
  t = t || {};
  const n = {};
  function r(u, d, y, h) {
    return v.isPlainObject(u) && v.isPlainObject(d) ? v.merge.call({ caseless: h }, u, d) : v.isPlainObject(d) ? v.merge({}, d) : v.isArray(d) ? d.slice() : d;
  }
  function s(u, d, y, h) {
    if (v.isUndefined(d)) {
      if (!v.isUndefined(u))
        return r(void 0, u, y, h);
    } else return r(u, d, y, h);
  }
  function o(u, d) {
    if (!v.isUndefined(d))
      return r(void 0, d);
  }
  function i(u, d) {
    if (v.isUndefined(d)) {
      if (!v.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, d);
  }
  function l(u, d, y) {
    if (y in t)
      return r(u, d);
    if (y in e)
      return r(void 0, u);
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
    headers: (u, d, y) => s(en(u), en(d), y, !0)
  };
  return v.forEach(Object.keys({ ...e, ...t }), function(d) {
    const y = f[d] || s, h = y(e[d], t[d], d);
    v.isUndefined(h) && y !== l || (n[d] = h);
  }), n;
}
const zn = (e) => {
  const t = We({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: l } = t;
  t.headers = i = we.from(i), t.url = Dn(Bn(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), l && i.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let f;
  if (v.isFormData(n)) {
    if (de.hasStandardBrowserEnv || de.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((f = i.getContentType()) !== !1) {
      const [u, ...d] = f ? f.split(";").map((y) => y.trim()).filter(Boolean) : [];
      i.setContentType([u || "multipart/form-data", ...d].join("; "));
    }
  }
  if (de.hasStandardBrowserEnv && (r && v.isFunction(r) && (r = r(t)), r || r !== !1 && Ca(t.url))) {
    const u = s && o && Oa.read(o);
    u && i.set(s, u);
  }
  return t;
}, Pa = typeof XMLHttpRequest < "u", Da = Pa && function(e) {
  return new Promise(function(n, r) {
    const s = zn(e);
    let o = s.data;
    const i = we.from(s.headers).normalize();
    let { responseType: l, onUploadProgress: f, onDownloadProgress: u } = s, d, y, h, N, g;
    function E() {
      N && N(), g && g(), s.cancelToken && s.cancelToken.unsubscribe(d), s.signal && s.signal.removeEventListener("abort", d);
    }
    let w = new XMLHttpRequest();
    w.open(s.method.toUpperCase(), s.url, !0), w.timeout = s.timeout;
    function b() {
      if (!w)
        return;
      const x = we.from(
        "getAllResponseHeaders" in w && w.getAllResponseHeaders()
      ), S = {
        data: !l || l === "text" || l === "json" ? w.responseText : w.response,
        status: w.status,
        statusText: w.statusText,
        headers: x,
        config: e,
        request: w
      };
      $n(function(F) {
        n(F), E();
      }, function(F) {
        r(F), E();
      }, S), w = null;
    }
    "onloadend" in w ? w.onloadend = b : w.onreadystatechange = function() {
      !w || w.readyState !== 4 || w.status === 0 && !(w.responseURL && w.responseURL.indexOf("file:") === 0) || setTimeout(b);
    }, w.onabort = function() {
      w && (r(new V("Request aborted", V.ECONNABORTED, e, w)), w = null);
    }, w.onerror = function() {
      r(new V("Network Error", V.ERR_NETWORK, e, w)), w = null;
    }, w.ontimeout = function() {
      let A = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const S = s.transitional || Fn;
      s.timeoutErrorMessage && (A = s.timeoutErrorMessage), r(new V(
        A,
        S.clarifyTimeoutError ? V.ETIMEDOUT : V.ECONNABORTED,
        e,
        w
      )), w = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in w && v.forEach(i.toJSON(), function(A, S) {
      w.setRequestHeader(S, A);
    }), v.isUndefined(s.withCredentials) || (w.withCredentials = !!s.withCredentials), l && l !== "json" && (w.responseType = s.responseType), u && ([h, g] = It(u, !0), w.addEventListener("progress", h)), f && w.upload && ([y, N] = It(f), w.upload.addEventListener("progress", y), w.upload.addEventListener("loadend", N)), (s.cancelToken || s.signal) && (d = (x) => {
      w && (r(!x || x.type ? new Je(null, e, w) : x), w.abort(), w = null);
    }, s.cancelToken && s.cancelToken.subscribe(d), s.signal && (s.signal.aborted ? d() : s.signal.addEventListener("abort", d)));
    const m = Sa(s.url);
    if (m && de.protocols.indexOf(m) === -1) {
      r(new V("Unsupported protocol " + m + ":", V.ERR_BAD_REQUEST, e));
      return;
    }
    w.send(o || null);
  });
}, Fa = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const o = function(u) {
      if (!s) {
        s = !0, l();
        const d = u instanceof Error ? u : this.reason;
        r.abort(d instanceof V ? d : new Je(d instanceof Error ? d.message : d));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new V(`timeout ${t} of ms exceeded`, V.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(o) : u.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", o));
    const { signal: f } = r;
    return f.unsubscribe = () => v.asap(l), f;
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
  let o = 0, i, l = (f) => {
    i || (i = !0, r && r(f));
  };
  return new ReadableStream({
    async pull(f) {
      try {
        const { done: u, value: d } = await s.next();
        if (u) {
          l(), f.close();
          return;
        }
        let y = d.byteLength;
        if (n) {
          let h = o += y;
          n(h);
        }
        f.enqueue(new Uint8Array(d));
      } catch (u) {
        throw l(u), u;
      }
    },
    cancel(f) {
      return l(f), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, zt = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Un = zt && typeof ReadableStream == "function", Ba = zt && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Hn = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, za = Un && Hn(() => {
  let e = !1;
  const t = new Request(de.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), rn = 64 * 1024, mr = Un && Hn(() => v.isReadableStream(new Response("").body)), Pt = {
  stream: mr && ((e) => e.body)
};
zt && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Pt[t] && (Pt[t] = v.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new V(`Response type '${t}' is not supported`, V.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Ua = async (e) => {
  if (e == null)
    return 0;
  if (v.isBlob(e))
    return e.size;
  if (v.isSpecCompliantForm(e))
    return (await new Request(de.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (v.isArrayBufferView(e) || v.isArrayBuffer(e))
    return e.byteLength;
  if (v.isURLSearchParams(e) && (e = e + ""), v.isString(e))
    return (await Ba(e)).byteLength;
}, Ha = async (e, t) => {
  const n = v.toFiniteNumber(e.getContentLength());
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
    onUploadProgress: f,
    responseType: u,
    headers: d,
    withCredentials: y = "same-origin",
    fetchOptions: h
  } = zn(e);
  u = u ? (u + "").toLowerCase() : "text";
  let N = Fa([s, o && o.toAbortSignal()], i), g;
  const E = N && N.unsubscribe && (() => {
    N.unsubscribe();
  });
  let w;
  try {
    if (f && za && n !== "get" && n !== "head" && (w = await Ha(d, r)) !== 0) {
      let S = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), L;
      if (v.isFormData(r) && (L = S.headers.get("content-type")) && d.setContentType(L), S.body) {
        const [F, P] = Zr(
          w,
          It(Jr(f))
        );
        r = tn(S.body, rn, F, P);
      }
    }
    v.isString(y) || (y = y ? "include" : "omit");
    const b = "credentials" in Request.prototype;
    g = new Request(t, {
      ...h,
      signal: N,
      method: n.toUpperCase(),
      headers: d.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: b ? y : void 0
    });
    let m = await fetch(g, h);
    const x = mr && (u === "stream" || u === "response");
    if (mr && (l || x && E)) {
      const S = {};
      ["status", "statusText", "headers"].forEach((H) => {
        S[H] = m[H];
      });
      const L = v.toFiniteNumber(m.headers.get("content-length")), [F, P] = l && Zr(
        L,
        It(Jr(l), !0)
      ) || [];
      m = new Response(
        tn(m.body, rn, F, () => {
          P && P(), E && E();
        }),
        S
      );
    }
    u = u || "text";
    let A = await Pt[v.findKey(Pt, u) || "text"](m, e);
    return !x && E && E(), await new Promise((S, L) => {
      $n(S, L, {
        data: A,
        headers: we.from(m.headers),
        status: m.status,
        statusText: m.statusText,
        config: e,
        request: g
      });
    });
  } catch (b) {
    throw E && E(), b && b.name === "TypeError" && /Load failed|fetch/i.test(b.message) ? Object.assign(
      new V("Network Error", V.ERR_NETWORK, e, g),
      {
        cause: b.cause || b
      }
    ) : V.from(b, b && b.code, e, g);
  }
}), hr = {
  http: aa,
  xhr: Da,
  fetch: Ga
};
v.forEach(hr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const nn = (e) => `- ${e}`, Wa = (e) => v.isFunction(e) || e === null || e === !1, Gn = {
  getAdapter: (e) => {
    e = v.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !Wa(n) && (r = hr[(i = String(n)).toLowerCase()], r === void 0))
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
  adapters: hr
};
function er(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Je(null, e);
}
function sn(e) {
  return er(e), e.headers = we.from(e.headers), e.data = Jt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Gn.getAdapter(e.adapter || gt.adapter)(e).then(function(r) {
    return er(e), r.data = Jt.call(
      e,
      e.transformResponse,
      r
    ), r.headers = we.from(r.headers), r;
  }, function(r) {
    return Mn(r) || (er(e), r && r.response && (r.response.data = Jt.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = we.from(r.response.headers))), Promise.reject(r);
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
function qa(e, t, n) {
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
  assertOptions: qa,
  validators: Ut
}, Pe = Ot.validators;
let Ge = class {
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = We(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && Ot.assertOptions(r, {
      silentJSONParsing: Pe.transitional(Pe.boolean),
      forcedJSONParsing: Pe.transitional(Pe.boolean),
      clarifyTimeoutError: Pe.transitional(Pe.boolean)
    }, !1), s != null && (v.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Ot.assertOptions(s, {
      encode: Pe.function,
      serialize: Pe.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Ot.assertOptions(n, {
      baseUrl: Pe.spelling("baseURL"),
      withXsrfToken: Pe.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && v.merge(
      o.common,
      o[n.method]
    );
    o && v.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete o[g];
      }
    ), n.headers = we.concat(i, o);
    const l = [];
    let f = !0;
    this.interceptors.request.forEach(function(E) {
      typeof E.runWhen == "function" && E.runWhen(n) === !1 || (f = f && E.synchronous, l.unshift(E.fulfilled, E.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(E) {
      u.push(E.fulfilled, E.rejected);
    });
    let d, y = 0, h;
    if (!f) {
      const g = [sn.bind(this), void 0];
      for (g.unshift(...l), g.push(...u), h = g.length, d = Promise.resolve(n); y < h; )
        d = d.then(g[y++], g[y++]);
      return d;
    }
    h = l.length;
    let N = n;
    for (y = 0; y < h; ) {
      const g = l[y++], E = l[y++];
      try {
        N = g(N);
      } catch (w) {
        E.call(this, w);
        break;
      }
    }
    try {
      d = sn.call(this, N);
    } catch (g) {
      return Promise.reject(g);
    }
    for (y = 0, h = u.length; y < h; )
      d = d.then(u[y++], u[y++]);
    return d;
  }
  getUri(t) {
    t = We(this.defaults, t);
    const n = Bn(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Dn(n, t.params, t.paramsSerializer);
  }
};
v.forEach(["delete", "get", "head", "options"], function(t) {
  Ge.prototype[t] = function(n, r) {
    return this.request(We(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
v.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, l) {
      return this.request(We(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  Ge.prototype[t] = n(), Ge.prototype[t + "Form"] = n(!0);
});
let Ka = class qn {
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
      r.reason || (r.reason = new Je(o, i, l), n(r.reason));
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
function Va(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Ya(e) {
  return v.isObject(e) && e.isAxiosError === !0;
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
  const t = new Ge(e), n = En(Ge.prototype.request, t);
  return v.extend(n, Ge.prototype, t, { allOwnKeys: !0 }), v.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Kn(We(e, s));
  }, n;
}
const U = Kn(gt);
U.Axios = Ge;
U.CanceledError = Je;
U.CancelToken = Ka;
U.isCancel = Mn;
U.VERSION = Wn;
U.toFormData = Bt;
U.AxiosError = V;
U.Cancel = U.CanceledError;
U.all = function(t) {
  return Promise.all(t);
};
U.spread = Va;
U.isAxiosError = Ya;
U.mergeConfig = We;
U.AxiosHeaders = we;
U.formToJSON = (e) => kn(v.isHTMLForm(e) ? new FormData(e) : e);
U.getAdapter = Gn.getAdapter;
U.HttpStatusCode = gr;
U.default = U;
const {
  Axios: fi,
  AxiosError: pi,
  CanceledError: mi,
  isCancel: hi,
  CancelToken: gi,
  VERSION: yi,
  all: bi,
  Cancel: xi,
  isAxiosError: wi,
  spread: vi,
  toFormData: Ai,
  AxiosHeaders: Ei,
  HttpStatusCode: Ni,
  formToJSON: Ti,
  getAdapter: ji,
  mergeConfig: Si
} = U;
/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */
const {
  entries: Vn,
  setPrototypeOf: on,
  isFrozen: Xa,
  getPrototypeOf: Qa,
  getOwnPropertyDescriptor: Za
} = Object;
let {
  freeze: pe,
  seal: Te,
  create: yr
} = Object, {
  apply: br,
  construct: xr
} = typeof Reflect < "u" && Reflect;
pe || (pe = function(t) {
  return t;
});
Te || (Te = function(t) {
  return t;
});
br || (br = function(t, n) {
  for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    s[o - 2] = arguments[o];
  return t.apply(n, s);
});
xr || (xr = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return new t(...r);
});
const jt = me(Array.prototype.forEach), Ja = me(Array.prototype.lastIndexOf), ln = me(Array.prototype.pop), ot = me(Array.prototype.push), eo = me(Array.prototype.splice), Lt = me(String.prototype.toLowerCase), tr = me(String.prototype.toString), rr = me(String.prototype.match), it = me(String.prototype.replace), to = me(String.prototype.indexOf), ro = me(String.prototype.trim), Re = me(Object.prototype.hasOwnProperty), fe = me(RegExp.prototype.test), lt = no(TypeError);
function me(e) {
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
    return xr(e, n);
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
      o !== s && (Xa(t) || (t[r] = o), s = o);
    }
    e[s] = !0;
  }
  return e;
}
function so(e) {
  for (let t = 0; t < e.length; t++)
    Re(e, t) || (e[t] = null);
  return e;
}
function De(e) {
  const t = yr(null);
  for (const [n, r] of Vn(e))
    Re(e, n) && (Array.isArray(r) ? t[n] = so(r) : r && typeof r == "object" && r.constructor === Object ? t[n] = De(r) : t[n] = r);
  return t;
}
function ct(e, t) {
  for (; e !== null; ) {
    const r = Za(e, t);
    if (r) {
      if (r.get)
        return me(r.get);
      if (typeof r.value == "function")
        return me(r.value);
    }
    e = Qa(e);
  }
  function n() {
    return null;
  }
  return n;
}
const cn = pe(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), nr = pe(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), sr = pe(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), ao = pe(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ar = pe(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), oo = pe(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), un = pe(["#text"]), dn = pe(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), or = pe(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), fn = pe(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), St = pe(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), io = Te(/\{\{[\w\W]*|[\w\W]*\}\}/gm), lo = Te(/<%[\w\W]*|[\w\W]*%>/gm), co = Te(/\$\{[\w\W]*/gm), uo = Te(/^data-[\-\w.\u00B7-\uFFFF]+$/), fo = Te(/^aria-[\-\w]+$/), Yn = Te(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), po = Te(/^(?:\w+script|data):/i), mo = Te(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Xn = Te(/^html$/i), ho = Te(/^[a-z][.\w]*(-[.\w]+)+$/i);
var pn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: fo,
  ATTR_WHITESPACE: mo,
  CUSTOM_ELEMENT: ho,
  DATA_ATTR: uo,
  DOCTYPE_NAME: Xn,
  ERB_EXPR: lo,
  IS_ALLOWED_URI: Yn,
  IS_SCRIPT_OR_DATA: po,
  MUSTACHE_EXPR: io,
  TMPLIT_EXPR: co
});
const ut = {
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
}, mn = function() {
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
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : go();
  const t = (z) => Qn(z);
  if (t.version = "3.3.1", t.removed = [], !e || !e.document || e.document.nodeType !== ut.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: n
  } = e;
  const r = n, s = r.currentScript, {
    DocumentFragment: o,
    HTMLTemplateElement: i,
    Node: l,
    Element: f,
    NodeFilter: u,
    NamedNodeMap: d = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: y,
    DOMParser: h,
    trustedTypes: N
  } = e, g = f.prototype, E = ct(g, "cloneNode"), w = ct(g, "remove"), b = ct(g, "nextSibling"), m = ct(g, "childNodes"), x = ct(g, "parentNode");
  if (typeof i == "function") {
    const z = n.createElement("template");
    z.content && z.content.ownerDocument && (n = z.content.ownerDocument);
  }
  let A, S = "";
  const {
    implementation: L,
    createNodeIterator: F,
    createDocumentFragment: P,
    getElementsByTagName: H
  } = n, {
    importNode: C
  } = r;
  let p = mn();
  t.isSupported = typeof Vn == "function" && typeof x == "function" && L && L.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: k,
    ERB_EXPR: K,
    TMPLIT_EXPR: Q,
    DATA_ATTR: ne,
    ARIA_ATTR: te,
    IS_SCRIPT_OR_DATA: ve,
    ATTR_WHITESPACE: je,
    CUSTOM_ELEMENT: Oe
  } = pn;
  let {
    IS_ALLOWED_URI: T
  } = pn, M = null;
  const J = X({}, [...cn, ...nr, ...sr, ...ar, ...un]);
  let R = null;
  const O = X({}, [...dn, ...or, ...fn, ...St]);
  let j = Object.seal(yr(null, {
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
  })), D = null, Y = null;
  const q = Object.seal(yr(null, {
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
  let I = !0, B = !0, G = !1, W = !0, Z = !1, oe = !0, ee = !1, Se = !1, Ae = !1, Ee = !1, $e = !1, qe = !1, et = !0, wt = !1;
  const os = "user-content-";
  let Gt = !0, tt = !1, Ke = {}, Le = null;
  const Wt = X({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let _r = null;
  const Cr = X({}, ["audio", "video", "img", "source", "image", "track"]);
  let qt = null;
  const Or = X({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), vt = "http://www.w3.org/1998/Math/MathML", At = "http://www.w3.org/2000/svg", Fe = "http://www.w3.org/1999/xhtml";
  let Ve = Fe, Kt = !1, Vt = null;
  const is = X({}, [vt, At, Fe], tr);
  let Et = X({}, ["mi", "mo", "mn", "ms", "mtext"]), Nt = X({}, ["annotation-xml"]);
  const ls = X({}, ["title", "style", "font", "a", "script"]);
  let rt = null;
  const cs = ["application/xhtml+xml", "text/html"], us = "text/html";
  let ie = null, Ye = null;
  const ds = n.createElement("form"), Lr = function(c) {
    return c instanceof RegExp || c instanceof Function;
  }, Yt = function() {
    let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Ye && Ye === c)) {
      if ((!c || typeof c != "object") && (c = {}), c = De(c), rt = // eslint-disable-next-line unicorn/prefer-includes
      cs.indexOf(c.PARSER_MEDIA_TYPE) === -1 ? us : c.PARSER_MEDIA_TYPE, ie = rt === "application/xhtml+xml" ? tr : Lt, M = Re(c, "ALLOWED_TAGS") ? X({}, c.ALLOWED_TAGS, ie) : J, R = Re(c, "ALLOWED_ATTR") ? X({}, c.ALLOWED_ATTR, ie) : O, Vt = Re(c, "ALLOWED_NAMESPACES") ? X({}, c.ALLOWED_NAMESPACES, tr) : is, qt = Re(c, "ADD_URI_SAFE_ATTR") ? X(De(Or), c.ADD_URI_SAFE_ATTR, ie) : Or, _r = Re(c, "ADD_DATA_URI_TAGS") ? X(De(Cr), c.ADD_DATA_URI_TAGS, ie) : Cr, Le = Re(c, "FORBID_CONTENTS") ? X({}, c.FORBID_CONTENTS, ie) : Wt, D = Re(c, "FORBID_TAGS") ? X({}, c.FORBID_TAGS, ie) : De({}), Y = Re(c, "FORBID_ATTR") ? X({}, c.FORBID_ATTR, ie) : De({}), Ke = Re(c, "USE_PROFILES") ? c.USE_PROFILES : !1, I = c.ALLOW_ARIA_ATTR !== !1, B = c.ALLOW_DATA_ATTR !== !1, G = c.ALLOW_UNKNOWN_PROTOCOLS || !1, W = c.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Z = c.SAFE_FOR_TEMPLATES || !1, oe = c.SAFE_FOR_XML !== !1, ee = c.WHOLE_DOCUMENT || !1, Ee = c.RETURN_DOM || !1, $e = c.RETURN_DOM_FRAGMENT || !1, qe = c.RETURN_TRUSTED_TYPE || !1, Ae = c.FORCE_BODY || !1, et = c.SANITIZE_DOM !== !1, wt = c.SANITIZE_NAMED_PROPS || !1, Gt = c.KEEP_CONTENT !== !1, tt = c.IN_PLACE || !1, T = c.ALLOWED_URI_REGEXP || Yn, Ve = c.NAMESPACE || Fe, Et = c.MATHML_TEXT_INTEGRATION_POINTS || Et, Nt = c.HTML_INTEGRATION_POINTS || Nt, j = c.CUSTOM_ELEMENT_HANDLING || {}, c.CUSTOM_ELEMENT_HANDLING && Lr(c.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (j.tagNameCheck = c.CUSTOM_ELEMENT_HANDLING.tagNameCheck), c.CUSTOM_ELEMENT_HANDLING && Lr(c.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (j.attributeNameCheck = c.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), c.CUSTOM_ELEMENT_HANDLING && typeof c.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (j.allowCustomizedBuiltInElements = c.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Z && (B = !1), $e && (Ee = !0), Ke && (M = X({}, un), R = [], Ke.html === !0 && (X(M, cn), X(R, dn)), Ke.svg === !0 && (X(M, nr), X(R, or), X(R, St)), Ke.svgFilters === !0 && (X(M, sr), X(R, or), X(R, St)), Ke.mathMl === !0 && (X(M, ar), X(R, fn), X(R, St))), c.ADD_TAGS && (typeof c.ADD_TAGS == "function" ? q.tagCheck = c.ADD_TAGS : (M === J && (M = De(M)), X(M, c.ADD_TAGS, ie))), c.ADD_ATTR && (typeof c.ADD_ATTR == "function" ? q.attributeCheck = c.ADD_ATTR : (R === O && (R = De(R)), X(R, c.ADD_ATTR, ie))), c.ADD_URI_SAFE_ATTR && X(qt, c.ADD_URI_SAFE_ATTR, ie), c.FORBID_CONTENTS && (Le === Wt && (Le = De(Le)), X(Le, c.FORBID_CONTENTS, ie)), c.ADD_FORBID_CONTENTS && (Le === Wt && (Le = De(Le)), X(Le, c.ADD_FORBID_CONTENTS, ie)), Gt && (M["#text"] = !0), ee && X(M, ["html", "head", "body"]), M.table && (X(M, ["tbody"]), delete D.tbody), c.TRUSTED_TYPES_POLICY) {
        if (typeof c.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw lt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof c.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw lt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        A = c.TRUSTED_TYPES_POLICY, S = A.createHTML("");
      } else
        A === void 0 && (A = yo(N, s)), A !== null && typeof S == "string" && (S = A.createHTML(""));
      pe && pe(c), Ye = c;
    }
  }, Ir = X({}, [...nr, ...sr, ...ao]), Pr = X({}, [...ar, ...oo]), fs = function(c) {
    let _ = x(c);
    (!_ || !_.tagName) && (_ = {
      namespaceURI: Ve,
      tagName: "template"
    });
    const $ = Lt(c.tagName), se = Lt(_.tagName);
    return Vt[c.namespaceURI] ? c.namespaceURI === At ? _.namespaceURI === Fe ? $ === "svg" : _.namespaceURI === vt ? $ === "svg" && (se === "annotation-xml" || Et[se]) : !!Ir[$] : c.namespaceURI === vt ? _.namespaceURI === Fe ? $ === "math" : _.namespaceURI === At ? $ === "math" && Nt[se] : !!Pr[$] : c.namespaceURI === Fe ? _.namespaceURI === At && !Nt[se] || _.namespaceURI === vt && !Et[se] ? !1 : !Pr[$] && (ls[$] || !Ir[$]) : !!(rt === "application/xhtml+xml" && Vt[c.namespaceURI]) : !1;
  }, Ie = function(c) {
    ot(t.removed, {
      element: c
    });
    try {
      x(c).removeChild(c);
    } catch {
      w(c);
    }
  }, Be = function(c, _) {
    try {
      ot(t.removed, {
        attribute: _.getAttributeNode(c),
        from: _
      });
    } catch {
      ot(t.removed, {
        attribute: null,
        from: _
      });
    }
    if (_.removeAttribute(c), c === "is")
      if (Ee || $e)
        try {
          Ie(_);
        } catch {
        }
      else
        try {
          _.setAttribute(c, "");
        } catch {
        }
  }, Dr = function(c) {
    let _ = null, $ = null;
    if (Ae)
      c = "<remove></remove>" + c;
    else {
      const ae = rr(c, /^[\r\n\t ]+/);
      $ = ae && ae[0];
    }
    rt === "application/xhtml+xml" && Ve === Fe && (c = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + c + "</body></html>");
    const se = A ? A.createHTML(c) : c;
    if (Ve === Fe)
      try {
        _ = new h().parseFromString(se, rt);
      } catch {
      }
    if (!_ || !_.documentElement) {
      _ = L.createDocument(Ve, "template", null);
      try {
        _.documentElement.innerHTML = Kt ? S : se;
      } catch {
      }
    }
    const ue = _.body || _.documentElement;
    return c && $ && ue.insertBefore(n.createTextNode($), ue.childNodes[0] || null), Ve === Fe ? H.call(_, ee ? "html" : "body")[0] : ee ? _.documentElement : ue;
  }, Fr = function(c) {
    return F.call(
      c.ownerDocument || c,
      c,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null
    );
  }, Xt = function(c) {
    return c instanceof y && (typeof c.nodeName != "string" || typeof c.textContent != "string" || typeof c.removeChild != "function" || !(c.attributes instanceof d) || typeof c.removeAttribute != "function" || typeof c.setAttribute != "function" || typeof c.namespaceURI != "string" || typeof c.insertBefore != "function" || typeof c.hasChildNodes != "function");
  }, kr = function(c) {
    return typeof l == "function" && c instanceof l;
  };
  function ke(z, c, _) {
    jt(z, ($) => {
      $.call(t, c, _, Ye);
    });
  }
  const Mr = function(c) {
    let _ = null;
    if (ke(p.beforeSanitizeElements, c, null), Xt(c))
      return Ie(c), !0;
    const $ = ie(c.nodeName);
    if (ke(p.uponSanitizeElement, c, {
      tagName: $,
      allowedTags: M
    }), oe && c.hasChildNodes() && !kr(c.firstElementChild) && fe(/<[/\w!]/g, c.innerHTML) && fe(/<[/\w!]/g, c.textContent) || c.nodeType === ut.progressingInstruction || oe && c.nodeType === ut.comment && fe(/<[/\w]/g, c.data))
      return Ie(c), !0;
    if (!(q.tagCheck instanceof Function && q.tagCheck($)) && (!M[$] || D[$])) {
      if (!D[$] && Br($) && (j.tagNameCheck instanceof RegExp && fe(j.tagNameCheck, $) || j.tagNameCheck instanceof Function && j.tagNameCheck($)))
        return !1;
      if (Gt && !Le[$]) {
        const se = x(c) || c.parentNode, ue = m(c) || c.childNodes;
        if (ue && se) {
          const ae = ue.length;
          for (let he = ae - 1; he >= 0; --he) {
            const Me = E(ue[he], !0);
            Me.__removalCount = (c.__removalCount || 0) + 1, se.insertBefore(Me, b(c));
          }
        }
      }
      return Ie(c), !0;
    }
    return c instanceof f && !fs(c) || ($ === "noscript" || $ === "noembed" || $ === "noframes") && fe(/<\/no(script|embed|frames)/i, c.innerHTML) ? (Ie(c), !0) : (Z && c.nodeType === ut.text && (_ = c.textContent, jt([k, K, Q], (se) => {
      _ = it(_, se, " ");
    }), c.textContent !== _ && (ot(t.removed, {
      element: c.cloneNode()
    }), c.textContent = _)), ke(p.afterSanitizeElements, c, null), !1);
  }, $r = function(c, _, $) {
    if (et && (_ === "id" || _ === "name") && ($ in n || $ in ds))
      return !1;
    if (!(B && !Y[_] && fe(ne, _))) {
      if (!(I && fe(te, _))) {
        if (!(q.attributeCheck instanceof Function && q.attributeCheck(_, c))) {
          if (!R[_] || Y[_]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(Br(c) && (j.tagNameCheck instanceof RegExp && fe(j.tagNameCheck, c) || j.tagNameCheck instanceof Function && j.tagNameCheck(c)) && (j.attributeNameCheck instanceof RegExp && fe(j.attributeNameCheck, _) || j.attributeNameCheck instanceof Function && j.attributeNameCheck(_, c)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              _ === "is" && j.allowCustomizedBuiltInElements && (j.tagNameCheck instanceof RegExp && fe(j.tagNameCheck, $) || j.tagNameCheck instanceof Function && j.tagNameCheck($)))
            ) return !1;
          } else if (!qt[_]) {
            if (!fe(T, it($, je, ""))) {
              if (!((_ === "src" || _ === "xlink:href" || _ === "href") && c !== "script" && to($, "data:") === 0 && _r[c])) {
                if (!(G && !fe(ve, it($, je, "")))) {
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
  }, Br = function(c) {
    return c !== "annotation-xml" && rr(c, Oe);
  }, zr = function(c) {
    ke(p.beforeSanitizeAttributes, c, null);
    const {
      attributes: _
    } = c;
    if (!_ || Xt(c))
      return;
    const $ = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: R,
      forceKeepAttr: void 0
    };
    let se = _.length;
    for (; se--; ) {
      const ue = _[se], {
        name: ae,
        namespaceURI: he,
        value: Me
      } = ue, Xe = ie(ae), Qt = Me;
      let le = ae === "value" ? Qt : ro(Qt);
      if ($.attrName = Xe, $.attrValue = le, $.keepAttr = !0, $.forceKeepAttr = void 0, ke(p.uponSanitizeAttribute, c, $), le = $.attrValue, wt && (Xe === "id" || Xe === "name") && (Be(ae, c), le = os + le), oe && fe(/((--!?|])>)|<\/(style|title|textarea)/i, le)) {
        Be(ae, c);
        continue;
      }
      if (Xe === "attributename" && rr(le, "href")) {
        Be(ae, c);
        continue;
      }
      if ($.forceKeepAttr)
        continue;
      if (!$.keepAttr) {
        Be(ae, c);
        continue;
      }
      if (!W && fe(/\/>/i, le)) {
        Be(ae, c);
        continue;
      }
      Z && jt([k, K, Q], (Hr) => {
        le = it(le, Hr, " ");
      });
      const Ur = ie(c.nodeName);
      if (!$r(Ur, Xe, le)) {
        Be(ae, c);
        continue;
      }
      if (A && typeof N == "object" && typeof N.getAttributeType == "function" && !he)
        switch (N.getAttributeType(Ur, Xe)) {
          case "TrustedHTML": {
            le = A.createHTML(le);
            break;
          }
          case "TrustedScriptURL": {
            le = A.createScriptURL(le);
            break;
          }
        }
      if (le !== Qt)
        try {
          he ? c.setAttributeNS(he, ae, le) : c.setAttribute(ae, le), Xt(c) ? Ie(c) : ln(t.removed);
        } catch {
          Be(ae, c);
        }
    }
    ke(p.afterSanitizeAttributes, c, null);
  }, ps = function z(c) {
    let _ = null;
    const $ = Fr(c);
    for (ke(p.beforeSanitizeShadowDOM, c, null); _ = $.nextNode(); )
      ke(p.uponSanitizeShadowNode, _, null), Mr(_), zr(_), _.content instanceof o && z(_.content);
    ke(p.afterSanitizeShadowDOM, c, null);
  };
  return t.sanitize = function(z) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ = null, $ = null, se = null, ue = null;
    if (Kt = !z, Kt && (z = "<!-->"), typeof z != "string" && !kr(z))
      if (typeof z.toString == "function") {
        if (z = z.toString(), typeof z != "string")
          throw lt("dirty is not a string, aborting");
      } else
        throw lt("toString is not a function");
    if (!t.isSupported)
      return z;
    if (Se || Yt(c), t.removed = [], typeof z == "string" && (tt = !1), tt) {
      if (z.nodeName) {
        const Me = ie(z.nodeName);
        if (!M[Me] || D[Me])
          throw lt("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (z instanceof l)
      _ = Dr("<!---->"), $ = _.ownerDocument.importNode(z, !0), $.nodeType === ut.element && $.nodeName === "BODY" || $.nodeName === "HTML" ? _ = $ : _.appendChild($);
    else {
      if (!Ee && !Z && !ee && // eslint-disable-next-line unicorn/prefer-includes
      z.indexOf("<") === -1)
        return A && qe ? A.createHTML(z) : z;
      if (_ = Dr(z), !_)
        return Ee ? null : qe ? S : "";
    }
    _ && Ae && Ie(_.firstChild);
    const ae = Fr(tt ? z : _);
    for (; se = ae.nextNode(); )
      Mr(se), zr(se), se.content instanceof o && ps(se.content);
    if (tt)
      return z;
    if (Ee) {
      if ($e)
        for (ue = P.call(_.ownerDocument); _.firstChild; )
          ue.appendChild(_.firstChild);
      else
        ue = _;
      return (R.shadowroot || R.shadowrootmode) && (ue = C.call(r, ue, !0)), ue;
    }
    let he = ee ? _.outerHTML : _.innerHTML;
    return ee && M["!doctype"] && _.ownerDocument && _.ownerDocument.doctype && _.ownerDocument.doctype.name && fe(Xn, _.ownerDocument.doctype.name) && (he = "<!DOCTYPE " + _.ownerDocument.doctype.name + `>
` + he), Z && jt([k, K, Q], (Me) => {
      he = it(he, Me, " ");
    }), A && qe ? A.createHTML(he) : he;
  }, t.setConfig = function() {
    let z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Yt(z), Se = !0;
  }, t.clearConfig = function() {
    Ye = null, Se = !1;
  }, t.isValidAttribute = function(z, c, _) {
    Ye || Yt({});
    const $ = ie(z), se = ie(c);
    return $r($, se, _);
  }, t.addHook = function(z, c) {
    typeof c == "function" && ot(p[z], c);
  }, t.removeHook = function(z, c) {
    if (c !== void 0) {
      const _ = Ja(p[z], c);
      return _ === -1 ? void 0 : eo(p[z], _, 1)[0];
    }
    return ln(p[z]);
  }, t.removeHooks = function(z) {
    p[z] = [];
  }, t.removeAllHooks = function() {
    p = mn();
  }, t;
}
var bo = Qn();
const xo = "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg", wo = ["jpg", "jpeg", "png", "gif", "svg", "webp"], vo = ["mp4", "webm", "ogg"], Ao = ["txt", "json", "csv"], Eo = ["pdf"], hn = ["file", "camera", "camera2", "photo", "avatar", "attachment"];
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
async function wr() {
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
function Dt(e, t = "create") {
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
const yt = {
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
function bt(e) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(e) ? e : 6;
}
const be = (e, t) => typeof e == "string" ? e.replace(
  /#(\w+)#/g,
  (n, r) => t[r] !== void 0 ? String(t[r]) : n
) : Array.isArray(e) ? e.map((n) => be(n, t)) : e && typeof e == "object" ? Object.fromEntries(
  Object.entries(e).map(([n, r]) => [
    be(n, t),
    be(r, t)
  ])
) : e, Zn = (e) => {
  const t = Array.isArray(e?.data?.data) ? e.data.data[0] : Array.isArray(e?.data) ? e.data[0] : e?.data?.data ?? e?.data;
  return t && typeof t == "object" && !Array.isArray(t) ? t : null;
}, _e = (e, t, n, r) => {
  if (!Array.isArray(n) || n.length === 0) return {};
  const s = r ?? (n[0] && typeof n[0] == "object" && "category" in n[0] ? "category" : void 0);
  if (!s) {
    const i = {};
    return n.forEach((l) => {
      const f = l[e], u = l[t];
      f != null && u != null && (i[String(f)] = String(u));
    }), i;
  }
  const o = {};
  return n.forEach((i) => {
    const l = i[s] ?? "Others", f = i[e], u = i[t];
    f == null || u == null || (o[l] || (o[l] = {}), o[l][String(f)] = String(u));
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
    i == null && (i = s.default), hn.includes(s.type ?? "") ? t[o] = Array.isArray(i) ? i : typeof i == "string" && i.length > 0 ? i.split(",").map((f) => f.trim()).filter(Boolean) : [] : s.multiple === !0 || s.type === "tags" ? t[o] = Array.isArray(i) ? i : typeof i == "string" ? i.split(",").map((f) => f.trim()).filter(Boolean) : [] : s.type === "checkbox" ? t[o] = String(i ?? "false") : s.type === "json" ? t[o] = typeof i == "object" && i !== null ? JSON.stringify(i, null, 2) : i ?? "" : s.type === "date" ? t[o] = typeof i == "string" && i.trim() ? i.slice(0, 10) : null : s.type === "time" ? typeof i == "string" ? i.includes("T") ? t[o] = i.slice(11, 16) : t[o] = i.slice(0, 5) : t[o] = "" : o === "blocked" || o === "blacklist" ? t[o] = String(i ?? "false") : t[o] = i ?? "";
    let l;
    if (hn.includes(s.type ?? "")) {
      const f = Ne.array().of(
        Ne.string()
      );
      l = s.required ? f.min(1, s.error_message || `${s.label} is required`) : f;
    } else if (s.multiple === !0 || s.type === "tags") {
      const f = Ne.array().of(Ne.string());
      l = s.required ? f.min(1, s.error_message || `${s.label} is required`) : f;
    } else s.type === "email" ? l = Ne.string().email("Invalid email") : s.type === "number" ? l = Ne.number().typeError("Must be a number") : s.type === "json" ? l = Ne.string().test("json", "Invalid JSON", (f) => {
      if (!f) return !0;
      try {
        return JSON.parse(f), !0;
      } catch {
        return !1;
      }
    }) : s.type === "date" ? l = Ne.string().nullable() : l = Ne.string();
    s?.validate && Object.entries(s.validate).forEach(([f, u]) => {
      switch (f) {
        case "email":
          u && (l = l.email("Invalid email format"));
          break;
        case "mobile":
          l = l.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          );
          break;
        case "regex":
          l = l.matches(
            new RegExp(u),
            s?.error_message || `Must match pattern: ${u}`
          );
          break;
        case "date":
          l = l.nullable().test(
            "date",
            "Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)",
            (d) => {
              if (d == null || d === "") return !0;
              const y = d.replace(/-/g, "/"), [h, N, g] = y.split("/");
              if (!h || !N || !g) return !1;
              const E = /* @__PURE__ */ new Date(`${g}-${N}-${h}`);
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
          l = Ne.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          l = Ne.number().typeError("Must be a decimal").transform((d, y) => {
            if (y == null || y === "") return;
            const h = Number(y);
            if (isNaN(h)) return d;
            if (typeof d == "number" && !isNaN(d)) {
              const N = Number(d);
              return Number.isInteger(N) ? Number(h.toFixed(N)) : h;
            }
            return h;
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
          const d = Number(u);
          isNaN(d) || (l = l.min(d, `Minimum length is ${d}`));
          break;
        }
        case "length-max": {
          const d = Number(u);
          isNaN(d) || (l = l.max(d, `Maximum length is ${d}`));
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
  return e ? Ft(e) ? Object.values(e).reduce((t, n) => (Object.assign(t, n), t), {}) : e : {};
}
const ye = (e) => {
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
function Do(e = "") {
  return e.split(".").pop()?.toLowerCase() ?? "";
}
function Fo(e) {
  return wo.includes(e) ? "image" : vo.includes(e) ? "video" : Eo.includes(e) ? "pdf" : Ao.includes(e) ? "text" : "other";
}
const yn = {
  image: "fa fa-file-image",
  pdf: "fa fa-file-pdf",
  video: "fa fa-file-video",
  text: "fa fa-file-lines",
  other: "fa fa-file"
}, ko = "__form_persist__", Jn = (e) => `${ko}:${e}`;
function Mo(e) {
  return bo.sanitize(e, {
    USE_PROFILES: { html: !0 }
  });
}
function $o(e) {
  try {
    return JSON.parse(localStorage.getItem(Jn(e)) || "{}");
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
    Jn(e),
    JSON.stringify({
      ...r,
      [t]: n
    })
  );
}
function ze(e, t, n) {
  const r = Bo(t);
  r && n && zo(n, r, e);
}
function ir(e) {
  return U.isAxiosError(e) ? e.response?.data?.message || e.message || "Something went wrong" : e instanceof Error ? e.message : typeof e == "string" ? e : "Something went wrong";
}
function lr(e) {
  return e?.data?.message ? e.data.message : e?.message ? e.message : "Operation completed successfully";
}
const es = ({
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
] }) : null, dt = (e) => ({
  Authorization: `Bearer ${e.accessToken}`
}), cr = async (e) => (await U.get(
  e.baseURL + e.dbopsGetHash,
  { headers: dt(e) }
)).data.refhash, ur = async (e, t) => (await U.post(
  e.baseURL + e.dbopsGetRefId,
  t,
  { headers: dt(e) }
)).data.refid, qo = {
  async fetch(e, t, n, r) {
    const s = await cr(e);
    let o = !1, i;
    n && (o = !0, i = n), o || (i = await ur(e, {
      operation: "fetch",
      source: t.source,
      fields: t.fields ?? {},
      datahash: s,
      srcid: r
    }));
    const l = { refid: i, datahash: s, refid1: e.refid };
    t.source?.refid && (l.refid1 = t.source?.refid);
    const f = await U.post(
      e.baseURL + e.dbopsFetch,
      l,
      { headers: dt(e) }
    );
    return f.data?.data ?? f.data;
  },
  async create(e, t, n) {
    const r = await cr(e), s = await ur(e, {
      operation: "create",
      source: t.source,
      fields: t.values,
      datahash: r,
      srcid: n
    });
    return (await U.post(
      e.baseURL + e.dbopsCreate,
      { refid: s, fields: t.values, datahash: r },
      { headers: dt(e) }
    )).data;
  },
  async update(e, t, n) {
    const r = await cr(e), s = await ur(e, {
      operation: "update",
      source: t.source,
      fields: t.values,
      datahash: r,
      srcid: n
    });
    return (await U.post(
      e.baseURL + e.dbopsUpdate,
      { refid: s, fields: t.values, datahash: r },
      { headers: dt(e) }
    )).data;
  }
};
async function Qe(e, t, n, r = void 0, s = void 0, o = {}) {
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
    let f;
    if ("type" in l && l.type === "api") {
      let h = e.name;
      typeof e.parameter == "string" && e.parameter && (h = e.parameter);
      const N = { [h]: t, refid: t };
      if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
        for (const [w, b] of Object.entries(e.parameter))
          N[w] = w === h ? t : s?.[b];
      const g = {
        method: l.method || "GET",
        url: n?.baseURL + l.endpoint,
        headers: {
          Authorization: `Bearer ${n?.accessToken}`
        },
        ...l.method === "GET" ? { params: N } : { data: N }
      }, { data: E } = await U(g);
      f = E;
    } else {
      let h;
      if (!l.queryid) {
        if (!l.table || !l.columns)
          throw new Error("SQL query requires field.table");
        const g = be(l.where ?? {}, { refid: t });
        h = {
          ...l,
          table: l.table,
          cols: l.columns,
          where: g
        };
      }
      const { data: N } = await Qe(
        n,
        h,
        l.queryid,
        t
      );
      f = N;
    }
    const u = Array.isArray(f?.results?.options) ? f?.results?.options : Array.isArray(f.data) ? f.data : Array.isArray(f.results) ? f.results : f, d = Array.isArray(u) ? u.map(ye) : [], y = _e(
      e.valueKey ?? "value",
      e.labelKey ?? "title",
      d,
      e.groupKey
    );
    r(i.target, y);
  }
}
async function ts(e, t) {
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
async function rs(e, t) {
  const n = e?.uploadURL ?? "/api/files/upload";
  return Promise.all(
    Array.from(t).map(async (r) => {
      const s = new FormData();
      return s.append("file", r), (await U.post(`${e?.baseURL}${n}`, s, {
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
  return (await U.post(
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
const ss = ({ filePath: e, sqlOpsUrls: t }) => {
  const n = e.replace(/^[^&]*&/, ""), [r, s] = ce(null), [o, i] = ce(!1), l = Do(n), f = Fo(l);
  ge(() => {
    if (!t || f !== "image" && !o) return;
    let d = !0, y = null;
    return ts(n, t).then((h) => {
      d && (y = h, s(h));
    }), () => {
      d = !1, y && URL.revokeObjectURL(y);
    };
  }, [f, o, n, t]);
  let u = n.split("/").pop();
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    f === "image" && r ? /* @__PURE__ */ a.jsx(
      "img",
      {
        src: r,
        alt: u,
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
        onKeyDown: (d) => d.key === "Enter" && i(!0),
        className: "inline-flex cursor-pointer items-center gap-1",
        title: "Click to preview",
        children: [
          Vo(f),
          /* @__PURE__ */ a.jsx("span", { className: "text-sm", children: u })
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
      r ? /* @__PURE__ */ a.jsx(Wo, { fileUrl: r, category: f }) : /* @__PURE__ */ a.jsx("div", { className: "text-center p-8", children: "Loading preview…" })
    ] }) })
  ] });
};
function xt({
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
  const f = `
    text-sm text-gray-600 break-words capitalize
  `, u = `
    block text-sm font-semibold  transition-all duration-300 text-gray-700 capitalize
  `, [d, y] = ce(
    i ?? e.options ?? {}
  ), h = re.useRef(!1);
  re.useEffect(() => {
    i && y(i);
  }, [i]);
  const N = re.useMemo(
    () => Io(d),
    [d]
  );
  re.useEffect(() => {
    let x = !0, A = e.valueKey ?? "value", S = e.labelKey ?? "title";
    return (async () => {
      let F = e?.options;
      if (F && (Array.isArray(F) && F.length > 0 || !Array.isArray(F) && Object.keys(F).length > 0)) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const k = Object.values(e.options);
          if (k.length && typeof k[0] == "string") {
            y(e.options);
            return;
          }
        }
        const C = (Array.isArray(e.options) ? e.options : [e.options]).map(ye), p = _e(
          A,
          S,
          C,
          e.groupKey
          // auto-uses `category` if present
        );
        y(p);
        return;
      }
      const P = e?.source ?? {};
      if (e.type === "dataMethod") {
        const H = e.method, C = H ? n[H] : void 0;
        if (C)
          try {
            const p = await Promise.resolve(C()), k = Array.isArray(p.data?.results?.options) ? p.data?.results?.options : Array.isArray(p?.data?.data) ? p.data.data : Array.isArray(p.data?.results) ? p.data?.results : Array.isArray(p?.data) ? p.data : p;
            if (typeof k == "object" && !Array.isArray(k)) {
              const ne = Object.values(k);
              if (ne.length && typeof ne[0] == "string") {
                y(k);
                return;
              }
            }
            const K = Array.isArray(k) ? k.map(ye) : [], Q = _e(A, S, K, e.groupKey);
            x && y(Q);
            return;
          } catch (p) {
            console.error("Method execution failed:", p), x && y({});
            return;
          }
        else {
          x && y({});
          return;
        }
      }
      if (P.type === "api" && P.endpoint)
        try {
          const H = {
            method: P.method || "GET",
            url: r?.baseURL + P.endpoint,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            },
            ...P.method === "GET" ? { params: { refid: P.refid } } : { data: { refid: P.refid } }
          }, C = await U(H), p = Array.isArray(C.data?.results?.options) ? C.data?.results?.options : Array.isArray(C?.data?.data) ? C.data.data : Array.isArray(C.data?.results) ? C.data?.results : Array.isArray(C?.data) ? C.data : C;
          if (typeof p == "object" && !Array.isArray(p)) {
            const Q = Object.values(p);
            if (Q.length && typeof Q[0] == "string") {
              y(p);
              return;
            }
          }
          const k = Array.isArray(p) ? p.map(ye) : [], K = _e(A, S, k, e.groupKey);
          x && y(K);
          return;
        } catch (H) {
          console.error("API execution failed:", H), x && y({});
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
              where: e.where ? s ? be(e.where, { refid: s }) : e.where : void 0
            };
          }
          const C = await Qe(r, H, e?.queryid, void 0, o), p = Array.isArray(C?.data?.data) ? C.data.data : Array.isArray(C?.data) ? C.data : C;
          if (typeof p == "object" && !Array.isArray(p)) {
            const Q = Object.values(p);
            if (Q.length && typeof Q[0] == "string") {
              y(p);
              return;
            }
          }
          const k = Array.isArray(p) ? p.map(ye) : [], K = _e(A, S, k, e.groupKey);
          x && y(K);
        } catch (H) {
          console.error("API fetch failed:", H);
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
  const g = e?.name ? t?.[e.name] : void 0;
  re.useEffect(() => {
    h.current || !l || !g || (h.current = !0, Ko({
      field: e,
      value: g,
      sqlOpsUrls: r,
      setFieldOptions: l,
      values: t ?? {}
    }));
  }, [g, r, l]);
  let E;
  typeof g == "string" ? e.type === "date" ? E = g.split("T")[0] : e.type === "time" ? E = g.includes("T") ? g.slice(11, 16) : g.slice(0, 5) : E = gn(g, N) : E = gn(g, N);
  const w = E == null ? "" : typeof E == "string" || typeof E == "number" ? E : JSON.stringify(E), b = Po(g), m = e.type === "richtextarea" && typeof w == "string" ? Mo(w) : null;
  return /* @__PURE__ */ a.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ a.jsx("label", { className: u, children: e?.label }),
    /* @__PURE__ */ a.jsx("div", { className: "relative", children: b ? b.type === "drawn" ? /* @__PURE__ */ a.jsx("svg", { viewBox: "0 0 300 150", className: "h-24 w-full border bg-white rounded", children: b.paths.map((x, A) => /* @__PURE__ */ a.jsx(
      "path",
      {
        d: x.d,
        stroke: x.color || "#000",
        strokeWidth: x.width || 2,
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      A
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
    ) : (e.type === "file" || e.type === "camera" || e.type === "camera2" || e.type === "attachement" || e.type === "photo" || e.type === "avatar") && E ? /* @__PURE__ */ a.jsx("div", { className: "flex flex-wrap gap-2", children: String(E).split(",").map((x) => x.trim()).filter(Boolean).map((x) => /* @__PURE__ */ a.jsx(
      ss,
      {
        sqlOpsUrls: r,
        filePath: x
      },
      x
    )) }) : e.type === "richtextarea" ? /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "tiptap border border-gray-200 min-h-[400px] max-h-[220px] overflow-auto bg-white rounded p-2 text-sm",
        dangerouslySetInnerHTML: { __html: m ?? "" }
      }
    ) : /* @__PURE__ */ a.jsx("p", { className: f, children: w }) })
  ] });
}
function as({ filePath: e, field_name: t, sqlOpsUrls: n }) {
  const [r, s] = ce(null), o = e.replace(/^[^&]*&/, "");
  return ge(() => {
    if (!open || !n) return;
    let i = !0, l = null;
    return ts(o, n).then((f) => {
      i && (l = f, s(f));
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
        l.onerror = null, l.src = xo;
      }
    }
  ) : null;
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
  methods: f
}) {
  const u = Rt(
    () => e?.fields?.find((h) => h.type === "avatar"),
    [e?.fields]
  ), d = u?.name, y = d && typeof t?.[d] == "string" ? t[d].trim() : "";
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white border border-gray-100 p-4 min-h-3/10 overflow-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    u && /* @__PURE__ */ a.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ a.jsx("div", { className: "relative w-42 h-42 p-2 rounded-sm overflow-hidden bg-gray-100 flex items-center justify-center", children: y ? /* @__PURE__ */ a.jsx(
      as,
      {
        field_name: u.name,
        filePath: y,
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
    /* @__PURE__ */ a.jsx("div", { className: `min-h-0 max-h-40 overflow-y-auto custom-scrollbar ${u ? "lg:col-span-10" : "lg:col-span-12"}`, children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: e.fields?.map((h, N) => n.includes(h.name) || h.type === "avatar" ? null : /* @__PURE__ */ a.jsx("div", { className: `hover:bg-gray-100 transition-colors duration-200 col-span-12 sm:col-span-6 ${yt[bt(Number(h.width))] || "lg:col-span-4"}`, children: /* @__PURE__ */ a.jsx(
      xt,
      {
        field: h,
        data: t ?? {},
        sqlOpsUrls: r,
        methods: f,
        refid: l,
        module_refid: i,
        setFieldOptions: s,
        ...o[h.name] ? { optionsOverride: o[h.name] } : {}
      },
      h?.name
    ) }, h.name)) }) })
  ] }) });
}
function Tr({ tabObj: e, methods: t, tabName: n, sqlOpsUrls: r, refid: s, module_refid: o, setFieldOptions: i, fieldOptions: l }) {
  const [f, u] = re.useState(null);
  return re.useEffect(() => {
    let d = !1;
    return (async () => {
      const h = e?.config;
      if (!h?.type) {
        d || u(null);
        return;
      }
      if (h.type === "method") {
        const N = h.method, g = N ? t[N] : void 0;
        if (g)
          try {
            const E = await Promise.resolve(g());
            d || u(E || null);
          } catch (E) {
            console.error("Method execution failed:", E), d || u(null);
          }
        else
          d || u(null);
      }
      if (h.type === "api")
        try {
          const N = await U({
            method: h.method || "GET",
            // GET, POST, etc.
            url: h.url,
            data: h.body || {},
            // request body
            params: h.params || {},
            // query params
            headers: h.headers || {}
            // optional headers
          });
          d || u(N.data || null);
        } catch (N) {
          console.error("API fetch failed:", N), d || u(null);
        }
      if (h.type === "sql" && s && s != "0" || h?.dbopsid) {
        if (!r) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let N = !1, g;
          h?.dbopsid && (N = !0, g = h?.dbopsid);
          const E = await U({
            method: "GET",
            url: r.baseURL + r.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            }
          });
          if (!N) {
            let m = {
              ...h
            };
            h.where && (m = {
              ...h,
              where: be(h.where, {
                refid: s
              })
            }), g = (await U({
              method: "POST",
              url: r.baseURL + r.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: m,
                fields: Dt(h.fields, r.operation),
                forcefill: h.forcefill,
                datahash: E.data.refhash,
                srcid: o
              },
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              }
            }))?.data.refid;
          }
          const w = await U({
            method: "POST",
            url: r.baseURL + r.dbopsFetch,
            data: {
              refid: g,
              datahash: E.data.refhash
            },
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            }
          }), b = Zn(w);
          d || u(b);
        } catch (N) {
          console.error("API fetch failed:", N);
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
  ]), /* @__PURE__ */ a.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: f ? Object.keys(f).map((d, y) => {
    let h = { name: d, label: d };
    return /* @__PURE__ */ a.jsx(
      "div",
      {
        className: `col-span-12 sm:col-span-6 ${yt[bt(e.width)] || "lg:col-span-2"}`,
        children: /* @__PURE__ */ a.jsx(
          xt,
          {
            field: h,
            data: f ?? {},
            methods: t,
            refid: s,
            sqlOpsUrls: r,
            setFieldOptions: i,
            ...l[h.name] ? { optionsOverride: l[h.name] } : {}
          },
          d
        )
      },
      `field-${y}`
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
  setFieldOptions: l
}) {
  const [f, u] = ce(!1), [d, y] = ce(!1), [h, N] = ce(
    i ?? e.options ?? {}
  ), [g, E] = ce(""), [w, b] = ce(0), m = He(null), x = He(null), [A, S] = ce(!1), L = He(g), F = e.disabled === !0;
  ge(() => {
    L.current = g;
  }, [g]), ge(() => {
    if (e.type !== "select" || e.multiple || e["no-option"] !== "false" || t.values[P] || !h) return;
    let j;
    if (Array.isArray(h))
      j = h[0]?.value;
    else if (!Ft(h))
      j = Object.keys(h)[0];
    else {
      const D = Object.values(h)[0];
      j = D ? Object.keys(D)[0] : void 0;
    }
    j != null && t.setFieldValue(P, String(j), !1);
  }, [h]), ge(() => {
    i && N(i);
  }, [i]), ge(() => {
    if (!A) return;
    const O = (j) => {
      const D = j.target;
      x.current?.contains(D) || m.current?.contains(D) || (S(!1), E(""));
    };
    return document.addEventListener("mousedown", O), () => {
      document.removeEventListener("mousedown", O);
    };
  }, [A]);
  const P = e.name;
  ge(() => {
    let O = !0;
    return (async () => {
      let D = e.valueKey ?? "value", Y = e.labelKey ?? "title", q = e?.options;
      if (q && (Array.isArray(q) && q.length > 0 || !Array.isArray(q) && Object.keys(q).length > 0)) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const Z = Object.values(e.options);
          if (Z.length && typeof Z[0] == "string") {
            N(e.options);
            return;
          }
        }
        const G = (Array.isArray(e.options) ? e.options : [e.options]).map(ye), W = _e(
          D,
          Y,
          G,
          e.groupKey
          // auto-uses `category` if present
        );
        N(W);
        return;
      }
      const I = e?.source ?? {};
      if (e.type === "dataMethod") {
        const B = e.method, G = B ? n[B] : void 0;
        if (G)
          try {
            const W = await G(), Z = Array.isArray(W.data?.results?.options) ? W.data?.results?.options : Array.isArray(W?.data?.data) ? W.data.data : Array.isArray(W.data?.results) ? W.data?.results : Array.isArray(W?.data) ? W.data : W;
            if (typeof Z == "object" && !Array.isArray(Z)) {
              const Se = Object.values(Z);
              if (Se.length && typeof Se[0] == "string") {
                N(Z);
                return;
              }
            }
            const oe = Array.isArray(Z) ? Z.map(ye) : [], ee = _e(D, Y, oe, e.groupKey);
            O && N(ee);
            return;
          } catch (W) {
            console.error("Method execution failed:", W), O && N({});
            return;
          }
        else {
          O && N({});
          return;
        }
      }
      if (I.type === "api" && I.endpoint)
        try {
          const B = {
            method: I.method || "GET",
            url: r?.baseURL + I.endpoint,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            },
            ...I.method === "GET" ? { params: { refid: I.refid } } : { data: { refid: I.refid } }
          }, G = await U(B), W = Array.isArray(G.data?.results?.options) ? G.data?.results?.options : Array.isArray(G?.data?.data) ? G.data.data : Array.isArray(G.data?.results) ? G.data?.results : Array.isArray(G?.data) ? G.data : G;
          if (typeof W == "object" && !Array.isArray(W)) {
            const ee = Object.values(W);
            if (ee.length && typeof ee[0] == "string") {
              N(W);
              return;
            }
          }
          const Z = Array.isArray(W) ? W.map(ye) : [], oe = _e(D, Y, Z, e.groupKey);
          O && N(oe);
          return;
        } catch (B) {
          console.error("API execution failed:", B), O && N({});
          return;
        }
      if (e.table || e.type === "dataSelector" || e.queryid) {
        if (!r) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let B;
          if (e.type === "dataSelector")
            B = {
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
            B = {
              table: e.table,
              cols: e.columns,
              where: e.where ? s ? be(e.where, { refid: s }) : e.where : void 0
            };
          }
          const G = await Qe(r, B, e?.queryid, void 0, o), W = Array.isArray(G?.data?.data) ? G.data.data : Array.isArray(G?.data) ? G.data : G;
          if (typeof W == "object" && !Array.isArray(W)) {
            const ee = Object.values(W);
            if (ee.length && typeof ee[0] == "string") {
              N(W);
              return;
            }
          }
          const Z = Array.isArray(W) ? W.map(ye) : [], oe = _e(D, Y, Z, e.groupKey);
          O && N(oe);
        } catch (B) {
          console.error("API fetch failed:", B);
        }
      }
    })(), () => {
      O = !1;
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
  const H = `
  w-full px-4 py-2 rounded-lg border transition-all duration-300
  backdrop-blur-sm text-gray-800 placeholder-gray-400
  focus:outline-none focus:ring-0

  ${F ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:shadow-md"}
`, C = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, p = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, k = Rt(
    () => Lo(h),
    [h]
  ), K = Rt(() => {
    if (!e.type || !["suggest", "autosuggest", "autocomplete"].includes(e.type) || !g.trim()) return null;
    const O = g.trim().toLowerCase();
    return k.find(([, j]) => j.trim().toLowerCase() === O);
  }, [e.type, g, k]), Q = k.length, ne = !!(e.search && (e.queryid || e.table)), te = Rt(() => ne || !g ? k : k.filter(
    ([, O]) => O.toLowerCase().includes(g.toLowerCase())
  ), [ne, g, k]), ve = (O, j) => {
    if (A)
      if (O.key === "ArrowDown")
        O.preventDefault(), b(
          (D) => D + 1 < te.length ? D + 1 : 0
        );
      else if (O.key === "ArrowUp")
        O.preventDefault(), b(
          (D) => D - 1 >= 0 ? D - 1 : te.length - 1
        );
      else if (O.key === "Enter") {
        O.preventDefault();
        const [D] = te[w] || [];
        if (D) {
          let Y = j ? D : [...t.values[e.name], D];
          t.setFieldValue(e.name, Y), ze(Y, e, o);
        }
        S(!1);
      } else O.key === "Escape" && (E(""), S(!1));
  };
  ge(() => {
    m.current?.querySelector(
      `[data-index="${w}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [w]), ge(() => {
    w >= te.length && b(0);
  }, [te, w]), ge(() => {
    const O = e.autocomplete, j = e.ajaxchain;
    if (!O && !j) return;
    const D = t.values[e.name];
    if (!D) return;
    const Y = Array.isArray(j) ? j : j ? [j] : [];
    (async () => {
      try {
        if (Co(O)) {
          const I = O.src;
          if (!I || !r) return;
          let B;
          if ("type" in I && I.type === "api") {
            let W = e.name;
            typeof e.parameter == "string" && e.parameter && (W = e.parameter);
            const Z = { [W]: D, refid: D };
            if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
              for (const [Se, Ae] of Object.entries(e.parameter))
                Z[Se] = Se === W ? D : t.values?.[Ae];
            const oe = {
              method: I.method || "GET",
              url: r?.baseURL + I.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...I.method === "GET" ? { params: Z } : { data: Z }
            }, { data: ee } = await U(oe);
            B = Array.isArray(ee?.data?.results?.options) ? ee?.data?.results?.options[0] : Array.isArray(ee?.data?.data) ? ee.data.data[0] : Array.isArray(ee?.data?.results) ? ee.data.results[0] : Array.isArray(ee?.data) ? ee.data[0] : ee?.data;
          } else {
            let W;
            if (!I.queryid) {
              if (!I.table || !I.columns)
                throw new Error("SQL query requires field.table");
              const oe = be(I?.where ?? {}, {
                refid: D
              });
              W = {
                ...I,
                table: I.table,
                cols: I.columns,
                where: oe
              };
            }
            const { data: Z } = await Qe(r, W, I?.queryid, D, o);
            B = Array.isArray(Z?.data?.data) ? Z.data.data[0] : Array.isArray(Z?.data) ? Z.data[0] : Z?.data;
          }
          let G = ye(B);
          G && O.target.split(",").map((W) => W.trim()).forEach((W) => {
            G[W] !== void 0 && t.setFieldValue(W, G[W]);
          });
        }
        for (const I of Y) {
          const B = I.src;
          if (!I || typeof I != "object" || !B || typeof B != "object" || !r) continue;
          let G;
          if ("type" in B && B.type === "api") {
            let Ae = e.name;
            typeof e.parameter == "string" && e.parameter && (Ae = e.parameter);
            let Ee = { [Ae]: D, refid: D };
            if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
              for (const [et, wt] of Object.entries(e.parameter))
                Ee[et] = et === Ae ? D : t.values?.[wt];
            const $e = {
              method: B.method || "GET",
              url: r?.baseURL + B.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...B.method === "GET" ? { params: Ee } : { data: Ee }
            }, { data: qe } = await U($e);
            G = qe;
          } else {
            let Ae;
            if (!B.queryid) {
              if (!B.table || !B.columns)
                throw new Error("SQL query requires field.table");
              const $e = be(B?.where ?? {}, {
                refid: D
              });
              Ae = {
                ...B,
                table: B.table,
                cols: B.columns,
                where: $e
              };
            }
            const { data: Ee } = await Qe(r, Ae, B?.queryid, D, o);
            G = Ee;
          }
          let W = e.valueKey ?? "value", Z = e.labelKey ?? "title";
          const oe = Array.isArray(G?.results?.options) ? G?.results?.options : Array.isArray(G.data) ? G.data : Array.isArray(G.results) ? G.results : G, ee = Array.isArray(oe) ? oe.map(ye) : [], Se = _e(
            W,
            Z,
            ee,
            e.groupKey
          );
          l?.(I.target, Se);
        }
      } catch (I) {
        console.error("Autocomplete / AjaxChain fetch failed", I);
      }
    })();
  }, [t.values[e.name]]), ge(() => {
    if (!ne || !g.trim() || !r) return;
    const O = Oo(e.columns ?? ""), j = new AbortController(), D = setTimeout(async () => {
      try {
        let Y;
        if (!e.queryid) {
          if (!e.table || !e.cols)
            throw new Error("SQL query requires field.table");
          const ee = s ? be(e.where ?? {}, {
            refid: s
          }) : e.where;
          Y = {
            ...e,
            table: e.table,
            cols: e.columns || e.cols,
            where: ee
          };
        }
        let q = {};
        Array.isArray(O) && O.forEach((ee) => {
          q[ee] = [g, "LIKE"];
        });
        let I = e.valueKey ?? "value", B = e.labelKey ?? "title";
        const { data: G } = await Qe(r, Y, e?.queryid, void 0, o, q), W = Array.isArray(G?.data?.data) ? G.data.data : Array.isArray(G?.data) ? G.data : G, Z = Array.isArray(W) ? W.map(ye) : [], oe = _e(
          I,
          B,
          Z,
          e.groupKey
        );
        N(oe);
      } catch (Y) {
        if (U.isCancel(Y)) return;
        console.error("Search fetch failed", Y);
      }
    }, 500);
    return () => {
      clearTimeout(D), j.abort();
    };
  }, [ne, g, s]);
  const je = async (O) => {
    if (O.length === 0) {
      console.error("No file");
      return;
    }
    try {
      const j = await rs(r, O), D = es({
        uploads: j,
        currentValue: t.values[P],
        multiple: e.multiple ?? !1
      });
      t.setFieldValue(
        P,
        D
      ), ze(D, e, o);
    } catch (j) {
      console.error("File upload failed", j), t.setFieldError(P, "File upload failed");
    }
  }, Oe = async (O) => {
    const j = Array.isArray(t.values[P]) ? t.values[P] : [], D = O.split("&")[0];
    if (!D) return;
    const Y = j.filter((q) => q.split("&")[0] !== D);
    t.setFieldValue(P, Y);
    try {
      await ns(r, D), ze(Y, e, o);
    } catch (q) {
      console.log(q), t.setFieldValue(P, j), window.alert("Failed to delete file due to a technical issue. Please try again.");
    }
  }, T = async (O, j, D) => {
    const Y = j[O];
    if (!Y) return;
    const q = n?.[Y];
    if (typeof q != "function") {
      console.error(`Method "${String(Y)}" not found`);
      return;
    }
    try {
      await Promise.resolve(q(D));
    } catch (I) {
      console.error(`Method "${String(Y)}" failed`, I);
    }
  }, M = (O) => {
    if (F) return;
    const j = O.target.value;
    E(j), b(0), j.trim() ? S(!0) : (S(!1), t.setFieldValue(P, ""));
  }, J = (O) => {
    t.setFieldValue(P, O), ze(O, e, o), E(""), S(!1), T("onChange", e, `${P}-${O}`);
  };
  function R(O) {
    const j = O.currentTarget.files;
    j && je(j);
  }
  return {
    setHighlightedIndex: b,
    executeFieldMethod: T,
    handleFileUpload: je,
    handleKeyDown: ve,
    setSearch: E,
    setOpen: S,
    setIsFocused: u,
    handleInputChange: M,
    handleSelect: J,
    handlePersist: ze,
    handleFileChange: R,
    setLoading: y,
    removeFile: Oe,
    optionCount: Q,
    baseInputClasses: H,
    focusClasses: C,
    labelClasses: p,
    search: g,
    highlightedIndex: w,
    options: h,
    isDisabled: F,
    key: P,
    filteredOptions: te,
    open: A,
    listRef: m,
    isFocused: f,
    exactMatch: K,
    triggerRef: x,
    loading: d
  };
}
function jr({
  anchorRef: e,
  open: t,
  children: n,
  offset: r = 4,
  maxHeight: s = 240
}) {
  const [o, i] = ce({}), l = He(null);
  return ms(() => {
    if (!t || !e.current || !l.current) return;
    const f = e.current, u = () => {
      const y = f.getBoundingClientRect(), h = window.innerHeight, N = l.current?.offsetHeight || s, g = h - y.bottom, E = y.top, b = g < N && E > g ? y.top - N - r : y.bottom + r;
      i({
        position: "fixed",
        top: b,
        left: y.left,
        width: y.width,
        maxHeight: s,
        overflowY: "auto",
        zIndex: 9999
      });
    };
    u();
    const d = requestAnimationFrame(u);
    return window.addEventListener("scroll", u, !0), window.addEventListener("resize", u), () => {
      cancelAnimationFrame(d), window.removeEventListener("scroll", u, !0), window.removeEventListener("resize", u);
    };
  }, [t, e, r, s]), t ? gs(
    /* @__PURE__ */ a.jsx("div", { ref: l, style: o, children: n }),
    document.body
  ) : null;
}
function bn({
  field: e,
  isDisabled: t,
  handleKeyDown: n,
  labelClasses: r,
  listRef: s,
  search: o,
  filteredOptions: i,
  highlightedIndex: l,
  setSearch: f,
  formik: u,
  executeFieldMethod: d,
  handlePersist: y,
  module_refid: h,
  options: N,
  triggerRef: g,
  open: E,
  setOpen: w
}) {
  const b = e.name;
  return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
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
        ref: g,
        tabIndex: 0,
        onClick: () => {
          w((m) => !m);
        },
        onKeyDown: (m) => {
          t || n(m, !0);
        },
        children: [
          /* @__PURE__ */ a.jsx("span", { className: "text-sm text-gray-700", children: u.values[b] ? Nr(N, u.values[b]) ?? "Select option" : `Select ${e.label}` }),
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
    /* @__PURE__ */ a.jsx(jr, { anchorRef: g, open: E, children: /* @__PURE__ */ a.jsxs(
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
              onChange: (m) => {
                f(m.target.value);
              },
              onKeyDown: (m) => n(m, !0),
              placeholder: "Search...",
              className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                      bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                      focus:outline-none focus:ring-0`
            }
          ) }),
          i.length > 0 && /* @__PURE__ */ a.jsx(
            "div",
            {
              onClick: (m) => {
                m.preventDefault(), m.stopPropagation(), u.setFieldValue(b, ""), w(!1), y("", e, h), f("");
              },
              className: "px-2 py-1 hover:bg-gray-50 text-gray-500 rounded cursor-pointer text-sm hover:bg-gray-50",
              children: "Clear selection"
            }
          ),
          i.length > 0 ? i.map(([m, x], A) => /* @__PURE__ */ a.jsx(
            "div",
            {
              id: `${b}-${m}`,
              "data-index": A,
              onClick: (S) => {
                S.preventDefault(), S.stopPropagation(), u.setFieldValue(b, m), y(m, e, h), w(!1), f(""), d("onChange", e, `${b}-${m}`);
              },
              className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                            ${u.values[b] === m ? "bg-indigo-50 text-indigo-600 font-medium" : l === A ? "bg-gray-100" : "hover:bg-gray-50"}`,
              children: x
            },
            m
          )) : /* @__PURE__ */ a.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
        ]
      }
    ) }),
    u.touched[b] && u.errors[b] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(u.errors[b]) })
  ] });
}
function xn({
  field: e,
  isDisabled: t,
  handleKeyDown: n,
  valueArray: r,
  labelClasses: s,
  listRef: o,
  search: i,
  filteredOptions: l,
  highlightedIndex: f,
  setSearch: u,
  formik: d,
  executeFieldMethod: y,
  handlePersist: h,
  module_refid: N,
  options: g,
  triggerRef: E,
  open: w,
  setOpen: b
}) {
  const m = e.name;
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
          b((x) => !x);
        },
        onKeyDown: (x) => {
          t || n(x, !1);
        },
        onBlur: () => {
          e.multiple || setTimeout(() => {
            b(!1), u("");
          }, 150);
        },
        children: [
          /* @__PURE__ */ a.jsx("span", { className: "text-sm text-gray-700", children: r?.length > 0 ? r.map((x) => Nr(g, x) ?? x).join(", ") : `Select ${e.label}` }),
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
    /* @__PURE__ */ a.jsx(jr, { anchorRef: E, open: w && !t, children: /* @__PURE__ */ a.jsxs("div", { ref: o, className: " w-full border border-gray-200 rounded-lg bg-white shadow-md  max-h-60 overflow-y-auto p-2", children: [
      e.search && /* @__PURE__ */ a.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ a.jsx(
        "input",
        {
          type: "text",
          value: i,
          onChange: (x) => {
            t || u(x.target.value);
          },
          placeholder: "Search...",
          className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
        }
      ) }),
      l.length > 0 ? l.map(([x, A], S) => /* @__PURE__ */ a.jsxs(
        "label",
        {
          htmlFor: `${m}-${x}`,
          className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${r?.includes(x) ? "bg-indigo-50 text-indigo-600 font-medium" : f === S ? "bg-gray-100" : "hover:bg-gray-50"}`,
          children: [
            /* @__PURE__ */ a.jsx(
              "input",
              {
                id: `${m}-${x}`,
                type: "checkbox",
                checked: r?.includes(x),
                onChange: (L) => {
                  const F = L.target.checked ? [...r, x] : r?.filter((P) => P !== x);
                  d.setFieldValue(m, F), h(F, e, N), y("onChange", e, `${m}-${x}`);
                },
                onBlur: d.handleBlur,
                disabled: t,
                className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              }
            ),
            A
          ]
        },
        x
      )) : /* @__PURE__ */ a.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
    ] }) }),
    d.touched[m] && d.errors[m] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(d.errors[m]) })
  ] });
}
function Zo({
  formik: e,
  field: t,
  sqlOpsUrls: n,
  module_refid: r
}) {
  let s = t?.name;
  const o = He(null), i = t.max !== void 0 ? Number(t.max) : 1 / 0, l = Array.isArray(e.values[s]) ? e.values[s] : e.values[s] ? [e.values[s]] : [], f = async (h) => {
    const N = h.currentTarget.files;
    if (!N?.length) return;
    const g = Array.from(h.currentTarget.files || []);
    if (l.length + g.length > i) {
      alert(`You can upload maximum ${i} file(s)`), h.currentTarget.value = "";
      return;
    }
    try {
      const w = await rs(n, N), b = es({
        uploads: w,
        currentValue: e.values[s],
        multiple: t.multiple ?? !1
      });
      e.setFieldValue(
        s,
        b
      ), ze(b, t, r), h.target.value = "";
    } catch (w) {
      console.error("File upload failed", w), e.setFieldError(s, "File upload failed");
    }
  }, u = async (h) => {
    const N = Array.isArray(e.values[s]) ? e.values[s] : [], g = h.split("&")[0];
    if (!g) return;
    const E = N.filter((w) => w.split("&")[0] !== g);
    e.setFieldValue(s, E);
    try {
      if (!h.split("&")[0]) return;
      await ns(n, g), ze(E, t, r);
    } catch {
      e.setFieldValue(s, N), window.alert("Failed to delete file due to a technical issue. Please try again.");
    }
  }, d = Uo(t), y = t.multiple === !0;
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
        multiple: y,
        ...d,
        onChange: f
      }
    ),
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "flex flex-wrap gap-2",
        children: [
          l.length > 0 ? l.map((h) => /* @__PURE__ */ a.jsxs("div", { className: "relative group", children: [
            /* @__PURE__ */ a.jsx(
              as,
              {
                field_name: h,
                filePath: h,
                sqlOpsUrls: n
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  u(h);
                },
                className: "absolute -top-2 -right-2 cursor-pointer bg-white text-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xl cursor-pointer transition",
                children: "×"
              }
            )
          ] }, h)) : null,
          /* @__PURE__ */ a.jsx(
            "div",
            {
              onClick: () => o.current?.click(),
              className: "w-24 h-24 flex items-center justify-center border border-dashed rounded-md bg-gray-50 hover:bg-gray-100 cursor-pointer",
              children: /* @__PURE__ */ a.jsx("i", { className: `fa-solid ${Ho(t)} text-2xl text-gray-400` })
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
  setFieldOptions: l
}) {
  const {
    executeFieldMethod: f,
    handleFileUpload: u,
    handleKeyDown: d,
    setSearch: y,
    setOpen: h,
    setIsFocused: N,
    handleInputChange: g,
    handleSelect: E,
    handlePersist: w,
    setLoading: b,
    removeFile: m,
    optionCount: x,
    baseInputClasses: A,
    focusClasses: S,
    labelClasses: L,
    search: F,
    highlightedIndex: P,
    options: H,
    isDisabled: C,
    key: p,
    filteredOptions: k,
    open: K,
    listRef: Q,
    triggerRef: ne,
    isFocused: te,
    exactMatch: ve,
    loading: je
  } = Qo({
    field: e,
    formik: t,
    methods: n,
    sqlOpsUrls: r,
    refid: s,
    module_refid: o,
    ...i && { optionsOverride: i },
    ...l && { setFieldOptions: l }
  }), Oe = (T) => T.icon ? /* @__PURE__ */ a.jsx("i", { className: T.icon }) : null;
  switch (e.type) {
    case "suggest":
    case "autosuggest":
    case "autocomplete": {
      const R = t.values[p] ?? "", O = F !== "" ? F : Nr(H, R) ?? String(R ?? "");
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: L, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { ref: ne, children: /* @__PURE__ */ a.jsx(
          "input",
          {
            className: `${A} ${S}`,
            value: O,
            placeholder: e.placeholder || "Type to search...",
            onChange: g,
            onBlur: () => {
              setTimeout(() => h(!1), 150);
            },
            onKeyDown: (j) => {
              if (j.key === "Enter") {
                if (j.preventDefault(), ve) {
                  const [D] = ve;
                  t.setFieldValue(p, D), w(D, e, o);
                } else F.trim() && (t.setFieldValue(p, F.trim()), w(F.trim(), e, o));
                h(!1);
                return;
              }
              d(j, !0);
            },
            disabled: C
          }
        ) }),
        /* @__PURE__ */ a.jsx(jr, { anchorRef: ne, open: K && !C, children: /* @__PURE__ */ a.jsx(
          "div",
          {
            ref: Q,
            className: " w-full bg-white border rounded shadow max-h-52 overflow-y-auto mt-1",
            children: k.length > 0 && ve ? k.map(([j, D], Y) => /* @__PURE__ */ a.jsx(
              "div",
              {
                id: `${p}-${j}`,
                "data-index": Y,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${P === Y ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => E(j),
                children: D
              },
              j
            )) : /* @__PURE__ */ a.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `Press "ENTER" to ADD "${O}" ` })
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
        const R = t.values[p];
        return /* @__PURE__ */ a.jsx(
          xn,
          {
            field: e,
            isDisabled: C,
            handleKeyDown: d,
            valueArray: R,
            labelClasses: L,
            listRef: Q,
            search: F,
            filteredOptions: k,
            highlightedIndex: P,
            setSearch: y,
            formik: t,
            executeFieldMethod: f,
            handlePersist: w,
            module_refid: o,
            options: H,
            triggerRef: ne,
            open: K,
            setOpen: h
          }
        );
      }
      return /* @__PURE__ */ a.jsx(
        bn,
        {
          field: e,
          isDisabled: C,
          handleKeyDown: d,
          labelClasses: L,
          listRef: Q,
          search: F,
          filteredOptions: k,
          highlightedIndex: P,
          setSearch: y,
          formik: t,
          executeFieldMethod: f,
          handlePersist: w,
          module_refid: o,
          options: H,
          triggerRef: ne,
          open: K,
          setOpen: h
        }
      );
    }
    case "textarea":
      return /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: L, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ a.jsx(
            "textarea",
            {
              id: p,
              className: `${A} ${S} min-h-[120px] resize-none`,
              onFocus: () => N(!0),
              name: p,
              value: t.values[p],
              onBlur: t.handleBlur,
              onChange: (R) => {
                t.setFieldValue(p, R.target.value), w(R.target.value, e, o), f("onChange", e, `${p}`);
              },
              placeholder: e.placeholder,
              disabled: C
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${te ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[p] && t.errors[p] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[p]) })
      ] }) });
    case "select":
      if (e.multiple === !0) {
        const R = t.values[p];
        return /* @__PURE__ */ a.jsx(
          xn,
          {
            field: e,
            isDisabled: C,
            handleKeyDown: d,
            valueArray: R,
            labelClasses: L,
            listRef: Q,
            search: F,
            filteredOptions: k,
            highlightedIndex: P,
            setSearch: y,
            formik: t,
            executeFieldMethod: f,
            handlePersist: w,
            module_refid: o,
            options: H,
            triggerRef: ne,
            open: K,
            setOpen: h
          }
        );
      }
      return e.search ? /* @__PURE__ */ a.jsx(
        bn,
        {
          field: e,
          isDisabled: C,
          handleKeyDown: d,
          labelClasses: L,
          listRef: Q,
          search: F,
          filteredOptions: k,
          highlightedIndex: P,
          setSearch: y,
          formik: t,
          executeFieldMethod: f,
          handlePersist: w,
          module_refid: o,
          options: H,
          triggerRef: ne,
          open: K,
          setOpen: h
        }
      ) : /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: L, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ a.jsxs(
            "select",
            {
              className: `${A} ${S} appearance-none ${C ? "" : "cursor-pointer"} pr-12`,
              onFocus: () => N(!0),
              name: p,
              id: p,
              value: t.values[p],
              onBlur: t.handleBlur,
              onChange: (R) => {
                t.setFieldValue(p, R.target.value), w(R.target.value, e, o), f("onChange", e, `${p}`);
              },
              disabled: C,
              children: [
                e?.["no-option"] !== "false" && !t.values[p] && /* @__PURE__ */ a.jsx("option", { value: "", disabled: !0, children: e?.["no-option"] || `Please select ${e.label}` }),
                /* @__PURE__ */ a.jsx("option", { value: "", className: "text-gray-500", children: "Clear Selection" }),
                !Ft(H) && Object.entries(H).map(([R, O]) => /* @__PURE__ */ a.jsx("option", { value: R, className: "py-2", children: O }, R)),
                Ft(H) && Object.entries(H).map(([R, O]) => /* @__PURE__ */ a.jsx("optgroup", { label: R, children: Object.entries(O).map(([j, D]) => /* @__PURE__ */ a.jsx("option", { value: j, children: D }, j)) }, R))
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
        /* @__PURE__ */ a.jsxs("label", { className: L, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: `flex ${x > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(H || {}).map(([R, O]) => /* @__PURE__ */ a.jsxs(
          "label",
          {
            htmlFor: `${p}-${R}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  id: `${p}-${R}`,
                  type: "radio",
                  name: p,
                  checked: t.values[p] === R,
                  value: R,
                  onChange: (j) => {
                    t.setFieldValue(p, j.target.value), w(j.target.value, e, o), f("onChange", e, `${p}-${R}`);
                  },
                  onBlur: t.handleBlur,
                  disabled: C,
                  className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${C ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                }
              ),
              O
            ]
          },
          R
        )) }),
        t.touched[p] && t.errors[p] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[p]) })
      ] });
    case "checkbox": {
      const R = e.multiple === !0, O = t.values[p];
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: L, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(H || {}).map(([j, D]) => {
          const Y = R ? Array.isArray(O) && O.includes(j) : O === j;
          return /* @__PURE__ */ a.jsxs(
            "label",
            {
              className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
              children: [
                /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    id: `${p}-${j}`,
                    type: "checkbox",
                    checked: Y,
                    onChange: (q) => {
                      let I;
                      if (R) {
                        const B = Array.isArray(O) ? O : [];
                        I = q.target.checked ? [...B, j] : B.filter((G) => G !== j);
                      } else
                        I = q.target.checked ? j : "false";
                      t.setFieldValue(p, I), w(I, e, o), f("onChange", e, `${p}-${j}`);
                    },
                    onBlur: t.handleBlur,
                    disabled: C,
                    className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${C ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                  }
                ),
                D
              ]
            },
            j
          );
        }) }),
        t.touched[p] && t.errors[p] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[p]) })
      ] });
    }
    case "tags": {
      const R = t.values[p], O = F.trim(), j = Array.isArray(H) ? H : Object.entries(H || {}).map(([I, B]) => ({ value: I, label: B })), D = (I) => {
        if (!C && I && !R.includes(I)) {
          let B = [...R, I];
          t.setFieldValue(p, B), w(B, e, o), y("");
        }
      }, Y = (I) => {
        let B = R.filter((G) => G !== I);
        t.setFieldValue(
          p,
          B
        ), w(B, e, o);
      }, q = (I) => j.find((B) => B.value === I)?.label ?? I;
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: L, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: `${A} 
            flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center
            ${C ? "pointer-events-none opacity-70" : ""}
            `,
            onClick: () => !C && document.getElementById(`${p}-input`)?.focus(),
            children: [
              R.map((I) => /* @__PURE__ */ a.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ a.jsx("span", { className: "text-indigo-700", children: q(I) }),
                    /* @__PURE__ */ a.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (B) => {
                          B.stopPropagation(), C || Y(I);
                        },
                        onMouseDown: (B) => B.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                I
              )),
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  id: `${p}-input`,
                  type: "text",
                  value: F,
                  onChange: (I) => y(I.target.value),
                  onKeyDown: (I) => {
                    (I.key === "Enter" || I.key === ",") && (I.preventDefault(), D(O));
                  },
                  placeholder: R.length === 0 ? e.placeholder || "Type and press Enter" : "",
                  className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                  disabled: C
                }
              )
            ]
          }
        ),
        t.touched[p] && t.errors[p] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[p]) })
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
      const T = e.multiple === !0, M = e.max !== void 0 ? Number(e.max) : 1 / 0, J = Array.isArray(t.values[p]) ? t.values[p] : t.values[p] ? [t.values[p]] : [];
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: L, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative mb-1", children: [
          e.icon && /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: Oe(e) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: p,
              type: "file",
              accept: e.accept,
              className: `${A} ${S} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => N(!0),
              name: p,
              multiple: T,
              onChange: (R) => {
                const O = R.currentTarget.files, j = Array.from(R.currentTarget.files || []);
                if (J.length + j.length > M) {
                  alert(`You can upload maximum ${M} file(s)`), R.currentTarget.value = "";
                  return;
                }
                O && u(O), f("onChange", e, p), R.currentTarget.value = "";
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: C
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${te ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "flex flex-wrap gap-2", children: J.map((R) => /* @__PURE__ */ a.jsxs("div", { className: "relative group", children: [
          /* @__PURE__ */ a.jsx(
            ss,
            {
              sqlOpsUrls: r,
              filePath: R
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              onClick: () => m(R),
              className: "absolute -top-2 -right-2 bg-white text-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xl cursor-pointer transition",
              children: "×"
            }
          )
        ] }, R)) }),
        t.touched[p] && t.errors[p] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[p]) })
      ] });
    case "json":
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: L, children: [
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
              onChange: (R) => {
                t.setFieldValue(p, R.target.value), w(R.target.value, e, o), f("onChange", e, `${p}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: C,
              className: `${A} ${S} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${te ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        t.touched[p] && t.errors[p] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[p]) })
      ] });
    case "date": {
      const R = Go(e.max);
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: L, children: [
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
                  max: R,
                  value: t.values[p] ?? "",
                  onChange: (O) => {
                    t.setFieldValue(p, O.target.value), w(O.target.value, e, o), f("onChange", e, `${p}`);
                  },
                  onBlur: t.handleBlur,
                  placeholder: e.placeholder,
                  disabled: C,
                  className: `${A} ${S} ${e.icon ? "pl-9" : ""}`
                }
              ),
              /* @__PURE__ */ a.jsx(
                "div",
                {
                  className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${te ? "opacity-20" : ""}`,
                  style: { zIndex: -1, filter: "blur(8px)" }
                }
              )
            ]
          }
        ),
        t.touched[p] && t.errors[p] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[p]) })
      ] });
    }
    case "geolocation": {
      const R = t.values[p] || "", O = async () => {
        try {
          const j = await wr();
          t.setFieldValue(p, j), w(j, e, o);
        } catch (j) {
          console.error(j), t.setFieldError(p, "Failed to fetch location");
        } finally {
          b(!1);
        }
      };
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: L, children: [
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
              className: `${A} ${S}`,
              placeholder: "Click to fetch location"
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              onClick: O,
              disabled: je,
              className: "absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 disabled:opacity-50",
              children: je ? /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-spinner fa-spin text-red-500" }) : /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-location-dot text-red-600 hover:text-red-700" })
            }
          )
        ] }),
        t.touched[p] && t.errors[p] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[p]) })
      ] });
    }
    case "number":
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: L, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: Oe(e) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: p,
              type: "number",
              className: `${A} ${S} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => N(!0),
              name: p,
              value: t.values[p],
              onBlur: t.handleBlur,
              onChange: (R) => {
                t.setFieldValue(p, R.target.value), w(R.target.value, e, o), f("onChange", e, `${p}`);
              },
              step: e.step,
              placeholder: e.placeholder,
              disabled: C,
              min: e.min,
              max: e.max
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${te ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[p] && t.errors[p] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[p]) })
      ] });
    default:
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: L, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: Oe(e) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: p,
              type: e.type || "text",
              className: `${A} ${S} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => N(!0),
              name: p,
              value: t.values[p],
              onBlur: t.handleBlur,
              onChange: (R) => {
                t.setFieldValue(p, R.target.value), w(R.target.value, e, o), f("onChange", e, `${p}`);
              },
              step: e.step,
              placeholder: e.placeholder,
              disabled: C,
              minLength: e.minlength,
              maxLength: e.maxlength
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${te ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[p] && t.errors[p] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[p]) })
      ] });
  }
}
function ei({
  title: e,
  fields: t,
  data: n,
  onSubmit: r = (u) => {
  },
  onCancel: s = () => {
  },
  methods: o = {},
  sqlOpsUrls: i,
  refid: l,
  module_refid: f
}) {
  const u = Ro(t, i?.operation), [d, y] = re.useState({}), h = (b, m) => {
    y((x) => ({
      ...x,
      [b]: m
    }));
  }, { initialValues: N, validationSchema: g } = re.useMemo(() => {
    const b = {}, m = {};
    return u.forEach((x) => {
      _o([x], b, m, n);
    }), {
      initialValues: b,
      validationSchema: m
    };
  }, [u, n]), E = hs({
    initialValues: N,
    enableReinitialize: !0,
    validationSchema: Ne.object().shape(g),
    onSubmit: (b) => {
      let m = So(b, u);
      r(m), E.resetForm();
    }
  });
  function w(b) {
    b.preventDefault(), E.resetForm();
  }
  return /* @__PURE__ */ a.jsx("div", { className: "relative  max-w-full ", children: /* @__PURE__ */ a.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ a.jsxs("form", { onSubmit: E.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "grid grid-flow-col auto-cols-max gap-4  overflow-x-auto", children: [
      u.map((b, m) => Ht(b.hidden) || b.type === "geolocation" || b.vmode === "edit" && i?.operation === "create" ? null : /* @__PURE__ */ a.jsx(
        "div",
        {
          children: /* @__PURE__ */ a.jsx(
            Jo,
            {
              refid: l,
              module_refid: f,
              sqlOpsUrls: i,
              field: b,
              formik: E,
              methods: o,
              setFieldOptions: h,
              ...d[b.name] ? { optionsOverride: d[b.name] } : {}
            }
          )
        },
        b?.name ?? `field-${m}`
      )),
      /* @__PURE__ */ a.jsxs("div", { className: "", children: [
        /* @__PURE__ */ a.jsx("div", { children: "  " }),
        /* @__PURE__ */ a.jsx("button", { type: "button", onClick: w, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Reset" }),
        Object.keys(E.errors).length > 0 && /* @__PURE__ */ a.jsx("div", { children: "  " })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "", children: [
        /* @__PURE__ */ a.jsx("div", { children: "  " }),
        /* @__PURE__ */ a.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" }),
        Object.keys(E.errors).length > 0 && /* @__PURE__ */ a.jsx("div", { children: "  " })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "mt-8 flex justify-between space-x-3", children: /* @__PURE__ */ a.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }) })
  ] }) }) });
}
function ti({
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
  const f = e.endPoints, u = e?.source?.refid, [d, y] = re.useState(o ?? {}), h = re.useMemo(() => jo(e.fields), [e.fields]);
  re.useEffect(() => {
    let w = !0;
    return (async () => {
      try {
        const m = await wr();
        w && y((x) => ({
          ...x,
          ...Object.fromEntries(
            h.map((A) => [A, m])
          )
        }));
      } catch (m) {
        console.warn("Geo fetch failed", m);
      }
    })(), () => {
      w = !1;
    };
  }, [h]), re.useEffect(() => {
    y(o ?? {});
  }, [o]);
  const N = re.useCallback(
    (w) => {
      w && Object.keys(w).length > 0 && y(w);
    },
    []
  );
  re.useEffect(() => {
    let w = !0;
    return (async () => {
      const m = e?.source ?? {};
      if (m?.type) {
        if (m.type === "method" && f?.operation !== "create") {
          const x = m.method, A = x ? t[x] : void 0;
          if (A)
            try {
              const S = await A();
              w && N(S);
            } catch (S) {
              console.error("Method execution failed:", S);
            }
        }
        if (m.type === "api" && f?.operation !== "create")
          try {
            const x = {
              method: m.method || "GET",
              url: f?.baseURL + m.endpoint,
              headers: {
                Authorization: `Bearer ${f?.accessToken}`
              },
              ...m.method === "GET" ? { params: { refid: m.refid } } : { data: { refid: m.refid } }
            }, A = await U(x);
            w && N(A.data);
          } catch (x) {
            console.error("API fetch failed:", x);
          }
        if (m.type === "sql" && m.refid && m.refid !== "0" && f?.operation !== "create" || f?.operation !== "create" && m.dbopsid) {
          if (!f) {
            console.error("SQL source requires formJson.endPoints but it is missing");
            return;
          }
          try {
            const x = await qo.fetch(f, {
              source: {
                ...m,
                table: m.table,
                columns: m.columns,
                where: be(m.where, {
                  refid: u
                })
              },
              fields: Dt(e.fields, f.operation)
            }, m?.dbopsid, e?.module_refid);
            w && N(x);
          } catch (x) {
            console.error("API fetch failed:", x);
          }
        }
      }
    })(), () => {
      w = !1;
    };
  }, [
    f,
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.url || "",
    JSON.stringify(e?.source?.params ?? {}),
    JSON.stringify(e?.source?.body ?? {}),
    JSON.stringify(e?.source?.headers ?? {})
  ]);
  const g = async (w) => {
    const b = e?.source ?? {};
    let m = { ...w };
    if (h.length > 0) {
      const x = h.filter((A) => !w[A]);
      if (x.length > 0)
        try {
          const A = await wr();
          m = {
            ...w,
            ...Object.fromEntries(
              x.map((S) => [S, A])
            )
          };
        } catch {
          console.warn("Geo fetch failed");
        }
    }
    if (b.type === "method") {
      const x = b.method, A = x ? t[x] : void 0;
      if (A)
        try {
          const S = await A(m);
          i?.(null), s?.(S), l?.success?.(lr(S));
        } catch (S) {
          s?.(S), l?.error?.(ir(S)), console.error("Method execution failed:", S);
        }
    }
    if (b.type === "api") {
      if (!f) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const x = await U({
          method: b.method || "POST",
          url: f.baseURL + b.endpoint,
          data: m ?? {},
          headers: {
            Authorization: `Bearer ${f?.accessToken}`
          }
        });
        i?.(null), s?.(x), l?.success?.(lr(x));
      } catch (x) {
        s?.(x), l?.error?.(ir(x)), console.error("API fetch failed:", x);
      }
    }
    if (b.type === "sql") {
      const x = e.endPoints;
      if (!x) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let A = !1, S;
        b?.dbopsid && (A = !0, S = b?.dbopsid);
        const L = await U({
          method: "GET",
          url: x.baseURL + x.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${x?.accessToken}`
          }
        });
        if (!A) {
          let H = {
            ...b
          };
          b.where && (H = {
            ...b,
            where: be(b.where, {
              refid: u
            })
          }), S = (await U({
            method: "POST",
            url: x.baseURL + x.dbopsGetRefId,
            data: {
              operation: x.operation,
              source: H,
              fields: Dt(e.fields, x.operation),
              forcefill: e.forcefill,
              datahash: L.data.refhash,
              scrid: e?.module_refid
            },
            headers: {
              Authorization: `Bearer ${x?.accessToken}`
            }
          }))?.data.refid;
        }
        let F = {
          refid: S,
          fields: m,
          datahash: L.data.refhash,
          refid1: x.refid
        };
        b?.refid && (F.refid1 = b?.refid);
        const P = await U({
          method: "POST",
          url: x.baseURL + x[x.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: F,
          headers: {
            Authorization: `Bearer ${x?.accessToken}`
          }
        });
        l?.success?.(lr(P)), i?.(null), s?.(P);
      } catch (A) {
        s?.(A), l?.error?.(ir(A)), console.error("API fetch failed:", A);
      }
    }
  }, E = {
    simple: /* @__PURE__ */ a.jsx(
      ei,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: d,
        onSubmit: g,
        onCancel: n,
        methods: t,
        components: r,
        sqlOpsUrls: f,
        refid: u,
        module_refid: e?.module_refid
      }
    )
  };
  return /* @__PURE__ */ a.jsx("div", { className: "relative", children: E.simple });
}
function Sr({ tabObj: e, methods: t, tabName: n, sqlOpsUrls: r, refid: s, Reports: o, toast: i, handleAction: l, infoViewJson: f }) {
  const [u, d] = ce(!1), [y, h] = ce(null), [N, g] = re.useState(0), [E, w] = re.useState(null), b = e?.config, m = e?.config, x = m?.["popup.form"] ? "popup.form" : (m?.form, "form"), A = m?.[x] && Object.keys(m?.[x]).length > 0, S = (C) => {
    let p = ye(C.data);
    w(p);
  }, L = (C) => {
    w(C), g((p) => p + 1);
  }, F = (C) => {
    let p = ye(C.data);
    h(p), d(!0);
  }, P = async () => {
    if (y?.id) {
      if (!r) {
        window.alert("Delete configuration missing.");
        return;
      }
      try {
        let C = e?.config;
        const p = C?.["popup.form"] ? "popup.form" : (C?.form, "form"), k = C?.[p];
        if (!k?.source) throw new Error("Form source missing");
        let K = !1, Q;
        k?.source?.dbopsid && (K = !0, Q = k?.source?.dbopsid);
        const ne = await U({
          method: "GET",
          url: r.baseURL + r.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${r.accessToken}`
          }
        });
        if (!K) {
          let te = { ...k.source, refid: y.id };
          k.source.where && (te = {
            ...te,
            where: be(k.source.where, {
              refid: y?.id
            })
          }), Q = (await U({
            method: "POST",
            url: r.baseURL + r.dbopsGetRefId,
            data: {
              operation: "update",
              source: te,
              fields: k.fields,
              forcefill: k.forcefill,
              datahash: ne.data.refhash,
              scrid: f?.module_refid
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
            refid: Q,
            fields: { blocked: "true" },
            datahash: ne.data.refhash,
            refid1: y?.id
          },
          headers: {
            Authorization: `Bearer ${r.accessToken}`
          }
        }), window.alert("Record deleted successfully."), g((te) => te + 1);
      } catch (C) {
        console.error(C), window.alert("Failed to delete record. Please try again");
      } finally {
        h(null), d(!1);
      }
    }
  }, H = () => {
    h(null), d(!1);
  };
  return /* @__PURE__ */ a.jsx(a.Fragment, { children: o ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    b?.datagrid && /* @__PURE__ */ a.jsx(
      o,
      {
        methods: { ...t, deleteRecord: F, editRecord: S },
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
          actions: { ...b?.actions, ...f?.buttons, ...f.actions },
          datagrid: b?.datagrid,
          buttons: b?.buttons,
          refresh: N
        },
        onButtonClick: l
      }
    ),
    A && /* @__PURE__ */ a.jsx(
      ti,
      {
        formJson: {
          ...m[x],
          source: {
            ...m?.[x].source,
            refid: E?.id
          },
          endPoints: {
            ...r,
            operation: E ? "update" : "create"
          },
          module_refid: f?.module_refid
        },
        toast: i,
        methods: t,
        initialvalues: E ?? {},
        setEditData: L
      }
    ),
    /* @__PURE__ */ a.jsx(
      Xo,
      {
        open: u,
        onConfirm: P,
        onCancel: H
      }
    )
  ] }) : /* @__PURE__ */ a.jsx("p", { children: "Report not available" }) });
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
  const [f, u] = ce(!1), d = He(null);
  return ge(() => {
    const y = (h) => {
      d.current && !d.current.contains(h.target) && u(!1);
    };
    return document.addEventListener("mousedown", y), () => document.removeEventListener("mousedown", y);
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
            onClick: () => u(!f),
            className: "ml-1 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200",
            children: "⋮"
          }
        ),
        f && /* @__PURE__ */ a.jsx("div", { className: "absolute right-0 mt-2 w-48 max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-30", children: t.map((y, h) => /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              n(h), u(!1);
            },
            className: `w-full text-left px-3 py-2 text-sm truncate hover:bg-gray-100 ${r === h ? "bg-gray-50 font-semibold text-action" : "text-gray-700"}`,
            children: e[y]?.label || y
          },
          y
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
        children: t.length > 0 ? t.map((y, h) => /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            onClick: () => n(h),
            className: `relative cursor-pointer flex-shrink-0
            min-w-[8rem]   
            py-2 px-8
            rounded-t-lg text-xs sm:text-sm font-semibold
            transition-all duration-300 ease-out
            focus:outline-none whitespace-nowrap
            ${r === h ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
            children: /* @__PURE__ */ a.jsx("span", { className: "relative z-10 flex items-center justify-center gap-1 sm:gap-2", children: /* @__PURE__ */ a.jsx("span", { className: "truncate", children: e[y]?.label || y }) })
          },
          y
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
  refid: f,
  sqlOpsUrls: u,
  module_refid: d,
  fieldOptions: y,
  setFieldOptions: h,
  buttons: N,
  handleAction: g,
  components: E
}) => {
  let w = N ? Object.entries(N).filter(([x, A]) => A.groups ? A.groups.includes(e[t]) : !0) : [];
  async function b(x, A) {
    const S = l?.[x];
    if (S) {
      try {
        await S();
      } catch (L) {
        console.error("Method execution failed:", L);
      }
      return;
    }
    g?.({ [x]: A }, s);
  }
  const m = Rr(r?.component, E);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "bg-white rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex-1 flex flex-col min-h-0",
      children: [
        e.length > 0 ? r?.type === "fields" && r?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: n?.fieldGridClass || "grid grid-cols-12 gap-2", children: r.fields.map((x, A) => Ht(x.hidden) ? null : /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${yt[bt(Number(x.width))] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ a.jsx(
              xt,
              {
                field: x,
                data: s ?? {},
                methods: l,
                refid: f,
                sqlOpsUrls: u,
                module_refid: d,
                setFieldOptions: h,
                ...y[x.name] ? { optionsOverride: y[x.name] } : {}
              }
            )
          },
          x?.name ?? `field-${A}`
        )) }) }) : r?.type === "component" && m ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: m }) : r ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: i(r, e[t] || "") }) : null : /* @__PURE__ */ a.jsx("div", { className: "flex-1 col-span-full text-center py-8 text-gray-500", children: "No data available" }),
        /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: w && w.map(([x, A]) => /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => b(x, A),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: A.label
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
              e.slice(0, 5).map((x, A) => /* @__PURE__ */ a.jsx(
                "div",
                {
                  className: `w-2 h-2 rounded-full transition-all duration-300 ${A === t ? "bg-action w-6" : "bg-gray-300"}`
                },
                A
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
          /* @__PURE__ */ a.jsx("div", { className: "flex gap-1", children: e.map((x, A) => /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `w-2 h-2 rounded-full transition-all duration-300 ${A === t ? "bg-action w-6" : "bg-gray-300"}`
            },
            A
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
  Reports: u,
  toast: d,
  handleAction: y = () => {
  },
  infoViewJson: h,
  fieldOptions: N,
  setFieldOptions: g,
  components: E
}) {
  const [w, b] = ce(0), [m, x] = ce(!1), A = He(null), S = Object.keys(e);
  ge(() => {
    const K = () => {
      if (A.current) {
        const Q = A.current;
        x(Q.scrollWidth > Q.clientWidth);
      }
    };
    return K(), window.addEventListener("resize", K), () => window.removeEventListener("resize", K);
  }, [S.length]), ge(() => {
    if (A.current && S.length > 0) {
      const K = A.current.children[w];
      K && K.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [w, S.length]);
  const L = i === "tableft", F = i === "tabright", P = !L && !F, H = e[S[w] ?? ""] || null, C = {
    single: (K, Q) => /* @__PURE__ */ a.jsx(Tr, { fieldOptions: N, setFieldOptions: g, module_refid: h.module_refid, tabObj: K, methods: t, tabName: Q, sqlOpsUrls: l, refid: f }),
    grid: (K, Q) => /* @__PURE__ */ a.jsx(
      Sr,
      {
        ...u ? { Reports: u } : {},
        toast: d,
        handleAction: y,
        tabObj: K,
        methods: t,
        tabName: Q,
        sqlOpsUrls: l,
        refid: f,
        infoViewJson: h
      }
    )
  }, p = H?.config?.uimode, k = r[p] || C[p] || (() => /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No UI mode for this type" }));
  return P ? /* @__PURE__ */ a.jsxs("div", { className: "flex-1 flex flex-col min-h-0 ", children: [
    /* @__PURE__ */ a.jsx(
      ri,
      {
        groupNames: S,
        groups: e,
        setActiveTabIndex: b,
        activeTabIndex: w,
        tabsNavRef: A,
        isCommonInfo: s,
        showScrollHint: m,
        layoutConfig: o
      }
    ),
    /* @__PURE__ */ a.jsx(
      vn,
      {
        groupNames: S,
        activeTabIndex: w,
        layoutConfig: o,
        tabObj: H,
        infoData: n,
        setActiveTabIndex: b,
        renderView: k,
        groups: e,
        methods: t,
        refid: f,
        sqlOpsUrls: l,
        module_refid: h.module_refid,
        fieldOptions: N,
        setFieldOptions: g,
        buttons: h.buttons,
        handleAction: y,
        ...E ? { components: E } : {}
      }
    )
  ] }) : /* @__PURE__ */ a.jsxs("div", { className: "flex-1 flex min-h-0", children: [
    L && /* @__PURE__ */ a.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ a.jsx(
      wn,
      {
        groupNames: S,
        groups: e,
        setActiveTabIndex: b,
        activeTabIndex: w
      }
    ) }),
    /* @__PURE__ */ a.jsx("main", { className: "flex-1 flex flex-col min-h-0 overflow-auto", children: /* @__PURE__ */ a.jsx(
      vn,
      {
        groupNames: S,
        activeTabIndex: w,
        layoutConfig: o,
        tabObj: H,
        infoData: n,
        setActiveTabIndex: b,
        renderView: k,
        groups: e,
        methods: t,
        refid: f,
        module_refid: h.module_refid,
        sqlOpsUrls: l,
        fieldOptions: N,
        setFieldOptions: g,
        handleAction: y,
        ...E ? { components: E } : {}
      }
    ) }),
    F && /* @__PURE__ */ a.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ a.jsx(
      wn,
      {
        groupNames: S,
        groups: e,
        setActiveTabIndex: b,
        activeTabIndex: w
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
  handleAction: f = () => {
  },
  infoViewJson: u,
  fieldOptions: d,
  setFieldOptions: y,
  components: h
}) {
  const N = {
    single: (b, m) => /* @__PURE__ */ a.jsx(
      Tr,
      {
        tabObj: b,
        methods: t,
        tabName: m,
        sqlOpsUrls: s,
        fieldOptions: d,
        setFieldOptions: y,
        refid: o,
        module_refid: u?.module_refid
      }
    ),
    grid: (b, m) => /* @__PURE__ */ a.jsx(
      Sr,
      {
        ...i ? { Reports: i } : {},
        toast: l,
        infoViewJson: u,
        handleAction: f,
        tabObj: b,
        methods: t,
        tabName: m,
        sqlOpsUrls: s,
        refid: o
      }
    )
  }, g = u?.buttons;
  let E = g ? Object.entries(g).filter(([b, m]) => !(m.groups && m.groups.length > 0)) : [];
  async function w(b, m) {
    const x = t?.[b];
    if (x) {
      try {
        await x();
      } catch (A) {
        console.error("Method execution failed:", A);
      }
      return;
    }
    f?.({ [b]: m }, n);
  }
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ a.jsx("div", { className: "mx-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "space-y-1 flex flex-col min-h-0", children: [
    e && Object.entries(e).map(([b, m], x) => {
      let A = g ? Object.entries(g).filter(([L, F]) => F.groups ? F.groups.includes(b) : !1) : [];
      const S = Rr(m.component, h);
      return /* @__PURE__ */ a.jsxs(ni, { title: m.label, isFirst: x === 0, children: [
        m?.type === "fields" && m?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: m.fields.map((L, F) => Ht(L.hidden) ? null : /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${yt[bt(Number(L.width))] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ a.jsx(
              xt,
              {
                module_refid: u?.module_refid,
                methods: t,
                field: L,
                data: n ?? {},
                setFieldOptions: y,
                ...d[L.name] ? { optionsOverride: d[L.name] } : {},
                sqlOpsUrls: s,
                refid: o
              }
            )
          },
          L?.name ?? `field-${F}`
        )) }) }) : m?.type === "component" && S ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: S }) : m ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: r[m.config?.uimode]?.(m) || N[m.config?.uimode]?.(m, b) || /* @__PURE__ */ a.jsx("div", { children: "No renderer for this type" }) }) : null,
        /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: A && A.map(([L, F]) => /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => w(L, F),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: F.label
          },
          L
        )) })
      ] }, b);
    }),
    /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: E && E.map(([b, m]) => /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => w(b, m),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: m.label
      },
      b
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
  infoViewJson: u,
  fieldOptions: d,
  setFieldOptions: y,
  components: h
}) {
  const N = {
    single: (b, m) => /* @__PURE__ */ a.jsx(Tr, { fieldOptions: d, setFieldOptions: y, module_refid: u?.module_refid, tabObj: b, methods: t, tabName: m, sqlOpsUrls: s, refid: o }),
    grid: (b, m) => /* @__PURE__ */ a.jsx(
      Sr,
      {
        ...i ? { Reports: i } : {},
        toast: l,
        handleAction: f,
        tabObj: b,
        methods: t,
        tabName: m,
        sqlOpsUrls: s,
        refid: o,
        infoViewJson: u
      }
    )
  }, g = u?.buttons;
  let E = g ? Object.entries(g).filter(([b, m]) => !(m.groups && m.groups.length > 0)) : [];
  async function w(b, m) {
    const x = t?.[b];
    if (x) {
      try {
        await x();
      } catch (A) {
        console.error("Method execution failed:", A);
      }
      return;
    }
    f?.({ [b]: m }, n);
  }
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ a.jsx("div", { className: "mx-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "space-y-2  flex flex-col min-h-0", children: [
    e && Object.entries(e).map(([b, m], x) => {
      let A = g ? Object.entries(g).filter(([L, F]) => F.groups ? F.groups.includes(b) : !1) : [];
      const S = Rr(m.component, h);
      return /* @__PURE__ */ a.jsxs(ai, { title: m.label, children: [
        m?.type === "fields" && m?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: m.fields.map((L, F) => Ht(L.hidden) ? null : /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${yt[bt(Number(L.width))] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ a.jsx(
              xt,
              {
                module_refid: u?.module_refid,
                methods: t,
                field: L,
                data: n ?? {},
                setFieldOptions: y,
                ...d[L.name] ? { optionsOverride: d[L.name] } : {},
                sqlOpsUrls: s,
                refid: o
              }
            )
          },
          L?.name ?? `field-${F}`
        )) }) }) : m?.type === "component" && S ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: S }) : m ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: r[m.config?.uimode]?.(m) || N[m.config?.uimode]?.(m, b) || /* @__PURE__ */ a.jsx("div", { children: "No renderer for this type" }) }) : null,
        /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: A && A.map(([L, F]) => /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => w(L, F),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: F.label
          },
          L
        )) })
      ] }, b);
    }),
    /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: E && E.map(([b, m]) => /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => w(b, m),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: m.label
      },
      b
    )) })
  ] }) }) });
}
function Ri({
  infoViewJson: e,
  hiddenFields: t = [],
  groupFieldsFn: n = To,
  layoutConfig: r = {},
  viewRenderers: s = {},
  methods: o = {},
  Reports: i,
  toast: l,
  handleAction: f = () => {
  },
  components: u,
  initialvalues: d
}) {
  const [y, h] = re.useState(d ?? {}), N = No(e.infoview ?? {}), g = e.endPoints, E = re.useMemo(
    () => n(e.fields || {}),
    [e.fields, n]
  ), [w, b] = re.useState({}), m = (P, H) => {
    b((C) => ({ ...C, [P]: H }));
  }, x = e?.source?.refid;
  let A = { ...E };
  e.infoview?.groups && (A = { ...A, ...e.infoview.groups }), re.useEffect(() => {
    d && h((P) => ({
      ...P,
      ...d ?? {}
    }));
  }, [d]);
  const S = re.useCallback(
    (P) => {
      P && h((H) => ({
        ...H,
        ...P
      }));
    },
    []
  );
  re.useEffect(() => {
    let P = !1;
    return (async () => {
      const C = e?.source;
      if (!C?.type) {
        P || S({});
        return;
      }
      if (C.type === "method") {
        const p = C.method, k = p ? o[p] : void 0;
        if (k)
          try {
            const K = await k();
            P || S(K || {});
          } catch (K) {
            console.error("Method execution failed:", K), P || S({});
          }
        else
          P || S({});
      }
      if (C.type === "api")
        try {
          const p = {
            method: C.method || "GET",
            url: g?.baseURL + C.endpoint,
            headers: {
              Authorization: `Bearer ${g?.accessToken}`
            },
            ...C.method === "GET" ? { params: { refid: C.refid } } : { data: { refid: C.refid } }
          }, { data: k } = await U(p), K = k?.results?.options ? k?.results?.options : k.data ? k.data : k.results ? k.results : k;
          P || S(K ?? {});
        } catch (p) {
          console.error("API fetch failed:", p), P || S({});
        }
      if (C.type === "sql" && C.refid && C.refid != "0" || C.dbopsid) {
        if (!g) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let p = !1, k;
          C?.dbopsid && (p = !0, k = C?.dbopsid);
          const K = await U({
            method: "GET",
            url: g.baseURL + g.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${g?.accessToken}`
            }
          });
          if (!p) {
            let te = {
              ...C
            };
            C.where && (te = {
              ...C,
              where: be(C.where, {
                refid: x
              })
            }), k = (await U({
              method: "POST",
              url: g.baseURL + g.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: te,
                fields: Dt(e.fields ?? {}, g.operation),
                forcefill: e.forcefill,
                datahash: K.data.refhash,
                srcid: e?.module_refid
              },
              headers: {
                Authorization: `Bearer ${g?.accessToken}`
              }
            }))?.data.refid;
          }
          const Q = await U({
            method: "POST",
            url: g.baseURL + g.dbopsFetch,
            data: {
              refid: k,
              datahash: K.data.refhash,
              module_refid: e.module_refid
            },
            headers: {
              Authorization: `Bearer ${g?.accessToken}`
            }
          }), ne = Zn(Q) ?? {};
          P || S(ne);
        } catch (p) {
          P || S({}), console.error("API fetch failed:", p);
        }
      }
    })(), () => {
      P = !0;
    };
  }, [
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.url || "",
    JSON.stringify(e?.source?.params || {}),
    JSON.stringify(e?.source?.body || {}),
    JSON.stringify(e?.source?.headers || {})
  ]);
  const L = A.common || null;
  L && delete A.common;
  const F = (P) => {
    switch (P) {
      case "accordion":
        return /* @__PURE__ */ a.jsx(
          si,
          {
            groups: A,
            methods: o,
            infoData: y,
            viewRenderers: s,
            sqlOpsUrls: g,
            refid: x,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: f,
            infoViewJson: e,
            setFieldOptions: m,
            fieldOptions: w,
            ...u ? { components: u } : {}
          }
        );
      case "tab":
      case "tableft":
      case "tabright":
        return /* @__PURE__ */ a.jsx(
          An,
          {
            groups: A,
            viewRenderers: s,
            layoutConfig: r,
            methods: o,
            infoData: y,
            isCommonInfo: !!L,
            viewMode: P,
            sqlOpsUrls: g,
            refid: x,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: f,
            infoViewJson: e,
            setFieldOptions: m,
            fieldOptions: w,
            ...u ? { components: u } : {}
          }
        );
      case "cards":
        return /* @__PURE__ */ a.jsx(
          oi,
          {
            groups: A,
            viewRenderers: s,
            methods: o,
            infoData: y,
            sqlOpsUrls: g,
            refid: x,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: f,
            infoViewJson: e,
            setFieldOptions: m,
            fieldOptions: w,
            ...u ? { components: u } : {}
          }
        );
      default:
        return /* @__PURE__ */ a.jsx(
          An,
          {
            groups: A,
            viewRenderers: s,
            layoutConfig: r,
            methods: o,
            infoData: y,
            isCommonInfo: !!L,
            viewMode: P,
            sqlOpsUrls: g,
            refid: x,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: f,
            infoViewJson: e,
            setFieldOptions: m,
            fieldOptions: w,
            ...u ? { components: u } : {}
          }
        );
    }
  };
  return /* @__PURE__ */ a.jsxs("div", { className: r.containerClass || "h-screen flex flex-col ", children: [
    L && g && /* @__PURE__ */ a.jsx(
      Yo,
      {
        commonInfo: L,
        infoData: y,
        hiddenFields: t,
        sqlOpsUrls: g,
        setFieldOptions: m,
        fieldOptions: w,
        module_refid: e.module_refid,
        refid: x,
        methods: o
      }
    ),
    F(N)
  ] });
}
export {
  Ri as InfoView
};
