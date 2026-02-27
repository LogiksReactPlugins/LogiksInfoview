import Q, { useState as ie, useEffect as Ee, useMemo as At, useLayoutEffect as es, useRef as Rt } from "react";
import * as xe from "yup";
import { useFormik as ts } from "formik";
import { createPortal as rs } from "react-dom";
var bt = { exports: {} }, Xe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mr;
function ns() {
  if (Mr) return Xe;
  Mr = 1;
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
  return Xe.Fragment = t, Xe.jsx = n, Xe.jsxs = n, Xe;
}
var Qe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $r;
function ss() {
  return $r || ($r = 1, process.env.NODE_ENV !== "production" && function() {
    function e(m) {
      if (m == null) return null;
      if (typeof m == "function")
        return m.$$typeof === M ? null : m.displayName || m.name || null;
      if (typeof m == "string") return m;
      switch (m) {
        case v:
          return "Fragment";
        case w:
          return "Profiler";
        case T:
          return "StrictMode";
        case S:
          return "Suspense";
        case d:
          return "SuspenseList";
        case D:
          return "Activity";
      }
      if (typeof m == "object")
        switch (typeof m.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), m.$$typeof) {
          case y:
            return "Portal";
          case A:
            return (m.displayName || "Context") + ".Provider";
          case b:
            return (m._context.displayName || "Context") + ".Consumer";
          case j:
            var R = m.render;
            return m = m.displayName, m || (m = R.displayName || R.name || "", m = m !== "" ? "ForwardRef(" + m + ")" : "ForwardRef"), m;
          case P:
            return R = m.displayName || null, R !== null ? R : e(m.type) || "Memo";
          case Y:
            R = m._payload, m = m._init;
            try {
              return e(m(R));
            } catch {
            }
        }
      return null;
    }
    function t(m) {
      return "" + m;
    }
    function n(m) {
      try {
        t(m);
        var R = !1;
      } catch {
        R = !0;
      }
      if (R) {
        R = console;
        var L = R.error, _ = typeof Symbol == "function" && Symbol.toStringTag && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return L.call(
          R,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          _
        ), t(m);
      }
    }
    function r(m) {
      if (m === v) return "<>";
      if (typeof m == "object" && m !== null && m.$$typeof === Y)
        return "<...>";
      try {
        var R = e(m);
        return R ? "<" + R + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var m = I.A;
      return m === null ? null : m.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(m) {
      if (W.call(m, "key")) {
        var R = Object.getOwnPropertyDescriptor(m, "key").get;
        if (R && R.isReactWarning) return !1;
      }
      return m.key !== void 0;
    }
    function l(m, R) {
      function L() {
        ce || (ce = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          R
        ));
      }
      L.isReactWarning = !0, Object.defineProperty(m, "key", {
        get: L,
        configurable: !0
      });
    }
    function g() {
      var m = e(this.type);
      return Z[m] || (Z[m] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), m = this.props.ref, m !== void 0 ? m : null;
    }
    function f(m, R, L, _, k, N, U, ee) {
      return L = N.ref, m = {
        $$typeof: C,
        type: m,
        key: R,
        props: N,
        _owner: k
      }, (L !== void 0 ? L : null) !== null ? Object.defineProperty(m, "ref", {
        enumerable: !1,
        get: g
      }) : Object.defineProperty(m, "ref", { enumerable: !1, value: null }), m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(m, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(m, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: U
      }), Object.defineProperty(m, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ee
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    }
    function u(m, R, L, _, k, N, U, ee) {
      var H = R.children;
      if (H !== void 0)
        if (_)
          if (G(H)) {
            for (_ = 0; _ < H.length; _++)
              p(H[_]);
            Object.freeze && Object.freeze(H);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(H);
      if (W.call(R, "key")) {
        H = e(m);
        var ne = Object.keys(R).filter(function(Ne) {
          return Ne !== "key";
        });
        _ = 0 < ne.length ? "{key: someKey, " + ne.join(": ..., ") + ": ...}" : "{key: someKey}", E[H + _] || (ne = 0 < ne.length ? "{" + ne.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          _,
          H,
          ne,
          H
        ), E[H + _] = !0);
      }
      if (H = null, L !== void 0 && (n(L), H = "" + L), i(R) && (n(R.key), H = "" + R.key), "key" in R) {
        L = {};
        for (var ae in R)
          ae !== "key" && (L[ae] = R[ae]);
      } else L = R;
      return H && l(
        L,
        typeof m == "function" ? m.displayName || m.name || "Unknown" : m
      ), f(
        m,
        H,
        N,
        k,
        s(),
        L,
        U,
        ee
      );
    }
    function p(m) {
      typeof m == "object" && m !== null && m.$$typeof === C && m._store && (m._store.validated = 1);
    }
    var h = Q, C = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), A = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), D = Symbol.for("react.activity"), M = Symbol.for("react.client.reference"), I = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, G = Array.isArray, V = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(m) {
        return m();
      }
    };
    var ce, Z = {}, z = h.react_stack_bottom_frame.bind(
      h,
      o
    )(), X = V(r(o)), E = {};
    Qe.Fragment = v, Qe.jsx = function(m, R, L, _, k) {
      var N = 1e4 > I.recentlyCreatedOwnerStacks++;
      return u(
        m,
        R,
        L,
        !1,
        _,
        k,
        N ? Error("react-stack-top-frame") : z,
        N ? V(r(m)) : X
      );
    }, Qe.jsxs = function(m, R, L, _, k) {
      var N = 1e4 > I.recentlyCreatedOwnerStacks++;
      return u(
        m,
        R,
        L,
        !0,
        _,
        k,
        N ? Error("react-stack-top-frame") : z,
        N ? V(r(m)) : X
      );
    };
  }()), Qe;
}
var Br;
function as() {
  return Br || (Br = 1, process.env.NODE_ENV === "production" ? bt.exports = ns() : bt.exports = ss()), bt.exports;
}
var a = as();
function pn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: os } = Object.prototype, { getPrototypeOf: pr } = Object, { iterator: Lt, toStringTag: yn } = Symbol, It = /* @__PURE__ */ ((e) => (t) => {
  const n = os.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ae = (e) => (e = e.toLowerCase(), (t) => It(t) === e), Pt = (e) => (t) => typeof t === e, { isArray: qe } = Array, at = Pt("undefined");
function ot(e) {
  return e !== null && !at(e) && e.constructor !== null && !at(e.constructor) && ye(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const gn = Ae("ArrayBuffer");
function is(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && gn(e.buffer), t;
}
const ls = Pt("string"), ye = Pt("function"), xn = Pt("number"), it = (e) => e !== null && typeof e == "object", cs = (e) => e === !0 || e === !1, Nt = (e) => {
  if (It(e) !== "object")
    return !1;
  const t = pr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(yn in e) && !(Lt in e);
}, us = (e) => {
  if (!it(e) || ot(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, ds = Ae("Date"), fs = Ae("File"), ms = Ae("Blob"), hs = Ae("FileList"), ps = (e) => it(e) && ye(e.pipe), ys = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ye(e.append) && ((t = It(e)) === "formdata" || // detect form-data instance
  t === "object" && ye(e.toString) && e.toString() === "[object FormData]"));
}, gs = Ae("URLSearchParams"), [xs, bs, ws, Es] = ["ReadableStream", "Request", "Response", "Headers"].map(Ae), vs = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function lt(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), qe(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (ot(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let l;
    for (r = 0; r < i; r++)
      l = o[r], t.call(null, e[l], l, e);
  }
}
function bn(e, t) {
  if (ot(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const ke = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, wn = (e) => !at(e) && e !== ke;
function ar() {
  const { caseless: e } = wn(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && bn(t, s) || s;
    Nt(t[o]) && Nt(r) ? t[o] = ar(t[o], r) : Nt(r) ? t[o] = ar({}, r) : qe(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && lt(arguments[r], n);
  return t;
}
const As = (e, t, n, { allOwnKeys: r } = {}) => (lt(t, (s, o) => {
  n && ye(s) ? e[o] = pn(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), Ns = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ts = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, js = (e, t, n, r) => {
  let s, o, i;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && pr(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Ss = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Rs = (e) => {
  if (!e) return null;
  if (qe(e)) return e;
  let t = e.length;
  if (!xn(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, _s = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && pr(Uint8Array)), Cs = (e, t) => {
  const r = (e && e[Lt]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Os = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Ls = Ae("HTMLFormElement"), Is = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), zr = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Ps = Ae("RegExp"), En = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  lt(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, Ds = (e) => {
  En(e, (t, n) => {
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
}, ks = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return qe(e) ? r(e) : r(String(e).split(t)), n;
}, Fs = () => {
}, Ms = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function $s(e) {
  return !!(e && ye(e.append) && e[yn] === "FormData" && e[Lt]);
}
const Bs = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (it(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (ot(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = qe(r) ? [] : {};
        return lt(r, (i, l) => {
          const g = n(i, s + 1);
          !at(g) && (o[l] = g);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, zs = Ae("AsyncFunction"), Us = (e) => e && (it(e) || ye(e)) && ye(e.then) && ye(e.catch), vn = ((e, t) => e ? setImmediate : t ? ((n, r) => (ke.addEventListener("message", ({ source: s, data: o }) => {
  s === ke && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), ke.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  ye(ke.postMessage)
), Hs = typeof queueMicrotask < "u" ? queueMicrotask.bind(ke) : typeof process < "u" && process.nextTick || vn, Gs = (e) => e != null && ye(e[Lt]), x = {
  isArray: qe,
  isArrayBuffer: gn,
  isBuffer: ot,
  isFormData: ys,
  isArrayBufferView: is,
  isString: ls,
  isNumber: xn,
  isBoolean: cs,
  isObject: it,
  isPlainObject: Nt,
  isEmptyObject: us,
  isReadableStream: xs,
  isRequest: bs,
  isResponse: ws,
  isHeaders: Es,
  isUndefined: at,
  isDate: ds,
  isFile: fs,
  isBlob: ms,
  isRegExp: Ps,
  isFunction: ye,
  isStream: ps,
  isURLSearchParams: gs,
  isTypedArray: _s,
  isFileList: hs,
  forEach: lt,
  merge: ar,
  extend: As,
  trim: vs,
  stripBOM: Ns,
  inherits: Ts,
  toFlatObject: js,
  kindOf: It,
  kindOfTest: Ae,
  endsWith: Ss,
  toArray: Rs,
  forEachEntry: Cs,
  matchAll: Os,
  isHTMLForm: Ls,
  hasOwnProperty: zr,
  hasOwnProp: zr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: En,
  freezeMethods: Ds,
  toObjectSet: ks,
  toCamelCase: Is,
  noop: Fs,
  toFiniteNumber: Ms,
  findKey: bn,
  global: ke,
  isContextDefined: wn,
  isSpecCompliantForm: $s,
  toJSONObject: Bs,
  isAsyncFn: zs,
  isThenable: Us,
  setImmediate: vn,
  asap: Hs,
  isIterable: Gs
};
function q(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
x.inherits(q, Error, {
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
const An = q.prototype, Nn = {};
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
  Nn[e] = { value: e };
});
Object.defineProperties(q, Nn);
Object.defineProperty(An, "isAxiosError", { value: !0 });
q.from = (e, t, n, r, s, o) => {
  const i = Object.create(An);
  return x.toFlatObject(e, i, function(g) {
    return g !== Error.prototype;
  }, (l) => l !== "isAxiosError"), q.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Ws = null;
function or(e) {
  return x.isPlainObject(e) || x.isArray(e);
}
function Tn(e) {
  return x.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ur(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = Tn(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function qs(e) {
  return x.isArray(e) && !e.some(or);
}
const Ks = x.toFlatObject(x, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Dt(e, t, n) {
  if (!x.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = x.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, T) {
    return !x.isUndefined(T[v]);
  });
  const r = n.metaTokens, s = n.visitor || u, o = n.dots, i = n.indexes, g = (n.Blob || typeof Blob < "u" && Blob) && x.isSpecCompliantForm(t);
  if (!x.isFunction(s))
    throw new TypeError("visitor must be a function");
  function f(y) {
    if (y === null) return "";
    if (x.isDate(y))
      return y.toISOString();
    if (x.isBoolean(y))
      return y.toString();
    if (!g && x.isBlob(y))
      throw new q("Blob is not supported. Use a Buffer instead.");
    return x.isArrayBuffer(y) || x.isTypedArray(y) ? g && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y;
  }
  function u(y, v, T) {
    let w = y;
    if (y && !T && typeof y == "object") {
      if (x.endsWith(v, "{}"))
        v = r ? v : v.slice(0, -2), y = JSON.stringify(y);
      else if (x.isArray(y) && qs(y) || (x.isFileList(y) || x.endsWith(v, "[]")) && (w = x.toArray(y)))
        return v = Tn(v), w.forEach(function(A, j) {
          !(x.isUndefined(A) || A === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Ur([v], j, o) : i === null ? v : v + "[]",
            f(A)
          );
        }), !1;
    }
    return or(y) ? !0 : (t.append(Ur(T, v, o), f(y)), !1);
  }
  const p = [], h = Object.assign(Ks, {
    defaultVisitor: u,
    convertValue: f,
    isVisitable: or
  });
  function C(y, v) {
    if (!x.isUndefined(y)) {
      if (p.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      p.push(y), x.forEach(y, function(w, b) {
        (!(x.isUndefined(w) || w === null) && s.call(
          t,
          w,
          x.isString(b) ? b.trim() : b,
          v,
          h
        )) === !0 && C(w, v ? v.concat(b) : [b]);
      }), p.pop();
    }
  }
  if (!x.isObject(e))
    throw new TypeError("data must be an object");
  return C(e), t;
}
function Hr(e) {
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
function yr(e, t) {
  this._pairs = [], e && Dt(e, this, t);
}
const jn = yr.prototype;
jn.append = function(t, n) {
  this._pairs.push([t, n]);
};
jn.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Hr);
  } : Hr;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function Ys(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Sn(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Ys;
  x.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = x.isURLSearchParams(t) ? t.toString() : new yr(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Gr {
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
const Rn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Vs = typeof URLSearchParams < "u" ? URLSearchParams : yr, Xs = typeof FormData < "u" ? FormData : null, Qs = typeof Blob < "u" ? Blob : null, Zs = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Vs,
    FormData: Xs,
    Blob: Qs
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, gr = typeof window < "u" && typeof document < "u", ir = typeof navigator == "object" && navigator || void 0, Js = gr && (!ir || ["ReactNative", "NativeScript", "NS"].indexOf(ir.product) < 0), ea = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ta = gr && window.location.href || "http://localhost", ra = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: gr,
  hasStandardBrowserEnv: Js,
  hasStandardBrowserWebWorkerEnv: ea,
  navigator: ir,
  origin: ta
}, Symbol.toStringTag, { value: "Module" })), le = {
  ...ra,
  ...Zs
};
function na(e, t) {
  return Dt(e, new le.classes.URLSearchParams(), {
    visitor: function(n, r, s, o) {
      return le.isNode && x.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function sa(e) {
  return x.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function aa(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function _n(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const l = Number.isFinite(+i), g = o >= n.length;
    return i = !i && x.isArray(s) ? s.length : i, g ? (x.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !l) : ((!s[i] || !x.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && x.isArray(s[i]) && (s[i] = aa(s[i])), !l);
  }
  if (x.isFormData(e) && x.isFunction(e.entries)) {
    const n = {};
    return x.forEachEntry(e, (r, s) => {
      t(sa(r), s, n, 0);
    }), n;
  }
  return null;
}
function oa(e, t, n) {
  if (x.isString(e))
    try {
      return (t || JSON.parse)(e), x.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const ct = {
  transitional: Rn,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = x.isObject(t);
    if (o && x.isHTMLForm(t) && (t = new FormData(t)), x.isFormData(t))
      return s ? JSON.stringify(_n(t)) : t;
    if (x.isArrayBuffer(t) || x.isBuffer(t) || x.isStream(t) || x.isFile(t) || x.isBlob(t) || x.isReadableStream(t))
      return t;
    if (x.isArrayBufferView(t))
      return t.buffer;
    if (x.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return na(t, this.formSerializer).toString();
      if ((l = x.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const g = this.env && this.env.FormData;
        return Dt(
          l ? { "files[]": t } : t,
          g && new g(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), oa(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || ct.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (x.isResponse(t) || x.isReadableStream(t))
      return t;
    if (t && x.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (i)
          throw l.name === "SyntaxError" ? q.from(l, q.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
    FormData: le.classes.FormData,
    Blob: le.classes.Blob
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
  ct.headers[e] = {};
});
const ia = x.toObjectSet([
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
]), la = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && ia[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Wr = Symbol("internals");
function Ze(e) {
  return e && String(e).trim().toLowerCase();
}
function Tt(e) {
  return e === !1 || e == null ? e : x.isArray(e) ? e.map(Tt) : String(e);
}
function ca(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const ua = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
function da(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function fa(e, t) {
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
let ge = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(l, g, f) {
      const u = Ze(g);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const p = x.findKey(s, u);
      (!p || s[p] === void 0 || f === !0 || f === void 0 && s[p] !== !1) && (s[p || g] = Tt(l));
    }
    const i = (l, g) => x.forEach(l, (f, u) => o(f, u, g));
    if (x.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (x.isString(t) && (t = t.trim()) && !ua(t))
      i(la(t), n);
    else if (x.isObject(t) && x.isIterable(t)) {
      let l = {}, g, f;
      for (const u of t) {
        if (!x.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        l[f = u[0]] = (g = l[f]) ? x.isArray(g) ? [...g, u[1]] : [g, u[1]] : u[1];
      }
      i(l, n);
    } else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Ze(t), t) {
      const r = x.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return ca(s);
        if (x.isFunction(n))
          return n.call(this, s, r);
        if (x.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Ze(t), t) {
      const r = x.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Yt(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = Ze(i), i) {
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
        n[i] = Tt(s), delete n[o];
        return;
      }
      const l = t ? da(o) : String(o).trim();
      l !== o && delete n[o], n[l] = Tt(s), r[l] = !0;
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
    const r = (this[Wr] = this[Wr] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const l = Ze(i);
      r[l] || (fa(s, i), r[l] = !0);
    }
    return x.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
ge.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
x.reduceDescriptors(ge.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
x.freezeMethods(ge);
function Vt(e, t) {
  const n = this || ct, r = t || n, s = ge.from(r.headers);
  let o = r.data;
  return x.forEach(e, function(l) {
    o = l.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Cn(e) {
  return !!(e && e.__CANCEL__);
}
function Ke(e, t, n) {
  q.call(this, e ?? "canceled", q.ERR_CANCELED, t, n), this.name = "CanceledError";
}
x.inherits(Ke, q, {
  __CANCEL__: !0
});
function On(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new q(
    "Request failed with status code " + n.status,
    [q.ERR_BAD_REQUEST, q.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function ma(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function ha(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(g) {
    const f = Date.now(), u = r[o];
    i || (i = f), n[s] = g, r[s] = f;
    let p = o, h = 0;
    for (; p !== s; )
      h += n[p++], p = p % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), f - i < t)
      return;
    const C = u && f - u;
    return C ? Math.round(h * 1e3 / C) : void 0;
  };
}
function pa(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const i = (f, u = Date.now()) => {
    n = u, s = null, o && (clearTimeout(o), o = null), e(...f);
  };
  return [(...f) => {
    const u = Date.now(), p = u - n;
    p >= r ? i(f, u) : (s = f, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - p)));
  }, () => s && i(s)];
}
const _t = (e, t, n = 3) => {
  let r = 0;
  const s = ha(50, 250);
  return pa((o) => {
    const i = o.loaded, l = o.lengthComputable ? o.total : void 0, g = i - r, f = s(g), u = i <= l;
    r = i;
    const p = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: g,
      rate: f || void 0,
      estimated: f && l && u ? (l - i) / f : void 0,
      event: o,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(p);
  }, n);
}, qr = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Kr = (e) => (...t) => x.asap(() => e(...t)), ya = le.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, le.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(le.origin),
  le.navigator && /(msie|trident)/i.test(le.navigator.userAgent)
) : () => !0, ga = le.hasStandardBrowserEnv ? (
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
function xa(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function ba(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ln(e, t, n) {
  let r = !xa(t);
  return e && (r || n == !1) ? ba(e, t) : t;
}
const Yr = (e) => e instanceof ge ? { ...e } : e;
function Me(e, t) {
  t = t || {};
  const n = {};
  function r(f, u, p, h) {
    return x.isPlainObject(f) && x.isPlainObject(u) ? x.merge.call({ caseless: h }, f, u) : x.isPlainObject(u) ? x.merge({}, u) : x.isArray(u) ? u.slice() : u;
  }
  function s(f, u, p, h) {
    if (x.isUndefined(u)) {
      if (!x.isUndefined(f))
        return r(void 0, f, p, h);
    } else return r(f, u, p, h);
  }
  function o(f, u) {
    if (!x.isUndefined(u))
      return r(void 0, u);
  }
  function i(f, u) {
    if (x.isUndefined(u)) {
      if (!x.isUndefined(f))
        return r(void 0, f);
    } else return r(void 0, u);
  }
  function l(f, u, p) {
    if (p in t)
      return r(f, u);
    if (p in e)
      return r(void 0, f);
  }
  const g = {
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
    headers: (f, u, p) => s(Yr(f), Yr(u), p, !0)
  };
  return x.forEach(Object.keys({ ...e, ...t }), function(u) {
    const p = g[u] || s, h = p(e[u], t[u], u);
    x.isUndefined(h) && p !== l || (n[u] = h);
  }), n;
}
const In = (e) => {
  const t = Me({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: l } = t;
  t.headers = i = ge.from(i), t.url = Sn(Ln(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), l && i.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let g;
  if (x.isFormData(n)) {
    if (le.hasStandardBrowserEnv || le.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((g = i.getContentType()) !== !1) {
      const [f, ...u] = g ? g.split(";").map((p) => p.trim()).filter(Boolean) : [];
      i.setContentType([f || "multipart/form-data", ...u].join("; "));
    }
  }
  if (le.hasStandardBrowserEnv && (r && x.isFunction(r) && (r = r(t)), r || r !== !1 && ya(t.url))) {
    const f = s && o && ga.read(o);
    f && i.set(s, f);
  }
  return t;
}, wa = typeof XMLHttpRequest < "u", Ea = wa && function(e) {
  return new Promise(function(n, r) {
    const s = In(e);
    let o = s.data;
    const i = ge.from(s.headers).normalize();
    let { responseType: l, onUploadProgress: g, onDownloadProgress: f } = s, u, p, h, C, y;
    function v() {
      C && C(), y && y(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
    }
    let T = new XMLHttpRequest();
    T.open(s.method.toUpperCase(), s.url, !0), T.timeout = s.timeout;
    function w() {
      if (!T)
        return;
      const A = ge.from(
        "getAllResponseHeaders" in T && T.getAllResponseHeaders()
      ), S = {
        data: !l || l === "text" || l === "json" ? T.responseText : T.response,
        status: T.status,
        statusText: T.statusText,
        headers: A,
        config: e,
        request: T
      };
      On(function(P) {
        n(P), v();
      }, function(P) {
        r(P), v();
      }, S), T = null;
    }
    "onloadend" in T ? T.onloadend = w : T.onreadystatechange = function() {
      !T || T.readyState !== 4 || T.status === 0 && !(T.responseURL && T.responseURL.indexOf("file:") === 0) || setTimeout(w);
    }, T.onabort = function() {
      T && (r(new q("Request aborted", q.ECONNABORTED, e, T)), T = null);
    }, T.onerror = function() {
      r(new q("Network Error", q.ERR_NETWORK, e, T)), T = null;
    }, T.ontimeout = function() {
      let j = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const S = s.transitional || Rn;
      s.timeoutErrorMessage && (j = s.timeoutErrorMessage), r(new q(
        j,
        S.clarifyTimeoutError ? q.ETIMEDOUT : q.ECONNABORTED,
        e,
        T
      )), T = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in T && x.forEach(i.toJSON(), function(j, S) {
      T.setRequestHeader(S, j);
    }), x.isUndefined(s.withCredentials) || (T.withCredentials = !!s.withCredentials), l && l !== "json" && (T.responseType = s.responseType), f && ([h, y] = _t(f, !0), T.addEventListener("progress", h)), g && T.upload && ([p, C] = _t(g), T.upload.addEventListener("progress", p), T.upload.addEventListener("loadend", C)), (s.cancelToken || s.signal) && (u = (A) => {
      T && (r(!A || A.type ? new Ke(null, e, T) : A), T.abort(), T = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const b = ma(s.url);
    if (b && le.protocols.indexOf(b) === -1) {
      r(new q("Unsupported protocol " + b + ":", q.ERR_BAD_REQUEST, e));
      return;
    }
    T.send(o || null);
  });
}, va = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const o = function(f) {
      if (!s) {
        s = !0, l();
        const u = f instanceof Error ? f : this.reason;
        r.abort(u instanceof q ? u : new Ke(u instanceof Error ? u.message : u));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new q(`timeout ${t} of ms exceeded`, q.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((f) => {
        f.unsubscribe ? f.unsubscribe(o) : f.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((f) => f.addEventListener("abort", o));
    const { signal: g } = r;
    return g.unsubscribe = () => x.asap(l), g;
  }
}, Aa = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, Na = async function* (e, t) {
  for await (const n of Ta(e))
    yield* Aa(n, t);
}, Ta = async function* (e) {
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
}, Vr = (e, t, n, r) => {
  const s = Na(e, t);
  let o = 0, i, l = (g) => {
    i || (i = !0, r && r(g));
  };
  return new ReadableStream({
    async pull(g) {
      try {
        const { done: f, value: u } = await s.next();
        if (f) {
          l(), g.close();
          return;
        }
        let p = u.byteLength;
        if (n) {
          let h = o += p;
          n(h);
        }
        g.enqueue(new Uint8Array(u));
      } catch (f) {
        throw l(f), f;
      }
    },
    cancel(g) {
      return l(g), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, kt = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Pn = kt && typeof ReadableStream == "function", ja = kt && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Dn = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Sa = Pn && Dn(() => {
  let e = !1;
  const t = new Request(le.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Xr = 64 * 1024, lr = Pn && Dn(() => x.isReadableStream(new Response("").body)), Ct = {
  stream: lr && ((e) => e.body)
};
kt && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Ct[t] && (Ct[t] = x.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new q(`Response type '${t}' is not supported`, q.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Ra = async (e) => {
  if (e == null)
    return 0;
  if (x.isBlob(e))
    return e.size;
  if (x.isSpecCompliantForm(e))
    return (await new Request(le.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (x.isArrayBufferView(e) || x.isArrayBuffer(e))
    return e.byteLength;
  if (x.isURLSearchParams(e) && (e = e + ""), x.isString(e))
    return (await ja(e)).byteLength;
}, _a = async (e, t) => {
  const n = x.toFiniteNumber(e.getContentLength());
  return n ?? Ra(t);
}, Ca = kt && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: s,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: l,
    onUploadProgress: g,
    responseType: f,
    headers: u,
    withCredentials: p = "same-origin",
    fetchOptions: h
  } = In(e);
  f = f ? (f + "").toLowerCase() : "text";
  let C = va([s, o && o.toAbortSignal()], i), y;
  const v = C && C.unsubscribe && (() => {
    C.unsubscribe();
  });
  let T;
  try {
    if (g && Sa && n !== "get" && n !== "head" && (T = await _a(u, r)) !== 0) {
      let S = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), d;
      if (x.isFormData(r) && (d = S.headers.get("content-type")) && u.setContentType(d), S.body) {
        const [P, Y] = qr(
          T,
          _t(Kr(g))
        );
        r = Vr(S.body, Xr, P, Y);
      }
    }
    x.isString(p) || (p = p ? "include" : "omit");
    const w = "credentials" in Request.prototype;
    y = new Request(t, {
      ...h,
      signal: C,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: w ? p : void 0
    });
    let b = await fetch(y, h);
    const A = lr && (f === "stream" || f === "response");
    if (lr && (l || A && v)) {
      const S = {};
      ["status", "statusText", "headers"].forEach((D) => {
        S[D] = b[D];
      });
      const d = x.toFiniteNumber(b.headers.get("content-length")), [P, Y] = l && qr(
        d,
        _t(Kr(l), !0)
      ) || [];
      b = new Response(
        Vr(b.body, Xr, P, () => {
          Y && Y(), v && v();
        }),
        S
      );
    }
    f = f || "text";
    let j = await Ct[x.findKey(Ct, f) || "text"](b, e);
    return !A && v && v(), await new Promise((S, d) => {
      On(S, d, {
        data: j,
        headers: ge.from(b.headers),
        status: b.status,
        statusText: b.statusText,
        config: e,
        request: y
      });
    });
  } catch (w) {
    throw v && v(), w && w.name === "TypeError" && /Load failed|fetch/i.test(w.message) ? Object.assign(
      new q("Network Error", q.ERR_NETWORK, e, y),
      {
        cause: w.cause || w
      }
    ) : q.from(w, w && w.code, e, y);
  }
}), cr = {
  http: Ws,
  xhr: Ea,
  fetch: Ca
};
x.forEach(cr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Qr = (e) => `- ${e}`, Oa = (e) => x.isFunction(e) || e === null || e === !1, kn = {
  getAdapter: (e) => {
    e = x.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !Oa(n) && (r = cr[(i = String(n)).toLowerCase()], r === void 0))
        throw new q(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([l, g]) => `adapter ${l} ` + (g === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(Qr).join(`
`) : " " + Qr(o[0]) : "as no adapter specified";
      throw new q(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: cr
};
function Xt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ke(null, e);
}
function Zr(e) {
  return Xt(e), e.headers = ge.from(e.headers), e.data = Vt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), kn.getAdapter(e.adapter || ct.adapter)(e).then(function(r) {
    return Xt(e), r.data = Vt.call(
      e,
      e.transformResponse,
      r
    ), r.headers = ge.from(r.headers), r;
  }, function(r) {
    return Cn(r) || (Xt(e), r && r.response && (r.response.data = Vt.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = ge.from(r.response.headers))), Promise.reject(r);
  });
}
const Fn = "1.11.0", Ft = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ft[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Jr = {};
Ft.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + Fn + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, l) => {
    if (t === !1)
      throw new q(
        s(i, " has been removed" + (n ? " in " + n : "")),
        q.ERR_DEPRECATED
      );
    return n && !Jr[i] && (Jr[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, l) : !0;
  };
};
Ft.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function La(e, t, n) {
  if (typeof e != "object")
    throw new q("options must be an object", q.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const l = e[o], g = l === void 0 || i(l, o, e);
      if (g !== !0)
        throw new q("option " + o + " must be " + g, q.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new q("Unknown option " + o, q.ERR_BAD_OPTION);
  }
}
const jt = {
  assertOptions: La,
  validators: Ft
}, Se = jt.validators;
let Fe = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Gr(),
      response: new Gr()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Me(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && jt.assertOptions(r, {
      silentJSONParsing: Se.transitional(Se.boolean),
      forcedJSONParsing: Se.transitional(Se.boolean),
      clarifyTimeoutError: Se.transitional(Se.boolean)
    }, !1), s != null && (x.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : jt.assertOptions(s, {
      encode: Se.function,
      serialize: Se.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), jt.assertOptions(n, {
      baseUrl: Se.spelling("baseURL"),
      withXsrfToken: Se.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && x.merge(
      o.common,
      o[n.method]
    );
    o && x.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (y) => {
        delete o[y];
      }
    ), n.headers = ge.concat(i, o);
    const l = [];
    let g = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(n) === !1 || (g = g && v.synchronous, l.unshift(v.fulfilled, v.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(v) {
      f.push(v.fulfilled, v.rejected);
    });
    let u, p = 0, h;
    if (!g) {
      const y = [Zr.bind(this), void 0];
      for (y.unshift(...l), y.push(...f), h = y.length, u = Promise.resolve(n); p < h; )
        u = u.then(y[p++], y[p++]);
      return u;
    }
    h = l.length;
    let C = n;
    for (p = 0; p < h; ) {
      const y = l[p++], v = l[p++];
      try {
        C = y(C);
      } catch (T) {
        v.call(this, T);
        break;
      }
    }
    try {
      u = Zr.call(this, C);
    } catch (y) {
      return Promise.reject(y);
    }
    for (p = 0, h = f.length; p < h; )
      u = u.then(f[p++], f[p++]);
    return u;
  }
  getUri(t) {
    t = Me(this.defaults, t);
    const n = Ln(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Sn(n, t.params, t.paramsSerializer);
  }
};
x.forEach(["delete", "get", "head", "options"], function(t) {
  Fe.prototype[t] = function(n, r) {
    return this.request(Me(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
x.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, l) {
      return this.request(Me(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  Fe.prototype[t] = n(), Fe.prototype[t + "Form"] = n(!0);
});
let Ia = class Mn {
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
      r.reason || (r.reason = new Ke(o, i, l), n(r.reason));
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
      token: new Mn(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function Pa(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Da(e) {
  return x.isObject(e) && e.isAxiosError === !0;
}
const ur = {
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
Object.entries(ur).forEach(([e, t]) => {
  ur[t] = e;
});
function $n(e) {
  const t = new Fe(e), n = pn(Fe.prototype.request, t);
  return x.extend(n, Fe.prototype, t, { allOwnKeys: !0 }), x.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return $n(Me(e, s));
  }, n;
}
const B = $n(ct);
B.Axios = Fe;
B.CanceledError = Ke;
B.CancelToken = Ia;
B.isCancel = Cn;
B.VERSION = Fn;
B.toFormData = Dt;
B.AxiosError = q;
B.Cancel = B.CanceledError;
B.all = function(t) {
  return Promise.all(t);
};
B.spread = Pa;
B.isAxiosError = Da;
B.mergeConfig = Me;
B.AxiosHeaders = ge;
B.formToJSON = (e) => _n(x.isHTMLForm(e) ? new FormData(e) : e);
B.getAdapter = kn.getAdapter;
B.HttpStatusCode = ur;
B.default = B;
const {
  Axios: qo,
  AxiosError: Ko,
  CanceledError: Yo,
  isCancel: Vo,
  CancelToken: Xo,
  VERSION: Qo,
  all: Zo,
  Cancel: Jo,
  isAxiosError: ei,
  spread: ti,
  toFormData: ri,
  AxiosHeaders: ni,
  HttpStatusCode: si,
  formToJSON: ai,
  getAdapter: oi,
  mergeConfig: ii
} = B;
/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */
const {
  entries: Bn,
  setPrototypeOf: en,
  isFrozen: ka,
  getPrototypeOf: Fa,
  getOwnPropertyDescriptor: Ma
} = Object;
let {
  freeze: de,
  seal: be,
  create: dr
} = Object, {
  apply: fr,
  construct: mr
} = typeof Reflect < "u" && Reflect;
de || (de = function(t) {
  return t;
});
be || (be = function(t) {
  return t;
});
fr || (fr = function(t, n) {
  for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    s[o - 2] = arguments[o];
  return t.apply(n, s);
});
mr || (mr = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return new t(...r);
});
const wt = fe(Array.prototype.forEach), $a = fe(Array.prototype.lastIndexOf), tn = fe(Array.prototype.pop), Je = fe(Array.prototype.push), Ba = fe(Array.prototype.splice), St = fe(String.prototype.toLowerCase), Qt = fe(String.prototype.toString), Zt = fe(String.prototype.match), et = fe(String.prototype.replace), za = fe(String.prototype.indexOf), Ua = fe(String.prototype.trim), we = fe(Object.prototype.hasOwnProperty), ue = fe(RegExp.prototype.test), tt = Ha(TypeError);
function fe(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    return fr(e, t, r);
  };
}
function Ha(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return mr(e, n);
  };
}
function K(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : St;
  en && en(e, null);
  let r = t.length;
  for (; r--; ) {
    let s = t[r];
    if (typeof s == "string") {
      const o = n(s);
      o !== s && (ka(t) || (t[r] = o), s = o);
    }
    e[s] = !0;
  }
  return e;
}
function Ga(e) {
  for (let t = 0; t < e.length; t++)
    we(e, t) || (e[t] = null);
  return e;
}
function Re(e) {
  const t = dr(null);
  for (const [n, r] of Bn(e))
    we(e, n) && (Array.isArray(r) ? t[n] = Ga(r) : r && typeof r == "object" && r.constructor === Object ? t[n] = Re(r) : t[n] = r);
  return t;
}
function rt(e, t) {
  for (; e !== null; ) {
    const r = Ma(e, t);
    if (r) {
      if (r.get)
        return fe(r.get);
      if (typeof r.value == "function")
        return fe(r.value);
    }
    e = Fa(e);
  }
  function n() {
    return null;
  }
  return n;
}
const rn = de(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Jt = de(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), er = de(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Wa = de(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), tr = de(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), qa = de(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), nn = de(["#text"]), sn = de(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), rr = de(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), an = de(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Et = de(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Ka = be(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Ya = be(/<%[\w\W]*|[\w\W]*%>/gm), Va = be(/\$\{[\w\W]*/gm), Xa = be(/^data-[\-\w.\u00B7-\uFFFF]+$/), Qa = be(/^aria-[\-\w]+$/), zn = be(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Za = be(/^(?:\w+script|data):/i), Ja = be(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Un = be(/^html$/i), eo = be(/^[a-z][.\w]*(-[.\w]+)+$/i);
var on = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Qa,
  ATTR_WHITESPACE: Ja,
  CUSTOM_ELEMENT: eo,
  DATA_ATTR: Xa,
  DOCTYPE_NAME: Un,
  ERB_EXPR: Ya,
  IS_ALLOWED_URI: zn,
  IS_SCRIPT_OR_DATA: Za,
  MUSTACHE_EXPR: Ka,
  TMPLIT_EXPR: Va
});
const nt = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, to = function() {
  return typeof window > "u" ? null : window;
}, ro = function(t, n) {
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
}, ln = function() {
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
function Hn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : to();
  const t = ($) => Hn($);
  if (t.version = "3.3.1", t.removed = [], !e || !e.document || e.document.nodeType !== nt.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: n
  } = e;
  const r = n, s = r.currentScript, {
    DocumentFragment: o,
    HTMLTemplateElement: i,
    Node: l,
    Element: g,
    NodeFilter: f,
    NamedNodeMap: u = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: p,
    DOMParser: h,
    trustedTypes: C
  } = e, y = g.prototype, v = rt(y, "cloneNode"), T = rt(y, "remove"), w = rt(y, "nextSibling"), b = rt(y, "childNodes"), A = rt(y, "parentNode");
  if (typeof i == "function") {
    const $ = n.createElement("template");
    $.content && $.content.ownerDocument && (n = $.content.ownerDocument);
  }
  let j, S = "";
  const {
    implementation: d,
    createNodeIterator: P,
    createDocumentFragment: Y,
    getElementsByTagName: D
  } = n, {
    importNode: M
  } = r;
  let I = ln();
  t.isSupported = typeof Bn == "function" && typeof A == "function" && d && d.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: W,
    ERB_EXPR: G,
    TMPLIT_EXPR: V,
    DATA_ATTR: ce,
    ARIA_ATTR: Z,
    IS_SCRIPT_OR_DATA: z,
    ATTR_WHITESPACE: X,
    CUSTOM_ELEMENT: E
  } = on;
  let {
    IS_ALLOWED_URI: m
  } = on, R = null;
  const L = K({}, [...rn, ...Jt, ...er, ...tr, ...nn]);
  let _ = null;
  const k = K({}, [...sn, ...rr, ...an, ...Et]);
  let N = Object.seal(dr(null, {
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
  })), U = null, ee = null;
  const H = Object.seal(dr(null, {
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
  let ne = !0, ae = !0, Ne = !1, $e = !0, Ie = !1, Pe = !0, _e = !1, Mt = !1, $t = !1, Be = !1, mt = !1, ht = !1, Er = !0, vr = !1;
  const qn = "user-content-";
  let Bt = !0, Ye = !1, ze = {}, Te = null;
  const zt = K({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Ar = null;
  const Nr = K({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ut = null;
  const Tr = K({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), pt = "http://www.w3.org/1998/Math/MathML", yt = "http://www.w3.org/2000/svg", Ce = "http://www.w3.org/1999/xhtml";
  let Ue = Ce, Ht = !1, Gt = null;
  const Kn = K({}, [pt, yt, Ce], Qt);
  let gt = K({}, ["mi", "mo", "mn", "ms", "mtext"]), xt = K({}, ["annotation-xml"]);
  const Yn = K({}, ["title", "style", "font", "a", "script"]);
  let Ve = null;
  const Vn = ["application/xhtml+xml", "text/html"], Xn = "text/html";
  let re = null, He = null;
  const Qn = n.createElement("form"), jr = function(c) {
    return c instanceof RegExp || c instanceof Function;
  }, Wt = function() {
    let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(He && He === c)) {
      if ((!c || typeof c != "object") && (c = {}), c = Re(c), Ve = // eslint-disable-next-line unicorn/prefer-includes
      Vn.indexOf(c.PARSER_MEDIA_TYPE) === -1 ? Xn : c.PARSER_MEDIA_TYPE, re = Ve === "application/xhtml+xml" ? Qt : St, R = we(c, "ALLOWED_TAGS") ? K({}, c.ALLOWED_TAGS, re) : L, _ = we(c, "ALLOWED_ATTR") ? K({}, c.ALLOWED_ATTR, re) : k, Gt = we(c, "ALLOWED_NAMESPACES") ? K({}, c.ALLOWED_NAMESPACES, Qt) : Kn, Ut = we(c, "ADD_URI_SAFE_ATTR") ? K(Re(Tr), c.ADD_URI_SAFE_ATTR, re) : Tr, Ar = we(c, "ADD_DATA_URI_TAGS") ? K(Re(Nr), c.ADD_DATA_URI_TAGS, re) : Nr, Te = we(c, "FORBID_CONTENTS") ? K({}, c.FORBID_CONTENTS, re) : zt, U = we(c, "FORBID_TAGS") ? K({}, c.FORBID_TAGS, re) : Re({}), ee = we(c, "FORBID_ATTR") ? K({}, c.FORBID_ATTR, re) : Re({}), ze = we(c, "USE_PROFILES") ? c.USE_PROFILES : !1, ne = c.ALLOW_ARIA_ATTR !== !1, ae = c.ALLOW_DATA_ATTR !== !1, Ne = c.ALLOW_UNKNOWN_PROTOCOLS || !1, $e = c.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ie = c.SAFE_FOR_TEMPLATES || !1, Pe = c.SAFE_FOR_XML !== !1, _e = c.WHOLE_DOCUMENT || !1, Be = c.RETURN_DOM || !1, mt = c.RETURN_DOM_FRAGMENT || !1, ht = c.RETURN_TRUSTED_TYPE || !1, $t = c.FORCE_BODY || !1, Er = c.SANITIZE_DOM !== !1, vr = c.SANITIZE_NAMED_PROPS || !1, Bt = c.KEEP_CONTENT !== !1, Ye = c.IN_PLACE || !1, m = c.ALLOWED_URI_REGEXP || zn, Ue = c.NAMESPACE || Ce, gt = c.MATHML_TEXT_INTEGRATION_POINTS || gt, xt = c.HTML_INTEGRATION_POINTS || xt, N = c.CUSTOM_ELEMENT_HANDLING || {}, c.CUSTOM_ELEMENT_HANDLING && jr(c.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (N.tagNameCheck = c.CUSTOM_ELEMENT_HANDLING.tagNameCheck), c.CUSTOM_ELEMENT_HANDLING && jr(c.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (N.attributeNameCheck = c.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), c.CUSTOM_ELEMENT_HANDLING && typeof c.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (N.allowCustomizedBuiltInElements = c.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Ie && (ae = !1), mt && (Be = !0), ze && (R = K({}, nn), _ = [], ze.html === !0 && (K(R, rn), K(_, sn)), ze.svg === !0 && (K(R, Jt), K(_, rr), K(_, Et)), ze.svgFilters === !0 && (K(R, er), K(_, rr), K(_, Et)), ze.mathMl === !0 && (K(R, tr), K(_, an), K(_, Et))), c.ADD_TAGS && (typeof c.ADD_TAGS == "function" ? H.tagCheck = c.ADD_TAGS : (R === L && (R = Re(R)), K(R, c.ADD_TAGS, re))), c.ADD_ATTR && (typeof c.ADD_ATTR == "function" ? H.attributeCheck = c.ADD_ATTR : (_ === k && (_ = Re(_)), K(_, c.ADD_ATTR, re))), c.ADD_URI_SAFE_ATTR && K(Ut, c.ADD_URI_SAFE_ATTR, re), c.FORBID_CONTENTS && (Te === zt && (Te = Re(Te)), K(Te, c.FORBID_CONTENTS, re)), c.ADD_FORBID_CONTENTS && (Te === zt && (Te = Re(Te)), K(Te, c.ADD_FORBID_CONTENTS, re)), Bt && (R["#text"] = !0), _e && K(R, ["html", "head", "body"]), R.table && (K(R, ["tbody"]), delete U.tbody), c.TRUSTED_TYPES_POLICY) {
        if (typeof c.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw tt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof c.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw tt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        j = c.TRUSTED_TYPES_POLICY, S = j.createHTML("");
      } else
        j === void 0 && (j = ro(C, s)), j !== null && typeof S == "string" && (S = j.createHTML(""));
      de && de(c), He = c;
    }
  }, Sr = K({}, [...Jt, ...er, ...Wa]), Rr = K({}, [...tr, ...qa]), Zn = function(c) {
    let O = A(c);
    (!O || !O.tagName) && (O = {
      namespaceURI: Ue,
      tagName: "template"
    });
    const F = St(c.tagName), J = St(O.tagName);
    return Gt[c.namespaceURI] ? c.namespaceURI === yt ? O.namespaceURI === Ce ? F === "svg" : O.namespaceURI === pt ? F === "svg" && (J === "annotation-xml" || gt[J]) : !!Sr[F] : c.namespaceURI === pt ? O.namespaceURI === Ce ? F === "math" : O.namespaceURI === yt ? F === "math" && xt[J] : !!Rr[F] : c.namespaceURI === Ce ? O.namespaceURI === yt && !xt[J] || O.namespaceURI === pt && !gt[J] ? !1 : !Rr[F] && (Yn[F] || !Sr[F]) : !!(Ve === "application/xhtml+xml" && Gt[c.namespaceURI]) : !1;
  }, je = function(c) {
    Je(t.removed, {
      element: c
    });
    try {
      A(c).removeChild(c);
    } catch {
      T(c);
    }
  }, De = function(c, O) {
    try {
      Je(t.removed, {
        attribute: O.getAttributeNode(c),
        from: O
      });
    } catch {
      Je(t.removed, {
        attribute: null,
        from: O
      });
    }
    if (O.removeAttribute(c), c === "is")
      if (Be || mt)
        try {
          je(O);
        } catch {
        }
      else
        try {
          O.setAttribute(c, "");
        } catch {
        }
  }, _r = function(c) {
    let O = null, F = null;
    if ($t)
      c = "<remove></remove>" + c;
    else {
      const te = Zt(c, /^[\r\n\t ]+/);
      F = te && te[0];
    }
    Ve === "application/xhtml+xml" && Ue === Ce && (c = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + c + "</body></html>");
    const J = j ? j.createHTML(c) : c;
    if (Ue === Ce)
      try {
        O = new h().parseFromString(J, Ve);
      } catch {
      }
    if (!O || !O.documentElement) {
      O = d.createDocument(Ue, "template", null);
      try {
        O.documentElement.innerHTML = Ht ? S : J;
      } catch {
      }
    }
    const oe = O.body || O.documentElement;
    return c && F && oe.insertBefore(n.createTextNode(F), oe.childNodes[0] || null), Ue === Ce ? D.call(O, _e ? "html" : "body")[0] : _e ? O.documentElement : oe;
  }, Cr = function(c) {
    return P.call(
      c.ownerDocument || c,
      c,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, qt = function(c) {
    return c instanceof p && (typeof c.nodeName != "string" || typeof c.textContent != "string" || typeof c.removeChild != "function" || !(c.attributes instanceof u) || typeof c.removeAttribute != "function" || typeof c.setAttribute != "function" || typeof c.namespaceURI != "string" || typeof c.insertBefore != "function" || typeof c.hasChildNodes != "function");
  }, Or = function(c) {
    return typeof l == "function" && c instanceof l;
  };
  function Oe($, c, O) {
    wt($, (F) => {
      F.call(t, c, O, He);
    });
  }
  const Lr = function(c) {
    let O = null;
    if (Oe(I.beforeSanitizeElements, c, null), qt(c))
      return je(c), !0;
    const F = re(c.nodeName);
    if (Oe(I.uponSanitizeElement, c, {
      tagName: F,
      allowedTags: R
    }), Pe && c.hasChildNodes() && !Or(c.firstElementChild) && ue(/<[/\w!]/g, c.innerHTML) && ue(/<[/\w!]/g, c.textContent) || c.nodeType === nt.progressingInstruction || Pe && c.nodeType === nt.comment && ue(/<[/\w]/g, c.data))
      return je(c), !0;
    if (!(H.tagCheck instanceof Function && H.tagCheck(F)) && (!R[F] || U[F])) {
      if (!U[F] && Pr(F) && (N.tagNameCheck instanceof RegExp && ue(N.tagNameCheck, F) || N.tagNameCheck instanceof Function && N.tagNameCheck(F)))
        return !1;
      if (Bt && !Te[F]) {
        const J = A(c) || c.parentNode, oe = b(c) || c.childNodes;
        if (oe && J) {
          const te = oe.length;
          for (let me = te - 1; me >= 0; --me) {
            const Le = v(oe[me], !0);
            Le.__removalCount = (c.__removalCount || 0) + 1, J.insertBefore(Le, w(c));
          }
        }
      }
      return je(c), !0;
    }
    return c instanceof g && !Zn(c) || (F === "noscript" || F === "noembed" || F === "noframes") && ue(/<\/no(script|embed|frames)/i, c.innerHTML) ? (je(c), !0) : (Ie && c.nodeType === nt.text && (O = c.textContent, wt([W, G, V], (J) => {
      O = et(O, J, " ");
    }), c.textContent !== O && (Je(t.removed, {
      element: c.cloneNode()
    }), c.textContent = O)), Oe(I.afterSanitizeElements, c, null), !1);
  }, Ir = function(c, O, F) {
    if (Er && (O === "id" || O === "name") && (F in n || F in Qn))
      return !1;
    if (!(ae && !ee[O] && ue(ce, O))) {
      if (!(ne && ue(Z, O))) {
        if (!(H.attributeCheck instanceof Function && H.attributeCheck(O, c))) {
          if (!_[O] || ee[O]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(Pr(c) && (N.tagNameCheck instanceof RegExp && ue(N.tagNameCheck, c) || N.tagNameCheck instanceof Function && N.tagNameCheck(c)) && (N.attributeNameCheck instanceof RegExp && ue(N.attributeNameCheck, O) || N.attributeNameCheck instanceof Function && N.attributeNameCheck(O, c)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              O === "is" && N.allowCustomizedBuiltInElements && (N.tagNameCheck instanceof RegExp && ue(N.tagNameCheck, F) || N.tagNameCheck instanceof Function && N.tagNameCheck(F)))
            ) return !1;
          } else if (!Ut[O]) {
            if (!ue(m, et(F, X, ""))) {
              if (!((O === "src" || O === "xlink:href" || O === "href") && c !== "script" && za(F, "data:") === 0 && Ar[c])) {
                if (!(Ne && !ue(z, et(F, X, "")))) {
                  if (F)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, Pr = function(c) {
    return c !== "annotation-xml" && Zt(c, E);
  }, Dr = function(c) {
    Oe(I.beforeSanitizeAttributes, c, null);
    const {
      attributes: O
    } = c;
    if (!O || qt(c))
      return;
    const F = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: _,
      forceKeepAttr: void 0
    };
    let J = O.length;
    for (; J--; ) {
      const oe = O[J], {
        name: te,
        namespaceURI: me,
        value: Le
      } = oe, Ge = re(te), Kt = Le;
      let se = te === "value" ? Kt : Ua(Kt);
      if (F.attrName = Ge, F.attrValue = se, F.keepAttr = !0, F.forceKeepAttr = void 0, Oe(I.uponSanitizeAttribute, c, F), se = F.attrValue, vr && (Ge === "id" || Ge === "name") && (De(te, c), se = qn + se), Pe && ue(/((--!?|])>)|<\/(style|title|textarea)/i, se)) {
        De(te, c);
        continue;
      }
      if (Ge === "attributename" && Zt(se, "href")) {
        De(te, c);
        continue;
      }
      if (F.forceKeepAttr)
        continue;
      if (!F.keepAttr) {
        De(te, c);
        continue;
      }
      if (!$e && ue(/\/>/i, se)) {
        De(te, c);
        continue;
      }
      Ie && wt([W, G, V], (Fr) => {
        se = et(se, Fr, " ");
      });
      const kr = re(c.nodeName);
      if (!Ir(kr, Ge, se)) {
        De(te, c);
        continue;
      }
      if (j && typeof C == "object" && typeof C.getAttributeType == "function" && !me)
        switch (C.getAttributeType(kr, Ge)) {
          case "TrustedHTML": {
            se = j.createHTML(se);
            break;
          }
          case "TrustedScriptURL": {
            se = j.createScriptURL(se);
            break;
          }
        }
      if (se !== Kt)
        try {
          me ? c.setAttributeNS(me, te, se) : c.setAttribute(te, se), qt(c) ? je(c) : tn(t.removed);
        } catch {
          De(te, c);
        }
    }
    Oe(I.afterSanitizeAttributes, c, null);
  }, Jn = function $(c) {
    let O = null;
    const F = Cr(c);
    for (Oe(I.beforeSanitizeShadowDOM, c, null); O = F.nextNode(); )
      Oe(I.uponSanitizeShadowNode, O, null), Lr(O), Dr(O), O.content instanceof o && $(O.content);
    Oe(I.afterSanitizeShadowDOM, c, null);
  };
  return t.sanitize = function($) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, O = null, F = null, J = null, oe = null;
    if (Ht = !$, Ht && ($ = "<!-->"), typeof $ != "string" && !Or($))
      if (typeof $.toString == "function") {
        if ($ = $.toString(), typeof $ != "string")
          throw tt("dirty is not a string, aborting");
      } else
        throw tt("toString is not a function");
    if (!t.isSupported)
      return $;
    if (Mt || Wt(c), t.removed = [], typeof $ == "string" && (Ye = !1), Ye) {
      if ($.nodeName) {
        const Le = re($.nodeName);
        if (!R[Le] || U[Le])
          throw tt("root node is forbidden and cannot be sanitized in-place");
      }
    } else if ($ instanceof l)
      O = _r("<!---->"), F = O.ownerDocument.importNode($, !0), F.nodeType === nt.element && F.nodeName === "BODY" || F.nodeName === "HTML" ? O = F : O.appendChild(F);
    else {
      if (!Be && !Ie && !_e && // eslint-disable-next-line unicorn/prefer-includes
      $.indexOf("<") === -1)
        return j && ht ? j.createHTML($) : $;
      if (O = _r($), !O)
        return Be ? null : ht ? S : "";
    }
    O && $t && je(O.firstChild);
    const te = Cr(Ye ? $ : O);
    for (; J = te.nextNode(); )
      Lr(J), Dr(J), J.content instanceof o && Jn(J.content);
    if (Ye)
      return $;
    if (Be) {
      if (mt)
        for (oe = Y.call(O.ownerDocument); O.firstChild; )
          oe.appendChild(O.firstChild);
      else
        oe = O;
      return (_.shadowroot || _.shadowrootmode) && (oe = M.call(r, oe, !0)), oe;
    }
    let me = _e ? O.outerHTML : O.innerHTML;
    return _e && R["!doctype"] && O.ownerDocument && O.ownerDocument.doctype && O.ownerDocument.doctype.name && ue(Un, O.ownerDocument.doctype.name) && (me = "<!DOCTYPE " + O.ownerDocument.doctype.name + `>
` + me), Ie && wt([W, G, V], (Le) => {
      me = et(me, Le, " ");
    }), j && ht ? j.createHTML(me) : me;
  }, t.setConfig = function() {
    let $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Wt($), Mt = !0;
  }, t.clearConfig = function() {
    He = null, Mt = !1;
  }, t.isValidAttribute = function($, c, O) {
    He || Wt({});
    const F = re($), J = re(c);
    return Ir(F, J, O);
  }, t.addHook = function($, c) {
    typeof c == "function" && Je(I[$], c);
  }, t.removeHook = function($, c) {
    if (c !== void 0) {
      const O = $a(I[$], c);
      return O === -1 ? void 0 : Ba(I[$], O, 1)[0];
    }
    return tn(I[$]);
  }, t.removeHooks = function($) {
    I[$] = [];
  }, t.removeAllHooks = function() {
    I = ln();
  }, t;
}
var no = Hn();
const so = "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg", ao = ["jpg", "jpeg", "png", "gif", "svg", "webp"], oo = ["mp4", "webm", "ogg"], io = ["txt", "json", "csv"], lo = ["pdf"];
function co(e) {
  return e.template ? e.template : "tab";
}
function uo(e) {
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    const s = r.group || "Info";
    t[s] || (t[s] = { label: s, type: "fields", fields: [] }), t[s]?.fields?.push({ name: n, ...r });
  }), t;
}
const fo = (e) => Object.entries(e ?? {}).filter(([, t]) => t.type === "geolocation").map(([t]) => t);
async function mo() {
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
function Ot(e, t = "create") {
  const n = {};
  return Object.keys(e).forEach((r) => {
    e[r].vmode === "edit" && t === "create" || (n[r] = {
      label: r,
      required: e[r].required ?? !1
    });
  }), n;
}
function ho(e, t = "create") {
  return Object.entries(e).filter(([, n]) => !(n.vmode === "edit" && t === "create")).map(([n, r]) => ({
    ...r,
    name: n
  }));
}
const ut = {
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
function dt(e) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(e) ? e : 6;
}
const pe = (e, t) => typeof e == "string" ? e.replace(
  /#(\w+)#/g,
  (n, r) => t[r] !== void 0 ? String(t[r]) : n
) : Array.isArray(e) ? e.map((n) => pe(n, t)) : e && typeof e == "object" ? Object.fromEntries(
  Object.entries(e).map(([n, r]) => [
    pe(n, t),
    pe(r, t)
  ])
) : e, Gn = (e) => {
  const t = Array.isArray(e?.data?.data) ? e.data.data[0] : Array.isArray(e?.data) ? e.data[0] : e?.data?.data ?? e?.data;
  return t && typeof t == "object" && !Array.isArray(t) ? t : null;
}, ve = (e, t, n, r) => {
  if (!Array.isArray(n) || n.length === 0) return {};
  const s = r ?? (n[0] && typeof n[0] == "object" && "category" in n[0] ? "category" : void 0);
  if (!s) {
    const i = {};
    return n.forEach((l) => {
      const g = l[e], f = l[t];
      g != null && f != null && (i[String(g)] = String(f));
    }), i;
  }
  const o = {};
  return n.forEach((i) => {
    const l = i[s] ?? "Others", g = i[e], f = i[t];
    g == null || f == null || (o[l] || (o[l] = {}), o[l][String(g)] = String(f));
  }), o;
};
function cn(e, t) {
  if (!t || Object.keys(t).length === 0) return e;
  if (typeof e == "number")
    return t[String(e)] ?? e;
  if (typeof e == "string") {
    const r = e.split(",").map((s) => s.trim()).map((s) => t[s]).filter(Boolean);
    return r.length ? r.join(", ") : e;
  }
  return e;
}
const po = (e) => e === !0 || e === "true", yo = (e, t, n, r) => {
  e.forEach((s) => {
    const o = s?.name;
    if (!o) return;
    let i = r?.[o];
    i == null && (i = s.default), s.multiple === !0 || s.type === "checkbox" || s.type === "tags" ? t[o] = Array.isArray(i) ? i : typeof i == "string" ? i.split(",").map((g) => g.trim()).filter(Boolean) : [] : s.type === "json" ? t[o] = typeof i == "object" && i !== null ? JSON.stringify(i, null, 2) : i ?? "" : s.type === "date" ? t[o] = typeof i == "string" ? i.slice(0, 10) : "" : s.type === "time" ? typeof i == "string" ? i.includes("T") ? t[o] = i.slice(11, 16) : t[o] = i.slice(0, 5) : t[o] = "" : o === "blocked" || o === "blacklist" ? t[o] = String(i ?? "false") : t[o] = i ?? "";
    let l;
    s.type === "file" ? l = s.multiple ? xe.array().of(xe.mixed()) : xe.mixed() : s.multiple === !0 || s.type === "checkbox" || s.type === "tags" ? l = xe.array().of(xe.string()) : s.type === "email" ? l = xe.string().email("Invalid email") : s.type === "number" ? l = xe.number().typeError("Must be a number") : s.type === "json" ? l = xe.string().test("json", "Invalid JSON", (g) => {
      if (!g) return !0;
      try {
        return JSON.parse(g), !0;
      } catch {
        return !1;
      }
    }) : l = xe.string(), s.required && (l = l.required(
      s.error_message || `${s.label || o} is required`
    )), s?.validate?.regex && typeof s.validate.regex == "string" && (l = l.matches(
      new RegExp(s?.validate?.regex),
      s?.error_message || "Invalid input format"
    )), s?.validate && Object.entries(s.validate).forEach(([g, f]) => {
      switch (g) {
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
          l = xe.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((u, p) => {
            if (typeof p == "string") {
              const h = p.replace(/-/g, "/"), [C, y, v] = h.split("/");
              if (C && y && v)
                return /* @__PURE__ */ new Date(`${v}-${y}-${C}`);
            }
            return u;
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
          l = xe.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          l = xe.number().typeError("Must be a decimal").transform((u, p) => {
            if (p == null || p === "") return;
            const h = Number(p);
            if (isNaN(h)) return u;
            if (typeof u == "number" && !isNaN(u)) {
              const C = Number(u);
              return Number.isInteger(C) ? Number(h.toFixed(C)) : h;
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
            (u) => u && u.toUpperCase()
          );
          break;
        case "lower":
          l = l.transform(
            (u) => u && u.toLowerCase()
          );
          break;
        case "length-min": {
          const u = Number(f);
          isNaN(u) || (l = l.min(u, `Minimum length is ${u}`));
          break;
        }
        case "length-max": {
          const u = Number(f);
          isNaN(u) || (l = l.max(u, `Maximum length is ${u}`));
          break;
        }
      }
    }), n[o] = l;
  });
}, hr = (e) => !e || typeof e != "object" ? !1 : Object.values(e).every(
  (t) => typeof t == "object" && t !== null
);
function go(e) {
  if (!e || typeof e != "object") return !1;
  const t = e.src;
  return typeof e.target == "string" && typeof t == "object" && t !== null && (t.type === "api" || typeof t.queryid == "string" || typeof t.table == "string" && typeof t.columns < "u");
}
function xo(e) {
  return e.split(",").map((t) => t.trim()).map((t) => {
    const n = t.match(/^(.+?)\s+as\s+.+$/i);
    return n ? n[1]?.trim() : t;
  }).filter((t) => !!t);
}
const un = (e, t) => {
  if (!e || t == null) return;
  const n = String(t);
  if (typeof Object.values(e)[0] == "string")
    return e[n];
  for (const s of Object.values(e))
    if (n in s)
      return s[n];
}, bo = (e) => {
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
function wo(e) {
  return e ? hr(e) ? Object.values(e).reduce((t, n) => (Object.assign(t, n), t), {}) : e : {};
}
const he = (e) => {
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
function Eo(e) {
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
function vo(e = "") {
  return e.split(".").pop()?.toLowerCase() ?? "";
}
function Ao(e) {
  return ao.includes(e) ? "image" : oo.includes(e) ? "video" : lo.includes(e) ? "pdf" : io.includes(e) ? "text" : "other";
}
const dn = {
  image: "fa fa-file-image",
  pdf: "fa fa-file-pdf",
  video: "fa fa-file-video",
  text: "fa fa-file-lines",
  other: "fa fa-file"
};
function No(e) {
  return no.sanitize(e, {
    USE_PROFILES: { html: !0 }
  });
}
const To = ({ fileUrl: e, category: t }) => e ? t === "image" ? /* @__PURE__ */ a.jsx("img", { src: e, className: "max-h-[80vh] mx-auto" }) : t === "pdf" || t === "text" ? /* @__PURE__ */ a.jsx("iframe", { src: e, className: "w-full h-[80vh]" }) : t === "video" ? /* @__PURE__ */ a.jsx("video", { controls: !0, className: "w-full max-h-[80vh]", children: /* @__PURE__ */ a.jsx("source", { src: e }) }) : /* @__PURE__ */ a.jsxs("div", { className: "text-center p-4", children: [
  /* @__PURE__ */ a.jsx("p", { children: "Preview not available" }),
  /* @__PURE__ */ a.jsx("a", { href: e, download: !0, className: "text-blue-600 underline", children: "Download file" })
] }) : null, st = (e) => ({
  Authorization: `Bearer ${e.accessToken}`
}), nr = async (e) => (await B.get(
  e.baseURL + e.dbopsGetHash,
  { headers: st(e) }
)).data.refhash, sr = async (e, t) => (await B.post(
  e.baseURL + e.dbopsGetRefId,
  t,
  { headers: st(e) }
)).data.refid, jo = {
  async fetch(e, t, n, r) {
    const s = await nr(e);
    let o = !1, i;
    n && (o = !0, i = n), o || (i = await sr(e, {
      operation: "fetch",
      source: t.source,
      fields: t.fields ?? {},
      datahash: s,
      srcid: r
    }));
    const l = await B.post(
      e.baseURL + e.dbopsFetch,
      { refid: i, datahash: s },
      { headers: st(e) }
    );
    return l.data?.data ?? l.data;
  },
  async create(e, t, n) {
    const r = await nr(e), s = await sr(e, {
      operation: "create",
      source: t.source,
      fields: t.values,
      datahash: r,
      srcid: n
    });
    return (await B.post(
      e.baseURL + e.dbopsCreate,
      { refid: s, fields: t.values, datahash: r },
      { headers: st(e) }
    )).data;
  },
  async update(e, t, n) {
    const r = await nr(e), s = await sr(e, {
      operation: "update",
      source: t.source,
      fields: t.values,
      datahash: r,
      srcid: n
    });
    return (await B.post(
      e.baseURL + e.dbopsUpdate,
      { refid: s, fields: t.values, datahash: r },
      { headers: st(e) }
    )).data;
  }
};
async function We(e, t, n, r = void 0, s = void 0, o = {}) {
  try {
    let i = n;
    return i || (i = (await B({
      method: "POST",
      url: e.baseURL + e.registerQuery,
      data: { query: t, srcid: s },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    })).data.queryid), await B({
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
async function So({
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
    let g;
    if ("type" in l && l.type === "api") {
      let h = e.name;
      typeof e.parameter == "string" && e.parameter && (h = e.parameter);
      const C = { [h]: t, refid: t };
      if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
        for (const [T, w] of Object.entries(e.parameter))
          C[T] = T === h ? t : s?.[w];
      const y = {
        method: l.method || "GET",
        url: n?.baseURL + l.endpoint,
        headers: {
          Authorization: `Bearer ${n?.accessToken}`
        },
        ...l.method === "GET" ? { params: C } : { data: C }
      }, { data: v } = await B(y);
      g = v;
    } else {
      let h;
      if (!l.queryid) {
        if (!l.table || !l.columns)
          throw new Error("SQL query requires field.table");
        const y = pe(l.where ?? {}, { refid: t });
        h = {
          ...l,
          table: l.table,
          cols: l.columns,
          where: y
        };
      }
      const { data: C } = await We(
        n,
        h,
        l.queryid,
        t
      );
      g = C;
    }
    const f = Array.isArray(g?.results?.options) ? g?.results?.options : Array.isArray(g.data) ? g.data : Array.isArray(g.results) ? g.results : g, u = Array.isArray(f) ? f.map(he) : [], p = ve(
      e.valueKey ?? "value",
      e.labelKey ?? "title",
      u,
      e.groupKey
    );
    r(i.target, p);
  }
}
async function Wn(e, t) {
  let n = t.previewPath ?? "/api/files/preview";
  const r = await B.get(
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
function Ro(e) {
  const t = dn[e] ?? dn.other;
  return /* @__PURE__ */ a.jsx("i", { className: `${t} text-2xl text-gray-600` });
}
const _o = ({ filePath: e, sqlOpsUrls: t }) => {
  const [n, r] = ie(null), [s, o] = ie(!1), i = vo(e), l = Ao(i);
  Ee(() => {
    if (!t || l !== "image" && !s) return;
    let f = !0, u = null;
    return Wn(e, t).then((p) => {
      f && (u = p, r(p));
    }), () => {
      f = !1, u && URL.revokeObjectURL(u);
    };
  }, [l, s, e, t]);
  let g = e.split("/").pop();
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    l === "image" && n ? /* @__PURE__ */ a.jsx(
      "img",
      {
        src: n,
        alt: g,
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
          Ro(l),
          /* @__PURE__ */ a.jsx("span", { className: "text-sm", children: g })
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
      n ? /* @__PURE__ */ a.jsx(To, { fileUrl: n, category: l }) : /* @__PURE__ */ a.jsx("div", { className: "text-center p-8", children: "Loading preview…" })
    ] }) })
  ] });
};
function ft({
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
  const g = `
    text-sm text-gray-600 break-words
  `, f = `
    block text-sm font-semibold  transition-all duration-300 text-gray-700 capitalize
  `, [u, p] = ie(
    i ?? e.options ?? {}
  ), h = Q.useRef(!1);
  Q.useEffect(() => {
    i && p(i);
  }, [i]);
  const C = Q.useMemo(
    () => wo(u),
    [u]
  );
  Q.useEffect(() => {
    let A = !0, j = e.valueKey ?? "value", S = e.labelKey ?? "title";
    return (async () => {
      let P = e?.options;
      if (P && (Array.isArray(P) && P.length > 0 || !Array.isArray(P) && Object.keys(P).length > 0)) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const W = Object.values(e.options);
          if (W.length && typeof W[0] == "string") {
            p(e.options);
            return;
          }
        }
        const M = (Array.isArray(e.options) ? e.options : [e.options]).map(he), I = ve(
          j,
          S,
          M,
          e.groupKey
          // auto-uses `category` if present
        );
        p(I);
        return;
      }
      const Y = e?.source ?? {};
      if (e.type === "dataMethod") {
        const D = e.method, M = D ? n[D] : void 0;
        if (M)
          try {
            const I = await Promise.resolve(M()), W = Array.isArray(I.data?.results?.options) ? I.data?.results?.options : Array.isArray(I?.data?.data) ? I.data.data : Array.isArray(I.data?.results) ? I.data?.results : Array.isArray(I?.data) ? I.data : I;
            if (typeof W == "object" && !Array.isArray(W)) {
              const ce = Object.values(W);
              if (ce.length && typeof ce[0] == "string") {
                p(W);
                return;
              }
            }
            const G = Array.isArray(W) ? W.map(he) : [], V = ve(j, S, G, e.groupKey);
            A && p(V);
            return;
          } catch (I) {
            console.error("Method execution failed:", I), A && p({});
            return;
          }
        else {
          A && p({});
          return;
        }
      }
      if (Y.type === "api" && Y.endpoint)
        try {
          const D = {
            method: Y.method || "GET",
            url: r?.baseURL + Y.endpoint,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            },
            ...Y.method === "GET" ? { params: { refid: Y.refid } } : { data: { refid: Y.refid } }
          }, M = await B(D), I = Array.isArray(M.data?.results?.options) ? M.data?.results?.options : Array.isArray(M?.data?.data) ? M.data.data : Array.isArray(M.data?.results) ? M.data?.results : Array.isArray(M?.data) ? M.data : M;
          if (typeof I == "object" && !Array.isArray(I)) {
            const V = Object.values(I);
            if (V.length && typeof V[0] == "string") {
              p(I);
              return;
            }
          }
          const W = Array.isArray(I) ? I.map(he) : [], G = ve(j, S, W, e.groupKey);
          A && p(G);
          return;
        } catch (D) {
          console.error("API execution failed:", D), A && p({});
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
              where: e.where ? s ? pe(e.where, { refid: s }) : e.where : void 0
            };
          }
          const M = await We(r, D, e?.queryid, void 0, o), I = Array.isArray(M?.data?.data) ? M.data.data : Array.isArray(M?.data) ? M.data : M;
          if (typeof I == "object" && !Array.isArray(I)) {
            const V = Object.values(I);
            if (V.length && typeof V[0] == "string") {
              p(I);
              return;
            }
          }
          const W = Array.isArray(I) ? I.map(he) : [], G = ve(j, S, W, e.groupKey);
          A && p(G);
        } catch (D) {
          console.error("API fetch failed:", D);
        }
      }
    })(), () => {
      A = !1;
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
  Q.useEffect(() => {
    h.current || !l || !y || (h.current = !0, So({
      field: e,
      value: y,
      sqlOpsUrls: r,
      setFieldOptions: l,
      values: t ?? {}
    }));
  }, [y, r, l]);
  let v;
  typeof y == "string" ? e.type === "date" ? v = y.split("T")[0] : e.type === "time" ? v = y.includes("T") ? y.slice(11, 16) : y.slice(0, 5) : v = cn(y, C) : v = cn(y, C);
  const T = v == null ? "" : typeof v == "string" || typeof v == "number" ? v : JSON.stringify(v), w = Eo(y), b = e.type === "richtextarea" && typeof T == "string" ? No(T) : null;
  return /* @__PURE__ */ a.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ a.jsx("label", { className: f, children: e?.label }),
    /* @__PURE__ */ a.jsx("div", { className: "relative", children: w ? w.type === "drawn" ? /* @__PURE__ */ a.jsx("svg", { viewBox: "0 0 300 150", className: "h-24 w-full border bg-white rounded", children: w.paths.map((A, j) => /* @__PURE__ */ a.jsx(
      "path",
      {
        d: A.d,
        stroke: A.color || "#000",
        strokeWidth: A.width || 2,
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      j
    )) }) : w.type === "text" ? /* @__PURE__ */ a.jsx("svg", { viewBox: "0 0 300 150", className: "h-24 w-full border bg-white rounded", children: /* @__PURE__ */ a.jsx(
      "text",
      {
        x: "10",
        y: "100",
        fontSize: w.data.style?.fontSize || 32,
        fontFamily: w.data.style?.fontFamily || "cursive",
        fill: w.data.style?.textColor || "#000",
        children: w.data.text
      }
    ) }) : w.type === "html" ? /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "border bg-white rounded p-2 text-sm",
        dangerouslySetInnerHTML: { __html: w.html }
      }
    ) : /* @__PURE__ */ a.jsx(
      "img",
      {
        src: w.src,
        alt: "signature",
        className: "h-24 object-contain border bg-white rounded"
      }
    ) : (e.type === "file" || e.type === "attachement" || e.type === "photo" || e.type === "avatar") && v ? /* @__PURE__ */ a.jsx("div", { className: "flex flex-wrap gap-2", children: String(v).split(",").map((A) => A.trim()).filter(Boolean).map((A) => /* @__PURE__ */ a.jsx(
      _o,
      {
        sqlOpsUrls: r,
        filePath: A
      },
      A
    )) }) : e.type === "richtextarea" ? /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "tiptap border border-gray-200 min-h-[400px] max-h-[220px] overflow-auto bg-white rounded p-2 text-sm",
        dangerouslySetInnerHTML: { __html: b ?? "" }
      }
    ) : /* @__PURE__ */ a.jsx("p", { className: g, children: T }) })
  ] });
}
function Co({ filePath: e, field_name: t, sqlOpsUrls: n }) {
  const [r, s] = ie(null);
  return Ee(() => {
    if (!open || !n) return;
    let o = !0, i = null;
    return Wn(e, n).then((l) => {
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
        i.onerror = null, i.src = so;
      }
    }
  ) : null;
}
function Oo({
  commonInfo: e,
  infoData: t,
  hiddenFields: n = [],
  sqlOpsUrls: r,
  setFieldOptions: s,
  fieldOptions: o,
  module_refid: i,
  refid: l,
  methods: g
}) {
  const f = At(
    () => e?.fields?.find((h) => h.type === "avatar"),
    [e?.fields]
  ), u = f?.name, p = u && typeof t?.[u] == "string" ? t[u].trim() : "";
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white border border-gray-100 p-4 min-h-3/10 overflow-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    f && /* @__PURE__ */ a.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ a.jsx("div", { className: "relative w-42 h-42 p-2 rounded-sm overflow-hidden bg-gray-100 flex items-center justify-center", children: p ? /* @__PURE__ */ a.jsx(
      Co,
      {
        field_name: f.name,
        filePath: p,
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
    /* @__PURE__ */ a.jsx("div", { className: `min-h-0 max-h-40 overflow-y-auto custom-scrollbar ${f ? "lg:col-span-10" : "lg:col-span-12"}`, children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: e.fields?.map((h, C) => n.includes(h.name) || h.type === "avatar" ? null : /* @__PURE__ */ a.jsx("div", { className: `hover:bg-gray-100 transition-colors duration-200 col-span-12 sm:col-span-6 ${ut[dt(h.width)] || "lg:col-span-4"}`, children: /* @__PURE__ */ a.jsx(
      ft,
      {
        field: h,
        data: t ?? {},
        sqlOpsUrls: r,
        methods: g,
        refid: l,
        module_refid: i,
        setFieldOptions: s,
        ...o[h.name] ? { optionsOverride: o[h.name] } : {}
      },
      h?.name
    ) }, h.name)) }) })
  ] }) });
}
function xr({ tabObj: e, methods: t, tabName: n, sqlOpsUrls: r, refid: s, module_refid: o, setFieldOptions: i, fieldOptions: l }) {
  const [g, f] = Q.useState(null);
  return Q.useEffect(() => {
    let u = !1;
    return (async () => {
      const h = e?.config;
      if (!h?.type) {
        u || f(null);
        return;
      }
      if (h.type === "method") {
        const C = h.method, y = C ? t[C] : void 0;
        if (y)
          try {
            const v = await Promise.resolve(y());
            u || f(v || null);
          } catch (v) {
            console.error("Method execution failed:", v), u || f(null);
          }
        else
          u || f(null);
      }
      if (h.type === "api")
        try {
          const C = await B({
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
          u || f(C.data || null);
        } catch (C) {
          console.error("API fetch failed:", C), u || f(null);
        }
      if (h.type === "sql" && s && s != "0" || h?.dbopsid) {
        if (!r) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let C = !1, y;
          h?.dbopsid && (C = !0, y = h?.dbopsid);
          const v = await B({
            method: "GET",
            url: r.baseURL + r.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            }
          });
          if (!C) {
            let b = {
              ...h
            };
            h.where && (b = {
              ...h,
              where: pe(h.where, {
                refid: s
              })
            }), y = (await B({
              method: "POST",
              url: r.baseURL + r.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: b,
                fields: Ot(h.fields, r.operation),
                forcefill: h.forcefill,
                datahash: v.data.refhash,
                srcid: o
              },
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              }
            }))?.data.refid;
          }
          const T = await B({
            method: "POST",
            url: r.baseURL + r.dbopsFetch,
            data: {
              refid: y,
              datahash: v.data.refhash
            },
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            }
          }), w = Gn(T);
          u || f(w);
        } catch (C) {
          console.error("API fetch failed:", C);
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
  ]), /* @__PURE__ */ a.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: g ? Object.keys(g).map((u, p) => {
    let h = { name: u, label: u };
    return /* @__PURE__ */ a.jsx(
      "div",
      {
        className: `col-span-12 sm:col-span-6 ${ut[dt(e.width)] || "lg:col-span-2"}`,
        children: /* @__PURE__ */ a.jsx(
          ft,
          {
            field: h,
            data: g ?? {},
            methods: t,
            refid: s,
            sqlOpsUrls: r,
            setFieldOptions: i,
            ...l[h.name] ? { optionsOverride: l[h.name] } : {}
          },
          u
        )
      },
      `field-${p}`
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
function Lo({
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
function vt({
  anchorRef: e,
  open: t,
  children: n,
  offset: r = 4
}) {
  const [s, o] = ie({});
  return es(() => {
    if (!t || !e.current) return;
    const i = e.current.getBoundingClientRect();
    o({
      position: "fixed",
      top: i.bottom + r,
      left: i.left,
      width: "200px",
      zIndex: 1e3
    });
  }, [t, e, r]), t ? rs(
    /* @__PURE__ */ a.jsx("div", { style: s, children: n }),
    document.body
  ) : null;
}
function Io({
  field: e,
  formik: t,
  methods: n = {},
  sqlOpsUrls: r,
  refid: s,
  optionsOverride: o,
  setFieldOptions: i,
  module_refid: l
}) {
  const [g, f] = ie(!1), [u, p] = ie(
    o ?? e.options ?? {}
  ), [h, C] = ie(""), [y, v] = ie(0), T = Rt(null), [w, b] = ie(!1), A = Q.useRef(h), j = Q.useRef(null), S = Rt(null);
  Q.useEffect(() => {
    A.current = h;
  }, [h]), Ee(() => {
    o && Object.keys(o).length !== 0 && p(o);
  }, [o]), Ee(() => {
    if (!w) return;
    const z = (X) => {
      const E = X.target;
      S.current?.contains(E) || T.current?.contains(E) || (b(!1), C(""));
    };
    return document.addEventListener("mousedown", z), () => {
      document.removeEventListener("mousedown", z);
    };
  }, [w]);
  const d = e.name;
  Q.useEffect(() => {
    let z = !0;
    return (async () => {
      let E = e.valueKey ?? "value", m = e.labelKey ?? "title", R = e?.options;
      if (R && (Array.isArray(R) && R.length > 0 || !Array.isArray(R) && Object.keys(R).length > 0)) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const U = Object.values(e.options);
          if (U.length && typeof U[0] == "string") {
            p(e.options);
            return;
          }
        }
        const k = (Array.isArray(e.options) ? e.options : [e.options]).map(he), N = ve(
          E,
          m,
          k,
          e.groupKey
          // auto-uses `category` if present
        );
        p(N);
        return;
      }
      const L = e?.source ?? {};
      if (e.type === "dataMethod") {
        const _ = e.method, k = _ ? n[_] : void 0;
        if (k)
          try {
            const N = await k(), U = Array.isArray(N.data?.results?.options) ? N.data?.results?.options : Array.isArray(N?.data?.data) ? N.data.data : Array.isArray(N.data?.results) ? N.data?.results : Array.isArray(N?.data) ? N.data : N;
            if (typeof U == "object" && !Array.isArray(U)) {
              const ne = Object.values(U);
              if (ne.length && typeof ne[0] == "string") {
                p(U);
                return;
              }
            }
            const ee = Array.isArray(U) ? U.map(he) : [], H = ve(E, m, ee, e.groupKey);
            z && p(H);
            return;
          } catch (N) {
            console.error("Method execution failed:", N), z && p({});
            return;
          }
        else {
          z && p({});
          return;
        }
      }
      if (L.type === "api" && L.endpoint)
        try {
          const _ = {
            method: L.method || "GET",
            url: r?.baseURL + L.endpoint,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            },
            ...L.method === "GET" ? { params: { refid: L.refid } } : { data: { refid: L.refid } }
          }, k = await B(_), N = Array.isArray(k.data?.results?.options) ? k.data?.results?.options : Array.isArray(k?.data?.data) ? k.data.data : Array.isArray(k.data?.results) ? k.data?.results : Array.isArray(k?.data) ? k.data : k;
          if (typeof N == "object" && !Array.isArray(N)) {
            const H = Object.values(N);
            if (H.length && typeof H[0] == "string") {
              p(N);
              return;
            }
          }
          const U = Array.isArray(N) ? N.map(he) : [], ee = ve(E, m, U, e.groupKey);
          z && p(ee);
          return;
        } catch (_) {
          console.error("API execution failed:", _), z && p({});
          return;
        }
      if (e.table || e.type === "dataSelector" || e.queryid) {
        if (!r) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let _;
          if (e.type === "dataSelector")
            _ = {
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
            _ = {
              table: e.table,
              cols: e.columns,
              where: e.where ? s ? pe(e.where, { refid: s }) : e.where : void 0
            };
          }
          const k = await We(r, _, e?.queryid, void 0, l), N = Array.isArray(k?.data?.data) ? k.data.data : Array.isArray(k?.data) ? k.data : k;
          if (typeof N == "object" && !Array.isArray(N)) {
            const H = Object.values(N);
            if (H.length && typeof H[0] == "string") {
              p(N);
              return;
            }
          }
          const U = Array.isArray(N) ? N.map(he) : [], ee = ve(E, m, U, e.groupKey);
          z && p(ee);
        } catch (_) {
          console.error("API fetch failed:", _);
        }
      }
    })(), () => {
      z = !1;
    };
  }, [
    e.options,
    e.source,
    e.table,
    e.columns,
    e.where,
    s
  ]);
  const P = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, Y = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, D = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, M = (z) => z.icon ? /* @__PURE__ */ a.jsx("i", { className: z.icon }) : null, I = At(
    () => bo(u),
    [u]
  );
  At(() => {
    if (!e.type || !["suggest", "autosuggest", "autocomplete"].includes(e.type) || !h.trim()) return null;
    const z = h.trim().toLowerCase();
    return I.find(([, X]) => X.trim().toLowerCase() === z);
  }, [e.type, h, I]);
  const W = I.length, G = At(() => e.search || !h ? I : I.filter(
    ([, z]) => z.toLowerCase().includes(h.toLowerCase())
  ), [e.search, h, I]), V = (z, X) => {
    if (w === !0)
      if (z.key === "ArrowDown")
        z.preventDefault(), v(
          (E) => E + 1 < G.length ? E + 1 : 0
        );
      else if (z.key === "ArrowUp")
        z.preventDefault(), v(
          (E) => E - 1 >= 0 ? E - 1 : G.length - 1
        );
      else if (z.key === "Enter") {
        z.preventDefault();
        const [E] = G[y] || [];
        E && t.setFieldValue(e.name, X ? E : [...t.values[e.name], E]);
      } else z.key === "Escape" && (C(""), b(!1));
  };
  Ee(() => {
    T.current?.querySelector(
      `[data-index="${y}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [y]), Ee(() => {
    y >= G.length && v(0);
  }, [G, y]), Ee(() => {
    const z = e.autocomplete, X = e.ajaxchain;
    if (!z && !X) return;
    const E = t.values[e.name];
    if (!E) return;
    const m = Array.isArray(X) ? X : X ? [X] : [];
    (async () => {
      try {
        if (go(z)) {
          const L = z.src;
          if (!L || !r) return;
          let _;
          if ("type" in L && L.type === "api") {
            let N = e.name;
            typeof e.parameter == "string" && e.parameter && (N = e.parameter);
            const U = { [N]: E, refid: E };
            if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
              for (const [ne, ae] of Object.entries(e.parameter))
                U[ne] = ne === N ? E : t.values?.[ae];
            const ee = {
              method: L.method || "GET",
              url: r?.baseURL + L.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...L.method === "GET" ? { params: U } : { data: U }
            }, { data: H } = await B(ee);
            _ = Array.isArray(H?.data?.results?.options) ? H?.data?.results?.options[0] : Array.isArray(H?.data?.data) ? H.data.data[0] : Array.isArray(H?.data?.results) ? H.data.results[0] : Array.isArray(H?.data) ? H.data[0] : H?.data;
          } else {
            let N;
            if (!L.queryid) {
              if (!L.table || !L.columns)
                throw new Error("SQL query requires field.table");
              const ee = pe(L?.where ?? {}, {
                refid: E
              });
              N = {
                ...L,
                table: L.table,
                cols: L.columns,
                where: ee
              };
            }
            const { data: U } = await We(r, N, e?.queryid, void 0, l);
            _ = Array.isArray(U?.data?.data) ? U.data.data[0] : Array.isArray(U?.data) ? U.data[0] : U?.data;
          }
          let k = he(_);
          k && z.target.split(",").map((N) => N.trim()).forEach((N) => {
            k[N] !== void 0 && t.setFieldValue(N, k[N]);
          });
        }
        for (const L of m) {
          const _ = L.src;
          if (!L || typeof L != "object" || !_ || typeof _ != "object" || !r) continue;
          let k;
          if ("type" in _ && _.type === "api") {
            let ae = e.name;
            typeof e.parameter == "string" && e.parameter && (ae = e.parameter);
            let Ne = { [ae]: E, refid: E };
            if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
              for (const [Pe, _e] of Object.entries(e.parameter))
                Ne[Pe] = Pe === ae ? E : t.values?.[_e];
            const $e = {
              method: _.method || "GET",
              url: r?.baseURL + _.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ..._.method === "GET" ? { params: Ne } : { data: Ne }
            }, { data: Ie } = await B($e);
            k = Ie;
          } else {
            let ae;
            if (!_.queryid) {
              if (!_.table || !_.columns)
                throw new Error("SQL query requires field.table");
              const $e = pe(_?.where ?? {}, {
                refid: E
              });
              ae = {
                ..._,
                table: _.table,
                cols: _.columns,
                where: $e
              };
            }
            const { data: Ne } = await We(r, ae, e?.queryid, E, l);
            k = Ne;
          }
          let N = e.valueKey ?? "value", U = e.labelKey ?? "title";
          const ee = Array.isArray(k?.results?.options) ? k?.results?.options : Array.isArray(k.data) ? k.data : Array.isArray(k.results) ? k.results : k, H = Array.isArray(ee) ? ee.map(he) : [], ne = ve(
            N,
            U,
            H,
            e.groupKey
          );
          i?.(L.target, ne);
        }
      } catch (L) {
        console.error("Autocomplete / AjaxChain fetch failed", L);
      }
    })();
  }, [t.values[e.name]]), Q.useEffect(() => {
    if (!e.search || !h.trim() || !e.table || !r) return;
    const z = xo(e.columns ?? ""), X = new AbortController(), E = setTimeout(async () => {
      try {
        let m;
        if (!e.queryid) {
          if (!e.table || !e.cols)
            throw new Error("SQL query requires field.table");
          const H = s ? pe(e.where ?? {}, {
            refid: s
          }) : e.where;
          m = {
            ...e,
            table: e.table,
            cols: e.columns || e.cols,
            where: H
          };
        }
        let R = {};
        Array.isArray(z) && z.forEach((H) => {
          R[H] = [h, "LIKE"];
        });
        const { data: L } = await We(r, m, e?.queryid, void 0, l, R);
        let _ = e.valueKey ?? "value", k = e.labelKey ?? "title";
        const N = Array.isArray(L?.data?.data) ? L.data.data : Array.isArray(L?.data) ? L.data : L, U = Array.isArray(N) ? N.map(he) : [], ee = ve(
          _,
          k,
          U,
          e.groupKey
        );
        p(ee);
      } catch (m) {
        if (B.isCancel(m)) return;
        console.error("Search fetch failed", m);
      }
    }, 500);
    return () => {
      clearTimeout(E), X.abort();
    };
  }, [h, s]);
  const ce = async (z) => {
    if (z.length === 0) {
      console.error("No file");
      return;
    }
    if (!r) return;
    const X = r?.baseURL + r?.uploadURL;
    if (!X) {
      console.error("No Upload URL ");
      return;
    }
    const E = e.multiple === !0;
    try {
      const m = await Promise.all(
        Array.from(z).map(async (R) => {
          const L = new FormData();
          return L.append("file", R), (await B({
            method: "POST",
            url: X,
            data: L,
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${r?.accessToken}`
            }
          })).data;
        })
      );
      t.setFieldValue(
        d,
        E ? m.map((R) => R.path) : m[0]?.path
      );
    } catch (m) {
      console.error("File upload failed", m), t.setFieldError(d, "File upload failed");
    }
  }, Z = async (z, X, E) => {
    const m = X[z];
    if (!m) return;
    const R = n?.[m];
    if (typeof R != "function") {
      console.error(`Method "${String(m)}" not found`);
      return;
    }
    try {
      await Promise.resolve(R(E));
    } catch (L) {
      console.error(`Method "${String(m)}" failed`, L);
    }
  };
  switch (Ee(() => {
    !t.values[d] && j.current && (j.current.value = "");
  }, [t.values[d]]), e.type) {
    case "autocomplete": {
      const E = t.values[d] ?? "", m = h !== "" ? h : un(u, E) ?? String(E ?? ""), R = (_) => {
        const k = _.target.value;
        C(k), v(0), k.trim() ? b(!0) : (b(!1), t.setFieldValue(d, ""));
      }, L = (_) => {
        t.setFieldValue(d, _), C(""), b(!1), Z("onChange", e, `${d}-${_}`);
      };
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: D, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { ref: S, children: /* @__PURE__ */ a.jsx(
          "input",
          {
            className: `${P} ${Y}`,
            value: m,
            placeholder: e.placeholder || "Type to search...",
            onChange: R,
            onFocus: () => {
              const _ = String(t.values[d] ?? "");
              C(_);
            },
            onBlur: () => {
              setTimeout(() => b(!1), 150);
            },
            onKeyDown: (_) => {
              if (_.key === "Enter") {
                if (_.preventDefault(), G[y]) {
                  const [k] = G[y];
                  t.setFieldValue(d, k);
                } else h.trim() && t.setFieldValue(d, h.trim());
                b(!1);
                return;
              }
              V(_, !0);
            },
            disabled: e.disabled
          }
        ) }),
        /* @__PURE__ */ a.jsx(vt, { anchorRef: S, open: w, children: /* @__PURE__ */ a.jsx(
          "div",
          {
            ref: T,
            className: "bg-white border rounded shadow max-h-52 overflow-y-auto",
            children: G.length > 0 ? G.map(([_, k], N) => /* @__PURE__ */ a.jsx(
              "div",
              {
                id: `${d}-${_}`,
                "data-index": N,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${y === N ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => L(_),
                children: k
              },
              _
            )) : /* @__PURE__ */ a.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `No matches press enter to add "${m}" ` })
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
        const E = t.values[d] ?? [];
        return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ a.jsxs("label", { className: D, children: [
            e.label,
            e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ a.jsxs(
            "div",
            {
              ref: S,
              tabIndex: 0,
              className: "cursor-pointer select-none border border-gray-300 rounded-lg px-4 py-2.5 bg-white flex justify-between items-center",
              onClick: () => {
                b((m) => !m), v(0);
              },
              onKeyDown: (m) => V(m, !1),
              onBlur: () => {
                e.multiple || setTimeout(() => {
                  b(!1), C("");
                }, 150);
              },
              children: [
                /* @__PURE__ */ a.jsx("span", { className: "text-sm text-gray-700 truncate", children: E.length > 0 ? E.join(", ") : `Select ${e.label}` }),
                /* @__PURE__ */ a.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
              ]
            }
          ),
          /* @__PURE__ */ a.jsx(vt, { anchorRef: S, open: w, children: /* @__PURE__ */ a.jsxs(
            "div",
            {
              ref: T,
              className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
              children: [
                e.search && /* @__PURE__ */ a.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    type: "text",
                    value: h,
                    onChange: (m) => {
                      C(m.target.value), v(0);
                    },
                    placeholder: "Search...",
                    className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                  }
                ) }),
                G.length > 0 ? G.map(([m, R], L) => /* @__PURE__ */ a.jsxs(
                  "label",
                  {
                    "data-index": L,
                    className: `flex items-center gap-x-2 px-2 py-1 rounded cursor-pointer text-sm
                    ${E.includes(m) ? "bg-indigo-50 text-indigo-600 font-medium" : y === L ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: [
                      /* @__PURE__ */ a.jsx(
                        "input",
                        {
                          id: `${d}-${m}`,
                          type: "checkbox",
                          checked: E.includes(m),
                          onChange: (_) => {
                            const k = _.target.checked ? [...E, m] : E.filter((N) => N !== m);
                            t.setFieldValue(d, k), Z("onChange", e, `${d}-${m}`);
                          },
                          className: "h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        }
                      ),
                      R
                    ]
                  },
                  m
                )) : /* @__PURE__ */ a.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ]
            }
          ) }),
          t.touched[d] && t.errors[d] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[d]) })
        ] });
      }
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: D, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            ref: S,
            tabIndex: 0,
            className: "cursor-pointer select-none border border-gray-300 rounded-lg px-4 py-2.5 bg-white flex justify-between items-center",
            onClick: () => {
              b((E) => !E), v(0);
            },
            onKeyDown: (E) => V(E, !0),
            onBlur: () => {
              setTimeout(() => {
                b(!1), C("");
              }, 150);
            },
            children: [
              /* @__PURE__ */ a.jsx("span", { className: "text-sm text-gray-700 truncate", children: t.values[d] ? un(u, t.values[d]) ?? "Select option" : `Select ${e.label}` }),
              /* @__PURE__ */ a.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
            ]
          }
        ),
        /* @__PURE__ */ a.jsx(vt, { anchorRef: S, open: w, children: /* @__PURE__ */ a.jsxs(
          "div",
          {
            ref: T,
            className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
            children: [
              e.search && /* @__PURE__ */ a.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ a.jsx(
                "input",
                {
                  type: "text",
                  value: h,
                  onChange: (E) => {
                    C(E.target.value), v(0);
                  },
                  onKeyDown: (E) => V(E, !0),
                  placeholder: "Search...",
                  className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                }
              ) }),
              G.length > 0 && /* @__PURE__ */ a.jsx(
                "div",
                {
                  onMouseDown: (E) => {
                    E.preventDefault(), t.setFieldValue(d, ""), b(!1), C("");
                  },
                  className: "px-2 py-1 text-sm cursor-pointer hover:bg-gray-50",
                  children: "Clear selection"
                }
              ),
              G.length > 0 ? G.map(([E, m], R) => /* @__PURE__ */ a.jsx(
                "div",
                {
                  id: `${d}-${E}`,
                  "data-index": R,
                  onMouseDown: () => {
                    t.setFieldValue(d, E), b(!1), C(""), v(0), Z("onChange", e, `${d}-${E}`);
                  },
                  className: `px-2 py-1 rounded cursor-pointer text-sm
                  ${t.values[d] === E ? "bg-indigo-50 text-indigo-600 font-medium" : y === R ? "bg-gray-100" : "hover:bg-gray-50"}`,
                  children: m
                },
                E
              )) : /* @__PURE__ */ a.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
            ]
          }
        ) }),
        t.touched[d] && t.errors[d] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[d]) })
      ] });
    }
    case "textarea":
      return /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: D, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ a.jsx(
            "textarea",
            {
              id: d,
              className: `${P} ${Y} min-h-[120px] resize-none`,
              onFocus: () => f(!0),
              name: d,
              value: t.values[d],
              onBlur: t.handleBlur,
              onChange: (E) => {
                t.setFieldValue(
                  d,
                  E.target.value
                ), Z("onChange", e, `${d}`);
              },
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${g ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[d] && t.errors[d] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[d]) })
      ] }) });
    case "select":
      if (e.multiple === !0) {
        const E = t.values[d] ?? [];
        return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ a.jsxs("label", { className: D, children: [
            e.label,
            e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ a.jsxs(
            "div",
            {
              ref: S,
              tabIndex: 0,
              className: "cursor-pointer select-none border border-gray-300 rounded-lg px-4 py-2.5 bg-white flex justify-between items-center",
              onClick: () => {
                b((m) => !m), v(0);
              },
              onKeyDown: (m) => V(m, !1),
              onBlur: () => {
                e.multiple || setTimeout(() => {
                  b(!1), C("");
                }, 150);
              },
              children: [
                /* @__PURE__ */ a.jsx("span", { className: "text-sm text-gray-700 truncate", children: E.length > 0 ? E.join(", ") : `Select ${e.label}` }),
                /* @__PURE__ */ a.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
              ]
            }
          ),
          /* @__PURE__ */ a.jsx(vt, { anchorRef: S, open: w, children: /* @__PURE__ */ a.jsxs(
            "div",
            {
              ref: T,
              className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
              children: [
                e.search && /* @__PURE__ */ a.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    type: "text",
                    value: h,
                    onChange: (m) => {
                      C(m.target.value), v(0);
                    },
                    placeholder: "Search...",
                    className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                  }
                ) }),
                G.length > 0 ? G.map(([m, R], L) => /* @__PURE__ */ a.jsxs(
                  "label",
                  {
                    "data-index": L,
                    className: `flex items-center gap-x-2 px-2 py-1 rounded cursor-pointer text-sm
                    ${E.includes(m) ? "bg-indigo-50 text-indigo-600 font-medium" : y === L ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: [
                      /* @__PURE__ */ a.jsx(
                        "input",
                        {
                          id: `${d}-${m}`,
                          type: "checkbox",
                          checked: E.includes(m),
                          onChange: (_) => {
                            const k = _.target.checked ? [...E, m] : E.filter((N) => N !== m);
                            t.setFieldValue(d, k), Z("onChange", e, `${d}-${m}`);
                          },
                          className: "h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        }
                      ),
                      R
                    ]
                  },
                  m
                )) : /* @__PURE__ */ a.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ]
            }
          ) }),
          t.touched[d] && t.errors[d] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[d]) })
        ] });
      }
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: D, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ a.jsxs(
            "select",
            {
              className: `${P} ${Y} appearance-none cursor-pointer pr-12`,
              onFocus: () => f(!0),
              name: d,
              id: d,
              value: t.values[d],
              onBlur: t.handleBlur,
              onChange: (E) => {
                t.setFieldValue(
                  d,
                  E.target.value === "" ? "" : E.target.value
                ), Z("onChange", e, `${d}`);
              },
              disabled: e.disabled,
              children: [
                /* @__PURE__ */ a.jsx("option", { value: "", disabled: !0, children: e.placeholder || "Please select an option" }),
                !hr(u) && Object.entries(u).map(([E, m]) => /* @__PURE__ */ a.jsx("option", { value: E, className: "py-2", children: m }, E)),
                hr(u) && Object.entries(u).map(([E, m]) => /* @__PURE__ */ a.jsx("optgroup", { label: E, children: Object.entries(m).map(([R, L]) => /* @__PURE__ */ a.jsx("option", { value: R, children: L }, R)) }, E))
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
        /* @__PURE__ */ a.jsxs("label", { className: D, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: `flex ${W > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(u || {}).map(([E, m]) => /* @__PURE__ */ a.jsxs(
          "label",
          {
            htmlFor: `${d}-${E}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  id: `${d}-${E}`,
                  type: "radio",
                  name: d,
                  checked: t.values[d] === E,
                  value: E,
                  onChange: (R) => {
                    t.setFieldValue(
                      d,
                      R.target.value === "" ? "" : R.target.value
                    ), Z("onChange", e, `${d}-${E}`);
                  },
                  onBlur: t.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              m
            ]
          },
          E
        )) }),
        t.touched[d] && t.errors[d] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[d]) })
      ] });
    case "checkbox": {
      const E = t.values[d];
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: D, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(u || {}).map(([m, R]) => /* @__PURE__ */ a.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  id: `${d}-${m}`,
                  type: "checkbox",
                  checked: E.includes(m),
                  onChange: (L) => {
                    const _ = L.target.checked ? [...E, m] : E.filter((k) => k !== m);
                    t.setFieldValue(d, _), Z("onChange", e, `${d}-${m}`);
                  },
                  onBlur: t.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              R
            ]
          },
          m
        )) }),
        t.touched[d] && t.errors[d] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[d]) })
      ] });
    }
    case "tags": {
      const E = t.values[d], m = h.trim(), R = Array.isArray(u) ? u : Object.entries(u || {}).map(([N, U]) => ({ value: N, label: U })), L = (N) => {
        N && !E.includes(N) && (t.setFieldValue(d, [...E, N]), C(""));
      }, _ = (N) => {
        t.setFieldValue(
          d,
          E.filter((U) => U !== N)
        );
      }, k = (N) => R.find((U) => U.value === N)?.label ?? N;
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: D, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: `${P} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !e.disabled && document.getElementById(`${d}-input`)?.focus(),
            children: [
              E.map((N) => /* @__PURE__ */ a.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ a.jsx("span", { className: "text-indigo-700", children: k(N) }),
                    /* @__PURE__ */ a.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (U) => {
                          U.stopPropagation(), e.disabled || _(N);
                        },
                        onMouseDown: (U) => U.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                N
              )),
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  id: `${d}-input`,
                  type: "text",
                  value: h,
                  onChange: (N) => C(N.target.value),
                  onKeyDown: (N) => {
                    (N.key === "Enter" || N.key === ",") && (N.preventDefault(), L(m));
                  },
                  placeholder: E.length === 0 ? e.placeholder || "Type and press Enter" : "",
                  className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                  disabled: e.disabled
                }
              )
            ]
          }
        ),
        t.touched[d] && t.errors[d] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[d]) })
      ] });
    }
    case "attachment":
    case "photo":
    case "avatar":
    case "file":
      const z = e.multiple === !0, X = Array.isArray(t.values[d]) ? t.values[d] : t.values[d] ? [t.values[d]] : [];
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: D, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: M(e) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: d,
              ref: j,
              type: "file",
              className: `${P} ${Y} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => f(!0),
              name: d,
              multiple: z,
              onChange: (E) => {
                const m = E.currentTarget.files;
                m && ce(m), Z("onChange", e, `${d}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${g ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        X.map((E) => {
          const m = E?.split("/").pop();
          return m ? /* @__PURE__ */ a.jsx("div", { className: "mt-1", children: /* @__PURE__ */ a.jsx("span", { className: "text-sm", children: m }) }, E) : null;
        }),
        t.touched[d] && t.errors[d] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[d]) })
      ] });
    case "json":
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: D, children: [
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
              onChange: (E) => {
                t.setFieldValue(d, E.target.value), Z("onChange", e, `${d}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: e.disabled,
              className: `${P} ${Y} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${g ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        t.touched[d] && t.errors[d] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[d]) })
      ] });
    case "date":
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: D, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 right-3 top-1/2 -translate-y-1/2 pointer-events-none", children: /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-calendar" }) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: d,
              type: "date",
              name: d,
              min: e.min,
              max: e.max,
              value: t.values[d],
              onChange: (E) => {
                t.setFieldValue(d, E.target.value), Z("onChange", e, `${d}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled,
              className: `${P} ${Y} ${e.icon ? "pl-9" : ""}`
            }
          ),
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${g ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        t.touched[d] && t.errors[d] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[d]) })
      ] });
    case "number":
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: D, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: M(e) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: d,
              type: e.type || "text",
              className: `${P} ${Y} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => f(!0),
              name: d,
              value: t.values[d],
              onBlur: t.handleBlur,
              onChange: (E) => {
                t.setFieldValue(d, E.target.value), Z("onChange", e, `${d}`);
              },
              step: e.step,
              placeholder: e.placeholder,
              disabled: e.disabled,
              min: e.min,
              max: e.max
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${g ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[d] && t.errors[d] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[d]) })
      ] });
    default:
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: D, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: M(e) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: d,
              type: e.type || "text",
              className: `${P} ${Y} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => f(!0),
              name: d,
              value: t.values[d],
              onBlur: t.handleBlur,
              onChange: (E) => {
                t.setFieldValue(d, E.target.value), Z("onChange", e, `${d}`);
              },
              placeholder: e.placeholder,
              disabled: e.disabled,
              step: e.step,
              minLength: e.minlength,
              maxLength: e.maxlength
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${g ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[d] && t.errors[d] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[d]) })
      ] });
  }
}
function Po({
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
  module_refid: g
}) {
  const f = ho(t, i?.operation), [u, p] = Q.useState({}), h = (w, b) => {
    p((A) => ({
      ...A,
      [w]: b
    }));
  }, { initialValues: C, validationSchema: y } = Q.useMemo(() => {
    const w = {}, b = {};
    return f.forEach((A) => {
      yo([A], w, b, n);
    }), {
      initialValues: w,
      validationSchema: b
    };
  }, [f, n]), v = ts({
    initialValues: C,
    enableReinitialize: !0,
    validationSchema: xe.object().shape(y),
    onSubmit: (w) => {
      r(w), v.resetForm();
    }
  });
  function T(w) {
    w.preventDefault(), v.resetForm();
  }
  return /* @__PURE__ */ a.jsx("div", { className: "relative z-10 max-w-full ", children: /* @__PURE__ */ a.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ a.jsxs("form", { onSubmit: v.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "grid grid-flow-col auto-cols-max gap-4  overflow-x-auto", children: [
      f.map((w, b) => po(w.hidden) || w.type === "geolocation" || w.vmode === "edit" && i?.operation === "create" ? null : /* @__PURE__ */ a.jsx(
        "div",
        {
          children: /* @__PURE__ */ a.jsx(
            Io,
            {
              refid: l,
              module_refid: g,
              sqlOpsUrls: i,
              field: w,
              formik: v,
              methods: o,
              setFieldOptions: h,
              ...u[w.name] ? { optionsOverride: u[w.name] } : {}
            }
          )
        },
        w?.name ?? `field-${b}`
      )),
      /* @__PURE__ */ a.jsxs("div", { className: "", children: [
        /* @__PURE__ */ a.jsx("div", { children: "  " }),
        /* @__PURE__ */ a.jsx("button", { onClick: T, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Reset" }),
        Object.keys(v.errors).length > 0 && /* @__PURE__ */ a.jsx("div", { children: "  " })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "", children: [
        /* @__PURE__ */ a.jsx("div", { children: "  " }),
        /* @__PURE__ */ a.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Save" }),
        Object.keys(v.errors).length > 0 && /* @__PURE__ */ a.jsx("div", { children: "  " })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "mt-8 flex justify-between space-x-3", children: /* @__PURE__ */ a.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }) })
  ] }) }) });
}
function Do({
  formJson: e,
  methods: t = {},
  userid: n = null,
  onCancel: r = () => {
  },
  components: s = {},
  callback: o = () => {
  },
  initialvalues: i = {},
  setEditData: l,
  module_refid: g
}) {
  const f = e.endPoints, u = e?.source?.refid, [p, h] = Q.useState(i), C = Q.useMemo(() => fo(e.fields), [e.fields]);
  Q.useEffect(() => {
    h(i ?? {});
  }, [i]);
  const y = Q.useCallback(
    (w) => {
      w && Object.keys(w).length > 0 && h(w);
    },
    []
  );
  Q.useEffect(() => {
    let w = !0;
    return (async () => {
      const A = e?.source ?? {};
      if (A?.type) {
        if (A.type === "method") {
          const j = A.method, S = j ? t[j] : void 0;
          if (S)
            try {
              const d = await Promise.resolve(S());
              w && y(d);
            } catch (d) {
              console.error("Method execution failed:", d);
            }
        }
        if (A.type === "api" && f?.operation !== "create")
          try {
            const j = await B({
              method: A.method || "GET",
              url: A.url ?? "",
              data: A.body ?? {},
              params: A.params ?? {},
              headers: A.headers ?? {}
            });
            w && y(j.data);
          } catch (j) {
            console.error("API fetch failed:", j);
          }
        if (A.type === "sql" && A.refid && A.refid !== "0" && f?.operation !== "create" || f?.operation !== "create" && A.dbopsid) {
          if (!f) {
            console.error("SQL source requires formJson.endPoints but it is missing");
            return;
          }
          try {
            const j = await jo.fetch(f, {
              source: {
                ...A,
                table: A.table,
                columns: A.columns,
                where: pe(A.where, {
                  refid: u
                })
              },
              fields: Ot(e.fields, f.operation)
            }, A?.dbopsid, g);
            w && y(j);
          } catch (j) {
            console.error("API fetch failed:", j);
          }
        }
      }
    })(), () => {
      w = !1;
    };
  }, [
    n,
    f,
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.url || "",
    JSON.stringify(e?.source?.params ?? {}),
    JSON.stringify(e?.source?.body ?? {}),
    JSON.stringify(e?.source?.headers ?? {})
  ]);
  const v = async (w) => {
    const b = e?.source ?? {};
    let A = null;
    if (C.length > 0)
      try {
        A = await mo();
      } catch (S) {
        console.log("catch fetchGeolocation", S), A = null;
      }
    const j = {
      ...w,
      ...Object.fromEntries(
        C.map((S) => [S, A])
      )
    };
    if (b.type === "method") {
      const S = b.method, d = S ? t[S] : void 0;
      if (d)
        try {
          const P = await Promise.resolve(d(j));
          l?.(null), o?.(P);
        } catch (P) {
          o?.(P), console.error("Method execution failed:", P);
        }
    }
    if (b.type === "api") {
      if (!f) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const S = await B({
          method: b.method || "POST",
          url: f.baseURL + b.endpoint,
          data: j ?? {},
          headers: {
            Authorization: `Bearer ${f?.accessToken}`
          }
        });
        l?.(null), o?.(S);
      } catch (S) {
        o?.(S), console.error("API fetch failed:", S);
      }
    }
    if (b.type === "sql") {
      const S = e.endPoints;
      if (!S) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let d = !1, P;
        b?.dbopsid && (d = !0, P = b?.dbopsid);
        const Y = await B({
          method: "GET",
          url: S.baseURL + S.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${S?.accessToken}`
          }
        });
        if (!d) {
          let I = {
            ...b
          };
          b.where && (I = {
            ...b,
            where: pe(b.where, {
              refid: u
            })
          }), P = (await B({
            method: "POST",
            url: S.baseURL + S.dbopsGetRefId,
            data: {
              operation: S.operation,
              source: I,
              fields: Ot(e.fields, S.operation),
              forcefill: e.forcefill,
              datahash: Y.data.refhash,
              scrid: g
            },
            headers: {
              Authorization: `Bearer ${S?.accessToken}`
            }
          }))?.data.refid;
        }
        let D = {
          refid: P,
          fields: j,
          datahash: Y.data.refhash,
          refid1: S.refid
        };
        b?.refid && (D.refid1 = b?.refid);
        const M = await B({
          method: "POST",
          url: S.baseURL + S[S.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: D,
          headers: {
            Authorization: `Bearer ${S?.accessToken}`
          }
        });
        l?.(null), o?.(M);
      } catch (d) {
        o?.(d), console.error("API fetch failed:", d);
      }
    }
  }, T = {
    simple: /* @__PURE__ */ a.jsx(
      Po,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: p,
        onSubmit: v,
        onCancel: r,
        methods: t,
        components: s,
        sqlOpsUrls: f,
        refid: u,
        module_refid: g
      }
    )
  };
  return /* @__PURE__ */ a.jsx("div", { className: "relative", children: T.simple });
}
function br({ tabObj: e, methods: t, tabName: n, sqlOpsUrls: r, refid: s, Reports: o, toast: i, handleAction: l, infoViewJson: g }) {
  const [f, u] = ie(!1), [p, h] = ie(null), [C, y] = Q.useState(0), [v, T] = Q.useState(null), w = e?.config, b = e?.config, A = b?.["popup.form"] ? "popup.form" : (b?.form, "form"), j = b?.[A] && Object.keys(b?.[A]).length > 0, S = (M) => {
    let I = he(M.data);
    T(I);
  }, d = (M) => {
    T(M), y((I) => I + 1);
  }, P = (M) => {
    let I = he(M.data);
    h(I), u(!0);
  }, Y = async () => {
    if (p?.id) {
      if (!r) {
        window.alert("Delete configuration missing.");
        return;
      }
      try {
        let M = e?.config;
        const I = M?.["popup.form"] ? "popup.form" : (M?.form, "form"), W = M?.[I];
        if (!W?.source) throw new Error("Form source missing");
        let G = !1, V;
        W?.source?.dbopsid && (G = !0, V = W?.source?.dbopsid);
        const ce = await B({
          method: "GET",
          url: r.baseURL + r.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${r.accessToken}`
          }
        });
        if (!G) {
          let Z = { ...W.source, refid: p.id };
          W.source.where && (Z = {
            ...Z,
            where: pe(W.source.where, {
              refid: p?.id
            })
          }), V = (await B({
            method: "POST",
            url: r.baseURL + r.dbopsGetRefId,
            data: {
              operation: "update",
              source: Z,
              fields: W.fields,
              forcefill: W.forcefill,
              datahash: ce.data.refhash,
              scrid: g?.module_refid
            },
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            }
          }))?.data.refid;
        }
        await B({
          method: "POST",
          url: r.baseURL + r.dbopsUpdate,
          data: {
            refid: V,
            fields: { blocked: "true" },
            datahash: ce.data.refhash,
            refid1: p?.id
          },
          headers: {
            Authorization: `Bearer ${r.accessToken}`
          }
        }), window.alert("Record deleted successfully."), y((Z) => Z + 1);
      } catch (M) {
        console.error(M), window.alert("Failed to delete record. Please try again");
      } finally {
        h(null), u(!1);
      }
    }
  }, D = () => {
    h(null), u(!1);
  };
  return /* @__PURE__ */ a.jsx(a.Fragment, { children: o ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      o,
      {
        methods: { ...t, deleteRecord: P, editRecord: S },
        report: {
          ...w,
          source: {
            table: w?.table,
            type: "sql",
            cols: w?.cols,
            where: w?.where,
            orderby: w?.orderby,
            queryid: w?.queryid
          },
          endPoints: r,
          actions: { ...w?.actions, ...g?.buttons, ...g.actions },
          datagrid: w?.datagrid,
          buttons: w?.buttons,
          refresh: C
        },
        onButtonClick: l
      }
    ),
    j && /* @__PURE__ */ a.jsx(
      Do,
      {
        formJson: {
          ...b[A],
          source: {
            ...b?.[A].source,
            refid: v?.id
          },
          endPoints: {
            ...r,
            operation: v ? "update" : "create"
          }
        },
        methods: t,
        initialvalues: v ?? {},
        setEditData: d,
        module_refid: g?.module_refid
      }
    ),
    /* @__PURE__ */ a.jsx(
      Lo,
      {
        open: f,
        onConfirm: Y,
        onCancel: D
      }
    )
  ] }) : /* @__PURE__ */ a.jsx("p", { children: "Report not available" }) });
}
function wr(e, t) {
  if (!e || !t) return null;
  const n = t[e];
  if (Q.isValidElement(n))
    return n;
  if (typeof n == "function") {
    const r = n;
    return /* @__PURE__ */ a.jsx(r, {});
  }
  return null;
}
const fn = ({ groups: e, groupNames: t, setActiveTabIndex: n, activeTabIndex: r }) => /* @__PURE__ */ a.jsx(
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
), ko = ({
  groups: e,
  groupNames: t,
  setActiveTabIndex: n,
  activeTabIndex: r,
  layoutConfig: s,
  showScrollHint: o,
  isCommonInfo: i,
  tabsNavRef: l
}) => {
  const [g, f] = ie(!1), u = Rt(null);
  return Ee(() => {
    const p = (h) => {
      u.current && !u.current.contains(h.target) && f(!1);
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
      /* @__PURE__ */ a.jsxs("div", { className: "relative", ref: u, children: [
        /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => f(!g),
            className: "ml-1 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200",
            children: "⋮"
          }
        ),
        g && /* @__PURE__ */ a.jsx("div", { className: "absolute right-0 mt-2 w-48 max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-30", children: t.map((p, h) => /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              n(h), f(!1);
            },
            className: `w-full text-left px-3 py-2 text-sm truncate hover:bg-gray-100 ${r === h ? "bg-gray-50 font-semibold text-action" : "text-gray-700"}`,
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
        children: t.length > 0 ? t.map((p, h) => /* @__PURE__ */ a.jsx(
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
            children: /* @__PURE__ */ a.jsx("span", { className: "relative z-10 flex items-center justify-center gap-1 sm:gap-2", children: /* @__PURE__ */ a.jsx("span", { className: "truncate", children: e[p]?.label || p }) })
          },
          p
        )) : /* @__PURE__ */ a.jsx("div", { className: "py-3 px-6 text-sm text-gray-500", children: "No group available" })
      }
    ) })
  ] });
}, mn = ({
  groupNames: e,
  activeTabIndex: t,
  layoutConfig: n,
  tabObj: r,
  infoData: s,
  setActiveTabIndex: o,
  renderView: i,
  methods: l = {},
  refid: g,
  sqlOpsUrls: f,
  module_refid: u,
  fieldOptions: p,
  setFieldOptions: h,
  buttons: C,
  handleAction: y,
  components: v
}) => {
  let T = C ? Object.entries(C).filter(([A, j]) => j.groups ? j.groups.includes(e[t]) : !0) : [];
  async function w(A, j) {
    const S = l?.[A];
    if (S) {
      try {
        await S();
      } catch (d) {
        console.error("Method execution failed:", d);
      }
      return;
    }
    y?.({ [A]: j }, s);
  }
  const b = wr(r?.component, v);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "bg-white rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex-1 flex flex-col min-h-0",
      children: [
        e.length > 0 ? r?.type === "fields" && r?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: n?.fieldGridClass || "grid grid-cols-12 gap-2", children: r.fields.map((A, j) => /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${ut[dt(A.width)] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ a.jsx(
              ft,
              {
                field: A,
                data: s ?? {},
                methods: l,
                refid: g,
                sqlOpsUrls: f,
                module_refid: u,
                setFieldOptions: h,
                ...p[A.name] ? { optionsOverride: p[A.name] } : {}
              }
            )
          },
          A?.name ?? `field-${j}`
        )) }) }) : r?.type === "component" && b ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: b }) : r ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: i(r, e[t] || "") }) : null : /* @__PURE__ */ a.jsx("div", { className: "flex-1 col-span-full text-center py-8 text-gray-500", children: "No data available" }),
        /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: T && T.map(([A, j]) => /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => w(A, j),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: j.label
          },
          A
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
              e.slice(0, 5).map((A, j) => /* @__PURE__ */ a.jsx(
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
          /* @__PURE__ */ a.jsx("div", { className: "flex gap-1", children: e.map((A, j) => /* @__PURE__ */ a.jsx(
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
function hn({
  groups: e,
  methods: t = {},
  infoData: n,
  viewRenderers: r = {},
  isCommonInfo: s,
  layoutConfig: o = {},
  viewMode: i,
  sqlOpsUrls: l,
  refid: g,
  Reports: f,
  toast: u = {},
  handleAction: p = () => {
  },
  infoViewJson: h,
  fieldOptions: C,
  setFieldOptions: y,
  components: v
}) {
  const [T, w] = ie(0), [b, A] = ie(!1), j = Rt(null), S = Object.keys(e);
  Ee(() => {
    const G = () => {
      if (j.current) {
        const V = j.current;
        A(V.scrollWidth > V.clientWidth);
      }
    };
    return G(), window.addEventListener("resize", G), () => window.removeEventListener("resize", G);
  }, [S.length]), Ee(() => {
    if (j.current && S.length > 0) {
      const G = j.current.children[T];
      G && G.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [T, S.length]);
  const d = i === "tableft", P = i === "tabright", Y = !d && !P, D = e[S[T] ?? ""] || null, M = {
    single: (G, V) => /* @__PURE__ */ a.jsx(xr, { fieldOptions: C, setFieldOptions: y, module_refid: h.module_refid, tabObj: G, methods: t, tabName: V, sqlOpsUrls: l, refid: g }),
    grid: (G, V) => /* @__PURE__ */ a.jsx(
      br,
      {
        ...f ? { Reports: f } : {},
        toast: u,
        handleAction: p,
        tabObj: G,
        methods: t,
        tabName: V,
        sqlOpsUrls: l,
        refid: g,
        infoViewJson: h
      }
    )
  }, I = D?.config?.uimode, W = r[I] || M[I] || (() => /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No UI mode for this type" }));
  return Y ? /* @__PURE__ */ a.jsxs("div", { className: "flex-1 flex flex-col min-h-0 ", children: [
    /* @__PURE__ */ a.jsx(
      ko,
      {
        groupNames: S,
        groups: e,
        setActiveTabIndex: w,
        activeTabIndex: T,
        tabsNavRef: j,
        isCommonInfo: s,
        showScrollHint: b,
        layoutConfig: o
      }
    ),
    /* @__PURE__ */ a.jsx(
      mn,
      {
        groupNames: S,
        activeTabIndex: T,
        layoutConfig: o,
        tabObj: D,
        infoData: n,
        setActiveTabIndex: w,
        renderView: W,
        groups: e,
        methods: t,
        refid: g,
        sqlOpsUrls: l,
        module_refid: h.module_refid,
        fieldOptions: C,
        setFieldOptions: y,
        buttons: h.buttons,
        handleAction: p,
        ...v ? { components: v } : {}
      }
    )
  ] }) : /* @__PURE__ */ a.jsxs("div", { className: "flex-1 flex min-h-0", children: [
    d && /* @__PURE__ */ a.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ a.jsx(
      fn,
      {
        groupNames: S,
        groups: e,
        setActiveTabIndex: w,
        activeTabIndex: T
      }
    ) }),
    /* @__PURE__ */ a.jsx("main", { className: "flex-1 flex flex-col min-h-0 overflow-auto", children: /* @__PURE__ */ a.jsx(
      mn,
      {
        groupNames: S,
        activeTabIndex: T,
        layoutConfig: o,
        tabObj: D,
        infoData: n,
        setActiveTabIndex: w,
        renderView: W,
        groups: e,
        methods: t,
        refid: g,
        module_refid: h.module_refid,
        sqlOpsUrls: l,
        fieldOptions: C,
        setFieldOptions: y,
        handleAction: p,
        ...v ? { components: v } : {}
      }
    ) }),
    P && /* @__PURE__ */ a.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ a.jsx(
      fn,
      {
        groupNames: S,
        groups: e,
        setActiveTabIndex: w,
        activeTabIndex: T
      }
    ) })
  ] });
}
function Fo({ title: e, children: t, isFirst: n }) {
  const [r, s] = ie(n);
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
function Mo({
  groups: e,
  methods: t = {},
  infoData: n,
  viewRenderers: r = {},
  sqlOpsUrls: s,
  refid: o,
  Reports: i,
  toast: l = {},
  handleAction: g = () => {
  },
  infoViewJson: f,
  fieldOptions: u,
  setFieldOptions: p,
  components: h
}) {
  const C = {
    single: (w, b) => /* @__PURE__ */ a.jsx(
      xr,
      {
        tabObj: w,
        methods: t,
        tabName: b,
        sqlOpsUrls: s,
        fieldOptions: u,
        setFieldOptions: p,
        refid: o,
        module_refid: f?.module_refid
      }
    ),
    grid: (w, b) => /* @__PURE__ */ a.jsx(
      br,
      {
        ...i ? { Reports: i } : {},
        toast: l,
        infoViewJson: f,
        handleAction: g,
        tabObj: w,
        methods: t,
        tabName: b,
        sqlOpsUrls: s,
        refid: o
      }
    )
  }, y = f?.buttons;
  let v = y ? Object.entries(y).filter(([w, b]) => !(b.groups && b.groups.length > 0)) : [];
  async function T(w, b) {
    const A = t?.[w];
    if (A) {
      try {
        await A();
      } catch (j) {
        console.error("Method execution failed:", j);
      }
      return;
    }
    g?.({ [w]: b }, n);
  }
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ a.jsx("div", { className: "mx-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "space-y-1 flex flex-col min-h-0", children: [
    e && Object.entries(e).map(([w, b], A) => {
      let j = y ? Object.entries(y).filter(([d, P]) => P.groups ? P.groups.includes(w) : !1) : [];
      const S = wr(b.component, h);
      return /* @__PURE__ */ a.jsxs(Fo, { title: b.label, isFirst: A === 0, children: [
        b?.type === "fields" && b?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: b.fields.map((d, P) => /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${ut[dt(d.width)] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ a.jsx(
              ft,
              {
                module_refid: f?.module_refid,
                methods: t,
                field: d,
                data: n ?? {},
                setFieldOptions: p,
                ...u[d.name] ? { optionsOverride: u[d.name] } : {},
                sqlOpsUrls: s,
                refid: o
              }
            )
          },
          d?.name ?? `field-${P}`
        )) }) }) : b?.type === "component" && S ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: S }) : b ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: r[b.config?.uimode]?.(b) || C[b.config?.uimode]?.(b, w) || /* @__PURE__ */ a.jsx("div", { children: "No renderer for this type" }) }) : null,
        /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: j && j.map(([d, P]) => /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => T(d, P),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: P.label
          },
          d
        )) })
      ] }, w);
    }),
    /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: v && v.map(([w, b]) => /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => T(w, b),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: b.label
      },
      w
    )) })
  ] }) }) });
}
function $o({ title: e, children: t }) {
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
function Bo({
  groups: e,
  methods: t = {},
  infoData: n,
  viewRenderers: r = {},
  sqlOpsUrls: s,
  refid: o,
  Reports: i,
  toast: l = {},
  handleAction: g = () => {
  },
  infoViewJson: f,
  fieldOptions: u,
  setFieldOptions: p,
  components: h
}) {
  const C = {
    single: (w, b) => /* @__PURE__ */ a.jsx(xr, { fieldOptions: u, setFieldOptions: p, module_refid: f?.module_refid, tabObj: w, methods: t, tabName: b, sqlOpsUrls: s, refid: o }),
    grid: (w, b) => /* @__PURE__ */ a.jsx(
      br,
      {
        ...i ? { Reports: i } : {},
        toast: l,
        handleAction: g,
        tabObj: w,
        methods: t,
        tabName: b,
        sqlOpsUrls: s,
        refid: o,
        infoViewJson: f
      }
    )
  }, y = f?.buttons;
  let v = y ? Object.entries(y).filter(([w, b]) => !(b.groups && b.groups.length > 0)) : [];
  async function T(w, b) {
    const A = t?.[w];
    if (A) {
      try {
        await A();
      } catch (j) {
        console.error("Method execution failed:", j);
      }
      return;
    }
    g?.({ [w]: b }, n);
  }
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ a.jsx("div", { className: "mx-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "space-y-2  flex flex-col min-h-0", children: [
    e && Object.entries(e).map(([w, b], A) => {
      let j = y ? Object.entries(y).filter(([d, P]) => P.groups ? P.groups.includes(w) : !1) : [];
      const S = wr(b.component, h);
      return /* @__PURE__ */ a.jsxs($o, { title: b.label, children: [
        b?.type === "fields" && b?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: b.fields.map((d, P) => /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${ut[dt(d.width)] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ a.jsx(
              ft,
              {
                module_refid: f?.module_refid,
                methods: t,
                field: d,
                data: n ?? {},
                setFieldOptions: p,
                ...u[d.name] ? { optionsOverride: u[d.name] } : {},
                sqlOpsUrls: s,
                refid: o
              }
            )
          },
          d?.name ?? `field-${P}`
        )) }) }) : b?.type === "component" && S ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: S }) : b ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: r[b.config?.uimode]?.(b) || C[b.config?.uimode]?.(b, w) || /* @__PURE__ */ a.jsx("div", { children: "No renderer for this type" }) }) : null,
        /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: j && j.map(([d, P]) => /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => T(d, P),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: P.label
          },
          d
        )) })
      ] }, w);
    }),
    /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: v && v.map(([w, b]) => /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => T(w, b),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: b.label
      },
      w
    )) })
  ] }) }) });
}
function li({
  infoViewJson: e,
  data: t = {},
  hiddenFields: n = [],
  groupFieldsFn: r = uo,
  layoutConfig: s = {},
  viewRenderers: o = {},
  methods: i = {},
  Reports: l,
  toast: g = {},
  handleAction: f = () => {
  },
  components: u
}) {
  const [p, h] = Q.useState({}), C = co(e.infoview ?? {}), y = e.endPoints, v = Q.useMemo(
    () => r(e.fields || {}),
    [e.fields, r]
  ), [T, w] = Q.useState({}), b = (P, Y) => {
    w((D) => ({ ...D, [P]: Y }));
  }, A = e?.source?.refid;
  let j = { ...v };
  e.infoview?.groups && (j = { ...j, ...e.infoview.groups }), Q.useEffect(() => {
    let P = !1;
    return (async () => {
      const D = e?.source;
      if (!D?.type) {
        P || h({});
        return;
      }
      if (D.type === "method") {
        const M = D.method, I = M ? i[M] : void 0;
        if (I)
          try {
            const W = await Promise.resolve(I());
            P || h(W || {});
          } catch (W) {
            console.error("Method execution failed:", W), P || h({});
          }
        else
          P || h({});
      }
      if (D.type === "api")
        try {
          const M = await B({
            method: D.method || "GET",
            url: D.url,
            data: D.body || {},
            params: D.params || {},
            headers: D.headers || {}
          });
          P || h(M.data || {});
        } catch (M) {
          console.error("API fetch failed:", M), P || h({});
        }
      if (D.type === "sql" && D.refid && D.refid != "0" || D.dbopsid) {
        if (!y) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let M = !1, I;
          D?.dbopsid && (M = !0, I = D?.dbopsid);
          const W = await B({
            method: "GET",
            url: y.baseURL + y.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${y?.accessToken}`
            }
          });
          if (!M) {
            let ce = {
              ...D
            };
            D.where && (ce = {
              ...D,
              where: pe(D.where, {
                refid: A
              })
            }), I = (await B({
              method: "POST",
              url: y.baseURL + y.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: ce,
                fields: Ot(e.fields, y.operation),
                forcefill: e.forcefill,
                datahash: W.data.refhash,
                srcid: e?.module_refid
              },
              headers: {
                Authorization: `Bearer ${y?.accessToken}`
              }
            }))?.data.refid;
          }
          const G = await B({
            method: "POST",
            url: y.baseURL + y.dbopsFetch,
            data: {
              refid: I,
              datahash: W.data.refhash,
              module_refid: e.module_refid
            },
            headers: {
              Authorization: `Bearer ${y?.accessToken}`
            }
          }), V = Gn(G) ?? {};
          P || h(V);
        } catch (M) {
          console.error("API fetch failed:", M);
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
  const S = j.common || null;
  S && delete j.common;
  const d = (P) => {
    switch (P) {
      case "accordion":
        return /* @__PURE__ */ a.jsx(
          Mo,
          {
            groups: j,
            methods: i,
            infoData: p,
            viewRenderers: o,
            sqlOpsUrls: y,
            refid: A,
            ...l ? { Reports: l } : {},
            toast: g,
            handleAction: f,
            infoViewJson: e,
            setFieldOptions: b,
            fieldOptions: T,
            ...u ? { components: u } : {}
          }
        );
      case "tab":
      case "tableft":
      case "tabright":
        return /* @__PURE__ */ a.jsx(
          hn,
          {
            groups: j,
            viewRenderers: o,
            layoutConfig: s,
            methods: i,
            infoData: p,
            isCommonInfo: !!S,
            viewMode: P,
            sqlOpsUrls: y,
            refid: A,
            ...l ? { Reports: l } : {},
            toast: g,
            handleAction: f,
            infoViewJson: e,
            setFieldOptions: b,
            fieldOptions: T,
            ...u ? { components: u } : {}
          }
        );
      case "cards":
        return /* @__PURE__ */ a.jsx(
          Bo,
          {
            groups: j,
            viewRenderers: o,
            methods: i,
            infoData: p,
            sqlOpsUrls: y,
            refid: A,
            ...l ? { Reports: l } : {},
            toast: g,
            handleAction: f,
            infoViewJson: e,
            setFieldOptions: b,
            fieldOptions: T,
            ...u ? { components: u } : {}
          }
        );
      default:
        return /* @__PURE__ */ a.jsx(
          hn,
          {
            groups: j,
            viewRenderers: o,
            layoutConfig: s,
            methods: i,
            infoData: p,
            isCommonInfo: !!S,
            viewMode: P,
            sqlOpsUrls: y,
            refid: A,
            ...l ? { Reports: l } : {},
            toast: g,
            handleAction: f,
            infoViewJson: e,
            setFieldOptions: b,
            fieldOptions: T,
            ...u ? { components: u } : {}
          }
        );
    }
  };
  return /* @__PURE__ */ a.jsxs("div", { className: s.containerClass || "h-screen flex flex-col ", children: [
    S && y && /* @__PURE__ */ a.jsx(
      Oo,
      {
        commonInfo: S,
        infoData: p,
        hiddenFields: n,
        sqlOpsUrls: y,
        setFieldOptions: b,
        fieldOptions: T,
        module_refid: e.module_refid,
        refid: A,
        methods: i
      }
    ),
    d(C)
  ] });
}
export {
  li as InfoView
};
