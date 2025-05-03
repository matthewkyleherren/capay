const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./DR3K7GU2.js",
      "./Bodm0WSp.js",
      "./Image.2AS4b25Y.css",
      "./B82mXJoM.js",
      "./Logo.B2n-4vgh.css",
      "./cookie-policy.CQd0xpoN.css",
      "./BIO8I5yf.js",
      "./rHRJcXgW.js",
      "./Map.BaXHQa8z.css",
      "./_slug_.CAmBkgMt.css",
      "./CuPDYMTh.js",
      "./index.Dy1Hv7Du.css",
      "./BJVtpiKD.js",
      "./B8RkmdbG.js",
      "./Overlay.BqmHoqI5.css",
      "./DTAS521G.js",
      "./2MH4pIEG.js",
      "./Footer.D10m_L1k.css",
      "./BDSKvS5I.js",
      "./index.kwK62J-8.css",
      "./DXehg9Rb.js",
      "./join.CNFRQHA_.css",
      "./ClEIJUB5.js",
      "./privacy-policy.BhWz8X6y.css",
      "./Z7QGQZiE.js",
      "./the-project.DrPKeAA3.css",
      "./BanM1Kzo.js",
      "./default.Dv_BQilw.css",
    ])
) => i.map((i) => d[i]);
var e = Object.defineProperty,
  t = (t, n, r) =>
    ((t, n, r) =>
      n in t
        ? e(t, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
        : (t[n] = r))(t, "symbol" != typeof n ? n + "" : n, r);
function n(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (e) => e in t;
}
const r = {},
  o = [],
  i = () => {},
  s = () => !1,
  a = (e) =>
    111 === e.charCodeAt(0) &&
    110 === e.charCodeAt(1) &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  l = (e) => e.startsWith("onUpdate:"),
  c = Object.assign,
  u = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  p = Object.prototype.hasOwnProperty,
  d = (e, t) => p.call(e, t),
  f = Array.isArray,
  h = (e) => "[object Map]" === x(e),
  m = (e) => "[object Set]" === x(e),
  g = (e) => "[object Date]" === x(e),
  v = (e) => "function" == typeof e,
  y = (e) => "string" == typeof e,
  b = (e) => "symbol" == typeof e,
  _ = (e) => null !== e && "object" == typeof e,
  w = (e) => (_(e) || v(e)) && v(e.then) && v(e.catch),
  D = Object.prototype.toString,
  x = (e) => D.call(e),
  k = (e) => "[object Object]" === x(e),
  C = (e) => y(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e,
  E = n(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  T = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  S = /-(\w)/g,
  A = T((e) => e.replace(S, (e, t) => (t ? t.toUpperCase() : ""))),
  O = /\B([A-Z])/g,
  P = T((e) => e.replace(O, "-$1").toLowerCase()),
  F = T((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  L = T((e) => (e ? `on${F(e)}` : "")),
  N = (e, t) => !Object.is(e, t),
  I = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  R = (e, t, n, r = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: r,
      value: n,
    });
  },
  M = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  B = (e) => {
    const t = y(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let j;
const $ = () =>
  j ||
  (j =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : {});
function U(e) {
  if (f(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        o = y(r) ? V(r) : U(r);
      if (o) for (const e in o) t[e] = o[e];
    }
    return t;
  }
  if (y(e) || _(e)) return e;
}
const q = /;(?![^(]*\))/g,
  H = /:([^]+)/,
  z = /\/\*[^]*?\*\//g;
function V(e) {
  const t = {};
  return (
    e
      .replace(z, "")
      .split(q)
      .forEach((e) => {
        if (e) {
          const n = e.split(H);
          n.length > 1 && (t[n[0].trim()] = n[1].trim());
        }
      }),
    t
  );
}
function W(e) {
  let t = "";
  if (y(e)) t = e;
  else if (f(e))
    for (let n = 0; n < e.length; n++) {
      const r = W(e[n]);
      r && (t += r + " ");
    }
  else if (_(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Y = n(
  "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
);
function X(e) {
  return !!e || "" === e;
}
function G(e, t) {
  if (e === t) return !0;
  let n = g(e),
    r = g(t);
  if (n || r) return !(!n || !r) && e.getTime() === t.getTime();
  if (((n = b(e)), (r = b(t)), n || r)) return e === t;
  if (((n = f(e)), (r = f(t)), n || r))
    return (
      !(!n || !r) &&
      (function (e, t) {
        if (e.length !== t.length) return !1;
        let n = !0;
        for (let r = 0; n && r < e.length; r++) n = G(e[r], t[r]);
        return n;
      })(e, t)
    );
  if (((n = _(e)), (r = _(t)), n || r)) {
    if (!n || !r) return !1;
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e) {
      const r = e.hasOwnProperty(n),
        o = t.hasOwnProperty(n);
      if ((r && !o) || (!r && o) || !G(e[n], t[n])) return !1;
    }
  }
  return String(e) === String(t);
}
function K(e, t) {
  return e.findIndex((e) => G(e, t));
}
const J = (e) => !(!e || !0 !== e.__v_isRef),
  Q = (e) =>
    y(e)
      ? e
      : null == e
      ? ""
      : f(e) || (_(e) && (e.toString === D || !v(e.toString)))
      ? J(e)
        ? Q(e.value)
        : JSON.stringify(e, Z, 2)
      : String(e),
  Z = (e, t) =>
    J(t)
      ? Z(e, t.value)
      : h(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (e, [t, n], r) => ((e[ee(t, r) + " =>"] = n), e),
            {}
          ),
        }
      : m(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((e) => ee(e)) }
      : b(t)
      ? ee(t)
      : !_(t) || f(t) || k(t)
      ? t
      : String(t),
  ee = (e, t = "") => {
    var n;
    return b(e) ? `Symbol(${null != (n = e.description) ? n : t})` : e;
  };
let te, ne;
class re {
  constructor(e = !1) {
    (this.detached = e),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = te),
      !e && te && (this.index = (te.scopes || (te.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      let e, t;
      if (((this._isPaused = !0), this.scopes))
        for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].pause();
      for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      let e, t;
      if (((this._isPaused = !1), this.scopes))
        for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].resume();
      for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].resume();
    }
  }
  run(e) {
    if (this._active) {
      const t = te;
      try {
        return (te = this), e();
      } finally {
        te = t;
      }
    }
  }
  on() {
    te = this;
  }
  off() {
    te = this.parent;
  }
  stop(e) {
    if (this._active) {
      let t, n;
      for (this._active = !1, t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].stop();
      for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++)
        this.cleanups[t]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !e) {
        const e = this.parent.scopes.pop();
        e &&
          e !== this &&
          ((this.parent.scopes[this.index] = e), (e.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function oe(e) {
  return new re(e);
}
function ie() {
  return te;
}
function se(e, t = !1) {
  te && te.cleanups.push(e);
}
const ae = new WeakSet();
class le {
  constructor(e) {
    (this.fn = e),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      te && te.active && te.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    64 & this.flags &&
      ((this.flags &= -65), ae.has(this) && (ae.delete(this), this.trigger()));
  }
  notify() {
    (2 & this.flags && !(32 & this.flags)) || 8 & this.flags || de(this);
  }
  run() {
    if (!(1 & this.flags)) return this.fn();
    (this.flags |= 2), Ce(this), me(this);
    const e = ne,
      t = we;
    (ne = this), (we = !0);
    try {
      return this.fn();
    } finally {
      ge(this), (ne = e), (we = t), (this.flags &= -3);
    }
  }
  stop() {
    if (1 & this.flags) {
      for (let e = this.deps; e; e = e.nextDep) be(e);
      (this.deps = this.depsTail = void 0),
        Ce(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    64 & this.flags
      ? ae.add(this)
      : this.scheduler
      ? this.scheduler()
      : this.runIfDirty();
  }
  runIfDirty() {
    ve(this) && this.run();
  }
  get dirty() {
    return ve(this);
  }
}
let ce,
  ue,
  pe = 0;
function de(e, t = !1) {
  if (((e.flags |= 8), t)) return (e.next = ue), void (ue = e);
  (e.next = ce), (ce = e);
}
function fe() {
  pe++;
}
function he() {
  if (--pe > 0) return;
  if (ue) {
    let e = ue;
    for (ue = void 0; e; ) {
      const t = e.next;
      (e.next = void 0), (e.flags &= -9), (e = t);
    }
  }
  let e;
  for (; ce; ) {
    let n = ce;
    for (ce = void 0; n; ) {
      const r = n.next;
      if (((n.next = void 0), (n.flags &= -9), 1 & n.flags))
        try {
          n.trigger();
        } catch (t) {
          e || (e = t);
        }
      n = r;
    }
  }
  if (e) throw e;
}
function me(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t);
}
function ge(e) {
  let t,
    n = e.depsTail,
    r = n;
  for (; r; ) {
    const e = r.prevDep;
    -1 === r.version ? (r === n && (n = e), be(r), _e(r)) : (t = r),
      (r.dep.activeLink = r.prevActiveLink),
      (r.prevActiveLink = void 0),
      (r = e);
  }
  (e.deps = t), (e.depsTail = n);
}
function ve(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (ye(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function ye(e) {
  if (4 & e.flags && !(16 & e.flags)) return;
  if (((e.flags &= -17), e.globalVersion === Ee)) return;
  e.globalVersion = Ee;
  const t = e.dep;
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !ve(e)))
    return void (e.flags &= -3);
  const n = ne,
    r = we;
  (ne = e), (we = !0);
  try {
    me(e);
    const n = e.fn(e._value);
    (0 === t.version || N(n, e._value)) && ((e._value = n), t.version++);
  } catch (o) {
    throw (t.version++, o);
  } finally {
    (ne = n), (we = r), ge(e), (e.flags &= -3);
  }
}
function be(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (
    (r && ((r.nextSub = o), (e.prevSub = void 0)),
    o && ((o.prevSub = r), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = r), !r && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let e = n.computed.deps; e; e = e.nextDep) be(e, !0);
  }
  t || --n.sc || !n.map || n.map.delete(n.key);
}
function _e(e) {
  const { prevDep: t, nextDep: n } = e;
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0));
}
let we = !0;
const De = [];
function xe() {
  De.push(we), (we = !1);
}
function ke() {
  const e = De.pop();
  we = void 0 === e || e;
}
function Ce(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const e = ne;
    ne = void 0;
    try {
      t();
    } finally {
      ne = e;
    }
  }
}
let Ee = 0;
class Te {
  constructor(e, t) {
    (this.sub = e),
      (this.dep = t),
      (this.version = t.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0);
  }
}
class Se {
  constructor(e) {
    (this.computed = e),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0);
  }
  track(e) {
    if (!ne || !we || ne === this.computed) return;
    let t = this.activeLink;
    if (void 0 === t || t.sub !== ne)
      (t = this.activeLink = new Te(ne, this)),
        ne.deps
          ? ((t.prevDep = ne.depsTail),
            (ne.depsTail.nextDep = t),
            (ne.depsTail = t))
          : (ne.deps = ne.depsTail = t),
        Ae(t);
    else if (-1 === t.version && ((t.version = this.version), t.nextDep)) {
      const e = t.nextDep;
      (e.prevDep = t.prevDep),
        t.prevDep && (t.prevDep.nextDep = e),
        (t.prevDep = ne.depsTail),
        (t.nextDep = void 0),
        (ne.depsTail.nextDep = t),
        (ne.depsTail = t),
        ne.deps === t && (ne.deps = e);
    }
    return t;
  }
  trigger(e) {
    this.version++, Ee++, this.notify(e);
  }
  notify(e) {
    fe();
    try {
      0;
      for (let e = this.subs; e; e = e.prevSub)
        e.sub.notify() && e.sub.dep.notify();
    } finally {
      he();
    }
  }
}
function Ae(e) {
  if ((e.dep.sc++, 4 & e.sub.flags)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let e = t.deps; e; e = e.nextDep) Ae(e);
    }
    const n = e.dep.subs;
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
  }
}
const Oe = new WeakMap(),
  Pe = Symbol(""),
  Fe = Symbol(""),
  Le = Symbol("");
function Ne(e, t, n) {
  if (we && ne) {
    let t = Oe.get(e);
    t || Oe.set(e, (t = new Map()));
    let r = t.get(n);
    r || (t.set(n, (r = new Se())), (r.map = t), (r.key = n)), r.track();
  }
}
function Ie(e, t, n, r, o, i) {
  const s = Oe.get(e);
  if (!s) return void Ee++;
  const a = (e) => {
    e && e.trigger();
  };
  if ((fe(), "clear" === t)) s.forEach(a);
  else {
    const o = f(e),
      i = o && C(n);
    if (o && "length" === n) {
      const e = Number(r);
      s.forEach((t, n) => {
        ("length" === n || n === Le || (!b(n) && n >= e)) && a(t);
      });
    } else
      switch (
        ((void 0 !== n || s.has(void 0)) && a(s.get(n)), i && a(s.get(Le)), t)
      ) {
        case "add":
          o ? i && a(s.get("length")) : (a(s.get(Pe)), h(e) && a(s.get(Fe)));
          break;
        case "delete":
          o || (a(s.get(Pe)), h(e) && a(s.get(Fe)));
          break;
        case "set":
          h(e) && a(s.get(Pe));
      }
  }
  he();
}
function Re(e) {
  const t = wt(e);
  return t === e ? t : (Ne(t, 0, Le), bt(e) ? t : t.map(xt));
}
function Me(e) {
  return Ne((e = wt(e)), 0, Le), e;
}
const Be = {
  __proto__: null,
  [Symbol.iterator]() {
    return je(this, Symbol.iterator, xt);
  },
  concat(...e) {
    return Re(this).concat(...e.map((e) => (f(e) ? Re(e) : e)));
  },
  entries() {
    return je(this, "entries", (e) => ((e[1] = xt(e[1])), e));
  },
  every(e, t) {
    return Ue(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ue(this, "filter", e, t, (e) => e.map(xt), arguments);
  },
  find(e, t) {
    return Ue(this, "find", e, t, xt, arguments);
  },
  findIndex(e, t) {
    return Ue(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ue(this, "findLast", e, t, xt, arguments);
  },
  findLastIndex(e, t) {
    return Ue(this, "findLastIndex", e, t, void 0, arguments);
  },
  forEach(e, t) {
    return Ue(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return He(this, "includes", e);
  },
  indexOf(...e) {
    return He(this, "indexOf", e);
  },
  join(e) {
    return Re(this).join(e);
  },
  lastIndexOf(...e) {
    return He(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ue(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ze(this, "pop");
  },
  push(...e) {
    return ze(this, "push", e);
  },
  reduce(e, ...t) {
    return qe(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return qe(this, "reduceRight", e, t);
  },
  shift() {
    return ze(this, "shift");
  },
  some(e, t) {
    return Ue(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ze(this, "splice", e);
  },
  toReversed() {
    return Re(this).toReversed();
  },
  toSorted(e) {
    return Re(this).toSorted(e);
  },
  toSpliced(...e) {
    return Re(this).toSpliced(...e);
  },
  unshift(...e) {
    return ze(this, "unshift", e);
  },
  values() {
    return je(this, "values", xt);
  },
};
function je(e, t, n) {
  const r = Me(e),
    o = r[t]();
  return (
    r === e ||
      bt(e) ||
      ((o._next = o.next),
      (o.next = () => {
        const e = o._next();
        return e.value && (e.value = n(e.value)), e;
      })),
    o
  );
}
const $e = Array.prototype;
function Ue(e, t, n, r, o, i) {
  const s = Me(e),
    a = s !== e && !bt(e),
    l = s[t];
  if (l !== $e[t]) {
    const t = l.apply(e, i);
    return a ? xt(t) : t;
  }
  let c = n;
  s !== e &&
    (a
      ? (c = function (t, r) {
          return n.call(this, xt(t), r, e);
        })
      : n.length > 2 &&
        (c = function (t, r) {
          return n.call(this, t, r, e);
        }));
  const u = l.call(s, c, r);
  return a && o ? o(u) : u;
}
function qe(e, t, n, r) {
  const o = Me(e);
  let i = n;
  return (
    o !== e &&
      (bt(e)
        ? n.length > 3 &&
          (i = function (t, r, o) {
            return n.call(this, t, r, o, e);
          })
        : (i = function (t, r, o) {
            return n.call(this, t, xt(r), o, e);
          })),
    o[t](i, ...r)
  );
}
function He(e, t, n) {
  const r = wt(e);
  Ne(r, 0, Le);
  const o = r[t](...n);
  return (-1 !== o && !1 !== o) || !_t(n[0])
    ? o
    : ((n[0] = wt(n[0])), r[t](...n));
}
function ze(e, t, n = []) {
  xe(), fe();
  const r = wt(e)[t].apply(e, n);
  return he(), ke(), r;
}
const Ve = n("__proto__,__v_isRef,__isVue"),
  We = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => "arguments" !== e && "caller" !== e)
      .map((e) => Symbol[e])
      .filter(b)
  );
function Ye(e) {
  b(e) || (e = String(e));
  const t = wt(this);
  return Ne(t, 0, e), t.hasOwnProperty(e);
}
class Xe {
  constructor(e = !1, t = !1) {
    (this._isReadonly = e), (this._isShallow = t);
  }
  get(e, t, n) {
    if ("__v_skip" === t) return e.__v_skip;
    const r = this._isReadonly,
      o = this._isShallow;
    if ("__v_isReactive" === t) return !r;
    if ("__v_isReadonly" === t) return r;
    if ("__v_isShallow" === t) return o;
    if ("__v_raw" === t)
      return n === (r ? (o ? pt : ut) : o ? ct : lt).get(e) ||
        Object.getPrototypeOf(e) === Object.getPrototypeOf(n)
        ? e
        : void 0;
    const i = f(e);
    if (!r) {
      let e;
      if (i && (e = Be[t])) return e;
      if ("hasOwnProperty" === t) return Ye;
    }
    const s = Reflect.get(e, t, Ct(e) ? e : n);
    return (b(t) ? We.has(t) : Ve(t))
      ? s
      : (r || Ne(e, 0, t),
        o
          ? s
          : Ct(s)
          ? i && C(t)
            ? s
            : s.value
          : _(s)
          ? r
            ? mt(s)
            : ft(s)
          : s);
  }
}
class Ge extends Xe {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, t, n, r) {
    let o = e[t];
    if (!this._isShallow) {
      const t = yt(o);
      if (
        (bt(n) || yt(n) || ((o = wt(o)), (n = wt(n))), !f(e) && Ct(o) && !Ct(n))
      )
        return !t && ((o.value = n), !0);
    }
    const i = f(e) && C(t) ? Number(t) < e.length : d(e, t),
      s = Reflect.set(e, t, n, Ct(e) ? e : r);
    return (
      e === wt(r) && (i ? N(n, o) && Ie(e, "set", t, n) : Ie(e, "add", t, n)), s
    );
  }
  deleteProperty(e, t) {
    const n = d(e, t);
    e[t];
    const r = Reflect.deleteProperty(e, t);
    return r && n && Ie(e, "delete", t, void 0), r;
  }
  has(e, t) {
    const n = Reflect.has(e, t);
    return (b(t) && We.has(t)) || Ne(e, 0, t), n;
  }
  ownKeys(e) {
    return Ne(e, 0, f(e) ? "length" : Pe), Reflect.ownKeys(e);
  }
}
class Ke extends Xe {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, t) {
    return !0;
  }
  deleteProperty(e, t) {
    return !0;
  }
}
const Je = new Ge(),
  Qe = new Ke(),
  Ze = new Ge(!0),
  et = (e) => e,
  tt = (e) => Reflect.getPrototypeOf(e);
function nt(e) {
  return function (...t) {
    return "delete" !== e && ("clear" === e ? void 0 : this);
  };
}
function rt(e, t) {
  const n = {
    get(n) {
      const r = this.__v_raw,
        o = wt(r),
        i = wt(n);
      e || (N(n, i) && Ne(o, 0, n), Ne(o, 0, i));
      const { has: s } = tt(o),
        a = t ? et : e ? kt : xt;
      return s.call(o, n)
        ? a(r.get(n))
        : s.call(o, i)
        ? a(r.get(i))
        : void (r !== o && r.get(n));
    },
    get size() {
      const t = this.__v_raw;
      return !e && Ne(wt(t), 0, Pe), Reflect.get(t, "size", t);
    },
    has(t) {
      const n = this.__v_raw,
        r = wt(n),
        o = wt(t);
      return (
        e || (N(t, o) && Ne(r, 0, t), Ne(r, 0, o)),
        t === o ? n.has(t) : n.has(t) || n.has(o)
      );
    },
    forEach(n, r) {
      const o = this,
        i = o.__v_raw,
        s = wt(i),
        a = t ? et : e ? kt : xt;
      return !e && Ne(s, 0, Pe), i.forEach((e, t) => n.call(r, a(e), a(t), o));
    },
  };
  c(
    n,
    e
      ? {
          add: nt("add"),
          set: nt("set"),
          delete: nt("delete"),
          clear: nt("clear"),
        }
      : {
          add(e) {
            t || bt(e) || yt(e) || (e = wt(e));
            const n = wt(this);
            return tt(n).has.call(n, e) || (n.add(e), Ie(n, "add", e, e)), this;
          },
          set(e, n) {
            t || bt(n) || yt(n) || (n = wt(n));
            const r = wt(this),
              { has: o, get: i } = tt(r);
            let s = o.call(r, e);
            s || ((e = wt(e)), (s = o.call(r, e)));
            const a = i.call(r, e);
            return (
              r.set(e, n),
              s ? N(n, a) && Ie(r, "set", e, n) : Ie(r, "add", e, n),
              this
            );
          },
          delete(e) {
            const t = wt(this),
              { has: n, get: r } = tt(t);
            let o = n.call(t, e);
            o || ((e = wt(e)), (o = n.call(t, e))), r && r.call(t, e);
            const i = t.delete(e);
            return o && Ie(t, "delete", e, void 0), i;
          },
          clear() {
            const e = wt(this),
              t = 0 !== e.size,
              n = e.clear();
            return t && Ie(e, "clear", void 0, void 0), n;
          },
        }
  );
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      n[r] = (function (e, t, n) {
        return function (...r) {
          const o = this.__v_raw,
            i = wt(o),
            s = h(i),
            a = "entries" === e || (e === Symbol.iterator && s),
            l = "keys" === e && s,
            c = o[e](...r),
            u = n ? et : t ? kt : xt;
          return (
            !t && Ne(i, 0, l ? Fe : Pe),
            {
              next() {
                const { value: e, done: t } = c.next();
                return t
                  ? { value: e, done: t }
                  : { value: a ? [u(e[0]), u(e[1])] : u(e), done: t };
              },
              [Symbol.iterator]() {
                return this;
              },
            }
          );
        };
      })(r, e, t);
    }),
    n
  );
}
function ot(e, t) {
  const n = rt(e, t);
  return (t, r, o) =>
    "__v_isReactive" === r
      ? !e
      : "__v_isReadonly" === r
      ? e
      : "__v_raw" === r
      ? t
      : Reflect.get(d(n, r) && r in t ? n : t, r, o);
}
const it = { get: ot(!1, !1) },
  st = { get: ot(!1, !0) },
  at = { get: ot(!0, !1) },
  lt = new WeakMap(),
  ct = new WeakMap(),
  ut = new WeakMap(),
  pt = new WeakMap();
function dt(e) {
  return e.__v_skip || !Object.isExtensible(e)
    ? 0
    : (function (e) {
        switch (e) {
          case "Object":
          case "Array":
            return 1;
          case "Map":
          case "Set":
          case "WeakMap":
          case "WeakSet":
            return 2;
          default:
            return 0;
        }
      })(((e) => x(e).slice(8, -1))(e));
}
function ft(e) {
  return yt(e) ? e : gt(e, !1, Je, it, lt);
}
function ht(e) {
  return gt(e, !1, Ze, st, ct);
}
function mt(e) {
  return gt(e, !0, Qe, at, ut);
}
function gt(e, t, n, r, o) {
  if (!_(e)) return e;
  if (e.__v_raw && (!t || !e.__v_isReactive)) return e;
  const i = o.get(e);
  if (i) return i;
  const s = dt(e);
  if (0 === s) return e;
  const a = new Proxy(e, 2 === s ? r : n);
  return o.set(e, a), a;
}
function vt(e) {
  return yt(e) ? vt(e.__v_raw) : !(!e || !e.__v_isReactive);
}
function yt(e) {
  return !(!e || !e.__v_isReadonly);
}
function bt(e) {
  return !(!e || !e.__v_isShallow);
}
function _t(e) {
  return !!e && !!e.__v_raw;
}
function wt(e) {
  const t = e && e.__v_raw;
  return t ? wt(t) : e;
}
function Dt(e) {
  return !d(e, "__v_skip") && Object.isExtensible(e) && R(e, "__v_skip", !0), e;
}
const xt = (e) => (_(e) ? ft(e) : e),
  kt = (e) => (_(e) ? mt(e) : e);
function Ct(e) {
  return !!e && !0 === e.__v_isRef;
}
function Et(e) {
  return St(e, !1);
}
function Tt(e) {
  return St(e, !0);
}
function St(e, t) {
  return Ct(e) ? e : new At(e, t);
}
class At {
  constructor(e, t) {
    (this.dep = new Se()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = t ? e : wt(e)),
      (this._value = t ? e : xt(e)),
      (this.__v_isShallow = t);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const t = this._rawValue,
      n = this.__v_isShallow || bt(e) || yt(e);
    (e = n ? e : wt(e)),
      N(e, t) &&
        ((this._rawValue = e),
        (this._value = n ? e : xt(e)),
        this.dep.trigger());
  }
}
function Ot(e) {
  return Ct(e) ? e.value : e;
}
const Pt = {
  get: (e, t, n) => ("__v_raw" === t ? e : Ot(Reflect.get(e, t, n))),
  set: (e, t, n, r) => {
    const o = e[t];
    return Ct(o) && !Ct(n) ? ((o.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function Ft(e) {
  return vt(e) ? e : new Proxy(e, Pt);
}
class Lt {
  constructor(e) {
    (this.__v_isRef = !0), (this._value = void 0);
    const t = (this.dep = new Se()),
      { get: n, set: r } = e(t.track.bind(t), t.trigger.bind(t));
    (this._get = n), (this._set = r);
  }
  get value() {
    return (this._value = this._get());
  }
  set value(e) {
    this._set(e);
  }
}
function Nt(e) {
  return new Lt(e);
}
class It {
  constructor(e, t, n) {
    (this._object = e),
      (this._key = t),
      (this._defaultValue = n),
      (this.__v_isRef = !0),
      (this._value = void 0);
  }
  get value() {
    const e = this._object[this._key];
    return (this._value = void 0 === e ? this._defaultValue : e);
  }
  set value(e) {
    this._object[this._key] = e;
  }
  get dep() {
    return (function (e, t) {
      const n = Oe.get(e);
      return n && n.get(t);
    })(wt(this._object), this._key);
  }
}
class Rt {
  constructor(e) {
    (this._getter = e),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !0),
      (this._value = void 0);
  }
  get value() {
    return (this._value = this._getter());
  }
}
function Mt(e, t, n) {
  return Ct(e)
    ? e
    : v(e)
    ? new Rt(e)
    : _(e) && arguments.length > 1
    ? Bt(e, t, n)
    : Et(e);
}
function Bt(e, t, n) {
  const r = e[t];
  return Ct(r) ? r : new It(e, t, n);
}
class jt {
  constructor(e, t, n) {
    (this.fn = e),
      (this.setter = t),
      (this._value = void 0),
      (this.dep = new Se(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Ee - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !t),
      (this.isSSR = n);
  }
  notify() {
    if (((this.flags |= 16), !(8 & this.flags) && ne !== this))
      return de(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return ye(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
const $t = {},
  Ut = new WeakMap();
let qt;
function Ht(e, t, n = r) {
  const {
      immediate: o,
      deep: s,
      once: a,
      scheduler: l,
      augmentJob: c,
      call: p,
    } = n,
    d = (e) => (s ? e : bt(e) || !1 === s || 0 === s ? zt(e, 1) : zt(e));
  let h,
    m,
    g,
    y,
    b = !1,
    _ = !1;
  if (
    (Ct(e)
      ? ((m = () => e.value), (b = bt(e)))
      : vt(e)
      ? ((m = () => d(e)), (b = !0))
      : f(e)
      ? ((_ = !0),
        (b = e.some((e) => vt(e) || bt(e))),
        (m = () =>
          e.map((e) =>
            Ct(e) ? e.value : vt(e) ? d(e) : v(e) ? (p ? p(e, 2) : e()) : void 0
          )))
      : (m = v(e)
          ? t
            ? p
              ? () => p(e, 2)
              : e
            : () => {
                if (g) {
                  xe();
                  try {
                    g();
                  } finally {
                    ke();
                  }
                }
                const t = qt;
                qt = h;
                try {
                  return p ? p(e, 3, [y]) : e(y);
                } finally {
                  qt = t;
                }
              }
          : i),
    t && s)
  ) {
    const e = m,
      t = !0 === s ? 1 / 0 : s;
    m = () => zt(e(), t);
  }
  const w = ie(),
    D = () => {
      h.stop(), w && w.active && u(w.effects, h);
    };
  if (a && t) {
    const e = t;
    t = (...t) => {
      e(...t), D();
    };
  }
  let x = _ ? new Array(e.length).fill($t) : $t;
  const k = (e) => {
    if (1 & h.flags && (h.dirty || e))
      if (t) {
        const e = h.run();
        if (s || b || (_ ? e.some((e, t) => N(e, x[t])) : N(e, x))) {
          g && g();
          const n = qt;
          qt = h;
          try {
            const n = [e, x === $t ? void 0 : _ && x[0] === $t ? [] : x, y];
            p ? p(t, 3, n) : t(...n), (x = e);
          } finally {
            qt = n;
          }
        }
      } else h.run();
  };
  return (
    c && c(k),
    (h = new le(m)),
    (h.scheduler = l ? () => l(k, !1) : k),
    (y = (e) =>
      (function (e, t = !1, n = qt) {
        if (n) {
          let t = Ut.get(n);
          t || Ut.set(n, (t = [])), t.push(e);
        }
      })(e, !1, h)),
    (g = h.onStop =
      () => {
        const e = Ut.get(h);
        if (e) {
          if (p) p(e, 4);
          else for (const t of e) t();
          Ut.delete(h);
        }
      }),
    t ? (o ? k(!0) : (x = h.run())) : l ? l(k.bind(null, !0), !0) : h.run(),
    (D.pause = h.pause.bind(h)),
    (D.resume = h.resume.bind(h)),
    (D.stop = D),
    D
  );
}
function zt(e, t = 1 / 0, n) {
  if (t <= 0 || !_(e) || e.__v_skip) return e;
  if ((n = n || new Set()).has(e)) return e;
  if ((n.add(e), t--, Ct(e))) zt(e.value, t, n);
  else if (f(e)) for (let r = 0; r < e.length; r++) zt(e[r], t, n);
  else if (m(e) || h(e))
    e.forEach((e) => {
      zt(e, t, n);
    });
  else if (k(e)) {
    for (const r in e) zt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && zt(e[r], t, n);
  }
  return e;
}
function Vt(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    Yt(o, t, n);
  }
}
function Wt(e, t, n, r) {
  if (v(e)) {
    const o = Vt(e, t, n, r);
    return (
      o &&
        w(o) &&
        o.catch((e) => {
          Yt(e, t, n);
        }),
      o
    );
  }
  if (f(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++) o.push(Wt(e[i], t, n, r));
    return o;
  }
}
function Yt(e, t, n, o = !0) {
  t && t.vnode;
  const { errorHandler: i, throwUnhandledErrorInProduction: s } =
    (t && t.appContext.config) || r;
  if (t) {
    let r = t.parent;
    const o = t.proxy,
      s = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const t = r.ec;
      if (t)
        for (let n = 0; n < t.length; n++) if (!1 === t[n](e, o, s)) return;
      r = r.parent;
    }
    if (i) return xe(), Vt(i, null, 10, [e, o, s]), void ke();
  }
  !(function (e, t, n, r = !0, o = !1) {
    if (o) throw e;
  })(e, 0, 0, o, s);
}
const Xt = [];
let Gt = -1;
const Kt = [];
let Jt = null,
  Qt = 0;
const Zt = Promise.resolve();
let en = null;
function tn(e) {
  const t = en || Zt;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function nn(e) {
  if (!(1 & e.flags)) {
    const t = ln(e),
      n = Xt[Xt.length - 1];
    !n || (!(2 & e.flags) && t >= ln(n))
      ? Xt.push(e)
      : Xt.splice(
          (function (e) {
            let t = Gt + 1,
              n = Xt.length;
            for (; t < n; ) {
              const r = (t + n) >>> 1,
                o = Xt[r],
                i = ln(o);
              i < e || (i === e && 2 & o.flags) ? (t = r + 1) : (n = r);
            }
            return t;
          })(t),
          0,
          e
        ),
      (e.flags |= 1),
      rn();
  }
}
function rn() {
  en || (en = Zt.then(cn));
}
function on(e) {
  f(e)
    ? Kt.push(...e)
    : Jt && -1 === e.id
    ? Jt.splice(Qt + 1, 0, e)
    : 1 & e.flags || (Kt.push(e), (e.flags |= 1)),
    rn();
}
function sn(e, t, n = Gt + 1) {
  for (; n < Xt.length; n++) {
    const t = Xt[n];
    if (t && 2 & t.flags) {
      if (e && t.id !== e.uid) continue;
      Xt.splice(n, 1),
        n--,
        4 & t.flags && (t.flags &= -2),
        t(),
        4 & t.flags || (t.flags &= -2);
    }
  }
}
function an(e) {
  if (Kt.length) {
    const e = [...new Set(Kt)].sort((e, t) => ln(e) - ln(t));
    if (((Kt.length = 0), Jt)) return void Jt.push(...e);
    for (Jt = e, Qt = 0; Qt < Jt.length; Qt++) {
      const e = Jt[Qt];
      4 & e.flags && (e.flags &= -2), 8 & e.flags || e(), (e.flags &= -2);
    }
    (Jt = null), (Qt = 0);
  }
}
const ln = (e) => (null == e.id ? (2 & e.flags ? -1 : 1 / 0) : e.id);
function cn(e) {
  try {
    for (Gt = 0; Gt < Xt.length; Gt++) {
      const e = Xt[Gt];
      !e ||
        8 & e.flags ||
        (4 & e.flags && (e.flags &= -2),
        Vt(e, e.i, e.i ? 15 : 14),
        4 & e.flags || (e.flags &= -2));
    }
  } finally {
    for (; Gt < Xt.length; Gt++) {
      const e = Xt[Gt];
      e && (e.flags &= -2);
    }
    (Gt = -1),
      (Xt.length = 0),
      an(),
      (en = null),
      (Xt.length || Kt.length) && cn();
  }
}
let un = null,
  pn = null;
function dn(e) {
  const t = un;
  return (un = e), (pn = (e && e.type.__scopeId) || null), t;
}
function fn(e, t = un, n) {
  if (!t) return e;
  if (e._n) return e;
  const r = (...n) => {
    r._d && ai(-1);
    const o = dn(t);
    let i;
    try {
      i = e(...n);
    } finally {
      dn(o), r._d && ai(1);
    }
    return i;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function hn(e, t) {
  if (null === un) return e;
  const n = Ui(un),
    o = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [e, s, a, l = r] = t[i];
    e &&
      (v(e) && (e = { mounted: e, updated: e }),
      e.deep && zt(s),
      o.push({
        dir: e,
        instance: n,
        value: s,
        oldValue: void 0,
        arg: a,
        modifiers: l,
      }));
  }
  return e;
}
function mn(e, t, n, r) {
  const o = e.dirs,
    i = t && t.dirs;
  for (let s = 0; s < o.length; s++) {
    const a = o[s];
    i && (a.oldValue = i[s].value);
    let l = a.dir[r];
    l && (xe(), Wt(l, n, 8, [e.el, a, e, t]), ke());
  }
}
const gn = Symbol("_vte"),
  vn = (e) => e.__isTeleport,
  yn = (e) => e && (e.disabled || "" === e.disabled),
  bn = (e) => e && (e.defer || "" === e.defer),
  _n = (e) => "undefined" != typeof SVGElement && e instanceof SVGElement,
  wn = (e) => "function" == typeof MathMLElement && e instanceof MathMLElement,
  Dn = (e, t) => {
    const n = e && e.to;
    if (y(n)) {
      if (t) {
        return t(n);
      }
      return null;
    }
    return n;
  },
  xn = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, r, o, i, s, a, l, c) {
      const {
          mc: u,
          pc: p,
          pbc: d,
          o: { insert: f, querySelector: h, createText: m, createComment: g },
        } = c,
        v = yn(t.props);
      let { shapeFlag: y, children: b, dynamicChildren: _ } = t;
      if (null == e) {
        const e = (t.el = m("")),
          c = (t.anchor = m(""));
        f(e, n, r), f(c, n, r);
        const p = (e, t) => {
            16 & y &&
              (o && o.isCE && (o.ce._teleportTarget = e),
              u(b, e, t, o, i, s, a, l));
          },
          d = () => {
            const e = (t.target = Dn(t.props, h)),
              n = Tn(e, t, m, f);
            e &&
              ("svg" !== s && _n(e)
                ? (s = "svg")
                : "mathml" !== s && wn(e) && (s = "mathml"),
              v || (p(e, n), En(t, !1)));
          };
        v && (p(n, c), En(t, !0)),
          bn(t.props)
            ? bo(() => {
                d(), (t.el.__isMounted = !0);
              }, i)
            : d();
      } else {
        if (bn(t.props) && !e.el.__isMounted)
          return void bo(() => {
            xn.process(e, t, n, r, o, i, s, a, l, c), delete e.el.__isMounted;
          }, i);
        (t.el = e.el), (t.targetStart = e.targetStart);
        const u = (t.anchor = e.anchor),
          f = (t.target = e.target),
          m = (t.targetAnchor = e.targetAnchor),
          g = yn(e.props),
          y = g ? n : f,
          b = g ? u : m;
        if (
          ("svg" === s || _n(f)
            ? (s = "svg")
            : ("mathml" === s || wn(f)) && (s = "mathml"),
          _
            ? (d(e.dynamicChildren, _, y, o, i, s, a), ko(e, t, !0))
            : l || p(e, t, y, b, o, i, s, a, !1),
          v)
        )
          g
            ? t.props &&
              e.props &&
              t.props.to !== e.props.to &&
              (t.props.to = e.props.to)
            : kn(t, n, u, c, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const e = (t.target = Dn(t.props, h));
          e && kn(t, e, null, c, 0);
        } else g && kn(t, f, m, c, 1);
        En(t, v);
      }
    },
    remove(e, t, n, { um: r, o: { remove: o } }, i) {
      const {
        shapeFlag: s,
        children: a,
        anchor: l,
        targetStart: c,
        targetAnchor: u,
        target: p,
        props: d,
      } = e;
      if ((p && (o(c), o(u)), i && o(l), 16 & s)) {
        const e = i || !yn(d);
        for (let o = 0; o < a.length; o++) {
          const i = a[o];
          r(i, t, n, e, !!i.dynamicChildren);
        }
      }
    },
    move: kn,
    hydrate: function (
      e,
      t,
      n,
      r,
      o,
      i,
      {
        o: {
          nextSibling: s,
          parentNode: a,
          querySelector: l,
          insert: c,
          createText: u,
        },
      },
      p
    ) {
      const d = (t.target = Dn(t.props, l));
      if (d) {
        const l = yn(t.props),
          f = d._lpa || d.firstChild;
        if (16 & t.shapeFlag)
          if (l)
            (t.anchor = p(s(e), t, a(e), n, r, o, i)),
              (t.targetStart = f),
              (t.targetAnchor = f && s(f));
          else {
            t.anchor = s(e);
            let a = f;
            for (; a; ) {
              if (a && 8 === a.nodeType)
                if ("teleport start anchor" === a.data) t.targetStart = a;
                else if ("teleport anchor" === a.data) {
                  (t.targetAnchor = a),
                    (d._lpa = t.targetAnchor && s(t.targetAnchor));
                  break;
                }
              a = s(a);
            }
            t.targetAnchor || Tn(d, t, u, c), p(f && s(f), t, d, n, r, o, i);
          }
        En(t, l);
      }
      return t.anchor && s(t.anchor);
    },
  };
function kn(e, t, n, { o: { insert: r }, m: o }, i = 2) {
  0 === i && r(e.targetAnchor, t, n);
  const { el: s, anchor: a, shapeFlag: l, children: c, props: u } = e,
    p = 2 === i;
  if ((p && r(s, t, n), (!p || yn(u)) && 16 & l))
    for (let d = 0; d < c.length; d++) o(c[d], t, n, 2);
  p && r(a, t, n);
}
const Cn = xn;
function En(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, o;
    for (
      t
        ? ((r = e.el), (o = e.anchor))
        : ((r = e.targetStart), (o = e.targetAnchor));
      r && r !== o;

    )
      1 === r.nodeType && r.setAttribute("data-v-owner", n.uid),
        (r = r.nextSibling);
    n.ut();
  }
}
function Tn(e, t, n, r) {
  const o = (t.targetStart = n("")),
    i = (t.targetAnchor = n(""));
  return (o[gn] = i), e && (r(o, e), r(i, e)), i;
}
const Sn = Symbol("_leaveCb"),
  An = Symbol("_enterCb");
const On = [Function, Array],
  Pn = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: On,
    onEnter: On,
    onAfterEnter: On,
    onEnterCancelled: On,
    onBeforeLeave: On,
    onLeave: On,
    onAfterLeave: On,
    onLeaveCancelled: On,
    onBeforeAppear: On,
    onAppear: On,
    onAfterAppear: On,
    onAppearCancelled: On,
  },
  Fn = (e) => {
    const t = e.subTree;
    return t.component ? Fn(t.component) : t;
  };
function Ln(e) {
  let t = e[0];
  if (e.length > 1)
    for (const n of e)
      if (n.type !== ei) {
        t = n;
        break;
      }
  return t;
}
const Nn = {
  name: "BaseTransition",
  props: Pn,
  setup(e, { slots: t }) {
    const n = Ai(),
      r = (function () {
        const e = {
          isMounted: !1,
          isLeaving: !1,
          isUnmounting: !1,
          leavingVNodes: new Map(),
        };
        return (
          fr(() => {
            e.isMounted = !0;
          }),
          gr(() => {
            e.isUnmounting = !0;
          }),
          e
        );
      })();
    return () => {
      const o = t.default && $n(t.default(), !0);
      if (!o || !o.length) return;
      const i = Ln(o),
        s = wt(e),
        { mode: a } = s;
      if (r.isLeaving) return Mn(i);
      const l = Bn(i);
      if (!l) return Mn(i);
      let c = Rn(l, s, r, n, (e) => (c = e));
      l.type !== ei && jn(l, c);
      let u = n.subTree && Bn(n.subTree);
      if (u && u.type !== ei && !di(l, u) && Fn(n).type !== ei) {
        let e = Rn(u, s, r, n);
        if ((jn(u, e), "out-in" === a && l.type !== ei))
          return (
            (r.isLeaving = !0),
            (e.afterLeave = () => {
              (r.isLeaving = !1),
                8 & n.job.flags || n.update(),
                delete e.afterLeave,
                (u = void 0);
            }),
            Mn(i)
          );
        "in-out" === a && l.type !== ei
          ? (e.delayLeave = (e, t, n) => {
              (In(r, u)[String(u.key)] = u),
                (e[Sn] = () => {
                  t(), (e[Sn] = void 0), delete c.delayedLeave, (u = void 0);
                }),
                (c.delayedLeave = () => {
                  n(), delete c.delayedLeave, (u = void 0);
                });
            })
          : (u = void 0);
      } else u && (u = void 0);
      return i;
    };
  },
};
function In(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function Rn(e, t, n, r, o) {
  const {
      appear: i,
      mode: s,
      persisted: a = !1,
      onBeforeEnter: l,
      onEnter: c,
      onAfterEnter: u,
      onEnterCancelled: p,
      onBeforeLeave: d,
      onLeave: h,
      onAfterLeave: m,
      onLeaveCancelled: g,
      onBeforeAppear: v,
      onAppear: y,
      onAfterAppear: b,
      onAppearCancelled: _,
    } = t,
    w = String(e.key),
    D = In(n, e),
    x = (e, t) => {
      e && Wt(e, r, 9, t);
    },
    k = (e, t) => {
      const n = t[1];
      x(e, t),
        f(e) ? e.every((e) => e.length <= 1) && n() : e.length <= 1 && n();
    },
    C = {
      mode: s,
      persisted: a,
      beforeEnter(t) {
        let r = l;
        if (!n.isMounted) {
          if (!i) return;
          r = v || l;
        }
        t[Sn] && t[Sn](!0);
        const o = D[w];
        o && di(e, o) && o.el[Sn] && o.el[Sn](), x(r, [t]);
      },
      enter(e) {
        let t = c,
          r = u,
          o = p;
        if (!n.isMounted) {
          if (!i) return;
          (t = y || c), (r = b || u), (o = _ || p);
        }
        let s = !1;
        const a = (e[An] = (t) => {
          s ||
            ((s = !0),
            x(t ? o : r, [e]),
            C.delayedLeave && C.delayedLeave(),
            (e[An] = void 0));
        });
        t ? k(t, [e, a]) : a();
      },
      leave(t, r) {
        const o = String(e.key);
        if ((t[An] && t[An](!0), n.isUnmounting)) return r();
        x(d, [t]);
        let i = !1;
        const s = (t[Sn] = (n) => {
          i ||
            ((i = !0),
            r(),
            x(n ? g : m, [t]),
            (t[Sn] = void 0),
            D[o] === e && delete D[o]);
        });
        (D[o] = e), h ? k(h, [t, s]) : s();
      },
      clone(e) {
        const i = Rn(e, t, n, r, o);
        return o && o(i), i;
      },
    };
  return C;
}
function Mn(e) {
  if (tr(e)) return ((e = vi(e)).children = null), e;
}
function Bn(e) {
  if (!tr(e)) return vn(e.type) && e.children ? Ln(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (16 & t) return n[0];
    if (32 & t && v(n.default)) return n.default();
  }
}
function jn(e, t) {
  6 & e.shapeFlag && e.component
    ? ((e.transition = t), jn(e.component.subTree, t))
    : 128 & e.shapeFlag
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function $n(e, t = !1, n) {
  let r = [],
    o = 0;
  for (let i = 0; i < e.length; i++) {
    let s = e[i];
    const a = null == n ? s.key : String(n) + String(null != s.key ? s.key : i);
    s.type === Qo
      ? (128 & s.patchFlag && o++, (r = r.concat($n(s.children, t, a))))
      : (t || s.type !== ei) && r.push(null != a ? vi(s, { key: a }) : s);
  }
  if (o > 1) for (let i = 0; i < r.length; i++) r[i].patchFlag = -2;
  return r;
}
function Un(e, t) {
  return v(e) ? (() => c({ name: e.name }, t, { setup: e }))() : e;
}
function qn(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Hn(e, t, n, o, i = !1) {
  if (f(e))
    return void e.forEach((e, r) => Hn(e, t && (f(t) ? t[r] : t), n, o, i));
  if (Qn(o) && !i)
    return void (
      512 & o.shapeFlag &&
      o.type.__asyncResolved &&
      o.component.subTree.component &&
      Hn(e, t, n, o.component.subTree)
    );
  const s = 4 & o.shapeFlag ? Ui(o.component) : o.el,
    a = i ? null : s,
    { i: l, r: c } = e,
    p = t && t.r,
    h = l.refs === r ? (l.refs = {}) : l.refs,
    m = l.setupState,
    g = wt(m),
    b = m === r ? () => !1 : (e) => d(g, e);
  if (
    (null != p &&
      p !== c &&
      (y(p)
        ? ((h[p] = null), b(p) && (m[p] = null))
        : Ct(p) && (p.value = null)),
    v(c))
  )
    Vt(c, l, 12, [a, h]);
  else {
    const t = y(c),
      r = Ct(c);
    if (t || r) {
      const o = () => {
        if (e.f) {
          const n = t ? (b(c) ? m[c] : h[c]) : c.value;
          i
            ? f(n) && u(n, s)
            : f(n)
            ? n.includes(s) || n.push(s)
            : t
            ? ((h[c] = [s]), b(c) && (m[c] = h[c]))
            : ((c.value = [s]), e.k && (h[e.k] = c.value));
        } else
          t
            ? ((h[c] = a), b(c) && (m[c] = a))
            : r && ((c.value = a), e.k && (h[e.k] = a));
      };
      a ? ((o.id = -1), bo(o, n)) : o();
    }
  }
}
let zn = !1;
const Vn = () => {
    zn || (zn = !0);
  },
  Wn = (e) => {
    if (1 === e.nodeType)
      return ((e) =>
        e.namespaceURI.includes("svg") && "foreignObject" !== e.tagName)(e)
        ? "svg"
        : ((e) => e.namespaceURI.includes("MathML"))(e)
        ? "mathml"
        : void 0;
  },
  Yn = (e) => 8 === e.nodeType;
function Xn(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: r,
        createText: o,
        nextSibling: i,
        parentNode: s,
        remove: l,
        insert: c,
        createComment: u,
      },
    } = e,
    p = (n, r, a, l, u, b = !1) => {
      b = b || !!r.dynamicChildren;
      const _ = Yn(n) && "[" === n.data,
        w = () => m(n, r, a, l, u, _),
        { type: D, ref: x, shapeFlag: k, patchFlag: C } = r;
      let E = n.nodeType;
      (r.el = n), -2 === C && ((b = !1), (r.dynamicChildren = null));
      let T = null;
      switch (D) {
        case Zo:
          3 !== E
            ? "" === r.children
              ? (c((r.el = o("")), s(n), n), (T = n))
              : (T = w())
            : (n.data !== r.children && (Vn(), (n.data = r.children)),
              (T = i(n)));
          break;
        case ei:
          y(n)
            ? ((T = i(n)), v((r.el = n.content.firstChild), n, a))
            : (T = 8 !== E || _ ? w() : i(n));
          break;
        case ti:
          if ((_ && (E = (n = i(n)).nodeType), 1 === E || 3 === E)) {
            T = n;
            const e = !r.children.length;
            for (let t = 0; t < r.staticCount; t++)
              e && (r.children += 1 === T.nodeType ? T.outerHTML : T.data),
                t === r.staticCount - 1 && (r.anchor = T),
                (T = i(T));
            return _ ? i(T) : T;
          }
          w();
          break;
        case Qo:
          T = _ ? h(n, r, a, l, u, b) : w();
          break;
        default:
          if (1 & k)
            T =
              (1 === E && r.type.toLowerCase() === n.tagName.toLowerCase()) ||
              y(n)
                ? d(n, r, a, l, u, b)
                : w();
          else if (6 & k) {
            r.slotScopeIds = u;
            const e = s(n);
            if (
              ((T = _
                ? g(n)
                : Yn(n) && "teleport start" === n.data
                ? g(n, n.data, "teleport end")
                : i(n)),
              t(r, e, null, a, l, Wn(e), b),
              Qn(r) && !r.type.__asyncResolved)
            ) {
              let t;
              _
                ? ((t = gi(Qo)),
                  (t.anchor = T ? T.previousSibling : e.lastChild))
                : (t = 3 === n.nodeType ? yi("") : gi("div")),
                (t.el = n),
                (r.component.subTree = t);
            }
          } else
            64 & k
              ? (T = 8 !== E ? w() : r.type.hydrate(n, r, a, l, u, b, e, f))
              : 128 & k &&
                (T = r.type.hydrate(n, r, a, l, Wn(s(n)), u, b, e, p));
      }
      return null != x && Hn(x, null, l, r), T;
    },
    d = (e, t, n, o, i, s) => {
      s = s || !!t.dynamicChildren;
      const {
          type: c,
          props: u,
          patchFlag: p,
          shapeFlag: d,
          dirs: h,
          transition: m,
        } = t,
        g = "input" === c || "option" === c;
      if (g || -1 !== p) {
        h && mn(t, null, n, "created");
        let c,
          b = !1;
        if (y(e)) {
          b = xo(null, m) && n && n.vnode.props && n.vnode.props.appear;
          const r = e.content.firstChild;
          b && m.beforeEnter(r), v(r, e, n), (t.el = e = r);
        }
        if (16 & d && (!u || (!u.innerHTML && !u.textContent))) {
          let r = f(e.firstChild, t, e, n, o, i, s);
          for (; r; ) {
            Jn(e, 1) || Vn();
            const t = r;
            (r = r.nextSibling), l(t);
          }
        } else if (8 & d) {
          let n = t.children;
          "\n" !== n[0] ||
            ("PRE" !== e.tagName && "TEXTAREA" !== e.tagName) ||
            (n = n.slice(1)),
            e.textContent !== n &&
              (Jn(e, 0) || Vn(), (e.textContent = t.children));
        }
        if (u)
          if (g || !s || 48 & p) {
            const t = e.tagName.includes("-");
            for (const o in u)
              ((g && (o.endsWith("value") || "indeterminate" === o)) ||
                (a(o) && !E(o)) ||
                "." === o[0] ||
                t) &&
                r(e, o, null, u[o], void 0, n);
          } else if (u.onClick) r(e, "onClick", null, u.onClick, void 0, n);
          else if (4 & p && vt(u.style)) for (const e in u.style) u.style[e];
        (c = u && u.onVnodeBeforeMount) && Ci(c, n, t),
          h && mn(t, null, n, "beforeMount"),
          ((c = u && u.onVnodeMounted) || h || b) &&
            Ko(() => {
              c && Ci(c, n, t), b && m.enter(e), h && mn(t, null, n, "mounted");
            }, o);
      }
      return e.nextSibling;
    },
    f = (e, t, r, s, a, l, u) => {
      u = u || !!t.dynamicChildren;
      const d = t.children,
        f = d.length;
      for (let h = 0; h < f; h++) {
        const t = u ? d[h] : (d[h] = wi(d[h])),
          m = t.type === Zo;
        e
          ? (m &&
              !u &&
              h + 1 < f &&
              wi(d[h + 1]).type === Zo &&
              (c(o(e.data.slice(t.children.length)), r, i(e)),
              (e.data = t.children)),
            (e = p(e, t, s, a, l, u)))
          : m && !t.children
          ? c((t.el = o("")), r)
          : (Jn(r, 1) || Vn(), n(null, t, r, null, s, a, Wn(r), l));
      }
      return e;
    },
    h = (e, t, n, r, o, a) => {
      const { slotScopeIds: l } = t;
      l && (o = o ? o.concat(l) : l);
      const p = s(e),
        d = f(i(e), t, p, n, r, o, a);
      return d && Yn(d) && "]" === d.data
        ? i((t.anchor = d))
        : (Vn(), c((t.anchor = u("]")), p, d), d);
    },
    m = (e, t, r, o, a, c) => {
      if ((Jn(e.parentElement, 1) || Vn(), (t.el = null), c)) {
        const t = g(e);
        for (;;) {
          const n = i(e);
          if (!n || n === t) break;
          l(n);
        }
      }
      const u = i(e),
        p = s(e);
      return (
        l(e),
        n(null, t, p, u, r, o, Wn(p), a),
        r && ((r.vnode.el = t.el), qo(r, t.el)),
        u
      );
    },
    g = (e, t = "[", n = "]") => {
      let r = 0;
      for (; e; )
        if ((e = i(e)) && Yn(e) && (e.data === t && r++, e.data === n)) {
          if (0 === r) return i(e);
          r--;
        }
      return e;
    },
    v = (e, t, n) => {
      const r = t.parentNode;
      r && r.replaceChild(e, t);
      let o = n;
      for (; o; )
        o.vnode.el === t && (o.vnode.el = o.subTree.el = e), (o = o.parent);
    },
    y = (e) => 1 === e.nodeType && "TEMPLATE" === e.tagName;
  return [
    (e, t) => {
      if (!t.hasChildNodes()) return n(null, e, t), an(), void (t._vnode = e);
      p(t.firstChild, e, null, null, null), an(), (t._vnode = e);
    },
    p,
  ];
}
const Gn = "data-allow-mismatch",
  Kn = { 0: "text", 1: "children", 2: "class", 3: "style", 4: "attribute" };
function Jn(e, t) {
  if (0 === t || 1 === t)
    for (; e && !e.hasAttribute(Gn); ) e = e.parentElement;
  const n = e && e.getAttribute(Gn);
  if (null == n) return !1;
  if ("" === n) return !0;
  {
    const e = n.split(",");
    return (
      !(0 !== t || !e.includes("children")) || n.split(",").includes(Kn[t])
    );
  }
}
$().requestIdleCallback, $().cancelIdleCallback;
const Qn = (e) => !!e.type.__asyncLoader;
function Zn(e) {
  v(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: r,
    delay: o = 200,
    hydrate: i,
    timeout: s,
    suspensible: a = !0,
    onError: l,
  } = e;
  let c,
    u = null,
    p = 0;
  const d = () => {
    let e;
    return (
      u ||
      (e = u =
        t()
          .catch((e) => {
            if (((e = e instanceof Error ? e : new Error(String(e))), l))
              return new Promise((t, n) => {
                l(
                  e,
                  () => t((p++, (u = null), d())),
                  () => n(e),
                  p + 1
                );
              });
            throw e;
          })
          .then((t) =>
            e !== u && u
              ? u
              : (t &&
                  (t.__esModule || "Module" === t[Symbol.toStringTag]) &&
                  (t = t.default),
                (c = t),
                t)
          ))
    );
  };
  return Un({
    name: "AsyncComponentWrapper",
    __asyncLoader: d,
    __asyncHydrate(e, t, n) {
      const r = i
        ? () => {
            const r = i(n, (t) =>
              (function (e, t) {
                if (Yn(e) && "[" === e.data) {
                  let n = 1,
                    r = e.nextSibling;
                  for (; r; ) {
                    if (1 === r.nodeType) {
                      if (!1 === t(r)) break;
                    } else if (Yn(r))
                      if ("]" === r.data) {
                        if (0 == --n) break;
                      } else "[" === r.data && n++;
                    r = r.nextSibling;
                  }
                } else t(e);
              })(e, t)
            );
            r && (t.bum || (t.bum = [])).push(r);
          }
        : n;
      c ? r() : d().then(() => !t.isUnmounted && r());
    },
    get __asyncResolved() {
      return c;
    },
    setup() {
      const e = Si;
      if ((qn(e), c)) return () => er(c, e);
      const t = (t) => {
        (u = null), Yt(t, e, 13, !r);
      };
      if ((a && e.suspense) || Ri)
        return d()
          .then((t) => () => er(t, e))
          .catch((e) => (t(e), () => (r ? gi(r, { error: e }) : null)));
      const i = Et(!1),
        l = Et(),
        p = Et(!!o);
      return (
        o &&
          setTimeout(() => {
            p.value = !1;
          }, o),
        null != s &&
          setTimeout(() => {
            if (!i.value && !l.value) {
              const e = new Error(`Async component timed out after ${s}ms.`);
              t(e), (l.value = e);
            }
          }, s),
        d()
          .then(() => {
            (i.value = !0), e.parent && tr(e.parent.vnode) && e.parent.update();
          })
          .catch((e) => {
            t(e), (l.value = e);
          }),
        () =>
          i.value && c
            ? er(c, e)
            : l.value && r
            ? gi(r, { error: l.value })
            : n && !p.value
            ? gi(n)
            : void 0
      );
    },
  });
}
function er(e, t) {
  const { ref: n, props: r, children: o, ce: i } = t.vnode,
    s = gi(e, r, o);
  return (s.ref = n), (s.ce = i), delete t.vnode.ce, s;
}
const tr = (e) => e.type.__isKeepAlive,
  nr = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(e, { slots: t }) {
      const n = Ai(),
        r = n.ctx;
      if (!r.renderer)
        return () => {
          const e = t.default && t.default();
          return e && 1 === e.length ? e[0] : e;
        };
      const o = new Map(),
        i = new Set();
      let s = null;
      const a = n.suspense,
        {
          renderer: {
            p: l,
            m: c,
            um: u,
            o: { createElement: p },
          },
        } = r,
        d = p("div");
      function f(e) {
        lr(e), u(e, n, a, !0);
      }
      function h(e) {
        o.forEach((t, n) => {
          const r = qi(t.type);
          r && !e(r) && m(n);
        });
      }
      function m(e) {
        const t = o.get(e);
        !t || (s && di(t, s)) ? s && lr(s) : f(t), o.delete(e), i.delete(e);
      }
      (r.activate = (e, t, n, r, o) => {
        const i = e.component;
        c(e, t, n, 0, a),
          l(i.vnode, e, t, n, i, a, r, e.slotScopeIds, o),
          bo(() => {
            (i.isDeactivated = !1), i.a && I(i.a);
            const t = e.props && e.props.onVnodeMounted;
            t && Ci(t, i.parent, e);
          }, a);
      }),
        (r.deactivate = (e) => {
          const t = e.component;
          Eo(t.m),
            Eo(t.a),
            c(e, d, null, 1, a),
            bo(() => {
              t.da && I(t.da);
              const n = e.props && e.props.onVnodeUnmounted;
              n && Ci(n, t.parent, e), (t.isDeactivated = !0);
            }, a);
        }),
        Ao(
          () => [e.include, e.exclude],
          ([e, t]) => {
            e && h((t) => rr(e, t)), t && h((e) => !rr(t, e));
          },
          { flush: "post", deep: !0 }
        );
      let g = null;
      const v = () => {
        null != g &&
          (Ho(n.subTree.type)
            ? bo(() => {
                o.set(g, cr(n.subTree));
              }, n.subTree.suspense)
            : o.set(g, cr(n.subTree)));
      };
      return (
        fr(v),
        mr(v),
        gr(() => {
          o.forEach((e) => {
            const { subTree: t, suspense: r } = n,
              o = cr(t);
            if (e.type !== o.type || e.key !== o.key) f(e);
            else {
              lr(o);
              const e = o.component.da;
              e && bo(e, r);
            }
          });
        }),
        () => {
          if (((g = null), !t.default)) return (s = null);
          const n = t.default(),
            r = n[0];
          if (n.length > 1) return (s = null), n;
          if (!(pi(r) && (4 & r.shapeFlag || 128 & r.shapeFlag)))
            return (s = null), r;
          let a = cr(r);
          if (a.type === ei) return (s = null), a;
          const l = a.type,
            c = qi(Qn(a) ? a.type.__asyncResolved || {} : l),
            { include: u, exclude: p, max: d } = e;
          if ((u && (!c || !rr(u, c))) || (p && c && rr(p, c)))
            return (a.shapeFlag &= -257), (s = a), r;
          const f = null == a.key ? l : a.key,
            h = o.get(f);
          return (
            a.el && ((a = vi(a)), 128 & r.shapeFlag && (r.ssContent = a)),
            (g = f),
            h
              ? ((a.el = h.el),
                (a.component = h.component),
                a.transition && jn(a, a.transition),
                (a.shapeFlag |= 512),
                i.delete(f),
                i.add(f))
              : (i.add(f),
                d && i.size > parseInt(d, 10) && m(i.values().next().value)),
            (a.shapeFlag |= 256),
            (s = a),
            Ho(r.type) ? r : a
          );
        }
      );
    },
  };
function rr(e, t) {
  return f(e)
    ? e.some((e) => rr(e, t))
    : y(e)
    ? e.split(",").includes(t)
    : "[object RegExp]" === x(e) && ((e.lastIndex = 0), e.test(t));
}
function or(e, t) {
  sr(e, "a", t);
}
function ir(e, t) {
  sr(e, "da", t);
}
function sr(e, t, n = Si) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let t = n;
      for (; t; ) {
        if (t.isDeactivated) return;
        t = t.parent;
      }
      return e();
    });
  if ((ur(t, r, n), n)) {
    let e = n.parent;
    for (; e && e.parent; )
      tr(e.parent.vnode) && ar(r, t, n, e), (e = e.parent);
  }
}
function ar(e, t, n, r) {
  const o = ur(t, e, r, !0);
  vr(() => {
    u(r[t], o);
  }, n);
}
function lr(e) {
  (e.shapeFlag &= -257), (e.shapeFlag &= -513);
}
function cr(e) {
  return 128 & e.shapeFlag ? e.ssContent : e;
}
function ur(e, t, n = Si, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...r) => {
          xe();
          const o = Fi(n),
            i = Wt(t, n, e, r);
          return o(), ke(), i;
        });
    return r ? o.unshift(i) : o.push(i), i;
  }
}
const pr =
    (e) =>
    (t, n = Si) => {
      (Ri && "sp" !== e) || ur(e, (...e) => t(...e), n);
    },
  dr = pr("bm"),
  fr = pr("m"),
  hr = pr("bu"),
  mr = pr("u"),
  gr = pr("bum"),
  vr = pr("um"),
  yr = pr("sp"),
  br = pr("rtg"),
  _r = pr("rtc");
function wr(e, t = Si) {
  ur("ec", e, t);
}
const Dr = "components";
function xr(e, t) {
  return Er(Dr, e, !0, t) || e;
}
const kr = Symbol.for("v-ndc");
function Cr(e) {
  return y(e) ? Er(Dr, e, !1) || e : e || kr;
}
function Er(e, t, n = !0, r = !1) {
  const o = un || Si;
  if (o) {
    const n = o.type;
    {
      const e = qi(n, !1);
      if (e && (e === t || e === A(t) || e === F(A(t)))) return n;
    }
    const i = Tr(o[e] || n[e], t) || Tr(o.appContext[e], t);
    return !i && r ? n : i;
  }
}
function Tr(e, t) {
  return e && (e[t] || e[A(t)] || e[F(A(t))]);
}
function Sr(e, t, n, r) {
  let o;
  const i = n,
    s = f(e);
  if (s || y(e)) {
    let n = !1;
    s && vt(e) && ((n = !bt(e)), (e = Me(e))), (o = new Array(e.length));
    for (let r = 0, s = e.length; r < s; r++)
      o[r] = t(n ? xt(e[r]) : e[r], r, void 0, i);
  } else if ("number" == typeof e) {
    o = new Array(e);
    for (let n = 0; n < e; n++) o[n] = t(n + 1, n, void 0, i);
  } else if (_(e))
    if (e[Symbol.iterator]) o = Array.from(e, (e, n) => t(e, n, void 0, i));
    else {
      const n = Object.keys(e);
      o = new Array(n.length);
      for (let r = 0, s = n.length; r < s; r++) {
        const s = n[r];
        o[r] = t(e[s], s, r, i);
      }
    }
  else o = [];
  return o;
}
function Ar(e, t, n = {}, r, o) {
  if (un.ce || (un.parent && Qn(un.parent) && un.parent.ce))
    return oi(), ui(Qo, null, [gi("slot", n, r)], 64);
  let i = e[t];
  i && i._c && (i._d = !1), oi();
  const s = i && Or(i(n)),
    a = n.key || (s && s.key),
    l = ui(
      Qo,
      { key: (a && !b(a) ? a : `_${t}`) + "" },
      s || [],
      s && 1 === e._ ? 64 : -2
    );
  return (
    !o && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]),
    i && i._c && (i._d = !0),
    l
  );
}
function Or(e) {
  return e.some(
    (e) => !pi(e) || (e.type !== ei && !(e.type === Qo && !Or(e.children)))
  )
    ? e
    : null;
}
const Pr = (e) => (e ? (Ni(e) ? Ui(e) : Pr(e.parent)) : null),
  Fr = c(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Pr(e.parent),
    $root: (e) => Pr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Hr(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        nn(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = tn.bind(e.proxy)),
    $watch: (e) => Po.bind(e),
  }),
  Lr = (e, t) => e !== r && !e.__isScriptSetup && d(e, t),
  Nr = {
    get({ _: e }, t) {
      if ("__v_skip" === t) return !0;
      const {
        ctx: n,
        setupState: o,
        data: i,
        props: s,
        accessCache: a,
        type: l,
        appContext: c,
      } = e;
      let u;
      if ("$" !== t[0]) {
        const l = a[t];
        if (void 0 !== l)
          switch (l) {
            case 1:
              return o[t];
            case 2:
              return i[t];
            case 4:
              return n[t];
            case 3:
              return s[t];
          }
        else {
          if (Lr(o, t)) return (a[t] = 1), o[t];
          if (i !== r && d(i, t)) return (a[t] = 2), i[t];
          if ((u = e.propsOptions[0]) && d(u, t)) return (a[t] = 3), s[t];
          if (n !== r && d(n, t)) return (a[t] = 4), n[t];
          jr && (a[t] = 0);
        }
      }
      const p = Fr[t];
      let f, h;
      return p
        ? ("$attrs" === t && Ne(e.attrs, 0, ""), p(e))
        : (f = l.__cssModules) && (f = f[t])
        ? f
        : n !== r && d(n, t)
        ? ((a[t] = 4), n[t])
        : ((h = c.config.globalProperties), d(h, t) ? h[t] : void 0);
    },
    set({ _: e }, t, n) {
      const { data: o, setupState: i, ctx: s } = e;
      return Lr(i, t)
        ? ((i[t] = n), !0)
        : o !== r && d(o, t)
        ? ((o[t] = n), !0)
        : !d(e.props, t) &&
          ("$" !== t[0] || !(t.slice(1) in e)) &&
          ((s[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: o,
          appContext: i,
          propsOptions: s,
        },
      },
      a
    ) {
      let l;
      return (
        !!n[a] ||
        (e !== r && d(e, a)) ||
        Lr(t, a) ||
        ((l = s[0]) && d(l, a)) ||
        d(o, a) ||
        d(Fr, a) ||
        d(i.config.globalProperties, a)
      );
    },
    defineProperty(e, t, n) {
      return (
        null != n.get
          ? (e._.accessCache[t] = 0)
          : d(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function Ir() {
  return (function () {
    const e = Ai();
    return e.setupContext || (e.setupContext = $i(e));
  })().attrs;
}
function Rr(e) {
  return f(e) ? e.reduce((e, t) => ((e[t] = null), e), {}) : e;
}
function Mr(e, t) {
  return e && t ? (f(e) && f(t) ? e.concat(t) : c({}, Rr(e), Rr(t))) : e || t;
}
function Br(e) {
  const t = Ai();
  let n = e();
  return (
    Li(),
    w(n) &&
      (n = n.catch((e) => {
        throw (Fi(t), e);
      })),
    [n, () => Fi(t)]
  );
}
let jr = !0;
function $r(e) {
  const t = Hr(e),
    n = e.proxy,
    r = e.ctx;
  (jr = !1), t.beforeCreate && Ur(t.beforeCreate, e, "bc");
  const {
    data: o,
    computed: s,
    methods: a,
    watch: l,
    provide: c,
    inject: u,
    created: p,
    beforeMount: d,
    mounted: h,
    beforeUpdate: m,
    updated: g,
    activated: y,
    deactivated: b,
    beforeDestroy: w,
    beforeUnmount: D,
    destroyed: x,
    unmounted: k,
    render: C,
    renderTracked: E,
    renderTriggered: T,
    errorCaptured: S,
    serverPrefetch: A,
    expose: O,
    inheritAttrs: P,
    components: F,
    directives: L,
    filters: N,
  } = t;
  if (
    (u &&
      (function (e, t) {
        f(e) && (e = Yr(e));
        for (const n in e) {
          const r = e[n];
          let o;
          (o = _(r)
            ? "default" in r
              ? no(r.from || n, r.default, !0)
              : no(r.from || n)
            : no(r)),
            Ct(o)
              ? Object.defineProperty(t, n, {
                  enumerable: !0,
                  configurable: !0,
                  get: () => o.value,
                  set: (e) => (o.value = e),
                })
              : (t[n] = o);
        }
      })(u, r, null),
    a)
  )
    for (const i in a) {
      const e = a[i];
      v(e) && (r[i] = e.bind(n));
    }
  if (o) {
    const t = o.call(n, n);
    _(t) && (e.data = ft(t));
  }
  if (((jr = !0), s))
    for (const f in s) {
      const e = s[f],
        t = v(e) ? e.bind(n, n) : v(e.get) ? e.get.bind(n, n) : i,
        o = !v(e) && v(e.set) ? e.set.bind(n) : i,
        a = Hi({ get: t, set: o });
      Object.defineProperty(r, f, {
        enumerable: !0,
        configurable: !0,
        get: () => a.value,
        set: (e) => (a.value = e),
      });
    }
  if (l) for (const i in l) qr(l[i], r, n, i);
  if (c) {
    const e = v(c) ? c.call(n) : c;
    Reflect.ownKeys(e).forEach((t) => {
      to(t, e[t]);
    });
  }
  function I(e, t) {
    f(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
  }
  if (
    (p && Ur(p, e, "c"),
    I(dr, d),
    I(fr, h),
    I(hr, m),
    I(mr, g),
    I(or, y),
    I(ir, b),
    I(wr, S),
    I(_r, E),
    I(br, T),
    I(gr, D),
    I(vr, k),
    I(yr, A),
    f(O))
  )
    if (O.length) {
      const t = e.exposed || (e.exposed = {});
      O.forEach((e) => {
        Object.defineProperty(t, e, {
          get: () => n[e],
          set: (t) => (n[e] = t),
        });
      });
    } else e.exposed || (e.exposed = {});
  C && e.render === i && (e.render = C),
    null != P && (e.inheritAttrs = P),
    F && (e.components = F),
    L && (e.directives = L),
    A && qn(e);
}
function Ur(e, t, n) {
  Wt(f(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function qr(e, t, n, r) {
  let o = r.includes(".") ? Fo(n, r) : () => n[r];
  if (y(e)) {
    const n = t[e];
    v(n) && Ao(o, n);
  } else if (v(e)) Ao(o, e.bind(n));
  else if (_(e))
    if (f(e)) e.forEach((e) => qr(e, t, n, r));
    else {
      const r = v(e.handler) ? e.handler.bind(n) : t[e.handler];
      v(r) && Ao(o, r, e);
    }
}
function Hr(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: o,
      optionsCache: i,
      config: { optionMergeStrategies: s },
    } = e.appContext,
    a = i.get(t);
  let l;
  return (
    a
      ? (l = a)
      : o.length || n || r
      ? ((l = {}), o.length && o.forEach((e) => zr(l, e, s, !0)), zr(l, t, s))
      : (l = t),
    _(t) && i.set(t, l),
    l
  );
}
function zr(e, t, n, r = !1) {
  const { mixins: o, extends: i } = t;
  i && zr(e, i, n, !0), o && o.forEach((t) => zr(e, t, n, !0));
  for (const s in t)
    if (r && "expose" === s);
    else {
      const r = Vr[s] || (n && n[s]);
      e[s] = r ? r(e[s], t[s]) : t[s];
    }
  return e;
}
const Vr = {
  data: Wr,
  props: Kr,
  emits: Kr,
  methods: Gr,
  computed: Gr,
  beforeCreate: Xr,
  created: Xr,
  beforeMount: Xr,
  mounted: Xr,
  beforeUpdate: Xr,
  updated: Xr,
  beforeDestroy: Xr,
  beforeUnmount: Xr,
  destroyed: Xr,
  unmounted: Xr,
  activated: Xr,
  deactivated: Xr,
  errorCaptured: Xr,
  serverPrefetch: Xr,
  components: Gr,
  directives: Gr,
  watch: function (e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = c(Object.create(null), e);
    for (const r in t) n[r] = Xr(e[r], t[r]);
    return n;
  },
  provide: Wr,
  inject: function (e, t) {
    return Gr(Yr(e), Yr(t));
  },
};
function Wr(e, t) {
  return t
    ? e
      ? function () {
          return c(
            v(e) ? e.call(this, this) : e,
            v(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Yr(e) {
  if (f(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Xr(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Gr(e, t) {
  return e ? c(Object.create(null), e, t) : t;
}
function Kr(e, t) {
  return e
    ? f(e) && f(t)
      ? [...new Set([...e, ...t])]
      : c(Object.create(null), Rr(e), Rr(null != t ? t : {}))
    : t;
}
function Jr() {
  return {
    app: null,
    config: {
      isNativeTag: s,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Qr = 0;
function Zr(e, t) {
  return function (n, r = null) {
    v(n) || (n = c({}, n)), null == r || _(r) || (r = null);
    const o = Jr(),
      i = new WeakSet(),
      s = [];
    let a = !1;
    const l = (o.app = {
      _uid: Qr++,
      _component: n,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Vi,
      get config() {
        return o.config;
      },
      set config(e) {},
      use: (e, ...t) => (
        i.has(e) ||
          (e && v(e.install)
            ? (i.add(e), e.install(l, ...t))
            : v(e) && (i.add(e), e(l, ...t))),
        l
      ),
      mixin: (e) => (o.mixins.includes(e) || o.mixins.push(e), l),
      component: (e, t) => (t ? ((o.components[e] = t), l) : o.components[e]),
      directive: (e, t) => (t ? ((o.directives[e] = t), l) : o.directives[e]),
      mount(i, s, c) {
        if (!a) {
          const u = l._ceVNode || gi(n, r);
          return (
            (u.appContext = o),
            !0 === c ? (c = "svg") : !1 === c && (c = void 0),
            s && t ? t(u, i) : e(u, i, c),
            (a = !0),
            (l._container = i),
            (i.__vue_app__ = l),
            Ui(u.component)
          );
        }
      },
      onUnmount(e) {
        s.push(e);
      },
      unmount() {
        a &&
          (Wt(s, l._instance, 16),
          e(null, l._container),
          delete l._container.__vue_app__);
      },
      provide: (e, t) => ((o.provides[e] = t), l),
      runWithContext(e) {
        const t = eo;
        eo = l;
        try {
          return e();
        } finally {
          eo = t;
        }
      },
    });
    return l;
  };
}
let eo = null;
function to(e, t) {
  if (Si) {
    let n = Si.provides;
    const r = Si.parent && Si.parent.provides;
    r === n && (n = Si.provides = Object.create(r)), (n[e] = t);
  } else;
}
function no(e, t, n = !1) {
  const r = Si || un;
  if (r || eo) {
    const o = eo
      ? eo._context.provides
      : r
      ? null == r.parent
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : void 0;
    if (o && e in o) return o[e];
    if (arguments.length > 1) return n && v(t) ? t.call(r && r.proxy) : t;
  }
}
function ro() {
  return !!(Si || un || eo);
}
const oo = {},
  io = () => Object.create(oo),
  so = (e) => Object.getPrototypeOf(e) === oo;
function ao(e, t, n, o) {
  const [i, s] = e.propsOptions;
  let a,
    l = !1;
  if (t)
    for (let r in t) {
      if (E(r)) continue;
      const c = t[r];
      let u;
      i && d(i, (u = A(r)))
        ? s && s.includes(u)
          ? ((a || (a = {}))[u] = c)
          : (n[u] = c)
        : Mo(e.emitsOptions, r) ||
          (r in o && c === o[r]) ||
          ((o[r] = c), (l = !0));
    }
  if (s) {
    const t = wt(n),
      o = a || r;
    for (let r = 0; r < s.length; r++) {
      const a = s[r];
      n[a] = lo(i, t, a, o[a], e, !d(o, a));
    }
  }
  return l;
}
function lo(e, t, n, r, o, i) {
  const s = e[n];
  if (null != s) {
    const e = d(s, "default");
    if (e && void 0 === r) {
      const e = s.default;
      if (s.type !== Function && !s.skipFactory && v(e)) {
        const { propsDefaults: i } = o;
        if (n in i) r = i[n];
        else {
          const s = Fi(o);
          (r = i[n] = e.call(null, t)), s();
        }
      } else r = e;
      o.ce && o.ce._setProp(n, r);
    }
    s[0] &&
      (i && !e ? (r = !1) : !s[1] || ("" !== r && r !== P(n)) || (r = !0));
  }
  return r;
}
const co = new WeakMap();
function uo(e, t, n = !1) {
  const i = n ? co : t.propsCache,
    s = i.get(e);
  if (s) return s;
  const a = e.props,
    l = {},
    u = [];
  let p = !1;
  if (!v(e)) {
    const r = (e) => {
      p = !0;
      const [n, r] = uo(e, t, !0);
      c(l, n), r && u.push(...r);
    };
    !n && t.mixins.length && t.mixins.forEach(r),
      e.extends && r(e.extends),
      e.mixins && e.mixins.forEach(r);
  }
  if (!a && !p) return _(e) && i.set(e, o), o;
  if (f(a))
    for (let o = 0; o < a.length; o++) {
      const e = A(a[o]);
      po(e) && (l[e] = r);
    }
  else if (a)
    for (const r in a) {
      const e = A(r);
      if (po(e)) {
        const t = a[r],
          n = (l[e] = f(t) || v(t) ? { type: t } : c({}, t)),
          o = n.type;
        let i = !1,
          s = !0;
        if (f(o))
          for (let e = 0; e < o.length; ++e) {
            const t = o[e],
              n = v(t) && t.name;
            if ("Boolean" === n) {
              i = !0;
              break;
            }
            "String" === n && (s = !1);
          }
        else i = v(o) && "Boolean" === o.name;
        (n[0] = i), (n[1] = s), (i || d(n, "default")) && u.push(e);
      }
    }
  const h = [l, u];
  return _(e) && i.set(e, h), h;
}
function po(e) {
  return "$" !== e[0] && !E(e);
}
const fo = (e) => "_" === e[0] || "$stable" === e,
  ho = (e) => (f(e) ? e.map(wi) : [wi(e)]),
  mo = (e, t, n) => {
    if (t._n) return t;
    const r = fn((...e) => ho(t(...e)), n);
    return (r._c = !1), r;
  },
  go = (e, t, n) => {
    const r = e._ctx;
    for (const o in e) {
      if (fo(o)) continue;
      const n = e[o];
      if (v(n)) t[o] = mo(0, n, r);
      else if (null != n) {
        const e = ho(n);
        t[o] = () => e;
      }
    }
  },
  vo = (e, t) => {
    const n = ho(t);
    e.slots.default = () => n;
  },
  yo = (e, t, n) => {
    for (const r in t) (n || "_" !== r) && (e[r] = t[r]);
  },
  bo = Ko;
function _o(e, t) {
  $().__VUE__ = !0;
  const {
      insert: n,
      remove: s,
      patchProp: a,
      createElement: l,
      createText: c,
      createComment: u,
      setText: p,
      setElementText: f,
      parentNode: h,
      nextSibling: m,
      setScopeId: g = i,
      insertStaticContent: v,
    } = e,
    y = (
      e,
      t,
      n,
      r = null,
      o = null,
      i = null,
      s = void 0,
      a = null,
      l = !!t.dynamicChildren
    ) => {
      if (e === t) return;
      e && !di(e, t) && ((r = J(e)), W(e, o, i, !0), (e = null)),
        -2 === t.patchFlag && ((l = !1), (t.dynamicChildren = null));
      const { type: c, ref: u, shapeFlag: p } = t;
      switch (c) {
        case Zo:
          b(e, t, n, r);
          break;
        case ei:
          _(e, t, n, r);
          break;
        case ti:
          null == e && D(t, n, r, s);
          break;
        case Qo:
          L(e, t, n, r, o, i, s, a, l);
          break;
        default:
          1 & p
            ? x(e, t, n, r, o, i, s, a, l)
            : 6 & p
            ? N(e, t, n, r, o, i, s, a, l)
            : (64 & p || 128 & p) && c.process(e, t, n, r, o, i, s, a, l, ee);
      }
      null != u && o && Hn(u, e && e.ref, i, t || e, !t);
    },
    b = (e, t, r, o) => {
      if (null == e) n((t.el = c(t.children)), r, o);
      else {
        const n = (t.el = e.el);
        t.children !== e.children && p(n, t.children);
      }
    },
    _ = (e, t, r, o) => {
      null == e ? n((t.el = u(t.children || "")), r, o) : (t.el = e.el);
    },
    D = (e, t, n, r) => {
      [e.el, e.anchor] = v(e.children, t, n, r, e.el, e.anchor);
    },
    x = (e, t, n, r, o, i, s, a, l) => {
      "svg" === t.type ? (s = "svg") : "math" === t.type && (s = "mathml"),
        null == e ? k(t, n, r, o, i, s, a, l) : S(e, t, o, i, s, a, l);
    },
    k = (e, t, r, o, i, s, c, u) => {
      let p, d;
      const { props: h, shapeFlag: m, transition: g, dirs: v } = e;
      if (
        ((p = e.el = l(e.type, s, h && h.is, h)),
        8 & m
          ? f(p, e.children)
          : 16 & m && T(e.children, p, null, o, i, wo(e, s), c, u),
        v && mn(e, null, o, "created"),
        C(p, e, e.scopeId, c, o),
        h)
      ) {
        for (const e in h) "value" === e || E(e) || a(p, e, null, h[e], s, o);
        "value" in h && a(p, "value", null, h.value, s),
          (d = h.onVnodeBeforeMount) && Ci(d, o, e);
      }
      v && mn(e, null, o, "beforeMount");
      const y = xo(i, g);
      y && g.beforeEnter(p),
        n(p, t, r),
        ((d = h && h.onVnodeMounted) || y || v) &&
          bo(() => {
            d && Ci(d, o, e), y && g.enter(p), v && mn(e, null, o, "mounted");
          }, i);
    },
    C = (e, t, n, r, o) => {
      if ((n && g(e, n), r)) for (let i = 0; i < r.length; i++) g(e, r[i]);
      if (o) {
        let n = o.subTree;
        if (
          t === n ||
          (Ho(n.type) && (n.ssContent === t || n.ssFallback === t))
        ) {
          const t = o.vnode;
          C(e, t, t.scopeId, t.slotScopeIds, o.parent);
        }
      }
    },
    T = (e, t, n, r, o, i, s, a, l = 0) => {
      for (let c = l; c < e.length; c++) {
        const l = (e[c] = a ? Di(e[c]) : wi(e[c]));
        y(null, l, t, n, r, o, i, s, a);
      }
    },
    S = (e, t, n, o, i, s, l) => {
      const c = (t.el = e.el);
      let { patchFlag: u, dynamicChildren: p, dirs: d } = t;
      u |= 16 & e.patchFlag;
      const h = e.props || r,
        m = t.props || r;
      let g;
      if (
        (n && Do(n, !1),
        (g = m.onVnodeBeforeUpdate) && Ci(g, n, t, e),
        d && mn(t, e, n, "beforeUpdate"),
        n && Do(n, !0),
        ((h.innerHTML && null == m.innerHTML) ||
          (h.textContent && null == m.textContent)) &&
          f(c, ""),
        p
          ? O(e.dynamicChildren, p, c, n, o, wo(t, i), s)
          : l || q(e, t, c, null, n, o, wo(t, i), s, !1),
        u > 0)
      ) {
        if (16 & u) F(c, h, m, n, i);
        else if (
          (2 & u && h.class !== m.class && a(c, "class", null, m.class, i),
          4 & u && a(c, "style", h.style, m.style, i),
          8 & u)
        ) {
          const e = t.dynamicProps;
          for (let t = 0; t < e.length; t++) {
            const r = e[t],
              o = h[r],
              s = m[r];
            (s === o && "value" !== r) || a(c, r, o, s, i, n);
          }
        }
        1 & u && e.children !== t.children && f(c, t.children);
      } else l || null != p || F(c, h, m, n, i);
      ((g = m.onVnodeUpdated) || d) &&
        bo(() => {
          g && Ci(g, n, t, e), d && mn(t, e, n, "updated");
        }, o);
    },
    O = (e, t, n, r, o, i, s) => {
      for (let a = 0; a < t.length; a++) {
        const l = e[a],
          c = t[a],
          u =
            l.el && (l.type === Qo || !di(l, c) || 70 & l.shapeFlag)
              ? h(l.el)
              : n;
        y(l, c, u, null, r, o, i, s, !0);
      }
    },
    F = (e, t, n, o, i) => {
      if (t !== n) {
        if (t !== r)
          for (const r in t) E(r) || r in n || a(e, r, t[r], null, i, o);
        for (const r in n) {
          if (E(r)) continue;
          const s = n[r],
            l = t[r];
          s !== l && "value" !== r && a(e, r, l, s, i, o);
        }
        "value" in n && a(e, "value", t.value, n.value, i);
      }
    },
    L = (e, t, r, o, i, s, a, l, u) => {
      const p = (t.el = e ? e.el : c("")),
        d = (t.anchor = e ? e.anchor : c(""));
      let { patchFlag: f, dynamicChildren: h, slotScopeIds: m } = t;
      m && (l = l ? l.concat(m) : m),
        null == e
          ? (n(p, r, o), n(d, r, o), T(t.children || [], r, d, i, s, a, l, u))
          : f > 0 && 64 & f && h && e.dynamicChildren
          ? (O(e.dynamicChildren, h, r, i, s, a, l),
            (null != t.key || (i && t === i.subTree)) && ko(e, t, !0))
          : q(e, t, r, d, i, s, a, l, u);
    },
    N = (e, t, n, r, o, i, s, a, l) => {
      (t.slotScopeIds = a),
        null == e
          ? 512 & t.shapeFlag
            ? o.ctx.activate(t, n, r, s, l)
            : M(t, n, r, o, i, s, l)
          : B(e, t, l);
    },
    M = (e, t, n, o, i, s, a) => {
      const l = (e.component = (function (e, t, n) {
        const o = e.type,
          i = (t ? t.appContext : e.appContext) || Ei,
          s = {
            uid: Ti++,
            vnode: e,
            type: o,
            parent: t,
            appContext: i,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            job: null,
            scope: new re(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(i.provides),
            ids: t ? t.ids : ["", 0, 0],
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: uo(o, i),
            emitsOptions: Ro(o, i),
            emit: null,
            emitted: null,
            propsDefaults: r,
            inheritAttrs: o.inheritAttrs,
            ctx: r,
            data: r,
            props: r,
            attrs: r,
            slots: r,
            refs: r,
            setupState: r,
            setupContext: null,
            suspense: n,
            suspenseId: n ? n.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null,
          };
        (s.ctx = { _: s }),
          (s.root = t ? t.root : s),
          (s.emit = Io.bind(null, s)),
          e.ce && e.ce(s);
        return s;
      })(e, o, i));
      if (
        (tr(e) && (l.ctx.renderer = ee),
        (function (e, t = !1, n = !1) {
          t && Pi(t);
          const { props: r, children: o } = e.vnode,
            i = Ni(e);
          (function (e, t, n, r = !1) {
            const o = {},
              i = io();
            (e.propsDefaults = Object.create(null)), ao(e, t, o, i);
            for (const s in e.propsOptions[0]) s in o || (o[s] = void 0);
            n
              ? (e.props = r ? o : ht(o))
              : e.type.props
              ? (e.props = o)
              : (e.props = i),
              (e.attrs = i);
          })(e, r, i, t),
            ((e, t, n) => {
              const r = (e.slots = io());
              if (32 & e.vnode.shapeFlag) {
                const e = t._;
                e ? (yo(r, t, n), n && R(r, "_", e, !0)) : go(t, r);
              } else t && vo(e, t);
            })(e, o, n);
          const s = i
            ? (function (e, t) {
                const n = e.type;
                (e.accessCache = Object.create(null)),
                  (e.proxy = new Proxy(e.ctx, Nr));
                const { setup: r } = n;
                if (r) {
                  xe();
                  const n = (e.setupContext = r.length > 1 ? $i(e) : null),
                    o = Fi(e),
                    i = Vt(r, e, 0, [e.props, n]),
                    s = w(i);
                  if ((ke(), o(), (!s && !e.sp) || Qn(e) || qn(e), s)) {
                    if ((i.then(Li, Li), t))
                      return i
                        .then((n) => {
                          Mi(e, n, t);
                        })
                        .catch((t) => {
                          Yt(t, e, 0);
                        });
                    e.asyncDep = i;
                  } else Mi(e, i, t);
                } else Bi(e, t);
              })(e, t)
            : void 0;
          t && Pi(!1);
        })(l, !1, a),
        l.asyncDep)
      ) {
        if ((i && i.registerDep(l, j, a), !e.el)) {
          const e = (l.subTree = gi(ei));
          _(null, e, t, n);
        }
      } else j(l, e, t, n, i, s, a);
    },
    B = (e, t, n) => {
      const r = (t.component = e.component);
      if (
        (function (e, t, n) {
          const { props: r, children: o, component: i } = e,
            { props: s, children: a, patchFlag: l } = t,
            c = i.emitsOptions;
          if (t.dirs || t.transition) return !0;
          if (!(n && l >= 0))
            return (
              !((!o && !a) || (a && a.$stable)) ||
              (r !== s && (r ? !s || Uo(r, s, c) : !!s))
            );
          if (1024 & l) return !0;
          if (16 & l) return r ? Uo(r, s, c) : !!s;
          if (8 & l) {
            const e = t.dynamicProps;
            for (let t = 0; t < e.length; t++) {
              const n = e[t];
              if (s[n] !== r[n] && !Mo(c, n)) return !0;
            }
          }
          return !1;
        })(e, t, n)
      ) {
        if (r.asyncDep && !r.asyncResolved) return void U(r, t, n);
        (r.next = t), r.update();
      } else (t.el = e.el), (r.vnode = t);
    },
    j = (e, t, n, r, o, i, s) => {
      const a = () => {
        if (e.isMounted) {
          let { next: t, bu: n, u: r, parent: l, vnode: c } = e;
          {
            const n = Co(e);
            if (n)
              return (
                t && ((t.el = c.el), U(e, t, s)),
                void n.asyncDep.then(() => {
                  e.isUnmounted || a();
                })
              );
          }
          let u,
            p = t;
          Do(e, !1),
            t ? ((t.el = c.el), U(e, t, s)) : (t = c),
            n && I(n),
            (u = t.props && t.props.onVnodeBeforeUpdate) && Ci(u, l, t, c),
            Do(e, !0);
          const d = Bo(e),
            f = e.subTree;
          (e.subTree = d),
            y(f, d, h(f.el), J(f), e, o, i),
            (t.el = d.el),
            null === p && qo(e, d.el),
            r && bo(r, o),
            (u = t.props && t.props.onVnodeUpdated) &&
              bo(() => Ci(u, l, t, c), o);
        } else {
          let s;
          const { el: a, props: l } = t,
            { bm: c, m: u, parent: p, root: d, type: f } = e,
            h = Qn(t);
          if (
            (Do(e, !1),
            c && I(c),
            !h && (s = l && l.onVnodeBeforeMount) && Ci(s, p, t),
            Do(e, !0),
            a && ne)
          ) {
            const t = () => {
              (e.subTree = Bo(e)), ne(a, e.subTree, e, o, null);
            };
            h && f.__asyncHydrate ? f.__asyncHydrate(a, e, t) : t();
          } else {
            d.ce && d.ce._injectChildStyle(f);
            const s = (e.subTree = Bo(e));
            y(null, s, n, r, e, o, i), (t.el = s.el);
          }
          if ((u && bo(u, o), !h && (s = l && l.onVnodeMounted))) {
            const e = t;
            bo(() => Ci(s, p, e), o);
          }
          (256 & t.shapeFlag ||
            (p && Qn(p.vnode) && 256 & p.vnode.shapeFlag)) &&
            e.a &&
            bo(e.a, o),
            (e.isMounted = !0),
            (t = n = r = null);
        }
      };
      e.scope.on();
      const l = (e.effect = new le(a));
      e.scope.off();
      const c = (e.update = l.run.bind(l)),
        u = (e.job = l.runIfDirty.bind(l));
      (u.i = e), (u.id = e.uid), (l.scheduler = () => nn(u)), Do(e, !0), c();
    },
    U = (e, t, n) => {
      t.component = e;
      const o = e.vnode.props;
      (e.vnode = t),
        (e.next = null),
        (function (e, t, n, r) {
          const {
              props: o,
              attrs: i,
              vnode: { patchFlag: s },
            } = e,
            a = wt(o),
            [l] = e.propsOptions;
          let c = !1;
          if (!(r || s > 0) || 16 & s) {
            let r;
            ao(e, t, o, i) && (c = !0);
            for (const i in a)
              (t && (d(t, i) || ((r = P(i)) !== i && d(t, r)))) ||
                (l
                  ? !n ||
                    (void 0 === n[i] && void 0 === n[r]) ||
                    (o[i] = lo(l, a, i, void 0, e, !0))
                  : delete o[i]);
            if (i !== a)
              for (const e in i) (t && d(t, e)) || (delete i[e], (c = !0));
          } else if (8 & s) {
            const n = e.vnode.dynamicProps;
            for (let r = 0; r < n.length; r++) {
              let s = n[r];
              if (Mo(e.emitsOptions, s)) continue;
              const u = t[s];
              if (l)
                if (d(i, s)) u !== i[s] && ((i[s] = u), (c = !0));
                else {
                  const t = A(s);
                  o[t] = lo(l, a, t, u, e, !1);
                }
              else u !== i[s] && ((i[s] = u), (c = !0));
            }
          }
          c && Ie(e.attrs, "set", "");
        })(e, t.props, o, n),
        ((e, t, n) => {
          const { vnode: o, slots: i } = e;
          let s = !0,
            a = r;
          if (32 & o.shapeFlag) {
            const e = t._;
            e
              ? n && 1 === e
                ? (s = !1)
                : yo(i, t, n)
              : ((s = !t.$stable), go(t, i)),
              (a = t);
          } else t && (vo(e, t), (a = { default: 1 }));
          if (s) for (const r in i) fo(r) || null != a[r] || delete i[r];
        })(e, t.children, n),
        xe(),
        sn(e),
        ke();
    },
    q = (e, t, n, r, o, i, s, a, l = !1) => {
      const c = e && e.children,
        u = e ? e.shapeFlag : 0,
        p = t.children,
        { patchFlag: d, shapeFlag: h } = t;
      if (d > 0) {
        if (128 & d) return void z(c, p, n, r, o, i, s, a, l);
        if (256 & d) return void H(c, p, n, r, o, i, s, a, l);
      }
      8 & h
        ? (16 & u && K(c, o, i), p !== c && f(n, p))
        : 16 & u
        ? 16 & h
          ? z(c, p, n, r, o, i, s, a, l)
          : K(c, o, i, !0)
        : (8 & u && f(n, ""), 16 & h && T(p, n, r, o, i, s, a, l));
    },
    H = (e, t, n, r, i, s, a, l, c) => {
      t = t || o;
      const u = (e = e || o).length,
        p = t.length,
        d = Math.min(u, p);
      let f;
      for (f = 0; f < d; f++) {
        const r = (t[f] = c ? Di(t[f]) : wi(t[f]));
        y(e[f], r, n, null, i, s, a, l, c);
      }
      u > p ? K(e, i, s, !0, !1, d) : T(t, n, r, i, s, a, l, c, d);
    },
    z = (e, t, n, r, i, s, a, l, c) => {
      let u = 0;
      const p = t.length;
      let d = e.length - 1,
        f = p - 1;
      for (; u <= d && u <= f; ) {
        const r = e[u],
          o = (t[u] = c ? Di(t[u]) : wi(t[u]));
        if (!di(r, o)) break;
        y(r, o, n, null, i, s, a, l, c), u++;
      }
      for (; u <= d && u <= f; ) {
        const r = e[d],
          o = (t[f] = c ? Di(t[f]) : wi(t[f]));
        if (!di(r, o)) break;
        y(r, o, n, null, i, s, a, l, c), d--, f--;
      }
      if (u > d) {
        if (u <= f) {
          const e = f + 1,
            o = e < p ? t[e].el : r;
          for (; u <= f; )
            y(null, (t[u] = c ? Di(t[u]) : wi(t[u])), n, o, i, s, a, l, c), u++;
        }
      } else if (u > f) for (; u <= d; ) W(e[u], i, s, !0), u++;
      else {
        const h = u,
          m = u,
          g = new Map();
        for (u = m; u <= f; u++) {
          const e = (t[u] = c ? Di(t[u]) : wi(t[u]));
          null != e.key && g.set(e.key, u);
        }
        let v,
          b = 0;
        const _ = f - m + 1;
        let w = !1,
          D = 0;
        const x = new Array(_);
        for (u = 0; u < _; u++) x[u] = 0;
        for (u = h; u <= d; u++) {
          const r = e[u];
          if (b >= _) {
            W(r, i, s, !0);
            continue;
          }
          let o;
          if (null != r.key) o = g.get(r.key);
          else
            for (v = m; v <= f; v++)
              if (0 === x[v - m] && di(r, t[v])) {
                o = v;
                break;
              }
          void 0 === o
            ? W(r, i, s, !0)
            : ((x[o - m] = u + 1),
              o >= D ? (D = o) : (w = !0),
              y(r, t[o], n, null, i, s, a, l, c),
              b++);
        }
        const k = w
          ? (function (e) {
              const t = e.slice(),
                n = [0];
              let r, o, i, s, a;
              const l = e.length;
              for (r = 0; r < l; r++) {
                const l = e[r];
                if (0 !== l) {
                  if (((o = n[n.length - 1]), e[o] < l)) {
                    (t[r] = o), n.push(r);
                    continue;
                  }
                  for (i = 0, s = n.length - 1; i < s; )
                    (a = (i + s) >> 1), e[n[a]] < l ? (i = a + 1) : (s = a);
                  l < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), (n[i] = r));
                }
              }
              (i = n.length), (s = n[i - 1]);
              for (; i-- > 0; ) (n[i] = s), (s = t[s]);
              return n;
            })(x)
          : o;
        for (v = k.length - 1, u = _ - 1; u >= 0; u--) {
          const e = m + u,
            o = t[e],
            d = e + 1 < p ? t[e + 1].el : r;
          0 === x[u]
            ? y(null, o, n, d, i, s, a, l, c)
            : w && (v < 0 || u !== k[v] ? V(o, n, d, 2) : v--);
        }
      }
    },
    V = (e, t, r, o, i = null) => {
      const { el: s, type: a, transition: l, children: c, shapeFlag: u } = e;
      if (6 & u) return void V(e.component.subTree, t, r, o);
      if (128 & u) return void e.suspense.move(t, r, o);
      if (64 & u) return void a.move(e, t, r, ee);
      if (a === Qo) {
        n(s, t, r);
        for (let e = 0; e < c.length; e++) V(c[e], t, r, o);
        return void n(e.anchor, t, r);
      }
      if (a === ti)
        return void (({ el: e, anchor: t }, r, o) => {
          let i;
          for (; e && e !== t; ) (i = m(e)), n(e, r, o), (e = i);
          n(t, r, o);
        })(e, t, r);
      if (2 !== o && 1 & u && l)
        if (0 === o) l.beforeEnter(s), n(s, t, r), bo(() => l.enter(s), i);
        else {
          const { leave: e, delayLeave: o, afterLeave: i } = l,
            a = () => n(s, t, r),
            c = () => {
              e(s, () => {
                a(), i && i();
              });
            };
          o ? o(s, a, c) : c();
        }
      else n(s, t, r);
    },
    W = (e, t, n, r = !1, o = !1) => {
      const {
        type: i,
        props: s,
        ref: a,
        children: l,
        dynamicChildren: c,
        shapeFlag: u,
        patchFlag: p,
        dirs: d,
        cacheIndex: f,
      } = e;
      if (
        (-2 === p && (o = !1),
        null != a && Hn(a, null, n, e, !0),
        null != f && (t.renderCache[f] = void 0),
        256 & u)
      )
        return void t.ctx.deactivate(e);
      const h = 1 & u && d,
        m = !Qn(e);
      let g;
      if ((m && (g = s && s.onVnodeBeforeUnmount) && Ci(g, t, e), 6 & u))
        G(e.component, n, r);
      else {
        if (128 & u) return void e.suspense.unmount(n, r);
        h && mn(e, null, t, "beforeUnmount"),
          64 & u
            ? e.type.remove(e, t, n, ee, r)
            : c && !c.hasOnce && (i !== Qo || (p > 0 && 64 & p))
            ? K(c, t, n, !1, !0)
            : ((i === Qo && 384 & p) || (!o && 16 & u)) && K(l, t, n),
          r && Y(e);
      }
      ((m && (g = s && s.onVnodeUnmounted)) || h) &&
        bo(() => {
          g && Ci(g, t, e), h && mn(e, null, t, "unmounted");
        }, n);
    },
    Y = (e) => {
      const { type: t, el: n, anchor: r, transition: o } = e;
      if (t === Qo) return void X(n, r);
      if (t === ti)
        return void (({ el: e, anchor: t }) => {
          let n;
          for (; e && e !== t; ) (n = m(e)), s(e), (e = n);
          s(t);
        })(e);
      const i = () => {
        s(n), o && !o.persisted && o.afterLeave && o.afterLeave();
      };
      if (1 & e.shapeFlag && o && !o.persisted) {
        const { leave: t, delayLeave: r } = o,
          s = () => t(n, i);
        r ? r(e.el, i, s) : s();
      } else i();
    },
    X = (e, t) => {
      let n;
      for (; e !== t; ) (n = m(e)), s(e), (e = n);
      s(t);
    },
    G = (e, t, n) => {
      const { bum: r, scope: o, job: i, subTree: s, um: a, m: l, a: c } = e;
      Eo(l),
        Eo(c),
        r && I(r),
        o.stop(),
        i && ((i.flags |= 8), W(s, e, t, n)),
        a && bo(a, t),
        bo(() => {
          e.isUnmounted = !0;
        }, t),
        t &&
          t.pendingBranch &&
          !t.isUnmounted &&
          e.asyncDep &&
          !e.asyncResolved &&
          e.suspenseId === t.pendingId &&
          (t.deps--, 0 === t.deps && t.resolve());
    },
    K = (e, t, n, r = !1, o = !1, i = 0) => {
      for (let s = i; s < e.length; s++) W(e[s], t, n, r, o);
    },
    J = (e) => {
      if (6 & e.shapeFlag) return J(e.component.subTree);
      if (128 & e.shapeFlag) return e.suspense.next();
      const t = m(e.anchor || e.el),
        n = t && t[gn];
      return n ? m(n) : t;
    };
  let Q = !1;
  const Z = (e, t, n) => {
      null == e
        ? t._vnode && W(t._vnode, null, null, !0)
        : y(t._vnode || null, e, t, null, null, null, n),
        (t._vnode = e),
        Q || ((Q = !0), sn(), an(), (Q = !1));
    },
    ee = { p: y, um: W, m: V, r: Y, mt: M, mc: T, pc: q, pbc: O, n: J, o: e };
  let te, ne;
  return (
    t && ([te, ne] = t(ee)), { render: Z, hydrate: te, createApp: Zr(Z, te) }
  );
}
function wo({ type: e, props: t }, n) {
  return ("svg" === n && "foreignObject" === e) ||
    ("mathml" === n &&
      "annotation-xml" === e &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function Do({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function xo(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function ko(e, t, n = !1) {
  const r = e.children,
    o = t.children;
  if (f(r) && f(o))
    for (let i = 0; i < r.length; i++) {
      const e = r[i];
      let t = o[i];
      1 & t.shapeFlag &&
        !t.dynamicChildren &&
        ((t.patchFlag <= 0 || 32 === t.patchFlag) &&
          ((t = o[i] = Di(o[i])), (t.el = e.el)),
        n || -2 === t.patchFlag || ko(e, t)),
        t.type === Zo && (t.el = e.el);
    }
}
function Co(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Co(t);
}
function Eo(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const To = Symbol.for("v-scx"),
  So = () => no(To);
function Ao(e, t, n) {
  return Oo(e, t, n);
}
function Oo(e, t, n = r) {
  const { immediate: o, deep: s, flush: a, once: l } = n,
    u = c({}, n),
    p = (t && o) || (!t && "post" !== a);
  let d;
  if (Ri)
    if ("sync" === a) {
      const e = So();
      d = e.__watcherHandles || (e.__watcherHandles = []);
    } else if (!p) {
      const e = () => {};
      return (e.stop = i), (e.resume = i), (e.pause = i), e;
    }
  const f = Si;
  u.call = (e, t, n) => Wt(e, f, t, n);
  let h = !1;
  "post" === a
    ? (u.scheduler = (e) => {
        bo(e, f && f.suspense);
      })
    : "sync" !== a &&
      ((h = !0),
      (u.scheduler = (e, t) => {
        t ? e() : nn(e);
      })),
    (u.augmentJob = (e) => {
      t && (e.flags |= 4),
        h && ((e.flags |= 2), f && ((e.id = f.uid), (e.i = f)));
    });
  const m = Ht(e, t, u);
  return Ri && (d ? d.push(m) : p && m()), m;
}
function Po(e, t, n) {
  const r = this.proxy,
    o = y(e) ? (e.includes(".") ? Fo(r, e) : () => r[e]) : e.bind(r, r);
  let i;
  v(t) ? (i = t) : ((i = t.handler), (n = t));
  const s = Fi(this),
    a = Oo(o, i.bind(r), n);
  return s(), a;
}
function Fo(e, t) {
  const n = t.split(".");
  return () => {
    let t = e;
    for (let e = 0; e < n.length && t; e++) t = t[n[e]];
    return t;
  };
}
function Lo(e, t, n = r) {
  const o = Ai(),
    i = A(t),
    s = P(t),
    a = No(e, i),
    l = Nt((a, l) => {
      let c,
        u,
        p = r;
      return (
        Oo(
          () => {
            const t = e[i];
            N(c, t) && ((c = t), l());
          },
          null,
          { flush: "sync" }
        ),
        {
          get: () => (a(), n.get ? n.get(c) : c),
          set(e) {
            const a = n.set ? n.set(e) : e;
            if (!(N(a, c) || (p !== r && N(e, p)))) return;
            const d = o.vnode.props;
            (d &&
              (t in d || i in d || s in d) &&
              (`onUpdate:${t}` in d ||
                `onUpdate:${i}` in d ||
                `onUpdate:${s}` in d)) ||
              ((c = e), l()),
              o.emit(`update:${t}`, a),
              N(e, a) && N(e, p) && !N(a, u) && l(),
              (p = e),
              (u = a);
          },
        }
      );
    });
  return (
    (l[Symbol.iterator] = () => {
      let e = 0;
      return {
        next: () =>
          e < 2 ? { value: e++ ? a || r : l, done: !1 } : { done: !0 },
      };
    }),
    l
  );
}
const No = (e, t) =>
  "modelValue" === t || "model-value" === t
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${A(t)}Modifiers`] || e[`${P(t)}Modifiers`];
function Io(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || r;
  let i = n;
  const s = t.startsWith("update:"),
    a = s && No(o, t.slice(7));
  let l;
  a &&
    (a.trim && (i = n.map((e) => (y(e) ? e.trim() : e))),
    a.number && (i = n.map(M)));
  let c = o[(l = L(t))] || o[(l = L(A(t)))];
  !c && s && (c = o[(l = L(P(t)))]), c && Wt(c, e, 6, i);
  const u = o[l + "Once"];
  if (u) {
    if (e.emitted) {
      if (e.emitted[l]) return;
    } else e.emitted = {};
    (e.emitted[l] = !0), Wt(u, e, 6, i);
  }
}
function Ro(e, t, n = !1) {
  const r = t.emitsCache,
    o = r.get(e);
  if (void 0 !== o) return o;
  const i = e.emits;
  let s = {},
    a = !1;
  if (!v(e)) {
    const r = (e) => {
      const n = Ro(e, t, !0);
      n && ((a = !0), c(s, n));
    };
    !n && t.mixins.length && t.mixins.forEach(r),
      e.extends && r(e.extends),
      e.mixins && e.mixins.forEach(r);
  }
  return i || a
    ? (f(i) ? i.forEach((e) => (s[e] = null)) : c(s, i), _(e) && r.set(e, s), s)
    : (_(e) && r.set(e, null), null);
}
function Mo(e, t) {
  return (
    !(!e || !a(t)) &&
    ((t = t.slice(2).replace(/Once$/, "")),
    d(e, t[0].toLowerCase() + t.slice(1)) || d(e, P(t)) || d(e, t))
  );
}
function Bo(e) {
  const {
      type: t,
      vnode: n,
      proxy: r,
      withProxy: o,
      propsOptions: [i],
      slots: s,
      attrs: a,
      emit: c,
      render: u,
      renderCache: p,
      props: d,
      data: f,
      setupState: h,
      ctx: m,
      inheritAttrs: g,
    } = e,
    v = dn(e);
  let y, b;
  try {
    if (4 & n.shapeFlag) {
      const e = o || r,
        t = e;
      (y = wi(u.call(t, e, p, d, h, f, m))), (b = a);
    } else {
      const e = t;
      0,
        (y = wi(
          e.length > 1 ? e(d, { attrs: a, slots: s, emit: c }) : e(d, null)
        )),
        (b = t.props ? a : jo(a));
    }
  } catch (w) {
    (ni.length = 0), Yt(w, e, 1), (y = gi(ei));
  }
  let _ = y;
  if (b && !1 !== g) {
    const e = Object.keys(b),
      { shapeFlag: t } = _;
    e.length &&
      7 & t &&
      (i && e.some(l) && (b = $o(b, i)), (_ = vi(_, b, !1, !0)));
  }
  return (
    n.dirs &&
      ((_ = vi(_, null, !1, !0)),
      (_.dirs = _.dirs ? _.dirs.concat(n.dirs) : n.dirs)),
    n.transition && jn(_, n.transition),
    (y = _),
    dn(v),
    y
  );
}
const jo = (e) => {
    let t;
    for (const n in e)
      ("class" === n || "style" === n || a(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  $o = (e, t) => {
    const n = {};
    for (const r in e) (l(r) && r.slice(9) in t) || (n[r] = e[r]);
    return n;
  };
function Uo(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let o = 0; o < r.length; o++) {
    const i = r[o];
    if (t[i] !== e[i] && !Mo(n, i)) return !0;
  }
  return !1;
}
function qo({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r !== e))
      break;
    ((e = t.vnode).el = n), (t = t.parent);
  }
}
const Ho = (e) => e.__isSuspense;
let zo = 0;
const Vo = {
    name: "Suspense",
    __isSuspense: !0,
    process(e, t, n, r, o, i, s, a, l, c) {
      if (null == e)
        !(function (e, t, n, r, o, i, s, a, l) {
          const {
              p: c,
              o: { createElement: u },
            } = l,
            p = u("div"),
            d = (e.suspense = Xo(e, o, r, t, p, n, i, s, a, l));
          c(null, (d.pendingBranch = e.ssContent), p, null, r, d, i, s),
            d.deps > 0
              ? (Yo(e, "onPending"),
                Yo(e, "onFallback"),
                c(null, e.ssFallback, t, n, r, null, i, s),
                Jo(d, e.ssFallback))
              : d.resolve(!1, !0);
        })(t, n, r, o, i, s, a, l, c);
      else {
        if (i && i.deps > 0 && !e.suspense.isInFallback)
          return (
            (t.suspense = e.suspense),
            (t.suspense.vnode = t),
            void (t.el = e.el)
          );
        !(function (
          e,
          t,
          n,
          r,
          o,
          i,
          s,
          a,
          { p: l, um: c, o: { createElement: u } }
        ) {
          const p = (t.suspense = e.suspense);
          (p.vnode = t), (t.el = e.el);
          const d = t.ssContent,
            f = t.ssFallback,
            {
              activeBranch: h,
              pendingBranch: m,
              isInFallback: g,
              isHydrating: v,
            } = p;
          if (m)
            (p.pendingBranch = d),
              di(d, m)
                ? (l(m, d, p.hiddenContainer, null, o, p, i, s, a),
                  p.deps <= 0
                    ? p.resolve()
                    : g && (v || (l(h, f, n, r, o, null, i, s, a), Jo(p, f))))
                : ((p.pendingId = zo++),
                  v ? ((p.isHydrating = !1), (p.activeBranch = m)) : c(m, o, p),
                  (p.deps = 0),
                  (p.effects.length = 0),
                  (p.hiddenContainer = u("div")),
                  g
                    ? (l(null, d, p.hiddenContainer, null, o, p, i, s, a),
                      p.deps <= 0
                        ? p.resolve()
                        : (l(h, f, n, r, o, null, i, s, a), Jo(p, f)))
                    : h && di(d, h)
                    ? (l(h, d, n, r, o, p, i, s, a), p.resolve(!0))
                    : (l(null, d, p.hiddenContainer, null, o, p, i, s, a),
                      p.deps <= 0 && p.resolve()));
          else if (h && di(d, h)) l(h, d, n, r, o, p, i, s, a), Jo(p, d);
          else if (
            (Yo(t, "onPending"),
            (p.pendingBranch = d),
            512 & d.shapeFlag
              ? (p.pendingId = d.component.suspenseId)
              : (p.pendingId = zo++),
            l(null, d, p.hiddenContainer, null, o, p, i, s, a),
            p.deps <= 0)
          )
            p.resolve();
          else {
            const { timeout: e, pendingId: t } = p;
            e > 0
              ? setTimeout(() => {
                  p.pendingId === t && p.fallback(f);
                }, e)
              : 0 === e && p.fallback(f);
          }
        })(e, t, n, r, o, s, a, l, c);
      }
    },
    hydrate: function (e, t, n, r, o, i, s, a, l) {
      const c = (t.suspense = Xo(
          t,
          r,
          n,
          e.parentNode,
          document.createElement("div"),
          null,
          o,
          i,
          s,
          a,
          !0
        )),
        u = l(e, (c.pendingBranch = t.ssContent), n, c, i, s);
      0 === c.deps && c.resolve(!1, !0);
      return u;
    },
    normalize: function (e) {
      const { shapeFlag: t, children: n } = e,
        r = 32 & t;
      (e.ssContent = Go(r ? n.default : n)),
        (e.ssFallback = r ? Go(n.fallback) : gi(ei));
    },
  },
  Wo = Vo;
function Yo(e, t) {
  const n = e.props && e.props[t];
  v(n) && n();
}
function Xo(e, t, n, r, o, i, s, a, l, c, u = !1) {
  const {
    p: p,
    m: d,
    um: f,
    n: h,
    o: { parentNode: m, remove: g },
  } = c;
  let v;
  const y = (function (e) {
    const t = e.props && e.props.suspensible;
    return null != t && !1 !== t;
  })(e);
  y && t && t.pendingBranch && ((v = t.pendingId), t.deps++);
  const b = e.props ? B(e.props.timeout) : void 0,
    _ = i,
    w = {
      vnode: e,
      parent: t,
      parentComponent: n,
      namespace: s,
      container: r,
      hiddenContainer: o,
      deps: 0,
      pendingId: zo++,
      timeout: "number" == typeof b ? b : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !u,
      isHydrating: u,
      isUnmounted: !1,
      effects: [],
      resolve(e = !1, n = !1) {
        const {
          vnode: r,
          activeBranch: o,
          pendingBranch: s,
          pendingId: a,
          effects: l,
          parentComponent: c,
          container: u,
        } = w;
        let p = !1;
        w.isHydrating
          ? (w.isHydrating = !1)
          : e ||
            ((p = o && s.transition && "out-in" === s.transition.mode),
            p &&
              (o.transition.afterLeave = () => {
                a === w.pendingId && (d(s, u, i === _ ? h(o) : i, 0), on(l));
              }),
            o && (m(o.el) === u && (i = h(o)), f(o, c, w, !0)),
            p || d(s, u, i, 0)),
          Jo(w, s),
          (w.pendingBranch = null),
          (w.isInFallback = !1);
        let g = w.parent,
          b = !1;
        for (; g; ) {
          if (g.pendingBranch) {
            g.effects.push(...l), (b = !0);
            break;
          }
          g = g.parent;
        }
        b || p || on(l),
          (w.effects = []),
          y &&
            t &&
            t.pendingBranch &&
            v === t.pendingId &&
            (t.deps--, 0 !== t.deps || n || t.resolve()),
          Yo(r, "onResolve");
      },
      fallback(e) {
        if (!w.pendingBranch) return;
        const {
          vnode: t,
          activeBranch: n,
          parentComponent: r,
          container: o,
          namespace: i,
        } = w;
        Yo(t, "onFallback");
        const s = h(n),
          c = () => {
            w.isInFallback && (p(null, e, o, s, r, null, i, a, l), Jo(w, e));
          },
          u = e.transition && "out-in" === e.transition.mode;
        u && (n.transition.afterLeave = c),
          (w.isInFallback = !0),
          f(n, r, null, !0),
          u || c();
      },
      move(e, t, n) {
        w.activeBranch && d(w.activeBranch, e, t, n), (w.container = e);
      },
      next: () => w.activeBranch && h(w.activeBranch),
      registerDep(e, t, n) {
        const r = !!w.pendingBranch;
        r && w.deps++;
        const o = e.vnode.el;
        e.asyncDep
          .catch((t) => {
            Yt(t, e, 0);
          })
          .then((i) => {
            if (e.isUnmounted || w.isUnmounted || w.pendingId !== e.suspenseId)
              return;
            e.asyncResolved = !0;
            const { vnode: a } = e;
            Mi(e, i, !1), o && (a.el = o);
            const l = !o && e.subTree.el;
            t(e, a, m(o || e.subTree.el), o ? null : h(e.subTree), w, s, n),
              l && g(l),
              qo(e, a.el),
              r && 0 == --w.deps && w.resolve();
          });
      },
      unmount(e, t) {
        (w.isUnmounted = !0),
          w.activeBranch && f(w.activeBranch, n, e, t),
          w.pendingBranch && f(w.pendingBranch, n, e, t);
      },
    };
  return w;
}
function Go(e) {
  let t;
  if (v(e)) {
    const n = si && e._c;
    n && ((e._d = !1), oi()), (e = e()), n && ((e._d = !0), (t = ri), ii());
  }
  if (f(e)) {
    const t = (function (e) {
      let t;
      for (let n = 0; n < e.length; n++) {
        const r = e[n];
        if (!pi(r)) return;
        if (r.type !== ei || "v-if" === r.children) {
          if (t) return;
          t = r;
        }
      }
      return t;
    })(e);
    e = t;
  }
  return (
    (e = wi(e)),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter((t) => t !== e)),
    e
  );
}
function Ko(e, t) {
  t && t.pendingBranch
    ? f(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : on(e);
}
function Jo(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: r } = e;
  let o = t.el;
  for (; !o && t.component; ) o = (t = t.component.subTree).el;
  (n.el = o), r && r.subTree === n && ((r.vnode.el = o), qo(r, o));
}
const Qo = Symbol.for("v-fgt"),
  Zo = Symbol.for("v-txt"),
  ei = Symbol.for("v-cmt"),
  ti = Symbol.for("v-stc"),
  ni = [];
let ri = null;
function oi(e = !1) {
  ni.push((ri = e ? null : []));
}
function ii() {
  ni.pop(), (ri = ni[ni.length - 1] || null);
}
let si = 1;
function ai(e, t = !1) {
  (si += e), e < 0 && ri && t && (ri.hasOnce = !0);
}
function li(e) {
  return (
    (e.dynamicChildren = si > 0 ? ri || o : null),
    ii(),
    si > 0 && ri && ri.push(e),
    e
  );
}
function ci(e, t, n, r, o, i) {
  return li(mi(e, t, n, r, o, i, !0));
}
function ui(e, t, n, r, o) {
  return li(gi(e, t, n, r, o, !0));
}
function pi(e) {
  return !!e && !0 === e.__v_isVNode;
}
function di(e, t) {
  return e.type === t.type && e.key === t.key;
}
const fi = ({ key: e }) => (null != e ? e : null),
  hi = ({ ref: e, ref_key: t, ref_for: n }) => (
    "number" == typeof e && (e = "" + e),
    null != e
      ? y(e) || Ct(e) || v(e)
        ? { i: un, r: e, k: t, f: !!n }
        : e
      : null
  );
function mi(
  e,
  t = null,
  n = null,
  r = 0,
  o = null,
  i = e === Qo ? 0 : 1,
  s = !1,
  a = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && fi(t),
    ref: t && hi(t),
    scopeId: pn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: un,
  };
  return (
    a
      ? (xi(l, n), 128 & i && e.normalize(l))
      : n && (l.shapeFlag |= y(n) ? 8 : 16),
    si > 0 &&
      !s &&
      ri &&
      (l.patchFlag > 0 || 6 & i) &&
      32 !== l.patchFlag &&
      ri.push(l),
    l
  );
}
const gi = function (e, t = null, n = null, r = 0, o = null, i = !1) {
  (e && e !== kr) || (e = ei);
  if (pi(e)) {
    const r = vi(e, t, !0);
    return (
      n && xi(r, n),
      si > 0 &&
        !i &&
        ri &&
        (6 & r.shapeFlag ? (ri[ri.indexOf(e)] = r) : ri.push(r)),
      (r.patchFlag = -2),
      r
    );
  }
  (s = e), v(s) && "__vccOpts" in s && (e = e.__vccOpts);
  var s;
  if (t) {
    t = (function (e) {
      return e ? (_t(e) || so(e) ? c({}, e) : e) : null;
    })(t);
    let { class: e, style: n } = t;
    e && !y(e) && (t.class = W(e)),
      _(n) && (_t(n) && !f(n) && (n = c({}, n)), (t.style = U(n)));
  }
  const a = y(e) ? 1 : Ho(e) ? 128 : vn(e) ? 64 : _(e) ? 4 : v(e) ? 2 : 0;
  return mi(e, t, n, r, o, a, i, !0);
};
function vi(e, t, n = !1, r = !1) {
  const { props: o, ref: i, patchFlag: s, children: a, transition: l } = e,
    c = t ? ki(o || {}, t) : o,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: c,
      key: c && fi(c),
      ref:
        t && t.ref
          ? n && i
            ? f(i)
              ? i.concat(hi(t))
              : [i, hi(t)]
            : hi(t)
          : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: a,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Qo ? (-1 === s ? 16 : 16 | s) : s,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: l,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && vi(e.ssContent),
      ssFallback: e.ssFallback && vi(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return l && r && jn(u, l.clone(u)), u;
}
function yi(e = " ", t = 0) {
  return gi(Zo, null, e, t);
}
function bi(e, t) {
  const n = gi(ti, null, e);
  return (n.staticCount = t), n;
}
function _i(e = "", t = !1) {
  return t ? (oi(), ui(ei, null, e)) : gi(ei, null, e);
}
function wi(e) {
  return null == e || "boolean" == typeof e
    ? gi(ei)
    : f(e)
    ? gi(Qo, null, e.slice())
    : pi(e)
    ? Di(e)
    : gi(Zo, null, String(e));
}
function Di(e) {
  return (null === e.el && -1 !== e.patchFlag) || e.memo ? e : vi(e);
}
function xi(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (null == t) t = null;
  else if (f(t)) n = 16;
  else if ("object" == typeof t) {
    if (65 & r) {
      const n = t.default;
      return void (n && (n._c && (n._d = !1), xi(e, n()), n._c && (n._d = !0)));
    }
    {
      n = 32;
      const r = t._;
      r || so(t)
        ? 3 === r &&
          un &&
          (1 === un.slots._ ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
        : (t._ctx = un);
    }
  } else
    v(t)
      ? ((t = { default: t, _ctx: un }), (n = 32))
      : ((t = String(t)), 64 & r ? ((n = 16), (t = [yi(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function ki(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const e in r)
      if ("class" === e)
        t.class !== r.class && (t.class = W([t.class, r.class]));
      else if ("style" === e) t.style = U([t.style, r.style]);
      else if (a(e)) {
        const n = t[e],
          o = r[e];
        !o ||
          n === o ||
          (f(n) && n.includes(o)) ||
          (t[e] = n ? [].concat(n, o) : o);
      } else "" !== e && (t[e] = r[e]);
  }
  return t;
}
function Ci(e, t, n, r = null) {
  Wt(e, t, 7, [n, r]);
}
const Ei = Jr();
let Ti = 0;
let Si = null;
const Ai = () => Si || un;
let Oi, Pi;
{
  const e = $(),
    t = (t, n) => {
      let r;
      return (
        (r = e[t]) || (r = e[t] = []),
        r.push(n),
        (e) => {
          r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
        }
      );
    };
  (Oi = t("__VUE_INSTANCE_SETTERS__", (e) => (Si = e))),
    (Pi = t("__VUE_SSR_SETTERS__", (e) => (Ri = e)));
}
const Fi = (e) => {
    const t = Si;
    return (
      Oi(e),
      e.scope.on(),
      () => {
        e.scope.off(), Oi(t);
      }
    );
  },
  Li = () => {
    Si && Si.scope.off(), Oi(null);
  };
function Ni(e) {
  return 4 & e.vnode.shapeFlag;
}
let Ii,
  Ri = !1;
function Mi(e, t, n) {
  v(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : _(t) && (e.setupState = Ft(t)),
    Bi(e, n);
}
function Bi(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && Ii && !r.render) {
      const t = r.template || Hr(e).template;
      if (t) {
        const { isCustomElement: n, compilerOptions: o } = e.appContext.config,
          { delimiters: i, compilerOptions: s } = r,
          a = c(c({ isCustomElement: n, delimiters: i }, o), s);
        r.render = Ii(t, a);
      }
    }
    e.render = r.render || i;
  }
  {
    const t = Fi(e);
    xe();
    try {
      $r(e);
    } finally {
      ke(), t();
    }
  }
}
const ji = { get: (e, t) => (Ne(e, 0, ""), e[t]) };
function $i(e) {
  const t = (t) => {
    e.exposed = t || {};
  };
  return {
    attrs: new Proxy(e.attrs, ji),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function Ui(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(Ft(Dt(e.exposed)), {
          get: (t, n) => (n in t ? t[n] : n in Fr ? Fr[n](e) : void 0),
          has: (e, t) => t in e || t in Fr,
        }))
    : e.proxy;
}
function qi(e, t = !0) {
  return v(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
const Hi = (e, t) => {
  const n = (function (e, t, n = !1) {
    let r, o;
    return v(e) ? (r = e) : ((r = e.get), (o = e.set)), new jt(r, o, n);
  })(e, 0, Ri);
  return n;
};
function zi(e, t, n) {
  const r = arguments.length;
  return 2 === r
    ? _(t) && !f(t)
      ? pi(t)
        ? gi(e, null, [t])
        : gi(e, t)
      : gi(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : 3 === r && pi(n) && (n = [n]),
      gi(e, t, n));
}
const Vi = "3.5.13";
let Wi;
const Yi = "undefined" != typeof window && window.trustedTypes;
if (Yi)
  try {
    Wi = Yi.createPolicy("vue", { createHTML: (e) => e });
  } catch (iI) {}
const Xi = Wi ? (e) => Wi.createHTML(e) : (e) => e,
  Gi = "undefined" != typeof document ? document : null,
  Ki = Gi && Gi.createElement("template"),
  Ji = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const o =
        "svg" === t
          ? Gi.createElementNS("http://www.w3.org/2000/svg", e)
          : "mathml" === t
          ? Gi.createElementNS("http://www.w3.org/1998/Math/MathML", e)
          : n
          ? Gi.createElement(e, { is: n })
          : Gi.createElement(e);
      return (
        "select" === e &&
          r &&
          null != r.multiple &&
          o.setAttribute("multiple", r.multiple),
        o
      );
    },
    createText: (e) => Gi.createTextNode(e),
    createComment: (e) => Gi.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Gi.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, o, i) {
      const s = n ? n.previousSibling : t.lastChild;
      if (o && (o === i || o.nextSibling))
        for (
          ;
          t.insertBefore(o.cloneNode(!0), n), o !== i && (o = o.nextSibling);

        );
      else {
        Ki.innerHTML = Xi(
          "svg" === r
            ? `<svg>${e}</svg>`
            : "mathml" === r
            ? `<math>${e}</math>`
            : e
        );
        const o = Ki.content;
        if ("svg" === r || "mathml" === r) {
          const e = o.firstChild;
          for (; e.firstChild; ) o.appendChild(e.firstChild);
          o.removeChild(e);
        }
        t.insertBefore(o, n);
      }
      return [
        s ? s.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  Qi = "transition",
  Zi = "animation",
  es = Symbol("_vtc"),
  ts = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  ns = c({}, Pn, ts),
  rs = ((e) => ((e.displayName = "Transition"), (e.props = ns), e))(
    (e, { slots: t }) =>
      zi(
        Nn,
        (function (e) {
          const t = {};
          for (const c in e) c in ts || (t[c] = e[c]);
          if (!1 === e.css) return t;
          const {
              name: n = "v",
              type: r,
              duration: o,
              enterFromClass: i = `${n}-enter-from`,
              enterActiveClass: s = `${n}-enter-active`,
              enterToClass: a = `${n}-enter-to`,
              appearFromClass: l = i,
              appearActiveClass: u = s,
              appearToClass: p = a,
              leaveFromClass: d = `${n}-leave-from`,
              leaveActiveClass: f = `${n}-leave-active`,
              leaveToClass: h = `${n}-leave-to`,
            } = e,
            m = (function (e) {
              if (null == e) return null;
              if (_(e)) return [ss(e.enter), ss(e.leave)];
              {
                const t = ss(e);
                return [t, t];
              }
            })(o),
            g = m && m[0],
            v = m && m[1],
            {
              onBeforeEnter: y,
              onEnter: b,
              onEnterCancelled: w,
              onLeave: D,
              onLeaveCancelled: x,
              onBeforeAppear: k = y,
              onAppear: C = b,
              onAppearCancelled: E = w,
            } = t,
            T = (e, t, n, r) => {
              (e._enterCancelled = r),
                ls(e, t ? p : a),
                ls(e, t ? u : s),
                n && n();
            },
            S = (e, t) => {
              (e._isLeaving = !1), ls(e, d), ls(e, h), ls(e, f), t && t();
            },
            A = (e) => (t, n) => {
              const o = e ? C : b,
                s = () => T(t, e, n);
              os(o, [t, s]),
                cs(() => {
                  ls(t, e ? l : i), as(t, e ? p : a), is(o) || ps(t, r, g, s);
                });
            };
          return c(t, {
            onBeforeEnter(e) {
              os(y, [e]), as(e, i), as(e, s);
            },
            onBeforeAppear(e) {
              os(k, [e]), as(e, l), as(e, u);
            },
            onEnter: A(!1),
            onAppear: A(!0),
            onLeave(e, t) {
              e._isLeaving = !0;
              const n = () => S(e, t);
              as(e, d),
                e._enterCancelled ? (as(e, f), hs()) : (hs(), as(e, f)),
                cs(() => {
                  e._isLeaving && (ls(e, d), as(e, h), is(D) || ps(e, r, v, n));
                }),
                os(D, [e, n]);
            },
            onEnterCancelled(e) {
              T(e, !1, void 0, !0), os(w, [e]);
            },
            onAppearCancelled(e) {
              T(e, !0, void 0, !0), os(E, [e]);
            },
            onLeaveCancelled(e) {
              S(e), os(x, [e]);
            },
          });
        })(e),
        t
      )
  ),
  os = (e, t = []) => {
    f(e) ? e.forEach((e) => e(...t)) : e && e(...t);
  },
  is = (e) => !!e && (f(e) ? e.some((e) => e.length > 1) : e.length > 1);
function ss(e) {
  return B(e);
}
function as(e, t) {
  t.split(/\s+/).forEach((t) => t && e.classList.add(t)),
    (e[es] || (e[es] = new Set())).add(t);
}
function ls(e, t) {
  t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
  const n = e[es];
  n && (n.delete(t), n.size || (e[es] = void 0));
}
function cs(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let us = 0;
function ps(e, t, n, r) {
  const o = (e._endId = ++us),
    i = () => {
      o === e._endId && r();
    };
  if (null != n) return setTimeout(i, n);
  const {
    type: s,
    timeout: a,
    propCount: l,
  } = (function (e, t) {
    const n = window.getComputedStyle(e),
      r = (e) => (n[e] || "").split(", "),
      o = r(`${Qi}Delay`),
      i = r(`${Qi}Duration`),
      s = ds(o, i),
      a = r(`${Zi}Delay`),
      l = r(`${Zi}Duration`),
      c = ds(a, l);
    let u = null,
      p = 0,
      d = 0;
    t === Qi
      ? s > 0 && ((u = Qi), (p = s), (d = i.length))
      : t === Zi
      ? c > 0 && ((u = Zi), (p = c), (d = l.length))
      : ((p = Math.max(s, c)),
        (u = p > 0 ? (s > c ? Qi : Zi) : null),
        (d = u ? (u === Qi ? i.length : l.length) : 0));
    const f =
      u === Qi && /\b(transform|all)(,|$)/.test(r(`${Qi}Property`).toString());
    return { type: u, timeout: p, propCount: d, hasTransform: f };
  })(e, t);
  if (!s) return r();
  const c = s + "end";
  let u = 0;
  const p = () => {
      e.removeEventListener(c, d), i();
    },
    d = (t) => {
      t.target === e && ++u >= l && p();
    };
  setTimeout(() => {
    u < l && p();
  }, a + 1),
    e.addEventListener(c, d);
}
function ds(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((t, n) => fs(t) + fs(e[n])));
}
function fs(e) {
  return "auto" === e ? 0 : 1e3 * Number(e.slice(0, -1).replace(",", "."));
}
function hs() {
  return document.body.offsetHeight;
}
const ms = Symbol("_vod"),
  gs = Symbol("_vsh"),
  vs = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e[ms] = "none" === e.style.display ? "" : e.style.display),
        n && t ? n.beforeEnter(e) : ys(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n &&
        (r
          ? t
            ? (r.beforeEnter(e), ys(e, !0), r.enter(e))
            : r.leave(e, () => {
                ys(e, !1);
              })
          : ys(e, t));
    },
    beforeUnmount(e, { value: t }) {
      ys(e, t);
    },
  };
function ys(e, t) {
  (e.style.display = t ? e[ms] : "none"), (e[gs] = !t);
}
const bs = Symbol("");
function _s(e) {
  const t = Ai();
  if (!t) return;
  const n = (t.ut = (n = e(t.proxy)) => {
      Array.from(
        document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
      ).forEach((e) => Ds(e, n));
    }),
    r = () => {
      const r = e(t.proxy);
      t.ce ? Ds(t.ce, r) : ws(t.subTree, r), n(r);
    };
  hr(() => {
    on(r);
  }),
    fr(() => {
      Ao(r, i, { flush: "post" });
      const e = new MutationObserver(r);
      e.observe(t.subTree.el.parentNode, { childList: !0 }),
        vr(() => e.disconnect());
    });
}
function ws(e, t) {
  if (128 & e.shapeFlag) {
    const n = e.suspense;
    (e = n.activeBranch),
      n.pendingBranch &&
        !n.isHydrating &&
        n.effects.push(() => {
          ws(n.activeBranch, t);
        });
  }
  for (; e.component; ) e = e.component.subTree;
  if (1 & e.shapeFlag && e.el) Ds(e.el, t);
  else if (e.type === Qo) e.children.forEach((e) => ws(e, t));
  else if (e.type === ti) {
    let { el: n, anchor: r } = e;
    for (; n && (Ds(n, t), n !== r); ) n = n.nextSibling;
  }
}
function Ds(e, t) {
  if (1 === e.nodeType) {
    const n = e.style;
    let r = "";
    for (const e in t) n.setProperty(`--${e}`, t[e]), (r += `--${e}: ${t[e]};`);
    n[bs] = r;
  }
}
const xs = /(^|;)\s*display\s*:/;
const ks = /\s*!important$/;
function Cs(e, t, n) {
  if (f(n)) n.forEach((n) => Cs(e, t, n));
  else if ((null == n && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const r = (function (e, t) {
      const n = Ts[t];
      if (n) return n;
      let r = A(t);
      if ("filter" !== r && r in e) return (Ts[t] = r);
      r = F(r);
      for (let o = 0; o < Es.length; o++) {
        const n = Es[o] + r;
        if (n in e) return (Ts[t] = n);
      }
      return t;
    })(e, t);
    ks.test(n)
      ? e.setProperty(P(r), n.replace(ks, ""), "important")
      : (e[r] = n);
  }
}
const Es = ["Webkit", "Moz", "ms"],
  Ts = {};
const Ss = "http://www.w3.org/1999/xlink";
function As(e, t, n, r, o, i = Y(t)) {
  r && t.startsWith("xlink:")
    ? null == n
      ? e.removeAttributeNS(Ss, t.slice(6, t.length))
      : e.setAttributeNS(Ss, t, n)
    : null == n || (i && !X(n))
    ? e.removeAttribute(t)
    : e.setAttribute(t, i ? "" : b(n) ? String(n) : n);
}
function Os(e, t, n, r, o) {
  if ("innerHTML" === t || "textContent" === t)
    return void (null != n && (e[t] = "innerHTML" === t ? Xi(n) : n));
  const i = e.tagName;
  if ("value" === t && "PROGRESS" !== i && !i.includes("-")) {
    const r = "OPTION" === i ? e.getAttribute("value") || "" : e.value,
      o = null == n ? ("checkbox" === e.type ? "on" : "") : String(n);
    return (
      (r === o && "_value" in e) || (e.value = o),
      null == n && e.removeAttribute(t),
      void (e._value = n)
    );
  }
  let s = !1;
  if ("" === n || null == n) {
    const r = typeof e[t];
    "boolean" === r
      ? (n = X(n))
      : null == n && "string" === r
      ? ((n = ""), (s = !0))
      : "number" === r && ((n = 0), (s = !0));
  }
  try {
    e[t] = n;
  } catch (iI) {}
  s && e.removeAttribute(o || t);
}
function Ps(e, t, n, r) {
  e.addEventListener(t, n, r);
}
const Fs = Symbol("_vei");
function Ls(e, t, n, r, o = null) {
  const i = e[Fs] || (e[Fs] = {}),
    s = i[t];
  if (r && s) s.value = r;
  else {
    const [n, a] = (function (e) {
      let t;
      if (Ns.test(e)) {
        let n;
        for (t = {}; (n = e.match(Ns)); )
          (e = e.slice(0, e.length - n[0].length)),
            (t[n[0].toLowerCase()] = !0);
      }
      const n = ":" === e[2] ? e.slice(3) : P(e.slice(2));
      return [n, t];
    })(t);
    if (r) {
      const s = (i[t] = (function (e, t) {
        const n = (e) => {
          if (e._vts) {
            if (e._vts <= n.attached) return;
          } else e._vts = Date.now();
          Wt(
            (function (e, t) {
              if (f(t)) {
                const n = e.stopImmediatePropagation;
                return (
                  (e.stopImmediatePropagation = () => {
                    n.call(e), (e._stopped = !0);
                  }),
                  t.map((e) => (t) => !t._stopped && e && e(t))
                );
              }
              return t;
            })(e, n.value),
            t,
            5,
            [e]
          );
        };
        return (n.value = e), (n.attached = Ms()), n;
      })(r, o));
      Ps(e, n, s, a);
    } else
      s &&
        (!(function (e, t, n, r) {
          e.removeEventListener(t, n, r);
        })(e, n, s, a),
        (i[t] = void 0));
  }
}
const Ns = /(?:Once|Passive|Capture)$/;
let Is = 0;
const Rs = Promise.resolve(),
  Ms = () => Is || (Rs.then(() => (Is = 0)), (Is = Date.now()));
const Bs = (e) =>
  111 === e.charCodeAt(0) &&
  110 === e.charCodeAt(1) &&
  e.charCodeAt(2) > 96 &&
  e.charCodeAt(2) < 123;
const js = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return f(t) ? (e) => I(t, e) : t;
};
function $s(e) {
  e.target.composing = !0;
}
function Us(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const qs = Symbol("_assign"),
  Hs = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
      e[qs] = js(o);
      const i = r || (o.props && "number" === o.props.type);
      Ps(e, t ? "change" : "input", (t) => {
        if (t.target.composing) return;
        let r = e.value;
        n && (r = r.trim()), i && (r = M(r)), e[qs](r);
      }),
        n &&
          Ps(e, "change", () => {
            e.value = e.value.trim();
          }),
        t ||
          (Ps(e, "compositionstart", $s),
          Ps(e, "compositionend", Us),
          Ps(e, "change", Us));
    },
    mounted(e, { value: t }) {
      e.value = null == t ? "" : t;
    },
    beforeUpdate(
      e,
      { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: i } },
      s
    ) {
      if (((e[qs] = js(s)), e.composing)) return;
      const a = null == t ? "" : t;
      if (
        ((!i && "number" !== e.type) || /^0\d/.test(e.value)
          ? e.value
          : M(e.value)) !== a
      ) {
        if (document.activeElement === e && "range" !== e.type) {
          if (r && t === n) return;
          if (o && e.value.trim() === a) return;
        }
        e.value = a;
      }
    },
  },
  zs = {
    deep: !0,
    created(e, t, n) {
      (e[qs] = js(n)),
        Ps(e, "change", () => {
          const t = e._modelValue,
            n = Gs(e),
            r = e.checked,
            o = e[qs];
          if (f(t)) {
            const e = K(t, n),
              i = -1 !== e;
            if (r && !i) o(t.concat(n));
            else if (!r && i) {
              const n = [...t];
              n.splice(e, 1), o(n);
            }
          } else if (m(t)) {
            const e = new Set(t);
            r ? e.add(n) : e.delete(n), o(e);
          } else o(Ks(e, r));
        });
    },
    mounted: Vs,
    beforeUpdate(e, t, n) {
      (e[qs] = js(n)), Vs(e, t, n);
    },
  };
function Vs(e, { value: t, oldValue: n }, r) {
  let o;
  if (((e._modelValue = t), f(t))) o = K(t, r.props.value) > -1;
  else if (m(t)) o = t.has(r.props.value);
  else {
    if (t === n) return;
    o = G(t, Ks(e, !0));
  }
  e.checked !== o && (e.checked = o);
}
const Ws = {
    created(e, { value: t }, n) {
      (e.checked = G(t, n.props.value)),
        (e[qs] = js(n)),
        Ps(e, "change", () => {
          e[qs](Gs(e));
        });
    },
    beforeUpdate(e, { value: t, oldValue: n }, r) {
      (e[qs] = js(r)), t !== n && (e.checked = G(t, r.props.value));
    },
  },
  Ys = {
    deep: !0,
    created(e, { value: t, modifiers: { number: n } }, r) {
      const o = m(t);
      Ps(e, "change", () => {
        const t = Array.prototype.filter
          .call(e.options, (e) => e.selected)
          .map((e) => (n ? M(Gs(e)) : Gs(e)));
        e[qs](e.multiple ? (o ? new Set(t) : t) : t[0]),
          (e._assigning = !0),
          tn(() => {
            e._assigning = !1;
          });
      }),
        (e[qs] = js(r));
    },
    mounted(e, { value: t }) {
      Xs(e, t);
    },
    beforeUpdate(e, t, n) {
      e[qs] = js(n);
    },
    updated(e, { value: t }) {
      e._assigning || Xs(e, t);
    },
  };
function Xs(e, t) {
  const n = e.multiple,
    r = f(t);
  if (!n || r || m(t)) {
    for (let o = 0, i = e.options.length; o < i; o++) {
      const i = e.options[o],
        s = Gs(i);
      if (n)
        if (r) {
          const e = typeof s;
          i.selected =
            "string" === e || "number" === e
              ? t.some((e) => String(e) === String(s))
              : K(t, s) > -1;
        } else i.selected = t.has(s);
      else if (G(Gs(i), t))
        return void (e.selectedIndex !== o && (e.selectedIndex = o));
    }
    n || -1 === e.selectedIndex || (e.selectedIndex = -1);
  }
}
function Gs(e) {
  return "_value" in e ? e._value : e.value;
}
function Ks(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Js = {
  created(e, t, n) {
    Qs(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    Qs(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, r) {
    Qs(e, t, n, r, "beforeUpdate");
  },
  updated(e, t, n, r) {
    Qs(e, t, n, r, "updated");
  },
};
function Qs(e, t, n, r, o) {
  const i = (function (e, t) {
    switch (e) {
      case "SELECT":
        return Ys;
      case "TEXTAREA":
        return Hs;
      default:
        switch (t) {
          case "checkbox":
            return zs;
          case "radio":
            return Ws;
          default:
            return Hs;
        }
    }
  })(e.tagName, n.props && n.props.type)[o];
  i && i(e, t, n, r);
}
const Zs = ["ctrl", "shift", "alt", "meta"],
  ea = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && 0 !== e.button,
    middle: (e) => "button" in e && 1 !== e.button,
    right: (e) => "button" in e && 2 !== e.button,
    exact: (e, t) => Zs.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  ta = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      r = t.join(".");
    return (
      n[r] ||
      (n[r] = (n, ...r) => {
        for (let e = 0; e < t.length; e++) {
          const r = ea[t[e]];
          if (r && r(n, t)) return;
        }
        return e(n, ...r);
      })
    );
  },
  na = c(
    {
      patchProp: (e, t, n, r, o, i) => {
        const s = "svg" === o;
        "class" === t
          ? (function (e, t, n) {
              const r = e[es];
              r && (t = (t ? [t, ...r] : [...r]).join(" ")),
                null == t
                  ? e.removeAttribute("class")
                  : n
                  ? e.setAttribute("class", t)
                  : (e.className = t);
            })(e, r, s)
          : "style" === t
          ? (function (e, t, n) {
              const r = e.style,
                o = y(n);
              let i = !1;
              if (n && !o) {
                if (t)
                  if (y(t))
                    for (const e of t.split(";")) {
                      const t = e.slice(0, e.indexOf(":")).trim();
                      null == n[t] && Cs(r, t, "");
                    }
                  else for (const e in t) null == n[e] && Cs(r, e, "");
                for (const e in n) "display" === e && (i = !0), Cs(r, e, n[e]);
              } else if (o) {
                if (t !== n) {
                  const e = r[bs];
                  e && (n += ";" + e), (r.cssText = n), (i = xs.test(n));
                }
              } else t && e.removeAttribute("style");
              ms in e &&
                ((e[ms] = i ? r.display : ""), e[gs] && (r.display = "none"));
            })(e, n, r)
          : a(t)
          ? l(t) || Ls(e, t, 0, r, i)
          : (
              "." === t[0]
                ? ((t = t.slice(1)), 1)
                : "^" === t[0]
                ? ((t = t.slice(1)), 0)
                : (function (e, t, n, r) {
                    if (r)
                      return (
                        "innerHTML" === t ||
                        "textContent" === t ||
                        !!(t in e && Bs(t) && v(n))
                      );
                    if (
                      "spellcheck" === t ||
                      "draggable" === t ||
                      "translate" === t
                    )
                      return !1;
                    if ("form" === t) return !1;
                    if ("list" === t && "INPUT" === e.tagName) return !1;
                    if ("type" === t && "TEXTAREA" === e.tagName) return !1;
                    if ("width" === t || "height" === t) {
                      const t = e.tagName;
                      if (
                        "IMG" === t ||
                        "VIDEO" === t ||
                        "CANVAS" === t ||
                        "SOURCE" === t
                      )
                        return !1;
                    }
                    if (Bs(t) && y(n)) return !1;
                    return t in e;
                  })(e, t, r, s)
            )
          ? (Os(e, t, r),
            e.tagName.includes("-") ||
              ("value" !== t && "checked" !== t && "selected" !== t) ||
              As(e, t, r, s, 0, "value" !== t))
          : !e._isVueCE || (!/[A-Z]/.test(t) && y(r))
          ? ("true-value" === t
              ? (e._trueValue = r)
              : "false-value" === t && (e._falseValue = r),
            As(e, t, r, s))
          : Os(e, A(t), r, 0, t);
      },
    },
    Ji
  );
let ra,
  oa = !1;
function ia() {
  return ra || (ra = _o(na));
}
function sa() {
  return (ra = oa ? ra : _o(na, Xn)), (oa = !0), ra;
}
function aa(e) {
  return e instanceof SVGElement
    ? "svg"
    : "function" == typeof MathMLElement && e instanceof MathMLElement
    ? "mathml"
    : void 0;
}
function la(e) {
  if (y(e)) {
    return document.querySelector(e);
  }
  return e;
}
const ca =
    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  ua =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  pa = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function da(e, t) {
  if (
    !(
      "__proto__" === e ||
      ("constructor" === e && t && "object" == typeof t && "prototype" in t)
    )
  )
    return t;
}
function fa(e, t = {}) {
  if ("string" != typeof e) return e;
  const n = e.trim();
  if ('"' === e[0] && e.endsWith('"') && !e.includes("\\"))
    return n.slice(1, -1);
  if (n.length <= 9) {
    const e = n.toLowerCase();
    if ("true" === e) return !0;
    if ("false" === e) return !1;
    if ("undefined" === e) return;
    if ("null" === e) return null;
    if ("nan" === e) return Number.NaN;
    if ("infinity" === e) return Number.POSITIVE_INFINITY;
    if ("-infinity" === e) return Number.NEGATIVE_INFINITY;
  }
  if (!pa.test(e)) {
    if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
    return e;
  }
  try {
    if (ca.test(e) || ua.test(e)) {
      if (t.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(e, da);
    }
    return JSON.parse(e);
  } catch (r) {
    if (t.strict) throw r;
    return e;
  }
}
const ha = /#/g,
  ma = /&/g,
  ga = /\//g,
  va = /=/g,
  ya = /\?/g,
  ba = /\+/g,
  _a = /%5e/gi,
  wa = /%60/gi,
  Da = /%7c/gi,
  xa = /%20/gi,
  ka = /%252f/gi;
function Ca(e) {
  return encodeURI("" + e).replace(Da, "|");
}
function Ea(e) {
  return Ca("string" == typeof e ? e : JSON.stringify(e))
    .replace(ba, "%2B")
    .replace(xa, "+")
    .replace(ha, "%23")
    .replace(ma, "%26")
    .replace(wa, "`")
    .replace(_a, "^")
    .replace(ga, "%2F");
}
function Ta(e) {
  return Ea(e).replace(va, "%3D");
}
function Sa(e) {
  return Ca(e)
    .replace(ha, "%23")
    .replace(ya, "%3F")
    .replace(ka, "%2F")
    .replace(ma, "%26")
    .replace(ba, "%2B");
}
function Aa(e) {
  return Sa(e).replace(ga, "%2F");
}
function Oa(e = "") {
  try {
    return decodeURIComponent("" + e);
  } catch {
    return "" + e;
  }
}
function Pa(e) {
  return Oa(e.replace(ba, " "));
}
function Fa(e = "") {
  const t = {};
  "?" === e[0] && (e = e.slice(1));
  for (const n of e.split("&")) {
    const e = n.match(/([^=]+)=?(.*)/) || [];
    if (e.length < 2) continue;
    const r = Oa(e[1].replace(ba, " "));
    if ("__proto__" === r || "constructor" === r) continue;
    const o = Pa(e[2] || "");
    void 0 === t[r]
      ? (t[r] = o)
      : Array.isArray(t[r])
      ? t[r].push(o)
      : (t[r] = [t[r], o]);
  }
  return t;
}
function La(e) {
  return Object.keys(e)
    .filter((t) => void 0 !== e[t])
    .map((t) => {
      return (
        (n = t),
        ("number" != typeof (r = e[t]) && "boolean" != typeof r) ||
          (r = String(r)),
        r
          ? Array.isArray(r)
            ? r.map((e) => `${Ta(n)}=${Ea(e)}`).join("&")
            : `${Ta(n)}=${Ea(r)}`
          : Ta(n)
      );
      var n, r;
    })
    .filter(Boolean)
    .join("&");
}
const Na = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
  Ia = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
  Ra = /^([/\\]\s*){2,}[^/\\]/,
  Ma = /^[\s\0]*(blob|data|javascript|vbscript):$/i,
  Ba = /\/$|\/\?|\/#/,
  ja = /^\.?\//;
function $a(e, t = {}) {
  return (
    "boolean" == typeof t && (t = { acceptRelative: t }),
    t.strict ? Na.test(e) : Ia.test(e) || (!!t.acceptRelative && Ra.test(e))
  );
}
function Ua(e = "", t) {
  return t ? Ba.test(e) : e.endsWith("/");
}
function qa(e = "", t) {
  if (!t) return (Ua(e) ? e.slice(0, -1) : e) || "/";
  if (!Ua(e, !0)) return e || "/";
  let n = e,
    r = "";
  const o = e.indexOf("#");
  o >= 0 && ((n = e.slice(0, o)), (r = e.slice(o)));
  const [i, ...s] = n.split("?");
  return (
    ((i.endsWith("/") ? i.slice(0, -1) : i) || "/") +
    (s.length > 0 ? `?${s.join("?")}` : "") +
    r
  );
}
function Ha(e = "", t) {
  if (!t) return e.endsWith("/") ? e : e + "/";
  if (Ua(e, !0)) return e || "/";
  let n = e,
    r = "";
  const o = e.indexOf("#");
  if (o >= 0 && ((n = e.slice(0, o)), (r = e.slice(o)), !n)) return r;
  const [i, ...s] = n.split("?");
  return i + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + r;
}
function za(e = "") {
  return (function (e = "") {
    return e.startsWith("/");
  })(e)
    ? e
    : "/" + e;
}
function Va(e, t) {
  if (Ya(t)) return e;
  const n = qa(t);
  if (!e.startsWith(n)) return e;
  const r = e.slice(n.length);
  return "/" === r[0] ? r : "/" + r;
}
function Wa(e, t) {
  const n = Qa(e),
    r = { ...Fa(n.search), ...t };
  return (
    (n.search = La(r)),
    (function (e) {
      const t = e.pathname || "",
        n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "",
        r = e.hash || "",
        o = e.auth ? e.auth + "@" : "",
        i = e.host || "",
        s = e.protocol || e[Ja] ? (e.protocol || "") + "//" : "";
      return s + o + i + t + n + r;
    })(n)
  );
}
function Ya(e) {
  return !e || "/" === e;
}
function Xa(e, ...t) {
  let n = e || "";
  for (const r of t.filter((e) =>
    (function (e) {
      return e && "/" !== e;
    })(e)
  ))
    if (n) {
      const e = r.replace(ja, "");
      n = Ha(n) + e;
    } else n = r;
  return n;
}
function Ga(...e) {
  var t, n, r, o;
  const i = /\/(?!\/)/,
    s = e.filter(Boolean),
    a = [];
  let l = 0;
  for (const u of s)
    if (u && "/" !== u)
      for (const [e, n] of u.split(i).entries())
        if (n && "." !== n)
          if (".." !== n)
            1 === e &&
            (null == (t = a[a.length - 1]) ? void 0 : t.endsWith(":/"))
              ? (a[a.length - 1] += "/" + n)
              : (a.push(n), l++);
          else {
            if (1 === a.length && $a(a[0])) continue;
            a.pop(), l--;
          }
  let c = a.join("/");
  return (
    l >= 0
      ? (null == (n = s[0]) ? void 0 : n.startsWith("/")) && !c.startsWith("/")
        ? (c = "/" + c)
        : (null == (r = s[0]) ? void 0 : r.startsWith("./")) &&
          !c.startsWith("./") &&
          (c = "./" + c)
      : (c = "/".repeat(-1 * l) + c),
    (null == (o = s[s.length - 1]) ? void 0 : o.endsWith("/")) &&
      !c.endsWith("/") &&
      (c += "/"),
    c
  );
}
function Ka(e, t, n = {}) {
  return (
    n.trailingSlash || ((e = Ha(e)), (t = Ha(t))),
    n.leadingSlash || ((e = za(e)), (t = za(t))),
    n.encoding || ((e = Oa(e)), (t = Oa(t))),
    e === t
  );
}
const Ja = Symbol.for("ufo:protocolRelative");
function Qa(e = "", t) {
  const n = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (n) {
    const [, e, t = ""] = n;
    return {
      protocol: e.toLowerCase(),
      pathname: t,
      href: e + t,
      auth: "",
      host: "",
      search: "",
      hash: "",
    };
  }
  if (!$a(e, { acceptRelative: !0 })) return Za(e);
  const [, r = "", o, i = ""] =
    e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) ||
    [];
  let [, s = "", a = ""] = i.match(/([^#/?]*)(.*)?/) || [];
  "file:" === r && (a = a.replace(/\/(?=[A-Za-z]:)/, ""));
  const { pathname: l, search: c, hash: u } = Za(a);
  return {
    protocol: r.toLowerCase(),
    auth: o ? o.slice(0, Math.max(0, o.length - 1)) : "",
    host: s,
    pathname: l,
    search: c,
    hash: u,
    [Ja]: !r,
  };
}
function Za(e = "") {
  const [t = "", n = "", r = ""] = (
    e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []
  ).splice(1);
  return { pathname: t, search: n, hash: r };
}
class el extends Error {
  constructor(e, t) {
    super(e, t),
      (this.name = "FetchError"),
      (null == t ? void 0 : t.cause) && !this.cause && (this.cause = t.cause);
  }
}
const tl = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function nl(e = "GET") {
  return tl.has(e.toUpperCase());
}
const rl = new Set([
    "image/svg",
    "application/xml",
    "application/xhtml",
    "application/html",
  ]),
  ol = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function il(e, t, n, r) {
  const o = (function (e, t, n) {
    if (!t) return new n(e);
    const r = new n(t);
    if (e)
      for (const [o, i] of Symbol.iterator in e || Array.isArray(e)
        ? e
        : new n(e))
        r.set(o, i);
    return r;
  })(
    (null == t ? void 0 : t.headers) ?? (null == e ? void 0 : e.headers),
    null == n ? void 0 : n.headers,
    r
  );
  let i;
  return (
    ((null == n ? void 0 : n.query) ||
      (null == n ? void 0 : n.params) ||
      (null == t ? void 0 : t.params) ||
      (null == t ? void 0 : t.query)) &&
      (i = {
        ...(null == n ? void 0 : n.params),
        ...(null == n ? void 0 : n.query),
        ...(null == t ? void 0 : t.params),
        ...(null == t ? void 0 : t.query),
      }),
    { ...n, ...t, query: i, params: i, headers: o }
  );
}
async function sl(e, t) {
  if (t)
    if (Array.isArray(t)) for (const n of t) await n(e);
    else await t(e);
}
const al = new Set([408, 409, 425, 429, 500, 502, 503, 504]),
  ll = new Set([101, 204, 205, 304]);
const cl = (function () {
    if ("undefined" != typeof globalThis) return globalThis;
    if ("undefined" != typeof self) return self;
    if ("undefined" != typeof window) return window;
    if ("undefined" != typeof global) return global;
    throw new Error("unable to locate global object");
  })(),
  ul = (function e(t = {}) {
    const {
      fetch: n = globalThis.fetch,
      Headers: r = globalThis.Headers,
      AbortController: o = globalThis.AbortController,
    } = t;
    async function i(e) {
      const t =
        (e.error && "AbortError" === e.error.name && !e.options.timeout) || !1;
      if (!1 !== e.options.retry && !t) {
        let t;
        t =
          "number" == typeof e.options.retry
            ? e.options.retry
            : nl(e.options.method)
            ? 0
            : 1;
        const n = (e.response && e.response.status) || 500;
        if (
          t > 0 &&
          (Array.isArray(e.options.retryStatusCodes)
            ? e.options.retryStatusCodes.includes(n)
            : al.has(n))
        ) {
          const n =
            "function" == typeof e.options.retryDelay
              ? e.options.retryDelay(e)
              : e.options.retryDelay || 0;
          return (
            n > 0 && (await new Promise((e) => setTimeout(e, n))),
            s(e.request, { ...e.options, retry: t - 1 })
          );
        }
      }
      const n = (function (e) {
        var t, n, r, o, i;
        const s =
            (null == (t = e.error) ? void 0 : t.message) ||
            (null == (n = e.error) ? void 0 : n.toString()) ||
            "",
          a =
            (null == (r = e.request) ? void 0 : r.method) ||
            (null == (o = e.options) ? void 0 : o.method) ||
            "GET",
          l =
            (null == (i = e.request) ? void 0 : i.url) ||
            String(e.request) ||
            "/",
          c = `[${a}] ${JSON.stringify(l)}`,
          u = e.response
            ? `${e.response.status} ${e.response.statusText}`
            : "<no response>",
          p = new el(
            `${c}: ${u}${s ? ` ${s}` : ""}`,
            e.error ? { cause: e.error } : void 0
          );
        for (const d of ["request", "options", "response"])
          Object.defineProperty(p, d, { get: () => e[d] });
        for (const [d, f] of [
          ["data", "_data"],
          ["status", "status"],
          ["statusCode", "status"],
          ["statusText", "statusText"],
          ["statusMessage", "statusText"],
        ])
          Object.defineProperty(p, d, {
            get: () => e.response && e.response[f],
          });
        return p;
      })(e);
      throw (Error.captureStackTrace && Error.captureStackTrace(n, s), n);
    }
    const s = async function (e, s = {}) {
        const a = {
          request: e,
          options: il(e, s, t.defaults, r),
          response: void 0,
          error: void 0,
        };
        let l;
        if (
          (a.options.method &&
            (a.options.method = a.options.method.toUpperCase()),
          a.options.onRequest && (await sl(a, a.options.onRequest)),
          "string" == typeof a.request &&
            (a.options.baseURL &&
              (a.request = (function (e, t) {
                if (Ya(t) || $a(e)) return e;
                const n = qa(t);
                return e.startsWith(n) ? e : Xa(n, e);
              })(a.request, a.options.baseURL)),
            a.options.query &&
              ((a.request = Wa(a.request, a.options.query)),
              delete a.options.query),
            "query" in a.options && delete a.options.query,
            "params" in a.options && delete a.options.params),
          a.options.body &&
            nl(a.options.method) &&
            (!(function (e) {
              if (void 0 === e) return !1;
              const t = typeof e;
              return (
                "string" === t ||
                "number" === t ||
                "boolean" === t ||
                null === t ||
                ("object" === t &&
                  (!!Array.isArray(e) ||
                    (!e.buffer &&
                      ((e.constructor && "Object" === e.constructor.name) ||
                        "function" == typeof e.toJSON))))
              );
            })(a.options.body)
              ? (("pipeTo" in a.options.body &&
                  "function" == typeof a.options.body.pipeTo) ||
                  "function" == typeof a.options.body.pipe) &&
                ("duplex" in a.options || (a.options.duplex = "half"))
              : ((a.options.body =
                  "string" == typeof a.options.body
                    ? a.options.body
                    : JSON.stringify(a.options.body)),
                (a.options.headers = new r(a.options.headers || {})),
                a.options.headers.has("content-type") ||
                  a.options.headers.set("content-type", "application/json"),
                a.options.headers.has("accept") ||
                  a.options.headers.set("accept", "application/json"))),
          !a.options.signal && a.options.timeout)
        ) {
          const e = new o();
          (l = setTimeout(() => {
            const t = new Error(
              "[TimeoutError]: The operation was aborted due to timeout"
            );
            (t.name = "TimeoutError"), (t.code = 23), e.abort(t);
          }, a.options.timeout)),
            (a.options.signal = e.signal);
        }
        try {
          a.response = await n(a.request, a.options);
        } catch (c) {
          return (
            (a.error = c),
            a.options.onRequestError && (await sl(a, a.options.onRequestError)),
            await i(a)
          );
        } finally {
          l && clearTimeout(l);
        }
        if (
          (a.response.body || a.response._bodyInit) &&
          !ll.has(a.response.status) &&
          "HEAD" !== a.options.method
        ) {
          const e =
            (a.options.parseResponse ? "json" : a.options.responseType) ||
            (function (e = "") {
              if (!e) return "json";
              const t = e.split(";").shift() || "";
              return ol.test(t)
                ? "json"
                : rl.has(t) || t.startsWith("text/")
                ? "text"
                : "blob";
            })(a.response.headers.get("content-type") || "");
          switch (e) {
            case "json": {
              const e = await a.response.text(),
                t = a.options.parseResponse || fa;
              a.response._data = t(e);
              break;
            }
            case "stream":
              a.response._data = a.response.body || a.response._bodyInit;
              break;
            default:
              a.response._data = await a.response[e]();
          }
        }
        return (
          a.options.onResponse && (await sl(a, a.options.onResponse)),
          !a.options.ignoreResponseError &&
          a.response.status >= 400 &&
          a.response.status < 600
            ? (a.options.onResponseError &&
                (await sl(a, a.options.onResponseError)),
              await i(a))
            : a.response
        );
      },
      a = async function (e, t) {
        return (await s(e, t))._data;
      };
    return (
      (a.raw = s),
      (a.native = (...e) => n(...e)),
      (a.create = (n = {}, r = {}) =>
        e({ ...t, ...r, defaults: { ...t.defaults, ...r.defaults, ...n } })),
      a
    );
  })({
    fetch: cl.fetch
      ? (...e) => cl.fetch(...e)
      : () =>
          Promise.reject(new Error("[ofetch] global.fetch is not supported!")),
    Headers: cl.Headers,
    AbortController: cl.AbortController,
  }),
  pl = ul,
  dl = (
    (null == (fl = null == window ? void 0 : window.__NUXT__)
      ? void 0
      : fl.config) || {}
  ).app;
var fl;
const hl = (...e) => Ga(ml(), dl.buildAssetsDir, ...e),
  ml = (...e) => {
    const t = dl.cdnURL || dl.baseURL;
    return e.length ? Ga(t, ...e) : t;
  };
function gl(e, t = {}, n) {
  for (const r in e) {
    const o = e[r],
      i = n ? `${n}:${r}` : r;
    "object" == typeof o && null !== o
      ? gl(o, t, i)
      : "function" == typeof o && (t[i] = o);
  }
  return t;
}
(globalThis.__buildAssetsURL = hl),
  (globalThis.__publicAssetsURL = ml),
  globalThis.$fetch || (globalThis.$fetch = pl.create({ baseURL: dl.baseURL }));
const vl = { run: (e) => e() },
  yl = void 0 !== console.createTask ? console.createTask : () => vl;
function bl(e, t) {
  const n = t.shift(),
    r = yl(n);
  return e.reduce(
    (e, n) => e.then(() => r.run(() => n(...t))),
    Promise.resolve()
  );
}
function _l(e, t) {
  const n = t.shift(),
    r = yl(n);
  return Promise.all(e.map((e) => r.run(() => e(...t))));
}
function wl(e, t) {
  for (const n of [...e]) n(t);
}
class Dl {
  constructor() {
    (this._hooks = {}),
      (this._before = void 0),
      (this._after = void 0),
      (this._deprecatedMessages = void 0),
      (this._deprecatedHooks = {}),
      (this.hook = this.hook.bind(this)),
      (this.callHook = this.callHook.bind(this)),
      (this.callHookWith = this.callHookWith.bind(this));
  }
  hook(e, t, n = {}) {
    if (!e || "function" != typeof t) return () => {};
    const r = e;
    let o;
    for (; this._deprecatedHooks[e]; )
      (o = this._deprecatedHooks[e]), (e = o.to);
    if (o && !n.allowDeprecated) {
      let e = o.message;
      e ||
        (e =
          `${r} hook has been deprecated` +
          (o.to ? `, please use ${o.to}` : "")),
        this._deprecatedMessages || (this._deprecatedMessages = new Set()),
        this._deprecatedMessages.has(e) || this._deprecatedMessages.add(e);
    }
    if (!t.name)
      try {
        Object.defineProperty(t, "name", {
          get: () => "_" + e.replace(/\W+/g, "_") + "_hook_cb",
          configurable: !0,
        });
      } catch {}
    return (
      (this._hooks[e] = this._hooks[e] || []),
      this._hooks[e].push(t),
      () => {
        t && (this.removeHook(e, t), (t = void 0));
      }
    );
  }
  hookOnce(e, t) {
    let n,
      r = (...e) => (
        "function" == typeof n && n(), (n = void 0), (r = void 0), t(...e)
      );
    return (n = this.hook(e, r)), n;
  }
  removeHook(e, t) {
    if (this._hooks[e]) {
      const n = this._hooks[e].indexOf(t);
      -1 !== n && this._hooks[e].splice(n, 1),
        0 === this._hooks[e].length && delete this._hooks[e];
    }
  }
  deprecateHook(e, t) {
    this._deprecatedHooks[e] = "string" == typeof t ? { to: t } : t;
    const n = this._hooks[e] || [];
    delete this._hooks[e];
    for (const r of n) this.hook(e, r);
  }
  deprecateHooks(e) {
    Object.assign(this._deprecatedHooks, e);
    for (const t in e) this.deprecateHook(t, e[t]);
  }
  addHooks(e) {
    const t = gl(e),
      n = Object.keys(t).map((e) => this.hook(e, t[e]));
    return () => {
      for (const e of n.splice(0, n.length)) e();
    };
  }
  removeHooks(e) {
    const t = gl(e);
    for (const n in t) this.removeHook(n, t[n]);
  }
  removeAllHooks() {
    for (const e in this._hooks) delete this._hooks[e];
  }
  callHook(e, ...t) {
    return t.unshift(e), this.callHookWith(bl, e, ...t);
  }
  callHookParallel(e, ...t) {
    return t.unshift(e), this.callHookWith(_l, e, ...t);
  }
  callHookWith(e, t, ...n) {
    const r =
      this._before || this._after ? { name: t, args: n, context: {} } : void 0;
    this._before && wl(this._before, r);
    const o = e(t in this._hooks ? [...this._hooks[t]] : [], n);
    return o instanceof Promise
      ? o.finally(() => {
          this._after && r && wl(this._after, r);
        })
      : (this._after && r && wl(this._after, r), o);
  }
  beforeEach(e) {
    return (
      (this._before = this._before || []),
      this._before.push(e),
      () => {
        if (void 0 !== this._before) {
          const t = this._before.indexOf(e);
          -1 !== t && this._before.splice(t, 1);
        }
      }
    );
  }
  afterEach(e) {
    return (
      (this._after = this._after || []),
      this._after.push(e),
      () => {
        if (void 0 !== this._after) {
          const t = this._after.indexOf(e);
          -1 !== t && this._after.splice(t, 1);
        }
      }
    );
  }
}
function xl() {
  return new Dl();
}
const kl =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof window
      ? window
      : {},
  Cl = "__unctx__",
  El =
    kl[Cl] ||
    (kl[Cl] = (function (e = {}) {
      const t = {};
      return {
        get: (n, r = {}) => (
          t[n] ||
            (t[n] = (function (e = {}) {
              let t,
                n = !1;
              const r = (e) => {
                if (t && t !== e) throw new Error("Context conflict");
              };
              let o;
              if (e.asyncContext) {
                const t = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
                t && (o = new t());
              }
              const i = () => {
                if (o) {
                  const e = o.getStore();
                  if (void 0 !== e) return e;
                }
                return t;
              };
              return {
                use: () => {
                  const e = i();
                  if (void 0 === e) throw new Error("Context is not available");
                  return e;
                },
                tryUse: () => i(),
                set: (e, o) => {
                  o || r(e), (t = e), (n = !0);
                },
                unset: () => {
                  (t = void 0), (n = !1);
                },
                call: (e, i) => {
                  r(e), (t = e);
                  try {
                    return o ? o.run(e, i) : i();
                  } finally {
                    n || (t = void 0);
                  }
                },
                async callAsync(e, r) {
                  t = e;
                  const i = () => {
                      t = e;
                    },
                    s = () => (t === e ? i : void 0);
                  Sl.add(s);
                  try {
                    const i = o ? o.run(e, r) : r();
                    return n || (t = void 0), await i;
                  } finally {
                    Sl.delete(s);
                  }
                },
              };
            })({ ...e, ...r })),
          t[n]
        ),
      };
    })()),
  Tl = "__unctx_async_handlers__",
  Sl = kl[Tl] || (kl[Tl] = new Set());
function Al(e) {
  const t = [];
  for (const o of Sl) {
    const e = o();
    e && t.push(e);
  }
  const n = () => {
    for (const e of t) e();
  };
  let r = e();
  return (
    r &&
      "object" == typeof r &&
      "catch" in r &&
      (r = r.catch((e) => {
        throw (n(), e);
      })),
    [r, n]
  );
}
const Ol = !1,
  Pl = {
    componentName: "NuxtLink",
    prefetch: !0,
    prefetchOn: { visibility: !0 },
  },
  Fl = null,
  Ll = null,
  Nl = !0,
  Il = "nuxt-app",
  Rl = 36e5;
function Ml(e = Il) {
  return ((e, t = {}) => El.get(e, t))(e, { asyncContext: !1 });
}
const Bl = "__nuxt_plugin";
function jl(e, t) {
  t.hooks && e.hooks.addHooks(t.hooks);
}
function $l(e) {
  if ("function" == typeof e) return e;
  const t = e._name || e.name;
  return (
    delete e.name,
    Object.assign(e.setup || (() => {}), e, { [Bl]: !0, _name: t })
  );
}
function Ul(e, t, n) {
  const r = () => t();
  return Ml(e._id).set(e), e.vueApp.runWithContext(r);
}
function ql(e) {
  const t = (function (e) {
    var t;
    let n;
    return (
      ro() && (n = null == (t = Ai()) ? void 0 : t.appContext.app.$nuxt),
      (n = n || Ml(e).tryUse()),
      n || null
    );
  })(e);
  if (!t) throw new Error("[nuxt] instance unavailable");
  return t;
}
function Hl(e) {
  return ql().$config;
}
function zl(e, t, n) {
  Object.defineProperty(e, t, { get: () => n });
}
function Vl(e) {
  return e.includes("%") ? decodeURIComponent(e) : e;
}
function Wl(e, t) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const Yl = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
function Xl(e, t, n) {
  const r = n || {},
    o = r.encode || encodeURIComponent;
  if ("function" != typeof o) throw new TypeError("option encode is invalid");
  if (!Yl.test(e)) throw new TypeError("argument name is invalid");
  const i = o(t);
  if (i && !Yl.test(i)) throw new TypeError("argument val is invalid");
  let s = e + "=" + i;
  if (void 0 !== r.maxAge && null !== r.maxAge) {
    const e = r.maxAge - 0;
    if (Number.isNaN(e) || !Number.isFinite(e))
      throw new TypeError("option maxAge is invalid");
    s += "; Max-Age=" + Math.floor(e);
  }
  if (r.domain) {
    if (!Yl.test(r.domain)) throw new TypeError("option domain is invalid");
    s += "; Domain=" + r.domain;
  }
  if (r.path) {
    if (!Yl.test(r.path)) throw new TypeError("option path is invalid");
    s += "; Path=" + r.path;
  }
  if (r.expires) {
    if (
      ((a = r.expires),
      !(
        "[object Date]" === Object.prototype.toString.call(a) ||
        a instanceof Date
      ) || Number.isNaN(r.expires.valueOf()))
    )
      throw new TypeError("option expires is invalid");
    s += "; Expires=" + r.expires.toUTCString();
  }
  var a;
  if (
    (r.httpOnly && (s += "; HttpOnly"),
    r.secure && (s += "; Secure"),
    r.priority)
  ) {
    switch (
      "string" == typeof r.priority ? r.priority.toLowerCase() : r.priority
    ) {
      case "low":
        s += "; Priority=Low";
        break;
      case "medium":
        s += "; Priority=Medium";
        break;
      case "high":
        s += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (r.sameSite) {
    switch (
      "string" == typeof r.sameSite ? r.sameSite.toLowerCase() : r.sameSite
    ) {
      case !0:
        s += "; SameSite=Strict";
        break;
      case "lax":
        s += "; SameSite=Lax";
        break;
      case "strict":
        s += "; SameSite=Strict";
        break;
      case "none":
        s += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return r.partitioned && (s += "; Partitioned"), s;
}
const Gl = Object.freeze({
  ignoreUnknown: !1,
  respectType: !1,
  respectFunctionNames: !1,
  respectFunctionProperties: !1,
  unorderedObjects: !0,
  unorderedArrays: !1,
  unorderedSets: !1,
  excludeKeys: void 0,
  excludeValues: void 0,
  replacer: void 0,
});
function Kl(e, t) {
  const n = Ql((t = t ? { ...Gl, ...t } : Gl));
  return n.dispatch(e), n.toString();
}
const Jl = Object.freeze(["prototype", "__proto__", "constructor"]);
function Ql(e) {
  let t = "",
    n = new Map();
  const r = (e) => {
    t += e;
  };
  return {
    toString: () => t,
    getContext: () => n,
    dispatch(t) {
      e.replacer && (t = e.replacer(t));
      return this[null === t ? "null" : typeof t](t);
    },
    object(t) {
      if (t && "function" == typeof t.toJSON) return this.object(t.toJSON());
      const o = Object.prototype.toString.call(t);
      let i = "";
      const s = o.length;
      (i = s < 10 ? "unknown:[" + o + "]" : o.slice(8, s - 1)),
        (i = i.toLowerCase());
      let a = null;
      if (void 0 !== (a = n.get(t)))
        return this.dispatch("[CIRCULAR:" + a + "]");
      if (
        (n.set(t, n.size),
        "undefined" != typeof Buffer && Buffer.isBuffer && Buffer.isBuffer(t))
      )
        return r("buffer:"), r(t.toString("utf8"));
      if ("object" !== i && "function" !== i && "asyncfunction" !== i)
        this[i] ? this[i](t) : e.ignoreUnknown || this.unkown(t, i);
      else {
        let n = Object.keys(t);
        e.unorderedObjects && (n = n.sort());
        let o = [];
        !1 === e.respectType || tc(t) || (o = Jl),
          e.excludeKeys &&
            ((n = n.filter((t) => !e.excludeKeys(t))),
            (o = o.filter((t) => !e.excludeKeys(t)))),
          r("object:" + (n.length + o.length) + ":");
        const i = (n) => {
          this.dispatch(n),
            r(":"),
            e.excludeValues || this.dispatch(t[n]),
            r(",");
        };
        for (const e of n) i(e);
        for (const e of o) i(e);
      }
    },
    array(t, o) {
      if (
        ((o = void 0 === o ? !1 !== e.unorderedArrays : o),
        r("array:" + t.length + ":"),
        !o || t.length <= 1)
      ) {
        for (const e of t) this.dispatch(e);
        return;
      }
      const i = new Map(),
        s = t.map((t) => {
          const n = Ql(e);
          n.dispatch(t);
          for (const [e, r] of n.getContext()) i.set(e, r);
          return n.toString();
        });
      return (n = i), s.sort(), this.array(s, !1);
    },
    date: (e) => r("date:" + e.toJSON()),
    symbol: (e) => r("symbol:" + e.toString()),
    unkown(e, t) {
      if ((r(t), e))
        return (
          r(":"),
          e && "function" == typeof e.entries
            ? this.array(Array.from(e.entries()), !0)
            : void 0
        );
    },
    error: (e) => r("error:" + e.toString()),
    boolean: (e) => r("bool:" + e),
    string(e) {
      r("string:" + e.length + ":"), r(e);
    },
    function(t) {
      r("fn:"),
        tc(t) ? this.dispatch("[native]") : this.dispatch(t.toString()),
        !1 !== e.respectFunctionNames &&
          this.dispatch("function-name:" + String(t.name)),
        e.respectFunctionProperties && this.object(t);
    },
    number: (e) => r("number:" + e),
    xml: (e) => r("xml:" + e.toString()),
    null: () => r("Null"),
    undefined: () => r("Undefined"),
    regexp: (e) => r("regex:" + e.toString()),
    uint8array(e) {
      return r("uint8array:"), this.dispatch(Array.prototype.slice.call(e));
    },
    uint8clampedarray(e) {
      return (
        r("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(e))
      );
    },
    int8array(e) {
      return r("int8array:"), this.dispatch(Array.prototype.slice.call(e));
    },
    uint16array(e) {
      return r("uint16array:"), this.dispatch(Array.prototype.slice.call(e));
    },
    int16array(e) {
      return r("int16array:"), this.dispatch(Array.prototype.slice.call(e));
    },
    uint32array(e) {
      return r("uint32array:"), this.dispatch(Array.prototype.slice.call(e));
    },
    int32array(e) {
      return r("int32array:"), this.dispatch(Array.prototype.slice.call(e));
    },
    float32array(e) {
      return r("float32array:"), this.dispatch(Array.prototype.slice.call(e));
    },
    float64array(e) {
      return r("float64array:"), this.dispatch(Array.prototype.slice.call(e));
    },
    arraybuffer(e) {
      return r("arraybuffer:"), this.dispatch(new Uint8Array(e));
    },
    url: (e) => r("url:" + e.toString()),
    map(t) {
      r("map:");
      const n = [...t];
      return this.array(n, !1 !== e.unorderedSets);
    },
    set(t) {
      r("set:");
      const n = [...t];
      return this.array(n, !1 !== e.unorderedSets);
    },
    file(e) {
      return r("file:"), this.dispatch([e.name, e.size, e.type, e.lastModfied]);
    },
    blob() {
      if (e.ignoreUnknown) return r("[blob]");
      throw new Error(
        'Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n'
      );
    },
    domwindow: () => r("domwindow"),
    bigint: (e) => r("bigint:" + e.toString()),
    process: () => r("process"),
    timer: () => r("timer"),
    pipe: () => r("pipe"),
    tcp: () => r("tcp"),
    udp: () => r("udp"),
    tty: () => r("tty"),
    statwatcher: () => r("statwatcher"),
    securecontext: () => r("securecontext"),
    connection: () => r("connection"),
    zlib: () => r("zlib"),
    context: () => r("context"),
    nodescript: () => r("nodescript"),
    httpparser: () => r("httpparser"),
    dataview: () => r("dataview"),
    signal: () => r("signal"),
    fsevent: () => r("fsevent"),
    tlswrap: () => r("tlswrap"),
  };
}
const Zl = "[native code] }",
  ec = Zl.length;
function tc(e) {
  return (
    "function" == typeof e &&
    Function.prototype.toString.call(e).slice(-ec) === Zl
  );
}
var nc = Object.defineProperty,
  rc = (e, t, n) => (
    ((e, t, n) => {
      t in e
        ? nc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
        : (e[t] = n);
    })(e, "symbol" != typeof t ? t + "" : t, n),
    n
  );
class oc {
  constructor(e, t) {
    rc(this, "words"),
      rc(this, "sigBytes"),
      (e = this.words = e || []),
      (this.sigBytes = void 0 === t ? 4 * e.length : t);
  }
  toString(e) {
    return (e || ic).stringify(this);
  }
  concat(e) {
    if ((this.clamp(), this.sigBytes % 4))
      for (let t = 0; t < e.sigBytes; t++) {
        const n = (e.words[t >>> 2] >>> (24 - (t % 4) * 8)) & 255;
        this.words[(this.sigBytes + t) >>> 2] |=
          n << (24 - ((this.sigBytes + t) % 4) * 8);
      }
    else
      for (let t = 0; t < e.sigBytes; t += 4)
        this.words[(this.sigBytes + t) >>> 2] = e.words[t >>> 2];
    return (this.sigBytes += e.sigBytes), this;
  }
  clamp() {
    (this.words[this.sigBytes >>> 2] &=
      4294967295 << (32 - (this.sigBytes % 4) * 8)),
      (this.words.length = Math.ceil(this.sigBytes / 4));
  }
  clone() {
    return new oc([...this.words]);
  }
}
const ic = {
    stringify(e) {
      const t = [];
      for (let n = 0; n < e.sigBytes; n++) {
        const r = (e.words[n >>> 2] >>> (24 - (n % 4) * 8)) & 255;
        t.push((r >>> 4).toString(16), (15 & r).toString(16));
      }
      return t.join("");
    },
  },
  sc = {
    stringify(e) {
      const t = [];
      for (let n = 0; n < e.sigBytes; n += 3) {
        const r =
          (((e.words[n >>> 2] >>> (24 - (n % 4) * 8)) & 255) << 16) |
          (((e.words[(n + 1) >>> 2] >>> (24 - ((n + 1) % 4) * 8)) & 255) << 8) |
          ((e.words[(n + 2) >>> 2] >>> (24 - ((n + 2) % 4) * 8)) & 255);
        for (let o = 0; o < 4 && 8 * n + 6 * o < 8 * e.sigBytes; o++)
          t.push(
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(
              (r >>> (6 * (3 - o))) & 63
            )
          );
      }
      return t.join("");
    },
  },
  ac = {
    parse(e) {
      const t = e.length,
        n = [];
      for (let r = 0; r < t; r++)
        n[r >>> 2] |= (255 & e.charCodeAt(r)) << (24 - (r % 4) * 8);
      return new oc(n, t);
    },
  },
  lc = { parse: (e) => ac.parse(unescape(encodeURIComponent(e))) };
class cc {
  constructor() {
    rc(this, "_data", new oc()),
      rc(this, "_nDataBytes", 0),
      rc(this, "_minBufferSize", 0),
      rc(this, "blockSize", 16);
  }
  reset() {
    (this._data = new oc()), (this._nDataBytes = 0);
  }
  _append(e) {
    "string" == typeof e && (e = lc.parse(e)),
      this._data.concat(e),
      (this._nDataBytes += e.sigBytes);
  }
  _doProcessBlock(e, t) {}
  _process(e) {
    let t,
      n = this._data.sigBytes / (4 * this.blockSize);
    n = e ? Math.ceil(n) : Math.max((0 | n) - this._minBufferSize, 0);
    const r = n * this.blockSize,
      o = Math.min(4 * r, this._data.sigBytes);
    if (r) {
      for (let e = 0; e < r; e += this.blockSize)
        this._doProcessBlock(this._data.words, e);
      (t = this._data.words.splice(0, r)), (this._data.sigBytes -= o);
    }
    return new oc(t, o);
  }
}
class uc extends cc {
  update(e) {
    return this._append(e), this._process(), this;
  }
  finalize(e) {
    e && this._append(e);
  }
}
var pc = Object.defineProperty,
  dc = (e, t, n) => (
    ((e, t, n) => {
      t in e
        ? pc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
        : (e[t] = n);
    })(e, t + "", n),
    n
  );
const fc = [
    1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372,
    528734635, 1541459225,
  ],
  hc = [
    1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993,
    -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987,
    1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885,
    -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872,
    -1866530822, -1538233109, -1090935817, -965641998,
  ],
  mc = [];
class gc extends uc {
  constructor() {
    super(...arguments), dc(this, "_hash", new oc([...fc]));
  }
  reset() {
    super.reset(), (this._hash = new oc([...fc]));
  }
  _doProcessBlock(e, t) {
    const n = this._hash.words;
    let r = n[0],
      o = n[1],
      i = n[2],
      s = n[3],
      a = n[4],
      l = n[5],
      c = n[6],
      u = n[7];
    for (let p = 0; p < 64; p++) {
      if (p < 16) mc[p] = 0 | e[t + p];
      else {
        const e = mc[p - 15],
          t = ((e << 25) | (e >>> 7)) ^ ((e << 14) | (e >>> 18)) ^ (e >>> 3),
          n = mc[p - 2],
          r = ((n << 15) | (n >>> 17)) ^ ((n << 13) | (n >>> 19)) ^ (n >>> 10);
        mc[p] = t + mc[p - 7] + r + mc[p - 16];
      }
      const n = (r & o) ^ (r & i) ^ (o & i),
        d =
          ((r << 30) | (r >>> 2)) ^
          ((r << 19) | (r >>> 13)) ^
          ((r << 10) | (r >>> 22)),
        f =
          u +
          (((a << 26) | (a >>> 6)) ^
            ((a << 21) | (a >>> 11)) ^
            ((a << 7) | (a >>> 25))) +
          ((a & l) ^ (~a & c)) +
          hc[p] +
          mc[p];
      (u = c),
        (c = l),
        (l = a),
        (a = (s + f) | 0),
        (s = i),
        (i = o),
        (o = r),
        (r = (f + (d + n)) | 0);
    }
    (n[0] = (n[0] + r) | 0),
      (n[1] = (n[1] + o) | 0),
      (n[2] = (n[2] + i) | 0),
      (n[3] = (n[3] + s) | 0),
      (n[4] = (n[4] + a) | 0),
      (n[5] = (n[5] + l) | 0),
      (n[6] = (n[6] + c) | 0),
      (n[7] = (n[7] + u) | 0);
  }
  finalize(e) {
    super.finalize(e);
    const t = 8 * this._nDataBytes,
      n = 8 * this._data.sigBytes;
    return (
      (this._data.words[n >>> 5] |= 128 << (24 - (n % 32))),
      (this._data.words[14 + (((n + 64) >>> 9) << 4)] = Math.floor(
        t / 4294967296
      )),
      (this._data.words[15 + (((n + 64) >>> 9) << 4)] = t),
      (this._data.sigBytes = 4 * this._data.words.length),
      this._process(),
      this._hash
    );
  }
}
function vc(e, t = {}) {
  const n = "string" == typeof e ? e : Kl(e, t);
  return ((r = n), new gc().finalize(r).toString(sc)).slice(0, 10);
  var r;
}
function yc(e, t) {
  return { ctx: { table: e }, matchAll: (t) => wc(t, e) };
}
function bc(e) {
  const t = {};
  for (const n in e)
    t[n] =
      "dynamic" === n
        ? new Map(Object.entries(e[n]).map(([e, t]) => [e, bc(t)]))
        : new Map(Object.entries(e[n]));
  return t;
}
function _c(e) {
  return yc(bc(e));
}
function wc(e, t, n) {
  e.endsWith("/") && (e = e.slice(0, -1) || "/");
  const r = [];
  for (const [i, s] of Dc(t.wildcard))
    (e === i || e.startsWith(i + "/")) && r.push(s);
  for (const [i, s] of Dc(t.dynamic))
    if (e.startsWith(i + "/")) {
      const t = "/" + e.slice(i.length).split("/").splice(2).join("/");
      r.push(...wc(t, s));
    }
  const o = t.static.get(e);
  return o && r.push(o), r.filter(Boolean);
}
function Dc(e) {
  return [...e.entries()].sort((e, t) => e[0].length - t[0].length);
}
function xc(e) {
  if (null === e || "object" != typeof e) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (null === t ||
      t === Object.prototype ||
      null === Object.getPrototypeOf(t)) &&
    !(Symbol.iterator in e) &&
    (!(Symbol.toStringTag in e) ||
      "[object Module]" === Object.prototype.toString.call(e))
  );
}
function kc(e, t, n = ".", r) {
  if (!xc(t)) return kc(e, {}, n, r);
  const o = Object.assign({}, t);
  for (const i in e) {
    if ("__proto__" === i || "constructor" === i) continue;
    const t = e[i];
    null != t &&
      ((r && r(o, i, t, n)) ||
        (Array.isArray(t) && Array.isArray(o[i])
          ? (o[i] = [...t, ...o[i]])
          : xc(t) && xc(o[i])
          ? (o[i] = kc(t, o[i], (n ? `${n}.` : "") + i.toString(), r))
          : (o[i] = t)));
  }
  return o;
}
const Cc = (...e) => e.reduce((e, t) => kc(e, t, "", Ec), {});
var Ec;
var Tc = Object.defineProperty,
  Sc = (e, t, n) => (
    ((e, t, n) => {
      t in e
        ? Tc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
        : (e[t] = n);
    })(e, "symbol" != typeof t ? t + "" : t, n),
    n
  );
class Ac extends Error {
  constructor(e, t = {}) {
    super(e, t),
      Sc(this, "statusCode", 500),
      Sc(this, "fatal", !1),
      Sc(this, "unhandled", !1),
      Sc(this, "statusMessage"),
      Sc(this, "data"),
      Sc(this, "cause"),
      t.cause && !this.cause && (this.cause = t.cause);
  }
  toJSON() {
    const e = { message: this.message, statusCode: Lc(this.statusCode, 500) };
    return (
      this.statusMessage && (e.statusMessage = Fc(this.statusMessage)),
      void 0 !== this.data && (e.data = this.data),
      e
    );
  }
}
function Oc(e) {
  if ("string" == typeof e) return new Ac(e);
  if (
    (function (e) {
      var t;
      return (
        !0 ===
        (null == (t = null == e ? void 0 : e.constructor)
          ? void 0
          : t.__h3_error__)
      );
    })(e)
  )
    return e;
  const t = new Ac(e.message ?? e.statusMessage ?? "", { cause: e.cause || e });
  if (
    (function (e, t) {
      try {
        return t in e;
      } catch {
        return !1;
      }
    })(e, "stack")
  )
    try {
      Object.defineProperty(t, "stack", { get: () => e.stack });
    } catch {
      try {
        t.stack = e.stack;
      } catch {}
    }
  if (
    (e.data && (t.data = e.data),
    e.statusCode
      ? (t.statusCode = Lc(e.statusCode, t.statusCode))
      : e.status && (t.statusCode = Lc(e.status, t.statusCode)),
    e.statusMessage
      ? (t.statusMessage = e.statusMessage)
      : e.statusText && (t.statusMessage = e.statusText),
    t.statusMessage)
  ) {
    t.statusMessage, Fc(t.statusMessage);
  }
  return (
    void 0 !== e.fatal && (t.fatal = e.fatal),
    void 0 !== e.unhandled && (t.unhandled = e.unhandled),
    t
  );
}
Sc(Ac, "__h3_error__", !0);
const Pc = /[^\u0009\u0020-\u007E]/g;
function Fc(e = "") {
  return e.replace(Pc, "");
}
function Lc(e, t = 200) {
  return e
    ? ("string" == typeof e && (e = Number.parseInt(e, 10)),
      e < 100 || e > 999 ? t : e)
    : t;
}
"undefined" == typeof setImmediate || setImmediate;
const Nc = Symbol("layout-meta"),
  Ic = Symbol("route"),
  Rc = () => {
    var e;
    return null == (e = ql()) ? void 0 : e.$router;
  },
  Mc = () => (ro() ? no(Ic, ql()._route) : ql()._route);
function Bc(e) {
  return e;
}
const jc = (e, t) => {
  e || (e = "/");
  const n =
    "string" == typeof e ? e : "path" in e ? $c(e) : Rc().resolve(e).href;
  if (null == t ? void 0 : t.open) {
    const { target: e = "_blank", windowFeatures: r = {} } = t.open,
      o = Object.entries(r)
        .filter(([e, t]) => void 0 !== t)
        .map(([e, t]) => `${e.toLowerCase()}=${t}`)
        .join(", ");
    return open(n, e, o), Promise.resolve();
  }
  const r = $a(n, { acceptRelative: !0 }),
    o = (null == t ? void 0 : t.external) || r;
  if (o) {
    if (!(null == t ? void 0 : t.external))
      throw new Error(
        "Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`."
      );
    const { protocol: e } = new URL(n, window.location.href);
    if (
      e &&
      (function (e) {
        return !!e && Ma.test(e);
      })(e)
    )
      throw new Error(`Cannot navigate to a URL with '${e}' protocol.`);
  }
  const i = (() => {
    try {
      if (ql()._processingMiddleware) return !0;
    } catch {
      return !1;
    }
    return !1;
  })();
  if (!o && i)
    return (null == t ? void 0 : t.replace)
      ? "string" == typeof e
        ? { path: e, replace: !0 }
        : { ...e, replace: !0 }
      : e;
  const s = Rc(),
    a = ql();
  return o
    ? (a._scope.stop(),
      (null == t ? void 0 : t.replace)
        ? location.replace(n)
        : (location.href = n),
      i ? !!a.isHydrating && new Promise(() => {}) : Promise.resolve())
    : (null == t ? void 0 : t.replace)
    ? s.replace(e)
    : s.push(e);
};
function $c(e) {
  return Wa(e.path || "", e.query || {}) + (e.hash || "");
}
const Uc = "__nuxt_error",
  qc = () => Mt(ql().payload, "error"),
  Hc = (e) => {
    const t = Vc(e);
    try {
      const e = ql(),
        n = qc();
      e.hooks.callHook("app:error", t), (n.value = n.value || t);
    } catch {
      throw t;
    }
    return t;
  },
  zc = async (e = {}) => {
    const t = ql(),
      n = qc();
    t.callHook("app:error:cleared", e),
      e.redirect && (await Rc().replace(e.redirect)),
      (n.value = null);
  },
  Vc = (e) => {
    const t = Oc(e);
    return (
      Object.defineProperty(t, Uc, {
        value: !0,
        configurable: !1,
        writable: !1,
      }),
      t
    );
  };
function Wc(e) {
  const t = (function (e) {
      e.length % 4 == 0 && (e = e.replace(/==?$/, ""));
      let t = "",
        n = 0,
        r = 0;
      for (let o = 0; o < e.length; o++)
        (n <<= 6),
          (n |= Yc.indexOf(e[o])),
          (r += 6),
          24 === r &&
            ((t += String.fromCharCode((16711680 & n) >> 16)),
            (t += String.fromCharCode((65280 & n) >> 8)),
            (t += String.fromCharCode(255 & n)),
            (n = r = 0));
      12 === r
        ? ((n >>= 4), (t += String.fromCharCode(n)))
        : 18 === r &&
          ((n >>= 2),
          (t += String.fromCharCode((65280 & n) >> 8)),
          (t += String.fromCharCode(255 & n)));
      return t;
    })(e),
    n = new ArrayBuffer(t.length),
    r = new DataView(n);
  for (let o = 0; o < n.byteLength; o++) r.setUint8(o, t.charCodeAt(o));
  return n;
}
const Yc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function Xc(e, t) {
  return (function (e, t) {
    if ("number" == typeof e) return o(e, !0);
    if (!Array.isArray(e) || 0 === e.length) throw new Error("Invalid input");
    const n = e,
      r = Array(n.length);
    function o(e, i = !1) {
      if (-1 === e) return;
      if (-3 === e) return NaN;
      if (-4 === e) return 1 / 0;
      if (-5 === e) return -1 / 0;
      if (-6 === e) return -0;
      if (i) throw new Error("Invalid input");
      if (e in r) return r[e];
      const s = n[e];
      if (s && "object" == typeof s)
        if (Array.isArray(s))
          if ("string" == typeof s[0]) {
            const n = s[0],
              i = null == t ? void 0 : t[n];
            if (i) return (r[e] = i(o(s[1])));
            switch (n) {
              case "Date":
                r[e] = new Date(s[1]);
                break;
              case "Set":
                const t = new Set();
                r[e] = t;
                for (let e = 1; e < s.length; e += 1) t.add(o(s[e]));
                break;
              case "Map":
                const i = new Map();
                r[e] = i;
                for (let e = 1; e < s.length; e += 2)
                  i.set(o(s[e]), o(s[e + 1]));
                break;
              case "RegExp":
                r[e] = new RegExp(s[1], s[2]);
                break;
              case "Object":
                r[e] = Object(s[1]);
                break;
              case "BigInt":
                r[e] = BigInt(s[1]);
                break;
              case "null":
                const a = Object.create(null);
                r[e] = a;
                for (let e = 1; e < s.length; e += 2) a[s[e]] = o(s[e + 1]);
                break;
              case "Int8Array":
              case "Uint8Array":
              case "Uint8ClampedArray":
              case "Int16Array":
              case "Uint16Array":
              case "Int32Array":
              case "Uint32Array":
              case "Float32Array":
              case "Float64Array":
              case "BigInt64Array":
              case "BigUint64Array": {
                const t = new (0, globalThis[n])(Wc(s[1]));
                r[e] = t;
                break;
              }
              case "ArrayBuffer": {
                const t = Wc(s[1]);
                r[e] = t;
                break;
              }
              default:
                throw new Error(`Unknown type ${n}`);
            }
          } else {
            const t = new Array(s.length);
            r[e] = t;
            for (let e = 0; e < s.length; e += 1) {
              const n = s[e];
              -2 !== n && (t[e] = o(n));
            }
          }
        else {
          const t = {};
          r[e] = t;
          for (const e in s) {
            const n = s[e];
            t[e] = o(n);
          }
        }
      else r[e] = s;
      return r[e];
    }
    return o(0);
  })(JSON.parse(e), t);
}
const Gc = new Set(["base", "meta", "link", "style", "script", "noscript"]),
  Kc = new Set([
    "base",
    "title",
    "titleTemplate",
    "bodyAttrs",
    "htmlAttrs",
    "templateParams",
  ]),
  Jc = new Set([
    "tagPosition",
    "tagPriority",
    "tagDuplicateStrategy",
    "children",
    "innerHTML",
    "textContent",
    "processTemplateParams",
  ]);
function Qc(e) {
  let t = 9;
  for (let n = 0; n < e.length; ) t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
  return (65536 + (t ^ (t >>> 9))).toString(16).substring(1, 8).toLowerCase();
}
function Zc(e) {
  if (e._h) return e._h;
  if (e._d) return Qc(e._d);
  let t = `${e.tag}:${e.textContent || e.innerHTML || ""}:`;
  for (const n in e.props) t += `${n}:${String(e.props[n])},`;
  return Qc(t);
}
function eu(e, t) {
  var n;
  const r = "class" === e ? " " : ";";
  return (
    t &&
      "object" == typeof t &&
      !Array.isArray(t) &&
      (t = Object.entries(t)
        .filter(([, e]) => e)
        .map(([t, n]) => ("style" === e ? `${t}:${n}` : t))),
    null == (n = String(Array.isArray(t) ? t.join(r) : t))
      ? void 0
      : n
          .split(r)
          .filter((e) => Boolean(e.trim()))
          .join(r)
  );
}
function tu(e, t, n, r) {
  for (let o = r; o < n.length; o += 1) {
    const r = n[o];
    if ("class" !== r && "style" !== r) {
      if (e[r] instanceof Promise)
        return e[r].then((i) => ((e[r] = i), tu(e, t, n, o)));
      if (!t && !Jc.has(r)) {
        const t = String(e[r]),
          n = r.startsWith("data-");
        "true" === t || "" === t
          ? (e[r] = !n || "true")
          : e[r] || (n && "false" === t ? (e[r] = "false") : delete e[r]);
      }
    } else e[r] = eu(r, e[r]);
  }
}
function nu(e, t = !1) {
  const n = tu(e, t, Object.keys(e), 0);
  return n instanceof Promise ? n.then(() => e) : e;
}
const ru = ["name", "property", "http-equiv"];
function ou(e) {
  const { props: t, tag: n } = e;
  if (Kc.has(n)) return n;
  if ("link" === n && "canonical" === t.rel) return "canonical";
  if (t.charset) return "charset";
  if (t.id) return `${n}:id:${t.id}`;
  for (const r of ru) if (void 0 !== t[r]) return `${n}:${r}:${t[r]}`;
  return !1;
}
async function iu(e, t = {}) {
  const n = t.document || e.resolvedOptions.document;
  if (!n || !e.dirty) return;
  const r = { shouldRender: !0, tags: [] };
  return (
    await e.hooks.callHook("dom:beforeRender", r),
    r.shouldRender
      ? (e._domUpdatePromise ||
          (e._domUpdatePromise = new Promise(async (t) => {
            var r;
            const o = (await e.resolveTags()).map((e) => ({
              tag: e,
              id: Gc.has(e.tag) ? Zc(e) : e.tag,
              shouldRender: !0,
            }));
            let i = e._dom;
            if (!i) {
              i = {
                elMap: { htmlAttrs: n.documentElement, bodyAttrs: n.body },
              };
              const e = new Set();
              for (const t of ["body", "head"]) {
                const o = null == (r = n[t]) ? void 0 : r.children;
                for (const t of o) {
                  const n = t.tagName.toLowerCase();
                  if (!Gc.has(n)) continue;
                  const r = {
                      tag: n,
                      props: await nu(
                        t
                          .getAttributeNames()
                          .reduce(
                            (e, n) => ({ ...e, [n]: t.getAttribute(n) }),
                            {}
                          )
                      ),
                      innerHTML: t.innerHTML,
                    },
                    o = ou(r);
                  let s = o,
                    a = 1;
                  for (; s && e.has(s); ) s = `${o}:${a++}`;
                  s && ((r._d = s), e.add(s)),
                    (i.elMap[t.getAttribute("data-hid") || Zc(r)] = t);
                }
              }
            }
            function s(e, t, n) {
              const r = `${e}:${t}`;
              (i.sideEffects[r] = n), delete i.pendingSideEffects[r];
            }
            function a({ id: e, $el: t, tag: r }) {
              const o = r.tag.endsWith("Attrs");
              if (
                ((i.elMap[e] = t),
                o ||
                  (r.textContent &&
                    r.textContent !== t.textContent &&
                    (t.textContent = r.textContent),
                  r.innerHTML &&
                    r.innerHTML !== t.innerHTML &&
                    (t.innerHTML = r.innerHTML),
                  s(e, "el", () => {
                    var t;
                    null == (t = i.elMap[e]) || t.remove(), delete i.elMap[e];
                  })),
                r._eventHandlers)
              )
                for (const i in r._eventHandlers)
                  Object.prototype.hasOwnProperty.call(r._eventHandlers, i) &&
                    "" !== t.getAttribute(`data-${i}`) &&
                    (("bodyAttrs" === r.tag
                      ? n.defaultView
                      : t
                    ).addEventListener(
                      i.substring(2),
                      r._eventHandlers[i].bind(t)
                    ),
                    t.setAttribute(`data-${i}`, ""));
              for (const n in r.props) {
                if (!Object.prototype.hasOwnProperty.call(r.props, n)) continue;
                const i = r.props[n],
                  a = `attr:${n}`;
                if ("class" === n) {
                  if (!i) continue;
                  for (const n of i.split(" "))
                    o && s(e, `${a}:${n}`, () => t.classList.remove(n)),
                      !t.classList.contains(n) && t.classList.add(n);
                } else if ("style" === n) {
                  if (!i) continue;
                  for (const n of i.split(";")) {
                    const r = n.indexOf(":"),
                      o = n.substring(0, r).trim(),
                      i = n.substring(r + 1).trim();
                    s(e, `${a}:${o}`, () => {
                      t.style.removeProperty(o);
                    }),
                      t.style.setProperty(o, i);
                  }
                } else
                  t.getAttribute(n) !== i &&
                    t.setAttribute(n, !0 === i ? "" : String(i)),
                    o && s(e, a, () => t.removeAttribute(n));
              }
            }
            (i.pendingSideEffects = { ...i.sideEffects }), (i.sideEffects = {});
            const l = [],
              c = { bodyClose: void 0, bodyOpen: void 0, head: void 0 };
            for (const e of o) {
              const { tag: t, shouldRender: r, id: o } = e;
              r &&
                ("title" !== t.tag
                  ? ((e.$el = e.$el || i.elMap[o]),
                    e.$el ? a(e) : Gc.has(t.tag) && l.push(e))
                  : (n.title = t.textContent));
            }
            for (const e of l) {
              const t = e.tag.tagPosition || "head";
              (e.$el = n.createElement(e.tag.tag)),
                a(e),
                (c[t] = c[t] || n.createDocumentFragment()),
                c[t].appendChild(e.$el);
            }
            for (const u of o) await e.hooks.callHook("dom:renderTag", u, n, s);
            c.head && n.head.appendChild(c.head),
              c.bodyOpen && n.body.insertBefore(c.bodyOpen, n.body.firstChild),
              c.bodyClose && n.body.appendChild(c.bodyClose);
            for (const e in i.pendingSideEffects) i.pendingSideEffects[e]();
            (e._dom = i),
              await e.hooks.callHook("dom:rendered", { renders: o }),
              t();
          }).finally(() => {
            (e._domUpdatePromise = void 0), (e.dirty = !1);
          })),
        e._domUpdatePromise)
      : void 0
  );
}
function su(e) {
  return (t) => {
    var n, r;
    const o =
      (null ==
      (r =
        null == (n = t.resolvedOptions.document)
          ? void 0
          : n.head.querySelector('script[id="unhead:payload"]'))
        ? void 0
        : r.innerHTML) || !1;
    return (
      o && t.push(JSON.parse(o)),
      {
        mode: "client",
        hooks: {
          "entries:updated": (t) => {
            !(function (e, t = {}) {
              const n = t.delayFn || ((e) => setTimeout(e, 10));
              e._domDebouncedUpdatePromise =
                e._domDebouncedUpdatePromise ||
                new Promise((r) =>
                  n(() =>
                    iu(e, t).then(() => {
                      delete e._domDebouncedUpdatePromise, r();
                    })
                  )
                );
            })(t, e);
          },
        },
      }
    );
  };
}
const au = new Set(["title", "titleTemplate", "script", "style", "noscript"]),
  lu = new Set(["base", "meta", "link", "style", "script", "noscript"]),
  cu = new Set([
    "title",
    "titleTemplate",
    "templateParams",
    "base",
    "htmlAttrs",
    "bodyAttrs",
    "meta",
    "link",
    "style",
    "script",
    "noscript",
  ]),
  uu = new Set([
    "base",
    "title",
    "titleTemplate",
    "bodyAttrs",
    "htmlAttrs",
    "templateParams",
  ]),
  pu = new Set([
    "tagPosition",
    "tagPriority",
    "tagDuplicateStrategy",
    "children",
    "innerHTML",
    "textContent",
    "processTemplateParams",
  ]),
  du = "undefined" != typeof window;
function fu(e) {
  let t = 9;
  for (let n = 0; n < e.length; ) t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
  return (65536 + (t ^ (t >>> 9))).toString(16).substring(1, 8).toLowerCase();
}
function hu(e) {
  if (e._h) return e._h;
  if (e._d) return fu(e._d);
  let t = `${e.tag}:${e.textContent || e.innerHTML || ""}:`;
  for (const n in e.props) t += `${n}:${String(e.props[n])},`;
  return fu(t);
}
function mu(e, t, n, r) {
  const o =
    r ||
    (function (e, t = !1) {
      const n = vu(e, t, Object.keys(e), 0);
      if (n instanceof Promise) return n.then(() => e);
      return e;
    })(
      "object" != typeof t || "function" == typeof t || t instanceof Promise
        ? {
            ["script" === e || "noscript" === e || "style" === e
              ? "innerHTML"
              : "textContent"]: t,
          }
        : { ...t },
      "templateParams" === e || "titleTemplate" === e
    );
  if (o instanceof Promise) return o.then((r) => mu(e, t, n, r));
  const i = { tag: e, props: o };
  for (const s of pu) {
    const e = void 0 !== i.props[s] ? i.props[s] : n[s];
    void 0 !== e &&
      ((("innerHTML" !== s && "textContent" !== s && "children" !== s) ||
        au.has(i.tag)) &&
        (i["children" === s ? "innerHTML" : s] = e),
      delete i.props[s]);
  }
  return (
    i.props.body && ((i.tagPosition = "bodyClose"), delete i.props.body),
    "script" === i.tag &&
      "object" == typeof i.innerHTML &&
      ((i.innerHTML = JSON.stringify(i.innerHTML)),
      (i.props.type = i.props.type || "application/json")),
    Array.isArray(i.props.content)
      ? i.props.content.map((e) => ({
          ...i,
          props: { ...i.props, content: e },
        }))
      : i
  );
}
function gu(e, t) {
  var n;
  const r = "class" === e ? " " : ";";
  return (
    t &&
      "object" == typeof t &&
      !Array.isArray(t) &&
      (t = Object.entries(t)
        .filter(([, e]) => e)
        .map(([t, n]) => ("style" === e ? `${t}:${n}` : t))),
    null == (n = String(Array.isArray(t) ? t.join(r) : t))
      ? void 0
      : n
          .split(r)
          .filter((e) => Boolean(e.trim()))
          .join(r)
  );
}
function vu(e, t, n, r) {
  for (let o = r; o < n.length; o += 1) {
    const r = n[o];
    if ("class" !== r && "style" !== r) {
      if (e[r] instanceof Promise)
        return e[r].then((i) => ((e[r] = i), vu(e, t, n, o)));
      if (!t && !pu.has(r)) {
        const t = String(e[r]),
          n = r.startsWith("data-");
        "true" === t || "" === t
          ? (e[r] = !n || "true")
          : e[r] || (n && "false" === t ? (e[r] = "false") : delete e[r]);
      }
    } else e[r] = gu(r, e[r]);
  }
}
function yu(e, t, n) {
  for (let r = n; r < t.length; r += 1) {
    const n = t[r];
    if (n instanceof Promise) return n.then((n) => ((t[r] = n), yu(e, t, r)));
    Array.isArray(n) ? e.push(...n) : e.push(n);
  }
}
function bu(e) {
  const t = [],
    n = e.resolvedInput;
  for (const s in n) {
    if (!Object.prototype.hasOwnProperty.call(n, s)) continue;
    const r = n[s];
    if (void 0 !== r && cu.has(s))
      if (Array.isArray(r)) for (const n of r) t.push(mu(s, n, e));
      else t.push(mu(s, r, e));
  }
  if (0 === t.length) return [];
  const r = [];
  return (
    (o = yu(r, t, 0)),
    (i = () =>
      r.map(
        (t, n) => (
          (t._e = e._i), e.mode && (t._m = e.mode), (t._p = (e._i << 10) + n), t
        )
      )),
    o instanceof Promise ? o.then(i) : i(o)
  );
  var o, i;
}
const _u = new Set([
    "onload",
    "onerror",
    "onabort",
    "onprogress",
    "onloadstart",
  ]),
  wu = { base: -10, title: 10 },
  Du = { critical: -80, high: -10, low: 20 };
function xu(e) {
  const t = e.tagPriority;
  if ("number" == typeof t) return t;
  let n = 100;
  return (
    "meta" === e.tag
      ? "content-security-policy" === e.props["http-equiv"]
        ? (n = -30)
        : e.props.charset
        ? (n = -20)
        : "viewport" === e.props.name && (n = -15)
      : "link" === e.tag && "preconnect" === e.props.rel
      ? (n = 20)
      : e.tag in wu && (n = wu[e.tag]),
    t && t in Du ? n + Du[t] : n
  );
}
const ku = [
    { prefix: "before:", offset: -1 },
    { prefix: "after:", offset: 1 },
  ],
  Cu = ["name", "property", "http-equiv"];
const Eu = "%separator";
const Tu = new RegExp(`${Eu}(?:\\s*${Eu})*`, "g");
function Su(e, t, n, r = !1) {
  if ("string" != typeof e || !e.includes("%")) return e;
  let o = e;
  try {
    o = decodeURI(e);
  } catch {}
  const i = o.match(/%\w+(?:\.\w+)?/g);
  if (!i) return e;
  const s = e.includes(Eu);
  return (
    (e = e
      .replace(/%\w+(?:\.\w+)?/g, (e) => {
        if (e === Eu || !i.includes(e)) return e;
        const n = (function (e, t, n = !1) {
          var r;
          let o;
          if ("s" === t || "pageTitle" === t) o = e.pageTitle;
          else if (t.includes(".")) {
            const n = t.indexOf(".");
            o =
              null == (r = e[t.substring(0, n)])
                ? void 0
                : r[t.substring(n + 1)];
          } else o = e[t];
          if (void 0 !== o) return n ? (o || "").replace(/"/g, '\\"') : o || "";
        })(t, e.slice(1), r);
        return void 0 !== n ? n : e;
      })
      .trim()),
    s &&
      (e.endsWith(Eu) && (e = e.slice(0, -10)),
      e.startsWith(Eu) && (e = e.slice(10)),
      (e = e.replace(Tu, n).trim())),
    e
  );
}
function Au(e, t) {
  return null == e ? t || null : "function" == typeof e ? e(t) : e;
}
const Ou = new Set(["templateParams", "htmlAttrs", "bodyAttrs"]),
  Pu = {
    hooks: {
      "tag:normalise": ({ tag: e }) => {
        e.props.hid && ((e.key = e.props.hid), delete e.props.hid),
          e.props.vmid && ((e.key = e.props.vmid), delete e.props.vmid),
          e.props.key && ((e.key = e.props.key), delete e.props.key);
        const t = (function (e) {
          const { props: t, tag: n } = e;
          if (uu.has(n)) return n;
          if ("link" === n && "canonical" === t.rel) return "canonical";
          if (t.charset) return "charset";
          if (t.id) return `${n}:id:${t.id}`;
          for (const r of Cu) if (void 0 !== t[r]) return `${n}:${r}:${t[r]}`;
          return !1;
        })(e);
        !t ||
          t.startsWith("meta:og:") ||
          t.startsWith("meta:twitter:") ||
          delete e.key;
        const n = t || (!!e.key && `${e.tag}:${e.key}`);
        n && (e._d = n);
      },
      "tags:resolve": (e) => {
        const t = Object.create(null);
        for (const r of e.tags) {
          const e = (r.key ? `${r.tag}:${r.key}` : r._d) || hu(r),
            n = t[e];
          if (n) {
            let o = null == r ? void 0 : r.tagDuplicateStrategy;
            if ((!o && Ou.has(r.tag) && (o = "merge"), "merge" === o)) {
              const o = n.props;
              o.style &&
                r.props.style &&
                (";" !== o.style[o.style.length - 1] && (o.style += ";"),
                (r.props.style = `${o.style} ${r.props.style}`)),
                o.class && r.props.class
                  ? (r.props.class = `${o.class} ${r.props.class}`)
                  : o.class && (r.props.class = o.class),
                (t[e].props = { ...o, ...r.props });
              continue;
            }
            if (r._e === n._e) {
              (n._duped = n._duped || []),
                (r._d = `${n._d}:${n._duped.length + 1}`),
                n._duped.push(r);
              continue;
            }
            if (xu(r) > xu(n)) continue;
          }
          r.innerHTML ||
          r.textContent ||
          0 !== Object.keys(r.props).length ||
          !lu.has(r.tag)
            ? (t[e] = r)
            : delete t[e];
        }
        const n = [];
        for (const r in t) {
          const e = t[r],
            o = e._duped;
          n.push(e), o && (delete e._duped, n.push(...o));
        }
        (e.tags = n),
          (e.tags = e.tags.filter(
            (e) =>
              !(
                "meta" === e.tag &&
                (e.props.name || e.props.property) &&
                !e.props.content
              )
          ));
      },
    },
  },
  Fu = new Set(["script", "link", "bodyAttrs"]),
  Lu = (e) => ({
    hooks: {
      "tags:resolve": (t) => {
        for (const n of t.tags) {
          if (!Fu.has(n.tag)) continue;
          const t = n.props;
          for (const r in t) {
            if ("o" !== r[0] || "n" !== r[1]) continue;
            if (!Object.prototype.hasOwnProperty.call(t, r)) continue;
            const o = t[r];
            "function" == typeof o &&
              (e.ssr && _u.has(r)
                ? (t[r] = `this.dataset.${r}fired = true`)
                : delete t[r],
              (n._eventHandlers = n._eventHandlers || {}),
              (n._eventHandlers[r] = o));
          }
          e.ssr &&
            n._eventHandlers &&
            (n.props.src || n.props.href) &&
            (n.key = n.key || fu(n.props.src || n.props.href));
        }
      },
      "dom:renderTag": ({ $el: e, tag: t }) => {
        var n, r;
        const o = null == e ? void 0 : e.dataset;
        if (o)
          for (const i in o) {
            if (!i.endsWith("fired")) continue;
            const o = i.slice(0, -5);
            _u.has(o) &&
              (null == (r = null == (n = t._eventHandlers) ? void 0 : n[o]) ||
                r.call(e, new Event(o.substring(2))));
          }
      },
    },
  }),
  Nu = new Set(["link", "style", "script", "noscript"]),
  Iu = {
    hooks: {
      "tag:normalise": ({ tag: e }) => {
        e.key && Nu.has(e.tag) && (e.props["data-hid"] = e._h = fu(e.key));
      },
    },
  },
  Ru = {
    mode: "server",
    hooks: {
      "tags:beforeResolve": (e) => {
        const t = {};
        let n = !1;
        for (const r of e.tags)
          "server" !== r._m ||
            ("titleTemplate" !== r.tag &&
              "templateParams" !== r.tag &&
              "title" !== r.tag) ||
            ((t[r.tag] =
              "title" === r.tag || "titleTemplate" === r.tag
                ? r.textContent
                : r.props),
            (n = !0));
        n &&
          e.tags.push({
            tag: "script",
            innerHTML: JSON.stringify(t),
            props: { id: "unhead:payload", type: "application/json" },
          });
      },
    },
  },
  Mu = {
    hooks: {
      "tags:resolve": (e) => {
        var t;
        for (const n of e.tags)
          if ("string" == typeof n.tagPriority)
            for (const { prefix: r, offset: o } of ku) {
              if (!n.tagPriority.startsWith(r)) continue;
              const i = n.tagPriority.substring(r.length),
                s =
                  null == (t = e.tags.find((e) => e._d === i)) ? void 0 : t._p;
              if (void 0 !== s) {
                n._p = s + o;
                break;
              }
            }
        e.tags.sort((e, t) => {
          const n = xu(e),
            r = xu(t);
          return n < r ? -1 : n > r ? 1 : e._p - t._p;
        });
      },
    },
  },
  Bu = { meta: "content", link: "href", htmlAttrs: "lang" },
  ju = ["innerHTML", "textContent"],
  $u = (e) => ({
    hooks: {
      "tags:resolve": (t) => {
        var n;
        const { tags: r } = t;
        let o;
        for (let e = 0; e < r.length; e += 1) {
          "templateParams" === r[e].tag &&
            ((o = t.tags.splice(e, 1)[0].props), (e -= 1));
        }
        const i = o || {},
          s = i.separator || "|";
        delete i.separator,
          (i.pageTitle = Su(
            i.pageTitle ||
              (null == (n = r.find((e) => "title" === e.tag))
                ? void 0
                : n.textContent) ||
              "",
            i,
            s
          ));
        for (const e of r) {
          if (!1 === e.processTemplateParams) continue;
          const t = Bu[e.tag];
          if (t && "string" == typeof e.props[t])
            e.props[t] = Su(e.props[t], i, s);
          else if (
            e.processTemplateParams ||
            "titleTemplate" === e.tag ||
            "title" === e.tag
          )
            for (const n of ju)
              "string" == typeof e[n] &&
                (e[n] = Su(
                  e[n],
                  i,
                  s,
                  "script" === e.tag && e.props.type.endsWith("json")
                ));
        }
        (e._templateParams = i), (e._separator = s);
      },
      "tags:afterResolve": ({ tags: t }) => {
        let n;
        for (let e = 0; e < t.length; e += 1) {
          const r = t[e];
          "title" === r.tag && !1 !== r.processTemplateParams && (n = r);
        }
        (null == n ? void 0 : n.textContent) &&
          (n.textContent = Su(n.textContent, e._templateParams, e._separator));
      },
    },
  }),
  Uu = {
    hooks: {
      "tags:resolve": (e) => {
        const { tags: t } = e;
        let n, r;
        for (let o = 0; o < t.length; o += 1) {
          const e = t[o];
          "title" === e.tag ? (n = e) : "titleTemplate" === e.tag && (r = e);
        }
        if (r && n) {
          const t = Au(r.textContent, n.textContent);
          null !== t
            ? (n.textContent = t || n.textContent)
            : e.tags.splice(e.tags.indexOf(n), 1);
        } else if (r) {
          const e = Au(r.textContent);
          null !== e && ((r.textContent = e), (r.tag = "title"), (r = void 0));
        }
        r && e.tags.splice(e.tags.indexOf(r), 1);
      },
    },
  },
  qu = {
    hooks: {
      "tags:afterResolve": (e) => {
        for (const t of e.tags)
          "string" == typeof t.innerHTML &&
            (!t.innerHTML ||
            ("application/ld+json" !== t.props.type &&
              "application/json" !== t.props.type)
              ? (t.innerHTML = t.innerHTML.replace(
                  new RegExp(`</${t.tag}`, "g"),
                  `<\\/${t.tag}`
                ))
              : (t.innerHTML = t.innerHTML.replace(/</g, "\\u003C")));
      },
    },
  };
function Hu(e = {}) {
  const t = (function (e = {}) {
    const t = xl();
    t.addHooks(e.hooks || {}),
      (e.document = e.document || (du ? document : void 0));
    const n = !e.document,
      r = () => {
        (a.dirty = !0), t.callHook("entries:updated", a);
      };
    let o = 0,
      i = [];
    const s = [],
      a = {
        plugins: s,
        dirty: !1,
        resolvedOptions: e,
        hooks: t,
        headEntries: () => i,
        use(e) {
          const r = "function" == typeof e ? e(a) : e;
          (r.key && s.some((e) => e.key === r.key)) ||
            (s.push(r), zu(r.mode, n) && t.addHooks(r.hooks || {}));
        },
        push(e, t) {
          null == t || delete t.head;
          const s = { _i: o++, input: e, ...t };
          return (
            zu(s.mode, n) && (i.push(s), r()),
            {
              dispose() {
                (i = i.filter((e) => e._i !== s._i)), r();
              },
              patch(e) {
                for (const t of i) t._i === s._i && (t.input = s.input = e);
                r();
              },
            }
          );
        },
        async resolveTags() {
          const e = { tags: [], entries: [...i] };
          await t.callHook("entries:resolve", e);
          for (const n of e.entries) {
            const r = n.resolvedInput || n.input;
            if (
              ((n.resolvedInput = await (n.transform ? n.transform(r) : r)),
              n.resolvedInput)
            )
              for (const o of await bu(n)) {
                const r = {
                  tag: o,
                  entry: n,
                  resolvedOptions: a.resolvedOptions,
                };
                await t.callHook("tag:normalise", r), e.tags.push(r.tag);
              }
          }
          return (
            await t.callHook("tags:beforeResolve", e),
            await t.callHook("tags:resolve", e),
            await t.callHook("tags:afterResolve", e),
            e.tags
          );
        },
        ssr: n,
      };
    return (
      [
        Pu,
        Ru,
        Lu,
        Iu,
        Mu,
        $u,
        Uu,
        qu,
        ...((null == e ? void 0 : e.plugins) || []),
      ].forEach((e) => a.use(e)),
      a.hooks.callHook("init", a),
      a
    );
  })(e);
  return t.use(su()), t;
}
function zu(e, t) {
  return !e || ("server" === e && t) || ("client" === e && !t);
}
const Vu = "3" === Vi[0];
function Wu(e) {
  if (e instanceof Promise || e instanceof Date || e instanceof RegExp)
    return e;
  const t = "function" == typeof (n = e) ? n() : Ot(n);
  var n;
  if (!e || !t) return t;
  if (Array.isArray(t)) return t.map((e) => Wu(e));
  if ("object" == typeof t) {
    const e = {};
    for (const n in t)
      Object.prototype.hasOwnProperty.call(t, n) &&
        ("titleTemplate" === n || ("o" === n[0] && "n" === n[1])
          ? (e[n] = Ot(t[n]))
          : (e[n] = Wu(t[n])));
    return e;
  }
  return t;
}
const Yu = {
  hooks: {
    "entries:resolve": (e) => {
      for (const t of e.entries) t.resolvedInput = Wu(t.input);
    },
  },
};
function Xu(e = {}) {
  e.domDelayFn = e.domDelayFn || ((e) => tn(() => setTimeout(() => e(), 0)));
  const t = Hu(e);
  return (
    t.use(Yu),
    (t.install = (function (e) {
      return {
        install(t) {
          Vu &&
            ((t.config.globalProperties.$unhead = e),
            (t.config.globalProperties.$head = e),
            t.provide("usehead", e));
        },
      }.install;
    })(t)),
    t
  );
}
const Gu =
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self
    ? self
    : {};
const Ku = {},
  Ju = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      const e = document.getElementsByTagName("link"),
        o = document.querySelector("meta[property=csp-nonce]"),
        i =
          (null == o ? void 0 : o.nonce) ||
          (null == o ? void 0 : o.getAttribute("nonce"));
      r = Promise.allSettled(
        t.map((t) => {
          if (
            ((t = (function (e, t) {
              return new URL(e, t).href;
            })(t, n)),
            t in Ku)
          )
            return;
          Ku[t] = !0;
          const r = t.endsWith(".css"),
            o = r ? '[rel="stylesheet"]' : "";
          if (!!n)
            for (let n = e.length - 1; n >= 0; n--) {
              const o = e[n];
              if (o.href === t && (!r || "stylesheet" === o.rel)) return;
            }
          else if (document.querySelector(`link[href="${t}"]${o}`)) return;
          const s = document.createElement("link");
          return (
            (s.rel = r ? "stylesheet" : "modulepreload"),
            r || (s.as = "script"),
            (s.crossOrigin = ""),
            (s.href = t),
            i && s.setAttribute("nonce", i),
            document.head.appendChild(s),
            r
              ? new Promise((e, n) => {
                  s.addEventListener("load", e),
                    s.addEventListener("error", () =>
                      n(new Error(`Unable to preload CSS for ${t}`))
                    );
                })
              : void 0
          );
        })
      );
    }
    function o(e) {
      const t = new Event("vite:preloadError", { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
        throw e;
    }
    return r.then((t) => {
      for (const e of t || []) "rejected" === e.status && o(e.reason);
      return e().catch(o);
    });
  };
let Qu, Zu;
function ep() {
  return (
    Qu ||
    ((Qu = $fetch(hl(`builds/meta/${Hl().app.buildId}.json`), {
      responseType: "json",
    })),
    Qu.then((e) => {
      Zu = _c(e.matcher);
    }).catch((e) => {}),
    Qu)
  );
}
async function tp(e) {
  const t = "string" == typeof e ? e : e.path;
  if ((await ep(), !Zu)) return {};
  try {
    return Cc({}, ...Zu.matchAll(t).reverse());
  } catch (iI) {
    return {};
  }
}
async function np(e, t = {}) {
  const n = await (async function (e, t = {}) {
      const n = new URL(e, "http://localhost");
      if ("localhost" !== n.host || $a(n.pathname, { acceptRelative: !0 }))
        throw new Error("Payload URL must not include hostname: " + e);
      const r = Hl(),
        o = t.hash || (t.fresh ? Date.now() : r.app.buildId),
        i = r.app.cdnURL,
        s = i && (await ip(e)) ? i : r.app.baseURL;
      return Xa(s, n.pathname, rp + (o ? `?${o}` : ""));
    })(e, t),
    r = ql(),
    o = (r._payloadCache = r._payloadCache || {});
  return n in o
    ? o[n] || null
    : ((o[n] = ip(e).then((e) =>
        e ? op(n).then((e) => e || (delete o[n], null)) : ((o[n] = null), null)
      )),
      o[n]);
}
const rp = "_payload.json";
async function op(e) {
  const t = fetch(e).then((e) => e.text().then(lp));
  try {
    return await t;
  } catch (n) {}
  return null;
}
async function ip(e = Mc().path) {
  const t = ql();
  e = qa(e);
  return (
    !!(await ep()).prerendered.includes(e) ||
    t.runWithContext(async () => {
      const t = await tp({ path: e });
      return !!t.prerender && !t.redirect;
    })
  );
}
let sp = null;
async function ap() {
  var e;
  if (sp) return sp;
  const t = document.getElementById("__NUXT_DATA__");
  if (!t) return {};
  const n = await lp(t.textContent || ""),
    r = t.dataset.src ? await op(t.dataset.src) : void 0;
  return (
    (sp = { ...n, ...r, ...window.__NUXT__ }),
    (null == (e = sp.config) ? void 0 : e.public) &&
      (sp.config.public = ft(sp.config.public)),
    sp
  );
}
async function lp(e) {
  return await Xc(e, ql()._payloadRevivers);
}
const cp = [
    ["NuxtError", (e) => Vc(e)],
    [
      "EmptyShallowRef",
      (e) => Tt("_" === e ? void 0 : "0n" === e ? BigInt(0) : fa(e)),
    ],
    [
      "EmptyRef",
      (e) => Et("_" === e ? void 0 : "0n" === e ? BigInt(0) : fa(e)),
    ],
    ["ShallowRef", (e) => Tt(e)],
    ["ShallowReactive", (e) => ht(e)],
    ["Ref", (e) => Et(e)],
    ["Reactive", (e) => ft(e)],
  ],
  up = $l({
    name: "nuxt:revive-payload:client",
    order: -30,
    async setup(e) {
      let t, n;
      for (const [i, s] of cp) (r = i), (o = s), (ql()._payloadRevivers[r] = o);
      var r, o;
      Object.assign(
        e.payload,
        (([t, n] = Al(() => e.runWithContext(ap))), (t = await t), n(), t)
      ),
        (window.__NUXT__ = e.payload);
    },
  });
function pp(e, t) {
  const n = [],
    r = t.resolveKeyData || ((e) => e.key),
    o = t.resolveValueData || ((e) => e.value);
  for (const [i, s] of Object.entries(e))
    n.push(
      ...(Array.isArray(s) ? s : [s])
        .map((e) => {
          const n = { key: i, value: e },
            s = o(n);
          return "object" == typeof s
            ? pp(s, t)
            : Array.isArray(s)
            ? s
            : {
                ["function" == typeof t.key ? t.key(n) : t.key]: r(n),
                ["function" == typeof t.value ? t.value(n) : t.value]: s,
              };
        })
        .flat()
    );
  return n;
}
function dp(e, t) {
  return Object.entries(e)
    .map(([e, n]) => {
      if (("object" == typeof n && (n = dp(n, t)), t.resolve)) {
        const r = t.resolve({ key: e, value: n });
        if (void 0 !== r) return r;
      }
      return (
        "number" == typeof n && (n = n.toString()),
        "string" == typeof n &&
          t.wrapValue &&
          ((n = n.replace(new RegExp(t.wrapValue, "g"), `\\${t.wrapValue}`)),
          (n = `${t.wrapValue}${n}${t.wrapValue}`)),
        `${e}${t.keyValueSeparator || ""}${n}`
      );
    })
    .join(t.entrySeparator || "");
}
const fp = (e) => ({ keyValue: e, metaKey: "property" }),
  hp = (e) => ({ keyValue: e }),
  mp = {
    appleItunesApp: {
      unpack: {
        entrySeparator: ", ",
        resolve: ({ key: e, value: t }) => `${yp(e)}=${t}`,
      },
    },
    articleExpirationTime: fp("article:expiration_time"),
    articleModifiedTime: fp("article:modified_time"),
    articlePublishedTime: fp("article:published_time"),
    bookReleaseDate: fp("book:release_date"),
    charset: { metaKey: "charset" },
    contentSecurityPolicy: {
      unpack: {
        entrySeparator: "; ",
        resolve: ({ key: e, value: t }) => `${yp(e)} ${t}`,
      },
      metaKey: "http-equiv",
    },
    contentType: { metaKey: "http-equiv" },
    defaultStyle: { metaKey: "http-equiv" },
    fbAppId: fp("fb:app_id"),
    msapplicationConfig: hp("msapplication-Config"),
    msapplicationTileColor: hp("msapplication-TileColor"),
    msapplicationTileImage: hp("msapplication-TileImage"),
    ogAudioSecureUrl: fp("og:audio:secure_url"),
    ogAudioUrl: fp("og:audio"),
    ogImageSecureUrl: fp("og:image:secure_url"),
    ogImageUrl: fp("og:image"),
    ogSiteName: fp("og:site_name"),
    ogVideoSecureUrl: fp("og:video:secure_url"),
    ogVideoUrl: fp("og:video"),
    profileFirstName: fp("profile:first_name"),
    profileLastName: fp("profile:last_name"),
    profileUsername: fp("profile:username"),
    refresh: {
      metaKey: "http-equiv",
      unpack: {
        entrySeparator: ";",
        resolve({ key: e, value: t }) {
          if ("seconds" === e) return `${t}`;
        },
      },
    },
    robots: {
      unpack: {
        entrySeparator: ", ",
        resolve: ({ key: e, value: t }) =>
          "boolean" == typeof t ? `${yp(e)}` : `${yp(e)}:${t}`,
      },
    },
    xUaCompatible: { metaKey: "http-equiv" },
  },
  gp = new Set(["og", "book", "article", "profile"]);
function vp(e) {
  var t;
  const n = yp(e),
    r = n.indexOf(":");
  return gp.has(n.substring(0, r))
    ? "property"
    : (null == (t = mp[e]) ? void 0 : t.metaKey) || "name";
}
function yp(e) {
  const t = e.replace(/([A-Z])/g, "-$1").toLowerCase(),
    n = t.indexOf("-"),
    r = t.substring(0, n);
  return "twitter" === r || gp.has(r)
    ? e.replace(/([A-Z])/g, ":$1").toLowerCase()
    : t;
}
function bp(e) {
  if (Array.isArray(e)) return e.map((e) => bp(e));
  if ("object" != typeof e || Array.isArray(e)) return e;
  const t = {};
  for (const n in e)
    Object.prototype.hasOwnProperty.call(e, n) && (t[yp(n)] = bp(e[n]));
  return t;
}
function _p(e, t) {
  const n = mp[t];
  return "refresh" === t
    ? `${e.seconds};url=${e.url}`
    : dp(bp(e), {
        keyValueSeparator: "=",
        entrySeparator: ", ",
        resolve: ({ value: e, key: t }) =>
          null === e ? "" : "boolean" == typeof e ? `${t}` : void 0,
        ...(null == n ? void 0 : n.unpack),
      });
}
const wp = new Set(["og:image", "og:video", "og:audio", "twitter:image"]);
function Dp(e) {
  const t = {};
  for (const n in e) {
    if (!Object.prototype.hasOwnProperty.call(e, n)) continue;
    const r = e[n];
    "false" !== String(r) && n && (t[n] = r);
  }
  return t;
}
function xp(e, t) {
  const n = Dp(t),
    r = yp(e),
    o = vp(r);
  if (wp.has(r)) {
    const t = {};
    for (const r in n)
      Object.prototype.hasOwnProperty.call(n, r) &&
        (t[`${e}${"url" === r ? "" : `${r[0].toUpperCase()}${r.slice(1)}`}`] =
          n[r]);
    return kp(t).sort((e, t) => {
      var n, r;
      return (
        ((null == (n = e[o]) ? void 0 : n.length) || 0) -
        ((null == (r = t[o]) ? void 0 : r.length) || 0)
      );
    });
  }
  return [{ [o]: r, ...n }];
}
function kp(e) {
  const t = [],
    n = {};
  for (const o in e) {
    if (!Object.prototype.hasOwnProperty.call(e, o)) continue;
    const r = e[o];
    if (Array.isArray(r))
      for (const e of r)
        t.push(...("string" == typeof e ? kp({ [o]: e }) : xp(o, e)));
    else if ("object" == typeof r && r) {
      if (wp.has(yp(o))) {
        t.push(...xp(o, r));
        continue;
      }
      n[o] = Dp(r);
    } else n[o] = r;
  }
  const r = pp(n, {
    key: ({ key: e }) => vp(e),
    value: ({ key: e }) => ("charset" === e ? "charset" : "content"),
    resolveKeyData: ({ key: e }) =>
      (function (e) {
        var t;
        return (null == (t = mp[e]) ? void 0 : t.keyValue) || yp(e);
      })(e),
    resolveValueData: ({ value: e, key: t }) =>
      null === e
        ? "_null"
        : "object" == typeof e
        ? _p(e, t)
        : "number" == typeof e
        ? e.toString()
        : e,
  });
  return [...t, ...r].map(
    (e) => ("_null" === e.content && (e.content = null), e)
  );
}
const Cp = new Set(["onload", "onerror"]);
const Ep = Symbol("ScriptProxyTarget");
function Tp() {}
function Sp(e) {
  return (
    e.key ||
    (function (e) {
      let t = 9;
      for (let n = 0; n < e.length; )
        t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
      return (65536 + (t ^ (t >>> 9)))
        .toString(16)
        .substring(1, 8)
        .toLowerCase();
    })(e.src || ("string" == typeof e.innerHTML ? e.innerHTML : ""))
  );
}
function Ap(e) {
  if (e instanceof Promise || e instanceof Date || e instanceof RegExp)
    return e;
  const t = "function" == typeof (n = e) ? n() : Ot(n);
  var n;
  if (!e || !t) return t;
  if (Array.isArray(t)) return t.map((e) => Ap(e));
  if ("object" == typeof t) {
    const e = {};
    for (const n in t)
      Object.prototype.hasOwnProperty.call(t, n) &&
        ("titleTemplate" === n || ("o" === n[0] && "n" === n[1])
          ? (e[n] = Ot(t[n]))
          : (e[n] = Ap(t[n])));
    return e;
  }
  return t;
}
Tp[Ep] = !0;
const Op =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {},
  Pp = "__unhead_injection_handler__";
function Fp() {
  if (Pp in Op) return Op[Pp]();
  return no("usehead") || void 0;
}
function Lp(e, t = {}) {
  const n = t.head || Fp();
  if (n)
    return n.ssr
      ? n.push(e, t)
      : (function (e, t, n = {}) {
          const r = Et(!1),
            o = Et({});
          !(function (e, t) {
            Oo(e, null, t);
          })(() => {
            o.value = r.value ? {} : Ap(t);
          });
          const i = e.push(o.value, n);
          Ao(o, (e) => {
            i.patch(e);
          });
          Ai() &&
            (gr(() => {
              i.dispose();
            }),
            ir(() => {
              r.value = !0;
            }),
            or(() => {
              r.value = !1;
            }));
          return i;
        })(n, e, t);
}
function Np(e, t) {
  const n = "string" == typeof e ? { src: e } : e,
    r = t || {},
    o = (null == r ? void 0 : r.head) || Fp();
  r.head = o;
  const i = Ai();
  if (((r.eventContext = i), i && void 0 === r.trigger)) r.trigger = fr;
  else if (Ct(r.trigger)) {
    const e = r.trigger;
    let t;
    r.trigger = new Promise((n) => {
      (t = Ao(
        e,
        (e) => {
          e && n(!0);
        },
        { immediate: !0 }
      )),
        se(() => n(!1), !0);
    }).then((e) => (null == t || t(), e));
  }
  o._scriptStatusWatcher =
    o._scriptStatusWatcher ||
    o.hooks.hook("script:updated", ({ script: e }) => {
      e._statusRef.value = e.status;
    });
  const s = (function (e, t) {
    var n, r, o;
    const i = "string" == typeof e ? { src: e } : e,
      s = t,
      a = s.head || void 0;
    if (!a) throw new Error("Missing Unhead context.");
    const l = Sp(i),
      c = null == (n = a._scripts) ? void 0 : n[l];
    if (c) return c.setupTriggerHandler(s.trigger), c;
    null == (r = s.beforeInit) || r.call(s);
    const u = (e) => {
      (h.status = e), a.hooks.callHook("script:updated", m);
    };
    Cp.forEach((e) => {
      const t = "function" == typeof i[e] ? i[e].bind(s.eventContext) : null;
      i[e] = (n) => {
        u("onload" === e ? "loaded" : "onerror" === e ? "error" : "loading"),
          null == t || t(n);
      };
    });
    const p = { loaded: [], error: [] },
      d = (e, t) => {
        if (p[e]) {
          const n = p[e].push(t);
          return () => {
            var t;
            return null == (t = p[e]) ? void 0 : t.splice(n - 1, 1);
          };
        }
        return t(h.instance), () => {};
      },
      f = new Promise((e) => {
        if (a.ssr) return;
        const t = (t) => requestAnimationFrame(() => e(t)),
          n = a.hooks.hook("script:updated", ({ script: r }) => {
            const o = r.status;
            if (r.id === l && ("loaded" === o || "error" === o)) {
              if ("loaded" === o)
                if ("function" == typeof s.use) {
                  const e = s.use();
                  e && t(e);
                } else t({});
              else "error" === o && e(!1);
              n();
            }
          });
      }),
      h = Object.assign(f, {
        instance:
          (!a.ssr &&
            (null == (o = null == s ? void 0 : s.use) ? void 0 : o.call(s))) ||
          null,
        proxy: null,
        id: l,
        status: "awaitingLoad",
        remove() {
          var e, t;
          return (
            null == (e = h._triggerAbortController) || e.abort(),
            (h._triggerPromises = []),
            !!h.entry &&
              (h.entry.dispose(),
              u("removed"),
              null == (t = a._scripts) || delete t[l],
              !0)
          );
        },
        load(e) {
          var t;
          if (
            (null == (t = h._triggerAbortController) || t.abort(),
            (h._triggerPromises = []),
            !h.entry)
          ) {
            u("loading");
            const e = { defer: !0, fetchpriority: "low" };
            i.src &&
              (i.src.startsWith("http") || i.src.startsWith("//")) &&
              ((e.crossorigin = "anonymous"),
              (e.referrerpolicy = "no-referrer")),
              (h.entry = a.push(
                { script: [{ ...e, ...i, key: `script.${l}` }] },
                s
              ));
          }
          return e && d("loaded", e), f;
        },
        onLoaded: (e) => d("loaded", e),
        onError: (e) => d("error", e),
        setupTriggerHandler(e) {
          if ("awaitingLoad" === h.status)
            if (((void 0 !== e && "client" !== e) || a.ssr) && "server" !== e)
              if (e instanceof Promise) {
                if (a.ssr) return;
                h._triggerAbortController ||
                  ((h._triggerAbortController = new AbortController()),
                  (h._triggerAbortPromise = new Promise((e) => {
                    h._triggerAbortController.signal.addEventListener(
                      "abort",
                      () => {
                        (h._triggerAbortController = null), e();
                      }
                    );
                  }))),
                  (h._triggerPromises = h._triggerPromises || []);
                const t = h._triggerPromises.push(
                  Promise.race([
                    e.then((e) => (void 0 === e || e ? h.load : void 0)),
                    h._triggerAbortPromise,
                  ])
                    .catch(() => {})
                    .then((e) => {
                      null == e || e();
                    })
                    .finally(() => {
                      var e;
                      null == (e = h._triggerPromises) || e.splice(t, 1);
                    })
                );
              } else "function" == typeof e && e(h.load);
            else h.load();
        },
        _cbs: p,
      });
    f.then((e) => {
      var t, n;
      !1 !== e
        ? ((h.instance = e),
          null == (t = p.loaded) || t.forEach((t) => t(e)),
          (p.loaded = null))
        : (null == (n = p.error) || n.forEach((e) => e()), (p.error = null));
    });
    const m = { script: h };
    h.setupTriggerHandler(s.trigger), (h.$script = h);
    const g = (e, t, n) =>
      new Proxy((t ? (null == e ? void 0 : e[t]) : e) || Tp, {
        get(r, o, i) {
          var l;
          if (
            (a.hooks.callHook("script:instance-fn", {
              script: h,
              fn: o,
              exists: o in r,
            }),
            !t)
          ) {
            const e =
              null == (l = s.stub) ? void 0 : l.call(s, { script: h, fn: o });
            if (e) return e;
          }
          return r && o in r && void 0 !== r[o]
            ? Reflect.get(r, o, i)
            : o === Symbol.iterator
            ? [][Symbol.iterator]
            : g(t ? (null == e ? void 0 : e[t]) : e, o, n || [o]);
        },
        async apply(e, t, r) {
          if (a.ssr && e[Ep]) return;
          let o;
          const i = (e) => {
            o = e || o;
            for (let t = 0; t < (n || []).length; t++) {
              const r = (n || [])[t];
              e = null == e ? void 0 : e[r];
            }
            return e;
          };
          let s = i(h.instance);
          return (
            s ||
              (s = await new Promise((e) => {
                h.onLoaded((t) => {
                  e(i(t));
                });
              })),
            "function" == typeof s ? Reflect.apply(s, o, r) : s
          );
        },
      });
    h.proxy = g(h.instance);
    const v = new Proxy(h, {
      get(e, t) {
        const n = t in h || "_" === String(t)[0] ? h : h.proxy;
        return "then" === t || "catch" === t
          ? h[t].bind(h)
          : Reflect.get(n, t, n);
      },
    });
    return (a._scripts = Object.assign(a._scripts || {}, { [l]: v })), v;
  })(n, r);
  return (
    (s._statusRef = s._statusRef || Et(s.status)),
    (function (e, t) {
      if (!t) return;
      const n = (t, n) => {
        if (!e._cbs[t]) return n(e.instance), () => {};
        let r = e._cbs[t].push(n);
        const o = () => {
          var n;
          r && (null == (n = e._cbs[t]) || n.splice(r - 1, 1), (r = null));
        };
        return se(o), o;
      };
      (e.onLoaded = (e) => n("loaded", e)),
        (e.onError = (e) => n("error", e)),
        se(() => {
          var t;
          null == (t = e._triggerAbortController) || t.abort();
        });
    })(s, i),
    new Proxy(s, {
      get: (e, t, n) => Reflect.get(e, "status" === t ? "_statusRef" : t, n),
    })
  );
}
function Ip(e, t) {
  const { title: n, titleTemplate: r, ...o } = e;
  return Lp(
    { title: n, titleTemplate: r, _flatMeta: o },
    {
      ...t,
      transform(e) {
        const t = kp({ ...e._flatMeta });
        return delete e._flatMeta, { ...e, meta: t };
      },
    }
  );
}
const Rp = [],
  Mp = $l({
    name: "nuxt:head",
    enforce: "pre",
    setup(e) {
      const t = Xu({ plugins: Rp });
      var n;
      (n = () => ql().vueApp._context.provides.usehead),
        (Gu.__unhead_injection_handler__ = n),
        e.vueApp.use(t);
      {
        let n = !0;
        const r = async () => {
          (n = !1), await iu(t);
        };
        t.hooks.hook("dom:beforeRender", (e) => {
          e.shouldRender = !n;
        }),
          e.hooks.hook("page:start", () => {
            n = !0;
          }),
          e.hooks.hook("page:finish", () => {
            e.isHydrating || r();
          }),
          e.hooks.hook("app:error", r),
          e.hooks.hook("app:suspense:resolve", r);
      }
    },
  }),
  Bp = "undefined" != typeof document;
function jp(e) {
  return (
    "object" == typeof e ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
const $p = Object.assign;
function Up(e, t) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    n[r] = Hp(o) ? o.map(e) : e(o);
  }
  return n;
}
const qp = () => {},
  Hp = Array.isArray,
  zp = /#/g,
  Vp = /&/g,
  Wp = /\//g,
  Yp = /=/g,
  Xp = /\?/g,
  Gp = /\+/g,
  Kp = /%5B/g,
  Jp = /%5D/g,
  Qp = /%5E/g,
  Zp = /%60/g,
  ed = /%7B/g,
  td = /%7C/g,
  nd = /%7D/g,
  rd = /%20/g;
function od(e) {
  return encodeURI("" + e)
    .replace(td, "|")
    .replace(Kp, "[")
    .replace(Jp, "]");
}
function id(e) {
  return od(e)
    .replace(Gp, "%2B")
    .replace(rd, "+")
    .replace(zp, "%23")
    .replace(Vp, "%26")
    .replace(Zp, "`")
    .replace(ed, "{")
    .replace(nd, "}")
    .replace(Qp, "^");
}
function sd(e) {
  return null == e
    ? ""
    : (function (e) {
        return od(e).replace(zp, "%23").replace(Xp, "%3F");
      })(e).replace(Wp, "%2F");
}
function ad(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {}
  return "" + e;
}
const ld = /\/$/;
function cd(e, t, n = "/") {
  let r,
    o = {},
    i = "",
    s = "";
  const a = t.indexOf("#");
  let l = t.indexOf("?");
  return (
    a < l && a >= 0 && (l = -1),
    l > -1 &&
      ((r = t.slice(0, l)),
      (i = t.slice(l + 1, a > -1 ? a : t.length)),
      (o = e(i))),
    a > -1 && ((r = r || t.slice(0, a)), (s = t.slice(a, t.length))),
    (r = (function (e, t) {
      if (e.startsWith("/")) return e;
      if (!e) return t;
      const n = t.split("/"),
        r = e.split("/"),
        o = r[r.length - 1];
      (".." !== o && "." !== o) || r.push("");
      let i,
        s,
        a = n.length - 1;
      for (i = 0; i < r.length; i++)
        if (((s = r[i]), "." !== s)) {
          if (".." !== s) break;
          a > 1 && a--;
        }
      return n.slice(0, a).join("/") + "/" + r.slice(i).join("/");
    })(null != r ? r : t, n)),
    { fullPath: r + (i && "?") + i + s, path: r, query: o, hash: ad(s) }
  );
}
function ud(e, t) {
  return t && e.toLowerCase().startsWith(t.toLowerCase())
    ? e.slice(t.length) || "/"
    : e;
}
function pd(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function dd(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!fd(e[n], t[n])) return !1;
  return !0;
}
function fd(e, t) {
  return Hp(e) ? hd(e, t) : Hp(t) ? hd(t, e) : e === t;
}
function hd(e, t) {
  return Hp(t)
    ? e.length === t.length && e.every((e, n) => e === t[n])
    : 1 === e.length && e[0] === t;
}
const md = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0,
};
var gd, vd, yd, bd;
function _d(e) {
  if (!e)
    if (Bp) {
      const t = document.querySelector("base");
      e = (e = (t && t.getAttribute("href")) || "/").replace(
        /^\w+:\/\/[^\/]+/,
        ""
      );
    } else e = "/";
  return "/" !== e[0] && "#" !== e[0] && (e = "/" + e), e.replace(ld, "");
}
((vd = gd || (gd = {})).pop = "pop"),
  (vd.push = "push"),
  ((bd = yd || (yd = {})).back = "back"),
  (bd.forward = "forward"),
  (bd.unknown = "");
const wd = /^[^#]+#/;
function Dd(e, t) {
  return e.replace(wd, "#") + t;
}
const xd = () => ({ left: window.scrollX, top: window.scrollY });
function kd(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      r = "string" == typeof n && n.startsWith("#"),
      o =
        "string" == typeof n
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!o) return;
    t = (function (e, t) {
      const n = document.documentElement.getBoundingClientRect(),
        r = e.getBoundingClientRect();
      return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0),
      };
    })(o, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        null != t.left ? t.left : window.scrollX,
        null != t.top ? t.top : window.scrollY
      );
}
function Cd(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Ed = new Map();
function Td(e, t) {
  const { pathname: n, search: r, hash: o } = t,
    i = e.indexOf("#");
  if (i > -1) {
    let t = o.includes(e.slice(i)) ? e.slice(i).length : 1,
      n = o.slice(t);
    return "/" !== n[0] && (n = "/" + n), ud(n, "");
  }
  return ud(n, e) + r + o;
}
function Sd(e, t, n, r = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: o ? xd() : null,
  };
}
function Ad(e) {
  const { history: t, location: n } = window,
    r = { value: Td(e, n) },
    o = { value: t.state };
  function i(r, i, s) {
    const a = e.indexOf("#"),
      l =
        a > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(a)) + r
          : location.protocol + "//" + location.host + e + r;
    try {
      t[s ? "replaceState" : "pushState"](i, "", l), (o.value = i);
    } catch (c) {
      n[s ? "replace" : "assign"](l);
    }
  }
  return (
    o.value ||
      i(
        r.value,
        {
          back: null,
          current: r.value,
          forward: null,
          position: t.length - 1,
          replaced: !0,
          scroll: null,
        },
        !0
      ),
    {
      location: r,
      state: o,
      push: function (e, n) {
        const s = $p({}, o.value, t.state, { forward: e, scroll: xd() });
        i(s.current, s, !0),
          i(
            e,
            $p({}, Sd(r.value, e, null), { position: s.position + 1 }, n),
            !1
          ),
          (r.value = e);
      },
      replace: function (e, n) {
        i(
          e,
          $p({}, t.state, Sd(o.value.back, e, o.value.forward, !0), n, {
            position: o.value.position,
          }),
          !0
        ),
          (r.value = e);
      },
    }
  );
}
function Od(e) {
  const t = Ad((e = _d(e))),
    n = (function (e, t, n, r) {
      let o = [],
        i = [],
        s = null;
      const a = ({ state: i }) => {
        const a = Td(e, location),
          l = n.value,
          c = t.value;
        let u = 0;
        if (i) {
          if (((n.value = a), (t.value = i), s && s === l))
            return void (s = null);
          u = c ? i.position - c.position : 0;
        } else r(a);
        o.forEach((e) => {
          e(n.value, l, {
            delta: u,
            type: gd.pop,
            direction: u ? (u > 0 ? yd.forward : yd.back) : yd.unknown,
          });
        });
      };
      function l() {
        const { history: e } = window;
        e.state && e.replaceState($p({}, e.state, { scroll: xd() }), "");
      }
      return (
        window.addEventListener("popstate", a),
        window.addEventListener("beforeunload", l, { passive: !0 }),
        {
          pauseListeners: function () {
            s = n.value;
          },
          listen: function (e) {
            o.push(e);
            const t = () => {
              const t = o.indexOf(e);
              t > -1 && o.splice(t, 1);
            };
            return i.push(t), t;
          },
          destroy: function () {
            for (const e of i) e();
            (i = []),
              window.removeEventListener("popstate", a),
              window.removeEventListener("beforeunload", l);
          },
        }
      );
    })(e, t.state, t.location, t.replace);
  const r = $p(
    {
      location: "",
      base: e,
      go: function (e, t = !0) {
        t || n.pauseListeners(), history.go(e);
      },
      createHref: Dd.bind(null, e),
    },
    t,
    n
  );
  return (
    Object.defineProperty(r, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(r, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    r
  );
}
function Pd(e) {
  return "string" == typeof e || "symbol" == typeof e;
}
const Fd = Symbol("");
var Ld, Nd;
function Id(e, t) {
  return $p(new Error(), { type: e, [Fd]: !0 }, t);
}
function Rd(e, t) {
  return e instanceof Error && Fd in e && (null == t || !!(e.type & t));
}
((Nd = Ld || (Ld = {}))[(Nd.aborted = 4)] = "aborted"),
  (Nd[(Nd.cancelled = 8)] = "cancelled"),
  (Nd[(Nd.duplicated = 16)] = "duplicated");
const Md = "[^/]+?",
  Bd = { sensitive: !1, strict: !1, start: !0, end: !0 },
  jd = /[.+*?^${}()[\]/\\]/g;
function $d(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? 1 === e.length && 80 === e[0]
      ? -1
      : 1
    : e.length > t.length
    ? 1 === t.length && 80 === t[0]
      ? 1
      : -1
    : 0;
}
function Ud(e, t) {
  let n = 0;
  const r = e.score,
    o = t.score;
  for (; n < r.length && n < o.length; ) {
    const e = $d(r[n], o[n]);
    if (e) return e;
    n++;
  }
  if (1 === Math.abs(o.length - r.length)) {
    if (qd(r)) return 1;
    if (qd(o)) return -1;
  }
  return o.length - r.length;
}
function qd(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Hd = { type: 0, value: "" },
  zd = /[a-zA-Z0-9_]/;
function Vd(e, t, n) {
  const r = (function (e, t) {
      const n = $p({}, Bd, t),
        r = [];
      let o = n.start ? "^" : "";
      const i = [];
      for (const l of e) {
        const e = l.length ? [] : [90];
        n.strict && !l.length && (o += "/");
        for (let t = 0; t < l.length; t++) {
          const r = l[t];
          let s = 40 + (n.sensitive ? 0.25 : 0);
          if (0 === r.type)
            t || (o += "/"), (o += r.value.replace(jd, "\\$&")), (s += 40);
          else if (1 === r.type) {
            const { value: e, repeatable: n, optional: c, regexp: u } = r;
            i.push({ name: e, repeatable: n, optional: c });
            const p = u || Md;
            if (p !== Md) {
              s += 10;
              try {
                new RegExp(`(${p})`);
              } catch (a) {
                throw new Error(
                  `Invalid custom RegExp for param "${e}" (${p}): ` + a.message
                );
              }
            }
            let d = n ? `((?:${p})(?:/(?:${p}))*)` : `(${p})`;
            t || (d = c && l.length < 2 ? `(?:/${d})` : "/" + d),
              c && (d += "?"),
              (o += d),
              (s += 20),
              c && (s += -8),
              n && (s += -20),
              ".*" === p && (s += -50);
          }
          e.push(s);
        }
        r.push(e);
      }
      if (n.strict && n.end) {
        const e = r.length - 1;
        r[e][r[e].length - 1] += 0.7000000000000001;
      }
      n.strict || (o += "/?"),
        n.end ? (o += "$") : n.strict && !o.endsWith("/") && (o += "(?:/|$)");
      const s = new RegExp(o, n.sensitive ? "" : "i");
      return {
        re: s,
        score: r,
        keys: i,
        parse: function (e) {
          const t = e.match(s),
            n = {};
          if (!t) return null;
          for (let r = 1; r < t.length; r++) {
            const e = t[r] || "",
              o = i[r - 1];
            n[o.name] = e && o.repeatable ? e.split("/") : e;
          }
          return n;
        },
        stringify: function (t) {
          let n = "",
            r = !1;
          for (const o of e) {
            (r && n.endsWith("/")) || (n += "/"), (r = !1);
            for (const e of o)
              if (0 === e.type) n += e.value;
              else if (1 === e.type) {
                const { value: i, repeatable: s, optional: a } = e,
                  l = i in t ? t[i] : "";
                if (Hp(l) && !s)
                  throw new Error(
                    `Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`
                  );
                const c = Hp(l) ? l.join("/") : l;
                if (!c) {
                  if (!a) throw new Error(`Missing required param "${i}"`);
                  o.length < 2 &&
                    (n.endsWith("/") ? (n = n.slice(0, -1)) : (r = !0));
                }
                n += c;
              }
          }
          return n || "/";
        },
      };
    })(
      (function (e) {
        if (!e) return [[]];
        if ("/" === e) return [[Hd]];
        if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
        function t(e) {
          throw new Error(`ERR (${n})/"${c}": ${e}`);
        }
        let n = 0,
          r = n;
        const o = [];
        let i;
        function s() {
          i && o.push(i), (i = []);
        }
        let a,
          l = 0,
          c = "",
          u = "";
        function p() {
          c &&
            (0 === n
              ? i.push({ type: 0, value: c })
              : 1 === n || 2 === n || 3 === n
              ? (i.length > 1 &&
                  ("*" === a || "+" === a) &&
                  t(
                    `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`
                  ),
                i.push({
                  type: 1,
                  value: c,
                  regexp: u,
                  repeatable: "*" === a || "+" === a,
                  optional: "*" === a || "?" === a,
                }))
              : t("Invalid state to consume buffer"),
            (c = ""));
        }
        function d() {
          c += a;
        }
        for (; l < e.length; )
          if (((a = e[l++]), "\\" !== a || 2 === n))
            switch (n) {
              case 0:
                "/" === a ? (c && p(), s()) : ":" === a ? (p(), (n = 1)) : d();
                break;
              case 4:
                d(), (n = r);
                break;
              case 1:
                "(" === a
                  ? (n = 2)
                  : zd.test(a)
                  ? d()
                  : (p(), (n = 0), "*" !== a && "?" !== a && "+" !== a && l--);
                break;
              case 2:
                ")" === a
                  ? "\\" == u[u.length - 1]
                    ? (u = u.slice(0, -1) + a)
                    : (n = 3)
                  : (u += a);
                break;
              case 3:
                p(),
                  (n = 0),
                  "*" !== a && "?" !== a && "+" !== a && l--,
                  (u = "");
                break;
              default:
                t("Unknown state");
            }
          else (r = n), (n = 4);
        return (
          2 === n && t(`Unfinished custom RegExp for param "${c}"`), p(), s(), o
        );
      })(e.path),
      n
    ),
    o = $p(r, { record: e, parent: t, children: [], alias: [] });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function Wd(e, t) {
  const n = [],
    r = new Map();
  function o(e, n, r) {
    const a = !r,
      l = Xd(e);
    l.aliasOf = r && r.record;
    const c = Qd(t, e),
      u = [l];
    if ("alias" in e) {
      const t = "string" == typeof e.alias ? [e.alias] : e.alias;
      for (const e of t)
        u.push(
          Xd(
            $p({}, l, {
              components: r ? r.record.components : l.components,
              path: e,
              aliasOf: r ? r.record : l,
            })
          )
        );
    }
    let p, d;
    for (const t of u) {
      const { path: u } = t;
      if (n && "/" !== u[0]) {
        const e = n.record.path,
          r = "/" === e[e.length - 1] ? "" : "/";
        t.path = n.record.path + (u && r + u);
      }
      if (
        ((p = Vd(t, n, c)),
        r
          ? r.alias.push(p)
          : ((d = d || p),
            d !== p && d.alias.push(p),
            a && e.name && !Kd(p) && i(e.name)),
        Zd(p) && s(p),
        l.children)
      ) {
        const e = l.children;
        for (let t = 0; t < e.length; t++) o(e[t], p, r && r.children[t]);
      }
      r = r || p;
    }
    return d
      ? () => {
          i(d);
        }
      : qp;
  }
  function i(e) {
    if (Pd(e)) {
      const t = r.get(e);
      t &&
        (r.delete(e),
        n.splice(n.indexOf(t), 1),
        t.children.forEach(i),
        t.alias.forEach(i));
    } else {
      const t = n.indexOf(e);
      t > -1 &&
        (n.splice(t, 1),
        e.record.name && r.delete(e.record.name),
        e.children.forEach(i),
        e.alias.forEach(i));
    }
  }
  function s(e) {
    const t = (function (e, t) {
      let n = 0,
        r = t.length;
      for (; n !== r; ) {
        const o = (n + r) >> 1;
        Ud(e, t[o]) < 0 ? (r = o) : (n = o + 1);
      }
      const o = (function (e) {
        let t = e;
        for (; (t = t.parent); ) if (Zd(t) && 0 === Ud(e, t)) return t;
        return;
      })(e);
      o && (r = t.lastIndexOf(o, r - 1));
      return r;
    })(e, n);
    n.splice(t, 0, e), e.record.name && !Kd(e) && r.set(e.record.name, e);
  }
  return (
    (t = Qd({ strict: !1, end: !0, sensitive: !1 }, t)),
    e.forEach((e) => o(e)),
    {
      addRoute: o,
      resolve: function (e, t) {
        let o,
          i,
          s,
          a = {};
        if ("name" in e && e.name) {
          if (((o = r.get(e.name)), !o)) throw Id(1, { location: e });
          (s = o.record.name),
            (a = $p(
              Yd(
                t.params,
                o.keys
                  .filter((e) => !e.optional)
                  .concat(
                    o.parent ? o.parent.keys.filter((e) => e.optional) : []
                  )
                  .map((e) => e.name)
              ),
              e.params &&
                Yd(
                  e.params,
                  o.keys.map((e) => e.name)
                )
            )),
            (i = o.stringify(a));
        } else if (null != e.path)
          (i = e.path),
            (o = n.find((e) => e.re.test(i))),
            o && ((a = o.parse(i)), (s = o.record.name));
        else {
          if (
            ((o = t.name ? r.get(t.name) : n.find((e) => e.re.test(t.path))),
            !o)
          )
            throw Id(1, { location: e, currentLocation: t });
          (s = o.record.name),
            (a = $p({}, t.params, e.params)),
            (i = o.stringify(a));
        }
        const l = [];
        let c = o;
        for (; c; ) l.unshift(c.record), (c = c.parent);
        return { name: s, path: i, params: a, matched: l, meta: Jd(l) };
      },
      removeRoute: i,
      clearRoutes: function () {
        (n.length = 0), r.clear();
      },
      getRoutes: function () {
        return n;
      },
      getRecordMatcher: function (e) {
        return r.get(e);
      },
    }
  );
}
function Yd(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function Xd(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: Gd(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function Gd(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = "object" == typeof n ? n[r] : n;
  return t;
}
function Kd(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Jd(e) {
  return e.reduce((e, t) => $p(e, t.meta), {});
}
function Qd(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function Zd({ record: e }) {
  return !!(
    e.name ||
    (e.components && Object.keys(e.components).length) ||
    e.redirect
  );
}
function ef(e) {
  const t = {};
  if ("" === e || "?" === e) return t;
  const n = ("?" === e[0] ? e.slice(1) : e).split("&");
  for (let r = 0; r < n.length; ++r) {
    const e = n[r].replace(Gp, " "),
      o = e.indexOf("="),
      i = ad(o < 0 ? e : e.slice(0, o)),
      s = o < 0 ? null : ad(e.slice(o + 1));
    if (i in t) {
      let e = t[i];
      Hp(e) || (e = t[i] = [e]), e.push(s);
    } else t[i] = s;
  }
  return t;
}
function tf(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (((n = id(n).replace(Yp, "%3D")), null == r)) {
      void 0 !== r && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Hp(r) ? r.map((e) => e && id(e)) : [r && id(r)]).forEach((e) => {
      void 0 !== e &&
        ((t += (t.length ? "&" : "") + n), null != e && (t += "=" + e));
    });
  }
  return t;
}
function nf(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    void 0 !== r &&
      (t[n] = Hp(r)
        ? r.map((e) => (null == e ? null : "" + e))
        : null == r
        ? r
        : "" + r);
  }
  return t;
}
const rf = Symbol(""),
  of = Symbol(""),
  sf = Symbol(""),
  af = Symbol(""),
  lf = Symbol("");
function cf() {
  let e = [];
  return {
    add: function (t) {
      return (
        e.push(t),
        () => {
          const n = e.indexOf(t);
          n > -1 && e.splice(n, 1);
        }
      );
    },
    list: () => e.slice(),
    reset: function () {
      e = [];
    },
  };
}
function uf(e, t, n, r, o, i = (e) => e()) {
  const s = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
  return () =>
    new Promise((a, l) => {
      const c = (e) => {
          var i;
          !1 === e
            ? l(Id(4, { from: n, to: t }))
            : e instanceof Error
            ? l(e)
            : "string" == typeof (i = e) || (i && "object" == typeof i)
            ? l(Id(2, { from: t, to: e }))
            : (s &&
                r.enterCallbacks[o] === s &&
                "function" == typeof e &&
                s.push(e),
              a());
        },
        u = i(() => e.call(r && r.instances[o], t, n, c));
      let p = Promise.resolve(u);
      e.length < 3 && (p = p.then(c)), p.catch((e) => l(e));
    });
}
function pf(e, t, n, r, o = (e) => e()) {
  const i = [];
  for (const s of e)
    for (const e in s.components) {
      let a = s.components[e];
      if ("beforeRouteEnter" === t || s.instances[e])
        if (jp(a)) {
          const l = (a.__vccOpts || a)[t];
          l && i.push(uf(l, n, r, s, e, o));
        } else {
          let l = a();
          i.push(() =>
            l.then((i) => {
              if (!i)
                throw new Error(
                  `Couldn't resolve component "${e}" at "${s.path}"`
                );
              const a =
                (l = i).__esModule ||
                "Module" === l[Symbol.toStringTag] ||
                (l.default && jp(l.default))
                  ? i.default
                  : i;
              var l;
              (s.mods[e] = i), (s.components[e] = a);
              const c = (a.__vccOpts || a)[t];
              return c && uf(c, n, r, s, e, o)();
            })
          );
        }
    }
  return i;
}
function df(e) {
  const t = no(sf),
    n = no(af),
    r = Hi(() => {
      const n = Ot(e.to);
      return t.resolve(n);
    }),
    o = Hi(() => {
      const { matched: e } = r.value,
        { length: t } = e,
        o = e[t - 1],
        i = n.matched;
      if (!o || !i.length) return -1;
      const s = i.findIndex(pd.bind(null, o));
      if (s > -1) return s;
      const a = hf(e[t - 2]);
      return t > 1 && hf(o) === a && i[i.length - 1].path !== a
        ? i.findIndex(pd.bind(null, e[t - 2]))
        : s;
    }),
    i = Hi(
      () =>
        o.value > -1 &&
        (function (e, t) {
          for (const n in t) {
            const r = t[n],
              o = e[n];
            if ("string" == typeof r) {
              if (r !== o) return !1;
            } else if (
              !Hp(o) ||
              o.length !== r.length ||
              r.some((e, t) => e !== o[t])
            )
              return !1;
          }
          return !0;
        })(n.params, r.value.params)
    ),
    s = Hi(
      () =>
        o.value > -1 &&
        o.value === n.matched.length - 1 &&
        dd(n.params, r.value.params)
    );
  return {
    route: r,
    href: Hi(() => r.value.href),
    isActive: i,
    isExactActive: s,
    navigate: function (n = {}) {
      if (
        (function (e) {
          if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return;
          if (e.defaultPrevented) return;
          if (void 0 !== e.button && 0 !== e.button) return;
          if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t)) return;
          }
          e.preventDefault && e.preventDefault();
          return !0;
        })(n)
      ) {
        const n = t[Ot(e.replace) ? "replace" : "push"](Ot(e.to)).catch(qp);
        return (
          e.viewTransition &&
            "undefined" != typeof document &&
            "startViewTransition" in document &&
            document.startViewTransition(() => n),
          n
        );
      }
      return Promise.resolve();
    },
  };
}
const ff = Un({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: { type: [String, Object], required: !0 },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: { type: String, default: "page" },
  },
  useLink: df,
  setup(e, { slots: t }) {
    const n = ft(df(e)),
      { options: r } = no(sf),
      o = Hi(() => ({
        [mf(e.activeClass, r.linkActiveClass, "router-link-active")]:
          n.isActive,
        [mf(
          e.exactActiveClass,
          r.linkExactActiveClass,
          "router-link-exact-active"
        )]: n.isExactActive,
      }));
    return () => {
      const r = t.default && (1 === (i = t.default(n)).length ? i[0] : i);
      var i;
      return e.custom
        ? r
        : zi(
            "a",
            {
              "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
              href: n.href,
              onClick: n.navigate,
              class: o.value,
            },
            r
          );
    };
  },
});
function hf(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const mf = (e, t, n) => (null != e ? e : null != t ? t : n);
function gf(e, t) {
  if (!e) return null;
  const n = e(t);
  return 1 === n.length ? n[0] : n;
}
const vf = Un({
  name: "RouterView",
  inheritAttrs: !1,
  props: { name: { type: String, default: "default" }, route: Object },
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t, slots: n }) {
    const r = no(lf),
      o = Hi(() => e.route || r.value),
      i = no(of, 0),
      s = Hi(() => {
        let e = Ot(i);
        const { matched: t } = o.value;
        let n;
        for (; (n = t[e]) && !n.components; ) e++;
        return e;
      }),
      a = Hi(() => o.value.matched[s.value]);
    to(
      of,
      Hi(() => s.value + 1)
    ),
      to(rf, a),
      to(lf, o);
    const l = Et();
    return (
      Ao(
        () => [l.value, a.value, e.name],
        ([e, t, n], [r, o, i]) => {
          t &&
            ((t.instances[n] = e),
            o &&
              o !== t &&
              e &&
              e === r &&
              (t.leaveGuards.size || (t.leaveGuards = o.leaveGuards),
              t.updateGuards.size || (t.updateGuards = o.updateGuards))),
            !e ||
              !t ||
              (o && pd(t, o) && r) ||
              (t.enterCallbacks[n] || []).forEach((t) => t(e));
        },
        { flush: "post" }
      ),
      () => {
        const r = o.value,
          i = e.name,
          s = a.value,
          c = s && s.components[i];
        if (!c) return gf(n.default, { Component: c, route: r });
        const u = s.props[i],
          p = u
            ? !0 === u
              ? r.params
              : "function" == typeof u
              ? u(r)
              : u
            : null,
          d = zi(
            c,
            $p({}, p, t, {
              onVnodeUnmounted: (e) => {
                e.component.isUnmounted && (s.instances[i] = null);
              },
              ref: l,
            })
          );
        return gf(n.default, { Component: d, route: r }) || d;
      }
    );
  },
});
function yf(e) {
  const t = Wd(e.routes, e),
    n = e.parseQuery || ef,
    r = e.stringifyQuery || tf,
    o = e.history,
    i = cf(),
    s = cf(),
    a = cf(),
    l = Tt(md);
  let c = md;
  Bp &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const u = Up.bind(null, (e) => "" + e),
    p = Up.bind(null, sd),
    d = Up.bind(null, ad);
  function f(e, i) {
    if (((i = $p({}, i || l.value)), "string" == typeof e)) {
      const r = cd(n, e, i.path),
        s = t.resolve({ path: r.path }, i),
        a = o.createHref(r.fullPath);
      return $p(r, s, {
        params: d(s.params),
        hash: ad(r.hash),
        redirectedFrom: void 0,
        href: a,
      });
    }
    let s;
    if (null != e.path) s = $p({}, e, { path: cd(n, e.path, i.path).path });
    else {
      const t = $p({}, e.params);
      for (const e in t) null == t[e] && delete t[e];
      (s = $p({}, e, { params: p(t) })), (i.params = p(i.params));
    }
    const a = t.resolve(s, i),
      c = e.hash || "";
    a.params = u(d(a.params));
    const f = (function (e, t) {
      const n = t.query ? e(t.query) : "";
      return t.path + (n && "?") + n + (t.hash || "");
    })(
      r,
      $p({}, e, {
        hash:
          ((h = c), od(h).replace(ed, "{").replace(nd, "}").replace(Qp, "^")),
        path: a.path,
      })
    );
    var h;
    const m = o.createHref(f);
    return $p(
      { fullPath: f, hash: c, query: r === tf ? nf(e.query) : e.query || {} },
      a,
      { redirectedFrom: void 0, href: m }
    );
  }
  function h(e) {
    return "string" == typeof e ? cd(n, e, l.value.path) : $p({}, e);
  }
  function m(e, t) {
    if (c !== e) return Id(8, { from: t, to: e });
  }
  function g(e) {
    return y(e);
  }
  function v(e) {
    const t = e.matched[e.matched.length - 1];
    if (t && t.redirect) {
      const { redirect: n } = t;
      let r = "function" == typeof n ? n(e) : n;
      return (
        "string" == typeof r &&
          ((r = r.includes("?") || r.includes("#") ? (r = h(r)) : { path: r }),
          (r.params = {})),
        $p(
          {
            query: e.query,
            hash: e.hash,
            params: null != r.path ? {} : e.params,
          },
          r
        )
      );
    }
  }
  function y(e, t) {
    const n = (c = f(e)),
      o = l.value,
      i = e.state,
      s = e.force,
      a = !0 === e.replace,
      u = v(n);
    if (u)
      return y(
        $p(h(u), {
          state: "object" == typeof u ? $p({}, i, u.state) : i,
          force: s,
          replace: a,
        }),
        t || n
      );
    const p = n;
    let d;
    return (
      (p.redirectedFrom = t),
      !s &&
        (function (e, t, n) {
          const r = t.matched.length - 1,
            o = n.matched.length - 1;
          return (
            r > -1 &&
            r === o &&
            pd(t.matched[r], n.matched[o]) &&
            dd(t.params, n.params) &&
            e(t.query) === e(n.query) &&
            t.hash === n.hash
          );
        })(r, o, n) &&
        ((d = Id(16, { to: p, from: o })), P(o, o, !0, !1)),
      (d ? Promise.resolve(d) : w(p, o))
        .catch((e) => (Rd(e) ? (Rd(e, 2) ? e : O(e)) : A(e, p, o)))
        .then((e) => {
          if (e) {
            if (Rd(e, 2))
              return y(
                $p({ replace: a }, h(e.to), {
                  state: "object" == typeof e.to ? $p({}, i, e.to.state) : i,
                  force: s,
                }),
                t || p
              );
          } else e = x(p, o, !0, a, i);
          return D(p, o, e), e;
        })
    );
  }
  function b(e, t) {
    const n = m(e, t);
    return n ? Promise.reject(n) : Promise.resolve();
  }
  function _(e) {
    const t = N.values().next().value;
    return t && "function" == typeof t.runWithContext
      ? t.runWithContext(e)
      : e();
  }
  function w(e, t) {
    let n;
    const [r, o, a] = (function (e, t) {
      const n = [],
        r = [],
        o = [],
        i = Math.max(t.matched.length, e.matched.length);
      for (let s = 0; s < i; s++) {
        const i = t.matched[s];
        i && (e.matched.find((e) => pd(e, i)) ? r.push(i) : n.push(i));
        const a = e.matched[s];
        a && (t.matched.find((e) => pd(e, a)) || o.push(a));
      }
      return [n, r, o];
    })(e, t);
    n = pf(r.reverse(), "beforeRouteLeave", e, t);
    for (const i of r)
      i.leaveGuards.forEach((r) => {
        n.push(uf(r, e, t));
      });
    const l = b.bind(null, e, t);
    return (
      n.push(l),
      R(n)
        .then(() => {
          n = [];
          for (const r of i.list()) n.push(uf(r, e, t));
          return n.push(l), R(n);
        })
        .then(() => {
          n = pf(o, "beforeRouteUpdate", e, t);
          for (const r of o)
            r.updateGuards.forEach((r) => {
              n.push(uf(r, e, t));
            });
          return n.push(l), R(n);
        })
        .then(() => {
          n = [];
          for (const r of a)
            if (r.beforeEnter)
              if (Hp(r.beforeEnter))
                for (const o of r.beforeEnter) n.push(uf(o, e, t));
              else n.push(uf(r.beforeEnter, e, t));
          return n.push(l), R(n);
        })
        .then(
          () => (
            e.matched.forEach((e) => (e.enterCallbacks = {})),
            (n = pf(a, "beforeRouteEnter", e, t, _)),
            n.push(l),
            R(n)
          )
        )
        .then(() => {
          n = [];
          for (const r of s.list()) n.push(uf(r, e, t));
          return n.push(l), R(n);
        })
        .catch((e) => (Rd(e, 8) ? e : Promise.reject(e)))
    );
  }
  function D(e, t, n) {
    a.list().forEach((r) => _(() => r(e, t, n)));
  }
  function x(e, t, n, r, i) {
    const s = m(e, t);
    if (s) return s;
    const a = t === md,
      c = Bp ? history.state : {};
    n &&
      (r || a
        ? o.replace(e.fullPath, $p({ scroll: a && c && c.scroll }, i))
        : o.push(e.fullPath, i)),
      (l.value = e),
      P(e, t, n, a),
      O();
  }
  let k;
  function C() {
    k ||
      (k = o.listen((e, t, n) => {
        if (!I.listening) return;
        const r = f(e),
          i = v(r);
        if (i) return void y($p(i, { replace: !0, force: !0 }), r).catch(qp);
        c = r;
        const s = l.value;
        var a, u;
        Bp && ((a = Cd(s.fullPath, n.delta)), (u = xd()), Ed.set(a, u)),
          w(r, s)
            .catch((e) =>
              Rd(e, 12)
                ? e
                : Rd(e, 2)
                ? (y($p(h(e.to), { force: !0 }), r)
                    .then((e) => {
                      Rd(e, 20) &&
                        !n.delta &&
                        n.type === gd.pop &&
                        o.go(-1, !1);
                    })
                    .catch(qp),
                  Promise.reject())
                : (n.delta && o.go(-n.delta, !1), A(e, r, s))
            )
            .then((e) => {
              (e = e || x(r, s, !1)) &&
                (n.delta && !Rd(e, 8)
                  ? o.go(-n.delta, !1)
                  : n.type === gd.pop && Rd(e, 20) && o.go(-1, !1)),
                D(r, s, e);
            })
            .catch(qp);
      }));
  }
  let E,
    T = cf(),
    S = cf();
  function A(e, t, n) {
    O(e);
    const r = S.list();
    return r.length && r.forEach((r) => r(e, t, n)), Promise.reject(e);
  }
  function O(e) {
    return (
      E ||
        ((E = !e),
        C(),
        T.list().forEach(([t, n]) => (e ? n(e) : t())),
        T.reset()),
      e
    );
  }
  function P(t, n, r, o) {
    const { scrollBehavior: i } = e;
    if (!Bp || !i) return Promise.resolve();
    const s =
      (!r &&
        (function (e) {
          const t = Ed.get(e);
          return Ed.delete(e), t;
        })(Cd(t.fullPath, 0))) ||
      ((o || !r) && history.state && history.state.scroll) ||
      null;
    return tn()
      .then(() => i(t, n, s))
      .then((e) => e && kd(e))
      .catch((e) => A(e, t, n));
  }
  const F = (e) => o.go(e);
  let L;
  const N = new Set(),
    I = {
      currentRoute: l,
      listening: !0,
      addRoute: function (e, n) {
        let r, o;
        return (
          Pd(e) ? ((r = t.getRecordMatcher(e)), (o = n)) : (o = e),
          t.addRoute(o, r)
        );
      },
      removeRoute: function (e) {
        const n = t.getRecordMatcher(e);
        n && t.removeRoute(n);
      },
      clearRoutes: t.clearRoutes,
      hasRoute: function (e) {
        return !!t.getRecordMatcher(e);
      },
      getRoutes: function () {
        return t.getRoutes().map((e) => e.record);
      },
      resolve: f,
      options: e,
      push: g,
      replace: function (e) {
        return g($p(h(e), { replace: !0 }));
      },
      go: F,
      back: () => F(-1),
      forward: () => F(1),
      beforeEach: i.add,
      beforeResolve: s.add,
      afterEach: a.add,
      onError: S.add,
      isReady: function () {
        return E && l.value !== md
          ? Promise.resolve()
          : new Promise((e, t) => {
              T.add([e, t]);
            });
      },
      install(e) {
        e.component("RouterLink", ff),
          e.component("RouterView", vf),
          (e.config.globalProperties.$router = this),
          Object.defineProperty(e.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => Ot(l),
          }),
          Bp &&
            !L &&
            l.value === md &&
            ((L = !0), g(o.location).catch((e) => {}));
        const t = {};
        for (const r in md)
          Object.defineProperty(t, r, {
            get: () => l.value[r],
            enumerable: !0,
          });
        e.provide(sf, this), e.provide(af, ht(t)), e.provide(lf, l);
        const n = e.unmount;
        N.add(e),
          (e.unmount = function () {
            N.delete(e),
              N.size < 1 &&
                ((c = md),
                k && k(),
                (k = null),
                (l.value = md),
                (L = !1),
                (E = !1)),
              n();
          });
      },
    };
  function R(e) {
    return e.reduce((e, t) => e.then(() => _(t)), Promise.resolve());
  }
  return I;
}
const bf = /(:\w+)\([^)]+\)/g,
  _f = /(:\w+)[?+*]/g,
  wf = /:\w+/g,
  Df = (e, t) => {
    const n = e.route.matched.find((t) => {
        var n;
        return (
          (null == (n = t.components) ? void 0 : n.default) === e.Component.type
        );
      }),
      r =
        t ??
        (null == n ? void 0 : n.meta.key) ??
        (n &&
          ((o = e.route),
          n.path
            .replace(bf, "$1")
            .replace(_f, "$1")
            .replace(wf, (e) => {
              var t;
              return (
                (null == (t = o.params[e.slice(1)]) ? void 0 : t.toString()) ||
                ""
              );
            })));
    var o;
    return "function" == typeof r ? r(e.route) : r;
  };
function xf(e) {
  return Array.isArray(e) ? e : [e];
}
const kf = { page: "cookie-policy", navColor: "black", mixBlend: !1 },
  Cf = { page: "impact-in-action-detail" },
  Ef = {
    page: "impact-in-action",
    color: "#000000",
    navColor: "white",
    mixBlend: !0,
  },
  Tf = { page: "home" },
  Sf = { page: "join", navMixBlend: !1, navColor: "white" },
  Af = { page: "privacy-policy", navColor: "black", mixBlend: !1 },
  Of = {
    page: "the-project",
    navMixBlend: !1,
    navColor: "black",
    color: "#FFD34F",
  },
  Pf = [
    {
      name: "cookie-policy___en",
      path: "/cookie-policy",
      meta: kf,
      component: () =>
        Ju(
          () => import("./DR3K7GU2.js"),
          __vite__mapDeps([0, 1, 2, 3, 4, 5]),
          import.meta.url
        ),
    },
    {
      name: "cookie-policy___es",
      path: "/es/politica-cookies",
      meta: kf,
      component: () =>
        Ju(
          () => import("./DR3K7GU2.js"),
          __vite__mapDeps([0, 1, 2, 3, 4, 5]),
          import.meta.url
        ),
    },
    {
      name: "impact-in-action-slug___en",
      path: "/impact-in-action/:slug()",
      meta: Cf,
      component: () =>
        Ju(
          () => import("./BIO8I5yf.js"),
          __vite__mapDeps([6, 7, 8, 1, 2, 9]),
          import.meta.url
        ),
    },
    {
      name: "impact-in-action-slug___es",
      path: "/es/impacto-en-accion/:slug()",
      meta: Cf,
      component: () =>
        Ju(
          () => import("./BIO8I5yf.js"),
          __vite__mapDeps([6, 7, 8, 1, 2, 9]),
          import.meta.url
        ),
    },
    {
      name: "impact-in-action___en",
      path: "/impact-in-action",
      meta: Ef,
      component: () =>
        Ju(
          () => import("./CuPDYMTh.js"),
          __vite__mapDeps([10, 7, 8, 1, 2, 11]),
          import.meta.url
        ),
    },
    {
      name: "impact-in-action___es",
      path: "/es/impacto-en-accion",
      meta: Ef,
      component: () =>
        Ju(
          () => import("./CuPDYMTh.js"),
          __vite__mapDeps([10, 7, 8, 1, 2, 11]),
          import.meta.url
        ),
    },
    {
      name: "index___en",
      path: "/",
      meta: Tf,
      component: () =>
        Ju(
          () => import("./BJVtpiKD.js"),
          __vite__mapDeps([12, 13, 14, 1, 2, 15, 16, 3, 4, 17, 18, 19]),
          import.meta.url
        ),
    },
    {
      name: "index___es",
      path: "/es",
      meta: Tf,
      component: () =>
        Ju(
          () => import("./BJVtpiKD.js"),
          __vite__mapDeps([12, 13, 14, 1, 2, 15, 16, 3, 4, 17, 18, 19]),
          import.meta.url
        ),
    },
    {
      name: "join___en",
      path: "/join",
      meta: Sf,
      component: () =>
        Ju(
          () => import("./DXehg9Rb.js"),
          __vite__mapDeps([20, 16, 1, 2, 3, 4, 17, 21]),
          import.meta.url
        ),
    },
    {
      name: "join___es",
      path: "/es/sumate",
      meta: Sf,
      component: () =>
        Ju(
          () => import("./DXehg9Rb.js"),
          __vite__mapDeps([20, 16, 1, 2, 3, 4, 17, 21]),
          import.meta.url
        ),
    },
    {
      name: "privacy-policy___en",
      path: "/privacy-policy",
      meta: Af,
      component: () =>
        Ju(
          () => import("./ClEIJUB5.js"),
          __vite__mapDeps([22, 1, 2, 3, 4, 23]),
          import.meta.url
        ),
    },
    {
      name: "privacy-policy___es",
      path: "/es/politica-privacidad",
      meta: Af,
      component: () =>
        Ju(
          () => import("./ClEIJUB5.js"),
          __vite__mapDeps([22, 1, 2, 3, 4, 23]),
          import.meta.url
        ),
    },
    {
      name: "the-project___en",
      path: "/the-project",
      meta: Of,
      component: () =>
        Ju(
          () => import("./Z7QGQZiE.js"),
          __vite__mapDeps([24, 1, 2, 16, 3, 4, 17, 18, 15, 25]),
          import.meta.url
        ),
    },
    {
      name: "the-project___es",
      path: "/es/el-proyecto",
      meta: Of,
      component: () =>
        Ju(
          () => import("./Z7QGQZiE.js"),
          __vite__mapDeps([24, 1, 2, 16, 3, 4, 17, 18, 15, 25]),
          import.meta.url
        ),
    },
  ],
  Ff = (e, t, n) => (
    (t = !0 === t ? {} : t),
    {
      default: () => {
        var r;
        return t ? zi(e, t, n) : null == (r = n.default) ? void 0 : r.call(n);
      },
    }
  ),
  Lf = /(:\w+)\([^)]+\)/g,
  Nf = /(:\w+)[?+*]/g,
  If = /:\w+/g;
function Rf(e) {
  const t =
    (null == e ? void 0 : e.meta.key) ??
    e.path
      .replace(Lf, "$1")
      .replace(Nf, "$1")
      .replace(If, (t) => {
        var n;
        return (
          (null == (n = e.params[t.slice(1)]) ? void 0 : n.toString()) || ""
        );
      });
  return "function" == typeof t ? t(e) : t;
}
const Mf = {
  scrollBehavior(e, t, n) {
    var r;
    const o = ql(),
      i =
        (null == (r = Rc().options) ? void 0 : r.scrollBehaviorType) ?? "auto";
    let s = n || void 0;
    const a =
      "function" == typeof e.meta.scrollToTop
        ? e.meta.scrollToTop(e, t)
        : e.meta.scrollToTop;
    if (
      (!s &&
        t &&
        e &&
        !1 !== a &&
        (function (e, t) {
          if (e === t || t === md) return !1;
          if (Rf(e) !== Rf(t)) return !0;
          const n = e.matched.every((e, n) => {
            var r, o;
            return (
              e.components &&
              e.components.default ===
                (null ==
                (o = null == (r = t.matched[n]) ? void 0 : r.components)
                  ? void 0
                  : o.default)
            );
          });
          return !n;
        })(e, t) &&
        (s = { left: 0, top: 0 }),
      e.path === t.path)
    )
      return t.hash && !e.hash
        ? { left: 0, top: 0 }
        : !!e.hash && { el: e.hash, top: Bf(e.hash), behavior: i };
    const l = (e) => !!(e.meta.pageTransition ?? Ol),
      c = l(t) && l(e) ? "page:transition:finish" : "page:finish";
    return new Promise((t) => {
      o.hooks.hookOnce(c, async () => {
        await new Promise((e) => setTimeout(e, 0)),
          e.hash && (s = { el: e.hash, top: Bf(e.hash), behavior: i }),
          t(s);
      });
    });
  },
};
function Bf(e) {
  try {
    const t = document.querySelector(e);
    if (t)
      return (
        (Number.parseFloat(getComputedStyle(t).scrollMarginTop) || 0) +
        (Number.parseFloat(
          getComputedStyle(document.documentElement).scrollPaddingTop
        ) || 0)
      );
  } catch {}
  return 0;
}
const jf = { hashMode: !1, scrollBehaviorType: "auto", ...Mf },
  $f = Bc(async (e) => {
    var t;
    let n, r;
    if (!(null == (t = e.meta) ? void 0 : t.validate)) return;
    const o = ql(),
      i = Rc(),
      s =
        (([n, r] = Al(() => Promise.resolve(e.meta.validate(e)))),
        (n = await n),
        r(),
        n);
    if (!0 === s) return;
    const a = Vc({
        statusCode: (s && s.statusCode) || 404,
        statusMessage:
          (s && s.statusMessage) || `Page Not Found: ${e.fullPath}`,
        data: { path: e.fullPath },
      }),
      l = i.beforeResolve((t) => {
        if ((l(), t === e)) {
          const t = i.afterEach(async () => {
            t(),
              await o.runWithContext(() => Hc(a)),
              null == window || window.history.pushState({}, "", e.fullPath);
          });
          return !1;
        }
      });
  }),
  Uf = () => ql().$device,
  qf = () => {
    const e = navigator.userAgent,
      t = /Safari/.test(e) && !/Chrome/.test(e),
      n = void 0 !== navigator.brave,
      r = /CriOS/.test(navigator.appVersion);
    return t && !n && !r;
  },
  Hf = Bc((e, t) => {
    {
      const { isDesktop: t } = Uf(),
        { $ScrollTrigger: n } = ql();
      e.name && e.name.includes("impact-in-action__")
        ? qf() || t || n.normalizeScroll(!1)
        : qf() || t || n.normalizeScroll(!0);
    }
  }),
  zf =
    globalThis.requestIdleCallback ||
    ((e) => {
      const t = Date.now(),
        n = {
          didTimeout: !1,
          timeRemaining: () => Math.max(0, 50 - (Date.now() - t)),
        };
      return setTimeout(() => {
        e(n);
      }, 1);
    }),
  Vf =
    globalThis.cancelIdleCallback ||
    ((e) => {
      clearTimeout(e);
    }),
  Wf = (e) => {
    const t = ql();
    t.isHydrating
      ? t.hooks.hookOnce("app:suspense:resolve", () => {
          zf(() => e());
        })
      : zf(() => e());
  };
function Yf(...e) {
  var t;
  const n = "string" == typeof e[e.length - 1] ? e.pop() : void 0;
  "string" != typeof e[0] && e.unshift(n);
  let [r, o, i = {}] = e;
  if ("string" != typeof r)
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  if ("function" != typeof o)
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  const s = ql(),
    a = o;
  (i.server = i.server ?? !0),
    (i.default = i.default ?? (() => Fl)),
    (i.getCachedData =
      i.getCachedData ??
      (() => (s.isHydrating ? s.payload.data[r] : s.static.data[r]))),
    (i.lazy = i.lazy ?? !1),
    (i.immediate = i.immediate ?? !0),
    (i.deep = i.deep ?? Nl),
    (i.dedupe = i.dedupe ?? "cancel");
  const l = i.getCachedData(r, s),
    c = null != l;
  if (!s._asyncData[r] || !i.immediate) {
    (t = s.payload._errors)[r] ?? (t[r] = Ll);
    const e = i.deep ? Et : Tt;
    s._asyncData[r] = {
      data: e(c ? l : i.default()),
      pending: Et(!c),
      error: Mt(s.payload._errors, r),
      status: Et("idle"),
      _default: i.default,
    };
  }
  const u = { ...s._asyncData[r] };
  delete u._default,
    (u.refresh = u.execute =
      (e = {}) => {
        if (s._asyncDataPromises[r]) {
          if ("defer" === (t = e.dedupe ?? i.dedupe) || !1 === t)
            return s._asyncDataPromises[r];
          s._asyncDataPromises[r].cancelled = !0;
        }
        var t;
        if (e._initial || (s.isHydrating && !1 !== e._initial)) {
          const t = e._initial ? l : i.getCachedData(r, s);
          if (null != t) return Promise.resolve(t);
        }
        (u.pending.value = !0), (u.status.value = "pending");
        const n = new Promise((e, t) => {
          try {
            e(a(s));
          } catch (n) {
            t(n);
          }
        })
          .then(async (e) => {
            if (n.cancelled) return s._asyncDataPromises[r];
            let t = e;
            i.transform && (t = await i.transform(e)),
              i.pick &&
                (t = (function (e, t) {
                  const n = {};
                  for (const r of t) n[r] = e[r];
                  return n;
                })(t, i.pick)),
              (s.payload.data[r] = t),
              (u.data.value = t),
              (u.error.value = Ll),
              (u.status.value = "success");
          })
          .catch((e) => {
            if (n.cancelled) return s._asyncDataPromises[r];
            (u.error.value = Vc(e)),
              (u.data.value = Ot(i.default())),
              (u.status.value = "error");
          })
          .finally(() => {
            n.cancelled ||
              ((u.pending.value = !1), delete s._asyncDataPromises[r]);
          });
        return (s._asyncDataPromises[r] = n), s._asyncDataPromises[r];
      }),
    (u.clear = () =>
      (function (e, t) {
        t in e.payload.data && (e.payload.data[t] = void 0);
        t in e.payload._errors && (e.payload._errors[t] = Ll);
        e._asyncData[t] &&
          ((e._asyncData[t].data.value = void 0),
          (e._asyncData[t].error.value = Ll),
          (e._asyncData[t].pending.value = !1),
          (e._asyncData[t].status.value = "idle"));
        t in e._asyncDataPromises &&
          (e._asyncDataPromises[t] && (e._asyncDataPromises[t].cancelled = !0),
          (e._asyncDataPromises[t] = void 0));
      })(s, r));
  const p = () => u.refresh({ _initial: !0 }),
    d = !1 !== i.server && s.payload.serverRendered;
  {
    const e = Ai();
    if (
      (e && d && i.immediate && !e.sp && (e.sp = []),
      e && !e._nuxtOnBeforeMountCbs)
    ) {
      e._nuxtOnBeforeMountCbs = [];
      const t = e._nuxtOnBeforeMountCbs;
      dr(() => {
        t.forEach((e) => {
          e();
        }),
          t.splice(0, t.length);
      }),
        vr(() => t.splice(0, t.length));
    }
    d && s.isHydrating && (u.error.value || null != l)
      ? ((u.pending.value = !1),
        (u.status.value = u.error.value ? "error" : "success"))
      : e &&
        ((s.payload.serverRendered && s.isHydrating) || i.lazy) &&
        i.immediate
      ? e._nuxtOnBeforeMountCbs.push(p)
      : i.immediate && p();
    const t = ie();
    if (i.watch) {
      const e = Ao(i.watch, () => u.refresh());
      t && se(e);
    }
    const n = s.hook("app:data:refresh", async (e) => {
      (e && !e.includes(r)) || (await u.refresh());
    });
    t && se(n);
  }
  const f = Promise.resolve(s._asyncDataPromises[r]).then(() => u);
  return Object.assign(f, u), f;
}
function Xf(...e) {
  const t = "string" == typeof e[e.length - 1] ? e.pop() : void 0;
  "string" != typeof e[0] && e.unshift(t);
  const [n, r] = e;
  if (!n || "string" != typeof n)
    throw new TypeError("[nuxt] [useState] key must be a string: " + n);
  if (void 0 !== r && "function" != typeof r)
    throw new Error("[nuxt] [useState] init must be a function: " + r);
  const o = "$s" + n,
    i = ql(),
    s = Mt(i.payload.state, o);
  if (void 0 === s.value && r) {
    const e = r();
    if (Ct(e)) return (i.payload.state[o] = e), e;
    s.value = e;
  }
  return s;
}
function Gf(e) {
  if ("object" != typeof e) return e;
  var t,
    n,
    r = Object.prototype.toString.call(e);
  if ("[object Object]" === r) {
    if (e.constructor !== Object && "function" == typeof e.constructor)
      for (t in ((n = new e.constructor()), e))
        e.hasOwnProperty(t) && n[t] !== e[t] && (n[t] = Gf(e[t]));
    else
      for (t in ((n = {}), e))
        "__proto__" === t
          ? Object.defineProperty(n, t, {
              value: Gf(e[t]),
              configurable: !0,
              enumerable: !0,
              writable: !0,
            })
          : (n[t] = Gf(e[t]));
    return n;
  }
  if ("[object Array]" === r) {
    for (t = e.length, n = Array(t); t--; ) n[t] = Gf(e[t]);
    return n;
  }
  return "[object Set]" === r
    ? ((n = new Set()),
      e.forEach(function (e) {
        n.add(Gf(e));
      }),
      n)
    : "[object Map]" === r
    ? ((n = new Map()),
      e.forEach(function (e, t) {
        n.set(Gf(t), Gf(e));
      }),
      n)
    : "[object Date]" === r
    ? new Date(+e)
    : "[object RegExp]" === r
    ? (((n = new RegExp(e.source, e.flags)).lastIndex = e.lastIndex), n)
    : "[object DataView]" === r
    ? new e.constructor(Gf(e.buffer))
    : "[object ArrayBuffer]" === r
    ? e.slice(0)
    : "Array]" === r.slice(-6)
    ? new e.constructor(e)
    : e;
}
const Kf = {
    path: "/",
    watch: !0,
    decode: (e) => fa(decodeURIComponent(e)),
    encode: (e) =>
      encodeURIComponent("string" == typeof e ? e : JSON.stringify(e)),
  },
  Jf = window.cookieStore;
function Qf(e, t) {
  var n;
  const r = { ...Kf, ...t };
  r.filter ?? (r.filter = (t) => t === e);
  const o = Zf(r) || {};
  let i;
  void 0 !== r.maxAge
    ? (i = 1e3 * r.maxAge)
    : r.expires && (i = r.expires.getTime() - Date.now());
  const s = void 0 !== i && i <= 0,
    a = Gf(s ? void 0 : o[e] ?? (null == (n = r.default) ? void 0 : n.call(r))),
    l =
      i && !s
        ? (function (e, t, n) {
            let r,
              o,
              i = 0;
            const s = n ? Et(e) : { value: e };
            ie() &&
              se(() => {
                null == o || o(), clearTimeout(r);
              });
            return Nt((e, a) => {
              function l() {
                (i = 0), clearTimeout(r);
                const e = t - i,
                  n = e < eh ? e : eh;
                r = setTimeout(() => {
                  if (((i += n), i < t)) return l();
                  (s.value = void 0), a();
                }, n);
              }
              return (
                n && (o = Ao(s, a)),
                {
                  get: () => (e(), s.value),
                  set(e) {
                    l(), (s.value = e), a();
                  },
                }
              );
            });
          })(a, i, r.watch && "shallow" !== r.watch)
        : Et(a);
  {
    let t = null;
    try {
      Jf ||
        "undefined" == typeof BroadcastChannel ||
        (t = new BroadcastChannel(`nuxt:cookies:${e}`));
    } catch {}
    const n = () => {
        r.readonly ||
          (function (e, t, n = {}) {
            return e === t || Kl(e, n) === Kl(t, n);
          })(l.value, o[e]) ||
          (!(function (e, t, n = {}) {
            document.cookie = (function (e, t, n = {}) {
              if (null == t) return Xl(e, t, { ...n, maxAge: -1 });
              return Xl(e, t, n);
            })(e, t, n);
          })(e, l.value, r),
          (o[e] = Gf(l.value)),
          null == t || t.postMessage({ value: r.encode(l.value) }));
      },
      i = (t) => {
        var n;
        const i = t.refresh
          ? null == (n = Zf(r))
            ? void 0
            : n[e]
          : r.decode(t.value);
        (s = !0),
          (l.value = i),
          (o[e] = Gf(i)),
          tn(() => {
            s = !1;
          });
      };
    let s = !1;
    const a = !!ie();
    if (
      (a &&
        se(() => {
          (s = !0), n(), null == t || t.close();
        }),
      Jf)
    ) {
      const t = (t) => {
        const n = t.changed.find((t) => t.name === e),
          r = t.deleted.find((t) => t.name === e);
        n && i({ value: n.value }), r && i({ value: null });
      };
      Jf.addEventListener("change", t),
        a && se(() => Jf.removeEventListener("change", t));
    } else t && (t.onmessage = ({ data: e }) => i(e));
    r.watch
      ? Ao(
          l,
          () => {
            s || n();
          },
          { deep: "shallow" !== r.watch }
        )
      : n();
  }
  return l;
}
function Zf(e = {}) {
  return (function (e, t) {
    if ("string" != typeof e)
      throw new TypeError("argument str must be a string");
    const n = {},
      r = t || {},
      o = r.decode || Vl;
    let i = 0;
    for (; i < e.length; ) {
      const t = e.indexOf("=", i);
      if (-1 === t) break;
      let s = e.indexOf(";", i);
      if (-1 === s) s = e.length;
      else if (s < t) {
        i = e.lastIndexOf(";", t - 1) + 1;
        continue;
      }
      const a = e.slice(i, t).trim();
      if (
        !(null == r ? void 0 : r.filter) ||
        (null == r ? void 0 : r.filter(a))
      ) {
        if (void 0 === n[a]) {
          let r = e.slice(t + 1, s).trim();
          34 === r.codePointAt(0) && (r = r.slice(1, -1)), (n[a] = Wl(r, o));
        }
        i = s + 1;
      } else i = s + 1;
    }
    return n;
  })(document.cookie, e);
}
const eh = 2147483647;
async function th(e, t = Rc()) {
  const { path: n, matched: r } = t.resolve(e);
  if (!r.length) return;
  if (
    (t._routePreloaded || (t._routePreloaded = new Set()),
    t._routePreloaded.has(n))
  )
    return;
  const o = (t._preloadPromises = t._preloadPromises || []);
  if (o.length > 4) return Promise.all(o).then(() => th(e, t));
  t._routePreloaded.add(n);
  const i = r
    .map((e) => {
      var t;
      return null == (t = e.components) ? void 0 : t.default;
    })
    .filter((e) => "function" == typeof e);
  for (const s of i) {
    const e = Promise.resolve(s())
      .catch(() => {})
      .finally(() => o.splice(o.indexOf(e)));
    o.push(e);
  }
  await Promise.all(o);
}
function nh(e) {
  function t(e) {
    return "string" == typeof e && e.startsWith("#");
  }
  function n(t, n) {
    if (!t || ("append" !== e.trailingSlash && "remove" !== e.trailingSlash))
      return t;
    if ("string" == typeof t) return oh(t, e.trailingSlash);
    const r = "path" in t && void 0 !== t.path ? t.path : n(t).path;
    return { ...t, name: void 0, path: oh(r, e.trailingSlash) };
  }
  function r(e) {
    const r = Rc(),
      o = Hl(),
      i = Hi(() => !!e.target && "_self" !== e.target),
      s = Hi(() => {
        const t = e.to || e.href || "";
        return "string" == typeof t && $a(t, { acceptRelative: !0 });
      }),
      a = xr("RouterLink"),
      l = "string" != typeof a ? a.useLink : void 0,
      c = Hi(() => {
        if (e.external) return !0;
        const t = e.to || e.href || "";
        return "object" != typeof t && ("" === t || s.value);
      }),
      u = Hi(() => {
        const t = e.to || e.href || "";
        return c.value ? t : n(t, r.resolve);
      }),
      p = c.value || null == l ? void 0 : l({ ...e, to: u }),
      d = Hi(() => {
        var e;
        if (!u.value || s.value || t(u.value)) return u.value;
        if (c.value) {
          const e =
            "object" == typeof u.value && "path" in u.value
              ? $c(u.value)
              : u.value;
          return n("object" == typeof e ? r.resolve(e).href : e, r.resolve);
        }
        return "object" == typeof u.value
          ? (null == (e = r.resolve(u.value)) ? void 0 : e.href) ?? null
          : n(Xa(o.app.baseURL, u.value), r.resolve);
      });
    return {
      to: u,
      hasTarget: i,
      isAbsoluteUrl: s,
      isExternal: c,
      href: d,
      isActive:
        (null == p ? void 0 : p.isActive) ??
        Hi(() => u.value === r.currentRoute.value.path),
      isExactActive:
        (null == p ? void 0 : p.isExactActive) ??
        Hi(() => u.value === r.currentRoute.value.path),
      route: (null == p ? void 0 : p.route) ?? Hi(() => r.resolve(u.value)),
      async navigate() {
        await jc(d.value, { replace: e.replace, external: c.value || i.value });
      },
    };
  }
  return Un({
    name: e.componentName || "NuxtLink",
    props: {
      to: { type: [String, Object], default: void 0, required: !1 },
      href: { type: [String, Object], default: void 0, required: !1 },
      target: { type: String, default: void 0, required: !1 },
      rel: { type: String, default: void 0, required: !1 },
      noRel: { type: Boolean, default: void 0, required: !1 },
      prefetch: { type: Boolean, default: void 0, required: !1 },
      prefetchOn: { type: [String, Object], default: void 0, required: !1 },
      noPrefetch: { type: Boolean, default: void 0, required: !1 },
      activeClass: { type: String, default: void 0, required: !1 },
      exactActiveClass: { type: String, default: void 0, required: !1 },
      prefetchedClass: { type: String, default: void 0, required: !1 },
      replace: { type: Boolean, default: void 0, required: !1 },
      ariaCurrentValue: { type: String, default: void 0, required: !1 },
      external: { type: Boolean, default: void 0, required: !1 },
      custom: { type: Boolean, default: void 0, required: !1 },
    },
    useLink: r,
    setup(n, { slots: o }) {
      const i = Rc(),
        {
          to: s,
          href: a,
          navigate: l,
          isExternal: c,
          hasTarget: u,
          isAbsoluteUrl: p,
        } = r(n),
        d = Et(!1),
        f = Et(null),
        h = (e) => {
          var t;
          f.value = n.custom
            ? null == (t = null == e ? void 0 : e.$el)
              ? void 0
              : t.nextElementSibling
            : null == e
            ? void 0
            : e.$el;
        };
      function m(t) {
        var r, o;
        return (
          !d.value &&
          ("string" == typeof n.prefetchOn
            ? n.prefetchOn === t
            : (null == (r = n.prefetchOn) ? void 0 : r[t]) ??
              (null == (o = e.prefetchOn) ? void 0 : o[t])) &&
          !1 !== (n.prefetch ?? e.prefetch) &&
          !0 !== n.noPrefetch &&
          "_blank" !== n.target &&
          !(function () {
            const e = navigator.connection;
            if (e && (e.saveData || ih.test(e.effectiveType))) return !0;
            return !1;
          })()
        );
      }
      async function g(e = ql()) {
        if (d.value) return;
        d.value = !0;
        const t =
            "string" == typeof s.value
              ? s.value
              : c.value
              ? $c(s.value)
              : i.resolve(s.value).fullPath,
          n = c.value ? new URL(t, window.location.href).href : t;
        await Promise.all([
          e.hooks.callHook("link:prefetch", n).catch(() => {}),
          !c.value && !u.value && th(s.value, i).catch(() => {}),
        ]);
      }
      if (m("visibility")) {
        const e = ql();
        let t,
          n = null;
        fr(() => {
          const r = (function () {
            const e = ql();
            if (e._observer) return e._observer;
            let t = null;
            const n = new Map(),
              r = (e, r) => (
                t ||
                  (t = new IntersectionObserver((e) => {
                    for (const t of e) {
                      const e = n.get(t.target);
                      (t.isIntersecting || t.intersectionRatio > 0) && e && e();
                    }
                  })),
                n.set(e, r),
                t.observe(e),
                () => {
                  n.delete(e),
                    null == t || t.unobserve(e),
                    0 === n.size && (null == t || t.disconnect(), (t = null));
                }
              ),
              o = (e._observer = { observe: r });
            return o;
          })();
          Wf(() => {
            t = zf(() => {
              var t;
              (null == (t = null == f ? void 0 : f.value)
                ? void 0
                : t.tagName) &&
                (n = r.observe(f.value, async () => {
                  null == n || n(), (n = null), await g(e);
                }));
            });
          });
        }),
          gr(() => {
            t && Vf(t), null == n || n(), (n = null);
          });
      }
      return () => {
        var r;
        if (!c.value && !u.value && !t(s.value)) {
          const t = {
            ref: h,
            to: s.value,
            activeClass: n.activeClass || e.activeClass,
            exactActiveClass: n.exactActiveClass || e.exactActiveClass,
            replace: n.replace,
            ariaCurrentValue: n.ariaCurrentValue,
            custom: n.custom,
          };
          return (
            n.custom ||
              (m("interaction") &&
                ((t.onPointerenter = g.bind(null, void 0)),
                (t.onFocus = g.bind(null, void 0))),
              d.value && (t.class = n.prefetchedClass || e.prefetchedClass),
              (t.rel = n.rel || void 0)),
            zi(xr("RouterLink"), t, o.default)
          );
        }
        const i = n.target || null,
          v =
            ((...e) => e.find((e) => void 0 !== e))(
              n.noRel ? "" : n.rel,
              e.externalRelAttribute,
              p.value || u.value ? "noopener noreferrer" : ""
            ) || null;
        return n.custom
          ? o.default
            ? o.default({
                href: a.value,
                navigate: l,
                prefetch: g,
                get route() {
                  if (!a.value) return;
                  const e = new URL(a.value, window.location.href);
                  return {
                    path: e.pathname,
                    fullPath: e.pathname,
                    get query() {
                      return Fa(e.search);
                    },
                    hash: e.hash,
                    params: {},
                    name: void 0,
                    matched: [],
                    redirectedFrom: void 0,
                    meta: {},
                    href: a.value,
                  };
                },
                rel: v,
                target: i,
                isExternal: c.value || u.value,
                isActive: !1,
                isExactActive: !1,
              })
            : null
          : zi(
              "a",
              { ref: f, href: a.value || null, rel: v, target: i },
              null == (r = o.default) ? void 0 : r.call(o)
            );
      };
    },
  });
}
const rh = nh(Pl);
function oh(e, t) {
  const n = "append" === t ? Ha : qa;
  return $a(e) && !e.startsWith("http") ? e : n(e, !0);
}
const ih = /2g/;
let sh;
const ah = (e) => (sh = e),
  lh = Symbol();
function ch(e) {
  return (
    e &&
    "object" == typeof e &&
    "[object Object]" === Object.prototype.toString.call(e) &&
    "function" != typeof e.toJSON
  );
}
var uh, ph;
((ph = uh || (uh = {})).direct = "direct"),
  (ph.patchObject = "patch object"),
  (ph.patchFunction = "patch function");
const dh = () => {};
function fh(e, t, n, r = dh) {
  e.push(t);
  const o = () => {
    const n = e.indexOf(t);
    n > -1 && (e.splice(n, 1), r());
  };
  return !n && ie() && se(o), o;
}
function hh(e, ...t) {
  e.slice().forEach((e) => {
    e(...t);
  });
}
const mh = (e) => e(),
  gh = Symbol(),
  vh = Symbol();
function yh(e, t) {
  e instanceof Map && t instanceof Map
    ? t.forEach((t, n) => e.set(n, t))
    : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const r = t[n],
      o = e[n];
    ch(o) && ch(r) && e.hasOwnProperty(n) && !Ct(r) && !vt(r)
      ? (e[n] = yh(o, r))
      : (e[n] = r);
  }
  return e;
}
const bh = Symbol();
const { assign: _h } = Object;
function wh(e, t, n, r) {
  const { state: o, actions: i, getters: s } = t,
    a = n.state.value[e];
  let l;
  return (
    (l = Dh(
      e,
      function () {
        a || (n.state.value[e] = o ? o() : {});
        const t = (function (e) {
          const t = f(e) ? new Array(e.length) : {};
          for (const n in e) t[n] = Bt(e, n);
          return t;
        })(n.state.value[e]);
        return _h(
          t,
          i,
          Object.keys(s || {}).reduce(
            (t, r) => (
              (t[r] = Dt(
                Hi(() => {
                  ah(n);
                  const t = n._s.get(e);
                  return s[r].call(t, t);
                })
              )),
              t
            ),
            {}
          )
        );
      },
      t,
      n,
      r,
      !0
    )),
    l
  );
}
function Dh(e, t, n = {}, r, o, i) {
  let s;
  const a = _h({ actions: {} }, n),
    l = { deep: !0 };
  let c,
    u,
    p,
    d = [],
    f = [];
  const h = r.state.value[e];
  let m;
  function g(t) {
    let n;
    (c = u = !1),
      "function" == typeof t
        ? (t(r.state.value[e]),
          (n = { type: uh.patchFunction, storeId: e, events: p }))
        : (yh(r.state.value[e], t),
          (n = { type: uh.patchObject, payload: t, storeId: e, events: p }));
    const o = (m = Symbol());
    tn().then(() => {
      m === o && (c = !0);
    }),
      (u = !0),
      hh(d, n, r.state.value[e]);
  }
  i || h || (r.state.value[e] = {}), Et({});
  const v = i
    ? function () {
        const { state: e } = n,
          t = e ? e() : {};
        this.$patch((e) => {
          _h(e, t);
        });
      }
    : dh;
  const y = (t, n = "") => {
      if (gh in t) return (t[vh] = n), t;
      const o = function () {
        ah(r);
        const n = Array.from(arguments),
          i = [],
          s = [];
        let a;
        hh(f, {
          args: n,
          name: o[vh],
          store: b,
          after: function (e) {
            i.push(e);
          },
          onError: function (e) {
            s.push(e);
          },
        });
        try {
          a = t.apply(this && this.$id === e ? this : b, n);
        } catch (l) {
          throw (hh(s, l), l);
        }
        return a instanceof Promise
          ? a
              .then((e) => (hh(i, e), e))
              .catch((e) => (hh(s, e), Promise.reject(e)))
          : (hh(i, a), a);
      };
      return (o[gh] = !0), (o[vh] = n), o;
    },
    b = ft({
      _p: r,
      $id: e,
      $onAction: fh.bind(null, f),
      $patch: g,
      $reset: v,
      $subscribe(t, n = {}) {
        const o = fh(d, t, n.detached, () => i()),
          i = s.run(() =>
            Ao(
              () => r.state.value[e],
              (r) => {
                ("sync" === n.flush ? u : c) &&
                  t({ storeId: e, type: uh.direct, events: p }, r);
              },
              _h({}, l, n)
            )
          );
        return o;
      },
      $dispose: function () {
        s.stop(), (d = []), (f = []), r._s.delete(e);
      },
    });
  r._s.set(e, b);
  const _ = ((r._a && r._a.runWithContext) || mh)(() =>
    r._e.run(() => (s = oe()).run(() => t({ action: y })))
  );
  for (const x in _) {
    const t = _[x];
    if ((Ct(t) && (!Ct((D = t)) || !D.effect)) || vt(t))
      i ||
        (!h ||
          (ch((w = t)) && w.hasOwnProperty(bh)) ||
          (Ct(t) ? (t.value = h[x]) : yh(t, h[x])),
        (r.state.value[e][x] = t));
    else if ("function" == typeof t) {
      const e = y(t, x);
      (_[x] = e), (a.actions[x] = t);
    }
  }
  var w, D;
  return (
    _h(b, _),
    _h(wt(b), _),
    Object.defineProperty(b, "$state", {
      get: () => r.state.value[e],
      set: (e) => {
        g((t) => {
          _h(t, e);
        });
      },
    }),
    r._p.forEach((e) => {
      _h(
        b,
        s.run(() => e({ store: b, app: r._a, pinia: r, options: a }))
      );
    }),
    h && i && n.hydrate && n.hydrate(b.$state, h),
    (c = !0),
    (u = !0),
    b
  );
}
function xh(e, t, n) {
  let r, o;
  const i = "function" == typeof t;
  function s(e, n) {
    const s = ro();
    (e = e || (s ? no(lh, null) : null)) && ah(e),
      (e = sh)._s.has(r) || (i ? Dh(r, t, o, e) : wh(r, o, e));
    return e._s.get(r);
  }
  return (
    "string" == typeof e ? ((r = e), (o = i ? n : t)) : ((o = e), (r = e.id)),
    (s.$id = r),
    s
  );
}
function kh(e) {
  {
    const t = wt(e),
      n = {};
    for (const r in t) {
      const o = t[r];
      o.effect
        ? (n[r] = Hi({
            get: () => e[r],
            set(t) {
              e[r] = t;
            },
          }))
        : (Ct(o) || vt(o)) && (n[r] = Mt(e, r));
    }
    return n;
  }
}
const Ch = xh({ id: "nav", state: () => ({ color: "white", mixBlend: !1 }) }),
  Eh = [
    $f,
    Hf,
    Bc((e, t) => {
      const { $gsap: n } = ql();
      (t.meta.pageTransition = {
        name: "overlay",
        onLeave: (r, o) => {
          const i = t.meta.page,
            s = e.meta.page;
          if (
            ("impact-in-action" === s && "impact-in-action-detail" !== i) ||
            "the-project" === s
          ) {
            const t = e.meta.color,
              r = n.utils
                .toArray(document.querySelectorAll(".app-overlay > div"))
                .reverse();
            n.timeline({
              onComplete: () => {
                window.scrollTo(0, 0), o();
              },
            })
              .set(r, { transformOrigin: "right center", backgroundColor: t })
              .fromTo(
                r,
                { scaleX: 0 },
                { scaleX: 1, duration: 0.4, stagger: 0.07, ease: "power2.out" }
              );
          } else
            n.to(r, {
              opacity: 0,
              duration: 0.6,
              ease: "power2.inOut",
              onComplete: () => {
                o();
              },
            });
        },
      }),
        (e.meta.pageTransition = {
          name: "overlay",
          mode: "out-in",
          css: !1,
          onBeforeEnter: () => {
            const t = Ch(),
              { color: n, mixBlend: r } = kh(t);
            e.meta.navColor ? (n.value = e.meta.navColor) : (n.value = "white"),
              e.meta.mixBlend ? (r.value = e.meta.navMixBlend) : (r.value = !1);
          },
          onEnter: (r, o) => {
            window.scrollTo(0, 0);
            const i = e.meta.page,
              s = t.meta.page,
              a = n.utils
                .toArray(document.querySelectorAll(".app-overlay > div"))
                .reverse();
            if (
              ("impact-in-action" === i && "impact-in-action-detail" !== s) ||
              "the-project" === i
            ) {
              const e = ql().$ScrollTrigger;
              n.timeline({
                onComplete: () => {
                  e.sort(), e.refresh(), o();
                },
              })
                .set(a, { transformOrigin: "left center" })
                .fromTo(
                  a,
                  { scaleX: 1 },
                  {
                    scaleX: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out",
                  },
                  "+=0.3"
                );
            } else if (
              "impact-in-action-detail" === s &&
              "impact-in-action" === i
            ) {
              const e = document.querySelector(".projects__hide-list-button");
              n.timeline({
                onComplete: () => {
                  o();
                },
              })
                .addLabel("initial")
                .fromTo(
                  [".projects-list", e],
                  {
                    x: `${
                      window.innerWidth + (null == e ? void 0 : e.offsetWidth)
                    }px`,
                  },
                  { x: 0, duration: 0.6, ease: "power2.inOut" },
                  "initial"
                )
                .fromTo(
                  ".projects-map, .vertical-lines",
                  { opacity: 0 },
                  { opacity: 1, duration: 0.6, ease: "power2.out" },
                  "initial+0.3"
                );
            } else
              n.fromTo(
                r,
                { opacity: 0 },
                {
                  opacity: 1,
                  duration: 0.6,
                  ease: "power2.out",
                  onComplete: () => {
                    o();
                  },
                }
              );
          },
        });
    }),
    Bc(async (e) => {
      let t, n;
      const r =
        (([t, n] = Al(() => tp({ path: e.path }))), (t = await t), n(), t);
      if (r.redirect)
        return $a(r.redirect, { acceptRelative: !0 })
          ? ((window.location.href = r.redirect), !1)
          : r.redirect;
    }),
  ],
  Th = {};
const Sh = $l({
    name: "nuxt:router",
    enforce: "pre",
    async setup(e) {
      var t;
      let n,
        r,
        o = Hl().app.baseURL;
      const i = (null == (t = jf.history) ? void 0 : t.call(jf, o)) ?? Od(o),
        s = jf.routes
          ? (([n, r] = Al(() => jf.routes(Pf))), (n = await n), r(), n ?? Pf)
          : Pf;
      let a;
      const l = yf({
        ...jf,
        scrollBehavior: (e, t, n) => {
          if (t !== md) {
            if (jf.scrollBehavior) {
              if (
                ((l.options.scrollBehavior = jf.scrollBehavior),
                "scrollRestoration" in window.history)
              ) {
                const e = l.beforeEach(() => {
                  e(), (window.history.scrollRestoration = "manual");
                });
              }
              return jf.scrollBehavior(e, md, a || n);
            }
          } else a = n;
        },
        history: i,
        routes: s,
      });
      "scrollRestoration" in window.history &&
        (window.history.scrollRestoration = "auto"),
        e.vueApp.use(l);
      const c = Tt(l.currentRoute.value);
      l.afterEach((e, t) => {
        c.value = t;
      }),
        Object.defineProperty(
          e.vueApp.config.globalProperties,
          "previousRoute",
          { get: () => c.value }
        );
      const u = (function (e, t, n) {
          const { pathname: r, search: o, hash: i } = t,
            s = e.indexOf("#");
          if (s > -1) {
            const t = i.includes(e.slice(s)) ? e.slice(s).length : 1;
            let n = i.slice(t);
            return "/" !== n[0] && (n = "/" + n), Va(n, "");
          }
          const a = Va(r, e),
            l = !n || Ka(a, n, { trailingSlash: !0 }) ? a : n;
          return l + (l.includes("?") ? "" : o) + i;
        })(o, window.location, e.payload.path),
        p = Tt(l.currentRoute.value),
        d = () => {
          p.value = l.currentRoute.value;
        };
      e.hook("page:finish", d),
        l.afterEach((e, t) => {
          var n, r, o, i;
          (null == (r = null == (n = e.matched[0]) ? void 0 : n.components)
            ? void 0
            : r.default) ===
            (null == (i = null == (o = t.matched[0]) ? void 0 : o.components)
              ? void 0
              : i.default) && d();
        });
      const f = {};
      for (const y in p.value)
        Object.defineProperty(f, y, { get: () => p.value[y], enumerable: !0 });
      (e._route = ht(f)),
        (e._middleware = e._middleware || { global: [], named: {} });
      const h = qc();
      l.afterEach(async (t, n, r) => {
        delete e._processingMiddleware,
          !e.isHydrating && h.value && (await e.runWithContext(zc)),
          r && (await e.callHook("page:loading:end"));
      });
      try {
        0, ([n, r] = Al(() => l.isReady())), await n, r();
      } catch (v) {
        ([n, r] = Al(() => e.runWithContext(() => Hc(v)))), await n, r();
      }
      const m =
        u !== l.currentRoute.value.fullPath
          ? l.resolve(u)
          : l.currentRoute.value;
      d();
      const g = e.payload.state._layout;
      return (
        l.beforeEach(async (t, n) => {
          var r;
          await e.callHook("page:loading:start"),
            (t.meta = ft(t.meta)),
            e.isHydrating && g && !yt(t.meta.layout) && (t.meta.layout = g),
            (e._processingMiddleware = !0);
          {
            const o = new Set([...Eh, ...e._middleware.global]);
            for (const e of t.matched) {
              const t = e.meta.middleware;
              if (t) for (const e of xf(t)) o.add(e);
            }
            {
              const n = await e.runWithContext(() => tp({ path: t.path }));
              if (n.appMiddleware)
                for (const e in n.appMiddleware)
                  n.appMiddleware[e] ? o.add(e) : o.delete(e);
            }
            for (const i of o) {
              const o =
                "string" == typeof i
                  ? e._middleware.named[i] ||
                    (await (null == (r = Th[i])
                      ? void 0
                      : r.call(Th).then((e) => e.default || e)))
                  : i;
              if (!o) throw new Error(`Unknown route middleware: '${i}'.`);
              const s = await e.runWithContext(() => o(t, n));
              if (
                !e.payload.serverRendered &&
                e.isHydrating &&
                (!1 === s || s instanceof Error)
              ) {
                const t =
                  s ||
                  Oc({
                    statusCode: 404,
                    statusMessage: `Page Not Found: ${u}`,
                  });
                return await e.runWithContext(() => Hc(t)), !1;
              }
              if (!0 !== s && (s || !1 === s)) return s;
            }
          }
        }),
        l.onError(async () => {
          delete e._processingMiddleware, await e.callHook("page:loading:end");
        }),
        l.afterEach(async (t, n) => {
          0 === t.matched.length &&
            (await e.runWithContext(() =>
              Hc(
                Oc({
                  statusCode: 404,
                  fatal: !1,
                  statusMessage: `Page not found: ${t.fullPath}`,
                  data: { path: t.fullPath },
                })
              )
            ));
        }),
        e.hooks.hookOnce("app:created", async () => {
          try {
            "name" in m && (m.name = void 0),
              await l.replace({ ...m, force: !0 }),
              (l.options.scrollBehavior = jf.scrollBehavior);
          } catch (v) {
            await e.runWithContext(() => Hc(v));
          }
        }),
        { provide: { router: l } }
      );
    },
  }),
  Ah = $l({
    name: "nuxt:payload",
    setup(e) {
      Rc().beforeResolve(async (t, n) => {
        if (t.path === n.path) return;
        const r = await np(t.path);
        r && Object.assign(e.static.data, r.data);
      }),
        Wf(() => {
          var t;
          e.hooks.hook("link:prefetch", async (e) => {
            const { hostname: t } = new URL(e, window.location.href);
            t === window.location.hostname && (await np(e));
          }),
            "slow-2g" !==
              (null == (t = navigator.connection) ? void 0 : t.effectiveType) &&
              setTimeout(ep, 1e3);
        });
    },
  }),
  Oh = $l(() => {
    const e = Rc();
    Wf(() => {
      e.beforeResolve(async () => {
        await new Promise((e) => {
          setTimeout(e, 100),
            requestAnimationFrame(() => {
              setTimeout(e, 0);
            });
        });
      });
    });
  }),
  Ph = $l((e) => {
    let t;
    async function n() {
      const r = await ep();
      t && clearTimeout(t), (t = setTimeout(n, Rl));
      try {
        const t = await $fetch(hl("builds/latest.json") + `?${Date.now()}`);
        t.id !== r.id && e.hooks.callHook("app:manifest:update", t);
      } catch {}
    }
    Wf(() => {
      t = setTimeout(n, Rl);
    });
  }),
  Fh = $l({
    name: "nuxt:chunk-reload",
    setup(e) {
      const t = Rc(),
        n = Hl(),
        r = new Set();
      function o(e) {
        !(function (e = {}) {
          const t = e.path || window.location.pathname;
          let n = {};
          try {
            n = fa(sessionStorage.getItem("nuxt:reload") || "{}");
          } catch {}
          if (
            e.force ||
            (null == n ? void 0 : n.path) !== t ||
            (null == n ? void 0 : n.expires) < Date.now()
          ) {
            try {
              sessionStorage.setItem(
                "nuxt:reload",
                JSON.stringify({
                  path: t,
                  expires: Date.now() + (e.ttl ?? 1e4),
                })
              );
            } catch {}
            if (e.persistState)
              try {
                sessionStorage.setItem(
                  "nuxt:reload:state",
                  JSON.stringify({ state: ql().payload.state })
                );
              } catch {}
            window.location.pathname !== t
              ? (window.location.href = t)
              : window.location.reload();
          }
        })({
          path:
            "href" in e && "#" === e.href[0]
              ? n.app.baseURL + e.href
              : Xa(n.app.baseURL, e.fullPath),
          persistState: !0,
        });
      }
      t.beforeEach(() => {
        r.clear();
      }),
        e.hook("app:chunkError", ({ error: e }) => {
          r.add(e);
        }),
        e.hook("app:manifest:update", () => {
          t.beforeResolve(o);
        }),
        t.onError((e, t) => {
          r.has(e) && o(t);
        });
    },
  });
const Lh = ["onNuxtReady", "client"],
  Nh = ["preconnect", "dns-prefetch"];
function Ih(e, t) {
  var n, r, o;
  (e = "string" == typeof e ? { src: e } : e),
    (t = Cc(
      t,
      null == (n = Hl().public["nuxt-scripts"])
        ? void 0
        : n.defaultScriptOptions
    ));
  const i = String(Sp(e)),
    s = ql(),
    a = t.head || Fp();
  s.$scripts = s.$scripts || ft({});
  const l = !!(null == (r = s.$scripts) ? void 0 : r[i]);
  !t.warmupStrategy &&
    Lh.includes(String(t.trigger)) &&
    (t.warmupStrategy = "preload"),
    "onNuxtReady" === t.trigger && (t.trigger = Wf),
    l ||
      null == (o = null == performance ? void 0 : performance.mark) ||
      o.call(performance, "mark_feature_usage", {
        detail: { feature: t.performanceMarkFeature ?? `nuxt-scripts:${i}` },
      });
  const c = Np(e, t);
  (c.warmup = (t) => {
    c._warmupEl ||
      (c._warmupEl = (function (e, t, n) {
        const { src: r } = e,
          o = Qa(r),
          i = t && Nh.includes(t),
          s = i ? `${o.protocol}${o.host}` : r,
          a = !!o.host;
        if (!t || (i && !a)) return;
        const l = {
            href: s,
            rel: t,
            ...$h(e, [
              "crossorigin",
              "referrerpolicy",
              "fetchpriority",
              "integrity",
            ]),
          },
          c = { fetchpriority: "low" };
        return (
          "preload" === t && (c.as = "script"),
          a &&
            ((c.crossorigin = "anonymous"), (c.referrerpolicy = "no-referrer")),
          Lp({ link: [Cc(l, c)] }, { head: n, tagPriority: "high" })
        );
      })(e, t, a));
  }),
    t.warmupStrategy && c.warmup(t.warmupStrategy);
  const u = c.remove;
  return (
    (c.remove = () => {
      var e;
      return (
        null == (e = c._warmupEl) || e.dispose(), (s.$scripts[i] = void 0), u()
      );
    }),
    (s.$scripts[i] = c),
    c
  );
}
const Rh = Object.assign(() => {}, { __unenv__: !0 }),
  Mh = Rh,
  Bh = Rh;
function jh(e, t, n) {
  const r = ((o = e), (Hl().public.scripts || {})[o]);
  var o;
  const i = Object.assign(n, "object" == typeof r ? r : {}),
    s = t(i),
    a = Cc(i.scriptInput, s.scriptInput, { key: e }),
    l = Object.assign(
      (null == i ? void 0 : i.scriptOptions) || {},
      s.scriptOptions || {}
    ),
    c = l.beforeInit;
  return (
    (l.beforeInit = () => {
      var e;
      null == c || c(), null == (e = s.clientInit) || e.call(s);
    }),
    Ih(a, l)
  );
}
function $h(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function Uh(e) {
  return jh(
    (null == e ? void 0 : e.key) || "googleAnalytics",
    (e) => ({
      scriptInput: {
        src: Wa("https://www.googletagmanager.com/gtag/js", {
          id: null == e ? void 0 : e.id,
          l: null == e ? void 0 : e.l,
        }),
      },
      schema: void 0,
      scriptOptions: {
        use: () =>
          (function (e) {
            return {
              dataLayer: window[e.l ?? "dataLayer"],
              gtag: function (...t) {
                window["gtag-" + (e.l ?? "dataLayer")](...t);
              },
            };
          })(e),
        stub: void 0,
        performanceMarkFeature: "nuxt-third-parties-ga",
        tagPriority: 1,
      },
      clientInit: () => {
        (window[(null == e ? void 0 : e.l) ?? "dataLayer"] =
          window[(null == e ? void 0 : e.l) ?? "dataLayer"] || []),
          (window["gtag-" + ((null == e ? void 0 : e.l) ?? "dataLayer")] =
            function () {
              window[(null == e ? void 0 : e.l) ?? "dataLayer"].push(arguments);
            }),
          window["gtag-" + ((null == e ? void 0 : e.l) ?? "dataLayer")](
            "js",
            new Date()
          ),
          window["gtag-" + ((null == e ? void 0 : e.l) ?? "dataLayer")](
            "config",
            null == e ? void 0 : e.id
          );
      },
    }),
    e
  );
}
Rh({ id: Mh(), l: Bh(Mh()) });
const qh = $l({
    name: "scripts:init",
    env: { islands: !1 },
    parallel: !0,
    setup: () => ({
      provide: { $scripts: { googleAnalytics: Uh({ id: "G-4SFV89G8M4" }) } },
    }),
  }),
  Hh = $l({
    name: "pinia",
    setup(e) {
      const t = (function () {
        const e = oe(!0),
          t = e.run(() => Et({}));
        let n = [],
          r = [];
        const o = Dt({
          install(e) {
            ah(o),
              (o._a = e),
              e.provide(lh, o),
              (e.config.globalProperties.$pinia = o),
              r.forEach((e) => n.push(e)),
              (r = []);
          },
          use(e) {
            return this._a ? n.push(e) : r.push(e), this;
          },
          _p: n,
          _a: null,
          _e: e,
          _s: new Map(),
          state: t,
        });
        return o;
      })();
      return (
        e.vueApp.use(t),
        ah(t),
        e.payload && e.payload.pinia && (t.state.value = e.payload.pinia),
        { provide: { pinia: t } }
      );
    },
  }),
  zh = $l({ name: "nuxt:global-components" }),
  Vh = {
    default: Zn(() =>
      Ju(
        () => import("./BanM1Kzo.js"),
        __vite__mapDeps([26, 18, 13, 14, 27]),
        import.meta.url
      ).then((e) => e.default || e)
    ),
  },
  Wh = $l({
    name: "nuxt:prefetch",
    setup(e) {
      const t = Rc();
      e.hooks.hook("app:mounted", () => {
        t.beforeEach(async (e) => {
          var t;
          const n =
            null == (t = null == e ? void 0 : e.meta) ? void 0 : t.layout;
          n && "function" == typeof Vh[n] && (await Vh[n]());
        });
      }),
        e.hooks.hook("link:prefetch", (e) => {
          if ($a(e)) return;
          const n = t.resolve(e);
          if (!n) return;
          const r = n.meta.layout;
          let o = xf(n.meta.middleware);
          o = o.filter((e) => "string" == typeof e);
          for (const t of o) "function" == typeof Th[t] && Th[t]();
          r && "function" == typeof Vh[r] && Vh[r]();
        });
    },
  }),
  Yh = new RegExp(
    /Googlebot\/|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video|AdsBot-Google([^-]|$)|AdsBot-Google-Mobile|Feedfetcher-Google|Mediapartners-Google|Mediapartners \(Googlebot\)|APIs-Google|Google-InspectionTool|Storebot-Google|GoogleOther|bingbot|Slurp|[wW]get|LinkedInBot|Python-urllib|python-requests|aiohttp|httpx|libwww-perl|httpunit|Nutch|Go-http-client|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|BIGLOTRON|Teoma|convera|seekbot|Gigabot|Gigablast|exabot|ia_archiver|GingerCrawler|webmon |HTTrack|grub\.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|findlink|msrbot|panscient|yacybot|AISearchBot|ips-agent|tagoobot|MJ12bot|woriobot|yanga|buzzbot|mlbot|yandex\.com\/bots|purebot|Linguee Bot|CyberPatrol|voilabot|Baiduspider|citeseerxbot|spbot|twengabot|postrank|Turnitin|scribdbot|page2rss|sitebot|linkdex|Adidxbot|ezooms|dotbot|Mail\.RU_Bot|discobot|heritrix|findthatfile|europarchive\.org|NerdByNature\.Bot|(sistrix|SISTRIX) [cC]rawler|Ahrefs(Bot|SiteAudit)|fuelbot|CrunchBot|IndeedBot|mappydata|woobot|ZoominfoBot|PrivacyAwareBot|Multiviewbot|SWIMGBot|Grobbot|eright|Apercite|semanticbot|Aboundex|domaincrawler|wbsearchbot|summify|CCBot|edisterbot|SeznamBot|ec2linkfinder|gslfbot|aiHitBot|intelium_bot|facebookexternalhit|Yeti|RetrevoPageAnalyzer|lb-spider|Sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net\.com\.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|it2media-domain-crawler|ip-web-crawler\.com|siteexplorer\.info|elisabot|proximic|changedetection|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|CC Metadata Scaper|g00g1e\.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Twitterbot|cXensebot|smtbot|bnf\.fr_bot|A6-Indexer|ADmantX|Facebot|OrangeBot\/|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive\.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|S[eE][mM]rushBot|yoozBot|lipperhey|Y!J|Domain Re-Animator Bot|AddThis|Screaming Frog SEO Spider|MetaURI|Scrapy|Livelap[bB]ot|OpenHoseBot|CapsuleChecker|collection@infegy\.com|IstellaBot|DeuSu\/|betaBot|Cliqzbot\/|MojeekBot\/|netEstate NE Crawler|SafeSearch microdata crawler|Gluten Free Crawler\/|Sonic|Sysomos|Trove|deadlinkchecker|Slack-ImgProxy|Embedly|RankActiveLinkBot|iskanie|SafeDNSBot|SkypeUriPreview|Veoozbot|Slackbot|redditbot|datagnionbot|Google-Adwords-Instant|adbeat_bot|WhatsApp|contxbot|pinterest\.com\/bot|electricmonk|GarlikCrawler|BingPreview\/|vebidoobot|FemtosearchBot|Yahoo Link Preview|MetaJobBot|DomainStatsBot|mindUpBot|Daum\/|Jugendschutzprogramm-Crawler|Xenu Link Sleuth|Pcore-HTTP|moatbot|KosmioBot|[pP]ingdom|AppInsights|PhantomJS|Gowikibot|PiplBot|Discordbot|TelegramBot|Jetslide|newsharecounts|James BOT|Bark[rR]owler|TinEye|SocialRankIOBot|trendictionbot|Ocarinabot|epicbot|Primalbot|DuckDuckGo-Favicons-Bot|GnowitNewsbot|Leikibot|LinkArchiver|YaK\/|PaperLiBot|Digg Deeper|dcrawl|Snacktory|AndersPinkBot|Fyrebot|EveryoneSocialBot|Mediatoolkitbot|Luminator-robots|ExtLinksBot|SurveyBot|NING\/|okhttp|Nuzzel|omgili|PocketParser|YisouSpider|um-LN|ToutiaoSpider|MuckRack|Jamie's Spider|AHC\/|NetcraftSurveyAgent|Laserlikebot|^Apache-HttpClient|AppEngine-Google|Jetty|Upflow|Thinklab|Traackr\.com|Twurly|Mastodon|http_get|DnyzBot|botify|007ac9 Crawler|BehloolBot|BrandVerity|check_http|BDCbot|ZumBot|EZID|ICC-Crawler|ArchiveBot|^LCC |filterdb\.iss\.net\/crawler|BLP_bbot|BomboraBot|Buck\/|Companybook-Crawler|Genieo|magpie-crawler|MeltwaterNews|Moreover|newspaper\/|ScoutJet|(^| )sentry\/|StorygizeBot|UptimeRobot|OutclicksBot|seoscanners|Hatena|Google Web Preview|MauiBot|AlphaBot|SBL-BOT|IAS crawler|adscanner|Netvibes|acapbot|Baidu-YunGuanCe|bitlybot|blogmuraBot|Bot\.AraTurka\.com|bot-pge\.chlooe\.com|BoxcarBot|BTWebClient|ContextAd Bot|Digincore bot|Disqus|Feedly|Fetch\/|Fever|Flamingo_SearchEngine|FlipboardProxy|g2reader-bot|G2 Web Services|imrbot|K7MLWCBot|Kemvibot|Landau-Media-Spider|linkapediabot|vkShare|Siteimprove\.com|BLEXBot\/|DareBoost|ZuperlistBot\/|Miniflux\/|Feedspot|Diffbot\/|SEOkicks|tracemyfile|Nimbostratus-Bot|zgrab|PR-CY\.RU|AdsTxtCrawler|Datafeedwatch|Zabbix|TangibleeBot|google-xrawler|axios|Amazon CloudFront|Pulsepoint|CloudFlare-AlwaysOnline|Google-Structured-Data-Testing-Tool|WordupInfoSearch|WebDataStats|HttpUrlConnection|ZoomBot|VelenPublicWebCrawler|MoodleBot|jpg-newsbot|outbrain|W3C_Validator|Validator\.nu|W3C-checklink|W3C-mobileOK|W3C_I18n-Checker|FeedValidator|W3C_CSS_Validator|W3C_Unicorn|Google-PhysicalWeb|Blackboard|ICBot\/|BazQux|Twingly|Rivva|Experibot|awesomecrawler|Dataprovider\.com|GroupHigh\/|theoldreader\.com|AnyEvent|Uptimebot\.org|Nmap Scripting Engine|2ip\.ru|Clickagy|Caliperbot|MBCrawler|online-webceo-bot|B2B Bot|AddSearchBot|Google Favicon|HubSpot|Chrome-Lighthouse|HeadlessChrome|CheckMarkNetwork\/|www\.uptime\.com|Streamline3Bot\/|serpstatbot\/|MixnodeCache\/|^curl|SimpleScraper|RSSingBot|Jooblebot|fedoraplanet|Friendica|NextCloud|Tiny Tiny RSS|RegionStuttgartBot|Bytespider|Datanyze|Google-Site-Verification|TrendsmapResolver|tweetedtimes|NTENTbot|Gwene|SimplePie|SearchAtlas|Superfeedr|feedbot|UT-Dorkbot|Amazonbot|SerendeputyBot|Eyeotabot|officestorebot|Neticle Crawler|SurdotlyBot|LinkisBot|AwarioSmartBot|AwarioRssBot|RyteBot|FreeWebMonitoring SiteChecker|AspiegelBot|NAVER Blog Rssbot|zenback bot|SentiBot|Domains Project\/|Pandalytics|VKRobot|bidswitchbot|tigerbot|NIXStatsbot|Atom Feed Robot|[Cc]urebot|PagePeeker\/|Vigil\/|rssbot\/|startmebot\/|JobboerseBot|seewithkids|NINJA bot|Cutbot|BublupBot|BrandONbot|RidderBot|Taboolabot|Dubbotbot|FindITAnswersbot|infoobot|Refindbot|BlogTraffic\/\d\.\d+ Feed-Fetcher|SeobilityBot|Cincraw|Dragonbot|VoluumDSP-content-bot|FreshRSS|BitBot|^PHP-Curl-Class|Google-Certificates-Bridge|centurybot|Viber|e\.ventures Investment Crawler|evc-batch|PetalBot|virustotal|(^| )PTST\/|minicrawler|Cookiebot|trovitBot|seostar\.co|IonCrawl|Uptime-Kuma|Seekport|FreshpingBot|Feedbin|CriteoBot|Snap URL Preview Service|Better Uptime Bot|RuxitSynthetic|Google-Read-Aloud|Valve\/Steam|OdklBot\/|GPTBot|ChatGPT-User|YandexRenderResourcesBot\/|LightspeedSystemsCrawler|ev-crawler\/|BitSightBot\/|woorankreview\/|Google-Safety|AwarioBot|DataForSeoBot|Linespider|WellKnownBot|A Patent Crawler|StractBot|search\.marginalia\.nu|YouBot|Nicecrawler|Neevabot|BrightEdge Crawler|SiteCheckerBotCrawler|TombaPublicWebCrawler|CrawlyProjectCrawler|KomodiaBot|KStandBot|CISPA Webcrawler|MTRobot|hyscore\.io|AlexandriaOrgBot|2ip bot|Yellowbrandprotectionbot|SEOlizer|vuhuvBot|INETDEX-BOT|Synapse|t3versionsBot|deepnoc|Cocolyzebot|hypestat|ReverseEngineeringBot|sempi\.tech|Iframely|MetaInspector|node-fetch|lkxscan|python-opengraph|OpenGraphCheck|developers\.google\.com\/\+\/web\/snippet|SenutoBot|MaCoCu|NewsBlur|inoreader|NetSystemsResearch|PageThing|WordPress\/|PhxBot|ImagesiftBot|Expanse|InternetMeasurement|^BW\/|GeedoBot|Audisto Crawler|PerplexityBot\/|[cC]laude[bB]ot|Monsidobot|GroupMeBot|Vercelbot|vercel-screenshot/
  ),
  Xh =
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
  Gh =
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
  Kh =
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
  Jh =
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
const Qh = [
  { name: "Samsung", regex: /SamsungBrowser/i },
  { name: "Edge", regex: /edg(?:[ea]|ios)?\//i },
  { name: "Firefox", regex: /firefox|iceweasel|fxios/i },
  { name: "Chrome", regex: /chrome|crios|crmo/i },
  { name: "Safari", regex: /safari|applewebkit/i },
];
function Zh(e, t = {}) {
  let n = !1,
    r = !1,
    o = !1,
    i = !1;
  if ("Amazon CloudFront" === e)
    "true" === t["cloudfront-is-mobile-viewer"] && ((n = !0), (r = !0)),
      "true" === t["cloudfront-is-tablet-viewer"] && ((n = !1), (r = !0)),
      "true" === t["cloudfront-is-desktop-viewer"] && ((n = !1), (r = !1)),
      "true" === t["cloudfront-is-ios-viewer"] && (o = !0),
      "true" === t["cloudfront-is-android-viewer"] && (i = !0);
  else if (t && t["cf-device-type"])
    switch (t["cf-device-type"]) {
      case "mobile":
        (n = !0), (r = !0);
        break;
      case "tablet":
        (n = !1), (r = !0);
        break;
      case "desktop":
        (n = !1), (r = !1);
    }
  else
    (n = (function (e) {
      return Xh.test(e) || Gh.test(e.slice(0, 4));
    })(e)),
      (r = (function (e) {
        return Kh.test(e) || Jh.test(e.slice(0, 4));
      })(e)),
      (o = (function (e) {
        return /iPad|iPhone|iPod/.test(e);
      })(e)),
      (i = (function (e) {
        return /android/i.test(e);
      })(e));
  const s = (function (e) {
      return /Windows/.test(e);
    })(e),
    a = (function (e) {
      return /Mac OS X/.test(e);
    })(e),
    l = (function (e) {
      for (const t of Qh) if (t.regex.test(e)) return t.name;
      return "";
    })(e);
  return {
    userAgent: e,
    isMobile: n,
    isMobileOrTablet: r,
    isTablet: !n && r,
    isDesktop: !r,
    isIos: o,
    isAndroid: i,
    isWindows: s,
    isMacOS: a,
    isApple: a || o,
    isDesktopOrTablet: !n,
    isSafari: "Safari" === l,
    isFirefox: "Firefox" === l,
    isEdge: "Edge" === l,
    isChrome: "Chrome" === l,
    isSamsung: "Samsung" === l,
    isCrawler: Yh.test(e),
  };
}
const em = $l(() => {
  const e = Hl(),
    t = e.public.device.defaultUserAgent;
  let n;
  {
    const r = navigator.userAgent || t;
    (n = ft(Zh(r))),
      e.public.device.refreshOnResize &&
        window.addEventListener("resize", () => {
          setTimeout(() => {
            const e = Zh(navigator.userAgent || r);
            Object.entries(e).forEach(([e, t]) => {
              n[e] = t;
            });
          }, 50);
        });
  }
  return { provide: { device: n } };
});
function tm(e) {
  return (
    "string" == typeof (e = JSON.stringify(e)) && !!/^\{[\s\S]*\}$/.test(e)
  );
}
function nm() {
  if (!(this instanceof nm)) return new nm();
}
nm.prototype = {
  get: function (e) {
    for (
      var t = e + "=", n = document.cookie.split(";"), r = 0;
      r < n.length;
      r++
    ) {
      for (var o = n[r]; " " == o.charAt(0); ) o = o.substring(1, o.length);
      if (0 == o.indexOf(t)) return decodeURI(o.substring(t.length, o.length));
    }
    return !1;
  },
  set: function (e, t, n) {
    if (tm(e)) for (const r in e) this.set(r, e[r], t, n);
    else if ("string" == typeof e) {
      const r = tm(n) ? n : { expires: n },
        o = void 0 !== r.path ? `;path=${r.path};path=/` : ";path=/",
        i = r.domain ? `;domain=${r.domain}` : "",
        s = r.secure ? ";secure" : "";
      let a = void 0 !== r.expires ? r.expires : "";
      "string" == typeof a && "" !== a
        ? (a = new Date(a))
        : "number" == typeof a && (a = new Date(+new Date() + 864e5 * a)),
        "" !== a && "toGMTString" in a && (a = `;expires=${a.toGMTString()}`);
      const l = r.sameSite ? `;SameSite=${r.sameSite}` : "";
      document.cookie = `${e}=${encodeURI(t) + a + o + i + s + l}`;
    }
  },
  remove: function (e) {
    for (
      var t = 0,
        n = (e =
          e instanceof Array
            ? e
            : (function (e) {
                return Array.prototype.slice.call(e);
              })(arguments)).length;
      t < n;
      t++
    )
      this.set(e[t], "", -1);
    return e;
  },
  clear: function (e) {
    return e
      ? this.remove(e)
      : this.remove(
          (function (e) {
            var t = [],
              n = "";
            for (n in e) t.push(n);
            return t;
          })(this.all())
        );
  },
  all: function () {
    if ("" === document.cookie) return {};
    for (
      var e = document.cookie.split("; "), t = {}, n = 0, r = e.length;
      n < r;
      n++
    ) {
      var o = e[n].split("=");
      t[decodeURI(o[0])] = decodeURI(o[1]);
    }
    return t;
  },
};
let rm = null;
const om = function (e, t, n) {
  const r = arguments;
  return (
    rm || (rm = nm()),
    0 === r.length
      ? rm.all()
      : 1 === r.length && null === e
      ? rm.clear()
      : 2 !== r.length || t
      ? "string" != typeof e || t
        ? ("string" == typeof e && t) || tm(e)
          ? rm.set(e, t, n)
          : void 0
        : rm.get(e)
      : rm.clear(e)
  );
};
for (const sI in nm.prototype) om[sI] = nm.prototype[sI];
const im = {
    breakpoints: {
      xs: 393,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1440,
      "2xl": 2024,
    },
    cookie: {
      expires: 365,
      name: "viewport",
      path: "/",
      sameSite: "Strict",
      secure: !0,
    },
    defaultBreakpoints: {
      desktop: "desktop",
      mobile: "mobile",
      tablet: "tablet",
    },
    fallbackBreakpoint: "desktop",
    feature: "minWidth",
  },
  sm = $l(async (e) => {
    const t = Xf("viewportState", "$KgRndbOnZb"),
      n = (function (e, t) {
        const n = Hi({
            get: () => t.value || e.fallbackBreakpoint,
            set(n) {
              (t.value = n),
                "undefined" != typeof window &&
                  e.cookie.name &&
                  om.set(e.cookie.name, t.value, e.cookie);
            },
          }),
          r = Hi(() => {
            const t = e.breakpoints || {},
              n = Object.keys(t).sort((e, n) => t[e] - t[n]),
              r = {};
            let o = n.length;
            for (; o--; ) {
              const i = n[o],
                s = t[i],
                a = t[n[o + 1]],
                l = t[n[o - 1]];
              let c = "";
              "minWidth" === e.feature
                ? ((c = o > 0 ? `(min-width: ${s}px)` : "(min-width: 1px)"),
                  a && (c += ` and (max-width: ${a - 1}px)`))
                : ((c = `(max-width: ${s}px)`),
                  l && (c = `(min-width: ${l - 1}px) and ${c}`)),
                (r[i] = { mediaQuery: c, size: s });
            }
            return r;
          }),
          o = Hi(() => Object.keys(r.value));
        return {
          breakpoint: n,
          breakpointValue: function (t) {
            return (e.breakpoints || {})[t];
          },
          isGreaterThan: i,
          isGreaterOrEquals: function (e) {
            return i(e) || a(e);
          },
          isLessThan: s,
          isLessOrEquals: function (e) {
            return s(e) || a(e);
          },
          match: a,
          matches: function (...e) {
            return e.includes(n.value);
          },
          queries: r,
        };
        function i(e) {
          const t = o.value.indexOf(n.value),
            r = o.value.indexOf(e);
          return -1 !== r && r > t;
        }
        function s(e) {
          const t = o.value.indexOf(n.value),
            r = o.value.indexOf(e);
          return -1 !== r && r < t;
        }
        function a(e) {
          return n.value === e;
        }
      })(im, t);
    return (
      e.hook("app:suspense:resolve", () => {
        for (const e in n.queries.value) {
          const { mediaQuery: t } = n.queries.value[e],
            r = window.matchMedia(t);
          r.matches && (n.breakpoint.value = e),
            (r.onchange = (t) => {
              t.matches && (n.breakpoint.value = e);
            });
        }
      }),
      e.provide("viewport", n)
    );
  });
class am extends Error {
  constructor(e, n) {
    super(
      `${am.extractMessage(e)}: ${JSON.stringify({ response: e, request: n })}`
    ),
      t(this, "response"),
      t(this, "request"),
      Object.setPrototypeOf(this, am.prototype),
      (this.response = e),
      (this.request = n),
      "function" == typeof Error.captureStackTrace &&
        Error.captureStackTrace(this, am);
  }
  static extractMessage(e) {
    var t, n;
    return (
      (null == (n = null == (t = e.errors) ? void 0 : t[0])
        ? void 0
        : n.message) ?? `GraphQL Error (Code: ${String(e.status)})`
    );
  }
}
const lm = (e) => e.toUpperCase(),
  cm = (e) => ("function" == typeof e ? e() : e),
  um = (e, t) => e.map((e, n) => [e, t[n]]),
  pm = (e) => {
    let t = {};
    return (
      e instanceof Headers
        ? (t = dm(e))
        : Array.isArray(e)
        ? e.forEach(([e, n]) => {
            e && void 0 !== n && (t[e] = n);
          })
        : e && (t = e),
      t
    );
  },
  dm = (e) => {
    const t = {};
    return (
      e.forEach((e, n) => {
        t[n] = e;
      }),
      t
    );
  },
  fm = (e) => (e instanceof Error ? e : new Error(String(e))),
  hm = (e) =>
    "object" == typeof e &&
    null !== e &&
    "then" in e &&
    "function" == typeof e.then &&
    "catch" in e &&
    "function" == typeof e.catch &&
    "finally" in e &&
    "function" == typeof e.finally,
  mm = (e) => {
    throw new Error(`Unhandled case: ${String(e)}`);
  },
  gm = (e) => "object" == typeof e && null !== e && !Array.isArray(e);
function vm(e, t) {
  if (!Boolean(e)) throw new Error(t);
}
function ym(e, t) {
  if (!Boolean(e)) throw new Error("Unexpected invariant triggered.");
}
const bm = /\r\n|[\n\r]/g;
function _m(e, t) {
  let n = 0,
    r = 1;
  for (const o of e.body.matchAll(bm)) {
    if (("number" == typeof o.index || ym(!1), o.index >= t)) break;
    (n = o.index + o[0].length), (r += 1);
  }
  return { line: r, column: t + 1 - n };
}
function wm(e, t) {
  const n = e.locationOffset.column - 1,
    r = "".padStart(n) + e.body,
    o = t.line - 1,
    i = e.locationOffset.line - 1,
    s = t.line + i,
    a = 1 === t.line ? n : 0,
    l = t.column + a,
    c = `${e.name}:${s}:${l}\n`,
    u = r.split(/\r\n|[\n\r]/g),
    p = u[o];
  if (p.length > 120) {
    const e = Math.floor(l / 80),
      t = l % 80,
      n = [];
    for (let r = 0; r < p.length; r += 80) n.push(p.slice(r, r + 80));
    return (
      c +
      Dm([
        [`${s} |`, n[0]],
        ...n.slice(1, e + 1).map((e) => ["|", e]),
        ["|", "^".padStart(t)],
        ["|", n[e + 1]],
      ])
    );
  }
  return (
    c +
    Dm([
      [s - 1 + " |", u[o - 1]],
      [`${s} |`, p],
      ["|", "^".padStart(l)],
      [`${s + 1} |`, u[o + 1]],
    ])
  );
}
function Dm(e) {
  const t = e.filter(([e, t]) => void 0 !== t),
    n = Math.max(...t.map(([e]) => e.length));
  return t.map(([e, t]) => e.padStart(n) + (t ? " " + t : "")).join("\n");
}
class xm extends Error {
  constructor(e, ...t) {
    var n, r, o;
    const {
      nodes: i,
      source: s,
      positions: a,
      path: l,
      originalError: c,
      extensions: u,
    } = (function (e) {
      const t = e[0];
      return null == t || "kind" in t || "length" in t
        ? {
            nodes: t,
            source: e[1],
            positions: e[2],
            path: e[3],
            originalError: e[4],
            extensions: e[5],
          }
        : t;
    })(t);
    super(e),
      (this.name = "GraphQLError"),
      (this.path = null != l ? l : void 0),
      (this.originalError = null != c ? c : void 0),
      (this.nodes = km(Array.isArray(i) ? i : i ? [i] : void 0));
    const p = km(
      null === (n = this.nodes) || void 0 === n
        ? void 0
        : n.map((e) => e.loc).filter((e) => null != e)
    );
    (this.source =
      null != s
        ? s
        : null == p || null === (r = p[0]) || void 0 === r
        ? void 0
        : r.source),
      (this.positions =
        null != a ? a : null == p ? void 0 : p.map((e) => e.start)),
      (this.locations =
        a && s
          ? a.map((e) => _m(s, e))
          : null == p
          ? void 0
          : p.map((e) => _m(e.source, e.start)));
    const d =
      "object" == typeof (f = null == c ? void 0 : c.extensions) && null !== f
        ? null == c
          ? void 0
          : c.extensions
        : void 0;
    var f;
    (this.extensions =
      null !== (o = null != u ? u : d) && void 0 !== o
        ? o
        : Object.create(null)),
      Object.defineProperties(this, {
        message: { writable: !0, enumerable: !0 },
        name: { enumerable: !1 },
        nodes: { enumerable: !1 },
        source: { enumerable: !1 },
        positions: { enumerable: !1 },
        originalError: { enumerable: !1 },
      }),
      null != c && c.stack
        ? Object.defineProperty(this, "stack", {
            value: c.stack,
            writable: !0,
            configurable: !0,
          })
        : Error.captureStackTrace
        ? Error.captureStackTrace(this, xm)
        : Object.defineProperty(this, "stack", {
            value: Error().stack,
            writable: !0,
            configurable: !0,
          });
  }
  get [Symbol.toStringTag]() {
    return "GraphQLError";
  }
  toString() {
    let e = this.message;
    if (this.nodes)
      for (const n of this.nodes)
        n.loc && (e += "\n\n" + wm((t = n.loc).source, _m(t.source, t.start)));
    else if (this.source && this.locations)
      for (const n of this.locations) e += "\n\n" + wm(this.source, n);
    var t;
    return e;
  }
  toJSON() {
    const e = { message: this.message };
    return (
      null != this.locations && (e.locations = this.locations),
      null != this.path && (e.path = this.path),
      null != this.extensions &&
        Object.keys(this.extensions).length > 0 &&
        (e.extensions = this.extensions),
      e
    );
  }
}
function km(e) {
  return void 0 === e || 0 === e.length ? void 0 : e;
}
function Cm(e, t, n) {
  return new xm(`Syntax Error: ${n}`, { source: e, positions: [t] });
}
class Em {
  constructor(e, t, n) {
    (this.start = e.start),
      (this.end = t.end),
      (this.startToken = e),
      (this.endToken = t),
      (this.source = n);
  }
  get [Symbol.toStringTag]() {
    return "Location";
  }
  toJSON() {
    return { start: this.start, end: this.end };
  }
}
class Tm {
  constructor(e, t, n, r, o, i) {
    (this.kind = e),
      (this.start = t),
      (this.end = n),
      (this.line = r),
      (this.column = o),
      (this.value = i),
      (this.prev = null),
      (this.next = null);
  }
  get [Symbol.toStringTag]() {
    return "Token";
  }
  toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column,
    };
  }
}
const Sm = {
    Name: [],
    Document: ["definitions"],
    OperationDefinition: [
      "name",
      "variableDefinitions",
      "directives",
      "selectionSet",
    ],
    VariableDefinition: ["variable", "type", "defaultValue", "directives"],
    Variable: ["name"],
    SelectionSet: ["selections"],
    Field: ["alias", "name", "arguments", "directives", "selectionSet"],
    Argument: ["name", "value"],
    FragmentSpread: ["name", "directives"],
    InlineFragment: ["typeCondition", "directives", "selectionSet"],
    FragmentDefinition: [
      "name",
      "variableDefinitions",
      "typeCondition",
      "directives",
      "selectionSet",
    ],
    IntValue: [],
    FloatValue: [],
    StringValue: [],
    BooleanValue: [],
    NullValue: [],
    EnumValue: [],
    ListValue: ["values"],
    ObjectValue: ["fields"],
    ObjectField: ["name", "value"],
    Directive: ["name", "arguments"],
    NamedType: ["name"],
    ListType: ["type"],
    NonNullType: ["type"],
    SchemaDefinition: ["description", "directives", "operationTypes"],
    OperationTypeDefinition: ["type"],
    ScalarTypeDefinition: ["description", "name", "directives"],
    ObjectTypeDefinition: [
      "description",
      "name",
      "interfaces",
      "directives",
      "fields",
    ],
    FieldDefinition: ["description", "name", "arguments", "type", "directives"],
    InputValueDefinition: [
      "description",
      "name",
      "type",
      "defaultValue",
      "directives",
    ],
    InterfaceTypeDefinition: [
      "description",
      "name",
      "interfaces",
      "directives",
      "fields",
    ],
    UnionTypeDefinition: ["description", "name", "directives", "types"],
    EnumTypeDefinition: ["description", "name", "directives", "values"],
    EnumValueDefinition: ["description", "name", "directives"],
    InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
    DirectiveDefinition: ["description", "name", "arguments", "locations"],
    SchemaExtension: ["directives", "operationTypes"],
    ScalarTypeExtension: ["name", "directives"],
    ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
    InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
    UnionTypeExtension: ["name", "directives", "types"],
    EnumTypeExtension: ["name", "directives", "values"],
    InputObjectTypeExtension: ["name", "directives", "fields"],
  },
  Am = new Set(Object.keys(Sm));
function Om(e) {
  const t = null == e ? void 0 : e.kind;
  return "string" == typeof t && Am.has(t);
}
var Pm, Fm, Lm, Nm, Im, Rm, Mm, Bm;
function jm(e) {
  return 9 === e || 32 === e;
}
function $m(e) {
  return e >= 48 && e <= 57;
}
function Um(e) {
  return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
}
function qm(e) {
  return Um(e) || 95 === e;
}
function Hm(e) {
  return Um(e) || $m(e) || 95 === e;
}
function zm(e) {
  var t;
  let n = Number.MAX_SAFE_INTEGER,
    r = null,
    o = -1;
  for (let s = 0; s < e.length; ++s) {
    var i;
    const t = e[s],
      a = Vm(t);
    a !== t.length &&
      ((r = null !== (i = r) && void 0 !== i ? i : s),
      (o = s),
      0 !== s && a < n && (n = a));
  }
  return e
    .map((e, t) => (0 === t ? e : e.slice(n)))
    .slice(null !== (t = r) && void 0 !== t ? t : 0, o + 1);
}
function Vm(e) {
  let t = 0;
  for (; t < e.length && jm(e.charCodeAt(t)); ) ++t;
  return t;
}
((Fm = Pm || (Pm = {})).QUERY = "query"),
  (Fm.MUTATION = "mutation"),
  (Fm.SUBSCRIPTION = "subscription"),
  ((Nm = Lm || (Lm = {})).QUERY = "QUERY"),
  (Nm.MUTATION = "MUTATION"),
  (Nm.SUBSCRIPTION = "SUBSCRIPTION"),
  (Nm.FIELD = "FIELD"),
  (Nm.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION"),
  (Nm.FRAGMENT_SPREAD = "FRAGMENT_SPREAD"),
  (Nm.INLINE_FRAGMENT = "INLINE_FRAGMENT"),
  (Nm.VARIABLE_DEFINITION = "VARIABLE_DEFINITION"),
  (Nm.SCHEMA = "SCHEMA"),
  (Nm.SCALAR = "SCALAR"),
  (Nm.OBJECT = "OBJECT"),
  (Nm.FIELD_DEFINITION = "FIELD_DEFINITION"),
  (Nm.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION"),
  (Nm.INTERFACE = "INTERFACE"),
  (Nm.UNION = "UNION"),
  (Nm.ENUM = "ENUM"),
  (Nm.ENUM_VALUE = "ENUM_VALUE"),
  (Nm.INPUT_OBJECT = "INPUT_OBJECT"),
  (Nm.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION"),
  ((Rm = Im || (Im = {})).NAME = "Name"),
  (Rm.DOCUMENT = "Document"),
  (Rm.OPERATION_DEFINITION = "OperationDefinition"),
  (Rm.VARIABLE_DEFINITION = "VariableDefinition"),
  (Rm.SELECTION_SET = "SelectionSet"),
  (Rm.FIELD = "Field"),
  (Rm.ARGUMENT = "Argument"),
  (Rm.FRAGMENT_SPREAD = "FragmentSpread"),
  (Rm.INLINE_FRAGMENT = "InlineFragment"),
  (Rm.FRAGMENT_DEFINITION = "FragmentDefinition"),
  (Rm.VARIABLE = "Variable"),
  (Rm.INT = "IntValue"),
  (Rm.FLOAT = "FloatValue"),
  (Rm.STRING = "StringValue"),
  (Rm.BOOLEAN = "BooleanValue"),
  (Rm.NULL = "NullValue"),
  (Rm.ENUM = "EnumValue"),
  (Rm.LIST = "ListValue"),
  (Rm.OBJECT = "ObjectValue"),
  (Rm.OBJECT_FIELD = "ObjectField"),
  (Rm.DIRECTIVE = "Directive"),
  (Rm.NAMED_TYPE = "NamedType"),
  (Rm.LIST_TYPE = "ListType"),
  (Rm.NON_NULL_TYPE = "NonNullType"),
  (Rm.SCHEMA_DEFINITION = "SchemaDefinition"),
  (Rm.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition"),
  (Rm.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition"),
  (Rm.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition"),
  (Rm.FIELD_DEFINITION = "FieldDefinition"),
  (Rm.INPUT_VALUE_DEFINITION = "InputValueDefinition"),
  (Rm.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition"),
  (Rm.UNION_TYPE_DEFINITION = "UnionTypeDefinition"),
  (Rm.ENUM_TYPE_DEFINITION = "EnumTypeDefinition"),
  (Rm.ENUM_VALUE_DEFINITION = "EnumValueDefinition"),
  (Rm.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition"),
  (Rm.DIRECTIVE_DEFINITION = "DirectiveDefinition"),
  (Rm.SCHEMA_EXTENSION = "SchemaExtension"),
  (Rm.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension"),
  (Rm.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension"),
  (Rm.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension"),
  (Rm.UNION_TYPE_EXTENSION = "UnionTypeExtension"),
  (Rm.ENUM_TYPE_EXTENSION = "EnumTypeExtension"),
  (Rm.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension"),
  ((Bm = Mm || (Mm = {})).SOF = "<SOF>"),
  (Bm.EOF = "<EOF>"),
  (Bm.BANG = "!"),
  (Bm.DOLLAR = "$"),
  (Bm.AMP = "&"),
  (Bm.PAREN_L = "("),
  (Bm.PAREN_R = ")"),
  (Bm.SPREAD = "..."),
  (Bm.COLON = ":"),
  (Bm.EQUALS = "="),
  (Bm.AT = "@"),
  (Bm.BRACKET_L = "["),
  (Bm.BRACKET_R = "]"),
  (Bm.BRACE_L = "{"),
  (Bm.PIPE = "|"),
  (Bm.BRACE_R = "}"),
  (Bm.NAME = "Name"),
  (Bm.INT = "Int"),
  (Bm.FLOAT = "Float"),
  (Bm.STRING = "String"),
  (Bm.BLOCK_STRING = "BlockString"),
  (Bm.COMMENT = "Comment");
class Wm {
  constructor(e) {
    const t = new Tm(Mm.SOF, 0, 0, 0, 0);
    (this.source = e),
      (this.lastToken = t),
      (this.token = t),
      (this.line = 1),
      (this.lineStart = 0);
  }
  get [Symbol.toStringTag]() {
    return "Lexer";
  }
  advance() {
    this.lastToken = this.token;
    return (this.token = this.lookahead());
  }
  lookahead() {
    let e = this.token;
    if (e.kind !== Mm.EOF)
      do {
        if (e.next) e = e.next;
        else {
          const t = Zm(this, e.end);
          (e.next = t), (t.prev = e), (e = t);
        }
      } while (e.kind === Mm.COMMENT);
    return e;
  }
}
function Ym(e) {
  return (e >= 0 && e <= 55295) || (e >= 57344 && e <= 1114111);
}
function Xm(e, t) {
  return Gm(e.charCodeAt(t)) && Km(e.charCodeAt(t + 1));
}
function Gm(e) {
  return e >= 55296 && e <= 56319;
}
function Km(e) {
  return e >= 56320 && e <= 57343;
}
function Jm(e, t) {
  const n = e.source.body.codePointAt(t);
  if (void 0 === n) return Mm.EOF;
  if (n >= 32 && n <= 126) {
    const e = String.fromCodePoint(n);
    return '"' === e ? "'\"'" : `"${e}"`;
  }
  return "U+" + n.toString(16).toUpperCase().padStart(4, "0");
}
function Qm(e, t, n, r, o) {
  const i = e.line,
    s = 1 + n - e.lineStart;
  return new Tm(t, n, r, i, s, o);
}
function Zm(e, t) {
  const n = e.source.body,
    r = n.length;
  let o = t;
  for (; o < r; ) {
    const t = n.charCodeAt(o);
    switch (t) {
      case 65279:
      case 9:
      case 32:
      case 44:
        ++o;
        continue;
      case 10:
        ++o, ++e.line, (e.lineStart = o);
        continue;
      case 13:
        10 === n.charCodeAt(o + 1) ? (o += 2) : ++o,
          ++e.line,
          (e.lineStart = o);
        continue;
      case 35:
        return eg(e, o);
      case 33:
        return Qm(e, Mm.BANG, o, o + 1);
      case 36:
        return Qm(e, Mm.DOLLAR, o, o + 1);
      case 38:
        return Qm(e, Mm.AMP, o, o + 1);
      case 40:
        return Qm(e, Mm.PAREN_L, o, o + 1);
      case 41:
        return Qm(e, Mm.PAREN_R, o, o + 1);
      case 46:
        if (46 === n.charCodeAt(o + 1) && 46 === n.charCodeAt(o + 2))
          return Qm(e, Mm.SPREAD, o, o + 3);
        break;
      case 58:
        return Qm(e, Mm.COLON, o, o + 1);
      case 61:
        return Qm(e, Mm.EQUALS, o, o + 1);
      case 64:
        return Qm(e, Mm.AT, o, o + 1);
      case 91:
        return Qm(e, Mm.BRACKET_L, o, o + 1);
      case 93:
        return Qm(e, Mm.BRACKET_R, o, o + 1);
      case 123:
        return Qm(e, Mm.BRACE_L, o, o + 1);
      case 124:
        return Qm(e, Mm.PIPE, o, o + 1);
      case 125:
        return Qm(e, Mm.BRACE_R, o, o + 1);
      case 34:
        return 34 === n.charCodeAt(o + 1) && 34 === n.charCodeAt(o + 2)
          ? cg(e, o)
          : rg(e, o);
    }
    if ($m(t) || 45 === t) return tg(e, o, t);
    if (qm(t)) return ug(e, o);
    throw Cm(
      e.source,
      o,
      39 === t
        ? "Unexpected single quote character ('), did you mean to use a double quote (\")?"
        : Ym(t) || Xm(n, o)
        ? `Unexpected character: ${Jm(e, o)}.`
        : `Invalid character: ${Jm(e, o)}.`
    );
  }
  return Qm(e, Mm.EOF, r, r);
}
function eg(e, t) {
  const n = e.source.body,
    r = n.length;
  let o = t + 1;
  for (; o < r; ) {
    const e = n.charCodeAt(o);
    if (10 === e || 13 === e) break;
    if (Ym(e)) ++o;
    else {
      if (!Xm(n, o)) break;
      o += 2;
    }
  }
  return Qm(e, Mm.COMMENT, t, o, n.slice(t + 1, o));
}
function tg(e, t, n) {
  const r = e.source.body;
  let o = t,
    i = n,
    s = !1;
  if ((45 === i && (i = r.charCodeAt(++o)), 48 === i)) {
    if (((i = r.charCodeAt(++o)), $m(i)))
      throw Cm(
        e.source,
        o,
        `Invalid number, unexpected digit after 0: ${Jm(e, o)}.`
      );
  } else (o = ng(e, o, i)), (i = r.charCodeAt(o));
  if (
    (46 === i &&
      ((s = !0),
      (i = r.charCodeAt(++o)),
      (o = ng(e, o, i)),
      (i = r.charCodeAt(o))),
    (69 !== i && 101 !== i) ||
      ((s = !0),
      (i = r.charCodeAt(++o)),
      (43 !== i && 45 !== i) || (i = r.charCodeAt(++o)),
      (o = ng(e, o, i)),
      (i = r.charCodeAt(o))),
    46 === i || qm(i))
  )
    throw Cm(
      e.source,
      o,
      `Invalid number, expected digit but got: ${Jm(e, o)}.`
    );
  return Qm(e, s ? Mm.FLOAT : Mm.INT, t, o, r.slice(t, o));
}
function ng(e, t, n) {
  if (!$m(n))
    throw Cm(
      e.source,
      t,
      `Invalid number, expected digit but got: ${Jm(e, t)}.`
    );
  const r = e.source.body;
  let o = t + 1;
  for (; $m(r.charCodeAt(o)); ) ++o;
  return o;
}
function rg(e, t) {
  const n = e.source.body,
    r = n.length;
  let o = t + 1,
    i = o,
    s = "";
  for (; o < r; ) {
    const r = n.charCodeAt(o);
    if (34 === r) return (s += n.slice(i, o)), Qm(e, Mm.STRING, t, o + 1, s);
    if (92 !== r) {
      if (10 === r || 13 === r) break;
      if (Ym(r)) ++o;
      else {
        if (!Xm(n, o))
          throw Cm(
            e.source,
            o,
            `Invalid character within String: ${Jm(e, o)}.`
          );
        o += 2;
      }
    } else {
      s += n.slice(i, o);
      const t =
        117 === n.charCodeAt(o + 1)
          ? 123 === n.charCodeAt(o + 2)
            ? og(e, o)
            : ig(e, o)
          : lg(e, o);
      (s += t.value), (o += t.size), (i = o);
    }
  }
  throw Cm(e.source, o, "Unterminated string.");
}
function og(e, t) {
  const n = e.source.body;
  let r = 0,
    o = 3;
  for (; o < 12; ) {
    const e = n.charCodeAt(t + o++);
    if (125 === e) {
      if (o < 5 || !Ym(r)) break;
      return { value: String.fromCodePoint(r), size: o };
    }
    if (((r = (r << 4) | ag(e)), r < 0)) break;
  }
  throw Cm(
    e.source,
    t,
    `Invalid Unicode escape sequence: "${n.slice(t, t + o)}".`
  );
}
function ig(e, t) {
  const n = e.source.body,
    r = sg(n, t + 2);
  if (Ym(r)) return { value: String.fromCodePoint(r), size: 6 };
  if (Gm(r) && 92 === n.charCodeAt(t + 6) && 117 === n.charCodeAt(t + 7)) {
    const e = sg(n, t + 8);
    if (Km(e)) return { value: String.fromCodePoint(r, e), size: 12 };
  }
  throw Cm(
    e.source,
    t,
    `Invalid Unicode escape sequence: "${n.slice(t, t + 6)}".`
  );
}
function sg(e, t) {
  return (
    (ag(e.charCodeAt(t)) << 12) |
    (ag(e.charCodeAt(t + 1)) << 8) |
    (ag(e.charCodeAt(t + 2)) << 4) |
    ag(e.charCodeAt(t + 3))
  );
}
function ag(e) {
  return e >= 48 && e <= 57
    ? e - 48
    : e >= 65 && e <= 70
    ? e - 55
    : e >= 97 && e <= 102
    ? e - 87
    : -1;
}
function lg(e, t) {
  const n = e.source.body;
  switch (n.charCodeAt(t + 1)) {
    case 34:
      return { value: '"', size: 2 };
    case 92:
      return { value: "\\", size: 2 };
    case 47:
      return { value: "/", size: 2 };
    case 98:
      return { value: "\b", size: 2 };
    case 102:
      return { value: "\f", size: 2 };
    case 110:
      return { value: "\n", size: 2 };
    case 114:
      return { value: "\r", size: 2 };
    case 116:
      return { value: "\t", size: 2 };
  }
  throw Cm(
    e.source,
    t,
    `Invalid character escape sequence: "${n.slice(t, t + 2)}".`
  );
}
function cg(e, t) {
  const n = e.source.body,
    r = n.length;
  let o = e.lineStart,
    i = t + 3,
    s = i,
    a = "";
  const l = [];
  for (; i < r; ) {
    const r = n.charCodeAt(i);
    if (34 === r && 34 === n.charCodeAt(i + 1) && 34 === n.charCodeAt(i + 2)) {
      (a += n.slice(s, i)), l.push(a);
      const r = Qm(e, Mm.BLOCK_STRING, t, i + 3, zm(l).join("\n"));
      return (e.line += l.length - 1), (e.lineStart = o), r;
    }
    if (
      92 !== r ||
      34 !== n.charCodeAt(i + 1) ||
      34 !== n.charCodeAt(i + 2) ||
      34 !== n.charCodeAt(i + 3)
    )
      if (10 !== r && 13 !== r)
        if (Ym(r)) ++i;
        else {
          if (!Xm(n, i))
            throw Cm(
              e.source,
              i,
              `Invalid character within String: ${Jm(e, i)}.`
            );
          i += 2;
        }
      else
        (a += n.slice(s, i)),
          l.push(a),
          13 === r && 10 === n.charCodeAt(i + 1) ? (i += 2) : ++i,
          (a = ""),
          (s = i),
          (o = i);
    else (a += n.slice(s, i)), (s = i + 1), (i += 4);
  }
  throw Cm(e.source, i, "Unterminated string.");
}
function ug(e, t) {
  const n = e.source.body,
    r = n.length;
  let o = t + 1;
  for (; o < r; ) {
    if (!Hm(n.charCodeAt(o))) break;
    ++o;
  }
  return Qm(e, Mm.NAME, t, o, n.slice(t, o));
}
function pg(e) {
  return dg(e, []);
}
function dg(e, t) {
  switch (typeof e) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? `[function ${e.name}]` : "[function]";
    case "object":
      return (function (e, t) {
        if (null === e) return "null";
        if (t.includes(e)) return "[Circular]";
        const n = [...t, e];
        if (
          (function (e) {
            return "function" == typeof e.toJSON;
          })(e)
        ) {
          const t = e.toJSON();
          if (t !== e) return "string" == typeof t ? t : dg(t, n);
        } else if (Array.isArray(e))
          return (function (e, t) {
            if (0 === e.length) return "[]";
            if (t.length > 2) return "[Array]";
            const n = Math.min(10, e.length),
              r = e.length - n,
              o = [];
            for (let i = 0; i < n; ++i) o.push(dg(e[i], t));
            1 === r
              ? o.push("... 1 more item")
              : r > 1 && o.push(`... ${r} more items`);
            return "[" + o.join(", ") + "]";
          })(e, n);
        return (function (e, t) {
          const n = Object.entries(e);
          if (0 === n.length) return "{}";
          if (t.length > 2)
            return (
              "[" +
              (function (e) {
                const t = Object.prototype.toString
                  .call(e)
                  .replace(/^\[object /, "")
                  .replace(/]$/, "");
                if ("Object" === t && "function" == typeof e.constructor) {
                  const t = e.constructor.name;
                  if ("string" == typeof t && "" !== t) return t;
                }
                return t;
              })(e) +
              "]"
            );
          const r = n.map(([e, n]) => e + ": " + dg(n, t));
          return "{ " + r.join(", ") + " }";
        })(e, n);
      })(e, t);
    default:
      return String(e);
  }
}
const fg =
  globalThis.process && !0
    ? function (e, t) {
        return e instanceof t;
      }
    : function (e, t) {
        if (e instanceof t) return !0;
        if ("object" == typeof e && null !== e) {
          var n;
          const r = t.prototype[Symbol.toStringTag];
          if (
            r ===
            (Symbol.toStringTag in e
              ? e[Symbol.toStringTag]
              : null === (n = e.constructor) || void 0 === n
              ? void 0
              : n.name)
          ) {
            const t = pg(e);
            throw new Error(
              `Cannot use ${r} "${t}" from another module or realm.\n\nEnsure that there is only one instance of "graphql" in the node_modules\ndirectory. If different versions of "graphql" are the dependencies of other\nrelied on modules, use "resolutions" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate "graphql" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results.`
            );
          }
        }
        return !1;
      };
class hg {
  constructor(e, t = "GraphQL request", n = { line: 1, column: 1 }) {
    "string" == typeof e ||
      vm(!1, `Body must be a string. Received: ${pg(e)}.`),
      (this.body = e),
      (this.name = t),
      (this.locationOffset = n),
      this.locationOffset.line > 0 ||
        vm(!1, "line in locationOffset is 1-indexed and must be positive."),
      this.locationOffset.column > 0 ||
        vm(!1, "column in locationOffset is 1-indexed and must be positive.");
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
class mg {
  constructor(e, t = {}) {
    const n = (function (e) {
      return fg(e, hg);
    })(e)
      ? e
      : new hg(e);
    (this._lexer = new Wm(n)), (this._options = t), (this._tokenCounter = 0);
  }
  get tokenCount() {
    return this._tokenCounter;
  }
  parseName() {
    const e = this.expectToken(Mm.NAME);
    return this.node(e, { kind: Im.NAME, value: e.value });
  }
  parseDocument() {
    return this.node(this._lexer.token, {
      kind: Im.DOCUMENT,
      definitions: this.many(Mm.SOF, this.parseDefinition, Mm.EOF),
    });
  }
  parseDefinition() {
    if (this.peek(Mm.BRACE_L)) return this.parseOperationDefinition();
    const e = this.peekDescription(),
      t = e ? this._lexer.lookahead() : this._lexer.token;
    if (t.kind === Mm.NAME) {
      switch (t.value) {
        case "schema":
          return this.parseSchemaDefinition();
        case "scalar":
          return this.parseScalarTypeDefinition();
        case "type":
          return this.parseObjectTypeDefinition();
        case "interface":
          return this.parseInterfaceTypeDefinition();
        case "union":
          return this.parseUnionTypeDefinition();
        case "enum":
          return this.parseEnumTypeDefinition();
        case "input":
          return this.parseInputObjectTypeDefinition();
        case "directive":
          return this.parseDirectiveDefinition();
      }
      if (e)
        throw Cm(
          this._lexer.source,
          this._lexer.token.start,
          "Unexpected description, descriptions are supported only on type definitions."
        );
      switch (t.value) {
        case "query":
        case "mutation":
        case "subscription":
          return this.parseOperationDefinition();
        case "fragment":
          return this.parseFragmentDefinition();
        case "extend":
          return this.parseTypeSystemExtension();
      }
    }
    throw this.unexpected(t);
  }
  parseOperationDefinition() {
    const e = this._lexer.token;
    if (this.peek(Mm.BRACE_L))
      return this.node(e, {
        kind: Im.OPERATION_DEFINITION,
        operation: Pm.QUERY,
        name: void 0,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet(),
      });
    const t = this.parseOperationType();
    let n;
    return (
      this.peek(Mm.NAME) && (n = this.parseName()),
      this.node(e, {
        kind: Im.OPERATION_DEFINITION,
        operation: t,
        name: n,
        variableDefinitions: this.parseVariableDefinitions(),
        directives: this.parseDirectives(!1),
        selectionSet: this.parseSelectionSet(),
      })
    );
  }
  parseOperationType() {
    const e = this.expectToken(Mm.NAME);
    switch (e.value) {
      case "query":
        return Pm.QUERY;
      case "mutation":
        return Pm.MUTATION;
      case "subscription":
        return Pm.SUBSCRIPTION;
    }
    throw this.unexpected(e);
  }
  parseVariableDefinitions() {
    return this.optionalMany(
      Mm.PAREN_L,
      this.parseVariableDefinition,
      Mm.PAREN_R
    );
  }
  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: Im.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(Mm.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(Mm.EQUALS)
        ? this.parseConstValueLiteral()
        : void 0,
      directives: this.parseConstDirectives(),
    });
  }
  parseVariable() {
    const e = this._lexer.token;
    return (
      this.expectToken(Mm.DOLLAR),
      this.node(e, { kind: Im.VARIABLE, name: this.parseName() })
    );
  }
  parseSelectionSet() {
    return this.node(this._lexer.token, {
      kind: Im.SELECTION_SET,
      selections: this.many(Mm.BRACE_L, this.parseSelection, Mm.BRACE_R),
    });
  }
  parseSelection() {
    return this.peek(Mm.SPREAD) ? this.parseFragment() : this.parseField();
  }
  parseField() {
    const e = this._lexer.token,
      t = this.parseName();
    let n, r;
    return (
      this.expectOptionalToken(Mm.COLON)
        ? ((n = t), (r = this.parseName()))
        : (r = t),
      this.node(e, {
        kind: Im.FIELD,
        alias: n,
        name: r,
        arguments: this.parseArguments(!1),
        directives: this.parseDirectives(!1),
        selectionSet: this.peek(Mm.BRACE_L) ? this.parseSelectionSet() : void 0,
      })
    );
  }
  parseArguments(e) {
    const t = e ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(Mm.PAREN_L, t, Mm.PAREN_R);
  }
  parseArgument(e = !1) {
    const t = this._lexer.token,
      n = this.parseName();
    return (
      this.expectToken(Mm.COLON),
      this.node(t, {
        kind: Im.ARGUMENT,
        name: n,
        value: this.parseValueLiteral(e),
      })
    );
  }
  parseConstArgument() {
    return this.parseArgument(!0);
  }
  parseFragment() {
    const e = this._lexer.token;
    this.expectToken(Mm.SPREAD);
    const t = this.expectOptionalKeyword("on");
    return !t && this.peek(Mm.NAME)
      ? this.node(e, {
          kind: Im.FRAGMENT_SPREAD,
          name: this.parseFragmentName(),
          directives: this.parseDirectives(!1),
        })
      : this.node(e, {
          kind: Im.INLINE_FRAGMENT,
          typeCondition: t ? this.parseNamedType() : void 0,
          directives: this.parseDirectives(!1),
          selectionSet: this.parseSelectionSet(),
        });
  }
  parseFragmentDefinition() {
    const e = this._lexer.token;
    return (
      this.expectKeyword("fragment"),
      !0 === this._options.allowLegacyFragmentVariables
        ? this.node(e, {
            kind: Im.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            variableDefinitions: this.parseVariableDefinitions(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet(),
          })
        : this.node(e, {
            kind: Im.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet(),
          })
    );
  }
  parseFragmentName() {
    if ("on" === this._lexer.token.value) throw this.unexpected();
    return this.parseName();
  }
  parseValueLiteral(e) {
    const t = this._lexer.token;
    switch (t.kind) {
      case Mm.BRACKET_L:
        return this.parseList(e);
      case Mm.BRACE_L:
        return this.parseObject(e);
      case Mm.INT:
        return (
          this.advanceLexer(), this.node(t, { kind: Im.INT, value: t.value })
        );
      case Mm.FLOAT:
        return (
          this.advanceLexer(), this.node(t, { kind: Im.FLOAT, value: t.value })
        );
      case Mm.STRING:
      case Mm.BLOCK_STRING:
        return this.parseStringLiteral();
      case Mm.NAME:
        switch ((this.advanceLexer(), t.value)) {
          case "true":
            return this.node(t, { kind: Im.BOOLEAN, value: !0 });
          case "false":
            return this.node(t, { kind: Im.BOOLEAN, value: !1 });
          case "null":
            return this.node(t, { kind: Im.NULL });
          default:
            return this.node(t, { kind: Im.ENUM, value: t.value });
        }
      case Mm.DOLLAR:
        if (e) {
          if (
            (this.expectToken(Mm.DOLLAR), this._lexer.token.kind === Mm.NAME)
          ) {
            const e = this._lexer.token.value;
            throw Cm(
              this._lexer.source,
              t.start,
              `Unexpected variable "$${e}" in constant value.`
            );
          }
          throw this.unexpected(t);
        }
        return this.parseVariable();
      default:
        throw this.unexpected();
    }
  }
  parseConstValueLiteral() {
    return this.parseValueLiteral(!0);
  }
  parseStringLiteral() {
    const e = this._lexer.token;
    return (
      this.advanceLexer(),
      this.node(e, {
        kind: Im.STRING,
        value: e.value,
        block: e.kind === Mm.BLOCK_STRING,
      })
    );
  }
  parseList(e) {
    return this.node(this._lexer.token, {
      kind: Im.LIST,
      values: this.any(
        Mm.BRACKET_L,
        () => this.parseValueLiteral(e),
        Mm.BRACKET_R
      ),
    });
  }
  parseObject(e) {
    return this.node(this._lexer.token, {
      kind: Im.OBJECT,
      fields: this.any(Mm.BRACE_L, () => this.parseObjectField(e), Mm.BRACE_R),
    });
  }
  parseObjectField(e) {
    const t = this._lexer.token,
      n = this.parseName();
    return (
      this.expectToken(Mm.COLON),
      this.node(t, {
        kind: Im.OBJECT_FIELD,
        name: n,
        value: this.parseValueLiteral(e),
      })
    );
  }
  parseDirectives(e) {
    const t = [];
    for (; this.peek(Mm.AT); ) t.push(this.parseDirective(e));
    return t;
  }
  parseConstDirectives() {
    return this.parseDirectives(!0);
  }
  parseDirective(e) {
    const t = this._lexer.token;
    return (
      this.expectToken(Mm.AT),
      this.node(t, {
        kind: Im.DIRECTIVE,
        name: this.parseName(),
        arguments: this.parseArguments(e),
      })
    );
  }
  parseTypeReference() {
    const e = this._lexer.token;
    let t;
    if (this.expectOptionalToken(Mm.BRACKET_L)) {
      const n = this.parseTypeReference();
      this.expectToken(Mm.BRACKET_R),
        (t = this.node(e, { kind: Im.LIST_TYPE, type: n }));
    } else t = this.parseNamedType();
    return this.expectOptionalToken(Mm.BANG)
      ? this.node(e, { kind: Im.NON_NULL_TYPE, type: t })
      : t;
  }
  parseNamedType() {
    return this.node(this._lexer.token, {
      kind: Im.NAMED_TYPE,
      name: this.parseName(),
    });
  }
  peekDescription() {
    return this.peek(Mm.STRING) || this.peek(Mm.BLOCK_STRING);
  }
  parseDescription() {
    if (this.peekDescription()) return this.parseStringLiteral();
  }
  parseSchemaDefinition() {
    const e = this._lexer.token,
      t = this.parseDescription();
    this.expectKeyword("schema");
    const n = this.parseConstDirectives(),
      r = this.many(Mm.BRACE_L, this.parseOperationTypeDefinition, Mm.BRACE_R);
    return this.node(e, {
      kind: Im.SCHEMA_DEFINITION,
      description: t,
      directives: n,
      operationTypes: r,
    });
  }
  parseOperationTypeDefinition() {
    const e = this._lexer.token,
      t = this.parseOperationType();
    this.expectToken(Mm.COLON);
    const n = this.parseNamedType();
    return this.node(e, {
      kind: Im.OPERATION_TYPE_DEFINITION,
      operation: t,
      type: n,
    });
  }
  parseScalarTypeDefinition() {
    const e = this._lexer.token,
      t = this.parseDescription();
    this.expectKeyword("scalar");
    const n = this.parseName(),
      r = this.parseConstDirectives();
    return this.node(e, {
      kind: Im.SCALAR_TYPE_DEFINITION,
      description: t,
      name: n,
      directives: r,
    });
  }
  parseObjectTypeDefinition() {
    const e = this._lexer.token,
      t = this.parseDescription();
    this.expectKeyword("type");
    const n = this.parseName(),
      r = this.parseImplementsInterfaces(),
      o = this.parseConstDirectives(),
      i = this.parseFieldsDefinition();
    return this.node(e, {
      kind: Im.OBJECT_TYPE_DEFINITION,
      description: t,
      name: n,
      interfaces: r,
      directives: o,
      fields: i,
    });
  }
  parseImplementsInterfaces() {
    return this.expectOptionalKeyword("implements")
      ? this.delimitedMany(Mm.AMP, this.parseNamedType)
      : [];
  }
  parseFieldsDefinition() {
    return this.optionalMany(Mm.BRACE_L, this.parseFieldDefinition, Mm.BRACE_R);
  }
  parseFieldDefinition() {
    const e = this._lexer.token,
      t = this.parseDescription(),
      n = this.parseName(),
      r = this.parseArgumentDefs();
    this.expectToken(Mm.COLON);
    const o = this.parseTypeReference(),
      i = this.parseConstDirectives();
    return this.node(e, {
      kind: Im.FIELD_DEFINITION,
      description: t,
      name: n,
      arguments: r,
      type: o,
      directives: i,
    });
  }
  parseArgumentDefs() {
    return this.optionalMany(Mm.PAREN_L, this.parseInputValueDef, Mm.PAREN_R);
  }
  parseInputValueDef() {
    const e = this._lexer.token,
      t = this.parseDescription(),
      n = this.parseName();
    this.expectToken(Mm.COLON);
    const r = this.parseTypeReference();
    let o;
    this.expectOptionalToken(Mm.EQUALS) && (o = this.parseConstValueLiteral());
    const i = this.parseConstDirectives();
    return this.node(e, {
      kind: Im.INPUT_VALUE_DEFINITION,
      description: t,
      name: n,
      type: r,
      defaultValue: o,
      directives: i,
    });
  }
  parseInterfaceTypeDefinition() {
    const e = this._lexer.token,
      t = this.parseDescription();
    this.expectKeyword("interface");
    const n = this.parseName(),
      r = this.parseImplementsInterfaces(),
      o = this.parseConstDirectives(),
      i = this.parseFieldsDefinition();
    return this.node(e, {
      kind: Im.INTERFACE_TYPE_DEFINITION,
      description: t,
      name: n,
      interfaces: r,
      directives: o,
      fields: i,
    });
  }
  parseUnionTypeDefinition() {
    const e = this._lexer.token,
      t = this.parseDescription();
    this.expectKeyword("union");
    const n = this.parseName(),
      r = this.parseConstDirectives(),
      o = this.parseUnionMemberTypes();
    return this.node(e, {
      kind: Im.UNION_TYPE_DEFINITION,
      description: t,
      name: n,
      directives: r,
      types: o,
    });
  }
  parseUnionMemberTypes() {
    return this.expectOptionalToken(Mm.EQUALS)
      ? this.delimitedMany(Mm.PIPE, this.parseNamedType)
      : [];
  }
  parseEnumTypeDefinition() {
    const e = this._lexer.token,
      t = this.parseDescription();
    this.expectKeyword("enum");
    const n = this.parseName(),
      r = this.parseConstDirectives(),
      o = this.parseEnumValuesDefinition();
    return this.node(e, {
      kind: Im.ENUM_TYPE_DEFINITION,
      description: t,
      name: n,
      directives: r,
      values: o,
    });
  }
  parseEnumValuesDefinition() {
    return this.optionalMany(
      Mm.BRACE_L,
      this.parseEnumValueDefinition,
      Mm.BRACE_R
    );
  }
  parseEnumValueDefinition() {
    const e = this._lexer.token,
      t = this.parseDescription(),
      n = this.parseEnumValueName(),
      r = this.parseConstDirectives();
    return this.node(e, {
      kind: Im.ENUM_VALUE_DEFINITION,
      description: t,
      name: n,
      directives: r,
    });
  }
  parseEnumValueName() {
    if (
      "true" === this._lexer.token.value ||
      "false" === this._lexer.token.value ||
      "null" === this._lexer.token.value
    )
      throw Cm(
        this._lexer.source,
        this._lexer.token.start,
        `${gg(
          this._lexer.token
        )} is reserved and cannot be used for an enum value.`
      );
    return this.parseName();
  }
  parseInputObjectTypeDefinition() {
    const e = this._lexer.token,
      t = this.parseDescription();
    this.expectKeyword("input");
    const n = this.parseName(),
      r = this.parseConstDirectives(),
      o = this.parseInputFieldsDefinition();
    return this.node(e, {
      kind: Im.INPUT_OBJECT_TYPE_DEFINITION,
      description: t,
      name: n,
      directives: r,
      fields: o,
    });
  }
  parseInputFieldsDefinition() {
    return this.optionalMany(Mm.BRACE_L, this.parseInputValueDef, Mm.BRACE_R);
  }
  parseTypeSystemExtension() {
    const e = this._lexer.lookahead();
    if (e.kind === Mm.NAME)
      switch (e.value) {
        case "schema":
          return this.parseSchemaExtension();
        case "scalar":
          return this.parseScalarTypeExtension();
        case "type":
          return this.parseObjectTypeExtension();
        case "interface":
          return this.parseInterfaceTypeExtension();
        case "union":
          return this.parseUnionTypeExtension();
        case "enum":
          return this.parseEnumTypeExtension();
        case "input":
          return this.parseInputObjectTypeExtension();
      }
    throw this.unexpected(e);
  }
  parseSchemaExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("schema");
    const t = this.parseConstDirectives(),
      n = this.optionalMany(
        Mm.BRACE_L,
        this.parseOperationTypeDefinition,
        Mm.BRACE_R
      );
    if (0 === t.length && 0 === n.length) throw this.unexpected();
    return this.node(e, {
      kind: Im.SCHEMA_EXTENSION,
      directives: t,
      operationTypes: n,
    });
  }
  parseScalarTypeExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("scalar");
    const t = this.parseName(),
      n = this.parseConstDirectives();
    if (0 === n.length) throw this.unexpected();
    return this.node(e, {
      kind: Im.SCALAR_TYPE_EXTENSION,
      name: t,
      directives: n,
    });
  }
  parseObjectTypeExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("type");
    const t = this.parseName(),
      n = this.parseImplementsInterfaces(),
      r = this.parseConstDirectives(),
      o = this.parseFieldsDefinition();
    if (0 === n.length && 0 === r.length && 0 === o.length)
      throw this.unexpected();
    return this.node(e, {
      kind: Im.OBJECT_TYPE_EXTENSION,
      name: t,
      interfaces: n,
      directives: r,
      fields: o,
    });
  }
  parseInterfaceTypeExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("interface");
    const t = this.parseName(),
      n = this.parseImplementsInterfaces(),
      r = this.parseConstDirectives(),
      o = this.parseFieldsDefinition();
    if (0 === n.length && 0 === r.length && 0 === o.length)
      throw this.unexpected();
    return this.node(e, {
      kind: Im.INTERFACE_TYPE_EXTENSION,
      name: t,
      interfaces: n,
      directives: r,
      fields: o,
    });
  }
  parseUnionTypeExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("union");
    const t = this.parseName(),
      n = this.parseConstDirectives(),
      r = this.parseUnionMemberTypes();
    if (0 === n.length && 0 === r.length) throw this.unexpected();
    return this.node(e, {
      kind: Im.UNION_TYPE_EXTENSION,
      name: t,
      directives: n,
      types: r,
    });
  }
  parseEnumTypeExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("enum");
    const t = this.parseName(),
      n = this.parseConstDirectives(),
      r = this.parseEnumValuesDefinition();
    if (0 === n.length && 0 === r.length) throw this.unexpected();
    return this.node(e, {
      kind: Im.ENUM_TYPE_EXTENSION,
      name: t,
      directives: n,
      values: r,
    });
  }
  parseInputObjectTypeExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("input");
    const t = this.parseName(),
      n = this.parseConstDirectives(),
      r = this.parseInputFieldsDefinition();
    if (0 === n.length && 0 === r.length) throw this.unexpected();
    return this.node(e, {
      kind: Im.INPUT_OBJECT_TYPE_EXTENSION,
      name: t,
      directives: n,
      fields: r,
    });
  }
  parseDirectiveDefinition() {
    const e = this._lexer.token,
      t = this.parseDescription();
    this.expectKeyword("directive"), this.expectToken(Mm.AT);
    const n = this.parseName(),
      r = this.parseArgumentDefs(),
      o = this.expectOptionalKeyword("repeatable");
    this.expectKeyword("on");
    const i = this.parseDirectiveLocations();
    return this.node(e, {
      kind: Im.DIRECTIVE_DEFINITION,
      description: t,
      name: n,
      arguments: r,
      repeatable: o,
      locations: i,
    });
  }
  parseDirectiveLocations() {
    return this.delimitedMany(Mm.PIPE, this.parseDirectiveLocation);
  }
  parseDirectiveLocation() {
    const e = this._lexer.token,
      t = this.parseName();
    if (Object.prototype.hasOwnProperty.call(Lm, t.value)) return t;
    throw this.unexpected(e);
  }
  node(e, t) {
    return (
      !0 !== this._options.noLocation &&
        (t.loc = new Em(e, this._lexer.lastToken, this._lexer.source)),
      t
    );
  }
  peek(e) {
    return this._lexer.token.kind === e;
  }
  expectToken(e) {
    const t = this._lexer.token;
    if (t.kind === e) return this.advanceLexer(), t;
    throw Cm(this._lexer.source, t.start, `Expected ${vg(e)}, found ${gg(t)}.`);
  }
  expectOptionalToken(e) {
    return this._lexer.token.kind === e && (this.advanceLexer(), !0);
  }
  expectKeyword(e) {
    const t = this._lexer.token;
    if (t.kind !== Mm.NAME || t.value !== e)
      throw Cm(this._lexer.source, t.start, `Expected "${e}", found ${gg(t)}.`);
    this.advanceLexer();
  }
  expectOptionalKeyword(e) {
    const t = this._lexer.token;
    return t.kind === Mm.NAME && t.value === e && (this.advanceLexer(), !0);
  }
  unexpected(e) {
    const t = null != e ? e : this._lexer.token;
    return Cm(this._lexer.source, t.start, `Unexpected ${gg(t)}.`);
  }
  any(e, t, n) {
    this.expectToken(e);
    const r = [];
    for (; !this.expectOptionalToken(n); ) r.push(t.call(this));
    return r;
  }
  optionalMany(e, t, n) {
    if (this.expectOptionalToken(e)) {
      const e = [];
      do {
        e.push(t.call(this));
      } while (!this.expectOptionalToken(n));
      return e;
    }
    return [];
  }
  many(e, t, n) {
    this.expectToken(e);
    const r = [];
    do {
      r.push(t.call(this));
    } while (!this.expectOptionalToken(n));
    return r;
  }
  delimitedMany(e, t) {
    this.expectOptionalToken(e);
    const n = [];
    do {
      n.push(t.call(this));
    } while (this.expectOptionalToken(e));
    return n;
  }
  advanceLexer() {
    const { maxTokens: e } = this._options,
      t = this._lexer.advance();
    if (
      t.kind !== Mm.EOF &&
      (++this._tokenCounter, void 0 !== e && this._tokenCounter > e)
    )
      throw Cm(
        this._lexer.source,
        t.start,
        `Document contains more that ${e} tokens. Parsing aborted.`
      );
  }
}
function gg(e) {
  const t = e.value;
  return vg(e.kind) + (null != t ? ` "${t}"` : "");
}
function vg(e) {
  return (function (e) {
    return (
      e === Mm.BANG ||
      e === Mm.DOLLAR ||
      e === Mm.AMP ||
      e === Mm.PAREN_L ||
      e === Mm.PAREN_R ||
      e === Mm.SPREAD ||
      e === Mm.COLON ||
      e === Mm.EQUALS ||
      e === Mm.AT ||
      e === Mm.BRACKET_L ||
      e === Mm.BRACKET_R ||
      e === Mm.BRACE_L ||
      e === Mm.PIPE ||
      e === Mm.BRACE_R
    );
  })(e)
    ? `"${e}"`
    : e;
}
const yg = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function bg(e) {
  return _g[e.charCodeAt(0)];
}
const _g = [
    "\\u0000",
    "\\u0001",
    "\\u0002",
    "\\u0003",
    "\\u0004",
    "\\u0005",
    "\\u0006",
    "\\u0007",
    "\\b",
    "\\t",
    "\\n",
    "\\u000B",
    "\\f",
    "\\r",
    "\\u000E",
    "\\u000F",
    "\\u0010",
    "\\u0011",
    "\\u0012",
    "\\u0013",
    "\\u0014",
    "\\u0015",
    "\\u0016",
    "\\u0017",
    "\\u0018",
    "\\u0019",
    "\\u001A",
    "\\u001B",
    "\\u001C",
    "\\u001D",
    "\\u001E",
    "\\u001F",
    "",
    "",
    '\\"',
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "\\\\",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "\\u007F",
    "\\u0080",
    "\\u0081",
    "\\u0082",
    "\\u0083",
    "\\u0084",
    "\\u0085",
    "\\u0086",
    "\\u0087",
    "\\u0088",
    "\\u0089",
    "\\u008A",
    "\\u008B",
    "\\u008C",
    "\\u008D",
    "\\u008E",
    "\\u008F",
    "\\u0090",
    "\\u0091",
    "\\u0092",
    "\\u0093",
    "\\u0094",
    "\\u0095",
    "\\u0096",
    "\\u0097",
    "\\u0098",
    "\\u0099",
    "\\u009A",
    "\\u009B",
    "\\u009C",
    "\\u009D",
    "\\u009E",
    "\\u009F",
  ],
  wg = Object.freeze({});
function Dg(e, t) {
  const n = e[t];
  return "object" == typeof n
    ? n
    : "function" == typeof n
    ? { enter: n, leave: void 0 }
    : { enter: e.enter, leave: e.leave };
}
function xg(e) {
  return (function (e, t, n = Sm) {
    const r = new Map();
    for (const v of Object.values(Im)) r.set(v, Dg(t, v));
    let o,
      i,
      s,
      a = Array.isArray(e),
      l = [e],
      c = -1,
      u = [],
      p = e;
    const d = [],
      f = [];
    do {
      c++;
      const e = c === l.length,
        v = e && 0 !== u.length;
      if (e) {
        if (
          ((i = 0 === f.length ? void 0 : d[d.length - 1]),
          (p = s),
          (s = f.pop()),
          v)
        )
          if (a) {
            p = p.slice();
            let e = 0;
            for (const [t, n] of u) {
              const r = t - e;
              null === n ? (p.splice(r, 1), e++) : (p[r] = n);
            }
          } else {
            p = Object.defineProperties(
              {},
              Object.getOwnPropertyDescriptors(p)
            );
            for (const [e, t] of u) p[e] = t;
          }
        (c = o.index),
          (l = o.keys),
          (u = o.edits),
          (a = o.inArray),
          (o = o.prev);
      } else if (s) {
        if (((i = a ? c : l[c]), (p = s[i]), null == p)) continue;
        d.push(i);
      }
      let y;
      if (!Array.isArray(p)) {
        var h, m;
        Om(p) || vm(!1, `Invalid AST Node: ${pg(p)}.`);
        const n = e
          ? null === (h = r.get(p.kind)) || void 0 === h
            ? void 0
            : h.leave
          : null === (m = r.get(p.kind)) || void 0 === m
          ? void 0
          : m.enter;
        if (((y = null == n ? void 0 : n.call(t, p, i, s, d, f)), y === wg))
          break;
        if (!1 === y) {
          if (!e) {
            d.pop();
            continue;
          }
        } else if (void 0 !== y && (u.push([i, y]), !e)) {
          if (!Om(y)) {
            d.pop();
            continue;
          }
          p = y;
        }
      }
      var g;
      void 0 === y && v && u.push([i, p]),
        e
          ? d.pop()
          : ((o = { inArray: a, index: c, keys: l, edits: u, prev: o }),
            (a = Array.isArray(p)),
            (l = a ? p : null !== (g = n[p.kind]) && void 0 !== g ? g : []),
            (c = -1),
            (u = []),
            s && f.push(s),
            (s = p));
    } while (void 0 !== o);
    return 0 !== u.length ? u[u.length - 1][1] : e;
  })(e, kg);
}
const kg = {
  Name: { leave: (e) => e.value },
  Variable: { leave: (e) => "$" + e.name },
  Document: { leave: (e) => Cg(e.definitions, "\n\n") },
  OperationDefinition: {
    leave(e) {
      const t = Tg("(", Cg(e.variableDefinitions, ", "), ")"),
        n = Cg([e.operation, Cg([e.name, t]), Cg(e.directives, " ")], " ");
      return ("query" === n ? "" : n + " ") + e.selectionSet;
    },
  },
  VariableDefinition: {
    leave: ({ variable: e, type: t, defaultValue: n, directives: r }) =>
      e + ": " + t + Tg(" = ", n) + Tg(" ", Cg(r, " ")),
  },
  SelectionSet: { leave: ({ selections: e }) => Eg(e) },
  Field: {
    leave({ alias: e, name: t, arguments: n, directives: r, selectionSet: o }) {
      const i = Tg("", e, ": ") + t;
      let s = i + Tg("(", Cg(n, ", "), ")");
      return (
        s.length > 80 && (s = i + Tg("(\n", Sg(Cg(n, "\n")), "\n)")),
        Cg([s, Cg(r, " "), o], " ")
      );
    },
  },
  Argument: { leave: ({ name: e, value: t }) => e + ": " + t },
  FragmentSpread: {
    leave: ({ name: e, directives: t }) => "..." + e + Tg(" ", Cg(t, " ")),
  },
  InlineFragment: {
    leave: ({ typeCondition: e, directives: t, selectionSet: n }) =>
      Cg(["...", Tg("on ", e), Cg(t, " "), n], " "),
  },
  FragmentDefinition: {
    leave: ({
      name: e,
      typeCondition: t,
      variableDefinitions: n,
      directives: r,
      selectionSet: o,
    }) =>
      `fragment ${e}${Tg("(", Cg(n, ", "), ")")} on ${t} ${Tg(
        "",
        Cg(r, " "),
        " "
      )}` + o,
  },
  IntValue: { leave: ({ value: e }) => e },
  FloatValue: { leave: ({ value: e }) => e },
  StringValue: {
    leave: ({ value: e, block: t }) =>
      t
        ? (function (e) {
            const t = e.replace(/"""/g, '\\"""'),
              n = t.split(/\r\n|[\n\r]/g),
              r = 1 === n.length,
              o =
                n.length > 1 &&
                n.slice(1).every((e) => 0 === e.length || jm(e.charCodeAt(0))),
              i = t.endsWith('\\"""'),
              s = e.endsWith('"') && !i,
              a = e.endsWith("\\"),
              l = s || a,
              c = !r || e.length > 70 || l || o || i;
            let u = "";
            const p = r && jm(e.charCodeAt(0));
            return (
              ((c && !p) || o) && (u += "\n"),
              (u += t),
              (c || l) && (u += "\n"),
              '"""' + u + '"""'
            );
          })(e)
        : `"${e.replace(yg, bg)}"`,
  },
  BooleanValue: { leave: ({ value: e }) => (e ? "true" : "false") },
  NullValue: { leave: () => "null" },
  EnumValue: { leave: ({ value: e }) => e },
  ListValue: { leave: ({ values: e }) => "[" + Cg(e, ", ") + "]" },
  ObjectValue: { leave: ({ fields: e }) => "{" + Cg(e, ", ") + "}" },
  ObjectField: { leave: ({ name: e, value: t }) => e + ": " + t },
  Directive: {
    leave: ({ name: e, arguments: t }) => "@" + e + Tg("(", Cg(t, ", "), ")"),
  },
  NamedType: { leave: ({ name: e }) => e },
  ListType: { leave: ({ type: e }) => "[" + e + "]" },
  NonNullType: { leave: ({ type: e }) => e + "!" },
  SchemaDefinition: {
    leave: ({ description: e, directives: t, operationTypes: n }) =>
      Tg("", e, "\n") + Cg(["schema", Cg(t, " "), Eg(n)], " "),
  },
  OperationTypeDefinition: {
    leave: ({ operation: e, type: t }) => e + ": " + t,
  },
  ScalarTypeDefinition: {
    leave: ({ description: e, name: t, directives: n }) =>
      Tg("", e, "\n") + Cg(["scalar", t, Cg(n, " ")], " "),
  },
  ObjectTypeDefinition: {
    leave: ({
      description: e,
      name: t,
      interfaces: n,
      directives: r,
      fields: o,
    }) =>
      Tg("", e, "\n") +
      Cg(["type", t, Tg("implements ", Cg(n, " & ")), Cg(r, " "), Eg(o)], " "),
  },
  FieldDefinition: {
    leave: ({
      description: e,
      name: t,
      arguments: n,
      type: r,
      directives: o,
    }) =>
      Tg("", e, "\n") +
      t +
      (Ag(n) ? Tg("(\n", Sg(Cg(n, "\n")), "\n)") : Tg("(", Cg(n, ", "), ")")) +
      ": " +
      r +
      Tg(" ", Cg(o, " ")),
  },
  InputValueDefinition: {
    leave: ({
      description: e,
      name: t,
      type: n,
      defaultValue: r,
      directives: o,
    }) => Tg("", e, "\n") + Cg([t + ": " + n, Tg("= ", r), Cg(o, " ")], " "),
  },
  InterfaceTypeDefinition: {
    leave: ({
      description: e,
      name: t,
      interfaces: n,
      directives: r,
      fields: o,
    }) =>
      Tg("", e, "\n") +
      Cg(
        ["interface", t, Tg("implements ", Cg(n, " & ")), Cg(r, " "), Eg(o)],
        " "
      ),
  },
  UnionTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, types: r }) =>
      Tg("", e, "\n") +
      Cg(["union", t, Cg(n, " "), Tg("= ", Cg(r, " | "))], " "),
  },
  EnumTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, values: r }) =>
      Tg("", e, "\n") + Cg(["enum", t, Cg(n, " "), Eg(r)], " "),
  },
  EnumValueDefinition: {
    leave: ({ description: e, name: t, directives: n }) =>
      Tg("", e, "\n") + Cg([t, Cg(n, " ")], " "),
  },
  InputObjectTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, fields: r }) =>
      Tg("", e, "\n") + Cg(["input", t, Cg(n, " "), Eg(r)], " "),
  },
  DirectiveDefinition: {
    leave: ({
      description: e,
      name: t,
      arguments: n,
      repeatable: r,
      locations: o,
    }) =>
      Tg("", e, "\n") +
      "directive @" +
      t +
      (Ag(n) ? Tg("(\n", Sg(Cg(n, "\n")), "\n)") : Tg("(", Cg(n, ", "), ")")) +
      (r ? " repeatable" : "") +
      " on " +
      Cg(o, " | "),
  },
  SchemaExtension: {
    leave: ({ directives: e, operationTypes: t }) =>
      Cg(["extend schema", Cg(e, " "), Eg(t)], " "),
  },
  ScalarTypeExtension: {
    leave: ({ name: e, directives: t }) =>
      Cg(["extend scalar", e, Cg(t, " ")], " "),
  },
  ObjectTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: n, fields: r }) =>
      Cg(
        ["extend type", e, Tg("implements ", Cg(t, " & ")), Cg(n, " "), Eg(r)],
        " "
      ),
  },
  InterfaceTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: n, fields: r }) =>
      Cg(
        [
          "extend interface",
          e,
          Tg("implements ", Cg(t, " & ")),
          Cg(n, " "),
          Eg(r),
        ],
        " "
      ),
  },
  UnionTypeExtension: {
    leave: ({ name: e, directives: t, types: n }) =>
      Cg(["extend union", e, Cg(t, " "), Tg("= ", Cg(n, " | "))], " "),
  },
  EnumTypeExtension: {
    leave: ({ name: e, directives: t, values: n }) =>
      Cg(["extend enum", e, Cg(t, " "), Eg(n)], " "),
  },
  InputObjectTypeExtension: {
    leave: ({ name: e, directives: t, fields: n }) =>
      Cg(["extend input", e, Cg(t, " "), Eg(n)], " "),
  },
};
function Cg(e, t = "") {
  var n;
  return null !== (n = null == e ? void 0 : e.filter((e) => e).join(t)) &&
    void 0 !== n
    ? n
    : "";
}
function Eg(e) {
  return Tg("{\n", Sg(Cg(e, "\n")), "\n}");
}
function Tg(e, t, n = "") {
  return null != t && "" !== t ? e + t + n : "";
}
function Sg(e) {
  return Tg("  ", e.replace(/\n/g, "\n  "));
}
function Ag(e) {
  var t;
  return (
    null !== (t = null == e ? void 0 : e.some((e) => e.includes("\n"))) &&
    void 0 !== t &&
    t
  );
}
const Og = "Accept",
  Pg = "Content-Type",
  Fg = "application/json",
  Lg = "application/graphql-response+json",
  Ng = (e) => e.replace(/([\s,]|#[^\n\r]+)+/g, " ").trim(),
  Ig = (e) => {
    try {
      if (Array.isArray(e))
        return { _tag: "Batch", executionResults: e.map(Rg) };
      if (gm(e)) return { _tag: "Single", executionResult: Rg(e) };
      throw new Error(
        `Invalid execution result: result is not object or array. \nGot:\n${String(
          e
        )}`
      );
    } catch (iI) {
      return iI;
    }
  },
  Rg = (e) => {
    if ("object" != typeof e || null === e)
      throw new Error("Invalid execution result: result is not object");
    let t, n, r;
    if ("errors" in e) {
      if (!gm(e.errors) && !Array.isArray(e.errors))
        throw new Error(
          "Invalid execution result: errors is not plain object OR array"
        );
      t = e.errors;
    }
    if ("data" in e) {
      if (!gm(e.data) && null !== e.data)
        throw new Error("Invalid execution result: data is not plain object");
      n = e.data;
    }
    if ("extensions" in e) {
      if (!gm(e.extensions))
        throw new Error(
          "Invalid execution result: extensions is not plain object"
        );
      r = e.extensions;
    }
    return { data: n, errors: t, extensions: r };
  },
  Mg = (e) =>
    Array.isArray(e.errors) ? e.errors.length > 0 : Boolean(e.errors),
  Bg = (e) =>
    "object" == typeof e &&
    null !== e &&
    "kind" in e &&
    e.kind === Im.OPERATION_DEFINITION,
  jg = (e, t) => {
    const n = "string" == typeof e ? e : xg(e);
    let r,
      o = !1;
    if (t) return { expression: n, isMutation: o, operationName: r };
    const i = ((e) => {
      try {
        const t = e();
        return hm(t) ? t.catch((e) => fm(e)) : t;
      } catch (t) {
        return fm(t);
      }
    })(() =>
      "string" == typeof e
        ? (function (e, t) {
            const n = new mg(e, t),
              r = n.parseDocument();
            return (
              Object.defineProperty(r, "tokenCount", {
                enumerable: !1,
                value: n.tokenCount,
              }),
              r
            );
          })(e)
        : e
    );
    return i instanceof Error
      ? { expression: n, isMutation: o, operationName: r }
      : ((r = ((e) => {
          var t;
          let n;
          const r = e.definitions.filter(Bg);
          return (
            1 === r.length && (n = null == (t = r[0].name) ? void 0 : t.value),
            n
          );
        })(i)),
        (o = ((e) => {
          let t = !1;
          const n = e.definitions.filter(Bg);
          return 1 === n.length && (t = n[0].operation === Pm.MUTATION), t;
        })(i)),
        { expression: n, operationName: r, isMutation: o });
  },
  $g = JSON,
  Ug = async (e) => {
    const t = {
        ...e,
        method:
          "Single" === e.request._tag
            ? e.request.document.isMutation
              ? "POST"
              : lm(e.method ?? "post")
            : e.request.hasMutations
            ? "POST"
            : lm(e.method ?? "post"),
        fetchOptions: {
          ...e.fetchOptions,
          errorPolicy: e.fetchOptions.errorPolicy ?? "none",
        },
      },
      n = zg(t.method),
      r = await n(t);
    if (!r.ok)
      return new am(
        { status: r.status, headers: r.headers },
        {
          query:
            "Single" === e.request._tag
              ? e.request.document.expression
              : e.request.query,
          variables: e.request.variables,
        }
      );
    const o = await Hg(r, e.fetchOptions.jsonSerializer ?? $g);
    if (o instanceof Error) throw o;
    const i = { status: r.status, headers: r.headers };
    if (
      ((e) =>
        "Batch" === e._tag
          ? e.executionResults.some(Mg)
          : Mg(e.executionResult))(o) &&
      "none" === t.fetchOptions.errorPolicy
    ) {
      const t =
        "Batch" === o._tag
          ? { ...o.executionResults, ...i }
          : { ...o.executionResult, ...i };
      return new am(t, {
        query:
          "Single" === e.request._tag
            ? e.request.document.expression
            : e.request.query,
        variables: e.request.variables,
      });
    }
    switch (o._tag) {
      case "Single":
        return { ...i, ...qg(t)(o.executionResult) };
      case "Batch":
        return { ...i, data: o.executionResults.map(qg(t)) };
      default:
        mm(o);
    }
  },
  qg = (e) => (t) => ({
    extensions: t.extensions,
    data: t.data,
    errors: "all" === e.fetchOptions.errorPolicy ? t.errors : void 0,
  }),
  Hg = async (e, t) => {
    const n = e.headers.get(Pg),
      r = await e.text();
    return n &&
      ((e) => {
        const t = e.toLowerCase();
        return t.includes(Lg) || t.includes(Fg);
      })(n)
      ? Ig(t.parse(r))
      : Ig(r);
  },
  zg = (e) => async (t) => {
    const n = new Headers(t.headers);
    let r,
      o = null;
    if ((n.has(Og) || n.set(Og, [Lg, Fg].join(", ")), "POST" === e)) {
      (r = (t.fetchOptions.jsonSerializer ?? $g).stringify(Vg(t))),
        "string" != typeof r || n.has(Pg) || n.set(Pg, Fg);
    } else o = Wg(t);
    const i = { method: e, headers: n, body: r, ...t.fetchOptions };
    let s = new URL(t.url),
      a = i;
    if (t.middleware) {
      const e = await Promise.resolve(
          t.middleware({
            ...i,
            url: t.url,
            operationName:
              "Single" === t.request._tag
                ? t.request.document.operationName
                : void 0,
            variables: t.request.variables,
          })
        ),
        { url: n, ...r } = e;
      (s = new URL(n)), (a = r);
    }
    o &&
      o.forEach((e, t) => {
        s.searchParams.append(t, e);
      });
    const l = t.fetch ?? fetch;
    return await l(s, a);
  },
  Vg = (e) => {
    switch (e.request._tag) {
      case "Single":
        return {
          query: e.request.document.expression,
          variables: e.request.variables,
          operationName: e.request.document.operationName,
        };
      case "Batch":
        return um(e.request.query, e.request.variables ?? []).map(([e, t]) => ({
          query: e,
          variables: t,
        }));
      default:
        throw mm(e.request);
    }
  },
  Wg = (e) => {
    var t;
    const n = e.fetchOptions.jsonSerializer ?? $g,
      r = new URLSearchParams();
    switch (e.request._tag) {
      case "Single":
        return (
          r.append("query", Ng(e.request.document.expression)),
          e.request.variables &&
            r.append("variables", n.stringify(e.request.variables)),
          e.request.document.operationName &&
            r.append("operationName", e.request.document.operationName),
          r
        );
      case "Batch": {
        const o =
            (null == (t = e.request.variables)
              ? void 0
              : t.map((e) => n.stringify(e))) ?? [],
          i = e.request.query.map(Ng),
          s = um(i, o).map(([e, t]) => ({ query: e, variables: t }));
        return r.append("query", n.stringify(s)), r;
      }
      default:
        throw mm(e.request);
    }
  };
class Yg {
  constructor(e, n = {}) {
    t(this, "url"),
      t(this, "requestConfig"),
      t(this, "rawRequest", async (...e) => {
        const [t, n, r] = e,
          o = ((e, t, n) =>
            e.query
              ? e
              : { query: e, variables: t, requestHeaders: n, signal: void 0 })(
            t,
            n,
            r
          ),
          {
            headers: i,
            fetch: s = globalThis.fetch,
            method: a = "POST",
            requestMiddleware: l,
            responseMiddleware: c,
            excludeOperationName: u,
            ...p
          } = this.requestConfig,
          { url: d } = this;
        void 0 !== o.signal && (p.signal = o.signal);
        const f = jg(o.query, u),
          h = await Ug({
            url: d,
            request: { _tag: "Single", document: f, variables: o.variables },
            headers: { ...pm(cm(i)), ...pm(o.requestHeaders) },
            fetch: s,
            method: a,
            fetchOptions: p,
            middleware: l,
          });
        if (
          (c &&
            (await c(h, {
              operationName: f.operationName,
              variables: n,
              url: this.url,
            })),
          h instanceof Error)
        )
          throw h;
        return h;
      }),
      (this.url = e),
      (this.requestConfig = n);
  }
  async request(e, ...t) {
    const [n, r] = t,
      o = Xg(e, n, r),
      {
        headers: i,
        fetch: s = globalThis.fetch,
        method: a = "POST",
        requestMiddleware: l,
        responseMiddleware: c,
        excludeOperationName: u,
        ...p
      } = this.requestConfig,
      { url: d } = this;
    void 0 !== o.signal && (p.signal = o.signal);
    const f = jg(o.document, u),
      h = await Ug({
        url: d,
        request: { _tag: "Single", document: f, variables: o.variables },
        headers: { ...pm(cm(i)), ...pm(o.requestHeaders) },
        fetch: s,
        method: a,
        fetchOptions: p,
        middleware: l,
      });
    if (
      (c &&
        (await c(h, {
          operationName: f.operationName,
          variables: o.variables,
          url: this.url,
        })),
      h instanceof Error)
    )
      throw h;
    return h.data;
  }
  async batchRequests(e, t) {
    const n = ((e, t) =>
        e.documents ? e : { documents: e, requestHeaders: t, signal: void 0 })(
        e,
        t
      ),
      { headers: r, excludeOperationName: o, ...i } = this.requestConfig;
    void 0 !== n.signal && (i.signal = n.signal);
    const s = n.documents.map(({ document: e }) => jg(e, o)),
      a = s.map(({ expression: e }) => e),
      l = s.some(({ isMutation: e }) => e),
      c = n.documents.map(({ variables: e }) => e),
      u = await Ug({
        url: this.url,
        request: {
          _tag: "Batch",
          operationName: void 0,
          query: a,
          hasMutations: l,
          variables: c,
        },
        headers: { ...pm(cm(r)), ...pm(n.requestHeaders) },
        fetch: this.requestConfig.fetch ?? globalThis.fetch,
        method: this.requestConfig.method || "POST",
        fetchOptions: i,
        middleware: this.requestConfig.requestMiddleware,
      });
    if (
      (this.requestConfig.responseMiddleware &&
        (await this.requestConfig.responseMiddleware(u, {
          operationName: void 0,
          variables: c,
          url: this.url,
        })),
      u instanceof Error)
    )
      throw u;
    return u.data;
  }
  setHeaders(e) {
    return (this.requestConfig.headers = e), this;
  }
  setHeader(e, t) {
    const { headers: n } = this.requestConfig;
    return n ? (n[e] = t) : (this.requestConfig.headers = { [e]: t }), this;
  }
  setEndpoint(e) {
    return (this.url = e), this;
  }
}
const Xg = (e, t, n) =>
    e.document
      ? e
      : { document: e, variables: t, requestHeaders: n, signal: void 0 },
  Gg = $l(() => {
    var e;
    const t = ql();
    if (!(null == t ? void 0 : t._gqlState)) {
      t._gqlState = Et({});
      const n = Hl(),
        { clients: r } =
          null == (e = null == n ? void 0 : n.public)
            ? void 0
            : e["graphql-client"],
        o = Object.values(r || {})
          .flatMap((e) => (null == e ? void 0 : e.proxyHeaders))
          .filter((e, t, n) => Boolean(e) && n.indexOf(e) === t);
      o.includes("cookie") || o.push("cookie");
      const i = void 0;
      for (const [e, s] of Object.entries(r || {})) {
        const n = (null == s ? void 0 : s.clientHost) || s.host,
          r =
            (null == s ? void 0 : s.proxyCookies) &&
            !!(null == i ? void 0 : i.cookie);
        let o = null == s ? void 0 : s.headers;
        const a = {};
        (null == o ? void 0 : o.serverOnly) &&
          ((o = { ...o }), delete o.serverOnly);
        for (const e of (null == s ? void 0 : s.proxyHeaders) || []);
        const l = {
          headers: { ...o, ...a, ...r },
          ...(null == s ? void 0 : s.corsOptions),
          ...(null == s ? void 0 : s.fetchOptions),
        };
        t._gqlState.value[e] = {
          options: l,
          instance: new Yg(n, {
            ...((null == s ? void 0 : s.preferGETQueries) && {
              method: "GET",
              jsonSerializer: { parse: JSON.parse, stringify: JSON.stringify },
            }),
            requestMiddleware: async (n) => {
              var r, o, i, a, l, c, u, p, d, f, h, m, g, v, y, b, _;
              const w = Et();
              await t.callHook("gql:auth:init", { token: w, client: e });
              const D = Cc(
                (null == (o = null == (r = t._gqlState.value) ? void 0 : r[e])
                  ? void 0
                  : o.options) || {},
                { headers: {} }
              );
              if (
                (w.value ||
                  (w.value =
                    null == (i = null == D ? void 0 : D.token)
                      ? void 0
                      : i.value),
                void 0 === w.value && "object" == typeof s.tokenStorage)
              )
                if (
                  "cookie" === (null == (a = s.tokenStorage) ? void 0 : a.mode)
                )
                  w.value = Qf(s.tokenStorage.name).value || void 0;
                else if (
                  "localStorage" ===
                  (null == (l = s.tokenStorage) ? void 0 : l.mode)
                ) {
                  const e = localStorage.getItem(s.tokenStorage.name);
                  e && (w.value = e);
                }
              if (
                (void 0 === w.value &&
                  (w.value =
                    null == (c = null == s ? void 0 : s.token)
                      ? void 0
                      : c.value),
                w.value)
              ) {
                w.value = w.value.trim();
                const e =
                    w.value ===
                    (null == (u = null == D ? void 0 : D.token)
                      ? void 0
                      : u.value)
                      ? (null == (p = null == D ? void 0 : D.token)
                          ? void 0
                          : p.name) ||
                        (null == (d = null == s ? void 0 : s.token)
                          ? void 0
                          : d.name)
                      : null == (f = null == s ? void 0 : s.token)
                      ? void 0
                      : f.name,
                  t =
                    w.value ===
                    (null == (h = null == D ? void 0 : D.token)
                      ? void 0
                      : h.value)
                      ? null ===
                        (null == (m = null == D ? void 0 : D.token)
                          ? void 0
                          : m.type)
                        ? null
                        : (null == (g = null == D ? void 0 : D.token)
                            ? void 0
                            : g.type) ||
                          (null == (v = null == s ? void 0 : s.token)
                            ? void 0
                            : v.type)
                      : null == (y = null == s ? void 0 : s.token)
                      ? void 0
                      : y.type,
                  n = !!(null ==
                  (_ = null == (b = w.value) ? void 0 : b.match(/^[a-z]+\s/i))
                    ? void 0
                    : _[0]);
                D.headers[e] = n ? w.value : t ? `${t} ${w.value}` : w.value;
              }
              return (
                (null == D ? void 0 : D.token) && delete D.token,
                Cc(D, n, {
                  headers: {
                    "Content-Type": "application/json",
                    Accept:
                      "application/graphql-response+json, application/json",
                  },
                })
              );
            },
            ...(null == s ? void 0 : s.fetchOptions),
          }),
        };
      }
    }
  }),
  Kg = "undefined" != typeof window,
  Jg = (e, t = !1) => (t ? Symbol.for(e) : Symbol(e)),
  Qg = (e) =>
    JSON.stringify(e)
      .replace(/\u2028/g, "\\u2028")
      .replace(/\u2029/g, "\\u2029")
      .replace(/\u0027/g, "\\u0027"),
  Zg = (e) => "number" == typeof e && isFinite(e),
  ev = (e) => "[object RegExp]" === gv(e),
  tv = (e) => vv(e) && 0 === Object.keys(e).length,
  nv = Object.assign,
  rv = Object.create,
  ov = (e = null) => rv(e);
let iv;
const sv = () =>
  iv ||
  (iv =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : ov());
function av(e) {
  return e
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
const lv = Object.prototype.hasOwnProperty;
function cv(e, t) {
  return lv.call(e, t);
}
const uv = Array.isArray,
  pv = (e) => "function" == typeof e,
  dv = (e) => "string" == typeof e,
  fv = (e) => "boolean" == typeof e,
  hv = (e) => null !== e && "object" == typeof e,
  mv = Object.prototype.toString,
  gv = (e) => mv.call(e),
  vv = (e) => "[object Object]" === gv(e);
function yv(e, t = "") {
  return e.reduce((e, n, r) => (0 === r ? e + n : e + t + n), "");
}
function bv(e, t) {}
const _v = (e) => !hv(e) || uv(e);
function wv(e, t) {
  if (_v(e) || _v(t)) throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: e, des: t } = n.pop();
    Object.keys(e).forEach((r) => {
      "__proto__" !== r &&
        (hv(e[r]) && !hv(t[r]) && (t[r] = Array.isArray(e[r]) ? [] : ov()),
        _v(t[r]) || _v(e[r])
          ? (t[r] = e[r])
          : n.push({ src: e[r], des: t[r] }));
    });
  }
}
const Dv = {
    meta: {
      title: {
        t: 0,
        b: { t: 2, i: [{ t: 3 }], s: "Regenerate the Capay Valley." },
      },
      description: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "We are the Capay Valley.",
        },
      },
    },
    comingSoon: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Coming soon" } },
    next: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Next" } },
    nav: {
      theProject: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "THE FACTS" } },
      impactInAction: {
        t: 0,
        b: { t: 2, i: [{ t: 3 }], s: "Impact in Action" },
      },
      joinTheJourney: {
        t: 0,
        b: { t: 2, i: [{ t: 3 }], s: "Join the Journey" },
      },
      contact: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Contact" } },
    },
    homeBlur: {
      t: 0,
      b: {
        t: 2,
        i: [{ t: 3 }],
        s: "Drinking ourselves out of house and home.",
      },
    },
    homeAbout: {
      text1: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "California is facing a severe groundwater crisis characterized by depletion of aquifers due to overuse, particularly in agriculture, leading to land subsidence and water scarcity.",
        },
      },
      text2: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "Groundwater levels in many California basins, especially in the Central Valley, have been declining for decades, with rates of depletion accelerating in recent years. As groundwater is pumped, the land surface sinks due to the compaction of underlying soil, causing damage to infrastructure and altering the landscape. Thousands of wells have gone dry as groundwater levels decline, impacting communities and farmers.",
        },
      },
      text3: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "Groundwater sustainability plans (GSPs) detail the extent of groundwater overdraft in each basin, the local impacts of this overdraft, and strategies to achieve sustainability. In some southern Central Valley basins, the state has found that GSPs do not adequately address undesirable results of pumping; hearings are underway to determine whether basins will be put under probation, with State Water Board oversight.",
        },
      },
      verticalButton: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "The Facts" } },
    },
    homeSentence: {
      t: 0,
      b: {
        t: 2,
        i: [{ t: 3 }],
        s: "Here in the Capay Valley the real consequences of this groundwater crisis are being felt, but also addressed. Here are some of our initiatives.",
      },
    },
    homeProjects: {
      text: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "There is obviously no easy solution to this crisis, but also, neither is there is consensus as to how to mitigate it. Here in Capay, we have started following initiatives to try and overcome these issues.",
        },
      },
      verticalButton: {
        t: 0,
        b: { t: 2, i: [{ t: 3 }], s: "All initiatives" },
      },
    },
    homePodcast: {
      sentence: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Planting the seeds of change." } },
      text: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "As part of the Capay transmedia Situation, our podcast series delves into the stories of those looking for solutions to a sustainable future with unique and surprising perspectives. Each episode features conversations with visionaries, activists and innovators that challenge the status quo and make you rethink the way we live.",
        },
      },
      thePodcast: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "The <br />Podcast" } },
      thePodcastText: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "Dive into the minds of visionaries leading groundbreaking initiatives. Hear their stories and learn how they’re creating real change across the world.",
        },
      },
      playSpotify: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Play on Spotify" } },
      theImpactHubText: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "Help us give a voice to the solutions transforming the world: support our podcast and be part of the change.",
        },
      },
      viewMore: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "View more" } },
      theImpactHub: {
        t: 0,
        b: { t: 2, i: [{ t: 3 }], s: "The <br />Crowdfunding" },
      },
    },
    about: {
      right: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "Let’s imagine new futures and the strength to bring them to life",
        },
      },
      point1: {
        title: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "The <br />Situation" } },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: '<p class="mb-74">\n          Groundwater is a vital, but threatened, component\n          of California’s water supply.\n          On average, groundwater basins provide approximately 40% of the water used by California’s farms and communities, and significantly more in dry years. Many communities rely entirely on groundwater for drinking water, and it is a critical resource for many Central Valley and coastal farmers.\n        <p>\n          In some basins, groundwater pumping has exceeded replenishment for decades, causing groundwater depletion or “overdraft.” Many basins also face challenges with salt or contaminants in groundwater.\n        <p class="mb-74">\n          Groundwater use was largely unregulated by the state until the passage of the 2014 Sustainable Groundwater Management Act (SGMA). This law requires local agencies to address the undesirable impacts of overpumping and to bring their basins into balance by ending long-term overdraft.</p>\n        </p>',
          },
        },
      },
      point2: {
        title: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Meet the SGMA" } },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: '<p class="mb-74">\n          Prior to SGMA, some areas—including many cities in Southern California and Silicon Valley—had created local authorities to regulate pumping and charge fees to fund groundwater replenishment programs.\n        <p class="mb-74">\n          SGMA now requires local agencies in other parts of the state to manage their basins sustainably. While SGMA gives agencies until the early 2040s to achieve this goal, they must prevent significant undesirable results of pumping along the way.\n        </p>\n               <p class="mb-74">\n          The biggest challenges lie in “critically overdrafted” basins, which have the largest imbalances. This includes much of the southern Central Valley—California’s largest farming region—where overdr\n        </p>\n   ',
          },
        },
      },
      point3: {
        title: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Beyond the Situation" } },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: '<p class="mb-74">\n          Capay is more than a Situation series; it’s a transmedia\n          transformative projects, and a dedicated section for exploring the\n          initiatives featured in each episode. Capay invites you not only to\n          watch but to participate in the movements shaping our future.\n        </p>\n\n        <h3>The Podcast</h3>\n        <p>\n          The Podcast is the space where we are going to talk about everything\n          that the media tends to forget when it comes to the climate crisis,\n          but which is key if we really want to change the rules of the game....\n          because yes!...we can change the rules: dampen climate change, protect\n          biodiversity or end extreme inequality. We will even touch on topics\n          such as “time poverty”, the 15-hour work week or how to rethink the\n          economy based on the citizen happiness index.<br /><br />\n          We will have a wide range of guests to offer you fresh perspectives,\n          surprising ideas and conversations that will make you rethink many\n          things.\n        </p>',
          },
        },
        text2: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: '<h3>Crowdfunding</h3>\n        <p class="mb-0">\n          This transmedia project is not just another Situation: it is a piece\n          within a global movement that seeks to change current dynamics and\n          ensure a livable planet for present and future generations. Changing\n          the world is not something that can be done alone; it requires a\n          collective effort. Collaboration is essential for any real\n          transformation, and diversity of voices and perspectives is key to\n          finding innovative solutions.<br /><br />We want this project to\n          reflect that spirit of co-creation. We believe that you also have\n          ideas, projects and reflections that can enrich the world of Capay.\n          This crowdfunding is a space to create together.<br /><br />Every euro\n          we raise will be carefully allocated to different areas of the project\n          to ensure the highest quality production and maximize its impact.\n        </p>',
          },
        },
      },
    },
    projects: {
      showList: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Show list" } },
    },
    project: {
      startDate: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Start date" } },
      city: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "City" } },
      scope: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Scope" } },
      impact: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Impact" } },
      website: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Website" } },
      socialMedia: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Social Media" } },
    },
    footer: {
      contactUs: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Contact us" } },
      copyright: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "All rights reserved" } },
      sentence: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "We’d love to hear from you. Whether you’re interested in learning more about Capay, collaborating on an initiative, or sharing your insights, reach out! Together, we can amplify the impact and bring these hidden forces of change to the surface.",
        },
      },
      newsletterTitle: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Stay tuned" } },
      newsletterText: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "Don’t miss a step in the journey of discovery with Capay. Join us as we uncover the hidden forces shaping a sustainable future and stay updated on every new initiative, story, and insight.",
        },
      },
      newsletterFollow: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Follow us" } },
      newsletterConfirm: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "I agree to receive communications and updates from Capay.",
        },
      },
      newsletterPolicy: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "I confirm that I have reviewed, and accepted our",
        },
      },
      newsletterPrivacy: {
        t: 0,
        b: { t: 2, i: [{ t: 3 }], s: "Privacy Policy" },
      },
      newsletterTitleSent: {
        t: 0,
        b: { t: 2, i: [{ t: 3 }], s: "Thanks for joining" },
      },
      newsletterTextSent: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "We’re excited to have you join us on this journey of discovery with Capay! From now on, you’ll receive exclusive updates, insights, and the latest news delivered straight to your inbox.",
        },
      },
      supportOf: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "With the support of" } },
    },
    privacyPolicy: {
      metaTitle: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Privacy Policy" } },
      date: {
        t: 0,
        b: { t: 2, i: [{ t: 3 }], s: "Effective Date: 02/12/2024" },
      },
      title: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "Capay is a project by Alhena Production.",
        },
      },
      text: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "At Alhena Production, we recognize the importance of privacy and are committed to protecting the personal information we collect from our customers, collaborators, and website visitors. This Privacy Policy describes how we collect, use, share, and protect personal information. By using our services, you agree to the practices described in this policy.",
        },
      },
      block1: {
        title: {
          t: 0,
          b: { t: 2, i: [{ t: 3 }], s: "Information We Collect" },
        },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: "We collect personal information from various sources, including but not limited to:<br />Information provided by users when registering on our website, participating in surveys, or subscribing to newsletters.<br />Information automatically collected through cookies and similar technologies when users interact with our website.<br />Information provided by customers during the negotiation and execution of contracts.",
          },
        },
      },
      block2: {
        title: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Use of Information" } },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: "We use the collected information to:<br />Provide and improve our services.<br />Personalize the user experience and deliver relevant content.<br />Communicate with users about products, services, and events.<br />Fulfill our contractual and legal obligations.",
          },
        },
      },
      block3: {
        title: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Sharing Information" } },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: "We do not sell, rent, or trade personal information with unaffiliated third parties without your consent, except where necessary to comply with legal obligations, protect our rights, prevent fraud, or ensure security.",
          },
        },
      },
      block4: {
        title: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Information Security" } },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: "We implement technical and organizational security measures to protect personal information against unauthorized access, disclosure, alteration, and destruction.",
          },
        },
      },
      block5: {
        title: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "User Rights" } },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: "Users have the right to access, correct, update, or delete their personal information. To exercise these rights, you can contact us through the channels provided at the end of this policy.",
          },
        },
      },
      block6: {
        title: {
          t: 0,
          b: { t: 2, i: [{ t: 3 }], s: "Changes to the Privacy Policy" },
        },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: "We reserve the right to modify this Privacy Policy at any time. Changes will take effect immediately after being published on our website.",
          },
        },
      },
      block7: {
        title: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Contact" } },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: "If you have questions or concerns about this Privacy Policy, you can contact us at: Alhena Production",
          },
        },
      },
      signature: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "By using our services, you accept this Privacy Policy. We recommend periodically reviewing this policy to stay informed about how we are protecting your information.<br />Last updated: 02/12/2024",
        },
      },
    },
    cookiePolicy: {
      metaTitle: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Cookie Policy" } },
      title: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "Capay is a project by Alhena Production.",
        },
      },
      text: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "At Alhena Production, we use cookies and similar technologies on our website to enhance user experience and better understand how our site is used. This Cookie Policy explains what cookies are, how we use them, and how you can manage your cookie preferences.",
        },
      },
      block1: {
        title: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "What are cookies?" } },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: "Cookies are small text files that are stored on your device when you visit a website. These cookies contain information used to recognize your device on future visits, facilitating user experience personalization and site performance analysis.",
          },
        },
      },
      block2: {
        title: {
          t: 0,
          b: { t: 2, i: [{ t: 3 }], s: "Types of cookies we use" },
        },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: "Essential cookies: Necessary for the basic operation of the website, such as user authentication and session management.<br />Performance cookies: Allow us to collect information about how users interact with our website to improve its performance and functionality.<br />Functionality cookies: Used to remember user preferences, such as language or region selection.<br />Advertising cookies: Serve to personalize ads and display relevant advertisements based on user interests.",
          },
        },
      },
      block3: {
        title: {
          t: 0,
          b: { t: 2, i: [{ t: 3 }], s: "Use of third-party cookies" },
        },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: "We work with external service providers who may also use cookies on our website for the purposes mentioned above. These third parties are required to comply with our privacy policies and are not authorized to use the collected information for other purposes.",
          },
        },
      },
      block4: {
        title: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Managing cookies" } },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: "Users can manage their cookie preferences through their browser settings. You may choose to accept all cookies, reject them, or be notified when cookies are sent. Disabling certain cookies may affect the functionality of the site.",
          },
        },
      },
      block5: {
        title: {
          t: 0,
          b: { t: 2, i: [{ t: 3 }], s: "Changes to the Cookie Policy" },
        },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: "We reserve the right to modify this Cookie Policy at any time. Changes will take effect immediately after being published on our website.",
          },
        },
      },
      block6: {
        title: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Contact" } },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: "If you have questions or concerns about our Cookie Policy, you can contact us at: Alhena Production",
          },
        },
      },
      signature: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "By using our website, you agree to the use of cookies in accordance with this Cookie Policy.<br /><br />Last updated: 02/12/2024",
        },
      },
    },
    error: {
      top: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "Happy mothers day mom.©All rights reserved",
        },
      },
      title: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Page not found" } },
      description: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "The page you are looking for doesn't exist",
        },
      },
      enter: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Enter" } },
    },
    cookieConsent: {
      title: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "We use cookies to analyze site usage and marketing efforts.",
        },
      },
      text: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: 'We use cookies and similar technologies to personalize the content of the website and improve the user experience. By clicking on "Accept All", you consent to this use, as detailed in our',
        },
      },
      link: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Privacy Policy" } },
      button1: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Close & deny" } },
      button2: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Allow all" } },
    },
  },
  xv = {
    meta: {
      title: {
        t: 0,
        b: { t: 2, i: [{ t: 3 }], s: "Capay. Documental transmedia." },
      },
      description: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "En una sociedad dirigida hacia la autodestrucción, Amanda de Luis, directora y activista, da voz a propuestas esperanzadoras.",
        },
      },
    },
    comingSoon: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Próximamente" } },
    next: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Siguiente" } },
    nav: {
      theProject: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Proyecto" } },
      impactInAction: {
        t: 0,
        b: { t: 2, i: [{ t: 3 }], s: "Impacto en acción" },
      },
      joinTheJourney: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Súmate" } },
      contact: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Contacto" } },
    },
    homeBlur: {
      t: 0,
      b: {
        t: 2,
        i: [{ t: 3 }],
        s: "Drinking ourselves out of house and home.",
      },
    },
    homeAbout: {
      text1: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "Capay es un documental transmedia que explora el potencial oculto de la humanidad para afrontar la crisis climática.",
        },
      },
      text2: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "Es un espacio para idear nuestro futuro y redescubrir nuestro poder de cambiarlo.",
        },
      },
      text3: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "Es una invitación a reimaginar el futuro y reconectar con la fuerza que tenemos para transformarlo.",
        },
      },
      verticalButton: {
        t: 0,
        b: { t: 2, i: [{ t: 3 }], s: "Descubre el proyecto" },
      },
    },
    homeSentence: {
      t: 0,
      b: {
        t: 2,
        i: [{ t: 3 }],
        s: "En el mundo, hay miles de iniciativas que están revolucionando nuestro sistema depredador, aunque, como en un iceberg, a menudo son invisibilizadas.",
      },
    },
    homeProjects: {
      text: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "Proyectos alrededor del mundo que desafían el status quo y re-imaginan lo posible. Desde la economía regenerativa hasta la tecnología sostenible y soluciones impulsadas por la comunidad, estas iniciativas demuestran el poder de la acción colectiva para construir un futuro resiliente y sostenible.",
        },
      },
      verticalButton: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Iniciativas" } },
    },
    homePodcast: {
      sentence: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Echoes of Change." } },
      text: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "El podcast es una de las piezas del documental transmedia. Descubriremos historias de personas que buscan soluciones para un futuro sostenible desde una mirada sorprendente y única. Los entrevistados son visionarios, activistas e innovadores que desafían el status quo y nos harán repensar la forma que tenemos de vivir.",
        },
      },
      thePodcast: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Podcast" } },
      thePodcastText: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "Déjate sorprender con las ideas de visionarios que están revolucionando nuestra forma de pensar. Sus historias nos inspirarán a formar parte del cambio en el mundo.",
        },
      },
      playSpotify: {
        t: 0,
        b: { t: 2, i: [{ t: 3 }], s: "Escuchar en Spotify" },
      },
      theImpactHubText: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "Ayúdanos a dar voz a las soluciones que transforman el mundo: apoya nuestro podcast y forma parte del cambio.",
        },
      },
      viewMore: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Ver más" } },
      theImpactHub: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Crowdfunding" } },
    },
    about: {
      right: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "Imaginemos nuevos futuros y la fuerza para hacerlos realidad",
        },
      },
      point1: {
        title: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "El <br />documental" } },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: '<p class="mb-74">Capay es una serie documental que explora las iniciativas invisibilizadas que están buscando soluciones a las crisis globales más urgentes. Cada episodio revela historias transformadoras de comunidades y personas apasionadas que están revolucionando ámbitos controvertidos de la actividad humana.  Con sus sorprendentes perspectivas que a menudo se pasan por alto, Capay desafía la narrativa dominante de impotencia y ofrece una nueva visión de esperanza y resiliencia.\n        </p>\n        <div class="video" data-cursor="View teaser" data-video="1022437671">\n          <div class="video__inner">\n            <iframe src="https://player.vimeo.com/video/1022437671?h=1cf258bd35&badge=0&autopause=0&autoplay=1&controls=0&loop=1&title=0&byline=0&portrait=0&byline=0&muted=1&player_id=0&app_id=58479/embed" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>\n          </div>\n        </div>\n        \n        <p>Episode 1. PIP: Prosperidad Ideal Bruta</p>\n        <p>\n          Veremos qué claves se están desarrollando para reconducir nuestra macroeconomía, abandonando la dependencia del crecimiento y estableciendo una economía regenerativa a través de los ejemplos del Índice de Felicidad Nacional Bruta utilizado por Bután o las propuestas de vanguardia del movimiento Dinero Positivo. Profundizaremos en la compleja anatomía de la felicidad en Occidente y las consecuencias de perseguirla a cualquier precio.\n        </p>\n        <p>Episode 2. Un planeta a escala humana</p>\n        <p class="mb-74">\n          Exploraremos las sinergias entre energía, producción de alimentos y movilidad mientras descubrimos algunos de los proyectos más relevantes que se están implementando como el nuevo modelo de ciudad de Pontevedra (España), el sistema de energía 99% renovable en Costa Rica o el enfoque de la permacultura para vivir en equilibrio con nuestro entorno. Nuevas investigaciones en arqueología nos harán repensar nuestra historia oficial, ofreciéndonos una perspectiva sorprendente sobre nosotros.\n        </p>\n        <p>Episode 3. La nueva era: conciencia de la biosfera</p>\n        <p class="mb-0">\n          Descubriremos Fairphone, el único teléfono de comercio justo del mundo y la Orquesta de Cateura con instrumentos reciclados, ejemplos de cómo transformar el sistema productivo. Conoceremos el caso pionero español sobre los derechos de la naturaleza que enlazará con experiencias de democracia deliberativa en Taiwán. Indagaremos en los últimos estudios sobre generosidad y altruismo para desafiar creencias sobre nosotros mismos.\n        </p>',
          },
        },
      },
      point2: {
        title: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "El equipo" } },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: '<p class="mb-74">\n          El equipo de Capay está formado por personas creativas y apasionadas en contar las historias invisibilizadas del cambio real. Guiado por un compromiso con la transformación social y ambiental, este equipo trabaja para documentar la realidad de iniciativas inspiradoras con integridad y profundidad.\n        </p>\n        <h3>Amanda de Luis</h3>\n        <p class="mb-74">\n          Con más de 20 años de experiencia en el sector cinematográfico, el trabajo de Amanda se centra actualmente en la justicia ambiental y social a través del audiovisual. Con experiencia en la producción de documentales y ficción en el ámbito internacional, Amanda ha dirigido proyectos audiovisuales sobre temas sociales y ambientales, centrándose en narrativas que inspiran a la acción. Capay es su proyecto más ambicioso hasta la fecha, combinando arte, nuevas narrativas y activismo para explorar el potencial del ingenio humano a la hora de afrontar las crisis actuales.\n        </p>\n        <div class="image">\n          <div class="image__inner">\n            <img src="/assets/images/about/2.jpg" alt="iceberg" />\n          </div>\n        </div>\n\n        <h3>Norbert Llaràs</h3>\n        <p class="mb-74">Norbert ha producido más de 30 documentales y películas distribuidos internacionalmente. Con Capay, su misión es amplificar el impacto de estas historias inspiradoras, creando un documental que trascienda las narrativas tradicionales y llegue a una audiencia global.\n        </p>\n        <h3>Alhena Production</h3>\n        <p class="mb-0">\n          Dirigida por el productor Norbert Llaràs, Alhena Production se especializa en la creación de ficción y documental auténtico y de alto impacto que resuene a escala internacional. Con una trayectoria de películas premiadas,\n          <a href="https://www.alhena.cat/" target="_blank">Alhena Production</a> otorga a Capay su compromiso de calidad y propósito, garantizando que cada historia se cuenta con claridad y convicción.\n        </p>\n        \n        <div class="image mb-0">\n          <div class="image__inner">\n            <img src="/assets/images/about/3.jpg" alt="iceberg" />\n          </div>\n        </div>\n        ',
          },
        },
      },
      point3: {
        title: {
          t: 0,
          b: { t: 2, i: [{ t: 3 }], s: "Más allá del documental" },
        },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: '<p class="mb-74">Capay es más que una serie documental; es un proyecto transmedia que se extiende hacia un impacto tangible en el mundo real. Junto con el documental, Capay ofrece un pódcast donde puedes escuchar directamente a visionarios, oportunidades de financiación colectiva para apoyar proyectos transformadores y una sección dedicada a explorar las iniciativas destacadas en cada episodio. Capay te invita no solo a mirar, sino a participar en los movimientos que están dando forma a nuestro futuro.</p>\n        <h3>The Podcast</h3>\n        <p>\n          El Podcast es el espacio donde vamos a hablar de todo lo que los medios suelen olvidarse cuando se trata de la crisis climática, pero que es clave si realmente queremos cambiar las reglas del juego….porque ¡sí!…podemos cambiar las reglas: amortiguar el cambio climático,  proteger la biodiversidad o acabar con la desigualdad extrema. Incluso tocaremos temas como la "pobreza de tiempo", la semana laboral de 15 horas o cómo replantear la economía a partir del índice de felicidad ciudadana. <br /><br />Contaremos con invitados muy diversos para ofrecerte perspectivas frescas, ideas sorprendentes y conversaciones que te harán replantearte muchas cosas.\n        </p>',
          },
        },
        text2: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: '<h3>Crowdfunding</h3>\n        <p class="mb-0">\n          Este proyecto transmedia no es solo un documental más: es una pieza dentro de un movimiento global que busca cambiar las dinámicas actuales y asegurar un planeta habitable para las generaciones presentes y futuras. Cambiar el mundo no es algo que se pueda hacer en solitario; requiere de un esfuerzo colectivo. La colaboración es esencial para cualquier transformación real, y la diversidad de voces y perspectivas es clave para encontrar soluciones innovadoras.<br /><br />Queremos que este proyecto refleje ese espíritu de co-creación. Creemos que vosotros también tenéis ideas, proyectos y reflexiones que pueden enriquecer el mundo de Capay. Este crowdfunding un espacio para crear entre todos.<br /><br />Cada euro que recaudemos será cuidadosamente destinado a distintas áreas del proyecto para asegurar la mayor calidad en la producción y maximizar su impacto.\n        </p>',
          },
        },
      },
    },
    projects: {
      showList: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Mostrar lista" } },
    },
    project: {
      startDate: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Fecha de inicio" } },
      city: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Ciudad" } },
      scope: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Alcance" } },
      impact: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Impacto" } },
      website: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Website" } },
      socialMedia: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Redes sociales" } },
    },
    footer: {
      contactUs: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Contáctanos" } },
      copyright: {
        t: 0,
        b: { t: 2, i: [{ t: 3 }], s: "Todos los derechos reservados" },
      },
      sentence: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "¡Queremos escucharte! <br />Si quieres saber más sobre Capay, colaborar en una iniciativa o compartir tus ideas, ¡ponte en contacto! Juntos podemos hacer aflorar a la superficie esas fuerzas ocultas y formar parte del cambio.",
        },
      },
      newsletterTitle: {
        t: 0,
        b: { t: 2, i: [{ t: 3 }], s: "No te pierdas nada" },
      },
      newsletterText: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "Sigue las etapas de este viaje lleno de descubrimientos con Capay. Acompáñanos a explorar esas iniciativas encubiertas que están moldeando un futuro sostenible, inspirándote con cada iniciativa, historia y novedad.",
        },
      },
      newsletterFollow: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Síguenos" } },
      newsletterConfirm: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "Acepto recibir comunicaciones y actualizaciones de Capay.",
        },
      },
      newsletterPolicy: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "Confirmo que he revisado y aceptado nuestra",
        },
      },
      newsletterPrivacy: {
        t: 0,
        b: { t: 2, i: [{ t: 3 }], s: "Política de Privacidad" },
      },
      newsletterTitleSent: {
        t: 0,
        b: { t: 2, i: [{ t: 3 }], s: "Gracias por unirte" },
      },
      newsletterTextSent: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "¡Estamos emocionados de que te unas a nosotros en este viaje de descubrimiento con Capay! A partir de ahora, recibirás actualizaciones exclusivas, ideas y las últimas noticias directamente en tu bandeja de entrada.",
        },
      },
      supportOf: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Con el soporte de" } },
    },
    privacyPolicy: {
      metaTitle: {
        t: 0,
        b: { t: 2, i: [{ t: 3 }], s: "Política de Privacidad" },
      },
      date: {
        t: 0,
        b: { t: 2, i: [{ t: 3 }], s: "Fecha de vigencia: 02/12/2024" },
      },
      title: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "Capay es un proyecto de Alhena Production.",
        },
      },
      text: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "En Alhena Production reconocemos la importancia de la privacidad y nos comprometemos a proteger la información personal que recopilamos de nuestros clientes, colaboradores y visitantes del sitio web. Esta Política de Privacidad describe cómo recopilamos, utilizamos, compartimos y protegemos la información personal. Al utilizar nuestros servicios, usted acepta las prácticas descritas en esta política.",
        },
      },
      block1: {
        title: {
          t: 0,
          b: { t: 2, i: [{ t: 3 }], s: "Información que recopilamos" },
        },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: "Recopilamos información personal de diversas fuentes, incluyendo, pero no limitándonos a: <br />Información proporcionada por los usuarios al registrarse en nuestro sitio web, participar en encuestas o suscribirse a boletines.<br />Información recopilada automáticamente a través de cookies y tecnologías similares cuando los usuarios interactúan con nuestro sitio web.<br />Información proporcionada por los clientes en el proceso de negociación y ejecución de contratos.",
          },
        },
      },
      block2: {
        title: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Uso de la información" } },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: "Utilizamos la información recopilada para:<br />Proporcionar y mejorar nuestros servicios.<br />Personalizar la experiencia del usuario y ofrecer contenido relevante.<br />Comunicarnos con los usuarios sobre productos, servicios y eventos.<br />Cumplir con nuestras obligaciones contractuales y legales.",
          },
        },
      },
      block3: {
        title: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Compartir información" } },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: "No vendemos, alquilamos ni intercambiamos información personal con terceros no afiliados sin su consentimiento, excepto en los casos necesarios para cumplir con obligaciones legales, proteger nuestros derechos, prevenir fraudes o garantizar la seguridad.",
          },
        },
      },
      block4: {
        title: {
          t: 0,
          b: { t: 2, i: [{ t: 3 }], s: "Seguridad de la información" },
        },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: "Implementamos medidas de seguridad técnicas y organizativas para proteger la información personal contra accesos no autorizados, divulgación, alteración y destrucción.",
          },
        },
      },
      block5: {
        title: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Derechos del usuario" } },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: "Los usuarios tienen derecho a acceder, corregir, actualizar o eliminar su información personal. Para ejercer estos derechos, pueden comunicarse con nosotros a través de los canales proporcionados al final de esta política.",
          },
        },
      },
      block6: {
        title: {
          t: 0,
          b: { t: 2, i: [{ t: 3 }], s: "Cambios en la Política de Privacidad" },
        },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: "Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Las modificaciones serán efectivas inmediatamente después de la publicación en nuestro sitio web.",
          },
        },
      },
      block7: {
        title: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Contacto" } },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: "Si tiene preguntas o inquietudes sobre esta Política de Privacidad, puede contactarnos en: Alhena Production",
          },
        },
      },
      signature: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "Al utilizar nuestros servicios, usted acepta esta Política de Privacidad. Le recomendamos revisar periódicamente esta política para estar informado sobre cómo estamos protegiendo su información.<br />Última actualización: 02/12/2024",
        },
      },
    },
    cookiePolicy: {
      metaTitle: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Política de Cookies" } },
      title: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "Capay es un proyecto de Alhena Production.",
        },
      },
      text: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "En Alhena Production, utilizamos cookies y tecnologías similares en nuestro sitio web para mejorar la experiencia del usuario y comprender mejor cómo se utiliza nuestro sitio. Esta Política de Cookies explica qué son las cookies, cómo las utilizamos y cómo puede gestionar las preferencias relacionadas con las cookies.",
        },
      },
      block1: {
        title: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "¿Qué son las cookies?" } },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: "Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Estas cookies contienen información que se utiliza para reconocer su dispositivo en visitas posteriores, lo que facilita la personalización de la experiencia del usuario y el análisis del rendimiento del sitio.",
          },
        },
      },
      block2: {
        title: {
          t: 0,
          b: { t: 2, i: [{ t: 3 }], s: "Tipos de cookies que utilizamos" },
        },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: "Cookies esenciales: Necesarias para el funcionamiento básico del sitio web, como la autenticación de usuario y la gestión de sesiones.<br />Cookies de rendimiento: Nos permiten recopilar información sobre cómo los usuarios interactúan con nuestro sitio web, para mejorar su funcionamiento y rendimiento.<br />Cookies de funcionalidad: Se utilizan para recordar las preferencias del usuario, como la elección del idioma o la región.<br />Cookies de publicidad: Sirven para personalizar la publicidad y mostrar anuncios relevantes basados en los intereses del usuario.",
          },
        },
      },
      block3: {
        title: {
          t: 0,
          b: { t: 2, i: [{ t: 3 }], s: "Uso de cookies de terceros" },
        },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: "Trabajamos con proveedores de servicios externos que también pueden utilizar cookies en nuestro sitio web para los fines mencionados anteriormente. Estos terceros están obligados a cumplir con nuestras políticas de privacidad y no están autorizados a utilizar la información recopilada para fines distintos.",
          },
        },
      },
      block4: {
        title: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Gestión de cookies" } },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: "Los usuarios pueden gestionar las preferencias de cookies a través de la configuración de su navegador. Puede optar por aceptar todas las cookies, rechazarlas o ser notificado cuando se envíen cookies. La desactivación de ciertas cookies puede afectar la funcionalidad del sitio.",
          },
        },
      },
      block5: {
        title: {
          t: 0,
          b: { t: 2, i: [{ t: 3 }], s: "Cambios en la Política de Cookies" },
        },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: "Nos reservamos el derecho de modificar esta Política de Cookies en cualquier momento. Las modificaciones serán efectivas inmediatamente después de la publicación en nuestro sitio web.",
          },
        },
      },
      block6: {
        title: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Contacto" } },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{ t: 3 }],
            s: "Si tiene preguntas o inquietudes sobre nuestra Política de Cookies, puede contactarnos en: Alhena Production",
          },
        },
      },
      signature: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "Al utilizar nuestro sitio web, usted acepta el uso de cookies de acuerdo con esta Política de Cookies.<br />Última actualización: 02/01/2024",
        },
      },
    },
    error: {
      top: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "Happy mothers day mom.©Todos los derechos reservados",
        },
      },
      title: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Página no encontrada" } },
      description: {
        t: 0,
        b: { t: 2, i: [{ t: 3 }], s: "La página que buscas no existe" },
      },
      enter: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Entrar" } },
    },
    cookieConsent: {
      title: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: "Utilizamos cookies para analizar el uso del sitio y los esfuerzos de marketing.",
        },
      },
      text: {
        t: 0,
        b: {
          t: 2,
          i: [{ t: 3 }],
          s: 'Utilizamos cookies y tecnologías similares para personalizar el contenido del sitio web y mejorar la experiencia del usuario. Al hacer clic en "Aceptar todo", aceptas este uso, tal como se detalla en nuestra',
        },
      },
      link: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Política de Privacidad" } },
      button1: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Cerrar y denegar" } },
      button2: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Permitir todo" } },
    },
  },
  kv = ["en", "es"],
  Cv = {
    en: [
      {
        key: "/i18n/locales/en-US.ts",
        load: () => Promise.resolve(Dv),
        cache: !0,
      },
    ],
    es: [
      {
        key: "/i18n/locales/es-ES.ts",
        load: () => Promise.resolve(xv),
        cache: !0,
      },
    ],
  },
  Ev = [() => Ju(() => import("./0vJLoM6E.js"), [], import.meta.url)],
  Tv = [
    {
      code: "en",
      language: "en-US",
      name: "English",
      files: [{ path: "/Users/marctaule/Sites/iceberg/i18n/locales/en-US.ts" }],
    },
    {
      code: "es",
      language: "es-ES",
      name: "Español",
      files: [{ path: "/Users/marctaule/Sites/iceberg/i18n/locales/es-ES.ts" }],
    },
  ],
  Sv = "@nuxtjs/i18n",
  Av = "nuxt-i18n-slp",
  Ov = "undefined" != typeof window;
function Pv(e) {
  return dv(e) ? e : "symbol" == typeof e ? e.toString() : "(null)";
}
function Fv(
  e,
  t,
  {
    defaultLocale: n,
    strategy: r,
    routesNameSeparator: o,
    defaultLocaleRouteNameSuffix: i,
    differentDomains: s,
  }
) {
  const a = "no_prefix" !== r || s;
  let l = Pv(e) + (a ? o + t : "");
  return t === n && "prefix_and_default" === r && (l += o + i), l;
}
function Lv(e, t) {
  return pv(e) ? e(t) : e;
}
const Nv = function (e, t) {
  const n = [];
  for (const [r, o] of t.entries()) {
    const i = e.find((e) => e.language.toLowerCase() === o.toLowerCase());
    if (i) {
      n.push({ code: i.code, score: 1 - r / t.length });
      break;
    }
  }
  for (const [r, o] of t.entries()) {
    const i = o.split("-")[0].toLowerCase(),
      s = e.find((e) => e.language.split("-")[0].toLowerCase() === i);
    if (s) {
      n.push({ code: s.code, score: 0.999 - r / t.length });
      break;
    }
  }
  return n;
};
const Iv = function (e, t) {
  return e.score === t.score
    ? t.code.length - e.code.length
    : t.score - e.score;
};
function Rv(e) {
  return new RegExp(`^/(${e.join("|")})(?:/|$)`, "i");
}
const Mv = new Map();
function Bv(e, t) {
  let n = [];
  if (uv(e)) n = e;
  else if (hv(e)) {
    const r = [...t, "default"];
    for (const t of r) e[t] && (n = [...n, ...e[t].filter(Boolean)]);
  } else dv(e) && t.every((t) => t !== e) && n.push(e);
  return n;
}
async function jv(e, { key: t, load: n }) {
  let r = null;
  try {
    const o = await n().then((e) => ("default" in e ? e.default : e));
    pv(o) ? (r = await o(e)) : ((r = o), null != r && Mv && Mv.set(t, r));
  } catch (iI) {}
  return r;
}
async function $v(e, t, n) {
  const r = t[e];
  if (null == r) return;
  const o = {};
  for (const i of r) {
    let t = null;
    (t = Mv && Mv.has(i.key) && i.cache ? Mv.get(i.key) : await jv(e, i)),
      null != t && wv(t, o);
  }
  n(e, o);
}
async function Uv(e, t, n) {
  await $v(e, t, (e, t) => {
    const r = n[e] || {};
    wv(t, r), (n[e] = r);
  });
}
function qv(e) {
  return null != e && "__composer" in e;
}
function Hv(e) {
  return (function (e) {
    return null != e && "global" in e && "mode" in e;
  })(e)
    ? e.global
    : e;
}
function zv(e) {
  const t = Hv(e);
  return (function (e) {
    return null != e && !("__composer" in e) && "locale" in e && Ct(e.locale);
  })(t)
    ? t
    : qv(t)
    ? t.__composer
    : t;
}
function Vv(e, t) {
  return (function (e, t) {
    return Ot(e[t]);
  })(Hv(e), t);
}
function Wv(e, t) {
  const n = Hv(e);
  Ct(n.locale) ? (n.locale.value = t) : (n.locale = t);
}
function Yv(e) {
  return Vv(e, "locale");
}
function Xv(e, t, n) {
  return Hv(e).mergeLocaleMessage(t, n);
}
const Gv = new Set(["prefix_and_default", "prefix_except_default"]);
const Kv = function (e) {
  const { currentLocale: t, defaultLocale: n, strategy: r } = e;
  return !((t === n && Gv.has(r)) || "no_prefix" === r);
};
function Jv(e, t) {
  const { routesNameSeparator: n } = e.runtimeConfig.public.i18n,
    r = Ot(t);
  if (null == r || !r.name) return;
  return Pv(r.name).split(n)[0];
}
function Qv(e, t, n) {
  var r;
  if ("string" == typeof t && $a(t, { acceptRelative: !0 })) return t;
  const o = ty(e, t, n);
  return null == o
    ? ""
    : (null == (r = o.redirectedFrom) ? void 0 : r.fullPath) || o.fullPath;
}
function Zv(e, t, n) {
  return ty(e, t, n) ?? void 0;
}
function ey(e, t, n) {
  return ty(e, t, n) ?? void 0;
}
function ty(e, t, n) {
  const { router: r, i18n: o } = e,
    i = n || Yv(o),
    {
      defaultLocale: s,
      strategy: a,
      trailingSlash: l,
    } = e.runtimeConfig.public.i18n,
    c = (function (e = Hl()) {
      return (t) => Kv(t) && !e.public.i18n.differentDomains;
    })(e.runtimeConfig);
  let u;
  if (dv(t))
    if ("/" === t[0]) {
      const { pathname: e, search: n, hash: r } = Za(t);
      u = { path: e, query: Fa(n), hash: r };
    } else u = { name: t };
  else u = t;
  let p = nv({}, u);
  if ("path" in (d = p) && d.path && !("name" in d)) {
    const t = (function ({ router: e }, t, n, r) {
        var o, i;
        if ("prefix" !== n) return e.resolve(t);
        const [s, a] = ((l = t.path), (c = 1), [l.slice(0, c), l.slice(c)]);
        var l, c;
        const u = `${s}${r}${"" === a ? a : `/${a}`}`,
          p =
            null == (i = null == (o = e.options) ? void 0 : o.routes)
              ? void 0
              : i.find((e) => e.path === u);
        if (null == p) return t;
        const d = nv({}, t, p);
        return (d.path = u), e.resolve(d);
      })(e, p, a, i),
      n = Jv(e, t);
    dv(n)
      ? ((p = {
          name: Fv(n, i, e.runtimeConfig.public.i18n),
          params: t.params,
          query: t.query,
          hash: t.hash,
        }),
        (p.state = t.state))
      : (c({ currentLocale: i, defaultLocale: s, strategy: a }) &&
          (p.path = `/${i}${p.path}`),
        (p.path = l ? Ha(p.path, !0) : qa(p.path, !0)));
  } else
    p.name || "path" in p || (p.name = Jv(e, r.currentRoute.value)),
      (p.name = Fv(p.name, i, e.runtimeConfig.public.i18n));
  var d;
  try {
    const e = r.resolve(p);
    return e.name ? e : r.resolve(t);
  } catch (iI) {
    if ("object" == typeof iI && "type" in iI && 1 === iI.type) return null;
  }
}
function ny(e, t, n) {
  const r = n ?? e.router.currentRoute.value,
    o = Jv(e, r);
  if (!o) return "";
  const i = (function (e = Hl()) {
      return (t, n) => {
        if (!e.public.i18n.differentDomains) return t;
        const r = Cy(n);
        return (r && Xa(r, t)) || t;
      };
    })(e.runtimeConfig),
    s = (function (e) {
      const {
        fullPath: t,
        query: n,
        hash: r,
        name: o,
        path: i,
        params: s,
        meta: a,
        redirectedFrom: l,
        matched: c,
      } = e;
      return {
        fullPath: t,
        params: s,
        query: n,
        hash: r,
        name: o,
        path: i,
        meta: a,
        matched: c,
        redirectedFrom: l,
      };
    })(r),
    a = (function (e, t) {
      var n;
      return e.runtimeConfig.public.i18n.experimental.switchLocalePathLinkSSR
        ? Ot(e.metaState.value)
        : (null == (n = Ot(t.meta || {})) ? void 0 : n.nuxtI18nInternal) || {};
    })(e, r)[t];
  return i(Qv(e, { ...s, name: o, params: { ...s.params, ...a } }, t), t);
}
function ry(e, { dir: t = !0, lang: n = !0, seo: r = !0, key: o = "hid" }) {
  const { defaultDirection: i } = Hl().public.i18n,
    s = zv(e.i18n),
    a = { htmlAttrs: {}, link: [], meta: [] },
    l = Ot(s.baseUrl);
  if (null == Ot(s.locales) || null == l) return a;
  const c = Yv(e.i18n),
    u = (function (e) {
      return Vv(e, "locales");
    })(e.i18n),
    p = (function (e) {
      e = e || [];
      const t = [];
      for (const n of e) dv(n) ? t.push({ code: n }) : t.push(n);
      return t;
    })(u).find((e) => e.code === c) || { code: c },
    d = p.language,
    f = p.dir || i;
  return (
    t && (a.htmlAttrs.dir = f),
    n && d && (a.htmlAttrs.lang = d),
    r &&
      c &&
      Ot(s.locales) &&
      (a.link.push(
        ...(function (e, t, n) {
          const r = oy(),
            { defaultLocale: o, strategy: i } = Hl().public.i18n,
            s = [];
          if ("no_prefix" === i) return s;
          const a = new Map();
          for (const l of t) {
            const e = l.language;
            if (!e) continue;
            const [t, n] = e.split("-");
            t && n && (l.isCatchallLocale || !a.has(t)) && a.set(t, l),
              a.set(e, l);
          }
          for (const [l, c] of a.entries()) {
            const t = ny(e, c.code);
            t &&
              s.push({
                [n]: `i18n-alt-${l}`,
                rel: "alternate",
                href: ay(t, r),
                hreflang: l,
              });
          }
          if (o) {
            const t = ny(e, o);
            t &&
              s.push({
                [n]: "i18n-xd",
                rel: "alternate",
                href: ay(t, r),
                hreflang: "x-default",
              });
          }
          return s;
        })(e, Ot(u), o),
        ...(function (e, t, n) {
          const r = oy(),
            o = iy(e, r, n);
          return o ? [{ [t]: "i18n-can", rel: "canonical", href: o }] : [];
        })(e, o, r)
      ),
      a.meta.push(
        ...(function (e, t, n) {
          const r = oy(),
            o = iy(e, r, n);
          return o
            ? [{ [t]: "i18n-og-url", property: "og:url", content: o }]
            : [];
        })(e, o, r),
        ...(function (e, t, n) {
          return e && t
            ? [{ [n]: "i18n-og", property: "og:locale", content: sy(t) }]
            : [];
        })(p, d, o),
        ...(function (e, t, n) {
          const r = e.filter((e) => e.language && e.language !== t);
          return r.map((e) => ({
            [n]: `i18n-og-alt-${e.language}`,
            property: "og:locale:alternate",
            content: sy(e.language),
          }));
        })(Ot(u), d, o)
      )),
    a
  );
}
function oy() {
  const e = ql();
  return Xa(Ot(zv(e.$i18n).baseUrl), e.$config.app.baseURL);
}
function iy(e, t, n) {
  const r = e.router.currentRoute.value,
    o = Zv(e, { ...r, path: void 0, name: Jv(e, r) });
  if (!o) return "";
  let i = ay(o.path, t);
  const s = (hv(n) && n.canonicalQueries) || [],
    a = o.query,
    l = new URLSearchParams();
  for (const u of s)
    if (u in a) {
      const e = a[u];
      uv(e) ? e.forEach((e) => l.append(u, e || "")) : l.append(u, e || "");
    }
  const c = l.toString();
  return c && (i = `${i}?${c}`), i;
}
function sy(e) {
  return (e || "").replace(/-/g, "_");
}
function ay(e, t) {
  return e.match(/^https?:\/\//) ? e : Xa(t, e);
}
const ly = `(${kv.join("|")})`,
  cy = Rv(kv);
function uy() {
  const { routesNameSeparator: e, defaultLocaleRouteNameSuffix: t } =
      Hl().public.i18n,
    n = new RegExp(`${e}${ly}${`(?:${e}${t})?`}$`, "i");
  return (e) => {
    let t = null;
    return "string" == typeof e
      ? ((t = e.match(cy)), (null == t ? void 0 : t[1]) ?? "")
      : (e.name ? (t = Pv(e.name).match(n)) : e.path && (t = e.path.match(cy)),
        (null == t ? void 0 : t[1]) ?? "");
  };
}
function py(e) {
  return {
    i18n: e ?? ql().$i18n,
    router: Rc(),
    runtimeConfig: Hl(),
    metaState: Xf("nuxt-i18n-meta", () => ({})),
  };
}
async function dy(e, t, n, r = !1) {
  const { differentDomains: o, skipSettingLocaleOnNavigate: i, lazy: s } = n,
    a = Ey(n),
    l = ql(),
    c = Yv(t),
    u = (function (e) {
      return Vv(e, "localeCodes");
    })(t);
  function p(e = c) {
    !1 !== a &&
      a.useCookie &&
      (i ||
        (function (e, t) {
          Hv(e).setLocaleCookie(t);
        })(t, e));
  }
  if (!e) return p(), !1;
  if (!r && o) return p(), !1;
  if (c === e) return p(), !1;
  const d = await (async function (e, t, n, r, o) {
    return Hv(e).onBeforeLanguageSwitch(t, n, r, o);
  })(t, c, e, r, l);
  if (d && u.includes(d)) {
    if (c === d) return p(), !1;
    e = d;
  }
  if (s) {
    const n = Vv(t, "fallbackLocale"),
      r = Xv.bind(null, t);
    if (n) {
      const t = Bv(n, [e]);
      await Promise.all(t.map((e) => $v(e, Cv, r)));
    }
    await $v(e, Cv, r);
  }
  return (
    !i &&
    (p(e),
    Wv(t, e),
    await (function (e, t, n) {
      return Hv(e).onLanguageSwitched(t, n);
    })(t, c, e),
    !0)
  );
}
function fy(e, t, n, r, o) {
  const {
      strategy: i,
      defaultLocale: s,
      differentDomains: a,
      multiDomainLocales: l,
    } = o,
    { localeCookie: c } = r,
    u = Ey(o),
    p = pv(n) ? n() : n,
    d = xy(e, r, p);
  if (d.reason === wy.SSG_IGNORE) return p;
  if (d.locale && null != d.from) return d.locale;
  let f = "";
  a || l
    ? f ||
      (f = (function (e, t, n) {
        let r = ky() || "";
        const o = hv(n) ? n.path : dv(n) ? n : "";
        if (r) {
          let i;
          const s = e.filter((e) => {
            if (e && e.domain) {
              let t = e.domain;
              return (
                $a(e.domain) && (t = e.domain.replace(/(http|https):\/\//, "")),
                t === r
              );
            }
            return (
              !!Array.isArray(null == e ? void 0 : e.domains) &&
              e.domains.includes(r)
            );
          });
          if (1 === s.length) i = s[0];
          else if (s.length > 1)
            if ("no_prefix" === t) i = s[0];
            else {
              if (n && o && "" !== o) {
                const e = o.match(Rv(s.map((e) => e.code)));
                e && e.length > 1 && (i = s.find((t) => t.code === e[1]));
              }
              i ||
                (i = s.find((e) =>
                  Array.isArray(e.defaultForDomains)
                    ? e.defaultForDomains.includes(r)
                    : e.domainDefault
                ));
            }
          if (i) return i.code;
          r = "";
        }
        return r;
      })(Tv, i, e))
    : "no_prefix" !== i && (f || (f = t));
  const h = u && u.useCookie && c;
  return f || (f = h || p || s || ""), f;
}
function hy({ route: e, locale: t, routeLocale: n, strategy: r }, o = !1) {
  if (n === t || "no_prefix" === r) return "";
  const i = py();
  let s = ny(i, t, e.to);
  return (
    o && !s && (s = Qv(i, e.to.fullPath, t)),
    Ka(s, e.to.fullPath) || (e.from && Ka(s, e.from.fullPath)) ? "" : s
  );
}
function my(e, t) {
  return jc(e, { redirectCode: t });
}
async function gy(e, { status: t = 302, enableNavigate: n = !1 } = {}) {
  const { nuxtApp: r, i18n: o, locale: i, route: s } = e,
    {
      rootRedirect: a,
      differentDomains: l,
      multiDomainLocales: c,
      skipSettingLocaleOnNavigate: u,
      locales: p,
      strategy: d,
    } = r.$config.public.i18n;
  let { redirectPath: f } = e;
  if ("/" === s.path && a)
    return (
      dv(a)
        ? (f = "/" + a)
        : (function (e) {
            return hv(e) && "path" in e && "statusCode" in e;
          })(a) && ((f = "/" + a.path), (t = a.statusCode)),
      (f = r.$localePath(f, i)),
      my(f, t)
    );
  if (
    !u ||
    ((o.__pendingLocale = i),
    (o.__pendingLocalePromise = new Promise((e) => {
      o.__resolvePendingLocalePromise = e;
    })),
    n)
  ) {
    if (c && "prefix_except_default" === d) {
      const e = ky(),
        n = p.find((t) => {
          var n;
          return (
            "string" != typeof t &&
            (null == (n = t.defaultForDomains)
              ? void 0
              : n.find((t) => t === e))
          );
        }),
        r = "string" != typeof n ? (null == n ? void 0 : n.code) : void 0;
      if (s.path.startsWith(`/${r}`)) return my(s.path.replace(`/${r}`, ""), t);
      if (!s.path.startsWith(`/${i}`) && i !== r) {
        const e = uy()(s.path);
        return my(
          "" !== e
            ? `/${i + s.path.replace(`/${e}`, "")}`
            : `/${i + ("/" === s.path ? "" : s.path)}`,
          t
        );
      }
      return f && s.path !== f ? my(f, t) : void 0;
    }
    if (l) {
      const e = Xf(Sv + ":redirect", () => "");
      e.value && e.value !== f && ((e.value = ""), window.location.assign(f));
    } else if (f) return my(f, t);
  }
}
function vy(e, t, n) {
  Object.defineProperty(e, t, { get: () => n });
}
function yy(e, t = py()) {
  return (...n) => e(t, ...n);
}
function by() {
  let e;
  return (
    navigator.languages &&
      (e = (function (e, t, { matcher: n = Nv, comparer: r = Iv } = {}) {
        const o = [];
        for (const s of e) {
          const { code: e } = s,
            t = s.language || e;
          o.push({ code: e, language: t });
        }
        const i = n(o, t);
        return i.length > 1 && i.sort(r), i.length ? i[0].code : "";
      })(Tv, navigator.languages)),
    e
  );
}
function _y(e, t, n) {
  if (!1 === t || !t.useCookie) return;
  const r = e.value ?? void 0;
  return null != r
    ? kv.includes(r)
      ? r
      : n
      ? ((e.value = n), n)
      : void (e.value = void 0)
    : void 0;
}
var wy = ((e) => (
  (e.NOT_FOUND = "not_found_match"),
  (e.FIRST_ACCESS = "first_access_only"),
  (e.NO_REDIRECT_ROOT = "not_redirect_on_root"),
  (e.NO_REDIRECT_NO_PREFIX = "not_redirect_on_no_prefix"),
  (e.SSG_IGNORE = "detect_ignore_on_ssg"),
  e
))(wy || {});
const Dy = { locale: "" };
function xy(e, t, n = "") {
  const r = Ey();
  if (!r) return Dy;
  const { strategy: o } = Hl().public.i18n,
    { ssg: i, callType: s, firstAccess: a, localeCookie: l } = t;
  if ("no_prefix" === o && "ssg_ignore" === i)
    return { locale: "", reason: "detect_ignore_on_ssg" };
  if (!a)
    return { locale: "no_prefix" === o ? n : "", reason: "first_access_only" };
  const {
      redirectOn: c,
      alwaysRedirect: u,
      useCookie: p,
      fallbackLocale: d,
    } = r,
    f = dv(e) ? e : e.path;
  if ("no_prefix" !== o) {
    if ("root" === c && "/" !== f)
      return { locale: "", reason: "not_redirect_on_root" };
    if ("no prefix" === c && !u && f.match(Rv(kv)))
      return { locale: "", reason: "not_redirect_on_no_prefix" };
  }
  let h;
  const m = (p && l) || void 0;
  p && (h = "cookie");
  const g = by();
  m || (h = "navigator_or_header");
  const v = m || g;
  return !v && d && (h = "fallback"), { locale: v || d || "", from: h };
}
function ky() {
  let e;
  return (e = window.location.host), e;
}
function Cy(e) {
  var t, n, r;
  const o = Hl();
  ql();
  const i = ky(),
    s = o.public.i18n,
    a = Tv.find((t) => t.code === e),
    l =
      (null ==
      (n = null == (t = null == s ? void 0 : s.domainLocales) ? void 0 : t[e])
        ? void 0
        : n.domain) ||
      (null == a ? void 0 : a.domain) ||
      (null == (r = null == a ? void 0 : a.domains)
        ? void 0
        : r.find((e) => e === i));
  if (l) {
    if ($a(l, { strict: !0 })) return l;
    let e;
    return (e = new URL(window.location.origin).protocol), e + "//" + l;
  }
}
const Ey = (e = Hl().public.i18n) =>
  !1 !== (null == e ? void 0 : e.detectBrowserLanguage) &&
  (null == e ? void 0 : e.detectBrowserLanguage);
function Ty(e, t, n) {
  return { start: e, end: t };
}
const Sy = 1,
  Ay = 2,
  Oy = 3,
  Py = 4,
  Fy = 5,
  Ly = 6,
  Ny = 7,
  Iy = 8,
  Ry = 9,
  My = 10,
  By = 11,
  jy = 12,
  $y = 13,
  Uy = 14;
function qy(e, t, n = {}) {
  const { domain: r, messages: o, args: i } = n,
    s = new SyntaxError(String(e));
  return (s.code = e), t && (s.location = t), (s.domain = r), s;
}
function Hy(e) {
  throw e;
}
const zy = " ",
  Vy = "\n",
  Wy = String.fromCharCode(8232),
  Yy = String.fromCharCode(8233);
function Xy(e) {
  const t = e;
  let n = 0,
    r = 1,
    o = 1,
    i = 0;
  const s = (e) => "\r" === t[e] && t[e + 1] === Vy,
    a = (e) => t[e] === Yy,
    l = (e) => t[e] === Wy,
    c = (e) => s(e) || ((e) => t[e] === Vy)(e) || a(e) || l(e),
    u = (e) => (s(e) || a(e) || l(e) ? Vy : t[e]);
  function p() {
    return (i = 0), c(n) && (r++, (o = 0)), s(n) && n++, n++, o++, t[n];
  }
  return {
    index: () => n,
    line: () => r,
    column: () => o,
    peekOffset: () => i,
    charAt: u,
    currentChar: () => u(n),
    currentPeek: () => u(n + i),
    next: p,
    peek: function () {
      return s(n + i) && i++, i++, t[n + i];
    },
    reset: function () {
      (n = 0), (r = 1), (o = 1), (i = 0);
    },
    resetPeek: function (e = 0) {
      i = e;
    },
    skipToPeek: function () {
      const e = n + i;
      for (; e !== n; ) p();
      i = 0;
    },
  };
}
const Gy = void 0;
function Ky(e, t = {}) {
  const n = !1 !== t.location,
    r = Xy(e),
    o = () => r.index(),
    i = () => {
      return (
        (e = r.line()),
        (t = r.column()),
        (n = r.index()),
        { line: e, column: t, offset: n }
      );
      var e, t, n;
    },
    s = i(),
    a = o(),
    l = {
      currentType: 13,
      offset: a,
      startLoc: s,
      endLoc: s,
      lastType: 13,
      lastOffset: a,
      lastStartLoc: s,
      lastEndLoc: s,
      braceNest: 0,
      inLinked: !1,
      text: "",
    },
    c = () => l,
    { onError: u } = t;
  function p(e, t, r, ...o) {
    const i = c();
    if (((t.column += r), (t.offset += r), u)) {
      const r = qy(e, n ? Ty(i.startLoc, t) : null, {
        domain: "tokenizer",
        args: o,
      });
      u(r);
    }
  }
  function d(e, t, r) {
    (e.endLoc = i()), (e.currentType = t);
    const o = { type: t };
    return (
      n && (o.loc = Ty(e.startLoc, e.endLoc)), null != r && (o.value = r), o
    );
  }
  const f = (e) => d(e, 13);
  function h(e, t) {
    return e.currentChar() === t ? (e.next(), t) : (p(Sy, i(), 0, t), "");
  }
  function m(e) {
    let t = "";
    for (; e.currentPeek() === zy || e.currentPeek() === Vy; )
      (t += e.currentPeek()), e.peek();
    return t;
  }
  function g(e) {
    const t = m(e);
    return e.skipToPeek(), t;
  }
  function v(e) {
    if (e === Gy) return !1;
    const t = e.charCodeAt(0);
    return (t >= 97 && t <= 122) || (t >= 65 && t <= 90) || 95 === t;
  }
  function y(e, t) {
    const { currentType: n } = t;
    if (2 !== n) return !1;
    m(e);
    const r = (function (e) {
      if (e === Gy) return !1;
      const t = e.charCodeAt(0);
      return t >= 48 && t <= 57;
    })("-" === e.currentPeek() ? e.peek() : e.currentPeek());
    return e.resetPeek(), r;
  }
  function b(e) {
    m(e);
    const t = "|" === e.currentPeek();
    return e.resetPeek(), t;
  }
  function _(e, t = !0) {
    const n = (t = !1, r = "") => {
        const o = e.currentPeek();
        return "{" === o
          ? t
          : "@" !== o && o
          ? "|" === o
            ? !(r === zy || r === Vy)
            : o === zy
            ? (e.peek(), n(!0, zy))
            : o !== Vy || (e.peek(), n(!0, Vy))
          : t;
      },
      r = n();
    return t && e.resetPeek(), r;
  }
  function w(e, t) {
    const n = e.currentChar();
    return n === Gy ? Gy : t(n) ? (e.next(), n) : null;
  }
  function D(e) {
    const t = e.charCodeAt(0);
    return (
      (t >= 97 && t <= 122) ||
      (t >= 65 && t <= 90) ||
      (t >= 48 && t <= 57) ||
      95 === t ||
      36 === t
    );
  }
  function x(e) {
    return w(e, D);
  }
  function k(e) {
    const t = e.charCodeAt(0);
    return (
      (t >= 97 && t <= 122) ||
      (t >= 65 && t <= 90) ||
      (t >= 48 && t <= 57) ||
      95 === t ||
      36 === t ||
      45 === t
    );
  }
  function C(e) {
    return w(e, k);
  }
  function E(e) {
    const t = e.charCodeAt(0);
    return t >= 48 && t <= 57;
  }
  function T(e) {
    return w(e, E);
  }
  function S(e) {
    const t = e.charCodeAt(0);
    return (
      (t >= 48 && t <= 57) || (t >= 65 && t <= 70) || (t >= 97 && t <= 102)
    );
  }
  function A(e) {
    return w(e, S);
  }
  function O(e) {
    let t = "",
      n = "";
    for (; (t = T(e)); ) n += t;
    return n;
  }
  function P(e) {
    return "'" !== e && e !== Vy;
  }
  function F(e) {
    const t = e.currentChar();
    switch (t) {
      case "\\":
      case "'":
        return e.next(), `\\${t}`;
      case "u":
        return L(e, t, 4);
      case "U":
        return L(e, t, 6);
      default:
        return p(Py, i(), 0, t), "";
    }
  }
  function L(e, t, n) {
    h(e, t);
    let r = "";
    for (let o = 0; o < n; o++) {
      const n = A(e);
      if (!n) {
        p(Fy, i(), 0, `\\${t}${r}${e.currentChar()}`);
        break;
      }
      r += n;
    }
    return `\\${t}${r}`;
  }
  function N(e) {
    return "{" !== e && "}" !== e && e !== zy && e !== Vy;
  }
  function I(e) {
    g(e);
    const t = h(e, "|");
    return g(e), t;
  }
  function R(e, t) {
    let n = null;
    switch (e.currentChar()) {
      case "{":
        return (
          t.braceNest >= 1 && p(Ry, i(), 0),
          e.next(),
          (n = d(t, 2, "{")),
          g(e),
          t.braceNest++,
          n
        );
      case "}":
        return (
          t.braceNest > 0 && 2 === t.currentType && p(Iy, i(), 0),
          e.next(),
          (n = d(t, 3, "}")),
          t.braceNest--,
          t.braceNest > 0 && g(e),
          t.inLinked && 0 === t.braceNest && (t.inLinked = !1),
          n
        );
      case "@":
        return (
          t.braceNest > 0 && p(Ny, i(), 0),
          (n = M(e, t) || f(t)),
          (t.braceNest = 0),
          n
        );
      default: {
        let r = !0,
          o = !0,
          s = !0;
        if (b(e))
          return (
            t.braceNest > 0 && p(Ny, i(), 0),
            (n = d(t, 1, I(e))),
            (t.braceNest = 0),
            (t.inLinked = !1),
            n
          );
        if (
          t.braceNest > 0 &&
          (4 === t.currentType || 5 === t.currentType || 6 === t.currentType)
        )
          return p(Ny, i(), 0), (t.braceNest = 0), B(e, t);
        if (
          (r = (function (e, t) {
            const { currentType: n } = t;
            if (2 !== n) return !1;
            m(e);
            const r = v(e.currentPeek());
            return e.resetPeek(), r;
          })(e, t))
        )
          return (
            (n = d(
              t,
              4,
              (function (e) {
                g(e);
                let t = "",
                  n = "";
                for (; (t = C(e)); ) n += t;
                return e.currentChar() === Gy && p(Ny, i(), 0), n;
              })(e)
            )),
            g(e),
            n
          );
        if ((o = y(e, t)))
          return (
            (n = d(
              t,
              5,
              (function (e) {
                g(e);
                let t = "";
                return (
                  "-" === e.currentChar()
                    ? (e.next(), (t += `-${O(e)}`))
                    : (t += O(e)),
                  e.currentChar() === Gy && p(Ny, i(), 0),
                  t
                );
              })(e)
            )),
            g(e),
            n
          );
        if (
          (s = (function (e, t) {
            const { currentType: n } = t;
            if (2 !== n) return !1;
            m(e);
            const r = "'" === e.currentPeek();
            return e.resetPeek(), r;
          })(e, t))
        )
          return (
            (n = d(
              t,
              6,
              (function (e) {
                g(e), h(e, "'");
                let t = "",
                  n = "";
                for (; (t = w(e, P)); ) n += "\\" === t ? F(e) : t;
                const r = e.currentChar();
                return r === Vy || r === Gy
                  ? (p(Oy, i(), 0), r === Vy && (e.next(), h(e, "'")), n)
                  : (h(e, "'"), n);
              })(e)
            )),
            g(e),
            n
          );
        if (!r && !o && !s)
          return (
            (n = d(
              t,
              12,
              (function (e) {
                g(e);
                let t = "",
                  n = "";
                for (; (t = w(e, N)); ) n += t;
                return n;
              })(e)
            )),
            p(Ay, i(), 0, n.value),
            g(e),
            n
          );
        break;
      }
    }
    return n;
  }
  function M(e, t) {
    const { currentType: n } = t;
    let r = null;
    const o = e.currentChar();
    switch (
      ((7 !== n && 8 !== n && 11 !== n && 9 !== n) ||
        (o !== Vy && o !== zy) ||
        p(My, i(), 0),
      o)
    ) {
      case "@":
        return e.next(), (r = d(t, 7, "@")), (t.inLinked = !0), r;
      case ".":
        return g(e), e.next(), d(t, 8, ".");
      case ":":
        return g(e), e.next(), d(t, 9, ":");
      default:
        return b(e)
          ? ((r = d(t, 1, I(e))), (t.braceNest = 0), (t.inLinked = !1), r)
          : (function (e, t) {
              const { currentType: n } = t;
              if (7 !== n) return !1;
              m(e);
              const r = "." === e.currentPeek();
              return e.resetPeek(), r;
            })(e, t) ||
            (function (e, t) {
              const { currentType: n } = t;
              if (7 !== n && 11 !== n) return !1;
              m(e);
              const r = ":" === e.currentPeek();
              return e.resetPeek(), r;
            })(e, t)
          ? (g(e), M(e, t))
          : (function (e, t) {
              const { currentType: n } = t;
              if (8 !== n) return !1;
              m(e);
              const r = v(e.currentPeek());
              return e.resetPeek(), r;
            })(e, t)
          ? (g(e),
            d(
              t,
              11,
              (function (e) {
                let t = "",
                  n = "";
                for (; (t = x(e)); ) n += t;
                return n;
              })(e)
            ))
          : (function (e, t) {
              const { currentType: n } = t;
              if (9 !== n) return !1;
              const r = () => {
                  const t = e.currentPeek();
                  return "{" === t
                    ? v(e.peek())
                    : !(
                        "@" === t ||
                        "|" === t ||
                        ":" === t ||
                        "." === t ||
                        t === zy ||
                        !t
                      ) && (t === Vy ? (e.peek(), r()) : _(e, !1));
                },
                o = r();
              return e.resetPeek(), o;
            })(e, t)
          ? (g(e),
            "{" === o
              ? R(e, t) || r
              : d(
                  t,
                  10,
                  (function (e) {
                    const t = (n) => {
                      const r = e.currentChar();
                      return "{" !== r &&
                        "@" !== r &&
                        "|" !== r &&
                        "(" !== r &&
                        ")" !== r &&
                        r
                        ? r === zy
                          ? n
                          : ((n += r), e.next(), t(n))
                        : n;
                    };
                    return t("");
                  })(e)
                ))
          : (7 === n && p(My, i(), 0),
            (t.braceNest = 0),
            (t.inLinked = !1),
            B(e, t));
    }
  }
  function B(e, t) {
    let n = { type: 13 };
    if (t.braceNest > 0) return R(e, t) || f(t);
    if (t.inLinked) return M(e, t) || f(t);
    switch (e.currentChar()) {
      case "{":
        return R(e, t) || f(t);
      case "}":
        return p(Ly, i(), 0), e.next(), d(t, 3, "}");
      case "@":
        return M(e, t) || f(t);
      default:
        if (b(e))
          return (n = d(t, 1, I(e))), (t.braceNest = 0), (t.inLinked = !1), n;
        if (_(e))
          return d(
            t,
            0,
            (function (e) {
              let t = "";
              for (;;) {
                const n = e.currentChar();
                if ("{" === n || "}" === n || "@" === n || "|" === n || !n)
                  break;
                if (n === zy || n === Vy)
                  if (_(e)) (t += n), e.next();
                  else {
                    if (b(e)) break;
                    (t += n), e.next();
                  }
                else (t += n), e.next();
              }
              return t;
            })(e)
          );
    }
    return n;
  }
  return {
    nextToken: function () {
      const { currentType: e, offset: t, startLoc: n, endLoc: s } = l;
      return (
        (l.lastType = e),
        (l.lastOffset = t),
        (l.lastStartLoc = n),
        (l.lastEndLoc = s),
        (l.offset = o()),
        (l.startLoc = i()),
        r.currentChar() === Gy ? d(l, 13) : B(r, l)
      );
    },
    currentOffset: o,
    currentPosition: i,
    context: c,
  };
}
const Jy = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Qy(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const e = parseInt(t || n, 16);
      return e <= 55295 || e >= 57344 ? String.fromCodePoint(e) : "�";
    }
  }
}
function Zy(e = {}) {
  const t = !1 !== e.location,
    { onError: n } = e;
  function r(e, r, o, i, ...s) {
    const a = e.currentPosition();
    if (((a.offset += i), (a.column += i), n)) {
      const e = qy(r, t ? Ty(o, a) : null, { domain: "parser", args: s });
      n(e);
    }
  }
  function o(e, n, r) {
    const o = { type: e };
    return t && ((o.start = n), (o.end = n), (o.loc = { start: r, end: r })), o;
  }
  function i(e, n, r, o) {
    t && ((e.end = n), e.loc && (e.loc.end = r));
  }
  function s(e, t) {
    const n = e.context(),
      r = o(3, n.offset, n.startLoc);
    return (r.value = t), i(r, e.currentOffset(), e.currentPosition()), r;
  }
  function a(e, t) {
    const n = e.context(),
      { lastOffset: r, lastStartLoc: s } = n,
      a = o(5, r, s);
    return (
      (a.index = parseInt(t, 10)),
      e.nextToken(),
      i(a, e.currentOffset(), e.currentPosition()),
      a
    );
  }
  function l(e, t) {
    const n = e.context(),
      { lastOffset: r, lastStartLoc: s } = n,
      a = o(4, r, s);
    return (
      (a.key = t),
      e.nextToken(),
      i(a, e.currentOffset(), e.currentPosition()),
      a
    );
  }
  function c(e, t) {
    const n = e.context(),
      { lastOffset: r, lastStartLoc: s } = n,
      a = o(9, r, s);
    return (
      (a.value = t.replace(Jy, Qy)),
      e.nextToken(),
      i(a, e.currentOffset(), e.currentPosition()),
      a
    );
  }
  function u(e) {
    const t = e.context(),
      n = o(6, t.offset, t.startLoc);
    let s = e.nextToken();
    if (8 === s.type) {
      const t = (function (e) {
        const t = e.nextToken(),
          n = e.context(),
          { lastOffset: s, lastStartLoc: a } = n,
          l = o(8, s, a);
        return 11 !== t.type
          ? (r(e, jy, n.lastStartLoc, 0),
            (l.value = ""),
            i(l, s, a),
            { nextConsumeToken: t, node: l })
          : (null == t.value && r(e, Uy, n.lastStartLoc, 0, eb(t)),
            (l.value = t.value || ""),
            i(l, e.currentOffset(), e.currentPosition()),
            { node: l });
      })(e);
      (n.modifier = t.node), (s = t.nextConsumeToken || e.nextToken());
    }
    switch (
      (9 !== s.type && r(e, Uy, t.lastStartLoc, 0, eb(s)),
      (s = e.nextToken()),
      2 === s.type && (s = e.nextToken()),
      s.type)
    ) {
      case 10:
        null == s.value && r(e, Uy, t.lastStartLoc, 0, eb(s)),
          (n.key = (function (e, t) {
            const n = e.context(),
              r = o(7, n.offset, n.startLoc);
            return (
              (r.value = t), i(r, e.currentOffset(), e.currentPosition()), r
            );
          })(e, s.value || ""));
        break;
      case 4:
        null == s.value && r(e, Uy, t.lastStartLoc, 0, eb(s)),
          (n.key = l(e, s.value || ""));
        break;
      case 5:
        null == s.value && r(e, Uy, t.lastStartLoc, 0, eb(s)),
          (n.key = a(e, s.value || ""));
        break;
      case 6:
        null == s.value && r(e, Uy, t.lastStartLoc, 0, eb(s)),
          (n.key = c(e, s.value || ""));
        break;
      default: {
        r(e, $y, t.lastStartLoc, 0);
        const a = e.context(),
          l = o(7, a.offset, a.startLoc);
        return (
          (l.value = ""),
          i(l, a.offset, a.startLoc),
          (n.key = l),
          i(n, a.offset, a.startLoc),
          { nextConsumeToken: s, node: n }
        );
      }
    }
    return i(n, e.currentOffset(), e.currentPosition()), { node: n };
  }
  function p(e) {
    const t = e.context(),
      n = o(
        2,
        1 === t.currentType ? e.currentOffset() : t.offset,
        1 === t.currentType ? t.endLoc : t.startLoc
      );
    n.items = [];
    let p = null;
    do {
      const o = p || e.nextToken();
      switch (((p = null), o.type)) {
        case 0:
          null == o.value && r(e, Uy, t.lastStartLoc, 0, eb(o)),
            n.items.push(s(e, o.value || ""));
          break;
        case 5:
          null == o.value && r(e, Uy, t.lastStartLoc, 0, eb(o)),
            n.items.push(a(e, o.value || ""));
          break;
        case 4:
          null == o.value && r(e, Uy, t.lastStartLoc, 0, eb(o)),
            n.items.push(l(e, o.value || ""));
          break;
        case 6:
          null == o.value && r(e, Uy, t.lastStartLoc, 0, eb(o)),
            n.items.push(c(e, o.value || ""));
          break;
        case 7: {
          const t = u(e);
          n.items.push(t.node), (p = t.nextConsumeToken || null);
          break;
        }
      }
    } while (13 !== t.currentType && 1 !== t.currentType);
    return (
      i(
        n,
        1 === t.currentType ? t.lastOffset : e.currentOffset(),
        1 === t.currentType ? t.lastEndLoc : e.currentPosition()
      ),
      n
    );
  }
  function d(e) {
    const t = e.context(),
      { offset: n, startLoc: s } = t,
      a = p(e);
    return 13 === t.currentType
      ? a
      : (function (e, t, n, s) {
          const a = e.context();
          let l = 0 === s.items.length;
          const c = o(1, t, n);
          (c.cases = []), c.cases.push(s);
          do {
            const t = p(e);
            l || (l = 0 === t.items.length), c.cases.push(t);
          } while (13 !== a.currentType);
          return (
            l && r(e, By, n, 0), i(c, e.currentOffset(), e.currentPosition()), c
          );
        })(e, n, s, a);
  }
  return {
    parse: function (n) {
      const s = Ky(n, nv({}, e)),
        a = s.context(),
        l = o(0, a.offset, a.startLoc);
      return (
        t && l.loc && (l.loc.source = n),
        (l.body = d(s)),
        e.onCacheKey && (l.cacheKey = e.onCacheKey(n)),
        13 !== a.currentType && r(s, Uy, a.lastStartLoc, 0, n[a.offset] || ""),
        i(l, s.currentOffset(), s.currentPosition()),
        l
      );
    },
  };
}
function eb(e) {
  if (13 === e.type) return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function tb(e, t) {
  for (let n = 0; n < e.length; n++) nb(e[n], t);
}
function nb(e, t) {
  switch (e.type) {
    case 1:
      tb(e.cases, t), t.helper("plural");
      break;
    case 2:
      tb(e.items, t);
      break;
    case 6:
      nb(e.key, t), t.helper("linked"), t.helper("type");
      break;
    case 5:
      t.helper("interpolate"), t.helper("list");
      break;
    case 4:
      t.helper("interpolate"), t.helper("named");
  }
}
function rb(e, t = {}) {
  const n = (function (e) {
    const t = { ast: e, helpers: new Set() };
    return { context: () => t, helper: (e) => (t.helpers.add(e), e) };
  })(e);
  n.helper("normalize"), e.body && nb(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function ob(e) {
  if (1 === e.items.length) {
    const t = e.items[0];
    (3 !== t.type && 9 !== t.type) || ((e.static = t.value), delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const r = e.items[n];
      if (3 !== r.type && 9 !== r.type) break;
      if (null == r.value) break;
      t.push(r.value);
    }
    if (t.length === e.items.length) {
      e.static = yv(t);
      for (let t = 0; t < e.items.length; t++) {
        const n = e.items[t];
        (3 !== n.type && 9 !== n.type) || delete n.value;
      }
    }
  }
}
function ib(e) {
  switch (((e.t = e.type), e.type)) {
    case 0: {
      const t = e;
      ib(t.body), (t.b = t.body), delete t.body;
      break;
    }
    case 1: {
      const t = e,
        n = t.cases;
      for (let e = 0; e < n.length; e++) ib(n[e]);
      (t.c = n), delete t.cases;
      break;
    }
    case 2: {
      const t = e,
        n = t.items;
      for (let e = 0; e < n.length; e++) ib(n[e]);
      (t.i = n),
        delete t.items,
        t.static && ((t.s = t.static), delete t.static);
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const t = e;
      t.value && ((t.v = t.value), delete t.value);
      break;
    }
    case 6: {
      const t = e;
      ib(t.key),
        (t.k = t.key),
        delete t.key,
        t.modifier && (ib(t.modifier), (t.m = t.modifier), delete t.modifier);
      break;
    }
    case 5: {
      const t = e;
      (t.i = t.index), delete t.index;
      break;
    }
    case 4: {
      const t = e;
      (t.k = t.key), delete t.key;
      break;
    }
  }
  delete e.type;
}
function sb(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      !(function (e, t) {
        t.body ? sb(e, t.body) : e.push("null");
      })(e, t);
      break;
    case 1:
      !(function (e, t) {
        const { helper: n, needIndent: r } = e;
        if (t.cases.length > 1) {
          e.push(`${n("plural")}([`), e.indent(r());
          const o = t.cases.length;
          for (let n = 0; n < o && (sb(e, t.cases[n]), n !== o - 1); n++)
            e.push(", ");
          e.deindent(r()), e.push("])");
        }
      })(e, t);
      break;
    case 2:
      !(function (e, t) {
        const { helper: n, needIndent: r } = e;
        e.push(`${n("normalize")}([`), e.indent(r());
        const o = t.items.length;
        for (let i = 0; i < o && (sb(e, t.items[i]), i !== o - 1); i++)
          e.push(", ");
        e.deindent(r()), e.push("])");
      })(e, t);
      break;
    case 6:
      !(function (e, t) {
        const { helper: n } = e;
        e.push(`${n("linked")}(`),
          sb(e, t.key),
          t.modifier
            ? (e.push(", "), sb(e, t.modifier), e.push(", _type"))
            : e.push(", undefined, _type"),
          e.push(")");
      })(e, t);
      break;
    case 8:
    case 7:
    case 9:
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
  }
}
function ab(e, t = {}) {
  const n = nv({}, t),
    r = !!n.jit,
    o = !!n.minify,
    i = null == n.optimize || n.optimize,
    s = Zy(n).parse(e);
  return r
    ? (i &&
        (function (e) {
          const t = e.body;
          2 === t.type ? ob(t) : t.cases.forEach((e) => ob(e));
        })(s),
      o && ib(s),
      { ast: s, code: "" })
    : (rb(s, n),
      ((e, t = {}) => {
        const n = dv(t.mode) ? t.mode : "normal",
          r = dv(t.filename) ? t.filename : "message.intl",
          o = !!t.sourceMap,
          i =
            null != t.breakLineCode
              ? t.breakLineCode
              : "arrow" === n
              ? ";"
              : "\n",
          s = t.needIndent ? t.needIndent : "arrow" !== n,
          a = e.helpers || [],
          l = (function (e, t) {
            const {
                sourceMap: n,
                filename: r,
                breakLineCode: o,
                needIndent: i,
              } = t,
              s = !1 !== t.location,
              a = {
                filename: r,
                code: "",
                column: 1,
                line: 1,
                offset: 0,
                map: void 0,
                breakLineCode: o,
                needIndent: i,
                indentLevel: 0,
              };
            function l(e, t) {
              a.code += e;
            }
            function c(e, t = !0) {
              const n = t ? o : "";
              l(i ? n + "  ".repeat(e) : n);
            }
            return (
              s && e.loc && (a.source = e.loc.source),
              {
                context: () => a,
                push: l,
                indent: function (e = !0) {
                  const t = ++a.indentLevel;
                  e && c(t);
                },
                deindent: function (e = !0) {
                  const t = --a.indentLevel;
                  e && c(t);
                },
                newline: function () {
                  c(a.indentLevel);
                },
                helper: (e) => `_${e}`,
                needIndent: () => a.needIndent,
              }
            );
          })(e, {
            mode: n,
            filename: r,
            sourceMap: o,
            breakLineCode: i,
            needIndent: s,
          });
        l.push("normal" === n ? "function __msg__ (ctx) {" : "(ctx) => {"),
          l.indent(s),
          a.length > 0 &&
            (l.push(
              `const { ${yv(
                a.map((e) => `${e}: _${e}`),
                ", "
              )} } = ctx`
            ),
            l.newline()),
          l.push("return "),
          sb(l, e),
          l.deindent(s),
          l.push("}"),
          delete e.helpers;
        const { code: c, map: u } = l.context();
        return { ast: e, code: c, map: u ? u.toJSON() : void 0 };
      })(s, n));
}
function lb(e) {
  return (t) =>
    (function (e, t) {
      const n = ((r = t), wb(r, cb));
      var r;
      if (null == n) throw Db(0);
      if (1 === gb(n)) {
        const t = (function (e) {
          return wb(e, ub, []);
        })(n);
        return e.plural(t.reduce((t, n) => [...t, pb(e, n)], []));
      }
      return pb(e, n);
    })(t, e);
}
const cb = ["b", "body"];
const ub = ["c", "cases"];
function pb(e, t) {
  const n = (function (e) {
    return wb(e, db);
  })(t);
  if (null != n) return "text" === e.type ? n : e.normalize([n]);
  {
    const n = (function (e) {
      return wb(e, fb, []);
    })(t).reduce((t, n) => [...t, hb(e, n)], []);
    return e.normalize(n);
  }
}
const db = ["s", "static"];
const fb = ["i", "items"];
function hb(e, t) {
  const n = gb(t);
  switch (n) {
    case 3:
    case 9:
    case 7:
    case 8:
      return yb(t, n);
    case 4: {
      const r = t;
      if (cv(r, "k") && r.k) return e.interpolate(e.named(r.k));
      if (cv(r, "key") && r.key) return e.interpolate(e.named(r.key));
      throw Db(n);
    }
    case 5: {
      const r = t;
      if (cv(r, "i") && Zg(r.i)) return e.interpolate(e.list(r.i));
      if (cv(r, "index") && Zg(r.index)) return e.interpolate(e.list(r.index));
      throw Db(n);
    }
    case 6: {
      const n = t,
        r = (function (e) {
          return wb(e, bb);
        })(n),
        o = (function (e) {
          const t = wb(e, _b);
          if (t) return t;
          throw Db(6);
        })(n);
      return e.linked(hb(e, o), r ? hb(e, r) : void 0, e.type);
    }
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const mb = ["t", "type"];
function gb(e) {
  return wb(e, mb);
}
const vb = ["v", "value"];
function yb(e, t) {
  const n = wb(e, vb);
  if (n) return n;
  throw Db(t);
}
const bb = ["m", "modifier"];
const _b = ["k", "key"];
function wb(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const n = t[r];
    if (cv(e, n) && null != e[n]) return e[n];
  }
  return n;
}
function Db(e) {
  return new Error(`unhandled node type: ${e}`);
}
const xb = (e) => e;
let kb = ov();
function Cb(e) {
  return hv(e) && 0 === gb(e) && (cv(e, "b") || cv(e, "body"));
}
let Eb = null;
const Tb = Sb("function:translate");
function Sb(e) {
  return (t) => Eb && Eb.emit(e, t);
}
const Ab = 17,
  Ob = 18,
  Pb = 19,
  Fb = 21,
  Lb = 22,
  Nb = 23;
function Ib(e) {
  return qy(e, null, void 0);
}
function Rb(e, t) {
  return null != t.locale ? Bb(t.locale) : Bb(e.locale);
}
let Mb;
function Bb(e) {
  if (dv(e)) return e;
  if (pv(e)) {
    if (e.resolvedOnce && null != Mb) return Mb;
    if ("Function" === e.constructor.name) {
      const n = e();
      if (hv((t = n)) && pv(t.then) && pv(t.catch)) throw Ib(Fb);
      return (Mb = n);
    }
    throw Ib(Lb);
  }
  throw Ib(Nb);
  var t;
}
function jb(e, t, n) {
  return [
    ...new Set([
      n,
      ...(uv(t) ? t : hv(t) ? Object.keys(t) : dv(t) ? [t] : [n]),
    ]),
  ];
}
function $b(e, t, n) {
  const r = dv(n) ? n : Kb,
    o = e;
  o.__localeChainCache || (o.__localeChainCache = new Map());
  let i = o.__localeChainCache.get(r);
  if (!i) {
    i = [];
    let e = [n];
    for (; uv(e); ) e = Ub(i, e, t);
    const s = uv(t) || !vv(t) ? t : t.default ? t.default : null;
    (e = dv(s) ? [s] : s),
      uv(e) && Ub(i, e, !1),
      o.__localeChainCache.set(r, i);
  }
  return i;
}
function Ub(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && fv(r); o++) {
    const i = t[o];
    dv(i) && (r = qb(e, t[o], n));
  }
  return r;
}
function qb(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    (r = Hb(e, o.join("-"), n)), o.splice(-1, 1);
  } while (o.length && !0 === r);
  return r;
}
function Hb(e, t, n) {
  let r = !1;
  if (!e.includes(t) && ((r = !0), t)) {
    r = "!" !== t[t.length - 1];
    const o = t.replace(/!/g, "");
    e.push(o), (uv(n) || vv(n)) && n[o] && (r = n[o]);
  }
  return r;
}
const zb = [];
(zb[0] = { w: [0], i: [3, 0], "[": [4], o: [7] }),
  (zb[1] = { w: [1], ".": [2], "[": [4], o: [7] }),
  (zb[2] = { w: [2], i: [3, 0], 0: [3, 0] }),
  (zb[3] = {
    i: [3, 0],
    0: [3, 0],
    w: [1, 1],
    ".": [2, 1],
    "[": [4, 1],
    o: [7, 1],
  }),
  (zb[4] = {
    "'": [5, 0],
    '"': [6, 0],
    "[": [4, 2],
    "]": [1, 3],
    o: 8,
    l: [4, 0],
  }),
  (zb[5] = { "'": [4, 0], o: 8, l: [5, 0] }),
  (zb[6] = { '"': [4, 0], o: 8, l: [6, 0] });
const Vb = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Wb(e) {
  if (null == e) return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function Yb(e) {
  const t = e.trim();
  return (
    ("0" !== e.charAt(0) || !isNaN(parseInt(e))) &&
    ((n = t),
    Vb.test(n)
      ? (function (e) {
          const t = e.charCodeAt(0);
          return t !== e.charCodeAt(e.length - 1) || (34 !== t && 39 !== t)
            ? e
            : e.slice(1, -1);
        })(t)
      : "*" + t)
  );
  var n;
}
const Xb = new Map();
function Gb(e, t) {
  return hv(e) ? e[t] : null;
}
const Kb = "en-US",
  Jb = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
let Qb, Zb, e_;
let t_ = null;
const n_ = () => t_;
let r_ = null;
const o_ = (e) => {
  r_ = e;
};
let i_ = 0;
function s_(e = {}) {
  const t = pv(e.onWarn) ? e.onWarn : bv,
    n = dv(e.version) ? e.version : "10.0.5",
    r = dv(e.locale) || pv(e.locale) ? e.locale : Kb,
    o = pv(r) ? Kb : r,
    i =
      uv(e.fallbackLocale) ||
      vv(e.fallbackLocale) ||
      dv(e.fallbackLocale) ||
      !1 === e.fallbackLocale
        ? e.fallbackLocale
        : o,
    s = vv(e.messages) ? e.messages : a_(o),
    a = vv(e.datetimeFormats) ? e.datetimeFormats : a_(o),
    l = vv(e.numberFormats) ? e.numberFormats : a_(o),
    c = nv(ov(), e.modifiers, {
      upper: (e, t) =>
        "text" === t && dv(e)
          ? e.toUpperCase()
          : "vnode" === t && hv(e) && "__v_isVNode" in e
          ? e.children.toUpperCase()
          : e,
      lower: (e, t) =>
        "text" === t && dv(e)
          ? e.toLowerCase()
          : "vnode" === t && hv(e) && "__v_isVNode" in e
          ? e.children.toLowerCase()
          : e,
      capitalize: (e, t) =>
        "text" === t && dv(e)
          ? Jb(e)
          : "vnode" === t && hv(e) && "__v_isVNode" in e
          ? Jb(e.children)
          : e,
    }),
    u = e.pluralRules || ov(),
    p = pv(e.missing) ? e.missing : null,
    d = (!fv(e.missingWarn) && !ev(e.missingWarn)) || e.missingWarn,
    f = (!fv(e.fallbackWarn) && !ev(e.fallbackWarn)) || e.fallbackWarn,
    h = !!e.fallbackFormat,
    m = !!e.unresolving,
    g = pv(e.postTranslation) ? e.postTranslation : null,
    v = vv(e.processor) ? e.processor : null,
    y = !fv(e.warnHtmlMessage) || e.warnHtmlMessage,
    b = !!e.escapeParameter,
    _ = pv(e.messageCompiler) ? e.messageCompiler : Qb,
    w = pv(e.messageResolver) ? e.messageResolver : Zb || Gb,
    D = pv(e.localeFallbacker) ? e.localeFallbacker : e_ || jb,
    x = hv(e.fallbackContext) ? e.fallbackContext : void 0,
    k = e,
    C = hv(k.__datetimeFormatters) ? k.__datetimeFormatters : new Map(),
    E = hv(k.__numberFormatters) ? k.__numberFormatters : new Map(),
    T = hv(k.__meta) ? k.__meta : {};
  i_++;
  const S = {
    version: n,
    cid: i_,
    locale: r,
    fallbackLocale: i,
    messages: s,
    modifiers: c,
    pluralRules: u,
    missing: p,
    missingWarn: d,
    fallbackWarn: f,
    fallbackFormat: h,
    unresolving: m,
    postTranslation: g,
    processor: v,
    warnHtmlMessage: y,
    escapeParameter: b,
    messageCompiler: _,
    messageResolver: w,
    localeFallbacker: D,
    fallbackContext: x,
    onWarn: t,
    __meta: T,
  };
  return (
    (S.datetimeFormats = a),
    (S.numberFormats = l),
    (S.__datetimeFormatters = C),
    (S.__numberFormatters = E),
    __INTLIFY_PROD_DEVTOOLS__ &&
      (function (e, t, n) {
        Eb &&
          Eb.emit("i18n:init", {
            timestamp: Date.now(),
            i18n: e,
            version: t,
            meta: n,
          });
      })(S, n, T),
    S
  );
}
const a_ = (e) => ({ [e]: ov() });
function l_(e, t, n, r, o) {
  const { missing: i, onWarn: s } = e;
  if (null !== i) {
    const r = i(e, n, t, o);
    return dv(r) ? r : t;
  }
  return t;
}
function c_(e, t, n) {
  (e.__localeChainCache = new Map()), e.localeFallbacker(e, n, t);
}
function u_(e, t) {
  const n = t.indexOf(e);
  if (-1 === n) return !1;
  for (let i = n + 1; i < t.length; i++)
    if (((r = e), (o = t[i]), r !== o && r.split("-")[0] === o.split("-")[0]))
      return !0;
  var r, o;
  return !1;
}
function p_(e, ...t) {
  const {
      datetimeFormats: n,
      unresolving: r,
      fallbackLocale: o,
      onWarn: i,
      localeFallbacker: s,
    } = e,
    { __datetimeFormatters: a } = e,
    [l, c, u, p] = f_(...t);
  fv(u.missingWarn) ? u.missingWarn : e.missingWarn;
  fv(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
  const d = !!u.part,
    f = Rb(e, u),
    h = s(e, o, f);
  if (!dv(l) || "" === l) return new Intl.DateTimeFormat(f, p).format(c);
  let m,
    g = {},
    v = null;
  for (
    let _ = 0;
    _ < h.length && ((m = h[_]), (g = n[m] || {}), (v = g[l]), !vv(v));
    _++
  )
    l_(e, l, m, 0, "datetime format");
  if (!vv(v) || !dv(m)) return r ? -1 : l;
  let y = `${m}__${l}`;
  tv(p) || (y = `${y}__${JSON.stringify(p)}`);
  let b = a.get(y);
  return (
    b || ((b = new Intl.DateTimeFormat(m, nv({}, v, p))), a.set(y, b)),
    d ? b.formatToParts(c) : b.format(c)
  );
}
const d_ = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits",
];
function f_(...e) {
  const [t, n, r, o] = e,
    i = ov();
  let s,
    a = ov();
  if (dv(t)) {
    const e = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!e) throw Ib(Pb);
    const n = e[3]
      ? e[3].trim().startsWith("T")
        ? `${e[1].trim()}${e[3].trim()}`
        : `${e[1].trim()}T${e[3].trim()}`
      : e[1].trim();
    s = new Date(n);
    try {
      s.toISOString();
    } catch {
      throw Ib(Pb);
    }
  } else if ("[object Date]" === gv(t)) {
    if (isNaN(t.getTime())) throw Ib(Ob);
    s = t;
  } else {
    if (!Zg(t)) throw Ib(Ab);
    s = t;
  }
  return (
    dv(n)
      ? (i.key = n)
      : vv(n) &&
        Object.keys(n).forEach((e) => {
          d_.includes(e) ? (a[e] = n[e]) : (i[e] = n[e]);
        }),
    dv(r) ? (i.locale = r) : vv(r) && (a = r),
    vv(o) && (a = o),
    [i.key || "", s, i, a]
  );
}
function h_(e, t, n) {
  const r = e;
  for (const o in n) {
    const e = `${t}__${o}`;
    r.__datetimeFormatters.has(e) && r.__datetimeFormatters.delete(e);
  }
}
function m_(e, ...t) {
  const {
      numberFormats: n,
      unresolving: r,
      fallbackLocale: o,
      onWarn: i,
      localeFallbacker: s,
    } = e,
    { __numberFormatters: a } = e,
    [l, c, u, p] = v_(...t);
  fv(u.missingWarn) ? u.missingWarn : e.missingWarn;
  fv(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
  const d = !!u.part,
    f = Rb(e, u),
    h = s(e, o, f);
  if (!dv(l) || "" === l) return new Intl.NumberFormat(f, p).format(c);
  let m,
    g = {},
    v = null;
  for (
    let _ = 0;
    _ < h.length && ((m = h[_]), (g = n[m] || {}), (v = g[l]), !vv(v));
    _++
  )
    l_(e, l, m, 0, "number format");
  if (!vv(v) || !dv(m)) return r ? -1 : l;
  let y = `${m}__${l}`;
  tv(p) || (y = `${y}__${JSON.stringify(p)}`);
  let b = a.get(y);
  return (
    b || ((b = new Intl.NumberFormat(m, nv({}, v, p))), a.set(y, b)),
    d ? b.formatToParts(c) : b.format(c)
  );
}
const g_ = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay",
];
function v_(...e) {
  const [t, n, r, o] = e,
    i = ov();
  let s = ov();
  if (!Zg(t)) throw Ib(Ab);
  const a = t;
  return (
    dv(n)
      ? (i.key = n)
      : vv(n) &&
        Object.keys(n).forEach((e) => {
          g_.includes(e) ? (s[e] = n[e]) : (i[e] = n[e]);
        }),
    dv(r) ? (i.locale = r) : vv(r) && (s = r),
    vv(o) && (s = o),
    [i.key || "", a, i, s]
  );
}
function y_(e, t, n) {
  const r = e;
  for (const o in n) {
    const e = `${t}__${o}`;
    r.__numberFormatters.has(e) && r.__numberFormatters.delete(e);
  }
}
const b_ = (e) => e,
  __ = (e) => "",
  w_ = (e) => (0 === e.length ? "" : yv(e)),
  D_ = (e) =>
    null == e
      ? ""
      : uv(e) || (vv(e) && e.toString === mv)
      ? JSON.stringify(e, null, 2)
      : String(e);
function x_(e, t) {
  return (
    (e = Math.abs(e)),
    2 === t ? (e ? (e > 1 ? 1 : 0) : 1) : e ? Math.min(e, 2) : 0
  );
}
function k_(e = {}) {
  const t = e.locale,
    n = (function (e) {
      const t = Zg(e.pluralIndex) ? e.pluralIndex : -1;
      return e.named && (Zg(e.named.count) || Zg(e.named.n))
        ? Zg(e.named.count)
          ? e.named.count
          : Zg(e.named.n)
          ? e.named.n
          : t
        : t;
    })(e),
    r =
      hv(e.pluralRules) && dv(t) && pv(e.pluralRules[t])
        ? e.pluralRules[t]
        : x_,
    o = hv(e.pluralRules) && dv(t) && pv(e.pluralRules[t]) ? x_ : void 0,
    i = e.list || [],
    s = e.named || ov();
  Zg(e.pluralIndex) &&
    (function (e, t) {
      t.count || (t.count = e), t.n || (t.n = e);
    })(n, s);
  function a(t, n) {
    const r = pv(e.messages)
      ? e.messages(t, !!n)
      : !!hv(e.messages) && e.messages[t];
    return r || (e.parent ? e.parent.message(t) : __);
  }
  const l =
      vv(e.processor) && pv(e.processor.normalize) ? e.processor.normalize : w_,
    c =
      vv(e.processor) && pv(e.processor.interpolate)
        ? e.processor.interpolate
        : D_,
    u = {
      list: (e) => i[e],
      named: (e) => s[e],
      plural: (e) => e[r(n, e.length, o)],
      linked: (t, ...n) => {
        const [r, o] = n;
        let i = "text",
          s = "";
        1 === n.length
          ? hv(r)
            ? ((s = r.modifier || s), (i = r.type || i))
            : dv(r) && (s = r || s)
          : 2 === n.length && (dv(r) && (s = r || s), dv(o) && (i = o || i));
        const l = a(t, !0)(u),
          c = "vnode" === i && uv(l) && s ? l[0] : l;
        return s ? ((p = s), e.modifiers ? e.modifiers[p] : b_)(c, i) : c;
        var p;
      },
      message: a,
      type: vv(e.processor) && dv(e.processor.type) ? e.processor.type : "text",
      interpolate: c,
      normalize: l,
      values: nv(ov(), i, s),
    };
  return u;
}
const C_ = () => "",
  E_ = (e) => pv(e);
function T_(e, ...t) {
  const {
      fallbackFormat: n,
      postTranslation: r,
      unresolving: o,
      messageCompiler: i,
      fallbackLocale: s,
      messages: a,
    } = e,
    [l, c] = O_(...t),
    u = fv(c.missingWarn) ? c.missingWarn : e.missingWarn,
    p = fv(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn,
    d = fv(c.escapeParameter) ? c.escapeParameter : e.escapeParameter,
    f = !!c.resolvedMessage,
    h =
      dv(c.default) || fv(c.default)
        ? fv(c.default)
          ? i
            ? l
            : () => l
          : c.default
        : n
        ? i
          ? l
          : () => l
        : null,
    m = n || (null != h && (dv(h) || pv(h))),
    g = Rb(e, c);
  d &&
    (function (e) {
      uv(e.list)
        ? (e.list = e.list.map((e) => (dv(e) ? av(e) : e)))
        : hv(e.named) &&
          Object.keys(e.named).forEach((t) => {
            dv(e.named[t]) && (e.named[t] = av(e.named[t]));
          });
    })(c);
  let [v, y, b] = f ? [l, g, a[g] || ov()] : S_(e, l, g, s, p, u),
    _ = v,
    w = l;
  if (
    (f || dv(_) || Cb(_) || E_(_) || (m && ((_ = h), (w = _))),
    !(f || ((dv(_) || Cb(_) || E_(_)) && dv(y))))
  )
    return o ? -1 : l;
  let D = !1;
  const x = E_(_)
    ? _
    : A_(e, l, y, _, w, () => {
        D = !0;
      });
  if (D) return _;
  const k = (function (e, t, n, r) {
      const {
          modifiers: o,
          pluralRules: i,
          messageResolver: s,
          fallbackLocale: a,
          fallbackWarn: l,
          missingWarn: c,
          fallbackContext: u,
        } = e,
        p = (r, o) => {
          let i = s(n, r);
          if (null == i && (u || o)) {
            const [, , n] = S_(u || e, r, t, a, l, c);
            i = s(n, r);
          }
          if (dv(i) || Cb(i)) {
            let n = !1;
            const o = A_(e, r, t, i, r, () => {
              n = !0;
            });
            return n ? C_ : o;
          }
          return E_(i) ? i : C_;
        },
        d = { locale: t, modifiers: o, pluralRules: i, messages: p };
      e.processor && (d.processor = e.processor);
      r.list && (d.list = r.list);
      r.named && (d.named = r.named);
      Zg(r.plural) && (d.pluralIndex = r.plural);
      return d;
    })(e, y, b, c),
    C = (function (e, t, n) {
      const r = t(n);
      return r;
    })(0, x, k_(k)),
    E = r ? r(C, l) : C;
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const t = {
      timestamp: Date.now(),
      key: dv(l) ? l : E_(_) ? _.key : "",
      locale: y || (E_(_) ? _.locale : ""),
      format: dv(_) ? _ : E_(_) ? _.source : "",
      message: E,
    };
    (t.meta = nv({}, e.__meta, n_() || {})), Tb(t);
  }
  return E;
}
function S_(e, t, n, r, o, i) {
  const { messages: s, onWarn: a, messageResolver: l, localeFallbacker: c } = e,
    u = c(e, r, n);
  let p,
    d = ov(),
    f = null;
  for (
    let h = 0;
    h < u.length &&
    ((p = u[h]),
    (d = s[p] || ov()),
    null === (f = l(d, t)) && (f = d[t]),
    !(dv(f) || Cb(f) || E_(f)));
    h++
  )
    if (!u_(p, u)) {
      const n = l_(e, t, p, 0, "translate");
      n !== t && (f = n);
    }
  return [f, p, d];
}
function A_(e, t, n, r, o, i) {
  const { messageCompiler: s, warnHtmlMessage: a } = e;
  if (E_(r)) {
    const e = r;
    return (e.locale = e.locale || n), (e.key = e.key || t), e;
  }
  if (null == s) {
    const e = () => r;
    return (e.locale = n), (e.key = t), e;
  }
  const l = s(
    r,
    (function (e, t, n, r, o, i) {
      return {
        locale: t,
        key: n,
        warnHtmlMessage: o,
        onError: (e) => {
          throw (i && i(e), e);
        },
        onCacheKey: (e) => ((e, t, n) => Qg({ l: e, k: t, s: n }))(t, n, e),
      };
    })(0, n, o, 0, a, i)
  );
  return (l.locale = n), (l.key = t), (l.source = r), l;
}
function O_(...e) {
  const [t, n, r] = e,
    o = ov();
  if (!(dv(t) || Zg(t) || E_(t) || Cb(t))) throw Ib(Ab);
  const i = Zg(t) ? String(t) : (E_(t), t);
  return (
    Zg(n)
      ? (o.plural = n)
      : dv(n)
      ? (o.default = n)
      : vv(n) && !tv(n)
      ? (o.named = n)
      : uv(n) && (o.list = n),
    Zg(r) ? (o.plural = r) : dv(r) ? (o.default = r) : vv(r) && nv(o, r),
    [i, o]
  );
}
"boolean" != typeof __INTLIFY_PROD_DEVTOOLS__ &&
  (sv().__INTLIFY_PROD_DEVTOOLS__ = !1);
const P_ = 24,
  F_ = 25,
  L_ = 26,
  N_ = 27,
  I_ = 28,
  R_ = 29,
  M_ = 31,
  B_ = 32;
function j_(e, ...t) {
  return qy(e, null, void 0);
}
const $_ = Jg("__translateVNode"),
  U_ = Jg("__datetimeParts"),
  q_ = Jg("__numberParts"),
  H_ = Jg("__setPluralRules"),
  z_ = Jg("__injectWithOption"),
  V_ = Jg("__dispose");
function W_(e) {
  if (!hv(e)) return e;
  for (const t in e)
    if (cv(e, t))
      if (t.includes(".")) {
        const n = t.split("."),
          r = n.length - 1;
        let o = e,
          i = !1;
        for (let e = 0; e < r; e++) {
          if ((n[e] in o || (o[n[e]] = ov()), !hv(o[n[e]]))) {
            i = !0;
            break;
          }
          o = o[n[e]];
        }
        i || ((o[n[r]] = e[t]), delete e[t]), hv(o[n[r]]) && W_(o[n[r]]);
      } else hv(e[t]) && W_(e[t]);
  return e;
}
function Y_(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: i } = t,
    s = vv(n) ? n : uv(r) ? ov() : { [e]: ov() };
  if (
    (uv(r) &&
      r.forEach((e) => {
        if ("locale" in e && "resource" in e) {
          const { locale: t, resource: n } = e;
          t ? ((s[t] = s[t] || ov()), wv(n, s[t])) : wv(n, s);
        } else dv(e) && wv(JSON.parse(e), s);
      }),
    null == o && i)
  )
    for (const a in s) cv(s, a) && W_(s[a]);
  return s;
}
function X_(e) {
  return e.type;
}
function G_(e) {
  return gi(Zo, null, e, 0);
}
const K_ = () => [],
  J_ = () => !1;
let Q_ = 0;
function Z_(e) {
  return (t, n, r, o) => e(n, r, Ai() || void 0, o);
}
function ew(e = {}) {
  const { __root: t, __injectWithOption: n } = e,
    r = void 0 === t,
    o = e.flatJson,
    i = Kg ? Et : Tt;
  let s = !fv(e.inheritLocale) || e.inheritLocale;
  const a = i(t && s ? t.locale.value : dv(e.locale) ? e.locale : Kb),
    l = i(
      t && s
        ? t.fallbackLocale.value
        : dv(e.fallbackLocale) ||
          uv(e.fallbackLocale) ||
          vv(e.fallbackLocale) ||
          !1 === e.fallbackLocale
        ? e.fallbackLocale
        : a.value
    ),
    c = i(Y_(a.value, e)),
    u = i(vv(e.datetimeFormats) ? e.datetimeFormats : { [a.value]: {} }),
    p = i(vv(e.numberFormats) ? e.numberFormats : { [a.value]: {} });
  let d = t
      ? t.missingWarn
      : (!fv(e.missingWarn) && !ev(e.missingWarn)) || e.missingWarn,
    f = t
      ? t.fallbackWarn
      : (!fv(e.fallbackWarn) && !ev(e.fallbackWarn)) || e.fallbackWarn,
    h = t ? t.fallbackRoot : !fv(e.fallbackRoot) || e.fallbackRoot,
    m = !!e.fallbackFormat,
    g = pv(e.missing) ? e.missing : null,
    v = pv(e.missing) ? Z_(e.missing) : null,
    y = pv(e.postTranslation) ? e.postTranslation : null,
    b = t ? t.warnHtmlMessage : !fv(e.warnHtmlMessage) || e.warnHtmlMessage,
    _ = !!e.escapeParameter;
  const w = t ? t.modifiers : vv(e.modifiers) ? e.modifiers : {};
  let D,
    x = e.pluralRules || (t && t.pluralRules);
  (D = (() => {
    r && o_(null);
    const t = {
      version: "10.0.5",
      locale: a.value,
      fallbackLocale: l.value,
      messages: c.value,
      modifiers: w,
      pluralRules: x,
      missing: null === v ? void 0 : v,
      missingWarn: d,
      fallbackWarn: f,
      fallbackFormat: m,
      unresolving: !0,
      postTranslation: null === y ? void 0 : y,
      warnHtmlMessage: b,
      escapeParameter: _,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" },
    };
    (t.datetimeFormats = u.value),
      (t.numberFormats = p.value),
      (t.__datetimeFormatters = vv(D) ? D.__datetimeFormatters : void 0),
      (t.__numberFormatters = vv(D) ? D.__numberFormatters : void 0);
    const n = s_(t);
    return r && o_(n), n;
  })()),
    c_(D, a.value, l.value);
  const k = Hi({
      get: () => a.value,
      set: (e) => {
        (a.value = e), (D.locale = a.value);
      },
    }),
    C = Hi({
      get: () => l.value,
      set: (e) => {
        (l.value = e), (D.fallbackLocale = l.value), c_(D, a.value, e);
      },
    }),
    E = Hi(() => c.value),
    T = Hi(() => u.value),
    S = Hi(() => p.value);
  const A = (e, n, o, i, s, d) => {
    let f;
    a.value, l.value, c.value, u.value, p.value;
    try {
      __INTLIFY_PROD_DEVTOOLS__,
        r || (D.fallbackContext = t ? r_ : void 0),
        (f = e(D));
    } finally {
      __INTLIFY_PROD_DEVTOOLS__, r || (D.fallbackContext = void 0);
    }
    if (
      ("translate exists" !== o && Zg(f) && -1 === f) ||
      ("translate exists" === o && !f)
    ) {
      const [e, r] = n();
      return t && h ? i(t) : s(e);
    }
    if (d(f)) return f;
    throw j_(P_);
  };
  function O(...e) {
    return A(
      (t) => Reflect.apply(T_, null, [t, ...e]),
      () => O_(...e),
      "translate",
      (t) => Reflect.apply(t.t, t, [...e]),
      (e) => e,
      (e) => dv(e)
    );
  }
  const P = {
    normalize: function (e) {
      return e.map((e) => (dv(e) || Zg(e) || fv(e) ? G_(String(e)) : e));
    },
    interpolate: (e) => e,
    type: "vnode",
  };
  function F(e) {
    return c.value[e] || {};
  }
  Q_++,
    t &&
      Kg &&
      (Ao(t.locale, (e) => {
        s && ((a.value = e), (D.locale = e), c_(D, a.value, l.value));
      }),
      Ao(t.fallbackLocale, (e) => {
        s && ((l.value = e), (D.fallbackLocale = e), c_(D, a.value, l.value));
      }));
  const L = {
    id: Q_,
    locale: k,
    fallbackLocale: C,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(e) {
      (s = e),
        e &&
          t &&
          ((a.value = t.locale.value),
          (l.value = t.fallbackLocale.value),
          c_(D, a.value, l.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: E,
    get modifiers() {
      return w;
    },
    get pluralRules() {
      return x || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return d;
    },
    set missingWarn(e) {
      (d = e), (D.missingWarn = d);
    },
    get fallbackWarn() {
      return f;
    },
    set fallbackWarn(e) {
      (f = e), (D.fallbackWarn = f);
    },
    get fallbackRoot() {
      return h;
    },
    set fallbackRoot(e) {
      h = e;
    },
    get fallbackFormat() {
      return m;
    },
    set fallbackFormat(e) {
      (m = e), (D.fallbackFormat = m);
    },
    get warnHtmlMessage() {
      return b;
    },
    set warnHtmlMessage(e) {
      (b = e), (D.warnHtmlMessage = e);
    },
    get escapeParameter() {
      return _;
    },
    set escapeParameter(e) {
      (_ = e), (D.escapeParameter = e);
    },
    t: O,
    getLocaleMessage: F,
    setLocaleMessage: function (e, t) {
      if (o) {
        const n = { [e]: t };
        for (const e in n) cv(n, e) && W_(n[e]);
        t = n[e];
      }
      (c.value[e] = t), (D.messages = c.value);
    },
    mergeLocaleMessage: function (e, t) {
      c.value[e] = c.value[e] || {};
      const n = { [e]: t };
      if (o) for (const r in n) cv(n, r) && W_(n[r]);
      wv((t = n[e]), c.value[e]), (D.messages = c.value);
    },
    getPostTranslationHandler: function () {
      return pv(y) ? y : null;
    },
    setPostTranslationHandler: function (e) {
      (y = e), (D.postTranslation = e);
    },
    getMissingHandler: function () {
      return g;
    },
    setMissingHandler: function (e) {
      null !== e && (v = Z_(e)), (g = e), (D.missing = v);
    },
    [H_]: function (e) {
      (x = e), (D.pluralRules = x);
    },
  };
  return (
    (L.datetimeFormats = T),
    (L.numberFormats = S),
    (L.rt = function (...e) {
      const [t, n, r] = e;
      if (r && !hv(r)) throw j_(F_);
      return O(t, n, nv({ resolvedMessage: !0 }, r || {}));
    }),
    (L.te = function (e, t) {
      return A(
        () => {
          if (!e) return !1;
          const n = F(dv(t) ? t : a.value),
            r = D.messageResolver(n, e);
          return Cb(r) || E_(r) || dv(r);
        },
        () => [e],
        "translate exists",
        (n) => Reflect.apply(n.te, n, [e, t]),
        J_,
        (e) => fv(e)
      );
    }),
    (L.tm = function (e) {
      const n = (function (e) {
        let t = null;
        const n = $b(D, l.value, a.value);
        for (let r = 0; r < n.length; r++) {
          const o = c.value[n[r]] || {},
            i = D.messageResolver(o, e);
          if (null != i) {
            t = i;
            break;
          }
        }
        return t;
      })(e);
      return null != n ? n : (t && t.tm(e)) || {};
    }),
    (L.d = function (...e) {
      return A(
        (t) => Reflect.apply(p_, null, [t, ...e]),
        () => f_(...e),
        "datetime format",
        (t) => Reflect.apply(t.d, t, [...e]),
        () => "",
        (e) => dv(e)
      );
    }),
    (L.n = function (...e) {
      return A(
        (t) => Reflect.apply(m_, null, [t, ...e]),
        () => v_(...e),
        "number format",
        (t) => Reflect.apply(t.n, t, [...e]),
        () => "",
        (e) => dv(e)
      );
    }),
    (L.getDateTimeFormat = function (e) {
      return u.value[e] || {};
    }),
    (L.setDateTimeFormat = function (e, t) {
      (u.value[e] = t), (D.datetimeFormats = u.value), h_(D, e, t);
    }),
    (L.mergeDateTimeFormat = function (e, t) {
      (u.value[e] = nv(u.value[e] || {}, t)),
        (D.datetimeFormats = u.value),
        h_(D, e, t);
    }),
    (L.getNumberFormat = function (e) {
      return p.value[e] || {};
    }),
    (L.setNumberFormat = function (e, t) {
      (p.value[e] = t), (D.numberFormats = p.value), y_(D, e, t);
    }),
    (L.mergeNumberFormat = function (e, t) {
      (p.value[e] = nv(p.value[e] || {}, t)),
        (D.numberFormats = p.value),
        y_(D, e, t);
    }),
    (L[z_] = n),
    (L[$_] = function (...e) {
      return A(
        (t) => {
          let n;
          const r = t;
          try {
            (r.processor = P), (n = Reflect.apply(T_, null, [r, ...e]));
          } finally {
            r.processor = null;
          }
          return n;
        },
        () => O_(...e),
        "translate",
        (t) => t[$_](...e),
        (e) => [G_(e)],
        (e) => uv(e)
      );
    }),
    (L[U_] = function (...e) {
      return A(
        (t) => Reflect.apply(p_, null, [t, ...e]),
        () => f_(...e),
        "datetime format",
        (t) => t[U_](...e),
        K_,
        (e) => dv(e) || uv(e)
      );
    }),
    (L[q_] = function (...e) {
      return A(
        (t) => Reflect.apply(m_, null, [t, ...e]),
        () => v_(...e),
        "number format",
        (t) => t[q_](...e),
        K_,
        (e) => dv(e) || uv(e)
      );
    }),
    L
  );
}
const tw = {
  tag: { type: [String, Object] },
  locale: { type: String },
  scope: {
    type: String,
    validator: (e) => "parent" === e || "global" === e,
    default: "parent",
  },
  i18n: { type: Object },
};
function nw() {
  return Qo;
}
const rw = Un({
  name: "i18n-t",
  props: nv(
    {
      keypath: { type: String, required: !0 },
      plural: { type: [Number, String], validator: (e) => Zg(e) || !isNaN(e) },
    },
    tw
  ),
  setup(e, t) {
    const { slots: n, attrs: r } = t,
      o = e.i18n || dw({ useScope: e.scope, __useComponent: !0 });
    return () => {
      const i = Object.keys(n).filter((e) => "_" !== e),
        s = ov();
      e.locale && (s.locale = e.locale),
        void 0 !== e.plural && (s.plural = dv(e.plural) ? +e.plural : e.plural);
      const a = (function ({ slots: e }, t) {
          if (1 === t.length && "default" === t[0])
            return (e.default ? e.default() : []).reduce(
              (e, t) => [...e, ...(t.type === Qo ? t.children : [t])],
              []
            );
          return t.reduce((t, n) => {
            const r = e[n];
            return r && (t[n] = r()), t;
          }, ov());
        })(t, i),
        l = o[$_](e.keypath, a, s),
        c = nv(ov(), r);
      return zi(dv(e.tag) || hv(e.tag) ? e.tag : nw(), c, l);
    };
  },
});
function ow(e, t, n, r) {
  const { slots: o, attrs: i } = t;
  return () => {
    const t = { part: !0 };
    let s = ov();
    e.locale && (t.locale = e.locale),
      dv(e.format)
        ? (t.key = e.format)
        : hv(e.format) &&
          (dv(e.format.key) && (t.key = e.format.key),
          (s = Object.keys(e.format).reduce(
            (t, r) => (n.includes(r) ? nv(ov(), t, { [r]: e.format[r] }) : t),
            ov()
          )));
    const a = r(e.value, t, s);
    let l = [t.key];
    uv(a)
      ? (l = a.map((e, t) => {
          const n = o[e.type],
            r = n ? n({ [e.type]: e.value, index: t, parts: a }) : [e.value];
          var i;
          return uv((i = r)) && !dv(i[0]) && (r[0].key = `${e.type}-${t}`), r;
        }))
      : dv(a) && (l = [a]);
    const c = nv(ov(), i);
    return zi(dv(e.tag) || hv(e.tag) ? e.tag : nw(), c, l);
  };
}
const iw = Un({
    name: "i18n-n",
    props: nv(
      {
        value: { type: Number, required: !0 },
        format: { type: [String, Object] },
      },
      tw
    ),
    setup(e, t) {
      const n = e.i18n || dw({ useScope: e.scope, __useComponent: !0 });
      return ow(e, t, g_, (...e) => n[q_](...e));
    },
  }),
  sw = Un({
    name: "i18n-d",
    props: nv(
      {
        value: { type: [Number, Date], required: !0 },
        format: { type: [String, Object] },
      },
      tw
    ),
    setup(e, t) {
      const n = e.i18n || dw({ useScope: e.scope, __useComponent: !0 });
      return ow(e, t, d_, (...e) => n[U_](...e));
    },
  });
function aw(e) {
  if (dv(e)) return { path: e };
  if (vv(e)) {
    if (!("path" in e)) throw j_(I_);
    return e;
  }
  throw j_(R_);
}
function lw(e) {
  const { path: t, locale: n, args: r, choice: o, plural: i } = e,
    s = {},
    a = r || {};
  return (
    dv(n) && (s.locale = n),
    Zg(o) && (s.plural = o),
    Zg(i) && (s.plural = i),
    [t, a, s]
  );
}
function cw(e, t, ...n) {
  const r = vv(n[0]) ? n[0] : {};
  (!fv(r.globalInstall) || r.globalInstall) &&
    ([rw.name, "I18nT"].forEach((t) => e.component(t, rw)),
    [iw.name, "I18nN"].forEach((t) => e.component(t, iw)),
    [sw.name, "I18nD"].forEach((t) => e.component(t, sw))),
    e.directive(
      "t",
      (function (e) {
        const t = (t) => {
          const { instance: n, value: r } = t;
          if (!n || !n.$) throw j_(B_);
          const o = (function (e, t) {
              const n = e;
              if ("composition" === e.mode)
                return n.__getInstance(t) || e.global;
              {
                const r = n.__getInstance(t);
                return null != r ? r.__composer : e.global.__composer;
              }
            })(e, n.$),
            i = aw(r);
          return [Reflect.apply(o.t, o, [...lw(i)]), o];
        };
        return {
          created: (n, r) => {
            const [o, i] = t(r);
            Kg &&
              e.global === i &&
              (n.__i18nWatcher = Ao(i.locale, () => {
                r.instance && r.instance.$forceUpdate();
              })),
              (n.__composer = i),
              (n.textContent = o);
          },
          unmounted: (e) => {
            Kg &&
              e.__i18nWatcher &&
              (e.__i18nWatcher(),
              (e.__i18nWatcher = void 0),
              delete e.__i18nWatcher),
              e.__composer && ((e.__composer = void 0), delete e.__composer);
          },
          beforeUpdate: (e, { value: t }) => {
            if (e.__composer) {
              const n = e.__composer,
                r = aw(t);
              e.textContent = Reflect.apply(n.t, n, [...lw(r)]);
            }
          },
          getSSRProps: (e) => {
            const [n] = t(e);
            return { textContent: n };
          },
        };
      })(t)
    );
}
const uw = Jg("global-vue-i18n");
function pw(e = {}, t) {
  const n = !fv(e.globalInjection) || e.globalInjection,
    r = new Map(),
    [o, i] = (function (e) {
      const t = oe(),
        n = t.run(() => ew(e));
      if (null == n) throw j_(B_);
      return [t, n];
    })(e),
    s = Jg("");
  const a = {
    get mode() {
      return "composition";
    },
    async install(e, ...t) {
      if (
        ((e.__VUE_I18N_SYMBOL__ = s),
        e.provide(e.__VUE_I18N_SYMBOL__, a),
        vv(t[0]))
      ) {
        const e = t[0];
        (a.__composerExtend = e.__composerExtend),
          (a.__vueI18nExtend = e.__vueI18nExtend);
      }
      let r = null;
      n &&
        (r = (function (e, t) {
          const n = Object.create(null);
          fw.forEach((e) => {
            const r = Object.getOwnPropertyDescriptor(t, e);
            if (!r) throw j_(B_);
            const o = Ct(r.value)
              ? {
                  get: () => r.value.value,
                  set(e) {
                    r.value.value = e;
                  },
                }
              : { get: () => r.get && r.get() };
            Object.defineProperty(n, e, o);
          }),
            (e.config.globalProperties.$i18n = n),
            hw.forEach((n) => {
              const r = Object.getOwnPropertyDescriptor(t, n);
              if (!r || !r.value) throw j_(B_);
              Object.defineProperty(e.config.globalProperties, `$${n}`, r);
            });
          const r = () => {
            delete e.config.globalProperties.$i18n,
              hw.forEach((t) => {
                delete e.config.globalProperties[`$${t}`];
              });
          };
          return r;
        })(e, a.global)),
        cw(e, a, ...t);
      const o = e.unmount;
      e.unmount = () => {
        r && r(), a.dispose(), o();
      };
    },
    get global() {
      return i;
    },
    dispose() {
      o.stop();
    },
    __instances: r,
    __getInstance: function (e) {
      return r.get(e) || null;
    },
    __setInstance: function (e, t) {
      r.set(e, t);
    },
    __deleteInstance: function (e) {
      r.delete(e);
    },
  };
  return a;
}
function dw(e = {}) {
  const t = Ai();
  if (null == t) throw j_(L_);
  if (
    !t.isCE &&
    null != t.appContext.app &&
    !t.appContext.app.__VUE_I18N_SYMBOL__
  )
    throw j_(N_);
  const n = (function (e) {
      const t = no(e.isCE ? uw : e.appContext.app.__VUE_I18N_SYMBOL__);
      if (!t) throw j_(e.isCE ? M_ : B_);
      return t;
    })(t),
    r = (function (e) {
      return "composition" === e.mode ? e.global : e.global.__composer;
    })(n),
    o = X_(t),
    i = (function (e, t) {
      return tv(e)
        ? "__i18n" in t
          ? "local"
          : "global"
        : e.useScope
        ? e.useScope
        : "local";
    })(e, o);
  if ("global" === i)
    return (
      (function (e, t, n) {
        let r = hv(t.messages) ? t.messages : ov();
        "__i18nGlobal" in n &&
          (r = Y_(e.locale.value, { messages: r, __i18n: n.__i18nGlobal }));
        const o = Object.keys(r);
        if (
          (o.length &&
            o.forEach((t) => {
              e.mergeLocaleMessage(t, r[t]);
            }),
          hv(t.datetimeFormats))
        ) {
          const n = Object.keys(t.datetimeFormats);
          n.length &&
            n.forEach((n) => {
              e.mergeDateTimeFormat(n, t.datetimeFormats[n]);
            });
        }
        if (hv(t.numberFormats)) {
          const n = Object.keys(t.numberFormats);
          n.length &&
            n.forEach((n) => {
              e.mergeNumberFormat(n, t.numberFormats[n]);
            });
        }
      })(r, e, o),
      r
    );
  if ("parent" === i) {
    let o = (function (e, t, n = !1) {
      let r = null;
      const o = t.root;
      let i = (function (e, t = !1) {
        if (null == e) return null;
        return (t && e.vnode.ctx) || e.parent;
      })(t, n);
      for (; null != i; ) {
        const t = e;
        if (("composition" === e.mode && (r = t.__getInstance(i)), null != r))
          break;
        if (o === i) break;
        i = i.parent;
      }
      return r;
    })(n, t, e.__useComponent);
    return null == o && (o = r), o;
  }
  const s = n;
  let a = s.__getInstance(t);
  if (null == a) {
    const n = nv({}, e);
    "__i18n" in o && (n.__i18n = o.__i18n),
      r && (n.__root = r),
      (a = ew(n)),
      s.__composerExtend && (a[V_] = s.__composerExtend(a)),
      (function (e, t, n) {
        fr(() => {}, t),
          vr(() => {
            const r = n;
            e.__deleteInstance(t);
            const o = r[V_];
            o && (o(), delete r[V_]);
          }, t);
      })(s, t, a),
      s.__setInstance(t, a);
  }
  return a;
}
const fw = ["locale", "fallbackLocale", "availableLocales"],
  hw = ["t", "rt", "d", "n", "tm", "te"];
var mw, gw;
if (
  ("boolean" != typeof __INTLIFY_PROD_DEVTOOLS__ &&
    (sv().__INTLIFY_PROD_DEVTOOLS__ = !1),
  (Qb = function (e, t) {
    if (dv(e)) {
      !fv(t.warnHtmlMessage) || t.warnHtmlMessage;
      const n = (t.onCacheKey || xb)(e),
        r = kb[n];
      if (r) return r;
      const { ast: o, detectError: i } = (function (e, t = {}) {
          let n = !1;
          const r = t.onError || Hy;
          return (
            (t.onError = (e) => {
              (n = !0), r(e);
            }),
            { ...ab(e, t), detectError: n }
          );
        })(e, { ...t, location: !1, jit: !0 }),
        s = lb(o);
      return i ? s : (kb[n] = s);
    }
    {
      const t = e.cacheKey;
      if (t) {
        const n = kb[t];
        return n || (kb[t] = lb(e));
      }
      return lb(e);
    }
  }),
  (mw = function (e, t) {
    if (!hv(e)) return null;
    let n = Xb.get(t);
    if (
      (n ||
        ((n = (function (e) {
          const t = [];
          let n,
            r,
            o,
            i,
            s,
            a,
            l,
            c = -1,
            u = 0,
            p = 0;
          const d = [];
          function f() {
            const t = e[c + 1];
            if ((5 === u && "'" === t) || (6 === u && '"' === t))
              return c++, (o = "\\" + t), d[0](), !0;
          }
          for (
            d[0] = () => {
              void 0 === r ? (r = o) : (r += o);
            },
              d[1] = () => {
                void 0 !== r && (t.push(r), (r = void 0));
              },
              d[2] = () => {
                d[0](), p++;
              },
              d[3] = () => {
                if (p > 0) p--, (u = 4), d[0]();
                else {
                  if (((p = 0), void 0 === r)) return !1;
                  if (((r = Yb(r)), !1 === r)) return !1;
                  d[1]();
                }
              };
            null !== u;

          )
            if ((c++, (n = e[c]), "\\" !== n || !f())) {
              if (((i = Wb(n)), (l = zb[u]), (s = l[i] || l.l || 8), 8 === s))
                return;
              if (
                ((u = s[0]),
                void 0 !== s[1] && ((a = d[s[1]]), a && ((o = n), !1 === a())))
              )
                return;
              if (7 === u) return t;
            }
        })(t)),
        n && Xb.set(t, n)),
      !n)
    )
      return null;
    const r = n.length;
    let o = e,
      i = 0;
    for (; i < r; ) {
      const e = o[n[i]];
      if (void 0 === e) return null;
      if (pv(o)) return null;
      (o = e), i++;
    }
    return o;
  }),
  (Zb = mw),
  (e_ = $b),
  __INTLIFY_PROD_DEVTOOLS__)
) {
  const e = sv();
  (e.__INTLIFY__ = !0), (gw = e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__), (Eb = gw);
}
function vw({ dir: e = !0, lang: t = !0, seo: n = !0, key: r = "hid" } = {}) {
  const o = py(),
    i = Et({ htmlAttrs: {}, link: [], meta: [] });
  {
    const s = Ao(
      [() => o.router.currentRoute.value, zv(o.i18n).locale],
      () => {
        (i.value = { htmlAttrs: {}, link: [], meta: [] }),
          (i.value = ry(o, { dir: e, lang: t, seo: n, key: r }));
      },
      { immediate: !0 }
    );
    vr(() => s());
  }
  return i;
}
function yw() {
  return yy(Qv);
}
function bw() {
  return yy(ny);
}
const _w = $l({
  name: "i18n:plugin:switch-locale-path-ssr",
  dependsOn: ["i18n:plugin"],
  setup(e) {
    if (!0 !== e.$config.public.i18n.experimental.switchLocalePathLinkSSR)
      return;
    const t = bw(),
      n = new RegExp(
        [`\x3c!--${Av}-\\[(\\w+)\\]--\x3e`, ".+?", `\x3c!--/${Av}--\x3e`].join(
          ""
        ),
        "g"
      );
    e.hook("app:rendered", (e) => {
      var r;
      null != (null == (r = e.renderResult) ? void 0 : r.html) &&
        (e.renderResult.html = e.renderResult.html.replaceAll(n, (e, n) =>
          e.replace(/href="([^"]+)"/, `href="${encodeURI(t(n ?? ""))}"`)
        ));
    });
  },
});
const ww = $l({
  name: "i18n:plugin",
  parallel: !1,
  async setup(e) {
    let t, n;
    const r = Mc(),
      { vueApp: o } = e,
      i = e,
      s = (function (e) {
        const {
          locales: t,
          defaultLocale: n,
          multiDomainLocales: r,
        } = e.$config.public.i18n;
        let o = n || "";
        if (!r) return o;
        const i = ky();
        if (
          t.some(
            (e) => "string" != typeof e && Array.isArray(e.defaultForDomains)
          )
        ) {
          const e = t.find(
            (e) =>
              !("string" == typeof e || !Array.isArray(e.defaultForDomains)) &&
              e.defaultForDomains.includes(i ?? "")
          );
          o = (null == e ? void 0 : e.code) ?? "";
        }
        return o;
      })(i);
    !(function (e, t) {
      const {
        multiDomainLocales: n,
        strategy: r,
        routesNameSeparator: o,
        defaultLocaleRouteNameSuffix: i,
      } = e.$config.public.i18n;
      if (!n) return;
      if ("prefix_except_default" !== r && "prefix_and_default" !== r) return;
      const s = Rc(),
        a = [o, i].join("");
      for (const l of s.getRoutes()) {
        const e = Pv(l.name);
        if (e.endsWith(a)) {
          s.removeRoute(e);
          continue;
        }
        const n = e.split(o)[1];
        n === t &&
          s.addRoute({
            ...l,
            path: l.path === `/${n}` ? "/" : l.path.replace(`/${n}`, ""),
          });
      }
    })(i, s);
    const a = { ...i.$config.public.i18n, defaultLocale: s };
    a.baseUrl = () => {
      const e = ql(),
        {
          baseUrl: t,
          defaultLocale: n,
          differentDomains: r,
        } = e.$config.public.i18n;
      if (pv(t)) return t(e);
      const o = pv(n) ? n() : n;
      if (r && o) {
        const e = Cy(o);
        if (e) return e;
      }
      return t || t;
    };
    const l = Ey(),
      c =
        (([t, n] = Al(() =>
          (async function (e, t) {
            const n = { messages: {} };
            for (const r of e) {
              const { default: e } = await r();
              wv(pv(e) ? await t.runWithContext(async () => await e()) : e, n);
            }
            return n;
          })(Ev, ql())
        )),
        (t = await t),
        n(),
        t);
    (c.messages = c.messages || {}),
      (c.fallbackLocale = c.fallbackLocale ?? !1);
    const u = uy(),
      p = (e) => e || c.locale || "en-US",
      d = (function () {
        const e = Ey(),
          t = (e && e.cookieKey) || "i18n_redirected",
          n = new Date(),
          r = {
            expires: new Date(n.setDate(n.getDate() + 365)),
            path: "/",
            sameSite: e && e.cookieCrossOrigin ? "none" : "lax",
            secure: (e && e.cookieCrossOrigin) || (e && e.cookieSecure),
          };
        return e && e.cookieDomain && (r.domain = e.cookieDomain), Qf(t, r);
      })();
    let f = fy(
      r,
      u(r),
      p(a.defaultLocale),
      {
        ssg: "no_prefix" === a.strategy ? "ssg_ignore" : "normal",
        callType: "setup",
        firstAccess: !0,
        localeCookie: _y(d, l, a.defaultLocale),
      },
      a
    );
    (c.messages =
      (([t, n] = Al(() =>
        (async function (e, t, n) {
          const {
            defaultLocale: r,
            initialLocale: o,
            localeCodes: i,
            fallbackLocale: s,
            lazy: a,
          } = n;
          if (a && s) {
            const n = Bv(s, [r, o]);
            await Promise.all(n.map((n) => Uv(n, t, e)));
          }
          const l = a ? [...new Set().add(r).add(o)] : i;
          return await Promise.all(l.map((n) => Uv(n, t, e))), e;
        })(c.messages, Cv, {
          localeCodes: kv,
          initialLocale: f,
          lazy: a.lazy,
          defaultLocale: a.defaultLocale,
          fallbackLocale: c.fallbackLocale,
        })
      )),
      (t = await t),
      n(),
      t)),
      (f = p(f));
    const h = pw({ ...c, locale: f });
    let m = !0;
    const g = (e) => f !== e && m;
    let v = !0;
    const y = () => v;
    if (y() && "no_prefix" === a.strategy) {
      const t = d.value;
      e.hook("app:mounted", async () => {
        const e = xy(
          r,
          {
            ssg: "ssg_setup",
            callType: "setup",
            firstAccess: !0,
            localeCookie: t,
          },
          f
        );
        await (function (e, t) {
          return Hv(e).setLocale(t);
        })(h, e.locale),
          (v = !1);
      });
    }
    !(function (e, { extendComposer: t, extendComposerInstance: n }) {
      const r = oe(),
        o = e.install.bind(e);
      e.install = (i, ...s) => {
        const a = Object.assign({}, s[0]);
        a.inject ?? (a.inject = !0),
          (a.__composerExtend = (t) => (n(t, zv(e)), () => {})),
          "legacy" === e.mode &&
            (a.__vueI18nExtend = (e) => (n(e, zv(e)), () => {})),
          Reflect.apply(o, e, [i, a]);
        const l = zv(e);
        if (
          (r.run(() => {
            t(l),
              "legacy" === e.mode && qv(e.global) && n(e.global, zv(e.global));
          }),
          "composition" === e.mode &&
            null != i.config.globalProperties.$i18n &&
            n(i.config.globalProperties.$i18n, l),
          a.inject)
        ) {
          const t = py(e);
          i.mixin({
            methods: {
              $getRouteBaseName: yy(Jv, t),
              $resolveRoute: yy(ty, t),
              $localePath: yy(Qv, t),
              $localeRoute: yy(Zv, t),
              $localeLocation: yy(ey, t),
              $switchLocalePath: yy(ny, t),
              $localeHead: yy(ry, t),
            },
          });
        }
        if (i.unmount) {
          const e = i.unmount.bind(i);
          i.unmount = () => {
            r.stop(), e();
          };
        }
      };
    })(h, {
      extendComposer(t) {
        const n = Mc(),
          r = Et(a.locales),
          o = Et(kv),
          s = Et("");
        (t.locales = Hi(() => r.value)),
          (t.localeCodes = Hi(() => o.value)),
          (t.baseUrl = Hi(() => s.value)),
          Ov
            ? Ao(
                t.locale,
                () => {
                  s.value = Lv(a.baseUrl, i);
                },
                { immediate: !0 }
              )
            : (s.value = Lv(a.baseUrl, i)),
          (t.strategy = a.strategy),
          (t.localeProperties = Hi(
            () =>
              Tv.find((e) => e.code === t.locale.value) || {
                code: t.locale.value,
              }
          )),
          (t.setLocale = async (e) => {
            const t = g(e);
            (await dy(e, h, a, t)) && t && (m = !1);
            const r = await i.runWithContext(() =>
              hy({
                route: { to: n },
                locale: e,
                routeLocale: u(n),
                strategy: a.strategy,
              })
            );
            await i.runWithContext(
              async () =>
                await gy(
                  { nuxtApp: i, i18n: h, redirectPath: r, locale: e, route: n },
                  { enableNavigate: !0 }
                )
            );
          }),
          (t.loadLocaleMessages = async (e) => {
            const t = Xv.bind(null, h);
            await $v(e, Cv, t);
          }),
          (t.differentDomains = a.differentDomains),
          (t.defaultLocale = a.defaultLocale),
          (t.getBrowserLocale = () => by()),
          (t.getLocaleCookie = () => _y(d, l, a.defaultLocale)),
          (t.setLocaleCookie = (e) =>
            (function (e, t, n) {
              !1 !== n && n.useCookie && (e.value = t);
            })(d, e, l)),
          (t.onBeforeLanguageSwitch = (t, n, r, o) =>
            e.callHook("i18n:beforeLocaleSwitch", {
              oldLocale: t,
              newLocale: n,
              initialSetup: r,
              context: o,
            })),
          (t.onLanguageSwitched = (t, n) =>
            e.callHook("i18n:localeSwitched", { oldLocale: t, newLocale: n })),
          (t.finalizePendingLocaleChange = async () => {
            h.__pendingLocale &&
              (Wv(h, h.__pendingLocale),
              h.__resolvePendingLocalePromise &&
                (await h.__resolvePendingLocalePromise()),
              (h.__pendingLocale = void 0));
          }),
          (t.waitForPendingLocaleChange = async () => {
            h.__pendingLocale &&
              h.__pendingLocalePromise &&
              (await h.__pendingLocalePromise);
          });
      },
      extendComposerInstance(e, t) {
        const n = {
          locales: { get: () => t.locales.value },
          localeCodes: { get: () => t.localeCodes.value },
          baseUrl: { get: () => t.baseUrl.value },
          strategy: { get: () => t.strategy },
          localeProperties: { get: () => t.localeProperties.value },
          setLocale: {
            get: () => async (e) => Reflect.apply(t.setLocale, t, [e]),
          },
          loadLocaleMessages: {
            get: () => async (e) => Reflect.apply(t.loadLocaleMessages, t, [e]),
          },
          differentDomains: { get: () => t.differentDomains },
          defaultLocale: { get: () => t.defaultLocale },
          getBrowserLocale: {
            get: () => () => Reflect.apply(t.getBrowserLocale, t, []),
          },
          getLocaleCookie: {
            get: () => () => Reflect.apply(t.getLocaleCookie, t, []),
          },
          setLocaleCookie: {
            get: () => (e) => Reflect.apply(t.setLocaleCookie, t, [e]),
          },
          onBeforeLanguageSwitch: {
            get: () => (e, n, r, o) =>
              Reflect.apply(t.onBeforeLanguageSwitch, t, [e, n, r, o]),
          },
          onLanguageSwitched: {
            get: () => (e, n) => Reflect.apply(t.onLanguageSwitched, t, [e, n]),
          },
          finalizePendingLocaleChange: {
            get: () => () =>
              Reflect.apply(t.finalizePendingLocaleChange, t, []),
          },
          waitForPendingLocaleChange: {
            get: () => () => Reflect.apply(t.waitForPendingLocaleChange, t, []),
          },
        };
        for (const [r, o] of Object.entries(n)) Object.defineProperty(e, r, o);
      },
    }),
      o.use(h),
      (function (e, t) {
        vy(e, "$i18n", Hv(t)),
          vy(e, "$getRouteBaseName", yy(Jv)),
          vy(e, "$localePath", yy(Qv)),
          vy(e, "$localeRoute", yy(Zv)),
          vy(e, "$switchLocalePath", yy(ny)),
          vy(e, "$localeHead", yy(ry));
      })(i, h);
    let b = 0;
    ((e, t, n = {}) => {
      const r = ql(),
        o = n.global || "string" != typeof e,
        i = t;
      i && (o ? r._middleware.global.push(i) : (r._middleware.named[e] = i));
    })(
      "locale-changing",
      Bc(async (e, t) => {
        let n, r;
        const o = u(e),
          s = fy(
            e,
            o,
            () => Yv(h) || p(a.defaultLocale),
            {
              ssg: y() && "no_prefix" === a.strategy ? "ssg_ignore" : "normal",
              callType: "routing",
              firstAccess: 0 === b,
              localeCookie: _y(d, l, a.defaultLocale),
            },
            a
          ),
          c = g(s);
        (([n, r] = Al(() => dy(s, h, a, c))), (n = await n), r(), n) &&
          c &&
          (m = !1);
        const f =
          (([n, r] = Al(() =>
            i.runWithContext(() =>
              hy(
                {
                  route: { to: e, from: t },
                  locale: s,
                  routeLocale: o,
                  strategy: a.strategy,
                },
                !0
              )
            )
          )),
          (n = await n),
          r(),
          n);
        return (
          b++,
          ([n, r] = Al(() =>
            i.runWithContext(async () =>
              gy({ nuxtApp: i, i18n: h, redirectPath: f, locale: s, route: e })
            )
          )),
          (n = await n),
          r(),
          n
        );
      }),
      { global: !0 }
    );
  },
});
function Dw(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function xw(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
var kw,
  Cw,
  Ew,
  Tw,
  Sw,
  Aw,
  Ow,
  Pw,
  Fw,
  Lw,
  Nw,
  Iw,
  Rw,
  Mw,
  Bw,
  jw,
  $w,
  Uw,
  qw,
  Hw,
  zw,
  Vw,
  Ww,
  Yw,
  Xw,
  Gw,
  Kw,
  Jw,
  Qw,
  Zw,
  eD,
  tD,
  nD = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  rD = { duration: 0.5, overwrite: !1, delay: 0 },
  oD = 1e8,
  iD = 1e-8,
  sD = 2 * Math.PI,
  aD = sD / 4,
  lD = 0,
  cD = Math.sqrt,
  uD = Math.cos,
  pD = Math.sin,
  dD = function (e) {
    return "string" == typeof e;
  },
  fD = function (e) {
    return "function" == typeof e;
  },
  hD = function (e) {
    return "number" == typeof e;
  },
  mD = function (e) {
    return void 0 === e;
  },
  gD = function (e) {
    return "object" == typeof e;
  },
  vD = function (e) {
    return !1 !== e;
  },
  yD = function () {
    return "undefined" != typeof window;
  },
  bD = function (e) {
    return fD(e) || dD(e);
  },
  _D =
    ("function" == typeof ArrayBuffer && ArrayBuffer.isView) || function () {},
  wD = Array.isArray,
  DD = /(?:-?\.?\d|\.)+/gi,
  xD = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  kD = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  CD = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  ED = /[+-]=-?[.\d]+/,
  TD = /[^,'"\[\]\s]+/gi,
  SD = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  AD = {},
  OD = {},
  PD = function (e) {
    return (OD = ix(e, AD)) && iC;
  },
  FD = function (e, t) {
    return !t && void 0;
  },
  LD = function (e, t) {
    return (e && (AD[e] = t) && OD && (OD[e] = t)) || AD;
  },
  ND = function () {
    return 0;
  },
  ID = { suppressEvents: !0, isStart: !0, kill: !1 },
  RD = { suppressEvents: !0, kill: !1 },
  MD = { suppressEvents: !0 },
  BD = {},
  jD = [],
  $D = {},
  UD = {},
  qD = {},
  HD = 30,
  zD = [],
  VD = "",
  WD = function (e) {
    var t,
      n,
      r = e[0];
    if ((gD(r) || fD(r) || (e = [e]), !(t = (r._gsap || {}).harness))) {
      for (n = zD.length; n-- && !zD[n].targetTest(r); );
      t = zD[n];
    }
    for (n = e.length; n--; )
      (e[n] && (e[n]._gsap || (e[n]._gsap = new bk(e[n], t)))) ||
        e.splice(n, 1);
    return e;
  },
  YD = function (e) {
    return e._gsap || WD(Rx(e))[0]._gsap;
  },
  XD = function (e, t, n) {
    return (n = e[t]) && fD(n)
      ? e[t]()
      : (mD(n) && e.getAttribute && e.getAttribute(t)) || n;
  },
  GD = function (e, t) {
    return (e = e.split(",")).forEach(t) || e;
  },
  KD = function (e) {
    return Math.round(1e5 * e) / 1e5 || 0;
  },
  JD = function (e) {
    return Math.round(1e7 * e) / 1e7 || 0;
  },
  QD = function (e, t) {
    var n = t.charAt(0),
      r = parseFloat(t.substr(2));
    return (
      (e = parseFloat(e)),
      "+" === n ? e + r : "-" === n ? e - r : "*" === n ? e * r : e / r
    );
  },
  ZD = function (e, t) {
    for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n; );
    return r < n;
  },
  ex = function () {
    var e,
      t,
      n = jD.length,
      r = jD.slice(0);
    for ($D = {}, jD.length = 0, e = 0; e < n; e++)
      (t = r[e]) && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0);
  },
  tx = function (e, t, n, r) {
    jD.length && !Cw && ex(),
      e.render(t, n, Cw && t < 0 && (e._initted || e._startAt)),
      jD.length && !Cw && ex();
  },
  nx = function (e) {
    var t = parseFloat(e);
    return (t || 0 === t) && (e + "").match(TD).length < 2
      ? t
      : dD(e)
      ? e.trim()
      : e;
  },
  rx = function (e) {
    return e;
  },
  ox = function (e, t) {
    for (var n in t) n in e || (e[n] = t[n]);
    return e;
  },
  ix = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  },
  sx = function e(t, n) {
    for (var r in n)
      "__proto__" !== r &&
        "constructor" !== r &&
        "prototype" !== r &&
        (t[r] = gD(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
    return t;
  },
  ax = function (e, t) {
    var n,
      r = {};
    for (n in e) n in t || (r[n] = e[n]);
    return r;
  },
  lx = function (e) {
    var t,
      n = e.parent || Tw,
      r = e.keyframes
        ? ((t = wD(e.keyframes)),
          function (e, n) {
            for (var r in n)
              r in e ||
                ("duration" === r && t) ||
                "ease" === r ||
                (e[r] = n[r]);
          })
        : ox;
    if (vD(e.inherit))
      for (; n; ) r(e, n.vars.defaults), (n = n.parent || n._dp);
    return e;
  },
  cx = function (e, t, n, r, o) {
    var i,
      s = e[r];
    if (o) for (i = t[o]; s && s[o] > i; ) s = s._prev;
    return (
      s ? ((t._next = s._next), (s._next = t)) : ((t._next = e[n]), (e[n] = t)),
      t._next ? (t._next._prev = t) : (e[r] = t),
      (t._prev = s),
      (t.parent = t._dp = e),
      t
    );
  },
  ux = function (e, t, n, r) {
    void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
    var o = t._prev,
      i = t._next;
    o ? (o._next = i) : e[n] === t && (e[n] = i),
      i ? (i._prev = o) : e[r] === t && (e[r] = o),
      (t._next = t._prev = t.parent = null);
  },
  px = function (e, t) {
    e.parent &&
      (!t || e.parent.autoRemoveChildren) &&
      e.parent.remove &&
      e.parent.remove(e),
      (e._act = 0);
  },
  dx = function (e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
      for (var n = e; n; ) (n._dirty = 1), (n = n.parent);
    return e;
  },
  fx = function (e, t, n, r) {
    return (
      e._startAt &&
      (Cw
        ? e._startAt.revert(RD)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(t, !0, r))
    );
  },
  hx = function e(t) {
    return !t || (t._ts && e(t.parent));
  },
  mx = function (e) {
    return e._repeat ? gx(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  gx = function (e, t) {
    var n = Math.floor((e /= t));
    return e && n === e ? n - 1 : n;
  },
  vx = function (e, t) {
    return (
      (e - t._start) * t._ts +
      (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    );
  },
  yx = function (e) {
    return (e._end = JD(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || iD) || 0)
    ));
  },
  bx = function (e, t) {
    var n = e._dp;
    return (
      n &&
        n.smoothChildTiming &&
        e._ts &&
        ((e._start = JD(
          n._time -
            (e._ts > 0
              ? t / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
        )),
        yx(e),
        n._dirty || dx(n, e)),
      e
    );
  },
  _x = function (e, t) {
    var n;
    if (
      ((t._time ||
        (!t._dur && t._initted) ||
        (t._start < e._time && (t._dur || !t.add))) &&
        ((n = vx(e.rawTime(), t)),
        (!t._dur || Fx(0, t.totalDuration(), n) - t._tTime > iD) &&
          t.render(n, !0)),
      dx(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (n = e; n._dp; )
          n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
      e._zTime = -1e-8;
    }
  },
  wx = function (e, t, n, r) {
    return (
      t.parent && px(t),
      (t._start = JD(
        (hD(n) ? n : n || e !== Tw ? Ax(e, n, t) : e._time) + t._delay
      )),
      (t._end = JD(
        t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
      )),
      cx(e, t, "_first", "_last", e._sort ? "_start" : 0),
      Cx(t) || (e._recent = t),
      r || _x(e, t),
      e._ts < 0 && bx(e, e._tTime),
      e
    );
  },
  Dx = function (e, t) {
    return AD.ScrollTrigger ? AD.ScrollTrigger.create(t, e) : void 0;
  },
  xx = function (e, t, n, r, o) {
    return (
      Tk(e, t, o),
      e._initted
        ? !n &&
          e._pt &&
          !Cw &&
          ((e._dur && !1 !== e.vars.lazy) || (!e._dur && e.vars.lazy)) &&
          Fw !== sk.frame
          ? (jD.push(e), (e._lazy = [o, r]), 1)
          : void 0
        : 1
    );
  },
  kx = function e(t) {
    var n = t.parent;
    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n));
  },
  Cx = function (e) {
    var t = e.data;
    return "isFromStart" === t || "isStart" === t;
  },
  Ex = function (e, t, n, r) {
    var o = e._repeat,
      i = JD(t) || 0,
      s = e._tTime / e._tDur;
    return (
      s && !r && (e._time *= i / e._dur),
      (e._dur = i),
      (e._tDur = o ? (o < 0 ? 1e10 : JD(i * (o + 1) + e._rDelay * o)) : i),
      s > 0 && !r && bx(e, (e._tTime = e._tDur * s)),
      e.parent && yx(e),
      n || dx(e.parent, e),
      e
    );
  },
  Tx = function (e) {
    return e instanceof wk ? dx(e) : Ex(e, e._dur);
  },
  Sx = { _start: 0, endTime: ND, totalDuration: ND },
  Ax = function e(t, n, r) {
    var o,
      i,
      s,
      a = t.labels,
      l = t._recent || Sx,
      c = t.duration() >= oD ? l.endTime(!1) : t._dur;
    return dD(n) && (isNaN(n) || n in a)
      ? ((i = n.charAt(0)),
        (s = "%" === n.substr(-1)),
        (o = n.indexOf("=")),
        "<" === i || ">" === i
          ? (o >= 0 && (n = n.replace(/=/, "")),
            ("<" === i ? l._start : l.endTime(l._repeat >= 0)) +
              (parseFloat(n.substr(1)) || 0) *
                (s ? (o < 0 ? l : r).totalDuration() / 100 : 1))
          : o < 0
          ? (n in a || (a[n] = c), a[n])
          : ((i = parseFloat(n.charAt(o - 1) + n.substr(o + 1))),
            s && r && (i = (i / 100) * (wD(r) ? r[0] : r).totalDuration()),
            o > 1 ? e(t, n.substr(0, o - 1), r) + i : c + i))
      : null == n
      ? c
      : +n;
  },
  Ox = function (e, t, n) {
    var r,
      o,
      i = hD(t[1]),
      s = (i ? 2 : 1) + (e < 2 ? 0 : 1),
      a = t[s];
    if ((i && (a.duration = t[1]), (a.parent = n), e)) {
      for (r = a, o = n; o && !("immediateRender" in r); )
        (r = o.vars.defaults || {}), (o = vD(o.vars.inherit) && o.parent);
      (a.immediateRender = vD(r.immediateRender)),
        e < 2 ? (a.runBackwards = 1) : (a.startAt = t[s - 1]);
    }
    return new Fk(t[0], a, t[s + 1]);
  },
  Px = function (e, t) {
    return e || 0 === e ? t(e) : t;
  },
  Fx = function (e, t, n) {
    return n < e ? e : n > t ? t : n;
  },
  Lx = function (e, t) {
    return dD(e) && (t = SD.exec(e)) ? t[1] : "";
  },
  Nx = [].slice,
  Ix = function (e, t) {
    return (
      e &&
      gD(e) &&
      "length" in e &&
      ((!t && !e.length) || (e.length - 1 in e && gD(e[0]))) &&
      !e.nodeType &&
      e !== Sw
    );
  },
  Rx = function (e, t, n) {
    return Ew && !t && Ew.selector
      ? Ew.selector(e)
      : !dD(e) || n || (!Aw && ak())
      ? wD(e)
        ? (function (e, t, n) {
            return (
              void 0 === n && (n = []),
              e.forEach(function (e) {
                var r;
                return (dD(e) && !t) || Ix(e, 1)
                  ? (r = n).push.apply(r, Rx(e))
                  : n.push(e);
              }) || n
            );
          })(e, n)
        : Ix(e)
        ? Nx.call(e, 0)
        : e
        ? [e]
        : []
      : Nx.call((t || Ow).querySelectorAll(e), 0);
  },
  Mx = function (e) {
    return (
      (e = Rx(e)[0] || FD() || {}),
      function (t) {
        var n = e.current || e.nativeElement || e;
        return Rx(
          t,
          n.querySelectorAll ? n : n === e ? FD() || Ow.createElement("div") : e
        );
      }
    );
  },
  Bx = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  jx = function (e) {
    if (fD(e)) return e;
    var t = gD(e) ? e : { each: e },
      n = hk(t.ease),
      r = t.from || 0,
      o = parseFloat(t.base) || 0,
      i = {},
      s = r > 0 && r < 1,
      a = isNaN(r) || s,
      l = t.axis,
      c = r,
      u = r;
    return (
      dD(r)
        ? (c = u = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !s && a && ((c = r[0]), (u = r[1])),
      function (e, s, p) {
        var d,
          f,
          h,
          m,
          g,
          v,
          y,
          b,
          _,
          w = (p || t).length,
          D = i[w];
        if (!D) {
          if (!(_ = "auto" === t.grid ? 0 : (t.grid || [1, oD])[1])) {
            for (
              y = -1e8;
              y < (y = p[_++].getBoundingClientRect().left) && _ < w;

            );
            _ < w && _--;
          }
          for (
            D = i[w] = [],
              d = a ? Math.min(_, w) * c - 0.5 : r % _,
              f = _ === oD ? 0 : a ? (w * u) / _ - 0.5 : (r / _) | 0,
              y = 0,
              b = oD,
              v = 0;
            v < w;
            v++
          )
            (h = (v % _) - d),
              (m = f - ((v / _) | 0)),
              (D[v] = g = l ? Math.abs("y" === l ? m : h) : cD(h * h + m * m)),
              g > y && (y = g),
              g < b && (b = g);
          "random" === r && Bx(D),
            (D.max = y - b),
            (D.min = b),
            (D.v = w =
              (parseFloat(t.amount) ||
                parseFloat(t.each) *
                  (_ > w
                    ? w - 1
                    : l
                    ? "y" === l
                      ? w / _
                      : _
                    : Math.max(_, w / _)) ||
                0) * ("edges" === r ? -1 : 1)),
            (D.b = w < 0 ? o - w : o),
            (D.u = Lx(t.amount || t.each) || 0),
            (n = n && w < 0 ? dk(n) : n);
        }
        return (
          (w = (D[e] - D.min) / D.max || 0),
          JD(D.b + (n ? n(w) : w) * D.v) + D.u
        );
      }
    );
  },
  $x = function (e) {
    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (n) {
      var r = JD(Math.round(parseFloat(n) / e) * e * t);
      return (r - (r % 1)) / t + (hD(n) ? 0 : Lx(n));
    };
  },
  Ux = function (e, t) {
    var n,
      r,
      o = wD(e);
    return (
      !o &&
        gD(e) &&
        ((n = o = e.radius || oD),
        e.values
          ? ((e = Rx(e.values)), (r = !hD(e[0])) && (n *= n))
          : (e = $x(e.increment))),
      Px(
        t,
        o
          ? fD(e)
            ? function (t) {
                return (r = e(t)), Math.abs(r - t) <= n ? r : t;
              }
            : function (t) {
                for (
                  var o,
                    i,
                    s = parseFloat(r ? t.x : t),
                    a = parseFloat(r ? t.y : 0),
                    l = oD,
                    c = 0,
                    u = e.length;
                  u--;

                )
                  (o = r
                    ? (o = e[u].x - s) * o + (i = e[u].y - a) * i
                    : Math.abs(e[u] - s)) < l && ((l = o), (c = u));
                return (
                  (c = !n || l <= n ? e[c] : t),
                  r || c === t || hD(t) ? c : c + Lx(t)
                );
              }
          : $x(e)
      )
    );
  },
  qx = function (e, t, n, r) {
    return Px(wD(e) ? !t : !0 === n ? !!(n = 0) : !r, function () {
      return wD(e)
        ? e[~~(Math.random() * e.length)]
        : (n = n || 1e-5) &&
            (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
            Math.floor(
              Math.round((e - n / 2 + Math.random() * (t - e + 0.99 * n)) / n) *
                n *
                r
            ) / r;
    });
  },
  Hx = function (e, t, n) {
    return Px(n, function (n) {
      return e[~~t(n)];
    });
  },
  zx = function (e) {
    for (var t, n, r, o, i = 0, s = ""; ~(t = e.indexOf("random(", i)); )
      (r = e.indexOf(")", t)),
        (o = "[" === e.charAt(t + 7)),
        (n = e.substr(t + 7, r - t - 7).match(o ? TD : DD)),
        (s +=
          e.substr(i, t - i) + qx(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5)),
        (i = r + 1);
    return s + e.substr(i, e.length - i);
  },
  Vx = function (e, t, n, r, o) {
    var i = t - e,
      s = r - n;
    return Px(o, function (t) {
      return n + (((t - e) / i) * s || 0);
    });
  },
  Wx = function (e, t, n) {
    var r,
      o,
      i,
      s = e.labels,
      a = oD;
    for (r in s)
      (o = s[r] - t) < 0 == !!n &&
        o &&
        a > (o = Math.abs(o)) &&
        ((i = r), (a = o));
    return i;
  },
  Yx = function (e, t, n) {
    var r,
      o,
      i,
      s = e.vars,
      a = s[t],
      l = Ew,
      c = e._ctx;
    if (a)
      return (
        (r = s[t + "Params"]),
        (o = s.callbackScope || e),
        n && jD.length && ex(),
        c && (Ew = c),
        (i = r ? a.apply(o, r) : a.call(o)),
        (Ew = l),
        i
      );
  },
  Xx = function (e) {
    return (
      px(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!Cw),
      e.progress() < 1 && Yx(e, "onInterrupt"),
      e
    );
  },
  Gx = [],
  Kx = function (e) {
    if (e)
      if (((e = (!e.name && e.default) || e), yD() || e.headless)) {
        var t = e.name,
          n = fD(e),
          r =
            t && !n && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          o = {
            init: ND,
            render: Uk,
            add: Ck,
            kill: Hk,
            modifier: qk,
            rawVars: 0,
          },
          i = {
            targetTest: 0,
            get: 0,
            getSetter: Mk,
            aliases: {},
            register: 0,
          };
        if ((ak(), e !== r)) {
          if (UD[t]) return;
          ox(r, ox(ax(e, o), i)),
            ix(r.prototype, ix(o, ax(e, i))),
            (UD[(r.prop = t)] = r),
            e.targetTest && (zD.push(r), (BD[t] = 1)),
            (t =
              ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) +
              "Plugin");
        }
        LD(t, r), e.register && e.register(iC, r, Wk);
      } else Gx.push(e);
  },
  Jx = 255,
  Qx = {
    aqua: [0, Jx, Jx],
    lime: [0, Jx, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, Jx],
    navy: [0, 0, 128],
    white: [Jx, Jx, Jx],
    olive: [128, 128, 0],
    yellow: [Jx, Jx, 0],
    orange: [Jx, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [Jx, 0, 0],
    pink: [Jx, 192, 203],
    cyan: [0, Jx, Jx],
    transparent: [Jx, Jx, Jx, 0],
  },
  Zx = function (e, t, n) {
    return (
      ((6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1
        ? t + (n - t) * e * 6
        : e < 0.5
        ? n
        : 3 * e < 2
        ? t + (n - t) * (2 / 3 - e) * 6
        : t) *
        Jx +
        0.5) |
      0
    );
  },
  ek = function (e, t, n) {
    var r,
      o,
      i,
      s,
      a,
      l,
      c,
      u,
      p,
      d,
      f = e ? (hD(e) ? [e >> 16, (e >> 8) & Jx, e & Jx] : 0) : Qx.black;
    if (!f) {
      if (("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), Qx[e]))
        f = Qx[e];
      else if ("#" === e.charAt(0)) {
        if (
          (e.length < 6 &&
            ((r = e.charAt(1)),
            (o = e.charAt(2)),
            (i = e.charAt(3)),
            (e =
              "#" +
              r +
              r +
              o +
              o +
              i +
              i +
              (5 === e.length ? e.charAt(4) + e.charAt(4) : ""))),
          9 === e.length)
        )
          return [
            (f = parseInt(e.substr(1, 6), 16)) >> 16,
            (f >> 8) & Jx,
            f & Jx,
            parseInt(e.substr(7), 16) / 255,
          ];
        f = [(e = parseInt(e.substr(1), 16)) >> 16, (e >> 8) & Jx, e & Jx];
      } else if ("hsl" === e.substr(0, 3))
        if (((f = d = e.match(DD)), t)) {
          if (~e.indexOf("="))
            return (f = e.match(xD)), n && f.length < 4 && (f[3] = 1), f;
        } else
          (s = (+f[0] % 360) / 360),
            (a = +f[1] / 100),
            (r =
              2 * (l = +f[2] / 100) -
              (o = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
            f.length > 3 && (f[3] *= 1),
            (f[0] = Zx(s + 1 / 3, r, o)),
            (f[1] = Zx(s, r, o)),
            (f[2] = Zx(s - 1 / 3, r, o));
      else f = e.match(DD) || Qx.transparent;
      f = f.map(Number);
    }
    return (
      t &&
        !d &&
        ((r = f[0] / Jx),
        (o = f[1] / Jx),
        (i = f[2] / Jx),
        (l = ((c = Math.max(r, o, i)) + (u = Math.min(r, o, i))) / 2),
        c === u
          ? (s = a = 0)
          : ((p = c - u),
            (a = l > 0.5 ? p / (2 - c - u) : p / (c + u)),
            (s =
              c === r
                ? (o - i) / p + (o < i ? 6 : 0)
                : c === o
                ? (i - r) / p + 2
                : (r - o) / p + 4),
            (s *= 60)),
        (f[0] = ~~(s + 0.5)),
        (f[1] = ~~(100 * a + 0.5)),
        (f[2] = ~~(100 * l + 0.5))),
      n && f.length < 4 && (f[3] = 1),
      f
    );
  },
  tk = function (e) {
    var t = [],
      n = [],
      r = -1;
    return (
      e.split(rk).forEach(function (e) {
        var o = e.match(kD) || [];
        t.push.apply(t, o), n.push((r += o.length + 1));
      }),
      (t.c = n),
      t
    );
  },
  nk = function (e, t, n) {
    var r,
      o,
      i,
      s,
      a = "",
      l = (e + a).match(rk),
      c = t ? "hsla(" : "rgba(",
      u = 0;
    if (!l) return e;
    if (
      ((l = l.map(function (e) {
        return (
          (e = ek(e, t, 1)) &&
          c +
            (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) +
            ")"
        );
      })),
      n && ((i = tk(e)), (r = n.c).join(a) !== i.c.join(a)))
    )
      for (s = (o = e.replace(rk, "1").split(kD)).length - 1; u < s; u++)
        a +=
          o[u] +
          (~r.indexOf(u)
            ? l.shift() || c + "0,0,0,0)"
            : (i.length ? i : l.length ? l : n).shift());
    if (!o) for (s = (o = e.split(rk)).length - 1; u < s; u++) a += o[u] + l[u];
    return a + o[s];
  },
  rk = (function () {
    var e,
      t =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
    for (e in Qx) t += "|" + e + "\\b";
    return new RegExp(t + ")", "gi");
  })(),
  ok = /hsl[a]?\(/,
  ik = function (e) {
    var t,
      n = e.join(" ");
    if (((rk.lastIndex = 0), rk.test(n)))
      return (
        (t = ok.test(n)),
        (e[1] = nk(e[1], t)),
        (e[0] = nk(e[0], t, tk(e[1]))),
        !0
      );
  },
  sk =
    ((Uw = Date.now),
    (qw = 500),
    (Hw = 33),
    (zw = Uw()),
    (Vw = zw),
    (Yw = Ww = 1e3 / 240),
    (Gw = function e(t) {
      var n,
        r,
        o,
        i,
        s = Uw() - Vw,
        a = !0 === t;
      if (
        ((s > qw || s < 0) && (zw += s - Hw),
        ((n = (o = (Vw += s) - zw) - Yw) > 0 || a) &&
          ((i = ++Bw.frame),
          (jw = o - 1e3 * Bw.time),
          (Bw.time = o /= 1e3),
          (Yw += n + (n >= Ww ? 4 : Ww - n)),
          (r = 1)),
        a || (Iw = Rw(e)),
        r)
      )
        for ($w = 0; $w < Xw.length; $w++) Xw[$w](o, jw, i, t);
    }),
    (Bw = {
      time: 0,
      frame: 0,
      tick: function () {
        Gw(!0);
      },
      deltaRatio: function (e) {
        return jw / (1e3 / (e || 60));
      },
      wake: function () {
        Pw &&
          (!Aw &&
            yD() &&
            ((Sw = Aw = window),
            (Ow = Sw.document || {}),
            (AD.gsap = iC),
            (Sw.gsapVersions || (Sw.gsapVersions = [])).push(iC.version),
            PD(OD || Sw.GreenSockGlobals || (!Sw.gsap && Sw) || {}),
            Gx.forEach(Kx)),
          (Mw =
            "undefined" != typeof requestAnimationFrame &&
            requestAnimationFrame),
          Iw && Bw.sleep(),
          (Rw =
            Mw ||
            function (e) {
              return setTimeout(e, (Yw - 1e3 * Bw.time + 1) | 0);
            }),
          (Nw = 1),
          Gw(2));
      },
      sleep: function () {
        (Mw ? cancelAnimationFrame : clearTimeout)(Iw), (Nw = 0), (Rw = ND);
      },
      lagSmoothing: function (e, t) {
        (qw = e || 1 / 0), (Hw = Math.min(t || 33, qw));
      },
      fps: function (e) {
        (Ww = 1e3 / (e || 240)), (Yw = 1e3 * Bw.time + Ww);
      },
      add: function (e, t, n) {
        var r = t
          ? function (t, n, o, i) {
              e(t, n, o, i), Bw.remove(r);
            }
          : e;
        return Bw.remove(e), Xw[n ? "unshift" : "push"](r), ak(), r;
      },
      remove: function (e, t) {
        ~(t = Xw.indexOf(e)) && Xw.splice(t, 1) && $w >= t && $w--;
      },
      _listeners: (Xw = []),
    })),
  ak = function () {
    return !Nw && sk.wake();
  },
  lk = {},
  ck = /^[\d.\-M][\d.\-,\s]/,
  uk = /["']/g,
  pk = function (e) {
    for (
      var t,
        n,
        r,
        o = {},
        i = e.substr(1, e.length - 3).split(":"),
        s = i[0],
        a = 1,
        l = i.length;
      a < l;
      a++
    )
      (n = i[a]),
        (t = a !== l - 1 ? n.lastIndexOf(",") : n.length),
        (r = n.substr(0, t)),
        (o[s] = isNaN(r) ? r.replace(uk, "").trim() : +r),
        (s = n.substr(t + 1).trim());
    return o;
  },
  dk = function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
  fk = function e(t, n) {
    for (var r, o = t._first; o; )
      o instanceof wk
        ? e(o, n)
        : !o.vars.yoyoEase ||
          (o._yoyo && o._repeat) ||
          o._yoyo === n ||
          (o.timeline
            ? e(o.timeline, n)
            : ((r = o._ease),
              (o._ease = o._yEase),
              (o._yEase = r),
              (o._yoyo = n))),
        (o = o._next);
  },
  hk = function (e, t) {
    return (
      (e &&
        (fD(e)
          ? e
          : lk[e] ||
            (function (e) {
              var t,
                n,
                r,
                o,
                i = (e + "").split("("),
                s = lk[i[0]];
              return s && i.length > 1 && s.config
                ? s.config.apply(
                    null,
                    ~e.indexOf("{")
                      ? [pk(i[1])]
                      : ((t = e),
                        (n = t.indexOf("(") + 1),
                        (r = t.indexOf(")")),
                        (o = t.indexOf("(", n)),
                        t.substring(n, ~o && o < r ? t.indexOf(")", r + 1) : r))
                          .split(",")
                          .map(nx)
                  )
                : lk._CE && ck.test(e)
                ? lk._CE("", e)
                : s;
            })(e))) ||
      t
    );
  },
  mk = function (e, t, n, r) {
    void 0 === n &&
      (n = function (e) {
        return 1 - t(1 - e);
      }),
      void 0 === r &&
        (r = function (e) {
          return e < 0.5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2;
        });
    var o,
      i = { easeIn: t, easeOut: n, easeInOut: r };
    return (
      GD(e, function (e) {
        for (var t in ((lk[e] = AD[e] = i), (lk[(o = e.toLowerCase())] = n), i))
          lk[
            o + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")
          ] = lk[e + "." + t] = i[t];
      }),
      i
    );
  },
  gk = function (e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2;
    };
  },
  vk = function e(t, n, r) {
    var o = n >= 1 ? n : 1,
      i = (r || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1),
      s = (i / sD) * (Math.asin(1 / o) || 0),
      a = function (e) {
        return 1 === e ? 1 : o * Math.pow(2, -10 * e) * pD((e - s) * i) + 1;
      },
      l =
        "out" === t
          ? a
          : "in" === t
          ? function (e) {
              return 1 - a(1 - e);
            }
          : gk(a);
    return (
      (i = sD / i),
      (l.config = function (n, r) {
        return e(t, n, r);
      }),
      l
    );
  },
  yk = function e(t, n) {
    void 0 === n && (n = 1.70158);
    var r = function (e) {
        return e ? --e * e * ((n + 1) * e + n) + 1 : 0;
      },
      o =
        "out" === t
          ? r
          : "in" === t
          ? function (e) {
              return 1 - r(1 - e);
            }
          : gk(r);
    return (
      (o.config = function (n) {
        return e(t, n);
      }),
      o
    );
  };
GD("Linear,Quad,Cubic,Quart,Quint,Strong", function (e, t) {
  var n = t < 5 ? t + 1 : t;
  mk(
    e + ",Power" + (n - 1),
    t
      ? function (e) {
          return Math.pow(e, n);
        }
      : function (e) {
          return e;
        },
    function (e) {
      return 1 - Math.pow(1 - e, n);
    },
    function (e) {
      return e < 0.5
        ? Math.pow(2 * e, n) / 2
        : 1 - Math.pow(2 * (1 - e), n) / 2;
    }
  );
}),
  (lk.Linear.easeNone = lk.none = lk.Linear.easeIn),
  mk("Elastic", vk("in"), vk("out"), vk()),
  (Kw = 7.5625),
  (Zw = 2 * (Qw = 1 / (Jw = 2.75))),
  (eD = 2.5 * Qw),
  mk(
    "Bounce",
    function (e) {
      return 1 - tD(1 - e);
    },
    (tD = function (e) {
      return e < Qw
        ? Kw * e * e
        : e < Zw
        ? Kw * Math.pow(e - 1.5 / Jw, 2) + 0.75
        : e < eD
        ? Kw * (e -= 2.25 / Jw) * e + 0.9375
        : Kw * Math.pow(e - 2.625 / Jw, 2) + 0.984375;
    })
  ),
  mk("Expo", function (e) {
    return e ? Math.pow(2, 10 * (e - 1)) : 0;
  }),
  mk("Circ", function (e) {
    return -(cD(1 - e * e) - 1);
  }),
  mk("Sine", function (e) {
    return 1 === e ? 1 : 1 - uD(e * aD);
  }),
  mk("Back", yk("in"), yk("out"), yk()),
  (lk.SteppedEase =
    lk.steps =
    AD.SteppedEase =
      {
        config: function (e, t) {
          void 0 === e && (e = 1);
          var n = 1 / e,
            r = e + (t ? 0 : 1),
            o = t ? 1 : 0;
          return function (e) {
            return (((r * Fx(0, 0.99999999, e)) | 0) + o) * n;
          };
        },
      }),
  (rD.ease = lk["quad.out"]),
  GD(
    "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
    function (e) {
      return (VD += e + "," + e + "Params,");
    }
  );
var bk = function (e, t) {
    (this.id = lD++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = t),
      (this.get = t ? t.get : XD),
      (this.set = t ? t.getSetter : Mk);
  },
  _k = (function () {
    function e(e) {
      (this.vars = e),
        (this._delay = +e.delay || 0),
        (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
          ((this._rDelay = e.repeatDelay || 0),
          (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
        (this._ts = 1),
        Ex(this, +e.duration, 1, 1),
        (this.data = e.data),
        Ew && ((this._ctx = Ew), Ew.data.push(this)),
        Nw || sk.wake();
    }
    var t = e.prototype;
    return (
      (t.delay = function (e) {
        return e || 0 === e
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + e - this._delay),
            (this._delay = e),
            this)
          : this._delay;
      }),
      (t.duration = function (e) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e
            )
          : this.totalDuration() && this._dur;
      }),
      (t.totalDuration = function (e) {
        return arguments.length
          ? ((this._dirty = 0),
            Ex(
              this,
              this._repeat < 0
                ? e
                : (e - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (t.totalTime = function (e, t) {
        if ((ak(), !arguments.length)) return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
          for (bx(this, e), !n._dp || n.parent || _x(n, this); n && n.parent; )
            n.parent._time !==
              n._start +
                (n._ts >= 0
                  ? n._tTime / n._ts
                  : (n.totalDuration() - n._tTime) / -n._ts) &&
              n.totalTime(n._tTime, !0),
              (n = n.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && e < this._tDur) ||
              (this._ts < 0 && e > 0) ||
              (!this._tDur && !e)) &&
            wx(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== e ||
            (!this._dur && !t) ||
            (this._initted && Math.abs(this._zTime) === iD) ||
            (!e && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = e), tx(this, e, t)),
          this
        );
      }),
      (t.time = function (e, t) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), e + mx(this)) %
                (this._dur + this._rDelay) || (e ? this._dur : 0),
              t
            )
          : this._time;
      }),
      (t.totalProgress = function (e, t) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * e, t)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (t.progress = function (e, t) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (!this._yoyo || 1 & this.iteration() ? e : 1 - e) +
                mx(this),
              t
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (t.iteration = function (e, t) {
        var n = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (e - 1) * n, t)
          : this._repeat
          ? gx(this._tTime, n) + 1
          : 1;
      }),
      (t.timeScale = function (e, t) {
        if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
        if (this._rts === e) return this;
        var n =
          this.parent && this._ts ? vx(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +e || 0),
          (this._ts = this._ps || -1e-8 === e ? 0 : this._rts),
          this.totalTime(Fx(-Math.abs(this._delay), this._tDur, n), !1 !== t),
          yx(this),
          (function (e) {
            for (var t = e.parent; t && t.parent; )
              (t._dirty = 1), t.totalDuration(), (t = t.parent);
            return e;
          })(this)
        );
      }),
      (t.paused = function (e) {
        return arguments.length
          ? (this._ps !== e &&
              ((this._ps = e),
              e
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (ak(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    1 === this.progress() &&
                      Math.abs(this._zTime) !== iD &&
                      (this._tTime -= iD)
                  ))),
            this)
          : this._ps;
      }),
      (t.startTime = function (e) {
        if (arguments.length) {
          this._start = e;
          var t = this.parent || this._dp;
          return (
            t && (t._sort || !this.parent) && wx(t, this, e - this._delay), this
          );
        }
        return this._start;
      }),
      (t.endTime = function (e) {
        return (
          this._start +
          (vD(e) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (t.rawTime = function (e) {
        var t = this.parent || this._dp;
        return t
          ? e &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? vx(t.rawTime(e), this)
            : this._tTime
          : this._tTime;
      }),
      (t.revert = function (e) {
        void 0 === e && (e = MD);
        var t = Cw;
        return (
          (Cw = e),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(e),
            this.totalTime(-0.01, e.suppressEvents)),
          "nested" !== this.data && !1 !== e.kill && this.kill(),
          (Cw = t),
          this
        );
      }),
      (t.globalTime = function (e) {
        for (var t = this, n = arguments.length ? e : t.rawTime(); t; )
          (n = t._start + n / (Math.abs(t._ts) || 1)), (t = t._dp);
        return !this.parent && this._sat ? this._sat.globalTime(e) : n;
      }),
      (t.repeat = function (e) {
        return arguments.length
          ? ((this._repeat = e === 1 / 0 ? -2 : e), Tx(this))
          : -2 === this._repeat
          ? 1 / 0
          : this._repeat;
      }),
      (t.repeatDelay = function (e) {
        if (arguments.length) {
          var t = this._time;
          return (this._rDelay = e), Tx(this), t ? this.time(t) : this;
        }
        return this._rDelay;
      }),
      (t.yoyo = function (e) {
        return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
      }),
      (t.seek = function (e, t) {
        return this.totalTime(Ax(this, e), vD(t));
      }),
      (t.restart = function (e, t) {
        return this.play().totalTime(e ? -this._delay : 0, vD(t));
      }),
      (t.play = function (e, t) {
        return null != e && this.seek(e, t), this.reversed(!1).paused(!1);
      }),
      (t.reverse = function (e, t) {
        return (
          null != e && this.seek(e || this.totalDuration(), t),
          this.reversed(!0).paused(!1)
        );
      }),
      (t.pause = function (e, t) {
        return null != e && this.seek(e, t), this.paused(!0);
      }),
      (t.resume = function () {
        return this.paused(!1);
      }),
      (t.reversed = function (e) {
        return arguments.length
          ? (!!e !== this.reversed() &&
              this.timeScale(-this._rts || (e ? -1e-8 : 0)),
            this)
          : this._rts < 0;
      }),
      (t.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
      }),
      (t.isActive = function () {
        var e,
          t = this.parent || this._dp,
          n = this._start;
        return !(
          t &&
          !(
            this._ts &&
            this._initted &&
            t.isActive() &&
            (e = t.rawTime(!0)) >= n &&
            e < this.endTime(!0) - iD
          )
        );
      }),
      (t.eventCallback = function (e, t, n) {
        var r = this.vars;
        return arguments.length > 1
          ? (t
              ? ((r[e] = t),
                n && (r[e + "Params"] = n),
                "onUpdate" === e && (this._onUpdate = t))
              : delete r[e],
            this)
          : r[e];
      }),
      (t.then = function (e) {
        var t = this;
        return new Promise(function (n) {
          var r = fD(e) ? e : rx,
            o = function () {
              var e = t.then;
              (t.then = null),
                fD(r) && (r = r(t)) && (r.then || r === t) && (t.then = e),
                n(r),
                (t.then = e);
            };
          (t._initted && 1 === t.totalProgress() && t._ts >= 0) ||
          (!t._tTime && t._ts < 0)
            ? o()
            : (t._prom = o);
        });
      }),
      (t.kill = function () {
        Xx(this);
      }),
      e
    );
  })();
ox(_k.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -1e-8,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var wk = (function (e) {
  function t(t, n) {
    var r;
    return (
      void 0 === t && (t = {}),
      ((r = e.call(this, t) || this).labels = {}),
      (r.smoothChildTiming = !!t.smoothChildTiming),
      (r.autoRemoveChildren = !!t.autoRemoveChildren),
      (r._sort = vD(t.sortChildren)),
      Tw && wx(t.parent || Tw, Dw(r), n),
      t.reversed && r.reverse(),
      t.paused && r.paused(!0),
      t.scrollTrigger && Dx(Dw(r), t.scrollTrigger),
      r
    );
  }
  xw(t, e);
  var n = t.prototype;
  return (
    (n.to = function (e, t, n) {
      return Ox(0, arguments, this), this;
    }),
    (n.from = function (e, t, n) {
      return Ox(1, arguments, this), this;
    }),
    (n.fromTo = function (e, t, n, r) {
      return Ox(2, arguments, this), this;
    }),
    (n.set = function (e, t, n) {
      return (
        (t.duration = 0),
        (t.parent = this),
        lx(t).repeatDelay || (t.repeat = 0),
        (t.immediateRender = !!t.immediateRender),
        new Fk(e, t, Ax(this, n), 1),
        this
      );
    }),
    (n.call = function (e, t, n) {
      return wx(this, Fk.delayedCall(0, e, t), n);
    }),
    (n.staggerTo = function (e, t, n, r, o, i, s) {
      return (
        (n.duration = t),
        (n.stagger = n.stagger || r),
        (n.onComplete = i),
        (n.onCompleteParams = s),
        (n.parent = this),
        new Fk(e, n, Ax(this, o)),
        this
      );
    }),
    (n.staggerFrom = function (e, t, n, r, o, i, s) {
      return (
        (n.runBackwards = 1),
        (lx(n).immediateRender = vD(n.immediateRender)),
        this.staggerTo(e, t, n, r, o, i, s)
      );
    }),
    (n.staggerFromTo = function (e, t, n, r, o, i, s, a) {
      return (
        (r.startAt = n),
        (lx(r).immediateRender = vD(r.immediateRender)),
        this.staggerTo(e, t, r, o, i, s, a)
      );
    }),
    (n.render = function (e, t, n) {
      var r,
        o,
        i,
        s,
        a,
        l,
        c,
        u,
        p,
        d,
        f,
        h,
        m = this._time,
        g = this._dirty ? this.totalDuration() : this._tDur,
        v = this._dur,
        y = e <= 0 ? 0 : JD(e),
        b = this._zTime < 0 != e < 0 && (this._initted || !v);
      if (
        (this !== Tw && y > g && e >= 0 && (y = g), y !== this._tTime || n || b)
      ) {
        if (
          (m !== this._time &&
            v &&
            ((y += this._time - m), (e += this._time - m)),
          (r = y),
          (p = this._start),
          (l = !(u = this._ts)),
          b && (v || (m = this._zTime), (e || !t) && (this._zTime = e)),
          this._repeat)
        ) {
          if (
            ((f = this._yoyo),
            (a = v + this._rDelay),
            this._repeat < -1 && e < 0)
          )
            return this.totalTime(100 * a + e, t, n);
          if (
            ((r = JD(y % a)),
            y === g
              ? ((s = this._repeat), (r = v))
              : ((s = ~~(y / a)) && s === y / a && ((r = v), s--),
                r > v && (r = v)),
            (d = gx(this._tTime, a)),
            !m &&
              this._tTime &&
              d !== s &&
              this._tTime - d * a - this._dur <= 0 &&
              (d = s),
            f && 1 & s && ((r = v - r), (h = 1)),
            s !== d && !this._lock)
          ) {
            var _ = f && 1 & d,
              w = _ === (f && 1 & s);
            if (
              (s < d && (_ = !_),
              (m = _ ? 0 : y % v ? v : y),
              (this._lock = 1),
              (this.render(m || (h ? 0 : JD(s * a)), t, !v)._lock = 0),
              (this._tTime = y),
              !t && this.parent && Yx(this, "onRepeat"),
              this.vars.repeatRefresh && !h && (this.invalidate()._lock = 1),
              (m && m !== this._time) ||
                l !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((v = this._dur),
              (g = this._tDur),
              w &&
                ((this._lock = 2),
                (m = _ ? v : -1e-4),
                this.render(m, !0),
                this.vars.repeatRefresh && !h && this.invalidate()),
              (this._lock = 0),
              !this._ts && !l)
            )
              return this;
            fk(this, h);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((c = (function (e, t, n) {
              var r;
              if (n > t)
                for (r = e._first; r && r._start <= n; ) {
                  if ("isPause" === r.data && r._start > t) return r;
                  r = r._next;
                }
              else
                for (r = e._last; r && r._start >= n; ) {
                  if ("isPause" === r.data && r._start < t) return r;
                  r = r._prev;
                }
            })(this, JD(m), JD(r))),
            c && (y -= r - (r = c._start))),
          (this._tTime = y),
          (this._time = r),
          (this._act = !u),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = e),
            (m = 0)),
          !m && r && !t && !s && (Yx(this, "onStart"), this._tTime !== y))
        )
          return this;
        if (r >= m && e >= 0)
          for (o = this._first; o; ) {
            if (
              ((i = o._next), (o._act || r >= o._start) && o._ts && c !== o)
            ) {
              if (o.parent !== this) return this.render(e, t, n);
              if (
                (o.render(
                  o._ts > 0
                    ? (r - o._start) * o._ts
                    : (o._dirty ? o.totalDuration() : o._tDur) +
                        (r - o._start) * o._ts,
                  t,
                  n
                ),
                r !== this._time || (!this._ts && !l))
              ) {
                (c = 0), i && (y += this._zTime = -1e-8);
                break;
              }
            }
            o = i;
          }
        else {
          o = this._last;
          for (var D = e < 0 ? e : r; o; ) {
            if (((i = o._prev), (o._act || D <= o._end) && o._ts && c !== o)) {
              if (o.parent !== this) return this.render(e, t, n);
              if (
                (o.render(
                  o._ts > 0
                    ? (D - o._start) * o._ts
                    : (o._dirty ? o.totalDuration() : o._tDur) +
                        (D - o._start) * o._ts,
                  t,
                  n || (Cw && (o._initted || o._startAt))
                ),
                r !== this._time || (!this._ts && !l))
              ) {
                (c = 0), i && (y += this._zTime = D ? -1e-8 : iD);
                break;
              }
            }
            o = i;
          }
        }
        if (
          c &&
          !t &&
          (this.pause(),
          (c.render(r >= m ? 0 : -1e-8)._zTime = r >= m ? 1 : -1),
          this._ts)
        )
          return (this._start = p), yx(this), this.render(e, t, n);
        this._onUpdate && !t && Yx(this, "onUpdate", !0),
          ((y === g && this._tTime >= this.totalDuration()) || (!y && m)) &&
            ((p !== this._start && Math.abs(u) === Math.abs(this._ts)) ||
              this._lock ||
              ((e || !v) &&
                ((y === g && this._ts > 0) || (!y && this._ts < 0)) &&
                px(this, 1),
              t ||
                (e < 0 && !m) ||
                (!y && !m && g) ||
                (Yx(
                  this,
                  y === g && e >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(y < g && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (n.add = function (e, t) {
      var n = this;
      if ((hD(t) || (t = Ax(this, t, e)), !(e instanceof _k))) {
        if (wD(e))
          return (
            e.forEach(function (e) {
              return n.add(e, t);
            }),
            this
          );
        if (dD(e)) return this.addLabel(e, t);
        if (!fD(e)) return this;
        e = Fk.delayedCall(0, e);
      }
      return this !== e ? wx(this, e, t) : this;
    }),
    (n.getChildren = function (e, t, n, r) {
      void 0 === e && (e = !0),
        void 0 === t && (t = !0),
        void 0 === n && (n = !0),
        void 0 === r && (r = -1e8);
      for (var o = [], i = this._first; i; )
        i._start >= r &&
          (i instanceof Fk
            ? t && o.push(i)
            : (n && o.push(i), e && o.push.apply(o, i.getChildren(!0, t, n)))),
          (i = i._next);
      return o;
    }),
    (n.getById = function (e) {
      for (var t = this.getChildren(1, 1, 1), n = t.length; n--; )
        if (t[n].vars.id === e) return t[n];
    }),
    (n.remove = function (e) {
      return dD(e)
        ? this.removeLabel(e)
        : fD(e)
        ? this.killTweensOf(e)
        : (ux(this, e),
          e === this._recent && (this._recent = this._last),
          dx(this));
    }),
    (n.totalTime = function (t, n) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = JD(
              sk.time -
                (this._ts > 0
                  ? t / this._ts
                  : (this.totalDuration() - t) / -this._ts)
            )),
          e.prototype.totalTime.call(this, t, n),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (n.addLabel = function (e, t) {
      return (this.labels[e] = Ax(this, t)), this;
    }),
    (n.removeLabel = function (e) {
      return delete this.labels[e], this;
    }),
    (n.addPause = function (e, t, n) {
      var r = Fk.delayedCall(0, t || ND, n);
      return (
        (r.data = "isPause"), (this._hasPause = 1), wx(this, r, Ax(this, e))
      );
    }),
    (n.removePause = function (e) {
      var t = this._first;
      for (e = Ax(this, e); t; )
        t._start === e && "isPause" === t.data && px(t), (t = t._next);
    }),
    (n.killTweensOf = function (e, t, n) {
      for (var r = this.getTweensOf(e, n), o = r.length; o--; )
        Dk !== r[o] && r[o].kill(e, t);
      return this;
    }),
    (n.getTweensOf = function (e, t) {
      for (var n, r = [], o = Rx(e), i = this._first, s = hD(t); i; )
        i instanceof Fk
          ? ZD(i._targets, o) &&
            (s
              ? (!Dk || (i._initted && i._ts)) &&
                i.globalTime(0) <= t &&
                i.globalTime(i.totalDuration()) > t
              : !t || i.isActive()) &&
            r.push(i)
          : (n = i.getTweensOf(o, t)).length && r.push.apply(r, n),
          (i = i._next);
      return r;
    }),
    (n.tweenTo = function (e, t) {
      t = t || {};
      var n,
        r = this,
        o = Ax(r, e),
        i = t,
        s = i.startAt,
        a = i.onStart,
        l = i.onStartParams,
        c = i.immediateRender,
        u = Fk.to(
          r,
          ox(
            {
              ease: t.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: o,
              overwrite: "auto",
              duration:
                t.duration ||
                Math.abs(
                  (o - (s && "time" in s ? s.time : r._time)) / r.timeScale()
                ) ||
                iD,
              onStart: function () {
                if ((r.pause(), !n)) {
                  var e =
                    t.duration ||
                    Math.abs(
                      (o - (s && "time" in s ? s.time : r._time)) /
                        r.timeScale()
                    );
                  u._dur !== e && Ex(u, e, 0, 1).render(u._time, !0, !0),
                    (n = 1);
                }
                a && a.apply(u, l || []);
              },
            },
            t
          )
        );
      return c ? u.render(0) : u;
    }),
    (n.tweenFromTo = function (e, t, n) {
      return this.tweenTo(t, ox({ startAt: { time: Ax(this, e) } }, n));
    }),
    (n.recent = function () {
      return this._recent;
    }),
    (n.nextLabel = function (e) {
      return void 0 === e && (e = this._time), Wx(this, Ax(this, e));
    }),
    (n.previousLabel = function (e) {
      return void 0 === e && (e = this._time), Wx(this, Ax(this, e), 1);
    }),
    (n.currentLabel = function (e) {
      return arguments.length
        ? this.seek(e, !0)
        : this.previousLabel(this._time + iD);
    }),
    (n.shiftChildren = function (e, t, n) {
      void 0 === n && (n = 0);
      for (var r, o = this._first, i = this.labels; o; )
        o._start >= n && ((o._start += e), (o._end += e)), (o = o._next);
      if (t) for (r in i) i[r] >= n && (i[r] += e);
      return dx(this);
    }),
    (n.invalidate = function (t) {
      var n = this._first;
      for (this._lock = 0; n; ) n.invalidate(t), (n = n._next);
      return e.prototype.invalidate.call(this, t);
    }),
    (n.clear = function (e) {
      void 0 === e && (e = !0);
      for (var t, n = this._first; n; ) (t = n._next), this.remove(n), (n = t);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        e && (this.labels = {}),
        dx(this)
      );
    }),
    (n.totalDuration = function (e) {
      var t,
        n,
        r,
        o = 0,
        i = this,
        s = i._last,
        a = oD;
      if (arguments.length)
        return i.timeScale(
          (i._repeat < 0 ? i.duration() : i.totalDuration()) /
            (i.reversed() ? -e : e)
        );
      if (i._dirty) {
        for (r = i.parent; s; )
          (t = s._prev),
            s._dirty && s.totalDuration(),
            (n = s._start) > a && i._sort && s._ts && !i._lock
              ? ((i._lock = 1), (wx(i, s, n - s._delay, 1)._lock = 0))
              : (a = n),
            n < 0 &&
              s._ts &&
              ((o -= n),
              ((!r && !i._dp) || (r && r.smoothChildTiming)) &&
                ((i._start += n / i._ts), (i._time -= n), (i._tTime -= n)),
              i.shiftChildren(-n, !1, -1 / 0),
              (a = 0)),
            s._end > o && s._ts && (o = s._end),
            (s = t);
        Ex(i, i === Tw && i._time > o ? i._time : o, 1, 1), (i._dirty = 0);
      }
      return i._tDur;
    }),
    (t.updateRoot = function (e) {
      if ((Tw._ts && (tx(Tw, vx(e, Tw)), (Fw = sk.frame)), sk.frame >= HD)) {
        HD += nD.autoSleep || 120;
        var t = Tw._first;
        if ((!t || !t._ts) && nD.autoSleep && sk._listeners.length < 2) {
          for (; t && !t._ts; ) t = t._next;
          t || sk.sleep();
        }
      }
    }),
    t
  );
})(_k);
ox(wk.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var Dk,
  xk,
  kk = function (e, t, n, r, o, i, s) {
    var a,
      l,
      c,
      u,
      p,
      d,
      f,
      h,
      m = new Wk(this._pt, e, t, 0, 1, $k, null, o),
      g = 0,
      v = 0;
    for (
      m.b = n,
        m.e = r,
        n += "",
        (f = ~(r += "").indexOf("random(")) && (r = zx(r)),
        i && (i((h = [n, r]), e, t), (n = h[0]), (r = h[1])),
        l = n.match(CD) || [];
      (a = CD.exec(r));

    )
      (u = a[0]),
        (p = r.substring(g, a.index)),
        c ? (c = (c + 1) % 5) : "rgba(" === p.substr(-5) && (c = 1),
        u !== l[v++] &&
          ((d = parseFloat(l[v - 1]) || 0),
          (m._pt = {
            _next: m._pt,
            p: p || 1 === v ? p : ",",
            s: d,
            c: "=" === u.charAt(1) ? QD(d, u) - d : parseFloat(u) - d,
            m: c && c < 4 ? Math.round : 0,
          }),
          (g = CD.lastIndex));
    return (
      (m.c = g < r.length ? r.substring(g, r.length) : ""),
      (m.fp = s),
      (ED.test(r) || f) && (m.e = 0),
      (this._pt = m),
      m
    );
  },
  Ck = function (e, t, n, r, o, i, s, a, l, c) {
    fD(r) && (r = r(o || 0, e, i));
    var u,
      p = e[t],
      d =
        "get" !== n
          ? n
          : fD(p)
          ? l
            ? e[
                t.indexOf("set") || !fD(e["get" + t.substr(3)])
                  ? t
                  : "get" + t.substr(3)
              ](l)
            : e[t]()
          : p,
      f = fD(p) ? (l ? Ik : Nk) : Lk;
    if (
      (dD(r) &&
        (~r.indexOf("random(") && (r = zx(r)),
        "=" === r.charAt(1) &&
          ((u = QD(d, r) + (Lx(d) || 0)) || 0 === u) &&
          (r = u)),
      !c || d !== r || xk)
    )
      return isNaN(d * r) || "" === r
        ? kk.call(this, e, t, d, r, f, a || nD.stringFilter, l)
        : ((u = new Wk(
            this._pt,
            e,
            t,
            +d || 0,
            r - (d || 0),
            "boolean" == typeof p ? jk : Bk,
            0,
            f
          )),
          l && (u.fp = l),
          s && u.modifier(s, this, e),
          (this._pt = u));
  },
  Ek = function (e, t, n, r, o, i) {
    var s, a, l, c;
    if (
      UD[e] &&
      !1 !==
        (s = new UD[e]()).init(
          o,
          s.rawVars
            ? t[e]
            : (function (e, t, n, r, o) {
                if (
                  (fD(e) && (e = Ak(e, o, t, n, r)),
                  !gD(e) || (e.style && e.nodeType) || wD(e) || _D(e))
                )
                  return dD(e) ? Ak(e, o, t, n, r) : e;
                var i,
                  s = {};
                for (i in e) s[i] = Ak(e[i], o, t, n, r);
                return s;
              })(t[e], r, o, i, n),
          n,
          r,
          i
        ) &&
      ((n._pt = a = new Wk(n._pt, o, e, 0, 1, s.render, s, 0, s.priority)),
      n !== Lw)
    )
      for (l = n._ptLookup[n._targets.indexOf(o)], c = s._props.length; c--; )
        l[s._props[c]] = a;
    return s;
  },
  Tk = function e(t, n, r) {
    var o,
      i,
      s,
      a,
      l,
      c,
      u,
      p,
      d,
      f,
      h,
      m,
      g,
      v = t.vars,
      y = v.ease,
      b = v.startAt,
      _ = v.immediateRender,
      w = v.lazy,
      D = v.onUpdate,
      x = v.runBackwards,
      k = v.yoyoEase,
      C = v.keyframes,
      E = v.autoRevert,
      T = t._dur,
      S = t._startAt,
      A = t._targets,
      O = t.parent,
      P = O && "nested" === O.data ? O.vars.targets : A,
      F = "auto" === t._overwrite && !kw,
      L = t.timeline;
    if (
      (L && (!C || !y) && (y = "none"),
      (t._ease = hk(y, rD.ease)),
      (t._yEase = k ? dk(hk(!0 === k ? y : k, rD.ease)) : 0),
      k &&
        t._yoyo &&
        !t._repeat &&
        ((k = t._yEase), (t._yEase = t._ease), (t._ease = k)),
      (t._from = !L && !!v.runBackwards),
      !L || (C && !v.stagger))
    ) {
      if (
        ((m = (p = A[0] ? YD(A[0]).harness : 0) && v[p.prop]),
        (o = ax(v, BD)),
        S &&
          (S._zTime < 0 && S.progress(1),
          n < 0 && x && _ && !E ? S.render(-1, !0) : S.revert(x && T ? RD : ID),
          (S._lazy = 0)),
        b)
      ) {
        if (
          (px(
            (t._startAt = Fk.set(
              A,
              ox(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: O,
                  immediateRender: !0,
                  lazy: !S && vD(w),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    D &&
                    function () {
                      return Yx(t, "onUpdate");
                    },
                  stagger: 0,
                },
                b
              )
            ))
          ),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          n < 0 && (Cw || (!_ && !E)) && t._startAt.revert(RD),
          _ && T && n <= 0 && r <= 0)
        )
          return void (n && (t._zTime = n));
      } else if (x && T && !S)
        if (
          (n && (_ = !1),
          (s = ox(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: _ && !S && vD(w),
              immediateRender: _,
              stagger: 0,
              parent: O,
            },
            o
          )),
          m && (s[p.prop] = m),
          px((t._startAt = Fk.set(A, s))),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          n < 0 && (Cw ? t._startAt.revert(RD) : t._startAt.render(-1, !0)),
          (t._zTime = n),
          _)
        ) {
          if (!n) return;
        } else e(t._startAt, iD, iD);
      for (
        t._pt = t._ptCache = 0, w = (T && vD(w)) || (w && !T), i = 0;
        i < A.length;
        i++
      ) {
        if (
          ((u = (l = A[i])._gsap || WD(A)[i]._gsap),
          (t._ptLookup[i] = f = {}),
          $D[u.id] && jD.length && ex(),
          (h = P === A ? i : P.indexOf(l)),
          p &&
            !1 !== (d = new p()).init(l, m || o, t, h, P) &&
            ((t._pt = a =
              new Wk(t._pt, l, d.name, 0, 1, d.render, d, 0, d.priority)),
            d._props.forEach(function (e) {
              f[e] = a;
            }),
            d.priority && (c = 1)),
          !p || m)
        )
          for (s in o)
            UD[s] && (d = Ek(s, o, t, h, l, P))
              ? d.priority && (c = 1)
              : (f[s] = a =
                  Ck.call(t, l, s, "get", o[s], h, P, 0, v.stringFilter));
        t._op && t._op[i] && t.kill(l, t._op[i]),
          F &&
            t._pt &&
            ((Dk = t),
            Tw.killTweensOf(l, f, t.globalTime(n)),
            (g = !t.parent),
            (Dk = 0)),
          t._pt && w && ($D[u.id] = 1);
      }
      c && Vk(t), t._onInit && t._onInit(t);
    }
    (t._onUpdate = D),
      (t._initted = (!t._op || t._pt) && !g),
      C && n <= 0 && L.render(oD, !0, !0);
  },
  Sk = function (e, t, n, r) {
    var o,
      i,
      s = t.ease || r || "power1.inOut";
    if (wD(t))
      (i = n[e] || (n[e] = [])),
        t.forEach(function (e, n) {
          return i.push({ t: (n / (t.length - 1)) * 100, v: e, e: s });
        });
    else
      for (o in t)
        (i = n[o] || (n[o] = [])),
          "ease" === o || i.push({ t: parseFloat(e), v: t[o], e: s });
  },
  Ak = function (e, t, n, r, o) {
    return fD(e)
      ? e.call(t, n, r, o)
      : dD(e) && ~e.indexOf("random(")
      ? zx(e)
      : e;
  },
  Ok = VD + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  Pk = {};
GD(Ok + ",id,stagger,delay,duration,paused,scrollTrigger", function (e) {
  return (Pk[e] = 1);
});
var Fk = (function (e) {
  function t(t, n, r, o) {
    var i;
    "number" == typeof n && ((r.duration = n), (n = r), (r = null));
    var s,
      a,
      l,
      c,
      u,
      p,
      d,
      f,
      h = (i = e.call(this, o ? n : lx(n)) || this).vars,
      m = h.duration,
      g = h.delay,
      v = h.immediateRender,
      y = h.stagger,
      b = h.overwrite,
      _ = h.keyframes,
      w = h.defaults,
      D = h.scrollTrigger,
      x = h.yoyoEase,
      k = n.parent || Tw,
      C = (wD(t) || _D(t) ? hD(t[0]) : "length" in n) ? [t] : Rx(t);
    if (
      ((i._targets = C.length ? WD(C) : FD(0, !nD.nullTargetWarn) || []),
      (i._ptLookup = []),
      (i._overwrite = b),
      _ || y || bD(m) || bD(g))
    ) {
      if (
        ((n = i.vars),
        (s = i.timeline =
          new wk({
            data: "nested",
            defaults: w || {},
            targets: k && "nested" === k.data ? k.vars.targets : C,
          })).kill(),
        (s.parent = s._dp = Dw(i)),
        (s._start = 0),
        y || bD(m) || bD(g))
      ) {
        if (((c = C.length), (d = y && jx(y)), gD(y)))
          for (u in y) ~Ok.indexOf(u) && (f || (f = {}), (f[u] = y[u]));
        for (a = 0; a < c; a++)
          ((l = ax(n, Pk)).stagger = 0),
            x && (l.yoyoEase = x),
            f && ix(l, f),
            (p = C[a]),
            (l.duration = +Ak(m, Dw(i), a, p, C)),
            (l.delay = (+Ak(g, Dw(i), a, p, C) || 0) - i._delay),
            !y &&
              1 === c &&
              l.delay &&
              ((i._delay = g = l.delay), (i._start += g), (l.delay = 0)),
            s.to(p, l, d ? d(a, p, C) : 0),
            (s._ease = lk.none);
        s.duration() ? (m = g = 0) : (i.timeline = 0);
      } else if (_) {
        lx(ox(s.vars.defaults, { ease: "none" })),
          (s._ease = hk(_.ease || n.ease || "none"));
        var E,
          T,
          S,
          A = 0;
        if (wD(_))
          _.forEach(function (e) {
            return s.to(C, e, ">");
          }),
            s.duration();
        else {
          for (u in ((l = {}), _))
            "ease" === u || "easeEach" === u || Sk(u, _[u], l, _.easeEach);
          for (u in l)
            for (
              E = l[u].sort(function (e, t) {
                return e.t - t.t;
              }),
                A = 0,
                a = 0;
              a < E.length;
              a++
            )
              ((S = {
                ease: (T = E[a]).e,
                duration: ((T.t - (a ? E[a - 1].t : 0)) / 100) * m,
              })[u] = T.v),
                s.to(C, S, A),
                (A += S.duration);
          s.duration() < m && s.to({}, { duration: m - s.duration() });
        }
      }
      m || i.duration((m = s.duration()));
    } else i.timeline = 0;
    return (
      !0 !== b || kw || ((Dk = Dw(i)), Tw.killTweensOf(C), (Dk = 0)),
      wx(k, Dw(i), r),
      n.reversed && i.reverse(),
      n.paused && i.paused(!0),
      (v ||
        (!m &&
          !_ &&
          i._start === JD(k._time) &&
          vD(v) &&
          hx(Dw(i)) &&
          "nested" !== k.data)) &&
        ((i._tTime = -1e-8), i.render(Math.max(0, -g) || 0)),
      D && Dx(Dw(i), D),
      i
    );
  }
  xw(t, e);
  var n = t.prototype;
  return (
    (n.render = function (e, t, n) {
      var r,
        o,
        i,
        s,
        a,
        l,
        c,
        u,
        p,
        d = this._time,
        f = this._tDur,
        h = this._dur,
        m = e < 0,
        g = e > f - iD && !m ? f : e < iD ? 0 : e;
      if (h) {
        if (
          g !== this._tTime ||
          !e ||
          n ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== m)
        ) {
          if (((r = g), (u = this.timeline), this._repeat)) {
            if (((s = h + this._rDelay), this._repeat < -1 && m))
              return this.totalTime(100 * s + e, t, n);
            if (
              ((r = JD(g % s)),
              g === f
                ? ((i = this._repeat), (r = h))
                : ((i = ~~(g / s)) && i === JD(g / s) && ((r = h), i--),
                  r > h && (r = h)),
              (l = this._yoyo && 1 & i) && ((p = this._yEase), (r = h - r)),
              (a = gx(this._tTime, s)),
              r === d && !n && this._initted && i === a)
            )
              return (this._tTime = g), this;
            i !== a &&
              (u && this._yEase && fk(u, l),
              this.vars.repeatRefresh &&
                !l &&
                !this._lock &&
                this._time !== s &&
                this._initted &&
                ((this._lock = n = 1),
                (this.render(JD(s * i), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (xx(this, m ? e : r, n, t, g)) return (this._tTime = 0), this;
            if (
              !(d === this._time || (n && this.vars.repeatRefresh && i !== a))
            )
              return this;
            if (h !== this._dur) return this.render(e, t, n);
          }
          if (
            ((this._tTime = g),
            (this._time = r),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = c = (p || this._ease)(r / h)),
            this._from && (this.ratio = c = 1 - c),
            r && !d && !t && !i && (Yx(this, "onStart"), this._tTime !== g))
          )
            return this;
          for (o = this._pt; o; ) o.r(c, o.d), (o = o._next);
          (u && u.render(e < 0 ? e : u._dur * u._ease(r / this._dur), t, n)) ||
            (this._startAt && (this._zTime = e)),
            this._onUpdate &&
              !t &&
              (m && fx(this, e, 0, n), Yx(this, "onUpdate")),
            this._repeat &&
              i !== a &&
              this.vars.onRepeat &&
              !t &&
              this.parent &&
              Yx(this, "onRepeat"),
            (g !== this._tDur && g) ||
              this._tTime !== g ||
              (m && !this._onUpdate && fx(this, e, 0, !0),
              (e || !h) &&
                ((g === this._tDur && this._ts > 0) || (!g && this._ts < 0)) &&
                px(this, 1),
              t ||
                (m && !d) ||
                !(g || d || l) ||
                (Yx(this, g === f ? "onComplete" : "onReverseComplete", !0),
                this._prom &&
                  !(g < f && this.timeScale() > 0) &&
                  this._prom()));
        }
      } else
        !(function (e, t, n, r) {
          var o,
            i,
            s,
            a = e.ratio,
            l =
              t < 0 ||
              (!t &&
                ((!e._start && kx(e) && (e._initted || !Cx(e))) ||
                  ((e._ts < 0 || e._dp._ts < 0) && !Cx(e))))
                ? 0
                : 1,
            c = e._rDelay,
            u = 0;
          if (
            (c &&
              e._repeat &&
              ((u = Fx(0, e._tDur, t)),
              (i = gx(u, c)),
              e._yoyo && 1 & i && (l = 1 - l),
              i !== gx(e._tTime, c) &&
                ((a = 1 - l),
                e.vars.repeatRefresh && e._initted && e.invalidate())),
            l !== a || Cw || r || e._zTime === iD || (!t && e._zTime))
          ) {
            if (!e._initted && xx(e, t, r, n, u)) return;
            for (
              s = e._zTime,
                e._zTime = t || (n ? iD : 0),
                n || (n = t && !s),
                e.ratio = l,
                e._from && (l = 1 - l),
                e._time = 0,
                e._tTime = u,
                o = e._pt;
              o;

            )
              o.r(l, o.d), (o = o._next);
            t < 0 && fx(e, t, 0, !0),
              e._onUpdate && !n && Yx(e, "onUpdate"),
              u && e._repeat && !n && e.parent && Yx(e, "onRepeat"),
              (t >= e._tDur || t < 0) &&
                e.ratio === l &&
                (l && px(e, 1),
                n ||
                  Cw ||
                  (Yx(e, l ? "onComplete" : "onReverseComplete", !0),
                  e._prom && e._prom()));
          } else e._zTime || (e._zTime = t);
        })(this, e, t, n);
      return this;
    }),
    (n.targets = function () {
      return this._targets;
    }),
    (n.invalidate = function (t) {
      return (
        (!t || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(t),
        e.prototype.invalidate.call(this, t)
      );
    }),
    (n.resetTo = function (e, t, n, r, o) {
      Nw || sk.wake(), this._ts || this.play();
      var i = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
      return (
        this._initted || Tk(this, i),
        (function (e, t, n, r, o, i, s, a) {
          var l,
            c,
            u,
            p,
            d = ((e._pt && e._ptCache) || (e._ptCache = {}))[t];
          if (!d)
            for (
              d = e._ptCache[t] = [], u = e._ptLookup, p = e._targets.length;
              p--;

            ) {
              if ((l = u[p][t]) && l.d && l.d._pt)
                for (l = l.d._pt; l && l.p !== t && l.fp !== t; ) l = l._next;
              if (!l)
                return (
                  (xk = 1),
                  (e.vars[t] = "+=0"),
                  Tk(e, s),
                  (xk = 0),
                  a ? FD() : 1
                );
              d.push(l);
            }
          for (p = d.length; p--; )
            ((l = (c = d[p])._pt || c).s =
              (!r && 0 !== r) || o ? l.s + (r || 0) + i * l.c : r),
              (l.c = n - l.s),
              c.e && (c.e = KD(n) + Lx(c.e)),
              c.b && (c.b = l.s + Lx(c.b));
        })(this, e, t, n, r, this._ease(i / this._dur), i, o)
          ? this.resetTo(e, t, n, r, 1)
          : (bx(this, 0),
            this.parent ||
              cx(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (n.kill = function (e, t) {
      if ((void 0 === t && (t = "all"), !(e || (t && "all" !== t))))
        return (this._lazy = this._pt = 0), this.parent ? Xx(this) : this;
      if (this.timeline) {
        var n = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(e, t, Dk && !0 !== Dk.vars.overwrite)
            ._first || Xx(this),
          this.parent &&
            n !== this.timeline.totalDuration() &&
            Ex(this, (this._dur * this.timeline._tDur) / n, 0, 1),
          this
        );
      }
      var r,
        o,
        i,
        s,
        a,
        l,
        c,
        u = this._targets,
        p = e ? Rx(e) : u,
        d = this._ptLookup,
        f = this._pt;
      if (
        (!t || "all" === t) &&
        (function (e, t) {
          for (
            var n = e.length, r = n === t.length;
            r && n-- && e[n] === t[n];

          );
          return n < 0;
        })(u, p)
      )
        return "all" === t && (this._pt = 0), Xx(this);
      for (
        r = this._op = this._op || [],
          "all" !== t &&
            (dD(t) &&
              ((a = {}),
              GD(t, function (e) {
                return (a[e] = 1);
              }),
              (t = a)),
            (t = (function (e, t) {
              var n,
                r,
                o,
                i,
                s = e[0] ? YD(e[0]).harness : 0,
                a = s && s.aliases;
              if (!a) return t;
              for (r in ((n = ix({}, t)), a))
                if ((r in n))
                  for (o = (i = a[r].split(",")).length; o--; ) n[i[o]] = n[r];
              return n;
            })(u, t))),
          c = u.length;
        c--;

      )
        if (~p.indexOf(u[c]))
          for (a in ((o = d[c]),
          "all" === t
            ? ((r[c] = t), (s = o), (i = {}))
            : ((i = r[c] = r[c] || {}), (s = t)),
          s))
            (l = o && o[a]) &&
              (("kill" in l.d && !0 !== l.d.kill(a)) || ux(this, l, "_pt"),
              delete o[a]),
              "all" !== i && (i[a] = 1);
      return this._initted && !this._pt && f && Xx(this), this;
    }),
    (t.to = function (e, n) {
      return new t(e, n, arguments[2]);
    }),
    (t.from = function (e, t) {
      return Ox(1, arguments);
    }),
    (t.delayedCall = function (e, n, r, o) {
      return new t(n, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: e,
        onComplete: n,
        onReverseComplete: n,
        onCompleteParams: r,
        onReverseCompleteParams: r,
        callbackScope: o,
      });
    }),
    (t.fromTo = function (e, t, n) {
      return Ox(2, arguments);
    }),
    (t.set = function (e, n) {
      return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(e, n);
    }),
    (t.killTweensOf = function (e, t, n) {
      return Tw.killTweensOf(e, t, n);
    }),
    t
  );
})(_k);
ox(Fk.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
  GD("staggerTo,staggerFrom,staggerFromTo", function (e) {
    Fk[e] = function () {
      var t = new wk(),
        n = Nx.call(arguments, 0);
      return n.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, n);
    };
  });
var Lk = function (e, t, n) {
    return (e[t] = n);
  },
  Nk = function (e, t, n) {
    return e[t](n);
  },
  Ik = function (e, t, n, r) {
    return e[t](r.fp, n);
  },
  Rk = function (e, t, n) {
    return e.setAttribute(t, n);
  },
  Mk = function (e, t) {
    return fD(e[t]) ? Nk : mD(e[t]) && e.setAttribute ? Rk : Lk;
  },
  Bk = function (e, t) {
    return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t);
  },
  jk = function (e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
  },
  $k = function (e, t) {
    var n = t._pt,
      r = "";
    if (!e && t.b) r = t.b;
    else if (1 === e && t.e) r = t.e;
    else {
      for (; n; )
        (r =
          n.p +
          (n.m ? n.m(n.s + n.c * e) : Math.round(1e4 * (n.s + n.c * e)) / 1e4) +
          r),
          (n = n._next);
      r += t.c;
    }
    t.set(t.t, t.p, r, t);
  },
  Uk = function (e, t) {
    for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
  },
  qk = function (e, t, n, r) {
    for (var o, i = this._pt; i; )
      (o = i._next), i.p === r && i.modifier(e, t, n), (i = o);
  },
  Hk = function (e) {
    for (var t, n, r = this._pt; r; )
      (n = r._next),
        (r.p === e && !r.op) || r.op === e
          ? ux(this, r, "_pt")
          : r.dep || (t = 1),
        (r = n);
    return !t;
  },
  zk = function (e, t, n, r) {
    r.mSet(e, t, r.m.call(r.tween, n, r.mt), r);
  },
  Vk = function (e) {
    for (var t, n, r, o, i = e._pt; i; ) {
      for (t = i._next, n = r; n && n.pr > i.pr; ) n = n._next;
      (i._prev = n ? n._prev : o) ? (i._prev._next = i) : (r = i),
        (i._next = n) ? (n._prev = i) : (o = i),
        (i = t);
    }
    e._pt = r;
  },
  Wk = (function () {
    function e(e, t, n, r, o, i, s, a, l) {
      (this.t = t),
        (this.s = r),
        (this.c = o),
        (this.p = n),
        (this.r = i || Bk),
        (this.d = s || this),
        (this.set = a || Lk),
        (this.pr = l || 0),
        (this._next = e),
        e && (e._prev = this);
    }
    return (
      (e.prototype.modifier = function (e, t, n) {
        (this.mSet = this.mSet || this.set),
          (this.set = zk),
          (this.m = e),
          (this.mt = n),
          (this.tween = t);
      }),
      e
    );
  })();
GD(
  VD +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (e) {
    return (BD[e] = 1);
  }
),
  (AD.TweenMax = AD.TweenLite = Fk),
  (AD.TimelineLite = AD.TimelineMax = wk),
  (Tw = new wk({
    sortChildren: !1,
    defaults: rD,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0,
  })),
  (nD.stringFilter = ik);
var Yk = [],
  Xk = {},
  Gk = [],
  Kk = 0,
  Jk = 0,
  Qk = function (e) {
    return (Xk[e] || Gk).map(function (e) {
      return e();
    });
  },
  Zk = function () {
    var e = Date.now(),
      t = [];
    e - Kk > 2 &&
      (Qk("matchMediaInit"),
      Yk.forEach(function (e) {
        var n,
          r,
          o,
          i,
          s = e.queries,
          a = e.conditions;
        for (r in s)
          (n = Sw.matchMedia(s[r]).matches) && (o = 1),
            n !== a[r] && ((a[r] = n), (i = 1));
        i && (e.revert(), o && t.push(e));
      }),
      Qk("matchMediaRevert"),
      t.forEach(function (e) {
        return e.onMatch(e, function (t) {
          return e.add(null, t);
        });
      }),
      (Kk = e),
      Qk("matchMedia"));
  },
  eC = (function () {
    function e(e, t) {
      (this.selector = t && Mx(t)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = Jk++),
        e && this.add(e);
    }
    var t = e.prototype;
    return (
      (t.add = function (e, t, n) {
        fD(e) && ((n = t), (t = e), (e = fD));
        var r = this,
          o = function () {
            var e,
              o = Ew,
              i = r.selector;
            return (
              o && o !== r && o.data.push(r),
              n && (r.selector = Mx(n)),
              (Ew = r),
              (e = t.apply(r, arguments)),
              fD(e) && r._r.push(e),
              (Ew = o),
              (r.selector = i),
              (r.isReverted = !1),
              e
            );
          };
        return (
          (r.last = o),
          e === fD
            ? o(r, function (e) {
                return r.add(null, e);
              })
            : e
            ? (r[e] = o)
            : o
        );
      }),
      (t.ignore = function (e) {
        var t = Ew;
        (Ew = null), e(this), (Ew = t);
      }),
      (t.getTweens = function () {
        var t = [];
        return (
          this.data.forEach(function (n) {
            return n instanceof e
              ? t.push.apply(t, n.getTweens())
              : n instanceof Fk &&
                  !(n.parent && "nested" === n.parent.data) &&
                  t.push(n);
          }),
          t
        );
      }),
      (t.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (t.kill = function (e, t) {
        var n = this;
        if (
          (e
            ? (function () {
                for (var t, r = n.getTweens(), o = n.data.length; o--; )
                  "isFlip" === (t = n.data[o]).data &&
                    (t.revert(),
                    t.getChildren(!0, !0, !1).forEach(function (e) {
                      return r.splice(r.indexOf(e), 1);
                    }));
                for (
                  r
                    .map(function (e) {
                      return {
                        g:
                          e._dur ||
                          e._delay ||
                          (e._sat && !e._sat.vars.immediateRender)
                            ? e.globalTime(0)
                            : -1 / 0,
                        t: e,
                      };
                    })
                    .sort(function (e, t) {
                      return t.g - e.g || -1 / 0;
                    })
                    .forEach(function (t) {
                      return t.t.revert(e);
                    }),
                    o = n.data.length;
                  o--;

                )
                  (t = n.data[o]) instanceof wk
                    ? "nested" !== t.data &&
                      (t.scrollTrigger && t.scrollTrigger.revert(), t.kill())
                    : !(t instanceof Fk) && t.revert && t.revert(e);
                n._r.forEach(function (t) {
                  return t(e, n);
                }),
                  (n.isReverted = !0);
              })()
            : this.data.forEach(function (e) {
                return e.kill && e.kill();
              }),
          this.clear(),
          t)
        )
          for (var r = Yk.length; r--; )
            Yk[r].id === this.id && Yk.splice(r, 1);
      }),
      (t.revert = function (e) {
        this.kill(e || {});
      }),
      e
    );
  })(),
  tC = (function () {
    function e(e) {
      (this.contexts = []), (this.scope = e), Ew && Ew.data.push(this);
    }
    var t = e.prototype;
    return (
      (t.add = function (e, t, n) {
        gD(e) || (e = { matches: e });
        var r,
          o,
          i,
          s = new eC(0, n || this.scope),
          a = (s.conditions = {});
        for (o in (Ew && !s.selector && (s.selector = Ew.selector),
        this.contexts.push(s),
        (t = s.add("onMatch", t)),
        (s.queries = e),
        e))
          "all" === o
            ? (i = 1)
            : (r = Sw.matchMedia(e[o])) &&
              (Yk.indexOf(s) < 0 && Yk.push(s),
              (a[o] = r.matches) && (i = 1),
              r.addListener
                ? r.addListener(Zk)
                : r.addEventListener("change", Zk));
        return (
          i &&
            t(s, function (e) {
              return s.add(null, e);
            }),
          this
        );
      }),
      (t.revert = function (e) {
        this.kill(e || {});
      }),
      (t.kill = function (e) {
        this.contexts.forEach(function (t) {
          return t.kill(e, !0);
        });
      }),
      e
    );
  })(),
  nC = {
    registerPlugin: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      t.forEach(function (e) {
        return Kx(e);
      });
    },
    timeline: function (e) {
      return new wk(e);
    },
    getTweensOf: function (e, t) {
      return Tw.getTweensOf(e, t);
    },
    getProperty: function (e, t, n, r) {
      dD(e) && (e = Rx(e)[0]);
      var o = YD(e || {}).get,
        i = n ? rx : nx;
      return (
        "native" === n && (n = ""),
        e
          ? t
            ? i(((UD[t] && UD[t].get) || o)(e, t, n, r))
            : function (t, n, r) {
                return i(((UD[t] && UD[t].get) || o)(e, t, n, r));
              }
          : e
      );
    },
    quickSetter: function (e, t, n) {
      if ((e = Rx(e)).length > 1) {
        var r = e.map(function (e) {
            return iC.quickSetter(e, t, n);
          }),
          o = r.length;
        return function (e) {
          for (var t = o; t--; ) r[t](e);
        };
      }
      e = e[0] || {};
      var i = UD[t],
        s = YD(e),
        a = (s.harness && (s.harness.aliases || {})[t]) || t,
        l = i
          ? function (t) {
              var r = new i();
              (Lw._pt = 0),
                r.init(e, n ? t + n : t, Lw, 0, [e]),
                r.render(1, r),
                Lw._pt && Uk(1, Lw);
            }
          : s.set(e, a);
      return i
        ? l
        : function (t) {
            return l(e, a, n ? t + n : t, s, 1);
          };
    },
    quickTo: function (e, t, n) {
      var r,
        o = iC.to(
          e,
          ix((((r = {})[t] = "+=0.1"), (r.paused = !0), r), n || {})
        ),
        i = function (e, n, r) {
          return o.resetTo(t, e, n, r);
        };
      return (i.tween = o), i;
    },
    isTweening: function (e) {
      return Tw.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return e && e.ease && (e.ease = hk(e.ease, rD.ease)), sx(rD, e || {});
    },
    config: function (e) {
      return sx(nD, e || {});
    },
    registerEffect: function (e) {
      var t = e.name,
        n = e.effect,
        r = e.plugins,
        o = e.defaults,
        i = e.extendTimeline;
      (r || "").split(",").forEach(function (e) {
        return e && !UD[e] && !AD[e] && FD();
      }),
        (qD[t] = function (e, t, r) {
          return n(Rx(e), ox(t || {}, o), r);
        }),
        i &&
          (wk.prototype[t] = function (e, n, r) {
            return this.add(qD[t](e, gD(n) ? n : (r = n) && {}, this), r);
          });
    },
    registerEase: function (e, t) {
      lk[e] = hk(t);
    },
    parseEase: function (e, t) {
      return arguments.length ? hk(e, t) : lk;
    },
    getById: function (e) {
      return Tw.getById(e);
    },
    exportRoot: function (e, t) {
      void 0 === e && (e = {});
      var n,
        r,
        o = new wk(e);
      for (
        o.smoothChildTiming = vD(e.smoothChildTiming),
          Tw.remove(o),
          o._dp = 0,
          o._time = o._tTime = Tw._time,
          n = Tw._first;
        n;

      )
        (r = n._next),
          (!t &&
            !n._dur &&
            n instanceof Fk &&
            n.vars.onComplete === n._targets[0]) ||
            wx(o, n, n._start - n._delay),
          (n = r);
      return wx(Tw, o, 0), o;
    },
    context: function (e, t) {
      return e ? new eC(e, t) : Ew;
    },
    matchMedia: function (e) {
      return new tC(e);
    },
    matchMediaRefresh: function () {
      return (
        Yk.forEach(function (e) {
          var t,
            n,
            r = e.conditions;
          for (n in r) r[n] && ((r[n] = !1), (t = 1));
          t && e.revert();
        }) || Zk()
      );
    },
    addEventListener: function (e, t) {
      var n = Xk[e] || (Xk[e] = []);
      ~n.indexOf(t) || n.push(t);
    },
    removeEventListener: function (e, t) {
      var n = Xk[e],
        r = n && n.indexOf(t);
      r >= 0 && n.splice(r, 1);
    },
    utils: {
      wrap: function e(t, n, r) {
        var o = n - t;
        return wD(t)
          ? Hx(t, e(0, t.length), n)
          : Px(r, function (e) {
              return ((o + ((e - t) % o)) % o) + t;
            });
      },
      wrapYoyo: function e(t, n, r) {
        var o = n - t,
          i = 2 * o;
        return wD(t)
          ? Hx(t, e(0, t.length - 1), n)
          : Px(r, function (e) {
              return t + ((e = (i + ((e - t) % i)) % i || 0) > o ? i - e : e);
            });
      },
      distribute: jx,
      random: qx,
      snap: Ux,
      normalize: function (e, t, n) {
        return Vx(e, t, 0, 1, n);
      },
      getUnit: Lx,
      clamp: function (e, t, n) {
        return Px(n, function (n) {
          return Fx(e, t, n);
        });
      },
      splitColor: ek,
      toArray: Rx,
      selector: Mx,
      mapRange: Vx,
      pipe: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return function (e) {
          return t.reduce(function (e, t) {
            return t(e);
          }, e);
        };
      },
      unitize: function (e, t) {
        return function (n) {
          return e(parseFloat(n)) + (t || Lx(n));
        };
      },
      interpolate: function e(t, n, r, o) {
        var i = isNaN(t + n)
          ? 0
          : function (e) {
              return (1 - e) * t + e * n;
            };
        if (!i) {
          var s,
            a,
            l,
            c,
            u,
            p = dD(t),
            d = {};
          if ((!0 === r && (o = 1) && (r = null), p))
            (t = { p: t }), (n = { p: n });
          else if (wD(t) && !wD(n)) {
            for (l = [], c = t.length, u = c - 2, a = 1; a < c; a++)
              l.push(e(t[a - 1], t[a]));
            c--,
              (i = function (e) {
                e *= c;
                var t = Math.min(u, ~~e);
                return l[t](e - t);
              }),
              (r = n);
          } else o || (t = ix(wD(t) ? [] : {}, t));
          if (!l) {
            for (s in n) Ck.call(d, t, s, "get", n[s]);
            i = function (e) {
              return Uk(e, d) || (p ? t.p : t);
            };
          }
        }
        return Px(r, i);
      },
      shuffle: Bx,
    },
    install: PD,
    effects: qD,
    ticker: sk,
    updateRoot: wk.updateRoot,
    plugins: UD,
    globalTimeline: Tw,
    core: {
      PropTween: Wk,
      globals: LD,
      Tween: Fk,
      Timeline: wk,
      Animation: _k,
      getCache: YD,
      _removeLinkedListItem: ux,
      reverting: function () {
        return Cw;
      },
      context: function (e) {
        return e && Ew && (Ew.data.push(e), (e._ctx = Ew)), Ew;
      },
      suppressOverwrites: function (e) {
        return (kw = e);
      },
    },
  };
GD("to,from,fromTo,delayedCall,set,killTweensOf", function (e) {
  return (nC[e] = Fk[e]);
}),
  sk.add(wk.updateRoot),
  (Lw = nC.to({}, { duration: 0 }));
var rC = function (e, t) {
    for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
      n = n._next;
    return n;
  },
  oC = function (e, t) {
    return {
      name: e,
      rawVars: 1,
      init: function (e, n, r) {
        r._onInit = function (e) {
          var r, o;
          if (
            (dD(n) &&
              ((r = {}),
              GD(n, function (e) {
                return (r[e] = 1);
              }),
              (n = r)),
            t)
          ) {
            for (o in ((r = {}), n)) r[o] = t(n[o]);
            n = r;
          }
          !(function (e, t) {
            var n,
              r,
              o,
              i = e._targets;
            for (n in t)
              for (r = i.length; r--; )
                (o = e._ptLookup[r][n]) &&
                  (o = o.d) &&
                  (o._pt && (o = rC(o, n)),
                  o && o.modifier && o.modifier(t[n], e, i[r], n));
          })(e, n);
        };
      },
    };
  },
  iC =
    nC.registerPlugin(
      {
        name: "attr",
        init: function (e, t, n, r, o) {
          var i, s, a;
          for (i in ((this.tween = n), t))
            (a = e.getAttribute(i) || ""),
              ((s = this.add(
                e,
                "setAttribute",
                (a || 0) + "",
                t[i],
                r,
                o,
                0,
                0,
                i
              )).op = i),
              (s.b = a),
              this._props.push(i);
        },
        render: function (e, t) {
          for (var n = t._pt; n; )
            Cw ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), (n = n._next);
        },
      },
      {
        name: "endArray",
        init: function (e, t) {
          for (var n = t.length; n--; )
            this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
        },
      },
      oC("roundProps", $x),
      oC("modifiers"),
      oC("snap", Ux)
    ) || nC;
(Fk.version = wk.version = iC.version = "3.12.5"),
  (Pw = 1),
  yD() && ak(),
  lk.Power0,
  lk.Power1,
  lk.Power2,
  lk.Power3,
  lk.Power4,
  lk.Linear,
  lk.Quad,
  lk.Cubic,
  lk.Quart,
  lk.Quint,
  lk.Strong,
  lk.Elastic,
  lk.Back,
  lk.SteppedEase,
  lk.Bounce,
  lk.Sine,
  lk.Expo,
  lk.Circ;
var sC,
  aC,
  lC,
  cC,
  uC,
  pC,
  dC,
  fC,
  hC = {},
  mC = 180 / Math.PI,
  gC = Math.PI / 180,
  vC = Math.atan2,
  yC = /([A-Z])/g,
  bC = /(left|right|width|margin|padding|x)/i,
  _C = /[\s,\(]\S/,
  wC = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  DC = function (e, t) {
    return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t);
  },
  xC = function (e, t) {
    return t.set(
      t.t,
      t.p,
      1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
      t
    );
  },
  kC = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b,
      t
    );
  },
  CC = function (e, t) {
    var n = t.s + t.c * e;
    t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
  },
  EC = function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  },
  TC = function (e, t) {
    return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
  },
  SC = function (e, t, n) {
    return (e.style[t] = n);
  },
  AC = function (e, t, n) {
    return e.style.setProperty(t, n);
  },
  OC = function (e, t, n) {
    return (e._gsap[t] = n);
  },
  PC = function (e, t, n) {
    return (e._gsap.scaleX = e._gsap.scaleY = n);
  },
  FC = function (e, t, n, r, o) {
    var i = e._gsap;
    (i.scaleX = i.scaleY = n), i.renderTransform(o, i);
  },
  LC = function (e, t, n, r, o) {
    var i = e._gsap;
    (i[t] = n), i.renderTransform(o, i);
  },
  NC = "transform",
  IC = NC + "Origin",
  RC = function e(t, n) {
    var r = this,
      o = this.target,
      i = o.style,
      s = o._gsap;
    if (t in hC && i) {
      if (((this.tfm = this.tfm || {}), "transform" === t))
        return wC.transform.split(",").forEach(function (t) {
          return e.call(r, t, n);
        });
      if (
        (~(t = wC[t] || t).indexOf(",")
          ? t.split(",").forEach(function (e) {
              return (r.tfm[e] = eE(o, e));
            })
          : (this.tfm[t] = s.x ? s[t] : eE(o, t)),
        t === IC && (this.tfm.zOrigin = s.zOrigin),
        this.props.indexOf(NC) >= 0)
      )
        return;
      s.svg &&
        ((this.svgo = o.getAttribute("data-svg-origin")),
        this.props.push(IC, n, "")),
        (t = NC);
    }
    (i || n) && this.props.push(t, n, i[t]);
  },
  MC = function (e) {
    e.translate &&
      (e.removeProperty("translate"),
      e.removeProperty("scale"),
      e.removeProperty("rotate"));
  },
  BC = function () {
    var e,
      t,
      n = this.props,
      r = this.target,
      o = r.style,
      i = r._gsap;
    for (e = 0; e < n.length; e += 3)
      n[e + 1]
        ? (r[n[e]] = n[e + 2])
        : n[e + 2]
        ? (o[n[e]] = n[e + 2])
        : o.removeProperty(
            "--" === n[e].substr(0, 2)
              ? n[e]
              : n[e].replace(yC, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (t in this.tfm) i[t] = this.tfm[t];
      i.svg &&
        (i.renderTransform(),
        r.setAttribute("data-svg-origin", this.svgo || "")),
        ((e = dC()) && e.isStart) ||
          o[NC] ||
          (MC(o),
          i.zOrigin &&
            o[IC] &&
            ((o[IC] += " " + i.zOrigin + "px"),
            (i.zOrigin = 0),
            i.renderTransform()),
          (i.uncache = 1));
    }
  },
  jC = function (e, t) {
    var n = { target: e, props: [], revert: BC, save: RC };
    return (
      e._gsap || iC.core.getCache(e),
      t &&
        t.split(",").forEach(function (e) {
          return n.save(e);
        }),
      n
    );
  },
  $C = function (e, t) {
    var n = aC.createElementNS
      ? aC.createElementNS(
          (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          e
        )
      : aC.createElement(e);
    return n && n.style ? n : aC.createElement(e);
  },
  UC = function e(t, n, r) {
    var o = getComputedStyle(t);
    return (
      o[n] ||
      o.getPropertyValue(n.replace(yC, "-$1").toLowerCase()) ||
      o.getPropertyValue(n) ||
      (!r && e(t, HC(n) || n, 1)) ||
      ""
    );
  },
  qC = "O,Moz,ms,Ms,Webkit".split(","),
  HC = function (e, t, n) {
    var r = (t || uC).style,
      o = 5;
    if (e in r && !n) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      o-- && !(qC[o] + e in r);

    );
    return o < 0 ? null : (3 === o ? "ms" : o >= 0 ? qC[o] : "") + e;
  },
  zC = function () {
    "undefined" != typeof window &&
      window.document &&
      ((sC = window),
      (aC = sC.document),
      (lC = aC.documentElement),
      (uC = $C("div") || { style: {} }),
      $C("div"),
      (NC = HC(NC)),
      (IC = NC + "Origin"),
      (uC.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (fC = !!HC("perspective")),
      (dC = iC.core.reverting),
      (cC = 1));
  },
  VC = function e(t) {
    var n,
      r = $C(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      o = this.parentNode,
      i = this.nextSibling,
      s = this.style.cssText;
    if (
      (lC.appendChild(r),
      r.appendChild(this),
      (this.style.display = "block"),
      t)
    )
      try {
        (n = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = e);
      } catch (iI) {}
    else this._gsapBBox && (n = this._gsapBBox());
    return (
      o && (i ? o.insertBefore(this, i) : o.appendChild(this)),
      lC.removeChild(r),
      (this.style.cssText = s),
      n
    );
  },
  WC = function (e, t) {
    for (var n = t.length; n--; )
      if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
  },
  YC = function (e) {
    var t;
    try {
      t = e.getBBox();
    } catch (n) {
      t = VC.call(e, !0);
    }
    return (
      (t && (t.width || t.height)) || e.getBBox === VC || (t = VC.call(e, !0)),
      !t || t.width || t.x || t.y
        ? t
        : {
            x: +WC(e, ["x", "cx", "x1"]) || 0,
            y: +WC(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
    );
  },
  XC = function (e) {
    return !(!e.getCTM || (e.parentNode && !e.ownerSVGElement) || !YC(e));
  },
  GC = function (e, t) {
    if (t) {
      var n,
        r = e.style;
      t in hC && t !== IC && (t = NC),
        r.removeProperty
          ? (("ms" !== (n = t.substr(0, 2)) && "webkit" !== t.substr(0, 6)) ||
              (t = "-" + t),
            r.removeProperty(
              "--" === n ? t : t.replace(yC, "-$1").toLowerCase()
            ))
          : r.removeAttribute(t);
    }
  },
  KC = function (e, t, n, r, o, i) {
    var s = new Wk(e._pt, t, n, 0, 1, i ? TC : EC);
    return (e._pt = s), (s.b = r), (s.e = o), e._props.push(n), s;
  },
  JC = { deg: 1, rad: 1, turn: 1 },
  QC = { grid: 1, flex: 1 },
  ZC = function e(t, n, r, o) {
    var i,
      s,
      a,
      l,
      c = parseFloat(r) || 0,
      u = (r + "").trim().substr((c + "").length) || "px",
      p = uC.style,
      d = bC.test(n),
      f = "svg" === t.tagName.toLowerCase(),
      h = (f ? "client" : "offset") + (d ? "Width" : "Height"),
      m = 100,
      g = "px" === o,
      v = "%" === o;
    if (o === u || !c || JC[o] || JC[u]) return c;
    if (
      ("px" !== u && !g && (c = e(t, n, r, "px")),
      (l = t.getCTM && XC(t)),
      (v || "%" === u) && (hC[n] || ~n.indexOf("adius")))
    )
      return (
        (i = l ? t.getBBox()[d ? "width" : "height"] : t[h]),
        KD(v ? (c / i) * m : (c / 100) * i)
      );
    if (
      ((p[d ? "width" : "height"] = m + (g ? u : o)),
      (s =
        ~n.indexOf("adius") || ("em" === o && t.appendChild && !f)
          ? t
          : t.parentNode),
      l && (s = (t.ownerSVGElement || {}).parentNode),
      (s && s !== aC && s.appendChild) || (s = aC.body),
      (a = s._gsap) && v && a.width && d && a.time === sk.time && !a.uncache)
    )
      return KD((c / a.width) * m);
    if (!v || ("height" !== n && "width" !== n))
      (v || "%" === u) &&
        !QC[UC(s, "display")] &&
        (p.position = UC(t, "position")),
        s === t && (p.position = "static"),
        s.appendChild(uC),
        (i = uC[h]),
        s.removeChild(uC),
        (p.position = "absolute");
    else {
      var y = t.style[n];
      (t.style[n] = m + o), (i = t[h]), y ? (t.style[n] = y) : GC(t, n);
    }
    return (
      d && v && (((a = YD(s)).time = sk.time), (a.width = s[h])),
      KD(g ? (i * c) / m : i && c ? (m / i) * c : 0)
    );
  },
  eE = function (e, t, n, r) {
    var o;
    return (
      cC || zC(),
      t in wC &&
        "transform" !== t &&
        ~(t = wC[t]).indexOf(",") &&
        (t = t.split(",")[0]),
      hC[t] && "transform" !== t
        ? ((o = pE(e, r)),
          (o =
            "transformOrigin" !== t
              ? o[t]
              : o.svg
              ? o.origin
              : dE(UC(e, IC)) + " " + o.zOrigin + "px"))
        : (!(o = e.style[t]) ||
            "auto" === o ||
            r ||
            ~(o + "").indexOf("calc(")) &&
          (o =
            (oE[t] && oE[t](e, t, n)) ||
            UC(e, t) ||
            XD(e, t) ||
            ("opacity" === t ? 1 : 0)),
      n && !~(o + "").trim().indexOf(" ") ? ZC(e, t, o, n) + n : o
    );
  },
  tE = function (e, t, n, r) {
    if (!n || "none" === n) {
      var o = HC(t, e, 1),
        i = o && UC(e, o, 1);
      i && i !== n
        ? ((t = o), (n = i))
        : "borderColor" === t && (n = UC(e, "borderTopColor"));
    }
    var s,
      a,
      l,
      c,
      u,
      p,
      d,
      f,
      h,
      m,
      g,
      v = new Wk(this._pt, e.style, t, 0, 1, $k),
      y = 0,
      b = 0;
    if (
      ((v.b = n),
      (v.e = r),
      (n += ""),
      "auto" === (r += "") &&
        ((p = e.style[t]),
        (e.style[t] = r),
        (r = UC(e, t) || r),
        p ? (e.style[t] = p) : GC(e, t)),
      ik((s = [n, r])),
      (r = s[1]),
      (l = (n = s[0]).match(kD) || []),
      (r.match(kD) || []).length)
    ) {
      for (; (a = kD.exec(r)); )
        (d = a[0]),
          (h = r.substring(y, a.index)),
          u
            ? (u = (u + 1) % 5)
            : ("rgba(" !== h.substr(-5) && "hsla(" !== h.substr(-5)) || (u = 1),
          d !== (p = l[b++] || "") &&
            ((c = parseFloat(p) || 0),
            (g = p.substr((c + "").length)),
            "=" === d.charAt(1) && (d = QD(c, d) + g),
            (f = parseFloat(d)),
            (m = d.substr((f + "").length)),
            (y = kD.lastIndex - m.length),
            m ||
              ((m = m || nD.units[t] || g),
              y === r.length && ((r += m), (v.e += m))),
            g !== m && (c = ZC(e, t, p, m) || 0),
            (v._pt = {
              _next: v._pt,
              p: h || 1 === b ? h : ",",
              s: c,
              c: f - c,
              m: (u && u < 4) || "zIndex" === t ? Math.round : 0,
            }));
      v.c = y < r.length ? r.substring(y, r.length) : "";
    } else v.r = "display" === t && "none" === r ? TC : EC;
    return ED.test(r) && (v.e = 0), (this._pt = v), v;
  },
  nE = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  rE = function (e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var n,
        r,
        o,
        i = t.t,
        s = i.style,
        a = t.u,
        l = i._gsap;
      if ("all" === a || !0 === a) (s.cssText = ""), (r = 1);
      else
        for (o = (a = a.split(",")).length; --o > -1; )
          (n = a[o]),
            hC[n] && ((r = 1), (n = "transformOrigin" === n ? IC : NC)),
            GC(i, n);
      r &&
        (GC(i, NC),
        l &&
          (l.svg && i.removeAttribute("transform"),
          pE(i, 1),
          (l.uncache = 1),
          MC(s)));
    }
  },
  oE = {
    clearProps: function (e, t, n, r, o) {
      if ("isFromStart" !== o.data) {
        var i = (e._pt = new Wk(e._pt, t, n, 0, 0, rE));
        return (i.u = r), (i.pr = -10), (i.tween = o), e._props.push(n), 1;
      }
    },
  },
  iE = [1, 0, 0, 1, 0, 0],
  sE = {},
  aE = function (e) {
    return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e;
  },
  lE = function (e) {
    var t = UC(e, NC);
    return aE(t) ? iE : t.substr(7).match(xD).map(KD);
  },
  cE = function (e, t) {
    var n,
      r,
      o,
      i,
      s = e._gsap || YD(e),
      a = e.style,
      l = lE(e);
    return s.svg && e.getAttribute("transform")
      ? "1,0,0,1,0,0" ===
        (l = [
          (o = e.transform.baseVal.consolidate().matrix).a,
          o.b,
          o.c,
          o.d,
          o.e,
          o.f,
        ]).join(",")
        ? iE
        : l
      : (l !== iE ||
          e.offsetParent ||
          e === lC ||
          s.svg ||
          ((o = a.display),
          (a.display = "block"),
          ((n = e.parentNode) && e.offsetParent) ||
            ((i = 1), (r = e.nextElementSibling), lC.appendChild(e)),
          (l = lE(e)),
          o ? (a.display = o) : GC(e, "display"),
          i &&
            (r
              ? n.insertBefore(e, r)
              : n
              ? n.appendChild(e)
              : lC.removeChild(e))),
        t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
  },
  uE = function (e, t, n, r, o, i) {
    var s,
      a,
      l,
      c = e._gsap,
      u = o || cE(e, !0),
      p = c.xOrigin || 0,
      d = c.yOrigin || 0,
      f = c.xOffset || 0,
      h = c.yOffset || 0,
      m = u[0],
      g = u[1],
      v = u[2],
      y = u[3],
      b = u[4],
      _ = u[5],
      w = t.split(" "),
      D = parseFloat(w[0]) || 0,
      x = parseFloat(w[1]) || 0;
    n
      ? u !== iE &&
        (a = m * y - g * v) &&
        ((l = D * (-g / a) + x * (m / a) - (m * _ - g * b) / a),
        (D = D * (y / a) + x * (-v / a) + (v * _ - y * b) / a),
        (x = l))
      : ((D = (s = YC(e)).x + (~w[0].indexOf("%") ? (D / 100) * s.width : D)),
        (x = s.y + (~(w[1] || w[0]).indexOf("%") ? (x / 100) * s.height : x))),
      r || (!1 !== r && c.smooth)
        ? ((b = D - p),
          (_ = x - d),
          (c.xOffset = f + (b * m + _ * v) - b),
          (c.yOffset = h + (b * g + _ * y) - _))
        : (c.xOffset = c.yOffset = 0),
      (c.xOrigin = D),
      (c.yOrigin = x),
      (c.smooth = !!r),
      (c.origin = t),
      (c.originIsAbsolute = !!n),
      (e.style[IC] = "0px 0px"),
      i &&
        (KC(i, c, "xOrigin", p, D),
        KC(i, c, "yOrigin", d, x),
        KC(i, c, "xOffset", f, c.xOffset),
        KC(i, c, "yOffset", h, c.yOffset)),
      e.setAttribute("data-svg-origin", D + " " + x);
  },
  pE = function (e, t) {
    var n = e._gsap || new bk(e);
    if ("x" in n && !t && !n.uncache) return n;
    var r,
      o,
      i,
      s,
      a,
      l,
      c,
      u,
      p,
      d,
      f,
      h,
      m,
      g,
      v,
      y,
      b,
      _,
      w,
      D,
      x,
      k,
      C,
      E,
      T,
      S,
      A,
      O,
      P,
      F,
      L,
      N,
      I = e.style,
      R = n.scaleX < 0,
      M = "px",
      B = "deg",
      j = getComputedStyle(e),
      $ = UC(e, IC) || "0";
    return (
      (r = o = i = l = c = u = p = d = f = 0),
      (s = a = 1),
      (n.svg = !(!e.getCTM || !XC(e))),
      j.translate &&
        (("none" === j.translate &&
          "none" === j.scale &&
          "none" === j.rotate) ||
          (I[NC] =
            ("none" !== j.translate
              ? "translate3d(" +
                (j.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            ("none" !== j.rotate ? "rotate(" + j.rotate + ") " : "") +
            ("none" !== j.scale
              ? "scale(" + j.scale.split(" ").join(",") + ") "
              : "") +
            ("none" !== j[NC] ? j[NC] : "")),
        (I.scale = I.rotate = I.translate = "none")),
      (g = cE(e, n.svg)),
      n.svg &&
        (n.uncache
          ? ((T = e.getBBox()),
            ($ = n.xOrigin - T.x + "px " + (n.yOrigin - T.y) + "px"),
            (E = ""))
          : (E = !t && e.getAttribute("data-svg-origin")),
        uE(e, E || $, !!E || n.originIsAbsolute, !1 !== n.smooth, g)),
      (h = n.xOrigin || 0),
      (m = n.yOrigin || 0),
      g !== iE &&
        ((_ = g[0]),
        (w = g[1]),
        (D = g[2]),
        (x = g[3]),
        (r = k = g[4]),
        (o = C = g[5]),
        6 === g.length
          ? ((s = Math.sqrt(_ * _ + w * w)),
            (a = Math.sqrt(x * x + D * D)),
            (l = _ || w ? vC(w, _) * mC : 0),
            (p = D || x ? vC(D, x) * mC + l : 0) &&
              (a *= Math.abs(Math.cos(p * gC))),
            n.svg && ((r -= h - (h * _ + m * D)), (o -= m - (h * w + m * x))))
          : ((N = g[6]),
            (F = g[7]),
            (A = g[8]),
            (O = g[9]),
            (P = g[10]),
            (L = g[11]),
            (r = g[12]),
            (o = g[13]),
            (i = g[14]),
            (c = (v = vC(N, P)) * mC),
            v &&
              ((E = k * (y = Math.cos(-v)) + A * (b = Math.sin(-v))),
              (T = C * y + O * b),
              (S = N * y + P * b),
              (A = k * -b + A * y),
              (O = C * -b + O * y),
              (P = N * -b + P * y),
              (L = F * -b + L * y),
              (k = E),
              (C = T),
              (N = S)),
            (u = (v = vC(-D, P)) * mC),
            v &&
              ((y = Math.cos(-v)),
              (L = x * (b = Math.sin(-v)) + L * y),
              (_ = E = _ * y - A * b),
              (w = T = w * y - O * b),
              (D = S = D * y - P * b)),
            (l = (v = vC(w, _)) * mC),
            v &&
              ((E = _ * (y = Math.cos(v)) + w * (b = Math.sin(v))),
              (T = k * y + C * b),
              (w = w * y - _ * b),
              (C = C * y - k * b),
              (_ = E),
              (k = T)),
            c &&
              Math.abs(c) + Math.abs(l) > 359.9 &&
              ((c = l = 0), (u = 180 - u)),
            (s = KD(Math.sqrt(_ * _ + w * w + D * D))),
            (a = KD(Math.sqrt(C * C + N * N))),
            (v = vC(k, C)),
            (p = Math.abs(v) > 2e-4 ? v * mC : 0),
            (f = L ? 1 / (L < 0 ? -L : L) : 0)),
        n.svg &&
          ((E = e.getAttribute("transform")),
          (n.forceCSS = e.setAttribute("transform", "") || !aE(UC(e, NC))),
          E && e.setAttribute("transform", E))),
      Math.abs(p) > 90 &&
        Math.abs(p) < 270 &&
        (R
          ? ((s *= -1), (p += l <= 0 ? 180 : -180), (l += l <= 0 ? 180 : -180))
          : ((a *= -1), (p += p <= 0 ? 180 : -180))),
      (t = t || n.uncache),
      (n.x =
        r -
        ((n.xPercent =
          r &&
          ((!t && n.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-r) ? -50 : 0)))
          ? (e.offsetWidth * n.xPercent) / 100
          : 0) +
        M),
      (n.y =
        o -
        ((n.yPercent =
          o &&
          ((!t && n.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-o) ? -50 : 0)))
          ? (e.offsetHeight * n.yPercent) / 100
          : 0) +
        M),
      (n.z = i + M),
      (n.scaleX = KD(s)),
      (n.scaleY = KD(a)),
      (n.rotation = KD(l) + B),
      (n.rotationX = KD(c) + B),
      (n.rotationY = KD(u) + B),
      (n.skewX = p + B),
      (n.skewY = d + B),
      (n.transformPerspective = f + M),
      (n.zOrigin = parseFloat($.split(" ")[2]) || (!t && n.zOrigin) || 0) &&
        (I[IC] = dE($)),
      (n.xOffset = n.yOffset = 0),
      (n.force3D = nD.force3D),
      (n.renderTransform = n.svg ? bE : fC ? yE : hE),
      (n.uncache = 0),
      n
    );
  },
  dE = function (e) {
    return (e = e.split(" "))[0] + " " + e[1];
  },
  fE = function (e, t, n) {
    var r = Lx(t);
    return KD(parseFloat(t) + parseFloat(ZC(e, "x", n + "px", r))) + r;
  },
  hE = function (e, t) {
    (t.z = "0px"),
      (t.rotationY = t.rotationX = "0deg"),
      (t.force3D = 0),
      yE(e, t);
  },
  mE = "0deg",
  gE = "0px",
  vE = ") ",
  yE = function (e, t) {
    var n = t || this,
      r = n.xPercent,
      o = n.yPercent,
      i = n.x,
      s = n.y,
      a = n.z,
      l = n.rotation,
      c = n.rotationY,
      u = n.rotationX,
      p = n.skewX,
      d = n.skewY,
      f = n.scaleX,
      h = n.scaleY,
      m = n.transformPerspective,
      g = n.force3D,
      v = n.target,
      y = n.zOrigin,
      b = "",
      _ = ("auto" === g && e && 1 !== e) || !0 === g;
    if (y && (u !== mE || c !== mE)) {
      var w,
        D = parseFloat(c) * gC,
        x = Math.sin(D),
        k = Math.cos(D);
      (D = parseFloat(u) * gC),
        (w = Math.cos(D)),
        (i = fE(v, i, x * w * -y)),
        (s = fE(v, s, -Math.sin(D) * -y)),
        (a = fE(v, a, k * w * -y + y));
    }
    m !== gE && (b += "perspective(" + m + vE),
      (r || o) && (b += "translate(" + r + "%, " + o + "%) "),
      (_ || i !== gE || s !== gE || a !== gE) &&
        (b +=
          a !== gE || _
            ? "translate3d(" + i + ", " + s + ", " + a + ") "
            : "translate(" + i + ", " + s + vE),
      l !== mE && (b += "rotate(" + l + vE),
      c !== mE && (b += "rotateY(" + c + vE),
      u !== mE && (b += "rotateX(" + u + vE),
      (p === mE && d === mE) || (b += "skew(" + p + ", " + d + vE),
      (1 === f && 1 === h) || (b += "scale(" + f + ", " + h + vE),
      (v.style[NC] = b || "translate(0, 0)");
  },
  bE = function (e, t) {
    var n,
      r,
      o,
      i,
      s,
      a = t || this,
      l = a.xPercent,
      c = a.yPercent,
      u = a.x,
      p = a.y,
      d = a.rotation,
      f = a.skewX,
      h = a.skewY,
      m = a.scaleX,
      g = a.scaleY,
      v = a.target,
      y = a.xOrigin,
      b = a.yOrigin,
      _ = a.xOffset,
      w = a.yOffset,
      D = a.forceCSS,
      x = parseFloat(u),
      k = parseFloat(p);
    (d = parseFloat(d)),
      (f = parseFloat(f)),
      (h = parseFloat(h)) && ((f += h = parseFloat(h)), (d += h)),
      d || f
        ? ((d *= gC),
          (f *= gC),
          (n = Math.cos(d) * m),
          (r = Math.sin(d) * m),
          (o = Math.sin(d - f) * -g),
          (i = Math.cos(d - f) * g),
          f &&
            ((h *= gC),
            (s = Math.tan(f - h)),
            (o *= s = Math.sqrt(1 + s * s)),
            (i *= s),
            h &&
              ((s = Math.tan(h)), (n *= s = Math.sqrt(1 + s * s)), (r *= s))),
          (n = KD(n)),
          (r = KD(r)),
          (o = KD(o)),
          (i = KD(i)))
        : ((n = m), (i = g), (r = o = 0)),
      ((x && !~(u + "").indexOf("px")) || (k && !~(p + "").indexOf("px"))) &&
        ((x = ZC(v, "x", u, "px")), (k = ZC(v, "y", p, "px"))),
      (y || b || _ || w) &&
        ((x = KD(x + y - (y * n + b * o) + _)),
        (k = KD(k + b - (y * r + b * i) + w))),
      (l || c) &&
        ((s = v.getBBox()),
        (x = KD(x + (l / 100) * s.width)),
        (k = KD(k + (c / 100) * s.height))),
      (s =
        "matrix(" + n + "," + r + "," + o + "," + i + "," + x + "," + k + ")"),
      v.setAttribute("transform", s),
      D && (v.style[NC] = s);
  },
  _E = function (e, t, n, r, o) {
    var i,
      s,
      a = 360,
      l = dD(o),
      c = parseFloat(o) * (l && ~o.indexOf("rad") ? mC : 1) - r,
      u = r + c + "deg";
    return (
      l &&
        ("short" === (i = o.split("_")[1]) &&
          (c %= a) !== c % 180 &&
          (c += c < 0 ? a : -360),
        "cw" === i && c < 0
          ? (c = ((c + 36e9) % a) - ~~(c / a) * a)
          : "ccw" === i && c > 0 && (c = ((c - 36e9) % a) - ~~(c / a) * a)),
      (e._pt = s = new Wk(e._pt, t, n, r, c, xC)),
      (s.e = u),
      (s.u = "deg"),
      e._props.push(n),
      s
    );
  },
  wE = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  },
  DE = function (e, t, n) {
    var r,
      o,
      i,
      s,
      a,
      l,
      c,
      u = wE({}, n._gsap),
      p = n.style;
    for (o in (u.svg
      ? ((i = n.getAttribute("transform")),
        n.setAttribute("transform", ""),
        (p[NC] = t),
        (r = pE(n, 1)),
        GC(n, NC),
        n.setAttribute("transform", i))
      : ((i = getComputedStyle(n)[NC]),
        (p[NC] = t),
        (r = pE(n, 1)),
        (p[NC] = i)),
    hC))
      (i = u[o]) !== (s = r[o]) &&
        "perspective,force3D,transformOrigin,svgOrigin".indexOf(o) < 0 &&
        ((a = Lx(i) !== (c = Lx(s)) ? ZC(n, o, i, c) : parseFloat(i)),
        (l = parseFloat(s)),
        (e._pt = new Wk(e._pt, r, o, a, l - a, DC)),
        (e._pt.u = c || 0),
        e._props.push(o));
    wE(r, u);
  };
GD("padding,margin,Width,Radius", function (e, t) {
  var n = "Top",
    r = "Right",
    o = "Bottom",
    i = "Left",
    s = (t < 3 ? [n, r, o, i] : [n + i, n + r, o + r, o + i]).map(function (n) {
      return t < 2 ? e + n : "border" + n + e;
    });
  oE[t > 1 ? "border" + e : e] = function (e, t, n, r, o) {
    var i, a;
    if (arguments.length < 4)
      return (
        (i = s.map(function (t) {
          return eE(e, t, n);
        })),
        5 === (a = i.join(" ")).split(i[0]).length ? i[0] : a
      );
    (i = (r + "").split(" ")),
      (a = {}),
      s.forEach(function (e, t) {
        return (a[e] = i[t] = i[t] || i[((t - 1) / 2) | 0]);
      }),
      e.init(t, a, o);
  };
});
var xE,
  kE,
  CE,
  EE = {
    name: "css",
    register: zC,
    targetTest: function (e) {
      return e.style && e.nodeType;
    },
    init: function (e, t, n, r, o) {
      var i,
        s,
        a,
        l,
        c,
        u,
        p,
        d,
        f,
        h,
        m,
        g,
        v,
        y,
        b,
        _,
        w,
        D,
        x,
        k,
        C = this._props,
        E = e.style,
        T = n.vars.startAt;
      for (p in (cC || zC(),
      (this.styles = this.styles || jC(e)),
      (_ = this.styles.props),
      (this.tween = n),
      t))
        if ("autoRound" !== p && ((s = t[p]), !UD[p] || !Ek(p, t, n, r, e, o)))
          if (
            ((c = typeof s),
            (u = oE[p]),
            "function" === c && (c = typeof (s = s.call(n, r, e, o))),
            "string" === c && ~s.indexOf("random(") && (s = zx(s)),
            u)
          )
            u(this, e, p, s, n) && (b = 1);
          else if ("--" === p.substr(0, 2))
            (i = (getComputedStyle(e).getPropertyValue(p) + "").trim()),
              (s += ""),
              (rk.lastIndex = 0),
              rk.test(i) || ((d = Lx(i)), (f = Lx(s))),
              f ? d !== f && (i = ZC(e, p, i, f) + f) : d && (s += d),
              this.add(E, "setProperty", i, s, r, o, 0, 0, p),
              C.push(p),
              _.push(p, 0, E[p]);
          else if ("undefined" !== c) {
            if (
              (T && p in T
                ? ((i =
                    "function" == typeof T[p] ? T[p].call(n, r, e, o) : T[p]),
                  dD(i) && ~i.indexOf("random(") && (i = zx(i)),
                  Lx(i + "") ||
                    "auto" === i ||
                    (i += nD.units[p] || Lx(eE(e, p)) || ""),
                  "=" === (i + "").charAt(1) && (i = eE(e, p)))
                : (i = eE(e, p)),
              (l = parseFloat(i)),
              (h = "string" === c && "=" === s.charAt(1) && s.substr(0, 2)) &&
                (s = s.substr(2)),
              (a = parseFloat(s)),
              p in wC &&
                ("autoAlpha" === p &&
                  (1 === l && "hidden" === eE(e, "visibility") && a && (l = 0),
                  _.push("visibility", 0, E.visibility),
                  KC(
                    this,
                    E,
                    "visibility",
                    l ? "inherit" : "hidden",
                    a ? "inherit" : "hidden",
                    !a
                  )),
                "scale" !== p &&
                  "transform" !== p &&
                  ~(p = wC[p]).indexOf(",") &&
                  (p = p.split(",")[0])),
              (m = p in hC))
            )
              if (
                (this.styles.save(p),
                g ||
                  (((v = e._gsap).renderTransform && !t.parseTransform) ||
                    pE(e, t.parseTransform),
                  (y = !1 !== t.smoothOrigin && v.smooth),
                  ((g = this._pt =
                    new Wk(
                      this._pt,
                      E,
                      NC,
                      0,
                      1,
                      v.renderTransform,
                      v,
                      0,
                      -1
                    )).dep = 1)),
                "scale" === p)
              )
                (this._pt = new Wk(
                  this._pt,
                  v,
                  "scaleY",
                  v.scaleY,
                  (h ? QD(v.scaleY, h + a) : a) - v.scaleY || 0,
                  DC
                )),
                  (this._pt.u = 0),
                  C.push("scaleY", p),
                  (p += "X");
              else {
                if ("transformOrigin" === p) {
                  _.push(IC, 0, E[IC]),
                    (D = void 0),
                    (x = void 0),
                    (k = void 0),
                    (D = (w = s).split(" ")),
                    (x = D[0]),
                    (k = D[1] || "50%"),
                    ("top" !== x &&
                      "bottom" !== x &&
                      "left" !== k &&
                      "right" !== k) ||
                      ((w = x), (x = k), (k = w)),
                    (D[0] = nE[x] || x),
                    (D[1] = nE[k] || k),
                    (s = D.join(" ")),
                    v.svg
                      ? uE(e, s, 0, y, 0, this)
                      : ((f = parseFloat(s.split(" ")[2]) || 0) !== v.zOrigin &&
                          KC(this, v, "zOrigin", v.zOrigin, f),
                        KC(this, E, p, dE(i), dE(s)));
                  continue;
                }
                if ("svgOrigin" === p) {
                  uE(e, s, 1, y, 0, this);
                  continue;
                }
                if (p in sE) {
                  _E(this, v, p, l, h ? QD(l, h + s) : s);
                  continue;
                }
                if ("smoothOrigin" === p) {
                  KC(this, v, "smooth", v.smooth, s);
                  continue;
                }
                if ("force3D" === p) {
                  v[p] = s;
                  continue;
                }
                if ("transform" === p) {
                  DE(this, s, e);
                  continue;
                }
              }
            else p in E || (p = HC(p) || p);
            if (
              m ||
              ((a || 0 === a) && (l || 0 === l) && !_C.test(s) && p in E)
            )
              a || (a = 0),
                (d = (i + "").substr((l + "").length)) !==
                  (f = Lx(s) || (p in nD.units ? nD.units[p] : d)) &&
                  (l = ZC(e, p, i, f)),
                (this._pt = new Wk(
                  this._pt,
                  m ? v : E,
                  p,
                  l,
                  (h ? QD(l, h + a) : a) - l,
                  m || ("px" !== f && "zIndex" !== p) || !1 === t.autoRound
                    ? DC
                    : CC
                )),
                (this._pt.u = f || 0),
                d !== f && "%" !== f && ((this._pt.b = i), (this._pt.r = kC));
            else if (p in E) tE.call(this, e, p, i, h ? h + s : s);
            else if (p in e) this.add(e, p, i || e[p], h ? h + s : s, r, o);
            else if ("parseTransform" !== p) continue;
            m || (p in E ? _.push(p, 0, E[p]) : _.push(p, 1, i || e[p])),
              C.push(p);
          }
      b && Vk(this);
    },
    render: function (e, t) {
      if (t.tween._time || !dC())
        for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
      else t.styles.revert();
    },
    get: eE,
    aliases: wC,
    getSetter: function (e, t, n) {
      var r = wC[t];
      return (
        r && r.indexOf(",") < 0 && (t = r),
        t in hC && t !== IC && (e._gsap.x || eE(e, "x"))
          ? n && pC === n
            ? "scale" === t
              ? PC
              : OC
            : (pC = n || {}) && ("scale" === t ? FC : LC)
          : e.style && !mD(e.style[t])
          ? SC
          : ~t.indexOf("-")
          ? AC
          : Mk(e, t)
      );
    },
    core: { _removeProperty: GC, _getMatrix: cE },
  };
(iC.utils.checkPrefix = HC),
  (iC.core.getStyleSaver = jC),
  (CE = GD(
    (xE = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
      "," +
      (kE = "rotation,rotationX,rotationY,skewX,skewY") +
      ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
    function (e) {
      hC[e] = 1;
    }
  )),
  GD(kE, function (e) {
    (nD.units[e] = "deg"), (sE[e] = 1);
  }),
  (wC[CE[13]] = xE + "," + kE),
  GD(
    "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
    function (e) {
      var t = e.split(":");
      wC[t[1]] = CE[t[0]];
    }
  ),
  GD(
    "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
    function (e) {
      nD.units[e] = "px";
    }
  ),
  iC.registerPlugin(EE);
var TE = iC.registerPlugin(EE) || iC;
function SE(e, t, n) {
  return (
    (function (e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    })(e.prototype, t),
    e
  );
}
TE.core.Tween;
var AE,
  OE,
  PE,
  FE,
  LE,
  NE,
  IE,
  RE,
  ME,
  BE,
  jE,
  $E,
  UE,
  qE = function () {
    return (
      AE ||
      ("undefined" != typeof window &&
        (AE = window.gsap) &&
        AE.registerPlugin &&
        AE)
    );
  },
  HE = 1,
  zE = [],
  VE = [],
  WE = [],
  YE = Date.now,
  XE = function (e, t) {
    return t;
  },
  GE = function (e, t) {
    return ~WE.indexOf(e) && WE[WE.indexOf(e) + 1][t];
  },
  KE = function (e) {
    return !!~BE.indexOf(e);
  },
  JE = function (e, t, n, r, o) {
    return e.addEventListener(t, n, { passive: !1 !== r, capture: !!o });
  },
  QE = function (e, t, n, r) {
    return e.removeEventListener(t, n, !!r);
  },
  ZE = "scrollLeft",
  eT = "scrollTop",
  tT = function () {
    return (jE && jE.isPressed) || VE.cache++;
  },
  nT = function (e, t) {
    var n = function n(r) {
      if (r || 0 === r) {
        HE && (PE.history.scrollRestoration = "manual");
        var o = jE && jE.isPressed;
        (r = n.v = Math.round(r) || (jE && jE.iOS ? 1 : 0)),
          e(r),
          (n.cacheID = VE.cache),
          o && XE("ss", r);
      } else
        (t || VE.cache !== n.cacheID || XE("ref")) &&
          ((n.cacheID = VE.cache), (n.v = e()));
      return n.v + n.offset;
    };
    return (n.offset = 0), e && n;
  },
  rT = {
    s: ZE,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: nT(function (e) {
      return arguments.length
        ? PE.scrollTo(e, oT.sc())
        : PE.pageXOffset || FE[ZE] || LE[ZE] || NE[ZE] || 0;
    }),
  },
  oT = {
    s: eT,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: rT,
    sc: nT(function (e) {
      return arguments.length
        ? PE.scrollTo(rT.sc(), e)
        : PE.pageYOffset || FE[eT] || LE[eT] || NE[eT] || 0;
    }),
  },
  iT = function (e, t) {
    return (
      ((t && t._ctx && t._ctx.selector) || AE.utils.toArray)(e)[0] ||
      ("string" == typeof e && !1 !== AE.config().nullTargetWarn
        ? void 0
        : null)
    );
  },
  sT = function (e, t) {
    var n = t.s,
      r = t.sc;
    KE(e) && (e = FE.scrollingElement || LE);
    var o = VE.indexOf(e),
      i = r === oT.sc ? 1 : 2;
    !~o && (o = VE.push(e) - 1), VE[o + i] || JE(e, "scroll", tT);
    var s = VE[o + i],
      a =
        s ||
        (VE[o + i] =
          nT(GE(e, n), !0) ||
          (KE(e)
            ? r
            : nT(function (t) {
                return arguments.length ? (e[n] = t) : e[n];
              })));
    return (
      (a.target = e),
      s || (a.smooth = "smooth" === AE.getProperty(e, "scrollBehavior")),
      a
    );
  },
  aT = function (e, t, n) {
    var r = e,
      o = e,
      i = YE(),
      s = i,
      a = t || 50,
      l = Math.max(500, 3 * a),
      c = function (e, t) {
        var l = YE();
        t || l - i > a
          ? ((o = r), (r = e), (s = i), (i = l))
          : n
          ? (r += e)
          : (r = o + ((e - o) / (l - s)) * (i - s));
      };
    return {
      update: c,
      reset: function () {
        (o = r = n ? 0 : r), (s = i = 0);
      },
      getVelocity: function (e) {
        var t = s,
          a = o,
          u = YE();
        return (
          (e || 0 === e) && e !== r && c(e),
          i === s || u - s > l
            ? 0
            : ((r + (n ? a : -a)) / ((n ? u : i) - t)) * 1e3
        );
      },
    };
  },
  lT = function (e, t) {
    return (
      t && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  },
  cT = function (e) {
    var t = Math.max.apply(Math, e),
      n = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(n) ? t : n;
  },
  uT = function () {
    var e, t, n, r;
    (ME = AE.core.globals().ScrollTrigger) &&
      ME.core &&
      ((e = ME.core),
      (t = e.bridge || {}),
      (n = e._scrollers),
      (r = e._proxies),
      n.push.apply(n, VE),
      r.push.apply(r, WE),
      (VE = n),
      (WE = r),
      (XE = function (e, n) {
        return t[e](n);
      }));
  },
  pT = function (e) {
    return (
      (AE = e || qE()),
      !OE &&
        AE &&
        "undefined" != typeof document &&
        document.body &&
        ((PE = window),
        (FE = document),
        (LE = FE.documentElement),
        (NE = FE.body),
        (BE = [PE, FE, LE, NE]),
        AE.utils.clamp,
        (UE = AE.core.context || function () {}),
        (RE = "onpointerenter" in NE ? "pointer" : "mouse"),
        (IE = dT.isTouch =
          PE.matchMedia &&
          PE.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in PE ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        ($E = dT.eventTypes =
          (
            "ontouchstart" in LE
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in LE
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (HE = 0);
        }, 500),
        uT(),
        (OE = 1)),
      OE
    );
  };
(rT.op = oT), (VE.cache = 0);
var dT = (function () {
  function e(e) {
    this.init(e);
  }
  return (
    (e.prototype.init = function (e) {
      OE || pT(AE), ME || uT();
      var t = e.tolerance,
        n = e.dragMinimum,
        r = e.type,
        o = e.target,
        i = e.lineHeight,
        s = e.debounce,
        a = e.preventDefault,
        l = e.onStop,
        c = e.onStopDelay,
        u = e.ignore,
        p = e.wheelSpeed,
        d = e.event,
        f = e.onDragStart,
        h = e.onDragEnd,
        m = e.onDrag,
        g = e.onPress,
        v = e.onRelease,
        y = e.onRight,
        b = e.onLeft,
        _ = e.onUp,
        w = e.onDown,
        D = e.onChangeX,
        x = e.onChangeY,
        k = e.onChange,
        C = e.onToggleX,
        E = e.onToggleY,
        T = e.onHover,
        S = e.onHoverEnd,
        A = e.onMove,
        O = e.ignoreCheck,
        P = e.isNormalizer,
        F = e.onGestureStart,
        L = e.onGestureEnd,
        N = e.onWheel,
        I = e.onEnable,
        R = e.onDisable,
        M = e.onClick,
        B = e.scrollSpeed,
        j = e.capture,
        $ = e.allowClicks,
        U = e.lockAxis,
        q = e.onLockAxis;
      (this.target = o = iT(o) || LE),
        (this.vars = e),
        u && (u = AE.utils.toArray(u)),
        (t = t || 1e-9),
        (n = n || 0),
        (p = p || 1),
        (B = B || 1),
        (r = r || "wheel,touch,pointer"),
        (s = !1 !== s),
        i || (i = parseFloat(PE.getComputedStyle(NE).lineHeight) || 22);
      var H,
        z,
        V,
        W,
        Y,
        X,
        G,
        K = this,
        J = 0,
        Q = 0,
        Z = e.passive || !a,
        ee = sT(o, rT),
        te = sT(o, oT),
        ne = ee(),
        re = te(),
        oe =
          ~r.indexOf("touch") &&
          !~r.indexOf("pointer") &&
          "pointerdown" === $E[0],
        ie = KE(o),
        se = o.ownerDocument || FE,
        ae = [0, 0, 0],
        le = [0, 0, 0],
        ce = 0,
        ue = function () {
          return (ce = YE());
        },
        pe = function (e, t) {
          return (
            ((K.event = e) && u && ~u.indexOf(e.target)) ||
            (t && oe && "touch" !== e.pointerType) ||
            (O && O(e, t))
          );
        },
        de = function () {
          var e = (K.deltaX = cT(ae)),
            n = (K.deltaY = cT(le)),
            r = Math.abs(e) >= t,
            o = Math.abs(n) >= t;
          k && (r || o) && k(K, e, n, ae, le),
            r &&
              (y && K.deltaX > 0 && y(K),
              b && K.deltaX < 0 && b(K),
              D && D(K),
              C && K.deltaX < 0 != J < 0 && C(K),
              (J = K.deltaX),
              (ae[0] = ae[1] = ae[2] = 0)),
            o &&
              (w && K.deltaY > 0 && w(K),
              _ && K.deltaY < 0 && _(K),
              x && x(K),
              E && K.deltaY < 0 != Q < 0 && E(K),
              (Q = K.deltaY),
              (le[0] = le[1] = le[2] = 0)),
            (W || V) && (A && A(K), V && (m(K), (V = !1)), (W = !1)),
            X && !(X = !1) && q && q(K),
            Y && (N(K), (Y = !1)),
            (H = 0);
        },
        fe = function (e, t, n) {
          (ae[n] += e),
            (le[n] += t),
            K._vx.update(e),
            K._vy.update(t),
            s ? H || (H = requestAnimationFrame(de)) : de();
        },
        he = function (e, t) {
          U &&
            !G &&
            ((K.axis = G = Math.abs(e) > Math.abs(t) ? "x" : "y"), (X = !0)),
            "y" !== G && ((ae[2] += e), K._vx.update(e, !0)),
            "x" !== G && ((le[2] += t), K._vy.update(t, !0)),
            s ? H || (H = requestAnimationFrame(de)) : de();
        },
        me = function (e) {
          if (!pe(e, 1)) {
            var t = (e = lT(e, a)).clientX,
              r = e.clientY,
              o = t - K.x,
              i = r - K.y,
              s = K.isDragging;
            (K.x = t),
              (K.y = r),
              (s ||
                Math.abs(K.startX - t) >= n ||
                Math.abs(K.startY - r) >= n) &&
                (m && (V = !0),
                s || (K.isDragging = !0),
                he(o, i),
                s || (f && f(K)));
          }
        },
        ge = (K.onPress = function (e) {
          pe(e, 1) ||
            (e && e.button) ||
            ((K.axis = G = null),
            z.pause(),
            (K.isPressed = !0),
            (e = lT(e)),
            (J = Q = 0),
            (K.startX = K.x = e.clientX),
            (K.startY = K.y = e.clientY),
            K._vx.reset(),
            K._vy.reset(),
            JE(P ? o : se, $E[1], me, Z, !0),
            (K.deltaX = K.deltaY = 0),
            g && g(K));
        }),
        ve = (K.onRelease = function (e) {
          if (!pe(e, 1)) {
            QE(P ? o : se, $E[1], me, !0);
            var t = !isNaN(K.y - K.startY),
              n = K.isDragging,
              r =
                n &&
                (Math.abs(K.x - K.startX) > 3 || Math.abs(K.y - K.startY) > 3),
              i = lT(e);
            !r &&
              t &&
              (K._vx.reset(),
              K._vy.reset(),
              a &&
                $ &&
                AE.delayedCall(0.08, function () {
                  if (YE() - ce > 300 && !e.defaultPrevented)
                    if (e.target.click) e.target.click();
                    else if (se.createEvent) {
                      var t = se.createEvent("MouseEvents");
                      t.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        PE,
                        1,
                        i.screenX,
                        i.screenY,
                        i.clientX,
                        i.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        e.target.dispatchEvent(t);
                    }
                })),
              (K.isDragging = K.isGesturing = K.isPressed = !1),
              l && n && !P && z.restart(!0),
              h && n && h(K),
              v && v(K, r);
          }
        }),
        ye = function (e) {
          return (
            e.touches &&
            e.touches.length > 1 &&
            (K.isGesturing = !0) &&
            F(e, K.isDragging)
          );
        },
        be = function () {
          return (K.isGesturing = !1) || L(K);
        },
        _e = function (e) {
          if (!pe(e)) {
            var t = ee(),
              n = te();
            fe((t - ne) * B, (n - re) * B, 1),
              (ne = t),
              (re = n),
              l && z.restart(!0);
          }
        },
        we = function (e) {
          if (!pe(e)) {
            (e = lT(e, a)), N && (Y = !0);
            var t =
              (1 === e.deltaMode ? i : 2 === e.deltaMode ? PE.innerHeight : 1) *
              p;
            fe(e.deltaX * t, e.deltaY * t, 0), l && !P && z.restart(!0);
          }
        },
        De = function (e) {
          if (!pe(e)) {
            var t = e.clientX,
              n = e.clientY,
              r = t - K.x,
              o = n - K.y;
            (K.x = t),
              (K.y = n),
              (W = !0),
              l && z.restart(!0),
              (r || o) && he(r, o);
          }
        },
        xe = function (e) {
          (K.event = e), T(K);
        },
        ke = function (e) {
          (K.event = e), S(K);
        },
        Ce = function (e) {
          return pe(e) || (lT(e, a) && M(K));
        };
      (z = K._dc =
        AE.delayedCall(c || 0.25, function () {
          K._vx.reset(), K._vy.reset(), z.pause(), l && l(K);
        }).pause()),
        (K.deltaX = K.deltaY = 0),
        (K._vx = aT(0, 50, !0)),
        (K._vy = aT(0, 50, !0)),
        (K.scrollX = ee),
        (K.scrollY = te),
        (K.isDragging = K.isGesturing = K.isPressed = !1),
        UE(this),
        (K.enable = function (e) {
          return (
            K.isEnabled ||
              (JE(ie ? se : o, "scroll", tT),
              r.indexOf("scroll") >= 0 && JE(ie ? se : o, "scroll", _e, Z, j),
              r.indexOf("wheel") >= 0 && JE(o, "wheel", we, Z, j),
              ((r.indexOf("touch") >= 0 && IE) || r.indexOf("pointer") >= 0) &&
                (JE(o, $E[0], ge, Z, j),
                JE(se, $E[2], ve),
                JE(se, $E[3], ve),
                $ && JE(o, "click", ue, !0, !0),
                M && JE(o, "click", Ce),
                F && JE(se, "gesturestart", ye),
                L && JE(se, "gestureend", be),
                T && JE(o, RE + "enter", xe),
                S && JE(o, RE + "leave", ke),
                A && JE(o, RE + "move", De)),
              (K.isEnabled = !0),
              e && e.type && ge(e),
              I && I(K)),
            K
          );
        }),
        (K.disable = function () {
          K.isEnabled &&
            (zE.filter(function (e) {
              return e !== K && KE(e.target);
            }).length || QE(ie ? se : o, "scroll", tT),
            K.isPressed &&
              (K._vx.reset(), K._vy.reset(), QE(P ? o : se, $E[1], me, !0)),
            QE(ie ? se : o, "scroll", _e, j),
            QE(o, "wheel", we, j),
            QE(o, $E[0], ge, j),
            QE(se, $E[2], ve),
            QE(se, $E[3], ve),
            QE(o, "click", ue, !0),
            QE(o, "click", Ce),
            QE(se, "gesturestart", ye),
            QE(se, "gestureend", be),
            QE(o, RE + "enter", xe),
            QE(o, RE + "leave", ke),
            QE(o, RE + "move", De),
            (K.isEnabled = K.isPressed = K.isDragging = !1),
            R && R(K));
        }),
        (K.kill = K.revert =
          function () {
            K.disable();
            var e = zE.indexOf(K);
            e >= 0 && zE.splice(e, 1), jE === K && (jE = 0);
          }),
        zE.push(K),
        P && KE(o) && (jE = K),
        K.enable(d);
    }),
    SE(e, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    e
  );
})();
(dT.version = "3.12.5"),
  (dT.create = function (e) {
    return new dT(e);
  }),
  (dT.register = pT),
  (dT.getAll = function () {
    return zE.slice();
  }),
  (dT.getById = function (e) {
    return zE.filter(function (t) {
      return t.vars.id === e;
    })[0];
  }),
  qE() && AE.registerPlugin(dT);
var fT,
  hT,
  mT,
  gT,
  vT,
  yT,
  bT,
  _T,
  wT,
  DT,
  xT,
  kT,
  CT,
  ET,
  TT,
  ST,
  AT,
  OT,
  PT,
  FT,
  LT,
  NT,
  IT,
  RT,
  MT,
  BT,
  jT,
  $T,
  UT,
  qT,
  HT,
  zT,
  VT,
  WT,
  YT,
  XT,
  GT,
  KT,
  JT = 1,
  QT = Date.now,
  ZT = QT(),
  eS = 0,
  tS = 0,
  nS = function (e, t, n) {
    var r = gS(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
    return (n["_" + t + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e;
  },
  rS = function (e, t) {
    return !t || (gS(e) && "clamp(" === e.substr(0, 6))
      ? e
      : "clamp(" + e + ")";
  },
  oS = function e() {
    return tS && requestAnimationFrame(e);
  },
  iS = function () {
    return (ET = 1);
  },
  sS = function () {
    return (ET = 0);
  },
  aS = function (e) {
    return e;
  },
  lS = function (e) {
    return Math.round(1e5 * e) / 1e5 || 0;
  },
  cS = function () {
    return "undefined" != typeof window;
  },
  uS = function () {
    return fT || (cS() && (fT = window.gsap) && fT.registerPlugin && fT);
  },
  pS = function (e) {
    return !!~bT.indexOf(e);
  },
  dS = function (e) {
    return (
      ("Height" === e ? HT : mT["inner" + e]) ||
      vT["client" + e] ||
      yT["client" + e]
    );
  },
  fS = function (e) {
    return (
      GE(e, "getBoundingClientRect") ||
      (pS(e)
        ? function () {
            return (EA.width = mT.innerWidth), (EA.height = HT), EA;
          }
        : function () {
            return jS(e);
          })
    );
  },
  hS = function (e, t) {
    var n = t.s,
      r = t.d2,
      o = t.d,
      i = t.a;
    return Math.max(
      0,
      (n = "scroll" + r) && (i = GE(e, n))
        ? i() - fS(e)()[o]
        : pS(e)
        ? (vT[n] || yT[n]) - dS(r)
        : e[n] - e["offset" + r]
    );
  },
  mS = function (e, t) {
    for (var n = 0; n < PT.length; n += 3)
      (!t || ~t.indexOf(PT[n + 1])) && e(PT[n], PT[n + 1], PT[n + 2]);
  },
  gS = function (e) {
    return "string" == typeof e;
  },
  vS = function (e) {
    return "function" == typeof e;
  },
  yS = function (e) {
    return "number" == typeof e;
  },
  bS = function (e) {
    return "object" == typeof e;
  },
  _S = function (e, t, n) {
    return e && e.progress(t ? 0 : 1) && n && e.pause();
  },
  wS = function (e, t) {
    if (e.enabled) {
      var n = e._ctx
        ? e._ctx.add(function () {
            return t(e);
          })
        : t(e);
      n && n.totalTime && (e.callbackAnimation = n);
    }
  },
  DS = Math.abs,
  xS = "left",
  kS = "right",
  CS = "bottom",
  ES = "width",
  TS = "height",
  SS = "Right",
  AS = "Left",
  OS = "Top",
  PS = "Bottom",
  FS = "padding",
  LS = "margin",
  NS = "Width",
  IS = "Height",
  RS = "px",
  MS = function (e) {
    return mT.getComputedStyle(e);
  },
  BS = function (e, t) {
    for (var n in t) n in e || (e[n] = t[n]);
    return e;
  },
  jS = function (e, t) {
    var n =
        t &&
        "matrix(1, 0, 0, 1, 0, 0)" !== MS(e)[TT] &&
        fT
          .to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          })
          .progress(1),
      r = e.getBoundingClientRect();
    return n && n.progress(0).kill(), r;
  },
  $S = function (e, t) {
    var n = t.d2;
    return e["offset" + n] || e["client" + n] || 0;
  },
  US = function (e) {
    var t,
      n = [],
      r = e.labels,
      o = e.duration();
    for (t in r) n.push(r[t] / o);
    return n;
  },
  qS = function (e) {
    var t = fT.utils.snap(e),
      n =
        Array.isArray(e) &&
        e.slice(0).sort(function (e, t) {
          return e - t;
        });
    return n
      ? function (e, r, o) {
          var i;
          if ((void 0 === o && (o = 0.001), !r)) return t(e);
          if (r > 0) {
            for (e -= o, i = 0; i < n.length; i++) if (n[i] >= e) return n[i];
            return n[i - 1];
          }
          for (i = n.length, e += o; i--; ) if (n[i] <= e) return n[i];
          return n[0];
        }
      : function (n, r, o) {
          void 0 === o && (o = 0.001);
          var i = t(n);
          return !r || Math.abs(i - n) < o || i - n < 0 == r < 0
            ? i
            : t(r < 0 ? n - e : n + e);
        };
  },
  HS = function (e, t, n, r) {
    return n.split(",").forEach(function (n) {
      return e(t, n, r);
    });
  },
  zS = function (e, t, n, r, o) {
    return e.addEventListener(t, n, { passive: !r, capture: !!o });
  },
  VS = function (e, t, n, r) {
    return e.removeEventListener(t, n, !!r);
  },
  WS = function (e, t, n) {
    (n = n && n.wheelHandler) && (e(t, "wheel", n), e(t, "touchmove", n));
  },
  YS = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  XS = { toggleActions: "play", anticipatePin: 0 },
  GS = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  KS = function (e, t) {
    if (gS(e)) {
      var n = e.indexOf("="),
        r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
      ~n && (e.indexOf("%") > n && (r *= t / 100), (e = e.substr(0, n - 1))),
        (e =
          r +
          (e in GS
            ? GS[e] * t
            : ~e.indexOf("%")
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0));
    }
    return e;
  },
  JS = function (e, t, n, r, o, i, s, a) {
    var l = o.startColor,
      c = o.endColor,
      u = o.fontSize,
      p = o.indent,
      d = o.fontWeight,
      f = gT.createElement("div"),
      h = pS(n) || "fixed" === GE(n, "pinType"),
      m = -1 !== e.indexOf("scroller"),
      g = h ? yT : n,
      v = -1 !== e.indexOf("start"),
      y = v ? l : c,
      b =
        "border-color:" +
        y +
        ";font-size:" +
        u +
        ";color:" +
        y +
        ";font-weight:" +
        d +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (b += "position:" + ((m || a) && h ? "fixed;" : "absolute;")),
      (m || a || !h) &&
        (b += (r === oT ? kS : CS) + ":" + (i + parseFloat(p)) + "px;"),
      s &&
        (b +=
          "box-sizing:border-box;text-align:left;width:" +
          s.offsetWidth +
          "px;"),
      (f._isStart = v),
      f.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
      (f.style.cssText = b),
      (f.innerText = t || 0 === t ? e + "-" + t : e),
      g.children[0] ? g.insertBefore(f, g.children[0]) : g.appendChild(f),
      (f._offset = f["offset" + r.op.d2]),
      QS(f, 0, r, v),
      f
    );
  },
  QS = function (e, t, n, r) {
    var o = { display: "block" },
      i = n[r ? "os2" : "p2"],
      s = n[r ? "p2" : "os2"];
    (e._isFlipped = r),
      (o[n.a + "Percent"] = r ? -100 : 0),
      (o[n.a] = r ? "1px" : 0),
      (o["border" + i + NS] = 1),
      (o["border" + s + NS] = 0),
      (o[n.p] = t + "px"),
      fT.set(e, o);
  },
  ZS = [],
  eA = {},
  tA = function () {
    return QT() - eS > 34 && (YT || (YT = requestAnimationFrame(bA)));
  },
  nA = function () {
    (!IT || !IT.isPressed || IT.startX > yT.clientWidth) &&
      (VE.cache++,
      IT ? YT || (YT = requestAnimationFrame(bA)) : bA(),
      eS || lA("scrollStart"),
      (eS = QT()));
  },
  rA = function () {
    (BT = mT.innerWidth), (MT = mT.innerHeight);
  },
  oA = function () {
    VE.cache++,
      !CT &&
        !NT &&
        !gT.fullscreenElement &&
        !gT.webkitFullscreenElement &&
        (!RT ||
          BT !== mT.innerWidth ||
          Math.abs(mT.innerHeight - MT) > 0.25 * mT.innerHeight) &&
        _T.restart(!0);
  },
  iA = {},
  sA = [],
  aA = function e() {
    return VS(LA, "scrollEnd", e) || gA(!0);
  },
  lA = function (e) {
    return (
      (iA[e] &&
        iA[e].map(function (e) {
          return e();
        })) ||
      sA
    );
  },
  cA = [],
  uA = function (e) {
    for (var t = 0; t < cA.length; t += 5)
      (!e || (cA[t + 4] && cA[t + 4].query === e)) &&
        ((cA[t].style.cssText = cA[t + 1]),
        cA[t].getBBox && cA[t].setAttribute("transform", cA[t + 2] || ""),
        (cA[t + 3].uncache = 1));
  },
  pA = function (e, t) {
    var n;
    for (ST = 0; ST < ZS.length; ST++)
      !(n = ZS[ST]) ||
        (t && n._ctx !== t) ||
        (e ? n.kill(1) : n.revert(!0, !0));
    (zT = !0), t && uA(t), t || lA("revert");
  },
  dA = function (e, t) {
    VE.cache++,
      (t || !XT) &&
        VE.forEach(function (e) {
          return vS(e) && e.cacheID++ && (e.rec = 0);
        }),
      gS(e) && (mT.history.scrollRestoration = UT = e);
  },
  fA = 0,
  hA = function () {
    yT.appendChild(qT),
      (HT = (!IT && qT.offsetHeight) || mT.innerHeight),
      yT.removeChild(qT);
  },
  mA = function (e) {
    return wT(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
    ).forEach(function (t) {
      return (t.style.display = e ? "none" : "block");
    });
  },
  gA = function (e, t) {
    if (!eS || e || zT) {
      hA(),
        (XT = LA.isRefreshing = !0),
        VE.forEach(function (e) {
          return vS(e) && ++e.cacheID && (e.rec = e());
        });
      var n = lA("refreshInit");
      FT && LA.sort(),
        t || pA(),
        VE.forEach(function (e) {
          vS(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
        }),
        ZS.slice(0).forEach(function (e) {
          return e.refresh();
        }),
        (zT = !1),
        ZS.forEach(function (e) {
          if (e._subPinOffset && e.pin) {
            var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
              n = e.pin[t];
            e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - n), e.refresh();
          }
        }),
        (VT = 1),
        mA(!0),
        ZS.forEach(function (e) {
          var t = hS(e.scroller, e._dir),
            n = "max" === e.vars.end || (e._endClamp && e.end > t),
            r = e._startClamp && e.start >= t;
          (n || r) &&
            e.setPositions(
              r ? t - 1 : e.start,
              n ? Math.max(r ? t : e.start + 1, t) : e.end,
              !0
            );
        }),
        mA(!1),
        (VT = 0),
        n.forEach(function (e) {
          return e && e.render && e.render(-1);
        }),
        VE.forEach(function (e) {
          vS(e) &&
            (e.smooth &&
              requestAnimationFrame(function () {
                return (e.target.style.scrollBehavior = "smooth");
              }),
            e.rec && e(e.rec));
        }),
        dA(UT, 1),
        _T.pause(),
        fA++,
        (XT = 2),
        bA(2),
        ZS.forEach(function (e) {
          return vS(e.vars.onRefresh) && e.vars.onRefresh(e);
        }),
        (XT = LA.isRefreshing = !1),
        lA("refresh");
    } else zS(LA, "scrollEnd", aA);
  },
  vA = 0,
  yA = 1,
  bA = function (e) {
    if (2 === e || (!XT && !zT)) {
      (LA.isUpdating = !0), KT && KT.update(0);
      var t = ZS.length,
        n = QT(),
        r = n - ZT >= 50,
        o = t && ZS[0].scroll();
      if (
        ((yA = vA > o ? -1 : 1),
        XT || (vA = o),
        r &&
          (eS && !ET && n - eS > 200 && ((eS = 0), lA("scrollEnd")),
          (xT = ZT),
          (ZT = n)),
        yA < 0)
      ) {
        for (ST = t; ST-- > 0; ) ZS[ST] && ZS[ST].update(0, r);
        yA = 1;
      } else for (ST = 0; ST < t; ST++) ZS[ST] && ZS[ST].update(0, r);
      LA.isUpdating = !1;
    }
    YT = 0;
  },
  _A = [
    xS,
    "top",
    CS,
    kS,
    LS + PS,
    LS + SS,
    LS + OS,
    LS + AS,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  wA = _A.concat([
    ES,
    TS,
    "boxSizing",
    "max" + NS,
    "max" + IS,
    "position",
    LS,
    FS,
    FS + OS,
    FS + SS,
    FS + PS,
    FS + AS,
  ]),
  DA = function (e, t, n, r) {
    if (!e._gsap.swappedIn) {
      for (var o, i = _A.length, s = t.style, a = e.style; i--; )
        s[(o = _A[i])] = n[o];
      (s.position = "absolute" === n.position ? "absolute" : "relative"),
        "inline" === n.display && (s.display = "inline-block"),
        (a[CS] = a[kS] = "auto"),
        (s.flexBasis = n.flexBasis || "auto"),
        (s.overflow = "visible"),
        (s.boxSizing = "border-box"),
        (s[ES] = $S(e, rT) + RS),
        (s[TS] = $S(e, oT) + RS),
        (s[FS] = a[LS] = a.top = a[xS] = "0"),
        kA(r),
        (a[ES] = a["max" + NS] = n[ES]),
        (a[TS] = a["max" + IS] = n[TS]),
        (a[FS] = n[FS]),
        e.parentNode !== t &&
          (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  },
  xA = /([A-Z])/g,
  kA = function (e) {
    if (e) {
      var t,
        n,
        r = e.t.style,
        o = e.length,
        i = 0;
      for ((e.t._gsap || fT.core.getCache(e.t)).uncache = 1; i < o; i += 2)
        (n = e[i + 1]),
          (t = e[i]),
          n
            ? (r[t] = n)
            : r[t] && r.removeProperty(t.replace(xA, "-$1").toLowerCase());
    }
  },
  CA = function (e) {
    for (var t = wA.length, n = e.style, r = [], o = 0; o < t; o++)
      r.push(wA[o], n[wA[o]]);
    return (r.t = e), r;
  },
  EA = { left: 0, top: 0 },
  TA = function (e, t, n, r, o, i, s, a, l, c, u, p, d, f) {
    vS(e) && (e = e(a)),
      gS(e) &&
        "max" === e.substr(0, 3) &&
        (e = p + ("=" === e.charAt(4) ? KS("0" + e.substr(3), n) : 0));
    var h,
      m,
      g,
      v = d ? d.time() : 0;
    if ((d && d.seek(0), isNaN(e) || (e = +e), yS(e)))
      d &&
        (e = fT.utils.mapRange(
          d.scrollTrigger.start,
          d.scrollTrigger.end,
          0,
          p,
          e
        )),
        s && QS(s, n, r, !0);
    else {
      vS(t) && (t = t(a));
      var y,
        b,
        _,
        w,
        D = (e || "0").split(" ");
      (g = iT(t, a) || yT),
        ((y = jS(g) || {}) && (y.left || y.top)) ||
          "none" !== MS(g).display ||
          ((w = g.style.display),
          (g.style.display = "block"),
          (y = jS(g)),
          w ? (g.style.display = w) : g.style.removeProperty("display")),
        (b = KS(D[0], y[r.d])),
        (_ = KS(D[1] || "0", n)),
        (e = y[r.p] - l[r.p] - c + b + o - _),
        s && QS(s, _, r, n - _ < 20 || (s._isStart && _ > 20)),
        (n -= n - _);
    }
    if ((f && ((a[f] = e || -0.001), e < 0 && (e = 0)), i)) {
      var x = e + n,
        k = i._isStart;
      (h = "scroll" + r.d2),
        QS(
          i,
          x,
          r,
          (k && x > 20) ||
            (!k && (u ? Math.max(yT[h], vT[h]) : i.parentNode[h]) <= x + 1)
        ),
        u &&
          ((l = jS(s)),
          u && (i.style[r.op.p] = l[r.op.p] - r.op.m - i._offset + RS));
    }
    return (
      d &&
        g &&
        ((h = jS(g)),
        d.seek(p),
        (m = jS(g)),
        (d._caScrollDist = h[r.p] - m[r.p]),
        (e = (e / d._caScrollDist) * p)),
      d && d.seek(v),
      d ? e : Math.round(e)
    );
  },
  SA = /(webkit|moz|length|cssText|inset)/i,
  AA = function (e, t, n, r) {
    if (e.parentNode !== t) {
      var o,
        i,
        s = e.style;
      if (t === yT) {
        for (o in ((e._stOrig = s.cssText), (i = MS(e))))
          +o ||
            SA.test(o) ||
            !i[o] ||
            "string" != typeof s[o] ||
            "0" === o ||
            (s[o] = i[o]);
        (s.top = n), (s.left = r);
      } else s.cssText = e._stOrig;
      (fT.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  },
  OA = function (e, t, n) {
    var r = t,
      o = r;
    return function (t) {
      var i = Math.round(e());
      return (
        i !== r &&
          i !== o &&
          Math.abs(i - r) > 3 &&
          Math.abs(i - o) > 3 &&
          ((t = i), n && n()),
        (o = r),
        (r = t),
        t
      );
    };
  },
  PA = function (e, t, n) {
    var r = {};
    (r[t.p] = "+=" + n), fT.set(e, r);
  },
  FA = function (e, t) {
    var n = sT(e, t),
      r = "_scroll" + t.p2,
      o = function t(o, i, s, a, l) {
        var c = t.tween,
          u = i.onComplete,
          p = {};
        s = s || n();
        var d = OA(n, s, function () {
          c.kill(), (t.tween = 0);
        });
        return (
          (l = (a && l) || 0),
          (a = a || o - s),
          c && c.kill(),
          (i[r] = o),
          (i.inherit = !1),
          (i.modifiers = p),
          (p[r] = function () {
            return d(s + a * c.ratio + l * c.ratio * c.ratio);
          }),
          (i.onUpdate = function () {
            VE.cache++, t.tween && bA();
          }),
          (i.onComplete = function () {
            (t.tween = 0), u && u.call(c);
          }),
          (c = t.tween = fT.to(e, i))
        );
      };
    return (
      (e[r] = n),
      (n.wheelHandler = function () {
        return o.tween && o.tween.kill() && (o.tween = 0);
      }),
      zS(e, "wheel", n.wheelHandler),
      LA.isTouch && zS(e, "touchmove", n.wheelHandler),
      o
    );
  },
  LA = (function () {
    function e(t, n) {
      hT || e.register(fT), $T(this), this.init(t, n);
    }
    return (
      (e.prototype.init = function (t, n) {
        if (
          ((this.progress = this.start = 0), this.vars && this.kill(!0, !0), tS)
        ) {
          var r,
            o,
            i,
            s,
            a,
            l,
            c,
            u,
            p,
            d,
            f,
            h,
            m,
            g,
            v,
            y,
            b,
            _,
            w,
            D,
            x,
            k,
            C,
            E,
            T,
            S,
            A,
            O,
            P,
            F,
            L,
            N,
            I,
            R,
            M,
            B,
            j,
            $,
            U,
            q,
            H,
            z,
            V = (t = BS(gS(t) || yS(t) || t.nodeType ? { trigger: t } : t, XS)),
            W = V.onUpdate,
            Y = V.toggleClass,
            X = V.id,
            G = V.onToggle,
            K = V.onRefresh,
            J = V.scrub,
            Q = V.trigger,
            Z = V.pin,
            ee = V.pinSpacing,
            te = V.invalidateOnRefresh,
            ne = V.anticipatePin,
            re = V.onScrubComplete,
            oe = V.onSnapComplete,
            ie = V.once,
            se = V.snap,
            ae = V.pinReparent,
            le = V.pinSpacer,
            ce = V.containerAnimation,
            ue = V.fastScrollEnd,
            pe = V.preventOverlaps,
            de =
              t.horizontal || (t.containerAnimation && !1 !== t.horizontal)
                ? rT
                : oT,
            fe = !J && 0 !== J,
            he = iT(t.scroller || mT),
            me = fT.core.getCache(he),
            ge = pS(he),
            ve =
              "fixed" ===
              ("pinType" in t
                ? t.pinType
                : GE(he, "pinType") || (ge && "fixed")),
            ye = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
            be = fe && t.toggleActions.split(" "),
            _e = "markers" in t ? t.markers : XS.markers,
            we = ge ? 0 : parseFloat(MS(he)["border" + de.p2 + NS]) || 0,
            De = this,
            xe =
              t.onRefreshInit &&
              function () {
                return t.onRefreshInit(De);
              },
            ke = (function (e, t, n) {
              var r = n.d,
                o = n.d2,
                i = n.a;
              return (i = GE(e, "getBoundingClientRect"))
                ? function () {
                    return i()[r];
                  }
                : function () {
                    return (t ? dS(o) : e["client" + o]) || 0;
                  };
            })(he, ge, de),
            Ce = (function (e, t) {
              return !t || ~WE.indexOf(e)
                ? fS(e)
                : function () {
                    return EA;
                  };
            })(he, ge),
            Ee = 0,
            Te = 0,
            Se = 0,
            Ae = sT(he, de);
          if (
            ((De._startClamp = De._endClamp = !1),
            (De._dir = de),
            (ne *= 45),
            (De.scroller = he),
            (De.scroll = ce ? ce.time.bind(ce) : Ae),
            (s = Ae()),
            (De.vars = t),
            (n = n || t.animation),
            "refreshPriority" in t &&
              ((FT = 1), -9999 === t.refreshPriority && (KT = De)),
            (me.tweenScroll = me.tweenScroll || {
              top: FA(he, oT),
              left: FA(he, rT),
            }),
            (De.tweenTo = r = me.tweenScroll[de.p]),
            (De.scrubDuration = function (e) {
              (I = yS(e) && e)
                ? N
                  ? N.duration(e)
                  : (N = fT.to(n, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: I,
                      paused: !0,
                      onComplete: function () {
                        return re && re(De);
                      },
                    }))
                : (N && N.progress(1).kill(), (N = 0));
            }),
            n &&
              ((n.vars.lazy = !1),
              (n._initted && !De.isReverted) ||
                (!1 !== n.vars.immediateRender &&
                  !1 !== t.immediateRender &&
                  n.duration() &&
                  n.render(0, !0, !0)),
              (De.animation = n.pause()),
              (n.scrollTrigger = De),
              De.scrubDuration(J),
              (F = 0),
              X || (X = n.vars.id)),
            se &&
              ((bS(se) && !se.push) || (se = { snapTo: se }),
              "scrollBehavior" in yT.style &&
                fT.set(ge ? [yT, vT] : he, { scrollBehavior: "auto" }),
              VE.forEach(function (e) {
                return (
                  vS(e) &&
                  e.target === (ge ? gT.scrollingElement || vT : he) &&
                  (e.smooth = !1)
                );
              }),
              (i = vS(se.snapTo)
                ? se.snapTo
                : "labels" === se.snapTo
                ? (function (e) {
                    return function (t) {
                      return fT.utils.snap(US(e), t);
                    };
                  })(n)
                : "labelsDirectional" === se.snapTo
                ? ((q = n),
                  function (e, t) {
                    return qS(US(q))(e, t.direction);
                  })
                : !1 !== se.directional
                ? function (e, t) {
                    return qS(se.snapTo)(e, QT() - Te < 500 ? 0 : t.direction);
                  }
                : fT.utils.snap(se.snapTo)),
              (R = se.duration || { min: 0.1, max: 2 }),
              (R = bS(R) ? DT(R.min, R.max) : DT(R, R)),
              (M = fT
                .delayedCall(se.delay || I / 2 || 0.1, function () {
                  var e = Ae(),
                    t = QT() - Te < 500,
                    o = r.tween;
                  if (
                    !(t || Math.abs(De.getVelocity()) < 10) ||
                    o ||
                    ET ||
                    Ee === e
                  )
                    De.isActive && Ee !== e && M.restart(!0);
                  else {
                    var s,
                      a,
                      u = (e - l) / g,
                      p = n && !fe ? n.totalProgress() : u,
                      d = t ? 0 : ((p - L) / (QT() - xT)) * 1e3 || 0,
                      f = fT.utils.clamp(-u, 1 - u, (DS(d / 2) * d) / 0.185),
                      h = u + (!1 === se.inertia ? 0 : f),
                      m = se,
                      v = m.onStart,
                      y = m.onInterrupt,
                      b = m.onComplete;
                    if (
                      ((s = i(h, De)),
                      yS(s) || (s = h),
                      (a = Math.round(l + s * g)),
                      e <= c && e >= l && a !== e)
                    ) {
                      if (o && !o._initted && o.data <= DS(a - e)) return;
                      !1 === se.inertia && (f = s - u),
                        r(
                          a,
                          {
                            duration: R(
                              DS(
                                (0.185 * Math.max(DS(h - p), DS(s - p))) /
                                  d /
                                  0.05 || 0
                              )
                            ),
                            ease: se.ease || "power3",
                            data: DS(a - e),
                            onInterrupt: function () {
                              return M.restart(!0) && y && y(De);
                            },
                            onComplete: function () {
                              De.update(),
                                (Ee = Ae()),
                                n &&
                                  (N
                                    ? N.resetTo(
                                        "totalProgress",
                                        s,
                                        n._tTime / n._tDur
                                      )
                                    : n.progress(s)),
                                (F = L =
                                  n && !fe ? n.totalProgress() : De.progress),
                                oe && oe(De),
                                b && b(De);
                            },
                          },
                          e,
                          f * g,
                          a - e - f * g
                        ),
                        v && v(De, r.tween);
                    }
                  }
                })
                .pause())),
            X && (eA[X] = De),
            (U =
              (Q = De.trigger = iT(Q || (!0 !== Z && Z))) &&
              Q._gsap &&
              Q._gsap.stRevert) && (U = U(De)),
            (Z = !0 === Z ? Q : iT(Z)),
            gS(Y) && (Y = { targets: Q, className: Y }),
            Z &&
              (!1 === ee ||
                ee === LS ||
                (ee =
                  !(
                    !ee &&
                    Z.parentNode &&
                    Z.parentNode.style &&
                    "flex" === MS(Z.parentNode).display
                  ) && FS),
              (De.pin = Z),
              (o = fT.core.getCache(Z)).spacer
                ? (v = o.pinState)
                : (le &&
                    ((le = iT(le)) &&
                      !le.nodeType &&
                      (le = le.current || le.nativeElement),
                    (o.spacerIsNative = !!le),
                    le && (o.spacerState = CA(le))),
                  (o.spacer = _ = le || gT.createElement("div")),
                  _.classList.add("pin-spacer"),
                  X && _.classList.add("pin-spacer-" + X),
                  (o.pinState = v = CA(Z))),
              !1 !== t.force3D && fT.set(Z, { force3D: !0 }),
              (De.spacer = _ = o.spacer),
              (P = MS(Z)),
              (E = P[ee + de.os2]),
              (D = fT.getProperty(Z)),
              (x = fT.quickSetter(Z, de.a, RS)),
              DA(Z, _, P),
              (b = CA(Z))),
            _e)
          ) {
            (h = bS(_e) ? BS(_e, YS) : YS),
              (d = JS("scroller-start", X, he, de, h, 0)),
              (f = JS("scroller-end", X, he, de, h, 0, d)),
              (w = d["offset" + de.op.d2]);
            var Oe = iT(GE(he, "content") || he);
            (u = this.markerStart = JS("start", X, Oe, de, h, w, 0, ce)),
              (p = this.markerEnd = JS("end", X, Oe, de, h, w, 0, ce)),
              ce && ($ = fT.quickSetter([u, p], de.a, RS)),
              ve ||
                (WE.length && !0 === GE(he, "fixedMarkers")) ||
                ((z = MS((H = ge ? yT : he)).position),
                (H.style.position =
                  "absolute" === z || "fixed" === z ? z : "relative"),
                fT.set([d, f], { force3D: !0 }),
                (S = fT.quickSetter(d, de.a, RS)),
                (O = fT.quickSetter(f, de.a, RS)));
          }
          if (ce) {
            var Pe = ce.vars.onUpdate,
              Fe = ce.vars.onUpdateParams;
            ce.eventCallback("onUpdate", function () {
              De.update(0, 0, 1), Pe && Pe.apply(ce, Fe || []);
            });
          }
          if (
            ((De.previous = function () {
              return ZS[ZS.indexOf(De) - 1];
            }),
            (De.next = function () {
              return ZS[ZS.indexOf(De) + 1];
            }),
            (De.revert = function (e, t) {
              if (!t) return De.kill(!0);
              var r = !1 !== e || !De.enabled,
                o = CT;
              r !== De.isReverted &&
                (r &&
                  ((B = Math.max(Ae(), De.scroll.rec || 0)),
                  (Se = De.progress),
                  (j = n && n.progress())),
                u &&
                  [u, p, d, f].forEach(function (e) {
                    return (e.style.display = r ? "none" : "block");
                  }),
                r && ((CT = De), De.update(r)),
                !Z ||
                  (ae && De.isActive) ||
                  (r
                    ? (function (e, t, n) {
                        kA(n);
                        var r = e._gsap;
                        if (r.spacerIsNative) kA(r.spacerState);
                        else if (e._gsap.swappedIn) {
                          var o = t.parentNode;
                          o && (o.insertBefore(e, t), o.removeChild(t));
                        }
                        e._gsap.swappedIn = !1;
                      })(Z, _, v)
                    : DA(Z, _, MS(Z), T)),
                r || De.update(r),
                (CT = o),
                (De.isReverted = r));
            }),
            (De.refresh = function (o, i, h, w) {
              if ((!CT && De.enabled) || i)
                if (Z && o && eS) zS(e, "scrollEnd", aA);
                else {
                  !XT && xe && xe(De),
                    (CT = De),
                    r.tween && !h && (r.tween.kill(), (r.tween = 0)),
                    N && N.pause(),
                    te && n && n.revert({ kill: !1 }).invalidate(),
                    De.isReverted || De.revert(!0, !0),
                    (De._subPinOffset = !1);
                  var x,
                    E,
                    S,
                    O,
                    P,
                    F,
                    L,
                    I,
                    R,
                    $,
                    U,
                    q,
                    H,
                    z = ke(),
                    V = Ce(),
                    W = ce ? ce.duration() : hS(he, de),
                    Y = g <= 0.01,
                    X = 0,
                    G = w || 0,
                    J = bS(h) ? h.end : t.end,
                    ne = t.endTrigger || Q,
                    re = bS(h)
                      ? h.start
                      : t.start ||
                        (0 !== t.start && Q ? (Z ? "0 0" : "0 100%") : 0),
                    oe = (De.pinnedContainer =
                      t.pinnedContainer && iT(t.pinnedContainer, De)),
                    ie = (Q && Math.max(0, ZS.indexOf(De))) || 0,
                    se = ie;
                  for (
                    _e &&
                    bS(h) &&
                    ((q = fT.getProperty(d, de.p)),
                    (H = fT.getProperty(f, de.p)));
                    se--;

                  )
                    (F = ZS[se]).end || F.refresh(0, 1) || (CT = De),
                      !(L = F.pin) ||
                        (L !== Q && L !== Z && L !== oe) ||
                        F.isReverted ||
                        ($ || ($ = []), $.unshift(F), F.revert(!0, !0)),
                      F !== ZS[se] && (ie--, se--);
                  for (
                    vS(re) && (re = re(De)),
                      re = nS(re, "start", De),
                      l =
                        TA(
                          re,
                          Q,
                          z,
                          de,
                          Ae(),
                          u,
                          d,
                          De,
                          V,
                          we,
                          ve,
                          W,
                          ce,
                          De._startClamp && "_startClamp"
                        ) || (Z ? -0.001 : 0),
                      vS(J) && (J = J(De)),
                      gS(J) &&
                        !J.indexOf("+=") &&
                        (~J.indexOf(" ")
                          ? (J = (gS(re) ? re.split(" ")[0] : "") + J)
                          : ((X = KS(J.substr(2), z)),
                            (J = gS(re)
                              ? re
                              : (ce
                                  ? fT.utils.mapRange(
                                      0,
                                      ce.duration(),
                                      ce.scrollTrigger.start,
                                      ce.scrollTrigger.end,
                                      l
                                    )
                                  : l) + X),
                            (ne = Q))),
                      J = nS(J, "end", De),
                      c =
                        Math.max(
                          l,
                          TA(
                            J || (ne ? "100% 0" : W),
                            ne,
                            z,
                            de,
                            Ae() + X,
                            p,
                            f,
                            De,
                            V,
                            we,
                            ve,
                            W,
                            ce,
                            De._endClamp && "_endClamp"
                          )
                        ) || -0.001,
                      X = 0,
                      se = ie;
                    se--;

                  )
                    (L = (F = ZS[se]).pin) &&
                      F.start - F._pinPush <= l &&
                      !ce &&
                      F.end > 0 &&
                      ((x =
                        F.end -
                        (De._startClamp ? Math.max(0, F.start) : F.start)),
                      ((L === Q && F.start - F._pinPush < l) || L === oe) &&
                        isNaN(re) &&
                        (X += x * (1 - F.progress)),
                      L === Z && (G += x));
                  if (
                    ((l += X),
                    (c += X),
                    De._startClamp && (De._startClamp += X),
                    De._endClamp &&
                      !XT &&
                      ((De._endClamp = c || -0.001),
                      (c = Math.min(c, hS(he, de)))),
                    (g = c - l || ((l -= 0.01) && 0.001)),
                    Y &&
                      (Se = fT.utils.clamp(0, 1, fT.utils.normalize(l, c, B))),
                    (De._pinPush = G),
                    u &&
                      X &&
                      (((x = {})[de.a] = "+=" + X),
                      oe && (x[de.p] = "-=" + Ae()),
                      fT.set([u, p], x)),
                    !Z || (VT && De.end >= hS(he, de)))
                  ) {
                    if (Q && Ae() && !ce)
                      for (E = Q.parentNode; E && E !== yT; )
                        E._pinOffset &&
                          ((l -= E._pinOffset), (c -= E._pinOffset)),
                          (E = E.parentNode);
                  } else
                    (x = MS(Z)),
                      (O = de === oT),
                      (S = Ae()),
                      (k = parseFloat(D(de.a)) + G),
                      !W &&
                        c > 1 &&
                        ((U = {
                          style: (U = (ge ? gT.scrollingElement || vT : he)
                            .style),
                          value: U["overflow" + de.a.toUpperCase()],
                        }),
                        ge &&
                          "scroll" !==
                            MS(yT)["overflow" + de.a.toUpperCase()] &&
                          (U.style["overflow" + de.a.toUpperCase()] =
                            "scroll")),
                      DA(Z, _, x),
                      (b = CA(Z)),
                      (E = jS(Z, !0)),
                      (I = ve && sT(he, O ? rT : oT)()),
                      ee
                        ? (((T = [ee + de.os2, g + G + RS]).t = _),
                          (se = ee === FS ? $S(Z, de) + g + G : 0) &&
                            (T.push(de.d, se + RS),
                            "auto" !== _.style.flexBasis &&
                              (_.style.flexBasis = se + RS)),
                          kA(T),
                          oe &&
                            ZS.forEach(function (e) {
                              e.pin === oe &&
                                !1 !== e.vars.pinSpacing &&
                                (e._subPinOffset = !0);
                            }),
                          ve && Ae(B))
                        : (se = $S(Z, de)) &&
                          "auto" !== _.style.flexBasis &&
                          (_.style.flexBasis = se + RS),
                      ve &&
                        (((P = {
                          top: E.top + (O ? S - l : I) + RS,
                          left: E.left + (O ? I : S - l) + RS,
                          boxSizing: "border-box",
                          position: "fixed",
                        })[ES] = P["max" + NS] =
                          Math.ceil(E.width) + RS),
                        (P[TS] = P["max" + IS] = Math.ceil(E.height) + RS),
                        (P[LS] =
                          P[LS + OS] =
                          P[LS + SS] =
                          P[LS + PS] =
                          P[LS + AS] =
                            "0"),
                        (P[FS] = x[FS]),
                        (P[FS + OS] = x[FS + OS]),
                        (P[FS + SS] = x[FS + SS]),
                        (P[FS + PS] = x[FS + PS]),
                        (P[FS + AS] = x[FS + AS]),
                        (y = (function (e, t, n) {
                          for (
                            var r, o = [], i = e.length, s = n ? 8 : 0;
                            s < i;
                            s += 2
                          )
                            (r = e[s]), o.push(r, r in t ? t[r] : e[s + 1]);
                          return (o.t = e.t), o;
                        })(v, P, ae)),
                        XT && Ae(0)),
                      n
                        ? ((R = n._initted),
                          LT(1),
                          n.render(n.duration(), !0, !0),
                          (C = D(de.a) - k + g + G),
                          (A = Math.abs(g - C) > 1),
                          ve && A && y.splice(y.length - 2, 2),
                          n.render(0, !0, !0),
                          R || n.invalidate(!0),
                          n.parent || n.totalTime(n.totalTime()),
                          LT(0))
                        : (C = g),
                      U &&
                        (U.value
                          ? (U.style["overflow" + de.a.toUpperCase()] = U.value)
                          : U.style.removeProperty("overflow-" + de.a));
                  $ &&
                    $.forEach(function (e) {
                      return e.revert(!1, !0);
                    }),
                    (De.start = l),
                    (De.end = c),
                    (s = a = XT ? B : Ae()),
                    ce || XT || (s < B && Ae(B), (De.scroll.rec = 0)),
                    De.revert(!1, !0),
                    (Te = QT()),
                    M && ((Ee = -1), M.restart(!0)),
                    (CT = 0),
                    n &&
                      fe &&
                      (n._initted || j) &&
                      n.progress() !== j &&
                      n.progress(j || 0, !0).render(n.time(), !0, !0),
                    (Y || Se !== De.progress || ce || te) &&
                      (n &&
                        !fe &&
                        n.totalProgress(
                          ce && l < -0.001 && !Se
                            ? fT.utils.normalize(l, c, 0)
                            : Se,
                          !0
                        ),
                      (De.progress = Y || (s - l) / g === Se ? 0 : Se)),
                    Z && ee && (_._pinOffset = Math.round(De.progress * C)),
                    N && N.invalidate(),
                    isNaN(q) ||
                      ((q -= fT.getProperty(d, de.p)),
                      (H -= fT.getProperty(f, de.p)),
                      PA(d, de, q),
                      PA(u, de, q - (w || 0)),
                      PA(f, de, H),
                      PA(p, de, H - (w || 0))),
                    Y && !XT && De.update(),
                    !K || XT || m || ((m = !0), K(De), (m = !1));
                }
            }),
            (De.getVelocity = function () {
              return ((Ae() - a) / (QT() - xT)) * 1e3 || 0;
            }),
            (De.endAnimation = function () {
              _S(De.callbackAnimation),
                n &&
                  (N
                    ? N.progress(1)
                    : n.paused()
                    ? fe || _S(n, De.direction < 0, 1)
                    : _S(n, n.reversed()));
            }),
            (De.labelToScroll = function (e) {
              return (
                (n &&
                  n.labels &&
                  (l || De.refresh() || l) +
                    (n.labels[e] / n.duration()) * g) ||
                0
              );
            }),
            (De.getTrailing = function (e) {
              var t = ZS.indexOf(De),
                n =
                  De.direction > 0 ? ZS.slice(0, t).reverse() : ZS.slice(t + 1);
              return (
                gS(e)
                  ? n.filter(function (t) {
                      return t.vars.preventOverlaps === e;
                    })
                  : n
              ).filter(function (e) {
                return De.direction > 0 ? e.end <= l : e.start >= c;
              });
            }),
            (De.update = function (e, t, o) {
              if (!ce || o || e) {
                var i,
                  u,
                  p,
                  f,
                  h,
                  m,
                  v,
                  w = !0 === XT ? B : De.scroll(),
                  D = e ? 0 : (w - l) / g,
                  T = D < 0 ? 0 : D > 1 ? 1 : D || 0,
                  P = De.progress;
                if (
                  (t &&
                    ((a = s),
                    (s = ce ? Ae() : w),
                    se && ((L = F), (F = n && !fe ? n.totalProgress() : T))),
                  ne &&
                    Z &&
                    !CT &&
                    !JT &&
                    eS &&
                    (!T && l < w + ((w - a) / (QT() - xT)) * ne
                      ? (T = 1e-4)
                      : 1 === T &&
                        c > w + ((w - a) / (QT() - xT)) * ne &&
                        (T = 0.9999)),
                  T !== P && De.enabled)
                ) {
                  if (
                    ((f =
                      (h =
                        (i = De.isActive = !!T && T < 1) !== (!!P && P < 1)) ||
                      !!T != !!P),
                    (De.direction = T > P ? 1 : -1),
                    (De.progress = T),
                    f &&
                      !CT &&
                      ((u = T && !P ? 0 : 1 === T ? 1 : 1 === P ? 2 : 3),
                      fe &&
                        ((p =
                          (!h && "none" !== be[u + 1] && be[u + 1]) || be[u]),
                        (v =
                          n && ("complete" === p || "reset" === p || p in n)))),
                    pe &&
                      (h || v) &&
                      (v || J || !n) &&
                      (vS(pe)
                        ? pe(De)
                        : De.getTrailing(pe).forEach(function (e) {
                            return e.endAnimation();
                          })),
                    fe ||
                      (!N || CT || JT
                        ? n && n.totalProgress(T, !(!CT || (!Te && !e)))
                        : (N._dp._time - N._start !== N._time &&
                            N.render(N._dp._time - N._start),
                          N.resetTo
                            ? N.resetTo("totalProgress", T, n._tTime / n._tDur)
                            : ((N.vars.totalProgress = T),
                              N.invalidate().restart()))),
                    Z)
                  )
                    if ((e && ee && (_.style[ee + de.os2] = E), ve)) {
                      if (f) {
                        if (
                          ((m =
                            !e && T > P && c + 1 > w && w + 1 >= hS(he, de)),
                          ae)
                        )
                          if (e || (!i && !m)) AA(Z, _);
                          else {
                            var I = jS(Z, !0),
                              R = w - l;
                            AA(
                              Z,
                              yT,
                              I.top + (de === oT ? R : 0) + RS,
                              I.left + (de === oT ? 0 : R) + RS
                            );
                          }
                        kA(i || m ? y : b),
                          (A && T < 1 && i) || x(k + (1 !== T || m ? 0 : C));
                      }
                    } else x(lS(k + C * T));
                  se && !r.tween && !CT && !JT && M.restart(!0),
                    Y &&
                      (h || (ie && T && (T < 1 || !WT))) &&
                      wT(Y.targets).forEach(function (e) {
                        return e.classList[i || ie ? "add" : "remove"](
                          Y.className
                        );
                      }),
                    W && !fe && !e && W(De),
                    f && !CT
                      ? (fe &&
                          (v &&
                            ("complete" === p
                              ? n.pause().totalProgress(1)
                              : "reset" === p
                              ? n.restart(!0).pause()
                              : "restart" === p
                              ? n.restart(!0)
                              : n[p]()),
                          W && W(De)),
                        (!h && WT) ||
                          (G && h && wS(De, G),
                          ye[u] && wS(De, ye[u]),
                          ie && (1 === T ? De.kill(!1, 1) : (ye[u] = 0)),
                          h || (ye[(u = 1 === T ? 1 : 3)] && wS(De, ye[u]))),
                        ue &&
                          !i &&
                          Math.abs(De.getVelocity()) > (yS(ue) ? ue : 2500) &&
                          (_S(De.callbackAnimation),
                          N
                            ? N.progress(1)
                            : _S(n, "reverse" === p ? 1 : !T, 1)))
                      : fe && W && !CT && W(De);
                }
                if (O) {
                  var j = ce
                    ? (w / ce.duration()) * (ce._caScrollDist || 0)
                    : w;
                  S(j + (d._isFlipped ? 1 : 0)), O(j);
                }
                $ && $((-w / ce.duration()) * (ce._caScrollDist || 0));
              }
            }),
            (De.enable = function (t, n) {
              De.enabled ||
                ((De.enabled = !0),
                zS(he, "resize", oA),
                ge || zS(he, "scroll", nA),
                xe && zS(e, "refreshInit", xe),
                !1 !== t && ((De.progress = Se = 0), (s = a = Ee = Ae())),
                !1 !== n && De.refresh());
            }),
            (De.getTween = function (e) {
              return e && r ? r.tween : N;
            }),
            (De.setPositions = function (e, t, n, r) {
              if (ce) {
                var o = ce.scrollTrigger,
                  i = ce.duration(),
                  s = o.end - o.start;
                (e = o.start + (s * e) / i), (t = o.start + (s * t) / i);
              }
              De.refresh(
                !1,
                !1,
                {
                  start: rS(e, n && !!De._startClamp),
                  end: rS(t, n && !!De._endClamp),
                },
                r
              ),
                De.update();
            }),
            (De.adjustPinSpacing = function (e) {
              if (T && e) {
                var t = T.indexOf(de.d) + 1;
                (T[t] = parseFloat(T[t]) + e + RS),
                  (T[1] = parseFloat(T[1]) + e + RS),
                  kA(T);
              }
            }),
            (De.disable = function (t, n) {
              if (
                De.enabled &&
                (!1 !== t && De.revert(!0, !0),
                (De.enabled = De.isActive = !1),
                n || (N && N.pause()),
                (B = 0),
                o && (o.uncache = 1),
                xe && VS(e, "refreshInit", xe),
                M && (M.pause(), r.tween && r.tween.kill() && (r.tween = 0)),
                !ge)
              ) {
                for (var i = ZS.length; i--; )
                  if (ZS[i].scroller === he && ZS[i] !== De) return;
                VS(he, "resize", oA), ge || VS(he, "scroll", nA);
              }
            }),
            (De.kill = function (e, r) {
              De.disable(e, r), N && !r && N.kill(), X && delete eA[X];
              var i = ZS.indexOf(De);
              i >= 0 && ZS.splice(i, 1),
                i === ST && yA > 0 && ST--,
                (i = 0),
                ZS.forEach(function (e) {
                  return e.scroller === De.scroller && (i = 1);
                }),
                i || XT || (De.scroll.rec = 0),
                n &&
                  ((n.scrollTrigger = null),
                  e && n.revert({ kill: !1 }),
                  r || n.kill()),
                u &&
                  [u, p, d, f].forEach(function (e) {
                    return e.parentNode && e.parentNode.removeChild(e);
                  }),
                KT === De && (KT = 0),
                Z &&
                  (o && (o.uncache = 1),
                  (i = 0),
                  ZS.forEach(function (e) {
                    return e.pin === Z && i++;
                  }),
                  i || (o.spacer = 0)),
                t.onKill && t.onKill(De);
            }),
            ZS.push(De),
            De.enable(!1, !1),
            U && U(De),
            n && n.add && !g)
          ) {
            var Le = De.update;
            (De.update = function () {
              (De.update = Le), l || c || De.refresh();
            }),
              fT.delayedCall(0.01, De.update),
              (g = 0.01),
              (l = c = 0);
          } else De.refresh();
          Z &&
            (function () {
              if (GT !== fA) {
                var e = (GT = fA);
                requestAnimationFrame(function () {
                  return e === fA && gA(!0);
                });
              }
            })();
        } else this.update = this.refresh = this.kill = aS;
      }),
      (e.register = function (t) {
        return (
          hT ||
            ((fT = t || uS()),
            cS() && window.document && e.enable(),
            (hT = tS)),
          hT
        );
      }),
      (e.defaults = function (e) {
        if (e) for (var t in e) XS[t] = e[t];
        return XS;
      }),
      (e.disable = function (e, t) {
        (tS = 0),
          ZS.forEach(function (n) {
            return n[t ? "kill" : "disable"](e);
          }),
          VS(mT, "wheel", nA),
          VS(gT, "scroll", nA),
          clearInterval(kT),
          VS(gT, "touchcancel", aS),
          VS(yT, "touchstart", aS),
          HS(VS, gT, "pointerdown,touchstart,mousedown", iS),
          HS(VS, gT, "pointerup,touchend,mouseup", sS),
          _T.kill(),
          mS(VS);
        for (var n = 0; n < VE.length; n += 3)
          WS(VS, VE[n], VE[n + 1]), WS(VS, VE[n], VE[n + 2]);
      }),
      (e.enable = function () {
        if (
          ((mT = window),
          (gT = document),
          (vT = gT.documentElement),
          (yT = gT.body),
          fT &&
            ((wT = fT.utils.toArray),
            (DT = fT.utils.clamp),
            ($T = fT.core.context || aS),
            (LT = fT.core.suppressOverwrites || aS),
            (UT = mT.history.scrollRestoration || "auto"),
            (vA = mT.pageYOffset),
            fT.core.globals("ScrollTrigger", e),
            yT))
        ) {
          (tS = 1),
            ((qT = document.createElement("div")).style.height = "100vh"),
            (qT.style.position = "absolute"),
            hA(),
            oS(),
            dT.register(fT),
            (e.isTouch = dT.isTouch),
            (jT =
              dT.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (RT = 1 === dT.isTouch),
            zS(mT, "wheel", nA),
            (bT = [mT, gT, vT, yT]),
            fT.matchMedia &&
              ((e.matchMedia = function (e) {
                var t,
                  n = fT.matchMedia();
                for (t in e) n.add(t, e[t]);
                return n;
              }),
              fT.addEventListener("matchMediaInit", function () {
                return pA();
              }),
              fT.addEventListener("matchMediaRevert", function () {
                return uA();
              }),
              fT.addEventListener("matchMedia", function () {
                gA(0, 1), lA("matchMedia");
              }),
              fT.matchMedia("(orientation: portrait)", function () {
                return rA(), rA;
              })),
            rA(),
            zS(gT, "scroll", nA);
          var t,
            n,
            r = yT.style,
            o = r.borderTopStyle,
            i = fT.core.Animation.prototype;
          for (
            i.revert ||
              Object.defineProperty(i, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              r.borderTopStyle = "solid",
              t = jS(yT),
              oT.m = Math.round(t.top + oT.sc()) || 0,
              rT.m = Math.round(t.left + rT.sc()) || 0,
              o ? (r.borderTopStyle = o) : r.removeProperty("border-top-style"),
              kT = setInterval(tA, 250),
              fT.delayedCall(0.5, function () {
                return (JT = 0);
              }),
              zS(gT, "touchcancel", aS),
              zS(yT, "touchstart", aS),
              HS(zS, gT, "pointerdown,touchstart,mousedown", iS),
              HS(zS, gT, "pointerup,touchend,mouseup", sS),
              TT = fT.utils.checkPrefix("transform"),
              wA.push(TT),
              hT = QT(),
              _T = fT.delayedCall(0.2, gA).pause(),
              PT = [
                gT,
                "visibilitychange",
                function () {
                  var e = mT.innerWidth,
                    t = mT.innerHeight;
                  gT.hidden
                    ? ((AT = e), (OT = t))
                    : (AT === e && OT === t) || oA();
                },
                gT,
                "DOMContentLoaded",
                gA,
                mT,
                "load",
                gA,
                mT,
                "resize",
                oA,
              ],
              mS(zS),
              ZS.forEach(function (e) {
                return e.enable(0, 1);
              }),
              n = 0;
            n < VE.length;
            n += 3
          )
            WS(VS, VE[n], VE[n + 1]), WS(VS, VE[n], VE[n + 2]);
        }
      }),
      (e.config = function (t) {
        "limitCallbacks" in t && (WT = !!t.limitCallbacks);
        var n = t.syncInterval;
        (n && clearInterval(kT)) || ((kT = n) && setInterval(tA, n)),
          "ignoreMobileResize" in t &&
            (RT = 1 === e.isTouch && t.ignoreMobileResize),
          "autoRefreshEvents" in t &&
            (mS(VS) || mS(zS, t.autoRefreshEvents || "none"),
            (NT = -1 === (t.autoRefreshEvents + "").indexOf("resize")));
      }),
      (e.scrollerProxy = function (e, t) {
        var n = iT(e),
          r = VE.indexOf(n),
          o = pS(n);
        ~r && VE.splice(r, o ? 6 : 2),
          t && (o ? WE.unshift(mT, t, yT, t, vT, t) : WE.unshift(n, t));
      }),
      (e.clearMatchMedia = function (e) {
        ZS.forEach(function (t) {
          return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
        });
      }),
      (e.isInViewport = function (e, t, n) {
        var r = (gS(e) ? iT(e) : e).getBoundingClientRect(),
          o = r[n ? ES : TS] * t || 0;
        return n
          ? r.right - o > 0 && r.left + o < mT.innerWidth
          : r.bottom - o > 0 && r.top + o < mT.innerHeight;
      }),
      (e.positionInViewport = function (e, t, n) {
        gS(e) && (e = iT(e));
        var r = e.getBoundingClientRect(),
          o = r[n ? ES : TS],
          i =
            null == t
              ? o / 2
              : t in GS
              ? GS[t] * o
              : ~t.indexOf("%")
              ? (parseFloat(t) * o) / 100
              : parseFloat(t) || 0;
        return n ? (r.left + i) / mT.innerWidth : (r.top + i) / mT.innerHeight;
      }),
      (e.killAll = function (e) {
        if (
          (ZS.slice(0).forEach(function (e) {
            return "ScrollSmoother" !== e.vars.id && e.kill();
          }),
          !0 !== e)
        ) {
          var t = iA.killAll || [];
          (iA = {}),
            t.forEach(function (e) {
              return e();
            });
        }
      }),
      e
    );
  })();
(LA.version = "3.12.5"),
  (LA.saveStyles = function (e) {
    return e
      ? wT(e).forEach(function (e) {
          if (e && e.style) {
            var t = cA.indexOf(e);
            t >= 0 && cA.splice(t, 5),
              cA.push(
                e,
                e.style.cssText,
                e.getBBox && e.getAttribute("transform"),
                fT.core.getCache(e),
                $T()
              );
          }
        })
      : cA;
  }),
  (LA.revert = function (e, t) {
    return pA(!e, t);
  }),
  (LA.create = function (e, t) {
    return new LA(e, t);
  }),
  (LA.refresh = function (e) {
    return e ? oA() : (hT || LA.register()) && gA(!0);
  }),
  (LA.update = function (e) {
    return ++VE.cache && bA(!0 === e ? 2 : 0);
  }),
  (LA.clearScrollMemory = dA),
  (LA.maxScroll = function (e, t) {
    return hS(e, t ? rT : oT);
  }),
  (LA.getScrollFunc = function (e, t) {
    return sT(iT(e), t ? rT : oT);
  }),
  (LA.getById = function (e) {
    return eA[e];
  }),
  (LA.getAll = function () {
    return ZS.filter(function (e) {
      return "ScrollSmoother" !== e.vars.id;
    });
  }),
  (LA.isScrolling = function () {
    return !!eS;
  }),
  (LA.snapDirectional = qS),
  (LA.addEventListener = function (e, t) {
    var n = iA[e] || (iA[e] = []);
    ~n.indexOf(t) || n.push(t);
  }),
  (LA.removeEventListener = function (e, t) {
    var n = iA[e],
      r = n && n.indexOf(t);
    r >= 0 && n.splice(r, 1);
  }),
  (LA.batch = function (e, t) {
    var n,
      r = [],
      o = {},
      i = t.interval || 0.016,
      s = t.batchMax || 1e9,
      a = function (e, t) {
        var n = [],
          r = [],
          o = fT
            .delayedCall(i, function () {
              t(n, r), (n = []), (r = []);
            })
            .pause();
        return function (e) {
          n.length || o.restart(!0),
            n.push(e.trigger),
            r.push(e),
            s <= n.length && o.progress(1);
        };
      };
    for (n in t)
      o[n] =
        "on" === n.substr(0, 2) && vS(t[n]) && "onRefreshInit" !== n
          ? a(0, t[n])
          : t[n];
    return (
      vS(s) &&
        ((s = s()),
        zS(LA, "refresh", function () {
          return (s = t.batchMax());
        })),
      wT(e).forEach(function (e) {
        var t = {};
        for (n in o) t[n] = o[n];
        (t.trigger = e), r.push(LA.create(t));
      }),
      r
    );
  });
var NA,
  IA = function (e, t, n, r) {
    return (
      t > r ? e(r) : t < 0 && e(0),
      n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1
    );
  },
  RA = function e(t, n) {
    !0 === n
      ? t.style.removeProperty("touch-action")
      : (t.style.touchAction =
          !0 === n
            ? "auto"
            : n
            ? "pan-" + n + (dT.isTouch ? " pinch-zoom" : "")
            : "none"),
      t === vT && e(yT, n);
  },
  MA = { auto: 1, scroll: 1 },
  BA = function (e) {
    var t,
      n = e.event,
      r = e.target,
      o = e.axis,
      i = (n.changedTouches ? n.changedTouches[0] : n).target,
      s = i._gsap || fT.core.getCache(i),
      a = QT();
    if (!s._isScrollT || a - s._isScrollT > 2e3) {
      for (
        ;
        i &&
        i !== yT &&
        ((i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth) ||
          (!MA[(t = MS(i)).overflowY] && !MA[t.overflowX]));

      )
        i = i.parentNode;
      (s._isScroll =
        i &&
        i !== r &&
        !pS(i) &&
        (MA[(t = MS(i)).overflowY] || MA[t.overflowX])),
        (s._isScrollT = a);
    }
    (s._isScroll || "x" === o) && (n.stopPropagation(), (n._gsapAllow = !0));
  },
  jA = function (e, t, n, r) {
    return dT.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (r = r && BA),
      onPress: r,
      onDrag: r,
      onScroll: r,
      onEnable: function () {
        return n && zS(gT, dT.eventTypes[0], UA, !1, !0);
      },
      onDisable: function () {
        return VS(gT, dT.eventTypes[0], UA, !0);
      },
    });
  },
  $A = /(input|label|select|textarea)/i,
  UA = function (e) {
    var t = $A.test(e.target.tagName);
    (t || NA) && ((e._gsapAllow = !0), (NA = t));
  },
  qA = function (e) {
    bS(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = "wheel,touch"),
      (e.debounce = !!e.debounce),
      (e.id = e.id || "normalizer");
    var t,
      n,
      r,
      o,
      i,
      s,
      a,
      l,
      c = e,
      u = c.normalizeScrollX,
      p = c.momentum,
      d = c.allowNestedScroll,
      f = c.onRelease,
      h = iT(e.target) || vT,
      m = fT.core.globals().ScrollSmoother,
      g = m && m.get(),
      v =
        jT &&
        ((e.content && iT(e.content)) ||
          (g && !1 !== e.content && !g.smooth() && g.content())),
      y = sT(h, oT),
      b = sT(h, rT),
      _ = 1,
      w =
        (dT.isTouch && mT.visualViewport
          ? mT.visualViewport.scale * mT.visualViewport.width
          : mT.outerWidth) / mT.innerWidth,
      D = 0,
      x = vS(p)
        ? function () {
            return p(t);
          }
        : function () {
            return p || 2.8;
          },
      k = jA(h, e.type, !0, d),
      C = function () {
        return (o = !1);
      },
      E = aS,
      T = aS,
      S = function () {
        (n = hS(h, oT)),
          (T = DT(jT ? 1 : 0, n)),
          u && (E = DT(0, hS(h, rT))),
          (r = fA);
      },
      A = function () {
        (v._gsap.y = lS(parseFloat(v._gsap.y) + y.offset) + "px"),
          (v.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(v._gsap.y) +
            ", 0, 1)"),
          (y.offset = y.cacheID = 0);
      },
      O = function () {
        S(),
          i.isActive() &&
            i.vars.scrollY > n &&
            (y() > n ? i.progress(1) && y(n) : i.resetTo("scrollY", n));
      };
    return (
      v && fT.set(v, { y: "+=0" }),
      (e.ignoreCheck = function (e) {
        return (
          (jT &&
            "touchmove" === e.type &&
            (function () {
              if (o) {
                requestAnimationFrame(C);
                var e = lS(t.deltaY / 2),
                  n = T(y.v - e);
                if (v && n !== y.v + y.offset) {
                  y.offset = n - y.v;
                  var r = lS((parseFloat(v && v._gsap.y) || 0) - y.offset);
                  (v.style.transform =
                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                    r +
                    ", 0, 1)"),
                    (v._gsap.y = r + "px"),
                    (y.cacheID = VE.cache),
                    bA();
                }
                return !0;
              }
              y.offset && A(), (o = !0);
            })()) ||
          (_ > 1.05 && "touchstart" !== e.type) ||
          t.isGesturing ||
          (e.touches && e.touches.length > 1)
        );
      }),
      (e.onPress = function () {
        o = !1;
        var e = _;
        (_ = lS(((mT.visualViewport && mT.visualViewport.scale) || 1) / w)),
          i.pause(),
          e !== _ && RA(h, _ > 1.01 || (!u && "x")),
          (s = b()),
          (a = y()),
          S(),
          (r = fA);
      }),
      (e.onRelease = e.onGestureStart =
        function (e, t) {
          if ((y.offset && A(), t)) {
            VE.cache++;
            var r,
              o,
              s = x();
            u &&
              ((o = (r = b()) + (0.05 * s * -e.velocityX) / 0.227),
              (s *= IA(b, r, o, hS(h, rT))),
              (i.vars.scrollX = E(o))),
              (o = (r = y()) + (0.05 * s * -e.velocityY) / 0.227),
              (s *= IA(y, r, o, hS(h, oT))),
              (i.vars.scrollY = T(o)),
              i.invalidate().duration(s).play(0.01),
              ((jT && i.vars.scrollY >= n) || r >= n - 1) &&
                fT.to({}, { onUpdate: O, duration: s });
          } else l.restart(!0);
          f && f(e);
        }),
      (e.onWheel = function () {
        i._ts && i.pause(), QT() - D > 1e3 && ((r = 0), (D = QT()));
      }),
      (e.onChange = function (e, t, n, o, i) {
        if (
          (fA !== r && S(),
          t && u && b(E(o[2] === t ? s + (e.startX - e.x) : b() + t - o[1])),
          n)
        ) {
          y.offset && A();
          var l = i[2] === n,
            c = l ? a + e.startY - e.y : y() + n - i[1],
            p = T(c);
          l && c !== p && (a += p - c), y(p);
        }
        (n || t) && bA();
      }),
      (e.onEnable = function () {
        RA(h, !u && "x"),
          LA.addEventListener("refresh", O),
          zS(mT, "resize", O),
          y.smooth &&
            ((y.target.style.scrollBehavior = "auto"),
            (y.smooth = b.smooth = !1)),
          k.enable();
      }),
      (e.onDisable = function () {
        RA(h, !0),
          VS(mT, "resize", O),
          LA.removeEventListener("refresh", O),
          k.kill();
      }),
      (e.lockAxis = !1 !== e.lockAxis),
      ((t = new dT(e)).iOS = jT),
      jT && !y() && y(1),
      jT && fT.ticker.add(aS),
      (l = t._dc),
      (i = fT.to(t, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: u ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: OA(y, y(), function () {
            return i.pause();
          }),
        },
        onUpdate: bA,
        onComplete: l.vars.onComplete,
      })),
      t
    );
  };
(LA.sort = function (e) {
  return ZS.sort(
    e ||
      function (e, t) {
        return (
          -1e6 * (e.vars.refreshPriority || 0) +
          e.start -
          (t.start + -1e6 * (t.vars.refreshPriority || 0))
        );
      }
  );
}),
  (LA.observe = function (e) {
    return new dT(e);
  }),
  (LA.normalizeScroll = function (e) {
    if (void 0 === e) return IT;
    if (!0 === e && IT) return IT.enable();
    if (!1 === e) return IT && IT.kill(), void (IT = e);
    var t = e instanceof dT ? e : qA(e);
    return (
      IT && IT.target === t.target && IT.kill(), pS(t.target) && (IT = t), t
    );
  }),
  (LA.core = {
    _getVelocityProp: aT,
    _inputObserver: jA,
    _scrollers: VE,
    _proxies: WE,
    bridge: {
      ss: function () {
        eS || lA("scrollStart"), (eS = QT());
      },
      ref: function () {
        return CT;
      },
    },
  }),
  uS() && fT.registerPlugin(LA);
var HA,
  zA,
  VA,
  WA,
  YA,
  XA,
  GA,
  KA,
  JA = function () {
    return "undefined" != typeof window;
  },
  QA = function () {
    return HA || (JA() && (HA = window.gsap) && HA.registerPlugin && HA);
  },
  ZA = function (e) {
    return "string" == typeof e;
  },
  eO = function (e) {
    return "function" == typeof e;
  },
  tO = function (e, t) {
    var n = "x" === t ? "Width" : "Height",
      r = "scroll" + n,
      o = "client" + n;
    return e === VA || e === WA || e === YA
      ? Math.max(WA[r], YA[r]) - (VA["inner" + n] || WA[o] || YA[o])
      : e[r] - e["offset" + n];
  },
  nO = function (e, t) {
    var n = "scroll" + ("x" === t ? "Left" : "Top");
    return (
      e === VA &&
        (null != e.pageXOffset
          ? (n = "page" + t.toUpperCase() + "Offset")
          : (e = null != WA[n] ? WA : YA)),
      function () {
        return e[n];
      }
    );
  },
  rO = function (e, t) {
    if (!(e = XA(e)[0]) || !e.getBoundingClientRect) return { x: 0, y: 0 };
    var n = e.getBoundingClientRect(),
      r = !t || t === VA || t === YA,
      o = r
        ? {
            top:
              WA.clientTop -
              (VA.pageYOffset || WA.scrollTop || YA.scrollTop || 0),
            left:
              WA.clientLeft -
              (VA.pageXOffset || WA.scrollLeft || YA.scrollLeft || 0),
          }
        : t.getBoundingClientRect(),
      i = { x: n.left - o.left, y: n.top - o.top };
    return !r && t && ((i.x += nO(t, "x")()), (i.y += nO(t, "y")())), i;
  },
  oO = function (e, t, n, r, o) {
    return isNaN(e) || "object" == typeof e
      ? ZA(e) && "=" === e.charAt(1)
        ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + r - o
        : "max" === e
        ? tO(t, n) - o
        : Math.min(tO(t, n), rO(e, t)[n] - o)
      : parseFloat(e) - o;
  },
  iO = function () {
    (HA = QA()),
      JA() &&
        HA &&
        "undefined" != typeof document &&
        document.body &&
        ((VA = window),
        (YA = document.body),
        (WA = document.documentElement),
        (XA = HA.utils.toArray),
        HA.config({ autoKillThreshold: 7 }),
        (GA = HA.config()),
        (zA = 1));
  },
  sO = {
    version: "3.12.5",
    name: "scrollTo",
    rawVars: 1,
    register: function (e) {
      (HA = e), iO();
    },
    init: function (e, t, n, r, o) {
      zA || iO();
      var i = this,
        s = HA.getProperty(e, "scrollSnapType");
      (i.isWin = e === VA),
        (i.target = e),
        (i.tween = n),
        (t = (function (e, t, n, r) {
          if ((eO(e) && (e = e(t, n, r)), "object" != typeof e))
            return ZA(e) && "max" !== e && "=" !== e.charAt(1)
              ? { x: e, y: e }
              : { y: e };
          if (e.nodeType) return { y: e, x: e };
          var o,
            i = {};
          for (o in e)
            i[o] = "onAutoKill" !== o && eO(e[o]) ? e[o](t, n, r) : e[o];
          return i;
        })(t, r, e, o)),
        (i.vars = t),
        (i.autoKill = !!t.autoKill),
        (i.getX = nO(e, "x")),
        (i.getY = nO(e, "y")),
        (i.x = i.xPrev = i.getX()),
        (i.y = i.yPrev = i.getY()),
        KA || (KA = HA.core.globals().ScrollTrigger),
        "smooth" === HA.getProperty(e, "scrollBehavior") &&
          HA.set(e, { scrollBehavior: "auto" }),
        s &&
          "none" !== s &&
          ((i.snap = 1),
          (i.snapInline = e.style.scrollSnapType),
          (e.style.scrollSnapType = "none")),
        null != t.x
          ? (i.add(i, "x", i.x, oO(t.x, e, "x", i.x, t.offsetX || 0), r, o),
            i._props.push("scrollTo_x"))
          : (i.skipX = 1),
        null != t.y
          ? (i.add(i, "y", i.y, oO(t.y, e, "y", i.y, t.offsetY || 0), r, o),
            i._props.push("scrollTo_y"))
          : (i.skipY = 1);
    },
    render: function (e, t) {
      for (
        var n,
          r,
          o,
          i,
          s,
          a = t._pt,
          l = t.target,
          c = t.tween,
          u = t.autoKill,
          p = t.xPrev,
          d = t.yPrev,
          f = t.isWin,
          h = t.snap,
          m = t.snapInline;
        a;

      )
        a.r(e, a.d), (a = a._next);
      (n = f || !t.skipX ? t.getX() : p),
        (o = (r = f || !t.skipY ? t.getY() : d) - d),
        (i = n - p),
        (s = GA.autoKillThreshold),
        t.x < 0 && (t.x = 0),
        t.y < 0 && (t.y = 0),
        u &&
          (!t.skipX && (i > s || i < -s) && n < tO(l, "x") && (t.skipX = 1),
          !t.skipY && (o > s || o < -s) && r < tO(l, "y") && (t.skipY = 1),
          t.skipX &&
            t.skipY &&
            (c.kill(),
            t.vars.onAutoKill &&
              t.vars.onAutoKill.apply(c, t.vars.onAutoKillParams || []))),
        f
          ? VA.scrollTo(t.skipX ? n : t.x, t.skipY ? r : t.y)
          : (t.skipY || (l.scrollTop = t.y), t.skipX || (l.scrollLeft = t.x)),
        !h ||
          (1 !== e && 0 !== e) ||
          ((r = l.scrollTop),
          (n = l.scrollLeft),
          m
            ? (l.style.scrollSnapType = m)
            : l.style.removeProperty("scroll-snap-type"),
          (l.scrollTop = r + 1),
          (l.scrollLeft = n + 1),
          (l.scrollTop = r),
          (l.scrollLeft = n)),
        (t.xPrev = t.x),
        (t.yPrev = t.y),
        KA && KA.update();
    },
    kill: function (e) {
      var t = "scrollTo" === e,
        n = this._props.indexOf(e);
      return (
        (t || "scrollTo_x" === e) && (this.skipX = 1),
        (t || "scrollTo_y" === e) && (this.skipY = 1),
        n > -1 && this._props.splice(n, 1),
        !this._props.length
      );
    },
  };
(sO.max = tO),
  (sO.getOffset = rO),
  (sO.buildGetter = nO),
  QA() && HA.registerPlugin(sO);
var aO,
  lO,
  cO,
  uO,
  pO,
  dO,
  fO,
  hO,
  mO,
  gO = "transform",
  vO = gO + "Origin",
  yO = function (e) {
    var t = e.ownerDocument || e;
    !(gO in e.style) &&
      "msTransform" in e.style &&
      (vO = (gO = "msTransform") + "Origin");
    for (; t.parentNode && (t = t.parentNode); );
    if (((lO = window), (fO = new EO()), t)) {
      (aO = t),
        (cO = t.documentElement),
        (uO = t.body),
        ((hO = aO.createElementNS(
          "http://www.w3.org/2000/svg",
          "g"
        )).style.transform = "none");
      var n = t.createElement("div"),
        r = t.createElement("div"),
        o = t && (t.body || t.firstElementChild);
      o &&
        o.appendChild &&
        (o.appendChild(n),
        n.appendChild(r),
        n.setAttribute(
          "style",
          "position:static;transform:translate3d(0,0,1px)"
        ),
        (mO = r.offsetParent !== n),
        o.removeChild(n));
    }
    return t;
  },
  bO = [],
  _O = [],
  wO = function (e) {
    return (
      e.ownerSVGElement || ("svg" === (e.tagName + "").toLowerCase() ? e : null)
    );
  },
  DO = function e(t) {
    return (
      "fixed" === lO.getComputedStyle(t).position ||
      ((t = t.parentNode) && 1 === t.nodeType ? e(t) : void 0)
    );
  },
  xO = function e(t, n) {
    if (t.parentNode && (aO || yO(t))) {
      var r = wO(t),
        o = r
          ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
          : "http://www.w3.org/1999/xhtml",
        i = r ? (n ? "rect" : "g") : "div",
        s = 2 !== n ? 0 : 100,
        a = 3 === n ? 100 : 0,
        l =
          "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
        c = aO.createElementNS
          ? aO.createElementNS(o.replace(/^https/, "http"), i)
          : aO.createElement(i);
      return (
        n &&
          (r
            ? (dO || (dO = e(t)),
              c.setAttribute("width", 0.01),
              c.setAttribute("height", 0.01),
              c.setAttribute("transform", "translate(" + s + "," + a + ")"),
              dO.appendChild(c))
            : (pO || ((pO = e(t)).style.cssText = l),
              (c.style.cssText =
                l +
                "width:0.1px;height:0.1px;top:" +
                a +
                "px;left:" +
                s +
                "px"),
              pO.appendChild(c))),
        c
      );
    }
    throw "Need document and parent.";
  },
  kO = function (e, t) {
    var n,
      r,
      o,
      i,
      s,
      a,
      l = wO(e),
      c = e === l,
      u = l ? bO : _O,
      p = e.parentNode;
    if (e === lO) return e;
    if (
      (u.length || u.push(xO(e, 1), xO(e, 2), xO(e, 3)), (n = l ? dO : pO), l)
    )
      c
        ? ((o = (function (e) {
            var t,
              n = e.getCTM();
            return (
              n ||
                ((t = e.style[gO]),
                (e.style[gO] = "none"),
                e.appendChild(hO),
                (n = hO.getCTM()),
                e.removeChild(hO),
                t
                  ? (e.style[gO] = t)
                  : e.style.removeProperty(
                      gO.replace(/([A-Z])/g, "-$1").toLowerCase()
                    )),
              n || fO.clone()
            );
          })(e)),
          (i = -o.e / o.a),
          (s = -o.f / o.d),
          (r = fO))
        : e.getBBox
        ? ((o = e.getBBox()),
          (r = (r = e.transform ? e.transform.baseVal : {}).numberOfItems
            ? r.numberOfItems > 1
              ? (function (e) {
                  for (var t = new EO(), n = 0; n < e.numberOfItems; n++)
                    t.multiply(e.getItem(n).matrix);
                  return t;
                })(r)
              : r.getItem(0).matrix
            : fO),
          (i = r.a * o.x + r.c * o.y),
          (s = r.b * o.x + r.d * o.y))
        : ((r = new EO()), (i = s = 0)),
        (c ? l : p).appendChild(n),
        n.setAttribute(
          "transform",
          "matrix(" +
            r.a +
            "," +
            r.b +
            "," +
            r.c +
            "," +
            r.d +
            "," +
            (r.e + i) +
            "," +
            (r.f + s) +
            ")"
        );
    else {
      if (((i = s = 0), mO))
        for (
          r = e.offsetParent, o = e;
          o && (o = o.parentNode) && o !== r && o.parentNode;

        )
          (lO.getComputedStyle(o)[gO] + "").length > 4 &&
            ((i = o.offsetLeft), (s = o.offsetTop), (o = 0));
      if (
        "absolute" !== (a = lO.getComputedStyle(e)).position &&
        "fixed" !== a.position
      )
        for (r = e.offsetParent; p && p !== r; )
          (i += p.scrollLeft || 0), (s += p.scrollTop || 0), (p = p.parentNode);
      ((o = n.style).top = e.offsetTop - s + "px"),
        (o.left = e.offsetLeft - i + "px"),
        (o[gO] = a[gO]),
        (o[vO] = a[vO]),
        (o.position = "fixed" === a.position ? "fixed" : "absolute"),
        e.parentNode.appendChild(n);
    }
    return n;
  },
  CO = function (e, t, n, r, o, i, s) {
    return (e.a = t), (e.b = n), (e.c = r), (e.d = o), (e.e = i), (e.f = s), e;
  },
  EO = (function () {
    function e(e, t, n, r, o, i) {
      void 0 === e && (e = 1),
        void 0 === t && (t = 0),
        void 0 === n && (n = 0),
        void 0 === r && (r = 1),
        void 0 === o && (o = 0),
        void 0 === i && (i = 0),
        CO(this, e, t, n, r, o, i);
    }
    var t = e.prototype;
    return (
      (t.inverse = function () {
        var e = this.a,
          t = this.b,
          n = this.c,
          r = this.d,
          o = this.e,
          i = this.f,
          s = e * r - t * n || 1e-10;
        return CO(
          this,
          r / s,
          -t / s,
          -n / s,
          e / s,
          (n * i - r * o) / s,
          -(e * i - t * o) / s
        );
      }),
      (t.multiply = function (e) {
        var t = this.a,
          n = this.b,
          r = this.c,
          o = this.d,
          i = this.e,
          s = this.f,
          a = e.a,
          l = e.c,
          c = e.b,
          u = e.d,
          p = e.e,
          d = e.f;
        return CO(
          this,
          a * t + c * r,
          a * n + c * o,
          l * t + u * r,
          l * n + u * o,
          i + p * t + d * r,
          s + p * n + d * o
        );
      }),
      (t.clone = function () {
        return new e(this.a, this.b, this.c, this.d, this.e, this.f);
      }),
      (t.equals = function (e) {
        var t = this.a,
          n = this.b,
          r = this.c,
          o = this.d,
          i = this.e,
          s = this.f;
        return (
          t === e.a &&
          n === e.b &&
          r === e.c &&
          o === e.d &&
          i === e.e &&
          s === e.f
        );
      }),
      (t.apply = function (e, t) {
        void 0 === t && (t = {});
        var n = e.x,
          r = e.y,
          o = this.a,
          i = this.b,
          s = this.c,
          a = this.d,
          l = this.e,
          c = this.f;
        return (
          (t.x = n * o + r * s + l || 0), (t.y = n * i + r * a + c || 0), t
        );
      }),
      e
    );
  })();
function TO(e, t, n, r) {
  if (!e || !e.parentNode || (aO || yO(e)).documentElement === e)
    return new EO();
  var o = (function (e) {
      for (var t, n; e && e !== uO; )
        (n = e._gsap) && n.uncache && n.get(e, "x"),
          n &&
            !n.scaleX &&
            !n.scaleY &&
            n.renderTransform &&
            ((n.scaleX = n.scaleY = 1e-4),
            n.renderTransform(1, n),
            t ? t.push(n) : (t = [n])),
          (e = e.parentNode);
      return t;
    })(e),
    i = wO(e) ? bO : _O,
    s = kO(e),
    a = i[0].getBoundingClientRect(),
    l = i[1].getBoundingClientRect(),
    c = i[2].getBoundingClientRect(),
    u = s.parentNode,
    p = DO(e),
    d = new EO(
      (l.left - a.left) / 100,
      (l.top - a.top) / 100,
      (c.left - a.left) / 100,
      (c.top - a.top) / 100,
      a.left +
        (p
          ? 0
          : lO.pageXOffset ||
            aO.scrollLeft ||
            cO.scrollLeft ||
            uO.scrollLeft ||
            0),
      a.top +
        (p
          ? 0
          : lO.pageYOffset || aO.scrollTop || cO.scrollTop || uO.scrollTop || 0)
    );
  if ((u.removeChild(s), o))
    for (a = o.length; a--; )
      ((l = o[a]).scaleX = l.scaleY = 0), l.renderTransform(1, l);
  return t ? d.inverse() : d;
}
function SO(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
var AO,
  OO,
  PO,
  FO,
  LO,
  NO,
  IO,
  RO,
  MO,
  BO,
  jO,
  $O,
  UO,
  qO,
  HO,
  zO,
  VO,
  WO,
  YO,
  XO,
  GO,
  KO,
  JO = 0,
  QO = function () {
    return "undefined" != typeof window;
  },
  ZO = function () {
    return AO || (QO() && (AO = window.gsap) && AO.registerPlugin && AO);
  },
  eP = function (e) {
    return "function" == typeof e;
  },
  tP = function (e) {
    return "object" == typeof e;
  },
  nP = function (e) {
    return void 0 === e;
  },
  rP = function () {
    return !1;
  },
  oP = "transform",
  iP = "transformOrigin",
  sP = function (e) {
    return Math.round(1e4 * e) / 1e4;
  },
  aP = Array.isArray,
  lP = function (e, t) {
    var n = PO.createElementNS
      ? PO.createElementNS(
          "http://www.w3.org/1999/xhtml".replace(/^https/, "http"),
          e
        )
      : PO.createElement(e);
    return n.style ? n : PO.createElement(e);
  },
  cP = 180 / Math.PI,
  uP = 1e20,
  pP = new EO(),
  dP =
    Date.now ||
    function () {
      return new Date().getTime();
    },
  fP = [],
  hP = {},
  mP = 0,
  gP = /^(?:a|input|textarea|button|select)$/i,
  vP = 0,
  yP = {},
  bP = {},
  _P = function (e, t) {
    var n,
      r = {};
    for (n in e) r[n] = t ? e[n] * t : e[n];
    return r;
  },
  wP = function e(t, n) {
    for (var r, o = t.length; o--; )
      n
        ? (t[o].style.touchAction = n)
        : t[o].style.removeProperty("touch-action"),
        (r = t[o].children) && r.length && e(r, n);
  },
  DP = function () {
    return fP.forEach(function (e) {
      return e();
    });
  },
  xP = function () {
    return !fP.length && AO.ticker.remove(DP);
  },
  kP = function (e) {
    for (var t = fP.length; t--; ) fP[t] === e && fP.splice(t, 1);
    AO.to(xP, {
      overwrite: !0,
      delay: 15,
      duration: 0,
      onComplete: xP,
      data: "_draggable",
    });
  },
  CP = function (e, t, n, r) {
    if (e.addEventListener) {
      var o = UO[t];
      (r = r || (jO ? { passive: !1 } : null)),
        e.addEventListener(o || t, n, r),
        o && t !== o && e.addEventListener(t, n, r);
    }
  },
  EP = function (e, t, n, r) {
    if (e.removeEventListener) {
      var o = UO[t];
      e.removeEventListener(o || t, n, r),
        o && t !== o && e.removeEventListener(t, n, r);
    }
  },
  TP = function (e) {
    e.preventDefault && e.preventDefault(),
      e.preventManipulation && e.preventManipulation();
  },
  SP = function e(t) {
    (qO = t.touches && JO < t.touches.length), EP(t.target, "touchend", e);
  },
  AP = function (e) {
    (qO = e.touches && JO < e.touches.length), CP(e.target, "touchend", SP);
  },
  OP = function (e) {
    return (
      OO.pageYOffset ||
      e.scrollTop ||
      e.documentElement.scrollTop ||
      e.body.scrollTop ||
      0
    );
  },
  PP = function (e) {
    return (
      OO.pageXOffset ||
      e.scrollLeft ||
      e.documentElement.scrollLeft ||
      e.body.scrollLeft ||
      0
    );
  },
  FP = function e(t, n) {
    CP(t, "scroll", n), NP(t.parentNode) || e(t.parentNode, n);
  },
  LP = function e(t, n) {
    EP(t, "scroll", n), NP(t.parentNode) || e(t.parentNode, n);
  },
  NP = function (e) {
    return !(
      e &&
      e !== FO &&
      9 !== e.nodeType &&
      e !== PO.body &&
      e !== OO &&
      e.nodeType &&
      e.parentNode
    );
  },
  IP = function (e, t) {
    var n = "x" === t ? "Width" : "Height",
      r = "scroll" + n,
      o = "client" + n;
    return Math.max(
      0,
      NP(e)
        ? Math.max(FO[r], LO[r]) - (OO["inner" + n] || FO[o] || LO[o])
        : e[r] - e[o]
    );
  },
  RP = function e(t, n) {
    var r = IP(t, "x"),
      o = IP(t, "y");
    NP(t) ? (t = bP) : e(t.parentNode, n),
      (t._gsMaxScrollX = r),
      (t._gsMaxScrollY = o),
      n ||
        ((t._gsScrollX = t.scrollLeft || 0), (t._gsScrollY = t.scrollTop || 0));
  },
  MP = function (e, t, n) {
    var r = e.style;
    r &&
      (nP(r[t]) && (t = MO(t, e) || t),
      null == n
        ? r.removeProperty &&
          r.removeProperty(t.replace(/([A-Z])/g, "-$1").toLowerCase())
        : (r[t] = n));
  },
  BP = function (e) {
    return OO.getComputedStyle(
      e instanceof Element ? e : e.host || (e.parentNode || {}).host || e
    );
  },
  jP = {},
  $P = function (e) {
    if (e === OO)
      return (
        (jP.left = jP.top = 0),
        (jP.width = jP.right =
          FO.clientWidth || e.innerWidth || LO.clientWidth || 0),
        (jP.height = jP.bottom =
          (e.innerHeight || 0) - 20 < FO.clientHeight
            ? FO.clientHeight
            : e.innerHeight || LO.clientHeight || 0),
        jP
      );
    var t = e.ownerDocument || PO,
      n = nP(e.pageX)
        ? e.nodeType || nP(e.left) || nP(e.top)
          ? BO(e)[0].getBoundingClientRect()
          : e
        : {
            left: e.pageX - PP(t),
            top: e.pageY - OP(t),
            right: e.pageX - PP(t) + 1,
            bottom: e.pageY - OP(t) + 1,
          };
    return (
      nP(n.right) && !nP(n.width)
        ? ((n.right = n.left + n.width), (n.bottom = n.top + n.height))
        : nP(n.width) &&
          (n = {
            width: n.right - n.left,
            height: n.bottom - n.top,
            right: n.right,
            left: n.left,
            bottom: n.bottom,
            top: n.top,
          }),
      n
    );
  },
  UP = function (e, t, n) {
    var r,
      o = e.vars,
      i = o[n],
      s = e._listeners[t];
    return (
      eP(i) &&
        (r = i.apply(
          o.callbackScope || e,
          o[n + "Params"] || [e.pointerEvent]
        )),
      s && !1 === e.dispatchEvent(t) && (r = !1),
      r
    );
  },
  qP = function (e, t) {
    var n,
      r,
      o,
      i = BO(e)[0];
    return i.nodeType || i === OO
      ? zP(i, t)
      : nP(e.left)
      ? {
          left: (r = e.min || e.minX || e.minRotation || 0),
          top: (n = e.min || e.minY || 0),
          width: (e.max || e.maxX || e.maxRotation || 0) - r,
          height: (e.max || e.maxY || 0) - n,
        }
      : ((o = { x: 0, y: 0 }),
        {
          left: e.left - o.x,
          top: e.top - o.y,
          width: e.width,
          height: e.height,
        });
  },
  HP = {},
  zP = function (e, t) {
    t = BO(t)[0];
    var n,
      r,
      o,
      i,
      s,
      a,
      l,
      c,
      u,
      p,
      d,
      f,
      h,
      m = e.getBBox && e.ownerSVGElement,
      g = e.ownerDocument || PO;
    if (e === OO)
      (o = OP(g)),
        (r =
          (n = PP(g)) +
          (g.documentElement.clientWidth ||
            e.innerWidth ||
            g.body.clientWidth ||
            0)),
        (i =
          o +
          ((e.innerHeight || 0) - 20 < g.documentElement.clientHeight
            ? g.documentElement.clientHeight
            : e.innerHeight || g.body.clientHeight || 0));
    else {
      if (t === OO || nP(t)) return e.getBoundingClientRect();
      (n = o = 0),
        m
          ? ((d = (p = e.getBBox()).width), (f = p.height))
          : (e.viewBox &&
              (p = e.viewBox.baseVal) &&
              ((n = p.x || 0), (o = p.y || 0), (d = p.width), (f = p.height)),
            d ||
              ((p = "border-box" === (h = BP(e)).boxSizing),
              (d =
                (parseFloat(h.width) || e.clientWidth || 0) +
                (p
                  ? 0
                  : parseFloat(h.borderLeftWidth) +
                    parseFloat(h.borderRightWidth))),
              (f =
                (parseFloat(h.height) || e.clientHeight || 0) +
                (p
                  ? 0
                  : parseFloat(h.borderTopWidth) +
                    parseFloat(h.borderBottomWidth))))),
        (r = d),
        (i = f);
    }
    return e === t
      ? { left: n, top: o, width: r - n, height: i - o }
      : ((a = (s = TO(t, !0).multiply(TO(e))).apply({ x: n, y: o })),
        (l = s.apply({ x: r, y: o })),
        (c = s.apply({ x: r, y: i })),
        (u = s.apply({ x: n, y: i })),
        {
          left: (n = Math.min(a.x, l.x, c.x, u.x)),
          top: (o = Math.min(a.y, l.y, c.y, u.y)),
          width: Math.max(a.x, l.x, c.x, u.x) - n,
          height: Math.max(a.y, l.y, c.y, u.y) - o,
        });
  },
  VP = function (e, t, n, r, o, i) {
    var s,
      a,
      l,
      c = {};
    if (t)
      if (1 !== o && t instanceof Array) {
        if (((c.end = s = []), (l = t.length), tP(t[0])))
          for (a = 0; a < l; a++) s[a] = _P(t[a], o);
        else for (a = 0; a < l; a++) s[a] = t[a] * o;
        (n += 1.1), (r -= 1.1);
      } else
        eP(t)
          ? (c.end = function (n) {
              var r,
                i,
                s = t.call(e, n);
              if (1 !== o)
                if (tP(s)) {
                  for (i in ((r = {}), s)) r[i] = s[i] * o;
                  s = r;
                } else s *= o;
              return s;
            })
          : (c.end = t);
    return (
      (n || 0 === n) && (c.max = n),
      (r || 0 === r) && (c.min = r),
      i && (c.velocity = 0),
      c
    );
  },
  WP = function e(t) {
    var n;
    return (
      !(!t || !t.getAttribute || t === LO) &&
      (!(
        "true" !== (n = t.getAttribute("data-clickable")) &&
        ("false" === n ||
          (!gP.test(t.nodeName + "") &&
            "true" !== t.getAttribute("contentEditable")))
      ) ||
        e(t.parentNode))
    );
  },
  YP = function (e, t) {
    for (var n, r = e.length; r--; )
      ((n = e[r]).ondragstart = n.onselectstart = t ? null : rP),
        AO.set(n, { lazy: !0, userSelect: t ? "text" : "none" });
  },
  XP = function e(t) {
    return (
      "fixed" === BP(t).position ||
      ((t = t.parentNode) && 1 === t.nodeType ? e(t) : void 0)
    );
  },
  GP = function (e, t) {
    (e = AO.utils.toArray(e)[0]), (t = t || {});
    var n,
      r,
      o,
      i,
      s,
      a,
      l = document.createElement("div"),
      c = l.style,
      u = e.firstChild,
      p = 0,
      d = 0,
      f = e.scrollTop,
      h = e.scrollLeft,
      m = e.scrollWidth,
      g = e.scrollHeight,
      v = 0,
      y = 0,
      b = 0;
    GO && !1 !== t.force3D
      ? ((s = "translate3d("), (a = "px,0px)"))
      : oP && ((s = "translate("), (a = "px)")),
      (this.scrollTop = function (e, t) {
        if (!arguments.length) return -this.top();
        this.top(-e, t);
      }),
      (this.scrollLeft = function (e, t) {
        if (!arguments.length) return -this.left();
        this.left(-e, t);
      }),
      (this.left = function (n, r) {
        if (!arguments.length) return -(e.scrollLeft + d);
        var o = e.scrollLeft - h,
          i = d;
        if ((o > 2 || o < -2) && !r)
          return (
            (h = e.scrollLeft),
            AO.killTweensOf(this, { left: 1, scrollLeft: 1 }),
            this.left(-h),
            void (t.onKill && t.onKill())
          );
        (n = -n) < 0
          ? ((d = (n - 0.5) | 0), (n = 0))
          : n > y
          ? ((d = (n - y) | 0), (n = y))
          : (d = 0),
          (d || i) &&
            (this._skip || (c[oP] = s + -d + "px," + -p + a),
            d + v >= 0 && (c.paddingRight = d + v + "px")),
          (e.scrollLeft = 0 | n),
          (h = e.scrollLeft);
      }),
      (this.top = function (n, r) {
        if (!arguments.length) return -(e.scrollTop + p);
        var o = e.scrollTop - f,
          i = p;
        if ((o > 2 || o < -2) && !r)
          return (
            (f = e.scrollTop),
            AO.killTweensOf(this, { top: 1, scrollTop: 1 }),
            this.top(-f),
            void (t.onKill && t.onKill())
          );
        (n = -n) < 0
          ? ((p = (n - 0.5) | 0), (n = 0))
          : n > b
          ? ((p = (n - b) | 0), (n = b))
          : (p = 0),
          (p || i) && (this._skip || (c[oP] = s + -d + "px," + -p + a)),
          (e.scrollTop = 0 | n),
          (f = e.scrollTop);
      }),
      (this.maxScrollTop = function () {
        return b;
      }),
      (this.maxScrollLeft = function () {
        return y;
      }),
      (this.disable = function () {
        for (u = l.firstChild; u; )
          (i = u.nextSibling), e.appendChild(u), (u = i);
        e === l.parentNode && e.removeChild(l);
      }),
      (this.enable = function () {
        if ((u = e.firstChild) !== l) {
          for (; u; ) (i = u.nextSibling), l.appendChild(u), (u = i);
          e.appendChild(l), this.calibrate();
        }
      }),
      (this.calibrate = function (t) {
        var i,
          s,
          a,
          u = e.clientWidth === n;
        (f = e.scrollTop),
          (h = e.scrollLeft),
          (u &&
            e.clientHeight === r &&
            l.offsetHeight === o &&
            m === e.scrollWidth &&
            g === e.scrollHeight &&
            !t) ||
            ((p || d) &&
              ((s = this.left()),
              (a = this.top()),
              this.left(-e.scrollLeft),
              this.top(-e.scrollTop)),
            (i = BP(e)),
            (u && !t) ||
              ((c.display = "block"),
              (c.width = "auto"),
              (c.paddingRight = "0px"),
              (v = Math.max(0, e.scrollWidth - e.clientWidth)) &&
                (v +=
                  parseFloat(i.paddingLeft) +
                  (KO ? parseFloat(i.paddingRight) : 0))),
            (c.display = "inline-block"),
            (c.position = "relative"),
            (c.overflow = "visible"),
            (c.verticalAlign = "top"),
            (c.boxSizing = "content-box"),
            (c.width = "100%"),
            (c.paddingRight = v + "px"),
            KO && (c.paddingBottom = i.paddingBottom),
            (n = e.clientWidth),
            (r = e.clientHeight),
            (m = e.scrollWidth),
            (g = e.scrollHeight),
            (y = e.scrollWidth - n),
            (b = e.scrollHeight - r),
            (o = l.offsetHeight),
            (c.display = "block"),
            (s || a) && (this.left(s), this.top(a)));
      }),
      (this.content = l),
      (this.element = e),
      (this._skip = !1),
      this.enable();
  },
  KP = function (e) {
    if (QO() && document.body) {
      var t = window && window.navigator;
      (OO = window),
        (PO = document),
        (FO = PO.documentElement),
        (LO = PO.body),
        (NO = lP("div")),
        (WO = !!window.PointerEvent),
        ((IO = lP("div")).style.cssText =
          "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab"),
        (VO = "grab" === IO.style.cursor ? "grab" : "move"),
        (HO = t && -1 !== t.userAgent.toLowerCase().indexOf("android")),
        ($O =
          ("ontouchstart" in FO && "orientation" in OO) ||
          (t && (t.MaxTouchPoints > 0 || t.msMaxTouchPoints > 0))),
        (r = lP("div")),
        (o = lP("div")),
        (i = o.style),
        (s = LO),
        (i.display = "inline-block"),
        (i.position = "relative"),
        (r.style.cssText =
          "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden"),
        r.appendChild(o),
        s.appendChild(r),
        (n = o.offsetHeight + 18 > r.scrollHeight),
        s.removeChild(r),
        (KO = n),
        (UO = (function (e) {
          for (
            var t = e.split(","),
              n = (
                ("onpointerdown" in NO)
                  ? "pointerdown,pointermove,pointerup,pointercancel"
                  : ("onmspointerdown" in NO)
                  ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel"
                  : e
              ).split(","),
              r = {},
              o = 4;
            --o > -1;

          )
            (r[t[o]] = n[o]), (r[n[o]] = t[o]);
          try {
            FO.addEventListener(
              "test",
              null,
              Object.defineProperty({}, "passive", {
                get: function () {
                  jO = 1;
                },
              })
            );
          } catch (iI) {}
          return r;
        })("touchstart,touchmove,touchend,touchcancel")),
        CP(PO, "touchcancel", rP),
        CP(OO, "touchmove", rP),
        LO && LO.addEventListener("touchstart", rP),
        CP(PO, "contextmenu", function () {
          for (var e in hP) hP[e].isPressed && hP[e].endDrag();
        }),
        (AO = RO = ZO());
    }
    var n, r, o, i, s;
    AO &&
      ((zO = AO.plugins.inertia),
      (YO = AO.core.context || function () {}),
      (MO = AO.utils.checkPrefix),
      (oP = MO(oP)),
      (iP = MO(iP)),
      (BO = AO.utils.toArray),
      (XO = AO.core.getStyleSaver),
      (GO = !!MO("perspective")));
  },
  JP = (function (e) {
    var t, n;
    function r(t, n) {
      var o;
      (o = e.call(this) || this),
        RO || KP(),
        (t = BO(t)[0]),
        (o.styles = XO && XO(t, "transform,left,top")),
        zO || (zO = AO.plugins.inertia),
        (o.vars = n = _P(n || {})),
        (o.target = t),
        (o.x = o.y = o.rotation = 0),
        (o.dragResistance = parseFloat(n.dragResistance) || 0),
        (o.edgeResistance = isNaN(n.edgeResistance)
          ? 1
          : parseFloat(n.edgeResistance) || 0),
        (o.lockAxis = n.lockAxis),
        (o.autoScroll = n.autoScroll || 0),
        (o.lockedAxis = null),
        (o.allowEventDefault = !!n.allowEventDefault),
        AO.getProperty(t, "x");
      var i,
        s,
        a,
        l,
        c,
        u,
        p,
        d,
        f,
        h,
        m,
        g,
        v,
        y,
        b,
        _,
        w,
        D,
        x,
        k,
        C,
        E,
        T,
        S,
        A,
        O,
        P,
        F,
        L,
        N,
        I,
        R,
        M,
        B = (n.type || "x,y").toLowerCase(),
        j = ~B.indexOf("x") || ~B.indexOf("y"),
        $ = -1 !== B.indexOf("rotation"),
        U = $ ? "rotation" : j ? "x" : "left",
        q = j ? "y" : "top",
        H = !(!~B.indexOf("x") && !~B.indexOf("left") && "scroll" !== B),
        z = !(!~B.indexOf("y") && !~B.indexOf("top") && "scroll" !== B),
        V = n.minimumMovement || 2,
        W = SO(o),
        Y = BO(n.trigger || n.handle || t),
        X = {},
        G = 0,
        K = !1,
        J = n.autoScrollMarginTop || 40,
        Q = n.autoScrollMarginRight || 40,
        Z = n.autoScrollMarginBottom || 40,
        ee = n.autoScrollMarginLeft || 40,
        te = n.clickableTest || WP,
        ne = 0,
        re = t._gsap || AO.core.getCache(t),
        oe = XP(t),
        ie = function (e, n) {
          return parseFloat(re.get(t, e, n));
        },
        se = t.ownerDocument || PO,
        ae = function (e) {
          return (
            TP(e),
            e.stopImmediatePropagation && e.stopImmediatePropagation(),
            !1
          );
        },
        le = function e(n) {
          if (W.autoScroll && W.isDragging && (K || w)) {
            var r,
              o,
              i,
              a,
              l,
              c,
              u,
              p,
              f = t,
              h = 15 * W.autoScroll;
            for (
              K = !1,
                bP.scrollTop =
                  null != OO.pageYOffset
                    ? OO.pageYOffset
                    : null != se.documentElement.scrollTop
                    ? se.documentElement.scrollTop
                    : se.body.scrollTop,
                bP.scrollLeft =
                  null != OO.pageXOffset
                    ? OO.pageXOffset
                    : null != se.documentElement.scrollLeft
                    ? se.documentElement.scrollLeft
                    : se.body.scrollLeft,
                a = W.pointerX - bP.scrollLeft,
                l = W.pointerY - bP.scrollTop;
              f && !o;

            )
              (r = (o = NP(f.parentNode)) ? bP : f.parentNode),
                (i = o
                  ? {
                      bottom: Math.max(FO.clientHeight, OO.innerHeight || 0),
                      right: Math.max(FO.clientWidth, OO.innerWidth || 0),
                      left: 0,
                      top: 0,
                    }
                  : r.getBoundingClientRect()),
                (c = u = 0),
                z &&
                  ((p = r._gsMaxScrollY - r.scrollTop) < 0
                    ? (u = p)
                    : l > i.bottom - Z && p
                    ? ((K = !0),
                      (u = Math.min(
                        p,
                        (h * (1 - Math.max(0, i.bottom - l) / Z)) | 0
                      )))
                    : l < i.top + J &&
                      r.scrollTop &&
                      ((K = !0),
                      (u = -Math.min(
                        r.scrollTop,
                        (h * (1 - Math.max(0, l - i.top) / J)) | 0
                      ))),
                  u && (r.scrollTop += u)),
                H &&
                  ((p = r._gsMaxScrollX - r.scrollLeft) < 0
                    ? (c = p)
                    : a > i.right - Q && p
                    ? ((K = !0),
                      (c = Math.min(
                        p,
                        (h * (1 - Math.max(0, i.right - a) / Q)) | 0
                      )))
                    : a < i.left + ee &&
                      r.scrollLeft &&
                      ((K = !0),
                      (c = -Math.min(
                        r.scrollLeft,
                        (h * (1 - Math.max(0, a - i.left) / ee)) | 0
                      ))),
                  c && (r.scrollLeft += c)),
                o &&
                  (c || u) &&
                  (OO.scrollTo(r.scrollLeft, r.scrollTop),
                  we(W.pointerX + c, W.pointerY + u)),
                (f = r);
          }
          if (w) {
            var m = W.x,
              g = W.y;
            $
              ? ((W.deltaX = m - parseFloat(re.rotation)),
                (W.rotation = m),
                (re.rotation = m + "deg"),
                re.renderTransform(1, re))
              : s
              ? (z && ((W.deltaY = g - s.top()), s.top(g)),
                H && ((W.deltaX = m - s.left()), s.left(m)))
              : j
              ? (z && ((W.deltaY = g - parseFloat(re.y)), (re.y = g + "px")),
                H && ((W.deltaX = m - parseFloat(re.x)), (re.x = m + "px")),
                re.renderTransform(1, re))
              : (z &&
                  ((W.deltaY = g - parseFloat(t.style.top || 0)),
                  (t.style.top = g + "px")),
                H &&
                  ((W.deltaX = m - parseFloat(t.style.left || 0)),
                  (t.style.left = m + "px"))),
              !d ||
                n ||
                F ||
                ((F = !0),
                !1 === UP(W, "drag", "onDrag") &&
                  (H && (W.x -= W.deltaX), z && (W.y -= W.deltaY), e(!0)),
                (F = !1));
          }
          w = !1;
        },
        ce = function (e, n) {
          var r,
            o,
            i = W.x,
            a = W.y;
          t._gsap || (re = AO.core.getCache(t)),
            re.uncache && AO.getProperty(t, "x"),
            j
              ? ((W.x = parseFloat(re.x)), (W.y = parseFloat(re.y)))
              : $
              ? (W.x = W.rotation = parseFloat(re.rotation))
              : s
              ? ((W.y = s.top()), (W.x = s.left()))
              : ((W.y = parseFloat(t.style.top || ((o = BP(t)) && o.top)) || 0),
                (W.x = parseFloat(t.style.left || (o || {}).left) || 0)),
            (x || k || C) &&
              !n &&
              (W.isDragging || W.isThrowing) &&
              (C &&
                ((yP.x = W.x),
                (yP.y = W.y),
                (r = C(yP)).x !== W.x && ((W.x = r.x), (w = !0)),
                r.y !== W.y && ((W.y = r.y), (w = !0))),
              x &&
                (r = x(W.x)) !== W.x &&
                ((W.x = r), $ && (W.rotation = r), (w = !0)),
              k && ((r = k(W.y)) !== W.y && (W.y = r), (w = !0))),
            w && le(!0),
            e ||
              ((W.deltaX = W.x - i),
              (W.deltaY = W.y - a),
              UP(W, "throwupdate", "onThrowUpdate"));
        },
        ue = function (e, t, n, r) {
          return (
            null == t && (t = -uP),
            null == n && (n = uP),
            eP(e)
              ? function (o) {
                  var i = W.isPressed ? 1 - W.edgeResistance : 1;
                  return (
                    e.call(
                      W,
                      (o > n ? n + (o - n) * i : o < t ? t + (o - t) * i : o) *
                        r
                    ) * r
                  );
                }
              : aP(e)
              ? function (r) {
                  for (var o, i, s = e.length, a = 0, l = uP; --s > -1; )
                    (i = (o = e[s]) - r) < 0 && (i = -i),
                      i < l && o >= t && o <= n && ((a = s), (l = i));
                  return e[a];
                }
              : isNaN(e)
              ? function (e) {
                  return e;
                }
              : function () {
                  return e * r;
                }
          );
        },
        pe = function () {
          var e, r, o, i;
          (p = !1),
            s
              ? (s.calibrate(),
                (W.minX = m = -s.maxScrollLeft()),
                (W.minY = v = -s.maxScrollTop()),
                (W.maxX = h = W.maxY = g = 0),
                (p = !0))
              : n.bounds &&
                ((e = qP(n.bounds, t.parentNode)),
                $
                  ? ((W.minX = m = e.left),
                    (W.maxX = h = e.left + e.width),
                    (W.minY = v = W.maxY = g = 0))
                  : nP(n.bounds.maxX) && nP(n.bounds.maxY)
                  ? ((r = qP(t, t.parentNode)),
                    (W.minX = m = Math.round(ie(U, "px") + e.left - r.left)),
                    (W.minY = v = Math.round(ie(q, "px") + e.top - r.top)),
                    (W.maxX = h = Math.round(m + (e.width - r.width))),
                    (W.maxY = g = Math.round(v + (e.height - r.height))))
                  : ((e = n.bounds),
                    (W.minX = m = e.minX),
                    (W.minY = v = e.minY),
                    (W.maxX = h = e.maxX),
                    (W.maxY = g = e.maxY)),
                m > h && ((W.minX = h), (W.maxX = h = m), (m = W.minX)),
                v > g && ((W.minY = g), (W.maxY = g = v), (v = W.minY)),
                $ && ((W.minRotation = m), (W.maxRotation = h)),
                (p = !0)),
            n.liveSnap &&
              ((o = !0 === n.liveSnap ? n.snap || {} : n.liveSnap),
              (i = aP(o) || eP(o)),
              $
                ? ((x = ue(i ? o : o.rotation, m, h, 1)), (k = null))
                : o.points
                ? (C = (function (e, t, n, r, o, i, s) {
                    return (
                      (i = i && i < uP ? i * i : uP),
                      eP(e)
                        ? function (a) {
                            var l,
                              c,
                              u,
                              p = W.isPressed ? 1 - W.edgeResistance : 1,
                              d = a.x,
                              f = a.y;
                            return (
                              (a.x = d =
                                d > n
                                  ? n + (d - n) * p
                                  : d < t
                                  ? t + (d - t) * p
                                  : d),
                              (a.y = f =
                                f > o
                                  ? o + (f - o) * p
                                  : f < r
                                  ? r + (f - r) * p
                                  : f),
                              (l = e.call(W, a)) !== a &&
                                ((a.x = l.x), (a.y = l.y)),
                              1 !== s && ((a.x *= s), (a.y *= s)),
                              i < uP &&
                                (c = a.x - d) * c + (u = a.y - f) * u > i &&
                                ((a.x = d), (a.y = f)),
                              a
                            );
                          }
                        : aP(e)
                        ? function (t) {
                            for (
                              var n, r, o, s, a = e.length, l = 0, c = uP;
                              --a > -1;

                            )
                              (s =
                                (n = (o = e[a]).x - t.x) * n +
                                (r = o.y - t.y) * r) < c && ((l = a), (c = s));
                            return c <= i ? e[l] : t;
                          }
                        : function (e) {
                            return e;
                          }
                    );
                  })(i ? o : o.points, m, h, v, g, o.radius, s ? -1 : 1))
                : (H &&
                    (x = ue(
                      i ? o : o.x || o.left || o.scrollLeft,
                      m,
                      h,
                      s ? -1 : 1
                    )),
                  z &&
                    (k = ue(
                      i ? o : o.y || o.top || o.scrollTop,
                      v,
                      g,
                      s ? -1 : 1
                    ))));
        },
        de = function () {
          (W.isThrowing = !1), UP(W, "throwcomplete", "onThrowComplete");
        },
        fe = function () {
          W.isThrowing = !1;
        },
        he = function (e, r) {
          var o, i, a, l;
          e && zO
            ? (!0 === e &&
                ((o = n.snap || n.liveSnap || {}),
                (i = aP(o) || eP(o)),
                (e = {
                  resistance:
                    (n.throwResistance || n.resistance || 1e3) / ($ ? 10 : 1),
                }),
                $
                  ? (e.rotation = VP(W, i ? o : o.rotation, h, m, 1, r))
                  : (H &&
                      (e[U] = VP(
                        W,
                        i ? o : o.points || o.x || o.left,
                        h,
                        m,
                        s ? -1 : 1,
                        r || "x" === W.lockedAxis
                      )),
                    z &&
                      (e[q] = VP(
                        W,
                        i ? o : o.points || o.y || o.top,
                        g,
                        v,
                        s ? -1 : 1,
                        r || "y" === W.lockedAxis
                      )),
                    (o.points || (aP(o) && tP(o[0]))) &&
                      ((e.linkedProps = U + "," + q), (e.radius = o.radius)))),
              (W.isThrowing = !0),
              (l = isNaN(n.overshootTolerance)
                ? 1 === n.edgeResistance
                  ? 0
                  : 1 - W.edgeResistance + 0.2
                : n.overshootTolerance),
              e.duration ||
                (e.duration = {
                  max: Math.max(
                    n.minDuration || 0,
                    "maxDuration" in n ? n.maxDuration : 2
                  ),
                  min: isNaN(n.minDuration)
                    ? 0 === l || (tP(e) && e.resistance > 1e3)
                      ? 0
                      : 0.5
                    : n.minDuration,
                  overshoot: l,
                }),
              (W.tween = a =
                AO.to(s || t, {
                  inertia: e,
                  data: "_draggable",
                  inherit: !1,
                  onComplete: de,
                  onInterrupt: fe,
                  onUpdate: n.fastMode ? UP : ce,
                  onUpdateParams: n.fastMode
                    ? [W, "onthrowupdate", "onThrowUpdate"]
                    : o && o.radius
                    ? [!1, !0]
                    : [],
                })),
              n.fastMode ||
                (s && (s._skip = !0),
                a.render(1e9, !0, !0),
                ce(!0, !0),
                (W.endX = W.x),
                (W.endY = W.y),
                $ && (W.endRotation = W.x),
                a.play(0),
                ce(!0, !0),
                s && (s._skip = !1)))
            : p && W.applyBounds();
        },
        me = function (e) {
          var n,
            r = S;
          (S = TO(t.parentNode, !0)),
            e &&
              W.isPressed &&
              !S.equals(r || new EO()) &&
              ((n = r.inverse().apply({ x: a, y: l })),
              S.apply(n, n),
              (a = n.x),
              (l = n.y)),
            S.equals(pP) && (S = null);
        },
        ge = function () {
          var e,
            n,
            r,
            o = 1 - W.edgeResistance,
            i = oe ? PP(se) : 0,
            d = oe ? OP(se) : 0;
          j &&
            ((re.x = ie(U, "px") + "px"),
            (re.y = ie(q, "px") + "px"),
            re.renderTransform()),
            me(!1),
            (HP.x = W.pointerX - i),
            (HP.y = W.pointerY - d),
            S && S.apply(HP, HP),
            (a = HP.x),
            (l = HP.y),
            w && (we(W.pointerX, W.pointerY), le(!0)),
            (R = TO(t)),
            s
              ? (pe(), (u = s.top()), (c = s.left()))
              : (ve() ? (ce(!0, !0), pe()) : W.applyBounds(),
                $
                  ? ((e = t.ownerSVGElement
                      ? [re.xOrigin - t.getBBox().x, re.yOrigin - t.getBBox().y]
                      : (BP(t)[iP] || "0 0").split(" ")),
                    (_ = W.rotationOrigin =
                      TO(t).apply({
                        x: parseFloat(e[0]) || 0,
                        y: parseFloat(e[1]) || 0,
                      })),
                    ce(!0, !0),
                    (n = W.pointerX - _.x - i),
                    (r = _.y - W.pointerY + d),
                    (c = W.x),
                    (u = W.y = Math.atan2(r, n) * cP))
                  : ((u = ie(q, "px")), (c = ie(U, "px")))),
            p &&
              o &&
              (c > h ? (c = h + (c - h) / o) : c < m && (c = m - (m - c) / o),
              $ ||
                (u > g
                  ? (u = g + (u - g) / o)
                  : u < v && (u = v - (v - u) / o))),
            (W.startX = c = sP(c)),
            (W.startY = u = sP(u));
        },
        ve = function () {
          return W.tween && W.tween.isActive();
        },
        ye = function () {
          !IO.parentNode ||
            ve() ||
            W.isDragging ||
            IO.parentNode.removeChild(IO);
        },
        be = function (e, o) {
          var c;
          if (
            !i ||
            W.isPressed ||
            !e ||
            (!(("mousedown" !== e.type && "pointerdown" !== e.type) || o) &&
              dP() - ne < 30 &&
              UO[W.pointerEvent.type])
          )
            I && e && i && TP(e);
          else {
            if (
              ((A = ve()),
              (M = !1),
              (W.pointerEvent = e),
              UO[e.type]
                ? ((T = ~e.type.indexOf("touch")
                    ? e.currentTarget || e.target
                    : se),
                  CP(T, "touchend", De),
                  CP(T, "touchmove", _e),
                  CP(T, "touchcancel", De),
                  CP(se, "touchstart", AP))
                : ((T = null), CP(se, "mousemove", _e)),
              (P = null),
              (WO && T) ||
                (CP(se, "mouseup", De),
                e && e.target && CP(e.target, "mouseup", De)),
              (E = te.call(W, e.target) && !1 === n.dragClickables && !o))
            )
              return (
                CP(e.target, "change", De),
                UP(W, "pressInit", "onPressInit"),
                UP(W, "press", "onPress"),
                YP(Y, !0),
                void (I = !1)
              );
            var u;
            if (
              ((O =
                !(
                  !T ||
                  H === z ||
                  !1 === W.vars.allowNativeTouchScrolling ||
                  (W.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2))
                ) && (H ? "y" : "x")),
              (I = !O && !W.allowEventDefault) &&
                (TP(e), CP(OO, "touchforcechange", TP)),
              e.changedTouches
                ? ((e = y = e.changedTouches[0]), (b = e.identifier))
                : e.pointerId
                ? (b = e.pointerId)
                : (y = b = null),
              JO++,
              (u = le),
              fP.push(u),
              1 === fP.length && AO.ticker.add(DP),
              (l = W.pointerY = e.pageY),
              (a = W.pointerX = e.pageX),
              UP(W, "pressInit", "onPressInit"),
              (O || W.autoScroll) && RP(t.parentNode),
              !t.parentNode ||
                !W.autoScroll ||
                s ||
                $ ||
                !t.parentNode._gsMaxScrollX ||
                IO.parentNode ||
                t.getBBox ||
                ((IO.style.width = t.parentNode.scrollWidth + "px"),
                t.parentNode.appendChild(IO)),
              ge(),
              W.tween && W.tween.kill(),
              (W.isThrowing = !1),
              AO.killTweensOf(s || t, X, !0),
              s && AO.killTweensOf(t, { scrollTo: 1 }, !0),
              (W.tween = W.lockedAxis = null),
              (n.zIndexBoost || (!$ && !s && !1 !== n.zIndexBoost)) &&
                (t.style.zIndex = r.zIndex++),
              (W.isPressed = !0),
              (d = !(!n.onDrag && !W._listeners.drag)),
              (f = !(!n.onMove && !W._listeners.move)),
              !1 !== n.cursor || n.activeCursor)
            )
              for (c = Y.length; --c > -1; )
                AO.set(Y[c], {
                  cursor:
                    n.activeCursor ||
                    n.cursor ||
                    ("grab" === VO ? "grabbing" : VO),
                });
            UP(W, "press", "onPress");
          }
        },
        _e = function (e) {
          var n,
            r,
            o,
            s,
            c,
            u,
            p = e;
          if (i && !qO && W.isPressed && e) {
            if (((W.pointerEvent = e), (n = e.changedTouches))) {
              if ((e = n[0]) !== y && e.identifier !== b) {
                for (
                  s = n.length;
                  --s > -1 && (e = n[s]).identifier !== b && e.target !== t;

                );
                if (s < 0) return;
              }
            } else if (e.pointerId && b && e.pointerId !== b) return;
            T &&
            O &&
            !P &&
            ((HP.x = e.pageX - (oe ? PP(se) : 0)),
            (HP.y = e.pageY - (oe ? OP(se) : 0)),
            S && S.apply(HP, HP),
            (r = HP.x),
            (o = HP.y),
            (((c = Math.abs(r - a)) !== (u = Math.abs(o - l)) &&
              (c > V || u > V)) ||
              (HO && O === P)) &&
              ((P = c > u && H ? "x" : "y"),
              O && P !== O && CP(OO, "touchforcechange", TP),
              !1 !== W.vars.lockAxisOnTouchScroll &&
                H &&
                z &&
                ((W.lockedAxis = "x" === P ? "y" : "x"),
                eP(W.vars.onLockAxis) && W.vars.onLockAxis.call(W, p)),
              HO && O === P))
              ? De(p)
              : (W.allowEventDefault ||
                (O && (!P || O === P)) ||
                !1 === p.cancelable
                  ? I && (I = !1)
                  : (TP(p), (I = !0)),
                W.autoScroll && (K = !0),
                we(e.pageX, e.pageY, f));
          } else I && e && i && TP(e);
        },
        we = function (e, t, n) {
          var r,
            o,
            i,
            s,
            d,
            f,
            y = 1 - W.dragResistance,
            b = 1 - W.edgeResistance,
            D = W.pointerX,
            E = W.pointerY,
            T = u,
            A = W.x,
            O = W.y,
            P = W.endX,
            F = W.endY,
            L = W.endRotation,
            N = w;
          (W.pointerX = e),
            (W.pointerY = t),
            oe && ((e -= PP(se)), (t -= OP(se))),
            $
              ? ((s = Math.atan2(_.y - t, e - _.x) * cP),
                (d = W.y - s) > 180
                  ? ((u -= 360), (W.y = s))
                  : d < -180 && ((u += 360), (W.y = s)),
                W.x !== c || Math.abs(u - s) > V
                  ? ((W.y = s), (i = c + (u - s) * y))
                  : (i = c))
              : (S &&
                  ((f = e * S.a + t * S.c + S.e),
                  (t = e * S.b + t * S.d + S.f),
                  (e = f)),
                (o = t - l) < V && o > -V && (o = 0),
                (r = e - a) < V && r > -V && (r = 0),
                (W.lockAxis || W.lockedAxis) &&
                  (r || o) &&
                  ((f = W.lockedAxis) ||
                    ((W.lockedAxis = f =
                      H && Math.abs(r) > Math.abs(o) ? "y" : z ? "x" : null),
                    f &&
                      eP(W.vars.onLockAxis) &&
                      W.vars.onLockAxis.call(W, W.pointerEvent)),
                  "y" === f ? (o = 0) : "x" === f && (r = 0)),
                (i = sP(c + r * y)),
                (s = sP(u + o * y))),
            (x || k || C) &&
              (W.x !== i || (W.y !== s && !$)) &&
              (C &&
                ((yP.x = i),
                (yP.y = s),
                (f = C(yP)),
                (i = sP(f.x)),
                (s = sP(f.y))),
              x && (i = sP(x(i))),
              k && (s = sP(k(s)))),
            p &&
              (i > h
                ? (i = h + Math.round((i - h) * b))
                : i < m && (i = m + Math.round((i - m) * b)),
              $ ||
                (s > g
                  ? (s = Math.round(g + (s - g) * b))
                  : s < v && (s = Math.round(v + (s - v) * b)))),
            (W.x !== i || (W.y !== s && !$)) &&
              ($
                ? ((W.endRotation = W.x = W.endX = i), (w = !0))
                : (z && ((W.y = W.endY = s), (w = !0)),
                  H && ((W.x = W.endX = i), (w = !0))),
              n && !1 === UP(W, "move", "onMove")
                ? ((W.pointerX = D),
                  (W.pointerY = E),
                  (u = T),
                  (W.x = A),
                  (W.y = O),
                  (W.endX = P),
                  (W.endY = F),
                  (W.endRotation = L),
                  (w = N))
                : !W.isDragging &&
                  W.isPressed &&
                  ((W.isDragging = M = !0), UP(W, "dragstart", "onDragStart")));
        },
        De = function e(r, o) {
          if (
            i &&
            W.isPressed &&
            (!r ||
              null == b ||
              o ||
              !(
                (r.pointerId && r.pointerId !== b && r.target !== t) ||
                (r.changedTouches &&
                  !(function (e, t) {
                    for (var n = e.length; n--; )
                      if (e[n].identifier === t) return !0;
                  })(r.changedTouches, b))
              ))
          ) {
            W.isPressed = !1;
            var s,
              a,
              l,
              c,
              u,
              p = r,
              d = W.isDragging,
              f = W.vars.allowContextMenu && r && (r.ctrlKey || r.which > 2),
              h = AO.delayedCall(0.001, ye);
            if (
              (T
                ? (EP(T, "touchend", e),
                  EP(T, "touchmove", _e),
                  EP(T, "touchcancel", e),
                  EP(se, "touchstart", AP))
                : EP(se, "mousemove", _e),
              EP(OO, "touchforcechange", TP),
              (WO && T) ||
                (EP(se, "mouseup", e),
                r && r.target && EP(r.target, "mouseup", e)),
              (w = !1),
              d && ((G = vP = dP()), (W.isDragging = !1)),
              kP(le),
              E && !f)
            )
              return (
                r && (EP(r.target, "change", e), (W.pointerEvent = p)),
                YP(Y, !1),
                UP(W, "release", "onRelease"),
                UP(W, "click", "onClick"),
                void (E = !1)
              );
            for (a = Y.length; --a > -1; )
              MP(Y[a], "cursor", n.cursor || (!1 !== n.cursor ? VO : null));
            if ((JO--, r)) {
              if (
                (s = r.changedTouches) &&
                (r = s[0]) !== y &&
                r.identifier !== b
              ) {
                for (
                  a = s.length;
                  --a > -1 && (r = s[a]).identifier !== b && r.target !== t;

                );
                if (a < 0 && !o) return;
              }
              (W.pointerEvent = p),
                (W.pointerX = r.pageX),
                (W.pointerY = r.pageY);
            }
            return (
              f && p
                ? (TP(p), (I = !0), UP(W, "release", "onRelease"))
                : p && !d
                ? ((I = !1),
                  A && (n.snap || n.bounds) && he(n.inertia || n.throwProps),
                  UP(W, "release", "onRelease"),
                  (HO && "touchmove" === p.type) ||
                    -1 !== p.type.indexOf("cancel") ||
                    (UP(W, "click", "onClick"),
                    dP() - ne < 300 && UP(W, "doubleclick", "onDoubleClick"),
                    (c = p.target || t),
                    (ne = dP()),
                    (u = function () {
                      ne === L ||
                        !W.enabled() ||
                        W.isPressed ||
                        p.defaultPrevented ||
                        (c.click
                          ? c.click()
                          : se.createEvent &&
                            ((l = se.createEvent("MouseEvents")).initMouseEvent(
                              "click",
                              !0,
                              !0,
                              OO,
                              1,
                              W.pointerEvent.screenX,
                              W.pointerEvent.screenY,
                              W.pointerX,
                              W.pointerY,
                              !1,
                              !1,
                              !1,
                              !1,
                              0,
                              null
                            ),
                            c.dispatchEvent(l)));
                    }),
                    HO || p.defaultPrevented || AO.delayedCall(0.05, u)))
                : (he(n.inertia || n.throwProps),
                  W.allowEventDefault ||
                  !p ||
                  (!1 === n.dragClickables && te.call(W, p.target)) ||
                  !d ||
                  (O && (!P || O !== P)) ||
                  !1 === p.cancelable
                    ? (I = !1)
                    : ((I = !0), TP(p)),
                  UP(W, "release", "onRelease")),
              ve() && h.duration(W.tween.duration()),
              d && UP(W, "dragend", "onDragEnd"),
              !0
            );
          }
          I && r && i && TP(r);
        },
        xe = function (e) {
          if (e && W.isDragging && !s) {
            var n = e.target || t.parentNode,
              r = n.scrollLeft - n._gsScrollX,
              o = n.scrollTop - n._gsScrollY;
            (r || o) &&
              (S
                ? ((a -= r * S.a + o * S.c), (l -= o * S.d + r * S.b))
                : ((a -= r), (l -= o)),
              (n._gsScrollX += r),
              (n._gsScrollY += o),
              we(W.pointerX, W.pointerY));
          }
        },
        ke = function (e) {
          var t = dP(),
            n = t - ne < 100,
            r = t - G < 50,
            o = n && L === ne,
            i = W.pointerEvent && W.pointerEvent.defaultPrevented,
            s = n && N === ne,
            a = e.isTrusted || (null == e.isTrusted && n && o);
          if (
            ((o || (r && !1 !== W.vars.suppressClickOnDrag)) &&
              e.stopImmediatePropagation &&
              e.stopImmediatePropagation(),
            n &&
              (!W.pointerEvent || !W.pointerEvent.defaultPrevented) &&
              (!o || (a && !s)))
          )
            return a && o && (N = ne), void (L = ne);
          (W.isPressed || r || n) && ((a && e.detail && n && !i) || TP(e)),
            n ||
              r ||
              M ||
              (e && e.target && (W.pointerEvent = e),
              UP(W, "click", "onClick"));
        },
        Ce = function (e) {
          return S
            ? { x: e.x * S.a + e.y * S.c + S.e, y: e.x * S.b + e.y * S.d + S.f }
            : { x: e.x, y: e.y };
        };
      return (
        (D = r.get(t)) && D.kill(),
        (o.startDrag = function (e, n) {
          var r, o, i, s;
          be(e || W.pointerEvent, !0),
            n &&
              !W.hitTest(e || W.pointerEvent) &&
              ((r = $P(e || W.pointerEvent)),
              (o = $P(t)),
              (i = Ce({ x: r.left + r.width / 2, y: r.top + r.height / 2 })),
              (s = Ce({ x: o.left + o.width / 2, y: o.top + o.height / 2 })),
              (a -= i.x - s.x),
              (l -= i.y - s.y)),
            W.isDragging ||
              ((W.isDragging = M = !0), UP(W, "dragstart", "onDragStart"));
        }),
        (o.drag = _e),
        (o.endDrag = function (e) {
          return De(e || W.pointerEvent, !0);
        }),
        (o.timeSinceDrag = function () {
          return W.isDragging ? 0 : (dP() - G) / 1e3;
        }),
        (o.timeSinceClick = function () {
          return (dP() - ne) / 1e3;
        }),
        (o.hitTest = function (e, t) {
          return r.hitTest(W.target, e, t);
        }),
        (o.getDirection = function (e, n) {
          var r,
            o,
            i,
            s,
            a,
            l,
            p = "velocity" === e && zO ? e : tP(e) && !$ ? "element" : "start";
          return (
            "element" === p && ((a = $P(W.target)), (l = $P(e))),
            (r =
              "start" === p
                ? W.x - c
                : "velocity" === p
                ? zO.getVelocity(t, U)
                : a.left + a.width / 2 - (l.left + l.width / 2)),
            $
              ? r < 0
                ? "counter-clockwise"
                : "clockwise"
              : ((n = n || 2),
                (o =
                  "start" === p
                    ? W.y - u
                    : "velocity" === p
                    ? zO.getVelocity(t, q)
                    : a.top + a.height / 2 - (l.top + l.height / 2)),
                (s =
                  (i = Math.abs(r / o)) < 1 / n
                    ? ""
                    : r < 0
                    ? "left"
                    : "right"),
                i < n && ("" !== s && (s += "-"), (s += o < 0 ? "up" : "down")),
                s)
          );
        }),
        (o.applyBounds = function (e, r) {
          var o, i, s, a, l, c;
          if (e && n.bounds !== e) return (n.bounds = e), W.update(!0, r);
          if ((ce(!0), pe(), p && !ve())) {
            if (
              ((o = W.x),
              (i = W.y),
              o > h ? (o = h) : o < m && (o = m),
              i > g ? (i = g) : i < v && (i = v),
              (W.x !== o || W.y !== i) &&
                ((s = !0),
                (W.x = W.endX = o),
                $ ? (W.endRotation = o) : (W.y = W.endY = i),
                (w = !0),
                le(!0),
                W.autoScroll && !W.isDragging))
            )
              for (
                RP(t.parentNode),
                  a = t,
                  bP.scrollTop =
                    null != OO.pageYOffset
                      ? OO.pageYOffset
                      : null != se.documentElement.scrollTop
                      ? se.documentElement.scrollTop
                      : se.body.scrollTop,
                  bP.scrollLeft =
                    null != OO.pageXOffset
                      ? OO.pageXOffset
                      : null != se.documentElement.scrollLeft
                      ? se.documentElement.scrollLeft
                      : se.body.scrollLeft;
                a && !c;

              )
                (l = (c = NP(a.parentNode)) ? bP : a.parentNode),
                  z &&
                    l.scrollTop > l._gsMaxScrollY &&
                    (l.scrollTop = l._gsMaxScrollY),
                  H &&
                    l.scrollLeft > l._gsMaxScrollX &&
                    (l.scrollLeft = l._gsMaxScrollX),
                  (a = l);
            W.isThrowing &&
              (s || W.endX > h || W.endX < m || W.endY > g || W.endY < v) &&
              he(n.inertia || n.throwProps, s);
          }
          return W;
        }),
        (o.update = function (e, n, r) {
          if (n && W.isPressed) {
            var o = TO(t),
              i = R.apply({ x: W.x - c, y: W.y - u }),
              s = TO(t.parentNode, !0);
            s.apply({ x: o.e - i.x, y: o.f - i.y }, i),
              (W.x -= i.x - s.e),
              (W.y -= i.y - s.f),
              le(!0),
              ge();
          }
          var a = W.x,
            l = W.y;
          return (
            me(!n),
            e ? W.applyBounds() : (w && r && le(!0), ce(!0)),
            n && (we(W.pointerX, W.pointerY), w && le(!0)),
            W.isPressed &&
              !n &&
              ((H && Math.abs(a - W.x) > 0.01) ||
                (z && Math.abs(l - W.y) > 0.01 && !$)) &&
              ge(),
            W.autoScroll &&
              (RP(t.parentNode, W.isDragging),
              (K = W.isDragging),
              le(!0),
              LP(t, xe),
              FP(t, xe)),
            W
          );
        }),
        (o.enable = function (e) {
          var r,
            o,
            a,
            l = { lazy: !0 };
          if (
            (!1 !== n.cursor && (l.cursor = n.cursor || VO),
            AO.utils.checkPrefix("touchCallout") && (l.touchCallout = "none"),
            "soft" !== e)
          ) {
            for (
              wP(
                Y,
                H === z
                  ? "none"
                  : (n.allowNativeTouchScrolling &&
                      (t.scrollHeight === t.clientHeight) ==
                        (t.scrollWidth === t.clientHeight)) ||
                    n.allowEventDefault
                  ? "manipulation"
                  : H
                  ? "pan-y"
                  : "pan-x"
              ),
                o = Y.length;
              --o > -1;

            )
              (a = Y[o]),
                WO || CP(a, "mousedown", be),
                CP(a, "touchstart", be),
                CP(a, "click", ke, !0),
                AO.set(a, l),
                a.getBBox &&
                  a.ownerSVGElement &&
                  H !== z &&
                  AO.set(a.ownerSVGElement, {
                    touchAction:
                      n.allowNativeTouchScrolling || n.allowEventDefault
                        ? "manipulation"
                        : H
                        ? "pan-y"
                        : "pan-x",
                  }),
                n.allowContextMenu || CP(a, "contextmenu", ae);
            YP(Y, !1);
          }
          return (
            FP(t, xe),
            (i = !0),
            zO &&
              "soft" !== e &&
              zO.track(s || t, j ? "x,y" : $ ? "rotation" : "top,left"),
            (t._gsDragID = r = "d" + mP++),
            (hP[r] = W),
            s && (s.enable(), (s.element._gsDragID = r)),
            (n.bounds || $) && ge(),
            n.bounds && W.applyBounds(),
            W
          );
        }),
        (o.disable = function (e) {
          for (var n, r = W.isDragging, o = Y.length; --o > -1; )
            MP(Y[o], "cursor", null);
          if ("soft" !== e) {
            for (wP(Y, null), o = Y.length; --o > -1; )
              (n = Y[o]),
                MP(n, "touchCallout", null),
                EP(n, "mousedown", be),
                EP(n, "touchstart", be),
                EP(n, "click", ke, !0),
                EP(n, "contextmenu", ae);
            YP(Y, !0),
              T &&
                (EP(T, "touchcancel", De),
                EP(T, "touchend", De),
                EP(T, "touchmove", _e)),
              EP(se, "mouseup", De),
              EP(se, "mousemove", _e);
          }
          return (
            LP(t, xe),
            (i = !1),
            zO &&
              "soft" !== e &&
              (zO.untrack(s || t, j ? "x,y" : $ ? "rotation" : "top,left"),
              W.tween && W.tween.kill()),
            s && s.disable(),
            kP(le),
            (W.isDragging = W.isPressed = E = !1),
            r && UP(W, "dragend", "onDragEnd"),
            W
          );
        }),
        (o.enabled = function (e, t) {
          return arguments.length ? (e ? W.enable(t) : W.disable(t)) : i;
        }),
        (o.kill = function () {
          return (
            (W.isThrowing = !1),
            W.tween && W.tween.kill(),
            W.disable(),
            AO.set(Y, { clearProps: "userSelect" }),
            delete hP[t._gsDragID],
            W
          );
        }),
        (o.revert = function () {
          this.kill(), this.styles && this.styles.revert();
        }),
        ~B.indexOf("scroll") &&
          ((s = o.scrollProxy =
            new GP(
              t,
              (function (e, t) {
                for (var n in t) n in e || (e[n] = t[n]);
                return e;
              })(
                {
                  onKill: function () {
                    W.isPressed && De(null);
                  },
                },
                n
              )
            )),
          (t.style.overflowY = z && !$O ? "auto" : "hidden"),
          (t.style.overflowX = H && !$O ? "auto" : "hidden"),
          (t = s.content)),
        $ ? (X.rotation = 1) : (H && (X[U] = 1), z && (X[q] = 1)),
        (re.force3D = !("force3D" in n) || n.force3D),
        YO(SO(o)),
        o.enable(),
        o
      );
    }
    return (
      (n = e),
      ((t = r).prototype = Object.create(n.prototype)),
      (t.prototype.constructor = t),
      (t.__proto__ = n),
      (r.register = function (e) {
        (AO = e), KP();
      }),
      (r.create = function (e, t) {
        return (
          RO || KP(),
          BO(e).map(function (e) {
            return new r(e, t);
          })
        );
      }),
      (r.get = function (e) {
        return hP[(BO(e)[0] || {})._gsDragID];
      }),
      (r.timeSinceDrag = function () {
        return (dP() - vP) / 1e3;
      }),
      (r.hitTest = function (e, t, n) {
        if (e === t) return !1;
        var r,
          o,
          i,
          s = $P(e),
          a = $P(t),
          l = s.top,
          c = s.left,
          u = s.right,
          p = s.bottom,
          d = s.width,
          f = s.height,
          h = a.left > u || a.right < c || a.top > p || a.bottom < l;
        return h || !n
          ? !h
          : ((i = -1 !== (n + "").indexOf("%")),
            (n = parseFloat(n) || 0),
            ((r = {
              left: Math.max(c, a.left),
              top: Math.max(l, a.top),
            }).width = Math.min(u, a.right) - r.left),
            (r.height = Math.min(p, a.bottom) - r.top),
            !(r.width < 0 || r.height < 0) &&
              (i
                ? ((n *= 0.01),
                  (o = r.width * r.height) >= d * f * n ||
                    o >= a.width * a.height * n)
                : r.width > n && r.height > n));
      }),
      r
    );
  })(
    (function () {
      function e(e) {
        (this._listeners = {}), (this.target = e || this);
      }
      var t = e.prototype;
      return (
        (t.addEventListener = function (e, t) {
          var n = this._listeners[e] || (this._listeners[e] = []);
          ~n.indexOf(t) || n.push(t);
        }),
        (t.removeEventListener = function (e, t) {
          var n = this._listeners[e],
            r = n && n.indexOf(t);
          r >= 0 && n.splice(r, 1);
        }),
        (t.dispatchEvent = function (e) {
          var t,
            n = this;
          return (
            (this._listeners[e] || []).forEach(function (r) {
              return (
                !1 === r.call(n, { type: e, target: n.target }) && (t = !1)
              );
            }),
            t
          );
        }),
        e
      );
    })()
  );
!(function (e, t) {
  for (var n in t) n in e || (e[n] = t[n]);
})(JP.prototype, {
  pointerX: 0,
  pointerY: 0,
  startX: 0,
  startY: 0,
  deltaX: 0,
  deltaY: 0,
  isDragging: !1,
  isPressed: !1,
}),
  (JP.zIndex = 1e3),
  (JP.version = "3.12.5"),
  ZO() && AO.registerPlugin(JP);
var QP = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
  ZP = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
  eF = Math.PI / 180,
  tF = Math.sin,
  nF = Math.cos,
  rF = Math.abs,
  oF = Math.sqrt,
  iF = 1e5,
  sF = function (e) {
    return Math.round(e * iF) / iF || 0;
  };
function aF(e, t, n, r, o, i, s, a, l) {
  if (e !== a || t !== l) {
    (n = rF(n)), (r = rF(r));
    var c = (o % 360) * eF,
      u = nF(c),
      p = tF(c),
      d = Math.PI,
      f = 2 * d,
      h = (e - a) / 2,
      m = (t - l) / 2,
      g = u * h + p * m,
      v = -p * h + u * m,
      y = g * g,
      b = v * v,
      _ = y / (n * n) + b / (r * r);
    _ > 1 && ((n = oF(_) * n), (r = oF(_) * r));
    var w = n * n,
      D = r * r,
      x = (w * D - w * b - D * y) / (w * b + D * y);
    x < 0 && (x = 0);
    var k = (i === s ? -1 : 1) * oF(x),
      C = k * ((n * v) / r),
      E = k * ((-r * g) / n),
      T = (e + a) / 2 + (u * C - p * E),
      S = (t + l) / 2 + (p * C + u * E),
      A = (g - C) / n,
      O = (v - E) / r,
      P = (-g - C) / n,
      F = (-v - E) / r,
      L = A * A + O * O,
      N = (O < 0 ? -1 : 1) * Math.acos(A / oF(L)),
      I =
        (A * F - O * P < 0 ? -1 : 1) *
        Math.acos((A * P + O * F) / oF(L * (P * P + F * F)));
    isNaN(I) && (I = d),
      !s && I > 0 ? (I -= f) : s && I < 0 && (I += f),
      (N %= f),
      (I %= f);
    var R,
      M = Math.ceil(rF(I) / (f / 4)),
      B = [],
      j = I / M,
      $ = ((4 / 3) * tF(j / 2)) / (1 + nF(j / 2)),
      U = u * n,
      q = p * n,
      H = p * -r,
      z = u * r;
    for (R = 0; R < M; R++)
      (g = nF((o = N + R * j))),
        (v = tF(o)),
        (A = nF((o += j))),
        (O = tF(o)),
        B.push(g - $ * v, v + $ * g, A + $ * O, O - $ * A, A, O);
    for (R = 0; R < B.length; R += 2)
      (g = B[R]),
        (v = B[R + 1]),
        (B[R] = g * U + v * H + T),
        (B[R + 1] = g * q + v * z + S);
    return (B[R - 2] = a), (B[R - 1] = l), B;
  }
}
var lF,
  cF,
  uF = function () {
    return (
      lF ||
      ("undefined" != typeof window &&
        (lF = window.gsap) &&
        lF.registerPlugin &&
        lF)
    );
  },
  pF = function () {
    (lF = uF()) && (lF.registerEase("_CE", gF.create), (cF = 1));
  },
  dF = function (e) {
    return ~~(1e3 * e + (e < 0 ? -0.5 : 0.5)) / 1e3;
  },
  fF = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,
  hF = /[cLlsSaAhHvVtTqQ]/g,
  mF = function e(t, n, r, o, i, s, a, l, c, u, p) {
    var d,
      f = (t + r) / 2,
      h = (n + o) / 2,
      m = (r + i) / 2,
      g = (o + s) / 2,
      v = (i + a) / 2,
      y = (s + l) / 2,
      b = (f + m) / 2,
      _ = (h + g) / 2,
      w = (m + v) / 2,
      D = (g + y) / 2,
      x = (b + w) / 2,
      k = (_ + D) / 2,
      C = a - t,
      E = l - n,
      T = Math.abs((r - a) * E - (o - l) * C),
      S = Math.abs((i - a) * E - (s - l) * C);
    return (
      u ||
        ((u = [
          { x: t, y: n },
          { x: a, y: l },
        ]),
        (p = 1)),
      u.splice(p || u.length - 1, 0, { x: x, y: k }),
      (T + S) * (T + S) > c * (C * C + E * E) &&
        ((d = u.length),
        e(t, n, f, h, b, _, x, k, c, u, p),
        e(x, k, w, D, v, y, a, l, c, u, p + 1 + (u.length - d))),
      u
    );
  },
  gF = (function () {
    function e(e, t, n) {
      cF || pF(), (this.id = e), this.setData(t, n);
    }
    var t = e.prototype;
    return (
      (t.setData = function (e, t) {
        t = t || {};
        var n,
          r,
          o,
          i,
          s,
          a,
          l,
          c,
          u,
          p = (e = e || "0,0,1,1").match(fF),
          d = 1,
          f = [],
          h = [],
          m = t.precision || 1,
          g = m <= 1;
        if (
          ((this.data = e),
          (hF.test(e) || (~e.indexOf("M") && e.indexOf("C") < 0)) &&
            (p = (function (e) {
              var t,
                n,
                r,
                o,
                i,
                s,
                a,
                l,
                c,
                u,
                p,
                d,
                f,
                h,
                m,
                g =
                  (e + "")
                    .replace(ZP, function (e) {
                      var t = +e;
                      return t < 1e-4 && t > -1e-4 ? 0 : t;
                    })
                    .match(QP) || [],
                v = [],
                y = 0,
                b = 0,
                _ = 2 / 3,
                w = g.length,
                D = 0,
                x = function (e, t, n, r) {
                  (u = (n - e) / 3),
                    (p = (r - t) / 3),
                    a.push(e + u, t + p, n - u, r - p, n, r);
                };
              if (!e || !isNaN(g[0]) || isNaN(g[1])) return v;
              for (t = 0; t < w; t++)
                if (
                  ((f = i),
                  isNaN(g[t]) ? (s = (i = g[t].toUpperCase()) !== g[t]) : t--,
                  (r = +g[t + 1]),
                  (o = +g[t + 2]),
                  s && ((r += y), (o += b)),
                  t || ((l = r), (c = o)),
                  "M" === i)
                )
                  a && (a.length < 8 ? (v.length -= 1) : (D += a.length)),
                    (y = l = r),
                    (b = c = o),
                    (a = [r, o]),
                    v.push(a),
                    (t += 2),
                    (i = "L");
                else if ("C" === i)
                  a || (a = [0, 0]),
                    s || (y = b = 0),
                    a.push(
                      r,
                      o,
                      y + 1 * g[t + 3],
                      b + 1 * g[t + 4],
                      (y += 1 * g[t + 5]),
                      (b += 1 * g[t + 6])
                    ),
                    (t += 6);
                else if ("S" === i)
                  (u = y),
                    (p = b),
                    ("C" !== f && "S" !== f) ||
                      ((u += y - a[a.length - 4]), (p += b - a[a.length - 3])),
                    s || (y = b = 0),
                    a.push(
                      u,
                      p,
                      r,
                      o,
                      (y += 1 * g[t + 3]),
                      (b += 1 * g[t + 4])
                    ),
                    (t += 4);
                else if ("Q" === i)
                  (u = y + (r - y) * _),
                    (p = b + (o - b) * _),
                    s || (y = b = 0),
                    (y += 1 * g[t + 3]),
                    (b += 1 * g[t + 4]),
                    a.push(u, p, y + (r - y) * _, b + (o - b) * _, y, b),
                    (t += 4);
                else if ("T" === i)
                  (u = y - a[a.length - 4]),
                    (p = b - a[a.length - 3]),
                    a.push(
                      y + u,
                      b + p,
                      r + (y + 1.5 * u - r) * _,
                      o + (b + 1.5 * p - o) * _,
                      (y = r),
                      (b = o)
                    ),
                    (t += 2);
                else if ("H" === i) x(y, b, (y = r), b), (t += 1);
                else if ("V" === i)
                  x(y, b, y, (b = r + (s ? b - y : 0))), (t += 1);
                else if ("L" === i || "Z" === i)
                  "Z" === i && ((r = l), (o = c), (a.closed = !0)),
                    ("L" === i || rF(y - r) > 0.5 || rF(b - o) > 0.5) &&
                      (x(y, b, r, o), "L" === i && (t += 2)),
                    (y = r),
                    (b = o);
                else if ("A" === i) {
                  if (
                    ((h = g[t + 4]),
                    (m = g[t + 5]),
                    (u = g[t + 6]),
                    (p = g[t + 7]),
                    (n = 7),
                    h.length > 1 &&
                      (h.length < 3
                        ? ((p = u), (u = m), n--)
                        : ((p = m), (u = h.substr(2)), (n -= 2)),
                      (m = h.charAt(1)),
                      (h = h.charAt(0))),
                    (d = aF(
                      y,
                      b,
                      +g[t + 1],
                      +g[t + 2],
                      +g[t + 3],
                      +h,
                      +m,
                      (s ? y : 0) + 1 * u,
                      (s ? b : 0) + 1 * p
                    )),
                    (t += n),
                    d)
                  )
                    for (n = 0; n < d.length; n++) a.push(d[n]);
                  (y = a[a.length - 2]), (b = a[a.length - 1]);
                }
              return (
                (t = a.length) < 6
                  ? (v.pop(), (t = 0))
                  : a[0] === a[t - 2] && a[1] === a[t - 1] && (a.closed = !0),
                (v.totalPoints = D + t),
                v
              );
            })(e)[0]),
          4 === (n = p.length))
        )
          p.unshift(0, 0), p.push(1, 1), (n = 8);
        else if ((n - 2) % 6) throw "Invalid CustomEase";
        for (
          (0 == +p[0] && 1 == +p[n - 2]) ||
            (function (e, t, n) {
              n || 0 === n || (n = Math.max(+e[e.length - 1], +e[1]));
              var r,
                o = -1 * +e[0],
                i = -n,
                s = e.length,
                a = 1 / (+e[s - 2] + o),
                l =
                  -t ||
                  (Math.abs(+e[s - 1] - +e[1]) < 0.01 * (+e[s - 2] - +e[0])
                    ? (function (e) {
                        var t,
                          n = e.length,
                          r = 1e20;
                        for (t = 1; t < n; t += 6) +e[t] < r && (r = +e[t]);
                        return r;
                      })(e) + i
                    : +e[s - 1] + i);
              for (l = l ? 1 / l : -a, r = 0; r < s; r += 2)
                (e[r] = (+e[r] + o) * a), (e[r + 1] = (+e[r + 1] + i) * l);
            })(p, t.height, t.originY),
            this.segment = p,
            i = 2;
          i < n;
          i += 6
        )
          (r = { x: +p[i - 2], y: +p[i - 1] }),
            (o = { x: +p[i + 4], y: +p[i + 5] }),
            f.push(r, o),
            mF(
              r.x,
              r.y,
              +p[i],
              +p[i + 1],
              +p[i + 2],
              +p[i + 3],
              o.x,
              o.y,
              1 / (2e5 * m),
              f,
              f.length - 1
            );
        for (n = f.length, i = 0; i < n; i++)
          (l = f[i]),
            (c = f[i - 1] || l),
            (l.x > c.x || (c.y !== l.y && c.x === l.x) || l === c) && l.x <= 1
              ? ((c.cx = l.x - c.x),
                (c.cy = l.y - c.y),
                (c.n = l),
                (c.nx = l.x),
                g &&
                  i > 1 &&
                  Math.abs(c.cy / c.cx - f[i - 2].cy / f[i - 2].cx) > 2 &&
                  (g = 0),
                c.cx < d &&
                  (c.cx
                    ? (d = c.cx)
                    : ((c.cx = 0.001),
                      i === n - 1 &&
                        ((c.x -= 0.001), (d = Math.min(d, 0.001)), (g = 0)))))
              : (f.splice(i--, 1), n--);
        if (((s = 1 / (n = (1 / d + 1) | 0)), (a = 0), (l = f[0]), g)) {
          for (i = 0; i < n; i++)
            (u = i * s),
              l.nx < u && (l = f[++a]),
              (r = l.y + ((u - l.x) / l.cx) * l.cy),
              (h[i] = { x: u, cx: s, y: r, cy: 0, nx: 9 }),
              i && (h[i - 1].cy = r - h[i - 1].y);
          h[n - 1].cy = f[f.length - 1].y - r;
        } else {
          for (i = 0; i < n; i++) l.nx < i * s && (l = f[++a]), (h[i] = l);
          a < f.length - 1 && (h[i - 1] = f[f.length - 2]);
        }
        return (
          (this.ease = function (e) {
            var t = h[(e * n) | 0] || h[n - 1];
            return t.nx < e && (t = t.n), t.y + ((e - t.x) / t.cx) * t.cy;
          }),
          (this.ease.custom = this),
          this.id && lF && lF.registerEase(this.id, this.ease),
          this
        );
      }),
      (t.getSVGData = function (t) {
        return e.getSVGData(this, t);
      }),
      (e.create = function (t, n, r) {
        return new e(t, n, r).ease;
      }),
      (e.register = function (e) {
        (lF = e), pF();
      }),
      (e.get = function (e) {
        return lF.parseEase(e);
      }),
      (e.getSVGData = function (t, n) {
        var r,
          o,
          i,
          s,
          a,
          l,
          c,
          u,
          p,
          d,
          f = (n = n || {}).width || 100,
          h = n.height || 100,
          m = n.x || 0,
          g = (n.y || 0) + h,
          v = lF.utils.toArray(n.path)[0];
        if (
          (n.invert && ((h = -h), (g = 0)),
          "string" == typeof t && (t = lF.parseEase(t)),
          t.custom && (t = t.custom),
          t instanceof e)
        )
          r = (function (e) {
            "number" == typeof e[0] && (e = [e]);
            var t,
              n,
              r,
              o,
              i = "",
              s = e.length;
            for (n = 0; n < s; n++) {
              for (
                o = e[n],
                  i += "M" + sF(o[0]) + "," + sF(o[1]) + " C",
                  t = o.length,
                  r = 2;
                r < t;
                r++
              )
                i +=
                  sF(o[r++]) +
                  "," +
                  sF(o[r++]) +
                  " " +
                  sF(o[r++]) +
                  "," +
                  sF(o[r++]) +
                  " " +
                  sF(o[r++]) +
                  "," +
                  sF(o[r]) +
                  " ";
              o.closed && (i += "z");
            }
            return i;
          })(
            (function (e, t, n, r, o, i, s) {
              for (var a, l, c, u, p, d = e.length; --d > -1; )
                for (l = (a = e[d]).length, c = 0; c < l; c += 2)
                  (u = a[c]),
                    (p = a[c + 1]),
                    (a[c] = u * t + p * r + i),
                    (a[c + 1] = u * n + p * o + s);
              return (e._dirty = 1), e;
            })([t.segment], f, 0, 0, -h, m, g)
          );
        else {
          for (
            r = [m, g],
              s = 1 / (c = Math.max(5, 200 * (n.precision || 1))),
              u = 5 / (c += 2),
              p = dF(m + s * f),
              o = ((d = dF(g + t(s) * -h)) - g) / (p - m),
              i = 2;
            i < c;
            i++
          )
            (a = dF(m + i * s * f)),
              (l = dF(g + t(i * s) * -h)),
              (Math.abs((l - d) / (a - p) - o) > u || i === c - 1) &&
                (r.push(p, d), (o = (l - d) / (a - p))),
              (p = a),
              (d = l);
          r = "M" + r.join(",");
        }
        return v && v.setAttribute("d", r), r;
      }),
      e
    );
  })();
uF() && lF.registerPlugin(gF), (gF.version = "3.12.5");
var vF,
  yF,
  bF,
  _F,
  wF,
  DF,
  xF,
  kF,
  CF = function () {
    return "undefined" != typeof window;
  },
  EF = function () {
    return vF || (CF() && (vF = window.gsap) && vF.registerPlugin && vF);
  },
  TF = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
  SF = {
    rect: ["width", "height"],
    circle: ["r", "r"],
    ellipse: ["rx", "ry"],
    line: ["x2", "y2"],
  },
  AF = function (e) {
    return Math.round(1e4 * e) / 1e4;
  },
  OF = function (e) {
    return parseFloat(e) || 0;
  },
  PF = function (e, t) {
    var n = OF(e);
    return ~e.indexOf("%") ? (n / 100) * t : n;
  },
  FF = function (e, t) {
    return OF(e.getAttribute(t));
  },
  LF = Math.sqrt,
  NF = function (e, t, n, r, o, i) {
    return LF(
      Math.pow((OF(n) - OF(e)) * o, 2) + Math.pow((OF(r) - OF(t)) * i, 2)
    );
  },
  IF = function (e) {
    return "non-scaling-stroke" === e.getAttribute("vector-effect");
  },
  RF = function (e) {
    if (!(e = yF(e)[0])) return 0;
    var t,
      n,
      r,
      o,
      i,
      s,
      a,
      l = e.tagName.toLowerCase(),
      c = e.style,
      u = 1,
      p = 1;
    IF(e) &&
      ((p = e.getScreenCTM()),
      (u = LF(p.a * p.a + p.b * p.b)),
      (p = LF(p.d * p.d + p.c * p.c)));
    try {
      n = e.getBBox();
    } catch (iI) {}
    var d = n || { x: 0, y: 0, width: 0, height: 0 },
      f = d.x,
      h = d.y,
      m = d.width,
      g = d.height;
    if (
      ((n && (m || g)) ||
        !SF[l] ||
        ((m = FF(e, SF[l][0])),
        (g = FF(e, SF[l][1])),
        "rect" !== l && "line" !== l && ((m *= 2), (g *= 2)),
        "line" === l &&
          ((f = FF(e, "x1")),
          (h = FF(e, "y1")),
          (m = Math.abs(m - f)),
          (g = Math.abs(g - h)))),
      "path" === l)
    )
      (o = c.strokeDasharray),
        (c.strokeDasharray = "none"),
        (t = e.getTotalLength() || 0),
        AF(u) !== AF(p) && !DF && (DF = 1),
        (t *= (u + p) / 2),
        (c.strokeDasharray = o);
    else if ("rect" === l) t = 2 * m * u + 2 * g * p;
    else if ("line" === l) t = NF(f, h, f + m, h + g, u, p);
    else if ("polyline" === l || "polygon" === l)
      for (
        r = e.getAttribute("points").match(TF) || [],
          "polygon" === l && r.push(r[0], r[1]),
          t = 0,
          i = 2;
        i < r.length;
        i += 2
      )
        t += NF(r[i - 2], r[i - 1], r[i], r[i + 1], u, p) || 0;
    else
      ("circle" !== l && "ellipse" !== l) ||
        ((s = (m / 2) * u),
        (a = (g / 2) * p),
        (t = Math.PI * (3 * (s + a) - LF((3 * s + a) * (s + 3 * a)))));
    return t || 0;
  },
  MF = function (e, t) {
    if (!(e = yF(e)[0])) return [0, 0];
    t || (t = RF(e) + 1);
    var n = bF.getComputedStyle(e),
      r = n.strokeDasharray || "",
      o = OF(n.strokeDashoffset),
      i = r.indexOf(",");
    return (
      i < 0 && (i = r.indexOf(" ")),
      (r = i < 0 ? t : OF(r.substr(0, i))) > t && (r = t),
      [-o || 0, r - o || 0]
    );
  },
  BF = function () {
    CF() &&
      ((bF = window),
      (wF = vF = EF()),
      (yF = vF.utils.toArray),
      (xF = vF.core.getStyleSaver),
      (kF = vF.core.reverting || function () {}),
      (_F = -1 !== ((bF.navigator || {}).userAgent || "").indexOf("Edge")));
  },
  jF = {
    version: "3.12.5",
    name: "drawSVG",
    register: function (e) {
      (vF = e), BF();
    },
    init: function (e, t, n, r, o) {
      if (!e.getBBox) return !1;
      wF || BF();
      var i,
        s,
        a,
        l = RF(e);
      return (
        (this.styles =
          xF && xF(e, "strokeDashoffset,strokeDasharray,strokeMiterlimit")),
        (this.tween = n),
        (this._style = e.style),
        (this._target = e),
        t + "" == "true"
          ? (t = "0 100%")
          : t
          ? -1 === (t + "").indexOf(" ") && (t = "0 " + t)
          : (t = "0 0"),
        (s = (function (e, t, n) {
          var r,
            o,
            i = e.indexOf(" ");
          return (
            i < 0
              ? ((r = void 0 !== n ? n + "" : e), (o = e))
              : ((r = e.substr(0, i)), (o = e.substr(i + 1))),
            (r = PF(r, t)) > (o = PF(o, t)) ? [o, r] : [r, o]
          );
        })(t, l, (i = MF(e, l))[0])),
        (this._length = AF(l)),
        (this._dash = AF(i[1] - i[0])),
        (this._offset = AF(-i[0])),
        (this._dashPT = this.add(
          this,
          "_dash",
          this._dash,
          AF(s[1] - s[0]),
          0,
          0,
          0,
          0,
          0,
          1
        )),
        (this._offsetPT = this.add(
          this,
          "_offset",
          this._offset,
          AF(-s[0]),
          0,
          0,
          0,
          0,
          0,
          1
        )),
        _F &&
          (a = bF.getComputedStyle(e)).strokeLinecap !== a.strokeLinejoin &&
          ((s = OF(a.strokeMiterlimit)),
          this.add(e.style, "strokeMiterlimit", s, s + 0.01)),
        (this._live = IF(e) || ~(t + "").indexOf("live")),
        (this._nowrap = ~(t + "").indexOf("nowrap")),
        this._props.push("drawSVG"),
        1
      );
    },
    render: function (e, t) {
      if (t.tween._time || !kF()) {
        var n,
          r,
          o,
          i,
          s = t._pt,
          a = t._style;
        if (s) {
          for (
            t._live &&
            (n = RF(t._target)) !== t._length &&
            ((r = n / t._length),
            (t._length = n),
            t._offsetPT && ((t._offsetPT.s *= r), (t._offsetPT.c *= r)),
            t._dashPT
              ? ((t._dashPT.s *= r), (t._dashPT.c *= r))
              : (t._dash *= r));
            s;

          )
            s.r(e, s.d), (s = s._next);
          (o = t._dash || (e && 1 !== e && 1e-4) || 0),
            (n = t._length - o + 0.1),
            (i = t._offset),
            o &&
              i &&
              o + Math.abs(i % t._length) > t._length - 0.2 &&
              (i += i < 0 ? 0.1 : -0.1) &&
              (n += 0.1),
            (a.strokeDashoffset = o ? i : i + 0.001),
            (a.strokeDasharray =
              n < 0.2
                ? "none"
                : o
                ? o + "px," + (t._nowrap ? 999999 : n) + "px"
                : "0px, 999999px");
        }
      } else t.styles.revert();
    },
    getLength: RF,
    getPosition: MF,
  };
EF() && vF.registerPlugin(jF);
var $F,
  UF,
  qF,
  HF,
  zF,
  VF,
  WF,
  YF,
  XF = function () {
    return $F || ("undefined" != typeof window && ($F = window.gsap));
  },
  GF = {},
  KF = function (e) {
    return YF(e).id;
  },
  JF = function (e) {
    return GF[KF("string" == typeof e ? qF(e)[0] : e)];
  },
  QF = function (e) {
    var t,
      n = zF;
    if (e - WF >= 0.05)
      for (WF = e; n; )
        ((t = n.g(n.t, n.p)) !== n.v1 || e - n.t1 > 0.2) &&
          ((n.v2 = n.v1), (n.v1 = t), (n.t2 = n.t1), (n.t1 = e)),
          (n = n._next);
  },
  ZF = { deg: 360, rad: 2 * Math.PI },
  eL = function () {
    ($F = XF()) &&
      ((qF = $F.utils.toArray),
      (HF = $F.utils.getUnit),
      (YF = $F.core.getCache),
      (VF = $F.ticker),
      (UF = 1));
  },
  tL = function (e, t, n, r) {
    (this.t = e),
      (this.p = t),
      (this.g = e._gsap.get),
      (this.rCap = ZF[n || HF(this.g(e, t))]),
      (this.v1 = this.v2 = 0),
      (this.t1 = this.t2 = VF.time),
      r && ((this._next = r), (r._prev = this));
  },
  nL = (function () {
    function e(e, t) {
      UF || eL(),
        (this.target = qF(e)[0]),
        (GF[KF(this.target)] = this),
        (this._props = {}),
        t && this.add(t);
    }
    e.register = function (e) {
      ($F = e), eL();
    };
    var t = e.prototype;
    return (
      (t.get = function (e, t) {
        var n,
          r,
          o,
          i = this._props[e] || void 0;
        return (
          (n = parseFloat(t ? i.v1 : i.g(i.t, i.p)) - parseFloat(i.v2)),
          (r = i.rCap) &&
            (n %= r) !== n % (r / 2) &&
            (n = n < 0 ? n + r : n - r),
          (o = n / ((t ? i.t1 : VF.time) - i.t2)),
          Math.round(1e4 * o) / 1e4
        );
      }),
      (t.getAll = function () {
        var e,
          t = {},
          n = this._props;
        for (e in n) t[e] = this.get(e);
        return t;
      }),
      (t.isTracking = function (e) {
        return e in this._props;
      }),
      (t.add = function (e, t) {
        e in this._props ||
          (zF || (VF.add(QF), (WF = VF.time)),
          (zF = this._props[e] = new tL(this.target, e, t, zF)));
      }),
      (t.remove = function (e) {
        var t,
          n,
          r = this._props[e];
        r &&
          ((t = r._prev),
          (n = r._next),
          t && (t._next = n),
          n ? (n._prev = t) : zF === r && (VF.remove(QF), (zF = 0)),
          delete this._props[e]);
      }),
      (t.kill = function (e) {
        for (var t in this._props) this.remove(t);
        e || delete GF[KF(this.target)];
      }),
      (e.track = function (t, n, r) {
        UF || eL();
        for (
          var o,
            i,
            s = [],
            a = qF(t),
            l = n.split(","),
            c = (r || "").split(","),
            u = a.length;
          u--;

        ) {
          for (o = JF(a[u]) || new e(a[u]), i = l.length; i--; )
            o.add(l[i], c[i] || c[0]);
          s.push(o);
        }
        return s;
      }),
      (e.untrack = function (e, t) {
        var n = (t || "").split(",");
        qF(e).forEach(function (e) {
          var t = JF(e);
          t &&
            (n.length
              ? n.forEach(function (e) {
                  return t.remove(e);
                })
              : t.kill(1));
        });
      }),
      (e.isTracking = function (e, t) {
        var n = JF(e);
        return n && n.isTracking(t);
      }),
      (e.getVelocity = function (e, t) {
        var n = JF(e);
        return n && n.isTracking(t) ? n.get(t) : void 0;
      }),
      e
    );
  })();
(nL.getByTarget = JF), XF() && $F.registerPlugin(nL);
var rL,
  oL,
  iL,
  sL,
  aL,
  lL,
  cL,
  uL,
  pL,
  dL,
  fL,
  hL,
  mL,
  gL,
  vL = nL.getByTarget,
  yL = function () {
    return (
      rL ||
      ("undefined" != typeof window &&
        (rL = window.gsap) &&
        rL.registerPlugin &&
        rL)
    );
  },
  bL = function (e) {
    return "number" == typeof e;
  },
  _L = function (e) {
    return "object" == typeof e;
  },
  wL = function (e) {
    return "function" == typeof e;
  },
  DL = Array.isArray,
  xL = function (e) {
    return e;
  },
  kL = 1e10,
  CL = function (e, t, n) {
    for (var r in t) r in e || r === n || (e[r] = t[r]);
    return e;
  },
  EL = function e(t) {
    var n,
      r,
      o = {};
    for (n in t) o[n] = _L((r = t[n])) && !DL(r) ? e(r) : r;
    return o;
  },
  TL = function (e, t, n, r, o) {
    var i,
      s,
      a,
      l,
      c = t.length,
      u = 0,
      p = kL;
    if (_L(e)) {
      for (; c--; ) {
        for (a in ((i = t[c]), (s = 0), e)) s += (l = i[a] - e[a]) * l;
        s < p && ((u = c), (p = s));
      }
      if ((o || kL) < kL && o < Math.sqrt(p)) return e;
    } else
      for (; c--; )
        (s = (i = t[c]) - e) < 0 && (s = -s),
          s < p && i >= r && i <= n && ((u = c), (p = s));
    return t[u];
  },
  SL = function (e, t, n, r, o, i, s) {
    if ("auto" === e.end) return e;
    var a,
      l,
      c = e.end;
    if (((n = isNaN(n) ? kL : n), (r = isNaN(r) ? -kL : r), _L(t))) {
      if (
        ((a = t.calculated ? t : (wL(c) ? c(t, s) : TL(t, c, n, r, i)) || t),
        !t.calculated)
      ) {
        for (l in a) t[l] = a[l];
        t.calculated = !0;
      }
      a = a[o];
    } else a = wL(c) ? c(t, s) : DL(c) ? TL(t, c, n, r, i) : parseFloat(c);
    return (
      a > n ? (a = n) : a < r && (a = r),
      { max: a, min: a, unitFactor: e.unitFactor }
    );
  },
  AL = function (e, t, n) {
    return isNaN(e[t]) ? n : +e[t];
  },
  OL = function (e, t) {
    return (0.05 * t * e) / dL;
  },
  PL = function (e, t, n) {
    return Math.abs(((t - e) * dL) / n / 0.05);
  },
  FL = {
    resistance: 1,
    checkpoint: 1,
    preventOvershoot: 1,
    linkedProps: 1,
    radius: 1,
    duration: 1,
  },
  LL = function (e, t, n, r) {
    if (t.linkedProps) {
      var o,
        i,
        s,
        a,
        l,
        c,
        u = t.linkedProps.split(","),
        p = {};
      for (o = 0; o < u.length; o++)
        (s = t[(i = u[o])]) &&
          ((a = bL(s.velocity)
            ? s.velocity
            : (l = l || vL(e)) && l.isTracking(i)
            ? l.get(i)
            : 0),
          (c = Math.abs(a / AL(s, "resistance", r))),
          (p[i] = parseFloat(n(e, i)) + OL(a, c)));
      return p;
    }
  },
  NL = function () {
    (rL = yL()) &&
      ((iL = rL.parseEase),
      (sL = rL.utils.toArray),
      (cL = rL.utils.getUnit),
      (pL = rL.core.getCache),
      (fL = rL.utils.clamp),
      (mL = rL.core.getStyleSaver),
      (gL = rL.core.reverting || function () {}),
      (aL = iL("power3")),
      (dL = aL(0.05)),
      (uL = rL.core.PropTween),
      rL.config({
        resistance: 100,
        unitFactors: {
          time: 1e3,
          totalTime: 1e3,
          progress: 1e3,
          totalProgress: 1e3,
        },
      }),
      (lL = rL.config()),
      rL.registerPlugin(nL),
      (oL = 1));
  },
  IL = {
    version: "3.12.5",
    name: "inertia",
    register: function (e) {
      (rL = e), NL();
    },
    init: function (e, t, n, r, o) {
      oL || NL();
      var i = vL(e);
      if ("auto" === t) {
        if (!i) return;
        t = i.getAll();
      }
      (this.styles = mL && "object" == typeof e.style && mL(e)),
        (this.target = e),
        (this.tween = n),
        (hL = t);
      var s,
        a,
        l,
        c,
        u,
        p,
        d,
        f,
        h,
        m = e._gsap,
        g = m.get,
        v = t.duration,
        y = _L(v),
        b = t.preventOvershoot || (y && 0 === v.overshoot),
        _ = AL(t, "resistance", lL.resistance),
        w = bL(v)
          ? v
          : (function (e, t, n, r, o) {
              if (
                (void 0 === n && (n = 10),
                void 0 === r && (r = 0.2),
                void 0 === o && (o = 1),
                "string" == typeof e && (e = sL(e)[0]),
                !e)
              )
                return 0;
              var i,
                s,
                a,
                l,
                c,
                u,
                p,
                d,
                f,
                h,
                m = 0,
                g = kL,
                v = t.inertia || t,
                y = pL(e).get,
                b = AL(v, "resistance", lL.resistance);
              for (i in ((h = LL(e, v, y, b)), v))
                FL[i] ||
                  ((s = v[i]),
                  _L(s) ||
                    ((d = d || vL(e)) && d.isTracking(i)
                      ? (s = bL(s) ? { velocity: s } : { velocity: d.get(i) })
                      : ((l = +s || 0), (a = Math.abs(l / b)))),
                  _L(s) &&
                    ((l = bL(s.velocity)
                      ? s.velocity
                      : (d = d || vL(e)) && d.isTracking(i)
                      ? d.get(i)
                      : 0),
                    (a = fL(r, n, Math.abs(l / AL(s, "resistance", b)))),
                    (u = (c = parseFloat(y(e, i)) || 0) + OL(l, a)),
                    "end" in s &&
                      ((s = SL(
                        s,
                        h && i in h ? h : u,
                        s.max,
                        s.min,
                        i,
                        v.radius,
                        l
                      )),
                      hL === t && (hL = v = EL(t)),
                      (v[i] = CL(s, v[i], "end"))),
                    "max" in s && u > +s.max + 1e-10
                      ? ((f = s.unitFactor || lL.unitFactors[i] || 1),
                        (p =
                          (c > s.max && s.min !== s.max) ||
                          (l * f > -15 && l * f < 45)
                            ? r + 0.1 * (n - r)
                            : PL(c, s.max, l)) +
                          o <
                          g && (g = p + o))
                      : "min" in s &&
                        u < +s.min - 1e-10 &&
                        ((f = s.unitFactor || lL.unitFactors[i] || 1),
                        (p =
                          (c < s.min && s.min !== s.max) ||
                          (l * f > -45 && l * f < 15)
                            ? r + 0.1 * (n - r)
                            : PL(c, s.min, l)) +
                          o <
                          g && (g = p + o)),
                    p > m && (m = p)),
                  a > m && (m = a));
              return m > g && (m = g), m > n ? n : m < r ? r : m;
            })(
              e,
              t,
              (y && v.max) || 10,
              (y && v.min) || 0.2,
              y && "overshoot" in v ? +v.overshoot : b ? 0 : 1
            );
      for (s in ((t = hL), (hL = 0), (h = LL(e, t, g, _)), t))
        FL[s] ||
          ((a = t[s]),
          wL(a) && (a = a(r, e, o)),
          bL(a)
            ? (u = a)
            : _L(a) && !isNaN(a.velocity)
            ? (u = +a.velocity)
            : i && i.isTracking(s) && (u = i.get(s)),
          (p = OL(u, w)),
          (f = 0),
          (l = g(e, s)),
          (c = cL(l)),
          (l = parseFloat(l)),
          _L(a) &&
            ((d = l + p),
            "end" in a &&
              (a = SL(a, h && s in h ? h : d, a.max, a.min, s, t.radius, u)),
            "max" in a && +a.max < d
              ? b || a.preventOvershoot
                ? (p = a.max - l)
                : (f = a.max - l - p)
              : "min" in a &&
                +a.min > d &&
                (b || a.preventOvershoot
                  ? (p = a.min - l)
                  : (f = a.min - l - p))),
          this._props.push(s),
          this.styles && this.styles.save(s),
          (this._pt = new uL(this._pt, e, s, l, 0, xL, 0, m.set(e, s, this))),
          (this._pt.u = c || 0),
          (this._pt.c1 = p),
          (this._pt.c2 = f));
      return n.duration(w), 1;
    },
    render: function (e, t) {
      var n,
        r = t._pt;
      if ((e = aL(t.tween._time / t.tween._dur)) || !gL())
        for (; r; )
          r.set(
            r.t,
            r.p,
            ((n = r.s + r.c1 * e + r.c2 * e * e),
            Math.round(1e4 * n) / 1e4 + r.u),
            r.d,
            e
          ),
            (r = r._next);
      else t.styles.revert();
    },
  };
"track,untrack,isTracking,getVelocity,getByTarget"
  .split(",")
  .forEach(function (e) {
    return (IL[e] = nL[e]);
  }),
  yL() && rL.registerPlugin(IL);
var RL =
  /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
function ML(e) {
  var t = e.nodeType,
    n = "";
  if (1 === t || 9 === t || 11 === t) {
    if ("string" == typeof e.textContent) return e.textContent;
    for (e = e.firstChild; e; e = e.nextSibling) n += ML(e);
  } else if (3 === t || 4 === t) return e.nodeValue;
  return n;
}
var BL,
  jL,
  $L,
  UL,
  qL,
  HL,
  zL = /(?:\r|\n|\t\t)/g,
  VL = /(?:\s\s+)/g,
  WL = String.fromCharCode(160),
  YL = function (e) {
    (BL = document),
      (jL = window),
      (UL = UL || e || jL.gsap || void 0) &&
        ((HL = UL.utils.toArray),
        (qL = UL.core.context || function () {}),
        ($L = 1));
  },
  XL = function (e) {
    return jL.getComputedStyle(e);
  },
  GL = function (e) {
    return "absolute" === e.position || !0 === e.absolute;
  },
  KL = function (e, t) {
    for (var n, r = t.length; --r > -1; )
      if (((n = t[r]), e.substr(0, n.length) === n)) return n.length;
  },
  JL = function (e, t) {
    void 0 === e && (e = "");
    var n = ~e.indexOf("++"),
      r = 1;
    return (
      n && (e = e.split("++").join("")),
      function () {
        return (
          "<" +
          t +
          " style='position:relative;display:inline-block;'" +
          (e ? " class='" + e + (n ? r++ : "") + "'>" : ">")
        );
      }
    );
  },
  QL = function e(t, n, r) {
    var o = t.nodeType;
    if (1 === o || 9 === o || 11 === o)
      for (t = t.firstChild; t; t = t.nextSibling) e(t, n, r);
    else (3 !== o && 4 !== o) || (t.nodeValue = t.nodeValue.split(n).join(r));
  },
  ZL = function (e, t) {
    for (var n = t.length; --n > -1; ) e.push(t[n]);
  },
  eN = function (e, t, n) {
    for (var r; e && e !== t; ) {
      if ((r = e._next || e.nextSibling)) return r.textContent.charAt(0) === n;
      e = e.parentNode || e._parent;
    }
  },
  tN = function e(t) {
    var n,
      r,
      o = HL(t.childNodes),
      i = o.length;
    for (n = 0; n < i; n++)
      (r = o[n])._isSplit
        ? e(r)
        : n && r.previousSibling && 3 === r.previousSibling.nodeType
        ? ((r.previousSibling.nodeValue +=
            3 === r.nodeType ? r.nodeValue : r.firstChild.nodeValue),
          t.removeChild(r))
        : 3 !== r.nodeType &&
          (t.insertBefore(r.firstChild, r), t.removeChild(r));
  },
  nN = function (e, t) {
    return parseFloat(t[e]) || 0;
  },
  rN = function (e, t, n, r, o, i, s) {
    var a,
      l,
      c,
      u,
      p,
      d,
      f,
      h,
      m,
      g,
      v,
      y,
      b = XL(e),
      _ = nN("paddingLeft", b),
      w = -999,
      D = nN("borderBottomWidth", b) + nN("borderTopWidth", b),
      x = nN("borderLeftWidth", b) + nN("borderRightWidth", b),
      k = nN("paddingTop", b) + nN("paddingBottom", b),
      C = nN("paddingLeft", b) + nN("paddingRight", b),
      E = nN("fontSize", b) * (t.lineThreshold || 0.2),
      T = b.textAlign,
      S = [],
      A = [],
      O = [],
      P = t.wordDelimiter || " ",
      F = t.tag ? t.tag : t.span ? "span" : "div",
      L = t.type || t.split || "chars,words,lines",
      N = o && ~L.indexOf("lines") ? [] : null,
      I = ~L.indexOf("words"),
      R = ~L.indexOf("chars"),
      M = GL(t),
      B = t.linesClass,
      j = ~(B || "").indexOf("++"),
      $ = [],
      U = "flex" === b.display,
      q = e.style.display;
    for (
      j && (B = B.split("++").join("")),
        U && (e.style.display = "block"),
        c = (l = e.getElementsByTagName("*")).length,
        p = [],
        a = 0;
      a < c;
      a++
    )
      p[a] = l[a];
    if (N || M)
      for (a = 0; a < c; a++)
        ((d = (u = p[a]).parentNode === e) || M || (R && !I)) &&
          ((y = u.offsetTop),
          N &&
            d &&
            Math.abs(y - w) > E &&
            ("BR" !== u.nodeName || 0 === a) &&
            ((f = []), N.push(f), (w = y)),
          M &&
            ((u._x = u.offsetLeft),
            (u._y = y),
            (u._w = u.offsetWidth),
            (u._h = u.offsetHeight)),
          N &&
            (((u._isSplit && d) ||
              (!R && d) ||
              (I && d) ||
              (!I &&
                u.parentNode.parentNode === e &&
                !u.parentNode._isSplit)) &&
              (f.push(u), (u._x -= _), eN(u, e, P) && (u._wordEnd = !0)),
            "BR" === u.nodeName &&
              ((u.nextSibling && "BR" === u.nextSibling.nodeName) || 0 === a) &&
              N.push([])));
    for (a = 0; a < c; a++)
      if (((d = (u = p[a]).parentNode === e), "BR" !== u.nodeName))
        if (
          (M &&
            ((m = u.style),
            I || d || ((u._x += u.parentNode._x), (u._y += u.parentNode._y)),
            (m.left = u._x + "px"),
            (m.top = u._y + "px"),
            (m.position = "absolute"),
            (m.display = "block"),
            (m.width = u._w + 1 + "px"),
            (m.height = u._h + "px")),
          !I && R)
        )
          if (u._isSplit)
            for (
              u._next = l = u.nextSibling, u.parentNode.appendChild(u);
              l && 3 === l.nodeType && " " === l.textContent;

            )
              (u._next = l.nextSibling),
                u.parentNode.appendChild(l),
                (l = l.nextSibling);
          else
            u.parentNode._isSplit
              ? ((u._parent = u.parentNode),
                !u.previousSibling &&
                  u.firstChild &&
                  (u.firstChild._isFirst = !0),
                u.nextSibling &&
                  " " === u.nextSibling.textContent &&
                  !u.nextSibling.nextSibling &&
                  $.push(u.nextSibling),
                (u._next =
                  u.nextSibling && u.nextSibling._isFirst
                    ? null
                    : u.nextSibling),
                u.parentNode.removeChild(u),
                p.splice(a--, 1),
                c--)
              : d ||
                ((y = !u.nextSibling && eN(u.parentNode, e, P)),
                u.parentNode._parent && u.parentNode._parent.appendChild(u),
                y && u.parentNode.appendChild(BL.createTextNode(" ")),
                "span" === F && (u.style.display = "inline"),
                S.push(u));
        else
          u.parentNode._isSplit && !u._isSplit && "" !== u.innerHTML
            ? A.push(u)
            : R &&
              !u._isSplit &&
              ("span" === F && (u.style.display = "inline"), S.push(u));
      else
        N || M
          ? (u.parentNode && u.parentNode.removeChild(u), p.splice(a--, 1), c--)
          : I || e.appendChild(u);
    for (a = $.length; --a > -1; ) $[a].parentNode.removeChild($[a]);
    if (N) {
      for (
        M &&
          ((g = BL.createElement(F)),
          e.appendChild(g),
          (v = g.offsetWidth + "px"),
          (y = g.offsetParent === e ? 0 : e.offsetLeft),
          e.removeChild(g)),
          m = e.style.cssText,
          e.style.cssText = "display:none;";
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (h = " " === P && (!M || (!I && !R)), a = 0; a < N.length; a++) {
        for (
          f = N[a],
            (g = BL.createElement(F)).style.cssText =
              "display:block;text-align:" +
              T +
              ";position:" +
              (M ? "absolute;" : "relative;"),
            B && (g.className = B + (j ? a + 1 : "")),
            O.push(g),
            c = f.length,
            l = 0;
          l < c;
          l++
        )
          "BR" !== f[l].nodeName &&
            ((u = f[l]),
            g.appendChild(u),
            h && u._wordEnd && g.appendChild(BL.createTextNode(" ")),
            M &&
              (0 === l &&
                ((g.style.top = u._y + "px"), (g.style.left = _ + y + "px")),
              (u.style.top = "0px"),
              y && (u.style.left = u._x - y + "px")));
        0 === c
          ? (g.innerHTML = "&nbsp;")
          : I || R || (tN(g), QL(g, String.fromCharCode(160), " ")),
          M && ((g.style.width = v), (g.style.height = u._h + "px")),
          e.appendChild(g);
      }
      e.style.cssText = m;
    }
    M &&
      (s > e.clientHeight &&
        ((e.style.height = s - k + "px"),
        e.clientHeight < s && (e.style.height = s + D + "px")),
      i > e.clientWidth &&
        ((e.style.width = i - C + "px"),
        e.clientWidth < i && (e.style.width = i + x + "px"))),
      U && (q ? (e.style.display = q) : e.style.removeProperty("display")),
      ZL(n, S),
      I && ZL(r, A),
      ZL(o, O);
  },
  oN = function (e, t, n, r) {
    var o,
      i,
      s,
      a,
      l,
      c,
      u,
      p,
      d = t.tag ? t.tag : t.span ? "span" : "div",
      f = ~(t.type || t.split || "chars,words,lines").indexOf("chars"),
      h = GL(t),
      m = t.wordDelimiter || " ",
      g = function (e) {
        return e === m || (e === WL && " " === m);
      },
      v = " " !== m ? "" : h ? "&#173; " : " ",
      y = "</" + d + ">",
      b = 1,
      _ = t.specialChars
        ? "function" == typeof t.specialChars
          ? t.specialChars
          : KL
        : null,
      w = BL.createElement("div"),
      D = e.parentNode;
    for (
      D.insertBefore(w, e),
        w.textContent = e.nodeValue,
        D.removeChild(e),
        u = -1 !== (o = ML((e = w))).indexOf("<"),
        !1 !== t.reduceWhiteSpace && (o = o.replace(VL, " ").replace(zL, "")),
        u && (o = o.split("<").join("{{LT}}")),
        l = o.length,
        i = (" " === o.charAt(0) ? v : "") + n(),
        s = 0;
      s < l;
      s++
    )
      if (((c = o.charAt(s)), _ && (p = _(o.substr(s), t.specialChars))))
        (c = o.substr(s, p || 1)),
          (i += f && " " !== c ? r() + c + "</" + d + ">" : c),
          (s += p - 1);
      else if (g(c) && !g(o.charAt(s - 1)) && s) {
        for (i += b ? y : "", b = 0; g(o.charAt(s + 1)); ) (i += v), s++;
        s === l - 1
          ? (i += v)
          : ")" !== o.charAt(s + 1) && ((i += v + n()), (b = 1));
      } else
        "{" === c && "{{LT}}" === o.substr(s, 6)
          ? ((i += f ? r() + "{{LT}}</" + d + ">" : "{{LT}}"), (s += 5))
          : (c.charCodeAt(0) >= 55296 && c.charCodeAt(0) <= 56319) ||
            (o.charCodeAt(s + 1) >= 65024 && o.charCodeAt(s + 1) <= 65039)
          ? ((a = ((o.substr(s, 12).split(RL) || [])[1] || "").length || 2),
            (i +=
              f && " " !== c
                ? r() + o.substr(s, a) + "</" + d + ">"
                : o.substr(s, a)),
            (s += a - 1))
          : (i += f && " " !== c ? r() + c + "</" + d + ">" : c);
    (e.outerHTML = i + (b ? y : "")), u && QL(D, "{{LT}}", "<");
  },
  iN = function e(t, n, r, o) {
    var i,
      s,
      a = HL(t.childNodes),
      l = a.length,
      c = GL(n);
    if (3 !== t.nodeType || l > 1) {
      for (n.absolute = !1, i = 0; i < l; i++)
        ((s = a[i])._next = s._isFirst = s._parent = s._wordEnd = null),
          (3 !== s.nodeType || /\S+/.test(s.nodeValue)) &&
            (c &&
              3 !== s.nodeType &&
              "inline" === XL(s).display &&
              ((s.style.display = "inline-block"),
              (s.style.position = "relative")),
            (s._isSplit = !0),
            e(s, n, r, o));
      return (n.absolute = c), void (t._isSplit = !0);
    }
    oN(t, n, r, o);
  },
  sN = (function () {
    function e(e, t) {
      $L || YL(),
        (this.elements = HL(e)),
        (this.chars = []),
        (this.words = []),
        (this.lines = []),
        (this._originals = []),
        (this.vars = t || {}),
        qL(this),
        this.split(t);
    }
    var t = e.prototype;
    return (
      (t.split = function (e) {
        this.isSplit && this.revert(),
          (this.vars = e = e || this.vars),
          (this._originals.length =
            this.chars.length =
            this.words.length =
            this.lines.length =
              0);
        for (
          var t,
            n,
            r,
            o = this.elements.length,
            i = e.tag ? e.tag : e.span ? "span" : "div",
            s = JL(e.wordsClass, i),
            a = JL(e.charsClass, i);
          --o > -1;

        )
          (r = this.elements[o]),
            (this._originals[o] = {
              html: r.innerHTML,
              style: r.getAttribute("style"),
            }),
            (t = r.clientHeight),
            (n = r.clientWidth),
            iN(r, e, s, a),
            rN(r, e, this.chars, this.words, this.lines, n, t);
        return (
          this.chars.reverse(),
          this.words.reverse(),
          this.lines.reverse(),
          (this.isSplit = !0),
          this
        );
      }),
      (t.revert = function () {
        var e = this._originals;
        if (!e) throw "revert() call wasn't scoped properly.";
        return (
          this.elements.forEach(function (t, n) {
            (t.innerHTML = e[n].html), t.setAttribute("style", e[n].style);
          }),
          (this.chars = []),
          (this.words = []),
          (this.lines = []),
          (this.isSplit = !1),
          this
        );
      }),
      (e.create = function (t, n) {
        return new e(t, n);
      }),
      e
    );
  })();
(sN.version = "3.12.5"), (sN.register = YL);
const aN = [
    up,
    Mp,
    Sh,
    Ah,
    Oh,
    Ph,
    Fh,
    qh,
    Hh,
    zh,
    Wh,
    em,
    sm,
    Gg,
    _w,
    ww,
    $l(
      () => (
        TE.registerPlugin(LA, dT, sO, JP, gF, jF, IL, sN),
        {
          provide: {
            gsap: TE,
            ScrollTrigger: LA,
            Observer: dT,
            ScrollToPlugin: sO,
            Draggable: JP,
            CustomEase: gF,
            DrawSVGPlugin: jF,
            InertiaPlugin: IL,
            SplitText: sN,
          },
        }
      )
    ),
  ],
  lN = Un({
    props: {
      vnode: { type: Object, required: !0 },
      route: { type: Object, required: !0 },
      vnodeRef: Object,
      renderKey: String,
      trackRootNodes: Boolean,
    },
    setup(e) {
      const t = e.renderKey,
        n = e.route,
        r = {};
      for (const o in e.route)
        Object.defineProperty(r, o, {
          get: () => (t === e.renderKey ? e.route[o] : n[o]),
          enumerable: !0,
        });
      return to(Ic, ht(r)), () => zi(e.vnode, { ref: e.vnodeRef });
    },
  }),
  cN = Un({
    name: "NuxtPage",
    inheritAttrs: !1,
    props: {
      name: { type: String },
      transition: { type: [Boolean, Object], default: void 0 },
      keepalive: { type: [Boolean, Object], default: void 0 },
      route: { type: Object },
      pageKey: { type: [Function, String], default: null },
    },
    setup(e, { attrs: t, slots: n, expose: r }) {
      const o = ql(),
        i = Et(),
        s = no(Ic, null);
      let a;
      r({ pageRef: i });
      const l = no(Nc, null);
      let c;
      const u = o.deferHydration();
      if (o.isHydrating) {
        const e = o.hooks.hookOnce("app:error", u);
        Rc().beforeEach(e);
      }
      return (
        e.pageKey &&
          Ao(
            () => e.pageKey,
            (e, t) => {
              e !== t && o.callHook("page:loading:start");
            }
          ),
        () =>
          zi(
            vf,
            { name: e.name, route: e.route, ...t },
            {
              default: (t) => {
                const r = (function (e, t, n) {
                    if (!e) return !1;
                    const r = t.matched.findIndex((e) => {
                      var t;
                      return (
                        (null == (t = e.components) ? void 0 : t.default) ===
                        (null == n ? void 0 : n.type)
                      );
                    });
                    if (!r || -1 === r) return !1;
                    return (
                      t.matched.slice(0, r).some((t, n) => {
                        var r, o, i;
                        return (
                          (null == (r = t.components) ? void 0 : r.default) !==
                          (null ==
                          (i =
                            null == (o = e.matched[n]) ? void 0 : o.components)
                            ? void 0
                            : i.default)
                        );
                      }) ||
                      (n &&
                        Df({ route: t, Component: n }) !==
                          Df({ route: e, Component: n }))
                    );
                  })(s, t.route, t.Component),
                  p = s && s.matched.length === t.route.matched.length;
                if (!t.Component) return c && !p ? c : void u();
                if (c && l && !l.isCurrent(t.route)) return c;
                if (r && s && (!l || (null == l ? void 0 : l.isCurrent(s))))
                  return p ? c : null;
                const d = Df(t, e.pageKey);
                o.isHydrating ||
                  (function (e, t, n) {
                    if (!e) return !1;
                    const r = t.matched.findIndex((e) => {
                      var t;
                      return (
                        (null == (t = e.components) ? void 0 : t.default) ===
                        (null == n ? void 0 : n.type)
                      );
                    });
                    return r < t.matched.length - 1;
                  })(s, t.route, t.Component) ||
                  a !== d ||
                  o.callHook("page:loading:end"),
                  (a = d);
                const f = !!(e.transition ?? t.route.meta.pageTransition ?? Ol),
                  h =
                    f &&
                    (function (e) {
                      const t = e.map((e) => ({
                        ...e,
                        onAfterLeave: e.onAfterLeave
                          ? xf(e.onAfterLeave)
                          : void 0,
                      }));
                      return Cc(...t);
                    })(
                      [
                        e.transition,
                        t.route.meta.pageTransition,
                        Ol,
                        {
                          onAfterLeave: () => {
                            o.callHook("page:transition:finish", t.Component);
                          },
                        },
                      ].filter(Boolean)
                    ),
                  m = e.keepalive ?? t.route.meta.keepalive ?? false;
                return (
                  (c = Ff(
                    rs,
                    f && h,
                    ((e, t) => ({
                      default: () => (e ? zi(nr, !0 === e ? {} : e, t) : t),
                    }))(
                      m,
                      zi(
                        Wo,
                        {
                          suspensible: !0,
                          onPending: () =>
                            o.callHook("page:start", t.Component),
                          onResolve: () => {
                            tn(() =>
                              o
                                .callHook("page:finish", t.Component)
                                .then(() => o.callHook("page:loading:end"))
                                .finally(u)
                            );
                          },
                        },
                        {
                          default: () => {
                            const e = zi(lN, {
                              key: d || void 0,
                              vnode: n.default
                                ? zi(Qo, void 0, n.default(t))
                                : t.Component,
                              route: t.route,
                              renderKey: d || void 0,
                              trackRootNodes: f,
                              vnodeRef: i,
                            });
                            return (
                              m &&
                                (e.type.name =
                                  t.Component.type.name ||
                                  t.Component.type.__name ||
                                  "RouteProvider"),
                              e
                            );
                          },
                        }
                      )
                    )
                  ).default()),
                  c
                );
              },
            }
          )
      );
    },
  });
const uN = { class: "cookie-consent" },
  pN = { class: "cookie-consent__title" },
  dN = { class: "cookie-consent__content" },
  fN = { class: "cookie-consent__buttons" },
  hN = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, o] of t) n[r] = o;
    return n;
  },
  mN = hN(
    Un({
      __name: "CookieConsent",
      emits: ["close", "allow"],
      setup(e, { emit: t }) {
        const n = t,
          r = yw(),
          o = () => {
            n("close");
          },
          i = () => {
            n("allow");
          };
        return (e, t) => {
          const n = rh;
          return (
            oi(),
            ci("div", uN, [
              mi("div", pN, Q(e.$t("cookieConsent.title")), 1),
              mi("div", dN, [
                yi(Q(e.$t("cookieConsent.text")) + " ", 1),
                gi(
                  n,
                  { to: Ot(r)("/privacy-policy") },
                  {
                    default: fn(() => [yi(Q(e.$t("cookieConsent.link")), 1)]),
                    _: 1,
                  },
                  8,
                  ["to"]
                ),
                t[0] || (t[0] = yi(". ")),
              ]),
              mi("div", fN, [
                mi(
                  "button",
                  { class: "cookie-consent__button", onClick: o },
                  Q(e.$t("cookieConsent.button1")),
                  1
                ),
                mi(
                  "button",
                  { class: "cookie-consent__button", onClick: i },
                  Q(e.$t("cookieConsent.button2")),
                  1
                ),
              ]),
            ])
          );
        };
      },
    }),
    [["__scopeId", "data-v-18042026"]]
  ),
  gN = Un({
    name: "LayoutLoader",
    inheritAttrs: !1,
    props: { name: String, layoutProps: Object },
    setup: (e, t) => () => zi(Vh[e.name], e.layoutProps, t.slots),
  }),
  vN = Un({
    name: "NuxtLayout",
    inheritAttrs: !1,
    props: {
      name: { type: [String, Boolean, Object], default: null },
      fallback: { type: [String, Object], default: null },
    },
    setup(e, t) {
      const n = ql(),
        r = no(Ic),
        o = r === Mc() ? no(af) : r,
        i = Hi(() => {
          let t = Ot(e.name) ?? o.meta.layout ?? "default";
          return t && !(t in Vh) && e.fallback && (t = Ot(e.fallback)), t;
        }),
        s = Et();
      t.expose({ layoutRef: s });
      const a = n.deferHydration();
      if (n.isHydrating) {
        const e = n.hooks.hookOnce("app:error", a);
        Rc().beforeEach(e);
      }
      return () => {
        const n = i.value && i.value in Vh,
          r = o.meta.layoutTransition ?? false;
        return Ff(rs, n && r, {
          default: () =>
            zi(
              Wo,
              {
                suspensible: !0,
                onResolve: () => {
                  tn(a);
                },
              },
              {
                default: () =>
                  zi(
                    yN,
                    {
                      layoutProps: ki(t.attrs, { ref: s }),
                      key: i.value || void 0,
                      name: i.value,
                      shouldProvide: !e.name,
                      hasTransition: !!r,
                    },
                    t.slots
                  ),
              }
            ),
        }).default();
      };
    },
  }),
  yN = Un({
    name: "NuxtLayoutProvider",
    inheritAttrs: !1,
    props: {
      name: { type: [String, Boolean] },
      layoutProps: { type: Object },
      hasTransition: { type: Boolean },
      shouldProvide: { type: Boolean },
    },
    setup(e, t) {
      const n = e.name;
      return (
        e.shouldProvide &&
          to(Nc, { isCurrent: (e) => n === (e.meta.layout ?? "default") }),
        () => {
          var r, o;
          return !n || ("string" == typeof n && !(n in Vh))
            ? null == (o = (r = t.slots).default)
              ? void 0
              : o.call(r)
            : zi(gN, { key: n, layoutProps: e.layoutProps, name: n }, t.slots);
        }
      );
    },
  });
var bN =
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self
    ? self
    : {};
function _N(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var wN,
  DN = { exports: {} };
wN ||
  ((wN = 1),
  (function (e, t) {
    var n,
      r =
        ("undefined" != typeof globalThis && globalThis) ||
        ("undefined" != typeof self && self) ||
        (void 0 !== bN && bN),
      o = (function () {
        function e() {
          (this.fetch = !1), (this.DOMException = r.DOMException);
        }
        return (e.prototype = r), new e();
      })();
    (n = o),
      (function (e) {
        var t =
            (void 0 !== n && n) ||
            ("undefined" != typeof self && self) ||
            (void 0 !== bN && bN) ||
            {},
          r = "URLSearchParams" in t,
          o = "Symbol" in t && "iterator" in Symbol,
          i =
            "FileReader" in t &&
            "Blob" in t &&
            (function () {
              try {
                return new Blob(), !0;
              } catch (iI) {
                return !1;
              }
            })(),
          s = "FormData" in t,
          a = "ArrayBuffer" in t;
        if (a)
          var l = [
              "[object Int8Array]",
              "[object Uint8Array]",
              "[object Uint8ClampedArray]",
              "[object Int16Array]",
              "[object Uint16Array]",
              "[object Int32Array]",
              "[object Uint32Array]",
              "[object Float32Array]",
              "[object Float64Array]",
            ],
            c =
              ArrayBuffer.isView ||
              function (e) {
                return e && l.indexOf(Object.prototype.toString.call(e)) > -1;
              };
        function u(e) {
          if (
            ("string" != typeof e && (e = String(e)),
            /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e)
          )
            throw new TypeError(
              'Invalid character in header field name: "' + e + '"'
            );
          return e.toLowerCase();
        }
        function p(e) {
          return "string" != typeof e && (e = String(e)), e;
        }
        function d(e) {
          var t = {
            next: function () {
              var t = e.shift();
              return { done: void 0 === t, value: t };
            },
          };
          return (
            o &&
              (t[Symbol.iterator] = function () {
                return t;
              }),
            t
          );
        }
        function f(e) {
          (this.map = {}),
            e instanceof f
              ? e.forEach(function (e, t) {
                  this.append(t, e);
                }, this)
              : Array.isArray(e)
              ? e.forEach(function (e) {
                  if (2 != e.length)
                    throw new TypeError(
                      "Headers constructor: expected name/value pair to be length 2, found" +
                        e.length
                    );
                  this.append(e[0], e[1]);
                }, this)
              : e &&
                Object.getOwnPropertyNames(e).forEach(function (t) {
                  this.append(t, e[t]);
                }, this);
        }
        function h(e) {
          if (!e._noBody)
            return e.bodyUsed
              ? Promise.reject(new TypeError("Already read"))
              : void (e.bodyUsed = !0);
        }
        function m(e) {
          return new Promise(function (t, n) {
            (e.onload = function () {
              t(e.result);
            }),
              (e.onerror = function () {
                n(e.error);
              });
          });
        }
        function g(e) {
          var t = new FileReader(),
            n = m(t);
          return t.readAsArrayBuffer(e), n;
        }
        function v(e) {
          if (e.slice) return e.slice(0);
          var t = new Uint8Array(e.byteLength);
          return t.set(new Uint8Array(e)), t.buffer;
        }
        function y() {
          return (
            (this.bodyUsed = !1),
            (this._initBody = function (e) {
              var t;
              (this.bodyUsed = this.bodyUsed),
                (this._bodyInit = e),
                e
                  ? "string" == typeof e
                    ? (this._bodyText = e)
                    : i && Blob.prototype.isPrototypeOf(e)
                    ? (this._bodyBlob = e)
                    : s && FormData.prototype.isPrototypeOf(e)
                    ? (this._bodyFormData = e)
                    : r && URLSearchParams.prototype.isPrototypeOf(e)
                    ? (this._bodyText = e.toString())
                    : a && i && (t = e) && DataView.prototype.isPrototypeOf(t)
                    ? ((this._bodyArrayBuffer = v(e.buffer)),
                      (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                    : a && (ArrayBuffer.prototype.isPrototypeOf(e) || c(e))
                    ? (this._bodyArrayBuffer = v(e))
                    : (this._bodyText = e = Object.prototype.toString.call(e))
                  : ((this._noBody = !0), (this._bodyText = "")),
                this.headers.get("content-type") ||
                  ("string" == typeof e
                    ? this.headers.set(
                        "content-type",
                        "text/plain;charset=UTF-8"
                      )
                    : this._bodyBlob && this._bodyBlob.type
                    ? this.headers.set("content-type", this._bodyBlob.type)
                    : r &&
                      URLSearchParams.prototype.isPrototypeOf(e) &&
                      this.headers.set(
                        "content-type",
                        "application/x-www-form-urlencoded;charset=UTF-8"
                      ));
            }),
            i &&
              (this.blob = function () {
                var e = h(this);
                if (e) return e;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData)
                  throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]));
              }),
            (this.arrayBuffer = function () {
              if (this._bodyArrayBuffer) {
                var e = h(this);
                return (
                  e ||
                  (ArrayBuffer.isView(this._bodyArrayBuffer)
                    ? Promise.resolve(
                        this._bodyArrayBuffer.buffer.slice(
                          this._bodyArrayBuffer.byteOffset,
                          this._bodyArrayBuffer.byteOffset +
                            this._bodyArrayBuffer.byteLength
                        )
                      )
                    : Promise.resolve(this._bodyArrayBuffer))
                );
              }
              if (i) return this.blob().then(g);
              throw new Error("could not read as ArrayBuffer");
            }),
            (this.text = function () {
              var e,
                t,
                n,
                r,
                o,
                i = h(this);
              if (i) return i;
              if (this._bodyBlob)
                return (
                  (e = this._bodyBlob),
                  (t = new FileReader()),
                  (n = m(t)),
                  (r = /charset=([A-Za-z0-9_-]+)/.exec(e.type)),
                  (o = r ? r[1] : "utf-8"),
                  t.readAsText(e, o),
                  n
                );
              if (this._bodyArrayBuffer)
                return Promise.resolve(
                  (function (e) {
                    for (
                      var t = new Uint8Array(e), n = new Array(t.length), r = 0;
                      r < t.length;
                      r++
                    )
                      n[r] = String.fromCharCode(t[r]);
                    return n.join("");
                  })(this._bodyArrayBuffer)
                );
              if (this._bodyFormData)
                throw new Error("could not read FormData body as text");
              return Promise.resolve(this._bodyText);
            }),
            s &&
              (this.formData = function () {
                return this.text().then(w);
              }),
            (this.json = function () {
              return this.text().then(JSON.parse);
            }),
            this
          );
        }
        (f.prototype.append = function (e, t) {
          (e = u(e)), (t = p(t));
          var n = this.map[e];
          this.map[e] = n ? n + ", " + t : t;
        }),
          (f.prototype.delete = function (e) {
            delete this.map[u(e)];
          }),
          (f.prototype.get = function (e) {
            return (e = u(e)), this.has(e) ? this.map[e] : null;
          }),
          (f.prototype.has = function (e) {
            return this.map.hasOwnProperty(u(e));
          }),
          (f.prototype.set = function (e, t) {
            this.map[u(e)] = p(t);
          }),
          (f.prototype.forEach = function (e, t) {
            for (var n in this.map)
              this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
          }),
          (f.prototype.keys = function () {
            var e = [];
            return (
              this.forEach(function (t, n) {
                e.push(n);
              }),
              d(e)
            );
          }),
          (f.prototype.values = function () {
            var e = [];
            return (
              this.forEach(function (t) {
                e.push(t);
              }),
              d(e)
            );
          }),
          (f.prototype.entries = function () {
            var e = [];
            return (
              this.forEach(function (t, n) {
                e.push([n, t]);
              }),
              d(e)
            );
          }),
          o && (f.prototype[Symbol.iterator] = f.prototype.entries);
        var b = [
          "CONNECT",
          "DELETE",
          "GET",
          "HEAD",
          "OPTIONS",
          "PATCH",
          "POST",
          "PUT",
          "TRACE",
        ];
        function _(e, n) {
          if (!(this instanceof _))
            throw new TypeError(
              'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
            );
          var r,
            o,
            i = (n = n || {}).body;
          if (e instanceof _) {
            if (e.bodyUsed) throw new TypeError("Already read");
            (this.url = e.url),
              (this.credentials = e.credentials),
              n.headers || (this.headers = new f(e.headers)),
              (this.method = e.method),
              (this.mode = e.mode),
              (this.signal = e.signal),
              i ||
                null == e._bodyInit ||
                ((i = e._bodyInit), (e.bodyUsed = !0));
          } else this.url = String(e);
          if (
            ((this.credentials =
              n.credentials || this.credentials || "same-origin"),
            (!n.headers && this.headers) || (this.headers = new f(n.headers)),
            (this.method =
              ((r = n.method || this.method || "GET"),
              (o = r.toUpperCase()),
              b.indexOf(o) > -1 ? o : r)),
            (this.mode = n.mode || this.mode || null),
            (this.signal =
              n.signal ||
              this.signal ||
              (function () {
                if ("AbortController" in t) return new AbortController().signal;
              })()),
            (this.referrer = null),
            ("GET" === this.method || "HEAD" === this.method) && i)
          )
            throw new TypeError("Body not allowed for GET or HEAD requests");
          if (
            (this._initBody(i),
            !(
              ("GET" !== this.method && "HEAD" !== this.method) ||
              ("no-store" !== n.cache && "no-cache" !== n.cache)
            ))
          ) {
            var s = /([?&])_=[^&]*/;
            s.test(this.url)
              ? (this.url = this.url.replace(s, "$1_=" + new Date().getTime()))
              : (this.url +=
                  (/\?/.test(this.url) ? "&" : "?") +
                  "_=" +
                  new Date().getTime());
          }
        }
        function w(e) {
          var t = new FormData();
          return (
            e
              .trim()
              .split("&")
              .forEach(function (e) {
                if (e) {
                  var n = e.split("="),
                    r = n.shift().replace(/\+/g, " "),
                    o = n.join("=").replace(/\+/g, " ");
                  t.append(decodeURIComponent(r), decodeURIComponent(o));
                }
              }),
            t
          );
        }
        function D(e, t) {
          if (!(this instanceof D))
            throw new TypeError(
              'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
            );
          if (
            (t || (t = {}),
            (this.type = "default"),
            (this.status = void 0 === t.status ? 200 : t.status),
            this.status < 200 || this.status > 599)
          )
            throw new RangeError(
              "Failed to construct 'Response': The status provided (0) is outside the range [200, 599]."
            );
          (this.ok = this.status >= 200 && this.status < 300),
            (this.statusText =
              void 0 === t.statusText ? "" : "" + t.statusText),
            (this.headers = new f(t.headers)),
            (this.url = t.url || ""),
            this._initBody(e);
        }
        (_.prototype.clone = function () {
          return new _(this, { body: this._bodyInit });
        }),
          y.call(_.prototype),
          y.call(D.prototype),
          (D.prototype.clone = function () {
            return new D(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new f(this.headers),
              url: this.url,
            });
          }),
          (D.error = function () {
            var e = new D(null, { status: 200, statusText: "" });
            return (e.ok = !1), (e.status = 0), (e.type = "error"), e;
          });
        var x = [301, 302, 303, 307, 308];
        (D.redirect = function (e, t) {
          if (-1 === x.indexOf(t)) throw new RangeError("Invalid status code");
          return new D(null, { status: t, headers: { location: e } });
        }),
          (e.DOMException = t.DOMException);
        try {
          new e.DOMException();
        } catch (C) {
          (e.DOMException = function (e, t) {
            (this.message = e), (this.name = t);
            var n = Error(e);
            this.stack = n.stack;
          }),
            (e.DOMException.prototype = Object.create(Error.prototype)),
            (e.DOMException.prototype.constructor = e.DOMException);
        }
        function k(n, r) {
          return new Promise(function (o, s) {
            var l = new _(n, r);
            if (l.signal && l.signal.aborted)
              return s(new e.DOMException("Aborted", "AbortError"));
            var c = new XMLHttpRequest();
            function d() {
              c.abort();
            }
            if (
              ((c.onload = function () {
                var e,
                  t,
                  n = {
                    statusText: c.statusText,
                    headers:
                      ((e = c.getAllResponseHeaders() || ""),
                      (t = new f()),
                      e
                        .replace(/\r?\n[\t ]+/g, " ")
                        .split("\r")
                        .map(function (e) {
                          return 0 === e.indexOf("\n")
                            ? e.substr(1, e.length)
                            : e;
                        })
                        .forEach(function (e) {
                          var n = e.split(":"),
                            r = n.shift().trim();
                          if (r) {
                            var o = n.join(":").trim();
                            try {
                              t.append(r, o);
                            } catch (i) {}
                          }
                        }),
                      t),
                  };
                0 === l.url.indexOf("file://") &&
                (c.status < 200 || c.status > 599)
                  ? (n.status = 200)
                  : (n.status = c.status),
                  (n.url =
                    "responseURL" in c
                      ? c.responseURL
                      : n.headers.get("X-Request-URL"));
                var r = "response" in c ? c.response : c.responseText;
                setTimeout(function () {
                  o(new D(r, n));
                }, 0);
              }),
              (c.onerror = function () {
                setTimeout(function () {
                  s(new TypeError("Network request failed"));
                }, 0);
              }),
              (c.ontimeout = function () {
                setTimeout(function () {
                  s(new TypeError("Network request timed out"));
                }, 0);
              }),
              (c.onabort = function () {
                setTimeout(function () {
                  s(new e.DOMException("Aborted", "AbortError"));
                }, 0);
              }),
              c.open(
                l.method,
                (function (e) {
                  try {
                    return "" === e && t.location.href ? t.location.href : e;
                  } catch (iI) {
                    return e;
                  }
                })(l.url),
                !0
              ),
              "include" === l.credentials
                ? (c.withCredentials = !0)
                : "omit" === l.credentials && (c.withCredentials = !1),
              "responseType" in c &&
                (i
                  ? (c.responseType = "blob")
                  : a && (c.responseType = "arraybuffer")),
              r &&
                "object" == typeof r.headers &&
                !(
                  r.headers instanceof f ||
                  (t.Headers && r.headers instanceof t.Headers)
                ))
            ) {
              var h = [];
              Object.getOwnPropertyNames(r.headers).forEach(function (e) {
                h.push(u(e)), c.setRequestHeader(e, p(r.headers[e]));
              }),
                l.headers.forEach(function (e, t) {
                  -1 === h.indexOf(t) && c.setRequestHeader(t, e);
                });
            } else
              l.headers.forEach(function (e, t) {
                c.setRequestHeader(t, e);
              });
            l.signal &&
              (l.signal.addEventListener("abort", d),
              (c.onreadystatechange = function () {
                4 === c.readyState && l.signal.removeEventListener("abort", d);
              })),
              c.send(void 0 === l._bodyInit ? null : l._bodyInit);
          });
        }
        (k.polyfill = !0),
          t.fetch ||
            ((t.fetch = k), (t.Headers = f), (t.Request = _), (t.Response = D)),
          (e.Headers = f),
          (e.Request = _),
          (e.Response = D),
          (e.fetch = k),
          Object.defineProperty(e, "__esModule", { value: !0 });
      })({}),
      (o.fetch.ponyfill = !0),
      delete o.fetch.polyfill;
    var i = r.fetch ? r : o;
    ((t = i.fetch).default = i.fetch),
      (t.fetch = i.fetch),
      (t.Headers = i.Headers),
      (t.Request = i.Request),
      (t.Response = i.Response),
      (e.exports = t);
  })(DN, DN.exports));
const xN = (e, ...t) =>
    e.reduce((e, n, r) => `${e}${n}${r in t ? String(t[r]) : ""}`, ""),
  kN = xN`
    fragment SocialNetworksAcfFields on WithAcfSocialNetworkFields {
  socialNetworkFields {
    url
  }
}
    `,
  CN = xN`
    query projectsList($language: LanguageCodeFilterEnum!) {
  projects(where: {language: $language, orderby: {field: MENU_ORDER, order: ASC}}) {
    nodes {
      id
      slug
      title(format: RENDERED)
      ...ProjectsListAcfFields
    }
  }
}
    ${xN`
    fragment ProjectsListAcfFields on WithAcfProjectFields {
  projectFields {
    image {
      node {
        altText
        sourceUrl
      }
    }
    background {
      node {
        altText
        sourceUrl
      }
    }
    scope
    city
    country
    year
    comingSoon
    showInHome
    location {
      latitude
      longitude
    }
    impact
    website
    description
    content {
      title
      description
    }
    links {
      title
      url
    }
  }
}
    `}`,
  EN = xN`
    query socialNetworks {
  socialNetworks(where: {orderby: {field: MENU_ORDER, order: ASC}}) {
    nodes {
      id
      title(format: RENDERED)
      ...SocialNetworksAcfFields
    }
  }
}
    ${kN}`,
  TN = (e, t, n, r) => e();
const SN = {
    default: function (e, t = TN) {
      return {
        projectsList: (n, r) =>
          t(
            (t) => e.request(CN, n, { ...r, ...t }),
            "projectsList",
            "query",
            n
          ),
        socialNetworks: (n, r) =>
          t(
            (t) => e.request(EN, n, { ...r, ...t }),
            "socialNetworks",
            "query",
            n
          ),
      };
    },
  },
  AN = {
    default: [
      "projectsList",
      "ProjectsListAcfFields",
      "socialNetworks",
      "SocialNetworksAcfFields",
    ],
  };
function ON() {
  const e = (() => {
      const e = ql();
      if (!e._gqlState) throw new Error("GQL State is not available.");
      return null == e ? void 0 : e._gqlState;
    })(),
    t = PN();
  return (...n) => {
    var r;
    const o = null == n ? void 0 : n[0],
      i =
        "object" == typeof o && "operation" in o
          ? o.operation
          : (null == n ? void 0 : n[0]) ?? void 0,
      s =
        "object" == typeof o && "variables" in o
          ? o.variables
          : (null == n ? void 0 : n[1]) ?? void 0,
      a = Object.keys(AN).find((e) => AN[e].includes(i)) ?? "default",
      l = null == (r = null == e ? void 0 : e.value) ? void 0 : r[a];
    if (!l || !l.instance) throw new Error("Invalid GraphQL Operation");
    const { instance: c } = l;
    return SN[a](c, async (n, r, o) => {
      var i, s, l, c;
      try {
        return await n();
      } catch (u) {
        throw (
          ((t.value = {
            client: a,
            operationType: o,
            operationName: r,
            statusCode:
              null == (i = null == u ? void 0 : u.response) ? void 0 : i.status,
            gqlErrors:
              (null == (s = null == u ? void 0 : u.response)
                ? void 0
                : s.errors) ||
              ((null == (l = null == u ? void 0 : u.response)
                ? void 0
                : l.message) && [
                {
                  message:
                    null == (c = null == u ? void 0 : u.response)
                      ? void 0
                      : c.message,
                },
              ]) ||
              [],
          }),
          e.value.onError && e.value.onError(t.value),
          t.value)
        );
      }
    })[i](s);
  };
}
const PN = () => Xf("_gqlErrors", () => null);
function FN(...e) {
  const t = (e) => (e && Ct(e) ? e : ft(e)),
    n = null == e ? void 0 : e[0],
    r = ("object" == typeof n && "options" in n ? e[0].options : e[2]) ?? {},
    o =
      ("object" == typeof n && "operation" in n ? e[0].operation : e[0]) ??
      void 0,
    i =
      ("object" == typeof n && "variables" in n
        ? t(e[0].variables)
        : e[1] && t(e[1])) ?? void 0;
  i && ((r.watch = r.watch || []), r.watch.push(i));
  return Yf(
    `gql:data:${vc({ operation: o, variables: i })}`,
    () => ON()(o, Ot(i)),
    r
  );
}
const LN = xh("projects", {
    state: () => ({
      projects: null,
      projectHovered: null,
      projectClicked: null,
      isListOpened: !0,
    }),
    actions: {
      async fetchProjects(e) {
        const { data: t } = await FN({
          operation: "projectsList",
          variables: { language: e.toUpperCase() },
          options: {
            transform: (e) => {
              var t;
              return (
                (null == (t = e.projects)
                  ? void 0
                  : t.nodes.map((e) => ({
                      id: e.id,
                      slug: e.slug,
                      title: e.title,
                      ...e.projectFields,
                    }))) || []
              );
            },
          },
        });
        this.projects = t.value;
      },
    },
    getters: {
      getProject: (e) => (t) =>
        (e.projects && e.projects.find((e) => e.slug === t)) || null,
    },
  }),
  NN = xh("socialNetworks", {
    state: () => ({ socialNetworks: null }),
    actions: {
      async fetchSocialNetworks() {
        const { data: e } = await FN({
          operation: "socialNetworks",
          options: {
            transform: (e) => {
              var t;
              return (
                (null == (t = e.socialNetworks)
                  ? void 0
                  : t.nodes.map((e) => ({
                      id: e.id,
                      title: e.title,
                      ...e.socialNetworkFields,
                    }))) || []
              );
            },
          },
        });
        this.socialNetworks = e.value;
      },
    },
  });
function IN() {
  const e = () => {
    const e =
      window.innerWidth -
      (window.innerWidth - document.documentElement.clientWidth);
    document.documentElement.style.setProperty(
      "--real-viewport-width",
      `${e}px`
    );
  };
  return (
    fr(async () => {
      window.addEventListener("resize", e), e();
    }),
    vr(() => {
      window.removeEventListener("resize", e);
    }),
    { setRealViewportWidth: e }
  );
}
const RN = Un({
  __name: "app",
  async setup(e) {
    let t, n;
    const { locale: r } = dw(),
      o = LN();
    ([t, n] = Br(() => o.fetchProjects(r.value))),
      await t,
      n(),
      Ao(r, async (e, t) => {
        await o.fetchProjects(e);
      });
    const i = NN();
    ([t, n] = Br(() => i.fetchSocialNetworks())), await t, n();
    const { $ScrollTrigger: s } = ql(),
      a = Mc(),
      l = Ch(),
      { color: c, mixBlend: u } = kh(l),
      p = Et(!0),
      d = Qf("cookie-consent", { maxAge: 2073600 }),
      f = () => {
        (d.value = "allow"), (p.value = !1);
      },
      h = () => {
        (d.value = "deny"), (p.value = !1);
      };
    return (
      IN(),
      fr(() => {
        s.config({ ignoreMobileResize: !0 }),
          a.meta.navColor ? (c.value = a.meta.navColor) : (c.value = "white"),
          a.meta.mixBlend ? (u.value = a.meta.mixBlend) : (u.value = !1);
      }),
      (e, t) => {
        const n = cN,
          r = mN,
          o = vN;
        return (
          oi(),
          ui(o, null, {
            default: fn(() => [
              gi(n),
              gi(
                rs,
                { name: "fade" },
                {
                  default: fn(() => [
                    Ot(p) && !Ot(d)
                      ? (oi(), ui(r, { key: 0, onClose: h, onAllow: f }))
                      : _i("", !0),
                  ]),
                  _: 1,
                }
              ),
            ]),
            _: 1,
          })
        );
      }
    );
  },
});
function MN(e, t) {
  const n = (t / e) * 100;
  return (2 / Math.PI) * 100 * Math.atan(n / 50);
}
function BN(e = {}) {
  const {
      duration: t = 2e3,
      throttle: n = 200,
      hideDelay: r = 500,
      resetDelay: o = 400,
    } = e,
    i = e.estimatedProgress || MN,
    s = ql(),
    a = Et(0),
    l = Et(!1),
    c = Et(!1);
  let u,
    p,
    d,
    f,
    h = !1;
  const m = () => {
    (c.value = !1), g(0);
  };
  function g(e = 0) {
    if (!s.isHydrating) {
      if (e >= 100) return v();
      y(),
        (a.value = e < 0 ? 0 : e),
        n
          ? (p = setTimeout(() => {
              (l.value = !0), b();
            }, n))
          : ((l.value = !0), b());
    }
  }
  function v(e = {}) {
    (a.value = 100),
      (h = !0),
      y(),
      clearTimeout(d),
      clearTimeout(f),
      e.error && (c.value = !0),
      e.force
        ? ((a.value = 0), (l.value = !1))
        : (d = setTimeout(() => {
            (l.value = !1),
              (f = setTimeout(() => {
                a.value = 0;
              }, o));
          }, r));
  }
  function y() {
    clearTimeout(p), cancelAnimationFrame(u);
  }
  function b() {
    let e;
    (h = !1),
      (u = requestAnimationFrame(function n(r) {
        if (h) return;
        e ?? (e = r);
        const o = r - e;
        (a.value = Math.max(0, Math.min(100, i(t, o)))),
          (u = requestAnimationFrame(n));
      }));
  }
  let _ = () => {};
  {
    const e = s.hook("page:loading:start", () => {
        m();
      }),
      t = s.hook("page:loading:end", () => {
        v();
      }),
      n = s.hook("vue:error", () => v());
    _ = () => {
      n(), e(), t(), y();
    };
  }
  return {
    _cleanup: _,
    progress: Hi(() => a.value),
    isLoading: Hi(() => l.value),
    error: Hi(() => c.value),
    start: m,
    set: g,
    finish: v,
    clear: y,
  };
}
const jN = Un({
    name: "NuxtLoadingIndicator",
    props: {
      throttle: { type: Number, default: 200 },
      duration: { type: Number, default: 2e3 },
      height: { type: Number, default: 3 },
      color: {
        type: [String, Boolean],
        default:
          "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)",
      },
      errorColor: {
        type: String,
        default: "repeating-linear-gradient(to right,#f87171 0%,#ef4444 100%)",
      },
      estimatedProgress: { type: Function, required: !1 },
    },
    setup(e, { slots: t, expose: n }) {
      const {
        progress: r,
        isLoading: o,
        error: i,
        start: s,
        finish: a,
        clear: l,
      } = (function (e = {}) {
        const t = ql(),
          n = (t._loadingIndicator = t._loadingIndicator || BN(e));
        return (
          ie() &&
            ((t._loadingIndicatorDeps = t._loadingIndicatorDeps || 0),
            t._loadingIndicatorDeps++,
            se(() => {
              t._loadingIndicatorDeps--,
                0 === t._loadingIndicatorDeps &&
                  (n._cleanup(), delete t._loadingIndicator);
            })),
          n
        );
      })({
        duration: e.duration,
        throttle: e.throttle,
        estimatedProgress: e.estimatedProgress,
      });
      return (
        n({
          progress: r,
          isLoading: o,
          error: i,
          start: s,
          finish: a,
          clear: l,
        }),
        () =>
          zi(
            "div",
            {
              class: "nuxt-loading-indicator",
              style: {
                position: "fixed",
                top: 0,
                right: 0,
                left: 0,
                pointerEvents: "none",
                width: "auto",
                height: `${e.height}px`,
                opacity: o.value ? 1 : 0,
                background: i.value ? e.errorColor : e.color || void 0,
                backgroundSize: (100 / r.value) * 100 + "% auto",
                transform: `scaleX(${r.value}%)`,
                transformOrigin: "left",
                transition: "transform 0.1s, height 0.4s, opacity 0.4s",
                zIndex: 999999,
              },
            },
            t
          )
      );
    },
  }),
  $N = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 257 77",
  };
const UN = {
    render: function (e, t) {
      return (
        oi(),
        ci(
          "svg",
          $N,
          t[0] ||
            (t[0] = [
              mi(
                "path",
                {
                  stroke: "currentColor",
                  "stroke-linecap": "round",
                  "stroke-width": ".3",
                  d: "M204.113 1.957C118.71 14.271-21.344 48.243 9.595 69.407c14.234 9.736 67.616 8.96 115.316.658 64.481-11.222 92.405-31.068 92.288-45.188-.086-10.514-16.605-19.267-65.004-16.195-48.969 3.108-97.86 15.834-115.463 28.594C5.96 59.581 57.874 75.378 148.2 64.746 249.012 52.883 285.858 12.495 231.397 3.3 174.169-6.364 74.531 14.126 25.142 33.712c-60.118 23.84-1.926 43.809 89.861 32.687 90.618-10.981 116.556-43.953 81.776-55.499-26.392-8.761-91.145-3.578-136.018 9.763-79.59 23.661-73.91 58.312 37.286 49.463C177.2 63.827 248.813 39.732 253.5 20.981c6.383-25.534-116.869-14.498-187.434 5.222C9.7 41.956-14.526 65.92 49.926 68.638c79.278 3.345 200.801-24.5 200.687-47.513-.087-17.697-80.651-20.036-148.247-4.529",
                },
                null,
                -1
              ),
            ])
        )
      );
    },
  },
  qN = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 200 17",
  };
const HN = {
    render: function (e, t) {
      return (
        oi(),
        ci(
          "svg",
          qN,
          t[0] ||
            (t[0] = [
              mi(
                "path",
                {
                  stroke: "currentColor",
                  "stroke-linecap": "round",
                  "stroke-width": ".3",
                  d: "M177.209 2.749c-17.55 2.368-36.606 3.446-54.621 4.852-31.44 2.452-62.895 4.96-94.517 5.863-5.095.145-10.46 1.223-15.297.08-.652-.154 1.317-.298 1.998-.363 4.789-.462 29.774-2.295 30.478-2.345 37.845-2.714 75.735-5.126 113.695-6.874 10.817-.498 21.644-.904 32.476-1.173 1.975-.049 2.758-.071-1.027 0-18.108.342-36.202 1.098-54.279 1.9-32.738 1.454-65.572 3.78-98.399 3.882-6.419.02 1.216-.439 1.94-.485 7.713-.493 24.976-1.384 31.393-1.698 30.882-1.513 61.788-2.993 92.691-4.286 9.597-.402 38.306-1.848 28.823-.728-23.678 2.796-48.561 2.974-72.429 4.61C92.2 7.897 64.246 9.808 36.347 11.967 14.524 13.656 80.112 9.41 102.04 8.693c22.834-.749 45.692-.944 68.548-.81 9.042.054 36.084-.106 27.111.688-22.691 2.01-47.017 1.31-69.747 1.78-28.249.583-56.497 1.019-84.757 1.131-4.376.018-17.279.98-13.128 0 3.394-.801 7.154-.093 10.73-.161 14.273-.271 10.492-.237 25.913-.566 29.12-.623 58.25-.843 87.383-.688 8.93.048 35.667.238 26.768.768-50.917 3.038-204.168 6.317-153.077 5.742 40.292-.453 80.3-4.372 120.487-6.025 2.773-.114 11.054-.437 8.333-.04-1.669.243-3.381.312-5.08.404-9.943.539-28.094 1.172-36.756 1.456-31.56 1.033-63.15 1.93-94.746 2.022-6.17.018-24.463.574-18.493-.526 6.099-1.123 12.472-1.29 18.721-1.86 26-2.372 51.991-4.806 78.023-6.995 27.287-2.294 55.379-5.04 82.931-4.286 11.433.313-22.573 2.675-33.903 3.8-24.706 2.456-49.36 5.164-74.084 7.522-12.469 1.189-25.16 2.81-37.785 2.345",
                },
                null,
                -1
              ),
            ])
        )
      );
    },
  },
  zN = {
    key: 0,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    class: "hover-link__icon",
  },
  VN = {
    key: 1,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    class: "hover-link__icon",
  },
  WN = Un({
    __name: "HoverLink",
    props: {
      to: {},
      href: {},
      type: {},
      size: { default: "l" },
      icon: { type: Boolean, default: !0 },
    },
    setup(e) {
      const t = e,
        n = Hi(() => (t.to || t.href ? rh : "div")),
        r = Et(),
        o = () => {
          var e;
          s.value && (null == (e = r.value) || e.restart());
        },
        i = () => {
          var e;
          s.value && (null == (e = r.value) || e.restart());
        },
        s = Et(),
        { $gsap: a } = ql();
      let l = null;
      return (
        fr(() => {
          const e = a.matchMedia();
          l = a.context((t) => {
            e.add(
              {
                isDesktop: "(min-width: 1025px)",
                isMobile: "(max-width: 1024px)",
              },
              (e) => {
                const { isDesktop: n, isMobile: o } = e.conditions;
                if (t && t.selector)
                  if (n) {
                    const e = t.selector(".hover-link__hover path");
                    s.value &&
                      (r.value = a
                        .timeline({
                          paused: !0,
                          onReverseComplete: () => {
                            a.set(e, { drawSVG: "100%" });
                          },
                          onComplete: () => {
                            a.set(e, {});
                          },
                        })
                        .set(t.selector(".hover-link__hover path"), {
                          drawSVG: "0% 100%",
                        })
                        .to(t.selector(".hover-link__hover path"), {
                          drawSVG: "0%",
                          duration: 0.4,
                          ease: "power1.inOut",
                        })
                        .set(t.selector(".hover-link__hover path"), {
                          drawSVG: "100% 100%",
                        })
                        .to(t.selector(".hover-link__hover path"), {
                          drawSVG: "100%",
                          duration: 0.4,
                          ease: "power1.inOut",
                        }));
                  } else
                    a.timeline({
                      scrollTrigger: { trigger: s.value, start: "top 75%" },
                    }).fromTo(
                      t.selector(".hover-link__hover path"),
                      { drawSVG: 0 },
                      { drawSVG: "100%", duration: 0.3, ease: "power1.inOut" }
                    );
              }
            );
          }, s.value);
        }),
        vr(() => {
          l && l.revert();
        }),
        (e, t) => (
          oi(),
          ci(
            "div",
            {
              ref_key: "main",
              ref: s,
              class: W([
                "hover-link",
                ["hover-link--" + e.type, "hover-link--" + e.size],
              ]),
            },
            [
              (oi(),
              ui(
                Cr(Ot(n)),
                {
                  to: e.to || e.href ? e.to || e.href : null,
                  target: e.href ? "_blank" : "_self",
                  onMouseenter: o,
                  onMouseleave: i,
                },
                {
                  default: fn(() => [
                    "spotify" === e.type && e.icon
                      ? (oi(),
                        ci(
                          "svg",
                          zN,
                          t[0] ||
                            (t[0] = [
                              mi(
                                "path",
                                {
                                  d: "M13.0469 7.33496L0.671874 14.4797L0.671875 0.190251L13.0469 7.33496Z",
                                  fill: "currentColor",
                                },
                                null,
                                -1
                              ),
                            ])
                        ))
                      : "projects" === e.type && e.icon
                      ? (oi(),
                        ci(
                          "svg",
                          VN,
                          t[1] ||
                            (t[1] = [
                              mi(
                                "path",
                                {
                                  d: "M3.51579 10.0996H14.5991",
                                  stroke: "currentColor",
                                  "stroke-width": "3",
                                  "stroke-linecap": "square",
                                  "stroke-linejoin": "round",
                                },
                                null,
                                -1
                              ),
                              mi(
                                "path",
                                {
                                  d: "M9.84912 4.55762L15.3908 10.0993L9.84912 15.6409",
                                  stroke: "currentColor",
                                  "stroke-width": "3",
                                  "stroke-linecap": "square",
                                },
                                null,
                                -1
                              ),
                            ])
                        ))
                      : _i("", !0),
                    mi("span", null, [Ar(e.$slots, "default", {}, void 0, !0)]),
                    "spotify" === e.type
                      ? (oi(),
                        ui(Ot(UN), { key: 2, class: "hover-link__hover" }))
                      : "projects" === e.type
                      ? (oi(),
                        ui(Ot(HN), { key: 3, class: "hover-link__hover" }))
                      : "contact" === e.type
                      ? (oi(),
                        ui(Ot(UN), { key: 4, class: "hover-link__hover" }))
                      : "enter" === e.type
                      ? (oi(),
                        ui(Ot(UN), { key: 5, class: "hover-link__hover" }))
                      : _i("", !0),
                  ]),
                  _: 3,
                },
                40,
                ["to", "target"]
              )),
            ],
            2
          )
        )
      );
    },
  }),
  YN = hN(WN, [["__scopeId", "data-v-9336944d"]]),
  XN = ml("/assets/videos/intro.mp4"),
  GN = { class: "error" },
  KN = { class: "error__top" },
  JN = { class: "error__content" },
  QN = { class: "error__content__title" },
  ZN = { class: "error__content__description" },
  eI = { class: "error__bottom" },
  tI = hN(
    Un({
      __name: "error",
      props: { error: Object },
      setup(e) {
        const t = yw(),
          n = new Date().getFullYear(),
          { t: r } = dw(),
          o = vw({ seo: { canonicalQueries: ["foo"] } });
        return (
          Ip({ title: `${r("error.title")} — ${r("meta.title")}` }),
          Lp({
            htmlAttrs: { lang: o.value.htmlAttrs.lang },
            meta: [
              ...(o.value.meta || []),
              {
                name: "viewport",
                content:
                  "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
              },
            ],
            link: [
              ...(o.value.link || []),
              { href: "/favicon.svg", rel: "icon" },
            ],
          }),
          (e, r) => {
            const o = jN,
              i = YN;
            return (
              oi(),
              ci("div", GN, [
                gi(o, { color: "#ffffff" }),
                r[0] ||
                  (r[0] = mi(
                    "video",
                    {
                      autoplay: "",
                      playsinline: "",
                      muted: "",
                      loop: "",
                      class: "error__video",
                    },
                    [mi("source", { src: XN, type: "video/mp4" })],
                    -1
                  )),
                mi("div", KN, Q(e.$t("error.top")) + " " + Q(Ot(n)), 1),
                mi("div", JN, [
                  mi("div", QN, Q(e.$t("error.title")), 1),
                  mi("div", ZN, Q(e.$t("error.description")), 1),
                ]),
                mi("div", eI, [
                  gi(
                    i,
                    { size: "xl", to: Ot(t)("/"), type: "enter" },
                    {
                      default: fn(() => [yi(Q(e.$t("error.enter")), 1)]),
                      _: 1,
                    },
                    8,
                    ["to"]
                  ),
                ]),
              ])
            );
          }
        );
      },
    }),
    [["__scopeId", "data-v-2bdc39a6"]]
  ),
  nI = { key: 0 },
  rI = {
    __name: "nuxt-root",
    setup(e) {
      const t = () => null,
        n = ql(),
        r = n.deferHydration();
      if (n.isHydrating) {
        const e = n.hooks.hookOnce("app:error", r);
        Rc().beforeEach(e);
      }
      const o = !1;
      to(Ic, Mc()), n.hooks.callHookWith((e) => e.map((e) => e()), "vue:setup");
      const i = qc();
      wr((e, t, r) => {
        if (
          (n.hooks.callHook("vue:error", e, t, r).catch((e) => {}),
          ((e) => !!e && "object" == typeof e && Uc in e)(e) &&
            (e.fatal || e.unhandled))
        )
          return n.runWithContext(() => Hc(e)), !1;
      });
      const s = !1;
      return (e, n) => (
        oi(),
        ui(
          Wo,
          { onResolve: Ot(r) },
          {
            default: fn(() => [
              Ot(false)
                ? (oi(), ci("div", nI))
                : Ot(i)
                ? (oi(),
                  ui(Ot(tI), { key: 1, error: Ot(i) }, null, 8, ["error"]))
                : Ot(s)
                ? (oi(),
                  ui(Ot(t), { key: 2, context: Ot(s) }, null, 8, ["context"]))
                : Ot(o)
                ? (oi(), ui(Cr(Ot(o)), { key: 3 }))
                : (oi(), ui(Ot(RN), { key: 4 })),
            ]),
            _: 1,
          },
          8,
          ["onResolve"]
        )
      );
    },
  };
let oI;
{
  let e;
  (oI = async function () {
    var t, n;
    if (e) return e;
    const r = Boolean(
        (null == (t = window.__NUXT__) ? void 0 : t.serverRendered) ??
          "true" ===
            (null == (n = document.getElementById("__NUXT_DATA__"))
              ? void 0
              : n.dataset.ssr)
      )
        ? ((...e) => {
            const t = sa().createApp(...e),
              { mount: n } = t;
            return (
              (t.mount = (e) => {
                const t = la(e);
                if (t) return n(t, !0, aa(t));
              }),
              t
            );
          })(rI)
        : ((...e) => {
            const t = ia().createApp(...e),
              { mount: n } = t;
            return (
              (t.mount = (e) => {
                const r = la(e);
                if (!r) return;
                const o = t._component;
                v(o) || o.render || o.template || (o.template = r.innerHTML),
                  1 === r.nodeType && (r.textContent = "");
                const i = n(r, !1, aa(r));
                return (
                  r instanceof Element &&
                    (r.removeAttribute("v-cloak"),
                    r.setAttribute("data-v-app", "")),
                  i
                );
              }),
              t
            );
          })(rI),
      o = (function (e) {
        var t;
        let n = 0;
        const r = {
          _id: e.id || Il || "nuxt-app",
          _scope: oe(),
          provide: void 0,
          globalName: "nuxt",
          versions: {
            get nuxt() {
              return "3.15.0";
            },
            get vue() {
              return r.vueApp.version;
            },
          },
          payload: ht({
            ...((null == (t = e.ssrContext) ? void 0 : t.payload) || {}),
            data: ht({}),
            state: ft({}),
            once: new Set(),
            _errors: ht({}),
          }),
          static: { data: {} },
          runWithContext: (e) =>
            r._scope.active && !ie() ? r._scope.run(() => Ul(r, e)) : Ul(r, e),
          isHydrating: !0,
          deferHydration() {
            if (!r.isHydrating) return () => {};
            n++;
            let e = !1;
            return () => {
              if (!e)
                return (
                  (e = !0),
                  n--,
                  0 === n
                    ? ((r.isHydrating = !1), r.callHook("app:suspense:resolve"))
                    : void 0
                );
            };
          },
          _asyncDataPromises: {},
          _asyncData: ht({}),
          _payloadRevivers: {},
          ...e,
        };
        {
          const e = window.__NUXT__;
          if (e)
            for (const t in e)
              switch (t) {
                case "data":
                case "state":
                case "_errors":
                  Object.assign(r.payload[t], e[t]);
                  break;
                default:
                  r.payload[t] = e[t];
              }
        }
        (r.hooks = xl()),
          (r.hook = r.hooks.hook),
          (r.callHook = r.hooks.callHook),
          (r.provide = (e, t) => {
            const n = "$" + e;
            zl(r, n, t), zl(r.vueApp.config.globalProperties, n, t);
          }),
          zl(r.vueApp, "$nuxt", r),
          zl(r.vueApp.config.globalProperties, "$nuxt", r);
        {
          window.addEventListener("vite:preloadError", (e) => {
            r.callHook("app:chunkError", { error: e.payload }),
              (r.isHydrating ||
                e.payload.message.includes("Unable to preload CSS")) &&
                e.preventDefault();
          }),
            (window.useNuxtApp = window.useNuxtApp || ql);
          const e = r.hook("app:error", (...e) => {});
          r.hook("app:mounted", e);
        }
        const o = r.payload.config;
        return r.provide("config", o), r;
      })({ vueApp: r });
    async function i(e) {
      await o.callHook("app:error", e),
        (o.payload.error = o.payload.error || Vc(e));
    }
    (r.config.errorHandler = i),
      o.hook("app:suspense:resolve", () => {
        r.config.errorHandler === i && (r.config.errorHandler = void 0);
      });
    try {
      await (async function (e, t) {
        const n = [],
          r = [],
          o = [],
          i = [];
        let s = 0;
        async function a(l) {
          var c;
          const u =
            (null == (c = l.dependsOn)
              ? void 0
              : c.filter(
                  (e) => t.some((t) => t._name === e) && !n.includes(e)
                )) ?? [];
          if (u.length > 0) r.push([new Set(u), l]);
          else {
            const t = (async function (e, t) {
              if ("function" == typeof t) {
                const { provide: n } =
                  (await e.runWithContext(() => t(e))) || {};
                if (n && "object" == typeof n)
                  for (const t in n) e.provide(t, n[t]);
              }
            })(e, l).then(async () => {
              l._name &&
                (n.push(l._name),
                await Promise.all(
                  r.map(async ([e, t]) => {
                    e.has(l._name) &&
                      (e.delete(l._name), 0 === e.size && (s++, await a(t)));
                  })
                ));
            });
            l.parallel ? o.push(t.catch((e) => i.push(e))) : await t;
          }
        }
        for (const l of t) jl(e, l);
        for (const l of t) await a(l);
        if ((await Promise.all(o), s))
          for (let l = 0; l < s; l++) await Promise.all(o);
        if (i.length) throw i[0];
      })(o, aN);
    } catch (s) {
      i(s);
    }
    try {
      await o.hooks.callHook("app:created", r),
        await o.hooks.callHook("app:beforeMount", r),
        r.mount("#__nuxt"),
        await o.hooks.callHook("app:mounted", r),
        await tn();
    } catch (s) {
      i(s);
    }
    return r;
  }),
    (e = oI().catch((e) => {
      throw e;
    }));
}
export {
  dr as $,
  fn as A,
  ta as B,
  rh as C,
  jc as D,
  W as E,
  Qo as F,
  bi as G,
  _N as H,
  Uf as I,
  Hl as J,
  XN as K,
  Cr as L,
  YN as M,
  xh as N,
  U as O,
  Ar as P,
  hn as Q,
  vs as R,
  ml as S,
  rs as T,
  Cn as U,
  Mr as V,
  Lo as W,
  Js as X,
  zs as Y,
  Ai as Z,
  hN as _,
  Ip as a,
  Ct as a0,
  ft as a1,
  gr as a2,
  vt as a3,
  yt as a4,
  no as a5,
  to as a6,
  NN as a7,
  bw as a8,
  _s as a9,
  $a as aa,
  za as ab,
  Xa as ac,
  Qa as ad,
  Cc as ae,
  Sa as af,
  Aa as ag,
  Ir as ah,
  ki as ai,
  vw as aj,
  Lp as ak,
  jN as al,
  IN as b,
  ci as c,
  Un as d,
  mi as e,
  Sr as f,
  Ot as g,
  gi as h,
  ql as i,
  Ch as j,
  yw as k,
  Mc as l,
  LN as m,
  Hi as n,
  oi as o,
  fr as p,
  tn as q,
  Et as r,
  kh as s,
  Q as t,
  dw as u,
  vr as v,
  Ao as w,
  ui as x,
  _i as y,
  yi as z,
};
