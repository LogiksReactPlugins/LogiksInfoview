import de, { useState as Ne, useEffect as xe, useMemo as qt, useRef as Pe, useCallback as Te, useLayoutEffect as Xs, createContext as Fi, forwardRef as $i, createElement as Ii, useContext as Pi } from "react";
import { createPortal as Di } from "react-dom";
function Zs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _r = { exports: {} }, er = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ca;
function Li() {
  if (Ca) return er;
  Ca = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, a, s) {
    var o = null;
    if (s !== void 0 && (o = "" + s), a.key !== void 0 && (o = "" + a.key), "key" in a) {
      s = {};
      for (var l in a)
        l !== "key" && (s[l] = a[l]);
    } else s = a;
    return a = s.ref, {
      $$typeof: e,
      type: n,
      key: o,
      ref: a !== void 0 ? a : null,
      props: s
    };
  }
  return er.Fragment = t, er.jsx = r, er.jsxs = r, er;
}
var tr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fa;
function Mi() {
  return Fa || (Fa = 1, process.env.NODE_ENV !== "production" && function() {
    function e(C) {
      if (C == null) return null;
      if (typeof C == "function")
        return C.$$typeof === H ? null : C.displayName || C.name || null;
      if (typeof C == "string") return C;
      switch (C) {
        case v:
          return "Fragment";
        case x:
          return "Profiler";
        case E:
          return "StrictMode";
        case h:
          return "Suspense";
        case T:
          return "SuspenseList";
        case L:
          return "Activity";
      }
      if (typeof C == "object")
        switch (typeof C.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), C.$$typeof) {
          case g:
            return "Portal";
          case m:
            return (C.displayName || "Context") + ".Provider";
          case w:
            return (C._context.displayName || "Context") + ".Consumer";
          case S:
            var V = C.render;
            return C = C.displayName, C || (C = V.displayName || V.name || "", C = C !== "" ? "ForwardRef(" + C + ")" : "ForwardRef"), C;
          case R:
            return V = C.displayName || null, V !== null ? V : e(C.type) || "Memo";
          case P:
            V = C._payload, C = C._init;
            try {
              return e(C(V));
            } catch {
            }
        }
      return null;
    }
    function t(C) {
      return "" + C;
    }
    function r(C) {
      try {
        t(C);
        var V = !1;
      } catch {
        V = !0;
      }
      if (V) {
        V = console;
        var X = V.error, te = typeof Symbol == "function" && Symbol.toStringTag && C[Symbol.toStringTag] || C.constructor.name || "Object";
        return X.call(
          V,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          te
        ), t(C);
      }
    }
    function n(C) {
      if (C === v) return "<>";
      if (typeof C == "object" && C !== null && C.$$typeof === P)
        return "<...>";
      try {
        var V = e(C);
        return V ? "<" + V + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var C = _.A;
      return C === null ? null : C.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function o(C) {
      if (B.call(C, "key")) {
        var V = Object.getOwnPropertyDescriptor(C, "key").get;
        if (V && V.isReactWarning) return !1;
      }
      return C.key !== void 0;
    }
    function l(C, V) {
      function X() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          V
        ));
      }
      X.isReactWarning = !0, Object.defineProperty(C, "key", {
        get: X,
        configurable: !0
      });
    }
    function u() {
      var C = e(this.type);
      return ye[C] || (ye[C] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), C = this.props.ref, C !== void 0 ? C : null;
    }
    function c(C, V, X, te, we, ee, Ae, Re) {
      return X = ee.ref, C = {
        $$typeof: y,
        type: C,
        key: V,
        props: ee,
        _owner: we
      }, (X !== void 0 ? X : null) !== null ? Object.defineProperty(C, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(C, "ref", { enumerable: !1, value: null }), C._store = {}, Object.defineProperty(C._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(C, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(C, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ae
      }), Object.defineProperty(C, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Re
      }), Object.freeze && (Object.freeze(C.props), Object.freeze(C)), C;
    }
    function f(C, V, X, te, we, ee, Ae, Re) {
      var ie = V.children;
      if (ie !== void 0)
        if (te)
          if (z(ie)) {
            for (te = 0; te < ie.length; te++)
              d(ie[te]);
            Object.freeze && Object.freeze(ie);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(ie);
      if (B.call(V, "key")) {
        ie = e(C);
        var O = Object.keys(V).filter(function(F) {
          return F !== "key";
        });
        te = 0 < O.length ? "{key: someKey, " + O.join(": ..., ") + ": ...}" : "{key: someKey}", Se[ie + te] || (O = 0 < O.length ? "{" + O.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          te,
          ie,
          O,
          ie
        ), Se[ie + te] = !0);
      }
      if (ie = null, X !== void 0 && (r(X), ie = "" + X), o(V) && (r(V.key), ie = "" + V.key), "key" in V) {
        X = {};
        for (var U in V)
          U !== "key" && (X[U] = V[U]);
      } else X = V;
      return ie && l(
        X,
        typeof C == "function" ? C.displayName || C.name || "Unknown" : C
      ), c(
        C,
        ie,
        ee,
        we,
        a(),
        X,
        Ae,
        Re
      );
    }
    function d(C) {
      typeof C == "object" && C !== null && C.$$typeof === y && C._store && (C._store.validated = 1);
    }
    var p = de, y = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), m = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), L = Symbol.for("react.activity"), H = Symbol.for("react.client.reference"), _ = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, z = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(C) {
        return C();
      }
    };
    var N, ye = {}, ge = p.react_stack_bottom_frame.bind(
      p,
      s
    )(), oe = D(n(s)), Se = {};
    tr.Fragment = v, tr.jsx = function(C, V, X, te, we) {
      var ee = 1e4 > _.recentlyCreatedOwnerStacks++;
      return f(
        C,
        V,
        X,
        !1,
        te,
        we,
        ee ? Error("react-stack-top-frame") : ge,
        ee ? D(n(C)) : oe
      );
    }, tr.jsxs = function(C, V, X, te, we) {
      var ee = 1e4 > _.recentlyCreatedOwnerStacks++;
      return f(
        C,
        V,
        X,
        !0,
        te,
        we,
        ee ? Error("react-stack-top-frame") : ge,
        ee ? D(n(C)) : oe
      );
    };
  }()), tr;
}
var $a;
function ki() {
  return $a || ($a = 1, process.env.NODE_ENV === "production" ? _r.exports = Li() : _r.exports = Mi()), _r.exports;
}
var i = ki();
function Qs(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: zi } = Object.prototype, { getPrototypeOf: ra } = Object, { iterator: Xr, toStringTag: Js } = Symbol, Zr = /* @__PURE__ */ ((e) => (t) => {
  const r = zi.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Je = (e) => (e = e.toLowerCase(), (t) => Zr(t) === e), Qr = (e) => (t) => typeof t === e, { isArray: Kt } = Array, fr = Qr("undefined");
function yr(e) {
  return e !== null && !fr(e) && e.constructor !== null && !fr(e.constructor) && Ve(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const eo = Je("ArrayBuffer");
function Bi(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && eo(e.buffer), t;
}
const Ui = Qr("string"), Ve = Qr("function"), to = Qr("number"), gr = (e) => e !== null && typeof e == "object", Vi = (e) => e === !0 || e === !1, Ir = (e) => {
  if (Zr(e) !== "object")
    return !1;
  const t = ra(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Js in e) && !(Xr in e);
}, Hi = (e) => {
  if (!gr(e) || yr(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Gi = Je("Date"), qi = Je("File"), Wi = Je("Blob"), Ki = Je("FileList"), Yi = (e) => gr(e) && Ve(e.pipe), Xi = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Ve(e.append) && ((t = Zr(e)) === "formdata" || // detect form-data instance
  t === "object" && Ve(e.toString) && e.toString() === "[object FormData]"));
}, Zi = Je("URLSearchParams"), [Qi, Ji, el, tl] = ["ReadableStream", "Request", "Response", "Headers"].map(Je), rl = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function br(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, a;
  if (typeof e != "object" && (e = [e]), Kt(e))
    for (n = 0, a = e.length; n < a; n++)
      t.call(null, e[n], n, e);
  else {
    if (yr(e))
      return;
    const s = r ? Object.getOwnPropertyNames(e) : Object.keys(e), o = s.length;
    let l;
    for (n = 0; n < o; n++)
      l = s[n], t.call(null, e[l], l, e);
  }
}
function ro(e, t) {
  if (yr(e))
    return null;
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, a;
  for (; n-- > 0; )
    if (a = r[n], t === a.toLowerCase())
      return a;
  return null;
}
const At = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, no = (e) => !fr(e) && e !== At;
function Ln() {
  const { caseless: e } = no(this) && this || {}, t = {}, r = (n, a) => {
    const s = e && ro(t, a) || a;
    Ir(t[s]) && Ir(n) ? t[s] = Ln(t[s], n) : Ir(n) ? t[s] = Ln({}, n) : Kt(n) ? t[s] = n.slice() : t[s] = n;
  };
  for (let n = 0, a = arguments.length; n < a; n++)
    arguments[n] && br(arguments[n], r);
  return t;
}
const nl = (e, t, r, { allOwnKeys: n } = {}) => (br(t, (a, s) => {
  r && Ve(a) ? e[s] = Qs(a, r) : e[s] = a;
}, { allOwnKeys: n }), e), al = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), sl = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, ol = (e, t, r, n) => {
  let a, s, o;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (a = Object.getOwnPropertyNames(e), s = a.length; s-- > 0; )
      o = a[s], (!n || n(o, e, t)) && !l[o] && (t[o] = e[o], l[o] = !0);
    e = r !== !1 && ra(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, il = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, ll = (e) => {
  if (!e) return null;
  if (Kt(e)) return e;
  let t = e.length;
  if (!to(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, cl = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ra(Uint8Array)), ul = (e, t) => {
  const n = (e && e[Xr]).call(e);
  let a;
  for (; (a = n.next()) && !a.done; ) {
    const s = a.value;
    t.call(e, s[0], s[1]);
  }
}, dl = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, fl = Je("HTMLFormElement"), hl = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, a) {
    return n.toUpperCase() + a;
  }
), Ia = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), pl = Je("RegExp"), ao = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  br(r, (a, s) => {
    let o;
    (o = t(a, s, e)) !== !1 && (n[s] = o || a);
  }), Object.defineProperties(e, n);
}, ml = (e) => {
  ao(e, (t, r) => {
    if (Ve(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (Ve(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, yl = (e, t) => {
  const r = {}, n = (a) => {
    a.forEach((s) => {
      r[s] = !0;
    });
  };
  return Kt(e) ? n(e) : n(String(e).split(t)), r;
}, gl = () => {
}, bl = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function xl(e) {
  return !!(e && Ve(e.append) && e[Js] === "FormData" && e[Xr]);
}
const vl = (e) => {
  const t = new Array(10), r = (n, a) => {
    if (gr(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (yr(n))
        return n;
      if (!("toJSON" in n)) {
        t[a] = n;
        const s = Kt(n) ? [] : {};
        return br(n, (o, l) => {
          const u = r(o, a + 1);
          !fr(u) && (s[l] = u);
        }), t[a] = void 0, s;
      }
    }
    return n;
  };
  return r(e, 0);
}, wl = Je("AsyncFunction"), El = (e) => e && (gr(e) || Ve(e)) && Ve(e.then) && Ve(e.catch), so = ((e, t) => e ? setImmediate : t ? ((r, n) => (At.addEventListener("message", ({ source: a, data: s }) => {
  a === At && s === r && n.length && n.shift()();
}, !1), (a) => {
  n.push(a), At.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  Ve(At.postMessage)
), Tl = typeof queueMicrotask < "u" ? queueMicrotask.bind(At) : typeof process < "u" && process.nextTick || so, Sl = (e) => e != null && Ve(e[Xr]), j = {
  isArray: Kt,
  isArrayBuffer: eo,
  isBuffer: yr,
  isFormData: Xi,
  isArrayBufferView: Bi,
  isString: Ui,
  isNumber: to,
  isBoolean: Vi,
  isObject: gr,
  isPlainObject: Ir,
  isEmptyObject: Hi,
  isReadableStream: Qi,
  isRequest: Ji,
  isResponse: el,
  isHeaders: tl,
  isUndefined: fr,
  isDate: Gi,
  isFile: qi,
  isBlob: Wi,
  isRegExp: pl,
  isFunction: Ve,
  isStream: Yi,
  isURLSearchParams: Zi,
  isTypedArray: cl,
  isFileList: Ki,
  forEach: br,
  merge: Ln,
  extend: nl,
  trim: rl,
  stripBOM: al,
  inherits: sl,
  toFlatObject: ol,
  kindOf: Zr,
  kindOfTest: Je,
  endsWith: il,
  toArray: ll,
  forEachEntry: ul,
  matchAll: dl,
  isHTMLForm: fl,
  hasOwnProperty: Ia,
  hasOwnProp: Ia,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ao,
  freezeMethods: ml,
  toObjectSet: yl,
  toCamelCase: hl,
  noop: gl,
  toFiniteNumber: bl,
  findKey: ro,
  global: At,
  isContextDefined: no,
  isSpecCompliantForm: xl,
  toJSONObject: vl,
  isAsyncFn: wl,
  isThenable: El,
  setImmediate: so,
  asap: Tl,
  isIterable: Sl
};
function ae(e, t, r, n, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), a && (this.response = a, this.status = a.status ? a.status : null);
}
j.inherits(ae, Error, {
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
      config: j.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const oo = ae.prototype, io = {};
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
  io[e] = { value: e };
});
Object.defineProperties(ae, io);
Object.defineProperty(oo, "isAxiosError", { value: !0 });
ae.from = (e, t, r, n, a, s) => {
  const o = Object.create(oo);
  return j.toFlatObject(e, o, function(u) {
    return u !== Error.prototype;
  }, (l) => l !== "isAxiosError"), ae.call(o, e.message, t, r, n, a), o.cause = e, o.name = e.name, s && Object.assign(o, s), o;
};
const Al = null;
function Mn(e) {
  return j.isPlainObject(e) || j.isArray(e);
}
function lo(e) {
  return j.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Pa(e, t, r) {
  return e ? e.concat(t).map(function(a, s) {
    return a = lo(a), !r && s ? "[" + a + "]" : a;
  }).join(r ? "." : "") : t;
}
function _l(e) {
  return j.isArray(e) && !e.some(Mn);
}
const jl = j.toFlatObject(j, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Jr(e, t, r) {
  if (!j.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = j.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, E) {
    return !j.isUndefined(E[v]);
  });
  const n = r.metaTokens, a = r.visitor || f, s = r.dots, o = r.indexes, u = (r.Blob || typeof Blob < "u" && Blob) && j.isSpecCompliantForm(t);
  if (!j.isFunction(a))
    throw new TypeError("visitor must be a function");
  function c(g) {
    if (g === null) return "";
    if (j.isDate(g))
      return g.toISOString();
    if (j.isBoolean(g))
      return g.toString();
    if (!u && j.isBlob(g))
      throw new ae("Blob is not supported. Use a Buffer instead.");
    return j.isArrayBuffer(g) || j.isTypedArray(g) ? u && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function f(g, v, E) {
    let x = g;
    if (g && !E && typeof g == "object") {
      if (j.endsWith(v, "{}"))
        v = n ? v : v.slice(0, -2), g = JSON.stringify(g);
      else if (j.isArray(g) && _l(g) || (j.isFileList(g) || j.endsWith(v, "[]")) && (x = j.toArray(g)))
        return v = lo(v), x.forEach(function(m, S) {
          !(j.isUndefined(m) || m === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Pa([v], S, s) : o === null ? v : v + "[]",
            c(m)
          );
        }), !1;
    }
    return Mn(g) ? !0 : (t.append(Pa(E, v, s), c(g)), !1);
  }
  const d = [], p = Object.assign(jl, {
    defaultVisitor: f,
    convertValue: c,
    isVisitable: Mn
  });
  function y(g, v) {
    if (!j.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      d.push(g), j.forEach(g, function(x, w) {
        (!(j.isUndefined(x) || x === null) && a.call(
          t,
          x,
          j.isString(w) ? w.trim() : w,
          v,
          p
        )) === !0 && y(x, v ? v.concat(w) : [w]);
      }), d.pop();
    }
  }
  if (!j.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function Da(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function na(e, t) {
  this._pairs = [], e && Jr(e, this, t);
}
const co = na.prototype;
co.append = function(t, r) {
  this._pairs.push([t, r]);
};
co.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Da);
  } : Da;
  return this._pairs.map(function(a) {
    return r(a[0]) + "=" + r(a[1]);
  }, "").join("&");
};
function Nl(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function uo(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || Nl;
  j.isFunction(r) && (r = {
    serialize: r
  });
  const a = r && r.serialize;
  let s;
  if (a ? s = a(t, r) : s = j.isURLSearchParams(t) ? t.toString() : new na(t, r).toString(n), s) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class La {
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
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
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
    j.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const fo = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ol = typeof URLSearchParams < "u" ? URLSearchParams : na, Rl = typeof FormData < "u" ? FormData : null, Cl = typeof Blob < "u" ? Blob : null, Fl = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ol,
    FormData: Rl,
    Blob: Cl
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, aa = typeof window < "u" && typeof document < "u", kn = typeof navigator == "object" && navigator || void 0, $l = aa && (!kn || ["ReactNative", "NativeScript", "NS"].indexOf(kn.product) < 0), Il = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Pl = aa && window.location.href || "http://localhost", Dl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: aa,
  hasStandardBrowserEnv: $l,
  hasStandardBrowserWebWorkerEnv: Il,
  navigator: kn,
  origin: Pl
}, Symbol.toStringTag, { value: "Module" })), $e = {
  ...Dl,
  ...Fl
};
function Ll(e, t) {
  return Jr(e, new $e.classes.URLSearchParams(), {
    visitor: function(r, n, a, s) {
      return $e.isNode && j.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function Ml(e) {
  return j.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function kl(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const a = r.length;
  let s;
  for (n = 0; n < a; n++)
    s = r[n], t[s] = e[s];
  return t;
}
function ho(e) {
  function t(r, n, a, s) {
    let o = r[s++];
    if (o === "__proto__") return !0;
    const l = Number.isFinite(+o), u = s >= r.length;
    return o = !o && j.isArray(a) ? a.length : o, u ? (j.hasOwnProp(a, o) ? a[o] = [a[o], n] : a[o] = n, !l) : ((!a[o] || !j.isObject(a[o])) && (a[o] = []), t(r, n, a[o], s) && j.isArray(a[o]) && (a[o] = kl(a[o])), !l);
  }
  if (j.isFormData(e) && j.isFunction(e.entries)) {
    const r = {};
    return j.forEachEntry(e, (n, a) => {
      t(Ml(n), a, r, 0);
    }), r;
  }
  return null;
}
function zl(e, t, r) {
  if (j.isString(e))
    try {
      return (t || JSON.parse)(e), j.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const xr = {
  transitional: fo,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", a = n.indexOf("application/json") > -1, s = j.isObject(t);
    if (s && j.isHTMLForm(t) && (t = new FormData(t)), j.isFormData(t))
      return a ? JSON.stringify(ho(t)) : t;
    if (j.isArrayBuffer(t) || j.isBuffer(t) || j.isStream(t) || j.isFile(t) || j.isBlob(t) || j.isReadableStream(t))
      return t;
    if (j.isArrayBufferView(t))
      return t.buffer;
    if (j.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Ll(t, this.formSerializer).toString();
      if ((l = j.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return Jr(
          l ? { "files[]": t } : t,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return s || a ? (r.setContentType("application/json", !1), zl(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || xr.transitional, n = r && r.forcedJSONParsing, a = this.responseType === "json";
    if (j.isResponse(t) || j.isReadableStream(t))
      return t;
    if (t && j.isString(t) && (n && !this.responseType || a)) {
      const o = !(r && r.silentJSONParsing) && a;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (o)
          throw l.name === "SyntaxError" ? ae.from(l, ae.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
    FormData: $e.classes.FormData,
    Blob: $e.classes.Blob
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
j.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  xr.headers[e] = {};
});
const Bl = j.toObjectSet([
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
]), Ul = (e) => {
  const t = {};
  let r, n, a;
  return e && e.split(`
`).forEach(function(o) {
    a = o.indexOf(":"), r = o.substring(0, a).trim().toLowerCase(), n = o.substring(a + 1).trim(), !(!r || t[r] && Bl[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Ma = Symbol("internals");
function rr(e) {
  return e && String(e).trim().toLowerCase();
}
function Pr(e) {
  return e === !1 || e == null ? e : j.isArray(e) ? e.map(Pr) : String(e);
}
function Vl(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Hl = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function mn(e, t, r, n, a) {
  if (j.isFunction(n))
    return n.call(this, t, r);
  if (a && (t = r), !!j.isString(t)) {
    if (j.isString(n))
      return t.indexOf(n) !== -1;
    if (j.isRegExp(n))
      return n.test(t);
  }
}
function Gl(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function ql(e, t) {
  const r = j.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(a, s, o) {
        return this[n].call(this, t, a, s, o);
      },
      configurable: !0
    });
  });
}
let He = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const a = this;
    function s(l, u, c) {
      const f = rr(u);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const d = j.findKey(a, f);
      (!d || a[d] === void 0 || c === !0 || c === void 0 && a[d] !== !1) && (a[d || u] = Pr(l));
    }
    const o = (l, u) => j.forEach(l, (c, f) => s(c, f, u));
    if (j.isPlainObject(t) || t instanceof this.constructor)
      o(t, r);
    else if (j.isString(t) && (t = t.trim()) && !Hl(t))
      o(Ul(t), r);
    else if (j.isObject(t) && j.isIterable(t)) {
      let l = {}, u, c;
      for (const f of t) {
        if (!j.isArray(f))
          throw TypeError("Object iterator must return a key-value pair");
        l[c = f[0]] = (u = l[c]) ? j.isArray(u) ? [...u, f[1]] : [u, f[1]] : f[1];
      }
      o(l, r);
    } else
      t != null && s(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = rr(t), t) {
      const n = j.findKey(this, t);
      if (n) {
        const a = this[n];
        if (!r)
          return a;
        if (r === !0)
          return Vl(a);
        if (j.isFunction(r))
          return r.call(this, a, n);
        if (j.isRegExp(r))
          return r.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = rr(t), t) {
      const n = j.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || mn(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let a = !1;
    function s(o) {
      if (o = rr(o), o) {
        const l = j.findKey(n, o);
        l && (!r || mn(n, n[l], l, r)) && (delete n[l], a = !0);
      }
    }
    return j.isArray(t) ? t.forEach(s) : s(t), a;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, a = !1;
    for (; n--; ) {
      const s = r[n];
      (!t || mn(this, this[s], s, t, !0)) && (delete this[s], a = !0);
    }
    return a;
  }
  normalize(t) {
    const r = this, n = {};
    return j.forEach(this, (a, s) => {
      const o = j.findKey(n, s);
      if (o) {
        r[o] = Pr(a), delete r[s];
        return;
      }
      const l = t ? Gl(s) : String(s).trim();
      l !== s && delete r[s], r[l] = Pr(a), n[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return j.forEach(this, (n, a) => {
      n != null && n !== !1 && (r[a] = t && j.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
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
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((a) => n.set(a)), n;
  }
  static accessor(t) {
    const n = (this[Ma] = this[Ma] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function s(o) {
      const l = rr(o);
      n[l] || (ql(a, o), n[l] = !0);
    }
    return j.isArray(t) ? t.forEach(s) : s(t), this;
  }
};
He.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
j.reduceDescriptors(He.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
j.freezeMethods(He);
function yn(e, t) {
  const r = this || xr, n = t || r, a = He.from(n.headers);
  let s = n.data;
  return j.forEach(e, function(l) {
    s = l.call(r, s, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), s;
}
function po(e) {
  return !!(e && e.__CANCEL__);
}
function Yt(e, t, r) {
  ae.call(this, e ?? "canceled", ae.ERR_CANCELED, t, r), this.name = "CanceledError";
}
j.inherits(Yt, ae, {
  __CANCEL__: !0
});
function mo(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new ae(
    "Request failed with status code " + r.status,
    [ae.ERR_BAD_REQUEST, ae.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Wl(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Kl(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let a = 0, s = 0, o;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const c = Date.now(), f = n[s];
    o || (o = c), r[a] = u, n[a] = c;
    let d = s, p = 0;
    for (; d !== a; )
      p += r[d++], d = d % e;
    if (a = (a + 1) % e, a === s && (s = (s + 1) % e), c - o < t)
      return;
    const y = f && c - f;
    return y ? Math.round(p * 1e3 / y) : void 0;
  };
}
function Yl(e, t) {
  let r = 0, n = 1e3 / t, a, s;
  const o = (c, f = Date.now()) => {
    r = f, a = null, s && (clearTimeout(s), s = null), e(...c);
  };
  return [(...c) => {
    const f = Date.now(), d = f - r;
    d >= n ? o(c, f) : (a = c, s || (s = setTimeout(() => {
      s = null, o(a);
    }, n - d)));
  }, () => a && o(a)];
}
const Vr = (e, t, r = 3) => {
  let n = 0;
  const a = Kl(50, 250);
  return Yl((s) => {
    const o = s.loaded, l = s.lengthComputable ? s.total : void 0, u = o - n, c = a(u), f = o <= l;
    n = o;
    const d = {
      loaded: o,
      total: l,
      progress: l ? o / l : void 0,
      bytes: u,
      rate: c || void 0,
      estimated: c && l && f ? (l - o) / c : void 0,
      event: s,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, r);
}, ka = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, za = (e) => (...t) => j.asap(() => e(...t)), Xl = $e.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, $e.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL($e.origin),
  $e.navigator && /(msie|trident)/i.test($e.navigator.userAgent)
) : () => !0, Zl = $e.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, a, s) {
      const o = [e + "=" + encodeURIComponent(t)];
      j.isNumber(r) && o.push("expires=" + new Date(r).toGMTString()), j.isString(n) && o.push("path=" + n), j.isString(a) && o.push("domain=" + a), s === !0 && o.push("secure"), document.cookie = o.join("; ");
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
function Ql(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Jl(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function yo(e, t, r) {
  let n = !Ql(t);
  return e && (n || r == !1) ? Jl(e, t) : t;
}
const Ba = (e) => e instanceof He ? { ...e } : e;
function Ot(e, t) {
  t = t || {};
  const r = {};
  function n(c, f, d, p) {
    return j.isPlainObject(c) && j.isPlainObject(f) ? j.merge.call({ caseless: p }, c, f) : j.isPlainObject(f) ? j.merge({}, f) : j.isArray(f) ? f.slice() : f;
  }
  function a(c, f, d, p) {
    if (j.isUndefined(f)) {
      if (!j.isUndefined(c))
        return n(void 0, c, d, p);
    } else return n(c, f, d, p);
  }
  function s(c, f) {
    if (!j.isUndefined(f))
      return n(void 0, f);
  }
  function o(c, f) {
    if (j.isUndefined(f)) {
      if (!j.isUndefined(c))
        return n(void 0, c);
    } else return n(void 0, f);
  }
  function l(c, f, d) {
    if (d in t)
      return n(c, f);
    if (d in e)
      return n(void 0, c);
  }
  const u = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: l,
    headers: (c, f, d) => a(Ba(c), Ba(f), d, !0)
  };
  return j.forEach(Object.keys({ ...e, ...t }), function(f) {
    const d = u[f] || a, p = d(e[f], t[f], f);
    j.isUndefined(p) && d !== l || (r[f] = p);
  }), r;
}
const go = (e) => {
  const t = Ot({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: a, xsrfCookieName: s, headers: o, auth: l } = t;
  t.headers = o = He.from(o), t.url = uo(yo(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), l && o.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let u;
  if (j.isFormData(r)) {
    if ($e.hasStandardBrowserEnv || $e.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((u = o.getContentType()) !== !1) {
      const [c, ...f] = u ? u.split(";").map((d) => d.trim()).filter(Boolean) : [];
      o.setContentType([c || "multipart/form-data", ...f].join("; "));
    }
  }
  if ($e.hasStandardBrowserEnv && (n && j.isFunction(n) && (n = n(t)), n || n !== !1 && Xl(t.url))) {
    const c = a && s && Zl.read(s);
    c && o.set(a, c);
  }
  return t;
}, ec = typeof XMLHttpRequest < "u", tc = ec && function(e) {
  return new Promise(function(r, n) {
    const a = go(e);
    let s = a.data;
    const o = He.from(a.headers).normalize();
    let { responseType: l, onUploadProgress: u, onDownloadProgress: c } = a, f, d, p, y, g;
    function v() {
      y && y(), g && g(), a.cancelToken && a.cancelToken.unsubscribe(f), a.signal && a.signal.removeEventListener("abort", f);
    }
    let E = new XMLHttpRequest();
    E.open(a.method.toUpperCase(), a.url, !0), E.timeout = a.timeout;
    function x() {
      if (!E)
        return;
      const m = He.from(
        "getAllResponseHeaders" in E && E.getAllResponseHeaders()
      ), h = {
        data: !l || l === "text" || l === "json" ? E.responseText : E.response,
        status: E.status,
        statusText: E.statusText,
        headers: m,
        config: e,
        request: E
      };
      mo(function(R) {
        r(R), v();
      }, function(R) {
        n(R), v();
      }, h), E = null;
    }
    "onloadend" in E ? E.onloadend = x : E.onreadystatechange = function() {
      !E || E.readyState !== 4 || E.status === 0 && !(E.responseURL && E.responseURL.indexOf("file:") === 0) || setTimeout(x);
    }, E.onabort = function() {
      E && (n(new ae("Request aborted", ae.ECONNABORTED, e, E)), E = null);
    }, E.onerror = function() {
      n(new ae("Network Error", ae.ERR_NETWORK, e, E)), E = null;
    }, E.ontimeout = function() {
      let S = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const h = a.transitional || fo;
      a.timeoutErrorMessage && (S = a.timeoutErrorMessage), n(new ae(
        S,
        h.clarifyTimeoutError ? ae.ETIMEDOUT : ae.ECONNABORTED,
        e,
        E
      )), E = null;
    }, s === void 0 && o.setContentType(null), "setRequestHeader" in E && j.forEach(o.toJSON(), function(S, h) {
      E.setRequestHeader(h, S);
    }), j.isUndefined(a.withCredentials) || (E.withCredentials = !!a.withCredentials), l && l !== "json" && (E.responseType = a.responseType), c && ([p, g] = Vr(c, !0), E.addEventListener("progress", p)), u && E.upload && ([d, y] = Vr(u), E.upload.addEventListener("progress", d), E.upload.addEventListener("loadend", y)), (a.cancelToken || a.signal) && (f = (m) => {
      E && (n(!m || m.type ? new Yt(null, e, E) : m), E.abort(), E = null);
    }, a.cancelToken && a.cancelToken.subscribe(f), a.signal && (a.signal.aborted ? f() : a.signal.addEventListener("abort", f)));
    const w = Wl(a.url);
    if (w && $e.protocols.indexOf(w) === -1) {
      n(new ae("Unsupported protocol " + w + ":", ae.ERR_BAD_REQUEST, e));
      return;
    }
    E.send(s || null);
  });
}, rc = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), a;
    const s = function(c) {
      if (!a) {
        a = !0, l();
        const f = c instanceof Error ? c : this.reason;
        n.abort(f instanceof ae ? f : new Yt(f instanceof Error ? f.message : f));
      }
    };
    let o = t && setTimeout(() => {
      o = null, s(new ae(`timeout ${t} of ms exceeded`, ae.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (o && clearTimeout(o), o = null, e.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(s) : c.removeEventListener("abort", s);
      }), e = null);
    };
    e.forEach((c) => c.addEventListener("abort", s));
    const { signal: u } = n;
    return u.unsubscribe = () => j.asap(l), u;
  }
}, nc = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, a;
  for (; n < r; )
    a = n + t, yield e.slice(n, a), n = a;
}, ac = async function* (e, t) {
  for await (const r of sc(e))
    yield* nc(r, t);
}, sc = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await t.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, Ua = (e, t, r, n) => {
  const a = ac(e, t);
  let s = 0, o, l = (u) => {
    o || (o = !0, n && n(u));
  };
  return new ReadableStream({
    async pull(u) {
      try {
        const { done: c, value: f } = await a.next();
        if (c) {
          l(), u.close();
          return;
        }
        let d = f.byteLength;
        if (r) {
          let p = s += d;
          r(p);
        }
        u.enqueue(new Uint8Array(f));
      } catch (c) {
        throw l(c), c;
      }
    },
    cancel(u) {
      return l(u), a.return();
    }
  }, {
    highWaterMark: 2
  });
}, en = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", bo = en && typeof ReadableStream == "function", oc = en && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), xo = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, ic = bo && xo(() => {
  let e = !1;
  const t = new Request($e.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Va = 64 * 1024, zn = bo && xo(() => j.isReadableStream(new Response("").body)), Hr = {
  stream: zn && ((e) => e.body)
};
en && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Hr[t] && (Hr[t] = j.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new ae(`Response type '${t}' is not supported`, ae.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const lc = async (e) => {
  if (e == null)
    return 0;
  if (j.isBlob(e))
    return e.size;
  if (j.isSpecCompliantForm(e))
    return (await new Request($e.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (j.isArrayBufferView(e) || j.isArrayBuffer(e))
    return e.byteLength;
  if (j.isURLSearchParams(e) && (e = e + ""), j.isString(e))
    return (await oc(e)).byteLength;
}, cc = async (e, t) => {
  const r = j.toFiniteNumber(e.getContentLength());
  return r ?? lc(t);
}, uc = en && (async (e) => {
  let {
    url: t,
    method: r,
    data: n,
    signal: a,
    cancelToken: s,
    timeout: o,
    onDownloadProgress: l,
    onUploadProgress: u,
    responseType: c,
    headers: f,
    withCredentials: d = "same-origin",
    fetchOptions: p
  } = go(e);
  c = c ? (c + "").toLowerCase() : "text";
  let y = rc([a, s && s.toAbortSignal()], o), g;
  const v = y && y.unsubscribe && (() => {
    y.unsubscribe();
  });
  let E;
  try {
    if (u && ic && r !== "get" && r !== "head" && (E = await cc(f, n)) !== 0) {
      let h = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), T;
      if (j.isFormData(n) && (T = h.headers.get("content-type")) && f.setContentType(T), h.body) {
        const [R, P] = ka(
          E,
          Vr(za(u))
        );
        n = Ua(h.body, Va, R, P);
      }
    }
    j.isString(d) || (d = d ? "include" : "omit");
    const x = "credentials" in Request.prototype;
    g = new Request(t, {
      ...p,
      signal: y,
      method: r.toUpperCase(),
      headers: f.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: x ? d : void 0
    });
    let w = await fetch(g, p);
    const m = zn && (c === "stream" || c === "response");
    if (zn && (l || m && v)) {
      const h = {};
      ["status", "statusText", "headers"].forEach((L) => {
        h[L] = w[L];
      });
      const T = j.toFiniteNumber(w.headers.get("content-length")), [R, P] = l && ka(
        T,
        Vr(za(l), !0)
      ) || [];
      w = new Response(
        Ua(w.body, Va, R, () => {
          P && P(), v && v();
        }),
        h
      );
    }
    c = c || "text";
    let S = await Hr[j.findKey(Hr, c) || "text"](w, e);
    return !m && v && v(), await new Promise((h, T) => {
      mo(h, T, {
        data: S,
        headers: He.from(w.headers),
        status: w.status,
        statusText: w.statusText,
        config: e,
        request: g
      });
    });
  } catch (x) {
    throw v && v(), x && x.name === "TypeError" && /Load failed|fetch/i.test(x.message) ? Object.assign(
      new ae("Network Error", ae.ERR_NETWORK, e, g),
      {
        cause: x.cause || x
      }
    ) : ae.from(x, x && x.code, e, g);
  }
}), Bn = {
  http: Al,
  xhr: tc,
  fetch: uc
};
j.forEach(Bn, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ha = (e) => `- ${e}`, dc = (e) => j.isFunction(e) || e === null || e === !1, vo = {
  getAdapter: (e) => {
    e = j.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const a = {};
    for (let s = 0; s < t; s++) {
      r = e[s];
      let o;
      if (n = r, !dc(r) && (n = Bn[(o = String(r)).toLowerCase()], n === void 0))
        throw new ae(`Unknown adapter '${o}'`);
      if (n)
        break;
      a[o || "#" + s] = n;
    }
    if (!n) {
      const s = Object.entries(a).map(
        ([l, u]) => `adapter ${l} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? s.length > 1 ? `since :
` + s.map(Ha).join(`
`) : " " + Ha(s[0]) : "as no adapter specified";
      throw new ae(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Bn
};
function gn(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Yt(null, e);
}
function Ga(e) {
  return gn(e), e.headers = He.from(e.headers), e.data = yn.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), vo.getAdapter(e.adapter || xr.adapter)(e).then(function(n) {
    return gn(e), n.data = yn.call(
      e,
      e.transformResponse,
      n
    ), n.headers = He.from(n.headers), n;
  }, function(n) {
    return po(n) || (gn(e), n && n.response && (n.response.data = yn.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = He.from(n.response.headers))), Promise.reject(n);
  });
}
const wo = "1.11.0", tn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  tn[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const qa = {};
tn.transitional = function(t, r, n) {
  function a(s, o) {
    return "[Axios v" + wo + "] Transitional option '" + s + "'" + o + (n ? ". " + n : "");
  }
  return (s, o, l) => {
    if (t === !1)
      throw new ae(
        a(o, " has been removed" + (r ? " in " + r : "")),
        ae.ERR_DEPRECATED
      );
    return r && !qa[o] && (qa[o] = !0, console.warn(
      a(
        o,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(s, o, l) : !0;
  };
};
tn.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function fc(e, t, r) {
  if (typeof e != "object")
    throw new ae("options must be an object", ae.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let a = n.length;
  for (; a-- > 0; ) {
    const s = n[a], o = t[s];
    if (o) {
      const l = e[s], u = l === void 0 || o(l, s, e);
      if (u !== !0)
        throw new ae("option " + s + " must be " + u, ae.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new ae("Unknown option " + s, ae.ERR_BAD_OPTION);
  }
}
const Dr = {
  assertOptions: fc,
  validators: tn
}, tt = Dr.validators;
let _t = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new La(),
      response: new La()
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
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let a = {};
        Error.captureStackTrace ? Error.captureStackTrace(a) : a = new Error();
        const s = a.stack ? a.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? s && !String(n.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + s) : n.stack = s;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Ot(this.defaults, r);
    const { transitional: n, paramsSerializer: a, headers: s } = r;
    n !== void 0 && Dr.assertOptions(n, {
      silentJSONParsing: tt.transitional(tt.boolean),
      forcedJSONParsing: tt.transitional(tt.boolean),
      clarifyTimeoutError: tt.transitional(tt.boolean)
    }, !1), a != null && (j.isFunction(a) ? r.paramsSerializer = {
      serialize: a
    } : Dr.assertOptions(a, {
      encode: tt.function,
      serialize: tt.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), Dr.assertOptions(r, {
      baseUrl: tt.spelling("baseURL"),
      withXsrfToken: tt.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let o = s && j.merge(
      s.common,
      s[r.method]
    );
    s && j.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete s[g];
      }
    ), r.headers = He.concat(o, s);
    const l = [];
    let u = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(r) === !1 || (u = u && v.synchronous, l.unshift(v.fulfilled, v.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(v) {
      c.push(v.fulfilled, v.rejected);
    });
    let f, d = 0, p;
    if (!u) {
      const g = [Ga.bind(this), void 0];
      for (g.unshift(...l), g.push(...c), p = g.length, f = Promise.resolve(r); d < p; )
        f = f.then(g[d++], g[d++]);
      return f;
    }
    p = l.length;
    let y = r;
    for (d = 0; d < p; ) {
      const g = l[d++], v = l[d++];
      try {
        y = g(y);
      } catch (E) {
        v.call(this, E);
        break;
      }
    }
    try {
      f = Ga.call(this, y);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, p = c.length; d < p; )
      f = f.then(c[d++], c[d++]);
    return f;
  }
  getUri(t) {
    t = Ot(this.defaults, t);
    const r = yo(t.baseURL, t.url, t.allowAbsoluteUrls);
    return uo(r, t.params, t.paramsSerializer);
  }
};
j.forEach(["delete", "get", "head", "options"], function(t) {
  _t.prototype[t] = function(r, n) {
    return this.request(Ot(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
j.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(s, o, l) {
      return this.request(Ot(l || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: o
      }));
    };
  }
  _t.prototype[t] = r(), _t.prototype[t + "Form"] = r(!0);
});
let hc = class Eo {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(s) {
      r = s;
    });
    const n = this;
    this.promise.then((a) => {
      if (!n._listeners) return;
      let s = n._listeners.length;
      for (; s-- > 0; )
        n._listeners[s](a);
      n._listeners = null;
    }), this.promise.then = (a) => {
      let s;
      const o = new Promise((l) => {
        n.subscribe(l), s = l;
      }).then(a);
      return o.cancel = function() {
        n.unsubscribe(s);
      }, o;
    }, t(function(s, o, l) {
      n.reason || (n.reason = new Yt(s, o, l), r(n.reason));
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
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (n) => {
      t.abort(n);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Eo(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
};
function pc(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function mc(e) {
  return j.isObject(e) && e.isAxiosError === !0;
}
const Un = {
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
Object.entries(Un).forEach(([e, t]) => {
  Un[t] = e;
});
function To(e) {
  const t = new _t(e), r = Qs(_t.prototype.request, t);
  return j.extend(r, _t.prototype, t, { allOwnKeys: !0 }), j.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(a) {
    return To(Ot(e, a));
  }, r;
}
const Q = To(xr);
Q.Axios = _t;
Q.CanceledError = Yt;
Q.CancelToken = hc;
Q.isCancel = po;
Q.VERSION = wo;
Q.toFormData = Jr;
Q.AxiosError = ae;
Q.Cancel = Q.CanceledError;
Q.all = function(t) {
  return Promise.all(t);
};
Q.spread = pc;
Q.isAxiosError = mc;
Q.mergeConfig = Ot;
Q.AxiosHeaders = He;
Q.formToJSON = (e) => ho(j.isHTMLForm(e) ? new FormData(e) : e);
Q.getAdapter = vo.getAdapter;
Q.HttpStatusCode = Un;
Q.default = Q;
const {
  Axios: Em,
  AxiosError: Tm,
  CanceledError: Sm,
  isCancel: Am,
  CancelToken: _m,
  VERSION: jm,
  all: Nm,
  Cancel: Om,
  isAxiosError: Rm,
  spread: Cm,
  toFormData: Fm,
  AxiosHeaders: $m,
  HttpStatusCode: Im,
  formToJSON: Pm,
  getAdapter: Dm,
  mergeConfig: Lm
} = Q;
var bn, Wa;
function yc() {
  if (Wa) return bn;
  Wa = 1;
  function e(x) {
    this._maxSize = x, this.clear();
  }
  e.prototype.clear = function() {
    this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
  }, e.prototype.get = function(x) {
    return this._values[x];
  }, e.prototype.set = function(x, w) {
    return this._size >= this._maxSize && this.clear(), x in this._values || this._size++, this._values[x] = w;
  };
  var t = /[^.^\]^[]+|(?=\[\]|\.\.)/g, r = /^\d+$/, n = /^\d/, a = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, s = /^\s*(['"]?)(.*?)(\1)\s*$/, o = 512, l = new e(o), u = new e(o), c = new e(o);
  bn = {
    Cache: e,
    split: d,
    normalizePath: f,
    setter: function(x) {
      var w = f(x);
      return u.get(x) || u.set(x, function(S, h) {
        for (var T = 0, R = w.length, P = S; T < R - 1; ) {
          var L = w[T];
          if (L === "__proto__" || L === "constructor" || L === "prototype")
            return S;
          P = P[w[T++]];
        }
        P[w[T]] = h;
      });
    },
    getter: function(x, w) {
      var m = f(x);
      return c.get(x) || c.set(x, function(h) {
        for (var T = 0, R = m.length; T < R; )
          if (h != null || !w) h = h[m[T++]];
          else return;
        return h;
      });
    },
    join: function(x) {
      return x.reduce(function(w, m) {
        return w + (y(m) || r.test(m) ? "[" + m + "]" : (w ? "." : "") + m);
      }, "");
    },
    forEach: function(x, w, m) {
      p(Array.isArray(x) ? x : d(x), w, m);
    }
  };
  function f(x) {
    return l.get(x) || l.set(
      x,
      d(x).map(function(w) {
        return w.replace(s, "$2");
      })
    );
  }
  function d(x) {
    return x.match(t) || [""];
  }
  function p(x, w, m) {
    var S = x.length, h, T, R, P;
    for (T = 0; T < S; T++)
      h = x[T], h && (E(h) && (h = '"' + h + '"'), P = y(h), R = !P && /^\d+$/.test(h), w.call(m, h, P, R, T, x));
  }
  function y(x) {
    return typeof x == "string" && x && ["'", '"'].indexOf(x.charAt(0)) !== -1;
  }
  function g(x) {
    return x.match(n) && !x.match(r);
  }
  function v(x) {
    return a.test(x);
  }
  function E(x) {
    return !y(x) && (g(x) || v(x));
  }
  return bn;
}
var jt = yc(), xn, Ka;
function gc() {
  if (Ka) return xn;
  Ka = 1;
  const e = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, t = (f) => f.match(e) || [], r = (f) => f[0].toUpperCase() + f.slice(1), n = (f, d) => t(f).join(d).toLowerCase(), a = (f) => t(f).reduce(
    (d, p) => `${d}${d ? p[0].toUpperCase() + p.slice(1).toLowerCase() : p.toLowerCase()}`,
    ""
  );
  return xn = {
    words: t,
    upperFirst: r,
    camelCase: a,
    pascalCase: (f) => r(a(f)),
    snakeCase: (f) => n(f, "_"),
    kebabCase: (f) => n(f, "-"),
    sentenceCase: (f) => r(n(f, " ")),
    titleCase: (f) => t(f).map(r).join(" ")
  }, xn;
}
var vn = gc(), jr = { exports: {} }, Ya;
function bc() {
  if (Ya) return jr.exports;
  Ya = 1, jr.exports = function(a) {
    return e(t(a), a);
  }, jr.exports.array = e;
  function e(a, s) {
    var o = a.length, l = new Array(o), u = {}, c = o, f = r(s), d = n(a);
    for (s.forEach(function(y) {
      if (!d.has(y[0]) || !d.has(y[1]))
        throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }); c--; )
      u[c] || p(a[c], c, /* @__PURE__ */ new Set());
    return l;
    function p(y, g, v) {
      if (v.has(y)) {
        var E;
        try {
          E = ", node was:" + JSON.stringify(y);
        } catch {
          E = "";
        }
        throw new Error("Cyclic dependency" + E);
      }
      if (!d.has(y))
        throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(y));
      if (!u[g]) {
        u[g] = !0;
        var x = f.get(y) || /* @__PURE__ */ new Set();
        if (x = Array.from(x), g = x.length) {
          v.add(y);
          do {
            var w = x[--g];
            p(w, d.get(w), v);
          } while (g);
          v.delete(y);
        }
        l[--o] = y;
      }
    }
  }
  function t(a) {
    for (var s = /* @__PURE__ */ new Set(), o = 0, l = a.length; o < l; o++) {
      var u = a[o];
      s.add(u[0]), s.add(u[1]);
    }
    return Array.from(s);
  }
  function r(a) {
    for (var s = /* @__PURE__ */ new Map(), o = 0, l = a.length; o < l; o++) {
      var u = a[o];
      s.has(u[0]) || s.set(u[0], /* @__PURE__ */ new Set()), s.has(u[1]) || s.set(u[1], /* @__PURE__ */ new Set()), s.get(u[0]).add(u[1]);
    }
    return s;
  }
  function n(a) {
    for (var s = /* @__PURE__ */ new Map(), o = 0, l = a.length; o < l; o++)
      s.set(a[o], o);
    return s;
  }
  return jr.exports;
}
var xc = bc();
const vc = /* @__PURE__ */ Zs(xc), wc = Object.prototype.toString, Ec = Error.prototype.toString, Tc = RegExp.prototype.toString, Sc = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", Ac = /^Symbol\((.*)\)(.*)$/;
function _c(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function Xa(e, t = !1) {
  if (e == null || e === !0 || e === !1) return "" + e;
  const r = typeof e;
  if (r === "number") return _c(e);
  if (r === "string") return t ? `"${e}"` : e;
  if (r === "function") return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol") return Sc.call(e).replace(Ac, "Symbol($1)");
  const n = wc.call(e).slice(8, -1);
  return n === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : n === "Error" || e instanceof Error ? "[" + Ec.call(e) + "]" : n === "RegExp" ? Tc.call(e) : null;
}
function ht(e, t) {
  let r = Xa(e, t);
  return r !== null ? r : JSON.stringify(e, function(n, a) {
    let s = Xa(this[n], t);
    return s !== null ? s : a;
  }, 2);
}
function So(e) {
  return e == null ? [] : [].concat(e);
}
let Ao, _o, jo, jc = /\$\{\s*(\w+)\s*\}/g;
Ao = Symbol.toStringTag;
class Za {
  constructor(t, r, n, a) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[Ao] = "Error", this.name = "ValidationError", this.value = r, this.path = n, this.type = a, this.errors = [], this.inner = [], So(t).forEach((s) => {
      if (De.isError(s)) {
        this.errors.push(...s.errors);
        const o = s.inner.length ? s.inner : [s];
        this.inner.push(...o);
      } else
        this.errors.push(s);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
_o = Symbol.hasInstance;
jo = Symbol.toStringTag;
class De extends Error {
  static formatError(t, r) {
    const n = r.label || r.path || "this";
    return r = Object.assign({}, r, {
      path: n,
      originalPath: r.path
    }), typeof t == "string" ? t.replace(jc, (a, s) => ht(r[s])) : typeof t == "function" ? t(r) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, r, n, a, s) {
    const o = new Za(t, r, n, a);
    if (s)
      return o;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[jo] = "Error", this.name = o.name, this.message = o.message, this.type = o.type, this.value = o.value, this.path = o.path, this.errors = o.errors, this.inner = o.inner, Error.captureStackTrace && Error.captureStackTrace(this, De);
  }
  static [_o](t) {
    return Za[Symbol.hasInstance](t) || super[Symbol.hasInstance](t);
  }
}
let nt = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  defined: "${path} must be defined",
  notNull: "${path} cannot be null",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path: e,
    type: t,
    value: r,
    originalValue: n
  }) => {
    const a = n != null && n !== r ? ` (cast from the value \`${ht(n, !0)}\`).` : ".";
    return t !== "mixed" ? `${e} must be a \`${t}\` type, but the final value was: \`${ht(r, !0)}\`` + a : `${e} must match the configured type. The validated value was: \`${ht(r, !0)}\`` + a;
  }
}, ze = {
  length: "${path} must be exactly ${length} characters",
  min: "${path} must be at least ${min} characters",
  max: "${path} must be at most ${max} characters",
  matches: '${path} must match the following: "${regex}"',
  email: "${path} must be a valid email",
  url: "${path} must be a valid URL",
  uuid: "${path} must be a valid UUID",
  datetime: "${path} must be a valid ISO date-time",
  datetime_precision: "${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",
  datetime_offset: '${path} must be a valid ISO date-time with UTC "Z" timezone',
  trim: "${path} must be a trimmed string",
  lowercase: "${path} must be a lowercase string",
  uppercase: "${path} must be a upper case string"
}, mt = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, Vn = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, Nc = {
  isValue: "${path} field must be ${value}"
}, Lr = {
  noUnknown: "${path} field has unspecified keys: ${unknown}",
  exact: "${path} object contains unknown properties: ${properties}"
}, Mr = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, Oc = {
  notType: (e) => {
    const {
      path: t,
      value: r,
      spec: n
    } = e, a = n.types.length;
    if (Array.isArray(r)) {
      if (r.length < a) return `${t} tuple value has too few items, expected a length of ${a} but got ${r.length} for value: \`${ht(r, !0)}\``;
      if (r.length > a) return `${t} tuple value has too many items, expected a length of ${a} but got ${r.length} for value: \`${ht(r, !0)}\``;
    }
    return De.formatError(nt.notType, e);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: nt,
  string: ze,
  number: mt,
  date: Vn,
  object: Lr,
  array: Mr,
  boolean: Nc,
  tuple: Oc
});
const rn = (e) => e && e.__isYupSchema__;
class Gr {
  static fromOptions(t, r) {
    if (!r.then && !r.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: n,
      then: a,
      otherwise: s
    } = r, o = typeof n == "function" ? n : (...l) => l.every((u) => u === n);
    return new Gr(t, (l, u) => {
      var c;
      let f = o(...l) ? a : s;
      return (c = f?.(u)) != null ? c : u;
    });
  }
  constructor(t, r) {
    this.fn = void 0, this.refs = t, this.refs = t, this.fn = r;
  }
  resolve(t, r) {
    let n = this.refs.map((s) => (
      // TODO: ? operator here?
      s.getValue(r?.value, r?.parent, r?.context)
    )), a = this.fn(n, t, r);
    if (a === void 0 || // @ts-ignore this can be base
    a === t)
      return t;
    if (!rn(a)) throw new TypeError("conditions must return a schema object");
    return a.resolve(r);
  }
}
const Nr = {
  context: "$",
  value: "."
};
class Ct {
  constructor(t, r = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string") throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === Nr.context, this.isValue = this.key[0] === Nr.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? Nr.context : this.isValue ? Nr.value : "";
    this.path = this.key.slice(n.length), this.getter = this.path && jt.getter(this.path, !0), this.map = r.map;
  }
  getValue(t, r, n) {
    let a = this.isContext ? n : this.isValue ? t : r;
    return this.getter && (a = this.getter(a || {})), this.map && (a = this.map(a)), a;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */
  cast(t, r) {
    return this.getValue(t, r?.parent, r?.context);
  }
  resolve() {
    return this;
  }
  describe() {
    return {
      type: "ref",
      key: this.key
    };
  }
  toString() {
    return `Ref(${this.key})`;
  }
  static isRef(t) {
    return t && t.__isYupRef;
  }
}
Ct.prototype.__isYupRef = !0;
const ft = (e) => e == null;
function Bt(e) {
  function t({
    value: r,
    path: n = "",
    options: a,
    originalValue: s,
    schema: o
  }, l, u) {
    const {
      name: c,
      test: f,
      params: d,
      message: p,
      skipAbsent: y
    } = e;
    let {
      parent: g,
      context: v,
      abortEarly: E = o.spec.abortEarly,
      disableStackTrace: x = o.spec.disableStackTrace
    } = a;
    const w = {
      value: r,
      parent: g,
      context: v
    };
    function m(_ = {}) {
      const B = No(Object.assign({
        value: r,
        originalValue: s,
        label: o.spec.label,
        path: _.path || n,
        spec: o.spec,
        disableStackTrace: _.disableStackTrace || x
      }, d, _.params), w), z = new De(De.formatError(_.message || p, B), r, B.path, _.type || c, B.disableStackTrace);
      return z.params = B, z;
    }
    const S = E ? l : u;
    let h = {
      path: n,
      parent: g,
      type: c,
      from: a.from,
      createError: m,
      resolve(_) {
        return Oo(_, w);
      },
      options: a,
      originalValue: s,
      schema: o
    };
    const T = (_) => {
      De.isError(_) ? S(_) : _ ? u(null) : S(m());
    }, R = (_) => {
      De.isError(_) ? S(_) : l(_);
    };
    if (y && ft(r))
      return T(!0);
    let L;
    try {
      var H;
      if (L = f.call(h, r, h), typeof ((H = L) == null ? void 0 : H.then) == "function") {
        if (a.sync)
          throw new Error(`Validation test of type: "${h.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(L).then(T, R);
      }
    } catch (_) {
      R(_);
      return;
    }
    T(L);
  }
  return t.OPTIONS = e, t;
}
function No(e, t) {
  if (!e) return e;
  for (const r of Object.keys(e))
    e[r] = Oo(e[r], t);
  return e;
}
function Oo(e, t) {
  return Ct.isRef(e) ? e.getValue(t.value, t.parent, t.context) : e;
}
function Rc(e, t, r, n = r) {
  let a, s, o;
  return t ? (jt.forEach(t, (l, u, c) => {
    let f = u ? l.slice(1, l.length - 1) : l;
    e = e.resolve({
      context: n,
      parent: a,
      value: r
    });
    let d = e.type === "tuple", p = c ? parseInt(f, 10) : 0;
    if (e.innerType || d) {
      if (d && !c) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);
      if (r && p >= r.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${l}, in the path: ${t}. because there is no value at that index. `);
      a = r, r = r && r[p], e = d ? e.spec.types[p] : e.innerType;
    }
    if (!c) {
      if (!e.fields || !e.fields[f]) throw new Error(`The schema does not contain the path: ${t}. (failed at: ${o} which is a type: "${e.type}")`);
      a = r, r = r && r[f], e = e.fields[f];
    }
    s = f, o = u ? "[" + l + "]" : "." + l;
  }), {
    schema: e,
    parent: a,
    parentPath: s
  }) : {
    parent: a,
    parentPath: t,
    schema: e
  };
}
class qr extends Set {
  describe() {
    const t = [];
    for (const r of this.values())
      t.push(Ct.isRef(r) ? r.describe() : r);
    return t;
  }
  resolveAll(t) {
    let r = [];
    for (const n of this.values())
      r.push(t(n));
    return r;
  }
  clone() {
    return new qr(this.values());
  }
  merge(t, r) {
    const n = this.clone();
    return t.forEach((a) => n.add(a)), r.forEach((a) => n.delete(a)), n;
  }
}
function Vt(e, t = /* @__PURE__ */ new Map()) {
  if (rn(e) || !e || typeof e != "object") return e;
  if (t.has(e)) return t.get(e);
  let r;
  if (e instanceof Date)
    r = new Date(e.getTime()), t.set(e, r);
  else if (e instanceof RegExp)
    r = new RegExp(e), t.set(e, r);
  else if (Array.isArray(e)) {
    r = new Array(e.length), t.set(e, r);
    for (let n = 0; n < e.length; n++) r[n] = Vt(e[n], t);
  } else if (e instanceof Map) {
    r = /* @__PURE__ */ new Map(), t.set(e, r);
    for (const [n, a] of e.entries()) r.set(n, Vt(a, t));
  } else if (e instanceof Set) {
    r = /* @__PURE__ */ new Set(), t.set(e, r);
    for (const n of e) r.add(Vt(n, t));
  } else if (e instanceof Object) {
    r = {}, t.set(e, r);
    for (const [n, a] of Object.entries(e)) r[n] = Vt(a, t);
  } else
    throw Error(`Unable to clone ${e}`);
  return r;
}
function Cc(e) {
  if (!(e != null && e.length))
    return;
  const t = [];
  let r = "", n = !1, a = !1;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (o === "[" && !a) {
      r && (t.push(...r.split(".").filter(Boolean)), r = ""), n = !0;
      continue;
    }
    if (o === "]" && !a) {
      r && (/^\d+$/.test(r) ? t.push(r) : t.push(r.replace(/^"|"$/g, "")), r = ""), n = !1;
      continue;
    }
    if (o === '"') {
      a = !a;
      continue;
    }
    if (o === "." && !n && !a) {
      r && (t.push(r), r = "");
      continue;
    }
    r += o;
  }
  return r && t.push(...r.split(".").filter(Boolean)), t;
}
function Fc(e, t) {
  const r = t ? `${t}.${e.path}` : e.path;
  return e.errors.map((n) => ({
    message: n,
    path: Cc(r)
  }));
}
function Ro(e, t) {
  var r;
  if (!((r = e.inner) != null && r.length) && e.errors.length)
    return Fc(e, t);
  const n = t ? `${t}.${e.path}` : e.path;
  return e.inner.flatMap((a) => Ro(a, n));
}
class Ye {
  constructor(t) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new qr(), this._blacklist = new qr(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(nt.notType);
    }), this.type = t.type, this._typeCheck = t.check, this.spec = Object.assign({
      strip: !1,
      strict: !1,
      abortEarly: !0,
      recursive: !0,
      disableStackTrace: !1,
      nullable: !1,
      optional: !0,
      coerce: !0
    }, t?.spec), this.withMutation((r) => {
      r.nonNullable();
    });
  }
  // TODO: remove
  get _type() {
    return this.type;
  }
  clone(t) {
    if (this._mutate)
      return t && Object.assign(this.spec, t), this;
    const r = Object.create(Object.getPrototypeOf(this));
    return r.type = this.type, r._typeCheck = this._typeCheck, r._whitelist = this._whitelist.clone(), r._blacklist = this._blacklist.clone(), r.internalTests = Object.assign({}, this.internalTests), r.exclusiveTests = Object.assign({}, this.exclusiveTests), r.deps = [...this.deps], r.conditions = [...this.conditions], r.tests = [...this.tests], r.transforms = [...this.transforms], r.spec = Vt(Object.assign({}, this.spec, t)), r;
  }
  label(t) {
    let r = this.clone();
    return r.spec.label = t, r;
  }
  meta(...t) {
    if (t.length === 0) return this.spec.meta;
    let r = this.clone();
    return r.spec.meta = Object.assign(r.spec.meta || {}, t[0]), r;
  }
  withMutation(t) {
    let r = this._mutate;
    this._mutate = !0;
    let n = t(this);
    return this._mutate = r, n;
  }
  concat(t) {
    if (!t || t === this) return this;
    if (t.type !== this.type && this.type !== "mixed") throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);
    let r = this, n = t.clone();
    const a = Object.assign({}, r.spec, n.spec);
    return n.spec = a, n.internalTests = Object.assign({}, r.internalTests, n.internalTests), n._whitelist = r._whitelist.merge(t._whitelist, t._blacklist), n._blacklist = r._blacklist.merge(t._blacklist, t._whitelist), n.tests = r.tests, n.exclusiveTests = r.exclusiveTests, n.withMutation((s) => {
      t.tests.forEach((o) => {
        s.test(o.OPTIONS);
      });
    }), n.transforms = [...r.transforms, ...n.transforms], n;
  }
  isType(t) {
    return t == null ? !!(this.spec.nullable && t === null || this.spec.optional && t === void 0) : this._typeCheck(t);
  }
  resolve(t) {
    let r = this;
    if (r.conditions.length) {
      let n = r.conditions;
      r = r.clone(), r.conditions = [], r = n.reduce((a, s) => s.resolve(a, t), r), r = r.resolve(t);
    }
    return r;
  }
  resolveOptions(t) {
    var r, n, a, s;
    return Object.assign({}, t, {
      from: t.from || [],
      strict: (r = t.strict) != null ? r : this.spec.strict,
      abortEarly: (n = t.abortEarly) != null ? n : this.spec.abortEarly,
      recursive: (a = t.recursive) != null ? a : this.spec.recursive,
      disableStackTrace: (s = t.disableStackTrace) != null ? s : this.spec.disableStackTrace
    });
  }
  /**
   * Run the configured transform pipeline over an input value.
   */
  cast(t, r = {}) {
    let n = this.resolve(Object.assign({}, r, {
      value: t
      // parent: options.parent,
      // context: options.context,
    })), a = r.assert === "ignore-optionality", s = n._cast(t, r);
    if (r.assert !== !1 && !n.isType(s)) {
      if (a && ft(s))
        return s;
      let o = ht(t), l = ht(s);
      throw new TypeError(`The value of ${r.path || "field"} could not be cast to a value that satisfies the schema type: "${n.type}". 

attempted value: ${o} 
` + (l !== o ? `result of cast: ${l}` : ""));
    }
    return s;
  }
  _cast(t, r) {
    let n = t === void 0 ? t : this.transforms.reduce((a, s) => s.call(this, a, t, this, r), t);
    return n === void 0 && (n = this.getDefault(r)), n;
  }
  _validate(t, r = {}, n, a) {
    let {
      path: s,
      originalValue: o = t,
      strict: l = this.spec.strict
    } = r, u = t;
    l || (u = this._cast(u, Object.assign({
      assert: !1
    }, r)));
    let c = [];
    for (let f of Object.values(this.internalTests))
      f && c.push(f);
    this.runTests({
      path: s,
      value: u,
      originalValue: o,
      options: r,
      tests: c
    }, n, (f) => {
      if (f.length)
        return a(f, u);
      this.runTests({
        path: s,
        value: u,
        originalValue: o,
        options: r,
        tests: this.tests
      }, n, a);
    });
  }
  /**
   * Executes a set of validations, either schema, produced Tests or a nested
   * schema validate result.
   */
  runTests(t, r, n) {
    let a = !1, {
      tests: s,
      value: o,
      originalValue: l,
      path: u,
      options: c
    } = t, f = (v) => {
      a || (a = !0, r(v, o));
    }, d = (v) => {
      a || (a = !0, n(v, o));
    }, p = s.length, y = [];
    if (!p) return d([]);
    let g = {
      value: o,
      originalValue: l,
      path: u,
      options: c,
      schema: this
    };
    for (let v = 0; v < s.length; v++) {
      const E = s[v];
      E(g, f, function(w) {
        w && (Array.isArray(w) ? y.push(...w) : y.push(w)), --p <= 0 && d(y);
      });
    }
  }
  asNestedTest({
    key: t,
    index: r,
    parent: n,
    parentPath: a,
    originalParent: s,
    options: o
  }) {
    const l = t ?? r;
    if (l == null)
      throw TypeError("Must include `key` or `index` for nested validations");
    const u = typeof l == "number";
    let c = n[l];
    const f = Object.assign({}, o, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: !0,
      parent: n,
      value: c,
      originalValue: s[l],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [u ? "index" : "key"]: l,
      path: u || l.includes(".") ? `${a || ""}[${u ? l : `"${l}"`}]` : (a ? `${a}.` : "") + t
    });
    return (d, p, y) => this.resolve(f)._validate(c, f, p, y);
  }
  validate(t, r) {
    var n;
    let a = this.resolve(Object.assign({}, r, {
      value: t
    })), s = (n = r?.disableStackTrace) != null ? n : a.spec.disableStackTrace;
    return new Promise((o, l) => a._validate(t, r, (u, c) => {
      De.isError(u) && (u.value = c), l(u);
    }, (u, c) => {
      u.length ? l(new De(u, c, void 0, void 0, s)) : o(c);
    }));
  }
  validateSync(t, r) {
    var n;
    let a = this.resolve(Object.assign({}, r, {
      value: t
    })), s, o = (n = r?.disableStackTrace) != null ? n : a.spec.disableStackTrace;
    return a._validate(t, Object.assign({}, r, {
      sync: !0
    }), (l, u) => {
      throw De.isError(l) && (l.value = u), l;
    }, (l, u) => {
      if (l.length) throw new De(l, t, void 0, void 0, o);
      s = u;
    }), s;
  }
  isValid(t, r) {
    return this.validate(t, r).then(() => !0, (n) => {
      if (De.isError(n)) return !1;
      throw n;
    });
  }
  isValidSync(t, r) {
    try {
      return this.validateSync(t, r), !0;
    } catch (n) {
      if (De.isError(n)) return !1;
      throw n;
    }
  }
  _getDefault(t) {
    let r = this.spec.default;
    return r == null ? r : typeof r == "function" ? r.call(this, t) : Vt(r);
  }
  getDefault(t) {
    return this.resolve(t || {})._getDefault(t);
  }
  default(t) {
    return arguments.length === 0 ? this._getDefault() : this.clone({
      default: t
    });
  }
  strict(t = !0) {
    return this.clone({
      strict: t
    });
  }
  nullability(t, r) {
    const n = this.clone({
      nullable: t
    });
    return n.internalTests.nullable = Bt({
      message: r,
      name: "nullable",
      test(a) {
        return a === null ? this.schema.spec.nullable : !0;
      }
    }), n;
  }
  optionality(t, r) {
    const n = this.clone({
      optional: t
    });
    return n.internalTests.optionality = Bt({
      message: r,
      name: "optionality",
      test(a) {
        return a === void 0 ? this.schema.spec.optional : !0;
      }
    }), n;
  }
  optional() {
    return this.optionality(!0);
  }
  defined(t = nt.defined) {
    return this.optionality(!1, t);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(t = nt.notNull) {
    return this.nullability(!1, t);
  }
  required(t = nt.required) {
    return this.clone().withMutation((r) => r.nonNullable(t).defined(t));
  }
  notRequired() {
    return this.clone().withMutation((t) => t.nullable().optional());
  }
  transform(t) {
    let r = this.clone();
    return r.transforms.push(t), r;
  }
  /**
   * Adds a test function to the schema's queue of tests.
   * tests can be exclusive or non-exclusive.
   *
   * - exclusive tests, will replace any existing tests of the same name.
   * - non-exclusive: can be stacked
   *
   * If a non-exclusive test is added to a schema with an exclusive test of the same name
   * the exclusive test is removed and further tests of the same name will be stacked.
   *
   * If an exclusive test is added to a schema with non-exclusive tests of the same name
   * the previous tests are removed and further tests of the same name will replace each other.
   */
  test(...t) {
    let r;
    if (t.length === 1 ? typeof t[0] == "function" ? r = {
      test: t[0]
    } : r = t[0] : t.length === 2 ? r = {
      name: t[0],
      test: t[1]
    } : r = {
      name: t[0],
      message: t[1],
      test: t[2]
    }, r.message === void 0 && (r.message = nt.default), typeof r.test != "function") throw new TypeError("`test` is a required parameters");
    let n = this.clone(), a = Bt(r), s = r.exclusive || r.name && n.exclusiveTests[r.name] === !0;
    if (r.exclusive && !r.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return r.name && (n.exclusiveTests[r.name] = !!r.exclusive), n.tests = n.tests.filter((o) => !(o.OPTIONS.name === r.name && (s || o.OPTIONS.test === a.OPTIONS.test))), n.tests.push(a), n;
  }
  when(t, r) {
    !Array.isArray(t) && typeof t != "string" && (r = t, t = ".");
    let n = this.clone(), a = So(t).map((s) => new Ct(s));
    return a.forEach((s) => {
      s.isSibling && n.deps.push(s.key);
    }), n.conditions.push(typeof r == "function" ? new Gr(a, r) : Gr.fromOptions(a, r)), n;
  }
  typeError(t) {
    let r = this.clone();
    return r.internalTests.typeError = Bt({
      message: t,
      name: "typeError",
      skipAbsent: !0,
      test(n) {
        return this.schema._typeCheck(n) ? !0 : this.createError({
          params: {
            type: this.schema.type
          }
        });
      }
    }), r;
  }
  oneOf(t, r = nt.oneOf) {
    let n = this.clone();
    return t.forEach((a) => {
      n._whitelist.add(a), n._blacklist.delete(a);
    }), n.internalTests.whiteList = Bt({
      message: r,
      name: "oneOf",
      skipAbsent: !0,
      test(a) {
        let s = this.schema._whitelist, o = s.resolveAll(this.resolve);
        return o.includes(a) ? !0 : this.createError({
          params: {
            values: Array.from(s).join(", "),
            resolved: o
          }
        });
      }
    }), n;
  }
  notOneOf(t, r = nt.notOneOf) {
    let n = this.clone();
    return t.forEach((a) => {
      n._blacklist.add(a), n._whitelist.delete(a);
    }), n.internalTests.blacklist = Bt({
      message: r,
      name: "notOneOf",
      test(a) {
        let s = this.schema._blacklist, o = s.resolveAll(this.resolve);
        return o.includes(a) ? this.createError({
          params: {
            values: Array.from(s).join(", "),
            resolved: o
          }
        }) : !0;
      }
    }), n;
  }
  strip(t = !0) {
    let r = this.clone();
    return r.spec.strip = t, r;
  }
  /**
   * Return a serialized description of the schema including validations, flags, types etc.
   *
   * @param options Provide any needed context for resolving runtime schema alterations (lazy, when conditions, etc).
   */
  describe(t) {
    const r = (t ? this.resolve(t) : this).clone(), {
      label: n,
      meta: a,
      optional: s,
      nullable: o
    } = r.spec;
    return {
      meta: a,
      label: n,
      optional: s,
      nullable: o,
      default: r.getDefault(t),
      type: r.type,
      oneOf: r._whitelist.describe(),
      notOneOf: r._blacklist.describe(),
      tests: r.tests.filter((u, c, f) => f.findIndex((d) => d.OPTIONS.name === u.OPTIONS.name) === c).map((u) => {
        const c = u.OPTIONS.params && t ? No(Object.assign({}, u.OPTIONS.params), t) : u.OPTIONS.params;
        return {
          name: u.OPTIONS.name,
          params: c
        };
      })
    };
  }
  get "~standard"() {
    const t = this;
    return {
      version: 1,
      vendor: "yup",
      async validate(n) {
        try {
          return {
            value: await t.validate(n, {
              abortEarly: !1
            })
          };
        } catch (a) {
          if (a instanceof De)
            return {
              issues: Ro(a)
            };
          throw a;
        }
      }
    };
  }
}
Ye.prototype.__isYupSchema__ = !0;
for (const e of ["validate", "validateSync"]) Ye.prototype[`${e}At`] = function(t, r, n = {}) {
  const {
    parent: a,
    parentPath: s,
    schema: o
  } = Rc(this, t, r, n.context);
  return o[e](a && a[s], Object.assign({}, n, {
    parent: a,
    path: t
  }));
};
for (const e of ["equals", "is"]) Ye.prototype[e] = Ye.prototype.oneOf;
for (const e of ["not", "nope"]) Ye.prototype[e] = Ye.prototype.notOneOf;
const $c = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function Ic(e) {
  const t = Hn(e);
  if (!t) return Date.parse ? Date.parse(e) : Number.NaN;
  if (t.z === void 0 && t.plusMinus === void 0)
    return new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond).valueOf();
  let r = 0;
  return t.z !== "Z" && t.plusMinus !== void 0 && (r = t.hourOffset * 60 + t.minuteOffset, t.plusMinus === "+" && (r = 0 - r)), Date.UTC(t.year, t.month, t.day, t.hour, t.minute + r, t.second, t.millisecond);
}
function Hn(e) {
  var t, r;
  const n = $c.exec(e);
  return n ? {
    year: ct(n[1]),
    month: ct(n[2], 1) - 1,
    day: ct(n[3], 1),
    hour: ct(n[4]),
    minute: ct(n[5]),
    second: ct(n[6]),
    millisecond: n[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      ct(n[7].substring(0, 3))
    ) : 0,
    precision: (t = (r = n[7]) == null ? void 0 : r.length) != null ? t : void 0,
    z: n[8] || void 0,
    plusMinus: n[9] || void 0,
    hourOffset: ct(n[10]),
    minuteOffset: ct(n[11])
  } : null;
}
function ct(e, t = 0) {
  return Number(e) || t;
}
let Pc = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), Dc = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), Lc = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, Mc = "^\\d{4}-\\d{2}-\\d{2}", kc = "\\d{2}:\\d{2}:\\d{2}", zc = "(([+-]\\d{2}(:?\\d{2})?)|Z)", Bc = new RegExp(`${Mc}T${kc}(\\.\\d+)?${zc}$`), Uc = (e) => ft(e) || e === e.trim(), Vc = {}.toString();
function Et() {
  return new Co();
}
class Co extends Ye {
  constructor() {
    super({
      type: "string",
      check(t) {
        return t instanceof String && (t = t.valueOf()), typeof t == "string";
      }
    }), this.withMutation(() => {
      this.transform((t, r) => {
        if (!this.spec.coerce || this.isType(t) || Array.isArray(t)) return t;
        const n = t != null && t.toString ? t.toString() : t;
        return n === Vc ? t : n;
      });
    });
  }
  required(t) {
    return super.required(t).withMutation((r) => r.test({
      message: t || nt.required,
      name: "required",
      skipAbsent: !0,
      test: (n) => !!n.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation((t) => (t.tests = t.tests.filter((r) => r.OPTIONS.name !== "required"), t));
  }
  length(t, r = ze.length) {
    return this.test({
      message: r,
      name: "length",
      exclusive: !0,
      params: {
        length: t
      },
      skipAbsent: !0,
      test(n) {
        return n.length === this.resolve(t);
      }
    });
  }
  min(t, r = ze.min) {
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      skipAbsent: !0,
      test(n) {
        return n.length >= this.resolve(t);
      }
    });
  }
  max(t, r = ze.max) {
    return this.test({
      name: "max",
      exclusive: !0,
      message: r,
      params: {
        max: t
      },
      skipAbsent: !0,
      test(n) {
        return n.length <= this.resolve(t);
      }
    });
  }
  matches(t, r) {
    let n = !1, a, s;
    return r && (typeof r == "object" ? {
      excludeEmptyString: n = !1,
      message: a,
      name: s
    } = r : a = r), this.test({
      name: s || "matches",
      message: a || ze.matches,
      params: {
        regex: t
      },
      skipAbsent: !0,
      test: (o) => o === "" && n || o.search(t) !== -1
    });
  }
  email(t = ze.email) {
    return this.matches(Pc, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = ze.url) {
    return this.matches(Dc, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = ze.uuid) {
    return this.matches(Lc, {
      name: "uuid",
      message: t,
      excludeEmptyString: !1
    });
  }
  datetime(t) {
    let r = "", n, a;
    return t && (typeof t == "object" ? {
      message: r = "",
      allowOffset: n = !1,
      precision: a = void 0
    } = t : r = t), this.matches(Bc, {
      name: "datetime",
      message: r || ze.datetime,
      excludeEmptyString: !0
    }).test({
      name: "datetime_offset",
      message: r || ze.datetime_offset,
      params: {
        allowOffset: n
      },
      skipAbsent: !0,
      test: (s) => {
        if (!s || n) return !0;
        const o = Hn(s);
        return o ? !!o.z : !1;
      }
    }).test({
      name: "datetime_precision",
      message: r || ze.datetime_precision,
      params: {
        precision: a
      },
      skipAbsent: !0,
      test: (s) => {
        if (!s || a == null) return !0;
        const o = Hn(s);
        return o ? o.precision === a : !1;
      }
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((t) => t === null ? "" : t);
  }
  trim(t = ze.trim) {
    return this.transform((r) => r != null ? r.trim() : r).test({
      message: t,
      name: "trim",
      test: Uc
    });
  }
  lowercase(t = ze.lowercase) {
    return this.transform((r) => ft(r) ? r : r.toLowerCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (r) => ft(r) || r === r.toLowerCase()
    });
  }
  uppercase(t = ze.uppercase) {
    return this.transform((r) => ft(r) ? r : r.toUpperCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (r) => ft(r) || r === r.toUpperCase()
    });
  }
}
Et.prototype = Co.prototype;
let Hc = (e) => e != +e;
function kr() {
  return new Fo();
}
class Fo extends Ye {
  constructor() {
    super({
      type: "number",
      check(t) {
        return t instanceof Number && (t = t.valueOf()), typeof t == "number" && !Hc(t);
      }
    }), this.withMutation(() => {
      this.transform((t, r) => {
        if (!this.spec.coerce) return t;
        let n = t;
        if (typeof n == "string") {
          if (n = n.replace(/\s/g, ""), n === "") return NaN;
          n = +n;
        }
        return this.isType(n) || n === null ? n : parseFloat(n);
      });
    });
  }
  min(t, r = mt.min) {
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      skipAbsent: !0,
      test(n) {
        return n >= this.resolve(t);
      }
    });
  }
  max(t, r = mt.max) {
    return this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        max: t
      },
      skipAbsent: !0,
      test(n) {
        return n <= this.resolve(t);
      }
    });
  }
  lessThan(t, r = mt.lessThan) {
    return this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        less: t
      },
      skipAbsent: !0,
      test(n) {
        return n < this.resolve(t);
      }
    });
  }
  moreThan(t, r = mt.moreThan) {
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        more: t
      },
      skipAbsent: !0,
      test(n) {
        return n > this.resolve(t);
      }
    });
  }
  positive(t = mt.positive) {
    return this.moreThan(0, t);
  }
  negative(t = mt.negative) {
    return this.lessThan(0, t);
  }
  integer(t = mt.integer) {
    return this.test({
      name: "integer",
      message: t,
      skipAbsent: !0,
      test: (r) => Number.isInteger(r)
    });
  }
  truncate() {
    return this.transform((t) => ft(t) ? t : t | 0);
  }
  round(t) {
    var r;
    let n = ["ceil", "floor", "round", "trunc"];
    if (t = ((r = t) == null ? void 0 : r.toLowerCase()) || "round", t === "trunc") return this.truncate();
    if (n.indexOf(t.toLowerCase()) === -1) throw new TypeError("Only valid options for round() are: " + n.join(", "));
    return this.transform((a) => ft(a) ? a : Math[t](a));
  }
}
kr.prototype = Fo.prototype;
let Gc = /* @__PURE__ */ new Date(""), qc = (e) => Object.prototype.toString.call(e) === "[object Date]";
class sa extends Ye {
  constructor() {
    super({
      type: "date",
      check(t) {
        return qc(t) && !isNaN(t.getTime());
      }
    }), this.withMutation(() => {
      this.transform((t, r) => !this.spec.coerce || this.isType(t) || t === null ? t : (t = Ic(t), isNaN(t) ? sa.INVALID_DATE : new Date(t)));
    });
  }
  prepareParam(t, r) {
    let n;
    if (Ct.isRef(t))
      n = t;
    else {
      let a = this.cast(t);
      if (!this._typeCheck(a)) throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);
      n = a;
    }
    return n;
  }
  min(t, r = Vn.min) {
    let n = this.prepareParam(t, "min");
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      skipAbsent: !0,
      test(a) {
        return a >= this.resolve(n);
      }
    });
  }
  max(t, r = Vn.max) {
    let n = this.prepareParam(t, "max");
    return this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        max: t
      },
      skipAbsent: !0,
      test(a) {
        return a <= this.resolve(n);
      }
    });
  }
}
sa.INVALID_DATE = Gc;
function Wc(e, t = []) {
  let r = [], n = /* @__PURE__ */ new Set(), a = new Set(t.map(([o, l]) => `${o}-${l}`));
  function s(o, l) {
    let u = jt.split(o)[0];
    n.add(u), a.has(`${l}-${u}`) || r.push([l, u]);
  }
  for (const o of Object.keys(e)) {
    let l = e[o];
    n.add(o), Ct.isRef(l) && l.isSibling ? s(l.path, o) : rn(l) && "deps" in l && l.deps.forEach((u) => s(u, o));
  }
  return vc.array(Array.from(n), r).reverse();
}
function Qa(e, t) {
  let r = 1 / 0;
  return e.some((n, a) => {
    var s;
    if ((s = t.path) != null && s.includes(n))
      return r = a, !0;
  }), r;
}
function $o(e) {
  return (t, r) => Qa(e, t) - Qa(e, r);
}
const Io = (e, t, r) => {
  if (typeof e != "string")
    return e;
  let n = e;
  try {
    n = JSON.parse(e);
  } catch {
  }
  return r.isType(n) ? n : e;
};
function zr(e) {
  if ("fields" in e) {
    const t = {};
    for (const [r, n] of Object.entries(e.fields))
      t[r] = zr(n);
    return e.setFields(t);
  }
  if (e.type === "array") {
    const t = e.optional();
    return t.innerType && (t.innerType = zr(t.innerType)), t;
  }
  return e.type === "tuple" ? e.optional().clone({
    types: e.spec.types.map(zr)
  }) : "optional" in e ? e.optional() : e;
}
const Kc = (e, t) => {
  const r = [...jt.normalizePath(t)];
  if (r.length === 1) return r[0] in e;
  let n = r.pop(), a = jt.getter(jt.join(r), !0)(e);
  return !!(a && n in a);
};
let Ja = (e) => Object.prototype.toString.call(e) === "[object Object]";
function es(e, t) {
  let r = Object.keys(e.fields);
  return Object.keys(t).filter((n) => r.indexOf(n) === -1);
}
const Yc = $o([]);
function Po(e) {
  return new Do(e);
}
class Do extends Ye {
  constructor(t) {
    super({
      type: "object",
      check(r) {
        return Ja(r) || typeof r == "function";
      }
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = Yc, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      t && this.shape(t);
    });
  }
  _cast(t, r = {}) {
    var n;
    let a = super._cast(t, r);
    if (a === void 0) return this.getDefault(r);
    if (!this._typeCheck(a)) return a;
    let s = this.fields, o = (n = r.stripUnknown) != null ? n : this.spec.noUnknown, l = [].concat(this._nodes, Object.keys(a).filter((d) => !this._nodes.includes(d))), u = {}, c = Object.assign({}, r, {
      parent: u,
      __validating: r.__validating || !1
    }), f = !1;
    for (const d of l) {
      let p = s[d], y = d in a, g = a[d];
      if (p) {
        let v;
        c.path = (r.path ? `${r.path}.` : "") + d, p = p.resolve({
          value: g,
          context: r.context,
          parent: u
        });
        let E = p instanceof Ye ? p.spec : void 0, x = E?.strict;
        if (E != null && E.strip) {
          f = f || d in a;
          continue;
        }
        v = !r.__validating || !x ? p.cast(g, c) : g, v !== void 0 && (u[d] = v);
      } else y && !o && (u[d] = g);
      (y !== d in u || u[d] !== g) && (f = !0);
    }
    return f ? u : a;
  }
  _validate(t, r = {}, n, a) {
    let {
      from: s = [],
      originalValue: o = t,
      recursive: l = this.spec.recursive
    } = r;
    r.from = [{
      schema: this,
      value: o
    }, ...s], r.__validating = !0, r.originalValue = o, super._validate(t, r, n, (u, c) => {
      if (!l || !Ja(c)) {
        a(u, c);
        return;
      }
      o = o || c;
      let f = [];
      for (let d of this._nodes) {
        let p = this.fields[d];
        !p || Ct.isRef(p) || f.push(p.asNestedTest({
          options: r,
          key: d,
          parent: c,
          parentPath: r.path,
          originalParent: o
        }));
      }
      this.runTests({
        tests: f,
        value: c,
        originalValue: o,
        options: r
      }, n, (d) => {
        a(d.sort(this._sortErrors).concat(u), c);
      });
    });
  }
  clone(t) {
    const r = super.clone(t);
    return r.fields = Object.assign({}, this.fields), r._nodes = this._nodes, r._excludedEdges = this._excludedEdges, r._sortErrors = this._sortErrors, r;
  }
  concat(t) {
    let r = super.concat(t), n = r.fields;
    for (let [a, s] of Object.entries(this.fields)) {
      const o = n[a];
      n[a] = o === void 0 ? s : o;
    }
    return r.withMutation((a) => (
      // XXX: excludes here is wrong
      a.setFields(n, [...this._excludedEdges, ...t._excludedEdges])
    ));
  }
  _getDefault(t) {
    if ("default" in this.spec)
      return super._getDefault(t);
    if (!this._nodes.length)
      return;
    let r = {};
    return this._nodes.forEach((n) => {
      var a;
      const s = this.fields[n];
      let o = t;
      (a = o) != null && a.value && (o = Object.assign({}, o, {
        parent: o.value,
        value: o.value[n]
      })), r[n] = s && "getDefault" in s ? s.getDefault(o) : void 0;
    }), r;
  }
  setFields(t, r) {
    let n = this.clone();
    return n.fields = t, n._nodes = Wc(t, r), n._sortErrors = $o(Object.keys(t)), r && (n._excludedEdges = r), n;
  }
  shape(t, r = []) {
    return this.clone().withMutation((n) => {
      let a = n._excludedEdges;
      return r.length && (Array.isArray(r[0]) || (r = [r]), a = [...n._excludedEdges, ...r]), n.setFields(Object.assign(n.fields, t), a);
    });
  }
  partial() {
    const t = {};
    for (const [r, n] of Object.entries(this.fields))
      t[r] = "optional" in n && n.optional instanceof Function ? n.optional() : n;
    return this.setFields(t);
  }
  deepPartial() {
    return zr(this);
  }
  pick(t) {
    const r = {};
    for (const n of t)
      this.fields[n] && (r[n] = this.fields[n]);
    return this.setFields(r, this._excludedEdges.filter(([n, a]) => t.includes(n) && t.includes(a)));
  }
  omit(t) {
    const r = [];
    for (const n of Object.keys(this.fields))
      t.includes(n) || r.push(n);
    return this.pick(r);
  }
  from(t, r, n) {
    let a = jt.getter(t, !0);
    return this.transform((s) => {
      if (!s) return s;
      let o = s;
      return Kc(s, t) && (o = Object.assign({}, s), n || delete o[t], o[r] = a(s)), o;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(Io);
  }
  /**
   * Similar to `noUnknown` but only validates that an object is the right shape without stripping the unknown keys
   */
  exact(t) {
    return this.test({
      name: "exact",
      exclusive: !0,
      message: t || Lr.exact,
      test(r) {
        if (r == null) return !0;
        const n = es(this.schema, r);
        return n.length === 0 || this.createError({
          params: {
            properties: n.join(", ")
          }
        });
      }
    });
  }
  stripUnknown() {
    return this.clone({
      noUnknown: !0
    });
  }
  noUnknown(t = !0, r = Lr.noUnknown) {
    typeof t != "boolean" && (r = t, t = !0);
    let n = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: r,
      test(a) {
        if (a == null) return !0;
        const s = es(this.schema, a);
        return !t || s.length === 0 || this.createError({
          params: {
            unknown: s.join(", ")
          }
        });
      }
    });
    return n.spec.noUnknown = t, n;
  }
  unknown(t = !0, r = Lr.noUnknown) {
    return this.noUnknown(!t, r);
  }
  transformKeys(t) {
    return this.transform((r) => {
      if (!r) return r;
      const n = {};
      for (const a of Object.keys(r)) n[t(a)] = r[a];
      return n;
    });
  }
  camelCase() {
    return this.transformKeys(vn.camelCase);
  }
  snakeCase() {
    return this.transformKeys(vn.snakeCase);
  }
  constantCase() {
    return this.transformKeys((t) => vn.snakeCase(t).toUpperCase());
  }
  describe(t) {
    const r = (t ? this.resolve(t) : this).clone(), n = super.describe(t);
    n.fields = {};
    for (const [s, o] of Object.entries(r.fields)) {
      var a;
      let l = t;
      (a = l) != null && a.value && (l = Object.assign({}, l, {
        parent: l.value,
        value: l.value[s]
      })), n.fields[s] = o.describe(l);
    }
    return n;
  }
}
Po.prototype = Do.prototype;
function Gn(e) {
  return new Lo(e);
}
class Lo extends Ye {
  constructor(t) {
    super({
      type: "array",
      spec: {
        types: t
      },
      check(r) {
        return Array.isArray(r);
      }
    }), this.innerType = void 0, this.innerType = t;
  }
  _cast(t, r) {
    const n = super._cast(t, r);
    if (!this._typeCheck(n) || !this.innerType)
      return n;
    let a = !1;
    const s = n.map((o, l) => {
      const u = this.innerType.cast(o, Object.assign({}, r, {
        path: `${r.path || ""}[${l}]`,
        parent: n,
        originalValue: o,
        value: o,
        index: l
      }));
      return u !== o && (a = !0), u;
    });
    return a ? s : n;
  }
  _validate(t, r = {}, n, a) {
    var s;
    let o = this.innerType, l = (s = r.recursive) != null ? s : this.spec.recursive;
    r.originalValue != null && r.originalValue, super._validate(t, r, n, (u, c) => {
      var f;
      if (!l || !o || !this._typeCheck(c)) {
        a(u, c);
        return;
      }
      let d = new Array(c.length);
      for (let y = 0; y < c.length; y++) {
        var p;
        d[y] = o.asNestedTest({
          options: r,
          index: y,
          parent: c,
          parentPath: r.path,
          originalParent: (p = r.originalValue) != null ? p : t
        });
      }
      this.runTests({
        value: c,
        tests: d,
        originalValue: (f = r.originalValue) != null ? f : t,
        options: r
      }, n, (y) => a(y.concat(u), c));
    });
  }
  clone(t) {
    const r = super.clone(t);
    return r.innerType = this.innerType, r;
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(Io);
  }
  concat(t) {
    let r = super.concat(t);
    return r.innerType = this.innerType, t.innerType && (r.innerType = r.innerType ? (
      // @ts-expect-error Lazy doesn't have concat and will break
      r.innerType.concat(t.innerType)
    ) : t.innerType), r;
  }
  of(t) {
    let r = this.clone();
    if (!rn(t)) throw new TypeError("`array.of()` sub-schema must be a valid yup schema not: " + ht(t));
    return r.innerType = t, r.spec = Object.assign({}, r.spec, {
      types: t
    }), r;
  }
  length(t, r = Mr.length) {
    return this.test({
      message: r,
      name: "length",
      exclusive: !0,
      params: {
        length: t
      },
      skipAbsent: !0,
      test(n) {
        return n.length === this.resolve(t);
      }
    });
  }
  min(t, r) {
    return r = r || Mr.min, this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      skipAbsent: !0,
      // FIXME(ts): Array<typeof T>
      test(n) {
        return n.length >= this.resolve(t);
      }
    });
  }
  max(t, r) {
    return r = r || Mr.max, this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        max: t
      },
      skipAbsent: !0,
      test(n) {
        return n.length <= this.resolve(t);
      }
    });
  }
  ensure() {
    return this.default(() => []).transform((t, r) => this._typeCheck(t) ? t : r == null ? [] : [].concat(r));
  }
  compact(t) {
    let r = t ? (n, a, s) => !t(n, a, s) : (n) => !!n;
    return this.transform((n) => n != null ? n.filter(r) : n);
  }
  describe(t) {
    const r = (t ? this.resolve(t) : this).clone(), n = super.describe(t);
    if (r.innerType) {
      var a;
      let s = t;
      (a = s) != null && a.value && (s = Object.assign({}, s, {
        parent: s.value,
        value: s.value[0]
      })), n.innerType = r.innerType.describe(s);
    }
    return n;
  }
}
Gn.prototype = Lo.prototype;
/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */
const {
  entries: Mo,
  setPrototypeOf: ts,
  isFrozen: Xc,
  getPrototypeOf: Zc,
  getOwnPropertyDescriptor: Qc
} = Object;
let {
  freeze: Le,
  seal: Xe,
  create: qn
} = Object, {
  apply: Wn,
  construct: Kn
} = typeof Reflect < "u" && Reflect;
Le || (Le = function(t) {
  return t;
});
Xe || (Xe = function(t) {
  return t;
});
Wn || (Wn = function(t, r) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    a[s - 2] = arguments[s];
  return t.apply(r, a);
});
Kn || (Kn = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    n[a - 1] = arguments[a];
  return new t(...n);
});
const Or = Me(Array.prototype.forEach), Jc = Me(Array.prototype.lastIndexOf), rs = Me(Array.prototype.pop), nr = Me(Array.prototype.push), eu = Me(Array.prototype.splice), Br = Me(String.prototype.toLowerCase), wn = Me(String.prototype.toString), En = Me(String.prototype.match), ar = Me(String.prototype.replace), tu = Me(String.prototype.indexOf), ru = Me(String.prototype.trim), Qe = Me(Object.prototype.hasOwnProperty), Ie = Me(RegExp.prototype.test), sr = nu(TypeError);
function Me(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return Wn(e, t, n);
  };
}
function nu(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Kn(e, r);
  };
}
function se(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Br;
  ts && ts(e, null);
  let n = t.length;
  for (; n--; ) {
    let a = t[n];
    if (typeof a == "string") {
      const s = r(a);
      s !== a && (Xc(t) || (t[n] = s), a = s);
    }
    e[a] = !0;
  }
  return e;
}
function au(e) {
  for (let t = 0; t < e.length; t++)
    Qe(e, t) || (e[t] = null);
  return e;
}
function rt(e) {
  const t = qn(null);
  for (const [r, n] of Mo(e))
    Qe(e, r) && (Array.isArray(n) ? t[r] = au(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = rt(n) : t[r] = n);
  return t;
}
function or(e, t) {
  for (; e !== null; ) {
    const n = Qc(e, t);
    if (n) {
      if (n.get)
        return Me(n.get);
      if (typeof n.value == "function")
        return Me(n.value);
    }
    e = Zc(e);
  }
  function r() {
    return null;
  }
  return r;
}
const ns = Le(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Tn = Le(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Sn = Le(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), su = Le(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), An = Le(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), ou = Le(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), as = Le(["#text"]), ss = Le(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), _n = Le(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), os = Le(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Rr = Le(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), iu = Xe(/\{\{[\w\W]*|[\w\W]*\}\}/gm), lu = Xe(/<%[\w\W]*|[\w\W]*%>/gm), cu = Xe(/\$\{[\w\W]*/gm), uu = Xe(/^data-[\-\w.\u00B7-\uFFFF]+$/), du = Xe(/^aria-[\-\w]+$/), ko = Xe(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), fu = Xe(/^(?:\w+script|data):/i), hu = Xe(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), zo = Xe(/^html$/i), pu = Xe(/^[a-z][.\w]*(-[.\w]+)+$/i);
var is = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: du,
  ATTR_WHITESPACE: hu,
  CUSTOM_ELEMENT: pu,
  DATA_ATTR: uu,
  DOCTYPE_NAME: zo,
  ERB_EXPR: lu,
  IS_ALLOWED_URI: ko,
  IS_SCRIPT_OR_DATA: fu,
  MUSTACHE_EXPR: iu,
  TMPLIT_EXPR: cu
});
const ir = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, mu = function() {
  return typeof window > "u" ? null : window;
}, yu = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let n = null;
  const a = "data-tt-policy-suffix";
  r && r.hasAttribute(a) && (n = r.getAttribute(a));
  const s = "dompurify" + (n ? "#" + n : "");
  try {
    return t.createPolicy(s, {
      createHTML(o) {
        return o;
      },
      createScriptURL(o) {
        return o;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
}, ls = function() {
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
function Bo() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : mu();
  const t = (Y) => Bo(Y);
  if (t.version = "3.3.1", t.removed = [], !e || !e.document || e.document.nodeType !== ir.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const n = r, a = n.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: o,
    Node: l,
    Element: u,
    NodeFilter: c,
    NamedNodeMap: f = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: d,
    DOMParser: p,
    trustedTypes: y
  } = e, g = u.prototype, v = or(g, "cloneNode"), E = or(g, "remove"), x = or(g, "nextSibling"), w = or(g, "childNodes"), m = or(g, "parentNode");
  if (typeof o == "function") {
    const Y = r.createElement("template");
    Y.content && Y.content.ownerDocument && (r = Y.content.ownerDocument);
  }
  let S, h = "";
  const {
    implementation: T,
    createNodeIterator: R,
    createDocumentFragment: P,
    getElementsByTagName: L
  } = r, {
    importNode: H
  } = n;
  let _ = ls();
  t.isSupported = typeof Mo == "function" && typeof m == "function" && T && T.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: B,
    ERB_EXPR: z,
    TMPLIT_EXPR: D,
    DATA_ATTR: N,
    ARIA_ATTR: ye,
    IS_SCRIPT_OR_DATA: ge,
    ATTR_WHITESPACE: oe,
    CUSTOM_ELEMENT: Se
  } = is;
  let {
    IS_ALLOWED_URI: C
  } = is, V = null;
  const X = se({}, [...ns, ...Tn, ...Sn, ...An, ...as]);
  let te = null;
  const we = se({}, [...ss, ..._n, ...os, ...Rr]);
  let ee = Object.seal(qn(null, {
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
  })), Ae = null, Re = null;
  const ie = Object.seal(qn(null, {
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
  let O = !0, U = !0, F = !1, $ = !0, re = !1, M = !0, K = !1, Z = !1, le = !1, fe = !1, ve = !1, Ce = !1, ot = !0, A = !1;
  const k = "user-content-";
  let G = !0, q = !1, J = {}, ne = null;
  const be = se({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Ge = null;
  const Dt = se({}, ["audio", "video", "img", "source", "image", "track"]);
  let bt = null;
  const Tr = se({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Lt = "http://www.w3.org/1998/Math/MathML", xt = "http://www.w3.org/2000/svg", Ze = "http://www.w3.org/1999/xhtml";
  let Mt = Ze, un = !1, dn = null;
  const Ai = se({}, [Lt, xt, Ze], wn);
  let Sr = se({}, ["mi", "mo", "mn", "ms", "mtext"]), Ar = se({}, ["annotation-xml"]);
  const _i = se({}, ["title", "style", "font", "a", "script"]);
  let Jt = null;
  const ji = ["application/xhtml+xml", "text/html"], Ni = "text/html";
  let _e = null, kt = null;
  const Oi = r.createElement("form"), xa = function(b) {
    return b instanceof RegExp || b instanceof Function;
  }, fn = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(kt && kt === b)) {
      if ((!b || typeof b != "object") && (b = {}), b = rt(b), Jt = // eslint-disable-next-line unicorn/prefer-includes
      ji.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? Ni : b.PARSER_MEDIA_TYPE, _e = Jt === "application/xhtml+xml" ? wn : Br, V = Qe(b, "ALLOWED_TAGS") ? se({}, b.ALLOWED_TAGS, _e) : X, te = Qe(b, "ALLOWED_ATTR") ? se({}, b.ALLOWED_ATTR, _e) : we, dn = Qe(b, "ALLOWED_NAMESPACES") ? se({}, b.ALLOWED_NAMESPACES, wn) : Ai, bt = Qe(b, "ADD_URI_SAFE_ATTR") ? se(rt(Tr), b.ADD_URI_SAFE_ATTR, _e) : Tr, Ge = Qe(b, "ADD_DATA_URI_TAGS") ? se(rt(Dt), b.ADD_DATA_URI_TAGS, _e) : Dt, ne = Qe(b, "FORBID_CONTENTS") ? se({}, b.FORBID_CONTENTS, _e) : be, Ae = Qe(b, "FORBID_TAGS") ? se({}, b.FORBID_TAGS, _e) : rt({}), Re = Qe(b, "FORBID_ATTR") ? se({}, b.FORBID_ATTR, _e) : rt({}), J = Qe(b, "USE_PROFILES") ? b.USE_PROFILES : !1, O = b.ALLOW_ARIA_ATTR !== !1, U = b.ALLOW_DATA_ATTR !== !1, F = b.ALLOW_UNKNOWN_PROTOCOLS || !1, $ = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, re = b.SAFE_FOR_TEMPLATES || !1, M = b.SAFE_FOR_XML !== !1, K = b.WHOLE_DOCUMENT || !1, fe = b.RETURN_DOM || !1, ve = b.RETURN_DOM_FRAGMENT || !1, Ce = b.RETURN_TRUSTED_TYPE || !1, le = b.FORCE_BODY || !1, ot = b.SANITIZE_DOM !== !1, A = b.SANITIZE_NAMED_PROPS || !1, G = b.KEEP_CONTENT !== !1, q = b.IN_PLACE || !1, C = b.ALLOWED_URI_REGEXP || ko, Mt = b.NAMESPACE || Ze, Sr = b.MATHML_TEXT_INTEGRATION_POINTS || Sr, Ar = b.HTML_INTEGRATION_POINTS || Ar, ee = b.CUSTOM_ELEMENT_HANDLING || {}, b.CUSTOM_ELEMENT_HANDLING && xa(b.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (ee.tagNameCheck = b.CUSTOM_ELEMENT_HANDLING.tagNameCheck), b.CUSTOM_ELEMENT_HANDLING && xa(b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (ee.attributeNameCheck = b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), b.CUSTOM_ELEMENT_HANDLING && typeof b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (ee.allowCustomizedBuiltInElements = b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), re && (U = !1), ve && (fe = !0), J && (V = se({}, as), te = [], J.html === !0 && (se(V, ns), se(te, ss)), J.svg === !0 && (se(V, Tn), se(te, _n), se(te, Rr)), J.svgFilters === !0 && (se(V, Sn), se(te, _n), se(te, Rr)), J.mathMl === !0 && (se(V, An), se(te, os), se(te, Rr))), b.ADD_TAGS && (typeof b.ADD_TAGS == "function" ? ie.tagCheck = b.ADD_TAGS : (V === X && (V = rt(V)), se(V, b.ADD_TAGS, _e))), b.ADD_ATTR && (typeof b.ADD_ATTR == "function" ? ie.attributeCheck = b.ADD_ATTR : (te === we && (te = rt(te)), se(te, b.ADD_ATTR, _e))), b.ADD_URI_SAFE_ATTR && se(bt, b.ADD_URI_SAFE_ATTR, _e), b.FORBID_CONTENTS && (ne === be && (ne = rt(ne)), se(ne, b.FORBID_CONTENTS, _e)), b.ADD_FORBID_CONTENTS && (ne === be && (ne = rt(ne)), se(ne, b.ADD_FORBID_CONTENTS, _e)), G && (V["#text"] = !0), K && se(V, ["html", "head", "body"]), V.table && (se(V, ["tbody"]), delete Ae.tbody), b.TRUSTED_TYPES_POLICY) {
        if (typeof b.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw sr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof b.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw sr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        S = b.TRUSTED_TYPES_POLICY, h = S.createHTML("");
      } else
        S === void 0 && (S = yu(y, a)), S !== null && typeof h == "string" && (h = S.createHTML(""));
      Le && Le(b), kt = b;
    }
  }, va = se({}, [...Tn, ...Sn, ...su]), wa = se({}, [...An, ...ou]), Ri = function(b) {
    let I = m(b);
    (!I || !I.tagName) && (I = {
      namespaceURI: Mt,
      tagName: "template"
    });
    const W = Br(b.tagName), me = Br(I.tagName);
    return dn[b.namespaceURI] ? b.namespaceURI === xt ? I.namespaceURI === Ze ? W === "svg" : I.namespaceURI === Lt ? W === "svg" && (me === "annotation-xml" || Sr[me]) : !!va[W] : b.namespaceURI === Lt ? I.namespaceURI === Ze ? W === "math" : I.namespaceURI === xt ? W === "math" && Ar[me] : !!wa[W] : b.namespaceURI === Ze ? I.namespaceURI === xt && !Ar[me] || I.namespaceURI === Lt && !Sr[me] ? !1 : !wa[W] && (_i[W] || !va[W]) : !!(Jt === "application/xhtml+xml" && dn[b.namespaceURI]) : !1;
  }, et = function(b) {
    nr(t.removed, {
      element: b
    });
    try {
      m(b).removeChild(b);
    } catch {
      E(b);
    }
  }, vt = function(b, I) {
    try {
      nr(t.removed, {
        attribute: I.getAttributeNode(b),
        from: I
      });
    } catch {
      nr(t.removed, {
        attribute: null,
        from: I
      });
    }
    if (I.removeAttribute(b), b === "is")
      if (fe || ve)
        try {
          et(I);
        } catch {
        }
      else
        try {
          I.setAttribute(b, "");
        } catch {
        }
  }, Ea = function(b) {
    let I = null, W = null;
    if (le)
      b = "<remove></remove>" + b;
    else {
      const Ee = En(b, /^[\r\n\t ]+/);
      W = Ee && Ee[0];
    }
    Jt === "application/xhtml+xml" && Mt === Ze && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
    const me = S ? S.createHTML(b) : b;
    if (Mt === Ze)
      try {
        I = new p().parseFromString(me, Jt);
      } catch {
      }
    if (!I || !I.documentElement) {
      I = T.createDocument(Mt, "template", null);
      try {
        I.documentElement.innerHTML = un ? h : me;
      } catch {
      }
    }
    const Fe = I.body || I.documentElement;
    return b && W && Fe.insertBefore(r.createTextNode(W), Fe.childNodes[0] || null), Mt === Ze ? L.call(I, K ? "html" : "body")[0] : K ? I.documentElement : Fe;
  }, Ta = function(b) {
    return R.call(
      b.ownerDocument || b,
      b,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, hn = function(b) {
    return b instanceof d && (typeof b.nodeName != "string" || typeof b.textContent != "string" || typeof b.removeChild != "function" || !(b.attributes instanceof f) || typeof b.removeAttribute != "function" || typeof b.setAttribute != "function" || typeof b.namespaceURI != "string" || typeof b.insertBefore != "function" || typeof b.hasChildNodes != "function");
  }, Sa = function(b) {
    return typeof l == "function" && b instanceof l;
  };
  function it(Y, b, I) {
    Or(Y, (W) => {
      W.call(t, b, I, kt);
    });
  }
  const Aa = function(b) {
    let I = null;
    if (it(_.beforeSanitizeElements, b, null), hn(b))
      return et(b), !0;
    const W = _e(b.nodeName);
    if (it(_.uponSanitizeElement, b, {
      tagName: W,
      allowedTags: V
    }), M && b.hasChildNodes() && !Sa(b.firstElementChild) && Ie(/<[/\w!]/g, b.innerHTML) && Ie(/<[/\w!]/g, b.textContent) || b.nodeType === ir.progressingInstruction || M && b.nodeType === ir.comment && Ie(/<[/\w]/g, b.data))
      return et(b), !0;
    if (!(ie.tagCheck instanceof Function && ie.tagCheck(W)) && (!V[W] || Ae[W])) {
      if (!Ae[W] && ja(W) && (ee.tagNameCheck instanceof RegExp && Ie(ee.tagNameCheck, W) || ee.tagNameCheck instanceof Function && ee.tagNameCheck(W)))
        return !1;
      if (G && !ne[W]) {
        const me = m(b) || b.parentNode, Fe = w(b) || b.childNodes;
        if (Fe && me) {
          const Ee = Fe.length;
          for (let ke = Ee - 1; ke >= 0; --ke) {
            const lt = v(Fe[ke], !0);
            lt.__removalCount = (b.__removalCount || 0) + 1, me.insertBefore(lt, x(b));
          }
        }
      }
      return et(b), !0;
    }
    return b instanceof u && !Ri(b) || (W === "noscript" || W === "noembed" || W === "noframes") && Ie(/<\/no(script|embed|frames)/i, b.innerHTML) ? (et(b), !0) : (re && b.nodeType === ir.text && (I = b.textContent, Or([B, z, D], (me) => {
      I = ar(I, me, " ");
    }), b.textContent !== I && (nr(t.removed, {
      element: b.cloneNode()
    }), b.textContent = I)), it(_.afterSanitizeElements, b, null), !1);
  }, _a = function(b, I, W) {
    if (ot && (I === "id" || I === "name") && (W in r || W in Oi))
      return !1;
    if (!(U && !Re[I] && Ie(N, I))) {
      if (!(O && Ie(ye, I))) {
        if (!(ie.attributeCheck instanceof Function && ie.attributeCheck(I, b))) {
          if (!te[I] || Re[I]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(ja(b) && (ee.tagNameCheck instanceof RegExp && Ie(ee.tagNameCheck, b) || ee.tagNameCheck instanceof Function && ee.tagNameCheck(b)) && (ee.attributeNameCheck instanceof RegExp && Ie(ee.attributeNameCheck, I) || ee.attributeNameCheck instanceof Function && ee.attributeNameCheck(I, b)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              I === "is" && ee.allowCustomizedBuiltInElements && (ee.tagNameCheck instanceof RegExp && Ie(ee.tagNameCheck, W) || ee.tagNameCheck instanceof Function && ee.tagNameCheck(W)))
            ) return !1;
          } else if (!bt[I]) {
            if (!Ie(C, ar(W, oe, ""))) {
              if (!((I === "src" || I === "xlink:href" || I === "href") && b !== "script" && tu(W, "data:") === 0 && Ge[b])) {
                if (!(F && !Ie(ge, ar(W, oe, "")))) {
                  if (W)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, ja = function(b) {
    return b !== "annotation-xml" && En(b, Se);
  }, Na = function(b) {
    it(_.beforeSanitizeAttributes, b, null);
    const {
      attributes: I
    } = b;
    if (!I || hn(b))
      return;
    const W = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: te,
      forceKeepAttr: void 0
    };
    let me = I.length;
    for (; me--; ) {
      const Fe = I[me], {
        name: Ee,
        namespaceURI: ke,
        value: lt
      } = Fe, zt = _e(Ee), pn = lt;
      let Oe = Ee === "value" ? pn : ru(pn);
      if (W.attrName = zt, W.attrValue = Oe, W.keepAttr = !0, W.forceKeepAttr = void 0, it(_.uponSanitizeAttribute, b, W), Oe = W.attrValue, A && (zt === "id" || zt === "name") && (vt(Ee, b), Oe = k + Oe), M && Ie(/((--!?|])>)|<\/(style|title|textarea)/i, Oe)) {
        vt(Ee, b);
        continue;
      }
      if (zt === "attributename" && En(Oe, "href")) {
        vt(Ee, b);
        continue;
      }
      if (W.forceKeepAttr)
        continue;
      if (!W.keepAttr) {
        vt(Ee, b);
        continue;
      }
      if (!$ && Ie(/\/>/i, Oe)) {
        vt(Ee, b);
        continue;
      }
      re && Or([B, z, D], (Ra) => {
        Oe = ar(Oe, Ra, " ");
      });
      const Oa = _e(b.nodeName);
      if (!_a(Oa, zt, Oe)) {
        vt(Ee, b);
        continue;
      }
      if (S && typeof y == "object" && typeof y.getAttributeType == "function" && !ke)
        switch (y.getAttributeType(Oa, zt)) {
          case "TrustedHTML": {
            Oe = S.createHTML(Oe);
            break;
          }
          case "TrustedScriptURL": {
            Oe = S.createScriptURL(Oe);
            break;
          }
        }
      if (Oe !== pn)
        try {
          ke ? b.setAttributeNS(ke, Ee, Oe) : b.setAttribute(Ee, Oe), hn(b) ? et(b) : rs(t.removed);
        } catch {
          vt(Ee, b);
        }
    }
    it(_.afterSanitizeAttributes, b, null);
  }, Ci = function Y(b) {
    let I = null;
    const W = Ta(b);
    for (it(_.beforeSanitizeShadowDOM, b, null); I = W.nextNode(); )
      it(_.uponSanitizeShadowNode, I, null), Aa(I), Na(I), I.content instanceof s && Y(I.content);
    it(_.afterSanitizeShadowDOM, b, null);
  };
  return t.sanitize = function(Y) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, I = null, W = null, me = null, Fe = null;
    if (un = !Y, un && (Y = "<!-->"), typeof Y != "string" && !Sa(Y))
      if (typeof Y.toString == "function") {
        if (Y = Y.toString(), typeof Y != "string")
          throw sr("dirty is not a string, aborting");
      } else
        throw sr("toString is not a function");
    if (!t.isSupported)
      return Y;
    if (Z || fn(b), t.removed = [], typeof Y == "string" && (q = !1), q) {
      if (Y.nodeName) {
        const lt = _e(Y.nodeName);
        if (!V[lt] || Ae[lt])
          throw sr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (Y instanceof l)
      I = Ea("<!---->"), W = I.ownerDocument.importNode(Y, !0), W.nodeType === ir.element && W.nodeName === "BODY" || W.nodeName === "HTML" ? I = W : I.appendChild(W);
    else {
      if (!fe && !re && !K && // eslint-disable-next-line unicorn/prefer-includes
      Y.indexOf("<") === -1)
        return S && Ce ? S.createHTML(Y) : Y;
      if (I = Ea(Y), !I)
        return fe ? null : Ce ? h : "";
    }
    I && le && et(I.firstChild);
    const Ee = Ta(q ? Y : I);
    for (; me = Ee.nextNode(); )
      Aa(me), Na(me), me.content instanceof s && Ci(me.content);
    if (q)
      return Y;
    if (fe) {
      if (ve)
        for (Fe = P.call(I.ownerDocument); I.firstChild; )
          Fe.appendChild(I.firstChild);
      else
        Fe = I;
      return (te.shadowroot || te.shadowrootmode) && (Fe = H.call(n, Fe, !0)), Fe;
    }
    let ke = K ? I.outerHTML : I.innerHTML;
    return K && V["!doctype"] && I.ownerDocument && I.ownerDocument.doctype && I.ownerDocument.doctype.name && Ie(zo, I.ownerDocument.doctype.name) && (ke = "<!DOCTYPE " + I.ownerDocument.doctype.name + `>
` + ke), re && Or([B, z, D], (lt) => {
      ke = ar(ke, lt, " ");
    }), S && Ce ? S.createHTML(ke) : ke;
  }, t.setConfig = function() {
    let Y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    fn(Y), Z = !0;
  }, t.clearConfig = function() {
    kt = null, Z = !1;
  }, t.isValidAttribute = function(Y, b, I) {
    kt || fn({});
    const W = _e(Y), me = _e(b);
    return _a(W, me, I);
  }, t.addHook = function(Y, b) {
    typeof b == "function" && nr(_[Y], b);
  }, t.removeHook = function(Y, b) {
    if (b !== void 0) {
      const I = Jc(_[Y], b);
      return I === -1 ? void 0 : eu(_[Y], I, 1)[0];
    }
    return rs(_[Y]);
  }, t.removeHooks = function(Y) {
    _[Y] = [];
  }, t.removeAllHooks = function() {
    _ = ls();
  }, t;
}
var gu = Bo();
const cs = ["file", "camera", "camera2", "photo", "avatar", "attachment"];
function bu(e) {
  return e.template ? e.template : "tab";
}
function xu(e) {
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    const a = n.group || "Info";
    t[a] || (t[a] = { label: a, type: "fields", fields: [] }), t[a]?.fields?.push({ name: r, ...n });
  }), t;
}
const vu = (e) => Object.entries(e ?? {}).filter(([, t]) => t.type === "geolocation").map(([t]) => t);
async function Yn() {
  if (!("geolocation" in navigator))
    throw new Error(
      "Geolocation is not supported by this browser. You cannot access this portal."
    );
  try {
    const e = await new Promise(
      (s, o) => {
        navigator.geolocation.getCurrentPosition(s, o, {
          enableHighAccuracy: !0,
          timeout: 3e4,
          maximumAge: 0
        });
      }
    ), {
      latitude: t,
      longitude: r,
      altitude: n,
      accuracy: a
    } = e.coords;
    return {
      latitude: t,
      longitude: r,
      altitude: n,
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
const wu = ({
  field: e,
  formValues: t,
  parentData: r
}) => {
  const n = {}, a = (s) => s.startsWith("$parent.") ? r?.[s.slice(8)] : t?.[s];
  if (typeof e.parameter == "string" && e.parameter) {
    const s = e.parameter;
    if (s.startsWith("$parent.")) {
      const o = s.slice(8);
      n[o] = r?.[o];
    } else
      n[s] = t?.[s];
    return n;
  }
  if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
    for (const [s, o] of Object.entries(e.parameter))
      typeof o == "string" && (n[s] = a(o));
  return n;
}, Eu = (e) => {
  const t = {};
  for (const r of e) {
    const n = r.name;
    if (!n) continue;
    const a = r.ajaxchain;
    if (!a) continue;
    const s = Array.isArray(a) ? a : [a];
    for (const o of s)
      o?.target && (t[n] || (t[n] = []), t[n].push(o.target));
  }
  return t;
};
function Tu(e, t) {
  const r = new Set(
    t.filter((n) => n.nodb === !0 || n.nosave === !0).map((n) => n.name)
  );
  return Object.fromEntries(
    Object.entries(e).filter(([n]) => !r.has(n))
  );
}
function Wr(e, t = "create") {
  const r = {};
  return Object.keys(e).forEach((n) => {
    e[n].vmode === "edit" && t === "create" || (r[n] = {
      label: n,
      required: e[n].required ?? !1
    });
  }), r;
}
function Su(e, t = "create") {
  return Object.entries(e).filter(([, r]) => !(r.vmode === "edit" && t === "create")).map(([r, n]) => ({
    ...n,
    name: r
  }));
}
const Xt = {
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
function Zt(e) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(e) ? e : 6;
}
const Ue = (e, t) => typeof e == "string" ? e.replace(
  /#(\w+)#/g,
  (r, n) => t[n] !== void 0 ? String(t[n]) : r
) : Array.isArray(e) ? e.map((r) => Ue(r, t)) : e && typeof e == "object" ? Object.fromEntries(
  Object.entries(e).map(([r, n]) => [
    Ue(r, t),
    Ue(n, t)
  ])
) : e, Uo = (e) => {
  const t = Array.isArray(e?.data?.data) ? e.data.data[0] : Array.isArray(e?.data) ? e.data[0] : e?.data?.data ?? e?.data;
  return t && typeof t == "object" && !Array.isArray(t) ? t : null;
}, dt = (e, t, r, n) => {
  if (!Array.isArray(r) || r.length === 0) return [];
  const a = n ?? (r[0] && typeof r[0] == "object" && "category" in r[0] ? "category" : void 0);
  return r.map((s) => {
    const o = s[e], l = s[t];
    return o == null || l == null ? null : {
      value: String(o),
      label: String(l),
      group: a && s[a] ? String(s[a]) : void 0
    };
  }).filter(Boolean);
};
function us(e, t) {
  if (!t?.length) return e;
  const r = new Map(
    t.map((n) => [String(n.value), n.label])
  );
  if (typeof e == "number")
    return r.get(String(e)) ?? e;
  if (typeof e == "string") {
    const a = e.split(",").map((s) => s.trim()).map((s) => r.get(s)).filter(Boolean);
    return a.length ? a.join(", ") : e;
  }
  return e;
}
const ds = (e) => e == null || e === "", Ut = (e) => e.type === "string", nn = (e) => e === !0 || e === "true", Au = (e, t, r, n, a, s) => {
  const o = s === "create" && a ? Ho(a) : {};
  e.forEach((l) => {
    const u = l?.name;
    if (!u) return;
    let c = n?.[u];
    const f = s === "create" && a ? Go(l) : null;
    s === "create" && f && o[f] !== void 0 && ds(c) && (c = o[f]), ds(c) && l.default && (c = l.default), cs.includes(l.type ?? "") ? t[u] = Array.isArray(c) ? c : typeof c == "string" && c.length > 0 ? c.split(",").map((p) => p.trim()).filter(Boolean) : [] : l.multiple === !0 || l.type === "tags" ? t[u] = Array.isArray(c) ? c : typeof c == "string" ? c.split(",").map((p) => p.trim()).filter(Boolean) : [] : l.type === "checkbox" ? t[u] = String(c ?? "false") : l.type === "json" ? t[u] = typeof c == "object" && c !== null ? JSON.stringify(c, null, 2) : c ?? "" : l.type === "date" ? t[u] = typeof c == "string" && c.trim() ? c.slice(0, 10) : null : l.type === "time" ? typeof c == "string" ? c.includes("T") ? t[u] = c.slice(11, 16) : t[u] = c.slice(0, 5) : t[u] = "" : u === "blocked" || u === "blacklist" ? t[u] = String(c ?? "false") : t[u] = c ?? "";
    let d;
    if (cs.includes(l.type ?? "")) {
      const p = Gn().of(
        Et()
      );
      d = l.required ? p.min(1, l.error_message || `${l.label} is required`) : p;
    } else if (l.multiple === !0 || l.type === "tags") {
      const p = Gn().of(Et());
      d = l.required ? p.min(1, l.error_message || `${l.label} is required`) : p;
    } else l.type === "email" ? d = Et().email("Invalid email") : l.type === "number" ? d = kr().typeError("Must be a number") : l.type === "json" ? d = Et().test("json", "Invalid JSON", (p) => {
      if (!p) return !0;
      try {
        return JSON.parse(p), !0;
      } catch {
        return !1;
      }
    }) : l.type === "date" ? d = Et().nullable() : d = Et();
    l?.validate && Object.entries(l.validate).forEach(([p, y]) => {
      switch (p) {
        case "email":
          y && (d = d.email("Invalid email format"));
          break;
        case "mobile":
          Ut(d) && (d = d.matches(
            /^[1-9][0-9]*$/,
            "Invalid mobile number format"
          ));
          break;
        case "regex":
          Ut(d) && (d = d.matches(
            new RegExp(y),
            l?.error_message || `Must match pattern: ${y}`
          ));
          break;
        case "date":
          d = d.nullable().test(
            "date",
            "Invalid date format (expected dd/MM/yyyy or dd-MM-yyyy)",
            (g) => {
              if (g == null || g === "") return !0;
              const v = g.replace(/-/g, "/"), [E, x, w] = v.split("/");
              if (!E || !x || !w) return !1;
              const m = /* @__PURE__ */ new Date(`${w}-${x}-${E}`);
              return !isNaN(m.getTime());
            }
          );
          break;
        case "time":
          Ut(d) && (d = d.matches(
            /^([0-1][0-9]|2[0-3])[:\-]([0-5][0-9])$/,
            "Invalid time format (HH:MM)"
          ));
          break;
        case "timesec":
          Ut(d) && (d = d.matches(
            /^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/,
            "Invalid time format (HH:MM:SS)"
          ));
          break;
        case "number":
        case "numeric":
          d = kr().typeError("Must be numeric");
          break;
        case "float":
        case "decimal":
          d = kr().typeError("Must be a decimal").transform((g, v) => {
            if (v == null || v === "") return;
            const E = Number(v);
            if (isNaN(E)) return g;
            if (typeof g == "number" && !isNaN(g)) {
              const x = Number(g);
              return Number.isInteger(x) ? Number(E.toFixed(x)) : E;
            }
            return E;
          });
          break;
        case "alphanumeric":
          Ut(d) && (d = d.matches(
            /^[a-z0-9]+$/i,
            "Must be alphanumeric"
          ));
          break;
        case "alpha":
          Ut(d) && (d = d.matches(
            /^[a-zA-Z]+$/,
            "Must contain only letters"
          ));
          break;
        case "upper":
          d = d.transform(
            (g) => g && g.toUpperCase()
          );
          break;
        case "lower":
          d = d.transform(
            (g) => g && g.toLowerCase()
          );
          break;
        case "length-min": {
          const g = Number(y);
          isNaN(g) || (d = d.min(g, `Minimum length is ${g}`));
          break;
        }
        case "length-max": {
          const g = Number(y);
          isNaN(g) || (d = d.max(g, `Maximum length is ${g}`));
          break;
        }
      }
    }), l.required && (d = d.required(
      l.error_message || `${l.label || u} is required`
    )), r[u] = d;
  });
};
function _u(e) {
  if (!e || typeof e != "object") return !1;
  const t = e.src;
  return typeof e.target == "string" && typeof t == "object" && t !== null && (t.type === "api" || typeof t.queryid == "string" || typeof t.table == "string" && typeof t.columns < "u");
}
function ju(e) {
  return e.split(",").map((t) => t.trim()).map((t) => {
    const r = t.match(/^(.+?)\s+as\s+.+$/i);
    return r ? r[1]?.trim() : t;
  }).filter((t) => !!t);
}
const Kr = (e, t) => {
  if (!(!e || t == null))
    return e.find((r) => String(r.value) === String(t))?.label;
}, Nu = (e) => e.reduce((t, r) => {
  const n = r.group || "__ungrouped__";
  return t[n] || (t[n] = []), t[n].push(r), t;
}, {}), Ou = (e) => e >= 1024 * 1024 ? `${(e / (1024 * 1024)).toFixed(2)} MB` : `${(e / 1024).toFixed(0)} KB`, Ru = ({
  e,
  existingFiles: t,
  maxFiles: r,
  maxFileSize: n
}) => {
  const a = e.currentTarget.files;
  if (!a) return null;
  const s = Array.from(a);
  if (t.length + s.length > r)
    return alert(`You can upload maximum ${r} file(s)`), e.currentTarget.value = "", null;
  if (n) {
    const l = Number(n), u = s.find((c) => c.size > l);
    if (u)
      return alert(
        `File "${u.name}" exceeds max size of ${Ou(n)}`
      ), e.currentTarget.value = "", null;
  }
  return a;
}, Cu = (e) => {
  if (!e) return [];
  if (Array.isArray(e))
    return e.map(
      (n) => [
        String(n.value),
        String(n.title ?? n.label ?? n.value)
      ]
    );
  const t = Object.values(e);
  return t.length ? typeof t[0] == "string" ? Object.entries(e).map(([n, a]) => [String(n), a]) : Object.values(e).flatMap(
    (n) => Object.entries(n).map(
      ([a, s]) => [String(a), s]
    )
  ) : [];
}, Ur = (e) => e ? Array.isArray(e) ? e.map((t) => ({
  value: String(t.value),
  label: String(t.label ?? t.title ?? t.value),
  group: t.group ?? t.category ?? // 👈 support category if present
  void 0
})) : typeof e == "object" ? Object.entries(e).map(([t, r]) => ({
  value: String(t),
  label: String(r)
})) : [] : [], at = (e, t) => {
  const r = Ur(e.options_top), n = Ur(e.options), a = t ?? [], s = Ur(e.options_bottom), o = /* @__PURE__ */ new Set(), l = (u) => u.filter((c) => o.has(c.value) ? !1 : (o.add(c.value), !0));
  return [
    ...l(r),
    ...l(n),
    ...l(a),
    ...l(s)
  ];
}, Ke = (e) => {
  if (e == null || typeof e != "object")
    return { value: e, title: e };
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    const a = r.includes(".") ? r.split(".").pop() : r;
    if (a in t) {
      console.warn(`Duplicate key after normalization: ${a}`);
      continue;
    }
    t[a] = n;
  }
  return t;
};
function Fu(e) {
  if (!e || e.type !== "Buffer" || !Array.isArray(e.data)) return null;
  const t = new TextDecoder().decode(new Uint8Array(e.data)).trim();
  if (t.startsWith("data:image/"))
    return console.log("decoded", t), { type: "image", src: t };
  if (t.startsWith("<"))
    return { type: "html", html: t };
  try {
    const r = JSON.parse(t);
    if (Array.isArray(r) && r[0]?.d)
      return { type: "drawn", paths: r };
    if (r?.text)
      return { type: "text", data: r };
  } catch {
  }
  return null;
}
const $u = "__form_persist__", Vo = (e) => `${$u}:${e}`;
function Iu(e) {
  return gu.sanitize(e, {
    USE_PROFILES: { html: !0 }
  });
}
function Ho(e) {
  try {
    return JSON.parse(localStorage.getItem(Vo(e)) || "{}");
  } catch {
    return {};
  }
}
function Go(e) {
  return e.persistent ? e.persistent === !0 ? e.name : typeof e.persistent == "string" ? e.persistent : null : null;
}
function Pu(e, t, r) {
  const n = Ho(e);
  localStorage.setItem(
    Vo(e),
    JSON.stringify({
      ...n,
      [t]: r
    })
  );
}
function St(e, t, r) {
  const n = Go(t);
  n && r && Pu(r, n, e);
}
function jn(e) {
  return Q.isAxiosError(e) ? e.response?.data?.message || e.message || "Something went wrong" : e instanceof Error ? e.message : typeof e == "string" ? e : "Something went wrong";
}
function Nn(e, t) {
  return t === !1 ? null : typeof t == "string" ? t : e?.data?.message ? e.data.message : e?.message ? e.message : "Operation completed successfully";
}
const qo = ({
  uploads: e,
  currentValue: t,
  multiple: r
}) => {
  const n = Array.isArray(t) ? t : t ? [t] : [], a = e.map((s) => `${s.fileId}&${s.path}`);
  return [...n, ...a];
}, Du = (e) => {
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
}, Lu = (e) => {
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
}, Mu = (e) => e === "today" ? (/* @__PURE__ */ new Date()).toISOString().split("T")[0] : e, ku = (e) => {
  const t = e?.data;
  return Array.isArray(t?.results?.options) ? t.results.options[0] : Array.isArray(t?.data) ? t.data[0] : Array.isArray(t?.results) ? t.results[0] : Array.isArray(t) ? t[0] : t?.results ?? t;
}, cr = (e) => ({
  Authorization: `Bearer ${e.accessToken}`
}), On = async (e) => (await Q.get(
  e.baseURL + e.dbopsGetHash,
  { headers: cr(e) }
)).data.refhash, Rn = async (e, t) => (await Q.post(
  e.baseURL + e.dbopsGetRefId,
  t,
  { headers: cr(e) }
)).data.refid, zu = {
  async fetch(e, t, r, n) {
    const a = await On(e);
    let s = !1, o;
    r && (s = !0, o = r), s || (o = await Rn(e, {
      operation: "fetch",
      source: t.source,
      fields: t.fields ?? {},
      datahash: a,
      srcid: n
    }));
    const l = { refid: o, datahash: a, refid1: e.refid };
    t.source?.refid && (l.refid1 = t.source?.refid);
    const u = await Q.post(
      e.baseURL + e.dbopsFetch,
      l,
      { headers: cr(e) }
    );
    return u.data?.data ?? u.data;
  },
  async create(e, t, r) {
    const n = await On(e), a = await Rn(e, {
      operation: "create",
      source: t.source,
      fields: t.values,
      datahash: n,
      srcid: r
    });
    return (await Q.post(
      e.baseURL + e.dbopsCreate,
      { refid: a, fields: t.values, datahash: n },
      { headers: cr(e) }
    )).data;
  },
  async update(e, t, r) {
    const n = await On(e), a = await Rn(e, {
      operation: "update",
      source: t.source,
      fields: t.values,
      datahash: n,
      srcid: r
    });
    return (await Q.post(
      e.baseURL + e.dbopsUpdate,
      { refid: a, fields: t.values, datahash: n },
      { headers: cr(e) }
    )).data;
  }
};
async function Ht(e, t, r, n = void 0, a = void 0, s = {}) {
  try {
    let o = r;
    return o || (o = (await Q({
      method: "POST",
      url: e.baseURL + e.registerQuery,
      data: { query: t, srcid: a },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    })).data.queryid), await Q({
      method: "POST",
      url: e.baseURL + e.runQuery,
      data: {
        queryid: o,
        filter: s,
        refid: n,
        page: 0,
        limit: 1e4
      },
      headers: {
        Authorization: `Bearer ${e?.accessToken}`
      }
    });
  } catch (o) {
    throw o;
  }
}
async function Bu({
  field: e,
  value: t,
  sqlOpsUrls: r,
  setFieldOptions: n,
  values: a
}) {
  if (!e.ajaxchain || !t || !r) return;
  const s = Array.isArray(e.ajaxchain) ? e.ajaxchain : [e.ajaxchain];
  for (const o of s) {
    const l = o.src;
    if (!o || typeof o != "object" || !l || typeof l != "object") continue;
    let u;
    if ("type" in l && l.type === "api") {
      let p = e.name;
      typeof e.parameter == "string" && e.parameter && (p = e.parameter);
      const y = { [p]: t, refid: t };
      if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
        for (const [E, x] of Object.entries(e.parameter))
          y[E] = E === p ? t : a?.[x];
      const g = {
        method: l.method || "GET",
        url: r?.baseURL + l.endpoint,
        headers: {
          Authorization: `Bearer ${r?.accessToken}`
        },
        ...l.method === "GET" ? { params: y } : { data: y }
      }, { data: v } = await Q(g);
      u = v;
    } else {
      let p;
      if (!l.queryid) {
        if (!l.table || !l.columns)
          throw new Error("SQL query requires field.table");
        const y = Ue(l.where ?? {}, { refid: t });
        p = {
          ...l,
          table: l.table,
          cols: l.columns,
          where: y
        };
      }
      try {
        const { data: y } = await Ht(
          r,
          p,
          l.queryid,
          t
        );
        u = y;
      } catch {
      }
    }
    const c = Array.isArray(u?.results?.options) ? u?.results?.options : Array.isArray(u.data) ? u.data : Array.isArray(u.results) ? u.results : u, f = Array.isArray(c) ? c.map(Ke) : [], d = dt(
      e.valueKey ?? "value",
      e.labelKey ?? "title",
      f,
      e.groupKey
    );
    n(o.target, d);
  }
}
async function Uu(e, t) {
  let r = t.previewPath ?? "/api/files/preview";
  const n = await Q.get(
    `${t.baseURL}${r}?uri=${encodeURIComponent(e)}`,
    {
      responseType: "blob",
      headers: {
        Authorization: `Bearer ${t?.accessToken}`
      }
    }
  );
  return URL.createObjectURL(n.data);
}
async function Wo(e, t) {
  const r = e?.uploadURL ?? "/api/files/upload";
  return Promise.all(
    Array.from(t).map(async (n) => {
      const a = new FormData();
      return a.append("file", n), (await Q.post(`${e?.baseURL}${r}`, a, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${e?.accessToken}`
        }
      })).data;
    })
  );
}
async function Ko(e, t) {
  let r = e?.removeFileURL ?? "/api/files/delete";
  return (await Q.post(
    `${e?.baseURL}${r}`,
    { fileId: String(t) },
    {
      headers: {
        Authorization: `Bearer ${e?.accessToken}`,
        "Content-Type": "application/json"
      }
    }
  )).data;
}
function vr({
  field: e,
  data: t,
  methods: r = {},
  sqlOpsUrls: n,
  refid: a,
  module_refid: s,
  optionsOverride: o,
  AttachmentPopup: l,
  setFieldOptions: u
}) {
  e?.name;
  const c = `
    text-sm text-gray-600 break-words capitalize
  `, f = `
    block text-sm font-semibold  transition-all duration-300 text-gray-700 capitalize
  `, [d, p] = Ne(
    at(e, o ?? [])
  ), y = de.useRef(!1);
  de.useEffect(() => {
    o && p(o);
  }, [o]);
  const g = de.useMemo(
    () => Ur(d),
    [d]
  );
  de.useEffect(() => {
    let S = !0;
    return (async () => {
      let T = e.valueKey ?? "value", R = e.labelKey ?? "title";
      const P = e?.source ?? {};
      if (e.type === "dataMethod") {
        const L = e.method, H = L ? r[L] : void 0;
        if (H)
          try {
            const _ = await H(), B = Array.isArray(_.data?.results?.options) ? _.data?.results?.options : Array.isArray(_?.data?.data) ? _.data.data : Array.isArray(_.data?.results) ? _.data?.results : Array.isArray(_?.data) ? _.data : _, z = Array.isArray(B) ? B.map(Ke) : [], D = dt(T, R, z, e.groupKey);
            S && p(at(e, D));
            return;
          } catch (_) {
            console.error("Method execution failed:", _), S && p([]);
            return;
          }
        else {
          S && p([]);
          return;
        }
      }
      if (P.type === "api" && P.endpoint)
        try {
          const L = {
            method: P.method || "GET",
            url: n?.baseURL + P.endpoint,
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            },
            ...P.method === "GET" ? { params: { refid: P.refid } } : { data: { refid: P.refid } }
          }, H = await Q(L), _ = Array.isArray(H.data?.results?.options) ? H.data?.results?.options : Array.isArray(H?.data?.data) ? H.data.data : Array.isArray(H.data?.results) ? H.data?.results : Array.isArray(H?.data) ? H.data : H, B = Array.isArray(_) ? _.map(Ke) : [], z = dt(T, R, B, e.groupKey);
          S && p(at(e, z));
          return;
        } catch (L) {
          console.error("API execution failed:", L), S && p([]);
          return;
        }
      if (e.table || e.type === "dataSelector" || e.queryid) {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let L;
          if (e.type === "dataSelector")
            L = {
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
            L = {
              table: e.table,
              cols: e.columns,
              where: e.where ? a ? Ue(e.where, { refid: a }) : e.where : void 0
            };
          }
          const H = await Ht(n, L, e?.queryid, void 0, s), _ = Array.isArray(H?.data?.data) ? H.data.data : Array.isArray(H?.data) ? H.data : H, B = Array.isArray(_) ? _.map(Ke) : [], z = dt(T, R, B, e.groupKey);
          S && p(at(e, z));
        } catch (L) {
          console.error("API fetch failed:", L);
        }
      }
    })(), () => {
      S = !1;
    };
  }, [
    e.options,
    e.source,
    e.table,
    e.columns,
    e.where,
    a
  ]);
  const v = e?.name ? t?.[e.name] : void 0;
  de.useEffect(() => {
    y.current || !u || !v || (y.current = !0, Bu({
      field: e,
      value: v,
      sqlOpsUrls: n,
      setFieldOptions: u,
      values: t ?? {}
    }));
  }, [v, n, u]);
  let E;
  typeof v == "string" ? e.type === "date" ? E = v.split("T")[0] : e.type === "time" ? E = v.includes("T") ? v.slice(11, 16) : v.slice(0, 5) : E = us(v, g) : E = us(v, g);
  const x = E == null ? "" : typeof E == "string" || typeof E == "number" ? E : JSON.stringify(E), w = Fu(v), m = e.type === "richtextarea" && typeof x == "string" ? Iu(x) : null;
  return /* @__PURE__ */ i.jsxs("div", { className: "px-3 py-2 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ i.jsx("label", { className: f, children: e?.label }),
    /* @__PURE__ */ i.jsx("div", { className: "relative", children: w ? w.type === "drawn" ? /* @__PURE__ */ i.jsx("svg", { viewBox: "0 0 300 150", className: "h-24 w-full border bg-white rounded", children: w.paths.map((S, h) => /* @__PURE__ */ i.jsx(
      "path",
      {
        d: S.d,
        stroke: S.color || "#000",
        strokeWidth: S.width || 2,
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      h
    )) }) : w.type === "text" ? /* @__PURE__ */ i.jsx("svg", { viewBox: "0 0 300 150", className: "h-24 w-full border bg-white rounded", children: /* @__PURE__ */ i.jsx(
      "text",
      {
        x: "10",
        y: "100",
        fontSize: w.data.style?.fontSize || 32,
        fontFamily: w.data.style?.fontFamily || "cursive",
        fill: w.data.style?.textColor || "#000",
        children: w.data.text
      }
    ) }) : w.type === "html" ? /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "border bg-white rounded p-2 text-sm",
        dangerouslySetInnerHTML: { __html: w.html }
      }
    ) : /* @__PURE__ */ i.jsx(
      "img",
      {
        src: w.src,
        alt: "signature",
        className: "h-24 object-contain border bg-white rounded"
      }
    ) : (e.type === "file" || e.type === "camera" || e.type === "camera2" || e.type === "attachement" || e.type === "photo" || e.type === "avatar") && E ? /* @__PURE__ */ i.jsx("div", { className: "flex flex-wrap gap-2", children: l && String(E).split(",").map((S) => S.trim()).filter(Boolean).map((S) => /* @__PURE__ */ i.jsx(
      l,
      {
        url: S
      },
      S
    )) }) : e.type === "richtextarea" ? /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "tiptap border border-gray-200 min-h-[400px] max-h-[220px] overflow-auto bg-white rounded p-2 text-sm",
        dangerouslySetInnerHTML: { __html: m ?? "" }
      }
    ) : /* @__PURE__ */ i.jsx("p", { className: c, children: x }) })
  ] });
}
function Yo({ filePath: e, field_name: t, sqlOpsUrls: r }) {
  const [n, a] = Ne(null), s = e.replace(/^[^&]*&/, "");
  return xe(() => {
    if (!open || !r) return;
    let o = !0, l = null;
    return Uu(s, r).then((u) => {
      o && (l = u, a(u));
    }), () => {
      o = !1, l && URL.revokeObjectURL(l);
    };
  }, [open, s, r]), n ? /* @__PURE__ */ i.jsx("div", { className: "h-24 w-24 rounded border border-dashed bg-gray-50 flex items-center justify-center", children: n ? /* @__PURE__ */ i.jsx(
    "img",
    {
      alt: t,
      title: t,
      src: n,
      className: "h-24 w-24 object-cover rounded"
    }
  ) : /* @__PURE__ */ i.jsx("i", { className: "fa-regular fa-image text-gray-400 text-2xl" }) }) : null;
}
function Vu({
  commonInfo: e,
  infoData: t,
  hiddenFields: r = [],
  sqlOpsUrls: n,
  setFieldOptions: a,
  fieldOptions: s,
  module_refid: o,
  refid: l,
  methods: u,
  AttachmentPopup: c
}) {
  const f = qt(
    () => e?.fields?.find((y) => y.type === "avatar"),
    [e?.fields]
  ), d = f?.name, p = d && typeof t?.[d] == "string" ? t[d].trim() : "";
  return /* @__PURE__ */ i.jsx("div", { className: "bg-white border border-gray-100 p-4 min-h-3/10 overflow-auto", children: /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    f && /* @__PURE__ */ i.jsx("div", { className: "lg:col-span-2 flex flex-col items-center", children: /* @__PURE__ */ i.jsx("div", { className: "relative w-42 h-42 p-2 rounded-sm overflow-hidden bg-gray-100 flex items-center justify-center", children: p ? /* @__PURE__ */ i.jsx(
      Yo,
      {
        field_name: f.name,
        filePath: p,
        sqlOpsUrls: n
      }
    ) : /* @__PURE__ */ i.jsx(
      "img",
      {
        src: "https://cdn-icons-png.flaticon.com/512/266/266033.png",
        alt: "avatar placeholder",
        className: "w-full h-full object-cover opacity-60"
      }
    ) }) }),
    /* @__PURE__ */ i.jsx("div", { className: `min-h-0 max-h-40 overflow-y-auto custom-scrollbar ${f ? "lg:col-span-10" : "lg:col-span-12"}`, children: /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-12 gap-2", children: e.fields?.map((y, g) => r.includes(y.name) || y.type === "avatar" ? null : /* @__PURE__ */ i.jsx("div", { className: `hover:bg-gray-100 transition-colors duration-200 col-span-12 sm:col-span-6 ${Xt[Zt(Number(y.width))] || "lg:col-span-4"}`, children: /* @__PURE__ */ i.jsx(
      vr,
      {
        field: y,
        data: t ?? {},
        sqlOpsUrls: n,
        methods: u,
        refid: l,
        module_refid: o,
        setFieldOptions: a,
        ...s[y.name] ? { optionsOverride: s[y.name] } : {},
        AttachmentPopup: c
      },
      y?.name
    ) }, y.name)) }) })
  ] }) });
}
function oa({ tabObj: e, methods: t, tabName: r, sqlOpsUrls: n, refid: a, module_refid: s, setFieldOptions: o, fieldOptions: l, AttachmentPopup: u }) {
  const [c, f] = de.useState(null);
  return de.useEffect(() => {
    let d = !1;
    return (async () => {
      const y = e?.config;
      if (!y?.type) {
        d || f(null);
        return;
      }
      if (y.type === "method") {
        const g = y.method, v = g ? t[g] : void 0;
        if (v)
          try {
            const E = await Promise.resolve(v());
            d || f(E || null);
          } catch (E) {
            console.error("Method execution failed:", E), d || f(null);
          }
        else
          d || f(null);
      }
      if (y.type === "api")
        try {
          const g = await Q({
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
          d || f(g.data || null);
        } catch (g) {
          console.error("API fetch failed:", g), d || f(null);
        }
      if (y.type === "sql" && a && a != "0" || y?.dbopsid) {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let g = !1, v;
          y?.dbopsid && (g = !0, v = y?.dbopsid);
          const E = await Q({
            method: "GET",
            url: n.baseURL + n.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          });
          if (!g) {
            let m = {
              ...y
            };
            y.where && (m = {
              ...y,
              where: Ue(y.where, {
                refid: a
              })
            }), v = (await Q({
              method: "POST",
              url: n.baseURL + n.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: m,
                fields: Wr(y.fields, n.operation),
                forcefill: y.forcefill,
                datahash: E.data.refhash,
                srcid: s
              },
              headers: {
                Authorization: `Bearer ${n?.accessToken}`
              }
            }))?.data.refid;
          }
          const x = await Q({
            method: "POST",
            url: n.baseURL + n.dbopsFetch,
            data: {
              refid: v,
              datahash: E.data.refhash
            },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }), w = Uo(x);
          d || f(w);
        } catch (g) {
          console.error("API fetch failed:", g);
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
  ]), /* @__PURE__ */ i.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-12 gap-2", children: c ? Object.keys(c).map((d, p) => {
    let y = { name: d, label: d };
    return /* @__PURE__ */ i.jsx(
      "div",
      {
        className: `col-span-12 sm:col-span-6 ${Xt[Zt(e.width)] || "lg:col-span-2"}`,
        children: /* @__PURE__ */ i.jsx(
          vr,
          {
            field: y,
            data: c ?? {},
            methods: t,
            refid: a,
            sqlOpsUrls: n,
            setFieldOptions: o,
            ...l[y.name] ? { optionsOverride: l[y.name] } : {},
            AttachmentPopup: u
          },
          d
        )
      },
      `field-${p}`
    );
  }) : /* @__PURE__ */ i.jsx("div", { className: "col-span-12 flex flex-col  min-h-0", children: /* @__PURE__ */ i.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center text-gray-500", children: [
    /* @__PURE__ */ i.jsx("div", { className: "w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ i.jsxs("svg", { className: "w-8 h-8 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
      /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" }),
      /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m8 7 4-4 4 4" })
    ] }) }),
    /* @__PURE__ */ i.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No Data Available" }),
    /* @__PURE__ */ i.jsx("p", { className: "text-sm text-gray-500 text-center max-w-sm", children: "There are no records to display  at the moment." })
  ] }) }) }) });
}
function Hu({
  open: e,
  title: t = "Confirm Delete",
  message: r = "Are you sure you want to delete this record?",
  onConfirm: n,
  onCancel: a
}) {
  return e ? /* @__PURE__ */ i.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40", children: /* @__PURE__ */ i.jsxs("div", { className: "bg-white rounded-lg shadow-lg w-full max-w-sm p-4", children: [
    /* @__PURE__ */ i.jsx("h3", { className: "text-sm font-semibold text-gray-900", children: t }),
    /* @__PURE__ */ i.jsx("p", { className: "mt-2 text-sm text-gray-600", children: r }),
    /* @__PURE__ */ i.jsxs("div", { className: "mt-4 flex justify-end gap-2", children: [
      /* @__PURE__ */ i.jsx(
        "button",
        {
          onClick: a,
          className: "px-3 py-1.5 text-sm rounded border border-gray-300 text-gray-700 hover:bg-gray-50",
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          onClick: n,
          className: "px-3 py-1.5 text-sm rounded bg-red-600 text-white hover:bg-red-700",
          children: "Delete"
        }
      )
    ] })
  ] }) }) : null;
}
var Gu = function(t) {
  return qu(t) && !Wu(t);
};
function qu(e) {
  return !!e && typeof e == "object";
}
function Wu(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || Xu(e);
}
var Ku = typeof Symbol == "function" && Symbol.for, Yu = Ku ? Symbol.for("react.element") : 60103;
function Xu(e) {
  return e.$$typeof === Yu;
}
function Zu(e) {
  return Array.isArray(e) ? [] : {};
}
function Yr(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? hr(Zu(e), e, t) : e;
}
function Qu(e, t, r) {
  return e.concat(t).map(function(n) {
    return Yr(n, r);
  });
}
function Ju(e, t, r) {
  var n = {};
  return r.isMergeableObject(e) && Object.keys(e).forEach(function(a) {
    n[a] = Yr(e[a], r);
  }), Object.keys(t).forEach(function(a) {
    !r.isMergeableObject(t[a]) || !e[a] ? n[a] = Yr(t[a], r) : n[a] = hr(e[a], t[a], r);
  }), n;
}
function hr(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || Qu, r.isMergeableObject = r.isMergeableObject || Gu;
  var n = Array.isArray(t), a = Array.isArray(e), s = n === a;
  return s ? n ? r.arrayMerge(e, t, r) : Ju(e, t, r) : Yr(t, r);
}
hr.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(n, a) {
    return hr(n, a, r);
  }, {});
};
var Xn = hr, Xo = typeof global == "object" && global && global.Object === Object && global, ed = typeof self == "object" && self && self.Object === Object && self, st = Xo || ed || Function("return this")(), yt = st.Symbol, Zo = Object.prototype, td = Zo.hasOwnProperty, rd = Zo.toString, lr = yt ? yt.toStringTag : void 0;
function nd(e) {
  var t = td.call(e, lr), r = e[lr];
  try {
    e[lr] = void 0;
    var n = !0;
  } catch {
  }
  var a = rd.call(e);
  return n && (t ? e[lr] = r : delete e[lr]), a;
}
var ad = Object.prototype, sd = ad.toString;
function od(e) {
  return sd.call(e);
}
var id = "[object Null]", ld = "[object Undefined]", fs = yt ? yt.toStringTag : void 0;
function Ft(e) {
  return e == null ? e === void 0 ? ld : id : fs && fs in Object(e) ? nd(e) : od(e);
}
function Qo(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var ia = Qo(Object.getPrototypeOf, Object);
function $t(e) {
  return e != null && typeof e == "object";
}
var cd = "[object Object]", ud = Function.prototype, dd = Object.prototype, Jo = ud.toString, fd = dd.hasOwnProperty, hd = Jo.call(Object);
function hs(e) {
  if (!$t(e) || Ft(e) != cd)
    return !1;
  var t = ia(e);
  if (t === null)
    return !0;
  var r = fd.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Jo.call(r) == hd;
}
function pd() {
  this.__data__ = [], this.size = 0;
}
function ei(e, t) {
  return e === t || e !== e && t !== t;
}
function an(e, t) {
  for (var r = e.length; r--; )
    if (ei(e[r][0], t))
      return r;
  return -1;
}
var md = Array.prototype, yd = md.splice;
function gd(e) {
  var t = this.__data__, r = an(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : yd.call(t, r, 1), --this.size, !0;
}
function bd(e) {
  var t = this.__data__, r = an(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function xd(e) {
  return an(this.__data__, e) > -1;
}
function vd(e, t) {
  var r = this.__data__, n = an(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function pt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
pt.prototype.clear = pd;
pt.prototype.delete = gd;
pt.prototype.get = bd;
pt.prototype.has = xd;
pt.prototype.set = vd;
function wd() {
  this.__data__ = new pt(), this.size = 0;
}
function Ed(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Td(e) {
  return this.__data__.get(e);
}
function Sd(e) {
  return this.__data__.has(e);
}
function wr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ad = "[object AsyncFunction]", _d = "[object Function]", jd = "[object GeneratorFunction]", Nd = "[object Proxy]";
function ti(e) {
  if (!wr(e))
    return !1;
  var t = Ft(e);
  return t == _d || t == jd || t == Ad || t == Nd;
}
var Cn = st["__core-js_shared__"], ps = function() {
  var e = /[^.]+$/.exec(Cn && Cn.keys && Cn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Od(e) {
  return !!ps && ps in e;
}
var Rd = Function.prototype, Cd = Rd.toString;
function It(e) {
  if (e != null) {
    try {
      return Cd.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Fd = /[\\^$.*+?()[\]{}|]/g, $d = /^\[object .+?Constructor\]$/, Id = Function.prototype, Pd = Object.prototype, Dd = Id.toString, Ld = Pd.hasOwnProperty, Md = RegExp(
  "^" + Dd.call(Ld).replace(Fd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function kd(e) {
  if (!wr(e) || Od(e))
    return !1;
  var t = ti(e) ? Md : $d;
  return t.test(It(e));
}
function zd(e, t) {
  return e?.[t];
}
function Pt(e, t) {
  var r = zd(e, t);
  return kd(r) ? r : void 0;
}
var pr = Pt(st, "Map"), mr = Pt(Object, "create");
function Bd() {
  this.__data__ = mr ? mr(null) : {}, this.size = 0;
}
function Ud(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Vd = "__lodash_hash_undefined__", Hd = Object.prototype, Gd = Hd.hasOwnProperty;
function qd(e) {
  var t = this.__data__;
  if (mr) {
    var r = t[e];
    return r === Vd ? void 0 : r;
  }
  return Gd.call(t, e) ? t[e] : void 0;
}
var Wd = Object.prototype, Kd = Wd.hasOwnProperty;
function Yd(e) {
  var t = this.__data__;
  return mr ? t[e] !== void 0 : Kd.call(t, e);
}
var Xd = "__lodash_hash_undefined__";
function Zd(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = mr && t === void 0 ? Xd : t, this;
}
function Rt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Rt.prototype.clear = Bd;
Rt.prototype.delete = Ud;
Rt.prototype.get = qd;
Rt.prototype.has = Yd;
Rt.prototype.set = Zd;
function Qd() {
  this.size = 0, this.__data__ = {
    hash: new Rt(),
    map: new (pr || pt)(),
    string: new Rt()
  };
}
function Jd(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function sn(e, t) {
  var r = e.__data__;
  return Jd(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function ef(e) {
  var t = sn(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function tf(e) {
  return sn(this, e).get(e);
}
function rf(e) {
  return sn(this, e).has(e);
}
function nf(e, t) {
  var r = sn(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function gt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
gt.prototype.clear = Qd;
gt.prototype.delete = ef;
gt.prototype.get = tf;
gt.prototype.has = rf;
gt.prototype.set = nf;
var af = 200;
function sf(e, t) {
  var r = this.__data__;
  if (r instanceof pt) {
    var n = r.__data__;
    if (!pr || n.length < af - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new gt(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Qt(e) {
  var t = this.__data__ = new pt(e);
  this.size = t.size;
}
Qt.prototype.clear = wd;
Qt.prototype.delete = Ed;
Qt.prototype.get = Td;
Qt.prototype.has = Sd;
Qt.prototype.set = sf;
function of(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var ms = function() {
  try {
    var e = Pt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function ri(e, t, r) {
  t == "__proto__" && ms ? ms(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var lf = Object.prototype, cf = lf.hasOwnProperty;
function ni(e, t, r) {
  var n = e[t];
  (!(cf.call(e, t) && ei(n, r)) || r === void 0 && !(t in e)) && ri(e, t, r);
}
function on(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var s = -1, o = t.length; ++s < o; ) {
    var l = t[s], u = void 0;
    u === void 0 && (u = e[l]), a ? ri(r, l, u) : ni(r, l, u);
  }
  return r;
}
function uf(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var df = "[object Arguments]";
function ys(e) {
  return $t(e) && Ft(e) == df;
}
var ai = Object.prototype, ff = ai.hasOwnProperty, hf = ai.propertyIsEnumerable, pf = ys(/* @__PURE__ */ function() {
  return arguments;
}()) ? ys : function(e) {
  return $t(e) && ff.call(e, "callee") && !hf.call(e, "callee");
}, Er = Array.isArray;
function mf() {
  return !1;
}
var si = typeof exports == "object" && exports && !exports.nodeType && exports, gs = si && typeof module == "object" && module && !module.nodeType && module, yf = gs && gs.exports === si, bs = yf ? st.Buffer : void 0, gf = bs ? bs.isBuffer : void 0, oi = gf || mf, bf = 9007199254740991, xf = /^(?:0|[1-9]\d*)$/;
function vf(e, t) {
  var r = typeof e;
  return t = t ?? bf, !!t && (r == "number" || r != "symbol" && xf.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var wf = 9007199254740991;
function ii(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= wf;
}
var Ef = "[object Arguments]", Tf = "[object Array]", Sf = "[object Boolean]", Af = "[object Date]", _f = "[object Error]", jf = "[object Function]", Nf = "[object Map]", Of = "[object Number]", Rf = "[object Object]", Cf = "[object RegExp]", Ff = "[object Set]", $f = "[object String]", If = "[object WeakMap]", Pf = "[object ArrayBuffer]", Df = "[object DataView]", Lf = "[object Float32Array]", Mf = "[object Float64Array]", kf = "[object Int8Array]", zf = "[object Int16Array]", Bf = "[object Int32Array]", Uf = "[object Uint8Array]", Vf = "[object Uint8ClampedArray]", Hf = "[object Uint16Array]", Gf = "[object Uint32Array]", pe = {};
pe[Lf] = pe[Mf] = pe[kf] = pe[zf] = pe[Bf] = pe[Uf] = pe[Vf] = pe[Hf] = pe[Gf] = !0;
pe[Ef] = pe[Tf] = pe[Pf] = pe[Sf] = pe[Df] = pe[Af] = pe[_f] = pe[jf] = pe[Nf] = pe[Of] = pe[Rf] = pe[Cf] = pe[Ff] = pe[$f] = pe[If] = !1;
function qf(e) {
  return $t(e) && ii(e.length) && !!pe[Ft(e)];
}
function la(e) {
  return function(t) {
    return e(t);
  };
}
var li = typeof exports == "object" && exports && !exports.nodeType && exports, ur = li && typeof module == "object" && module && !module.nodeType && module, Wf = ur && ur.exports === li, Fn = Wf && Xo.process, Wt = function() {
  try {
    var e = ur && ur.require && ur.require("util").types;
    return e || Fn && Fn.binding && Fn.binding("util");
  } catch {
  }
}(), xs = Wt && Wt.isTypedArray, Kf = xs ? la(xs) : qf, Yf = Object.prototype, Xf = Yf.hasOwnProperty;
function ci(e, t) {
  var r = Er(e), n = !r && pf(e), a = !r && !n && oi(e), s = !r && !n && !a && Kf(e), o = r || n || a || s, l = o ? uf(e.length, String) : [], u = l.length;
  for (var c in e)
    (t || Xf.call(e, c)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    vf(c, u))) && l.push(c);
  return l;
}
var Zf = Object.prototype;
function ca(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Zf;
  return e === r;
}
var Qf = Qo(Object.keys, Object), Jf = Object.prototype, eh = Jf.hasOwnProperty;
function th(e) {
  if (!ca(e))
    return Qf(e);
  var t = [];
  for (var r in Object(e))
    eh.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function ui(e) {
  return e != null && ii(e.length) && !ti(e);
}
function ua(e) {
  return ui(e) ? ci(e) : th(e);
}
function rh(e, t) {
  return e && on(t, ua(t), e);
}
function nh(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var ah = Object.prototype, sh = ah.hasOwnProperty;
function oh(e) {
  if (!wr(e))
    return nh(e);
  var t = ca(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !sh.call(e, n)) || r.push(n);
  return r;
}
function da(e) {
  return ui(e) ? ci(e, !0) : oh(e);
}
function ih(e, t) {
  return e && on(t, da(t), e);
}
var di = typeof exports == "object" && exports && !exports.nodeType && exports, vs = di && typeof module == "object" && module && !module.nodeType && module, lh = vs && vs.exports === di, ws = lh ? st.Buffer : void 0, Es = ws ? ws.allocUnsafe : void 0;
function ch(e, t) {
  if (t)
    return e.slice();
  var r = e.length, n = Es ? Es(r) : new e.constructor(r);
  return e.copy(n), n;
}
function fi(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
function uh(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, s = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (s[a++] = o);
  }
  return s;
}
function hi() {
  return [];
}
var dh = Object.prototype, fh = dh.propertyIsEnumerable, Ts = Object.getOwnPropertySymbols, fa = Ts ? function(e) {
  return e == null ? [] : (e = Object(e), uh(Ts(e), function(t) {
    return fh.call(e, t);
  }));
} : hi;
function hh(e, t) {
  return on(e, fa(e), t);
}
function pi(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var ph = Object.getOwnPropertySymbols, mi = ph ? function(e) {
  for (var t = []; e; )
    pi(t, fa(e)), e = ia(e);
  return t;
} : hi;
function mh(e, t) {
  return on(e, mi(e), t);
}
function yi(e, t, r) {
  var n = t(e);
  return Er(e) ? n : pi(n, r(e));
}
function yh(e) {
  return yi(e, ua, fa);
}
function gh(e) {
  return yi(e, da, mi);
}
var Zn = Pt(st, "DataView"), Qn = Pt(st, "Promise"), Jn = Pt(st, "Set"), ea = Pt(st, "WeakMap"), Ss = "[object Map]", bh = "[object Object]", As = "[object Promise]", _s = "[object Set]", js = "[object WeakMap]", Ns = "[object DataView]", xh = It(Zn), vh = It(pr), wh = It(Qn), Eh = It(Jn), Th = It(ea), ut = Ft;
(Zn && ut(new Zn(new ArrayBuffer(1))) != Ns || pr && ut(new pr()) != Ss || Qn && ut(Qn.resolve()) != As || Jn && ut(new Jn()) != _s || ea && ut(new ea()) != js) && (ut = function(e) {
  var t = Ft(e), r = t == bh ? e.constructor : void 0, n = r ? It(r) : "";
  if (n)
    switch (n) {
      case xh:
        return Ns;
      case vh:
        return Ss;
      case wh:
        return As;
      case Eh:
        return _s;
      case Th:
        return js;
    }
  return t;
});
var Sh = Object.prototype, Ah = Sh.hasOwnProperty;
function _h(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && Ah.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var Os = st.Uint8Array;
function ha(e) {
  var t = new e.constructor(e.byteLength);
  return new Os(t).set(new Os(e)), t;
}
function jh(e, t) {
  var r = t ? ha(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var Nh = /\w*$/;
function Oh(e) {
  var t = new e.constructor(e.source, Nh.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Rs = yt ? yt.prototype : void 0, Cs = Rs ? Rs.valueOf : void 0;
function Rh(e) {
  return Cs ? Object(Cs.call(e)) : {};
}
function Ch(e, t) {
  var r = t ? ha(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var Fh = "[object Boolean]", $h = "[object Date]", Ih = "[object Map]", Ph = "[object Number]", Dh = "[object RegExp]", Lh = "[object Set]", Mh = "[object String]", kh = "[object Symbol]", zh = "[object ArrayBuffer]", Bh = "[object DataView]", Uh = "[object Float32Array]", Vh = "[object Float64Array]", Hh = "[object Int8Array]", Gh = "[object Int16Array]", qh = "[object Int32Array]", Wh = "[object Uint8Array]", Kh = "[object Uint8ClampedArray]", Yh = "[object Uint16Array]", Xh = "[object Uint32Array]";
function Zh(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case zh:
      return ha(e);
    case Fh:
    case $h:
      return new n(+e);
    case Bh:
      return jh(e, r);
    case Uh:
    case Vh:
    case Hh:
    case Gh:
    case qh:
    case Wh:
    case Kh:
    case Yh:
    case Xh:
      return Ch(e, r);
    case Ih:
      return new n();
    case Ph:
    case Mh:
      return new n(e);
    case Dh:
      return Oh(e);
    case Lh:
      return new n();
    case kh:
      return Rh(e);
  }
}
var Fs = Object.create, Qh = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!wr(t))
      return {};
    if (Fs)
      return Fs(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function Jh(e) {
  return typeof e.constructor == "function" && !ca(e) ? Qh(ia(e)) : {};
}
var ep = "[object Map]";
function tp(e) {
  return $t(e) && ut(e) == ep;
}
var $s = Wt && Wt.isMap, rp = $s ? la($s) : tp, np = "[object Set]";
function ap(e) {
  return $t(e) && ut(e) == np;
}
var Is = Wt && Wt.isSet, sp = Is ? la(Is) : ap, op = 1, ip = 2, lp = 4, gi = "[object Arguments]", cp = "[object Array]", up = "[object Boolean]", dp = "[object Date]", fp = "[object Error]", bi = "[object Function]", hp = "[object GeneratorFunction]", pp = "[object Map]", mp = "[object Number]", xi = "[object Object]", yp = "[object RegExp]", gp = "[object Set]", bp = "[object String]", xp = "[object Symbol]", vp = "[object WeakMap]", wp = "[object ArrayBuffer]", Ep = "[object DataView]", Tp = "[object Float32Array]", Sp = "[object Float64Array]", Ap = "[object Int8Array]", _p = "[object Int16Array]", jp = "[object Int32Array]", Np = "[object Uint8Array]", Op = "[object Uint8ClampedArray]", Rp = "[object Uint16Array]", Cp = "[object Uint32Array]", he = {};
he[gi] = he[cp] = he[wp] = he[Ep] = he[up] = he[dp] = he[Tp] = he[Sp] = he[Ap] = he[_p] = he[jp] = he[pp] = he[mp] = he[xi] = he[yp] = he[gp] = he[bp] = he[xp] = he[Np] = he[Op] = he[Rp] = he[Cp] = !0;
he[fp] = he[bi] = he[vp] = !1;
function dr(e, t, r, n, a, s) {
  var o, l = t & op, u = t & ip, c = t & lp;
  if (o !== void 0)
    return o;
  if (!wr(e))
    return e;
  var f = Er(e);
  if (f) {
    if (o = _h(e), !l)
      return fi(e, o);
  } else {
    var d = ut(e), p = d == bi || d == hp;
    if (oi(e))
      return ch(e, l);
    if (d == xi || d == gi || p && !a) {
      if (o = u || p ? {} : Jh(e), !l)
        return u ? mh(e, ih(o, e)) : hh(e, rh(o, e));
    } else {
      if (!he[d])
        return a ? e : {};
      o = Zh(e, d, l);
    }
  }
  s || (s = new Qt());
  var y = s.get(e);
  if (y)
    return y;
  s.set(e, o), sp(e) ? e.forEach(function(E) {
    o.add(dr(E, t, r, E, e, s));
  }) : rp(e) && e.forEach(function(E, x) {
    o.set(x, dr(E, t, r, x, e, s));
  });
  var g = c ? u ? gh : yh : u ? da : ua, v = f ? void 0 : g(e);
  return of(v || e, function(E, x) {
    v && (x = E, E = e[x]), ni(o, x, dr(E, t, r, x, e, s));
  }), o;
}
var Fp = 1, $p = 4;
function Cr(e) {
  return dr(e, Fp | $p);
}
var $n, Ps;
function Ip() {
  if (Ps) return $n;
  Ps = 1;
  var e = Array.isArray, t = Object.keys, r = Object.prototype.hasOwnProperty, n = typeof Element < "u";
  function a(s, o) {
    if (s === o) return !0;
    if (s && o && typeof s == "object" && typeof o == "object") {
      var l = e(s), u = e(o), c, f, d;
      if (l && u) {
        if (f = s.length, f != o.length) return !1;
        for (c = f; c-- !== 0; )
          if (!a(s[c], o[c])) return !1;
        return !0;
      }
      if (l != u) return !1;
      var p = s instanceof Date, y = o instanceof Date;
      if (p != y) return !1;
      if (p && y) return s.getTime() == o.getTime();
      var g = s instanceof RegExp, v = o instanceof RegExp;
      if (g != v) return !1;
      if (g && v) return s.toString() == o.toString();
      var E = t(s);
      if (f = E.length, f !== t(o).length)
        return !1;
      for (c = f; c-- !== 0; )
        if (!r.call(o, E[c])) return !1;
      if (n && s instanceof Element && o instanceof Element)
        return s === o;
      for (c = f; c-- !== 0; )
        if (d = E[c], !(d === "_owner" && s.$$typeof) && !a(s[d], o[d]))
          return !1;
      return !0;
    }
    return s !== s && o !== o;
  }
  return $n = function(o, l) {
    try {
      return a(o, l);
    } catch (u) {
      if (u.message && u.message.match(/stack|recursion/i) || u.number === -2146828260)
        return console.warn("Warning: react-fast-compare does not handle circular references.", u.name, u.message), !1;
      throw u;
    }
  }, $n;
}
var Pp = Ip();
const Tt = /* @__PURE__ */ Zs(Pp);
var Dp = process.env.NODE_ENV === "production";
function Gt(e, t) {
  if (!Dp) {
    var r = "Warning: " + t;
    typeof console < "u" && console.warn(r);
    try {
      throw Error(r);
    } catch {
    }
  }
}
var Lp = 4;
function Ds(e) {
  return dr(e, Lp);
}
function vi(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var Mp = "[object Symbol]";
function pa(e) {
  return typeof e == "symbol" || $t(e) && Ft(e) == Mp;
}
var kp = "Expected a function";
function ma(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(kp);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(a))
      return s.get(a);
    var o = e.apply(this, n);
    return r.cache = s.set(a, o) || s, o;
  };
  return r.cache = new (ma.Cache || gt)(), r;
}
ma.Cache = gt;
var zp = 500;
function Bp(e) {
  var t = ma(e, function(n) {
    return r.size === zp && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Up = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Vp = /\\(\\)?/g, Hp = Bp(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Up, function(r, n, a, s) {
    t.push(a ? s.replace(Vp, "$1") : n || r);
  }), t;
});
function Gp(e) {
  if (typeof e == "string" || pa(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Ls = yt ? yt.prototype : void 0, Ms = Ls ? Ls.toString : void 0;
function wi(e) {
  if (typeof e == "string")
    return e;
  if (Er(e))
    return vi(e, wi) + "";
  if (pa(e))
    return Ms ? Ms.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function qp(e) {
  return e == null ? "" : wi(e);
}
function Ei(e) {
  return Er(e) ? vi(e, Gp) : pa(e) ? [e] : fi(Hp(qp(e)));
}
var Fr = { exports: {} }, ce = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ks;
function Wp() {
  if (ks) return ce;
  ks = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function m(h) {
    if (typeof h == "object" && h !== null) {
      var T = h.$$typeof;
      switch (T) {
        case t:
          switch (h = h.type, h) {
            case u:
            case c:
            case n:
            case s:
            case a:
            case d:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case l:
                case f:
                case g:
                case y:
                case o:
                  return h;
                default:
                  return T;
              }
          }
        case r:
          return T;
      }
    }
  }
  function S(h) {
    return m(h) === c;
  }
  return ce.AsyncMode = u, ce.ConcurrentMode = c, ce.ContextConsumer = l, ce.ContextProvider = o, ce.Element = t, ce.ForwardRef = f, ce.Fragment = n, ce.Lazy = g, ce.Memo = y, ce.Portal = r, ce.Profiler = s, ce.StrictMode = a, ce.Suspense = d, ce.isAsyncMode = function(h) {
    return S(h) || m(h) === u;
  }, ce.isConcurrentMode = S, ce.isContextConsumer = function(h) {
    return m(h) === l;
  }, ce.isContextProvider = function(h) {
    return m(h) === o;
  }, ce.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, ce.isForwardRef = function(h) {
    return m(h) === f;
  }, ce.isFragment = function(h) {
    return m(h) === n;
  }, ce.isLazy = function(h) {
    return m(h) === g;
  }, ce.isMemo = function(h) {
    return m(h) === y;
  }, ce.isPortal = function(h) {
    return m(h) === r;
  }, ce.isProfiler = function(h) {
    return m(h) === s;
  }, ce.isStrictMode = function(h) {
    return m(h) === a;
  }, ce.isSuspense = function(h) {
    return m(h) === d;
  }, ce.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === c || h === s || h === a || h === d || h === p || typeof h == "object" && h !== null && (h.$$typeof === g || h.$$typeof === y || h.$$typeof === o || h.$$typeof === l || h.$$typeof === f || h.$$typeof === E || h.$$typeof === x || h.$$typeof === w || h.$$typeof === v);
  }, ce.typeOf = m, ce;
}
var ue = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zs;
function Kp() {
  return zs || (zs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function m($) {
      return typeof $ == "string" || typeof $ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      $ === n || $ === c || $ === s || $ === a || $ === d || $ === p || typeof $ == "object" && $ !== null && ($.$$typeof === g || $.$$typeof === y || $.$$typeof === o || $.$$typeof === l || $.$$typeof === f || $.$$typeof === E || $.$$typeof === x || $.$$typeof === w || $.$$typeof === v);
    }
    function S($) {
      if (typeof $ == "object" && $ !== null) {
        var re = $.$$typeof;
        switch (re) {
          case t:
            var M = $.type;
            switch (M) {
              case u:
              case c:
              case n:
              case s:
              case a:
              case d:
                return M;
              default:
                var K = M && M.$$typeof;
                switch (K) {
                  case l:
                  case f:
                  case g:
                  case y:
                  case o:
                    return K;
                  default:
                    return re;
                }
            }
          case r:
            return re;
        }
      }
    }
    var h = u, T = c, R = l, P = o, L = t, H = f, _ = n, B = g, z = y, D = r, N = s, ye = a, ge = d, oe = !1;
    function Se($) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), C($) || S($) === u;
    }
    function C($) {
      return S($) === c;
    }
    function V($) {
      return S($) === l;
    }
    function X($) {
      return S($) === o;
    }
    function te($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === t;
    }
    function we($) {
      return S($) === f;
    }
    function ee($) {
      return S($) === n;
    }
    function Ae($) {
      return S($) === g;
    }
    function Re($) {
      return S($) === y;
    }
    function ie($) {
      return S($) === r;
    }
    function O($) {
      return S($) === s;
    }
    function U($) {
      return S($) === a;
    }
    function F($) {
      return S($) === d;
    }
    ue.AsyncMode = h, ue.ConcurrentMode = T, ue.ContextConsumer = R, ue.ContextProvider = P, ue.Element = L, ue.ForwardRef = H, ue.Fragment = _, ue.Lazy = B, ue.Memo = z, ue.Portal = D, ue.Profiler = N, ue.StrictMode = ye, ue.Suspense = ge, ue.isAsyncMode = Se, ue.isConcurrentMode = C, ue.isContextConsumer = V, ue.isContextProvider = X, ue.isElement = te, ue.isForwardRef = we, ue.isFragment = ee, ue.isLazy = Ae, ue.isMemo = Re, ue.isPortal = ie, ue.isProfiler = O, ue.isStrictMode = U, ue.isSuspense = F, ue.isValidElementType = m, ue.typeOf = S;
  }()), ue;
}
var Bs;
function Yp() {
  return Bs || (Bs = 1, process.env.NODE_ENV === "production" ? Fr.exports = Wp() : Fr.exports = Kp()), Fr.exports;
}
var In, Us;
function Xp() {
  if (Us) return In;
  Us = 1;
  var e = Yp(), t = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, r = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, n = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, a = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, s = {};
  s[e.ForwardRef] = n, s[e.Memo] = a;
  function o(g) {
    return e.isMemo(g) ? a : s[g.$$typeof] || t;
  }
  var l = Object.defineProperty, u = Object.getOwnPropertyNames, c = Object.getOwnPropertySymbols, f = Object.getOwnPropertyDescriptor, d = Object.getPrototypeOf, p = Object.prototype;
  function y(g, v, E) {
    if (typeof v != "string") {
      if (p) {
        var x = d(v);
        x && x !== p && y(g, x, E);
      }
      var w = u(v);
      c && (w = w.concat(c(v)));
      for (var m = o(g), S = o(v), h = 0; h < w.length; ++h) {
        var T = w[h];
        if (!r[T] && !(E && E[T]) && !(S && S[T]) && !(m && m[T])) {
          var R = f(v, T);
          try {
            l(g, T, R);
          } catch {
          }
        }
      }
    }
    return g;
  }
  return In = y, In;
}
Xp();
function je() {
  return je = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, je.apply(this, arguments);
}
function Ti(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, s;
  for (s = 0; s < n.length; s++)
    a = n[s], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var ln = /* @__PURE__ */ Fi(void 0);
ln.displayName = "FormikContext";
ln.Provider;
ln.Consumer;
function Zp() {
  var e = Pi(ln);
  return e || (process.env.NODE_ENV !== "production" ? Gt(!1, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.") : Gt()), e;
}
var We = function(t) {
  return typeof t == "function";
}, cn = function(t) {
  return t !== null && typeof t == "object";
}, Qp = function(t) {
  return String(Math.floor(Number(t))) === t;
}, Pn = function(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}, Dn = function(t) {
  return cn(t) && We(t.then);
};
function Jp(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Be(e, t, r, n) {
  n === void 0 && (n = 0);
  for (var a = Ei(t); e && n < a.length; )
    e = e[a[n++]];
  return n !== a.length && !e || e === void 0 ? r : e;
}
function Nt(e, t, r) {
  for (var n = Ds(e), a = n, s = 0, o = Ei(t); s < o.length - 1; s++) {
    var l = o[s], u = Be(e, o.slice(0, s + 1));
    if (u && (cn(u) || Array.isArray(u)))
      a = a[l] = Ds(u);
    else {
      var c = o[s + 1];
      a = a[l] = Qp(c) && Number(c) >= 0 ? [] : {};
    }
  }
  return (s === 0 ? e : a)[o[s]] === r ? e : (r === void 0 ? delete a[o[s]] : a[o[s]] = r, s === 0 && r === void 0 && delete n[o[s]], n);
}
function Si(e, t, r, n) {
  r === void 0 && (r = /* @__PURE__ */ new WeakMap()), n === void 0 && (n = {});
  for (var a = 0, s = Object.keys(e); a < s.length; a++) {
    var o = s[a], l = e[o];
    cn(l) ? r.get(l) || (r.set(l, !0), n[o] = Array.isArray(l) ? [] : {}, Si(l, t, r, n[o])) : n[o] = t;
  }
  return n;
}
function em(e, t) {
  switch (t.type) {
    case "SET_VALUES":
      return je({}, e, {
        values: t.payload
      });
    case "SET_TOUCHED":
      return je({}, e, {
        touched: t.payload
      });
    case "SET_ERRORS":
      return Tt(e.errors, t.payload) ? e : je({}, e, {
        errors: t.payload
      });
    case "SET_STATUS":
      return je({}, e, {
        status: t.payload
      });
    case "SET_ISSUBMITTING":
      return je({}, e, {
        isSubmitting: t.payload
      });
    case "SET_ISVALIDATING":
      return je({}, e, {
        isValidating: t.payload
      });
    case "SET_FIELD_VALUE":
      return je({}, e, {
        values: Nt(e.values, t.payload.field, t.payload.value)
      });
    case "SET_FIELD_TOUCHED":
      return je({}, e, {
        touched: Nt(e.touched, t.payload.field, t.payload.value)
      });
    case "SET_FIELD_ERROR":
      return je({}, e, {
        errors: Nt(e.errors, t.payload.field, t.payload.value)
      });
    case "RESET_FORM":
      return je({}, e, t.payload);
    case "SET_FORMIK_STATE":
      return t.payload(e);
    case "SUBMIT_ATTEMPT":
      return je({}, e, {
        touched: Si(e.values, !0),
        isSubmitting: !0,
        submitCount: e.submitCount + 1
      });
    case "SUBMIT_FAILURE":
      return je({}, e, {
        isSubmitting: !1
      });
    case "SUBMIT_SUCCESS":
      return je({}, e, {
        isSubmitting: !1
      });
    default:
      return e;
  }
}
var wt = {}, $r = {};
function tm(e) {
  var t = e.validateOnChange, r = t === void 0 ? !0 : t, n = e.validateOnBlur, a = n === void 0 ? !0 : n, s = e.validateOnMount, o = s === void 0 ? !1 : s, l = e.isInitialValid, u = e.enableReinitialize, c = u === void 0 ? !1 : u, f = e.onSubmit, d = Ti(e, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]), p = je({
    validateOnChange: r,
    validateOnBlur: a,
    validateOnMount: o,
    onSubmit: f
  }, d), y = Pe(p.initialValues), g = Pe(p.initialErrors || wt), v = Pe(p.initialTouched || $r), E = Pe(p.initialStatus), x = Pe(!1), w = Pe({});
  process.env.NODE_ENV !== "production" && xe(function() {
    typeof l > "u" || (process.env.NODE_ENV !== "production" ? Gt(!1, "isInitialValid has been deprecated and will be removed in future versions of Formik. Please use initialErrors or validateOnMount instead.") : Gt());
  }, []), xe(function() {
    return x.current = !0, function() {
      x.current = !1;
    };
  }, []);
  var m = Ne(0), S = m[1], h = Pe({
    values: Cr(p.initialValues),
    errors: Cr(p.initialErrors) || wt,
    touched: Cr(p.initialTouched) || $r,
    status: Cr(p.initialStatus),
    isSubmitting: !1,
    isValidating: !1,
    submitCount: 0
  }), T = h.current, R = Te(function(A) {
    var k = h.current;
    h.current = em(k, A), k !== h.current && S(function(G) {
      return G + 1;
    });
  }, []), P = Te(function(A, k) {
    return new Promise(function(G, q) {
      var J = p.validate(A, k);
      J == null ? G(wt) : Dn(J) ? J.then(function(ne) {
        G(ne || wt);
      }, function(ne) {
        process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validate />", ne), q(ne);
      }) : G(J);
    });
  }, [p.validate]), L = Te(function(A, k) {
    var G = p.validationSchema, q = We(G) ? G(k) : G, J = k && q.validateAt ? q.validateAt(k, A) : nm(A, q);
    return new Promise(function(ne, be) {
      J.then(function() {
        ne(wt);
      }, function(Ge) {
        Ge.name === "ValidationError" ? ne(rm(Ge)) : (process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validationSchema />", Ge), be(Ge));
      });
    });
  }, [p.validationSchema]), H = Te(function(A, k) {
    return new Promise(function(G) {
      return G(w.current[A].validate(k));
    });
  }, []), _ = Te(function(A) {
    var k = Object.keys(w.current).filter(function(q) {
      return We(w.current[q].validate);
    }), G = k.length > 0 ? k.map(function(q) {
      return H(q, Be(A, q));
    }) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
    return Promise.all(G).then(function(q) {
      return q.reduce(function(J, ne, be) {
        return ne === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || ne && (J = Nt(J, k[be], ne)), J;
      }, {});
    });
  }, [H]), B = Te(function(A) {
    return Promise.all([_(A), p.validationSchema ? L(A) : {}, p.validate ? P(A) : {}]).then(function(k) {
      var G = k[0], q = k[1], J = k[2], ne = Xn.all([G, q, J], {
        arrayMerge: am
      });
      return ne;
    });
  }, [p.validate, p.validationSchema, _, P, L]), z = qe(function(A) {
    return A === void 0 && (A = T.values), R({
      type: "SET_ISVALIDATING",
      payload: !0
    }), B(A).then(function(k) {
      return x.current && (R({
        type: "SET_ISVALIDATING",
        payload: !1
      }), R({
        type: "SET_ERRORS",
        payload: k
      })), k;
    });
  });
  xe(function() {
    o && x.current === !0 && Tt(y.current, p.initialValues) && z(y.current);
  }, [o, z]);
  var D = Te(function(A) {
    var k = A && A.values ? A.values : y.current, G = A && A.errors ? A.errors : g.current ? g.current : p.initialErrors || {}, q = A && A.touched ? A.touched : v.current ? v.current : p.initialTouched || {}, J = A && A.status ? A.status : E.current ? E.current : p.initialStatus;
    y.current = k, g.current = G, v.current = q, E.current = J;
    var ne = function() {
      R({
        type: "RESET_FORM",
        payload: {
          isSubmitting: !!A && !!A.isSubmitting,
          errors: G,
          touched: q,
          status: J,
          values: k,
          isValidating: !!A && !!A.isValidating,
          submitCount: A && A.submitCount && typeof A.submitCount == "number" ? A.submitCount : 0
        }
      });
    };
    if (p.onReset) {
      var be = p.onReset(T.values, re);
      Dn(be) ? be.then(ne) : ne();
    } else
      ne();
  }, [p.initialErrors, p.initialStatus, p.initialTouched, p.onReset]);
  xe(function() {
    x.current === !0 && !Tt(y.current, p.initialValues) && c && (y.current = p.initialValues, D(), o && z(y.current));
  }, [c, p.initialValues, D, o, z]), xe(function() {
    c && x.current === !0 && !Tt(g.current, p.initialErrors) && (g.current = p.initialErrors || wt, R({
      type: "SET_ERRORS",
      payload: p.initialErrors || wt
    }));
  }, [c, p.initialErrors]), xe(function() {
    c && x.current === !0 && !Tt(v.current, p.initialTouched) && (v.current = p.initialTouched || $r, R({
      type: "SET_TOUCHED",
      payload: p.initialTouched || $r
    }));
  }, [c, p.initialTouched]), xe(function() {
    c && x.current === !0 && !Tt(E.current, p.initialStatus) && (E.current = p.initialStatus, R({
      type: "SET_STATUS",
      payload: p.initialStatus
    }));
  }, [c, p.initialStatus, p.initialTouched]);
  var N = qe(function(A) {
    if (w.current[A] && We(w.current[A].validate)) {
      var k = Be(T.values, A), G = w.current[A].validate(k);
      return Dn(G) ? (R({
        type: "SET_ISVALIDATING",
        payload: !0
      }), G.then(function(q) {
        return q;
      }).then(function(q) {
        R({
          type: "SET_FIELD_ERROR",
          payload: {
            field: A,
            value: q
          }
        }), R({
          type: "SET_ISVALIDATING",
          payload: !1
        });
      })) : (R({
        type: "SET_FIELD_ERROR",
        payload: {
          field: A,
          value: G
        }
      }), Promise.resolve(G));
    } else if (p.validationSchema)
      return R({
        type: "SET_ISVALIDATING",
        payload: !0
      }), L(T.values, A).then(function(q) {
        return q;
      }).then(function(q) {
        R({
          type: "SET_FIELD_ERROR",
          payload: {
            field: A,
            value: Be(q, A)
          }
        }), R({
          type: "SET_ISVALIDATING",
          payload: !1
        });
      });
    return Promise.resolve();
  }), ye = Te(function(A, k) {
    var G = k.validate;
    w.current[A] = {
      validate: G
    };
  }, []), ge = Te(function(A) {
    delete w.current[A];
  }, []), oe = qe(function(A, k) {
    R({
      type: "SET_TOUCHED",
      payload: A
    });
    var G = k === void 0 ? a : k;
    return G ? z(T.values) : Promise.resolve();
  }), Se = Te(function(A) {
    R({
      type: "SET_ERRORS",
      payload: A
    });
  }, []), C = qe(function(A, k) {
    var G = We(A) ? A(T.values) : A;
    R({
      type: "SET_VALUES",
      payload: G
    });
    var q = k === void 0 ? r : k;
    return q ? z(G) : Promise.resolve();
  }), V = Te(function(A, k) {
    R({
      type: "SET_FIELD_ERROR",
      payload: {
        field: A,
        value: k
      }
    });
  }, []), X = qe(function(A, k, G) {
    var q = We(k) ? k(Be(T.values, A)) : k;
    R({
      type: "SET_FIELD_VALUE",
      payload: {
        field: A,
        value: q
      }
    });
    var J = G === void 0 ? r : G;
    return J ? z(Nt(T.values, A, q)) : Promise.resolve();
  }), te = Te(function(A, k) {
    var G = k, q = A, J;
    if (!Pn(A)) {
      A.persist && A.persist();
      var ne = A.target ? A.target : A.currentTarget, be = ne.type, Ge = ne.name, Dt = ne.id, bt = ne.value, Tr = ne.checked, Lt = ne.outerHTML, xt = ne.options, Ze = ne.multiple;
      G = k || Ge || Dt, !G && process.env.NODE_ENV !== "production" && Vs({
        htmlContent: Lt,
        documentationAnchorLink: "handlechange-e-reactchangeeventany--void",
        handlerName: "handleChange"
      }), q = /number|range/.test(be) ? (J = parseFloat(bt), isNaN(J) ? "" : J) : /checkbox/.test(be) ? om(Be(T.values, G), Tr, bt) : xt && Ze ? sm(xt) : bt;
    }
    G && X(G, q);
  }, [X, T.values]), we = qe(function(A) {
    if (Pn(A))
      return function(k) {
        return te(k, A);
      };
    te(A);
  }), ee = qe(function(A, k, G) {
    k === void 0 && (k = !0), R({
      type: "SET_FIELD_TOUCHED",
      payload: {
        field: A,
        value: k
      }
    });
    var q = G === void 0 ? a : G;
    return q ? z(T.values) : Promise.resolve();
  }), Ae = Te(function(A, k) {
    A.persist && A.persist();
    var G = A.target, q = G.name, J = G.id, ne = G.outerHTML, be = k || q || J;
    !be && process.env.NODE_ENV !== "production" && Vs({
      htmlContent: ne,
      documentationAnchorLink: "handleblur-e-any--void",
      handlerName: "handleBlur"
    }), ee(be, !0);
  }, [ee]), Re = qe(function(A) {
    if (Pn(A))
      return function(k) {
        return Ae(k, A);
      };
    Ae(A);
  }), ie = Te(function(A) {
    We(A) ? R({
      type: "SET_FORMIK_STATE",
      payload: A
    }) : R({
      type: "SET_FORMIK_STATE",
      payload: function() {
        return A;
      }
    });
  }, []), O = Te(function(A) {
    R({
      type: "SET_STATUS",
      payload: A
    });
  }, []), U = Te(function(A) {
    R({
      type: "SET_ISSUBMITTING",
      payload: A
    });
  }, []), F = qe(function() {
    return R({
      type: "SUBMIT_ATTEMPT"
    }), z().then(function(A) {
      var k = A instanceof Error, G = !k && Object.keys(A).length === 0;
      if (G) {
        var q;
        try {
          if (q = M(), q === void 0)
            return;
        } catch (J) {
          throw J;
        }
        return Promise.resolve(q).then(function(J) {
          return x.current && R({
            type: "SUBMIT_SUCCESS"
          }), J;
        }).catch(function(J) {
          if (x.current)
            throw R({
              type: "SUBMIT_FAILURE"
            }), J;
        });
      } else if (x.current && (R({
        type: "SUBMIT_FAILURE"
      }), k))
        throw A;
    });
  }), $ = qe(function(A) {
    if (A && A.preventDefault && We(A.preventDefault) && A.preventDefault(), A && A.stopPropagation && We(A.stopPropagation) && A.stopPropagation(), process.env.NODE_ENV !== "production" && typeof document < "u") {
      var k = Jp();
      k !== null && k instanceof HTMLButtonElement && (k.attributes && k.attributes.getNamedItem("type") || (process.env.NODE_ENV !== "production" ? Gt(!1, 'You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type="submit"`. If this is not a submit button, please add `type="button"`.') : Gt()));
    }
    F().catch(function(G) {
      console.warn("Warning: An unhandled error was caught from submitForm()", G);
    });
  }), re = {
    resetForm: D,
    validateForm: z,
    validateField: N,
    setErrors: Se,
    setFieldError: V,
    setFieldTouched: ee,
    setFieldValue: X,
    setStatus: O,
    setSubmitting: U,
    setTouched: oe,
    setValues: C,
    setFormikState: ie,
    submitForm: F
  }, M = qe(function() {
    return f(T.values, re);
  }), K = qe(function(A) {
    A && A.preventDefault && We(A.preventDefault) && A.preventDefault(), A && A.stopPropagation && We(A.stopPropagation) && A.stopPropagation(), D();
  }), Z = Te(function(A) {
    return {
      value: Be(T.values, A),
      error: Be(T.errors, A),
      touched: !!Be(T.touched, A),
      initialValue: Be(y.current, A),
      initialTouched: !!Be(v.current, A),
      initialError: Be(g.current, A)
    };
  }, [T.errors, T.touched, T.values]), le = Te(function(A) {
    return {
      setValue: function(G, q) {
        return X(A, G, q);
      },
      setTouched: function(G, q) {
        return ee(A, G, q);
      },
      setError: function(G) {
        return V(A, G);
      }
    };
  }, [X, ee, V]), fe = Te(function(A) {
    var k = cn(A), G = k ? A.name : A, q = Be(T.values, G), J = {
      name: G,
      value: q,
      onChange: we,
      onBlur: Re
    };
    if (k) {
      var ne = A.type, be = A.value, Ge = A.as, Dt = A.multiple;
      ne === "checkbox" ? be === void 0 ? J.checked = !!q : (J.checked = !!(Array.isArray(q) && ~q.indexOf(be)), J.value = be) : ne === "radio" ? (J.checked = q === be, J.value = be) : Ge === "select" && Dt && (J.value = J.value || [], J.multiple = !0);
    }
    return J;
  }, [Re, we, T.values]), ve = qt(function() {
    return !Tt(y.current, T.values);
  }, [y.current, T.values]), Ce = qt(function() {
    return typeof l < "u" ? ve ? T.errors && Object.keys(T.errors).length === 0 : l !== !1 && We(l) ? l(p) : l : T.errors && Object.keys(T.errors).length === 0;
  }, [l, ve, T.errors, p]), ot = je({}, T, {
    initialValues: y.current,
    initialErrors: g.current,
    initialTouched: v.current,
    initialStatus: E.current,
    handleBlur: Re,
    handleChange: we,
    handleReset: K,
    handleSubmit: $,
    resetForm: D,
    setErrors: Se,
    setFormikState: ie,
    setFieldTouched: ee,
    setFieldValue: X,
    setFieldError: V,
    setStatus: O,
    setSubmitting: U,
    setTouched: oe,
    setValues: C,
    submitForm: F,
    validateForm: z,
    validateField: N,
    isValid: Ce,
    dirty: ve,
    unregisterField: ge,
    registerField: ye,
    getFieldProps: fe,
    getFieldMeta: Z,
    getFieldHelpers: le,
    validateOnBlur: a,
    validateOnChange: r,
    validateOnMount: o
  });
  return ot;
}
function Vs(e) {
  var t = e.htmlContent, r = e.documentationAnchorLink, n = e.handlerName;
  console.warn("Warning: Formik called `" + n + "`, but you forgot to pass an `id` or `name` attribute to your input:\n    " + t + `
    Formik cannot determine which value to update. For more info see https://formik.org/docs/api/formik#` + r + `
  `);
}
function rm(e) {
  var t = {};
  if (e.inner) {
    if (e.inner.length === 0)
      return Nt(t, e.path, e.message);
    for (var a = e.inner, r = Array.isArray(a), n = 0, a = r ? a : a[Symbol.iterator](); ; ) {
      var s;
      if (r) {
        if (n >= a.length) break;
        s = a[n++];
      } else {
        if (n = a.next(), n.done) break;
        s = n.value;
      }
      var o = s;
      Be(t, o.path) || (t = Nt(t, o.path, o.message));
    }
  }
  return t;
}
function nm(e, t, r, n) {
  r === void 0 && (r = !1);
  var a = ta(e);
  return t[r ? "validateSync" : "validate"](a, {
    abortEarly: !1,
    context: a
  });
}
function ta(e) {
  var t = Array.isArray(e) ? [] : {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      var n = String(r);
      Array.isArray(e[n]) === !0 ? t[n] = e[n].map(function(a) {
        return Array.isArray(a) === !0 || hs(a) ? ta(a) : a !== "" ? a : void 0;
      }) : hs(e[n]) ? t[n] = ta(e[n]) : t[n] = e[n] !== "" ? e[n] : void 0;
    }
  return t;
}
function am(e, t, r) {
  var n = e.slice();
  return t.forEach(function(s, o) {
    if (typeof n[o] > "u") {
      var l = r.clone !== !1, u = l && r.isMergeableObject(s);
      n[o] = u ? Xn(Array.isArray(s) ? [] : {}, s, r) : s;
    } else r.isMergeableObject(s) ? n[o] = Xn(e[o], s, r) : e.indexOf(s) === -1 && n.push(s);
  }), n;
}
function sm(e) {
  return Array.from(e).filter(function(t) {
    return t.selected;
  }).map(function(t) {
    return t.value;
  });
}
function om(e, t, r) {
  if (typeof e == "boolean")
    return !!t;
  var n = [], a = !1, s = -1;
  if (Array.isArray(e))
    n = e, s = e.indexOf(r), a = s >= 0;
  else if (!r || r == "true" || r == "false")
    return !!t;
  return t && r && !a ? n.concat(r) : a ? n.slice(0, s).concat(n.slice(s + 1)) : n;
}
var im = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Xs : xe;
function qe(e) {
  var t = Pe(e);
  return im(function() {
    t.current = e;
  }), Te(function() {
    for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return t.current.apply(void 0, n);
  }, []);
}
var lm = /* @__PURE__ */ $i(function(e, t) {
  var r = e.action, n = Ti(e, ["action"]), a = r ?? "#", s = Zp(), o = s.handleReset, l = s.handleSubmit;
  return Ii("form", je({
    onSubmit: l,
    ref: t,
    onReset: o,
    action: a
  }, n));
});
lm.displayName = "Form";
function cm({
  field: e,
  formik: t,
  methods: r = {},
  sqlOpsUrls: n,
  refid: a,
  module_refid: s = "menuManager.main",
  optionsOverride: o,
  setFieldOptions: l,
  chainMap: u,
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
  ].includes(e?.type || "text"), [p, y] = Ne(!1), [g, v] = Ne(d), [E, x] = Ne(
    at(e, o ?? [])
  ), [w, m] = Ne(0), [S, h] = Ne(""), [T, R] = Ne(0), P = Pe(null), L = Pe(null), [H, _] = Ne(!1), B = Pe(S), z = e.disabled === !0;
  xe(() => {
    B.current = S;
  }, [S]), xe(() => {
    if (e.type !== "select" || e.multiple || e["no-option"] !== "false" || t.values[D] || E.length === 0) return;
    const U = E[0]?.value;
    U != null && t.setFieldValue(D, U, !1);
  }, [E]), xe(() => {
    o && x(at(e, o));
  }, [o]), xe(() => {
    window.formAPI = {
      setValue: (O, U) => {
        t.setFieldValue(O, U);
      },
      getValue: (O) => t.values[O],
      setValues: (O) => {
        Object.entries(O).forEach(([U, F]) => {
          t.setFieldValue(U, F);
        });
      },
      getValues: () => t.values
    }, window.setFieldValue = (O, U) => {
      t.setFieldValue(O, U);
    };
  }, [t]), xe(() => {
    if (!H) return;
    const O = (U) => {
      const F = U.target;
      L.current?.contains(F) || P.current?.contains(F) || (_(!1), h(""));
    };
    return document.addEventListener("mousedown", O), () => {
      document.removeEventListener("mousedown", O);
    };
  }, [H]);
  const D = e.name;
  xe(() => {
    let O = !0;
    return (async () => {
      try {
        let F = e.valueKey ?? "value", $ = e.labelKey ?? "title";
        const re = e?.source ?? {};
        if (e.type === "dataMethod") {
          const M = e.method, K = M ? r[M] : void 0;
          if (K)
            try {
              const Z = await K(), le = Array.isArray(Z.data?.results?.options) ? Z.data?.results?.options : Array.isArray(Z?.data?.data) ? Z.data.data : Array.isArray(Z.data?.results) ? Z.data?.results : Array.isArray(Z?.data) ? Z.data : Z, fe = Array.isArray(le) ? le.map(Ke) : [], ve = dt(F, $, fe, e.groupKey);
              O && x(at(e, ve));
              return;
            } catch (Z) {
              console.error("Method execution failed:", Z), O && x([]);
              return;
            }
          else {
            O && x([]);
            return;
          }
        }
        if (re.type === "api" && re.endpoint)
          try {
            let M = {};
            if (re.refid && (M.refid = re.refid), e.parameter) {
              const Ce = wu({ field: e, formValues: t.values, parentData: f });
              M = { ...M, ...Ce };
            }
            const K = {
              method: re.method || "GET",
              url: n?.baseURL + re.endpoint,
              headers: {
                Authorization: `Bearer ${n?.accessToken}`
              },
              ...re.method === "GET" ? { params: { refid: re.refid } } : { data: M }
            }, Z = await Q(K), le = Array.isArray(Z.data?.results?.options) ? Z.data?.results?.options : Array.isArray(Z?.data?.data) ? Z.data.data : Array.isArray(Z.data?.results) ? Z.data?.results : Array.isArray(Z?.data) ? Z.data : Z, fe = Array.isArray(le) ? le.map(Ke) : [], ve = dt(F, $, fe, e.groupKey);
            O && x(at(e, ve));
            return;
          } catch (M) {
            console.error("API execution failed:", M), O && x([]);
            return;
          }
        if (e.table || e.type === "dataSelector" || e.queryid) {
          if (!n) {
            console.error("SQL source requires formJson.endPoints but it is missing");
            return;
          }
          try {
            let M;
            if (e.type === "dataSelector")
              M = {
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
              M = {
                table: e.table,
                cols: e.columns,
                where: e.where ? a ? Ue(e.where, { refid: a }) : e.where : void 0
              };
            }
            const K = await Ht(n, M, e?.queryid, void 0, s), Z = Array.isArray(K?.data?.data) ? K.data.data : Array.isArray(K?.data) ? K.data : K, le = Array.isArray(Z) ? Z.map(Ke) : [], fe = dt(F, $, le, e.groupKey);
            O && x(at(e, fe));
          } catch (M) {
            console.error("API fetch failed:", M);
          }
        }
      } catch (F) {
        console.log(F);
      } finally {
        O && d && v(!1);
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
    a,
    e.queryid,
    e.groupKey,
    e.valueKey,
    e.labelKey,
    w,
    f
  ]);
  const N = `
  w-full px-4 py-2 rounded-lg border transition-all duration-300
  backdrop-blur-sm text-gray-800 placeholder-gray-400
  focus:outline-none focus:ring-0

  ${z ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:shadow-md"}
`, ye = `
    border-gradient-to-r 
    focus:border-gray-400 focus:shadow-lg focus:shadow-gray-100/50
  `, ge = `
    block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700
  `, oe = qt(
    () => Cu(E),
    [E]
  ), Se = qt(() => {
    if (!e.type || !["suggest", "autosuggest", "autocomplete"].includes(e.type) || !S.trim()) return null;
    const O = S.trim().toLowerCase();
    return oe.find(([, U]) => U.trim().toLowerCase() === O);
  }, [e.type, S, oe]), C = oe.length, V = !!(e.search && (e.queryid || e.table)), X = qt(() => V || !S ? oe : oe.filter(
    ([, O]) => O.toLowerCase().includes(S.toLowerCase())
  ), [V, S, oe]), te = (O, U) => {
    if (H)
      if (O.key === "ArrowDown")
        O.preventDefault(), R(
          (F) => F + 1 < X.length ? F + 1 : 0
        );
      else if (O.key === "ArrowUp")
        O.preventDefault(), R(
          (F) => F - 1 >= 0 ? F - 1 : X.length - 1
        );
      else if (O.key === "Enter") {
        O.preventDefault();
        const [F] = X[T] || [];
        if (F) {
          let $ = U ? F : [...t.values[e.name], F];
          t.setFieldValue(e.name, $), St($, e, s);
        }
        _(!1);
      } else O.key === "Escape" && (h(""), _(!1));
  };
  xe(() => {
    P.current?.querySelector(
      `[data-index="${T}"]`
    )?.scrollIntoView({ block: "nearest" });
  }, [T]), xe(() => {
    T >= X.length && R(0);
  }, [X, T]), xe(() => {
    const O = e.autocomplete, U = e.ajaxchain;
    if (!O && !U) return;
    const F = t.values[e.name];
    if (!F) return;
    const $ = Array.isArray(U) ? U : U ? [U] : [];
    (async () => {
      try {
        if (_u(O)) {
          const M = O.src;
          if (!M || !n) return;
          let K;
          if ("type" in M && M.type === "api") {
            let le = e.name;
            typeof e.parameter == "string" && e.parameter && (le = e.parameter);
            const fe = { [le]: F, refid: F };
            if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
              for (const [ot, A] of Object.entries(e.parameter))
                fe[ot] = ot === le ? F : t.values?.[A];
            const ve = {
              method: M.method || "GET",
              url: n?.baseURL + M.endpoint,
              headers: {
                Authorization: `Bearer ${n?.accessToken}`
              },
              ...M.method === "GET" ? { params: fe } : { data: fe }
            }, Ce = await Q(ve);
            K = ku(Ce);
          } else {
            let le;
            if (!M.queryid) {
              if (!M.table || !M.columns)
                throw new Error("SQL query requires field.table");
              const ve = Ue(M?.where ?? {}, {
                refid: F
              });
              le = {
                ...M,
                table: M.table,
                cols: M.columns,
                where: ve
              };
            }
            const { data: fe } = await Ht(n, le, M?.queryid, F, s);
            K = Array.isArray(fe?.data?.data) ? fe.data.data[0] : Array.isArray(fe?.data) ? fe.data[0] : fe?.data;
          }
          let Z = Ke(K);
          Z && O.target.split(",").map((le) => le.trim()).forEach((le) => {
            Z[le] !== void 0 && t.setFieldValue(le, Z[le]);
          });
        }
        for (const M of $) {
          c?.(M.target, !0);
          const K = M.src;
          if (!M || typeof M != "object" || !K || typeof K != "object" || !n) continue;
          let Z;
          if ("type" in K && K.type === "api") {
            let A = e.name;
            typeof e.parameter == "string" && e.parameter && (A = e.parameter);
            let k = { [A]: F, refid: F };
            if (typeof e.parameter == "object" && e.parameter !== null && Object.keys(e.parameter).length > 0)
              for (const [q, J] of Object.entries(e.parameter))
                k[q] = q === A ? F : t.values?.[J];
            const G = {
              method: K.method || "GET",
              url: n?.baseURL + K.endpoint,
              headers: {
                Authorization: `Bearer ${n?.accessToken}`
              },
              ...K.method === "GET" ? { params: k } : { data: k }
            };
            try {
              const { data: q } = await Q(G);
              Z = q;
            } catch {
            } finally {
              c?.(M.target, !1);
            }
          } else {
            let A;
            if (!K.queryid) {
              if (!K.table || !K.columns)
                throw new Error("SQL query requires field.table");
              const k = Ue(K?.where ?? {}, {
                refid: F
              });
              A = {
                ...K,
                table: K.table,
                cols: K.columns,
                where: k
              };
            }
            try {
              const { data: k } = await Ht(n, A, K?.queryid, F, s);
              Z = k;
            } catch {
            } finally {
              c?.(M.target, !1);
            }
          }
          let le = e.valueKey ?? "value", fe = e.labelKey ?? "title";
          const ve = Array.isArray(Z?.results?.options) ? Z?.results?.options : Array.isArray(Z.data) ? Z.data : Array.isArray(Z.results) ? Z.results : Z, Ce = Array.isArray(ve) ? ve.map(Ke) : [], ot = dt(
            le,
            fe,
            Ce,
            e.groupKey
          );
          t.setFieldValue(M.target, t.initialValues[M.target]), l?.(M.target, ot);
        }
      } catch (M) {
        console.error("Autocomplete / AjaxChain fetch failed", M);
      }
    })();
  }, [t.values[e.name]]), xe(() => {
    if (!V || !S.trim() || !n) return;
    const O = ju(e.columns ?? ""), U = new AbortController(), F = setTimeout(async () => {
      try {
        v(!0);
        let $;
        if (!e.queryid) {
          if (!e.table || !e.cols)
            throw new Error("SQL query requires field.table");
          const Ce = a ? Ue(e.where ?? {}, {
            refid: a
          }) : e.where;
          $ = {
            ...e,
            table: e.table,
            cols: e.columns || e.cols,
            where: Ce
          };
        }
        let re = {};
        Array.isArray(O) && O.forEach((Ce) => {
          re[Ce] = [S, "LIKE"];
        });
        let M = e.valueKey ?? "value", K = e.labelKey ?? "title";
        const { data: Z } = await Ht(n, $, e?.queryid, void 0, s, re), le = Array.isArray(Z?.data?.data) ? Z.data.data : Array.isArray(Z?.data) ? Z.data : Z, fe = Array.isArray(le) ? le.map(Ke) : [], ve = dt(
          M,
          K,
          fe,
          e.groupKey
        );
        x(at(e, ve));
      } catch ($) {
        if (Q.isCancel($)) return;
        console.error("Search fetch failed", $);
      } finally {
        v(!1);
      }
    }, 500);
    return () => {
      clearTimeout(F), U.abort();
    };
  }, [V, S, a]);
  const we = async (O) => {
    if (O.length === 0) {
      console.error("No file");
      return;
    }
    try {
      v(!0);
      const U = await Wo(n, O), F = qo({
        uploads: U,
        currentValue: t.values[D],
        multiple: e.multiple ?? !1
      });
      t.setFieldValue(
        D,
        F
      ), St(F, e, s);
    } catch (U) {
      console.error("File upload failed", U), t.setFieldError(D, "File upload failed");
    } finally {
      v(!1);
    }
  }, ee = async (O) => {
    const U = Array.isArray(t.values[D]) ? t.values[D] : [], F = O.split("&")[0];
    if (!F) return;
    const $ = U.filter((re) => re.split("&")[0] !== F);
    t.setFieldValue(D, $);
    try {
      await Ko(n, F), St($, e, s);
    } catch (re) {
      console.log(re), t.setFieldValue(D, U), window.alert("Failed to delete file due to a technical issue. Please try again.");
    }
  }, Ae = async (O, U, F) => {
    const $ = U[O];
    if (!$) return;
    const re = r?.[$];
    if (typeof re != "function") {
      console.error(`Method "${String($)}" not found`);
      return;
    }
    try {
      await Promise.resolve(re(F));
    } catch (M) {
      console.error(`Method "${String($)}" failed`, M);
    }
  };
  return {
    setHighlightedIndex: R,
    executeFieldMethod: Ae,
    handleFileUpload: we,
    handleKeyDown: te,
    setSearch: h,
    setOpen: _,
    setIsFocused: y,
    handleInputChange: (O) => {
      if (z) return;
      const U = O.target.value;
      h(U), R(0), U.trim() ? _(!0) : (_(!1), t.setFieldValue(D, ""));
    },
    handleSelect: (O) => {
      t.setFieldValue(D, O), St(O, e, s), h(""), _(!1), Ae("onChange", e, `${D}-${O}`);
    },
    handlePersist: St,
    setLoading: v,
    removeFile: ee,
    optionCount: C,
    baseInputClasses: N,
    focusClasses: ye,
    labelClasses: ge,
    search: S,
    highlightedIndex: T,
    options: E,
    isDisabled: z,
    key: D,
    filteredOptions: X,
    open: H,
    listRef: P,
    isFocused: p,
    exactMatch: Se,
    triggerRef: L,
    loading: g,
    refreshOptions: () => m((O) => O + 1)
  };
}
function ya({
  anchorRef: e,
  open: t,
  children: r,
  offset: n = 4,
  maxHeight: a = 240
}) {
  const [s, o] = Ne({}), l = Pe(null);
  return Xs(() => {
    if (!t || !e.current || !l.current) return;
    const u = e.current, c = () => {
      const d = u.getBoundingClientRect(), p = window.innerHeight, y = l.current?.offsetHeight || a, g = p - d.bottom, v = d.top, x = g < y && v > g ? d.top - y - n : d.bottom + n;
      o({
        position: "fixed",
        top: x,
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
  }, [t, e, n, a]), t ? Di(
    /* @__PURE__ */ i.jsx("div", { ref: l, style: s, children: r }),
    document.body
  ) : null;
}
function Hs({
  field: e,
  isDisabled: t,
  handleKeyDown: r,
  labelClasses: n,
  listRef: a,
  search: s,
  filteredOptions: o,
  highlightedIndex: l,
  setSearch: u,
  formik: c,
  executeFieldMethod: f,
  handlePersist: d,
  module_refid: p,
  options: y,
  triggerRef: g,
  open: v,
  setOpen: E,
  loading: x
}) {
  const w = e.name;
  return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ i.jsx(
      "input",
      {
        type: "hidden",
        name: w,
        value: JSON.stringify(c.values[w] ?? "")
      }
    ),
    /* @__PURE__ */ i.jsxs("label", { className: n, children: [
      e.label,
      e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        id: w,
        className: `
        relative w-full select-none border rounded-lg px-4 py-2.5 flex justify-between items-center
        ${t ? "opacity-70 bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 cursor-pointer"}
      `,
        ref: g,
        tabIndex: 0,
        onClick: () => {
          t || E((m) => !m);
        },
        onKeyDown: (m) => {
          t || r(m, !0);
        },
        children: [
          /* @__PURE__ */ i.jsx("span", { className: "text-sm text-gray-700", children: c.values[w] ? Kr(y, c.values[w]) ?? "Select option" : `Select ${e.label}` }),
          x ? /* @__PURE__ */ i.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) : /* @__PURE__ */ i.jsx(
            "svg",
            {
              className: "w-4 h-4 text-gray-500",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ i.jsx(
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
    /* @__PURE__ */ i.jsx(ya, { anchorRef: g, open: v, children: /* @__PURE__ */ i.jsxs(
      "div",
      {
        ref: a,
        className: " w-full border border-gray-200 rounded-lg bg-white shadow-md  max-h-60 overflow-y-auto p-2",
        children: [
          e.search && /* @__PURE__ */ i.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "text",
              value: s,
              onChange: (m) => {
                u(m.target.value);
              },
              onKeyDown: (m) => r(m, !0),
              placeholder: "Search...",
              className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                      bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                      focus:outline-none focus:ring-0`
            }
          ) }),
          o.length > 0 && /* @__PURE__ */ i.jsx(
            "div",
            {
              onClick: (m) => {
                m.preventDefault(), m.stopPropagation(), c.setFieldValue(w, ""), E(!1), d("", e, p), u("");
              },
              className: "px-2 py-1 hover:bg-gray-50 text-gray-500 rounded cursor-pointer text-sm hover:bg-gray-50",
              children: "Clear selection"
            }
          ),
          o.length > 0 ? o.map(([m, S], h) => /* @__PURE__ */ i.jsx(
            "div",
            {
              id: `${w}-${m}`,
              "data-index": h,
              onClick: (T) => {
                T.preventDefault(), T.stopPropagation(), c.setFieldValue(w, m), d(m, e, p), E(!1), u(""), f("onChange", e, `${w}-${m}`);
              },
              className: `px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm 
                            ${c.values[w] === m ? "bg-indigo-50 text-indigo-600 font-medium" : l === h ? "bg-gray-100" : "hover:bg-gray-50"}`,
              children: S
            },
            m
          )) : /* @__PURE__ */ i.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
        ]
      }
    ) }),
    c.touched[w] && c.errors[w] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(c.errors[w]) })
  ] });
}
function Gs({
  field: e,
  isDisabled: t,
  handleKeyDown: r,
  valueArray: n,
  labelClasses: a,
  listRef: s,
  search: o,
  filteredOptions: l,
  highlightedIndex: u,
  setSearch: c,
  formik: f,
  executeFieldMethod: d,
  handlePersist: p,
  module_refid: y,
  options: g,
  triggerRef: v,
  open: E,
  setOpen: x,
  loading: w
}) {
  const m = e.name, S = g.map((T) => T.value), h = S.every((T) => n.includes(T));
  return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ i.jsx(
      "input",
      {
        type: "hidden",
        name: m,
        value: JSON.stringify(n ?? [])
      }
    ),
    /* @__PURE__ */ i.jsxs("label", { className: a, children: [
      e.label,
      e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        id: m,
        className: `
    relative w-full select-none border rounded-lg px-4 py-2.5 flex justify-between items-center
    ${t ? " opacity-70 bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : "bg-white border-gray-300 cursor-pointer"}
  `,
        tabIndex: 0,
        ref: v,
        onClick: () => {
          t || x((T) => !T);
        },
        onKeyDown: (T) => {
          t || r(T, !1);
        },
        children: [
          /* @__PURE__ */ i.jsx("span", { className: "text-sm text-gray-700", children: n?.length > 0 ? n.map((T) => Kr(g, T) ?? T).join(", ") : `Select ${e.label}` }),
          w ? /* @__PURE__ */ i.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) : /* @__PURE__ */ i.jsx(
            "svg",
            {
              className: "w-4 h-4 text-gray-500",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ i.jsx(
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
    /* @__PURE__ */ i.jsx(ya, { anchorRef: v, open: E && !t, children: /* @__PURE__ */ i.jsxs("div", { ref: s, className: " w-full border border-gray-200 rounded-lg bg-white shadow-md  max-h-60 overflow-y-auto p-2", children: [
      e.search && /* @__PURE__ */ i.jsx("div", { className: "sticky top-0 bg-white p-1", children: /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "text",
          value: o,
          onChange: (T) => {
            t || c(T.target.value);
          },
          placeholder: "Search...",
          className: `px-2 py-[5px] rounded w-full border border-gray-200 transition-all duration-300 
                bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-0`
        }
      ) }),
      /* @__PURE__ */ i.jsxs(
        "label",
        {
          className: "flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm font-medium border-b mb-1",
          children: [
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "checkbox",
                checked: h,
                onChange: (T) => {
                  const R = T.target.checked ? S : [];
                  f.setFieldValue(m, R), p(R, e, y), d("onChange", e, m);
                },
                disabled: t,
                className: "h-4 w-4 text-indigo-600 border-gray-300 rounded"
              }
            ),
            "Select All"
          ]
        }
      ),
      l.length > 0 ? l.map(([T, R], P) => /* @__PURE__ */ i.jsxs(
        "label",
        {
          htmlFor: `${m}-${T}`,
          className: `flex items-center gap-x-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer text-sm
                        ${n?.includes(T) ? "bg-indigo-50 text-indigo-600 font-medium" : u === P ? "bg-gray-100" : "hover:bg-gray-50"}`,
          children: [
            /* @__PURE__ */ i.jsx(
              "input",
              {
                id: `${m}-${T}`,
                type: "checkbox",
                checked: n?.includes(T),
                onChange: (L) => {
                  const H = L.target.checked ? Array.from(/* @__PURE__ */ new Set([...n, T])) : n?.filter((_) => _ !== T);
                  f.setFieldValue(m, H), p(H, e, y), d("onChange", e, `${m}-${T}`);
                },
                onBlur: f.handleBlur,
                disabled: t,
                className: "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              }
            ),
            R
          ]
        },
        T
      )) : /* @__PURE__ */ i.jsx("div", { className: "px-2 py-1 text-gray-400 text-sm", children: "No results" })
    ] }) }),
    f.touched[m] && f.errors[m] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(f.errors[m]) })
  ] });
}
function um({
  formik: e,
  field: t,
  sqlOpsUrls: r,
  module_refid: n
}) {
  let a = t?.name;
  const s = Pe(null), o = t.max !== void 0 ? Number(t.max) : 1 / 0, [l, u] = Ne(!1), c = Array.isArray(e.values[a]) ? e.values[a] : e.values[a] ? [e.values[a]] : [], f = async (g) => {
    const v = g.currentTarget.files;
    if (!v?.length) return;
    const E = Array.from(g.currentTarget.files || []);
    if (c.length + E.length > o) {
      alert(`You can upload maximum ${o} file(s)`), g.currentTarget.value = "";
      return;
    }
    try {
      u(!0);
      const w = await Wo(r, v), m = qo({
        uploads: w,
        currentValue: e.values[a],
        multiple: t.multiple ?? !1
      });
      e.setFieldValue(
        a,
        m
      ), St(m, t, n), g.target.value = "";
    } catch (w) {
      console.error("File upload failed", w), e.setFieldError(a, "File upload failed");
    } finally {
      u(!1);
    }
  }, d = async (g) => {
    const v = Array.isArray(e.values[a]) ? e.values[a] : [], E = g.split("&")[0];
    if (!E) return;
    const x = v.filter((w) => w.split("&")[0] !== E);
    e.setFieldValue(a, x);
    try {
      if (!g.split("&")[0]) return;
      await Ko(r, E), St(x, t, n);
    } catch {
      e.setFieldValue(a, v), window.alert("Failed to delete file due to a technical issue. Please try again.");
    }
  }, p = Du(t), y = t.multiple === !0;
  return /* @__PURE__ */ i.jsxs("div", { children: [
    /* @__PURE__ */ i.jsxs("label", { className: "block text-sm font-semibold mb-1  transition-all duration-300 text-gray-700", children: [
      t.label,
      t.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ i.jsx(
      "input",
      {
        ref: s,
        type: "file",
        className: "hidden",
        multiple: y,
        ...p,
        onChange: f
      }
    ),
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "flex flex-wrap gap-2",
        children: [
          c.length > 0 ? c.map((g) => /* @__PURE__ */ i.jsxs("div", { className: "relative group", children: [
            /* @__PURE__ */ i.jsx(
              Yo,
              {
                field_name: g,
                filePath: g,
                sqlOpsUrls: r
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  d(g);
                },
                className: "absolute -top-2 -right-2 cursor-pointer bg-white text-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xl cursor-pointer transition",
                children: "×"
              }
            )
          ] }, g)) : null,
          /* @__PURE__ */ i.jsx(
            "div",
            {
              onClick: () => {
                l || s.current?.click();
              },
              className: "w-24 h-24 flex items-center justify-center border border-dashed rounded-md bg-gray-50 hover:bg-gray-100 cursor-pointer",
              children: l ? /* @__PURE__ */ i.jsx("i", { className: "fa-solid fa-spinner fa-spin text-2xl text-gray-900" }) : /* @__PURE__ */ i.jsx("i", { className: `fa-solid ${Lu(t)} text-2xl text-gray-400` })
            }
          )
        ]
      }
    ),
    e.touched[a] && e.errors[a] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500", children: String(e.errors[a]) })
  ] });
}
function dm({
  field: e,
  formik: t,
  methods: r = {},
  sqlOpsUrls: n,
  refid: a,
  module_refid: s = "menuManager.main",
  optionsOverride: o,
  setFieldOptions: l,
  chainMap: u,
  fieldLoading: c,
  setFieldLoading: f,
  AttachmentPopup: d,
  parent_data: p
}) {
  const {
    executeFieldMethod: y,
    handleFileUpload: g,
    handleKeyDown: v,
    setSearch: E,
    setOpen: x,
    setIsFocused: w,
    handleInputChange: m,
    handleSelect: S,
    handlePersist: h,
    setLoading: T,
    removeFile: R,
    baseInputClasses: P,
    focusClasses: L,
    labelClasses: H,
    search: _,
    highlightedIndex: B,
    options: z,
    isDisabled: D,
    key: N,
    filteredOptions: ye,
    open: ge,
    listRef: oe,
    triggerRef: Se,
    isFocused: C,
    exactMatch: V,
    loading: X
  } = cm({
    field: e,
    formik: t,
    methods: r,
    sqlOpsUrls: n,
    refid: a,
    module_refid: s,
    chainMap: u,
    parent_data: p,
    ...f && { setFieldLoading: f },
    ...o && { optionsOverride: o },
    ...l && { setFieldOptions: l }
  }), te = (ee) => ee.icon ? /* @__PURE__ */ i.jsx("i", { className: ee.icon }) : null;
  return (() => {
    switch (e.type) {
      case "suggest":
      case "autosuggest":
      case "autocomplete": {
        const O = t.values[N] ?? "", U = _ !== "" ? _ : Kr(z, O) ?? String(O ?? "");
        return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsxs("label", { className: H, children: [
            e.label,
            e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { ref: Se, className: "relative", children: [
            /* @__PURE__ */ i.jsx(
              "input",
              {
                className: `${P} ${L}`,
                value: U,
                placeholder: e.placeholder || "Type to search...",
                onChange: m,
                onBlur: () => {
                  setTimeout(() => x(!1), 150);
                },
                onKeyDown: (F) => {
                  if (F.key === "Enter") {
                    if (F.preventDefault(), V) {
                      const [$] = V;
                      t.setFieldValue(N, $), h($, e, s);
                    } else _.trim() && (t.setFieldValue(N, _.trim()), h(_.trim(), e, s));
                    x(!1), E("");
                    return;
                  }
                  v(F, !0);
                },
                disabled: D
              }
            ),
            (X || c) && /* @__PURE__ */ i.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ i.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) })
          ] }),
          /* @__PURE__ */ i.jsx(ya, { anchorRef: Se, open: ge && !D, children: /* @__PURE__ */ i.jsx(
            "div",
            {
              ref: oe,
              className: " w-full bg-white border rounded shadow max-h-52 overflow-y-auto",
              children: ye.length > 0 && V ? ye.map(([F, $], re) => /* @__PURE__ */ i.jsx(
                "div",
                {
                  id: `${N}-${F}`,
                  "data-index": re,
                  className: `px-3 py-2 cursor-pointer text-sm
                  ${B === re ? "bg-gray-100" : "hover:bg-gray-100"}`,
                  onMouseDown: () => S(F),
                  children: $
                },
                F
              )) : /* @__PURE__ */ i.jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: `Press "ENTER" to ADD "${U}" ` })
            }
          ) }),
          t.touched[N] && t.errors[N] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[N]) })
        ] });
      }
      case "dataSelector":
      case "dataSelectorFromTable":
      case "dataSelectorFromUniques":
      case "dataMethod": {
        if (e.multiple === !0) {
          const O = t.values[N];
          return /* @__PURE__ */ i.jsx(
            Gs,
            {
              field: e,
              isDisabled: D,
              handleKeyDown: v,
              valueArray: O,
              labelClasses: H,
              listRef: oe,
              search: _,
              filteredOptions: ye,
              highlightedIndex: B,
              setSearch: E,
              formik: t,
              executeFieldMethod: y,
              handlePersist: h,
              module_refid: s,
              options: z,
              triggerRef: Se,
              open: ge,
              setOpen: x,
              loading: X || !!c
            }
          );
        }
        return /* @__PURE__ */ i.jsx(
          Hs,
          {
            field: e,
            isDisabled: D,
            handleKeyDown: v,
            labelClasses: H,
            listRef: oe,
            search: _,
            filteredOptions: ye,
            highlightedIndex: B,
            setSearch: E,
            formik: t,
            executeFieldMethod: y,
            handlePersist: h,
            module_refid: s,
            options: z,
            triggerRef: Se,
            open: ge,
            setOpen: x,
            loading: X || !!c
          }
        );
      }
      case "textarea":
        return /* @__PURE__ */ i.jsx(i.Fragment, { children: /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsxs("label", { className: H, children: [
            e.label,
            e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ i.jsx(
              "textarea",
              {
                id: N,
                className: `${P} ${L} min-h-[120px] resize-none`,
                onFocus: () => w(!0),
                name: N,
                value: t.values[N],
                onBlur: t.handleBlur,
                onChange: (O) => {
                  t.setFieldValue(N, O.target.value), h(O.target.value, e, s), y("onChange", e, `${N}`);
                },
                placeholder: e.placeholder,
                disabled: D
              }
            ),
            /* @__PURE__ */ i.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${C ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
          ] }),
          t.touched[N] && t.errors[N] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[N]) })
        ] }) });
      case "select":
        if (e.multiple === !0) {
          const O = t.values[N];
          return /* @__PURE__ */ i.jsx(
            Gs,
            {
              field: e,
              isDisabled: D,
              handleKeyDown: v,
              valueArray: O,
              labelClasses: H,
              listRef: oe,
              search: _,
              filteredOptions: ye,
              highlightedIndex: B,
              setSearch: E,
              formik: t,
              executeFieldMethod: y,
              handlePersist: h,
              module_refid: s,
              options: z,
              triggerRef: Se,
              open: ge,
              setOpen: x,
              loading: X || !!c
            }
          );
        }
        if (e.search)
          return /* @__PURE__ */ i.jsx(
            Hs,
            {
              field: e,
              isDisabled: D,
              handleKeyDown: v,
              labelClasses: H,
              listRef: oe,
              search: _,
              filteredOptions: ye,
              highlightedIndex: B,
              setSearch: E,
              formik: t,
              executeFieldMethod: y,
              handlePersist: h,
              module_refid: s,
              options: z,
              triggerRef: Se,
              open: ge,
              setOpen: x,
              loading: X || !!c
            }
          );
        const ee = Nu(z);
        return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsxs("label", { className: H, children: [
            e.label,
            e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ i.jsxs(
              "select",
              {
                className: `${P} ${L} appearance-none ${D ? "" : "cursor-pointer"} pr-12`,
                onFocus: () => w(!0),
                name: N,
                id: N,
                value: t.values[N],
                onBlur: t.handleBlur,
                onChange: (O) => {
                  t.setFieldValue(N, O.target.value), h(O.target.value, e, s), y("onChange", e, `${N}`);
                },
                disabled: D,
                children: [
                  e?.["no-option"] !== "false" && !t.values[N] && /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: e?.["no-option"] || `Please select ${e.label}` }),
                  /* @__PURE__ */ i.jsx("option", { value: "", className: "text-gray-500", children: "Clear Selection" }),
                  Object.entries(ee).map(
                    ([O, U]) => O === "__ungrouped__" ? U.map((F) => /* @__PURE__ */ i.jsx("option", { value: F.value, className: "py-2", children: F.label }, F.value)) : /* @__PURE__ */ i.jsx("optgroup", { label: O, children: U.map((F) => /* @__PURE__ */ i.jsx("option", { value: F.value, children: F.label }, F.value)) }, O)
                  )
                ]
              }
            ),
            /* @__PURE__ */ i.jsx("div", { className: "absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none", children: X || c ? /* @__PURE__ */ i.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) : /* @__PURE__ */ i.jsx(
              "svg",
              {
                className: "w-5 h-5 transition-colors duration-300 text-gray-400",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ i.jsx(
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
          t.touched[N] && t.errors[N] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[N]) })
        ] });
      case "radioList":
      case "radio":
        return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsxs("label", { className: H, children: [
            e.label,
            e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ i.jsx("div", { className: `flex ${z.length > 3 ? "flex-col" : ""} gap-2 ml-1`, children: z.map((O) => /* @__PURE__ */ i.jsxs(
            "label",
            {
              htmlFor: `${N}-${O.value}`,
              className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
              children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    id: `${N}-${O.value}`,
                    type: "radio",
                    name: N,
                    checked: t.values[N] === O.value,
                    value: O.value,
                    onChange: (U) => {
                      t.setFieldValue(N, U.target.value), h(U.target.value, e, s), y("onChange", e, `${N}-${O.value}`);
                    },
                    onBlur: t.handleBlur,
                    disabled: D,
                    className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${D ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                  }
                ),
                O.label
              ]
            },
            O.value
          )) }),
          t.touched[N] && t.errors[N] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[N]) })
        ] });
      case "checkbox": {
        const O = e.multiple === !0, U = t.values[N];
        return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsxs("label", { className: H, children: [
            e.label,
            e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ i.jsx("div", { className: "flex flex-col gap-2 ml-1", children: z.map((F) => {
            const $ = O ? Array.isArray(U) && U.includes(F.value) : U === F.value;
            return /* @__PURE__ */ i.jsxs(
              "label",
              {
                className: "flex items-center gap-x-2 text-sm font-medium text-gray-700 cursor-pointer",
                children: [
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      id: `${N}-${F.value}`,
                      type: "checkbox",
                      checked: $,
                      onChange: (re) => {
                        let M;
                        if (O) {
                          const K = Array.isArray(U) ? U : [];
                          M = re.target.checked ? [...K, F.value] : K.filter((Z) => Z !== F.value);
                        } else
                          M = re.target.checked ? F.value : "false";
                        t.setFieldValue(N, M), h(M, e, s), y("onChange", e, `${N}-${F.value}`);
                      },
                      onBlur: t.handleBlur,
                      disabled: D,
                      className: `h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500
                    ${D ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed" : ""}
                    `
                    }
                  ),
                  F.label
                ]
              },
              F.value
            );
          }) }),
          t.touched[N] && t.errors[N] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500 ml-2", children: String(t.errors[N]) })
        ] });
      }
      case "tags": {
        const O = t.values[N] ?? [], U = _.trim(), F = (M) => {
          if (!D && M && !O.includes(M)) {
            let K = [...O, M];
            t.setFieldValue(N, K), h(K, e, s), E("");
          }
        }, $ = (M) => {
          let K = O.filter((Z) => Z !== M);
          t.setFieldValue(
            N,
            K
          ), h(K, e, s);
        }, re = (M) => Kr(z, M) ?? M;
        return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsxs("label", { className: H, children: [
            e.label,
            e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ i.jsxs(
            "div",
            {
              className: `${P} 
            flex flex-wrap gap-2 min-h-[42px] max-h-[120px] overflow-y-auto items-center
            ${D ? "pointer-events-none opacity-70" : ""}
            `,
              onClick: () => !D && document.getElementById(`${N}-input`)?.focus(),
              children: [
                O.map((M) => /* @__PURE__ */ i.jsxs(
                  "span",
                  {
                    className: "flex items-center gap-2 px-2 py-1 rounded-full text-sm bg-indigo-50 border border-indigo-100",
                    children: [
                      /* @__PURE__ */ i.jsx("span", { className: "text-indigo-700", children: re(M) }),
                      /* @__PURE__ */ i.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: (K) => {
                            K.stopPropagation(), D || $(M);
                          },
                          onMouseDown: (K) => K.preventDefault(),
                          className: "ml-1 text-indigo-500 hover:text-red-500 focus:outline-none",
                          children: "×"
                        }
                      )
                    ]
                  },
                  M
                )),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    id: `${N}-input`,
                    type: "text",
                    value: _,
                    onChange: (M) => E(M.target.value),
                    onKeyDown: (M) => {
                      (M.key === "Enter" || M.key === ",") && (M.preventDefault(), F(U));
                    },
                    placeholder: O.length === 0 ? e.placeholder || "Type and press Enter" : "",
                    className: "flex-1 min-w-[120px] border-none outline-none text-sm bg-transparent p-1",
                    disabled: D
                  }
                )
              ]
            }
          ),
          t.touched[N] && t.errors[N] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[N]) })
        ] });
      }
      case "camera":
      case "camera2":
      case "photo":
      case "avatar":
        return /* @__PURE__ */ i.jsx(
          um,
          {
            formik: t,
            field: e,
            sqlOpsUrls: n,
            module_refid: s
          }
        );
      case "attachment":
      case "file":
        const Ae = e.multiple === !0, Re = e.max !== void 0 ? Number(e.max) : 1 / 0, ie = Array.isArray(t.values[N]) ? t.values[N] : t.values[N] ? [t.values[N]] : [];
        return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsxs("label", { className: H, children: [
            e.label,
            e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "relative mb-1", children: [
            e.icon && /* @__PURE__ */ i.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: te(e) }),
            X && /* @__PURE__ */ i.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 z-10", children: /* @__PURE__ */ i.jsx("i", { className: "fa-solid fa-spinner fa-spin text-gray-900" }) }),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                id: N,
                type: "file",
                accept: e.accept,
                className: `${P} ${L} ${e.icon ? "pl-9" : ""} `,
                onFocus: () => w(!0),
                name: N,
                multiple: Ae,
                onChange: (O) => {
                  const U = Ru({
                    e: O,
                    existingFiles: ie,
                    maxFiles: Re,
                    maxFileSize: e.file_size
                  });
                  U && (U && g(U), y("onChange", e, N), O.currentTarget.value = "");
                },
                onBlur: t.handleBlur,
                placeholder: e.placeholder,
                disabled: D
              }
            ),
            /* @__PURE__ */ i.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${C ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
          ] }),
          /* @__PURE__ */ i.jsx("div", { className: "flex flex-wrap gap-2", children: ie.map((O) => /* @__PURE__ */ i.jsxs("div", { className: "relative group", children: [
            d && /* @__PURE__ */ i.jsx(d, { url: O }),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                onClick: () => R(O),
                className: "absolute -top-2 -right-2 bg-white text-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xl cursor-pointer transition",
                children: "×"
              }
            )
          ] }, O)) }),
          t.touched[N] && t.errors[N] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[N]) })
        ] });
      case "json":
        return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsxs("label", { className: H, children: [
            e.label,
            e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ i.jsx(
              "textarea",
              {
                id: N,
                name: N,
                value: t.values[N],
                onChange: (O) => {
                  t.setFieldValue(N, O.target.value), h(O.target.value, e, s), y("onChange", e, `${N}`);
                },
                onBlur: t.handleBlur,
                placeholder: e.placeholder || "Enter valid JSON",
                disabled: D,
                className: `${P} ${L} min-h-[200px] font-mono text-sm resize-y`
              }
            ),
            /* @__PURE__ */ i.jsx(
              "div",
              {
                className: `absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity duration-300 pointer-events-none ${C ? "opacity-20" : ""}`,
                style: { zIndex: -1, filter: "blur(8px)" }
              }
            )
          ] }),
          t.touched[N] && t.errors[N] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[N]) })
        ] });
      case "date": {
        const O = Mu(e.max);
        return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsxs("label", { className: H, children: [
            e.label,
            e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ i.jsxs(
            "div",
            {
              className: "relative",
              children: [
                /* @__PURE__ */ i.jsx("div", { className: "absolute z-10 right-3 top-1/2 -translate-y-1/2 pointer-events-none", children: /* @__PURE__ */ i.jsx("i", { className: "fa-solid fa-calendar" }) }),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    id: N,
                    type: "date",
                    name: N,
                    min: e.min,
                    max: O,
                    value: t.values[N] ?? "",
                    onChange: (U) => {
                      t.setFieldValue(N, U.target.value), h(U.target.value, e, s), y("onChange", e, `${N}`);
                    },
                    onBlur: t.handleBlur,
                    placeholder: e.placeholder,
                    disabled: D,
                    className: `${P} ${L} ${e.icon ? "pl-9" : ""}`
                  }
                ),
                /* @__PURE__ */ i.jsx(
                  "div",
                  {
                    className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${C ? "opacity-20" : ""}`,
                    style: { zIndex: -1, filter: "blur(8px)" }
                  }
                )
              ]
            }
          ),
          t.touched[N] && t.errors[N] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[N]) })
        ] });
      }
      case "geolocation": {
        const O = t.values[N] || "", U = async () => {
          try {
            const { latitude: F, longitude: $ } = await Yn(), re = `${F},${$}`;
            t.setFieldValue(N, re), h(re, e, s);
          } catch (F) {
            console.error(F), t.setFieldError(N, "Failed to fetch location");
          } finally {
            T(!1);
          }
        };
        return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsxs("label", { className: H, children: [
            e.label,
            e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "text",
                value: O,
                readOnly: !0,
                className: `${P} ${L}`,
                placeholder: "Click to fetch location"
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                onClick: U,
                disabled: X,
                className: "absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 disabled:opacity-50",
                children: X ? /* @__PURE__ */ i.jsx("i", { className: "fa-solid fa-spinner fa-spin text-red-900" }) : /* @__PURE__ */ i.jsx("i", { className: "fa-solid fa-location-dot text-red-600 hover:text-red-700" })
              }
            )
          ] }),
          t.touched[N] && t.errors[N] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[N]) })
        ] });
      }
      case "altitude": {
        const O = t.values[N] || "", U = async () => {
          try {
            T(!0);
            const { altitude: F } = await Yn();
            t.setFieldValue(N, F), h(F, e, s);
          } catch (F) {
            console.error(F), t.setFieldError(
              N,
              "Failed to fetch altitude"
            );
          } finally {
            T(!1);
          }
        };
        return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsxs("label", { className: H, children: [
            e.label,
            e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "text",
                value: O,
                readOnly: !0,
                className: `${P} ${L}`,
                placeholder: "Click to fetch altitude"
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                onClick: U,
                disabled: X,
                className: "absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 disabled:opacity-50",
                children: X ? /* @__PURE__ */ i.jsx("i", { className: "fa-solid fa-spinner fa-spin text-red-900" }) : /* @__PURE__ */ i.jsx("i", { className: "fa-solid fa-mountain text-blue-600 hover:text-blue-700" })
              }
            )
          ] }),
          t.touched[N] && t.errors[N] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[N]) })
        ] });
      }
      case "number":
        return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsxs("label", { className: H, children: [
            e.label,
            e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
            e.icon && /* @__PURE__ */ i.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: te(e) }),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                id: N,
                type: "number",
                className: `${P} ${L} ${e.icon ? "pl-9" : ""} `,
                onFocus: () => w(!0),
                name: N,
                value: t.values[N],
                onBlur: t.handleBlur,
                onChange: (O) => {
                  t.setFieldValue(N, O.target.value), h(O.target.value, e, s), y("onChange", e, `${N}`);
                },
                step: e.step,
                placeholder: e.placeholder,
                disabled: D,
                min: e.min,
                max: e.max
              }
            ),
            /* @__PURE__ */ i.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${C ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
          ] }),
          t.touched[N] && t.errors[N] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[N]) })
        ] });
      default:
        return /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsxs("label", { className: H, children: [
            e.label,
            e.required && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
            e.icon && /* @__PURE__ */ i.jsx("div", { className: "absolute z-10 left-3 top-1/2 -translate-y-1/2 pointer-events-none", children: te(e) }),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                id: N,
                type: e.type || "text",
                className: `${P} ${L} ${e.icon ? "pl-9" : ""} `,
                onFocus: () => w(!0),
                name: N,
                value: t.values[N],
                onBlur: t.handleBlur,
                onChange: (O) => {
                  t.setFieldValue(N, O.target.value), h(O.target.value, e, s), y("onChange", e, `${N}`);
                },
                step: e.step,
                placeholder: e.placeholder,
                disabled: D,
                minLength: e.minlength,
                maxLength: e.maxlength
              }
            ),
            /* @__PURE__ */ i.jsx("div", { className: `absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 transition-opacity duration-300 pointer-events-none ${C ? "opacity-20" : ""}`, style: { zIndex: -1, filter: "blur(8px)" } })
          ] }),
          t.touched[N] && t.errors[N] && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-red-500", children: String(t.errors[N]) })
        ] });
    }
  })();
}
function fm({
  title: e,
  fields: t,
  data: r,
  onSubmit: n = async (y) => {
  },
  onCancel: a = () => {
  },
  methods: s = {},
  sqlOpsUrls: o,
  refid: l,
  module_refid: u,
  buttons: c,
  button_labels: f,
  AttachmentPopup: d,
  parent_data: p
}) {
  const y = de.useMemo(() => Su(t, o?.operation), [t, o?.operation]), [g, v] = de.useState({}), E = (_, B) => {
    v((z) => ({
      ...z,
      [_]: B
    }));
  }, [x, w] = de.useState({}), m = (_, B) => {
    w((z) => ({
      ...z,
      [_]: B
    }));
  }, { commonFields: S, otherFields: h } = de.useMemo(() => y.reduce(
    (_, B) => (B.group === "common" ? _.commonFields.push(B) : _.otherFields.push(B), _),
    { commonFields: [], otherFields: [] }
  ), [y]), { initialValues: T, validationSchema: R } = de.useMemo(() => {
    console.log("dddd");
    const _ = {}, B = {};
    return y.forEach((z) => {
      Au([z], _, B, r, u, o?.operation);
    }), {
      initialValues: _,
      validationSchema: B
    };
  }, [y, r]), P = de.useMemo(
    () => Eu(y),
    [y]
  ), L = tm({
    initialValues: T,
    enableReinitialize: !0,
    validationSchema: Po().shape(R),
    onSubmit: async (_) => {
      try {
        let B = Tu(_, y);
        const z = await n(B);
        console.log("res", z), L.resetForm();
      } catch (B) {
        console.log("error", B);
      }
    }
  }), H = () => {
    L.resetForm();
  };
  return /* @__PURE__ */ i.jsx(i.Fragment, { children: /* @__PURE__ */ i.jsx("div", { className: "relative max-w-full", children: /* @__PURE__ */ i.jsx("div", { className: "bg-white border border-gray-100 rounded-md animate-in fade-in duration-300 overflow-visible", children: /* @__PURE__ */ i.jsxs("form", { onSubmit: L.handleSubmit, className: "p-4  mx-auto", children: [
    /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-12 gap-4", children: h.map((_) => {
      const B = nn(_.hidden), z = `col-span-12 md:col-span-6
    ${Xt[Zt(Number(_.width))] || "lg:col-span-4"}
    ${B ? "hidden" : ""}
  `;
      if (_.type === "static" || _.type === "static2") {
        const D = _.type === "static";
        return /* @__PURE__ */ i.jsx(
          "div",
          {
            id: `wrapper-${_.name}`,
            className: "col-span-12",
            children: /* @__PURE__ */ i.jsx(
              "div",
              {
                className: ` bg-gray-100 ${D ? "mt-4" : "mt-3"}`,
                children: /* @__PURE__ */ i.jsx("div", { className: "flex items-center justify-between px-4 py-3", children: /* @__PURE__ */ i.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ i.jsx(
                  "h2",
                  {
                    className: `${D ? "text-base " : "text-sm"} font-semibold text-gray-800`,
                    children: _.label
                  }
                ) }) })
              }
            )
          },
          _?.name
        );
      }
      return /* @__PURE__ */ i.jsx(
        "div",
        {
          id: `wrapper-${_.name}`,
          className: z,
          children: /* @__PURE__ */ i.jsx(
            dm,
            {
              refid: l,
              module_refid: u,
              sqlOpsUrls: o,
              field: _,
              formik: L,
              methods: s,
              chainMap: P,
              setFieldOptions: E,
              ...g[_.name] ? { optionsOverride: g[_.name] } : {},
              fieldLoading: x[_.name] ?? !1,
              setFieldLoading: m,
              AttachmentPopup: d,
              parent_data: p
            }
          )
        },
        _?.name
      );
    }) }),
    /* @__PURE__ */ i.jsxs("div", { className: "mt-8 flex justify-between space-x-3", children: [
      /* @__PURE__ */ i.jsx("p", { className: "text-sm text-gray-700", children: "All fields marked (*) are required" }),
      /* @__PURE__ */ i.jsxs("div", { className: "space-x-3", children: [
        /* @__PURE__ */ i.jsx("button", { type: "button", onClick: H, className: "px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200  shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: f?.reset || "Reset" }),
        /* @__PURE__ */ i.jsx("button", { type: "submit", className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer", children: f?.submit || "Save" })
      ] })
    ] })
  ] }) }) }) });
}
function qs({
  formJson: e,
  methods: t = {},
  onCancel: r = () => {
  },
  callback: n = () => {
  },
  initialvalues: a,
  setEditData: s,
  toast: o,
  AttachmentPopup: l,
  parent_data: u
}) {
  const c = e.endPoints, f = e?.source?.refid, [d, p] = de.useState(a ?? {}), y = de.useMemo(() => vu(e.fields), [e.fields]);
  de.useEffect(() => {
    let x = !0;
    return (async () => {
      try {
        const { latitude: m, longitude: S, altitude: h } = await Yn(), T = `${m},${S}`;
        x && p((R) => ({
          ...R,
          ...Object.fromEntries(
            y.map((P) => [P, T])
          )
        }));
      } catch (m) {
        console.warn("Geo fetch failed", m);
      }
    })(), () => {
      x = !1;
    };
  }, [y]), de.useEffect(() => {
    p(a ?? {});
  }, [a]);
  const g = de.useCallback(
    (x) => {
      x && p((w) => {
        const m = { ...w };
        for (const S in x)
          x[S] !== null && x[S] !== void 0 && (m[S] = x[S]);
        return m;
      });
    },
    []
  );
  de.useEffect(() => {
    let x = !0;
    return (async () => {
      const m = e?.source ?? {};
      if (m?.type && c?.operation !== "create") {
        if (m.type === "method") {
          const S = m.method, h = S ? t[S] : void 0;
          if (h)
            try {
              const T = await h();
              x && g(T);
            } catch (T) {
              console.error("Method execution failed:", T);
            }
        }
        if (m.type === "api")
          try {
            const S = {
              method: m.method || "GET",
              url: c?.baseURL + m.endpoint,
              headers: {
                Authorization: `Bearer ${c?.accessToken}`
              },
              ...m.method === "GET" ? { params: { refid: m.refid } } : { data: { refid: m.refid } }
            }, h = await Q(S);
            x && g(h.data);
          } catch (S) {
            console.error("API fetch failed:", S);
          }
        if (m.type === "sql" && m.refid && m.refid !== "0" || m.dbopsid) {
          if (!c) {
            console.error("SQL source requires formJson.endPoints but it is missing");
            return;
          }
          try {
            const S = await zu.fetch(c, {
              source: {
                ...m,
                table: m.table,
                columns: m.columns,
                where: Ue(m.where, {
                  refid: f
                })
              },
              fields: Wr(e.fields, c.operation)
            }, m?.dbopsid, e?.module_refid);
            x && g(S);
          } catch (S) {
            console.error("API fetch failed:", S);
          }
        }
      }
    })(), () => {
      x = !1;
    };
  }, [
    c,
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.endpoint || ""
  ]);
  const v = async (x) => {
    const w = e?.source ?? {};
    let m = { ...x }, S = "0,0";
    if (y.length > 0) {
      const h = y[0];
      S = (h ? x[h] : null) || "0,0";
      const R = y.filter((P) => !x[P]);
      if (R.length > 0)
        try {
          m = {
            ...x,
            ...Object.fromEntries(
              R.map((P) => [P, S])
            )
          };
        } catch {
          console.warn("Geo fetch failed");
        }
    }
    if (w.type === "method") {
      const h = w.method, T = h ? t[h] : void 0;
      if (T)
        try {
          let R = m ? { ...m, geolocation: S } : {};
          const P = await T(R);
          s?.(null), n?.(P);
          const L = Nn(P, e?.submit_msg);
          L && o?.success?.(L);
        } catch (R) {
          n?.(R), o?.error?.(jn(R)), console.error("Method execution failed:", R);
        }
    }
    if (w.type === "api") {
      if (!c) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        const h = await Q({
          method: w.method || "POST",
          url: c.baseURL + w.endpoint,
          data: m ? { ...m, geolocation: S } : {},
          headers: {
            Authorization: `Bearer ${c?.accessToken}`
          }
        });
        s?.(null), n?.(h);
        const T = Nn(h, e?.submit_msg);
        T && o?.success?.(T);
      } catch (h) {
        n?.(h), o?.error?.(jn(h)), console.error("API fetch failed:", h);
      }
    }
    if (w.type === "sql") {
      const h = e.endPoints;
      if (!h) {
        console.error("SQL source requires formJson.endPoints but it is missing");
        return;
      }
      try {
        let T = !1, R;
        w?.dbopsid && (T = !0, R = w?.dbopsid);
        const P = await Q({
          method: "GET",
          url: h.baseURL + h.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${h?.accessToken}`
          }
        });
        if (!T) {
          let B = {
            ...w
          };
          w.where && (B = {
            ...w,
            where: Ue(w.where, {
              refid: f
            })
          }), R = (await Q({
            method: "POST",
            url: h.baseURL + h.dbopsGetRefId,
            data: {
              operation: h.operation,
              source: B,
              fields: Wr(e.fields, h.operation),
              forcefill: e.forcefill,
              datahash: P.data.refhash,
              scrid: e?.module_refid
            },
            headers: {
              Authorization: `Bearer ${h?.accessToken}`
            }
          }))?.data.refid;
        }
        let L = {
          refid: R,
          fields: m,
          datahash: P.data.refhash,
          refid1: h.refid,
          geolocation: S
        };
        w?.refid && (L.refid1 = w?.refid);
        const H = await Q({
          method: "POST",
          url: h.baseURL + h[h.operation === "update" ? "dbopsUpdate" : "dbopsCreate"],
          data: L,
          headers: {
            Authorization: `Bearer ${h?.accessToken}`
          }
        }), _ = Nn(H, e?.submit_msg);
        _ && o?.success?.(_), s?.(null), n?.(H);
      } catch (T) {
        n?.(T), o?.error?.(jn(T)), console.error("API fetch failed:", T);
      }
    }
  }, E = {
    simple: /* @__PURE__ */ i.jsx(
      fm,
      {
        title: e?.title ?? "",
        fields: e.fields,
        data: d,
        onSubmit: v,
        onCancel: r,
        methods: t,
        sqlOpsUrls: c,
        refid: f,
        module_refid: e?.module_refid,
        AttachmentPopup: l,
        parent_data: u
      }
    )
  };
  return /* @__PURE__ */ i.jsx("div", { className: "relative", children: E.simple });
}
function ga({
  tabObj: e,
  methods: t,
  tabName: r,
  sqlOpsUrls: n,
  refid: a,
  Reports: s,
  toast: o,
  handleAction: l,
  infoViewJson: u,
  AttachmentPopup: c,
  parent_data: f
}) {
  const [d, p] = Ne(!1), [y, g] = Ne(null), [v, E] = de.useState(0), [x, w] = de.useState(null), m = e?.config, S = e?.config, h = S?.["popup.form"] ? "popup.form" : (S?.form, "form"), T = S?.[h] && Object.keys(S?.[h]).length > 0, R = (B) => {
    let z = Ke(B.data);
    w(z);
  }, P = (B) => {
    w(B), E((z) => z + 1);
  }, L = (B) => {
    let z = Ke(B.data);
    g(z), p(!0);
  }, H = async () => {
    if (y?.id) {
      if (!n) {
        window.alert("Delete configuration missing.");
        return;
      }
      try {
        let B = e?.config;
        const z = B?.["popup.form"] ? "popup.form" : (B?.form, "form"), D = B?.[z];
        if (!D?.source) throw new Error("Form source missing");
        let N = !1, ye;
        D?.source?.dbopsid && (N = !0, ye = D?.source?.dbopsid);
        const ge = await Q({
          method: "GET",
          url: n.baseURL + n.dbopsGetHash,
          headers: {
            Authorization: `Bearer ${n.accessToken}`
          }
        });
        if (!N) {
          let oe = { ...D.source, refid: y.id };
          D.source.where && (oe = {
            ...oe,
            where: Ue(D.source.where, {
              refid: y?.id
            })
          }), ye = (await Q({
            method: "POST",
            url: n.baseURL + n.dbopsGetRefId,
            data: {
              operation: "update",
              source: oe,
              fields: D.fields,
              forcefill: D.forcefill,
              datahash: ge.data.refhash,
              scrid: u?.module_refid
            },
            headers: {
              Authorization: `Bearer ${n?.accessToken}`
            }
          }))?.data.refid;
        }
        await Q({
          method: "POST",
          url: n.baseURL + n.dbopsUpdate,
          data: {
            refid: ye,
            fields: { blocked: "true" },
            datahash: ge.data.refhash,
            refid1: y?.id
          },
          headers: {
            Authorization: `Bearer ${n.accessToken}`
          }
        }), window.alert("Record deleted successfully."), E((oe) => oe + 1);
      } catch (B) {
        console.error(B), window.alert("Failed to delete record. Please try again");
      } finally {
        g(null), p(!1);
      }
    }
  }, _ = () => {
    g(null), p(!1);
  };
  return /* @__PURE__ */ i.jsx(i.Fragment, { children: s ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    m?.datagrid && /* @__PURE__ */ i.jsx(
      s,
      {
        methods: { ...t, deleteRecord: L, editRecord: R },
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
          endPoints: n,
          actions: { ...m?.actions, ...u?.buttons, ...u.actions },
          datagrid: m?.datagrid,
          buttons: m?.buttons,
          refresh: v,
          native: n?.native
        },
        onButtonClick: l
      }
    ),
    T && /* @__PURE__ */ i.jsx(
      qs,
      {
        formJson: {
          ...S[h],
          source: {
            ...S?.[h].source,
            refid: x?.id
          },
          endPoints: {
            ...n,
            operation: x ? "update" : "create"
          },
          module_refid: u?.module_refid
        },
        toast: o,
        methods: t,
        initialvalues: x ?? {},
        setEditData: P,
        AttachmentPopup: c,
        parent_data: f
      }
    ),
    /* @__PURE__ */ i.jsx(
      Hu,
      {
        open: d,
        onConfirm: H,
        onCancel: _
      }
    )
  ] }) : T && /* @__PURE__ */ i.jsx(
    qs,
    {
      formJson: {
        ...S[h],
        source: {
          ...S?.[h].source,
          refid: x?.id
        },
        endPoints: {
          ...n,
          operation: x ? "update" : "create"
        },
        module_refid: u?.module_refid
      },
      toast: o,
      methods: t,
      initialvalues: x ?? {},
      setEditData: P,
      AttachmentPopup: c,
      parent_data: f
    }
  ) });
}
function ba(e, t) {
  if (!e || !t) return null;
  const r = t[e];
  if (de.isValidElement(r))
    return r;
  if (typeof r == "function") {
    const n = r;
    return /* @__PURE__ */ i.jsx(n, {});
  }
  return null;
}
const Ws = ({ groups: e, groupNames: t, setActiveTabIndex: r, activeTabIndex: n }) => /* @__PURE__ */ i.jsx(
  "nav",
  {
    className: "flex flex-col overflow-y-auto h-full px-2 py-1 space-y-1",
    children: t.length > 0 ? t.map((a, s) => /* @__PURE__ */ i.jsx(
      "button",
      {
        type: "button",
        onClick: () => r(s),
        className: `cursor-pointer w-full text-left py-2 px-3 rounded-md text-sm font-semibold transition-all duration-200 ${n === s ? "bg-white shadow text-action" : "text-gray-600 hover:bg-white/50"}`,
        children: /* @__PURE__ */ i.jsx("span", { className: "truncate", children: e[a]?.label || a })
      },
      a
    )) : /* @__PURE__ */ i.jsx("div", { className: "py-3 px-2 text-sm text-gray-500", children: "No group available" })
  }
), hm = ({
  groups: e,
  groupNames: t,
  setActiveTabIndex: r,
  activeTabIndex: n,
  layoutConfig: a,
  showScrollHint: s,
  isCommonInfo: o,
  tabsNavRef: l
}) => {
  const [u, c] = Ne(!1), f = Pe(null);
  return xe(() => {
    const d = (p) => {
      f.current && !f.current.contains(p.target) && c(!1);
    };
    return document.addEventListener("mousedown", d), () => document.removeEventListener("mousedown", d);
  }, []), /* @__PURE__ */ i.jsxs("div", { className: a?.tabNavClass || "relative z-10", children: [
    s && /* @__PURE__ */ i.jsx("div", { className: "absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 flex items-center justify-center", children: /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => l.current?.scrollBy({ left: -200, behavior: "smooth" }),
        className: "w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group",
        children: /* @__PURE__ */ i.jsx("svg", { className: "w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
      }
    ) }),
    /* @__PURE__ */ i.jsxs("div", { className: "absolute right-0 top-1/2 -translate-y-1/2 z-20 w-18 flex items-center justify-between pr-1", children: [
      s && /* @__PURE__ */ i.jsx(
        "button",
        {
          onClick: () => l.current?.scrollBy({ left: 200, behavior: "smooth" }),
          className: "w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group",
          children: /* @__PURE__ */ i.jsx("svg", { className: "w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: "relative", ref: f, children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            onClick: () => c(!u),
            className: "ml-1 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200",
            children: "⋮"
          }
        ),
        u && /* @__PURE__ */ i.jsx("div", { className: "absolute right-0 mt-2 w-48 max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-30", children: t.map((d, p) => /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              r(p), c(!1);
            },
            className: `w-full text-left px-3 py-2 text-sm truncate hover:bg-gray-100 ${n === p ? "bg-gray-50 font-semibold text-action" : "text-gray-700"}`,
            children: e[d]?.label || d
          },
          d
        )) })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: `relative bg-gray-100 ${o ? "" : "rounded-t-lg"} px-1 pt-1 shadow-inner overflow-hidden`, children: /* @__PURE__ */ i.jsx(
      "nav",
      {
        ref: l,
        className: "relative flex overflow-x-auto scrollbar-hide scroll-smooth",
        style: {
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        },
        children: t.length > 0 ? t.map((d, p) => /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            onClick: () => r(p),
            className: `relative cursor-pointer flex-shrink-0
            min-w-[8rem]   
            py-2 px-8
            rounded-t-lg text-xs sm:text-sm font-semibold
            transition-all duration-300 ease-out
            focus:outline-none whitespace-nowrap
            ${n === p ? "text-action bg-white" : "text-gray-600 hover:text-gray-800 hover:bg-white/50"}`,
            children: /* @__PURE__ */ i.jsx("span", { className: "relative z-10 flex items-center justify-center gap-1 sm:gap-2", children: /* @__PURE__ */ i.jsx("span", { className: "truncate", children: e[d]?.label || d }) })
          },
          d
        )) : /* @__PURE__ */ i.jsx("div", { className: "py-3 px-6 text-sm text-gray-500", children: "No group available" })
      }
    ) })
  ] });
}, Ks = ({
  groupNames: e,
  activeTabIndex: t,
  layoutConfig: r,
  tabObj: n,
  infoData: a,
  setActiveTabIndex: s,
  renderView: o,
  methods: l = {},
  refid: u,
  sqlOpsUrls: c,
  module_refid: f,
  fieldOptions: d,
  setFieldOptions: p,
  buttons: y,
  handleAction: g,
  components: v,
  AttachmentPopup: E
}) => {
  let x = y ? Object.entries(y).filter(([S, h]) => h.groups ? h.groups.includes(e[t]) : !0) : [];
  async function w(S, h) {
    const T = l?.[S];
    if (T) {
      try {
        await T();
      } catch (R) {
        console.error("Method execution failed:", R);
      }
      return;
    }
    g?.({ [S]: h }, a);
  }
  const m = ba(n?.component, v);
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: "bg-white rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex-1 flex flex-col min-h-0",
      children: [
        e.length > 0 ? n?.type === "fields" && n?.fields ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ i.jsx("div", { className: r?.fieldGridClass || "grid grid-cols-12 gap-2", children: n.fields.map((S, h) => nn(S.hidden) ? null : /* @__PURE__ */ i.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${Xt[Zt(Number(S.width))] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ i.jsx(
              vr,
              {
                field: S,
                data: a ?? {},
                methods: l,
                refid: u,
                sqlOpsUrls: c,
                module_refid: f,
                setFieldOptions: p,
                ...d[S.name] ? { optionsOverride: d[S.name] } : {},
                AttachmentPopup: E
              }
            )
          },
          S?.name ?? `field-${h}`
        )) }) }) : n?.type === "component" && m ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: m }) : n ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: o(n, e[t] || "") }) : null : /* @__PURE__ */ i.jsx("div", { className: "flex-1 col-span-full text-center py-8 text-gray-500", children: "No data available" }),
        /* @__PURE__ */ i.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: x && x.map(([S, h]) => /* @__PURE__ */ i.jsx(
          "button",
          {
            onClick: () => w(S, h),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: h.label
          },
          S
        )) }),
        e.length > 5 && /* @__PURE__ */ i.jsxs("div", { className: "mt-2 pt-2 border-t border-gray-100 flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-500", children: [
            /* @__PURE__ */ i.jsxs("span", { children: [
              "Tab ",
              t + 1,
              " of ",
              e.length
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "flex gap-1", children: [
              e.slice(0, 5).map((S, h) => /* @__PURE__ */ i.jsx(
                "div",
                {
                  className: `w-2 h-2 rounded-full transition-all duration-300 ${h === t ? "bg-action w-6" : "bg-gray-300"}`
                },
                h
              )),
              e.length > 5 && /* @__PURE__ */ i.jsxs("span", { className: "text-xs text-gray-400 ml-1", children: [
                "+",
                e.length - 5
              ] })
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "hidden sm:flex gap-2", children: [
            /* @__PURE__ */ i.jsx(
              "button",
              {
                onClick: () => s(Math.max(0, t - 1)),
                disabled: t === 0,
                className: "px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                children: "Previous"
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                onClick: () => s(Math.min(e.length - 1, t + 1)),
                disabled: t === e.length - 1,
                className: "px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                children: "Next"
              }
            )
          ] })
        ] }),
        e.length <= 5 && /* @__PURE__ */ i.jsx("div", { className: "mt-6 pt-3 border-t border-gray-100", children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
          /* @__PURE__ */ i.jsxs("span", { children: [
            "Tab ",
            t + 1,
            " of ",
            e.length
          ] }),
          /* @__PURE__ */ i.jsx("div", { className: "flex gap-1", children: e.map((S, h) => /* @__PURE__ */ i.jsx(
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
function Ys({
  groups: e,
  methods: t = {},
  infoData: r,
  viewRenderers: n = {},
  isCommonInfo: a,
  layoutConfig: s = {},
  viewMode: o,
  sqlOpsUrls: l,
  refid: u,
  Reports: c,
  toast: f,
  handleAction: d = () => {
  },
  infoViewJson: p,
  fieldOptions: y,
  setFieldOptions: g,
  components: v,
  AttachmentPopup: E
}) {
  const [x, w] = Ne(0), [m, S] = Ne(!1), h = Pe(null), T = Object.keys(e);
  xe(() => {
    const D = () => {
      if (h.current) {
        const N = h.current;
        S(N.scrollWidth > N.clientWidth);
      }
    };
    return D(), window.addEventListener("resize", D), () => window.removeEventListener("resize", D);
  }, [T.length]), xe(() => {
    if (h.current && T.length > 0) {
      const D = h.current.children[x];
      D && D.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [x, T.length]);
  const R = o === "tableft", P = o === "tabright", L = !R && !P, H = e[T[x] ?? ""] || null, _ = {
    single: (D, N) => /* @__PURE__ */ i.jsx(
      oa,
      {
        fieldOptions: y,
        setFieldOptions: g,
        module_refid: p.module_refid,
        tabObj: D,
        methods: t,
        tabName: N,
        sqlOpsUrls: l,
        refid: u,
        AttachmentPopup: E
      }
    ),
    grid: (D, N) => /* @__PURE__ */ i.jsx(
      ga,
      {
        ...c ? { Reports: c } : {},
        toast: f,
        handleAction: d,
        tabObj: D,
        methods: t,
        tabName: N,
        sqlOpsUrls: l,
        refid: u,
        infoViewJson: p,
        AttachmentPopup: E,
        parent_data: r
      }
    )
  }, B = H?.config?.uimode, z = n[B] || _[B] || (() => /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex justify-center p-4", children: "No UI mode for this type" }));
  return L ? /* @__PURE__ */ i.jsxs("div", { className: "flex-1 flex flex-col min-h-0 ", children: [
    /* @__PURE__ */ i.jsx(
      hm,
      {
        groupNames: T,
        groups: e,
        setActiveTabIndex: w,
        activeTabIndex: x,
        tabsNavRef: h,
        isCommonInfo: a,
        showScrollHint: m,
        layoutConfig: s
      }
    ),
    /* @__PURE__ */ i.jsx(
      Ks,
      {
        groupNames: T,
        activeTabIndex: x,
        layoutConfig: s,
        tabObj: H,
        infoData: r,
        setActiveTabIndex: w,
        renderView: z,
        groups: e,
        methods: t,
        refid: u,
        sqlOpsUrls: l,
        module_refid: p.module_refid,
        fieldOptions: y,
        setFieldOptions: g,
        buttons: p.buttons,
        handleAction: d,
        ...v ? { components: v } : {},
        AttachmentPopup: E
      }
    )
  ] }) : /* @__PURE__ */ i.jsxs("div", { className: "flex-1 flex min-h-0", children: [
    R && /* @__PURE__ */ i.jsx("aside", { className: "flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ i.jsx(
      Ws,
      {
        groupNames: T,
        groups: e,
        setActiveTabIndex: w,
        activeTabIndex: x
      }
    ) }),
    /* @__PURE__ */ i.jsx("main", { className: "flex-1 flex flex-col min-h-0 overflow-auto", children: /* @__PURE__ */ i.jsx(
      Ks,
      {
        groupNames: T,
        activeTabIndex: x,
        layoutConfig: s,
        tabObj: H,
        infoData: r,
        setActiveTabIndex: w,
        renderView: z,
        groups: e,
        methods: t,
        refid: u,
        module_refid: p.module_refid,
        sqlOpsUrls: l,
        fieldOptions: y,
        setFieldOptions: g,
        handleAction: d,
        ...v ? { components: v } : {},
        AttachmentPopup: E
      }
    ) }),
    P && /* @__PURE__ */ i.jsx("aside", { className: "flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ i.jsx(
      Ws,
      {
        groupNames: T,
        groups: e,
        setActiveTabIndex: w,
        activeTabIndex: x
      }
    ) })
  ] });
}
function pm({ title: e, children: t, isFirst: r }) {
  const [n, a] = Ne(r);
  return /* @__PURE__ */ i.jsx("div", { className: "group relative mt-1 flex-1 flex flex-col min-h-0 max-h-screen", children: /* @__PURE__ */ i.jsxs("div", { className: "flex-1 flex flex-col min-h-0 relative bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ i.jsxs(
      "button",
      {
        onClick: () => a(!n),
        className: "w-full bg-gray-50 flex justify-between items-center px-2 py-1 b text-left transition-all duration-300 ",
        children: [
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ i.jsx("div", { className: `w-3 h-3 rounded-full transition-all duration-300 ${n ? "bg-action" : "bg-gray-300"}` }),
            /* @__PURE__ */ i.jsx("h3", { className: "text-md capitalize font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: e })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: `relative transition-all duration-300 ${n ? "rotate-180" : ""}`, children: [
            /* @__PURE__ */ i.jsx("div", { className: `absolute inset-0 rounded-full blur-md transition-opacity duration-300 ${n ? "bg-action opacity-30" : "bg-transparent opacity-0"}` }),
            /* @__PURE__ */ i.jsx(
              "svg",
              {
                className: "relative w-4 h-4 text-gray-500 group-hover:text-action-500 transition-colors duration-300",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: `flex-1 flex flex-col min-h-0 transition-all  duration-500 ease-in-out overflow-hidden ${n ? "max-h-full opacity-100" : "max-h-0 opacity-0"}`,
        children: /* @__PURE__ */ i.jsx("div", { className: "px-1 pb-1 bg-gradient-to-br from-gray-50/50 to-white flex-1 flex flex-col min-h-0", children: /* @__PURE__ */ i.jsx("div", { className: "space-y-5 pt-1 flex-1 flex flex-col min-h-0 overflow-y-auto", children: t }) })
      }
    )
  ] }) });
}
function mm({
  groups: e,
  methods: t = {},
  infoData: r,
  viewRenderers: n = {},
  sqlOpsUrls: a,
  refid: s,
  Reports: o,
  toast: l,
  handleAction: u = () => {
  },
  infoViewJson: c,
  fieldOptions: f,
  setFieldOptions: d,
  components: p,
  AttachmentPopup: y
}) {
  const g = {
    single: (w, m) => /* @__PURE__ */ i.jsx(
      oa,
      {
        tabObj: w,
        methods: t,
        tabName: m,
        sqlOpsUrls: a,
        fieldOptions: f,
        setFieldOptions: d,
        refid: s,
        module_refid: c?.module_refid,
        AttachmentPopup: y
      }
    ),
    grid: (w, m) => /* @__PURE__ */ i.jsx(
      ga,
      {
        ...o ? { Reports: o } : {},
        toast: l,
        infoViewJson: c,
        handleAction: u,
        tabObj: w,
        methods: t,
        tabName: m,
        sqlOpsUrls: a,
        refid: s,
        parent_data: r,
        AttachmentPopup: y
      }
    )
  }, v = c?.buttons;
  let E = v ? Object.entries(v).filter(([w, m]) => !(m.groups && m.groups.length > 0)) : [];
  async function x(w, m) {
    const S = t?.[w];
    if (S) {
      try {
        await S();
      } catch (h) {
        console.error("Method execution failed:", h);
      }
      return;
    }
    u?.({ [w]: m }, r);
  }
  return /* @__PURE__ */ i.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ i.jsx("div", { className: "mx-auto", children: /* @__PURE__ */ i.jsxs("div", { className: "space-y-1 flex flex-col min-h-0", children: [
    e && Object.entries(e).map(([w, m], S) => {
      let h = v ? Object.entries(v).filter(([R, P]) => P.groups ? P.groups.includes(w) : !1) : [];
      const T = ba(m.component, p);
      return /* @__PURE__ */ i.jsxs(pm, { title: m.label, isFirst: S === 0, children: [
        m?.type === "fields" && m?.fields ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-12 gap-2", children: m.fields.map((R, P) => nn(R.hidden) ? null : /* @__PURE__ */ i.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${Xt[Zt(Number(R.width))] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ i.jsx(
              vr,
              {
                module_refid: c?.module_refid,
                methods: t,
                field: R,
                data: r ?? {},
                setFieldOptions: d,
                ...f[R.name] ? { optionsOverride: f[R.name] } : {},
                sqlOpsUrls: a,
                refid: s,
                AttachmentPopup: y
              }
            )
          },
          R?.name ?? `field-${P}`
        )) }) }) : m?.type === "component" && T ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: T }) : m ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: n[m.config?.uimode]?.(m) || g[m.config?.uimode]?.(m, w) || /* @__PURE__ */ i.jsx("div", { children: "No renderer for this type" }) }) : null,
        /* @__PURE__ */ i.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: h && h.map(([R, P]) => /* @__PURE__ */ i.jsx(
          "button",
          {
            onClick: () => x(R, P),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: P.label
          },
          R
        )) })
      ] }, w);
    }),
    /* @__PURE__ */ i.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: E && E.map(([w, m]) => /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => x(w, m),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: m.label
      },
      w
    )) })
  ] }) }) });
}
function ym({ title: e, children: t }) {
  return /* @__PURE__ */ i.jsx("div", { className: "group relative mt-1 flex-1 flex flex-col min-h-0 max-h-screen", children: /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col min-h-0 relative  bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ", children: [
    /* @__PURE__ */ i.jsx(
      "button",
      {
        className: "w-full bg-gray-50 flex justify-between items-center px-2 py-1 b text-left transition-all duration-300 ",
        children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ i.jsx("div", { className: "w-3 h-3 rounded-full transition-all duration-300 bg-action" }),
          /* @__PURE__ */ i.jsx("h3", { className: "text-md font-semibold bg-gradient-to-r capitalize from-gray-800 to-gray-600 bg-clip-text text-transparent", children: e })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: `flex flex-col min-h-0 transition-all duration-500 ease-in-out opacity-100'
            }`,
        children: /* @__PURE__ */ i.jsx("div", { className: "px-1 pb-1 bg-gradient-to-br from-gray-50/50 to-white flex flex-col min-h-0", children: /* @__PURE__ */ i.jsx("div", { className: "space-y-5 pt-1 flex-1 flex flex-col min-h-0 overflow-y-auto", children: t }) })
      }
    )
  ] }) });
}
function gm({
  groups: e,
  methods: t = {},
  infoData: r,
  viewRenderers: n = {},
  sqlOpsUrls: a,
  refid: s,
  Reports: o,
  toast: l,
  handleAction: u = () => {
  },
  infoViewJson: c,
  fieldOptions: f,
  setFieldOptions: d,
  components: p,
  AttachmentPopup: y
}) {
  const g = {
    single: (w, m) => /* @__PURE__ */ i.jsx(
      oa,
      {
        fieldOptions: f,
        setFieldOptions: d,
        module_refid: c?.module_refid,
        tabObj: w,
        methods: t,
        tabName: m,
        sqlOpsUrls: a,
        refid: s,
        AttachmentPopup: y
      }
    ),
    grid: (w, m) => /* @__PURE__ */ i.jsx(
      ga,
      {
        ...o ? { Reports: o } : {},
        toast: l,
        handleAction: u,
        tabObj: w,
        methods: t,
        tabName: m,
        sqlOpsUrls: a,
        parent_data: r,
        refid: s,
        infoViewJson: c,
        AttachmentPopup: y
      }
    )
  }, v = c?.buttons;
  let E = v ? Object.entries(v).filter(([w, m]) => !(m.groups && m.groups.length > 0)) : [];
  async function x(w, m) {
    const S = t?.[w];
    if (S) {
      try {
        await S();
      } catch (h) {
        console.error("Method execution failed:", h);
      }
      return;
    }
    u?.({ [w]: m }, r);
  }
  return /* @__PURE__ */ i.jsx("div", { className: "bg-white animate-in fade-in duration-300 rounded-b-2xl border-t-0 border border-gray-100", children: /* @__PURE__ */ i.jsx("div", { className: "mx-auto", children: /* @__PURE__ */ i.jsxs("div", { className: "space-y-2  flex flex-col min-h-0", children: [
    e && Object.entries(e).map(([w, m], S) => {
      let h = v ? Object.entries(v).filter(([R, P]) => P.groups ? P.groups.includes(w) : !1) : [];
      const T = ba(m.component, p);
      return /* @__PURE__ */ i.jsxs(ym, { title: m.label, children: [
        m?.type === "fields" && m?.fields ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-12 gap-2", children: m.fields.map((R, P) => nn(R.hidden) ? null : /* @__PURE__ */ i.jsx(
          "div",
          {
            className: `col-span-12 sm:col-span-6 ${Xt[Zt(Number(R.width))] || "lg:col-span-2"}`,
            children: /* @__PURE__ */ i.jsx(
              vr,
              {
                module_refid: c?.module_refid,
                methods: t,
                field: R,
                data: r ?? {},
                setFieldOptions: d,
                ...f[R.name] ? { optionsOverride: f[R.name] } : {},
                sqlOpsUrls: a,
                refid: s,
                AttachmentPopup: y
              }
            )
          },
          R?.name ?? `field-${P}`
        )) }) }) : m?.type === "component" && T ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: T }) : m ? /* @__PURE__ */ i.jsx("div", { className: "flex-1 flex flex-col overflow-y-auto min-h-0", children: n[m.config?.uimode]?.(m) || g[m.config?.uimode]?.(m, w) || /* @__PURE__ */ i.jsx("div", { children: "No renderer for this type" }) }) : null,
        /* @__PURE__ */ i.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: h && h.map(([R, P]) => /* @__PURE__ */ i.jsx(
          "button",
          {
            onClick: () => x(R, P),
            className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
            children: P.label
          },
          R
        )) })
      ] }, w);
    }),
    /* @__PURE__ */ i.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-gray-100", children: E && E.map(([w, m]) => /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => x(w, m),
        className: "px-5 py-2 bg-action font-semibold rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer",
        children: m.label
      },
      w
    )) })
  ] }) }) });
}
function Mm({
  infoViewJson: e,
  hiddenFields: t = [],
  groupFieldsFn: r = xu,
  layoutConfig: n = {},
  viewRenderers: a = {},
  methods: s = {},
  Reports: o,
  toast: l,
  handleAction: u = () => {
  },
  components: c,
  initialvalues: f,
  AttachmentPopup: d
}) {
  const [p, y] = de.useState(f ?? {}), g = bu(e.infoview ?? {}), v = e.endPoints, E = de.useMemo(
    () => r(e.fields || {}),
    [e.fields, r]
  ), [x, w] = de.useState({}), m = (L, H) => {
    w((_) => ({
      ..._,
      [L]: H
    }));
  }, S = e?.source?.refid;
  let h = { ...E };
  e.infoview?.groups && (h = { ...h, ...e.infoview.groups }), de.useEffect(() => {
    f && y((L) => ({
      ...L,
      ...f ?? {}
    }));
  }, [f]);
  const T = de.useCallback(
    (L) => {
      L && y((H) => ({
        ...H,
        ...L
      }));
    },
    []
  );
  de.useEffect(() => {
    let L = !1;
    return (async () => {
      const _ = e?.source;
      if (!_?.type) {
        L || T({});
        return;
      }
      if (_.type === "method") {
        const B = _.method, z = B ? s[B] : void 0;
        if (z)
          try {
            const D = await z();
            L || T(D || {});
          } catch (D) {
            console.error("Method execution failed:", D), L || T({});
          }
        else
          L || T({});
      }
      if (_.type === "api")
        try {
          const B = {
            method: _.method || "GET",
            url: v?.baseURL + _.endpoint,
            headers: {
              Authorization: `Bearer ${v?.accessToken}`
            },
            ..._.method === "GET" ? { params: { refid: _.refid } } : { data: { refid: _.refid } }
          }, { data: z } = await Q(B), D = z?.results?.options ? z?.results?.options : z.data ? z.data : z.results ? z.results : z;
          L || T(D ?? {});
        } catch (B) {
          console.error("API fetch failed:", B), L || T({});
        }
      if (_.type === "sql" && _.refid && _.refid != "0" || _.dbopsid) {
        if (!v) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let B = !1, z;
          _?.dbopsid && (B = !0, z = _?.dbopsid);
          const D = await Q({
            method: "GET",
            url: v.baseURL + v.dbopsGetHash,
            headers: {
              Authorization: `Bearer ${v?.accessToken}`
            }
          });
          if (!B) {
            let ge = {
              ..._
            };
            _.where && (ge = {
              ..._,
              where: Ue(_.where, {
                refid: S
              })
            }), z = (await Q({
              method: "POST",
              url: v.baseURL + v.dbopsGetRefId,
              data: {
                operation: "fetch",
                source: ge,
                fields: Wr(e.fields ?? {}, v.operation),
                forcefill: e.forcefill,
                datahash: D.data.refhash,
                srcid: e?.module_refid
              },
              headers: {
                Authorization: `Bearer ${v?.accessToken}`
              }
            }))?.data.refid;
          }
          const N = await Q({
            method: "POST",
            url: v.baseURL + v.dbopsFetch,
            data: {
              refid: z,
              datahash: D.data.refhash,
              module_refid: e.module_refid
            },
            headers: {
              Authorization: `Bearer ${v?.accessToken}`
            }
          }), ye = Uo(N) ?? {};
          L || T(ye);
        } catch (B) {
          L || T({}), console.error("API fetch failed:", B);
        }
      }
    })(), () => {
      L = !0;
    };
  }, [
    e?.source?.type || "",
    e?.source?.method || "",
    e?.source?.url || "",
    JSON.stringify(e?.source?.params || {}),
    JSON.stringify(e?.source?.body || {}),
    JSON.stringify(e?.source?.headers || {})
  ]);
  const R = h.common || null;
  R && delete h.common;
  const P = (L) => {
    switch (L) {
      case "accordion":
        return /* @__PURE__ */ i.jsx(
          mm,
          {
            groups: h,
            methods: s,
            infoData: p,
            viewRenderers: a,
            sqlOpsUrls: v,
            refid: S,
            ...o ? { Reports: o } : {},
            toast: l,
            handleAction: u,
            infoViewJson: e,
            setFieldOptions: m,
            fieldOptions: x,
            ...c ? { components: c } : {},
            AttachmentPopup: d
          }
        );
      case "tab":
      case "tableft":
      case "tabright":
        return /* @__PURE__ */ i.jsx(
          Ys,
          {
            groups: h,
            viewRenderers: a,
            layoutConfig: n,
            methods: s,
            infoData: p,
            isCommonInfo: !!R,
            viewMode: L,
            sqlOpsUrls: v,
            refid: S,
            ...o ? { Reports: o } : {},
            toast: l,
            handleAction: u,
            infoViewJson: e,
            setFieldOptions: m,
            fieldOptions: x,
            ...c ? { components: c } : {},
            AttachmentPopup: d
          }
        );
      case "cards":
        return /* @__PURE__ */ i.jsx(
          gm,
          {
            groups: h,
            viewRenderers: a,
            methods: s,
            infoData: p,
            sqlOpsUrls: v,
            refid: S,
            ...o ? { Reports: o } : {},
            toast: l,
            handleAction: u,
            infoViewJson: e,
            setFieldOptions: m,
            fieldOptions: x,
            ...c ? { components: c } : {},
            AttachmentPopup: d
          }
        );
      default:
        return /* @__PURE__ */ i.jsx(
          Ys,
          {
            groups: h,
            viewRenderers: a,
            layoutConfig: n,
            methods: s,
            infoData: p,
            isCommonInfo: !!R,
            viewMode: L,
            sqlOpsUrls: v,
            refid: S,
            ...o ? { Reports: o } : {},
            toast: l,
            handleAction: u,
            infoViewJson: e,
            setFieldOptions: m,
            fieldOptions: x,
            ...c ? { components: c } : {},
            AttachmentPopup: d
          }
        );
    }
  };
  return /* @__PURE__ */ i.jsxs("div", { className: n.containerClass || "h-screen flex flex-col ", children: [
    R && v && /* @__PURE__ */ i.jsx(
      Vu,
      {
        commonInfo: R,
        infoData: p,
        hiddenFields: t,
        sqlOpsUrls: v,
        setFieldOptions: m,
        fieldOptions: x,
        module_refid: e.module_refid,
        refid: S,
        methods: s,
        AttachmentPopup: d
      }
    ),
    P(g)
  ] });
}
export {
  Mm as InfoView
};
