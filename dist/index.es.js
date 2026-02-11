import Y, { useState as ae, useEffect as je, useLayoutEffect as es, useRef as jt, useMemo as Fr } from "react";
import * as pe from "yup";
import { useFormik as ts } from "formik";
import { createPortal as rs } from "react-dom";
var xt = { exports: {} }, Ke = {};
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
  if (Mr) return Ke;
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
  return Ke.Fragment = t, Ke.jsx = n, Ke.jsxs = n, Ke;
}
var Ye = {};
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
    function e(x) {
      if (x == null) return null;
      if (typeof x == "function")
        return x.$$typeof === B ? null : x.displayName || x.name || null;
      if (typeof x == "string") return x;
      switch (x) {
        case N:
          return "Fragment";
        case w:
          return "Profiler";
        case j:
          return "StrictMode";
        case c:
          return "Suspense";
        case I:
          return "SuspenseList";
        case k:
          return "Activity";
      }
      if (typeof x == "object")
        switch (typeof x.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), x.$$typeof) {
          case h:
            return "Portal";
          case v:
            return (x.displayName || "Context") + ".Provider";
          case y:
            return (x._context.displayName || "Context") + ".Consumer";
          case T:
            var E = x.render;
            return x = x.displayName, x || (x = E.displayName || E.name || "", x = x !== "" ? "ForwardRef(" + x + ")" : "ForwardRef"), x;
          case O:
            return E = x.displayName || null, E !== null ? E : e(x.type) || "Memo";
          case $:
            E = x._payload, x = x._init;
            try {
              return e(x(E));
            } catch {
            }
        }
      return null;
    }
    function t(x) {
      return "" + x;
    }
    function n(x) {
      try {
        t(x);
        var E = !1;
      } catch {
        E = !0;
      }
      if (E) {
        E = console;
        var C = E.error, L = typeof Symbol == "function" && Symbol.toStringTag && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return C.call(
          E,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          L
        ), t(x);
      }
    }
    function r(x) {
      if (x === N) return "<>";
      if (typeof x == "object" && x !== null && x.$$typeof === $)
        return "<...>";
      try {
        var E = e(x);
        return E ? "<" + E + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var x = U.A;
      return x === null ? null : x.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(x) {
      if (W.call(x, "key")) {
        var E = Object.getOwnPropertyDescriptor(x, "key").get;
        if (E && E.isReactWarning) return !1;
      }
      return x.key !== void 0;
    }
    function l(x, E) {
      function C() {
        Q || (Q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          E
        ));
      }
      C.isReactWarning = !0, Object.defineProperty(x, "key", {
        get: C,
        configurable: !0
      });
    }
    function g() {
      var x = e(this.type);
      return z[x] || (z[x] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), x = this.props.ref, x !== void 0 ? x : null;
    }
    function f(x, E, C, L, P, M, ee, ue) {
      return C = M.ref, x = {
        $$typeof: R,
        type: x,
        key: E,
        props: M,
        _owner: P
      }, (C !== void 0 ? C : null) !== null ? Object.defineProperty(x, "ref", {
        enumerable: !1,
        get: g
      }) : Object.defineProperty(x, "ref", { enumerable: !1, value: null }), x._store = {}, Object.defineProperty(x._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(x, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(x, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ee
      }), Object.defineProperty(x, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ue
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    }
    function d(x, E, C, L, P, M, ee, ue) {
      var X = E.children;
      if (X !== void 0)
        if (L)
          if (K(X)) {
            for (L = 0; L < X.length; L++)
              m(X[L]);
            Object.freeze && Object.freeze(X);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(X);
      if (W.call(E, "key")) {
        X = e(x);
        var xe = Object.keys(E).filter(function(ut) {
          return ut !== "key";
        });
        L = 0 < xe.length ? "{key: someKey, " + xe.join(": ..., ") + ": ...}" : "{key: someKey}", _[X + L] || (xe = 0 < xe.length ? "{" + xe.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          L,
          X,
          xe,
          X
        ), _[X + L] = !0);
      }
      if (X = null, C !== void 0 && (n(C), X = "" + C), i(E) && (n(E.key), X = "" + E.key), "key" in E) {
        C = {};
        for (var Se in E)
          Se !== "key" && (C[Se] = E[Se]);
      } else C = E;
      return X && l(
        C,
        typeof x == "function" ? x.displayName || x.name || "Unknown" : x
      ), f(
        x,
        X,
        M,
        P,
        s(),
        C,
        ee,
        ue
      );
    }
    function m(x) {
      typeof x == "object" && x !== null && x.$$typeof === R && x._store && (x._store.validated = 1);
    }
    var b = Y, R = Symbol.for("react.transitional.element"), h = Symbol.for("react.portal"), N = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), v = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), k = Symbol.for("react.activity"), B = Symbol.for("react.client.reference"), U = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, K = Array.isArray, J = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(x) {
        return x();
      }
    };
    var Q, z = {}, V = b.react_stack_bottom_frame.bind(
      b,
      o
    )(), A = J(r(o)), _ = {};
    Ye.Fragment = N, Ye.jsx = function(x, E, C, L, P) {
      var M = 1e4 > U.recentlyCreatedOwnerStacks++;
      return d(
        x,
        E,
        C,
        !1,
        L,
        P,
        M ? Error("react-stack-top-frame") : V,
        M ? J(r(x)) : A
      );
    }, Ye.jsxs = function(x, E, C, L, P) {
      var M = 1e4 > U.recentlyCreatedOwnerStacks++;
      return d(
        x,
        E,
        C,
        !0,
        L,
        P,
        M ? Error("react-stack-top-frame") : V,
        M ? J(r(x)) : A
      );
    };
  }()), Ye;
}
var Br;
function as() {
  return Br || (Br = 1, process.env.NODE_ENV === "production" ? xt.exports = ns() : xt.exports = ss()), xt.exports;
}
var a = as();
function pn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: os } = Object.prototype, { getPrototypeOf: mr } = Object, { iterator: Ct, toStringTag: gn } = Symbol, Ot = /* @__PURE__ */ ((e) => (t) => {
  const n = os.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ee = (e) => (e = e.toLowerCase(), (t) => Ot(t) === e), Lt = (e) => (t) => typeof t === e, { isArray: He } = Array, rt = Lt("undefined");
function nt(e) {
  return e !== null && !rt(e) && e.constructor !== null && !rt(e.constructor) && me(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const yn = Ee("ArrayBuffer");
function is(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && yn(e.buffer), t;
}
const ls = Lt("string"), me = Lt("function"), xn = Lt("number"), st = (e) => e !== null && typeof e == "object", cs = (e) => e === !0 || e === !1, vt = (e) => {
  if (Ot(e) !== "object")
    return !1;
  const t = mr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(gn in e) && !(Ct in e);
}, us = (e) => {
  if (!st(e) || nt(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, ds = Ee("Date"), fs = Ee("File"), ms = Ee("Blob"), hs = Ee("FileList"), ps = (e) => st(e) && me(e.pipe), gs = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || me(e.append) && ((t = Ot(e)) === "formdata" || // detect form-data instance
  t === "object" && me(e.toString) && e.toString() === "[object FormData]"));
}, ys = Ee("URLSearchParams"), [xs, bs, ws, Es] = ["ReadableStream", "Request", "Response", "Headers"].map(Ee), vs = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function at(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), He(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (nt(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let l;
    for (r = 0; r < i; r++)
      l = o[r], t.call(null, e[l], l, e);
  }
}
function bn(e, t) {
  if (nt(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const Ie = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, wn = (e) => !rt(e) && e !== Ie;
function nr() {
  const { caseless: e } = wn(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && bn(t, s) || s;
    vt(t[o]) && vt(r) ? t[o] = nr(t[o], r) : vt(r) ? t[o] = nr({}, r) : He(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && at(arguments[r], n);
  return t;
}
const Ns = (e, t, n, { allOwnKeys: r } = {}) => (at(t, (s, o) => {
  n && me(s) ? e[o] = pn(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), As = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ts = (e, t, n, r) => {
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
    e = n !== !1 && mr(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Ss = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Rs = (e) => {
  if (!e) return null;
  if (He(e)) return e;
  let t = e.length;
  if (!xn(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, _s = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && mr(Uint8Array)), Cs = (e, t) => {
  const r = (e && e[Ct]).call(e);
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
}, Ls = Ee("HTMLFormElement"), Is = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Ur = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Ps = Ee("RegExp"), En = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  at(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, Ds = (e) => {
  En(e, (t, n) => {
    if (me(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (me(r)) {
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
  return He(e) ? r(e) : r(String(e).split(t)), n;
}, Fs = () => {
}, Ms = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function $s(e) {
  return !!(e && me(e.append) && e[gn] === "FormData" && e[Ct]);
}
const Bs = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (st(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (nt(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = He(r) ? [] : {};
        return at(r, (i, l) => {
          const g = n(i, s + 1);
          !rt(g) && (o[l] = g);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, Us = Ee("AsyncFunction"), zs = (e) => e && (st(e) || me(e)) && me(e.then) && me(e.catch), vn = ((e, t) => e ? setImmediate : t ? ((n, r) => (Ie.addEventListener("message", ({ source: s, data: o }) => {
  s === Ie && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), Ie.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  me(Ie.postMessage)
), Hs = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ie) : typeof process < "u" && process.nextTick || vn, Ws = (e) => e != null && me(e[Ct]), p = {
  isArray: He,
  isArrayBuffer: yn,
  isBuffer: nt,
  isFormData: gs,
  isArrayBufferView: is,
  isString: ls,
  isNumber: xn,
  isBoolean: cs,
  isObject: st,
  isPlainObject: vt,
  isEmptyObject: us,
  isReadableStream: xs,
  isRequest: bs,
  isResponse: ws,
  isHeaders: Es,
  isUndefined: rt,
  isDate: ds,
  isFile: fs,
  isBlob: ms,
  isRegExp: Ps,
  isFunction: me,
  isStream: ps,
  isURLSearchParams: ys,
  isTypedArray: _s,
  isFileList: hs,
  forEach: at,
  merge: nr,
  extend: Ns,
  trim: vs,
  stripBOM: As,
  inherits: Ts,
  toFlatObject: js,
  kindOf: Ot,
  kindOfTest: Ee,
  endsWith: Ss,
  toArray: Rs,
  forEachEntry: Cs,
  matchAll: Os,
  isHTMLForm: Ls,
  hasOwnProperty: Ur,
  hasOwnProp: Ur,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: En,
  freezeMethods: Ds,
  toObjectSet: ks,
  toCamelCase: Is,
  noop: Fs,
  toFiniteNumber: Ms,
  findKey: bn,
  global: Ie,
  isContextDefined: wn,
  isSpecCompliantForm: $s,
  toJSONObject: Bs,
  isAsyncFn: Us,
  isThenable: zs,
  setImmediate: vn,
  asap: Hs,
  isIterable: Ws
};
function q(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
p.inherits(q, Error, {
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
      config: p.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Nn = q.prototype, An = {};
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
  An[e] = { value: e };
});
Object.defineProperties(q, An);
Object.defineProperty(Nn, "isAxiosError", { value: !0 });
q.from = (e, t, n, r, s, o) => {
  const i = Object.create(Nn);
  return p.toFlatObject(e, i, function(g) {
    return g !== Error.prototype;
  }, (l) => l !== "isAxiosError"), q.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const qs = null;
function sr(e) {
  return p.isPlainObject(e) || p.isArray(e);
}
function Tn(e) {
  return p.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function zr(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = Tn(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Gs(e) {
  return p.isArray(e) && !e.some(sr);
}
const Ks = p.toFlatObject(p, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function It(e, t, n) {
  if (!p.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = p.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(N, j) {
    return !p.isUndefined(j[N]);
  });
  const r = n.metaTokens, s = n.visitor || d, o = n.dots, i = n.indexes, g = (n.Blob || typeof Blob < "u" && Blob) && p.isSpecCompliantForm(t);
  if (!p.isFunction(s))
    throw new TypeError("visitor must be a function");
  function f(h) {
    if (h === null) return "";
    if (p.isDate(h))
      return h.toISOString();
    if (p.isBoolean(h))
      return h.toString();
    if (!g && p.isBlob(h))
      throw new q("Blob is not supported. Use a Buffer instead.");
    return p.isArrayBuffer(h) || p.isTypedArray(h) ? g && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function d(h, N, j) {
    let w = h;
    if (h && !j && typeof h == "object") {
      if (p.endsWith(N, "{}"))
        N = r ? N : N.slice(0, -2), h = JSON.stringify(h);
      else if (p.isArray(h) && Gs(h) || (p.isFileList(h) || p.endsWith(N, "[]")) && (w = p.toArray(h)))
        return N = Tn(N), w.forEach(function(v, T) {
          !(p.isUndefined(v) || v === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? zr([N], T, o) : i === null ? N : N + "[]",
            f(v)
          );
        }), !1;
    }
    return sr(h) ? !0 : (t.append(zr(j, N, o), f(h)), !1);
  }
  const m = [], b = Object.assign(Ks, {
    defaultVisitor: d,
    convertValue: f,
    isVisitable: sr
  });
  function R(h, N) {
    if (!p.isUndefined(h)) {
      if (m.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + N.join("."));
      m.push(h), p.forEach(h, function(w, y) {
        (!(p.isUndefined(w) || w === null) && s.call(
          t,
          w,
          p.isString(y) ? y.trim() : y,
          N,
          b
        )) === !0 && R(w, N ? N.concat(y) : [y]);
      }), m.pop();
    }
  }
  if (!p.isObject(e))
    throw new TypeError("data must be an object");
  return R(e), t;
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
function hr(e, t) {
  this._pairs = [], e && It(e, this, t);
}
const jn = hr.prototype;
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
  p.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = p.isURLSearchParams(t) ? t.toString() : new hr(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Wr {
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
    p.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Rn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Vs = typeof URLSearchParams < "u" ? URLSearchParams : hr, Xs = typeof FormData < "u" ? FormData : null, Qs = typeof Blob < "u" ? Blob : null, Zs = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Vs,
    FormData: Xs,
    Blob: Qs
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, pr = typeof window < "u" && typeof document < "u", ar = typeof navigator == "object" && navigator || void 0, Js = pr && (!ar || ["ReactNative", "NativeScript", "NS"].indexOf(ar.product) < 0), ea = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ta = pr && window.location.href || "http://localhost", ra = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: pr,
  hasStandardBrowserEnv: Js,
  hasStandardBrowserWebWorkerEnv: ea,
  navigator: ar,
  origin: ta
}, Symbol.toStringTag, { value: "Module" })), oe = {
  ...ra,
  ...Zs
};
function na(e, t) {
  return It(e, new oe.classes.URLSearchParams(), {
    visitor: function(n, r, s, o) {
      return oe.isNode && p.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function sa(e) {
  return p.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
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
    return i = !i && p.isArray(s) ? s.length : i, g ? (p.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !l) : ((!s[i] || !p.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && p.isArray(s[i]) && (s[i] = aa(s[i])), !l);
  }
  if (p.isFormData(e) && p.isFunction(e.entries)) {
    const n = {};
    return p.forEachEntry(e, (r, s) => {
      t(sa(r), s, n, 0);
    }), n;
  }
  return null;
}
function oa(e, t, n) {
  if (p.isString(e))
    try {
      return (t || JSON.parse)(e), p.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const ot = {
  transitional: Rn,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = p.isObject(t);
    if (o && p.isHTMLForm(t) && (t = new FormData(t)), p.isFormData(t))
      return s ? JSON.stringify(_n(t)) : t;
    if (p.isArrayBuffer(t) || p.isBuffer(t) || p.isStream(t) || p.isFile(t) || p.isBlob(t) || p.isReadableStream(t))
      return t;
    if (p.isArrayBufferView(t))
      return t.buffer;
    if (p.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return na(t, this.formSerializer).toString();
      if ((l = p.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const g = this.env && this.env.FormData;
        return It(
          l ? { "files[]": t } : t,
          g && new g(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), oa(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || ot.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (p.isResponse(t) || p.isReadableStream(t))
      return t;
    if (t && p.isString(t) && (r && !this.responseType || s)) {
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
    FormData: oe.classes.FormData,
    Blob: oe.classes.Blob
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
p.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ot.headers[e] = {};
});
const ia = p.toObjectSet([
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
}, qr = Symbol("internals");
function Ve(e) {
  return e && String(e).trim().toLowerCase();
}
function Nt(e) {
  return e === !1 || e == null ? e : p.isArray(e) ? e.map(Nt) : String(e);
}
function ca(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const ua = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Gt(e, t, n, r, s) {
  if (p.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!p.isString(t)) {
    if (p.isString(r))
      return t.indexOf(r) !== -1;
    if (p.isRegExp(r))
      return r.test(t);
  }
}
function da(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function fa(e, t) {
  const n = p.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
let he = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(l, g, f) {
      const d = Ve(g);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const m = p.findKey(s, d);
      (!m || s[m] === void 0 || f === !0 || f === void 0 && s[m] !== !1) && (s[m || g] = Nt(l));
    }
    const i = (l, g) => p.forEach(l, (f, d) => o(f, d, g));
    if (p.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (p.isString(t) && (t = t.trim()) && !ua(t))
      i(la(t), n);
    else if (p.isObject(t) && p.isIterable(t)) {
      let l = {}, g, f;
      for (const d of t) {
        if (!p.isArray(d))
          throw TypeError("Object iterator must return a key-value pair");
        l[f = d[0]] = (g = l[f]) ? p.isArray(g) ? [...g, d[1]] : [g, d[1]] : d[1];
      }
      i(l, n);
    } else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Ve(t), t) {
      const r = p.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return ca(s);
        if (p.isFunction(n))
          return n.call(this, s, r);
        if (p.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Ve(t), t) {
      const r = p.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Gt(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = Ve(i), i) {
        const l = p.findKey(r, i);
        l && (!n || Gt(r, r[l], l, n)) && (delete r[l], s = !0);
      }
    }
    return p.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Gt(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return p.forEach(this, (s, o) => {
      const i = p.findKey(r, o);
      if (i) {
        n[i] = Nt(s), delete n[o];
        return;
      }
      const l = t ? da(o) : String(o).trim();
      l !== o && delete n[o], n[l] = Nt(s), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return p.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && p.isArray(r) ? r.join(", ") : r);
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
    const r = (this[qr] = this[qr] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const l = Ve(i);
      r[l] || (fa(s, i), r[l] = !0);
    }
    return p.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
he.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
p.reduceDescriptors(he.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
p.freezeMethods(he);
function Kt(e, t) {
  const n = this || ot, r = t || n, s = he.from(r.headers);
  let o = r.data;
  return p.forEach(e, function(l) {
    o = l.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Cn(e) {
  return !!(e && e.__CANCEL__);
}
function We(e, t, n) {
  q.call(this, e ?? "canceled", q.ERR_CANCELED, t, n), this.name = "CanceledError";
}
p.inherits(We, q, {
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
    const f = Date.now(), d = r[o];
    i || (i = f), n[s] = g, r[s] = f;
    let m = o, b = 0;
    for (; m !== s; )
      b += n[m++], m = m % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), f - i < t)
      return;
    const R = d && f - d;
    return R ? Math.round(b * 1e3 / R) : void 0;
  };
}
function pa(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const i = (f, d = Date.now()) => {
    n = d, s = null, o && (clearTimeout(o), o = null), e(...f);
  };
  return [(...f) => {
    const d = Date.now(), m = d - n;
    m >= r ? i(f, d) : (s = f, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - m)));
  }, () => s && i(s)];
}
const St = (e, t, n = 3) => {
  let r = 0;
  const s = ha(50, 250);
  return pa((o) => {
    const i = o.loaded, l = o.lengthComputable ? o.total : void 0, g = i - r, f = s(g), d = i <= l;
    r = i;
    const m = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: g,
      rate: f || void 0,
      estimated: f && l && d ? (l - i) / f : void 0,
      event: o,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(m);
  }, n);
}, Gr = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Kr = (e) => (...t) => p.asap(() => e(...t)), ga = oe.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, oe.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(oe.origin),
  oe.navigator && /(msie|trident)/i.test(oe.navigator.userAgent)
) : () => !0, ya = oe.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      p.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), p.isString(r) && i.push("path=" + r), p.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
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
const Yr = (e) => e instanceof he ? { ...e } : e;
function De(e, t) {
  t = t || {};
  const n = {};
  function r(f, d, m, b) {
    return p.isPlainObject(f) && p.isPlainObject(d) ? p.merge.call({ caseless: b }, f, d) : p.isPlainObject(d) ? p.merge({}, d) : p.isArray(d) ? d.slice() : d;
  }
  function s(f, d, m, b) {
    if (p.isUndefined(d)) {
      if (!p.isUndefined(f))
        return r(void 0, f, m, b);
    } else return r(f, d, m, b);
  }
  function o(f, d) {
    if (!p.isUndefined(d))
      return r(void 0, d);
  }
  function i(f, d) {
    if (p.isUndefined(d)) {
      if (!p.isUndefined(f))
        return r(void 0, f);
    } else return r(void 0, d);
  }
  function l(f, d, m) {
    if (m in t)
      return r(f, d);
    if (m in e)
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
    headers: (f, d, m) => s(Yr(f), Yr(d), m, !0)
  };
  return p.forEach(Object.keys({ ...e, ...t }), function(d) {
    const m = g[d] || s, b = m(e[d], t[d], d);
    p.isUndefined(b) && m !== l || (n[d] = b);
  }), n;
}
const In = (e) => {
  const t = De({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: l } = t;
  t.headers = i = he.from(i), t.url = Sn(Ln(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), l && i.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let g;
  if (p.isFormData(n)) {
    if (oe.hasStandardBrowserEnv || oe.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((g = i.getContentType()) !== !1) {
      const [f, ...d] = g ? g.split(";").map((m) => m.trim()).filter(Boolean) : [];
      i.setContentType([f || "multipart/form-data", ...d].join("; "));
    }
  }
  if (oe.hasStandardBrowserEnv && (r && p.isFunction(r) && (r = r(t)), r || r !== !1 && ga(t.url))) {
    const f = s && o && ya.read(o);
    f && i.set(s, f);
  }
  return t;
}, wa = typeof XMLHttpRequest < "u", Ea = wa && function(e) {
  return new Promise(function(n, r) {
    const s = In(e);
    let o = s.data;
    const i = he.from(s.headers).normalize();
    let { responseType: l, onUploadProgress: g, onDownloadProgress: f } = s, d, m, b, R, h;
    function N() {
      R && R(), h && h(), s.cancelToken && s.cancelToken.unsubscribe(d), s.signal && s.signal.removeEventListener("abort", d);
    }
    let j = new XMLHttpRequest();
    j.open(s.method.toUpperCase(), s.url, !0), j.timeout = s.timeout;
    function w() {
      if (!j)
        return;
      const v = he.from(
        "getAllResponseHeaders" in j && j.getAllResponseHeaders()
      ), c = {
        data: !l || l === "text" || l === "json" ? j.responseText : j.response,
        status: j.status,
        statusText: j.statusText,
        headers: v,
        config: e,
        request: j
      };
      On(function(O) {
        n(O), N();
      }, function(O) {
        r(O), N();
      }, c), j = null;
    }
    "onloadend" in j ? j.onloadend = w : j.onreadystatechange = function() {
      !j || j.readyState !== 4 || j.status === 0 && !(j.responseURL && j.responseURL.indexOf("file:") === 0) || setTimeout(w);
    }, j.onabort = function() {
      j && (r(new q("Request aborted", q.ECONNABORTED, e, j)), j = null);
    }, j.onerror = function() {
      r(new q("Network Error", q.ERR_NETWORK, e, j)), j = null;
    }, j.ontimeout = function() {
      let T = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const c = s.transitional || Rn;
      s.timeoutErrorMessage && (T = s.timeoutErrorMessage), r(new q(
        T,
        c.clarifyTimeoutError ? q.ETIMEDOUT : q.ECONNABORTED,
        e,
        j
      )), j = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in j && p.forEach(i.toJSON(), function(T, c) {
      j.setRequestHeader(c, T);
    }), p.isUndefined(s.withCredentials) || (j.withCredentials = !!s.withCredentials), l && l !== "json" && (j.responseType = s.responseType), f && ([b, h] = St(f, !0), j.addEventListener("progress", b)), g && j.upload && ([m, R] = St(g), j.upload.addEventListener("progress", m), j.upload.addEventListener("loadend", R)), (s.cancelToken || s.signal) && (d = (v) => {
      j && (r(!v || v.type ? new We(null, e, j) : v), j.abort(), j = null);
    }, s.cancelToken && s.cancelToken.subscribe(d), s.signal && (s.signal.aborted ? d() : s.signal.addEventListener("abort", d)));
    const y = ma(s.url);
    if (y && oe.protocols.indexOf(y) === -1) {
      r(new q("Unsupported protocol " + y + ":", q.ERR_BAD_REQUEST, e));
      return;
    }
    j.send(o || null);
  });
}, va = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const o = function(f) {
      if (!s) {
        s = !0, l();
        const d = f instanceof Error ? f : this.reason;
        r.abort(d instanceof q ? d : new We(d instanceof Error ? d.message : d));
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
    return g.unsubscribe = () => p.asap(l), g;
  }
}, Na = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, Aa = async function* (e, t) {
  for await (const n of Ta(e))
    yield* Na(n, t);
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
  const s = Aa(e, t);
  let o = 0, i, l = (g) => {
    i || (i = !0, r && r(g));
  };
  return new ReadableStream({
    async pull(g) {
      try {
        const { done: f, value: d } = await s.next();
        if (f) {
          l(), g.close();
          return;
        }
        let m = d.byteLength;
        if (n) {
          let b = o += m;
          n(b);
        }
        g.enqueue(new Uint8Array(d));
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
}, Pt = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Pn = Pt && typeof ReadableStream == "function", ja = Pt && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Dn = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Sa = Pn && Dn(() => {
  let e = !1;
  const t = new Request(oe.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Xr = 64 * 1024, or = Pn && Dn(() => p.isReadableStream(new Response("").body)), Rt = {
  stream: or && ((e) => e.body)
};
Pt && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Rt[t] && (Rt[t] = p.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new q(`Response type '${t}' is not supported`, q.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Ra = async (e) => {
  if (e == null)
    return 0;
  if (p.isBlob(e))
    return e.size;
  if (p.isSpecCompliantForm(e))
    return (await new Request(oe.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (p.isArrayBufferView(e) || p.isArrayBuffer(e))
    return e.byteLength;
  if (p.isURLSearchParams(e) && (e = e + ""), p.isString(e))
    return (await ja(e)).byteLength;
}, _a = async (e, t) => {
  const n = p.toFiniteNumber(e.getContentLength());
  return n ?? Ra(t);
}, Ca = Pt && (async (e) => {
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
    headers: d,
    withCredentials: m = "same-origin",
    fetchOptions: b
  } = In(e);
  f = f ? (f + "").toLowerCase() : "text";
  let R = va([s, o && o.toAbortSignal()], i), h;
  const N = R && R.unsubscribe && (() => {
    R.unsubscribe();
  });
  let j;
  try {
    if (g && Sa && n !== "get" && n !== "head" && (j = await _a(d, r)) !== 0) {
      let c = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), I;
      if (p.isFormData(r) && (I = c.headers.get("content-type")) && d.setContentType(I), c.body) {
        const [O, $] = Gr(
          j,
          St(Kr(g))
        );
        r = Vr(c.body, Xr, O, $);
      }
    }
    p.isString(m) || (m = m ? "include" : "omit");
    const w = "credentials" in Request.prototype;
    h = new Request(t, {
      ...b,
      signal: R,
      method: n.toUpperCase(),
      headers: d.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: w ? m : void 0
    });
    let y = await fetch(h, b);
    const v = or && (f === "stream" || f === "response");
    if (or && (l || v && N)) {
      const c = {};
      ["status", "statusText", "headers"].forEach((k) => {
        c[k] = y[k];
      });
      const I = p.toFiniteNumber(y.headers.get("content-length")), [O, $] = l && Gr(
        I,
        St(Kr(l), !0)
      ) || [];
      y = new Response(
        Vr(y.body, Xr, O, () => {
          $ && $(), N && N();
        }),
        c
      );
    }
    f = f || "text";
    let T = await Rt[p.findKey(Rt, f) || "text"](y, e);
    return !v && N && N(), await new Promise((c, I) => {
      On(c, I, {
        data: T,
        headers: he.from(y.headers),
        status: y.status,
        statusText: y.statusText,
        config: e,
        request: h
      });
    });
  } catch (w) {
    throw N && N(), w && w.name === "TypeError" && /Load failed|fetch/i.test(w.message) ? Object.assign(
      new q("Network Error", q.ERR_NETWORK, e, h),
      {
        cause: w.cause || w
      }
    ) : q.from(w, w && w.code, e, h);
  }
}), ir = {
  http: qs,
  xhr: Ea,
  fetch: Ca
};
p.forEach(ir, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Qr = (e) => `- ${e}`, Oa = (e) => p.isFunction(e) || e === null || e === !1, kn = {
  getAdapter: (e) => {
    e = p.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !Oa(n) && (r = ir[(i = String(n)).toLowerCase()], r === void 0))
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
  adapters: ir
};
function Yt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new We(null, e);
}
function Zr(e) {
  return Yt(e), e.headers = he.from(e.headers), e.data = Kt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), kn.getAdapter(e.adapter || ot.adapter)(e).then(function(r) {
    return Yt(e), r.data = Kt.call(
      e,
      e.transformResponse,
      r
    ), r.headers = he.from(r.headers), r;
  }, function(r) {
    return Cn(r) || (Yt(e), r && r.response && (r.response.data = Kt.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = he.from(r.response.headers))), Promise.reject(r);
  });
}
const Fn = "1.11.0", Dt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Dt[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Jr = {};
Dt.transitional = function(t, n, r) {
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
Dt.spelling = function(t) {
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
const At = {
  assertOptions: La,
  validators: Dt
}, Ae = At.validators;
let Pe = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Wr(),
      response: new Wr()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = De(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && At.assertOptions(r, {
      silentJSONParsing: Ae.transitional(Ae.boolean),
      forcedJSONParsing: Ae.transitional(Ae.boolean),
      clarifyTimeoutError: Ae.transitional(Ae.boolean)
    }, !1), s != null && (p.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : At.assertOptions(s, {
      encode: Ae.function,
      serialize: Ae.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), At.assertOptions(n, {
      baseUrl: Ae.spelling("baseURL"),
      withXsrfToken: Ae.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && p.merge(
      o.common,
      o[n.method]
    );
    o && p.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete o[h];
      }
    ), n.headers = he.concat(i, o);
    const l = [];
    let g = !0;
    this.interceptors.request.forEach(function(N) {
      typeof N.runWhen == "function" && N.runWhen(n) === !1 || (g = g && N.synchronous, l.unshift(N.fulfilled, N.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(N) {
      f.push(N.fulfilled, N.rejected);
    });
    let d, m = 0, b;
    if (!g) {
      const h = [Zr.bind(this), void 0];
      for (h.unshift(...l), h.push(...f), b = h.length, d = Promise.resolve(n); m < b; )
        d = d.then(h[m++], h[m++]);
      return d;
    }
    b = l.length;
    let R = n;
    for (m = 0; m < b; ) {
      const h = l[m++], N = l[m++];
      try {
        R = h(R);
      } catch (j) {
        N.call(this, j);
        break;
      }
    }
    try {
      d = Zr.call(this, R);
    } catch (h) {
      return Promise.reject(h);
    }
    for (m = 0, b = f.length; m < b; )
      d = d.then(f[m++], f[m++]);
    return d;
  }
  getUri(t) {
    t = De(this.defaults, t);
    const n = Ln(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Sn(n, t.params, t.paramsSerializer);
  }
};
p.forEach(["delete", "get", "head", "options"], function(t) {
  Pe.prototype[t] = function(n, r) {
    return this.request(De(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
p.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, l) {
      return this.request(De(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  Pe.prototype[t] = n(), Pe.prototype[t + "Form"] = n(!0);
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
      r.reason || (r.reason = new We(o, i, l), n(r.reason));
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
  return p.isObject(e) && e.isAxiosError === !0;
}
const lr = {
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
Object.entries(lr).forEach(([e, t]) => {
  lr[t] = e;
});
function $n(e) {
  const t = new Pe(e), n = pn(Pe.prototype.request, t);
  return p.extend(n, Pe.prototype, t, { allOwnKeys: !0 }), p.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return $n(De(e, s));
  }, n;
}
const H = $n(ot);
H.Axios = Pe;
H.CanceledError = We;
H.CancelToken = Ia;
H.isCancel = Cn;
H.VERSION = Fn;
H.toFormData = It;
H.AxiosError = q;
H.Cancel = H.CanceledError;
H.all = function(t) {
  return Promise.all(t);
};
H.spread = Pa;
H.isAxiosError = Da;
H.mergeConfig = De;
H.AxiosHeaders = he;
H.formToJSON = (e) => _n(p.isHTMLForm(e) ? new FormData(e) : e);
H.getAdapter = kn.getAdapter;
H.HttpStatusCode = lr;
H.default = H;
const {
  Axios: Go,
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
  freeze: le,
  seal: ye,
  create: cr
} = Object, {
  apply: ur,
  construct: dr
} = typeof Reflect < "u" && Reflect;
le || (le = function(t) {
  return t;
});
ye || (ye = function(t) {
  return t;
});
ur || (ur = function(t, n) {
  for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    s[o - 2] = arguments[o];
  return t.apply(n, s);
});
dr || (dr = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return new t(...r);
});
const bt = ce(Array.prototype.forEach), $a = ce(Array.prototype.lastIndexOf), tn = ce(Array.prototype.pop), Xe = ce(Array.prototype.push), Ba = ce(Array.prototype.splice), Tt = ce(String.prototype.toLowerCase), Vt = ce(String.prototype.toString), Xt = ce(String.prototype.match), Qe = ce(String.prototype.replace), Ua = ce(String.prototype.indexOf), za = ce(String.prototype.trim), be = ce(Object.prototype.hasOwnProperty), ie = ce(RegExp.prototype.test), Ze = Ha(TypeError);
function ce(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    return ur(e, t, r);
  };
}
function Ha(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return dr(e, n);
  };
}
function G(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Tt;
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
function Wa(e) {
  for (let t = 0; t < e.length; t++)
    be(e, t) || (e[t] = null);
  return e;
}
function Te(e) {
  const t = cr(null);
  for (const [n, r] of Bn(e))
    be(e, n) && (Array.isArray(r) ? t[n] = Wa(r) : r && typeof r == "object" && r.constructor === Object ? t[n] = Te(r) : t[n] = r);
  return t;
}
function Je(e, t) {
  for (; e !== null; ) {
    const r = Ma(e, t);
    if (r) {
      if (r.get)
        return ce(r.get);
      if (typeof r.value == "function")
        return ce(r.value);
    }
    e = Fa(e);
  }
  function n() {
    return null;
  }
  return n;
}
const rn = le(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Qt = le(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Zt = le(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), qa = le(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Jt = le(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Ga = le(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), nn = le(["#text"]), sn = le(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), er = le(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), an = le(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), wt = le(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Ka = ye(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Ya = ye(/<%[\w\W]*|[\w\W]*%>/gm), Va = ye(/\$\{[\w\W]*/gm), Xa = ye(/^data-[\-\w.\u00B7-\uFFFF]+$/), Qa = ye(/^aria-[\-\w]+$/), Un = ye(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Za = ye(/^(?:\w+script|data):/i), Ja = ye(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), zn = ye(/^html$/i), eo = ye(/^[a-z][.\w]*(-[.\w]+)+$/i);
var on = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Qa,
  ATTR_WHITESPACE: Ja,
  CUSTOM_ELEMENT: eo,
  DATA_ATTR: Xa,
  DOCTYPE_NAME: zn,
  ERB_EXPR: Ya,
  IS_ALLOWED_URI: Un,
  IS_SCRIPT_OR_DATA: Za,
  MUSTACHE_EXPR: Ka,
  TMPLIT_EXPR: Va
});
const et = {
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
  const t = (F) => Hn(F);
  if (t.version = "3.3.1", t.removed = [], !e || !e.document || e.document.nodeType !== et.document || !e.Element)
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
    NamedNodeMap: d = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: m,
    DOMParser: b,
    trustedTypes: R
  } = e, h = g.prototype, N = Je(h, "cloneNode"), j = Je(h, "remove"), w = Je(h, "nextSibling"), y = Je(h, "childNodes"), v = Je(h, "parentNode");
  if (typeof i == "function") {
    const F = n.createElement("template");
    F.content && F.content.ownerDocument && (n = F.content.ownerDocument);
  }
  let T, c = "";
  const {
    implementation: I,
    createNodeIterator: O,
    createDocumentFragment: $,
    getElementsByTagName: k
  } = n, {
    importNode: B
  } = r;
  let U = ln();
  t.isSupported = typeof Bn == "function" && typeof v == "function" && I && I.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: W,
    ERB_EXPR: K,
    TMPLIT_EXPR: J,
    DATA_ATTR: Q,
    ARIA_ATTR: z,
    IS_SCRIPT_OR_DATA: V,
    ATTR_WHITESPACE: A,
    CUSTOM_ELEMENT: _
  } = on;
  let {
    IS_ALLOWED_URI: x
  } = on, E = null;
  const C = G({}, [...rn, ...Qt, ...Zt, ...Jt, ...nn]);
  let L = null;
  const P = G({}, [...sn, ...er, ...an, ...wt]);
  let M = Object.seal(cr(null, {
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
  })), ee = null, ue = null;
  const X = Object.seal(cr(null, {
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
  let xe = !0, Se = !0, ut = !1, br = !0, ke = !1, dt = !0, Oe = !1, kt = !1, Ft = !1, Fe = !1, ft = !1, mt = !1, wr = !0, Er = !1;
  const Gn = "user-content-";
  let Mt = !0, qe = !1, Me = {}, ve = null;
  const $t = G({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let vr = null;
  const Nr = G({}, ["audio", "video", "img", "source", "image", "track"]);
  let Bt = null;
  const Ar = G({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ht = "http://www.w3.org/1998/Math/MathML", pt = "http://www.w3.org/2000/svg", Re = "http://www.w3.org/1999/xhtml";
  let $e = Re, Ut = !1, zt = null;
  const Kn = G({}, [ht, pt, Re], Vt);
  let gt = G({}, ["mi", "mo", "mn", "ms", "mtext"]), yt = G({}, ["annotation-xml"]);
  const Yn = G({}, ["title", "style", "font", "a", "script"]);
  let Ge = null;
  const Vn = ["application/xhtml+xml", "text/html"], Xn = "text/html";
  let re = null, Be = null;
  const Qn = n.createElement("form"), Tr = function(u) {
    return u instanceof RegExp || u instanceof Function;
  }, Ht = function() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Be && Be === u)) {
      if ((!u || typeof u != "object") && (u = {}), u = Te(u), Ge = // eslint-disable-next-line unicorn/prefer-includes
      Vn.indexOf(u.PARSER_MEDIA_TYPE) === -1 ? Xn : u.PARSER_MEDIA_TYPE, re = Ge === "application/xhtml+xml" ? Vt : Tt, E = be(u, "ALLOWED_TAGS") ? G({}, u.ALLOWED_TAGS, re) : C, L = be(u, "ALLOWED_ATTR") ? G({}, u.ALLOWED_ATTR, re) : P, zt = be(u, "ALLOWED_NAMESPACES") ? G({}, u.ALLOWED_NAMESPACES, Vt) : Kn, Bt = be(u, "ADD_URI_SAFE_ATTR") ? G(Te(Ar), u.ADD_URI_SAFE_ATTR, re) : Ar, vr = be(u, "ADD_DATA_URI_TAGS") ? G(Te(Nr), u.ADD_DATA_URI_TAGS, re) : Nr, ve = be(u, "FORBID_CONTENTS") ? G({}, u.FORBID_CONTENTS, re) : $t, ee = be(u, "FORBID_TAGS") ? G({}, u.FORBID_TAGS, re) : Te({}), ue = be(u, "FORBID_ATTR") ? G({}, u.FORBID_ATTR, re) : Te({}), Me = be(u, "USE_PROFILES") ? u.USE_PROFILES : !1, xe = u.ALLOW_ARIA_ATTR !== !1, Se = u.ALLOW_DATA_ATTR !== !1, ut = u.ALLOW_UNKNOWN_PROTOCOLS || !1, br = u.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ke = u.SAFE_FOR_TEMPLATES || !1, dt = u.SAFE_FOR_XML !== !1, Oe = u.WHOLE_DOCUMENT || !1, Fe = u.RETURN_DOM || !1, ft = u.RETURN_DOM_FRAGMENT || !1, mt = u.RETURN_TRUSTED_TYPE || !1, Ft = u.FORCE_BODY || !1, wr = u.SANITIZE_DOM !== !1, Er = u.SANITIZE_NAMED_PROPS || !1, Mt = u.KEEP_CONTENT !== !1, qe = u.IN_PLACE || !1, x = u.ALLOWED_URI_REGEXP || Un, $e = u.NAMESPACE || Re, gt = u.MATHML_TEXT_INTEGRATION_POINTS || gt, yt = u.HTML_INTEGRATION_POINTS || yt, M = u.CUSTOM_ELEMENT_HANDLING || {}, u.CUSTOM_ELEMENT_HANDLING && Tr(u.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (M.tagNameCheck = u.CUSTOM_ELEMENT_HANDLING.tagNameCheck), u.CUSTOM_ELEMENT_HANDLING && Tr(u.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (M.attributeNameCheck = u.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), u.CUSTOM_ELEMENT_HANDLING && typeof u.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (M.allowCustomizedBuiltInElements = u.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ke && (Se = !1), ft && (Fe = !0), Me && (E = G({}, nn), L = [], Me.html === !0 && (G(E, rn), G(L, sn)), Me.svg === !0 && (G(E, Qt), G(L, er), G(L, wt)), Me.svgFilters === !0 && (G(E, Zt), G(L, er), G(L, wt)), Me.mathMl === !0 && (G(E, Jt), G(L, an), G(L, wt))), u.ADD_TAGS && (typeof u.ADD_TAGS == "function" ? X.tagCheck = u.ADD_TAGS : (E === C && (E = Te(E)), G(E, u.ADD_TAGS, re))), u.ADD_ATTR && (typeof u.ADD_ATTR == "function" ? X.attributeCheck = u.ADD_ATTR : (L === P && (L = Te(L)), G(L, u.ADD_ATTR, re))), u.ADD_URI_SAFE_ATTR && G(Bt, u.ADD_URI_SAFE_ATTR, re), u.FORBID_CONTENTS && (ve === $t && (ve = Te(ve)), G(ve, u.FORBID_CONTENTS, re)), u.ADD_FORBID_CONTENTS && (ve === $t && (ve = Te(ve)), G(ve, u.ADD_FORBID_CONTENTS, re)), Mt && (E["#text"] = !0), Oe && G(E, ["html", "head", "body"]), E.table && (G(E, ["tbody"]), delete ee.tbody), u.TRUSTED_TYPES_POLICY) {
        if (typeof u.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Ze('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof u.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Ze('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        T = u.TRUSTED_TYPES_POLICY, c = T.createHTML("");
      } else
        T === void 0 && (T = ro(R, s)), T !== null && typeof c == "string" && (c = T.createHTML(""));
      le && le(u), Be = u;
    }
  }, jr = G({}, [...Qt, ...Zt, ...qa]), Sr = G({}, [...Jt, ...Ga]), Zn = function(u) {
    let S = v(u);
    (!S || !S.tagName) && (S = {
      namespaceURI: $e,
      tagName: "template"
    });
    const D = Tt(u.tagName), Z = Tt(S.tagName);
    return zt[u.namespaceURI] ? u.namespaceURI === pt ? S.namespaceURI === Re ? D === "svg" : S.namespaceURI === ht ? D === "svg" && (Z === "annotation-xml" || gt[Z]) : !!jr[D] : u.namespaceURI === ht ? S.namespaceURI === Re ? D === "math" : S.namespaceURI === pt ? D === "math" && yt[Z] : !!Sr[D] : u.namespaceURI === Re ? S.namespaceURI === pt && !yt[Z] || S.namespaceURI === ht && !gt[Z] ? !1 : !Sr[D] && (Yn[D] || !jr[D]) : !!(Ge === "application/xhtml+xml" && zt[u.namespaceURI]) : !1;
  }, Ne = function(u) {
    Xe(t.removed, {
      element: u
    });
    try {
      v(u).removeChild(u);
    } catch {
      j(u);
    }
  }, Le = function(u, S) {
    try {
      Xe(t.removed, {
        attribute: S.getAttributeNode(u),
        from: S
      });
    } catch {
      Xe(t.removed, {
        attribute: null,
        from: S
      });
    }
    if (S.removeAttribute(u), u === "is")
      if (Fe || ft)
        try {
          Ne(S);
        } catch {
        }
      else
        try {
          S.setAttribute(u, "");
        } catch {
        }
  }, Rr = function(u) {
    let S = null, D = null;
    if (Ft)
      u = "<remove></remove>" + u;
    else {
      const te = Xt(u, /^[\r\n\t ]+/);
      D = te && te[0];
    }
    Ge === "application/xhtml+xml" && $e === Re && (u = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + u + "</body></html>");
    const Z = T ? T.createHTML(u) : u;
    if ($e === Re)
      try {
        S = new b().parseFromString(Z, Ge);
      } catch {
      }
    if (!S || !S.documentElement) {
      S = I.createDocument($e, "template", null);
      try {
        S.documentElement.innerHTML = Ut ? c : Z;
      } catch {
      }
    }
    const se = S.body || S.documentElement;
    return u && D && se.insertBefore(n.createTextNode(D), se.childNodes[0] || null), $e === Re ? k.call(S, Oe ? "html" : "body")[0] : Oe ? S.documentElement : se;
  }, _r = function(u) {
    return O.call(
      u.ownerDocument || u,
      u,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, Wt = function(u) {
    return u instanceof m && (typeof u.nodeName != "string" || typeof u.textContent != "string" || typeof u.removeChild != "function" || !(u.attributes instanceof d) || typeof u.removeAttribute != "function" || typeof u.setAttribute != "function" || typeof u.namespaceURI != "string" || typeof u.insertBefore != "function" || typeof u.hasChildNodes != "function");
  }, Cr = function(u) {
    return typeof l == "function" && u instanceof l;
  };
  function _e(F, u, S) {
    bt(F, (D) => {
      D.call(t, u, S, Be);
    });
  }
  const Or = function(u) {
    let S = null;
    if (_e(U.beforeSanitizeElements, u, null), Wt(u))
      return Ne(u), !0;
    const D = re(u.nodeName);
    if (_e(U.uponSanitizeElement, u, {
      tagName: D,
      allowedTags: E
    }), dt && u.hasChildNodes() && !Cr(u.firstElementChild) && ie(/<[/\w!]/g, u.innerHTML) && ie(/<[/\w!]/g, u.textContent) || u.nodeType === et.progressingInstruction || dt && u.nodeType === et.comment && ie(/<[/\w]/g, u.data))
      return Ne(u), !0;
    if (!(X.tagCheck instanceof Function && X.tagCheck(D)) && (!E[D] || ee[D])) {
      if (!ee[D] && Ir(D) && (M.tagNameCheck instanceof RegExp && ie(M.tagNameCheck, D) || M.tagNameCheck instanceof Function && M.tagNameCheck(D)))
        return !1;
      if (Mt && !ve[D]) {
        const Z = v(u) || u.parentNode, se = y(u) || u.childNodes;
        if (se && Z) {
          const te = se.length;
          for (let de = te - 1; de >= 0; --de) {
            const Ce = N(se[de], !0);
            Ce.__removalCount = (u.__removalCount || 0) + 1, Z.insertBefore(Ce, w(u));
          }
        }
      }
      return Ne(u), !0;
    }
    return u instanceof g && !Zn(u) || (D === "noscript" || D === "noembed" || D === "noframes") && ie(/<\/no(script|embed|frames)/i, u.innerHTML) ? (Ne(u), !0) : (ke && u.nodeType === et.text && (S = u.textContent, bt([W, K, J], (Z) => {
      S = Qe(S, Z, " ");
    }), u.textContent !== S && (Xe(t.removed, {
      element: u.cloneNode()
    }), u.textContent = S)), _e(U.afterSanitizeElements, u, null), !1);
  }, Lr = function(u, S, D) {
    if (wr && (S === "id" || S === "name") && (D in n || D in Qn))
      return !1;
    if (!(Se && !ue[S] && ie(Q, S))) {
      if (!(xe && ie(z, S))) {
        if (!(X.attributeCheck instanceof Function && X.attributeCheck(S, u))) {
          if (!L[S] || ue[S]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(Ir(u) && (M.tagNameCheck instanceof RegExp && ie(M.tagNameCheck, u) || M.tagNameCheck instanceof Function && M.tagNameCheck(u)) && (M.attributeNameCheck instanceof RegExp && ie(M.attributeNameCheck, S) || M.attributeNameCheck instanceof Function && M.attributeNameCheck(S, u)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              S === "is" && M.allowCustomizedBuiltInElements && (M.tagNameCheck instanceof RegExp && ie(M.tagNameCheck, D) || M.tagNameCheck instanceof Function && M.tagNameCheck(D)))
            ) return !1;
          } else if (!Bt[S]) {
            if (!ie(x, Qe(D, A, ""))) {
              if (!((S === "src" || S === "xlink:href" || S === "href") && u !== "script" && Ua(D, "data:") === 0 && vr[u])) {
                if (!(ut && !ie(V, Qe(D, A, "")))) {
                  if (D)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, Ir = function(u) {
    return u !== "annotation-xml" && Xt(u, _);
  }, Pr = function(u) {
    _e(U.beforeSanitizeAttributes, u, null);
    const {
      attributes: S
    } = u;
    if (!S || Wt(u))
      return;
    const D = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: L,
      forceKeepAttr: void 0
    };
    let Z = S.length;
    for (; Z--; ) {
      const se = S[Z], {
        name: te,
        namespaceURI: de,
        value: Ce
      } = se, Ue = re(te), qt = Ce;
      let ne = te === "value" ? qt : za(qt);
      if (D.attrName = Ue, D.attrValue = ne, D.keepAttr = !0, D.forceKeepAttr = void 0, _e(U.uponSanitizeAttribute, u, D), ne = D.attrValue, Er && (Ue === "id" || Ue === "name") && (Le(te, u), ne = Gn + ne), dt && ie(/((--!?|])>)|<\/(style|title|textarea)/i, ne)) {
        Le(te, u);
        continue;
      }
      if (Ue === "attributename" && Xt(ne, "href")) {
        Le(te, u);
        continue;
      }
      if (D.forceKeepAttr)
        continue;
      if (!D.keepAttr) {
        Le(te, u);
        continue;
      }
      if (!br && ie(/\/>/i, ne)) {
        Le(te, u);
        continue;
      }
      ke && bt([W, K, J], (kr) => {
        ne = Qe(ne, kr, " ");
      });
      const Dr = re(u.nodeName);
      if (!Lr(Dr, Ue, ne)) {
        Le(te, u);
        continue;
      }
      if (T && typeof R == "object" && typeof R.getAttributeType == "function" && !de)
        switch (R.getAttributeType(Dr, Ue)) {
          case "TrustedHTML": {
            ne = T.createHTML(ne);
            break;
          }
          case "TrustedScriptURL": {
            ne = T.createScriptURL(ne);
            break;
          }
        }
      if (ne !== qt)
        try {
          de ? u.setAttributeNS(de, te, ne) : u.setAttribute(te, ne), Wt(u) ? Ne(u) : tn(t.removed);
        } catch {
          Le(te, u);
        }
    }
    _e(U.afterSanitizeAttributes, u, null);
  }, Jn = function F(u) {
    let S = null;
    const D = _r(u);
    for (_e(U.beforeSanitizeShadowDOM, u, null); S = D.nextNode(); )
      _e(U.uponSanitizeShadowNode, S, null), Or(S), Pr(S), S.content instanceof o && F(S.content);
    _e(U.afterSanitizeShadowDOM, u, null);
  };
  return t.sanitize = function(F) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, S = null, D = null, Z = null, se = null;
    if (Ut = !F, Ut && (F = "<!-->"), typeof F != "string" && !Cr(F))
      if (typeof F.toString == "function") {
        if (F = F.toString(), typeof F != "string")
          throw Ze("dirty is not a string, aborting");
      } else
        throw Ze("toString is not a function");
    if (!t.isSupported)
      return F;
    if (kt || Ht(u), t.removed = [], typeof F == "string" && (qe = !1), qe) {
      if (F.nodeName) {
        const Ce = re(F.nodeName);
        if (!E[Ce] || ee[Ce])
          throw Ze("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (F instanceof l)
      S = Rr("<!---->"), D = S.ownerDocument.importNode(F, !0), D.nodeType === et.element && D.nodeName === "BODY" || D.nodeName === "HTML" ? S = D : S.appendChild(D);
    else {
      if (!Fe && !ke && !Oe && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return T && mt ? T.createHTML(F) : F;
      if (S = Rr(F), !S)
        return Fe ? null : mt ? c : "";
    }
    S && Ft && Ne(S.firstChild);
    const te = _r(qe ? F : S);
    for (; Z = te.nextNode(); )
      Or(Z), Pr(Z), Z.content instanceof o && Jn(Z.content);
    if (qe)
      return F;
    if (Fe) {
      if (ft)
        for (se = $.call(S.ownerDocument); S.firstChild; )
          se.appendChild(S.firstChild);
      else
        se = S;
      return (L.shadowroot || L.shadowrootmode) && (se = B.call(r, se, !0)), se;
    }
    let de = Oe ? S.outerHTML : S.innerHTML;
    return Oe && E["!doctype"] && S.ownerDocument && S.ownerDocument.doctype && S.ownerDocument.doctype.name && ie(zn, S.ownerDocument.doctype.name) && (de = "<!DOCTYPE " + S.ownerDocument.doctype.name + `>
` + de), ke && bt([W, K, J], (Ce) => {
      de = Qe(de, Ce, " ");
    }), T && mt ? T.createHTML(de) : de;
  }, t.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ht(F), kt = !0;
  }, t.clearConfig = function() {
    Be = null, kt = !1;
  }, t.isValidAttribute = function(F, u, S) {
    Be || Ht({});
    const D = re(F), Z = re(u);
    return Lr(D, Z, S);
  }, t.addHook = function(F, u) {
    typeof u == "function" && Xe(U[F], u);
  }, t.removeHook = function(F, u) {
    if (u !== void 0) {
      const S = $a(U[F], u);
      return S === -1 ? void 0 : Ba(U[F], S, 1)[0];
    }
    return tn(U[F]);
  }, t.removeHooks = function(F) {
    U[F] = [];
  }, t.removeAllHooks = function() {
    U = ln();
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
function _t(e, t = "create") {
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
const it = {
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
function lt(e) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(e) ? e : 6;
}
const fe = (e, t) => typeof e == "string" ? e.replace(
  /#(\w+)#/g,
  (n, r) => t[r] !== void 0 ? String(t[r]) : n
) : Array.isArray(e) ? e.map((n) => fe(n, t)) : e && typeof e == "object" ? Object.fromEntries(
  Object.entries(e).map(([n, r]) => [
    fe(n, t),
    fe(r, t)
  ])
) : e, Wn = (e) => {
  const t = Array.isArray(e?.data?.data) ? e.data.data[0] : Array.isArray(e?.data) ? e.data[0] : e?.data?.data ?? e?.data;
  return t && typeof t == "object" && !Array.isArray(t) ? t : null;
}, we = (e, t, n, r) => {
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
const po = (e) => e === !0 || e === "true", go = (e, t, n, r) => {
  e.forEach((s) => {
    const o = s?.name;
    if (!o) return;
    let i = r?.[o];
    i == null && (i = s.default), s.multiple === !0 || s.type === "checkbox" || s.type === "tags" ? t[o] = Array.isArray(i) ? i : typeof i == "string" ? i.split(",").map((g) => g.trim()).filter(Boolean) : [] : s.type === "json" ? t[o] = typeof i == "object" && i !== null ? JSON.stringify(i, null, 2) : i ?? "" : s.type === "date" ? t[o] = typeof i == "string" ? i.slice(0, 10) : "" : s.type === "time" ? typeof i == "string" ? i.includes("T") ? t[o] = i.slice(11, 16) : t[o] = i.slice(0, 5) : t[o] = "" : o === "blocked" || o === "blacklist" ? t[o] = String(i ?? "false") : t[o] = i ?? "";
    let l;
    s.type === "file" ? l = s.multiple ? pe.array().of(pe.mixed()) : pe.mixed() : s.multiple === !0 || s.type === "checkbox" || s.type === "tags" ? l = pe.array().of(pe.string()) : s.type === "email" ? l = pe.string().email("Invalid email") : s.type === "number" ? l = pe.number().typeError("Must be a number") : s.type === "json" ? l = pe.string().test("json", "Invalid JSON", (g) => {
      if (!g) return !0;
      try {
        return JSON.parse(g), !0;
      } catch {
        return !1;
      }
    }) : l = pe.string(), s.required && (l = l.required(
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
          l = pe.date().typeError("Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)").transform((d, m) => {
            if (typeof m == "string") {
              const b = m.replace(/-/g, "/"), [R, h, N] = b.split("/");
              if (R && h && N)
                return /* @__PURE__ */ new Date(`${N}-${h}-${R}`);
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
          l = pe.number().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          l = pe.number().typeError("Must be a decimal").transform((d, m) => {
            if (m == null || m === "") return;
            const b = Number(m);
            if (isNaN(b)) return d;
            if (typeof d == "number" && !isNaN(d)) {
              const R = Number(d);
              return Number.isInteger(R) ? Number(b.toFixed(R)) : b;
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
}, fr = (e) => !e || typeof e != "object" ? !1 : Object.values(e).every(
  (t) => typeof t == "object" && t !== null
);
function yo(e) {
  return typeof e == "object" && e !== null && typeof e.target == "string" && typeof e.src == "object" && e.src !== null && typeof e.src.table == "string";
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
  return e ? fr(e) ? Object.values(e).reduce((t, n) => (Object.assign(t, n), t), {}) : e : {};
}
const ge = (e) => {
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
function No(e) {
  return ao.includes(e) ? "image" : oo.includes(e) ? "video" : lo.includes(e) ? "pdf" : io.includes(e) ? "text" : "other";
}
const dn = {
  image: "fa fa-file-image",
  pdf: "fa fa-file-pdf",
  video: "fa fa-file-video",
  text: "fa fa-file-lines",
  other: "fa fa-file"
};
function Ao(e) {
  return no.sanitize(e, {
    USE_PROFILES: { html: !0 }
  });
}
const To = ({ fileUrl: e, category: t }) => e ? t === "image" ? /* @__PURE__ */ a.jsx("img", { src: e, className: "max-h-[80vh] mx-auto" }) : t === "pdf" || t === "text" ? /* @__PURE__ */ a.jsx("iframe", { src: e, className: "w-full h-[80vh]" }) : t === "video" ? /* @__PURE__ */ a.jsx("video", { controls: !0, className: "w-full max-h-[80vh]", children: /* @__PURE__ */ a.jsx("source", { src: e }) }) : /* @__PURE__ */ a.jsxs("div", { className: "text-center p-4", children: [
  /* @__PURE__ */ a.jsx("p", { children: "Preview not available" }),
  /* @__PURE__ */ a.jsx("a", { href: e, download: !0, className: "text-blue-600 underline", children: "Download file" })
] }) : null, tt = (e) => ({
  Authorization: `Bearer ${e.accessToken}`
}), tr = async (e) => (await H.get(
  e.baseURL + e.dbopsGetHash,
  { headers: tt(e) }
)).data.refhash, rr = async (e, t) => (await H.post(
  e.baseURL + e.dbopsGetRefId,
  t,
  { headers: tt(e) }
)).data.refid, jo = {
  async fetch(e, t, n, r) {
    const s = await tr(e);
    let o = !1, i;
    n && (o = !0, i = n), o || (i = await rr(e, {
      operation: "fetch",
      source: t.source,
      fields: t.fields ?? {},
      datahash: s,
      srcid: r
    }));
    const l = await H.post(
      e.baseURL + e.dbopsFetch,
      { refid: i, datahash: s },
      { headers: tt(e) }
    );
    return l.data?.data ?? l.data;
  },
  async create(e, t, n) {
    const r = await tr(e), s = await rr(e, {
      operation: "create",
      source: t.source,
      fields: t.values,
      datahash: r,
      srcid: n
    });
    return (await H.post(
      e.baseURL + e.dbopsCreate,
      { refid: s, fields: t.values, datahash: r },
      { headers: tt(e) }
    )).data;
  },
  async update(e, t, n) {
    const r = await tr(e), s = await rr(e, {
      operation: "update",
      source: t.source,
      fields: t.values,
      datahash: r,
      srcid: n
    });
    return (await H.post(
      e.baseURL + e.dbopsUpdate,
      { refid: s, fields: t.values, datahash: r },
      { headers: tt(e) }
    )).data;
  }
};
async function ze(e, t, n, r = void 0, s = void 0, o = {}) {
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
  setFieldOptions: r
}) {
  if (!e.ajaxchain || !t || !n) return;
  const s = Array.isArray(e.ajaxchain) ? e.ajaxchain : [e.ajaxchain];
  for (const o of s) {
    const i = o.src;
    if (!i) continue;
    let l;
    if (!i.queryid) {
      const b = fe(i.where ?? {}, { refid: t });
      l = {
        ...i,
        table: i.table,
        cols: i.columns,
        where: b
      };
    }
    const { data: g } = await ze(
      n,
      l,
      i.queryid,
      t
    ), f = Array.isArray(g?.data?.data) ? g.data.data : Array.isArray(g?.data) ? g.data : g, d = Array.isArray(f) ? f.map(ge) : [], m = we(
      e.valueKey ?? "value",
      e.labelKey ?? "title",
      d,
      e.groupKey
    );
    r(o.target, m);
  }
}
async function qn(e, t) {
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
  const [n, r] = ae(null), [s, o] = ae(!1), i = vo(e), l = No(i);
  je(() => {
    if (!t || l !== "image" && !s) return;
    let f = !0, d = null;
    return qn(e, t).then((m) => {
      f && (d = m, r(m));
    }), () => {
      f = !1, d && URL.revokeObjectURL(d);
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
function ct({
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
  `, [d, m] = ae(
    i ?? e.options ?? {}
  ), b = Y.useRef(!1);
  Y.useEffect(() => {
    i && m(i);
  }, [i]);
  const R = Y.useMemo(
    () => wo(d),
    [d]
  );
  Y.useEffect(() => {
    let v = !0, T = e.valueKey ?? "value", c = e.labelKey ?? "title";
    return (async () => {
      if (e?.options) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const U = Object.values(e.options);
          if (U.length && typeof U[0] == "string") {
            m(e.options);
            return;
          }
        }
        const k = (Array.isArray(e.options) ? e.options : [e.options]).map(ge), B = we(
          T,
          c,
          k,
          e.groupKey
          // auto-uses `category` if present
        );
        m(B);
        return;
      }
      const O = e?.source ?? {};
      if (e.type === "dataMethod") {
        const $ = e.method, k = $ ? n[$] : void 0;
        if (k)
          try {
            const B = await Promise.resolve(k()), U = Array.isArray(B?.data?.data) ? B.data.data : Array.isArray(B?.data) ? B.data : B, W = Array.isArray(U) ? U.map(ge) : [], K = we(T, c, W, e.groupKey);
            v && m(K);
          } catch (B) {
            console.error("Method execution failed:", B), v && m({});
          }
        else
          v && m({});
      }
      if (O.type === "api" && O.url)
        try {
          const $ = await H({
            method: O.method || "GET",
            url: O.url,
            data: O.body ?? {},
            params: O.params ?? {},
            headers: O.headers ?? {}
          }), k = Array.isArray($?.data?.data) ? $.data.data : Array.isArray($?.data) ? $.data : $, B = Array.isArray(k) ? k.map(ge) : [], U = we(T, c, B, e.groupKey);
          v && m(U);
        } catch ($) {
          console.error("API execution failed:", $), v && m({});
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
              where: e.where ? s ? fe(e.where, { refid: s }) : e.where : void 0
            };
          }
          const k = await ze(r, $, e?.queryid, void 0, o), B = Array.isArray(k?.data?.data) ? k.data.data : Array.isArray(k?.data) ? k.data : k, U = Array.isArray(B) ? B.map(ge) : [], W = we(T, c, U, e.groupKey);
          v && m(W);
        } catch ($) {
          console.error("API fetch failed:", $);
        }
      }
    })(), () => {
      v = !1;
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
  Y.useEffect(() => {
    b.current || !l || !h || (b.current = !0, So({
      field: e,
      value: h,
      sqlOpsUrls: r,
      setFieldOptions: l
    }));
  }, [h, r, l]);
  let N;
  typeof h == "string" ? e.type === "date" ? N = h.split("T")[0] : e.type === "time" ? N = h.includes("T") ? h.slice(11, 16) : h.slice(0, 5) : N = cn(h, R) : N = cn(h, R);
  const j = N == null ? "" : typeof N == "string" || typeof N == "number" ? N : JSON.stringify(N), w = Eo(h), y = e.type === "richtextarea" && typeof j == "string" ? Ao(j) : null;
  return /* @__PURE__ */ a.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ a.jsx("label", { className: f, children: e?.label }),
    /* @__PURE__ */ a.jsx("div", { className: "relative", children: w ? w.type === "drawn" ? /* @__PURE__ */ a.jsx("svg", { viewBox: "0 0 300 150", className: "h-24 w-full border bg-white rounded", children: w.paths.map((v, T) => /* @__PURE__ */ a.jsx(
      "path",
      {
        d: v.d,
        stroke: v.color || "#000",
        strokeWidth: v.width || 2,
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      T
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
    ) : (e.type === "file" || e.type === "attachement" || e.type === "photo" || e.type === "avatar") && N ? /* @__PURE__ */ a.jsx("div", { className: "flex flex-wrap gap-2", children: String(N).split(",").map((v) => v.trim()).filter(Boolean).map((v) => /* @__PURE__ */ a.jsx(
      _o,
      {
        sqlOpsUrls: r,
        filePath: v
      },
      v
    )) }) : e.type === "richtextarea" ? /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "tiptap border border-gray-200 min-h-[400px] max-h-[220px] overflow-auto bg-white rounded p-2 text-sm",
        dangerouslySetInnerHTML: { __html: y ?? "" }
      }
    ) : /* @__PURE__ */ a.jsx("p", { className: g, children: j }) })
  ] });
}
function Co({ filePath: e, field_name: t, sqlOpsUrls: n }) {
  const [r, s] = ae(null);
  return je(() => {
    if (!open || !n) return;
    let o = !0, i = null;
    return qn(e, n).then((l) => {
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
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white border border-gray-100 p-4 min-h-3/10 overflow-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    /* @__PURE__ */ a.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ a.jsx("div", { className: "relative w-42 h-42 ", children: e?.fields?.filter((f) => f.type === "avatar").map((f) => {
      const d = t[f.name];
      return typeof d != "string" || d.trim() === "" ? null : /* @__PURE__ */ a.jsx(Co, { field_name: f.name, filePath: d, sqlOpsUrls: r });
    }) }) }),
    /* @__PURE__ */ a.jsx("div", { className: "lg:col-span-10 min-h-0 max-h-40  overflow-y-auto custom-scrollbar", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: e.fields?.map((f, d) => {
      const m = t?.[f.name];
      return n.includes(f.name) || f.type === "avatar" || !m && m !== !1 && m !== 0 ? null : /* @__PURE__ */ a.jsx("div", { className: `hover:bg-gray-100 transition-colors duration-200 col-span-12 sm:col-span-6 ${it[lt(f.width)] || "lg:col-span-4"}`, children: /* @__PURE__ */ a.jsx(
        ct,
        {
          field: f,
          data: t ?? {},
          sqlOpsUrls: r,
          methods: g,
          refid: l,
          module_refid: i,
          setFieldOptions: s,
          ...o[f.name] ? { optionsOverride: o[f.name] } : {}
        },
        f?.name
      ) }, f.name);
    }) }) })
  ] }) });
}
function gr({ tabObj: e, methods: t, tabName: n, sqlOpsUrls: r, refid: s, module_refid: o, setFieldOptions: i, fieldOptions: l }) {
  const [g, f] = Y.useState(null);
  return Y.useEffect(() => {
    let d = !1;
    return (async () => {
      const b = e?.config;
      if (!b?.type) {
        d || f(null);
        return;
      }
      if (b.type === "method") {
        const R = b.method, h = R ? t[R] : void 0;
        if (h)
          try {
            const N = await Promise.resolve(h());
            d || f(N || null);
          } catch (N) {
            console.error("Method execution failed:", N), d || f(null);
          }
        else
          d || f(null);
      }
      if (b.type === "api")
        try {
          const R = await H({
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
          d || f(R.data || null);
        } catch (R) {
          console.error("API fetch failed:", R), d || f(null);
        }
      if (b.type === "sql" && s && s != "0" || b?.dbopsid) {
        if (!r) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let R = !1, h;
          b?.dbopsid && (R = !0, h = b?.dbopsid);
          const N = await H({
            method: "GET",
            url: r.baseURL + r.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            }
          });
          if (!R) {
            let y = {
              ...b
            };
            b.where && (y = {
              ...b,
              where: fe(b.where, {
                refid: s
              })
            }), h = (await H({
              method: "POST",
              url: r.baseURL + r.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: y,
                fields: _t(b.fields, r.operation),
                forcefill: b.forcefill,
                datahash: N.data.refhash,
                srcid: o
              },
              headers: {
                Authorization: `Bearer ${r?.accessToken}`
              }
            }))?.data.refid;
          }
          const j = await H({
            method: "POST",
            url: r.baseURL + r.dbopsFetch,
            data: {
              refid: h,
              datahash: N.data.refhash
            },
            headers: {
              Authorization: `Bearer ${r?.accessToken}`
            }
          }), w = Wn(j);
          d || f(w);
        } catch (R) {
          console.error("API fetch failed:", R);
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
  ]), /* @__PURE__ */ a.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: g ? Object.keys(g).map((d, m) => {
    let b = { name: d, label: d };
    return /* @__PURE__ */ a.jsx(
      "div",
      {
        className: `col-span-12 sm:col-span-6 ${it[lt(e.width)] || "lg:col-span-2"}`,
        children: /* @__PURE__ */ a.jsx(
          ct,
          {
            field: b,
            data: g ?? {},
            methods: t,
            refid: s,
            sqlOpsUrls: r,
            setFieldOptions: i,
            ...l[b.name] ? { optionsOverride: l[b.name] } : {}
          },
          d
        )
      },
      `field-${m}`
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
function Et({
  anchorRef: e,
  open: t,
  children: n,
  offset: r = 4
}) {
  const [s, o] = ae({});
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
  const [g, f] = ae(!1), [d, m] = ae(
    o ?? e.options ?? {}
  ), [b, R] = ae(""), [h, N] = ae(0), j = jt(null), [w, y] = ae(!1), v = Y.useRef(b), T = jt(null);
  Y.useEffect(() => {
    v.current = b;
  }, [b]), je(() => {
    o && Object.keys(o).length !== 0 && m(o);
  }, [o]), je(() => {
    if (!w) return;
    const z = (V) => {
      const A = V.target;
      T.current?.contains(A) || j.current?.contains(A) || (y(!1), R(""));
    };
    return document.addEventListener("mousedown", z), () => {
      document.removeEventListener("mousedown", z);
    };
  }, [w]);
  const c = e.name;
  Y.useEffect(() => {
    let z = !0;
    return (async () => {
      let A = e.valueKey ?? "value", _ = e.labelKey ?? "title";
      if (e?.options) {
        if (typeof e.options == "object" && !Array.isArray(e.options)) {
          const P = Object.values(e.options);
          if (P.length && typeof P[0] == "string") {
            m(e.options);
            return;
          }
        }
        const C = (Array.isArray(e.options) ? e.options : [e.options]).map(ge), L = we(
          A,
          _,
          C,
          e.groupKey
          // auto-uses `category` if present
        );
        m(L);
        return;
      }
      const x = e?.source ?? {};
      if (e.type === "dataMethod") {
        const E = e.method, C = E ? n[E] : void 0;
        if (C)
          try {
            const L = await Promise.resolve(C()), P = Array.isArray(L?.data?.data) ? L.data.data : Array.isArray(L?.data) ? L.data : L, M = Array.isArray(P) ? P.map(ge) : [], ee = we(A, _, M, e.groupKey);
            z && m(ee);
          } catch (L) {
            console.error("Method execution failed:", L), z && m({});
          }
        else
          z && m({});
      }
      if (x.type === "api" && x.url)
        try {
          const E = await H({
            method: x.method || "GET",
            url: x.url,
            data: x.body ?? {},
            params: x.params ?? {},
            headers: x.headers ?? {}
          }), C = Array.isArray(E?.data?.data) ? E.data.data : Array.isArray(E?.data) ? E.data : E, L = Array.isArray(C) ? C.map(ge) : [], P = we(A, _, L, e.groupKey);
          z && m(P);
        } catch (E) {
          console.error("API execution failed:", E), z && m({});
        }
      if (e.table || e.type === "dataSelector" || e.queryid) {
        if (!r) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let E;
          if (e.type === "dataSelector")
            E = {
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
            E = {
              table: e.table,
              cols: e.columns,
              where: e.where ? s ? fe(e.where, { refid: s }) : e.where : void 0
            };
          }
          const C = await ze(r, E, e?.queryid, void 0, l), L = Array.isArray(C?.data?.data) ? C.data.data : Array.isArray(C?.data) ? C.data : C, P = Array.isArray(L) ? L.map(ge) : [], M = we(A, _, P, e.groupKey);
          z && m(M);
        } catch (E) {
          console.error("API fetch failed:", E);
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
  const I = `
    w-full px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 
    bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-0
  `, O = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, $ = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, k = (z) => z.icon ? /* @__PURE__ */ a.jsx("i", { className: z.icon }) : null, B = Fr(
    () => bo(d),
    [d]
  ), U = B.length, W = Fr(() => e.search || !b ? B : B.filter(
    ([, z]) => z.toLowerCase().includes(b.toLowerCase())
  ), [e.search, b, B]), K = (z, V) => {
    if (w === !0)
      if (z.key === "ArrowDown")
        z.preventDefault(), N(
          (A) => A + 1 < W.length ? A + 1 : 0
        );
      else if (z.key === "ArrowUp")
        z.preventDefault(), N(
          (A) => A - 1 >= 0 ? A - 1 : W.length - 1
        );
      else if (z.key === "Enter") {
        z.preventDefault();
        const [A] = W[h] || [];
        A && t.setFieldValue(e.name, V ? A : [...t.values[e.name], A]);
      } else z.key === "Escape" && (R(""), y(!1));
  };
  je(() => {
    j.current?.querySelector(
      `[data-index="${h}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [h]), je(() => {
    h >= W.length && N(0);
  }, [W, h]), je(() => {
    const z = e.autocomplete, V = e.ajaxchain;
    if (!z && !V) return;
    const A = t.values[e.name];
    if (!A) return;
    const _ = Array.isArray(V) ? V : V ? [V] : [];
    (async () => {
      try {
        if (yo(z)) {
          const E = z.src;
          if (!E || !r) return;
          const C = fe(E.where ?? {}, {
            refid: A
          }), L = {
            ...E,
            table: E.table,
            cols: E.columns,
            where: C
          }, { data: P } = await ze(r, L, e?.queryid, void 0, l), M = Array.isArray(P?.data) ? P.data[0] : P?.data;
          M && z.target.split(",").map((ee) => ee.trim()).forEach((ee) => {
            M[ee] !== void 0 && t.setFieldValue(ee, M[ee]);
          });
        }
        for (const E of _) {
          const C = E.src;
          if (!E || typeof E != "object" || !C || typeof C != "object" || !r) continue;
          let L;
          if (!C.queryid) {
            if (!C.table || !C.columns)
              throw new Error("SQL query requires field.table");
            const Se = fe(C?.where ?? {}, {
              refid: A
            });
            L = {
              ...C,
              table: C.table,
              cols: C.columns,
              where: Se
            };
          }
          const { data: P } = await ze(r, L, e?.queryid, A, l);
          let M = e.valueKey ?? "value", ee = e.labelKey ?? "title";
          const ue = Array.isArray(P?.data?.data) ? P.data.data : Array.isArray(P?.data) ? P.data : P, X = Array.isArray(ue) ? ue.map(ge) : [], xe = we(
            M,
            ee,
            X,
            e.groupKey
          );
          i?.(E.target, xe);
        }
      } catch (E) {
        console.error("Autocomplete / AjaxChain fetch failed", E);
      }
    })();
  }, [t.values[e.name]]), Y.useEffect(() => {
    if (!e.search || !b.trim() || !e.table || !r) return;
    const z = xo(e.columns ?? ""), V = new AbortController(), A = setTimeout(async () => {
      try {
        let _;
        if (!e.queryid) {
          if (!e.table || !e.cols)
            throw new Error("SQL query requires field.table");
          const ue = s ? fe(e.where ?? {}, {
            refid: s
          }) : e.where;
          _ = {
            ...e,
            table: e.table,
            cols: e.columns || e.cols,
            where: ue
          };
        }
        let x = {};
        Array.isArray(z) && z.forEach((ue) => {
          x[ue] = [b, "LIKE"];
        });
        const { data: E } = await ze(r, _, e?.queryid, void 0, l, x);
        let C = e.valueKey ?? "value", L = e.labelKey ?? "title";
        const P = Array.isArray(E?.data?.data) ? E.data.data : Array.isArray(E?.data) ? E.data : E, M = Array.isArray(P) ? P.map(ge) : [], ee = we(
          C,
          L,
          M,
          e.groupKey
        );
        m(ee);
      } catch (_) {
        if (H.isCancel(_)) return;
        console.error("Search fetch failed", _);
      }
    }, 500);
    return () => {
      clearTimeout(A), V.abort();
    };
  }, [b, s]);
  const J = async (z) => {
    if (z.length === 0) {
      console.error("No file");
      return;
    }
    if (!r) return;
    const V = r?.baseURL + r?.uploadURL;
    if (!V) {
      console.error("No Upload URL ");
      return;
    }
    const A = e.multiple === !0;
    try {
      const _ = await Promise.all(
        Array.from(z).map(async (x) => {
          const E = new FormData();
          return E.append("file", x), (await H({
            method: "POST",
            url: V,
            data: E,
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${r?.accessToken}`
            }
          })).data;
        })
      );
      t.setFieldValue(
        c,
        A ? _.map((x) => x.path) : _[0]?.path
      );
    } catch (_) {
      console.error("File upload failed", _), t.setFieldError(c, "File upload failed");
    }
  }, Q = async (z, V, A) => {
    const _ = V[z];
    if (!_) return;
    const x = n?.[_];
    if (typeof x != "function") {
      console.error(`Method "${String(_)}" not found`);
      return;
    }
    try {
      await Promise.resolve(x(A));
    } catch (E) {
      console.error(`Method "${String(_)}" failed`, E);
    }
  };
  switch (e.type) {
    case "autocomplete": {
      const A = t.values[c] ?? "", _ = b !== "" ? b : un(d, A) ?? String(A ?? ""), x = (C) => {
        const L = C.target.value;
        R(L), N(0), L.trim() ? y(!0) : (y(!1), t.setFieldValue(c, ""));
      }, E = (C) => {
        t.setFieldValue(c, C), R(""), y(!1), Q("onChange", e, `${c}-${C}`);
      };
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: $, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { ref: T, children: /* @__PURE__ */ a.jsx(
          "input",
          {
            className: `${I} ${O}`,
            value: _,
            placeholder: e.placeholder || "Type to search...",
            onChange: x,
            onFocus: () => {
              const C = String(t.values[c] ?? "");
              R(C);
            },
            onBlur: () => {
              setTimeout(() => y(!1), 150);
            },
            onKeyDown: (C) => {
              if (C.key === "Enter") {
                if (C.preventDefault(), W[h]) {
                  const [L] = W[h];
                  t.setFieldValue(c, L);
                } else b.trim() && t.setFieldValue(c, b.trim());
                y(!1);
                return;
              }
              K(C, !0);
            },
            disabled: e.disabled
          }
        ) }),
        /* @__PURE__ */ a.jsx(Et, { anchorRef: T, open: w, children: /* @__PURE__ */ a.jsx(
          "div",
          {
            ref: j,
            className: "bg-white border rounded shadow max-h-52 overflow-y-auto",
            children: W.length > 0 ? W.map(([C, L], P) => /* @__PURE__ */ a.jsx(
              "div",
              {
                id: `${c}-${C}`,
                "data-index": P,
                className: `px-3 py-2 cursor-pointer text-sm
                  ${h === P ? "bg-gray-100" : "hover:bg-gray-100"}`,
                onMouseDown: () => E(C),
                children: L
              },
              C
            )) : /* @__PURE__ */ a.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `No matches press enter to add "${_}" ` })
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
        const A = t.values[c] ?? [];
        return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ a.jsxs("label", { className: $, children: [
            e.label,
            e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ a.jsxs(
            "div",
            {
              ref: T,
              tabIndex: 0,
              className: "cursor-pointer select-none border border-gray-300 rounded-lg px-4 py-2.5 bg-white flex justify-between items-center",
              onClick: () => {
                y((_) => !_), N(0);
              },
              onKeyDown: (_) => K(_, !1),
              onBlur: () => {
                e.multiple || setTimeout(() => {
                  y(!1), R("");
                }, 150);
              },
              children: [
                /* @__PURE__ */ a.jsx("span", { className: "text-sm text-gray-700 truncate", children: A.length > 0 ? A.join(", ") : `Select ${e.label}` }),
                /* @__PURE__ */ a.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
              ]
            }
          ),
          /* @__PURE__ */ a.jsx(Et, { anchorRef: T, open: w, children: /* @__PURE__ */ a.jsxs(
            "div",
            {
              ref: j,
              className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
              children: [
                e.search && /* @__PURE__ */ a.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    type: "text",
                    value: b,
                    onChange: (_) => {
                      R(_.target.value), N(0);
                    },
                    placeholder: "Search...",
                    className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                  }
                ) }),
                W.length > 0 ? W.map(([_, x], E) => /* @__PURE__ */ a.jsxs(
                  "label",
                  {
                    "data-index": E,
                    className: `flex items-center gap-x-2 px-2 py-1 rounded cursor-pointer text-sm
                    ${A.includes(_) ? "bg-indigo-50 text-indigo-600 font-medium" : h === E ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: [
                      /* @__PURE__ */ a.jsx(
                        "input",
                        {
                          id: `${c}-${_}`,
                          type: "checkbox",
                          checked: A.includes(_),
                          onChange: (C) => {
                            const L = C.target.checked ? [...A, _] : A.filter((P) => P !== _);
                            t.setFieldValue(c, L), Q("onChange", e, `${c}-${_}`);
                          },
                          className: "h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        }
                      ),
                      x
                    ]
                  },
                  _
                )) : /* @__PURE__ */ a.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ]
            }
          ) }),
          t.touched[c] && t.errors[c] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[c]) })
        ] });
      }
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: $, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            ref: T,
            tabIndex: 0,
            className: "cursor-pointer select-none border border-gray-300 rounded-lg px-4 py-2.5 bg-white flex justify-between items-center",
            onClick: () => {
              y((A) => !A), N(0);
            },
            onKeyDown: (A) => K(A, !0),
            onBlur: () => {
              setTimeout(() => {
                y(!1), R("");
              }, 150);
            },
            children: [
              /* @__PURE__ */ a.jsx("span", { className: "text-sm text-gray-700 truncate", children: t.values[c] ? un(d, t.values[c]) ?? "Select option" : `Select ${e.label}` }),
              /* @__PURE__ */ a.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
            ]
          }
        ),
        /* @__PURE__ */ a.jsx(Et, { anchorRef: T, open: w, children: /* @__PURE__ */ a.jsxs(
          "div",
          {
            ref: j,
            className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
            children: [
              e.search && /* @__PURE__ */ a.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ a.jsx(
                "input",
                {
                  type: "text",
                  value: b,
                  onChange: (A) => {
                    R(A.target.value), N(0);
                  },
                  onKeyDown: (A) => K(A, !0),
                  placeholder: "Search...",
                  className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                }
              ) }),
              W.length > 0 && /* @__PURE__ */ a.jsx(
                "div",
                {
                  onMouseDown: (A) => {
                    A.preventDefault(), t.setFieldValue(c, ""), y(!1), R("");
                  },
                  className: "px-2 py-1 text-sm cursor-pointer hover:bg-gray-50",
                  children: "Clear selection"
                }
              ),
              W.length > 0 ? W.map(([A, _], x) => /* @__PURE__ */ a.jsx(
                "div",
                {
                  id: `${c}-${A}`,
                  "data-index": x,
                  onMouseDown: () => {
                    t.setFieldValue(c, A), y(!1), R(""), N(0), Q("onChange", e, `${c}-${A}`);
                  },
                  className: `px-2 py-1 rounded cursor-pointer text-sm
                  ${t.values[c] === A ? "bg-indigo-50 text-indigo-600 font-medium" : h === x ? "bg-gray-100" : "hover:bg-gray-50"}`,
                  children: _
                },
                A
              )) : /* @__PURE__ */ a.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
            ]
          }
        ) }),
        t.touched[c] && t.errors[c] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[c]) })
      ] });
    }
    case "textarea":
      return /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: $, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ a.jsx(
            "textarea",
            {
              id: c,
              className: `${I} ${O} min-h-[120px] resize-none`,
              onFocus: () => f(!0),
              name: c,
              value: t.values[c],
              onBlur: t.handleBlur,
              onChange: (A) => {
                t.setFieldValue(
                  c,
                  A.target.value
                ), Q("onChange", e, `${c}`);
              },
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${g ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        t.touched[c] && t.errors[c] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[c]) })
      ] }) });
    case "select":
      if (e.multiple === !0) {
        const A = t.values[c] ?? [];
        return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ a.jsxs("label", { className: $, children: [
            e.label,
            e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ a.jsxs(
            "div",
            {
              ref: T,
              tabIndex: 0,
              className: "cursor-pointer select-none border border-gray-300 rounded-lg px-4 py-2.5 bg-white flex justify-between items-center",
              onClick: () => {
                y((_) => !_), N(0);
              },
              onKeyDown: (_) => K(_, !1),
              onBlur: () => {
                e.multiple || setTimeout(() => {
                  y(!1), R("");
                }, 150);
              },
              children: [
                /* @__PURE__ */ a.jsx("span", { className: "text-sm text-gray-700 truncate", children: A.length > 0 ? A.join(", ") : `Select ${e.label}` }),
                /* @__PURE__ */ a.jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
              ]
            }
          ),
          /* @__PURE__ */ a.jsx(Et, { anchorRef: T, open: w, children: /* @__PURE__ */ a.jsxs(
            "div",
            {
              ref: j,
              className: "bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto p-2",
              children: [
                e.search && /* @__PURE__ */ a.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    type: "text",
                    value: b,
                    onChange: (_) => {
                      R(_.target.value), N(0);
                    },
                    placeholder: "Search...",
                    className: "px-2 py-[5px] rounded w-full border border-gray-200 focus:outline-none"
                  }
                ) }),
                W.length > 0 ? W.map(([_, x], E) => /* @__PURE__ */ a.jsxs(
                  "label",
                  {
                    "data-index": E,
                    className: `flex items-center gap-x-2 px-2 py-1 rounded cursor-pointer text-sm
                    ${A.includes(_) ? "bg-indigo-50 text-indigo-600 font-medium" : h === E ? "bg-gray-100" : "hover:bg-gray-50"}`,
                    children: [
                      /* @__PURE__ */ a.jsx(
                        "input",
                        {
                          id: `${c}-${_}`,
                          type: "checkbox",
                          checked: A.includes(_),
                          onChange: (C) => {
                            const L = C.target.checked ? [...A, _] : A.filter((P) => P !== _);
                            t.setFieldValue(c, L), Q("onChange", e, `${c}-${_}`);
                          },
                          className: "h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        }
                      ),
                      x
                    ]
                  },
                  _
                )) : /* @__PURE__ */ a.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
              ]
            }
          ) }),
          t.touched[c] && t.errors[c] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[c]) })
        ] });
      }
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: $, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ a.jsxs(
            "select",
            {
              className: `${I} ${O} appearance-none cursor-pointer pr-12`,
              onFocus: () => f(!0),
              name: c,
              id: c,
              value: t.values[c],
              onBlur: t.handleBlur,
              onChange: (A) => {
                t.setFieldValue(
                  c,
                  A.target.value === "" ? "" : A.target.value
                ), Q("onChange", e, `${c}`);
              },
              disabled: e.disabled,
              children: [
                /* @__PURE__ */ a.jsx("option", { value: "", disabled: !0, children: e.placeholder || "Please select an option" }),
                !fr(d) && Object.entries(d).map(([A, _]) => /* @__PURE__ */ a.jsx("option", { value: A, className: "py-2", children: _ }, A)),
                fr(d) && Object.entries(d).map(([A, _]) => /* @__PURE__ */ a.jsx("optgroup", { label: A, children: Object.entries(_).map(([x, E]) => /* @__PURE__ */ a.jsx("option", { value: x, children: E }, x)) }, A))
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
        /* @__PURE__ */ a.jsxs("label", { className: $, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: `flex ${U > 3 ? "flex-col" : ""} gap-2 ml-1`, children: Object.entries(d || {}).map(([A, _]) => /* @__PURE__ */ a.jsxs(
          "label",
          {
            htmlFor: `${c}-${A}`,
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  id: `${c}-${A}`,
                  type: "radio",
                  name: c,
                  checked: t.values[c] === A,
                  value: A,
                  onChange: (x) => {
                    t.setFieldValue(
                      c,
                      x.target.value === "" ? "" : x.target.value
                    ), Q("onChange", e, `${c}-${A}`);
                  },
                  onBlur: t.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              _
            ]
          },
          A
        )) }),
        t.touched[c] && t.errors[c] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[c]) })
      ] });
    case "checkbox": {
      const A = t.values[c];
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: $, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "flex flex-col gap-2 ml-1", children: Object.entries(d || {}).map(([_, x]) => /* @__PURE__ */ a.jsxs(
          "label",
          {
            className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
            children: [
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  id: `${c}-${_}`,
                  type: "checkbox",
                  checked: A.includes(_),
                  onChange: (E) => {
                    const C = E.target.checked ? [...A, _] : A.filter((L) => L !== _);
                    t.setFieldValue(c, C), Q("onChange", e, `${c}-${_}`);
                  },
                  onBlur: t.handleBlur,
                  disabled: e.disabled,
                  className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                }
              ),
              x
            ]
          },
          _
        )) }),
        t.touched[c] && t.errors[c] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[c]) })
      ] });
    }
    case "tags": {
      const A = t.values[c], _ = b.trim(), x = Array.isArray(d) ? d : Object.entries(d || {}).map(([P, M]) => ({ value: P, label: M })), E = (P) => {
        P && !A.includes(P) && (t.setFieldValue(c, [...A, P]), R(""));
      }, C = (P) => {
        t.setFieldValue(
          c,
          A.filter((M) => M !== P)
        );
      }, L = (P) => x.find((M) => M.value === P)?.label ?? P;
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: $, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: `${I} flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center`,
            onClick: () => !e.disabled && document.getElementById(`${c}-input`)?.focus(),
            children: [
              A.map((P) => /* @__PURE__ */ a.jsxs(
                "span",
                {
                  className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                  children: [
                    /* @__PURE__ */ a.jsx("span", { className: "text-indigo-700", children: L(P) }),
                    /* @__PURE__ */ a.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (M) => {
                          M.stopPropagation(), e.disabled || C(P);
                        },
                        onMouseDown: (M) => M.preventDefault(),
                        className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                        children: "×"
                      }
                    )
                  ]
                },
                P
              )),
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  id: `${c}-input`,
                  type: "text",
                  value: b,
                  onChange: (P) => R(P.target.value),
                  onKeyDown: (P) => {
                    (P.key === "Enter" || P.key === ",") && (P.preventDefault(), E(_));
                  },
                  placeholder: A.length === 0 ? e.placeholder || "Type and press Enter" : "",
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
      const z = e.multiple === !0, V = Array.isArray(t.values[c]) ? t.values[c] : t.values[c] ? [t.values[c]] : [];
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: $, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: k(e) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: c,
              type: "file",
              className: `${I} ${O} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => f(!0),
              name: c,
              multiple: z,
              onChange: (A) => {
                const _ = A.currentTarget.files;
                _ && J(_), Q("onChange", e, `${c}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${g ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
        ] }),
        V.map((A) => {
          const _ = A?.split("/").pop();
          return _ ? /* @__PURE__ */ a.jsx("div", { className: "mt-1", children: /* @__PURE__ */ a.jsx("span", { className: "text-sm", children: _ }) }, A) : null;
        }),
        t.touched[c] && t.errors[c] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[c]) })
      ] });
    case "json":
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: $, children: [
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
              onChange: (A) => {
                t.setFieldValue(
                  c,
                  A.target.value
                ), Q("onChange", e, `${c}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder || "Enter valid JSON",
              disabled: e.disabled,
              className: `${I} ${O} min-h-[200px] font-mono text-sm resize-y`
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
        t.touched[c] && t.errors[c] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[c]) })
      ] });
    case "date":
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: $, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: k(e) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: c,
              type: "date",
              name: c,
              min: e.min,
              max: e.max,
              value: t.values[c],
              onChange: (A) => {
                t.setFieldValue(
                  c,
                  A.target.value
                ), Q("onChange", e, `${c}`);
              },
              onBlur: t.handleBlur,
              placeholder: e.placeholder,
              disabled: e.disabled,
              className: `${I} ${O} ${e.icon ? "pl-9" : ""}`
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
        t.touched[c] && t.errors[c] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[c]) })
      ] });
    case "number":
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: $, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: k(e) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: c,
              type: e.type || "text",
              className: `${I} ${O} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => f(!0),
              name: c,
              value: t.values[c],
              onBlur: t.handleBlur,
              onChange: (A) => {
                t.setFieldValue(
                  c,
                  A.target.value
                ), Q("onChange", e, `${c}`);
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
        t.touched[c] && t.errors[c] && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[c]) })
      ] });
    default:
      return /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs("label", { className: $, children: [
          e.label,
          e.required && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
          e.icon && /* @__PURE__ */ a.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: k(e) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: c,
              type: e.type || "text",
              className: `${I} ${O} ${e.icon ? "pl-9" : ""} `,
              onFocus: () => f(!0),
              name: c,
              value: t.values[c],
              onBlur: t.handleBlur,
              onChange: (A) => {
                t.setFieldValue(
                  c,
                  A.target.value
                ), Q("onChange", e, `${c}`);
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
  module_refid: g
}) {
  const f = ho(t, i?.operation), [d, m] = Y.useState({}), b = (w, y) => {
    m((v) => ({
      ...v,
      [w]: y
    }));
  }, { initialValues: R, validationSchema: h } = Y.useMemo(() => {
    const w = {}, y = {};
    return f.forEach((v) => {
      go([v], w, y, n);
    }), {
      initialValues: w,
      validationSchema: y
    };
  }, [f, n]), N = ts({
    initialValues: R,
    enableReinitialize: !0,
    validationSchema: pe.object().shape(h),
    onSubmit: (w) => {
      r(w), N.resetForm();
    }
  });
  function j(w) {
    w.preventDefault(), N.resetForm();
  }
  return /* @__PURE__ */ a.jsx("div", { className: "relative z-10 max-w-full ", children: /* @__PURE__ */ a.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300", children: /* @__PURE__ */ a.jsxs("form", { onSubmit: N.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "grid grid-flow-col auto-cols-max gap-4  overflow-x-auto", children: [
      f.map((w, y) => po(w.hidden) || w.type === "geolocation" || w.vmode === "edit" && i?.operation === "create" ? null : /* @__PURE__ */ a.jsx(
        "div",
        {
          children: /* @__PURE__ */ a.jsx(
            Io,
            {
              refid: l,
              module_refid: g,
              sqlOpsUrls: i,
              field: w,
              formik: N,
              methods: o,
              setFieldOptions: b,
              ...d[w.name] ? { optionsOverride: d[w.name] } : {}
            }
          )
        },
        w?.name ?? `field-${y}`
      )),
      /* @__PURE__ */ a.jsxs("div", { className: "", children: [
        /* @__PURE__ */ a.jsx("div", { children: "  " }),
        /* @__PURE__ */ a.jsx("button", { onClick: j, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: "Reset" }),
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
  const f = e.endPoints, d = e?.source?.refid, [m, b] = Y.useState(i), R = Y.useMemo(() => fo(e.fields), [e.fields]);
  Y.useEffect(() => {
    b(i ?? {});
  }, [i]);
  const h = Y.useCallback(
    (w) => {
      w && Object.keys(w).length > 0 && b(w);
    },
    []
  );
  Y.useEffect(() => {
    let w = !0;
    return (async () => {
      const v = e?.source ?? {};
      if (v?.type) {
        if (v.type === "method") {
          const T = v.method, c = T ? t[T] : void 0;
          if (c)
            try {
              const I = await Promise.resolve(c());
              w && h(I);
            } catch (I) {
              console.error("Method execution failed:", I);
            }
        }
        if (v.type === "api" && f?.operation !== "create")
          try {
            const T = await H({
              method: v.method || "GET",
              url: v.url ?? "",
              data: v.body ?? {},
              params: v.params ?? {},
              headers: v.headers ?? {}
            });
            w && h(T.data);
          } catch (T) {
            console.error("API fetch failed:", T);
          }
        if (v.type === "sql" && v.refid && v.refid !== "0" && f?.operation !== "create" || f?.operation !== "create" && v.dbopsid) {
          if (!f) {
            console.error("SQL source requires formJson.endPoints but it is missing");
            return;
          }
          try {
            const T = await jo.fetch(f, {
              source: {
                ...v,
                table: v.table,
                columns: v.columns,
                where: fe(v.where, {
                  refid: d
                })
              },
              fields: _t(e.fields, f.operation)
            }, v?.dbopsid, g);
            w && h(T);
          } catch (T) {
            console.error("API fetch failed:", T);
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
  const N = async (w) => {
    const y = e?.source ?? {};
    let v = null;
    if (R.length > 0)
      try {
        v = await mo();
      } catch (c) {
        console.log("catch fetchGeolocation", c), v = null;
      }
    const T = {
      ...w,
      ...Object.fromEntries(
        R.map((c) => [c, v])
      )
    };
    if (y.type === "method") {
      const c = y.method, I = c ? t[c] : void 0;
      if (I)
        try {
          const O = await Promise.resolve(I(T));
          l?.(null), o?.(O);
        } catch (O) {
          o?.(O), console.error("Method execution failed:", O);
        }
    }
    if (y.type === "api") {
      if (!f) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const c = await H({
          method: y.method || "POST",
          url: f.baseURL + y.endpoint,
          data: T ?? {},
          headers: {
            Authorization: `Bearer ${f?.accessToken}`
          }
        });
        l?.(null), o?.(c);
      } catch (c) {
        o?.(c), console.error("API fetch failed:", c);
      }
    }
    if (y.type === "sql") {
      const c = e.endPoints;
      if (!c) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let I = !1, O;
        y?.dbopsid && (I = !0, O = y?.dbopsid);
        const $ = await H({
          method: "GET",
          url: c.baseURL + c.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${c?.accessToken}`
          }
        });
        if (!I) {
          let U = {
            ...y
          };
          y.where && (U = {
            ...y,
            where: fe(y.where, {
              refid: d
            })
          }), O = (await H({
            method: "POST",
            url: c.baseURL + c.dbopsGetRefId,
            data: {
              operation: c.operation,
              source: U,
              fields: _t(e.fields, c.operation),
              forcefill: e.forcefill,
              datahash: $.data.refhash,
              scrid: g
            },
            headers: {
              Authorization: `Bearer ${c?.accessToken}`
            }
          }))?.data.refid;
        }
        let k = {
          refid: O,
          fields: T,
          datahash: $.data.refhash,
          refid1: c.refid
        };
        y?.refid && (k.refid1 = y?.refid);
        const B = await H({
          method: "POST",
          url: c.baseURL + c[c.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: k,
          headers: {
            Authorization: `Bearer ${c?.accessToken}`
          }
        });
        l?.(null), o?.(B);
      } catch (I) {
        o?.(I), console.error("API fetch failed:", I);
      }
    }
  }, j = {
    simple: /* @__PURE__ */ a.jsx(
      Po,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: m,
        onSubmit: N,
        onCancel: r,
        methods: t,
        components: s,
        sqlOpsUrls: f,
        refid: d,
        module_refid: g
      }
    )
  };
  return /* @__PURE__ */ a.jsx("div", { className: "relative", children: j.simple });
}
function yr({ tabObj: e, methods: t, tabName: n, sqlOpsUrls: r, refid: s, Reports: o, toast: i, handleAction: l, infoViewJson: g }) {
  const [f, d] = ae(!1), [m, b] = ae(null), [R, h] = Y.useState(0), [N, j] = Y.useState(null), w = e?.config, y = e?.config, v = y?.["popup.form"] ? "popup.form" : (y?.form, "form"), T = y?.[v] && Object.keys(y?.[v]).length > 0, c = (B) => {
    let U = ge(B.data);
    j(U);
  }, I = (B) => {
    j(B), h((U) => U + 1);
  }, O = (B) => {
    let U = ge(B.data);
    b(U), d(!0);
  }, $ = async () => {
    if (m?.id) {
      if (!r) {
        window.alert("Delete configuration missing.");
        return;
      }
      try {
        let B = e?.config;
        const U = B?.["popup.form"] ? "popup.form" : (B?.form, "form"), W = B?.[U];
        if (!W?.source) throw new Error("Form source missing");
        let K = !1, J;
        W?.source?.dbopsid && (K = !0, J = W?.source?.dbopsid);
        const Q = await H({
          method: "GET",
          url: r.baseURL + r.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${r.accessToken}`
          }
        });
        if (!K) {
          let z = { ...W.source, refid: m.id };
          W.source.where && (z = {
            ...z,
            where: fe(W.source.where, {
              refid: m?.id
            })
          }), J = (await H({
            method: "POST",
            url: r.baseURL + r.dbopsGetRefId,
            data: {
              operation: "update",
              source: z,
              fields: W.fields,
              forcefill: W.forcefill,
              datahash: Q.data.refhash,
              scrid: g?.module_refid
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
            refid: J,
            fields: { blocked: "true" },
            datahash: Q.data.refhash,
            refid1: m?.id
          },
          headers: {
            Authorization: `Bearer ${r.accessToken}`
          }
        }), window.alert("Record deleted successfully."), h((z) => z + 1);
      } catch (B) {
        console.error(B), window.alert("Failed to delete record. Please try again");
      } finally {
        b(null), d(!1);
      }
    }
  }, k = () => {
    b(null), d(!1);
  };
  return /* @__PURE__ */ a.jsx(a.Fragment, { children: o ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      o,
      {
        methods: { ...t, deleteRecord: O, editRecord: c },
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
          refresh: R
        },
        onButtonClick: l
      }
    ),
    T && /* @__PURE__ */ a.jsx(
      Do,
      {
        formJson: {
          ...y[v],
          source: {
            ...y?.[v].source,
            refid: N?.id
          },
          endPoints: {
            ...r,
            operation: N ? "update" : "create"
          }
        },
        methods: t,
        initialvalues: N ?? {},
        setEditData: I,
        module_refid: g?.module_refid
      }
    ),
    /* @__PURE__ */ a.jsx(
      Lo,
      {
        open: f,
        onConfirm: $,
        onCancel: k
      }
    )
  ] }) : /* @__PURE__ */ a.jsx("p", { children: "Report not available" }) });
}
function xr(e, t) {
  if (!e || !t) return null;
  const n = t[e];
  if (Y.isValidElement(n))
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
  const [g, f] = ae(!1), d = jt(null);
  return je(() => {
    const m = (b) => {
      d.current && !d.current.contains(b.target) && f(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
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
            onClick: () => f(!g),
            className: "ml-1 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200",
            children: "⋮"
          }
        ),
        g && /* @__PURE__ */ a.jsx("div", { className: "absolute right-0 mt-2 w-48 max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-30", children: t.map((m, b) => /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              n(b), f(!1);
            },
            className: `w-full text-left px-3 py-2 text-sm truncate hover:bg-gray-100 ${r === b ? "bg-gray-50 font-semibold text-action" : "text-gray-700"}`,
            children: e[m]?.label || m
          },
          m
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
        children: t.length > 0 ? t.map((m, b) => /* @__PURE__ */ a.jsx(
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
            children: /* @__PURE__ */ a.jsx("span", { className: "relative z-10 flex items-center justify-center gap-1 sm:gap-2", children: /* @__PURE__ */ a.jsx("span", { className: "truncate", children: e[m]?.label || m }) })
          },
          m
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
  module_refid: d,
  fieldOptions: m,
  setFieldOptions: b,
  buttons: R,
  handleAction: h,
  components: N
}) => {
  let j = R ? Object.entries(R).filter(([v, T]) => T.groups ? T.groups.includes(e[t]) : !0) : [];
  async function w(v, T) {
    const c = l?.[v];
    if (c) {
      try {
        await c();
      } catch (I) {
        console.error("Method execution failed:", I);
      }
      return;
    }
    h?.({ [v]: T }, s);
  }
  const y = xr(r?.component, N);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "bg-white rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex-1 flex flex-col min-h-0",
      children: [
        e.length > 0 ? r?.type === "fields" && r?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: n?.fieldGridClass || "grid grid-cols-12 gap-2", children: r.fields.map((v, T) => /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${it[lt(v.width)] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ a.jsx(
              ct,
              {
                field: v,
                data: s ?? {},
                methods: l,
                refid: g,
                sqlOpsUrls: f,
                module_refid: d,
                setFieldOptions: b,
                ...m[v.name] ? { optionsOverride: m[v.name] } : {}
              }
            )
          },
          v?.name ?? `field-${T}`
        )) }) }) : r?.type === "component" && y ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: y }) : r ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: i(r, e[t] || "") }) : null : /* @__PURE__ */ a.jsx("div", { className: "flex-1 col-span-full text-center py-8 text-gray-500", children: "No data available" }),
        /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: j && j.map(([v, T]) => /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => w(v, T),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: T.label
          },
          v
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
              e.slice(0, 5).map((v, T) => /* @__PURE__ */ a.jsx(
                "div",
                {
                  className: `w-2 h-2 rounded-full transition-all duration-300 ${T === t ? "bg-action w-6" : "bg-gray-300"}`
                },
                T
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
          /* @__PURE__ */ a.jsx("div", { className: "flex gap-1", children: e.map((v, T) => /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `w-2 h-2 rounded-full transition-all duration-300 ${T === t ? "bg-action w-6" : "bg-gray-300"}`
            },
            T
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
  toast: d = {},
  handleAction: m = () => {
  },
  infoViewJson: b,
  fieldOptions: R,
  setFieldOptions: h,
  components: N
}) {
  const [j, w] = ae(0), [y, v] = ae(!1), T = jt(null), c = Object.keys(e);
  je(() => {
    const K = () => {
      if (T.current) {
        const J = T.current;
        v(J.scrollWidth > J.clientWidth);
      }
    };
    return K(), window.addEventListener("resize", K), () => window.removeEventListener("resize", K);
  }, [c.length]), je(() => {
    if (T.current && c.length > 0) {
      const K = T.current.children[j];
      K && K.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [j, c.length]);
  const I = i === "tableft", O = i === "tabright", $ = !I && !O, k = e[c[j] ?? ""] || null, B = {
    single: (K, J) => /* @__PURE__ */ a.jsx(gr, { fieldOptions: R, setFieldOptions: h, module_refid: b.module_refid, tabObj: K, methods: t, tabName: J, sqlOpsUrls: l, refid: g }),
    grid: (K, J) => /* @__PURE__ */ a.jsx(
      yr,
      {
        ...f ? { Reports: f } : {},
        toast: d,
        handleAction: m,
        tabObj: K,
        methods: t,
        tabName: J,
        sqlOpsUrls: l,
        refid: g,
        infoViewJson: b
      }
    )
  }, U = k?.config?.uimode, W = r[U] || B[U] || (() => /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No UI mode for this type" }));
  return $ ? /* @__PURE__ */ a.jsxs("div", { className: "flex-1 flex flex-col min-h-0 ", children: [
    /* @__PURE__ */ a.jsx(
      ko,
      {
        groupNames: c,
        groups: e,
        setActiveTabIndex: w,
        activeTabIndex: j,
        tabsNavRef: T,
        isCommonInfo: s,
        showScrollHint: y,
        layoutConfig: o
      }
    ),
    /* @__PURE__ */ a.jsx(
      mn,
      {
        groupNames: c,
        activeTabIndex: j,
        layoutConfig: o,
        tabObj: k,
        infoData: n,
        setActiveTabIndex: w,
        renderView: W,
        groups: e,
        methods: t,
        refid: g,
        sqlOpsUrls: l,
        module_refid: b.module_refid,
        fieldOptions: R,
        setFieldOptions: h,
        buttons: b.buttons,
        handleAction: m,
        ...N ? { components: N } : {}
      }
    )
  ] }) : /* @__PURE__ */ a.jsxs("div", { className: "flex-1 flex min-h-0", children: [
    I && /* @__PURE__ */ a.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ a.jsx(
      fn,
      {
        groupNames: c,
        groups: e,
        setActiveTabIndex: w,
        activeTabIndex: j
      }
    ) }),
    /* @__PURE__ */ a.jsx("main", { className: "flex-1 flex flex-col min-h-0 overflow-auto", children: /* @__PURE__ */ a.jsx(
      mn,
      {
        groupNames: c,
        activeTabIndex: j,
        layoutConfig: o,
        tabObj: k,
        infoData: n,
        setActiveTabIndex: w,
        renderView: W,
        groups: e,
        methods: t,
        refid: g,
        module_refid: b.module_refid,
        sqlOpsUrls: l,
        fieldOptions: R,
        setFieldOptions: h,
        handleAction: m,
        ...N ? { components: N } : {}
      }
    ) }),
    O && /* @__PURE__ */ a.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ a.jsx(
      fn,
      {
        groupNames: c,
        groups: e,
        setActiveTabIndex: w,
        activeTabIndex: j
      }
    ) })
  ] });
}
function Fo({ title: e, children: t, isFirst: n }) {
  const [r, s] = ae(n);
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
  fieldOptions: d,
  setFieldOptions: m,
  components: b
}) {
  const R = {
    single: (w, y) => /* @__PURE__ */ a.jsx(
      gr,
      {
        tabObj: w,
        methods: t,
        tabName: y,
        sqlOpsUrls: s,
        fieldOptions: d,
        setFieldOptions: m,
        refid: o,
        module_refid: f?.module_refid
      }
    ),
    grid: (w, y) => /* @__PURE__ */ a.jsx(
      yr,
      {
        ...i ? { Reports: i } : {},
        toast: l,
        infoViewJson: f,
        handleAction: g,
        tabObj: w,
        methods: t,
        tabName: y,
        sqlOpsUrls: s,
        refid: o
      }
    )
  }, h = f?.buttons;
  let N = h ? Object.entries(h).filter(([w, y]) => !(y.groups && y.groups.length > 0)) : [];
  async function j(w, y) {
    const v = t?.[w];
    if (v) {
      try {
        await v();
      } catch (T) {
        console.error("Method execution failed:", T);
      }
      return;
    }
    g?.({ [w]: y }, n);
  }
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ a.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "space-y-1 flex flex-col min-h-0", children: [
    e && Object.entries(e).map(([w, y], v) => {
      let T = h ? Object.entries(h).filter(([I, O]) => O.groups ? O.groups.includes(w) : !1) : [];
      const c = xr(y.component, b);
      return /* @__PURE__ */ a.jsxs(Fo, { title: y.label, isFirst: v === 0, children: [
        y?.type === "fields" && y?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: y.fields.map((I, O) => /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${it[lt(I.width)] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ a.jsx(
              ct,
              {
                module_refid: f?.module_refid,
                methods: t,
                field: I,
                data: n ?? {},
                setFieldOptions: m,
                ...d[I.name] ? { optionsOverride: d[I.name] } : {},
                sqlOpsUrls: s,
                refid: o
              }
            )
          },
          I?.name ?? `field-${O}`
        )) }) }) : y?.type === "component" && c ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: c }) : y ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: r[y.config?.uimode]?.(y) || R[y.config?.uimode]?.(y, w) || /* @__PURE__ */ a.jsx("div", { children: "No renderer for this type" }) }) : null,
        /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: T && T.map(([I, O]) => /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => j(I, O),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: O.label
          },
          I
        )) })
      ] }, w);
    }),
    /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: N && N.map(([w, y]) => /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => j(w, y),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: y.label
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
  fieldOptions: d,
  setFieldOptions: m,
  components: b
}) {
  const R = {
    single: (w, y) => /* @__PURE__ */ a.jsx(gr, { fieldOptions: d, setFieldOptions: m, module_refid: f?.module_refid, tabObj: w, methods: t, tabName: y, sqlOpsUrls: s, refid: o }),
    grid: (w, y) => /* @__PURE__ */ a.jsx(
      yr,
      {
        ...i ? { Reports: i } : {},
        toast: l,
        handleAction: g,
        tabObj: w,
        methods: t,
        tabName: y,
        sqlOpsUrls: s,
        refid: o,
        infoViewJson: f
      }
    )
  }, h = f?.buttons;
  let N = h ? Object.entries(h).filter(([w, y]) => !(y.groups && y.groups.length > 0)) : [];
  async function j(w, y) {
    const v = t?.[w];
    if (v) {
      try {
        await v();
      } catch (T) {
        console.error("Method execution failed:", T);
      }
      return;
    }
    g?.({ [w]: y }, n);
  }
  return /* @__PURE__ */ a.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ a.jsx("div", { className: "p-4 mx-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "space-y-2  flex flex-col min-h-0", children: [
    e && Object.entries(e).map(([w, y], v) => {
      console.log("group", w), console.log("buttons", h);
      let T = h ? Object.entries(h).filter(([I, O]) => O.groups ? O.groups.includes(w) : !1) : [];
      const c = xr(y.component, b);
      return /* @__PURE__ */ a.jsxs($o, { title: y.label, children: [
        y?.type === "fields" && y?.fields ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-2", children: y.fields.map((I, O) => /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${it[lt(I.width)] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ a.jsx(
              ct,
              {
                module_refid: f?.module_refid,
                methods: t,
                field: I,
                data: n ?? {},
                setFieldOptions: m,
                ...d[I.name] ? { optionsOverride: d[I.name] } : {},
                sqlOpsUrls: s,
                refid: o
              }
            )
          },
          I?.name ?? `field-${O}`
        )) }) }) : y?.type === "component" && c ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: c }) : y ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: r[y.config?.uimode]?.(y) || R[y.config?.uimode]?.(y, w) || /* @__PURE__ */ a.jsx("div", { children: "No renderer for this type" }) }) : null,
        /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: T && T.map(([I, O]) => /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => j(I, O),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: O.label
          },
          I
        )) })
      ] }, w);
    }),
    /* @__PURE__ */ a.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: N && N.map(([w, y]) => /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => j(w, y),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: y.label
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
  components: d
}) {
  const [m, b] = Y.useState({}), R = co(e.infoview ?? {}), h = e.endPoints, N = Y.useMemo(
    () => r(e.fields || {}),
    [e.fields, r]
  ), [j, w] = Y.useState({}), y = (O, $) => {
    w((k) => ({ ...k, [O]: $ }));
  }, v = e?.source?.refid;
  let T = { ...N };
  e.infoview?.groups && (T = { ...T, ...e.infoview.groups }), Y.useEffect(() => {
    let O = !1;
    return (async () => {
      const k = e?.source;
      if (!k?.type) {
        O || b({});
        return;
      }
      if (k.type === "method") {
        const B = k.method, U = B ? i[B] : void 0;
        if (U)
          try {
            const W = await Promise.resolve(U());
            O || b(W || {});
          } catch (W) {
            console.error("Method execution failed:", W), O || b({});
          }
        else
          O || b({});
      }
      if (k.type === "api")
        try {
          const B = await H({
            method: k.method || "GET",
            url: k.url,
            data: k.body || {},
            params: k.params || {},
            headers: k.headers || {}
          });
          O || b(B.data || {});
        } catch (B) {
          console.error("API fetch failed:", B), O || b({});
        }
      if (k.type === "sql" && k.refid && k.refid != "0" || k.dbopsid) {
        if (!h) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let B = !1, U;
          k?.dbopsid && (B = !0, U = k?.dbopsid);
          const W = await H({
            method: "GET",
            url: h.baseURL + h.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${h?.accessToken}`
            }
          });
          if (!B) {
            let Q = {
              ...k
            };
            k.where && (Q = {
              ...k,
              where: fe(k.where, {
                refid: v
              })
            }), U = (await H({
              method: "POST",
              url: h.baseURL + h.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: Q,
                fields: _t(e.fields, h.operation),
                forcefill: e.forcefill,
                datahash: W.data.refhash,
                srcid: e?.module_refid
              },
              headers: {
                Authorization: `Bearer ${h?.accessToken}`
              }
            }))?.data.refid;
          }
          const K = await H({
            method: "POST",
            url: h.baseURL + h.dbopsFetch,
            data: {
              refid: U,
              datahash: W.data.refhash,
              module_refid: e.module_refid
            },
            headers: {
              Authorization: `Bearer ${h?.accessToken}`
            }
          }), J = Wn(K) ?? {};
          O || b(J);
        } catch (B) {
          console.error("API fetch failed:", B);
        }
      }
    })(), () => {
      O = !0;
    };
  }, [
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.url || "",
    JSON.stringify(e?.source?.params || {}),
    JSON.stringify(e?.source?.body || {}),
    JSON.stringify(e?.source?.headers || {})
  ]);
  const c = T.common || null;
  c && delete T.common;
  const I = (O) => {
    switch (O) {
      case "accordion":
        return /* @__PURE__ */ a.jsx(
          Mo,
          {
            groups: T,
            methods: i,
            infoData: m,
            viewRenderers: o,
            sqlOpsUrls: h,
            refid: v,
            ...l ? { Reports: l } : {},
            toast: g,
            handleAction: f,
            infoViewJson: e,
            setFieldOptions: y,
            fieldOptions: j,
            ...d ? { components: d } : {}
          }
        );
      case "tab":
      case "tableft":
      case "tabright":
        return /* @__PURE__ */ a.jsx(
          hn,
          {
            groups: T,
            viewRenderers: o,
            layoutConfig: s,
            methods: i,
            infoData: m,
            isCommonInfo: !!c,
            viewMode: O,
            sqlOpsUrls: h,
            refid: v,
            ...l ? { Reports: l } : {},
            toast: g,
            handleAction: f,
            infoViewJson: e,
            setFieldOptions: y,
            fieldOptions: j,
            ...d ? { components: d } : {}
          }
        );
      case "cards":
        return /* @__PURE__ */ a.jsx(
          Bo,
          {
            groups: T,
            viewRenderers: o,
            methods: i,
            infoData: m,
            sqlOpsUrls: h,
            refid: v,
            ...l ? { Reports: l } : {},
            toast: g,
            handleAction: f,
            infoViewJson: e,
            setFieldOptions: y,
            fieldOptions: j,
            ...d ? { components: d } : {}
          }
        );
      default:
        return /* @__PURE__ */ a.jsx(
          hn,
          {
            groups: T,
            viewRenderers: o,
            layoutConfig: s,
            methods: i,
            infoData: m,
            isCommonInfo: !!c,
            viewMode: O,
            sqlOpsUrls: h,
            refid: v,
            ...l ? { Reports: l } : {},
            toast: g,
            handleAction: f,
            infoViewJson: e,
            setFieldOptions: y,
            fieldOptions: j,
            ...d ? { components: d } : {}
          }
        );
    }
  };
  return /* @__PURE__ */ a.jsxs("div", { className: s.containerClass || "h-screen flex flex-col ", children: [
    c && h && /* @__PURE__ */ a.jsx(
      Oo,
      {
        commonInfo: c,
        infoData: m,
        hiddenFields: n,
        sqlOpsUrls: h,
        setFieldOptions: y,
        fieldOptions: j,
        module_refid: e.module_refid,
        refid: v,
        methods: i
      }
    ),
    I(R)
  ] });
}
export {
  li as InfoView
};
