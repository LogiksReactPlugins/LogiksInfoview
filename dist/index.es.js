import J, { useState as ie, useEffect as Se, useMemo as At, useLayoutEffect as es, useRef as Rt } from "react";
import * as xe from "yup";
import { useFormik as ts } from "formik";
import { createPortal as rs } from "react-dom";
var bt = { exports: {} }, Ve = {};
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
  if (Mr) return Ve;
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
  return Ve.Fragment = t, Ve.jsx = n, Ve.jsxs = n, Ve;
}
var Xe = {};
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
    function e(b) {
      if (b == null) return null;
      if (typeof b == "function")
        return b.$$typeof === M ? null : b.displayName || b.name || null;
      if (typeof b == "string") return b;
      switch (b) {
        case A:
          return "Fragment";
        case w:
          return "Profiler";
        case T:
          return "StrictMode";
        case c:
          return "Suspense";
        case k:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof b == "object")
        switch (typeof b.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), b.$$typeof) {
          case p:
            return "Portal";
          case N:
            return (b.displayName || "Context") + ".Provider";
          case x:
            return (b._context.displayName || "Context") + ".Consumer";
          case j:
            var v = b.render;
            return b = b.displayName, b || (b = v.displayName || v.name || "", b = b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef"), b;
          case I:
            return v = b.displayName || null, v !== null ? v : e(b.type) || "Memo";
          case G:
            v = b._payload, b = b._init;
            try {
              return e(b(v));
            } catch {
            }
        }
      return null;
    }
    function t(b) {
      return "" + b;
    }
    function n(b) {
      try {
        t(b);
        var v = !1;
      } catch {
        v = !0;
      }
      if (v) {
        v = console;
        var C = v.error, _ = typeof Symbol == "function" && Symbol.toStringTag && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return C.call(
          v,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          _
        ), t(b);
      }
    }
    function r(b) {
      if (b === A) return "<>";
      if (typeof b == "object" && b !== null && b.$$typeof === G)
        return "<...>";
      try {
        var v = e(b);
        return v ? "<" + v + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var b = P.A;
      return b === null ? null : b.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(b) {
      if ($.call(b, "key")) {
        var v = Object.getOwnPropertyDescriptor(b, "key").get;
        if (v && v.isReactWarning) return !1;
      }
      return b.key !== void 0;
    }
    function l(b, v) {
      function C() {
        Q || (Q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          v
        ));
      }
      C.isReactWarning = !0, Object.defineProperty(b, "key", {
        get: C,
        configurable: !0
      });
    }
    function y() {
      var b = e(this.type);
      return U[b] || (U[b] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), b = this.props.ref, b !== void 0 ? b : null;
    }
    function f(b, v, C, _, O, D, ee, Y) {
      return C = D.ref, b = {
        $$typeof: S,
        type: b,
        key: v,
        props: D,
        _owner: O
      }, (C !== void 0 ? C : null) !== null ? Object.defineProperty(b, "ref", {
        enumerable: !1,
        get: y
      }) : Object.defineProperty(b, "ref", { enumerable: !1, value: null }), b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(b, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(b, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ee
      }), Object.defineProperty(b, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Y
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    }
    function d(b, v, C, _, O, D, ee, Y) {
      var V = v.children;
      if (V !== void 0)
        if (_)
          if (K(V)) {
            for (_ = 0; _ < V.length; _++)
              h(V[_]);
            Object.freeze && Object.freeze(V);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(V);
      if ($.call(v, "key")) {
        V = e(b);
        var se = Object.keys(v).filter(function(Le) {
          return Le !== "key";
        });
        _ = 0 < se.length ? "{key: someKey, " + se.join(": ..., ") + ": ...}" : "{key: someKey}", L[V + _] || (se = 0 < se.length ? "{" + se.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          _,
          V,
          se,
          V
        ), L[V + _] = !0);
      }
      if (V = null, C !== void 0 && (n(C), V = "" + C), i(v) && (n(v.key), V = "" + v.key), "key" in v) {
        C = {};
        for (var ge in v)
          ge !== "key" && (C[ge] = v[ge]);
      } else C = v;
      return V && l(
        C,
        typeof b == "function" ? b.displayName || b.name || "Unknown" : b
      ), f(
        b,
        V,
        D,
        O,
        s(),
        C,
        ee,
        Y
      );
    }
    function h(b) {
      typeof b == "object" && b !== null && b.$$typeof === S && b._store && (b._store.validated = 1);
    }
    var m = J, S = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), N = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), G = Symbol.for("react.lazy"), B = Symbol.for("react.activity"), M = Symbol.for("react.client.reference"), P = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, K = Array.isArray, X = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(b) {
        return b();
      }
    };
    var Q, U = {}, Z = m.react_stack_bottom_frame.bind(
      m,
      o
    )(), E = X(r(o)), L = {};
    Xe.Fragment = A, Xe.jsx = function(b, v, C, _, O) {
      var D = 1e4 > P.recentlyCreatedOwnerStacks++;
      return d(
        b,
        v,
        C,
        !1,
        _,
        O,
        D ? Error("react-stack-top-frame") : Z,
        D ? X(r(b)) : E
      );
    }, Xe.jsxs = function(b, v, C, _, O) {
      var D = 1e4 > P.recentlyCreatedOwnerStacks++;
      return d(
        b,
        v,
        C,
        !0,
        _,
        O,
        D ? Error("react-stack-top-frame") : Z,
        D ? X(r(b)) : E
      );
    };
  }()), Xe;
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
})(/* @__PURE__ */ Object.create(null)), ve = (e) => (e = e.toLowerCase(), (t) => It(t) === e), Pt = (e) => (t) => typeof t === e, { isArray: We } = Array, st = Pt("undefined");
function at(e) {
  return e !== null && !st(e) && e.constructor !== null && !st(e.constructor) && pe(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const gn = ve("ArrayBuffer");
function is(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && gn(e.buffer), t;
}
const ls = Pt("string"), pe = Pt("function"), xn = Pt("number"), ot = (e) => e !== null && typeof e == "object", cs = (e) => e === !0 || e === !1, Nt = (e) => {
  if (It(e) !== "object")
    return !1;
  const t = pr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(yn in e) && !(Lt in e);
}, us = (e) => {
  if (!ot(e) || at(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, ds = ve("Date"), fs = ve("File"), ms = ve("Blob"), hs = ve("FileList"), ps = (e) => ot(e) && pe(e.pipe), ys = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || pe(e.append) && ((t = It(e)) === "formdata" || // detect form-data instance
  t === "object" && pe(e.toString) && e.toString() === "[object FormData]"));
}, gs = ve("URLSearchParams"), [xs, bs, ws, Es] = ["ReadableStream", "Request", "Response", "Headers"].map(ve), vs = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function it(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), We(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (at(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let l;
    for (r = 0; r < i; r++)
      l = o[r], t.call(null, e[l], l, e);
  }
}
function bn(e, t) {
  if (at(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const De = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, wn = (e) => !st(e) && e !== De;
function ar() {
  const { caseless: e } = wn(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && bn(t, s) || s;
    Nt(t[o]) && Nt(r) ? t[o] = ar(t[o], r) : Nt(r) ? t[o] = ar({}, r) : We(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && it(arguments[r], n);
  return t;
}
const As = (e, t, n, { allOwnKeys: r } = {}) => (it(t, (s, o) => {
  n && pe(s) ? e[o] = pn(s, n) : e[o] = s;
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
  if (We(e)) return e;
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
}, Ls = ve("HTMLFormElement"), Is = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), zr = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Ps = ve("RegExp"), En = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  it(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, Ds = (e) => {
  En(e, (t, n) => {
    if (pe(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (pe(r)) {
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
  return We(e) ? r(e) : r(String(e).split(t)), n;
}, Fs = () => {
}, Ms = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function $s(e) {
  return !!(e && pe(e.append) && e[yn] === "FormData" && e[Lt]);
}
const Bs = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (ot(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (at(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = We(r) ? [] : {};
        return it(r, (i, l) => {
          const y = n(i, s + 1);
          !st(y) && (o[l] = y);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, zs = ve("AsyncFunction"), Us = (e) => e && (ot(e) || pe(e)) && pe(e.then) && pe(e.catch), vn = ((e, t) => e ? setImmediate : t ? ((n, r) => (De.addEventListener("message", ({ source: s, data: o }) => {
  s === De && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), De.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  pe(De.postMessage)
), Hs = typeof queueMicrotask < "u" ? queueMicrotask.bind(De) : typeof process < "u" && process.nextTick || vn, Gs = (e) => e != null && pe(e[Lt]), g = {
  isArray: We,
  isArrayBuffer: gn,
  isBuffer: at,
  isFormData: ys,
  isArrayBufferView: is,
  isString: ls,
  isNumber: xn,
  isBoolean: cs,
  isObject: ot,
  isPlainObject: Nt,
  isEmptyObject: us,
  isReadableStream: xs,
  isRequest: bs,
  isResponse: ws,
  isHeaders: Es,
  isUndefined: st,
  isDate: ds,
  isFile: fs,
  isBlob: ms,
  isRegExp: Ps,
  isFunction: pe,
  isStream: ps,
  isURLSearchParams: gs,
  isTypedArray: _s,
  isFileList: hs,
  forEach: it,
  merge: ar,
  extend: As,
  trim: vs,
  stripBOM: Ns,
  inherits: Ts,
  toFlatObject: js,
  kindOf: It,
  kindOfTest: ve,
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
  global: De,
  isContextDefined: wn,
  isSpecCompliantForm: $s,
  toJSONObject: Bs,
  isAsyncFn: zs,
  isThenable: Us,
  setImmediate: vn,
  asap: Hs,
  isIterable: Gs
};
function W(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
g.inherits(W, Error, {
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
      config: g.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const An = W.prototype, Nn = {};
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
Object.defineProperties(W, Nn);
Object.defineProperty(An, "isAxiosError", { value: !0 });
W.from = (e, t, n, r, s, o) => {
  const i = Object.create(An);
  return g.toFlatObject(e, i, function(y) {
    return y !== Error.prototype;
  }, (l) => l !== "isAxiosError"), W.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Ws = null;
function or(e) {
  return g.isPlainObject(e) || g.isArray(e);
}
function Tn(e) {
  return g.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ur(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = Tn(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function qs(e) {
  return g.isArray(e) && !e.some(or);
}
const Ks = g.toFlatObject(g, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Dt(e, t, n) {
  if (!g.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = g.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(A, T) {
    return !g.isUndefined(T[A]);
  });
  const r = n.metaTokens, s = n.visitor || d, o = n.dots, i = n.indexes, y = (n.Blob || typeof Blob < "u" && Blob) && g.isSpecCompliantForm(t);
  if (!g.isFunction(s))
    throw new TypeError("visitor must be a function");
  function f(p) {
    if (p === null) return "";
    if (g.isDate(p))
      return p.toISOString();
    if (g.isBoolean(p))
      return p.toString();
    if (!y && g.isBlob(p))
      throw new W("Blob is not supported. Use a Buffer instead.");
    return g.isArrayBuffer(p) || g.isTypedArray(p) ? y && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function d(p, A, T) {
    let w = p;
    if (p && !T && typeof p == "object") {
      if (g.endsWith(A, "{}"))
        A = r ? A : A.slice(0, -2), p = JSON.stringify(p);
      else if (g.isArray(p) && qs(p) || (g.isFileList(p) || g.endsWith(A, "[]")) && (w = g.toArray(p)))
        return A = Tn(A), w.forEach(function(N, j) {
          !(g.isUndefined(N) || N === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Ur([A], j, o) : i === null ? A : A + "[]",
            f(N)
          );
        }), !1;
    }
    return or(p) ? !0 : (t.append(Ur(T, A, o), f(p)), !1);
  }
  const h = [], m = Object.assign(Ks, {
    defaultVisitor: d,
    convertValue: f,
    isVisitable: or
  });
  function S(p, A) {
    if (!g.isUndefined(p)) {
      if (h.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + A.join("."));
      h.push(p), g.forEach(p, function(w, x) {
        (!(g.isUndefined(w) || w === null) && s.call(
          t,
          w,
          g.isString(x) ? x.trim() : x,
          A,
          m
        )) === !0 && S(w, A ? A.concat(x) : [x]);
      }), h.pop();
    }
  }
  if (!g.isObject(e))
    throw new TypeError("data must be an object");
  return S(e), t;
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
  g.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = g.isURLSearchParams(t) ? t.toString() : new yr(t, n).toString(r), o) {
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
    g.forEach(this.handlers, function(r) {
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
      return le.isNode && g.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function sa(e) {
  return g.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
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
    const l = Number.isFinite(+i), y = o >= n.length;
    return i = !i && g.isArray(s) ? s.length : i, y ? (g.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !l) : ((!s[i] || !g.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && g.isArray(s[i]) && (s[i] = aa(s[i])), !l);
  }
  if (g.isFormData(e) && g.isFunction(e.entries)) {
    const n = {};
    return g.forEachEntry(e, (r, s) => {
      t(sa(r), s, n, 0);
    }), n;
  }
  return null;
}
function oa(e, t, n) {
  if (g.isString(e))
    try {
      return (t || JSON.parse)(e), g.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const lt = {
  transitional: Rn,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = g.isObject(t);
    if (o && g.isHTMLForm(t) && (t = new FormData(t)), g.isFormData(t))
      return s ? JSON.stringify(_n(t)) : t;
    if (g.isArrayBuffer(t) || g.isBuffer(t) || g.isStream(t) || g.isFile(t) || g.isBlob(t) || g.isReadableStream(t))
      return t;
    if (g.isArrayBufferView(t))
      return t.buffer;
    if (g.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return na(t, this.formSerializer).toString();
      if ((l = g.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const y = this.env && this.env.FormData;
        return Dt(
          l ? { "files[]": t } : t,
          y && new y(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), oa(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || lt.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (g.isResponse(t) || g.isReadableStream(t))
      return t;
    if (t && g.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (i)
          throw l.name === "SyntaxError" ? W.from(l, W.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
g.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  lt.headers[e] = {};
});
const ia = g.toObjectSet([
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
function Qe(e) {
  return e && String(e).trim().toLowerCase();
}
function Tt(e) {
  return e === !1 || e == null ? e : g.isArray(e) ? e.map(Tt) : String(e);
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
  if (g.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!g.isString(t)) {
    if (g.isString(r))
      return t.indexOf(r) !== -1;
    if (g.isRegExp(r))
      return r.test(t);
  }
}
function da(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function fa(e, t) {
  const n = g.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
let ye = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(l, y, f) {
      const d = Qe(y);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const h = g.findKey(s, d);
      (!h || s[h] === void 0 || f === !0 || f === void 0 && s[h] !== !1) && (s[h || y] = Tt(l));
    }
    const i = (l, y) => g.forEach(l, (f, d) => o(f, d, y));
    if (g.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (g.isString(t) && (t = t.trim()) && !ua(t))
      i(la(t), n);
    else if (g.isObject(t) && g.isIterable(t)) {
      let l = {}, y, f;
      for (const d of t) {
        if (!g.isArray(d))
          throw TypeError("Object iterator must return a key-value pair");
        l[f = d[0]] = (y = l[f]) ? g.isArray(y) ? [...y, d[1]] : [y, d[1]] : d[1];
      }
      i(l, n);
    } else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Qe(t), t) {
      const r = g.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return ca(s);
        if (g.isFunction(n))
          return n.call(this, s, r);
        if (g.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Qe(t), t) {
      const r = g.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Yt(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = Qe(i), i) {
        const l = g.findKey(r, i);
        l && (!n || Yt(r, r[l], l, n)) && (delete r[l], s = !0);
      }
    }
    return g.isArray(t) ? t.forEach(o) : o(t), s;
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
    return g.forEach(this, (s, o) => {
      const i = g.findKey(r, o);
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
    return g.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && g.isArray(r) ? r.join(", ") : r);
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
      const l = Qe(i);
      r[l] || (fa(s, i), r[l] = !0);
    }
    return g.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
ye.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
g.reduceDescriptors(ye.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
g.freezeMethods(ye);
function Vt(e, t) {
  const n = this || lt, r = t || n, s = ye.from(r.headers);
  let o = r.data;
  return g.forEach(e, function(l) {
    o = l.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Cn(e) {
  return !!(e && e.__CANCEL__);
}
function qe(e, t, n) {
  W.call(this, e ?? "canceled", W.ERR_CANCELED, t, n), this.name = "CanceledError";
}
g.inherits(qe, W, {
  __CANCEL__: !0
});
function On(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new W(
    "Request failed with status code " + n.status,
    [W.ERR_BAD_REQUEST, W.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
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
  return t = t !== void 0 ? t : 1e3, function(y) {
    const f = Date.now(), d = r[o];
    i || (i = f), n[s] = y, r[s] = f;
    let h = o, m = 0;
    for (; h !== s; )
      m += n[h++], h = h % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), f - i < t)
      return;
    const S = d && f - d;
    return S ? Math.round(m * 1e3 / S) : void 0;
  };
}
function pa(e, t) {
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
const _t = (e, t, n = 3) => {
  let r = 0;
  const s = ha(50, 250);
  return pa((o) => {
    const i = o.loaded, l = o.lengthComputable ? o.total : void 0, y = i - r, f = s(y), d = i <= l;
    r = i;
    const h = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: y,
      rate: f || void 0,
      estimated: f && l && d ? (l - i) / f : void 0,
      event: o,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(h);
  }, n);
}, qr = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Kr = (e) => (...t) => g.asap(() => e(...t)), ya = le.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, le.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(le.origin),
  le.navigator && /(msie|trident)/i.test(le.navigator.userAgent)
) : () => !0, ga = le.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      g.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), g.isString(r) && i.push("path=" + r), g.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
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
const Yr = (e) => e instanceof ye ? { ...e } : e;
function Fe(e, t) {
  t = t || {};
  const n = {};
  function r(f, d, h, m) {
    return g.isPlainObject(f) && g.isPlainObject(d) ? g.merge.call({ caseless: m }, f, d) : g.isPlainObject(d) ? g.merge({}, d) : g.isArray(d) ? d.slice() : d;
  }
  function s(f, d, h, m) {
    if (g.isUndefined(d)) {
      if (!g.isUndefined(f))
        return r(void 0, f, h, m);
    } else return r(f, d, h, m);
  }
  function o(f, d) {
    if (!g.isUndefined(d))
      return r(void 0, d);
  }
  function i(f, d) {
    if (g.isUndefined(d)) {
      if (!g.isUndefined(f))
        return r(void 0, f);
    } else return r(void 0, d);
  }
  function l(f, d, h) {
    if (h in t)
      return r(f, d);
    if (h in e)
      return r(void 0, f);
  }
  const y = {
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
    headers: (f, d, h) => s(Yr(f), Yr(d), h, !0)
  };
  return g.forEach(Object.keys({ ...e, ...t }), function(d) {
    const h = y[d] || s, m = h(e[d], t[d], d);
    g.isUndefined(m) && h !== l || (n[d] = m);
  }), n;
}
const In = (e) => {
  const t = Fe({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: l } = t;
  t.headers = i = ye.from(i), t.url = Sn(Ln(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), l && i.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let y;
  if (g.isFormData(n)) {
    if (le.hasStandardBrowserEnv || le.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((y = i.getContentType()) !== !1) {
      const [f, ...d] = y ? y.split(";").map((h) => h.trim()).filter(Boolean) : [];
      i.setContentType([f || "multipart/form-data", ...d].join("; "));
    }
  }
  if (le.hasStandardBrowserEnv && (r && g.isFunction(r) && (r = r(t)), r || r !== !1 && ya(t.url))) {
    const f = s && o && ga.read(o);
    f && i.set(s, f);
  }
  return t;
}, wa = typeof XMLHttpRequest < "u", Ea = wa && function(e) {
  return new Promise(function(n, r) {
    const s = In(e);
    let o = s.data;
    const i = ye.from(s.headers).normalize();
    let { responseType: l, onUploadProgress: y, onDownloadProgress: f } = s, d, h, m, S, p;
    function A() {
      S && S(), p && p(), s.cancelToken && s.cancelToken.unsubscribe(d), s.signal && s.signal.removeEventListener("abort", d);
    }
    let T = new XMLHttpRequest();
    T.open(s.method.toUpperCase(), s.url, !0), T.timeout = s.timeout;
    function w() {
      if (!T)
        return;
      const N = ye.from(
        "getAllResponseHeaders" in T && T.getAllResponseHeaders()
      ), c = {
        data: !l || l === "text" || l === "json" ? T.responseText : T.response,
        status: T.status,
        statusText: T.statusText,
        headers: N,
        config: e,
        request: T
      };
      On(function(I) {
        n(I), A();
      }, function(I) {
        r(I), A();
      }, c), T = null;
    }
    "onloadend" in T ? T.onloadend = w : T.onreadystatechange = function() {
      !T || T.readyState !== 4 || T.status === 0 && !(T.responseURL && T.responseURL.indexOf("file:") === 0) || setTimeout(w);
    }, T.onabort = function() {
      T && (r(new W("Request aborted", W.ECONNABORTED, e, T)), T = null);
    }, T.onerror = function() {
      r(new W("Network Error", W.ERR_NETWORK, e, T)), T = null;
    }, T.ontimeout = function() {
      let j = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const c = s.transitional || Rn;
      s.timeoutErrorMessage && (j = s.timeoutErrorMessage), r(new W(
        j,
        c.clarifyTimeoutError ? W.ETIMEDOUT : W.ECONNABORTED,
        e,
        T
      )), T = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in T && g.forEach(i.toJSON(), function(j, c) {
      T.setRequestHeader(c, j);
    }), g.isUndefined(s.withCredentials) || (T.withCredentials = !!s.withCredentials), l && l !== "json" && (T.responseType = s.responseType), f && ([m, p] = _t(f, !0), T.addEventListener("progress", m)), y && T.upload && ([h, S] = _t(y), T.upload.addEventListener("progress", h), T.upload.addEventListener("loadend", S)), (s.cancelToken || s.signal) && (d = (N) => {
      T && (r(!N || N.type ? new qe(null, e, T) : N), T.abort(), T = null);
    }, s.cancelToken && s.cancelToken.subscribe(d), s.signal && (s.signal.aborted ? d() : s.signal.addEventListener("abort", d)));
    const x = ma(s.url);
    if (x && le.protocols.indexOf(x) === -1) {
      r(new W("Unsupported protocol " + x + ":", W.ERR_BAD_REQUEST, e));
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
        const d = f instanceof Error ? f : this.reason;
        r.abort(d instanceof W ? d : new qe(d instanceof Error ? d.message : d));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new W(`timeout ${t} of ms exceeded`, W.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((f) => {
        f.unsubscribe ? f.unsubscribe(o) : f.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((f) => f.addEventListener("abort", o));
    const { signal: y } = r;
    return y.unsubscribe = () => g.asap(l), y;
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
  let o = 0, i, l = (y) => {
    i || (i = !0, r && r(y));
  };
  return new ReadableStream({
    async pull(y) {
      try {
        const { done: f, value: d } = await s.next();
        if (f) {
          l(), y.close();
          return;
        }
        let h = d.byteLength;
        if (n) {
          let m = o += h;
          n(m);
        }
        y.enqueue(new Uint8Array(d));
      } catch (f) {
        throw l(f), f;
      }
    },
    cancel(y) {
      return l(y), s.return();
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
}), Xr = 64 * 1024, lr = Pn && Dn(() => g.isReadableStream(new Response("").body)), Ct = {
  stream: lr && ((e) => e.body)
};
kt && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Ct[t] && (Ct[t] = g.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new W(`Response type '${t}' is not supported`, W.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Ra = async (e) => {
  if (e == null)
    return 0;
  if (g.isBlob(e))
    return e.size;
  if (g.isSpecCompliantForm(e))
    return (await new Request(le.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (g.isArrayBufferView(e) || g.isArrayBuffer(e))
    return e.byteLength;
  if (g.isURLSearchParams(e) && (e = e + ""), g.isString(e))
    return (await ja(e)).byteLength;
}, _a = async (e, t) => {
  const n = g.toFiniteNumber(e.getContentLength());
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
    onUploadProgress: y,
    responseType: f,
    headers: d,
    withCredentials: h = "same-origin",
    fetchOptions: m
  } = In(e);
  f = f ? (f + "").toLowerCase() : "text";
  let S = va([s, o && o.toAbortSignal()], i), p;
  const A = S && S.unsubscribe && (() => {
    S.unsubscribe();
  });
  let T;
  try {
    if (y && Sa && n !== "get" && n !== "head" && (T = await _a(d, r)) !== 0) {
      let c = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), k;
      if (g.isFormData(r) && (k = c.headers.get("content-type")) && d.setContentType(k), c.body) {
        const [I, G] = qr(
          T,
          _t(Kr(y))
        );
        r = Vr(c.body, Xr, I, G);
      }
    }
    g.isString(h) || (h = h ? "include" : "omit");
    const w = "credentials" in Request.prototype;
    p = new Request(t, {
      ...m,
      signal: S,
      method: n.toUpperCase(),
      headers: d.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: w ? h : void 0
    });
    let x = await fetch(p, m);
    const N = lr && (f === "stream" || f === "response");
    if (lr && (l || N && A)) {
      const c = {};
      ["status", "statusText", "headers"].forEach((B) => {
        c[B] = x[B];
      });
      const k = g.toFiniteNumber(x.headers.get("content-length")), [I, G] = l && qr(
        k,
        _t(Kr(l), !0)
      ) || [];
      x = new Response(
        Vr(x.body, Xr, I, () => {
          G && G(), A && A();
        }),
        c
      );
    }
    f = f || "text";
    let j = await Ct[g.findKey(Ct, f) || "text"](x, e);
    return !N && A && A(), await new Promise((c, k) => {
      On(c, k, {
        data: j,
        headers: ye.from(x.headers),
        status: x.status,
        statusText: x.statusText,
        config: e,
        request: p
      });
    });
  } catch (w) {
    throw A && A(), w && w.name === "TypeError" && /Load failed|fetch/i.test(w.message) ? Object.assign(
      new W("Network Error", W.ERR_NETWORK, e, p),
      {
        cause: w.cause || w
      }
    ) : W.from(w, w && w.code, e, p);
  }
}), cr = {
  http: Ws,
  xhr: Ea,
  fetch: Ca
};
g.forEach(cr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Qr = (e) => `- ${e}`, Oa = (e) => g.isFunction(e) || e === null || e === !1, kn = {
  getAdapter: (e) => {
    e = g.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !Oa(n) && (r = cr[(i = String(n)).toLowerCase()], r === void 0))
        throw new W(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([l, y]) => `adapter ${l} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(Qr).join(`
`) : " " + Qr(o[0]) : "as no adapter specified";
      throw new W(
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
    throw new qe(null, e);
}
function Zr(e) {
  return Xt(e), e.headers = ye.from(e.headers), e.data = Vt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), kn.getAdapter(e.adapter || lt.adapter)(e).then(function(r) {
    return Xt(e), r.data = Vt.call(
      e,
      e.transformResponse,
      r
    ), r.headers = ye.from(r.headers), r;
  }, function(r) {
    return Cn(r) || (Xt(e), r && r.response && (r.response.data = Vt.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = ye.from(r.response.headers))), Promise.reject(r);
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
      throw new W(
        s(i, " has been removed" + (n ? " in " + n : "")),
        W.ERR_DEPRECATED
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
    throw new W("options must be an object", W.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const l = e[o], y = l === void 0 || i(l, o, e);
      if (y !== !0)
        throw new W("option " + o + " must be " + y, W.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new W("Unknown option " + o, W.ERR_BAD_OPTION);
  }
}
const jt = {
  assertOptions: La,
  validators: Ft
}, Te = jt.validators;
let ke = class {
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Fe(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && jt.assertOptions(r, {
      silentJSONParsing: Te.transitional(Te.boolean),
      forcedJSONParsing: Te.transitional(Te.boolean),
      clarifyTimeoutError: Te.transitional(Te.boolean)
    }, !1), s != null && (g.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : jt.assertOptions(s, {
      encode: Te.function,
      serialize: Te.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), jt.assertOptions(n, {
      baseUrl: Te.spelling("baseURL"),
      withXsrfToken: Te.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && g.merge(
      o.common,
      o[n.method]
    );
    o && g.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete o[p];
      }
    ), n.headers = ye.concat(i, o);
    const l = [];
    let y = !0;
    this.interceptors.request.forEach(function(A) {
      typeof A.runWhen == "function" && A.runWhen(n) === !1 || (y = y && A.synchronous, l.unshift(A.fulfilled, A.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(A) {
      f.push(A.fulfilled, A.rejected);
    });
    let d, h = 0, m;
    if (!y) {
      const p = [Zr.bind(this), void 0];
      for (p.unshift(...l), p.push(...f), m = p.length, d = Promise.resolve(n); h < m; )
        d = d.then(p[h++], p[h++]);
      return d;
    }
    m = l.length;
    let S = n;
    for (h = 0; h < m; ) {
      const p = l[h++], A = l[h++];
      try {
        S = p(S);
      } catch (T) {
        A.call(this, T);
        break;
      }
    }
    try {
      d = Zr.call(this, S);
    } catch (p) {
      return Promise.reject(p);
    }
    for (h = 0, m = f.length; h < m; )
      d = d.then(f[h++], f[h++]);
    return d;
  }
  getUri(t) {
    t = Fe(this.defaults, t);
    const n = Ln(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Sn(n, t.params, t.paramsSerializer);
  }
};
g.forEach(["delete", "get", "head", "options"], function(t) {
  ke.prototype[t] = function(n, r) {
    return this.request(Fe(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
g.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, l) {
      return this.request(Fe(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  ke.prototype[t] = n(), ke.prototype[t + "Form"] = n(!0);
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
      r.reason || (r.reason = new qe(o, i, l), n(r.reason));
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
  return g.isObject(e) && e.isAxiosError === !0;
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
  const t = new ke(e), n = pn(ke.prototype.request, t);
  return g.extend(n, ke.prototype, t, { allOwnKeys: !0 }), g.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return $n(Fe(e, s));
  }, n;
}
const H = $n(lt);
H.Axios = ke;
H.CanceledError = qe;
H.CancelToken = Ia;
H.isCancel = Cn;
H.VERSION = Fn;
H.toFormData = Dt;
H.AxiosError = W;
H.Cancel = H.CanceledError;
H.all = function(t) {
  return Promise.all(t);
};
H.spread = Pa;
H.isAxiosError = Da;
H.mergeConfig = Fe;
H.AxiosHeaders = ye;
H.formToJSON = (e) => _n(g.isHTMLForm(e) ? new FormData(e) : e);
H.getAdapter = kn.getAdapter;
H.HttpStatusCode = ur;
H.default = H;
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
} = H;
/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */
const {
  entries: Bn,
  setPrototypeOf: en,
  isFrozen: ka,
  getPrototypeOf: Fa,
  getOwnPropertyDescriptor: Ma
} = Object;
let {
  freeze: ue,
  seal: be,
  create: dr
} = Object, {
  apply: fr,
  construct: mr
} = typeof Reflect < "u" && Reflect;
ue || (ue = function(t) {
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
const wt = de(Array.prototype.forEach), $a = de(Array.prototype.lastIndexOf), tn = de(Array.prototype.pop), Ze = de(Array.prototype.push), Ba = de(Array.prototype.splice), St = de(String.prototype.toLowerCase), Qt = de(String.prototype.toString), Zt = de(String.prototype.match), Je = de(String.prototype.replace), za = de(String.prototype.indexOf), Ua = de(String.prototype.trim), we = de(Object.prototype.hasOwnProperty), ce = de(RegExp.prototype.test), et = Ha(TypeError);
function de(e) {
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
function q(e, t) {
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
function je(e) {
  const t = dr(null);
  for (const [n, r] of Bn(e))
    we(e, n) && (Array.isArray(r) ? t[n] = Ga(r) : r && typeof r == "object" && r.constructor === Object ? t[n] = je(r) : t[n] = r);
  return t;
}
function tt(e, t) {
  for (; e !== null; ) {
    const r = Ma(e, t);
    if (r) {
      if (r.get)
        return de(r.get);
      if (typeof r.value == "function")
        return de(r.value);
    }
    e = Fa(e);
  }
  function n() {
    return null;
  }
  return n;
}
const rn = ue(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Jt = ue(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), er = ue(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Wa = ue(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), tr = ue(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), qa = ue(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), nn = ue(["#text"]), sn = ue(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), rr = ue(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), an = ue(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Et = ue(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Ka = be(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Ya = be(/<%[\w\W]*|[\w\W]*%>/gm), Va = be(/\$\{[\w\W]*/gm), Xa = be(/^data-[\-\w.\u00B7-\uFFFF]+$/), Qa = be(/^aria-[\-\w]+$/), zn = be(
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
const rt = {
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
  const t = (z) => Hn(z);
  if (t.version = "3.3.1", t.removed = [], !e || !e.document || e.document.nodeType !== rt.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: n
  } = e;
  const r = n, s = r.currentScript, {
    DocumentFragment: o,
    HTMLTemplateElement: i,
    Node: l,
    Element: y,
    NodeFilter: f,
    NamedNodeMap: d = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: h,
    DOMParser: m,
    trustedTypes: S
  } = e, p = y.prototype, A = tt(p, "cloneNode"), T = tt(p, "remove"), w = tt(p, "nextSibling"), x = tt(p, "childNodes"), N = tt(p, "parentNode");
  if (typeof i == "function") {
    const z = n.createElement("template");
    z.content && z.content.ownerDocument && (n = z.content.ownerDocument);
  }
  let j, c = "";
  const {
    implementation: k,
    createNodeIterator: I,
    createDocumentFragment: G,
    getElementsByTagName: B
  } = n, {
    importNode: M
  } = r;
  let P = ln();
  t.isSupported = typeof Bn == "function" && typeof N == "function" && k && k.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: $,
    ERB_EXPR: K,
    TMPLIT_EXPR: X,
    DATA_ATTR: Q,
    ARIA_ATTR: U,
    IS_SCRIPT_OR_DATA: Z,
    ATTR_WHITESPACE: E,
    CUSTOM_ELEMENT: L
  } = on;
  let {
    IS_ALLOWED_URI: b
  } = on, v = null;
  const C = q({}, [...rn, ...Jt, ...er, ...tr, ...nn]);
  let _ = null;
  const O = q({}, [...sn, ...rr, ...an, ...Et]);
  let D = Object.seal(dr(null, {
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
  })), ee = null, Y = null;
  const V = Object.seal(dr(null, {
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
  let se = !0, ge = !0, Le = !1, ft = !0, Re = !1, Me = !0, Ie = !1, Mt = !1, $t = !1, $e = !1, mt = !1, ht = !1, Er = !0, vr = !1;
  const qn = "user-content-";
  let Bt = !0, Ke = !1, Be = {}, Ae = null;
  const zt = q({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Ar = null;
  const Nr = q({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ut = null;
  const Tr = q({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), pt = "http://www.w3.org/1998/Math/MathML", yt = "http://www.w3.org/2000/svg", _e = "http://www.w3.org/1999/xhtml";
  let ze = _e, Ht = !1, Gt = null;
  const Kn = q({}, [pt, yt, _e], Qt);
  let gt = q({}, ["mi", "mo", "mn", "ms", "mtext"]), xt = q({}, ["annotation-xml"]);
  const Yn = q({}, ["title", "style", "font", "a", "script"]);
  let Ye = null;
  const Vn = ["application/xhtml+xml", "text/html"], Xn = "text/html";
  let ne = null, Ue = null;
  const Qn = n.createElement("form"), jr = function(u) {
    return u instanceof RegExp || u instanceof Function;
  }, Wt = function() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Ue && Ue === u)) {
      if ((!u || typeof u != "object") && (u = {}), u = je(u), Ye = // eslint-disable-next-line unicorn/prefer-includes
      Vn.indexOf(u.PARSER_MEDIA_TYPE) === -1 ? Xn : u.PARSER_MEDIA_TYPE, ne = Ye === "application/xhtml+xml" ? Qt : St, v = we(u, "ALLOWED_TAGS") ? q({}, u.ALLOWED_TAGS, ne) : C, _ = we(u, "ALLOWED_ATTR") ? q({}, u.ALLOWED_ATTR, ne) : O, Gt = we(u, "ALLOWED_NAMESPACES") ? q({}, u.ALLOWED_NAMESPACES, Qt) : Kn, Ut = we(u, "ADD_URI_SAFE_ATTR") ? q(je(Tr), u.ADD_URI_SAFE_ATTR, ne) : Tr, Ar = we(u, "ADD_DATA_URI_TAGS") ? q(je(Nr), u.ADD_DATA_URI_TAGS, ne) : Nr, Ae = we(u, "FORBID_CONTENTS") ? q({}, u.FORBID_CONTENTS, ne) : zt, ee = we(u, "FORBID_TAGS") ? q({}, u.FORBID_TAGS, ne) : je({}), Y = we(u, "FORBID_ATTR") ? q({}, u.FORBID_ATTR, ne) : je({}), Be = we(u, "USE_PROFILES") ? u.USE_PROFILES : !1, se = u.ALLOW_ARIA_ATTR !== !1, ge = u.ALLOW_DATA_ATTR !== !1, Le = u.ALLOW_UNKNOWN_PROTOCOLS || !1, ft = u.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Re = u.SAFE_FOR_TEMPLATES || !1, Me = u.SAFE_FOR_XML !== !1, Ie = u.WHOLE_DOCUMENT || !1, $e = u.RETURN_DOM || !1, mt = u.RETURN_DOM_FRAGMENT || !1, ht = u.RETURN_TRUSTED_TYPE || !1, $t = u.FORCE_BODY || !1, Er = u.SANITIZE_DOM !== !1, vr = u.SANITIZE_NAMED_PROPS || !1, Bt = u.KEEP_CONTENT !== !1, Ke = u.IN_PLACE || !1, b = u.ALLOWED_URI_REGEXP || zn, ze = u.NAMESPACE || _e, gt = u.MATHML_TEXT_INTEGRATION_POINTS || gt, xt = u.HTML_INTEGRATION_POINTS || xt, D = u.CUSTOM_ELEMENT_HANDLING || {}, u.CUSTOM_ELEMENT_HANDLING && jr(u.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (D.tagNameCheck = u.CUSTOM_ELEMENT_HANDLING.tagNameCheck), u.CUSTOM_ELEMENT_HANDLING && jr(u.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (D.attributeNameCheck = u.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), u.CUSTOM_ELEMENT_HANDLING && typeof u.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (D.allowCustomizedBuiltInElements = u.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Re && (ge = !1), mt && ($e = !0), Be && (v = q({}, nn), _ = [], Be.html === !0 && (q(v, rn), q(_, sn)), Be.svg === !0 && (q(v, Jt), q(_, rr), q(_, Et)), Be.svgFilters === !0 && (q(v, er), q(_, rr), q(_, Et)), Be.mathMl === !0 && (q(v, tr), q(_, an), q(_, Et))), u.ADD_TAGS && (typeof u.ADD_TAGS == "function" ? V.tagCheck = u.ADD_TAGS : (v === C && (v = je(v)), q(v, u.ADD_TAGS, ne))), u.ADD_ATTR && (typeof u.ADD_ATTR == "function" ? V.attributeCheck = u.ADD_ATTR : (_ === O && (_ = je(_)), q(_, u.ADD_ATTR, ne))), u.ADD_URI_SAFE_ATTR && q(Ut, u.ADD_URI_SAFE_ATTR, ne), u.FORBID_CONTENTS && (Ae === zt && (Ae = je(Ae)), q(Ae, u.FORBID_CONTENTS, ne)), u.ADD_FORBID_CONTENTS && (Ae === zt && (Ae = je(Ae)), q(Ae, u.ADD_FORBID_CONTENTS, ne)), Bt && (v["#text"] = !0), Ie && q(v, ["html", "head", "body"]), v.table && (q(v, ["tbody"]), delete ee.tbody), u.TRUSTED_TYPES_POLICY) {
        if (typeof u.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw et('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof u.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw et('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        j = u.TRUSTED_TYPES_POLICY, c = j.createHTML("");
      } else
        j === void 0 && (j = ro(S, s)), j !== null && typeof c == "string" && (c = j.createHTML(""));
      ue && ue(u), Ue = u;
    }
  }, Sr = q({}, [...Jt, ...er, ...Wa]), Rr = q({}, [...tr, ...qa]), Zn = function(u) {
    let R = N(u);
    (!R || !R.tagName) && (R = {
      namespaceURI: ze,
      tagName: "template"
    });
    const F = St(u.tagName), te = St(R.tagName);
    return Gt[u.namespaceURI] ? u.namespaceURI === yt ? R.namespaceURI === _e ? F === "svg" : R.namespaceURI === pt ? F === "svg" && (te === "annotation-xml" || gt[te]) : !!Sr[F] : u.namespaceURI === pt ? R.namespaceURI === _e ? F === "math" : R.namespaceURI === yt ? F === "math" && xt[te] : !!Rr[F] : u.namespaceURI === _e ? R.namespaceURI === yt && !xt[te] || R.namespaceURI === pt && !gt[te] ? !1 : !Rr[F] && (Yn[F] || !Sr[F]) : !!(Ye === "application/xhtml+xml" && Gt[u.namespaceURI]) : !1;
  }, Ne = function(u) {
    Ze(t.removed, {
      element: u
    });
    try {
      N(u).removeChild(u);
    } catch {
      T(u);
    }
  }, Pe = function(u, R) {
    try {
      Ze(t.removed, {
        attribute: R.getAttributeNode(u),
        from: R
      });
    } catch {
      Ze(t.removed, {
        attribute: null,
        from: R
      });
    }
    if (R.removeAttribute(u), u === "is")
      if ($e || mt)
        try {
          Ne(R);
        } catch {
        }
      else
        try {
          R.setAttribute(u, "");
        } catch {
        }
  }, _r = function(u) {
    let R = null, F = null;
    if ($t)
      u = "<remove></remove>" + u;
    else {
      const re = Zt(u, /^[\r\n\t ]+/);
      F = re && re[0];
    }
    Ye === "application/xhtml+xml" && ze === _e && (u = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + u + "</body></html>");
    const te = j ? j.createHTML(u) : u;
    if (ze === _e)
      try {
        R = new m().parseFromString(te, Ye);
      } catch {
      }
    if (!R || !R.documentElement) {
      R = k.createDocument(ze, "template", null);
      try {
        R.documentElement.innerHTML = Ht ? c : te;
      } catch {
      }
    }
    const oe = R.body || R.documentElement;
    return u && F && oe.insertBefore(n.createTextNode(F), oe.childNodes[0] || null), ze === _e ? B.call(R, Ie ? "html" : "body")[0] : Ie ? R.documentElement : oe;
  }, Cr = function(u) {
    return I.call(
      u.ownerDocument || u,
      u,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, qt = function(u) {
    return u instanceof h && (typeof u.nodeName != "string" || typeof u.textContent != "string" || typeof u.removeChild != "function" || !(u.attributes instanceof d) || typeof u.removeAttribute != "function" || typeof u.setAttribute != "function" || typeof u.namespaceURI != "string" || typeof u.insertBefore != "function" || typeof u.hasChildNodes != "function");
  }, Or = function(u) {
    return typeof l == "function" && u instanceof l;
  };
  function Ce(z, u, R) {
    wt(z, (F) => {
      F.call(t, u, R, Ue);
    });
  }
  const Lr = function(u) {
    let R = null;
    if (Ce(P.beforeSanitizeElements, u, null), qt(u))
      return Ne(u), !0;
    const F = ne(u.nodeName);
    if (Ce(P.uponSanitizeElement, u, {
      tagName: F,
      allowedTags: v
    }), Me && u.hasChildNodes() && !Or(u.firstElementChild) && ce(/<[/\w!]/g, u.innerHTML) && ce(/<[/\w!]/g, u.textContent) || u.nodeType === rt.progressingInstruction || Me && u.nodeType === rt.comment && ce(/<[/\w]/g, u.data))
      return Ne(u), !0;
    if (!(V.tagCheck instanceof Function && V.tagCheck(F)) && (!v[F] || ee[F])) {
      if (!ee[F] && Pr(F) && (D.tagNameCheck instanceof RegExp && ce(D.tagNameCheck, F) || D.tagNameCheck instanceof Function && D.tagNameCheck(F)))
        return !1;
      if (Bt && !Ae[F]) {
        const te = N(u) || u.parentNode, oe = x(u) || u.childNodes;
        if (oe && te) {
          const re = oe.length;
          for (let fe = re - 1; fe >= 0; --fe) {
            const Oe = A(oe[fe], !0);
            Oe.__removalCount = (u.__removalCount || 0) + 1, te.insertBefore(Oe, w(u));
          }
        }
      }
      return Ne(u), !0;
    }
    return u instanceof y && !Zn(u) || (F === "noscript" || F === "noembed" || F === "noframes") && ce(/<\/no(script|embed|frames)/i, u.innerHTML) ? (Ne(u), !0) : (Re && u.nodeType === rt.text && (R = u.textContent, wt([$, K, X], (te) => {
      R = Je(R, te, " ");
    }), u.textContent !== R && (Ze(t.removed, {
      element: u.cloneNode()
    }), u.textContent = R)), Ce(P.afterSanitizeElements, u, null), !1);
  }, Ir = function(u, R, F) {
    if (Er && (R === "id" || R === "name") && (F in n || F in Qn))
      return !1;
    if (!(ge && !Y[R] && ce(Q, R))) {
      if (!(se && ce(U, R))) {
        if (!(V.attributeCheck instanceof Function && V.attributeCheck(R, u))) {
          if (!_[R] || Y[R]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(Pr(u) && (D.tagNameCheck instanceof RegExp && ce(D.tagNameCheck, u) || D.tagNameCheck instanceof Function && D.tagNameCheck(u)) && (D.attributeNameCheck instanceof RegExp && ce(D.attributeNameCheck, R) || D.attributeNameCheck instanceof Function && D.attributeNameCheck(R, u)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              R === "is" && D.allowCustomizedBuiltInElements && (D.tagNameCheck instanceof RegExp && ce(D.tagNameCheck, F) || D.tagNameCheck instanceof Function && D.tagNameCheck(F)))
            ) return !1;
          } else if (!Ut[R]) {
            if (!ce(b, Je(F, E, ""))) {
              if (!((R === "src" || R === "xlink:href" || R === "href") && u !== "script" && za(F, "data:") === 0 && Ar[u])) {
                if (!(Le && !ce(Z, Je(F, E, "")))) {
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
  }, Pr = function(u) {
    return u !== "annotation-xml" && Zt(u, L);
  }, Dr = function(u) {
    Ce(P.beforeSanitizeAttributes, u, null);
    const {
      attributes: R
    } = u;
    if (!R || qt(u))
      return;
    const F = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: _,
      forceKeepAttr: void 0
    };
    let te = R.length;
    for (; te--; ) {
      const oe = R[te], {
        name: re,
        namespaceURI: fe,
        value: Oe
      } = oe, He = ne(re), Kt = Oe;
      let ae = re === "value" ? Kt : Ua(Kt);
      if (F.attrName = He, F.attrValue = ae, F.keepAttr = !0, F.forceKeepAttr = void 0, Ce(P.uponSanitizeAttribute, u, F), ae = F.attrValue, vr && (He === "id" || He === "name") && (Pe(re, u), ae = qn + ae), Me && ce(/((--!?|])>)|<\/(style|title|textarea)/i, ae)) {
        Pe(re, u);
        continue;
      }
      if (He === "attributename" && Zt(ae, "href")) {
        Pe(re, u);
        continue;
      }
      if (F.forceKeepAttr)
        continue;
      if (!F.keepAttr) {
        Pe(re, u);
        continue;
      }
      if (!ft && ce(/\/>/i, ae)) {
        Pe(re, u);
        continue;
      }
      Re && wt([$, K, X], (Fr) => {
        ae = Je(ae, Fr, " ");
      });
      const kr = ne(u.nodeName);
      if (!Ir(kr, He, ae)) {
        Pe(re, u);
        continue;
      }
      if (j && typeof S == "object" && typeof S.getAttributeType == "function" && !fe)
        switch (S.getAttributeType(kr, He)) {
          case "TrustedHTML": {
            ae = j.createHTML(ae);
            break;
          }
          case "TrustedScriptURL": {
            ae = j.createScriptURL(ae);
            break;
          }
        }
      if (ae !== Kt)
        try {
          fe ? u.setAttributeNS(fe, re, ae) : u.setAttribute(re, ae), qt(u) ? Ne(u) : tn(t.removed);
        } catch {
          Pe(re, u);
        }
    }
    Ce(P.afterSanitizeAttributes, u, null);
  }, Jn = function z(u) {
    let R = null;
    const F = Cr(u);
    for (Ce(P.beforeSanitizeShadowDOM, u, null); R = F.nextNode(); )
      Ce(P.uponSanitizeShadowNode, R, null), Lr(R), Dr(R), R.content instanceof o && z(R.content);
    Ce(P.afterSanitizeShadowDOM, u, null);
  };
  return t.sanitize = function(z) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, R = null, F = null, te = null, oe = null;
    if (Ht = !z, Ht && (z = "<!-->"), typeof z != "string" && !Or(z))
      if (typeof z.toString == "function") {
        if (z = z.toString(), typeof z != "string")
          throw et("dirty is not a string, aborting");
      } else
        throw et("toString is not a function");
    if (!t.isSupported)
      return z;
    if (Mt || Wt(u), t.removed = [], typeof z == "string" && (Ke = !1), Ke) {
      if (z.nodeName) {
        const Oe = ne(z.nodeName);
        if (!v[Oe] || ee[Oe])
          throw et("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (z instanceof l)
      R = _r("<!---->"), F = R.ownerDocument.importNode(z, !0), F.nodeType === rt.element && F.nodeName === "BODY" || F.nodeName === "HTML" ? R = F : R.appendChild(F);
    else {
      if (!$e && !Re && !Ie && // eslint-disable-next-line unicorn/prefer-includes
      z.indexOf("<") === -1)
        return j && ht ? j.createHTML(z) : z;
      if (R = _r(z), !R)
        return $e ? null : ht ? c : "";
    }
    R && $t && Ne(R.firstChild);
    const re = Cr(Ke ? z : R);
    for (; te = re.nextNode(); )
      Lr(te), Dr(te), te.content instanceof o && Jn(te.content);
    if (Ke)
      return z;
    if ($e) {
      if (mt)
        for (oe = G.call(R.ownerDocument); R.firstChild; )
          oe.appendChild(R.firstChild);
      else
        oe = R;
      return (_.shadowroot || _.shadowrootmode) && (oe = M.call(r, oe, !0)), oe;
    }
    let fe = Ie ? R.outerHTML : R.innerHTML;
    return Ie && v["!doctype"] && R.ownerDocument && R.ownerDocument.doctype && R.ownerDocument.doctype.name && ce(Un, R.ownerDocument.doctype.name) && (fe = "<!DOCTYPE " + R.ownerDocument.doctype.name + `>
` + fe), Re && wt([$, K, X], (Oe) => {
      fe = Je(fe, Oe, " ");
    }), j && ht ? j.createHTML(fe) : fe;
  }, t.setConfig = function() {
    let z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Wt(z), Mt = !0;
  }, t.clearConfig = function() {
    Ue = null, Mt = !1;
  }, t.isValidAttribute = function(z, u, R) {
    Ue || Wt({});
    const F = ne(z), te = ne(u);
    return Ir(F, te, R);
  }, t.addHook = function(z, u) {
    typeof u == "function" && Ze(P[z], u);
  }, t.removeHook = function(z, u) {
    if (u !== void 0) {
      const R = $a(P[z], u);
      return R === -1 ? void 0 : Ba(P[z], R, 1)[0];
    }
    return tn(P[z]);
  }, t.removeHooks = function(z) {
    P[z] = [];
  }, t.removeAllHooks = function() {
    P = ln();
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
const ct = {
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
function ut(e) {
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
) : e, Gn = (e) => {
  const t = Array.isArray(e?.data?.data) ? e.data.data[0] : Array.isArray(e?.data) ? e.data[0] : e?.data?.data ?? e?.data;
  return t && typeof t == "object" && !Array.isArray(t) ? t : null;
}, Ee = (e, t, n, r) => {
  if (!Array.isArray(n) || n.length === 0) return {};
  const s = r ?? (n[0] && typeof n[0] == "object" && "category" in n[0] ? "category" : void 0);
  if (!s) {
    const i = {};
    return n.forEach((l) => {
      const y = l[e], f = l[t];
      y != null && f != null && (i[String(y)] = String(f));
    }), i;
  }
  const o = {};
  return n.forEach((i) => {
    const l = i[s] ?? "Others", y = i[e], f = i[t];
    y == null || f == null || (o[l] || (o[l] = {}), o[l][String(y)] = String(f));
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
    i == null && (i = s.default), s.multiple === !0 || s.type === "checkbox" || s.type === "tags" ? t[o] = Array.isArray(i) ? i : typeof i == "string" ? i.split(",").map((y) => y.trim()).filter(Boolean) : [] : s.type === "json" ? t[o] = typeof i == "object" && i !== null ? JSON.stringify(i, null, 2) : i ?? "" : s.type === "date" ? t[o] = typeof i == "string" ? i.slice(0, 10) : "" : s.type === "time" ? typeof i == "string" ? i.includes("T") ? t[o] = i.slice(11, 16) : t[o] = i.slice(0, 5) : t[o] = "" : o === "blocked" || o === "blacklist" ? t[o] = String(i ?? "false") : t[o] = i ?? "";
    let l;
    s.type === "file" ? l = s.multiple ? xe.array().of(xe.mixed()) : xe.mixed() : s.multiple === !0 || s.type === "checkbox" || s.type === "tags" ? l = xe.array().of(xe.string()) : s.type === "email" ? l = xe.string().email("Invalid email") : s.type === "number" ? l = xe.number().typeError("Must be a number") : s.type === "json" ? l = xe.string().test("json", "Invalid JSON", (y) => {
      if (!y) return !0;
      try {
        return JSON.parse(y), !0;
      } catch {
        return !1;
      }
    }) : l = xe.string(), s.required && (l = l.required(
      s.error_message || `${s.label || o} is required`
    )), s?.validate?.regex && typeof s.validate.regex == "string" && (l = l.matches(
      new RegExp(s?.validate?.regex),
      s?.error_message || "Invalid input format"
    )), s?.validate && Object.entries(s.validate).forEach(([y, f]) => {
      switch (y) {
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
          l = xe.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((d, h) => {
            if (typeof h == "string") {
              const m = h.replace(/-/g, "/"), [S, p, A] = m.split("/");
              if (S && p && A)
                return /* @__PURE__ */ new Date(`${A}-${p}-${S}`);
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
          l = xe.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          l = xe.number().typeError("Must be a decimal").transform((d, h) => {
            if (h == null || h === "") return;
            const m = Number(h);
            if (isNaN(m)) return d;
            if (typeof d == "number" && !isNaN(d)) {
              const S = Number(d);
              return Number.isInteger(S) ? Number(m.toFixed(S)) : m;
            }
            return m;
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
] }) : null, nt = (e) => ({
  Authorization: `Bearer ${e.accessToken}`
}), nr = async (e) => (await H.get(
  e.baseURL + e.dbopsGetHash,
  { headers: nt(e) }
)).data.refhash, sr = async (e, t) => (await H.post(
  e.baseURL + e.dbopsGetRefId,
  t,
  { headers: nt(e) }
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
    const l = await H.post(
      e.baseURL + e.dbopsFetch,
      { refid: i, datahash: s },
      { headers: nt(e) }
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
    return (await H.post(
      e.baseURL + e.dbopsCreate,
      { refid: s, fields: t.values, datahash: r },
      { headers: nt(e) }
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
    return (await H.post(
      e.baseURL + e.dbopsUpdate,
      { refid: s, fields: t.values, datahash: r },
      { headers: nt(e) }
    )).data;
  }
};
async function Ge(e, t, n, r = void 0, s = void 0, o = {}) {
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
    let y;
    if ("type" in l && l.type === "api") {
      let m = e.name;
      typeof e.parameter == "string" && e.parameter && (m = e.parameter);
      const S = { [m]: t, refid: t };
      if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
        for (const [T, w] of Object.entries(e.parameter))
          S[T] = T === m ? t : s?.[w];
      const p = {
        method: l.method || "GET",
        url: n?.baseURL + l.endpoint,
        headers: {
          Authorization: `Bearer ${n?.accessToken}`
        },
        ...l.method === "GET" ? { params: S } : { data: S }
      }, { data: A } = await H(p);
      y = A;
    } else {
      let m;
      if (!l.queryid) {
        if (!l.table || !l.columns)
          throw new Error("SQL query requires field.table");
        const p = he(l.where ?? {}, { refid: t });
        m = {
          ...l,
          table: l.table,
          cols: l.columns,
          where: p
        };
      }
      const { data: S } = await Ge(
        n,
        m,
        l.queryid,
        t
      );
      y = S;
    }
    const f = Array.isArray(y?.results?.options) ? y?.results?.options : Array.isArray(y.data) ? y.data : Array.isArray(y.results) ? y.results : y, d = Array.isArray(f) ? f.map(me) : [], h = Ee(
      e.valueKey ?? "value",
      e.labelKey ?? "title",
      d,
      e.groupKey
    );
    r(i.target, h);
  }
}
async function Wn(e, t) {
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
function Ro(e) {
  const t = dn[e] ?? dn.other;
  return /* @__PURE__ */ a.jsx("i", { className: `${t} text-2xl text-gray-600` });
}
const _o = ({ filePath: e, sqlOpsUrls: t }) => {
  const [n, r] = ie(null), [s, o] = ie(!1), i = vo(e), l = Ao(i);
  Se(() => {
    if (!t || l !== "image" && !s) return;
    let f = !0, d = null;
    return Wn(e, t).then((h) => {
      f && (d = h, r(h));
    }), () => {
      f = !1, d && URL.revokeObjectURL(d);
    };
  }, [l, s, e, t]);
  let y = e.split("/").pop();
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    l === "image" && n ? /* @__PURE__ */ a.jsx(
      "img",
      {
        src: n,
        alt: y,
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
          /* @__PURE__ */ a.jsx("span", { className: "text-sm", children: y })
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
function dt({
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
  const y = `
    text-sm text-gray-600 break-words
  `, f = `
    block text-sm font-semibold  transition-all duration-300 text-gray-700 capitalize
  `, [d, h] = ie(
    i ?? e.options ?? {}
  ), m = J.useRef(!1);
  J.useEffect(() => {
    i && h(i);
  }, [i]);
  const S = J.useMemo(
    () => wo(d),
    [d]
  );
  J.useEffect(() => {
    let N = !0, j = e.valueKey ?? "value", c = e.labelKey ?? "title";
    return (async () => {
      let I = e?.options;
      if (I && (Array.isArray(I) && I.length > 0 || !Array.isArray(I) && Object.keys(I).length > 0)) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const $ = Object.values(e.options);
          if ($.length && typeof $[0] == "string") {
            h(e.options);
            return;
          }
        }
        const M = (Array.isArray(e.options) ? e.options : [e.options]).map(me), P = Ee(
          j,
          c,
          M,
          e.groupKey
          // auto-uses `category` if present
        );
        h(P);
        return;
      }
      const G = e?.source ?? {};
      if (e.type === "dataMethod") {
        const B = e.method, M = B ? n[B] : void 0;
        if (M)
          try {
            const P = await Promise.resolve(M()), $ = Array.isArray(P.data?.results?.options) ? P.data?.results?.options : Array.isArray(P?.data?.data) ? P.data.data : Array.isArray(P.data?.results) ? P.data?.results : Array.isArray(P?.data) ? P.data : P;
            if (typeof $ == "object" && !Array.isArray($)) {
              const Q = Object.values($);
              if (Q.length && typeof Q[0] == "string") {
                h($);
                return;
              }
            }
            const K = Array.isArray($) ? $.map(me) : [], X = Ee(j, c, K, e.groupKey);
            N && h(X);
            return;
          } catch (P) {
            console.error("Method execution failed:", P), N && h({});
            return;
          }
        else {
          N && h({});
          return;
        }
      }
      if (G.type === "api" && G.endpoint)
        try {
          const B = {
            method: G.method || "GET",
            url: r?.baseURL + G.endpoint,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            },
            ...G.method === "GET" ? { params: { refid: G.refid } } : { data: { refid: G.refid } }
          }, M = await H(B), P = Array.isArray(M.data?.results?.options) ? M.data?.results?.options : Array.isArray(M?.data?.data) ? M.data.data : Array.isArray(M.data?.results) ? M.data?.results : Array.isArray(M?.data) ? M.data : M;
          if (typeof P == "object" && !Array.isArray(P)) {
            const X = Object.values(P);
            if (X.length && typeof X[0] == "string") {
              h(P);
              return;
            }
          }
          const $ = Array.isArray(P) ? P.map(me) : [], K = Ee(j, c, $, e.groupKey);
          N && h(K);
          return;
        } catch (B) {
          console.error("API execution failed:", B), N && h({});
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
              where: e.where ? s ? he(e.where, { refid: s }) : e.where : void 0
            };
          }
          const M = await Ge(r, B, e?.queryid, void 0, o), P = Array.isArray(M?.data?.data) ? M.data.data : Array.isArray(M?.data) ? M.data : M;
          if (typeof P == "object" && !Array.isArray(P)) {
            const X = Object.values(P);
            if (X.length && typeof X[0] == "string") {
              h(P);
              return;
            }
          }
          const $ = Array.isArray(P) ? P.map(me) : [], K = Ee(j, c, $, e.groupKey);
          N && h(K);
        } catch (B) {
          console.error("API fetch failed:", B);
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
    s
  ]);
  const p = e?.name ? t?.[e.name] : void 0;
  J.useEffect(() => {
    m.current || !l || !p || (m.current = !0, So({
      field: e,
      value: p,
      sqlOpsUrls: r,
      setFieldOptions: l,
      values: t ?? {}
    }));
  }, [p, r, l]);
  let A;
  typeof p == "string" ? e.type === "date" ? A = p.split("T")[0] : e.type === "time" ? A = p.includes("T") ? p.slice(11, 16) : p.slice(0, 5) : A = cn(p, S) : A = cn(p, S);
  const T = A == null ? "" : typeof A == "string" || typeof A == "number" ? A : JSON.stringify(A), w = Eo(p), x = e.type === "richtextarea" && typeof T == "string" ? No(T) : null;
  return /* @__PURE__ */ a.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ a.jsx("label", { className: f, children: e?.label }),
    /* @__PURE__ */ a.jsx("div", { className: "relative", children: w ? w.type === "drawn" ? /* @__PURE__ */ a.jsx("svg", { viewBox: "0 0 300 150", className: "h-24 w-full border bg-white rounded", children: w.paths.map((N, j) => /* @__PURE__ */ a.jsx(
      "path",
      {
        d: N.d,
        stroke: N.color || "#000",
        strokeWidth: N.width || 2,
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
    ) : (e.type === "file" || e.type === "attachement" || e.type === "photo" || e.type === "avatar") && A ? /* @__PURE__ */ a.jsx("div", { className: "flex flex-wrap gap-2", children: String(A).split(",").map((N) => N.trim()).filter(Boolean).map((N) => /* @__PURE__ */ a.jsx(
      _o,
      {
        sqlOpsUrls: r,
        filePath: N
      },
      N
    )) }) : e.type === "richtextarea" ? /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "tiptap border border-gray-200 min-h-[400px] max-h-[220px] overflow-auto bg-white rounded p-2 text-sm",
        dangerouslySetInnerHTML: { __html: x ?? "" }
      }
    ) : /* @__PURE__ */ a.jsx("p", { className: y, children: T }) })
  ] });
}
function Co({ filePath: e, field_name: t, sqlOpsUrls: n }) {
  const [r, s] = ie(null);
  return Se(() => {
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
  methods: y
}) {
  const f = At(
    () => e?.fields?.find((m) => m.type === "avatar"),
    [e?.fields]
  ), d = f?.name, h = d && typeof t?.[d] == "string" ? t[d].trim() : "";
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white border border-gray-100 p-4 min-h-3/10 overflow-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    f && /* @__PURE__ */ a.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ a.jsx("div", { className: "relative w-42 h-42 p-2 rounded-sm overflow-hidden bg-gray-100 flex items-center justify-center", children: h ? /* @__PURE__ */ a.jsx(
      Co,
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
    /* @__PURE__ */ a.jsx("div", { className: `min-h-0 max-h-40 overflow-y-auto custom-scrollbar ${f ? "lg:col-span-10" : "lg:col-span-12"}`, children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: e.fields?.map((m, S) => n.includes(m.name) || m.type === "avatar" ? null : /* @__PURE__ */ a.jsx("div", { className: `hover:bg-gray-100 transition-colors duration-200 col-span-12 sm:col-span-6 ${ct[ut(m.width)] || "lg:col-span-4"}`, children: /* @__PURE__ */ a.jsx(
      dt,
      {
        field: m,
        data: t ?? {},
        sqlOpsUrls: r,
        methods: y,
        refid: l,
        module_refid: i,
        setFieldOptions: s,
        ...o[m.name] ? { optionsOverride: o[m.name] } : {}
      },
      m?.name
    ) }, m.name)) }) })
  ] }) });
}
function xr({ tabObj: e, methods: t, tabName: n, sqlOpsUrls: r, refid: s, module_refid: o, setFieldOptions: i, fieldOptions: l }) {
  const [y, f] = J.useState(null);
  return J.useEffect(() => {
    let d = !1;
    return (async () => {
      const m = e?.config;
      if (!m?.type) {
        d || f(null);
        return;
      }
      if (m.type === "method") {
        const S = m.method, p = S ? t[S] : void 0;
        if (p)
          try {
            const A = await Promise.resolve(p());
            d || f(A || null);
          } catch (A) {
            console.error("Method execution failed:", A), d || f(null);
          }
        else
          d || f(null);
      }
      if (m.type === "api")
        try {
          const S = await H({
            method: m.method || "GET",
            // GET, POST, etc.
            url: m.url,
            data: m.body || {},
            // request body
            params: m.params || {},
            // query params
            headers: m.headers || {}
            // optional headers
          });
          d || f(S.data || null);
        } catch (S) {
          console.error("API fetch failed:", S), d || f(null);
        }
      if (m.type === "sql" && s && s != "0" || m?.dbopsid) {
        if (!r) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let S = !1, p;
          m?.dbopsid && (S = !0, p = m?.dbopsid);
          const A = await H({
            method: "GET",
            url: r.baseURL + r.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            }
          });
          if (!S) {
            let x = {
              ...m
            };
            m.where && (x = {
              ...m,
              where: he(m.where, {
                refid: s
              })
            }), p = (await H({
              method: "POST",
              url: r.baseURL + r.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: x,
                fields: Ot(m.fields, r.operation),
                forcefill: m.forcefill,
                datahash: A.data.refhash,
                srcid: o
              },
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              }
            }))?.data.refid;
          }
          const T = await H({
            method: "POST",
            url: r.baseURL + r.dbopsFetch,
            data: {
              refid: p,
              datahash: A.data.refhash
            },
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            }
          }), w = Gn(T);
          d || f(w);
        } catch (S) {
          console.error("API fetch failed:", S);
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
  ]), /* @__PURE__ */ a.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: y ? Object.keys(y).map((d, h) => {
    let m = { name: d, label: d };
    return /* @__PURE__ */ a.jsx(
      "div",
      {
        className: `col-span-12 sm:col-span-6 ${ct[ut(e.width)] || "lg:col-span-2"}`,
        children: /* @__PURE__ */ a.jsx(
          dt,
          {
            field: m,
            data: y ?? {},
            methods: t,
            refid: s,
            sqlOpsUrls: r,
            setFieldOptions: i,
            ...l[m.name] ? { optionsOverride: l[m.name] } : {}
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
  const [y, f] = ie(!1), [d, h] = ie(
    o ?? e.options ?? {}
  ), [m, S] = ie(""), [p, A] = ie(0), T = Rt(null), [w, x] = ie(!1), N = J.useRef(m), j = Rt(null);
  J.useEffect(() => {
    N.current = m;
  }, [m]), Se(() => {
    o && Object.keys(o).length !== 0 && h(o);
  }, [o]), Se(() => {
    if (!w) return;
    const U = (Z) => {
      const E = Z.target;
      j.current?.contains(E) || T.current?.contains(E) || (x(!1), S(""));
    };
    return document.addEventListener("mousedown", U), () => {
      document.removeEventListener("mousedown", U);
    };
  }, [w]);
  const c = e.name;
  J.useEffect(() => {
    let U = !0;
    return (async () => {
      let E = e.valueKey ?? "value", L = e.labelKey ?? "title", b = e?.options;
      if (b && (Array.isArray(b) && b.length > 0 || !Array.isArray(b) && Object.keys(b).length > 0)) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const D = Object.values(e.options);
          if (D.length && typeof D[0] == "string") {
            h(e.options);
            return;
          }
        }
        const _ = (Array.isArray(e.options) ? e.options : [e.options]).map(me), O = Ee(
          E,
          L,
          _,
          e.groupKey
          // auto-uses `category` if present
        );
        h(O);
        return;
      }
      const v = e?.source ?? {};
      if (e.type === "dataMethod") {
        const C = e.method, _ = C ? n[C] : void 0;
        if (_)
          try {
            const O = await _(), D = Array.isArray(O.data?.results?.options) ? O.data?.results?.options : Array.isArray(O?.data?.data) ? O.data.data : Array.isArray(O.data?.results) ? O.data?.results : Array.isArray(O?.data) ? O.data : O;
            if (typeof D == "object" && !Array.isArray(D)) {
              const V = Object.values(D);
              if (V.length && typeof V[0] == "string") {
                h(D);
                return;
              }
            }
            const ee = Array.isArray(D) ? D.map(me) : [], Y = Ee(E, L, ee, e.groupKey);
            U && h(Y);
            return;
          } catch (O) {
            console.error("Method execution failed:", O), U && h({});
            return;
          }
        else {
          U && h({});
          return;
        }
      }
      if (v.type === "api" && v.endpoint)
        try {
          const C = {
            method: v.method || "GET",
            url: r?.baseURL + v.endpoint,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            },
            ...v.method === "GET" ? { params: { refid: v.refid } } : { data: { refid: v.refid } }
          }, _ = await H(C), O = Array.isArray(_.data?.results?.options) ? _.data?.results?.options : Array.isArray(_?.data?.data) ? _.data.data : Array.isArray(_.data?.results) ? _.data?.results : Array.isArray(_?.data) ? _.data : _;
          if (typeof O == "object" && !Array.isArray(O)) {
            const Y = Object.values(O);
            if (Y.length && typeof Y[0] == "string") {
              h(O);
              return;
            }
          }
          const D = Array.isArray(O) ? O.map(me) : [], ee = Ee(E, L, D, e.groupKey);
          U && h(ee);
          return;
        } catch (C) {
          console.error("API execution failed:", C), U && h({});
          return;
        }
      if (e.table || e.type === "dataSelector" || e.queryid) {
        if (!r) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let C;
          if (e.type === "dataSelector")
            C = {
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
            C = {
              table: e.table,
              cols: e.columns,
              where: e.where ? s ? he(e.where, { refid: s }) : e.where : void 0
            };
          }
          const _ = await Ge(r, C, e?.queryid, void 0, l), O = Array.isArray(_?.data?.data) ? _.data.data : Array.isArray(_?.data) ? _.data : _;
          if (typeof O == "object" && !Array.isArray(O)) {
            const Y = Object.values(O);
            if (Y.length && typeof Y[0] == "string") {
              h(O);
              return;
            }
          }
          const D = Array.isArray(O) ? O.map(me) : [], ee = Ee(E, L, D, e.groupKey);
          U && h(ee);
        } catch (C) {
          console.error("API fetch failed:", C);
        }
      }
    })(), () => {
      U = !1;
    };
  }, [
    e.options,
    e.source,
    e.table,
    e.columns,
    e.where,
    s
  ]);
  const k = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, I = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, G = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, B = (U) => U.icon ? /* @__PURE__ */ a.jsx("i", { className: U.icon }) : null, M = At(
    () => bo(d),
    [d]
  );
  At(() => {
    if (!e.type || !["suggest", "autosuggest", "autocomplete"].includes(e.type) || !m.trim()) return null;
    const U = m.trim().toLowerCase();
    return M.find(([, Z]) => Z.trim().toLowerCase() === U);
  }, [e.type, m, M]);
  const P = M.length, $ = At(() => e.search || !m ? M : M.filter(
    ([, U]) => U.toLowerCase().includes(m.toLowerCase())
  ), [e.search, m, M]), K = (U, Z) => {
    if (w === !0)
      if (U.key === "ArrowDown")
        U.preventDefault(), A(
          (E) => E + 1 < $.length ? E + 1 : 0
        );
      else if (U.key === "ArrowUp")
        U.preventDefault(), A(
          (E) => E - 1 >= 0 ? E - 1 : $.length - 1
        );
      else if (U.key === "Enter") {
        U.preventDefault();
        const [E] = $[p] || [];
        E && t.setFieldValue(e.name, Z ? E : [...t.values[e.name], E]);
      } else U.key === "Escape" && (S(""), x(!1));
  };
  Se(() => {
    T.current?.querySelector(
      `[data-index="${p}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [p]), Se(() => {
    p >= $.length && A(0);
  }, [$, p]), Se(() => {
    const U = e.autocomplete, Z = e.ajaxchain;
    if (!U && !Z) return;
    const E = t.values[e.name];
    if (!E) return;
    const L = Array.isArray(Z) ? Z : Z ? [Z] : [];
    (async () => {
      try {
        if (go(U)) {
          const v = U.src;
          if (!v || !r) return;
          let C;
          if ("type" in v && v.type === "api") {
            let O = e.name;
            typeof e.parameter == "string" && e.parameter && (O = e.parameter);
            const D = { [O]: E, refid: E };
            if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
              for (const [V, se] of Object.entries(e.parameter))
                D[V] = V === O ? E : t.values?.[se];
            const ee = {
              method: v.method || "GET",
              url: r?.baseURL + v.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...v.method === "GET" ? { params: D } : { data: D }
            }, { data: Y } = await H(ee);
            C = Array.isArray(Y?.data?.results?.options) ? Y?.data?.results?.options[0] : Array.isArray(Y?.data?.data) ? Y.data.data[0] : Array.isArray(Y?.data?.results) ? Y.data.results[0] : Array.isArray(Y?.data) ? Y.data[0] : Y?.data;
          } else {
            let O;
            if (!v.queryid) {
              if (!v.table || !v.columns)
                throw new Error("SQL query requires field.table");
              const ee = he(v?.where ?? {}, {
                refid: E
              });
              O = {
                ...v,
                table: v.table,
                cols: v.columns,
                where: ee
              };
            }
            const { data: D } = await Ge(r, O, e?.queryid, void 0, l);
            C = Array.isArray(D?.data?.data) ? D.data.data[0] : Array.isArray(D?.data) ? D.data[0] : D?.data;
          }
          let _ = me(C);
          _ && U.target.split(",").map((O) => O.trim()).forEach((O) => {
            _[O] !== void 0 && t.setFieldValue(O, _[O]);
          });
        }
        for (const v of L) {
          const C = v.src;
          if (!v || typeof v != "object" || !C || typeof C != "object" || !r) continue;
          let _;
          if ("type" in C && C.type === "api") {
            let se = e.name;
            typeof e.parameter == "string" && e.parameter && (se = e.parameter);
            let ge = { [se]: E, refid: E };
            if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
              for (const [Re, Me] of Object.entries(e.parameter))
                ge[Re] = Re === se ? E : t.values?.[Me];
            const Le = {
              method: C.method || "GET",
              url: r?.baseURL + C.endpoint,
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              },
              ...C.method === "GET" ? { params: ge } : { data: ge }
            }, { data: ft } = await H(Le);
            _ = ft;
          } else {
            let se;
            if (!C.queryid) {
              if (!C.table || !C.columns)
                throw new Error("SQL query requires field.table");
              const Le = he(C?.where ?? {}, {
                refid: E
              });
              se = {
                ...C,
                table: C.table,
                cols: C.columns,
                where: Le
              };
            }
            const { data: ge } = await Ge(r, se, e?.queryid, E, l);
            _ = ge;
          }
          let O = e.valueKey ?? "value", D = e.labelKey ?? "title";
          const ee = Array.isArray(_?.results?.options) ? _?.results?.options : Array.isArray(_.data) ? _.data : Array.isArray(_.results) ? _.results : _, Y = Array.isArray(ee) ? ee.map(me) : [], V = Ee(
            O,
            D,
            Y,
            e.groupKey
          );
          i?.(v.target, V);
        }
      } catch (v) {
        console.error("Autocomplete / AjaxChain fetch failed", v);
      }
    })();
  }, [t.values[e.name]]), J.useEffect(() => {
    if (!e.search || !m.trim() || !e.table || !r) return;
    const U = xo(e.columns ?? ""), Z = new AbortController(), E = setTimeout(async () => {
      try {
        let L;
        if (!e.queryid) {
          if (!e.table || !e.cols)
            throw new Error("SQL query requires field.table");
          const Y = s ? he(e.where ?? {}, {
            refid: s
          }) : e.where;
          L = {
            ...e,
            table: e.table,
            cols: e.columns || e.cols,
            where: Y
          };
        }
        let b = {};
        Array.isArray(U) && U.forEach((Y) => {
          b[Y] = [m, "LIKE"];
        });
        const { data: v } = await Ge(r, L, e?.queryid, void 0, l, b);
        let C = e.valueKey ?? "value", _ = e.labelKey ?? "title";
        const O = Array.isArray(v?.data?.data) ? v.data.data : Array.isArray(v?.data) ? v.data : v, D = Array.isArray(O) ? O.map(me) : [], ee = Ee(
          C,
          _,
          D,
          e.groupKey
        );
        h(ee);
      } catch (L) {
        if (H.isCancel(L)) return;
        console.error("Search fetch failed", L);
      }
    }, 500);
    return () => {
      clearTimeout(E), Z.abort();
    };
  }, [m, s]);
  const X = async (U) => {
    if (U.length === 0) {
      console.error("No file");
      return;
    }
    if (!r) return;
    const Z = r?.baseURL + r?.uploadURL;
    if (!Z) {
      console.error("No Upload URL ");
      return;
    }
    const E = e.multiple === !0;
    try {
      const L = await Promise.all(
        Array.from(U).map(async (b) => {
          const v = new FormData();
          return v.append("file", b), (await H({
            method: "POST",
            url: Z,
            data: v,
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${r?.accessToken}`
            }
          })).data;
        })
      );
      t.setFieldValue(
        c,
        E ? L.map((b) => b.path) : L[0]?.path
      );
    } catch (L) {
      console.error("File upload failed", L), t.setFieldError(c, "File upload failed");
    }
  }, Q = async (U, Z, E) => {
    const L = Z[U];
    if (!L) return;
    const b = n?.[L];
    if (typeof b != "function") {
      console.error(`Method "${String(L)}" not found`);
      return;
    }
    try {
      await Promise.resolve(b(E));
    } catch (v) {
      console.error(`Method "${String(L)}" failed`, v);
    }
  };
  switch (e.type) {
    case "autocomplete": {
      const E = t.values[c] ?? "", L = m !== "" ? m : un(d, E) ?? String(E ?? ""), b = (C) => {
        const _ = C.target.value;
        S(_), A(0), _.trim() ? x(!0) : (x(!1), t.setFieldValue(c, ""));
      }, v = (C) => {
        t.setFieldValue(c, C), S(""), x(!1), Q("onChange", e, `${c}-${C}`);
      };
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: G, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { ref: j, children: /* @__PURE__ */ a.jsx(
          "input",
          {
            className: `${k} ${I}`,
            value: L,
            placeholder: e.placeholder || "Type to search...",
            onChange: b,
            onFocus: () => {
              const C = String(t.values[c] ?? "");
              S(C);
            },
            onBlur: () => {
              setTimeout(() => x(!1), 150);
            },
            onKeyDown: (C) => {
              if (C.key === "Enter") {
                if (C.preventDefault(), $[p]) {
                  const [_] = $[p];
                  t.setFieldValue(c, _);
                } else m.trim() && t.setFieldValue(c, m.trim());
                x(!1);
                return;
              }
              K(C, !0);
            },
            disabled: e.disabled
          }
        ) }),
        /* @__PURE__ */ a.jsx(vt, { anchorRef: j, open: w, children: /* @__PURE__ */ a.jsx(
          "div",
          {
            ref: T,
            className: "bg-white border rounded shadow max-h-52 overflow-y-auto",
            children: $.length > 0 ? $.map(([C, _], O) => /* @__PURE__ */ a.jsx(
              "div",
              {
                id: `${c}-${C}`,
                "data-index": O,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${p === O ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => v(C),
                children: _
              },
              C
            )) : /* @__PURE__ */ a.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `No matches press enter to add "${L}" ` })
          }
        ) }),
        t.touched[c] && t.errors[c] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[c]) })
      ] });
    }
    case "dataSelector":
    case "dataSelectorFromTable":
    case "dataSelectorFromUniques":
    case "dataMethod": {
      if (e.multiple === !0) {
        const E = t.values[c] ?? [];
        return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ a.jsxs("label", { className: G, children: [
            e.label,
            e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ a.jsxs(
            "div",
            {
              ref: j,
              tabIndex: 0,
              className: "cursor-pointer select-none border border-gray-300 rounded-lg px-4 py-2.5 bg-white flex justify-between items-center",
              onClick: () => {
                x((L) => !L), A(0);
              },
              onKeyDown: (L) => K(L, !1),
              onBlur: () => {
                e.multiple || setTimeout(() => {
                  x(!1), S("");
                }, 150);
              },
              children: [
                /* @__PURE__ */ a.jsx("span", { className: "text-sm text-gray-700 truncate", children: E.length > 0 ? E.join(", ") : `Select ${e.label}` }),
                /* @__PURE__ */ a.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
              ]
            }
          ),
          /* @__PURE__ */ a.jsx(vt, { anchorRef: j, open: w, children: /* @__PURE__ */ a.jsxs(
            "div",
            {
              ref: T,
              className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
              children: [
                e.search && /* @__PURE__ */ a.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    type: "text",
                    value: m,
                    onChange: (L) => {
                      S(L.target.value), A(0);
                    },
                    placeholder: "Search...",
                    className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                  }
                ) }),
                $.length > 0 ? $.map(([L, b], v) => /* @__PURE__ */ a.jsxs(
                  "label",
                  {
                    "data-index": v,
                    className: `flex items-center gap-x-2 px-2 py-1 rounded cursor-pointer text-sm
                    ${E.includes(L) ? "bg-indigo-50 text-indigo-600 font-medium" : p === v ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: [
                      /* @__PURE__ */ a.jsx(
                        "input",
                        {
                          id: `${c}-${L}`,
                          type: "checkbox",
                          checked: E.includes(L),
                          onChange: (C) => {
                            const _ = C.target.checked ? [...E, L] : E.filter((O) => O !== L);
                            t.setFieldValue(c, _), Q("onChange", e, `${c}-${L}`);
                          },
                          className: "h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        }
                      ),
                      b
                    ]
                  },
                  L
                )) : /* @__PURE__ */ a.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ]
            }
          ) }),
          t.touched[c] && t.errors[c] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[c]) })
        ] });
      }
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: G, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            ref: j,
            tabIndex: 0,
            className: "cursor-pointer select-none border border-gray-300 rounded-lg px-4 py-2.5 bg-white flex justify-between items-center",
            onClick: () => {
              x((E) => !E), A(0);
            },
            onKeyDown: (E) => K(E, !0),
            onBlur: () => {
              setTimeout(() => {
                x(!1), S("");
              }, 150);
            },
            children: [
              /* @__PURE__ */ a.jsx("span", { className: "text-sm text-gray-700 truncate", children: t.values[c] ? un(d, t.values[c]) ?? "Select option" : `Select ${e.label}` }),
              /* @__PURE__ */ a.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
            ]
          }
        ),
        /* @__PURE__ */ a.jsx(vt, { anchorRef: j, open: w, children: /* @__PURE__ */ a.jsxs(
          "div",
          {
            ref: T,
            className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
            children: [
              e.search && /* @__PURE__ */ a.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ a.jsx(
                "input",
                {
                  type: "text",
                  value: m,
                  onChange: (E) => {
                    S(E.target.value), A(0);
                  },
                  onKeyDown: (E) => K(E, !0),
                  placeholder: "Search...",
                  className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                }
              ) }),
              $.length > 0 && /* @__PURE__ */ a.jsx(
                "div",
                {
                  onMouseDown: (E) => {
                    E.preventDefault(), t.setFieldValue(c, ""), x(!1), S("");
                  },
                  className: "px-2 py-1 text-sm cursor-pointer hover:bg-gray-50",
                  children: "Clear selection"
                }
              ),
              $.length > 0 ? $.map(([E, L], b) => /* @__PURE__ */ a.jsx(
                "div",
                {
                  id: `${c}-${E}`,
                  "data-index": b,
                  onMouseDown: () => {
                    t.setFieldValue(c, E), x(!1), S(""), A(0), Q("onChange", e, `${c}-${E}`);
                  },
                  className: `px-2 py-1 rounded cursor-pointer text-sm
                  ${t.values[c] === E ? "bg-indigo-50 text-indigo-600 font-medium" : p === b ? "bg-gray-100" : "hover:bg-gray-50"}`,
                  children: L
                },
                E
              )) : /* @__PURE__ */ a.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
            ]
          }
        ) }),
        t.touched[c] && t.errors[c] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[c]) })
      ] });
    }
    case "textarea":
      return /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: G, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ a.jsx(
            "textarea",
            {
              id: c,
              className: `${k} ${I} min-h-[120px] resize-none`,
              onFocus: () => f(!0),
              name: c,
              value: t.values[c],
              onBlur: t.handleBlur,
              onChange: (E) => {
                t.setFieldValue(
                  c,
                  E.target.value
                ), Q("onChange", e, `${c}`);
              },
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${y ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[c] && t.errors[c] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[c]) })
      ] }) });
    case "select":
      if (e.multiple === !0) {
        const E = t.values[c] ?? [];
        return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ a.jsxs("label", { className: G, children: [
            e.label,
            e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ a.jsxs(
            "div",
            {
              ref: j,
              tabIndex: 0,
              className: "cursor-pointer select-none border border-gray-300 rounded-lg px-4 py-2.5 bg-white flex justify-between items-center",
              onClick: () => {
                x((L) => !L), A(0);
              },
              onKeyDown: (L) => K(L, !1),
              onBlur: () => {
                e.multiple || setTimeout(() => {
                  x(!1), S("");
                }, 150);
              },
              children: [
                /* @__PURE__ */ a.jsx("span", { className: "text-sm text-gray-700 truncate", children: E.length > 0 ? E.join(", ") : `Select ${e.label}` }),
                /* @__PURE__ */ a.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
              ]
            }
          ),
          /* @__PURE__ */ a.jsx(vt, { anchorRef: j, open: w, children: /* @__PURE__ */ a.jsxs(
            "div",
            {
              ref: T,
              className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
              children: [
                e.search && /* @__PURE__ */ a.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    type: "text",
                    value: m,
                    onChange: (L) => {
                      S(L.target.value), A(0);
                    },
                    placeholder: "Search...",
                    className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                  }
                ) }),
                $.length > 0 ? $.map(([L, b], v) => /* @__PURE__ */ a.jsxs(
                  "label",
                  {
                    "data-index": v,
                    className: `flex items-center gap-x-2 px-2 py-1 rounded cursor-pointer text-sm
                    ${E.includes(L) ? "bg-indigo-50 text-indigo-600 font-medium" : p === v ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: [
                      /* @__PURE__ */ a.jsx(
                        "input",
                        {
                          id: `${c}-${L}`,
                          type: "checkbox",
                          checked: E.includes(L),
                          onChange: (C) => {
                            const _ = C.target.checked ? [...E, L] : E.filter((O) => O !== L);
                            t.setFieldValue(c, _), Q("onChange", e, `${c}-${L}`);
                          },
                          className: "h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        }
                      ),
                      b
                    ]
                  },
                  L
                )) : /* @__PURE__ */ a.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ]
            }
          ) }),
          t.touched[c] && t.errors[c] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[c]) })
        ] });
      }
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: G, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ a.jsxs(
            "select",
            {
              className: `${k} ${I} appearance-none cursor-pointer pr-12`,
              onFocus: () => f(!0),
              name: c,
              id: c,
              value: t.values[c],
              onBlur: t.handleBlur,
              onChange: (E) => {
                t.setFieldValue(
                  c,
                  E.target.value === "" ? "" : E.target.value
                ), Q("onChange", e, `${c}`);
              },
              disabled: e.disabled,
              children: [
                /* @__PURE__ */ a.jsx("option", { value: "", disabled: !0, children: e.placeholder || "Please select an option" }),
                !hr(d) && Object.entries(d).map(([E, L]) => /* @__PURE__ */ a.jsx("option", { value: E, className: "py-2", children: L }, E)),
                hr(d) && Object.entries(d).map(([E, L]) => /* @__PURE__ */ a.jsx("optgroup", { label: E, children: Object.entries(L).map(([b, v]) => /* @__PURE__ */ a.jsx("option", { value: b, children: v }, b)) }, E))
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
        t.touched[c] && t.errors[c] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[c]) })
      ] });
    case "radioList":
    case "radio":
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: G, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: `flex ${P > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(d || {}).map(([E, L]) => /* @__PURE__ */ a.jsxs(
          "label",
          {
            htmlFor: `${c}-${E}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  id: `${c}-${E}`,
                  type: "radio",
                  name: c,
                  checked: t.values[c] === E,
                  value: E,
                  onChange: (b) => {
                    t.setFieldValue(
                      c,
                      b.target.value === "" ? "" : b.target.value
                    ), Q("onChange", e, `${c}-${E}`);
                  },
                  onBlur: t.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              L
            ]
          },
          E
        )) }),
        t.touched[c] && t.errors[c] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[c]) })
      ] });
    case "checkbox": {
      const E = t.values[c];
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: G, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(d || {}).map(([L, b]) => /* @__PURE__ */ a.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  id: `${c}-${L}`,
                  type: "checkbox",
                  checked: E.includes(L),
                  onChange: (v) => {
                    const C = v.target.checked ? [...E, L] : E.filter((_) => _ !== L);
                    t.setFieldValue(c, C), Q("onChange", e, `${c}-${L}`);
                  },
                  onBlur: t.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              b
            ]
          },
          L
        )) }),
        t.touched[c] && t.errors[c] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[c]) })
      ] });
    }
    case "tags": {
      const E = t.values[c], L = m.trim(), b = Array.isArray(d) ? d : Object.entries(d || {}).map(([O, D]) => ({ value: O, label: D })), v = (O) => {
        O && !E.includes(O) && (t.setFieldValue(c, [...E, O]), S(""));
      }, C = (O) => {
        t.setFieldValue(
          c,
          E.filter((D) => D !== O)
        );
      }, _ = (O) => b.find((D) => D.value === O)?.label ?? O;
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: G, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: `${k} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !e.disabled && document.getElementById(`${c}-input`)?.focus(),
            children: [
              E.map((O) => /* @__PURE__ */ a.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ a.jsx("span", { className: "text-indigo-700", children: _(O) }),
                    /* @__PURE__ */ a.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (D) => {
                          D.stopPropagation(), e.disabled || C(O);
                        },
                        onMouseDown: (D) => D.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                O
              )),
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  id: `${c}-input`,
                  type: "text",
                  value: m,
                  onChange: (O) => S(O.target.value),
                  onKeyDown: (O) => {
                    (O.key === "Enter" || O.key === ",") && (O.preventDefault(), v(L));
                  },
                  placeholder: E.length === 0 ? e.placeholder || "Type and press Enter" : "",
                  className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                  disabled: e.disabled
                }
              )
            ]
          }
        ),
        t.touched[c] && t.errors[c] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[c]) })
      ] });
    }
    case "attachment":
    case "photo":
    case "avatar":
    case "file":
      const U = e.multiple === !0, Z = Array.isArray(t.values[c]) ? t.values[c] : t.values[c] ? [t.values[c]] : [];
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: G, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: B(e) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: c,
              type: "file",
              className: `${k} ${I} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => f(!0),
              name: c,
              multiple: U,
              onChange: (E) => {
                const L = E.currentTarget.files;
                L && X(L), Q("onChange", e, `${c}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${y ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        Z.map((E) => {
          const L = E?.split("/").pop();
          return L ? /* @__PURE__ */ a.jsx("div", { className: "mt-1", children: /* @__PURE__ */ a.jsx("span", { className: "text-sm", children: L }) }, E) : null;
        }),
        t.touched[c] && t.errors[c] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[c]) })
      ] });
    case "json":
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: G, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ a.jsx(
            "textarea",
            {
              id: c,
              name: c,
              value: t.values[c],
              onChange: (E) => {
                t.setFieldValue(c, E.target.value), Q("onChange", e, `${c}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: e.disabled,
              className: `${k} ${I} min-h-[200px] font-mono text-sm resize-y`
            }
          ),
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${y ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        t.touched[c] && t.errors[c] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[c]) })
      ] });
    case "date":
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: G, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 right-3 top-1/2 -translate-y-1/2 pointer-events-none", children: /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-calendar" }) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: c,
              type: "date",
              name: c,
              min: e.min,
              max: e.max,
              value: t.values[c],
              onChange: (E) => {
                t.setFieldValue(c, E.target.value), Q("onChange", e, `${c}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled,
              className: `${k} ${I} ${e.icon ? "pl-9" : ""}`
            }
          ),
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${y ? "opacity-20" : ""}`,
              style: { zIndex: -1, filter: "blur(8px)" }
            }
          )
        ] }),
        t.touched[c] && t.errors[c] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[c]) })
      ] });
    case "number":
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: G, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: B(e) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: c,
              type: e.type || "text",
              className: `${k} ${I} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => f(!0),
              name: c,
              value: t.values[c],
              onBlur: t.handleBlur,
              onChange: (E) => {
                t.setFieldValue(c, E.target.value), Q("onChange", e, `${c}`);
              },
              step: e.step,
              placeholder: e.placeholder,
              disabled: e.disabled,
              min: e.min,
              max: e.max
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${y ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[c] && t.errors[c] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[c]) })
      ] });
    default:
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: G, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: B(e) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: c,
              type: e.type || "text",
              className: `${k} ${I} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => f(!0),
              name: c,
              value: t.values[c],
              onBlur: t.handleBlur,
              onChange: (E) => {
                t.setFieldValue(c, E.target.value), Q("onChange", e, `${c}`);
              },
              placeholder: e.placeholder,
              disabled: e.disabled,
              step: e.step,
              minLength: e.minlength,
              maxLength: e.maxlength
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${y ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[c] && t.errors[c] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[c]) })
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
  module_refid: y
}) {
  const f = ho(t, i?.operation), [d, h] = J.useState({}), m = (w, x) => {
    h((N) => ({
      ...N,
      [w]: x
    }));
  }, { initialValues: S, validationSchema: p } = J.useMemo(() => {
    const w = {}, x = {};
    return f.forEach((N) => {
      yo([N], w, x, n);
    }), {
      initialValues: w,
      validationSchema: x
    };
  }, [f, n]), A = ts({
    initialValues: S,
    enableReinitialize: !0,
    validationSchema: xe.object().shape(p),
    onSubmit: (w) => {
      r(w), A.resetForm();
    }
  });
  function T(w) {
    w.preventDefault(), A.resetForm();
  }
  return /* @__PURE__ */ a.jsx("div", { className: "relative z-10 max-w-full ", children: /* @__PURE__ */ a.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ a.jsxs("form", { onSubmit: A.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "grid grid-flow-col auto-cols-max gap-4  overflow-x-auto", children: [
      f.map((w, x) => po(w.hidden) || w.type === "geolocation" || w.vmode === "edit" && i?.operation === "create" ? null : /* @__PURE__ */ a.jsx(
        "div",
        {
          children: /* @__PURE__ */ a.jsx(
            Io,
            {
              refid: l,
              module_refid: y,
              sqlOpsUrls: i,
              field: w,
              formik: A,
              methods: o,
              setFieldOptions: m,
              ...d[w.name] ? { optionsOverride: d[w.name] } : {}
            }
          )
        },
        w?.name ?? `field-${x}`
      )),
      /* @__PURE__ */ a.jsxs("div", { className: "", children: [
        /* @__PURE__ */ a.jsx("div", { children: "  " }),
        /* @__PURE__ */ a.jsx("button", { onClick: T, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Reset" }),
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
  module_refid: y
}) {
  const f = e.endPoints, d = e?.source?.refid, [h, m] = J.useState(i), S = J.useMemo(() => fo(e.fields), [e.fields]);
  J.useEffect(() => {
    m(i ?? {});
  }, [i]);
  const p = J.useCallback(
    (w) => {
      w && Object.keys(w).length > 0 && m(w);
    },
    []
  );
  J.useEffect(() => {
    let w = !0;
    return (async () => {
      const N = e?.source ?? {};
      if (N?.type) {
        if (N.type === "method") {
          const j = N.method, c = j ? t[j] : void 0;
          if (c)
            try {
              const k = await Promise.resolve(c());
              w && p(k);
            } catch (k) {
              console.error("Method execution failed:", k);
            }
        }
        if (N.type === "api" && f?.operation !== "create")
          try {
            const j = await H({
              method: N.method || "GET",
              url: N.url ?? "",
              data: N.body ?? {},
              params: N.params ?? {},
              headers: N.headers ?? {}
            });
            w && p(j.data);
          } catch (j) {
            console.error("API fetch failed:", j);
          }
        if (N.type === "sql" && N.refid && N.refid !== "0" && f?.operation !== "create" || f?.operation !== "create" && N.dbopsid) {
          if (!f) {
            console.error("SQL source requires formJson.endPoints but it is missing");
            return;
          }
          try {
            const j = await jo.fetch(f, {
              source: {
                ...N,
                table: N.table,
                columns: N.columns,
                where: he(N.where, {
                  refid: d
                })
              },
              fields: Ot(e.fields, f.operation)
            }, N?.dbopsid, y);
            w && p(j);
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
  const A = async (w) => {
    const x = e?.source ?? {};
    let N = null;
    if (S.length > 0)
      try {
        N = await mo();
      } catch (c) {
        console.log("catch fetchGeolocation", c), N = null;
      }
    const j = {
      ...w,
      ...Object.fromEntries(
        S.map((c) => [c, N])
      )
    };
    if (x.type === "method") {
      const c = x.method, k = c ? t[c] : void 0;
      if (k)
        try {
          const I = await Promise.resolve(k(j));
          l?.(null), o?.(I);
        } catch (I) {
          o?.(I), console.error("Method execution failed:", I);
        }
    }
    if (x.type === "api") {
      if (!f) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const c = await H({
          method: x.method || "POST",
          url: f.baseURL + x.endpoint,
          data: j ?? {},
          headers: {
            Authorization: `Bearer ${f?.accessToken}`
          }
        });
        l?.(null), o?.(c);
      } catch (c) {
        o?.(c), console.error("API fetch failed:", c);
      }
    }
    if (x.type === "sql") {
      const c = e.endPoints;
      if (!c) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let k = !1, I;
        x?.dbopsid && (k = !0, I = x?.dbopsid);
        const G = await H({
          method: "GET",
          url: c.baseURL + c.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${c?.accessToken}`
          }
        });
        if (!k) {
          let P = {
            ...x
          };
          x.where && (P = {
            ...x,
            where: he(x.where, {
              refid: d
            })
          }), I = (await H({
            method: "POST",
            url: c.baseURL + c.dbopsGetRefId,
            data: {
              operation: c.operation,
              source: P,
              fields: Ot(e.fields, c.operation),
              forcefill: e.forcefill,
              datahash: G.data.refhash,
              scrid: y
            },
            headers: {
              Authorization: `Bearer ${c?.accessToken}`
            }
          }))?.data.refid;
        }
        let B = {
          refid: I,
          fields: j,
          datahash: G.data.refhash,
          refid1: c.refid
        };
        x?.refid && (B.refid1 = x?.refid);
        const M = await H({
          method: "POST",
          url: c.baseURL + c[c.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: B,
          headers: {
            Authorization: `Bearer ${c?.accessToken}`
          }
        });
        l?.(null), o?.(M);
      } catch (k) {
        o?.(k), console.error("API fetch failed:", k);
      }
    }
  }, T = {
    simple: /* @__PURE__ */ a.jsx(
      Po,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: h,
        onSubmit: A,
        onCancel: r,
        methods: t,
        components: s,
        sqlOpsUrls: f,
        refid: d,
        module_refid: y
      }
    )
  };
  return /* @__PURE__ */ a.jsx("div", { className: "relative", children: T.simple });
}
function br({ tabObj: e, methods: t, tabName: n, sqlOpsUrls: r, refid: s, Reports: o, toast: i, handleAction: l, infoViewJson: y }) {
  const [f, d] = ie(!1), [h, m] = ie(null), [S, p] = J.useState(0), [A, T] = J.useState(null), w = e?.config, x = e?.config, N = x?.["popup.form"] ? "popup.form" : (x?.form, "form"), j = x?.[N] && Object.keys(x?.[N]).length > 0, c = (M) => {
    let P = me(M.data);
    T(P);
  }, k = (M) => {
    T(M), p((P) => P + 1);
  }, I = (M) => {
    let P = me(M.data);
    m(P), d(!0);
  }, G = async () => {
    if (h?.id) {
      if (!r) {
        window.alert("Delete configuration missing.");
        return;
      }
      try {
        let M = e?.config;
        const P = M?.["popup.form"] ? "popup.form" : (M?.form, "form"), $ = M?.[P];
        if (!$?.source) throw new Error("Form source missing");
        let K = !1, X;
        $?.source?.dbopsid && (K = !0, X = $?.source?.dbopsid);
        const Q = await H({
          method: "GET",
          url: r.baseURL + r.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${r.accessToken}`
          }
        });
        if (!K) {
          let U = { ...$.source, refid: h.id };
          $.source.where && (U = {
            ...U,
            where: he($.source.where, {
              refid: h?.id
            })
          }), X = (await H({
            method: "POST",
            url: r.baseURL + r.dbopsGetRefId,
            data: {
              operation: "update",
              source: U,
              fields: $.fields,
              forcefill: $.forcefill,
              datahash: Q.data.refhash,
              scrid: y?.module_refid
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
            refid: X,
            fields: { blocked: "true" },
            datahash: Q.data.refhash,
            refid1: h?.id
          },
          headers: {
            Authorization: `Bearer ${r.accessToken}`
          }
        }), window.alert("Record deleted successfully."), p((U) => U + 1);
      } catch (M) {
        console.error(M), window.alert("Failed to delete record. Please try again");
      } finally {
        m(null), d(!1);
      }
    }
  }, B = () => {
    m(null), d(!1);
  };
  return /* @__PURE__ */ a.jsx(a.Fragment, { children: o ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      o,
      {
        methods: { ...t, deleteRecord: I, editRecord: c },
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
          actions: { ...w?.actions, ...y?.buttons, ...y.actions },
          datagrid: w?.datagrid,
          buttons: w?.buttons,
          refresh: S
        },
        onButtonClick: l
      }
    ),
    j && /* @__PURE__ */ a.jsx(
      Do,
      {
        formJson: {
          ...x[N],
          source: {
            ...x?.[N].source,
            refid: A?.id
          },
          endPoints: {
            ...r,
            operation: A ? "update" : "create"
          }
        },
        methods: t,
        initialvalues: A ?? {},
        setEditData: k,
        module_refid: y?.module_refid
      }
    ),
    /* @__PURE__ */ a.jsx(
      Lo,
      {
        open: f,
        onConfirm: G,
        onCancel: B
      }
    )
  ] }) : /* @__PURE__ */ a.jsx("p", { children: "Report not available" }) });
}
function wr(e, t) {
  if (!e || !t) return null;
  const n = t[e];
  if (J.isValidElement(n))
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
  const [y, f] = ie(!1), d = Rt(null);
  return Se(() => {
    const h = (m) => {
      d.current && !d.current.contains(m.target) && f(!1);
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
            onClick: () => f(!y),
            className: "ml-1 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200",
            children: "⋮"
          }
        ),
        y && /* @__PURE__ */ a.jsx("div", { className: "absolute right-0 mt-2 w-48 max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-30", children: t.map((h, m) => /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              n(m), f(!1);
            },
            className: `w-full text-left px-3 py-2 text-sm truncate hover:bg-gray-100 ${r === m ? "bg-gray-50 font-semibold text-action" : "text-gray-700"}`,
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
        children: t.length > 0 ? t.map((h, m) => /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            onClick: () => n(m),
            className: `relative cursor-pointer flex-shrink-0
            min-w-[8rem]   
            py-2 px-8
            rounded-t-lg text-xs sm:text-sm font-semibold
            transition-all duration-300 ease-out
            focus:outline-none whitespace-nowrap
            ${r === m ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
            children: /* @__PURE__ */ a.jsx("span", { className: "relative z-10 flex items-center justify-center gap-1 sm:gap-2", children: /* @__PURE__ */ a.jsx("span", { className: "truncate", children: e[h]?.label || h }) })
          },
          h
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
  refid: y,
  sqlOpsUrls: f,
  module_refid: d,
  fieldOptions: h,
  setFieldOptions: m,
  buttons: S,
  handleAction: p,
  components: A
}) => {
  let T = S ? Object.entries(S).filter(([N, j]) => j.groups ? j.groups.includes(e[t]) : !0) : [];
  async function w(N, j) {
    const c = l?.[N];
    if (c) {
      try {
        await c();
      } catch (k) {
        console.error("Method execution failed:", k);
      }
      return;
    }
    p?.({ [N]: j }, s);
  }
  const x = wr(r?.component, A);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "bg-white rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex-1 flex flex-col min-h-0",
      children: [
        e.length > 0 ? r?.type === "fields" && r?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: n?.fieldGridClass || "grid grid-cols-12 gap-2", children: r.fields.map((N, j) => /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${ct[ut(N.width)] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ a.jsx(
              dt,
              {
                field: N,
                data: s ?? {},
                methods: l,
                refid: y,
                sqlOpsUrls: f,
                module_refid: d,
                setFieldOptions: m,
                ...h[N.name] ? { optionsOverride: h[N.name] } : {}
              }
            )
          },
          N?.name ?? `field-${j}`
        )) }) }) : r?.type === "component" && x ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: x }) : r ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: i(r, e[t] || "") }) : null : /* @__PURE__ */ a.jsx("div", { className: "flex-1 col-span-full text-center py-8 text-gray-500", children: "No data available" }),
        /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: T && T.map(([N, j]) => /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => w(N, j),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: j.label
          },
          N
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
              e.slice(0, 5).map((N, j) => /* @__PURE__ */ a.jsx(
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
          /* @__PURE__ */ a.jsx("div", { className: "flex gap-1", children: e.map((N, j) => /* @__PURE__ */ a.jsx(
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
  refid: y,
  Reports: f,
  toast: d = {},
  handleAction: h = () => {
  },
  infoViewJson: m,
  fieldOptions: S,
  setFieldOptions: p,
  components: A
}) {
  const [T, w] = ie(0), [x, N] = ie(!1), j = Rt(null), c = Object.keys(e);
  Se(() => {
    const K = () => {
      if (j.current) {
        const X = j.current;
        N(X.scrollWidth > X.clientWidth);
      }
    };
    return K(), window.addEventListener("resize", K), () => window.removeEventListener("resize", K);
  }, [c.length]), Se(() => {
    if (j.current && c.length > 0) {
      const K = j.current.children[T];
      K && K.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [T, c.length]);
  const k = i === "tableft", I = i === "tabright", G = !k && !I, B = e[c[T] ?? ""] || null, M = {
    single: (K, X) => /* @__PURE__ */ a.jsx(xr, { fieldOptions: S, setFieldOptions: p, module_refid: m.module_refid, tabObj: K, methods: t, tabName: X, sqlOpsUrls: l, refid: y }),
    grid: (K, X) => /* @__PURE__ */ a.jsx(
      br,
      {
        ...f ? { Reports: f } : {},
        toast: d,
        handleAction: h,
        tabObj: K,
        methods: t,
        tabName: X,
        sqlOpsUrls: l,
        refid: y,
        infoViewJson: m
      }
    )
  }, P = B?.config?.uimode, $ = r[P] || M[P] || (() => /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No UI mode for this type" }));
  return G ? /* @__PURE__ */ a.jsxs("div", { className: "flex-1 flex flex-col min-h-0 ", children: [
    /* @__PURE__ */ a.jsx(
      ko,
      {
        groupNames: c,
        groups: e,
        setActiveTabIndex: w,
        activeTabIndex: T,
        tabsNavRef: j,
        isCommonInfo: s,
        showScrollHint: x,
        layoutConfig: o
      }
    ),
    /* @__PURE__ */ a.jsx(
      mn,
      {
        groupNames: c,
        activeTabIndex: T,
        layoutConfig: o,
        tabObj: B,
        infoData: n,
        setActiveTabIndex: w,
        renderView: $,
        groups: e,
        methods: t,
        refid: y,
        sqlOpsUrls: l,
        module_refid: m.module_refid,
        fieldOptions: S,
        setFieldOptions: p,
        buttons: m.buttons,
        handleAction: h,
        ...A ? { components: A } : {}
      }
    )
  ] }) : /* @__PURE__ */ a.jsxs("div", { className: "flex-1 flex min-h-0", children: [
    k && /* @__PURE__ */ a.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ a.jsx(
      fn,
      {
        groupNames: c,
        groups: e,
        setActiveTabIndex: w,
        activeTabIndex: T
      }
    ) }),
    /* @__PURE__ */ a.jsx("main", { className: "flex-1 flex flex-col min-h-0 overflow-auto", children: /* @__PURE__ */ a.jsx(
      mn,
      {
        groupNames: c,
        activeTabIndex: T,
        layoutConfig: o,
        tabObj: B,
        infoData: n,
        setActiveTabIndex: w,
        renderView: $,
        groups: e,
        methods: t,
        refid: y,
        module_refid: m.module_refid,
        sqlOpsUrls: l,
        fieldOptions: S,
        setFieldOptions: p,
        handleAction: h,
        ...A ? { components: A } : {}
      }
    ) }),
    I && /* @__PURE__ */ a.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ a.jsx(
      fn,
      {
        groupNames: c,
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
  handleAction: y = () => {
  },
  infoViewJson: f,
  fieldOptions: d,
  setFieldOptions: h,
  components: m
}) {
  const S = {
    single: (w, x) => /* @__PURE__ */ a.jsx(
      xr,
      {
        tabObj: w,
        methods: t,
        tabName: x,
        sqlOpsUrls: s,
        fieldOptions: d,
        setFieldOptions: h,
        refid: o,
        module_refid: f?.module_refid
      }
    ),
    grid: (w, x) => /* @__PURE__ */ a.jsx(
      br,
      {
        ...i ? { Reports: i } : {},
        toast: l,
        infoViewJson: f,
        handleAction: y,
        tabObj: w,
        methods: t,
        tabName: x,
        sqlOpsUrls: s,
        refid: o
      }
    )
  }, p = f?.buttons;
  let A = p ? Object.entries(p).filter(([w, x]) => !(x.groups && x.groups.length > 0)) : [];
  async function T(w, x) {
    const N = t?.[w];
    if (N) {
      try {
        await N();
      } catch (j) {
        console.error("Method execution failed:", j);
      }
      return;
    }
    y?.({ [w]: x }, n);
  }
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ a.jsx("div", { className: "mx-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "space-y-1 flex flex-col min-h-0", children: [
    e && Object.entries(e).map(([w, x], N) => {
      let j = p ? Object.entries(p).filter(([k, I]) => I.groups ? I.groups.includes(w) : !1) : [];
      const c = wr(x.component, m);
      return /* @__PURE__ */ a.jsxs(Fo, { title: x.label, isFirst: N === 0, children: [
        x?.type === "fields" && x?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: x.fields.map((k, I) => /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${ct[ut(k.width)] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ a.jsx(
              dt,
              {
                module_refid: f?.module_refid,
                methods: t,
                field: k,
                data: n ?? {},
                setFieldOptions: h,
                ...d[k.name] ? { optionsOverride: d[k.name] } : {},
                sqlOpsUrls: s,
                refid: o
              }
            )
          },
          k?.name ?? `field-${I}`
        )) }) }) : x?.type === "component" && c ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: c }) : x ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: r[x.config?.uimode]?.(x) || S[x.config?.uimode]?.(x, w) || /* @__PURE__ */ a.jsx("div", { children: "No renderer for this type" }) }) : null,
        /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: j && j.map(([k, I]) => /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => T(k, I),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: I.label
          },
          k
        )) })
      ] }, w);
    }),
    /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: A && A.map(([w, x]) => /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => T(w, x),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: x.label
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
  handleAction: y = () => {
  },
  infoViewJson: f,
  fieldOptions: d,
  setFieldOptions: h,
  components: m
}) {
  const S = {
    single: (w, x) => /* @__PURE__ */ a.jsx(xr, { fieldOptions: d, setFieldOptions: h, module_refid: f?.module_refid, tabObj: w, methods: t, tabName: x, sqlOpsUrls: s, refid: o }),
    grid: (w, x) => /* @__PURE__ */ a.jsx(
      br,
      {
        ...i ? { Reports: i } : {},
        toast: l,
        handleAction: y,
        tabObj: w,
        methods: t,
        tabName: x,
        sqlOpsUrls: s,
        refid: o,
        infoViewJson: f
      }
    )
  }, p = f?.buttons;
  let A = p ? Object.entries(p).filter(([w, x]) => !(x.groups && x.groups.length > 0)) : [];
  async function T(w, x) {
    const N = t?.[w];
    if (N) {
      try {
        await N();
      } catch (j) {
        console.error("Method execution failed:", j);
      }
      return;
    }
    y?.({ [w]: x }, n);
  }
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ a.jsx("div", { className: "mx-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "space-y-2  flex flex-col min-h-0", children: [
    e && Object.entries(e).map(([w, x], N) => {
      let j = p ? Object.entries(p).filter(([k, I]) => I.groups ? I.groups.includes(w) : !1) : [];
      const c = wr(x.component, m);
      return /* @__PURE__ */ a.jsxs($o, { title: x.label, children: [
        x?.type === "fields" && x?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: x.fields.map((k, I) => /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${ct[ut(k.width)] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ a.jsx(
              dt,
              {
                module_refid: f?.module_refid,
                methods: t,
                field: k,
                data: n ?? {},
                setFieldOptions: h,
                ...d[k.name] ? { optionsOverride: d[k.name] } : {},
                sqlOpsUrls: s,
                refid: o
              }
            )
          },
          k?.name ?? `field-${I}`
        )) }) }) : x?.type === "component" && c ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: c }) : x ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: r[x.config?.uimode]?.(x) || S[x.config?.uimode]?.(x, w) || /* @__PURE__ */ a.jsx("div", { children: "No renderer for this type" }) }) : null,
        /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: j && j.map(([k, I]) => /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => T(k, I),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: I.label
          },
          k
        )) })
      ] }, w);
    }),
    /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: A && A.map(([w, x]) => /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => T(w, x),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: x.label
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
  toast: y = {},
  handleAction: f = () => {
  },
  components: d
}) {
  const [h, m] = J.useState({}), S = co(e.infoview ?? {}), p = e.endPoints, A = J.useMemo(
    () => r(e.fields || {}),
    [e.fields, r]
  ), [T, w] = J.useState({}), x = (I, G) => {
    w((B) => ({ ...B, [I]: G }));
  }, N = e?.source?.refid;
  let j = { ...A };
  e.infoview?.groups && (j = { ...j, ...e.infoview.groups }), J.useEffect(() => {
    let I = !1;
    return (async () => {
      const B = e?.source;
      if (!B?.type) {
        I || m({});
        return;
      }
      if (B.type === "method") {
        const M = B.method, P = M ? i[M] : void 0;
        if (P)
          try {
            const $ = await Promise.resolve(P());
            I || m($ || {});
          } catch ($) {
            console.error("Method execution failed:", $), I || m({});
          }
        else
          I || m({});
      }
      if (B.type === "api")
        try {
          const M = await H({
            method: B.method || "GET",
            url: B.url,
            data: B.body || {},
            params: B.params || {},
            headers: B.headers || {}
          });
          I || m(M.data || {});
        } catch (M) {
          console.error("API fetch failed:", M), I || m({});
        }
      if (B.type === "sql" && B.refid && B.refid != "0" || B.dbopsid) {
        if (!p) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let M = !1, P;
          B?.dbopsid && (M = !0, P = B?.dbopsid);
          const $ = await H({
            method: "GET",
            url: p.baseURL + p.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${p?.accessToken}`
            }
          });
          if (!M) {
            let Q = {
              ...B
            };
            B.where && (Q = {
              ...B,
              where: he(B.where, {
                refid: N
              })
            }), P = (await H({
              method: "POST",
              url: p.baseURL + p.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: Q,
                fields: Ot(e.fields, p.operation),
                forcefill: e.forcefill,
                datahash: $.data.refhash,
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
              refid: P,
              datahash: $.data.refhash,
              module_refid: e.module_refid
            },
            headers: {
              Authorization: `Bearer ${p?.accessToken}`
            }
          }), X = Gn(K) ?? {};
          I || m(X);
        } catch (M) {
          console.error("API fetch failed:", M);
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
  const c = j.common || null;
  c && delete j.common;
  const k = (I) => {
    switch (I) {
      case "accordion":
        return /* @__PURE__ */ a.jsx(
          Mo,
          {
            groups: j,
            methods: i,
            infoData: h,
            viewRenderers: o,
            sqlOpsUrls: p,
            refid: N,
            ...l ? { Reports: l } : {},
            toast: y,
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
          hn,
          {
            groups: j,
            viewRenderers: o,
            layoutConfig: s,
            methods: i,
            infoData: h,
            isCommonInfo: !!c,
            viewMode: I,
            sqlOpsUrls: p,
            refid: N,
            ...l ? { Reports: l } : {},
            toast: y,
            handleAction: f,
            infoViewJson: e,
            setFieldOptions: x,
            fieldOptions: T,
            ...d ? { components: d } : {}
          }
        );
      case "cards":
        return /* @__PURE__ */ a.jsx(
          Bo,
          {
            groups: j,
            viewRenderers: o,
            methods: i,
            infoData: h,
            sqlOpsUrls: p,
            refid: N,
            ...l ? { Reports: l } : {},
            toast: y,
            handleAction: f,
            infoViewJson: e,
            setFieldOptions: x,
            fieldOptions: T,
            ...d ? { components: d } : {}
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
            infoData: h,
            isCommonInfo: !!c,
            viewMode: I,
            sqlOpsUrls: p,
            refid: N,
            ...l ? { Reports: l } : {},
            toast: y,
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
    c && p && /* @__PURE__ */ a.jsx(
      Oo,
      {
        commonInfo: c,
        infoData: h,
        hiddenFields: n,
        sqlOpsUrls: p,
        setFieldOptions: x,
        fieldOptions: T,
        module_refid: e.module_refid,
        refid: N,
        methods: i
      }
    ),
    k(S)
  ] });
}
export {
  li as InfoView
};
