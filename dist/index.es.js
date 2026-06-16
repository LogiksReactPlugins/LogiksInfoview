import te, { useState as fe, useEffect as Ne, useMemo as Lt, useRef as Xe, useLayoutEffect as ya } from "react";
import * as je from "yup";
import { useFormik as xa } from "formik";
import { createPortal as ba } from "react-dom";
var _t = { exports: {} }, ut = {};
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
function wa() {
  if (Vr) return ut;
  Vr = 1;
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
  return ut.Fragment = t, ut.jsx = n, ut.jsxs = n, ut;
}
var dt = {};
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
function va() {
  return Kr || (Kr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(R) {
      if (R == null) return null;
      if (typeof R == "function")
        return R.$$typeof === $ ? null : R.displayName || R.name || null;
      if (typeof R == "string") return R;
      switch (R) {
        case g:
          return "Fragment";
        case _:
          return "Profiler";
        case b:
          return "StrictMode";
        case E:
          return "Suspense";
        case N:
          return "SuspenseList";
        case I:
          return "Activity";
      }
      if (typeof R == "object")
        switch (typeof R.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), R.$$typeof) {
          case p:
            return "Portal";
          case m:
            return (R.displayName || "Context") + ".Provider";
          case v:
            return (R._context.displayName || "Context") + ".Consumer";
          case y:
            var B = R.render;
            return R = R.displayName, R || (R = B.displayName || B.name || "", R = R !== "" ? "ForwardRef(" + R + ")" : "ForwardRef"), R;
          case L:
            return B = R.displayName || null, B !== null ? B : e(R.type) || "Memo";
          case P:
            B = R._payload, R = R._init;
            try {
              return e(R(B));
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
        var B = !1;
      } catch {
        B = !0;
      }
      if (B) {
        B = console;
        var V = B.error, Y = typeof Symbol == "function" && Symbol.toStringTag && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return V.call(
          B,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          Y
        ), t(R);
      }
    }
    function r(R) {
      if (R === g) return "<>";
      if (typeof R == "object" && R !== null && R.$$typeof === P)
        return "<...>";
      try {
        var B = e(R);
        return B ? "<" + B + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var R = j.A;
      return R === null ? null : R.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(R) {
      if (k.call(R, "key")) {
        var B = Object.getOwnPropertyDescriptor(R, "key").get;
        if (B && B.isReactWarning) return !1;
      }
      return R.key !== void 0;
    }
    function l(R, B) {
      function V() {
        A || (A = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          B
        ));
      }
      V.isReactWarning = !0, Object.defineProperty(R, "key", {
        get: V,
        configurable: !0
      });
    }
    function h() {
      var R = e(this.type);
      return ie[R] || (ie[R] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), R = this.props.ref, R !== void 0 ? R : null;
    }
    function c(R, B, V, Y, be, X, we, Ie) {
      return V = X.ref, R = {
        $$typeof: x,
        type: R,
        key: B,
        props: X,
        _owner: be
      }, (V !== void 0 ? V : null) !== null ? Object.defineProperty(R, "ref", {
        enumerable: !1,
        get: h
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
        value: we
      }), Object.defineProperty(R, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ie
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    }
    function f(R, B, V, Y, be, X, we, Ie) {
      var re = B.children;
      if (re !== void 0)
        if (Y)
          if (z(re)) {
            for (Y = 0; Y < re.length; Y++)
              d(re[Y]);
            Object.freeze && Object.freeze(re);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(re);
      if (k.call(B, "key")) {
        re = e(R);
        var T = Object.keys(B).filter(function(O) {
          return O !== "key";
        });
        Y = 0 < T.length ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}", xe[re + Y] || (T = 0 < T.length ? "{" + T.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          Y,
          re,
          T,
          re
        ), xe[re + Y] = !0);
      }
      if (re = null, V !== void 0 && (n(V), re = "" + V), i(B) && (n(B.key), re = "" + B.key), "key" in B) {
        V = {};
        for (var M in B)
          M !== "key" && (V[M] = B[M]);
      } else V = B;
      return re && l(
        V,
        typeof R == "function" ? R.displayName || R.name || "Unknown" : R
      ), c(
        R,
        re,
        X,
        be,
        a(),
        V,
        we,
        Ie
      );
    }
    function d(R) {
      typeof R == "object" && R !== null && R.$$typeof === x && R._store && (R._store.validated = 1);
    }
    var S = te, x = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), v = Symbol.for("react.consumer"), m = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), I = Symbol.for("react.activity"), $ = Symbol.for("react.client.reference"), j = S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = Object.prototype.hasOwnProperty, z = Array.isArray, F = console.createTask ? console.createTask : function() {
      return null;
    };
    S = {
      react_stack_bottom_frame: function(R) {
        return R();
      }
    };
    var A, ie = {}, ce = S.react_stack_bottom_frame.bind(
      S,
      o
    )(), ne = F(r(o)), xe = {};
    dt.Fragment = g, dt.jsx = function(R, B, V, Y, be) {
      var X = 1e4 > j.recentlyCreatedOwnerStacks++;
      return f(
        R,
        B,
        V,
        !1,
        Y,
        be,
        X ? Error("react-stack-top-frame") : ce,
        X ? F(r(R)) : ne
      );
    }, dt.jsxs = function(R, B, V, Y, be) {
      var X = 1e4 > j.recentlyCreatedOwnerStacks++;
      return f(
        R,
        B,
        V,
        !0,
        Y,
        be,
        X ? Error("react-stack-top-frame") : ce,
        X ? F(r(R)) : ne
      );
    };
  }()), dt;
}
var Yr;
function Ea() {
  return Yr || (Yr = 1, process.env.NODE_ENV === "production" ? _t.exports = wa() : _t.exports = va()), _t.exports;
}
var s = Ea();
function jn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Na } = Object.prototype, { getPrototypeOf: Tr } = Object, { iterator: Ut, toStringTag: Rn } = Symbol, Ht = /* @__PURE__ */ ((e) => (t) => {
  const n = Na.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Fe = (e) => (e = e.toLowerCase(), (t) => Ht(t) === e), Gt = (e) => (t) => typeof t === e, { isArray: at } = Array, bt = Gt("undefined");
function wt(e) {
  return e !== null && !bt(e) && e.constructor !== null && !bt(e.constructor) && Te(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const _n = Fe("ArrayBuffer");
function Aa(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && _n(e.buffer), t;
}
const Ta = Gt("string"), Te = Gt("function"), Cn = Gt("number"), vt = (e) => e !== null && typeof e == "object", Sa = (e) => e === !0 || e === !1, Ft = (e) => {
  if (Ht(e) !== "object")
    return !1;
  const t = Tr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Rn in e) && !(Ut in e);
}, ja = (e) => {
  if (!vt(e) || wt(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Ra = Fe("Date"), _a = Fe("File"), Ca = Fe("Blob"), Oa = Fe("FileList"), La = (e) => vt(e) && Te(e.pipe), Fa = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Te(e.append) && ((t = Ht(e)) === "formdata" || // detect form-data instance
  t === "object" && Te(e.toString) && e.toString() === "[object FormData]"));
}, Ia = Fe("URLSearchParams"), [Pa, Da, Ma, ka] = ["ReadableStream", "Request", "Response", "Headers"].map(Fe), $a = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Et(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, a;
  if (typeof e != "object" && (e = [e]), at(e))
    for (r = 0, a = e.length; r < a; r++)
      t.call(null, e[r], r, e);
  else {
    if (wt(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let l;
    for (r = 0; r < i; r++)
      l = o[r], t.call(null, e[l], l, e);
  }
}
function On(e, t) {
  if (wt(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, a;
  for (; r-- > 0; )
    if (a = n[r], t === a.toLowerCase())
      return a;
  return null;
}
const Ye = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ln = (e) => !bt(e) && e !== Ye;
function pr() {
  const { caseless: e } = Ln(this) && this || {}, t = {}, n = (r, a) => {
    const o = e && On(t, a) || a;
    Ft(t[o]) && Ft(r) ? t[o] = pr(t[o], r) : Ft(r) ? t[o] = pr({}, r) : at(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, a = arguments.length; r < a; r++)
    arguments[r] && Et(arguments[r], n);
  return t;
}
const Ba = (e, t, n, { allOwnKeys: r } = {}) => (Et(t, (a, o) => {
  n && Te(a) ? e[o] = jn(a, n) : e[o] = a;
}, { allOwnKeys: r }), e), za = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ua = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Ha = (e, t, n, r) => {
  let a, o, i;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (a = Object.getOwnPropertyNames(e), o = a.length; o-- > 0; )
      i = a[o], (!r || r(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && Tr(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Ga = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Wa = (e) => {
  if (!e) return null;
  if (at(e)) return e;
  let t = e.length;
  if (!Cn(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, qa = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Tr(Uint8Array)), Va = (e, t) => {
  const r = (e && e[Ut]).call(e);
  let a;
  for (; (a = r.next()) && !a.done; ) {
    const o = a.value;
    t.call(e, o[0], o[1]);
  }
}, Ka = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Ya = Fe("HTMLFormElement"), Xa = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, a) {
    return r.toUpperCase() + a;
  }
), Xr = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Qa = Fe("RegExp"), Fn = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Et(n, (a, o) => {
    let i;
    (i = t(a, o, e)) !== !1 && (r[o] = i || a);
  }), Object.defineProperties(e, r);
}, Za = (e) => {
  Fn(e, (t, n) => {
    if (Te(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (Te(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Ja = (e, t) => {
  const n = {}, r = (a) => {
    a.forEach((o) => {
      n[o] = !0;
    });
  };
  return at(e) ? r(e) : r(String(e).split(t)), n;
}, es = () => {
}, ts = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function rs(e) {
  return !!(e && Te(e.append) && e[Rn] === "FormData" && e[Ut]);
}
const ns = (e) => {
  const t = new Array(10), n = (r, a) => {
    if (vt(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (wt(r))
        return r;
      if (!("toJSON" in r)) {
        t[a] = r;
        const o = at(r) ? [] : {};
        return Et(r, (i, l) => {
          const h = n(i, a + 1);
          !bt(h) && (o[l] = h);
        }), t[a] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, as = Fe("AsyncFunction"), ss = (e) => e && (vt(e) || Te(e)) && Te(e.then) && Te(e.catch), In = ((e, t) => e ? setImmediate : t ? ((n, r) => (Ye.addEventListener("message", ({ source: a, data: o }) => {
  a === Ye && o === n && r.length && r.shift()();
}, !1), (a) => {
  r.push(a), Ye.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  Te(Ye.postMessage)
), os = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ye) : typeof process < "u" && process.nextTick || In, is = (e) => e != null && Te(e[Ut]), w = {
  isArray: at,
  isArrayBuffer: _n,
  isBuffer: wt,
  isFormData: Fa,
  isArrayBufferView: Aa,
  isString: Ta,
  isNumber: Cn,
  isBoolean: Sa,
  isObject: vt,
  isPlainObject: Ft,
  isEmptyObject: ja,
  isReadableStream: Pa,
  isRequest: Da,
  isResponse: Ma,
  isHeaders: ka,
  isUndefined: bt,
  isDate: Ra,
  isFile: _a,
  isBlob: Ca,
  isRegExp: Qa,
  isFunction: Te,
  isStream: La,
  isURLSearchParams: Ia,
  isTypedArray: qa,
  isFileList: Oa,
  forEach: Et,
  merge: pr,
  extend: Ba,
  trim: $a,
  stripBOM: za,
  inherits: Ua,
  toFlatObject: Ha,
  kindOf: Ht,
  kindOfTest: Fe,
  endsWith: Ga,
  toArray: Wa,
  forEachEntry: Va,
  matchAll: Ka,
  isHTMLForm: Ya,
  hasOwnProperty: Xr,
  hasOwnProp: Xr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Fn,
  freezeMethods: Za,
  toObjectSet: Ja,
  toCamelCase: Xa,
  noop: es,
  toFiniteNumber: ts,
  findKey: On,
  global: Ye,
  isContextDefined: Ln,
  isSpecCompliantForm: rs,
  toJSONObject: ns,
  isAsyncFn: as,
  isThenable: ss,
  setImmediate: In,
  asap: os,
  isIterable: is
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
const Pn = K.prototype, Dn = {};
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
Object.defineProperty(Pn, "isAxiosError", { value: !0 });
K.from = (e, t, n, r, a, o) => {
  const i = Object.create(Pn);
  return w.toFlatObject(e, i, function(h) {
    return h !== Error.prototype;
  }, (l) => l !== "isAxiosError"), K.call(i, e.message, t, n, r, a), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const ls = null;
function gr(e) {
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
function cs(e) {
  return w.isArray(e) && !e.some(gr);
}
const us = w.toFlatObject(w, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Wt(e, t, n) {
  if (!w.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = w.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, b) {
    return !w.isUndefined(b[g]);
  });
  const r = n.metaTokens, a = n.visitor || f, o = n.dots, i = n.indexes, h = (n.Blob || typeof Blob < "u" && Blob) && w.isSpecCompliantForm(t);
  if (!w.isFunction(a))
    throw new TypeError("visitor must be a function");
  function c(p) {
    if (p === null) return "";
    if (w.isDate(p))
      return p.toISOString();
    if (w.isBoolean(p))
      return p.toString();
    if (!h && w.isBlob(p))
      throw new K("Blob is not supported. Use a Buffer instead.");
    return w.isArrayBuffer(p) || w.isTypedArray(p) ? h && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function f(p, g, b) {
    let _ = p;
    if (p && !b && typeof p == "object") {
      if (w.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), p = JSON.stringify(p);
      else if (w.isArray(p) && cs(p) || (w.isFileList(p) || w.endsWith(g, "[]")) && (_ = w.toArray(p)))
        return g = Mn(g), _.forEach(function(m, y) {
          !(w.isUndefined(m) || m === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Qr([g], y, o) : i === null ? g : g + "[]",
            c(m)
          );
        }), !1;
    }
    return gr(p) ? !0 : (t.append(Qr(b, g, o), c(p)), !1);
  }
  const d = [], S = Object.assign(us, {
    defaultVisitor: f,
    convertValue: c,
    isVisitable: gr
  });
  function x(p, g) {
    if (!w.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      d.push(p), w.forEach(p, function(_, v) {
        (!(w.isUndefined(_) || _ === null) && a.call(
          t,
          _,
          w.isString(v) ? v.trim() : v,
          g,
          S
        )) === !0 && x(_, g ? g.concat(v) : [v]);
      }), d.pop();
    }
  }
  if (!w.isObject(e))
    throw new TypeError("data must be an object");
  return x(e), t;
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
function Sr(e, t) {
  this._pairs = [], e && Wt(e, this, t);
}
const kn = Sr.prototype;
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
function ds(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function $n(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || ds;
  w.isFunction(n) && (n = {
    serialize: n
  });
  const a = n && n.serialize;
  let o;
  if (a ? o = a(t, n) : o = w.isURLSearchParams(t) ? t.toString() : new Sr(t, n).toString(r), o) {
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
}, fs = typeof URLSearchParams < "u" ? URLSearchParams : Sr, ms = typeof FormData < "u" ? FormData : null, hs = typeof Blob < "u" ? Blob : null, ps = {
  isBrowser: !0,
  classes: {
    URLSearchParams: fs,
    FormData: ms,
    Blob: hs
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, jr = typeof window < "u" && typeof document < "u", yr = typeof navigator == "object" && navigator || void 0, gs = jr && (!yr || ["ReactNative", "NativeScript", "NS"].indexOf(yr.product) < 0), ys = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", xs = jr && window.location.href || "http://localhost", bs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: jr,
  hasStandardBrowserEnv: gs,
  hasStandardBrowserWebWorkerEnv: ys,
  navigator: yr,
  origin: xs
}, Symbol.toStringTag, { value: "Module" })), he = {
  ...bs,
  ...ps
};
function ws(e, t) {
  return Wt(e, new he.classes.URLSearchParams(), {
    visitor: function(n, r, a, o) {
      return he.isNode && w.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function vs(e) {
  return w.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Es(e) {
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
    return i = !i && w.isArray(a) ? a.length : i, h ? (w.hasOwnProp(a, i) ? a[i] = [a[i], r] : a[i] = r, !l) : ((!a[i] || !w.isObject(a[i])) && (a[i] = []), t(n, r, a[i], o) && w.isArray(a[i]) && (a[i] = Es(a[i])), !l);
  }
  if (w.isFormData(e) && w.isFunction(e.entries)) {
    const n = {};
    return w.forEachEntry(e, (r, a) => {
      t(vs(r), a, n, 0);
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
const Nt = {
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
        return ws(t, this.formSerializer).toString();
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
    const n = this.transitional || Nt.transitional, r = n && n.forcedJSONParsing, a = this.responseType === "json";
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
  Nt.headers[e] = {};
});
const As = w.toObjectSet([
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
]), Ts = (e) => {
  const t = {};
  let n, r, a;
  return e && e.split(`
`).forEach(function(i) {
    a = i.indexOf(":"), n = i.substring(0, a).trim().toLowerCase(), r = i.substring(a + 1).trim(), !(!n || t[n] && As[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, en = Symbol("internals");
function ft(e) {
  return e && String(e).trim().toLowerCase();
}
function It(e) {
  return e === !1 || e == null ? e : w.isArray(e) ? e.map(It) : String(e);
}
function Ss(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const js = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
function Rs(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function _s(e, t) {
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
let Se = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const a = this;
    function o(l, h, c) {
      const f = ft(h);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const d = w.findKey(a, f);
      (!d || a[d] === void 0 || c === !0 || c === void 0 && a[d] !== !1) && (a[d || h] = It(l));
    }
    const i = (l, h) => w.forEach(l, (c, f) => o(c, f, h));
    if (w.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (w.isString(t) && (t = t.trim()) && !js(t))
      i(Ts(t), n);
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
    if (t = ft(t), t) {
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
    if (t = ft(t), t) {
      const r = w.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || rr(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let a = !1;
    function o(i) {
      if (i = ft(i), i) {
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
        n[i] = It(a), delete n[o];
        return;
      }
      const l = t ? Rs(o) : String(o).trim();
      l !== o && delete n[o], n[l] = It(a), r[l] = !0;
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
      const l = ft(i);
      r[l] || (_s(a, i), r[l] = !0);
    }
    return w.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
Se.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
w.reduceDescriptors(Se.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
w.freezeMethods(Se);
function nr(e, t) {
  const n = this || Nt, r = t || n, a = Se.from(r.headers);
  let o = r.data;
  return w.forEach(e, function(l) {
    o = l.call(n, o, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), o;
}
function Un(e) {
  return !!(e && e.__CANCEL__);
}
function st(e, t, n) {
  K.call(this, e ?? "canceled", K.ERR_CANCELED, t, n), this.name = "CanceledError";
}
w.inherits(st, K, {
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
function Cs(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Os(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let a = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(h) {
    const c = Date.now(), f = r[o];
    i || (i = c), n[a] = h, r[a] = c;
    let d = o, S = 0;
    for (; d !== a; )
      S += n[d++], d = d % e;
    if (a = (a + 1) % e, a === o && (o = (o + 1) % e), c - i < t)
      return;
    const x = f && c - f;
    return x ? Math.round(S * 1e3 / x) : void 0;
  };
}
function Ls(e, t) {
  let n = 0, r = 1e3 / t, a, o;
  const i = (c, f = Date.now()) => {
    n = f, a = null, o && (clearTimeout(o), o = null), e(...c);
  };
  return [(...c) => {
    const f = Date.now(), d = f - n;
    d >= r ? i(c, f) : (a = c, o || (o = setTimeout(() => {
      o = null, i(a);
    }, r - d)));
  }, () => a && i(a)];
}
const kt = (e, t, n = 3) => {
  let r = 0;
  const a = Os(50, 250);
  return Ls((o) => {
    const i = o.loaded, l = o.lengthComputable ? o.total : void 0, h = i - r, c = a(h), f = i <= l;
    r = i;
    const d = {
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
    e(d);
  }, n);
}, tn = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, rn = (e) => (...t) => w.asap(() => e(...t)), Fs = he.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, he.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(he.origin),
  he.navigator && /(msie|trident)/i.test(he.navigator.userAgent)
) : () => !0, Is = he.hasStandardBrowserEnv ? (
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
function Ps(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ds(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Gn(e, t, n) {
  let r = !Ps(t);
  return e && (r || n == !1) ? Ds(e, t) : t;
}
const nn = (e) => e instanceof Se ? { ...e } : e;
function Ze(e, t) {
  t = t || {};
  const n = {};
  function r(c, f, d, S) {
    return w.isPlainObject(c) && w.isPlainObject(f) ? w.merge.call({ caseless: S }, c, f) : w.isPlainObject(f) ? w.merge({}, f) : w.isArray(f) ? f.slice() : f;
  }
  function a(c, f, d, S) {
    if (w.isUndefined(f)) {
      if (!w.isUndefined(c))
        return r(void 0, c, d, S);
    } else return r(c, f, d, S);
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
  function l(c, f, d) {
    if (d in t)
      return r(c, f);
    if (d in e)
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
    headers: (c, f, d) => a(nn(c), nn(f), d, !0)
  };
  return w.forEach(Object.keys({ ...e, ...t }), function(f) {
    const d = h[f] || a, S = d(e[f], t[f], f);
    w.isUndefined(S) && d !== l || (n[f] = S);
  }), n;
}
const Wn = (e) => {
  const t = Ze({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: a, xsrfCookieName: o, headers: i, auth: l } = t;
  t.headers = i = Se.from(i), t.url = $n(Gn(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), l && i.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let h;
  if (w.isFormData(n)) {
    if (he.hasStandardBrowserEnv || he.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((h = i.getContentType()) !== !1) {
      const [c, ...f] = h ? h.split(";").map((d) => d.trim()).filter(Boolean) : [];
      i.setContentType([c || "multipart/form-data", ...f].join("; "));
    }
  }
  if (he.hasStandardBrowserEnv && (r && w.isFunction(r) && (r = r(t)), r || r !== !1 && Fs(t.url))) {
    const c = a && o && Is.read(o);
    c && i.set(a, c);
  }
  return t;
}, Ms = typeof XMLHttpRequest < "u", ks = Ms && function(e) {
  return new Promise(function(n, r) {
    const a = Wn(e);
    let o = a.data;
    const i = Se.from(a.headers).normalize();
    let { responseType: l, onUploadProgress: h, onDownloadProgress: c } = a, f, d, S, x, p;
    function g() {
      x && x(), p && p(), a.cancelToken && a.cancelToken.unsubscribe(f), a.signal && a.signal.removeEventListener("abort", f);
    }
    let b = new XMLHttpRequest();
    b.open(a.method.toUpperCase(), a.url, !0), b.timeout = a.timeout;
    function _() {
      if (!b)
        return;
      const m = Se.from(
        "getAllResponseHeaders" in b && b.getAllResponseHeaders()
      ), E = {
        data: !l || l === "text" || l === "json" ? b.responseText : b.response,
        status: b.status,
        statusText: b.statusText,
        headers: m,
        config: e,
        request: b
      };
      Hn(function(L) {
        n(L), g();
      }, function(L) {
        r(L), g();
      }, E), b = null;
    }
    "onloadend" in b ? b.onloadend = _ : b.onreadystatechange = function() {
      !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.indexOf("file:") === 0) || setTimeout(_);
    }, b.onabort = function() {
      b && (r(new K("Request aborted", K.ECONNABORTED, e, b)), b = null);
    }, b.onerror = function() {
      r(new K("Network Error", K.ERR_NETWORK, e, b)), b = null;
    }, b.ontimeout = function() {
      let y = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const E = a.transitional || Bn;
      a.timeoutErrorMessage && (y = a.timeoutErrorMessage), r(new K(
        y,
        E.clarifyTimeoutError ? K.ETIMEDOUT : K.ECONNABORTED,
        e,
        b
      )), b = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in b && w.forEach(i.toJSON(), function(y, E) {
      b.setRequestHeader(E, y);
    }), w.isUndefined(a.withCredentials) || (b.withCredentials = !!a.withCredentials), l && l !== "json" && (b.responseType = a.responseType), c && ([S, p] = kt(c, !0), b.addEventListener("progress", S)), h && b.upload && ([d, x] = kt(h), b.upload.addEventListener("progress", d), b.upload.addEventListener("loadend", x)), (a.cancelToken || a.signal) && (f = (m) => {
      b && (r(!m || m.type ? new st(null, e, b) : m), b.abort(), b = null);
    }, a.cancelToken && a.cancelToken.subscribe(f), a.signal && (a.signal.aborted ? f() : a.signal.addEventListener("abort", f)));
    const v = Cs(a.url);
    if (v && he.protocols.indexOf(v) === -1) {
      r(new K("Unsupported protocol " + v + ":", K.ERR_BAD_REQUEST, e));
      return;
    }
    b.send(o || null);
  });
}, $s = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), a;
    const o = function(c) {
      if (!a) {
        a = !0, l();
        const f = c instanceof Error ? c : this.reason;
        r.abort(f instanceof K ? f : new st(f instanceof Error ? f.message : f));
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
}, Bs = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, a;
  for (; r < n; )
    a = r + t, yield e.slice(r, a), r = a;
}, zs = async function* (e, t) {
  for await (const n of Us(e))
    yield* Bs(n, t);
}, Us = async function* (e) {
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
  const a = zs(e, t);
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
        let d = f.byteLength;
        if (n) {
          let S = o += d;
          n(S);
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
}, qt = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", qn = qt && typeof ReadableStream == "function", Hs = qt && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Vn = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Gs = qn && Vn(() => {
  let e = !1;
  const t = new Request(he.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), sn = 64 * 1024, xr = qn && Vn(() => w.isReadableStream(new Response("").body)), $t = {
  stream: xr && ((e) => e.body)
};
qt && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !$t[t] && ($t[t] = w.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new K(`Response type '${t}' is not supported`, K.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Ws = async (e) => {
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
    return (await Hs(e)).byteLength;
}, qs = async (e, t) => {
  const n = w.toFiniteNumber(e.getContentLength());
  return n ?? Ws(t);
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
    withCredentials: d = "same-origin",
    fetchOptions: S
  } = Wn(e);
  c = c ? (c + "").toLowerCase() : "text";
  let x = $s([a, o && o.toAbortSignal()], i), p;
  const g = x && x.unsubscribe && (() => {
    x.unsubscribe();
  });
  let b;
  try {
    if (h && Gs && n !== "get" && n !== "head" && (b = await qs(f, r)) !== 0) {
      let E = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), N;
      if (w.isFormData(r) && (N = E.headers.get("content-type")) && f.setContentType(N), E.body) {
        const [L, P] = tn(
          b,
          kt(rn(h))
        );
        r = an(E.body, sn, L, P);
      }
    }
    w.isString(d) || (d = d ? "include" : "omit");
    const _ = "credentials" in Request.prototype;
    p = new Request(t, {
      ...S,
      signal: x,
      method: n.toUpperCase(),
      headers: f.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: _ ? d : void 0
    });
    let v = await fetch(p, S);
    const m = xr && (c === "stream" || c === "response");
    if (xr && (l || m && g)) {
      const E = {};
      ["status", "statusText", "headers"].forEach((I) => {
        E[I] = v[I];
      });
      const N = w.toFiniteNumber(v.headers.get("content-length")), [L, P] = l && tn(
        N,
        kt(rn(l), !0)
      ) || [];
      v = new Response(
        an(v.body, sn, L, () => {
          P && P(), g && g();
        }),
        E
      );
    }
    c = c || "text";
    let y = await $t[w.findKey($t, c) || "text"](v, e);
    return !m && g && g(), await new Promise((E, N) => {
      Hn(E, N, {
        data: y,
        headers: Se.from(v.headers),
        status: v.status,
        statusText: v.statusText,
        config: e,
        request: p
      });
    });
  } catch (_) {
    throw g && g(), _ && _.name === "TypeError" && /Load failed|fetch/i.test(_.message) ? Object.assign(
      new K("Network Error", K.ERR_NETWORK, e, p),
      {
        cause: _.cause || _
      }
    ) : K.from(_, _ && _.code, e, p);
  }
}), br = {
  http: ls,
  xhr: ks,
  fetch: Vs
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
const on = (e) => `- ${e}`, Ks = (e) => w.isFunction(e) || e === null || e === !1, Kn = {
  getAdapter: (e) => {
    e = w.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const a = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !Ks(n) && (r = br[(i = String(n)).toLowerCase()], r === void 0))
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
  adapters: br
};
function ar(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new st(null, e);
}
function ln(e) {
  return ar(e), e.headers = Se.from(e.headers), e.data = nr.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Kn.getAdapter(e.adapter || Nt.adapter)(e).then(function(r) {
    return ar(e), r.data = nr.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Se.from(r.headers), r;
  }, function(r) {
    return Un(r) || (ar(e), r && r.response && (r.response.data = nr.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Se.from(r.response.headers))), Promise.reject(r);
  });
}
const Yn = "1.11.0", Vt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Vt[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const cn = {};
Vt.transitional = function(t, n, r) {
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
Vt.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Ys(e, t, n) {
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
const Pt = {
  assertOptions: Ys,
  validators: Vt
}, ke = Pt.validators;
let Qe = class {
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Ze(this.defaults, n);
    const { transitional: r, paramsSerializer: a, headers: o } = n;
    r !== void 0 && Pt.assertOptions(r, {
      silentJSONParsing: ke.transitional(ke.boolean),
      forcedJSONParsing: ke.transitional(ke.boolean),
      clarifyTimeoutError: ke.transitional(ke.boolean)
    }, !1), a != null && (w.isFunction(a) ? n.paramsSerializer = {
      serialize: a
    } : Pt.assertOptions(a, {
      encode: ke.function,
      serialize: ke.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Pt.assertOptions(n, {
      baseUrl: ke.spelling("baseURL"),
      withXsrfToken: ke.spelling("withXSRFToken")
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
    ), n.headers = Se.concat(i, o);
    const l = [];
    let h = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (h = h && g.synchronous, l.unshift(g.fulfilled, g.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(g) {
      c.push(g.fulfilled, g.rejected);
    });
    let f, d = 0, S;
    if (!h) {
      const p = [ln.bind(this), void 0];
      for (p.unshift(...l), p.push(...c), S = p.length, f = Promise.resolve(n); d < S; )
        f = f.then(p[d++], p[d++]);
      return f;
    }
    S = l.length;
    let x = n;
    for (d = 0; d < S; ) {
      const p = l[d++], g = l[d++];
      try {
        x = p(x);
      } catch (b) {
        g.call(this, b);
        break;
      }
    }
    try {
      f = ln.call(this, x);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, S = c.length; d < S; )
      f = f.then(c[d++], c[d++]);
    return f;
  }
  getUri(t) {
    t = Ze(this.defaults, t);
    const n = Gn(t.baseURL, t.url, t.allowAbsoluteUrls);
    return $n(n, t.params, t.paramsSerializer);
  }
};
w.forEach(["delete", "get", "head", "options"], function(t) {
  Qe.prototype[t] = function(n, r) {
    return this.request(Ze(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
w.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, l) {
      return this.request(Ze(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  Qe.prototype[t] = n(), Qe.prototype[t + "Form"] = n(!0);
});
let Xs = class Xn {
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
      r.reason || (r.reason = new st(o, i, l), n(r.reason));
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
function Qs(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Zs(e) {
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
function Qn(e) {
  const t = new Qe(e), n = jn(Qe.prototype.request, t);
  return w.extend(n, Qe.prototype, t, { allOwnKeys: !0 }), w.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(a) {
    return Qn(Ze(e, a));
  }, n;
}
const W = Qn(Nt);
W.Axios = Qe;
W.CanceledError = st;
W.CancelToken = Xs;
W.isCancel = Un;
W.VERSION = Yn;
W.toFormData = Wt;
W.AxiosError = K;
W.Cancel = W.CanceledError;
W.all = function(t) {
  return Promise.all(t);
};
W.spread = Qs;
W.isAxiosError = Zs;
W.mergeConfig = Ze;
W.AxiosHeaders = Se;
W.formToJSON = (e) => zn(w.isHTMLForm(e) ? new FormData(e) : e);
W.getAdapter = Kn.getAdapter;
W.HttpStatusCode = wr;
W.default = W;
const {
  Axios: ci,
  AxiosError: ui,
  CanceledError: di,
  isCancel: fi,
  CancelToken: mi,
  VERSION: hi,
  all: pi,
  Cancel: gi,
  isAxiosError: yi,
  spread: xi,
  toFormData: bi,
  AxiosHeaders: wi,
  HttpStatusCode: vi,
  formToJSON: Ei,
  getAdapter: Ni,
  mergeConfig: Ai
} = W;
/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */
const {
  entries: Zn,
  setPrototypeOf: un,
  isFrozen: Js,
  getPrototypeOf: eo,
  getOwnPropertyDescriptor: to
} = Object;
let {
  freeze: ge,
  seal: _e,
  create: vr
} = Object, {
  apply: Er,
  construct: Nr
} = typeof Reflect < "u" && Reflect;
ge || (ge = function(t) {
  return t;
});
_e || (_e = function(t) {
  return t;
});
Er || (Er = function(t, n) {
  for (var r = arguments.length, a = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    a[o - 2] = arguments[o];
  return t.apply(n, a);
});
Nr || (Nr = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return new t(...r);
});
const Ct = ye(Array.prototype.forEach), ro = ye(Array.prototype.lastIndexOf), dn = ye(Array.prototype.pop), mt = ye(Array.prototype.push), no = ye(Array.prototype.splice), Dt = ye(String.prototype.toLowerCase), sr = ye(String.prototype.toString), or = ye(String.prototype.match), ht = ye(String.prototype.replace), ao = ye(String.prototype.indexOf), so = ye(String.prototype.trim), Le = ye(Object.prototype.hasOwnProperty), pe = ye(RegExp.prototype.test), pt = oo(TypeError);
function ye(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      r[a - 1] = arguments[a];
    return Er(e, t, r);
  };
}
function oo(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Nr(e, n);
  };
}
function Q(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Dt;
  un && un(e, null);
  let r = t.length;
  for (; r--; ) {
    let a = t[r];
    if (typeof a == "string") {
      const o = n(a);
      o !== a && (Js(t) || (t[r] = o), a = o);
    }
    e[a] = !0;
  }
  return e;
}
function io(e) {
  for (let t = 0; t < e.length; t++)
    Le(e, t) || (e[t] = null);
  return e;
}
function $e(e) {
  const t = vr(null);
  for (const [n, r] of Zn(e))
    Le(e, n) && (Array.isArray(r) ? t[n] = io(r) : r && typeof r == "object" && r.constructor === Object ? t[n] = $e(r) : t[n] = r);
  return t;
}
function gt(e, t) {
  for (; e !== null; ) {
    const r = to(e, t);
    if (r) {
      if (r.get)
        return ye(r.get);
      if (typeof r.value == "function")
        return ye(r.value);
    }
    e = eo(e);
  }
  function n() {
    return null;
  }
  return n;
}
const fn = ge(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ir = ge(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), lr = ge(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), lo = ge(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), cr = ge(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), co = ge(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), mn = ge(["#text"]), hn = ge(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ur = ge(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), pn = ge(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ot = ge(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), uo = _e(/\{\{[\w\W]*|[\w\W]*\}\}/gm), fo = _e(/<%[\w\W]*|[\w\W]*%>/gm), mo = _e(/\$\{[\w\W]*/gm), ho = _e(/^data-[\-\w.\u00B7-\uFFFF]+$/), po = _e(/^aria-[\-\w]+$/), Jn = _e(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), go = _e(/^(?:\w+script|data):/i), yo = _e(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), ea = _e(/^html$/i), xo = _e(/^[a-z][.\w]*(-[.\w]+)+$/i);
var gn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: po,
  ATTR_WHITESPACE: yo,
  CUSTOM_ELEMENT: xo,
  DATA_ATTR: ho,
  DOCTYPE_NAME: ea,
  ERB_EXPR: fo,
  IS_ALLOWED_URI: Jn,
  IS_SCRIPT_OR_DATA: go,
  MUSTACHE_EXPR: uo,
  TMPLIT_EXPR: mo
});
const yt = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, bo = function() {
  return typeof window > "u" ? null : window;
}, wo = function(t, n) {
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
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : bo();
  const t = (H) => ta(H);
  if (t.version = "3.3.1", t.removed = [], !e || !e.document || e.document.nodeType !== yt.document || !e.Element)
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
    HTMLFormElement: d,
    DOMParser: S,
    trustedTypes: x
  } = e, p = h.prototype, g = gt(p, "cloneNode"), b = gt(p, "remove"), _ = gt(p, "nextSibling"), v = gt(p, "childNodes"), m = gt(p, "parentNode");
  if (typeof i == "function") {
    const H = n.createElement("template");
    H.content && H.content.ownerDocument && (n = H.content.ownerDocument);
  }
  let y, E = "";
  const {
    implementation: N,
    createNodeIterator: L,
    createDocumentFragment: P,
    getElementsByTagName: I
  } = n, {
    importNode: $
  } = r;
  let j = yn();
  t.isSupported = typeof Zn == "function" && typeof m == "function" && N && N.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: k,
    ERB_EXPR: z,
    TMPLIT_EXPR: F,
    DATA_ATTR: A,
    ARIA_ATTR: ie,
    IS_SCRIPT_OR_DATA: ce,
    ATTR_WHITESPACE: ne,
    CUSTOM_ELEMENT: xe
  } = gn;
  let {
    IS_ALLOWED_URI: R
  } = gn, B = null;
  const V = Q({}, [...fn, ...ir, ...lr, ...cr, ...mn]);
  let Y = null;
  const be = Q({}, [...hn, ...ur, ...pn, ...Ot]);
  let X = Object.seal(vr(null, {
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
  })), we = null, Ie = null;
  const re = Object.seal(vr(null, {
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
  let T = !0, M = !0, O = !1, J = !0, Z = !1, D = !0, G = !1, q = !1, ee = !1, ae = !1, ue = !1, ve = !1, qe = !0, Ce = !1;
  const Pe = "user-content-";
  let lt = !0, Oe = !1, We = {}, De = null;
  const Yt = Q({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Lr = null;
  const Fr = Q({}, ["audio", "video", "img", "source", "image", "track"]);
  let Xt = null;
  const Ir = Q({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Tt = "http://www.w3.org/1998/Math/MathML", St = "http://www.w3.org/2000/svg", ze = "http://www.w3.org/1999/xhtml";
  let Je = ze, Qt = !1, Zt = null;
  const ua = Q({}, [Tt, St, ze], sr);
  let jt = Q({}, ["mi", "mo", "mn", "ms", "mtext"]), Rt = Q({}, ["annotation-xml"]);
  const da = Q({}, ["title", "style", "font", "a", "script"]);
  let ct = null;
  const fa = ["application/xhtml+xml", "text/html"], ma = "text/html";
  let le = null, et = null;
  const ha = n.createElement("form"), Pr = function(u) {
    return u instanceof RegExp || u instanceof Function;
  }, Jt = function() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(et && et === u)) {
      if ((!u || typeof u != "object") && (u = {}), u = $e(u), ct = // eslint-disable-next-line unicorn/prefer-includes
      fa.indexOf(u.PARSER_MEDIA_TYPE) === -1 ? ma : u.PARSER_MEDIA_TYPE, le = ct === "application/xhtml+xml" ? sr : Dt, B = Le(u, "ALLOWED_TAGS") ? Q({}, u.ALLOWED_TAGS, le) : V, Y = Le(u, "ALLOWED_ATTR") ? Q({}, u.ALLOWED_ATTR, le) : be, Zt = Le(u, "ALLOWED_NAMESPACES") ? Q({}, u.ALLOWED_NAMESPACES, sr) : ua, Xt = Le(u, "ADD_URI_SAFE_ATTR") ? Q($e(Ir), u.ADD_URI_SAFE_ATTR, le) : Ir, Lr = Le(u, "ADD_DATA_URI_TAGS") ? Q($e(Fr), u.ADD_DATA_URI_TAGS, le) : Fr, De = Le(u, "FORBID_CONTENTS") ? Q({}, u.FORBID_CONTENTS, le) : Yt, we = Le(u, "FORBID_TAGS") ? Q({}, u.FORBID_TAGS, le) : $e({}), Ie = Le(u, "FORBID_ATTR") ? Q({}, u.FORBID_ATTR, le) : $e({}), We = Le(u, "USE_PROFILES") ? u.USE_PROFILES : !1, T = u.ALLOW_ARIA_ATTR !== !1, M = u.ALLOW_DATA_ATTR !== !1, O = u.ALLOW_UNKNOWN_PROTOCOLS || !1, J = u.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Z = u.SAFE_FOR_TEMPLATES || !1, D = u.SAFE_FOR_XML !== !1, G = u.WHOLE_DOCUMENT || !1, ae = u.RETURN_DOM || !1, ue = u.RETURN_DOM_FRAGMENT || !1, ve = u.RETURN_TRUSTED_TYPE || !1, ee = u.FORCE_BODY || !1, qe = u.SANITIZE_DOM !== !1, Ce = u.SANITIZE_NAMED_PROPS || !1, lt = u.KEEP_CONTENT !== !1, Oe = u.IN_PLACE || !1, R = u.ALLOWED_URI_REGEXP || Jn, Je = u.NAMESPACE || ze, jt = u.MATHML_TEXT_INTEGRATION_POINTS || jt, Rt = u.HTML_INTEGRATION_POINTS || Rt, X = u.CUSTOM_ELEMENT_HANDLING || {}, u.CUSTOM_ELEMENT_HANDLING && Pr(u.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (X.tagNameCheck = u.CUSTOM_ELEMENT_HANDLING.tagNameCheck), u.CUSTOM_ELEMENT_HANDLING && Pr(u.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (X.attributeNameCheck = u.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), u.CUSTOM_ELEMENT_HANDLING && typeof u.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (X.allowCustomizedBuiltInElements = u.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Z && (M = !1), ue && (ae = !0), We && (B = Q({}, mn), Y = [], We.html === !0 && (Q(B, fn), Q(Y, hn)), We.svg === !0 && (Q(B, ir), Q(Y, ur), Q(Y, Ot)), We.svgFilters === !0 && (Q(B, lr), Q(Y, ur), Q(Y, Ot)), We.mathMl === !0 && (Q(B, cr), Q(Y, pn), Q(Y, Ot))), u.ADD_TAGS && (typeof u.ADD_TAGS == "function" ? re.tagCheck = u.ADD_TAGS : (B === V && (B = $e(B)), Q(B, u.ADD_TAGS, le))), u.ADD_ATTR && (typeof u.ADD_ATTR == "function" ? re.attributeCheck = u.ADD_ATTR : (Y === be && (Y = $e(Y)), Q(Y, u.ADD_ATTR, le))), u.ADD_URI_SAFE_ATTR && Q(Xt, u.ADD_URI_SAFE_ATTR, le), u.FORBID_CONTENTS && (De === Yt && (De = $e(De)), Q(De, u.FORBID_CONTENTS, le)), u.ADD_FORBID_CONTENTS && (De === Yt && (De = $e(De)), Q(De, u.ADD_FORBID_CONTENTS, le)), lt && (B["#text"] = !0), G && Q(B, ["html", "head", "body"]), B.table && (Q(B, ["tbody"]), delete we.tbody), u.TRUSTED_TYPES_POLICY) {
        if (typeof u.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw pt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof u.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw pt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        y = u.TRUSTED_TYPES_POLICY, E = y.createHTML("");
      } else
        y === void 0 && (y = wo(x, a)), y !== null && typeof E == "string" && (E = y.createHTML(""));
      ge && ge(u), et = u;
    }
  }, Dr = Q({}, [...ir, ...lr, ...lo]), Mr = Q({}, [...cr, ...co]), pa = function(u) {
    let C = m(u);
    (!C || !C.tagName) && (C = {
      namespaceURI: Je,
      tagName: "template"
    });
    const U = Dt(u.tagName), se = Dt(C.tagName);
    return Zt[u.namespaceURI] ? u.namespaceURI === St ? C.namespaceURI === ze ? U === "svg" : C.namespaceURI === Tt ? U === "svg" && (se === "annotation-xml" || jt[se]) : !!Dr[U] : u.namespaceURI === Tt ? C.namespaceURI === ze ? U === "math" : C.namespaceURI === St ? U === "math" && Rt[se] : !!Mr[U] : u.namespaceURI === ze ? C.namespaceURI === St && !Rt[se] || C.namespaceURI === Tt && !jt[se] ? !1 : !Mr[U] && (da[U] || !Dr[U]) : !!(ct === "application/xhtml+xml" && Zt[u.namespaceURI]) : !1;
  }, Me = function(u) {
    mt(t.removed, {
      element: u
    });
    try {
      m(u).removeChild(u);
    } catch {
      b(u);
    }
  }, Ve = function(u, C) {
    try {
      mt(t.removed, {
        attribute: C.getAttributeNode(u),
        from: C
      });
    } catch {
      mt(t.removed, {
        attribute: null,
        from: C
      });
    }
    if (C.removeAttribute(u), u === "is")
      if (ae || ue)
        try {
          Me(C);
        } catch {
        }
      else
        try {
          C.setAttribute(u, "");
        } catch {
        }
  }, kr = function(u) {
    let C = null, U = null;
    if (ee)
      u = "<remove></remove>" + u;
    else {
      const oe = or(u, /^[\r\n\t ]+/);
      U = oe && oe[0];
    }
    ct === "application/xhtml+xml" && Je === ze && (u = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + u + "</body></html>");
    const se = y ? y.createHTML(u) : u;
    if (Je === ze)
      try {
        C = new S().parseFromString(se, ct);
      } catch {
      }
    if (!C || !C.documentElement) {
      C = N.createDocument(Je, "template", null);
      try {
        C.documentElement.innerHTML = Qt ? E : se;
      } catch {
      }
    }
    const me = C.body || C.documentElement;
    return u && U && me.insertBefore(n.createTextNode(U), me.childNodes[0] || null), Je === ze ? I.call(C, G ? "html" : "body")[0] : G ? C.documentElement : me;
  }, $r = function(u) {
    return L.call(
      u.ownerDocument || u,
      u,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, er = function(u) {
    return u instanceof d && (typeof u.nodeName != "string" || typeof u.textContent != "string" || typeof u.removeChild != "function" || !(u.attributes instanceof f) || typeof u.removeAttribute != "function" || typeof u.setAttribute != "function" || typeof u.namespaceURI != "string" || typeof u.insertBefore != "function" || typeof u.hasChildNodes != "function");
  }, Br = function(u) {
    return typeof l == "function" && u instanceof l;
  };
  function Ue(H, u, C) {
    Ct(H, (U) => {
      U.call(t, u, C, et);
    });
  }
  const zr = function(u) {
    let C = null;
    if (Ue(j.beforeSanitizeElements, u, null), er(u))
      return Me(u), !0;
    const U = le(u.nodeName);
    if (Ue(j.uponSanitizeElement, u, {
      tagName: U,
      allowedTags: B
    }), D && u.hasChildNodes() && !Br(u.firstElementChild) && pe(/<[/\w!]/g, u.innerHTML) && pe(/<[/\w!]/g, u.textContent) || u.nodeType === yt.progressingInstruction || D && u.nodeType === yt.comment && pe(/<[/\w]/g, u.data))
      return Me(u), !0;
    if (!(re.tagCheck instanceof Function && re.tagCheck(U)) && (!B[U] || we[U])) {
      if (!we[U] && Hr(U) && (X.tagNameCheck instanceof RegExp && pe(X.tagNameCheck, U) || X.tagNameCheck instanceof Function && X.tagNameCheck(U)))
        return !1;
      if (lt && !De[U]) {
        const se = m(u) || u.parentNode, me = v(u) || u.childNodes;
        if (me && se) {
          const oe = me.length;
          for (let Ee = oe - 1; Ee >= 0; --Ee) {
            const He = g(me[Ee], !0);
            He.__removalCount = (u.__removalCount || 0) + 1, se.insertBefore(He, _(u));
          }
        }
      }
      return Me(u), !0;
    }
    return u instanceof h && !pa(u) || (U === "noscript" || U === "noembed" || U === "noframes") && pe(/<\/no(script|embed|frames)/i, u.innerHTML) ? (Me(u), !0) : (Z && u.nodeType === yt.text && (C = u.textContent, Ct([k, z, F], (se) => {
      C = ht(C, se, " ");
    }), u.textContent !== C && (mt(t.removed, {
      element: u.cloneNode()
    }), u.textContent = C)), Ue(j.afterSanitizeElements, u, null), !1);
  }, Ur = function(u, C, U) {
    if (qe && (C === "id" || C === "name") && (U in n || U in ha))
      return !1;
    if (!(M && !Ie[C] && pe(A, C))) {
      if (!(T && pe(ie, C))) {
        if (!(re.attributeCheck instanceof Function && re.attributeCheck(C, u))) {
          if (!Y[C] || Ie[C]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(Hr(u) && (X.tagNameCheck instanceof RegExp && pe(X.tagNameCheck, u) || X.tagNameCheck instanceof Function && X.tagNameCheck(u)) && (X.attributeNameCheck instanceof RegExp && pe(X.attributeNameCheck, C) || X.attributeNameCheck instanceof Function && X.attributeNameCheck(C, u)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              C === "is" && X.allowCustomizedBuiltInElements && (X.tagNameCheck instanceof RegExp && pe(X.tagNameCheck, U) || X.tagNameCheck instanceof Function && X.tagNameCheck(U)))
            ) return !1;
          } else if (!Xt[C]) {
            if (!pe(R, ht(U, ne, ""))) {
              if (!((C === "src" || C === "xlink:href" || C === "href") && u !== "script" && ao(U, "data:") === 0 && Lr[u])) {
                if (!(O && !pe(ce, ht(U, ne, "")))) {
                  if (U)
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
    return u !== "annotation-xml" && or(u, xe);
  }, Gr = function(u) {
    Ue(j.beforeSanitizeAttributes, u, null);
    const {
      attributes: C
    } = u;
    if (!C || er(u))
      return;
    const U = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Y,
      forceKeepAttr: void 0
    };
    let se = C.length;
    for (; se--; ) {
      const me = C[se], {
        name: oe,
        namespaceURI: Ee,
        value: He
      } = me, tt = le(oe), tr = He;
      let de = oe === "value" ? tr : so(tr);
      if (U.attrName = tt, U.attrValue = de, U.keepAttr = !0, U.forceKeepAttr = void 0, Ue(j.uponSanitizeAttribute, u, U), de = U.attrValue, Ce && (tt === "id" || tt === "name") && (Ve(oe, u), de = Pe + de), D && pe(/((--!?|])>)|<\/(style|title|textarea)/i, de)) {
        Ve(oe, u);
        continue;
      }
      if (tt === "attributename" && or(de, "href")) {
        Ve(oe, u);
        continue;
      }
      if (U.forceKeepAttr)
        continue;
      if (!U.keepAttr) {
        Ve(oe, u);
        continue;
      }
      if (!J && pe(/\/>/i, de)) {
        Ve(oe, u);
        continue;
      }
      Z && Ct([k, z, F], (qr) => {
        de = ht(de, qr, " ");
      });
      const Wr = le(u.nodeName);
      if (!Ur(Wr, tt, de)) {
        Ve(oe, u);
        continue;
      }
      if (y && typeof x == "object" && typeof x.getAttributeType == "function" && !Ee)
        switch (x.getAttributeType(Wr, tt)) {
          case "TrustedHTML": {
            de = y.createHTML(de);
            break;
          }
          case "TrustedScriptURL": {
            de = y.createScriptURL(de);
            break;
          }
        }
      if (de !== tr)
        try {
          Ee ? u.setAttributeNS(Ee, oe, de) : u.setAttribute(oe, de), er(u) ? Me(u) : dn(t.removed);
        } catch {
          Ve(oe, u);
        }
    }
    Ue(j.afterSanitizeAttributes, u, null);
  }, ga = function H(u) {
    let C = null;
    const U = $r(u);
    for (Ue(j.beforeSanitizeShadowDOM, u, null); C = U.nextNode(); )
      Ue(j.uponSanitizeShadowNode, C, null), zr(C), Gr(C), C.content instanceof o && H(C.content);
    Ue(j.afterSanitizeShadowDOM, u, null);
  };
  return t.sanitize = function(H) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, C = null, U = null, se = null, me = null;
    if (Qt = !H, Qt && (H = "<!-->"), typeof H != "string" && !Br(H))
      if (typeof H.toString == "function") {
        if (H = H.toString(), typeof H != "string")
          throw pt("dirty is not a string, aborting");
      } else
        throw pt("toString is not a function");
    if (!t.isSupported)
      return H;
    if (q || Jt(u), t.removed = [], typeof H == "string" && (Oe = !1), Oe) {
      if (H.nodeName) {
        const He = le(H.nodeName);
        if (!B[He] || we[He])
          throw pt("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (H instanceof l)
      C = kr("<!---->"), U = C.ownerDocument.importNode(H, !0), U.nodeType === yt.element && U.nodeName === "BODY" || U.nodeName === "HTML" ? C = U : C.appendChild(U);
    else {
      if (!ae && !Z && !G && // eslint-disable-next-line unicorn/prefer-includes
      H.indexOf("<") === -1)
        return y && ve ? y.createHTML(H) : H;
      if (C = kr(H), !C)
        return ae ? null : ve ? E : "";
    }
    C && ee && Me(C.firstChild);
    const oe = $r(Oe ? H : C);
    for (; se = oe.nextNode(); )
      zr(se), Gr(se), se.content instanceof o && ga(se.content);
    if (Oe)
      return H;
    if (ae) {
      if (ue)
        for (me = P.call(C.ownerDocument); C.firstChild; )
          me.appendChild(C.firstChild);
      else
        me = C;
      return (Y.shadowroot || Y.shadowrootmode) && (me = $.call(r, me, !0)), me;
    }
    let Ee = G ? C.outerHTML : C.innerHTML;
    return G && B["!doctype"] && C.ownerDocument && C.ownerDocument.doctype && C.ownerDocument.doctype.name && pe(ea, C.ownerDocument.doctype.name) && (Ee = "<!DOCTYPE " + C.ownerDocument.doctype.name + `>
` + Ee), Z && Ct([k, z, F], (He) => {
      Ee = ht(Ee, He, " ");
    }), y && ve ? y.createHTML(Ee) : Ee;
  }, t.setConfig = function() {
    let H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Jt(H), q = !0;
  }, t.clearConfig = function() {
    et = null, q = !1;
  }, t.isValidAttribute = function(H, u, C) {
    et || Jt({});
    const U = le(H), se = le(u);
    return Ur(U, se, C);
  }, t.addHook = function(H, u) {
    typeof u == "function" && mt(j[H], u);
  }, t.removeHook = function(H, u) {
    if (u !== void 0) {
      const C = ro(j[H], u);
      return C === -1 ? void 0 : no(j[H], C, 1)[0];
    }
    return dn(j[H]);
  }, t.removeHooks = function(H) {
    j[H] = [];
  }, t.removeAllHooks = function() {
    j = yn();
  }, t;
}
var vo = ta();
const xn = ["file", "camera", "camera2", "photo", "avatar", "attachment"];
function Eo(e) {
  return e.template ? e.template : "tab";
}
function No(e) {
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    const a = r.group || "Info";
    t[a] || (t[a] = { label: a, type: "fields", fields: [] }), t[a]?.fields?.push({ name: n, ...r });
  }), t;
}
const Ao = (e) => Object.entries(e ?? {}).filter(([, t]) => t.type === "geolocation").map(([t]) => t);
async function Ar() {
  if (!("geolocation" in navigator))
    throw new Error(
      "Geolocation is not supported by this browser. You cannot access this portal."
    );
  try {
    const e = await new Promise(
      (o, i) => {
        navigator.geolocation.getCurrentPosition(o, i, {
          enableHighAccuracy: !0,
          timeout: 3e4,
          maximumAge: 0
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
const To = ({
  field: e,
  formValues: t,
  parentData: n
}) => {
  const r = {}, a = (o) => o.startsWith("$parent.") ? n?.[o.slice(8)] : t?.[o];
  if (typeof e.parameter == "string" && e.parameter) {
    const o = e.parameter;
    if (o.startsWith("$parent.")) {
      const i = o.slice(8);
      r[i] = n?.[i];
    } else
      r[o] = t?.[o];
    return r;
  }
  if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
    for (const [o, i] of Object.entries(e.parameter))
      typeof i == "string" && (r[o] = a(i));
  return r;
}, So = (e) => {
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
};
function jo(e, t) {
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
function Ro(e, t = "create") {
  return Object.entries(e).filter(([, n]) => !(n.vmode === "edit" && t === "create")).map(([n, r]) => ({
    ...r,
    name: n
  }));
}
const ot = {
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
function it(e) {
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
) : e, ra = (e) => {
  const t = Array.isArray(e?.data?.data) ? e.data.data[0] : Array.isArray(e?.data) ? e.data[0] : e?.data?.data ?? e?.data;
  return t && typeof t == "object" && !Array.isArray(t) ? t : null;
}, Ge = (e, t, n, r) => {
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
};
function bn(e, t) {
  if (!t?.length) return e;
  const n = new Map(
    t.map((r) => [String(r.value), r.label])
  );
  if (typeof e == "number")
    return n.get(String(e)) ?? e;
  if (typeof e == "string") {
    const a = e.split(",").map((o) => o.trim()).map((o) => n.get(o)).filter(Boolean);
    return a.length ? a.join(", ") : e;
  }
  return e;
}
const wn = (e) => e == null || e === "", rt = (e) => e.type === "string", Kt = (e) => e === !0 || e === "true", _o = (e, t, n, r, a, o) => {
  const i = o === "create" && a ? aa(a) : {};
  e.forEach((l) => {
    const h = l?.name;
    if (!h) return;
    let c = r?.[h];
    const f = o === "create" && a ? sa(l) : null;
    o === "create" && f && i[f] !== void 0 && wn(c) && (c = i[f]), wn(c) && l.default && (c = l.default), xn.includes(l.type ?? "") ? t[h] = Array.isArray(c) ? c : typeof c == "string" && c.length > 0 ? c.split(",").map((S) => S.trim()).filter(Boolean) : [] : l.multiple === !0 || l.type === "tags" ? t[h] = Array.isArray(c) ? c : typeof c == "string" ? c.split(",").map((S) => S.trim()).filter(Boolean) : [] : l.type === "checkbox" ? t[h] = String(c ?? "false") : l.type === "json" ? t[h] = typeof c == "object" && c !== null ? JSON.stringify(c, null, 2) : c ?? "" : l.type === "date" ? t[h] = typeof c == "string" && c.trim() ? c.slice(0, 10) : null : l.type === "time" ? typeof c == "string" ? c.includes("T") ? t[h] = c.slice(11, 16) : t[h] = c.slice(0, 5) : t[h] = "" : h === "blocked" || h === "blacklist" ? t[h] = String(c ?? "false") : t[h] = c ?? "";
    let d;
    if (xn.includes(l.type ?? "")) {
      const S = je.array().of(
        je.string()
      );
      d = l.required ? S.min(1, l.error_message || `${l.label} is required`) : S;
    } else if (l.multiple === !0 || l.type === "tags") {
      const S = je.array().of(je.string());
      d = l.required ? S.min(1, l.error_message || `${l.label} is required`) : S;
    } else l.type === "email" ? d = je.string().email("Invalid email") : l.type === "number" ? d = je.number().typeError("Must be a number") : l.type === "json" ? d = je.string().test("json", "Invalid JSON", (S) => {
      if (!S) return !0;
      try {
        return JSON.parse(S), !0;
      } catch {
        return !1;
      }
    }) : l.type === "date" ? d = je.string().nullable() : d = je.string();
    l?.validate && Object.entries(l.validate).forEach(([S, x]) => {
      switch (S) {
        case "email":
          x && (d = d.email("Invalid email format"));
          break;
        case "mobile":
          rt(d) && (d = d.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          ));
          break;
        case "regex":
          rt(d) && (d = d.matches(
            new RegExp(x),
            l?.error_message || `Must match pattern: ${x}`
          ));
          break;
        case "date":
          d = d.nullable().test(
            "date",
            "Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)",
            (p) => {
              if (p == null || p === "") return !0;
              const g = p.replace(/-/g, "/"), [b, _, v] = g.split("/");
              if (!b || !_ || !v) return !1;
              const m = /* @__PURE__ */ new Date(`${v}-${_}-${b}`);
              return !isNaN(m.getTime());
            }
          );
          break;
        case "time":
          rt(d) && (d = d.matches(
            /^([0-1][0-9]|2[0-3])[:\-]([0-5][0-9])$/,
            "Invalid time format (HH:MM)"
          ));
          break;
        case "timesec":
          rt(d) && (d = d.matches(
            /^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/,
            "Invalid time format (HH:MM:SS)"
          ));
          break;
        case "number":
        case "numeric":
          d = je.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          d = je.number().typeError("Must be a decimal").transform((p, g) => {
            if (g == null || g === "") return;
            const b = Number(g);
            if (isNaN(b)) return p;
            if (typeof p == "number" && !isNaN(p)) {
              const _ = Number(p);
              return Number.isInteger(_) ? Number(b.toFixed(_)) : b;
            }
            return b;
          });
          break;
        case "alphanumeric":
          rt(d) && (d = d.matches(
            /^[a-z0-9]+$/i,
            "Must be alphanumeric"
          ));
          break;
        case "alpha":
          rt(d) && (d = d.matches(
            /^[a-zA-Z]+$/,
            "Must contain only letters"
          ));
          break;
        case "upper":
          d = d.transform(
            (p) => p && p.toUpperCase()
          );
          break;
        case "lower":
          d = d.transform(
            (p) => p && p.toLowerCase()
          );
          break;
        case "length-min": {
          const p = Number(x);
          isNaN(p) || (d = d.min(p, `Minimum length is ${p}`));
          break;
        }
        case "length-max": {
          const p = Number(x);
          isNaN(p) || (d = d.max(p, `Maximum length is ${p}`));
          break;
        }
      }
    }), l.required && (d = d.required(
      l.error_message || `${l.label || h} is required`
    )), n[h] = d;
  });
};
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
const zt = (e, t) => {
  if (!(!e || t == null))
    return e.find((n) => String(n.value) === String(t))?.label;
}, Lo = (e) => e.reduce((t, n) => {
  const r = n.group || "__ungrouped__";
  return t[r] || (t[r] = []), t[r].push(n), t;
}, {}), Fo = (e) => e >= 1024 * 1024 ? `${(e / (1024 * 1024)).toFixed(2)} MB` : `${(e / 1024).toFixed(0)} KB`, Io = ({
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
        `File "${h.name}" exceeds max size of ${Fo(r)}`
      ), e.currentTarget.value = "", null;
  }
  return a;
}, Po = (e) => {
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
}, Mt = (e) => e ? Array.isArray(e) ? e.map((t) => ({
  value: String(t.value),
  label: String(t.label ?? t.title ?? t.value),
  group: t.group ?? t.category ?? // 👈 support category if present
  void 0
})) : typeof e == "object" ? Object.entries(e).map(([t, n]) => ({
  value: String(t),
  label: String(n)
})) : [] : [], Be = (e, t) => {
  const n = Mt(e.options_top), r = Mt(e.options), a = t ?? [], o = Mt(e.options_bottom), i = /* @__PURE__ */ new Set(), l = (h) => h.filter((c) => i.has(c.value) ? !1 : (i.add(c.value), !0));
  return [
    ...l(n),
    ...l(r),
    ...l(a),
    ...l(o)
  ];
}, Re = (e) => {
  if (e == null || typeof e != "object")
    return { value: e, title: e };
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
function Do(e) {
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
const Mo = "__form_persist__", na = (e) => `${Mo}:${e}`;
function ko(e) {
  return vo.sanitize(e, {
    USE_PROFILES: { html: !0 }
  });
}
function aa(e) {
  try {
    return JSON.parse(localStorage.getItem(na(e)) || "{}");
  } catch {
    return {};
  }
}
function sa(e) {
  return e.persistent ? e.persistent === !0 ? e.name : typeof e.persistent == "string" ? e.persistent : null : null;
}
function $o(e, t, n) {
  const r = aa(e);
  localStorage.setItem(
    na(e),
    JSON.stringify({
      ...r,
      [t]: n
    })
  );
}
function Ke(e, t, n) {
  const r = sa(t);
  r && n && $o(n, r, e);
}
function dr(e) {
  return W.isAxiosError(e) ? e.response?.data?.message || e.message || "Something went wrong" : e instanceof Error ? e.message : typeof e == "string" ? e : "Something went wrong";
}
function fr(e, t) {
  return t === !1 ? null : typeof t == "string" ? t : e?.data?.message ? e.data.message : e?.message ? e.message : "Operation completed successfully";
}
const oa = ({
  uploads: e,
  currentValue: t,
  multiple: n
}) => {
  const r = Array.isArray(t) ? t : t ? [t] : [], a = e.map((o) => `${o.fileId}&${o.path}`);
  return [...r, ...a];
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
}, Uo = (e) => e === "today" ? (/* @__PURE__ */ new Date()).toISOString().split("T")[0] : e, Ho = (e) => {
  const t = e?.data;
  return Array.isArray(t?.results?.options) ? t.results.options[0] : Array.isArray(t?.data) ? t.data[0] : Array.isArray(t?.results) ? t.results[0] : Array.isArray(t) ? t[0] : t?.results ?? t;
}, xt = (e) => ({
  Authorization: `Bearer ${e.accessToken}`
}), mr = async (e) => (await W.get(
  e.baseURL + e.dbopsGetHash,
  { headers: xt(e) }
)).data.refhash, hr = async (e, t) => (await W.post(
  e.baseURL + e.dbopsGetRefId,
  t,
  { headers: xt(e) }
)).data.refid, Go = {
  async fetch(e, t, n, r) {
    const a = await mr(e);
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
    const h = await W.post(
      e.baseURL + e.dbopsFetch,
      l,
      { headers: xt(e) }
    );
    return h.data?.data ?? h.data;
  },
  async create(e, t, n) {
    const r = await mr(e), a = await hr(e, {
      operation: "create",
      source: t.source,
      fields: t.values,
      datahash: r,
      srcid: n
    });
    return (await W.post(
      e.baseURL + e.dbopsCreate,
      { refid: a, fields: t.values, datahash: r },
      { headers: xt(e) }
    )).data;
  },
  async update(e, t, n) {
    const r = await mr(e), a = await hr(e, {
      operation: "update",
      source: t.source,
      fields: t.values,
      datahash: r,
      srcid: n
    });
    return (await W.post(
      e.baseURL + e.dbopsUpdate,
      { refid: a, fields: t.values, datahash: r },
      { headers: xt(e) }
    )).data;
  }
};
async function nt(e, t, n, r = void 0, a = void 0, o = {}) {
  try {
    let i = n;
    return i || (i = (await W({
      method: "POST",
      url: e.baseURL + e.registerQuery,
      data: { query: t, srcid: a },
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
async function Wo({
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
      let S = e.name;
      typeof e.parameter == "string" && e.parameter && (S = e.parameter);
      const x = { [S]: t, refid: t };
      if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
        for (const [b, _] of Object.entries(e.parameter))
          x[b] = b === S ? t : a?.[_];
      const p = {
        method: l.method || "GET",
        url: n?.baseURL + l.endpoint,
        headers: {
          Authorization: `Bearer ${n?.accessToken}`
        },
        ...l.method === "GET" ? { params: x } : { data: x }
      }, { data: g } = await W(p);
      h = g;
    } else {
      let S;
      if (!l.queryid) {
        if (!l.table || !l.columns)
          throw new Error("SQL query requires field.table");
        const x = Ae(l.where ?? {}, { refid: t });
        S = {
          ...l,
          table: l.table,
          cols: l.columns,
          where: x
        };
      }
      try {
        const { data: x } = await nt(
          n,
          S,
          l.queryid,
          t
        );
        h = x;
      } catch {
      }
    }
    const c = Array.isArray(h?.results?.options) ? h?.results?.options : Array.isArray(h.data) ? h.data : Array.isArray(h.results) ? h.results : h, f = Array.isArray(c) ? c.map(Re) : [], d = Ge(
      e.valueKey ?? "value",
      e.labelKey ?? "title",
      f,
      e.groupKey
    );
    r(i.target, d);
  }
}
async function qo(e, t) {
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
async function ia(e, t) {
  const n = e?.uploadURL ?? "/api/files/upload";
  return Promise.all(
    Array.from(t).map(async (r) => {
      const a = new FormData();
      return a.append("file", r), (await W.post(`${e?.baseURL}${n}`, a, {
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
function At({
  field: e,
  data: t,
  methods: n = {},
  sqlOpsUrls: r,
  refid: a,
  module_refid: o,
  optionsOverride: i,
  AttachmentPopup: l,
  setFieldOptions: h
}) {
  e?.name;
  const c = `
    text-sm text-gray-600 break-words capitalize
  `, f = `
    block text-sm font-semibold  transition-all duration-300 text-gray-700 capitalize
  `, [d, S] = fe(
    Be(e, i ?? [])
  ), x = te.useRef(!1);
  te.useEffect(() => {
    i && S(i);
  }, [i]);
  const p = te.useMemo(
    () => Mt(d),
    [d]
  );
  te.useEffect(() => {
    let y = !0;
    return (async () => {
      let N = e.valueKey ?? "value", L = e.labelKey ?? "title";
      const P = e?.source ?? {};
      if (e.type === "dataMethod") {
        const I = e.method, $ = I ? n[I] : void 0;
        if ($)
          try {
            const j = await $(), k = Array.isArray(j.data?.results?.options) ? j.data?.results?.options : Array.isArray(j?.data?.data) ? j.data.data : Array.isArray(j.data?.results) ? j.data?.results : Array.isArray(j?.data) ? j.data : j, z = Array.isArray(k) ? k.map(Re) : [], F = Ge(N, L, z, e.groupKey);
            y && S(Be(e, F));
            return;
          } catch (j) {
            console.error("Method execution failed:", j), y && S([]);
            return;
          }
        else {
          y && S([]);
          return;
        }
      }
      if (P.type === "api" && P.endpoint)
        try {
          const I = {
            method: P.method || "GET",
            url: r?.baseURL + P.endpoint,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            },
            ...P.method === "GET" ? { params: { refid: P.refid } } : { data: { refid: P.refid } }
          }, $ = await W(I), j = Array.isArray($.data?.results?.options) ? $.data?.results?.options : Array.isArray($?.data?.data) ? $.data.data : Array.isArray($.data?.results) ? $.data?.results : Array.isArray($?.data) ? $.data : $, k = Array.isArray(j) ? j.map(Re) : [], z = Ge(N, L, k, e.groupKey);
          y && S(Be(e, z));
          return;
        } catch (I) {
          console.error("API execution failed:", I), y && S([]);
          return;
        }
      if (e.table || e.type === "dataSelector" || e.queryid) {
        if (!r) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let I;
          if (e.type === "dataSelector")
            I = {
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
            I = {
              table: e.table,
              cols: e.columns,
              where: e.where ? a ? Ae(e.where, { refid: a }) : e.where : void 0
            };
          }
          const $ = await nt(r, I, e?.queryid, void 0, o), j = Array.isArray($?.data?.data) ? $.data.data : Array.isArray($?.data) ? $.data : $, k = Array.isArray(j) ? j.map(Re) : [], z = Ge(N, L, k, e.groupKey);
          y && S(Be(e, z));
        } catch (I) {
          console.error("API fetch failed:", I);
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
    a
  ]);
  const g = e?.name ? t?.[e.name] : void 0;
  te.useEffect(() => {
    x.current || !h || !g || (x.current = !0, Wo({
      field: e,
      value: g,
      sqlOpsUrls: r,
      setFieldOptions: h,
      values: t ?? {}
    }));
  }, [g, r, h]);
  let b;
  typeof g == "string" ? e.type === "date" ? b = g.split("T")[0] : e.type === "time" ? b = g.includes("T") ? g.slice(11, 16) : g.slice(0, 5) : b = bn(g, p) : b = bn(g, p);
  const _ = b == null ? "" : typeof b == "string" || typeof b == "number" ? b : JSON.stringify(b), v = Do(g), m = e.type === "richtextarea" && typeof _ == "string" ? ko(_) : null;
  return /* @__PURE__ */ s.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ s.jsx("label", { className: f, children: e?.label }),
    /* @__PURE__ */ s.jsx("div", { className: "relative", children: v ? v.type === "drawn" ? /* @__PURE__ */ s.jsx("svg", { viewBox: "0 0 300 150", className: "h-24 w-full border bg-white rounded", children: v.paths.map((y, E) => /* @__PURE__ */ s.jsx(
      "path",
      {
        d: y.d,
        stroke: y.color || "#000",
        strokeWidth: y.width || 2,
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      E
    )) }) : v.type === "text" ? /* @__PURE__ */ s.jsx("svg", { viewBox: "0 0 300 150", className: "h-24 w-full border bg-white rounded", children: /* @__PURE__ */ s.jsx(
      "text",
      {
        x: "10",
        y: "100",
        fontSize: v.data.style?.fontSize || 32,
        fontFamily: v.data.style?.fontFamily || "cursive",
        fill: v.data.style?.textColor || "#000",
        children: v.data.text
      }
    ) }) : v.type === "html" ? /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "border bg-white rounded p-2 text-sm",
        dangerouslySetInnerHTML: { __html: v.html }
      }
    ) : /* @__PURE__ */ s.jsx(
      "img",
      {
        src: v.src,
        alt: "signature",
        className: "h-24 object-contain border bg-white rounded"
      }
    ) : (e.type === "file" || e.type === "camera" || e.type === "camera2" || e.type === "attachement" || e.type === "photo" || e.type === "avatar") && b ? /* @__PURE__ */ s.jsx("div", { className: "flex flex-wrap gap-2", children: l && String(b).split(",").map((y) => y.trim()).filter(Boolean).map((y) => /* @__PURE__ */ s.jsx(
      l,
      {
        url: y
      },
      y
    )) }) : e.type === "richtextarea" ? /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "tiptap border border-gray-200 min-h-[400px] max-h-[220px] overflow-auto bg-white rounded p-2 text-sm",
        dangerouslySetInnerHTML: { __html: m ?? "" }
      }
    ) : /* @__PURE__ */ s.jsx("p", { className: c, children: _ }) })
  ] });
}
function ca({ filePath: e, field_name: t, sqlOpsUrls: n }) {
  const [r, a] = fe(null), o = e.replace(/^[^&]*&/, "");
  return Ne(() => {
    if (!open || !n) return;
    let i = !0, l = null;
    return qo(o, n).then((h) => {
      i && (l = h, a(h));
    }), () => {
      i = !1, l && URL.revokeObjectURL(l);
    };
  }, [open, o, n]), r ? /* @__PURE__ */ s.jsx("div", { className: "h-24 w-24 rounded border border-dashed bg-gray-50 flex items-center justify-center", children: r ? /* @__PURE__ */ s.jsx(
    "img",
    {
      alt: t,
      title: t,
      src: r,
      className: "h-24 w-24 object-cover rounded"
    }
  ) : /* @__PURE__ */ s.jsx("i", { className: "fa-regular fa-image text-gray-400 text-2xl" }) }) : null;
}
function Vo({
  commonInfo: e,
  infoData: t,
  hiddenFields: n = [],
  sqlOpsUrls: r,
  setFieldOptions: a,
  fieldOptions: o,
  module_refid: i,
  refid: l,
  methods: h,
  AttachmentPopup: c
}) {
  const f = Lt(
    () => e?.fields?.find((x) => x.type === "avatar"),
    [e?.fields]
  ), d = f?.name, S = d && typeof t?.[d] == "string" ? t[d].trim() : "";
  return /* @__PURE__ */ s.jsx("div", { className: "bg-white border border-gray-100 p-4 min-h-3/10 overflow-auto", children: /* @__PURE__ */ s.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    f && /* @__PURE__ */ s.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ s.jsx("div", { className: "relative w-42 h-42 p-2 rounded-sm overflow-hidden bg-gray-100 flex items-center justify-center", children: S ? /* @__PURE__ */ s.jsx(
      ca,
      {
        field_name: f.name,
        filePath: S,
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
    /* @__PURE__ */ s.jsx("div", { className: `min-h-0 max-h-40 overflow-y-auto custom-scrollbar ${f ? "lg:col-span-10" : "lg:col-span-12"}`, children: /* @__PURE__ */ s.jsx("div", { className: "grid grid-cols-12 gap-2", children: e.fields?.map((x, p) => n.includes(x.name) || x.type === "avatar" ? null : /* @__PURE__ */ s.jsx("div", { className: `hover:bg-gray-100 transition-colors duration-200 col-span-12 sm:col-span-6 ${ot[it(Number(x.width))] || "lg:col-span-4"}`, children: /* @__PURE__ */ s.jsx(
      At,
      {
        field: x,
        data: t ?? {},
        sqlOpsUrls: r,
        methods: h,
        refid: l,
        module_refid: i,
        setFieldOptions: a,
        ...o[x.name] ? { optionsOverride: o[x.name] } : {},
        AttachmentPopup: c
      },
      x?.name
    ) }, x.name)) }) })
  ] }) });
}
function Rr({ tabObj: e, methods: t, tabName: n, sqlOpsUrls: r, refid: a, module_refid: o, setFieldOptions: i, fieldOptions: l, AttachmentPopup: h }) {
  const [c, f] = te.useState(null);
  return te.useEffect(() => {
    let d = !1;
    return (async () => {
      const x = e?.config;
      if (!x?.type) {
        d || f(null);
        return;
      }
      if (x.type === "method") {
        const p = x.method, g = p ? t[p] : void 0;
        if (g)
          try {
            const b = await Promise.resolve(g());
            d || f(b || null);
          } catch (b) {
            console.error("Method execution failed:", b), d || f(null);
          }
        else
          d || f(null);
      }
      if (x.type === "api")
        try {
          const p = await W({
            method: x.method || "GET",
            // GET, POST, etc.
            url: x.url,
            data: x.body || {},
            // request body
            params: x.params || {},
            // query params
            headers: x.headers || {}
            // optional headers
          });
          d || f(p.data || null);
        } catch (p) {
          console.error("API fetch failed:", p), d || f(null);
        }
      if (x.type === "sql" && a && a != "0" || x?.dbopsid) {
        if (!r) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let p = !1, g;
          x?.dbopsid && (p = !0, g = x?.dbopsid);
          const b = await W({
            method: "GET",
            url: r.baseURL + r.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            }
          });
          if (!p) {
            let m = {
              ...x
            };
            x.where && (m = {
              ...x,
              where: Ae(x.where, {
                refid: a
              })
            }), g = (await W({
              method: "POST",
              url: r.baseURL + r.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: m,
                fields: Bt(x.fields, r.operation),
                forcefill: x.forcefill,
                datahash: b.data.refhash,
                srcid: o
              },
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              }
            }))?.data.refid;
          }
          const _ = await W({
            method: "POST",
            url: r.baseURL + r.dbopsFetch,
            data: {
              refid: g,
              datahash: b.data.refhash
            },
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            }
          }), v = ra(_);
          d || f(v);
        } catch (p) {
          console.error("API fetch failed:", p);
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
  ]), /* @__PURE__ */ s.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ s.jsx("div", { className: "grid grid-cols-12 gap-2", children: c ? Object.keys(c).map((d, S) => {
    let x = { name: d, label: d };
    return /* @__PURE__ */ s.jsx(
      "div",
      {
        className: `col-span-12 sm:col-span-6 ${ot[it(e.width)] || "lg:col-span-2"}`,
        children: /* @__PURE__ */ s.jsx(
          At,
          {
            field: x,
            data: c ?? {},
            methods: t,
            refid: a,
            sqlOpsUrls: r,
            setFieldOptions: i,
            ...l[x.name] ? { optionsOverride: l[x.name] } : {},
            AttachmentPopup: h
          },
          d
        )
      },
      `field-${S}`
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
function Ko({
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
function Yo({
  field: e,
  formik: t,
  methods: n = {},
  sqlOpsUrls: r,
  refid: a,
  module_refid: o = "menuManager.main",
  optionsOverride: i,
  setFieldOptions: l,
  chainMap: h,
  setFieldLoading: c,
  parent_data: f
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
  ].includes(e?.type || "text"), [S, x] = fe(!1), [p, g] = fe(d), [b, _] = fe(
    Be(e, i ?? [])
  ), [v, m] = fe(0), [y, E] = fe(""), [N, L] = fe(0), P = Xe(null), I = Xe(null), [$, j] = fe(!1), k = Xe(y), z = e.disabled === !0;
  Ne(() => {
    k.current = y;
  }, [y]), Ne(() => {
    if (e.type !== "select" || e.multiple || e["no-option"] !== "false" || t.values[F] || b.length === 0) return;
    const M = b[0]?.value;
    M != null && t.setFieldValue(F, M, !1);
  }, [b]), Ne(() => {
    i && _(Be(e, i));
  }, [i]), Ne(() => {
    window.formAPI = {
      setValue: (T, M) => {
        t.setFieldValue(T, M);
      },
      getValue: (T) => t.values[T],
      setValues: (T) => {
        Object.entries(T).forEach(([M, O]) => {
          t.setFieldValue(M, O);
        });
      },
      getValues: () => t.values
    }, window.setFieldValue = (T, M) => {
      t.setFieldValue(T, M);
    };
  }, [t]), Ne(() => {
    if (!$) return;
    const T = (M) => {
      const O = M.target;
      I.current?.contains(O) || P.current?.contains(O) || (j(!1), E(""));
    };
    return document.addEventListener("mousedown", T), () => {
      document.removeEventListener("mousedown", T);
    };
  }, [$]);
  const F = e.name;
  Ne(() => {
    let T = !0;
    return (async () => {
      try {
        let O = e.valueKey ?? "value", J = e.labelKey ?? "title";
        const Z = e?.source ?? {};
        if (e.type === "dataMethod") {
          const D = e.method, G = D ? n[D] : void 0;
          if (G)
            try {
              const q = await G(), ee = Array.isArray(q.data?.results?.options) ? q.data?.results?.options : Array.isArray(q?.data?.data) ? q.data.data : Array.isArray(q.data?.results) ? q.data?.results : Array.isArray(q?.data) ? q.data : q, ae = Array.isArray(ee) ? ee.map(Re) : [], ue = Ge(O, J, ae, e.groupKey);
              T && _(Be(e, ue));
              return;
            } catch (q) {
              console.error("Method execution failed:", q), T && _([]);
              return;
            }
          else {
            T && _([]);
            return;
          }
        }
        if (Z.type === "api" && Z.endpoint)
          try {
            let D = {};
            if (Z.refid && (D.refid = Z.refid), e.parameter) {
              const ve = To({ field: e, formValues: t.values, parentData: f });
              D = { ...D, ...ve };
            }
            const G = {
              method: Z.method || "GET",
              url: r?.baseURL + Z.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...Z.method === "GET" ? { params: { refid: Z.refid } } : { data: D }
            }, q = await W(G), ee = Array.isArray(q.data?.results?.options) ? q.data?.results?.options : Array.isArray(q?.data?.data) ? q.data.data : Array.isArray(q.data?.results) ? q.data?.results : Array.isArray(q?.data) ? q.data : q, ae = Array.isArray(ee) ? ee.map(Re) : [], ue = Ge(O, J, ae, e.groupKey);
            T && _(Be(e, ue));
            return;
          } catch (D) {
            console.error("API execution failed:", D), T && _([]);
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
                where: e.where ? a ? Ae(e.where, { refid: a }) : e.where : void 0
              };
            }
            const G = await nt(r, D, e?.queryid, void 0, o), q = Array.isArray(G?.data?.data) ? G.data.data : Array.isArray(G?.data) ? G.data : G, ee = Array.isArray(q) ? q.map(Re) : [], ae = Ge(O, J, ee, e.groupKey);
            T && _(Be(e, ae));
          } catch (D) {
            console.error("API fetch failed:", D);
          }
        }
      } catch (O) {
        console.log(O);
      } finally {
        T && d && g(!1);
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
    a,
    e.queryid,
    e.groupKey,
    e.valueKey,
    e.labelKey,
    v
  ]);
  const A = `
  w-full px-4 py-2 rounded-lg border transition-all duration-300
  backdrop-blur-sm text-gray-800 placeholder-gray-400
  focus:outline-none focus:ring-0

  ${z ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:shadow-md"}
`, ie = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, ce = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, ne = Lt(
    () => Po(b),
    [b]
  ), xe = Lt(() => {
    if (!e.type || !["suggest", "autosuggest", "autocomplete"].includes(e.type) || !y.trim()) return null;
    const T = y.trim().toLowerCase();
    return ne.find(([, M]) => M.trim().toLowerCase() === T);
  }, [e.type, y, ne]), R = ne.length, B = !!(e.search && (e.queryid || e.table)), V = Lt(() => B || !y ? ne : ne.filter(
    ([, T]) => T.toLowerCase().includes(y.toLowerCase())
  ), [B, y, ne]), Y = (T, M) => {
    if ($)
      if (T.key === "ArrowDown")
        T.preventDefault(), L(
          (O) => O + 1 < V.length ? O + 1 : 0
        );
      else if (T.key === "ArrowUp")
        T.preventDefault(), L(
          (O) => O - 1 >= 0 ? O - 1 : V.length - 1
        );
      else if (T.key === "Enter") {
        T.preventDefault();
        const [O] = V[N] || [];
        if (O) {
          let J = M ? O : [...t.values[e.name], O];
          t.setFieldValue(e.name, J), Ke(J, e, o);
        }
        j(!1);
      } else T.key === "Escape" && (E(""), j(!1));
  };
  Ne(() => {
    P.current?.querySelector(
      `[data-index="${N}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [N]), Ne(() => {
    N >= V.length && L(0);
  }, [V, N]), Ne(() => {
    const T = e.autocomplete, M = e.ajaxchain;
    if (!T && !M) return;
    const O = t.values[e.name];
    if (!O) return;
    const J = Array.isArray(M) ? M : M ? [M] : [];
    (async () => {
      try {
        if (Co(T)) {
          const D = T.src;
          if (!D || !r) return;
          let G;
          if ("type" in D && D.type === "api") {
            let ee = e.name;
            typeof e.parameter == "string" && e.parameter && (ee = e.parameter);
            const ae = { [ee]: O, refid: O };
            if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
              for (const [qe, Ce] of Object.entries(e.parameter))
                ae[qe] = qe === ee ? O : t.values?.[Ce];
            const ue = {
              method: D.method || "GET",
              url: r?.baseURL + D.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...D.method === "GET" ? { params: ae } : { data: ae }
            }, ve = await W(ue);
            G = Ho(ve);
          } else {
            let ee;
            if (!D.queryid) {
              if (!D.table || !D.columns)
                throw new Error("SQL query requires field.table");
              const ue = Ae(D?.where ?? {}, {
                refid: O
              });
              ee = {
                ...D,
                table: D.table,
                cols: D.columns,
                where: ue
              };
            }
            const { data: ae } = await nt(r, ee, D?.queryid, O, o);
            G = Array.isArray(ae?.data?.data) ? ae.data.data[0] : Array.isArray(ae?.data) ? ae.data[0] : ae?.data;
          }
          let q = Re(G);
          q && T.target.split(",").map((ee) => ee.trim()).forEach((ee) => {
            q[ee] !== void 0 && t.setFieldValue(ee, q[ee]);
          });
        }
        for (const D of J) {
          c?.(D.target, !0);
          const G = D.src;
          if (!D || typeof D != "object" || !G || typeof G != "object" || !r) continue;
          let q;
          if ("type" in G && G.type === "api") {
            let Ce = e.name;
            typeof e.parameter == "string" && e.parameter && (Ce = e.parameter);
            let Pe = { [Ce]: O, refid: O };
            if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
              for (const [Oe, We] of Object.entries(e.parameter))
                Pe[Oe] = Oe === Ce ? O : t.values?.[We];
            const lt = {
              method: G.method || "GET",
              url: r?.baseURL + G.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...G.method === "GET" ? { params: Pe } : { data: Pe }
            };
            try {
              const { data: Oe } = await W(lt);
              q = Oe;
            } catch {
            } finally {
              c?.(D.target, !1);
            }
          } else {
            let Ce;
            if (!G.queryid) {
              if (!G.table || !G.columns)
                throw new Error("SQL query requires field.table");
              const Pe = Ae(G?.where ?? {}, {
                refid: O
              });
              Ce = {
                ...G,
                table: G.table,
                cols: G.columns,
                where: Pe
              };
            }
            try {
              const { data: Pe } = await nt(r, Ce, G?.queryid, O, o);
              q = Pe;
            } catch {
            } finally {
              c?.(D.target, !1);
            }
          }
          let ee = e.valueKey ?? "value", ae = e.labelKey ?? "title";
          const ue = Array.isArray(q?.results?.options) ? q?.results?.options : Array.isArray(q.data) ? q.data : Array.isArray(q.results) ? q.results : q, ve = Array.isArray(ue) ? ue.map(Re) : [], qe = Ge(
            ee,
            ae,
            ve,
            e.groupKey
          );
          t.setFieldValue(D.target, t.initialValues[D.target]), l?.(D.target, qe);
        }
      } catch (D) {
        console.error("Autocomplete / AjaxChain fetch failed", D);
      }
    })();
  }, [t.values[e.name]]), Ne(() => {
    if (!B || !y.trim() || !r) return;
    const T = Oo(e.columns ?? ""), M = new AbortController(), O = setTimeout(async () => {
      try {
        g(!0);
        let J;
        if (!e.queryid) {
          if (!e.table || !e.cols)
            throw new Error("SQL query requires field.table");
          const ve = a ? Ae(e.where ?? {}, {
            refid: a
          }) : e.where;
          J = {
            ...e,
            table: e.table,
            cols: e.columns || e.cols,
            where: ve
          };
        }
        let Z = {};
        Array.isArray(T) && T.forEach((ve) => {
          Z[ve] = [y, "LIKE"];
        });
        let D = e.valueKey ?? "value", G = e.labelKey ?? "title";
        const { data: q } = await nt(r, J, e?.queryid, void 0, o, Z), ee = Array.isArray(q?.data?.data) ? q.data.data : Array.isArray(q?.data) ? q.data : q, ae = Array.isArray(ee) ? ee.map(Re) : [], ue = Ge(
          D,
          G,
          ae,
          e.groupKey
        );
        _(Be(e, ue));
      } catch (J) {
        if (W.isCancel(J)) return;
        console.error("Search fetch failed", J);
      } finally {
        g(!1);
      }
    }, 500);
    return () => {
      clearTimeout(O), M.abort();
    };
  }, [B, y, a]);
  const be = async (T) => {
    if (T.length === 0) {
      console.error("No file");
      return;
    }
    try {
      g(!0);
      const M = await ia(r, T), O = oa({
        uploads: M,
        currentValue: t.values[F],
        multiple: e.multiple ?? !1
      });
      t.setFieldValue(
        F,
        O
      ), Ke(O, e, o);
    } catch (M) {
      console.error("File upload failed", M), t.setFieldError(F, "File upload failed");
    } finally {
      g(!1);
    }
  }, X = async (T) => {
    const M = Array.isArray(t.values[F]) ? t.values[F] : [], O = T.split("&")[0];
    if (!O) return;
    const J = M.filter((Z) => Z.split("&")[0] !== O);
    t.setFieldValue(F, J);
    try {
      await la(r, O), Ke(J, e, o);
    } catch (Z) {
      console.log(Z), t.setFieldValue(F, M), window.alert("Failed to delete file due to a technical issue. Please try again.");
    }
  }, we = async (T, M, O) => {
    const J = M[T];
    if (!J) return;
    const Z = n?.[J];
    if (typeof Z != "function") {
      console.error(`Method "${String(J)}" not found`);
      return;
    }
    try {
      await Promise.resolve(Z(O));
    } catch (D) {
      console.error(`Method "${String(J)}" failed`, D);
    }
  };
  return {
    setHighlightedIndex: L,
    executeFieldMethod: we,
    handleFileUpload: be,
    handleKeyDown: Y,
    setSearch: E,
    setOpen: j,
    setIsFocused: x,
    handleInputChange: (T) => {
      if (z) return;
      const M = T.target.value;
      E(M), L(0), M.trim() ? j(!0) : (j(!1), t.setFieldValue(F, ""));
    },
    handleSelect: (T) => {
      t.setFieldValue(F, T), Ke(T, e, o), E(""), j(!1), we("onChange", e, `${F}-${T}`);
    },
    handlePersist: Ke,
    setLoading: g,
    removeFile: X,
    optionCount: R,
    baseInputClasses: A,
    focusClasses: ie,
    labelClasses: ce,
    search: y,
    highlightedIndex: N,
    options: b,
    isDisabled: z,
    key: F,
    filteredOptions: V,
    open: $,
    listRef: P,
    isFocused: S,
    exactMatch: xe,
    triggerRef: I,
    loading: p,
    refreshOptions: () => m((T) => T + 1)
  };
}
function _r({
  anchorRef: e,
  open: t,
  children: n,
  offset: r = 4,
  maxHeight: a = 240
}) {
  const [o, i] = fe({}), l = Xe(null);
  return ya(() => {
    if (!t || !e.current || !l.current) return;
    const h = e.current, c = () => {
      const d = h.getBoundingClientRect(), S = window.innerHeight, x = l.current?.offsetHeight || a, p = S - d.bottom, g = d.top, _ = p < x && g > p ? d.top - x - r : d.bottom + r;
      i({
        position: "fixed",
        top: _,
        left: d.left,
        minWidth: d.width,
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
  }, [t, e, r, a]), t ? ba(
    /* @__PURE__ */ s.jsx("div", { ref: l, style: o, children: n }),
    document.body
  ) : null;
}
function vn({
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
  handlePersist: d,
  module_refid: S,
  options: x,
  triggerRef: p,
  open: g,
  setOpen: b,
  loading: _
}) {
  const v = e.name;
  return /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ s.jsx(
      "input",
      {
        type: "hidden",
        name: v,
        value: JSON.stringify(c.values[v] ?? "")
      }
    ),
    /* @__PURE__ */ s.jsxs("label", { className: r, children: [
      e.label,
      e.required && /* @__PURE__ */ s.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        id: v,
        className: `
        relative w-full select-none border rounded-lg px-4 py-2.5 flex justify-between items-center
        ${t ? "opacity-70 bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 cursor-pointer"}
      `,
        ref: p,
        tabIndex: 0,
        onClick: () => {
          t || b((m) => !m);
        },
        onKeyDown: (m) => {
          t || n(m, !0);
        },
        children: [
          /* @__PURE__ */ s.jsx("span", { className: "text-sm text-gray-700", children: c.values[v] ? zt(x, c.values[v]) ?? "Select option" : `Select ${e.label}` }),
          _ ? /* @__PURE__ */ s.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) : /* @__PURE__ */ s.jsx(
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
    /* @__PURE__ */ s.jsx(_r, { anchorRef: p, open: g, children: /* @__PURE__ */ s.jsxs(
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
              onChange: (m) => {
                h(m.target.value);
              },
              onKeyDown: (m) => n(m, !0),
              placeholder: "Search...",
              className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                      bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                      focus:outline-none focus:ring-0`
            }
          ) }),
          i.length > 0 && /* @__PURE__ */ s.jsx(
            "div",
            {
              onClick: (m) => {
                m.preventDefault(), m.stopPropagation(), c.setFieldValue(v, ""), b(!1), d("", e, S), h("");
              },
              className: "px-2 py-1 hover:bg-gray-50 text-gray-500 rounded cursor-pointer text-sm hover:bg-gray-50",
              children: "Clear selection"
            }
          ),
          i.length > 0 ? i.map(([m, y], E) => /* @__PURE__ */ s.jsx(
            "div",
            {
              id: `${v}-${m}`,
              "data-index": E,
              onClick: (N) => {
                N.preventDefault(), N.stopPropagation(), c.setFieldValue(v, m), d(m, e, S), b(!1), h(""), f("onChange", e, `${v}-${m}`);
              },
              className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                            ${c.values[v] === m ? "bg-indigo-50 text-indigo-600 font-medium" : l === E ? "bg-gray-100" : "hover:bg-gray-50"}`,
              children: y
            },
            m
          )) : /* @__PURE__ */ s.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
        ]
      }
    ) }),
    c.touched[v] && c.errors[v] && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(c.errors[v]) })
  ] });
}
function En({
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
  executeFieldMethod: d,
  handlePersist: S,
  module_refid: x,
  options: p,
  triggerRef: g,
  open: b,
  setOpen: _,
  loading: v
}) {
  const m = e.name, y = p.map((N) => N.value), E = y.every((N) => r.includes(N));
  return /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ s.jsx(
      "input",
      {
        type: "hidden",
        name: m,
        value: JSON.stringify(r ?? [])
      }
    ),
    /* @__PURE__ */ s.jsxs("label", { className: a, children: [
      e.label,
      e.required && /* @__PURE__ */ s.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        id: m,
        className: `
    relative w-full select-none border rounded-lg px-4 py-2.5 flex justify-between items-center
    ${t ? " opacity-70 bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 cursor-pointer"}
  `,
        tabIndex: 0,
        ref: g,
        onClick: () => {
          t || _((N) => !N);
        },
        onKeyDown: (N) => {
          t || n(N, !1);
        },
        children: [
          /* @__PURE__ */ s.jsx("span", { className: "text-sm text-gray-700", children: r?.length > 0 ? r.map((N) => zt(p, N) ?? N).join(", ") : `Select ${e.label}` }),
          v ? /* @__PURE__ */ s.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) : /* @__PURE__ */ s.jsx(
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
    /* @__PURE__ */ s.jsx(_r, { anchorRef: g, open: b && !t, children: /* @__PURE__ */ s.jsxs("div", { ref: o, className: " w-full border border-gray-200 rounded-lg bg-white shadow-md  max-h-60 overflow-y-auto p-2", children: [
      e.search && /* @__PURE__ */ s.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ s.jsx(
        "input",
        {
          type: "text",
          value: i,
          onChange: (N) => {
            t || c(N.target.value);
          },
          placeholder: "Search...",
          className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
        }
      ) }),
      /* @__PURE__ */ s.jsxs(
        "label",
        {
          className: "flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm font-medium border-b mb-1",
          children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "checkbox",
                checked: E,
                onChange: (N) => {
                  const L = N.target.checked ? y : [];
                  f.setFieldValue(m, L), S(L, e, x), d("onChange", e, m);
                },
                disabled: t,
                className: "h-4 w-4 text-indigo-600 border-gray-300 rounded"
              }
            ),
            "Select All"
          ]
        }
      ),
      l.length > 0 ? l.map(([N, L], P) => /* @__PURE__ */ s.jsxs(
        "label",
        {
          htmlFor: `${m}-${N}`,
          className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${r?.includes(N) ? "bg-indigo-50 text-indigo-600 font-medium" : h === P ? "bg-gray-100" : "hover:bg-gray-50"}`,
          children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                id: `${m}-${N}`,
                type: "checkbox",
                checked: r?.includes(N),
                onChange: (I) => {
                  const $ = I.target.checked ? Array.from(/* @__PURE__ */ new Set([...r, N])) : r?.filter((j) => j !== N);
                  f.setFieldValue(m, $), S($, e, x), d("onChange", e, `${m}-${N}`);
                },
                onBlur: f.handleBlur,
                disabled: t,
                className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              }
            ),
            L
          ]
        },
        N
      )) : /* @__PURE__ */ s.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
    ] }) }),
    f.touched[m] && f.errors[m] && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(f.errors[m]) })
  ] });
}
function Xo({
  formik: e,
  field: t,
  sqlOpsUrls: n,
  module_refid: r
}) {
  let a = t?.name;
  const o = Xe(null), i = t.max !== void 0 ? Number(t.max) : 1 / 0, [l, h] = fe(!1), c = Array.isArray(e.values[a]) ? e.values[a] : e.values[a] ? [e.values[a]] : [], f = async (p) => {
    const g = p.currentTarget.files;
    if (!g?.length) return;
    const b = Array.from(p.currentTarget.files || []);
    if (c.length + b.length > i) {
      alert(`You can upload maximum ${i} file(s)`), p.currentTarget.value = "";
      return;
    }
    try {
      h(!0);
      const v = await ia(n, g), m = oa({
        uploads: v,
        currentValue: e.values[a],
        multiple: t.multiple ?? !1
      });
      e.setFieldValue(
        a,
        m
      ), Ke(m, t, r), p.target.value = "";
    } catch (v) {
      console.error("File upload failed", v), e.setFieldError(a, "File upload failed");
    } finally {
      h(!1);
    }
  }, d = async (p) => {
    const g = Array.isArray(e.values[a]) ? e.values[a] : [], b = p.split("&")[0];
    if (!b) return;
    const _ = g.filter((v) => v.split("&")[0] !== b);
    e.setFieldValue(a, _);
    try {
      if (!p.split("&")[0]) return;
      await la(n, b), Ke(_, t, r);
    } catch {
      e.setFieldValue(a, g), window.alert("Failed to delete file due to a technical issue. Please try again.");
    }
  }, S = Bo(t), x = t.multiple === !0;
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
        ...S,
        onChange: f
      }
    ),
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "flex flex-wrap gap-2",
        children: [
          c.length > 0 ? c.map((p) => /* @__PURE__ */ s.jsxs("div", { className: "relative group", children: [
            /* @__PURE__ */ s.jsx(
              ca,
              {
                field_name: p,
                filePath: p,
                sqlOpsUrls: n
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  d(p);
                },
                className: "absolute -top-2 -right-2 cursor-pointer bg-white text-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xl cursor-pointer transition",
                children: "×"
              }
            )
          ] }, p)) : null,
          /* @__PURE__ */ s.jsx(
            "div",
            {
              onClick: () => {
                l || o.current?.click();
              },
              className: "w-24 h-24 flex items-center justify-center border border-dashed rounded-md bg-gray-50 hover:bg-gray-100 cursor-pointer",
              children: l ? /* @__PURE__ */ s.jsx("i", { className: "fa-solid fa-spinner fa-spin text-2xl text-gray-900" }) : /* @__PURE__ */ s.jsx("i", { className: `fa-solid ${zo(t)} text-2xl text-gray-400` })
            }
          )
        ]
      }
    ),
    e.touched[a] && e.errors[a] && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[a]) })
  ] });
}
function Qo({
  field: e,
  formik: t,
  methods: n = {},
  sqlOpsUrls: r,
  refid: a,
  module_refid: o = "menuManager.main",
  optionsOverride: i,
  setFieldOptions: l,
  chainMap: h,
  fieldLoading: c,
  setFieldLoading: f,
  AttachmentPopup: d,
  parent_data: S
}) {
  const {
    executeFieldMethod: x,
    handleFileUpload: p,
    handleKeyDown: g,
    setSearch: b,
    setOpen: _,
    setIsFocused: v,
    handleInputChange: m,
    handleSelect: y,
    handlePersist: E,
    setLoading: N,
    removeFile: L,
    baseInputClasses: P,
    focusClasses: I,
    labelClasses: $,
    search: j,
    highlightedIndex: k,
    options: z,
    isDisabled: F,
    key: A,
    filteredOptions: ie,
    open: ce,
    listRef: ne,
    triggerRef: xe,
    isFocused: R,
    exactMatch: B,
    loading: V
  } = Yo({
    field: e,
    formik: t,
    methods: n,
    sqlOpsUrls: r,
    refid: a,
    module_refid: o,
    chainMap: h,
    parent_data: S,
    ...f && { setFieldLoading: f },
    ...i && { optionsOverride: i },
    ...l && { setFieldOptions: l }
  }), Y = (X) => X.icon ? /* @__PURE__ */ s.jsx("i", { className: X.icon }) : null;
  return (() => {
    switch (e.type) {
      case "suggest":
      case "autosuggest":
      case "autocomplete": {
        const T = t.values[A] ?? "", M = j !== "" ? j : zt(z, T) ?? String(T ?? "");
        return /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ s.jsxs("label", { className: $, children: [
            e.label,
            e.required && /* @__PURE__ */ s.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { ref: xe, className: "relative", children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                className: `${P} ${I}`,
                value: M,
                placeholder: e.placeholder || "Type to search...",
                onChange: m,
                onBlur: () => {
                  setTimeout(() => _(!1), 150);
                },
                onKeyDown: (O) => {
                  if (O.key === "Enter") {
                    if (O.preventDefault(), B) {
                      const [J] = B;
                      t.setFieldValue(A, J), E(J, e, o);
                    } else j.trim() && (t.setFieldValue(A, j.trim()), E(j.trim(), e, o));
                    _(!1), b("");
                    return;
                  }
                  g(O, !0);
                },
                disabled: F
              }
            ),
            (V || c) && /* @__PURE__ */ s.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ s.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) })
          ] }),
          /* @__PURE__ */ s.jsx(_r, { anchorRef: xe, open: ce && !F, children: /* @__PURE__ */ s.jsx(
            "div",
            {
              ref: ne,
              className: " w-full bg-white border rounded shadow max-h-52 overflow-y-auto",
              children: ie.length > 0 && B ? ie.map(([O, J], Z) => /* @__PURE__ */ s.jsx(
                "div",
                {
                  id: `${A}-${O}`,
                  "data-index": Z,
                  className: `px-3 py-2 cursor-pointer text-sm
                  ${k === Z ? "bg-gray-100" : "hover:bg-gray-100"}`,
                  onMouseDown: () => y(O),
                  children: J
                },
                O
              )) : /* @__PURE__ */ s.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `Press "ENTER" to ADD "${M}" ` })
            }
          ) }),
          t.touched[A] && t.errors[A] && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[A]) })
        ] });
      }
      case "dataSelector":
      case "dataSelectorFromTable":
      case "dataSelectorFromUniques":
      case "dataMethod": {
        if (e.multiple === !0) {
          const T = t.values[A];
          return /* @__PURE__ */ s.jsx(
            En,
            {
              field: e,
              isDisabled: F,
              handleKeyDown: g,
              valueArray: T,
              labelClasses: $,
              listRef: ne,
              search: j,
              filteredOptions: ie,
              highlightedIndex: k,
              setSearch: b,
              formik: t,
              executeFieldMethod: x,
              handlePersist: E,
              module_refid: o,
              options: z,
              triggerRef: xe,
              open: ce,
              setOpen: _,
              loading: V || !!c
            }
          );
        }
        return /* @__PURE__ */ s.jsx(
          vn,
          {
            field: e,
            isDisabled: F,
            handleKeyDown: g,
            labelClasses: $,
            listRef: ne,
            search: j,
            filteredOptions: ie,
            highlightedIndex: k,
            setSearch: b,
            formik: t,
            executeFieldMethod: x,
            handlePersist: E,
            module_refid: o,
            options: z,
            triggerRef: xe,
            open: ce,
            setOpen: _,
            loading: V || !!c
          }
        );
      }
      case "textarea":
        return /* @__PURE__ */ s.jsx(s.Fragment, { children: /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ s.jsxs("label", { className: $, children: [
            e.label,
            e.required && /* @__PURE__ */ s.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ s.jsx(
              "textarea",
              {
                id: A,
                className: `${P} ${I} min-h-[120px] resize-none`,
                onFocus: () => v(!0),
                name: A,
                value: t.values[A],
                onBlur: t.handleBlur,
                onChange: (T) => {
                  t.setFieldValue(A, T.target.value), E(T.target.value, e, o), x("onChange", e, `${A}`);
                },
                placeholder: e.placeholder,
                disabled: F
              }
            ),
            /* @__PURE__ */ s.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${R ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
          ] }),
          t.touched[A] && t.errors[A] && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[A]) })
        ] }) });
      case "select":
        if (e.multiple === !0) {
          const T = t.values[A];
          return /* @__PURE__ */ s.jsx(
            En,
            {
              field: e,
              isDisabled: F,
              handleKeyDown: g,
              valueArray: T,
              labelClasses: $,
              listRef: ne,
              search: j,
              filteredOptions: ie,
              highlightedIndex: k,
              setSearch: b,
              formik: t,
              executeFieldMethod: x,
              handlePersist: E,
              module_refid: o,
              options: z,
              triggerRef: xe,
              open: ce,
              setOpen: _,
              loading: V || !!c
            }
          );
        }
        if (e.search)
          return /* @__PURE__ */ s.jsx(
            vn,
            {
              field: e,
              isDisabled: F,
              handleKeyDown: g,
              labelClasses: $,
              listRef: ne,
              search: j,
              filteredOptions: ie,
              highlightedIndex: k,
              setSearch: b,
              formik: t,
              executeFieldMethod: x,
              handlePersist: E,
              module_refid: o,
              options: z,
              triggerRef: xe,
              open: ce,
              setOpen: _,
              loading: V || !!c
            }
          );
        const X = Lo(z);
        return /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ s.jsxs("label", { className: $, children: [
            e.label,
            e.required && /* @__PURE__ */ s.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ s.jsxs(
              "select",
              {
                className: `${P} ${I} appearance-none ${F ? "" : "cursor-pointer"} pr-12`,
                onFocus: () => v(!0),
                name: A,
                id: A,
                value: t.values[A],
                onBlur: t.handleBlur,
                onChange: (T) => {
                  t.setFieldValue(A, T.target.value), E(T.target.value, e, o), x("onChange", e, `${A}`);
                },
                disabled: F,
                children: [
                  e?.["no-option"] !== "false" && !t.values[A] && /* @__PURE__ */ s.jsx("option", { value: "", disabled: !0, children: e?.["no-option"] || `Please select ${e.label}` }),
                  /* @__PURE__ */ s.jsx("option", { value: "", className: "text-gray-500", children: "Clear Selection" }),
                  Object.entries(X).map(
                    ([T, M]) => T === "__ungrouped__" ? M.map((O) => /* @__PURE__ */ s.jsx("option", { value: O.value, className: "py-2", children: O.label }, O.value)) : /* @__PURE__ */ s.jsx("optgroup", { label: T, children: M.map((O) => /* @__PURE__ */ s.jsx("option", { value: O.value, children: O.label }, O.value)) }, T)
                  )
                ]
              }
            ),
            /* @__PURE__ */ s.jsx("div", { className: "absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none", children: V || c ? /* @__PURE__ */ s.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) : /* @__PURE__ */ s.jsx(
              "svg",
              {
                className: "w-5 h-5 transition-colors duration-300 text-gray-400",
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
            ) })
          ] }),
          t.touched[A] && t.errors[A] && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[A]) })
        ] });
      case "radioList":
      case "radio":
        return /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ s.jsxs("label", { className: $, children: [
            e.label,
            e.required && /* @__PURE__ */ s.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: `flex ${z.length > 3 ? "flex-col" : ""} gap-2 ml-1`, children: z.map((T) => /* @__PURE__ */ s.jsxs(
            "label",
            {
              htmlFor: `${A}-${T.value}`,
              className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
              children: [
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    id: `${A}-${T.value}`,
                    type: "radio",
                    name: A,
                    checked: t.values[A] === T.value,
                    value: T.value,
                    onChange: (M) => {
                      t.setFieldValue(A, M.target.value), E(M.target.value, e, o), x("onChange", e, `${A}-${T.value}`);
                    },
                    onBlur: t.handleBlur,
                    disabled: F,
                    className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${F ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                  }
                ),
                T.label
              ]
            },
            T.value
          )) }),
          t.touched[A] && t.errors[A] && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[A]) })
        ] });
      case "checkbox": {
        const T = e.multiple === !0, M = t.values[A];
        return /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ s.jsxs("label", { className: $, children: [
            e.label,
            e.required && /* @__PURE__ */ s.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "flex flex-col gap-2 ml-1", children: z.map((O) => {
            const J = T ? Array.isArray(M) && M.includes(O.value) : M === O.value;
            return /* @__PURE__ */ s.jsxs(
              "label",
              {
                className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
                children: [
                  /* @__PURE__ */ s.jsx(
                    "input",
                    {
                      id: `${A}-${O.value}`,
                      type: "checkbox",
                      checked: J,
                      onChange: (Z) => {
                        let D;
                        if (T) {
                          const G = Array.isArray(M) ? M : [];
                          D = Z.target.checked ? [...G, O.value] : G.filter((q) => q !== O.value);
                        } else
                          D = Z.target.checked ? O.value : "false";
                        t.setFieldValue(A, D), E(D, e, o), x("onChange", e, `${A}-${O.value}`);
                      },
                      onBlur: t.handleBlur,
                      disabled: F,
                      className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${F ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                    }
                  ),
                  O.label
                ]
              },
              O.value
            );
          }) }),
          t.touched[A] && t.errors[A] && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[A]) })
        ] });
      }
      case "tags": {
        const T = t.values[A] ?? [], M = j.trim(), O = (D) => {
          if (!F && D && !T.includes(D)) {
            let G = [...T, D];
            t.setFieldValue(A, G), E(G, e, o), b("");
          }
        }, J = (D) => {
          let G = T.filter((q) => q !== D);
          t.setFieldValue(
            A,
            G
          ), E(G, e, o);
        }, Z = (D) => zt(z, D) ?? D;
        return /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ s.jsxs("label", { className: $, children: [
            e.label,
            e.required && /* @__PURE__ */ s.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: `${P} 
            flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center
            ${F ? "pointer-events-none opacity-70" : ""}
            `,
              onClick: () => !F && document.getElementById(`${A}-input`)?.focus(),
              children: [
                T.map((D) => /* @__PURE__ */ s.jsxs(
                  "span",
                  {
                    className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                    children: [
                      /* @__PURE__ */ s.jsx("span", { className: "text-indigo-700", children: Z(D) }),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: (G) => {
                            G.stopPropagation(), F || J(D);
                          },
                          onMouseDown: (G) => G.preventDefault(),
                          className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                          children: "×"
                        }
                      )
                    ]
                  },
                  D
                )),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    id: `${A}-input`,
                    type: "text",
                    value: j,
                    onChange: (D) => b(D.target.value),
                    onKeyDown: (D) => {
                      (D.key === "Enter" || D.key === ",") && (D.preventDefault(), O(M));
                    },
                    placeholder: T.length === 0 ? e.placeholder || "Type and press Enter" : "",
                    className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                    disabled: F
                  }
                )
              ]
            }
          ),
          t.touched[A] && t.errors[A] && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[A]) })
        ] });
      }
      case "camera":
      case "camera2":
      case "photo":
      case "avatar":
        return /* @__PURE__ */ s.jsx(
          Xo,
          {
            formik: t,
            field: e,
            sqlOpsUrls: r,
            module_refid: o
          }
        );
      case "attachment":
      case "file":
        const we = e.multiple === !0, Ie = e.max !== void 0 ? Number(e.max) : 1 / 0, re = Array.isArray(t.values[A]) ? t.values[A] : t.values[A] ? [t.values[A]] : [];
        return /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ s.jsxs("label", { className: $, children: [
            e.label,
            e.required && /* @__PURE__ */ s.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "relative mb-1", children: [
            e.icon && /* @__PURE__ */ s.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: Y(e) }),
            V && /* @__PURE__ */ s.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 z-10", children: /* @__PURE__ */ s.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) }),
            /* @__PURE__ */ s.jsx(
              "input",
              {
                id: A,
                type: "file",
                accept: e.accept,
                className: `${P} ${I} ${e.icon ? "pl-9" : ""} `,
                onFocus: () => v(!0),
                name: A,
                multiple: we,
                onChange: (T) => {
                  const M = Io({
                    e: T,
                    existingFiles: re,
                    maxFiles: Ie,
                    maxFileSize: e.file_size
                  });
                  M && (M && p(M), x("onChange", e, A), T.currentTarget.value = "");
                },
                onBlur: t.handleBlur,
                placeholder: e.placeholder,
                disabled: F
              }
            ),
            /* @__PURE__ */ s.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${R ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "flex flex-wrap gap-2", children: re.map((T) => /* @__PURE__ */ s.jsxs("div", { className: "relative group", children: [
            d && /* @__PURE__ */ s.jsx(d, { url: T }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => L(T),
                className: "absolute -top-2 -right-2 bg-white text-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xl cursor-pointer transition",
                children: "×"
              }
            )
          ] }, T)) }),
          t.touched[A] && t.errors[A] && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[A]) })
        ] });
      case "json":
        return /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ s.jsxs("label", { className: $, children: [
            e.label,
            e.required && /* @__PURE__ */ s.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ s.jsx(
              "textarea",
              {
                id: A,
                name: A,
                value: t.values[A],
                onChange: (T) => {
                  t.setFieldValue(A, T.target.value), E(T.target.value, e, o), x("onChange", e, `${A}`);
                },
                onBlur: t.handleBlur,
                placeholder: e.placeholder || "Enter valid JSON",
                disabled: F,
                className: `${P} ${I} min-h-[200px] font-mono text-sm resize-y`
              }
            ),
            /* @__PURE__ */ s.jsx(
              "div",
              {
                className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${R ? "opacity-20" : ""}`,
                style: { zIndex: -1, filter: "blur(8px)" }
              }
            )
          ] }),
          t.touched[A] && t.errors[A] && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[A]) })
        ] });
      case "date": {
        const T = Uo(e.max);
        return /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ s.jsxs("label", { className: $, children: [
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
                    id: A,
                    type: "date",
                    name: A,
                    min: e.min,
                    max: T,
                    value: t.values[A] ?? "",
                    onChange: (M) => {
                      t.setFieldValue(A, M.target.value), E(M.target.value, e, o), x("onChange", e, `${A}`);
                    },
                    onBlur: t.handleBlur,
                    placeholder: e.placeholder,
                    disabled: F,
                    className: `${P} ${I} ${e.icon ? "pl-9" : ""}`
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${R ? "opacity-20" : ""}`,
                    style: { zIndex: -1, filter: "blur(8px)" }
                  }
                )
              ]
            }
          ),
          t.touched[A] && t.errors[A] && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[A]) })
        ] });
      }
      case "geolocation": {
        const T = t.values[A] || "", M = async () => {
          try {
            const { latitude: O, longitude: J } = await Ar(), Z = `${O},${J}`;
            t.setFieldValue(A, Z), E(Z, e, o);
          } catch (O) {
            console.error(O), t.setFieldError(A, "Failed to fetch location");
          } finally {
            N(!1);
          }
        };
        return /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ s.jsxs("label", { className: $, children: [
            e.label,
            e.required && /* @__PURE__ */ s.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "text",
                value: T,
                readOnly: !0,
                className: `${P} ${I}`,
                placeholder: "Click to fetch location"
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: M,
                disabled: V,
                className: "absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 disabled:opacity-50",
                children: V ? /* @__PURE__ */ s.jsx("i", { className: "fa-solid fa-spinner fa-spin text-red-900" }) : /* @__PURE__ */ s.jsx("i", { className: "fa-solid fa-location-dot text-red-600 hover:text-red-700" })
              }
            )
          ] }),
          t.touched[A] && t.errors[A] && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[A]) })
        ] });
      }
      case "altitude": {
        const T = t.values[A] || "", M = async () => {
          try {
            N(!0);
            const { altitude: O } = await Ar();
            t.setFieldValue(A, O), E(O, e, o);
          } catch (O) {
            console.error(O), t.setFieldError(
              A,
              "Failed to fetch altitude"
            );
          } finally {
            N(!1);
          }
        };
        return /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ s.jsxs("label", { className: $, children: [
            e.label,
            e.required && /* @__PURE__ */ s.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "text",
                value: T,
                readOnly: !0,
                className: `${P} ${I}`,
                placeholder: "Click to fetch altitude"
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: M,
                disabled: V,
                className: "absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 disabled:opacity-50",
                children: V ? /* @__PURE__ */ s.jsx("i", { className: "fa-solid fa-spinner fa-spin text-red-900" }) : /* @__PURE__ */ s.jsx("i", { className: "fa-solid fa-mountain text-blue-600 hover:text-blue-700" })
              }
            )
          ] }),
          t.touched[A] && t.errors[A] && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[A]) })
        ] });
      }
      case "number":
        return /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ s.jsxs("label", { className: $, children: [
            e.label,
            e.required && /* @__PURE__ */ s.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
            e.icon && /* @__PURE__ */ s.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: Y(e) }),
            /* @__PURE__ */ s.jsx(
              "input",
              {
                id: A,
                type: "number",
                className: `${P} ${I} ${e.icon ? "pl-9" : ""} `,
                onFocus: () => v(!0),
                name: A,
                value: t.values[A],
                onBlur: t.handleBlur,
                onChange: (T) => {
                  t.setFieldValue(A, T.target.value), E(T.target.value, e, o), x("onChange", e, `${A}`);
                },
                step: e.step,
                placeholder: e.placeholder,
                disabled: F,
                min: e.min,
                max: e.max
              }
            ),
            /* @__PURE__ */ s.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${R ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
          ] }),
          t.touched[A] && t.errors[A] && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[A]) })
        ] });
      default:
        return /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ s.jsxs("label", { className: $, children: [
            e.label,
            e.required && /* @__PURE__ */ s.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
            e.icon && /* @__PURE__ */ s.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: Y(e) }),
            /* @__PURE__ */ s.jsx(
              "input",
              {
                id: A,
                type: e.type || "text",
                className: `${P} ${I} ${e.icon ? "pl-9" : ""} `,
                onFocus: () => v(!0),
                name: A,
                value: t.values[A],
                onBlur: t.handleBlur,
                onChange: (T) => {
                  t.setFieldValue(A, T.target.value), E(T.target.value, e, o), x("onChange", e, `${A}`);
                },
                step: e.step,
                placeholder: e.placeholder,
                disabled: F,
                minLength: e.minlength,
                maxLength: e.maxlength
              }
            ),
            /* @__PURE__ */ s.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${R ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
          ] }),
          t.touched[A] && t.errors[A] && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[A]) })
        ] });
    }
  })();
}
function Zo({
  title: e,
  fields: t,
  data: n,
  onSubmit: r = async (x) => {
  },
  onCancel: a = () => {
  },
  methods: o = {},
  sqlOpsUrls: i,
  refid: l,
  module_refid: h,
  buttons: c,
  button_labels: f,
  AttachmentPopup: d,
  parent_data: S
}) {
  const x = te.useMemo(() => Ro(t, i?.operation), [t, i?.operation]), [p, g] = te.useState({}), b = (j, k) => {
    g((z) => ({
      ...z,
      [j]: k
    }));
  }, [_, v] = te.useState({}), m = (j, k) => {
    v((z) => ({
      ...z,
      [j]: k
    }));
  }, { commonFields: y, otherFields: E } = te.useMemo(() => x.reduce(
    (j, k) => (k.group === "common" ? j.commonFields.push(k) : j.otherFields.push(k), j),
    { commonFields: [], otherFields: [] }
  ), [x]), { initialValues: N, validationSchema: L } = te.useMemo(() => {
    console.log("dddd");
    const j = {}, k = {};
    return x.forEach((z) => {
      _o([z], j, k, n, h, i?.operation);
    }), {
      initialValues: j,
      validationSchema: k
    };
  }, [x, n]), P = te.useMemo(
    () => So(x),
    [x]
  ), I = xa({
    initialValues: N,
    enableReinitialize: !0,
    validationSchema: je.object().shape(L),
    onSubmit: async (j) => {
      try {
        let k = jo(j, x);
        const z = await r(k);
        console.log("res", z), I.resetForm();
      } catch (k) {
        console.log("error", k);
      }
    }
  }), $ = () => {
    I.resetForm();
  };
  return /* @__PURE__ */ s.jsx(s.Fragment, { children: /* @__PURE__ */ s.jsx("div", { className: "relative max-w-full", children: /* @__PURE__ */ s.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300 overflow-visible", children: /* @__PURE__ */ s.jsxs("form", { onSubmit: I.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ s.jsx("div", { className: "grid grid-cols-12 gap-4", children: E.map((j) => {
      const k = Kt(j.hidden), z = `col-span-12 md:col-span-6
    ${ot[it(Number(j.width))] || "lg:col-span-4"}
    ${k ? "hidden" : ""}
  `;
      if (j.type === "static" || j.type === "static2") {
        const F = j.type === "static";
        return /* @__PURE__ */ s.jsx(
          "div",
          {
            id: `wrapper-${j.name}`,
            className: "col-span-12",
            children: /* @__PURE__ */ s.jsx(
              "div",
              {
                className: ` bg-gray-100 ${F ? "mt-4" : "mt-3"}`,
                children: /* @__PURE__ */ s.jsx("div", { className: "flex items-center justify-between px-4 py-3", children: /* @__PURE__ */ s.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ s.jsx(
                  "h2",
                  {
                    className: `${F ? "text-base " : "text-sm"} font-semibold text-gray-800`,
                    children: j.label
                  }
                ) }) })
              }
            )
          },
          j?.name
        );
      }
      return /* @__PURE__ */ s.jsx(
        "div",
        {
          id: `wrapper-${j.name}`,
          className: z,
          children: /* @__PURE__ */ s.jsx(
            Qo,
            {
              refid: l,
              module_refid: h,
              sqlOpsUrls: i,
              field: j,
              formik: I,
              methods: o,
              chainMap: P,
              setFieldOptions: b,
              ...p[j.name] ? { optionsOverride: p[j.name] } : {},
              fieldLoading: _[j.name] ?? !1,
              setFieldLoading: m,
              AttachmentPopup: d,
              parent_data: S
            }
          )
        },
        j?.name
      );
    }) }),
    /* @__PURE__ */ s.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ s.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ s.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ s.jsx("button", { type: "button", onClick: $, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: f?.reset || "Reset" }),
        /* @__PURE__ */ s.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: f?.submit || "Save" })
      ] })
    ] })
  ] }) }) }) });
}
function Nn({
  formJson: e,
  methods: t = {},
  onCancel: n = () => {
  },
  components: r = {},
  callback: a = () => {
  },
  initialvalues: o,
  setEditData: i,
  toast: l,
  AttachmentPopup: h,
  parent_data: c
}) {
  const f = e.endPoints, d = e?.source?.refid, [S, x] = te.useState(o ?? {}), p = te.useMemo(() => Ao(e.fields), [e.fields]);
  te.useEffect(() => {
    let v = !0;
    return (async () => {
      try {
        const { latitude: y, longitude: E, altitude: N } = await Ar(), L = `${y},${E}`;
        v && x((P) => ({
          ...P,
          ...Object.fromEntries(
            p.map((I) => [I, L])
          )
        }));
      } catch (y) {
        console.warn("Geo fetch failed", y);
      }
    })(), () => {
      v = !1;
    };
  }, [p]), te.useEffect(() => {
    x(o ?? {});
  }, [o]);
  const g = te.useCallback(
    (v) => {
      v && x((m) => {
        const y = { ...m };
        for (const E in v)
          v[E] !== null && v[E] !== void 0 && (y[E] = v[E]);
        return y;
      });
    },
    []
  );
  te.useEffect(() => {
    let v = !0;
    return (async () => {
      const y = e?.source ?? {};
      if (y?.type && f?.operation !== "create") {
        if (y.type === "method") {
          const E = y.method, N = E ? t[E] : void 0;
          if (N)
            try {
              const L = await N();
              v && g(L);
            } catch (L) {
              console.error("Method execution failed:", L);
            }
        }
        if (y.type === "api")
          try {
            const E = {
              method: y.method || "GET",
              url: f?.baseURL + y.endpoint,
              headers: {
                Authorization: `Bearer ${f?.accessToken}`
              },
              ...y.method === "GET" ? { params: { refid: y.refid } } : { data: { refid: y.refid } }
            }, N = await W(E);
            v && g(N.data);
          } catch (E) {
            console.error("API fetch failed:", E);
          }
        if (y.type === "sql" && y.refid && y.refid !== "0" || y.dbopsid) {
          if (!f) {
            console.error("SQL source requires formJson.endPoints but it is missing");
            return;
          }
          try {
            const E = await Go.fetch(f, {
              source: {
                ...y,
                table: y.table,
                columns: y.columns,
                where: Ae(y.where, {
                  refid: d
                })
              },
              fields: Bt(e.fields, f.operation)
            }, y?.dbopsid, e?.module_refid);
            v && g(E);
          } catch (E) {
            console.error("API fetch failed:", E);
          }
        }
      }
    })(), () => {
      v = !1;
    };
  }, [
    f,
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.endpoint || ""
  ]);
  const b = async (v) => {
    const m = e?.source ?? {};
    let y = { ...v }, E = "0,0";
    if (p.length > 0) {
      const N = p[0];
      E = (N ? v[N] : null) || "0,0";
      const P = p.filter((I) => !v[I]);
      if (P.length > 0)
        try {
          y = {
            ...v,
            ...Object.fromEntries(
              P.map((I) => [I, E])
            )
          };
        } catch {
          console.warn("Geo fetch failed");
        }
    }
    if (m.type === "method") {
      const N = m.method, L = N ? t[N] : void 0;
      if (L)
        try {
          let P = y ? { ...y, geolocation: E } : {};
          const I = await L(P);
          i?.(null), a?.(I);
          const $ = fr(I, e?.submit_msg);
          $ && l?.success?.($);
        } catch (P) {
          a?.(P), l?.error?.(dr(P)), console.error("Method execution failed:", P);
        }
    }
    if (m.type === "api") {
      if (!f) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const N = await W({
          method: m.method || "POST",
          url: f.baseURL + m.endpoint,
          data: y ? { ...y, geolocation: E } : {},
          headers: {
            Authorization: `Bearer ${f?.accessToken}`
          }
        });
        i?.(null), a?.(N);
        const L = fr(N, e?.submit_msg);
        L && l?.success?.(L);
      } catch (N) {
        a?.(N), l?.error?.(dr(N)), console.error("API fetch failed:", N);
      }
    }
    if (m.type === "sql") {
      const N = e.endPoints;
      if (!N) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let L = !1, P;
        m?.dbopsid && (L = !0, P = m?.dbopsid);
        const I = await W({
          method: "GET",
          url: N.baseURL + N.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${N?.accessToken}`
          }
        });
        if (!L) {
          let z = {
            ...m
          };
          m.where && (z = {
            ...m,
            where: Ae(m.where, {
              refid: d
            })
          }), P = (await W({
            method: "POST",
            url: N.baseURL + N.dbopsGetRefId,
            data: {
              operation: N.operation,
              source: z,
              fields: Bt(e.fields, N.operation),
              forcefill: e.forcefill,
              datahash: I.data.refhash,
              scrid: e?.module_refid
            },
            headers: {
              Authorization: `Bearer ${N?.accessToken}`
            }
          }))?.data.refid;
        }
        let $ = {
          refid: P,
          fields: y,
          datahash: I.data.refhash,
          refid1: N.refid,
          geolocation: E
        };
        m?.refid && ($.refid1 = m?.refid);
        const j = await W({
          method: "POST",
          url: N.baseURL + N[N.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: $,
          headers: {
            Authorization: `Bearer ${N?.accessToken}`
          }
        }), k = fr(j, e?.submit_msg);
        k && l?.success?.(k), i?.(null), a?.(j);
      } catch (L) {
        a?.(L), l?.error?.(dr(L)), console.error("API fetch failed:", L);
      }
    }
  }, _ = {
    simple: /* @__PURE__ */ s.jsx(
      Zo,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: S,
        onSubmit: b,
        onCancel: n,
        methods: t,
        components: r,
        sqlOpsUrls: f,
        refid: d,
        module_refid: e?.module_refid,
        AttachmentPopup: h,
        parent_data: c
      }
    )
  };
  return /* @__PURE__ */ s.jsx("div", { className: "relative", children: _.simple });
}
function Cr({
  tabObj: e,
  methods: t,
  tabName: n,
  sqlOpsUrls: r,
  refid: a,
  Reports: o,
  toast: i,
  handleAction: l,
  infoViewJson: h,
  AttachmentPopup: c,
  parent_data: f
}) {
  const [d, S] = fe(!1), [x, p] = fe(null), [g, b] = te.useState(0), [_, v] = te.useState(null), m = e?.config, y = e?.config, E = y?.["popup.form"] ? "popup.form" : (y?.form, "form"), N = y?.[E] && Object.keys(y?.[E]).length > 0, L = (k) => {
    let z = Re(k.data);
    v(z);
  }, P = (k) => {
    v(k), b((z) => z + 1);
  }, I = (k) => {
    let z = Re(k.data);
    p(z), S(!0);
  }, $ = async () => {
    if (x?.id) {
      if (!r) {
        window.alert("Delete configuration missing.");
        return;
      }
      try {
        let k = e?.config;
        const z = k?.["popup.form"] ? "popup.form" : (k?.form, "form"), F = k?.[z];
        if (!F?.source) throw new Error("Form source missing");
        let A = !1, ie;
        F?.source?.dbopsid && (A = !0, ie = F?.source?.dbopsid);
        const ce = await W({
          method: "GET",
          url: r.baseURL + r.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${r.accessToken}`
          }
        });
        if (!A) {
          let ne = { ...F.source, refid: x.id };
          F.source.where && (ne = {
            ...ne,
            where: Ae(F.source.where, {
              refid: x?.id
            })
          }), ie = (await W({
            method: "POST",
            url: r.baseURL + r.dbopsGetRefId,
            data: {
              operation: "update",
              source: ne,
              fields: F.fields,
              forcefill: F.forcefill,
              datahash: ce.data.refhash,
              scrid: h?.module_refid
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
            refid: ie,
            fields: { blocked: "true" },
            datahash: ce.data.refhash,
            refid1: x?.id
          },
          headers: {
            Authorization: `Bearer ${r.accessToken}`
          }
        }), window.alert("Record deleted successfully."), b((ne) => ne + 1);
      } catch (k) {
        console.error(k), window.alert("Failed to delete record. Please try again");
      } finally {
        p(null), S(!1);
      }
    }
  }, j = () => {
    p(null), S(!1);
  };
  return /* @__PURE__ */ s.jsx(s.Fragment, { children: o ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    m?.datagrid && /* @__PURE__ */ s.jsx(
      o,
      {
        methods: { ...t, deleteRecord: I, editRecord: L },
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
          refresh: g,
          native: r?.native
        },
        onButtonClick: l
      }
    ),
    N && /* @__PURE__ */ s.jsx(
      Nn,
      {
        formJson: {
          ...y[E],
          source: {
            ...y?.[E].source,
            refid: _?.id
          },
          endPoints: {
            ...r,
            operation: _ ? "update" : "create"
          },
          module_refid: h?.module_refid
        },
        toast: i,
        methods: t,
        initialvalues: _ ?? {},
        setEditData: P,
        AttachmentPopup: c,
        parent_data: f
      }
    ),
    /* @__PURE__ */ s.jsx(
      Ko,
      {
        open: d,
        onConfirm: $,
        onCancel: j
      }
    )
  ] }) : N && /* @__PURE__ */ s.jsx(
    Nn,
    {
      formJson: {
        ...y[E],
        source: {
          ...y?.[E].source,
          refid: _?.id
        },
        endPoints: {
          ...r,
          operation: _ ? "update" : "create"
        },
        module_refid: h?.module_refid
      },
      toast: i,
      methods: t,
      initialvalues: _ ?? {},
      setEditData: P,
      AttachmentPopup: c,
      parent_data: f
    }
  ) });
}
function Or(e, t) {
  if (!e || !t) return null;
  const n = t[e];
  if (te.isValidElement(n))
    return n;
  if (typeof n == "function") {
    const r = n;
    return /* @__PURE__ */ s.jsx(r, {});
  }
  return null;
}
const An = ({ groups: e, groupNames: t, setActiveTabIndex: n, activeTabIndex: r }) => /* @__PURE__ */ s.jsx(
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
), Jo = ({
  groups: e,
  groupNames: t,
  setActiveTabIndex: n,
  activeTabIndex: r,
  layoutConfig: a,
  showScrollHint: o,
  isCommonInfo: i,
  tabsNavRef: l
}) => {
  const [h, c] = fe(!1), f = Xe(null);
  return Ne(() => {
    const d = (S) => {
      f.current && !f.current.contains(S.target) && c(!1);
    };
    return document.addEventListener("mousedown", d), () => document.removeEventListener("mousedown", d);
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
        h && /* @__PURE__ */ s.jsx("div", { className: "absolute right-0 mt-2 w-48 max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-30", children: t.map((d, S) => /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              n(S), c(!1);
            },
            className: `w-full text-left px-3 py-2 text-sm truncate hover:bg-gray-100 ${r === S ? "bg-gray-50 font-semibold text-action" : "text-gray-700"}`,
            children: e[d]?.label || d
          },
          d
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
        children: t.length > 0 ? t.map((d, S) => /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            onClick: () => n(S),
            className: `relative cursor-pointer flex-shrink-0
            min-w-[8rem]   
            py-2 px-8
            rounded-t-lg text-xs sm:text-sm font-semibold
            transition-all duration-300 ease-out
            focus:outline-none whitespace-nowrap
            ${r === S ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
            children: /* @__PURE__ */ s.jsx("span", { className: "relative z-10 flex items-center justify-center gap-1 sm:gap-2", children: /* @__PURE__ */ s.jsx("span", { className: "truncate", children: e[d]?.label || d }) })
          },
          d
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
  fieldOptions: d,
  setFieldOptions: S,
  buttons: x,
  handleAction: p,
  components: g,
  AttachmentPopup: b
}) => {
  let _ = x ? Object.entries(x).filter(([y, E]) => E.groups ? E.groups.includes(e[t]) : !0) : [];
  async function v(y, E) {
    const N = l?.[y];
    if (N) {
      try {
        await N();
      } catch (L) {
        console.error("Method execution failed:", L);
      }
      return;
    }
    p?.({ [y]: E }, a);
  }
  const m = Or(r?.component, g);
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "bg-white rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex-1 flex flex-col min-h-0",
      children: [
        e.length > 0 ? r?.type === "fields" && r?.fields ? /* @__PURE__ */ s.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ s.jsx("div", { className: n?.fieldGridClass || "grid grid-cols-12 gap-2", children: r.fields.map((y, E) => Kt(y.hidden) ? null : /* @__PURE__ */ s.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${ot[it(Number(y.width))] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ s.jsx(
              At,
              {
                field: y,
                data: a ?? {},
                methods: l,
                refid: h,
                sqlOpsUrls: c,
                module_refid: f,
                setFieldOptions: S,
                ...d[y.name] ? { optionsOverride: d[y.name] } : {},
                AttachmentPopup: b
              }
            )
          },
          y?.name ?? `field-${E}`
        )) }) }) : r?.type === "component" && m ? /* @__PURE__ */ s.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: m }) : r ? /* @__PURE__ */ s.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: i(r, e[t] || "") }) : null : /* @__PURE__ */ s.jsx("div", { className: "flex-1 col-span-full text-center py-8 text-gray-500", children: "No data available" }),
        /* @__PURE__ */ s.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: _ && _.map(([y, E]) => /* @__PURE__ */ s.jsx(
          "button",
          {
            onClick: () => v(y, E),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: E.label
          },
          y
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
              e.slice(0, 5).map((y, E) => /* @__PURE__ */ s.jsx(
                "div",
                {
                  className: `w-2 h-2 rounded-full transition-all duration-300 ${E === t ? "bg-action w-6" : "bg-gray-300"}`
                },
                E
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
        e.length <= 5 && /* @__PURE__ */ s.jsx("div", { className: "mt-6 pt-3 border-t border-gray-100", children: /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
          /* @__PURE__ */ s.jsxs("span", { children: [
            "Tab ",
            t + 1,
            " of ",
            e.length
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "flex gap-1", children: e.map((y, E) => /* @__PURE__ */ s.jsx(
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
function Sn({
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
  handleAction: d = () => {
  },
  infoViewJson: S,
  fieldOptions: x,
  setFieldOptions: p,
  components: g,
  AttachmentPopup: b
}) {
  const [_, v] = fe(0), [m, y] = fe(!1), E = Xe(null), N = Object.keys(e);
  Ne(() => {
    const F = () => {
      if (E.current) {
        const A = E.current;
        y(A.scrollWidth > A.clientWidth);
      }
    };
    return F(), window.addEventListener("resize", F), () => window.removeEventListener("resize", F);
  }, [N.length]), Ne(() => {
    if (E.current && N.length > 0) {
      const F = E.current.children[_];
      F && F.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [_, N.length]);
  const L = i === "tableft", P = i === "tabright", I = !L && !P, $ = e[N[_] ?? ""] || null, j = {
    single: (F, A) => /* @__PURE__ */ s.jsx(
      Rr,
      {
        fieldOptions: x,
        setFieldOptions: p,
        module_refid: S.module_refid,
        tabObj: F,
        methods: t,
        tabName: A,
        sqlOpsUrls: l,
        refid: h,
        AttachmentPopup: b
      }
    ),
    grid: (F, A) => /* @__PURE__ */ s.jsx(
      Cr,
      {
        ...c ? { Reports: c } : {},
        toast: f,
        handleAction: d,
        tabObj: F,
        methods: t,
        tabName: A,
        sqlOpsUrls: l,
        refid: h,
        infoViewJson: S,
        AttachmentPopup: b,
        parent_data: n
      }
    )
  }, k = $?.config?.uimode, z = r[k] || j[k] || (() => /* @__PURE__ */ s.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No UI mode for this type" }));
  return I ? /* @__PURE__ */ s.jsxs("div", { className: "flex-1 flex flex-col min-h-0 ", children: [
    /* @__PURE__ */ s.jsx(
      Jo,
      {
        groupNames: N,
        groups: e,
        setActiveTabIndex: v,
        activeTabIndex: _,
        tabsNavRef: E,
        isCommonInfo: a,
        showScrollHint: m,
        layoutConfig: o
      }
    ),
    /* @__PURE__ */ s.jsx(
      Tn,
      {
        groupNames: N,
        activeTabIndex: _,
        layoutConfig: o,
        tabObj: $,
        infoData: n,
        setActiveTabIndex: v,
        renderView: z,
        groups: e,
        methods: t,
        refid: h,
        sqlOpsUrls: l,
        module_refid: S.module_refid,
        fieldOptions: x,
        setFieldOptions: p,
        buttons: S.buttons,
        handleAction: d,
        ...g ? { components: g } : {},
        AttachmentPopup: b
      }
    )
  ] }) : /* @__PURE__ */ s.jsxs("div", { className: "flex-1 flex min-h-0", children: [
    L && /* @__PURE__ */ s.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ s.jsx(
      An,
      {
        groupNames: N,
        groups: e,
        setActiveTabIndex: v,
        activeTabIndex: _
      }
    ) }),
    /* @__PURE__ */ s.jsx("main", { className: "flex-1 flex flex-col min-h-0 overflow-auto", children: /* @__PURE__ */ s.jsx(
      Tn,
      {
        groupNames: N,
        activeTabIndex: _,
        layoutConfig: o,
        tabObj: $,
        infoData: n,
        setActiveTabIndex: v,
        renderView: z,
        groups: e,
        methods: t,
        refid: h,
        module_refid: S.module_refid,
        sqlOpsUrls: l,
        fieldOptions: x,
        setFieldOptions: p,
        handleAction: d,
        ...g ? { components: g } : {},
        AttachmentPopup: b
      }
    ) }),
    P && /* @__PURE__ */ s.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ s.jsx(
      An,
      {
        groupNames: N,
        groups: e,
        setActiveTabIndex: v,
        activeTabIndex: _
      }
    ) })
  ] });
}
function ei({ title: e, children: t, isFirst: n }) {
  const [r, a] = fe(n);
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
function ti({
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
  setFieldOptions: d,
  components: S,
  AttachmentPopup: x
}) {
  const p = {
    single: (v, m) => /* @__PURE__ */ s.jsx(
      Rr,
      {
        tabObj: v,
        methods: t,
        tabName: m,
        sqlOpsUrls: a,
        fieldOptions: f,
        setFieldOptions: d,
        refid: o,
        module_refid: c?.module_refid,
        AttachmentPopup: x
      }
    ),
    grid: (v, m) => /* @__PURE__ */ s.jsx(
      Cr,
      {
        ...i ? { Reports: i } : {},
        toast: l,
        infoViewJson: c,
        handleAction: h,
        tabObj: v,
        methods: t,
        tabName: m,
        sqlOpsUrls: a,
        refid: o,
        parent_data: n,
        AttachmentPopup: x
      }
    )
  }, g = c?.buttons;
  let b = g ? Object.entries(g).filter(([v, m]) => !(m.groups && m.groups.length > 0)) : [];
  async function _(v, m) {
    const y = t?.[v];
    if (y) {
      try {
        await y();
      } catch (E) {
        console.error("Method execution failed:", E);
      }
      return;
    }
    h?.({ [v]: m }, n);
  }
  return /* @__PURE__ */ s.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ s.jsx("div", { className: "mx-auto", children: /* @__PURE__ */ s.jsxs("div", { className: "space-y-1 flex flex-col min-h-0", children: [
    e && Object.entries(e).map(([v, m], y) => {
      let E = g ? Object.entries(g).filter(([L, P]) => P.groups ? P.groups.includes(v) : !1) : [];
      const N = Or(m.component, S);
      return /* @__PURE__ */ s.jsxs(ei, { title: m.label, isFirst: y === 0, children: [
        m?.type === "fields" && m?.fields ? /* @__PURE__ */ s.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ s.jsx("div", { className: "grid grid-cols-12 gap-2", children: m.fields.map((L, P) => Kt(L.hidden) ? null : /* @__PURE__ */ s.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${ot[it(Number(L.width))] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ s.jsx(
              At,
              {
                module_refid: c?.module_refid,
                methods: t,
                field: L,
                data: n ?? {},
                setFieldOptions: d,
                ...f[L.name] ? { optionsOverride: f[L.name] } : {},
                sqlOpsUrls: a,
                refid: o,
                AttachmentPopup: x
              }
            )
          },
          L?.name ?? `field-${P}`
        )) }) }) : m?.type === "component" && N ? /* @__PURE__ */ s.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: N }) : m ? /* @__PURE__ */ s.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: r[m.config?.uimode]?.(m) || p[m.config?.uimode]?.(m, v) || /* @__PURE__ */ s.jsx("div", { children: "No renderer for this type" }) }) : null,
        /* @__PURE__ */ s.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: E && E.map(([L, P]) => /* @__PURE__ */ s.jsx(
          "button",
          {
            onClick: () => _(L, P),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: P.label
          },
          L
        )) })
      ] }, v);
    }),
    /* @__PURE__ */ s.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: b && b.map(([v, m]) => /* @__PURE__ */ s.jsx(
      "button",
      {
        onClick: () => _(v, m),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: m.label
      },
      v
    )) })
  ] }) }) });
}
function ri({ title: e, children: t }) {
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
function ni({
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
  setFieldOptions: d,
  components: S,
  AttachmentPopup: x
}) {
  const p = {
    single: (v, m) => /* @__PURE__ */ s.jsx(
      Rr,
      {
        fieldOptions: f,
        setFieldOptions: d,
        module_refid: c?.module_refid,
        tabObj: v,
        methods: t,
        tabName: m,
        sqlOpsUrls: a,
        refid: o,
        AttachmentPopup: x
      }
    ),
    grid: (v, m) => /* @__PURE__ */ s.jsx(
      Cr,
      {
        ...i ? { Reports: i } : {},
        toast: l,
        handleAction: h,
        tabObj: v,
        methods: t,
        tabName: m,
        sqlOpsUrls: a,
        parent_data: n,
        refid: o,
        infoViewJson: c,
        AttachmentPopup: x
      }
    )
  }, g = c?.buttons;
  let b = g ? Object.entries(g).filter(([v, m]) => !(m.groups && m.groups.length > 0)) : [];
  async function _(v, m) {
    const y = t?.[v];
    if (y) {
      try {
        await y();
      } catch (E) {
        console.error("Method execution failed:", E);
      }
      return;
    }
    h?.({ [v]: m }, n);
  }
  return /* @__PURE__ */ s.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ s.jsx("div", { className: "mx-auto", children: /* @__PURE__ */ s.jsxs("div", { className: "space-y-2  flex flex-col min-h-0", children: [
    e && Object.entries(e).map(([v, m], y) => {
      let E = g ? Object.entries(g).filter(([L, P]) => P.groups ? P.groups.includes(v) : !1) : [];
      const N = Or(m.component, S);
      return /* @__PURE__ */ s.jsxs(ri, { title: m.label, children: [
        m?.type === "fields" && m?.fields ? /* @__PURE__ */ s.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ s.jsx("div", { className: "grid grid-cols-12 gap-2", children: m.fields.map((L, P) => Kt(L.hidden) ? null : /* @__PURE__ */ s.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${ot[it(Number(L.width))] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ s.jsx(
              At,
              {
                module_refid: c?.module_refid,
                methods: t,
                field: L,
                data: n ?? {},
                setFieldOptions: d,
                ...f[L.name] ? { optionsOverride: f[L.name] } : {},
                sqlOpsUrls: a,
                refid: o,
                AttachmentPopup: x
              }
            )
          },
          L?.name ?? `field-${P}`
        )) }) }) : m?.type === "component" && N ? /* @__PURE__ */ s.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: N }) : m ? /* @__PURE__ */ s.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: r[m.config?.uimode]?.(m) || p[m.config?.uimode]?.(m, v) || /* @__PURE__ */ s.jsx("div", { children: "No renderer for this type" }) }) : null,
        /* @__PURE__ */ s.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: E && E.map(([L, P]) => /* @__PURE__ */ s.jsx(
          "button",
          {
            onClick: () => _(L, P),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: P.label
          },
          L
        )) })
      ] }, v);
    }),
    /* @__PURE__ */ s.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: b && b.map(([v, m]) => /* @__PURE__ */ s.jsx(
      "button",
      {
        onClick: () => _(v, m),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: m.label
      },
      v
    )) })
  ] }) }) });
}
function Ti({
  infoViewJson: e,
  hiddenFields: t = [],
  groupFieldsFn: n = No,
  layoutConfig: r = {},
  viewRenderers: a = {},
  methods: o = {},
  Reports: i,
  toast: l,
  handleAction: h = () => {
  },
  components: c,
  initialvalues: f,
  AttachmentPopup: d
}) {
  const [S, x] = te.useState(f ?? {}), p = Eo(e.infoview ?? {}), g = e.endPoints, b = te.useMemo(
    () => n(e.fields || {}),
    [e.fields, n]
  ), [_, v] = te.useState({}), m = (I, $) => {
    v((j) => ({
      ...j,
      [I]: $
    }));
  }, y = e?.source?.refid;
  let E = { ...b };
  e.infoview?.groups && (E = { ...E, ...e.infoview.groups }), te.useEffect(() => {
    f && x((I) => ({
      ...I,
      ...f ?? {}
    }));
  }, [f]);
  const N = te.useCallback(
    (I) => {
      I && x(($) => ({
        ...$,
        ...I
      }));
    },
    []
  );
  te.useEffect(() => {
    let I = !1;
    return (async () => {
      const j = e?.source;
      if (!j?.type) {
        I || N({});
        return;
      }
      if (j.type === "method") {
        const k = j.method, z = k ? o[k] : void 0;
        if (z)
          try {
            const F = await z();
            I || N(F || {});
          } catch (F) {
            console.error("Method execution failed:", F), I || N({});
          }
        else
          I || N({});
      }
      if (j.type === "api")
        try {
          const k = {
            method: j.method || "GET",
            url: g?.baseURL + j.endpoint,
            headers: {
              Authorization: `Bearer ${g?.accessToken}`
            },
            ...j.method === "GET" ? { params: { refid: j.refid } } : { data: { refid: j.refid } }
          }, { data: z } = await W(k), F = z?.results?.options ? z?.results?.options : z.data ? z.data : z.results ? z.results : z;
          I || N(F ?? {});
        } catch (k) {
          console.error("API fetch failed:", k), I || N({});
        }
      if (j.type === "sql" && j.refid && j.refid != "0" || j.dbopsid) {
        if (!g) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let k = !1, z;
          j?.dbopsid && (k = !0, z = j?.dbopsid);
          const F = await W({
            method: "GET",
            url: g.baseURL + g.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${g?.accessToken}`
            }
          });
          if (!k) {
            let ce = {
              ...j
            };
            j.where && (ce = {
              ...j,
              where: Ae(j.where, {
                refid: y
              })
            }), z = (await W({
              method: "POST",
              url: g.baseURL + g.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: ce,
                fields: Bt(e.fields ?? {}, g.operation),
                forcefill: e.forcefill,
                datahash: F.data.refhash,
                srcid: e?.module_refid
              },
              headers: {
                Authorization: `Bearer ${g?.accessToken}`
              }
            }))?.data.refid;
          }
          const A = await W({
            method: "POST",
            url: g.baseURL + g.dbopsFetch,
            data: {
              refid: z,
              datahash: F.data.refhash,
              module_refid: e.module_refid
            },
            headers: {
              Authorization: `Bearer ${g?.accessToken}`
            }
          }), ie = ra(A) ?? {};
          I || N(ie);
        } catch (k) {
          I || N({}), console.error("API fetch failed:", k);
        }
      }
    })(), () => {
      I = !0;
    };
  }, [
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.url || "",
    JSON.stringify(e?.source?.params || {}),
    JSON.stringify(e?.source?.body || {}),
    JSON.stringify(e?.source?.headers || {})
  ]);
  const L = E.common || null;
  L && delete E.common;
  const P = (I) => {
    switch (I) {
      case "accordion":
        return /* @__PURE__ */ s.jsx(
          ti,
          {
            groups: E,
            methods: o,
            infoData: S,
            viewRenderers: a,
            sqlOpsUrls: g,
            refid: y,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: h,
            infoViewJson: e,
            setFieldOptions: m,
            fieldOptions: _,
            ...c ? { components: c } : {},
            AttachmentPopup: d
          }
        );
      case "tab":
      case "tableft":
      case "tabright":
        return /* @__PURE__ */ s.jsx(
          Sn,
          {
            groups: E,
            viewRenderers: a,
            layoutConfig: r,
            methods: o,
            infoData: S,
            isCommonInfo: !!L,
            viewMode: I,
            sqlOpsUrls: g,
            refid: y,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: h,
            infoViewJson: e,
            setFieldOptions: m,
            fieldOptions: _,
            ...c ? { components: c } : {},
            AttachmentPopup: d
          }
        );
      case "cards":
        return /* @__PURE__ */ s.jsx(
          ni,
          {
            groups: E,
            viewRenderers: a,
            methods: o,
            infoData: S,
            sqlOpsUrls: g,
            refid: y,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: h,
            infoViewJson: e,
            setFieldOptions: m,
            fieldOptions: _,
            ...c ? { components: c } : {},
            AttachmentPopup: d
          }
        );
      default:
        return /* @__PURE__ */ s.jsx(
          Sn,
          {
            groups: E,
            viewRenderers: a,
            layoutConfig: r,
            methods: o,
            infoData: S,
            isCommonInfo: !!L,
            viewMode: I,
            sqlOpsUrls: g,
            refid: y,
            ...i ? { Reports: i } : {},
            toast: l,
            handleAction: h,
            infoViewJson: e,
            setFieldOptions: m,
            fieldOptions: _,
            ...c ? { components: c } : {},
            AttachmentPopup: d
          }
        );
    }
  };
  return /* @__PURE__ */ s.jsxs("div", { className: r.containerClass || "h-screen flex flex-col ", children: [
    L && g && /* @__PURE__ */ s.jsx(
      Vo,
      {
        commonInfo: L,
        infoData: S,
        hiddenFields: t,
        sqlOpsUrls: g,
        setFieldOptions: m,
        fieldOptions: _,
        module_refid: e.module_refid,
        refid: y,
        methods: o,
        AttachmentPopup: d
      }
    ),
    P(p)
  ] });
}
export {
  Ti as InfoView
};
