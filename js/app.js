/*iu-history-shim*/(function () { ['pushState', 'replaceState'].forEach(function (k) { var o = history[k].bind(history); history[k] = function () { try { return o.apply(null, arguments) } catch (e) { } } }) })();
(() => {
	var Ep = Object.defineProperty; var Tp = (i, t, e) => t in i ? Ep(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e; var xt = (i, t, e) => Tp(i, typeof t != "symbol" ? t + "" : t, e); function Yn(i) { if (i === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return i } function hu(i, t) { i.prototype = Object.create(t.prototype), i.prototype.constructor = i, i.__proto__ = t } var tn = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } }, yr = { duration: .5, overwrite: !1, delay: 0 }, Jo, Ne, de, gn = 1e8, ae = 1 / gn, zo = Math.PI * 2, Ap = zo / 4, Cp = 0, uu = Math.sqrt, Rp = Math.cos, Pp = Math.sin, Ie = function (t) { return typeof t == "string" }, ve = function (t) { return typeof t == "function" }, Jn = function (t) { return typeof t == "number" }, ia = function (t) { return typeof t == "undefined" }, kn = function (t) { return typeof t == "object" }, Qe = function (t) { return t !== !1 }, jo = function () { return typeof window != "undefined" }, Yr = function (t) { return ve(t) || Ie(t) }, du = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function () { }, ze = Array.isArray, Ip = /random\([^)]+\)/g, Lp = /,\s*/g, nu = /(?:-?\.?\d|\.)+/gi, Ko = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Xi = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Do = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Qo = /[+-]=-?[.\d]+/, Dp = /[^,'"\[\]\s]+/gi, Up = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, me, On, Vo, tl, ln = {}, Kr = {}, fu, pu = function (t) { return (Kr = Ss(t, ln)) && Ve }, sa = function (t, e) { return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()") }, xr = function (t, e) { return !e && console.warn(t) }, mu = function (t, e) { return t && (ln[t] = e) && Kr && (Kr[t] = e) || ln }, br = function () { return 0 }, Np = { suppressEvents: !0, isStart: !0, kill: !1 }, Zr = { suppressEvents: !0, kill: !1 }, Op = { suppressEvents: !0 }, el = {}, mi = [], Ho = {}, gu, je = {}, Uo = {}, iu = 30, Jr = [], nl = "", il = function (t) { var e = t[0], n, s; if (kn(e) || ve(e) || (t = [t]), !(n = (e._gsap || {}).harness)) { for (s = Jr.length; s-- && !Jr[s].targetTest(e);); n = Jr[s] } for (s = t.length; s--;)t[s] && (t[s]._gsap || (t[s]._gsap = new ol(t[s], n))) || t.splice(s, 1); return t }, gi = function (t) { return t._gsap || il(_n(t))[0]._gsap }, sl = function (t, e, n) { return (n = t[e]) && ve(n) ? t[e]() : ia(n) && t.getAttribute && t.getAttribute(e) || n }, Xe = function (t, e) { return (t = t.split(",")).forEach(e) || t }, ye = function (t) { return Math.round(t * 1e5) / 1e5 || 0 }, pe = function (t) { return Math.round(t * 1e7) / 1e7 || 0 }, qi = function (t, e) { var n = e.charAt(0), s = parseFloat(e.substr(2)); return t = parseFloat(t), n === "+" ? t + s : n === "-" ? t - s : n === "*" ? t * s : t / s }, Fp = function (t, e) { for (var n = e.length, s = 0; t.indexOf(e[s]) < 0 && ++s < n;); return s < n }, Qr = function () { var t = mi.length, e = mi.slice(0), n, s; for (Ho = {}, mi.length = 0, n = 0; n < t; n++)s = e[n], s && s._lazy && (s.render(s._lazy[0], s._lazy[1], !0)._lazy = 0) }, rl = function (t) { return !!(t._initted || t._startAt || t.add) }, _u = function (t, e, n, s) { mi.length && !Ne && Qr(), t.render(e, n, s || !!(Ne && e < 0 && rl(t))), mi.length && !Ne && Qr() }, vu = function (t) { var e = parseFloat(t); return (e || e === 0) && (t + "").match(Dp).length < 2 ? e : Ie(t) ? t.trim() : t }, yu = function (t) { return t }, cn = function (t, e) { for (var n in e) n in t || (t[n] = e[n]); return t }, kp = function (t) { return function (e, n) { for (var s in n) s in e || s === "duration" && t || s === "ease" || (e[s] = n[s]) } }, Ss = function (t, e) { for (var n in e) t[n] = e[n]; return t }, su = function i(t, e) { for (var n in e) n !== "__proto__" && n !== "constructor" && n !== "prototype" && (t[n] = kn(e[n]) ? i(t[n] || (t[n] = {}), e[n]) : e[n]); return t }, ta = function (t, e) { var n = {}, s; for (s in t) s in e || (n[s] = t[s]); return n }, gr = function (t) { var e = t.parent || me, n = t.keyframes ? kp(ze(t.keyframes)) : cn; if (Qe(t.inherit)) for (; e;)n(t, e.vars.defaults), e = e.parent || e._dp; return t }, Bp = function (t, e) { for (var n = t.length, s = n === e.length; s && n-- && t[n] === e[n];); return n < 0 }, xu = function (t, e, n, s, r) { n === void 0 && (n = "_first"), s === void 0 && (s = "_last"); var a = t[s], o; if (r) for (o = e[r]; a && a[r] > o;)a = a._prev; return a ? (e._next = a._next, a._next = e) : (e._next = t[n], t[n] = e), e._next ? e._next._prev = e : t[s] = e, e._prev = a, e.parent = e._dp = t, e }, ra = function (t, e, n, s) { n === void 0 && (n = "_first"), s === void 0 && (s = "_last"); var r = e._prev, a = e._next; r ? r._next = a : t[n] === e && (t[n] = a), a ? a._prev = r : t[s] === e && (t[s] = r), e._next = e._prev = e.parent = null }, _i = function (t, e) { t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0 }, Hi = function (t, e) { if (t && (!e || e._end > t._dur || e._start < 0)) for (var n = t; n;)n._dirty = 1, n = n.parent; return t }, zp = function (t) { for (var e = t.parent; e && e.parent;)e._dirty = 1, e.totalDuration(), e = e.parent; return t }, Go = function (t, e, n, s) { return t._startAt && (Ne ? t._startAt.revert(Zr) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, s)) }, Vp = function i(t) { return !t || t._ts && i(t.parent) }, ru = function (t) { return t._repeat ? Ms(t._tTime, t = t.duration() + t._rDelay) * t : 0 }, Ms = function (t, e) { var n = Math.floor(t = pe(t / e)); return t && n === t ? n - 1 : n }, ea = function (t, e) { return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur) }, aa = function (t) { return t._end = pe(t._start + (t._tDur / Math.abs(t._ts || t._rts || ae) || 0)) }, oa = function (t, e) { var n = t._dp; return n && n.smoothChildTiming && t._ts && (t._start = pe(n._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), aa(t), n._dirty || Hi(n, t)), t }, bu = function (t, e) { var n; if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (n = ea(t.rawTime(), e), (!e._dur || wr(0, e.totalDuration(), n) - e._tTime > ae) && e.render(n, !0)), Hi(t, e)._dp && t._initted && t._time >= t._dur && t._ts) { if (t._dur < t.duration()) for (n = t; n._dp;)n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp; t._zTime = -ae } }, Fn = function (t, e, n, s) { return e.parent && _i(e), e._start = pe((Jn(n) ? n : n || t !== me ? mn(t, n, e) : t._time) + e._delay), e._end = pe(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), xu(t, e, "_first", "_last", t._sort ? "_start" : 0), Wo(e) || (t._recent = e), s || bu(t, e), t._ts < 0 && oa(t, t._tTime), t }, Su = function (t, e) { return (ln.ScrollTrigger || sa("scrollTrigger", e)) && ln.ScrollTrigger.create(e, t) }, Mu = function (t, e, n, s, r) { if (hl(t, e, r), !t._initted) return 1; if (!n && t._pt && !Ne && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && gu !== Ke.frame) return mi.push(t), t._lazy = [r, s], 1 }, Hp = function i(t) { var e = t.parent; return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || i(e)) }, Wo = function (t) { var e = t.data; return e === "isFromStart" || e === "isStart" }, Gp = function (t, e, n, s) { var r = t.ratio, a = e < 0 || !e && (!t._start && Hp(t) && !(!t._initted && Wo(t)) || (t._ts < 0 || t._dp._ts < 0) && !Wo(t)) ? 0 : 1, o = t._rDelay, l = 0, c, h, d; if (o && t._repeat && (l = wr(0, t._tDur, e), h = Ms(l, o), t._yoyo && h & 1 && (a = 1 - a), h !== Ms(t._tTime, o) && (r = 1 - a, t.vars.repeatRefresh && t._initted && t.invalidate())), a !== r || Ne || s || t._zTime === ae || !e && t._zTime) { if (!t._initted && Mu(t, e, s, n, l)) return; for (d = t._zTime, t._zTime = e || (n ? ae : 0), n || (n = e && !d), t.ratio = a, t._from && (a = 1 - a), t._time = 0, t._tTime = l, c = t._pt; c;)c.r(a, c.d), c = c._next; e < 0 && Go(t, e, n, !0), t._onUpdate && !n && on(t, "onUpdate"), l && t._repeat && !n && t.parent && on(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === a && (a && _i(t, 1), !n && !Ne && (on(t, a ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom())) } else t._zTime || (t._zTime = e) }, Wp = function (t, e, n) { var s; if (n > e) for (s = t._first; s && s._start <= n;) { if (s.data === "isPause" && s._start > e) return s; s = s._next } else for (s = t._last; s && s._start >= n;) { if (s.data === "isPause" && s._start < e) return s; s = s._prev } }, ws = function (t, e, n, s) { var r = t._repeat, a = pe(e) || 0, o = t._tTime / t._tDur; return o && !s && (t._time *= a / t._dur), t._dur = a, t._tDur = r ? r < 0 ? 1e10 : pe(a * (r + 1) + t._rDelay * r) : a, o > 0 && !s && oa(t, t._tTime = t._tDur * o), t.parent && aa(t), n || Hi(t.parent, t), t }, au = function (t) { return t instanceof Be ? Hi(t) : ws(t, t._dur) }, Xp = { _start: 0, endTime: br, totalDuration: br }, mn = function i(t, e, n) { var s = t.labels, r = t._recent || Xp, a = t.duration() >= gn ? r.endTime(!1) : t._dur, o, l, c; return Ie(e) && (isNaN(e) || e in s) ? (l = e.charAt(0), c = e.substr(-1) === "%", o = e.indexOf("="), l === "<" || l === ">" ? (o >= 0 && (e = e.replace(/=/, "")), (l === "<" ? r._start : r.endTime(r._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (c ? (o < 0 ? r : n).totalDuration() / 100 : 1)) : o < 0 ? (e in s || (s[e] = a), s[e]) : (l = parseFloat(e.charAt(o - 1) + e.substr(o + 1)), c && n && (l = l / 100 * (ze(n) ? n[0] : n).totalDuration()), o > 1 ? i(t, e.substr(0, o - 1), n) + l : a + l)) : e == null ? a : +e }, _r = function (t, e, n) { var s = Jn(e[1]), r = (s ? 2 : 1) + (t < 2 ? 0 : 1), a = e[r], o, l; if (s && (a.duration = e[1]), a.parent = n, t) { for (o = a, l = n; l && !("immediateRender" in o);)o = l.vars.defaults || {}, l = Qe(l.vars.inherit) && l.parent; a.immediateRender = Qe(o.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[r - 1] } return new Me(e[0], a, e[r + 1]) }, vi = function (t, e) { return t || t === 0 ? e(t) : e }, wr = function (t, e, n) { return n < t ? t : n > e ? e : n }, Oe = function (t, e) { return !Ie(t) || !(e = Up.exec(t)) ? "" : e[1] }, qp = function (t, e, n) { return vi(n, function (s) { return wr(t, e, s) }) }, Xo = [].slice, wu = function (t, e) { return t && kn(t) && "length" in t && (!e && !t.length || t.length - 1 in t && kn(t[0])) && !t.nodeType && t !== On }, $p = function (t, e, n) { return n === void 0 && (n = []), t.forEach(function (s) { var r; return Ie(s) && !e || wu(s, 1) ? (r = n).push.apply(r, _n(s)) : n.push(s) }) || n }, _n = function (t, e, n) { return de && !e && de.selector ? de.selector(t) : Ie(t) && !n && (Vo || !Es()) ? Xo.call((e || tl).querySelectorAll(t), 0) : ze(t) ? $p(t, n) : wu(t) ? Xo.call(t, 0) : t ? [t] : [] }, qo = function (t) { return t = _n(t)[0] || xr("Invalid scope") || {}, function (e) { var n = t.current || t.nativeElement || t; return _n(e, n.querySelectorAll ? n : n === t ? xr("Invalid scope") || tl.createElement("div") : t) } }, Eu = function (t) { return t.sort(function () { return .5 - Math.random() }) }, Tu = function (t) { if (ve(t)) return t; var e = kn(t) ? t : { each: t }, n = Gi(e.ease), s = e.from || 0, r = parseFloat(e.base) || 0, a = {}, o = s > 0 && s < 1, l = isNaN(s) || o, c = e.axis, h = s, d = s; return Ie(s) ? h = d = { center: .5, edges: .5, end: 1 }[s] || 0 : !o && l && (h = s[0], d = s[1]), function (u, f, m) { var _ = (m || e).length, g = a[_], p, y, x, v, A, T, E, C, b; if (!g) { if (b = e.grid === "auto" ? 0 : (e.grid || [1, gn])[1], !b) { for (E = -gn; E < (E = m[b++].getBoundingClientRect().left) && b < _;); b < _ && b-- } for (g = a[_] = [], p = l ? Math.min(b, _) * h - .5 : s % b, y = b === gn ? 0 : l ? _ * d / b - .5 : s / b | 0, E = 0, C = gn, T = 0; T < _; T++)x = T % b - p, v = y - (T / b | 0), g[T] = A = c ? Math.abs(c === "y" ? v : x) : uu(x * x + v * v), A > E && (E = A), A < C && (C = A); s === "random" && Eu(g), g.max = E - C, g.min = C, g.v = _ = (parseFloat(e.amount) || parseFloat(e.each) * (b > _ ? _ - 1 : c ? c === "y" ? _ / b : b : Math.max(b, _ / b)) || 0) * (s === "edges" ? -1 : 1), g.b = _ < 0 ? r - _ : r, g.u = Oe(e.amount || e.each) || 0, n = n && _ < 0 ? am(n) : n } return _ = (g[u] - g.min) / g.max || 0, pe(g.b + (n ? n(_) : _) * g.v) + g.u } }, $o = function (t) { var e = Math.pow(10, ((t + "").split(".")[1] || "").length); return function (n) { var s = pe(Math.round(parseFloat(n) / t) * t * e); return (s - s % 1) / e + (Jn(n) ? 0 : Oe(n)) } }, Au = function (t, e) { var n = ze(t), s, r; return !n && kn(t) && (s = n = t.radius || gn, t.values ? (t = _n(t.values), (r = !Jn(t[0])) && (s *= s)) : t = $o(t.increment)), vi(e, n ? ve(t) ? function (a) { return r = t(a), Math.abs(r - a) <= s ? r : a } : function (a) { for (var o = parseFloat(r ? a.x : a), l = parseFloat(r ? a.y : 0), c = gn, h = 0, d = t.length, u, f; d--;)r ? (u = t[d].x - o, f = t[d].y - l, u = u * u + f * f) : u = Math.abs(t[d] - o), u < c && (c = u, h = d); return h = !s || c <= s ? t[h] : a, r || h === a || Jn(a) ? h : h + Oe(a) } : $o(t)) }, Cu = function (t, e, n, s) { return vi(ze(t) ? !e : n === !0 ? !!(n = 0) : !s, function () { return ze(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (s = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t - n / 2 + Math.random() * (e - t + n * .99)) / n) * n * s) / s }) }, Yp = function () { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)e[n] = arguments[n]; return function (s) { return e.reduce(function (r, a) { return a(r) }, s) } }, Zp = function (t, e) { return function (n) { return t(parseFloat(n)) + (e || Oe(n)) } }, Jp = function (t, e, n) { return Pu(t, e, 0, 1, n) }, Ru = function (t, e, n) { return vi(n, function (s) { return t[~~e(s)] }) }, jp = function i(t, e, n) { var s = e - t; return ze(t) ? Ru(t, i(0, t.length), e) : vi(n, function (r) { return (s + (r - t) % s) % s + t }) }, Kp = function i(t, e, n) { var s = e - t, r = s * 2; return ze(t) ? Ru(t, i(0, t.length - 1), e) : vi(n, function (a) { return a = (r + (a - t) % r) % r || 0, t + (a > s ? r - a : a) }) }, Ts = function (t) { return t.replace(Ip, function (e) { var n = e.indexOf("[") + 1, s = e.substring(n || 7, n ? e.indexOf("]") : e.length - 1).split(Lp); return Cu(n ? s : +s[0], n ? 0 : +s[1], +s[2] || 1e-5) }) }, Pu = function (t, e, n, s, r) { var a = e - t, o = s - n; return vi(r, function (l) { return n + ((l - t) / a * o || 0) }) }, Qp = function i(t, e, n, s) { var r = isNaN(t + e) ? 0 : function (f) { return (1 - f) * t + f * e }; if (!r) { var a = Ie(t), o = {}, l, c, h, d, u; if (n === !0 && (s = 1) && (n = null), a) t = { p: t }, e = { p: e }; else if (ze(t) && !ze(e)) { for (h = [], d = t.length, u = d - 2, c = 1; c < d; c++)h.push(i(t[c - 1], t[c])); d--, r = function (m) { m *= d; var _ = Math.min(u, ~~m); return h[_](m - _) }, n = e } else s || (t = Ss(ze(t) ? [] : {}, t)); if (!h) { for (l in e) ll.call(o, t, l, "get", e[l]); r = function (m) { return fl(m, o) || (a ? t.p : t) } } } return vi(n, r) }, ou = function (t, e, n) { var s = t.labels, r = gn, a, o, l; for (a in s) o = s[a] - e, o < 0 == !!n && o && r > (o = Math.abs(o)) && (l = a, r = o); return l }, on = function (t, e, n) { var s = t.vars, r = s[e], a = de, o = t._ctx, l, c, h; if (r) return l = s[e + "Params"], c = s.callbackScope || t, n && mi.length && Qr(), o && (de = o), h = l ? r.apply(c, l) : r.call(c), de = a, h }, pr = function (t) { return _i(t), t.scrollTrigger && t.scrollTrigger.kill(!!Ne), t.progress() < 1 && on(t, "onInterrupt"), t }, bs, Iu = [], Lu = function (t) { if (t) if (t = !t.name && t.default || t, jo() || t.headless) { var e = t.name, n = ve(t), s = e && !n && t.init ? function () { this._props = [] } : t, r = { init: br, render: fl, add: ll, kill: gm, modifier: mm, rawVars: 0 }, a = { targetTest: 0, get: 0, getSetter: la, aliases: {}, register: 0 }; if (Es(), t !== s) { if (je[e]) return; cn(s, cn(ta(t, r), a)), Ss(s.prototype, Ss(r, ta(t, a))), je[s.prop = e] = s, t.targetTest && (Jr.push(s), el[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin" } mu(e, s), t.register && t.register(Ve, s, qe) } else Iu.push(t) }, re = 255, mr = { aqua: [0, re, re], lime: [0, re, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, re], navy: [0, 0, 128], white: [re, re, re], olive: [128, 128, 0], yellow: [re, re, 0], orange: [re, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [re, 0, 0], pink: [re, 192, 203], cyan: [0, re, re], transparent: [re, re, re, 0] }, No = function (t, e, n) { return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (n - e) * t * 6 : t < .5 ? n : t * 3 < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) * re + .5 | 0 }, Du = function (t, e, n) { var s = t ? Jn(t) ? [t >> 16, t >> 8 & re, t & re] : 0 : mr.black, r, a, o, l, c, h, d, u, f, m; if (!s) { if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), mr[t]) s = mr[t]; else if (t.charAt(0) === "#") { if (t.length < 6 && (r = t.charAt(1), a = t.charAt(2), o = t.charAt(3), t = "#" + r + r + a + a + o + o + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9) return s = parseInt(t.substr(1, 6), 16), [s >> 16, s >> 8 & re, s & re, parseInt(t.substr(7), 16) / 255]; t = parseInt(t.substr(1), 16), s = [t >> 16, t >> 8 & re, t & re] } else if (t.substr(0, 3) === "hsl") { if (s = m = t.match(nu), !e) l = +s[0] % 360 / 360, c = +s[1] / 100, h = +s[2] / 100, a = h <= .5 ? h * (c + 1) : h + c - h * c, r = h * 2 - a, s.length > 3 && (s[3] *= 1), s[0] = No(l + 1 / 3, r, a), s[1] = No(l, r, a), s[2] = No(l - 1 / 3, r, a); else if (~t.indexOf("=")) return s = t.match(Ko), n && s.length < 4 && (s[3] = 1), s } else s = t.match(nu) || mr.transparent; s = s.map(Number) } return e && !m && (r = s[0] / re, a = s[1] / re, o = s[2] / re, d = Math.max(r, a, o), u = Math.min(r, a, o), h = (d + u) / 2, d === u ? l = c = 0 : (f = d - u, c = h > .5 ? f / (2 - d - u) : f / (d + u), l = d === r ? (a - o) / f + (a < o ? 6 : 0) : d === a ? (o - r) / f + 2 : (r - a) / f + 4, l *= 60), s[0] = ~~(l + .5), s[1] = ~~(c * 100 + .5), s[2] = ~~(h * 100 + .5)), n && s.length < 4 && (s[3] = 1), s }, Uu = function (t) { var e = [], n = [], s = -1; return t.split(Zn).forEach(function (r) { var a = r.match(Xi) || []; e.push.apply(e, a), n.push(s += a.length + 1) }), e.c = n, e }, lu = function (t, e, n) { var s = "", r = (t + s).match(Zn), a = e ? "hsla(" : "rgba(", o = 0, l, c, h, d; if (!r) return t; if (r = r.map(function (u) { return (u = Du(u, e, 1)) && a + (e ? u[0] + "," + u[1] + "%," + u[2] + "%," + u[3] : u.join(",")) + ")" }), n && (h = Uu(t), l = n.c, l.join(s) !== h.c.join(s))) for (c = t.replace(Zn, "1").split(Xi), d = c.length - 1; o < d; o++)s += c[o] + (~l.indexOf(o) ? r.shift() || a + "0,0,0,0)" : (h.length ? h : r.length ? r : n).shift()); if (!c) for (c = t.split(Zn), d = c.length - 1; o < d; o++)s += c[o] + r[o]; return s + c[d] }, Zn = function () { var i = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t; for (t in mr) i += "|" + t + "\\b"; return new RegExp(i + ")", "gi") }(), tm = /hsl[a]?\(/, al = function (t) { var e = t.join(" "), n; if (Zn.lastIndex = 0, Zn.test(e)) return n = tm.test(e), t[1] = lu(t[1], n), t[0] = lu(t[0], n, Uu(t[1])), !0 }, Sr, Ke = function () { var i = Date.now, t = 500, e = 33, n = i(), s = n, r = 1e3 / 240, a = r, o = [], l, c, h, d, u, f, m = function _(g) { var p = i() - s, y = g === !0, x, v, A, T; if ((p > t || p < 0) && (n += p - e), s += p, A = s - n, x = A - a, (x > 0 || y) && (T = ++d.frame, u = A - d.time * 1e3, d.time = A = A / 1e3, a += x + (x >= r ? 4 : r - x), v = 1), y || (l = c(_)), v) for (f = 0; f < o.length; f++)o[f](A, u, T, g) }; return d = { time: 0, frame: 0, tick: function () { m(!0) }, deltaRatio: function (g) { return u / (1e3 / (g || 60)) }, wake: function () { fu && (!Vo && jo() && (On = Vo = window, tl = On.document || {}, ln.gsap = Ve, (On.gsapVersions || (On.gsapVersions = [])).push(Ve.version), pu(Kr || On.GreenSockGlobals || !On.gsap && On || {}), Iu.forEach(Lu)), h = typeof requestAnimationFrame != "undefined" && requestAnimationFrame, l && d.sleep(), c = h || function (g) { return setTimeout(g, a - d.time * 1e3 + 1 | 0) }, Sr = 1, m(2)) }, sleep: function () { (h ? cancelAnimationFrame : clearTimeout)(l), Sr = 0, c = br }, lagSmoothing: function (g, p) { t = g || 1 / 0, e = Math.min(p || 33, t) }, fps: function (g) { r = 1e3 / (g || 240), a = d.time * 1e3 + r }, add: function (g, p, y) { var x = p ? function (v, A, T, E) { g(v, A, T, E), d.remove(x) } : g; return d.remove(g), o[y ? "unshift" : "push"](x), Es(), x }, remove: function (g, p) { ~(p = o.indexOf(g)) && o.splice(p, 1) && f >= p && f-- }, _listeners: o }, d }(), Es = function () { return !Sr && Ke.wake() }, Wt = {}, em = /^[\d.\-M][\d.\-,\s]/, nm = /["']/g, im = function (t) { for (var e = {}, n = t.substr(1, t.length - 3).split(":"), s = n[0], r = 1, a = n.length, o, l, c; r < a; r++)l = n[r], o = r !== a - 1 ? l.lastIndexOf(",") : l.length, c = l.substr(0, o), e[s] = isNaN(c) ? c.replace(nm, "").trim() : +c, s = l.substr(o + 1).trim(); return e }, sm = function (t) { var e = t.indexOf("(") + 1, n = t.indexOf(")"), s = t.indexOf("(", e); return t.substring(e, ~s && s < n ? t.indexOf(")", n + 1) : n) }, rm = function (t) { var e = (t + "").split("("), n = Wt[e[0]]; return n && e.length > 1 && n.config ? n.config.apply(null, ~t.indexOf("{") ? [im(e[1])] : sm(t).split(",").map(vu)) : Wt._CE && em.test(t) ? Wt._CE("", t) : n }, am = function (t) { return function (e) { return 1 - t(1 - e) } }, Gi = function (t, e) { return t && (ve(t) ? t : Wt[t] || rm(t)) || e }, $i = function (t, e, n, s) { n === void 0 && (n = function (l) { return 1 - e(1 - l) }), s === void 0 && (s = function (l) { return l < .5 ? e(l * 2) / 2 : 1 - e((1 - l) * 2) / 2 }); var r = { easeIn: e, easeOut: n, easeInOut: s }, a; return Xe(t, function (o) { Wt[o] = ln[o] = r, Wt[a = o.toLowerCase()] = n; for (var l in r) Wt[a + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = Wt[o + "." + l] = r[l] }), r }, Nu = function (t) { return function (e) { return e < .5 ? (1 - t(1 - e * 2)) / 2 : .5 + t((e - .5) * 2) / 2 } }, Oo = function i(t, e, n) { var s = e >= 1 ? e : 1, r = (n || (t ? .3 : .45)) / (e < 1 ? e : 1), a = r / zo * (Math.asin(1 / s) || 0), o = function (h) { return h === 1 ? 1 : s * Math.pow(2, -10 * h) * Pp((h - a) * r) + 1 }, l = t === "out" ? o : t === "in" ? function (c) { return 1 - o(1 - c) } : Nu(o); return r = zo / r, l.config = function (c, h) { return i(t, c, h) }, l }, Fo = function i(t, e) { e === void 0 && (e = 1.70158); var n = function (a) { return a ? --a * a * ((e + 1) * a + e) + 1 : 0 }, s = t === "out" ? n : t === "in" ? function (r) { return 1 - n(1 - r) } : Nu(n); return s.config = function (r) { return i(t, r) }, s }; Xe("Linear,Quad,Cubic,Quart,Quint,Strong", function (i, t) { var e = t < 5 ? t + 1 : t; $i(i + ",Power" + (e - 1), t ? function (n) { return Math.pow(n, e) } : function (n) { return n }, function (n) { return 1 - Math.pow(1 - n, e) }, function (n) { return n < .5 ? Math.pow(n * 2, e) / 2 : 1 - Math.pow((1 - n) * 2, e) / 2 }) }); Wt.Linear.easeNone = Wt.none = Wt.Linear.easeIn; $i("Elastic", Oo("in"), Oo("out"), Oo()); (function (i, t) { var e = 1 / t, n = 2 * e, s = 2.5 * e, r = function (o) { return o < e ? i * o * o : o < n ? i * Math.pow(o - 1.5 / t, 2) + .75 : o < s ? i * (o -= 2.25 / t) * o + .9375 : i * Math.pow(o - 2.625 / t, 2) + .984375 }; $i("Bounce", function (a) { return 1 - r(1 - a) }, r) })(7.5625, 2.75); $i("Expo", function (i) { return Math.pow(2, 10 * (i - 1)) * i + i * i * i * i * i * i * (1 - i) }); $i("Circ", function (i) { return -(uu(1 - i * i) - 1) }); $i("Sine", function (i) { return i === 1 ? 1 : -Rp(i * Ap) + 1 }); $i("Back", Fo("in"), Fo("out"), Fo()); Wt.SteppedEase = Wt.steps = ln.SteppedEase = { config: function (t, e) { t === void 0 && (t = 1); var n = 1 / t, s = t + (e ? 0 : 1), r = e ? 1 : 0, a = 1 - ae; return function (o) { return ((s * wr(0, a, o) | 0) + r) * n } } }; yr.ease = Wt["quad.out"]; Xe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (i) { return nl += i + "," + i + "Params," }); var ol = function (t, e) { this.id = Cp++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : sl, this.set = e ? e.getSetter : la }, Mr = function () { function i(e) { this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, ws(this, +e.duration, 1, 1), this.data = e.data, de && (this._ctx = de, de.data.push(this)), Sr || Ke.wake() } var t = i.prototype; return t.delay = function (n) { return n || n === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + n - this._delay), this._delay = n, this) : this._delay }, t.duration = function (n) { return arguments.length ? this.totalDuration(this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n) : this.totalDuration() && this._dur }, t.totalDuration = function (n) { return arguments.length ? (this._dirty = 0, ws(this, this._repeat < 0 ? n : (n - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur }, t.totalTime = function (n, s) { if (Es(), !arguments.length) return this._tTime; var r = this._dp; if (r && r.smoothChildTiming && this._ts) { for (oa(this, n), !r._dp || r.parent || bu(r, this); r && r.parent;)r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent; !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && n < this._tDur || this._ts < 0 && n > 0 || !this._tDur && !n) && Fn(this._dp, this, this._start - this._delay) } return (this._tTime !== n || !this._dur && !s || this._initted && Math.abs(this._zTime) === ae || !this._initted && this._dur && n || !n && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = n), _u(this, n, s)), this }, t.time = function (n, s) { return arguments.length ? this.totalTime(Math.min(this.totalDuration(), n + ru(this)) % (this._dur + this._rDelay) || (n ? this._dur : 0), s) : this._time }, t.totalProgress = function (n, s) { return arguments.length ? this.totalTime(this.totalDuration() * n, s) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0 }, t.progress = function (n, s) { return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) + ru(this), s) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0 }, t.iteration = function (n, s) { var r = this.duration() + this._rDelay; return arguments.length ? this.totalTime(this._time + (n - 1) * r, s) : this._repeat ? Ms(this._tTime, r) + 1 : 1 }, t.timeScale = function (n, s) { if (!arguments.length) return this._rts === -ae ? 0 : this._rts; if (this._rts === n) return this; var r = this.parent && this._ts ? ea(this.parent._time, this) : this._tTime; return this._rts = +n || 0, this._ts = this._ps || n === -ae ? 0 : this._rts, this.totalTime(wr(-Math.abs(this._delay), this.totalDuration(), r), s !== !1), aa(this), zp(this) }, t.paused = function (n) { return arguments.length ? (this._ps !== n && (this._ps = n, n ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Es(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== ae && (this._tTime -= ae)))), this) : this._ps }, t.startTime = function (n) { if (arguments.length) { this._start = pe(n); var s = this.parent || this._dp; return s && (s._sort || !this.parent) && Fn(s, this, this._start - this._delay), this } return this._start }, t.endTime = function (n) { return this._start + (Qe(n) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1) }, t.rawTime = function (n) { var s = this.parent || this._dp; return s ? n && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? ea(s.rawTime(n), this) : this._tTime : this._tTime }, t.revert = function (n) { n === void 0 && (n = Op); var s = Ne; return Ne = n, rl(this) && (this.timeline && this.timeline.revert(n), this.totalTime(-.01, n.suppressEvents)), this.data !== "nested" && n.kill !== !1 && this.kill(), Ne = s, this }, t.globalTime = function (n) { for (var s = this, r = arguments.length ? n : s.rawTime(); s;)r = s._start + r / (Math.abs(s._ts) || 1), s = s._dp; return !this.parent && this._sat ? this._sat.globalTime(n) : r }, t.repeat = function (n) { return arguments.length ? (this._repeat = n === 1 / 0 ? -2 : n, au(this)) : this._repeat === -2 ? 1 / 0 : this._repeat }, t.repeatDelay = function (n) { if (arguments.length) { var s = this._time; return this._rDelay = n, au(this), s ? this.time(s) : this } return this._rDelay }, t.yoyo = function (n) { return arguments.length ? (this._yoyo = n, this) : this._yoyo }, t.seek = function (n, s) { return this.totalTime(mn(this, n), Qe(s)) }, t.restart = function (n, s) { return this.play().totalTime(n ? -this._delay : 0, Qe(s)), this._dur || (this._zTime = -ae), this }, t.play = function (n, s) { return n != null && this.seek(n, s), this.reversed(!1).paused(!1) }, t.reverse = function (n, s) { return n != null && this.seek(n || this.totalDuration(), s), this.reversed(!0).paused(!1) }, t.pause = function (n, s) { return n != null && this.seek(n, s), this.paused(!0) }, t.resume = function () { return this.paused(!1) }, t.reversed = function (n) { return arguments.length ? (!!n !== this.reversed() && this.timeScale(-this._rts || (n ? -ae : 0)), this) : this._rts < 0 }, t.invalidate = function () { return this._initted = this._act = 0, this._zTime = -ae, this }, t.isActive = function () { var n = this.parent || this._dp, s = this._start, r; return !!(!n || this._ts && this._initted && n.isActive() && (r = n.rawTime(!0)) >= s && r < this.endTime(!0) - ae) }, t.eventCallback = function (n, s, r) { var a = this.vars; return arguments.length > 1 ? (s ? (a[n] = s, r && (a[n + "Params"] = r), n === "onUpdate" && (this._onUpdate = s)) : delete a[n], this) : a[n] }, t.then = function (n) { var s = this, r = s._prom; return new Promise(function (a) { var o = ve(n) ? n : yu, l = function () { var h = s.then; s.then = null, r && r(), ve(o) && (o = o(s)) && (o.then || o === s) && (s.then = h), a(o), s.then = h }; s._initted && s.totalProgress() === 1 && s._ts >= 0 || !s._tTime && s._ts < 0 ? l() : s._prom = l }) }, t.kill = function () { pr(this) }, i }(); cn(Mr.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: !1, parent: null, _initted: !1, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -ae, _prom: 0, _ps: !1, _rts: 1 }); var Be = function (i) { hu(t, i); function t(n, s) { var r; return n === void 0 && (n = {}), r = i.call(this, n) || this, r.labels = {}, r.smoothChildTiming = !!n.smoothChildTiming, r.autoRemoveChildren = !!n.autoRemoveChildren, r._sort = Qe(n.sortChildren), me && Fn(n.parent || me, Yn(r), s), n.reversed && r.reverse(), n.paused && r.paused(!0), n.scrollTrigger && Su(Yn(r), n.scrollTrigger), r } var e = t.prototype; return e.to = function (s, r, a) { return _r(0, arguments, this), this }, e.from = function (s, r, a) { return _r(1, arguments, this), this }, e.fromTo = function (s, r, a, o) { return _r(2, arguments, this), this }, e.set = function (s, r, a) { return r.duration = 0, r.parent = this, gr(r).repeatDelay || (r.repeat = 0), r.immediateRender = !!r.immediateRender, new Me(s, r, mn(this, a), 1), this }, e.call = function (s, r, a) { return Fn(this, Me.delayedCall(0, s, r), a) }, e.staggerTo = function (s, r, a, o, l, c, h) { return a.duration = r, a.stagger = a.stagger || o, a.onComplete = c, a.onCompleteParams = h, a.parent = this, new Me(s, a, mn(this, l)), this }, e.staggerFrom = function (s, r, a, o, l, c, h) { return a.runBackwards = 1, gr(a).immediateRender = Qe(a.immediateRender), this.staggerTo(s, r, a, o, l, c, h) }, e.staggerFromTo = function (s, r, a, o, l, c, h, d) { return o.startAt = a, gr(o).immediateRender = Qe(o.immediateRender), this.staggerTo(s, r, o, l, c, h, d) }, e.render = function (s, r, a) { var o = this._time, l = this._dirty ? this.totalDuration() : this._tDur, c = this._dur, h = s <= 0 ? 0 : pe(s), d = this._zTime < 0 != s < 0 && (this._initted || !c), u, f, m, _, g, p, y, x, v, A, T, E; if (this !== me && h > l && s >= 0 && (h = l), h !== this._tTime || a || d) { if (o !== this._time && c && (h += this._time - o, s += this._time - o), u = h, v = this._start, x = this._ts, p = !x, d && (c || (o = this._zTime), (s || !r) && (this._zTime = s)), this._repeat) { if (T = this._yoyo, g = c + this._rDelay, this._repeat < -1 && s < 0) return this.totalTime(g * 100 + s, r, a); if (u = pe(h % g), h === l ? (_ = this._repeat, u = c) : (A = pe(h / g), _ = ~~A, _ && _ === A && (u = c, _--), u > c && (u = c)), A = Ms(this._tTime, g), !o && this._tTime && A !== _ && this._tTime - A * g - this._dur <= 0 && (A = _), T && _ & 1 && (u = c - u, E = 1), _ !== A && !this._lock) { var C = T && A & 1, b = C === (T && _ & 1); if (_ < A && (C = !C), o = C ? 0 : h % c ? c : h, this._lock = 1, this.render(o || (E ? 0 : pe(_ * g)), r, !c)._lock = 0, this._tTime = h, !r && this.parent && on(this, "onRepeat"), this.vars.repeatRefresh && !E && (this.invalidate()._lock = 1, A = _), o && o !== this._time || p !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this; if (c = this._dur, l = this._tDur, b && (this._lock = 2, o = C ? c : -1e-4, this.render(o, !0), this.vars.repeatRefresh && !E && this.invalidate()), this._lock = 0, !this._ts && !p) return this } } if (this._hasPause && !this._forcing && this._lock < 2 && (y = Wp(this, pe(o), pe(u)), y && (h -= u - (u = y._start))), this._tTime = h, this._time = u, this._act = !!x, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = s, o = 0), !o && h && c && !r && !A && (on(this, "onStart"), this._tTime !== h)) return this; if (u >= o && s >= 0) for (f = this._first; f;) { if (m = f._next, (f._act || u >= f._start) && f._ts && y !== f) { if (f.parent !== this) return this.render(s, r, a); if (f.render(f._ts > 0 ? (u - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (u - f._start) * f._ts, r, a), u !== this._time || !this._ts && !p) { y = 0, m && (h += this._zTime = -ae); break } } f = m } else { f = this._last; for (var S = s < 0 ? s : u; f;) { if (m = f._prev, (f._act || S <= f._end) && f._ts && y !== f) { if (f.parent !== this) return this.render(s, r, a); if (f.render(f._ts > 0 ? (S - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (S - f._start) * f._ts, r, a || Ne && rl(f)), u !== this._time || !this._ts && !p) { y = 0, m && (h += this._zTime = S ? -ae : ae); break } } f = m } } if (y && !r && (this.pause(), y.render(u >= o ? 0 : -ae)._zTime = u >= o ? 1 : -1, this._ts)) return this._start = v, aa(this), this.render(s, r, a); this._onUpdate && !r && on(this, "onUpdate", !0), (h === l && this._tTime >= this.totalDuration() || !h && o) && (v === this._start || Math.abs(x) !== Math.abs(this._ts)) && (this._lock || ((s || !c) && (h === l && this._ts > 0 || !h && this._ts < 0) && _i(this, 1), !r && !(s < 0 && !o) && (h || o || !l) && (on(this, h === l && s >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < l && this.timeScale() > 0) && this._prom()))) } return this }, e.add = function (s, r) { var a = this; if (Jn(r) || (r = mn(this, r, s)), !(s instanceof Mr)) { if (ze(s)) return s.forEach(function (o) { return a.add(o, r) }), this; if (Ie(s)) return this.addLabel(s, r); if (ve(s)) s = Me.delayedCall(0, s); else return this } return this !== s ? Fn(this, s, r) : this }, e.getChildren = function (s, r, a, o) { s === void 0 && (s = !0), r === void 0 && (r = !0), a === void 0 && (a = !0), o === void 0 && (o = -gn); for (var l = [], c = this._first; c;)c._start >= o && (c instanceof Me ? r && l.push(c) : (a && l.push(c), s && l.push.apply(l, c.getChildren(!0, r, a)))), c = c._next; return l }, e.getById = function (s) { for (var r = this.getChildren(1, 1, 1), a = r.length; a--;)if (r[a].vars.id === s) return r[a] }, e.remove = function (s) { return Ie(s) ? this.removeLabel(s) : ve(s) ? this.killTweensOf(s) : (s.parent === this && ra(this, s), s === this._recent && (this._recent = this._last), Hi(this)) }, e.totalTime = function (s, r) { return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = pe(Ke.time - (this._ts > 0 ? s / this._ts : (this.totalDuration() - s) / -this._ts))), i.prototype.totalTime.call(this, s, r), this._forcing = 0, this) : this._tTime }, e.addLabel = function (s, r) { return this.labels[s] = mn(this, r), this }, e.removeLabel = function (s) { return delete this.labels[s], this }, e.addPause = function (s, r, a) { var o = Me.delayedCall(0, r || br, a); return o.data = "isPause", this._hasPause = 1, Fn(this, o, mn(this, s)) }, e.removePause = function (s) { var r = this._first; for (s = mn(this, s); r;)r._start === s && r.data === "isPause" && _i(r), r = r._next }, e.killTweensOf = function (s, r, a) { for (var o = this.getTweensOf(s, a), l = o.length; l--;)pi !== o[l] && o[l].kill(s, r); return this }, e.getTweensOf = function (s, r) { for (var a = [], o = _n(s), l = this._first, c = Jn(r), h; l;)l instanceof Me ? Fp(l._targets, o) && (c ? (!pi || l._initted && l._ts) && l.globalTime(0) <= r && l.globalTime(l.totalDuration()) > r : !r || l.isActive()) && a.push(l) : (h = l.getTweensOf(o, r)).length && a.push.apply(a, h), l = l._next; return a }, e.tweenTo = function (s, r) { r = r || {}; var a = this, o = mn(a, s), l = r, c = l.startAt, h = l.onStart, d = l.onStartParams, u = l.immediateRender, f, m = Me.to(a, cn({ ease: r.ease || "none", lazy: !1, immediateRender: !1, time: o, overwrite: "auto", duration: r.duration || Math.abs((o - (c && "time" in c ? c.time : a._time)) / a.timeScale()) || ae, onStart: function () { if (a.pause(), !f) { var g = r.duration || Math.abs((o - (c && "time" in c ? c.time : a._time)) / a.timeScale()); m._dur !== g && ws(m, g, 0, 1).render(m._time, !0, !0), f = 1 } h && h.apply(m, d || []) } }, r)); return u ? m.render(0) : m }, e.tweenFromTo = function (s, r, a) { return this.tweenTo(r, cn({ startAt: { time: mn(this, s) } }, a)) }, e.recent = function () { return this._recent }, e.nextLabel = function (s) { return s === void 0 && (s = this._time), ou(this, mn(this, s)) }, e.previousLabel = function (s) { return s === void 0 && (s = this._time), ou(this, mn(this, s), 1) }, e.currentLabel = function (s) { return arguments.length ? this.seek(s, !0) : this.previousLabel(this._time + ae) }, e.shiftChildren = function (s, r, a) { a === void 0 && (a = 0); var o = this._first, l = this.labels, c; for (s = pe(s); o;)o._start >= a && (o._start += s, o._end += s), o = o._next; if (r) for (c in l) l[c] >= a && (l[c] += s); return Hi(this) }, e.invalidate = function (s) { var r = this._first; for (this._lock = 0; r;)r.invalidate(s), r = r._next; return i.prototype.invalidate.call(this, s) }, e.clear = function (s) { s === void 0 && (s = !0); for (var r = this._first, a; r;)a = r._next, this.remove(r), r = a; return this._dp && (this._time = this._tTime = this._pTime = 0), s && (this.labels = {}), Hi(this) }, e.totalDuration = function (s) { var r = 0, a = this, o = a._last, l = gn, c, h, d; if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -s : s)); if (a._dirty) { for (d = a.parent; o;)c = o._prev, o._dirty && o.totalDuration(), h = o._start, h > l && a._sort && o._ts && !a._lock ? (a._lock = 1, Fn(a, o, h - o._delay, 1)._lock = 0) : l = h, h < 0 && o._ts && (r -= h, (!d && !a._dp || d && d.smoothChildTiming) && (a._start += pe(h / a._ts), a._time -= h, a._tTime -= h), a.shiftChildren(-h, !1, -1 / 0), l = 0), o._end > r && o._ts && (r = o._end), o = c; ws(a, a === me && a._time > r ? a._time : r, 1, 1), a._dirty = 0 } return a._tDur }, t.updateRoot = function (s) { if (me._ts && (_u(me, ea(s, me)), gu = Ke.frame), Ke.frame >= iu) { iu += tn.autoSleep || 120; var r = me._first; if ((!r || !r._ts) && tn.autoSleep && Ke._listeners.length < 2) { for (; r && !r._ts;)r = r._next; r || Ke.sleep() } } }, t }(Mr); cn(Be.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 }); var om = function (t, e, n, s, r, a, o) { var l = new qe(this._pt, t, e, 0, 1, dl, null, r), c = 0, h = 0, d, u, f, m, _, g, p, y; for (l.b = n, l.e = s, n += "", s += "", (p = ~s.indexOf("random(")) && (s = Ts(s)), a && (y = [n, s], a(y, t, e), n = y[0], s = y[1]), u = n.match(Do) || []; d = Do.exec(s);)m = d[0], _ = s.substring(c, d.index), f ? f = (f + 1) % 5 : _.substr(-5) === "rgba(" && (f = 1), m !== u[h++] && (g = parseFloat(u[h - 1]) || 0, l._pt = { _next: l._pt, p: _ || h === 1 ? _ : ",", s: g, c: m.charAt(1) === "=" ? qi(g, m) - g : parseFloat(m) - g, m: f && f < 4 ? Math.round : 0 }, c = Do.lastIndex); return l.c = c < s.length ? s.substring(c, s.length) : "", l.fp = o, (Qo.test(s) || p) && (l.e = 0), this._pt = l, l }, ll = function (t, e, n, s, r, a, o, l, c, h) { ve(s) && (s = s(r || 0, t, a)); var d = t[e], u = n !== "get" ? n : ve(d) ? c ? t[e.indexOf("set") || !ve(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](c) : t[e]() : d, f = ve(d) ? c ? dm : ku : ul, m; if (Ie(s) && (~s.indexOf("random(") && (s = Ts(s)), s.charAt(1) === "=" && (m = qi(u, s) + (Oe(u) || 0), (m || m === 0) && (s = m))), !h || u !== s || Yo) return !isNaN(u * s) && s !== "" ? (m = new qe(this._pt, t, e, +u || 0, s - (u || 0), typeof d == "boolean" ? pm : Bu, 0, f), c && (m.fp = c), o && m.modifier(o, this, t), this._pt = m) : (!d && !(e in t) && sa(e, s), om.call(this, t, e, u, s, f, l || tn.stringFilter, c)) }, lm = function (t, e, n, s, r) { if (ve(t) && (t = vr(t, r, e, n, s)), !kn(t) || t.style && t.nodeType || ze(t) || du(t)) return Ie(t) ? vr(t, r, e, n, s) : t; var a = {}, o; for (o in t) a[o] = vr(t[o], r, e, n, s); return a }, cl = function (t, e, n, s, r, a) { var o, l, c, h; if (je[t] && (o = new je[t]).init(r, o.rawVars ? e[t] : lm(e[t], s, r, a, n), n, s, a) !== !1 && (n._pt = l = new qe(n._pt, r, t, 0, 1, o.render, o, 0, o.priority), n !== bs)) for (c = n._ptLookup[n._targets.indexOf(r)], h = o._props.length; h--;)c[o._props[h]] = l; return o }, pi, Yo, hl = function i(t, e, n) { var s = t.vars, r = s.ease, a = s.startAt, o = s.immediateRender, l = s.lazy, c = s.onUpdate, h = s.runBackwards, d = s.yoyoEase, u = s.keyframes, f = s.autoRevert, m = t._dur, _ = t._startAt, g = t._targets, p = t.parent, y = p && p.data === "nested" ? p.vars.targets : g, x = t._overwrite === "auto" && !Jo, v = t.timeline, A = s.easeReverse || d, T, E, C, b, S, P, H, z, W, U, I, G, D; if (v && (!u || !r) && (r = "none"), t._ease = Gi(r, yr.ease), t._rEase = A && (Gi(A) || t._ease), t._from = !v && !!s.runBackwards, t._from && (t.ratio = 1), !v || u && !s.stagger) { if (z = g[0] ? gi(g[0]).harness : 0, G = z && s[z.prop], T = ta(s, el), _ && (_._zTime < 0 && _.progress(1), e < 0 && h && o && !f ? _.render(-1, !0) : _.revert(h && m ? Zr : Np), _._lazy = 0), a) { if (_i(t._startAt = Me.set(g, cn({ data: "isStart", overwrite: !1, parent: p, immediateRender: !0, lazy: !_ && Qe(l), startAt: null, delay: 0, onUpdate: c && function () { return on(t, "onUpdate") }, stagger: 0 }, a))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (Ne || !o && !f) && t._startAt.revert(Zr), o && m && e <= 0 && n <= 0) { e && (t._zTime = e); return } } else if (h && m && !_) { if (e && (o = !1), C = cn({ overwrite: !1, data: "isFromStart", lazy: o && !_ && Qe(l), immediateRender: o, stagger: 0, parent: p }, T), G && (C[z.prop] = G), _i(t._startAt = Me.set(g, C)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (Ne ? t._startAt.revert(Zr) : t._startAt.render(-1, !0)), t._zTime = e, !o) i(t._startAt, ae, ae); else if (!e) return } for (t._pt = t._ptCache = 0, l = m && Qe(l) || l && !m, E = 0; E < g.length; E++) { if (S = g[E], H = S._gsap || il(g)[E]._gsap, t._ptLookup[E] = U = {}, Ho[H.id] && mi.length && Qr(), I = y === g ? E : y.indexOf(S), z && (W = new z).init(S, G || T, t, I, y) !== !1 && (t._pt = b = new qe(t._pt, S, W.name, 0, 1, W.render, W, 0, W.priority), W._props.forEach(function (tt) { U[tt] = b }), W.priority && (P = 1)), !z || G) for (C in T) je[C] && (W = cl(C, T, t, I, S, y)) ? W.priority && (P = 1) : U[C] = b = ll.call(t, S, C, "get", T[C], I, y, 0, s.stringFilter); t._op && t._op[E] && t.kill(S, t._op[E]), x && t._pt && (pi = t, me.killTweensOf(S, U, t.globalTime(e)), D = !t.parent, pi = 0), t._pt && l && (Ho[H.id] = 1) } P && pl(t), t._onInit && t._onInit(t) } t._onUpdate = c, t._initted = (!t._op || t._pt) && !D, u && e <= 0 && v.render(gn, !0, !0) }, cm = function (t, e, n, s, r, a, o, l) { var c = (t._pt && t._ptCache || (t._ptCache = {}))[e], h, d, u, f; if (!c) for (c = t._ptCache[e] = [], u = t._ptLookup, f = t._targets.length; f--;) { if (h = u[f][e], h && h.d && h.d._pt) for (h = h.d._pt; h && h.p !== e && h.fp !== e;)h = h._next; if (!h) return Yo = 1, t.vars[e] = "+=0", hl(t, o), Yo = 0, l ? xr(e + " not eligible for reset. Try splitting into individual properties") : 1; c.push(h) } for (f = c.length; f--;)d = c[f], h = d._pt || d, h.s = (s || s === 0) && !r ? s : h.s + (s || 0) + a * h.c, h.c = n - h.s, d.e && (d.e = ye(n) + Oe(d.e)), d.b && (d.b = h.s + Oe(d.b)) }, hm = function (t, e) { var n = t[0] ? gi(t[0]).harness : 0, s = n && n.aliases, r, a, o, l; if (!s) return e; r = Ss({}, e); for (a in s) if (a in r) for (l = s[a].split(","), o = l.length; o--;)r[l[o]] = r[a]; return r }, um = function (t, e, n, s) { var r = e.ease || s || "power1.inOut", a, o; if (ze(e)) o = n[t] || (n[t] = []), e.forEach(function (l, c) { return o.push({ t: c / (e.length - 1) * 100, v: l, e: r }) }); else for (a in e) o = n[a] || (n[a] = []), a === "ease" || o.push({ t: parseFloat(t), v: e[a], e: r }) }, vr = function (t, e, n, s, r) { return ve(t) ? t.call(e, n, s, r) : Ie(t) && ~t.indexOf("random(") ? Ts(t) : t }, Ou = nl + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert", Fu = {}; Xe(Ou + ",id,stagger,delay,duration,paused,scrollTrigger", function (i) { return Fu[i] = 1 }); var Me = function (i) { hu(t, i); function t(n, s, r, a) { var o; typeof s == "number" && (r.duration = s, s = r, r = null), o = i.call(this, a ? s : gr(s)) || this; var l = o.vars, c = l.duration, h = l.delay, d = l.immediateRender, u = l.stagger, f = l.overwrite, m = l.keyframes, _ = l.defaults, g = l.scrollTrigger, p = s.parent || me, y = (ze(n) || du(n) ? Jn(n[0]) : "length" in s) ? [n] : _n(n), x, v, A, T, E, C, b, S; if (o._targets = y.length ? il(y) : xr("GSAP target " + n + " not found. https://gsap.com", !tn.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = f, m || u || Yr(c) || Yr(h)) { s = o.vars; var P = s.easeReverse || s.yoyoEase; if (x = o.timeline = new Be({ data: "nested", defaults: _ || {}, targets: p && p.data === "nested" ? p.vars.targets : y }), x.kill(), x.parent = x._dp = Yn(o), x._start = 0, u || Yr(c) || Yr(h)) { if (T = y.length, b = u && Tu(u), kn(u)) for (E in u) ~Ou.indexOf(E) && (S || (S = {}), S[E] = u[E]); for (v = 0; v < T; v++)A = ta(s, Fu), A.stagger = 0, P && (A.easeReverse = P), S && Ss(A, S), C = y[v], A.duration = +vr(c, Yn(o), v, C, y), A.delay = (+vr(h, Yn(o), v, C, y) || 0) - o._delay, !u && T === 1 && A.delay && (o._delay = h = A.delay, o._start += h, A.delay = 0), x.to(C, A, b ? b(v, C, y) : 0), x._ease = Wt.none; x.duration() ? c = h = 0 : o.timeline = 0 } else if (m) { gr(cn(x.vars.defaults, { ease: "none" })), x._ease = Gi(m.ease || s.ease || "none"); var H = 0, z, W, U; if (ze(m)) m.forEach(function (I) { return x.to(y, I, ">") }), x.duration(); else { A = {}; for (E in m) E === "ease" || E === "easeEach" || um(E, m[E], A, m.easeEach); for (E in A) for (z = A[E].sort(function (I, G) { return I.t - G.t }), H = 0, v = 0; v < z.length; v++)W = z[v], U = { ease: W.e, duration: (W.t - (v ? z[v - 1].t : 0)) / 100 * c }, U[E] = W.v, x.to(y, U, H), H += U.duration; x.duration() < c && x.to({}, { duration: c - x.duration() }) } } c || o.duration(c = x.duration()) } else o.timeline = 0; return f === !0 && !Jo && (pi = Yn(o), me.killTweensOf(y), pi = 0), Fn(p, Yn(o), r), s.reversed && o.reverse(), s.paused && o.paused(!0), (d || !c && !m && o._start === pe(p._time) && Qe(d) && Vp(Yn(o)) && p.data !== "nested") && (o._tTime = -ae, o.render(Math.max(0, -h) || 0)), g && Su(Yn(o), g), o } var e = t.prototype; return e.render = function (s, r, a) { var o = this._time, l = this._tDur, c = this._dur, h = s < 0, d = s > l - ae && !h ? l : s < ae ? 0 : s, u, f, m, _, g, p, y, x; if (!c) Gp(this, s, r, a); else if (d !== this._tTime || !s || a || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== h || this._lazy) { if (u = d, x = this.timeline, this._repeat) { if (_ = c + this._rDelay, this._repeat < -1 && h) return this.totalTime(_ * 100 + s, r, a); if (u = pe(d % _), d === l ? (m = this._repeat, u = c) : (g = pe(d / _), m = ~~g, m && m === g ? (u = c, m--) : u > c && (u = c)), p = this._yoyo && m & 1, p && (u = c - u), g = Ms(this._tTime, _), u === o && !a && this._initted && m === g) return this._tTime = d, this; m !== g && this.vars.repeatRefresh && !p && !this._lock && u !== _ && this._initted && (this._lock = a = 1, this.render(pe(_ * m), !0).invalidate()._lock = 0) } if (!this._initted) { if (Mu(this, h ? s : u, a, r, d)) return this._tTime = 0, this; if (o !== this._time && !(a && this.vars.repeatRefresh && m !== g)) return this; if (c !== this._dur) return this.render(s, r, a) } if (this._rEase) { var v = u < o; if (v !== this._inv) { var A = v ? o : c - o; this._inv = v, this._from && (this.ratio = 1 - this.ratio), this._invRatio = this.ratio, this._invTime = o, this._invRecip = A ? (v ? -1 : 1) / A : 0, this._invScale = v ? -this.ratio : 1 - this.ratio, this._invEase = v ? this._rEase : this._ease } this.ratio = y = this._invRatio + this._invScale * this._invEase((u - this._invTime) * this._invRecip) } else this.ratio = y = this._ease(u / c); if (this._from && (this.ratio = y = 1 - y), this._tTime = d, this._time = u, !this._act && this._ts && (this._act = 1, this._lazy = 0), !o && d && !r && !g && (on(this, "onStart"), this._tTime !== d)) return this; for (f = this._pt; f;)f.r(y, f.d), f = f._next; x && x.render(s < 0 ? s : x._dur * x._ease(u / this._dur), r, a) || this._startAt && (this._zTime = s), this._onUpdate && !r && (h && Go(this, s, r, a), on(this, "onUpdate")), this._repeat && m !== g && this.vars.onRepeat && !r && this.parent && on(this, "onRepeat"), (d === this._tDur || !d) && this._tTime === d && (h && !this._onUpdate && Go(this, s, !0, !0), (s || !c) && (d === this._tDur && this._ts > 0 || !d && this._ts < 0) && _i(this, 1), !r && !(h && !o) && (d || o || p) && (on(this, d === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(d < l && this.timeScale() > 0) && this._prom())) } return this }, e.targets = function () { return this._targets }, e.invalidate = function (s) { return (!s || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(s), i.prototype.invalidate.call(this, s) }, e.resetTo = function (s, r, a, o, l) { Sr || Ke.wake(), this._ts || this.play(); var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts), h; return this._initted || hl(this, c), h = this._ease(c / this._dur), cm(this, s, r, a, o, h, c, l) ? this.resetTo(s, r, a, o, 1) : (oa(this, 0), this.parent || xu(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0)) }, e.kill = function (s, r) { if (r === void 0 && (r = "all"), !s && (!r || r === "all")) return this._lazy = this._pt = 0, this.parent ? pr(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Ne), this; if (this.timeline) { var a = this.timeline.totalDuration(); return this.timeline.killTweensOf(s, r, pi && pi.vars.overwrite !== !0)._first || pr(this), this.parent && a !== this.timeline.totalDuration() && ws(this, this._dur * this.timeline._tDur / a, 0, 1), this } var o = this._targets, l = s ? _n(s) : o, c = this._ptLookup, h = this._pt, d, u, f, m, _, g, p; if ((!r || r === "all") && Bp(o, l)) return r === "all" && (this._pt = 0), pr(this); for (d = this._op = this._op || [], r !== "all" && (Ie(r) && (_ = {}, Xe(r, function (y) { return _[y] = 1 }), r = _), r = hm(o, r)), p = o.length; p--;)if (~l.indexOf(o[p])) { u = c[p], r === "all" ? (d[p] = r, m = u, f = {}) : (f = d[p] = d[p] || {}, m = r); for (_ in m) g = u && u[_], g && ((!("kill" in g.d) || g.d.kill(_) === !0) && ra(this, g, "_pt"), delete u[_]), f !== "all" && (f[_] = 1) } return this._initted && !this._pt && h && pr(this), this }, t.to = function (s, r) { return new t(s, r, arguments[2]) }, t.from = function (s, r) { return _r(1, arguments) }, t.delayedCall = function (s, r, a, o) { return new t(r, 0, { immediateRender: !1, lazy: !1, overwrite: !1, delay: s, onComplete: r, onReverseComplete: r, onCompleteParams: a, onReverseCompleteParams: a, callbackScope: o }) }, t.fromTo = function (s, r, a) { return _r(2, arguments) }, t.set = function (s, r) { return r.duration = 0, r.repeatDelay || (r.repeat = 0), new t(s, r) }, t.killTweensOf = function (s, r, a) { return me.killTweensOf(s, r, a) }, t }(Mr); cn(Me.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }); Xe("staggerTo,staggerFrom,staggerFromTo", function (i) { Me[i] = function () { var t = new Be, e = Xo.call(arguments, 0); return e.splice(i === "staggerFromTo" ? 5 : 4, 0, 0), t[i].apply(t, e) } }); var ul = function (t, e, n) { return t[e] = n }, ku = function (t, e, n) { return t[e](n) }, dm = function (t, e, n, s) { return t[e](s.fp, n) }, fm = function (t, e, n) { return t.setAttribute(e, n) }, la = function (t, e) { return ve(t[e]) ? ku : ia(t[e]) && t.setAttribute ? fm : ul }, Bu = function (t, e) { return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e) }, pm = function (t, e) { return e.set(e.t, e.p, !!(e.s + e.c * t), e) }, dl = function (t, e) { var n = e._pt, s = ""; if (!t && e.b) s = e.b; else if (t === 1 && e.e) s = e.e; else { for (; n;)s = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round((n.s + n.c * t) * 1e4) / 1e4) + s, n = n._next; s += e.c } e.set(e.t, e.p, s, e) }, fl = function (t, e) { for (var n = e._pt; n;)n.r(t, n.d), n = n._next }, mm = function (t, e, n, s) { for (var r = this._pt, a; r;)a = r._next, r.p === s && r.modifier(t, e, n), r = a }, gm = function (t) { for (var e = this._pt, n, s; e;)s = e._next, e.p === t && !e.op || e.op === t ? ra(this, e, "_pt") : e.dep || (n = 1), e = s; return !n }, _m = function (t, e, n, s) { s.mSet(t, e, s.m.call(s.tween, n, s.mt), s) }, pl = function (t) { for (var e = t._pt, n, s, r, a; e;) { for (n = e._next, s = r; s && s.pr > e.pr;)s = s._next; (e._prev = s ? s._prev : a) ? e._prev._next = e : r = e, (e._next = s) ? s._prev = e : a = e, e = n } t._pt = r }, qe = function () { function i(e, n, s, r, a, o, l, c, h) { this.t = n, this.s = r, this.c = a, this.p = s, this.r = o || Bu, this.d = l || this, this.set = c || ul, this.pr = h || 0, this._next = e, e && (e._prev = this) } var t = i.prototype; return t.modifier = function (n, s, r) { this.mSet = this.mSet || this.set, this.set = _m, this.m = n, this.mt = r, this.tween = s }, i }(); Xe(nl + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function (i) { return el[i] = 1 }); ln.TweenMax = ln.TweenLite = Me; ln.TimelineLite = ln.TimelineMax = Be; me = new Be({ sortChildren: !1, defaults: yr, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0 }); tn.stringFilter = al; var Wi = [], jr = {}, vm = [], cu = 0, ym = 0, ko = function (t) { return (jr[t] || vm).map(function (e) { return e() }) }, Zo = function () { var t = Date.now(), e = []; t - cu > 2 && (ko("matchMediaInit"), Wi.forEach(function (n) { var s = n.queries, r = n.conditions, a, o, l, c; for (o in s) a = On.matchMedia(s[o]).matches, a && (l = 1), a !== r[o] && (r[o] = a, c = 1); c && (n.revert(), l && e.push(n)) }), ko("matchMediaRevert"), e.forEach(function (n) { return n.onMatch(n, function (s) { return n.add(null, s) }) }), cu = t, ko("matchMedia")) }, zu = function () { function i(e, n) { this.selector = n && qo(n), this.data = [], this._r = [], this.isReverted = !1, this.id = ym++, e && this.add(e) } var t = i.prototype; return t.add = function (n, s, r) { ve(n) && (r = s, s = n, n = ve); var a = this, o = function () { var c = de, h = a.selector, d; return c && c !== a && c.data.push(a), r && (a.selector = qo(r)), de = a, d = s.apply(a, arguments), ve(d) && a._r.push(d), de = c, a.selector = h, a.isReverted = !1, d }; return a.last = o, n === ve ? o(a, function (l) { return a.add(null, l) }) : n ? a[n] = o : o }, t.ignore = function (n) { var s = de; de = null, n(this), de = s }, t.getTweens = function () { var n = []; return this.data.forEach(function (s) { return s instanceof i ? n.push.apply(n, s.getTweens()) : s instanceof Me && !(s.parent && s.parent.data === "nested") && n.push(s) }), n }, t.clear = function () { this._r.length = this.data.length = 0 }, t.kill = function (n, s) { var r = this; if (n ? function () { for (var o = r.getTweens(), l = r.data.length, c; l--;)c = r.data[l], c.data === "isFlip" && (c.revert(), c.getChildren(!0, !0, !1).forEach(function (h) { return o.splice(o.indexOf(h), 1) })); for (o.map(function (h) { return { g: h._dur || h._delay || h._sat && !h._sat.vars.immediateRender ? h.globalTime(0) : -1 / 0, t: h } }).sort(function (h, d) { return d.g - h.g || -1 / 0 }).forEach(function (h) { return h.t.revert(n) }), l = r.data.length; l--;)c = r.data[l], c instanceof Be ? c.data !== "nested" && (c.scrollTrigger && c.scrollTrigger.revert(), c.kill()) : !(c instanceof Me) && c.revert && c.revert(n); r._r.forEach(function (h) { return h(n, r) }), r.isReverted = !0 }() : this.data.forEach(function (o) { return o.kill && o.kill() }), this.clear(), s) for (var a = Wi.length; a--;)Wi[a].id === this.id && Wi.splice(a, 1) }, t.revert = function (n) { this.kill(n || {}) }, i }(), xm = function () { function i(e) { this.contexts = [], this.scope = e, de && de.data.push(this) } var t = i.prototype; return t.add = function (n, s, r) { kn(n) || (n = { matches: n }); var a = new zu(0, r || this.scope), o = a.conditions = {}, l, c, h; de && !a.selector && (a.selector = de.selector), this.contexts.push(a), s = a.add("onMatch", s), a.queries = n; for (c in n) c === "all" ? h = 1 : (l = On.matchMedia(n[c]), l && (Wi.indexOf(a) < 0 && Wi.push(a), (o[c] = l.matches) && (h = 1), l.addListener ? l.addListener(Zo) : l.addEventListener("change", Zo))); return h && s(a, function (d) { return a.add(null, d) }), this }, t.revert = function (n) { this.kill(n || {}) }, t.kill = function (n) { this.contexts.forEach(function (s) { return s.kill(n, !0) }) }, i }(), na = { registerPlugin: function () { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)e[n] = arguments[n]; e.forEach(function (s) { return Lu(s) }) }, timeline: function (t) { return new Be(t) }, getTweensOf: function (t, e) { return me.getTweensOf(t, e) }, getProperty: function (t, e, n, s) { Ie(t) && (t = _n(t)[0]); var r = gi(t || {}).get, a = n ? yu : vu; return n === "native" && (n = ""), t && (e ? a((je[e] && je[e].get || r)(t, e, n, s)) : function (o, l, c) { return a((je[o] && je[o].get || r)(t, o, l, c)) }) }, quickSetter: function (t, e, n) { if (t = _n(t), t.length > 1) { var s = t.map(function (h) { return Ve.quickSetter(h, e, n) }), r = s.length; return function (h) { for (var d = r; d--;)s[d](h) } } t = t[0] || {}; var a = je[e], o = gi(t), l = o.harness && (o.harness.aliases || {})[e] || e, c = a ? function (h) { var d = new a; bs._pt = 0, d.init(t, n ? h + n : h, bs, 0, [t]), d.render(1, d), bs._pt && fl(1, bs) } : o.set(t, l); return a ? c : function (h) { return c(t, l, n ? h + n : h, o, 1) } }, quickTo: function (t, e, n) { var s, r = Ve.to(t, cn((s = {}, s[e] = "+=0.1", s.paused = !0, s.stagger = 0, s), n || {})), a = function (l, c, h) { return r.resetTo(e, l, c, h) }; return a.tween = r, a }, isTweening: function (t) { return me.getTweensOf(t, !0).length > 0 }, defaults: function (t) { return t && t.ease && (t.ease = Gi(t.ease, yr.ease)), su(yr, t || {}) }, config: function (t) { return su(tn, t || {}) }, registerEffect: function (t) { var e = t.name, n = t.effect, s = t.plugins, r = t.defaults, a = t.extendTimeline; (s || "").split(",").forEach(function (o) { return o && !je[o] && !ln[o] && xr(e + " effect requires " + o + " plugin.") }), Uo[e] = function (o, l, c) { return n(_n(o), cn(l || {}, r), c) }, a && (Be.prototype[e] = function (o, l, c) { return this.add(Uo[e](o, kn(l) ? l : (c = l) && {}, this), c) }) }, registerEase: function (t, e) { Wt[t] = Gi(e) }, parseEase: function (t, e) { return arguments.length ? Gi(t, e) : Wt }, getById: function (t) { return me.getById(t) }, exportRoot: function (t, e) { t === void 0 && (t = {}); var n = new Be(t), s, r; for (n.smoothChildTiming = Qe(t.smoothChildTiming), me.remove(n), n._dp = 0, n._time = n._tTime = me._time, s = me._first; s;)r = s._next, (e || !(!s._dur && s instanceof Me && s.vars.onComplete === s._targets[0])) && Fn(n, s, s._start - s._delay), s = r; return Fn(me, n, 0), n }, context: function (t, e) { return t ? new zu(t, e) : de }, matchMedia: function (t) { return new xm(t) }, matchMediaRefresh: function () { return Wi.forEach(function (t) { var e = t.conditions, n, s; for (s in e) e[s] && (e[s] = !1, n = 1); n && t.revert() }) || Zo() }, addEventListener: function (t, e) { var n = jr[t] || (jr[t] = []); ~n.indexOf(e) || n.push(e) }, removeEventListener: function (t, e) { var n = jr[t], s = n && n.indexOf(e); s >= 0 && n.splice(s, 1) }, utils: { wrap: jp, wrapYoyo: Kp, distribute: Tu, random: Cu, snap: Au, normalize: Jp, getUnit: Oe, clamp: qp, splitColor: Du, toArray: _n, selector: qo, mapRange: Pu, pipe: Yp, unitize: Zp, interpolate: Qp, shuffle: Eu }, install: pu, effects: Uo, ticker: Ke, updateRoot: Be.updateRoot, plugins: je, globalTimeline: me, core: { PropTween: qe, globals: mu, Tween: Me, Timeline: Be, Animation: Mr, getCache: gi, _removeLinkedListItem: ra, reverting: function () { return Ne }, context: function (t) { return t && de && (de.data.push(t), t._ctx = de), de }, suppressOverwrites: function (t) { return Jo = t } } }; Xe("to,from,fromTo,delayedCall,set,killTweensOf", function (i) { return na[i] = Me[i] }); Ke.add(Be.updateRoot); bs = na.to({}, { duration: 0 }); var bm = function (t, e) { for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e;)n = n._next; return n }, Sm = function (t, e) { var n = t._targets, s, r, a; for (s in e) for (r = n.length; r--;)a = t._ptLookup[r][s], a && (a = a.d) && (a._pt && (a = bm(a, s)), a && a.modifier && a.modifier(e[s], t, n[r], s)) }, Bo = function (t, e) { return { name: t, headless: 1, rawVars: 1, init: function (s, r, a) { a._onInit = function (o) { var l, c; if (Ie(r) && (l = {}, Xe(r, function (h) { return l[h] = 1 }), r = l), e) { l = {}; for (c in r) l[c] = e(r[c]); r = l } Sm(o, r) } } } }, Ve = na.registerPlugin({ name: "attr", init: function (t, e, n, s, r) { var a, o, l; this.tween = n; for (a in e) l = t.getAttribute(a) || "", o = this.add(t, "setAttribute", (l || 0) + "", e[a], s, r, 0, 0, a), o.op = a, o.b = l, this._props.push(a) }, render: function (t, e) { for (var n = e._pt; n;)Ne ? n.set(n.t, n.p, n.b, n) : n.r(t, n.d), n = n._next } }, { name: "endArray", headless: 1, init: function (t, e) { for (var n = e.length; n--;)this.add(t, n, t[n] || 0, e[n], 0, 0, 0, 0, 0, 1) } }, Bo("roundProps", $o), Bo("modifiers"), Bo("snap", Au)) || na; Me.version = Be.version = Ve.version = "3.15.0"; fu = 1; jo() && Es(); var Mm = Wt.Power0, wm = Wt.Power1, Em = Wt.Power2, Tm = Wt.Power3, Am = Wt.Power4, Cm = Wt.Linear, Rm = Wt.Quad, Pm = Wt.Cubic, Im = Wt.Quart, Lm = Wt.Quint, Dm = Wt.Strong, Um = Wt.Elastic, Nm = Wt.Back, Om = Wt.SteppedEase, Fm = Wt.Bounce, km = Wt.Sine, Bm = Wt.Expo, zm = Wt.Circ; var Vu, yi, Cs, xl, ji, Vm, Hu, bl, Hm = function () { return typeof window != "undefined" }, Kn = {}, Ji = 180 / Math.PI, Rs = Math.PI / 180, As = Math.atan2, Gu = 1e8, Sl = /([A-Z])/g, Gm = /(left|right|width|margin|padding|x)/i, Wm = /[\s,\(]\S/, Bn = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" }, gl = function (t, e) { return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e) }, Xm = function (t, e) { return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e) }, qm = function (t, e) { return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e) }, $m = function (t, e) { return e.set(e.t, e.p, t === 1 ? e.e : t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e) }, Ym = function (t, e) { var n = e.s + e.c * t; e.set(e.t, e.p, ~~(n + (n < 0 ? -.5 : .5)) + e.u, e) }, ju = function (t, e) { return e.set(e.t, e.p, t ? e.e : e.b, e) }, Ku = function (t, e) { return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e) }, Zm = function (t, e, n) { return t.style[e] = n }, Jm = function (t, e, n) { return t.style.setProperty(e, n) }, jm = function (t, e, n) { return t._gsap[e] = n }, Km = function (t, e, n) { return t._gsap.scaleX = t._gsap.scaleY = n }, Qm = function (t, e, n, s, r) { var a = t._gsap; a.scaleX = a.scaleY = n, a.renderTransform(r, a) }, tg = function (t, e, n, s, r) { var a = t._gsap; a[e] = n, a.renderTransform(r, a) }, ge = "transform", en = ge + "Origin", eg = function i(t, e) { var n = this, s = this.target, r = s.style, a = s._gsap; if (t in Kn && r) { if (this.tfm = this.tfm || {}, t !== "transform") t = Bn[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function (o) { return n.tfm[o] = jn(s, o) }) : this.tfm[t] = a.x ? a[t] : jn(s, t), t === en && (this.tfm.zOrigin = a.zOrigin); else return Bn.transform.split(",").forEach(function (o) { return i.call(n, o, e) }); if (this.props.indexOf(ge) >= 0) return; a.svg && (this.svgo = s.getAttribute("data-svg-origin"), this.props.push(en, e, "")), t = ge } (r || e) && this.props.push(t, e, r[t]) }, Qu = function (t) { t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate")) }, ng = function () { var t = this.props, e = this.target, n = e.style, s = e._gsap, r, a; for (r = 0; r < t.length; r += 3)t[r + 1] ? t[r + 1] === 2 ? e[t[r]](t[r + 2]) : e[t[r]] = t[r + 2] : t[r + 2] ? n[t[r]] = t[r + 2] : n.removeProperty(t[r].substr(0, 2) === "--" ? t[r] : t[r].replace(Sl, "-$1").toLowerCase()); if (this.tfm) { for (a in this.tfm) s[a] = this.tfm[a]; s.svg && (s.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), r = bl(), (!r || !r.isStart) && !n[ge] && (Qu(n), s.zOrigin && n[en] && (n[en] += " " + s.zOrigin + "px", s.zOrigin = 0, s.renderTransform()), s.uncache = 1) } }, td = function (t, e) { var n = { target: t, props: [], revert: ng, save: eg }; return t._gsap || Ve.core.getCache(t), e && t.style && t.nodeType && e.split(",").forEach(function (s) { return n.save(s) }), n }, ed, _l = function (t, e) { var n = yi.createElementNS ? yi.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : yi.createElement(t); return n && n.style ? n : yi.createElement(t) }, hn = function i(t, e, n) { var s = getComputedStyle(t); return s[e] || s.getPropertyValue(e.replace(Sl, "-$1").toLowerCase()) || s.getPropertyValue(e) || !n && i(t, Ps(e) || e, 1) || "" }, Wu = "O,Moz,ms,Ms,Webkit".split(","), Ps = function (t, e, n) { var s = e || ji, r = s.style, a = 5; if (t in r && !n) return t; for (t = t.charAt(0).toUpperCase() + t.substr(1); a-- && !(Wu[a] + t in r);); return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? Wu[a] : "") + t }, vl = function () { Hm() && window.document && (Vu = window, yi = Vu.document, Cs = yi.documentElement, ji = _l("div") || { style: {} }, Vm = _l("div"), ge = Ps(ge), en = ge + "Origin", ji.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", ed = !!Ps("perspective"), bl = Ve.core.reverting, xl = 1) }, Xu = function (t) { var e = t.ownerSVGElement, n = _l("svg", e && e.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), s = t.cloneNode(!0), r; s.style.display = "block", n.appendChild(s), Cs.appendChild(n); try { r = s.getBBox() } catch { } return n.removeChild(s), Cs.removeChild(n), r }, qu = function (t, e) { for (var n = e.length; n--;)if (t.hasAttribute(e[n])) return t.getAttribute(e[n]) }, nd = function (t) { var e, n; try { e = t.getBBox() } catch { e = Xu(t), n = 1 } return e && (e.width || e.height) || n || (e = Xu(t)), e && !e.width && !e.x && !e.y ? { x: +qu(t, ["x", "cx", "x1"]) || 0, y: +qu(t, ["y", "cy", "y1"]) || 0, width: 0, height: 0 } : e }, id = function (t) { return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && nd(t)) }, bi = function (t, e) { if (e) { var n = t.style, s; e in Kn && e !== en && (e = ge), n.removeProperty ? (s = e.substr(0, 2), (s === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), n.removeProperty(s === "--" ? e : e.replace(Sl, "-$1").toLowerCase())) : n.removeAttribute(e) } }, xi = function (t, e, n, s, r, a) { var o = new qe(t._pt, e, n, 0, 1, a ? Ku : ju); return t._pt = o, o.b = s, o.e = r, t._props.push(n), o }, $u = { deg: 1, rad: 1, turn: 1 }, ig = { grid: 1, flex: 1 }, Si = function i(t, e, n, s) { var r = parseFloat(n) || 0, a = (n + "").trim().substr((r + "").length) || "px", o = ji.style, l = Gm.test(e), c = t.tagName.toLowerCase() === "svg", h = (c ? "client" : "offset") + (l ? "Width" : "Height"), d = 100, u = s === "px", f = s === "%", m, _, g, p; if (s === a || !r || $u[s] || $u[a]) return r; if (a !== "px" && !u && (r = i(t, e, n, "px")), p = t.getCTM && id(t), (f || a === "%") && (Kn[e] || ~e.indexOf("adius"))) return m = p ? t.getBBox()[l ? "width" : "height"] : t[h], ye(f ? r / m * d : r / 100 * m); if (o[l ? "width" : "height"] = d + (u ? a : s), _ = s !== "rem" && ~e.indexOf("adius") || s === "em" && t.appendChild && !c ? t : t.parentNode, p && (_ = (t.ownerSVGElement || {}).parentNode), (!_ || _ === yi || !_.appendChild) && (_ = yi.body), g = _._gsap, g && f && g.width && l && g.time === Ke.time && !g.uncache) return ye(r / g.width * d); if (f && (e === "height" || e === "width")) { var y = t.style[e]; t.style[e] = d + s, m = t[h], y ? t.style[e] = y : bi(t, e) } else (f || a === "%") && !ig[hn(_, "display")] && (o.position = hn(t, "position")), _ === t && (o.position = "static"), _.appendChild(ji), m = ji[h], _.removeChild(ji), o.position = "absolute"; return l && f && (g = gi(_), g.time = Ke.time, g.width = _[h]), ye(u ? m * r / d : m && r ? d / m * r : 0) }, jn = function (t, e, n, s) { var r; return xl || vl(), e in Bn && e !== "transform" && (e = Bn[e], ~e.indexOf(",") && (e = e.split(",")[0])), Kn[e] && e !== "transform" ? (r = Ar(t, s), r = e !== "transformOrigin" ? r[e] : r.svg ? r.origin : ha(hn(t, en)) + " " + r.zOrigin + "px") : (r = t.style[e], (!r || r === "auto" || s || ~(r + "").indexOf("calc(")) && (r = ca[e] && ca[e](t, e, n) || hn(t, e) || sl(t, e) || (e === "opacity" ? 1 : 0))), n && !~(r + "").trim().indexOf(" ") ? Si(t, e, r, n) + n : r }, sg = function (t, e, n, s) { if (!n || n === "none") { var r = Ps(e, t, 1), a = r && hn(t, r, 1); a && a !== n ? (e = r, n = a) : e === "borderColor" && (n = hn(t, "borderTopColor")) } var o = new qe(this._pt, t.style, e, 0, 1, dl), l = 0, c = 0, h, d, u, f, m, _, g, p, y, x, v, A; if (o.b = n, o.e = s, n += "", s += "", s.substring(0, 6) === "var(--" && (s = hn(t, s.substring(4, s.indexOf(")")))), s === "auto" && (_ = t.style[e], t.style[e] = s, s = hn(t, e) || s, _ ? t.style[e] = _ : bi(t, e)), h = [n, s], al(h), n = h[0], s = h[1], u = n.match(Xi) || [], A = s.match(Xi) || [], A.length) { for (; d = Xi.exec(s);)g = d[0], y = s.substring(l, d.index), m ? m = (m + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (m = 1), g !== (_ = u[c++] || "") && (f = parseFloat(_) || 0, v = _.substr((f + "").length), g.charAt(1) === "=" && (g = qi(f, g) + v), p = parseFloat(g), x = g.substr((p + "").length), l = Xi.lastIndex - x.length, x || (x = x || tn.units[e] || v, l === s.length && (s += x, o.e += x)), v !== x && (f = Si(t, e, _, x) || 0), o._pt = { _next: o._pt, p: y || c === 1 ? y : ",", s: f, c: p - f, m: m && m < 4 || e === "zIndex" ? Math.round : 0 }); o.c = l < s.length ? s.substring(l, s.length) : "" } else o.r = e === "display" && s === "none" ? Ku : ju; return Qo.test(s) && (o.e = 0), this._pt = o, o }, Yu = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" }, rg = function (t) { var e = t.split(" "), n = e[0], s = e[1] || "50%"; return (n === "top" || n === "bottom" || s === "left" || s === "right") && (t = n, n = s, s = t), e[0] = Yu[n] || n, e[1] = Yu[s] || s, e.join(" ") }, ag = function (t, e) { if (e.tween && e.tween._time === e.tween._dur) { var n = e.t, s = n.style, r = e.u, a = n._gsap, o, l, c; if (r === "all" || r === !0) s.cssText = "", l = 1; else for (r = r.split(","), c = r.length; --c > -1;)o = r[c], Kn[o] && (l = 1, o = o === "transformOrigin" ? en : ge), bi(n, o); l && (bi(n, ge), a && (a.svg && n.removeAttribute("transform"), s.scale = s.rotate = s.translate = "none", Ar(n, 1), a.uncache = 1, Qu(s))) } }, ca = { clearProps: function (t, e, n, s, r) { if (r.data !== "isFromStart") { var a = t._pt = new qe(t._pt, e, n, 0, 0, ag); return a.u = s, a.pr = -10, a.tween = r, t._props.push(n), 1 } } }, Tr = [1, 0, 0, 1, 0, 0], sd = {}, rd = function (t) { return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t }, Zu = function (t) { var e = hn(t, ge); return rd(e) ? Tr : e.substr(7).match(Ko).map(ye) }, Ml = function (t, e) { var n = t._gsap || gi(t), s = t.style, r = Zu(t), a, o, l, c; return n.svg && t.getAttribute("transform") ? (l = t.transform.baseVal.consolidate().matrix, r = [l.a, l.b, l.c, l.d, l.e, l.f], r.join(",") === "1,0,0,1,0,0" ? Tr : r) : (r === Tr && !t.offsetParent && t !== Cs && !n.svg && (l = s.display, s.display = "block", a = t.parentNode, (!a || !t.offsetParent && !t.getBoundingClientRect().width) && (c = 1, o = t.nextElementSibling, Cs.appendChild(t)), r = Zu(t), l ? s.display = l : bi(t, "display"), c && (o ? a.insertBefore(t, o) : a ? a.appendChild(t) : Cs.removeChild(t))), e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r) }, yl = function (t, e, n, s, r, a) { var o = t._gsap, l = r || Ml(t, !0), c = o.xOrigin || 0, h = o.yOrigin || 0, d = o.xOffset || 0, u = o.yOffset || 0, f = l[0], m = l[1], _ = l[2], g = l[3], p = l[4], y = l[5], x = e.split(" "), v = parseFloat(x[0]) || 0, A = parseFloat(x[1]) || 0, T, E, C, b; n ? l !== Tr && (E = f * g - m * _) && (C = v * (g / E) + A * (-_ / E) + (_ * y - g * p) / E, b = v * (-m / E) + A * (f / E) - (f * y - m * p) / E, v = C, A = b) : (T = nd(t), v = T.x + (~x[0].indexOf("%") ? v / 100 * T.width : v), A = T.y + (~(x[1] || x[0]).indexOf("%") ? A / 100 * T.height : A)), s || s !== !1 && o.smooth ? (p = v - c, y = A - h, o.xOffset = d + (p * f + y * _) - p, o.yOffset = u + (p * m + y * g) - y) : o.xOffset = o.yOffset = 0, o.xOrigin = v, o.yOrigin = A, o.smooth = !!s, o.origin = e, o.originIsAbsolute = !!n, t.style[en] = "0px 0px", a && (xi(a, o, "xOrigin", c, v), xi(a, o, "yOrigin", h, A), xi(a, o, "xOffset", d, o.xOffset), xi(a, o, "yOffset", u, o.yOffset)), t.setAttribute("data-svg-origin", v + " " + A) }, Ar = function (t, e) { var n = t._gsap || new ol(t); if ("x" in n && !e && !n.uncache) return n; var s = t.style, r = n.scaleX < 0, a = "px", o = "deg", l = getComputedStyle(t), c = hn(t, en) || "0", h, d, u, f, m, _, g, p, y, x, v, A, T, E, C, b, S, P, H, z, W, U, I, G, D, tt, j, dt, At, Ut, Z, et; return h = d = u = _ = g = p = y = x = v = 0, f = m = 1, n.svg = !!(t.getCTM && id(t)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (s[ge] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[ge] !== "none" ? l[ge] : "")), s.scale = s.rotate = s.translate = "none"), E = Ml(t, n.svg), n.svg && (n.uncache ? (D = t.getBBox(), c = n.xOrigin - D.x + "px " + (n.yOrigin - D.y) + "px", G = "") : G = !e && t.getAttribute("data-svg-origin"), yl(t, G || c, !!G || n.originIsAbsolute, n.smooth !== !1, E)), A = n.xOrigin || 0, T = n.yOrigin || 0, E !== Tr && (P = E[0], H = E[1], z = E[2], W = E[3], h = U = E[4], d = I = E[5], E.length === 6 ? (f = Math.sqrt(P * P + H * H), m = Math.sqrt(W * W + z * z), _ = P || H ? As(H, P) * Ji : 0, y = z || W ? As(z, W) * Ji + _ : 0, y && (m *= Math.abs(Math.cos(y * Rs))), n.svg && (h -= A - (A * P + T * z), d -= T - (A * H + T * W))) : (et = E[6], Ut = E[7], j = E[8], dt = E[9], At = E[10], Z = E[11], h = E[12], d = E[13], u = E[14], C = As(et, At), g = C * Ji, C && (b = Math.cos(-C), S = Math.sin(-C), G = U * b + j * S, D = I * b + dt * S, tt = et * b + At * S, j = U * -S + j * b, dt = I * -S + dt * b, At = et * -S + At * b, Z = Ut * -S + Z * b, U = G, I = D, et = tt), C = As(-z, At), p = C * Ji, C && (b = Math.cos(-C), S = Math.sin(-C), G = P * b - j * S, D = H * b - dt * S, tt = z * b - At * S, Z = W * S + Z * b, P = G, H = D, z = tt), C = As(H, P), _ = C * Ji, C && (b = Math.cos(C), S = Math.sin(C), G = P * b + H * S, D = U * b + I * S, H = H * b - P * S, I = I * b - U * S, P = G, U = D), g && Math.abs(g) + Math.abs(_) > 359.9 && (g = _ = 0, p = 180 - p), f = ye(Math.sqrt(P * P + H * H + z * z)), m = ye(Math.sqrt(I * I + et * et)), C = As(U, I), y = Math.abs(C) > 2e-4 ? C * Ji : 0, v = Z ? 1 / (Z < 0 ? -Z : Z) : 0), n.svg && (G = t.getAttribute("transform"), n.forceCSS = t.setAttribute("transform", "") || !rd(hn(t, ge)), G && t.setAttribute("transform", G))), Math.abs(y) > 90 && Math.abs(y) < 270 && (r ? (f *= -1, y += _ <= 0 ? 180 : -180, _ += _ <= 0 ? 180 : -180) : (m *= -1, y += y <= 0 ? 180 : -180)), e = e || n.uncache, n.x = h - ((n.xPercent = h && (!e && n.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-h) ? -50 : 0))) ? t.offsetWidth * n.xPercent / 100 : 0) + a, n.y = d - ((n.yPercent = d && (!e && n.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-d) ? -50 : 0))) ? t.offsetHeight * n.yPercent / 100 : 0) + a, n.z = u + a, n.scaleX = ye(f), n.scaleY = ye(m), n.rotation = ye(_) + o, n.rotationX = ye(g) + o, n.rotationY = ye(p) + o, n.skewX = y + o, n.skewY = x + o, n.transformPerspective = v + a, (n.zOrigin = parseFloat(c.split(" ")[2]) || !e && n.zOrigin || 0) && (s[en] = ha(c)), n.xOffset = n.yOffset = 0, n.force3D = tn.force3D, n.renderTransform = n.svg ? lg : ed ? ad : og, n.uncache = 0, n }, ha = function (t) { return (t = t.split(" "))[0] + " " + t[1] }, ml = function (t, e, n) { var s = Oe(e); return ye(parseFloat(e) + parseFloat(Si(t, "x", n + "px", s))) + s }, og = function (t, e) { e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, ad(t, e) }, Yi = "0deg", Er = "0px", Zi = ") ", ad = function (t, e) { var n = e || this, s = n.xPercent, r = n.yPercent, a = n.x, o = n.y, l = n.z, c = n.rotation, h = n.rotationY, d = n.rotationX, u = n.skewX, f = n.skewY, m = n.scaleX, _ = n.scaleY, g = n.transformPerspective, p = n.force3D, y = n.target, x = n.zOrigin, v = "", A = p === "auto" && t && t !== 1 || p === !0; if (x && (d !== Yi || h !== Yi)) { var T = parseFloat(h) * Rs, E = Math.sin(T), C = Math.cos(T), b; T = parseFloat(d) * Rs, b = Math.cos(T), a = ml(y, a, E * b * -x), o = ml(y, o, -Math.sin(T) * -x), l = ml(y, l, C * b * -x + x) } g !== Er && (v += "perspective(" + g + Zi), (s || r) && (v += "translate(" + s + "%, " + r + "%) "), (A || a !== Er || o !== Er || l !== Er) && (v += l !== Er || A ? "translate3d(" + a + ", " + o + ", " + l + ") " : "translate(" + a + ", " + o + Zi), c !== Yi && (v += "rotate(" + c + Zi), h !== Yi && (v += "rotateY(" + h + Zi), d !== Yi && (v += "rotateX(" + d + Zi), (u !== Yi || f !== Yi) && (v += "skew(" + u + ", " + f + Zi), (m !== 1 || _ !== 1) && (v += "scale(" + m + ", " + _ + Zi), y.style[ge] = v || "translate(0, 0)" }, lg = function (t, e) { var n = e || this, s = n.xPercent, r = n.yPercent, a = n.x, o = n.y, l = n.rotation, c = n.skewX, h = n.skewY, d = n.scaleX, u = n.scaleY, f = n.target, m = n.xOrigin, _ = n.yOrigin, g = n.xOffset, p = n.yOffset, y = n.forceCSS, x = parseFloat(a), v = parseFloat(o), A, T, E, C, b; l = parseFloat(l), c = parseFloat(c), h = parseFloat(h), h && (h = parseFloat(h), c += h, l += h), l || c ? (l *= Rs, c *= Rs, A = Math.cos(l) * d, T = Math.sin(l) * d, E = Math.sin(l - c) * -u, C = Math.cos(l - c) * u, c && (h *= Rs, b = Math.tan(c - h), b = Math.sqrt(1 + b * b), E *= b, C *= b, h && (b = Math.tan(h), b = Math.sqrt(1 + b * b), A *= b, T *= b)), A = ye(A), T = ye(T), E = ye(E), C = ye(C)) : (A = d, C = u, T = E = 0), (x && !~(a + "").indexOf("px") || v && !~(o + "").indexOf("px")) && (x = Si(f, "x", a, "px"), v = Si(f, "y", o, "px")), (m || _ || g || p) && (x = ye(x + m - (m * A + _ * E) + g), v = ye(v + _ - (m * T + _ * C) + p)), (s || r) && (b = f.getBBox(), x = ye(x + s / 100 * b.width), v = ye(v + r / 100 * b.height)), b = "matrix(" + A + "," + T + "," + E + "," + C + "," + x + "," + v + ")", f.setAttribute("transform", b), y && (f.style[ge] = b) }, cg = function (t, e, n, s, r) { var a = 360, o = Ie(r), l = parseFloat(r) * (o && ~r.indexOf("rad") ? Ji : 1), c = l - s, h = s + c + "deg", d, u; return o && (d = r.split("_")[1], d === "short" && (c %= a, c !== c % (a / 2) && (c += c < 0 ? a : -a)), d === "cw" && c < 0 ? c = (c + a * Gu) % a - ~~(c / a) * a : d === "ccw" && c > 0 && (c = (c - a * Gu) % a - ~~(c / a) * a)), t._pt = u = new qe(t._pt, e, n, s, c, Xm), u.e = h, u.u = "deg", t._props.push(n), u }, Ju = function (t, e) { for (var n in e) t[n] = e[n]; return t }, hg = function (t, e, n) { var s = Ju({}, n._gsap), r = "perspective,force3D,transformOrigin,svgOrigin", a = n.style, o, l, c, h, d, u, f, m; s.svg ? (c = n.getAttribute("transform"), n.setAttribute("transform", ""), a[ge] = e, o = Ar(n, 1), bi(n, ge), n.setAttribute("transform", c)) : (c = getComputedStyle(n)[ge], a[ge] = e, o = Ar(n, 1), a[ge] = c); for (l in Kn) c = s[l], h = o[l], c !== h && r.indexOf(l) < 0 && (f = Oe(c), m = Oe(h), d = f !== m ? Si(n, l, c, m) : parseFloat(c), u = parseFloat(h), t._pt = new qe(t._pt, o, l, d, u - d, gl), t._pt.u = m || 0, t._props.push(l)); Ju(o, s) }; Xe("padding,margin,Width,Radius", function (i, t) { var e = "Top", n = "Right", s = "Bottom", r = "Left", a = (t < 3 ? [e, n, s, r] : [e + r, e + n, s + n, s + r]).map(function (o) { return t < 2 ? i + o : "border" + o + i }); ca[t > 1 ? "border" + i : i] = function (o, l, c, h, d) { var u, f; if (arguments.length < 4) return u = a.map(function (m) { return jn(o, m, c) }), f = u.join(" "), f.split(u[0]).length === 5 ? u[0] : f; u = (h + "").split(" "), f = {}, a.forEach(function (m, _) { return f[m] = u[_] = u[_] || u[(_ - 1) / 2 | 0] }), o.init(l, f, d) } }); var wl = { name: "css", register: vl, targetTest: function (t) { return t.style && t.nodeType }, init: function (t, e, n, s, r) { var a = this._props, o = t.style, l = n.vars.startAt, c, h, d, u, f, m, _, g, p, y, x, v, A, T, E, C, b; xl || vl(), this.styles = this.styles || td(t), C = this.styles.props, this.tween = n; for (_ in e) if (_ !== "autoRound" && (h = e[_], !(je[_] && cl(_, e, n, s, t, r)))) { if (f = typeof h, m = ca[_], f === "function" && (h = h.call(n, s, t, r), f = typeof h), f === "string" && ~h.indexOf("random(") && (h = Ts(h)), m) m(this, t, _, h, n) && (E = 1); else if (_.substr(0, 2) === "--") c = (getComputedStyle(t).getPropertyValue(_) + "").trim(), h += "", Zn.lastIndex = 0, Zn.test(c) || (g = Oe(c), p = Oe(h), p ? g !== p && (c = Si(t, _, c, p) + p) : g && (h += g)), this.add(o, "setProperty", c, h, s, r, 0, 0, _), a.push(_), C.push(_, 0, o[_]); else if (f !== "undefined") { if (l && _ in l ? (c = typeof l[_] == "function" ? l[_].call(n, s, t, r) : l[_], Ie(c) && ~c.indexOf("random(") && (c = Ts(c)), Oe(c + "") || c === "auto" || (c += tn.units[_] || Oe(jn(t, _)) || ""), (c + "").charAt(1) === "=" && (c = jn(t, _))) : c = jn(t, _), u = parseFloat(c), y = f === "string" && h.charAt(1) === "=" && h.substr(0, 2), y && (h = h.substr(2)), d = parseFloat(h), _ in Bn && (_ === "autoAlpha" && (u === 1 && jn(t, "visibility") === "hidden" && d && (u = 0), C.push("visibility", 0, o.visibility), xi(this, o, "visibility", u ? "inherit" : "hidden", d ? "inherit" : "hidden", !d)), _ !== "scale" && _ !== "transform" && (_ = Bn[_], ~_.indexOf(",") && (_ = _.split(",")[0]))), x = _ in Kn, x) { if (this.styles.save(_), b = h, f === "string" && h.substring(0, 6) === "var(--") { if (h = hn(t, h.substring(4, h.indexOf(")"))), h.substring(0, 5) === "calc(") { var S = t.style.perspective; t.style.perspective = h, h = hn(t, "perspective"), S ? t.style.perspective = S : bi(t, "perspective") } d = parseFloat(h) } if (v || (A = t._gsap, A.renderTransform && !e.parseTransform || Ar(t, e.parseTransform), T = e.smoothOrigin !== !1 && A.smooth, v = this._pt = new qe(this._pt, o, ge, 0, 1, A.renderTransform, A, 0, -1), v.dep = 1), _ === "scale") this._pt = new qe(this._pt, A, "scaleY", A.scaleY, (y ? qi(A.scaleY, y + d) : d) - A.scaleY || 0, gl), this._pt.u = 0, a.push("scaleY", _), _ += "X"; else if (_ === "transformOrigin") { C.push(en, 0, o[en]), h = rg(h), A.svg ? yl(t, h, 0, T, 0, this) : (p = parseFloat(h.split(" ")[2]) || 0, p !== A.zOrigin && xi(this, A, "zOrigin", A.zOrigin, p), xi(this, o, _, ha(c), ha(h))); continue } else if (_ === "svgOrigin") { yl(t, h, 1, T, 0, this); continue } else if (_ in sd) { cg(this, A, _, u, y ? qi(u, y + h) : h); continue } else if (_ === "smoothOrigin") { xi(this, A, "smooth", A.smooth, h); continue } else if (_ === "force3D") { A[_] = h; continue } else if (_ === "transform") { hg(this, h, t); continue } } else _ in o || (_ = Ps(_) || _); if (x || (d || d === 0) && (u || u === 0) && !Wm.test(h) && _ in o) g = (c + "").substr((u + "").length), d || (d = 0), p = Oe(h) || (_ in tn.units ? tn.units[_] : g), g !== p && (u = Si(t, _, c, p)), this._pt = new qe(this._pt, x ? A : o, _, u, (y ? qi(u, y + d) : d) - u, !x && (p === "px" || _ === "zIndex") && e.autoRound !== !1 ? Ym : gl), this._pt.u = p || 0, x && b !== h ? (this._pt.b = c, this._pt.e = b, this._pt.r = $m) : g !== p && p !== "%" && (this._pt.b = c, this._pt.r = qm); else if (_ in o) sg.call(this, t, _, c, y ? y + h : h); else if (_ in t) this.add(t, _, c || t[_], y ? y + h : h, s, r); else if (_ !== "parseTransform") { sa(_, h); continue } x || (_ in o ? C.push(_, 0, o[_]) : typeof t[_] == "function" ? C.push(_, 2, t[_]()) : C.push(_, 1, c || t[_])), a.push(_) } } E && pl(this) }, render: function (t, e) { if (e.tween._time || !bl()) for (var n = e._pt; n;)n.r(t, n.d), n = n._next; else e.styles.revert() }, get: jn, aliases: Bn, getSetter: function (t, e, n) { var s = Bn[e]; return s && s.indexOf(",") < 0 && (e = s), e in Kn && e !== en && (t._gsap.x || jn(t, "x")) ? n && Hu === n ? e === "scale" ? Km : jm : (Hu = n || {}) && (e === "scale" ? Qm : tg) : t.style && !ia(t.style[e]) ? Zm : ~e.indexOf("-") ? Jm : la(t, e) }, core: { _removeProperty: bi, _getMatrix: Ml } }; Ve.utils.checkPrefix = Ps; Ve.core.getStyleSaver = td; (function (i, t, e, n) { var s = Xe(i + "," + t + "," + e, function (r) { Kn[r] = 1 }); Xe(t, function (r) { tn.units[r] = "deg", sd[r] = 1 }), Bn[s[13]] = i + "," + t, Xe(n, function (r) { var a = r.split(":"); Bn[a[1]] = s[a[0]] }) })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"); Xe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (i) { tn.units[i] = "px" }); Ve.registerPlugin(wl); var xe = Ve.registerPlugin(wl) || Ve, hS = xe.core.Tween; var od = "1.3.27"; function hd(i, t, e) { return Math.max(i, Math.min(t, e)) } function ug(i, t, e) { return (1 - e) * i + e * t } function dg(i, t, e, n) { return ug(i, t, 1 - Math.exp(-e * n)) } function fg(i, t) { return (i % t + t) % t } var pg = class { constructor() { xt(this, "isRunning", !1); xt(this, "value", 0); xt(this, "from", 0); xt(this, "to", 0); xt(this, "currentTime", 0); xt(this, "lerp"); xt(this, "duration"); xt(this, "easing"); xt(this, "onUpdate") } advance(i) { var e; if (!this.isRunning) return; let t = !1; if (this.duration && this.easing) { this.currentTime += i; let n = hd(0, this.currentTime / this.duration, 1); t = n >= 1; let s = t ? 1 : this.easing(n); this.value = this.from + (this.to - this.from) * s } else this.lerp ? (this.value = dg(this.value, this.to, this.lerp * 60, i), Math.round(this.value) === Math.round(this.to) && (this.value = this.to, t = !0)) : (this.value = this.to, t = !0); t && this.stop(), (e = this.onUpdate) == null || e.call(this, this.value, t) } stop() { this.isRunning = !1 } fromTo(i, t, { lerp: e, duration: n, easing: s, onStart: r, onUpdate: a }) { this.from = this.value = i, this.to = t, this.lerp = e, this.duration = n, this.easing = s, this.currentTime = 0, this.isRunning = !0, r == null || r(), this.onUpdate = a } }; function mg(i, t) { let e; return function (...n) { clearTimeout(e), e = setTimeout(() => { e = void 0, i.apply(this, n) }, t) } } var gg = class { constructor(i, t, { autoResize: e = !0, debounce: n = 250 } = {}) { xt(this, "width", 0); xt(this, "height", 0); xt(this, "scrollHeight", 0); xt(this, "scrollWidth", 0); xt(this, "debouncedResize"); xt(this, "wrapperResizeObserver"); xt(this, "contentResizeObserver"); xt(this, "resize", () => { this.onWrapperResize(), this.onContentResize() }); xt(this, "onWrapperResize", () => { this.wrapper instanceof Window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight) }); xt(this, "onContentResize", () => { this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth) }); this.wrapper = i, this.content = t, e && (this.debouncedResize = mg(this.resize, n), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize() } destroy() { var i, t; (i = this.wrapperResizeObserver) == null || i.disconnect(), (t = this.contentResizeObserver) == null || t.disconnect(), this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize) } get limit() { return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height } } }, ud = class { constructor() { xt(this, "events", {}) } emit(i, ...t) { var n; let e = this.events[i] || []; for (let s = 0, r = e.length; s < r; s++)(n = e[s]) == null || n.call(e, ...t) } on(i, t) { return this.events[i] ? this.events[i].push(t) : this.events[i] = [t], () => { var e; this.events[i] = (e = this.events[i]) == null ? void 0 : e.filter(n => t !== n) } } off(i, t) { var e; this.events[i] = (e = this.events[i]) == null ? void 0 : e.filter(n => t !== n) } destroy() { this.events = {} } }, _g = 100 / 6, Mi = { passive: !1 }; function ld(i, t) { return i === 1 ? _g : i === 2 ? t : 1 } var vg = class { constructor(i, t = { wheelMultiplier: 1, touchMultiplier: 1 }) { xt(this, "touchStart", { x: 0, y: 0 }); xt(this, "lastDelta", { x: 0, y: 0 }); xt(this, "window", { width: 0, height: 0 }); xt(this, "emitter", new ud); xt(this, "onTouchStart", i => { let { clientX: t, clientY: e } = i.targetTouches ? i.targetTouches[0] : i; this.touchStart.x = t, this.touchStart.y = e, this.lastDelta = { x: 0, y: 0 }, this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: i }) }); xt(this, "onTouchMove", i => { let { clientX: t, clientY: e } = i.targetTouches ? i.targetTouches[0] : i, n = -(t - this.touchStart.x) * this.options.touchMultiplier, s = -(e - this.touchStart.y) * this.options.touchMultiplier; this.touchStart.x = t, this.touchStart.y = e, this.lastDelta = { x: n, y: s }, this.emitter.emit("scroll", { deltaX: n, deltaY: s, event: i }) }); xt(this, "onTouchEnd", i => { this.emitter.emit("scroll", { deltaX: this.lastDelta.x, deltaY: this.lastDelta.y, event: i }) }); xt(this, "onWheel", i => { let { deltaX: t, deltaY: e, deltaMode: n } = i, s = ld(n, this.window.width), r = ld(n, this.window.height); t *= s, e *= r, t *= this.options.wheelMultiplier, e *= this.options.wheelMultiplier, this.emitter.emit("scroll", { deltaX: t, deltaY: e, event: i }) }); xt(this, "onWindowResize", () => { this.window = { width: window.innerWidth, height: window.innerHeight } }); this.element = i, this.options = t, window.addEventListener("resize", this.onWindowResize), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, Mi), this.element.addEventListener("touchstart", this.onTouchStart, Mi), this.element.addEventListener("touchmove", this.onTouchMove, Mi), this.element.addEventListener("touchend", this.onTouchEnd, Mi) } on(i, t) { return this.emitter.on(i, t) } destroy() { this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize), this.element.removeEventListener("wheel", this.onWheel, Mi), this.element.removeEventListener("touchstart", this.onTouchStart, Mi), this.element.removeEventListener("touchmove", this.onTouchMove, Mi), this.element.removeEventListener("touchend", this.onTouchEnd, Mi) } }, cd = i => Math.min(1, 1.001 - 2 ** (-10 * i)), dd = class { constructor({ wrapper: i = window, content: t = document.documentElement, eventsTarget: e = i, smoothWheel: n = !0, syncTouch: s = !1, syncTouchLerp: r = .075, touchInertiaExponent: a = 1.7, duration: o, easing: l, lerp: c = .1, infinite: h = !1, orientation: d = "vertical", gestureOrientation: u = d === "horizontal" ? "both" : "vertical", touchMultiplier: f = 1, wheelMultiplier: m = 1, autoResize: _ = !0, prevent: g, virtualScroll: p, overscroll: y = !0, autoRaf: x = !1, anchors: v = !1, autoToggle: A = !1, allowNestedScroll: T = !1, __experimental__naiveDimensions: E = !1, naiveDimensions: C = E, stopInertiaOnNavigate: b = !1, respectReducedMotion: S = !0 } = {}) { xt(this, "_isScrolling", !1); xt(this, "_isStopped", !1); xt(this, "_isLocked", !1); xt(this, "_preventNextNativeScrollEvent", !1); xt(this, "_resetVelocityTimeout", null); xt(this, "_rafId", null); xt(this, "_isDraggingSelection", !1); xt(this, "reducedMotionMediaQuery", window.matchMedia("(prefers-reduced-motion: reduce)")); xt(this, "isTouching"); xt(this, "isIos"); xt(this, "time", 0); xt(this, "userData", {}); xt(this, "lastVelocity", 0); xt(this, "velocity", 0); xt(this, "direction", 0); xt(this, "options"); xt(this, "targetScroll"); xt(this, "animatedScroll"); xt(this, "animate", new pg); xt(this, "emitter", new ud); xt(this, "dimensions"); xt(this, "virtualScroll"); xt(this, "onScrollEnd", i => { i instanceof CustomEvent || (this.isScrolling === "smooth" || this.isScrolling === !1) && i.stopPropagation() }); xt(this, "dispatchScrollendEvent", () => { this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", { bubbles: this.options.wrapper === window, detail: { lenisScrollEnd: !0 } })) }); xt(this, "onTransitionEnd", i => { var t; (t = i.propertyName) != null && t.includes("overflow") && i.target === this.rootElement && this.checkOverflow() }); xt(this, "onClick", i => { let t = i.composedPath().filter(n => n instanceof HTMLAnchorElement && n.href).map(n => new URL(n.href)), e = new URL(window.location.href); if (this.options.anchors) { let n = t.find(s => e.host === s.host && e.pathname === s.pathname && s.hash); if (n) { let s = typeof this.options.anchors == "object" && this.options.anchors ? this.options.anchors : void 0, r = decodeURIComponent(n.hash); this.scrollTo(r, s); return } } if (this.options.stopInertiaOnNavigate && t.some(n => e.host === n.host && e.pathname !== n.pathname)) { this.reset(); return } }); xt(this, "onPointerDown", i => { i.button === 1 && this.reset() }); xt(this, "onVirtualScroll", i => { if (typeof this.options.virtualScroll == "function" && this.options.virtualScroll(i) === !1) return; let { deltaX: t, deltaY: e, event: n } = i; if (this.emitter.emit("virtual-scroll", { deltaX: t, deltaY: e, event: n }), n.ctrlKey || n.lenisStopPropagation) return; let s = n.type.includes("touch"), r = n.type.includes("wheel"); if (s && this.isIos && (n.type === "touchstart" && (this._isDraggingSelection = this.isTouchOnSelectionHandle(n)), this._isDraggingSelection)) { n.type === "touchend" && (this._isDraggingSelection = !1); return } this.isTouching = n.type === "touchstart" || n.type === "touchmove"; let a = t === 0 && e === 0; if (this.options.syncTouch && s && n.type === "touchstart" && a && !this.isStopped && !this.isLocked) { this.reset(); return } let o = this.options.gestureOrientation === "vertical" && e === 0 || this.options.gestureOrientation === "horizontal" && t === 0; if (a || o) return; let l = n.composedPath(); l = l.slice(0, l.indexOf(this.rootElement)); let c = this.options.prevent, h = Math.abs(t) >= Math.abs(e) ? "horizontal" : "vertical"; if (l.find(m => { var _, g, p, y, x; return m instanceof HTMLElement && (typeof c == "function" && (c == null ? void 0 : c(m)) || ((_ = m.hasAttribute) == null ? void 0 : _.call(m, "data-lenis-prevent")) || h === "vertical" && ((g = m.hasAttribute) == null ? void 0 : g.call(m, "data-lenis-prevent-vertical")) || h === "horizontal" && ((p = m.hasAttribute) == null ? void 0 : p.call(m, "data-lenis-prevent-horizontal")) || s && ((y = m.hasAttribute) == null ? void 0 : y.call(m, "data-lenis-prevent-touch")) || r && ((x = m.hasAttribute) == null ? void 0 : x.call(m, "data-lenis-prevent-wheel")) || this.options.allowNestedScroll && this.hasNestedScroll(m, { deltaX: t, deltaY: e })) })) return; if (this.isStopped || this.isLocked) { n.cancelable && n.preventDefault(); return } if (!(this.options.syncTouch && s || this.options.smoothWheel && r)) { this.isScrolling = "native", this.animate.stop(), n.lenisStopPropagation = !0; return } let d = e; this.options.gestureOrientation === "both" ? d = Math.abs(e) > Math.abs(t) ? e : t : this.options.gestureOrientation === "horizontal" && (d = t), (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && e > 0 || this.animatedScroll === this.limit && e < 0)) && (n.lenisStopPropagation = !0), n.cancelable && n.preventDefault(); let u = s && this.options.syncTouch, f = s && n.type === "touchend"; f && (d = Math.sign(d) * Math.abs(this.velocity) ** this.options.touchInertiaExponent), this.scrollTo(this.targetScroll + d, { programmatic: !1, ...u ? { lerp: f ? this.options.syncTouchLerp : 1 } : { lerp: this.options.lerp, duration: this.options.duration, easing: this.options.easing } }) }); xt(this, "onNativeScroll", () => { if (this._resetVelocityTimeout !== null && (clearTimeout(this._resetVelocityTimeout), this._resetVelocityTimeout = null), this._preventNextNativeScrollEvent) { this._preventNextNativeScrollEvent = !1; return } if (this.isScrolling === !1 || this.isScrolling === "native") { let i = this.animatedScroll; this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - i, this.direction = Math.sign(this.animatedScroll - i), this.isStopped || (this.isScrolling = "native"), this.emit(), this.velocity !== 0 && (this._resetVelocityTimeout = setTimeout(() => { this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = !1, this.emit() }, 400)) } }); xt(this, "raf", i => { let t = i - (this.time || i); this.time = i, this.animate.advance(t * .001), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf)) }); window.lenisVersion = od, window.lenis || (window.lenis = {}), window.lenis.version = od, d === "horizontal" && (window.lenis.horizontal = !0), s === !0 && (window.lenis.touch = !0), this.isIos = /(iPad|iPhone|iPod)/g.test(navigator.userAgent), (!i || i === document.documentElement) && (i = window), typeof o == "number" && typeof l != "function" ? l = cd : typeof l == "function" && typeof o != "number" && (o = 1), this.options = { wrapper: i, content: t, eventsTarget: e, smoothWheel: n, syncTouch: s, syncTouchLerp: r, touchInertiaExponent: a, duration: o, easing: l, lerp: c, infinite: h, gestureOrientation: u, orientation: d, touchMultiplier: f, wheelMultiplier: m, autoResize: _, prevent: g, virtualScroll: p, overscroll: y, autoRaf: x, anchors: v, autoToggle: A, allowNestedScroll: T, naiveDimensions: C, stopInertiaOnNavigate: b, respectReducedMotion: S }, this.dimensions = new gg(i, t, { autoResize: _ }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, { capture: !0 }), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.addEventListener("click", this.onClick), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown), this.virtualScroll = new vg(e, { touchMultiplier: f, wheelMultiplier: m }), this.virtualScroll.on("scroll", this.onVirtualScroll), this.options.autoToggle && (this.checkOverflow(), this.rootElement.addEventListener("transitionend", this.onTransitionEnd)), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf)) } destroy() { this.emitter.destroy(), this._resetVelocityTimeout !== null && (clearTimeout(this._resetVelocityTimeout), this._resetVelocityTimeout = null), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll), this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, { capture: !0 }), this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.removeEventListener("click", this.onClick), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName(), this._rafId && cancelAnimationFrame(this._rafId) } on(i, t) { return this.emitter.on(i, t) } off(i, t) { return this.emitter.off(i, t) } get overflow() { let i = this.isHorizontal ? "overflow-x" : "overflow-y"; return getComputedStyle(this.rootElement)[i] } checkOverflow() { ["hidden", "clip"].includes(this.overflow) ? this.internalStop() : this.internalStart() } setScroll(i) { this.isHorizontal ? this.options.wrapper.scrollTo({ left: i, behavior: "instant" }) : this.options.wrapper.scrollTo({ top: i, behavior: "instant" }) } isTouchOnSelectionHandle(i) { var c; let t = window.getSelection(); if (!t || t.isCollapsed || t.rangeCount === 0) return !1; let e = (c = i.targetTouches[0]) != null ? c : i.changedTouches[0]; if (!e) return !1; let n = t.getRangeAt(0).getClientRects(); if (n.length === 0) return !1; let s = n[0], r = n[n.length - 1], a = 40, o = Math.hypot(e.clientX - s.left, e.clientY - s.top) <= a, l = Math.hypot(e.clientX - r.right, e.clientY - r.bottom) <= a; return o || l } resize() { this.dimensions.resize(), this.animatedScroll = this.targetScroll = this.actualScroll, this.emit() } emit() { this.emitter.emit("scroll", this) } reset() { this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop() } start() { if (this.isStopped) { if (this.options.autoToggle) { this.rootElement.style.removeProperty("overflow"); return } this.internalStart() } } internalStart() { this.isStopped && (this.reset(), this.isStopped = !1, this.emit()) } stop() { if (!this.isStopped) { if (this.options.autoToggle) { this.rootElement.style.setProperty("overflow", "clip"); return } this.internalStop() } } internalStop() { this.isStopped || (this.reset(), this.isStopped = !0, this.emit()) } scrollTo(i, { offset: t = 0, immediate: e = !1, lock: n = !1, programmatic: s = !0, lerp: r = s ? this.options.lerp : void 0, duration: a = s ? this.options.duration : void 0, easing: o = s ? this.options.easing : void 0, onStart: l, onComplete: c, force: h = !1, userData: d } = {}) { if (this.prefersReducedMotion && (s ? e = !0 : (r = 1, a = void 0, o = void 0)), (this.isStopped || this.isLocked) && !h) return; let u = i, f = t; if (typeof u == "string" && ["top", "left", "start", "#"].includes(u)) u = 0; else if (typeof u == "string" && ["bottom", "right", "end"].includes(u)) u = this.limit; else { let m = null; if (typeof u == "string" ? (m = u.startsWith("#") ? document.getElementById(u.slice(1)) : document.querySelector(u), m || (u === "#top" ? u = 0 : console.warn("Lenis: Target not found", u))) : u instanceof Element && (m = u), m) { if (this.options.wrapper !== window) { let v = this.rootElement.getBoundingClientRect(); f -= this.isHorizontal ? v.left : v.top } let _ = m.getBoundingClientRect(), g = getComputedStyle(m), p = this.isHorizontal ? Number.parseFloat(g.scrollMarginLeft) : Number.parseFloat(g.scrollMarginTop), y = getComputedStyle(this.rootElement), x = this.isHorizontal ? Number.parseFloat(y.scrollPaddingLeft) : Number.parseFloat(y.scrollPaddingTop); u = (this.isHorizontal ? _.left : _.top) + this.animatedScroll - (Number.isNaN(p) ? 0 : p) - (Number.isNaN(x) ? 0 : x) } } if (typeof u == "number") { if (u += f, this.options.infinite) { if (s) { this.targetScroll = this.animatedScroll = this.scroll; let m = u - this.animatedScroll; m > this.limit / 2 ? u -= this.limit : m < -this.limit / 2 && (u += this.limit) } } else u = hd(0, u, this.limit); if (u === this.targetScroll) { l == null || l(this), c == null || c(this); return } if (this.userData = d != null ? d : {}, e) { this.animatedScroll = this.targetScroll = u, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), c == null || c(this), this.userData = {}, requestAnimationFrame(() => { this.dispatchScrollendEvent() }); return } s || (this.targetScroll = u), typeof a == "number" && typeof o != "function" ? o = cd : typeof o == "function" && typeof a != "number" && (a = 1), this.animate.fromTo(this.animatedScroll, u, { duration: a, easing: o, lerp: r, onStart: () => { n && (this.isLocked = !0), this.isScrolling = "smooth", l == null || l(this) }, onUpdate: (m, _) => { this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = m - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = m, this.setScroll(this.scroll), s && (this.targetScroll = m), _ || this.emit(), _ && (this.reset(), this.emit(), c == null || c(this), this.userData = {}, requestAnimationFrame(() => { this.dispatchScrollendEvent() }), this.preventNextNativeScrollEvent()) } }) } } preventNextNativeScrollEvent() { this._preventNextNativeScrollEvent = !0, requestAnimationFrame(() => { this._preventNextNativeScrollEvent = !1 }) } hasNestedScroll(i, { deltaX: t, deltaY: e }) { var T; let n = Date.now(); i._lenis || (i._lenis = {}); let s = i._lenis, r, a, o, l, c, h, d, u, f, m; if (n - ((T = s.time) != null ? T : 0) > 2e3) { s.time = Date.now(); let E = window.getComputedStyle(i); if (s.computedStyle = E, r = ["auto", "overlay", "scroll"].includes(E.overflowX), a = ["auto", "overlay", "scroll"].includes(E.overflowY), c = ["auto"].includes(E.overscrollBehaviorX), h = ["auto"].includes(E.overscrollBehaviorY), s.hasOverflowX = r, s.hasOverflowY = a, !(r || a)) return !1; d = i.scrollWidth, u = i.scrollHeight, f = i.clientWidth, m = i.clientHeight, o = d > f, l = u > m, s.isScrollableX = o, s.isScrollableY = l, s.scrollWidth = d, s.scrollHeight = u, s.clientWidth = f, s.clientHeight = m, s.hasOverscrollBehaviorX = c, s.hasOverscrollBehaviorY = h } else o = s.isScrollableX, l = s.isScrollableY, r = s.hasOverflowX, a = s.hasOverflowY, d = s.scrollWidth, u = s.scrollHeight, f = s.clientWidth, m = s.clientHeight, c = s.hasOverscrollBehaviorX, h = s.hasOverscrollBehaviorY; if (!(r && o || a && l)) return !1; let _ = Math.abs(t) >= Math.abs(e) ? "horizontal" : "vertical", g, p, y, x, v, A; if (_ === "horizontal") g = Math.round(i.scrollLeft), p = d - f, y = t, x = r, v = o, A = c; else if (_ === "vertical") g = Math.round(i.scrollTop), p = u - m, y = e, x = a, v = l, A = h; else return !1; return !A && (g >= p || g <= 0) ? !0 : (y > 0 ? g < p : g > 0) && x && v } get rootElement() { return this.options.wrapper === window ? document.documentElement : this.options.wrapper } get limit() { return this.options.naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"] } get isHorizontal() { return this.options.orientation === "horizontal" } get actualScroll() { var t, e; let i = this.options.wrapper; return this.isHorizontal ? (t = i.scrollX) != null ? t : i.scrollLeft : (e = i.scrollY) != null ? e : i.scrollTop } get scroll() { return this.options.infinite ? fg(this.animatedScroll, this.limit) : this.animatedScroll } get progress() { return this.limit === 0 ? 1 : this.scroll / this.limit } get isScrolling() { return this._isScrolling } set isScrolling(i) { this._isScrolling !== i && (this._isScrolling = i, this.updateClassName()) } get isStopped() { return this._isStopped } set isStopped(i) { this._isStopped !== i && (this._isStopped = i, this.updateClassName()) } get isLocked() { return this._isLocked } set isLocked(i) { this._isLocked !== i && (this._isLocked = i, this.updateClassName()) } get isSmooth() { return this.isScrolling === "smooth" } get prefersReducedMotion() { return this.options.respectReducedMotion && this.reducedMotionMediaQuery.matches } get className() { let i = "lenis"; return this.options.autoToggle && (i += " lenis-autoToggle"), this.isStopped && (i += " lenis-stopped"), this.isLocked && (i += " lenis-locked"), this.isScrolling && (i += " lenis-scrolling"), this.isScrolling === "smooth" && (i += " lenis-smooth"), i } updateClassName() { this.cleanUpClassName(), this.className.split(" ").forEach(i => { this.rootElement.classList.add(i) }) } cleanUpClassName() { for (let i of Array.from(this.rootElement.classList)) (i === "lenis" || i.startsWith("lenis-")) && this.rootElement.classList.remove(i) } }; var Fe = typeof window != "undefined" && window.SITE_CONFIG || {}, Ki = i => typeof i == "string" && /^https?:\/\//i.test(i.trim()) ? i.trim() : "", ne = { name: "Iman Umar", email: "imanumarrrr@gmail.com", whatsapp: "923107695950", github: "https://github.com/imanumarrrr-dotcom", linkedin: "", instagram: "", cv: "assets/Iman_Umar_CV.docx", formEndpoint: "", openaiModel: "gpt-4o-mini", aiEndpoint: "", siteUrl: "", analytics: {} };["github", "linkedin", "instagram", "formEndpoint"].forEach(i => { Fe.contact && i in Fe.contact && (ne[i] = Ki(Fe.contact[i])) });["aiEndpoint", "siteUrl"].forEach(i => { Fe.contact && i in Fe.contact && (ne[i] = Ki(Fe.contact[i])) }); Fe.analytics && typeof Fe.analytics == "object" && (ne.analytics = Fe.analytics);["email", "whatsapp", "cv"].forEach(i => { Fe.contact && typeof Fe.contact[i] == "string" && (ne[i] = Fe.contact[i].trim()) }); var ua = ["Frontend Developer", "AI App Builder", "Creative Coder", "RAG & LLM Tinkerer"], pd = [{ n: 9, label: "Projects built" }, { n: 8, label: "AI apps" }, { n: 2, label: "Internships" }, { n: 1, label: "E-commerce store" }], md = [{ k: "01", t: "Creative Frontend", d: "Responsive, mobile-first interfaces in HTML5, CSS3 and vanilla JavaScript with motion that supports the story." }, { k: "02", t: "AI Apps & RAG", d: "Chat assistants that read PDFs, Word and Excel files, cite their sources and stream answers." }, { k: "03", t: "Full-stack PHP / MySQL", d: "Database-driven pages and a working e-commerce store with a storefront and an admin panel." }, { k: "04", t: "Motion & 3D", d: "Animated themes, particle scenes and interaction details that make a page feel alive." }], El = [["HTML5", "Frontend"], ["CSS3", "Frontend"], ["JavaScript", "Frontend"], ["Responsive Design", "Frontend"], ["PHP", "Backend"], ["MySQL", "Backend"], ["XAMPP", "Backend"], ["Python", "AI"], ["LangChain", "AI"], ["OpenAI API", "AI"], ["Streamlit", "AI"], ["RAG", "AI"], ["Git & GitHub", "Tools"], ["Canva", "Tools"], ["MS Office", "Tools"]], Is = [{ id: "voiceagent", title: "Voice Agent AI", kicker: "AI-powered voice assistant", category: "ai", year: "2026", motif: "voice", palette: ["#8B6CFF", "#5CFFC8", "#1a1240"], status: "Live demo", links: {}, summary: "An interactive AI voice assistant: speak instead of typing and get a spoken answer back.", bullets: ["Voice-based interaction for a more natural conversation.", "AI responses that understand the question and answer it directly.", "Simple interface built around listening, thinking and speaking states."], stack: ["Python", "Streamlit", "OpenAI API", "Voice processing"], role: "AI developer: voice flow and interface", ask: "Voice Agent AI is an interactive voice-based assistant built with Python and Streamlit. Users talk to an AI assistant instead of typing, which makes the conversation more natural and convenient." }, { id: "minddesk", title: "MindDesk", kicker: "RAG + custom ChatGPT workspace", category: "ai", year: "2026", motif: "docs", palette: ["#8B6CFF", "#5CFFC8", "#1a1240"], status: "Case study", links: {}, summary: "One calm workspace that merges a multi-chat assistant with document search. Upload PDF, Word, PowerPoint, Excel, CSV or text files and ask questions with numbered citations.", bullets: ["Spreadsheet-aware: every sheet gets a deterministic summary so totals and averages come from real figures.", "Data explorer with chart builder, animated themes and an API-key gate before the console opens.", "Pure NumPy vector store with MMR re-ranking and an on-disk embedding cache."], stack: ["Python", "Streamlit", "OpenAI API", "RAG", "Plotly"], role: "Design, prompts, retrieval and UI", ask: "MindDesk is a Streamlit app that combines a ChatGPT-style assistant with RAG over PDF, Word, PowerPoint, Excel, CSV, text and JSON files. It cites sources, builds table summaries for spreadsheets, has a data explorer with charts and themes, and asks for an OpenAI API key before opening the console." }, { id: "supportpearlz", title: "SupportPearlz AI", kicker: "RAG customer-support assistant", category: "ai", year: "2026", motif: "pearls", palette: ["#FF7AC8", "#7AD7FF", "#1c1030"], status: "Case study", links: {}, summary: "A LangChain retrieval assistant for customer support that answers from a knowledge base, shows where each answer came from and can rebuild its index on demand.", bullets: ["Document ingestion pipeline with a one-click index rebuild.", "Source citations so support staff can verify every answer.", "Animated Streamlit interface with an API-key gate."], stack: ["Python", "LangChain", "ChromaDB", "Streamlit", "OpenAI API"], role: "Ingestion, retrieval chain and UI", ask: "SupportPearlz AI is a LangChain RAG customer-support assistant built with Streamlit (assignment AAI-407). It ingests documents into a vector index, answers with citations and lets the user rebuild the index." }, { id: "finwise", title: "FinWise AI", kicker: "Personal finance & budget assistant", category: "ai", year: "2026", motif: "bars", palette: ["#EAAA00", "#5CFFC8", "#0f1a14"], status: "Case study", links: {}, summary: "Enter income and expenses; Python computes the ratios and a preliminary score, then an LLM turns the numbers into structured, educational budgeting advice.", bullets: ["Strict split: deterministic maths in Python, interpretation by the model.", "Structured JSON output validated with a safe fallback.", "Streaming recommendation, in-memory and SQLite caching, charts and downloadable report."], stack: ["Python", "LangChain", "Streamlit", "Plotly", "SQLite"], role: "Calculations, prompts, chain and dashboard", ask: "FinWise AI is a LangChain and Streamlit personal-finance assistant. Python calculates totals, savings and expense ratios and a preliminary score; the LLM returns structured JSON insights and streams a written recommendation. It supports in-memory and SQLite caching and is for education only." }, { id: "mediguide", title: "MediGuide AI", kicker: "Safety-first symptom guidance", category: "ai", year: "2026", motif: "pulse", palette: ["#FF5C7A", "#5CE1FF", "#1a0c16"], status: "Case study", links: {}, summary: "An educational symptom-guidance assistant that never claims a diagnosis. A Python red-flag screen sets a minimum urgency that the AI can raise but never lower.", bullets: ["Urgency levels LOW / MEDIUM / HIGH / EMERGENCY with clear next steps.", "Rule-based safety net plus a supportive message for self-harm keywords.", "Answers in multiple languages including Urdu, with right-to-left support."], stack: ["Python", "LangChain", "Streamlit", "OpenAI API"], role: "Safety rules, prompts and interface", ask: "MediGuide AI is an educational symptom-guidance app. It collects symptoms, runs a Python red-flag safety check that sets a minimum urgency, then asks an LLM for structured guidance. It never presents a confirmed diagnosis and always tells users to seek emergency help in urgent cases." }, { id: "marketmind", title: "MarketMind AI", kicker: "Autonomous market-research agent", category: "ai", year: "2026", motif: "radar", palette: ["#5CFFC8", "#8B6CFF", "#0c1a1a"], status: "Live demo", links: { live: "https://marketmind-1.streamlit.app", github: "https://github.com/imanumarrrr-dotcom/marketmind" }, summary: "A research agent that plans, searches a corpus, saves evidence with source references and writes a report, with a named human approving before anything is published.", bullets: ["Every claim is traceable to evidence and typed as fact, inference or recommendation.", "Quality-control pass, injection flags, cost ceiling and an audit trail.", "Console with live log, tool dispatcher lab and downloadable run bundle."], stack: ["Python", "OpenAI API", "Streamlit", "Pydantic"], role: "Agent loop, evidence model and console UI", ask: "MarketMind AI is an autonomous business-research agent in Streamlit. It analyses a request, plans sub-questions, searches a corpus with tools, stores evidence with source references, runs QC and drafts a report that a named human must approve. It has a live demo and a GitHub repository." }, { id: "customai", title: "Custom AI Chat", kicker: "ChatGPT-style assistant", category: "ai", year: "2026", motif: "chat", palette: ["#8B6CFF", "#FF7A59", "#170f2a"], status: "Case study", links: {}, summary: "A customised multi-chat assistant with a sidebar of conversations, editable system roles, streaming answers and saved history.", bullets: ["Create, search and delete chats; each chat keeps its own system role.", "Streaming tokens with a thinking indicator and clean reveal animation.", "History saved to disk and exported as Markdown."], stack: ["Python", "Streamlit", "LangChain", "OpenAI API"], role: "Product design and implementation", ask: "Custom AI Chat is a ChatGPT-style Streamlit assistant with multiple chats, search, per-chat system roles, streaming responses and saved history. It was later merged with the RAG agent to become MindDesk." }, { id: "ragagent", title: "RAG Agent (DocMind)", kicker: "Ask your PDFs", category: "ai", year: "2026", motif: "nodes", palette: ["#5CE1FF", "#8B6CFF", "#0b1424"], status: "Case study", links: {}, summary: "A document question-answering agent: upload PDFs, split and embed them, retrieve diverse passages with MMR and answer with page-level sources.", bullets: ["Chunking, embeddings and MMR retrieval over uploaded PDFs.", "Quick actions for summaries and key points.", "Source passages shown beside every answer."], stack: ["Python", "LangChain", "FAISS", "Streamlit"], role: "Retrieval pipeline and interface", ask: "The RAG Agent (DocMind) lets users upload PDFs and ask questions. It splits documents into chunks, embeds them with FAISS, retrieves passages with MMR and answers with source pages and quick actions like summarize and key points." }, { id: "ceramichub", title: "CeramicHub", kicker: "E-commerce store + admin panel", category: "web", year: "2026", motif: "vase", palette: ["#EAAA00", "#FF7A59", "#2a140c"], status: "Case study", links: {}, summary: "A fully working PHP and MySQL ceramics store with product listings, database-driven pages and an admin panel to manage the catalogue.", bullets: ["Storefront with product listings and database-driven pages.", "Admin dashboard for managing products and orders.", "Built and tested locally on XAMPP (Apache + MySQL)."], stack: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "XAMPP"], role: "Full-stack developer", ask: "CeramicHub is a ceramic e-commerce website built with PHP, MySQL, JavaScript, HTML and CSS on XAMPP. It has a customer storefront with product listings and an admin panel for managing the store." }], yg = { voiceagent: { challenge: "Typing slows a conversation down; people just want to talk to an assistant.", approach: "Built a Streamlit voice assistant: speech goes in, the AI answers, and the answer is spoken back.", learned: "Voice UX lives or dies on clear feedback: listening, thinking and speaking states." }, minddesk: { challenge: "I had two separate apps \u2014 a ChatGPT-style assistant and a PDF question-answering agent \u2014 and plain RAG answered spreadsheet questions badly.", approach: "Merged them into one workspace, added loaders for PDF, Word, PowerPoint, Excel and CSV, built deterministic table summaries and an on-disk embedding cache.", learned: "How a table is represented matters as much as the model: summaries made totals and averages reliable." }, supportpearlz: { challenge: "Support teams need answers they can trust and verify.", approach: "Indexed a knowledge base with ChromaDB, retrieved with LangChain and attached source citations to every reply.", learned: "A rebuildable index plus citations makes a RAG assistant far easier to debug and trust." }, finwise: { challenge: "LLMs are unreliable at arithmetic but good at explaining.", approach: "Python computes every ratio and a preliminary score; the model only interprets them and must return validated JSON.", learned: "Separating deterministic maths from generation removes a whole class of errors." }, mediguide: { challenge: "A health assistant must never overstate certainty or miss an emergency.", approach: "A Python red-flag screen sets a minimum urgency the model cannot lower, with clear disclaimers on every screen.", learned: "Safety rules belong in code, not only in the prompt." }, marketmind: { challenge: "Research agents hallucinate and act without oversight.", approach: "Every claim is saved as typed evidence with a source reference, QC checks the draft, and a named human approves before anything is published.", learned: "Traceability and human approval turn an agent from a demo into something reviewable." }, customai: { challenge: "Make a ChatGPT-style assistant that feels polished and keeps its history.", approach: "Multi-chat sidebar, per-chat system roles, streaming with a thinking indicator and history saved to disk.", learned: "Small UX details like streaming and loading states change how intelligent an assistant feels." }, ragagent: { challenge: "Answer questions from long PDFs and show proof.", approach: "Chunk, embed, retrieve with MMR for diverse passages and show the source pages beside the answer.", learned: "Chunk size, overlap and k shape answer quality more than expected." }, ceramichub: { challenge: "Build a complete store, not just pages.", approach: "A PHP and MySQL storefront with product listings and an admin panel to manage the catalogue, tested on XAMPP.", learned: "Designing the database first made both the admin panel and the storefront simpler." } }; Is.forEach(i => { i.story = yg[i.id] }); var fd = i => typeof i == "string" && /^(https:\/\/|assets\/)[^\s"'<>]+$/i.test(i.trim()) ? i.trim() : ""; Object.entries(Fe.projects || {}).forEach(([i, t]) => { let e = Is.find(s => s.id === i); if (!e || !t) return; let n = {}; Ki(t.live) && (n.live = Ki(t.live)), Ki(t.github) && (n.github = Ki(t.github)), e.links = { ...e.links, ...n }, fd(t.image) && (e.image = fd(t.image)), e.status = e.links.live ? "Live demo" : e.links.github ? "Source on GitHub" : e.status }); var Tl = { recruiter: { lead: "A recent BSIT graduate with two internships and nine shipped projects \u2014 these three matter most for hiring.", highlight: ["minddesk", "marketmind", "finwise"], cta: { label: "Download CV \u2193", action: "cv" } }, client: { lead: "Need a store, a website or an AI assistant? Start with a working example.", highlight: ["ceramichub", "customai", "supportpearlz"], cta: { label: "Start a project \u2192", action: "contact" } }, student: { lead: "Learning RAG, LangChain or Streamlit? These projects show how each piece fits together.", highlight: ["ragagent", "supportpearlz", "minddesk"], cta: { label: "Explore the Lab \u2726", action: "lab" } } }, zn = (i, t = 400) => typeof i == "string" ? i.trim().slice(0, t) : "", Al = (Fe.testimonials || []).map(i => ({ name: zn(i.name, 80), role: zn(i.role, 120), quote: zn(i.quote, 500) })).filter(i => i.name && i.quote), Cl = (Fe.certificates || []).map(i => ({ title: zn(i.title, 120), issuer: zn(i.issuer, 120), year: zn(i.year, 12), url: Ki(i.url) })).filter(i => i.title), Rl = (Fe.posts || []).map(i => ({ title: zn(i.title, 140), date: zn(i.date, 20), tags: Array.isArray(i.tags) ? i.tags.map(t => zn(t, 24)).slice(0, 5) : [], body: zn(i.body, 6e3) })).filter(i => i.title && i.body), gd = [{ when: "Nov 2022 \u2013 Jun 2026", t: "BS Information Technology", d: "Software engineering, database systems, web technologies and computer networks. Modules: Web Development, Human-Computer Interaction, Database Management, Computer Networks, IT Project Management." }, { when: "2024", t: "Front-End Development Website", d: "Responsive multi-page site in HTML5, CSS3 and vanilla JavaScript, built mobile-first for cross-device compatibility." }, { when: "Feb \u2013 Mar 2026", t: "Software Engineer Intern \xB7 Algolix Technologies", d: "Eight weeks on live software projects in a collaborative engineering team, adapting to new tools and codebases under real deadlines." }, { when: "2026", t: "ISPR Summer Internship Programme", d: "Selected for a competitive 12-day national programme with 6,000+ interns across 21 stations. Documented expert sessions on media literacy, misinformation and national security in a structured report." }, { when: "Now", t: "Learning \xB7 Huawei HCCDA-AI", d: "Studying AI at Corvit Lahore while building LLM and RAG applications." }], Qi = [{ id: "about", title: "About Iman", tags: "who iman umar introduction summary graduate developer", text: "Iman Umar is a recent BS Information Technology graduate from Gujranwala, Pakistan. She builds responsive, user-friendly websites and AI applications, works across front end and back end with HTML, CSS, JavaScript, PHP and MySQL, and is a quick learner with strong leadership and teamwork skills looking to grow as a web developer and contribute to real projects from day one." }, { id: "education", title: "Education", tags: "degree bsit university study studied graduate semester modules", text: "Bachelor of Science in Information Technology, November 2022 to June 2026, covering software engineering, database systems, web technologies and computer networks. Relevant modules include Web Development, Human-Computer Interaction, Database Management, Computer Networks and IT Project Management." }, { id: "algolix", title: "Internship \xB7 Algolix Technologies", tags: "internship intern algolix software engineer experience job work", text: "Software Engineer Intern at Algolix Technologies (Pvt.) Ltd., February to March 2026: an 8-week internship contributing to live software projects in a collaborative team, adapting quickly to new tools and codebases under real-world deadlines, with recognition for work ethic and quality of output." }, { id: "ispr", title: "Internship \xB7 ISPR", tags: "ispr internship summer programme media literacy national security report experience", text: "ISPR Summer Internship Programme 2026: selected for a competitive 12-day national programme alongside 6,000+ interns across 21 stations. Attended expert sessions on media literacy, misinformation and disinformation detection and national security, and wrote a structured 12-day professional report." }, { id: "learning", title: "Currently learning", tags: "learning learn huawei hccda ai course certification studying", text: "Iman is currently learning Huawei HCCDA-AI at Corvit Lahore, alongside building LLM, RAG and Streamlit applications." }, { id: "skills", title: "Skills", tags: "skills technologies tech stack languages tools frameworks", text: "Technical: HTML5, CSS3, JavaScript, PHP, MySQL, XAMPP, responsive and mobile-first design. AI: Python, LangChain, OpenAI API, Streamlit and retrieval-augmented generation. Tools: Git and GitHub, Canva, MS Office. Soft skills: leadership, teamwork, communication, time management and problem solving." }, { id: "contact", title: "Contact", tags: "contact email hire reach message whatsapp github linkedin instagram connect available", text: `You can email Iman at ${ne.email}, message her on WhatsApp or use the contact form at the bottom of this page. Her code is on GitHub at ${ne.github}. She is open to junior web developer roles, internships and selected freelance projects.` }, { id: "availability", title: "Availability", tags: "available availability hire freelance job opportunity open work remote", text: "Iman is open to junior web developer and AI application roles, internships and selected freelance work. She is based in Gujranwala, Pakistan and can work remotely." }, { id: "cv", title: "CV", tags: "cv resume download curriculum vitae", text: "The CV can be downloaded from the Download CV button in the About section or from the contact section." }, ...Is.map(i => ({ id: i.id, title: `Project \xB7 ${i.title}`, tags: `project ${i.title} ${i.kicker} ${i.stack.join(" ")} ${i.category === "ai" ? "ai llm rag" : "web ecommerce php"}`, text: `${i.ask} Tech: ${i.stack.join(", ")}. Status: ${i.status}.${i.links.live ? " Live demo: " + i.links.live + "." : ""}${i.links.github ? " GitHub: " + i.links.github + "." : ""}` })), { id: "projects", title: "All projects", tags: "projects portfolio work built made list everything", text: "Iman has built nine projects: Voice Agent AI (voice assistant), MindDesk (RAG plus custom ChatGPT), SupportPearlz AI (RAG support assistant), FinWise AI (finance assistant), MediGuide AI (symptom guidance), MarketMind AI (research agent), Custom AI Chat, RAG Agent (DocMind) and CeramicHub (PHP and MySQL e-commerce)." }]; (Fe.notes || []).forEach((i, t) => { i && i.title && i.text && Qi.push({ id: "note" + t, title: String(i.title), tags: String(i.title).toLowerCase(), text: String(i.text) }) }); var _d = ["What did Iman build?", "Tell me about MindDesk", "Which internships has she done?", "What is her tech stack?", "How can I contact her?"]; var Ch = "170"; var xg = 0, vd = 1, bg = 2; var wf = 1, Sg = 2, si = 3, Ni = 0, rn = 1, Rn = 2, Li = 0, Di = 1, Wn = 2, yd = 3, xd = 4, Mg = 5, os = 100, wg = 101, Eg = 102, Tg = 103, Ag = 104, Cg = 200, Rg = 201, Pg = 202, Ig = 203, hc = 204, uc = 205, Lg = 206, Dg = 207, Ug = 208, Ng = 209, Og = 210, Fg = 211, kg = 212, Bg = 213, zg = 214, dc = 0, fc = 1, pc = 2, Js = 3, mc = 4, gc = 5, _c = 6, vc = 7, Ef = 0, Vg = 1, Hg = 2, Ui = 0, Gg = 1, Wg = 2, Xg = 3, qg = 4, $g = 5, Yg = 6, Zg = 7; var Tf = 300, js = 301, Ks = 302, yc = 303, xc = 304, vo = 306, bc = 1e3, cs = 1001, Sc = 1002, In = 1003, Jg = 1004; var da = 1005; var Hn = 1006, Pl = 1007; var hs = 1008; var ci = 1009, Af = 1010, Cf = 1011, Fr = 1012, Rh = 1013, us = 1014, ai = 1015, zr = 1016, Ph = 1017, Ih = 1018, Qs = 1020, Rf = 35902, Pf = 1021, If = 1022, Pn = 1023, Lf = 1024, Df = 1025, $s = 1026, tr = 1027, Uf = 1028, Lh = 1029, Nf = 1030, Dh = 1031; var Uh = 1033, Ha = 33776, Ga = 33777, Wa = 33778, Xa = 33779, Mc = 35840, wc = 35841, Ec = 35842, Tc = 35843, Ac = 36196, Cc = 37492, Rc = 37496, Pc = 37808, Ic = 37809, Lc = 37810, Dc = 37811, Uc = 37812, Nc = 37813, Oc = 37814, Fc = 37815, kc = 37816, Bc = 37817, zc = 37818, Vc = 37819, Hc = 37820, Gc = 37821, qa = 36492, Wc = 36494, Xc = 36495, Of = 36283, qc = 36284, $c = 36285, Yc = 36286; var Ya = 2300, Zc = 2301, Il = 2302, bd = 2400, Sd = 2401, Md = 2402; var jg = 3200, Kg = 3201; var Qg = 0, t0 = 1, Pi = "", yn = "srgb", ar = "srgb-linear", yo = "linear", ie = "srgb"; var Ls = 7680; var wd = 519, e0 = 512, n0 = 513, i0 = 514, Ff = 515, s0 = 516, r0 = 517, a0 = 518, o0 = 519, Ed = 35044; var Td = "300 es", oi = 2e3, Za = 2001, Oi = class { addEventListener(t, e) { this._listeners === void 0 && (this._listeners = {}); let n = this._listeners; n[t] === void 0 && (n[t] = []), n[t].indexOf(e) === -1 && n[t].push(e) } hasEventListener(t, e) { if (this._listeners === void 0) return !1; let n = this._listeners; return n[t] !== void 0 && n[t].indexOf(e) !== -1 } removeEventListener(t, e) { if (this._listeners === void 0) return; let s = this._listeners[t]; if (s !== void 0) { let r = s.indexOf(e); r !== -1 && s.splice(r, 1) } } dispatchEvent(t) { if (this._listeners === void 0) return; let n = this._listeners[t.type]; if (n !== void 0) { t.target = this; let s = n.slice(0); for (let r = 0, a = s.length; r < a; r++)s[r].call(this, t); t.target = null } } }, He = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"]; var $a = Math.PI / 180, Jc = 180 / Math.PI; function Vr() { let i = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0; return (He[i & 255] + He[i >> 8 & 255] + He[i >> 16 & 255] + He[i >> 24 & 255] + "-" + He[t & 255] + He[t >> 8 & 255] + "-" + He[t >> 16 & 15 | 64] + He[t >> 24 & 255] + "-" + He[e & 63 | 128] + He[e >> 8 & 255] + "-" + He[e >> 16 & 255] + He[e >> 24 & 255] + He[n & 255] + He[n >> 8 & 255] + He[n >> 16 & 255] + He[n >> 24 & 255]).toLowerCase() } function We(i, t, e) { return Math.max(t, Math.min(e, i)) } function l0(i, t) { return (i % t + t) % t } function Ll(i, t, e) { return (1 - e) * i + e * t } function Cr(i, t) { switch (t.constructor) { case Float32Array: return i; case Uint32Array: return i / 4294967295; case Uint16Array: return i / 65535; case Uint8Array: return i / 255; case Int32Array: return Math.max(i / 2147483647, -1); case Int16Array: return Math.max(i / 32767, -1); case Int8Array: return Math.max(i / 127, -1); default: throw new Error("Invalid component type.") } } function nn(i, t) { switch (t.constructor) { case Float32Array: return i; case Uint32Array: return Math.round(i * 4294967295); case Uint16Array: return Math.round(i * 65535); case Uint8Array: return Math.round(i * 255); case Int32Array: return Math.round(i * 2147483647); case Int16Array: return Math.round(i * 32767); case Int8Array: return Math.round(i * 127); default: throw new Error("Invalid component type.") } } var Xt = class i { constructor(t = 0, e = 0) { i.prototype.isVector2 = !0, this.x = t, this.y = e } get width() { return this.x } set width(t) { this.x = t } get height() { return this.y } set height(t) { this.y = t } set(t, e) { return this.x = t, this.y = e, this } setScalar(t) { return this.x = t, this.y = t, this } setX(t) { return this.x = t, this } setY(t) { return this.y = t, this } setComponent(t, e) { switch (t) { case 0: this.x = e; break; case 1: this.y = e; break; default: throw new Error("index is out of range: " + t) }return this } getComponent(t) { switch (t) { case 0: return this.x; case 1: return this.y; default: throw new Error("index is out of range: " + t) } } clone() { return new this.constructor(this.x, this.y) } copy(t) { return this.x = t.x, this.y = t.y, this } add(t) { return this.x += t.x, this.y += t.y, this } addScalar(t) { return this.x += t, this.y += t, this } addVectors(t, e) { return this.x = t.x + e.x, this.y = t.y + e.y, this } addScaledVector(t, e) { return this.x += t.x * e, this.y += t.y * e, this } sub(t) { return this.x -= t.x, this.y -= t.y, this } subScalar(t) { return this.x -= t, this.y -= t, this } subVectors(t, e) { return this.x = t.x - e.x, this.y = t.y - e.y, this } multiply(t) { return this.x *= t.x, this.y *= t.y, this } multiplyScalar(t) { return this.x *= t, this.y *= t, this } divide(t) { return this.x /= t.x, this.y /= t.y, this } divideScalar(t) { return this.multiplyScalar(1 / t) } applyMatrix3(t) { let e = this.x, n = this.y, s = t.elements; return this.x = s[0] * e + s[3] * n + s[6], this.y = s[1] * e + s[4] * n + s[7], this } min(t) { return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this } max(t) { return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this } clamp(t, e) { return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this } clampScalar(t, e) { return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this } clampLength(t, e) { let n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n))) } floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this } ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this } round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this } roundToZero() { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this } negate() { return this.x = -this.x, this.y = -this.y, this } dot(t) { return this.x * t.x + this.y * t.y } cross(t) { return this.x * t.y - this.y * t.x } lengthSq() { return this.x * this.x + this.y * this.y } length() { return Math.sqrt(this.x * this.x + this.y * this.y) } manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) } normalize() { return this.divideScalar(this.length() || 1) } angle() { return Math.atan2(-this.y, -this.x) + Math.PI } angleTo(t) { let e = Math.sqrt(this.lengthSq() * t.lengthSq()); if (e === 0) return Math.PI / 2; let n = this.dot(t) / e; return Math.acos(We(n, -1, 1)) } distanceTo(t) { return Math.sqrt(this.distanceToSquared(t)) } distanceToSquared(t) { let e = this.x - t.x, n = this.y - t.y; return e * e + n * n } manhattanDistanceTo(t) { return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) } setLength(t) { return this.normalize().multiplyScalar(t) } lerp(t, e) { return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this } lerpVectors(t, e, n) { return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this } equals(t) { return t.x === this.x && t.y === this.y } fromArray(t, e = 0) { return this.x = t[e], this.y = t[e + 1], this } toArray(t = [], e = 0) { return t[e] = this.x, t[e + 1] = this.y, t } fromBufferAttribute(t, e) { return this.x = t.getX(e), this.y = t.getY(e), this } rotateAround(t, e) { let n = Math.cos(e), s = Math.sin(e), r = this.x - t.x, a = this.y - t.y; return this.x = r * n - a * s + t.x, this.y = r * s + a * n + t.y, this } random() { return this.x = Math.random(), this.y = Math.random(), this } *[Symbol.iterator]() { yield this.x, yield this.y } }, kt = class i { constructor(t, e, n, s, r, a, o, l, c) { i.prototype.isMatrix3 = !0, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], t !== void 0 && this.set(t, e, n, s, r, a, o, l, c) } set(t, e, n, s, r, a, o, l, c) { let h = this.elements; return h[0] = t, h[1] = s, h[2] = o, h[3] = e, h[4] = r, h[5] = l, h[6] = n, h[7] = a, h[8] = c, this } identity() { return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this } copy(t) { let e = this.elements, n = t.elements; return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this } extractBasis(t, e, n) { return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this } setFromMatrix4(t) { let e = t.elements; return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this } multiply(t) { return this.multiplyMatrices(this, t) } premultiply(t) { return this.multiplyMatrices(t, this) } multiplyMatrices(t, e) { let n = t.elements, s = e.elements, r = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], h = n[4], d = n[7], u = n[2], f = n[5], m = n[8], _ = s[0], g = s[3], p = s[6], y = s[1], x = s[4], v = s[7], A = s[2], T = s[5], E = s[8]; return r[0] = a * _ + o * y + l * A, r[3] = a * g + o * x + l * T, r[6] = a * p + o * v + l * E, r[1] = c * _ + h * y + d * A, r[4] = c * g + h * x + d * T, r[7] = c * p + h * v + d * E, r[2] = u * _ + f * y + m * A, r[5] = u * g + f * x + m * T, r[8] = u * p + f * v + m * E, this } multiplyScalar(t) { let e = this.elements; return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this } determinant() { let t = this.elements, e = t[0], n = t[1], s = t[2], r = t[3], a = t[4], o = t[5], l = t[6], c = t[7], h = t[8]; return e * a * h - e * o * c - n * r * h + n * o * l + s * r * c - s * a * l } invert() { let t = this.elements, e = t[0], n = t[1], s = t[2], r = t[3], a = t[4], o = t[5], l = t[6], c = t[7], h = t[8], d = h * a - o * c, u = o * l - h * r, f = c * r - a * l, m = e * d + n * u + s * f; if (m === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0); let _ = 1 / m; return t[0] = d * _, t[1] = (s * c - h * n) * _, t[2] = (o * n - s * a) * _, t[3] = u * _, t[4] = (h * e - s * l) * _, t[5] = (s * r - o * e) * _, t[6] = f * _, t[7] = (n * l - c * e) * _, t[8] = (a * e - n * r) * _, this } transpose() { let t, e = this.elements; return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this } getNormalMatrix(t) { return this.setFromMatrix4(t).invert().transpose() } transposeIntoArray(t) { let e = this.elements; return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this } setUvTransform(t, e, n, s, r, a, o) { let l = Math.cos(r), c = Math.sin(r); return this.set(n * l, n * c, -n * (l * a + c * o) + a + t, -s * c, s * l, -s * (-c * a + l * o) + o + e, 0, 0, 1), this } scale(t, e) { return this.premultiply(Dl.makeScale(t, e)), this } rotate(t) { return this.premultiply(Dl.makeRotation(-t)), this } translate(t, e) { return this.premultiply(Dl.makeTranslation(t, e)), this } makeTranslation(t, e) { return t.isVector2 ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1) : this.set(1, 0, t, 0, 1, e, 0, 0, 1), this } makeRotation(t) { let e = Math.cos(t), n = Math.sin(t); return this.set(e, -n, 0, n, e, 0, 0, 0, 1), this } makeScale(t, e) { return this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this } equals(t) { let e = this.elements, n = t.elements; for (let s = 0; s < 9; s++)if (e[s] !== n[s]) return !1; return !0 } fromArray(t, e = 0) { for (let n = 0; n < 9; n++)this.elements[n] = t[n + e]; return this } toArray(t = [], e = 0) { let n = this.elements; return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t } clone() { return new this.constructor().fromArray(this.elements) } }, Dl = new kt; function kf(i) { for (let t = i.length - 1; t >= 0; --t)if (i[t] >= 65535) return !0; return !1 } function Ja(i) { return document.createElementNS("http://www.w3.org/1999/xhtml", i) } function c0() { let i = Ja("canvas"); return i.style.display = "block", i } var Ad = {}; function Ur(i) { i in Ad || (Ad[i] = !0, console.warn(i)) } function h0(i, t, e) { return new Promise(function (n, s) { function r() { switch (i.clientWaitSync(t, i.SYNC_FLUSH_COMMANDS_BIT, 0)) { case i.WAIT_FAILED: s(); break; case i.TIMEOUT_EXPIRED: setTimeout(r, e); break; default: n() } } setTimeout(r, e) }) } function u0(i) { let t = i.elements; t[2] = .5 * t[2] + .5 * t[3], t[6] = .5 * t[6] + .5 * t[7], t[10] = .5 * t[10] + .5 * t[11], t[14] = .5 * t[14] + .5 * t[15] } function d0(i) { let t = i.elements; t[11] === -1 ? (t[10] = -t[10] - 1, t[14] = -t[14]) : (t[10] = -t[10], t[14] = -t[14] + 1) } var $t = { enabled: !0, workingColorSpace: ar, spaces: {}, convert: function (i, t, e) { return this.enabled === !1 || t === e || !t || !e || (this.spaces[t].transfer === ie && (i.r = li(i.r), i.g = li(i.g), i.b = li(i.b)), this.spaces[t].primaries !== this.spaces[e].primaries && (i.applyMatrix3(this.spaces[t].toXYZ), i.applyMatrix3(this.spaces[e].fromXYZ)), this.spaces[e].transfer === ie && (i.r = Ys(i.r), i.g = Ys(i.g), i.b = Ys(i.b))), i }, fromWorkingColorSpace: function (i, t) { return this.convert(i, this.workingColorSpace, t) }, toWorkingColorSpace: function (i, t) { return this.convert(i, t, this.workingColorSpace) }, getPrimaries: function (i) { return this.spaces[i].primaries }, getTransfer: function (i) { return i === Pi ? yo : this.spaces[i].transfer }, getLuminanceCoefficients: function (i, t = this.workingColorSpace) { return i.fromArray(this.spaces[t].luminanceCoefficients) }, define: function (i) { Object.assign(this.spaces, i) }, _getMatrix: function (i, t, e) { return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ) }, _getDrawingBufferColorSpace: function (i) { return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace }, _getUnpackColorSpace: function (i = this.workingColorSpace) { return this.spaces[i].workingColorSpaceConfig.unpackColorSpace } }; function li(i) { return i < .04045 ? i * .0773993808 : Math.pow(i * .9478672986 + .0521327014, 2.4) } function Ys(i) { return i < .0031308 ? i * 12.92 : 1.055 * Math.pow(i, .41666) - .055 } var Cd = [.64, .33, .3, .6, .15, .06], Rd = [.2126, .7152, .0722], Pd = [.3127, .329], Id = new kt().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322), Ld = new kt().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715); $t.define({ [ar]: { primaries: Cd, whitePoint: Pd, transfer: yo, toXYZ: Id, fromXYZ: Ld, luminanceCoefficients: Rd, workingColorSpaceConfig: { unpackColorSpace: yn }, outputColorSpaceConfig: { drawingBufferColorSpace: yn } }, [yn]: { primaries: Cd, whitePoint: Pd, transfer: ie, toXYZ: Id, fromXYZ: Ld, luminanceCoefficients: Rd, outputColorSpaceConfig: { drawingBufferColorSpace: yn } } }); var Ds, jc = class { static getDataURL(t) { if (/^data:/i.test(t.src) || typeof HTMLCanvasElement == "undefined") return t.src; let e; if (t instanceof HTMLCanvasElement) e = t; else { Ds === void 0 && (Ds = Ja("canvas")), Ds.width = t.width, Ds.height = t.height; let n = Ds.getContext("2d"); t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), e = Ds } return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", .6)) : e.toDataURL("image/png") } static sRGBToLinear(t) { if (typeof HTMLImageElement != "undefined" && t instanceof HTMLImageElement || typeof HTMLCanvasElement != "undefined" && t instanceof HTMLCanvasElement || typeof ImageBitmap != "undefined" && t instanceof ImageBitmap) { let e = Ja("canvas"); e.width = t.width, e.height = t.height; let n = e.getContext("2d"); n.drawImage(t, 0, 0, t.width, t.height); let s = n.getImageData(0, 0, t.width, t.height), r = s.data; for (let a = 0; a < r.length; a++)r[a] = li(r[a] / 255) * 255; return n.putImageData(s, 0, 0), e } else if (t.data) { let e = t.data.slice(0); for (let n = 0; n < e.length; n++)e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[n] = Math.floor(li(e[n] / 255) * 255) : e[n] = li(e[n]); return { data: e, width: t.width, height: t.height } } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t } }, f0 = 0, ja = class { constructor(t = null) { this.isSource = !0, Object.defineProperty(this, "id", { value: f0++ }), this.uuid = Vr(), this.data = t, this.dataReady = !0, this.version = 0 } set needsUpdate(t) { t === !0 && this.version++ } toJSON(t) { let e = t === void 0 || typeof t == "string"; if (!e && t.images[this.uuid] !== void 0) return t.images[this.uuid]; let n = { uuid: this.uuid, url: "" }, s = this.data; if (s !== null) { let r; if (Array.isArray(s)) { r = []; for (let a = 0, o = s.length; a < o; a++)s[a].isDataTexture ? r.push(Ul(s[a].image)) : r.push(Ul(s[a])) } else r = Ul(s); n.url = r } return e || (t.images[this.uuid] = n), n } }; function Ul(i) { return typeof HTMLImageElement != "undefined" && i instanceof HTMLImageElement || typeof HTMLCanvasElement != "undefined" && i instanceof HTMLCanvasElement || typeof ImageBitmap != "undefined" && i instanceof ImageBitmap ? jc.getDataURL(i) : i.data ? { data: Array.from(i.data), width: i.width, height: i.height, type: i.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {}) } var p0 = 0, xn = class i extends Oi { constructor(t = i.DEFAULT_IMAGE, e = i.DEFAULT_MAPPING, n = cs, s = cs, r = Hn, a = hs, o = Pn, l = ci, c = i.DEFAULT_ANISOTROPY, h = Pi) { super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: p0++ }), this.uuid = Vr(), this.name = "", this.source = new ja(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = s, this.magFilter = r, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new Xt(0, 0), this.repeat = new Xt(1, 1), this.center = new Xt(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new kt, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0 } get image() { return this.source.data } set image(t = null) { this.source.data = t } updateMatrix() { this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y) } clone() { return new this.constructor().copy(this) } copy(t) { return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this } toJSON(t) { let e = t === void 0 || typeof t == "string"; if (!e && t.textures[this.uuid] !== void 0) return t.textures[this.uuid]; let n = { metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(t).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment }; return Object.keys(this.userData).length > 0 && (n.userData = this.userData), e || (t.textures[this.uuid] = n), n } dispose() { this.dispatchEvent({ type: "dispose" }) } transformUv(t) { if (this.mapping !== Tf) return t; if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) { case bc: t.x = t.x - Math.floor(t.x); break; case cs: t.x = t.x < 0 ? 0 : 1; break; case Sc: Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x); break }if (t.y < 0 || t.y > 1) switch (this.wrapT) { case bc: t.y = t.y - Math.floor(t.y); break; case cs: t.y = t.y < 0 ? 0 : 1; break; case Sc: Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y); break }return this.flipY && (t.y = 1 - t.y), t } set needsUpdate(t) { t === !0 && (this.version++, this.source.needsUpdate = !0) } set needsPMREMUpdate(t) { t === !0 && this.pmremVersion++ } }; xn.DEFAULT_IMAGE = null; xn.DEFAULT_MAPPING = Tf; xn.DEFAULT_ANISOTROPY = 1; var we = class i { constructor(t = 0, e = 0, n = 0, s = 1) { i.prototype.isVector4 = !0, this.x = t, this.y = e, this.z = n, this.w = s } get width() { return this.z } set width(t) { this.z = t } get height() { return this.w } set height(t) { this.w = t } set(t, e, n, s) { return this.x = t, this.y = e, this.z = n, this.w = s, this } setScalar(t) { return this.x = t, this.y = t, this.z = t, this.w = t, this } setX(t) { return this.x = t, this } setY(t) { return this.y = t, this } setZ(t) { return this.z = t, this } setW(t) { return this.w = t, this } setComponent(t, e) { switch (t) { case 0: this.x = e; break; case 1: this.y = e; break; case 2: this.z = e; break; case 3: this.w = e; break; default: throw new Error("index is out of range: " + t) }return this } getComponent(t) { switch (t) { case 0: return this.x; case 1: return this.y; case 2: return this.z; case 3: return this.w; default: throw new Error("index is out of range: " + t) } } clone() { return new this.constructor(this.x, this.y, this.z, this.w) } copy(t) { return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this } add(t) { return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this } addScalar(t) { return this.x += t, this.y += t, this.z += t, this.w += t, this } addVectors(t, e) { return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this } addScaledVector(t, e) { return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this } sub(t) { return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this } subScalar(t) { return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this } subVectors(t, e) { return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this } multiply(t) { return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this } multiplyScalar(t) { return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this } applyMatrix4(t) { let e = this.x, n = this.y, s = this.z, r = this.w, a = t.elements; return this.x = a[0] * e + a[4] * n + a[8] * s + a[12] * r, this.y = a[1] * e + a[5] * n + a[9] * s + a[13] * r, this.z = a[2] * e + a[6] * n + a[10] * s + a[14] * r, this.w = a[3] * e + a[7] * n + a[11] * s + a[15] * r, this } divide(t) { return this.x /= t.x, this.y /= t.y, this.z /= t.z, this.w /= t.w, this } divideScalar(t) { return this.multiplyScalar(1 / t) } setAxisAngleFromQuaternion(t) { this.w = 2 * Math.acos(t.w); let e = Math.sqrt(1 - t.w * t.w); return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this } setAxisAngleFromRotationMatrix(t) { let e, n, s, r, l = t.elements, c = l[0], h = l[4], d = l[8], u = l[1], f = l[5], m = l[9], _ = l[2], g = l[6], p = l[10]; if (Math.abs(h - u) < .01 && Math.abs(d - _) < .01 && Math.abs(m - g) < .01) { if (Math.abs(h + u) < .1 && Math.abs(d + _) < .1 && Math.abs(m + g) < .1 && Math.abs(c + f + p - 3) < .1) return this.set(1, 0, 0, 0), this; e = Math.PI; let x = (c + 1) / 2, v = (f + 1) / 2, A = (p + 1) / 2, T = (h + u) / 4, E = (d + _) / 4, C = (m + g) / 4; return x > v && x > A ? x < .01 ? (n = 0, s = .707106781, r = .707106781) : (n = Math.sqrt(x), s = T / n, r = E / n) : v > A ? v < .01 ? (n = .707106781, s = 0, r = .707106781) : (s = Math.sqrt(v), n = T / s, r = C / s) : A < .01 ? (n = .707106781, s = .707106781, r = 0) : (r = Math.sqrt(A), n = E / r, s = C / r), this.set(n, s, r, e), this } let y = Math.sqrt((g - m) * (g - m) + (d - _) * (d - _) + (u - h) * (u - h)); return Math.abs(y) < .001 && (y = 1), this.x = (g - m) / y, this.y = (d - _) / y, this.z = (u - h) / y, this.w = Math.acos((c + f + p - 1) / 2), this } setFromMatrixPosition(t) { let e = t.elements; return this.x = e[12], this.y = e[13], this.z = e[14], this.w = e[15], this } min(t) { return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this } max(t) { return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this } clamp(t, e) { return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this } clampScalar(t, e) { return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this } clampLength(t, e) { let n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n))) } floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this } ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this } round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this } roundToZero() { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this } negate() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this } dot(t) { return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w } lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w } length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w) } manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w) } normalize() { return this.divideScalar(this.length() || 1) } setLength(t) { return this.normalize().multiplyScalar(t) } lerp(t, e) { return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this } lerpVectors(t, e, n) { return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this } equals(t) { return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w } fromArray(t, e = 0) { return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this } toArray(t = [], e = 0) { return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t } fromBufferAttribute(t, e) { return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this } random() { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this } *[Symbol.iterator]() { yield this.x, yield this.y, yield this.z, yield this.w } }, Kc = class extends Oi { constructor(t = 1, e = 1, n = {}) { super(), this.isRenderTarget = !0, this.width = t, this.height = e, this.depth = 1, this.scissor = new we(0, 0, t, e), this.scissorTest = !1, this.viewport = new we(0, 0, t, e); let s = { width: t, height: e, depth: 1 }; n = Object.assign({ generateMipmaps: !1, internalFormat: null, minFilter: Hn, depthBuffer: !0, stencilBuffer: !1, resolveDepthBuffer: !0, resolveStencilBuffer: !0, depthTexture: null, samples: 0, count: 1 }, n); let r = new xn(s, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace); r.flipY = !1, r.generateMipmaps = n.generateMipmaps, r.internalFormat = n.internalFormat, this.textures = []; let a = n.count; for (let o = 0; o < a; o++)this.textures[o] = r.clone(), this.textures[o].isRenderTargetTexture = !0; this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples } get texture() { return this.textures[0] } set texture(t) { this.textures[0] = t } setSize(t, e, n = 1) { if (this.width !== t || this.height !== e || this.depth !== n) { this.width = t, this.height = e, this.depth = n; for (let s = 0, r = this.textures.length; s < r; s++)this.textures[s].image.width = t, this.textures[s].image.height = e, this.textures[s].image.depth = n; this.dispose() } this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e) } clone() { return new this.constructor().copy(this) } copy(t) { this.width = t.width, this.height = t.height, this.depth = t.depth, this.scissor.copy(t.scissor), this.scissorTest = t.scissorTest, this.viewport.copy(t.viewport), this.textures.length = 0; for (let n = 0, s = t.textures.length; n < s; n++)this.textures[n] = t.textures[n].clone(), this.textures[n].isRenderTargetTexture = !0; let e = Object.assign({}, t.texture.image); return this.texture.source = new ja(e), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.resolveDepthBuffer = t.resolveDepthBuffer, this.resolveStencilBuffer = t.resolveStencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this } dispose() { this.dispatchEvent({ type: "dispose" }) } }, hi = class extends Kc { constructor(t = 1, e = 1, n = {}) { super(t, e, n), this.isWebGLRenderTarget = !0 } }, Ka = class extends xn { constructor(t = null, e = 1, n = 1, s = 1) { super(null), this.isDataArrayTexture = !0, this.image = { data: t, width: e, height: n, depth: s }, this.magFilter = In, this.minFilter = In, this.wrapR = cs, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = new Set } addLayerUpdate(t) { this.layerUpdates.add(t) } clearLayerUpdates() { this.layerUpdates.clear() } }; var Qc = class extends xn { constructor(t = null, e = 1, n = 1, s = 1) { super(null), this.isData3DTexture = !0, this.image = { data: t, width: e, height: n, depth: s }, this.magFilter = In, this.minFilter = In, this.wrapR = cs, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1 } }; var Fi = class { constructor(t = 0, e = 0, n = 0, s = 1) { this.isQuaternion = !0, this._x = t, this._y = e, this._z = n, this._w = s } static slerpFlat(t, e, n, s, r, a, o) { let l = n[s + 0], c = n[s + 1], h = n[s + 2], d = n[s + 3], u = r[a + 0], f = r[a + 1], m = r[a + 2], _ = r[a + 3]; if (o === 0) { t[e + 0] = l, t[e + 1] = c, t[e + 2] = h, t[e + 3] = d; return } if (o === 1) { t[e + 0] = u, t[e + 1] = f, t[e + 2] = m, t[e + 3] = _; return } if (d !== _ || l !== u || c !== f || h !== m) { let g = 1 - o, p = l * u + c * f + h * m + d * _, y = p >= 0 ? 1 : -1, x = 1 - p * p; if (x > Number.EPSILON) { let A = Math.sqrt(x), T = Math.atan2(A, p * y); g = Math.sin(g * T) / A, o = Math.sin(o * T) / A } let v = o * y; if (l = l * g + u * v, c = c * g + f * v, h = h * g + m * v, d = d * g + _ * v, g === 1 - o) { let A = 1 / Math.sqrt(l * l + c * c + h * h + d * d); l *= A, c *= A, h *= A, d *= A } } t[e] = l, t[e + 1] = c, t[e + 2] = h, t[e + 3] = d } static multiplyQuaternionsFlat(t, e, n, s, r, a) { let o = n[s], l = n[s + 1], c = n[s + 2], h = n[s + 3], d = r[a], u = r[a + 1], f = r[a + 2], m = r[a + 3]; return t[e] = o * m + h * d + l * f - c * u, t[e + 1] = l * m + h * u + c * d - o * f, t[e + 2] = c * m + h * f + o * u - l * d, t[e + 3] = h * m - o * d - l * u - c * f, t } get x() { return this._x } set x(t) { this._x = t, this._onChangeCallback() } get y() { return this._y } set y(t) { this._y = t, this._onChangeCallback() } get z() { return this._z } set z(t) { this._z = t, this._onChangeCallback() } get w() { return this._w } set w(t) { this._w = t, this._onChangeCallback() } set(t, e, n, s) { return this._x = t, this._y = e, this._z = n, this._w = s, this._onChangeCallback(), this } clone() { return new this.constructor(this._x, this._y, this._z, this._w) } copy(t) { return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this } setFromEuler(t, e = !0) { let n = t._x, s = t._y, r = t._z, a = t._order, o = Math.cos, l = Math.sin, c = o(n / 2), h = o(s / 2), d = o(r / 2), u = l(n / 2), f = l(s / 2), m = l(r / 2); switch (a) { case "XYZ": this._x = u * h * d + c * f * m, this._y = c * f * d - u * h * m, this._z = c * h * m + u * f * d, this._w = c * h * d - u * f * m; break; case "YXZ": this._x = u * h * d + c * f * m, this._y = c * f * d - u * h * m, this._z = c * h * m - u * f * d, this._w = c * h * d + u * f * m; break; case "ZXY": this._x = u * h * d - c * f * m, this._y = c * f * d + u * h * m, this._z = c * h * m + u * f * d, this._w = c * h * d - u * f * m; break; case "ZYX": this._x = u * h * d - c * f * m, this._y = c * f * d + u * h * m, this._z = c * h * m - u * f * d, this._w = c * h * d + u * f * m; break; case "YZX": this._x = u * h * d + c * f * m, this._y = c * f * d + u * h * m, this._z = c * h * m - u * f * d, this._w = c * h * d - u * f * m; break; case "XZY": this._x = u * h * d - c * f * m, this._y = c * f * d - u * h * m, this._z = c * h * m + u * f * d, this._w = c * h * d + u * f * m; break; default: console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a) }return e === !0 && this._onChangeCallback(), this } setFromAxisAngle(t, e) { let n = e / 2, s = Math.sin(n); return this._x = t.x * s, this._y = t.y * s, this._z = t.z * s, this._w = Math.cos(n), this._onChangeCallback(), this } setFromRotationMatrix(t) { let e = t.elements, n = e[0], s = e[4], r = e[8], a = e[1], o = e[5], l = e[9], c = e[2], h = e[6], d = e[10], u = n + o + d; if (u > 0) { let f = .5 / Math.sqrt(u + 1); this._w = .25 / f, this._x = (h - l) * f, this._y = (r - c) * f, this._z = (a - s) * f } else if (n > o && n > d) { let f = 2 * Math.sqrt(1 + n - o - d); this._w = (h - l) / f, this._x = .25 * f, this._y = (s + a) / f, this._z = (r + c) / f } else if (o > d) { let f = 2 * Math.sqrt(1 + o - n - d); this._w = (r - c) / f, this._x = (s + a) / f, this._y = .25 * f, this._z = (l + h) / f } else { let f = 2 * Math.sqrt(1 + d - n - o); this._w = (a - s) / f, this._x = (r + c) / f, this._y = (l + h) / f, this._z = .25 * f } return this._onChangeCallback(), this } setFromUnitVectors(t, e) { let n = t.dot(e) + 1; return n < Number.EPSILON ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize() } angleTo(t) { return 2 * Math.acos(Math.abs(We(this.dot(t), -1, 1))) } rotateTowards(t, e) { let n = this.angleTo(t); if (n === 0) return this; let s = Math.min(1, e / n); return this.slerp(t, s), this } identity() { return this.set(0, 0, 0, 1) } invert() { return this.conjugate() } conjugate() { return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this } dot(t) { return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w } lengthSq() { return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w } length() { return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w) } normalize() { let t = this.length(); return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this } multiply(t) { return this.multiplyQuaternions(this, t) } premultiply(t) { return this.multiplyQuaternions(t, this) } multiplyQuaternions(t, e) { let n = t._x, s = t._y, r = t._z, a = t._w, o = e._x, l = e._y, c = e._z, h = e._w; return this._x = n * h + a * o + s * c - r * l, this._y = s * h + a * l + r * o - n * c, this._z = r * h + a * c + n * l - s * o, this._w = a * h - n * o - s * l - r * c, this._onChangeCallback(), this } slerp(t, e) { if (e === 0) return this; if (e === 1) return this.copy(t); let n = this._x, s = this._y, r = this._z, a = this._w, o = a * t._w + n * t._x + s * t._y + r * t._z; if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1) return this._w = a, this._x = n, this._y = s, this._z = r, this; let l = 1 - o * o; if (l <= Number.EPSILON) { let f = 1 - e; return this._w = f * a + e * this._w, this._x = f * n + e * this._x, this._y = f * s + e * this._y, this._z = f * r + e * this._z, this.normalize(), this } let c = Math.sqrt(l), h = Math.atan2(c, o), d = Math.sin((1 - e) * h) / c, u = Math.sin(e * h) / c; return this._w = a * d + this._w * u, this._x = n * d + this._x * u, this._y = s * d + this._y * u, this._z = r * d + this._z * u, this._onChangeCallback(), this } slerpQuaternions(t, e, n) { return this.copy(t).slerp(e, n) } random() { let t = 2 * Math.PI * Math.random(), e = 2 * Math.PI * Math.random(), n = Math.random(), s = Math.sqrt(1 - n), r = Math.sqrt(n); return this.set(s * Math.sin(t), s * Math.cos(t), r * Math.sin(e), r * Math.cos(e)) } equals(t) { return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w } fromArray(t, e = 0) { return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this } toArray(t = [], e = 0) { return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t } fromBufferAttribute(t, e) { return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this._onChangeCallback(), this } toJSON() { return this.toArray() } _onChange(t) { return this._onChangeCallback = t, this } _onChangeCallback() { } *[Symbol.iterator]() { yield this._x, yield this._y, yield this._z, yield this._w } }, k = class i { constructor(t = 0, e = 0, n = 0) { i.prototype.isVector3 = !0, this.x = t, this.y = e, this.z = n } set(t, e, n) { return n === void 0 && (n = this.z), this.x = t, this.y = e, this.z = n, this } setScalar(t) { return this.x = t, this.y = t, this.z = t, this } setX(t) { return this.x = t, this } setY(t) { return this.y = t, this } setZ(t) { return this.z = t, this } setComponent(t, e) { switch (t) { case 0: this.x = e; break; case 1: this.y = e; break; case 2: this.z = e; break; default: throw new Error("index is out of range: " + t) }return this } getComponent(t) { switch (t) { case 0: return this.x; case 1: return this.y; case 2: return this.z; default: throw new Error("index is out of range: " + t) } } clone() { return new this.constructor(this.x, this.y, this.z) } copy(t) { return this.x = t.x, this.y = t.y, this.z = t.z, this } add(t) { return this.x += t.x, this.y += t.y, this.z += t.z, this } addScalar(t) { return this.x += t, this.y += t, this.z += t, this } addVectors(t, e) { return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this } addScaledVector(t, e) { return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this } sub(t) { return this.x -= t.x, this.y -= t.y, this.z -= t.z, this } subScalar(t) { return this.x -= t, this.y -= t, this.z -= t, this } subVectors(t, e) { return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this } multiply(t) { return this.x *= t.x, this.y *= t.y, this.z *= t.z, this } multiplyScalar(t) { return this.x *= t, this.y *= t, this.z *= t, this } multiplyVectors(t, e) { return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this } applyEuler(t) { return this.applyQuaternion(Dd.setFromEuler(t)) } applyAxisAngle(t, e) { return this.applyQuaternion(Dd.setFromAxisAngle(t, e)) } applyMatrix3(t) { let e = this.x, n = this.y, s = this.z, r = t.elements; return this.x = r[0] * e + r[3] * n + r[6] * s, this.y = r[1] * e + r[4] * n + r[7] * s, this.z = r[2] * e + r[5] * n + r[8] * s, this } applyNormalMatrix(t) { return this.applyMatrix3(t).normalize() } applyMatrix4(t) { let e = this.x, n = this.y, s = this.z, r = t.elements, a = 1 / (r[3] * e + r[7] * n + r[11] * s + r[15]); return this.x = (r[0] * e + r[4] * n + r[8] * s + r[12]) * a, this.y = (r[1] * e + r[5] * n + r[9] * s + r[13]) * a, this.z = (r[2] * e + r[6] * n + r[10] * s + r[14]) * a, this } applyQuaternion(t) { let e = this.x, n = this.y, s = this.z, r = t.x, a = t.y, o = t.z, l = t.w, c = 2 * (a * s - o * n), h = 2 * (o * e - r * s), d = 2 * (r * n - a * e); return this.x = e + l * c + a * d - o * h, this.y = n + l * h + o * c - r * d, this.z = s + l * d + r * h - a * c, this } project(t) { return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix) } unproject(t) { return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld) } transformDirection(t) { let e = this.x, n = this.y, s = this.z, r = t.elements; return this.x = r[0] * e + r[4] * n + r[8] * s, this.y = r[1] * e + r[5] * n + r[9] * s, this.z = r[2] * e + r[6] * n + r[10] * s, this.normalize() } divide(t) { return this.x /= t.x, this.y /= t.y, this.z /= t.z, this } divideScalar(t) { return this.multiplyScalar(1 / t) } min(t) { return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this } max(t) { return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this } clamp(t, e) { return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this } clampScalar(t, e) { return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this } clampLength(t, e) { let n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n))) } floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this } ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this } round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this } roundToZero() { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this } negate() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this } dot(t) { return this.x * t.x + this.y * t.y + this.z * t.z } lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z } length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z) } manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) } normalize() { return this.divideScalar(this.length() || 1) } setLength(t) { return this.normalize().multiplyScalar(t) } lerp(t, e) { return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this } lerpVectors(t, e, n) { return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this } cross(t) { return this.crossVectors(this, t) } crossVectors(t, e) { let n = t.x, s = t.y, r = t.z, a = e.x, o = e.y, l = e.z; return this.x = s * l - r * o, this.y = r * a - n * l, this.z = n * o - s * a, this } projectOnVector(t) { let e = t.lengthSq(); if (e === 0) return this.set(0, 0, 0); let n = t.dot(this) / e; return this.copy(t).multiplyScalar(n) } projectOnPlane(t) { return Nl.copy(this).projectOnVector(t), this.sub(Nl) } reflect(t) { return this.sub(Nl.copy(t).multiplyScalar(2 * this.dot(t))) } angleTo(t) { let e = Math.sqrt(this.lengthSq() * t.lengthSq()); if (e === 0) return Math.PI / 2; let n = this.dot(t) / e; return Math.acos(We(n, -1, 1)) } distanceTo(t) { return Math.sqrt(this.distanceToSquared(t)) } distanceToSquared(t) { let e = this.x - t.x, n = this.y - t.y, s = this.z - t.z; return e * e + n * n + s * s } manhattanDistanceTo(t) { return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z) } setFromSpherical(t) { return this.setFromSphericalCoords(t.radius, t.phi, t.theta) } setFromSphericalCoords(t, e, n) { let s = Math.sin(e) * t; return this.x = s * Math.sin(n), this.y = Math.cos(e) * t, this.z = s * Math.cos(n), this } setFromCylindrical(t) { return this.setFromCylindricalCoords(t.radius, t.theta, t.y) } setFromCylindricalCoords(t, e, n) { return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this } setFromMatrixPosition(t) { let e = t.elements; return this.x = e[12], this.y = e[13], this.z = e[14], this } setFromMatrixScale(t) { let e = this.setFromMatrixColumn(t, 0).length(), n = this.setFromMatrixColumn(t, 1).length(), s = this.setFromMatrixColumn(t, 2).length(); return this.x = e, this.y = n, this.z = s, this } setFromMatrixColumn(t, e) { return this.fromArray(t.elements, e * 4) } setFromMatrix3Column(t, e) { return this.fromArray(t.elements, e * 3) } setFromEuler(t) { return this.x = t._x, this.y = t._y, this.z = t._z, this } setFromColor(t) { return this.x = t.r, this.y = t.g, this.z = t.b, this } equals(t) { return t.x === this.x && t.y === this.y && t.z === this.z } fromArray(t, e = 0) { return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this } toArray(t = [], e = 0) { return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t } fromBufferAttribute(t, e) { return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this } random() { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this } randomDirection() { let t = Math.random() * Math.PI * 2, e = Math.random() * 2 - 1, n = Math.sqrt(1 - e * e); return this.x = n * Math.cos(t), this.y = e, this.z = n * Math.sin(t), this } *[Symbol.iterator]() { yield this.x, yield this.y, yield this.z } }, Nl = new k, Dd = new Fi, ds = class { constructor(t = new k(1 / 0, 1 / 0, 1 / 0), e = new k(-1 / 0, -1 / 0, -1 / 0)) { this.isBox3 = !0, this.min = t, this.max = e } set(t, e) { return this.min.copy(t), this.max.copy(e), this } setFromArray(t) { this.makeEmpty(); for (let e = 0, n = t.length; e < n; e += 3)this.expandByPoint(Tn.fromArray(t, e)); return this } setFromBufferAttribute(t) { this.makeEmpty(); for (let e = 0, n = t.count; e < n; e++)this.expandByPoint(Tn.fromBufferAttribute(t, e)); return this } setFromPoints(t) { this.makeEmpty(); for (let e = 0, n = t.length; e < n; e++)this.expandByPoint(t[e]); return this } setFromCenterAndSize(t, e) { let n = Tn.copy(e).multiplyScalar(.5); return this.min.copy(t).sub(n), this.max.copy(t).add(n), this } setFromObject(t, e = !1) { return this.makeEmpty(), this.expandByObject(t, e) } clone() { return new this.constructor().copy(this) } copy(t) { return this.min.copy(t.min), this.max.copy(t.max), this } makeEmpty() { return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this } isEmpty() { return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z } getCenter(t) { return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5) } getSize(t) { return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min) } expandByPoint(t) { return this.min.min(t), this.max.max(t), this } expandByVector(t) { return this.min.sub(t), this.max.add(t), this } expandByScalar(t) { return this.min.addScalar(-t), this.max.addScalar(t), this } expandByObject(t, e = !1) { t.updateWorldMatrix(!1, !1); let n = t.geometry; if (n !== void 0) { let r = n.getAttribute("position"); if (e === !0 && r !== void 0 && t.isInstancedMesh !== !0) for (let a = 0, o = r.count; a < o; a++)t.isMesh === !0 ? t.getVertexPosition(a, Tn) : Tn.fromBufferAttribute(r, a), Tn.applyMatrix4(t.matrixWorld), this.expandByPoint(Tn); else t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), fa.copy(t.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), fa.copy(n.boundingBox)), fa.applyMatrix4(t.matrixWorld), this.union(fa) } let s = t.children; for (let r = 0, a = s.length; r < a; r++)this.expandByObject(s[r], e); return this } containsPoint(t) { return t.x >= this.min.x && t.x <= this.max.x && t.y >= this.min.y && t.y <= this.max.y && t.z >= this.min.z && t.z <= this.max.z } containsBox(t) { return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z } getParameter(t, e) { return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z)) } intersectsBox(t) { return t.max.x >= this.min.x && t.min.x <= this.max.x && t.max.y >= this.min.y && t.min.y <= this.max.y && t.max.z >= this.min.z && t.min.z <= this.max.z } intersectsSphere(t) { return this.clampPoint(t.center, Tn), Tn.distanceToSquared(t.center) <= t.radius * t.radius } intersectsPlane(t) { let e, n; return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant } intersectsTriangle(t) { if (this.isEmpty()) return !1; this.getCenter(Rr), pa.subVectors(this.max, Rr), Us.subVectors(t.a, Rr), Ns.subVectors(t.b, Rr), Os.subVectors(t.c, Rr), wi.subVectors(Ns, Us), Ei.subVectors(Os, Ns), ts.subVectors(Us, Os); let e = [0, -wi.z, wi.y, 0, -Ei.z, Ei.y, 0, -ts.z, ts.y, wi.z, 0, -wi.x, Ei.z, 0, -Ei.x, ts.z, 0, -ts.x, -wi.y, wi.x, 0, -Ei.y, Ei.x, 0, -ts.y, ts.x, 0]; return !Ol(e, Us, Ns, Os, pa) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Ol(e, Us, Ns, Os, pa)) ? !1 : (ma.crossVectors(wi, Ei), e = [ma.x, ma.y, ma.z], Ol(e, Us, Ns, Os, pa)) } clampPoint(t, e) { return e.copy(t).clamp(this.min, this.max) } distanceToPoint(t) { return this.clampPoint(t, Tn).distanceTo(t) } getBoundingSphere(t) { return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(Tn).length() * .5), t } intersect(t) { return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this } union(t) { return this.min.min(t.min), this.max.max(t.max), this } applyMatrix4(t) { return this.isEmpty() ? this : (Qn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), Qn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), Qn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), Qn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), Qn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), Qn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), Qn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), Qn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(Qn), this) } translate(t) { return this.min.add(t), this.max.add(t), this } equals(t) { return t.min.equals(this.min) && t.max.equals(this.max) } }, Qn = [new k, new k, new k, new k, new k, new k, new k, new k], Tn = new k, fa = new ds, Us = new k, Ns = new k, Os = new k, wi = new k, Ei = new k, ts = new k, Rr = new k, pa = new k, ma = new k, es = new k; function Ol(i, t, e, n, s) { for (let r = 0, a = i.length - 3; r <= a; r += 3) { es.fromArray(i, r); let o = s.x * Math.abs(es.x) + s.y * Math.abs(es.y) + s.z * Math.abs(es.z), l = t.dot(es), c = e.dot(es), h = n.dot(es); if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > o) return !1 } return !0 } var m0 = new ds, Pr = new k, Fl = new k, fs = class { constructor(t = new k, e = -1) { this.isSphere = !0, this.center = t, this.radius = e } set(t, e) { return this.center.copy(t), this.radius = e, this } setFromPoints(t, e) { let n = this.center; e !== void 0 ? n.copy(e) : m0.setFromPoints(t).getCenter(n); let s = 0; for (let r = 0, a = t.length; r < a; r++)s = Math.max(s, n.distanceToSquared(t[r])); return this.radius = Math.sqrt(s), this } copy(t) { return this.center.copy(t.center), this.radius = t.radius, this } isEmpty() { return this.radius < 0 } makeEmpty() { return this.center.set(0, 0, 0), this.radius = -1, this } containsPoint(t) { return t.distanceToSquared(this.center) <= this.radius * this.radius } distanceToPoint(t) { return t.distanceTo(this.center) - this.radius } intersectsSphere(t) { let e = this.radius + t.radius; return t.center.distanceToSquared(this.center) <= e * e } intersectsBox(t) { return t.intersectsSphere(this) } intersectsPlane(t) { return Math.abs(t.distanceToPoint(this.center)) <= this.radius } clampPoint(t, e) { let n = this.center.distanceToSquared(t); return e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e } getBoundingBox(t) { return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t) } applyMatrix4(t) { return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this } translate(t) { return this.center.add(t), this } expandByPoint(t) { if (this.isEmpty()) return this.center.copy(t), this.radius = 0, this; Pr.subVectors(t, this.center); let e = Pr.lengthSq(); if (e > this.radius * this.radius) { let n = Math.sqrt(e), s = (n - this.radius) * .5; this.center.addScaledVector(Pr, s / n), this.radius += s } return this } union(t) { return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === !0 ? this.radius = Math.max(this.radius, t.radius) : (Fl.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(Pr.copy(t.center).add(Fl)), this.expandByPoint(Pr.copy(t.center).sub(Fl))), this) } equals(t) { return t.center.equals(this.center) && t.radius === this.radius } clone() { return new this.constructor().copy(this) } }, ti = new k, kl = new k, ga = new k, Ti = new k, Bl = new k, _a = new k, zl = new k, kr = class { constructor(t = new k, e = new k(0, 0, -1)) { this.origin = t, this.direction = e } set(t, e) { return this.origin.copy(t), this.direction.copy(e), this } copy(t) { return this.origin.copy(t.origin), this.direction.copy(t.direction), this } at(t, e) { return e.copy(this.origin).addScaledVector(this.direction, t) } lookAt(t) { return this.direction.copy(t).sub(this.origin).normalize(), this } recast(t) { return this.origin.copy(this.at(t, ti)), this } closestPointToPoint(t, e) { e.subVectors(t, this.origin); let n = e.dot(this.direction); return n < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, n) } distanceToPoint(t) { return Math.sqrt(this.distanceSqToPoint(t)) } distanceSqToPoint(t) { let e = ti.subVectors(t, this.origin).dot(this.direction); return e < 0 ? this.origin.distanceToSquared(t) : (ti.copy(this.origin).addScaledVector(this.direction, e), ti.distanceToSquared(t)) } distanceSqToSegment(t, e, n, s) { kl.copy(t).add(e).multiplyScalar(.5), ga.copy(e).sub(t).normalize(), Ti.copy(this.origin).sub(kl); let r = t.distanceTo(e) * .5, a = -this.direction.dot(ga), o = Ti.dot(this.direction), l = -Ti.dot(ga), c = Ti.lengthSq(), h = Math.abs(1 - a * a), d, u, f, m; if (h > 0) if (d = a * l - o, u = a * o - l, m = r * h, d >= 0) if (u >= -m) if (u <= m) { let _ = 1 / h; d *= _, u *= _, f = d * (d + a * u + 2 * o) + u * (a * d + u + 2 * l) + c } else u = r, d = Math.max(0, -(a * u + o)), f = -d * d + u * (u + 2 * l) + c; else u = -r, d = Math.max(0, -(a * u + o)), f = -d * d + u * (u + 2 * l) + c; else u <= -m ? (d = Math.max(0, -(-a * r + o)), u = d > 0 ? -r : Math.min(Math.max(-r, -l), r), f = -d * d + u * (u + 2 * l) + c) : u <= m ? (d = 0, u = Math.min(Math.max(-r, -l), r), f = u * (u + 2 * l) + c) : (d = Math.max(0, -(a * r + o)), u = d > 0 ? r : Math.min(Math.max(-r, -l), r), f = -d * d + u * (u + 2 * l) + c); else u = a > 0 ? -r : r, d = Math.max(0, -(a * u + o)), f = -d * d + u * (u + 2 * l) + c; return n && n.copy(this.origin).addScaledVector(this.direction, d), s && s.copy(kl).addScaledVector(ga, u), f } intersectSphere(t, e) { ti.subVectors(t.center, this.origin); let n = ti.dot(this.direction), s = ti.dot(ti) - n * n, r = t.radius * t.radius; if (s > r) return null; let a = Math.sqrt(r - s), o = n - a, l = n + a; return l < 0 ? null : o < 0 ? this.at(l, e) : this.at(o, e) } intersectsSphere(t) { return this.distanceSqToPoint(t.center) <= t.radius * t.radius } distanceToPlane(t) { let e = t.normal.dot(this.direction); if (e === 0) return t.distanceToPoint(this.origin) === 0 ? 0 : null; let n = -(this.origin.dot(t.normal) + t.constant) / e; return n >= 0 ? n : null } intersectPlane(t, e) { let n = this.distanceToPlane(t); return n === null ? null : this.at(n, e) } intersectsPlane(t) { let e = t.distanceToPoint(this.origin); return e === 0 || t.normal.dot(this.direction) * e < 0 } intersectBox(t, e) { let n, s, r, a, o, l, c = 1 / this.direction.x, h = 1 / this.direction.y, d = 1 / this.direction.z, u = this.origin; return c >= 0 ? (n = (t.min.x - u.x) * c, s = (t.max.x - u.x) * c) : (n = (t.max.x - u.x) * c, s = (t.min.x - u.x) * c), h >= 0 ? (r = (t.min.y - u.y) * h, a = (t.max.y - u.y) * h) : (r = (t.max.y - u.y) * h, a = (t.min.y - u.y) * h), n > a || r > s || ((r > n || isNaN(n)) && (n = r), (a < s || isNaN(s)) && (s = a), d >= 0 ? (o = (t.min.z - u.z) * d, l = (t.max.z - u.z) * d) : (o = (t.max.z - u.z) * d, l = (t.min.z - u.z) * d), n > l || o > s) || ((o > n || n !== n) && (n = o), (l < s || s !== s) && (s = l), s < 0) ? null : this.at(n >= 0 ? n : s, e) } intersectsBox(t) { return this.intersectBox(t, ti) !== null } intersectTriangle(t, e, n, s, r) { Bl.subVectors(e, t), _a.subVectors(n, t), zl.crossVectors(Bl, _a); let a = this.direction.dot(zl), o; if (a > 0) { if (s) return null; o = 1 } else if (a < 0) o = -1, a = -a; else return null; Ti.subVectors(this.origin, t); let l = o * this.direction.dot(_a.crossVectors(Ti, _a)); if (l < 0) return null; let c = o * this.direction.dot(Bl.cross(Ti)); if (c < 0 || l + c > a) return null; let h = -o * Ti.dot(zl); return h < 0 ? null : this.at(h / a, r) } applyMatrix4(t) { return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this } equals(t) { return t.origin.equals(this.origin) && t.direction.equals(this.direction) } clone() { return new this.constructor().copy(this) } }, be = class i { constructor(t, e, n, s, r, a, o, l, c, h, d, u, f, m, _, g) { i.prototype.isMatrix4 = !0, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], t !== void 0 && this.set(t, e, n, s, r, a, o, l, c, h, d, u, f, m, _, g) } set(t, e, n, s, r, a, o, l, c, h, d, u, f, m, _, g) { let p = this.elements; return p[0] = t, p[4] = e, p[8] = n, p[12] = s, p[1] = r, p[5] = a, p[9] = o, p[13] = l, p[2] = c, p[6] = h, p[10] = d, p[14] = u, p[3] = f, p[7] = m, p[11] = _, p[15] = g, this } identity() { return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this } clone() { return new i().fromArray(this.elements) } copy(t) { let e = this.elements, n = t.elements; return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this } copyPosition(t) { let e = this.elements, n = t.elements; return e[12] = n[12], e[13] = n[13], e[14] = n[14], this } setFromMatrix3(t) { let e = t.elements; return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this } extractBasis(t, e, n) { return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this } makeBasis(t, e, n) { return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this } extractRotation(t) { let e = this.elements, n = t.elements, s = 1 / Fs.setFromMatrixColumn(t, 0).length(), r = 1 / Fs.setFromMatrixColumn(t, 1).length(), a = 1 / Fs.setFromMatrixColumn(t, 2).length(); return e[0] = n[0] * s, e[1] = n[1] * s, e[2] = n[2] * s, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * a, e[9] = n[9] * a, e[10] = n[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this } makeRotationFromEuler(t) { let e = this.elements, n = t.x, s = t.y, r = t.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(s), c = Math.sin(s), h = Math.cos(r), d = Math.sin(r); if (t.order === "XYZ") { let u = a * h, f = a * d, m = o * h, _ = o * d; e[0] = l * h, e[4] = -l * d, e[8] = c, e[1] = f + m * c, e[5] = u - _ * c, e[9] = -o * l, e[2] = _ - u * c, e[6] = m + f * c, e[10] = a * l } else if (t.order === "YXZ") { let u = l * h, f = l * d, m = c * h, _ = c * d; e[0] = u + _ * o, e[4] = m * o - f, e[8] = a * c, e[1] = a * d, e[5] = a * h, e[9] = -o, e[2] = f * o - m, e[6] = _ + u * o, e[10] = a * l } else if (t.order === "ZXY") { let u = l * h, f = l * d, m = c * h, _ = c * d; e[0] = u - _ * o, e[4] = -a * d, e[8] = m + f * o, e[1] = f + m * o, e[5] = a * h, e[9] = _ - u * o, e[2] = -a * c, e[6] = o, e[10] = a * l } else if (t.order === "ZYX") { let u = a * h, f = a * d, m = o * h, _ = o * d; e[0] = l * h, e[4] = m * c - f, e[8] = u * c + _, e[1] = l * d, e[5] = _ * c + u, e[9] = f * c - m, e[2] = -c, e[6] = o * l, e[10] = a * l } else if (t.order === "YZX") { let u = a * l, f = a * c, m = o * l, _ = o * c; e[0] = l * h, e[4] = _ - u * d, e[8] = m * d + f, e[1] = d, e[5] = a * h, e[9] = -o * h, e[2] = -c * h, e[6] = f * d + m, e[10] = u - _ * d } else if (t.order === "XZY") { let u = a * l, f = a * c, m = o * l, _ = o * c; e[0] = l * h, e[4] = -d, e[8] = c * h, e[1] = u * d + _, e[5] = a * h, e[9] = f * d - m, e[2] = m * d - f, e[6] = o * h, e[10] = _ * d + u } return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this } makeRotationFromQuaternion(t) { return this.compose(g0, t, _0) } lookAt(t, e, n) { let s = this.elements; return un.subVectors(t, e), un.lengthSq() === 0 && (un.z = 1), un.normalize(), Ai.crossVectors(n, un), Ai.lengthSq() === 0 && (Math.abs(n.z) === 1 ? un.x += 1e-4 : un.z += 1e-4, un.normalize(), Ai.crossVectors(n, un)), Ai.normalize(), va.crossVectors(un, Ai), s[0] = Ai.x, s[4] = va.x, s[8] = un.x, s[1] = Ai.y, s[5] = va.y, s[9] = un.y, s[2] = Ai.z, s[6] = va.z, s[10] = un.z, this } multiply(t) { return this.multiplyMatrices(this, t) } premultiply(t) { return this.multiplyMatrices(t, this) } multiplyMatrices(t, e) { let n = t.elements, s = e.elements, r = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], h = n[1], d = n[5], u = n[9], f = n[13], m = n[2], _ = n[6], g = n[10], p = n[14], y = n[3], x = n[7], v = n[11], A = n[15], T = s[0], E = s[4], C = s[8], b = s[12], S = s[1], P = s[5], H = s[9], z = s[13], W = s[2], U = s[6], I = s[10], G = s[14], D = s[3], tt = s[7], j = s[11], dt = s[15]; return r[0] = a * T + o * S + l * W + c * D, r[4] = a * E + o * P + l * U + c * tt, r[8] = a * C + o * H + l * I + c * j, r[12] = a * b + o * z + l * G + c * dt, r[1] = h * T + d * S + u * W + f * D, r[5] = h * E + d * P + u * U + f * tt, r[9] = h * C + d * H + u * I + f * j, r[13] = h * b + d * z + u * G + f * dt, r[2] = m * T + _ * S + g * W + p * D, r[6] = m * E + _ * P + g * U + p * tt, r[10] = m * C + _ * H + g * I + p * j, r[14] = m * b + _ * z + g * G + p * dt, r[3] = y * T + x * S + v * W + A * D, r[7] = y * E + x * P + v * U + A * tt, r[11] = y * C + x * H + v * I + A * j, r[15] = y * b + x * z + v * G + A * dt, this } multiplyScalar(t) { let e = this.elements; return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this } determinant() { let t = this.elements, e = t[0], n = t[4], s = t[8], r = t[12], a = t[1], o = t[5], l = t[9], c = t[13], h = t[2], d = t[6], u = t[10], f = t[14], m = t[3], _ = t[7], g = t[11], p = t[15]; return m * (+r * l * d - s * c * d - r * o * u + n * c * u + s * o * f - n * l * f) + _ * (+e * l * f - e * c * u + r * a * u - s * a * f + s * c * h - r * l * h) + g * (+e * c * d - e * o * f - r * a * d + n * a * f + r * o * h - n * c * h) + p * (-s * o * h - e * l * d + e * o * u + s * a * d - n * a * u + n * l * h) } transpose() { let t = this.elements, e; return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this } setPosition(t, e, n) { let s = this.elements; return t.isVector3 ? (s[12] = t.x, s[13] = t.y, s[14] = t.z) : (s[12] = t, s[13] = e, s[14] = n), this } invert() { let t = this.elements, e = t[0], n = t[1], s = t[2], r = t[3], a = t[4], o = t[5], l = t[6], c = t[7], h = t[8], d = t[9], u = t[10], f = t[11], m = t[12], _ = t[13], g = t[14], p = t[15], y = d * g * c - _ * u * c + _ * l * f - o * g * f - d * l * p + o * u * p, x = m * u * c - h * g * c - m * l * f + a * g * f + h * l * p - a * u * p, v = h * _ * c - m * d * c + m * o * f - a * _ * f - h * o * p + a * d * p, A = m * d * l - h * _ * l - m * o * u + a * _ * u + h * o * g - a * d * g, T = e * y + n * x + s * v + r * A; if (T === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0); let E = 1 / T; return t[0] = y * E, t[1] = (_ * u * r - d * g * r - _ * s * f + n * g * f + d * s * p - n * u * p) * E, t[2] = (o * g * r - _ * l * r + _ * s * c - n * g * c - o * s * p + n * l * p) * E, t[3] = (d * l * r - o * u * r - d * s * c + n * u * c + o * s * f - n * l * f) * E, t[4] = x * E, t[5] = (h * g * r - m * u * r + m * s * f - e * g * f - h * s * p + e * u * p) * E, t[6] = (m * l * r - a * g * r - m * s * c + e * g * c + a * s * p - e * l * p) * E, t[7] = (a * u * r - h * l * r + h * s * c - e * u * c - a * s * f + e * l * f) * E, t[8] = v * E, t[9] = (m * d * r - h * _ * r - m * n * f + e * _ * f + h * n * p - e * d * p) * E, t[10] = (a * _ * r - m * o * r + m * n * c - e * _ * c - a * n * p + e * o * p) * E, t[11] = (h * o * r - a * d * r - h * n * c + e * d * c + a * n * f - e * o * f) * E, t[12] = A * E, t[13] = (h * _ * s - m * d * s + m * n * u - e * _ * u - h * n * g + e * d * g) * E, t[14] = (m * o * s - a * _ * s - m * n * l + e * _ * l + a * n * g - e * o * g) * E, t[15] = (a * d * s - h * o * s + h * n * l - e * d * l - a * n * u + e * o * u) * E, this } scale(t) { let e = this.elements, n = t.x, s = t.y, r = t.z; return e[0] *= n, e[4] *= s, e[8] *= r, e[1] *= n, e[5] *= s, e[9] *= r, e[2] *= n, e[6] *= s, e[10] *= r, e[3] *= n, e[7] *= s, e[11] *= r, this } getMaxScaleOnAxis() { let t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], s = t[8] * t[8] + t[9] * t[9] + t[10] * t[10]; return Math.sqrt(Math.max(e, n, s)) } makeTranslation(t, e, n) { return t.isVector3 ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1) : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this } makeRotationX(t) { let e = Math.cos(t), n = Math.sin(t); return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this } makeRotationY(t) { let e = Math.cos(t), n = Math.sin(t); return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this } makeRotationZ(t) { let e = Math.cos(t), n = Math.sin(t); return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this } makeRotationAxis(t, e) { let n = Math.cos(e), s = Math.sin(e), r = 1 - n, a = t.x, o = t.y, l = t.z, c = r * a, h = r * o; return this.set(c * a + n, c * o - s * l, c * l + s * o, 0, c * o + s * l, h * o + n, h * l - s * a, 0, c * l - s * o, h * l + s * a, r * l * l + n, 0, 0, 0, 0, 1), this } makeScale(t, e, n) { return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this } makeShear(t, e, n, s, r, a) { return this.set(1, n, r, 0, t, 1, a, 0, e, s, 1, 0, 0, 0, 0, 1), this } compose(t, e, n) { let s = this.elements, r = e._x, a = e._y, o = e._z, l = e._w, c = r + r, h = a + a, d = o + o, u = r * c, f = r * h, m = r * d, _ = a * h, g = a * d, p = o * d, y = l * c, x = l * h, v = l * d, A = n.x, T = n.y, E = n.z; return s[0] = (1 - (_ + p)) * A, s[1] = (f + v) * A, s[2] = (m - x) * A, s[3] = 0, s[4] = (f - v) * T, s[5] = (1 - (u + p)) * T, s[6] = (g + y) * T, s[7] = 0, s[8] = (m + x) * E, s[9] = (g - y) * E, s[10] = (1 - (u + _)) * E, s[11] = 0, s[12] = t.x, s[13] = t.y, s[14] = t.z, s[15] = 1, this } decompose(t, e, n) { let s = this.elements, r = Fs.set(s[0], s[1], s[2]).length(), a = Fs.set(s[4], s[5], s[6]).length(), o = Fs.set(s[8], s[9], s[10]).length(); this.determinant() < 0 && (r = -r), t.x = s[12], t.y = s[13], t.z = s[14], An.copy(this); let c = 1 / r, h = 1 / a, d = 1 / o; return An.elements[0] *= c, An.elements[1] *= c, An.elements[2] *= c, An.elements[4] *= h, An.elements[5] *= h, An.elements[6] *= h, An.elements[8] *= d, An.elements[9] *= d, An.elements[10] *= d, e.setFromRotationMatrix(An), n.x = r, n.y = a, n.z = o, this } makePerspective(t, e, n, s, r, a, o = oi) { let l = this.elements, c = 2 * r / (e - t), h = 2 * r / (n - s), d = (e + t) / (e - t), u = (n + s) / (n - s), f, m; if (o === oi) f = -(a + r) / (a - r), m = -2 * a * r / (a - r); else if (o === Za) f = -a / (a - r), m = -a * r / (a - r); else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o); return l[0] = c, l[4] = 0, l[8] = d, l[12] = 0, l[1] = 0, l[5] = h, l[9] = u, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = f, l[14] = m, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this } makeOrthographic(t, e, n, s, r, a, o = oi) { let l = this.elements, c = 1 / (e - t), h = 1 / (n - s), d = 1 / (a - r), u = (e + t) * c, f = (n + s) * h, m, _; if (o === oi) m = (a + r) * d, _ = -2 * d; else if (o === Za) m = r * d, _ = -1 * d; else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o); return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -u, l[1] = 0, l[5] = 2 * h, l[9] = 0, l[13] = -f, l[2] = 0, l[6] = 0, l[10] = _, l[14] = -m, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this } equals(t) { let e = this.elements, n = t.elements; for (let s = 0; s < 16; s++)if (e[s] !== n[s]) return !1; return !0 } fromArray(t, e = 0) { for (let n = 0; n < 16; n++)this.elements[n] = t[n + e]; return this } toArray(t = [], e = 0) { let n = this.elements; return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t } }, Fs = new k, An = new be, g0 = new k(0, 0, 0), _0 = new k(1, 1, 1), Ai = new k, va = new k, un = new k, Ud = new be, Nd = new Fi, ui = class i { constructor(t = 0, e = 0, n = 0, s = i.DEFAULT_ORDER) { this.isEuler = !0, this._x = t, this._y = e, this._z = n, this._order = s } get x() { return this._x } set x(t) { this._x = t, this._onChangeCallback() } get y() { return this._y } set y(t) { this._y = t, this._onChangeCallback() } get z() { return this._z } set z(t) { this._z = t, this._onChangeCallback() } get order() { return this._order } set order(t) { this._order = t, this._onChangeCallback() } set(t, e, n, s = this._order) { return this._x = t, this._y = e, this._z = n, this._order = s, this._onChangeCallback(), this } clone() { return new this.constructor(this._x, this._y, this._z, this._order) } copy(t) { return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this } setFromRotationMatrix(t, e = this._order, n = !0) { let s = t.elements, r = s[0], a = s[4], o = s[8], l = s[1], c = s[5], h = s[9], d = s[2], u = s[6], f = s[10]; switch (e) { case "XYZ": this._y = Math.asin(We(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-h, f), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(u, c), this._z = 0); break; case "YXZ": this._x = Math.asin(-We(h, -1, 1)), Math.abs(h) < .9999999 ? (this._y = Math.atan2(o, f), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-d, r), this._z = 0); break; case "ZXY": this._x = Math.asin(We(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(-d, f), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, r)); break; case "ZYX": this._y = Math.asin(-We(d, -1, 1)), Math.abs(d) < .9999999 ? (this._x = Math.atan2(u, f), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-a, c)); break; case "YZX": this._z = Math.asin(We(l, -1, 1)), Math.abs(l) < .9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-d, r)) : (this._x = 0, this._y = Math.atan2(o, f)); break; case "XZY": this._z = Math.asin(-We(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(u, c), this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-h, f), this._y = 0); break; default: console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e) }return this._order = e, n === !0 && this._onChangeCallback(), this } setFromQuaternion(t, e, n) { return Ud.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Ud, e, n) } setFromVector3(t, e = this._order) { return this.set(t.x, t.y, t.z, e) } reorder(t) { return Nd.setFromEuler(this), this.setFromQuaternion(Nd, t) } equals(t) { return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order } fromArray(t) { return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this } toArray(t = [], e = 0) { return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t } _onChange(t) { return this._onChangeCallback = t, this } _onChangeCallback() { } *[Symbol.iterator]() { yield this._x, yield this._y, yield this._z, yield this._order } }; ui.DEFAULT_ORDER = "XYZ"; var Qa = class { constructor() { this.mask = 1 } set(t) { this.mask = (1 << t | 0) >>> 0 } enable(t) { this.mask |= 1 << t | 0 } enableAll() { this.mask = -1 } toggle(t) { this.mask ^= 1 << t | 0 } disable(t) { this.mask &= ~(1 << t | 0) } disableAll() { this.mask = 0 } test(t) { return (this.mask & t.mask) !== 0 } isEnabled(t) { return (this.mask & (1 << t | 0)) !== 0 } }, v0 = 0, Od = new k, ks = new Fi, ei = new be, ya = new k, Ir = new k, y0 = new k, x0 = new Fi, Fd = new k(1, 0, 0), kd = new k(0, 1, 0), Bd = new k(0, 0, 1), zd = { type: "added" }, b0 = { type: "removed" }, Bs = { type: "childadded", child: null }, Vl = { type: "childremoved", child: null }, fn = class i extends Oi { constructor() { super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: v0++ }), this.uuid = Vr(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = i.DEFAULT_UP.clone(); let t = new k, e = new ui, n = new Fi, s = new k(1, 1, 1); function r() { n.setFromEuler(e, !1) } function a() { e.setFromQuaternion(n, void 0, !1) } e._onChange(r), n._onChange(a), Object.defineProperties(this, { position: { configurable: !0, enumerable: !0, value: t }, rotation: { configurable: !0, enumerable: !0, value: e }, quaternion: { configurable: !0, enumerable: !0, value: n }, scale: { configurable: !0, enumerable: !0, value: s }, modelViewMatrix: { value: new be }, normalMatrix: { value: new kt } }), this.matrix = new be, this.matrixWorld = new be, this.matrixAutoUpdate = i.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Qa, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {} } onBeforeShadow() { } onAfterShadow() { } onBeforeRender() { } onAfterRender() { } applyMatrix4(t) { this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale) } applyQuaternion(t) { return this.quaternion.premultiply(t), this } setRotationFromAxisAngle(t, e) { this.quaternion.setFromAxisAngle(t, e) } setRotationFromEuler(t) { this.quaternion.setFromEuler(t, !0) } setRotationFromMatrix(t) { this.quaternion.setFromRotationMatrix(t) } setRotationFromQuaternion(t) { this.quaternion.copy(t) } rotateOnAxis(t, e) { return ks.setFromAxisAngle(t, e), this.quaternion.multiply(ks), this } rotateOnWorldAxis(t, e) { return ks.setFromAxisAngle(t, e), this.quaternion.premultiply(ks), this } rotateX(t) { return this.rotateOnAxis(Fd, t) } rotateY(t) { return this.rotateOnAxis(kd, t) } rotateZ(t) { return this.rotateOnAxis(Bd, t) } translateOnAxis(t, e) { return Od.copy(t).applyQuaternion(this.quaternion), this.position.add(Od.multiplyScalar(e)), this } translateX(t) { return this.translateOnAxis(Fd, t) } translateY(t) { return this.translateOnAxis(kd, t) } translateZ(t) { return this.translateOnAxis(Bd, t) } localToWorld(t) { return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld) } worldToLocal(t) { return this.updateWorldMatrix(!0, !1), t.applyMatrix4(ei.copy(this.matrixWorld).invert()) } lookAt(t, e, n) { t.isVector3 ? ya.copy(t) : ya.set(t, e, n); let s = this.parent; this.updateWorldMatrix(!0, !1), Ir.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? ei.lookAt(Ir, ya, this.up) : ei.lookAt(ya, Ir, this.up), this.quaternion.setFromRotationMatrix(ei), s && (ei.extractRotation(s.matrixWorld), ks.setFromRotationMatrix(ei), this.quaternion.premultiply(ks.invert())) } add(t) { if (arguments.length > 1) { for (let e = 0; e < arguments.length; e++)this.add(arguments[e]); return this } return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(zd), Bs.child = t, this.dispatchEvent(Bs), Bs.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this) } remove(t) { if (arguments.length > 1) { for (let n = 0; n < arguments.length; n++)this.remove(arguments[n]); return this } let e = this.children.indexOf(t); return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(b0), Vl.child = t, this.dispatchEvent(Vl), Vl.child = null), this } removeFromParent() { let t = this.parent; return t !== null && t.remove(this), this } clear() { return this.remove(...this.children) } attach(t) { return this.updateWorldMatrix(!0, !1), ei.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), ei.multiply(t.parent.matrixWorld)), t.applyMatrix4(ei), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent(zd), Bs.child = t, this.dispatchEvent(Bs), Bs.child = null, this } getObjectById(t) { return this.getObjectByProperty("id", t) } getObjectByName(t) { return this.getObjectByProperty("name", t) } getObjectByProperty(t, e) { if (this[t] === e) return this; for (let n = 0, s = this.children.length; n < s; n++) { let a = this.children[n].getObjectByProperty(t, e); if (a !== void 0) return a } } getObjectsByProperty(t, e, n = []) { this[t] === e && n.push(this); let s = this.children; for (let r = 0, a = s.length; r < a; r++)s[r].getObjectsByProperty(t, e, n); return n } getWorldPosition(t) { return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld) } getWorldQuaternion(t) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ir, t, y0), t } getWorldScale(t) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ir, x0, t), t } getWorldDirection(t) { this.updateWorldMatrix(!0, !1); let e = this.matrixWorld.elements; return t.set(e[8], e[9], e[10]).normalize() } raycast() { } traverse(t) { t(this); let e = this.children; for (let n = 0, s = e.length; n < s; n++)e[n].traverse(t) } traverseVisible(t) { if (this.visible === !1) return; t(this); let e = this.children; for (let n = 0, s = e.length; n < s; n++)e[n].traverseVisible(t) } traverseAncestors(t) { let e = this.parent; e !== null && (t(e), e.traverseAncestors(t)) } updateMatrix() { this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0 } updateMatrixWorld(t) { this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, t = !0); let e = this.children; for (let n = 0, s = e.length; n < s; n++)e[n].updateMatrixWorld(t) } updateWorldMatrix(t, e) { let n = this.parent; if (t === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), e === !0) { let s = this.children; for (let r = 0, a = s.length; r < a; r++)s[r].updateWorldMatrix(!1, !0) } } toJSON(t) { let e = t === void 0 || typeof t == "string", n = {}; e && (t = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.6, type: "Object", generator: "Object3D.toJSON" }); let s = {}; s.uuid = this.uuid, s.type = this.type, this.name !== "" && (s.name = this.name), this.castShadow === !0 && (s.castShadow = !0), this.receiveShadow === !0 && (s.receiveShadow = !0), this.visible === !1 && (s.visible = !1), this.frustumCulled === !1 && (s.frustumCulled = !1), this.renderOrder !== 0 && (s.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (s.userData = this.userData), s.layers = this.layers.mask, s.matrix = this.matrix.toArray(), s.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (s.matrixAutoUpdate = !1), this.isInstancedMesh && (s.type = "InstancedMesh", s.count = this.count, s.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (s.type = "BatchedMesh", s.perObjectFrustumCulled = this.perObjectFrustumCulled, s.sortObjects = this.sortObjects, s.drawRanges = this._drawRanges, s.reservedRanges = this._reservedRanges, s.visibility = this._visibility, s.active = this._active, s.bounds = this._bounds.map(o => ({ boxInitialized: o.boxInitialized, boxMin: o.box.min.toArray(), boxMax: o.box.max.toArray(), sphereInitialized: o.sphereInitialized, sphereRadius: o.sphere.radius, sphereCenter: o.sphere.center.toArray() })), s.maxInstanceCount = this._maxInstanceCount, s.maxVertexCount = this._maxVertexCount, s.maxIndexCount = this._maxIndexCount, s.geometryInitialized = this._geometryInitialized, s.geometryCount = this._geometryCount, s.matricesTexture = this._matricesTexture.toJSON(t), this._colorsTexture !== null && (s.colorsTexture = this._colorsTexture.toJSON(t)), this.boundingSphere !== null && (s.boundingSphere = { center: s.boundingSphere.center.toArray(), radius: s.boundingSphere.radius }), this.boundingBox !== null && (s.boundingBox = { min: s.boundingBox.min.toArray(), max: s.boundingBox.max.toArray() })); function r(o, l) { return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(t)), l.uuid } if (this.isScene) this.background && (this.background.isColor ? s.background = this.background.toJSON() : this.background.isTexture && (s.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (s.environment = this.environment.toJSON(t).uuid); else if (this.isMesh || this.isLine || this.isPoints) { s.geometry = r(t.geometries, this.geometry); let o = this.geometry.parameters; if (o !== void 0 && o.shapes !== void 0) { let l = o.shapes; if (Array.isArray(l)) for (let c = 0, h = l.length; c < h; c++) { let d = l[c]; r(t.shapes, d) } else r(t.shapes, l) } } if (this.isSkinnedMesh && (s.bindMode = this.bindMode, s.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(t.skeletons, this.skeleton), s.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) { let o = []; for (let l = 0, c = this.material.length; l < c; l++)o.push(r(t.materials, this.material[l])); s.material = o } else s.material = r(t.materials, this.material); if (this.children.length > 0) { s.children = []; for (let o = 0; o < this.children.length; o++)s.children.push(this.children[o].toJSON(t).object) } if (this.animations.length > 0) { s.animations = []; for (let o = 0; o < this.animations.length; o++) { let l = this.animations[o]; s.animations.push(r(t.animations, l)) } } if (e) { let o = a(t.geometries), l = a(t.materials), c = a(t.textures), h = a(t.images), d = a(t.shapes), u = a(t.skeletons), f = a(t.animations), m = a(t.nodes); o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), d.length > 0 && (n.shapes = d), u.length > 0 && (n.skeletons = u), f.length > 0 && (n.animations = f), m.length > 0 && (n.nodes = m) } return n.object = s, n; function a(o) { let l = []; for (let c in o) { let h = o[c]; delete h.metadata, l.push(h) } return l } } clone(t) { return new this.constructor().copy(this, t) } copy(t, e = !0) { if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), e === !0) for (let n = 0; n < t.children.length; n++) { let s = t.children[n]; this.add(s.clone()) } return this } }; fn.DEFAULT_UP = new k(0, 1, 0); fn.DEFAULT_MATRIX_AUTO_UPDATE = !0; fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0; var Cn = new k, ni = new k, Hl = new k, ii = new k, zs = new k, Vs = new k, Vd = new k, Gl = new k, Wl = new k, Xl = new k, ql = new we, $l = new we, Yl = new we, Ii = class i { constructor(t = new k, e = new k, n = new k) { this.a = t, this.b = e, this.c = n } static getNormal(t, e, n, s) { s.subVectors(n, e), Cn.subVectors(t, e), s.cross(Cn); let r = s.lengthSq(); return r > 0 ? s.multiplyScalar(1 / Math.sqrt(r)) : s.set(0, 0, 0) } static getBarycoord(t, e, n, s, r) { Cn.subVectors(s, e), ni.subVectors(n, e), Hl.subVectors(t, e); let a = Cn.dot(Cn), o = Cn.dot(ni), l = Cn.dot(Hl), c = ni.dot(ni), h = ni.dot(Hl), d = a * c - o * o; if (d === 0) return r.set(0, 0, 0), null; let u = 1 / d, f = (c * l - o * h) * u, m = (a * h - o * l) * u; return r.set(1 - f - m, m, f) } static containsPoint(t, e, n, s) { return this.getBarycoord(t, e, n, s, ii) === null ? !1 : ii.x >= 0 && ii.y >= 0 && ii.x + ii.y <= 1 } static getInterpolation(t, e, n, s, r, a, o, l) { return this.getBarycoord(t, e, n, s, ii) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(r, ii.x), l.addScaledVector(a, ii.y), l.addScaledVector(o, ii.z), l) } static getInterpolatedAttribute(t, e, n, s, r, a) { return ql.setScalar(0), $l.setScalar(0), Yl.setScalar(0), ql.fromBufferAttribute(t, e), $l.fromBufferAttribute(t, n), Yl.fromBufferAttribute(t, s), a.setScalar(0), a.addScaledVector(ql, r.x), a.addScaledVector($l, r.y), a.addScaledVector(Yl, r.z), a } static isFrontFacing(t, e, n, s) { return Cn.subVectors(n, e), ni.subVectors(t, e), Cn.cross(ni).dot(s) < 0 } set(t, e, n) { return this.a.copy(t), this.b.copy(e), this.c.copy(n), this } setFromPointsAndIndices(t, e, n, s) { return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[s]), this } setFromAttributeAndIndices(t, e, n, s) { return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, n), this.c.fromBufferAttribute(t, s), this } clone() { return new this.constructor().copy(this) } copy(t) { return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this } getArea() { return Cn.subVectors(this.c, this.b), ni.subVectors(this.a, this.b), Cn.cross(ni).length() * .5 } getMidpoint(t) { return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3) } getNormal(t) { return i.getNormal(this.a, this.b, this.c, t) } getPlane(t) { return t.setFromCoplanarPoints(this.a, this.b, this.c) } getBarycoord(t, e) { return i.getBarycoord(t, this.a, this.b, this.c, e) } getInterpolation(t, e, n, s, r) { return i.getInterpolation(t, this.a, this.b, this.c, e, n, s, r) } containsPoint(t) { return i.containsPoint(t, this.a, this.b, this.c) } isFrontFacing(t) { return i.isFrontFacing(this.a, this.b, this.c, t) } intersectsBox(t) { return t.intersectsTriangle(this) } closestPointToPoint(t, e) { let n = this.a, s = this.b, r = this.c, a, o; zs.subVectors(s, n), Vs.subVectors(r, n), Gl.subVectors(t, n); let l = zs.dot(Gl), c = Vs.dot(Gl); if (l <= 0 && c <= 0) return e.copy(n); Wl.subVectors(t, s); let h = zs.dot(Wl), d = Vs.dot(Wl); if (h >= 0 && d <= h) return e.copy(s); let u = l * d - h * c; if (u <= 0 && l >= 0 && h <= 0) return a = l / (l - h), e.copy(n).addScaledVector(zs, a); Xl.subVectors(t, r); let f = zs.dot(Xl), m = Vs.dot(Xl); if (m >= 0 && f <= m) return e.copy(r); let _ = f * c - l * m; if (_ <= 0 && c >= 0 && m <= 0) return o = c / (c - m), e.copy(n).addScaledVector(Vs, o); let g = h * m - f * d; if (g <= 0 && d - h >= 0 && f - m >= 0) return Vd.subVectors(r, s), o = (d - h) / (d - h + (f - m)), e.copy(s).addScaledVector(Vd, o); let p = 1 / (g + _ + u); return a = _ * p, o = u * p, e.copy(n).addScaledVector(zs, a).addScaledVector(Vs, o) } equals(t) { return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c) } }, Bf = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, Ci = { h: 0, s: 0, l: 0 }, xa = { h: 0, s: 0, l: 0 }; function Zl(i, t, e) { return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? i + (t - i) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? i + (t - i) * 6 * (2 / 3 - e) : i } var Ht = class { constructor(t, e, n) { return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(t, e, n) } set(t, e, n) { if (e === void 0 && n === void 0) { let s = t; s && s.isColor ? this.copy(s) : typeof s == "number" ? this.setHex(s) : typeof s == "string" && this.setStyle(s) } else this.setRGB(t, e, n); return this } setScalar(t) { return this.r = t, this.g = t, this.b = t, this } setHex(t, e = yn) { return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, $t.toWorkingColorSpace(this, e), this } setRGB(t, e, n, s = $t.workingColorSpace) { return this.r = t, this.g = e, this.b = n, $t.toWorkingColorSpace(this, s), this } setHSL(t, e, n, s = $t.workingColorSpace) { if (t = l0(t, 1), e = We(e, 0, 1), n = We(n, 0, 1), e === 0) this.r = this.g = this.b = n; else { let r = n <= .5 ? n * (1 + e) : n + e - n * e, a = 2 * n - r; this.r = Zl(a, r, t + 1 / 3), this.g = Zl(a, r, t), this.b = Zl(a, r, t - 1 / 3) } return $t.toWorkingColorSpace(this, s), this } setStyle(t, e = yn) { function n(r) { r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.") } let s; if (s = /^(\w+)\(([^\)]*)\)/.exec(t)) { let r, a = s[1], o = s[2]; switch (a) { case "rgb": case "rgba": if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, e); if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(r[4]), this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, e); break; case "hsl": case "hsla": if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, e); break; default: console.warn("THREE.Color: Unknown color model " + t) } } else if (s = /^\#([A-Fa-f\d]+)$/.exec(t)) { let r = s[1], a = r.length; if (a === 3) return this.setRGB(parseInt(r.charAt(0), 16) / 15, parseInt(r.charAt(1), 16) / 15, parseInt(r.charAt(2), 16) / 15, e); if (a === 6) return this.setHex(parseInt(r, 16), e); console.warn("THREE.Color: Invalid hex color " + t) } else if (t && t.length > 0) return this.setColorName(t, e); return this } setColorName(t, e = yn) { let n = Bf[t.toLowerCase()]; return n !== void 0 ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t), this } clone() { return new this.constructor(this.r, this.g, this.b) } copy(t) { return this.r = t.r, this.g = t.g, this.b = t.b, this } copySRGBToLinear(t) { return this.r = li(t.r), this.g = li(t.g), this.b = li(t.b), this } copyLinearToSRGB(t) { return this.r = Ys(t.r), this.g = Ys(t.g), this.b = Ys(t.b), this } convertSRGBToLinear() { return this.copySRGBToLinear(this), this } convertLinearToSRGB() { return this.copyLinearToSRGB(this), this } getHex(t = yn) { return $t.fromWorkingColorSpace(Ge.copy(this), t), Math.round(We(Ge.r * 255, 0, 255)) * 65536 + Math.round(We(Ge.g * 255, 0, 255)) * 256 + Math.round(We(Ge.b * 255, 0, 255)) } getHexString(t = yn) { return ("000000" + this.getHex(t).toString(16)).slice(-6) } getHSL(t, e = $t.workingColorSpace) { $t.fromWorkingColorSpace(Ge.copy(this), e); let n = Ge.r, s = Ge.g, r = Ge.b, a = Math.max(n, s, r), o = Math.min(n, s, r), l, c, h = (o + a) / 2; if (o === a) l = 0, c = 0; else { let d = a - o; switch (c = h <= .5 ? d / (a + o) : d / (2 - a - o), a) { case n: l = (s - r) / d + (s < r ? 6 : 0); break; case s: l = (r - n) / d + 2; break; case r: l = (n - s) / d + 4; break }l /= 6 } return t.h = l, t.s = c, t.l = h, t } getRGB(t, e = $t.workingColorSpace) { return $t.fromWorkingColorSpace(Ge.copy(this), e), t.r = Ge.r, t.g = Ge.g, t.b = Ge.b, t } getStyle(t = yn) { $t.fromWorkingColorSpace(Ge.copy(this), t); let e = Ge.r, n = Ge.g, s = Ge.b; return t !== yn ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(n * 255)},${Math.round(s * 255)})` } offsetHSL(t, e, n) { return this.getHSL(Ci), this.setHSL(Ci.h + t, Ci.s + e, Ci.l + n) } add(t) { return this.r += t.r, this.g += t.g, this.b += t.b, this } addColors(t, e) { return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this } addScalar(t) { return this.r += t, this.g += t, this.b += t, this } sub(t) { return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this } multiply(t) { return this.r *= t.r, this.g *= t.g, this.b *= t.b, this } multiplyScalar(t) { return this.r *= t, this.g *= t, this.b *= t, this } lerp(t, e) { return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this } lerpColors(t, e, n) { return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this } lerpHSL(t, e) { this.getHSL(Ci), t.getHSL(xa); let n = Ll(Ci.h, xa.h, e), s = Ll(Ci.s, xa.s, e), r = Ll(Ci.l, xa.l, e); return this.setHSL(n, s, r), this } setFromVector3(t) { return this.r = t.x, this.g = t.y, this.b = t.z, this } applyMatrix3(t) { let e = this.r, n = this.g, s = this.b, r = t.elements; return this.r = r[0] * e + r[3] * n + r[6] * s, this.g = r[1] * e + r[4] * n + r[7] * s, this.b = r[2] * e + r[5] * n + r[8] * s, this } equals(t) { return t.r === this.r && t.g === this.g && t.b === this.b } fromArray(t, e = 0) { return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this } toArray(t = [], e = 0) { return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t } fromBufferAttribute(t, e) { return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this } toJSON() { return this.getHex() } *[Symbol.iterator]() { yield this.r, yield this.g, yield this.b } }, Ge = new Ht; Ht.NAMES = Bf; var S0 = 0, ki = class extends Oi { static get type() { return "Material" } get type() { return this.constructor.type } set type(t) { } constructor() { super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: S0++ }), this.uuid = Vr(), this.name = "", this.blending = Di, this.side = Ni, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = hc, this.blendDst = uc, this.blendEquation = os, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Ht(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Js, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = wd, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Ls, this.stencilZFail = Ls, this.stencilZPass = Ls, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0 } get alphaTest() { return this._alphaTest } set alphaTest(t) { this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t } onBeforeRender() { } onBeforeCompile() { } customProgramCacheKey() { return this.onBeforeCompile.toString() } setValues(t) { if (t !== void 0) for (let e in t) { let n = t[e]; if (n === void 0) { console.warn(`THREE.Material: parameter '${e}' has value of undefined.`); continue } let s = this[e]; if (s === void 0) { console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`); continue } s && s.isColor ? s.set(n) : s && s.isVector3 && n && n.isVector3 ? s.copy(n) : this[e] = n } } toJSON(t) { let e = t === void 0 || typeof t == "string"; e && (t = { textures: {}, images: {} }); let n = { metadata: { version: 4.6, type: "Material", generator: "Material.toJSON" } }; n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Di && (n.blending = this.blending), this.side !== Ni && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== hc && (n.blendSrc = this.blendSrc), this.blendDst !== uc && (n.blendDst = this.blendDst), this.blendEquation !== os && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== Js && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== wd && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Ls && (n.stencilFail = this.stencilFail), this.stencilZFail !== Ls && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Ls && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData); function s(r) { let a = []; for (let o in r) { let l = r[o]; delete l.metadata, a.push(l) } return a } if (e) { let r = s(t.textures), a = s(t.images); r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a) } return n } clone() { return new this.constructor().copy(this) } copy(t) { this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.blendColor.copy(t.blendColor), this.blendAlpha = t.blendAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite; let e = t.clippingPlanes, n = null; if (e !== null) { let s = e.length; n = new Array(s); for (let r = 0; r !== s; ++r)n[r] = e[r].clone() } return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaHash = t.alphaHash, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this } dispose() { this.dispatchEvent({ type: "dispose" }) } set needsUpdate(t) { t === !0 && this.version++ } onBuild() { console.warn("Material: onBuild() has been removed.") } }, ps = class extends ki { static get type() { return "MeshBasicMaterial" } constructor(t) { super(), this.isMeshBasicMaterial = !0, this.color = new Ht(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new ui, this.combine = Ef, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t) } copy(t) { return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this } }; var Ae = new k, ba = new Xt, Ee = class { constructor(t, e, n = !1) { if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array."); this.isBufferAttribute = !0, this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = n, this.usage = Ed, this.updateRanges = [], this.gpuType = ai, this.version = 0 } onUploadCallback() { } set needsUpdate(t) { t === !0 && this.version++ } setUsage(t) { return this.usage = t, this } addUpdateRange(t, e) { this.updateRanges.push({ start: t, count: e }) } clearUpdateRanges() { this.updateRanges.length = 0 } copy(t) { return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this.gpuType = t.gpuType, this } copyAt(t, e, n) { t *= this.itemSize, n *= e.itemSize; for (let s = 0, r = this.itemSize; s < r; s++)this.array[t + s] = e.array[n + s]; return this } copyArray(t) { return this.array.set(t), this } applyMatrix3(t) { if (this.itemSize === 2) for (let e = 0, n = this.count; e < n; e++)ba.fromBufferAttribute(this, e), ba.applyMatrix3(t), this.setXY(e, ba.x, ba.y); else if (this.itemSize === 3) for (let e = 0, n = this.count; e < n; e++)Ae.fromBufferAttribute(this, e), Ae.applyMatrix3(t), this.setXYZ(e, Ae.x, Ae.y, Ae.z); return this } applyMatrix4(t) { for (let e = 0, n = this.count; e < n; e++)Ae.fromBufferAttribute(this, e), Ae.applyMatrix4(t), this.setXYZ(e, Ae.x, Ae.y, Ae.z); return this } applyNormalMatrix(t) { for (let e = 0, n = this.count; e < n; e++)Ae.fromBufferAttribute(this, e), Ae.applyNormalMatrix(t), this.setXYZ(e, Ae.x, Ae.y, Ae.z); return this } transformDirection(t) { for (let e = 0, n = this.count; e < n; e++)Ae.fromBufferAttribute(this, e), Ae.transformDirection(t), this.setXYZ(e, Ae.x, Ae.y, Ae.z); return this } set(t, e = 0) { return this.array.set(t, e), this } getComponent(t, e) { let n = this.array[t * this.itemSize + e]; return this.normalized && (n = Cr(n, this.array)), n } setComponent(t, e, n) { return this.normalized && (n = nn(n, this.array)), this.array[t * this.itemSize + e] = n, this } getX(t) { let e = this.array[t * this.itemSize]; return this.normalized && (e = Cr(e, this.array)), e } setX(t, e) { return this.normalized && (e = nn(e, this.array)), this.array[t * this.itemSize] = e, this } getY(t) { let e = this.array[t * this.itemSize + 1]; return this.normalized && (e = Cr(e, this.array)), e } setY(t, e) { return this.normalized && (e = nn(e, this.array)), this.array[t * this.itemSize + 1] = e, this } getZ(t) { let e = this.array[t * this.itemSize + 2]; return this.normalized && (e = Cr(e, this.array)), e } setZ(t, e) { return this.normalized && (e = nn(e, this.array)), this.array[t * this.itemSize + 2] = e, this } getW(t) { let e = this.array[t * this.itemSize + 3]; return this.normalized && (e = Cr(e, this.array)), e } setW(t, e) { return this.normalized && (e = nn(e, this.array)), this.array[t * this.itemSize + 3] = e, this } setXY(t, e, n) { return t *= this.itemSize, this.normalized && (e = nn(e, this.array), n = nn(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this } setXYZ(t, e, n, s) { return t *= this.itemSize, this.normalized && (e = nn(e, this.array), n = nn(n, this.array), s = nn(s, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = s, this } setXYZW(t, e, n, s, r) { return t *= this.itemSize, this.normalized && (e = nn(e, this.array), n = nn(n, this.array), s = nn(s, this.array), r = nn(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = s, this.array[t + 3] = r, this } onUpload(t) { return this.onUploadCallback = t, this } clone() { return new this.constructor(this.array, this.itemSize).copy(this) } toJSON() { let t = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized }; return this.name !== "" && (t.name = this.name), this.usage !== Ed && (t.usage = this.usage), t } }; var to = class extends Ee { constructor(t, e, n) { super(new Uint16Array(t), e, n) } }; var eo = class extends Ee { constructor(t, e, n) { super(new Uint32Array(t), e, n) } }; var _e = class extends Ee { constructor(t, e, n) { super(new Float32Array(t), e, n) } }, M0 = 0, vn = new be, Jl = new fn, Hs = new k, dn = new ds, Lr = new ds, Ue = new k, Ce = class i extends Oi { constructor() { super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: M0++ }), this.uuid = Vr(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {} } getIndex() { return this.index } setIndex(t) { return Array.isArray(t) ? this.index = new (kf(t) ? eo : to)(t, 1) : this.index = t, this } setIndirect(t) { return this.indirect = t, this } getIndirect() { return this.indirect } getAttribute(t) { return this.attributes[t] } setAttribute(t, e) { return this.attributes[t] = e, this } deleteAttribute(t) { return delete this.attributes[t], this } hasAttribute(t) { return this.attributes[t] !== void 0 } addGroup(t, e, n = 0) { this.groups.push({ start: t, count: e, materialIndex: n }) } clearGroups() { this.groups = [] } setDrawRange(t, e) { this.drawRange.start = t, this.drawRange.count = e } applyMatrix4(t) { let e = this.attributes.position; e !== void 0 && (e.applyMatrix4(t), e.needsUpdate = !0); let n = this.attributes.normal; if (n !== void 0) { let r = new kt().getNormalMatrix(t); n.applyNormalMatrix(r), n.needsUpdate = !0 } let s = this.attributes.tangent; return s !== void 0 && (s.transformDirection(t), s.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this } applyQuaternion(t) { return vn.makeRotationFromQuaternion(t), this.applyMatrix4(vn), this } rotateX(t) { return vn.makeRotationX(t), this.applyMatrix4(vn), this } rotateY(t) { return vn.makeRotationY(t), this.applyMatrix4(vn), this } rotateZ(t) { return vn.makeRotationZ(t), this.applyMatrix4(vn), this } translate(t, e, n) { return vn.makeTranslation(t, e, n), this.applyMatrix4(vn), this } scale(t, e, n) { return vn.makeScale(t, e, n), this.applyMatrix4(vn), this } lookAt(t) { return Jl.lookAt(t), Jl.updateMatrix(), this.applyMatrix4(Jl.matrix), this } center() { return this.computeBoundingBox(), this.boundingBox.getCenter(Hs).negate(), this.translate(Hs.x, Hs.y, Hs.z), this } setFromPoints(t) { let e = this.getAttribute("position"); if (e === void 0) { let n = []; for (let s = 0, r = t.length; s < r; s++) { let a = t[s]; n.push(a.x, a.y, a.z || 0) } this.setAttribute("position", new _e(n, 3)) } else { for (let n = 0, s = e.count; n < s; n++) { let r = t[n]; e.setXYZ(n, r.x, r.y, r.z || 0) } t.length > e.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), e.needsUpdate = !0 } return this } computeBoundingBox() { this.boundingBox === null && (this.boundingBox = new ds); let t = this.attributes.position, e = this.morphAttributes.position; if (t && t.isGLBufferAttribute) { console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new k(-1 / 0, -1 / 0, -1 / 0), new k(1 / 0, 1 / 0, 1 / 0)); return } if (t !== void 0) { if (this.boundingBox.setFromBufferAttribute(t), e) for (let n = 0, s = e.length; n < s; n++) { let r = e[n]; dn.setFromBufferAttribute(r), this.morphTargetsRelative ? (Ue.addVectors(this.boundingBox.min, dn.min), this.boundingBox.expandByPoint(Ue), Ue.addVectors(this.boundingBox.max, dn.max), this.boundingBox.expandByPoint(Ue)) : (this.boundingBox.expandByPoint(dn.min), this.boundingBox.expandByPoint(dn.max)) } } else this.boundingBox.makeEmpty(); (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this) } computeBoundingSphere() { this.boundingSphere === null && (this.boundingSphere = new fs); let t = this.attributes.position, e = this.morphAttributes.position; if (t && t.isGLBufferAttribute) { console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new k, 1 / 0); return } if (t) { let n = this.boundingSphere.center; if (dn.setFromBufferAttribute(t), e) for (let r = 0, a = e.length; r < a; r++) { let o = e[r]; Lr.setFromBufferAttribute(o), this.morphTargetsRelative ? (Ue.addVectors(dn.min, Lr.min), dn.expandByPoint(Ue), Ue.addVectors(dn.max, Lr.max), dn.expandByPoint(Ue)) : (dn.expandByPoint(Lr.min), dn.expandByPoint(Lr.max)) } dn.getCenter(n); let s = 0; for (let r = 0, a = t.count; r < a; r++)Ue.fromBufferAttribute(t, r), s = Math.max(s, n.distanceToSquared(Ue)); if (e) for (let r = 0, a = e.length; r < a; r++) { let o = e[r], l = this.morphTargetsRelative; for (let c = 0, h = o.count; c < h; c++)Ue.fromBufferAttribute(o, c), l && (Hs.fromBufferAttribute(t, c), Ue.add(Hs)), s = Math.max(s, n.distanceToSquared(Ue)) } this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this) } } computeTangents() { let t = this.index, e = this.attributes; if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) { console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"); return } let n = e.position, s = e.normal, r = e.uv; this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Ee(new Float32Array(4 * n.count), 4)); let a = this.getAttribute("tangent"), o = [], l = []; for (let C = 0; C < n.count; C++)o[C] = new k, l[C] = new k; let c = new k, h = new k, d = new k, u = new Xt, f = new Xt, m = new Xt, _ = new k, g = new k; function p(C, b, S) { c.fromBufferAttribute(n, C), h.fromBufferAttribute(n, b), d.fromBufferAttribute(n, S), u.fromBufferAttribute(r, C), f.fromBufferAttribute(r, b), m.fromBufferAttribute(r, S), h.sub(c), d.sub(c), f.sub(u), m.sub(u); let P = 1 / (f.x * m.y - m.x * f.y); isFinite(P) && (_.copy(h).multiplyScalar(m.y).addScaledVector(d, -f.y).multiplyScalar(P), g.copy(d).multiplyScalar(f.x).addScaledVector(h, -m.x).multiplyScalar(P), o[C].add(_), o[b].add(_), o[S].add(_), l[C].add(g), l[b].add(g), l[S].add(g)) } let y = this.groups; y.length === 0 && (y = [{ start: 0, count: t.count }]); for (let C = 0, b = y.length; C < b; ++C) { let S = y[C], P = S.start, H = S.count; for (let z = P, W = P + H; z < W; z += 3)p(t.getX(z + 0), t.getX(z + 1), t.getX(z + 2)) } let x = new k, v = new k, A = new k, T = new k; function E(C) { A.fromBufferAttribute(s, C), T.copy(A); let b = o[C]; x.copy(b), x.sub(A.multiplyScalar(A.dot(b))).normalize(), v.crossVectors(T, b); let P = v.dot(l[C]) < 0 ? -1 : 1; a.setXYZW(C, x.x, x.y, x.z, P) } for (let C = 0, b = y.length; C < b; ++C) { let S = y[C], P = S.start, H = S.count; for (let z = P, W = P + H; z < W; z += 3)E(t.getX(z + 0)), E(t.getX(z + 1)), E(t.getX(z + 2)) } } computeVertexNormals() { let t = this.index, e = this.getAttribute("position"); if (e !== void 0) { let n = this.getAttribute("normal"); if (n === void 0) n = new Ee(new Float32Array(e.count * 3), 3), this.setAttribute("normal", n); else for (let u = 0, f = n.count; u < f; u++)n.setXYZ(u, 0, 0, 0); let s = new k, r = new k, a = new k, o = new k, l = new k, c = new k, h = new k, d = new k; if (t) for (let u = 0, f = t.count; u < f; u += 3) { let m = t.getX(u + 0), _ = t.getX(u + 1), g = t.getX(u + 2); s.fromBufferAttribute(e, m), r.fromBufferAttribute(e, _), a.fromBufferAttribute(e, g), h.subVectors(a, r), d.subVectors(s, r), h.cross(d), o.fromBufferAttribute(n, m), l.fromBufferAttribute(n, _), c.fromBufferAttribute(n, g), o.add(h), l.add(h), c.add(h), n.setXYZ(m, o.x, o.y, o.z), n.setXYZ(_, l.x, l.y, l.z), n.setXYZ(g, c.x, c.y, c.z) } else for (let u = 0, f = e.count; u < f; u += 3)s.fromBufferAttribute(e, u + 0), r.fromBufferAttribute(e, u + 1), a.fromBufferAttribute(e, u + 2), h.subVectors(a, r), d.subVectors(s, r), h.cross(d), n.setXYZ(u + 0, h.x, h.y, h.z), n.setXYZ(u + 1, h.x, h.y, h.z), n.setXYZ(u + 2, h.x, h.y, h.z); this.normalizeNormals(), n.needsUpdate = !0 } } normalizeNormals() { let t = this.attributes.normal; for (let e = 0, n = t.count; e < n; e++)Ue.fromBufferAttribute(t, e), Ue.normalize(), t.setXYZ(e, Ue.x, Ue.y, Ue.z) } toNonIndexed() { function t(o, l) { let c = o.array, h = o.itemSize, d = o.normalized, u = new c.constructor(l.length * h), f = 0, m = 0; for (let _ = 0, g = l.length; _ < g; _++) { o.isInterleavedBufferAttribute ? f = l[_] * o.data.stride + o.offset : f = l[_] * h; for (let p = 0; p < h; p++)u[m++] = c[f++] } return new Ee(u, h, d) } if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this; let e = new i, n = this.index.array, s = this.attributes; for (let o in s) { let l = s[o], c = t(l, n); e.setAttribute(o, c) } let r = this.morphAttributes; for (let o in r) { let l = [], c = r[o]; for (let h = 0, d = c.length; h < d; h++) { let u = c[h], f = t(u, n); l.push(f) } e.morphAttributes[o] = l } e.morphTargetsRelative = this.morphTargetsRelative; let a = this.groups; for (let o = 0, l = a.length; o < l; o++) { let c = a[o]; e.addGroup(c.start, c.count, c.materialIndex) } return e } toJSON() { let t = { metadata: { version: 4.6, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } }; if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0) { let l = this.parameters; for (let c in l) l[c] !== void 0 && (t[c] = l[c]); return t } t.data = { attributes: {} }; let e = this.index; e !== null && (t.data.index = { type: e.array.constructor.name, array: Array.prototype.slice.call(e.array) }); let n = this.attributes; for (let l in n) { let c = n[l]; t.data.attributes[l] = c.toJSON(t.data) } let s = {}, r = !1; for (let l in this.morphAttributes) { let c = this.morphAttributes[l], h = []; for (let d = 0, u = c.length; d < u; d++) { let f = c[d]; h.push(f.toJSON(t.data)) } h.length > 0 && (s[l] = h, r = !0) } r && (t.data.morphAttributes = s, t.data.morphTargetsRelative = this.morphTargetsRelative); let a = this.groups; a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a))); let o = this.boundingSphere; return o !== null && (t.data.boundingSphere = { center: o.center.toArray(), radius: o.radius }), t } clone() { return new this.constructor().copy(this) } copy(t) { this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null; let e = {}; this.name = t.name; let n = t.index; n !== null && this.setIndex(n.clone(e)); let s = t.attributes; for (let c in s) { let h = s[c]; this.setAttribute(c, h.clone(e)) } let r = t.morphAttributes; for (let c in r) { let h = [], d = r[c]; for (let u = 0, f = d.length; u < f; u++)h.push(d[u].clone(e)); this.morphAttributes[c] = h } this.morphTargetsRelative = t.morphTargetsRelative; let a = t.groups; for (let c = 0, h = a.length; c < h; c++) { let d = a[c]; this.addGroup(d.start, d.count, d.materialIndex) } let o = t.boundingBox; o !== null && (this.boundingBox = o.clone()); let l = t.boundingSphere; return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this } dispose() { this.dispatchEvent({ type: "dispose" }) } }, Hd = new be, ns = new kr, Sa = new fs, Gd = new k, Ma = new k, wa = new k, Ea = new k, jl = new k, Ta = new k, Wd = new k, Aa = new k, sn = class extends fn { constructor(t = new Ce, e = new ps) { super(), this.isMesh = !0, this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets() } copy(t, e) { return super.copy(t, e), t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this } updateMorphTargets() { let e = this.geometry.morphAttributes, n = Object.keys(e); if (n.length > 0) { let s = e[n[0]]; if (s !== void 0) { this.morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let r = 0, a = s.length; r < a; r++) { let o = s[r].name || String(r); this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r } } } } getVertexPosition(t, e) { let n = this.geometry, s = n.attributes.position, r = n.morphAttributes.position, a = n.morphTargetsRelative; e.fromBufferAttribute(s, t); let o = this.morphTargetInfluences; if (r && o) { Ta.set(0, 0, 0); for (let l = 0, c = r.length; l < c; l++) { let h = o[l], d = r[l]; h !== 0 && (jl.fromBufferAttribute(d, t), a ? Ta.addScaledVector(jl, h) : Ta.addScaledVector(jl.sub(e), h)) } e.add(Ta) } return e } raycast(t, e) { let n = this.geometry, s = this.material, r = this.matrixWorld; s !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Sa.copy(n.boundingSphere), Sa.applyMatrix4(r), ns.copy(t.ray).recast(t.near), !(Sa.containsPoint(ns.origin) === !1 && (ns.intersectSphere(Sa, Gd) === null || ns.origin.distanceToSquared(Gd) > (t.far - t.near) ** 2)) && (Hd.copy(r).invert(), ns.copy(t.ray).applyMatrix4(Hd), !(n.boundingBox !== null && ns.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(t, e, ns))) } _computeIntersections(t, e, n) { let s, r = this.geometry, a = this.material, o = r.index, l = r.attributes.position, c = r.attributes.uv, h = r.attributes.uv1, d = r.attributes.normal, u = r.groups, f = r.drawRange; if (o !== null) if (Array.isArray(a)) for (let m = 0, _ = u.length; m < _; m++) { let g = u[m], p = a[g.materialIndex], y = Math.max(g.start, f.start), x = Math.min(o.count, Math.min(g.start + g.count, f.start + f.count)); for (let v = y, A = x; v < A; v += 3) { let T = o.getX(v), E = o.getX(v + 1), C = o.getX(v + 2); s = Ca(this, p, t, n, c, h, d, T, E, C), s && (s.faceIndex = Math.floor(v / 3), s.face.materialIndex = g.materialIndex, e.push(s)) } } else { let m = Math.max(0, f.start), _ = Math.min(o.count, f.start + f.count); for (let g = m, p = _; g < p; g += 3) { let y = o.getX(g), x = o.getX(g + 1), v = o.getX(g + 2); s = Ca(this, a, t, n, c, h, d, y, x, v), s && (s.faceIndex = Math.floor(g / 3), e.push(s)) } } else if (l !== void 0) if (Array.isArray(a)) for (let m = 0, _ = u.length; m < _; m++) { let g = u[m], p = a[g.materialIndex], y = Math.max(g.start, f.start), x = Math.min(l.count, Math.min(g.start + g.count, f.start + f.count)); for (let v = y, A = x; v < A; v += 3) { let T = v, E = v + 1, C = v + 2; s = Ca(this, p, t, n, c, h, d, T, E, C), s && (s.faceIndex = Math.floor(v / 3), s.face.materialIndex = g.materialIndex, e.push(s)) } } else { let m = Math.max(0, f.start), _ = Math.min(l.count, f.start + f.count); for (let g = m, p = _; g < p; g += 3) { let y = g, x = g + 1, v = g + 2; s = Ca(this, a, t, n, c, h, d, y, x, v), s && (s.faceIndex = Math.floor(g / 3), e.push(s)) } } } }; function w0(i, t, e, n, s, r, a, o) { let l; if (t.side === rn ? l = n.intersectTriangle(a, r, s, !0, o) : l = n.intersectTriangle(s, r, a, t.side === Ni, o), l === null) return null; Aa.copy(o), Aa.applyMatrix4(i.matrixWorld); let c = e.ray.origin.distanceTo(Aa); return c < e.near || c > e.far ? null : { distance: c, point: Aa.clone(), object: i } } function Ca(i, t, e, n, s, r, a, o, l, c) { i.getVertexPosition(o, Ma), i.getVertexPosition(l, wa), i.getVertexPosition(c, Ea); let h = w0(i, t, e, n, Ma, wa, Ea, Wd); if (h) { let d = new k; Ii.getBarycoord(Wd, Ma, wa, Ea, d), s && (h.uv = Ii.getInterpolatedAttribute(s, o, l, c, d, new Xt)), r && (h.uv1 = Ii.getInterpolatedAttribute(r, o, l, c, d, new Xt)), a && (h.normal = Ii.getInterpolatedAttribute(a, o, l, c, d, new k), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1)); let u = { a: o, b: l, c, normal: new k, materialIndex: 0 }; Ii.getNormal(Ma, wa, Ea, u.normal), h.face = u, h.barycoord = d } return h } var Bi = class i extends Ce { constructor(t = 1, e = 1, n = 1, s = 1, r = 1, a = 1) { super(), this.type = "BoxGeometry", this.parameters = { width: t, height: e, depth: n, widthSegments: s, heightSegments: r, depthSegments: a }; let o = this; s = Math.floor(s), r = Math.floor(r), a = Math.floor(a); let l = [], c = [], h = [], d = [], u = 0, f = 0; m("z", "y", "x", -1, -1, n, e, t, a, r, 0), m("z", "y", "x", 1, -1, n, e, -t, a, r, 1), m("x", "z", "y", 1, 1, t, n, e, s, a, 2), m("x", "z", "y", 1, -1, t, n, -e, s, a, 3), m("x", "y", "z", 1, -1, t, e, n, s, r, 4), m("x", "y", "z", -1, -1, t, e, -n, s, r, 5), this.setIndex(l), this.setAttribute("position", new _e(c, 3)), this.setAttribute("normal", new _e(h, 3)), this.setAttribute("uv", new _e(d, 2)); function m(_, g, p, y, x, v, A, T, E, C, b) { let S = v / E, P = A / C, H = v / 2, z = A / 2, W = T / 2, U = E + 1, I = C + 1, G = 0, D = 0, tt = new k; for (let j = 0; j < I; j++) { let dt = j * P - z; for (let At = 0; At < U; At++) { let Ut = At * S - H; tt[_] = Ut * y, tt[g] = dt * x, tt[p] = W, c.push(tt.x, tt.y, tt.z), tt[_] = 0, tt[g] = 0, tt[p] = T > 0 ? 1 : -1, h.push(tt.x, tt.y, tt.z), d.push(At / E), d.push(1 - j / C), G += 1 } } for (let j = 0; j < C; j++)for (let dt = 0; dt < E; dt++) { let At = u + dt + U * j, Ut = u + dt + U * (j + 1), Z = u + (dt + 1) + U * (j + 1), et = u + (dt + 1) + U * j; l.push(At, Ut, et), l.push(Ut, Z, et), D += 6 } o.addGroup(f, D, b), f += D, u += G } } copy(t) { return super.copy(t), this.parameters = Object.assign({}, t.parameters), this } static fromJSON(t) { return new i(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments) } }; function er(i) { let t = {}; for (let e in i) { t[e] = {}; for (let n in i[e]) { let s = i[e][n]; s && (s.isColor || s.isMatrix3 || s.isMatrix4 || s.isVector2 || s.isVector3 || s.isVector4 || s.isTexture || s.isQuaternion) ? s.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[e][n] = null) : t[e][n] = s.clone() : Array.isArray(s) ? t[e][n] = s.slice() : t[e][n] = s } } return t } function $e(i) { let t = {}; for (let e = 0; e < i.length; e++) { let n = er(i[e]); for (let s in n) t[s] = n[s] } return t } function E0(i) { let t = []; for (let e = 0; e < i.length; e++)t.push(i[e].clone()); return t } function zf(i) { let t = i.getRenderTarget(); return t === null ? i.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : $t.workingColorSpace } var T0 = { clone: er, merge: $e }, A0 =`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, C0 =`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`, bn = class extends ki { static get type() { return "ShaderMaterial" } constructor(t) { super(), this.isShaderMaterial = !0, this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = A0, this.fragmentShader = C0, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = { clipCullDistance: !1, multiDraw: !1 }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, t !== void 0 && this.setValues(t) } copy(t) { return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = er(t.uniforms), this.uniformsGroups = E0(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this } toJSON(t) { let e = super.toJSON(t); e.glslVersion = this.glslVersion, e.uniforms = {}; for (let s in this.uniforms) { let a = this.uniforms[s].value; a && a.isTexture ? e.uniforms[s] = { type: "t", value: a.toJSON(t).uuid } : a && a.isColor ? e.uniforms[s] = { type: "c", value: a.getHex() } : a && a.isVector2 ? e.uniforms[s] = { type: "v2", value: a.toArray() } : a && a.isVector3 ? e.uniforms[s] = { type: "v3", value: a.toArray() } : a && a.isVector4 ? e.uniforms[s] = { type: "v4", value: a.toArray() } : a && a.isMatrix3 ? e.uniforms[s] = { type: "m3", value: a.toArray() } : a && a.isMatrix4 ? e.uniforms[s] = { type: "m4", value: a.toArray() } : e.uniforms[s] = { value: a } } Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.lights = this.lights, e.clipping = this.clipping; let n = {}; for (let s in this.extensions) this.extensions[s] === !0 && (n[s] = !0); return Object.keys(n).length > 0 && (e.extensions = n), e } }, no = class extends fn { constructor() { super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new be, this.projectionMatrix = new be, this.projectionMatrixInverse = new be, this.coordinateSystem = oi } copy(t, e) { return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this.coordinateSystem = t.coordinateSystem, this } getWorldDirection(t) { return super.getWorldDirection(t).negate() } updateMatrixWorld(t) { super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert() } updateWorldMatrix(t, e) { super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert() } clone() { return new this.constructor().copy(this) } }, Ri = new k, Xd = new Xt, qd = new Xt, Ye = class extends no { constructor(t = 50, e = 1, n = .1, s = 2e3) { super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = s, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix() } copy(t, e) { return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = t.view === null ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this } setFocalLength(t) { let e = .5 * this.getFilmHeight() / t; this.fov = Jc * 2 * Math.atan(e), this.updateProjectionMatrix() } getFocalLength() { let t = Math.tan($a * .5 * this.fov); return .5 * this.getFilmHeight() / t } getEffectiveFOV() { return Jc * 2 * Math.atan(Math.tan($a * .5 * this.fov) / this.zoom) } getFilmWidth() { return this.filmGauge * Math.min(this.aspect, 1) } getFilmHeight() { return this.filmGauge / Math.max(this.aspect, 1) } getViewBounds(t, e, n) { Ri.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse), e.set(Ri.x, Ri.y).multiplyScalar(-t / Ri.z), Ri.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse), n.set(Ri.x, Ri.y).multiplyScalar(-t / Ri.z) } getViewSize(t, e) { return this.getViewBounds(t, Xd, qd), e.subVectors(qd, Xd) } setViewOffset(t, e, n, s, r, a) { this.aspect = t / e, this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = s, this.view.width = r, this.view.height = a, this.updateProjectionMatrix() } clearViewOffset() { this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix() } updateProjectionMatrix() { let t = this.near, e = t * Math.tan($a * .5 * this.fov) / this.zoom, n = 2 * e, s = this.aspect * n, r = -.5 * s, a = this.view; if (this.view !== null && this.view.enabled) { let l = a.fullWidth, c = a.fullHeight; r += a.offsetX * s / l, e -= a.offsetY * n / c, s *= a.width / l, n *= a.height / c } let o = this.filmOffset; o !== 0 && (r += t * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + s, e, e - n, t, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert() } toJSON(t) { let e = super.toJSON(t); return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e } }, Gs = -90, Ws = 1, th = class extends fn { constructor(t, e, n) { super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0; let s = new Ye(Gs, Ws, t, e); s.layers = this.layers, this.add(s); let r = new Ye(Gs, Ws, t, e); r.layers = this.layers, this.add(r); let a = new Ye(Gs, Ws, t, e); a.layers = this.layers, this.add(a); let o = new Ye(Gs, Ws, t, e); o.layers = this.layers, this.add(o); let l = new Ye(Gs, Ws, t, e); l.layers = this.layers, this.add(l); let c = new Ye(Gs, Ws, t, e); c.layers = this.layers, this.add(c) } updateCoordinateSystem() { let t = this.coordinateSystem, e = this.children.concat(), [n, s, r, a, o, l] = e; for (let c of e) this.remove(c); if (t === oi) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1); else if (t === Za) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), s.up.set(0, -1, 0), s.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1); else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t); for (let c of e) this.add(c), c.updateMatrixWorld() } update(t, e) { this.parent === null && this.updateMatrixWorld(); let { renderTarget: n, activeMipmapLevel: s } = this; this.coordinateSystem !== t.coordinateSystem && (this.coordinateSystem = t.coordinateSystem, this.updateCoordinateSystem()); let [r, a, o, l, c, h] = this.children, d = t.getRenderTarget(), u = t.getActiveCubeFace(), f = t.getActiveMipmapLevel(), m = t.xr.enabled; t.xr.enabled = !1; let _ = n.texture.generateMipmaps; n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0, s), t.render(e, r), t.setRenderTarget(n, 1, s), t.render(e, a), t.setRenderTarget(n, 2, s), t.render(e, o), t.setRenderTarget(n, 3, s), t.render(e, l), t.setRenderTarget(n, 4, s), t.render(e, c), n.texture.generateMipmaps = _, t.setRenderTarget(n, 5, s), t.render(e, h), t.setRenderTarget(d, u, f), t.xr.enabled = m, n.texture.needsPMREMUpdate = !0 } }, io = class extends xn { constructor(t, e, n, s, r, a, o, l, c, h) { t = t !== void 0 ? t : [], e = e !== void 0 ? e : js, super(t, e, n, s, r, a, o, l, c, h), this.isCubeTexture = !0, this.flipY = !1 } get images() { return this.image } set images(t) { this.image = t } }, eh = class extends hi {
			constructor(t = 1, e = {}) { super(t, t, e), this.isWebGLCubeRenderTarget = !0; let n = { width: t, height: t, depth: 1 }, s = [n, n, n, n, n, n]; this.texture = new io(s, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = e.generateMipmaps !== void 0 ? e.generateMipmaps : !1, this.texture.minFilter = e.minFilter !== void 0 ? e.minFilter : Hn } fromEquirectangularTexture(t, e) {
				this.texture.type = e.type, this.texture.colorSpace = e.colorSpace, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter; let n = {
					uniforms: { tEquirect: { value: null } }, vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`}, s = new Bi(5, 5, 5), r = new bn({ name: "CubemapFromEquirect", uniforms: er(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: rn, blending: Li }); r.uniforms.tEquirect.value = e; let a = new sn(s, r), o = e.minFilter; return e.minFilter === hs && (e.minFilter = Hn), new th(1, 10, this).update(t, a), e.minFilter = o, a.geometry.dispose(), a.material.dispose(), this
			} clear(t, e, n, s) { let r = t.getRenderTarget(); for (let a = 0; a < 6; a++)t.setRenderTarget(this, a), t.clear(e, n, s); t.setRenderTarget(r) }
		}, Kl = new k, R0 = new k, P0 = new kt, ri = class { constructor(t = new k(1, 0, 0), e = 0) { this.isPlane = !0, this.normal = t, this.constant = e } set(t, e) { return this.normal.copy(t), this.constant = e, this } setComponents(t, e, n, s) { return this.normal.set(t, e, n), this.constant = s, this } setFromNormalAndCoplanarPoint(t, e) { return this.normal.copy(t), this.constant = -e.dot(this.normal), this } setFromCoplanarPoints(t, e, n) { let s = Kl.subVectors(n, e).cross(R0.subVectors(t, e)).normalize(); return this.setFromNormalAndCoplanarPoint(s, t), this } copy(t) { return this.normal.copy(t.normal), this.constant = t.constant, this } normalize() { let t = 1 / this.normal.length(); return this.normal.multiplyScalar(t), this.constant *= t, this } negate() { return this.constant *= -1, this.normal.negate(), this } distanceToPoint(t) { return this.normal.dot(t) + this.constant } distanceToSphere(t) { return this.distanceToPoint(t.center) - t.radius } projectPoint(t, e) { return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t)) } intersectLine(t, e) { let n = t.delta(Kl), s = this.normal.dot(n); if (s === 0) return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null; let r = -(t.start.dot(this.normal) + this.constant) / s; return r < 0 || r > 1 ? null : e.copy(t.start).addScaledVector(n, r) } intersectsLine(t) { let e = this.distanceToPoint(t.start), n = this.distanceToPoint(t.end); return e < 0 && n > 0 || n < 0 && e > 0 } intersectsBox(t) { return t.intersectsPlane(this) } intersectsSphere(t) { return t.intersectsPlane(this) } coplanarPoint(t) { return t.copy(this.normal).multiplyScalar(-this.constant) } applyMatrix4(t, e) { let n = e || P0.getNormalMatrix(t), s = this.coplanarPoint(Kl).applyMatrix4(t), r = this.normal.applyMatrix3(n).normalize(); return this.constant = -s.dot(r), this } translate(t) { return this.constant -= t.dot(this.normal), this } equals(t) { return t.normal.equals(this.normal) && t.constant === this.constant } clone() { return new this.constructor().copy(this) } }, is = new fs, Ra = new k, so = class { constructor(t = new ri, e = new ri, n = new ri, s = new ri, r = new ri, a = new ri) { this.planes = [t, e, n, s, r, a] } set(t, e, n, s, r, a) { let o = this.planes; return o[0].copy(t), o[1].copy(e), o[2].copy(n), o[3].copy(s), o[4].copy(r), o[5].copy(a), this } copy(t) { let e = this.planes; for (let n = 0; n < 6; n++)e[n].copy(t.planes[n]); return this } setFromProjectionMatrix(t, e = oi) { let n = this.planes, s = t.elements, r = s[0], a = s[1], o = s[2], l = s[3], c = s[4], h = s[5], d = s[6], u = s[7], f = s[8], m = s[9], _ = s[10], g = s[11], p = s[12], y = s[13], x = s[14], v = s[15]; if (n[0].setComponents(l - r, u - c, g - f, v - p).normalize(), n[1].setComponents(l + r, u + c, g + f, v + p).normalize(), n[2].setComponents(l + a, u + h, g + m, v + y).normalize(), n[3].setComponents(l - a, u - h, g - m, v - y).normalize(), n[4].setComponents(l - o, u - d, g - _, v - x).normalize(), e === oi) n[5].setComponents(l + o, u + d, g + _, v + x).normalize(); else if (e === Za) n[5].setComponents(o, d, _, x).normalize(); else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e); return this } intersectsObject(t) { if (t.boundingSphere !== void 0) t.boundingSphere === null && t.computeBoundingSphere(), is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld); else { let e = t.geometry; e.boundingSphere === null && e.computeBoundingSphere(), is.copy(e.boundingSphere).applyMatrix4(t.matrixWorld) } return this.intersectsSphere(is) } intersectsSprite(t) { return is.center.set(0, 0, 0), is.radius = .7071067811865476, is.applyMatrix4(t.matrixWorld), this.intersectsSphere(is) } intersectsSphere(t) { let e = this.planes, n = t.center, s = -t.radius; for (let r = 0; r < 6; r++)if (e[r].distanceToPoint(n) < s) return !1; return !0 } intersectsBox(t) { let e = this.planes; for (let n = 0; n < 6; n++) { let s = e[n]; if (Ra.x = s.normal.x > 0 ? t.max.x : t.min.x, Ra.y = s.normal.y > 0 ? t.max.y : t.min.y, Ra.z = s.normal.z > 0 ? t.max.z : t.min.z, s.distanceToPoint(Ra) < 0) return !1 } return !0 } containsPoint(t) { let e = this.planes; for (let n = 0; n < 6; n++)if (e[n].distanceToPoint(t) < 0) return !1; return !0 } clone() { return new this.constructor().copy(this) } }; function Vf() { let i = null, t = !1, e = null, n = null; function s(r, a) { e(r, a), n = i.requestAnimationFrame(s) } return { start: function () { t !== !0 && e !== null && (n = i.requestAnimationFrame(s), t = !0) }, stop: function () { i.cancelAnimationFrame(n), t = !1 }, setAnimationLoop: function (r) { e = r }, setContext: function (r) { i = r } } } function I0(i) { let t = new WeakMap; function e(o, l) { let c = o.array, h = o.usage, d = c.byteLength, u = i.createBuffer(); i.bindBuffer(l, u), i.bufferData(l, c, h), o.onUploadCallback(); let f; if (c instanceof Float32Array) f = i.FLOAT; else if (c instanceof Uint16Array) o.isFloat16BufferAttribute ? f = i.HALF_FLOAT : f = i.UNSIGNED_SHORT; else if (c instanceof Int16Array) f = i.SHORT; else if (c instanceof Uint32Array) f = i.UNSIGNED_INT; else if (c instanceof Int32Array) f = i.INT; else if (c instanceof Int8Array) f = i.BYTE; else if (c instanceof Uint8Array) f = i.UNSIGNED_BYTE; else if (c instanceof Uint8ClampedArray) f = i.UNSIGNED_BYTE; else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c); return { buffer: u, type: f, bytesPerElement: c.BYTES_PER_ELEMENT, version: o.version, size: d } } function n(o, l, c) { let h = l.array, d = l.updateRanges; if (i.bindBuffer(c, o), d.length === 0) i.bufferSubData(c, 0, h); else { d.sort((f, m) => f.start - m.start); let u = 0; for (let f = 1; f < d.length; f++) { let m = d[u], _ = d[f]; _.start <= m.start + m.count + 1 ? m.count = Math.max(m.count, _.start + _.count - m.start) : (++u, d[u] = _) } d.length = u + 1; for (let f = 0, m = d.length; f < m; f++) { let _ = d[f]; i.bufferSubData(c, _.start * h.BYTES_PER_ELEMENT, h, _.start, _.count) } l.clearUpdateRanges() } l.onUploadCallback() } function s(o) { return o.isInterleavedBufferAttribute && (o = o.data), t.get(o) } function r(o) { o.isInterleavedBufferAttribute && (o = o.data); let l = t.get(o); l && (i.deleteBuffer(l.buffer), t.delete(o)) } function a(o, l) { if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) { let h = t.get(o); (!h || h.version < o.version) && t.set(o, { buffer: o.buffer, type: o.type, bytesPerElement: o.elementSize, version: o.version }); return } let c = t.get(o); if (c === void 0) t.set(o, e(o, l)); else if (c.version < o.version) { if (c.size !== o.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported."); n(c.buffer, o, l), c.version = o.version } } return { get: s, remove: r, update: a } } var nr = class i extends Ce { constructor(t = 1, e = 1, n = 1, s = 1) { super(), this.type = "PlaneGeometry", this.parameters = { width: t, height: e, widthSegments: n, heightSegments: s }; let r = t / 2, a = e / 2, o = Math.floor(n), l = Math.floor(s), c = o + 1, h = l + 1, d = t / o, u = e / l, f = [], m = [], _ = [], g = []; for (let p = 0; p < h; p++) { let y = p * u - a; for (let x = 0; x < c; x++) { let v = x * d - r; m.push(v, -y, 0), _.push(0, 0, 1), g.push(x / o), g.push(1 - p / l) } } for (let p = 0; p < l; p++)for (let y = 0; y < o; y++) { let x = y + c * p, v = y + c * (p + 1), A = y + 1 + c * (p + 1), T = y + 1 + c * p; f.push(x, v, T), f.push(v, A, T) } this.setIndex(f), this.setAttribute("position", new _e(m, 3)), this.setAttribute("normal", new _e(_, 3)), this.setAttribute("uv", new _e(g, 2)) } copy(t) { return super.copy(t), this.parameters = Object.assign({}, t.parameters), this } static fromJSON(t) { return new i(t.width, t.height, t.widthSegments, t.heightSegments) } }, L0 =`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, D0 =`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, U0 =`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, N0 =`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, O0 =`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, F0 =`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, k0 =`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, B0 =`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, z0 =`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, V0 =`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, H0 =`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, G0 =`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, W0 =`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, X0 =`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, q0 =`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, $0 =`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, Y0 =`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Z0 =`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, J0 =`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, j0 =`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, K0 =`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Q0 =`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, t_ =`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, e_ =`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, n_ =`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, i_ =`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, s_ =`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, r_ =`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, a_ =`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, o_ =`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, l_ = "gl_FragColor = linearToOutputTexel( gl_FragColor );", c_ =`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, h_ =`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, u_ =`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, d_ =`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, f_ =`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, p_ =`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, m_ =`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, g_ =`#ifdef USE_FOG
	varying float vFogDepth;
#endif`, __ =`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, v_ =`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, y_ =`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, x_ =`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, b_ =`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, S_ =`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, M_ =`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, w_ =`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, E_ =`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, T_ =`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, A_ =`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, C_ =`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, R_ =`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, P_ =`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, I_ =`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, L_ =`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, D_ =`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, U_ =`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, N_ =`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, O_ =`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, F_ =`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, k_ =`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, B_ =`#ifdef USE_MAP
	uniform sampler2D map;
#endif`, z_ =`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, V_ =`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, H_ =`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, G_ =`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, W_ =`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, X_ =`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, q_ =`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, $_ =`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, Y_ =`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Z_ =`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, J_ =`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, j_ =`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, K_ =`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Q_ =`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, tv =`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, ev =`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, nv =`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, iv =`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, sv =`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, rv =`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, av =`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, ov =`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, lv =`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, cv =`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, hv =`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, uv =`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, dv =`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, fv =`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, pv =`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, mv =`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, gv =`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, _v =`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, vv =`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, yv =`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, xv =`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, bv =`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Sv =`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Mv =`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, wv =`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, Ev =`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, Tv =`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, Av =`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Cv =`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Rv =`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, Pv =`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`, Iv =`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Lv =`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Dv =`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Uv =`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Nv =`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Ov =`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Fv =`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, kv =`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, Bv =`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, zv =`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Vv =`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Hv =`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Gv =`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Wv =`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Xv =`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, qv =`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, $v =`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Yv =`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Zv =`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Jv =`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, jv =`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Kv =`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Qv =`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, ty =`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ey =`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, ny =`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, iy =`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, sy =`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ry =`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, ay =`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, oy =`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, ly =`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, cy =`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, hy =`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Vt = { alphahash_fragment: L0, alphahash_pars_fragment: D0, alphamap_fragment: U0, alphamap_pars_fragment: N0, alphatest_fragment: O0, alphatest_pars_fragment: F0, aomap_fragment: k0, aomap_pars_fragment: B0, batching_pars_vertex: z0, batching_vertex: V0, begin_vertex: H0, beginnormal_vertex: G0, bsdfs: W0, iridescence_fragment: X0, bumpmap_pars_fragment: q0, clipping_planes_fragment: $0, clipping_planes_pars_fragment: Y0, clipping_planes_pars_vertex: Z0, clipping_planes_vertex: J0, color_fragment: j0, color_pars_fragment: K0, color_pars_vertex: Q0, color_vertex: t_, common: e_, cube_uv_reflection_fragment: n_, defaultnormal_vertex: i_, displacementmap_pars_vertex: s_, displacementmap_vertex: r_, emissivemap_fragment: a_, emissivemap_pars_fragment: o_, colorspace_fragment: l_, colorspace_pars_fragment: c_, envmap_fragment: h_, envmap_common_pars_fragment: u_, envmap_pars_fragment: d_, envmap_pars_vertex: f_, envmap_physical_pars_fragment: w_, envmap_vertex: p_, fog_vertex: m_, fog_pars_vertex: g_, fog_fragment: __, fog_pars_fragment: v_, gradientmap_pars_fragment: y_, lightmap_pars_fragment: x_, lights_lambert_fragment: b_, lights_lambert_pars_fragment: S_, lights_pars_begin: M_, lights_toon_fragment: E_, lights_toon_pars_fragment: T_, lights_phong_fragment: A_, lights_phong_pars_fragment: C_, lights_physical_fragment: R_, lights_physical_pars_fragment: P_, lights_fragment_begin: I_, lights_fragment_maps: L_, lights_fragment_end: D_, logdepthbuf_fragment: U_, logdepthbuf_pars_fragment: N_, logdepthbuf_pars_vertex: O_, logdepthbuf_vertex: F_, map_fragment: k_, map_pars_fragment: B_, map_particle_fragment: z_, map_particle_pars_fragment: V_, metalnessmap_fragment: H_, metalnessmap_pars_fragment: G_, morphinstance_vertex: W_, morphcolor_vertex: X_, morphnormal_vertex: q_, morphtarget_pars_vertex: $_, morphtarget_vertex: Y_, normal_fragment_begin: Z_, normal_fragment_maps: J_, normal_pars_fragment: j_, normal_pars_vertex: K_, normal_vertex: Q_, normalmap_pars_fragment: tv, clearcoat_normal_fragment_begin: ev, clearcoat_normal_fragment_maps: nv, clearcoat_pars_fragment: iv, iridescence_pars_fragment: sv, opaque_fragment: rv, packing: av, premultiplied_alpha_fragment: ov, project_vertex: lv, dithering_fragment: cv, dithering_pars_fragment: hv, roughnessmap_fragment: uv, roughnessmap_pars_fragment: dv, shadowmap_pars_fragment: fv, shadowmap_pars_vertex: pv, shadowmap_vertex: mv, shadowmask_pars_fragment: gv, skinbase_vertex: _v, skinning_pars_vertex: vv, skinning_vertex: yv, skinnormal_vertex: xv, specularmap_fragment: bv, specularmap_pars_fragment: Sv, tonemapping_fragment: Mv, tonemapping_pars_fragment: wv, transmission_fragment: Ev, transmission_pars_fragment: Tv, uv_pars_fragment: Av, uv_pars_vertex: Cv, uv_vertex: Rv, worldpos_vertex: Pv, background_vert: Iv, background_frag: Lv, backgroundCube_vert: Dv, backgroundCube_frag: Uv, cube_vert: Nv, cube_frag: Ov, depth_vert: Fv, depth_frag: kv, distanceRGBA_vert: Bv, distanceRGBA_frag: zv, equirect_vert: Vv, equirect_frag: Hv, linedashed_vert: Gv, linedashed_frag: Wv, meshbasic_vert: Xv, meshbasic_frag: qv, meshlambert_vert: $v, meshlambert_frag: Yv, meshmatcap_vert: Zv, meshmatcap_frag: Jv, meshnormal_vert: jv, meshnormal_frag: Kv, meshphong_vert: Qv, meshphong_frag: ty, meshphysical_vert: ey, meshphysical_frag: ny, meshtoon_vert: iy, meshtoon_frag: sy, points_vert: ry, points_frag: ay, shadow_vert: oy, shadow_frag: ly, sprite_vert: cy, sprite_frag: hy }, ht = { common: { diffuse: { value: new Ht(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new kt }, alphaMap: { value: null }, alphaMapTransform: { value: new kt }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new kt } }, envmap: { envMap: { value: null }, envMapRotation: { value: new kt }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: .98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new kt } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new kt } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new kt }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new kt }, normalScale: { value: new Xt(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new kt }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new kt } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new kt } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new kt } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Ht(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Ht(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new kt }, alphaTest: { value: 0 }, uvTransform: { value: new kt } }, sprite: { diffuse: { value: new Ht(16777215) }, opacity: { value: 1 }, center: { value: new Xt(.5, .5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new kt }, alphaMap: { value: null }, alphaMapTransform: { value: new kt }, alphaTest: { value: 0 } } }, Vn = { basic: { uniforms: $e([ht.common, ht.specularmap, ht.envmap, ht.aomap, ht.lightmap, ht.fog]), vertexShader: Vt.meshbasic_vert, fragmentShader: Vt.meshbasic_frag }, lambert: { uniforms: $e([ht.common, ht.specularmap, ht.envmap, ht.aomap, ht.lightmap, ht.emissivemap, ht.bumpmap, ht.normalmap, ht.displacementmap, ht.fog, ht.lights, { emissive: { value: new Ht(0) } }]), vertexShader: Vt.meshlambert_vert, fragmentShader: Vt.meshlambert_frag }, phong: { uniforms: $e([ht.common, ht.specularmap, ht.envmap, ht.aomap, ht.lightmap, ht.emissivemap, ht.bumpmap, ht.normalmap, ht.displacementmap, ht.fog, ht.lights, { emissive: { value: new Ht(0) }, specular: { value: new Ht(1118481) }, shininess: { value: 30 } }]), vertexShader: Vt.meshphong_vert, fragmentShader: Vt.meshphong_frag }, standard: { uniforms: $e([ht.common, ht.envmap, ht.aomap, ht.lightmap, ht.emissivemap, ht.bumpmap, ht.normalmap, ht.displacementmap, ht.roughnessmap, ht.metalnessmap, ht.fog, ht.lights, { emissive: { value: new Ht(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Vt.meshphysical_vert, fragmentShader: Vt.meshphysical_frag }, toon: { uniforms: $e([ht.common, ht.aomap, ht.lightmap, ht.emissivemap, ht.bumpmap, ht.normalmap, ht.displacementmap, ht.gradientmap, ht.fog, ht.lights, { emissive: { value: new Ht(0) } }]), vertexShader: Vt.meshtoon_vert, fragmentShader: Vt.meshtoon_frag }, matcap: { uniforms: $e([ht.common, ht.bumpmap, ht.normalmap, ht.displacementmap, ht.fog, { matcap: { value: null } }]), vertexShader: Vt.meshmatcap_vert, fragmentShader: Vt.meshmatcap_frag }, points: { uniforms: $e([ht.points, ht.fog]), vertexShader: Vt.points_vert, fragmentShader: Vt.points_frag }, dashed: { uniforms: $e([ht.common, ht.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Vt.linedashed_vert, fragmentShader: Vt.linedashed_frag }, depth: { uniforms: $e([ht.common, ht.displacementmap]), vertexShader: Vt.depth_vert, fragmentShader: Vt.depth_frag }, normal: { uniforms: $e([ht.common, ht.bumpmap, ht.normalmap, ht.displacementmap, { opacity: { value: 1 } }]), vertexShader: Vt.meshnormal_vert, fragmentShader: Vt.meshnormal_frag }, sprite: { uniforms: $e([ht.sprite, ht.fog]), vertexShader: Vt.sprite_vert, fragmentShader: Vt.sprite_frag }, background: { uniforms: { uvTransform: { value: new kt }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Vt.background_vert, fragmentShader: Vt.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new kt } }, vertexShader: Vt.backgroundCube_vert, fragmentShader: Vt.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Vt.cube_vert, fragmentShader: Vt.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Vt.equirect_vert, fragmentShader: Vt.equirect_frag }, distanceRGBA: { uniforms: $e([ht.common, ht.displacementmap, { referencePosition: { value: new k }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Vt.distanceRGBA_vert, fragmentShader: Vt.distanceRGBA_frag }, shadow: { uniforms: $e([ht.lights, ht.fog, { color: { value: new Ht(0) }, opacity: { value: 1 } }]), vertexShader: Vt.shadow_vert, fragmentShader: Vt.shadow_frag } }; Vn.physical = { uniforms: $e([Vn.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new kt }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new kt }, clearcoatNormalScale: { value: new Xt(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new kt }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new kt }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new kt }, sheen: { value: 0 }, sheenColor: { value: new Ht(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new kt }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new kt }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new kt }, transmissionSamplerSize: { value: new Xt }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new kt }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Ht(0) }, specularColor: { value: new Ht(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new kt }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new kt }, anisotropyVector: { value: new Xt }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new kt } }]), vertexShader: Vt.meshphysical_vert, fragmentShader: Vt.meshphysical_frag }; var Pa = { r: 0, b: 0, g: 0 }, ss = new ui, uy = new be; function dy(i, t, e, n, s, r, a) { let o = new Ht(0), l = r === !0 ? 0 : 1, c, h, d = null, u = 0, f = null; function m(y) { let x = y.isScene === !0 ? y.background : null; return x && x.isTexture && (x = (y.backgroundBlurriness > 0 ? e : t).get(x)), x } function _(y) { let x = !1, v = m(y); v === null ? p(o, l) : v && v.isColor && (p(v, 1), x = !0); let A = i.xr.getEnvironmentBlendMode(); A === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : A === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (i.autoClear || x) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil)) } function g(y, x) { let v = m(x); v && (v.isCubeTexture || v.mapping === vo) ? (h === void 0 && (h = new sn(new Bi(1, 1, 1), new bn({ name: "BackgroundCubeMaterial", uniforms: er(Vn.backgroundCube.uniforms), vertexShader: Vn.backgroundCube.vertexShader, fragmentShader: Vn.backgroundCube.fragmentShader, side: rn, depthTest: !1, depthWrite: !1, fog: !1 })), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function (A, T, E) { this.matrixWorld.copyPosition(E.matrixWorld) }, Object.defineProperty(h.material, "envMap", { get: function () { return this.uniforms.envMap.value } }), s.update(h)), ss.copy(x.backgroundRotation), ss.x *= -1, ss.y *= -1, ss.z *= -1, v.isCubeTexture && v.isRenderTargetTexture === !1 && (ss.y *= -1, ss.z *= -1), h.material.uniforms.envMap.value = v, h.material.uniforms.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = x.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = x.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(uy.makeRotationFromEuler(ss)), h.material.toneMapped = $t.getTransfer(v.colorSpace) !== ie, (d !== v || u !== v.version || f !== i.toneMapping) && (h.material.needsUpdate = !0, d = v, u = v.version, f = i.toneMapping), h.layers.enableAll(), y.unshift(h, h.geometry, h.material, 0, 0, null)) : v && v.isTexture && (c === void 0 && (c = new sn(new nr(2, 2), new bn({ name: "BackgroundMaterial", uniforms: er(Vn.background.uniforms), vertexShader: Vn.background.vertexShader, fragmentShader: Vn.background.fragmentShader, side: Ni, depthTest: !1, depthWrite: !1, fog: !1 })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function () { return this.uniforms.t2D.value } }), s.update(c)), c.material.uniforms.t2D.value = v, c.material.uniforms.backgroundIntensity.value = x.backgroundIntensity, c.material.toneMapped = $t.getTransfer(v.colorSpace) !== ie, v.matrixAutoUpdate === !0 && v.updateMatrix(), c.material.uniforms.uvTransform.value.copy(v.matrix), (d !== v || u !== v.version || f !== i.toneMapping) && (c.material.needsUpdate = !0, d = v, u = v.version, f = i.toneMapping), c.layers.enableAll(), y.unshift(c, c.geometry, c.material, 0, 0, null)) } function p(y, x) { y.getRGB(Pa, zf(i)), n.buffers.color.setClear(Pa.r, Pa.g, Pa.b, x, a) } return { getClearColor: function () { return o }, setClearColor: function (y, x = 1) { o.set(y), l = x, p(o, l) }, getClearAlpha: function () { return l }, setClearAlpha: function (y) { l = y, p(o, l) }, render: _, addToRenderList: g } } function fy(i, t) { let e = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, s = u(null), r = s, a = !1; function o(S, P, H, z, W) { let U = !1, I = d(z, H, P); r !== I && (r = I, c(r.object)), U = f(S, z, H, W), U && m(S, z, H, W), W !== null && t.update(W, i.ELEMENT_ARRAY_BUFFER), (U || a) && (a = !1, v(S, P, H, z), W !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(W).buffer)) } function l() { return i.createVertexArray() } function c(S) { return i.bindVertexArray(S) } function h(S) { return i.deleteVertexArray(S) } function d(S, P, H) { let z = H.wireframe === !0, W = n[S.id]; W === void 0 && (W = {}, n[S.id] = W); let U = W[P.id]; U === void 0 && (U = {}, W[P.id] = U); let I = U[z]; return I === void 0 && (I = u(l()), U[z] = I), I } function u(S) { let P = [], H = [], z = []; for (let W = 0; W < e; W++)P[W] = 0, H[W] = 0, z[W] = 0; return { geometry: null, program: null, wireframe: !1, newAttributes: P, enabledAttributes: H, attributeDivisors: z, object: S, attributes: {}, index: null } } function f(S, P, H, z) { let W = r.attributes, U = P.attributes, I = 0, G = H.getAttributes(); for (let D in G) if (G[D].location >= 0) { let j = W[D], dt = U[D]; if (dt === void 0 && (D === "instanceMatrix" && S.instanceMatrix && (dt = S.instanceMatrix), D === "instanceColor" && S.instanceColor && (dt = S.instanceColor)), j === void 0 || j.attribute !== dt || dt && j.data !== dt.data) return !0; I++ } return r.attributesNum !== I || r.index !== z } function m(S, P, H, z) { let W = {}, U = P.attributes, I = 0, G = H.getAttributes(); for (let D in G) if (G[D].location >= 0) { let j = U[D]; j === void 0 && (D === "instanceMatrix" && S.instanceMatrix && (j = S.instanceMatrix), D === "instanceColor" && S.instanceColor && (j = S.instanceColor)); let dt = {}; dt.attribute = j, j && j.data && (dt.data = j.data), W[D] = dt, I++ } r.attributes = W, r.attributesNum = I, r.index = z } function _() { let S = r.newAttributes; for (let P = 0, H = S.length; P < H; P++)S[P] = 0 } function g(S) { p(S, 0) } function p(S, P) { let H = r.newAttributes, z = r.enabledAttributes, W = r.attributeDivisors; H[S] = 1, z[S] === 0 && (i.enableVertexAttribArray(S), z[S] = 1), W[S] !== P && (i.vertexAttribDivisor(S, P), W[S] = P) } function y() { let S = r.newAttributes, P = r.enabledAttributes; for (let H = 0, z = P.length; H < z; H++)P[H] !== S[H] && (i.disableVertexAttribArray(H), P[H] = 0) } function x(S, P, H, z, W, U, I) { I === !0 ? i.vertexAttribIPointer(S, P, H, W, U) : i.vertexAttribPointer(S, P, H, z, W, U) } function v(S, P, H, z) { _(); let W = z.attributes, U = H.getAttributes(), I = P.defaultAttributeValues; for (let G in U) { let D = U[G]; if (D.location >= 0) { let tt = W[G]; if (tt === void 0 && (G === "instanceMatrix" && S.instanceMatrix && (tt = S.instanceMatrix), G === "instanceColor" && S.instanceColor && (tt = S.instanceColor)), tt !== void 0) { let j = tt.normalized, dt = tt.itemSize, At = t.get(tt); if (At === void 0) continue; let Ut = At.buffer, Z = At.type, et = At.bytesPerElement, at = Z === i.INT || Z === i.UNSIGNED_INT || tt.gpuType === Rh; if (tt.isInterleavedBufferAttribute) { let lt = tt.data, vt = lt.stride, Rt = tt.offset; if (lt.isInstancedInterleavedBuffer) { for (let Nt = 0; Nt < D.locationSize; Nt++)p(D.location + Nt, lt.meshPerAttribute); S.isInstancedMesh !== !0 && z._maxInstanceCount === void 0 && (z._maxInstanceCount = lt.meshPerAttribute * lt.count) } else for (let Nt = 0; Nt < D.locationSize; Nt++)g(D.location + Nt); i.bindBuffer(i.ARRAY_BUFFER, Ut); for (let Nt = 0; Nt < D.locationSize; Nt++)x(D.location + Nt, dt / D.locationSize, Z, j, vt * et, (Rt + dt / D.locationSize * Nt) * et, at) } else { if (tt.isInstancedBufferAttribute) { for (let lt = 0; lt < D.locationSize; lt++)p(D.location + lt, tt.meshPerAttribute); S.isInstancedMesh !== !0 && z._maxInstanceCount === void 0 && (z._maxInstanceCount = tt.meshPerAttribute * tt.count) } else for (let lt = 0; lt < D.locationSize; lt++)g(D.location + lt); i.bindBuffer(i.ARRAY_BUFFER, Ut); for (let lt = 0; lt < D.locationSize; lt++)x(D.location + lt, dt / D.locationSize, Z, j, dt * et, dt / D.locationSize * lt * et, at) } } else if (I !== void 0) { let j = I[G]; if (j !== void 0) switch (j.length) { case 2: i.vertexAttrib2fv(D.location, j); break; case 3: i.vertexAttrib3fv(D.location, j); break; case 4: i.vertexAttrib4fv(D.location, j); break; default: i.vertexAttrib1fv(D.location, j) } } } } y() } function A() { C(); for (let S in n) { let P = n[S]; for (let H in P) { let z = P[H]; for (let W in z) h(z[W].object), delete z[W]; delete P[H] } delete n[S] } } function T(S) { if (n[S.id] === void 0) return; let P = n[S.id]; for (let H in P) { let z = P[H]; for (let W in z) h(z[W].object), delete z[W]; delete P[H] } delete n[S.id] } function E(S) { for (let P in n) { let H = n[P]; if (H[S.id] === void 0) continue; let z = H[S.id]; for (let W in z) h(z[W].object), delete z[W]; delete H[S.id] } } function C() { b(), a = !0, r !== s && (r = s, c(r.object)) } function b() { s.geometry = null, s.program = null, s.wireframe = !1 } return { setup: o, reset: C, resetDefaultState: b, dispose: A, releaseStatesOfGeometry: T, releaseStatesOfProgram: E, initAttributes: _, enableAttribute: g, disableUnusedAttributes: y } } function py(i, t, e) { let n; function s(c) { n = c } function r(c, h) { i.drawArrays(n, c, h), e.update(h, n, 1) } function a(c, h, d) { d !== 0 && (i.drawArraysInstanced(n, c, h, d), e.update(h, n, d)) } function o(c, h, d) { if (d === 0) return; t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, h, 0, d); let f = 0; for (let m = 0; m < d; m++)f += h[m]; e.update(f, n, 1) } function l(c, h, d, u) { if (d === 0) return; let f = t.get("WEBGL_multi_draw"); if (f === null) for (let m = 0; m < c.length; m++)a(c[m], h[m], u[m]); else { f.multiDrawArraysInstancedWEBGL(n, c, 0, h, 0, u, 0, d); let m = 0; for (let _ = 0; _ < d; _++)m += h[_] * u[_]; e.update(m, n, 1) } } this.setMode = s, this.render = r, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = l } function my(i, t, e, n) { let s; function r() { if (s !== void 0) return s; if (t.has("EXT_texture_filter_anisotropic") === !0) { let E = t.get("EXT_texture_filter_anisotropic"); s = i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT) } else s = 0; return s } function a(E) { return !(E !== Pn && n.convert(E) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)) } function o(E) { let C = E === zr && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float")); return !(E !== ci && n.convert(E) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && E !== ai && !C) } function l(E) { if (E === "highp") { if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0) return "highp"; E = "mediump" } return E === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp" } let c = e.precision !== void 0 ? e.precision : "highp", h = l(c); h !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", h, "instead."), c = h); let d = e.logarithmicDepthBuffer === !0, u = e.reverseDepthBuffer === !0 && t.has("EXT_clip_control"), f = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), m = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), _ = i.getParameter(i.MAX_TEXTURE_SIZE), g = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), p = i.getParameter(i.MAX_VERTEX_ATTRIBS), y = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), x = i.getParameter(i.MAX_VARYING_VECTORS), v = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), A = m > 0, T = i.getParameter(i.MAX_SAMPLES); return { isWebGL2: !0, getMaxAnisotropy: r, getMaxPrecision: l, textureFormatReadable: a, textureTypeReadable: o, precision: c, logarithmicDepthBuffer: d, reverseDepthBuffer: u, maxTextures: f, maxVertexTextures: m, maxTextureSize: _, maxCubemapSize: g, maxAttributes: p, maxVertexUniforms: y, maxVaryings: x, maxFragmentUniforms: v, vertexTextures: A, maxSamples: T } } function gy(i) { let t = this, e = null, n = 0, s = !1, r = !1, a = new ri, o = new kt, l = { value: null, needsUpdate: !1 }; this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function (d, u) { let f = d.length !== 0 || u || n !== 0 || s; return s = u, n = d.length, f }, this.beginShadows = function () { r = !0, h(null) }, this.endShadows = function () { r = !1 }, this.setGlobalState = function (d, u) { e = h(d, u, 0) }, this.setState = function (d, u, f) { let m = d.clippingPlanes, _ = d.clipIntersection, g = d.clipShadows, p = i.get(d); if (!s || m === null || m.length === 0 || r && !g) r ? h(null) : c(); else { let y = r ? 0 : n, x = y * 4, v = p.clippingState || null; l.value = v, v = h(m, u, x, f); for (let A = 0; A !== x; ++A)v[A] = e[A]; p.clippingState = v, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += y } }; function c() { l.value !== e && (l.value = e, l.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0 } function h(d, u, f, m) { let _ = d !== null ? d.length : 0, g = null; if (_ !== 0) { if (g = l.value, m !== !0 || g === null) { let p = f + _ * 4, y = u.matrixWorldInverse; o.getNormalMatrix(y), (g === null || g.length < p) && (g = new Float32Array(p)); for (let x = 0, v = f; x !== _; ++x, v += 4)a.copy(d[x]).applyMatrix4(y, o), a.normal.toArray(g, v), g[v + 3] = a.constant } l.value = g, l.needsUpdate = !0 } return t.numPlanes = _, t.numIntersection = 0, g } } function _y(i) { let t = new WeakMap; function e(a, o) { return o === yc ? a.mapping = js : o === xc && (a.mapping = Ks), a } function n(a) { if (a && a.isTexture) { let o = a.mapping; if (o === yc || o === xc) if (t.has(a)) { let l = t.get(a).texture; return e(l, a.mapping) } else { let l = a.image; if (l && l.height > 0) { let c = new eh(l.height); return c.fromEquirectangularTexture(i, a), t.set(a, c), a.addEventListener("dispose", s), e(c.texture, a.mapping) } else return null } } return a } function s(a) { let o = a.target; o.removeEventListener("dispose", s); let l = t.get(o); l !== void 0 && (t.delete(o), l.dispose()) } function r() { t = new WeakMap } return { get: n, dispose: r } } var nh = class extends no { constructor(t = -1, e = 1, n = 1, s = -1, r = .1, a = 2e3) { super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = s, this.near = r, this.far = a, this.updateProjectionMatrix() } copy(t, e) { return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = t.view === null ? null : Object.assign({}, t.view), this } setViewOffset(t, e, n, s, r, a) { this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = s, this.view.width = r, this.view.height = a, this.updateProjectionMatrix() } clearViewOffset() { this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix() } updateProjectionMatrix() { let t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, s = (this.top + this.bottom) / 2, r = n - t, a = n + t, o = s + e, l = s - e; if (this.view !== null && this.view.enabled) { let c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom; r += c * this.view.offsetX, a = r + c * this.view.width, o -= h * this.view.offsetY, l = o - h * this.view.height } this.projectionMatrix.makeOrthographic(r, a, o, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert() } toJSON(t) { let e = super.toJSON(t); return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e } }, qs = 4, $d = [.125, .215, .35, .446, .526, .582], ls = 20, Ql = new nh, Yd = new Ht, tc = null, ec = 0, nc = 0, ic = !1, as = (1 + Math.sqrt(5)) / 2, Xs = 1 / as, Zd = [new k(-as, Xs, 0), new k(as, Xs, 0), new k(-Xs, 0, as), new k(Xs, 0, as), new k(0, as, -Xs), new k(0, as, Xs), new k(-1, 1, -1), new k(1, 1, -1), new k(-1, 1, 1), new k(1, 1, 1)], ro = class { constructor(t) { this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial) } fromScene(t, e = 0, n = .1, s = 100) { tc = this._renderer.getRenderTarget(), ec = this._renderer.getActiveCubeFace(), nc = this._renderer.getActiveMipmapLevel(), ic = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(256); let r = this._allocateTargets(); return r.depthBuffer = !0, this._sceneToCubeUV(t, n, s, r), e > 0 && this._blur(r, 0, 0, e), this._applyPMREM(r), this._cleanup(r), r } fromEquirectangular(t, e = null) { return this._fromTexture(t, e) } fromCubemap(t, e = null) { return this._fromTexture(t, e) } compileCubemapShader() { this._cubemapMaterial === null && (this._cubemapMaterial = Kd(), this._compileMaterial(this._cubemapMaterial)) } compileEquirectangularShader() { this._equirectMaterial === null && (this._equirectMaterial = jd(), this._compileMaterial(this._equirectMaterial)) } dispose() { this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose() } _setSize(t) { this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax) } _dispose() { this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose(); for (let t = 0; t < this._lodPlanes.length; t++)this._lodPlanes[t].dispose() } _cleanup(t) { this._renderer.setRenderTarget(tc, ec, nc), this._renderer.xr.enabled = ic, t.scissorTest = !1, Ia(t, 0, 0, t.width, t.height) } _fromTexture(t, e) { t.mapping === js || t.mapping === Ks ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), tc = this._renderer.getRenderTarget(), ec = this._renderer.getActiveCubeFace(), nc = this._renderer.getActiveMipmapLevel(), ic = this._renderer.xr.enabled, this._renderer.xr.enabled = !1; let n = e || this._allocateTargets(); return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n } _allocateTargets() { let t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = { magFilter: Hn, minFilter: Hn, generateMipmaps: !1, type: zr, format: Pn, colorSpace: ar, depthBuffer: !1 }, s = Jd(t, e, n); if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) { this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Jd(t, e, n); let { _lodMax: r } = this; ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = vy(r)), this._blurMaterial = yy(r, t, e) } return s } _compileMaterial(t) { let e = new sn(this._lodPlanes[0], t); this._renderer.compile(e, Ql) } _sceneToCubeUV(t, e, n, s) { let o = new Ye(90, 1, e, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], h = this._renderer, d = h.autoClear, u = h.toneMapping; h.getClearColor(Yd), h.toneMapping = Ui, h.autoClear = !1; let f = new ps({ name: "PMREM.Background", side: rn, depthWrite: !1, depthTest: !1 }), m = new sn(new Bi, f), _ = !1, g = t.background; g ? g.isColor && (f.color.copy(g), t.background = null, _ = !0) : (f.color.copy(Yd), _ = !0); for (let p = 0; p < 6; p++) { let y = p % 3; y === 0 ? (o.up.set(0, l[p], 0), o.lookAt(c[p], 0, 0)) : y === 1 ? (o.up.set(0, 0, l[p]), o.lookAt(0, c[p], 0)) : (o.up.set(0, l[p], 0), o.lookAt(0, 0, c[p])); let x = this._cubeSize; Ia(s, y * x, p > 2 ? x : 0, x, x), h.setRenderTarget(s), _ && h.render(m, o), h.render(t, o) } m.geometry.dispose(), m.material.dispose(), h.toneMapping = u, h.autoClear = d, t.background = g } _textureToCubeUV(t, e) { let n = this._renderer, s = t.mapping === js || t.mapping === Ks; s ? (this._cubemapMaterial === null && (this._cubemapMaterial = Kd()), this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = jd()); let r = s ? this._cubemapMaterial : this._equirectMaterial, a = new sn(this._lodPlanes[0], r), o = r.uniforms; o.envMap.value = t; let l = this._cubeSize; Ia(e, 0, 0, 3 * l, 2 * l), n.setRenderTarget(e), n.render(a, Ql) } _applyPMREM(t) { let e = this._renderer, n = e.autoClear; e.autoClear = !1; let s = this._lodPlanes.length; for (let r = 1; r < s; r++) { let a = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), o = Zd[(s - r - 1) % Zd.length]; this._blur(t, r - 1, r, a, o) } e.autoClear = n } _blur(t, e, n, s, r) { let a = this._pingPongRenderTarget; this._halfBlur(t, a, e, n, s, "latitudinal", r), this._halfBlur(a, t, n, n, s, "longitudinal", r) } _halfBlur(t, e, n, s, r, a, o) { let l = this._renderer, c = this._blurMaterial; a !== "latitudinal" && a !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!"); let h = 3, d = new sn(this._lodPlanes[s], c), u = c.uniforms, f = this._sizeLods[n] - 1, m = isFinite(r) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * ls - 1), _ = r / m, g = isFinite(r) ? 1 + Math.floor(h * _) : ls; g > ls && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ls}`); let p = [], y = 0; for (let E = 0; E < ls; ++E) { let C = E / _, b = Math.exp(-C * C / 2); p.push(b), E === 0 ? y += b : E < g && (y += 2 * b) } for (let E = 0; E < p.length; E++)p[E] = p[E] / y; u.envMap.value = t.texture, u.samples.value = g, u.weights.value = p, u.latitudinal.value = a === "latitudinal", o && (u.poleAxis.value = o); let { _lodMax: x } = this; u.dTheta.value = m, u.mipInt.value = x - n; let v = this._sizeLods[s], A = 3 * v * (s > x - qs ? s - x + qs : 0), T = 4 * (this._cubeSize - v); Ia(e, A, T, 3 * v, 2 * v), l.setRenderTarget(e), l.render(d, Ql) } }; function vy(i) { let t = [], e = [], n = [], s = i, r = i - qs + 1 + $d.length; for (let a = 0; a < r; a++) { let o = Math.pow(2, s); e.push(o); let l = 1 / o; a > i - qs ? l = $d[a - i + qs - 1] : a === 0 && (l = 0), n.push(l); let c = 1 / (o - 2), h = -c, d = 1 + c, u = [h, h, d, h, d, d, h, h, d, d, h, d], f = 6, m = 6, _ = 3, g = 2, p = 1, y = new Float32Array(_ * m * f), x = new Float32Array(g * m * f), v = new Float32Array(p * m * f); for (let T = 0; T < f; T++) { let E = T % 3 * 2 / 3 - 1, C = T > 2 ? 0 : -1, b = [E, C, 0, E + 2 / 3, C, 0, E + 2 / 3, C + 1, 0, E, C, 0, E + 2 / 3, C + 1, 0, E, C + 1, 0]; y.set(b, _ * m * T), x.set(u, g * m * T); let S = [T, T, T, T, T, T]; v.set(S, p * m * T) } let A = new Ce; A.setAttribute("position", new Ee(y, _)), A.setAttribute("uv", new Ee(x, g)), A.setAttribute("faceIndex", new Ee(v, p)), t.push(A), s > qs && s-- } return { lodPlanes: t, sizeLods: e, sigmas: n } } function Jd(i, t, e) { let n = new hi(i, t, e); return n.texture.mapping = vo, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n } function Ia(i, t, e, n, s) { i.viewport.set(t, e, n, s), i.scissor.set(t, e, n, s) } function yy(i, t, e) {
		let n = new Float32Array(ls), s = new k(0, 1, 0); return new bn({
			name: "SphericalGaussianBlur", defines: { n: ls, CUBEUV_TEXEL_WIDTH: 1 / t, CUBEUV_TEXEL_HEIGHT: 1 / e, CUBEUV_MAX_MIP: `${i}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: !1 }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: s } }, vertexShader: Nh(), fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: Li, depthTest: !1, depthWrite: !1
		})
	} function jd() {
		return new bn({
			name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: Nh(), fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: Li, depthTest: !1, depthWrite: !1
		})
	} function Kd() {
		return new bn({
			name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: Nh(), fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: Li, depthTest: !1, depthWrite: !1
		})
	} function Nh() {
		return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`} function xy(i) { let t = new WeakMap, e = null; function n(o) { if (o && o.isTexture) { let l = o.mapping, c = l === yc || l === xc, h = l === js || l === Ks; if (c || h) { let d = t.get(o), u = d !== void 0 ? d.texture.pmremVersion : 0; if (o.isRenderTargetTexture && o.pmremVersion !== u) return e === null && (e = new ro(i)), d = c ? e.fromEquirectangular(o, d) : e.fromCubemap(o, d), d.texture.pmremVersion = o.pmremVersion, t.set(o, d), d.texture; if (d !== void 0) return d.texture; { let f = o.image; return c && f && f.height > 0 || h && f && s(f) ? (e === null && (e = new ro(i)), d = c ? e.fromEquirectangular(o) : e.fromCubemap(o), d.texture.pmremVersion = o.pmremVersion, t.set(o, d), o.addEventListener("dispose", r), d.texture) : null } } } return o } function s(o) { let l = 0, c = 6; for (let h = 0; h < c; h++)o[h] !== void 0 && l++; return l === c } function r(o) { let l = o.target; l.removeEventListener("dispose", r); let c = t.get(l); c !== void 0 && (t.delete(l), c.dispose()) } function a() { t = new WeakMap, e !== null && (e.dispose(), e = null) } return { get: n, dispose: a } } function by(i) { let t = {}; function e(n) { if (t[n] !== void 0) return t[n]; let s; switch (n) { case "WEBGL_depth_texture": s = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture"); break; case "EXT_texture_filter_anisotropic": s = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic"); break; case "WEBGL_compressed_texture_s3tc": s = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"); break; case "WEBGL_compressed_texture_pvrtc": s = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"); break; default: s = i.getExtension(n) }return t[n] = s, s } return { has: function (n) { return e(n) !== null }, init: function () { e("EXT_color_buffer_float"), e("WEBGL_clip_cull_distance"), e("OES_texture_float_linear"), e("EXT_color_buffer_half_float"), e("WEBGL_multisampled_render_to_texture"), e("WEBGL_render_shared_exponent") }, get: function (n) { let s = e(n); return s === null && Ur("THREE.WebGLRenderer: " + n + " extension not supported."), s } } } function Sy(i, t, e, n) { let s = {}, r = new WeakMap; function a(d) { let u = d.target; u.index !== null && t.remove(u.index); for (let m in u.attributes) t.remove(u.attributes[m]); for (let m in u.morphAttributes) { let _ = u.morphAttributes[m]; for (let g = 0, p = _.length; g < p; g++)t.remove(_[g]) } u.removeEventListener("dispose", a), delete s[u.id]; let f = r.get(u); f && (t.remove(f), r.delete(u)), n.releaseStatesOfGeometry(u), u.isInstancedBufferGeometry === !0 && delete u._maxInstanceCount, e.memory.geometries-- } function o(d, u) { return s[u.id] === !0 || (u.addEventListener("dispose", a), s[u.id] = !0, e.memory.geometries++), u } function l(d) { let u = d.attributes; for (let m in u) t.update(u[m], i.ARRAY_BUFFER); let f = d.morphAttributes; for (let m in f) { let _ = f[m]; for (let g = 0, p = _.length; g < p; g++)t.update(_[g], i.ARRAY_BUFFER) } } function c(d) { let u = [], f = d.index, m = d.attributes.position, _ = 0; if (f !== null) { let y = f.array; _ = f.version; for (let x = 0, v = y.length; x < v; x += 3) { let A = y[x + 0], T = y[x + 1], E = y[x + 2]; u.push(A, T, T, E, E, A) } } else if (m !== void 0) { let y = m.array; _ = m.version; for (let x = 0, v = y.length / 3 - 1; x < v; x += 3) { let A = x + 0, T = x + 1, E = x + 2; u.push(A, T, T, E, E, A) } } else return; let g = new (kf(u) ? eo : to)(u, 1); g.version = _; let p = r.get(d); p && t.remove(p), r.set(d, g) } function h(d) { let u = r.get(d); if (u) { let f = d.index; f !== null && u.version < f.version && c(d) } else c(d); return r.get(d) } return { get: o, update: l, getWireframeAttribute: h } } function My(i, t, e) { let n; function s(u) { n = u } let r, a; function o(u) { r = u.type, a = u.bytesPerElement } function l(u, f) { i.drawElements(n, f, r, u * a), e.update(f, n, 1) } function c(u, f, m) { m !== 0 && (i.drawElementsInstanced(n, f, r, u * a, m), e.update(f, n, m)) } function h(u, f, m) { if (m === 0) return; t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, f, 0, r, u, 0, m); let g = 0; for (let p = 0; p < m; p++)g += f[p]; e.update(g, n, 1) } function d(u, f, m, _) { if (m === 0) return; let g = t.get("WEBGL_multi_draw"); if (g === null) for (let p = 0; p < u.length; p++)c(u[p] / a, f[p], _[p]); else { g.multiDrawElementsInstancedWEBGL(n, f, 0, r, u, 0, _, 0, m); let p = 0; for (let y = 0; y < m; y++)p += f[y] * _[y]; e.update(p, n, 1) } } this.setMode = s, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = h, this.renderMultiDrawInstances = d } function wy(i) { let t = { geometries: 0, textures: 0 }, e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 }; function n(r, a, o) { switch (e.calls++, a) { case i.TRIANGLES: e.triangles += o * (r / 3); break; case i.LINES: e.lines += o * (r / 2); break; case i.LINE_STRIP: e.lines += o * (r - 1); break; case i.LINE_LOOP: e.lines += o * r; break; case i.POINTS: e.points += o * r; break; default: console.error("THREE.WebGLInfo: Unknown draw mode:", a); break } } function s() { e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0 } return { memory: t, render: e, programs: null, autoReset: !0, reset: s, update: n } } function Ey(i, t, e) { let n = new WeakMap, s = new we; function r(a, o, l) { let c = a.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, d = h !== void 0 ? h.length : 0, u = n.get(o); if (u === void 0 || u.count !== d) { let b = function () { E.dispose(), n.delete(o), o.removeEventListener("dispose", b) }; u !== void 0 && u.texture.dispose(); let f = o.morphAttributes.position !== void 0, m = o.morphAttributes.normal !== void 0, _ = o.morphAttributes.color !== void 0, g = o.morphAttributes.position || [], p = o.morphAttributes.normal || [], y = o.morphAttributes.color || [], x = 0; f === !0 && (x = 1), m === !0 && (x = 2), _ === !0 && (x = 3); let v = o.attributes.position.count * x, A = 1; v > t.maxTextureSize && (A = Math.ceil(v / t.maxTextureSize), v = t.maxTextureSize); let T = new Float32Array(v * A * 4 * d), E = new Ka(T, v, A, d); E.type = ai, E.needsUpdate = !0; let C = x * 4; for (let S = 0; S < d; S++) { let P = g[S], H = p[S], z = y[S], W = v * A * 4 * S; for (let U = 0; U < P.count; U++) { let I = U * C; f === !0 && (s.fromBufferAttribute(P, U), T[W + I + 0] = s.x, T[W + I + 1] = s.y, T[W + I + 2] = s.z, T[W + I + 3] = 0), m === !0 && (s.fromBufferAttribute(H, U), T[W + I + 4] = s.x, T[W + I + 5] = s.y, T[W + I + 6] = s.z, T[W + I + 7] = 0), _ === !0 && (s.fromBufferAttribute(z, U), T[W + I + 8] = s.x, T[W + I + 9] = s.y, T[W + I + 10] = s.z, T[W + I + 11] = z.itemSize === 4 ? s.w : 1) } } u = { count: d, texture: E, size: new Xt(v, A) }, n.set(o, u), o.addEventListener("dispose", b) } if (a.isInstancedMesh === !0 && a.morphTexture !== null) l.getUniforms().setValue(i, "morphTexture", a.morphTexture, e); else { let f = 0; for (let _ = 0; _ < c.length; _++)f += c[_]; let m = o.morphTargetsRelative ? 1 : 1 - f; l.getUniforms().setValue(i, "morphTargetBaseInfluence", m), l.getUniforms().setValue(i, "morphTargetInfluences", c) } l.getUniforms().setValue(i, "morphTargetsTexture", u.texture, e), l.getUniforms().setValue(i, "morphTargetsTextureSize", u.size) } return { update: r } } function Ty(i, t, e, n) { let s = new WeakMap; function r(l) { let c = n.render.frame, h = l.geometry, d = t.get(l, h); if (s.get(d) !== c && (t.update(d), s.set(d, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === !1 && l.addEventListener("dispose", o), s.get(l) !== c && (e.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && e.update(l.instanceColor, i.ARRAY_BUFFER), s.set(l, c))), l.isSkinnedMesh) { let u = l.skeleton; s.get(u) !== c && (u.update(), s.set(u, c)) } return d } function a() { s = new WeakMap } function o(l) { let c = l.target; c.removeEventListener("dispose", o), e.remove(c.instanceMatrix), c.instanceColor !== null && e.remove(c.instanceColor) } return { update: r, dispose: a } } var ao = class extends xn { constructor(t, e, n, s, r, a, o, l, c, h = $s) { if (h !== $s && h !== tr) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"); n === void 0 && h === $s && (n = us), n === void 0 && h === tr && (n = Qs), super(null, s, r, a, o, l, h, n, c), this.isDepthTexture = !0, this.image = { width: t, height: e }, this.magFilter = o !== void 0 ? o : In, this.minFilter = l !== void 0 ? l : In, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null } copy(t) { return super.copy(t), this.compareFunction = t.compareFunction, this } toJSON(t) { let e = super.toJSON(t); return this.compareFunction !== null && (e.compareFunction = this.compareFunction), e } }, Hf = new xn, Qd = new ao(1, 1), Gf = new Ka, Wf = new Qc, Xf = new io, tf = [], ef = [], nf = new Float32Array(16), sf = new Float32Array(9), rf = new Float32Array(4); function or(i, t, e) { let n = i[0]; if (n <= 0 || n > 0) return i; let s = t * e, r = tf[s]; if (r === void 0 && (r = new Float32Array(s), tf[s] = r), t !== 0) { n.toArray(r, 0); for (let a = 1, o = 0; a !== t; ++a)o += e, i[a].toArray(r, o) } return r } function Le(i, t) { if (i.length !== t.length) return !1; for (let e = 0, n = i.length; e < n; e++)if (i[e] !== t[e]) return !1; return !0 } function De(i, t) { for (let e = 0, n = t.length; e < n; e++)i[e] = t[e] } function xo(i, t) { let e = ef[t]; e === void 0 && (e = new Int32Array(t), ef[t] = e); for (let n = 0; n !== t; ++n)e[n] = i.allocateTextureUnit(); return e } function Ay(i, t) { let e = this.cache; e[0] !== t && (i.uniform1f(this.addr, t), e[0] = t) } function Cy(i, t) { let e = this.cache; if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (i.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y); else { if (Le(e, t)) return; i.uniform2fv(this.addr, t), De(e, t) } } function Ry(i, t) { let e = this.cache; if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3f(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z); else if (t.r !== void 0) (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (i.uniform3f(this.addr, t.r, t.g, t.b), e[0] = t.r, e[1] = t.g, e[2] = t.b); else { if (Le(e, t)) return; i.uniform3fv(this.addr, t), De(e, t) } } function Py(i, t) { let e = this.cache; if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w); else { if (Le(e, t)) return; i.uniform4fv(this.addr, t), De(e, t) } } function Iy(i, t) { let e = this.cache, n = t.elements; if (n === void 0) { if (Le(e, t)) return; i.uniformMatrix2fv(this.addr, !1, t), De(e, t) } else { if (Le(e, n)) return; rf.set(n), i.uniformMatrix2fv(this.addr, !1, rf), De(e, n) } } function Ly(i, t) { let e = this.cache, n = t.elements; if (n === void 0) { if (Le(e, t)) return; i.uniformMatrix3fv(this.addr, !1, t), De(e, t) } else { if (Le(e, n)) return; sf.set(n), i.uniformMatrix3fv(this.addr, !1, sf), De(e, n) } } function Dy(i, t) { let e = this.cache, n = t.elements; if (n === void 0) { if (Le(e, t)) return; i.uniformMatrix4fv(this.addr, !1, t), De(e, t) } else { if (Le(e, n)) return; nf.set(n), i.uniformMatrix4fv(this.addr, !1, nf), De(e, n) } } function Uy(i, t) { let e = this.cache; e[0] !== t && (i.uniform1i(this.addr, t), e[0] = t) } function Ny(i, t) { let e = this.cache; if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (i.uniform2i(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y); else { if (Le(e, t)) return; i.uniform2iv(this.addr, t), De(e, t) } } function Oy(i, t) { let e = this.cache; if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3i(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z); else { if (Le(e, t)) return; i.uniform3iv(this.addr, t), De(e, t) } } function Fy(i, t) { let e = this.cache; if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4i(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w); else { if (Le(e, t)) return; i.uniform4iv(this.addr, t), De(e, t) } } function ky(i, t) { let e = this.cache; e[0] !== t && (i.uniform1ui(this.addr, t), e[0] = t) } function By(i, t) { let e = this.cache; if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (i.uniform2ui(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y); else { if (Le(e, t)) return; i.uniform2uiv(this.addr, t), De(e, t) } } function zy(i, t) { let e = this.cache; if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3ui(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z); else { if (Le(e, t)) return; i.uniform3uiv(this.addr, t), De(e, t) } } function Vy(i, t) { let e = this.cache; if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4ui(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w); else { if (Le(e, t)) return; i.uniform4uiv(this.addr, t), De(e, t) } } function Hy(i, t, e) { let n = this.cache, s = e.allocateTextureUnit(); n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s); let r; this.type === i.SAMPLER_2D_SHADOW ? (Qd.compareFunction = Ff, r = Qd) : r = Hf, e.setTexture2D(t || r, s) } function Gy(i, t, e) { let n = this.cache, s = e.allocateTextureUnit(); n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), e.setTexture3D(t || Wf, s) } function Wy(i, t, e) { let n = this.cache, s = e.allocateTextureUnit(); n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), e.setTextureCube(t || Xf, s) } function Xy(i, t, e) { let n = this.cache, s = e.allocateTextureUnit(); n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), e.setTexture2DArray(t || Gf, s) } function qy(i) { switch (i) { case 5126: return Ay; case 35664: return Cy; case 35665: return Ry; case 35666: return Py; case 35674: return Iy; case 35675: return Ly; case 35676: return Dy; case 5124: case 35670: return Uy; case 35667: case 35671: return Ny; case 35668: case 35672: return Oy; case 35669: case 35673: return Fy; case 5125: return ky; case 36294: return By; case 36295: return zy; case 36296: return Vy; case 35678: case 36198: case 36298: case 36306: case 35682: return Hy; case 35679: case 36299: case 36307: return Gy; case 35680: case 36300: case 36308: case 36293: return Wy; case 36289: case 36303: case 36311: case 36292: return Xy } } function $y(i, t) { i.uniform1fv(this.addr, t) } function Yy(i, t) { let e = or(t, this.size, 2); i.uniform2fv(this.addr, e) } function Zy(i, t) { let e = or(t, this.size, 3); i.uniform3fv(this.addr, e) } function Jy(i, t) { let e = or(t, this.size, 4); i.uniform4fv(this.addr, e) } function jy(i, t) { let e = or(t, this.size, 4); i.uniformMatrix2fv(this.addr, !1, e) } function Ky(i, t) { let e = or(t, this.size, 9); i.uniformMatrix3fv(this.addr, !1, e) } function Qy(i, t) { let e = or(t, this.size, 16); i.uniformMatrix4fv(this.addr, !1, e) } function tx(i, t) { i.uniform1iv(this.addr, t) } function ex(i, t) { i.uniform2iv(this.addr, t) } function nx(i, t) { i.uniform3iv(this.addr, t) } function ix(i, t) { i.uniform4iv(this.addr, t) } function sx(i, t) { i.uniform1uiv(this.addr, t) } function rx(i, t) { i.uniform2uiv(this.addr, t) } function ax(i, t) { i.uniform3uiv(this.addr, t) } function ox(i, t) { i.uniform4uiv(this.addr, t) } function lx(i, t, e) { let n = this.cache, s = t.length, r = xo(e, s); Le(n, r) || (i.uniform1iv(this.addr, r), De(n, r)); for (let a = 0; a !== s; ++a)e.setTexture2D(t[a] || Hf, r[a]) } function cx(i, t, e) { let n = this.cache, s = t.length, r = xo(e, s); Le(n, r) || (i.uniform1iv(this.addr, r), De(n, r)); for (let a = 0; a !== s; ++a)e.setTexture3D(t[a] || Wf, r[a]) } function hx(i, t, e) { let n = this.cache, s = t.length, r = xo(e, s); Le(n, r) || (i.uniform1iv(this.addr, r), De(n, r)); for (let a = 0; a !== s; ++a)e.setTextureCube(t[a] || Xf, r[a]) } function ux(i, t, e) { let n = this.cache, s = t.length, r = xo(e, s); Le(n, r) || (i.uniform1iv(this.addr, r), De(n, r)); for (let a = 0; a !== s; ++a)e.setTexture2DArray(t[a] || Gf, r[a]) } function dx(i) { switch (i) { case 5126: return $y; case 35664: return Yy; case 35665: return Zy; case 35666: return Jy; case 35674: return jy; case 35675: return Ky; case 35676: return Qy; case 5124: case 35670: return tx; case 35667: case 35671: return ex; case 35668: case 35672: return nx; case 35669: case 35673: return ix; case 5125: return sx; case 36294: return rx; case 36295: return ax; case 36296: return ox; case 35678: case 36198: case 36298: case 36306: case 35682: return lx; case 35679: case 36299: case 36307: return cx; case 35680: case 36300: case 36308: case 36293: return hx; case 36289: case 36303: case 36311: case 36292: return ux } } var ih = class { constructor(t, e, n) { this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.setValue = qy(e.type) } }, sh = class { constructor(t, e, n) { this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = dx(e.type) } }, rh = class { constructor(t) { this.id = t, this.seq = [], this.map = {} } setValue(t, e, n) { let s = this.seq; for (let r = 0, a = s.length; r !== a; ++r) { let o = s[r]; o.setValue(t, e[o.id], n) } } }, sc = /(\w+)(\])?(\[|\.)?/g; function af(i, t) { i.seq.push(t), i.map[t.id] = t } function fx(i, t, e) { let n = i.name, s = n.length; for (sc.lastIndex = 0; ;) { let r = sc.exec(n), a = sc.lastIndex, o = r[1], l = r[2] === "]", c = r[3]; if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === s) { af(e, c === void 0 ? new ih(o, i, t) : new sh(o, i, t)); break } else { let d = e.map[o]; d === void 0 && (d = new rh(o), af(e, d)), e = d } } } var Zs = class { constructor(t, e) { this.seq = [], this.map = {}; let n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS); for (let s = 0; s < n; ++s) { let r = t.getActiveUniform(e, s), a = t.getUniformLocation(e, r.name); fx(r, a, this) } } setValue(t, e, n, s) { let r = this.map[e]; r !== void 0 && r.setValue(t, n, s) } setOptional(t, e, n) { let s = e[n]; s !== void 0 && this.setValue(t, n, s) } static upload(t, e, n, s) { for (let r = 0, a = e.length; r !== a; ++r) { let o = e[r], l = n[o.id]; l.needsUpdate !== !1 && o.setValue(t, l.value, s) } } static seqWithValue(t, e) { let n = []; for (let s = 0, r = t.length; s !== r; ++s) { let a = t[s]; a.id in e && n.push(a) } return n } }; function of(i, t, e) { let n = i.createShader(t); return i.shaderSource(n, e), i.compileShader(n), n } var px = 37297, mx = 0; function gx(i, t) {
		let e = i.split(`
`), n = [], s = Math.max(t - 6, 0), r = Math.min(t + 6, e.length); for (let a = s; a < r; a++) { let o = a + 1; n.push(`${o === t ? ">" : " "} ${o}: ${e[a]}`) } return n.join(`
`)
	} var lf = new kt; function _x(i) { $t._getMatrix(lf, $t.workingColorSpace, i); let t = `mat3( ${lf.elements.map(e => e.toFixed(4))} )`; switch ($t.getTransfer(i)) { case yo: return [t, "LinearTransferOETF"]; case ie: return [t, "sRGBTransferOETF"]; default: return console.warn("THREE.WebGLProgram: Unsupported color space: ", i), [t, "LinearTransferOETF"] } } function cf(i, t, e) {
		let n = i.getShaderParameter(t, i.COMPILE_STATUS), s = i.getShaderInfoLog(t).trim(); if (n && s === "") return ""; let r = /ERROR: 0:(\d+)/.exec(s); if (r) {
			let a = parseInt(r[1]); return e.toUpperCase() +`

`+ s +`

`+ gx(i.getShaderSource(t), a)
		} else return s
	} function vx(i, t) {
		let e = _x(t); return [`vec4 ${i}( vec4 value ) {`, `	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`, "}"].join(`
`)
	} function yx(i, t) { let e; switch (t) { case Gg: e = "Linear"; break; case Wg: e = "Reinhard"; break; case Xg: e = "Cineon"; break; case qg: e = "ACESFilmic"; break; case Yg: e = "AgX"; break; case Zg: e = "Neutral"; break; case $g: e = "Custom"; break; default: console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), e = "Linear" }return "vec3 " + i + "( vec3 color ) { return " + e + "ToneMapping( color ); }" } var La = new k; function xx() {
		$t.getLuminanceCoefficients(La); let i = La.x.toFixed(4), t = La.y.toFixed(4), e = La.z.toFixed(4); return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${i}, ${t}, ${e} );`, "	return dot( weights, rgb );", "}"].join(`
`)
	} function bx(i) {
		return [i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Nr).join(`
`)
	} function Sx(i) {
		let t = []; for (let e in i) { let n = i[e]; n !== !1 && t.push("#define " + e + " " + n) } return t.join(`
`)
	} function Mx(i, t) { let e = {}, n = i.getProgramParameter(t, i.ACTIVE_ATTRIBUTES); for (let s = 0; s < n; s++) { let r = i.getActiveAttrib(t, s), a = r.name, o = 1; r.type === i.FLOAT_MAT2 && (o = 2), r.type === i.FLOAT_MAT3 && (o = 3), r.type === i.FLOAT_MAT4 && (o = 4), e[a] = { type: r.type, location: i.getAttribLocation(t, a), locationSize: o } } return e } function Nr(i) { return i !== "" } function hf(i, t) { let e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps; return i.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows) } function uf(i, t) { return i.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection) } var wx = /^[ \t]*#include +<([\w\d./]+)>/gm; function ah(i) { return i.replace(wx, Tx) } var Ex = new Map; function Tx(i, t) { let e = Vt[t]; if (e === void 0) { let n = Ex.get(t); if (n !== void 0) e = Vt[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, n); else throw new Error("Can not resolve #include <" + t + ">") } return ah(e) } var Ax = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g; function df(i) { return i.replace(Ax, Cx) } function Cx(i, t, e, n) { let s = ""; for (let r = parseInt(t); r < parseInt(e); r++)s += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r); return s } function ff(i) {
		let t = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`; return i.precision === "highp" ? t +=`
#define HIGH_PRECISION`: i.precision === "mediump" ? t +=`
#define MEDIUM_PRECISION`: i.precision === "lowp" && (t +=`
#define LOW_PRECISION`), t
	} function Rx(i) { let t = "SHADOWMAP_TYPE_BASIC"; return i.shadowMapType === wf ? t = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === Sg ? t = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === si && (t = "SHADOWMAP_TYPE_VSM"), t } function Px(i) { let t = "ENVMAP_TYPE_CUBE"; if (i.envMap) switch (i.envMapMode) { case js: case Ks: t = "ENVMAP_TYPE_CUBE"; break; case vo: t = "ENVMAP_TYPE_CUBE_UV"; break }return t } function Ix(i) { let t = "ENVMAP_MODE_REFLECTION"; if (i.envMap) switch (i.envMapMode) { case Ks: t = "ENVMAP_MODE_REFRACTION"; break }return t } function Lx(i) { let t = "ENVMAP_BLENDING_NONE"; if (i.envMap) switch (i.combine) { case Ef: t = "ENVMAP_BLENDING_MULTIPLY"; break; case Vg: t = "ENVMAP_BLENDING_MIX"; break; case Hg: t = "ENVMAP_BLENDING_ADD"; break }return t } function Dx(i) { let t = i.envMapCubeUVHeight; if (t === null) return null; let e = Math.log2(t) - 2, n = 1 / t; return { texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 7 * 16)), texelHeight: n, maxMip: e } } function Ux(i, t, e, n) {
		let s = i.getContext(), r = e.defines, a = e.vertexShader, o = e.fragmentShader, l = Rx(e), c = Px(e), h = Ix(e), d = Lx(e), u = Dx(e), f = bx(e), m = Sx(r), _ = s.createProgram(), g, p, y = e.glslVersion ? "#version " + e.glslVersion +`
`: ""; e.isRawShaderMaterial ? (g = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, m].filter(Nr).join(`
`), g.length > 0 && (g +=`
`), p = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, m].filter(Nr).join(`
`), p.length > 0 && (p +=`
`)) : (g = [ff(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, m, e.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", e.batching ? "#define USE_BATCHING" : "", e.batchingColor ? "#define USE_BATCHING_COLOR" : "", e.instancing ? "#define USE_INSTANCING" : "", e.instancingColor ? "#define USE_INSTANCING_COLOR" : "", e.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.map ? "#define USE_MAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + h : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.mapUv ? "#define MAP_UV " + e.mapUv : "", e.alphaMapUv ? "#define ALPHAMAP_UV " + e.alphaMapUv : "", e.lightMapUv ? "#define LIGHTMAP_UV " + e.lightMapUv : "", e.aoMapUv ? "#define AOMAP_UV " + e.aoMapUv : "", e.emissiveMapUv ? "#define EMISSIVEMAP_UV " + e.emissiveMapUv : "", e.bumpMapUv ? "#define BUMPMAP_UV " + e.bumpMapUv : "", e.normalMapUv ? "#define NORMALMAP_UV " + e.normalMapUv : "", e.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + e.displacementMapUv : "", e.metalnessMapUv ? "#define METALNESSMAP_UV " + e.metalnessMapUv : "", e.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + e.roughnessMapUv : "", e.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + e.anisotropyMapUv : "", e.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + e.clearcoatMapUv : "", e.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + e.clearcoatNormalMapUv : "", e.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + e.clearcoatRoughnessMapUv : "", e.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + e.iridescenceMapUv : "", e.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + e.iridescenceThicknessMapUv : "", e.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + e.sheenColorMapUv : "", e.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + e.sheenRoughnessMapUv : "", e.specularMapUv ? "#define SPECULARMAP_UV " + e.specularMapUv : "", e.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + e.specularColorMapUv : "", e.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + e.specularIntensityMapUv : "", e.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + e.transmissionMapUv : "", e.thicknessMapUv ? "#define THICKNESSMAP_UV " + e.thicknessMapUv : "", e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "", e.vertexColors ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.skinning ? "#define USE_SKINNING" : "", e.morphTargets ? "#define USE_MORPHTARGETS" : "", e.morphNormals && e.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", e.morphColors ? "#define USE_MORPHCOLORS" : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + l : "", e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", e.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif",`
`].filter(Nr).join(`
`), p = [ff(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, m, e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", e.map ? "#define USE_MAP" : "", e.matcap ? "#define USE_MATCAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + c : "", e.envMap ? "#define " + h : "", e.envMap ? "#define " + d : "", u ? "#define CUBEUV_TEXEL_WIDTH " + u.texelWidth : "", u ? "#define CUBEUV_TEXEL_HEIGHT " + u.texelHeight : "", u ? "#define CUBEUV_MAX_MIP " + u.maxMip + ".0" : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoat ? "#define USE_CLEARCOAT" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.dispersion ? "#define USE_DISPERSION" : "", e.iridescence ? "#define USE_IRIDESCENCE" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaTest ? "#define USE_ALPHATEST" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.sheen ? "#define USE_SHEEN" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "", e.vertexColors || e.instancingColor || e.batchingColor ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.gradientMap ? "#define USE_GRADIENTMAP" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + l : "", e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", e.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", e.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", e.toneMapping !== Ui ? "#define TONE_MAPPING" : "", e.toneMapping !== Ui ? Vt.tonemapping_pars_fragment : "", e.toneMapping !== Ui ? yx("toneMapping", e.toneMapping) : "", e.dithering ? "#define DITHERING" : "", e.opaque ? "#define OPAQUE" : "", Vt.colorspace_pars_fragment, vx("linearToOutputTexel", e.outputColorSpace), xx(), e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "",`
`].filter(Nr).join(`
`)), a = ah(a), a = hf(a, e), a = uf(a, e), o = ah(o), o = hf(o, e), o = uf(o, e), a = df(a), o = df(o), e.isRawShaderMaterial !== !0 && (y =`#version 300 es
`, g = [f, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) +`
`+ g, p = ["#define varying in", e.glslVersion === Td ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", e.glslVersion === Td ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) +`
`+ p); let x = y + g + a, v = y + p + o, A = of(s, s.VERTEX_SHADER, x), T = of(s, s.FRAGMENT_SHADER, v); s.attachShader(_, A), s.attachShader(_, T), e.index0AttributeName !== void 0 ? s.bindAttribLocation(_, 0, e.index0AttributeName) : e.morphTargets === !0 && s.bindAttribLocation(_, 0, "position"), s.linkProgram(_); function E(P) {
			if (i.debug.checkShaderErrors) {
				let H = s.getProgramInfoLog(_).trim(), z = s.getShaderInfoLog(A).trim(), W = s.getShaderInfoLog(T).trim(), U = !0, I = !0; if (s.getProgramParameter(_, s.LINK_STATUS) === !1) if (U = !1, typeof i.debug.onShaderError == "function") i.debug.onShaderError(s, _, A, T); else {
					let G = cf(s, A, "vertex"), D = cf(s, T, "fragment"); console.error("THREE.WebGLProgram: Shader Error " + s.getError() + " - VALIDATE_STATUS " + s.getProgramParameter(_, s.VALIDATE_STATUS) +`

Material Name: `+ P.name +`
Material Type: `+ P.type +`

Program Info Log: `+ H +`
`+ G +`
`+ D)
				} else H !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", H) : (z === "" || W === "") && (I = !1); I && (P.diagnostics = { runnable: U, programLog: H, vertexShader: { log: z, prefix: g }, fragmentShader: { log: W, prefix: p } })
			} s.deleteShader(A), s.deleteShader(T), C = new Zs(s, _), b = Mx(s, _)
		} let C; this.getUniforms = function () { return C === void 0 && E(this), C }; let b; this.getAttributes = function () { return b === void 0 && E(this), b }; let S = e.rendererExtensionParallelShaderCompile === !1; return this.isReady = function () { return S === !1 && (S = s.getProgramParameter(_, px)), S }, this.destroy = function () { n.releaseStatesOfProgram(this), s.deleteProgram(_), this.program = void 0 }, this.type = e.shaderType, this.name = e.shaderName, this.id = mx++, this.cacheKey = t, this.usedTimes = 1, this.program = _, this.vertexShader = A, this.fragmentShader = T, this
	} var Nx = 0, oh = class { constructor() { this.shaderCache = new Map, this.materialCache = new Map } update(t) { let e = t.vertexShader, n = t.fragmentShader, s = this._getShaderStage(e), r = this._getShaderStage(n), a = this._getShaderCacheForMaterial(t); return a.has(s) === !1 && (a.add(s), s.usedTimes++), a.has(r) === !1 && (a.add(r), r.usedTimes++), this } remove(t) { let e = this.materialCache.get(t); for (let n of e) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code); return this.materialCache.delete(t), this } getVertexShaderID(t) { return this._getShaderStage(t.vertexShader).id } getFragmentShaderID(t) { return this._getShaderStage(t.fragmentShader).id } dispose() { this.shaderCache.clear(), this.materialCache.clear() } _getShaderCacheForMaterial(t) { let e = this.materialCache, n = e.get(t); return n === void 0 && (n = new Set, e.set(t, n)), n } _getShaderStage(t) { let e = this.shaderCache, n = e.get(t); return n === void 0 && (n = new lh(t), e.set(t, n)), n } }, lh = class { constructor(t) { this.id = Nx++, this.code = t, this.usedTimes = 0 } }; function Ox(i, t, e, n, s, r, a) { let o = new Qa, l = new oh, c = new Set, h = [], d = s.logarithmicDepthBuffer, u = s.vertexTextures, f = s.precision, m = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" }; function _(b) { return c.add(b), b === 0 ? "uv" : `uv${b}` } function g(b, S, P, H, z) { let W = H.fog, U = z.geometry, I = b.isMeshStandardMaterial ? H.environment : null, G = (b.isMeshStandardMaterial ? e : t).get(b.envMap || I), D = G && G.mapping === vo ? G.image.height : null, tt = m[b.type]; b.precision !== null && (f = s.getMaxPrecision(b.precision), f !== b.precision && console.warn("THREE.WebGLProgram.getParameters:", b.precision, "not supported, using", f, "instead.")); let j = U.morphAttributes.position || U.morphAttributes.normal || U.morphAttributes.color, dt = j !== void 0 ? j.length : 0, At = 0; U.morphAttributes.position !== void 0 && (At = 1), U.morphAttributes.normal !== void 0 && (At = 2), U.morphAttributes.color !== void 0 && (At = 3); let Ut, Z, et, at; if (tt) { let ee = Vn[tt]; Ut = ee.vertexShader, Z = ee.fragmentShader } else Ut = b.vertexShader, Z = b.fragmentShader, l.update(b), et = l.getVertexShaderID(b), at = l.getFragmentShaderID(b); let lt = i.getRenderTarget(), vt = i.state.buffers.depth.getReversed(), Rt = z.isInstancedMesh === !0, Nt = z.isBatchedMesh === !0, Zt = !!b.map, nt = !!b.matcap, yt = !!G, L = !!b.aoMap, qt = !!b.lightMap, ft = !!b.bumpMap, Ot = !!b.normalMap, Ct = !!b.displacementMap, Jt = !!b.emissiveMap, Et = !!b.metalnessMap, R = !!b.roughnessMap, M = b.anisotropy > 0, V = b.clearcoat > 0, K = b.dispersion > 0, Q = b.iridescence > 0, J = b.sheen > 0, bt = b.transmission > 0, ct = M && !!b.anisotropyMap, pt = V && !!b.clearcoatMap, Gt = V && !!b.clearcoatNormalMap, st = V && !!b.clearcoatRoughnessMap, gt = Q && !!b.iridescenceMap, Pt = Q && !!b.iridescenceThicknessMap, It = J && !!b.sheenColorMap, mt = J && !!b.sheenRoughnessMap, zt = !!b.specularMap, Lt = !!b.specularColorMap, jt = !!b.specularIntensityMap, N = bt && !!b.transmissionMap, q = bt && !!b.thicknessMap, B = !!b.gradientMap, X = !!b.alphaMap, it = b.alphaTest > 0, rt = !!b.alphaHash, _t = !!b.extensions, Kt = Ui; b.toneMapped && (lt === null || lt.isXRRenderTarget === !0) && (Kt = i.toneMapping); let Te = { shaderID: tt, shaderType: b.type, shaderName: b.name, vertexShader: Ut, fragmentShader: Z, defines: b.defines, customVertexShaderID: et, customFragmentShaderID: at, isRawShaderMaterial: b.isRawShaderMaterial === !0, glslVersion: b.glslVersion, precision: f, batching: Nt, batchingColor: Nt && z._colorsTexture !== null, instancing: Rt, instancingColor: Rt && z.instanceColor !== null, instancingMorph: Rt && z.morphTexture !== null, supportsVertexTextures: u, outputColorSpace: lt === null ? i.outputColorSpace : lt.isXRRenderTarget === !0 ? lt.texture.colorSpace : ar, alphaToCoverage: !!b.alphaToCoverage, map: Zt, matcap: nt, envMap: yt, envMapMode: yt && G.mapping, envMapCubeUVHeight: D, aoMap: L, lightMap: qt, bumpMap: ft, normalMap: Ot, displacementMap: u && Ct, emissiveMap: Jt, normalMapObjectSpace: Ot && b.normalMapType === t0, normalMapTangentSpace: Ot && b.normalMapType === Qg, metalnessMap: Et, roughnessMap: R, anisotropy: M, anisotropyMap: ct, clearcoat: V, clearcoatMap: pt, clearcoatNormalMap: Gt, clearcoatRoughnessMap: st, dispersion: K, iridescence: Q, iridescenceMap: gt, iridescenceThicknessMap: Pt, sheen: J, sheenColorMap: It, sheenRoughnessMap: mt, specularMap: zt, specularColorMap: Lt, specularIntensityMap: jt, transmission: bt, transmissionMap: N, thicknessMap: q, gradientMap: B, opaque: b.transparent === !1 && b.blending === Di && b.alphaToCoverage === !1, alphaMap: X, alphaTest: it, alphaHash: rt, combine: b.combine, mapUv: Zt && _(b.map.channel), aoMapUv: L && _(b.aoMap.channel), lightMapUv: qt && _(b.lightMap.channel), bumpMapUv: ft && _(b.bumpMap.channel), normalMapUv: Ot && _(b.normalMap.channel), displacementMapUv: Ct && _(b.displacementMap.channel), emissiveMapUv: Jt && _(b.emissiveMap.channel), metalnessMapUv: Et && _(b.metalnessMap.channel), roughnessMapUv: R && _(b.roughnessMap.channel), anisotropyMapUv: ct && _(b.anisotropyMap.channel), clearcoatMapUv: pt && _(b.clearcoatMap.channel), clearcoatNormalMapUv: Gt && _(b.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: st && _(b.clearcoatRoughnessMap.channel), iridescenceMapUv: gt && _(b.iridescenceMap.channel), iridescenceThicknessMapUv: Pt && _(b.iridescenceThicknessMap.channel), sheenColorMapUv: It && _(b.sheenColorMap.channel), sheenRoughnessMapUv: mt && _(b.sheenRoughnessMap.channel), specularMapUv: zt && _(b.specularMap.channel), specularColorMapUv: Lt && _(b.specularColorMap.channel), specularIntensityMapUv: jt && _(b.specularIntensityMap.channel), transmissionMapUv: N && _(b.transmissionMap.channel), thicknessMapUv: q && _(b.thicknessMap.channel), alphaMapUv: X && _(b.alphaMap.channel), vertexTangents: !!U.attributes.tangent && (Ot || M), vertexColors: b.vertexColors, vertexAlphas: b.vertexColors === !0 && !!U.attributes.color && U.attributes.color.itemSize === 4, pointsUvs: z.isPoints === !0 && !!U.attributes.uv && (Zt || X), fog: !!W, useFog: b.fog === !0, fogExp2: !!W && W.isFogExp2, flatShading: b.flatShading === !0, sizeAttenuation: b.sizeAttenuation === !0, logarithmicDepthBuffer: d, reverseDepthBuffer: vt, skinning: z.isSkinnedMesh === !0, morphTargets: U.morphAttributes.position !== void 0, morphNormals: U.morphAttributes.normal !== void 0, morphColors: U.morphAttributes.color !== void 0, morphTargetsCount: dt, morphTextureStride: At, numDirLights: S.directional.length, numPointLights: S.point.length, numSpotLights: S.spot.length, numSpotLightMaps: S.spotLightMap.length, numRectAreaLights: S.rectArea.length, numHemiLights: S.hemi.length, numDirLightShadows: S.directionalShadowMap.length, numPointLightShadows: S.pointShadowMap.length, numSpotLightShadows: S.spotShadowMap.length, numSpotLightShadowsWithMaps: S.numSpotLightShadowsWithMaps, numLightProbes: S.numLightProbes, numClippingPlanes: a.numPlanes, numClipIntersection: a.numIntersection, dithering: b.dithering, shadowMapEnabled: i.shadowMap.enabled && P.length > 0, shadowMapType: i.shadowMap.type, toneMapping: Kt, decodeVideoTexture: Zt && b.map.isVideoTexture === !0 && $t.getTransfer(b.map.colorSpace) === ie, decodeVideoTextureEmissive: Jt && b.emissiveMap.isVideoTexture === !0 && $t.getTransfer(b.emissiveMap.colorSpace) === ie, premultipliedAlpha: b.premultipliedAlpha, doubleSided: b.side === Rn, flipSided: b.side === rn, useDepthPacking: b.depthPacking >= 0, depthPacking: b.depthPacking || 0, index0AttributeName: b.index0AttributeName, extensionClipCullDistance: _t && b.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (_t && b.extensions.multiDraw === !0 || Nt) && n.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"), customProgramCacheKey: b.customProgramCacheKey() }; return Te.vertexUv1s = c.has(1), Te.vertexUv2s = c.has(2), Te.vertexUv3s = c.has(3), c.clear(), Te } function p(b) { let S = []; if (b.shaderID ? S.push(b.shaderID) : (S.push(b.customVertexShaderID), S.push(b.customFragmentShaderID)), b.defines !== void 0) for (let P in b.defines) S.push(P), S.push(b.defines[P]); return b.isRawShaderMaterial === !1 && (y(S, b), x(S, b), S.push(i.outputColorSpace)), S.push(b.customProgramCacheKey), S.join() } function y(b, S) { b.push(S.precision), b.push(S.outputColorSpace), b.push(S.envMapMode), b.push(S.envMapCubeUVHeight), b.push(S.mapUv), b.push(S.alphaMapUv), b.push(S.lightMapUv), b.push(S.aoMapUv), b.push(S.bumpMapUv), b.push(S.normalMapUv), b.push(S.displacementMapUv), b.push(S.emissiveMapUv), b.push(S.metalnessMapUv), b.push(S.roughnessMapUv), b.push(S.anisotropyMapUv), b.push(S.clearcoatMapUv), b.push(S.clearcoatNormalMapUv), b.push(S.clearcoatRoughnessMapUv), b.push(S.iridescenceMapUv), b.push(S.iridescenceThicknessMapUv), b.push(S.sheenColorMapUv), b.push(S.sheenRoughnessMapUv), b.push(S.specularMapUv), b.push(S.specularColorMapUv), b.push(S.specularIntensityMapUv), b.push(S.transmissionMapUv), b.push(S.thicknessMapUv), b.push(S.combine), b.push(S.fogExp2), b.push(S.sizeAttenuation), b.push(S.morphTargetsCount), b.push(S.morphAttributeCount), b.push(S.numDirLights), b.push(S.numPointLights), b.push(S.numSpotLights), b.push(S.numSpotLightMaps), b.push(S.numHemiLights), b.push(S.numRectAreaLights), b.push(S.numDirLightShadows), b.push(S.numPointLightShadows), b.push(S.numSpotLightShadows), b.push(S.numSpotLightShadowsWithMaps), b.push(S.numLightProbes), b.push(S.shadowMapType), b.push(S.toneMapping), b.push(S.numClippingPlanes), b.push(S.numClipIntersection), b.push(S.depthPacking) } function x(b, S) { o.disableAll(), S.supportsVertexTextures && o.enable(0), S.instancing && o.enable(1), S.instancingColor && o.enable(2), S.instancingMorph && o.enable(3), S.matcap && o.enable(4), S.envMap && o.enable(5), S.normalMapObjectSpace && o.enable(6), S.normalMapTangentSpace && o.enable(7), S.clearcoat && o.enable(8), S.iridescence && o.enable(9), S.alphaTest && o.enable(10), S.vertexColors && o.enable(11), S.vertexAlphas && o.enable(12), S.vertexUv1s && o.enable(13), S.vertexUv2s && o.enable(14), S.vertexUv3s && o.enable(15), S.vertexTangents && o.enable(16), S.anisotropy && o.enable(17), S.alphaHash && o.enable(18), S.batching && o.enable(19), S.dispersion && o.enable(20), S.batchingColor && o.enable(21), b.push(o.mask), o.disableAll(), S.fog && o.enable(0), S.useFog && o.enable(1), S.flatShading && o.enable(2), S.logarithmicDepthBuffer && o.enable(3), S.reverseDepthBuffer && o.enable(4), S.skinning && o.enable(5), S.morphTargets && o.enable(6), S.morphNormals && o.enable(7), S.morphColors && o.enable(8), S.premultipliedAlpha && o.enable(9), S.shadowMapEnabled && o.enable(10), S.doubleSided && o.enable(11), S.flipSided && o.enable(12), S.useDepthPacking && o.enable(13), S.dithering && o.enable(14), S.transmission && o.enable(15), S.sheen && o.enable(16), S.opaque && o.enable(17), S.pointsUvs && o.enable(18), S.decodeVideoTexture && o.enable(19), S.decodeVideoTextureEmissive && o.enable(20), S.alphaToCoverage && o.enable(21), b.push(o.mask) } function v(b) { let S = m[b.type], P; if (S) { let H = Vn[S]; P = T0.clone(H.uniforms) } else P = b.uniforms; return P } function A(b, S) { let P; for (let H = 0, z = h.length; H < z; H++) { let W = h[H]; if (W.cacheKey === S) { P = W, ++P.usedTimes; break } } return P === void 0 && (P = new Ux(i, S, b, r), h.push(P)), P } function T(b) { if (--b.usedTimes === 0) { let S = h.indexOf(b); h[S] = h[h.length - 1], h.pop(), b.destroy() } } function E(b) { l.remove(b) } function C() { l.dispose() } return { getParameters: g, getProgramCacheKey: p, getUniforms: v, acquireProgram: A, releaseProgram: T, releaseShaderCache: E, programs: h, dispose: C } } function Fx() { let i = new WeakMap; function t(a) { return i.has(a) } function e(a) { let o = i.get(a); return o === void 0 && (o = {}, i.set(a, o)), o } function n(a) { i.delete(a) } function s(a, o, l) { i.get(a)[o] = l } function r() { i = new WeakMap } return { has: t, get: e, remove: n, update: s, dispose: r } } function kx(i, t) { return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.material.id !== t.material.id ? i.material.id - t.material.id : i.z !== t.z ? i.z - t.z : i.id - t.id } function pf(i, t) { return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.z !== t.z ? t.z - i.z : i.id - t.id } function mf() { let i = [], t = 0, e = [], n = [], s = []; function r() { t = 0, e.length = 0, n.length = 0, s.length = 0 } function a(d, u, f, m, _, g) { let p = i[t]; return p === void 0 ? (p = { id: d.id, object: d, geometry: u, material: f, groupOrder: m, renderOrder: d.renderOrder, z: _, group: g }, i[t] = p) : (p.id = d.id, p.object = d, p.geometry = u, p.material = f, p.groupOrder = m, p.renderOrder = d.renderOrder, p.z = _, p.group = g), t++, p } function o(d, u, f, m, _, g) { let p = a(d, u, f, m, _, g); f.transmission > 0 ? n.push(p) : f.transparent === !0 ? s.push(p) : e.push(p) } function l(d, u, f, m, _, g) { let p = a(d, u, f, m, _, g); f.transmission > 0 ? n.unshift(p) : f.transparent === !0 ? s.unshift(p) : e.unshift(p) } function c(d, u) { e.length > 1 && e.sort(d || kx), n.length > 1 && n.sort(u || pf), s.length > 1 && s.sort(u || pf) } function h() { for (let d = t, u = i.length; d < u; d++) { let f = i[d]; if (f.id === null) break; f.id = null, f.object = null, f.geometry = null, f.material = null, f.group = null } } return { opaque: e, transmissive: n, transparent: s, init: r, push: o, unshift: l, finish: h, sort: c } } function Bx() { let i = new WeakMap; function t(n, s) { let r = i.get(n), a; return r === void 0 ? (a = new mf, i.set(n, [a])) : s >= r.length ? (a = new mf, r.push(a)) : a = r[s], a } function e() { i = new WeakMap } return { get: t, dispose: e } } function zx() { let i = {}; return { get: function (t) { if (i[t.id] !== void 0) return i[t.id]; let e; switch (t.type) { case "DirectionalLight": e = { direction: new k, color: new Ht }; break; case "SpotLight": e = { position: new k, direction: new k, color: new Ht, distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 }; break; case "PointLight": e = { position: new k, color: new Ht, distance: 0, decay: 0 }; break; case "HemisphereLight": e = { direction: new k, skyColor: new Ht, groundColor: new Ht }; break; case "RectAreaLight": e = { color: new Ht, position: new k, halfWidth: new k, halfHeight: new k }; break }return i[t.id] = e, e } } } function Vx() { let i = {}; return { get: function (t) { if (i[t.id] !== void 0) return i[t.id]; let e; switch (t.type) { case "DirectionalLight": e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Xt }; break; case "SpotLight": e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Xt }; break; case "PointLight": e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Xt, shadowCameraNear: 1, shadowCameraFar: 1e3 }; break }return i[t.id] = e, e } } } var Hx = 0; function Gx(i, t) { return (t.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (i.map ? 1 : 0) } function Wx(i) { let t = new zx, e = Vx(), n = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 }; for (let c = 0; c < 9; c++)n.probe.push(new k); let s = new k, r = new be, a = new be; function o(c) { let h = 0, d = 0, u = 0; for (let b = 0; b < 9; b++)n.probe[b].set(0, 0, 0); let f = 0, m = 0, _ = 0, g = 0, p = 0, y = 0, x = 0, v = 0, A = 0, T = 0, E = 0; c.sort(Gx); for (let b = 0, S = c.length; b < S; b++) { let P = c[b], H = P.color, z = P.intensity, W = P.distance, U = P.shadow && P.shadow.map ? P.shadow.map.texture : null; if (P.isAmbientLight) h += H.r * z, d += H.g * z, u += H.b * z; else if (P.isLightProbe) { for (let I = 0; I < 9; I++)n.probe[I].addScaledVector(P.sh.coefficients[I], z); E++ } else if (P.isDirectionalLight) { let I = t.get(P); if (I.color.copy(P.color).multiplyScalar(P.intensity), P.castShadow) { let G = P.shadow, D = e.get(P); D.shadowIntensity = G.intensity, D.shadowBias = G.bias, D.shadowNormalBias = G.normalBias, D.shadowRadius = G.radius, D.shadowMapSize = G.mapSize, n.directionalShadow[f] = D, n.directionalShadowMap[f] = U, n.directionalShadowMatrix[f] = P.shadow.matrix, y++ } n.directional[f] = I, f++ } else if (P.isSpotLight) { let I = t.get(P); I.position.setFromMatrixPosition(P.matrixWorld), I.color.copy(H).multiplyScalar(z), I.distance = W, I.coneCos = Math.cos(P.angle), I.penumbraCos = Math.cos(P.angle * (1 - P.penumbra)), I.decay = P.decay, n.spot[_] = I; let G = P.shadow; if (P.map && (n.spotLightMap[A] = P.map, A++, G.updateMatrices(P), P.castShadow && T++), n.spotLightMatrix[_] = G.matrix, P.castShadow) { let D = e.get(P); D.shadowIntensity = G.intensity, D.shadowBias = G.bias, D.shadowNormalBias = G.normalBias, D.shadowRadius = G.radius, D.shadowMapSize = G.mapSize, n.spotShadow[_] = D, n.spotShadowMap[_] = U, v++ } _++ } else if (P.isRectAreaLight) { let I = t.get(P); I.color.copy(H).multiplyScalar(z), I.halfWidth.set(P.width * .5, 0, 0), I.halfHeight.set(0, P.height * .5, 0), n.rectArea[g] = I, g++ } else if (P.isPointLight) { let I = t.get(P); if (I.color.copy(P.color).multiplyScalar(P.intensity), I.distance = P.distance, I.decay = P.decay, P.castShadow) { let G = P.shadow, D = e.get(P); D.shadowIntensity = G.intensity, D.shadowBias = G.bias, D.shadowNormalBias = G.normalBias, D.shadowRadius = G.radius, D.shadowMapSize = G.mapSize, D.shadowCameraNear = G.camera.near, D.shadowCameraFar = G.camera.far, n.pointShadow[m] = D, n.pointShadowMap[m] = U, n.pointShadowMatrix[m] = P.shadow.matrix, x++ } n.point[m] = I, m++ } else if (P.isHemisphereLight) { let I = t.get(P); I.skyColor.copy(P.color).multiplyScalar(z), I.groundColor.copy(P.groundColor).multiplyScalar(z), n.hemi[p] = I, p++ } } g > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = ht.LTC_FLOAT_1, n.rectAreaLTC2 = ht.LTC_FLOAT_2) : (n.rectAreaLTC1 = ht.LTC_HALF_1, n.rectAreaLTC2 = ht.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = d, n.ambient[2] = u; let C = n.hash; (C.directionalLength !== f || C.pointLength !== m || C.spotLength !== _ || C.rectAreaLength !== g || C.hemiLength !== p || C.numDirectionalShadows !== y || C.numPointShadows !== x || C.numSpotShadows !== v || C.numSpotMaps !== A || C.numLightProbes !== E) && (n.directional.length = f, n.spot.length = _, n.rectArea.length = g, n.point.length = m, n.hemi.length = p, n.directionalShadow.length = y, n.directionalShadowMap.length = y, n.pointShadow.length = x, n.pointShadowMap.length = x, n.spotShadow.length = v, n.spotShadowMap.length = v, n.directionalShadowMatrix.length = y, n.pointShadowMatrix.length = x, n.spotLightMatrix.length = v + A - T, n.spotLightMap.length = A, n.numSpotLightShadowsWithMaps = T, n.numLightProbes = E, C.directionalLength = f, C.pointLength = m, C.spotLength = _, C.rectAreaLength = g, C.hemiLength = p, C.numDirectionalShadows = y, C.numPointShadows = x, C.numSpotShadows = v, C.numSpotMaps = A, C.numLightProbes = E, n.version = Hx++) } function l(c, h) { let d = 0, u = 0, f = 0, m = 0, _ = 0, g = h.matrixWorldInverse; for (let p = 0, y = c.length; p < y; p++) { let x = c[p]; if (x.isDirectionalLight) { let v = n.directional[d]; v.direction.setFromMatrixPosition(x.matrixWorld), s.setFromMatrixPosition(x.target.matrixWorld), v.direction.sub(s), v.direction.transformDirection(g), d++ } else if (x.isSpotLight) { let v = n.spot[f]; v.position.setFromMatrixPosition(x.matrixWorld), v.position.applyMatrix4(g), v.direction.setFromMatrixPosition(x.matrixWorld), s.setFromMatrixPosition(x.target.matrixWorld), v.direction.sub(s), v.direction.transformDirection(g), f++ } else if (x.isRectAreaLight) { let v = n.rectArea[m]; v.position.setFromMatrixPosition(x.matrixWorld), v.position.applyMatrix4(g), a.identity(), r.copy(x.matrixWorld), r.premultiply(g), a.extractRotation(r), v.halfWidth.set(x.width * .5, 0, 0), v.halfHeight.set(0, x.height * .5, 0), v.halfWidth.applyMatrix4(a), v.halfHeight.applyMatrix4(a), m++ } else if (x.isPointLight) { let v = n.point[u]; v.position.setFromMatrixPosition(x.matrixWorld), v.position.applyMatrix4(g), u++ } else if (x.isHemisphereLight) { let v = n.hemi[_]; v.direction.setFromMatrixPosition(x.matrixWorld), v.direction.transformDirection(g), _++ } } } return { setup: o, setupView: l, state: n } } function gf(i) { let t = new Wx(i), e = [], n = []; function s(h) { c.camera = h, e.length = 0, n.length = 0 } function r(h) { e.push(h) } function a(h) { n.push(h) } function o() { t.setup(e) } function l(h) { t.setupView(e, h) } let c = { lightsArray: e, shadowsArray: n, camera: null, lights: t, transmissionRenderTarget: {} }; return { init: s, state: c, setupLights: o, setupLightsView: l, pushLight: r, pushShadow: a } } function Xx(i) { let t = new WeakMap; function e(s, r = 0) { let a = t.get(s), o; return a === void 0 ? (o = new gf(i), t.set(s, [o])) : r >= a.length ? (o = new gf(i), a.push(o)) : o = a[r], o } function n() { t = new WeakMap } return { get: e, dispose: n } } var ch = class extends ki { static get type() { return "MeshDepthMaterial" } constructor(t) { super(), this.isMeshDepthMaterial = !0, this.depthPacking = jg, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t) } copy(t) { return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this } }, hh = class extends ki { static get type() { return "MeshDistanceMaterial" } constructor(t) { super(), this.isMeshDistanceMaterial = !0, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t) } copy(t) { return super.copy(t), this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this } }, qx =`void main() {
	gl_Position = vec4( position, 1.0 );
}`, $x =`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`; function Yx(i, t, e) { let n = new so, s = new Xt, r = new Xt, a = new we, o = new ch({ depthPacking: Kg }), l = new hh, c = {}, h = e.maxTextureSize, d = { [Ni]: rn, [rn]: Ni, [Rn]: Rn }, u = new bn({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new Xt }, radius: { value: 4 } }, vertexShader: qx, fragmentShader: $x }), f = u.clone(); f.defines.HORIZONTAL_PASS = 1; let m = new Ce; m.setAttribute("position", new Ee(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3)); let _ = new sn(m, u), g = this; this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = wf; let p = this.type; this.render = function (T, E, C) { if (g.enabled === !1 || g.autoUpdate === !1 && g.needsUpdate === !1 || T.length === 0) return; let b = i.getRenderTarget(), S = i.getActiveCubeFace(), P = i.getActiveMipmapLevel(), H = i.state; H.setBlending(Li), H.buffers.color.setClear(1, 1, 1, 1), H.buffers.depth.setTest(!0), H.setScissorTest(!1); let z = p !== si && this.type === si, W = p === si && this.type !== si; for (let U = 0, I = T.length; U < I; U++) { let G = T[U], D = G.shadow; if (D === void 0) { console.warn("THREE.WebGLShadowMap:", G, "has no shadow."); continue } if (D.autoUpdate === !1 && D.needsUpdate === !1) continue; s.copy(D.mapSize); let tt = D.getFrameExtents(); if (s.multiply(tt), r.copy(D.mapSize), (s.x > h || s.y > h) && (s.x > h && (r.x = Math.floor(h / tt.x), s.x = r.x * tt.x, D.mapSize.x = r.x), s.y > h && (r.y = Math.floor(h / tt.y), s.y = r.y * tt.y, D.mapSize.y = r.y)), D.map === null || z === !0 || W === !0) { let dt = this.type !== si ? { minFilter: In, magFilter: In } : {}; D.map !== null && D.map.dispose(), D.map = new hi(s.x, s.y, dt), D.map.texture.name = G.name + ".shadowMap", D.camera.updateProjectionMatrix() } i.setRenderTarget(D.map), i.clear(); let j = D.getViewportCount(); for (let dt = 0; dt < j; dt++) { let At = D.getViewport(dt); a.set(r.x * At.x, r.y * At.y, r.x * At.z, r.y * At.w), H.viewport(a), D.updateMatrices(G, dt), n = D.getFrustum(), v(E, C, D.camera, G, this.type) } D.isPointLightShadow !== !0 && this.type === si && y(D, C), D.needsUpdate = !1 } p = this.type, g.needsUpdate = !1, i.setRenderTarget(b, S, P) }; function y(T, E) { let C = t.update(_); u.defines.VSM_SAMPLES !== T.blurSamples && (u.defines.VSM_SAMPLES = T.blurSamples, f.defines.VSM_SAMPLES = T.blurSamples, u.needsUpdate = !0, f.needsUpdate = !0), T.mapPass === null && (T.mapPass = new hi(s.x, s.y)), u.uniforms.shadow_pass.value = T.map.texture, u.uniforms.resolution.value = T.mapSize, u.uniforms.radius.value = T.radius, i.setRenderTarget(T.mapPass), i.clear(), i.renderBufferDirect(E, null, C, u, _, null), f.uniforms.shadow_pass.value = T.mapPass.texture, f.uniforms.resolution.value = T.mapSize, f.uniforms.radius.value = T.radius, i.setRenderTarget(T.map), i.clear(), i.renderBufferDirect(E, null, C, f, _, null) } function x(T, E, C, b) { let S = null, P = C.isPointLight === !0 ? T.customDistanceMaterial : T.customDepthMaterial; if (P !== void 0) S = P; else if (S = C.isPointLight === !0 ? l : o, i.localClippingEnabled && E.clipShadows === !0 && Array.isArray(E.clippingPlanes) && E.clippingPlanes.length !== 0 || E.displacementMap && E.displacementScale !== 0 || E.alphaMap && E.alphaTest > 0 || E.map && E.alphaTest > 0) { let H = S.uuid, z = E.uuid, W = c[H]; W === void 0 && (W = {}, c[H] = W); let U = W[z]; U === void 0 && (U = S.clone(), W[z] = U, E.addEventListener("dispose", A)), S = U } if (S.visible = E.visible, S.wireframe = E.wireframe, b === si ? S.side = E.shadowSide !== null ? E.shadowSide : E.side : S.side = E.shadowSide !== null ? E.shadowSide : d[E.side], S.alphaMap = E.alphaMap, S.alphaTest = E.alphaTest, S.map = E.map, S.clipShadows = E.clipShadows, S.clippingPlanes = E.clippingPlanes, S.clipIntersection = E.clipIntersection, S.displacementMap = E.displacementMap, S.displacementScale = E.displacementScale, S.displacementBias = E.displacementBias, S.wireframeLinewidth = E.wireframeLinewidth, S.linewidth = E.linewidth, C.isPointLight === !0 && S.isMeshDistanceMaterial === !0) { let H = i.properties.get(S); H.light = C } return S } function v(T, E, C, b, S) { if (T.visible === !1) return; if (T.layers.test(E.layers) && (T.isMesh || T.isLine || T.isPoints) && (T.castShadow || T.receiveShadow && S === si) && (!T.frustumCulled || n.intersectsObject(T))) { T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse, T.matrixWorld); let z = t.update(T), W = T.material; if (Array.isArray(W)) { let U = z.groups; for (let I = 0, G = U.length; I < G; I++) { let D = U[I], tt = W[D.materialIndex]; if (tt && tt.visible) { let j = x(T, tt, b, S); T.onBeforeShadow(i, T, E, C, z, j, D), i.renderBufferDirect(C, null, z, j, T, D), T.onAfterShadow(i, T, E, C, z, j, D) } } } else if (W.visible) { let U = x(T, W, b, S); T.onBeforeShadow(i, T, E, C, z, U, null), i.renderBufferDirect(C, null, z, U, T, null), T.onAfterShadow(i, T, E, C, z, U, null) } } let H = T.children; for (let z = 0, W = H.length; z < W; z++)v(H[z], E, C, b, S) } function A(T) { T.target.removeEventListener("dispose", A); for (let C in c) { let b = c[C], S = T.target.uuid; S in b && (b[S].dispose(), delete b[S]) } } } var Zx = { [dc]: fc, [pc]: _c, [mc]: vc, [Js]: gc, [fc]: dc, [_c]: pc, [vc]: mc, [gc]: Js }; function Jx(i, t) { function e() { let N = !1, q = new we, B = null, X = new we(0, 0, 0, 0); return { setMask: function (it) { B !== it && !N && (i.colorMask(it, it, it, it), B = it) }, setLocked: function (it) { N = it }, setClear: function (it, rt, _t, Kt, Te) { Te === !0 && (it *= Kt, rt *= Kt, _t *= Kt), q.set(it, rt, _t, Kt), X.equals(q) === !1 && (i.clearColor(it, rt, _t, Kt), X.copy(q)) }, reset: function () { N = !1, B = null, X.set(-1, 0, 0, 0) } } } function n() { let N = !1, q = !1, B = null, X = null, it = null; return { setReversed: function (rt) { if (q !== rt) { let _t = t.get("EXT_clip_control"); q ? _t.clipControlEXT(_t.LOWER_LEFT_EXT, _t.ZERO_TO_ONE_EXT) : _t.clipControlEXT(_t.LOWER_LEFT_EXT, _t.NEGATIVE_ONE_TO_ONE_EXT); let Kt = it; it = null, this.setClear(Kt) } q = rt }, getReversed: function () { return q }, setTest: function (rt) { rt ? lt(i.DEPTH_TEST) : vt(i.DEPTH_TEST) }, setMask: function (rt) { B !== rt && !N && (i.depthMask(rt), B = rt) }, setFunc: function (rt) { if (q && (rt = Zx[rt]), X !== rt) { switch (rt) { case dc: i.depthFunc(i.NEVER); break; case fc: i.depthFunc(i.ALWAYS); break; case pc: i.depthFunc(i.LESS); break; case Js: i.depthFunc(i.LEQUAL); break; case mc: i.depthFunc(i.EQUAL); break; case gc: i.depthFunc(i.GEQUAL); break; case _c: i.depthFunc(i.GREATER); break; case vc: i.depthFunc(i.NOTEQUAL); break; default: i.depthFunc(i.LEQUAL) }X = rt } }, setLocked: function (rt) { N = rt }, setClear: function (rt) { it !== rt && (q && (rt = 1 - rt), i.clearDepth(rt), it = rt) }, reset: function () { N = !1, B = null, X = null, it = null, q = !1 } } } function s() { let N = !1, q = null, B = null, X = null, it = null, rt = null, _t = null, Kt = null, Te = null; return { setTest: function (ee) { N || (ee ? lt(i.STENCIL_TEST) : vt(i.STENCIL_TEST)) }, setMask: function (ee) { q !== ee && !N && (i.stencilMask(ee), q = ee) }, setFunc: function (ee, wn, qn) { (B !== ee || X !== wn || it !== qn) && (i.stencilFunc(ee, wn, qn), B = ee, X = wn, it = qn) }, setOp: function (ee, wn, qn) { (rt !== ee || _t !== wn || Kt !== qn) && (i.stencilOp(ee, wn, qn), rt = ee, _t = wn, Kt = qn) }, setLocked: function (ee) { N = ee }, setClear: function (ee) { Te !== ee && (i.clearStencil(ee), Te = ee) }, reset: function () { N = !1, q = null, B = null, X = null, it = null, rt = null, _t = null, Kt = null, Te = null } } } let r = new e, a = new n, o = new s, l = new WeakMap, c = new WeakMap, h = {}, d = {}, u = new WeakMap, f = [], m = null, _ = !1, g = null, p = null, y = null, x = null, v = null, A = null, T = null, E = new Ht(0, 0, 0), C = 0, b = !1, S = null, P = null, H = null, z = null, W = null, U = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS), I = !1, G = 0, D = i.getParameter(i.VERSION); D.indexOf("WebGL") !== -1 ? (G = parseFloat(/^WebGL (\d)/.exec(D)[1]), I = G >= 1) : D.indexOf("OpenGL ES") !== -1 && (G = parseFloat(/^OpenGL ES (\d)/.exec(D)[1]), I = G >= 2); let tt = null, j = {}, dt = i.getParameter(i.SCISSOR_BOX), At = i.getParameter(i.VIEWPORT), Ut = new we().fromArray(dt), Z = new we().fromArray(At); function et(N, q, B, X) { let it = new Uint8Array(4), rt = i.createTexture(); i.bindTexture(N, rt), i.texParameteri(N, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(N, i.TEXTURE_MAG_FILTER, i.NEAREST); for (let _t = 0; _t < B; _t++)N === i.TEXTURE_3D || N === i.TEXTURE_2D_ARRAY ? i.texImage3D(q, 0, i.RGBA, 1, 1, X, 0, i.RGBA, i.UNSIGNED_BYTE, it) : i.texImage2D(q + _t, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, it); return rt } let at = {}; at[i.TEXTURE_2D] = et(i.TEXTURE_2D, i.TEXTURE_2D, 1), at[i.TEXTURE_CUBE_MAP] = et(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), at[i.TEXTURE_2D_ARRAY] = et(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), at[i.TEXTURE_3D] = et(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), lt(i.DEPTH_TEST), a.setFunc(Js), ft(!1), Ot(vd), lt(i.CULL_FACE), L(Li); function lt(N) { h[N] !== !0 && (i.enable(N), h[N] = !0) } function vt(N) { h[N] !== !1 && (i.disable(N), h[N] = !1) } function Rt(N, q) { return d[N] !== q ? (i.bindFramebuffer(N, q), d[N] = q, N === i.DRAW_FRAMEBUFFER && (d[i.FRAMEBUFFER] = q), N === i.FRAMEBUFFER && (d[i.DRAW_FRAMEBUFFER] = q), !0) : !1 } function Nt(N, q) { let B = f, X = !1; if (N) { B = u.get(q), B === void 0 && (B = [], u.set(q, B)); let it = N.textures; if (B.length !== it.length || B[0] !== i.COLOR_ATTACHMENT0) { for (let rt = 0, _t = it.length; rt < _t; rt++)B[rt] = i.COLOR_ATTACHMENT0 + rt; B.length = it.length, X = !0 } } else B[0] !== i.BACK && (B[0] = i.BACK, X = !0); X && i.drawBuffers(B) } function Zt(N) { return m !== N ? (i.useProgram(N), m = N, !0) : !1 } let nt = { [os]: i.FUNC_ADD, [wg]: i.FUNC_SUBTRACT, [Eg]: i.FUNC_REVERSE_SUBTRACT }; nt[Tg] = i.MIN, nt[Ag] = i.MAX; let yt = { [Cg]: i.ZERO, [Rg]: i.ONE, [Pg]: i.SRC_COLOR, [hc]: i.SRC_ALPHA, [Og]: i.SRC_ALPHA_SATURATE, [Ug]: i.DST_COLOR, [Lg]: i.DST_ALPHA, [Ig]: i.ONE_MINUS_SRC_COLOR, [uc]: i.ONE_MINUS_SRC_ALPHA, [Ng]: i.ONE_MINUS_DST_COLOR, [Dg]: i.ONE_MINUS_DST_ALPHA, [Fg]: i.CONSTANT_COLOR, [kg]: i.ONE_MINUS_CONSTANT_COLOR, [Bg]: i.CONSTANT_ALPHA, [zg]: i.ONE_MINUS_CONSTANT_ALPHA }; function L(N, q, B, X, it, rt, _t, Kt, Te, ee) { if (N === Li) { _ === !0 && (vt(i.BLEND), _ = !1); return } if (_ === !1 && (lt(i.BLEND), _ = !0), N !== Mg) { if (N !== g || ee !== b) { if ((p !== os || v !== os) && (i.blendEquation(i.FUNC_ADD), p = os, v = os), ee) switch (N) { case Di: i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA); break; case Wn: i.blendFunc(i.ONE, i.ONE); break; case yd: i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE); break; case xd: i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA); break; default: console.error("THREE.WebGLState: Invalid blending: ", N); break } else switch (N) { case Di: i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA); break; case Wn: i.blendFunc(i.SRC_ALPHA, i.ONE); break; case yd: i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE); break; case xd: i.blendFunc(i.ZERO, i.SRC_COLOR); break; default: console.error("THREE.WebGLState: Invalid blending: ", N); break }y = null, x = null, A = null, T = null, E.set(0, 0, 0), C = 0, g = N, b = ee } return } it = it || q, rt = rt || B, _t = _t || X, (q !== p || it !== v) && (i.blendEquationSeparate(nt[q], nt[it]), p = q, v = it), (B !== y || X !== x || rt !== A || _t !== T) && (i.blendFuncSeparate(yt[B], yt[X], yt[rt], yt[_t]), y = B, x = X, A = rt, T = _t), (Kt.equals(E) === !1 || Te !== C) && (i.blendColor(Kt.r, Kt.g, Kt.b, Te), E.copy(Kt), C = Te), g = N, b = !1 } function qt(N, q) { N.side === Rn ? vt(i.CULL_FACE) : lt(i.CULL_FACE); let B = N.side === rn; q && (B = !B), ft(B), N.blending === Di && N.transparent === !1 ? L(Li) : L(N.blending, N.blendEquation, N.blendSrc, N.blendDst, N.blendEquationAlpha, N.blendSrcAlpha, N.blendDstAlpha, N.blendColor, N.blendAlpha, N.premultipliedAlpha), a.setFunc(N.depthFunc), a.setTest(N.depthTest), a.setMask(N.depthWrite), r.setMask(N.colorWrite); let X = N.stencilWrite; o.setTest(X), X && (o.setMask(N.stencilWriteMask), o.setFunc(N.stencilFunc, N.stencilRef, N.stencilFuncMask), o.setOp(N.stencilFail, N.stencilZFail, N.stencilZPass)), Jt(N.polygonOffset, N.polygonOffsetFactor, N.polygonOffsetUnits), N.alphaToCoverage === !0 ? lt(i.SAMPLE_ALPHA_TO_COVERAGE) : vt(i.SAMPLE_ALPHA_TO_COVERAGE) } function ft(N) { S !== N && (N ? i.frontFace(i.CW) : i.frontFace(i.CCW), S = N) } function Ot(N) { N !== xg ? (lt(i.CULL_FACE), N !== P && (N === vd ? i.cullFace(i.BACK) : N === bg ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : vt(i.CULL_FACE), P = N } function Ct(N) { N !== H && (I && i.lineWidth(N), H = N) } function Jt(N, q, B) { N ? (lt(i.POLYGON_OFFSET_FILL), (z !== q || W !== B) && (i.polygonOffset(q, B), z = q, W = B)) : vt(i.POLYGON_OFFSET_FILL) } function Et(N) { N ? lt(i.SCISSOR_TEST) : vt(i.SCISSOR_TEST) } function R(N) { N === void 0 && (N = i.TEXTURE0 + U - 1), tt !== N && (i.activeTexture(N), tt = N) } function M(N, q, B) { B === void 0 && (tt === null ? B = i.TEXTURE0 + U - 1 : B = tt); let X = j[B]; X === void 0 && (X = { type: void 0, texture: void 0 }, j[B] = X), (X.type !== N || X.texture !== q) && (tt !== B && (i.activeTexture(B), tt = B), i.bindTexture(N, q || at[N]), X.type = N, X.texture = q) } function V() { let N = j[tt]; N !== void 0 && N.type !== void 0 && (i.bindTexture(N.type, null), N.type = void 0, N.texture = void 0) } function K() { try { i.compressedTexImage2D.apply(i, arguments) } catch (N) { console.error("THREE.WebGLState:", N) } } function Q() { try { i.compressedTexImage3D.apply(i, arguments) } catch (N) { console.error("THREE.WebGLState:", N) } } function J() { try { i.texSubImage2D.apply(i, arguments) } catch (N) { console.error("THREE.WebGLState:", N) } } function bt() { try { i.texSubImage3D.apply(i, arguments) } catch (N) { console.error("THREE.WebGLState:", N) } } function ct() { try { i.compressedTexSubImage2D.apply(i, arguments) } catch (N) { console.error("THREE.WebGLState:", N) } } function pt() { try { i.compressedTexSubImage3D.apply(i, arguments) } catch (N) { console.error("THREE.WebGLState:", N) } } function Gt() { try { i.texStorage2D.apply(i, arguments) } catch (N) { console.error("THREE.WebGLState:", N) } } function st() { try { i.texStorage3D.apply(i, arguments) } catch (N) { console.error("THREE.WebGLState:", N) } } function gt() { try { i.texImage2D.apply(i, arguments) } catch (N) { console.error("THREE.WebGLState:", N) } } function Pt() { try { i.texImage3D.apply(i, arguments) } catch (N) { console.error("THREE.WebGLState:", N) } } function It(N) { Ut.equals(N) === !1 && (i.scissor(N.x, N.y, N.z, N.w), Ut.copy(N)) } function mt(N) { Z.equals(N) === !1 && (i.viewport(N.x, N.y, N.z, N.w), Z.copy(N)) } function zt(N, q) { let B = c.get(q); B === void 0 && (B = new WeakMap, c.set(q, B)); let X = B.get(N); X === void 0 && (X = i.getUniformBlockIndex(q, N.name), B.set(N, X)) } function Lt(N, q) { let X = c.get(q).get(N); l.get(q) !== X && (i.uniformBlockBinding(q, X, N.__bindingPointIndex), l.set(q, X)) } function jt() { i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), a.setReversed(!1), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), h = {}, tt = null, j = {}, d = {}, u = new WeakMap, f = [], m = null, _ = !1, g = null, p = null, y = null, x = null, v = null, A = null, T = null, E = new Ht(0, 0, 0), C = 0, b = !1, S = null, P = null, H = null, z = null, W = null, Ut.set(0, 0, i.canvas.width, i.canvas.height), Z.set(0, 0, i.canvas.width, i.canvas.height), r.reset(), a.reset(), o.reset() } return { buffers: { color: r, depth: a, stencil: o }, enable: lt, disable: vt, bindFramebuffer: Rt, drawBuffers: Nt, useProgram: Zt, setBlending: L, setMaterial: qt, setFlipSided: ft, setCullFace: Ot, setLineWidth: Ct, setPolygonOffset: Jt, setScissorTest: Et, activeTexture: R, bindTexture: M, unbindTexture: V, compressedTexImage2D: K, compressedTexImage3D: Q, texImage2D: gt, texImage3D: Pt, updateUBOMapping: zt, uniformBlockBinding: Lt, texStorage2D: Gt, texStorage3D: st, texSubImage2D: J, texSubImage3D: bt, compressedTexSubImage2D: ct, compressedTexSubImage3D: pt, scissor: It, viewport: mt, reset: jt } } function _f(i, t, e, n) { let s = jx(n); switch (e) { case Pf: return i * t; case Lf: return i * t; case Df: return i * t * 2; case Uf: return i * t / s.components * s.byteLength; case Lh: return i * t / s.components * s.byteLength; case Nf: return i * t * 2 / s.components * s.byteLength; case Dh: return i * t * 2 / s.components * s.byteLength; case If: return i * t * 3 / s.components * s.byteLength; case Pn: return i * t * 4 / s.components * s.byteLength; case Uh: return i * t * 4 / s.components * s.byteLength; case Ha: case Ga: return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8; case Wa: case Xa: return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16; case wc: case Tc: return Math.max(i, 16) * Math.max(t, 8) / 4; case Mc: case Ec: return Math.max(i, 8) * Math.max(t, 8) / 2; case Ac: case Cc: return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8; case Rc: return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16; case Pc: return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16; case Ic: return Math.floor((i + 4) / 5) * Math.floor((t + 3) / 4) * 16; case Lc: return Math.floor((i + 4) / 5) * Math.floor((t + 4) / 5) * 16; case Dc: return Math.floor((i + 5) / 6) * Math.floor((t + 4) / 5) * 16; case Uc: return Math.floor((i + 5) / 6) * Math.floor((t + 5) / 6) * 16; case Nc: return Math.floor((i + 7) / 8) * Math.floor((t + 4) / 5) * 16; case Oc: return Math.floor((i + 7) / 8) * Math.floor((t + 5) / 6) * 16; case Fc: return Math.floor((i + 7) / 8) * Math.floor((t + 7) / 8) * 16; case kc: return Math.floor((i + 9) / 10) * Math.floor((t + 4) / 5) * 16; case Bc: return Math.floor((i + 9) / 10) * Math.floor((t + 5) / 6) * 16; case zc: return Math.floor((i + 9) / 10) * Math.floor((t + 7) / 8) * 16; case Vc: return Math.floor((i + 9) / 10) * Math.floor((t + 9) / 10) * 16; case Hc: return Math.floor((i + 11) / 12) * Math.floor((t + 9) / 10) * 16; case Gc: return Math.floor((i + 11) / 12) * Math.floor((t + 11) / 12) * 16; case qa: case Wc: case Xc: return Math.ceil(i / 4) * Math.ceil(t / 4) * 16; case Of: case qc: return Math.ceil(i / 4) * Math.ceil(t / 4) * 8; case $c: case Yc: return Math.ceil(i / 4) * Math.ceil(t / 4) * 16 }throw new Error(`Unable to determine texture byte length for ${e} format.`) } function jx(i) { switch (i) { case ci: case Af: return { byteLength: 1, components: 1 }; case Fr: case Cf: case zr: return { byteLength: 2, components: 1 }; case Ph: case Ih: return { byteLength: 2, components: 4 }; case us: case Rh: case ai: return { byteLength: 4, components: 1 }; case Rf: return { byteLength: 4, components: 3 } }throw new Error(`Unknown texture type ${i}.`) } function Kx(i, t, e, n, s, r, a) { let o = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator == "undefined" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new Xt, h = new WeakMap, d, u = new WeakMap, f = !1; try { f = typeof OffscreenCanvas != "undefined" && new OffscreenCanvas(1, 1).getContext("2d") !== null } catch { } function m(R, M) { return f ? new OffscreenCanvas(R, M) : Ja("canvas") } function _(R, M, V) { let K = 1, Q = Et(R); if ((Q.width > V || Q.height > V) && (K = V / Math.max(Q.width, Q.height)), K < 1) if (typeof HTMLImageElement != "undefined" && R instanceof HTMLImageElement || typeof HTMLCanvasElement != "undefined" && R instanceof HTMLCanvasElement || typeof ImageBitmap != "undefined" && R instanceof ImageBitmap || typeof VideoFrame != "undefined" && R instanceof VideoFrame) { let J = Math.floor(K * Q.width), bt = Math.floor(K * Q.height); d === void 0 && (d = m(J, bt)); let ct = M ? m(J, bt) : d; return ct.width = J, ct.height = bt, ct.getContext("2d").drawImage(R, 0, 0, J, bt), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Q.width + "x" + Q.height + ") to (" + J + "x" + bt + ")."), ct } else return "data" in R && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Q.width + "x" + Q.height + ")."), R; return R } function g(R) { return R.generateMipmaps } function p(R) { i.generateMipmap(R) } function y(R) { return R.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : R.isWebGL3DRenderTarget ? i.TEXTURE_3D : R.isWebGLArrayRenderTarget || R.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D } function x(R, M, V, K, Q = !1) { if (R !== null) { if (i[R] !== void 0) return i[R]; console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + R + "'") } let J = M; if (M === i.RED && (V === i.FLOAT && (J = i.R32F), V === i.HALF_FLOAT && (J = i.R16F), V === i.UNSIGNED_BYTE && (J = i.R8)), M === i.RED_INTEGER && (V === i.UNSIGNED_BYTE && (J = i.R8UI), V === i.UNSIGNED_SHORT && (J = i.R16UI), V === i.UNSIGNED_INT && (J = i.R32UI), V === i.BYTE && (J = i.R8I), V === i.SHORT && (J = i.R16I), V === i.INT && (J = i.R32I)), M === i.RG && (V === i.FLOAT && (J = i.RG32F), V === i.HALF_FLOAT && (J = i.RG16F), V === i.UNSIGNED_BYTE && (J = i.RG8)), M === i.RG_INTEGER && (V === i.UNSIGNED_BYTE && (J = i.RG8UI), V === i.UNSIGNED_SHORT && (J = i.RG16UI), V === i.UNSIGNED_INT && (J = i.RG32UI), V === i.BYTE && (J = i.RG8I), V === i.SHORT && (J = i.RG16I), V === i.INT && (J = i.RG32I)), M === i.RGB_INTEGER && (V === i.UNSIGNED_BYTE && (J = i.RGB8UI), V === i.UNSIGNED_SHORT && (J = i.RGB16UI), V === i.UNSIGNED_INT && (J = i.RGB32UI), V === i.BYTE && (J = i.RGB8I), V === i.SHORT && (J = i.RGB16I), V === i.INT && (J = i.RGB32I)), M === i.RGBA_INTEGER && (V === i.UNSIGNED_BYTE && (J = i.RGBA8UI), V === i.UNSIGNED_SHORT && (J = i.RGBA16UI), V === i.UNSIGNED_INT && (J = i.RGBA32UI), V === i.BYTE && (J = i.RGBA8I), V === i.SHORT && (J = i.RGBA16I), V === i.INT && (J = i.RGBA32I)), M === i.RGB && V === i.UNSIGNED_INT_5_9_9_9_REV && (J = i.RGB9_E5), M === i.RGBA) { let bt = Q ? yo : $t.getTransfer(K); V === i.FLOAT && (J = i.RGBA32F), V === i.HALF_FLOAT && (J = i.RGBA16F), V === i.UNSIGNED_BYTE && (J = bt === ie ? i.SRGB8_ALPHA8 : i.RGBA8), V === i.UNSIGNED_SHORT_4_4_4_4 && (J = i.RGBA4), V === i.UNSIGNED_SHORT_5_5_5_1 && (J = i.RGB5_A1) } return (J === i.R16F || J === i.R32F || J === i.RG16F || J === i.RG32F || J === i.RGBA16F || J === i.RGBA32F) && t.get("EXT_color_buffer_float"), J } function v(R, M) { let V; return R ? M === null || M === us || M === Qs ? V = i.DEPTH24_STENCIL8 : M === ai ? V = i.DEPTH32F_STENCIL8 : M === Fr && (V = i.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : M === null || M === us || M === Qs ? V = i.DEPTH_COMPONENT24 : M === ai ? V = i.DEPTH_COMPONENT32F : M === Fr && (V = i.DEPTH_COMPONENT16), V } function A(R, M) { return g(R) === !0 || R.isFramebufferTexture && R.minFilter !== In && R.minFilter !== Hn ? Math.log2(Math.max(M.width, M.height)) + 1 : R.mipmaps !== void 0 && R.mipmaps.length > 0 ? R.mipmaps.length : R.isCompressedTexture && Array.isArray(R.image) ? M.mipmaps.length : 1 } function T(R) { let M = R.target; M.removeEventListener("dispose", T), C(M), M.isVideoTexture && h.delete(M) } function E(R) { let M = R.target; M.removeEventListener("dispose", E), S(M) } function C(R) { let M = n.get(R); if (M.__webglInit === void 0) return; let V = R.source, K = u.get(V); if (K) { let Q = K[M.__cacheKey]; Q.usedTimes--, Q.usedTimes === 0 && b(R), Object.keys(K).length === 0 && u.delete(V) } n.remove(R) } function b(R) { let M = n.get(R); i.deleteTexture(M.__webglTexture); let V = R.source, K = u.get(V); delete K[M.__cacheKey], a.memory.textures-- } function S(R) { let M = n.get(R); if (R.depthTexture && (R.depthTexture.dispose(), n.remove(R.depthTexture)), R.isWebGLCubeRenderTarget) for (let K = 0; K < 6; K++) { if (Array.isArray(M.__webglFramebuffer[K])) for (let Q = 0; Q < M.__webglFramebuffer[K].length; Q++)i.deleteFramebuffer(M.__webglFramebuffer[K][Q]); else i.deleteFramebuffer(M.__webglFramebuffer[K]); M.__webglDepthbuffer && i.deleteRenderbuffer(M.__webglDepthbuffer[K]) } else { if (Array.isArray(M.__webglFramebuffer)) for (let K = 0; K < M.__webglFramebuffer.length; K++)i.deleteFramebuffer(M.__webglFramebuffer[K]); else i.deleteFramebuffer(M.__webglFramebuffer); if (M.__webglDepthbuffer && i.deleteRenderbuffer(M.__webglDepthbuffer), M.__webglMultisampledFramebuffer && i.deleteFramebuffer(M.__webglMultisampledFramebuffer), M.__webglColorRenderbuffer) for (let K = 0; K < M.__webglColorRenderbuffer.length; K++)M.__webglColorRenderbuffer[K] && i.deleteRenderbuffer(M.__webglColorRenderbuffer[K]); M.__webglDepthRenderbuffer && i.deleteRenderbuffer(M.__webglDepthRenderbuffer) } let V = R.textures; for (let K = 0, Q = V.length; K < Q; K++) { let J = n.get(V[K]); J.__webglTexture && (i.deleteTexture(J.__webglTexture), a.memory.textures--), n.remove(V[K]) } n.remove(R) } let P = 0; function H() { P = 0 } function z() { let R = P; return R >= s.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + R + " texture units while this GPU supports only " + s.maxTextures), P += 1, R } function W(R) { let M = []; return M.push(R.wrapS), M.push(R.wrapT), M.push(R.wrapR || 0), M.push(R.magFilter), M.push(R.minFilter), M.push(R.anisotropy), M.push(R.internalFormat), M.push(R.format), M.push(R.type), M.push(R.generateMipmaps), M.push(R.premultiplyAlpha), M.push(R.flipY), M.push(R.unpackAlignment), M.push(R.colorSpace), M.join() } function U(R, M) { let V = n.get(R); if (R.isVideoTexture && Ct(R), R.isRenderTargetTexture === !1 && R.version > 0 && V.__version !== R.version) { let K = R.image; if (K === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found."); else if (K.complete === !1) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete"); else { Z(V, R, M); return } } e.bindTexture(i.TEXTURE_2D, V.__webglTexture, i.TEXTURE0 + M) } function I(R, M) { let V = n.get(R); if (R.version > 0 && V.__version !== R.version) { Z(V, R, M); return } e.bindTexture(i.TEXTURE_2D_ARRAY, V.__webglTexture, i.TEXTURE0 + M) } function G(R, M) { let V = n.get(R); if (R.version > 0 && V.__version !== R.version) { Z(V, R, M); return } e.bindTexture(i.TEXTURE_3D, V.__webglTexture, i.TEXTURE0 + M) } function D(R, M) { let V = n.get(R); if (R.version > 0 && V.__version !== R.version) { et(V, R, M); return } e.bindTexture(i.TEXTURE_CUBE_MAP, V.__webglTexture, i.TEXTURE0 + M) } let tt = { [bc]: i.REPEAT, [cs]: i.CLAMP_TO_EDGE, [Sc]: i.MIRRORED_REPEAT }, j = { [In]: i.NEAREST, [Jg]: i.NEAREST_MIPMAP_NEAREST, [da]: i.NEAREST_MIPMAP_LINEAR, [Hn]: i.LINEAR, [Pl]: i.LINEAR_MIPMAP_NEAREST, [hs]: i.LINEAR_MIPMAP_LINEAR }, dt = { [e0]: i.NEVER, [o0]: i.ALWAYS, [n0]: i.LESS, [Ff]: i.LEQUAL, [i0]: i.EQUAL, [a0]: i.GEQUAL, [s0]: i.GREATER, [r0]: i.NOTEQUAL }; function At(R, M) { if (M.type === ai && t.has("OES_texture_float_linear") === !1 && (M.magFilter === Hn || M.magFilter === Pl || M.magFilter === da || M.magFilter === hs || M.minFilter === Hn || M.minFilter === Pl || M.minFilter === da || M.minFilter === hs) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(R, i.TEXTURE_WRAP_S, tt[M.wrapS]), i.texParameteri(R, i.TEXTURE_WRAP_T, tt[M.wrapT]), (R === i.TEXTURE_3D || R === i.TEXTURE_2D_ARRAY) && i.texParameteri(R, i.TEXTURE_WRAP_R, tt[M.wrapR]), i.texParameteri(R, i.TEXTURE_MAG_FILTER, j[M.magFilter]), i.texParameteri(R, i.TEXTURE_MIN_FILTER, j[M.minFilter]), M.compareFunction && (i.texParameteri(R, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(R, i.TEXTURE_COMPARE_FUNC, dt[M.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) { if (M.magFilter === In || M.minFilter !== da && M.minFilter !== hs || M.type === ai && t.has("OES_texture_float_linear") === !1) return; if (M.anisotropy > 1 || n.get(M).__currentAnisotropy) { let V = t.get("EXT_texture_filter_anisotropic"); i.texParameterf(R, V.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(M.anisotropy, s.getMaxAnisotropy())), n.get(M).__currentAnisotropy = M.anisotropy } } } function Ut(R, M) { let V = !1; R.__webglInit === void 0 && (R.__webglInit = !0, M.addEventListener("dispose", T)); let K = M.source, Q = u.get(K); Q === void 0 && (Q = {}, u.set(K, Q)); let J = W(M); if (J !== R.__cacheKey) { Q[J] === void 0 && (Q[J] = { texture: i.createTexture(), usedTimes: 0 }, a.memory.textures++, V = !0), Q[J].usedTimes++; let bt = Q[R.__cacheKey]; bt !== void 0 && (Q[R.__cacheKey].usedTimes--, bt.usedTimes === 0 && b(M)), R.__cacheKey = J, R.__webglTexture = Q[J].texture } return V } function Z(R, M, V) { let K = i.TEXTURE_2D; (M.isDataArrayTexture || M.isCompressedArrayTexture) && (K = i.TEXTURE_2D_ARRAY), M.isData3DTexture && (K = i.TEXTURE_3D); let Q = Ut(R, M), J = M.source; e.bindTexture(K, R.__webglTexture, i.TEXTURE0 + V); let bt = n.get(J); if (J.version !== bt.__version || Q === !0) { e.activeTexture(i.TEXTURE0 + V); let ct = $t.getPrimaries($t.workingColorSpace), pt = M.colorSpace === Pi ? null : $t.getPrimaries(M.colorSpace), Gt = M.colorSpace === Pi || ct === pt ? i.NONE : i.BROWSER_DEFAULT_WEBGL; i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, M.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, M.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, M.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Gt); let st = _(M.image, !1, s.maxTextureSize); st = Jt(M, st); let gt = r.convert(M.format, M.colorSpace), Pt = r.convert(M.type), It = x(M.internalFormat, gt, Pt, M.colorSpace, M.isVideoTexture); At(K, M); let mt, zt = M.mipmaps, Lt = M.isVideoTexture !== !0, jt = bt.__version === void 0 || Q === !0, N = J.dataReady, q = A(M, st); if (M.isDepthTexture) It = v(M.format === tr, M.type), jt && (Lt ? e.texStorage2D(i.TEXTURE_2D, 1, It, st.width, st.height) : e.texImage2D(i.TEXTURE_2D, 0, It, st.width, st.height, 0, gt, Pt, null)); else if (M.isDataTexture) if (zt.length > 0) { Lt && jt && e.texStorage2D(i.TEXTURE_2D, q, It, zt[0].width, zt[0].height); for (let B = 0, X = zt.length; B < X; B++)mt = zt[B], Lt ? N && e.texSubImage2D(i.TEXTURE_2D, B, 0, 0, mt.width, mt.height, gt, Pt, mt.data) : e.texImage2D(i.TEXTURE_2D, B, It, mt.width, mt.height, 0, gt, Pt, mt.data); M.generateMipmaps = !1 } else Lt ? (jt && e.texStorage2D(i.TEXTURE_2D, q, It, st.width, st.height), N && e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, st.width, st.height, gt, Pt, st.data)) : e.texImage2D(i.TEXTURE_2D, 0, It, st.width, st.height, 0, gt, Pt, st.data); else if (M.isCompressedTexture) if (M.isCompressedArrayTexture) { Lt && jt && e.texStorage3D(i.TEXTURE_2D_ARRAY, q, It, zt[0].width, zt[0].height, st.depth); for (let B = 0, X = zt.length; B < X; B++)if (mt = zt[B], M.format !== Pn) if (gt !== null) if (Lt) { if (N) if (M.layerUpdates.size > 0) { let it = _f(mt.width, mt.height, M.format, M.type); for (let rt of M.layerUpdates) { let _t = mt.data.subarray(rt * it / mt.data.BYTES_PER_ELEMENT, (rt + 1) * it / mt.data.BYTES_PER_ELEMENT); e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, B, 0, 0, rt, mt.width, mt.height, 1, gt, _t) } M.clearLayerUpdates() } else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, B, 0, 0, 0, mt.width, mt.height, st.depth, gt, mt.data) } else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY, B, It, mt.width, mt.height, st.depth, 0, mt.data, 0, 0); else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"); else Lt ? N && e.texSubImage3D(i.TEXTURE_2D_ARRAY, B, 0, 0, 0, mt.width, mt.height, st.depth, gt, Pt, mt.data) : e.texImage3D(i.TEXTURE_2D_ARRAY, B, It, mt.width, mt.height, st.depth, 0, gt, Pt, mt.data) } else { Lt && jt && e.texStorage2D(i.TEXTURE_2D, q, It, zt[0].width, zt[0].height); for (let B = 0, X = zt.length; B < X; B++)mt = zt[B], M.format !== Pn ? gt !== null ? Lt ? N && e.compressedTexSubImage2D(i.TEXTURE_2D, B, 0, 0, mt.width, mt.height, gt, mt.data) : e.compressedTexImage2D(i.TEXTURE_2D, B, It, mt.width, mt.height, 0, mt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Lt ? N && e.texSubImage2D(i.TEXTURE_2D, B, 0, 0, mt.width, mt.height, gt, Pt, mt.data) : e.texImage2D(i.TEXTURE_2D, B, It, mt.width, mt.height, 0, gt, Pt, mt.data) } else if (M.isDataArrayTexture) if (Lt) { if (jt && e.texStorage3D(i.TEXTURE_2D_ARRAY, q, It, st.width, st.height, st.depth), N) if (M.layerUpdates.size > 0) { let B = _f(st.width, st.height, M.format, M.type); for (let X of M.layerUpdates) { let it = st.data.subarray(X * B / st.data.BYTES_PER_ELEMENT, (X + 1) * B / st.data.BYTES_PER_ELEMENT); e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, X, st.width, st.height, 1, gt, Pt, it) } M.clearLayerUpdates() } else e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, st.width, st.height, st.depth, gt, Pt, st.data) } else e.texImage3D(i.TEXTURE_2D_ARRAY, 0, It, st.width, st.height, st.depth, 0, gt, Pt, st.data); else if (M.isData3DTexture) Lt ? (jt && e.texStorage3D(i.TEXTURE_3D, q, It, st.width, st.height, st.depth), N && e.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, st.width, st.height, st.depth, gt, Pt, st.data)) : e.texImage3D(i.TEXTURE_3D, 0, It, st.width, st.height, st.depth, 0, gt, Pt, st.data); else if (M.isFramebufferTexture) { if (jt) if (Lt) e.texStorage2D(i.TEXTURE_2D, q, It, st.width, st.height); else { let B = st.width, X = st.height; for (let it = 0; it < q; it++)e.texImage2D(i.TEXTURE_2D, it, It, B, X, 0, gt, Pt, null), B >>= 1, X >>= 1 } } else if (zt.length > 0) { if (Lt && jt) { let B = Et(zt[0]); e.texStorage2D(i.TEXTURE_2D, q, It, B.width, B.height) } for (let B = 0, X = zt.length; B < X; B++)mt = zt[B], Lt ? N && e.texSubImage2D(i.TEXTURE_2D, B, 0, 0, gt, Pt, mt) : e.texImage2D(i.TEXTURE_2D, B, It, gt, Pt, mt); M.generateMipmaps = !1 } else if (Lt) { if (jt) { let B = Et(st); e.texStorage2D(i.TEXTURE_2D, q, It, B.width, B.height) } N && e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, gt, Pt, st) } else e.texImage2D(i.TEXTURE_2D, 0, It, gt, Pt, st); g(M) && p(K), bt.__version = J.version, M.onUpdate && M.onUpdate(M) } R.__version = M.version } function et(R, M, V) { if (M.image.length !== 6) return; let K = Ut(R, M), Q = M.source; e.bindTexture(i.TEXTURE_CUBE_MAP, R.__webglTexture, i.TEXTURE0 + V); let J = n.get(Q); if (Q.version !== J.__version || K === !0) { e.activeTexture(i.TEXTURE0 + V); let bt = $t.getPrimaries($t.workingColorSpace), ct = M.colorSpace === Pi ? null : $t.getPrimaries(M.colorSpace), pt = M.colorSpace === Pi || bt === ct ? i.NONE : i.BROWSER_DEFAULT_WEBGL; i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, M.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, M.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, M.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, pt); let Gt = M.isCompressedTexture || M.image[0].isCompressedTexture, st = M.image[0] && M.image[0].isDataTexture, gt = []; for (let X = 0; X < 6; X++)!Gt && !st ? gt[X] = _(M.image[X], !0, s.maxCubemapSize) : gt[X] = st ? M.image[X].image : M.image[X], gt[X] = Jt(M, gt[X]); let Pt = gt[0], It = r.convert(M.format, M.colorSpace), mt = r.convert(M.type), zt = x(M.internalFormat, It, mt, M.colorSpace), Lt = M.isVideoTexture !== !0, jt = J.__version === void 0 || K === !0, N = Q.dataReady, q = A(M, Pt); At(i.TEXTURE_CUBE_MAP, M); let B; if (Gt) { Lt && jt && e.texStorage2D(i.TEXTURE_CUBE_MAP, q, zt, Pt.width, Pt.height); for (let X = 0; X < 6; X++) { B = gt[X].mipmaps; for (let it = 0; it < B.length; it++) { let rt = B[it]; M.format !== Pn ? It !== null ? Lt ? N && e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, it, 0, 0, rt.width, rt.height, It, rt.data) : e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, it, zt, rt.width, rt.height, 0, rt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Lt ? N && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, it, 0, 0, rt.width, rt.height, It, mt, rt.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, it, zt, rt.width, rt.height, 0, It, mt, rt.data) } } } else { if (B = M.mipmaps, Lt && jt) { B.length > 0 && q++; let X = Et(gt[0]); e.texStorage2D(i.TEXTURE_CUBE_MAP, q, zt, X.width, X.height) } for (let X = 0; X < 6; X++)if (st) { Lt ? N && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, 0, 0, gt[X].width, gt[X].height, It, mt, gt[X].data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, zt, gt[X].width, gt[X].height, 0, It, mt, gt[X].data); for (let it = 0; it < B.length; it++) { let _t = B[it].image[X].image; Lt ? N && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, it + 1, 0, 0, _t.width, _t.height, It, mt, _t.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, it + 1, zt, _t.width, _t.height, 0, It, mt, _t.data) } } else { Lt ? N && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, 0, 0, It, mt, gt[X]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, zt, It, mt, gt[X]); for (let it = 0; it < B.length; it++) { let rt = B[it]; Lt ? N && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, it + 1, 0, 0, It, mt, rt.image[X]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, it + 1, zt, It, mt, rt.image[X]) } } } g(M) && p(i.TEXTURE_CUBE_MAP), J.__version = Q.version, M.onUpdate && M.onUpdate(M) } R.__version = M.version } function at(R, M, V, K, Q, J) { let bt = r.convert(V.format, V.colorSpace), ct = r.convert(V.type), pt = x(V.internalFormat, bt, ct, V.colorSpace), Gt = n.get(M), st = n.get(V); if (st.__renderTarget = M, !Gt.__hasExternalTextures) { let gt = Math.max(1, M.width >> J), Pt = Math.max(1, M.height >> J); Q === i.TEXTURE_3D || Q === i.TEXTURE_2D_ARRAY ? e.texImage3D(Q, J, pt, gt, Pt, M.depth, 0, bt, ct, null) : e.texImage2D(Q, J, pt, gt, Pt, 0, bt, ct, null) } e.bindFramebuffer(i.FRAMEBUFFER, R), Ot(M) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, K, Q, st.__webglTexture, 0, ft(M)) : (Q === i.TEXTURE_2D || Q >= i.TEXTURE_CUBE_MAP_POSITIVE_X && Q <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, K, Q, st.__webglTexture, J), e.bindFramebuffer(i.FRAMEBUFFER, null) } function lt(R, M, V) { if (i.bindRenderbuffer(i.RENDERBUFFER, R), M.depthBuffer) { let K = M.depthTexture, Q = K && K.isDepthTexture ? K.type : null, J = v(M.stencilBuffer, Q), bt = M.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, ct = ft(M); Ot(M) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, ct, J, M.width, M.height) : V ? i.renderbufferStorageMultisample(i.RENDERBUFFER, ct, J, M.width, M.height) : i.renderbufferStorage(i.RENDERBUFFER, J, M.width, M.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, bt, i.RENDERBUFFER, R) } else { let K = M.textures; for (let Q = 0; Q < K.length; Q++) { let J = K[Q], bt = r.convert(J.format, J.colorSpace), ct = r.convert(J.type), pt = x(J.internalFormat, bt, ct, J.colorSpace), Gt = ft(M); V && Ot(M) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, Gt, pt, M.width, M.height) : Ot(M) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, Gt, pt, M.width, M.height) : i.renderbufferStorage(i.RENDERBUFFER, pt, M.width, M.height) } } i.bindRenderbuffer(i.RENDERBUFFER, null) } function vt(R, M) { if (M && M.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported"); if (e.bindFramebuffer(i.FRAMEBUFFER, R), !(M.depthTexture && M.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture"); let K = n.get(M.depthTexture); K.__renderTarget = M, (!K.__webglTexture || M.depthTexture.image.width !== M.width || M.depthTexture.image.height !== M.height) && (M.depthTexture.image.width = M.width, M.depthTexture.image.height = M.height, M.depthTexture.needsUpdate = !0), U(M.depthTexture, 0); let Q = K.__webglTexture, J = ft(M); if (M.depthTexture.format === $s) Ot(M) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, Q, 0, J) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, Q, 0); else if (M.depthTexture.format === tr) Ot(M) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, Q, 0, J) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, Q, 0); else throw new Error("Unknown depthTexture format") } function Rt(R) { let M = n.get(R), V = R.isWebGLCubeRenderTarget === !0; if (M.__boundDepthTexture !== R.depthTexture) { let K = R.depthTexture; if (M.__depthDisposeCallback && M.__depthDisposeCallback(), K) { let Q = () => { delete M.__boundDepthTexture, delete M.__depthDisposeCallback, K.removeEventListener("dispose", Q) }; K.addEventListener("dispose", Q), M.__depthDisposeCallback = Q } M.__boundDepthTexture = K } if (R.depthTexture && !M.__autoAllocateDepthBuffer) { if (V) throw new Error("target.depthTexture not supported in Cube render targets"); vt(M.__webglFramebuffer, R) } else if (V) { M.__webglDepthbuffer = []; for (let K = 0; K < 6; K++)if (e.bindFramebuffer(i.FRAMEBUFFER, M.__webglFramebuffer[K]), M.__webglDepthbuffer[K] === void 0) M.__webglDepthbuffer[K] = i.createRenderbuffer(), lt(M.__webglDepthbuffer[K], R, !1); else { let Q = R.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, J = M.__webglDepthbuffer[K]; i.bindRenderbuffer(i.RENDERBUFFER, J), i.framebufferRenderbuffer(i.FRAMEBUFFER, Q, i.RENDERBUFFER, J) } } else if (e.bindFramebuffer(i.FRAMEBUFFER, M.__webglFramebuffer), M.__webglDepthbuffer === void 0) M.__webglDepthbuffer = i.createRenderbuffer(), lt(M.__webglDepthbuffer, R, !1); else { let K = R.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, Q = M.__webglDepthbuffer; i.bindRenderbuffer(i.RENDERBUFFER, Q), i.framebufferRenderbuffer(i.FRAMEBUFFER, K, i.RENDERBUFFER, Q) } e.bindFramebuffer(i.FRAMEBUFFER, null) } function Nt(R, M, V) { let K = n.get(R); M !== void 0 && at(K.__webglFramebuffer, R, R.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), V !== void 0 && Rt(R) } function Zt(R) { let M = R.texture, V = n.get(R), K = n.get(M); R.addEventListener("dispose", E); let Q = R.textures, J = R.isWebGLCubeRenderTarget === !0, bt = Q.length > 1; if (bt || (K.__webglTexture === void 0 && (K.__webglTexture = i.createTexture()), K.__version = M.version, a.memory.textures++), J) { V.__webglFramebuffer = []; for (let ct = 0; ct < 6; ct++)if (M.mipmaps && M.mipmaps.length > 0) { V.__webglFramebuffer[ct] = []; for (let pt = 0; pt < M.mipmaps.length; pt++)V.__webglFramebuffer[ct][pt] = i.createFramebuffer() } else V.__webglFramebuffer[ct] = i.createFramebuffer() } else { if (M.mipmaps && M.mipmaps.length > 0) { V.__webglFramebuffer = []; for (let ct = 0; ct < M.mipmaps.length; ct++)V.__webglFramebuffer[ct] = i.createFramebuffer() } else V.__webglFramebuffer = i.createFramebuffer(); if (bt) for (let ct = 0, pt = Q.length; ct < pt; ct++) { let Gt = n.get(Q[ct]); Gt.__webglTexture === void 0 && (Gt.__webglTexture = i.createTexture(), a.memory.textures++) } if (R.samples > 0 && Ot(R) === !1) { V.__webglMultisampledFramebuffer = i.createFramebuffer(), V.__webglColorRenderbuffer = [], e.bindFramebuffer(i.FRAMEBUFFER, V.__webglMultisampledFramebuffer); for (let ct = 0; ct < Q.length; ct++) { let pt = Q[ct]; V.__webglColorRenderbuffer[ct] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, V.__webglColorRenderbuffer[ct]); let Gt = r.convert(pt.format, pt.colorSpace), st = r.convert(pt.type), gt = x(pt.internalFormat, Gt, st, pt.colorSpace, R.isXRRenderTarget === !0), Pt = ft(R); i.renderbufferStorageMultisample(i.RENDERBUFFER, Pt, gt, R.width, R.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ct, i.RENDERBUFFER, V.__webglColorRenderbuffer[ct]) } i.bindRenderbuffer(i.RENDERBUFFER, null), R.depthBuffer && (V.__webglDepthRenderbuffer = i.createRenderbuffer(), lt(V.__webglDepthRenderbuffer, R, !0)), e.bindFramebuffer(i.FRAMEBUFFER, null) } } if (J) { e.bindTexture(i.TEXTURE_CUBE_MAP, K.__webglTexture), At(i.TEXTURE_CUBE_MAP, M); for (let ct = 0; ct < 6; ct++)if (M.mipmaps && M.mipmaps.length > 0) for (let pt = 0; pt < M.mipmaps.length; pt++)at(V.__webglFramebuffer[ct][pt], R, M, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ct, pt); else at(V.__webglFramebuffer[ct], R, M, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ct, 0); g(M) && p(i.TEXTURE_CUBE_MAP), e.unbindTexture() } else if (bt) { for (let ct = 0, pt = Q.length; ct < pt; ct++) { let Gt = Q[ct], st = n.get(Gt); e.bindTexture(i.TEXTURE_2D, st.__webglTexture), At(i.TEXTURE_2D, Gt), at(V.__webglFramebuffer, R, Gt, i.COLOR_ATTACHMENT0 + ct, i.TEXTURE_2D, 0), g(Gt) && p(i.TEXTURE_2D) } e.unbindTexture() } else { let ct = i.TEXTURE_2D; if ((R.isWebGL3DRenderTarget || R.isWebGLArrayRenderTarget) && (ct = R.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), e.bindTexture(ct, K.__webglTexture), At(ct, M), M.mipmaps && M.mipmaps.length > 0) for (let pt = 0; pt < M.mipmaps.length; pt++)at(V.__webglFramebuffer[pt], R, M, i.COLOR_ATTACHMENT0, ct, pt); else at(V.__webglFramebuffer, R, M, i.COLOR_ATTACHMENT0, ct, 0); g(M) && p(ct), e.unbindTexture() } R.depthBuffer && Rt(R) } function nt(R) { let M = R.textures; for (let V = 0, K = M.length; V < K; V++) { let Q = M[V]; if (g(Q)) { let J = y(R), bt = n.get(Q).__webglTexture; e.bindTexture(J, bt), p(J), e.unbindTexture() } } } let yt = [], L = []; function qt(R) { if (R.samples > 0) { if (Ot(R) === !1) { let M = R.textures, V = R.width, K = R.height, Q = i.COLOR_BUFFER_BIT, J = R.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, bt = n.get(R), ct = M.length > 1; if (ct) for (let pt = 0; pt < M.length; pt++)e.bindFramebuffer(i.FRAMEBUFFER, bt.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + pt, i.RENDERBUFFER, null), e.bindFramebuffer(i.FRAMEBUFFER, bt.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + pt, i.TEXTURE_2D, null, 0); e.bindFramebuffer(i.READ_FRAMEBUFFER, bt.__webglMultisampledFramebuffer), e.bindFramebuffer(i.DRAW_FRAMEBUFFER, bt.__webglFramebuffer); for (let pt = 0; pt < M.length; pt++) { if (R.resolveDepthBuffer && (R.depthBuffer && (Q |= i.DEPTH_BUFFER_BIT), R.stencilBuffer && R.resolveStencilBuffer && (Q |= i.STENCIL_BUFFER_BIT)), ct) { i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, bt.__webglColorRenderbuffer[pt]); let Gt = n.get(M[pt]).__webglTexture; i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, Gt, 0) } i.blitFramebuffer(0, 0, V, K, 0, 0, V, K, Q, i.NEAREST), l === !0 && (yt.length = 0, L.length = 0, yt.push(i.COLOR_ATTACHMENT0 + pt), R.depthBuffer && R.resolveDepthBuffer === !1 && (yt.push(J), L.push(J), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, L)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, yt)) } if (e.bindFramebuffer(i.READ_FRAMEBUFFER, null), e.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), ct) for (let pt = 0; pt < M.length; pt++) { e.bindFramebuffer(i.FRAMEBUFFER, bt.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + pt, i.RENDERBUFFER, bt.__webglColorRenderbuffer[pt]); let Gt = n.get(M[pt]).__webglTexture; e.bindFramebuffer(i.FRAMEBUFFER, bt.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + pt, i.TEXTURE_2D, Gt, 0) } e.bindFramebuffer(i.DRAW_FRAMEBUFFER, bt.__webglMultisampledFramebuffer) } else if (R.depthBuffer && R.resolveDepthBuffer === !1 && l) { let M = R.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT; i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [M]) } } } function ft(R) { return Math.min(s.maxSamples, R.samples) } function Ot(R) { let M = n.get(R); return R.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && M.__useRenderToTexture !== !1 } function Ct(R) { let M = a.render.frame; h.get(R) !== M && (h.set(R, M), R.update()) } function Jt(R, M) { let V = R.colorSpace, K = R.format, Q = R.type; return R.isCompressedTexture === !0 || R.isVideoTexture === !0 || V !== ar && V !== Pi && ($t.getTransfer(V) === ie ? (K !== Pn || Q !== ci) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", V)), M } function Et(R) { return typeof HTMLImageElement != "undefined" && R instanceof HTMLImageElement ? (c.width = R.naturalWidth || R.width, c.height = R.naturalHeight || R.height) : typeof VideoFrame != "undefined" && R instanceof VideoFrame ? (c.width = R.displayWidth, c.height = R.displayHeight) : (c.width = R.width, c.height = R.height), c } this.allocateTextureUnit = z, this.resetTextureUnits = H, this.setTexture2D = U, this.setTexture2DArray = I, this.setTexture3D = G, this.setTextureCube = D, this.rebindTextures = Nt, this.setupRenderTarget = Zt, this.updateRenderTargetMipmap = nt, this.updateMultisampleRenderTarget = qt, this.setupDepthRenderbuffer = Rt, this.setupFrameBufferTexture = at, this.useMultisampledRTT = Ot } function Qx(i, t) { function e(n, s = Pi) { let r, a = $t.getTransfer(s); if (n === ci) return i.UNSIGNED_BYTE; if (n === Ph) return i.UNSIGNED_SHORT_4_4_4_4; if (n === Ih) return i.UNSIGNED_SHORT_5_5_5_1; if (n === Rf) return i.UNSIGNED_INT_5_9_9_9_REV; if (n === Af) return i.BYTE; if (n === Cf) return i.SHORT; if (n === Fr) return i.UNSIGNED_SHORT; if (n === Rh) return i.INT; if (n === us) return i.UNSIGNED_INT; if (n === ai) return i.FLOAT; if (n === zr) return i.HALF_FLOAT; if (n === Pf) return i.ALPHA; if (n === If) return i.RGB; if (n === Pn) return i.RGBA; if (n === Lf) return i.LUMINANCE; if (n === Df) return i.LUMINANCE_ALPHA; if (n === $s) return i.DEPTH_COMPONENT; if (n === tr) return i.DEPTH_STENCIL; if (n === Uf) return i.RED; if (n === Lh) return i.RED_INTEGER; if (n === Nf) return i.RG; if (n === Dh) return i.RG_INTEGER; if (n === Uh) return i.RGBA_INTEGER; if (n === Ha || n === Ga || n === Wa || n === Xa) if (a === ie) if (r = t.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) { if (n === Ha) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT; if (n === Ga) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT; if (n === Wa) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT; if (n === Xa) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT } else return null; else if (r = t.get("WEBGL_compressed_texture_s3tc"), r !== null) { if (n === Ha) return r.COMPRESSED_RGB_S3TC_DXT1_EXT; if (n === Ga) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT; if (n === Wa) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT; if (n === Xa) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT } else return null; if (n === Mc || n === wc || n === Ec || n === Tc) if (r = t.get("WEBGL_compressed_texture_pvrtc"), r !== null) { if (n === Mc) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG; if (n === wc) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG; if (n === Ec) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG; if (n === Tc) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG } else return null; if (n === Ac || n === Cc || n === Rc) if (r = t.get("WEBGL_compressed_texture_etc"), r !== null) { if (n === Ac || n === Cc) return a === ie ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2; if (n === Rc) return a === ie ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC } else return null; if (n === Pc || n === Ic || n === Lc || n === Dc || n === Uc || n === Nc || n === Oc || n === Fc || n === kc || n === Bc || n === zc || n === Vc || n === Hc || n === Gc) if (r = t.get("WEBGL_compressed_texture_astc"), r !== null) { if (n === Pc) return a === ie ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR; if (n === Ic) return a === ie ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR; if (n === Lc) return a === ie ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR; if (n === Dc) return a === ie ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR; if (n === Uc) return a === ie ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR; if (n === Nc) return a === ie ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR; if (n === Oc) return a === ie ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR; if (n === Fc) return a === ie ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR; if (n === kc) return a === ie ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR; if (n === Bc) return a === ie ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR; if (n === zc) return a === ie ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR; if (n === Vc) return a === ie ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR; if (n === Hc) return a === ie ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR; if (n === Gc) return a === ie ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR } else return null; if (n === qa || n === Wc || n === Xc) if (r = t.get("EXT_texture_compression_bptc"), r !== null) { if (n === qa) return a === ie ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT; if (n === Wc) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT; if (n === Xc) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT } else return null; if (n === Of || n === qc || n === $c || n === Yc) if (r = t.get("EXT_texture_compression_rgtc"), r !== null) { if (n === qa) return r.COMPRESSED_RED_RGTC1_EXT; if (n === qc) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT; if (n === $c) return r.COMPRESSED_RED_GREEN_RGTC2_EXT; if (n === Yc) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT } else return null; return n === Qs ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null } return { convert: e } } var uh = class extends Ye { constructor(t = []) { super(), this.isArrayCamera = !0, this.cameras = t } }, Gn = class extends fn { constructor() { super(), this.isGroup = !0, this.type = "Group" } }, tb = { type: "move" }, Or = class { constructor() { this._targetRay = null, this._grip = null, this._hand = null } getHandSpace() { return this._hand === null && (this._hand = new Gn, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand } getTargetRaySpace() { return this._targetRay === null && (this._targetRay = new Gn, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new k, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new k), this._targetRay } getGripSpace() { return this._grip === null && (this._grip = new Gn, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new k, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new k), this._grip } dispatchEvent(t) { return this._targetRay !== null && this._targetRay.dispatchEvent(t), this._grip !== null && this._grip.dispatchEvent(t), this._hand !== null && this._hand.dispatchEvent(t), this } connect(t) { if (t && t.hand) { let e = this._hand; if (e) for (let n of t.hand.values()) this._getHandJoint(e, n) } return this.dispatchEvent({ type: "connected", data: t }), this } disconnect(t) { return this.dispatchEvent({ type: "disconnected", data: t }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this } update(t, e, n) { let s = null, r = null, a = null, o = this._targetRay, l = this._grip, c = this._hand; if (t && e.session.visibilityState !== "visible-blurred") { if (c && t.hand) { a = !0; for (let _ of t.hand.values()) { let g = e.getJointPose(_, n), p = this._getHandJoint(c, _); g !== null && (p.matrix.fromArray(g.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.matrixWorldNeedsUpdate = !0, p.jointRadius = g.radius), p.visible = g !== null } let h = c.joints["index-finger-tip"], d = c.joints["thumb-tip"], u = h.position.distanceTo(d.position), f = .02, m = .005; c.inputState.pinching && u > f + m ? (c.inputState.pinching = !1, this.dispatchEvent({ type: "pinchend", handedness: t.handedness, target: this })) : !c.inputState.pinching && u <= f - m && (c.inputState.pinching = !0, this.dispatchEvent({ type: "pinchstart", handedness: t.handedness, target: this })) } else l !== null && t.gripSpace && (r = e.getPose(t.gripSpace, n), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = !1, r.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = !1)); o !== null && (s = e.getPose(t.targetRaySpace, n), s === null && r !== null && (s = r), s !== null && (o.matrix.fromArray(s.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(s.linearVelocity)) : o.hasLinearVelocity = !1, s.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(s.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(tb))) } return o !== null && (o.visible = s !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = a !== null), this } _getHandJoint(t, e) { if (t.joints[e.jointName] === void 0) { let n = new Gn; n.matrixAutoUpdate = !1, n.visible = !1, t.joints[e.jointName] = n, t.add(n) } return t.joints[e.jointName] } }, eb =`
void main() {

	gl_Position = vec4( position, 1.0 );

}`, nb =`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`, dh = class { constructor() { this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0 } init(t, e, n) { if (this.texture === null) { let s = new xn, r = t.properties.get(s); r.__webglTexture = e.texture, (e.depthNear != n.depthNear || e.depthFar != n.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = s } } getMesh(t) { if (this.texture !== null && this.mesh === null) { let e = t.cameras[0].viewport, n = new bn({ vertexShader: eb, fragmentShader: nb, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: e.z }, depthHeight: { value: e.w } } }); this.mesh = new sn(new nr(20, 20), n) } return this.mesh } reset() { this.texture = null, this.mesh = null } getDepthTexture() { return this.texture } }, fh = class extends Oi { constructor(t, e) { super(); let n = this, s = null, r = 1, a = null, o = "local-floor", l = 1, c = null, h = null, d = null, u = null, f = null, m = null, _ = new dh, g = e.getContextAttributes(), p = null, y = null, x = [], v = [], A = new Xt, T = null, E = new Ye; E.viewport = new we; let C = new Ye; C.viewport = new we; let b = [E, C], S = new uh, P = null, H = null; this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function (Z) { let et = x[Z]; return et === void 0 && (et = new Or, x[Z] = et), et.getTargetRaySpace() }, this.getControllerGrip = function (Z) { let et = x[Z]; return et === void 0 && (et = new Or, x[Z] = et), et.getGripSpace() }, this.getHand = function (Z) { let et = x[Z]; return et === void 0 && (et = new Or, x[Z] = et), et.getHandSpace() }; function z(Z) { let et = v.indexOf(Z.inputSource); if (et === -1) return; let at = x[et]; at !== void 0 && (at.update(Z.inputSource, Z.frame, c || a), at.dispatchEvent({ type: Z.type, data: Z.inputSource })) } function W() { s.removeEventListener("select", z), s.removeEventListener("selectstart", z), s.removeEventListener("selectend", z), s.removeEventListener("squeeze", z), s.removeEventListener("squeezestart", z), s.removeEventListener("squeezeend", z), s.removeEventListener("end", W), s.removeEventListener("inputsourceschange", U); for (let Z = 0; Z < x.length; Z++) { let et = v[Z]; et !== null && (v[Z] = null, x[Z].disconnect(et)) } P = null, H = null, _.reset(), t.setRenderTarget(p), f = null, u = null, d = null, s = null, y = null, Ut.stop(), n.isPresenting = !1, t.setPixelRatio(T), t.setSize(A.width, A.height, !1), n.dispatchEvent({ type: "sessionend" }) } this.setFramebufferScaleFactor = function (Z) { r = Z, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.") }, this.setReferenceSpaceType = function (Z) { o = Z, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.") }, this.getReferenceSpace = function () { return c || a }, this.setReferenceSpace = function (Z) { c = Z }, this.getBaseLayer = function () { return u !== null ? u : f }, this.getBinding = function () { return d }, this.getFrame = function () { return m }, this.getSession = function () { return s }, this.setSession = async function (Z) { if (s = Z, s !== null) { if (p = t.getRenderTarget(), s.addEventListener("select", z), s.addEventListener("selectstart", z), s.addEventListener("selectend", z), s.addEventListener("squeeze", z), s.addEventListener("squeezestart", z), s.addEventListener("squeezeend", z), s.addEventListener("end", W), s.addEventListener("inputsourceschange", U), g.xrCompatible !== !0 && await e.makeXRCompatible(), T = t.getPixelRatio(), t.getSize(A), s.renderState.layers === void 0) { let et = { antialias: g.antialias, alpha: !0, depth: g.depth, stencil: g.stencil, framebufferScaleFactor: r }; f = new XRWebGLLayer(s, e, et), s.updateRenderState({ baseLayer: f }), t.setPixelRatio(1), t.setSize(f.framebufferWidth, f.framebufferHeight, !1), y = new hi(f.framebufferWidth, f.framebufferHeight, { format: Pn, type: ci, colorSpace: t.outputColorSpace, stencilBuffer: g.stencil }) } else { let et = null, at = null, lt = null; g.depth && (lt = g.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, et = g.stencil ? tr : $s, at = g.stencil ? Qs : us); let vt = { colorFormat: e.RGBA8, depthFormat: lt, scaleFactor: r }; d = new XRWebGLBinding(s, e), u = d.createProjectionLayer(vt), s.updateRenderState({ layers: [u] }), t.setPixelRatio(1), t.setSize(u.textureWidth, u.textureHeight, !1), y = new hi(u.textureWidth, u.textureHeight, { format: Pn, type: ci, depthTexture: new ao(u.textureWidth, u.textureHeight, at, void 0, void 0, void 0, void 0, void 0, void 0, et), stencilBuffer: g.stencil, colorSpace: t.outputColorSpace, samples: g.antialias ? 4 : 0, resolveDepthBuffer: u.ignoreDepthValues === !1 }) } y.isXRRenderTarget = !0, this.setFoveation(l), c = null, a = await s.requestReferenceSpace(o), Ut.setContext(s), Ut.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" }) } }, this.getEnvironmentBlendMode = function () { if (s !== null) return s.environmentBlendMode }, this.getDepthTexture = function () { return _.getDepthTexture() }; function U(Z) { for (let et = 0; et < Z.removed.length; et++) { let at = Z.removed[et], lt = v.indexOf(at); lt >= 0 && (v[lt] = null, x[lt].disconnect(at)) } for (let et = 0; et < Z.added.length; et++) { let at = Z.added[et], lt = v.indexOf(at); if (lt === -1) { for (let Rt = 0; Rt < x.length; Rt++)if (Rt >= v.length) { v.push(at), lt = Rt; break } else if (v[Rt] === null) { v[Rt] = at, lt = Rt; break } if (lt === -1) break } let vt = x[lt]; vt && vt.connect(at) } } let I = new k, G = new k; function D(Z, et, at) { I.setFromMatrixPosition(et.matrixWorld), G.setFromMatrixPosition(at.matrixWorld); let lt = I.distanceTo(G), vt = et.projectionMatrix.elements, Rt = at.projectionMatrix.elements, Nt = vt[14] / (vt[10] - 1), Zt = vt[14] / (vt[10] + 1), nt = (vt[9] + 1) / vt[5], yt = (vt[9] - 1) / vt[5], L = (vt[8] - 1) / vt[0], qt = (Rt[8] + 1) / Rt[0], ft = Nt * L, Ot = Nt * qt, Ct = lt / (-L + qt), Jt = Ct * -L; if (et.matrixWorld.decompose(Z.position, Z.quaternion, Z.scale), Z.translateX(Jt), Z.translateZ(Ct), Z.matrixWorld.compose(Z.position, Z.quaternion, Z.scale), Z.matrixWorldInverse.copy(Z.matrixWorld).invert(), vt[10] === -1) Z.projectionMatrix.copy(et.projectionMatrix), Z.projectionMatrixInverse.copy(et.projectionMatrixInverse); else { let Et = Nt + Ct, R = Zt + Ct, M = ft - Jt, V = Ot + (lt - Jt), K = nt * Zt / R * Et, Q = yt * Zt / R * Et; Z.projectionMatrix.makePerspective(M, V, K, Q, Et, R), Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert() } } function tt(Z, et) { et === null ? Z.matrixWorld.copy(Z.matrix) : Z.matrixWorld.multiplyMatrices(et.matrixWorld, Z.matrix), Z.matrixWorldInverse.copy(Z.matrixWorld).invert() } this.updateCamera = function (Z) { if (s === null) return; let et = Z.near, at = Z.far; _.texture !== null && (_.depthNear > 0 && (et = _.depthNear), _.depthFar > 0 && (at = _.depthFar)), S.near = C.near = E.near = et, S.far = C.far = E.far = at, (P !== S.near || H !== S.far) && (s.updateRenderState({ depthNear: S.near, depthFar: S.far }), P = S.near, H = S.far), E.layers.mask = Z.layers.mask | 2, C.layers.mask = Z.layers.mask | 4, S.layers.mask = E.layers.mask | C.layers.mask; let lt = Z.parent, vt = S.cameras; tt(S, lt); for (let Rt = 0; Rt < vt.length; Rt++)tt(vt[Rt], lt); vt.length === 2 ? D(S, E, C) : S.projectionMatrix.copy(E.projectionMatrix), j(Z, S, lt) }; function j(Z, et, at) { at === null ? Z.matrix.copy(et.matrixWorld) : (Z.matrix.copy(at.matrixWorld), Z.matrix.invert(), Z.matrix.multiply(et.matrixWorld)), Z.matrix.decompose(Z.position, Z.quaternion, Z.scale), Z.updateMatrixWorld(!0), Z.projectionMatrix.copy(et.projectionMatrix), Z.projectionMatrixInverse.copy(et.projectionMatrixInverse), Z.isPerspectiveCamera && (Z.fov = Jc * 2 * Math.atan(1 / Z.projectionMatrix.elements[5]), Z.zoom = 1) } this.getCamera = function () { return S }, this.getFoveation = function () { if (!(u === null && f === null)) return l }, this.setFoveation = function (Z) { l = Z, u !== null && (u.fixedFoveation = Z), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = Z) }, this.hasDepthSensing = function () { return _.texture !== null }, this.getDepthSensingMesh = function () { return _.getMesh(S) }; let dt = null; function At(Z, et) { if (h = et.getViewerPose(c || a), m = et, h !== null) { let at = h.views; f !== null && (t.setRenderTargetFramebuffer(y, f.framebuffer), t.setRenderTarget(y)); let lt = !1; at.length !== S.cameras.length && (S.cameras.length = 0, lt = !0); for (let Rt = 0; Rt < at.length; Rt++) { let Nt = at[Rt], Zt = null; if (f !== null) Zt = f.getViewport(Nt); else { let yt = d.getViewSubImage(u, Nt); Zt = yt.viewport, Rt === 0 && (t.setRenderTargetTextures(y, yt.colorTexture, u.ignoreDepthValues ? void 0 : yt.depthStencilTexture), t.setRenderTarget(y)) } let nt = b[Rt]; nt === void 0 && (nt = new Ye, nt.layers.enable(Rt), nt.viewport = new we, b[Rt] = nt), nt.matrix.fromArray(Nt.transform.matrix), nt.matrix.decompose(nt.position, nt.quaternion, nt.scale), nt.projectionMatrix.fromArray(Nt.projectionMatrix), nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(), nt.viewport.set(Zt.x, Zt.y, Zt.width, Zt.height), Rt === 0 && (S.matrix.copy(nt.matrix), S.matrix.decompose(S.position, S.quaternion, S.scale)), lt === !0 && S.cameras.push(nt) } let vt = s.enabledFeatures; if (vt && vt.includes("depth-sensing")) { let Rt = d.getDepthInformation(at[0]); Rt && Rt.isValid && Rt.texture && _.init(t, Rt, s.renderState) } } for (let at = 0; at < x.length; at++) { let lt = v[at], vt = x[at]; lt !== null && vt !== void 0 && vt.update(lt, et, c || a) } dt && dt(Z, et), et.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: et }), m = null } let Ut = new Vf; Ut.setAnimationLoop(At), this.setAnimationLoop = function (Z) { dt = Z }, this.dispose = function () { } } }, rs = new ui, ib = new be; function sb(i, t) { function e(g, p) { g.matrixAutoUpdate === !0 && g.updateMatrix(), p.value.copy(g.matrix) } function n(g, p) { p.color.getRGB(g.fogColor.value, zf(i)), p.isFog ? (g.fogNear.value = p.near, g.fogFar.value = p.far) : p.isFogExp2 && (g.fogDensity.value = p.density) } function s(g, p, y, x, v) { p.isMeshBasicMaterial || p.isMeshLambertMaterial ? r(g, p) : p.isMeshToonMaterial ? (r(g, p), d(g, p)) : p.isMeshPhongMaterial ? (r(g, p), h(g, p)) : p.isMeshStandardMaterial ? (r(g, p), u(g, p), p.isMeshPhysicalMaterial && f(g, p, v)) : p.isMeshMatcapMaterial ? (r(g, p), m(g, p)) : p.isMeshDepthMaterial ? r(g, p) : p.isMeshDistanceMaterial ? (r(g, p), _(g, p)) : p.isMeshNormalMaterial ? r(g, p) : p.isLineBasicMaterial ? (a(g, p), p.isLineDashedMaterial && o(g, p)) : p.isPointsMaterial ? l(g, p, y, x) : p.isSpriteMaterial ? c(g, p) : p.isShadowMaterial ? (g.color.value.copy(p.color), g.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1) } function r(g, p) { g.opacity.value = p.opacity, p.color && g.diffuse.value.copy(p.color), p.emissive && g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (g.map.value = p.map, e(p.map, g.mapTransform)), p.alphaMap && (g.alphaMap.value = p.alphaMap, e(p.alphaMap, g.alphaMapTransform)), p.bumpMap && (g.bumpMap.value = p.bumpMap, e(p.bumpMap, g.bumpMapTransform), g.bumpScale.value = p.bumpScale, p.side === rn && (g.bumpScale.value *= -1)), p.normalMap && (g.normalMap.value = p.normalMap, e(p.normalMap, g.normalMapTransform), g.normalScale.value.copy(p.normalScale), p.side === rn && g.normalScale.value.negate()), p.displacementMap && (g.displacementMap.value = p.displacementMap, e(p.displacementMap, g.displacementMapTransform), g.displacementScale.value = p.displacementScale, g.displacementBias.value = p.displacementBias), p.emissiveMap && (g.emissiveMap.value = p.emissiveMap, e(p.emissiveMap, g.emissiveMapTransform)), p.specularMap && (g.specularMap.value = p.specularMap, e(p.specularMap, g.specularMapTransform)), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest); let y = t.get(p), x = y.envMap, v = y.envMapRotation; x && (g.envMap.value = x, rs.copy(v), rs.x *= -1, rs.y *= -1, rs.z *= -1, x.isCubeTexture && x.isRenderTargetTexture === !1 && (rs.y *= -1, rs.z *= -1), g.envMapRotation.value.setFromMatrix4(ib.makeRotationFromEuler(rs)), g.flipEnvMap.value = x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1, g.reflectivity.value = p.reflectivity, g.ior.value = p.ior, g.refractionRatio.value = p.refractionRatio), p.lightMap && (g.lightMap.value = p.lightMap, g.lightMapIntensity.value = p.lightMapIntensity, e(p.lightMap, g.lightMapTransform)), p.aoMap && (g.aoMap.value = p.aoMap, g.aoMapIntensity.value = p.aoMapIntensity, e(p.aoMap, g.aoMapTransform)) } function a(g, p) { g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, p.map && (g.map.value = p.map, e(p.map, g.mapTransform)) } function o(g, p) { g.dashSize.value = p.dashSize, g.totalSize.value = p.dashSize + p.gapSize, g.scale.value = p.scale } function l(g, p, y, x) { g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, g.size.value = p.size * y, g.scale.value = x * .5, p.map && (g.map.value = p.map, e(p.map, g.uvTransform)), p.alphaMap && (g.alphaMap.value = p.alphaMap, e(p.alphaMap, g.alphaMapTransform)), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest) } function c(g, p) { g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, g.rotation.value = p.rotation, p.map && (g.map.value = p.map, e(p.map, g.mapTransform)), p.alphaMap && (g.alphaMap.value = p.alphaMap, e(p.alphaMap, g.alphaMapTransform)), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest) } function h(g, p) { g.specular.value.copy(p.specular), g.shininess.value = Math.max(p.shininess, 1e-4) } function d(g, p) { p.gradientMap && (g.gradientMap.value = p.gradientMap) } function u(g, p) { g.metalness.value = p.metalness, p.metalnessMap && (g.metalnessMap.value = p.metalnessMap, e(p.metalnessMap, g.metalnessMapTransform)), g.roughness.value = p.roughness, p.roughnessMap && (g.roughnessMap.value = p.roughnessMap, e(p.roughnessMap, g.roughnessMapTransform)), p.envMap && (g.envMapIntensity.value = p.envMapIntensity) } function f(g, p, y) { g.ior.value = p.ior, p.sheen > 0 && (g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), g.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (g.sheenColorMap.value = p.sheenColorMap, e(p.sheenColorMap, g.sheenColorMapTransform)), p.sheenRoughnessMap && (g.sheenRoughnessMap.value = p.sheenRoughnessMap, e(p.sheenRoughnessMap, g.sheenRoughnessMapTransform))), p.clearcoat > 0 && (g.clearcoat.value = p.clearcoat, g.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (g.clearcoatMap.value = p.clearcoatMap, e(p.clearcoatMap, g.clearcoatMapTransform)), p.clearcoatRoughnessMap && (g.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, e(p.clearcoatRoughnessMap, g.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (g.clearcoatNormalMap.value = p.clearcoatNormalMap, e(p.clearcoatNormalMap, g.clearcoatNormalMapTransform), g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === rn && g.clearcoatNormalScale.value.negate())), p.dispersion > 0 && (g.dispersion.value = p.dispersion), p.iridescence > 0 && (g.iridescence.value = p.iridescence, g.iridescenceIOR.value = p.iridescenceIOR, g.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], g.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (g.iridescenceMap.value = p.iridescenceMap, e(p.iridescenceMap, g.iridescenceMapTransform)), p.iridescenceThicknessMap && (g.iridescenceThicknessMap.value = p.iridescenceThicknessMap, e(p.iridescenceThicknessMap, g.iridescenceThicknessMapTransform))), p.transmission > 0 && (g.transmission.value = p.transmission, g.transmissionSamplerMap.value = y.texture, g.transmissionSamplerSize.value.set(y.width, y.height), p.transmissionMap && (g.transmissionMap.value = p.transmissionMap, e(p.transmissionMap, g.transmissionMapTransform)), g.thickness.value = p.thickness, p.thicknessMap && (g.thicknessMap.value = p.thicknessMap, e(p.thicknessMap, g.thicknessMapTransform)), g.attenuationDistance.value = p.attenuationDistance, g.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (g.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (g.anisotropyMap.value = p.anisotropyMap, e(p.anisotropyMap, g.anisotropyMapTransform))), g.specularIntensity.value = p.specularIntensity, g.specularColor.value.copy(p.specularColor), p.specularColorMap && (g.specularColorMap.value = p.specularColorMap, e(p.specularColorMap, g.specularColorMapTransform)), p.specularIntensityMap && (g.specularIntensityMap.value = p.specularIntensityMap, e(p.specularIntensityMap, g.specularIntensityMapTransform)) } function m(g, p) { p.matcap && (g.matcap.value = p.matcap) } function _(g, p) { let y = t.get(p).light; g.referencePosition.value.setFromMatrixPosition(y.matrixWorld), g.nearDistance.value = y.shadow.camera.near, g.farDistance.value = y.shadow.camera.far } return { refreshFogUniforms: n, refreshMaterialUniforms: s } } function rb(i, t, e, n) { let s = {}, r = {}, a = [], o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS); function l(y, x) { let v = x.program; n.uniformBlockBinding(y, v) } function c(y, x) { let v = s[y.id]; v === void 0 && (m(y), v = h(y), s[y.id] = v, y.addEventListener("dispose", g)); let A = x.program; n.updateUBOMapping(y, A); let T = t.render.frame; r[y.id] !== T && (u(y), r[y.id] = T) } function h(y) { let x = d(); y.__bindingPointIndex = x; let v = i.createBuffer(), A = y.__size, T = y.usage; return i.bindBuffer(i.UNIFORM_BUFFER, v), i.bufferData(i.UNIFORM_BUFFER, A, T), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, x, v), v } function d() { for (let y = 0; y < o; y++)if (a.indexOf(y) === -1) return a.push(y), y; return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0 } function u(y) { let x = s[y.id], v = y.uniforms, A = y.__cache; i.bindBuffer(i.UNIFORM_BUFFER, x); for (let T = 0, E = v.length; T < E; T++) { let C = Array.isArray(v[T]) ? v[T] : [v[T]]; for (let b = 0, S = C.length; b < S; b++) { let P = C[b]; if (f(P, T, b, A) === !0) { let H = P.__offset, z = Array.isArray(P.value) ? P.value : [P.value], W = 0; for (let U = 0; U < z.length; U++) { let I = z[U], G = _(I); typeof I == "number" || typeof I == "boolean" ? (P.__data[0] = I, i.bufferSubData(i.UNIFORM_BUFFER, H + W, P.__data)) : I.isMatrix3 ? (P.__data[0] = I.elements[0], P.__data[1] = I.elements[1], P.__data[2] = I.elements[2], P.__data[3] = 0, P.__data[4] = I.elements[3], P.__data[5] = I.elements[4], P.__data[6] = I.elements[5], P.__data[7] = 0, P.__data[8] = I.elements[6], P.__data[9] = I.elements[7], P.__data[10] = I.elements[8], P.__data[11] = 0) : (I.toArray(P.__data, W), W += G.storage / Float32Array.BYTES_PER_ELEMENT) } i.bufferSubData(i.UNIFORM_BUFFER, H, P.__data) } } } i.bindBuffer(i.UNIFORM_BUFFER, null) } function f(y, x, v, A) { let T = y.value, E = x + "_" + v; if (A[E] === void 0) return typeof T == "number" || typeof T == "boolean" ? A[E] = T : A[E] = T.clone(), !0; { let C = A[E]; if (typeof T == "number" || typeof T == "boolean") { if (C !== T) return A[E] = T, !0 } else if (C.equals(T) === !1) return C.copy(T), !0 } return !1 } function m(y) { let x = y.uniforms, v = 0, A = 16; for (let E = 0, C = x.length; E < C; E++) { let b = Array.isArray(x[E]) ? x[E] : [x[E]]; for (let S = 0, P = b.length; S < P; S++) { let H = b[S], z = Array.isArray(H.value) ? H.value : [H.value]; for (let W = 0, U = z.length; W < U; W++) { let I = z[W], G = _(I), D = v % A, tt = D % G.boundary, j = D + tt; v += tt, j !== 0 && A - j < G.storage && (v += A - j), H.__data = new Float32Array(G.storage / Float32Array.BYTES_PER_ELEMENT), H.__offset = v, v += G.storage } } } let T = v % A; return T > 0 && (v += A - T), y.__size = v, y.__cache = {}, this } function _(y) { let x = { boundary: 0, storage: 0 }; return typeof y == "number" || typeof y == "boolean" ? (x.boundary = 4, x.storage = 4) : y.isVector2 ? (x.boundary = 8, x.storage = 8) : y.isVector3 || y.isColor ? (x.boundary = 16, x.storage = 12) : y.isVector4 ? (x.boundary = 16, x.storage = 16) : y.isMatrix3 ? (x.boundary = 48, x.storage = 48) : y.isMatrix4 ? (x.boundary = 64, x.storage = 64) : y.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", y), x } function g(y) { let x = y.target; x.removeEventListener("dispose", g); let v = a.indexOf(x.__bindingPointIndex); a.splice(v, 1), i.deleteBuffer(s[x.id]), delete s[x.id], delete r[x.id] } function p() { for (let y in s) i.deleteBuffer(s[y]); a = [], s = {}, r = {} } return { bind: l, update: c, dispose: p } } var oo = class { constructor(t = {}) { let { canvas: e = c0(), context: n = null, depth: s = !0, stencil: r = !1, alpha: a = !1, antialias: o = !1, premultipliedAlpha: l = !0, preserveDrawingBuffer: c = !1, powerPreference: h = "default", failIfMajorPerformanceCaveat: d = !1, reverseDepthBuffer: u = !1 } = t; this.isWebGLRenderer = !0; let f; if (n !== null) { if (typeof WebGLRenderingContext != "undefined" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163."); f = n.getContextAttributes().alpha } else f = a; let m = new Uint32Array(4), _ = new Int32Array(4), g = null, p = null, y = [], x = []; this.domElement = e, this.debug = { checkShaderErrors: !0, onShaderError: null }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = yn, this.toneMapping = Ui, this.toneMappingExposure = 1; let v = this, A = !1, T = 0, E = 0, C = null, b = -1, S = null, P = new we, H = new we, z = null, W = new Ht(0), U = 0, I = e.width, G = e.height, D = 1, tt = null, j = null, dt = new we(0, 0, I, G), At = new we(0, 0, I, G), Ut = !1, Z = new so, et = !1, at = !1, lt = new be, vt = new be, Rt = new k, Nt = new we, Zt = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 }, nt = !1; function yt() { return C === null ? D : 1 } let L = n; function qt(w, O) { return e.getContext(w, O) } try { let w = { alpha: !0, depth: s, stencil: r, antialias: o, premultipliedAlpha: l, preserveDrawingBuffer: c, powerPreference: h, failIfMajorPerformanceCaveat: d }; if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${Ch}`), e.addEventListener("webglcontextlost", X, !1), e.addEventListener("webglcontextrestored", it, !1), e.addEventListener("webglcontextcreationerror", rt, !1), L === null) { let O = "webgl2"; if (L = qt(O, w), L === null) throw qt(O) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.") } } catch (w) { throw console.error("THREE.WebGLRenderer: " + w.message), w } let ft, Ot, Ct, Jt, Et, R, M, V, K, Q, J, bt, ct, pt, Gt, st, gt, Pt, It, mt, zt, Lt, jt, N; function q() { ft = new by(L), ft.init(), Lt = new Qx(L, ft), Ot = new my(L, ft, t, Lt), Ct = new Jx(L, ft), Ot.reverseDepthBuffer && u && Ct.buffers.depth.setReversed(!0), Jt = new wy(L), Et = new Fx, R = new Kx(L, ft, Ct, Et, Ot, Lt, Jt), M = new _y(v), V = new xy(v), K = new I0(L), jt = new fy(L, K), Q = new Sy(L, K, Jt, jt), J = new Ty(L, Q, K, Jt), It = new Ey(L, Ot, R), st = new gy(Et), bt = new Ox(v, M, V, ft, Ot, jt, st), ct = new sb(v, Et), pt = new Bx, Gt = new Xx(ft), Pt = new dy(v, M, V, Ct, J, f, l), gt = new Yx(v, J, Ot), N = new rb(L, Jt, Ot, Ct), mt = new py(L, ft, Jt), zt = new My(L, ft, Jt), Jt.programs = bt.programs, v.capabilities = Ot, v.extensions = ft, v.properties = Et, v.renderLists = pt, v.shadowMap = gt, v.state = Ct, v.info = Jt } q(); let B = new fh(v, L); this.xr = B, this.getContext = function () { return L }, this.getContextAttributes = function () { return L.getContextAttributes() }, this.forceContextLoss = function () { let w = ft.get("WEBGL_lose_context"); w && w.loseContext() }, this.forceContextRestore = function () { let w = ft.get("WEBGL_lose_context"); w && w.restoreContext() }, this.getPixelRatio = function () { return D }, this.setPixelRatio = function (w) { w !== void 0 && (D = w, this.setSize(I, G, !1)) }, this.getSize = function (w) { return w.set(I, G) }, this.setSize = function (w, O, $ = !0) { if (B.isPresenting) { console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."); return } I = w, G = O, e.width = Math.floor(w * D), e.height = Math.floor(O * D), $ === !0 && (e.style.width = w + "px", e.style.height = O + "px"), this.setViewport(0, 0, w, O) }, this.getDrawingBufferSize = function (w) { return w.set(I * D, G * D).floor() }, this.setDrawingBufferSize = function (w, O, $) { I = w, G = O, D = $, e.width = Math.floor(w * $), e.height = Math.floor(O * $), this.setViewport(0, 0, w, O) }, this.getCurrentViewport = function (w) { return w.copy(P) }, this.getViewport = function (w) { return w.copy(dt) }, this.setViewport = function (w, O, $, Y) { w.isVector4 ? dt.set(w.x, w.y, w.z, w.w) : dt.set(w, O, $, Y), Ct.viewport(P.copy(dt).multiplyScalar(D).round()) }, this.getScissor = function (w) { return w.copy(At) }, this.setScissor = function (w, O, $, Y) { w.isVector4 ? At.set(w.x, w.y, w.z, w.w) : At.set(w, O, $, Y), Ct.scissor(H.copy(At).multiplyScalar(D).round()) }, this.getScissorTest = function () { return Ut }, this.setScissorTest = function (w) { Ct.setScissorTest(Ut = w) }, this.setOpaqueSort = function (w) { tt = w }, this.setTransparentSort = function (w) { j = w }, this.getClearColor = function (w) { return w.copy(Pt.getClearColor()) }, this.setClearColor = function () { Pt.setClearColor.apply(Pt, arguments) }, this.getClearAlpha = function () { return Pt.getClearAlpha() }, this.setClearAlpha = function () { Pt.setClearAlpha.apply(Pt, arguments) }, this.clear = function (w = !0, O = !0, $ = !0) { let Y = 0; if (w) { let F = !1; if (C !== null) { let ot = C.texture.format; F = ot === Uh || ot === Dh || ot === Lh } if (F) { let ot = C.texture.type, ut = ot === ci || ot === us || ot === Fr || ot === Qs || ot === Ph || ot === Ih, St = Pt.getClearColor(), Mt = Pt.getClearAlpha(), Dt = St.r, Ft = St.g, wt = St.b; ut ? (m[0] = Dt, m[1] = Ft, m[2] = wt, m[3] = Mt, L.clearBufferuiv(L.COLOR, 0, m)) : (_[0] = Dt, _[1] = Ft, _[2] = wt, _[3] = Mt, L.clearBufferiv(L.COLOR, 0, _)) } else Y |= L.COLOR_BUFFER_BIT } O && (Y |= L.DEPTH_BUFFER_BIT), $ && (Y |= L.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), L.clear(Y) }, this.clearColor = function () { this.clear(!0, !1, !1) }, this.clearDepth = function () { this.clear(!1, !0, !1) }, this.clearStencil = function () { this.clear(!1, !1, !0) }, this.dispose = function () { e.removeEventListener("webglcontextlost", X, !1), e.removeEventListener("webglcontextrestored", it, !1), e.removeEventListener("webglcontextcreationerror", rt, !1), pt.dispose(), Gt.dispose(), Et.dispose(), M.dispose(), V.dispose(), J.dispose(), jt.dispose(), N.dispose(), bt.dispose(), B.dispose(), B.removeEventListener("sessionstart", Yh), B.removeEventListener("sessionend", Zh), Vi.stop() }; function X(w) { w.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), A = !0 } function it() { console.log("THREE.WebGLRenderer: Context Restored."), A = !1; let w = Jt.autoReset, O = gt.enabled, $ = gt.autoUpdate, Y = gt.needsUpdate, F = gt.type; q(), Jt.autoReset = w, gt.enabled = O, gt.autoUpdate = $, gt.needsUpdate = Y, gt.type = F } function rt(w) { console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", w.statusMessage) } function _t(w) { let O = w.target; O.removeEventListener("dispose", _t), Kt(O) } function Kt(w) { Te(w), Et.remove(w) } function Te(w) { let O = Et.get(w).programs; O !== void 0 && (O.forEach(function ($) { bt.releaseProgram($) }), w.isShaderMaterial && bt.releaseShaderCache(w)) } this.renderBufferDirect = function (w, O, $, Y, F, ot) { O === null && (O = Zt); let ut = F.isMesh && F.matrixWorld.determinant() < 0, St = Sp(w, O, $, Y, F); Ct.setMaterial(Y, ut); let Mt = $.index, Dt = 1; if (Y.wireframe === !0) { if (Mt = Q.getWireframeAttribute($), Mt === void 0) return; Dt = 2 } let Ft = $.drawRange, wt = $.attributes.position, Yt = Ft.start * Dt, oe = (Ft.start + Ft.count) * Dt; ot !== null && (Yt = Math.max(Yt, ot.start * Dt), oe = Math.min(oe, (ot.start + ot.count) * Dt)), Mt !== null ? (Yt = Math.max(Yt, 0), oe = Math.min(oe, Mt.count)) : wt != null && (Yt = Math.max(Yt, 0), oe = Math.min(oe, wt.count)); let le = oe - Yt; if (le < 0 || le === 1 / 0) return; jt.setup(F, Y, St, $, Mt); let Je, Qt = mt; if (Mt !== null && (Je = K.get(Mt), Qt = zt, Qt.setIndex(Je)), F.isMesh) Y.wireframe === !0 ? (Ct.setLineWidth(Y.wireframeLinewidth * yt()), Qt.setMode(L.LINES)) : Qt.setMode(L.TRIANGLES); else if (F.isLine) { let Tt = Y.linewidth; Tt === void 0 && (Tt = 1), Ct.setLineWidth(Tt * yt()), F.isLineSegments ? Qt.setMode(L.LINES) : F.isLineLoop ? Qt.setMode(L.LINE_LOOP) : Qt.setMode(L.LINE_STRIP) } else F.isPoints ? Qt.setMode(L.POINTS) : F.isSprite && Qt.setMode(L.TRIANGLES); if (F.isBatchedMesh) if (F._multiDrawInstances !== null) Qt.renderMultiDrawInstances(F._multiDrawStarts, F._multiDrawCounts, F._multiDrawCount, F._multiDrawInstances); else if (ft.get("WEBGL_multi_draw")) Qt.renderMultiDraw(F._multiDrawStarts, F._multiDrawCounts, F._multiDrawCount); else { let Tt = F._multiDrawStarts, $n = F._multiDrawCounts, te = F._multiDrawCount, En = Mt ? K.get(Mt).bytesPerElement : 1, xs = Et.get(Y).currentProgram.getUniforms(); for (let an = 0; an < te; an++)xs.setValue(L, "_gl_DrawID", an), Qt.render(Tt[an] / En, $n[an]) } else if (F.isInstancedMesh) Qt.renderInstances(Yt, le, F.count); else if ($.isInstancedBufferGeometry) { let Tt = $._maxInstanceCount !== void 0 ? $._maxInstanceCount : 1 / 0, $n = Math.min($.instanceCount, Tt); Qt.renderInstances(Yt, le, $n) } else Qt.render(Yt, le) }; function ee(w, O, $) { w.transparent === !0 && w.side === Rn && w.forceSinglePass === !1 ? (w.side = rn, w.needsUpdate = !0, $r(w, O, $), w.side = Ni, w.needsUpdate = !0, $r(w, O, $), w.side = Rn) : $r(w, O, $) } this.compile = function (w, O, $ = null) { $ === null && ($ = w), p = Gt.get($), p.init(O), x.push(p), $.traverseVisible(function (F) { F.isLight && F.layers.test(O.layers) && (p.pushLight(F), F.castShadow && p.pushShadow(F)) }), w !== $ && w.traverseVisible(function (F) { F.isLight && F.layers.test(O.layers) && (p.pushLight(F), F.castShadow && p.pushShadow(F)) }), p.setupLights(); let Y = new Set; return w.traverse(function (F) { if (!(F.isMesh || F.isPoints || F.isLine || F.isSprite)) return; let ot = F.material; if (ot) if (Array.isArray(ot)) for (let ut = 0; ut < ot.length; ut++) { let St = ot[ut]; ee(St, $, F), Y.add(St) } else ee(ot, $, F), Y.add(ot) }), x.pop(), p = null, Y }, this.compileAsync = function (w, O, $ = null) { let Y = this.compile(w, O, $); return new Promise(F => { function ot() { if (Y.forEach(function (ut) { Et.get(ut).currentProgram.isReady() && Y.delete(ut) }), Y.size === 0) { F(w); return } setTimeout(ot, 10) } ft.get("KHR_parallel_shader_compile") !== null ? ot() : setTimeout(ot, 10) }) }; let wn = null; function qn(w) { wn && wn(w) } function Yh() { Vi.stop() } function Zh() { Vi.start() } let Vi = new Vf; Vi.setAnimationLoop(qn), typeof self != "undefined" && Vi.setContext(self), this.setAnimationLoop = function (w) { wn = w, B.setAnimationLoop(w), w === null ? Vi.stop() : Vi.start() }, B.addEventListener("sessionstart", Yh), B.addEventListener("sessionend", Zh), this.render = function (w, O) { if (O !== void 0 && O.isCamera !== !0) { console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."); return } if (A === !0) return; if (w.matrixWorldAutoUpdate === !0 && w.updateMatrixWorld(), O.parent === null && O.matrixWorldAutoUpdate === !0 && O.updateMatrixWorld(), B.enabled === !0 && B.isPresenting === !0 && (B.cameraAutoUpdate === !0 && B.updateCamera(O), O = B.getCamera()), w.isScene === !0 && w.onBeforeRender(v, w, O, C), p = Gt.get(w, x.length), p.init(O), x.push(p), vt.multiplyMatrices(O.projectionMatrix, O.matrixWorldInverse), Z.setFromProjectionMatrix(vt), at = this.localClippingEnabled, et = st.init(this.clippingPlanes, at), g = pt.get(w, y.length), g.init(), y.push(g), B.enabled === !0 && B.isPresenting === !0) { let ot = v.xr.getDepthSensingMesh(); ot !== null && Lo(ot, O, -1 / 0, v.sortObjects) } Lo(w, O, 0, v.sortObjects), g.finish(), v.sortObjects === !0 && g.sort(tt, j), nt = B.enabled === !1 || B.isPresenting === !1 || B.hasDepthSensing() === !1, nt && Pt.addToRenderList(g, w), this.info.render.frame++, et === !0 && st.beginShadows(); let $ = p.state.shadowsArray; gt.render($, w, O), et === !0 && st.endShadows(), this.info.autoReset === !0 && this.info.reset(); let Y = g.opaque, F = g.transmissive; if (p.setupLights(), O.isArrayCamera) { let ot = O.cameras; if (F.length > 0) for (let ut = 0, St = ot.length; ut < St; ut++) { let Mt = ot[ut]; jh(Y, F, w, Mt) } nt && Pt.render(w); for (let ut = 0, St = ot.length; ut < St; ut++) { let Mt = ot[ut]; Jh(g, w, Mt, Mt.viewport) } } else F.length > 0 && jh(Y, F, w, O), nt && Pt.render(w), Jh(g, w, O); C !== null && (R.updateMultisampleRenderTarget(C), R.updateRenderTargetMipmap(C)), w.isScene === !0 && w.onAfterRender(v, w, O), jt.resetDefaultState(), b = -1, S = null, x.pop(), x.length > 0 ? (p = x[x.length - 1], et === !0 && st.setGlobalState(v.clippingPlanes, p.state.camera)) : p = null, y.pop(), y.length > 0 ? g = y[y.length - 1] : g = null }; function Lo(w, O, $, Y) { if (w.visible === !1) return; if (w.layers.test(O.layers)) { if (w.isGroup) $ = w.renderOrder; else if (w.isLOD) w.autoUpdate === !0 && w.update(O); else if (w.isLight) p.pushLight(w), w.castShadow && p.pushShadow(w); else if (w.isSprite) { if (!w.frustumCulled || Z.intersectsSprite(w)) { Y && Nt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(vt); let ut = J.update(w), St = w.material; St.visible && g.push(w, ut, St, $, Nt.z, null) } } else if ((w.isMesh || w.isLine || w.isPoints) && (!w.frustumCulled || Z.intersectsObject(w))) { let ut = J.update(w), St = w.material; if (Y && (w.boundingSphere !== void 0 ? (w.boundingSphere === null && w.computeBoundingSphere(), Nt.copy(w.boundingSphere.center)) : (ut.boundingSphere === null && ut.computeBoundingSphere(), Nt.copy(ut.boundingSphere.center)), Nt.applyMatrix4(w.matrixWorld).applyMatrix4(vt)), Array.isArray(St)) { let Mt = ut.groups; for (let Dt = 0, Ft = Mt.length; Dt < Ft; Dt++) { let wt = Mt[Dt], Yt = St[wt.materialIndex]; Yt && Yt.visible && g.push(w, ut, Yt, $, Nt.z, wt) } } else St.visible && g.push(w, ut, St, $, Nt.z, null) } } let ot = w.children; for (let ut = 0, St = ot.length; ut < St; ut++)Lo(ot[ut], O, $, Y) } function Jh(w, O, $, Y) { let F = w.opaque, ot = w.transmissive, ut = w.transparent; p.setupLightsView($), et === !0 && st.setGlobalState(v.clippingPlanes, $), Y && Ct.viewport(P.copy(Y)), F.length > 0 && qr(F, O, $), ot.length > 0 && qr(ot, O, $), ut.length > 0 && qr(ut, O, $), Ct.buffers.depth.setTest(!0), Ct.buffers.depth.setMask(!0), Ct.buffers.color.setMask(!0), Ct.setPolygonOffset(!1) } function jh(w, O, $, Y) { if (($.isScene === !0 ? $.overrideMaterial : null) !== null) return; p.state.transmissionRenderTarget[Y.id] === void 0 && (p.state.transmissionRenderTarget[Y.id] = new hi(1, 1, { generateMipmaps: !0, type: ft.has("EXT_color_buffer_half_float") || ft.has("EXT_color_buffer_float") ? zr : ci, minFilter: hs, samples: 4, stencilBuffer: r, resolveDepthBuffer: !1, resolveStencilBuffer: !1, colorSpace: $t.workingColorSpace })); let ot = p.state.transmissionRenderTarget[Y.id], ut = Y.viewport || P; ot.setSize(ut.z, ut.w); let St = v.getRenderTarget(); v.setRenderTarget(ot), v.getClearColor(W), U = v.getClearAlpha(), U < 1 && v.setClearColor(16777215, .5), v.clear(), nt && Pt.render($); let Mt = v.toneMapping; v.toneMapping = Ui; let Dt = Y.viewport; if (Y.viewport !== void 0 && (Y.viewport = void 0), p.setupLightsView(Y), et === !0 && st.setGlobalState(v.clippingPlanes, Y), qr(w, $, Y), R.updateMultisampleRenderTarget(ot), R.updateRenderTargetMipmap(ot), ft.has("WEBGL_multisampled_render_to_texture") === !1) { let Ft = !1; for (let wt = 0, Yt = O.length; wt < Yt; wt++) { let oe = O[wt], le = oe.object, Je = oe.geometry, Qt = oe.material, Tt = oe.group; if (Qt.side === Rn && le.layers.test(Y.layers)) { let $n = Qt.side; Qt.side = rn, Qt.needsUpdate = !0, Kh(le, $, Y, Je, Qt, Tt), Qt.side = $n, Qt.needsUpdate = !0, Ft = !0 } } Ft === !0 && (R.updateMultisampleRenderTarget(ot), R.updateRenderTargetMipmap(ot)) } v.setRenderTarget(St), v.setClearColor(W, U), Dt !== void 0 && (Y.viewport = Dt), v.toneMapping = Mt } function qr(w, O, $) { let Y = O.isScene === !0 ? O.overrideMaterial : null; for (let F = 0, ot = w.length; F < ot; F++) { let ut = w[F], St = ut.object, Mt = ut.geometry, Dt = Y === null ? ut.material : Y, Ft = ut.group; St.layers.test($.layers) && Kh(St, O, $, Mt, Dt, Ft) } } function Kh(w, O, $, Y, F, ot) { w.onBeforeRender(v, O, $, Y, F, ot), w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse, w.matrixWorld), w.normalMatrix.getNormalMatrix(w.modelViewMatrix), F.onBeforeRender(v, O, $, Y, w, ot), F.transparent === !0 && F.side === Rn && F.forceSinglePass === !1 ? (F.side = rn, F.needsUpdate = !0, v.renderBufferDirect($, O, Y, F, w, ot), F.side = Ni, F.needsUpdate = !0, v.renderBufferDirect($, O, Y, F, w, ot), F.side = Rn) : v.renderBufferDirect($, O, Y, F, w, ot), w.onAfterRender(v, O, $, Y, F, ot) } function $r(w, O, $) { O.isScene !== !0 && (O = Zt); let Y = Et.get(w), F = p.state.lights, ot = p.state.shadowsArray, ut = F.state.version, St = bt.getParameters(w, F.state, ot, O, $), Mt = bt.getProgramCacheKey(St), Dt = Y.programs; Y.environment = w.isMeshStandardMaterial ? O.environment : null, Y.fog = O.fog, Y.envMap = (w.isMeshStandardMaterial ? V : M).get(w.envMap || Y.environment), Y.envMapRotation = Y.environment !== null && w.envMap === null ? O.environmentRotation : w.envMapRotation, Dt === void 0 && (w.addEventListener("dispose", _t), Dt = new Map, Y.programs = Dt); let Ft = Dt.get(Mt); if (Ft !== void 0) { if (Y.currentProgram === Ft && Y.lightsStateVersion === ut) return tu(w, St), Ft } else St.uniforms = bt.getUniforms(w), w.onBeforeCompile(St, v), Ft = bt.acquireProgram(St, Mt), Dt.set(Mt, Ft), Y.uniforms = St.uniforms; let wt = Y.uniforms; return (!w.isShaderMaterial && !w.isRawShaderMaterial || w.clipping === !0) && (wt.clippingPlanes = st.uniform), tu(w, St), Y.needsLights = wp(w), Y.lightsStateVersion = ut, Y.needsLights && (wt.ambientLightColor.value = F.state.ambient, wt.lightProbe.value = F.state.probe, wt.directionalLights.value = F.state.directional, wt.directionalLightShadows.value = F.state.directionalShadow, wt.spotLights.value = F.state.spot, wt.spotLightShadows.value = F.state.spotShadow, wt.rectAreaLights.value = F.state.rectArea, wt.ltc_1.value = F.state.rectAreaLTC1, wt.ltc_2.value = F.state.rectAreaLTC2, wt.pointLights.value = F.state.point, wt.pointLightShadows.value = F.state.pointShadow, wt.hemisphereLights.value = F.state.hemi, wt.directionalShadowMap.value = F.state.directionalShadowMap, wt.directionalShadowMatrix.value = F.state.directionalShadowMatrix, wt.spotShadowMap.value = F.state.spotShadowMap, wt.spotLightMatrix.value = F.state.spotLightMatrix, wt.spotLightMap.value = F.state.spotLightMap, wt.pointShadowMap.value = F.state.pointShadowMap, wt.pointShadowMatrix.value = F.state.pointShadowMatrix), Y.currentProgram = Ft, Y.uniformsList = null, Ft } function Qh(w) { if (w.uniformsList === null) { let O = w.currentProgram.getUniforms(); w.uniformsList = Zs.seqWithValue(O.seq, w.uniforms) } return w.uniformsList } function tu(w, O) { let $ = Et.get(w); $.outputColorSpace = O.outputColorSpace, $.batching = O.batching, $.batchingColor = O.batchingColor, $.instancing = O.instancing, $.instancingColor = O.instancingColor, $.instancingMorph = O.instancingMorph, $.skinning = O.skinning, $.morphTargets = O.morphTargets, $.morphNormals = O.morphNormals, $.morphColors = O.morphColors, $.morphTargetsCount = O.morphTargetsCount, $.numClippingPlanes = O.numClippingPlanes, $.numIntersection = O.numClipIntersection, $.vertexAlphas = O.vertexAlphas, $.vertexTangents = O.vertexTangents, $.toneMapping = O.toneMapping } function Sp(w, O, $, Y, F) { O.isScene !== !0 && (O = Zt), R.resetTextureUnits(); let ot = O.fog, ut = Y.isMeshStandardMaterial ? O.environment : null, St = C === null ? v.outputColorSpace : C.isXRRenderTarget === !0 ? C.texture.colorSpace : ar, Mt = (Y.isMeshStandardMaterial ? V : M).get(Y.envMap || ut), Dt = Y.vertexColors === !0 && !!$.attributes.color && $.attributes.color.itemSize === 4, Ft = !!$.attributes.tangent && (!!Y.normalMap || Y.anisotropy > 0), wt = !!$.morphAttributes.position, Yt = !!$.morphAttributes.normal, oe = !!$.morphAttributes.color, le = Ui; Y.toneMapped && (C === null || C.isXRRenderTarget === !0) && (le = v.toneMapping); let Je = $.morphAttributes.position || $.morphAttributes.normal || $.morphAttributes.color, Qt = Je !== void 0 ? Je.length : 0, Tt = Et.get(Y), $n = p.state.lights; if (et === !0 && (at === !0 || w !== S)) { let pn = w === S && Y.id === b; st.setState(Y, w, pn) } let te = !1; Y.version === Tt.__version ? (Tt.needsLights && Tt.lightsStateVersion !== $n.state.version || Tt.outputColorSpace !== St || F.isBatchedMesh && Tt.batching === !1 || !F.isBatchedMesh && Tt.batching === !0 || F.isBatchedMesh && Tt.batchingColor === !0 && F.colorTexture === null || F.isBatchedMesh && Tt.batchingColor === !1 && F.colorTexture !== null || F.isInstancedMesh && Tt.instancing === !1 || !F.isInstancedMesh && Tt.instancing === !0 || F.isSkinnedMesh && Tt.skinning === !1 || !F.isSkinnedMesh && Tt.skinning === !0 || F.isInstancedMesh && Tt.instancingColor === !0 && F.instanceColor === null || F.isInstancedMesh && Tt.instancingColor === !1 && F.instanceColor !== null || F.isInstancedMesh && Tt.instancingMorph === !0 && F.morphTexture === null || F.isInstancedMesh && Tt.instancingMorph === !1 && F.morphTexture !== null || Tt.envMap !== Mt || Y.fog === !0 && Tt.fog !== ot || Tt.numClippingPlanes !== void 0 && (Tt.numClippingPlanes !== st.numPlanes || Tt.numIntersection !== st.numIntersection) || Tt.vertexAlphas !== Dt || Tt.vertexTangents !== Ft || Tt.morphTargets !== wt || Tt.morphNormals !== Yt || Tt.morphColors !== oe || Tt.toneMapping !== le || Tt.morphTargetsCount !== Qt) && (te = !0) : (te = !0, Tt.__version = Y.version); let En = Tt.currentProgram; te === !0 && (En = $r(Y, O, F)); let xs = !1, an = !1, dr = !1, ce = En.getUniforms(), Nn = Tt.uniforms; if (Ct.useProgram(En.program) && (xs = !0, an = !0, dr = !0), Y.id !== b && (b = Y.id, an = !0), xs || S !== w) { Ct.buffers.depth.getReversed() ? (lt.copy(w.projectionMatrix), u0(lt), d0(lt), ce.setValue(L, "projectionMatrix", lt)) : ce.setValue(L, "projectionMatrix", w.projectionMatrix), ce.setValue(L, "viewMatrix", w.matrixWorldInverse); let di = ce.map.cameraPosition; di !== void 0 && di.setValue(L, Rt.setFromMatrixPosition(w.matrixWorld)), Ot.logarithmicDepthBuffer && ce.setValue(L, "logDepthBufFC", 2 / (Math.log(w.far + 1) / Math.LN2)), (Y.isMeshPhongMaterial || Y.isMeshToonMaterial || Y.isMeshLambertMaterial || Y.isMeshBasicMaterial || Y.isMeshStandardMaterial || Y.isShaderMaterial) && ce.setValue(L, "isOrthographic", w.isOrthographicCamera === !0), S !== w && (S = w, an = !0, dr = !0) } if (F.isSkinnedMesh) { ce.setOptional(L, F, "bindMatrix"), ce.setOptional(L, F, "bindMatrixInverse"); let pn = F.skeleton; pn && (pn.boneTexture === null && pn.computeBoneTexture(), ce.setValue(L, "boneTexture", pn.boneTexture, R)) } F.isBatchedMesh && (ce.setOptional(L, F, "batchingTexture"), ce.setValue(L, "batchingTexture", F._matricesTexture, R), ce.setOptional(L, F, "batchingIdTexture"), ce.setValue(L, "batchingIdTexture", F._indirectTexture, R), ce.setOptional(L, F, "batchingColorTexture"), F._colorsTexture !== null && ce.setValue(L, "batchingColorTexture", F._colorsTexture, R)); let fr = $.morphAttributes; if ((fr.position !== void 0 || fr.normal !== void 0 || fr.color !== void 0) && It.update(F, $, En), (an || Tt.receiveShadow !== F.receiveShadow) && (Tt.receiveShadow = F.receiveShadow, ce.setValue(L, "receiveShadow", F.receiveShadow)), Y.isMeshGouraudMaterial && Y.envMap !== null && (Nn.envMap.value = Mt, Nn.flipEnvMap.value = Mt.isCubeTexture && Mt.isRenderTargetTexture === !1 ? -1 : 1), Y.isMeshStandardMaterial && Y.envMap === null && O.environment !== null && (Nn.envMapIntensity.value = O.environmentIntensity), an && (ce.setValue(L, "toneMappingExposure", v.toneMappingExposure), Tt.needsLights && Mp(Nn, dr), ot && Y.fog === !0 && ct.refreshFogUniforms(Nn, ot), ct.refreshMaterialUniforms(Nn, Y, D, G, p.state.transmissionRenderTarget[w.id]), Zs.upload(L, Qh(Tt), Nn, R)), Y.isShaderMaterial && Y.uniformsNeedUpdate === !0 && (Zs.upload(L, Qh(Tt), Nn, R), Y.uniformsNeedUpdate = !1), Y.isSpriteMaterial && ce.setValue(L, "center", F.center), ce.setValue(L, "modelViewMatrix", F.modelViewMatrix), ce.setValue(L, "normalMatrix", F.normalMatrix), ce.setValue(L, "modelMatrix", F.matrixWorld), Y.isShaderMaterial || Y.isRawShaderMaterial) { let pn = Y.uniformsGroups; for (let di = 0, fi = pn.length; di < fi; di++) { let eu = pn[di]; N.update(eu, En), N.bind(eu, En) } } return En } function Mp(w, O) { w.ambientLightColor.needsUpdate = O, w.lightProbe.needsUpdate = O, w.directionalLights.needsUpdate = O, w.directionalLightShadows.needsUpdate = O, w.pointLights.needsUpdate = O, w.pointLightShadows.needsUpdate = O, w.spotLights.needsUpdate = O, w.spotLightShadows.needsUpdate = O, w.rectAreaLights.needsUpdate = O, w.hemisphereLights.needsUpdate = O } function wp(w) { return w.isMeshLambertMaterial || w.isMeshToonMaterial || w.isMeshPhongMaterial || w.isMeshStandardMaterial || w.isShadowMaterial || w.isShaderMaterial && w.lights === !0 } this.getActiveCubeFace = function () { return T }, this.getActiveMipmapLevel = function () { return E }, this.getRenderTarget = function () { return C }, this.setRenderTargetTextures = function (w, O, $) { Et.get(w.texture).__webglTexture = O, Et.get(w.depthTexture).__webglTexture = $; let Y = Et.get(w); Y.__hasExternalTextures = !0, Y.__autoAllocateDepthBuffer = $ === void 0, Y.__autoAllocateDepthBuffer || ft.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), Y.__useRenderToTexture = !1) }, this.setRenderTargetFramebuffer = function (w, O) { let $ = Et.get(w); $.__webglFramebuffer = O, $.__useDefaultFramebuffer = O === void 0 }, this.setRenderTarget = function (w, O = 0, $ = 0) { C = w, T = O, E = $; let Y = !0, F = null, ot = !1, ut = !1; if (w) { let Mt = Et.get(w); if (Mt.__useDefaultFramebuffer !== void 0) Ct.bindFramebuffer(L.FRAMEBUFFER, null), Y = !1; else if (Mt.__webglFramebuffer === void 0) R.setupRenderTarget(w); else if (Mt.__hasExternalTextures) R.rebindTextures(w, Et.get(w.texture).__webglTexture, Et.get(w.depthTexture).__webglTexture); else if (w.depthBuffer) { let wt = w.depthTexture; if (Mt.__boundDepthTexture !== wt) { if (wt !== null && Et.has(wt) && (w.width !== wt.image.width || w.height !== wt.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size."); R.setupDepthRenderbuffer(w) } } let Dt = w.texture; (Dt.isData3DTexture || Dt.isDataArrayTexture || Dt.isCompressedArrayTexture) && (ut = !0); let Ft = Et.get(w).__webglFramebuffer; w.isWebGLCubeRenderTarget ? (Array.isArray(Ft[O]) ? F = Ft[O][$] : F = Ft[O], ot = !0) : w.samples > 0 && R.useMultisampledRTT(w) === !1 ? F = Et.get(w).__webglMultisampledFramebuffer : Array.isArray(Ft) ? F = Ft[$] : F = Ft, P.copy(w.viewport), H.copy(w.scissor), z = w.scissorTest } else P.copy(dt).multiplyScalar(D).floor(), H.copy(At).multiplyScalar(D).floor(), z = Ut; if (Ct.bindFramebuffer(L.FRAMEBUFFER, F) && Y && Ct.drawBuffers(w, F), Ct.viewport(P), Ct.scissor(H), Ct.setScissorTest(z), ot) { let Mt = Et.get(w.texture); L.framebufferTexture2D(L.FRAMEBUFFER, L.COLOR_ATTACHMENT0, L.TEXTURE_CUBE_MAP_POSITIVE_X + O, Mt.__webglTexture, $) } else if (ut) { let Mt = Et.get(w.texture), Dt = O || 0; L.framebufferTextureLayer(L.FRAMEBUFFER, L.COLOR_ATTACHMENT0, Mt.__webglTexture, $ || 0, Dt) } b = -1 }, this.readRenderTargetPixels = function (w, O, $, Y, F, ot, ut) { if (!(w && w.isWebGLRenderTarget)) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."); return } let St = Et.get(w).__webglFramebuffer; if (w.isWebGLCubeRenderTarget && ut !== void 0 && (St = St[ut]), St) { Ct.bindFramebuffer(L.FRAMEBUFFER, St); try { let Mt = w.texture, Dt = Mt.format, Ft = Mt.type; if (!Ot.textureFormatReadable(Dt)) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."); return } if (!Ot.textureTypeReadable(Ft)) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."); return } O >= 0 && O <= w.width - Y && $ >= 0 && $ <= w.height - F && L.readPixels(O, $, Y, F, Lt.convert(Dt), Lt.convert(Ft), ot) } finally { let Mt = C !== null ? Et.get(C).__webglFramebuffer : null; Ct.bindFramebuffer(L.FRAMEBUFFER, Mt) } } }, this.readRenderTargetPixelsAsync = async function (w, O, $, Y, F, ot, ut) { if (!(w && w.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."); let St = Et.get(w).__webglFramebuffer; if (w.isWebGLCubeRenderTarget && ut !== void 0 && (St = St[ut]), St) { let Mt = w.texture, Dt = Mt.format, Ft = Mt.type; if (!Ot.textureFormatReadable(Dt)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format."); if (!Ot.textureTypeReadable(Ft)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type."); if (O >= 0 && O <= w.width - Y && $ >= 0 && $ <= w.height - F) { Ct.bindFramebuffer(L.FRAMEBUFFER, St); let wt = L.createBuffer(); L.bindBuffer(L.PIXEL_PACK_BUFFER, wt), L.bufferData(L.PIXEL_PACK_BUFFER, ot.byteLength, L.STREAM_READ), L.readPixels(O, $, Y, F, Lt.convert(Dt), Lt.convert(Ft), 0); let Yt = C !== null ? Et.get(C).__webglFramebuffer : null; Ct.bindFramebuffer(L.FRAMEBUFFER, Yt); let oe = L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE, 0); return L.flush(), await h0(L, oe, 4), L.bindBuffer(L.PIXEL_PACK_BUFFER, wt), L.getBufferSubData(L.PIXEL_PACK_BUFFER, 0, ot), L.deleteBuffer(wt), L.deleteSync(oe), ot } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.") } }, this.copyFramebufferToTexture = function (w, O = null, $ = 0) { w.isTexture !== !0 && (Ur("WebGLRenderer: copyFramebufferToTexture function signature has changed."), O = arguments[0] || null, w = arguments[1]); let Y = Math.pow(2, -$), F = Math.floor(w.image.width * Y), ot = Math.floor(w.image.height * Y), ut = O !== null ? O.x : 0, St = O !== null ? O.y : 0; R.setTexture2D(w, 0), L.copyTexSubImage2D(L.TEXTURE_2D, $, 0, 0, ut, St, F, ot), Ct.unbindTexture() }, this.copyTextureToTexture = function (w, O, $ = null, Y = null, F = 0) { w.isTexture !== !0 && (Ur("WebGLRenderer: copyTextureToTexture function signature has changed."), Y = arguments[0] || null, w = arguments[1], O = arguments[2], F = arguments[3] || 0, $ = null); let ot, ut, St, Mt, Dt, Ft, wt, Yt, oe, le = w.isCompressedTexture ? w.mipmaps[F] : w.image; $ !== null ? (ot = $.max.x - $.min.x, ut = $.max.y - $.min.y, St = $.isBox3 ? $.max.z - $.min.z : 1, Mt = $.min.x, Dt = $.min.y, Ft = $.isBox3 ? $.min.z : 0) : (ot = le.width, ut = le.height, St = le.depth || 1, Mt = 0, Dt = 0, Ft = 0), Y !== null ? (wt = Y.x, Yt = Y.y, oe = Y.z) : (wt = 0, Yt = 0, oe = 0); let Je = Lt.convert(O.format), Qt = Lt.convert(O.type), Tt; O.isData3DTexture ? (R.setTexture3D(O, 0), Tt = L.TEXTURE_3D) : O.isDataArrayTexture || O.isCompressedArrayTexture ? (R.setTexture2DArray(O, 0), Tt = L.TEXTURE_2D_ARRAY) : (R.setTexture2D(O, 0), Tt = L.TEXTURE_2D), L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL, O.flipY), L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL, O.premultiplyAlpha), L.pixelStorei(L.UNPACK_ALIGNMENT, O.unpackAlignment); let $n = L.getParameter(L.UNPACK_ROW_LENGTH), te = L.getParameter(L.UNPACK_IMAGE_HEIGHT), En = L.getParameter(L.UNPACK_SKIP_PIXELS), xs = L.getParameter(L.UNPACK_SKIP_ROWS), an = L.getParameter(L.UNPACK_SKIP_IMAGES); L.pixelStorei(L.UNPACK_ROW_LENGTH, le.width), L.pixelStorei(L.UNPACK_IMAGE_HEIGHT, le.height), L.pixelStorei(L.UNPACK_SKIP_PIXELS, Mt), L.pixelStorei(L.UNPACK_SKIP_ROWS, Dt), L.pixelStorei(L.UNPACK_SKIP_IMAGES, Ft); let dr = w.isDataArrayTexture || w.isData3DTexture, ce = O.isDataArrayTexture || O.isData3DTexture; if (w.isRenderTargetTexture || w.isDepthTexture) { let Nn = Et.get(w), fr = Et.get(O), pn = Et.get(Nn.__renderTarget), di = Et.get(fr.__renderTarget); Ct.bindFramebuffer(L.READ_FRAMEBUFFER, pn.__webglFramebuffer), Ct.bindFramebuffer(L.DRAW_FRAMEBUFFER, di.__webglFramebuffer); for (let fi = 0; fi < St; fi++)dr && L.framebufferTextureLayer(L.READ_FRAMEBUFFER, L.COLOR_ATTACHMENT0, Et.get(w).__webglTexture, F, Ft + fi), w.isDepthTexture ? (ce && L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER, L.COLOR_ATTACHMENT0, Et.get(O).__webglTexture, F, oe + fi), L.blitFramebuffer(Mt, Dt, ot, ut, wt, Yt, ot, ut, L.DEPTH_BUFFER_BIT, L.NEAREST)) : ce ? L.copyTexSubImage3D(Tt, F, wt, Yt, oe + fi, Mt, Dt, ot, ut) : L.copyTexSubImage2D(Tt, F, wt, Yt, oe + fi, Mt, Dt, ot, ut); Ct.bindFramebuffer(L.READ_FRAMEBUFFER, null), Ct.bindFramebuffer(L.DRAW_FRAMEBUFFER, null) } else ce ? w.isDataTexture || w.isData3DTexture ? L.texSubImage3D(Tt, F, wt, Yt, oe, ot, ut, St, Je, Qt, le.data) : O.isCompressedArrayTexture ? L.compressedTexSubImage3D(Tt, F, wt, Yt, oe, ot, ut, St, Je, le.data) : L.texSubImage3D(Tt, F, wt, Yt, oe, ot, ut, St, Je, Qt, le) : w.isDataTexture ? L.texSubImage2D(L.TEXTURE_2D, F, wt, Yt, ot, ut, Je, Qt, le.data) : w.isCompressedTexture ? L.compressedTexSubImage2D(L.TEXTURE_2D, F, wt, Yt, le.width, le.height, Je, le.data) : L.texSubImage2D(L.TEXTURE_2D, F, wt, Yt, ot, ut, Je, Qt, le); L.pixelStorei(L.UNPACK_ROW_LENGTH, $n), L.pixelStorei(L.UNPACK_IMAGE_HEIGHT, te), L.pixelStorei(L.UNPACK_SKIP_PIXELS, En), L.pixelStorei(L.UNPACK_SKIP_ROWS, xs), L.pixelStorei(L.UNPACK_SKIP_IMAGES, an), F === 0 && O.generateMipmaps && L.generateMipmap(Tt), Ct.unbindTexture() }, this.copyTextureToTexture3D = function (w, O, $ = null, Y = null, F = 0) { return w.isTexture !== !0 && (Ur("WebGLRenderer: copyTextureToTexture3D function signature has changed."), $ = arguments[0] || null, Y = arguments[1] || null, w = arguments[2], O = arguments[3], F = arguments[4] || 0), Ur('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(w, O, $, Y, F) }, this.initRenderTarget = function (w) { Et.get(w).__webglFramebuffer === void 0 && R.setupRenderTarget(w) }, this.initTexture = function (w) { w.isCubeTexture ? R.setTextureCube(w, 0) : w.isData3DTexture ? R.setTexture3D(w, 0) : w.isDataArrayTexture || w.isCompressedArrayTexture ? R.setTexture2DArray(w, 0) : R.setTexture2D(w, 0), Ct.unbindTexture() }, this.resetState = function () { T = 0, E = 0, C = null, Ct.reset(), jt.reset() }, typeof __THREE_DEVTOOLS__ != "undefined" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })) } get coordinateSystem() { return oi } get outputColorSpace() { return this._outputColorSpace } set outputColorSpace(t) { this._outputColorSpace = t; let e = this.getContext(); e.drawingBufferColorspace = $t._getDrawingBufferColorSpace(t), e.unpackColorSpace = $t._getUnpackColorSpace() } }; var lo = class extends fn { constructor() { super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new ui, this.environmentIntensity = 1, this.environmentRotation = new ui, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ != "undefined" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })) } copy(t, e) { return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, this.backgroundRotation.copy(t.backgroundRotation), this.environmentIntensity = t.environmentIntensity, this.environmentRotation.copy(t.environmentRotation), t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this } toJSON(t) { let e = super.toJSON(t); return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity), e.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity), e.object.environmentRotation = this.environmentRotation.toArray(), e } }; var ms = class extends ki { static get type() { return "LineBasicMaterial" } constructor(t) { super(), this.isLineBasicMaterial = !0, this.color = new Ht(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(t) } copy(t) { return super.copy(t), this.color.copy(t.color), this.map = t.map, this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this } }, co = new k, ho = new k, vf = new be, Dr = new kr, Da = new fs, rc = new k, yf = new k, ph = class extends fn { constructor(t = new Ce, e = new ms) { super(), this.isLine = !0, this.type = "Line", this.geometry = t, this.material = e, this.updateMorphTargets() } copy(t, e) { return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this } computeLineDistances() { let t = this.geometry; if (t.index === null) { let e = t.attributes.position, n = [0]; for (let s = 1, r = e.count; s < r; s++)co.fromBufferAttribute(e, s - 1), ho.fromBufferAttribute(e, s), n[s] = n[s - 1], n[s] += co.distanceTo(ho); t.setAttribute("lineDistance", new _e(n, 1)) } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."); return this } raycast(t, e) { let n = this.geometry, s = this.matrixWorld, r = t.params.Line.threshold, a = n.drawRange; if (n.boundingSphere === null && n.computeBoundingSphere(), Da.copy(n.boundingSphere), Da.applyMatrix4(s), Da.radius += r, t.ray.intersectsSphere(Da) === !1) return; vf.copy(s).invert(), Dr.copy(t.ray).applyMatrix4(vf); let o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = this.isLineSegments ? 2 : 1, h = n.index, u = n.attributes.position; if (h !== null) { let f = Math.max(0, a.start), m = Math.min(h.count, a.start + a.count); for (let _ = f, g = m - 1; _ < g; _ += c) { let p = h.getX(_), y = h.getX(_ + 1), x = Ua(this, t, Dr, l, p, y); x && e.push(x) } if (this.isLineLoop) { let _ = h.getX(m - 1), g = h.getX(f), p = Ua(this, t, Dr, l, _, g); p && e.push(p) } } else { let f = Math.max(0, a.start), m = Math.min(u.count, a.start + a.count); for (let _ = f, g = m - 1; _ < g; _ += c) { let p = Ua(this, t, Dr, l, _, _ + 1); p && e.push(p) } if (this.isLineLoop) { let _ = Ua(this, t, Dr, l, m - 1, f); _ && e.push(_) } } } updateMorphTargets() { let e = this.geometry.morphAttributes, n = Object.keys(e); if (n.length > 0) { let s = e[n[0]]; if (s !== void 0) { this.morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let r = 0, a = s.length; r < a; r++) { let o = s[r].name || String(r); this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r } } } } }; function Ua(i, t, e, n, s, r) { let a = i.geometry.attributes.position; if (co.fromBufferAttribute(a, s), ho.fromBufferAttribute(a, r), e.distanceSqToSegment(co, ho, rc, yf) > n) return; rc.applyMatrix4(i.matrixWorld); let l = t.ray.origin.distanceTo(rc); if (!(l < t.near || l > t.far)) return { distance: l, point: yf.clone().applyMatrix4(i.matrixWorld), index: s, face: null, faceIndex: null, barycoord: null, object: i } } var xf = new k, bf = new k, gs = class extends ph { constructor(t, e) { super(t, e), this.isLineSegments = !0, this.type = "LineSegments" } computeLineDistances() { let t = this.geometry; if (t.index === null) { let e = t.attributes.position, n = []; for (let s = 0, r = e.count; s < r; s += 2)xf.fromBufferAttribute(e, s), bf.fromBufferAttribute(e, s + 1), n[s] = s === 0 ? 0 : n[s - 1], n[s + 1] = n[s] + xf.distanceTo(bf); t.setAttribute("lineDistance", new _e(n, 1)) } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."); return this } }; var ir = class extends ki { static get type() { return "PointsMaterial" } constructor(t) { super(), this.isPointsMaterial = !0, this.color = new Ht(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(t) } copy(t) { return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this } }, Sf = new be, mh = new kr, Na = new fs, Oa = new k, sr = class extends fn { constructor(t = new Ce, e = new ir) { super(), this.isPoints = !0, this.type = "Points", this.geometry = t, this.material = e, this.updateMorphTargets() } copy(t, e) { return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this } raycast(t, e) { let n = this.geometry, s = this.matrixWorld, r = t.params.Points.threshold, a = n.drawRange; if (n.boundingSphere === null && n.computeBoundingSphere(), Na.copy(n.boundingSphere), Na.applyMatrix4(s), Na.radius += r, t.ray.intersectsSphere(Na) === !1) return; Sf.copy(s).invert(), mh.copy(t.ray).applyMatrix4(Sf); let o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = n.index, d = n.attributes.position; if (c !== null) { let u = Math.max(0, a.start), f = Math.min(c.count, a.start + a.count); for (let m = u, _ = f; m < _; m++) { let g = c.getX(m); Oa.fromBufferAttribute(d, g), Mf(Oa, g, l, s, t, e, this) } } else { let u = Math.max(0, a.start), f = Math.min(d.count, a.start + a.count); for (let m = u, _ = f; m < _; m++)Oa.fromBufferAttribute(d, m), Mf(Oa, m, l, s, t, e, this) } } updateMorphTargets() { let e = this.geometry.morphAttributes, n = Object.keys(e); if (n.length > 0) { let s = e[n[0]]; if (s !== void 0) { this.morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let r = 0, a = s.length; r < a; r++) { let o = s[r].name || String(r); this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r } } } } }; function Mf(i, t, e, n, s, r, a) { let o = mh.distanceSqToPoint(i); if (o < e) { let l = new k; mh.closestPointToPoint(i, l), l.applyMatrix4(n); let c = s.ray.origin.distanceTo(l); if (c < s.near || c > s.far) return; r.push({ distance: c, distanceToRay: Math.sqrt(o), point: l, index: t, face: null, faceIndex: null, barycoord: null, object: a }) } } var gh = class { constructor() { this.type = "Curve", this.arcLengthDivisions = 200 } getPoint() { return console.warn("THREE.Curve: .getPoint() not implemented."), null } getPointAt(t, e) { let n = this.getUtoTmapping(t); return this.getPoint(n, e) } getPoints(t = 5) { let e = []; for (let n = 0; n <= t; n++)e.push(this.getPoint(n / t)); return e } getSpacedPoints(t = 5) { let e = []; for (let n = 0; n <= t; n++)e.push(this.getPointAt(n / t)); return e } getLength() { let t = this.getLengths(); return t[t.length - 1] } getLengths(t = this.arcLengthDivisions) { if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths; this.needsUpdate = !1; let e = [], n, s = this.getPoint(0), r = 0; e.push(0); for (let a = 1; a <= t; a++)n = this.getPoint(a / t), r += n.distanceTo(s), e.push(r), s = n; return this.cacheArcLengths = e, e } updateArcLengths() { this.needsUpdate = !0, this.getLengths() } getUtoTmapping(t, e) { let n = this.getLengths(), s = 0, r = n.length, a; e ? a = e : a = t * n[r - 1]; let o = 0, l = r - 1, c; for (; o <= l;)if (s = Math.floor(o + (l - o) / 2), c = n[s] - a, c < 0) o = s + 1; else if (c > 0) l = s - 1; else { l = s; break } if (s = l, n[s] === a) return s / (r - 1); let h = n[s], u = n[s + 1] - h, f = (a - h) / u; return (s + f) / (r - 1) } getTangent(t, e) { let s = t - 1e-4, r = t + 1e-4; s < 0 && (s = 0), r > 1 && (r = 1); let a = this.getPoint(s), o = this.getPoint(r), l = e || (a.isVector2 ? new Xt : new k); return l.copy(o).sub(a).normalize(), l } getTangentAt(t, e) { let n = this.getUtoTmapping(t); return this.getTangent(n, e) } computeFrenetFrames(t, e) { let n = new k, s = [], r = [], a = [], o = new k, l = new be; for (let f = 0; f <= t; f++) { let m = f / t; s[f] = this.getTangentAt(m, new k) } r[0] = new k, a[0] = new k; let c = Number.MAX_VALUE, h = Math.abs(s[0].x), d = Math.abs(s[0].y), u = Math.abs(s[0].z); h <= c && (c = h, n.set(1, 0, 0)), d <= c && (c = d, n.set(0, 1, 0)), u <= c && n.set(0, 0, 1), o.crossVectors(s[0], n).normalize(), r[0].crossVectors(s[0], o), a[0].crossVectors(s[0], r[0]); for (let f = 1; f <= t; f++) { if (r[f] = r[f - 1].clone(), a[f] = a[f - 1].clone(), o.crossVectors(s[f - 1], s[f]), o.length() > Number.EPSILON) { o.normalize(); let m = Math.acos(We(s[f - 1].dot(s[f]), -1, 1)); r[f].applyMatrix4(l.makeRotationAxis(o, m)) } a[f].crossVectors(s[f], r[f]) } if (e === !0) { let f = Math.acos(We(r[0].dot(r[t]), -1, 1)); f /= t, s[0].dot(o.crossVectors(r[0], r[t])) > 0 && (f = -f); for (let m = 1; m <= t; m++)r[m].applyMatrix4(l.makeRotationAxis(s[m], f * m)), a[m].crossVectors(s[m], r[m]) } return { tangents: s, normals: r, binormals: a } } clone() { return new this.constructor().copy(this) } copy(t) { return this.arcLengthDivisions = t.arcLengthDivisions, this } toJSON() { let t = { metadata: { version: 4.6, type: "Curve", generator: "Curve.toJSON" } }; return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t } fromJSON(t) { return this.arcLengthDivisions = t.arcLengthDivisions, this } }; function Oh() { let i = 0, t = 0, e = 0, n = 0; function s(r, a, o, l) { i = r, t = o, e = -3 * r + 3 * a - 2 * o - l, n = 2 * r - 2 * a + o + l } return { initCatmullRom: function (r, a, o, l, c) { s(a, o, c * (o - r), c * (l - a)) }, initNonuniformCatmullRom: function (r, a, o, l, c, h, d) { let u = (a - r) / c - (o - r) / (c + h) + (o - a) / h, f = (o - a) / h - (l - a) / (h + d) + (l - o) / d; u *= h, f *= h, s(a, o, u, f) }, calc: function (r) { let a = r * r, o = a * r; return i + t * r + e * a + n * o } } } var Fa = new k, ac = new Oh, oc = new Oh, lc = new Oh, Br = class extends gh { constructor(t = [], e = !1, n = "centripetal", s = .5) { super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = t, this.closed = e, this.curveType = n, this.tension = s } getPoint(t, e = new k) { let n = e, s = this.points, r = s.length, a = (r - (this.closed ? 0 : 1)) * t, o = Math.floor(a), l = a - o; this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / r) + 1) * r : l === 0 && o === r - 1 && (o = r - 2, l = 1); let c, h; this.closed || o > 0 ? c = s[(o - 1) % r] : (Fa.subVectors(s[0], s[1]).add(s[0]), c = Fa); let d = s[o % r], u = s[(o + 1) % r]; if (this.closed || o + 2 < r ? h = s[(o + 2) % r] : (Fa.subVectors(s[r - 1], s[r - 2]).add(s[r - 1]), h = Fa), this.curveType === "centripetal" || this.curveType === "chordal") { let f = this.curveType === "chordal" ? .5 : .25, m = Math.pow(c.distanceToSquared(d), f), _ = Math.pow(d.distanceToSquared(u), f), g = Math.pow(u.distanceToSquared(h), f); _ < 1e-4 && (_ = 1), m < 1e-4 && (m = _), g < 1e-4 && (g = _), ac.initNonuniformCatmullRom(c.x, d.x, u.x, h.x, m, _, g), oc.initNonuniformCatmullRom(c.y, d.y, u.y, h.y, m, _, g), lc.initNonuniformCatmullRom(c.z, d.z, u.z, h.z, m, _, g) } else this.curveType === "catmullrom" && (ac.initCatmullRom(c.x, d.x, u.x, h.x, this.tension), oc.initCatmullRom(c.y, d.y, u.y, h.y, this.tension), lc.initCatmullRom(c.z, d.z, u.z, h.z, this.tension)); return n.set(ac.calc(l), oc.calc(l), lc.calc(l)), n } copy(t) { super.copy(t), this.points = []; for (let e = 0, n = t.points.length; e < n; e++) { let s = t.points[e]; this.points.push(s.clone()) } return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this } toJSON() { let t = super.toJSON(); t.points = []; for (let e = 0, n = this.points.length; e < n; e++) { let s = this.points[e]; t.points.push(s.toArray()) } return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t } fromJSON(t) { super.fromJSON(t), this.points = []; for (let e = 0, n = t.points.length; e < n; e++) { let s = t.points[e]; this.points.push(new k().fromArray(s)) } return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this } }; var _h = class i extends Ce { constructor(t = [], e = [], n = 1, s = 0) { super(), this.type = "PolyhedronGeometry", this.parameters = { vertices: t, indices: e, radius: n, detail: s }; let r = [], a = []; o(s), c(n), h(), this.setAttribute("position", new _e(r, 3)), this.setAttribute("normal", new _e(r.slice(), 3)), this.setAttribute("uv", new _e(a, 2)), s === 0 ? this.computeVertexNormals() : this.normalizeNormals(); function o(y) { let x = new k, v = new k, A = new k; for (let T = 0; T < e.length; T += 3)f(e[T + 0], x), f(e[T + 1], v), f(e[T + 2], A), l(x, v, A, y) } function l(y, x, v, A) { let T = A + 1, E = []; for (let C = 0; C <= T; C++) { E[C] = []; let b = y.clone().lerp(v, C / T), S = x.clone().lerp(v, C / T), P = T - C; for (let H = 0; H <= P; H++)H === 0 && C === T ? E[C][H] = b : E[C][H] = b.clone().lerp(S, H / P) } for (let C = 0; C < T; C++)for (let b = 0; b < 2 * (T - C) - 1; b++) { let S = Math.floor(b / 2); b % 2 === 0 ? (u(E[C][S + 1]), u(E[C + 1][S]), u(E[C][S])) : (u(E[C][S + 1]), u(E[C + 1][S + 1]), u(E[C + 1][S])) } } function c(y) { let x = new k; for (let v = 0; v < r.length; v += 3)x.x = r[v + 0], x.y = r[v + 1], x.z = r[v + 2], x.normalize().multiplyScalar(y), r[v + 0] = x.x, r[v + 1] = x.y, r[v + 2] = x.z } function h() { let y = new k; for (let x = 0; x < r.length; x += 3) { y.x = r[x + 0], y.y = r[x + 1], y.z = r[x + 2]; let v = g(y) / 2 / Math.PI + .5, A = p(y) / Math.PI + .5; a.push(v, 1 - A) } m(), d() } function d() { for (let y = 0; y < a.length; y += 6) { let x = a[y + 0], v = a[y + 2], A = a[y + 4], T = Math.max(x, v, A), E = Math.min(x, v, A); T > .9 && E < .1 && (x < .2 && (a[y + 0] += 1), v < .2 && (a[y + 2] += 1), A < .2 && (a[y + 4] += 1)) } } function u(y) { r.push(y.x, y.y, y.z) } function f(y, x) { let v = y * 3; x.x = t[v + 0], x.y = t[v + 1], x.z = t[v + 2] } function m() { let y = new k, x = new k, v = new k, A = new k, T = new Xt, E = new Xt, C = new Xt; for (let b = 0, S = 0; b < r.length; b += 9, S += 6) { y.set(r[b + 0], r[b + 1], r[b + 2]), x.set(r[b + 3], r[b + 4], r[b + 5]), v.set(r[b + 6], r[b + 7], r[b + 8]), T.set(a[S + 0], a[S + 1]), E.set(a[S + 2], a[S + 3]), C.set(a[S + 4], a[S + 5]), A.copy(y).add(x).add(v).divideScalar(3); let P = g(A); _(T, S + 0, y, P), _(E, S + 2, x, P), _(C, S + 4, v, P) } } function _(y, x, v, A) { A < 0 && y.x === 1 && (a[x] = y.x - 1), v.x === 0 && v.z === 0 && (a[x] = A / 2 / Math.PI + .5) } function g(y) { return Math.atan2(y.z, -y.x) } function p(y) { return Math.atan2(-y.y, Math.sqrt(y.x * y.x + y.z * y.z)) } } copy(t) { return super.copy(t), this.parameters = Object.assign({}, t.parameters), this } static fromJSON(t) { return new i(t.vertices, t.indices, t.radius, t.details) } }; var ka = new k, Ba = new k, cc = new k, za = new Ii, uo = class extends Ce { constructor(t = null, e = 1) { if (super(), this.type = "EdgesGeometry", this.parameters = { geometry: t, thresholdAngle: e }, t !== null) { let s = Math.pow(10, 4), r = Math.cos($a * e), a = t.getIndex(), o = t.getAttribute("position"), l = a ? a.count : o.count, c = [0, 0, 0], h = ["a", "b", "c"], d = new Array(3), u = {}, f = []; for (let m = 0; m < l; m += 3) { a ? (c[0] = a.getX(m), c[1] = a.getX(m + 1), c[2] = a.getX(m + 2)) : (c[0] = m, c[1] = m + 1, c[2] = m + 2); let { a: _, b: g, c: p } = za; if (_.fromBufferAttribute(o, c[0]), g.fromBufferAttribute(o, c[1]), p.fromBufferAttribute(o, c[2]), za.getNormal(cc), d[0] = `${Math.round(_.x * s)},${Math.round(_.y * s)},${Math.round(_.z * s)}`, d[1] = `${Math.round(g.x * s)},${Math.round(g.y * s)},${Math.round(g.z * s)}`, d[2] = `${Math.round(p.x * s)},${Math.round(p.y * s)},${Math.round(p.z * s)}`, !(d[0] === d[1] || d[1] === d[2] || d[2] === d[0])) for (let y = 0; y < 3; y++) { let x = (y + 1) % 3, v = d[y], A = d[x], T = za[h[y]], E = za[h[x]], C = `${v}_${A}`, b = `${A}_${v}`; b in u && u[b] ? (cc.dot(u[b].normal) <= r && (f.push(T.x, T.y, T.z), f.push(E.x, E.y, E.z)), u[b] = null) : C in u || (u[C] = { index0: c[y], index1: c[x], normal: cc.clone() }) } } for (let m in u) if (u[m]) { let { index0: _, index1: g } = u[m]; ka.fromBufferAttribute(o, _), Ba.fromBufferAttribute(o, g), f.push(ka.x, ka.y, ka.z), f.push(Ba.x, Ba.y, Ba.z) } this.setAttribute("position", new _e(f, 3)) } } copy(t) { return super.copy(t), this.parameters = Object.assign({}, t.parameters), this } }; var fo = class i extends _h { constructor(t = 1, e = 0) { let n = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], s = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2]; super(n, s, t, e), this.type = "OctahedronGeometry", this.parameters = { radius: t, detail: e } } static fromJSON(t) { return new i(t.radius, t.detail) } }; var po = class i extends Ce { constructor(t = 1, e = 32, n = 16, s = 0, r = Math.PI * 2, a = 0, o = Math.PI) { super(), this.type = "SphereGeometry", this.parameters = { radius: t, widthSegments: e, heightSegments: n, phiStart: s, phiLength: r, thetaStart: a, thetaLength: o }, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n)); let l = Math.min(a + o, Math.PI), c = 0, h = [], d = new k, u = new k, f = [], m = [], _ = [], g = []; for (let p = 0; p <= n; p++) { let y = [], x = p / n, v = 0; p === 0 && a === 0 ? v = .5 / e : p === n && l === Math.PI && (v = -.5 / e); for (let A = 0; A <= e; A++) { let T = A / e; d.x = -t * Math.cos(s + T * r) * Math.sin(a + x * o), d.y = t * Math.cos(a + x * o), d.z = t * Math.sin(s + T * r) * Math.sin(a + x * o), m.push(d.x, d.y, d.z), u.copy(d).normalize(), _.push(u.x, u.y, u.z), g.push(T + v, 1 - x), y.push(c++) } h.push(y) } for (let p = 0; p < n; p++)for (let y = 0; y < e; y++) { let x = h[p][y + 1], v = h[p][y], A = h[p + 1][y], T = h[p + 1][y + 1]; (p !== 0 || a > 0) && f.push(x, v, T), (p !== n - 1 || l < Math.PI) && f.push(v, A, T) } this.setIndex(f), this.setAttribute("position", new _e(m, 3)), this.setAttribute("normal", new _e(_, 3)), this.setAttribute("uv", new _e(g, 2)) } copy(t) { return super.copy(t), this.parameters = Object.assign({}, t.parameters), this } static fromJSON(t) { return new i(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength) } }; var mo = class i extends Ce { constructor(t = 1, e = .4, n = 12, s = 48, r = Math.PI * 2) { super(), this.type = "TorusGeometry", this.parameters = { radius: t, tube: e, radialSegments: n, tubularSegments: s, arc: r }, n = Math.floor(n), s = Math.floor(s); let a = [], o = [], l = [], c = [], h = new k, d = new k, u = new k; for (let f = 0; f <= n; f++)for (let m = 0; m <= s; m++) { let _ = m / s * r, g = f / n * Math.PI * 2; d.x = (t + e * Math.cos(g)) * Math.cos(_), d.y = (t + e * Math.cos(g)) * Math.sin(_), d.z = e * Math.sin(g), o.push(d.x, d.y, d.z), h.x = t * Math.cos(_), h.y = t * Math.sin(_), u.subVectors(d, h).normalize(), l.push(u.x, u.y, u.z), c.push(m / s), c.push(f / n) } for (let f = 1; f <= n; f++)for (let m = 1; m <= s; m++) { let _ = (s + 1) * f + m - 1, g = (s + 1) * (f - 1) + m - 1, p = (s + 1) * (f - 1) + m, y = (s + 1) * f + m; a.push(_, g, y), a.push(g, p, y) } this.setIndex(a), this.setAttribute("position", new _e(o, 3)), this.setAttribute("normal", new _e(l, 3)), this.setAttribute("uv", new _e(c, 2)) } copy(t) { return super.copy(t), this.parameters = Object.assign({}, t.parameters), this } static fromJSON(t) { return new i(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc) } }; function Va(i, t, e) { return !i || !e && i.constructor === t ? i : typeof t.BYTES_PER_ELEMENT == "number" ? new t(i) : Array.prototype.slice.call(i) } function ab(i) { return ArrayBuffer.isView(i) && !(i instanceof DataView) } var rr = class { constructor(t, e, n, s) { this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = s !== void 0 ? s : new e.constructor(n), this.sampleValues = e, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {} } evaluate(t) { let e = this.parameterPositions, n = this._cachedIndex, s = e[n], r = e[n - 1]; n: { t: { let a; e: { i: if (!(t < s)) { for (let o = n + 2; ;) { if (s === void 0) { if (t < r) break i; return n = e.length, this._cachedIndex = n, this.copySampleValue_(n - 1) } if (n === o) break; if (r = s, s = e[++n], t < s) break t } a = e.length; break e } if (!(t >= r)) { let o = e[1]; t < o && (n = 2, r = o); for (let l = n - 2; ;) { if (r === void 0) return this._cachedIndex = 0, this.copySampleValue_(0); if (n === l) break; if (s = r, r = e[--n - 1], t >= r) break t } a = n, n = 0; break e } break n } for (; n < a;) { let o = n + a >>> 1; t < e[o] ? a = o : n = o + 1 } if (s = e[n], r = e[n - 1], r === void 0) return this._cachedIndex = 0, this.copySampleValue_(0); if (s === void 0) return n = e.length, this._cachedIndex = n, this.copySampleValue_(n - 1) } this._cachedIndex = n, this.intervalChanged_(n, r, s) } return this.interpolate_(n, r, t, s) } getSettings_() { return this.settings || this.DefaultSettings_ } copySampleValue_(t) { let e = this.resultBuffer, n = this.sampleValues, s = this.valueSize, r = t * s; for (let a = 0; a !== s; ++a)e[a] = n[r + a]; return e } interpolate_() { throw new Error("call to abstract method") } intervalChanged_() { } }, vh = class extends rr { constructor(t, e, n, s) { super(t, e, n, s), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: bd, endingEnd: bd } } intervalChanged_(t, e, n) { let s = this.parameterPositions, r = t - 2, a = t + 1, o = s[r], l = s[a]; if (o === void 0) switch (this.getSettings_().endingStart) { case Sd: r = t, o = 2 * e - n; break; case Md: r = s.length - 2, o = e + s[r] - s[r + 1]; break; default: r = t, o = n }if (l === void 0) switch (this.getSettings_().endingEnd) { case Sd: a = t, l = 2 * n - e; break; case Md: a = 1, l = n + s[1] - s[0]; break; default: a = t - 1, l = e }let c = (n - e) * .5, h = this.valueSize; this._weightPrev = c / (e - o), this._weightNext = c / (l - n), this._offsetPrev = r * h, this._offsetNext = a * h } interpolate_(t, e, n, s) { let r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = t * o, c = l - o, h = this._offsetPrev, d = this._offsetNext, u = this._weightPrev, f = this._weightNext, m = (n - e) / (s - e), _ = m * m, g = _ * m, p = -u * g + 2 * u * _ - u * m, y = (1 + u) * g + (-1.5 - 2 * u) * _ + (-.5 + u) * m + 1, x = (-1 - f) * g + (1.5 + f) * _ + .5 * m, v = f * g - f * _; for (let A = 0; A !== o; ++A)r[A] = p * a[h + A] + y * a[c + A] + x * a[l + A] + v * a[d + A]; return r } }, yh = class extends rr { constructor(t, e, n, s) { super(t, e, n, s) } interpolate_(t, e, n, s) { let r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = t * o, c = l - o, h = (n - e) / (s - e), d = 1 - h; for (let u = 0; u !== o; ++u)r[u] = a[c + u] * d + a[l + u] * h; return r } }, xh = class extends rr { constructor(t, e, n, s) { super(t, e, n, s) } interpolate_(t) { return this.copySampleValue_(t - 1) } }, Ln = class { constructor(t, e, n, s) { if (t === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined"); if (e === void 0 || e.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t); this.name = t, this.times = Va(e, this.TimeBufferType), this.values = Va(n, this.ValueBufferType), this.setInterpolation(s || this.DefaultInterpolation) } static toJSON(t) { let e = t.constructor, n; if (e.toJSON !== this.toJSON) n = e.toJSON(t); else { n = { name: t.name, times: Va(t.times, Array), values: Va(t.values, Array) }; let s = t.getInterpolation(); s !== t.DefaultInterpolation && (n.interpolation = s) } return n.type = t.ValueTypeName, n } InterpolantFactoryMethodDiscrete(t) { return new xh(this.times, this.values, this.getValueSize(), t) } InterpolantFactoryMethodLinear(t) { return new yh(this.times, this.values, this.getValueSize(), t) } InterpolantFactoryMethodSmooth(t) { return new vh(this.times, this.values, this.getValueSize(), t) } setInterpolation(t) { let e; switch (t) { case Ya: e = this.InterpolantFactoryMethodDiscrete; break; case Zc: e = this.InterpolantFactoryMethodLinear; break; case Il: e = this.InterpolantFactoryMethodSmooth; break }if (e === void 0) { let n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name; if (this.createInterpolant === void 0) if (t !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation); else throw new Error(n); return console.warn("THREE.KeyframeTrack:", n), this } return this.createInterpolant = e, this } getInterpolation() { switch (this.createInterpolant) { case this.InterpolantFactoryMethodDiscrete: return Ya; case this.InterpolantFactoryMethodLinear: return Zc; case this.InterpolantFactoryMethodSmooth: return Il } } getValueSize() { return this.values.length / this.times.length } shift(t) { if (t !== 0) { let e = this.times; for (let n = 0, s = e.length; n !== s; ++n)e[n] += t } return this } scale(t) { if (t !== 1) { let e = this.times; for (let n = 0, s = e.length; n !== s; ++n)e[n] *= t } return this } trim(t, e) { let n = this.times, s = n.length, r = 0, a = s - 1; for (; r !== s && n[r] < t;)++r; for (; a !== -1 && n[a] > e;)--a; if (++a, r !== 0 || a !== s) { r >= a && (a = Math.max(a, 1), r = a - 1); let o = this.getValueSize(); this.times = n.slice(r, a), this.values = this.values.slice(r * o, a * o) } return this } validate() { let t = !0, e = this.getValueSize(); e - Math.floor(e) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1); let n = this.times, s = this.values, r = n.length; r === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1); let a = null; for (let o = 0; o !== r; o++) { let l = n[o]; if (typeof l == "number" && isNaN(l)) { console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, l), t = !1; break } if (a !== null && a > l) { console.error("THREE.KeyframeTrack: Out of order keys.", this, o, l, a), t = !1; break } a = l } if (s !== void 0 && ab(s)) for (let o = 0, l = s.length; o !== l; ++o) { let c = s[o]; if (isNaN(c)) { console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, c), t = !1; break } } return t } optimize() { let t = this.times.slice(), e = this.values.slice(), n = this.getValueSize(), s = this.getInterpolation() === Il, r = t.length - 1, a = 1; for (let o = 1; o < r; ++o) { let l = !1, c = t[o], h = t[o + 1]; if (c !== h && (o !== 1 || c !== t[0])) if (s) l = !0; else { let d = o * n, u = d - n, f = d + n; for (let m = 0; m !== n; ++m) { let _ = e[d + m]; if (_ !== e[u + m] || _ !== e[f + m]) { l = !0; break } } } if (l) { if (o !== a) { t[a] = t[o]; let d = o * n, u = a * n; for (let f = 0; f !== n; ++f)e[u + f] = e[d + f] } ++a } } if (r > 0) { t[a] = t[r]; for (let o = r * n, l = a * n, c = 0; c !== n; ++c)e[l + c] = e[o + c]; ++a } return a !== t.length ? (this.times = t.slice(0, a), this.values = e.slice(0, a * n)) : (this.times = t, this.values = e), this } clone() { let t = this.times.slice(), e = this.values.slice(), n = this.constructor, s = new n(this.name, t, e); return s.createInterpolant = this.createInterpolant, s } }; Ln.prototype.TimeBufferType = Float32Array; Ln.prototype.ValueBufferType = Float32Array; Ln.prototype.DefaultInterpolation = Zc; var _s = class extends Ln { constructor(t, e, n) { super(t, e, n) } }; _s.prototype.ValueTypeName = "bool"; _s.prototype.ValueBufferType = Array; _s.prototype.DefaultInterpolation = Ya; _s.prototype.InterpolantFactoryMethodLinear = void 0; _s.prototype.InterpolantFactoryMethodSmooth = void 0; var bh = class extends Ln { }; bh.prototype.ValueTypeName = "color"; var Sh = class extends Ln { }; Sh.prototype.ValueTypeName = "number"; var Mh = class extends rr { constructor(t, e, n, s) { super(t, e, n, s) } interpolate_(t, e, n, s) { let r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = (n - e) / (s - e), c = t * o; for (let h = c + o; c !== h; c += 4)Fi.slerpFlat(r, 0, a, c - o, a, c, l); return r } }, go = class extends Ln { InterpolantFactoryMethodLinear(t) { return new Mh(this.times, this.values, this.getValueSize(), t) } }; go.prototype.ValueTypeName = "quaternion"; go.prototype.InterpolantFactoryMethodSmooth = void 0; var vs = class extends Ln { constructor(t, e, n) { super(t, e, n) } }; vs.prototype.ValueTypeName = "string"; vs.prototype.ValueBufferType = Array; vs.prototype.DefaultInterpolation = Ya; vs.prototype.InterpolantFactoryMethodLinear = void 0; vs.prototype.InterpolantFactoryMethodSmooth = void 0; var wh = class extends Ln { }; wh.prototype.ValueTypeName = "vector"; var Eh = class { constructor(t, e, n) { let s = this, r = !1, a = 0, o = 0, l, c = []; this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function (h) { o++, r === !1 && s.onStart !== void 0 && s.onStart(h, a, o), r = !0 }, this.itemEnd = function (h) { a++, s.onProgress !== void 0 && s.onProgress(h, a, o), a === o && (r = !1, s.onLoad !== void 0 && s.onLoad()) }, this.itemError = function (h) { s.onError !== void 0 && s.onError(h) }, this.resolveURL = function (h) { return l ? l(h) : h }, this.setURLModifier = function (h) { return l = h, this }, this.addHandler = function (h, d) { return c.push(h, d), this }, this.removeHandler = function (h) { let d = c.indexOf(h); return d !== -1 && c.splice(d, 2), this }, this.getHandler = function (h) { for (let d = 0, u = c.length; d < u; d += 2) { let f = c[d], m = c[d + 1]; if (f.global && (f.lastIndex = 0), f.test(h)) return m } return null } } }, ob = new Eh, Th = class { constructor(t) { this.manager = t !== void 0 ? t : ob, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {} } load() { } loadAsync(t, e) { let n = this; return new Promise(function (s, r) { n.load(t, s, e, r) }) } parse() { } setCrossOrigin(t) { return this.crossOrigin = t, this } setWithCredentials(t) { return this.withCredentials = t, this } setPath(t) { return this.path = t, this } setResourcePath(t) { return this.resourcePath = t, this } setRequestHeader(t) { return this.requestHeader = t, this } }; Th.DEFAULT_MATERIAL_NAME = "__DEFAULT"; var Fh = "\\[\\]\\.:\\/", lb = new RegExp("[" + Fh + "]", "g"), kh = "[^" + Fh + "]", cb = "[^" + Fh.replace("\\.", "") + "]", hb = /((?:WC+[\/:])*)/.source.replace("WC", kh), ub = /(WCOD+)?/.source.replace("WCOD", cb), db = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", kh), fb = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", kh), pb = new RegExp("^" + hb + ub + db + fb + "$"), mb = ["material", "materials", "bones", "map"], Ah = class { constructor(t, e, n) { let s = n || fe.parseTrackName(e); this._targetGroup = t, this._bindings = t.subscribe_(e, s) } getValue(t, e) { this.bind(); let n = this._targetGroup.nCachedObjects_, s = this._bindings[n]; s !== void 0 && s.getValue(t, e) } setValue(t, e) { let n = this._bindings; for (let s = this._targetGroup.nCachedObjects_, r = n.length; s !== r; ++s)n[s].setValue(t, e) } bind() { let t = this._bindings; for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)t[e].bind() } unbind() { let t = this._bindings; for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)t[e].unbind() } }, fe = class i { constructor(t, e, n) { this.path = e, this.parsedPath = n || i.parseTrackName(e), this.node = i.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound } static create(t, e, n) { return t && t.isAnimationObjectGroup ? new i.Composite(t, e, n) : new i(t, e, n) } static sanitizeNodeName(t) { return t.replace(/\s/g, "_").replace(lb, "") } static parseTrackName(t) { let e = pb.exec(t); if (e === null) throw new Error("PropertyBinding: Cannot parse trackName: " + t); let n = { nodeName: e[2], objectName: e[3], objectIndex: e[4], propertyName: e[5], propertyIndex: e[6] }, s = n.nodeName && n.nodeName.lastIndexOf("."); if (s !== void 0 && s !== -1) { let r = n.nodeName.substring(s + 1); mb.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, s), n.objectName = r) } if (n.propertyName === null || n.propertyName.length === 0) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t); return n } static findNode(t, e) { if (e === void 0 || e === "" || e === "." || e === -1 || e === t.name || e === t.uuid) return t; if (t.skeleton) { let n = t.skeleton.getBoneByName(e); if (n !== void 0) return n } if (t.children) { let n = function (r) { for (let a = 0; a < r.length; a++) { let o = r[a]; if (o.name === e || o.uuid === e) return o; let l = n(o.children); if (l) return l } return null }, s = n(t.children); if (s) return s } return null } _getValue_unavailable() { } _setValue_unavailable() { } _getValue_direct(t, e) { t[e] = this.targetObject[this.propertyName] } _getValue_array(t, e) { let n = this.resolvedProperty; for (let s = 0, r = n.length; s !== r; ++s)t[e++] = n[s] } _getValue_arrayElement(t, e) { t[e] = this.resolvedProperty[this.propertyIndex] } _getValue_toArray(t, e) { this.resolvedProperty.toArray(t, e) } _setValue_direct(t, e) { this.targetObject[this.propertyName] = t[e] } _setValue_direct_setNeedsUpdate(t, e) { this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0 } _setValue_direct_setMatrixWorldNeedsUpdate(t, e) { this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0 } _setValue_array(t, e) { let n = this.resolvedProperty; for (let s = 0, r = n.length; s !== r; ++s)n[s] = t[e++] } _setValue_array_setNeedsUpdate(t, e) { let n = this.resolvedProperty; for (let s = 0, r = n.length; s !== r; ++s)n[s] = t[e++]; this.targetObject.needsUpdate = !0 } _setValue_array_setMatrixWorldNeedsUpdate(t, e) { let n = this.resolvedProperty; for (let s = 0, r = n.length; s !== r; ++s)n[s] = t[e++]; this.targetObject.matrixWorldNeedsUpdate = !0 } _setValue_arrayElement(t, e) { this.resolvedProperty[this.propertyIndex] = t[e] } _setValue_arrayElement_setNeedsUpdate(t, e) { this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0 } _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) { this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0 } _setValue_fromArray(t, e) { this.resolvedProperty.fromArray(t, e) } _setValue_fromArray_setNeedsUpdate(t, e) { this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0 } _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) { this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0 } _getValue_unbound(t, e) { this.bind(), this.getValue(t, e) } _setValue_unbound(t, e) { this.bind(), this.setValue(t, e) } bind() { let t = this.node, e = this.parsedPath, n = e.objectName, s = e.propertyName, r = e.propertyIndex; if (t || (t = i.findNode(this.rootNode, e.nodeName), this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) { console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + "."); return } if (n) { let c = e.objectIndex; switch (n) { case "materials": if (!t.material) { console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this); return } if (!t.material.materials) { console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this); return } t = t.material.materials; break; case "bones": if (!t.skeleton) { console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this); return } t = t.skeleton.bones; for (let h = 0; h < t.length; h++)if (t[h].name === c) { c = h; break } break; case "map": if ("map" in t) { t = t.map; break } if (!t.material) { console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this); return } if (!t.material.map) { console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this); return } t = t.material.map; break; default: if (t[n] === void 0) { console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this); return } t = t[n] }if (c !== void 0) { if (t[c] === void 0) { console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t); return } t = t[c] } } let a = t[s]; if (a === void 0) { let c = e.nodeName; console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + s + " but it wasn't found.", t); return } let o = this.Versioning.None; this.targetObject = t, t.needsUpdate !== void 0 ? o = this.Versioning.NeedsUpdate : t.matrixWorldNeedsUpdate !== void 0 && (o = this.Versioning.MatrixWorldNeedsUpdate); let l = this.BindingType.Direct; if (r !== void 0) { if (s === "morphTargetInfluences") { if (!t.geometry) { console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this); return } if (!t.geometry.morphAttributes) { console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this); return } t.morphTargetDictionary[r] !== void 0 && (r = t.morphTargetDictionary[r]) } l = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = r } else a.fromArray !== void 0 && a.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (l = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = s; this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][o] } unbind() { this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound } }; fe.Composite = Ah; fe.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 }; fe.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 }; fe.prototype.GetterByBindingType = [fe.prototype._getValue_direct, fe.prototype._getValue_array, fe.prototype._getValue_arrayElement, fe.prototype._getValue_toArray]; fe.prototype.SetterByBindingTypeAndVersioning = [[fe.prototype._setValue_direct, fe.prototype._setValue_direct_setNeedsUpdate, fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [fe.prototype._setValue_array, fe.prototype._setValue_array_setNeedsUpdate, fe.prototype._setValue_array_setMatrixWorldNeedsUpdate], [fe.prototype._setValue_arrayElement, fe.prototype._setValue_arrayElement_setNeedsUpdate, fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [fe.prototype._setValue_fromArray, fe.prototype._setValue_fromArray_setNeedsUpdate, fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]]; var xS = new Float32Array(1); var _o = class extends gs { constructor(t = 10, e = 10, n = 4473924, s = 8947848) { n = new Ht(n), s = new Ht(s); let r = e / 2, a = t / e, o = t / 2, l = [], c = []; for (let u = 0, f = 0, m = -o; u <= e; u++, m += a) { l.push(-o, 0, m, o, 0, m), l.push(m, 0, -o, m, 0, o); let _ = u === r ? n : s; _.toArray(c, f), f += 3, _.toArray(c, f), f += 3, _.toArray(c, f), f += 3, _.toArray(c, f), f += 3 } let h = new Ce; h.setAttribute("position", new _e(l, 3)), h.setAttribute("color", new _e(c, 3)); let d = new ms({ vertexColors: !0, toneMapped: !1 }); super(h, d), this.type = "GridHelper" } dispose() { this.geometry.dispose(), this.material.dispose() } }; typeof __THREE_DEVTOOLS__ != "undefined" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: Ch } })); typeof window != "undefined" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Ch); var zh = Math.PI * 2, Bh = 1337, Ze = () => (Bh = (Bh * 1664525 + 1013904223) % 4294967296) / 4294967296, lr = () => { Bh = 1337 }; function Hr(i, t) { let e = new Float32Array(i * 3); for (let n = 0; n < i; n++) { let s = t(n, i); e[n * 3] = s[0], e[n * 3 + 1] = s[1], e[n * 3 + 2] = s[2] } return e } function Vh(i, t = 2.6) { lr(); let e = Math.PI * (3 - Math.sqrt(5)); return Hr(i, n => { let s = 1 - n / (i - 1) * 2, r = Math.sqrt(1 - s * s), a = e * n, o = t * (.97 + Ze() * .06); return [Math.cos(a) * r * o, s * o, Math.sin(a) * r * o] }) } function _b(i, t = 1) { return lr(), Hr(i, e => { let n = e / i * zh * 3, s = 2, r = 3, a = .16, o = 1.2 + .55 * Math.cos(r * n / 3 * 1 + 0), l = (2 + Math.cos(r * n / 3)) * Math.cos(s * n / 3), c = (2 + Math.cos(r * n / 3)) * Math.sin(s * n / 3), h = Math.sin(r * n / 3) * 1.4; return [(l + (Ze() - .5) * a) * .85 * t, (c + (Ze() - .5) * a) * .85 * t, (h + (Ze() - .5) * a + o * 0) * t] }) } function vb(i) { lr(); let t = Math.ceil(Math.sqrt(i)); return Hr(i, e => { let n = e % t / t - .5, s = Math.floor(e / t) / t - .5; return [n * 11, Math.sin(n * 9) * .5 + Math.cos(s * 8) * .5 - .6, s * 7] }) } function yb(i) { lr(); let t = Math.round(Math.cbrt(i)), e = 4.2 / t; return Hr(i, n => { let s = n % t, r = Math.floor(n / t) % t, a = Math.floor(n / (t * t)) % t; return [(s - t / 2) * e + (Ze() - .5) * .08, (r - t / 2) * e + (Ze() - .5) * .08, (a - t / 2) * e + (Ze() - .5) * .08] }) } function xb(i) { return lr(), Hr(i, t => { let e = t / i * zh * 3.5, n = t % 2 ? 1 : -1, s = t / i - .5, r = 1.8 + (Ze() - .5) * .25; return [Math.cos(e + (n > 0 ? Math.PI : 0)) * r, s * 9, Math.sin(e + (n > 0 ? Math.PI : 0)) * r] }) } function bb(i) { lr(); let t = 1.9, e = 1.4, n = 1.5, s = 1.3, r = (m, _, g) => [m, _, g], a = [r(-t, -n / 2, -e), r(t, -n / 2, -e), r(t, -n / 2, e), r(-t, -n / 2, e), r(-t, n / 2, -e), r(t, n / 2, -e), r(t, n / 2, e), r(-t, n / 2, e)], o = [r(-t - .3, n / 2, 0), r(t + .3, n / 2, 0), r(-t - .3, n / 2 + s, 0), r(t + .3, n / 2 + s, 0)], l = [[a[0], a[1]], [a[1], a[2]], [a[2], a[3]], [a[3], a[0]], [a[4], a[5]], [a[5], a[6]], [a[6], a[7]], [a[7], a[4]], [a[0], a[4]], [a[1], a[5]], [a[2], a[6]], [a[3], a[7]], [r(-t, n / 2, e), r(-t + 0, n / 2 + s, 0)], [r(t, n / 2, e), r(t, n / 2 + s, 0)], [r(-t, n / 2, -e), r(-t, n / 2 + s, 0)], [r(t, n / 2, -e), r(t, n / 2 + s, 0)], [r(-t, n / 2 + s, 0), r(t, n / 2 + s, 0)], [r(-.35, -n / 2, e), r(-.35, .15, e)], [r(.35, -n / 2, e), r(.35, .15, e)], [r(-.35, .15, e), r(.35, .15, e)], [r(-1.45, 0, e), r(-.85, 0, e)], [r(-1.45, .5, e), r(-.85, .5, e)], [r(-1.45, 0, e), r(-1.45, .5, e)], [r(-.85, 0, e), r(-.85, .5, e)], [r(.85, 0, e), r(1.45, 0, e)], [r(.85, .5, e), r(1.45, .5, e)], [r(.85, 0, e), r(.85, .5, e)], [r(1.45, 0, e), r(1.45, .5, e)], [r(1, n / 2 + .6, .2), r(1, n / 2 + 1.5, .2)], [r(1.4, n / 2 + .4, .2), r(1.4, n / 2 + 1.5, .2)], [r(1, n / 2 + 1.5, .2), r(1.4, n / 2 + 1.5, .2)]], c = l.map(([m, _]) => Math.hypot(_[0] - m[0], _[1] - m[1], _[2] - m[2])), h = c.reduce((m, _) => m + _, 0), d = Math.floor(i * .9), u = new Float32Array(i * 3), f = 0; for (l.forEach(([m, _], g) => { let p = Math.max(2, Math.round(c[g] / h * d)); for (let y = 0; y < p && f < d; y++, f++) { let x = Ze(); u[f * 3] = m[0] + (_[0] - m[0]) * x + (Ze() - .5) * .04, u[f * 3 + 1] = m[1] + (_[1] - m[1]) * x + (Ze() - .5) * .04, u[f * 3 + 2] = m[2] + (_[2] - m[2]) * x + (Ze() - .5) * .04 } }); f < i; f++) { let m = Ze() * zh, _ = Ze() * 2 - 1, g = 3 + Ze() * 2.2, p = Math.sqrt(1 - _ * _); u[f * 3] = Math.cos(m) * p * g, u[f * 3 + 1] = _ * g * .7, u[f * 3 + 2] = Math.sin(m) * p * g } return u } var qf = { sphere: Vh, torusKnot: _b, wave: vb, lattice: yb, helix: xb, house: bb }, Sb = Object.keys(qf); function $f(i) { return Object.fromEntries(Sb.map(t => [t, qf[t](i)])) } var Hh = { home: { shape: "sphere", x: 0, y: 0, z: 0, s: 1, alpha: 1, lat: 1, spin: 1, ry: 0 }, about: { shape: "torusKnot", x: -3.4, y: 0, z: -1, s: .8, alpha: .9, lat: 0, spin: 1, ry: 0 }, skills: { shape: "lattice", x: 3.8, y: 0, z: -1, s: .85, alpha: .8, lat: 0, spin: 1, ry: 0 }, work: { shape: "wave", x: 0, y: -1.2, z: -5, s: 1, alpha: .4, lat: 0, spin: .2, ry: 0 }, lab: { shape: "helix", x: 3.8, y: 0, z: -1, s: .8, alpha: .6, lat: 0, spin: 1, ry: 0 }, journey: { shape: "sphere", x: 3.9, y: 0, z: -2, s: .65, alpha: .7, lat: 0, spin: 1, ry: 0 }, code: { shape: "torusKnot", x: 3.6, y: 0, z: -2, s: .7, alpha: .6, lat: 0, spin: 1, ry: 0 }, match: { shape: "wave", x: 0, y: -1.4, z: -5, s: 1, alpha: .35, lat: 0, spin: .2, ry: 0 }, proof: { shape: "sphere", x: -3.8, y: 0, z: -2, s: .65, alpha: .6, lat: 0, spin: 1, ry: 0 }, journal: { shape: "lattice", x: 3.8, y: 0, z: -2, s: .7, alpha: .55, lat: 0, spin: 1, ry: 0 }, contact: { shape: "house", x: 0, y: -.3, z: 0, s: 1.15, alpha: 1, lat: 0, spin: 0, ry: .35 } }, Mb =`
uniform float uTime; uniform float uMix; uniform float uPx; uniform vec2 uMouse; uniform float uAspect; uniform float uBeat;
attribute vec3 aA; attribute vec3 aB; attribute float aRand;
varying float vR; varying float vL;
void main(){
  float m = clamp((uMix - aRand * 0.4) / 0.6, 0.0, 1.0);
  m = m * m * (3.0 - 2.0 * m);
  vec3 p = mix(aA, aB, m);
  float sw = sin(m * 3.14159265);
  p += normalize(p + vec3(0.001)) * sw * (1.2 + aRand * 1.6);
  p.y += sin(uTime * 0.7 + p.x * 1.1 + aRand * 6.2831) * 0.07;
  p.x += cos(uTime * 0.5 + p.y * 1.3 + aRand * 6.2831) * 0.05;
  p *= 1.0 + uBeat * 0.05;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  vec4 clip = projectionMatrix * mv;
  vec2 sp = clip.xy / clip.w;
  vec2 d = sp - uMouse; d.x *= uAspect;
  float push = smoothstep(0.42, 0.0, length(d));
  mv.xy += normalize(d + vec2(0.0001)) * push * 0.9;
  vL = push; vR = aRand;
  gl_PointSize = (1.6 + aRand * 2.4 + push * 2.0) * (1.0 + uBeat * 0.9) * uPx * (9.0 / -mv.z);
  gl_Position = projectionMatrix * mv;
}`, wb =`
uniform vec3 uC1; uniform vec3 uC2; uniform vec3 uC3; uniform float uAlpha;
varying float vR; varying float vL;
void main(){
  vec2 c = gl_PointCoord - 0.5; float r = length(c);
  if (r > 0.5) discard;
  float a = smoothstep(0.5, 0.0, r); a *= a;
  vec3 col = mix(uC1, uC2, vR);
  col = mix(col, uC3, step(0.93, vR) * 0.9 + vL * 0.6);
  gl_FragColor = vec4(col, a * uAlpha);
}`; function Yf(i, { reduced: t = !1 } = {}) { let e = document.createElement("canvas"); if (!(e.getContext && (e.getContext("webgl2") || e.getContext("webgl")))) return null; let n; try { n = new oo({ canvas: i, antialias: !1, alpha: !0, powerPreference: "high-performance" }) } catch { return null } let s = window.innerWidth < 820, r = s ? 3500 : 7e3, a = $f(r); n.setPixelRatio(Math.min(window.devicePixelRatio || 1, s ? 1.5 : 1.75)), n.setClearColor(0, 0); let o = new lo, l = new Ye(55, 1, .1, 100); l.position.z = 9; let c = new Gn; o.add(c); let h = new Ce, d = new Float32Array(r); for (let q = 0; q < r; q++)d[q] = Math.random(); h.setAttribute("position", new Ee(new Float32Array(r * 3), 3)), h.setAttribute("aA", new Ee(new Float32Array(a.sphere), 3)), h.setAttribute("aB", new Ee(new Float32Array(a.sphere), 3)), h.setAttribute("aRand", new Ee(d, 1)); let u = { uTime: { value: 0 }, uBeat: { value: 0 }, uMix: { value: 1 }, uPx: { value: n.getPixelRatio() }, uAspect: { value: 1 }, uMouse: { value: new Xt(9, 9) }, uAlpha: { value: 1 }, uC1: { value: new Ht("#8B6CFF") }, uC2: { value: new Ht("#5CFFC8") }, uC3: { value: new Ht("#FF7A59") } }, f = new bn({ uniforms: u, vertexShader: Mb, fragmentShader: wb, transparent: !0, depthWrite: !1, blending: Wn }), m = new sr(h, f); m.frustumCulled = !1, c.add(m); let _ = s ? 110 : 190, g = Vh(_, 2.15), p = []; for (let q = 0; q < _; q++) { let B = []; for (let X = 0; X < _; X++) { if (q === X) continue; let it = Math.hypot(g[q * 3] - g[X * 3], g[q * 3 + 1] - g[X * 3 + 1], g[q * 3 + 2] - g[X * 3 + 2]); B.push([it, X]) } B.sort((X, it) => X[0] - it[0]), B.slice(0, 3).forEach(([, X]) => { q < X && p.push(q, X) }) } let y = new Float32Array(p.length * 3); p.forEach((q, B) => { y[B * 3] = g[q * 3], y[B * 3 + 1] = g[q * 3 + 1], y[B * 3 + 2] = g[q * 3 + 2] }); let x = new Ce; x.setAttribute("position", new Ee(y, 3)); let v = new gs(x, new ms({ color: "#8B6CFF", transparent: !0, opacity: .25, depthWrite: !1, blending: Wn })), A = new Ce; A.setAttribute("position", new Ee(new Float32Array(g), 3)); let T = new sr(A, new ir({ color: "#5CFFC8", size: .07, transparent: !0, opacity: .95, depthWrite: !1, blending: Wn })), E = new Gn; E.add(v, T), c.add(E); let C = new Gn; C.visible = !1, o.add(C); let b = [-4.5, -1.5, 1.5, 4.5], S = [], P = [], H = [], z = q => { let B = new ms({ color: q, transparent: !0, opacity: .9, blending: Wn, depthWrite: !1 }); return H.push(B), B }, W = q => new ps({ color: q, wireframe: !0, transparent: !0, opacity: .85, blending: Wn, depthWrite: !1 }); b.forEach((q, B) => { let X = new gs(new uo(new Bi(3, 2.4, 3)), z("#8B6CFF")); X.position.set(q, 0, 0), C.add(X), S.push(X); let it = new sn(new nr(2.8, 2.8), new ps({ color: "#5CFFC8", transparent: !0, opacity: .1, side: Rn, depthWrite: !1, blending: Wn })); it.rotation.x = -Math.PI / 2, it.position.set(q, -1.19, 0), C.add(it), S.push(it); let rt = [new mo(.55, .05, 10, 40), new Bi(.9, .6, .08), new fo(.6), new po(.42, 14, 10)][B], _t = new sn(rt, W("#5CFFC8")); _t.position.set(q, -.2, -.4), C.add(_t), P.push(_t) }); let U = [], I = [-6.2, 1.2, -1.8], G = [6.2, 1.2, -1.8], D = [6.2, 1.2, 1.8], tt = [-6.2, 1.2, 1.8], j = [-6.2, 3.1, 0], dt = [6.2, 3.1, 0];[[I, j], [tt, j], [G, dt], [D, dt], [j, dt], [I, G], [tt, D]].forEach(([q, B]) => U.push(...q, ...B)); let At = new Ce; At.setAttribute("position", new Ee(new Float32Array(U), 3)); let Ut = new gs(At, z("#FF7A59")); C.add(Ut); let Z = new _o(40, 40, "#8B6CFF", "#8B6CFF"); Z.position.y = -1.2, Z.material.transparent = !0, Z.material.opacity = .18, C.add(Z); let et = new Ce, at = new Float32Array(900); for (let q = 0; q < 900; q += 3)at[q] = (Math.random() - .5) * 18, at[q + 1] = (Math.random() - .3) * 6, at[q + 2] = (Math.random() - .5) * 12; et.setAttribute("position", new Ee(at, 3)), C.add(new sr(et, new ir({ color: "#F1EEE6", size: .04, transparent: !0, opacity: .6, depthWrite: !1 }))); let lt = [[0, 1, 12], [-3, .6, 5.5], [-4.5, .2, 1.1], [-1.5, .2, 1.1], [1.5, .2, 1.1], [4.5, .2, 1.1], [0, 2.6, 13]].map(q => new k(...q)), vt = [[0, .8, 0], [-3.5, 0, 0], [-4.5, -.2, -.6], [-1.5, -.2, -.6], [1.5, -.2, -.6], [4.5, -.2, -.6], [0, .8, 0]].map(q => new k(...q)), Rt = new Br(lt), Nt = new Br(vt), Zt = [0, 2, 3, 4, 5, 6], nt = { on: !1, t: 0 }; function yt() { nt.on || (nt.on = !0, nt.t = 0, c.visible = !1, C.visible = !0, Ot()) } function L(q) { let B = Zt[Math.max(0, Math.min(Zt.length - 1, q))]; xe.to(nt, { t: B / (lt.length - 1), duration: t ? .01 : 2.6, ease: "power2.inOut", overwrite: !0 }) } function qt() { nt.on && (nt.on = !1, C.visible = !1, c.visible = !0, l.position.set(0, 0, 9), l.lookAt(0, 0, 0)) } let ft = ["#8B6CFF", "#5CFFC8", "#FF7A59"]; function Ot() { let [q, B, X] = ft; S.forEach((it, rt) => { let _t = [q, B, X, q][Math.floor(rt / 2)]; it.material && it.material.color.set(rt % 2 ? B : _t) }), P.forEach(it => it.material.color.set(B)), Ut.material.color.set(X), Z.material.color.set(q) } let Ct = "sphere", Jt = !1, Et = null, R = "home", M = 0, V = 1, K = 0, Q = new Xt(0, 0), J = new Xt(9, 9), bt = 1, ct = () => window.innerWidth < 820; function pt(q, B) { let X = Hh[q] || Hh.home, it = ct() ? .25 : 1, rt = ct() ? .78 : 1, _t = B || t ? .01 : 1.7; xe.to(c.position, { x: X.x * it, y: X.y, z: X.z, duration: _t, ease: "power3.inOut", overwrite: !0 }), xe.to(c.scale, { x: X.s * rt, y: X.s * rt, z: X.s * rt, duration: _t, ease: "power3.inOut", overwrite: !0 }), xe.to(u.uAlpha, { value: X.alpha * (ct() ? .8 : 1), duration: _t, overwrite: !0 }); let Kt = { v: bt }; xe.to(Kt, { v: X.lat, duration: _t, onUpdate() { bt = Kt.v, v.material.opacity = .25 * Kt.v, T.material.opacity = .95 * Kt.v, E.visible = Kt.v > .01 } }), xe.to({ s: V }, { s: X.spin, duration: _t, onUpdate() { V = this.targets()[0].s } }), xe.to({ r: K }, { r: X.ry, duration: _t, onUpdate() { K = this.targets()[0].r } }), Gt(X.shape, B) } function Gt(q, B) { if (!(q === Ct && !Jt)) { if (Jt) { Et = q; return } Jt = !0, h.attributes.aA.array.set(a[Ct]), h.attributes.aB.array.set(a[q]), h.attributes.aA.needsUpdate = h.attributes.aB.needsUpdate = !0, u.uMix.value = 0, xe.to(u.uMix, { value: 1, duration: B || t ? .01 : 1.9, ease: "power2.inOut", onComplete() { if (Ct = q, Jt = !1, Et && Et !== Ct) { let X = Et; Et = null, Gt(X) } else Et = null } }) } } function st(q) { !Hh[q] || q === R || (R = q, pt(q, !1)) } function gt({ c1: q, c2: B, c3: X, dark: it }) { [["uC1", q], ["uC2", B], ["uC3", X]].forEach(([_t, Kt]) => { let Te = new Ht(Kt); xe.to(u[_t].value, { r: Te.r, g: Te.g, b: Te.b, duration: .9 }) }); let rt = it ? Wn : Di; f.blending = rt, v.material.blending = rt, T.material.blending = rt, f.needsUpdate = v.material.needsUpdate = T.material.needsUpdate = !0, v.material.color.set(q), T.material.color.set(B), ft = [q, B, X], Ot(), C.traverse(_t => { _t.material && _t.material.blending !== void 0 && _t.isPoints === void 0 && (_t.material.blending = rt) }) } function Pt(q, B) { Q.set(q, B) } function It(q) { u.uBeat.value += (q - u.uBeat.value) * .35 } function mt() { let q = window.innerWidth, B = window.innerHeight; n.setSize(q, B, !1), l.aspect = q / B, l.updateProjectionMatrix(), u.uAspect.value = q / B, u.uPx.value = n.getPixelRatio(), pt(R, !0) } let zt = 0, Lt = performance.now(); function jt(q) { zt = requestAnimationFrame(jt); let B = Math.min(.05, (q - Lt) / 1e3); if (Lt = q, M += t ? 0 : B, u.uTime.value = M, J.lerp(Q, .08), nt.on) { P.forEach((rt, _t) => { rt.rotation.y += B * (.5 + _t * .12), rt.rotation.x += B * .2 }); let X = Rt.getPoint(Math.min(1, Math.max(0, nt.t))), it = Nt.getPoint(Math.min(1, Math.max(0, nt.t))); l.position.set(X.x + J.x * .25, X.y + J.y * .12 + Math.sin(M * .8) * .04, X.z), l.lookAt(it), n.render(o, l); return } u.uMouse.value.set(Q.x > 5 ? 9 : J.x, Q.x > 5 ? 9 : J.y), c.rotation.y = M * .09 * V + K + J.x * .25, c.rotation.x = -J.y * .14 + Math.sin(M * .2) * .04 * V, E.rotation.y = -M * .05, l.position.x = J.x * .35, l.position.y = J.y * .2, l.lookAt(0, 0, 0), n.render(o, l) } mt(), pt("home", !0), zt = requestAnimationFrame(jt); let N = () => { document.hidden ? cancelAnimationFrame(zt) : (Lt = performance.now(), zt = requestAnimationFrame(jt)) }; return document.addEventListener("visibilitychange", N), { setSection: st, setTheme: gt, setPointer: Pt, setBeat: It, resize: mt, tourStart: yt, tourGoto: L, tourExit: qt, tourStops: Zt.length, get touring() { return nt.on }, destroy() { cancelAnimationFrame(zt), document.removeEventListener("visibilitychange", N), n.dispose() } } } function Eb(i) { let t = 0; for (let e of i) t = t * 31 + e.charCodeAt(0) >>> 0; return () => (t = t * 1664525 + 1013904223 >>> 0) / 4294967296 } function ys(i, t, e, n, s, r) { i.beginPath(), i.moveTo(t + r, e), i.arcTo(t + n, e, t + n, e + s, r), i.arcTo(t + n, e + s, t, e + s, r), i.arcTo(t, e + s, t, e, r), i.arcTo(t, e, t + n, e, r), i.closePath() } function Dn(i, t, e, n, s, r = .5) { let a = i.createRadialGradient(t, e, 0, t, e, n); a.addColorStop(0, s + Math.round(r * 255).toString(16).padStart(2, "0")), a.addColorStop(1, s + "00"), i.fillStyle = a, i.fillRect(t - n, e - n, n * 2, n * 2) } var Zf = { docs(i, [t, e], n) { for (let s = 0; s < 3; s++) { i.save(), i.translate(400, 520), i.rotate(-.2 + s * .2), i.translate(-170, -230 + s * 20), ys(i, 0, 0, 340, 440, 22), i.fillStyle = `rgba(255,255,255,${.08 + s * .05})`, i.fill(), i.strokeStyle = t + "99", i.lineWidth = 2, i.stroke(); for (let r = 0; r < 9; r++)i.fillStyle = r === 3 && s === 2 ? e : "rgba(255,255,255,.28)", i.fillRect(34, 46 + r * 38, r % 3 === 2 ? 170 : 270, 10); i.restore() } i.lineWidth = 12, i.strokeStyle = e, i.beginPath(), i.arc(520, 640, 86, 0, 7), i.stroke(), i.lineCap = "round", i.beginPath(), i.moveTo(582, 702), i.lineTo(660, 780), i.stroke(), Dn(i, 520, 640, 160, e, .35) }, pearls(i, [t, e], n) { i.strokeStyle = "rgba(255,255,255,.25)", i.lineWidth = 3, i.beginPath(), i.moveTo(60, 700), i.bezierCurveTo(240, 360, 560, 360, 740, 700), i.stroke(); for (let s = 0; s < 9; s++) { let r = s / 8, a = (1 - r) ** 3 * 60 + 3 * (1 - r) ** 2 * r * 240 + 3 * (1 - r) * r * r * 560 + r ** 3 * 740, o = (1 - r) ** 3 * 700 + 3 * (1 - r) ** 2 * r * 360 + 3 * (1 - r) * r * r * 360 + r ** 3 * 700, l = 34 + Math.sin(r * Math.PI) * 30, c = i.createRadialGradient(a - l * .35, o - l * .35, l * .1, a, o, l); c.addColorStop(0, "#fff"), c.addColorStop(.5, s % 2 ? t : e), c.addColorStop(1, "#00000066"), i.fillStyle = c, i.beginPath(), i.arc(a, o, l, 0, 7), i.fill(), Dn(i, a, o, l * 2.2, s % 2 ? t : e, .18) } }, bars(i, [t, e], n) { i.strokeStyle = "rgba(255,255,255,.12)", i.lineWidth = 1; for (let r = 0; r < 6; r++)i.beginPath(), i.moveTo(90, 330 + r * 90), i.lineTo(710, 330 + r * 90), i.stroke(); let s = []; for (let r = 0; r < 7; r++) { let a = 80 + n() * 240, o = 110 + r * 85, l = i.createLinearGradient(0, 780 - a, 0, 780); l.addColorStop(0, t), l.addColorStop(1, t + "22"), i.fillStyle = l, ys(i, o, 780 - a, 48, a, 10), i.fill(), s.push([o + 24, 700 - n() * 300]) } i.strokeStyle = e, i.lineWidth = 6, i.lineJoin = "round", i.beginPath(), s.forEach(([r, a], o) => o ? i.lineTo(r, a) : i.moveTo(r, a)), i.stroke(), s.forEach(([r, a]) => { i.fillStyle = "#fff", i.beginPath(), i.arc(r, a, 9, 0, 7), i.fill() }), Dn(i, 400, 520, 320, e, .18) }, pulse(i, [t, e], n) { for (let s = 1; s < 5; s++)i.strokeStyle = `rgba(255,255,255,${.14 - s * .025})`, i.lineWidth = 2, i.beginPath(), i.arc(400, 520, s * 100, 0, 7), i.stroke(); i.strokeStyle = t, i.lineWidth = 8, i.lineJoin = "round", i.lineCap = "round", i.beginPath(), i.moveTo(40, 520), [[200, 520], [250, 520], [290, 400], [340, 680], [390, 330], [440, 560], [480, 520], [600, 520], [640, 470], [680, 520], [760, 520]].forEach(([s, r]) => i.lineTo(s, r)), i.stroke(), Dn(i, 390, 330, 200, t, .4), i.fillStyle = e, ys(i, 360, 760, 80, 24, 6), i.fill(), ys(i, 388, 732, 24, 80, 6), i.fill() }, radar(i, [t, e], n) { for (let r = 1; r < 5; r++)i.strokeStyle = `rgba(255,255,255,${.22 - r * .04})`, i.lineWidth = 2, i.beginPath(), i.arc(400, 520, r * 85, 0, 7), i.stroke(); i.strokeStyle = "rgba(255,255,255,.18)", i.beginPath(), i.moveTo(400, 150), i.lineTo(400, 890), i.moveTo(30, 520), i.lineTo(770, 520), i.stroke(); let s = i.createLinearGradient(400, 520, 700, 300); s.addColorStop(0, t + "88"), s.addColorStop(1, t + "00"), i.fillStyle = s, i.beginPath(), i.moveTo(400, 520), i.arc(400, 520, 340, -1.1, -.35), i.closePath(), i.fill(); for (let r = 0; r < 9; r++) { let a = n() * 6.28, o = 60 + n() * 280; Dn(i, 400 + Math.cos(a) * o, 520 + Math.sin(a) * o, 36, e, .6), i.fillStyle = "#fff", i.beginPath(), i.arc(400 + Math.cos(a) * o, 520 + Math.sin(a) * o, 6, 0, 7), i.fill() } }, chat(i, [t, e], n) { [[90, 330, 380, !1], [330, 440, 380, !0], [90, 550, 300, !1], [330, 660, 380, !0], [90, 770, 200, !1]].forEach(([r, a, o, l], c) => { ys(i, r, a, o, 76, 30), i.fillStyle = l ? t : "rgba(255,255,255,.12)", i.fill(), i.fillStyle = l ? "rgba(0,0,0,.45)" : "rgba(255,255,255,.5)", i.fillRect(r + 28, a + 30, o - 90 - c % 2 * 50, 12) }), [0, 1, 2].forEach(r => { i.fillStyle = e, i.beginPath(), i.arc(130 + r * 34, 840, 9, 0, 7), i.fill() }), Dn(i, 520, 500, 280, t, .2) }, nodes(i, [t, e], n) { let s = []; for (let r = 0; r < 38; r++)s.push([90 + n() * 620, 230 + n() * 640, 4 + n() * 9]); i.lineWidth = 1.5, s.forEach((r, a) => { s.forEach((o, l) => { l > a && Math.hypot(r[0] - o[0], r[1] - o[1]) < 190 && (i.strokeStyle = "rgba(255,255,255,.2)", i.beginPath(), i.moveTo(r[0], r[1]), i.lineTo(o[0], o[1]), i.stroke()) }) }), i.strokeStyle = e, i.lineWidth = 5, i.beginPath(), [0, 7, 15, 22, 30].forEach((r, a) => a ? i.lineTo(s[r][0], s[r][1]) : i.moveTo(s[r][0], s[r][1])), i.stroke(), s.forEach(([r, a, o], l) => { Dn(i, r, a, o * 4, l % 5 ? t : e, .35), i.fillStyle = l % 5 ? "#fff" : e, i.beginPath(), i.arc(r, a, o, 0, 7), i.fill() }) }, voice(i, [t, e], n) { for (let s = 1; s < 5; s++)i.strokeStyle = `rgba(255,255,255,${.16 - s * .03})`, i.lineWidth = 2, i.beginPath(), i.arc(400, 520, s * 95, 0, 7), i.stroke(); for (let s = 0; s < 19; s++) { let r = 100 + s * 33, a = 50 + Math.abs(Math.sin(s * .55)) * 190 + n() * 70, o = i.createLinearGradient(0, 520 - a / 2, 0, 520 + a / 2); o.addColorStop(0, s % 3 ? t : e), o.addColorStop(1, (s % 3 ? t : e) + "33"), i.fillStyle = o, ys(i, r, 470 - a / 2, 18, a, 9), i.fill() } i.strokeStyle = e, i.lineWidth = 10, i.lineCap = "round", ys(i, 362, 690, 76, 128, 38), i.stroke(), i.beginPath(), i.arc(400, 790, 82, .15 * Math.PI, .85 * Math.PI), i.stroke(), i.beginPath(), i.moveTo(400, 872), i.lineTo(400, 910), i.stroke(), Dn(i, 400, 470, 280, t, .3) }, vase(i, [t, e], n) { let s = (r, a, o, l) => { i.save(), i.translate(r, a), i.scale(o, o), i.beginPath(), i.moveTo(-40, -330), i.lineTo(40, -330), i.bezierCurveTo(40, -250, 150, -200, 150, -60), i.bezierCurveTo(150, 60, 70, 110, 70, 140), i.lineTo(-70, 140), i.bezierCurveTo(-70, 110, -150, 60, -150, -60), i.bezierCurveTo(-150, -200, -40, -250, -40, -330), i.closePath(); let c = i.createLinearGradient(-150, 0, 150, 0); c.addColorStop(0, l + "aa"), c.addColorStop(.35, "#ffffffcc"), c.addColorStop(.6, l), c.addColorStop(1, "#00000088"), i.fillStyle = c, i.fill(), i.strokeStyle = "rgba(0,0,0,.25)", i.lineWidth = 3; for (let h = 0; h < 4; h++)i.beginPath(), i.ellipse(0, -80 + h * 36, 140 - h * 10, 14, 0, 0, 7), i.stroke(); i.restore() }; i.fillStyle = "rgba(0,0,0,.35)", i.beginPath(), i.ellipse(400, 870, 260, 34, 0, 0, 7), i.fill(), s(280, 790, 1, t), s(560, 810, .62, e), Dn(i, 400, 480, 300, t, .2) } }; function bo(i) { let t = document.createElement("canvas"); t.width = 800, t.height = 1e3; let e = t.getContext && t.getContext("2d"); if (!e) return ""; let n = Eb(i.id), [s, r, a] = i.palette, o = e.createLinearGradient(0, 0, 800, 1e3); o.addColorStop(0, a), o.addColorStop(1, "#05060b"), e.fillStyle = o, e.fillRect(0, 0, 800, 1e3), Dn(e, 640, 160, 420, s, .35), Dn(e, 120, 900, 380, r, .22), e.strokeStyle = "rgba(255,255,255,.05)", e.lineWidth = 1; for (let l = 0; l < 800; l += 50)e.beginPath(), e.moveTo(l, 0), e.lineTo(l, 1e3), e.stroke(); for (let l = 0; l < 1e3; l += 50)e.beginPath(), e.moveTo(0, l), e.lineTo(800, l), e.stroke(); e.font = "800 360px Syne, Arial Black, sans-serif", e.lineWidth = 2, e.strokeStyle = "rgba(255,255,255,.12)", e.strokeText(String(i.index).padStart(2, "0"), 40, 330), (Zf[i.motif] || Zf.nodes)(e, [s, r], n), e.fillStyle = "rgba(255,255,255,.04)"; for (let l = 0; l < 900; l++)e.fillRect(n() * 800, n() * 1e3, 2, 2); return e.font = '600 22px "Space Grotesk", Arial, sans-serif', e.fillStyle = "rgba(255,255,255,.75)", e.fillText((i.category === "ai" ? "AI \xB7 LLM" : "WEB \xB7 FULL-STACK") + "  /  " + i.year, 48, 66), t.toDataURL("image/jpeg", .86) } var Tb = new Set("a an and are as at be by can did do does for from has have how i in is it its me my of on or she her he his that the their them this to was what when where which who why will with you your about tell show give iman umar please".split(" ")), Ab = { intern: "internship", interned: "internship", jobs: "experience", job: "experience", work: "experience", uni: "education", university: "education", college: "education", degree: "education", mail: "email", hire: "available", hiring: "available", reach: "contact", phone: "contact", skill: "skills", stack: "skills", tech: "skills", technologies: "skills", languages: "skills", built: "project", build: "project", made: "project", apps: "project", app: "project", ecommerce: "ceramichub", shop: "ceramichub", store: "ceramichub", finance: "finwise", budget: "finwise", money: "finwise", medical: "mediguide", health: "mediguide", symptom: "mediguide", symptoms: "mediguide", research: "marketmind", market: "marketmind", support: "supportpearlz", pearl: "supportpearlz", docs: "minddesk", documents: "minddesk", excel: "minddesk", pdf: "ragagent", pdfs: "ragagent", docmind: "ragagent", voice: "voiceagent", speech: "voiceagent", speak: "voiceagent", talk: "voiceagent", chatgpt: "customai", chat: "customai", resume: "cv" }; function Gr(i) { return (i || "").toLowerCase().replace(/[^a-z0-9+#\s]/g, " ").split(/\s+/).filter(Boolean).map(t => Ab[t] || t).map(t => t.length > 4 ? t.replace(/(ing|ed|es|s)$/, "") : t).filter(t => t && !Tb.has(t)) } var So = class { constructor(t) { this.docs = t, this.tokens = t.map(e => Gr(`${e.title} ${e.title} ${e.tags} ${e.text}`)), this.avg = this.tokens.reduce((e, n) => e + n.length, 0) / Math.max(1, t.length), this.df = new Map, this.tokens.forEach(e => new Set(e).forEach(n => this.df.set(n, (this.df.get(n) || 0) + 1))) } search(t, e = 3) { let n = Gr(t), s = this.docs.length, r = 1.4, a = .75; return this.docs.map((l, c) => { let h = new Map; this.tokens[c].forEach(u => h.set(u, (h.get(u) || 0) + 1)); let d = 0; return n.forEach(u => { let f = h.get(u) || 0; if (!f) return; let m = Math.log(1 + (s - (this.df.get(u) || 0) + .5) / ((this.df.get(u) || 0) + .5)); d += m * (f * (r + 1) / (f + r * (1 - a + a * this.tokens[c].length / this.avg))) }), { doc: l, score: d } }).filter(l => l.score > 0).sort((l, c) => c.score - l.score).slice(0, e) } }; function Jf(i, t) { let e = i.search(t, 3); if (!e.length || e[0].score < .6) return { text: "I only know what is on this page \u2014 Iman's projects, skills, internships and how to reach her. Try asking about one of those, or type 'help'.", sources: [] }; let n = e[0].doc, s = e.slice(1).filter(r => r.score > e[0].score * .45).map(r => r.doc.title); return { text: n.text, sources: [n.title, ...s] } } var Cb = i => `You are the portfolio assistant for ${i}. Answer ONLY using the CONTEXT passages. If the answer is not in the context, say you do not know and suggest contacting ${i}. Be concise (under 120 words), friendly and factual. Never invent employers, dates, links or skills.`; async function jf(i, t = fetch) { try { let e = await t("https://api.openai.com/v1/models", { headers: { Authorization: `Bearer ${i}` } }); return e.ok ? { ok: !0 } : e.status === 401 ? { ok: !1, error: "OpenAI rejected this key." } : { ok: !1, error: `OpenAI answered with status ${e.status}.` } } catch { return { ok: !1, error: "Could not reach OpenAI (network or browser block)." } } } async function Kf({ key: i, model: t, name: e, question: n, passages: s, history: r = [], onToken: a, signal: o, endpoint: l = "", fetchImpl: c = fetch }) {
		var p, y, x; let h = s.map((v, A) => `[${A + 1}] ${v.title}: ${v.text}`).join(`

`), d = [{
				role: "system", content: `${Cb(e)}

CONTEXT:
${h}`
			}, ...r.slice(-6), { role: "user", content: n }], u = l ? await c(l, { method: "POST", signal: o, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ question: n, passages: s.map(v => ({ title: v.title, text: String(v.text).slice(0, 1500) })), history: r.slice(-6) }) }) : await c("https://api.openai.com/v1/chat/completions", { method: "POST", signal: o, headers: { "Content-Type": "application/json", Authorization: `Bearer ${i}` }, body: JSON.stringify({ model: t, messages: d, stream: !0, temperature: .3, max_tokens: 400 }) }); if (!u.ok) { let v = { 401: "The API key was rejected.", 403: "This site is not allowed to use the hosted AI.", 429: l ? "The hosted AI is busy \u2014 please try again in a minute." : "Rate limit or quota reached on this key." }; throw new Error(v[u.status] || `OpenAI error (status ${u.status}).`) } let f = u.body.getReader(), m = new TextDecoder, _ = "", g = ""; for (; ;) {
				let { value: v, done: A } = await f.read(); if (A) break; _ += m.decode(v, { stream: !0 }); let T = _.split(`
`); _ = T.pop(); for (let E of T) { let C = E.trim(); if (!C.startsWith("data:")) continue; let b = C.slice(5).trim(); if (b === "[DONE]") return g; try { let S = (x = (y = (p = JSON.parse(b).choices) == null ? void 0 : p[0]) == null ? void 0 : y.delta) == null ? void 0 : x.content; S && (g += S, a == null || a(S)) } catch { } }
			} return g
	} var Qf = { home: "home", about: "about", skills: "skills", stack: "skills", work: "work", projects: "work", portfolio: "work", github: "code", code: "code", lab: "lab", console: "lab", match: "match", "job match": "match", journey: "journey", experience: "journey", education: "journey", timeline: "journey", contact: "contact", journal: "journal", blog: "journal", testimonials: "proof", certificates: "proof", certs: "proof" }, Rb = /\b(open|show|go|goto|take|scroll|jump|navigate|launch|display|see|view|bring|visit)\b/, Pb = { ceramic: "ceramichub", "ceramic hub": "ceramichub", pearlz: "supportpearlz", "support pearlz": "supportpearlz", docmind: "ragagent", "rag agent": "ragagent", "custom ai": "customai", "custom chat": "customai", "fin wise": "finwise", "medi guide": "mediguide", "market mind": "marketmind", "mind desk": "minddesk", "voice agent": "voiceagent", "voice ai": "voiceagent", "voice assistant": "voiceagent" }, Mo = i => i.toLowerCase().replace(/[^a-z0-9]/g, ""); function Ib(i, t) { let e = Mo(i); for (let n of t) if (e.includes(Mo(n.id)) || e.includes(Mo(n.title))) return n.id; for (let [n, s] of Object.entries(Pb)) if (e.includes(Mo(n)) && t.some(r => r.id === s)) return s; return null } function tp(i, t = []) { let e = (i || "").toLowerCase().trim(); if (!e) return null; let n = s => s.test(e); if (n(/\b(theme|mode|switch|change|set|use)\b/)) { if (n(/\b(dark|night|nocturne)\b/)) return { type: "theme", name: "nocturne" }; if (n(/\b(light|pearl|white)\b/)) return { type: "theme", name: "pearl" }; if (n(/\b(marigold|aubergine|gold|yellow)\b/)) return { type: "theme", name: "marigold" } } if (n(/\b(urdu)\b|اردو/) && n(/\b(switch|change|translate|language|show|in|use)\b|اردو/)) return { type: "lang", code: "ur" }; if (n(/\benglish\b/) && n(/\b(switch|change|translate|language|back|use)\b/)) return { type: "lang", code: "en" }; if (n(/\b(download|get|send|grab)\b.*\b(cv|resume)\b/) || /^(cv|resume)$/.test(e)) return { type: "cv" }; if (n(/\b(tour|walkthrough|walk through|ghar)\b/) || n(/\bhouse\b.*\b(tour|visit|walk)\b/) || n(/\b(take|start|begin).*\bhouse\b/)) return { type: "tour" }; if (n(/\b(music|sound|audio|ambient)\b/) && n(/\b(play|start|stop|mute|unmute|toggle|on|off|enable|disable|turn)\b/)) return { type: "sound" }; if (n(/\b(voice|microphone|mic)\b/) && n(/\b(use|start|enable|turn|talk|listen|mode)\b/)) return { type: "voice" }; if (n(/\bjob match\b/) || n(/\b(am i|are you|is she|check).*\b(fit|match)\b/)) return { type: "goto", id: "match" }; if (Rb.test(e)) { let s = Ib(e, t); if (s) return { type: "project", id: s }; let a = Object.keys(Qf).sort((o, l) => l.length - o.length).find(o => new RegExp(`\\b${o}\\b`).test(e)); if (a) return { type: "goto", id: Qf[a] } } return null } function Gh() { return { stt: !!(typeof window != "undefined" && (window.SpeechRecognition || window.webkitSpeechRecognition)), tts: typeof window != "undefined" && "speechSynthesis" in window && typeof window.SpeechSynthesisUtterance == "function" } } function ep({ lang: i = "en-US", onText: t, onEnd: e, onError: n }) { let s = window.SpeechRecognition || window.webkitSpeechRecognition; if (!s) return n == null || n("Speech recognition is not supported in this browser (try Chrome or Edge)."), () => { }; let r = new s; r.lang = i, r.interimResults = !1, r.maxAlternatives = 1, r.onresult = a => t == null ? void 0 : t(a.results[0][0].transcript), r.onerror = a => n == null ? void 0 : n(a.error === "not-allowed" ? "Microphone permission was denied." : `Voice error: ${a.error}`), r.onend = () => e == null ? void 0 : e(); try { r.start() } catch { n == null || n("Could not start the microphone.") } return () => { try { r.stop() } catch { } } } function np(i, t = "en-US") { if (!Gh().tts) return; window.speechSynthesis.cancel(); let e = new window.SpeechSynthesisUtterance(String(i).slice(0, 600)); e.lang = t, e.rate = 1.02, window.speechSynthesis.speak(e) } var ip = () => { var i; try { (i = window.speechSynthesis) == null || i.cancel() } catch { } }; function sp({ config: i, projects: t, knowledge: e, suggestions: n, themes: s, setTheme: r, openProject: a, onIntent: o, getLang: l, reduced: c }) { let h = document.getElementById("term"); if (!h) return null; let d = h.querySelector("#term-out"), u = h.querySelector("#term-form"), f = h.querySelector("#term-in"), m = document.getElementById("term-mode"), _ = document.getElementById("term-chips"), g = h.querySelector("#term-mic"), p = h.querySelector("#term-speak"); if (!d || !u || !f) return null; let y = new So(e), x = !!i.aiEndpoint, v = Gh(), A = "", T = "boot", E = !1, C = !0, b = null, S = !1, P = null, H = [], z = [], W = -1, U = { boot: "LOCKED", local: "LOCAL MODE", gpt: "GPT MODE", hosted: "HOSTED AI" }, I = () => (l == null ? void 0 : l()) === "ur" ? "ur-PK" : "en-US", G = () => { d.scrollTop = d.scrollHeight }; function D(nt, yt = "") { let L = document.createElement("div"); return L.className = `ln ${yt}`.trim(), L.textContent = nt, d.appendChild(L), G(), L } function tt(nt) { T = nt, m && (m.textContent = U[nt], m.dataset.mode = nt), _ == null || _.querySelectorAll("button").forEach(yt => { yt.disabled = nt === "boot" }) } let j = () => T === "gpt" || T === "hosted"; function dt(nt, yt) { return new Promise(L => { if (c) return nt.textContent = yt, G(), L(); let qt = 0, ft = Math.max(2, Math.round(yt.length / 90)), Ot = setInterval(() => { qt += ft, nt.textContent = yt.slice(0, qt), G(), qt >= yt.length && (clearInterval(Ot), L()) }, 16) }) } function At() { if (x) return D("iman-lab \u25B8 a tiny RAG console about Iman\u2019s work", "dim"), Ut("hosted"); tt("boot"), C = !0, f.type = "password", f.placeholder = "Paste your sk-\u2026 key, or type skip", D("iman-lab \u25B8 a tiny RAG console about Iman\u2019s work", "dim"), D("GPT mode needs your OpenAI API key. It stays in this tab\u2019s memory and is sent only to api.openai.com."), D("Paste the key and press Enter, or type  skip  to use local mode (no key, no network).", "hint") } function Ut(nt) { C = !1, f.type = "text", f.placeholder = "Ask anything, or say \u201Copen MindDesk\u201D\u2026 (type help)", tt(nt), D(nt === "hosted" ? "Hosted AI is on \u2014 no key needed. Answers are written by the model from retrieved notes." : nt === "gpt" ? "GPT mode on. Answers are written by the model from retrieved notes." : "Local mode on. Answers are matched from curated notes (no AI model involved).", "ok"), D("Try: \u201CWhat did Iman build?\u201D  \xB7  \u201Copen MarketMind\u201D  \xB7  \u201Cswitch to dark mode\u201D  \xB7  help for commands.", "hint") } async function Z(nt) { if (nt.toLowerCase() === "skip") return Ut("local"); if (!/^sk-/.test(nt)) { D("That does not look like an OpenAI key (it starts with sk-). Try again or type skip.", "err"); return } E = !0; let yt = D("Verifying key with OpenAI\u2026", "dim"), L = await jf(nt); E = !1, yt.remove(), L.ok ? (A = nt, Ut("gpt")) : D(`${L.error} Try again or type skip.`, "err") } let et = ["help          show this list", "projects      list all projects", "open <id>     open a project (or say \u201Copen MindDesk\u201D)", "skills \xB7 about \xB7 contact   quick answers", "cv            download the CV", `theme <${Object.keys(s).join("|")}>   switch theme`, "tour          start the 3D house tour", "mode          show the current mode", "key           use your own OpenAI key", "forget        remove the key from memory", "clear         clear the screen"]; async function at(nt) { let [yt, ...L] = nt.split(/\s+/), qt = L.join(" ").toLowerCase(); switch (yt.toLowerCase()) { case "help": return et.forEach(ft => D(ft, "dim")), !0; case "clear": return d.textContent = "", !0; case "mode": return D(`Current mode: ${U[T]}${T === "gpt" ? ` (${i.openaiModel})` : ""}`, "ok"), !0; case "key": return A = "", At(), x && (C = !0, f.type = "password", D("Paste your own sk-\u2026 key (or skip to stay on hosted AI).", "hint")), !0; case "forget": return A = "", z.length = 0, D("Key removed from memory.", "ok"), T === "gpt" && tt("local"), !0; case "projects": return t.forEach(ft => D(`${ft.id.padEnd(14)} ${ft.title} \u2014 ${ft.kicker}`)), D("Say \u201Copen <name>\u201D to view one.", "hint"), !0; case "open": { let ft = t.find(Ot => Ot.id === qt); return ft ? (a(ft.id), D(`Opening ${ft.title}\u2026`, "ok"), !0) : !1 } case "theme": return s[qt] ? (r(qt), D(`Theme \u2192 ${qt}`, "ok")) : D(`Choose: ${Object.keys(s).join(", ")}`, "err"), !0; case "cv": { let ft = document.createElement("a"); return ft.href = i.cv, ft.download = "", document.body.appendChild(ft), ft.click(), ft.remove(), D("Downloading CV\u2026", "ok"), !0 } case "tour": return o == null || o({ type: "tour" }), D("Starting the house tour\u2026", "ok"), !0; case "skills": case "about": case "contact": return await vt(yt), !0; default: return !1 } } async function lt(nt, yt, L, qt) { if (!j()) throw new Error("AI mode is off. Add a key (type key) or enable hosted AI."); return Kf({ key: A, model: i.openaiModel, name: i.name, question: nt, passages: yt, history: z, onToken: L, signal: qt, endpoint: T === "hosted" ? i.aiEndpoint : "" }) } async function vt(nt) { E = !0; let yt = y.search(nt, 4), L = D("", "ai"), qt = ""; try { if (j() && yt.length) b = new AbortController, L.classList.add("stream"), qt = await lt(nt, yt.map(ft => ft.doc), ft => { L.textContent += ft, G() }, b.signal), z.push({ role: "user", content: nt }, { role: "assistant", content: qt }), L.classList.remove("stream"), D("\u21B3 sources: " + yt.map(ft => ft.doc.title).join(" \xB7 "), "src"); else { let ft = Jf(y, nt); qt = ft.text, await dt(L, ft.text), ft.sources.length && D("\u21B3 sources: " + ft.sources.join(" \xB7 "), "src") } S && np(qt, I()) } catch (ft) { L.classList.remove("stream"), L.textContent || L.remove(), D(`${ft.message || "Request failed."} Type  key  to try another key, or  forget  to go local.`, "err") } E = !1 } async function Rt(nt) { let yt = nt.trim(); if (!yt || E) return; if (C) { D(yt.startsWith("sk-") ? "\u25B8 \u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" : `\u25B8 ${yt}`, "me"), await Z(yt); return } if (D(`\u25B8 ${yt}`, "me"), H.unshift(yt), W = -1, await at(yt)) return; let L = tp(yt, t); if (L && o) { let qt = o(L); D(qt ? `\u2192 ${qt}` : "\u2192 done", "ok"); return } await vt(yt) } function Nt(nt) { S = nt, nt || ip(), p && (p.setAttribute("aria-pressed", String(nt)), p.classList.toggle("on", nt)) } function Zt() { if (P) { P(), P = null, g == null || g.classList.remove("on"); return } if (C) { D("Choose a mode first (paste a key or type skip).", "err"); return } g == null || g.classList.add("on"), D("Listening\u2026", "dim"), P = ep({ lang: I(), onText: nt => { P = null, g == null || g.classList.remove("on"), Nt(!0), Rt(nt) }, onEnd: () => { P = null, g == null || g.classList.remove("on") }, onError: nt => { P = null, g == null || g.classList.remove("on"), D(nt, "err") } }) } return g && (v.stt ? g.addEventListener("click", Zt) : g.hidden = !0), p && (v.tts ? p.addEventListener("click", () => Nt(!S)) : p.hidden = !0), u.addEventListener("submit", nt => { nt.preventDefault(); let yt = f.value; f.value = "", Rt(yt) }), f.addEventListener("keydown", nt => { C || !H.length || (nt.key === "ArrowUp" && (W = Math.min(W + 1, H.length - 1), f.value = H[W], nt.preventDefault()), nt.key === "ArrowDown" && (W = Math.max(W - 1, -1), f.value = W < 0 ? "" : H[W], nt.preventDefault())) }), _ && n.forEach(nt => { let yt = document.createElement("button"); yt.type = "button", yt.textContent = nt, yt.addEventListener("click", () => Rt(nt)), _.appendChild(yt) }), h.addEventListener("click", nt => { nt.target.closest("button") || f.focus({ preventScroll: !0 }) }), At(), { run: Rt, ask: lt, get mode() { return T }, get ready() { return !C }, aiOn: j, micToggle: Zt, say: nt => D(nt, "dim") } } var wo = { en: { nav_home: "Home", nav_about: "About", nav_work: "Work", nav_lab: "Lab", nav_match: "Match", nav_contact: "Contact", hero_eyebrow: "Frontend \xB7 AI apps \xB7 Creative code", hero_lead: "I build interfaces that <em>think</em> \u2014 responsive websites, AI assistants and the motion that ties them together.", hero_role: "> currently:", cta_work: "View my work \u2193", cta_lab: "Enter the Lab \u2726", hero_avail: "Open to work \xB7 2026", hero_loc: "Gujranwala, Pakistan \xB7 UTC+5", role_label: "I'm a\u2026", role_recruiter: "Recruiter", role_client: "Client", role_student: "Student", about_eyebrow: "About", about_h2: "Design-minded developer building things that feel as good as they work.", about_p1: "I am a recent BS Information Technology graduate from Gujranwala who builds responsive, user-friendly websites and AI applications. I work across the front end and back end \u2014 HTML, CSS, JavaScript, PHP and MySQL \u2014 and I have spent this year turning ideas into LLM-powered tools: document assistants, finance and health guides and a research agent.", about_p2: "I learn fast, lead teams well and care about the small details: loading states, motion that explains, copy that is clear. I am looking for a junior web developer role where I can contribute to real projects from day one.", f_edu: "Education", f_edu_v: "BS Information Technology, 2022\u20132026", f_exp: "Experience", f_learn: "Learning", f_based: "Based in", f_based_v: "Gujranwala, Pakistan", btn_cv: "Download CV \u2193", btn_connect: "Let\u2019s connect \u2192", skills_eyebrow: "Capabilities", skills_h2a: "What I", skills_h2b: "make", stack_h: "Stack I work with", work_eyebrow: "Selected work \xB7 9 projects", work_h2a: "Selected", work_h2b: "work", f_all: "All", f_ai: "AI & LLM", f_web: "Web", code_eyebrow: "Code", code_h2a: "Live from", code_h2b: "GitHub", code_sub: "My latest repositories and activity, fetched live from GitHub.", lab_eyebrow: "AI Lab", lab_h2: "Lab", lab_p1: "A tiny retrieval-augmented console that knows my work. It asks for your OpenAI key first \u2014 paste one for GPT answers grounded in my notes, or type skip for local mode, which needs no key and no network.", lab_p2: "Your key stays in this tab\u2019s memory and is sent only to api.openai.com. Type forget to remove it.", match_eyebrow: "Job Match", match_h2a: "Am I a", match_h2b: "fit?", match_p: "Paste a job description. The site shows which of my skills and projects match, what I have not learned yet, and a tailored pitch \u2014 honestly.", match_label: "Job description", match_ph: "Paste the job description here\u2026", match_btn: "Analyse fit", match_score: "Fit score", match_have: "Skills I have", match_gap: "Not yet in my stack", match_proj: "Best matching projects", match_pitch: "Tailored pitch", match_copy: "Copy pitch", journey_eyebrow: "Education & experience", journey_h2a: "The", journey_h2b: "journey", proof_eyebrow: "Proof", proof_h2a: "Kind", proof_h2b: "words", journal_eyebrow: "Journal", journal_h2a: "Notes &", journal_h2b: "writing", contact_eyebrow: "Contact", contact_h2a: "Let\u2019s build something", contact_h2b: "alive.", l_name: "Name", l_email: "Email", l_type: "Project type", l_msg: "Message", send: "Send message \u2192", note_form: "Without a form service configured, this opens your email app with the message pre-filled.", foot_status: "Open to work", pal_ph: "Type a command or search\u2026", pal_hint: "\u2191\u2193 to move \xB7 Enter to run \xB7 Esc to close", tour_exit: "Exit tour", tour_prev: "\u2190 Back", tour_next: "Next \u2192", tour_open: "Open section" }, ur: { nav_home: "\u06C1\u0648\u0645", nav_about: "\u062A\u0639\u0627\u0631\u0641", nav_work: "\u06A9\u0627\u0645", nav_lab: "\u0644\u06CC\u0628", nav_match: "\u062C\u0627\u0628 \u0645\u06CC\u0686", nav_contact: "\u0631\u0627\u0628\u0637\u06C1", hero_eyebrow: "\u0641\u0631\u0646\u0679 \u0627\u06CC\u0646\u0688 \xB7 \u0627\u06D2 \u0622\u0626\u06CC \u0627\u06CC\u067E\u0633 \xB7 \u06A9\u0631\u06CC\u0626\u06CC\u0679\u0648 \u06A9\u0648\u0688", hero_lead: "\u0645\u06CC\u06BA \u0627\u06CC\u0633\u06D2 \u0627\u0646\u0679\u0631\u0641\u06CC\u0633 \u0628\u0646\u0627\u062A\u06CC \u06C1\u0648\u06BA \u062C\u0648 <em>\u0633\u0648\u0686\u062A\u06D2</em> \u06C1\u06CC\u06BA \u2014 \u0631\u06CC\u0633\u067E\u0627\u0646\u0633\u0648 \u0648\u06CC\u0628 \u0633\u0627\u0626\u0679\u0633\u060C \u0627\u06D2 \u0622\u0626\u06CC \u0627\u0633\u0633\u0679\u0646\u0679\u0633 \u0627\u0648\u0631 \u0648\u06C1 \u0645\u0648\u0634\u0646 \u062C\u0648 \u0633\u0628 \u06A9\u0648 \u062C\u0648\u0691\u062A\u06CC \u06C1\u06D2\u06D4", hero_role: "> \u0641\u06CC \u0627\u0644\u062D\u0627\u0644:", cta_work: "\u0645\u06CC\u0631\u0627 \u06A9\u0627\u0645 \u062F\u06CC\u06A9\u06BE\u06CC\u06BA \u2193", cta_lab: "\u0644\u06CC\u0628 \u0645\u06CC\u06BA \u0622\u0626\u06CC\u06BA \u2726", hero_avail: "\u0645\u0644\u0627\u0632\u0645\u062A \u06A9\u06D2 \u0644\u06CC\u06D2 \u062F\u0633\u062A\u06CC\u0627\u0628 \xB7 2026", hero_loc: "\u06AF\u0648\u062C\u0631\u0627\u0646\u0648\u0627\u0644\u06C1\u060C \u067E\u0627\u06A9\u0633\u062A\u0627\u0646", role_label: "\u0645\u06CC\u06BA \u06C1\u0648\u06BA\u2026", role_recruiter: "\u0631\u06CC\u06A9\u0631\u0648\u0679\u0631", role_client: "\u06A9\u0644\u0627\u0626\u0646\u0679", role_student: "\u0637\u0627\u0644\u0628 \u0639\u0644\u0645", about_eyebrow: "\u062A\u0639\u0627\u0631\u0641", about_h2: "\u0688\u06CC\u0632\u0627\u0626\u0646 \u06A9\u0648 \u0633\u0645\u062C\u06BE\u0646\u06D2 \u0648\u0627\u0644\u06CC \u0688\u06CC\u0648\u0644\u067E\u0631\u060C \u062C\u0648 \u0627\u06CC\u0633\u06CC \u0686\u06CC\u0632\u06CC\u06BA \u0628\u0646\u0627\u062A\u06CC \u06C1\u06D2 \u062C\u0648 \u06A9\u0627\u0645 \u0628\u06BE\u06CC \u0627\u0686\u06BE\u0627 \u06A9\u0631\u06CC\u06BA \u0627\u0648\u0631 \u062F\u06CC\u06A9\u06BE\u0646\u06D2 \u0645\u06CC\u06BA \u0628\u06BE\u06CC\u06D4", about_p1: "\u0645\u06CC\u06BA \u06AF\u0648\u062C\u0631\u0627\u0646\u0648\u0627\u0644\u06C1 \u0633\u06D2 \u062D\u0627\u0644 \u06C1\u06CC \u0645\u06CC\u06BA \u0628\u06CC \u0627\u06CC\u0633 \u0627\u0646\u0641\u0627\u0631\u0645\u06CC\u0634\u0646 \u0679\u06CC\u06A9\u0646\u0627\u0644\u0648\u062C\u06CC \u0645\u06A9\u0645\u0644 \u06A9\u0631\u0646\u06D2 \u0648\u0627\u0644\u06CC \u06AF\u0631\u06CC\u062C\u0648\u06CC\u0679 \u06C1\u0648\u06BA \u0627\u0648\u0631 \u0631\u06CC\u0633\u067E\u0627\u0646\u0633\u0648\u060C \u0635\u0627\u0631\u0641 \u062F\u0648\u0633\u062A \u0648\u06CC\u0628 \u0633\u0627\u0626\u0679\u0633 \u0627\u0648\u0631 \u0627\u06D2 \u0622\u0626\u06CC \u0627\u06CC\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646\u0632 \u0628\u0646\u0627\u062A\u06CC \u06C1\u0648\u06BA\u06D4 \u0645\u06CC\u06BA \u0641\u0631\u0646\u0679 \u0627\u06CC\u0646\u0688 \u0627\u0648\u0631 \u0628\u06CC\u06A9 \u0627\u06CC\u0646\u0688 \u062F\u0648\u0646\u0648\u06BA \u067E\u0631 \u06A9\u0627\u0645 \u06A9\u0631\u062A\u06CC \u06C1\u0648\u06BA \u2014 HTML\u060C CSS\u060C JavaScript\u060C PHP \u0627\u0648\u0631 MySQL \u2014 \u0627\u0648\u0631 \u0627\u0633 \u0633\u0627\u0644 \u0627\u06CC\u0644 \u0627\u06CC\u0644 \u0627\u06CC\u0645 \u067E\u0631 \u0645\u0628\u0646\u06CC \u0679\u0648\u0644\u0632 \u0628\u0646\u0627\u0626\u06D2 \u06C1\u06CC\u06BA: \u062F\u0633\u062A\u0627\u0648\u06CC\u0632\u06CC \u0627\u0633\u0633\u0679\u0646\u0679\u0633\u060C \u0645\u0627\u0644\u06CC\u0627\u062A \u0627\u0648\u0631 \u0635\u062D\u062A \u06A9\u06D2 \u0631\u06C1\u0646\u0645\u0627 \u0627\u0648\u0631 \u0627\u06CC\u06A9 \u0631\u06CC\u0633\u0631\u0686 \u0627\u06CC\u062C\u0646\u0679\u06D4", about_p2: "\u0645\u06CC\u06BA \u062C\u0644\u062F\u06CC \u0633\u06CC\u06A9\u06BE\u062A\u06CC \u06C1\u0648\u06BA\u060C \u0679\u06CC\u0645 \u06A9\u06CC \u0642\u06CC\u0627\u062F\u062A \u0627\u0686\u06BE\u06CC \u0637\u0631\u062D \u06A9\u0631\u062A\u06CC \u06C1\u0648\u06BA \u0627\u0648\u0631 \u0686\u06BE\u0648\u0679\u06CC \u062A\u0641\u0635\u06CC\u0644\u0627\u062A \u06A9\u0627 \u062E\u06CC\u0627\u0644 \u0631\u06A9\u06BE\u062A\u06CC \u06C1\u0648\u06BA: \u0644\u0648\u0688\u0646\u06AF \u06A9\u06CC \u062D\u0627\u0644\u062A\u06CC\u06BA\u060C \u0648\u0636\u0627\u062D\u062A \u06A9\u0631\u0646\u06D2 \u0648\u0627\u0644\u06CC \u0645\u0648\u0634\u0646 \u0627\u0648\u0631 \u0648\u0627\u0636\u062D \u0639\u0628\u0627\u0631\u062A\u06D4 \u0645\u06CC\u06BA \u062C\u0648\u0646\u06CC\u0626\u0631 \u0648\u06CC\u0628 \u0688\u06CC\u0648\u0644\u067E\u0631 \u06A9\u06D2 \u06A9\u0631\u062F\u0627\u0631 \u06A9\u06CC \u062A\u0644\u0627\u0634 \u0645\u06CC\u06BA \u06C1\u0648\u06BA \u062C\u06C1\u0627\u06BA \u067E\u06C1\u0644\u06D2 \u062F\u0646 \u0633\u06D2 \u062D\u0642\u06CC\u0642\u06CC \u067E\u0631\u0648\u062C\u06CC\u06A9\u0679\u0633 \u0645\u06CC\u06BA \u062D\u0635\u06C1 \u0688\u0627\u0644 \u0633\u06A9\u0648\u06BA\u06D4", f_edu: "\u062A\u0639\u0644\u06CC\u0645", f_edu_v: "\u0628\u06CC \u0627\u06CC\u0633 \u0627\u0646\u0641\u0627\u0631\u0645\u06CC\u0634\u0646 \u0679\u06CC\u06A9\u0646\u0627\u0644\u0648\u062C\u06CC\u060C 2022\u20132026", f_exp: "\u062A\u062C\u0631\u0628\u06C1", f_learn: "\u0633\u06CC\u06A9\u06BE \u0631\u06C1\u06CC \u06C1\u0648\u06BA", f_based: "\u0645\u0642\u0627\u0645", f_based_v: "\u06AF\u0648\u062C\u0631\u0627\u0646\u0648\u0627\u0644\u06C1\u060C \u067E\u0627\u06A9\u0633\u062A\u0627\u0646", btn_cv: "\u0633\u06CC \u0648\u06CC \u0688\u0627\u0624\u0646 \u0644\u0648\u0688 \u06A9\u0631\u06CC\u06BA \u2193", btn_connect: "\u0631\u0627\u0628\u0637\u06C1 \u06A9\u0631\u06CC\u06BA \u2190", skills_eyebrow: "\u0635\u0644\u0627\u062D\u06CC\u062A\u06CC\u06BA", skills_h2a: "\u0645\u06CC\u06BA \u06A9\u06CC\u0627", skills_h2b: "\u0628\u0646\u0627\u062A\u06CC \u06C1\u0648\u06BA", stack_h: "\u062C\u0646 \u0679\u0648\u0644\u0632 \u067E\u0631 \u06A9\u0627\u0645 \u06A9\u0631\u062A\u06CC \u06C1\u0648\u06BA", work_eyebrow: "\u0645\u0646\u062A\u062E\u0628 \u06A9\u0627\u0645 \xB7 9 \u067E\u0631\u0648\u062C\u06CC\u06A9\u0679\u0633", work_h2a: "\u0645\u0646\u062A\u062E\u0628", work_h2b: "\u06A9\u0627\u0645", f_all: "\u0633\u0628", f_ai: "\u0627\u06D2 \u0622\u0626\u06CC", f_web: "\u0648\u06CC\u0628", code_eyebrow: "\u06A9\u0648\u0688", code_h2a: "\u0628\u0631\u0627\u06C1\u0650 \u0631\u0627\u0633\u062A", code_h2b: "\u06AF\u0650\u0679 \u06C1\u0628 \u0633\u06D2", code_sub: "\u0645\u06CC\u0631\u06CC \u062A\u0627\u0632\u06C1 \u062A\u0631\u06CC\u0646 \u0631\u06CC\u067E\u0648\u0632\u0679\u0631\u06CC\u0632 \u0627\u0648\u0631 \u0633\u0631\u06AF\u0631\u0645\u06CC\u060C \u0628\u0631\u0627\u06C1\u0650 \u0631\u0627\u0633\u062A \u06AF\u0650\u0679 \u06C1\u0628 \u0633\u06D2\u06D4", lab_eyebrow: "\u0627\u06D2 \u0622\u0626\u06CC \u0644\u06CC\u0628", lab_h2: "\u0644\u06CC\u0628", lab_p1: "\u0627\u06CC\u06A9 \u0686\u06BE\u0648\u0679\u0627 \u0631\u06CC\u0679\u0631\u06CC\u0648\u0644 \u067E\u0631 \u0645\u0628\u0646\u06CC \u06A9\u0646\u0633\u0648\u0644 \u062C\u0648 \u0645\u06CC\u0631\u06D2 \u06A9\u0627\u0645 \u06A9\u0648 \u062C\u0627\u0646\u062A\u0627 \u06C1\u06D2\u06D4 \u06CC\u06C1 \u067E\u06C1\u0644\u06D2 \u0627\u0648\u067E\u0646 \u0627\u06D2 \u0622\u0626\u06CC \u06A9\u06CC \u06A9\u0644\u06CC\u062F \u0645\u0627\u0646\u06AF\u062A\u0627 \u06C1\u06D2 \u2014 \u06A9\u0644\u06CC\u062F \u0688\u0627\u0644\u06CC\u06BA \u062A\u0648 \u062C\u06CC \u067E\u06CC \u0679\u06CC \u062C\u0648\u0627\u0628\u0627\u062A \u0645\u0644\u06CC\u06BA \u06AF\u06D2\u060C \u06CC\u0627 skip \u0644\u06A9\u06BE\u06CC\u06BA \u062A\u0648 \u0644\u0648\u06A9\u0644 \u0645\u0648\u0688 \u0645\u06CC\u06BA \u0628\u063A\u06CC\u0631 \u06A9\u0644\u06CC\u062F \u0627\u0648\u0631 \u0628\u063A\u06CC\u0631 \u0627\u0646\u0679\u0631\u0646\u06CC\u0679 \u06A9\u06D2 \u062C\u0648\u0627\u0628 \u0645\u0644\u06CC\u06BA \u06AF\u06D2\u06D4", lab_p2: "\u0622\u067E \u06A9\u06CC \u06A9\u0644\u06CC\u062F \u0635\u0631\u0641 \u0627\u0633 \u0679\u06CC\u0628 \u06A9\u06CC \u0645\u06CC\u0645\u0648\u0631\u06CC \u0645\u06CC\u06BA \u0631\u06C1\u062A\u06CC \u06C1\u06D2 \u0627\u0648\u0631 \u0635\u0631\u0641 api.openai.com \u06A9\u0648 \u062C\u0627\u062A\u06CC \u06C1\u06D2\u06D4 \u06C1\u0679\u0627\u0646\u06D2 \u06A9\u06D2 \u0644\u06CC\u06D2 forget \u0644\u06A9\u06BE\u06CC\u06BA\u06D4", match_eyebrow: "\u062C\u0627\u0628 \u0645\u06CC\u0686", match_h2a: "\u06A9\u06CC\u0627 \u0645\u06CC\u06BA", match_h2b: "\u0641\u0679 \u06C1\u0648\u06BA\u061F", match_p: "\u062C\u0627\u0628 \u06A9\u06CC \u062A\u0641\u0635\u06CC\u0644 \u067E\u06CC\u0633\u0679 \u06A9\u0631\u06CC\u06BA\u06D4 \u0633\u0627\u0626\u0679 \u0627\u06CC\u0645\u0627\u0646\u062F\u0627\u0631\u06CC \u0633\u06D2 \u0628\u062A\u0627\u0626\u06D2 \u06AF\u06CC \u06A9\u06C1 \u0645\u06CC\u0631\u06CC \u06A9\u0648\u0646 \u0633\u06CC \u0645\u06C1\u0627\u0631\u062A\u06CC\u06BA \u0627\u0648\u0631 \u067E\u0631\u0648\u062C\u06CC\u06A9\u0679\u0633 \u0627\u0633 \u0633\u06D2 \u0645\u0644\u062A\u06D2 \u06C1\u06CC\u06BA\u060C \u06A9\u06CC\u0627 \u0645\u06CC\u06BA \u0646\u06D2 \u0627\u0628\u06BE\u06CC \u0646\u06C1\u06CC\u06BA \u0633\u06CC\u06A9\u06BE\u0627\u060C \u0627\u0648\u0631 \u0627\u06CC\u06A9 \u0645\u0648\u0632\u0648\u06BA \u062A\u0639\u0627\u0631\u0641\u06CC \u067E\u06CC\u063A\u0627\u0645\u06D4", match_label: "\u062C\u0627\u0628 \u06A9\u06CC \u062A\u0641\u0635\u06CC\u0644", match_ph: "\u062C\u0627\u0628 \u0688\u0633\u06A9\u0631\u067E\u0634\u0646 \u06CC\u06C1\u0627\u06BA \u067E\u06CC\u0633\u0679 \u06A9\u0631\u06CC\u06BA\u2026", match_btn: "\u062A\u062C\u0632\u06CC\u06C1 \u06A9\u0631\u06CC\u06BA", match_score: "\u0645\u0637\u0627\u0628\u0642\u062A \u06A9\u0627 \u0627\u0633\u06A9\u0648\u0631", match_have: "\u0645\u06CC\u0631\u06CC \u0645\u06C1\u0627\u0631\u062A\u06CC\u06BA", match_gap: "\u062C\u0648 \u0627\u0628\u06BE\u06CC \u0646\u06C1\u06CC\u06BA \u0633\u06CC\u06A9\u06BE\u0627", match_proj: "\u0633\u0628 \u0633\u06D2 \u0632\u06CC\u0627\u062F\u06C1 \u0645\u0644\u062A\u06D2 \u067E\u0631\u0648\u062C\u06CC\u06A9\u0679\u0633", match_pitch: "\u0645\u0648\u0632\u0648\u06BA \u062A\u0639\u0627\u0631\u0641\u06CC \u067E\u06CC\u063A\u0627\u0645", match_copy: "\u067E\u06CC\u063A\u0627\u0645 \u06A9\u0627\u067E\u06CC \u06A9\u0631\u06CC\u06BA", journey_eyebrow: "\u062A\u0639\u0644\u06CC\u0645 \u0627\u0648\u0631 \u062A\u062C\u0631\u0628\u06C1", journey_h2a: "\u0645\u06CC\u0631\u0627", journey_h2b: "\u0633\u0641\u0631", proof_eyebrow: "\u06AF\u0648\u0627\u06C1\u06CC", proof_h2a: "\u0627\u0686\u06BE\u06D2", proof_h2b: "\u0627\u0644\u0641\u0627\u0638", journal_eyebrow: "\u062C\u0631\u0646\u0644", journal_h2a: "\u0646\u0648\u0679\u0633 \u0627\u0648\u0631", journal_h2b: "\u062A\u062D\u0631\u06CC\u0631\u06CC\u06BA", contact_eyebrow: "\u0631\u0627\u0628\u0637\u06C1", contact_h2a: "\u0622\u0626\u06CC\u06D2 \u0645\u0644 \u06A9\u0631 \u06A9\u0686\u06BE", contact_h2b: "\u0632\u0646\u062F\u06C1 \u0628\u0646\u0627\u0626\u06CC\u06BA\u06D4", l_name: "\u0646\u0627\u0645", l_email: "\u0627\u06CC \u0645\u06CC\u0644", l_type: "\u067E\u0631\u0648\u062C\u06CC\u06A9\u0679 \u06A9\u06CC \u0642\u0633\u0645", l_msg: "\u067E\u06CC\u063A\u0627\u0645", send: "\u067E\u06CC\u063A\u0627\u0645 \u0628\u06BE\u06CC\u062C\u06CC\u06BA \u2190", note_form: "\u0627\u06AF\u0631 \u0641\u0627\u0631\u0645 \u0633\u0631\u0648\u0633 \u0633\u06CC\u0679 \u0646\u06C1 \u06C1\u0648 \u062A\u0648 \u06CC\u06C1 \u0622\u067E \u06A9\u06CC \u0627\u06CC \u0645\u06CC\u0644 \u0627\u06CC\u067E \u06A9\u0648 \u067E\u06CC\u063A\u0627\u0645 \u06A9\u06D2 \u0633\u0627\u062A\u06BE \u06A9\u06BE\u0648\u0644 \u062F\u06CC\u062A\u0627 \u06C1\u06D2\u06D4", foot_status: "\u0645\u0644\u0627\u0632\u0645\u062A \u06A9\u06D2 \u0644\u06CC\u06D2 \u062F\u0633\u062A\u06CC\u0627\u0628", pal_ph: "\u06A9\u0645\u0627\u0646\u0688 \u0644\u06A9\u06BE\u06CC\u06BA \u06CC\u0627 \u062A\u0644\u0627\u0634 \u06A9\u0631\u06CC\u06BA\u2026", pal_hint: "\u2191\u2193 \u062D\u0631\u06A9\u062A \xB7 Enter \u0686\u0644\u0627\u0626\u06CC\u06BA \xB7 Esc \u0628\u0646\u062F", tour_exit: "\u0679\u0648\u0631 \u062E\u062A\u0645 \u06A9\u0631\u06CC\u06BA", tour_prev: "\u067E\u06CC\u0686\u06BE\u06D2 \u2192", tour_next: "\u2190 \u0622\u06AF\u06D2", tour_open: "\u0633\u06CC\u06A9\u0634\u0646 \u06A9\u06BE\u0648\u0644\u06CC\u06BA" } }, Sn = (i, t) => { var e, n; return (n = (e = wo[i] && wo[i][t]) != null ? e : wo.en[t]) != null ? n : t }; function rp(i, t = document) { let e = wo[i] ? i : "en"; return document.documentElement.lang = e, document.documentElement.dir = e === "ur" ? "rtl" : "ltr", t.querySelectorAll("[data-i18n]").forEach(n => { n.textContent = Sn(e, n.dataset.i18n) }), t.querySelectorAll("[data-i18n-html]").forEach(n => { n.innerHTML = Sn(e, n.dataset.i18nHtml) }), t.querySelectorAll("[data-i18n-attr]").forEach(n => n.dataset.i18nAttr.split(",").forEach(s => { let [r, a] = s.split(":"); n.setAttribute(r.trim(), Sn(e, a.trim())) })), e } var Lb = (i, t) => { if (i = i.toLowerCase(), t = t.toLowerCase(), !i) return 1; let e = t.indexOf(i); if (e >= 0) return 100 - e; let n = 0; for (let s of t) if (s === i[n] && n++, n === i.length) return 20; return 0 }; function ap({ getItems: i, onAsk: t, hint: e }) { let n = document.getElementById("palette"), s = document.getElementById("pal-input"), r = document.getElementById("pal-list"); if (!n || !s || !r) return { open() { }, close() { } }; let a = [], o = 0, l = null; function c() { let m = s.value.trim(); a = i().map(g => ({ it: g, s: Lb(m, `${g.label} ${g.keywords || ""}`) })).filter(g => g.s > 0).sort((g, p) => p.s - g.s).slice(0, 9).map(g => g.it), m && t && a.push({ label: `Ask the Lab: \u201C${m}\u201D`, group: "AI", run: () => t(m) }), o = Math.min(o, Math.max(0, a.length - 1)), r.innerHTML = "", a.forEach((g, p) => { let y = document.createElement("li"); y.id = `pal-${p}`, y.setAttribute("role", "option"), y.setAttribute("aria-selected", String(p === o)); let x = document.createElement("small"); x.textContent = g.group || ""; let v = document.createElement("span"); v.textContent = g.label, y.append(v, x), y.addEventListener("click", () => d(p)), y.addEventListener("pointermove", () => { o = p, h() }), r.appendChild(y) }), s.setAttribute("aria-activedescendant", a.length ? `pal-${o}` : "") } function h() { var m, _;[...r.children].forEach((g, p) => g.setAttribute("aria-selected", String(p === o))), s.setAttribute("aria-activedescendant", `pal-${o}`), (_ = (m = r.children[o]) == null ? void 0 : m.scrollIntoView) == null || _.call(m, { block: "nearest" }) } function d(m) { let _ = a[m]; _ && (f(), _.run()) } function u() { l = document.activeElement, n.hidden = !1, document.body.classList.add("pal-open"), s.value = "", o = 0, c(), requestAnimationFrame(() => { n.classList.add("open"), s.focus() }) } function f() { var m; n.classList.remove("open"), document.body.classList.remove("pal-open"), setTimeout(() => { n.hidden = !0 }, 180), (m = l == null ? void 0 : l.focus) == null || m.call(l, { preventScroll: !0 }) } return s.addEventListener("input", () => { o = 0, c() }), s.addEventListener("keydown", m => { m.key === "ArrowDown" ? (o = Math.min(a.length - 1, o + 1), h(), m.preventDefault()) : m.key === "ArrowUp" ? (o = Math.max(0, o - 1), h(), m.preventDefault()) : m.key === "Enter" ? (d(o), m.preventDefault()) : m.key === "Escape" && (f(), m.preventDefault()) }), n.addEventListener("click", m => { m.target === n && f() }), window.addEventListener("keydown", m => { var g; let _ = /input|textarea|select/i.test(((g = document.activeElement) == null ? void 0 : g.tagName) || ""); (m.key.toLowerCase() === "k" && (m.ctrlKey || m.metaKey) || m.key === "/" && !_ && n.hidden) && (m.preventDefault(), n.hidden ? u() : f()) }), { open: u, close: f, get isOpen() { return !n.hidden } } } var cr = [{ key: "door", title: "The front door", text: "Welcome to the home of animation and AI. Follow the glowing path \u2014 each room is a part of my work.", section: null }, { key: "about", title: "Room 1 \xB7 About", text: "A recent BSIT graduate who builds responsive websites and AI apps. The ring is the loop of learning and shipping.", section: "about" }, { key: "work", title: "Room 2 \xB7 Work", text: "Nine projects hang here like framed pictures: RAG assistants, finance and health guides, a research agent and a store.", section: "work" }, { key: "lab", title: "Room 3 \xB7 The Lab", text: "The crystal is the AI Lab \u2014 ask it questions, or paste a job description in Job Match.", section: "lab" }, { key: "contact", title: "Room 4 \xB7 Contact", text: "The lamp is always on. Say hello \u2014 I would love to build something with you.", section: "contact" }, { key: "garden", title: "The garden", text: "That is the house. Thanks for visiting \u2014 press Exit to return to the page.", section: null }]; function op({ getScene: i, goTo: t, track: e, onExit: n }) { var h, d, u, f; let s = document.getElementById("tour"); if (!s) return { start: () => !1, exit() { } }; let r = m => s.querySelector(m), a = 0, o = () => { let m = cr[a], _ = i(); r("#tour-count").textContent = `${a + 1} / ${cr.length}`, r("#tour-title").textContent = m.title, r("#tour-text").textContent = m.text, r("#tour-open").hidden = !m.section, r("#tour-prev").disabled = a === 0, r("#tour-next").disabled = a === cr.length - 1, _ == null || _.tourGoto(a) }, l = () => { var m; s.hidden || (s.hidden = !0, document.body.classList.remove("touring"), (m = i()) == null || m.tourExit(), window.removeEventListener("keydown", c), n == null || n()) }; function c(m) { m.key === "Escape" ? l() : m.key === "ArrowRight" && a < cr.length - 1 ? (a++, o()) : m.key === "ArrowLeft" && a > 0 && (a--, o()) } return (h = r("#tour-prev")) == null || h.addEventListener("click", () => { a > 0 && (a--, o()) }), (d = r("#tour-next")) == null || d.addEventListener("click", () => { a < cr.length - 1 && (a++, o()) }), (u = r("#tour-exit")) == null || u.addEventListener("click", l), (f = r("#tour-open")) == null || f.addEventListener("click", () => { let m = cr[a].section; l(), m && t(m) }), { start() { let m = i(); return !m || !m.tourStart ? !1 : (a = 0, s.hidden = !1, document.body.classList.add("touring"), m.tourStart(), o(), window.addEventListener("keydown", c), e == null || e("house_tour"), !0) }, exit: l, get active() { return !s.hidden } } } function lp() { let i = null, t = null, e = null, n = 0, s = !1, r = 0, a = null, o = [0, 3, 7, 10, 12, 10, 7, 3], l = 110, c = m => l * 2 ** (m / 12); function h(m, _, g = .07) { let p = i.createOscillator(), y = i.createGain(); p.type = "triangle", p.frequency.value = _, y.gain.setValueAtTime(1e-4, m), y.gain.exponentialRampToValueAtTime(g, m + .01), y.gain.exponentialRampToValueAtTime(1e-4, m + .5), p.connect(y).connect(t), p.start(m), p.stop(m + .55) } function d(m) { let _ = i.createOscillator(), g = i.createGain(); _.frequency.setValueAtTime(110, m), _.frequency.exponentialRampToValueAtTime(40, m + .18), g.gain.setValueAtTime(.22, m), g.gain.exponentialRampToValueAtTime(1e-4, m + .25), _.connect(g).connect(t), _.start(m), _.stop(m + .3) } function u() { let m = window.AudioContext || window.webkitAudioContext; if (!m) return !1; i = new m, t = i.createGain(), t.gain.value = 0, e = i.createAnalyser(), e.fftSize = 128, a = new Uint8Array(e.frequencyBinCount), t.connect(e), e.connect(i.destination); let _ = i.createBiquadFilter(); _.type = "lowpass", _.frequency.value = 800, _.connect(t); let g = i.createOscillator(), p = i.createGain(); return g.frequency.value = .12, p.gain.value = 300, g.connect(p).connect(_.frequency), g.start(), [0, 7, 15].forEach((y, x) => { let v = i.createOscillator(), A = i.createGain(); v.type = x === 1 ? "sawtooth" : "sine", v.frequency.value = c(y) / 2, A.gain.value = x === 1 ? .025 : .06, v.connect(A).connect(_), v.start() }), !0 } function f() { let m = i.currentTime + .05; r % 2 === 0 && d(m), h(m, c(o[r % o.length] + (Math.floor(r / 16) % 2 ? 5 : 0) + 12)), r++ } return { get playing() { return s }, async start() { return !i && !u() ? !1 : (await i.resume(), t.gain.cancelScheduledValues(i.currentTime), t.gain.linearRampToValueAtTime(.9, i.currentTime + 1.5), clearInterval(n), n = setInterval(f, 260), s = !0, !0) }, stop() { i && (t.gain.linearRampToValueAtTime(0, i.currentTime + .6), clearInterval(n), s = !1, setTimeout(() => { s || i.suspend() }, 800)) }, async toggle() { return s ? (this.stop(), !1) : this.start() }, level() { if (!s || !e) return 0; e.getByteFrequencyData(a); let m = 0; for (let _ = 0; _ < 8; _++)m += a[_]; return Math.min(1, m / (8 * 255) * 1.8) } } } var Mn = i => String(i != null ? i : "").replace(/[&<>"']/g, t => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[t]), hp = i => { let t = /github\.com\/([A-Za-z0-9-]+)/i.exec(i || ""); return t ? t[1] : "" }, cp = i => { let t = (Date.now() - new Date(i).getTime()) / 864e5; return t < 1 ? "today" : t < 2 ? "yesterday" : t < 31 ? `${Math.floor(t)} days ago` : t < 365 ? `${Math.floor(t / 30)} mo ago` : `${Math.floor(t / 365)} yr ago` }; async function up(i, t = fetch, e = typeof sessionStorage != "undefined" ? sessionStorage : null) {
		var h; let n = `iu-gh-${i}`; try { let d = JSON.parse((e == null ? void 0 : e.getItem(n)) || "null"); if (d && Date.now() - d.t < 6e5) return d.data } catch { } let s = async d => { let u = await t(`https://api.github.com${d}`, { headers: { Accept: "application/vnd.github+json" } }); if (!u.ok) { let f = new Error(`GitHub ${u.status}`); throw f.status = u.status, f } return u.json() }, [r, a, o] = await Promise.all([s(`/users/${i}`), s(`/users/${i}/repos?sort=pushed&per_page=30`), s(`/users/${i}/events/public?per_page=30`).catch(() => [])]), l = []; for (let d of o) if (d.type === "PushEvent") {
			for (let u of (((h = d.payload) == null ? void 0 : h.commits) || []).slice(-2)) l.push({
				repo: d.repo.name.split("/")[1], msg: u.message.split(`
`)[0].slice(0, 90), date: d.created_at
			}); if (l.length >= 6) break
		} let c = { name: r.name || i, followers: r.followers, publicRepos: r.public_repos, url: r.html_url, repos: a.filter(d => !d.fork).slice(0, 6).map(d => ({ name: d.name, desc: d.description || "", lang: d.language || "", stars: d.stargazers_count, pushed: d.pushed_at, url: d.html_url })), commits: l.slice(0, 6) }; try { e == null || e.setItem(n, JSON.stringify({ t: Date.now(), data: c })) } catch { } return c
	} function dp(i, t) {
		i.innerHTML = `<div class="gh-stats"><div class="stat"><b>${Mn(t.publicRepos)}</b><span>Public repos</span></div><div class="stat"><b>${Mn(t.followers)}</b><span>Followers</span></div><a class="btn" href="${Mn(t.url)}" target="_blank" rel="noopener noreferrer">Open GitHub \u2197</a></div>
  <div class="gh-grid">${t.repos.map(e => `<a class="gh-card" href="${Mn(e.url)}" target="_blank" rel="noopener noreferrer"><b>${Mn(e.name)}</b><p>${Mn(e.desc) || '<span class="muted">No description</span>'}</p><span class="gh-meta">${e.lang ? `<i>${Mn(e.lang)}</i>` : ""}${e.stars ? `<i>\u2605 ${Mn(e.stars)}</i>` : ""}<i>${Mn(cp(e.pushed))}</i></span></a>`).join("")}</div>
  ${t.commits.length ? `<h3 class="stack-h">Recent commits</h3><ul class="gh-commits">${t.commits.map(e => `<li><code>${Mn(e.repo)}</code> ${Mn(e.msg)} <time>${Mn(cp(e.date))}</time></li>`).join("")}</ul>` : ""}`
	} var Wh = { html: ["html", "html5"], css: ["css", "css3", "scss", "sass"], javascript: ["javascript", "js", "es6", "ecmascript"], typescript: ["typescript"], react: ["react", "reactjs", "react.js"], vue: ["vue", "vuejs", "vue.js"], angular: ["angular"], nextjs: ["next.js", "nextjs"], node: ["node", "nodejs", "node.js"], php: ["php"], laravel: ["laravel"], mysql: ["mysql"], sql: ["sql", "postgresql", "postgres"], mongodb: ["mongodb", "mongo"], python: ["python"], django: ["django"], flask: ["flask"], fastapi: ["fastapi"], streamlit: ["streamlit"], langchain: ["langchain"], openai: ["openai", "gpt", "chatgpt"], llm: ["llm", "llms", "large language model"], rag: ["rag", "retrieval augmented", "retrieval-augmented"], git: ["git"], github: ["github"], docker: ["docker"], aws: ["aws", "amazon web services"], figma: ["figma"], tailwind: ["tailwind", "tailwindcss"], bootstrap: ["bootstrap"], wordpress: ["wordpress"], api: ["api", "apis", "rest", "restful"], json: ["json"], seo: ["seo"], responsive: ["responsive", "mobile-first", "cross-browser"], ecommerce: ["e-commerce", "ecommerce", "woocommerce", "shopify"], testing: ["testing", "unit test", "jest", "qa"], agile: ["agile", "scrum"], linux: ["linux"], java: ["java"], csharp: ["c#", ".net", "asp.net"], cpp: ["c++"], firebase: ["firebase"], threejs: ["three.js", "threejs", "webgl"], gsap: ["gsap"], pandas: ["pandas"], numpy: ["numpy"], ml: ["machine learning", "deep learning", "tensorflow", "pytorch"] }, Db = { javascript: "JavaScript", typescript: "TypeScript", nextjs: "Next.js", node: "Node.js", mysql: "MySQL", sql: "SQL", mongodb: "MongoDB", fastapi: "FastAPI", langchain: "LangChain", openai: "OpenAI API", llm: "LLMs", rag: "RAG", github: "GitHub", aws: "AWS", seo: "SEO", api: "REST APIs", json: "JSON", csharp: "C# / .NET", cpp: "C++", threejs: "Three.js / WebGL", gsap: "GSAP", ml: "Machine learning", ecommerce: "E-commerce", html: "HTML5", css: "CSS3", php: "PHP", responsive: "Responsive design", wordpress: "WordPress", figma: "Figma", tailwind: "Tailwind", bootstrap: "Bootstrap", django: "Django", flask: "Flask", docker: "Docker", python: "Python", streamlit: "Streamlit", pandas: "pandas", numpy: "NumPy", git: "Git", java: "Java", react: "React", vue: "Vue", angular: "Angular", laravel: "Laravel", linux: "Linux", testing: "Testing", agile: "Agile", firebase: "Firebase" }, fp = new Set(["html", "css", "javascript", "php", "mysql", "sql", "python", "langchain", "openai", "llm", "rag", "streamlit", "git", "github", "responsive", "api", "json", "ecommerce", "pandas", "numpy", "seo"]), hr = i => Db[i] || i.charAt(0).toUpperCase() + i.slice(1), Ub = i => i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); function Nb(i) { let t = ` ${String(i || "").toLowerCase()} `, e = []; for (let [n, s] of Object.entries(Wh)) s.some(r => new RegExp(`(^|[^a-z0-9+#.])${Ub(r)}($|[^a-z0-9+#])`).test(t)) && e.push(n); return e } var Ob = i => { let t = String(i).toLowerCase(); return Object.keys(Wh).find(e => e === t || Wh[e].includes(t)) }; function pp(i, t) { let e = String(i || "").slice(0, 8e3), n = Nb(e), s = new Set(Gr(e)), r = n.filter(p => fp.has(p)), a = n.filter(p => !fp.has(p)), o = n.length ? r.length / n.length : .5, l = t.map(p => { let y = new Set(p.stack.map(Ob).filter(Boolean)), x = n.filter(T => y.has(T)), v = Gr(`${p.title} ${p.kicker} ${p.summary} ${p.stack.join(" ")}`), A = [...new Set(v.filter(T => s.has(T)))]; return { id: p.id, title: p.title, kicker: p.kicker, score: x.length * 3 + Math.min(A.length, 8), why: x.map(hr), words: A.slice(0, 5) } }).sort((p, y) => y.score - p.score).slice(0, 3), c = Math.min(1, l.reduce((p, y) => p + y.score, 0) / 24), h = Math.round(100 * (.65 * o + .35 * c)), d = Math.max(0, ...[...e.matchAll(/(\d+)\s*\+?\s*(?:-\s*\d+\s*)?years?/gi)].map(p => +p[1])), u = []; d >= 3 && u.push(`The role mentions ${d}+ years of experience; I am a fresh graduate with two internships and nine shipped projects.`), n.length || u.push("No specific technologies were detected, so the score is a rough guess. Paste the full requirements for a sharper result."); let f = l.filter(p => p.score > 0), m = r.slice(0, 5).map(hr), _ = a.slice(0, 3).map(hr), g = ["Hello \u2014 I'm Iman Umar, a BSIT graduate from Pakistan.", m.length ? `Your posting asks for ${n.slice(0, 5).map(hr).join(", ")}; I already work with ${m.join(", ")}${f[0] ? `, for example in ${f[0].title} (${f[0].kicker.toLowerCase()})` : ""}.` : `I build responsive websites and AI applications${f[0] ? `, for example ${f[0].title} (${f[0].kicker.toLowerCase()})` : ""}.`, _.length ? `I have not used ${_.join(", ")} professionally yet and I'm keen to learn them quickly.` : "", "I completed internships at Algolix Technologies and ISPR in 2026. I'd be glad to walk you through my projects \u2014 thank you for your time."].filter(Boolean).join(" "); return { score: h, matched: r.map(hr), missing: a.map(hr), projects: l, notes: u, pitch: g } } var Xh = i => i.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); function Eo(i) { return Xh(i).replace(/`([^`]+)`/g, "<code>$1</code>").replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>").replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>') } function mp(i) {
		let t = String(i || "").replace(/\r/g, "").split(`
`), e = [], n = null, s = [], r = null, a = () => { s.length && (e.push(`<p>${Eo(s.join(" "))}</p>`), s = []) }, o = () => { n && (e.push(`<${n.t}>${n.items.map(l => `<li>${Eo(l)}</li>`).join("")}</${n.t}>`), n = null) }; for (let l of t) {
			if (r !== null) {
				l.trim().startsWith("```") ? (e.push(`<pre><code>${Xh(r.join(`
`))}</code></pre>`), r = null) : r.push(l); continue
			} let c = l.trimEnd(); if (c.trim().startsWith("```")) { a(), o(), r = []; continue } let h; if (!c.trim()) { a(), o(); continue } if (h = c.match(/^(#{1,3})\s+(.*)$/)) { a(), o(), e.push(`<h${h[1].length + 2}>${Eo(h[2])}</h${h[1].length + 2}>`); continue } if (h = c.match(/^\s*[-*]\s+(.*)$/)) { a(), (!n || n.t !== "ul") && (o(), n = { t: "ul", items: [] }), n.items.push(h[1]); continue } if (h = c.match(/^\s*\d+\.\s+(.*)$/)) { a(), (!n || n.t !== "ol") && (o(), n = { t: "ol", items: [] }), n.items.push(h[1]); continue } if (h = c.match(/^>\s?(.*)$/)) { a(), o(), e.push(`<blockquote>${Eo(h[1])}</blockquote>`); continue } o(), s.push(c.trim())
		} return r !== null && e.push(`<pre><code>${Xh(r.join(`
`))}</code></pre>`), a(), o(), e.join(`
`)
	} function gp(i = {}) { let t = (e, n) => { let s = document.createElement("script"); s.defer = !0, s.src = e, Object.entries(n).forEach(([r, a]) => s.setAttribute(r, a)), document.head.appendChild(s) }; i.plausibleDomain && /^[a-z0-9.-]+$/i.test(i.plausibleDomain) && t("https://plausible.io/js/script.js", { "data-domain": i.plausibleDomain }), i.umamiId && /^https:\/\//.test(i.umamiSrc || "") && /^[a-f0-9-]{8,}$/i.test(i.umamiId) && t(i.umamiSrc, { "data-website-id": i.umamiId }) } function Un(i, t) { var e, n, s; try { (e = window.plausible) == null || e.call(window, i, t ? { props: t } : void 0), (s = (n = window.umami) == null ? void 0 : n.track) == null || s.call(n, i, t) } catch { } } var he = (i, t = document) => t.querySelector(i), To = (i, t = document) => [...t.querySelectorAll(i)], ue = i => String(i != null ? i : "").replace(/[&<>"']/g, t => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[t]), Fb = "Junior Web Developer \u2014 we are looking for a graduate with HTML5, CSS3 and JavaScript, plus PHP and MySQL for our e-commerce platform. Experience with Git, REST APIs and responsive design. Python or React is a plus. 0-1 years of experience."; function _p(i) {
		let { projects: t, getScene: e, setTheme: n, openProject: s, goTo: r, pauseScroll: a, reduced: o } = i, l = "en", c = null, h = null, d = null, u = null, f = lp(), m = { get: U => { try { return localStorage.getItem(U) } catch { return null } }, set: (U, I) => { try { localStorage.setItem(U, I) } catch { } } }; function _(U) { let I = he("#toast"); I && (I.textContent = U, I.hidden = !1, I.classList.add("show"), clearTimeout(_.id), _.id = setTimeout(() => { I.classList.remove("show"), setTimeout(() => { I.hidden = !0 }, 300) }, 2600)) } function g(U, I) { l = rp(U), m.set("iu-lang", l); let G = he("#lang-btn"); G && (G.textContent = l === "ur" ? "EN" : "\u0627\u0631\u062F\u0648", G.lang = l === "ur" ? "en" : "ur", G.setAttribute("aria-label", l === "ur" ? "Switch language to English" : "Switch language to Urdu")), p(h, !0), I || (Un("language", { lang: l }), _(l === "ur" ? "\u0627\u0631\u062F\u0648 \u2014 \u0627\u0646\u0679\u0631\u0641\u06CC\u0633 \u06A9\u0627 \u0645\u062A\u0646 \u062A\u0628\u062F\u06CC\u0644 \u06C1\u0648 \u06AF\u06CC\u0627" : "English")) } function p(U, I) { h = U && Tl[U] ? U : null, To(".role-btn").forEach(j => j.setAttribute("aria-pressed", String(j.dataset.role === h))); let G = he("#hero-lead"), D = he("#cta-primary"), tt = h && Tl[h]; document.body.dataset.role = h || "", G && (tt && l === "en" ? G.textContent = tt.lead : G.innerHTML = Sn(l, "hero_lead")), D && (tt && l === "en" ? (D.textContent = tt.cta.label, D.dataset.action = tt.cta.action) : (D.textContent = Sn(l, "cta_work"), delete D.dataset.action)), To(".card").forEach(j => j.classList.toggle("recommended", !!tt && tt.highlight.includes(j.dataset.id))), m.set("iu-role", h || ""), !I && h && (Un("role", { role: h }), _(`Highlighting what matters for a ${h}`)) } function y() { var U; To(".role-btn").forEach(I => I.addEventListener("click", () => p(h === I.dataset.role ? null : I.dataset.role))), (U = he("#cta-primary")) == null || U.addEventListener("click", I => { let G = I.currentTarget.dataset.action; G && (I.preventDefault(), G === "cv" ? x() : r(G)) }) } let x = () => { let U = document.createElement("a"); U.href = ne.cv, U.download = "", document.body.appendChild(U), U.click(), U.remove(), Un("cv_download") }, v = 0; function A() { var U, I; (U = e()) == null || U.setBeat(f.level()), f.playing ? v = requestAnimationFrame(A) : (I = e()) == null || I.setBeat(0) } async function T() { let U = await f.toggle(), I = he("#sound-btn"); return I == null || I.setAttribute("aria-pressed", String(!!U)), I == null || I.classList.toggle("on", !!U), U && (cancelAnimationFrame(v), A()), Un("sound", { on: !!U }), _(U ? "Ambient music on \u2014 watch the particles breathe" : "Music off"), !!U } let E = { home: "Home", about: "About", skills: "Skills", work: "Work", code: "GitHub", lab: "the Lab", match: "Job Match", journey: "Journey", proof: "Proof", journal: "Journal", contact: "Contact" }; function C(U) { var I; switch (U.type) { case "goto": { let G = document.getElementById(U.id); return !G || G.hidden ? `${E[U.id] || U.id} is not available yet (add content in site-config.js).` : (r(U.id), `scrolling to ${E[U.id] || U.id}`) } case "project": return s(U.id), `opening ${(I = t.find(G => G.id === U.id)) == null ? void 0 : I.title}`; case "theme": return n(U.name), `theme \u2192 ${U.name}`; case "lang": return g(U.code), U.code === "ur" ? "\u0627\u0631\u062F\u0648" : "English"; case "cv": return x(), "downloading the CV"; case "tour": return b() ? "starting the house tour (Esc to exit)" : "the 3D tour needs WebGL, which is unavailable here"; case "sound": return T(), "toggling ambient music"; case "voice": return r("lab"), setTimeout(() => c == null ? void 0 : c.micToggle(), 700), "voice input \u2014 speak your question"; default: return "" } } function b() { a(!0); let U = d == null ? void 0 : d.start(); return U || a(!1), !!U } function S() { let U = []; return Object.entries(E).forEach(([I, G]) => { let D = document.getElementById(I); D && !D.hidden && U.push({ label: `Go to ${G}`, group: "Navigate", keywords: I, run: () => r(I) }) }), t.forEach(I => U.push({ label: `Open ${I.title}`, group: "Project", keywords: `${I.kicker} ${I.stack.join(" ")} ${I.category}`, run: () => s(I.id) })), [["nocturne", "Nocturne (dark)"], ["pearl", "Pearl (light)"], ["marigold", "Aubergine & Marigold"]].forEach(([I, G]) => U.push({ label: `Theme: ${G}`, group: "Theme", keywords: "theme color colour mode", run: () => n(I) })), U.push({ label: l === "ur" ? "Switch to English" : "Switch to Urdu \xB7 \u0627\u0631\u062F\u0648", group: "Language", keywords: "language urdu english translate", run: () => g(l === "ur" ? "en" : "ur") }), U.push({ label: "Start the 3D house tour", group: "Experience", keywords: "tour house ghar walkthrough 3d", run: () => b() }), U.push({ label: f.playing ? "Turn ambient music off" : "Turn ambient music on", group: "Experience", keywords: "sound music audio", run: T }), U.push({ label: "Voice input in the Lab", group: "Experience", keywords: "voice microphone speak", run: () => C({ type: "voice" }) }), U.push({ label: "Download CV", group: "Action", keywords: "resume cv pdf", run: x }), U.push({ label: "Copy email address", group: "Action", keywords: "mail contact", run: () => { var I; (I = navigator.clipboard) == null || I.writeText(ne.email), _("Email copied") } }), ne.github && U.push({ label: "Open GitHub profile", group: "Action", keywords: "code repos", run: () => window.open(ne.github, "_blank", "noopener") }), U } async function P() { let U = he("#code"), I = he("#gh-feed"), G = hp(ne.github); if (!(!U || !I || !G)) { U.hidden = !1; try { dp(I, await up(G)) } catch (D) { I.innerHTML = `<p class="muted">Couldn't load GitHub right now (${ue(D.status === 403 ? "rate limit" : D.status === 404 ? "profile not found \u2014 check github in site-config.js" : "network")}). <a href="${ue(ne.github)}" target="_blank" rel="noopener noreferrer">Open my GitHub \u2197</a></p>` } } } function H() {
			var D; let U = he("#match-form"), I = he("#match-out"), G = he("#jd"); !U || !I || !G || ((D = he("#match-sample")) == null || D.addEventListener("click", () => { G.value = Fb, G.focus({ preventScroll: !0 }) }), U.addEventListener("submit", tt => {
				var Z, et; if (tt.preventDefault(), G.value.trim().length < 20) { I.innerHTML = '<p class="err-text">Paste a longer job description (at least a sentence or two).</p>'; return } let j = pp(G.value, t); Un("job_match", { score: j.score }); let dt = 339.3 * (1 - j.score / 100), At = (at, lt = "") => `<li class="tag ${lt}">${ue(at)}</li>`; I.innerHTML =`<div class="match-res">
        <div class="score"><svg viewBox="0 0 120 120" aria-hidden="true"><circle class="ld-bg" cx="60" cy="60" r="54"/><circle class="ld-fg" cx="60" cy="60" r="54" style="stroke-dashoffset:${dt.toFixed(1)}"/></svg><div><b>${j.score}</b><small>%</small></div><span>${ue(Sn(l, "match_score"))}</span></div>
        <div class="match-cols"><div><h4>${ue(Sn(l, "match_have"))}</h4><ul class="tags">${j.matched.length ? j.matched.map(at => At(at)).join("") : '<li class="muted">\u2014</li>'}</ul></div>
        <div><h4>${ue(Sn(l, "match_gap"))}</h4><ul class="tags">${j.missing.length ? j.missing.map(at => At(at, "gap")).join("") : '<li class="muted">\u2014</li>'}</ul></div></div>
        ${j.notes.map(at => `<p class="note">${ue(at)}</p>`).join("")}
        <h4>${ue(Sn(l, "match_proj"))}</h4><ol class="mp">${j.projects.map(at => `<li><button type="button" class="link" data-open="${ue(at.id)}"><b>${ue(at.title)}</b></button> <small>${ue(at.kicker)}</small>${at.why.length ? `<span class="muted"> \u2014 matches ${ue(at.why.join(", "))}</span>` : ""}</li>`).join("")}</ol>
        <h4>${ue(Sn(l, "match_pitch"))}</h4><textarea id="pitch" class="pitch" rows="5" aria-label="Tailored pitch">${ue(j.pitch)}</textarea>
        <div class="cta"><button class="btn solid" type="button" id="pitch-copy">${ue(Sn(l, "match_copy"))}</button><button class="btn" type="button" id="pitch-ai">Refine with AI \u2726</button></div></div>`, To("[data-open]", I).forEach(at => at.addEventListener("click", () => s(at.dataset.open))), (Z = he("#pitch-copy")) == null || Z.addEventListener("click", () => { var at; (at = navigator.clipboard) == null || at.writeText(he("#pitch").value), _("Pitch copied") }); let Ut = he("#pitch-ai"); Ut == null || Ut.addEventListener("click", async () => { if (!c || !c.aiOn()) { _("Enable AI in the Lab first (add a key or use hosted AI)"); return } let at = [...j.projects.map(vt => Qi.find(Rt => Rt.id === vt.id)).filter(Boolean), Qi.find(vt => vt.id === "about"), Qi.find(vt => vt.id === "algolix")].filter(Boolean), lt = he("#pitch"); lt.value = "", Ut.disabled = !0; try { await c.ask(`Write an honest, friendly 100-word application pitch for this job. Only claim skills found in the notes; mention gaps as "still learning". Job description: ${G.value.slice(0, 1500)}`, at, vt => { lt.value += vt }) } catch (vt) { lt.value = j.pitch, _(vt.message || "AI request failed") } Ut.disabled = !1 }), (et = I.scrollIntoView) == null || et.call(I, { block: "nearest" })
			}))
		} function z() { let U = he("#proof"), I = he("#quotes"), G = he("#certs"); U && (Al.length || Cl.length) && (U.hidden = !1, I.innerHTML = Al.map(j => `<figure class="quote rv"><blockquote>\u201C${ue(j.quote)}\u201D</blockquote><figcaption><b>${ue(j.name)}</b> ${ue(j.role)}</figcaption></figure>`).join(""), G.innerHTML = Cl.map(j => `<li class="cert rv">${j.url ? `<a href="${ue(j.url)}" target="_blank" rel="noopener noreferrer">` : "<span>"}<b>${ue(j.title)}</b><small>${ue(j.issuer)} ${ue(j.year)}</small>${j.url ? "</a>" : "</span>"}</li>`).join("")); let D = he("#journal"), tt = he("#posts"); D && tt && Rl.length && (D.hidden = !1, tt.innerHTML = Rl.map(j => `<details class="post rv"><summary><b>${ue(j.title)}</b><small>${ue(j.date)} ${j.tags.map(dt => `#${ue(dt)}`).join(" ")}</small></summary><div class="md">${mp(j.body)}</div></details>`).join("")) } function W() { var I, G, D, tt; gp(ne.analytics), l = m.get("iu-lang") === "ur" ? "ur" : "en", g(l, !0), y(); let U = m.get("iu-role"); U && p(U, !0), z(), H(), P(), (I = he("#lang-btn")) == null || I.addEventListener("click", () => g(l === "ur" ? "en" : "ur")), (G = he("#sound-btn")) == null || G.addEventListener("click", T), d = op({ getScene: e, goTo: r, track: Un, onExit: () => a(!1) }), (D = he("#tour-btn")) == null || D.addEventListener("click", () => { b() || _("The 3D tour needs WebGL (not available in this browser)") }), u = ap({ getItems: S, onAsk: j => { r("lab"), setTimeout(() => c == null ? void 0 : c.run(j), 800) } }), (tt = he("#pal-btn")) == null || tt.addEventListener("click", () => u.open()), location.protocol === "https:" && "serviceWorker" in navigator && navigator.serviceWorker.register("sw.js").catch(() => { }) } return { init: W, onIntent: C, attachLab(U) { c = U }, setLang: g, toast: _, get lang() { return l }, startTour: b, getTour: () => d, toggleSound: T, track: Un }
	} var Bt = (i, t = document) => t.querySelector(i), Se = (i, t = document) => [...t.querySelectorAll(i)], se = i => String(i).replace(/[&<>"']/g, t => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[t]), qh = i => window.matchMedia ? window.matchMedia(i) : { matches: !1, addEventListener() { } }, ke = qh("(prefers-reduced-motion: reduce)").matches, Xr = qh("(pointer: fine)").matches, Po = { nocturne: "Nocturne", pearl: "Pearl", marigold: "Aubergine & Marigold" }, Re = null, Pe = null, zi = null; function kb() { Se("[data-year]").forEach(a => a.textContent = new Date().getFullYear()), Se("[data-email]").forEach(a => { a.href = `mailto:${ne.email}`, a.hasAttribute("data-show") && (a.textContent = ne.email) }), Se("[data-cv]").forEach(a => { a.href = ne.cv, a.setAttribute("download", "") }); let i = { github: ne.github, linkedin: ne.linkedin, instagram: ne.instagram, whatsapp: ne.whatsapp ? `https://wa.me/${ne.whatsapp}` : "" }; Se("[data-social]").forEach(a => { let o = i[a.dataset.social]; o ? (a.href = o, a.target = "_blank", a.rel = "noopener noreferrer") : a.remove() }); let t = Bt("#stats"); t && (t.innerHTML = pd.map(a => `<div class="stat"><b data-count="${a.n}">0</b><span>${se(a.label)}</span></div>`).join("")); let e = Bt("#caps"); e && (e.innerHTML = md.map(a => `<article class="cap rv" data-tilt><span class="cap-k">${a.k}</span><h3>${se(a.t)}</h3><p>${se(a.d)}</p></article>`).join("")); let n = Bt("#stack"); n && (n.innerHTML = El.map(([a, o]) => `<li class="chip rv" data-g="${se(o)}"><i></i>${se(a)}<small>${se(o)}</small></li>`).join("")); let s = Bt("#timeline"); s && (s.innerHTML = gd.map(a => `<li class="tl-item rv"><time>${se(a.when)}</time><h3>${se(a.t)}</h3><p>${se(a.d)}</p></li>`).join("")); let r = Bt("#marquee-track"); if (r) { let a = El.map(([o]) => `<span>${se(o)}</span><i>\u2726</i>`).join(""); r.innerHTML = a + a } } function Bb() { Se("[data-split]").forEach(i => { let t = i.textContent.trim(); i.setAttribute("aria-label", t), i.textContent = "", [...t].forEach((e, n) => { let s = document.createElement("span"); s.className = "char", s.setAttribute("aria-hidden", "true"), s.style.setProperty("--i", n), s.textContent = e, i.appendChild(s) }) }) } function zb() { let i = Bt("#role"); if (!i) return; if (ke) { i.textContent = ua[0]; return } let t = 0, e = 0, n = !1, s = () => { let r = ua[t]; if (i.textContent = r.slice(0, e), !n && e === r.length) return n = !0, setTimeout(s, 1400); n && e === 0 && (n = !1, t = (t + 1) % ua.length), e += n ? -1 : 1, setTimeout(s, n ? 28 : 65) }; s() } function yp() { let i = getComputedStyle(document.body), t = e => i.getPropertyValue(e).trim(); return { c1: t("--a1") || "#8B6CFF", c2: t("--a2") || "#5CFFC8", c3: t("--a3") || "#FF7A59", dark: document.body.dataset.theme !== "pearl" } } function Io(i, t) { var n, s; if (!Po[i] || document.body.dataset.theme === i) return; let e = () => { document.body.dataset.theme = i; try { localStorage.setItem("iu-theme", i) } catch { } Se(".sw").forEach(a => a.setAttribute("aria-pressed", String(a.dataset.theme === i))), Re == null || Re.setTheme(yp()), Un("theme", { name: i }); let r = Bt('meta[name="theme-color"]'); r && (r.content = getComputedStyle(document.body).getPropertyValue("--bg").trim()) }; if (document.startViewTransition && !ke) { let r = (n = t == null ? void 0 : t.x) != null ? n : innerWidth - 60, a = (s = t == null ? void 0 : t.y) != null ? s : 40, o = Math.hypot(Math.max(r, innerWidth - r), Math.max(a, innerHeight - a)); document.startViewTransition(e).ready.then(() => document.documentElement.animate({ clipPath: [`circle(0px at ${r}px ${a}px)`, `circle(${o}px at ${r}px ${a}px)`] }, { duration: 900, easing: "cubic-bezier(.7,0,.2,1)", pseudoElement: "::view-transition-new(root)" })).catch(() => { }) } else e() } function Vb() { let i = null; try { i = localStorage.getItem("iu-theme") } catch { } let t = Po[i] ? i : qh("(prefers-color-scheme: light)").matches ? "pearl" : "nocturne"; document.body.dataset.theme = t, Se(".sw").forEach(e => { e.setAttribute("aria-pressed", String(e.dataset.theme === t)), e.addEventListener("click", n => { let s = e.getBoundingClientRect(); Io(e.dataset.theme, { x: s.left + s.width / 2, y: s.top + s.height / 2 }) }) }), window.addEventListener("keydown", e => { var n; if (e.key.toLowerCase() === "t" && !/input|textarea/i.test(((n = document.activeElement) == null ? void 0 : n.tagName) || "") && !e.metaKey && !e.ctrlKey) { let s = Object.keys(Po); Io(s[(s.indexOf(document.body.dataset.theme) + 1) % s.length]) } }) } var Xn = Is.map((i, t) => ({ ...i, index: t + 1 })), Co = -1, ur = null; function Hb() {
		let i = Bt("#grid"); if (!i) return; i.innerHTML = Xn.map(n =>`
    <article class="card rv${n.image ? " has-shot" : ""}" data-cat="${n.category}" data-id="${n.id}" style="--c1:${n.palette[0]};--c2:${n.palette[1]}">
      <button class="card-btn" type="button" aria-label="Open project ${se(n.title)}" data-tilt>
        <span class="poster"><img alt="${n.image ? "Screenshot of " + se(n.title) : ""}" loading="lazy" decoding="async" width="800" height="1000"><span class="glare"></span><em>${String(n.index).padStart(2, "0")}</em></span>
        <span class="meta"><b>${se(n.title)}</b><small>${se(n.kicker)}</small><span class="row"><i>${n.category === "ai" ? "AI / LLM" : "WEB"} \xB7 ${n.year}</i><span class="arrow" aria-hidden="true">\u2197</span></span></span>
      </button></article>`).join(""); let t = n => { let s = Bt("img", n); if (s && !s.src) { let r = Xn.find(a => a.id === n.dataset.id); r.image ? (s.onerror = () => { s.onerror = null, s.src = bo(r) || "" }, s.src = r.image) : (s.src = bo(r) || "", s.src || s.remove()) } }, e = "IntersectionObserver" in window ? new IntersectionObserver(n => n.forEach(s => { s.isIntersecting && (t(s.target), e.unobserve(s.target)) }), { rootMargin: "300px" }) : null; Se(".card", i).forEach(n => e ? e.observe(n) : t(n)), i.addEventListener("click", n => { let s = n.target.closest(".card"); s && Wr(s.dataset.id) }), Se(".filter").forEach(n => n.addEventListener("click", () => { Se(".filter").forEach(s => s.setAttribute("aria-pressed", String(s === n))), Se(".card", i).forEach(s => { let r = n.dataset.f === "all" || s.dataset.cat === n.dataset.f; s.hidden = !r }) }))
	} function Wr(i) {
		var r; let t = Bt("#modal"); if (Co = Xn.findIndex(a => a.id === i), Co < 0 || !t) return; let e = Xn[Co], n = []; e.links.live && n.push(`<a class="btn solid" href="${se(e.links.live)}" target="_blank" rel="noopener noreferrer">Live demo \u2197</a>`), e.links.github && n.push(`<a class="btn" href="${se(e.links.github)}" target="_blank" rel="noopener noreferrer">Source code \u2197</a>`), n.length || n.push('<a class="btn" href="#contact" data-close>Ask for a demo</a>'); let s = e.image || bo(e); Bt("#modal-body").innerHTML =`
    <div class="m-poster" data-tilt>${s ? `<img src="${se(s)}" alt="${e.image ? "Screenshot of" : "Generative artwork for"} ${se(e.title)}">` : ""}<span class="glare"></span></div>
    <div class="m-info">
      <p class="eyebrow">${String(e.index).padStart(2, "0")} / ${String(Xn.length).padStart(2, "0")} \xB7 ${se(e.status)}</p>
      <h3 id="modal-title">${se(e.title)}</h3><p class="m-kick">${se(e.kicker)}</p>
      <p>${se(e.summary)}</p>
      ${e.story ? `<div class="m-story"><div><h4>Challenge</h4><p>${se(e.story.challenge)}</p></div><div><h4>Approach</h4><p>${se(e.story.approach)}</p></div><div><h4>What I learned</h4><p>${se(e.story.learned)}</p></div></div>` : ""}
      <h4>What I built</h4><ul>${e.bullets.map(a => `<li>${se(a)}</li>`).join("")}</ul>
      <h4>Role</h4><p>${se(e.role)}</p>
      <h4>Stack</h4><ul class="tags">${e.stack.map(a => `<li>${se(a)}</li>`).join("")}</ul>
      <div class="m-links">${n.join("")}</div>
      ${e.status === "Case study" ? '<p class="note">Case study \u2014 no public demo link yet. Ask me for a walkthrough.</p>' : ""}
    </div>`, history.replaceState(null, "", `#project=${e.id}`), Un("project_open", { id: e.id }), ur = document.activeElement, t.hidden = !1, document.body.classList.add("modal-open"), requestAnimationFrame(() => t.classList.add("open")), Pe == null || Pe.stop(), (r = Bt("#modal-close")) == null || r.focus(), Se("[data-close]", t).forEach(a => a.addEventListener("click", Ro)), bp(Bt("#modal-body"))
	} function Ro() { var t; let i = Bt("#modal"); !i || i.hidden || (i.classList.remove("open"), document.body.classList.remove("modal-open"), Pe == null || Pe.start(), location.hash.startsWith("#project=") && history.replaceState(null, "", location.pathname + location.search), setTimeout(() => { i.hidden = !0 }, ke ? 0 : 450), (t = ur == null ? void 0 : ur.focus) == null || t.call(ur, { preventScroll: !0 })) } function Ao(i) { Wr(Xn[(Co + i + Xn.length) % Xn.length].id) } function Gb() { var i, t, e, n, s; (i = Bt("#modal-close")) == null || i.addEventListener("click", Ro), (t = Bt("#modal-share")) == null || t.addEventListener("click", () => { var a; let r = location.href; (((a = navigator.clipboard) == null ? void 0 : a.writeText(r)) || Promise.resolve()).then(() => zi == null ? void 0 : zi.toast("Link to this project copied")) }), window.addEventListener("hashchange", xp), (e = Bt("#modal-prev")) == null || e.addEventListener("click", () => Ao(-1)), (n = Bt("#modal-next")) == null || n.addEventListener("click", () => Ao(1)), (s = Bt("#modal")) == null || s.addEventListener("click", r => { r.target.id === "modal" && Ro() }), window.addEventListener("keydown", r => { let a = Bt("#modal"); if (!(!a || a.hidden) && (r.key === "Escape" && Ro(), r.key === "ArrowRight" && Ao(1), r.key === "ArrowLeft" && Ao(-1), r.key === "Tab")) { let o = Se("button, a[href]", a).filter(h => !h.disabled && h.offsetParent !== null); if (!o.length) return; let l = o[0], c = o[o.length - 1]; r.shiftKey && document.activeElement === l ? (c.focus(), r.preventDefault()) : !r.shiftKey && document.activeElement === c && (l.focus(), r.preventDefault()) } }) } function xp() { let i = /^#project=([a-z0-9-]+)$/.exec(location.hash); i && Xn.some(t => t.id === i[1]) && Wr(i[1]) } function Wb() { if (ke || !Xr || !Bt(".card.has-shot")) return; document.body.insertAdjacentHTML("beforeend", '<svg width="0" height="0" aria-hidden="true" style="position:absolute"><filter id="iu-distort"><feTurbulence type="fractalNoise" baseFrequency="0.012 0.02" numOctaves="1" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="0" id="iu-disp"/></filter></svg>'); let i = Bt("#iu-disp"), t = { v: 0 }; Se(".card.has-shot").forEach(e => { let n = Bt("img", e); e.addEventListener("pointerenter", () => { n.style.filter = "url(#iu-distort)", xe.to(t, { v: 38, duration: .5, ease: "power2.out", onUpdate: () => i.setAttribute("scale", t.v.toFixed(1)) }) }), e.addEventListener("pointerleave", () => xe.to(t, { v: 0, duration: .6, ease: "power2.inOut", onUpdate: () => i.setAttribute("scale", t.v.toFixed(1)), onComplete: () => { n.style.filter = "" } })) }) } function bp(i = document) { !Xr || ke || Se("[data-tilt]", i).forEach(t => { t.dataset.tiltBound || (t.dataset.tiltBound = "1", t.addEventListener("pointermove", e => { let n = t.getBoundingClientRect(), s = (e.clientX - n.left) / n.width, r = (e.clientY - n.top) / n.height; t.style.setProperty("--rx", `${((.5 - r) * 12).toFixed(2)}deg`), t.style.setProperty("--ry", `${((s - .5) * 14).toFixed(2)}deg`), t.style.setProperty("--gx", `${(s * 100).toFixed(0)}%`), t.style.setProperty("--gy", `${(r * 100).toFixed(0)}%`) }), t.addEventListener("pointerleave", () => { t.style.setProperty("--rx", "0deg"), t.style.setProperty("--ry", "0deg") })) }) } function Xb() { let i = Bt("#cur-dot"), t = Bt("#cur-ring"); if (!Xr || !i || !t) return document.body.classList.add("no-cursor"); document.body.classList.add("has-cursor"); let e = xe.quickTo(t, "x", { duration: .35, ease: "power3" }), n = xe.quickTo(t, "y", { duration: .35, ease: "power3" }); window.addEventListener("pointermove", s => { i.style.transform = `translate(${s.clientX}px,${s.clientY}px)`, e(s.clientX), n(s.clientY) }), document.addEventListener("pointerover", s => t.classList.toggle("big", !!s.target.closest("a, button, [data-tilt], input, textarea, select"))) } function qb() { !Xr || ke || Se("[data-magnetic]").forEach(i => { i.addEventListener("pointermove", t => { let e = i.getBoundingClientRect(); xe.to(i, { x: (t.clientX - e.left - e.width / 2) * .3, y: (t.clientY - e.top - e.height / 2) * .35, duration: .3 }) }), i.addEventListener("pointerleave", () => xe.to(i, { x: 0, y: 0, duration: .6, ease: "elastic.out(1,.5)" })) }) } function $b() { let i = Se(".rv"); if (!("IntersectionObserver" in window) || ke) return i.forEach(n => n.classList.add("in")); Se("[data-stagger]").forEach(n => Se(".rv", n).forEach((s, r) => s.style.setProperty("--d", `${r * 70}ms`))); let t = new IntersectionObserver(n => n.forEach(s => { s.isIntersecting && (s.target.classList.add("in"), t.unobserve(s.target)) }), { threshold: .12, rootMargin: "0px 0px -6% 0px" }); i.forEach(n => t.observe(n)); let e = new IntersectionObserver(n => n.forEach(s => { if (!s.isIntersecting) return; e.unobserve(s.target); let r = +s.target.dataset.count, a = { v: 0 }; xe.to(a, { v: r, duration: 1.4, ease: "power2.out", onUpdate: () => s.target.textContent = Math.round(a.v) }) }), { threshold: .6 }); Se("[data-count]").forEach(n => e.observe(n)) } function Yb() { let i = ["home", "about", "skills", "work", "code", "lab", "match", "journey", "proof", "journal", "contact"], t = i.map(n => document.getElementById(n)).filter(Boolean); if (!("IntersectionObserver" in window)) return; let e = new IntersectionObserver(n => n.forEach(s => { s.isIntersecting && (Re == null || Re.setSection(s.target.id), document.body.dataset.section = s.target.id, Se(".nav-links a").forEach(r => r.classList.toggle("active", r.getAttribute("href") === `#${s.target.id}`))) }), { rootMargin: "-45% 0px -45% 0px" }); t.forEach(n => e.observe(n)) } function Zb() { let i = Bt("#to-top"), t = Bt("#progress"), e = () => { let n = window.scrollY, s = document.documentElement.scrollHeight - innerHeight; t && (t.style.transform = `scaleX(${s > 0 ? n / s : 0})`), i == null || i.classList.toggle("show", n > innerHeight * .8), document.body.classList.toggle("scrolled", n > 40) }; window.addEventListener("scroll", e, { passive: !0 }), e(), ke || (Pe = new dd({ lerp: .09, smoothWheel: !0 }), xe.ticker.add(n => Pe.raf(n * 1e3)), xe.ticker.lagSmoothing(0)), Se('a[href^="#"]').forEach(n => n.addEventListener("click", s => { let r = n.getAttribute("href"); if (r.length < 2) return; let a = document.querySelector(r); a && (s.preventDefault(), $h(), Pe ? Pe.scrollTo(a, { duration: 1.3 }) : a.scrollIntoView({ behavior: ke ? "auto" : "smooth" }), history.replaceState(null, "", r)) })), i == null || i.addEventListener("click", () => Pe ? Pe.scrollTo(0, { duration: 1.4 }) : window.scrollTo({ top: 0, behavior: "smooth" })) } function Jb(i) { let t = document.getElementById(i); !t || t.hidden || ($h(), Pe ? Pe.scrollTo(t, { duration: 1.3 }) : t.scrollIntoView({ behavior: ke ? "auto" : "smooth" })) } function jb(i) { i ? Pe == null || Pe.stop() : Pe == null || Pe.start() } function $h() { var i; document.body.classList.remove("menu-open"), (i = Bt("#burger")) == null || i.setAttribute("aria-expanded", "false") } function Kb() { let i = Bt("#burger"); i && (i.addEventListener("click", () => { let t = document.body.classList.toggle("menu-open"); i.setAttribute("aria-expanded", String(t)) }), window.addEventListener("keydown", t => { t.key === "Escape" && $h() })) } function Qb() { window.addEventListener("pointermove", i => { if (Re == null || Re.setPointer(i.clientX / innerWidth * 2 - 1, -(i.clientY / innerHeight * 2 - 1)), Xr && !ke) { let t = Bt(".hero-title"); t && (t.style.transform = `translate3d(${(i.clientX / innerWidth - .5) * -26}px, ${(i.clientY / innerHeight - .5) * -14}px, 0)`) } }, { passive: !0 }), window.addEventListener("pointerleave", () => Re == null ? void 0 : Re.setPointer(9, 9)), window.addEventListener("resize", () => Re == null ? void 0 : Re.resize()) } function tS() {
		let i = Bt("#contact-form"); if (!i) return; let t = Bt("#form-status"), e = Bt('button[type="submit"]', i), n = { name: r => r.trim().length >= 2 ? "" : "Please enter your name.", email: r => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(r.trim()) ? "" : "Please enter a valid email address.", type: r => r ? "" : "Choose a project type.", message: r => r.trim().length >= 10 ? "" : "Tell me a little more (at least 10 characters)." }, s = r => { let a = i.elements[r], o = n[r](a.value), l = Bt(`#err-${r}`); return l && (l.textContent = o), a.setAttribute("aria-invalid", String(!!o)), !o }; Object.keys(n).forEach(r => { var a, o; (a = i.elements[r]) == null || a.addEventListener("blur", () => s(r)), (o = i.elements[r]) == null || o.addEventListener("input", () => { i.elements[r].getAttribute("aria-invalid") === "true" && s(r) }) }), i.addEventListener("submit", async r => {
			var l, c; if (r.preventDefault(), (l = i.elements.company) != null && l.value) return; if (!Object.keys(n).map(s).every(Boolean)) { t.className = "form-status err", t.textContent = "Please fix the highlighted fields.", (c = i.querySelector('[aria-invalid="true"]')) == null || c.focus(); return } let o = Object.fromEntries(["name", "email", "type", "message"].map(h => [h, i.elements[h].value.trim()])); e.disabled = !0, t.className = "form-status", t.textContent = "Sending\u2026"; try {
				if (ne.formEndpoint) { if (!(await fetch(ne.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(o) })).ok) throw new Error("send failed"); t.className = "form-status ok", t.textContent = "Message sent \u2014 thank you! I will reply soon.", i.reset() } else {
					let h = `${o.message}

\u2014 ${o.name} (${o.email})
Project type: ${o.type}`; window.location.href = `mailto:${ne.email}?subject=${encodeURIComponent("Portfolio enquiry: " + o.type)}&body=${encodeURIComponent(h)}`, t.className = "form-status ok", t.textContent = "Your email app should open with the message ready to send."
				}
			} catch { t.className = "form-status err", t.textContent = `Could not send right now. Please email ${ne.email} directly.` } e.disabled = !1
		})
	} function eS() { let i = Bt("#loader"), t = Bt("#ld-num"), e = Bt(".ld-fg"), n = Bt("#ld-word"), s = Bt("#ld-skip"), r = ["Hello", "Salaam", "Namaste", "Hola", "Ciao", "Iman"], a = !1, o = () => { var h; a || (a = !0, document.body.classList.remove("is-loading"), document.body.classList.add("is-ready"), i && (i.classList.add("done"), setTimeout(() => i.remove(), ke ? 0 : 1100)), (h = Bt(".hero")) == null || h.classList.add("is-in"), document.body.classList.add("hero-in")) }; if (!i) return o(); s == null || s.addEventListener("click", () => { c == null || c.progress(1), o() }); let l = { v: 0 }, c = xe.to(l, { v: 100, duration: ke ? .3 : 2.4, ease: "power1.inOut", onUpdate() { let h = Math.round(l.v); t && (t.textContent = h), e && (e.style.strokeDashoffset = String(339.3 * (1 - l.v / 100))), n && (n.textContent = r[Math.min(r.length - 1, Math.floor(l.v / (100 / r.length)))]) }, onComplete: () => setTimeout(o, ke ? 0 : 250) }) } function vp() { kb(), Bb(), zb(), Hb(), Gb(), Vb(), tS(), Kb(); try { Re = Yf(Bt("#gl"), { reduced: ke }) } catch { Re = null } Re ? Re.setTheme(yp()) : document.body.classList.add("no-webgl"), zi = _p({ projects: Xn, getScene: () => Re, setTheme: t => Io(t), openProject: Wr, goTo: Jb, pauseScroll: jb, reduced: ke }), zi.init(), Zb(), Yb(), $b(), Qb(), Xb(), qb(), bp(), Wb(); let i = sp({ config: ne, projects: Is, knowledge: Qi, suggestions: _d, themes: Po, setTheme: t => Io(t), openProject: Wr, onIntent: t => zi.onIntent(t), getLang: () => zi.lang, reduced: ke }); zi.attachLab(i), eS(), xp() } document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", vp) : vp();
})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
